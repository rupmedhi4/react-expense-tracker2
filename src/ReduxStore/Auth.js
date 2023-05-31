import {  createSlice } from "@reduxjs/toolkit";

const status = localStorage.getItem("email") === null ? false : true;

const initialAuthState = { isAuthenticated: status, userToken : "",userEmail : ""}

const AuthSlice = createSlice({
    name: "authentication",
    initialState: initialAuthState,
    reducers: {
        isLogin(state) {
            state.isAuthenticated = !state.isAuthenticated;
            console.log(state.isAuthenticated);
        },
        UserEmail(state,action) {
            state.userEmail = action.payload;
        },
        Logintoken(state, action) {
            state.userToken = action.payload;
        }

    }
})


export const authAction = AuthSlice.actions;

export default AuthSlice.reducer;