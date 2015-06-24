import React from 'react/addons'
let { TestUtils } = React.addons

function createComponent(component, props, ...children) {
  let shallow = TestUtils.createRenderer()
  let kids = children.length > 1 ? children : children[0]
  shallow.render(React.createElement(component, props, kids))
  return shallow.getRenderOutput()
}

export default createComponent

