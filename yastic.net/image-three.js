/*! v:679108 b:default c:rum */
try {
    var cnc = function (e) {
        if (!e || !e.toString) return !1;
        const t = e.toString();
        return /\[native code\]/.test(t) || /\/\* source code not available \*\//.test(t)
    };
    cnc(Function.prototype.bind) ? Function.prototype.__pbind = Function.prototype.bind : Function.prototype.__pbind = function (e, ...t) {
        let n = this;
        return function (...r) {
            n.apply(e, [...t, ...r])
        }
    }, cnc(Array.prototype.reduce) ? Object.defineProperty && Object.defineProperty(Array.prototype, "__preduce", {
        enumerable: !1,
        iterable: !1,
        value: Array.prototype.reduce
    }) : Object.defineProperty(Array.prototype, "__preduce", {
        enumerable: !1, iterable: !1, value: function (e) {
            if (null == this) throw new TypeError("Array.prototype.reduce called on null or undefined");
            if ("function" != typeof e) throw new TypeError(e + " is not a function");
            var t, n = Object(this), r = n.length >>> 0, i = 0;
            if (arguments.length >= 2) t = arguments[1]; else {
                for (; i < r && !(i in n);) i++;
                if (i >= r) throw new TypeError("Reduce of empty array with no initial value");
                t = n[i++]
            }
            for (; i < r; i++) i in n && (t = e(t, n[i], i, n));
            return t
        }
    })
} catch (e) {
}
(self["webpackChunkyandex_pcode"] = self["webpackChunkyandex_pcode"] || []).push([[3634], {
    69246: (e, t, n) => {
        var r = function () {
            return r = Object.assign || function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            }, r.apply(this, arguments)
        }, i = Object.create ? function (e, t, n, r) {
            void 0 === r && (r = n);
            var i = Object.getOwnPropertyDescriptor(t, n);
            i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
                enumerable: !0,
                get: function () {
                    return t[n]
                }
            }), Object.defineProperty(e, r, i)
        } : function (e, t, n, r) {
            void 0 === r && (r = n), e[r] = t[n]
        }, o = Object.create ? function (e, t) {
            Object.defineProperty(e, "default", {enumerable: !0, value: t})
        } : function (e, t) {
            e["default"] = t
        }, a = function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && i(t, e, n);
            return o(t, e), t
        }(n(18091));
        e.exports = r(r({}, a), {
            init: function (e, t) {
                var r = a.init(e, t);
                return (0, n(92315).sc)(a), (0, n(91187).Y)(a), r
            }
        })
    }, 92315: (e, t) => {
        t.No = t.sc = void 0;
        var n, r = [];

        function i() {
            var e = !1;
            r.forEach((function (t) {
                t() && (e = !0)
            })), e || clearInterval(n)
        }

        t.sc = function (e) {
            var t = e.getSetting("periodicStatsIntervalMs");
            t || null === t || (t = 15e3), t && (n = window.setInterval(i, t)), addEventListener("beforeunload", i)
        }, t.No = function (e) {
            r.push(e)
        }
    }, 91187: (e, t, n) => {
        t.Y = void 0;
        var r = [], i = [];

        function o(e) {
            for (var t = 0, n = 0; n < e.length; ++n) t += e[n] * e[n];
            return Math.sqrt(t / e.length)
        }

        t.Y = function (e) {
            e.getSetting("scrollMetric") && (!function (e) {
                var t, n, i = !1;
                addEventListener("scroll", (function () {
                    var o = e.getTime();
                    i ? r.push(o - t) : i = !0, t = o, clearTimeout(n), n = window.setTimeout((function () {
                        i = !1
                    }), 500)
                }))
            }(e), (0, n(92315).No)((function () {
                if (r.length) {
                    var t = e.getMarkCommonVars().concat(["d=" + o(r)]);
                    e.sendCounter("690.2096.768", t), r = []
                }
                return !0
            }))), e.getSetting("scrollLatencyMetric") && function () {
                try {
                    if (!window.PerformanceScrollUpdateLatency) return !1;
                    new PerformanceObserver((function (e) {
                        e.getEntries().forEach((function (e) {
                            i.push(e.duration)
                        }))
                    })).observe({entryTypes: ["scrollUpdateLatency"]})
                } catch (e) {
                    return !1
                }
                return !0
            }() && (0, n(92315).No)((function () {
                if (i.length) {
                    var t = e.getMarkCommonVars().concat(["d=" + o(i)]);
                    e.sendCounter("690.2096.768.2373", t), i = []
                }
                return !0
            }))
        }
    }, 18091: (e, t, n) => {
        function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? r(Object(n), !0).forEach((function (t) {
                    o(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        t.__esModule = !0, t.finalizeLargestContentfulPaint = F, t.finalizeLayoutShiftScore = B, t.getMarkCommonVars = Z, t.getSetting = G, t.getTime = N, t.init = function (e, t) {
            if (!f.enabled) return;
            f._settings = e, f._vars = t, g = function () {
                var e = f._vars;
                return Object.keys(e).map((function (t) {
                    return t + "=" + encodeURIComponent(e[t]).replace(/\*/g, "%2A")
                }))
            }(), k = g.concat(["143.2129=" + u]), f.enabled && !window.yandex_context_rum_inited && (!function () {
                function e() {
                    f.vsChanged = !0, removeEventListener("visibilitychange", e)
                }

                function t(e) {
                    f.isUserScroll = !0, f.firstScrollTimestamp = e.timeStamp, removeEventListener("scroll", t)
                }

                addEventListener("visibilitychange", e), addEventListener("scroll", t);
                try {
                    new s((function (e, t) {
                        var n = e.getEntriesByType("navigation")[0];
                        if (n) {
                            t && t.disconnect();
                            var r = [];
                            $(r, n), K(r), X(b, g.concat(r))
                        }
                    })).observe({type: "navigation", buffered: !0})
                } catch (e) {
                }
                if (window.PerformanceLongTaskTiming) {
                    var n = 300, r = function (e, t) {
                        return (e = e.concat(t)).length > n && (e = e.slice(e.length - n)), e
                    }, i = f._tti = {
                        events: [], eventsAfterTTI: [], fired: !1, observer: new s((function (e) {
                            var t = e.getEntries();
                            i.events = r(i.events, t), i.fired && (i.eventsAfterTTI = r(i.eventsAfterTTI, t))
                        }))
                    };
                    try {
                        i.observer.observe({type: "longtask", buffered: !0})
                    } catch (e) {
                    }
                }
            }(), function (e) {
                if (!f.enabled) return;

                function t() {
                    removeEventListener("DOMContentLoaded", t), removeEventListener("load", t), e()
                }

                "loading" === document.readyState ? (addEventListener("DOMContentLoaded", t), addEventListener("load", t)) : e()
            }(L), window.yandex_context_rum_inited = !0);
            return f
        }, t.isRumInited = function () {
            return window.yandex_context_rum_inited
        }, t.isValidYaBroRender = function (e) {
            void 0 === e && (e = [te, ee, ne, re]);
            return e.every((function (e) {
                return !f[e]
            }))
        }, t.send = p, t.sendAccumulatedDelta = U, t.sendCounter = X, t.sendDelta = x, t.sendElementTiming = void 0, t.sendResTiming = R, t.sendTimeMark = y, t.time = function (e) {
            if (!f.enabled) return;
            f._deltaMarks[e] = [N()]
        }, t.timeEnd = function (e, t) {
            if (!f.enabled) return;
            var n = f._deltaMarks[e];
            if (!n || 0 === n.length) return;
            n.push(N(), t), x(e)
        };
        var a = window.performance, c = a.timing, u = c.navigationStart, s = window.PerformanceObserver,
            d = "function" == typeof a.getEntriesByType, f = {
                enabled: !!(s && a && c && u && a.now),
                vsStart: document.visibilityState,
                vsChanged: !1,
                isUserInteract: !1,
                isUserScroll: !1,
                loadEventDelayPassed: !1,
                get isLoadEventDelayPassed() {
                    return function () {
                        if (!1 === f.loadEventDelayPassed) {
                            window.performance.timing.loadEventStart + 3e4 < Date.now() && (f.loadEventDelayPassed = !0)
                        }
                        return f.loadEventDelayPassed
                    }()
                },
                get isVisibilityChanged() {
                    return Y()
                },
                _defTimes: [],
                _defRes: [],
                _deltaMarks: {},
                _accumulatedDeltas: {},
                _settings: {},
                _vars: {}
            };
        var l, v = [];

        function p(e, t) {
            if (f.enabled) {
                clearTimeout(l);
                var n = G("slots"), r = G("experiments"), i = G("reqid"),
                    o = ["/reqid=" + i, e ? "/path=" + e : "", n ? "/slots=" + n.join(";") : "", r ? "/experiments=" + r.join(";") : "", t ? "/vars=" + t : "", "/*"];
                f._settings.isDevMode && console.debug("RUM_LOG", {
                    reqid: i,
                    path: e,
                    slots: n,
                    experiments: r,
                    vars: t.split(",").map((function (e) {
                        return decodeURIComponent(e)
                    }))
                }), v.push(o.join("")), v.length < 42 ? l = setTimeout(m, 15) : m()
            }
        }

        function m() {
            var e = G("clck"), t = v.join("\r\n");
            if ((v = [], l = null, e) && !(navigator.sendBeacon && navigator.sendBeacon(e, t))) {
                var n = new XMLHttpRequest;
                n.open("POST", e), n.send(t)
            }
        }

        function y(e, t, n) {
            if (f.enabled) {
                void 0 === t && (t = N());
                var r = Z(e);
                r.push("207=" + H(t)), J(r, n) && X(h, r)
            }
        }

        var g, h = "690.2096.207", b = "690.2096.2892", E = 2e4, w = {
            connectEnd: 2116,
            connectStart: 2114,
            decodedBodySize: 2886,
            domComplete: 2124,
            domContentLoadedEventEnd: 2131,
            domContentLoadedEventStart: 2123,
            domInteractive: 2770,
            domLoading: 2769,
            domainLookupEnd: 2113,
            domainLookupStart: 2112,
            duration: 2136,
            encodedBodySize: 2887,
            entryType: 2888,
            fetchStart: 2111,
            initiatorType: 2889,
            loadEventEnd: 2126,
            loadEventStart: 2125,
            nextHopProtocol: 2890,
            redirectCount: 1385,
            redirectEnd: 2110,
            redirectStart: 2109,
            requestStart: 2117,
            responseEnd: 2120,
            responseStart: 2119,
            secureConnectionStart: 2115,
            startTime: 2322,
            transferSize: 2323,
            type: 76,
            unloadEventEnd: 2128,
            unloadEventStart: 2127,
            workerStart: 2137
        }, S = {visible: 1, hidden: 2, prerender: 3}, T = {
            bluetooth: 2064,
            cellular: 2065,
            ethernet: 2066,
            none: 1229,
            wifi: 2067,
            wimax: 2068,
            other: 861,
            unknown: 836
        }, _ = {"first-paint": 2793, "first-contentful-paint": 2794}, O = Object.keys(_).length, k = [];

        function L() {
            setTimeout((function () {
                for (var e = f._defRes; e.length;) {
                    var t = e.shift();
                    R(t[0], t[1])
                }
                for (var n = f._defTimes; n.length;) {
                    var r = n.shift();
                    y(r[0], r[1], r[2])
                }
                Object.keys(f._deltaMarks).forEach((function (e) {
                    x(e)
                })), C(), I(), function () {
                    try {
                        new s((function (e, t) {
                            var n = e.getEntries()[0];
                            if (n) {
                                var r = n.processingStart - n.startTime;
                                f.isUserInteract = !0, x("first-input", r), t.disconnect()
                            }
                        })).observe({type: "first-input", buffered: !0})
                    } catch (e) {
                    }
                }(), G("sendAutoElementTiming") && z(), function (e, t) {
                    if (!f._tti) return;
                    var n = N(), r = function (e, r, i) {
                        y("2795", r, {2796.2797: W(i, t), 689.2322: H(n)}), f._tti.fired = !0
                    };

                    function i() {
                        var o, a = N(), c = f._tti.events || [], u = c.length, s = t || n;
                        0 !== u && (o = c[u - 1], s = Math.max(s, Math.floor(o.startTime + o.duration))), a - s >= 3e3 ? r(e, s, c) : a - s >= E ? r(e, (t || n) + E, c) : setTimeout(i, 1e3)
                    }

                    i()
                }(), "complete" === document.readyState ? j() : addEventListener("load", j), addEventListener("beforeunload", A)
            }), 0)
        }

        function j() {
            G("disableOnLoadTasks") || (removeEventListener("load", j), function () {
                var e = new s((function (e) {
                    var t = e.getEntries();
                    null == M && (M = 0);
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.hadRecentInput || (M += r.value)
                    }
                }));
                try {
                    e.observe({type: "layout-shift", buffered: !0})
                } catch (e) {
                }
                addEventListener("visibilitychange", (function t() {
                    if ("hidden" === document.visibilityState) {
                        removeEventListener("visibilitychange", t);
                        try {
                            "function" == typeof e.takeRecords && e.takeRecords(), e.disconnect()
                        } catch (e) {
                        }
                        B()
                    }
                })), addEventListener("beforeunload", B)
            }(), function () {
                if (!s || !G("forcePaintTimeSending") && Y()) return;
                var e = new s((function (e) {
                    for (var t = e.getEntries(), n = 0; n < t.length; n++) {
                        var r = t[n];
                        V = r.renderTime || r.loadTime
                    }
                    q || (y("largest-contentful-paint", V), q = !0)
                }));
                try {
                    e.observe({type: "largest-contentful-paint", buffered: !0})
                } catch (e) {
                }
                addEventListener("visibilitychange", (function t() {
                    if ("hidden" === document.visibilityState) {
                        removeEventListener("visibilitychange", t);
                        try {
                            "function" == typeof e.takeRecords && e.takeRecords(), e.disconnect()
                        } catch (e) {
                        }
                        F()
                    }
                })), addEventListener("beforeunload", F)
            }())
        }

        function C() {
            var e = c.domContentLoadedEventStart, t = c.domContentLoadedEventEnd;
            if (0 !== e || 0 !== t) {
                var n = g.concat(["2129=" + u, "1036=" + (c.domainLookupStart - u), "1037=" + (c.domainLookupEnd - c.domainLookupStart), "1038=" + (c.connectEnd - c.connectStart), c.secureConnectionStart && "1383=" + (c.connectEnd - c.secureConnectionStart), "1039=" + (c.responseStart - c.connectEnd), "1040=" + (c.responseEnd - c.responseStart), "1040.906=" + (c.responseEnd - c.domainLookupStart), "1310.2084=" + (c.domLoading - c.responseStart), "1310.2085=" + (c.domInteractive - c.responseStart), "1310.1309=" + (t - e), "1310.1007=" + (e - c.responseStart), navigator.deviceMemory && "3140=" + navigator.deviceMemory, navigator.hardwareConcurrency && "3141=" + navigator.hardwareConcurrency]);
                Object.keys(w).forEach((function (e) {
                    e in c && c[e] && n.push(w[e] + "=" + H(c[e], u))
                })), f.vsStart ? (n.push("1484=" + (S[f.vsStart] || 2771)), f.vsChanged && n.push("1484.719=1")) : n.push("1484=" + S["visible"]);
                var r = a.navigation || {};
                r && (r.redirectCount && n.push("1384.1385=" + r.redirectCount), 1 !== r.type && 2 !== r.type || n.push("770.76=" + r.type)), K(n), X("690.1033", n)
            } else setTimeout(C, 50)
        }

        var M, P = {}, D = 0;

        function I() {
            if (d && (G("forcePaintTimeSending") || !Y())) {
                for (var e = a.getEntriesByType("paint"), t = 0; t < e.length; t++) {
                    var n = e[t], r = _[n.name];
                    r && !P[n.name] && (P[n.name] = !0, D++, y("1926." + r, n.startTime))
                }
                if (D < O) try {
                    new s((function (e, t) {
                        I(), t && t.disconnect()
                    })).observe({entryTypes: ["paint"]})
                } catch (e) {
                }
            }
        }

        function R(e, t) {
            !function (e, t) {
                Q.href = e;
                var n = Q.href, r = 0, i = 100;

                function o() {
                    var e = a.getEntriesByName(n);
                    if (e.length) return t(e);
                    r++ < 10 ? (setTimeout(o, i), i += i) : t(null)
                }

                setTimeout(o, 0)
            }(t, (function (n) {
                if (n) {
                    var r = Z(e);
                    G("sendUrlInResTiming") && r.push("13=" + encodeURIComponent(t)), $(r, n[0]), X("690.2096.2044", r)
                }
            }))
        }

        function x(e, t, n) {
            var r, i, o = f._deltaMarks[e];
            if (void 0 !== t ? r = (i = N()) - t : o && (r = o[0], i = o[1], n = o[2]), void 0 !== r && void 0 !== i) {
                var a = Z(e);
                a.push("207.2154=" + H(r), "207.1428=" + H(i), "2877=" + H(i - r)), J(a, n) && (X("690.2096.2877", a), delete f._deltaMarks[e])
            }
        }

        function U(e, t, n) {
            f._accumulatedDeltas[e] || (f._accumulatedDeltas[e] = {
                count: 0,
                sumDelta: 0,
                deltaVars: {}
            }), f._accumulatedDeltas[e].count++, f._accumulatedDeltas[e].sumDelta += t, f._accumulatedDeltas[e].deltaVars = i(i({}, f._accumulatedDeltas[e].deltaVars), n)
        }

        function A() {
            Object.keys(f._accumulatedDeltas).forEach((function (e) {
                var t = f._accumulatedDeltas[e];
                x(e, t.sumDelta, {"-additional": encodeURIComponent(n.lv["json"].stringify(i(i({}, t.deltaVars), {}, {count: t.count})))})
            }))
        }

        function B() {
            if (null != M) {
                var e = Math.round(1e6 * M) / 1e6;
                X("690.2096.4004", g.concat("s=" + e)), M = null
            }
        }

        f.sendAccumulatedDelta = U;
        var V = null, q = !1;

        function F() {
            null != V && (y("largest-contentful-paint", V), V = null)
        }

        var z = function () {
            if (G("forcePaintTimeSending") || !Y()) {
                var e = G("elementTimingEntryFilter"), t = function (t) {
                    return "function" != typeof e || e(t)
                };
                try {
                    var n = new s((function (e) {
                        for (var r = e.getEntries(), i = 0; i < r.length; i++) {
                            var o = r[i];
                            if (f.isUserInteract) {
                                n.disconnect();
                                break
                            }
                            t(o) && y("element-timing." + o.identifier, o.startTime)
                        }
                    }));
                    n.observe({type: "element", buffered: !0, allowTGOFromShadowDOM: !0})
                } catch (e) {
                }
            }
        };

        function N() {
            return a.now()
        }

        function Y() {
            return f.vsStart && ("visible" !== f.vsStart || f.vsChanged)
        }

        function G(e) {
            var t = f._settings[e];
            return null === t ? null : t || ""
        }

        function H(e, t) {
            return "string" == typeof e ? encodeURIComponent(e) : Math.round(1e3 * (e - (t || 0))) / 1e3
        }

        function X(e, t) {
            p(e, t.filter(Boolean).join(","))
        }

        function J(e, t) {
            if (t) {
                var n = e.__preduce((function (e, t, n) {
                    "string" == typeof t && (e[t.split("=")[0]] = n);
                    return e
                }), {});
                Object.keys(t).forEach((function (r) {
                    if ("function" != typeof t[r]) {
                        var i = n[r], o = r + "=" + t[r];
                        void 0 === i ? e.push(o) : e[i] = o
                    }
                }))
            }
            return !0
        }

        function K(e) {
            var t = navigator.connection;
            t && e.push("2437=" + (T[t.type] || 2771), void 0 !== t.downlinkMax && "2439=" + t.downlinkMax, t.effectiveType && "2870=" + t.effectiveType, void 0 !== t.rtt && "rtt=" + t.rtt, void 0 !== t.downlink && "dwl=" + t.downlink)
        }

        t.sendElementTiming = z;
        var Q = document.createElement("link");

        function W(e, t) {
            return t = t || 0, (e = e || []).filter((function (e) {
                return e.startTime - t >= -50
            })).map((function (e) {
                var t = e.name ? e.name.split("-").map((function (e) {
                    return e[0]
                })).join("") : "u", n = Math.floor(e.startTime);
                return t + "-" + n + "-" + Math.floor(n + e.duration)
            })).join(".")
        }

        function Z(e) {
            return k.concat(["1701=" + e])
        }

        function $(e, t) {
            Object.keys(w).forEach((function (n) {
                if (n in t) {
                    var r = t[n];
                    (r || 0 === r) && e.push(w[n] + "=" + H(r))
                }
            }))
        }

        var ee = "isUserScroll", te = "isUserInteract", ne = "isVisibilityChanged", re = "isLoadEventDelayPassed"
    }
}]);