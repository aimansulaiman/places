// naming
import {GetState} from "~/redux";
import {DispatchType} from "~/lib/types";
import {googlePlacesDetails} from "~/lib/map";
import {Point} from "react-native-google-places-autocomplete";
import constant from "~/lib/constant";

export const UPDATE_SELECTED_RESULT = 'UPDATE_SELECTED_RESULT'


export const updateSearchDetail = (detail) => async(dispatch:DispatchType,getState:GetState) => {
    const response = googlePlacesDetails(detail)
    await dispatch(updateSelectedResult(response))
}

export const updateSelectedResult = (payload:SelectedResultParams) => ({
    type: UPDATE_SELECTED_RESULT,
    payload
})

export interface SelectedResultParams {
    geometry: Point
    name: string
    placeId: string
    reference: string
    url: string
    vicinity: string
}

// typing
export interface userParams {
   selectedResult: SelectedResultParams
}

interface Params {
    type: string
    payload: userParams
}

// reducer
const initialState = {
    selectedResult: {
        geometry: {"lat":constant.initialCoords.latitude,"lng":constant.initialCoords.longitude},
        name: 'Maybank Tower',
        placeId: '',
        reference: '',
        url: '',
        vicinity: ''
    }
}

export type UserState = typeof initialState

const user = (state = initialState, action: Params) => {
    const { type, payload } = action

    switch (type) {
        case UPDATE_SELECTED_RESULT:
            return {
                ...state,
                selectedResult: {
                    ...payload
                }
            }
        default:
            return state
    }
}

export default user
