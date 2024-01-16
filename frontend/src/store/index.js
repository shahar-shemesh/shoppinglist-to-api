import { configureStore } from "@reduxjs/toolkit";

import cartReducer from './cart';
import orderSummaryReducer from './orderSummary';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        orderSummary: orderSummaryReducer
    }
});

export default store;