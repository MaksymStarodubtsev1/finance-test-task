import {io} from "socket.io-client";
import { useTradingConnection } from "./useTradingConnection";

const socket = io("ws://localhost:4000", {
  reconnectionDelayMax: 10000
});

export const useTrading = () => {
  useTradingConnection(socket)

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