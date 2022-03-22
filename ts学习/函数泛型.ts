function identity<T>(arg: T): T {
  return arg;
}
// function ma(){

// }

let myIdentity: <T>(arg: T) => T = identity;


interface GenericInterface<U> {
  value: U
  getIdentity: () => U
}

class IdentityClass<T> implements GenericInterface<T> {
  value: T

  constructor(value: T) {
    this.value = value
  }

  getIdentity(): T {
    return this.value
  }

}

interface Length {
  length: number;
}

function identity1<T extends Length>(arg: T): T {
  console.log(arg.length); // 可以获取length属性
  return arg;
}



