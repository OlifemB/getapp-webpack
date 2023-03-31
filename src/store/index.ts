import {combineReducers, configureStore, compose} from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import {appReducer} from "@/store/app";

const rootReducer = combineReducers({
    app: appReducer
})

const sagaMiddleware = createSagaMiddleware()


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']