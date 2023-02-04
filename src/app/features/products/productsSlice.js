import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { urlApi } from "../../../const/const";


export const getAllProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    const res = await fetch(`${urlApi}/products?offset=0&limit=30`).then(
      (data) => data.json()
    )
    return res
  }
);


export const sliceProducts = createSlice({
  name: 'sliceproducts',
  initialState: { isLoading: false, sixProducts: null, allProducts: null, isError: false, range: null },
  reducers: {
    defineRange: (state, action) => {
      state.range = action.payload;
    },
    resetRange: (state) => {
      state.range = null;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allProducts = action.payload;
    })
    builder.addCase(getAllProducts.rejected, (state, action) => {
      console.log('Error', action.payload)
      state.isError = true;
    });
  },
})

export const { defineRange, resetRange } = sliceProducts.actions;

export default sliceProducts.reducer;