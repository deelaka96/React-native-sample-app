/**
 * Vigasalk App
 * http://HappyAds
 * created by Deelaka Algawatta
 */
import React, { Component } from 'react';
import {
Text,
StyleSheet,
ActivityIndicator,
Button,
Image,
View,
TextInput
} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../actions';

class login extends Component{
    
 
render() {

 
return (

<View style={styles.container}>
<Text style={{textAlign:"center"}}>Please login</Text>
<TextInput placeholder='Enter user name'></TextInput>
<TextInput secureTextEntry={true} placeholder='Enter password' ></TextInput>
<Button color="#003a7a" title="Login"/>
</View>      


);
}
}


    function mapDispatchToProps(dispatch){
      return bindActionCreators(ActionCreators,dispatch)
    }       

export default connect((state)=>{return {
    categories:state.categories,
    CatLoading:state.CatLoading,
    subcategories:state.subcat,
    SubCatLoading:state.SubCatLoading

} },mapDispatchToProps)(login);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
    backgroundColor:'#eeedf2',
  }
})
