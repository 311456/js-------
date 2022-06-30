// 可选链
const obj = {
  name: "ha",
  // friend: {},
};
// 不确定obj中是否有friend
console.log(obj.friend.name); // TypeError: Cannot read properties of undefined (reading 'name')
console.log(obj.friend?.name); // undefined
