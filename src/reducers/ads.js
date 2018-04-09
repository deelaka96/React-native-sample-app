import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const  searchedAds=createReducer({},{
[types.SET_SEARCHED_ADS](state, action){
    let newState={};
    let c=0;
           action.ads.forEach((ad)=>{
           newState[c++]=ad
        });
        return newState;
    
}
});
 
export const  AdCount=createReducer(0 , {
[types.SET_SEARCHED_ADS](state, action){
     return action.ads.length;   
},

});
export const  AdLoading=createReducer(true, {
[types.SET_LOADING_ADS](state, action){
     return action.loading;   
},


});
export const  AdSearching=createReducer(true, {
[types.SET_SEARCHING](state, action){
     return action.searching;   
},


});
export const  searchSub=createReducer('All Categories', {
[types.SEARCH_SUB](state, action){
     return action.sub;   
},


});
export const  searchCat=createReducer('All Categories', {
    [types.SEARCH_CAT](state, action){
         return action.cat;   
    },
    
    
    });
export const  searchString=createReducer('All Ads', {
    [types.SEARCH_STRING](state, action){
         return action.search;   
    },
    
    
    });
    export const  searchLoc=createReducer('Anywhere', {
        [types.SEARCH_LOCATION](state, action){
             return action.location;   
        },
        
        
        });
