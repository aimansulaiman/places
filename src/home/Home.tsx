import {View,SafeAreaView, StyleSheet} from "react-native";
import color from "~/styles/color";
import React, {useState} from "react";
import {DispatchType, SearchProps} from "~/lib/types";
import {connect} from "react-redux";
import {GlobalState} from "~/redux";
import {bindActionCreators} from "redux";
import {updateSearchDetail} from "~/redux/modules/user";
import MapView from "react-native-maps";
import {BasicHeader} from "~/lib/nav/Navs";
import {InputItem} from "@ant-design/react-native";
import constant from "~/lib/constant";
import en from "~/lib/locale/en";
import SceneModal from "~/components_ui/SceneModal";
import InfoCard from "~/components_ui/InfoCard";
import GooglePlacesSearch from "~/MapView/GooglePlacesSearch";


// mapping
const mapStateToProps = (
    state: GlobalState
) => {
    const {
        user: {
            address,
            selectedResult: {geometry,name}
        }
    } = state
    return {
        address,
        geometry,
        name
    }
}

const mapDispatchToProps = (dispatch: DispatchType) =>
    bindActionCreators({
        updateSearchDetail
        },
    dispatch
)


const Home = (props) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const showPlacesOption = () => {
        setIsVisible(true)
    }

    const hidePlacesOption = () => {
        setIsVisible(false)
    }

    const selectAddress: SearchProps['selectAddress'] = (data, details) => {
        if (details) {
            props.updateSearchDetail(details)
        }
        hidePlacesOption()
    }

    const mapViewRegion = {
        latitude: props.geometry.lat || constant.initialCoords.latitude,
        longitude: props.geometry.lng || constant.initialCoords.longitude,
        latitudeDelta: constant.latDelta,
        longitudeDelta: constant.lngDelta
    }


    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.screenContainer}>
              <BasicHeader
                leftAction={hidePlacesOption}
                middleContent={en.home.headerTitle}
                backgroundColor={color.primary}
                showLeftContent={false}
              />
              <InputItem
                clear
                onChange={showPlacesOption}
                onFocus={showPlacesOption}
                value={''}
                onBlur={hidePlacesOption}
                placeholder={en.home.searchPlaceholder}
                style={styles.homeSearchBar}
              />
              <View style={{flex: 1}}>
                  <MapView
                    style={{flex: 1}}
                    region={mapViewRegion}
                    initialRegion={constant.initialRegion}
                  />
              </View>
              <InfoCard
                  cardTitle={en.home.cardHeaderTitle}
                  topContentText={props.name}
                  middleContentText={props.geometry.lat}
                  bottomContentText={props.geometry.lng}
              />
            </View>
            <SceneModal
                isVisible={isVisible}
                onBackdropPress={hidePlacesOption}
            >
             <View style={{flex:1}}>
              <GooglePlacesSearch
               headerLeftAction={hidePlacesOption}
               headerTitle={en.home.headerTitle}
               searchInputPlaceholder={en.home.searchPlaceholder}
               onSelectOptions={selectAddress}
              />
             </View>
            </SceneModal>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
   homeSearchBar : {
       backgroundColor:'white',
       marginBottom:10
   },
   screenContainer : {
       flex: 1,
       backgroundColor:color.primary
   }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
