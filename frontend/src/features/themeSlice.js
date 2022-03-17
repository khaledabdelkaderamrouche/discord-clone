import { createSlice } from "@reduxjs/toolkit";

const darkMode = {
    darkMode: true,
    backgroundColor: "#1e272e",
    textColor1: "#d2dae2",
    textColor2: "#d2dae2"
};
const lightMode = {
    darkMode: false,
    backgroundColor: "#ecf0f1",
    textColor1: "#1e272e",
    textColor2: "#1e272e"
};

export const themeSlice = createSlice({
    name: "theme",
    initialState: { value: darkMode },
    reducers: {
        enableDarkMode: (state, action) => {
            state.value = darkMode;
        },
        enableLightMode: (state, action) => {
            state.value = lightMode;
        }
    }
});
export const { enableDarkMode, enableLightMode } = themeSlice.actions;
export default themeSlice.reducer;
