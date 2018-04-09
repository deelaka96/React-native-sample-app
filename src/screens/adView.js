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
Dimensions,
ScrollView,
View
} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import { StackNavigator } from 'react-navigation';
import Ad from '../screens/adView';

const deviceWidth = Dimensions.get('window').width;

class AdView extends Component{


ads(){
return Object.keys(this.props.searchedAds).map(key =>this.props.searchedAds[key] );
}

render() {
    const navigate  = this.props.navigation;
 const { params } = this.props.navigation.state;

 {if (this.props.AdLoading){
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );

   }
    
  }
   return (

     <View style={{flex:1,backgroundColor:'#e8e9e4'}}>
           {/*<Image  resizeMode="cover" blurRadius={1} style={{position:'absolute',height:700,}} 
source={require('../assets/images/fog.png')} />*/}
      <ScrollView>
<View style={styles.container}>


{this.ads().map((ad)=>{
  if(ad.ad_id==params.adid){
  return (
    <View key={ad.ad_id} > 
       <View style={styles.slider}>

       <Image  style={styles.img}  source={{uri:ad.ad_img_1}}  resizeMode="contain" />       
       </View>
        
      <View style={styles.content}>
         <Text style={styles.heading}>{ad.ad_title}</Text>
         <Text style={{marginBottom:10,fontSize:12}}>for sale by {ad.f_u_name}</Text>
         <View style={{flexDirection:'row'}}>
         <Text style={styles.subhead}>Category: </Text>
         <Text style={styles.desc}>{ad.ad_m_cat}/{ad.ad_sub_cat}</Text>
         </View>
         <View style={{flexDirection:'row'}}>
         <Text style={styles.subhead}>Price: </Text>
         <Text style={styles.desc}>Rs.{ad.ad_price}</Text>
         </View>
         <View style={{flexDirection:'row'}}>
         <Text style={styles.subhead}>Location: </Text>
         <Text style={styles.desc}>{ad.ad_location}</Text>
         </View>
         <View style={{flexDirection:'row'}}>
         <Text style={styles.subhead}>Condition: </Text>
         <Text style={styles.desc}>{ad.ad_itemCondi}</Text>
         </View>
         </View>
         <View style={styles.content}>
         <Text style={styles.subhead}>Description</Text>
         <Text style={styles.desc}>{ad.ad_desc}</Text>
       </View>
</View>
   

  )
   }})
   }
   
 </View> 
       </ScrollView> 
 
      </View>

);
}
}

function maptStateToProps(state){
return {
  AdLoading:state.AdLoading,
  AdCount:state.AdCount,
  searchedAds:state.searchedAds 
}
}

export default connect(maptStateToProps)(AdView);



const styles = StyleSheet.create({
container: {
flex: 1,
margin:10,
backgroundColor:'transparent',
},
img:{
flex:1
},
slider:{
height:250,
backgroundColor:"white",
elevation:1,
borderRadius:4
},
heading:{
// textAlign:'center',
fontSize:18,
fontWeight:'bold',
color:'#666',
},
content:{
padding:15,
elevation:1,
backgroundColor:'white',
marginTop:10,
borderRadius:4

},
subhead:{
marginTop:5,
fontSize:12,
fontWeight:'bold',
color:'#666'
},
desc:{
marginTop:5,
fontSize:12,
elevation:1
}
});
