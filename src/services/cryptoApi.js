import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': 'c651a95afcmshc12cef227bb73c6p158358jsn0899fa7daf23',
};

const baseUrl = 'https://coinranking1.p.rapidapi.com/';

const cryptoRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => cryptoRequest('/coins'),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;
