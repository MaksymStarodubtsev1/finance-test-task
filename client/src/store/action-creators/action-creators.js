import {SET_TRADING_UPDATE} from "../reducers/tradingReduser";

export const fetchTradingList = (tradinglist) => {
  return async (dispatch) => {
    try {
      dispatch({type: SET_TRADING_UPDATE, payload: tradinglist})
    } catch (err) {
      console.log('err', err);
    }
  }
}