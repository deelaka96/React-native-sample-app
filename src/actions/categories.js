import * as types from './types'

export function fetchCat(type){
     return(dispatch, getState) =>   {
         let url='http://myserver/App/categories.php?type='+type;
    return fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
        if(type=='cat'){
        dispatch (setCat({cats:responseJson}));
        dispatch (catLoading({loading:false}));
        }else{
        dispatch (setSub({scats:responseJson}));
        dispatch (scatLoading({loading:false}));
        }
        
        })
    }
}

export function setCat({cats})   {
    
return {
    type:types.SET_CATEGORIES,
    cats
    
}

}

export function catLoading({loading})   {
return {
    type:types.SET_LOADING_CATEGORIES,
    loading
} 
}
export function setSub({scats})   {
    
return {
    type:types.SET_SUBCATEGORIES,
    scats
    
}

}

export function scatLoading({loading})   {
return {
    type:types.SET_LOADING_SUBCATEGORIES,
    loading
} 
}

