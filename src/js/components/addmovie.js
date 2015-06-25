var AddMovieForm = require('./addmovieform');
var classNames = require('classnames');
var React = require('react');

var AddMovie = React.createClass({

  render:function() {
    return (
      <div className={classNames('add-movie', { open: this.props.formOpen })}>
        <AddMovieForm />
      </div>
    );
  }
});

module.exports = AddMovie;
