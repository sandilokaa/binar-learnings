import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    creds: "",
    token: "",
};

export const buttonSlice = createSlice({
    name: "button",
    initialState,
    reducers: {
        addButton: (state, action) => {
            state.creds = action.payload.button;
            state.token = action.payload.token;
        },
        removeButton: (state, action) => {
            state.creds = "";
            state.token = "";
        },
    },
});

export const { addButton, removeButton } = buttonSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectButton = (state) => state.button;
export default buttonSlice.reducer;