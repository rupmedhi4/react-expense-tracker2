import { createSlice } from "@reduxjs/toolkit";

const defaultTheme = localStorage.getItem("theme");

const intialThemeState = { currTheme: defaultTheme };

const themeSlice = createSlice({
    name : "theme",
    initialState: intialThemeState,
    reducers: {
        switchTheme(state) {
            if (state.currTheme === "darkTheme") state.currTheme = "ligthTheme";
            else state.currTheme = "darkTheme";
            // console.log(state.currTheme);
        }
        
    }
})

export const themeAction = themeSlice.actions;

export default themeSlice.reducer;