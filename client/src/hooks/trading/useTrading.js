export const useTrading = (socket) => {

  function startTrading() {
    socket.emit('start')
  }

  function stopTrading() {
    socket.emit('stopTrading')
  }

  return {
    startTrading,
    stopTrading
  }
}