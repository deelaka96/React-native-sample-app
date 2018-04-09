/**
 * Vigasalk App
 * http://HappyAds
 * created by Deelaka Algawatta
 */
import React, { Component } from 'react';
import {
Text,
TextInput,
Image,
StyleSheet,
TouchableOpacity,
ActivityIndicator,
ScrollView,
View
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { StackNavigator} from 'react-navigation';

export default class Drawer extends Component{

 static navigationOptions = {
    header:null,
  };
 
render() {
       const { navigate } = this.props.navigation;

   return (
 
<View style={styles.container}>

<View style={styles.background}>
    <View style={{elevation:1,borderBottomWidth:2,borderColor:'#ffe404',padding:10,backgroundColor:"#003a7a",height:60}}>
   
    <Image style={{marginLeft:20,height:45,width:120}} source={require('../assets/images/drawerImage.png')}/>
    </View>
    <View style={styles.navItems}>
      <View style={styles.userLog}>
      </View>
      <TouchableOpacity><View style={styles.navItem}><Icon name='user' style={styles.navIcons}/><Text style={styles.item}>Login</Text></View></TouchableOpacity>
      <TouchableOpacity><View style={styles.navItem}><Icon name='search' style={styles.navIcons}/><Text style={styles.item}>All Ads</Text></View></TouchableOpacity>
      <TouchableOpacity><View style={styles.navItem}><Icon name='settings' style={styles.navIcons}/><Text style={styles.item}>Settings</Text></View></TouchableOpacity>
      <TouchableOpacity><View style={styles.navItem}><Icon name='help-circle' style={styles.navIcons} /><Text style={styles.item}>Help</Text></View></TouchableOpacity>
    </View>
</View>
 </View>
 
      
);
}
}

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#eeedf2'
  },
  background:{
        flex:1
  },

  navItems:{
    padding:10,
    margin:10,
    
  },
  navItem:{
    flexDirection:'row',
    padding:10,
    height:50,
    elevation:1
  },
  item:{
    fontSize:15,
    },
   navIcons:{
     paddingRight:5,
    fontSize:25,
    
  }


});
