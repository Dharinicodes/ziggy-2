import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    // user: userReducer, if I had a userLoginSlice
  },
});

export default appStore;
