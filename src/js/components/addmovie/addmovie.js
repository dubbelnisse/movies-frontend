var React = require('react');
var AddMovieForm = require('./addmovieform');
var Login = require('../login/login');
var classNames = require('classnames');
var request = require('superagent');

var userDev = 'http://localhost:3000/user';
var userProd = 'http://46.101.48.224:3000/user';

var AddMovie = React.createClass({
  getInitialState: function () {
    return {
      loggedIn: false,
      email: '',
      username: ''
    }
  },

  componentDidMount: function() {
    this.checkCookie();
  },

  getUser:function () {
    request
      .post(userDev)
      .query({ email: this.state.email })
      .end(function(err, data){
        var res = data.body;
        if (res.code === 200) {
          console.log(res);
          this.setState({
            username: res.username
          });
        } else {
          console.log(data.body);
        }
      }
      .bind(this));
  },

  checkCookie: function () {
    var cookie = document.cookie;
    var cookieName = cookie.split('=')[0];
    var email = cookie.split('=')[1];
    if (cookieName === 'user') {
      this.state.email = email;
      this.state.loggedIn = true;
      this.getUser();
    }
  },

  _rerender: function () {
    this.checkCookie();
  },

  render:function() {
    var form;
    if (this.state.loggedIn) {
      form = <AddMovieForm username={this.state.username} />
    } else {
      form = <Login render={this._rerender} />
    }

    return (
      <div className={classNames('add-movie', { open: this.props.formOpen })}>
        {form}
      </div>
    );
  }
});

module.exports = AddMovie;
