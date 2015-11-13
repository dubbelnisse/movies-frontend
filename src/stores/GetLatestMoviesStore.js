import alt from '../alt';
import GetLatestMoviesActions from '../actions/GetLatestMoviesActions';

class GetLatestMoviesStore {
  constructor() {
    this.bindListeners({
      handleGetLatestMovies: GetLatestMoviesActions.get
    });

    this.state = {
      latestMovies: []
    };
  }

  handleGetLatestMovies (data) {
    this.setState({
      latestMovies: data
    });
  }
}

export default alt.createStore(GetLatestMoviesStore, 'GetLatestMoviesStore');
