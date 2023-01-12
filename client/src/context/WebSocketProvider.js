import React, {createContext, useContext} from 'react'
import io from 'socket.io-client';
import * as data from '../config/env.json'
import {useTradingConnection} from "../hooks/trading/useTradingConnection";
import {useTrading} from "../hooks/trading/useTrading";

const WebSocketContext = createContext(null)

const useWebSocketContext = () => useContext(WebSocketContext);

export { useWebSocketContext }

export const WebSocketProvider = ({ children }) => {
  let socket;
  let ws;

  if (!socket) {
    socket = io.connect(data.WS_BASE)
  }

  const {
    startTrading,
    stopTrading,
    changeUpdateInterval
  } = useTrading(socket)
  useTradingConnection(socket)

  ws = {
    socket,
    startTrading,
    stopTrading,
    changeUpdateInterval,
  }

  return (
    <WebSocketContext.Provider value={ws}>
      {children}
    </WebSocketContext.Provider>
  )
}