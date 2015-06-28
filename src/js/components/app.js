var Movies = require('./latestmovies/movies');
var AddMovie = require('./addmovie/addmovie');
var AddMovieToggle = require('./addmovie/addmovietoggle');
var request = require('superagent');
var React = require('react');

var dev = 'http://localhost:3000/latest';
var prod = 'http://46.101.48.224:3000/latest';

var App = React.createClass({

  loadMovies: function(take) {
    var takeLength = take ? take : 12;
    request
      .get(dev)
      .query({ take: takeLength })
      .end(function(err, data){
        this.setState({data: data.body});
      }
      .bind(this));    
  },

  getInitialState: function(){
    return {
      data: [],
      formOpen: false
    };
  },

  componentDidMount: function() {
    this.loadMovies();
  },

  loadMore: function() {
    var take = Object.keys(this.state.data).length + 12;
    this.loadMovies(take);
  },

  _toggle: function () {
    this.setState({
      formOpen: this.state.formOpen ? false : true
    });
  },

  render:function() {
    return (
      <div>
        <AddMovieToggle formOpen={this.state.formOpen} toggle={this._toggle}/>
        <AddMovie formOpen={this.state.formOpen}/>
        <Movies data={this.state.data}/>
        <div className="btn btn-primary movies__load-more" onClick={this.loadMore}><i className="fa fa-angle-double-down"></i>GET MORE</div>
      </div>
    );
  }
});

module.exports = App;