import React, { Component } from 'react'
import { View, StyleSheet, Navigator, TouchableHighlight } from 'react-native'

// Import Native Base 
import { Container, Content, List, Text, ListItem, Icon, Badge } from 'native-base';

// Import Actions
import {Actions} from 'react-native-router-flux';

//Import Connect 
import { connect } from 'react-redux';

//Import Styles
import { LayoutStyles, ButtonStyles } from '../style/style.js';

class MenuPage extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={[LayoutStyles.container]}>
        <View style={LayoutStyles.pageWrap}>
                <List>
                    <ListItem iconLeft onPress={() => Actions.pop()}>
                        <Icon name="ios-home" />
                        <Text>Home</Text>
                    </ListItem>
                    <ListItem iconLeft onPress={() => Actions.Settings()}>
                        <Icon name="ios-options" />
                        <Text>Settings</Text>
                    </ListItem>
                    <ListItem iconLeft>
                        <Icon name="ios-notifications" />
                        <Text>Another Item</Text>
                        <Badge>2</Badge>
                    </ListItem>
                    <ListItem iconLeft iconRight>
                        <Icon name="ios-mic" />
                        <Text>One More Example</Text>
                        <Icon name="ios-mic-outline" />
                    </ListItem>
                </List>
            </View>
        </View>
    );
  }
}

function mapStateToProps(state) {
    return {
       
    }
}

function mapDispatchToProps(dispatch) {
    return {
     
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuPage);