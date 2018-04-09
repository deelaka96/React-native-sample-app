/**
 * Vigasalk App
 * http://HappyAds
 * created by Deelaka Algawatta
 */
import React, { Component } from 'react';
import {
Image,
StyleSheet,
ActivityIndicator,
View
} from 'react-native';


export default class Loading extends Component{

render() {

return (

<View style={styles.container}>
  <Image style={{height:100,width:120,margin:40}}source={require('../assets/images/logo.png')}/>  
  <ActivityIndicator color="#ffe404" size="large" />
</View>
        

);
}
}

           


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0054a6',
  },
 
});
