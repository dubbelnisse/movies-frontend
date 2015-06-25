var classNames = require('classnames');
var React = require('react');

var AddMovieToggle = React.createClass({
  _toggle: function () {
    this.props.toggle();
  },

  render:function() {
    return (
      <div onClick={this._toggle} className={classNames('add-movie__toggle', { open: this.props.formOpen })}>
        <i className="fa fa-plus"></i>
      </div>
    );
  }
});

module.exports = AddMovieToggle;
