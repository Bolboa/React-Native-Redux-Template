import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import allReducers from './reducers';

import Main from './containers/main.js';

const store = createStore(allReducers);

export default Home = () => {
	return (
        <Provider store = {store}>
          <Main />
        </Provider>
	);
}
