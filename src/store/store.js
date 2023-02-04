import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./apis/productsApi";
import primaryCarouselSliceReducer from './../app/features/primary-carousel/primaryCarousel';
import categoriesSliceReducer from './../app/features/categories/sliceCategories';
import productsSliceReducer from './../app/features/products/productsSlice';
import sixProductsSliceReducer from './../app/features/products/sixProductsSlice';


export const store = configureStore({
  reducer: {
    primaryCarouselSlice: primaryCarouselSliceReducer,
    categoriesSlice: categoriesSliceReducer,
    productsSlice: productsSliceReducer,
    sixProductsSlice: sixProductsSliceReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(productsApi.middleware)
});