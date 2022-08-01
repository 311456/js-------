const btn = document.querySelector("button");
btn.onclick = function () {
  console.log("login");
  localStorage.setItem("local name", "local");
  sessionStorage.setItem("session name", "session");
};