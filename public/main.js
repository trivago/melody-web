/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 180);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var freeGlobal = __webpack_require__(44);

/** Detect free variable `self`. */
var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseIsNative = __webpack_require__(80),
    getValue = __webpack_require__(112);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
}

module.exports = isObjectLike;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, '__esModule', { value: true });

var melodyIdom = __webpack_require__(9);

/**
 * Created by pgotthardt on 11/04/16.
 */
/**
 * Utility function to add capabilities to an object. Such a capability
 * is usually called a "mixin" and can be either
 *
 * - an object that is merged into the prototype of `target`
 * - a function taking the prototype and optionally returning an object which
 *   is merged into the prototype
 * - a falsy value (`false`, `null` or `undefined`) which is ignored.
 *   This is useful for adding a capability optionally.
 *
 * @param target The constructor of a class
 * @param {...Mixin} mixins The mixins applied to the `target`
 * @returns {*}
 */
function mixin(target) {
  var obj = typeof target === 'function' ? target.prototype : target;
  // If implementation proves to be too slow, rewrite to use a proper loop
  for (var i = 1, len = arguments.length; i < len; i++) {
    var _mixin = arguments[i];
    _mixin && Object.assign(obj, typeof _mixin === 'function' ? _mixin(obj) : _mixin);
  }
  return target;
}

/**
 * A simple state container which is modified through actions
 * by using a reducer.
 *
 * When the returned state function is invoked without parameters,
 * it returns the current state.
 *
 * If the returned function is invoked with an action, the reducer is executed
 * and its return value becomes the new state.
 *
 * @param reducer
 * @returns {Function}
 */
/**
 * Created by pgotthardt on 11/04/16.
 */
function createState(reducer) {
  var state = reducer(undefined, {
    type: 'MELODY/@@INIT'
  });

  return function store(action) {
    if (action) {
      state = reducer(state, action) || state;
    }
    return state;
  };
}

/**
 * The `type` of the action which is triggered when the properties of
 * a component are changed.
 *
 * Actions of this type follow the "Standard Flux Action" pattern. They have
 * a property `type`, equal to this value, and a property `payload` which is
 * an object containing the new properties.
 *
 * @type {string}
 */
var RECEIVE_PROPS = 'MELODY/RECEIVE_PROPS';

/**
 * An Action Creator which creates an {@link RECEIVE_PROPS} action.
 * @param payload The new properties
 * @param meta The component which will receive new properties
 * @returns ReceivePropsAction
 */
/**
 * Created by pgotthardt on 11/04/16.
 */
function setProps(payload, meta) {
  return {
    type: RECEIVE_PROPS,
    payload: payload,
    meta: meta
  };
}

var hasOwn = Object.prototype.hasOwnProperty;

// based on react-redux
function shallowEquals(a, b) {
  if (a === b) {
    return true;
  }

  if (!a || !b) {
    return false;
  }

  var keyOfA = Object.keys(a),
      keysOfB = Object.keys(b);

  if (keyOfA.length !== keysOfB.length) {
    return false;
  }

  for (var i = 0; i < keyOfA.length; i++) {
    if (!hasOwn.call(b, keyOfA[i]) || a[keyOfA[i]] !== b[keyOfA[i]]) {
      return false;
    }
  }

  return true;
}

// type ComponentImpl = {
//   /**
//    * The element associated with this component.
//    */
//   el: Node,
//   /**
//    * A map of references to native HTML elements.
//    */
//   refs: { [key: string]: Element },

//   /**
//    * Set new properties for the Component.
//    * This might cause the component to request an update.
//    */
//   apply(props: any): void,
//   /**
//    * Executed after a component has been mounted or updated.
//    * After this method has been triggered, the component is considered stable and
//    * accessing its own DOM should be safe.
//    * The children of this Component might not have rendered.
//    */
//   notify(): void,
//   /**
//    * Invoked when a component should render itself.
//    */
//   render(): void
// };


function Component(element, reducer) {
  // part of the public API
  this.el = element;
  this.refs = Object.create(null);
  // needed for this type of component
  this.props = null;
  this.oldProps = null;
  this.oldState = null;
  this['MELODY/STORE'] = createState(reducer);
  this.isMounted = false;
  this.dispatch = this.dispatch.bind(this);
  this.getState = this.getState.bind(this);
  this.state = this.getState();
  this.componentDidInitialize();
  this.componentWillMount();
}
Object.assign(Component.prototype, {
  /**
   * Set new properties for the Component.
   * This might cause the component to request an update.
   */
  apply: function apply(props) {
    if (!this.oldProps) {
      this.oldProps = this.props;
    }
    this.dispatch(setProps(props, this));
  },

  /**
   * Executed after a component has been mounted or updated.
   * After this method has been triggered, the component is considered stable and
   * accessing the DOM should be safe.
   * The children of this Component might not have been rendered.
   */
  notify: function notify() {
    if (this.isMounted) {
      this.componentDidUpdate(this.oldProps || this.props, this.oldState || this.state);
    } else {
      this.isMounted = true;
      this.componentDidMount();
    }
    this.oldProps = null;
    this.oldState = null;
  },
  dispatch: function dispatch(action) {
    var newState = this['MELODY/STORE'](action);
    var newProps = this.props;
    var isReceiveProps = action.type === RECEIVE_PROPS;
    if (isReceiveProps) {
      newProps = action.payload;
    }
    var shouldUpdate = isReceiveProps && !this.isMounted || this.el && this.shouldComponentUpdate(newProps, newState);
    if (shouldUpdate && this.isMounted) {
      this.componentWillUpdate(newProps, newState);
    }
    if (isReceiveProps) {
      this.props = newProps;
    }
    if (shouldUpdate) {
      melodyIdom.enqueueComponent(this);
    }
    return newState || this.state;
  },
  getState: function getState() {
    return this['MELODY/STORE']();
  },
  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
    return !shallowEquals(this.state, nextState);
  },

  /**
   * Invoked when a component should render itself.
   */
  render: function render() {},
  componentDidInitialize: function componentDidInitialize() {},
  componentWillMount: function componentWillMount() {},
  componentDidMount: function componentDidMount() {},
  componentWillUpdate: function componentWillUpdate() {},
  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {},

  /**
   * Invoked before a component is unmounted.
   */
  componentWillUnmount: function componentWillUnmount() {}
});

function mapPropsToState(state, action) {
  return action.type === RECEIVE_PROPS ? action.payload : state || {};
}

function createComponentConstructor(Parent, parentReducer) {
  function ChildComponent(el, reducer) {
    if (!this || !(this instanceof ChildComponent)) {
      var EnhancedChild = createComponentConstructor(ChildComponent, parentReducer);
      for (var i = 0, len = arguments.length; i < len; i++) {
        mixin(EnhancedChild, arguments[i]);
      }
      return EnhancedChild;
    }
    Parent.call(this, el, reducer || parentReducer);
  }
  ChildComponent.prototype = Object.create(Parent.prototype, {
    constructor: { value: ChildComponent }
  });
  return ChildComponent;
}

function createComponent(template, reducer) {
  var finalReducer = reducer || mapPropsToState;
  var ChildComponent = createComponentConstructor(Component, finalReducer);
  ChildComponent.prototype.displayName = template && template.displayName ? 'Component<' + template.displayName + '>' : 'Component<unknown>';
  ChildComponent.prototype.render = function () {
    this.oldState = this.state;
    this.state = this.getState();
    return template.render(this.state);
  };
  for (var i = 2, len = arguments.length; i < len; i++) {
    mixin(ChildComponent, arguments[i]);
  }
  return ChildComponent;
}

/**
 * Created by pgotthardt on 13/04/16.
 */
function render(el, Component, props) {
  var result = melodyIdom.patchOuter(el, function () {
    melodyIdom.mount(el, Component, props);
  });
  if (process.env.NODE_ENV === 'test') {
    melodyIdom.flush({
      didTimeout: false,
      timeRemaining: function timeRemaining() {
        return 10;
      }
    });
  }
  return result;
}

function unmountComponentAtNode(node) {
  if (!node) {
    return;
  }
  var data = node['__incrementalDOMData'];
  // No data? No component.
  if (!data) {
    return;
  }
  // No componentInstance? Unmounting not needed.
  var componentInstance = data.componentInstance;

  if (!componentInstance) {
    return;
  }
  // Tear down components
  melodyIdom.unmountComponent(componentInstance);
  // Remove node data
  node['__incrementalDOMData'] = undefined;
}

/**
 * Created by pgotthardt on 01/04/16.
 */

exports.createComponent = createComponent;
exports.setProps = setProps;
exports.RECEIVE_PROPS = RECEIVE_PROPS;
exports.render = render;
exports.unmountComponentAtNode = unmountComponentAtNode;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var root = __webpack_require__(1);

/** Built-in value references. */
var _Symbol = root.Symbol;

module.exports = _Symbol;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Symbol = __webpack_require__(6),
    getRawTag = __webpack_require__(109),
    objectToString = __webpack_require__(140);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
    if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}

module.exports = baseGetTag;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

module.exports = eq;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault(ex) {
    return ex && (typeof ex === 'undefined' ? 'undefined' : _typeof2(ex)) === 'object' && 'default' in ex ? ex['default'] : ex;
}

var _debounce = _interopDefault(__webpack_require__(156));

var parentToChildren = new WeakMap();
var childToParent = new WeakMap();
function link(parent, child) {
    childToParent.set(child, parent);
    var children = getChildren(parent);
    children.push(child);
}
function unlink(node) {
    parentToChildren.delete(node);
    childToParent.delete(node);
}
function getChildren(parent) {
    var children = parentToChildren.get(parent);
    if (!children) {
        children = [];
        parentToChildren.set(parent, children);
    }
    return children;
}
function getParent(child) {
    return childToParent.get(child);
}
function reset(node) {
    parentToChildren.set(node, []);
}

/**
 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A cached reference to the hasOwnProperty function.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * A cached reference to the create function.
 */
function Blank() {}
Blank.prototype = Object.create(null);
/**
 * Used to prevent property collisions between our "map" and its prototype.
 * @param {!Object<string, *>} map The map to check.
 * @param {string} property The property to check.
 * @return {boolean} Whether map has property.
 */
var has = function has(map, property) {
    return hasOwnProperty.call(map, property);
};
/**
 * Creates an map object without a prototype.
 * @return {!Object}
 */
var createMap = function createMap() {
    return new Blank();
};
var unmountComponent = function unmountComponent(comp) {
    getChildren(comp).forEach(unmountComponent);
    unlink(comp);
    if (!comp.el) {
        return;
    }
    drop(comp);
    var data = comp.el['__incrementalDOMData'];
    comp.componentWillUnmount();
    if (data && data.componentInstance) {
        data.componentInstance = null;
    }
    comp.el = null;
};
var documentRange;
/* istanbul ignore if */
if (document.createRange) {
    documentRange = document.createRange();
    if (documentRange.selectNode) {
        documentRange.selectNode(document.body);
    } else {
        documentRange = null;
    }
}
// implementation for modern browsers, using createContextualFragment
/* istanbul ignore next */
function parseHtmlModern(htmlString) {
    return documentRange.createContextualFragment(htmlString.trim()).childNodes;
}
// implementation for older browsers (incl. IE 10)
function parseHtmlFallback(htmlString) {
    var el = document.createElement('div');
    el.innerHTML = htmlString.trim();
    return el.childNodes;
}
/* istanbul ignore next */
var parseHTML = documentRange && documentRange.createContextualFragment ? parseHtmlModern : parseHtmlFallback;

/**
 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Keeps track of information needed to perform diffs for a given DOM node.
 * @param {!string} nodeName
 * @param {?string=} key
 * @constructor
 */
function NodeData(nodeName, key) {
    /**
     * The attributes and their values.
     * @const {!Object<string, *>}
     */
    this.attrs = createMap();
    /**
     * An array of attribute name/value pairs, used for quickly diffing the
     * incomming attributes to see if the DOM node's attributes need to be
     * updated.
     * @const {Array<*>}
     */
    this.attrsArr = [];
    /**
     * The incoming attributes for this Node, before they are updated.
     * @const {!Object<string, *>}
     */
    this.newAttrs = createMap();
    /**
     * The key used to identify this node, used to preserve DOM nodes when they
     * move within their parent.
     * @const
     */
    this.key = key;
    /**
     * Keeps track of children within this node by their key.
     * {?Object<string, !Element>}
     */
    this.keyMap = createMap();
    /**
     * Whether or not the keyMap is currently valid.
     * {boolean}
     */
    this.keyMapValid = true;
    /**
     * Whether or not the statics for the given node have already been applied.
     *
     * @type {boolean}
     */
    this.staticsApplied = false;
    /**
     * Whether or not the associated node is or contains a focused Element.
     * @type {boolean}
     */
    this.focused = false;
    /**
     * The node name for this node.
     * @const {string}
     */
    this.nodeName = nodeName;
    /**
     * @type {?string}
     */
    this.text = null;
    /**
     * The component instance associated with this element.
     * @type {Object}
     */
    this.componentInstance = null;
    /**
     * The properties associated with this component.
     * @type {null}
     */
    this.props = null;
    this.childLength = 0;
}
/**
 * Initializes a NodeData object for a Node.
 *
 * @param {Node} node The node to initialize data for.
 * @param {string} nodeName The node name of node.
 * @param {?string=} key The key that identifies the node.
 * @return {!NodeData} The newly initialized data object
 */
var initData = function initData(node, nodeName, key) {
    var data = new NodeData(nodeName, key);
    node['__incrementalDOMData'] = data;
    return data;
};
/**
 * Retrieves the NodeData object for a Node, creating it if necessary.
 *
 * @param {Node} node The node to retrieve the data for.
 * @return {!NodeData} The NodeData for this Node.
 */
var getData = function getData(node) {
    if (process.env.NODE_ENV !== 'production') {
        if (!node) {
            throw new Error('Can\'t getData for non-existing node.');
        }
    }
    importNode(node);
    return node['__incrementalDOMData'];
};
var importNode = function importNode(node) {
    if (node['__incrementalDOMData']) {
        return;
    }
    var isElement = node instanceof Element;
    var nodeName = isElement ? node.localName : node.nodeName;
    var key = isElement ? node.getAttribute('key') : null;
    var data = initData(node, nodeName, key);
    if (key) {
        getData(node.parentNode).keyMap[key] = node;
    }
    if (isElement) {
        var attributes = node.attributes;
        var attrs = data.attrs;
        var newAttrs = data.newAttrs;
        var attrsArr = data.attrsArr;
        for (var i = 0; i < attributes.length; i += 1) {
            var attr = attributes[i];
            var name_1 = attr.name;
            var value = attr.value;
            attrs[name_1] = value;
            newAttrs[name_1] = undefined;
            attrsArr.push(name_1);
            attrsArr.push(value);
        }
        for (var child = node.firstChild; child; child = child.nextSibling) {
            importNode(child);
        }
    } else if (node.nodeType === 3) {
        data.text = node.data;
    }
};

/**
 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Gets the namespace to create an element (of a given tag) in.
 * @param {string} tag The tag to get the namespace for.
 * @param {?Node} parent
 * @return {?string} The namespace to create the tag in.
 */
var getNamespaceForTag = function getNamespaceForTag(tag, parent) {
    if (tag === 'svg') {
        return 'http://www.w3.org/2000/svg';
    }
    if (getData(parent).nodeName === 'foreignObject') {
        return null;
    }
    return parent.namespaceURI;
};
/**
 * Creates an Element.
 * @param {Document} doc The document with which to create the Element.
 * @param {?Node} parent
 * @param {string} tag The tag for the Element.
 * @param {?string=} key A key to identify the Element.
 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
 *     static attributes for the Element.
 * @return {!Element}
 */
var createElement = function createElement(doc, parent, tag, key) {
    var namespace = getNamespaceForTag(tag, parent);
    var el;
    if (namespace) {
        el = doc.createElementNS(namespace, tag);
    } else {
        el = doc.createElement(tag);
    }
    initData(el, tag, key);
    return el;
};
/**
 * Creates a Text Node.
 * @param {Document} doc The document with which to create the Element.
 * @return {!Text}
 */
var createText = function createText(doc) {
    var node = doc.createTextNode('');
    initData(node, '#text', null);
    return node;
};
var createRaw = function createRaw(doc, html) {
    var children = parseHTML(html);
    if (!children.length) {
        var frag = document.createElement('div');
        frag.appendChild(doc.createTextNode(''));
        children = frag.childNodes;
    }
    var data = initData(children[0], '#raw', null);
    data.text = html;
    data.childLength = children.length;
    return children;
};

/**
 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** @const */
var notifications = {
    /**
     * Called after patch has compleated with any Nodes that have been created
     * and added to the DOM.
     * @type {?function(Array<!Node>)}
     */
    nodesCreated: function nodesCreated(nodes) {},
    /**
     * Called after patch has completed with any Nodes that have been removed
     * from the DOM.
     * Note it's an applications responsibility to handle any childNodes.
     * @type {?function(Array<!Node>)}
     */
    nodesDeleted: function nodesDeleted(nodes) {
        var i, len;
        for (i = 0, len = nodes.length; i < len; i++) {
            nodeDeleted(nodes[i]);
        }
    }
};
function nodeDeleted(node) {
    var data = getData(node);
    if (data.componentInstance) {
        unmountComponent(data.componentInstance);
    } else {
        // not an ideal solution but we can eventually move it
        // towards a scheduler (perhaps `requestIdleCallback` if we notice
        // that there are actual issues with this)
        // Chose a recursive solution here to avoid unnecessary memory usage
        var child = node.firstChild;
        while (child) {
            nodeDeleted(child);
            child = child.nextSibling;
        }
    }
}

/**
 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Keeps track of the state of a patch.
 * @constructor
 */
function Context() {
    /**
     * @type {(Array<!Node>|undefined)}
     */
    this.created = notifications.nodesCreated && [];
    /**
     * @type {(Array<!Node>|undefined)}
     */
    this.deleted = notifications.nodesDeleted && [];
    /**
     * @type {Object}
     */
    this.data = Object.create(null);
}
/**
 * @param {!Node} node
 */
Context.prototype.markCreated = function (node) {
    if (this.created) {
        this.created.push(node);
    }
};
/**
 * @param {!Node} node
 */
Context.prototype.markDeleted = function (node) {
    if (this.deleted) {
        this.deleted.push(node);
    }
};
/**
 * Notifies about nodes that were created during the patch opearation.
 */
Context.prototype.notifyChanges = function () {
    if (this.created && this.created.length > 0) {
        notifications.nodesCreated(this.created);
    }
    if (this.deleted && this.deleted.length > 0) {
        notifications.nodesDeleted(this.deleted);
    }
};

/**
 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
  * Keeps track whether or not we are in an attributes declaration (after
  * elementOpenStart, but before elementOpenEnd).
  * @type {boolean}
  */
var inAttributes = false;
/**
  * Keeps track whether or not we are in an element that should not have its
  * children cleared.
  * @type {boolean}
  */
var inSkip = false;
/**
 * Makes sure that there is a current patch context.
 * @param {*} context
 */
var assertInPatch = function assertInPatch(functionName, context) {
    if (!context) {
        throw new Error('Cannot call ' + functionName + '() unless in patch');
    }
};
/**
 * Makes sure that a patch closes every node that it opened.
 * @param {?Node} openElement
 * @param {!Node|!DocumentFragment} root
 */
var assertNoUnclosedTags = function assertNoUnclosedTags(openElement, root) {
    if (openElement === root) {
        return;
    }
    var currentElement = openElement;
    var openTags = [];
    while (currentElement && currentElement !== root) {
        openTags.push(currentElement.nodeName.toLowerCase());
        currentElement = currentElement.parentNode;
    }
    throw new Error('One or more tags were not closed:\n' + openTags.join('\n'));
};
/**
 * Makes sure that the caller is not where attributes are expected.
 * @param {string} functionName
 */
var assertNotInAttributes = function assertNotInAttributes(functionName) {
    if (inAttributes) {
        throw new Error(functionName + '() can not be called between ' + 'elementOpenStart() and elementOpenEnd().');
    }
};
/**
 * Makes sure that the caller is not inside an element that has declared skip.
 * @param {string} functionName
 */
var assertNotInSkip = function assertNotInSkip(functionName) {
    if (inSkip) {
        throw new Error(functionName + '() may not be called inside an element ' + 'that has called skip().');
    }
};
/**
 * Makes sure that the caller is where attributes are expected.
 * @param {string} functionName
 */
var assertInAttributes = function assertInAttributes(functionName) {
    if (!inAttributes) {
        throw new Error(functionName + '() can only be called after calling ' + 'elementOpenStart().');
    }
};
/**
 * Makes sure the patch closes virtual attributes call
 */
var assertVirtualAttributesClosed = function assertVirtualAttributesClosed() {
    if (inAttributes) {
        throw new Error('elementOpenEnd() must be called after calling ' + 'elementOpenStart().');
    }
};
/**
  * Makes sure that tags are correctly nested.
  * @param {string} nodeName
  * @param {string} tag
  */
var assertCloseMatchesOpenTag = function assertCloseMatchesOpenTag(nodeName, tag) {
    if (nodeName !== tag) {
        throw new Error('Received a call to close "' + tag + '" but "' + nodeName + '" was open.');
    }
};
/**
 * Makes sure that no children elements have been declared yet in the current
 * element.
 * @param {string} functionName
 * @param {?Node} previousNode
 */
var assertNoChildrenDeclaredYet = function assertNoChildrenDeclaredYet(functionName, previousNode) {
    if (previousNode !== null) {
        throw new Error(functionName + '() must come before any child ' + 'declarations inside the current element.');
    }
};
/**
 * Checks that a call to patchOuter actually patched the element.
 * @param {?Node} node The node requested to be patched.
 * @param {?Node} previousNode The previousNode after the patch.
 */
var assertPatchElementNoExtras = function assertPatchElementNoExtras(startNode, currentNode, expectedNextNode, expectedPrevNode) {
    var wasUpdated = currentNode.nextSibling === expectedNextNode && currentNode.previousSibling === expectedPrevNode;
    var wasChanged = currentNode.nextSibling === startNode.nextSibling && currentNode.previousSibling === expectedPrevNode;
    var wasRemoved = currentNode === startNode;
    if (!wasUpdated && !wasChanged && !wasRemoved) {
        throw new Error('There must be exactly one top level call corresponding ' + 'to the patched element.');
    }
};
/**
 * Updates the state of being in an attribute declaration.
 * @param {boolean} value
 * @return {boolean} the previous value.
 */
var setInAttributes = function setInAttributes(value) {
    var previous = inAttributes;
    inAttributes = value;
    return previous;
};
/**
 * Updates the state of being in a skip element.
 * @param {boolean} value
 * @return {boolean} the previous value.
 */
var setInSkip = function setInSkip(value) {
    var previous = inSkip;
    inSkip = value;
    return previous;
};

/**
 * Copyright 2016 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @param {!Node} node
 * @return {boolean} True if the node the root of a document, false otherwise.
 */
var isDocumentRoot = function isDocumentRoot(node) {
    // For ShadowRoots, check if they are a DocumentFragment instead of if they
    // are a ShadowRoot so that this can work in 'use strict' if ShadowRoots are
    // not supported.
    return node instanceof Document || node instanceof DocumentFragment;
};
/**
 * @param {!Node} node The node to start at, inclusive.
 * @param {?Node} root The root ancestor to get until, exclusive.
 * @return {!Array<!Node>} The ancestry of DOM nodes.
 */
var getAncestry = function getAncestry(node, root) {
    var ancestry = [];
    var cur = node;
    while (cur !== root) {
        ancestry.push(cur);
        cur = cur.parentNode;
    }
    return ancestry;
};
/**
 * @param {!Node} node
 * @return {!Node} The root node of the DOM tree that contains node.
 */
var getRoot = function getRoot(node) {
    var cur = node;
    var prev = cur;
    while (cur) {
        prev = cur;
        cur = cur.parentNode;
    }
    return prev;
};
/**
 * @param {!Node} node The node to get the activeElement for.
 * @return {?Element} The activeElement in the Document or ShadowRoot
 *     corresponding to node, if present.
 */
var getActiveElement = function getActiveElement(node) {
    var root = getRoot(node);
    return isDocumentRoot(root) ? root.activeElement : null;
};
/**
 * Gets the path of nodes that contain the focused node in the same document as
 * a reference node, up until the root.
 * @param {!Node} node The reference node to get the activeElement for.
 * @param {?Node} root The root to get the focused path until.
 * @return {!Array<Node>}
 */
var getFocusedPath = function getFocusedPath(node, root) {
    var activeElement = getActiveElement(node);
    if (!activeElement || !node.contains(activeElement)) {
        return [];
    }
    return getAncestry(activeElement, root);
};
/**
 * Like insertBefore, but instead instead of moving the desired node, instead
 * moves all the other nodes after.
 * @param {?Node} parentNode
 * @param {!Node} node
 * @param {?Node} referenceNode
 */
var moveBefore = function moveBefore(parentNode, node, referenceNode) {
    var insertReferenceNode = node.nextSibling;
    var cur = referenceNode;
    while (cur && cur !== node) {
        var next = cur.nextSibling;
        parentNode.insertBefore(cur, insertReferenceNode);
        cur = next;
    }
};

/**
 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** @type {?Context} */
var context = null;
/** @type {?Node} */
var currentNode;
/** @type {?Node} */
var currentParent;
/** @type {?Document} */
var doc;
var componentKey = null;
var currentComponent = null;
var markFocused = function markFocused(focusPath, focused) {
    for (var i = 0; i < focusPath.length; i += 1) {
        getData(focusPath[i]).focused = focused;
    }
};
var patchFactory = function patchFactory(run) {
    return function (node, fn, data) {
        if (process.env.NODE_ENV !== 'production') {
            if (!node) {
                throw new Error('Patch invoked without an element.');
            }
        }
        var prevContext = context;
        var prevDoc = doc;
        var prevCurrentNode = currentNode;
        var prevCurrentParent = currentParent;
        var prevCurrentComponent = currentComponent;
        var previousInAttribute = false;
        var previousInSkip = false;
        context = new Context();
        doc = node.ownerDocument;
        currentParent = node.parentNode;
        if (process.env.NODE_ENV !== 'production') {
            previousInAttribute = setInAttributes(false);
            previousInSkip = setInSkip(false);
        }
        var focusPath = getFocusedPath(node, currentParent);
        markFocused(focusPath, true);
        var retVal;
        if (process.env.NODE_ENV !== 'production') {
            try {
                retVal = run(node, fn, data);
            } catch (e) {
                // reset context
                context = prevContext;
                doc = prevDoc;
                currentNode = prevCurrentNode;
                currentParent = prevCurrentParent;
                currentComponent = prevCurrentComponent;
                // rethrow the error
                throw e;
            }
        } else {
            retVal = run(node, fn, data);
        }
        markFocused(focusPath, false);
        if (process.env.NODE_ENV !== 'production') {
            assertVirtualAttributesClosed();
            setInAttributes(previousInAttribute);
            setInSkip(previousInSkip);
        }
        context.notifyChanges();
        // reset context
        context = prevContext;
        doc = prevDoc;
        currentNode = prevCurrentNode;
        currentParent = prevCurrentParent;
        currentComponent = prevCurrentComponent;
        return retVal;
    };
};
var patchInner = patchFactory(function (node, fn, data) {
    currentNode = node;
    enterNode();
    fn(data);
    exitNode();
    if (process.env.NODE_ENV !== 'production') {
        assertNoUnclosedTags(currentNode, node);
    }
    return node;
});
var patchOuter = patchFactory(function (node, fn, data) {
    var startNode = { nextSibling: node };
    var expectedNextNode = null;
    var expectedPrevNode = null;
    if (process.env.NODE_ENV !== 'production') {
        expectedNextNode = node.nextSibling;
        expectedPrevNode = node.previousSibling;
    }
    currentNode = startNode;
    fn(data);
    if (process.env.NODE_ENV !== 'production') {
        assertPatchElementNoExtras(startNode, currentNode, expectedNextNode, expectedPrevNode);
    }
    if (node !== currentNode && node.parentNode) {
        removeChild(currentParent, node, getData(currentParent).keyMap);
    }
    return startNode === currentNode ? null : currentNode;
});
/**
 * Checks whether or not the current node matches the specified nodeName and
 * key.
 *
 * @param {?string} nodeName The nodeName for this node.
 * @param {?string=} key An optional key that identifies a node.
 * @return {boolean} True if the node matches, false otherwise.
 */
var matches = function matches(matchNode, nodeName, key) {
    var data = getData(matchNode);
    // Key check is done using double equals as we want to treat a null key the
    // same as undefined. This should be okay as the only values allowed are
    // strings, null and undefined so the == semantics are not too weird.
    // templates rendered on the server side may not have keys at all while melody templates
    // always will have them so we reconcile the dom in those cases.
    if (nodeName === data.nodeName) {
        if (key == data.key) {
            return true;
        }
        // exisiting DOM element does not have a key
        // which means we can hook onto it freely
        if (!data.key) {
            data.key = key;
            // but we'll need to update the parent element
            var parentKeys = currentParent && getData(currentParent).keyMap;
            if (parentKeys) {
                parentKeys[key] = matchNode;
            }
            return true;
        }
    }
    return false;
};
/**
 * Aligns the virtual Element definition with the actual DOM, moving the
 * corresponding DOM node to the correct location or creating it if necessary.
 * @param {string} nodeName For an Element, this should be a valid tag string.
 *     For a Text, this should be #text.
 * @param {?string=} key The key used to identify this element.
 * @param {?Array<*>=} statics For an Element, this should be an array of
 *     name-value pairs.
 */
var alignWithDOM = function alignWithDOM(nodeName, key) {
    if (currentNode && matches(currentNode, nodeName, key)) {
        return;
    }
    var parentData = getData(currentParent);
    var currentNodeData = currentNode && getData(currentNode);
    var keyMap = parentData.keyMap;
    var fromKeyMap = false;
    var node;
    var componentInstance = null;
    // Check to see if the node has moved within the parent.
    if (key) {
        var keyNode = keyMap[key];
        if (keyNode) {
            if (matches(keyNode, nodeName, key)) {
                fromKeyMap = true;
                node = keyNode;
            } else if (keyNode === currentNode) {
                var keyNodeData = getData(keyNode);
                // if (keyNodeData.componentInstance === currentComponent) {
                if (keyNodeData.componentInstance) {
                    componentInstance = keyNodeData.componentInstance;
                    keyNodeData.componentInstance = null;
                } else {
                    context.markDeleted(keyNode);
                }
            } else {
                removeChild(currentParent, keyNode, keyMap);
            }
        } else if (currentNode && currentNode.nodeType === 3 && currentNode.data.trim() === '') {
            // special handling here to ignore empty text nodes if the one after it is what we're actually looking for
            // this reduces a lot of special handling for server side rendered content.
            if (currentNode.nextSibling && matches(currentNode.nextSibling, nodeName, key)) {
                node = currentNode.nextSibling;
            }
        }
    }
    // Create the node if it doesn't exist.
    if (!node) {
        if (nodeName === '#text') {
            node = createText(doc);
        } else {
            node = createElement(doc, currentParent, nodeName, key);
        }
        if (key) {
            keyMap[key] = node;
        }
        context.markCreated(node);
    }
    if (componentInstance) {
        getData(node).componentInstance = componentInstance;
        componentInstance.el = node;
    }
    // Re-order the node into the right position, preserving focus if either
    // node or currentNode are focused by making sure that they are not detached
    // from the DOM.
    if (getData(node).focused) {
        // move everything else before the node.
        moveBefore(currentParent, node, currentNode);
    } else if (!(fromKeyMap && !node.parentNode) && currentNodeData && currentNodeData.key && !currentNodeData.focused) {
        // Remove the currentNode, which can always be added back since we hold a
        // reference through the keyMap. This prevents a large number of moves when
        // a keyed item is removed or moved backwards in the DOM.
        currentParent.replaceChild(node, currentNode);
        parentData.keyMapValid = false;
    } else if (currentNode && currentNode.nextSibling === node && currentNode.nodeType === 3 && currentNode.data.trim() === '') {
        // if the empty text node handling above was successful, we simply remove the skipped text node
        currentParent.removeChild(currentNode);
    } else {
        currentParent.insertBefore(node, currentNode);
    }
    currentNode = node;
};
var removeChild = function removeChild(node, child, keyMap) {
    node.removeChild(child);
    context.markDeleted(child);
    var key = getData(child).key;
    if (key) {
        delete keyMap[key];
    }
};
/**
 * Clears out any unvisited Nodes, as the corresponding virtual element
 * functions were never called for them.
 */
var clearUnvisitedDOM = function clearUnvisitedDOM() {
    var node = currentParent;
    var data = getData(node);
    var keyMap = data.keyMap;
    var keyMapValid = data.keyMapValid;
    var child = node.lastChild;
    var key;
    if (child === currentNode && keyMapValid) {
        return;
    }
    while (child && child !== currentNode) {
        removeChild(node, child, keyMap);
        child = node.lastChild;
    }
    // Clean the keyMap, removing any unusued keys.
    if (!keyMapValid) {
        for (key in keyMap) {
            child = keyMap[key];
            if (child.parentNode !== node) {
                context.markDeleted(child);
                delete keyMap[key];
            }
        }
        data.keyMapValid = true;
    }
};
/**
 * Changes to the first child of the current node.
 */
var enterNode = function enterNode() {
    currentParent = currentNode;
    currentNode = null;
};
/**
 * Changes to the next sibling of the current node.
 */
var nextNode = function nextNode() {
    currentNode = getNextNode();
};
var getNextNode = function getNextNode() {
    if (currentNode) {
        return currentNode.nextSibling;
    } else {
        return currentParent.firstChild;
    }
};
/**
 * Changes to the parent of the current node, removing any unvisited children.
 */
var exitNode = function exitNode() {
    clearUnvisitedDOM();
    currentNode = currentParent;
    currentParent = currentParent.parentNode;
};
var updateComponent = function updateComponent(comp) {
    var data = getData(comp.el);
    var parentComponent = currentComponent;
    componentKey = data.key;
    reset(comp);
    for (var refName in comp.refs) {
        comp.refs[refName] = null;
    }
    currentComponent = comp;
    comp.render();
    currentComponent = parentComponent;
};
var scheduleComponent = function scheduleComponent(Component, key, props, el) {
    var comp;
    if (el) {
        // we've already seen this component
        var data = getData(el);
        comp = data.componentInstance;
        if (!comp) {
            // but apparently we didn't have a component instance so far
            // most likely we're mounting a server side rendered DOM
            comp = typeof Component === 'function' ? new Component() : Component;
            comp.el = el;
            data.componentInstance = comp;
        }
        // Q: Do we even want to support this in the future?
        // if (typeof Component === 'function' && !(comp instanceof Component)) {
        //   unmountComponent(comp);
        //   comp = null;
        // }
        elementOpen(data.nodeName, key);
        skip();
        elementClose();
    } else {
        // unknown component
        if (typeof Component === 'function') {
            comp = new Component();
        } else {
            comp = Component;
        }
        elementOpen('m-placeholder', key);
        skip();
        comp.el = elementClose();
        getData(comp.el).componentInstance = comp;
    }
    if (currentComponent) {
        link(currentComponent, comp);
    }
    return comp.apply(props);
};
var component = function component(Component, key, props) {
    var el = getData(currentParent).keyMap[key];
    return scheduleComponent(Component, key, props, el);
};
var getCurrentComponent = function getCurrentComponent() {
    return currentComponent;
};
var mount = function mount(element, Component, props) {
    var data = getData(element);
    var key = data && data.key;
    var comp = data.componentInstance;
    var isComponentInstance = typeof Component !== 'function';
    // if the existing component is not an instance of the specified component type
    // then we just unmount the existing one and proceed as if none ever existed
    if (comp && !isComponentInstance && !(comp instanceof Component)) {
        unmountComponent(comp);
    }
    return scheduleComponent(Component, key, props, element);
};
/**
 * Makes sure that the current node is an Element with a matching tagName and
 * key.
 *
 * @param {string} tag The element's tag.
 * @param {?string=} key The key used to identify this element. This can be an
 *     empty string, but performance may be better if a unique value is used
 *     when iterating over an array of items.
 * @return {!Element} The corresponding Element.
 */
var elementOpen = function elementOpen(tag, key) {
    nextNode();
    alignWithDOM(tag, componentKey || key);
    componentKey = null;
    enterNode();
    return currentParent;
};
/**
 * Closes the currently open Element, removing any unvisited children if
 * necessary.
 *
 * @return {!Element} The corresponding Element.
 */
var elementClose = function elementClose() {
    if (process.env.NODE_ENV !== 'production') {
        setInSkip(false);
    }
    exitNode();
    return currentNode;
};
/**
 * Makes sure the current node is a Text node and creates a Text node if it is
 * not.
 *
 * @return {!Text} The corresponding Text Node.
 */
var text = function text() {
    nextNode();
    alignWithDOM('#text', null);
    return currentNode;
};
/**
 * Gets the current Element being patched.
 * @return {!Element}
 */
var currentElement = function currentElement() {
    if (process.env.NODE_ENV !== 'production') {
        assertInPatch('currentElement', context);
        assertNotInAttributes('currentElement');
    }
    return currentParent;
};
/**
 * Skips the children in a subtree, allowing an Element to be closed without
 * clearing out the children.
 */
var skip = function skip() {
    if (process.env.NODE_ENV !== 'production') {
        assertNoChildrenDeclaredYet('skip', currentNode);
        setInSkip(true);
    }
    currentNode = currentParent.lastChild;
};
var currentPointer = function currentPointer() {
    if (process.env.NODE_ENV !== 'production') {
        assertInPatch('currentPointer', context);
        assertNotInAttributes('currentPointer');
    }
    return getNextNode();
};
var inPatch = function inPatch() {
    return !!context;
};
var skipNode = nextNode;
var insertRawHtml = function insertRawHtml(html) {
    var children = createRaw(doc, html);
    var node = doc.createDocumentFragment(),
        lastChild = children[children.length - 1];
    while (children.length) {
        node.appendChild(children[0]);
    }
    currentParent.insertBefore(node, currentNode);
    currentNode = lastChild;
};
var raw = function raw(html) {
    nextNode();
    if (currentNode && matches(currentNode, '#raw', null)) {
        // patch node
        var data = getData(currentNode),
            remainingSiblingCount = data.childLength - 1;
        if (data.text !== html) {
            // if the text is not the same as before, we'll have some work to do
            insertRawHtml(html);
            // remove the remaining siblings of the old child
            if (data.childLength > 1) {
                while (remainingSiblingCount--) {
                    currentParent.removeChild(currentNode.nextSibling);
                }
            }
        } else if (remainingSiblingCount) {
            // still the same text so just jump over the remaining siblings
            while (remainingSiblingCount--) {
                currentNode = currentNode.nextSibling;
            }
        }
    } else {
        // insert raw html
        insertRawHtml(html);
    }
    return currentNode;
};

var supportsPassiveListeners = false;
/* istanbul ignore next */
document.createElement('div').addEventListener('test', function () {}, {
    get passive() {
        supportsPassiveListeners = true;
        return false;
    }
});
var BUSY_FRAME_LENGTH = 3;
var IDLE_FRAME_LENGTH = 30;
var MESSAGE_KEY = '__melodyPrioritize_' + Math.random().toString(36).slice(2);
// by default we assume that we have to deal with a busy frame
// we can afford a little more time if we can detect that the
// browser is currently idle (=not scrolling)
var idealFrameLength = IDLE_FRAME_LENGTH;
var scrollListenerAttached = false;
var prioritizationRequested = false;
var prioritizationDisabled = false;
var NIL = { component: null, next: null };
var queue = NIL;
function isEmpty() {
    return queue === NIL;
}
function addToQueue(component$$1) {
    if (queue !== NIL) {
        // before we schedule this update, we should check a few things first
        for (var head = queue; head !== NIL; head = head.next) {
            // 1: Has this component already been scheduled for an update?
            if (head.component === component$$1) {
                // if so: we don't need
                return;
            }
            // 2: Is the parent of this component already scheduled for an update?
            if (getParent(component$$1) === head.component) {
                // if so: we don't need to do anything
                return;
            }
            // 3: Is the component a parent of a node within the queue?
            if (getParent(head.component) === component$$1) {
                // if so: replace the child with its parent
                head.component = component$$1;
                return;
            }
            if (head.next === NIL) {
                // insert the new node at the end of the list
                // we probably want to adjust that once we know how
                // to prioritize an update
                head.next = {
                    component: component$$1,
                    next: NIL
                };
                break;
            }
        }
    } else {
        queue = {
            component: component$$1,
            next: NIL
        };
    }
}
function drop(component$$1) {
    if (queue === NIL) {
        return;
    }
    if (queue.component === component$$1) {
        queue = queue.next;
    }
    var prev = queue;
    for (var head = queue.next; head && head !== NIL; head = head.next) {
        // is the component (or one of its parents) in the queue the removed component?
        var comp = head.component;
        do {
            if (comp === component$$1) {
                // if so: drop it
                prev.next = head.next;
                head = prev;
                break;
            }
            comp = getParent(comp);
        } while (comp);
        prev = head;
    }
}
function getPriority(node) {
    if (!node.component.el) {
        return -1;
    }
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var _a = node.component.el.getBoundingClientRect(),
        top = _a.top,
        bottom = _a.bottom;
    // is fully visible
    if (0 < top && bottom < windowHeight || top < 0 && windowHeight < bottom) {
        return 0;
    }
    // bottom of component is visible
    if (top < 0 && 0 < bottom && bottom < windowHeight) {
        return 1;
    }
    // top of component is visible
    if (0 < top && top < windowHeight) {
        return 2;
    }
    // not visible, not new
    return 3;
}
function prioritizeQueue(queue) {
    var buckets = new Array(4);
    for (var head = queue; head !== NIL; head = head.next) {
        var bucketIndex = getPriority(head);
        if (bucketIndex < 0) {
            continue;
        }
        var clone = { component: head.component, next: NIL };
        if (!buckets[bucketIndex]) {
            buckets[bucketIndex] = { first: clone, last: clone };
        } else {
            buckets[bucketIndex].last.next = clone;
            buckets[bucketIndex].last = clone;
        }
    }
    return buckets.reduceRight(concatWithKnownLast, NIL);
}
function concatWithKnownLast(queue, _a) {
    var first = _a.first,
        last = _a.last;
    var newList = concat(last, queue);
    return newList === last ? first : newList;
}
function concat(queue, nextQueue) {
    if (queue === NIL) {
        return nextQueue;
    }
    var prev = queue;
    while (prev.next !== NIL) {
        prev = prev.next;
    }
    prev.next = nextQueue;
    return queue;
}
function unique(queue) {
    var ht = new Set();
    var n1 = queue;
    var n2 = queue.next;
    ht.add(n1.component);
    while (n2) {
        if (ht.has(n2.component)) {
            n1.next = n2.next;
        } else {
            ht.add(n2.component);
            n1 = n2;
        }
        n2 = n2.next;
    }
    return queue;
}
function pop() {
    if (isEmpty()) {
        return null;
    }
    var head = queue;
    queue = queue.next;
    return head;
}
var isTicking = false;
function tick(callback) {
    if (isTicking) {
        return;
    }
    isTicking = true;
    requestAnimationFrame(function () {
        var startTime = Date.now();
        callback({
            didTimeout: false,
            timeRemaining: function timeRemaining() {
                return Math.max(0, idealFrameLength - (Date.now() - startTime));
            }
        });
    });
}
function drain() {
    var next = pop();
    var mounted = [];
    while (next) {
        if (next.component.el) {
            patchOuter(next.component.el, function (_) {
                return updateComponent(next.component);
            }, {});
            mounted.push(next.component);
        }
        next = pop();
    }
    return mounted;
}
function flush(deadline) {
    var prevQueue;
    var next = pop();
    var hasNew = false;
    var mounted = [];
    while (next) {
        prevQueue = queue;
        queue = NIL;
        if (next.component.el) {
            var isNew = next.component.el.localName === 'm-placeholder';
            patchOuter(next.component.el, function (_) {
                return updateComponent(next.component);
            }, {});
            mounted.push(next.component);
            if (isNew && queue !== NIL) {
                mounted.push.apply(mounted, drain());
                queue = NIL;
            }
        }
        if (queue !== NIL) {
            hasNew = true;
        }
        queue = unique(concat(queue, prevQueue));
        next = 0 < deadline.timeRemaining() ? pop() : null;
    }
    // keep track of the components which have been notified already
    // for additional, hopefully not required, security
    var notified = new Set();
    for (var i = 0; i < mounted.length; i++) {
        // there is a chance that this component has been unmounted
        // while rendering one of the other components
        // thus we want to avoid notifying it
        var comp = mounted[i];
        if (comp.el && !notified.has(comp)) {
            notified.add(comp);
            comp.notify();
        }
    }
    isTicking = false;
    if (!isEmpty()) {
        if (!prioritizationDisabled && !prioritizationRequested && hasNew) {
            prioritizationRequested = true;
            window.postMessage(MESSAGE_KEY, '*');
        }
        tick(flush);
    }
}
function performReordering(event) {
    if (event.source !== this || event.data !== MESSAGE_KEY) {
        return;
    }
    prioritizationRequested = false;
    var timeSpent = Date.now();
    queue = prioritizeQueue(queue);
    timeSpent = Date.now() - timeSpent;
    // Usually prioritization takes 0 - 4 ms on fast browsers. If browser is not
    // able to do that (like Edge/IE) in this period skip the process.
    if (timeSpent > 10) {
        prioritizationDisabled = true;
    }
}
window.addEventListener('message', performReordering, false);
function enqueueComponent$$1(component$$1) {
    /* istanbul ignore if */
    if (supportsPassiveListeners && !scrollListenerAttached) {
        attachScrollListener();
    }
    addToQueue(component$$1);
    /* istanbul ignore else */
    if (process.env.NODE_ENV === 'test') {
        return;
    }
    tick(flush);
}
/* istanbul ignore next */
var detectIdleCallback = _debounce(function detectIdleCallback() {
    idealFrameLength = IDLE_FRAME_LENGTH;
}, 300);
/* istanbul ignore next */
function attachScrollListener() {
    scrollListenerAttached = true;
    // if we can detect when the browser is busy
    // then we can assume its idle by default
    idealFrameLength = IDLE_FRAME_LENGTH;
    document.addEventListener('scroll', function () {
        idealFrameLength = BUSY_FRAME_LENGTH;
        detectIdleCallback();
    }, { passive: true });
}

/**
 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** @const */
var symbols = {
    default: '__default'
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
};

/**
 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A publicly mutable object to provide custom mutators for attributes.
 * @const {!Object<string, function(!Element, string, *)>}
 */
var attributes = createMap();
// Special generic mutator that's called for any attribute that does not
// have a specific mutator.
attributes[symbols.default] = applyAttributeTyped;
attributes.style = applyStyle;
var getNamespace = function getNamespace(name) {
    if (name.lastIndexOf('xml:', 0) === 0) {
        return 'http://www.w3.org/XML/1998/namespace';
    }
    if (name.lastIndexOf('xlink:', 0) === 0) {
        return 'http://www.w3.org/1999/xlink';
    }
};
/**
 * Applies an attribute or property to a given Element. If the value is null
 * or undefined, it is removed from the Element. Otherwise, the value is set
 * as an attribute.
 * @param {!Element} el
 * @param {string} name The attribute's name.
 * @param {?(boolean|number|string)=} value The attribute's value.
 */
var applyAttr = function applyAttr(el, name, value) {
    if (value == null) {
        el.removeAttribute(name);
    } else {
        var attrNS = getNamespace(name);
        if (attrNS) {
            el.setAttributeNS(attrNS, name, value);
        } else {
            el.setAttribute(name, value);
        }
    }
};
/**
 * Applies a property to a given Element.
 * @param {!Element} el
 * @param {string} name The property's name.
 * @param {*} value The property's value.
 */
var applyProp = function applyProp(el, name, value) {
    el[name] = value;
};
/**
 * Applies a style to an Element. No vendor prefix expansion is done for
 * property names/values.
 * @param {!Element} el
 * @param {string} name The attribute's name.
 * @param {*} style The style to set. Either a string of css or an object
 *     containing property-value pairs.
 */
function applyStyle(el, name, style) {
    // console.log(name, style);
    if (typeof style === 'string') {
        el.style.cssText = style;
    } else {
        el.style.cssText = '';
        var elStyle = el.style;
        var obj = style;
        // console.log(name, style);
        for (var prop in obj) {
            if (has(obj, prop)) {
                if (prop.indexOf('-') >= 0) {
                    elStyle.setProperty(prop, obj[prop]);
                } else {
                    elStyle[prop] = obj[prop];
                }
            }
        }
    }
}
/**
 * Updates a single attribute on an Element.
 * @param {!Element} el
 * @param {string} name The attribute's name.
 * @param {*} value The attribute's value. If the value is an object or
 *     function it is set on the Element, otherwise, it is set as an HTML
 *     attribute.
 */
function applyAttributeTyped(el, name, value) {
    var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
    if (type === 'object' || type === 'function') {
        applyProp(el, name, value);
    } else {
        applyAttr(el, name, /** @type {?(boolean|number|string)} */value);
    }
}
/**
 * Calls the appropriate attribute mutator for this attribute.
 * @param {!Element} el
 * @param {string} name The attribute's name.
 * @param {*} value The attribute's value.
 */
var updateAttribute = function updateAttribute(el, name, value) {
    var data = getData(el);
    var attrs = data.attrs;
    if (attrs[name] === value) {
        return;
    }
    var mutator = attributes[name] || attributes[symbols.default];
    mutator(el, name, value);
    attrs[name] = value;
};

/**
 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The offset in the virtual element declaration where the attributes are
 * specified.
 * @const
 */
var ATTRIBUTES_OFFSET = 3;
/**
 * Builds an array of arguments for use with elementOpenStart, attr and
 * elementOpenEnd.
 * @const {Array<*>}
 */
var argsBuilder = [];
/**
 * @param {string} tag The element's tag.
 * @param {?string=} key The key used to identify this element. This can be an
 *     empty string, but performance may be better if a unique value is used
 *     when iterating over an array of items.
 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
 *     static attributes for the Element. These will only be set once when the
 *     Element is created.
 * @param {...*} var_args Attribute name/value pairs of the dynamic attributes
 *     for the Element.
 * @return {!Element} The corresponding Element.
 */
var elementOpen$1 = function elementOpen$$1(tag, key, statics, var_args) {
    if (process.env.NODE_ENV !== 'production') {
        assertNotInAttributes('elementOpen');
        assertNotInSkip('elementOpen');
    }
    var node = elementOpen(tag, key);
    var data = getData(node);
    /*
     * Checks to see if one or more attributes have changed for a given Element.
     * When no attributes have changed, this is much faster than checking each
     * individual argument. When attributes have changed, the overhead of this is
     * minimal.
     */
    var attrsArr = data.attrsArr;
    var newAttrs = data.newAttrs;
    var isNew = !attrsArr.length;
    var i = ATTRIBUTES_OFFSET;
    var j = 0;
    if (!data.staticsApplied) {
        if (statics) {
            for (var i_1 = 0; i_1 < statics.length; i_1 += 2) {
                var name_1 = statics[i_1];
                var value = statics[i_1 + 1];
                if (newAttrs[name_1] === undefined) {
                    delete newAttrs[name_1];
                }
                updateAttribute(node, name_1, value);
            }
        }
        data.staticsApplied = true;
    }
    for (; i < arguments.length; i += 2, j += 2) {
        var attr_1 = arguments[i];
        if (isNew) {
            attrsArr[j] = attr_1;
            newAttrs[attr_1] = undefined;
        } else if (attrsArr[j] !== attr_1) {
            break;
        }
        var value = arguments[i + 1];
        if (isNew || attrsArr[j + 1] !== value) {
            attrsArr[j + 1] = value;
            updateAttribute(node, attr_1, value);
        }
    }
    if (i < arguments.length || j < attrsArr.length) {
        for (; i < arguments.length; i += 1, j += 1) {
            attrsArr[j] = arguments[i];
        }
        if (j < attrsArr.length) {
            attrsArr.length = j;
        }
        /**
         * Actually perform the attribute update.
         */
        for (i = 0; i < attrsArr.length; i += 2) {
            newAttrs[attrsArr[i]] = attrsArr[i + 1];
        }
        for (var attr_2 in newAttrs) {
            updateAttribute(node, attr_2, newAttrs[attr_2]);
            newAttrs[attr_2] = undefined;
        }
    }
    return node;
};
/**
 * Declares a virtual Element at the current location in the document. This
 * corresponds to an opening tag and a elementClose tag is required. This is
 * like elementOpen, but the attributes are defined using the attr function
 * rather than being passed as arguments. Must be folllowed by 0 or more calls
 * to attr, then a call to elementOpenEnd.
 * @param {string} tag The element's tag.
 * @param {?string=} key The key used to identify this element. This can be an
 *     empty string, but performance may be better if a unique value is used
 *     when iterating over an array of items.
 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
 *     static attributes for the Element. These will only be set once when the
 *     Element is created.
 */
var elementOpenStart = function elementOpenStart(tag, key, statics, var_args) {
    if (process.env.NODE_ENV !== 'production') {
        assertNotInAttributes('elementOpenStart');
        setInAttributes(true);
    }
    argsBuilder[0] = tag;
    argsBuilder[1] = key;
    argsBuilder[2] = statics;
    var i = ATTRIBUTES_OFFSET;
    for (; i < arguments.length; i++) {
        argsBuilder[i] = arguments[i];
    }
};
/***
 * Defines a virtual attribute at this point of the DOM. This is only valid
 * when called between elementOpenStart and elementOpenEnd.
 *
 * @param {string} name
 * @param {*} value
 */
var attr = function attr(name, value) {
    if (process.env.NODE_ENV !== 'production') {
        assertInAttributes('attr');
    }
    argsBuilder.push(name, value);
};
/**
 * Closes an open tag started with elementOpenStart.
 * @return {!Element} The corresponding Element.
 */
var elementOpenEnd = function elementOpenEnd() {
    if (process.env.NODE_ENV !== 'production') {
        assertInAttributes('elementOpenEnd');
        setInAttributes(false);
    }
    var node = elementOpen$1.apply(null, argsBuilder);
    argsBuilder.length = 0;
    return node;
};
/**
 * Closes an open virtual Element.
 *
 * @param {string} tag The element's tag.
 * @return {!Element} The corresponding Element.
 */
var elementClose$1 = function elementClose$$1(tag) {
    if (process.env.NODE_ENV !== 'production') {
        assertNotInAttributes('elementClose');
    }
    var node = elementClose();
    if (process.env.NODE_ENV !== 'production') {
        assertCloseMatchesOpenTag(getData(node).nodeName, tag);
    }
    return node;
};
/**
 * Declares a virtual Element at the current location in the document that has
 * no children.
 * @param {string} tag The element's tag.
 * @param {?string=} key The key used to identify this element. This can be an
 *     empty string, but performance may be better if a unique value is used
 *     when iterating over an array of items.
 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
 *     static attributes for the Element. These will only be set once when the
 *     Element is created.
 * @param {...*} var_args Attribute name/value pairs of the dynamic attributes
 *     for the Element.
 * @return {!Element} The corresponding Element.
 */
var elementVoid = function elementVoid(tag, key, statics, var_args) {
    elementOpen$1.apply(null, arguments);
    return elementClose$1(tag);
};
var ref = function ref(id, element) {
    if (process.env.NODE_ENV !== 'production') {
        var comp = getCurrentComponent();
        if (!comp || !comp.refs) {
            throw new Error('ref() must be used within a component');
        }
    }
    getCurrentComponent().refs[id] = element || currentElement();
};
/**
 * Creates a new RawString that may contain HTML that should be rendered
 * as is and should not be escaped.
 *
 * @param {string} value The wrapped String.
 * @class
 */
var RawString = function RawString(value) {
    this.value = value;
};
/**
 * Return the wrapped value of the raw string.
 */
RawString.prototype.toString = function () {
    return this.value;
};
/**
 * Creates a new RawString that may contain HTML that should be rendered
 * as is and should not be escaped.
 *
 * @param {string} value The wrapped String.
 */
var rawString = function rawString(value) {
    if (value instanceof RawString) {
        return value;
    }
    if (process.env.NODE_ENV !== 'production') {
        if (typeof value !== 'string') {
            throw new Error('Tried to create a RawString from non-string value: ' + JSON.stringify(value));
        }
    }
    return new RawString(value);
};
/**
 * Declares a virtual Text at this point in the document.
 *
 * @param {string|number|boolean|RawString} value The value of the Text.
 * @param {...(function((string|number|boolean)):string)} var_args
 *     Functions to format the value which are called only when the value has
 *     changed.
 * @return {!Text} The corresponding text node.
 */
var text$1 = function text$$1(value, var_args) {
    if (process.env.NODE_ENV !== 'production') {
        assertNotInAttributes('text');
        assertNotInSkip('text');
    }
    if (value instanceof RawString) {
        if (process.env.NODE_ENV !== 'production') {
            if (arguments.length > 1) {
                throw new Error('Can\'t call filters on a raw string.');
            }
        }
        return raw$1(value.value);
    }
    var node = text();
    var data = getData(node);
    if (data.text !== value) {
        data.text = value;
        var formatted = value;
        for (var i = 1; i < arguments.length; i += 1) {
            /*
             * Call the formatter function directly to prevent leaking arguments.
             * https://github.com/google/incremental-dom/pull/204#issuecomment-178223574
             */
            var fn = arguments[i];
            formatted = fn(formatted);
        }
        node.data = formatted;
    }
    return node;
};
var raw$1 = function raw$$1(value) {
    if (process.env.NODE_ENV !== 'production') {
        assertNotInAttributes('text');
        assertNotInSkip('text');
    }
    return raw(value);
};

/**
 * @license
 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

exports.flush = flush;
exports.getParent = getParent;
exports.link = link;
exports.patch = patchInner;
exports.patchInner = patchInner;
exports.patchOuter = patchOuter;
exports.currentElement = currentElement;
exports.currentPointer = currentPointer;
exports.skip = skip;
exports.skipNode = skipNode;
exports.mount = mount;
exports.inPatch = inPatch;
exports.component = component;
exports.renderComponent = updateComponent;
exports.enqueueComponent = enqueueComponent$$1;
exports.elementVoid = elementVoid;
exports.elementOpenStart = elementOpenStart;
exports.elementOpenEnd = elementOpenEnd;
exports.elementOpen = elementOpen$1;
exports.elementClose = elementClose$1;
exports.text = text$1;
exports.attr = attr;
exports.raw = raw$1;
exports.rawString = rawString;
exports.ref = ref;
exports.unmountComponent = unmountComponent;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var listCacheClear = __webpack_require__(124),
    listCacheDelete = __webpack_require__(125),
    listCacheGet = __webpack_require__(126),
    listCacheHas = __webpack_require__(127),
    listCacheSet = __webpack_require__(128);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var eq = __webpack_require__(8);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isKeyable = __webpack_require__(121);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

module.exports = getMapData;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getNative = __webpack_require__(3);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isSymbol = __webpack_require__(18);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

module.exports = toKey;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isFunction = __webpack_require__(54),
    isLength = __webpack_require__(27);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var baseGetTag = __webpack_require__(7),
    isObjectLike = __webpack_require__(4);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
    return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
}

module.exports = isSymbol;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseCreate = __webpack_require__(36),
    baseLodash = __webpack_require__(23);

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH = 4294967295;

/**
 * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
 *
 * @private
 * @constructor
 * @param {*} value The value to wrap.
 */
function LazyWrapper(value) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__dir__ = 1;
  this.__filtered__ = false;
  this.__iteratees__ = [];
  this.__takeCount__ = MAX_ARRAY_LENGTH;
  this.__views__ = [];
}

// Ensure `LazyWrapper` is an instance of `baseLodash`.
LazyWrapper.prototype = baseCreate(baseLodash.prototype);
LazyWrapper.prototype.constructor = LazyWrapper;

module.exports = LazyWrapper;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseCreate = __webpack_require__(36),
    baseLodash = __webpack_require__(23);

/**
 * The base constructor for creating `lodash` wrapper objects.
 *
 * @private
 * @param {*} value The value to wrap.
 * @param {boolean} [chainAll] Enable explicit method chain sequences.
 */
function LodashWrapper(value, chainAll) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__chain__ = !!chainAll;
  this.__index__ = 0;
  this.__values__ = undefined;
}

LodashWrapper.prototype = baseCreate(baseLodash.prototype);
LodashWrapper.prototype.constructor = LodashWrapper;

module.exports = LodashWrapper;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getNative = __webpack_require__(3),
    root = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mapCacheClear = __webpack_require__(129),
    mapCacheDelete = __webpack_require__(130),
    mapCacheGet = __webpack_require__(131),
    mapCacheHas = __webpack_require__(132),
    mapCacheSet = __webpack_require__(133);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * The function whose prototype chain sequence wrappers inherit from.
 *
 * @private
 */
function baseLodash() {
  // No operation performed.
}

module.exports = baseLodash;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

module.exports = isIndex;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isArray = __webpack_require__(0),
    isSymbol = __webpack_require__(18);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}

module.exports = isKey;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseIsArguments = __webpack_require__(77),
    isObjectLike = __webpack_require__(4);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function () {
    return arguments;
}()) ? baseIsArguments : function (value) {
    return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var arrayLikeKeys = __webpack_require__(33),
    baseKeys = __webpack_require__(83),
    isArrayLike = __webpack_require__(17);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault(ex) {
  return ex && (typeof ex === 'undefined' ? 'undefined' : _typeof(ex)) === 'object' && 'default' in ex ? ex['default'] : ex;
}

var _flowRight = _interopDefault(__webpack_require__(160));
var _reduce = _interopDefault(__webpack_require__(169));
var _each = _interopDefault(__webpack_require__(158));
var melodyIdom = __webpack_require__(9);
var _defaults = _interopDefault(__webpack_require__(157));

var createScope = function createScope(component) {
  return {
    get el() {
      return component.el;
    },
    get refs() {
      return component.refs;
    },
    get props() {
      return component.props;
    },
    get state() {
      return component.state;
    },
    dispatch: function dispatch(action) {
      return component.dispatch(action);
    },
    getState: function getState() {
      return component.getState();
    }
  };
};

function lifecycle$1() {
  var def = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return function (component) {
    return component(function (proto) {
      var scope = Symbol();
      var _componentDidInitialize = proto.componentDidInitialize,
          _componentWillMount = proto.componentWillMount,
          _componentDidMount = proto.componentDidMount,
          _componentWillUpdate = proto.componentWillUpdate,
          _componentDidUpdate = proto.componentDidUpdate,
          _componentWillUnmount = proto.componentWillUnmount;

      return {
        componentDidInitialize: function componentDidInitialize() {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _componentDidInitialize.apply(this, args);
          this[scope] = createScope(this);
          if (def.componentDidInitialize) {
            def.componentDidInitialize.apply(this[scope], args);
          }
        },
        componentWillMount: function componentWillMount() {
          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          _componentWillMount.apply(this, args);
          if (def.componentWillMount) {
            def.componentWillMount.apply(this[scope], args);
          }
        },
        componentDidMount: function componentDidMount() {
          for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          _componentDidMount.apply(this, args);
          if (def.componentDidMount) {
            def.componentDidMount.apply(this[scope], args);
          }
        },
        componentWillUpdate: function componentWillUpdate() {
          for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }

          _componentWillUpdate.apply(this, args);
          if (def.componentWillUpdate) {
            def.componentWillUpdate.apply(this[scope], args);
          }
        },
        componentDidUpdate: function componentDidUpdate() {
          for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            args[_key5] = arguments[_key5];
          }

          _componentDidUpdate.apply(this, args);
          if (def.componentDidUpdate) {
            def.componentDidUpdate.apply(this[scope], args);
          }
        },
        componentWillUnmount: function componentWillUnmount() {
          for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            args[_key6] = arguments[_key6];
          }

          _componentWillUnmount.apply(this, args);
          if (def.componentWillUnmount) {
            def.componentWillUnmount.apply(this[scope], args);
          }
          this[scope] = undefined;
        }
      };
    });
  };
}

function bind(mapping, refs, context) {
  return _reduce(mapping, function (acc, eventHandlers, refName) {
    var ref = refs[refName];
    if (ref) {
      _each(eventHandlers, function (fn, eventName) {
        if (typeof fn !== 'function') {
          throw new Error('`' + eventName + '` handler for ref `' + refName + '` must be a function');
        }
        var handler = fn.bind(context);
        ref.addEventListener(eventName, handler);
        acc.push({ ref: ref, handler: handler, eventName: eventName });
      });
    }
    return acc;
  }, []);
}

function unbind(handlers) {
  _each(handlers, function (_ref) {
    var ref = _ref.ref,
        handler = _ref.handler,
        eventName = _ref.eventName;

    ref.removeEventListener(eventName, handler);
  });
}

function bindEvents$1(mapping) {
  return lifecycle$1({
    componentDidMount: function componentDidMount() {
      this.handlers = bind(mapping, this.refs, this);
    },
    componentWillUpdate: function componentWillUpdate() {
      unbind(this.handlers);
      this.handlers = null;
    },
    componentDidUpdate: function componentDidUpdate() {
      this.handlers = bind(mapping, this.refs, this);
    },
    componentWillUnmount: function componentWillUnmount() {
      unbind(this.handlers);
      this.handlers = null;
    }
  });
}

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/**
 * Accepts a function that maps owner props to a new collection of props that are passed to the base component.
 */
function mapProps$1(mapper) {
  return function (Component) {
    return function () {
      function MapPropsComponent() {
        _classCallCheck(this, MapPropsComponent);

        this.refs = Object.create(null);
        this.props = null;
        this.childInstance = new Component();
        melodyIdom.link(this, this.childInstance);
      }

      _createClass(MapPropsComponent, [{
        key: 'apply',
        value: function apply(props) {
          if (props !== this.props) {
            this.childInstance.apply(mapper(props));
          }
        }
      }, {
        key: 'el',
        set: function set(el) {
          this.childInstance.el = el;
        },
        get: function get() {
          return this.childInstance.el;
        }
      }]);

      return MapPropsComponent;
    }();
  };
}

/**
 * Specifies props to be passed by default to the base component.
 * Similar to withProps(), except the props from the owner take
 * precedence over props provided to the Hoc.
 */
function defaultProps$1(defaultProps) {
  return mapProps$1(function (props) {
    return _defaults({}, props, defaultProps);
  });
}

/**
 * Like mapProps(), except the newly created props are merged with the owner props.
 */
function withProps$1(additionalProps) {
  return mapProps$1(function (props) {
    return Object.assign({}, props, additionalProps);
  });
}

// Utility
var compose = _flowRight;

// Higher order mixins
var lifecycle = lifecycle$1;
var bindEvents = bindEvents$1;

// Higher order components
var mapProps = mapProps$1;
var defaultProps = defaultProps$1;
var withProps = withProps$1;

exports.compose = compose;
exports.lifecycle = lifecycle;
exports.bindEvents = bindEvents;
exports.mapProps = mapProps;
exports.defaultProps = defaultProps;
exports.withProps = withProps;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ListCache = __webpack_require__(11),
    stackClear = __webpack_require__(147),
    stackDelete = __webpack_require__(148),
    stackGet = __webpack_require__(149),
    stackHas = __webpack_require__(150),
    stackSet = __webpack_require__(151);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getNative = __webpack_require__(3),
    root = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseTimes = __webpack_require__(91),
    isArguments = __webpack_require__(26),
    isArray = __webpack_require__(0),
    isBuffer = __webpack_require__(53),
    isIndex = __webpack_require__(24),
    isTypedArray = __webpack_require__(55);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (
    // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' ||
    // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') ||
    // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') ||
    // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defineProperty = __webpack_require__(42);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(2);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = function () {
  function object() {}
  return function (proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = undefined;
    return result;
  };
}();

module.exports = baseCreate;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseForOwn = __webpack_require__(74),
    createBaseEach = __webpack_require__(100);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var castPath = __webpack_require__(41),
    toKey = __webpack_require__(15);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return index && index == length ? object : undefined;
}

module.exports = baseGet;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseIsEqualDeep = __webpack_require__(78),
    isObjectLike = __webpack_require__(4);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var identity = __webpack_require__(16),
    overRest = __webpack_require__(50),
    setToString = __webpack_require__(51);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = __webpack_require__(0),
    isKey = __webpack_require__(25),
    stringToPath = __webpack_require__(152),
    toString = __webpack_require__(173);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getNative = __webpack_require__(3);

var defineProperty = function () {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();

module.exports = defineProperty;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var SetCache = __webpack_require__(64),
    arraySome = __webpack_require__(70),
    cacheHas = __webpack_require__(94);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function (othValue, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(179)))

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var metaMap = __webpack_require__(136),
    noop = __webpack_require__(166);

/**
 * Gets metadata for `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {*} Returns the metadata for `func`.
 */
var getData = !metaMap ? noop : function (func) {
  return metaMap.get(func);
};

module.exports = getData;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var realNames = __webpack_require__(142);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the name of `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {string} Returns the function name.
 */
function getFuncName(func) {
  var result = func.name + '',
      array = realNames[result],
      length = hasOwnProperty.call(realNames, result) ? array.length : 0;

  while (length--) {
    var data = array[length],
        otherFunc = data.func;
    if (otherFunc == null || otherFunc == func) {
      return data.name;
    }
  }
  return result;
}

module.exports = getFuncName;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;

  return value === proto;
}

module.exports = isPrototype;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(2);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function (object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
  };
}

module.exports = matchesStrictComparable;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var apply = __webpack_require__(32);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
  return function () {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseSetToString = __webpack_require__(90),
    shortOut = __webpack_require__(146);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var root = __webpack_require__(1),
    stubFalse = __webpack_require__(171);

/** Detect free variable `exports`. */
var freeExports = ( false ? 'undefined' : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && ( false ? 'undefined' : _typeof(module)) == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(56)(module)))

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseGetTag = __webpack_require__(7),
    isObject = __webpack_require__(2);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
    if (!isObject(value)) {
        return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseIsTypedArray = __webpack_require__(81),
    baseUnary = __webpack_require__(93),
    nodeUtil = __webpack_require__(139);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _melodyComponent = __webpack_require__(5);

var _melodyHoc = __webpack_require__(29);

var _index = __webpack_require__(175);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*const initialState = { time: new Date().toLocaleTimeString() };

const stateReducer = (state = initialState, action) => {
    switch(action.type) {
        case RECEIVE_PROPS:
            return action.payload;

        case TICK:
            // Note: We create a modified copy of the original state
            // if we changed the previous state object instead,
            // the component would not be rendered again
            return Object.assign({}, state, {
                time: new Date().toLocaleTimeString() //action.payload.id
            });
    }
    return state;
}*/

// Initial clock state
var initialState = {
    time: new Date().toLocaleTimeString()
};

// Action types
var TICK = 'TICK';

// Actions:
var tickClock = function tickClock() {
    return { type: 'TICK' };
};

// Using default values to define the initial state
var stateReducer = function stateReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];


    // Use a switch case for adding other actions in the future
    switch (action.type) {
        case TICK:
            return Object.assign({}, state, {
                time: new Date().toLocaleTimeString()
            });

        // By default always return the given 'state'
        default:
            return state;
    }
};

var enhance = (0, _melodyHoc.lifecycle)({
    componentDidMount: function componentDidMount() {
        var _this = this;

        // Start our interval ticker
        this.intervalID = setInterval(
        // dispatch the tickClock action
        function () {
            return _this.dispatch(tickClock());
        }, 1000);
    },
    componentWillUnmount: function componentWillUnmount() {
        // Clear on unmount
        clearInterval(this.intervalID);
    }
});

exports.default = enhance((0, _melodyComponent.createComponent)(_index2.default, stateReducer));

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _melodyComponent = __webpack_require__(5);

var _melodyHoc = __webpack_require__(29);

var _index = __webpack_require__(176);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};

var stateReducer = function stateReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var _ref = arguments[1];
    var type = _ref.type,
        payload = _ref.payload;

    switch (type) {
        case _melodyComponent.RECEIVE_PROPS:
            return Object.assign({}, state, { changeRoute: payload.changeRoute });
        default:
            return state;
    }
};

var enhance = (0, _melodyHoc.bindEvents)({
    documentationLink: {
        click: function click(event) {
            event.preventDefault();

            var _getState = this.getState(),
                changeRoute = _getState.changeRoute;

            changeRoute('/documentation');
        }
    }
});

exports.default = enhance((0, _melodyComponent.createComponent)(_index2.default, stateReducer));

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _melodyComponent = __webpack_require__(5);

var _melodyUtil = __webpack_require__(178);

var _melodyHoc = __webpack_require__(29);

var _index = __webpack_require__(177);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var combineReducers = function combineReducers() {
    for (var _len = arguments.length, reducers = Array(_len), _key = 0; _key < _len; _key++) {
        reducers[_key] = arguments[_key];
    }

    return function (previous, current) {
        return reducers.reduce(function (p, r) {
            return r(p, current);
        }, previous);
    };
};

exports.default = function (routes) {
    var _changeRoute = function _changeRoute(path) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        return {
            type: 'CHANGE_ROUTE',
            payload: {
                path: path,
                params: params
            }
        };
    };

    var initialState = {
        routes: routes,
        ChildComponent: null,
        ChildComponentKey: '',
        params: [],
        changeRoute: function changeRoute() {}
    };

    var stateReducer = function stateReducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
        var _ref = arguments[1];
        var type = _ref.type,
            payload = _ref.payload;

        switch (type) {
            case 'CHANGE_ROUTE':
                return Object.assign({}, state, {
                    ChildComponent: state.routes[payload.path] || null,
                    ChildComponentKey: [payload.path].concat(payload.params).join('::'),
                    params: payload.params
                });
            default:
                return state;
        }
    };

    var changeRouteReducer = function changeRouteReducer(dispatch) {
        return {
            changeRoute: function changeRoute(path) {
                var _ref2;

                for (var _len2 = arguments.length, params = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                    params[_key2 - 1] = arguments[_key2];
                }

                var url = (_ref2 = [path]).concat.apply(_ref2, params).join('/');
                window.history.pushState(null, '', url);
                dispatch(_changeRoute(path, params));
            }
        };
    };

    var RouterComponent = (0, _melodyComponent.createComponent)(_index2.default, combineReducers(stateReducer, (0, _melodyUtil.dispatchToState)(changeRouteReducer)));

    var enhance = (0, _melodyHoc.lifecycle)({
        componentDidMount: function componentDidMount() {
            var _this = this;

            this.changeRoute = function () {
                var routes = _this.getState().routes;
                var pathName = window.location.pathname;

                for (var route in routes) {
                    if (!routes.hasOwnProperty(route)) {
                        continue;
                    }

                    if (pathName === route) {
                        _this.dispatch(_changeRoute(route));
                        return;
                    }

                    if (pathName.indexOf(route + '/') === 0) {
                        var params = pathName.substr(route.length + 1).split('/');
                        _this.dispatch(_changeRoute(route, params));
                        return;
                    }
                }
            };

            this.changeRoute();
            window.addEventListener('popstate', this.changeRoute, false);
        },
        componentWillUnmount: function componentWillUnmount() {
            window.removeEventListener('popstate', this.changeRoute, false);
            this.changeRoute = false;
        }
    });

    return enhance(RouterComponent);
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getNative = __webpack_require__(3),
    root = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hashClear = __webpack_require__(114),
    hashDelete = __webpack_require__(115),
    hashGet = __webpack_require__(116),
    hashHas = __webpack_require__(117),
    hashSet = __webpack_require__(118);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getNative = __webpack_require__(3),
    root = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getNative = __webpack_require__(3),
    root = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var MapCache = __webpack_require__(22),
    setCacheAdd = __webpack_require__(143),
    setCacheHas = __webpack_require__(144);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
    var index = -1,
        length = values == null ? 0 : values.length;

    this.__data__ = new MapCache();
    while (++index < length) {
        this.add(values[index]);
    }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var root = __webpack_require__(1);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseAssignValue = __webpack_require__(35),
    eq = __webpack_require__(8);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var arrayPush = __webpack_require__(34),
    isFlattenable = __webpack_require__(119);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createBaseFor = __webpack_require__(101);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseFor = __webpack_require__(73),
    keys = __webpack_require__(28);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var arrayPush = __webpack_require__(34),
    isArray = __webpack_require__(0);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseGetTag = __webpack_require__(7),
    isObjectLike = __webpack_require__(4);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Stack = __webpack_require__(30),
    equalArrays = __webpack_require__(43),
    equalByTag = __webpack_require__(104),
    equalObjects = __webpack_require__(105),
    getTag = __webpack_require__(111),
    isArray = __webpack_require__(0),
    isBuffer = __webpack_require__(53),
    isTypedArray = __webpack_require__(55);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Stack = __webpack_require__(30),
    baseIsEqual = __webpack_require__(39);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isFunction = __webpack_require__(54),
    isMasked = __webpack_require__(123),
    isObject = __webpack_require__(2),
    toSource = __webpack_require__(52);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseGetTag = __webpack_require__(7),
    isLength = __webpack_require__(27),
    isObjectLike = __webpack_require__(4);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var baseMatches = __webpack_require__(85),
    baseMatchesProperty = __webpack_require__(86),
    identity = __webpack_require__(16),
    isArray = __webpack_require__(0),
    property = __webpack_require__(168);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
    return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isPrototype = __webpack_require__(47),
    nativeKeys = __webpack_require__(137);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(2),
    isPrototype = __webpack_require__(47),
    nativeKeysIn = __webpack_require__(138);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseIsMatch = __webpack_require__(79),
    getMatchData = __webpack_require__(108),
    matchesStrictComparable = __webpack_require__(49);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function (object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseIsEqual = __webpack_require__(39),
    get = __webpack_require__(162),
    hasIn = __webpack_require__(163),
    isKey = __webpack_require__(25),
    isStrictComparable = __webpack_require__(48),
    matchesStrictComparable = __webpack_require__(49),
    toKey = __webpack_require__(15);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function (object) {
    var objValue = get(object, path);
    return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function (object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseGet = __webpack_require__(38);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function (object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * The base implementation of `_.reduce` and `_.reduceRight`, without support
 * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} accumulator The initial value.
 * @param {boolean} initAccum Specify using the first or last element of
 *  `collection` as the initial value.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @returns {*} Returns the accumulated value.
 */
function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
  eachFunc(collection, function (value, index, collection) {
    accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection);
  });
  return accumulator;
}

module.exports = baseReduce;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var constant = __webpack_require__(155),
    defineProperty = __webpack_require__(42),
    identity = __webpack_require__(16);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function (func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Symbol = __webpack_require__(6),
    arrayMap = __webpack_require__(68),
    isArray = __webpack_require__(0),
    isSymbol = __webpack_require__(18);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

module.exports = baseToString;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

module.exports = baseUnary;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var identity = __webpack_require__(16);

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assignValue = __webpack_require__(71),
    baseAssignValue = __webpack_require__(35);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var root = __webpack_require__(1);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseRest = __webpack_require__(40),
    isIterateeCall = __webpack_require__(120);

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function (object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArrayLike = __webpack_require__(17);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function (collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while (fromRight ? index-- : ++index < length) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function (object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LodashWrapper = __webpack_require__(20),
    flatRest = __webpack_require__(106),
    getData = __webpack_require__(45),
    getFuncName = __webpack_require__(46),
    isArray = __webpack_require__(0),
    isLaziable = __webpack_require__(122);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to compose bitmasks for function metadata. */
var WRAP_CURRY_FLAG = 8,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_ARY_FLAG = 128,
    WRAP_REARG_FLAG = 256;

/**
 * Creates a `_.flow` or `_.flowRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new flow function.
 */
function createFlow(fromRight) {
  return flatRest(function (funcs) {
    var length = funcs.length,
        index = length,
        prereq = LodashWrapper.prototype.thru;

    if (fromRight) {
      funcs.reverse();
    }
    while (index--) {
      var func = funcs[index];
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
        var wrapper = new LodashWrapper([], true);
      }
    }
    index = wrapper ? index : length;
    while (++index < length) {
      func = funcs[index];

      var funcName = getFuncName(func),
          data = funcName == 'wrapper' ? getData(func) : undefined;

      if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
        wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
      } else {
        wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
      }
    }
    return function () {
      var args = arguments,
          value = args[0];

      if (wrapper && args.length == 1 && isArray(value)) {
        return wrapper.plant(value).value();
      }
      var index = 0,
          result = length ? funcs[index].apply(this, args) : value;

      while (++index < length) {
        result = funcs[index].call(this, result);
      }
      return result;
    };
  });
}

module.exports = createFlow;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var eq = __webpack_require__(8);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
 * of source objects to the destination object for all destination properties
 * that resolve to `undefined`.
 *
 * @private
 * @param {*} objValue The destination value.
 * @param {*} srcValue The source value.
 * @param {string} key The key of the property to assign.
 * @param {Object} object The parent object of `objValue`.
 * @returns {*} Returns the value to assign.
 */
function customDefaultsAssignIn(objValue, srcValue, key, object) {
  if (objValue === undefined || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
    return srcValue;
  }
  return objValue;
}

module.exports = customDefaultsAssignIn;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Symbol = __webpack_require__(6),
    Uint8Array = __webpack_require__(65),
    eq = __webpack_require__(8),
    equalArrays = __webpack_require__(43),
    mapToArray = __webpack_require__(134),
    setToArray = __webpack_require__(145);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == other + '';

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getAllKeys = __webpack_require__(107);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var flatten = __webpack_require__(159),
    overRest = __webpack_require__(50),
    setToString = __webpack_require__(51);

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseGetAllKeys = __webpack_require__(75),
    getSymbols = __webpack_require__(110),
    keys = __webpack_require__(28);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isStrictComparable = __webpack_require__(48),
    keys = __webpack_require__(28);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
    var result = keys(object),
        length = result.length;

    while (length--) {
        var key = result[length],
            value = object[key];

        result[length] = [key, value, isStrictComparable(value)];
    }
    return result;
}

module.exports = getMatchData;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Symbol = __webpack_require__(6);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var arrayFilter = __webpack_require__(67),
    stubArray = __webpack_require__(170);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function (object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function (symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DataView = __webpack_require__(60),
    Map = __webpack_require__(21),
    Promise = __webpack_require__(62),
    Set = __webpack_require__(63),
    WeakMap = __webpack_require__(31),
    baseGetTag = __webpack_require__(7),
    toSource = __webpack_require__(52);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
    getTag = function getTag(value) {
        var result = baseGetTag(value),
            Ctor = result == objectTag ? value.constructor : undefined,
            ctorString = Ctor ? toSource(Ctor) : '';

        if (ctorString) {
            switch (ctorString) {
                case dataViewCtorString:
                    return dataViewTag;
                case mapCtorString:
                    return mapTag;
                case promiseCtorString:
                    return promiseTag;
                case setCtorString:
                    return setTag;
                case weakMapCtorString:
                    return weakMapTag;
            }
        }
        return result;
    };
}

module.exports = getTag;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var castPath = __webpack_require__(41),
    isArguments = __webpack_require__(26),
    isArray = __webpack_require__(0),
    isIndex = __webpack_require__(24),
    isLength = __webpack_require__(27),
    toKey = __webpack_require__(15);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
}

module.exports = hasPath;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nativeCreate = __webpack_require__(14);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nativeCreate = __webpack_require__(14);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nativeCreate = __webpack_require__(14);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

module.exports = hashHas;

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nativeCreate = __webpack_require__(14);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Symbol = __webpack_require__(6),
    isArguments = __webpack_require__(26),
    isArray = __webpack_require__(0);

/** Built-in value references. */
var spreadableSymbol = _Symbol ? _Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
    return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var eq = __webpack_require__(8),
    isArrayLike = __webpack_require__(17),
    isIndex = __webpack_require__(24),
    isObject = __webpack_require__(2);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index === 'undefined' ? 'undefined' : _typeof(index);
  if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

module.exports = isKeyable;

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LazyWrapper = __webpack_require__(19),
    getData = __webpack_require__(45),
    getFuncName = __webpack_require__(46),
    lodash = __webpack_require__(174);

/**
 * Checks if `func` has a lazy counterpart.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
 *  else `false`.
 */
function isLaziable(func) {
  var funcName = getFuncName(func),
      other = lodash[funcName];

  if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
    return false;
  }
  if (func === other) {
    return true;
  }
  var data = getData(other);
  return !!data && func === data[0];
}

module.exports = isLaziable;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var coreJsData = __webpack_require__(98);

/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

module.exports = isMasked;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assocIndexOf = __webpack_require__(12);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assocIndexOf = __webpack_require__(12);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assocIndexOf = __webpack_require__(12);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assocIndexOf = __webpack_require__(12);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Hash = __webpack_require__(61),
    ListCache = __webpack_require__(11),
    Map = __webpack_require__(21);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}

module.exports = mapCacheClear;

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getMapData = __webpack_require__(13);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getMapData = __webpack_require__(13);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getMapData = __webpack_require__(13);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getMapData = __webpack_require__(13);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var memoize = __webpack_require__(165);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function (key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var WeakMap = __webpack_require__(31);

/** Used to store function metadata. */
var metaMap = WeakMap && new WeakMap();

module.exports = metaMap;

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var overArg = __webpack_require__(141);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var freeGlobal = __webpack_require__(44);

/** Detect free variable `exports`. */
var freeExports = ( false ? 'undefined' : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && ( false ? 'undefined' : _typeof(module)) == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = function () {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();

module.exports = nodeUtil;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(56)(module)))

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/** Used to lookup unminified function names. */
var realNames = {};

module.exports = realNames;

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function () {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ListCache = __webpack_require__(11);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}

module.exports = stackClear;

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ListCache = __webpack_require__(11),
    Map = __webpack_require__(21),
    MapCache = __webpack_require__(22);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var memoizeCapped = __webpack_require__(135);

/** Used to match property names within property paths. */
var reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function (string) {
  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function (match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});

module.exports = stringToPath;

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LazyWrapper = __webpack_require__(19),
    LodashWrapper = __webpack_require__(20),
    copyArray = __webpack_require__(96);

/**
 * Creates a clone of `wrapper`.
 *
 * @private
 * @param {Object} wrapper The wrapper to clone.
 * @returns {Object} Returns the cloned wrapper.
 */
function wrapperClone(wrapper) {
  if (wrapper instanceof LazyWrapper) {
    return wrapper.clone();
  }
  var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
  result.__actions__ = copyArray(wrapper.__actions__);
  result.__index__ = wrapper.__index__;
  result.__values__ = wrapper.__values__;
  return result;
}

module.exports = wrapperClone;

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var copyObject = __webpack_require__(97),
    createAssigner = __webpack_require__(99),
    keysIn = __webpack_require__(164);

/**
 * This method is like `_.assignIn` except that it accepts `customizer`
 * which is invoked to produce the assigned values. If `customizer` returns
 * `undefined`, assignment is handled by the method instead. The `customizer`
 * is invoked with five arguments: (objValue, srcValue, key, object, source).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias extendWith
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @see _.assignWith
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   return _.isUndefined(objValue) ? srcValue : objValue;
 * }
 *
 * var defaults = _.partialRight(_.assignInWith, customizer);
 *
 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var assignInWith = createAssigner(function (object, source, srcIndex, customizer) {
  copyObject(source, keysIn(source), object, customizer);
});

module.exports = assignInWith;

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function () {
    return value;
  };
}

module.exports = constant;

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(2),
    now = __webpack_require__(167),
    toNumber = __webpack_require__(172);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var apply = __webpack_require__(32),
    assignInWith = __webpack_require__(154),
    baseRest = __webpack_require__(40),
    customDefaultsAssignIn = __webpack_require__(103);

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var defaults = baseRest(function (args) {
  args.push(undefined, customDefaultsAssignIn);
  return apply(assignInWith, undefined, args);
});

module.exports = defaults;

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(161);

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseFlatten = __webpack_require__(72);

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createFlow = __webpack_require__(102);

/**
 * This method is like `_.flow` except that it creates a function that
 * invokes the given functions from right to left.
 *
 * @static
 * @since 3.0.0
 * @memberOf _
 * @category Util
 * @param {...(Function|Function[])} [funcs] The functions to invoke.
 * @returns {Function} Returns the new composite function.
 * @see _.flow
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var addSquare = _.flowRight([square, _.add]);
 * addSquare(1, 2);
 * // => 9
 */
var flowRight = createFlow(true);

module.exports = flowRight;

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var arrayEach = __webpack_require__(66),
    baseEach = __webpack_require__(37),
    castFunction = __webpack_require__(95),
    isArray = __webpack_require__(0);

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

module.exports = forEach;

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseGet = __webpack_require__(38);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseHasIn = __webpack_require__(76),
    hasPath = __webpack_require__(113);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var arrayLikeKeys = __webpack_require__(33),
    baseKeysIn = __webpack_require__(84),
    isArrayLike = __webpack_require__(17);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var MapCache = __webpack_require__(22);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function memoized() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var root = __webpack_require__(1);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function now() {
  return root.Date.now();
};

module.exports = now;

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseProperty = __webpack_require__(87),
    basePropertyDeep = __webpack_require__(88),
    isKey = __webpack_require__(25),
    toKey = __webpack_require__(15);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var arrayReduce = __webpack_require__(69),
    baseEach = __webpack_require__(37),
    baseIteratee = __webpack_require__(82),
    baseReduce = __webpack_require__(89),
    isArray = __webpack_require__(0);

/**
 * Reduces `collection` to a value which is the accumulated result of running
 * each element in `collection` thru `iteratee`, where each successive
 * invocation is supplied the return value of the previous. If `accumulator`
 * is not given, the first element of `collection` is used as the initial
 * value. The iteratee is invoked with four arguments:
 * (accumulator, value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.reduce`, `_.reduceRight`, and `_.transform`.
 *
 * The guarded methods are:
 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
 * and `sortBy`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @see _.reduceRight
 * @example
 *
 * _.reduce([1, 2], function(sum, n) {
 *   return sum + n;
 * }, 0);
 * // => 3
 *
 * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 *   return result;
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
 */
function reduce(collection, iteratee, accumulator) {
    var func = isArray(collection) ? arrayReduce : baseReduce,
        initAccum = arguments.length < 3;

    return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEach);
}

module.exports = reduce;

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(2),
    isSymbol = __webpack_require__(18);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

module.exports = toNumber;

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseToString = __webpack_require__(92);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LazyWrapper = __webpack_require__(19),
    LodashWrapper = __webpack_require__(20),
    baseLodash = __webpack_require__(23),
    isArray = __webpack_require__(0),
    isObjectLike = __webpack_require__(4),
    wrapperClone = __webpack_require__(153);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates a `lodash` object which wraps `value` to enable implicit method
 * chain sequences. Methods that operate on and return arrays, collections,
 * and functions can be chained together. Methods that retrieve a single value
 * or may return a primitive value will automatically end the chain sequence
 * and return the unwrapped value. Otherwise, the value must be unwrapped
 * with `_#value`.
 *
 * Explicit chain sequences, which must be unwrapped with `_#value`, may be
 * enabled using `_.chain`.
 *
 * The execution of chained methods is lazy, that is, it's deferred until
 * `_#value` is implicitly or explicitly called.
 *
 * Lazy evaluation allows several methods to support shortcut fusion.
 * Shortcut fusion is an optimization to merge iteratee calls; this avoids
 * the creation of intermediate arrays and can greatly reduce the number of
 * iteratee executions. Sections of a chain sequence qualify for shortcut
 * fusion if the section is applied to an array and iteratees accept only
 * one argument. The heuristic for whether a section qualifies for shortcut
 * fusion is subject to change.
 *
 * Chaining is supported in custom builds as long as the `_#value` method is
 * directly or indirectly included in the build.
 *
 * In addition to lodash methods, wrappers have `Array` and `String` methods.
 *
 * The wrapper `Array` methods are:
 * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
 *
 * The wrapper `String` methods are:
 * `replace` and `split`
 *
 * The wrapper methods that support shortcut fusion are:
 * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
 * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
 * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
 *
 * The chainable wrapper methods are:
 * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
 * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
 * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
 * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
 * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
 * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
 * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
 * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
 * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
 * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
 * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
 * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
 * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
 * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
 * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
 * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
 * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
 * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
 * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
 * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
 * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
 * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
 * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
 * `zipObject`, `zipObjectDeep`, and `zipWith`
 *
 * The wrapper methods that are **not** chainable by default are:
 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
 * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
 * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
 * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
 * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
 * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
 * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
 * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
 * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
 * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
 * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
 * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
 * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
 * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
 * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
 * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
 * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
 * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
 * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
 * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
 * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
 * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
 * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
 * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
 * `upperFirst`, `value`, and `words`
 *
 * @name _
 * @constructor
 * @category Seq
 * @param {*} value The value to wrap in a `lodash` instance.
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var wrapped = _([1, 2, 3]);
 *
 * // Returns an unwrapped value.
 * wrapped.reduce(_.add);
 * // => 6
 *
 * // Returns a wrapped value.
 * var squares = wrapped.map(square);
 *
 * _.isArray(squares);
 * // => false
 *
 * _.isArray(squares.value());
 * // => true
 */
function lodash(value) {
  if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
    if (value instanceof LodashWrapper) {
      return value;
    }
    if (hasOwnProperty.call(value, '__wrapped__')) {
      return wrapperClone(value);
    }
  }
  return new LodashWrapper(value);
}

// Ensure wrappers are instances of `baseLodash`.
lodash.prototype = baseLodash.prototype;
lodash.prototype.constructor = lodash;

module.exports = lodash;

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _melodyIdom = __webpack_require__(9);

var _template = {},
    _statics = ["class", "home"];

_template.render = function (_context) {
    process.env.NODE_ENV !== 'production' && typeof performance !== 'undefined' && performance.mark && performance.mark("documentation render start");
    (0, _melodyIdom.elementOpen)("div", "T)?Ssm}", _statics);
    (0, _melodyIdom.elementOpen)("h1", null, null);
    (0, _melodyIdom.text)("Documentation");
    (0, _melodyIdom.elementClose)("h1");
    (0, _melodyIdom.elementClose)("div");
    process.env.NODE_ENV !== 'production' && typeof performance !== 'undefined' && performance.mark && performance.mark("documentation render end");
    process.env.NODE_ENV !== 'production' && typeof performance !== 'undefined' && performance.measure && performance.measure("documentation render", "documentation render start", "documentation render end");
};

if (process.env.NODE_ENV !== "production") {
    _template.displayName = "documentation";
}

exports.default = _template;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _melodyIdom = __webpack_require__(9);

var _template = {},
    _statics = ["href", ""],
    _statics$1 = ["class", "home"];

_template.render = function (_context) {
    process.env.NODE_ENV !== 'production' && typeof performance !== 'undefined' && performance.mark && performance.mark("home render start");
    (0, _melodyIdom.elementOpen)("div", "qmid0N8", _statics$1);
    (0, _melodyIdom.elementOpen)("h1", null, null);
    (0, _melodyIdom.text)("Welcome to Melody!");
    (0, _melodyIdom.elementClose)("h1");
    (0, _melodyIdom.elementOpen)("a", "|E:v;Xs", _statics);
    (0, _melodyIdom.ref)("documentationLink");
    (0, _melodyIdom.text)("Documentation");
    (0, _melodyIdom.elementClose)("a");
    (0, _melodyIdom.elementClose)("div");
    process.env.NODE_ENV !== 'production' && typeof performance !== 'undefined' && performance.mark && performance.mark("home render end");
    process.env.NODE_ENV !== 'production' && typeof performance !== 'undefined' && performance.measure && performance.measure("home render", "home render start", "home render end");
};

if (process.env.NODE_ENV !== "production") {
    _template.displayName = "home";
}

exports.default = _template;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _melodyIdom = __webpack_require__(9);

var _template = {},
    _statics = ["id", "app"];

_template.render = function (_context) {
    process.env.NODE_ENV !== 'production' && typeof performance !== 'undefined' && performance.mark && performance.mark("router render start");
    (0, _melodyIdom.elementOpen)("div", "DVd}{j*", _statics);

    if (_context.ChildComponent && _context.ChildComponentKey) {
        (0, _melodyIdom.component)(_context.ChildComponent, "" + _context.ChildComponentKey, {
            changeRoute: _context.changeRoute,
            params: _context.params
        });
    }

    (0, _melodyIdom.elementClose)("div");
    process.env.NODE_ENV !== 'production' && typeof performance !== 'undefined' && performance.mark && performance.mark("router render end");
    process.env.NODE_ENV !== 'production' && typeof performance !== 'undefined' && performance.measure && performance.measure("router render", "router render start", "router render end");
};

if (process.env.NODE_ENV !== "production") {
    _template.displayName = "router";
}

exports.default = _template;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, '__esModule', { value: true });

var melodyComponent = __webpack_require__(5);

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
};

/**
 * Created by pgotthardt on 03/06/16.
 */

/**
 * Wraps a series of redux compatible middlewares into a Melody Component Mixin.
 *
 * @param {...Function} middlewares
 */
var applyMiddleware = function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (proto) {
    var _componentDidInitialize = proto.componentDidInitialize;
    return {
      componentDidInitialize: function componentDidInitialize() {
        _componentDidInitialize.call(this);
        // and dispatch
        var next = this.dispatch;
        var i = middlewares.length;
        this.dispatch = function (action) {
          return next(action);
        };
        while (i--) {
          var curr = middlewares[i];
          if (curr) {
            next = curr(this)(next);
          }
        }
      }
    };
  };
};

/**
 * Wraps an object into a reducer function so that each property of the object should
 * correspond to the action type that it handles.
 *
 * @param {Object} pattern The object that should be used to delegate to the correct reducer.
 * @param {Object?} initialState An optional state that should be used on initialization.
 */
var createActionReducer = function createActionReducer(pattern, initialState) {
  return function (state, action) {
    if (action.type && pattern[action.type]) {
      return (0, pattern[action.type])(state || initialState, action) || state || initialState;
    }
    return state || initialState;
  };
};

var mapDispatchToStateWithProps = function mapDispatchToStateWithProps(fn) {
  return function (state, action) {
    if (action.type === 'MELODY/RECEIVE_PROPS') {
      return Object.assign({}, state, fn(action.meta.dispatch, action.payload));
    }
    return state;
  };
};

var DISPATCH_PROPS = 'MELODY/DISPATCH_TO_STATE';

var mapDispatchToState = function mapDispatchToState(fn) {
  return function (state, action) {
    if (action.type === 'MELODY/RECEIVE_PROPS') {
      if (state && !state[DISPATCH_PROPS]) {
        var dispatchMap = fn(action.meta.dispatch);
        return Object.assign({}, state, dispatchMap, {
          'MELODY/DISPATCH_TO_STATE': dispatchMap
        });
      }
    }
    return state;
  };
};

/**
 * Returns a function that will dispatch the return value of the given action creator
 * to the given dispatch function.
 *
 * Can be used to create an action that is always dispatched to the same store or component.
 *
 * @param {Function} action
 * @param {Function} dispatch
 */
var bindActionToDispatch = function bindActionToDispatch(action, dispatch) {
  return function () {
    return dispatch(action.apply(undefined, arguments));
  };
};

var wrapObjectToDispatch = function wrapObjectToDispatch(dispatchToState) {
  return function (dispatch) {
    var keys = Object.keys(dispatchToState);
    var mappedDispatchers = {};
    var i = 0;
    for (var len = keys.length; i < len; i++) {
      var actionCreator = dispatchToState[keys[i]];
      if (typeof actionCreator === 'function') {
        mappedDispatchers[keys[i]] = bindActionToDispatch(actionCreator, dispatch);
      }
    }
    return mappedDispatchers;
  };
};

/**
 * Returns a function that can be used to inject dispatchers into the state
 * of a component.
 *
 * Usually used together with [reduce-reducers](https://github.com/acdlite/reduce-reducers).
 *
 * @param {Function|Object} dispatchToState The dispatch reducer
 */
function dispatchToState(dispatchToState) {
  if ((typeof dispatchToState === 'undefined' ? 'undefined' : _typeof(dispatchToState)) === 'object') {
    return mapDispatchToState(wrapObjectToDispatch(dispatchToState));
  }
  var dependsOnProps = dispatchToState.length === 2;
  if (dependsOnProps) {
    return mapDispatchToStateWithProps(dispatchToState);
  } else {
    return mapDispatchToState(dispatchToState);
  }
}

var defaultReducer = function defaultReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _ref = arguments[1];
  var type = _ref.type,
      payload = _ref.payload;

  if (type === melodyComponent.RECEIVE_PROPS) {
    return Object.assign({}, state, payload);
  }
  return state;
};

/**
 * Returns a reducer that exposes certain functions of a component to the state
 *
 * @param {Array} list List of property names that should be exposed to the state
 * @param {Function} reducer Component reducer that will be wrapped
 */
function exposeToState() {
  var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var reducer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultReducer;

  return function (state, action) {
    var type = action.type,
        meta = action.meta;

    var result = reducer(state, action);

    // Check if functions have already been merged to state;
    var hasExpose = true;
    for (var i = 0, l = list.length; i < l; i++) {
      var key = list[i];
      if (!result[key]) {
        hasExpose = false;
        break;
      }
    }

    if (hasExpose || type !== melodyComponent.RECEIVE_PROPS) {
      return result;
    }

    var expose = list.reduce(function (acc, key) {
      var prop = meta[key];
      if (!prop) {
        throw new Error('Property `' + key + '` was not found on the component.');
      }
      if (typeof prop !== 'function') {
        throw new Error('Property `' + key + '` is not a function. Only functions can be exposed to the state.');
      }
      acc[key] = prop.bind(meta);
      return acc;
    }, {});

    return Object.assign({}, result, expose);
  };
}

exports.applyMiddleware = applyMiddleware;
exports.createActionReducer = createActionReducer;
exports.bindActionToDispatch = bindActionToDispatch;
exports.dispatchToState = dispatchToState;
exports.exposeToState = exposeToState;

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _MelodyRouter;
// import './index.scss';

var _melodyComponent = __webpack_require__(5);

var _router = __webpack_require__(59);

var _router2 = _interopRequireDefault(_router);

var _home = __webpack_require__(58);

var _home2 = _interopRequireDefault(_home);

var _documentation = __webpack_require__(57);

var _documentation2 = _interopRequireDefault(_documentation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Router = (0, _router2.default)((_MelodyRouter = {}, _MelodyRouter['/'] = _home2.default, _MelodyRouter['/documentation'] = _documentation2.default, _MelodyRouter));

(0, _melodyComponent.render)(document.getElementById('root'), Router);

/***/ })
/******/ ]);