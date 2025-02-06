import { createSlice } from "@reduxjs/toolkit";

const initialState = { products: [], loading: false, editingProduct: null };

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProductStart: (state) => {
      state.loading = true;
    },

    fetchProductStart: (state) => {
      state.loading = true;
    },

    updateProductStart: (state) => {
      state.loading = true;
    },

    deleteProductStart: (state) => {
      state.loading = true;
    },

    //reducers(functional)

    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.loading = false;
    },

    fetchProduct: (state, action) => {
      (state.products = action.payload), (state.loading = false);
    },

    setEditingProduct: (state, action) => {
      state.editingProduct = action.payload;
    },
    clearEditingProduct: (state) => {
      state.editingProduct = null;
    },
    updateProduct: (state, action) => {
      const { id } = action.payload;
      const productIndex = state.products.findIndex(
        (product) => product.id === id
      );
      if (productIndex !== -1) {
        state.products[productIndex] = action.payload;
      }

      state.loading = false;
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
      state.loading = false;
    },
  },
});

export const {
  addProductStart,
  addProduct,
  fetchProduct,
  fetchProductStart,
  setEditingProduct,
  clearEditingProduct,
  updateProductStart,
  updateProduct,
  deleteProduct,
  deleteProductStart,
} = productSlice.actions;
