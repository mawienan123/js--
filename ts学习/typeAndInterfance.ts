// interface 接口:接口主要用于类型检查，它只是一个结构契约，
// 定义了具有相似的名称和类型的对象结构。除此之外，接口还可以定义方法和事件。

// type (alias)类型别名:不同于 interface 只能定义对象类型，type 声明还可以定义基础类型、联合类型或交叉类型。

// 1.type 的类型别名可以用于其他的类型，比如 联合类型、元组类型、基本类型.interface 只能定义对象类型,
// 2.type 的别名不可以多次定义会报错，而 interface 则可以多次定义，会将其视为合并到一起。
// 3.type 能用 in 关键字，而interface不行。
// 4.默认导出的方式不同，inerface 支持同时声明，默认导出，而type必须先声明后导出
// 5.扩展方式不同，interface 用 extends 来扩展，而type 用 & 操作符扩展
// 6.type 可以获取 typeof 返回的值作为类型
type name1 = number
type name2 = string

interface inTyoe1 {
  name?: string
}
interface inTyoe1 {
  age: string
}

interface inTyoe2 extends inTyoe1 {
  ccc: 2222
}

type orderA = name1 | name2
type orderB = [name1, name2]
type orderC = [inTyoe1, name2]
type orderD = 'aaa' | 'bbb'
type orderDD = {
  name: string
  age: number
}
// interface orderDD {
//   name: string
//   age: number
// }

type name3 = {
  [key in orderD]?: string
}
type name33 = {
  [key in keyof orderDD]?: string
}
type name4 = name3 & { z: string }

// 而interface不能用in关键字。
// interface inTyoe1 {
//     [key in orderD]?: string
//   }
const varA: inTyoe1 = {
  name: '2222',
  age: '222',
}
const orderD: name3 = {
  aaa: 'ddd',
}
const orderE: inTyoe2 = {
  age: 's',
  ccc: 2222,
}
const orderF: name4 = {
  aaa: '2222',
  z: 'dd',
}
// export default interface inTyoe3 {
//   age: string
// }
// export default name2
