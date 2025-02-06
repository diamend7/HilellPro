export default {
  productList: {
    products: (state) => state.products.products,
    editingProduct: (state) => state.products.editingProduct,
  },
  openState: {
    open: (state) => state.modal.open,
  },
};
