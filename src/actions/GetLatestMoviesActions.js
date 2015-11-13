import alt from '../alt';
import HttpClient from '../core/HttpClient';

class GetLatestMoviesActions {
  get () {
    HttpClient
      .get('http://localhost:3000/latest')
      .then(data => {
        console.log(data);
        this.dispatch(data);
      });
  }
}

export default alt.createActions(GetLatestMoviesActions);
