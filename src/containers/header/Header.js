import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import '../../styles/App.css';

class Header extends Component {
  render() {
    return (
        <header className="header">
          <h1 className="App-title">Welcome to Movies Counter</h1>
        </header>
    );
  }
}

export default Header;
