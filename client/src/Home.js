import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: 'hide-view',
    }
    
  }

  componentWillMount(){
    fetch('/testip')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(JSON.stringify(myJson));
    });
  }


  render() {
    return (
      <div className="stripe-lrg">
        <h1 className="fontSize4">hello world... we got this it! glad to see you! hopefully this works...</h1>    
      </div>
    );
  }
}

var mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.loggedIn
  }
}

export default Home;
