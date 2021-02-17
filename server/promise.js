// Promise Example:
const myPromise = new Promise((resolve, reject) => {
  let connection = false

  if (connection) {
    resolve('Connection Established')
  } else {
    reject('Connection Refused')
  }
})

myPromise
  .then((message) => {
    console.log(message)
  })
  .catch((message) => {
    console.log(message)
  })
