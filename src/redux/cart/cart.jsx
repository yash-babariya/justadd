import { createSlice } from "@reduxjs/toolkit";
import toast from 'react-hot-toast';

const initialCart = {
    count: parseInt(localStorage.getItem("count")) || 0,
    items: JSON.parse(localStorage.getItem("cart")) || [],
    favCount: parseInt(localStorage.getItem("favCount")) || 0,
    favs: JSON.parse(localStorage.getItem("fav")) || [],
};

const isLoggedIn = localStorage.getItem("IsLogin") === 'true';

export const cartSlice = createSlice({
    name: "cart",
    initialState: initialCart,
    reducers: {
        addToCarts: (state, action) => {
            if (!isLoggedIn) {
                toast.error("You must be logged in to add items.");
                return;
            }
            state.count += 1;
            state.items.push({ ...action.payload, quantity: 1 }); // Set initial quantity to 1
            localStorage.setItem("count", state.count);
            localStorage.setItem("cart", JSON.stringify(state.items));
        },
        favCarts: (state, action) => {
            if (!isLoggedIn) {
                toast.error("You must be logged in to add items.");
                return;
            }
            state.favCount += 1;
            state.favs.push(action.payload);
            localStorage.setItem("favCount", state.favCount);
            localStorage.setItem("fav", JSON.stringify(state.favs));
        },
        removeFromCarts: (state, action) => {
            if (!isLoggedIn) {
                toast.error("You must be logged in to remove items.");
                return;
            }
            const removedItemIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (removedItemIndex !== -1) {
                state.items.splice(removedItemIndex, 1);
                state.count -= 1;
                localStorage.setItem("count", state.count.toString());
                localStorage.setItem("cart", JSON.stringify(state.items));
            }
        },
        removeFromFavCarts: (state, action) => {
            if (!isLoggedIn) {
                toast.error("You must be logged in to remove items.");
                return;
            }
            const removedItemIndex = state.favs.findIndex(item => item.id === action.payload.id);
            if (removedItemIndex !== -1) {
                state.favs.splice(removedItemIndex, 1);
                state.favCount -= 1;
                localStorage.setItem("favCount", state.favCount.toString());
                localStorage.setItem("fav", JSON.stringify(state.favs));
            }
        },
        incrementItemQuantity: (state, action) => {
            if (!isLoggedIn) {
                toast.error("You must be logged in to change item quantities.");
                return;
            }
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
            state.items[itemIndex].quantity += 1;
            localStorage.setItem("cart", JSON.stringify(state.items));
        },
        decrementItemQuantity: (state, action) => {
            if (!isLoggedIn) {
                toast.error("You must be logged in to change item quantities.");
                return;
            }
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (state.items[itemIndex].quantity > 0) {
                state.items[itemIndex].quantity -= 1;
                if (state.items[itemIndex].quantity === 0) {
                    state.items.splice(itemIndex, 1);
                    state.count -= 1;
                    localStorage.setItem("count", state.count);
                }
                localStorage.setItem("cart", JSON.stringify(state.items));
            }
        },
        calculateTotalPrice: state => {
            state.totalPrice = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
        },
    },
});

export const {
    addToCarts,
    favCarts,
    removeFromCarts,
    removeFromFavCarts,
    incrementItemQuantity,
    decrementItemQuantity,
    calculateTotalPrice
} = cartSlice.actions;

export default cartSlice.reducer;
