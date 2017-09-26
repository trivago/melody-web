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
/******/ 	return __webpack_require__(__webpack_require__.s = 116);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault(ex) {
    return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

var _debounce = _interopDefault(__webpack_require__(97));

var options = {};

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
 * A cached reference to the create function.
 */
function Blank() {}
Blank.prototype = Object.create(null);
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
    drop(comp);
    var data = comp.el ? comp.el['__incrementalDOMData'] : null;
    if (options.beforeUnmount) {
        options.beforeUnmount(comp);
    }
    if (mountedComponents.has(comp)) {
        comp.componentWillUnmount();
        mountedComponents.delete(comp);
    }
    if (data && data.componentInstance) {
        data.componentInstance = null;
    }
    comp.el = null;
};
var documentRange = null;
function parseHTML(htmlString) {
    if (!documentRange) {
        documentRange = document.createRange();
        documentRange.selectNode(document.body);
    }
    return documentRange.createContextualFragment(htmlString.trim()).childNodes;
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
    * The length of the children in this element.
    * This value is only calculated for raw elements.
    * @type {number}
    */
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
            throw new Error("Can't getData for non-existing node.");
        }
    }
    importNode(node);
    return node['__incrementalDOMData'];
};
var importNode = function importNode(node) {
    var stack = [node];
    while (stack.length) {
        var node_1 = stack.pop();
        if (node_1['__incrementalDOMData']) {
            continue;
        }
        var isElement = node_1 instanceof Element;
        var nodeName = isElement ? node_1.localName : node_1.nodeName;
        var key = isElement ? node_1.getAttribute('key') : null;
        var data = initData(node_1, nodeName, key);
        if (key) {
            var parentData = node_1.parentNode && node_1.parentNode['__incrementalDOMData'];
            if (parentData) {
                parentData.keyMap[key] = node_1;
            }
        }
        if (isElement) {
            var attributes = node_1.attributes;
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
            for (var child = node_1.firstChild; child; child = child.nextSibling) {
                stack.push(child);
            }
        } else if (node_1.nodeType === 3) {
            data.text = node_1.data;
        }
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
/** @type {?Node} */
var currentNode;
/** @type {?Node} */
var currentParent;
/** @type {?Document} */
var doc;
var componentKey = null;
var currentComponent = null;
var deletedNodes = null;
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
        var prevDeletedNodes = deletedNodes;
        var prevDoc = doc;
        var prevCurrentNode = currentNode;
        var prevCurrentParent = currentParent;
        var prevCurrentComponent = currentComponent;
        var previousInAttribute = false;
        var previousInSkip = false;
        deletedNodes = [];
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
                deletedNodes = prevDeletedNodes;
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
        var i, len;
        for (i = 0, len = deletedNodes.length; i < len; i++) {
            nodeDeleted(deletedNodes[i]);
        }
        // reset context
        deletedNodes = prevDeletedNodes;
        doc = prevDoc;
        currentNode = prevCurrentNode;
        currentParent = prevCurrentParent;
        currentComponent = prevCurrentComponent;
        return retVal;
    };
};
function nodeDeleted(node) {
    var data = getData(node);
    if (data.attrs.ref && data.attrs.ref.disposer) {
        data.attrs.ref.disposer.unsubscribe();
        data.attrs.ref = null;
    }
    if (data.componentInstance) {
        unmountComponent(data.componentInstance);
    }
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
                    deletedNodes.push(keyNode);
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
    deletedNodes.push(child);
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
                deletedNodes.push(child);
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
        assertInPatch('currentElement', deletedNodes);
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
var mountedComponents = new WeakSet();
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
    var p = queue;
    while (p.next !== NIL) {
        if (nextQueue === NIL) {
            return queue;
        }
        if (nextQueue.component === p.component) {
            nextQueue = nextQueue.next;
        } else {
            var prev = nextQueue;
            for (var head = nextQueue.next; head && head !== NIL; head = head.next) {
                if (head.component === p.component) {
                    prev.next = head.next;
                    break;
                }
                prev = head;
            }
        }
        p = p.next;
    }
    p.next = nextQueue;
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
    var mounted = new Set();
    while (next) {
        prevQueue = queue;
        queue = NIL;
        if (next.component.el) {
            var isNew = next.component.el.localName === 'm-placeholder';
            patchOuter(next.component.el, function (_) {
                return updateComponent(next.component);
            }, {});
            mounted.add(next.component);
            if (isNew && queue !== NIL) {
                var drained = drain();
                for (var i = 0; i < drained.length; i++) {
                    mounted.add(drained[i]);
                }
                queue = NIL;
            }
        }
        if (queue !== NIL) {
            hasNew = true;
        }
        queue = concat(queue, prevQueue);
        next = 0 < deadline.timeRemaining() ? pop() : null;
    }
    // notify the freshly mounted components
    var notified = mounted.values();
    for (var current = notified.next(); !current.done; current = notified.next()) {
        var comp = current.value;
        if (comp.el) {
            mountedComponents.add(comp);
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
function clear() {
    if (process.env.NODE_ENV !== 'test') {
        throw new Error('Clearing the queue is only allowed within a test environment.');
    }
    queue = NIL;
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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
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
        setProperty(el, name, value);
    } else {
        applyAttr(el, name /** @type {?(boolean|number|string)} */, value);
    }
}
function setProperty(el, name, value) {
    try {
        el[name] = value;
    } catch (e) {}
}
function eventProxy(e) {
    return this._listeners[e.type](e);
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
    if (name === 'style') {
        var old = attrs.style;
        if (!value || typeof value === 'string') {
            el.style.cssText = value || '';
        } else {
            if (typeof old === 'string') {
                el.style.cssText = '';
            } else {
                for (var i in old) {
                    if (!(i in value)) {
                        el.style[i] = '';
                    }
                }
            }
            for (var i in value) {
                if (i.indexOf('-') >= 0) {
                    el.style.setProperty(i, value[i]);
                } else {
                    el.style[i] = value[i];
                }
            }
        }
    } else if (name === 'ref') {
        var old = attrs.ref;
        if (old) {
            if (old.creator === value) {
                return;
            }
            old.disposer.unsubscribe();
        }
        if (!value) {
            attrs.ref = null;
            return;
        }
        attrs.ref = {
            creator: value,
            disposer: value(el)
        };
        if (process.env.NODE_ENV !== 'production') {
            if (!attrs.ref.disposer || typeof attrs.ref.disposer.unsubscribe !== 'function') {
                throw new Error("A ref handler is supposed to return a Subscription object which must have a \"unsubscribe\" method.");
            }
        }
        return;
    } else if (name[0] === 'o' && name[1] === 'n') {
        if (typeof value === 'function') {
            var useCapture = name !== (name = name.replace(/Capture$/, ''));
            name = name.toLowerCase().substring(2);
            if (value) {
                if (!attrs[name]) el.addEventListener(name, eventProxy, useCapture);
            } else {
                el.removeEventListener(name, eventProxy, useCapture);
            }
            (el._listeners || (el._listeners = {}))[name] = value;
        } else {
            applyAttributeTyped(el, name, value);
        }
    } else if (name !== 'list' && name !== 'type' && !(el.ownerSVGElement || el.localName === 'svg') && name in el) {
        setProperty(el, name, value == null ? '' : value);
        if (value == null || value === false) {
            el.removeAttribute(name);
        }
    } else {
        applyAttributeTyped(el, name, value);
    }
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
var ref = function ref(id) {
    return function (element) {
        var comp = getCurrentComponent();
        if (process.env.NODE_ENV !== 'production') {
            if (!comp || !comp.refs) {
                throw new Error('ref() must be used within a component');
            }
        }
        comp.refs[id] = element;
        return {
            unsubscribe: function unsubscribe() {
                if (!comp) {
                    return;
                }
                comp = null;
            }
        };
    };
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
                throw new Error("Can't call filters on a raw string.");
            }
        }
        return raw$1(value.value);
    }
    var node = text();
    var data = getData(node);
    if (data.text !== value) {
        data.text /** @type {string} */ = value;
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

exports.options = options;
exports.flush = flush;
exports.clearQueue = clear;
exports.getParent = getParent;
exports.link = link;
exports.patch = patchInner;
exports.patchInner = patchInner;
exports.patchOuter = patchOuter;
exports.currentElement = currentElement;
exports.skip = skip;
exports.skipNode = skipNode;
exports.mount = mount;
exports.component = component;
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
exports.getNodeData = getData;
exports.unmountComponent = unmountComponent;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, '__esModule', { value: true });

var melodyIdom = __webpack_require__(1);

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
            if (melodyIdom.options.afterUpdate) {
                melodyIdom.options.afterUpdate(this);
            }
        } else {
            this.isMounted = true;
            this.componentDidMount();
            if (melodyIdom.options.afterMount) {
                melodyIdom.options.afterMount(this);
            }
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

function createComponent(templateFnOrObj, reducer) {
    var template = templateFnOrObj.render ? function (props) {
        return templateFnOrObj.render(props);
    } : templateFnOrObj;
    var finalReducer = reducer || mapPropsToState;
    var ChildComponent = createComponentConstructor(Component, finalReducer);
    ChildComponent.prototype.displayName = template.name || template.displayName || 'Unknown';
    ChildComponent.prototype.render = function () {
        this.oldState = this.state;
        this.state = this.getState();
        return template(this.state);
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

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
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault(ex) {
    return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

var _flowRight = _interopDefault(__webpack_require__(100));
var _defaults = _interopDefault(__webpack_require__(98));
var melodyComponent = __webpack_require__(2);

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
                    _componentDidInitialize.call(this);
                    this[scope] = createScope(this);
                    if (def.componentDidInitialize) {
                        def.componentDidInitialize.call(this[scope]);
                    }
                },
                componentWillMount: function componentWillMount() {
                    _componentWillMount.call(this);
                    if (def.componentWillMount) {
                        def.componentWillMount.call(this[scope]);
                    }
                },
                componentDidMount: function componentDidMount() {
                    _componentDidMount.call(this);
                    if (def.componentDidMount) {
                        def.componentDidMount.call(this[scope]);
                    }
                },
                componentWillUpdate: function componentWillUpdate(newProps, newState) {
                    _componentWillUpdate.call(this, newProps, newState);
                    if (def.componentWillUpdate) {
                        def.componentWillUpdate.call(this[scope], newProps, newState);
                    }
                },
                componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
                    _componentDidUpdate.call(this, prevProps, prevState);
                    if (def.componentDidUpdate) {
                        def.componentDidUpdate.call(this[scope], prevProps, prevState);
                    }
                },
                componentWillUnmount: function componentWillUnmount() {
                    _componentWillUnmount.call(this);
                    if (def.componentWillUnmount) {
                        def.componentWillUnmount.call(this[scope]);
                    }
                    this[scope] = undefined;
                }
            };
        });
    };
}

var withRefs$1 = function withRefs(mapper) {
    return function (Component) {
        return Component(function (_ref) {
            var _componentDidInitialize = _ref.componentDidInitialize,
                _apply = _ref.apply;

            var refField = Symbol();
            return {
                componentDidInitialize: function componentDidInitialize() {
                    this[refField] = mapper(this);
                    _componentDidInitialize.call(this);
                },
                apply: function apply(props) {
                    _apply.call(this, Object.assign({}, props, this[refField]));
                }
            };
        });
    };
};

function bindEvents$1(map) {
    return withRefs$1(function (component) {
        return Object.keys(map).reduce(function (acc, refName) {
            var eventMap = map[refName];
            acc[refName] = function (el) {
                var unsubscribers = Object.keys(eventMap).map(function (eventName) {
                    var _handler = eventMap[eventName];
                    var handler = function handler(event) {
                        return _handler(event, component);
                    };
                    el.addEventListener(eventName, handler, false);
                    return function () {
                        return el.removeEventListener(eventName, handler, false);
                    };
                });
                return {
                    unsubscribe: function unsubscribe() {
                        unsubscribers.forEach(function (f) {
                            return f();
                        });
                        unsubscribers.length = 0;
                    }
                };
            };
            return acc;
        }, {});
    });
}

/**
 * Accepts a function that maps owner props to a new collection of props that are passed to the base component.
 */
var mapProps$1 = function mapProps(mapper) {
    return function (Component) {
        return Component(function (_ref) {
            var _apply = _ref.apply;
            return {
                apply: function apply(props) {
                    if (props !== this.props) {
                        _apply.call(this, mapper(props));
                    }
                }
            };
        });
    };
};

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

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * Copyright (c) 2015-2016 Andrew Clark
 * Copyright (c) 2017 trivago GmbH

 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var mapValues = function mapValues(obj, func) {
    var result = {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = func(obj[key], key);
        }
    }
    return result;
};

var CACHED_HANDLERS = 'MELODY/WITH_HANDLERS/CACHED_HANDLERS';
var HANDLERS = 'MELODY/WITH_HANDLERS/HANDLERS';

var withHandlers$1 = function withHandlers(handlers) {
    return function (Component) {
        return function (_Component) {
            _inherits(WithHandlersComponent, _Component);

            function WithHandlersComponent() {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                _classCallCheck(this, WithHandlersComponent);

                var _this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args)));

                _this[CACHED_HANDLERS] = {};
                _this[HANDLERS] = mapValues(handlers, function (createHandler, handlerName) {
                    return function () {
                        var cachedHandler = _this[CACHED_HANDLERS][handlerName];
                        if (cachedHandler) {
                            return cachedHandler.apply(undefined, arguments);
                        }

                        var handler = createHandler(_this.props);
                        _this[CACHED_HANDLERS][handlerName] = handler;

                        if (process.env.NODE_ENV !== 'production' && typeof handler !== 'function') {
                            // eslint-disable-next-line no-console
                            console.error('withHandlers(): Expected a map of higher-order functions. ' + 'Refer to the docs for more info.');
                        }

                        return handler.apply(undefined, arguments);
                    };
                });
                return _this;
            }

            WithHandlersComponent.prototype.apply = function apply(props) {
                if (props === this.props) {
                    return;
                }

                this[CACHED_HANDLERS] = {};

                _Component.prototype.apply.call(this, _extends({}, props, this[HANDLERS]));
            };

            return WithHandlersComponent;
        }(Component);
    };
};

var _extends$1 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

function _classCallCheck$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn$1(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits$1(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var UNSUB = 'MELODY/WITH_STORE/UNSUB';
var IS_FIRST_APPLY = 'MELODY/WITH_STORE/FIRST_APPLY';
var STORE = 'MELODY/WITH_STORE/STORE';

var withStore$1 = function withStore(storeFactory) {
    var stateName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'state';
    var dispatchName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'dispatch';
    return function (Component) {
        return function (_Component) {
            _inherits$1(WithStoreComponent, _Component);

            function WithStoreComponent() {
                _classCallCheck$1(this, WithStoreComponent);

                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                var _this = _possibleConstructorReturn$1(this, _Component.call.apply(_Component, [this].concat(args)));

                _this[STORE] = storeFactory();
                _this[IS_FIRST_APPLY] = true;
                return _this;
            }

            WithStoreComponent.prototype.apply = function apply(props) {
                var _this2 = this,
                    _extends3;

                if (props === this.props) {
                    return;
                }

                this[STORE].dispatch({
                    type: melodyComponent.RECEIVE_PROPS,
                    payload: props
                });

                if (this[IS_FIRST_APPLY]) {
                    this[UNSUB] = this[STORE].subscribe(function () {
                        var _extends2;

                        _Component.prototype.apply.call(_this2, _extends$1({}, _this2.props, (_extends2 = {}, _extends2[stateName] = _this2[STORE].getState(), _extends2[dispatchName] = _this2[STORE].dispatch, _extends2)));
                    });
                    this[IS_FIRST_APPLY] = false;
                }

                _Component.prototype.apply.call(this, _extends$1({}, props, (_extends3 = {}, _extends3[stateName] = this[STORE].getState(), _extends3[dispatchName] = this[STORE].dispatch, _extends3)));
            };

            WithStoreComponent.prototype.componentWillUnmount = function componentWillUnmount() {
                this[UNSUB]();
            };

            return WithStoreComponent;
        }(Component);
    };
};

// Utility
var compose = _flowRight;

var lifecycle = lifecycle$1;
var bindEvents = bindEvents$1;
var mapProps = mapProps$1;
var defaultProps = defaultProps$1;
var withProps = withProps$1;
var withHandlers = withHandlers$1;
var withStore = withStore$1;
var withRefs = withRefs$1;

exports.compose = compose;
exports.lifecycle = lifecycle;
exports.bindEvents = bindEvents;
exports.mapProps = mapProps;
exports.defaultProps = defaultProps;
exports.withProps = withProps;
exports.withHandlers = withHandlers;
exports.withStore = withStore;
exports.withRefs = withRefs;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(23);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

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
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(11),
    getRawTag = __webpack_require__(80),
    objectToString = __webpack_require__(90);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

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
/***/ (function(module, exports) {

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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(20),
    baseLodash = __webpack_require__(12);

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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(20),
    baseLodash = __webpack_require__(12);

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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(5);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

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
/* 13 */
/***/ (function(module, exports) {

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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/*
Syntax highlighting with language autodetection.
https://highlightjs.org/
*/

(function (factory) {

  // Find the global object for export to both the browser and web workers.
  var globalObject = typeof window === 'object' && window || typeof self === 'object' && self;

  // Setup highlight.js for different environments. First is Node.js or
  // CommonJS.
  if (true) {
    factory(exports);
  } else if (globalObject) {
    // Export hljs globally even when using AMD for cases when this script
    // is loaded with others that may still expect a global hljs.
    globalObject.hljs = factory({});

    // Finally register the global hljs with AMD.
    if (typeof define === 'function' && define.amd) {
      define([], function () {
        return globalObject.hljs;
      });
    }
  }
})(function (hljs) {
  // Convenience variables for build-in objects
  var ArrayProto = [],
      objectKeys = Object.keys;

  // Global internal variables used within the highlight.js library.
  var languages = {},
      aliases = {};

  // Regular expressions used throughout the highlight.js library.
  var noHighlightRe = /^(no-?highlight|plain|text)$/i,
      languagePrefixRe = /\blang(?:uage)?-([\w-]+)\b/i,
      fixMarkupRe = /((^(<[^>]+>|\t|)+|(?:\n)))/gm;

  var spanEndTag = '</span>';

  // Global options used when within external APIs. This is modified when
  // calling the `hljs.configure` function.
  var options = {
    classPrefix: 'hljs-',
    tabReplace: null,
    useBR: false,
    languages: undefined
  };

  /* Utility functions */

  function escape(value) {
    return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function tag(node) {
    return node.nodeName.toLowerCase();
  }

  function testRe(re, lexeme) {
    var match = re && re.exec(lexeme);
    return match && match.index === 0;
  }

  function isNotHighlighted(language) {
    return noHighlightRe.test(language);
  }

  function blockLanguage(block) {
    var i, match, length, _class;
    var classes = block.className + ' ';

    classes += block.parentNode ? block.parentNode.className : '';

    // language-* takes precedence over non-prefixed class names.
    match = languagePrefixRe.exec(classes);
    if (match) {
      return getLanguage(match[1]) ? match[1] : 'no-highlight';
    }

    classes = classes.split(/\s+/);

    for (i = 0, length = classes.length; i < length; i++) {
      _class = classes[i];

      if (isNotHighlighted(_class) || getLanguage(_class)) {
        return _class;
      }
    }
  }

  function inherit(parent) {
    // inherit(parent, override_obj, override_obj, ...)
    var key;
    var result = {};
    var objects = Array.prototype.slice.call(arguments, 1);

    for (key in parent) result[key] = parent[key];
    objects.forEach(function (obj) {
      for (key in obj) result[key] = obj[key];
    });
    return result;
  }

  /* Stream merging */

  function nodeStream(node) {
    var result = [];
    (function _nodeStream(node, offset) {
      for (var child = node.firstChild; child; child = child.nextSibling) {
        if (child.nodeType === 3) offset += child.nodeValue.length;else if (child.nodeType === 1) {
          result.push({
            event: 'start',
            offset: offset,
            node: child
          });
          offset = _nodeStream(child, offset);
          // Prevent void elements from having an end tag that would actually
          // double them in the output. There are more void elements in HTML
          // but we list only those realistically expected in code display.
          if (!tag(child).match(/br|hr|img|input/)) {
            result.push({
              event: 'stop',
              offset: offset,
              node: child
            });
          }
        }
      }
      return offset;
    })(node, 0);
    return result;
  }

  function mergeStreams(original, highlighted, value) {
    var processed = 0;
    var result = '';
    var nodeStack = [];

    function selectStream() {
      if (!original.length || !highlighted.length) {
        return original.length ? original : highlighted;
      }
      if (original[0].offset !== highlighted[0].offset) {
        return original[0].offset < highlighted[0].offset ? original : highlighted;
      }

      /*
      To avoid starting the stream just before it should stop the order is
      ensured that original always starts first and closes last:
       if (event1 == 'start' && event2 == 'start')
        return original;
      if (event1 == 'start' && event2 == 'stop')
        return highlighted;
      if (event1 == 'stop' && event2 == 'start')
        return original;
      if (event1 == 'stop' && event2 == 'stop')
        return highlighted;
       ... which is collapsed to:
      */
      return highlighted[0].event === 'start' ? original : highlighted;
    }

    function open(node) {
      function attr_str(a) {
        return ' ' + a.nodeName + '="' + escape(a.value).replace('"', '&quot;') + '"';
      }
      result += '<' + tag(node) + ArrayProto.map.call(node.attributes, attr_str).join('') + '>';
    }

    function close(node) {
      result += '</' + tag(node) + '>';
    }

    function render(event) {
      (event.event === 'start' ? open : close)(event.node);
    }

    while (original.length || highlighted.length) {
      var stream = selectStream();
      result += escape(value.substring(processed, stream[0].offset));
      processed = stream[0].offset;
      if (stream === original) {
        /*
        On any opening or closing tag of the original markup we first close
        the entire highlighted node stack, then render the original tag along
        with all the following original tags at the same offset and then
        reopen all the tags on the highlighted stack.
        */
        nodeStack.reverse().forEach(close);
        do {
          render(stream.splice(0, 1)[0]);
          stream = selectStream();
        } while (stream === original && stream.length && stream[0].offset === processed);
        nodeStack.reverse().forEach(open);
      } else {
        if (stream[0].event === 'start') {
          nodeStack.push(stream[0].node);
        } else {
          nodeStack.pop();
        }
        render(stream.splice(0, 1)[0]);
      }
    }
    return result + escape(value.substr(processed));
  }

  /* Initialization */

  function expand_mode(mode) {
    if (mode.variants && !mode.cached_variants) {
      mode.cached_variants = mode.variants.map(function (variant) {
        return inherit(mode, { variants: null }, variant);
      });
    }
    return mode.cached_variants || mode.endsWithParent && [inherit(mode)] || [mode];
  }

  function compileLanguage(language) {

    function reStr(re) {
      return re && re.source || re;
    }

    function langRe(value, global) {
      return new RegExp(reStr(value), 'm' + (language.case_insensitive ? 'i' : '') + (global ? 'g' : ''));
    }

    function compileMode(mode, parent) {
      if (mode.compiled) return;
      mode.compiled = true;

      mode.keywords = mode.keywords || mode.beginKeywords;
      if (mode.keywords) {
        var compiled_keywords = {};

        var flatten = function (className, str) {
          if (language.case_insensitive) {
            str = str.toLowerCase();
          }
          str.split(' ').forEach(function (kw) {
            var pair = kw.split('|');
            compiled_keywords[pair[0]] = [className, pair[1] ? Number(pair[1]) : 1];
          });
        };

        if (typeof mode.keywords === 'string') {
          // string
          flatten('keyword', mode.keywords);
        } else {
          objectKeys(mode.keywords).forEach(function (className) {
            flatten(className, mode.keywords[className]);
          });
        }
        mode.keywords = compiled_keywords;
      }
      mode.lexemesRe = langRe(mode.lexemes || /\w+/, true);

      if (parent) {
        if (mode.beginKeywords) {
          mode.begin = '\\b(' + mode.beginKeywords.split(' ').join('|') + ')\\b';
        }
        if (!mode.begin) mode.begin = /\B|\b/;
        mode.beginRe = langRe(mode.begin);
        if (!mode.end && !mode.endsWithParent) mode.end = /\B|\b/;
        if (mode.end) mode.endRe = langRe(mode.end);
        mode.terminator_end = reStr(mode.end) || '';
        if (mode.endsWithParent && parent.terminator_end) mode.terminator_end += (mode.end ? '|' : '') + parent.terminator_end;
      }
      if (mode.illegal) mode.illegalRe = langRe(mode.illegal);
      if (mode.relevance == null) mode.relevance = 1;
      if (!mode.contains) {
        mode.contains = [];
      }
      mode.contains = Array.prototype.concat.apply([], mode.contains.map(function (c) {
        return expand_mode(c === 'self' ? mode : c);
      }));
      mode.contains.forEach(function (c) {
        compileMode(c, mode);
      });

      if (mode.starts) {
        compileMode(mode.starts, parent);
      }

      var terminators = mode.contains.map(function (c) {
        return c.beginKeywords ? '\\.?(' + c.begin + ')\\.?' : c.begin;
      }).concat([mode.terminator_end, mode.illegal]).map(reStr).filter(Boolean);
      mode.terminators = terminators.length ? langRe(terminators.join('|'), true) : { exec: function () /*s*/{
          return null;
        } };
    }

    compileMode(language);
  }

  /*
  Core highlighting function. Accepts a language name, or an alias, and a
  string with the code to highlight. Returns an object with the following
  properties:
   - relevance (int)
  - value (an HTML string with highlighting markup)
   */
  function highlight(name, value, ignore_illegals, continuation) {

    function subMode(lexeme, mode) {
      var i, length;

      for (i = 0, length = mode.contains.length; i < length; i++) {
        if (testRe(mode.contains[i].beginRe, lexeme)) {
          return mode.contains[i];
        }
      }
    }

    function endOfMode(mode, lexeme) {
      if (testRe(mode.endRe, lexeme)) {
        while (mode.endsParent && mode.parent) {
          mode = mode.parent;
        }
        return mode;
      }
      if (mode.endsWithParent) {
        return endOfMode(mode.parent, lexeme);
      }
    }

    function isIllegal(lexeme, mode) {
      return !ignore_illegals && testRe(mode.illegalRe, lexeme);
    }

    function keywordMatch(mode, match) {
      var match_str = language.case_insensitive ? match[0].toLowerCase() : match[0];
      return mode.keywords.hasOwnProperty(match_str) && mode.keywords[match_str];
    }

    function buildSpan(classname, insideSpan, leaveOpen, noPrefix) {
      var classPrefix = noPrefix ? '' : options.classPrefix,
          openSpan = '<span class="' + classPrefix,
          closeSpan = leaveOpen ? '' : spanEndTag;

      openSpan += classname + '">';

      return openSpan + insideSpan + closeSpan;
    }

    function processKeywords() {
      var keyword_match, last_index, match, result;

      if (!top.keywords) return escape(mode_buffer);

      result = '';
      last_index = 0;
      top.lexemesRe.lastIndex = 0;
      match = top.lexemesRe.exec(mode_buffer);

      while (match) {
        result += escape(mode_buffer.substring(last_index, match.index));
        keyword_match = keywordMatch(top, match);
        if (keyword_match) {
          relevance += keyword_match[1];
          result += buildSpan(keyword_match[0], escape(match[0]));
        } else {
          result += escape(match[0]);
        }
        last_index = top.lexemesRe.lastIndex;
        match = top.lexemesRe.exec(mode_buffer);
      }
      return result + escape(mode_buffer.substr(last_index));
    }

    function processSubLanguage() {
      var explicit = typeof top.subLanguage === 'string';
      if (explicit && !languages[top.subLanguage]) {
        return escape(mode_buffer);
      }

      var result = explicit ? highlight(top.subLanguage, mode_buffer, true, continuations[top.subLanguage]) : highlightAuto(mode_buffer, top.subLanguage.length ? top.subLanguage : undefined);

      // Counting embedded language score towards the host language may be disabled
      // with zeroing the containing mode relevance. Usecase in point is Markdown that
      // allows XML everywhere and makes every XML snippet to have a much larger Markdown
      // score.
      if (top.relevance > 0) {
        relevance += result.relevance;
      }
      if (explicit) {
        continuations[top.subLanguage] = result.top;
      }
      return buildSpan(result.language, result.value, false, true);
    }

    function processBuffer() {
      result += top.subLanguage != null ? processSubLanguage() : processKeywords();
      mode_buffer = '';
    }

    function startNewMode(mode) {
      result += mode.className ? buildSpan(mode.className, '', true) : '';
      top = Object.create(mode, { parent: { value: top } });
    }

    function processLexeme(buffer, lexeme) {

      mode_buffer += buffer;

      if (lexeme == null) {
        processBuffer();
        return 0;
      }

      var new_mode = subMode(lexeme, top);
      if (new_mode) {
        if (new_mode.skip) {
          mode_buffer += lexeme;
        } else {
          if (new_mode.excludeBegin) {
            mode_buffer += lexeme;
          }
          processBuffer();
          if (!new_mode.returnBegin && !new_mode.excludeBegin) {
            mode_buffer = lexeme;
          }
        }
        startNewMode(new_mode, lexeme);
        return new_mode.returnBegin ? 0 : lexeme.length;
      }

      var end_mode = endOfMode(top, lexeme);
      if (end_mode) {
        var origin = top;
        if (origin.skip) {
          mode_buffer += lexeme;
        } else {
          if (!(origin.returnEnd || origin.excludeEnd)) {
            mode_buffer += lexeme;
          }
          processBuffer();
          if (origin.excludeEnd) {
            mode_buffer = lexeme;
          }
        }
        do {
          if (top.className) {
            result += spanEndTag;
          }
          if (!top.skip) {
            relevance += top.relevance;
          }
          top = top.parent;
        } while (top !== end_mode.parent);
        if (end_mode.starts) {
          startNewMode(end_mode.starts, '');
        }
        return origin.returnEnd ? 0 : lexeme.length;
      }

      if (isIllegal(lexeme, top)) throw new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.className || '<unnamed>') + '"');

      /*
      Parser should not reach this point as all types of lexemes should be caught
      earlier, but if it does due to some bug make sure it advances at least one
      character forward to prevent infinite looping.
      */
      mode_buffer += lexeme;
      return lexeme.length || 1;
    }

    var language = getLanguage(name);
    if (!language) {
      throw new Error('Unknown language: "' + name + '"');
    }

    compileLanguage(language);
    var top = continuation || language;
    var continuations = {}; // keep continuations for sub-languages
    var result = '',
        current;
    for (current = top; current !== language; current = current.parent) {
      if (current.className) {
        result = buildSpan(current.className, '', true) + result;
      }
    }
    var mode_buffer = '';
    var relevance = 0;
    try {
      var match,
          count,
          index = 0;
      while (true) {
        top.terminators.lastIndex = index;
        match = top.terminators.exec(value);
        if (!match) break;
        count = processLexeme(value.substring(index, match.index), match[0]);
        index = match.index + count;
      }
      processLexeme(value.substr(index));
      for (current = top; current.parent; current = current.parent) {
        // close dangling modes
        if (current.className) {
          result += spanEndTag;
        }
      }
      return {
        relevance: relevance,
        value: result,
        language: name,
        top: top
      };
    } catch (e) {
      if (e.message && e.message.indexOf('Illegal') !== -1) {
        return {
          relevance: 0,
          value: escape(value)
        };
      } else {
        throw e;
      }
    }
  }

  /*
  Highlighting with language detection. Accepts a string with the code to
  highlight. Returns an object with the following properties:
   - language (detected language)
  - relevance (int)
  - value (an HTML string with highlighting markup)
  - second_best (object with the same structure for second-best heuristically
    detected language, may be absent)
   */
  function highlightAuto(text, languageSubset) {
    languageSubset = languageSubset || options.languages || objectKeys(languages);
    var result = {
      relevance: 0,
      value: escape(text)
    };
    var second_best = result;
    languageSubset.filter(getLanguage).forEach(function (name) {
      var current = highlight(name, text, false);
      current.language = name;
      if (current.relevance > second_best.relevance) {
        second_best = current;
      }
      if (current.relevance > result.relevance) {
        second_best = result;
        result = current;
      }
    });
    if (second_best.language) {
      result.second_best = second_best;
    }
    return result;
  }

  /*
  Post-processing of the highlighted markup:
   - replace TABs with something more useful
  - replace real line-breaks with '<br>' for non-pre containers
   */
  function fixMarkup(value) {
    return !(options.tabReplace || options.useBR) ? value : value.replace(fixMarkupRe, function (match, p1) {
      if (options.useBR && match === '\n') {
        return '<br>';
      } else if (options.tabReplace) {
        return p1.replace(/\t/g, options.tabReplace);
      }
      return '';
    });
  }

  function buildClassName(prevClassName, currentLang, resultLang) {
    var language = currentLang ? aliases[currentLang] : resultLang,
        result = [prevClassName.trim()];

    if (!prevClassName.match(/\bhljs\b/)) {
      result.push('hljs');
    }

    if (prevClassName.indexOf(language) === -1) {
      result.push(language);
    }

    return result.join(' ').trim();
  }

  /*
  Applies highlighting to a DOM node containing code. Accepts a DOM node and
  two optional parameters for fixMarkup.
  */
  function highlightBlock(block) {
    var node, originalStream, result, resultNode, text;
    var language = blockLanguage(block);

    if (isNotHighlighted(language)) return;

    if (options.useBR) {
      node = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
      node.innerHTML = block.innerHTML.replace(/\n/g, '').replace(/<br[ \/]*>/g, '\n');
    } else {
      node = block;
    }
    text = node.textContent;
    result = language ? highlight(language, text, true) : highlightAuto(text);

    originalStream = nodeStream(node);
    if (originalStream.length) {
      resultNode = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
      resultNode.innerHTML = result.value;
      result.value = mergeStreams(originalStream, nodeStream(resultNode), text);
    }
    result.value = fixMarkup(result.value);

    block.innerHTML = result.value;
    block.className = buildClassName(block.className, language, result.language);
    block.result = {
      language: result.language,
      re: result.relevance
    };
    if (result.second_best) {
      block.second_best = {
        language: result.second_best.language,
        re: result.second_best.relevance
      };
    }
  }

  /*
  Updates highlight.js global options with values passed in the form of an object.
  */
  function configure(user_options) {
    options = inherit(options, user_options);
  }

  /*
  Applies highlighting to all <pre><code>..</code></pre> blocks on a page.
  */
  function initHighlighting() {
    if (initHighlighting.called) return;
    initHighlighting.called = true;

    var blocks = document.querySelectorAll('pre code');
    ArrayProto.forEach.call(blocks, highlightBlock);
  }

  /*
  Attaches highlighting to the page load event.
  */
  function initHighlightingOnLoad() {
    addEventListener('DOMContentLoaded', initHighlighting, false);
    addEventListener('load', initHighlighting, false);
  }

  function registerLanguage(name, language) {
    var lang = languages[name] = language(hljs);
    if (lang.aliases) {
      lang.aliases.forEach(function (alias) {
        aliases[alias] = name;
      });
    }
  }

  function listLanguages() {
    return objectKeys(languages);
  }

  function getLanguage(name) {
    name = (name || '').toLowerCase();
    return languages[name] || languages[aliases[name]];
  }

  /* Interface definition */

  hljs.highlight = highlight;
  hljs.highlightAuto = highlightAuto;
  hljs.fixMarkup = fixMarkup;
  hljs.highlightBlock = highlightBlock;
  hljs.configure = configure;
  hljs.initHighlighting = initHighlighting;
  hljs.initHighlightingOnLoad = initHighlightingOnLoad;
  hljs.registerLanguage = registerLanguage;
  hljs.listLanguages = listLanguages;
  hljs.getLanguage = getLanguage;
  hljs.inherit = inherit;

  // Common regexps
  hljs.IDENT_RE = '[a-zA-Z]\\w*';
  hljs.UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*';
  hljs.NUMBER_RE = '\\b\\d+(\\.\\d+)?';
  hljs.C_NUMBER_RE = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'; // 0x..., 0..., decimal, float
  hljs.BINARY_NUMBER_RE = '\\b(0b[01]+)'; // 0b...
  hljs.RE_STARTERS_RE = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~';

  // Common modes
  hljs.BACKSLASH_ESCAPE = {
    begin: '\\\\[\\s\\S]', relevance: 0
  };
  hljs.APOS_STRING_MODE = {
    className: 'string',
    begin: '\'', end: '\'',
    illegal: '\\n',
    contains: [hljs.BACKSLASH_ESCAPE]
  };
  hljs.QUOTE_STRING_MODE = {
    className: 'string',
    begin: '"', end: '"',
    illegal: '\\n',
    contains: [hljs.BACKSLASH_ESCAPE]
  };
  hljs.PHRASAL_WORDS_MODE = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  };
  hljs.COMMENT = function (begin, end, inherits) {
    var mode = hljs.inherit({
      className: 'comment',
      begin: begin, end: end,
      contains: []
    }, inherits || {});
    mode.contains.push(hljs.PHRASAL_WORDS_MODE);
    mode.contains.push({
      className: 'doctag',
      begin: '(?:TODO|FIXME|NOTE|BUG|XXX):',
      relevance: 0
    });
    return mode;
  };
  hljs.C_LINE_COMMENT_MODE = hljs.COMMENT('//', '$');
  hljs.C_BLOCK_COMMENT_MODE = hljs.COMMENT('/\\*', '\\*/');
  hljs.HASH_COMMENT_MODE = hljs.COMMENT('#', '$');
  hljs.NUMBER_MODE = {
    className: 'number',
    begin: hljs.NUMBER_RE,
    relevance: 0
  };
  hljs.C_NUMBER_MODE = {
    className: 'number',
    begin: hljs.C_NUMBER_RE,
    relevance: 0
  };
  hljs.BINARY_NUMBER_MODE = {
    className: 'number',
    begin: hljs.BINARY_NUMBER_RE,
    relevance: 0
  };
  hljs.CSS_NUMBER_MODE = {
    className: 'number',
    begin: hljs.NUMBER_RE + '(' + '%|em|ex|ch|rem' + '|vw|vh|vmin|vmax' + '|cm|mm|in|pt|pc|px' + '|deg|grad|rad|turn' + '|s|ms' + '|Hz|kHz' + '|dpi|dpcm|dppx' + ')?',
    relevance: 0
  };
  hljs.REGEXP_MODE = {
    className: 'regexp',
    begin: /\//, end: /\/[gimuy]*/,
    illegal: /\n/,
    contains: [hljs.BACKSLASH_ESCAPE, {
      begin: /\[/, end: /\]/,
      relevance: 0,
      contains: [hljs.BACKSLASH_ESCAPE]
    }]
  };
  hljs.TITLE_MODE = {
    className: 'title',
    begin: hljs.IDENT_RE,
    relevance: 0
  };
  hljs.UNDERSCORE_TITLE_MODE = {
    className: 'title',
    begin: hljs.UNDERSCORE_IDENT_RE,
    relevance: 0
  };
  hljs.METHOD_GUARD = {
    // excludes method names from keyword processing
    begin: '\\.\\s*' + hljs.UNDERSCORE_IDENT_RE,
    relevance: 0
  };

  return hljs;
});

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function (hljs) {
  var IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
  var KEYWORDS = {
    keyword: 'in of if for while finally var new function do return void else break catch ' + 'instanceof with throw case default try this switch continue typeof delete ' + 'let yield const export super debugger as async await static ' +
    // ECMAScript 6 modules import
    'import from as',

    literal: 'true false null undefined NaN Infinity',
    built_in: 'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent ' + 'encodeURI encodeURIComponent escape unescape Object Function Boolean Error ' + 'EvalError InternalError RangeError ReferenceError StopIteration SyntaxError ' + 'TypeError URIError Number Math Date String RegExp Array Float32Array ' + 'Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array ' + 'Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require ' + 'module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect ' + 'Promise'
  };
  var EXPRESSIONS;
  var NUMBER = {
    className: 'number',
    variants: [{ begin: '\\b(0[bB][01]+)' }, { begin: '\\b(0[oO][0-7]+)' }, { begin: hljs.C_NUMBER_RE }],
    relevance: 0
  };
  var SUBST = {
    className: 'subst',
    begin: '\\$\\{', end: '\\}',
    keywords: KEYWORDS,
    contains: [] // defined later
  };
  var TEMPLATE_STRING = {
    className: 'string',
    begin: '`', end: '`',
    contains: [hljs.BACKSLASH_ESCAPE, SUBST]
  };
  SUBST.contains = [hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, TEMPLATE_STRING, NUMBER, hljs.REGEXP_MODE];
  var PARAMS_CONTAINS = SUBST.contains.concat([hljs.C_BLOCK_COMMENT_MODE, hljs.C_LINE_COMMENT_MODE]);

  return {
    aliases: ['js', 'jsx'],
    keywords: KEYWORDS,
    contains: [{
      className: 'meta',
      relevance: 10,
      begin: /^\s*['"]use (strict|asm)['"]/
    }, {
      className: 'meta',
      begin: /^#!/, end: /$/
    }, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, TEMPLATE_STRING, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, NUMBER, { // object attr container
      begin: /[{,]\s*/, relevance: 0,
      contains: [{
        begin: IDENT_RE + '\\s*:', returnBegin: true,
        relevance: 0,
        contains: [{ className: 'attr', begin: IDENT_RE, relevance: 0 }]
      }]
    }, { // "value" container
      begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
      keywords: 'return throw case',
      contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, hljs.REGEXP_MODE, {
        className: 'function',
        begin: '(\\(.*?\\)|' + IDENT_RE + ')\\s*=>', returnBegin: true,
        end: '\\s*=>',
        contains: [{
          className: 'params',
          variants: [{
            begin: IDENT_RE
          }, {
            begin: /\(\s*\)/
          }, {
            begin: /\(/, end: /\)/,
            excludeBegin: true, excludeEnd: true,
            keywords: KEYWORDS,
            contains: PARAMS_CONTAINS
          }]
        }]
      }, { // E4X / JSX
        begin: /</, end: /(\/\w+|\w+\/)>/,
        subLanguage: 'xml',
        contains: [{ begin: /<\w+\s*\/>/, skip: true }, {
          begin: /<\w+/, end: /(\/\w+|\w+\/)>/, skip: true,
          contains: [{ begin: /<\w+\s*\/>/, skip: true }, 'self']
        }]
      }],
      relevance: 0
    }, {
      className: 'function',
      beginKeywords: 'function', end: /\{/, excludeEnd: true,
      contains: [hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE }), {
        className: 'params',
        begin: /\(/, end: /\)/,
        excludeBegin: true,
        excludeEnd: true,
        contains: PARAMS_CONTAINS
      }],
      illegal: /\[|%/
    }, {
      begin: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
    }, hljs.METHOD_GUARD, { // ES6 class
      className: 'class',
      beginKeywords: 'class', end: /[{;=]/, excludeEnd: true,
      illegal: /[:"\[\]]/,
      contains: [{ beginKeywords: 'extends' }, hljs.UNDERSCORE_TITLE_MODE]
    }, {
      beginKeywords: 'constructor', end: /\{/, excludeEnd: true
    }],
    illegal: /#(?!!)/
  };
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = function (hljs) {
  var LITERALS = { literal: 'true false null' };
  var TYPES = [hljs.QUOTE_STRING_MODE, hljs.C_NUMBER_MODE];
  var VALUE_CONTAINER = {
    end: ',', endsWithParent: true, excludeEnd: true,
    contains: TYPES,
    keywords: LITERALS
  };
  var OBJECT = {
    begin: '{', end: '}',
    contains: [{
      className: 'attr',
      begin: /"/, end: /"/,
      contains: [hljs.BACKSLASH_ESCAPE],
      illegal: '\\n'
    }, hljs.inherit(VALUE_CONTAINER, { begin: /:/ })],
    illegal: '\\S'
  };
  var ARRAY = {
    begin: '\\[', end: '\\]',
    contains: [hljs.inherit(VALUE_CONTAINER)], // inherit is a workaround for a bug that makes shared modes with endsWithParent compile only the ending of one of the parents
    illegal: '\\S'
  };
  TYPES.splice(TYPES.length, 0, OBJECT, ARRAY);
  return {
    contains: TYPES,
    keywords: LITERALS,
    illegal: '\\S'
  };
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function (hljs) {
  var XML_IDENT_RE = '[A-Za-z0-9\\._:-]+';
  var TAG_INTERNALS = {
    endsWithParent: true,
    illegal: /</,
    relevance: 0,
    contains: [{
      className: 'attr',
      begin: XML_IDENT_RE,
      relevance: 0
    }, {
      begin: /=\s*/,
      relevance: 0,
      contains: [{
        className: 'string',
        endsParent: true,
        variants: [{ begin: /"/, end: /"/ }, { begin: /'/, end: /'/ }, { begin: /[^\s"'=<>`]+/ }]
      }]
    }]
  };
  return {
    aliases: ['html', 'xhtml', 'rss', 'atom', 'xjb', 'xsd', 'xsl', 'plist'],
    case_insensitive: true,
    contains: [{
      className: 'meta',
      begin: '<!DOCTYPE', end: '>',
      relevance: 10,
      contains: [{ begin: '\\[', end: '\\]' }]
    }, hljs.COMMENT('<!--', '-->', {
      relevance: 10
    }), {
      begin: '<\\!\\[CDATA\\[', end: '\\]\\]>',
      relevance: 10
    }, {
      begin: /<\?(php)?/, end: /\?>/,
      subLanguage: 'php',
      contains: [{ begin: '/\\*', end: '\\*/', skip: true }]
    }, {
      className: 'tag',
      /*
      The lookahead pattern (?=...) ensures that 'begin' only matches
      '<style' as a single word, followed by a whitespace or an
      ending braket. The '$' is needed for the lexeme to be recognized
      by hljs.subMode() that tests lexemes outside the stream.
      */
      begin: '<style(?=\\s|>|$)', end: '>',
      keywords: { name: 'style' },
      contains: [TAG_INTERNALS],
      starts: {
        end: '</style>', returnEnd: true,
        subLanguage: ['css', 'xml']
      }
    }, {
      className: 'tag',
      // See the comment in the <style tag about the lookahead pattern
      begin: '<script(?=\\s|>|$)', end: '>',
      keywords: { name: 'script' },
      contains: [TAG_INTERNALS],
      starts: {
        end: '\<\/script\>', returnEnd: true,
        subLanguage: ['actionscript', 'javascript', 'handlebars', 'xml']
      }
    }, {
      className: 'meta',
      variants: [{ begin: /<\?xml/, end: /\?>/, relevance: 10 }, { begin: /<\?\w+/, end: /\?>/ }]
    }, {
      className: 'tag',
      begin: '</?', end: '/?>',
      contains: [{
        className: 'name', begin: /[^\/><\s]+/, relevance: 0
      }, TAG_INTERNALS]
    }]
  };
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(22);

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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);

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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(30),
    overRest = __webpack_require__(28),
    setToString = __webpack_require__(29);

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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(26);

var defineProperty = function () {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();

module.exports = defineProperty;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(111)))

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var metaMap = __webpack_require__(87),
    noop = __webpack_require__(105);

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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var realNames = __webpack_require__(91);

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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(67),
    getValue = __webpack_require__(81);

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
/* 27 */
/***/ (function(module, exports) {

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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(18);

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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(70),
    shortOut = __webpack_require__(92);

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
/* 30 */
/***/ (function(module, exports) {

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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(66),
    isObjectLike = __webpack_require__(6);

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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(33),
    isLength = __webpack_require__(34);

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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(7),
    isObject = __webpack_require__(3);

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
/* 34 */
/***/ (function(module, exports) {

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
/* 35 */
/***/ (function(module, exports) {

module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function () {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function () {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_melody_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_melody_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_melody_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_melody_hoc__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_melody_hoc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_melody_hoc__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_twig__ = __webpack_require__(45);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





const initialState = {
    menuOpen: false,
    menuHidden: true
};

const stateReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case __WEBPACK_IMPORTED_MODULE_0_melody_component__["RECEIVE_PROPS"]:
            return _extends({}, state, payload);
        case 'OPEN_MENU':
            return _extends({}, state, {
                menuOpen: true, transitioning: true
            });
        case 'CLOSE_MENU':
            return _extends({}, state, {
                menuOpen: false, transitioning: true
            });
        case 'MENU_SHOWN':
            return _extends({}, state, {
                menuHidden: false, transitioning: false
            });
        case 'MENU_HIDDEN':
            return _extends({}, state, {
                menuHidden: true, transitioning: false
            });
        case 'FINISH_TRANSITION':
            return _extends({}, state, {
                transitioning: false
            });
        default:
            return state;
    }
};

const widthListener = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_melody_hoc__["lifecycle"])({
    componentDidMount() {
        const content = document.querySelector('.docs-content');
        this.resizeListener = () => {
            if (window.innerWidth >= 700 && content && content.classList.contains('hidden')) {
                content.classList.remove('docs-content--scaled', 'hidden');
            }
        };
        window.addEventListener('resize', this.resizeListener);
    },
    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeListener);
    }
});

const menuItemEvents = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_melody_hoc__["withRefs"])(({ refs }) => ({
    sideMenu: el => {
        refs.sideMenu = el;
        return {
            unsubscribe() {
                refs.sideMenu = null;
            }
        };
    }
}));

const events = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_melody_hoc__["bindEvents"])({
    homepageLink: {
        click(event, { getState }) {
            event.preventDefault();
            const { changeRoute } = getState();
            changeRoute('/');
        }
    },
    documentationLink: {
        click(event, { getState }) {
            event.preventDefault();
            const { changeRoute } = getState();
            changeRoute('/documentation');
        }
    },
    menuLinks: {
        click(event, { getState }) {
            event.preventDefault();
            const { href, childNodes } = event.target;
            const link = href || childNodes[0].href;
            if (link) {
                const { changeRoute } = getState();
                const params = link.split('/');
                changeRoute('/documentation', params.slice(params.length - 2));
            }
        }
    },
    toggleMenu: {
        click(event, { dispatch, getState, refs }) {
            event.preventDefault();
            const { menuOpen, transitioning } = getState();
            if (transitioning) {
                return;
            }
            const content = document.querySelector('.docs-content');
            const { sideMenu } = refs;
            if (menuOpen === true) {
                dispatch({ type: 'CLOSE_MENU' });
                content.classList.remove('hidden');
                setTimeout(_ => content.classList.remove('docs-content--scaled'));
                const hideMenu = () => {
                    dispatch({ type: 'MENU_HIDDEN' });
                    sideMenu.removeEventListener('transitionend', hideMenu);
                };
                sideMenu.addEventListener('transitionend', hideMenu);
            } else {
                dispatch({ type: 'MENU_SHOWN' });
                setTimeout(_ => {
                    dispatch({ type: 'OPEN_MENU' });
                    dispatch({ type: 'FINISH_TRANSITION' });
                });
                content.classList.add('docs-content--scaled');
                const hideContent = () => {
                    content.classList.add('hidden');
                    content.removeEventListener('transitionend', hideContent);
                };
                content.addEventListener('transitionend', hideContent);
            }
        }
    }
});

const enhance = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_melody_hoc__["compose"])(menuItemEvents, events, widthListener);

/* harmony default export */ __webpack_exports__["a"] = (enhance(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_component__["createComponent"])(__WEBPACK_IMPORTED_MODULE_2__index_twig__["a" /* default */], stateReducer)));

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var melodyIdom = __webpack_require__(1);

/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
/**
 * Return a ReactElement-compatible object for the current state of a preact
 * component.
 */
function createReactElement(component) {
    if (!component.constructor.displayName) {
        component.constructor.displayName = component.displayName;
    }
    return {
        type: component.constructor,
        key: component.el && melodyIdom.getNodeData(component.el).key,
        ref: null, // Unsupported
        props: component.props || component.ownProps
    };
}

/**
 * Create a ReactDOMComponent-compatible object for a given DOM node rendered
 * by preact.
 *
 * This implements the subset of the ReactDOMComponent interface that
 * React DevTools requires in order to display DOM nodes in the inspector with
 * the correct type and properties.
 *
 * @param {Node} node
 */
function createReactDOMComponent(node) {
    var childNodes = node.nodeType === Node.ELEMENT_NODE ? Array.from(node.childNodes) : [];

    var isText = node.nodeType === Node.TEXT_NODE;

    return {
        // --- ReactDOMComponent interface
        _currentElement: isText ? node.textContent : {
            type: node.nodeName.toLowerCase()
        },
        _renderedChildren: childNodes.map(function (child) {
            var nodeData = melodyIdom.getNodeData(child);
            if (nodeData && nodeData.componentInstance) {
                return updateReactComponent(nodeData.componentInstance);
            }
            return updateReactComponent(child);
        }),
        _stringText: isText ? node.textContent : null,
        publicInstance: node,

        // --- Additional properties used by preact devtools

        // A flag indicating whether the devtools have been notified about the
        // existence of this component instance yet.
        // This is used to send the appropriate notifications when DOM components
        // are added or updated between composite component updates.
        _inDevTools: false,
        node: node
    };
}

/**
 * Return a ReactCompositeComponent-compatible object for a given preact
 * component instance.
 *
 * This implements the subset of the ReactCompositeComponent interface that
 * the DevTools requires in order to walk the component tree and inspect the
 * component's properties.
 *
 * See https://github.com/facebook/react-devtools/blob/e31ec5825342eda570acfc9bcb43a44258fceb28/backend/getData.js
 */
function createReactCompositeComponent(component) {
    var _currentElement = createReactElement(component);
    var node = component.el;

    var instance = {
        // --- ReactDOMComponent properties
        name: component.displayName,
        getName: function getName() {
            return component.displayName;
        },
        _currentElement: _currentElement,
        props: component.props || component.ownProps,
        state: component.state || component.renderProps,
        // forceUpdate: () => {
        //     enqueueComponent(component);
        // },
        // setState: (state) => {
        //     if (component.state) {
        //         Object.assign(component.state, state);
        //         enqueueComponent(component);
        //     }
        // },

        // --- Additional properties used by preact devtools
        node: node
    };

    // React DevTools exposes the `_instance` field of the selected item in the
    // component tree as `$r` in the console.  `_instance` must refer to a
    // React Component (or compatible) class instance with `props` and `state`
    // fields and `setState()`, `forceUpdate()` methods.
    //instance._instance = component;
    instance._instance = {
        get props() {
            return component.props || component.ownProps;
        },

        get state() {
            return component.state || component.renderProps;
        },

        get refs() {
            return component.refs;
        },

        setState: function setState(state) {
            Object.assign(component.state, state);
        },
        forceUpdate: function forceUpdate() {
            melodyIdom.enqueueComponent(component);
        },
        dispatch: function dispatch(action) {
            if (component.dispatch) {
                component.dispatch(action);
            }
        }
    };

    // If the root node returned by this component instance's render function
    // was itself a composite component, there will be a `_component` property
    // containing the child component instance.
    if (component.childInstance) {
        instance._renderedComponent = updateReactComponent(component.childInstance);
    } else if (node) {
        // Otherwise, if the render() function returned an HTML/SVG element,
        // create a ReactDOMComponent-like object for the DOM node itself.
        instance._renderedComponent = updateReactComponent(node);
    }

    return instance;
}

/**
 * Map of Component|Node to ReactDOMComponent|ReactCompositeComponent-like
 * object.
 *
 * The same React*Component instance must be used when notifying devtools
 * about the initial mount of a component and subsequent updates.
 */
var instanceMap = typeof Map === 'function' && new Map();

/**
 * Update (and create if necessary) the ReactDOMComponent|ReactCompositeComponent-like
 * instance for a given preact component instance or DOM Node.
 *
 * @param {Component|Node} componentOrNode
 */
function updateReactComponent(componentOrNode) {
    var newInstance = componentOrNode instanceof Node ? createReactDOMComponent(componentOrNode) : createReactCompositeComponent(componentOrNode);
    if (instanceMap.has(componentOrNode)) {
        var inst = instanceMap.get(componentOrNode);
        Object.assign(inst, newInstance);
        return inst;
    }
    instanceMap.set(componentOrNode, newInstance);
    return newInstance;
}

function nextRootKey(roots) {
    return '.' + Object.keys(roots).length;
}

/**
 * Find all root component instances rendered by preact in `node`'s children
 * and add them to the `roots` map.
 *
 * @param {DOMElement} node
 * @param {[key: string] => ReactDOMComponent|ReactCompositeComponent}
 */
function findRoots(node, roots) {
    Array.from(node.childNodes).forEach(function (child) {
        var nodeData = melodyIdom.getNodeData(child);
        if (nodeData && nodeData.componentInstance) {
            roots[nextRootKey(roots)] = updateReactComponent(nodeData.componentInstance);
        } else {
            findRoots(child, roots);
        }
    });
}

/**
 * Create a bridge for exposing preact's component tree to React DevTools.
 *
 * It creates implementations of the interfaces that ReactDOM passes to
 * devtools to enable it to query the component tree and hook into component
 * updates.
 *
 * See https://github.com/facebook/react/blob/59ff7749eda0cd858d5ee568315bcba1be75a1ca/src/renderers/dom/ReactDOM.js
 * for how ReactDOM exports its internals for use by the devtools and
 * the `attachRenderer()` function in
 * https://github.com/facebook/react-devtools/blob/e31ec5825342eda570acfc9bcb43a44258fceb28/backend/attachRenderer.js
 * for how the devtools consumes the resulting objects.
 */
function createDevToolsBridge() {
    // The devtools has different paths for interacting with the renderers from
    // React Native, legacy React DOM and current React DOM.
    //
    // Here we emulate the interface for the current React DOM (v15+) lib.

    // ReactDOMComponentTree-like object
    var ComponentTree = {
        getNodeFromInstance: function getNodeFromInstance(instance) {
            return instance.node;
        },
        getClosestInstanceFromNode: function getClosestInstanceFromNode(rootNode) {
            var node = rootNode;
            while (node && !melodyIdom.getNodeData(node).componentInstance) {
                node = node.parentNode;
            }
            return node ? updateReactComponent(melodyIdom.getNodeData(node).componentInstance) : null;
        }
    };

    // Map of root ID (the ID is unimportant) to component instance.
    var roots = {};
    findRoots(document.body, roots);

    // ReactMount-like object
    //
    // Used by devtools to discover the list of root component instances and get
    // notified when new root components are rendered.
    var Mount = {
        _instancesByReactRootID: roots,

        // Stub - React DevTools expects to find this method and replace it
        // with a wrapper in order to observe new root components being added
        _renderNewRootComponent: function _renderNewRootComponent() /* instance, ... */{}
    };

    // ReactReconciler-like object
    var Reconciler = {
        // Stubs - React DevTools expects to find these methods and replace them
        // with wrappers in order to observe components being mounted, updated and
        // unmounted
        mountComponent: function mountComponent() /* instance, ... */{},
        performUpdateIfNecessary: function performUpdateIfNecessary() /* instance, ... */{},
        receiveComponent: function receiveComponent() /* instance, ... */{},
        unmountComponent: function unmountComponent() /* instance, ... */{}
    };

    /** Notify devtools that a new component instance has been mounted into the DOM. */
    var componentAdded = function componentAdded(component) {
        var instance = updateReactComponent(component);
        if (isRootComponent(component)) {
            instance._rootID = nextRootKey(roots);
            roots[instance._rootID] = instance;
            Mount._renderNewRootComponent(instance);
        }
        visitNonCompositeChildren(instance, function (childInst) {
            childInst._inDevTools = true;
            Reconciler.mountComponent(childInst);
        });
        Reconciler.mountComponent(instance);
    };

    /** Notify devtools that a component has been updated with new props/state. */
    var componentUpdated = function componentUpdated(component) {
        var prevRenderedChildren = [];
        visitNonCompositeChildren(instanceMap.get(component), function (childInst) {
            prevRenderedChildren.push(childInst);
        });

        // Notify devtools about updates to this component and any non-composite
        // children
        var instance = updateReactComponent(component);
        Reconciler.receiveComponent(instance);
        visitNonCompositeChildren(instance, function (childInst) {
            if (!childInst._inDevTools) {
                // New DOM child component
                childInst._inDevTools = true;
                Reconciler.mountComponent(childInst);
            } else {
                // Updated DOM child component
                Reconciler.receiveComponent(childInst);
            }
        });

        // For any non-composite children that were removed by the latest render,
        // remove the corresponding ReactDOMComponent-like instances and notify
        // the devtools
        prevRenderedChildren.forEach(function (childInst) {
            if (!document.body.contains(childInst.node)) {
                instanceMap.delete(childInst.node);
                Reconciler.unmountComponent(childInst);
            }
        });
    };

    /** Notify devtools that a component has been unmounted from the DOM. */
    var componentRemoved = function componentRemoved(component) {
        var instance = updateReactComponent(component);
        visitNonCompositeChildren(function (childInst) {
            instanceMap.delete(childInst.node);
            Reconciler.unmountComponent(childInst);
        });
        Reconciler.unmountComponent(instance);
        instanceMap.delete(component);
        if (instance._rootID) {
            delete roots[instance._rootID];
        }
    };

    return {
        componentAdded: componentAdded,
        componentUpdated: componentUpdated,
        componentRemoved: componentRemoved,

        // Interfaces passed to devtools via __REACT_DEVTOOLS_GLOBAL_HOOK__.inject()
        ComponentTree: ComponentTree,
        Mount: Mount,
        Reconciler: Reconciler
    };
}

/**
 * Return `true` if a preact component is a top level component rendered by
 * `render()` into a container Element.
 */
function isRootComponent(component) {
    var parentInstance = melodyIdom.getParent(component);
    if (parentInstance === undefined) {
        return true;
    } else if (parentInstance.childInstance !== undefined) {
        return isRootComponent(parentInstance);
    }
    return false;
}

/**
 * Visit all child instances of a ReactCompositeComponent-like object that are
 * not composite components (ie. they represent DOM elements or text)
 *
 * @param {Component} component
 * @param {(Component) => void} visitor
 */
function visitNonCompositeChildren(component, visitor) {
    if (component._renderedComponent) {
        if (!component._renderedComponent.componentInstance) {
            visitor(component._renderedComponent);
            visitNonCompositeChildren(component._renderedComponent, visitor);
        }
    } else if (component._renderedChildren) {
        component._renderedChildren.forEach(function (child) {
            visitor(child);
            if (!child.componentInstance) {
                visitNonCompositeChildren(child, visitor);
            }
        });
    }
}

/**
 * Create a bridge between the preact component tree and React's dev tools
 * and register it.
 *
 * After this function is called, the React Dev Tools should be able to detect
 * "React" on the page and show the component tree.
 *
 * This function hooks into preact VNode creation in order to expose functional
 * components correctly, so it should be called before the root component(s)
 * are rendered.
 *
 * Returns a cleanup function which unregisters the hooks.
 */
function initDevTools() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
        // React DevTools are not installed
        return;
    }

    // Notify devtools when preact components are mounted, updated or unmounted
    var bridge = createDevToolsBridge();

    var nextAfterMount = melodyIdom.options.afterMount;
    melodyIdom.options.afterMount = function (component) {
        bridge.componentAdded(component);
        if (nextAfterMount) {
            nextAfterMount(component);
        }
    };

    var nextAfterUpdate = melodyIdom.options.afterUpdate;
    melodyIdom.options.afterUpdate = function (component) {
        bridge.componentUpdated(component);
        if (nextAfterUpdate) {
            nextAfterUpdate(component);
        }
    };

    var nextBeforeUnmount = melodyIdom.options.beforeUnmount;
    melodyIdom.options.beforeUnmount = function (component) {
        bridge.componentRemoved(component);
        if (nextBeforeUnmount) {
            nextBeforeUnmount(component);
        }
    };

    // Notify devtools about this instance of "React"
    __REACT_DEVTOOLS_GLOBAL_HOOK__.inject(bridge);

    return function () {
        melodyIdom.options.afterMount = nextAfterMount;
        melodyIdom.options.afterUpdate = nextAfterUpdate;
        melodyIdom.options.beforeUnmount = nextBeforeUnmount;
    };
}

exports.initDevTools = initDevTools;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(this, function () {
  'use strict';

  /**
   * Module export
   *
   * @param {Element} el
   * @return {ClassList}
   */

  var index = function (el) {
    return new ClassList(el);
  };

  /**
   * Initialize a new ClassList for the given element
   *
   * @param {Element} el DOM Element
   */
  function ClassList(el) {
    if (!el || el.nodeType !== 1) {
      throw new Error('A DOM Element reference is required');
    }

    this.el = el;
    this.classList = el.classList;
  }

  /**
   * Check token validity
   *
   * @param token
   * @param [method]
   */
  function checkToken(token, method) {
    method = method || 'a method';

    if (typeof token != 'string') {
      throw new TypeError('Failed to execute \'' + method + '\' on \'ClassList\': ' + 'the token provided (\'' + token + '\') is not a string.');
    }
    if (token === "") {
      throw new SyntaxError('Failed to execute \'' + method + '\' on \'ClassList\': ' + 'the token provided must not be empty.');
    }
    if (/\s/.test(token)) {
      throw new Error('Failed to execute \'' + method + '\' on \'ClassList\': ' + 'the token provided (\'' + token + '\') contains HTML space ' + 'characters, which are not valid in tokens.');
    }
  }

  /**
   * Return an array of the class names on the element.
   *
   * @return {Array}
   */
  ClassList.prototype.toArray = function () {
    var str = (this.el.getAttribute('class') || '').replace(/^\s+|\s+$/g, '');
    var classes = str.split(/\s+/);
    if ('' === classes[0]) {
      classes.shift();
    }
    return classes;
  };

  /**
   * Add the given `token` to the class list if it's not already present.
   *
   * @param {String} token
   */
  ClassList.prototype.add = function (token) {
    var classes, index, updated;
    checkToken(token, 'add');

    if (this.classList) {
      this.classList.add(token);
    } else {
      // fallback
      classes = this.toArray();
      index = classes.indexOf(token);
      if (index === -1) {
        classes.push(token);
        this.el.setAttribute('class', classes.join(' '));
      }
    }

    return;
  };

  /**
   * Check if the given `token` is in the class list.
   *
   * @param {String} token
   * @return {Boolean}
   */
  ClassList.prototype.contains = function (token) {
    checkToken(token, 'contains');

    return this.classList ? this.classList.contains(token) : this.toArray().indexOf(token) > -1;
  };

  /**
   * Remove any class names that match the given `token`, when present.
   *
   * @param {String|RegExp} token
   */
  ClassList.prototype.remove = function (token) {
    var arr, classes, i, index, len;

    if ('[object RegExp]' == Object.prototype.toString.call(token)) {
      arr = this.toArray();
      for (i = 0, len = arr.length; i < len; i++) {
        if (token.test(arr[i])) {
          this.remove(arr[i]);
        }
      }
    } else {
      checkToken(token, 'remove');

      if (this.classList) {
        this.classList.remove(token);
      } else {
        // fallback
        classes = this.toArray();
        index = classes.indexOf(token);
        if (index > -1) {
          classes.splice(index, 1);
          this.el.setAttribute('class', classes.join(' '));
        }
      }
    }

    return;
  };

  /**
   * Toggle the `token` in the class list. Optionally force state via `force`.
   *
   * Native `classList` is not used as some browsers that support `classList` do
   * not support `force`. Avoiding `classList` altogether keeps this function
   * simple.
   *
   * @param {String} token
   * @param {Boolean} [force]
   * @return {Boolean}
   */
  ClassList.prototype.toggle = function (token, force) {
    checkToken(token, 'toggle');

    var hasToken = this.contains(token);
    var method = hasToken ? force !== true && 'remove' : force !== false && 'add';

    if (method) {
      this[method](token);
    }

    return typeof force == 'boolean' ? force : !hasToken;
  };

  /**
   * https://github.com/WICG/focus-ring
   */
  function init() {
    var hadKeyboardEvent = false;
    var elWithFocusRing;

    var inputTypesWhitelist = {
      'text': true,
      'search': true,
      'url': true,
      'tel': true,
      'email': true,
      'password': true,
      'number': true,
      'date': true,
      'month': true,
      'week': true,
      'time': true,
      'datetime': true,
      'datetime-local': true
    };

    /**
     * Computes whether the given element should automatically trigger the
     * `focus-ring` class being added, i.e. whether it should always match
     * `:focus-ring` when focused.
     * @param {Element} el
     * @return {boolean}
     */
    function focusTriggersKeyboardModality(el) {
      var type = el.type;
      var tagName = el.tagName;

      if (tagName == 'INPUT' && inputTypesWhitelist[type] && !el.readonly) return true;

      if (tagName == 'TEXTAREA' && !el.readonly) return true;

      if (el.contentEditable == 'true') return true;

      return false;
    }

    /**
     * Add the `focus-ring` class to the given element if it was not added by
     * the author.
     * @param {Element} el
     */
    function addFocusRingClass(el) {
      if (index(el).contains('focus-ring')) return;
      index(el).add('focus-ring');
      el.setAttribute('data-focus-ring-added', '');
    }

    /**
     * Remove the `focus-ring` class from the given element if it was not
     * originally added by the author.
     * @param {Element} el
     */
    function removeFocusRingClass(el) {
      if (!el.hasAttribute('data-focus-ring-added')) return;
      index(el).remove('focus-ring');
      el.removeAttribute('data-focus-ring-added');
    }

    /**
     * On `keydown`, set `hadKeyboardEvent`, add `focus-ring` class if the
     * key was Tab.
     * @param {Event} e
     */
    function onKeyDown(e) {
      if (e.altKey || e.ctrlKey || e.metaKey) return;

      if (e.keyCode != 9) return;

      hadKeyboardEvent = true;
    }

    /**
     * On `focus`, add the `focus-ring` class to the target if:
     * - the target received focus as a result of keyboard navigation
     * - the event target is an element that will likely require interaction
     *   via the keyboard (e.g. a text box)
     * @param {Event} e
     */
    function onFocus(e) {
      if (e.target == document) return;

      if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
        addFocusRingClass(e.target);
        hadKeyboardEvent = false;
      }
    }

    /**
     * On `blur`, remove the `focus-ring` class from the target.
     * @param {Event} e
     */
    function onBlur(e) {
      if (e.target == document) return;

      removeFocusRingClass(e.target);
    }

    /**
     * When the window regains focus, restore the focus-ring class to the element
     * to which it was previously applied.
     */
    function onWindowFocus() {
      if (document.activeElement == elWithFocusRing) addFocusRingClass(elWithFocusRing);

      elWithFocusRing = null;
    }

    /**
     * When switching windows, keep track of the focused element if it has a
     * focus-ring class.
     */
    function onWindowBlur() {
      if (index(document.activeElement).contains('focus-ring')) {
        // Keep a reference to the element to which the focus-ring class is applied
        // so the focus-ring class can be restored to it if the window regains
        // focus after being blurred.
        elWithFocusRing = document.activeElement;
      }
    }

    document.addEventListener('keydown', onKeyDown, true);
    document.addEventListener('focus', onFocus, true);
    document.addEventListener('blur', onBlur, true);
    window.addEventListener('focus', onWindowFocus, true);
    window.addEventListener('blur', onWindowBlur, true);

    index(document.body).add('js-focus-ring');
  }

  /**
   * Subscription when the DOM is ready
   * @param {Function} callback
   */
  function onDOMReady(callback) {
    if (document.readyState === 'complete') {
      callback();
    } else {
      var loaded = false;

      /**
       * Callback wrapper for check loaded state
       */
      function load() {
        if (!loaded) {
          loaded = true;

          callback();
        }
      }

      document.addEventListener('DOMContentLoaded', load, false);
      window.addEventListener('load', load, false);
    }
  }

  onDOMReady(init);
});

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_melody_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_melody_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_melody_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_melody_util__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_melody_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_melody_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_melody_hoc__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_melody_hoc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_melody_hoc__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_twig__ = __webpack_require__(46);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






const combineReducers = (...reducers) => (previous, current) => reducers.reduce((p, r) => r(p, current), previous);

/* harmony default export */ __webpack_exports__["a"] = (routes => {
    const changeRoute = (path, params = []) => ({
        type: 'CHANGE_ROUTE',
        payload: {
            path: path,
            params: params
        }
    });

    const initialState = {
        routes: routes,
        ChildComponent: null,
        ChildComponentKey: '',
        params: [],
        changeRoute() {}
    };

    const stateReducer = (state = initialState, { type, payload }) => {
        switch (type) {
            case 'CHANGE_ROUTE':
                return _extends({}, state, {
                    ChildComponent: state.routes[payload.path] || null,
                    ChildComponentKey: [payload.path, ...payload.params].join('::'),
                    params: payload.params
                });
            default:
                return state;
        }
    };

    const changeRouteReducer = dispatch => ({
        changeRoute(path, params = []) {
            const url = [path, ...params].join('/');
            window.history.pushState(null, '', url);
            dispatch(changeRoute(path, params));
        }
    });

    const RouterComponent = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_component__["createComponent"])(__WEBPACK_IMPORTED_MODULE_3__index_twig__["a" /* default */], combineReducers(stateReducer, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_melody_util__["dispatchToState"])(changeRouteReducer)));

    const enhance = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_hoc__["lifecycle"])({
        componentDidMount() {
            this.changeRoute = () => {
                const routes = this.getState().routes;
                const { pathname } = window.location;

                for (let route in routes) {
                    if (!routes.hasOwnProperty(route)) {
                        continue;
                    }

                    if (pathname === route) {
                        this.dispatch(changeRoute(route));
                        return;
                    }

                    if (pathname.indexOf(route + '/') === 0) {
                        const params = pathname.substr(route.length + 1).split('/');
                        this.dispatch(changeRoute(route, params));
                        return;
                    }
                }
            };

            this.changeRoute();
            window.addEventListener('popstate', this.changeRoute, false);
        },
        componentWillUnmount() {
            window.removeEventListener('popstate', this.changeRoute, false);
            this.changeRoute = false;
        }
    });

    return enhance(RouterComponent);
});

/***/ }),
/* 40 */
/***/ (function(module, exports) {

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(function () {
        window.console.log('ServiceWorker registered');
    }).catch(function () {
        window.console.log('ServiceWorker registration failed');
    });
}

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_melody_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_melody_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_melody_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_melody_hoc__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_melody_hoc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_melody_hoc__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_twig__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__snarkdown__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highlight_js_lib_highlight__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highlight_js_lib_highlight___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_highlight_js_lib_highlight__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_highlight_js_lib_languages_javascript__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_highlight_js_lib_languages_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_highlight_js_lib_languages_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_highlight_js_lib_languages_json__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_highlight_js_lib_languages_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_highlight_js_lib_languages_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_highlight_js_lib_languages_xml__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_highlight_js_lib_languages_xml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_highlight_js_lib_languages_xml__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };











const LANGUAGES = { javascript: __WEBPACK_IMPORTED_MODULE_5_highlight_js_lib_languages_javascript___default.a, json: __WEBPACK_IMPORTED_MODULE_6_highlight_js_lib_languages_json___default.a, xml: __WEBPACK_IMPORTED_MODULE_7_highlight_js_lib_languages_xml___default.a };
Object.keys(LANGUAGES).forEach(key => __WEBPACK_IMPORTED_MODULE_4_highlight_js_lib_highlight___default.a.registerLanguage(key, LANGUAGES[key]));

const contentCache = {};

const updateInCache = (chapter, article, content) => {
	if (!contentCache[chapter]) {
		contentCache[chapter] = {};
	}
	contentCache[chapter][article] = content;
	return content;
};

const getFromCache = (chapter, article) => contentCache[chapter] && contentCache[chapter][article];

const getContent = (chapter, article) => {
	const path = `/docs/${chapter}/${article}.md`;
	const fromCache = getFromCache(chapter, article);

	if (fromCache) {
		return Promise.resolve(fromCache);
	}

	return fetch(path).then(res => res.text()).then(md => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__snarkdown__["a" /* default */])(md)).then(content => updateInCache(chapter, article, content)).catch(err => console.warn(err));
};

const contentOnMount = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_melody_hoc__["lifecycle"])({
	componentDidMount() {
		const { params } = this.getState();
		const [chapter, article] = params;
		this.dispatch({ type: 'SET_LOADING' });
		getContent(chapter || 'quickstart', article || 'intro').then(content => {
			this.dispatch({ type: 'SET_CONTENT', payload: content });
		});
	},
	componentDidUpdate() {
		[...document.querySelectorAll('.code')].forEach(block => {
			__WEBPACK_IMPORTED_MODULE_4_highlight_js_lib_highlight___default.a.highlightBlock(block);
		});
	}
});

const stateReducer = (state = { content: 'Loading...' }, { type, payload }) => {
	switch (type) {
		case __WEBPACK_IMPORTED_MODULE_0_melody_component__["RECEIVE_PROPS"]:
			return _extends({}, state, {
				changeRoute: payload.changeRoute,
				params: payload.params
			});
		case 'SET_LOADING':
			return _extends({}, state, {
				content: 'Loading...'
			});
		case 'SET_CONTENT':
			return _extends({}, state, {
				content: payload
			});
		default:
			return state;
	}
};

/* harmony default export */ __webpack_exports__["a"] = (contentOnMount(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_component__["createComponent"])(__WEBPACK_IMPORTED_MODULE_2__index_twig__["a" /* default */], stateReducer)));

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_melody_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_melody_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_melody_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_melody_hoc__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_melody_hoc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_melody_hoc__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_twig__ = __webpack_require__(50);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





const initialState = {
    navFixed: false
};

const stateReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case __WEBPACK_IMPORTED_MODULE_0_melody_component__["RECEIVE_PROPS"]:
            return _extends({}, state, payload);
        case 'FIX_NAV':
            return _extends({}, state, {
                navFixed: true
            });
        case 'UNFIX_NAV':
            return _extends({}, state, {
                navFixed: false
            });
        default:
            return state;
    }
};

const events = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_melody_hoc__["bindEvents"])({});

const mountCanvas = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_melody_hoc__["lifecycle"])({
    componentDidMount() {
        createMeteoriteShower(this.refs.canvasContainer);

        this.scroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
            const canvasBottom = this.refs.canvasContainer.clientHeight - 54;
            const { navFixed } = this.getState();
            if (scrollTop >= canvasBottom && !navFixed) {
                this.dispatch({ type: 'FIX_NAV' });
            } else if (scrollTop < canvasBottom && navFixed) {
                this.dispatch({ type: 'UNFIX_NAV' });
            }
        };
        window.addEventListener('scroll', this.scroll);
    },
    componentDidUpdate(prevProps, prevState) {
        const { navFixed } = this.getState();
        if (prevState.navFixed && !navFixed) {
            createMeteoriteShower(this.refs.canvasContainer);
        }
    },
    componentWillUnmount() {
        window.removeEventListener('scroll', this.scroll);
    }
});

const enhance = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_melody_hoc__["compose"])(events, mountCanvas);

/* harmony default export */ __webpack_exports__["a"] = (enhance(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_component__["createComponent"])(__WEBPACK_IMPORTED_MODULE_2__index_twig__["a" /* default */], stateReducer)));

function createMeteoriteShower(canvasContainer) {
    if (!canvasContainer) {
        return;
    }

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    let canvasHeight = canvasContainer.clientHeight;
    let canvasWidth = canvasContainer.clientWidth;
    let shouldAnimate = canvasWidth >= 900;
    let animating;

    const numberOfMeteorites = Math.round(canvasWidth / 25);
    const colours = ['#6eceb2', '#272361'];
    const showerAngle = Math.PI / 3.5;

    canvas.style.position = 'absolute';
    canvas.style.left = canvas.style.top = '0';

    const onResize = () => {
        canvasHeight = canvasContainer.clientHeight;
        canvasWidth = canvasContainer.clientWidth;
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        shouldAnimate = canvasWidth >= 800;
        if (!animating) {
            requestAnimationFrame(animate);
        }
    };

    class Meteorite {
        constructor() {
            this.h = 25 + Math.random() * 25;
            this.x = Math.random() * canvasWidth * 1.5;
            this.y = Math.random() * canvasHeight * 1.5;
            this.vx = -1.5;
            this.vy = 1.5;
            this.colour = colours[Math.round(Math.random())];
            this.isCircle = Math.random() < 0.35;
        }

        reset() {
            this.x = Math.random() * canvasWidth * 1.5;
            this.y = -(Math.random() * canvasHeight);
            this.h = 20 + Math.random() * 25;
            this.colour = colours[Math.round(Math.random())];
            this.isCircle = Math.random() < 0.15;
        }
    };

    const meteorites = Array.from({ length: numberOfMeteorites }, () => new Meteorite());

    const createLine = (ctx, x, y, h) => {
        const angle = showerAngle * h;
        ctx.beginPath();
        ctx.moveTo(x + 5, y);
        ctx.arcTo(x + 10, y, x + 10, y + h, 5);
        ctx.arcTo(x + 10 - angle, y + h, x - angle, y + h, 5);
        ctx.arcTo(x - angle, y + h, x - angle, y, 5);
        ctx.arcTo(x, y, x + 10, y, 5);
        ctx.closePath();
    };
    const createCircle = (ctx, x, y, r) => {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 80, false);
        ctx.closePath();
    };

    const animate = () => {
        animating = true;
        ctx.globalAlpha = 0.3;
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        meteorites.forEach(meteorite => {
            meteorite.x += meteorite.vx;
            meteorite.y += meteorite.vy;
            if (meteorite.isCircle) {
                createCircle(ctx, meteorite.x, meteorite.y, meteorite.h / 1.8);
            } else {
                createLine(ctx, meteorite.x, meteorite.y, meteorite.h);
            }
            ctx.fillStyle = meteorite.colour;
            ctx.fill();
            if (meteorite.x < -meteorite.h || meteorite.y > canvasHeight + meteorite.h) {
                meteorite.reset();
            }
        });
        if (shouldAnimate) {
            requestAnimationFrame(animate);
        } else {
            animating = false;
        }
    };

    onResize();
    window.addEventListener('resize', onResize);
    canvasContainer.appendChild(canvas);
};

/***/ }),
/* 43 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = MelodyInAction;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__todo_example_app_TodoList__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_melody_idom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_melody_idom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_melody_idom__);


const _template = {};
/* unused harmony export _template */

const _statics = ["class", "heading heading--primary"],
      _statics$1 = ["class", "in-action__code-block demo"],
      _statics$2 = ["class", "filename"],
      _statics$3 = ["class", "hljs html"],
      _statics$4 = ["class", "in-action__code-block"],
      _statics$5 = ["class", "filename"],
      _statics$6 = ["class", "hljs javascript"],
      _statics$7 = ["class", "in-action__code-block in-action__code-block--large"],
      _statics$8 = ["class", "in-action in-action__wrapper bg--white"];

_template.render = function (_context) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_melody_idom__["elementOpen"])("section", "7{1pMS5", _statics$8);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_melody_idom__["elementOpen"])("h2", "4^XlV5O", _statics);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_melody_idom__["text"])("Melody in action");
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_melody_idom__["elementClose"])("h2");
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_melody_idom__["elementOpen"])("div", "N;i6kI#", _statics$1);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_melody_idom__["component"])(__WEBPACK_IMPORTED_MODULE_0__todo_example_app_TodoList__["a" /* default */], "l1Ix-5`");
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_melody_idom__["elementClose"])("div");
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_melody_idom__["elementOpen"])("div", "'<l%SlQ", _statics$4);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_melody_idom__["elementOpen"])("div", "DBeELke", _statics$2);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_melody_idom__["text"])("TodoList.twig");
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_melody_idom__["elementClose"])("div");
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_melody_idom__["elementOpen"])("pre", null, null);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_melody_idom__["elementOpen"])("code", ";=ni$@@", _statics$3);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_melody_idom__["text"])("<form ref=\"{{ form }}\" action=\"javascript:;\">\n  <div class=\"demo__inputs\">\n    <input value=\"{{ text }}\" class=\"input\" ref=\"{{ input }}\" />\n    <button ref=\"{{ add }}\" class=\"btn btn--primary\" type=\"submit\">Add</button>\n  </div>\n  <ul>\n    {% for todo in todos %}\n      <li>{{ todo }}</li>\n    {% endfor %}\n  </ul>\n</form>");
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_melody_idom__["elementClose"])("code");
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_melody_idom__["elementClose"])("pre");
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_melody_idom__["elementClose"])("div");
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_melody_idom__["elementOpen"])("div", "yF[y{+Q", _statics$7);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_melody_idom__["elementOpen"])("div", "A#kUd96", _statics$5);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_melody_idom__["text"])("TodoList.js");
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_melody_idom__["elementClose"])("div");
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_melody_idom__["elementOpen"])("pre", null, null);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_melody_idom__["elementOpen"])("code", "#2-ot['", _statics$6);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_melody_idom__["text"])("import {render, createComponent, RECEIVE_PROPS} from 'melody-component';\nimport {bindEvents} from 'melody-hoc';\nimport template from './TodoList.twig';\n\nconst stateReducer = (state = {todos: ['Read docs'], text: ''}, {type, payload}) => {\n  switch (type) {\n    case RECEIVE_PROPS: return {...state, ...payload};\n    case 'TEXT_CHANGE': return {...state, text: payload};\n    case 'ADD_TODO':\n      const {todos, text} = state;\n      return {...state, todos: todos.concat(text), text: ''};\n  }\n  return state;\n};\n\nconst enhance = bindEvents({\n  form: {\n    submit(event, {dispatch, getState}) {\n      event.preventDefault();\n      if(getState().text == '') return;\n      dispatch({type: 'ADD_TODO'});\n    }\n  },\n  input: {\n    input(event, {dispatch}) {\n      dispatch({type: 'TEXT_CHANGE', payload: event.target.value});\n    }\n  }\n});\n\nexport default enhance(createComponent(template, stateReducer));");
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_melody_idom__["elementClose"])("code");
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_melody_idom__["elementClose"])("pre");
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_melody_idom__["elementClose"])("div");
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_melody_idom__["elementClose"])("section");
};

if (process.env.NODE_ENV !== "production") {
  _template.displayName = "MelodyInAction";
}

function MelodyInAction(props) {
  return _template.render(props);
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = Nav;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_icons_icn_hamburger_html_twig__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_icons_icn_close_html_twig__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_melody_idom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_melody_idom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_melody_idom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_icons_icn_logo_header_html_twig__ = __webpack_require__(57);




const _template = {};
/* unused harmony export _template */

const _statics = ["class", "nav__logo"],
      _statics$1 = ["class", "nav__menu"],
      _statics$2 = ["class", "nav__item", "href", "/documentation"],
      _statics$3 = ["class", "nav__items"],
      _statics$4 = ["href", "/documentation/quickstart/intro"],
      _statics$5 = ["href", "/documentation/quickstart/getting-started"],
      _statics$6 = ["href", "/documentation/quickstart/twig"],
      _statics$7 = ["href", "/documentation/quickstart/rendering"],
      _statics$8 = ["href", "/documentation/quickstart/state-lifecycle"],
      _statics$9 = ["href", "/documentation/quickstart/events"],
      _statics$10 = ["href", "/documentation/quickstart/forms"],
      _statics$11 = ["href", "/documentation/advanced/actions"],
      _statics$12 = ["href", "/documentation/advanced/reducers"],
      _statics$13 = ["href", "/documentation/advanced/passing-actions"],
      _statics$14 = ["href", "/documentation/advanced/hoc"],
      _statics$15 = ["href", "/documentation/advanced/lifecycle"],
      _statics$16 = ["href", "/documentation/advanced/middleware"],
      _statics$17 = ["href", "/documentation/redux/intro"],
      _statics$18 = ["href", "/documentation/redux/connect"],
      _statics$19 = ["href", "/documentation/redux/provide"],
      _statics$20 = ["href", "/documentation/redux/redux-thunk"],
      _statics$21 = ["href", "/documentation/redux/redux-saga"],
      _statics$22 = ["class", "side-menu__wrapper"],
      _statics$23 = ["class", "header"];

_template.render = function (_context) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("header", "WfJLM2O", _statics$23);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("nav", null, null, "class", "nav" + (_context.isHome && !_context.isFixed ? " nav--inverse" : "") + (_context.isFixed ? " nav--fixed" : ""));
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("a", "</k79'`", _statics, "ref", _context.homepageLink);

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__style_icons_icn_logo_header_html_twig__["a" /* default */])(_context);

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("a");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("div", "V^o:KzS", _statics$3);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("span", "Hs(hjVz", _statics$1, "ref", _context.toggleMenu);

    if (_context.menuOpen) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__style_icons_icn_close_html_twig__["a" /* default */])(_context);
    } else {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__style_icons_icn_hamburger_html_twig__["a" /* default */])(_context);
    }

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("span");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("a", "j+^5!2Z", _statics$2, "ref", _context.documentationLink);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["text"])("Documentation");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("a");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("div");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("nav");

    if (_context.hasSideMenu) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("aside", null, null, "class", "side-menu" + (_context.menuOpen ? " side-menu--open" : "") + (_context.menuHidden ? " hidden" : ""), "ref", _context.sideMenu);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("div", "|1UNI-h", _statics$22, "ref", _context.menuLinks);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("h3", null, null);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["text"])("Quickstart");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("h3");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("ul", null, null);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("li", null, null);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("a", "]t]M1kh", _statics$4);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["text"])("Intro");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("a");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("li");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("li", null, null);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("a", "sE!:pk*", _statics$5);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["text"])("Getting Started");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("a");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("li");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("li", null, null);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("a", "e7VPU:b", _statics$6);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["text"])("Templates");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("a");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("li");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("li", null, null);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("a", "3#*YCCH", _statics$7);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["text"])("Rendering");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("a");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("li");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("li", null, null);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("a", "1Ir'Lu#", _statics$8);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["text"])("State and Lifecycle");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("a");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("li");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("li", null, null);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("a", "[bS>@rl", _statics$9);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["text"])("Events");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("a");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("li");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("li", null, null);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("a", "|/5[jeX", _statics$10);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["text"])("Forms");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("a");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("li");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("ul");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("h3", null, null);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["text"])("Advanced");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("h3");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("ul", null, null);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("li", null, null);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("a", "?uT>VNR", _statics$11);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["text"])("Actions");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("a");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("li");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("li", null, null);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("a", "JbV+*nZ", _statics$12);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["text"])("Reducers");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("a");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("li");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("li", null, null);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("a", "zBa}0'?", _statics$13);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["text"])("Passing Actions Down");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("a");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("li");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("li", null, null);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("a", "?Fve$:M", _statics$14);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["text"])("High Order Components");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("a");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("li");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("li", null, null);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("a", "ZF4v_Qi", _statics$15);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["text"])("Component Lifecycle");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("a");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("li");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("li", null, null);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("a", "u1),<Ie", _statics$16);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["text"])("Middleware");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("a");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("li");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("ul");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("h3", null, null);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["text"])("Redux");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("h3");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("ul", null, null);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("li", null, null);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("a", "ij4UJ#{", _statics$17);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["text"])("Intro");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("a");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("li");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("li", null, null);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("a", "!C/jR>Q", _statics$18);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["text"])("Connect");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("a");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("li");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("li", null, null);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("a", "DjXOa]g", _statics$19);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["text"])("Provide");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("a");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("li");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("li", null, null);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("a", "SjxX^pF", _statics$20);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["text"])("Thunks");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("a");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("li");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("li", null, null);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementOpen"])("a", "(nr$F{p", _statics$21);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["text"])("Sagas");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("a");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("li");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("ul");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("div");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("aside");
    }

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_melody_idom__["elementClose"])("header");
};

if (process.env.NODE_ENV !== "production") {
    _template.displayName = "Nav";
}

function Nav(props) {
    return _template.render(props);
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = Router;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_melody_idom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_melody_idom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_melody_idom__);

const _template = {};
/* unused harmony export _template */

const _statics = ["id", "app"];

_template.render = function (_context) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementOpen"])("div", "'}Vy?u<", _statics);

    if (_context.ChildComponent && _context.ChildComponentKey) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["component"])(_context.ChildComponent, "" + _context.ChildComponentKey, {
            changeRoute: _context.changeRoute,
            params: _context.params
        });
    }

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementClose"])("div");
};

if (process.env.NODE_ENV !== "production") {
    _template.displayName = "Router";
}

function Router(props) {
    return _template.render(props);
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = Tabs;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_melody_idom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_melody_idom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_melody_idom__);

const _template = {};
/* unused harmony export _template */

const _statics = ["class", "heading heading--secondary"],
      _statics$1 = ["tabindex", "0"],
      _statics$2 = ["class", "differences__list"],
      _statics$3 = ["class", "differences__explanation"],
      _statics$4 = ["class", "differences"];

_template.render = function (_context) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementOpen"])("section", "B'Oh|Lp", _statics$4);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementOpen"])("h2", "7F6ugyQ", _statics);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["text"])("Melody is different");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementClose"])("h2");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementOpen"])("ul", "J8>0it=", _statics$2);
    {
        let _sequence = _context.tabs,
            _index = 0,
            _length = _sequence.length,
            tab = _sequence[0];

        for (; _index < _length; _index++, tab = _sequence[_index]) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementOpen"])("li", "" + tab.name, _statics$1, "onclick", _context.onClick, "class", _context.activeTab.name == tab.name ? "active" : "");
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["text"])(tab.name);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementClose"])("li");
        }
    }
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementClose"])("ul");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementOpen"])("p", "wcbHuhQ", _statics$3);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["text"])(_context.activeTab.content);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementClose"])("p");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementClose"])("section");
};

if (process.env.NODE_ENV !== "production") {
    _template.displayName = "Tabs";
}

function Tabs(props) {
    return _template.render(props);
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = TodoList;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_melody_idom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_melody_idom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_melody_idom__);

const _template = {};
/* unused harmony export _template */

const _statics = ["class", "input"],
      _statics$1 = ["class", "btn btn--primary", "type", "submit"],
      _statics$2 = ["class", "demo__inputs"],
      _statics$3 = ["action", "javascript:;"];

_template.render = function (_context) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementOpen"])("form", "LSg1FdW", _statics$3, "ref", _context.form);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementOpen"])("div", "Hdd+<*y", _statics$2);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("input", "noA)2E.", _statics, "value", _context.text, "ref", _context.input);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementOpen"])("button", "[TPiLKK", _statics$1, "ref", _context.add);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["text"])("Add");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementClose"])("button");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementClose"])("div");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementOpen"])("ul", null, null);
    {
        let _sequence = _context.todos,
            _index = 0,
            _length = _sequence.length,
            todo = _sequence[0];

        for (; _index < _length; _index++, todo = _sequence[_index]) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementOpen"])("li", null, null);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["text"])(todo);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementClose"])("li");
        }
    }
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementClose"])("ul");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementClose"])("form");
};

if (process.env.NODE_ENV !== "production") {
    _template.displayName = "TodoList";
}

function TodoList(props) {
    return _template.render(props);
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = Documentation;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_melody_idom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_melody_idom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_melody_idom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_nav_index__ = __webpack_require__(36);


const _template = {};
/* unused harmony export _template */

const _statics = ["class", "docs-content"],
      _statics$1 = ["class", "docs"];

_template.render = function (_context) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementOpen"])("div", "(F,>2a9", _statics$1);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["component"])(__WEBPACK_IMPORTED_MODULE_1__components_nav_index__["a" /* default */], "s@k<TOZ", {
        changeRoute: _context.changeRoute,
        params: _context.params,
        isHome: false,
        isFixed: false,
        hasSideMenu: true
    });
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementOpen"])("main", "c0/9L+>", _statics);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementOpen"])("article", null, null);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["raw"])(_context.content);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementClose"])("article");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementClose"])("main");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementClose"])("div");
};

if (process.env.NODE_ENV !== "production") {
    _template.displayName = "Documentation";
}

function Documentation(props) {
    return _template.render(props);
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = Home;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_melody_in_action_index__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_tabs_index__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_icons_icn_structured_html_twig__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_icons_icn_faster_html_twig__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_icons_icn_flexible_html_twig__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_icons_icn_battle_tested_html_twig__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_icons_icn_error_messages_html_twig__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style_icons_icn_smaller_html_twig__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__style_icons_icn_logo_hero_html_twig__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_melody_idom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_melody_idom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_melody_idom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_nav_index__ = __webpack_require__(36);











const _template = {};
/* unused harmony export _template */

const _statics = ["class", "hero__melody-logo"],
      _statics$1 = ["class", "hero__heading"],
      _statics$2 = ["type", "button", "class", "btn btn--primary"],
      _statics$3 = ["type", "button", "class", "btn btn--secondary"],
      _statics$4 = ["class", "hero__download"],
      _statics$5 = ["class", "hero__code-block--comment"],
      _statics$6 = ["class", "hero__code-block"],
      _statics$7 = ["class", "hero__welcome"],
      _statics$8 = ["class", "hero"],
      _statics$9 = ["class", "bg--purple", "ref", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["ref"])("canvasContainer")],
      _statics$10 = ["class", "heading heading--primary"],
      _statics$11 = ["class", "nutshell__image"],
      _statics$12 = ["class", "nutshell__description"],
      _statics$13 = ["class", "nutshell__item", "id", "small"],
      _statics$14 = ["class", "nutshell__image"],
      _statics$15 = ["class", "nutshell__description nutshell__description--middle"],
      _statics$16 = ["class", "nutshell__item", "id", "error"],
      _statics$17 = ["class", "nutshell__image"],
      _statics$18 = ["class", "nutshell__description"],
      _statics$19 = ["class", "nutshell__item", "id", "battleTested"],
      _statics$20 = ["class", "nutshell__image"],
      _statics$21 = ["class", "nutshell__description"],
      _statics$22 = ["class", "nutshell__item", "id", "flexible"],
      _statics$23 = ["class", "nutshell__image"],
      _statics$24 = ["class", "nutshell__description nutshell__description--middle"],
      _statics$25 = ["class", "nutshell__item", "id", "speed"],
      _statics$26 = ["class", "nutshell__image"],
      _statics$27 = ["class", "nutshell__description"],
      _statics$28 = ["class", "nutshell__item", "id", "structured"],
      _statics$29 = ["class", "nutshell nutshell__wrapper bg--white"],
      _statics$30 = ["class", "bg--purple differences__wrapper"],
      _statics$31 = ["class", "hero__melody-logo"],
      _statics$32 = ["class", "hero__heading hero__heading"],
      _statics$33 = ["type", "button", "class", "btn btn--primary"],
      _statics$34 = ["type", "button", "class", "btn btn--secondary"],
      _statics$35 = ["class", "hero__download"],
      _statics$36 = ["class", "highlight"],
      _statics$37 = ["class", "hero__paragraph"],
      _statics$38 = ["class", "hero__code-block--comment"],
      _statics$39 = ["class", "hero__code-block"],
      _statics$40 = ["class", "highlight"],
      _statics$41 = ["class", "hero__paragraph"],
      _statics$42 = ["class", "hero__welcome"],
      _statics$43 = ["class", "hero hero--small"],
      _statics$44 = ["class", "bg--purple hero__wrapper--small"],
      _statics$45 = ["class", "main-wrapper"];

_template.render = function (_context) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementOpen"])("main", "EttQ1G(", _statics$45);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["component"])(__WEBPACK_IMPORTED_MODULE_10__components_nav_index__["a" /* default */], "WW[R73!", {
        changeRoute: _context.changeRoute,
        isHome: true,
        isFixed: _context.navFixed,
        hasSideMenu: false
    });
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementOpen"])("div", "NBq51G:", _statics$9);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementOpen"])("section", "*DC]!RR", _statics$8);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementOpen"])("div", "57)KFae", _statics);

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__style_icons_icn_logo_hero_html_twig__["a" /* default */])(_context);

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementClose"])("div");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementOpen"])("div", "U~A$H!~", _statics$7);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementOpen"])("h1", "^CJrOU/", _statics$1);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["text"])("Melody is a fast and memory efficient library for creating highly dynamic user interfaces");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementClose"])("h1");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementOpen"])("div", "hwY6Y!M", _statics$4);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementOpen"])("button", "$Dwf0YU", _statics$2);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["text"])(" Download ");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementClose"])("button");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementOpen"])("button", "%ULrw[~", _statics$3);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["text"])("Github");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementClose"])("button");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementClose"])("div");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementOpen"])("div", "ZiuA<3]", _statics$6);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementOpen"])("code", "ja'Mp=K", _statics$5);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["text"])("# Create a Melody app");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementClose"])("code");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementOpen"])("code", null, null);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["text"])("yarn create melody-app my-app");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementClose"])("code");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementClose"])("div");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementClose"])("div");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementClose"])("section");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementClose"])("div");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementOpen"])("section", "qCi71EO", _statics$29);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementOpen"])("h2", "7..^``>", _statics$10);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["text"])("In a nutshell");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementClose"])("h2");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementOpen"])("article", "rv!7b;w", _statics$13);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementOpen"])("span", "ol/._0,", _statics$11);

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__style_icons_icn_smaller_html_twig__["a" /* default */])(_context);

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementClose"])("span");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementOpen"])("p", "T^Lf'wY", _statics$12);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["text"])("Melody is small, only 15kb, making it fast for the browser to download and parse.");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementClose"])("p");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementClose"])("article");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementOpen"])("article", "qiE|WeH", _statics$16);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementOpen"])("span", "[Mpw8[v", _statics$14);

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__style_icons_icn_error_messages_html_twig__["a" /* default */])(_context);

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementClose"])("span");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementOpen"])("p", "aH1]41'", _statics$15);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["text"])("Melody's compiler supports you by giving you understandable and accurate error messages whenever it cannot make sense of a template.");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementClose"])("p");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementClose"])("article");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementOpen"])("article", "#RUbTXk", _statics$19);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementOpen"])("span", "Xm6GBD`", _statics$17);

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__style_icons_icn_battle_tested_html_twig__["a" /* default */])(_context);

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementClose"])("span");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementOpen"])("p", "qgWj;B9", _statics$18);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["text"])("Live in production to millions of trivago users worldwide.");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementClose"])("p");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementClose"])("article");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementOpen"])("article", "~iyf{$h", _statics$22);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementOpen"])("span", "I4DTO3l", _statics$20);

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__style_icons_icn_flexible_html_twig__["a" /* default */])(_context);

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementClose"])("span");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementOpen"])("p", "AwMX~|0", _statics$21);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["text"])("Melody was designed in a modular fashion from the ground up. You can change what goes in, like a different template language, and you are in control what comes out: If you need a different view layer, that's no problem.");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementClose"])("p");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementClose"])("article");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementOpen"])("article", "ofj+52+", _statics$25);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementOpen"])("span", ",!m8?Q,", _statics$23);

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__style_icons_icn_faster_html_twig__["a" /* default */])(_context);

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementClose"])("span");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementOpen"])("p", "GW}d{8(", _statics$24);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["text"])("Melody is among the fastest UI libraries out there. Because of its adaptive rendering and memory efficiency, garbage collection is kept at a minimum, giving the browser lots of time to draw smooth and responsive user interfaces.");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementClose"])("p");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementClose"])("article");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementOpen"])("article", ">jo)@`+", _statics$28);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementOpen"])("span", "+D2zyp>", _statics$26);

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__style_icons_icn_structured_html_twig__["a" /* default */])(_context);

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementClose"])("span");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementOpen"])("p", "34.vFl[", _statics$27);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["text"])("Melody provides an API (or set of functions) to enhance your views, it leverages functional programming to help you to create better structure for your applications.");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementClose"])("p");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementClose"])("article");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementClose"])("section");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementOpen"])("div", "GHLxPED", _statics$30);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["component"])(__WEBPACK_IMPORTED_MODULE_1__components_tabs_index__["a" /* default */], "BzaYw*@", {
        tabs: [{
            name: "Smaller",
            content: "Melody is smaller (x kb) than most other popular frameworks and libraries: React (40kb), Vue (18kb), Angular 2 (120kb), Glimmer (38kb)."
        }, {
            name: "Flexible",
            content: "Melody uses Twig templates as a view layer, which are compiled to a set of DOM instructions defining the structure of a UI. Although other template languages can be implemented ."
        }, {
            name: "Efficient",
            content: "Melody is among the fastest UI libraries out there, with performant and adaptive rendering out-the-box, it prioritizes and performs only necessary DOM updates (similar to React Fiber)."
        }, {
            name: "Functional",
            content: "Melody provides an API (or set of functions) to enhance your views with state, events or lifecycle methods in a more functional manner."
        }]
    });
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementClose"])("div");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["component"])(__WEBPACK_IMPORTED_MODULE_0__components_melody_in_action_index__["a" /* default */], "GGg<kmm");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementOpen"])("div", "CY2qgR~", _statics$44);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementOpen"])("section", "(lH8<Y}", _statics$43);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementOpen"])("div", ";cR*,{Q", _statics$31);

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__style_icons_icn_logo_hero_html_twig__["a" /* default */])(_context);

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementClose"])("div");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementOpen"])("div", "D~P'^y(", _statics$42);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementOpen"])("h1", "q(NE~:T", _statics$32);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["text"])("Let’s get started");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementClose"])("h1");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementOpen"])("div", "tNE>DVt", _statics$35);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementOpen"])("button", "A`8G)<;", _statics$33);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["text"])(" Download ");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementClose"])("button");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementOpen"])("button", "?_[^k+a", _statics$34);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["text"])("Github");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementClose"])("button");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementClose"])("div");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementOpen"])("p", "i)XLw*y", _statics$37);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["text"])("Check out the ");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementOpen"])("span", "zvz,n%i", _statics$36);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["text"])("5 mins tutorial");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementClose"])("span");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["text"])(" on how to build your first Melody application.");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementClose"])("p");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementOpen"])("div", "8yUrhPy", _statics$39);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementOpen"])("code", "FbO{k}P", _statics$38);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["text"])("# Create a Melody app");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementClose"])("code");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementOpen"])("code", null, null);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["text"])("yarn create melody-app my-app");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementClose"])("code");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementClose"])("div");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementOpen"])("p", "0GHj#A_", _statics$41);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["text"])("Dive deeper and read the ");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementOpen"])("span", "#lW+34+", _statics$40);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["text"])("documentation");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementClose"])("span");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementClose"])("p");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementClose"])("div");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementClose"])("section");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementClose"])("div");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_melody_idom__["elementClose"])("main");
};

if (process.env.NODE_ENV !== "production") {
    _template.displayName = "Home";
}

function Home(props) {
    return _template.render(props);
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = IcnBattleTested;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_melody_idom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_melody_idom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_melody_idom__);

const _template = {};
/* unused harmony export _template */

const _statics = ["id", "towerBalls1", "cx", "90", "cy", "122.14", "r", "10.71", "fill", "#424284"],
      _statics$1 = ["id", "towerBalls2", "cx", "90", "cy", "100.71", "r", "10.71", "fill", "#5bc6ab"],
      _statics$2 = ["id", "towerBalls3", "cx", "90", "cy", "79.29", "r", "10.71", "fill", "#424284"],
      _statics$3 = ["id", "towerBalls4", "cx", "90", "cy", "57.86", "r", "10.71", "fill", "#5bc6ab"],
      _statics$4 = ["id", "towerBalls5", "cx", "90", "cy", "36.43", "r", "10.71", "fill", "#424284"],
      _statics$5 = ["d", "M122.14,132.86H57.86a10.71,10.71,0,1,0,0,21.43h64.29a10.71,10.71,0,1,0,0-21.43Z", "fill", "#1b1464", "class", "ground"],
      _statics$6 = ["id", "battleTested", "data-name", "Layer 1", "xmlns", "http://www.w3.org/2000/svg", "width", "180", "height", "180", "viewBox", "0 0 180 180"];

_template.render = function (_context) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementOpen"])("svg", "i<J)>K~", _statics$6);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementOpen"])("title", null, null);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["text"])("Battle Tested");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementClose"])("title");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("circle", ".#Wb%8+", _statics);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("circle", "Cz@}scF", _statics$1);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("circle", "jrUc:X^", _statics$2);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("circle", ",-j{/ii", _statics$3);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("circle", "001!;(G", _statics$4);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("path", "W!;c4q*", _statics$5);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementClose"])("svg");
};

if (process.env.NODE_ENV !== "production") {
    _template.displayName = "IcnBattleTested";
}

function IcnBattleTested(props) {
    return _template.render(props);
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = IcnClose;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_melody_idom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_melody_idom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_melody_idom__);

const _template = {};
/* unused harmony export _template */

const _statics = ["d", "M7 17L17 7M17 17L7 7"],
      _statics$1 = ["fill", "#FFF", "stroke", "#FFF", "stroke-width", "2", "stroke-linecap", "round", "stroke-miterlimit", "10"],
      _statics$2 = ["baseProfile", "tiny", "xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24"];

_template.render = function (_context) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementOpen"])("svg", ",ewI*DB", _statics$2);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementOpen"])("g", "s4]tx?s", _statics$1);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("path", "R+RG$u+", _statics);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementClose"])("g");
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementClose"])("svg");
};

if (process.env.NODE_ENV !== "production") {
    _template.displayName = "IcnClose";
}

function IcnClose(props) {
    return _template.render(props);
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = IcnErrorMessages;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_melody_idom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_melody_idom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_melody_idom__);

const _template = {};
/* unused harmony export _template */

const _statics = ["id", "errorLine1", "d", "M138.21,20.39v0H84.64a5.36,5.36,0,0,0,0,10.71h53.57v0c.07,0,.13,0,.2,0a5.34,5.34,0,0,0-.2-10.68Z", "fill", "#fff"],
      _statics$1 = ["id", "errorLine2", "d", "M116.79,52.5H84.64a5.36,5.36,0,1,0,0,10.71h32.14a5.36,5.36,0,1,0,0-10.71Z", "fill", "#fff"],
      _statics$2 = ["id", "errorLine3", "d", "M106.07,84.64H84.64a5.36,5.36,0,0,0,0,10.71h21.43a5.36,5.36,0,1,0,0-10.71Z", "fill", "#fff"],
      _statics$3 = ["cx", "90", "cy", "148.93", "r", "10.71", "fill", "#5bc6ab"],
      _statics$4 = ["d", "M90,20.36A10.71,10.71,0,0,0,79.29,31.07v75a10.71,10.71,0,0,0,21.43,0v-75A10.71,10.71,0,0,0,90,20.36Z", "fill", "#424284"],
      _statics$5 = ["id", "errorExclamation"],
      _statics$6 = ["id", "error", "data-name", "Layer 1", "xmlns", "http://www.w3.org/2000/svg", "width", "180", "height", "180", "viewBox", "0 0 180 180"];

_template.render = function (_context) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementOpen"])("svg", "Z(P?wv8", _statics$6);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementOpen"])("title", null, null);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["text"])("Error messages");
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementClose"])("title");
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("path", "hk.ln:4", _statics);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("path", ">6h$a@}", _statics$1);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("path", "m{C10%3", _statics$2);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementOpen"])("g", "[5<fgkX", _statics$5);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("circle", "7u*a?-B", _statics$3);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("path", "V=$g1sQ", _statics$4);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementClose"])("g");
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementClose"])("svg");
};

if (process.env.NODE_ENV !== "production") {
  _template.displayName = "IcnErrorMessages";
}

function IcnErrorMessages(props) {
  return _template.render(props);
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = IcnFaster;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_melody_idom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_melody_idom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_melody_idom__);

const _template = {};
/* unused harmony export _template */

const _statics = ["cx", "154.29", "cy", "122.14", "r", "10.71", "fill", "#5bc6ab"],
      _statics$1 = ["cx", "90", "cy", "57.86", "r", "10.71", "fill", "#5bc6ab"],
      _statics$2 = ["cx", "25.71", "cy", "122.14", "r", "10.71", "fill", "#5bc6ab"],
      _statics$3 = ["cx", "135.46", "cy", "76.69", "r", "10.71", "transform", "translate(-14.55 118.24) rotate(-45)", "fill", "#5bc6ab"],
      _statics$4 = ["cx", "44.54", "cy", "76.69", "r", "10.71", "transform", "translate(-41.18 53.96) rotate(-45)", "fill", "#5bc6ab"],
      _statics$5 = ["id", "speedBar", "d", "M90.29,111.43H26a10.71,10.71,0,0,0,0,21.43H90.29a10.71,10.71,0,0,0,0-21.43Z", "fill", "#424284"],
      _statics$6 = ["id", "speed", "data-name", "Layer 1", "xmlns", "http://www.w3.org/2000/svg", "width", "180", "height", "180", "viewBox", "0 0 180 180"];

_template.render = function (_context) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementOpen"])("svg", "uSiD>8D", _statics$6);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementOpen"])("title", null, null);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["text"])("Faster");
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementClose"])("title");
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("circle", "=dNJy_%", _statics);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("circle", "+97rVPp", _statics$1);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("circle", "1B<bCs#", _statics$2);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("circle", "/=s0W7i", _statics$3);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("circle", "F}ct(]b", _statics$4);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("path", "z/2N'`z", _statics$5);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementClose"])("svg");
};

if (process.env.NODE_ENV !== "production") {
  _template.displayName = "IcnFaster";
}

function IcnFaster(props) {
  return _template.render(props);
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = IcnFlexible;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_melody_idom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_melody_idom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_melody_idom__);

const _template = {};
/* unused harmony export _template */

const _statics = ["class", "flexibleDissapear", "d", "M122.14,143.57H57.86a10.71,10.71,0,1,0,0,21.43h64.29a10.71,10.71,0,1,0,0-21.43Z", "fill", "#424284"],
      _statics$1 = ["class", "flexibleDissapear", "d", "M122.14,15H57.86a10.71,10.71,0,1,0,0,21.43h64.29a10.71,10.71,0,1,0,0-21.43Z", "fill", "#424284"],
      _statics$2 = ["id", "flexibleTopRightBall", "cx", "154.29", "cy", "25.71", "r", "10.71", "fill", "#5bc6ab"],
      _statics$3 = ["id", "flexibleTopLeftBall", "cx", "25.71", "cy", "25.71", "r", "10.71", "fill", "#5bc6ab"],
      _statics$4 = ["id", "flexibleBottomLeftBall", "cx", "25.71", "cy", "154.29", "r", "10.71", "fill", "#5bc6ab"],
      _statics$5 = ["id", "flexibleBottomRightBall", "cx", "154.29", "cy", "154.29", "r", "10.71", "fill", "#5bc6ab"],
      _statics$6 = ["id", "flexibleLeftBar", "d", "M25.71,47.14A10.71,10.71,0,0,0,15,57.86v64.29a10.71,10.71,0,1,0,21.43,0V57.86A10.71,10.71,0,0,0,25.71,47.14Z", "fill", "#1b1464"],
      _statics$7 = ["id", "flexibleRightBar", "d", "M154.29,47.14a10.71,10.71,0,0,0-10.71,10.71v64.29a10.71,10.71,0,1,0,21.43,0V57.86A10.71,10.71,0,0,0,154.29,47.14Z", "fill", "#1b1464"],
      _statics$8 = ["id", "flexible", "data-name", "Layer 1", "xmlns", "http://www.w3.org/2000/svg", "width", "180", "height", "180", "viewBox", "0 0 180 180"];

_template.render = function (_context) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementOpen"])("svg", "iqu8'(D", _statics$8);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementOpen"])("title", null, null);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["text"])("Flexible");
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementClose"])("title");
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("path", "~Hkm,Fk", _statics);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("path", "]@:oHD_", _statics$1);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("circle", "nR38'9Y", _statics$2);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("circle", "i)hA3qZ", _statics$3);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("circle", "K]J3?@g", _statics$4);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("circle", "xs]0S@y", _statics$5);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("path", "'hTasL8", _statics$6);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("path", "o-_<CF/", _statics$7);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementClose"])("svg");
};

if (process.env.NODE_ENV !== "production") {
  _template.displayName = "IcnFlexible";
}

function IcnFlexible(props) {
  return _template.render(props);
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = IcnHamburger;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_melody_idom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_melody_idom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_melody_idom__);

const _template = {};
/* unused harmony export _template */

const _statics = ["d", "M20.47 12H3.53a.5.5 0 1 0 0 1h16.94a.5.5 0 1 0 0-1zM20.47 18H3.53a.5.5 0 1 0 0 1h16.94a.5.5 0 1 0 0-1zM3.53 7h16.94a.5.5 0 1 0 0-1H3.53a.5.5 0 1 0 0 1z", "fill", "#ffffff"],
      _statics$1 = ["xmlns", "http://www.w3.org/2000/svg", "focusable", "false", "tabindex", "-1", "width", "24", "height", "24", "viewBox", "0 0 24 24"];

_template.render = function (_context) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementOpen"])("svg", "m%u:n9!", _statics$1);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("path", "7EMLV+L", _statics);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementClose"])("svg");
};

if (process.env.NODE_ENV !== "production") {
    _template.displayName = "IcnHamburger";
}

function IcnHamburger(props) {
    return _template.render(props);
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = IcnLogoHeader;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_melody_idom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_melody_idom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_melody_idom__);

const _template = {};
/* unused harmony export _template */

const _statics = ["d", "M19.51 9.78A9.52 9.52 0 0 0 2.77 3.59a10.77 10.77 0 0 1 5.5-.3 10.73 10.73 0 0 1 8.08 13.57 9.49 9.49 0 0 0 3.16-7.08z", "fill", "#272361"],
      _statics$1 = ["d", "M8.28 3.28a10.77 10.77 0 0 0-5.5.3 9.52 9.52 0 0 0 13.58 13.28A10.73 10.73 0 0 0 8.28 3.28z", "fill", "#6eceb2"],
      _statics$2 = ["cx", "9.78", "cy", "6.28", "r", "3.22", "fill", "#fff"],
      _statics$3 = ["cx", "9.31", "cy", "6.75", "r", "1.07", "fill", "#272361"],
      _statics$4 = ["cx", "14.9", "cy", "10.21", "r", "2.14", "fill", "#fff"],
      _statics$5 = ["cx", "14.43", "cy", "10.21", "r", ".71", "fill", "#272361"],
      _statics$6 = ["d", "M45.61 1.54v16.28a1.55 1.55 0 0 1-1.54 1.52 1.51 1.51 0 0 1-1.52-1.52V6.2l-4 5.52a1.51 1.51 0 0 1-1.24.64h-.06a1.55 1.55 0 0 1-1.25-.64l-3.94-5.51v11.61a1.53 1.53 0 0 1-3.06 0V1.54A1.53 1.53 0 0 1 30.51 0h.08a1.49 1.49 0 0 1 1.21.63l5.5 7.64L42.79.66A1.5 1.5 0 0 1 44 0a1.57 1.57 0 0 1 1.61 1.54zM49.19 12.43a6.83 6.83 0 0 1 6.73-6.9 6.6 6.6 0 0 1 6.65 6.4 2 2 0 0 1 0 .39 1.33 1.33 0 0 1-1.43 1.1h-8.81a3.61 3.61 0 0 0 .94 1.82 4.27 4.27 0 0 0 2.65 1.24 4.51 4.51 0 0 0 2.87-.69 1.56 1.56 0 0 1 2.07-.08 1.26 1.26 0 0 1 0 1.79 7 7 0 0 1-4.94 1.82 6.85 6.85 0 0 1-6.73-6.89zm3-1.35H60a4.51 4.51 0 0 0-4.08-2.92 3.86 3.86 0 0 0-3.72 2.92zM68.13 0a1.54 1.54 0 0 1 1.55 1.52v16.29a1.53 1.53 0 0 1-3.06 0V1.53A1.53 1.53 0 0 1 68.13 0zM74.94 17.31A6.88 6.88 0 0 1 73 12.45a7.12 7.12 0 0 1 1.9-4.83 6.44 6.44 0 0 1 4.74-2.1 6.1 6.1 0 0 1 4.61 2.1 6.89 6.89 0 0 1 1.93 4.83 6.68 6.68 0 0 1-1.93 4.86 6.1 6.1 0 0 1-4.61 2.1 6.44 6.44 0 0 1-4.7-2.1zM76 12.45a4.46 4.46 0 0 0 1 2.92 3.73 3.73 0 0 0 2.65 1 3.61 3.61 0 0 0 2.54-1 4.24 4.24 0 0 0 1.08-2.93 4.15 4.15 0 0 0-1.08-2.87 3.9 3.9 0 0 0-2.54-1 4 4 0 0 0-2.65 1 4.36 4.36 0 0 0-1 2.88zM102.93 17.82a1.49 1.49 0 0 1-3 .3 6.73 6.73 0 0 1-3.75 1.19 6.82 6.82 0 0 1-6.71-6.87 6.83 6.83 0 0 1 6.7-6.93 6.53 6.53 0 0 1 3.7 1.16V1.49a1.5 1.5 0 0 1 3 0v16.33zm-6.71-9.3a3.57 3.57 0 0 0-2.59 1.13 4 4 0 0 0 0 5.52 3.57 3.57 0 0 0 2.59 1.13 3.53 3.53 0 0 0 2.59-1.13 4 4 0 0 0 0-5.52 3.53 3.53 0 0 0-2.59-1.12zM118.52 7v10.4a6.52 6.52 0 0 1-9.43 5.91 1.44 1.44 0 0 1-.72-2 1.52 1.52 0 0 1 2-.61 3.69 3.69 0 0 0 1.6.39 3.65 3.65 0 0 0 3.45-2.51 5.36 5.36 0 0 1-2.62.66 5.8 5.8 0 0 1-5.8-5.75V7a1.47 1.47 0 0 1 1.43-1.46A1.42 1.42 0 0 1 109.88 7v6.51a2.86 2.86 0 0 0 5.71 0V7A1.41 1.41 0 0 1 117 5.51 1.48 1.48 0 0 1 118.52 7z", "fill", "#6eceb2"],
      _statics$7 = ["xmlns", "http://www.w3.org/2000/svg", "width", "119", "height", "24", "viewBox", "0 0 119 24"];

_template.render = function (_context) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementOpen"])("svg", "y:v^Xpk", _statics$7);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("path", "N,mf|D!", _statics);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("path", "~-L.up,", _statics$1);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("circle", "Z:.<$F+", _statics$2);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("circle", "s[44|[{", _statics$3);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("circle", "o*idMUe", _statics$4);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("circle", "E%,-#~4", _statics$5);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("path", "]-Lk9D'", _statics$6);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementClose"])("svg");
};

if (process.env.NODE_ENV !== "production") {
    _template.displayName = "IcnLogoHeader";
}

function IcnLogoHeader(props) {
    return _template.render(props);
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = IcnLogoHero;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_melody_idom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_melody_idom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_melody_idom__);

const _template = {};
/* unused harmony export _template */

const _statics = ["cx", "135", "cy", "135", "r", "135", "fill", "#272361"],
      _statics$1 = ["d", "M146.14 87.94a45 45 0 0 0-53.24 53.23L48.08 186a9 9 0 1 0 3.38 3l42.79-42.79a45 45 0 0 0 9.34 16l-24.05 24.03a9 9 0 1 0 3.19 3.18l24.05-24.05a45 45 0 0 0 16 9.34l-11.43 11.43a9 9 0 1 0 3.26 3.1l13.18-13.18a45 45 0 0 0 18.35-88.12z", "fill", "#6eceb2"],
      _statics$2 = ["cx", "152.46", "cy", "100.5", "r", "13.5", "fill", "#fff"],
      _statics$3 = ["cx", "150.46", "cy", "102.5", "r", "4.5", "fill", "#272361"],
      _statics$4 = ["cx", "173.96", "cy", "117", "r", "9", "fill", "#fff"],
      _statics$5 = ["cx", "171.96", "cy", "117", "r", "3", "fill", "#272361"],
      _statics$6 = ["d", "M140.2 34.39a4.45 4.45 0 0 1 0 6.36 4.62 4.62 0 0 1-6.47 0 4.45 4.45 0 0 1 0-6.36 4.62 4.62 0 0 1 6.47 0zM73.94 62.38a4.45 4.45 0 0 1 0 6.36 4.62 4.62 0 0 1-6.47 0 4.45 4.45 0 0 1 0-6.36 4.62 4.62 0 0 1 6.47 0zM206.45 62.38a4.45 4.45 0 0 1 0 6.36 4.62 4.62 0 0 1-6.47 0 4.45 4.45 0 0 1 0-6.36 4.62 4.62 0 0 1 6.47 0zM234.45 128.64a4.45 4.45 0 0 1 0 6.36 4.62 4.62 0 0 1-6.47 0 4.45 4.45 0 0 1 0-6.36 4.62 4.62 0 0 1 6.47 0zM200 201.62a4.45 4.45 0 0 1 0-6.36 4.62 4.62 0 0 1 6.47 0 4.45 4.45 0 0 1 0 6.36 4.62 4.62 0 0 1-6.47 0z", "fill", "#6eceb2"],
      _statics$7 = ["xmlns", "http://www.w3.org/2000/svg", "width", "270", "height", "270", "viewBox", "0 0 270 270"];

_template.render = function (_context) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementOpen"])("svg", "?J)0F'[", _statics$7);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("circle", "ta(fkMU", _statics);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("path", "!VY9uRK", _statics$1);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("circle", "k06?|{2", _statics$2);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("circle", ">(E%*J1", _statics$3);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("circle", "nT_b[D#", _statics$4);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("circle", "rF~%O/~", _statics$5);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("path", "rVVAE/!", _statics$6);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementClose"])("svg");
};

if (process.env.NODE_ENV !== "production") {
    _template.displayName = "IcnLogoHero";
}

function IcnLogoHero(props) {
    return _template.render(props);
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = IcnSmaller;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_melody_idom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_melody_idom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_melody_idom__);

const _template = {};
/* unused harmony export _template */

const _statics = ["id", "smallBar1", "d", "M15,32.63V147.37a10.75,10.75,0,0,0,10.33,10.88A10.5,10.5,0,0,0,36,147.75V32.25a10.5,10.5,0,0,0-10.67-10.5A10.75,10.75,0,0,0,15,32.63Z", "fill", "#fff"],
      _statics$1 = ["id", "smallBar2", "id", "smallBar2", "d", "M80,75.06V147.8a10.75,10.75,0,0,0,10.33,10.88A10.5,10.5,0,0,0,101,148.18V74.68a10.5,10.5,0,0,0-10.67-10.5A10.75,10.75,0,0,0,80,75.06Z", "fill", "#fff"],
      _statics$2 = ["id", "smallBar3", "d", "M144,125.86v21.88a10.69,10.69,0,0,0,8.78,10.66A10.51,10.51,0,0,0,165,148V125.57a10.51,10.51,0,0,0-12.22-10.36A10.69,10.69,0,0,0,144,125.86Z", "fill", "#fff"],
      _statics$3 = ["class", "smallBalls", "cx", "154.5", "cy", "90", "r", "10.5", "fill", "#5bc6ab"],
      _statics$4 = ["class", "smallBalls", "cx", "90.5", "cy", "90", "r", "10.5", "fill", "#424284"],
      _statics$5 = ["class", "smallBalls", "cx", "25.5", "cy", "90", "r", "10.5", "fill", "#1b1464"],
      _statics$6 = ["id", "small", "data-name", "Layer 1", "xmlns", "http://www.w3.org/2000/svg", "width", "180", "height", "180", "viewBox", "0 0 180 180"];

_template.render = function (_context) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementOpen"])("svg", "xYQ:gmT", _statics$6);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementOpen"])("title", null, null);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["text"])("Small");
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementClose"])("title");
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("path", "qlN36;?", _statics);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("path", ">[Y]WX+", _statics$1);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("path", "0W?4NC)", _statics$2);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("circle", "C?jJLC5", _statics$3);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("circle", "V2!30!j", _statics$4);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("circle", ".RPc(re", _statics$5);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementClose"])("svg");
};

if (process.env.NODE_ENV !== "production") {
  _template.displayName = "IcnSmaller";
}

function IcnSmaller(props) {
  return _template.render(props);
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = IcnStructured;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_melody_idom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_melody_idom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_melody_idom__);

const _template = {};
/* unused harmony export _template */

const _statics = ["id", "structuredBall3", "cx", "38.21", "cy", "77.14", "r", "10.71", "transform", "translate(-43.36 49.62) rotate(-45)", "fill", "#5bc6ab"],
      _statics$1 = ["id", "structuredBall2", "cx", "118.21", "cy", "40", "r", "10.71", "transform", "translate(6.34 95.31) rotate(-45)", "fill", "#5bc6ab"],
      _statics$2 = ["id", "structuredBall1", "cx", "128.21", "cy", "152.86", "r", "10.71", "transform", "translate(-70.53 135.43) rotate(-45)", "fill", "#5bc6ab"],
      _statics$3 = ["id", "structuredBar3", "d", "M114.23,72.3,68.78,26.84A10.71,10.71,0,0,0,53.62,42L99.08,87.45A10.71,10.71,0,0,0,114.23,72.3Z", "fill", "#1b1464"],
      _statics$4 = ["id", "structuredBar2", "d", "M139.08,79.7,93.62,125.15a10.71,10.71,0,0,0,15.15,15.15l45.46-45.46A10.71,10.71,0,1,0,139.08,79.7Z", "fill", "#424284"],
      _statics$5 = ["id", "structuredBar1", "d", "M69.08,102.55,23.62,148a10.71,10.71,0,0,0,15.15,15.15L84.23,117.7a10.71,10.71,0,0,0-15.15-15.15Z", "fill", "#1b1464"],
      _statics$6 = ["id", "structured", "data-name", "Layer 1", "xmlns", "http://www.w3.org/2000/svg", "width", "180", "height", "180", "viewBox", "0 0 180 180"];

_template.render = function (_context) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementOpen"])("svg", "-QL{3B?", _statics$6);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementOpen"])("title", null, null);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["text"])("Structured");
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementClose"])("title");
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("circle", "uS2?Pp]", _statics);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("circle", "2S%8WFZ", _statics$1);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("circle", ".Y=dqw.", _statics$2);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("path", "FubO'MH", _statics$3);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("path", "53GOj@|", _statics$4);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementVoid"])("path", "{(}o?~=", _statics$5);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_idom__["elementClose"])("svg");
};

if (process.env.NODE_ENV !== "production") {
  _template.displayName = "IcnStructured";
}

function IcnStructured(props) {
  return _template.render(props);
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(26),
    root = __webpack_require__(5);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(71),
    isArguments = __webpack_require__(31),
    isArray = __webpack_require__(8),
    isBuffer = __webpack_require__(101),
    isIndex = __webpack_require__(27),
    isTypedArray = __webpack_require__(103);

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
/* 63 */
/***/ (function(module, exports) {

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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(19),
    eq = __webpack_require__(13);

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
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(63),
    isFlattenable = __webpack_require__(82);

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
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(7),
    isObjectLike = __webpack_require__(6);

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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(33),
    isMasked = __webpack_require__(85),
    isObject = __webpack_require__(3),
    toSource = __webpack_require__(93);

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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(7),
    isLength = __webpack_require__(34),
    isObjectLike = __webpack_require__(6);

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
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3),
    isPrototype = __webpack_require__(86),
    nativeKeysIn = __webpack_require__(88);

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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(96),
    defineProperty = __webpack_require__(22),
    identity = __webpack_require__(30);

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
/* 71 */
/***/ (function(module, exports) {

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
/* 72 */
/***/ (function(module, exports) {

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
/* 73 */
/***/ (function(module, exports) {

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
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(64),
    baseAssignValue = __webpack_require__(19);

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
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(5);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(21),
    isIterateeCall = __webpack_require__(83);

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
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var LodashWrapper = __webpack_require__(10),
    flatRest = __webpack_require__(79),
    getData = __webpack_require__(24),
    getFuncName = __webpack_require__(25),
    isArray = __webpack_require__(8),
    isLaziable = __webpack_require__(84);

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
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(13);

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
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var flatten = __webpack_require__(99),
    overRest = __webpack_require__(28),
    setToString = __webpack_require__(29);

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
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(11);

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
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

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
/* 81 */
/***/ (function(module, exports) {

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
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(11),
    isArguments = __webpack_require__(31),
    isArray = __webpack_require__(8);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

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
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(13),
    isArrayLike = __webpack_require__(32),
    isIndex = __webpack_require__(27),
    isObject = __webpack_require__(3);

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
  var type = typeof index;
  if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__(9),
    getData = __webpack_require__(24),
    getFuncName = __webpack_require__(25),
    lodash = __webpack_require__(109);

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
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(75);

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
/* 86 */
/***/ (function(module, exports) {

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
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var WeakMap = __webpack_require__(61);

/** Used to store function metadata. */
var metaMap = WeakMap && new WeakMap();

module.exports = metaMap;

/***/ }),
/* 88 */
/***/ (function(module, exports) {

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
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(23);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)(module)))

/***/ }),
/* 90 */
/***/ (function(module, exports) {

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
/* 91 */
/***/ (function(module, exports) {

/** Used to lookup unminified function names. */
var realNames = {};

module.exports = realNames;

/***/ }),
/* 92 */
/***/ (function(module, exports) {

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
/* 93 */
/***/ (function(module, exports) {

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
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__(9),
    LodashWrapper = __webpack_require__(10),
    copyArray = __webpack_require__(73);

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
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(74),
    createAssigner = __webpack_require__(76),
    keysIn = __webpack_require__(104);

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
/* 96 */
/***/ (function(module, exports) {

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
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3),
    now = __webpack_require__(106),
    toNumber = __webpack_require__(108);

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
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(18),
    assignInWith = __webpack_require__(95),
    baseRest = __webpack_require__(21),
    customDefaultsAssignIn = __webpack_require__(78);

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
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(65);

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
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var createFlow = __webpack_require__(77);

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
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(5),
    stubFalse = __webpack_require__(107);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)(module)))

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(7),
    isObjectLike = __webpack_require__(6);

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
    return typeof value == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
}

module.exports = isSymbol;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(68),
    baseUnary = __webpack_require__(72),
    nodeUtil = __webpack_require__(89);

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
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(62),
    baseKeysIn = __webpack_require__(69),
    isArrayLike = __webpack_require__(32);

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
/* 105 */
/***/ (function(module, exports) {

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
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(5);

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
var now = function () {
  return root.Date.now();
};

module.exports = now;

/***/ }),
/* 107 */
/***/ (function(module, exports) {

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
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3),
    isSymbol = __webpack_require__(102);

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
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__(9),
    LodashWrapper = __webpack_require__(10),
    baseLodash = __webpack_require__(12),
    isArray = __webpack_require__(8),
    isObjectLike = __webpack_require__(6),
    wrapperClone = __webpack_require__(94);

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
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var melodyComponent = __webpack_require__(2);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
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
/* 111 */
/***/ (function(module, exports) {

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
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_melody_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_melody_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_melody_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_melody_hoc__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_melody_hoc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_melody_hoc__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_twig__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highlight_js_lib_highlight__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highlight_js_lib_highlight___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_highlight_js_lib_highlight__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highlight_js_lib_languages_javascript__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highlight_js_lib_languages_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_highlight_js_lib_languages_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_highlight_js_lib_languages_json__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_highlight_js_lib_languages_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_highlight_js_lib_languages_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_highlight_js_lib_languages_xml__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_highlight_js_lib_languages_xml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_highlight_js_lib_languages_xml__);









const LANGUAGES = { javascript: __WEBPACK_IMPORTED_MODULE_4_highlight_js_lib_languages_javascript___default.a, json: __WEBPACK_IMPORTED_MODULE_5_highlight_js_lib_languages_json___default.a, xml: __WEBPACK_IMPORTED_MODULE_6_highlight_js_lib_languages_xml___default.a };
Object.keys(LANGUAGES).forEach(key => __WEBPACK_IMPORTED_MODULE_3_highlight_js_lib_highlight___default.a.registerLanguage(key, LANGUAGES[key]));

const enhance = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_melody_hoc__["lifecycle"])({
  componentDidMount() {
    __WEBPACK_IMPORTED_MODULE_3_highlight_js_lib_highlight___default.a.initHighlighting();
  }
});

const component = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_component__["createComponent"])(__WEBPACK_IMPORTED_MODULE_2__index_twig__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (enhance(component));

/***/ }),
/* 113 */,
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_melody_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_melody_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_melody_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_melody_hoc__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_melody_hoc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_melody_hoc__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_twig__ = __webpack_require__(47);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





const initialState = {
  tabs: [],
  activeTab: null
};

const stateReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case __WEBPACK_IMPORTED_MODULE_0_melody_component__["RECEIVE_PROPS"]:
      {
        return _extends({}, state, payload, {
          activeTab: state.activeTab || payload.tabs && payload.tabs[0]
        });
      }

    case 'CHANGE_TAB':
      {
        return _extends({}, state, {
          activeTab: payload
        });
      }
  }
  return state;
};

const enhance = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_melody_hoc__["withHandlers"])({
  onClick: ({ getState, dispatch }) => event => {
    const tabName = event.target.innerText;
    const { tabs } = getState();
    const tab = tabs.find(t => t.name == tabName);
    if (tab) {
      dispatch({ type: 'CHANGE_TAB', payload: tab });
    }
  }
});

const component = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_component__["createComponent"])(__WEBPACK_IMPORTED_MODULE_2__index_twig__["a" /* default */], stateReducer);

/* harmony default export */ __webpack_exports__["a"] = (enhance(component));

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_melody_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_melody_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_melody_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_melody_hoc__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_melody_hoc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_melody_hoc__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TodoList_twig__ = __webpack_require__(48);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





const stateReducer = (state = { todos: ['Read docs'], text: '' }, { type, payload }) => {
  switch (type) {
    case __WEBPACK_IMPORTED_MODULE_0_melody_component__["RECEIVE_PROPS"]:
      return _extends({}, state, payload);
    case 'TEXT_CHANGE':
      return _extends({}, state, { text: payload });
    case 'ADD_TODO':
      const { todos, text } = state;
      return _extends({}, state, { todos: todos.concat(text), text: '' });
  }
  return state;
};

const enhance = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_melody_hoc__["bindEvents"])({
  form: {
    submit(event, { dispatch, getState }) {
      event.preventDefault();
      if (getState().text == '') return;
      dispatch({ type: 'ADD_TODO' });
    }
  },
  input: {
    input(event, { dispatch }) {
      dispatch({ type: 'TEXT_CHANGE', payload: event.target.value });
    }
  }
});

/* harmony default export */ __webpack_exports__["a"] = (enhance(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_component__["createComponent"])(__WEBPACK_IMPORTED_MODULE_2__TodoList_twig__["a" /* default */], stateReducer)));

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_melody_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_melody_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_melody_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_melody_devtools__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_melody_devtools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_melody_devtools__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_router__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_wicg_focus_ring__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_wicg_focus_ring___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_wicg_focus_ring__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_serviceworker__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_serviceworker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_serviceworker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_scss__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__base_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_documentation__ = __webpack_require__(41);











__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_melody_devtools__["initDevTools"])();

const Router = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__components_router__["a" /* default */])({
    ['/']: __WEBPACK_IMPORTED_MODULE_6__pages_home__["a" /* default */],
    ['/documentation']: __WEBPACK_IMPORTED_MODULE_7__pages_documentation__["a" /* default */]
});

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_melody_component__["render"])(document.getElementById('root'), Router);

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var TAGS = {
	'': ['<em>', '</em>'],
	_: ['<strong>', '</strong>'],
	'\n': ['<br /><br />'],
	' ': ['<br />'],
	'-': ['<hr />']
};

/** Outdent a string based on the first indented line's leading whitespace
 *	@private
 */
function outdent(str) {
	return str.replace(RegExp('^' + (str.match(/^(\t| )+/) || '')[0], 'gm'), '');
}

/** Encode special attribute characters to HTML entities in a String.
 *	@private
 */
function encodeAttr(str) {
	return (str + '').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/** Parse Markdown into an HTML String. */
function parse(md) {
	var tokenizer = /((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^```(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:\!\[([^\]]*?)\]\(([^\)]+?)\))|(\[)|(\](?:\(([^\)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(\-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,3})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*])/gm,
	    context = [],
	    out = '',
	    last = 0,
	    links = {},
	    chunk,
	    prev,
	    token,
	    inner,
	    t;

	function tag(token) {
		var desc = TAGS[token.replace(/\*/g, '_')[1] || ''],
		    end = context[context.length - 1] == token;
		if (!desc) {
			return token;
		}
		if (!desc[1]) {
			return desc[0];
		}
		context[end ? 'pop' : 'push'](token);
		return desc[end | 0];
	}

	function flush() {
		var str = '';
		while (context.length) {
			str += tag(context[context.length - 1]);
		}
		return str;
	}

	md = md.replace(/^\[(.+?)\]:\s*(.+)$/gm, function (s, name, url) {
		links[name.toLowerCase()] = url;
		return '';
	}).replace(/^\n+|\n+$/g, '');

	while (token = tokenizer.exec(md)) {
		prev = md.substring(last, token.index);
		last = tokenizer.lastIndex;
		chunk = token[0];
		if (prev.match(/[^\\](\\\\)*\\$/)) {}
		// escaped

		// Code/Indent blocks:
		else if (token[3] || token[4]) {
				chunk = '<pre class="code ' + (token[4] ? 'poetry' : token[2].toLowerCase()) + '">' + outdent(encodeAttr(token[3] || token[4]).replace(/^\n+|\n+$/g, '')) + '</pre>';
			}
			// > Quotes, -* lists:
			else if (token[6]) {
					t = token[6];
					if (t.match(/\./)) {
						token[5] = token[5].replace(/^\d+/gm, '');
					}
					inner = parse(outdent(token[5].replace(/^\s*[>*+.-]/gm, '')));
					if (t === '>') {
						t = 'blockquote';
					} else {
						t = t.match(/\./) ? 'ol' : 'ul';
						inner = inner.replace(/^(.*)(\n|$)/gm, '<li>$1</li>');
					}
					chunk = '<' + t + '>' + inner + '</' + t + '>';
				}
				// Images:
				else if (token[8]) {
						chunk = "<img src=\"" + encodeAttr(token[8]) + "\" alt=\"" + encodeAttr(token[7]) + "\">";
					}
					// Links:
					else if (token[10]) {
							out = out.replace('<a>', "<a href=\"" + encodeAttr(token[11] || links[prev.toLowerCase()]) + "\">");
							chunk = flush() + '</a>';
						} else if (token[9]) {
							chunk = '<a>';
						}
						// Headings:
						else if (token[12] || token[14]) {
								t = 'h' + (token[14] ? token[14].length : token[13][0] === '=' ? 1 : 2);
								chunk = '<' + t + '>' + parse(token[12] || token[15]) + '</' + t + '>';
							}
							// `code`:
							else if (token[16]) {
									chunk = '<code>' + encodeAttr(token[16]) + '</code>';
								}
								// Inline formatting: *em*, **strong** & friends
								else if (token[17] || token[1]) {
										chunk = tag(token[17] || '--');
									}
		out += prev;
		out += chunk;
	}

	return (out + md.substring(last) + flush()).trim();
}

/* harmony default export */ __webpack_exports__["a"] = (parse);

/***/ })
/******/ ]);