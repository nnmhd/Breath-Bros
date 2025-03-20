// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"aryYl":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "5687d663397c74d2";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            if (err.message) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"agb61":[function(require,module,exports,__globalThis) {
var _playPauseJs = require("./playPause.js");
var _hoverJs = require("./hover.js");
var _minscontrollerJs = require("./minscontroller.js");
var _pickJs = require("./pick.js");
(0, _hoverJs.hover)();
(0, _playPauseJs.playPause)();
(0, _minscontrollerJs.minsCon)();
(0, _pickJs.pick)();
(0, _pickJs.playBreath)();
(0, _pickJs.startPractice)();
const logo = document.querySelector("#logo");
const logoFace = document.querySelector("#logo-eyes");
const button = document.querySelector("#controller");
const heart = document.querySelector("#smiley");
const heartFace = document.querySelectorAll(".heartFace");
const heartBody = document.querySelector("#heartBody");
const textReady = document.querySelector(".textbox-1");
const textBreathIn = document.querySelector(".textbox-2");
const textBreathOut = document.querySelector(".textbox-3");
const controllerBox = document.querySelector("#controller");
const playPauseDisplay = document.querySelector("#playStop");

},{"./playPause.js":"88LQD","./hover.js":"jKMBw","./minscontroller.js":"gezEa","./pick.js":"a7uWT"}],"88LQD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "playPause", ()=>playPause);
function playPause() {}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"jKMBw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hover", ()=>hover);
function hover() {}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gezEa":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "minsCon", ()=>minsCon);
function minsCon() {
    window.increaseValue = function increaseValue() {
        let input = document.querySelector("#custom-number");
        if (parseInt(input.value) < parseInt(input.max)) input.value = parseInt(input.value) + 1;
    };
    window.decreaseValue = function decreaseValue() {
        let input = document.querySelector("#custom-number");
        if (parseInt(input.value) > parseInt(input.min)) input.value = parseInt(input.value) - 1;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"a7uWT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pick", ()=>pick);
parcelHelpers.export(exports, "playBreath", ()=>playBreath);
parcelHelpers.export(exports, "startPractice", ()=>startPractice);
var _breathJs = require("./breath.js");
var _callingJs = require("./calling.js");
function pick() {
    const modeCon = document.querySelector("#modeName");
    const charBody = document.querySelector("#char path");
    const logo = document.querySelector(".logo");
    const breathData = (0, _callingJs.breathBrosData)();
    modeCon.addEventListener("click", ()=>{
        document.querySelector("#modeName ul").classList.toggle("show");
    });
    const modelist = document.querySelectorAll("#modeName ul li");
    modelist.forEach((item)=>{
        item.addEventListener("click", ()=>{
            const face = document.querySelector("#face");
            const charData = breathData[item.dataset.char];
            face.classList = [];
            charBody.setAttribute("d", charData.body);
            charBody.setAttribute("class", `st0 ${charData.standby}`);
            logo.classList.add("ready");
        });
    });
}
function playBreath() {
    return new Promise((resolve)=>{
        const breathData = (0, _callingJs.breathBrosData)();
        const modelist = document.querySelectorAll("#modeName ul li");
        modelist.forEach((item)=>{
            item.addEventListener("click", ()=>{
                document.querySelector("#modeName p").textContent = item.textContent;
                const selectedChar = item.dataset.char;
                const charData = breathData[selectedChar];
                resolve(charData);
            });
        });
    });
}
function startPractice() {
    const button = document.querySelector("#playStop");
    const controller = document.querySelector("#controller");
    const timer = document.querySelector("#custom-number");
    let charData = null;
    let breathingTimeout = null;
    const getTimerValue = ()=>parseInt(timer.value, 10) || 1;
    timer.addEventListener("input", ()=>{
        console.log(`Timer updated: ${getTimerValue()} minute(s)`);
    });
    playBreath().then((data)=>{
        if (!data || !data.charName) {
            console.warn("Pick Mode First!");
            alert("Pick Mode First!");
            return;
        }
        charData = data;
        console.log(`${charData.charName} is ready to play`);
    }).catch((error)=>{
        console.error("Pick Mode First!", error);
        alert("Pick Mode First!");
    });
    controller.addEventListener("click", ()=>{
        if (!charData) {
            console.warn("Please Pick Mode First!");
            alert("Please Pick Mode First!");
            return;
        }
        const currentTimerValue = getTimerValue();
        const timerBox = document.querySelector("#timer");
        const timerLeft = document.querySelector(".timer");
        if (!timerLeft) {
            console.warn("Timer element not found!");
            return;
        }
        console.log(`Current timer value: ${currentTimerValue} minute(s)`);
        timerLeft.style.animation = `timer ${currentTimerValue * 60000}ms linear`;
        timerBox.classList.add("timer");
        if (breathingTimeout) clearTimeout(breathingTimeout);
        if (charData.isBreathing) {
            console.log("Test: Stopping", charData.charName);
            stopBreathing(button, charData);
        } else {
            console.log("Test: Starting", charData.charName);
            startBreathing(button, charData, currentTimerValue);
        }
    });
    function startBreathing(button, charData, timerValue) {
        button.textContent = "P";
        button.style.width = "345px";
        button.style.fontSize = "10.5rem";
        charData.moveMent();
        charData.startBreathing();
        breathingTimeout = setTimeout(()=>{
            console.log("\u23F3 Timer ended. Stopping breathing...");
            stopBreathing(button, charData);
        }, timerValue * 60000);
    }
    function stopBreathing(button, charData) {
        button.textContent = "S";
        button.style.width = "100%";
        button.style.height = "100%";
        button.style.fontSize = "10rem";
        charData.stopBreathing();
        window.location.reload();
    }
}

},{"./breath.js":"1A0On","./calling.js":"84I9E","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1A0On":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Breath", ()=>Breath);
parcelHelpers.export(exports, "CharBreath", ()=>CharBreath);
class Breath {
    constructor(name, inhale, hold, exhale, holdAfterExhale = 0){
        this.name = name;
        this.inhale = inhale;
        this.hold = hold;
        this.exhale = exhale;
        this.holdAfterExhale = holdAfterExhale;
    }
    getSteps() {
        return [
            {
                phase: "inhale",
                duration: this.inhale
            },
            {
                phase: "hold",
                duration: this.hold
            },
            {
                phase: "exhale",
                duration: this.exhale
            },
            {
                phase: "hold...",
                duration: this.holdAfterExhale
            }
        ];
    }
    startBreathing(callback) {
        let steps = this.getSteps();
        let index = 0;
        this.isBreathing = true;
        const nextStep = ()=>{
            if (!this.isBreathing || index >= steps.length) return;
            let step = steps[index];
            console.log(`${this.name} - ${step.phase} for ${step.duration} seconds`);
            if (callback) callback(step.phase, step.duration);
            index++;
            if (index >= steps.length) index = 0;
            setTimeout(nextStep, step.duration * 1000);
        };
        console.log(steps);
        nextStep();
    }
    stopBreathing() {
        this.isBreathing = false;
        console.log(`${this.name} - Breathing stopped.`);
    }
}
class CharBreath extends Breath {
    constructor(charName, breathReference, move, standby, svgPath, bodyPath){
        super(breathReference.name, breathReference.inhale, breathReference.hold, breathReference.exhale, breathReference.holdAfterExhale);
        this.steps = breathReference.getSteps();
        this.charName = charName;
        this.move = move;
        this.standby = standby;
        this.svg = svgPath;
        this.body = bodyPath;
    }
    startBreathing(callback) {
        let steps = this.getSteps();
        let index = 0;
        this.isBreathing = true;
        let stepStartTime = null;
        let currentStepDuration = 0;
        const elements = {
            body: document.querySelector("#body"),
            face: document.querySelector("#face"),
            text: document.querySelector("#breathingStep"),
            Tbreath: document.querySelector(".Tbreath"),
            logo: document.querySelector("#logo"),
            logoFace: document.querySelector("#logo g rect"),
            logoMouth: document.querySelector("#logo-mouth"),
            logoBody: document.querySelector("#logo-body")
        };
        const animate = (currentTime)=>{
            if (!this.isBreathing) return;
            if (stepStartTime === null) {
                stepStartTime = currentTime;
                currentStepDuration = steps[index].duration;
                updateUI(steps[index]);
            }
            const elapsed = (currentTime - stepStartTime) / 1000;
            if (elapsed >= currentStepDuration) {
                console.log(`${this.name} - ${steps[index].phase} for ${currentStepDuration} seconds`);
                if (callback) callback(steps[index].phase, currentStepDuration);
                index = (index + 1) % steps.length;
                while(steps[index].duration === 0)index = (index + 1) % steps.length;
                stepStartTime = currentTime;
                currentStepDuration = steps[index].duration;
                updateUI(steps[index]);
            }
            requestAnimationFrame(animate);
        };
        const updateUI = (step)=>{
            const { phase, duration } = step;
            const animationStyle = `animation: ${phase} ${duration}s ease-in-out`;
            const faceAnimationStyle = `animation: face_${phase} ${duration}s ease-in-out`;
            const logoAnimationStyle = `animation: logo_${phase} ${duration}s cubic-bezier(0.65, 0.05, 0.36, 1)`;
            const textAnimationStyle = `animation: T${phase} ${duration}s ease-in-out`;
            elements.body.setAttribute("style", animationStyle);
            elements.face.setAttribute("style", faceAnimationStyle);
            elements.logo.setAttribute("style", logoAnimationStyle);
            elements.text.textContent = phase;
            elements.Tbreath.setAttribute("style", textAnimationStyle);
            console.log(phase.charAt(0).toUpperCase() + phase.slice(1));
        };
        requestAnimationFrame(animate);
    }
    stopBreathing() {
        this.isBreathing = false;
        console.log(`${this.name} - Breathing stopped.`);
    }
    moveMent() {
        const charBody = document.querySelector("#char path");
        charBody.setAttribute("class", "st0");
        charBody.classList.add(this.move);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"84I9E":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "breathBrosData", ()=>breathBrosData);
var _breathJs = require("./breath.js");
function breathBrosData() {
    const BoxBreathing = new (0, _breathJs.Breath)("Box Breathing", 4, 4, 4, 0);
    const ResonantBreathing = new (0, _breathJs.Breath)("Resonant ", 4, 0, 8, 0);
    const ButeykoBreathing = new (0, _breathJs.Breath)("Buteyko", 2, 0, 5, 5);
    const fourSevenEightBreathing = new (0, _breathJs.Breath)("Four Seven Eight", 4, 7, 8, 0);
    const cloudChar = new (0, _breathJs.CharBreath)("Cloud", fourSevenEightBreathing, "spin", "spinning", "cloudChar.svg", "M851.7,432.3c-24.1-24.1-52.9-40.6-83.4-49.6,27.5-9.4,53.4-25.1,75.4-47,76.8-76.8,76.8-201.3,0-278.1-76.8-76.8-201.3-76.8-278.1,0-38.4,38.4-57.6,88.7-57.6,139s0,.6,0,.9c0,0,0,0,0,0,0-.3,0-.6,0-.9,0-50.3-19.2-100.7-57.6-139-76.8-76.8-201.3-76.8-278.1,0s-76.8,201.3,0,278.1c24.1,24.1,52.9,40.6,83.4,49.6-27.5,9.4-53.4,25.1-75.4,47-76.8,76.8-76.8,201.3,0,278.1,76.8,76.8,201.3,76.8,278.1,0,34.1-34.1,53-77.6,56.9-122.2.5,0,1-.1,1.5-.2,3.8,44.6,22.7,88.2,56.9,122.3,76.8,76.8,201.3,76.8,278.1,0,76.8-76.8,76.8-201.3,0-278.1Z");
    const triangleChar = new (0, _breathJs.CharBreath)("Triangle", ResonantBreathing, "bloom", "spinning", "triangleChar.svg", "M896,384c0-35.5-72.2-66.7-180.6-84.2,64.3-89.1,93.3-162.2,68.2-187.3s-98.2,3.9-187.3,68.2C578.7,72.2,547.5,0,512,0s-66.7,72.2-84.2,180.6c-89.1-64.3-162.2-93.3-187.3-68.2s3.9,98.2,68.2,187.3c-108.5,17.5-180.6,48.7-180.6,84.2s72.2,66.7,180.6,84.2c-64.3,89.1-93.3,162.2-68.2,187.3s98.2-3.9,187.3-68.2c17.5,108.5,48.7,180.6,84.2,180.6s66.7-72.2,84.2-180.6c89.1,64.3,162.2,93.3,187.3,68.2s-3.9-98.2-68.2-187.3c108.5-17.5,180.6-48.7,180.6-84.2Z");
    const heartChar = new (0, _breathJs.CharBreath)("Heart", BoxBreathing, "heartBeat", "heartBeat", "heartChar.svg", "M848.3,411.7l-13,13-330,330L162.2,411.7c-91.1-91.1-91.1-238.9,0-330C207.8,36.1,267.5,13.3,327.2,13.3s119.4,22.8,165,68.3l13,13,13-13c45.6-45.6,105.3-68.3,165-68.3s119.4,22.8,165,68.3c91.1,91.1,91.1,238.9,0,330Z");
    const circleChar = new (0, _breathJs.CharBreath)("Circle", ButeykoBreathing, "bloom", "float", "circleChar.svg", "M512,17.3c202.3,0,366.7,164.4,366.7,366.7S714.3,750.7,512,750.7,145.3,586.3,145.3,384,309.7,17.3,512,17.3Z");
    return {
        cloudChar,
        triangleChar,
        heartChar,
        circleChar
    };
}

},{"./breath.js":"1A0On","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["aryYl","agb61"], "agb61", "parcelRequire94c2")

//# sourceMappingURL=Breath-Bros.397c74d2.js.map
