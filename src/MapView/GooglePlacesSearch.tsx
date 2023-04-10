import {View, StyleSheet} from "react-native";
import {GooglePlacesAutocomplete,} from "react-native-google-places-autocomplete";
import color from "~/styles/color";
import React from "react";

import {CloseNav} from "~/lib/nav/Navs";
import constant from "~/lib/constant";

export interface GooglePlacesSearch {
    headerLeftAction:()=> void
    headerTitle: string
    searchInputPlaceholder: string
    onSelectOptions:()=> void
}

const GooglePlacesSearch = (props) => {

    const mapsTextInputProps = {
        autoFocus:true,
        selectionColor: color.gray,
        placeholderTextColor: color.gray,
        fontSize: 16,
        style:styles.searchInputField,
    }

    const {headerLeftAction, headerTitle, searchInputPlaceholder,onSelectOptions} = props
    return (
        <View style={{flex:1}}>
          <View style={{flex:1,marginTop:0}}>
           <CloseNav
            leftAction={headerLeftAction}
            middleContent={headerTitle}
            backgroundColor={color.primary}
           />
           <GooglePlacesAutocomplete
            placeholder={searchInputPlaceholder}
            fetchDetails
            // eslint-disable-next-line @typescript-eslint/ban-types
            renderDescription={({description}: any) => description}
            onPress={onSelectOptions}
            query={{
                key: constant.GooglePlacesApi.key,
                language: 'en'
            }}
            textInputProps={mapsTextInputProps}
            nearbyPlacesAPI={'GooglePlacesSearch'}
            styles={{
                textInputContainer: {
                    backgroundColor: color.primary
                }
            }}
           />
          </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContent: {
        marginLeft: 16
    },
    searchInputField: {
        backgroundColor:'white',
        flex:1,
        marginHorizontal:10,
        marginBottom:10
    }
})


export default GooglePlacesSearch
