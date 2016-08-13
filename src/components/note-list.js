// Import React 
import React, { Component } from 'react';

// Import RN 
import { View, StyleSheet, TouchableHighlight} from 'react-native'

// Import Native Base 
import { Text, Grid, Row, Col } from 'native-base';

export default class NoteList extends Component {

    constructor(props) {
      super(props)
        this.state = {
            keyLabel: "C Major",
            notes: ["C", "D", "E", "F", "G", "A", "B"],
            chords: ["C Maj","D Maj", "E Min", "F Maj", "G Maj", "A Maj", "B Min"]
        }
    }

    componentDidMount () {
        console.log(this.props.notes); 
    }

    render() {
        if(this.props.notes) {
            return (
                <View style={styles.listContainer}>
                        {this.noteList()}
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
    noteList () {
      return this.props.notes.map(function(note, i) {
        return (
            <View ref='keyView' style={styles.listItem} key={note}>
                <Text ref="noteText" value={i} onPress={() => this.getPressedNote(note)} style={styles.listItemText}>
                    {note}
                </Text>
            </View> 
        )   
      }.bind(this));
    }
    getPressedNote (key) {
        console.log('Getting Pressed Key!'); 
        console.log(key)
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
