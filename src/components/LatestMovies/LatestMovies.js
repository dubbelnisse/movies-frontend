import React, { Component, PropTypes } from 'react';
import HttpClient from '../../core/HttpClient';
import connectToStores from 'alt/utils/connectToStores';
import GetLatestMoviesActions from '../../actions/GetLatestMoviesActions';
import GetLatestMoviesStore from '../../stores/GetLatestMoviesStore';

const propTypes = {
  latestMovies: PropTypes.array
};

@connectToStores
export default class LatestMovies extends Component {
  componentDidMount() {
    console.log('load movies');
    GetLatestMoviesActions.get();
  }

  static getStores() {
    return [GetLatestMoviesStore];
  }

  static getPropsFromStores() {
    return GetLatestMoviesStore.getState();
  }

  render () {
    return (
      <div className="latest-movies">
        Latest movies
        <ul>
        {
          this.props.latestMovies.map( (movie, i) => {
            return <li key={i}>{movie.title}</li>
          })
        }
        </ul>
      </div>
    );
  }
}

LatestMovies.propTypes = propTypes;
