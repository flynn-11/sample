import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect  
} from 'react-router-dom';
import axios from 'axios';

// components
import Home from './Home';
import NotFound from './NotFound';


// redux
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import MainReducer from './redux/main-reducer.js';

// apollo

import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Query } from 'react-apollo';



class App extends Component {
  store = createStore(MainReducer, applyMiddleware(thunk));


  constructor(props) {
    super(props);
    this.state = {
      loading: true
    } 
  }


  render() {
    return (
      <Provider store={this.store}>
        <BrowserRouter>
          <div>
            
            <Switch>
              <Route exact path="/" render={() => (
                <Home/>                 
              )}/>

              <Route component={NotFound} />

              <Route exact path="/test" render={()=>(
                <div>Testing this test route to make sure it work...</div>
              )}/>
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
