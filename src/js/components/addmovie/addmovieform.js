var React = require('react');
var request = require('superagent');

var AddMovieForm = React.createClass({
  
  getInitialState: function () {
    return {
      id: '',
      rating: '',
      date: ''
    }
  },

  handleChange: function (key) {
    return function (e) {
      var state = {};
      state[key] = e.target.value;
      this.setState(state);
    }.bind(this);
  },

  send: function() {
    if (!this.state.id || !this.state.rating) {
      console.log('error');
      return;
    }
    console.log(this.state.id, this.state.rating, this.state.date);
    request
      .post('http://localhost:3000/add')
      .query({ id: this.state.id })
      .query({ rating: this.state.rating })
      .query({ date: this.state.date })
      .end(function(err, data){
        console.log(data);
      }
      .bind(this));
  },

  render:function() {
    return (
      <div className="add-movie__form">
        <input type="text" placeholder="tmdb id" value={this.state.id} onChange={this.handleChange('id')}/>
        <input type="text" placeholder="rating" value={this.state.rating} onChange={this.handleChange('rating')}/>
        <input type="text" placeholder="date (leave empty if today)" value={this.state.date} onChange={this.handleChange('date')}/>
        <div className="btn btn-primary" onClick={this.send}>SAVE</div>
      </div>
    );
  }
});

module.exports = AddMovieForm;