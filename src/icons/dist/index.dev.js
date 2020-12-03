"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _SvgIcon = _interopRequireDefault(require("@/components/SvgIcon"));

var _vueFontawesome = require("@fortawesome/vue-fontawesome");

var _fontawesomeSvgCore = require("@fortawesome/fontawesome-svg-core");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// svg component
_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faFilter);

_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faGlobe);

_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faChartLine);

_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faChevronCircleRight);

_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faChevronCircleLeft);

_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faCircle);

_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faWindowMinimize);

_vue["default"].component('font-awesome-icon', _vueFontawesome.FontAwesomeIcon);

_vue["default"].component('svg-icon', _SvgIcon["default"]);

var req = require.context('./svg', false, /\.svg$/);

var requireAll = function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
};

requireAll(req);