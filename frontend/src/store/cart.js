import { createSlice } from "@reduxjs/toolkit";

export const CATEGORIES = await fetch('http://localhost:8081/categories')
    .then(res => res.json())
    .then(data => { return [...data] })
    .catch(err => console.log(err));


const resultObject = {};
CATEGORIES.forEach(obj => {
    const nameValue = obj.value;
    resultObject[nameValue] = [];
});

const initialCartState = {
    cart: { ...resultObject },
    totalItemsInCart: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        addItem(state, action) {
            const exist = state.cart[action.payload.category].find((item) => item.item === action.payload.item) || null;
            if (exist) {
                exist.count++;
            }
            else {
                const newItem = { item: action.payload.item, count: 1 }
                state.cart[action.payload.category].push(newItem);
            }
            state.totalItemsInCart++;
        },
        resetCart(state){
            return {...initialCartState};
        }
    }
});


export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
