import {configureStore} from '@reduxjs/toolkit'
import empReducer from './empSlice'

export default configureStore({
    reducer: {
        empSlice: empReducer
    }   
})