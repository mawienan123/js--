// interface SquareConfig {
//   color?: string;
//   width?: number;
//   [ddd:string]:any;
// }

// interface StringArray {
//   [index: number]: string;
// }

// let myArray: StringArray;
// myArray = ["Bob", "Fred"];

// let myStr: string = myArray[0];

// function createSquare(config: SquareConfig): { color: string; area: number } {
//   let newSquare = {color: "white", area: 100};
//   if (config.clor) {
//     // Error: Property 'clor' does not exist on type 'SquareConfig'
//     newSquare.color = config.clor;
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width;
//   }
//   return newSquare;
// }

// let mySquare = createSquare({color: "black",area:'33'});


// class Animal {
//   name: string;
// }
// class Dog extends Animal {
//   breed: string;
// }

// // 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
// interface NotOkay {
//   [x: number]: Dog;
//   [x: string]: Animal;
// }



//接口函数相关
interface SearchFunc {
  // (source: string, subString: string): boolean;
  set(ddd:number)
}

// let mySearch: SearchFunc;
// mySearch = function(src, sub) {
//     let result = src.search(sub);
//     return result > -1;
// }
// mySearch('dsd',2)