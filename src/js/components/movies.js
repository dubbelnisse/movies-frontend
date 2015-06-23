var Movie = require('./movie');
var React = require('react');

var Movies = React.createClass({
  render:function() {
    return (
      <div className="movies">
        {this.props.data.map(function(movie, i) {
          return <Movie key={'movie-' + i} {...movie}/>
        })}
      </div>
    );
  }
});

module.exports = Movies;

