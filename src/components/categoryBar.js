/**
 * HappyAds
 * Developed by Deelaka Algawatta
 */

import React, { Component } from 'react';
import {
Text,
TextInput,
StyleSheet,
Image,
View
} from 'react-native';

export default class CategoryBar extends Component{

render() {

return (

<View style={styles.container}>
<Text style={{color:'#fff'}}>Category bar</Text>
</View >

);
}
}
const styles=StyleSheet.create({
container:{
height:50,
padding:10,
alignSelf: 'stretch',
backgroundColor:'#003a7a'
}

});