let someValue: any = 'this is a string'
// let strLength: number = (<string>someValue).length;
let strLength: number = someValue.length

function myFunc(maybeString: string | undefined | null) {
  // Type 'string | null | undefined' is not assignable to type 'string'.
  // Type 'undefined' is not assignable to type 'string'.
  const onlyString: string = maybeString // Error
  const ignoreUndefinedAndNull: string = maybeString! // Ok
}
myFunc('32')

function simpleExample(a: number | undefined) {
  const b: number = a // COMPILATION ERROR: undefined is not assignable to number.
  const c: number = a! // OK
}

type NumGenerator = () => number

function myFunc1(numGenerator: NumGenerator | undefined) {
  const num1 = numGenerator() //compilation error: cannot invoke an object which is possibly undefined
  const num2 = numGenerator!() //no problem
}

let ss: number
initialized()
// Variable 'x' is used before being assigned.(2454)
console.log(2 * ss) // Error

function initialized() {
  ss = 10
}

type LongHand = {
  dd(a: number): void
  mm(a: number): void
}
