import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    isATE: false,
}


const MainScrollSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        toggleATE: (state, action) => {
            state.isATE = action.payload
        },
    }
})

export const { toggleATE } = MainScrollSlice.actions
export default MainScrollSlice.reducer