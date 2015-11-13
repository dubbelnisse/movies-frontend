import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './App.css';
import LatestMovies from '../LatestMovies/LatestMovies';

@CSSModules(styles)
export class App extends Component {
  render () {
    return (
      <div className="container">
        <LatestMovies />
      </div>
    );
  }
}
