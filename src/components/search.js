/**
 * Vigasalk App
 * http://HappyAds
 * created by Deelaka Algawatta
 */
import React, { Component } from 'react';
import {
Text,
TextInput,
StyleSheet,
Image,
TouchableOpacity,
View
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import Collapsible from 'react-native-collapsible';
import {connect} from 'react-redux';

import { searchCat } from '../actions/ads';


 class Search extends Component{
state={
showMenu:false,
isCollapsed:true,
placeholder:'All Ads ● '+' '+this.props.searchCat+' '+' ● '+this.props.searchLoc
}

render() {
return (
<View style={styles.container}>

    
    <View style={styles.container}>
       {/* <Image  resizeMode="cover" style={{position:'absolute',height:700,}} 
source={require('../assets/images/737.jpg')} /> */}
 <Collapsible style={{height:30,backgroundColor:'transparent',padding:10,}} collapsed={this.state.isCollapsed}>
          <Icon onTouchStart={()=>this.setState({isCollapsed:true,
        placeholder:'All Ads ● '+' '+this.props.searchCat+' '+' ● '+this.props.searchLoc})} 
        style={{width:20,fontSize:25,color:'white',marginLeft:5}} name='chevron-up' />
    </Collapsible>
        <View style={styles.toolbar}>
            <TouchableOpacity style={{flex:1}}>
            <View onTouchStart={()=>this.setState({isCollapsed:false,placeholder:'All Ads'})} style={styles.toolbarBtn} >
                <Icon style={styles.icon} name='search'/>
                <Text style={styles.toolbarText}> {this.state.placeholder}</Text>
    </View></TouchableOpacity>
    
            </View> 
        <Collapsible collapsed={this.state.isCollapsed}>

            <View style={styles.toolbar}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('categories')} style={{flex:1}}>
                <View style={styles.toolbarBtn} >
                <Icon style={styles.icon} name='tag'/>
                <Text style={styles.toolbarText}> {this.props.searchCat} </Text>
                </View>
                </TouchableOpacity>
            </View> 
            
            <View style={styles.toolbar}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('location')} style={{flex:1}} >
                    
                <View style={styles.toolbarBtn} >
                
                <Icon style={styles.icon} name='map-pin'/>
                <Text style={styles.toolbarText}> {this.props.searchLoc}</Text>
                
                </View>
            </TouchableOpacity>
                
            </View> 
        </Collapsible>

    </View>
</View>        

);
}
}
function maptStateToProps(state){
    return {
      searchSub:state.searchSub,
      searchCat:state.searchCat,
      searchString:state.searchString,
      searchLoc:state.searchLoc
      
    }
    }
    
    export default connect(maptStateToProps)(Search);
    
    
    
           


const styles = StyleSheet.create({
  container: {
    backgroundColor:'#003a7a',
    
  },
 toolbar:{
     height:55,
     alignSelf:'stretch',
     backgroundColor:'transparent',
     padding:10,
     flexDirection:'row'
 },
 icon:{
    margin:2,
    fontSize:16,
    color:'white'
 },
 toolbarBtn:{
     flex:1,
     borderRadius:3,
     flexDirection:'row',
     height:35,
    //  backgroundColor:'rgba(255,255,255,0.2)',
            backgroundColor:'rgba(10,10,10,0.2)',

     padding:6
 },
 toolbarText:{
margin:1,
fontSize:15,
color:'white'
 }
});
