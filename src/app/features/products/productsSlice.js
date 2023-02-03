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
  initialState: { isLoading: false, sixProducts: null, allProducts: null, isError: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allProducts = action.payload;
      //console.log(action.payload);
    })
    builder.addCase(getAllProducts.rejected, (state, action) => {
      console.log('Error', action.payload)
      state.isError = true;
    });
  },
})

export default sliceProducts.reducer;