import { requireAuth } from "../authState.js";
import { fetchTasksOnce } from "../data.js";
import { alertDisplay } from "../errorAlert.js";
import { addDoc, auth, collection, db, deleteDoc, doc, serverTimestamp } from "../firebase.js";
import { formatTaskDate, getTimeAgo } from "../utils.js";

const dateElement = document.getElementById("nav-date");
const taskTitle = document.getElementById("taskTitle");
const taskDesc = document.getElementById("taskDesc");
const taskPriority = document.getElementById("taskPriority");
const taskStatus = document.getElementById("taskStatus");
const taskImage = document.getElementById("taskImage");
const createTaskBtn = document.getElementById("createTaskBtn");
const articleContent = document.getElementById("dashboard-article-list");
const taskStatusDiv = document.getElementById("taskStatusDic");
const completedTask = document.getElementById("completedTask");
const btnWhatsappInvite = document.getElementById("btnWhatsappInvite");

let data = [];

const defaultImagedata =
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=160&auto=format&fit=crop&q=80";

if (articleContent) {
  articleContent.innerHTML = `
    <div class="d-flex justify-content-center align-items-center py-5">
      <div class="spinner-border" style="color: #ff5e5e;" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>`;
}

if (dateElement) {
  const now = new Date();
  const dayName = now.toLocaleDateString("en-US", { weekday: "long" });
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();

  dateElement.innerHTML = `
    <span class="day d-block">${dayName}</span>
    <span class="full-date d-block">${day}/${month}/${year}</span>
  `;
}

function renderTasksToUI() {
  if (!articleContent) return;

  if (!data || data.length === 0) {
    articleContent.innerHTML = `
      <div class="text-center py-5 text-muted">
        <i class="bi bi-clipboard-x fs-1 d-block mb-2"></i>
        <p class="m-0">No tasks found. Click "+ Add task" to create one!</p>
      </div>`;
    return;
  }

  articleContent.innerHTML = data
    .map((item) => {
      const { title, desc, image, priority, status, createdAt } = item;

      let indicatorClass = "indicator-red";
      if (status === "In Progress") indicatorClass = "indicator-blue";
      if (status === "Completed") indicatorClass = "indicator-green";

      return `
        <article class="task-card">
          <div class="card-status-indicator ${indicatorClass}"></div>
          <div class="card-body-custom">
            <div class="card-header-row">
              <h3 class="task-title">${title || "Untitled"}</h3>
                            <div class="dropdown">
              <button class="more-options" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-three-dots"></i>
              </button>
                <ul class="dropdown-menu">
    <li class="dropdown-item " onclick="deleteTask('${item?.id}')">Delete</li>
  </ul>
              </div>
            </div>
            <p class="task-description">
              ${desc || "No description provided."}
            </p>
            <div class="task-metadata">
              <span class="meta-item">
                Priority: <strong class="priority-moderate">${priority || "Moderate"}</strong>
              </span>
              <span class="meta-item">
                Status: <strong class="status-not-started">${status || "Not Started"}</strong>
              </span>
              <span class="meta-item created-date">
                Created on: ${formatTaskDate(createdAt)}
              </span>
            </div>
          </div>
          <div class="task-thumbnail-wrapper">
            <img
              src="${image || defaultImagedata}"
              onerror="this.onerror=null; this.src='${defaultImagedata}';"
              alt="Task thumbnail"
              class="task-thumbnail"
            />
          </div>
        </article>`;
    })
    .join("");
}

requireAuth("./login.html", async (user) => {
  try {
    const tasks = await fetchTasksOnce(user?.uid, "tasks");
    data = tasks || [];
    renderTasksToUI();
    console.log(data);
    filterStatus();
  } catch (err) {
    console.error("Tasks fetch error:", err);
    articleContent.innerHTML = `<p class="text-danger text-center">Failed to load tasks.</p>`;
  }
});

async function addTask(e) {
  createTaskBtn.disabled = true
  if (e) e.preventDefault();
  try {
    const title = taskTitle?.value.trim();
    const desc = taskDesc?.value.trim();
    const priority = taskPriority?.value;
    const status = taskStatus?.value;
    const image = taskImage?.value.trim();

    if (!title || !desc) {
      return alertDisplay("error", "Please enter Title and Description");
    }

    const newTaskData = {
      userId: auth.currentUser ? auth.currentUser.uid : null,
      title: title,
      desc: desc,
      priority: priority || "Moderate",
      status: status || "Not Started",
      image: image || "",
      createdAt: new Date(),
    };

    const docRef = await addDoc(collection(db, "tasks"), {
      ...newTaskData,
      createdAt: serverTimestamp(),
    });

    alertDisplay("success", "Task successfully saved");
    console.log("Task ID:", docRef.id);

    data.unshift({ id: docRef.id, ...newTaskData });
    renderTasksToUI();
    filterStatus()
    taskTitle.value = "";
    taskDesc.value = "";
    if (taskImage) taskImage.value = "";

    const modalElement = document.getElementById("addTaskModal");
    if (modalElement) {
      const modalInstance = bootstrap.Modal.getInstance(modalElement);
      modalInstance?.hide();
    }
      createTaskBtn.disabled = false
  } catch (error) {
    console.error(error.message);
    alertDisplay("error", error.message);
  }
}

createTaskBtn?.addEventListener("click", addTask);

async function filterStatus() {
  taskStatusDiv.innerHTML = ""
  completedTask.innerHTML = ""
  if (!data || data?.length === 0) return;

  const total = data?.length;
  const counts = data.reduce(
    (acc, item) => {
      if (item?.status === "In Progress") acc.inProgress++;
      else if (item?.status === "Not Started") acc.notStarted++;
      else if (item?.status === "Completed") acc.completed++;
      return acc;
    },
    { inProgress: 0, notStarted: 0, completed: 0 },
  );
  const filterCompletedData = data?.filter((item) => {
    return item.status === "Completed";
  });
  console.log(filterCompletedData);

  const inProgressPct = Math.round((counts.inProgress / total) * 100);
  const notStartedPct = Math.round((counts.notStarted / total) * 100);
  const completedPct = Math.round((counts.completed / total) * 100);

  console.log({ inProgressPct, notStartedPct, completedPct });
  const c = 251.2;

  taskStatusDiv.innerHTML = `
  <!-- Completed -->
  <div class="text-center d-inline-block m-2">
    <div class="position-relative d-inline-flex align-items-center justify-content-center">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" class="stroke-light" stroke-width="8" stroke="#e9ecef" />
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" stroke-width="8"
                class="text-success circle-bar"
                stroke-dasharray="${c}"
                stroke-dashoffset="${c - (completedPct / 100) * c}"
                stroke-linecap="round"
                transform="rotate(-90 50 50)" />
      </svg>
      <span class="position-absolute fs-6 fw-bold text-dark">${completedPct}%</span>
    </div>
    <p class="mt-2 mb-0 small fw-semibold text-muted">
      <span class="d-inline-block rounded-circle bg-success me-1" style="width: 8px; height: 8px;"></span> Completed
    </p>
  </div>

  <!-- In Progress -->
  <div class="text-center d-inline-block m-2">
    <div class="position-relative d-inline-flex align-items-center justify-content-center">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke-width="8" stroke="#e9ecef" />
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" stroke-width="8"
                class="text-primary circle-bar"
                stroke-dasharray="${c}"
                stroke-dashoffset="${c - (inProgressPct / 100) * c}"
                stroke-linecap="round"
                transform="rotate(-90 50 50)" />
      </svg>
      <span class="position-absolute fs-6 fw-bold text-dark">${inProgressPct}%</span>
    </div>
    <p class="mt-2 mb-0 small fw-semibold text-muted">
      <span class="d-inline-block rounded-circle bg-primary me-1" style="width: 8px; height: 8px;"></span> In Progress
    </p>
  </div>

  <!-- Not Started -->
  <div class="text-center d-inline-block m-2">
    <div class="position-relative d-inline-flex align-items-center justify-content-center">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke-width="8" stroke="#e9ecef" />
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" stroke-width="8"
                class="text-danger circle-bar"
                stroke-dasharray="${c}"
                stroke-dashoffset="${c - (notStartedPct / 100) * c}"
                stroke-linecap="round"
                transform="rotate(-90 50 50)" />
      </svg>
      <span class="position-absolute fs-6 fw-bold text-dark">${notStartedPct}%</span>
    </div>
    <p class="mt-2 mb-0 small fw-semibold text-muted">
      <span class="d-inline-block rounded-circle bg-danger me-1" style="width: 8px; height: 8px;"></span> Not Started
    </p>
  </div>
`;

  filterCompletedData.map((item) => {
    const { title, desc, image, status, createdAt } = item;
    const formatDate = getTimeAgo(createdAt)
    console.log(formatDate);
    
    return (completedTask.innerHTML += `<article class="task-card">
                  <div class="card-status-indicator indicator-green"></div>
                  <div class="card-body-custom">
                    <div class="card-header-row">
                      <h3 class="task-title">${title}</h3>
                      <button class="more-options">
                        <i class="bi bi-three-dots"></i>
                      </button>
                    </div>
                    <p class="task-description">
                      ${desc}
                    </p>
                    <div class="task-metadata">
                      <span class="meta-item"
                        >Status:
                        <strong class="status-completed"
                          >${status}</strong
                        ></span
                      >
                      <span class="meta-item created-date"
                        >Completed ${formatDate}</span
                      >
                    </div>
                  </div>
                  <div class="task-thumbnail-wrapper">
            <img
              src="${image || defaultImagedata}"
              onerror="this.onerror=null; this.src='${defaultImagedata}';"
              alt="Task thumbnail"
              class="task-thumbnail"
            />
                  </div>
                </article>`);
  });
}


window.deleteTask = async function(taskId) {

  try {
    await deleteDoc(doc(db, "tasks", taskId));
    console.log("Task successfully deleted from Firebase!");
    data = data.filter(item => item.id !== taskId);
    alertDisplay("success", "Task deleted successfully!");
    renderTasksToUI();
    filterStatus()
    
  } catch (error) {
    console.log("Error status:", error.message);
  }
};

function userInvite() {
  const shareUrl = window.location.href; 
const message = 
`Hi there,

We’ve put together a central dashboard to keep track of our project milestones, daily tasks, and live progress in one place. 

Have a look when you get a moment and join the workspace here:
${shareUrl}

Cheers,`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank");
}
btnWhatsappInvite.addEventListener("click" , userInvite)