var React = require('react');
var moment = require('moment');

var Movie = React.createClass({

  

  render:function() {
    console.log(this.props.backdrop_path);
    var watched = moment(this.props.last_watched).format('YYYY-MM-DD');
    return (
      <div className="movies__movie">
        <img src={'http://image.tmdb.org/t/p/w300' + this.props.poster_path} />
        <p>{watched}</p>
        <p>{this.props.rating}</p>
      </div>
    );
  }
});

module.exports = Movie;