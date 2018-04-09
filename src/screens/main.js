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
DrawerLayoutAndroid,
Button,
TouchableOpacity,
View
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../actions';
import Icon from 'react-native-vector-icons/Feather';
import Loading from './loading';
import Search from '../components/search';
import Ads from '../components/ads';
import CategoryBar from '../components/categoryBar';
import Drawer from '../components/drawer';



class Main extends Component{
 
constructor(props){
  super(props)
// this.props.addCount();
 
}

render() {

// if(this.props.AdLoading){
//   <Loading />
// }
 var navigationView = (
<View style={{flex: 1}}>
<Drawer {...this.props}/>
</View>
 

  );


return (
  
<DrawerLayoutAndroid
      drawerWidth={300}
      drawerPosition={DrawerLayoutAndroid.positions.Left}
      renderNavigationView={() => navigationView}
       ref={'DRAWER'}
      >
<View style={styles.container}>
<Search {...this.props} />
<Ads {...this.props}/>
<TouchableOpacity onPress={()=>this.props.navigation.navigate('newAd')} style={{right:10,bottom:70,position:'absolute',backgroundColor:'transparent',alignSelf:'center',width:55,height:55,justifyContent:'center'}}>
  <View style={{alignItems:'center',justifyContent:'center',width:50,height:50,borderRadius:100,backgroundColor:'#0054a6'}}><Icon style={{backgroundColor:'transparent',color:'white',fontSize:20}} name='plus' /></View>
  </TouchableOpacity>
<CategoryBar/>
</View>        
    </DrawerLayoutAndroid>

);
}
}


    function mapDispatchToProps(dispatch){
      return bindActionCreators(ActionCreators,dispatch)
    }       

export default connect((state)=>{return {
    AdLoading:state.AdLoading,
    searchSub:state.searchSub,
    

} },mapDispatchToProps)(Main);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f9fbfc',
    
  },

});
