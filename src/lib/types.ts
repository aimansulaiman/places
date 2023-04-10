import {GooglePlacesAutocompleteProps} from "react-native-google-places-autocomplete";
import GoogleMapView from 'react-native-maps'
import {Dispatch} from "redux";

export interface SearchProps {
    closeModal: () => void
    selectAddress: GooglePlacesAutocompleteProps['onPress']
    query: any
}

export interface CoordsType {
    latitude: number
    longitude: number
}

export type DispatchType = Dispatch<any>

export interface MapViewRef {
    animateToRegion: GoogleMapView['animateToRegion']
    animateToUserLocation: (duration?: number) => Promise<any | void>
}
