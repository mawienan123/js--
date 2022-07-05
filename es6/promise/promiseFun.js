/*
自定义promise函数模块；IIFE 立即条用函数表达式
*/
;(function (window) {
  const PENDING = 'pending'
  const RESOLVED = 'resolved'
  const REJECTED = 'rejected'
  /*
      自promise构造函数
      excutor 执行器函数（同步执行）
      */
  function Promise(excutor) {
    //将当前promise对象保存起来
    const self = this
    this.status = 'pending'
    self.data = undefined //指定一个用于存储结果的数据的属性
    self.callbacks = [] // 每个元素的结构：{onResolved(){}.onRejected(){}}
    function resolve(value) {
      // r如果当前装填不是pending，直接结束
      if (self.status != 'pending') {
        return
      }
      //将状态改为resolved
      self.status = 'resolved'
      //保存value数据
      self.data = value
      //如果有待执行的callback函数，立即异步执行回调
      if (self.callbacks.length > 0) {
        setTimeout(() => {
          //放入队列执行所有的成功回调
          self.callbacks.forEach((callbacksObj) => {
            callbacksObj.onResolved(value)
          })
        })
      }
    }
    function reject(reason) {
      // r如果当前装填不是pending，直接结束
      if (self.status != 'pending') {
        return
      }
      self.status = 'rejected'
      //保存value数据
      self.data = reason
      //如果有待执行的callback函数，立即异步执行回调
      if (self.callbacks.length > 0) {
        setTimeout(() => {
          //放入队列执行所有的成功回调
          self.callbacks.forEach((callbacksObj) => {
            callbacksObj.onRejected(reason)
          })
        })
      }
    }
    try {
      excutor(resolve, reject)
    } catch (error) {
      //如果执行器抛出异常，promise对象变为失败
      reject(error)
    }
  }
  /*
      自promise原型对象then()
      指定成功和失败的回调函数
      返回一个新的promise函数
      */
  Promise.prototype.then = function (onResolved, onRejected) {
    console.log(1)
    onResolved =
      typeof onResolved === 'function' ? onResolved : (value) => value

    //实现异常穿透，指定默认失败的回调
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (reason) => {
            throw reason
          }

    const self = this
    // 假设当前状态还是PENDING状态，将回调函数保存起来

    //返回一个新的promise对象
    return new Promise((resolve, reject) => {
      //1   3
      //调用指定的函数处理，根据执行的结果改变return的promise状态
      function handle(callback) {
        /*
                            1，如果抛出异常，return的promise就会失败，reason就是error
                            2，如果回调函数执行返回非promise，retrun的promise就会成功，value就是返回的值
                            3，如果回调函数返回的是promise，retrun的promise结果就是这个promise结果
                            */
        try {
          const result = callback(self.data)
          // console.log(result, 99)
          if (result instanceof Promise) {
            // result.then(
            //     value => { resolve(value) },
            //     reason => { reject(reason) }
            // )

            result.then(resolve, reject)
          } else {
            //3，如果回调函数返回的是promise，retrun的promise结果就是这个promise结果
            resolve(result)
            // console.log(result,'result')
          }
        } catch (error) {
          //1，如果抛出异常，return的promise就会失败，reason就是error
          reject(error)
        }
      }
      // 当前状态还是pending状态，将回调函数保存起来
      if (self.status === PENDING) {
        self.callbacks.push({
          onResolved(value) {
            handle(onResolved)
          },
          onRejected(value) {
            handle(onRejected)
          },
        })
      } else if (self.status === RESOLVED) {
        //r如果当前是resolved状态，异步执行onResolved改变return的promise状态
        setTimeout(() => {
          handle(onResolved)
        })
      } else {
        //'rejected
        setTimeout(() => {
          handle(onRejected)
        })
      }
    })
  }
  /*
      自promise原型对象catch()
      */
  Promise.prototype.catch = function (onRejected) {
    return this.then(undefined, onRejected)
  }

  /*
      自promise函数对象resolve()
      返回一个指定结果成功的promise
      */
  Promise.resolve = function (value) {
    return new Promise((resolve, reject) => {
      if (value instanceof Promise) {
        // 如果value 是promise
        value.then(
          (value) => {
            resolve(value)
          },
          (reason) => {
            reject(reason)
          }
        )
      } else {
        // 如果value不是promise
        resolve(value)
      }
    })
  }
  /*
      自promise函数对象reject()
      */
  Promise.reject = function (value) {
    return new Promise((resolve, reject) => {
      // 如果value不是promise
      reject(value)
    })
  }
  /*
      自promise函数对象all()
      返回一个promise，只有当所有的promise都成功才成功
      */
  Promise.all = function (promiseArr) {
    let result = []
    let index = 0

    return new Promise((resolve, reject) => {
      promiseArr.forEach((val, i) => {
        Promise.resolve(val).then(
          (res) => {
            result[i] = res
            index++
            if (promiseArr.length === index) {
              resolve(result)
            }
          },
          (resason) => {
            reject(resason)
          }
        )
      })
    })
  }
  /*
      自promise函数对象race()
      返回一个promise，其结果有第一个完成promise结果决定
      */
  Promise.race = function (promises) {
    console.log(',,,,')
    return new Promise((resolve, reject) => {
      promises.forEach((v) => {
        Promise.resolve(v).then(
          (reason) => {
            resolve(reason)
          },
          (err) => {
            reject(err)
          }
        )
      })
    })
  }

  Promise.prototype.finally = function (callback) {
    // return this.then(
    //   (value) => Promise.resolve(callback()).then(() => value), // MyPromise.resolve执行回调,并在then中return结果传递给后面的Promise
    //   (reason) =>
    //     Promise.resolve(callback()).then(() => {
    //       throw reason
    //     }) // reject同理
    // )
    return this.then(
      (value) => {
        callback()

        return value
      }, // MyPromise.resolve执行回调,并在then中return结果传递给后面的Promise
      (reason) => {
        callback()
        console.log(22222, reason)
        throw reason
      } // reject同理
    )
  }
  //   只要其中的一个 promise 成功，就返回那个已经成功的 promise
  // 如果可迭代对象中没有一个 promise 成功（即所有的 promises 都失败/拒绝），就返回一个失败的 promise 和 AggregateError 类型的实例，它是 Error 的一个子类，用于把单一的错误集合在一起

  Promise.any = function (promises) {
    return new Promise((resolve, reject) => {
      promises = Array.isArray(promises) ? promises : []
      let len = promises.length
      // 用于收集所有 reject
      let errs = []
      // 如果传入的是一个空数组，那么就直接返回 AggregateError

      promises.forEach((promise) => {
        promise.then(
          (value) => {
            resolve(value)
          },
          (err) => {
            len--
            errs.push(err)
            if (len === 0) {
              reject(new AggregateError(errs))
            }
          }
        )
      })
    })
  }

  //用来确定一组异步操作是否都结束了（不管成功或失败）。所以，它的名字叫做”Settled“，包含了”fulfilled“和”rejected“两种情况。

  Promise.allSettled = function (promises) {
    const values = new Array(promises.length)
    var resolvedCount = 0 //计状态为resolved的promise的数量
    return new Promises((resolve, reject) => {
      promises.forEach((i) => {
        Promise.resolve(i, index).then(
          (data) => {
            values[index] = data
            resolvedCount++
            // 如果全部p都为resolved状态，return的promise状态为resolved
            if (resolvedCount === promises.length) {
              resolve(values)
            }
          },
          (err) => {
            values[index] = err
            resolvedCount++
            // 如果全部p都为resolved状态，return的promise状态为resolved
            if (resolvedCount === promises.length) {
              resolve(values)
            }
          }
        )
      })
    })
  }
  window.Promise = Promise
})(window)
