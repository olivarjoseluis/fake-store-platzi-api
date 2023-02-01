import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { urlApi } from "../../../const/const";

export const getThereProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    const res = await fetch(`${urlApi}/products?offset=0&limit=3`).then(
      (data) => data.json()
    )
    return res
  }
);

export const primaryCarousel = createSlice({
  name: 'primarycarousel',
  initialState: { isLoading: false, data: null, isError: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getThereProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getThereProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    })
    builder.addCase(getThereProducts.rejected, (state, action) => {
      console.log('Error', action.payload)
      state.isError = true;
    });
  },
})

export default primaryCarousel.reducer;