import { configureStore } from "@reduxjs/toolkit";
// connect api to the store
import { covidApi } from "../services/covidapi";

export default configureStore({
    reducer: {
        [covidApi.reducerPath]: covidApi.reducer,
    },
});
