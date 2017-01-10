import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import First from './first.js';

import {
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';

import { test } from '../actions';

class Main extends Component{
  constructor(){
    super();
  }

  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'first':
        return <First navigator={navigator} route={route} title="first"/>;
      case 'second':
        return <Second navigator={navigator} route={route} title="second" />;
    }
  }

  render() {
    return (
      <Navigator
      initialRoute={{id: 'first'}}
      renderScene={this.navigatorRenderScene.bind(this)}/>
    )
  }
}

/*------BIND REDUX ACTIONS TO COMPONENT--------*/
function matchDispatchToProps(dispatch){
	return bindActionCreators({test}, dispatch);
}

/*--------BIND REDUX STATES TO COMPONENT------*/
function mapStateToProps(state){
	return { testing:state.testing }
}

export default connect(mapStateToProps, matchDispatchToProps)(Main);
