import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    total: 0,
    promoCode: "summer50",
  },
  reducers: {
    addToCart: (state, action) => {
      //If item exists in the cart, increment its quantity (item.quantity++)
      //otherwise, push the new product ([...previous, {...product, quantity: 1}])

      if (state.cartItems.find((item) => item.id === action.payload.id)) {
        state.cartItems = state.cartItems.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return { ...item };
          }
        });
        //go to that specific item, increment its quantity
      } else {
        //item does not exist
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }

      state.total += Number(action.payload.price) * 1.2;
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.quantity -= 1;
      state.total -= Number(action.payload.price) - 1.2;
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
    checkPromoCode: (state, action) => {
      // if the action.payload === state.promoCode, then apply a discount of 50%
      if (action.payload === state.promoCode) {
        state.total = state.total * 0.5;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  setPromoCode,
  checkPromoCode,
} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.cartItems;
export const selectQuantity = (state) => state.cart.quantity;
export const selectTotal = (state) => state.cart.total;

export default cartSlice.reducer;
