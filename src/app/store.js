import { configureStore } from "@reduxjs/toolkit";
import primaryCarouselSliceReducer from './features/primary-carousel/primaryCarousel';

export const store = configureStore({
  reducer: {
    primaryCarouselSlice: primaryCarouselSliceReducer
  }
})