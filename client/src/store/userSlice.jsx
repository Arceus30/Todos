import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        isLoggedIn: false,
        userId: null,
    },
    reducers: {
        setCredentials: (state, action) => {
            const { userId } = action.payload;
            state.isLoggedIn = true;
            state.userId = userId;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.userId = null;
        },
    },
});

export const { setCredentials, logout } = userSlice.actions;

export default userSlice.reducer;
