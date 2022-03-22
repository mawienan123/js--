var Direction
;(function (Direction) {
  Direction[(Direction['NORTH'] = 0)] = 'NORTH'
  Direction[(Direction['SOUTH'] = 1)] = 'SOUTH'
  Direction[(Direction['EAST'] = 2)] = 'EAST'
  Direction[(Direction['WEST'] = 3)] = 'WEST'
})(Direction || (Direction = {}))
var dir = Direction.NORTH
var Direction1
;(function (Direction1) {
  Direction1['NORTH'] = 'NORTH'
  Direction1['SOUTH'] = 'SOUTH'
  Direction1['EAST'] = 'EAST'
  Direction1['WEST'] = 'WEST'
})(Direction1 || (Direction1 = {}))
var dir1 = Direction1.NORTH
let dirName = Direction1[0] // NORTH
let dirVal = Direction1['NORTH'] // 0
console.log(Direction1)
console.log(dir1)
console.log(dirName)
console.log(dirVal)
