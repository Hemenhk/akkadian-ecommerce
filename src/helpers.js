export const isInCart = (prod, cartItems) => {
  return cartItems.find((item) => item.id === prod.id);
};
