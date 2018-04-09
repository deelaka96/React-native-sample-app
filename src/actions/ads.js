import * as types from './types'
export function fetchAds(searchString,searchCat,searchLoc){
    return(dispatch, getState) =>   {
        let url;        
        if(searchString=='all' && searchCat=='all' && searchLoc=='all'){
url='http://myserver/App/getAd.php';
 return fetch(url,{
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },})
        .then((response) => response.json())
        .then((responseJson) => {
        dispatch (setAds({ads:responseJson}));
        dispatch(setLoading({loading:false}));
        }).catch ((ex)=>{
        console.log(ex);
        })
        }   
         if(searchString!='All Categories'){   

 return fetch( 'http://myserver/App/getAd.php?search='+searchString+'&cat='+searchCat,{
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
 })
        .then((response) => response.json())
        .then((responseJson) => {
        dispatch (setAds({ads:responseJson}));
        dispatch(setSearching({searching:false}));
        }).catch ((ex)=>{
        console.log(ex);
        })
        }
   
    }
}

export function setAds({ads})   {
    
return {
    type:types.SET_SEARCHED_ADS,
    ads
    
}

}
export function setLoading({loading})   {
return {
    type:types.SET_LOADING_ADS,
    loading
} 
}
export function setSearching({searching})   {
return {
    type:types.SET_SEARCHING,
    searching
} 
}
export function addCount(){
    return {
        type:types.ADD_AD,
    }
}
export function searchCat(cat){
    return {
        type:types.SEARCH_CAT,
        cat
    }
}
export function searchSub(sub){
    return {
        type:types.SEARCH_SUB,
        sub
    }
}
export function searchString(search){
    return {
        type:types.SEARCH_STRING,
        search
    }
}
export function searchLocation(location){
    return {
        type:types.SEARCH_LOCATION,
        location
    }
}