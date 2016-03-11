import React from 'react';
import Header from '../Header';

class App extends React.Component {
  render() {
    return (
    <div className="app-container">
       {this.props.children}
    </div>);
  }
}

export default App;
