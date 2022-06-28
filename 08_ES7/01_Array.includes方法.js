// ES7之前判断数组中是否有某个元素，是indexof
const arr = ["abb", "bcc", "ccd", NaN];

if (arr.indexOf("bcc") !== -1) {
  console.log("indexOf ---- arr includes bcc");
}

if (arr.includes("bcc")) {
  console.log("includes ---- arr includes bcc");
}

//! 区别：includes可以判断NAN的存在
if (arr.indexOf(NaN) !== -1) {
  console.log("indexOf ---- arr includes NAN");
}

if (arr.includes(NaN)) {
  console.log("includes ---- arr includes NAN");
}
