"use client"
import { Provider } from 'react-redux'
import { store } from './store'
import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import persistStore from 'redux-persist/es/persistStore'
let persistor = persistStore(store)
function StoreProvider({children}:{children:React.ReactNode}) {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}

export default StoreProvider
