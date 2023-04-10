import {SelectedResultParams} from "~/redux/modules/user";
import {GooglePlaceDetail} from "react-native-google-places-autocomplete";

export const googlePlacesDetails = (detail:GooglePlaceDetail): SelectedResultParams => {
    return {
      geometry: detail.geometry.location,
      name: detail.name,
      placeId: detail.place_id,
      reference: detail.reference,
      url: detail.url,
      vicinity: detail.vicinity
    }
}
