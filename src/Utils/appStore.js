import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./cartSlice";
import cartSlice from "./cartSlice";
import headerSlice from "./headerSlice";

const appStore = configureStore({
  reducer: {
    cart: cartSlice,
    header: headerSlice,
  },
});

export default appStore;
