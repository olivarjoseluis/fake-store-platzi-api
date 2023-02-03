import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { urlApi } from "../../../const/const";

export const getSixProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    const res = await fetch(`${urlApi}/products?offset=0&limit=6`).then(
      (data) => data.json()
    )
    return res
  }
);


export const sliceSixProducts = createSlice({
  name: 'slicesixproducts',
  initialState: { isLoading: false, sixProducts: null, isError: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSixProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getSixProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.sixProducts = action.payload;
      //console.log(action.payload);
    })
    builder.addCase(getSixProducts.rejected, (state, action) => {
      console.log('Error', action.payload)
      state.isError = true;
    });
  },
})

export default sliceSixProducts.reducer;