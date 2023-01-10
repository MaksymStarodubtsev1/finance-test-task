import {io} from "socket.io-client";
import {useEffect} from "react";

const socket = io("ws://localhost:4000", {
  reconnectionDelayMax: 10000
});


export const useTradingConnections = () => {

  useEffect(() => {
    socket.on("connect", (res) => {
      console.log('hello', res);
    })

    socket.on("ticker", (result) => {
      console.log('result', result);
    })

    return () => {
      socket.off("testResponse");
    };
  });

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