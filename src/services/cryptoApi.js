import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': 'c651a95afcmshc12cef227bb73c6p158358jsn0899fa7daf23',
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const cryptoRequest = (url) => ({ url, headers: cryptoHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => cryptoRequest(`/coins?limit=${count}`),
    }),
    getExchanges: builder.query({
      query: () => cryptoRequest('/exchanges'),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => cryptoRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) => cryptoRequest(`/coin/${coinId}/history/${timePeriod}`),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetExchangesQuery,
} = cryptoApi;
