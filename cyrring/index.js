const cyrring = function (x, y) {
  console.log(x * y)
}

// const multiplyCyrring = function (x, y) {
//   console.log(x * y)
// }

const testmode = cyrring.bind(this, 2)
testmode(5)