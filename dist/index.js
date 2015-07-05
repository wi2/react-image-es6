'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSonic = require('react-sonic');

var ReactImg = (function (_React$Component) {
  function ReactImg(props) {
    _classCallCheck(this, ReactImg);

    _get(Object.getPrototypeOf(ReactImg.prototype), 'constructor', this).call(this, props);
    this.state = {};
  }

  _inherits(ReactImg, _React$Component);

  _createClass(ReactImg, [{
    key: 'onloadImage',
    value: function onloadImage() {
      this.state.loaded = true;
      this.forceUpdate();
    }
  }, {
    key: 'getDim',
    value: function getDim() {
      this.width = this.refs.image.getDOMNode().width || this.props.width;
      this.height = this.refs.image.getDOMNode().height || this.props.height;
      this.state.loading = true;
      this.forceUpdate();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (typeof Image !== 'undefined') {
        this.image = new Image();
        this.image.onload = this.onloadImage.bind(this);
        this.image.src = this.props.src;
        this.image.setAttribute('class', this.props.className);
        this.getDim();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.loaded) return _react2['default'].createElement('img', { src: this.props.src, className: this.props.className || '', alt: this.props.alt || '' });else if (this.state.loading) return _react2['default'].createElement(_reactSonic.ReactArcSonic, { fillColor: '#FF0000', width: this.width, height: this.height, className: this.props.className || '', title: this.props.alt || '' });else return _react2['default'].createElement('img', { ref: 'image', className: this.props.className || 'image', alt: this.props.alt || '' });
    }
  }]);

  return ReactImg;
})(_react2['default'].Component);

exports.ReactImg = ReactImg;