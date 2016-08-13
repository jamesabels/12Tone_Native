import React, { Component } from 'react'
import { View, StyleSheet, Navigator, TouchableHighlight, Image } from 'react-native'

// Import Native Base 
import { Text, Picker, Item, Button, Container, Content, Tabs, Grid, Col } from 'native-base';

// Import Tab View
import ScrollableTabView from 'react-native-scrollable-tab-view';

// Import Actions
import {Actions} from 'react-native-router-flux';

// Import Styles
import { LayoutStyles, ButtonStyles } from '../style/style.js';  

// Import Actions 
import TestActions from '../actions/test_actions.js';  

//Import Connect 
import { connect } from 'react-redux';

// Import Components
import ChordList from '../components/chord-list.js';
import NoteList from '../components/note-list.js'; 

export default class Navbar extends Component {

  constructor(props) {
    super(props)
  }

  render() {
      if (this.props.hideButtons) {
          return (
            <Grid>
                <Col style={{ backgroundColor: '#D954D7', height: 50, justifyContent: 'center'}}>
                    <Text style={{textAlign: 'center'}}>12 Tone</Text>
                </Col>
            </Grid>
        )
      }
      else {
         return (
            <Grid>
                <Col style={{ backgroundColor: '#D93735', height: 50, justifyContent: 'center'}}>
                    <Text style={{textAlign: 'center'}} onPress={() => this.keySelectButton()}>Pick Key</Text>
                </Col>
                <Col style={{ backgroundColor: '#D954D7', height: 50, justifyContent: 'center'}}>
                    <Text style={{textAlign: 'center'}}>12 Tone</Text>
                </Col>
                <Col style={{ backgroundColor: '#D93735', height: 50, justifyContent: 'center'}}>
                    <Text style={{textAlign: 'center'}} onPress={() => this.menuButton()}>Menu</Text>
                </Col>
            </Grid>
        ) 
      }  
  }
  menuButton () {
      Actions.Menu(); 
  }
  keySelectButton () {
      Actions.pop(); 
  }
 }

var styles = StyleSheet.create({
  stateDisplay: { 
    flex: 1,
    backgroundColor: 'darkgrey',
    justifyContent: 'center'
  },
  displayText: {
    textAlign: 'center',
    fontSize: 50
  },
  stateButton: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'dimgrey',
    padding: 40,
    borderColor: 'black',
    borderBottomWidth: 10
  },
  stateButtonText: {
     textAlign: 'center',
     color: 'white',
     fontSize: 40,
  } 
});
