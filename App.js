/**
 * Vigasalk App
 * http://HappyAds
 * created by Deelaka Algawatta
 */
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Main from './src/screens/main';
import {Provider,connect} from 'react-redux';
import {createStore,applyMiddleware,combineReducers,compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducer from './src/reducers'
import {AdNav,TabNav} from './src/config/routes';

const loggerMiddleware = createLogger({predicate:(getState, action)=>__DEV__});

function configureStore(initialState){
const enhancer=compose(
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

return createStore(reducer,initialState,enhancer);
}
const store=configureStore({});

export default class App extends Component<{}> {

  render() {
     

    return (
      
      <Provider store={store}>
   <View style={styles.container}> 
       <AdNav />
   </View>
   </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    },
 
});
