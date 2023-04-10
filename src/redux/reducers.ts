import {AnyAction, combineReducers} from "redux";
import {GlobalState} from "./index";
import user from "./modules/user";


export const reducers = combineReducers({
    user
} as any)

export const rootReducer = (state: GlobalState, action: AnyAction) => {
    if (action.type === 'RESET_APP') {
        const { device, area } = state

        state = { area, device } as GlobalState
    }

    if (action.type === 'RESET_APP_FULLY') {
        state = {} as GlobalState
    }
    return (reducers as any)(state as any, action)
}
