import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/reducer';
import authReducer from "./user/reducer";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer
  },
});


export default store;