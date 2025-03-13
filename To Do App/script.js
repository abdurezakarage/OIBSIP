// script.js
document.addEventListener("DOMContentLoaded", () => {
  const todoForm = document.getElementById("todo-form");
  const pendingList = document.getElementById("pending-list");
  const completedList = document.getElementById("completed-list");

  // Add a task when the form is submitted
  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value.trim();
    const description = document.getElementById("description").value.trim();

    if (title && description) {
      addTask(title, description);
      todoForm.reset();
    } else {
      alert("Please fill in both Title and Description.");
    }
  });

  // Function to add a new task
  function addTask(title, description) {
    const li = document.createElement("li");
    li.innerHTML = `
            <span><strong>${title}</strong>: ${description}</span>
            <div class="actions">
                <button class="complete-btn">Complete</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;
    pendingList.appendChild(li);

    // Add event listeners to the buttons
    const completeButton = li.querySelector(".complete-btn");
    const deleteButton = li.querySelector(".delete-btn");

    completeButton.addEventListener("click", () => completeTask(li));
    deleteButton.addEventListener("click", () => deleteTask(li));
  }

  // Function to mark a task as complete
  function completeTask(taskItem) {
    completedList.appendChild(taskItem);
    const completeButton = taskItem.querySelector(".complete-btn");
    completeButton.remove(); // Remove the "Complete" button after moving the task
  }

  // Function to delete a task
  function deleteTask(taskItem) {
    taskItem.remove();
  }
});
