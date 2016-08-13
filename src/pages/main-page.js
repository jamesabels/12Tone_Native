import React, { Component } from 'react'
import { View, StyleSheet, Navigator, TouchableHighlight, Image } from 'react-native'

// Import Native Base 
import { Text, Picker, Item, Button, Container, Content } from 'native-base';

// Import Actions
import {Actions} from 'react-native-router-flux';

// Import Styles
import { LayoutStyles, ButtonStyles } from '../style/style.js';  

// Import Actions 
import TestActions from '../actions/test_actions.js';  

//Import Connect 
import { connect } from 'react-redux';

//Import Components
import Navbar from '../components/nav-bar.js'; 

class MainPage extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount () {
  
  }

  render() {
    return (
      <Container style={{marginTop: 25}}> 
        <Content>
          <Navbar hideButtons={true}/>
          <View>
            <Text>Key</Text>
            <Picker
                iosHeader="Select Your Key"
                mode="dropdown"
                selectedValue={"C"}
                onValueChange={() => {console.log('Picker Changed!!!')}}>
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
            <Text>Mode</Text>
            <Picker
                iosHeader="Select Your Mode"
                mode="dropdown"
                selectedValue={"Maj"}
                onValueChange={() => {console.log('Picker Changed!!!')}}>
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
  submit () {
    Actions.Display(); 
  }
}

function mapStateToProps(state) {
    return {
        image: state.test.image
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


export default connect(mapStateToProps, mapDispatchToProps)(MainPage);