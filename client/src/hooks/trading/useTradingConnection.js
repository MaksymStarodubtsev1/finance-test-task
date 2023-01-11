import {useEffect} from "react";

export const useTradingConnection = (socket) => {

  useEffect(() => {
    socket.on("connect", (res) => {
      console.log('result', true);
    })

    socket.on('disconnect',(res) => {
      console.log('result', false);
    })

    socket.on("ticker", (result) => {
      console.log('result', result);
    })

    return () => {
      socket.off();
    };
  });
}