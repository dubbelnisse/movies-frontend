var React = require('react');
var request = require('superagent');

var loginDev = 'http://localhost:3000/user/login';
var loginProd = 'http://46.101.48.224:3000/user/login';


var Login = React.createClass({
  getInitialState: function () {
    return {
      email: '',
      password: '',
    }
  },

  handleChange: function (key) {
    return function (e) {
      var state = {};
      state[key] = e.target.value;
      this.setState(state);
    }.bind(this);
  },

  login:function () {
    request
      .post(loginDev)
      .query({ email: this.state.email })
      .query({ password: this.state.password })
      .end(function(err, data){
        var res = data.body;
        if (res.code === 200) {
          document.cookie = 'user=' + res.email;
          this._rerender();
        } else {
          console.log(data.body);
        }
      }
      .bind(this));
  },

  _rerender:function () {
    this.props.render();
  },

  render:function () {
    return (
      <div>
        <input type="text" placeholder="email" value={this.state.email} onChange={this.handleChange('email')}/>
        <input type="text" placeholder="password" value={this.state.password} onChange={this.handleChange('password')}/>
        <div className="btn btn-primary" onClick={this.login}>LOGIN</div>
      </div>
    );
  }
});

module.exports = Login;