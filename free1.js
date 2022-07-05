const a = { name: 1, age: 3, c: { m: 1 } }
const b = a
b.name = 2
console.log(a === b)

console.log(a)
console.log(b)
