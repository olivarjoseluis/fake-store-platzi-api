import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { urlApi } from "../../../const/const";

export const getThereCategories = createAsyncThunk(
  'categories/getCategories',
  async () => {
    const res = await fetch(`${urlApi}/categories?offset=0&limit=6`).then(
      (data) => data.json()
    )
    return res
  }
);

export const sliceCategories = createSlice({
  name: 'slicecategories',
  initialState: { isLoading: false, thereCategories: null, isError: false },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getThereCategories.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getThereCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.thereCategories = action.payload;
      //console.log(action.payload);
    })
    builder.addCase(getThereCategories.rejected, (state, action) => {
      console.log('Error', action.payload)
      state.isError = true;
    });
  },
})

export default sliceCategories.reducer;