import { configureStore } from '@reduxjs/toolkit'
import MainScrollReducer from '../slices/MainScrollSlice'
import FooterReducer from '../slices/FooterSlice'


export const store = configureStore({
    reducer: {
        mainScroll: MainScrollReducer,
        footerSlice: FooterReducer,

    }
})