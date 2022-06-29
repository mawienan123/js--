// 1。partial  todo
// 翻译：部分的；不完整的；片面的；有偏见的

// 源码
// type Partial11<T> = { [P in keyof T]?: T[P] }
interface dddFoo {
  name: string
  age: number
}

type dddA = Partial<dddFoo>
// 最多只能够定义 name, age 中的属性（可以不定义）
let b: dddA = {
  name: '1',
  age: 3,
}

// 2.Required todo

// type Required<T> = { [P in keyof T]-?: T[P] };
interface dddFoo1 {
  name: string
  age: number
}

type dddB = Required<dddFoo1>
// 最多只能够定义 name, age 中的属性（可以不定义）
let c: dddB = {
  name: '1',
  age: 3,
}

// 3.Pick todo
// type Pick<T, K extends keyof T> = { [P in K]: T[P] }
// 相当于: type PickUser = { age: number; name: string; }
type userDDD = {
  age: string
  name: string
  dddname: string
}
type PickUser = Pick<userDDD, 'age' | 'name' | 'dddname'>

// 4.Exclude （排除） 过滤出前者独有的属性（排除后者所有属性）todo
// type Exclude<T, U> = T extends U ? never : T;
let str: Exclude<'b' | 'a' | '1', 'y' | 'z' | '1'>

// 5.Omit 把后者存在的属性，从前者中剔除todo
interface User {
  id: number
  age: number
  name: string
}
// 相当于: type OmitUser = { age: number; name: string; }
type OmitUser = Omit<User, 'id'>

// 6.Record  以 typeof 格式快速创建一个类型，此类型包含一组指定的属性且都是必填 todo

type Coord = Record<'x' | 'y', number>

// 等同于
// type Coord = {
//   x: number
//   y: number
// }

interface IData {
  name: string
  age: number
  func: (s: string) => void
}

interface Ia {
  [key: number]: string // 索引类型
}

const d = { 2: 3 }
