export const useTrading = (socket) => {

  function startTrading() {
    socket.emit('start')
  }

  function changeUpdateInterval(interval = 5) {
    const correctInterval = interval * 1000

    socket.emit('changeInterval', {interval: correctInterval}, (response) => {
      console.log(response.result)
    })
  }

  function stopTrading() {
    socket.emit('stopTrading')
  }

  return {
    startTrading,
    stopTrading,
    changeUpdateInterval,
  }
}