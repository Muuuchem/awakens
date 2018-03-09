import React from 'react';
import GreetingContainer from './greeting_container';

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <div className="App-title">
          <h1>NuTree</h1>
          <div id="edamam-badge" data-color="transparent" />
        </div>
        <GreetingContainer />
      </header>
    );
  }
}

export default Header;
