import React, { Component } from 'react'
import { View, StyleSheet, Navigator, TouchableHighlight, Image } from 'react-native'

// Import Native Base 
import { Text, Picker, Item, Button, Container, Content } from 'native-base';

// Import Actions
import {Actions} from 'react-native-router-flux';

// Import Styles
import { LayoutStyles, ButtonStyles } from '../style/style.js';  

// Import Actions 
import NotationActions from '../actions/notation_actions.js';  

//Import Connect 
import { connect } from 'react-redux';

//Import Components
import Navbar from '../components/nav-bar.js'; 

class MainPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedRoot: 'C',
      selectedMode: 'Maj'
    }
  }

  componentDidMount () {
  
  }

  render() {
    return (
      <Container style={{marginTop: 25}}> 
        <Content>
          <Navbar hideButtons={true}/>
          <View>
            <Text>Get {this.props.rootNote + ' ' + this.props.mode}</Text>
            <Picker
                ref="rootSelect"
                iosHeader="Select Your Key"
                mode="dropdown"
                selectedValue={this.props.rootNote}
                onValueChange={(value) => this.getSelectedRoot(value)}>
                <Item label="C" value="C"/>
                <Item label="C#" value="C#" />
                <Item label="D" value="D" />
                <Item label="D#" value="D#" />
                <Item label="E" value="E" />
                <Item label="F" value="F" />
                <Item label="F#" value="F#" />
                <Item label="G" value="G" />
                <Item label="G#" value="G#" />
                <Item label="A" value="A" />
                <Item label="A#" value="A#" />
                <Item label="B" value="B" />
            </Picker>
          </View>

          <View>
            <Picker
                ref="modeSelect"
                iosHeader="Select Your Mode"
                mode="dropdown"
                selectedValue={this.props.mode}
                onValueChange={(value) => this.getSelectedMode(value)}>
                <Item label="Major" value="Maj"/>
                <Item label="Minor" value="Min"/>
            </Picker>
          </View>

          <View>
            <Button block style={{backgroundColor: 'black'}} onPress={() => this.submit()}>
              Submit
            </Button>
          </View>
        
        </Content>
      </Container>
    )
  }
  getSelectedRoot (value) {

    this.props.setRoot(value)

    console.log(this.props.state); 
  }
  getSelectedMode (value) {
    
    this.props.setMode(value)

    console.log(this.props.mode); 
  }
  submit () {

    this.props.getScale(this.props.rootNote, this.props.mode);

    console.log('ACTUAL SCALE', this.props.scale); 
    
    Actions.Display(); 
  }
 }

function mapStateToProps(state) {
    return {
        state: state,
        rootNote: state.notation.rootNote,
        mode: state.notation.mode,
        scale: state.notation.scale
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getScale: function (rootNote, mode) {
            dispatch(NotationActions.GET_SCALE(rootNote, mode));
        },
        setRoot: function (rootNote) {
            dispatch(NotationActions.SET_ROOT(rootNote));
        },
        setMode: function (mode) {
            dispatch(NotationActions.SET_MODE(mode));
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


export default connect(mapStateToProps, mapDispatchToProps)(MainPage);