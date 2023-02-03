import { configureStore } from "@reduxjs/toolkit";
import primaryCarouselSliceReducer from './features/primary-carousel/primaryCarousel';
import categoriesSliceReducer from './features/categories/sliceCategories';
import productsSliceReducer from './features/products/productsSlice';
import sixProductsSliceReducer from './features/products/sixProductsSlice';

export const store = configureStore({
  reducer: {
    primaryCarouselSlice: primaryCarouselSliceReducer,
    categoriesSlice: categoriesSliceReducer,
    productsSlice: productsSliceReducer,
    sixProductsSlice: sixProductsSliceReducer
  }
})