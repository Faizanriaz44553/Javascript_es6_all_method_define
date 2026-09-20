import { requireAuth } from "../authState.js";
import { fetchTasksOnce } from "../data.js";
import { alertDisplay } from "../errorAlert.js";
import { addDoc, auth, collection, db, serverTimestamp } from "../firebase.js";
import { formatTaskDate } from "../utils.js";

const dateElement = document.getElementById("nav-date");
const taskTitle = document.getElementById("taskTitle");
const taskDesc = document.getElementById("taskDesc");
const taskPriority = document.getElementById("taskPriority");
const taskStatus = document.getElementById("taskStatus");
const taskImage = document.getElementById("taskImage");
const createTaskBtn = document.getElementById("createTaskBtn");
const articleContent = document.getElementById("dashboard-article-list");

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
              <button class="more-options">
                <i class="bi bi-three-dots"></i>
              </button>
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
    .join(""); // <-- Array ko HTML string mein join karein
}

requireAuth("./login.html", async (user) => {
  try {
    const tasks = await fetchTasksOnce(user?.uid, "tasks");
    data = tasks || [];
    renderTasksToUI();
  } catch (err) {
    console.error("Tasks fetch error:", err);
    articleContent.innerHTML = `<p class="text-danger text-center">Failed to load tasks.</p>`;
  }
});

async function addTask(e) {
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
    taskTitle.value = "";
    taskDesc.value = "";
    if (taskImage) taskImage.value = "";

    const modalElement = document.getElementById("addTaskModal");
    if (modalElement) {
      const modalInstance = bootstrap.Modal.getInstance(modalElement);
      modalInstance?.hide();
    }
  } catch (error) {
    console.error(error.message);
    alertDisplay("error", error.message);
  }
}

createTaskBtn?.addEventListener("click", addTask);
