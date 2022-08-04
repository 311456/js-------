const divEl = document.querySelector(".box");
const spanEl = document.querySelector(".span");
// 冒泡(span --> window)
window.addEventListener("click", () => {
  console.log("冒泡：addev..----window");
});
divEl.addEventListener("click", () => {
  console.log("冒泡：addev..-----div");
});
spanEl.addEventListener("click", () => {
  console.log("冒泡：addev..-----span");
});

// 捕获(window --> span)
window.addEventListener(
  "click",
  () => console.log("捕获：addev..----window"),
  true
);
divEl.addEventListener(
  "click",
  () => console.log("捕获：addev..-----div"),
  true
);
spanEl.addEventListener(
  "click",
  () => console.log("捕获：addev..-----span"),
  true
);
