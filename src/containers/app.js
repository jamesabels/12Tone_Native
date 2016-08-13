// Import React 
import React, { Component } from 'react';

// Import Router 
import {Scene, Router, Actions} from 'react-native-router-flux';

// Import Pages
import SettingsPage from '../pages/settings-page.js';
import MenuPage from '../pages/menu-page.js';
import MainPage from '../pages/main-page.js';
import DisplayPage from '../pages/display-page.js'; 


export default class App extends Component {

    constructor(props) {
      super(props)
    }

    render() {
      return (
        <Router>
          <Scene key="Root">
            <Scene 
              key="Main" 
              component={MainPage}
              hideNavBar={true} 
            />
            <Scene key="Display" component={DisplayPage} title="Display" hideNavBar={true}/>
            <Scene key="Settings" component={SettingsPage} title="Settings"/>
            <Scene key="Menu" component={MenuPage} title="Menu" hideNavBar={false} />
          </Scene>
        </Router>
      );
  }
}