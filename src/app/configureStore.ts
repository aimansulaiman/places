import { applyMiddleware, compose,  Reducer,legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'
import { createMigrate, persistReducer, persistStore } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

import Reactotron from '../../ReactotronConfig'
import {GlobalState} from "~/redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {setGlobalStore} from "~/redux/store";
import {rootReducer} from "~/redux/reducers";

const migrations = {}

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['form', 'apiDux'],
    stateReconciler: autoMergeLevel2,
    version: 1,
    migrate: createMigrate(migrations) // https://github.com/rt2zz/redux-persist/blob/master/docs/migrations.md#example-with-createmigrate
}

const persistedReducer = persistReducer(persistConfig, rootReducer as any)

declare const window: any

let composeEnhancers = compose

if (typeof window !== 'undefined') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

let resolveWaitForHydrationPromise = (value?: any) => {
    /* nothing */
}
let rejectWaitForHydrationPromise = (value?: any) => {
    /* nothing */
}

const rehydrationState = {
    isRehydrated: false
}

const waitForHydration = new Promise((resolve, reject) => {
    resolveWaitForHydrationPromise = resolve
    rejectWaitForHydrationPromise = reject
})

setTimeout(() => {
    if (!rehydrationState.isRehydrated) {
        rejectWaitForHydrationPromise()
    }
}, 30000)

export default () => {
    const store = createStore(
        persistedReducer as any as Reducer<GlobalState, any>,
        composeEnhancers(applyMiddleware(thunk), Reactotron.createEnhancer())
    )

    const persistor = persistStore(store, null, () => {
        resolveWaitForHydrationPromise()
        rehydrationState.isRehydrated = true
    })

    setGlobalStore(store)

    return { store, persistor, waitForHydration }
}
