import { createSlice } from "@reduxjs/toolkit";

// Function to load state from local storage
const loadState = () => {
    try {
        const serializedState = localStorage.getItem("userState");
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

// Function to save state to local storage
const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("userState", serializedState);
    } catch (err) {
        console.log(err);
    }
};

export const userSlice = createSlice({
    name: "user",
    initialState: loadState() || {
        isLoggedIn: false,
        userId: null,
    },
    reducers: {
        setCredentials: (state, action) => {
            state.isLoggedIn = true;
            state.userId = action.payload;
            saveState(state); // Save state to local storage
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.userId = null;
            saveState(state); // Save state to local storage
        },
    },
});

export const { setCredentials, logout } = userSlice.actions;

export default userSlice.reducer;
