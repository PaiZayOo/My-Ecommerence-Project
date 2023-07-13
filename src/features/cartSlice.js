import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  quantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const isExisted = state.cartItems.find((item) => item.id === payload.id);
      if (isExisted) {
        return state;
      } else {
        state.cartItems = [...state.cartItems, { ...payload, quantity: 1 }];
      }
      state.totalAmount = calTotalAmount(state.cartItems);

    },
    increaseQty: (state, { payload }) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      state.totalAmount = calTotalAmount(state.cartItems);

    },
    decreaseQty: (state, { payload }) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === payload.id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      state.totalAmount = calTotalAmount(state.cartItems);

    },
    removeItem: (state, { payload }) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== payload.id
      );
      state.totalAmount = calTotalAmount(state.cartItems);

    },
    clearAllItems: (state) => {
      state.cartItems = [];
      state.totalAmount = 0;
    },
  },
});

const calTotalAmount = (cartItems) => {
  let total = 0;
  cartItems.map((item) => {
    total += item.price * item.quantity;
  });

  return total;
};
export const {
  addToCart,
  increaseQty,
  decreaseQty,
  removeItem,
  clearAllItems,
} = cartSlice.actions;
export default cartSlice.reducer;
