import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    isOpen: false,
    isFixed: true,
}


const FooterSlice = createSlice({
    name: 'footer',
    initialState,
    reducers: {
        toggleOpen: (state, action) => {
            state.isOpen = action.payload
        },
        toggleFixed: (state, action) => {
            state.isFixed = action.payload
        },
    }
})

export const { toggleOpen, toggleFixed } = FooterSlice.actions
export default FooterSlice.reducer