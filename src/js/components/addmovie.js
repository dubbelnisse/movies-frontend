var AddMovieForm = require('./addmovieform');
var React = require('react');

var AddMovie = React.createClass({
  render:function() {
    return (
      <div className="add-movie ">
        <AddMovieForm />
      </div>
    );
  }
});

module.exports = AddMovie;
