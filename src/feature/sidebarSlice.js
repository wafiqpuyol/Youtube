

import { createSlice } from "@reduxjs/toolkit"

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState: {
        isMenu: true,
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenu = !state.isMenu
        },
        closeSideBar: (state) => {
            state.isMenu = false
        }
    }
})

export const { toggleMenu, closeSideBar } = sidebarSlice.actions;
export default sidebarSlice.reducer;