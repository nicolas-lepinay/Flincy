import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers:{
        addProduct:(state, action) => {
            const isFound = state.products.some( item => {
                if(item._id === action.payload._id) return true;
            });
            if(!isFound) {
                // J'ajoute le produit dans le panier :
                state.quantity += 1;
                state.products.push(action.payload);
                state.total += action.payload.price * action.payload.quantity;
            }
            if(isFound) {
                // Increase (j'augmente la quantité du produit dans le panier) :
                state.products.map( (item) => {
                    if(item._id === action.payload._id) {
                        item.quantity += action.payload.quantity;
                    };
                })
                state.total += action.payload.price * action.payload.quantity;
            }
        },
        removeProduct:(state, action) => {
            state.quantity -= 1;
            state.products = state.products.filter(item =>  item._id !== action.payload._id);
            state.total -= action.payload.price * action.payload.quantity;
            if(state.quantity === 0 || state.products.length === 0) {
                state.total = 0;
                state.quantity = 0;
            }
        },
        increase:(state, action) => {
            state.products.map( (item) => {
                if(item._id === action.payload._id) {
                    item.quantity = action.payload.quantity + 1;
                };
            })
            state.total += action.payload.price;
        },
        decrease:(state, action) => {
            state.products.map( (item) => {
                if(item._id === action.payload._id) {
                    if(item.quantity > 1) {
                        item.quantity = action.payload.quantity - 1;
                    }
                };
            })
            state.total -= action.payload.price;
        },
        clearCart:(state) => {
            state.quantity = 0;
            state.products = [];
            state.total = 0;
        },
    }
});

export const { addProduct, removeProduct, increase, decrease, clearCart } = cartSlice.actions;
export default cartSlice.reducer;