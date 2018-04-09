import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const  categories=createReducer({}, {
[types.SET_CATEGORIES](state, action){
         let newState={};
    let c=0;
           action.cats.forEach((cat)=>{
           newState[c++]=cat
        });
        return newState;
    
} 


});
export const  subcat=createReducer({}, {
[types.SET_SUBCATEGORIES](state, action){
         let newState={};
    let c=0;
           action.scats.forEach((scat)=>{
           newState[c++]=scat
        });
        return newState;
    
} 


});
export const  CatLoading=createReducer(true, {
[types.SET_LOADING_CATEGORIES](state, action){
     return action.loading;   
},


});
export const  SubCatLoading=createReducer(true, {
[types.SET_LOADING_SUBCATEGORIES](state, action){
     return action.loading;   
},


});
