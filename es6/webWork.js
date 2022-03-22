this.addEventListener(
  'message',
  function (e) {
    console.log('You sasid: ' + e.data)
    self.postMessage('You said: ' + e.data)
  },
  true,
)
