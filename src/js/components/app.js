var Movies = require('./movies');
var AddMovie = require('./addmovie');
var AddMovieToggle = require('./addmovietoggle');
var React = require('react');
var request = require('superagent');

var App = React.createClass({

  loadMovies: function(take) {
    var takeLength = take ? take : 12;
    request
      .get('http://localhost:3000/latest')
      .query({ take: takeLength })
      .end(function(err, data){
        this.setState({data: data.body});
      }
      .bind(this));    
  },

  getInitialState: function(){
    return {
      data: [],
      toggle: false
    };
  },

  componentDidMount: function() {
    this.loadMovies();
  },

  loadMore: function() {
    var take = Object.keys(this.state.data).length + 12;
    this.loadMovies(take);
  },
  
  render:function() {
    return (
      <div>
        <AddMovieToggle />
        <AddMovie />
        <Movies data={this.state.data}/>
        <div className="btn btn-primary movies__load-more" onClick={this.loadMore}><i className="fa fa-angle-double-down"></i>GET MORE</div>
      </div>
    );
  }
});

module.exports = App;