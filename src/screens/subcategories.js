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
TouchableOpacity,
ScrollView,
Image,
View
} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../actions';

class SubCategories extends Component{

constructor(props){
super(props);
this.props.fetchCat('sub');

}

subcategory(){
return Object.keys(this.props.subcategories).map(key => this.props.subcategories[key] );

}
setSub(scat){
this.props.searchSub(scat)
this.props.setSearching({searching:true})
this.props.navigation.navigate('Home');
}
render() {
const { params } = this.props.navigation.state;


if(this.props.SubCatLoading){
return <View style={styles.container}>  
      <View style={{justifyContent:'center',alignItems:'center',flex:1,}}>
      <ActivityIndicator color="#ffe404" size="large" />
      </View>
      </View>
}
return (

<View style={styles.container}>

<ScrollView>

<View style={styles.categories}>

{this.subcategory().map((scat)=>{
if(scat.sub_cat_main_cat==params.catname){
return ( 

<TouchableOpacity onPressOut={()=>this.setSub(scat.sub_cat_name)} key={scat.sub_cat_id} ><View style={styles.category}>
<Text>{scat.sub_cat_name}</Text>
</View></TouchableOpacity>
)
}})
}


</View>      
</ScrollView>

</View>      

);
}
}


function mapDispatchToProps(dispatch){
return bindActionCreators(ActionCreators,dispatch)
}       

export default connect((state)=>{return {   
subcategories:state.subcat,
SubCatLoading:state.SubCatLoading

} },mapDispatchToProps)(SubCategories);


const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor:'#eeedf2',

},
categories:{
padding:20,
flex:1,
flexDirection:'row',
flexWrap:'wrap',
alignItems:'center',
justifyContent:'center'

},
category:{
height:100,
width:100,
margin:5,   
backgroundColor:'#fafbfb'
}

});
