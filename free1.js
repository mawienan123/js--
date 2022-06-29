const a = [
  {
    a: '学习',
    b: '2222',
  },
  {
    a: '好好',
    b: '333',
  },
]

const b = a.reduce((pre, cur) => {
  pre[cur.a] = {
    operatorType: 'EQUALS',
    frontParamList: cur.b,
  }
  return pre
}, {})
console.log(b)
