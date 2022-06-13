var obj = { name: "hhhh", age: 27 };

function foo() {
  function bar() {
    // 先到obj中查找（现在已经不推荐了）
    with (obj) {
      console.log(age);
    }
  }
  bar();
}
foo(); // 27
