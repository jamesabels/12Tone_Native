import React, { Component } from 'react'
import { View, StyleSheet, Navigator, TouchableHighlight, Image } from 'react-native'

// Import Native Base 
import { Text, Picker, Item, Button, Container, Content, Tabs } from 'native-base';

import ScrollableTabView from 'react-native-scrollable-tab-view';

// Import Styles
import { LayoutStyles, ButtonStyles } from '../style/style.js';  

// Import Actions 
import TestActions from '../actions/test_actions.js';  

//Import Connect 
import { connect } from 'react-redux';

// Import Components
import ChordList from '../components/chord-list.js';
import NoteList from '../components/note-list.js'; 
import Navbar from '../components/nav-bar.js'; 

class DisplayPage extends Component {

  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Container style={{marginTop: 25}}> 
        <Content>
            <Navbar />
            <ScrollableTabView>
                <NoteList tabLabel="Notes" notes={this.props.scale}/>
                <ChordList tabLabel="Chords" chords={this.props.scale} />
            </ScrollableTabView>
        </Content>
      </Container>
    )
  }
}

function mapStateToProps(state) {
    return {
      state: state,
      scale: state.notation.scale
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetch: function (url) {
            dispatch(TestActions.GET_DATA(url));
        } 
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


export default connect(mapStateToProps, mapDispatchToProps)(DisplayPage);