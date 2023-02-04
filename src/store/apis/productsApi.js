import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.escuelajs.co/api/v1'
  }),

  endpoints: (builder) => ({
    /*     getProducts: builder.query({
          query: (params) => `/products?offset=${params.currentPage * 10}&limit=12${params.range ? `&price_min=${params.range.minimum}&price_max=${params.range.maximum}` : ''}`
        }), */
    getProducts: builder.query({
      query: (currentPage) => `/products?offset=${currentPage * 10}&limit=12`
    }),
    getProduct: builder.query({
      query: (id) => `/products/${id}`
    }),
    getProductsByRange: builder.mutation({
      query: (range) => `/products/?price_min=${range.minimum}&price_max=${range.maximum}`
    })
  })
});

export const { useGetProductsQuery, useGetProductQuery, useGetProductsByRangeMutation } = productsApi;