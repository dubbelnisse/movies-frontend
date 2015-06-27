var React = require('react');
var classNames = require('classnames');

var Message = React.createClass({

  getInitialState: function () {
    return {
      typeError: false,
      typeSuccess: false
    }
  },

  render:function() {
    if (this.props.data.type === 'error') {
      this.state.typeError = true;
      this.state.typeSuccess = false;
    } else {
      this.state.typeError = false;
      this.state.typeSuccess = true;
    }

    return (
      <div className={
        classNames(
          'message',
          {message__error: this.state.typeError},
          {message__success: this.state.typeSuccess},
          {message__active: this.props.data.active}
        )
      }>
        {this.props.data.message}
      </div>
    );
  }
});

module.exports = Message;