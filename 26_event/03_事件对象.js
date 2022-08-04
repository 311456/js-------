const divEl = document.querySelector(".box");
const spanEl = document.querySelector(".span");

// 属性
spanEl.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.type);
  console.log("span-----", event.target);
  console.log("span-----", event.currentTarget);
  console.log(event.offsetX, event.offsetY);
  // 阻止冒泡
  event.stopPropagation();
});
divEl.addEventListener("click", (event) => {
  console.log("div-----", event.target); // 事件发生的元素
  console.log("div-----", event.currentTarget); // 处理事件的元素
});

// 方法
const aEL = document.querySelector("a");
aEL.addEventListener("click", (e) => {
  e.preventDefault();
});
