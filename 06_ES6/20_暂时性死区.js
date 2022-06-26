{
  // 使用let const 声明的变量在声明之前不可访问。
  console.log(i);
  let i = 0; // ReferenceError: Cannot access 'i' before initialization
}
