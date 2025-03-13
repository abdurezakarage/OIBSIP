// Check if the user is logged in when the page loads
document.addEventListener("DOMContentLoaded", () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn === "true") {
    window.location.href = "secure.html";
  }
});

// Register a new user
function register() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (!username || !password) {
    displayMessage("Please enter both username and password.", "error");
    return;
  }

  // Check if the user already exists
  const users = JSON.parse(localStorage.getItem("users")) || {};
  if (users[username]) {
    displayMessage("Username already exists. Please choose another.", "error");
    return;
  }

  // Save the user to localStorage
  users[username] = password;
  localStorage.setItem("users", JSON.stringify(users));
  displayMessage("Registration successful! You can now log in.", "success");
}

// Log in an existing user
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (!username || !password) {
    displayMessage("Please enter both username and password.", "error");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || {};
  if (users[username] && users[username] === password) {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", username);
    window.location.href = "secure.html";
  } else {
    displayMessage("Invalid username or password.", "error");
  }
}

// Log out the current user
function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
}

// Display error or success messages
function displayMessage(message, type) {
  const errorMessage = document.getElementById("errorMessage");
  errorMessage.textContent = message;
  errorMessage.className = type; // Set the class to 'error' or 'success'
}
