import React from 'react';
import {
Text,
View
} from 'react-native';
import {StackNavigator,TabNavigator} from 'react-navigation';
import Main from '../screens/main';
import Ad from '../screens/adView';
import Add from '../screens/addAd';
import Location from '../screens/location';
import Categories from '../screens/categories';
import SubCat from '../screens/subcategories';

import Icon from 'react-native-vector-icons/Feather';

export const AdNav = StackNavigator({
  Home:{screen:Main,
  navigationOptions:{
    header:null,
  }  
},
  Ad:{screen:Ad,
  navigationOptions:{
    title:'Details',
    headerTitleStyle:{fontSize:14},
    headerTintColor:'white',
    headerStyle:{backgroundColor:'#003a7a',height:50,},
    headerRight:<View style={{padding:10,flexDirection:'row'}}><Icon style={{color:'white',fontSize:20,marginRight:10}} name='share-2'/><Icon style={{color:'white',fontSize:20}} name='heart'/></View>,    
 
}},
newAd:{
screen:Add,
},
location:{
  screen:Location,
  navigationOptions:{
     headerTitleStyle:{fontSize:14},
    headerTintColor:'white',
    headerStyle:{backgroundColor:'#003a7a',height:50,},
    headerRight:<View style={{padding:10,flexDirection:'row'}}><Icon style={{color:'white',fontSize:20,marginRight:10}} name='share-2'/><Icon style={{color:'white',fontSize:20}} name='heart'/></View>,    
 
  }
},
categories:{
  screen:Categories,
  navigationOptions:{
    title:'Categories',
    headerTitleStyle:{fontSize:14},
    headerTintColor:'white',
    headerStyle:{backgroundColor:'#003a7a',height:50,},
  }

},
subcategories:{
  screen:SubCat,
  navigationOptions:{
    title:'Categories',
    headerTitleStyle:{fontSize:14},
    headerTintColor:'white',
    headerStyle:{backgroundColor:'#003a7a',height:50,},
 
}
}

});
export const TabNav = TabNavigator({
  Home:{screen:Main,
  navigationOptions:{
    header:null,
  }  
},
  Ad:{screen:Ad,
  navigationOptions:{
    title:'Details',
    headerTitleStyle:{fontSize:14},
    headerTintColor:'white',
    headerStyle:{backgroundColor:'#32579f',height:50,},
    headerRight:<View style={{padding:10,flexDirection:'row'}}><Icon style={{color:'white',fontSize:20,marginRight:10}} name='share'/><Icon style={{color:'white',fontSize:20}} name='favorite-border'/></View>,    
 
}},
newAd:{
screen:Add,
},
location:{
  screen:Location,
  navigationOptions:{
     headerTitleStyle:{fontSize:14},
    headerTintColor:'white',
    headerStyle:{backgroundColor:'#0054a6',height:50,},
    headerRight:<View style={{padding:10,flexDirection:'row'}}><Icon style={{color:'white',fontSize:20,marginRight:10}} name='share'/><Icon style={{color:'white',fontSize:20}} name='favorite-border'/></View>,    
 
  }
},
categories:{
  screen:Categories,
  navigationOptions:{
    headerTitleStyle:{fontSize:14},
    headerTintColor:'white',
    headerStyle:{backgroundColor:'#0054a6',height:50,},
    headerRight:<View style={{padding:10,flexDirection:'row'}}><Icon style={{color:'white',fontSize:20,marginRight:10}} name='share'/><Icon style={{color:'white',fontSize:20}} name='favorite-border'/></View>,    
 
}
}

});