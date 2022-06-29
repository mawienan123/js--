// enum Direction {
//   NORTH,
//   SOUTH,
//   EAST,
//   WEST,
// }
console.log(0 /* a */)

const a = { a: 1 }
const b = { a: 1 }
console.log(a == b)
console.log(a === b)

const ma = () => {
  for (let a = 0; a < 99; a++) {
    if (a == 22) {
      console.log(222)
      continue
    }
    if (a == 23) {
      console.log(333)
      return 'ppp'
    }
  }
}

console.log(ma())
