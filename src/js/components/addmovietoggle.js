var React = require('react');

var AddMovieToggle = React.createClass({
  render:function() {
    return (
      <div className="add-movie__toggle">
        <i className="fa fa-plus"></i>
      </div>
    );
  }
});

module.exports = AddMovieToggle;
