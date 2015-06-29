var React = require('react');
var Message = require('../messages/message');
var request = require('superagent');

var addDev = 'http://localhost:3000/add';
var addProd = 'http://46.101.48.224:3000/add';
var loginDev = 'http://localhost:3000/user/login';
var loginProd = 'http://46.101.48.224:3000/user/login';

var AddMovieForm = React.createClass({
  
  getInitialState: function () {
    return {
      loggedIn: false,
      id: '',
      rating: '',
      date: '',
      email: '',
      password: '',
      message: {
        active: false,
        type: '',
        message: ''
      }
    }
  },

  handleChange: function (key) {
    return function (e) {
      // Reset if errors
      this.messageReset();

      var state = {};
      state[key] = e.target.value;
      this.setState(state);
    }.bind(this);
  },

  send: function() {
    // Everything is empty
    if (!this.state.id && !this.state.rating) {
      this.setState({
        message: {
          active: true,
          type: 'error',
          message: 'You need to fill out the form'
        }
      });
      return;
    }
    // Id is empty
    if (!this.state.id) {
      this.setState({
        message: {
          active: true,
          type: 'error',
          message: 'ID is mandatory'
        }
      });
      return;
    }
    // Rating is empty
    if (!this.state.rating) {
      this.setState({
        message: {
          active: true,
          type: 'error',
          message: 'Rating is mandatory'
        }
      });
      return;
    }

    request
      .post(addDev)
      .query({ id: this.state.id })
      .query({ rating: this.state.rating })
      .query({ date: this.state.date })
      .end(function(err, data){
        if (data.status === 400 || data.status === 404) {
          this.setState({
            message: {
              active: true,
              type: 'error',
              message: data.text
            }
          });
          return;
        }
        this.setState({
          id: '',
          rating: '',
          date: '',
          message: {
            active: true,
            type: 'success',
            message: 'Great! Movie has been added!'
          }
        });
      }
      .bind(this));
  },

  messageReset: function () {
    this.setState({
      message: {
        active: false,
        type: '',
        message: ''
      }
    });
  },

  login:function () {
    request
      .post(loginDev)
      .query({ email: this.state.email })
      .query({ password: this.state.password })
      .end(function(err, data){
        var res = data.body;
        if (res.code === 200) {
          console.log('logged in');
        } else {
          console.log(data.body);
        }
      }
      .bind(this));
  },

  render:function() {
    return (
      <div className="add-movie__form">
        <input type="text" placeholder="tmdb id" value={this.state.id} onChange={this.handleChange('id')}/>
        <input type="text" placeholder="rating" value={this.state.rating} onChange={this.handleChange('rating')}/>
        <input type="text" placeholder="date (leave empty if today)" value={this.state.date} onChange={this.handleChange('date')}/>
        <Message data={this.state.message}/>
        <div className="btn btn-primary" onClick={this.send}>SAVE</div>
        <input type="text" placeholder="email" value={this.state.email} onChange={this.handleChange('email')}/>
        <input type="text" placeholder="password" value={this.state.password} onChange={this.handleChange('password')}/>
        <div className="btn btn-primary" onClick={this.login}>LOGIN</div>
      </div>
    );
  }
});

module.exports = AddMovieForm;