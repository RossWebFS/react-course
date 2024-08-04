import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    removeItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity <= 0) cartSlice.caseReducers.removeItem(state, action);
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export function getCart(state) {
  return state.cart.cart;
}

export function getIsPizzaInCart(id) {
  return function (state) {
    return state.cart.cart.some((item) => item.pizzaId === id);
  };
}

export function getPizzaQuantity(id) {
  return function (state) {
    return state.cart.cart.find((item) => item.pizzaId === id)?.quantity || 0;
  };
}

export function getTotalCartQuantity(state) {
  return state.cart.cart.reduce((sum, item) => (sum += item.quantity), 0);
}

export function getTotalCartPrice(state) {
  return state.cart.cart.reduce((sum, item) => (sum += item.totalPrice), 0);
}

export default cartSlice.reducer;
