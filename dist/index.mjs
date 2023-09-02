import * as components from '@ant-design/icons';
import React, { useMemo } from 'react';
import ASelect from 'antd/es/select';

function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/**
 * 图标库映射
 */
var icons = [{
  key: 'Directional',
  title: '方向性图标',
  icons: ['step-backward', 'step-forward', 'fast-backward', 'fast-forward', 'shrink', 'arrows-alt', 'down', 'up', 'left', 'right', 'caret-up', 'caret-down', 'caret-left', 'caret-right', 'up-circle', 'down-circle', 'left-circle', 'right-circle', 'double-right', 'double-left', 'vertical-left', 'vertical-right', 'vertical-align-top', 'vertical-align-middle', 'vertical-align-bottom', 'forward', 'backward', 'rollback', 'enter', 'retweet', 'swap', 'swap-left', 'swap-right', 'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right', 'play-circle', 'up-square', 'down-square', 'left-square', 'right-square', 'login', 'logout', 'menu-fold', 'menu-unfold', 'border-bottom', 'border-horizontal', 'border-inner', 'border-outer', 'border-left', 'border-right', 'border-top', 'border-verticle', 'pic-center', 'pic-left', 'pic-right', 'radius-bottomleft', 'radius-bottomright', 'radius-upleft', 'radius-upright', 'fullscreen', 'fullscreen-exit']
}, {
  key: 'Suggested',
  title: '提示建议性图标',
  icons: ['question', 'question-circle', 'plus', 'plus-circle', 'pause', 'pause-circle', 'minus', 'minus-circle', 'plus-square', 'minus-square', 'info', 'info-circle', 'exclamation', 'exclamation-circle', 'close', 'close-circle', 'close-square', 'check', 'check-circle', 'check-square', 'clock-circle', 'warning', 'issues-close', 'stop']
}, {
  key: 'Editor',
  title: '编辑类图标',
  icons: ['edit', 'form', 'copy', 'scissor', 'delete', 'snippets', 'diff', 'highlight', 'align-center', 'align-left', 'align-right', 'bg-colors', 'bold', 'italic', 'underline', 'strikethrough', 'redo', 'undo', 'zoom-in', 'zoom-out', 'font-colors', 'font-size', 'line-height', 'dash', 'small-dash', 'sort-ascending', 'sort-descending', 'drag', 'ordered-list', 'unordered-list', 'radius-setting', 'column-width', 'column-height']
}, {
  key: 'Data',
  title: '数据类图标',
  icons: ['area-chart', 'pie-chart', 'bar-chart', 'dot-chart', 'line-chart', 'radar-chart', 'heat-map', 'fall', 'rise', 'stock', 'box-plot', 'fund', 'sliders']
}, {
  key: 'Brand',
  title: '网站通用图标',
  icons: ['android', 'apple', 'windows', 'ie', 'chrome', 'github', 'aliwangwang', 'dingding', 'weibo-square', 'weibo-circle', 'taobao-circle', 'html5', 'weibo', 'twitter', 'wechat', 'youtube', 'alipay-circle', 'taobao', 'skype', 'qq', 'medium-workmark', 'gitlab', 'medium', 'linkedin', 'google-plus', 'dropbox', 'facebook', 'codepen', 'code-sandbox', 'amazon', 'google', 'codepen-circle', 'alipay', 'ant-design', 'ant-cloud', 'aliyun', 'zhihu', 'slack', 'slack-square', 'behance', 'behance-square', 'dribbble', 'dribbble-square', 'instagram', 'yuque', 'alibaba', 'yahoo', 'reddit', 'sketch']
}, {
  key: 'Application',
  title: '品牌和标识',
  icons: ['account-book', 'alert', 'api', 'appstore', 'audio', 'bank', 'bell', 'book', 'bug', 'bulb', 'calculator', 'build', 'calendar', 'camera', 'car', 'carry-out', 'cloud', 'code', 'compass', 'contacts', 'container', 'control', 'credit-card', 'crown', 'customer-service', 'dashboard', 'database', 'dislike', 'environment', 'experiment', 'eye-invisible', 'eye', 'file-add', 'file-excel', 'file-exclamation', 'file-image', 'file-markdown', 'file-pdf', 'file-ppt', 'file-text', 'file-unknown', 'file-word', 'file-zip', 'file', 'filter', 'fire', 'flag', 'folder-add', 'folder', 'folder-open', 'frown', 'funnel-plot', 'gift', 'hdd', 'heart', 'home', 'hourglass', 'idcard', 'insurance', 'interaction', 'layout', 'like', 'lock', 'mail', 'medicine-box', 'meh', 'message', 'mobile', 'money-collect', 'pay-circle', 'notification', 'phone', 'picture', 'play-square', 'printer', 'profile', 'project', 'pushpin', 'property-safety', 'read', 'reconciliation', 'red-envelope', 'rest', 'rocket', 'safety-certificate', 'save', 'schedule', 'security-scan', 'setting', 'shop', 'shopping', 'skin', 'smile', 'sound', 'star', 'switcher', 'tablet', 'tag', 'tags', 'tool', 'thunderbolt', 'trophy', 'unlock', 'usb', 'video-camera', 'wallet', 'apartment', 'audit', 'barcode', 'bars', 'block', 'border', 'branches', 'ci', 'cloud-download', 'cloud-server', 'cloud-sync', 'cloud-upload', 'cluster', 'coffee', 'copyright', 'deployment-unit', 'desktop', 'disconnect', 'dollar', 'download', 'ellipsis', 'euro', 'export', 'file-done', 'file-jpg', 'file-protect', 'file-sync', 'file-search', 'fork', 'gateway', 'global', 'gold', 'history', 'import', 'inbox', 'key', 'laptop', 'link', 'line', 'loading-3-quarters', 'loading', 'man', 'menu', 'monitor', 'more', 'number', 'percentage', 'paper-clip', 'pound', 'poweroff', 'pull-request', 'qrcode', 'reload', 'safety', 'robot', 'scan', 'search', 'select', 'shake', 'share-alt', 'shopping-cart', 'solution', 'sync', 'table', 'team', 'to-top', 'trademark', 'transaction', 'upload', 'user-add', 'user-delete', 'usergroup-add', 'user', 'usergroup-delete', 'wifi', 'woman']
}];

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".s-icon-dropdown-wrapper .rc-virtual-list {\n  padding-left: 8px !important;\n  margin-bottom: 4px !important;\n}\n.s-icon-dropdown-wrapper .rc-virtual-list .rc-virtual-list-holder-inner {\n  display: block !important;\n}\n.s-icon-dropdown-wrapper .rc-virtual-list .ant-select-item-option-grouped {\n  padding-left: 0 !important;\n}\n.s-icon-dropdown-wrapper .rc-virtual-list .ant-select-item-option-selected {\n  background-color: #b1d6fe;\n}\n.s-icon-dropdown-wrapper .rc-virtual-list .ant-select-item-option {\n  margin: 3px 5px !important;\n  padding: 5px 7px !important;\n  line-height: 18px !important;\n  display: inline-block !important;\n}\n.s-icon-dropdown-wrapper .rc-virtual-list .ant-select-item-option .s-icon-dropdown-hidden {\n  display: none !important;\n  padding: 0 3px;\n  font-size: 12px;\n  vertical-align: middle;\n}\n";
styleInject(css_248z);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var SIconSelect = function SIconSelect(props) {
  var value = props.value;
  var style = props.style;
  var onChange = props.onChange;
  var className = props.className;
  var placeholder = props.placeholder || '';
  var showSearch = props.showSearch !== false;
  var allowClear = props.allowClear !== false;
  var disabled = props.disabled === true;
  var groups = useMemo(function () {
    return icons.map(function (group) {
      return {
        key: group.key,
        title: group.title,
        children: group.icons.map(function (icon) {
          return {
            key: icon,
            label: icon,
            value: icon
          };
        })
      };
    });
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ASelect, {
    value: value,
    style: _objectSpread({
      width: '100%'
    }, style),
    virtual: false,
    className: className,
    placeholder: placeholder,
    showSearch: showSearch,
    allowClear: allowClear,
    disabled: disabled,
    onChange: onChange,
    optionFilterProp: "label",
    popupClassName: "s-icon-dropdown-wrapper"
  }, groups.map(function (group) {
    return /*#__PURE__*/React.createElement(ASelect.OptGroup, {
      key: group.key,
      label: /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: '14px'
        }
      }, group.title)
    }, group.children.map(function (opt) {
      var type = opt.value.replace(/(^|-)(\w)/g, function (t1, t2, t3) {
        return t3 && t3.toUpperCase();
      });
      var AIcon = components["".concat(type, "Outlined")];
      return /*#__PURE__*/React.createElement(ASelect.Option, {
        key: opt.key,
        value: opt.value,
        title: opt.label,
        label: opt.label
      }, /*#__PURE__*/React.createElement(AIcon, {
        style: {
          fontSize: '18px',
          verticalAlign: 'middle'
        }
      }), /*#__PURE__*/React.createElement("span", {
        className: "s-icon-dropdown-hidden"
      }, opt.label));
    }));
  })));
};

export { SIconSelect, SIconSelect as default };
