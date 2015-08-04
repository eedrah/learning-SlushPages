var React = require('react')

class App extends React.Component {
  render () {
    return <span>wooo!</span>
  }
}

React.render(
  <App />,
  document.querySelector('main')
)
