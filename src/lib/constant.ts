
const initialCoords = {
    // Maybank Tower
    latitude: 3.1472732,
    longitude: 101.6995352
}

const latDelta = 0.0922
const lngDelta = 0.0421

const initialRegion = {
    latitude: initialCoords.latitude,
    longitude: initialCoords.longitude,
    latitudeDelta: latDelta,
    longitudeDelta: lngDelta,
}

//this should be in .env file.
const GooglePlacesApi = {
    key:"AIzaSyA6H47tcACDHEIIVhLKkuQx0lesf5fxvDE"
}


export default {
    initialCoords,
    initialRegion,
    latDelta,
    lngDelta,
    GooglePlacesApi
}
