export const SET_TRADING_STATUS = 'SET_STATUS';
export const SET_TRADING_UPDATE = 'SET_TRADING_UPDATE';

const initialState = {
  connection: false,
}

export const tradingReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_TRADING_UPDATE:
      return {
        ...state,
        tradingInfo: action.payload,
      }

    case SET_TRADING_STATUS:
      return {
        ...state,
        connection: action.payload
      }

    default:
      return state
  }
}