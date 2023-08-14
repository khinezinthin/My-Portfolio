import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: 0,
    theme: localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
}

export const sidebarSlice = createSlice({
    name: "sidebarSlice",
    initialState,
    reducers: {
        setActive: (state,{payload}) => {
            state.value = payload
        },
        setTheme: (state,{payload}) => {
            state.theme = payload
        }
    }
})

export const {setActive, setTheme} = sidebarSlice.actions;
export default sidebarSlice.reducer;