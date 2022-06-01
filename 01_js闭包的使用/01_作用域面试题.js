// var a = 100
// function foo() {
//   console.log(a) // 
//   return
//   var a = 200
// }
// foo()


function foo() {
  var a = b = 100
}
foo()
console.log(b) // 100
console.log(a) // a is not defined
