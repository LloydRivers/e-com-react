import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    total: 0,
    quantity: 0,
    promoCode: "",
    activePromoCode: {
      ["summer50"]: 0.5,
    },
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price * 1.2;
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.quantity -= 1;
      state.total -= action.payload.price - 1.2;
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.quantity = 0;
      state.total = 0;
    },
    setPromoCode: (state, action) => {
      state.promoCode = action.payload;
      if (state.activePromocode[action.payload]) {
        state.total =
          state.total - state.total * state.activePromoCode.action.payload;
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, setPromoCode } =
  cartSlice.actions;
export default cartSlice.reducer;
