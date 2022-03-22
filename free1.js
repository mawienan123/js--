// const original = { a: 1, b: 2 }
// const copy = Object.assign(original, { c: 3 }) // this mutates `original` ಠ_ಠ
// delete copy.a; // so does this
// console.log(original)

// try {
//     throw 2
// } catch (error) {
//     console.log(error)
// }

// console.log(3)

// const preventJOONError = (val) => {
//   let flag = true;
//   try {
//     JSON.parse(val);
//   } catch (error) {
//     flag = false;
//   }
//   return flag;
// };
// const a = {"a":2}
// console.log(JSON.stringify(a))
// console.log(preventJOONError(a));
// const a=[1,2,3]
// const b=[...a]
// b.push(4)
// console.log(a)
// console.log(b)


const a={d:1}
const b={...a}
b.name='2'
console.log(a)
console.log(b)

