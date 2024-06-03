import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../cart/cart";
import userReducer from "../form/form";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
    }
});

export default store

