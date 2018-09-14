'use strict';

exports.__esModule = true;
exports['default'] = createHTML5TouchBackend;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactDndHtml5Backend = require('react-dnd-html5-backend');

var _HTML5TouchBackend = require('./HTML5TouchBackend');

var _HTML5TouchBackend2 = _interopRequireDefault(_HTML5TouchBackend);

var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);

exports.NativeTypes = _reactDndHtml5Backend.NativeTypes;
exports.getEmptyImage = _reactDndHtml5Backend.getEmptyImage;

function createHTML5TouchBackend(manager) {
  _HTML5TouchBackend2['default'].prototype = _reactDndHtml5Backend2['default'](manager);

  return new _HTML5TouchBackend2['default'](manager);
}