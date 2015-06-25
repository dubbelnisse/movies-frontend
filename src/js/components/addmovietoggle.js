var React = require('react');

var AddMovieToggle = React.createClass({
  _toggle: function () {
    this.props.toggle();
  },

  render:function() {
    return (
      <div className="add-movie__toggle" onClick={this._toggle}>
        <i className="fa fa-plus"></i>
      </div>
    );
  }
});

module.exports = AddMovieToggle;
