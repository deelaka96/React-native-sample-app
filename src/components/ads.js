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
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import Loading from '../screens/loading';

class Ads extends Component{

constructor(props){
super(props)
if (this.props.searchSub=='All Categories'){
this.props.fetchAds('all','all','all');
}else{
  this.props.fetchAds('all',this.props.searchSub,'all');
}
this.props.addCount();

} 


ads(){
return Object.keys(this.props.searchedAds).map(key =>this.props.searchedAds[key] );
}

render() {
 if (this.props.searchSub!='All Categories' && this.props.AdSearching){
return <View style={styles.container}>  
      <View style={{justifyContent:'center',alignItems:'center',flex:1,}}>
      <ActivityIndicator color="#ffe404" size="large" />
      </View>
      </View>
}

   return (
 
<View style={styles.container}>
 
  <View style={{backgroundColor:'#003a7a',padding:5,flexDirection:'row',alignItems:'stretch',}}>
    <Icon  name='eye' style={{marginLeft:5,color:'white',padding:1}} /><Text style={{textAlign:'center',fontSize:10,color:'white'}}> Showing {this.props.AdCount} advertiesments</Text>
  </View>
   <ScrollView>
    
{
this.ads().map((ad)=>{
if(!ad.ad_title){
return(
  <View key="0"><Text>{ad.msg}</Text></View>   
)
}
  else{
  return ( 
    
  <TouchableOpacity  onPress={() => this.props.navigation.navigate('Ad',{adid:ad.ad_id})} key={ad.ad_id} >
    <View style={styles.ad}>
      <View >
       <Image  style={styles.img}  source={{uri:ad.ad_img_1}}  resizeMode="contain" />       
      </View>  
     
     <View style={{flex:1}}>
       <Text style={{fontWeight:'bold'}}>{ad.ad_title}</Text>
       <Text style={{color:'#001951',fontSize:10}}>{ad.f_u_name}</Text>
       <Text style={{fontSize:12}}>Rs.{ad.ad_price}</Text>
       <Text style={{fontSize:9,textAlign:'right'}}>{ad.ad_time}</Text>
     </View>
     
  </View>
  </TouchableOpacity>
  
  ) 
   }})
   }
   
   </ScrollView> 
 </View> 
      
);
}
}

function maptStateToProps(state){
return {
  AdLoading:state.AdLoading,
  AdCount:state.AdCount,
  searchedAds:state.searchedAds,
  searchSub:state.searchSub,
  searchString:state.searchString,
  AdSearching:state.AdSearching
  
}
}

export default connect(maptStateToProps)(Ads);



const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor:'#eeedf2',
},
ad:{
padding:5,
marginTop:10,
flexDirection:'row',
backgroundColor:'#fafbfb'

},
img:{
padding:5,
marginRight:10,
width:70,
height:70
},
});
