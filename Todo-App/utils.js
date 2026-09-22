export function formatTaskDate(timestamp) {
  if (!timestamp) return "Just now";
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const time = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return `${day}/${month}/${year} • ${time}`;
}
export function getTimeAgo(dateInput) {
  if (!dateInput) return "Date not available";
  const pastDate = dateInput.toDate ? dateInput.toDate() : new Date(dateInput);
  const currentDate = new Date();
  const diffInMs = currentDate - pastDate;
  if (diffInMs < 0) return "Just now";
  const diffInSeconds = Math.floor(diffInMs / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours   = Math.floor(diffInMinutes / 60);
  const diffInDays    = Math.floor(diffInHours / 24);
  if (diffInDays === 0) {
    if (diffInHours === 0) {
      return diffInMinutes <= 1 ? "Just now" : `${diffInMinutes} minutes ago`;
    }
    return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`;
  } else if (diffInDays === 1) {
    return "Yesterday";
  } else if (diffInDays < 30) {
    return `${diffInDays} days ago`;
  } else {
    return pastDate.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });
  }
}