// 方式二：
const divEl = document.querySelector(".box");
const spanEl = document.querySelector(".span");
// divEl.onclick = function () {
//   console.log("onclick method----div");
// };
// spanEl.onclick = function () {
//   console.log("onclick method----span");
// };

// 方式三：
window.addEventListener("click", () => {
  console.log("冒泡：addev..----window");
});

divEl.addEventListener("click", () => {
  console.log("冒泡：addev..-----div");
});
spanEl.addEventListener("click", () => {
  console.log("冒泡：addev..-----span");
});
spanEl.addEventListener("click", () => {
  console.log("冒泡：addev..-----span2");
});
