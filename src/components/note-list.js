// Import React 
import React, { Component } from 'react';

// Import RN 
import { View, StyleSheet, TouchableHighlight} from 'react-native'

// Import Native Base 
import { Text, Grid, Row, Col } from 'native-base';

// Import Actions 
import SynthActions from '../actions/synth_actions.js';  

//Import Connect 
import { connect } from 'react-redux';

class NoteList extends Component {

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
        this.props.playNote(key)
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
        playNote: function (note) {
            dispatch(SynthActions.PLAY_NOTE(note));
        } 
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

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);