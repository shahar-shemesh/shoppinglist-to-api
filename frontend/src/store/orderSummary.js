import { createSlice } from "@reduxjs/toolkit";

const initialOrderSummaryState = {
    openOrderSummaryScreen: false
};

const orderSummarySlice = createSlice({
    name: 'orderSummary',
    initialState: initialOrderSummaryState,
    reducers: {
        onFinishOrder(state) {
            state.openOrderSummaryScreen = true;
        },
        onBackToHomePage(state){
            state.openOrderSummaryScreen = false;
        }
    }
});

export const orderSummaryActions = orderSummarySlice.actions;

export default orderSummarySlice.reducer;
