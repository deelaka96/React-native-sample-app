import React, { Component } from 'react';
import {
Text,
TextInput,
StyleSheet,
Image,
TouchableOpacity,
View
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../actions';
var {GooglePlacesAutocomplete} = require('react-native-google-places-autocomplete');

class Location extends Component{
setLocation(loc){
    this.props.searchLocation(loc.description);
    this.props.navigation.navigate('Home');

}
  render() {
    return (
      <GooglePlacesAutocomplete
        placeholder='Search'
        minLength={1} // minimum length of text to search
        autoFocus={false}
        fetchDetails={true}
        onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
          console.log(data);
          console.log(details);
          this.setLocation(data)
        }}
        getDefaultValue={() => {
          return ''; // text input default value
        }}
        query={{
          // available options: https://developers.google.com/places/web-service/autocomplete
          key: 'AIzaSyCuuFCRgptqaE2ZiaWy6QLKkSQQa276M3A',
          language: 'en', // language of the results
          types: '(cities)', // default: 'geocode'
          
        }}
        styles={{
          description: {
            fontWeight: 'bold',
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
        }}
        
        currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
        currentLocationLabel="Current location"
        nearbyPlacesAPI='GoogleReverseGeocoding' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
        GoogleReverseGeocodingQuery={{
          rankby: 'distance',
            
          // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
        }}
        GooglePlacesSearchQuery={{
          // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
        }}
        
        
        filterReverseGeocodingByTypes={['country', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
     
      />
    );
  }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(ActionCreators,dispatch)
    }       
    
    export default connect((state)=>{return {   
    subcategories:state.subcat,
    SubCatLoading:state.SubCatLoading
    
    } },mapDispatchToProps)(Location);
    
    