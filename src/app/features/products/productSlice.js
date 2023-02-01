import { createSlice } from "@reduxjs/toolkit";


let initialState = {};

if (localStorage.getItem('products')) {
  initialState = JSON.parse(localStorage.getItem('primary_carousel'));
}

export const productsSlice = createSlice({
  name: 'productsslice',
  initialState,
  reducers: {
    changeproducts: (state) => {
      state.products = !state.products;
      localStorage.setItem("products", state.products.toString());
    }
  }
})

export const { changeproducts } = productsSlice.actions;

export default productsSlice.reducer;