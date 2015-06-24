import React from 'react'

class TestComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>{this.props.title}</div>
  }
}

TestComponent.defaultProps = {title: 'BOOYA'}

export default TestComponent

