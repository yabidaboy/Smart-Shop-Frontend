import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './CartSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, CartSlice)
export const store = configureStore({
    reducer: {
        cart : persistedReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch