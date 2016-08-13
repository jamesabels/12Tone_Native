// Import React
import React, { Component } from 'react';

// Import React Native
import {AppRegistry,} from 'react-native';

// Import App
import App from './src/components/app';

// Import Provider 
import  { Provider } from 'react-redux';

// Import createStore
import { createStore, applyMiddleware } from 'redux';

// Import Promise Middleware
import ReduxThunk from 'redux-thunk';

// Import Reducers
import rootReducer from './src/reducers/root_reducer'; 

// Apply Middleware 
const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

// Create Store
const store = createStoreWithMiddleware(rootReducer);

class Project extends Component {

      constructor(props) {
        super(props)
      }

    render() {
      return (
        <Provider store={store}> 
          <App />
        </Provider>
      );
  }
}

AppRegistry.registerComponent('Project', () => Project);
