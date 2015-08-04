var React = require('react')
var r = React.DOM

var App = React.createClass({
  render: function () {
    return r.span({}, 'wooo!')
  }
})

React.render(
  React.createElement(App, {}),
  document.querySelector('main')
)
