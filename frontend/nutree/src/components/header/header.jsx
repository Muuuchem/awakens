import React from 'react';
import GreetingContainer from './greeting_container';
class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <h1 className="App-title">NuTree</h1>
        <GreetingContainer/>
      </header>
    );
  }
}

export default Header;
