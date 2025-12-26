function login() {
  const password = document.getElementById("password").value;
  const box = document.querySelector(".login-box");
  const error = document.getElementById("error");

  if (password === "8036") {
    window.location.href = "dashboard.html"; // admin dashboard
  } else {
    error.style.display = "block";
    box.classList.add("shake");

    setTimeout(() => {
      box.classList.remove("shake");
    }, 300);
  }
}