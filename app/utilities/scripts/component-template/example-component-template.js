import React, { Component } from 'react';
import PARENT from '../../Charts/PARENT';
import config from './config.js';

class COMPONENT extends Component {
  render() {
    return (
      <div>
        <h2 className="chart-container-title">PARENT</h2>
        <div className="chart-container">
          <PARENT options={ config } />
        </div>
      </div>
    );
  }
}

export default COMPONENT;
