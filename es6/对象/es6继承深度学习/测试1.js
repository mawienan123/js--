//todo super虽然代表了父类A的构造函数，但是返回的是子类B的实例，即super内部的this指的是B的实例，因此super()在这里相当于A.prototype.constructor.call(this)。

// class A {
//   constructor() {
//     console.log(new.target.name)
//   }
// }
// class B extends A {
//   constructor() {
//     super()
//   }
// }
// new A() // A
// new B() // B

// todo super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。
// class A {
//   constructor() {
//     this.b = 3
//   }
//   p() {
//     console.log(this)
//     return this.a
//   }

//   static bb() {
//     console.log(this)
//     return this.a
//   }
// }

// class B extends A {
//   constructor() {
//     super()
//     this.a = 2
//     // console.log(super.p) // 2
//   }
//   static cc() {
//     super.bb()
//   }
//   //   dd() {
//   //     super.p()
//   //   }
// }

// let b = new B()
// B.cc()

// todo 在子类普通方法中通过super调用父类的方法时，方法内部的this指向当前的子类实例。
// class A {
//   constructor() {
//     this.x = 1
//   }
//   print() {
//     console.log(this.x)
//   }
// }

// class B extends A {
//   constructor() {
//     super()
//     this.x = 2
//   }
//   m() {
//     super.print()
//   }
// }

// let b = new B()
// b.m() // 2

// 由于this指向子类实例，所以如果通过super对某个属性赋值，这时super就是this，赋值的属性会变成子类实例的属性。

// class A {
//     constructor() {
//       this.x = 1;
//     }
//   }

//   class B extends A {
//     constructor() {
//       super();
//       this.x = 2;
//       super.x = 3;
//       console.log(super.x); // undefined
//       console.log(this.x); // 3
//     }
//   }

//   let b = new B();
