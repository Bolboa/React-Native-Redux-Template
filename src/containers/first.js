import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';

import { test } from '../actions'

class First extends Component{
  constructor(){
    super();
  }
  render() {
    return (
      <View>
        <Text>Hello World</Text>
      </View>
    );
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

export default connect(mapStateToProps, matchDispatchToProps)(First);
