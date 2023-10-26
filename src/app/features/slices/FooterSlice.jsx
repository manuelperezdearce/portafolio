import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    isOpen: false,
    isFixed: false
}


const FooterSlice = createSlice({
    name: 'footer',
    initialState,
    reducers: {
        toggleOpen: (state, action) => {
            state.isATE = action.payload
        },
        toggleFixed: (state, action) => {
            state.isATE = action.payload
        },
    }
})

export const { toggleOpen, toggleFixed } = FooterSlice.actions
export default FooterSlice.reducer