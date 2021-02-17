// Callback Function
function taskOne() {
  console.log('task1')
}
function taskTwo() {
  console.log('task2')
}
setTimeout(taskOne, 2000)

//   taskOne();
taskTwo()

//   JS Callback exmp:
const message = function () {
  console.log('I am a Rider')
}
setTimeout(message, 3000)
