import { Component } from 'react'
import './app.scss'

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    // @ts-ignore
    return this.props.children
  }
}

export default App