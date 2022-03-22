// enum Direction {
//   NORTH,
//   SOUTH,
//   EAST,
//   WEST,
// }

// let dir: Direction = Direction.NORTH;

// enum Direction1 {
//   NORTH = "NORTH",
//   SOUTH = "SOUTH",
//   EAST = "EAST",
//   WEST = "WEST",
// }

// let dir1: Direction1 = Direction1.NORTH;

// const enum Directiondd {
//   NORTH,
//   SOUTH,
//   EAST,
//   WEST,
// }

// let dir22: Directiondd = Directiondd.NORTH;

//  enum Directiondd {
//   NORTH,
//   SOUTH,
//   EAST,
//   WEST,
// }

// let a:Directiondd
// const d:number[]=[2,3,4]
// a=d[2] 

// 建议使用常量枚举
// const enum Status {
//   a,
//   b 
// }
// console.log(Status.a);

// 也可以这样
function stringify<T>(value: T): string {
  return JSON.stringify(value);
}

stringify<number>(2222)
