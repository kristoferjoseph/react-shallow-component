'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var TestUtils = _reactAddons2['default'].addons.TestUtils;

function createComponent(component, props) {
  var shallow = TestUtils.createRenderer();

  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  var kids = children.length > 1 ? children : children[0];
  shallow.render(_reactAddons2['default'].createElement(component, props, kids));
  return shallow.getRenderOutput();
}

exports['default'] = createComponent;
module.exports = exports['default'];

