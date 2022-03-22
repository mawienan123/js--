var Direction;
(function (Direction) {
    Direction[Direction["NORTH"] = 0] = "NORTH";
    Direction[Direction["SOUTH"] = 1] = "SOUTH";
    Direction[Direction["EAST"] = 2] = "EAST";
    Direction[Direction["WEST"] = 3] = "WEST";
})(Direction || (Direction = {}));

console.log(Direction)
var dir = Direction.NORTH;

let ma={}
let d={}
// d[ma['ddd']=2]='3'
d[ma['ddd']=2]='3'
// ma[3]
console.log(ma)
console.log(d)

const a={a:2} as const