import {configureStore} from "@reduxjs/toolkit";
import {tradingReducer} from "./reducers/tradingReduser";

export const store = configureStore({
  reducer: {
    trading: tradingReducer,
  }
})