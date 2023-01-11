import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {SET_TRADING_STATUS, SET_TRADING_UPDATE} from "../../store/reducers/tradingReduser";

export const useTradingConnection = (socket) => {

  const dispatch = useDispatch()

  useEffect(() => {
    socket.on("connect", () => {
      dispatch({type: SET_TRADING_STATUS, payload: true})
    })

    socket.on('disconnect', () => {
      dispatch({type: SET_TRADING_STATUS, payload: false})
    })

    socket.on("ticker", (result) => {
      dispatch({type: SET_TRADING_UPDATE, payload: result})
    })

    return () => {
      socket.off();
    };
  });
}