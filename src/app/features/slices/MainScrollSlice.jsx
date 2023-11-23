import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    isATE: false,
    isTOP: 0,
}


const MainScrollSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        toggleATE: (state, action) => {
            state.isATE = action.payload
        },
        toggleTOP: (state, action) => {
            state.isTOP = action.payload
        },
    }
})

export const { toggleATE, toggleTOP } = MainScrollSlice.actions
export default MainScrollSlice.reducer