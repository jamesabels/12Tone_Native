// Import React 
import React, { Component } from 'react';

// Import RN 
import { View, StyleSheet, TouchableHighlight} from 'react-native'

// Import Native Base 
import { Text, Grid, Row, Col } from 'native-base';

export default class ChordList extends Component {

    constructor(props) {
      super(props)
    }

    componentDidMount () {
        console.log(this.props.chords); 
    }

    render() {
        if(this.props.chords) {
            return (
                <View style={styles.listContainer}>
                        {this.chordList()}
                </View> 
            )    
        }
        else {
            return (
                <View>
                    <Text>ERROR</Text>
                </View> 
            )
        }   
    }
    chordList () {
      return this.props.chords.map(function(chord, i) {
        return (
            <View ref='chordView' style={styles.listItem} key={chord}>
                <Text ref="chordText" value={i} onPress={() => this.getPressedChord(chord)} style={styles.listItemText}>
                    {chord}
                </Text>
            </View> 
        )   
      }.bind(this));
    }
    getPressedChord (chord) {
        console.log('Getting Pressed Key!'); 
        console.log(chord)
    }
 }

var styles = StyleSheet.create({
  listContainer: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'stretch',
      justifyContent: 'center'
  },
  listItem: {
    flex: 1, 
    padding: 15,
  },
  listItemText: {
    textAlign: 'center',
  }
});
