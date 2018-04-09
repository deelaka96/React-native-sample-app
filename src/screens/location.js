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
import Location from '../components/location';
import Drawer from '../components/drawer';


class Main extends Component{
 


render() {
      
 var navigationView = (
<View style={{flex: 1}}>
<Drawer {...this.props}/>
</View>
 

  );

return (
<DrawerLayoutAndroid
      drawerWidth={300}
      drawerPosition={DrawerLayoutAndroid.positions.Left}
      renderNavigationView={() => navigationView}>
<View style={styles.container}>
<Location {...this.props}/>
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

} },mapDispatchToProps)(Main);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
    
  },

});
