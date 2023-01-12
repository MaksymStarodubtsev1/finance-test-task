export const useTrading = (socket) => {

  function startTrading() {
    socket.emit('start')
  }

  function stopTrading() {
    socket.emit('stopTrading')
  }

  function changeUpdateInterval(interval = 5) {
    socket.emit('changeInterval', {interval}, (response) => {
      console.log(response.result)
    })
  }

  return {
    startTrading,
    stopTrading,
    changeUpdateInterval,
  }
}