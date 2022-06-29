type a<t> = t
const ccc1: a<number> = 2

// 使用extends可以对入参T进行约束。
// 默认值
type cccb<t extends string | number> = t
const ccc2: cccb<number> = 2

type cccc<t extends string | number = 'mamama'> = t
let ccc3: cccc
ccc3 = 'mamama'

// 条件判断
// ts定义类型的时候是支持条件判断的，在官方文档被称为条件类型。使用extends关键字
type cccd<t> = t extends number ? string : boolean
const ccc4: cccd<string> = true

type cccf<t> = t

type cccg = 'aaa' | 'bbb'
type ccch = {
  [key in cccg]: string
}
const ccc5: ccch = {
  aaa: '2',
  bbb: '333',
}

;['aaa', 'dddd'].map((i) => {
  console.log(ccc5[i])
})
type ccci = keyof ccch
const ccc6: ccci = 'bbb'
