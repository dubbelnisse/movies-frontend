var React = require('react');
var moment = require('moment');

var Movie = React.createClass({

  getInitialState: function () {
      return {hover: false};
  },
  
  mouseOver: function () {
      this.setState({hover: true});
  },
  
  mouseOut: function () {
      this.setState({hover: false});
  },

  render:function() {
    var watched = moment(this.props.last_watched).format('YYYY-MM-DD');
    var showRating = this.props.rating ? true : false;

    var hover = 'movies__movie-overlay';

    if (this.state.hover) {
      hover = 'movies__movie-overlay movies__movie-show';
    }

    return (
      <div className="movies__movie" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        <img src={'http://image.tmdb.org/t/p/w500' + this.props.poster_path} />
        <div className={hover}>
          <div className="movies__movie-title">{this.props.title}</div>
          <div className="movies__movie-watched"><i className="fa fa-clock-o"></i>{watched}</div>
          { showRating ? <div className="movies__movie-rating"><i className="fa fa-heart-o"></i>{this.props.rating}/10</div> : null }
        </div>
      </div>
    );
  }
});

module.exports = Movie;