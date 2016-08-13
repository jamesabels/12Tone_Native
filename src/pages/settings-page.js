import React, { Component } from 'react'
import { View, StyleSheet, Navigator, TouchableHighlight } from 'react-native'

// Import Native Base 
import { Container, Content, List, Text, ListItem, Icon, Badge, Radio } from 'native-base';

// Import Actions
import {Actions} from 'react-native-router-flux';

//Import Connect 
import { connect } from 'react-redux';

//Import Styles
import { LayoutStyles, ButtonStyles } from '../style/style.js';

var Options = {}

class SettingsPage extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={LayoutStyles.container}>
        <View style={LayoutStyles.pageWrap}>
          <List>
            <ListItem>
                <Text>Option One</Text>
                <Radio selected={false} />
            </ListItem>
            <ListItem>
                <Text>Option Two</Text>
                <Radio selected={false} />
            </ListItem>
            <ListItem>
                <Text>Option Three</Text>
                <Badge>2</Badge>
            </ListItem>
            <ListItem iconRight>
                <Text>Option Four</Text>
                <Icon name="ios-arrow-forward" />
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

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);