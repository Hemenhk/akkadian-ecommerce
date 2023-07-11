const { createSlice } = require("@reduxjs/toolkit");

const saveCartItems = (cartItems) => {
  const cart = cartItems.length > 0 ? cartItems : [];
  localStorage.setItem("cart", JSON.stringify(cart));
};

const getCartItems = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const recalculateCart = (cartItems) => {
  saveCartItems(cartItems);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const total = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return { itemCount, total };
};

const initialState = {
  cartItems: getCartItems,
  ...recalculateCart(getCartItems),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setAddProduct: (state, action) => {
      const itemExists = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (!itemExists) {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }

      const { itemCount, total } = recalculateCart(state.cartItems);
      state.itemCount = itemCount;
      state.total = total;
      saveCartItems(state.cartItems);
    },
    setIncrease: (state, action) => {
      const increaseIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      state.cartItems[increaseIndex].quantity =
        (state.cartItems[increaseIndex].quantity || 0) + 1;

      const { itemCount, total } = recalculateCart(state.cartItems);
      state.itemCount = itemCount;
      state.total = total;
      saveCartItems(state.cartItems);
    },
    setDecrease: (state, action) => {
      const decreaseIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (decreaseIndex >= 0) {
        const product = state.cartItems[decreaseIndex];
        if (product.quantity > 0) {
          product.quantity--;
        }
      }

      const { itemCount, total } = recalculateCart(state.cartItems);
      state.itemCount = itemCount;
      state.total = total;
      saveCartItems(state.cartItems);
    },
    setRemove: (state, action) => {
      const removeIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (removeIndex >= 0) {
        state.cartItems.splice(removeIndex, 1);
      }
    },
    setClearCart: (state) => {
      state.cartItems = [];
      state.itemCount = 0;
      state.total = 0;
      localStorage.removeItem("cart");
    },
  },
});

export const {
  setAddProduct,
  setClearCart,
  setDecrease,
  setIncrease,
  setRemove,
} = cartSlice.actions;

export default cartSlice;
