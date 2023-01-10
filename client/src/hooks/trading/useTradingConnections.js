import {io} from "socket.io-client";
import {useEffect, useState} from "react";

const socket = io("ws://localhost:4000", {
  reconnectionDelayMax: 10000
});

export const useTradingConnections = () => {
const [connectionStatus, setConnectionStatus] = useState(false)

  useEffect(() => {
    socket.on("connect", (res) => {
      setConnectionStatus(true)
      console.log('hello', res);
    })

    socket.on('disconnect',(res) => {
      setConnectionStatus(false)
    })

    socket.on("ticker", (result) => {
      console.log('result', result);
    })

    return () => {
      socket.off();
    };
  });

  function startTrading() {
    socket.emit('start')
  }

  function stopTrading() {
    socket.emit('stopTrading')
  }

  return {
    connectionStatus,
    startTrading,
    stopTrading
  }
}