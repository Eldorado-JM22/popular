!function (e) {
    var t = {};

    function o(n) {
        if (t[n]) return t[n].exports;
        var r = t[n] = {i: n, l: !1, exports: {}};
        return e[n].call(r.exports, r, r.exports, o), r.l = !0, r.exports
    }

    o.m = e, o.c = t, o.d = function (e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
    }, o.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, o.t = function (e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var r in e) o.d(n, r, function (t) {
            return e[t]
        }.bind(null, r));
        return n
    }, o.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "https://yastatic.net/safeframe-bundles/", o(o.s = 62)
}([function (e, t, o) {
    "use strict";
    t.__esModule = !0, t.createStyleSheet = t.parent = t.getRect = t.getCurrentStyle = t.getIframeWindow = t.removeEventListener = t.addEventListener = t.removeFromDocument = t.appendChild = t.setStyle = t.getAttr = t.setAttr = void 0;
    var n = o(13), r = o(8), i = o(17);

    function s(e) {
        return e && (e.parentNode || e.parentElement) || null
    }

    t.setAttr = function (e, t, o) {
        e.setAttribute(t, o)
    }, t.getAttr = function (e, t) {
        return e.getAttribute(t)
    }, t.setStyle = function (e, t, o, s) {
        if (void 0 === o && (o = !0), void 0 === s && (s = {}), !o) return function (e, t, o) {
            var s = e.getAttribute("id");
            s || (s = "id" + Math.round(1e4 * Math.random()), e.setAttribute("id", s));
            var a = document.createElement("style");
            if (a.innerHTML = "#" + s + "{" + t + "}", i.setAttributes(a, o), n.isInShadowDom(e)) {
                e.parentNode.appendChild(a)
            } else {
                var u = e.ownerDocument.defaultView;
                r.getHead(u).appendChild(a)
            }
            return a
        }(e, t, s);
        e.style.cssText = t
    }, t.appendChild = function (e, t) {
        e.appendChild(t)
    }, t.removeFromDocument = function (e) {
        var t = s(e);
        t && t.removeChild(e)
    }, t.addEventListener = function (e, t, o, n) {
        void 0 === n && (n = !1), e.addEventListener ? e.addEventListener(t, o, n) : e.attachEvent("on" + t, o)
    }, t.removeEventListener = function (e, t, o) {
        e.removeEventListener ? e.removeEventListener(t, o, !1) : e.detachEvent("on" + t, o)
    }, t.getIframeWindow = function (e) {
        return e.contentWindow
    }, t.getCurrentStyle = function (e) {
        return window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle
    }, t.getRect = function (e) {
        return e.getBoundingClientRect()
    }, t.parent = s, t.createStyleSheet = function (e) {
        if (e) {
            var t = void 0;
            /\{[^\}]*}/g.test(e) ? ((t = document.createElement("style")).type = "text/css", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e))) : ((t = document.createElement("link")).type = "text/css", t.rel = "stylesheet", t.href = e), document.getElementsByTagName("head")[0].appendChild(t)
        }
    }
}, function (e, t, o) {
    "use strict";
    t.__esModule = !0, t.getFlashVersion = t.concatPath = t.toCssString = t.guid = t.shallowCopy = t.merge = t.forEachProp = t.trim = void 0;
    var n = o(12);

    function r(e, t) {
        if (e) for (var o in e) e.hasOwnProperty(o) && t(o, e[o])
    }

    function i() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        for (var o = {}, n = function (e, t) {
            o[e] = t
        }, i = 0, s = e; i < s.length; i++) r(s[i], n);
        return o
    }

    t.trim = function (e) {
        return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    }, t.forEachProp = r, t.merge = i, t.shallowCopy = function (e) {
        return i(e)
    };
    var s = 0;
    t.guid = function (e) {
        return s++, [e || "", "_", (new Date).getTime(), "_", Math.round(100 * Math.random()), "_", s].join("")
    }, t.toCssString = function (e) {
        var t = [];
        return r(e, function (e, o) {
            var n = "number" == typeof o ? o + "px" : o;
            t.push(e + ":" + n)
        }), 0 === t.length ? "" : t.join(";") + ";"
    }, t.concatPath = function (e) {
        return 0 === e.length ? "" : n.reduce(e, function (e, t) {
            return e.replace(/\/$/, "") + "/" + t.replace(/^\//, "")
        })
    }, t.getFlashVersion = function () {
        var e = navigator.plugins;
        if (0 < e.length) for (var t = 0; t < e.length; t++) if (-1 !== e[t].name.toLowerCase().indexOf("flash")) {
            var o = /\d+\.\d+/.exec(e[t].description);
            if (o) return parseFloat(o[0])
        }
        return 0
    }
}, function (e, t, o) {
    "use strict";
    t.__esModule = !0, t.checkNativeJSON = t.getNativeJSON = t.extractJSONFromIframe = void 0;
    var n, r = o(21), i = o(23), s = o(3);
    t.extractJSONFromIframe = function (e) {
        void 0 === e && (e = document.body);
        var t = r.createHiddenFriendlyIFrame(e);
        return {
            JSON: t.contentWindow.JSON, clean: function () {
                return i.removeIframe(t)
            }
        }
    }, t.getNativeJSON = function (e) {
        return void 0 === e && (e = window), void 0 === n && (n = u(e) ? e.JSON : {
            stringify: a("stringify"),
            parse: a("parse")
        }), n
    };
    var a = function (e) {
        return function (o) {
            var n = t.extractJSONFromIframe(), r = n.JSON, i = n.clean;
            try {
                return r[e](o)
            } finally {
                i()
            }
        }
    };

    function u(e) {
        return void 0 === e && (e = window), e.JSON && s.checkNativeCode(e.JSON.stringify) && s.checkNativeCode(e.JSON.parse)
    }

    t.checkNativeJSON = u
}, function (e, t, o) {
    "use strict";
    t.__esModule = !0, t.checkNativeCode = void 0, t.checkNativeCode = function (e) {
        if (!e || !e.toString) return !1;
        var t = e.toString();
        return /\[native code\]/.test(t) || /\/\* source code not available \*\//.test(t)
    }
}, function (e, t, o) {
    "use strict";
    t.__esModule = !0, t.getInternalClass = void 0;
    var n = {}.toString, r = /\[object (\w+)\]/;
    t.getInternalClass = function (e) {
        var t = n.call(e);
        if (!t) return null;
        var o = t.match(r);
        return o && o[1] || null
    }
}, function (e, t, o) {
    "use strict";

    function n(e) {
    }

    t.__esModule = !0, t.logError = t.logInfo = void 0, t.logInfo = n, t.logError = function (e) {
        var t = window;
        t.$sf && t.$sf.info && t.$sf.info.errs && t.$sf.info.errs.push && t.$sf.info.errs.push(e)
    }
}, function (e, t, o) {
    "use strict";
    t.__esModule = !0, t.resetConfig = t.notifyFailure = t.notifyEndPosRender = t.notifyStartPosRender = t.notifyPosMsg = t.notifyBeforePosMsg = t.getRenderFileURL = t.findPosConfig = t.addPosConfig = t.isConfigReady = t.Config = void 0;
    var n = o(5), r = o(1), i = o(30), s = o(31), a = o(10);

    function u() {
    }

    var d = {
        root: "/safeframe-bundles/0.83",
        cdn: "https://yastatic.net",
        renderFile: "render.html",
        query: "",
        debug: !1,
        auto: !0,
        to: 6e4,
        onBeforePosMsg: u,
        onPosMsg: u,
        onStartPosRender: u,
        onEndPosRender: u,
        onFailure: u,
        version: "1-1-0",
        positions: {}
    }, c = null;
    t.Config = function (e) {
        if (void 0 === e && (e = {}), !c) {
            if (a.status.getStatus()) return n.logError("Cannot update Config while system is busy"), null;
            (c = r.merge(d, e)).positions = {}, e.positions && r.forEachProp(e.positions, function (e, t) {
                c.positions[e] = s.PosConfig(r.merge(t, {id: e}))
            }), c.auto && i.boot()
        }
        return null === c ? null : r.shallowCopy(c)
    }, t.isConfigReady = function () {
        return null !== c
    }, t.addPosConfig = function (e) {
        c && (c.positions[e.id] = e)
    }, t.findPosConfig = function (e) {
        return c && c.positions[e] ? c.positions[e] : null
    }, t.getRenderFileURL = function (e) {
        if (void 0 === e && (e = {}), c) {
            var t = r.concatPath([c.cdn, c.root, c.version, e.protected ? "protected" : "", c.renderFile]);
            return c.query && (t += "?" + c.query), t
        }
        return null
    }, t.notifyBeforePosMsg = function (e, t, o) {
        return !!c && c.onBeforePosMsg(e, t, o)
    }, t.notifyPosMsg = function (e, t, o) {
        c && c.onPosMsg(e, t, o)
    }, t.notifyStartPosRender = function (e) {
        c && c.onStartPosRender(e)
    }, t.notifyEndPosRender = function (e) {
        c && c.onEndPosRender(e)
    }, t.notifyFailure = function (e) {
        c && c.onFailure(e)
    }, t.resetConfig = function () {
        c = null
    }
}, function (e, t, o) {
    "use strict";
    t.__esModule = !0, t.hasOwnProperty = void 0, t.hasOwnProperty = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
}, function (e, t, o) {
    "use strict";
    t.__esModule = !0, t.getHead = void 0, t.getHead = function (e) {
        var t = e.document, o = t.getElementsByTagName("head")[0];
        return o || (o = t.createElement("head"), t.documentElement.appendChild(o)), o
    }
}, function (e, t, o) {
    "use strict";
    t.__esModule = !0, t.getObjectKeys = void 0;
    var n = o(7);
    t.getObjectKeys = function (e) {
        if ("function" == typeof Object.keys) return Object.keys(e);
        var t = [];
        for (var o in e) n.hasOwnProperty(e, o) && t.push(o);
        return t
    }
}, function (e, t, o) {
    "use strict";
    t.__esModule = !0, t.status = void 0;
    var n = o(1), r = o(6), i = function () {
        function e() {
            this.reset()
        }

        return e.prototype.setPositionReady = function (e) {
            this.positions[e.id] = e, this.busyStatuses[e.id] = "ready"
        }, e.prototype.setPositionLoading = function (e, t, o, n) {
            this.busyStatuses[e] = "loading", this.iframes[e] = t, this.loadingTimeoutIds[e] = o, this.styles[e] = n, r.notifyStartPosRender(e)
        }, e.prototype.setPositionLoaded = function (e) {
            clearTimeout(this.loadingTimeoutIds[e]), delete this.busyStatuses[e], delete this.loadingTimeoutIds[e], r.notifyEndPosRender(e)
        }, e.prototype.setPositionExpanding = function (e) {
            this.busyStatuses[e] = "expanding"
        }, e.prototype.setPositionExpanded = function (e) {
            this.busyStatuses[e] = "expanded"
        }, e.prototype.setPositionCollapsing = function (e) {
            this.busyStatuses[e] = "collapsing"
        }, e.prototype.setPositionCollapsed = function (e) {
            delete this.busyStatuses[e]
        }, e.prototype.setPositionError = function (e) {
            clearTimeout(this.loadingTimeoutIds[e]), this.busyStatuses[e] = "error", delete this.iframes[e], r.notifyFailure(e)
        }, e.prototype.setPositionNuked = function (e) {
            clearTimeout(this.loadingTimeoutIds[e]), delete this.positions[e], delete this.iframes[e], delete this.busyStatuses[e], delete this.loadingTimeoutIds[e], delete this.styles[e]
        }, e.prototype.getPositionStatus = function (e) {
            return {busy: this.busyStatuses[e] || null, iframe: this.iframes[e] || null, styles: this.styles[e] || []}
        }, e.prototype.getPositionsReadyForRender = function () {
            var e = this, t = [];
            return n.forEachProp(this.busyStatuses, function (o, n) {
                "ready" === n && t.push(e.positions[o])
            }), t
        }, e.prototype.getRenderedPositions = function () {
            var e = this, t = [];
            return n.forEachProp(this.positions, function (o) {
                "ready" !== e.busyStatuses[o] && t.push(o)
            }), t
        }, e.prototype.getStatus = function (e) {
            var t = !1;
            return n.forEachProp(this.busyStatuses, function (o, n) {
                t = !0, e && (e[o] = n)
            }), t
        }, e.prototype.getPosition = function (e) {
            return this.positions[e] || null
        }, e.prototype.reset = function () {
            this.busyStatuses = {}, this.iframes = {}, this.loadingTimeoutIds = {}, this.positions = {}, this.styles = {}
        }, e
    }();
    t.status = new i
}, function (e, t, o) {
    "use strict";
    t.__esModule = !0, t.PosMeta = t.createPosMeta = void 0;
    var n = o(1);

    function r(e) {
        var t = {};
        return n.forEachProp(e, function (e, o) {
            var n = typeof o;
            "number" !== n && "string" !== n && "boolean" !== n || (t[e] = o)
        }), t
    }

    t.createPosMeta = function (e) {
        return e && e.sharedData && "string" == typeof e.ownerKey && e.privateData ? new i(e.sharedData, e.ownerKey, e.privateData) : null
    };
    var i = function () {
        function e(e, t, o) {
            this.sharedData = r(e), this.ownerKey = t, this.privateData = r(o)
        }

        return e.prototype.value = function (e, t) {
            return e in this.sharedData ? this.sharedData[e] : t === this.ownerKey && e in this.privateData ? this.privateData[e] : void 0
        }, e.prototype.getFullMeta = function () {
            return {sharedData: this.sharedData, ownerKey: this.ownerKey, privateData: this.privateData}
        }, e
    }();
    t.PosMeta = i
}, function (e, t, o) {
    "use strict";
    t.__esModule = !0, t.reduce = void 0, t.reduce = function (e, t, o) {
        var n = 0;
        for (arguments.length < 3 && (n = 1, o = e[0]); n < e.length; n++) o = t(o, e[n], n, e);
        return o
    }
}, function (e, t, o) {
    "use strict";
    t.__esModule = !0, t.isInShadowDom = void 0;
    var n = o(14).hasShadowDomSupport();
    t.isInShadowDom = function (e) {
        if (!n) return !1;
        for (var t = e; t;) {
            if (t instanceof window.ShadowRoot) return !0;
            t = t.parentNode
        }
        return !1
    }
}, function (e, t, o) {
    "use strict";
    t.__esModule = !0, t.hasShadowDomSupport = void 0;
    var n = o(15), r = o(16);
    t.hasShadowDomSupport = function (e) {
        void 0 === e && (e = window);
        try {
            var t = e.document;
            if (!Boolean(t.body.attachShadow)) return !1;
            var o = t.createElement("div"), i = n.attachShadow(o, {mode: "open"});
            return r.isShadowRoot(i)
        } catch (e) {
            return !1
        }
    }
}, function (e, t, o) {
    "use strict";
    t.__esModule = !0, t.attachShadow = void 0;
    var n = o(3);
    t.attachShadow = function (e, t) {
        try {
            if (n.checkNativeCode(e.attachShadow)) return e.attachShadow(t);
            if (n.checkNativeCode(e.createShadowRoot)) return e.createShadowRoot();
            if (n.checkNativeCode(e.webkitCreateShadowRoot)) return e.webkitCreateShadowRoot()
        } catch (e) {
        }
        return null
    }
}, function (e, t, o) {
    "use strict";
    t.__esModule = !0, t.isShadowRoot = void 0;
    var n = o(4);
    t.isShadowRoot = function (e) {
        return !!e && "ShadowRoot" === n.getInternalClass(e)
    }
}, function (e, t, o) {
    "use strict";
    t.__esModule = !0, t.setAttributes = void 0;
    var n = o(9);
    t.setAttributes = function (e, t) {
        n.getObjectKeys(t).forEach(function (o) {
            var n = t[o];
            null === n ? e.removeAttribute(o) : e.setAttribute(o, n)
        })
    }
}, function (e, t, o) {
    "use strict";
    t.__esModule = !0, t.onDocumentReady = void 0;
    var n = o(0);

    function r() {
        return "complete" === document.readyState || "interactive" === document.readyState && !document.documentElement.doScroll
    }

    var i = [];

    function s() {
        n.removeEventListener(document, "DOMContentLoaded", s), n.removeEventListener(window, "load", s);
        for (var e = 0, t = i; e < t.length; e++) (0, t[e])();
        i = []
    }

    t.onDocumentReady = function (e) {
        r() ? setTimeout(e) : i.push(e)
    }, r() || (n.addEventListener(document, "DOMContentLoaded", s), n.addEventListener(window, "load", s))
}, function (e, t, o) {
    "use strict";
    t.__esModule = !0, t.getNativeMethod = void 0;
    var n = o(3);
    t.getNativeMethod = function (e, t) {
        var o = e[t];
        if (!n.checkNativeCode(o)) {
            var r = o;
            try {
                delete e[t];
                var i = e[t];
                "function" == typeof i && (o = i), e[t] = r
            } catch (e) {
            }
        }
        return o
    }
}, function (e, t, o) {
    "use strict";
    t.__esModule = !0, t.decode = t.encode = void 0;
    var n = o(2);
    t.encode = function (e) {
        return encodeURIComponent(n.getNativeJSON().stringify(e))
    }, t.decode = function (e) {
        try {
            var t = n.getNativeJSON().parse(decodeURIComponent(e));
            if (t.id && t.html && t.pmGuid) return t
        } catch (e) {
        }
        return null
    }
}, function (e, t, o) {
    "use strict";
    t.__esModule = !0, t.createHiddenFriendlyIFrame = void 0;
    var n = o(22);
    t.createHiddenFriendlyIFrame = function (e) {
        var t = n.createFriendlyIFrame(e);
        return t.width = "0", t.height = "0", t.style.position = "absolute", t
    }
}, function (e, t, o) {
    "use strict";
    t.__esModule = !0, t.createFriendlyIFrame = void 0, t.createFriendlyIFrame = function (e, t) {
        var o = void 0 === t ? {} : t, n = o.content, r = o.size, i = e.ownerDocument.createElement("iframe");
        i.scrolling = "no", i.setAttribute("allowfullscreen", ""), i.style.display = "block", r && (i.height = r.height, i.width = r.width), e.appendChild(i);
        var s = i.contentDocument;
        return s.open(), n && s.write(n), s.close(), s.body.style.margin = "0", i.style.borderWidth = "0", i
    }
}, function (e, t, o) {
    "use strict";
    t.__esModule = !0, t.removeIframe = void 0;
    var n = o(24);
    t.removeIframe = function (e) {
        e.src = "", n.removeNodeFromParent(e)
    }
}, function (e, t, o) {
    "use strict";
    t.__esModule = !0, t.removeNodeFromParent = void 0, t.removeNodeFromParent = function (e) {
        if (e) {
            var t = e.parentElement;
            t && t.removeChild(e)
        }
    }
}, function (e, t, o) {
    "use strict";
    t.__esModule = !0, t.postMessages = void 0;
    var n = o(29), r = o(2), i = o(0), s = function () {
        function e() {
            var e = this;
            this.iframes = [], this.guids = [], this.callbacks = [], i.addEventListener(window, "message", function (t) {
                e.handleMessage(t)
            })
        }

        return e.prototype.register = function (e, t, o) {
            this.iframes.push(e), this.guids.push(t), this.callbacks.push(o)
        }, e.prototype.unregister = function (e) {
            var t = n.indexOf(this.iframes, e);
            -1 !== t && (this.iframes.splice(t, 1), this.guids.splice(t, 1), this.callbacks.splice(t, 1))
        }, e.prototype.send = function (e, t) {
            var o = n.indexOf(this.iframes, e);
            if (-1 !== o) {
                var s = this.guids[o], a = void 0;
                try {
                    a = r.getNativeJSON().stringify({guid: s, payload: t})
                } catch (e) {
                }
                if (!a) return;
                var u = i.getIframeWindow(e);
                u && u.postMessage(a, "*")
            }
        }, e.prototype.handleMessage = function (e) {
            var t;
            try {
                t = r.getNativeJSON().parse(e.data)
            } catch (e) {
            }
            if (t && t.guid) {
                var o = n.indexOf(this.guids, t.guid);
                if (-1 !== o) {
                    var s = this.iframes[o], a = this.callbacks[o];
                    i.getIframeWindow(s) === e.source && a(t.payload)
                }
            }
        }, e
    }();
    t.postMessages = new s
}, , , function (e, t, o) {
    "use strict";
    t.__esModule = !0, t.forEach = void 0, t.forEach = function (e, t, o) {
        for (var n = 0; n < e.length; n++) t.call(o, e[n], n, e)
    }
}, function (e, t, o) {
    "use strict";
    t.__esModule = !0, t.indexOf = void 0, t.indexOf = function (e, t, o, r) {
        void 0 === o && (o = 0), void 0 === r && (r = n);
        for (var i = o; i < e.length; i++) if (r(e[i], t)) return i;
        return -1
    };
    var n = function (e, t) {
        return e === t
    }
}, function (e, t, o) {
    "use strict";
    t.__esModule = !0, t.boot = t.parseInlineConfig = t.grabScripts = void 0;
    var n = o(28), r = o(29), i = o(0), s = o(5), a = o(1), u = o(18), d = o(6), c = o(32), f = o(58), l = o(10),
        p = "sf_data", h = "text/x-safeframe", g = [];

    function v() {
        for (var e = 0, t = g; e < t.length; e++) {
            var o = t[e];
            i.removeFromDocument(o)
        }
        g = []
    }

    function m(e) {
        var t, o = e.data, n = e.parent;
        try {
            t = new Function("return " + o)()
        } catch (e) {
            return void s.logError("Error parsing tag configuration " + (e && e.message || ""))
        }
        if (t && (t.html || t.src)) {
            t.conf = t.conf || {};
            var r = d.findPosConfig(t.id);
            if (r && (t.conf = a.merge(r, t.conf)), t.conf.dest = t.conf.dest || a.guid("dest"), !(t.conf.dest instanceof Element ? t.conf.dest : document.getElementById(t.conf.dest)) && n) {
                var u = document.createElement("div");
                i.setAttr(u, "id", t.conf.dest), n.appendChild(u)
            }
            l.status.setPositionReady(new c.Position(t))
        } else s.logError("no content found in the inline position object")
    }

    function y() {
        d.isConfigReady() || s.logError("can't boot before config initialized"), n.forEach(function () {
            for (var e = document.getElementsByTagName("script"), t = [], o = 0; o < e.length; o++) {
                var n = e[o];
                n.className !== p && i.getAttr(n, "type") !== h || -1 === r.indexOf(g, n) && (t.push({
                    parent: i.parent(n),
                    data: a.trim(n.text || n.innerHTML || n.innerText)
                }), g.push(n))
            }
            return u.onDocumentReady(v), t
        }(), m)
    }

    t.grabScripts = y, t.parseInlineConfig = function (e) {
        d.Config(e)
    }, t.boot = function () {
        d.isConfigReady() || s.logError("can't boot before config initialized"), y(), f.render(l.status.getPositionsReadyForRender())
    }
}, function (e, t, o) {
    "use strict";
    t.__esModule = !0, t.PosConfig = void 0;
    var n = o(1), r = o(6), i = o(56), s = {"exp-ovr": !0, "exp-push": !1, "read-cookie": !1, "write-cookie": !1};
    t.PosConfig = function (e, t, o) {
        var a;
        "object" == typeof e ? (a = e).dest = a.dest || t : a = {id: e};
        var u, d = "100%" === a.w ? a.w : parseInt(a.w, 10) || 0, c = "100%" === a.h ? a.h : parseInt(a.h, 10) || 0;
        if ((!d || !c) && a.size) {
            var f = a.size.split(/x/gi);
            d = parseInt(f[0], 10) || 0, c = parseInt(f[1], 10) || 0
        }
        u = d && c ? d + "x" + c : (c = d = 0, "");
        var l = a.tgt || "_blank";
        "_self" !== l && "_parent" !== l || (l = "_top");
        var p = {
            id: a.id || n.guid(i.POS_ID_AUTO_PREFIX),
            dest: a.dest || "",
            bg: a.bg || "transparent",
            css: a.css || "",
            z: Number(a.z) || 0,
            supports: n.merge(s, a.supports),
            w: d,
            h: c,
            size: u,
            tgt: l,
            protected: !0 === a.protected,
            sandbox: a.sandbox,
            basePath: a.basePath || "",
            nonce: a.nonce || ""
        };
        return o && null === r.Config() && r.Config(o), null !== r.Config() && r.addPosConfig(p), p
    }
}, function (e, t, o) {
    "use strict";
    t.__esModule = !0, t.Position = void 0;
    var n = o(5), r = o(1), i = o(11), s = o(64), a = o(6), u = o(56), d = o(33), c = o(31), f = o(57),
        l = function () {
            function e(t, o, s, l) {
                if (void 0 !== t) if (a.isConfigReady()) {
                    if (!(this instanceof e)) return new e(t, o, s, l);
                    var p, h, g, v, m, y;
                    if ((p = "object" == typeof t ? t : {id: t}).html = o || p.html, p.meta = s || p.meta, p.conf = l || p.conf, p.id ? this.id = p.id : p.conf && p.conf.id ? this.id = p.conf.id : this.id = r.guid(u.POS_ID_AUTO_PREFIX), p.html ? this.html = p.html : p.src ? this.html = (h = p.src, v = (g = a.Config()) ? g.version : "undefined", m = d.isEnabled ? "1" : "0", y = r.getFlashVersion().toString(), ["<scr", 'ipt type="text/javascript" src="', h.replace(/\${sf_ver}/g, v).replace(/\${ck_on}/g, m).replace(/\${flash_ver}/g, y), '"></scr', "ipt>"].join("")) : this.html = "", this.src = "", this.meta = p.meta instanceof i.PosMeta ? p.meta : f.fromInlineCode(p.meta), p.conf) p.conf.id = this.id, this.conf = c.PosConfig(p.conf); else {
                        var w = a.findPosConfig(this.id);
                        this.conf = w || c.PosConfig({id: this.id})
                    }
                } else n.logError("Publisher Config not initialized - abort"); else n.logError("posIDorObj is required")
            }

            return e.prototype.toString = function () {
                return s.setObjectToQueryString({
                    id: this.id,
                    meta: this.meta,
                    html: this.html,
                    conf: this.conf,
                    src: this.src
                })
            }, e
        }();
    t.Position = l
}, function (e, t, o) {
    "use strict";
    t.__esModule = !0, t.isEnabled = t.write = t.read = void 0;
    var n = o(65), r = o(1);
    t.read = function (e) {
        var t = n.getCookie(document, e);
        return "string" == typeof t ? t : null
    }, t.write = function (e, t, o) {
        var r = o || new Date(2100, 0);
        n.setCookie(document, e, t, {expires: r})
    }, t.isEnabled = function () {
        var e = r.guid("safeframe-test-cookie");
        n.setCookie(document, e, "test");
        var t = "test" === n.getCookie(document, e);
        return n.deleteCookie(document, e), t
    }()
}, function (e, t, o) {
    "use strict";
    t.__esModule = !0, t.collapse = t.expand = t.initialWrapStyle = t.initialIframeStyle = void 0;
    var n = o(0), r = o(1);

    function i(e, t) {
        return {width: e.w, height: e.h, top: 0, left: 0, position: t ? "relative" : "absolute"}
    }

    function s(e) {
        return {width: e.w, height: e.h, position: "relative"}
    }

    t.initialIframeStyle = i, t.initialWrapStyle = s, t.expand = function (e, t, o) {
        var a = i(t), u = s(t);
        o.t && ("number" == typeof a.height && (a.height += o.t), o.push || (a.top = -o.t)), o.l && ("number" == typeof a.width && (a.width += o.l), o.push || (a.left = -o.l)), o.b && "number" == typeof a.height && (a.height += o.b), o.r && "number" == typeof a.width && (a.width += o.r), o.push && (u.width = a.width, u.height = a.height), n.setStyle(e, r.toCssString(a)), n.setStyle(n.parent(e), r.toCssString(u))
    }, t.collapse = function (e, t) {
        var o = i(t), a = s(t);
        n.setStyle(e, r.toCssString(o)), n.setStyle(n.parent(e), r.toCssString(a))
    }
}, function (e, t, o) {
    "use strict";
    t.__esModule = !0, t.nuke = t.resetContainerStyles = t.removeIframe = void 0;
    var n = o(28), r = o(0), i = o(6), s = o(34), a = o(59), u = o(61), d = o(25), c = o(10);

    function f(e) {
        e && e.iframe && (u.geomUpdater.unregister(e.iframe), a.focusUpdater.unregister(e.iframe), d.postMessages.unregister(e.iframe), r.removeFromDocument(e.iframe))
    }

    function l(e) {
        if (e && e.iframe) {
            var t = r.parent(e.iframe);
            t && (r.setStyle(t, ""), n.forEach(e.styles, function (e) {
                return r.removeFromDocument(e)
            }))
        }
    }

    t.removeIframe = f, t.resetContainerStyles = l, t.nuke = function (e) {
        for (var t = 0, o = e && "*" !== e ? "string" == typeof e ? [e] : e : c.status.getRenderedPositions(); t < o.length; t++) {
            var n = o[t], r = i.findPosConfig(n);
            if (r) {
                var a = c.status.getPositionStatus(n);
                "expanded" === a.busy && a.iframe && s.collapse(a.iframe, r)
            }
            var u = c.status.getPositionStatus(n);
            l(u), f(u), c.status.setPositionNuked(n)
        }
    }
}, , , , , , , , , , , , , , , , , , , , , function (e, t, o) {
    "use strict";
    t.__esModule = !0, t.POS_ID_AUTO_PREFIX = void 0, t.POS_ID_AUTO_PREFIX = "sf_pos"
}, function (e, t, o) {
    "use strict";
    t.__esModule = !0, t.fromInlineCode = t.createPosMeta = void 0;
    var n = o(1), r = o(11), i = o(6), s = o(33);

    function a(e, t, o) {
        var a = i.Config();
        return a && (e.sf_ver = a.version), e.ck_o = s.isEnabled ? 1 : 0, e.flash_ver = n.getFlashVersion(), new r.PosMeta(e, t, o)
    }

    t.createPosMeta = a, t.fromInlineCode = function (e) {
        var t = {}, o = "", r = {};
        return n.forEachProp(e, function (e, n) {
            "object" == typeof n ? (o = e, r = n) : t[e] = n
        }), a(t, o, r)
    }
}, function (e, t, o) {
    "use strict";
    var n = this && this.__assign || function () {
        return (n = Object.assign || function (e) {
            for (var t, o = 1, n = arguments.length; o < n; o++) for (var r in t = arguments[o]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        }).apply(this, arguments)
    };
    t.__esModule = !0, t.render = t.createIframe = void 0;
    var r = o(67), i = o(28), s = o(68), a = o(69), u = o(70), d = o(9), c = o(0), f = o(5), l = o(1), p = o(20),
        h = o(6), g = o(34), v = o(59), m = o(60), y = o(61), w = o(73), M = o(35), b = o(32), S = o(25), P = o(10);

    function _(e, t) {
        var o = document.createElement("iframe");
        return c.setAttr(o, "frameborder", "no"), c.setAttr(o, "scrolling", "no"), c.setAttr(o, "allowtransparency", "true"), c.setAttr(o, "hidefocus", "true"), c.setAttr(o, "tabindex", "-1"), c.setAttr(o, "marginwidth", "0"), c.setAttr(o, "marginheight", "0"), u.setStyle(o, "opacity", 0), l.forEachProp(e, function (e, t) {
            return c.setAttr(o, e, t)
        }), o
    }

    function C(e) {
        var t = e.id, o = e.html, i = e.meta, s = h.findPosConfig(e.id);
        M.nuke(e.id), P.status.setPositionReady(e);
        var a = null;
        if (s && (a = s.dest instanceof Element || Boolean(s.dest.nodeName) ? s.dest : document.getElementById(s.dest)), a) {
            var b = s, C = a, x = b.w, E = b.h, k = !1;
            if (!x || !E) {
                var O = c.getRect(C);
                x = x || O.right - O.left || "100%", E = E || O.bottom - O.top || "100%", b.w = x, b.h = E, k = "100%" === x || "100%" === E
            }
            var I = c.setStyle(C, l.toCssString(g.initialWrapStyle(b)), !1, {nonce: b.nonce}), R = {
                id: t,
                html: o,
                pmGuid: l.guid(),
                geom: m.getGeom(C),
                hasFocus: "function" != typeof document.hasFocus || document.hasFocus(),
                supports: b.supports,
                css: b.css,
                bg: b.bg,
                posMeta: i.getFullMeta(),
                target: b.tgt,
                basePath: b.basePath
            }, F = {name: p.encode(R), src: h.getRenderFileURL({protected: b.protected}) || ""};
            if (b.protected || b.sandbox) {
                var D = n({
                    "allow-same-origin": !0,
                    "allow-popups": !0,
                    "allow-popups-to-escape-sandbox": !0,
                    "allow-scripts": !0,
                    "allow-forms": !0
                }, b.sandbox);
                F.sandbox = r.filter(d.getObjectKeys(D), function (e) {
                    return D[e]
                }).join(" ")
            }
            var N = _(F);
            c.addEventListener(N, "load", function () {
                var e, o;
                e = N, o = t, u.setStyle(e, "opacity", 1), P.status.setPositionLoaded(o), N.removeAttribute("name")
            }), S.postMessages.register(N, R.pmGuid, function (e) {
                return w.messageDispatcher(t, N, e)
            }), y.geomUpdater.register(N), v.focusUpdater.register(N), c.appendChild(C, N);
            var A = [I, c.setStyle(N, l.toCssString(g.initialIframeStyle(b, k)), !1, {nonce: b.nonce})],
                T = function (e) {
                    var t = h.Config();
                    return window.setTimeout(function () {
                        var t;
                        t = e, M.removeIframe(P.status.getPositionStatus(t)), P.status.setPositionError(t), f.logError('Render timeout of position "' + t + '"')
                    }, t ? 1e3 * t.to : 0)
                }(t);
            P.status.setPositionLoading(t, N, T, A)
        } else f.logError('Dest container for "' + t + '" no found. Render aborted.')
    }

    t.createIframe = _, t.render = function (e) {
        if (h.isConfigReady()) {
            var t = s.isArray(e) ? e : [e], o = a.map(t, function (e) {
                return e instanceof b.Position ? e : new b.Position(e)
            });
            i.forEach(o, C)
        } else f.logError("Render called before Config was initialized")
    }
}, function (e, t, o) {
    "use strict";
    t.__esModule = !0, t.focusUpdater = t.FocusUpdater = void 0;
    var n = o(29), r = o(0), i = o(25), s = function () {
        function e() {
            var e = this;
            this.iframes = [];
            var t = function () {
                return e.report()
            };
            r.addEventListener(window, "focus", t), r.addEventListener(window, "blur", t)
        }

        return e.prototype.register = function (e) {
            this.iframes.push(e)
        }, e.prototype.unregister = function (e) {
            var t = n.indexOf(this.iframes, e);
            -1 !== t && this.iframes.splice(t, 1)
        }, e.prototype.report = function () {
            if (0 !== this.iframes.length) for (var e = document.hasFocus(), t = 0, o = this.iframes; t < o.length; t++) {
                var n = o[t];
                i.postMessages.send(n, {type: "focus-updated", hasFocus: e})
            }
        }, e
    }();
    t.FocusUpdater = s, t.focusUpdater = new s
}, function (e, t, o) {
    "use strict";
    t.__esModule = !0, t.getGeom = t.expansion = t.selfRect = t.windowRect = void 0;
    var n = o(0);

    function r() {
        var e = window.innerWidth, t = window.innerHeight, o = window.screenY || 0, n = window.screenX || 0;
        return {
            t: Math.round(o),
            l: Math.round(n),
            w: Math.round(e),
            h: Math.round(t),
            b: Math.round(o + t),
            r: Math.round(n + e)
        }
    }

    function i(e, t) {
        var o = n.getRect(e), r = o.right - o.left, i = o.bottom - o.top, s = Math.max(o.left, 0),
            a = Math.min(o.right, t.w), u = Math.max(o.top, 0), d = Math.min(o.bottom, t.h), c = Math.max(a - s, 0),
            f = Math.max(d - u, 0);
        return {
            t: Math.round(o.top),
            l: Math.round(o.left),
            b: Math.round(o.bottom),
            r: Math.round(o.right),
            w: Math.round(r),
            h: Math.round(i),
            xiv: c / r,
            yiv: f / i,
            iv: c * f / (r * i),
            z: Number(n.getCurrentStyle(e).zIndex) || 0
        }
    }

    function s(e, t) {
        return {
            t: Math.max(0, t.t),
            l: Math.max(0, t.l),
            r: Math.max(0, e.w - t.l - t.w),
            b: Math.max(0, e.h - t.t - t.h),
            xs: 0,
            ys: 0
        }
    }

    t.windowRect = r, t.selfRect = i, t.expansion = s, t.getGeom = function (e) {
        var t = r(), o = i(e, t);
        return {win: t, self: o, exp: s(t, o)}
    }
}, function (e, t, o) {
    "use strict";
    t.__esModule = !0, t.geomUpdater = t.GeomUpdater = void 0;
    var n = o(29), r = o(0), i = o(60), s = o(25), a = function () {
        function e() {
            var e = this;
            this.iframes = [], this.lastRecalcTime = -1 / 0, this.recalcScheduled = !1;
            var t = function () {
                return e.handlePotentialChange()
            };
            r.addEventListener(window, "scroll", t, {passive: !0}), r.addEventListener(window, "resize", t, {passive: !0})
        }

        return e.prototype.register = function (e) {
            this.iframes.push(e)
        }, e.prototype.unregister = function (e) {
            var t = n.indexOf(this.iframes, e);
            -1 !== t && this.iframes.splice(t, 1)
        }, e.prototype.recalc = function () {
            if (0 !== this.iframes.length) {
                for (var e = 0, t = this.iframes; e < t.length; e++) {
                    var o = t[e], n = r.parent(o);
                    n && s.postMessages.send(o, {type: "geom-updated", geom: i.getGeom(n)})
                }
                this.lastRecalcTime = (new Date).getTime(), this.recalcScheduled = !1
            }
        }, e.prototype.handlePotentialChange = function () {
            var e = this;
            if (!this.recalcScheduled) {
                var t = (new Date).getTime() - this.lastRecalcTime;
                250 <= t ? this.recalc() : (setTimeout(function () {
                    return e.recalc()
                }, 250 - t), this.recalcScheduled = !0)
            }
        }, e
    }();
    t.GeomUpdater = a, t.geomUpdater = new a
}, function (e, t, o) {
    "use strict";
    t.__esModule = !0;
    var n = o(28), r = o(1), i = o(63), s = o(30), a = "yaSafeFrameAsyncCallbacks", u = window;
    u.$sf = u.$sf || {}, u.$sf.info = {errs: []}, u.$sf.host = r.merge(u.$sf.host || {}, i.host), u.$sf.host.conf && (s.parseInlineConfig(u.$sf.host.conf), delete u.$sf.host.conf);
    var d = function (e) {
        return setTimeout(e, 0)
    };
    u[a] && n.forEach(u[a], d), u[a] = {push: d}
}, function (e, t, o) {
    "use strict";
    t.__esModule = !0, t.host = void 0;
    var n = o(30), r = o(6), i = o(35), s = o(31), a = o(32), u = o(57), d = o(58), c = o(10);
    t.host = {
        render: d.render,
        nuke: i.nuke,
        Config: r.Config,
        PosConfig: s.PosConfig,
        PosMeta: u.createPosMeta,
        Position: a.Position,
        boot: n.boot,
        status: function (e) {
            return c.status.getStatus(e)
        },
        get: function (e) {
            return c.status.getPosition(e)
        }
    }
}, function (e, t, o) {
    "use strict";
    t.__esModule = !0, t.setObjectToQueryString = void 0;
    var n = o(1);
    t.setObjectToQueryString = function (e) {
        return function e(t, o) {
            var r = [];
            return n.forEachProp(t, function (t, n) {
                var i, s, a = o ? o + "[" + t + "]" : t;
                (i = "object" == typeof n || Array.isArray(n) ? e(n, a) : (s = n, encodeURIComponent(a) + "=" + encodeURIComponent(s))) && r.push(i)
            }), r.join("&")
        }(e)
    }
}, function (e, t, o) {
    "use strict";
    var n = this && this.__assign || function () {
        return (n = Object.assign || function (e) {
            for (var t, o = 1, n = arguments.length; o < n; o++) for (var r in t = arguments[o]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        }).apply(this, arguments)
    };
    t.__esModule = !0, t.deleteCookie = t.getCookie = t.setCookie = void 0;
    var r = o(66);
    t.setCookie = function (e, t, o, n) {
        void 0 === n && (n = {}), r.isDate(n.expires) && (n.expires = n.expires.toUTCString()), void 0 === n.path && (n.path = "/");
        var i = "";
        for (var s in n) n[s] && (i += "; " + s, !0 !== n[s] && (i += "=" + n[s]));
        try {
            var a = encodeURIComponent(String(t)) + "=" + encodeURIComponent(String(o));
            return e.cookie = a + i
        } catch (e) {
            return
        }
    }, t.getCookie = function (e, t) {
        var o = [];
        try {
            o = e.cookie ? e.cookie.split("; ") : []
        } catch (e) {
        }
        for (var n, r = /(%[0-9A-Z]{2})+/g, i = 0; i < o.length; i++) {
            var s = o[i].split("="), a = s.slice(1).join("=");
            try {
                var u = s[0].replace(r, decodeURIComponent);
                if (a.replace(r, decodeURIComponent), t === u) {
                    n = decodeURIComponent(a);
                    break
                }
            } catch (e) {
                return
            }
        }
        return n
    }, t.deleteCookie = function (e, o, r) {
        t.setCookie(e, o, "", n(n({}, r), {expires: new Date(0)}))
    }
}, function (e, t, o) {
    "use strict";
    t.__esModule = !0, t.isDate = void 0;
    var n = o(4);
    t.isDate = function (e) {
        return e instanceof Date || "Date" === n.getInternalClass(e)
    }
}, function (e, t, o) {
    "use strict";
    t.__esModule = !0, t.filter = void 0, t.filter = function (e, t, o) {
        for (var n = [], r = 0; r < e.length; r++) {
            var i = e[r];
            t.call(o, i, r, e) && n.push(i)
        }
        return n
    }
}, function (e, t, o) {
    "use strict";
    t.__esModule = !0, t.isArray = void 0;
    var n = o(4), r = o(19).getNativeMethod(Array, "isArray");
    t.isArray = Boolean(r) ? function (e) {
        return r.call(Array, e)
    } : function (e) {
        return "Array" === n.getInternalClass(e)
    }
}, function (e, t, o) {
    "use strict";
    t.__esModule = !0, t.map = void 0, t.map = function (e, t, o) {
        for (var n = new Array(e.length), r = 0; r < e.length; r++) n[r] = t.call(o, e[r], r, e);
        return n
    }
}, function (e, t, o) {
    "use strict";
    t.__esModule = !0, t.styleToString = t.setStyle = void 0;
    var n = o(71), r = o(72),
        i = new RegExp(["box-flex", "box-flex-group", "column-count", "fill-opacity", "flex", "flex-grow", "flex-positive", "flex-shrink", "flex-negative", "font-weight", "line-height", "opacity", "order", "z-index", "zoom"].join("|"), "i");

    function s(e, t, o, n) {
        void 0 !== o && void 0 !== t && (o += !i.test(t) && o >>> 0 ? "px" : "", e.style.setProperty ? e.style.setProperty(t, o, n ? "important" : "") : e.style.cssText += ";" + t + ": " + o + (n ? "!important" : ""))
    }

    t.setStyle = function (e, t, o, i) {
        r.isObject(t) ? (i = Boolean(o), n.forOwn(t, function (t, o) {
            s(e, o, t, i)
        })) : s(e, t, o, i)
    }, t.styleToString = function (e, t) {
        void 0 === t && (t = !1);
        var o = t ? "!important" : "", r = "";
        return n.forOwn(e, function (e, t) {
            if (void 0 !== e && void 0 !== t) {
                var n = t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
                e += !i.test(n) && e >>> 0 ? "px" : "", r += n + ": " + e + o + ";"
            }
        }), r
    }
}, function (e, t, o) {
    "use strict";
    t.__esModule = !0, t.forOwn = void 0;
    var n = o(7);
    t.forOwn = function (e, t, o) {
        for (var r in e) n.hasOwnProperty(e, r) && t.call(o, e[r], r, e)
    }
}, function (e, t, o) {
    "use strict";
    t.__esModule = !0, t.isObject = void 0, t.isObject = function (e) {
        var t = typeof e;
        return Boolean(e) && ("object" === t || "function" === t)
    }
}, function (e, t, o) {
    "use strict";
    t.__esModule = !0, t.messageDispatcher = void 0;
    var n = o(5), r = o(6), i = o(33), s = o(34), a = o(35), u = o(25), d = o(10);
    t.messageDispatcher = function (e, t, o) {
        if ("error" === o.type) for (var c = 0, f = o.messages; c < f.length; c++) {
            var l = f[c];
            r.notifyPosMsg(e, "error", l), n.logError('Error in "' + e + '":\n' + l)
        }
        if ("expand-request" === o.type) {
            if (!(h = r.findPosConfig(e))) return void n.logError("Couldn't find config for position \"" + e + '" while handling expand request');
            if (!h.supports[o.dim.push ? "exp-push" : "exp-ovr"]) return n.logError('Expansion not allowed for position "' + e + '"'), void u.postMessages.send(t, {
                type: "error",
                causedByMethod: "expand",
                message: "not allowed"
            });
            if (r.notifyBeforePosMsg(e, "expand", o.dim)) return void u.postMessages.send(t, {
                type: "error",
                causedByMethod: "expand",
                message: "canceled"
            });
            d.status.setPositionExpanding(e), s.expand(t, h, o.dim), d.status.setPositionExpanded(e), u.postMessages.send(t, {type: "expanded"}), r.notifyPosMsg(e, "expand", o.dim)
        }
        if ("collapse-request" === o.type) {
            if (!(h = r.findPosConfig(e))) return void n.logError("Couldn't find config for position \"" + e + '" while handling collapse request');
            if ("expanded" !== d.status.getPositionStatus(e).busy) return n.logError('Collapse impossible, position "' + e + "\" isn't expanded."), void u.postMessages.send(t, {
                type: "error",
                causedByMethod: "collapse",
                message: "not expanded"
            });
            if (r.notifyBeforePosMsg(e, "collapse")) return void u.postMessages.send(t, {
                type: "error",
                causedByMethod: "collapse",
                message: "canceled"
            });
            d.status.setPositionCollapsing(e), s.collapse(t, h), d.status.setPositionCollapsed(e), u.postMessages.send(t, {type: "collapsed"}), r.notifyPosMsg(e, "collapse")
        }
        if ("nuke" === o.type && (a.nuke(e), r.notifyPosMsg(e, "nuke")), "read-cookie-request" === o.type) {
            if (!(h = r.findPosConfig(e))) return void n.logError("Couldn't find config for position \"" + e + '" while handling read cookie request');
            if (!h.supports["read-cookie"]) return n.logError('Cookies read not allowed for position "' + e + '"'), void u.postMessages.send(t, {
                type: "error",
                causedByMethod: "read-cookie",
                message: "Cookies read not allowed"
            });
            if (r.notifyBeforePosMsg(e, "read-cookie", o.name)) return void u.postMessages.send(t, {
                type: "error",
                causedByMethod: "read-cookie",
                message: "canceled"
            });
            var p = i.read(o.name);
            u.postMessages.send(t, {
                type: "cookie-read",
                name: o.name,
                value: p
            }), r.notifyPosMsg(e, "read-cookie", o.name)
        }
        if ("write-cookie-request" === o.type) {
            var h, g = "number" == typeof o.expires ? new Date(o.expires) : void 0,
                v = {name: o.name, value: o.value, expires: g};
            if (!(h = r.findPosConfig(e))) return void n.logError("Couldn't find config for position \"" + e + '" while handling write cookie request');
            if (!h.supports["write-cookie"]) return n.logError('Cookies write not allowed for position "' + e + '"'), void u.postMessages.send(t, {
                type: "error",
                causedByMethod: "write-cookie",
                message: "Cookies write not allowed"
            });
            if (r.notifyBeforePosMsg(e, "write-cookie", v)) return void u.postMessages.send(t, {
                type: "error",
                causedByMethod: "write-cookie",
                message: "canceled"
            });
            i.write(v.name, v.value, v.expires), u.postMessages.send(t, {
                type: "cookie-written",
                name: v.name,
                value: v.value
            }), r.notifyPosMsg(e, "write-cookie", v)
        }
    }
}]);