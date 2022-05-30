import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import buttonReducer from "../slices/buttonSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        button: buttonReducer,
    },
});