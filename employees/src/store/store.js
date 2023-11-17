import { configureStore } from "@reduxjs/toolkit";
import empDetails from './empSlice';

export const store = configureStore({
    reducer: {
        app: empDetails,
    },
});
