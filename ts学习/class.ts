//  class Person {

//   constructor(public name2: string){

//   }

//   // 抽象方法
// }

// class Developer {
//   constructor(public name: string) {
//     // super(name);
//   }

//   say(words: string): void {
//     console.log(`${this.name} says ${words}`);
//   }
// }

// const lolo = new Developer("lolo");
// lolo.say("I love ts!"); // lolo says I love ts!
// class GenericNumber<T> {
//   zeroValue: T;
//   add: (x: T, y: T) => T;
// }

// let myGenericNumber = new GenericNumber<number>();
// // myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function (x, y) {
//   return x + y;
// };
// myGenericNumber.add(1,2)

class Person {
  public name: string
  // 私有属性，不能被外部访问
  private age: number
  // 与private区别 只允许在子类中访问成员
  protected gender: boolean
  // 只读属性
  readonly sex: string
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
    this.gender = true
  }
  say(msg: string): void {
    console.log(this.gender)
    console.log(this.age)
    console.log(this.name, msg)
  }
  static create(name: string, age: number) {
    return new Person(name, age)
  }
}

class Ma extends Person {
  constructor(name: string, age: number) {
    super(name, age)
  }
  s(msg: string): void {
    console.log(this.gender)
  }
}
// class Students = new Person();
const ym = new Person('name1', 20)
const ym1 = new Person('name21', 30)
// ym.say('ddd')
ym1.say('2')
