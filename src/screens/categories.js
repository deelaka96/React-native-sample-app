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
Image,
ScrollView,
View
} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../actions';

class Categories extends Component{
    
 constructor(props){
     super(props);

     this.props.fetchCat('cat');
  }
category(){
    return Object.keys(this.props.categories).map(key => this.props.categories[key] );

}
setcategory(cate){
    this.props.searchCat(cate)
    this.props.navigation.navigate('subcategories',{catname:cate})
}
render() {

 if(this.props.CatLoading){
  return <View style={styles.container}>
      <View style={{justifyContent:'center',alignItems:'center',flex:1,}}>
      <ActivityIndicator color="#ffe404" size="large" />
      </View>
      </View>
}

return (

<View style={styles.container}>
   
{/*<Image  style={{position:'absolute',left:0,right:0,top:0,flex:1}} source={require('../assets/images/737.jpg')}/>*/}
<ScrollView>
       
<View style={styles.categories}>
{this.category().map((cat)=>{
  return ( 
  
<TouchableOpacity key={cat.cat_id} onPressOut={()=>this.setcategory(cat.cat_name)}><View style={styles.category}>

<Image style={{height:40,width:40}} source={{uri:'http://myserver/App/Assets/Images/'+cat.Icon}}/>
<Text style={{textAlign:'center'}}>{cat.cat_name}</Text>
</View></TouchableOpacity>
)
   })
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
    categories:state.categories,
    CatLoading:state.CatLoading,
    subcategories:state.subcat,
    SubCatLoading:state.SubCatLoading

} },mapDispatchToProps)(Categories);


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
    justifyContent:'center', 
},
category:{
    alignItems:'center',
    justifyContent:'center',
    height:100,
    width:100,
    margin:5,   
    backgroundColor:'#fafbfb'
}

});
