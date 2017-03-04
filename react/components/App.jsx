import React from 'react';
import Login from './Login';
import Header from './Header';

export default class App extends React.Component {

  render() {
    const ControlLabel = 'ControlLabel';

    return (
      <div className="main-container">
        <Header />
        <h2>Main Page!</h2>
        <Login />
      </div>
    );
  }
}
