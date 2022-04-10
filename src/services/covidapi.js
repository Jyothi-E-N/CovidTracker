import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const covidApiHeaders = {
};

const baseUrl = "https://api.covid19api.com";

const createRequest = (url) => ({ url, headers: covidApiHeaders });
// returns an object that contains both url and headers

export const covidApi = createApi({
    reducerPath: "covidApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: () => createRequest(`/summary`),
        }),
        getCountry: builder.query({
            query: () => createRequest("/countries"),
        }),
        getDates: builder.query({
            query: (country) =>
                createRequest(
                    `/dayone/country/${country}/status/confirmed/live`
                ),
        }),
        getCountryCases: builder.query({
            query: ({country, date}) =>
                createRequest(`/live/country/${country}/status/confirmed/date/${date}`),
        }),
        

        // getCryptoHistory: builder.query({
        //     query: ({ coinId, timePeriod }) =>
        //         createRequest(
        //             `/coin/${coinId}/history?timePeriod=${timePeriod}`
        //         ),
        // }),
        // getCryptoExchanges: builder.query({
        //     query: (count) => createRequest(`/exchanges?limit=${count}`),
        // }),
        // getReferenceCurrencies: builder.query({
        //     query: (type) =>
        //         createRequest(`/reference-currencies?types[]=${type}`),
        // }),
    }),
});

export const { useGetSummaryQuery } = covidApi;
export const { useGetCountryQuery } = covidApi;
export const { useGetDatesQuery } = covidApi;
export const { useGetCountryCasesQuery} = covidApi;
// export const { useGetCryptoExchangesQuery } = cryptoApi;
// export const { useGetCryptosQuery } = cryptoApi;
// export const { useGetReferenceCurrenciesQuery } = cryptoApi;
