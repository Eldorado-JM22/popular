/*! v:679108 b:default c:loaders/context */
try {
    const cnc = function (e) {
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
            var t, n = Object(this), r = n.length >>> 0, o = 0;
            if (arguments.length >= 2) t = arguments[1]; else {
                for (; o < r && !(o in n);) o++;
                if (o >= r) throw new TypeError("Reduce of empty array with no initial value");
                t = n[o++]
            }
            for (; o < r; o++) o in n && (t = e(t, n[o], o, n));
            return t
        }
    })
} catch (e) {
}
(() => {
    var e, t, n = {
        69992: (e, t, n) => {
            "use strict";

            function r(e) {
                try {
                    return e()
                } catch (e) {
                    return null
                }
            }

            t.L = void 0;
            var o = r((function () {
                return n(46056)
            })) || r((function () {
                return n(35694)
            })) || r((function () {
                return n(35030)
            })) || r((function () {
                return n(69464)
            })) || r((function () {
                return n(53693)
            })) || r((function () {
                return n(43537)
            })) || r((function () {
                return n(74096)
            })) || r((function () {
                return n(17461)
            })) || r((function () {
                return n(73451)
            })) || r((function () {
                return n(30817)
            })) || r((function () {
                return n(89213)
            })) || r((function () {
                return n(87585)
            })) || r((function () {
                return n(65611)
            })) || r((function () {
                return n(57047)
            })) || r((function () {
                return n(39734)
            })) || r((function () {
                return n(30526)
            })) || r((function () {
                return n(6715)
            }));
            t.L = o
        }, 90941: (e, t, n) => {
            "use strict";

            function r(e) {
                try {
                    return e()
                } catch (e) {
                    return null
                }
            }

            t.L = void 0;
            var o = r((function () {
                return n(97013)
            })) || r((function () {
                return n(69748)
            })) || r((function () {
                return n(76349)
            })) || r((function () {
                return n(33856)
            })) || r((function () {
                return n(94004)
            })) || r((function () {
                return n(3231)
            })) || r((function () {
                return n(19825)
            })) || r((function () {
                return n(9389)
            })) || r((function () {
                return n(39387)
            })) || r((function () {
                return n(17275)
            })) || r((function () {
                return n(31911)
            })) || r((function () {
                return n(18166)
            })) || r((function () {
                return n(29057)
            })) || r((function () {
                return n(40161)
            })) || r((function () {
                return n(1455)
            })) || r((function () {
                return n(97300)
            })) || r((function () {
                return n(74238)
            }));
            t.L = o
        }, 30615: e => {
            "use strict";
            e.exports = {
                langs: ["ar", "be", "cs", "de", "en", "es", "fr", "he", "it", "ja", "kk", "pl", "pt", "ru", "tr", "uk"],
                langIndexes: {
                    1: "ru",
                    2: "uk",
                    3: "en",
                    4: "be",
                    5: "kk",
                    6: "tr",
                    15: "pt",
                    16: "he",
                    18: "de",
                    19: "es",
                    20: "cs",
                    21: "pl",
                    22: "fr",
                    23: "it",
                    24: "ja",
                    25: "ar"
                },
                defaultFallback: "ru",
                defaultLang: "en",
                fallbacks: {uk: "ru", be: "ru", kk: "ru", en: "ru"}
            }
        }, 43699: (e, t, n) => {
            "use strict";
            t.a = void 0;
            t.a = function () {
                var e = Date.now();
                (0, n(1164).SS)(), (0, n(29479).W)(), (0, n(21760).Z)(), (0, n(76079).c)(), (0, n(73133).setVersionForVas)(), (0, n(25479).Q)(), (0, n(40755).jI)();
                var t = (0, n(38710).getYaContext)();
                if (t.AdvManager || (0, n(60572).A)(), t.processCallbacks(), !t.staticOnceLoaded) {
                    (0, n(94449).p)((function () {
                        t.Rum = (0, n(31427).I)().then((function (t) {
                            return t && t.sendAccumulatedDelta("contextJsExec", r - e, {"-additional": encodeURIComponent(n.lv["json"].stringify({activeTestIds: (0, n(88772).getAllActiveTestIds)()}))}), t
                        })), (0, n(86188).w)()
                    })), t.staticOnceLoaded = !0, (0, n(13691).n)(), (0, n(28722).brakeFor)(n(28722).POINT_NAME.LOADER_INIT);
                    var r = Date.now()
                }
            }
        }, 88205: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.DEBUG_CONSOLE_ENABLED_LOCAL_STORAGE_PARAMETER = void 0, t.DEBUG_CONSOLE_ENABLED_LOCAL_STORAGE_PARAMETER = "adfoxDebugConsoleEnabled"
        }, 29916: (e, t, n) => {
            "use strict";

            function r(e) {
                i && n(5945)((function (t) {
                    e(t.debugConsole)
                }), (function (e) {
                    console.error(e, "External debug bundle loading error")
                }))
            }

            function o(e, t, n) {
                void 0 === n && (n = "info");
                var o = performance.now();
                r((function (r) {
                    r.log(e, o, n, t)
                }))
            }

            Object.defineProperty(t, "__esModule", {value: !0}), t.isAdConsoleEnabled = t.enableAdConsole = t.openAdConsole = t.isDebugMode = t.setCurrentRequestParams = t.createRequest = t.setCurrentSessionParams = t.setCurrentSessionState = t.createSession = t.error = t.warning = t.setPlaceParams = t.log = t.createRecord = void 0, t.createRecord = function (e, t) {
                var n = performance.now();
                r((function (r) {
                    r.createRecord(e, n, t)
                }))
            }, t.log = o, t.setPlaceParams = function (e, t) {
                r((function (n) {
                    n.setPlaceParams(e, t)
                }))
            }, t.warning = function (e, t) {
                o(e, t, "warning")
            }, t.error = function (e, t) {
                o(e, t, "error")
            }, t.createSession = function (e, t) {
                var n = performance.now();
                r((function (r) {
                    r.createSession(e, n, t)
                }))
            }, t.setCurrentSessionState = function (e, t) {
                var n = performance.now();
                r((function (r) {
                    r.setCurrentSessionState(e, n, t)
                }))
            }, t.setCurrentSessionParams = function (e, t) {
                r((function (n) {
                    n.setCurrentSessionParams(e, t)
                }))
            }, t.createRequest = function (e, t) {
                var n = Date.now();
                r((function (r) {
                    r.createRequest(e, n, t)
                }))
            }, t.setCurrentRequestParams = function (e, t) {
                r((function (n) {
                    n.setCurrentRequestParams(e, t)
                }))
            };
            var i = !1;
            t.isDebugMode = function () {
                return i
            }, t.openAdConsole = function (e) {
                e && (i = !0), r((function (t) {
                    e ? t.open() : t.close()
                }))
            }, t.enableAdConsole = function () {
                return n(74987).safeLocalStorage.setItem(n(88205).DEBUG_CONSOLE_ENABLED_LOCAL_STORAGE_PARAMETER, "1"), "Reload page to view console"
            }, t.isAdConsoleEnabled = function () {
                return n(42288).yf || n(74987).safeLocalStorage.getItem(n(88205).DEBUG_CONSOLE_ENABLED_LOCAL_STORAGE_PARAMETER)
            }
        }, 96054: (e, t, n) => {
            "use strict";
            var r, o = (r = function (e, t) {
                return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }, r(e, t)
            }, function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function n() {
                    this.constructor = e
                }

                r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            });
            Object.defineProperty(t, "__esModule", {value: !0}), t.Testtag = void 0;
            var i = function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }

                return o(t, e), t.prototype.getTemplate = function () {
                    return [[4, "marker"], [6, "format"], [1, "shouldRenderInIframe"], [2, null], [1, "hasVideo"], [1, "isRefresh"], [1, null], [1, "isIframe"], [1, "isHover"], [31, null], [1, "adblock"], [3, null]]
                }, t.prototype.defaults = function () {
                    return {marker: n(27265).T.WIDGET, adblock: !1, isIframe: (0, n(13058).isInIframe)(window)}
                }, t
            }(n(42726).f);
            t.Testtag = i
        }, 75539: (e, t, n) => {
            "use strict";
            var r, o = (r = function (e, t) {
                return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }, r(e, t)
            }, function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function n() {
                    this.constructor = e
                }

                r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }), i = function () {
                return i = Object.assign || function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, i.apply(this, arguments)
            };
            Object.defineProperty(t, "__esModule", {value: !0}), t.experimentBitValues = t.AdfoxTesttag = t.Bits = void 0;
            var a;
            !function (e) {
                e["marker"] = "marker", e["isIframe"] = "isIframe", e["plugin"] = "plugin", e["isAllCookies"] = "isAllCookies", e["version"] = "version", e["lastBit"] = "lastBit", e["adfoxDomain"] = "adfoxDomain", e["adfoxDomainExpPlace"] = "adfoxDomainExpPlace", e["anYandexRuExp"] = "anYandexRuExp", e["comboLoaderExp"] = "comboLoaderExp", e["redirectToComboLoaderExp"] = "redirectToComboLoaderExp", e["smartSsrExpEnabled"] = "smartSsrExpEnabled", e["smartSsrExpRender"] = "smartSsrExpRender", e["methodCall"] = "methodCall", e["marginsForLazyInitExp"] = "marginsForLazyInitExp", e["reloadTimeoutExp"] = "reloadTimeoutExp", e["reloadIfAdWasSeenExp"] = "reloadIfAdWasSeenExp"
            }(a = t.Bits || (t.Bits = {}));
            var s = function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }

                return o(t, e), t.prototype.getTemplate = function () {
                    return [[4, a.marker], [8, null], [4, a.marginsForLazyInitExp], [1, a.isIframe], [3, a.methodCall], [1, a.isAllCookies], [4, null], [1, a.smartSsrExpEnabled], [1, a.smartSsrExpRender], [2, a.reloadTimeoutExp], [2, a.reloadIfAdWasSeenExp], [8, null], [10, a.version], [1, a.plugin], [2, null], [1, a.lastBit]]
                }, t.prototype.defaults = function () {
                    var e, t;
                    return i(((e = {})[a.marker] = n(27265).T.ADFOX, e[a.isIframe] = Number(window.top !== window.self), e[a.plugin] = !1, e[a.isAllCookies] = n(83097).C, e), (0, n(88772).useExperimentFlag)("IGNORE_VERSION_IN_TESTTAG_17863") ? {} : ((t = {})[a.version] = Number((0, n(98601).getBundleVersion)()), t))
                }, t
            }(n(42726).f);
            t.AdfoxTesttag = s, t.experimentBitValues = function (e) {
                return "exp" === e ? 3 : "ctl" === e ? 1 : 0
            }
        }, 85081: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0});
            var n = function () {
                function e(e, t, n) {
                    this.isDestroyed = !1, this.destroyHandlers = [], this.win = e, this.doc = e.document, this.params = this.processParams(t), this.callbacks = n
                }

                return e.prototype.renderTo = function (e) {
                    this.container = e, this.beforeRender(), this.render(), this.isDestroyed || this.afterRender()
                }, e.prototype.destroy = function () {
                    this.isDestroyed || (this.isDestroyed = !0, this.removeEvents())
                }, e.prototype.beforeRender = function () {
                }, e.prototype.render = function () {
                }, e.prototype.afterRender = function () {
                }, e.prototype.processParams = function (e) {
                    return e
                }, e.prototype.removeEvents = function () {
                    for (var e = 0; e < this.destroyHandlers.length; e++) this.destroyHandlers[e]();
                    this.destroyHandlers = []
                }, e.prototype.triggerCallback = function (e, t) {
                    !this.isDestroyed && this.callbacks && this.callbacks[e] && this.callbacks[e](t)
                }, e
            }();
            t["default"] = n
        }, 3796: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.DEFAULT_RELOAD_TIMEOUT = t.TURBO_MAX_SIZE = void 0, t.TURBO_MAX_SIZE = {
                width: 300,
                height: 300
            }, t.DEFAULT_RELOAD_TIMEOUT = 30
        }, 94024: (e, t) => {
            "use strict";
            var n;
            t.bU = t.hp = void 0, function (e) {
                e["ON_DESTROY"] = "onDestroy"
            }(n = t.hp || (t.hp = {}));
            var r = function () {
                function e() {
                    for (var e in this.cbManagers = {}, n) {
                        var t = n[e];
                        this.cbManagers[t] = new o
                    }
                }

                return e.prototype.addCallback = function (e, t) {
                    var n = this.cbManagers[e];
                    n && n.addCallback(t)
                }, e.prototype.callCallbacksOnceByName = function (e) {
                    var t = this.cbManagers[e];
                    t && t.callCallbacksOnce()
                }, e
            }();
            t.bU = r;
            var o = function () {
                function e() {
                    this.callbacks = []
                }

                return e.prototype.addCallback = function (e) {
                    this.callbacks.push(e)
                }, e.prototype.callCallbacksOnce = function () {
                    for (; this.callbacks.length > 0;) this.callbacks.shift()()
                }, e
            }()
        }, 66470: (e, t, n) => {
            "use strict";
            t.e = void 0;
            var r = 1, o = function () {
                function e(e, t, o) {
                    void 0 === o && (o = {});
                    var i = this;
                    this.win = e, this.bannerOptions = t, this.extOptions = o, this.initialized = !1, this.isHidden = !1, this.isBidRequested = !1, this.ad = null, this.reloadCounter = 0, this.cbManager = new (n(94024).bU), this.headerBidding = n(66038).ns.headerBidding, this.useHB = Boolean(this.headerBidding), this.headerBiddingTimeoutId = null, this.bannerId = t.uniqueId, this.slotNumber = r++, this.awaitAdInitialization = new (n(48777).B), Promise.resolve().then((function () {
                        void 0 === i.deferredInitialize && (i.deferredInitialize = !0)
                    }))
                }

                return e.prototype.getContainerId = function () {
                    var e = this.bannerOptions, t = e.containerId, n = e.element;
                    return t || n && n.id
                }, e.prototype.getContainerElement = function () {
                    var e = this.bannerOptions, t = e.element, n = e.containerId;
                    return t || n && window.document.getElementById(n)
                }, e.prototype.initialize = function () {
                    var e = this;
                    if (!this.initialized) {
                        var t = this.getContainerElement();
                        t && (0, n(74192).initAdSeenObserver)(this.bannerId, t), void 0 === this.deferredInitialize && (this.deferredInitialize = !1), this.useHB = this.useHB || Boolean(this.isIdRegisteredInHB(this.bannerOptions.containerId));
                        var r = this.useHB && !this.headerBidding;
                        if (this.isBidRequested || r) {
                            var o = (0, n(73852).addAdfoxNamespace)(this.win);
                            o.hbCallbacks = o.hbCallbacks || [], o.hbCallbacks.push((function () {
                                e.initAd()
                            }))
                        } else this.initAd()
                    }
                }, e.prototype.destroyWithoutCallbackInvocation = function () {
                    this.destroy(!1)
                }, e.prototype.destroy = function (e) {
                    void 0 === e && (e = !0), e && this.cbManager.callCallbacksOnceByName(n(94024).hp.ON_DESTROY), this.destroyAd()
                }, e.prototype.reload = function (e) {
                    var t = this;
                    if (this.initialized) {
                        this.preparedLayoutConfig = (null == e ? void 0 : e.preparedLayoutConfig) || void 0;
                        var r = 1e3 * ("exp" === (0, n(88772).useExperimentFlag)("ADFOX_RELOAD_TIMEOUT_EXP") ? (0, n(88772).useExperimentFlag)("ADFOX_RELOAD_TIMEOUT_VALUE") || n(3796).DEFAULT_RELOAD_TIMEOUT : 0),
                            o = Date.now() - this.initializationTime, i = function () {
                                t.reloadCall(e)
                            };
                        clearTimeout(this.lastReloadTimeout), o < r ? this.lastReloadTimeout = window.setTimeout(i, r - o) : i()
                    }
                }, e.prototype.reloadCall = function (e) {
                    var t = this.getContainerElement();
                    t && this.canReload(e) && (this.reloadCounter++, n(388).renderPerfomanceManager.continueLoggingTime(this.bannerId), e && e.bid && (this.bannerOptions.bid = e.bid), this.destroyAd({isReload: !0}), this.awaitAdInitialization = new (n(48777).B), (0, n(74192).initAdSeenObserver)(this.bannerId, t), this.initAd())
                }, e.prototype.canReload = function (e) {
                    if (this.isHidden) return !1;
                    var t = (e || {}).onlyIfWasVisible,
                        r = void 0 === t ? "exp" === (0, n(88772).useExperimentFlag)("ADFOX_RELOAD_IF_AD_WAS_SEEN") : t,
                        o = (0, n(74192).getAdSeenObserver)(this.bannerId);
                    return !("floorAd" !== this.bannerOptions.type && r && o && !o.wasAdSeen)
                }, e.prototype.hide = function () {
                    var e = this;
                    this.deferredCall((function () {
                        e.isHidden = !0, e.ad.hide()
                    }))
                }, e.prototype.show = function () {
                    var e = this;
                    this.deferredCall((function () {
                        e.isHidden = !1, e.ad.show()
                    }))
                }, e.prototype.initAd = function () {
                    var e, t, r;
                    (0, n(29916).isDebugMode)() && (0, n(29916).createSession)(this.bannerId, {}), n(388).renderPerfomanceManager.setBlockData(this.bannerId, {
                        slotNumber: this.slotNumber,
                        reloadCounter: this.reloadCounter,
                        deferredInitialize: this.deferredInitialize
                    }), n(388).renderPerfomanceManager.logRenderLabel(this.bannerId, n(388).BlockRenderSteps.AdChosen);
                    var o = this.getContainerId();
                    this.headerBidding = n(66038).ns.headerBidding;
                    var i = Boolean(null === (r = null === (t = null === (e = this.headerBidding) || void 0 === e ? void 0 : e.managerForAdfox) || void 0 === t ? void 0 : t.hasOneOfAdUnits) || void 0 === r ? void 0 : r.call(t, [o]));
                    this.useHB = i, i ? (n(388).renderPerfomanceManager.setBlockData(this.bannerId, {isHB: !0}), this.createBidAd()) : (n(388).renderPerfomanceManager.setBlockData(this.bannerId, {isHB: !1}), this.createAd())
                }, e.prototype.createBidAd = function () {
                    var e = this, t = !1;
                    if (this.reloadCounter > 0) {
                        var n = this.getContainerId();
                        this.headerBidding.managerForAdfox.requestBidForContainer(n)
                    }
                    this.headerBiddingTimeoutId || (this.headerBiddingTimeoutId = window.setTimeout((function () {
                        t = !0, e.isBidRequested = !1, e.handleHeaderBiddingTimeout()
                    }), this.getHeaderBiddingTimeout())), this.isBidRequested = !0, this.getBids((function (n) {
                        e.isBidRequested = !1, t || (e.clearHeaderBiddingTimeout(), e.createAd(n))
                    }))
                }, e.prototype.createAd = function (e, t) {
                    var r, o = this;
                    void 0 === e && (e = []), void 0 === t && (t = !0);
                    var i = (0, n(22658).C)(this.bannerOptions);
                    n(388).renderPerfomanceManager.setBlockData(this.bannerId, {
                        ownerId: this.bannerOptions.ownerId,
                        params: this.bannerOptions.params
                    }), t ? (i.bid = i.bid || [], (r = i.bid).push.apply(r, e)) : i.bid = [];
                    var a = i.onDestroy;
                    i.onDestroy = function () {
                        o.destroyWithoutCallbackInvocation(), a && a()
                    }, i.bannerId = this.bannerId, i.reloadCounter = this.reloadCounter, i.slotNumber = this.slotNumber, i.methodCall = this.extOptions.methodCall || n(75596).MethodCall.UNKNOWN, i.getTrustedOwners = function () {
                        return o.headerBidding && o.headerBidding.getTrustedOwners ? o.headerBidding.getTrustedOwners() : []
                    }, i.layoutConfig = this.preparedLayoutConfig, this.ad = new (n(6645).M)(this.win, i), this.initialized = !0, this.initializationTime = Date.now(), this.awaitAdInitialization.resolve(), this.ad.render()
                }, e.prototype.destroyAd = function (e) {
                    this.initialized = !1, this.awaitAdInitialization.reject(), this.clearHeaderBiddingTimeout(), this.ad && (this.ad.show(), this.ad.destroy(e), this.ad = null), (0, n(74192).destroyAdSeenObserver)(this.bannerId), this.isHidden = !1
                }, e.prototype.getBids = function (e) {
                    var t = this.getContainerId();
                    this.headerBidding.managerForAdfox.getBidsForAdfoxByContainerId(t, e)
                }, e.prototype.isIdRegisteredInHB = function (e) {
                    var t, r, o,
                        i = this.win.YaHeaderBiddingSettings && this.win.YaHeaderBiddingSettings.adUnits || (null === (o = null === (r = null === (t = this.headerBidding) || void 0 === t ? void 0 : t.managerForAdfox) || void 0 === r ? void 0 : r.getAdunits) || void 0 === o ? void 0 : o.call(r));
                    return Boolean((0, n(41486).isString)(e) && i && (0, n(38179).some)(i, (function (t) {
                        return t.code === e
                    })))
                }, e.prototype.getHeaderBiddingTimeout = function () {
                    var e;
                    try {
                        e = 2 * n(66038).ns.headerBidding.managerForAdfox.getRequestTimeout()
                    } catch (e) {
                    }
                    return e && isFinite(e) || (e = n(97125).E), 2 * (e = Math.max(e, n(97125).E))
                }, e.prototype.clearHeaderBiddingTimeout = function () {
                    this.headerBiddingTimeoutId && (clearTimeout(this.headerBiddingTimeoutId), this.headerBiddingTimeoutId = null)
                }, e.prototype.handleHeaderBiddingTimeout = function () {
                    (0, n(28274).errorStrict)("ADFOX_HB_TIMEOUT"), (0, n(18816).Kd)("Adfox HeaderBidding failed"), this.createAd([], !1)
                }, e.prototype.getErrorsLog = function () {
                    return this.ad.getErrorsLog()
                }, e.prototype.deferredCall = function (e) {
                    this.initialized ? e() : this.awaitAdInitialization.promise.then((function () {
                        return e()
                    }))
                }, e
            }();
            t.e = o
        }, 31144: (e, t, n) => {
            "use strict";
            var r, o = (r = function (e, t) {
                return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }, r(e, t)
            }, function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function n() {
                    this.constructor = e
                }

                r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }), i = function (e) {
                return e && e.__esModule ? e : {default: e}
            };
            Object.defineProperty(t, "__esModule", {value: !0});
            var a = function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }

                return o(t, e), t.prototype.destroy = function () {
                    this.isDestroyed || this.abortXhr(), e.prototype.destroy.call(this)
                }, t.prototype.sendRequestWithUrl = function (e, t) {
                    var r = this, o = {
                        method: t.method,
                        timeout: 3e4,
                        withCredentials: !0,
                        data: t.data,
                        headers: t.headers,
                        onerror: function (e) {
                            var t = e.message;
                            return r.triggerError(t)
                        },
                        onload: function (e) {
                            return r.processResponse(e)
                        },
                        ontimeout: function () {
                            return r.triggerError("Timeout")
                        }
                    };
                    this.abortXhr = (0, n(39701).request)(e, o)
                }, t.prototype.processResponse = function (e) {
                    this.isDestroyed || this.parseResponseData(e)
                }, t.prototype.parseResponseData = function (e) {
                    try {
                        var t = n.lv["json"].parse(e);
                        this.triggerCallback("success", t)
                    } catch (e) {
                        this.triggerError("Can't parse backend response")
                    }
                }, t.prototype.triggerError = function (e) {
                    void 0 === e && (e = "Can't load AdFox prepare code"), this.triggerCallback("error", {
                        type: "adfoxBackend",
                        message: e
                    })
                }, t
            }(i(n(85081))["default"]);
            t["default"] = a
        }, 83097: (e, t, n) => {
            "use strict";
            t.C = void 0, t.C = (0, n(51245).isPercent)(25)
        }, 35235: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.generatePr = void 0;
            t.generatePr = function () {
                return Math.floor(4294967295 * Math.random()) + 1
            }
        }, 17235: (e, t, n) => {
            "use strict";
            t.g = void 0, t.g = function () {
                return n(73852).ns.pr || n(66038).ns.headerBidding && n(66038).ns.headerBidding.pr
            }
        }, 55008: (e, t, n) => {
            "use strict";
            t.R = void 0;
            t.R = function (e) {
                var t = e.win, r = e.date, o = void 0 === r ? new Date : r, i = e.pr1,
                    a = void 0 === i ? (0, n(35235).generatePr)() : i,
                    s = n(1689).isAMP ? t.context.sourceUrl : t.document.referrer,
                    u = n(1689).isAMP ? t.context.sourceUrl : t.location;
                return {
                    dl: String(u),
                    date: (0, n(7193).Y)(o),
                    pd: o.getDate().toString(),
                    pdh: t.screen.height.toString(),
                    pdw: t.screen.width.toString(),
                    pr1: a.toString(),
                    pr: (0, n(17235).g)().toString(),
                    prr: s,
                    pv: o.getHours().toString(),
                    pw: o.getDay().toString(),
                    extid_loader: (0, n(21625).encode)((0, n(67028).getCookie)(t.document, "_ym_uid") || ""),
                    extid_tag_loader: t.location.hostname
                }
            }
        }, 22501: (e, t, n) => {
            "use strict";
            var r = function () {
                return r = Object.assign || function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, r.apply(this, arguments)
            };
            Object.defineProperty(t, "__esModule", {value: !0}), t.getLoaderRequestParams = t.getAdNumber = t.resetAdNumber = t.incrementAdNumber = void 0;
            var o = 0, i = 0;
            t.incrementAdNumber = function () {
                return i++
            };
            t.resetAdNumber = function () {
                return i = 0
            };
            t.getAdNumber = function () {
                return i
            };
            t.getLoaderRequestParams = function (e) {
                var t, a = e.win, s = e.date, u = void 0 === s ? new Date : s, c = e.pr1,
                    d = void 0 === c ? (0, n(35235).generatePr)() : c, l = e.testtag, f = e.isTurbo,
                    p = void 0 === f ? (0, n(33586).isAdfoxPageTurbo)(a) : f, _ = e.containerId, v = e.isFullscreen,
                    h = e.preparedLayoutConfig;
                n(42288).h2 && (0, n(59936).c)((function (e) {
                    return (new e).logBlockSize(void 0, _, h)
                })), h.set("req_no", o++), h.set("ad_no", (t = (0, n(37209).r)(), i + t)), v && (h.set("w", h.get("win_width")), h.set("width", h.get("win_width")), h.set("h", h.get("win_height")), h.set("height", h.get("win_height")));
                var E = r(r({}, (0, n(55008).R)({win: a, date: u, pr1: d})), {
                    ylv: "0." + n(1241).cQ,
                    ybv: "0." + (0, n(98601).getBundleVersion)(),
                    ytt: l.toString(),
                    "is-turbo": Number(p).toString(),
                    "skip-token": (0, n(45601).K)(),
                    "ad-session-id": (0, n(49131).getSessionId)(),
                    "layout-config": String(h),
                    "enable-flat-highlight": "1",
                    "pcode-version": "".concat(n(1241).cQ),
                    "aim-banner-id": n(30878).f2.next(),
                    "aim-design-id": n(30878).pv.next(),
                    "aim-subdesign-id": n(30878).Ng.next(),
                    "aim-design-name": n(30878).cF.next()
                }), g = (0, n(4696).u)(h.get("w"));
                g && (E["available-width"] = g);
                var m = (0, n(4696).u)(h.get("h"));
                m && (E["available-height"] = m);
                var O = (0, n(18677).i)();
                return O && (E.shyid = O), n(70709).IS_YANDEX_RU_DOMAIN && (E["yaru"] = "true"), E
            }
        }, 18677: (e, t, n) => {
            "use strict";
            t.i = void 0, t.i = function (e) {
                var t;
                void 0 === e && (e = window);
                var r = null === (t = e.yandex) || void 0 === t ? void 0 : t.getSiteUid;
                if ((0, n(26413).isFunction)(r)) return String(r())
            }
        }, 78322: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.loadBanner = t.initDeps = void 0, t.initDeps = n(17560).initDeps, t.loadBanner = n(17560).loadBanner
        }, 17560: (e, t, n) => {
            "use strict";

            function r(e) {
                return new Promise((function (t, r) {
                    n(89663)((function (n) {
                        var r = n.bannerLoader;
                        t(r(e))
                    }), r)
                }))
            }

            t.initDeps = t.loadBanner = void 0, t.loadBanner = r, t.initDeps = function () {
                r("banner.direct"), (0, n(62763).loadSafeframe)(window)
            }
        }, 66038: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.ns = t.win = void 0, t.win = window, t.ns = t.win.Ya || (t.win.Ya = {})
        }, 97125: (e, t) => {
            "use strict";
            t.E = void 0, t.E = 300
        }, 75596: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.BannerStates = t.MethodCall = void 0, function (e) {
                e[e["UNKNOWN"] = 0] = "UNKNOWN", e[e["CREATE"] = 1] = "CREATE", e[e["CREATE_ADAPTIVE"] = 2] = "CREATE_ADAPTIVE", e[e["CREATE_SCROLL"] = 3] = "CREATE_SCROLL", e[e["PRELOAD"] = 4] = "PRELOAD"
            }(t.MethodCall || (t.MethodCall = {})), function (e) {
                e["desktop"] = "desktop", e["tablet"] = "tablet", e["phone"] = "phone"
            }(t.BannerStates || (t.BannerStates = {}))
        }, 4190: (e, t, n) => {
            "use strict";
            var r = function () {
                return r = Object.assign || function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, r.apply(this, arguments)
            };
            Object.defineProperty(t, "__esModule", {value: !0}), t.sendRenderData = void 0;
            var o = (0, n(1966).m)(n(388).BlockRenderSteps);
            t.sendRenderData = function (e, t) {
                var i = n(388).renderPerfomanceManager.getInfo(e), a = (0, n(74192).getStatus)(e),
                    s = r(r({}, function (e) {
                        return null === e ? {} : (0, n(12773).reduce)((0, n(73087).getObjectEntries)(e.timing), (function (e, t) {
                            var n = t[0], r = t[1];
                            return e["adfox.".concat(n in o ? o[n] : n)] = r, e
                        }), {})
                    }(i)), a ? {adSeenWaiting: a.total} : {});
                if (!(0, n(36484).x)(s)) {
                    var u = r(r({}, t), a ? {isInViewport: a.wasAdSeen} : {});
                    (0, n(4374).sendRumDeltas)(s, u)
                }
                n(388).renderPerfomanceManager.stopLoggingTime(e)
            }
        }, 388: (e, t, n) => {
            "use strict";
            var r, o, i, a, s = (r = function (e, t) {
                return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }, r(e, t)
            }, function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function n() {
                    this.constructor = e
                }

                r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            });
            Object.defineProperty(t, "__esModule", {value: !0}), t.renderPerfomanceManager = t.BlockRenderSteps = void 0;
            var u, c = function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }

                return s(t, e), t
            }(n(31913).x);
            !function (e) {
                e["AdChosen"] = "010", e["AdReload"] = "010", e["AdCreated"] = "020", e["AdStartedRender"] = "030", e["AdfoxXhrRequestPrepared"] = "040", e["AdfoxJsonpRequestPrepared"] = "040", e["AdfoxXhrRequestLoaded"] = "050", e["AdfoxJsonpRequestLoaded"] = "050", e["AdTypeChosen"] = "060", e["BundleLoaded"] = "070", e["BundleRendered"] = "080", e["OldRendered"] = "080", e["HBRendered"] = "080"
            }(u = t.BlockRenderSteps || (t.BlockRenderSteps = {})), t.renderPerfomanceManager = new c({
                initSteps: (o = {}, o[u.AdChosen] = 1, o[u.AdReload] = 1, o[u.AdCreated] = 1, o[u.AdStartedRender] = 1, o[u.AdfoxXhrRequestPrepared] = 1, o[u.AdfoxJsonpRequestPrepared] = 1, o),
                dataSteps: (i = {}, i[u.AdfoxXhrRequestLoaded] = 1, i[u.AdfoxJsonpRequestLoaded] = 1, i),
                renderSteps: (a = {}, a[u.AdTypeChosen] = 1, a[u.BundleLoaded] = 1, a[u.BundleRendered] = 1, a[u.OldRendered] = 1, a[u.HBRendered] = 1, a)
            })
        }, 17503: (e, t) => {
            "use strict";
            t.R = void 0;
            var n = Math.random();
            t.R = function (e) {
                for (var t = 0, r = {
                    percent: 0,
                    value: ""
                }, o = 0; o < e.length && (t += e[o].percent, r = e[o], !(n <= t)); o++) ;
                return r.value
            }
        }, 18816: (e, t) => {
            "use strict";
            t.Kd = void 0;
            t.Kd = function (e, t) {
                return void 0 === t && (t = ""), false
            }
        }, 51245: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.isPercent = void 0;

            function n(e) {
                return Number((e / 100).toFixed(2))
            }

            t.isPercent = function (e) {
                return Math.random() < n(e)
            }
        }, 98601: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.getBundleVersion = void 0;
            var r = n(86071).b.mcodever;
            t.getBundleVersion = function () {
                return r || n(1241).J
            }
        }, 37209: (e, t) => {
            "use strict";
            t.r = void 0, t.r = function () {
                var e = window, t = 0;
                return e.Ya && e.Ya.Context && e.Ya.Context.AdvManager && e.Ya.Context.AdvManager.getCapturedCount && (t = e.Ya.Context.AdvManager.getCapturedCount()), t
            }
        }, 33994: (e, t, n) => {
            "use strict";
            t.Cy = t.h9 = void 0;
            var r, o = window;
            t.h9 = function (e) {
                var t = e.prototype, r = (0, n(94320).filter)((0, n(10407).getObjectKeys)(t), (function (e) {
                    try {
                        return "function" == typeof t[e]
                    } catch (e) {
                        return !1
                    }
                }));
                return (0, n(54136).every)(r, (function (e) {
                    return (0, n(61438).checkNativeCode)(t[e])
                }))
            };
            t.Cy = function (e) {
                var i = (void 0 === e ? {} : e).onWindowCreation, a = o.XMLHttpRequest && (0, t.h9)(o.XMLHttpRequest),
                    s = Boolean(document.body);
                return a || !s ? o.XMLHttpRequest : (r || (r = document.createElement("iframe"), (0, n(23185).setStyle)(r, {
                    overflow: "hidden",
                    display: "none",
                    position: "absolute",
                    left: "-9999px",
                    top: "-9999px",
                    width: "1px",
                    height: "1px"
                })), r.contentWindow || (document.body.appendChild(r), (0, n(26413).isFunction)(i) && r.contentWindow && i(r.contentWindow)), r.contentWindow.XMLHttpRequest)
            }
        }, 95083: (e, t, n) => {
            "use strict";
            var r;
            t.s = void 0, function (e) {
                e["COMMON"] = "adfoxAsyncParams", e["SCROLL"] = "adfoxAsyncParamsScroll", e["ADAPTIVE"] = "adfoxAsyncParamsAdaptive"
            }(r || (r = {}));

            function o(e) {
                setTimeout((function () {
                    throw e
                }))
            }

            t.s = function (e, t) {
                var i = t.create, a = t.createScroll, s = t.createAdaptive;
                (0, n(55220).ji)("adfox");
                var u = (0, n(12773).reduce)([{key: r.COMMON, cb: i}, {
                    key: r.SCROLL, cb: function (t) {
                        return a.apply(e, t)
                    }
                }, {
                    key: r.ADAPTIVE, cb: function (t) {
                        return s.apply(e, t)
                    }
                }], (function (t, r) {
                    var o = r.key, i = r.cb;
                    return t.concat(function (e, t, r) {
                        var o = e[t], i = [];
                        return (0, n(85200).isArray)(o) && (o.length && (0, n(55220).X0)("adfox"), (0, n(15137).forEach)(o, (function (t) {
                            try {
                                r.call(e, t)
                            } catch (e) {
                                i.push(e)
                            }
                        }))), e[t] = {
                            push: function (e) {
                                try {
                                    r(e)
                                } catch (e) {
                                }
                            }
                        }, i
                    }(e, o, i))
                }), []);
                (0, n(15137).forEach)(u, o)
            }
        }, 33586: (e, t, n) => {
            "use strict";
            var r;
            Object.defineProperty(t, "__esModule", {value: !0}), t.resetIsTurboCached = t.isAdfoxPageTurbo = void 0;
            t.isAdfoxPageTurbo = function (e, t) {
                return void 0 === t && (t = (0, n(33200).$)(e)), void 0 === r ? r = t : r
            };
            t.resetIsTurboCached = function () {
                return r = void 0
            }
        }, 94286: (e, t, n) => {
            "use strict";
            t.i = void 0;
            var r = window;
            t.i = new (n(17622).a)(r)
        }, 31832: (e, t, n) => {
            "use strict";
            var r = function () {
                return r = Object.assign || function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, r.apply(this, arguments)
            };
            t.se = t.XW = t.Cp = t.$Z = t.ob = t.j2 = t.ss = t.oo = t.MA = t.Ue = void 0;
            var o = window;

            function i(e) {
                return a(n(75596).MethodCall.CREATE, e, (function (e) {
                    e.initialize()
                }))
            }

            function a(e, t, i) {
                t = r({}, t);
                var a = (0, n(66648).generateHexString)(10);
                if (t.uniqueId = a, t.isPreload = e === n(75596).MethodCall.PRELOAD, (0, n(29916).isDebugMode)() && (0, n(29916).createRecord)(a, {
                    type: "adfox",
                    methodCall: e,
                    containerId: t.containerId,
                    config: t
                }), (0, n(55220).X0)("adfox"), t.containerId) {
                    var s = document.getElementById(t.containerId);
                    if (s && s.children.length > 0) {
                        for (var u = !1, c = 0, d = s.children; c < d.length; c++) {
                            var l = d[c];
                            "SCRIPT" !== l.nodeName && (l.childNodes.length > 0 && (u = !0))
                        }
                        u && "exp" === (0, n(88772).useExperimentFlag)("ADFOX_CONTAINER_CONTENT") && n(49874).logger.traceLog({
                            containerId: t.containerId,
                            href: o.location.href,
                            ownerId: t.ownerId,
                            params: t.params
                        }, "ADFOX_CONTAINER_CONTENT", 100)
                    }
                }
                var f = (0, n(38680).L)() && (0, n(88772).useExperimentFlag)("LAZY_LOAD_ADFOX");
                !1 !== t.lazyLoad && f && (t = r(r({}, t), {lazyLoad: r(r({}, f), t.lazyLoad)}));
                var p = function (e, t, r) {
                    t.isTurbo = (0, n(33586).isAdfoxPageTurbo)(e, t.isTurbo), t.useXhr = (0, n(43303).a)(t);
                    var o = new (n(66470).e)(e, t, r);
                    return n(92647).cx.push(o), o
                }(o, t, {methodCall: e}), _ = "fullscreen" === t.type;
                if (!_ && t.lazyLoad) {
                    var v = (0, n(22658).C)(t).container;
                    (0, n(29916).isDebugMode)() && (0, n(29916).setPlaceParams)(a, {containerNode: v});
                    var h = (0, n(2540).w)({
                        project: "adfox",
                        sequentialLoading: t.sequentialLoading
                    }).addByLazyLoad(v, (function () {
                        return i(p)
                    }), t.lazyLoad);
                    p.cbManager.addCallback(n(94024).hp.ON_DESTROY, h)
                } else {
                    var E = null == (v = (0, n(22658).C)(t).container) ? void 0 : v.getAttribute("id");
                    if ((0, n(29916).isDebugMode)() && (0, n(29916).setPlaceParams)(a, {containerNode: v}), !_ && E) {
                        var g = (0, n(2540).w)({
                            project: "adfox",
                            sequentialLoading: t.sequentialLoading
                        }).addByDimensionObserver(v, (function (e) {
                            i(p), e()
                        }));
                        p.cbManager.addCallback(n(94024).hp.ON_DESTROY, g)
                    } else i(p)
                }
                return p
            }

            function s(e, t, o) {
                (0, n(29916).isDebugMode)() && (0, n(29916).setPlaceParams)(e.bannerId, {adaptiveOptions: r({states: t}, o)});
                var i = n(94286).i.addBanner(e, t, o);
                e.cbManager.addCallback(n(94024).hp.ON_DESTROY, i)
            }

            t.Ue = i, t.MA = function (e) {
                return a(n(75596).MethodCall.PRELOAD, e, (function (e) {
                    e.initialize()
                }))
            }, t.oo = function (e, t, r) {
                return a(n(75596).MethodCall.CREATE_ADAPTIVE, e, (function (e) {
                    s(e, t, r)
                }))
            }, t.ss = function (e, t, o) {
                var i = (0, n(88772).useExperimentFlag)("LAZY_LOAD_DEFAULT_VALUES");
                return e = r(r({}, e), {
                    lazyLoad: r(r({
                        fetchMargin: 0,
                        mobileScaling: 2
                    }, i), e.lazyLoad)
                }), a(n(75596).MethodCall.CREATE_SCROLL, e, (function (e) {
                    t ? s(e, t, o) : e.initialize()
                }))
            }, t.j2 = function (e) {
                (0, n(92647).uT)(e, (function (e) {
                    (0, n(77642).L)((function () {
                        return e.initialize()
                    }))
                }))
            }, t.ob = function (e) {
                (0, n(92647).uT)(e, (function (e) {
                    (0, n(77642).L)((function () {
                        return e.destroy()
                    }))
                }))
            }, t.$Z = function (e) {
                (0, n(92647).uT)(e, (function (e) {
                    (0, n(77642).L)((function () {
                        return e.show()
                    }))
                }))
            }, t.Cp = function (e) {
                (0, n(92647).uT)(e, (function (e) {
                    (0, n(77642).L)((function () {
                        return e.hide()
                    }))
                }))
            }, t.XW = function (e) {
                var t = [];
                return (0, n(92647).uT)(e, (function (e) {
                    var n = e.getErrorsLog();
                    n.length > 0 && t.push({containerId: e.getContainerId(), errorsLog: n})
                })), t
            }, t.se = function (e, t, r) {
                n(49874).logger.traceLog({
                    href: o.location.href,
                    attemptNumber: e,
                    pr1: t,
                    uri: r
                }, "ADFOX_OLD_CODE", 100);
                var a = (0, n(50913).$)(t, r);
                a && i(a)
            }
        }, 77642: (e, t) => {
            "use strict";
            t.L = void 0;
            var n = window;
            t.L = function (e) {
                try {
                    e()
                } catch (e) {
                    n.console && n.console.error(e)
                }
            }
        }, 18010: (e, t, n) => {
            "use strict";
            t.H = void 0;
            t.H = function (e, t) {
                var r = null, o = {};
                e instanceof HTMLElement || (0, n(41486).isString)(e) ? (r = e, t && (o = t)) : e && (o = e), (0, n(92647).uT)(r, (function (e) {
                    var t = e.getContainerId(), r = document.getElementById(t);
                    if (r) {
                        var i = new (n(43).LayoutConfig)(r), a = i.get("w"), s = i.get("h");
                        0 === a && 0 === s || (o.preparedLayoutConfig = i, (0, n(77642).L)((function () {
                            return e.reload(o)
                        })))
                    }
                }))
            }
        }, 92647: (e, t, n) => {
            "use strict";
            t.uT = t.cx = void 0, t.cx = [], t.uT = function (e, r) {
                void 0 === e && (e = null);
                var o = function (e) {
                    if ((0, n(41486).isString)(e)) return (0, n(94320).filter)(t.cx, (function (t) {
                        return t.getContainerId() === e
                    }));
                    if (e) return (0, n(94320).filter)(t.cx, (function (t) {
                        return t.getContainerElement() === e
                    }));
                    return t.cx
                }(e);
                return (0, n(15137).forEach)(o, (function (e) {
                    r(e)
                }))
            }
        }, 71422: (e, t, n) => {
            "use strict";
            t.R = void 0, t.R = function () {
                var e = window, t = e.YA_SSP_PAGE && e.YA_SSP_ERROR_LOGS;
                (e.YA_MOB_SDK_PAGE && e.YA_SDK_ERROR_LOGS || t) && (0, n(41110).on)(window, "error", (function (e) {
                    var r = t ? "UNCAUGHT_SSP" : "UNCAUGHT_SDK";
                    n(49874).logger.error(e, r, {code: r}, 100)
                }))
            }
        }, 26134: (e, t, n) => {
            "use strict";
            t.rG = void 0;

            function r(e) {
                return void 0 === e && (e = window), String(e.location)
            }

            function o(e) {
                return void 0 === e && (e = window), (0, n(21625).encode)((0, n(67028).getCookie)(e.document, "_ym_uid") || "")
            }

            function i(e) {
                return void 0 === e && (e = window), e.location.hostname
            }

            function a(e) {
                if (void 0 === e && (e = window), e.Ya) {
                    var t = e.Ya.adfoxCode && e.Ya.adfoxCode.pr, n = e.Ya.headerBidding && e.Ya.headerBidding.pr;
                    return t || n
                }
            }

            t.rG = function (e) {
                return void 0 === e && (e = window), {
                    adSessionId: (0, n(49131).getSessionId)(),
                    location: r(e),
                    extid_loader: o(e),
                    extid_tag_loader: i(e),
                    pr: a(e)
                }
            }
        }, 931: (e, t, n) => {
            "use strict";
            t.V = void 0;
            var r = window;

            function o() {
                n(73852).ns.pr = r.pr = (0, n(35235).generatePr)(), n(66038).ns.headerBidding && (n(66038).ns.headerBidding.pr = n(73852).ns.pr)
            }

            t.V = function () {
                n(73852).ns.pr = function () {
                    "number" != typeof r.pr && (r.pr = n(66038).ns.headerBidding && n(66038).ns.headerBidding.pr || (0, n(35235).generatePr)());
                    return r.pr
                }(), n(73852).ns.create = n(31832).Ue, n(73852).ns.createScroll = n(31832).ss, n(73852).ns.createAdaptive = n(31832).oo, n(73852).ns.reload = n(18010).H, n(73852).ns.destroy = n(31832).ob, n(73852).ns.initialize = n(31832).j2, n(73852).ns.hide = n(31832).Cp, n(73852).ns.show = n(31832).$Z, n(73852).ns.preload = n(31832).MA, n(73852).ns.getErrorsLog = n(31832).XW, n(73852).ns.clearSession = o, n(73852).ns.getPageRequestParams = n(26134).rG, n(66038).ns.openAdConsole = n(29916).openAdConsole, n(66038).ns.enableAdConsole = n(29916).enableAdConsole, (0, n(29916).isAdConsoleEnabled)() && (0, n(29916).openAdConsole)(!0), "function" != typeof r.AdFox_getCodeScript && (r.AdFox_getCodeScript = n(31832).se), (0, n(95083).s)(r, {
                    create: n(31832).Ue,
                    createScroll: n(31832).ss,
                    createAdaptive: n(31832).oo
                })
            }
        }, 33356: (e, t, n) => {
            "use strict";
            t.H = void 0;
            var r = ["https://yastatic.net/", "https://avatars.mds.yandex.net/", "https://mc.yandex.ru/", "https://ads.adfox.ru"];
            t.H = function () {
                for (var e = (0, n(50775).getHead)(window), t = 0; t < r.length; t++) {
                    var o = document.createElement("link");
                    o.rel = "preconnect", o.href = r[t], e.appendChild(o)
                }
            }
        }, 54569: (e, t, n) => {
            "use strict";
            t.p = void 0, t.p = !(0, n(36191).testProperty)("display:flex") || !n(71232).H || !window.Promise
        }, 4977: (e, t, n) => {
            "use strict";
            t.B = void 0, t.B = function e(t) {
                void 0 === t && (t = "HEAD");
                try {
                    var r = new XMLHttpRequest, o = document.location.href;
                    r.onreadystatechange = function () {
                        if (r.readyState === XMLHttpRequest.DONE) {
                            if (!(200 === r.status) && "HEAD" === t) return void e("GET");
                            var i = r.getResponseHeader("Content-Security-Policy");
                            i && n(49874).logger.traceLog({csp: i, href: o}, "CSP_IS_ENABLED", 100)
                        }
                    }, r.open(t, o, !0), r.send()
                } catch (e) {
                }
            }
        }, 11959: (e, t, n) => {
            "use strict";
            var r, o = (r = function (e, t) {
                return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }, r(e, t)
            }, function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function n() {
                    this.constructor = e
                }

                r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }), i = function (e, t, n) {
                if (n || 2 === arguments.length) for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
                return e.concat(r || Array.prototype.slice.call(t))
            };
            Object.defineProperty(t, "__esModule", {value: !0}), t.manageLastBanner = void 0, t.manageLastBanner = function (e) {
                var t, r = function (e) {
                    return "number" == typeof e && isFinite(e) && !(e % 1)
                }, a = function (e) {
                    (0, n(62082).report)(t.readyToShowEvent), e(t.content), t = void 0
                };
                return function (e) {
                    function n() {
                        return null !== e && e.apply(this, arguments) || this
                    }

                    return o(n, e), n.prototype._loadBundle = function (n) {
                        for (var o = this, s = [], u = 1; u < arguments.length; u++) s[u - 1] = arguments[u];
                        if (n.attributes && n.attributes.lastBanner) if (t) a((function (t) {
                            return e.prototype._loadBundle.apply(o, i([t], s, !1))
                        })); else {
                            var c = n.attributes.lastBanner, d = c.content, l = c.readyToShowEvent, f = c.sheduleCount;
                            r(f) && (t = {
                                content: d,
                                readyToShowEvent: l,
                                sheduleCount: f
                            }).sheduleCount--, e.prototype._loadBundle.apply(this, i([n], s, !1))
                        } else t && "number" == typeof t.sheduleCount && t.sheduleCount--, e.prototype._loadBundle.apply(this, i([n], s, !1))
                    }, n.prototype._resetBanner = function (n) {
                        var r = this;
                        t && t.sheduleCount <= 0 ? e.prototype._resetBanner.call(this, n, (function () {
                            return a((function (t) {
                                return e.prototype._loadBundle.call(r, t)
                            }))
                        })) : e.prototype._resetBanner.call(this, n)
                    }, n
                }(e)
            }
        }, 73852: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.getScriptStringForSettingGlobalVars = t.ns = t.addAdfoxNamespace = void 0;
            t.addAdfoxNamespace = function (e) {
                return e.Ya || (e.Ya = {}), e.Ya.adfoxCode || (e.Ya.adfoxCode = {}), e.Ya.adfoxCode
            }, t.ns = (0, t.addAdfoxNamespace)(window);
            var n = function () {
                var e = Boolean(t.ns.xhrExperiment && t.ns.xhrExperiment.isXhr),
                    n = Boolean(t.ns.xhrExperiment && t.ns.xhrExperiment.isControl);
                return 'ns["xhrExperiment"] = {isXhr: '.concat(e, ", isControl: ").concat(n, "};")
            };
            t.getScriptStringForSettingGlobalVars = function (e) {
                var r = e.isXhr;
                return [";(function (w) {", "var ns = (".concat(t.addAdfoxNamespace.toString(), ")(w);"), 'ns["isXhr"] = '.concat(r, ";"), n(), "})(window);"].join("")
            }
        }, 86071: (e, t, n) => {
            "use strict";
            t.b = void 0;
            var r = (0, n(28377).parseUrlUsingCache)(window.location.href), o = r.hash.substr(1) || r.search;
            t.b = (0, n(28377).parseQueryString)(o)
        }, 31582: (e, t) => {
            "use strict";
            t.n = void 0;
            t.n = function (e) {
                return e.replace(/^http:/, "https:")
            }
        }, 39701: (e, t, n) => {
            "use strict";
            var r, o, i = (r = function (e, t) {
                return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }, r(e, t)
            }, function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function n() {
                    this.constructor = e
                }

                r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            });
            Object.defineProperty(t, "__esModule", {value: !0}), t.request = t.Methods = void 0, function (e) {
                e["GET"] = "GET", e["POST"] = "POST", e["HEAD"] = "HEAD"
            }(o = t.Methods || (t.Methods = {}));
            var a = function () {
                function e(e, t) {
                    this.url = e, this.params = t
                }

                return e.prototype.open = function () {
                    this.xr.open(this.params.method, this.url), this.setSettings()
                }, e.prototype.setSettings = function () {
                    this.setCallbacks()
                }, e.prototype.setTimeout = function () {
                    var e = this, t = this.params.timeout;
                    t && t > 0 && (this.timer = window.setTimeout((function () {
                        e.onTimeout(), e.abort()
                    }), t))
                }, e.prototype.clearTimeout = function () {
                    this.timer && clearTimeout(this.timer)
                }, e.prototype.setCallbacks = function () {
                    var e = this, t = function (t) {
                        return e.onError(t && t.message || "Error!")
                    };
                    this.xr.onerror = t, this.xr.ontimeout = t
                }, e.prototype.onLoad = function (e) {
                    this.clearTimeout(), this.params.onload && this.params.onload(e)
                }, e.prototype.onTimeout = function () {
                    this.isTimeouted = !0, this.params.ontimeout && this.params.ontimeout()
                }, e.prototype.onError = function (e, t) {
                    this.isTimeouted || (this.clearTimeout(), this.params.onerror && this.params.onerror({
                        message: e,
                        code: t,
                        xr: this.xr
                    }))
                }, e.prototype.send = function () {
                    this.setTimeout(), this.xr.send(this.params.data)
                }, e.prototype.abort = function () {
                    this.xr && this.xr.abort()
                }, e
            }(), s = function (e) {
                function t(t, r) {
                    var o = e.call(this, t, r) || this, i = (0, n(33994).Cy)();
                    return o.xr = new i, o.open(), o
                }

                return i(t, e), t.prototype.setCallbacks = function () {
                    var t = this;
                    e.prototype.setCallbacks.call(this);
                    var n = this.xr;
                    n.onreadystatechange = function () {
                        4 === n.readyState && (200 === n.status || 304 === n.status ? t.onLoad(n.response) : t.onError(n.statusText, n.status))
                    }
                }, t.prototype.setSettings = function () {
                    e.prototype.setSettings.call(this), this.addHeaders(), this.xr.withCredentials = this.params.withCredentials
                }, t.prototype.abort = function () {
                    4 !== this.xr.readyState && e.prototype.abort.call(this)
                }, t.prototype.addHeaders = function () {
                    var e = this, t = this.params.headers;
                    t && (0, n(38715).forOwn)(t, (function (t, n) {
                        return e.xr.setRequestHeader(n, t)
                    }))
                }, t
            }(a), u = function (e) {
                function t(t, r) {
                    var o = e.call(this, (0, n(31582).n)(t), r) || this;
                    return o.xr = new window.XDomainRequest, o.open(), o
                }

                return i(t, e), t.prototype.setCallbacks = function () {
                    var t = this;
                    e.prototype.setCallbacks.call(this), this.xr.onload = function () {
                        return t.onLoad(t.xr.responseText)
                    }
                }, t.prototype.send = function () {
                    var t = this;
                    setTimeout((function () {
                        return e.prototype.send.call(t)
                    }), 0)
                }, t
            }(a);
            t.request = function (e, t) {
                void 0 === t && (t = {});
                var n = {
                    method: t.method || o.POST,
                    withCredentials: void 0 === t.withCredentials || t.withCredentials,
                    timeout: t.timeout,
                    data: t.data,
                    headers: t.headers,
                    onerror: t.onerror,
                    onload: t.onload,
                    ontimeout: t.ontimeout
                }, r = window.XDomainRequest ? new u(e, n) : new s(e, n);
                return r.send(), function () {
                    return r.abort()
                }
            }
        }, 45601: (e, t, n) => {
            "use strict";
            t.K = void 0, t.K = function () {
                var e = window, t = "";
                return n(1689).isAMP && e.context.master.Ya && e.context.master.Ya.getSkipToken ? t = e.context.master.Ya.getSkipToken() : e.Ya && e.Ya.Context && e.Ya.Context.AdvManager && e.Ya.Context.AdvManager.getSkipToken && (t = e.Ya.Context.AdvManager.getSkipToken()), t
            }
        }, 10505: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.prepareCustomHeaders = void 0, t.prepareCustomHeaders = function (e) {
                if (!(0, n(7153).isObject)(e)) return {};
                var t = {};
                return (0, n(38715).forOwn)(e, (function (e, r) {
                    (0, n(41486).isString)(r) && "X" === r.charAt(0).toUpperCase() && (t[r] = String(e))
                })), t
            }
        }, 1241: (e, t) => {
            "use strict";
            t.J = t.cQ = void 0, t.cQ = 679108, t.J = 679108
        }, 43303: (e, t, n) => {
            "use strict";
            t.a = void 0;
            var r = (0, n(33586).isAdfoxPageTurbo)(window);
            n(73852).ns.xhrExperiment || (n(73852).ns.xhrExperiment = function (e) {
                var t = n(86071).b["xhr-experiment-winner"], r = (0, n(94320).filter)(e, (function (e) {
                    return e.name === t
                }))[0];
                return r ? r.value : (0, n(17503).R)(e)
            }([{name: "xhr", percent: 1, value: {isXhr: !0, isControl: !1}}, {
                name: "control",
                percent: 0,
                value: {isXhr: !1, isControl: !0}
            }, {name: "common", percent: 0, value: {isXhr: !1, isControl: !1}}]));
            var o = [255389], i = Boolean(n(73852).ns.isXhr) || Boolean(n(86071).b.xhr);
            t.a = function (e) {
                var t = e.useXhr, a = e.ownerId,
                    s = Boolean(n(73852).ns.xhrExperiment && n(73852).ns.xhrExperiment.isXhr);
                return (!a || -1 === o.indexOf(a)) && (r || i || t || s)
            }
        }, 47175: (e, t) => {
            "use strict";
            t.L = void 0, t.L = function () {
                var e = window.context, t = (null == e ? void 0 : e.sourceUrl) || "";
                return t && /^http:\/\/localhost:/i.test(t) ? "localhost" : t
            }
        }, 60406: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.hslToRgb = void 0, t.hslToRgb = function (e, t, n) {
                var r, o;
                if (e /= 360, n /= 100, 0 === (t /= 100)) return [r = 255 * n, r, r];
                for (var i, a = 2 * n - (o = n < .5 ? n * (1 + t) : n + t - n * t), s = [0, 0, 0], u = 0; u < 3; u++) (i = e + 1 / 3 * -(u - 1)) < 0 && i++, i > 1 && i--, r = 6 * i < 1 ? a + 6 * (o - a) * i : 2 * i < 1 ? o : 3 * i < 2 ? a + (o - a) * (2 / 3 - i) * 6 : a, s[u] = 255 * r;
                return s
            }
        }, 95146: (e, t) => {
            "use strict";

            function n(e, t, n) {
                var r = 0, o = 0, i = 0, a = Math.floor(6 * e), s = 6 * e - a, u = n * (1 - t), c = n * (1 - s * t),
                    d = n * (1 - (1 - s) * t);
                switch (a % 6) {
                    case 0:
                        r = n, o = d, i = u;
                        break;
                    case 1:
                        r = c, o = n, i = u;
                        break;
                    case 2:
                        r = u, o = n, i = d;
                        break;
                    case 3:
                        r = u, o = c, i = n;
                        break;
                    case 4:
                        r = d, o = u, i = n;
                        break;
                    case 5:
                        r = n, o = u, i = c
                }
                return [255 * r, 255 * o, 255 * i]
            }

            t.WE = void 0, t.WE = function (e, t, r) {
                var o = n(Math.max(0, Math.min(e, 360)) / 360, Math.max(0, Math.min(t, 100)) / 100, Math.max(0, Math.min(r, 100)) / 100),
                    i = o[0], a = o[1], s = o[2];
                return [Math.max(0, Math.min(Math.round(i), 255)), Math.max(0, Math.min(Math.round(a), 255)), Math.max(0, Math.min(Math.round(s), 255))]
            }
        }, 51846: (e, t, n) => {
            "use strict";

            function r(e, t, n) {
                e /= 255, t /= 255, n /= 255;
                var r = Math.max(e, t, n), o = Math.min(e, t, n), i = r - o, a = 0;
                r === o ? a = 0 : e === r ? a = (t - n) / i : t === r ? a = 2 + (n - e) / i : n === r && (a = 4 + (e - t) / i), (a = Math.min(60 * a, 360)) < 0 && (a += 360);
                var s = (o + r) / 2;
                return [a, 100 * (r === o ? 0 : s <= .5 ? i / (r + o) : i / (2 - r - o)), 100 * s]
            }

            function o(e, t, n) {
                e /= 255, t /= 255, n /= 255;
                var r = Math.max(e, t, n), o = Math.min(e, t, n), i = r - o, a = 0, s = 0 === r ? 0 : i / r, u = r;
                if (r !== o) {
                    switch (r) {
                        case e:
                            a = (t - n) / i + (t < n ? 6 : 0);
                            break;
                        case t:
                            a = (n - e) / i + 2;
                            break;
                        case n:
                            a = (e - t) / i + 4
                    }
                    a /= 6
                }
                return [a, s, u]
            }

            function i(e) {
                return (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3
            }

            function a(e) {
                return n(73269).D.charAt(e / 16 << 0) + n(73269).D.charAt(e % 16)
            }

            Object.defineProperty(t, "__esModule", {value: !0}), t.dec2hex = t.rgbToHexString = t.rgbFromHexString = t.isRgbLight = t.getRgbBrightness = t.changeRgbBrightness = t.setRgbBrightness = t.rgbToHsv = t.rgbToUnNormalizedHsv = t.rgbToHsl = void 0, t.rgbToHsl = r, t.rgbToUnNormalizedHsv = o, t.rgbToHsv = function (e, t, n) {
                var r = o(e, t, n), i = r[0], a = r[1], s = r[2];
                return [Math.max(0, Math.min(360, Math.round(360 * i))), Math.max(0, Math.min(100, Math.round(100 * a))), Math.max(0, Math.min(100, Math.round(100 * s)))]
            }, t.setRgbBrightness = function (e, t) {
                var o = r(e[0], e[1], e[2]), i = o[0], a = o[1];
                return (0, n(60406).hslToRgb)(i, a, t)
            }, t.changeRgbBrightness = function (e, t) {
                var o = r(e[0], e[1], e[2]), i = o[0], a = o[1], s = o[2];
                return (0, n(60406).hslToRgb)(i, a, (0, n(55362).clamp)(s + t, 0, 100))
            }, t.getRgbBrightness = i, t.isRgbLight = function (e, t) {
                return void 0 === t && (t = 127), i(e) > t
            }, t.rgbFromHexString = function (e) {
                return [parseInt(e.substr(1, 2), 16), parseInt(e.substr(3, 2), 16), parseInt(e.substr(5, 2), 16)]
            }, t.rgbToHexString = function (e) {
                var t = e[0], n = e[1], r = e[2];
                return "#".concat(a(t)).concat(a(n)).concat(a(r))
            }, t.dec2hex = a
        }, 21898: (e, t) => {
            "use strict";
            t.mg = t.DT = t.Pn = void 0, function (e) {
                e[e["RED"] = 0] = "RED", e[e["GREEN"] = 1] = "GREEN", e[e["BLUE"] = 2] = "BLUE", e[e["ALPHA"] = 3] = "ALPHA"
            }(t.Pn || (t.Pn = {})), function (e) {
                e[e["HUE"] = 0] = "HUE", e[e["SATURATION"] = 1] = "SATURATION", e[e["LIGHTNESS"] = 2] = "LIGHTNESS"
            }(t.DT || (t.DT = {})), function (e) {
                e[e["HUE"] = 0] = "HUE", e[e["SATURATION"] = 1] = "SATURATION", e[e["VALUE"] = 2] = "VALUE"
            }(t.mg || (t.mg = {}))
        }, 17925: (e, t, n) => {
            "use strict";
            var r = function (e, t, n) {
                if (n || 2 === arguments.length) for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
                return e.concat(r || Array.prototype.slice.call(t))
            };
            Object.defineProperty(t, "__esModule", {value: !0}), t.Color = t.createColor = void 0, t.createColor = function (e) {
                return new o(e)
            };
            var o = function () {
                function e(e) {
                    this.rgba = [0, 0, 0, 1], this.set(e)
                }

                return e.isColor = function (t) {
                    return t instanceof e || Boolean(t && void 0 !== t.rgba)
                }, e.prototype.set = function (t) {
                    if (!t) return this;
                    (0, n(41486).isString)(t) ? t = function (e) {
                        var t = (0, n(32568).normalizeColorHash)(e);
                        if (!t) return null;
                        return [parseInt(t.substr(1, 2), 16), parseInt(t.substr(3, 2), 16), parseInt(t.substr(5, 2), 16), parseInt(t.substr(7, 2), 16) / 255]
                    }(t) : e.isColor(t) && (t = t.toRgbaArray());
                    var r = t, o = function (e) {
                        if (!e || !(0, n(85200).isArray)(e)) return !1;
                        if (!(0, n(6485).isInRange)(e.length, 3, 4)) return !1;
                        for (var t = 0; t < e.length; t++) if (!i(t, e[t])) return !1;
                        return !0
                    }(r);
                    if (o) for (var a = 0; a < r.length; a++) this.setChannel(a, r[a]);
                    return this
                }, e.prototype.setChannel = function (e, t) {
                    i(e, t) && (e === n(21898).Pn.ALPHA ? this.rgba[e] = Number(t.toPrecision(2)) : this.rgba[e] = t >> 0)
                }, e.prototype.setAlpha = function (e) {
                    return this.setChannel(n(21898).Pn.ALPHA, e), this
                }, e.prototype.toString = function () {
                    return 1 !== this.rgba[n(21898).Pn.ALPHA] ? this.toRgbaString() : this.toHexString()
                }, e.prototype.toHexString = function () {
                    return "#".concat(this.toHexArray().join(""))
                }, e.prototype.toRgbString = function () {
                    return "rgb(".concat(this.toRgbArray().join(","), ")")
                }, e.prototype.toRgbaString = function () {
                    return "rgba(".concat(this.rgba.join(","), ")")
                }, e.prototype.toHexArray = function () {
                    var e = this.rgba;
                    return [(0, n(51846).dec2hex)(e[n(21898).Pn.RED]), (0, n(51846).dec2hex)(e[n(21898).Pn.GREEN]), (0, n(51846).dec2hex)(e[n(21898).Pn.BLUE])]
                }, e.prototype.toRgbArray = function () {
                    var e = this.rgba;
                    return [e[n(21898).Pn.RED], e[n(21898).Pn.GREEN], e[n(21898).Pn.BLUE]]
                }, e.prototype.toRgbaArray = function () {
                    return r([], this.rgba, !0)
                }, e.prototype.getLuminosity = function () {
                    for (var e = this.rgba, t = [], n = 0; n < 3; n++) {
                        var r = e[n] / 255;
                        t[n] = r <= .03928 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4)
                    }
                    return .2126 * t[0] + .7152 * t[1] + .0722 * t[2]
                }, e.prototype.getContrast = function (t) {
                    var n = this.getLuminosity(), r = new e(t).getLuminosity();
                    return n > r ? (n + .05) / (r + .05) : (r + .05) / (n + .05)
                }, e.prototype.getBrightness = function () {
                    return (0, n(51846).getRgbBrightness)(this.rgba)
                }, e.prototype.isLight = function (e) {
                    return (0, n(51846).isRgbLight)(this.rgba, e)
                }, e.prototype.toReadable = function (t) {
                    return new e(this.isLight(t) ? "#000" : "#fff")
                }, e.prototype.mix = function (t, r) {
                    void 0 === r && (r = .5), r = 1 - r;
                    var o = new e(t), i = this.rgba, a = o.toRgbaArray(), s = i[n(21898).Pn.ALPHA],
                        u = a[n(21898).Pn.ALPHA], c = 2 * r - 1, d = s - u,
                        l = ((c * d == -1 ? c : (c + d) / (1 + c * d)) + 1) / 2, f = 1 - l;
                    return new e([l * i[n(21898).Pn.RED] + f * a[n(21898).Pn.RED], l * i[n(21898).Pn.GREEN] + f * a[n(21898).Pn.GREEN], l * i[n(21898).Pn.BLUE] + f * a[n(21898).Pn.BLUE], s * r + u * (1 - r)])
                }, e.prototype.toGreyscale = function () {
                    var t = this.rgba,
                        r = .3 * t[n(21898).Pn.RED] + .59 * t[n(21898).Pn.GREEN] + .11 * t[n(21898).Pn.BLUE];
                    return new e([r, r, r, t[n(21898).Pn.ALPHA]])
                }, e.prototype.lighten = function (e) {
                    var t = this.getHSL();
                    return t[2] += 100 * e, this.clone().setHSL(t)
                }, e.prototype.darken = function (e) {
                    var t = this.getHSL();
                    return t[2] -= 100 * e, this.clone().setHSL(t)
                }, e.prototype.saturate = function (e) {
                    var t = this.getHSL();
                    return t[1] += t[1] * e, this.clone().setHSL(t)
                }, e.prototype.desaturate = function (e) {
                    var t = this.getHSL();
                    return t[1] -= t[1] * e, this.clone().setHSL(t)
                }, e.prototype.getHSL = function () {
                    var e = this.rgba, t = e[0], r = e[1], o = e[2];
                    return (0, n(51846).rgbToHsl)(t, r, o)
                }, e.prototype.setHSL = function (e) {
                    var t = e[0], r = e[1], o = e[2];
                    return this.set((0, n(60406).hslToRgb)(t, r, o))
                }, e.prototype.getHSV = function () {
                    var e = this.rgba, t = e[0], r = e[1], o = e[2];
                    return (0, n(51846).rgbToHsv)(t, r, o)
                }, e.prototype.setHSV = function (e) {
                    var t = e[0], r = e[1], o = e[2];
                    return this.set((0, n(95146).WE)(t, r, o))
                }, e.prototype.clone = function () {
                    return new e(this.rgba)
                }, e.prototype.getAverage = function () {
                    return (this.rgba[n(21898).Pn.RED] + this.rgba[n(21898).Pn.GREEN] + this.rgba[n(21898).Pn.BLUE]) / 3
                }, e.prototype.invert = function () {
                    var t = this.rgba;
                    return new e([255 - t[0], 255 - t[1], 255 - t[2]])
                }, e
            }();

            function i(e, t) {
                return e === n(21898).Pn.ALPHA ? (0, n(6485).isInRange)(t, 0, 1) : (0, n(6485).isInRange)(t, 0, 255)
            }

            t.Color = o
        }, 32568: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.normalizeColorHash = void 0;
            var n = /^#?/, r = /^#[0-9A-F]{8}$/, o = /^#[0-9A-F]{6}$/, i = /^#([0-9A-F])([0-9A-F])([0-9A-F])$/,
                a = /^#([0-9A-F])([0-9A-F])([0-9A-F])([0-9A-F])$/;
            t.normalizeColorHash = function (e) {
                return e = (e + "").toUpperCase().replace(n, "#"), r.test(e) ? e : o.test(e) ? e + "FF" : i.test(e) ? e.replace(i, "#$1$1$2$2$3$3FF") : a.test(e) ? e.replace(a, "#$1$1$2$2$3$3$4$4") : null
            }
        }, 24931: (e, t) => {
            "use strict";
            t.i = void 0, t.i = function (e) {
                void 0 === e && (e = window);
                try {
                    return (e.navigator || {}).userAgent || ""
                } catch (e) {
                    return ""
                }
            }
        }, 60571: (e, t, n) => {
            "use strict";
            t.B = void 0, t.B = function (e) {
                return void 0 === e && (e = window), /Apple/.test(e.navigator.vendor) && (0, n(67576).b)(e)
            }
        }, 19399: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.isFirefox = void 0, t.isFirefox = (0, n(97885).v)()
        }, 97885: (e, t) => {
            "use strict";
            t.v = void 0;
            t.v = function (e) {
                return void 0 === e && (e = window), /firefox/.test(e.navigator.userAgent.toLowerCase())
            }
        }, 82377: (e, t, n) => {
            "use strict";
            t.P = void 0, t.P = function (e) {
                void 0 === e && (e = window);
                var t = e.navigator.userAgent.toLowerCase();
                return /ipad|iphone|ipod/.test(t) && !e.MSStream && !(0, n(73673).f)(e)
            }
        }, 50880: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.isMobile = void 0, t.isMobile = (0, n(63607).isMobile)()
        }, 63607: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.isMobile = void 0;
            t.isMobile = function (e) {
                void 0 === e && (e = window);
                var t = e.navigator.userAgent;
                return "string" == typeof t && t.includes("Mac") && "ontouchend" in document || /Mobi|Android|iPad/i.test(t)
            }
        }, 98667: (e, t, n) => {
            "use strict";
            t.B = void 0;
            t.B = function (e) {
                void 0 === e && (e = window);
                var t = (0, n(24931).i)(e).toLowerCase();
                if (t.indexOf("android") > -1) return !1;
                var r = t.replace(/\(.+?\)/gi, "").split(" ").map((function (e) {
                    return e.trim().split("/")[0]
                })).filter((function (e) {
                    return e && "mobile" !== e
                }));
                return 4 === r.length && "mozilla" === r[0] && "applewebkit" === r[1] && "version" === r[2] && "safari" === r[3]
            }
        }, 13677: (e, t, n) => {
            "use strict";
            t.z = void 0, t.z = function (e) {
                return void 0 === e && (e = window), (0, n(98667).B)(e) || (0, n(82377).P)(e) || (0, n(60571).B)(e)
            }
        }, 62141: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.isSafariBasedBrowser = void 0, t.isSafariBasedBrowser = (0, n(13677).z)()
        }, 78383: (e, t) => {
            "use strict";
            t.H = void 0, t.H = function (e) {
                return "ontouchstart" in e
            }
        }, 6780: (e, t) => {
            "use strict";
            t.H = void 0, t.H = function (e) {
                return function (e) {
                    return Boolean(e.PointerEvent)
                }(e) && function (e) {
                    return (e.navigator || {}).maxTouchPoints || 0
                }(e) > 0
            }
        }, 64029: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.isTouchDevice = void 0, t.isTouchDevice = (0, n(67576).b)()
        }, 64278: (e, t, n) => {
            "use strict";
            t.g = void 0;
            var r = (0, n(15735).map)(n(93199).pg, (function (e) {
                return "(".concat(e, "any-pointer:coarse)")
            })).join(",");
            t.g = function (e) {
                return (0, n(74392).V)(e, r)
            }
        }, 34820: (e, t, n) => {
            "use strict";
            t.nI = t.xA = void 0, t.xA = (0, n(15735).map)(n(93199).pg, (function (e) {
                return "(".concat(e, "touch-enabled)")
            })).join(","), t.nI = function (e) {
                return (0, n(74392).V)(e, t.xA)
            }
        }, 67576: (e, t, n) => {
            "use strict";
            t.b = void 0, t.b = function (e) {
                return void 0 === e && (e = window), (0, n(6780).H)(e) || (0, n(64278).g)(e) || (0, n(34820).nI)(e) || (0, n(78383).H)(e)
            }
        }, 73673: (e, t) => {
            "use strict";
            t.f = void 0;
            t.f = function (e) {
                return void 0 === e && (e = window), e.navigator.userAgent.indexOf("UCBrowser") > -1
            }
        }, 83946: (e, t) => {
            "use strict";
            t.m = void 0;
            t.m = function (e) {
                return void 0 === e && (e = window), e.devicePixelRatio || e.screen.deviceXDPI && e.screen.deviceXDPI / e.screen.logicalXDPI || 1
            }
        }, 52452: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.getPixelRatio = void 0, Object.defineProperty(t, "getPixelRatio", {
                enumerable: !0,
                get: function () {
                    return n(83946).m
                }
            })
        }, 194: (e, t) => {
            "use strict";
            t.E = void 0, t.E = function () {
                return Boolean(window.location.ancestorOrigins)
            }
        }, 52210: (e, t, n) => {
            "use strict";
            t.g = void 0, t.g = (0, n(194).E)()
        }, 36191: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.testProperty = void 0;
            t.testProperty = function (e, t) {
                if (void 0 === t && (t = n(93199).pg), !e) return !1;
                var r = e.split(":"), o = r[0], i = r[1];
                if (i || (i = "none"), window.CSS && window.CSS.supports) {
                    for (var a = 0; a < t.length; a++) if (window.CSS.supports(t[a] + o, i)) return !0;
                    return !1
                }
                var s = new Image;
                for (a = 0; a < t.length; a++) if (s.style.cssText = "".concat(t[a] + o, ":").concat(i), s.style.length) return !0;
                return !1
            }
        }, 7506: (e, t) => {
            "use strict";
            t.i = void 0;
            t.i = function (e) {
                void 0 === e && (e = window);
                var t = e.Object;
                try {
                    var n = {};
                    return t.defineProperty(n, "sentinel", {}), "sentinel" in n
                } catch (e) {
                    return !1
                }
            }
        }, 71232: (e, t, n) => {
            "use strict";
            t.H = void 0, t.H = (0, n(7506).i)()
        }, 88443: (e, t) => {
            "use strict";

            function n(e, t, n, r) {
                var o = (t - r) / (e - n), i = t - o * e;
                return function (e) {
                    return o * e + i
                }
            }

            Object.defineProperty(t, "__esModule", {value: !0}), t.getLimitedLinearFunction = t.getLimit = t.getLimitFunction = t.getLinearFunction = void 0, t.getLinearFunction = n;

            function r(e, t, n) {
                return Math.max(t, Math.min(e, n))
            }

            t.getLimitFunction = function (e, t) {
                return function (n) {
                    return Math.max(e, Math.min(n, t))
                }
            }, t.getLimit = r, t.getLimitedLinearFunction = function (e, t, o, i) {
                var a = n(e, t, o, i);
                return function (e) {
                    return r(a(e), t, i)
                }
            }
        }, 18502: (e, t, n) => {
            "use strict";
            t.i = void 0, t.i = !(0, n(61438).checkNativeCode)(Math.random) || Math.random() == Math.random()
        }, 70321: (e, t, n) => {
            "use strict";
            t.M = void 0, t.M = n(18502).i ? n(67763).U : function () {
                return Math.random()
            }
        }, 67763: (e, t, n) => {
            "use strict";
            t.U = void 0;
            var r = 2147483647, o = Date.now() * (0, n(20354).no)() % r;
            t.U = function () {
                return ((o = 16807 * o % r) - 1) / 2147483646
            }
        }, 61438: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.checkNativeCode = void 0, t.checkNativeCode = function (e) {
                if (!e || !e.toString) return !1;
                var t = e.toString();
                return /\[native code\]/.test(t) || /\/\* source code not available \*\//.test(t)
            }
        }, 95121: (e, t, n) => {
            "use strict";
            var r;
            t.LA = t.YE = void 0;
            t.YE = function (e) {
                void 0 === e && (e = document.body);
                var t = (0, n(98318).$)(e);
                return {
                    JSON: t.contentWindow.JSON, clean: function () {
                        return (0, n(37267).Q)(t)
                    }
                }
            }, t.LA = function (e) {
                return void 0 === e && (e = window), void 0 === r && (r = i(e) ? e.JSON : {
                    stringify: o("stringify"),
                    parse: o("parse")
                }), r
            };
            var o = function (e) {
                return function (n) {
                    var r = (0, t.YE)(), o = r.JSON, i = r.clean;
                    try {
                        return o[e](n)
                    } finally {
                        i()
                    }
                }
            };

            function i(e) {
                return void 0 === e && (e = window), e.JSON && (0, n(61438).checkNativeCode)(e.JSON.stringify) && (0, n(61438).checkNativeCode)(e.JSON.parse)
            }
        }, 48742: (e, t, n) => {
            "use strict";
            t.C = void 0, t.C = function (e, t) {
                var r = e[t];
                if (!(0, n(61438).checkNativeCode)(r)) {
                    var o = r;
                    try {
                        delete e[t];
                        var i = e[t];
                        "function" == typeof i && (r = i), e[t] = o
                    } catch (e) {
                    }
                }
                return r
            }
        }, 22511: (e, t) => {
            "use strict";
            var n, r;
            Object.defineProperty(t, "__esModule", {value: !0}), t.getDownlink = void 0, function (e) {
                e[e["UNKNOWN"] = 0] = "UNKNOWN", e[e["ETHERNET"] = 1] = "ETHERNET", e[e["WIFI"] = 2] = "WIFI", e[e["CELL_2G"] = 3] = "CELL_2G", e[e["CELL_3G"] = 4] = "CELL_3G"
            }(n || (n = {})), function (e) {
                e["BLUETOOTH"] = "bluetooth", e["CELLULAR"] = "cellular", e["ETHERNET"] = "ethernet", e["MIXED"] = "mixed", e["NONE"] = "none", e["OTHER"] = "other", e["UNKNOWN"] = "unknown", e["WIFI"] = "wifi", e["WIMAX"] = "wimax"
            }(r || (r = {})), t.getDownlink = function (e) {
                void 0 === e && (e = window);
                var t = e.navigator.connection, o = void 0 === t ? {} : t;
                if ("number" == typeof o.downlink) return o.downlink;
                if ("number" == typeof o.downlinkMax) return o.downlinkMax;
                if ("string" == typeof o.type || "number" == typeof o.type) switch (o.type) {
                    case r.BLUETOOTH:
                        return 3;
                    case n.CELL_2G:
                        return .384;
                    case n.CELL_3G:
                    case r.CELLULAR:
                        return 2;
                    case r.WIMAX:
                        return 37;
                    case r.NONE:
                        return 0;
                    case n.ETHERNET:
                    case r.ETHERNET:
                    case n.WIFI:
                    case r.WIFI:
                    case r.MIXED:
                        return 10;
                    case n.UNKNOWN:
                    case r.UNKNOWN:
                    case r.OTHER:
                }
                return -1
            }
        }, 8627: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.assignProperties = void 0, t.assignProperties = function (e, t) {
                for (var r in t) (0, n(98581).hasOwnProperty)(t, r) && (e[r] = t[r])
            }
        }, 38715: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.forOwn = void 0, t.forOwn = function (e, t, r) {
                for (var o in e) (0, n(98581).hasOwnProperty)(e, o) && t.call(r, e[o], o, e)
            }
        }, 73087: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.getObjectEntries = void 0, t.getObjectEntries = function (e) {
                return "function" == typeof Object.entries ? Object.entries(e) : (0, n(10407).getObjectKeys)(e).map((function (t) {
                    return [t, e[t]]
                }))
            }
        }, 10407: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.getObjectKeys = void 0, t.getObjectKeys = function (e) {
                if ("function" == typeof Object.keys) return Object.keys(e);
                var t = [];
                for (var r in e) (0, n(98581).hasOwnProperty)(e, r) && t.push(r);
                return t
            }
        }, 98581: (e, t) => {
            "use strict";
            t.hasOwnProperty = void 0, t.hasOwnProperty = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
        }, 1966: (e, t, n) => {
            "use strict";
            t.m = void 0, t.m = function (e) {
                var t = {};
                return (0, n(38715).forOwn)(e, (function (e, n) {
                    t[e] = n
                })), t
            }
        }, 36484: (e, t, n) => {
            "use strict";
            t.x = void 0, t.x = function (e) {
                return !(0, n(10407).getObjectKeys)(e).length
            }
        }, 7153: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.isObject = void 0, t.isObject = function (e) {
                var t = typeof e;
                return Boolean(e) && ("object" === t || "function" === t)
            }
        }, 80908: (e, t, n) => {
            "use strict";
            t.O = void 0, t.O = function (e, t) {
                var r = {};
                return (0, n(10407).getObjectKeys)(e).forEach((function (n) {
                    r[n] = t(e[n], n)
                })), r
            }
        }, 95721: (e, t, n) => {
            "use strict";
            t.U = void 0;
            t.U = function (e, t) {
                for (var r = 0, o = t.split("."); r < o.length; r++) {
                    var i = o[r];
                    if (!(0, n(7153).isObject)(e)) {
                        e = void 0;
                        break
                    }
                    e = e[i]
                }
                return e
            }
        }, 9562: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.set = void 0;
            t.set = function (e, t, r) {
                if (!(0, n(7153).isObject)(e)) return e;
                for (var o = e, i = t.split("."), a = i.pop(), s = 0, u = i; s < u.length; s++) {
                    var c = u[s], d = e[c];
                    e = (0, n(7153).isObject)(d) ? d : e[c] = {}
                }
                return e[a] = r, o
            }
        }, 71238: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.tryStringify = void 0, t.tryStringify = function (e) {
                var t;
                try {
                    t = n.lv["json"].stringify(e)
                } catch (e) {
                }
                return t
            }
        }, 30224: (e, t, n) => {
            "use strict";
            t.p = void 0, t.p = function (e, t) {
                (0, n(64459).$)(e) ? e.dispatch(t) : e(t)
            }
        }, 9744: (e, t, n) => {
            "use strict";
            t.k = void 0, t.k = function (e, t) {
                e.forEach((function (e) {
                    (0, n(30224).p)(e, t)
                }))
            }
        }, 50773: (e, t, n) => {
            "use strict";
            t.M = void 0;
            var r = function () {
                function e() {
                    this.on = [], this.once = []
                }

                return e.prototype.add = function () {
                    for (var e, t = this, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                    return (e = this.on).push.apply(e, n), function () {
                        return t.remove.apply(t, n)
                    }
                }, e.prototype.addOne = function () {
                    for (var e, t = this, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                    return (e = this.once).push.apply(e, n), function () {
                        return t.remove.apply(t, n)
                    }
                }, e.prototype.promise = function () {
                    var e = this;
                    return new Promise((function (t) {
                        return e.addOne(t)
                    }))
                }, e.prototype.dispatch = function (e) {
                    var t = this.once;
                    this.once = [], (0, n(9744).k)(this.on, e), (0, n(9744).k)(t, e)
                }, e.prototype.removeAll = function () {
                    this.on.length = 0, this.once.length = 0
                }, e.prototype.remove = function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    this.on = this.on.filter((function (t) {
                        return e.indexOf(t) < 0
                    })), this.once = this.once.filter((function (t) {
                        return e.indexOf(t) < 0
                    }))
                }, e
            }();
            t.M = r
        }, 64459: (e, t) => {
            "use strict";
            t.$ = void 0, t.$ = function (e) {
                return "function" == typeof e.dispatch
            }
        }, 32691: (e, t) => {
            "use strict";
            t.M = void 0, t.M = "__ADB_CONFIG__"
        }, 27944: (e, t) => {
            "use strict";
            t.f = void 0, function (e) {
                e[e["doNotMatch"] = 0] = "doNotMatch", e[e["image"] = 1] = "image", e[e["refresh"] = 2] = "refresh", e[e["all"] = 3] = "all", e[e["scrumble"] = 4] = "scrumble"
            }(t.f || (t.f = {}))
        }, 72218: (e, t, n) => {
            "use strict";
            t.v = void 0;
            var r = {
                pid: "",
                encode: {key: ""},
                replaceClasses: [],
                detect: {links: [], custom: [], iframes: []},
                cookieMatching: {
                    publisherTag: "",
                    publisherKey: "",
                    types: [],
                    type: n(27944).f.doNotMatch,
                    redirectUrl: ["//an.yand", "ex.ru/map", "uid/"].join(""),
                    imageUrl: "/static/img/logo.gif/",
                    cryptedUidUrl: "https://http-check-headers.yandex.ru",
                    cryptedUidCookie: "crookie",
                    cryptedUidTTL: 336
                },
                additionalParams: {},
                cookieTTL: 336,
                extuidCookies: [],
                debug: !1,
                force: !1,
                disableShadow: !1,
                forcecry: {enabled: !1, expires: 0, percent: 0},
                treeProtection: {enabled: !1},
                countToXhr: !1,
                blockToIframeSelectors: [],
                pcodeDebug: !1
            };
            t.v = "string" == typeof n(32691).M ? r : n(32691).M
        }, 2681: (e, t, n) => {
            "use strict";
            t.F = void 0, t.F = function (e) {
                return !!Boolean(e) && ((0, n(26413).isFunction)(e.encodeCSS) && (0, n(26413).isFunction)(e.encodeUrl) && (0, n(26413).isFunction)(e.decodeUrl) && (0, n(26413).isFunction)(e.isEncodedUrl))
            }
        }, 49820: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.encode = t.isEncoded = t.decode = void 0, t.decode = function (e) {
                return (0, n(2681).F)(n(72218).v.fn) ? n(72218).v.fn.decodeUrl(e) : e
            }, t.isEncoded = function (e) {
                return !!(0, n(2681).F)(n(72218).v.fn) && n(72218).v.fn.isEncodedUrl(e)
            }, t.encode = function (e) {
                return (0, n(2681).F)(n(72218).v.fn) ? n(72218).v.fn.encodeUrl(e) : e
            }
        }, 73266: (e, t) => {
            "use strict";

            function n(e) {
                return void 0 === e && (e = window), Boolean(e.ampSeen)
            }

            Object.defineProperty(t, "__esModule", {value: !0}), t.isAMP = t.isAmp = void 0, t.isAmp = n, t.isAMP = n()
        }, 1056: (e, t, n) => {
            "use strict";
            t.e = void 0, t.e = function (e, t) {
                return (0, n(94320).filter)(e, (function (e) {
                    return !(0, n(38179).some)(t, (function (t) {
                        return e === t
                    }))
                }))
            }
        }, 54136: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.every = void 0;
            t.every = function (e, t) {
                for (var n = 0; n < e.length; n++) if (!t(e[n], n, e)) return !1;
                return !0
            }
        }, 94320: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.filter = void 0;
            t.filter = function (e, t, n) {
                for (var r = [], o = 0; o < e.length; o++) {
                    var i = e[o];
                    t.call(n, i, o, e) && r.push(i)
                }
                return r
            }
        }, 94383: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.find = void 0;
            var r = [].find;
            t.find = (0, n(61438).checkNativeCode)(r) ? function (e, t) {
                return r.call(e, t)
            } : function (e, t) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    if (t(r, n, e)) return r
                }
            }
        }, 15137: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.forEach = void 0;
            t.forEach = function (e, t, n) {
                for (var r = 0; r < e.length; r++) t.call(n, e[r], r, e)
            }
        }, 80511: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.includes = void 0, t.includes = function (e, t) {
                return -1 !== (0, n(22886).indexOf)(e, t)
            }
        }, 22886: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.indexOf = void 0;
            t.indexOf = function (e, t, r, o) {
                void 0 === r && (r = 0), void 0 === o && (o = n);
                for (var i = r; i < e.length; i++) if (o(e[i], t)) return i;
                return -1
            };
            var n = function (e, t) {
                return e === t
            }
        }, 85200: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.isArray = void 0;
            var r = (0, n(48742).C)(Array, "isArray");
            t.isArray = Boolean(r) ? function (e) {
                return r.call(Array, e)
            } : function (e) {
                return "Array" === (0, n(91130).M)(e)
            }
        }, 15735: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.map = void 0;
            t.map = function (e, t, n) {
                for (var r = new Array(e.length), o = 0; o < e.length; o++) r[o] = t.call(n, e[o], o, e);
                return r
            }
        }, 12773: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.reduce = void 0;
            t.reduce = function (e, t, n) {
                var r = 0;
                for (arguments.length < 3 && (r = 1, n = e[0]); r < e.length; r++) n = t(n, e[r], r, e);
                return n
            }
        }, 38179: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.some = void 0;
            t.some = function (e, t) {
                for (var n = 0; n < e.length; n++) if (t(e[n], n, e)) return !0;
                return !1
            }
        }, 94114: (e, t) => {
            "use strict";
            t.N = void 0;
            t.N = function (e, t) {
                for (var n = e.slice(); n.length;) {
                    var r = t(n.shift());
                    if (!r) return;
                    n.push.apply(n, r)
                }
            }
        }, 98370: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.unique = void 0, t.unique = function (e) {
                for (var t = {}, r = 0; r < e.length; r++) {
                    var o = e[r];
                    o && (t[o] = r)
                }
                return (0, n(10407).getObjectKeys)(t)
            }
        }, 46153: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.camelizeKeys = void 0;
            t.camelizeKeys = function (e) {
                var t = {};
                return (0, n(38715).forOwn)(e, (function (e, r) {
                    t[(0, n(71288).camelize)(r)] = e
                })), t
            }
        }, 71288: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.camelize = void 0, t.camelize = function (e) {
                return e.replace(/[-|_\:]([a-z])/g, (function (e, t) {
                    return t.toUpperCase()
                }))
            }
        }, 385: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.capitalizeFirst = void 0, t.capitalizeFirst = function (e) {
                if (!e) return e;
                var t = e.split("");
                return t[0] = t[0].toUpperCase(), t.join("")
            }
        }, 55362: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.clamp = void 0, t.clamp = function (e, t, n) {
                return e > n ? n : e < t ? t : e
            }
        }, 67028: (e, t, n) => {
            "use strict";
            var r = function () {
                return r = Object.assign || function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, r.apply(this, arguments)
            };
            Object.defineProperty(t, "__esModule", {value: !0}), t.deleteCookie = t.getCookie = t.setCookie = void 0;
            t.setCookie = function (e, t, r, o) {
                void 0 === o && (o = {}), (0, n(47634).J)(o.expires) && (o.expires = o.expires.toUTCString()), void 0 === o.path && (o.path = "/");
                var i = "";
                for (var a in o) o[a] && (i += "; " + a, !0 !== o[a] && (i += "=" + o[a]));
                try {
                    var s = "".concat(encodeURIComponent(String(t)), "=").concat(encodeURIComponent(String(r)));
                    return e.cookie = s + i
                } catch (e) {
                    return
                }
            };
            t.getCookie = function (e, t) {
                var n = [];
                try {
                    n = e.cookie ? e.cookie.split("; ") : []
                } catch (e) {
                }
                for (var r, o = /(%[0-9A-Z]{2})+/g, i = 0; i < n.length; i++) {
                    var a = n[i].split("="), s = a.slice(1).join("=");
                    try {
                        var u = a[0].replace(o, decodeURIComponent);
                        if (s.replace(o, decodeURIComponent), t === u) {
                            r = decodeURIComponent(s);
                            break
                        }
                    } catch (e) {
                        return
                    }
                }
                return r
            };
            t.deleteCookie = function (e, n, o) {
                (0, t.setCookie)(e, n, "", r(r({}, o), {expires: new Date(0)}))
            }
        }, 98022: (e, t) => {
            "use strict";
            t.Q = void 0, t.Q = function (e, t) {
                var n = void 0 === t ? {} : t, r = n.content, o = n.size, i = e.ownerDocument.createElement("iframe");
                i.scrolling = "no", i.setAttribute("allowfullscreen", ""), i.style.display = "block", o && (i.height = o.height, i.width = o.width), e.appendChild(i);
                var a = i.contentDocument;
                return a.open(), r && a.write(r), a.close(), a.body.style.margin = "0", i.style.borderWidth = "0", i
            }
        }, 53018: (e, t) => {
            "use strict";
            var n;
            t.K = void 0;
            t.K = function (e) {
                return void 0 === e && (e = window), n || (n = e.document.createElement("div")), n
            }
        }, 14679: (e, t, n) => {
            "use strict";
            t.A = void 0;
            var r = (0, n(53018).K)(window);
            t.A = function (e, t) {
                var o = void 0 !== r.style[e];
                if (o && t && (0, n(41486).isString)(t)) try {
                    r.style.cssText = "".concat(e, ": ").concat(t, ";");
                    var i = Boolean(r.style.cssText);
                    return r.style.cssText = "", i
                } catch (e) {
                    return !1
                }
                return o
            }
        }, 74392: (e, t, n) => {
            "use strict";
            t.V = void 0, t.V = function (e, t) {
                if (!(0, n(26413).isFunction)(e.matchMedia)) return !1;
                var r = e.matchMedia(t);
                return (0, n(7153).isObject)(r) && Boolean(r.matches)
            }
        }, 26044: (e, t, n) => {
            "use strict";
            t.b = void 0;
            var r = {};
            t.b = function (e) {
                return void 0 === e && (e = ""), r[e] || function (e) {
                    for (var t = "".concat(e[0].toUpperCase()).concat(e.slice(1)), o = 0; o < n(93199).q1.length; o++) {
                        var i = n(93199).q1[o], a = i ? "".concat(i).concat(t) : e;
                        if ((0, n(14679).A)(a)) return r[e] = a
                    }
                    return r[e] = e
                }(e)
            }
        }, 93199: (e, t) => {
            "use strict";
            t.pg = t.q1 = void 0, t.q1 = ["", "webkit", "moz", "o", "ms"], t.pg = ["", "-webkit-", "-ms-", "-moz-", "-o-"]
        }, 23185: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.setStyle = void 0, t.setStyle = function (e, t) {
                var r = e.style;
                for (var o in t) {
                    if (t.hasOwnProperty(o)) r[(0, n(26044).b)(o)] = t[o]
                }
            }
        }, 61672: (e, t, n) => {
            "use strict";
            t.m = void 0;
            var r = Date && (0, n(26413).isFunction)(Date.now);
            t.m = r ? function () {
                return Date.now()
            } : function () {
                return (new Date).getTime()
            }
        }, 7193: (e, t) => {
            "use strict";
            t.Y = void 0;
            var n = function (e, t) {
                var n = e.toString();
                return "0000".substr(0, t - n.length) + n
            };
            t.Y = function (e) {
                var t = e.getFullYear(), r = n(e.getMonth() + 1, 2), o = n(e.getDate(), 2), i = n(e.getHours(), 2),
                    a = n(e.getMinutes(), 2), s = n(e.getSeconds(), 2), u = n(e.getMilliseconds(), 3),
                    c = function (e) {
                        var t = -e.getTimezoneOffset(), r = n(Math.floor(Math.abs(t) / 60), 2),
                            o = n(Math.abs(t) % 60, 2);
                        return "".concat(t >= 0 ? "+" : "-").concat(r, ":").concat(o)
                    }(e);
                return "".concat(t, "-").concat(r, "-").concat(o, "T").concat(i, ":").concat(a, ":").concat(s, ".").concat(u).concat(c)
            }
        }, 52406: (e, t, n) => {
            "use strict";
            t.h = void 0;
            var r = n(63541).z.length;
            t.h = r > 0 ? n(63541).z[r - 1].ownerDocument.defaultView : window
        }, 41110: (e, t, n) => {
            "use strict";

            function r(e) {
                e && e.un()
            }

            Object.defineProperty(t, "__esModule", {value: !0}), t.un = t.on = void 0, t.on = function (e, t, o, i, a) {
                if (!e || !o) return null;
                var s, u = (0, n(12251).protect)("handler:" + t, o, i), c = (0, n(84368).D)(u), d = {
                    un: function () {
                        (0, n(40428).fu)(e, t, c)
                    }
                };
                return a && a.once && !n(60622).vE && (s = c, c = function (e) {
                    s.call(this, e), r(d)
                }), n(60622).wI ? (0, n(40428).hS)(e, t, c, a) : (0, n(40428).hS)(e, t, c, a && a.capture), d
            }, t.un = r
        }, 84368: (e, t) => {
            "use strict";

            function n() {
                this.returnValue = !1
            }

            function r() {
                this.cancelBubble = !0
            }

            t.D = void 0, t.D = function (e) {
                return function (t) {
                    var o = function (e) {
                        return e.stopPropagation || (e.stopPropagation = r), e.preventDefault || (e.preventDefault = n), e.target || (e.target = e.srcElement), e
                    }(t);
                    e.call(this, o)
                }
            }
        }, 20697: (e, t, n) => {
            "use strict";

            function r(e, t) {
                var n = e.getPropertyValue(t) || "0";
                return parseFloat(n)
            }

            Object.defineProperty(t, "__esModule", {value: !0}), t.getElementInnerSize = void 0, t.getElementInnerSize = function (e) {
                var t = e, o = (0, n(32688).getStyle)(t);
                if ("inline" === o.getPropertyValue("display")) {
                    if (!t.offsetParent) return {width: 0, height: 0};
                    t = t.offsetParent
                }
                var i = t.getBoundingClientRect(), a = i.width, s = i.height;
                Math.abs(a - t.offsetWidth) >= 1 && (a = t.offsetWidth), Math.abs(s - t.offsetHeight) >= 1 && (s = t.offsetHeight);
                var u = r(o, "padding-top") + r(o, "padding-bottom"), c = r(o, "padding-left") + r(o, "padding-right"),
                    d = r(o, "border-top-width") + r(o, "border-bottom-width"),
                    l = r(o, "border-left-width") + r(o, "border-right-width"), f = Math.max(0, a - c - l),
                    p = Math.max(0, s - u - d);
                return {width: f > 1 ? f : 0, height: p > 1 ? p : 0}
            }
        }, 85206: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.calculateSizeInfo = t.MAX_BLOCK_HEIGHT = void 0, t.MAX_BLOCK_HEIGHT = 9e3;
            t.calculateSizeInfo = function (e) {
                var t = window.pageXOffset, r = window.pageYOffset, o = function () {
                    var e = document.createElement("div");
                    (0, n(12139).setStyle)(e, {
                        display: "table",
                        "table-layout": "fixed",
                        width: "100%",
                        height: "10000px",
                        visibility: "hidden"
                    });
                    var t = document.createElement("div");
                    t.style.display = "table-row";
                    var r = document.createElement("div");
                    return r.style.display = "table-cell", t.appendChild(r), e.appendChild(t), e
                }(), i = {inner: (0, n(20697).getElementInnerSize)(e), rect: (0, n(34403).getBoundingClientRect)(e)};
                e.appendChild(o);
                var a = function (e) {
                    var t = function (e) {
                            var t = e.parentElement;
                            return t ? function (e) {
                                return "inline" === window.getComputedStyle(e).display
                            }(t) ? t.parentElement : t : null
                        }(e),
                        r = {inner: (0, n(20697).getElementInnerSize)(e), rect: (0, n(34403).getBoundingClientRect)(e)};
                    if (!t) return r;
                    var o = (0, n(20697).getElementInnerSize)(t);
                    if (o.width < r.inner.width || o.height < r.inner.height) return {
                        inner: {
                            width: Math.min(o.width, r.inner.width),
                            height: Math.min(o.height, r.inner.height)
                        }, rect: (0, n(34403).getBoundingClientRect)(t)
                    };
                    return r
                }(e);
                e.removeChild(o), n(19399).isFirefox && (e.style.position, window.scroll(t, r - 1), window.scroll(t, r));
                var s = !1;
                return i.inner.height === a.inner.height && i.inner.width === a.inner.width && (s = !0), {
                    isFixed: s,
                    origin: i,
                    max: a
                }
            }
        }, 32688: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.getStyle = void 0, t.getStyle = function (e, t) {
                return void 0 === t && (t = window), ("function" == typeof t.getComputedStyle ? t.getComputedStyle(e, null) : e.currentStyle) || {}
            }
        }, 53945: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.hasShadowDomSupport = void 0, t.hasShadowDomSupport = function () {
                try {
                    return Boolean(document.head.attachShadow)
                } catch (e) {
                    return !1
                }
            }
        }, 40428: (e, t, n) => {
            "use strict";
            t.fu = t.hS = void 0;
            t.hS = function (e, t, n) {
                e.attachEvent("on" + t, n)
            };
            t.fu = function (e, t, n) {
                e.detachEvent("on" + t, n)
            }, (0, n(48742).C)(document, "addEventListener") && (0, n(48742).C)(document, "removeEventListener") && (t.hS = function (e, t, r, o) {
                var i = e && (0, n(48742).C)(e, "addEventListener");
                i && i.call(e, t, r, o)
            }, t.fu = function (e, t, r, o) {
                var i = e && (0, n(48742).C)(e, "removeEventListener");
                i && i.call(e, t, r, o)
            })
        }, 53366: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.loadImage = void 0, t.loadImage = function (e) {
                var t, r = new Image;
                (0, n(26413).isFunction)(e.onLoad) && (0, n(41110).on)(r, "load", (function () {
                    return e.onLoad(r)
                }), e.ctx), (0, n(26413).isFunction)(e.onError) && (0, n(41110).on)(r, "error", e.onError, e.ctx), r.crossOrigin = null !== (t = e.crossOrigin) && void 0 !== t ? t : null, r.src = e.src
            }
        }, 98489: (e, t) => {
            "use strict";
            t.NG = t.rE = void 0, t.rE = ["beforeunload", "pagehide", "unload"], t.NG = function (e, n) {
                void 0 === n && (n = window);
                var r = function () {
                    return t.rE.forEach((function (e) {
                        return n.removeEventListener(e, o)
                    }))
                }, o = function (t) {
                    "pagehide" === t.type && t.persisted || (e(t), r())
                };
                return t.rE.forEach((function (e) {
                    return n.addEventListener(e, o)
                })), r
            }
        }, 12139: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.styleToString = t.setStyle = void 0;
            var r = new RegExp(["box-flex", "box-flex-group", "column-count", "fill-opacity", "flex", "flex-grow", "flex-positive", "flex-shrink", "flex-negative", "font-weight", "line-height", "opacity", "order", "z-index", "zoom"].join("|"), "i");

            function o(e, t, n, o) {
                void 0 !== n && void 0 !== t && (n += !r.test(t) && n >>> 0 ? "px" : "", e.style.setProperty ? e.style.setProperty(t, n, o ? "important" : "") : e.style.cssText += ";".concat(t, ": ").concat(n).concat(o ? "!important" : ""))
            }

            t.setStyle = function (e, t, r, i) {
                (0, n(7153).isObject)(t) ? (i = Boolean(r), (0, n(38715).forOwn)(t, (function (t, n) {
                    o(e, n, t, i)
                }))) : o(e, t, r, i)
            }, t.styleToString = function (e, t) {
                void 0 === t && (t = !1);
                var o = t ? "!important" : "", i = "";
                return (0, n(38715).forOwn)(e, (function (e, t) {
                    if (void 0 !== e && void 0 !== t) {
                        var n = t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
                        e += !r.test(n) && e >>> 0 ? "px" : "", i += "".concat(n, ": ").concat(e).concat(o, ";")
                    }
                })), i
            }
        }, 60622: (e, t, n) => {
            "use strict";
            t.FF = t.wI = t.vE = void 0, t.vE = !1, t.wI = !1, t.FF = !1;
            try {
                if ((0, n(7506).i)()) {
                    var r = document.createElement("div"), o = {};
                    Object.defineProperty(o, "once", {
                        get: function () {
                            return t.vE = !0
                        }
                    }), Object.defineProperty(o, "passive", {
                        get: function () {
                            return t.wI = !0
                        }
                    }), Object.defineProperty(o, "capture", {
                        get: function () {
                            return t.FF = !0
                        }
                    }), (0, n(40428).hS)(r, "click", n(85225).noop, o)
                }
            } catch (e) {
            }
        }, 61832: (e, t) => {
            "use strict";
            t.r = void 0, t.r = function (e) {
                for (var t = e, n = [e], r = e.top; t !== r;) t = t.parent, n.push(t);
                return n
            }
        }, 70008: (e, t) => {
            "use strict";
            t.HP = void 0;
            var n = function () {
                function e(e) {
                    this.cache = e
                }

                return e.prototype.get = function (e) {
                    return this.cache[e]
                }, e.prototype.has = function (e) {
                    return e in this.cache
                }, e.prototype.set = function (e, t) {
                    this.cache[e] = t
                }, e
            }();
            t.HP = function (e, t, r) {
                return void 0 === t && (t = function (e) {
                    return e
                }), void 0 === r && (r = new n({})), function () {
                    var n = t.apply(this, arguments);
                    if (r.has(n)) return r.get(n);
                    var o = e.apply(this, arguments);
                    return r.set(n, o), o
                }
            }
        }, 94532: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.once = void 0, t.once = function (e) {
                var t = function () {
                    var n;
                    return t = function () {
                        return n
                    }, n = e.apply(this, arguments)
                };
                return function () {
                    return t.apply(this, arguments)
                }
            }
        }, 22027: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.IS_TOP_ANCESTOR_TRUSTED = t.TOP_ANCESTOR = void 0;
            var r = (0, n(72633).D)(), o = r.topAncestor, i = r.isTrusted;
            t.TOP_ANCESTOR = o, t.IS_TOP_ANCESTOR_TRUSTED = i
        }, 72633: (e, t, n) => {
            "use strict";
            t.D = void 0, t.D = function (e) {
                void 0 === e && (e = window);
                var t = (0, n(42151).Y)(e);
                if (t.length > 0) return {topAncestor: t[t.length - 1], isTrusted: !0};
                var r = (0, n(24479).w)(e.document), o = r.location, i = r.referrer, a = n(601).g ? i : o,
                    s = !n(601).g || (0, n(61832).r)(n(52406).h).length < 2, u = (0, n(28377).parseUrl)(a),
                    c = u.protocol, d = u.hostname, l = u.host, f = u.port;
                return {
                    topAncestor: (0, n(28377).urlFromUrlObject)({
                        protocol: c,
                        hostname: d,
                        host: l,
                        port: f,
                        originalPath: "",
                        href: "",
                        pathname: "",
                        search: "",
                        hash: ""
                    }), isTrusted: s
                }
            }
        }, 42151: (e, t, n) => {
            "use strict";
            t.Y = void 0, t.Y = function (e) {
                return n(52210).g ? (0, n(66779).listToArray)(e.location.ancestorOrigins) : []
            }
        }, 72966: (e, t, n) => {
            "use strict";
            t.D = void 0;
            var r = (0, n(98850).P)();
            t.D = r ? r.src : ""
        }, 98850: (e, t) => {
            "use strict";
            t.P = void 0, t.P = function (e, t) {
                void 0 === e && (e = document);
                var n = e.currentScript;
                if (n) return n;
                for (var r = e.getElementsByTagName("script"), o = [], i = 0; i < r.length; i++) o.push(r[i]);
                if ("function" == typeof t) {
                    var a = o.filter(t);
                    return a[a.length - 1]
                }
                return o[o.length - 1]
            }
        }, 59936: (e, t, n) => {
            "use strict";
            t.c = void 0, t.c = function (e) {
                new Promise((function (e) {
                    n(63520)((function (t) {
                        e(t.Logger)
                    }), (function (e) {
                        return console.error(e, "External debug bundle loading error")
                    }))
                })).then((function (t) {
                    return t && e(t)
                }))
            }
        }, 50775: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.getHead = void 0, t.getHead = function (e) {
                var t = e.document, n = t.getElementsByTagName("head")[0];
                return n || (n = t.createElement("head"), t.documentElement.appendChild(n)), n
            }
        }, 91130: (e, t) => {
            "use strict";
            t.M = void 0;
            var n = {}.toString, r = /\[object (\w+)\]/;
            t.M = function (e) {
                var t = n.call(e);
                if (!t) return null;
                var o = t.match(r);
                if (!o) return null;
                var i = o[1];
                return i || null
            }
        }, 30193: (e, t, n) => {
            "use strict";
            t.F = void 0, t.F = function (e) {
                var t = (0, n(92271).A)(e.documentElement).map((function (e) {
                    return e.ownerDocument
                }));
                return t.unshift(e), t.map((function (e) {
                    return {location: (0, n(81915).b)(e.defaultView), referrer: e.referrer}
                }))
            }
        }, 24479: (e, t, n) => {
            "use strict";
            t.w = void 0, t.w = function (e) {
                var t = "", r = "";
                return e && (0, n(30193).F)(e).reverse().forEach((function (e) {
                    var n = e.location, o = e.referrer;
                    t = t || n, r = r || o
                })), {location: t, referrer: r}
            }
        }, 81915: (e, t) => {
            "use strict";
            t.b = void 0, t.b = function (e) {
                if (e && e.location) {
                    var t = e.location;
                    return "function" == typeof t.toString ? t.toString() : t.href || ""
                }
                return ""
            }
        }, 32056: (e, t) => {
            "use strict";
            t.q = void 0, t.q = function (e) {
                return e.location.host
            }
        }, 57034: (e, t) => {
            "use strict";
            t.J = void 0, t.J = function () {
                return window
            }
        }, 19024: (e, t, n) => {
            "use strict";

            function r(e, t) {
                var n = [], r = 0;
                n.push("t" + (t.title || "")), r += n[0].length;
                for (var i = 1; i < 4 && r < e; i++) for (var a = t.getElementsByTagName("h" + i), s = a.length, u = 0; u < s; u++) {
                    var c = o(a[u]);
                    r += c.length, n.push("".concat(i).concat(c))
                }
                return n.join("\n") + "\n"
            }

            function o(e) {
                var t = [], n = "";
                if (!e) return n;
                for (t.push(e); t.length > 0;) {
                    if (3 === (e = t.pop()).nodeType) n += e.nodeValue + " "; else if (e.childNodes && e.childNodes.length > 0) for (var r = e.childNodes, o = r.length - 1; o >= 0; o--) t.push(r[o])
                }
                return n.replace(/\s+/g, " ")
            }

            Object.defineProperty(t, "__esModule", {value: !0}), t.grab = void 0, t.grab = function (e, t) {
                var o = window, i = o.document;
                if (t && (0, n(96363).G)((0, n(32056).q)(o))) return t;
                var a = r(e, i);
                if ("t\n" === a && o.top !== o.self) try {
                    a = r(e, o.parent.document)
                } catch (e) {
                }
                return (0, n(21625).encode)(a, e)
            }
        }, 18808: (e, t, n) => {
            "use strict";
            t.x2 = void 0;

            function r(e, t) {
                var r = window, i = r.document;
                if (t) {
                    var a = function (e) {
                        return e.location.host
                    }(i);
                    if (" ".concat("yandex.ru yandex.com yandex.ua yandex.by yandex.kz yandex.com.tr zen.yandex.ru zen.yandex.com", " ").indexOf(" ".concat(a, " ")) > -1) return t
                }
                var s = o(e, i);
                if ("t\n" === s && r.top !== r.self) try {
                    s = o(e, r.parent.document)
                } catch (e) {
                }
                return (0, n(21625).encode)(s, e)
            }

            function o(e, t) {
                var n = [], r = 0;
                n.push("t" + (t.title || "")), r += n[0].length;
                for (var o = 1; o < 4 && r < e; o++) for (var a = t.getElementsByTagName("h" + o), s = a.length, u = 0; u < s; u++) {
                    var c = i(a[u]);
                    r += c.length, n.push("".concat(o).concat(c))
                }
                return n.join("\n") + "\n"
            }

            function i(e) {
                var t = [], n = "";
                if (!e) return n;
                for (t.push(e); t.length > 0;) {
                    if (3 === (e = t.pop()).nodeType) n += e.nodeValue + " "; else if (e.childNodes && e.childNodes.length > 0) for (var r = e.childNodes, o = r.length - 1; o >= 0; o--) t.push(r[o])
                }
                return n.replace(/\s+/g, " ")
            }

            t.x2 = r
        }, 58263: (e, t, n) => {
            "use strict";

            function r(e) {
                return '{"grab_version":2,"is_async":1,"old_grab_size":'.concat(e.length, "}")
            }

            t.cv = void 0, t.cv = function (e, t, o) {
                var i = function (e, t) {
                    var r = (0, n(65637).n)((0, n(21625).utf8Encode)(t, 1 / 0), 9);
                    return (0, n(21625).encodeUInt8String)("".concat(e, "\n").concat(r))
                }(r(t), t + e);
                return i.length < o ? i : i.slice(0, o)
            }
        }, 11017: (e, t) => {
            "use strict";

            function n(e, t, n) {
                e.hasAttribute(t) && n.push(" " + t + '="' + e.getAttribute(t) + '"')
            }

            t.c = void 0, t.c = function (e) {
                var t = e.document.head, r = e.document.title, o = t.getElementsByTagName("meta"), i = ["<head>"];
                r && i.push("<title>".concat(r, "</title>"));
                for (var a = 0; a < o.length; a++) {
                    var s = (o[a].getAttribute("name") || "").toLowerCase();
                    "description" !== s && "keywords" !== s || (i.push("<meta"), n(o[a], "name", i), n(o[a], "content", i), i.push("/>"))
                }
                return i.push("</head>"), i.join("")
            }
        }, 29769: (e, t) => {
            "use strict";
            t.E = void 0;
            var n = ["script", "style", "noscript", "yatag", "template", "iframe", "svg"];
            t.E = function (e, t, a, d) {
                void 0 === d && (d = 100);
                var l = e.document.getElementsByTagName(t)[0] || e.document.getElementsByClassName(t)[0], f = [];
                return l && function (e, t, a, d) {
                    var l = [e], f = Number(new Date), p = 0, _ = 0;
                    for (; l.length > 0 && p < 25e3 && Number(new Date) - f < d;) {
                        var v = l.pop();
                        if (v instanceof r) v.textContentLength === _ ? (a.length = v.resultLength, p = v.htmlLength) : (a.push(v.name), p += v.name.length); else if (u(v)) {
                            var h = v.textContent || "";
                            a.push(h), p += h.length, _ += h.length
                        } else if (c(v) && o(v)) {
                            var E = new r("</" + v.tagName.toLowerCase() + ">", p, _, a.length);
                            i(v, t, a), p += a[a.length - 1].length, l.push(E);
                            for (var g = v.lastChild; g; g = g.previousSibling) if (s(g)) if (u(g)) l.push(g); else if (c(g)) {
                                var m = g.nodeName.toLowerCase();
                                if ("select" === m) {
                                    var O = g.childNodes.length, A = g.selectedIndex;
                                    if (0 !== O && -1 !== A) {
                                        var b = g.options[A],
                                            S = (h = b.textContent || b.innerText, "<select><option>".concat(h, "</option></select>"));
                                        a.push(S), _ += S.length
                                    }
                                    break
                                }
                                -1 === n.indexOf(m) && l.push(g)
                            }
                        }
                    }
                }(l, a, f, d), f.join("").replace(/[^\w\s\u0430-\u044f\u0451"<>\/\\\-,;()?!.=:'\[\]]/gi, "").replace(/\s{2,}/g, " ").replace(/>\s*</g, "><")
            };
            var r = function (e, t, n, r) {
                this.name = e, this.htmlLength = t, this.textContentLength = n, this.resultLength = r
            };

            function o(e) {
                var t = Boolean(e.offsetWidth || e.offsetHeight);
                return e && e.getClientRects ? Boolean(t || e.getClientRects().length) : e && e.currentStyle ? t && "hidden" !== e.currentStyle.visibility : t
            }

            function i(e, t, n) {
                var r = [], o = e.tagName.toLowerCase();
                if (r.push("<" + o), function (e) {
                    for (var t = e.lastChild; t; t = t.previousSibling) if (u(t) && s(t)) return !0;
                    return !1
                }(e)) for (var i = 0; i < t.length; i++) e.hasAttribute(t[i]) && r.push(" " + t[i] + '="' + e.getAttribute(t[i]) + '"');
                r.push(">"), n.push(r.join(""))
            }

            var a = /[^\s\\]/;

            function s(e) {
                if (!e.lastChild) return a.test(e.innerText);
                for (var t = e.lastChild; t; t = t.previousSibling) {
                    if (!t.lastChild && a.test(t.innerText)) return !0;
                    for (var n = t.lastChild; n; n = n.previousSibling) if (a.test(n.innerText)) return !0
                }
                return !1
            }

            function u(e) {
                return e.nodeType === Node.TEXT_NODE
            }

            function c(e) {
                return e.nodeType === Node.ELEMENT_NODE
            }
        }, 79287: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.grab = t.clearGrabTime = void 0;
            var r, o = "";
            t.clearGrabTime = function () {
                r = void 0
            }, t.grab = function (e, t) {
                var i, a, s = (0, n(57034).J)();
                if (t && (0, n(96363).G)((0, n(32056).q)(s))) return t;
                if (r && r + 5e3 > Number(new Date)) return o;
                if ((0, n(13058).isInIframe)(s)) if (a = (0, n(11017).c)(s), "" !== (i = (0, n(29769).E)(s, "body", ["class"]))) a = (0, n(11017).c)(s), i = (0, n(29769).E)(s, "body", ["class"]); else try {
                    a = (0, n(11017).c)(s.parent), i = (0, n(29769).E)(s.parent, "body", ["class"], (0, n(88772).useExperimentFlag)("GRAB2_TIMEOUT") || 250)
                } catch (e) {
                } else a = (0, n(11017).c)(s), i = (0, n(29769).E)(s, "body", ["class"]);
                var u = ["<html>", a, i, "</html>"].join(""), c = (0, n(18808).x2)(e, t);
                return o = (0, n(58263).cv)(u, (0, n(21625).decode)(c), (0, n(88772).useExperimentFlag)("GRAB2_SIZE") || 5500), r = Number(new Date), o
            }
        }, 73269: (e, t) => {
            "use strict";
            t.D = void 0, t.D = "0123456789abcdef"
        }, 66648: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.generateHexString = void 0, t.generateHexString = function (e) {
                for (var t = "", r = 0; r < e; r++) t += (16 * (0, n(70321).M)() | 0).toString(16);
                return t
            }
        }, 55598: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.i18nBanners = void 0, t.i18nBanners = (0, n(45745).getI18nWithKeyset)(n(69992).L)
        }, 87270: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.i18nCommon = void 0, t.i18nCommon = (0, n(45745).getI18nWithKeyset)(n(90941).L)
        }, 45745: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.getLangByIndex = t.getI18nWithKeyset = void 0;

            function r(e) {
                return n(30615).langIndexes[e] || e
            }

            t.getI18nWithKeyset = function (e) {
                return function (t, o, i) {
                    var a = r("".concat(o)), s = function (e) {
                        var t = Object.keys(e)[0];
                        return n(30615).langs.includes(t)
                    }(e) ? function (e, t, n) {
                        var r = e[n];
                        if (!r) {
                            r = e[Object.keys(e)[0]]
                        }
                        return r ? r[t] : null
                    }(e, t, a) : function (e, t, r) {
                        var o = e[t];
                        if (!o) return null;
                        for (var i = [r, n(30615).fallbacks[r], n(30615).defaultLang, n(30615).defaultFallback], a = 0, s = i; a < s.length; a++) {
                            var u = s[a];
                            if (u) {
                                var c = o[u];
                                if (c) return c
                            }
                        }
                        return null
                    }(e, t, a);
                    if (s && "object" == typeof i) for (var u = 0, c = (0, n(10407).getObjectKeys)(i); u < c.length; u++) {
                        var d = c[u];
                        s = s.replace("{".concat(d, "}"), i[d])
                    }
                    return s || ""
                }
            }, t.getLangByIndex = r
        }, 98318: (e, t, n) => {
            "use strict";
            t.$ = void 0, t.$ = function (e) {
                var t = (0, n(98022).Q)(e);
                return t.width = "0", t.height = "0", t.style.position = "absolute", t
            }
        }, 37267: (e, t, n) => {
            "use strict";
            t.Q = void 0, t.Q = function (e) {
                e.src = "", (0, n(91709).removeNodeFromParent)(e)
            }
        }, 4885: (e, t, n) => {
            "use strict";
            t.Z4 = void 0;

            function r(e, t, r) {
                void 0 === r && (r = 1);
                var o, i = t.isCover, a = "auto" === t.width, s = "auto" === t.height, u = t.width * r,
                    c = t.height * r, d = e[0], l = e[1], f = e[2], p = e[3], _ = Number((l / f).toFixed(2));
                if (a && s) o = (0, n(21989).b)(l, f, _, !0); else if (s && !a) o = (0, n(21989).b)(u, c, _, !0); else if (a && !s) o = (0, n(21989).b)(u, c, _, !1); else {
                    var v = i === _ <= u / c;
                    o = (0, n(21989).b)(u, c, _, v)
                }
                var h = o.width, E = o.height;
                return {
                    src: d,
                    originWidth: l,
                    originHeight: f,
                    ratio: _,
                    containerWidth: u,
                    containerHeight: c,
                    width: h,
                    height: E,
                    area: Math.min(h, l) * Math.min(E, f),
                    originArea: l * f,
                    options: p
                }
            }

            function o(e, t) {
                return e.area > t.area || e.area === t.area && e.originArea < t.originArea
            }

            t.Z4 = function (e, t) {
                var i = t.bandwidth || (0, n(22511).getDownlink)(),
                    a = t.pixelRatio || (0, n(52452).getPixelRatio)(window), s = -1 !== i && i < .4 ? .66 : 1;
                a > 1 && (s *= a);
                for (var u = null, c = null, d = 0, l = e; d < l.length; d++) {
                    var f = l[d], p = f[0], _ = f[1], v = f[2];
                    if (_ && v && p) {
                        var h = r(f, t, s);
                        (null === u || o(h, u)) && (u = h, c = f)
                    }
                }
                return c && r(c, t)
            }
        }, 21989: (e, t) => {
            "use strict";
            t.b = void 0, t.b = function (e, t, n, r) {
                return void 0 === r && (r = !0), r ? t = e / n : e = t * n, {width: e, height: t}
            }
        }, 98710: (e, t, n) => {
            "use strict";
            var r = function () {
                return r = Object.assign || function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, r.apply(this, arguments)
            };

            function o(e) {
                var t, n = Boolean(null === (t = e.options) || void 0 === t ? void 0 : t["smart-center"]),
                    r = function (e) {
                        var t = (e.options || {}).backgroundColors, n = void 0 === t ? {} : t;
                        return e.containerWidth / e.containerHeight > e.width / e.height ? Boolean(n.left) && Boolean(n.right) : Boolean(n.top) && Boolean(n.bottom)
                    }(e);
                return n && r
            }

            function i(e, t, i, s) {
                var u = a(e, t, i, s);
                if (u) {
                    var c = o(u) ? u.options["smart-center"] : (0, n(74377).cY)(u),
                        d = (0, n(2086).Pc)({w: u.originWidth, h: u.originHeight}, {
                            w: t.width,
                            h: t.height
                        }, c || void 0), l = u.options && u.options.ColorWizBack,
                        f = u.options && u.options.ColorWizButton, p = u.options && u.options.ColorWizButtonText,
                        _ = new (n(17925).Color)(l).getBrightness(), v = _ > 192 ? "light" : "dark",
                        h = new (n(17925).Color);
                    return h.setChannel(0, _), h.setChannel(1, _), h.setChannel(2, _), r(r({}, u), {
                        bgColor: l,
                        bgMode: v,
                        colorByBrightness: h.toHexString(),
                        smartCenter: c,
                        bgPosition: d,
                        buttonBgColor: f,
                        buttonTextColor: p,
                        pixelRatio: i
                    })
                }
            }

            function a(e, t, o, i) {
                return (0, n(4885).Z4)(e, r(r({isCover: !0}, t), {pixelRatio: o, bandwidth: i}))
            }

            Object.defineProperty(t, "__esModule", {value: !0}), t.selectImageForPossibleRatios = t.selectImageForContainerSize = t.selectImage = t.shouldContainImage = void 0, t.shouldContainImage = o, t.selectImage = i, t.selectImageForContainerSize = a, t.selectImageForPossibleRatios = function (e, t, n, r, o) {
                for (var a, s = 1 / 0, u = 0, c = n; u < c.length; u++) {
                    var d = c[u], l = i(e, {width: t, height: t / d.value}, r, o);
                    if (l) {
                        var f = Math.abs(d.value - l.ratio);
                        f < s && (a = {image: l, imageRatio: d}, s = f)
                    }
                }
                return a
            }
        }, 47634: (e, t, n) => {
            "use strict";
            t.J = void 0;
            t.J = function (e) {
                return e instanceof Date || "Date" === (0, n(91130).M)(e)
            }
        }, 26413: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.isFunction = void 0, t.isFunction = function (e) {
                return "function" == typeof e || "Function" === (0, n(91130).M)(e)
            }
        }, 13058: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.isInIframe = void 0, t.isInIframe = function (e) {
                return e.top !== e.self
            }
        }, 601: (e, t, n) => {
            "use strict";
            t.g = void 0, t.g = (0, n(9417).g)()
        }, 9417: (e, t, n) => {
            "use strict";
            t.g = void 0, t.g = function () {
                var e = (0, n(15735).map)(n(63541).z, (function (e) {
                    return e.ownerDocument
                })), t = e.length, r = (t ? e[t - 1] : document).defaultView;
                return !!r && r.self !== r.parent
            }
        }, 35117: (e, t) => {
            "use strict";
            t.C = void 0, t.C = ["yandex.ru", "yandex.com", "yandex.net", "yandex.com.tr", "yandex.ua", "yandex.by", "yandex.kz", "yandex.st", "yandex-team.ru", "yandex-team.com", "yandex-team.com.ua", "yandex-team.net.ua", "yandex-team.com.tr", "ya.ru", "yandexsport.ru"]
        }, 96363: (e, t, n) => {
            "use strict";
            t.G = void 0, t.G = function (e) {
                return !!e && (!(!e || 0 === e.length) && (0, n(38179).some)(n(35117).C, (function (t) {
                    return t === e || (0, n(22698).p)(e, ".".concat(t))
                })))
            }
        }, 11056: (e, t, n) => {
            "use strict";

            function r(e) {
                return Math.round(e)
            }

            t._ = void 0, t._ = function (e) {
                var t = (0, n(62260).getWindowScroll)();
                return {left: r(e.left + t.left), top: r(e.top + t.top)}
            }
        }, 77192: (e, t, n) => {
            "use strict";
            var r = function () {
                return r = Object.assign || function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, r.apply(this, arguments)
            };
            Object.defineProperty(t, "__esModule", {value: !0}), t.getElementSize = void 0, t.getElementSize = function (e) {
                var t = (0, n(85206).calculateSizeInfo)(e),
                    o = r(r(r({}, t.max.rect), t.max.inner), {isFixed: t.isFixed});
                return o.height >= n(85206).MAX_BLOCK_HEIGHT && (o.height = 0, o.top = o.bottom = t.origin.rect.top), o
            }
        }, 12682: (e, t) => {
            "use strict";
            t.U = void 0;
            t.U = function (e, t) {
                var n = e.width, r = e.height, o = e.top, i = e.left, a = e.right, s = e.bottom, u = 1,
                    c = Math.max(Math.min(a, t.width) - Math.max(i, 0), 0),
                    d = Math.max(Math.min(s, t.height) - Math.max(o, 0), 0);
                return n ? u *= c / n : (i < 0 || a > t.width) && (u = 0), r ? u *= d / r : (o < 0 || s > t.height) && (u = 0), u >= .5 ? 1 : 0
            }
        }, 40996: (e, t, n) => {
            "use strict";
            t.E = void 0;
            var r = function (e) {
                return Math.max(0, Math.round(e))
            };
            t.E = function () {
                var e = (0, n(52544).getWindowSize)();
                return {
                    win_width: r(e.width),
                    win_height: r(e.height),
                    pixel_ratio: (0, n(52452).getPixelRatio)(),
                    bandwidth: (0, n(22511).getDownlink)()
                }
            }
        }, 43: (e, t, n) => {
            "use strict";
            var r = function () {
                return r = Object.assign || function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, r.apply(this, arguments)
            };
            Object.defineProperty(t, "__esModule", {value: !0}), t.LayoutConfig = void 0;
            var o = function (e) {
                return Math.max(0, Math.round(e))
            };
            (0, n(4567).setAvailableFont)();
            var i = function () {
                function e(e) {
                    var t, i = (0, n(40996).E)(), a = (0, n(52544).getWindowSize)();
                    if (n(73266).isAMP) {
                        var s = window.context,
                            u = (null === (t = s.initialIntersection) || void 0 === t ? void 0 : t.intersectionRatio) > 0 ? 1 : 0,
                            c = s.initialLayoutRect;
                        this.config = r(r({}, i), {
                            isInIframe: (0, n(13058).isInIframe)(window),
                            w: o(a.width),
                            h: o(a.height),
                            width: o(a.width),
                            height: o(a.height),
                            left: c.left || 0,
                            top: c.top || 0,
                            amp: 1,
                            visible: u
                        })
                    } else {
                        var d = (0, n(77192).getElementSize)(e),
                            l = r(r({}, (0, n(34403).getBoundingClientRect)(e)), (0, n(20697).getElementInnerSize)(e)),
                            f = (0, n(11056)._)(l), p = d.height, _ = o(l.height);
                        (0, n(13058).isInIframe)(window) && (0 === p || _ > i.win_height || p > i.win_height) && (p = i.win_height, _ = i.win_height), this.config = r(r(r({}, i), {
                            isInIframe: (0, n(13058).isInIframe)(window),
                            w: o(d.width),
                            h: o(p),
                            width: o(l.width),
                            height: _,
                            visible: (0, n(12682).U)(l, a),
                            fullscreenHeaderHeight: (0, n(63607).isMobile)() ? n(505).NEW_FULLSCREEN_HEADER_HEIGHT_MOBILE : n(505).NEW_FULLSCREEN_HEADER_HEIGHT_DESKTOP
                        }), f)
                    }
                    var v = (window && window.Ya || {}).availableFontFamily;
                    "exp" !== (0, n(88772).useExperimentFlag)("REVERSE_YS_TEXT_LOAD") ? this.config.fontFamily = n(38414).YS_FONT_FAMILY : v && (this.config.fontFamily = v)
                }

                return e.prototype.set = function (e, t) {
                    this.config[e] = t
                }, e.prototype.get = function (e) {
                    return this.config[e]
                }, e.prototype.toString = function () {
                    return n.lv["json"].stringify(this.config)
                }, e
            }();
            t.LayoutConfig = i
        }, 34403: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.getBoundingClientRect = void 0;
            t.getBoundingClientRect = function (e) {
                try {
                    var t = e.getBoundingClientRect();
                    return {
                        left: t.left,
                        right: t.right,
                        top: t.top,
                        bottom: t.bottom,
                        width: t.right - t.left,
                        height: t.bottom - t.top
                    }
                } catch (e) {
                    return {left: 0, width: 0, top: 0, height: 0, right: 0, bottom: 0}
                }
            }
        }, 62260: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.getWindowScroll = void 0, t.getWindowScroll = function () {
                return {
                    left: void 0 === window.pageXOffset ? document.documentElement.scrollLeft : window.pageXOffset,
                    top: void 0 === window.pageYOffset ? document.documentElement.scrollTop : window.pageYOffset
                }
            }
        }, 52544: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.getWindowSize = void 0, t.getWindowSize = function () {
                return {width: window.innerWidth, height: window.innerHeight}
            }
        }, 66779: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.listToArray = void 0, t.listToArray = function (e) {
                if (!e) return [];
                for (var t = [], n = 0; n < e.length; n++) t.push(e[n]);
                return t
            }
        }, 54784: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.loadCustomScript = void 0, t.loadCustomScript = function (e) {
                var t = e.win.document.createElement("script");
                return t.async = !0, e.nonce && (t.nonce = e.nonce), (0, n(26413).isFunction)(e.onLoad) && (t.onload = function () {
                    t.onload = function () {
                    }, (0, n(26413).isFunction)(e.onLoad) && e.onLoad()
                }), e.hasCors = "boolean" != typeof e.hasCors || e.hasCors, e.hasCors && t.setAttribute("crossorigin", "anonymous"), t.src = e.src, e.container ? e.container.appendChild(t) : (0, n(50775).getHead)(e.win).appendChild(t), t
            }
        }, 78257: (e, t, n) => {
            "use strict";
            t.b = void 0;
            var r = "https://yastatic.net/s3/home/fonts/ys/3/text-variable-full.woff2";
            t.b = function (e) {
                var t = document.getElementById("ysTextCssRule");
                if (!t) {
                    var o = document.createElement("link");
                    o.rel = "preload", o.href = r, o.type = "font/woff2", o.as = "font", o.importance = "low", o.crossOrigin = "anonymous", e.appendChild(o);
                    var i = (0, n(50775).getHead)(window);
                    (t = document.createElement("style")).setAttribute("id", "ysTextCssRule"), t.innerHTML = '@font-face {\n        font-family: "YS Text Variable";\n        src: url("'.concat(r, '") format("woff2");\n        font-weight: 400 700;\n        font-display: optional;\n    }'), i.appendChild(t)
                }
            }
        }, 35332: (e, t, n) => {
            "use strict";
            var r = function () {
                return r = Object.assign || function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, r.apply(this, arguments)
            };
            t.C = void 0;
            var o = "Ya._metrika.dataLayer";
            t.C = (0, n(12251).protect)("metrika::pushEvent", (function (e, t) {
                var i = (0, n(95721).U)(e, o) || [];
                (0, n(9562).set)(e, o, i), i.push({ymetrikaEvent: {type: "params", parent: 1, data: {__ym: r({}, t)}}})
            }))
        }, 17451: (e, t, n) => {
            "use strict";
            t.B7 = t.je = t.zB = void 0, t.zB = {
                Metrika: "yandex_metrika_callbacks",
                Metrika2: "yandex_metrika_callbacks2"
            };
            t.je = "https://mc.yandex.ru/metrika/watch.js";
            var r = function () {
                function e(e, r, o) {
                    var i = this;
                    this.getYa = e, this.needLoadMetrika = r, this.loadMetrika = (0, n(94532).once)((function () {
                        i.needLoadMetrika && !i.win.YA_TURBO_METRIKA && (0, n(54784).loadCustomScript)({
                            src: t.je,
                            win: i.win
                        })
                    })), this.win = o || window, Boolean(e().Metrika) ? this.metrikaName = "Metrika" : Boolean(e().Metrika2) ? this.metrikaName = "Metrika2" : this.metrikaName = "tag" === this.win.YA_TURBO_METRIKA ? "Metrika2" : "Metrika", this.metrikaCallbacksName = t.zB[this.metrikaName]
                }

                return e.getInstance = function (t, r) {
                    return void 0 === r && (r = !0), "exp" === (0, n(88772).useExperimentFlag)("DISABLE_METRIKA") && (r = !1), this.instance || (this.instance = new e(t, r)), this.instance
                }, e.prototype.requestCounter = function (e, t) {
                    var n = this;
                    this.isLoaded() ? t(this.getCounter(e)) : (this.loadMetrika(), this.addCallback((function () {
                        t(n.getCounter(e))
                    })))
                }, e.prototype.getCounter = function (e) {
                    var t = "yaCounter" + e.id;
                    return this.win[t] || (this.win[t] = this.createCounter(e)), this.win[t]
                }, e.prototype.isLoaded = function () {
                    return Boolean(this.getYa()[this.metrikaName])
                }, e.prototype.addCallback = function (e) {
                    this.win[this.metrikaCallbacksName] || (this.win[this.metrikaCallbacksName] = []), this.win[this.metrikaCallbacksName].push(e)
                }, e.prototype.createCounter = function (e) {
                    var t = this.getYa()[this.metrikaName];
                    if (!t) throw new Error("metrika counter creation error: ".concat(this.metrikaName, " is not in context"));
                    try {
                        return new t({id: e.id, type: e.isYAN ? 1 : void 0, defer: !0, nck: !e.enableCookies})
                    } catch (e) {
                        throw new Error("metrika counter creation error: " + e.message)
                    }
                }, e
            }();
            t.B7 = r
        }, 44834: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.on = t.open = t.isVisible = t.isReady = t.isAvailable = t.getMraid = void 0;
            var r = window;

            function o(e) {
                void 0 === e && (e = window);
                try {
                    var t = "ownerDocument" in e && "defaultView" in e.ownerDocument ? e.ownerDocument.defaultView : e,
                        n = t.mraid || t.top.mraid;
                    return n && n.getState && n.addEventListener ? n : void 0
                } catch (e) {
                    return
                }
            }

            function i(e) {
                return void 0 === e && (e = r), void 0 !== o(e)
            }

            t.getMraid = o, t.isAvailable = i, t.isReady = function (e) {
                return void 0 === e && (e = r), i(e) && "loading" !== o(e).getState()
            }, t.isVisible = function (e) {
                return void 0 === e && (e = r), i(e) && o(e).isViewable()
            }, t.open = function (e, t) {
                void 0 === e && (e = r), i(e) && o(e).open(t)
            }, t.on = function (e, t, a) {
                if (void 0 === a && (a = r), !i(a)) return n(85225).noop;
                var s = o(a);
                return s.addEventListener(e, t), function () {
                    s.removeEventListener(e, t)
                }
            }
        }, 42180: (e, t, n) => {
            "use strict";
            var r = function () {
                return r = Object.assign || function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, r.apply(this, arguments)
            };
            t.W = void 0;
            t.W = function e(t) {
                var o = t.method, i = t.url, a = t.async, s = void 0 === a || a, u = t.data, c = t.responseType,
                    d = void 0 === c ? "text" : c, l = t.onBeforeSend, f = void 0 === l ? n(85225).noop : l,
                    p = t.onRetry, _ = void 0 === p ? n(85225).noop : p, v = t.checkStatus,
                    h = void 0 === v ? function (e) {
                        return 200 === e
                    } : v, E = t.headers, g = void 0 === E ? {} : E, m = t.xhrConstructor,
                    O = void 0 === m ? XMLHttpRequest : m, A = t.retries, b = void 0 === A ? 0 : A, S = t.timeout,
                    R = void 0 === S ? 0 : S, y = t.withCredentials, I = t.onAbort, T = t.onSetup;
                if (O) {
                    var w, D = t.onSuccess ? (0, n(94532).once)(t.onSuccess) : n(85225).noop,
                        N = t.onError ? (0, n(94532).once)(t.onError) : n(85225).noop, C = !1, M = 0, P = function (e) {
                            C = !0, P = n(85225).noop, w = e, L(new Error("Abort request")), "function" == typeof I && I(e)
                        }, L = function (o) {
                            if (x.onerror = null, x.onreadystatechange = null, M && clearTimeout(M), M && 4 !== x.readyState || C) try {
                                x.abort()
                            } catch (o) {
                            }
                            if (!C) if (b > 0) {
                                var i = _(o, x);
                                if ("boolean" != typeof i || Boolean(i) || P(), C) return;
                                e(r(r({}, t), {
                                    onSetup: function (e) {
                                        var t = e.abort;
                                        P = function (e) {
                                            return t(e)
                                        }, C && t(w)
                                    }, retries: b - 1
                                }))
                            } else P = n(85225).noop, N(o, x)
                        }, x = new O;
                    try {
                        x.open(o, i, s)
                    } catch (e) {
                        return void L(e)
                    }
                    if (x.responseType = d, x.withCredentials = Boolean(y), (0, n(38715).forOwn)(g, (function (e, t) {
                        try {
                            x.setRequestHeader(t, e)
                        } catch (e) {
                        }
                    })), R > 0 && isFinite(R) && (M = window.setTimeout((function () {
                        L(new Error("Request timeout, ".concat(i)))
                    }), R)), x.onerror = L, x.onreadystatechange = function () {
                        if (4 === x.readyState) {
                            var e = x.status;
                            h(e) ? (P = n(85225).noop, clearTimeout(M), D(x)) : L(new Error("Invalid request status ".concat(e, ", ").concat(i)))
                        }
                    }, !("function" == typeof T && (T({
                        abort: function (e) {
                            return P(e)
                        }
                    }), C) || (f(x, t), C))) try {
                        x.send(u)
                    } catch (e) {
                        L(e)
                    }
                }
            }
        }, 44327: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.sendPixel = void 0, t.sendPixel = function (e, t, r) {
                (0, n(53366).loadImage)({src: e, onLoad: t, ctx: r})
            }
        }, 85225: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.noop = void 0, t.noop = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
            }
        }, 67729: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.getRandomInt = void 0, t.getRandomInt = function (e, t) {
                var r = e + (0, n(70321).M)() * (t + 1 - e);
                return r = Math.floor(r)
            }
        }, 50023: (e, t) => {
            "use strict";
            t.z = void 0, t.z = function (e) {
                return "number" == typeof e && isFinite(e)
            }
        }, 6485: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.isInRange = void 0, t.isInRange = function (e, t, n) {
                return e >= t && e <= n
            }
        }, 25021: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.isPositiveFiniteNumber = void 0, t.isPositiveFiniteNumber = function (e) {
                return "number" == typeof e && isFinite(e) && e > 0
            }
        }, 92271: (e, t, n) => {
            "use strict";
            t.A = void 0, t.A = function (e, t) {
                if (void 0 === t && (t = !0), n(62141).isSafariBasedBrowser && t) return [];
                for (var r = [], o = e; ;) try {
                    if (!(o = o.ownerDocument.defaultView.frameElement)) return r;
                    r.push(o)
                } catch (e) {
                    return r
                }
            }
        }, 63541: (e, t, n) => {
            "use strict";
            t.z = void 0, t.z = (0, n(92271).A)(document.documentElement)
        }, 31913: (e, t, n) => {
            "use strict";
            var r = function () {
                return r = Object.assign || function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, r.apply(this, arguments)
            };
            t.x = void 0;
            var o = function () {
                function e(e) {
                    this.steps = e, this.storage = {}
                }

                return e.prototype.setBlockData = function (e, t) {
                    this.storage[e] || (this.storage[e] = {
                        timing: {},
                        data: {},
                        canLog: !0
                    }), this.storage[e].data = r(r({}, this.storage[e].data), t)
                }, e.prototype.logRenderLabel = function (e, t, n) {
                    void 0 === n && (n = (new Date).getTime()), this.storage[e] || (this.storage[e] = {
                        timing: {},
                        data: {},
                        canLog: !0
                    }), this.storage[e].timing[t] = n
                }, e.prototype.stopLoggingTime = function (e) {
                    this.storage[e] && (this.storage[e].canLog = !1)
                }, e.prototype.continueLoggingTime = function (e) {
                    this.storage[e] && (this.storage[e].canLog = !0)
                }, e.prototype.getInfo = function (e) {
                    return this.canSendData(this.storage[e]) && e in this.storage ? {
                        timing: this.prepareTimings(this.storage[e]),
                        data: this.storage[e].data
                    } : null
                }, e.prototype.canSendData = function (e) {
                    return e && e.canLog
                }, e.prototype.prepareTimings = function (e) {
                    for (var t, r = {
                        totalInit: 0,
                        totalData: 0,
                        totalRender: 0,
                        total: 0
                    }, o = (0, n(10407).getObjectKeys)(e.timing).sort((function (e, t) {
                        return e - t
                    })), i = 0; i < o.length; i++) {
                        var a = e.timing[o[i]] || 0;
                        if (t) {
                            var s = a - t;
                            t = a, r[o[i]] = s, o[i] in this.steps.initSteps ? r.totalInit += s : o[i] in this.steps.dataSteps ? r.totalData += s : o[i] in this.steps.renderSteps && (r.totalRender += s), r.total += s
                        } else t = a
                    }
                    return r
                }, e
            }();
            t.x = o
        }, 20354: (e, t, n) => {
            "use strict";
            t.no = t.JT = t.vA = void 0;
            var r = "undefined" == typeof window ? void 0 : window.performance;
            t.vA = r && (0, n(26413).isFunction)(r.now);
            var o = r && r.timing && r.timing.navigationStart ? r.timing.navigationStart : (0, n(61672).m)(), i = 0;
            t.JT = function () {
                var e = (0, n(61672).m)() - o;
                return i = Math.max(e, i)
            }, t.no = t.vA ? function () {
                return r.now()
            } : function () {
                return (0, t.JT)()
            }
        }, 48777: (e, t) => {
            "use strict";
            t.B = void 0;
            var n = function () {
                var e = this;
                this.promise = new Promise((function (t, n) {
                    e.resolve = t, e.reject = n
                }))
            };
            t.B = n
        }, 12251: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.ProtectedNames = t.rethrowAsync = t.protect = t.callSafe = void 0;

            function r() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return e.join("")
            }

            t.callSafe = function (e) {
                try {
                    return e()
                } catch (e) {
                    return
                }
            }, t.protect = function (e, r, o, i) {
                return function () {
                    try {
                        return r.apply(o || this, arguments)
                    } catch (r) {
                        if ((0, n(26413).isFunction)(i) && i(r), !0 === r.preventProtect) throw r;
                        t.protect.log(r, e)
                    }
                }
            }, t.rethrowAsync = function (e, n) {
                setTimeout((function () {
                    t.protect.log(e, n)
                }))
            }, t.protect.log = function (e, t) {
                console.log("LOG:" + t + ":" + e)
            }, t.protect.setTimeout = function (e, n, r, o) {
                return window.setTimeout((0, t.protect)("timeout", e, r, o), n)
            };
            var o = function () {
                function e() {
                }

                return e.YaContextCallbacks = r("Ya.C", "ontext._callbacks"), e.YaContextCallbacksCalls = r("Ya.C", "ontext._callbacks_call"), e.AdvManager = r("A", "dvManager"), e.AdvBlock = r("A", "dvBlock"), e.RTB = r("R", "TB"), e.Rtb = r("R", "tb"), e.MetrikaAdtune = r("metrika_a", "dtune"), e
            }();
            t.ProtectedNames = o
        }, 39658: (e, t, n) => {
            "use strict";
            t.c = void 0;
            var r = function () {
                function e() {
                }

                return e.callProtected = function (t) {
                    (0, n(12251).protect)("queue", t, void 0, e.finish)()
                }, e.finish = function () {
                    e.order.length ? e.callProtected((function () {
                        var t = e.order.shift();
                        t && t(e.finish)
                    })) : e.executed = !1
                }, e.prototype.add = function (t) {
                    e.executed ? e.order.push(t) : (e.executed = !0, e.callProtected((function () {
                        t(e.finish)
                    })))
                }, e.prototype.size = function () {
                    return e.order.length
                }, e.order = [], e.executed = !1, e
            }();
            t.c = r
        }, 91709: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.removeNodeFromParent = void 0, t.removeNodeFromParent = function (e) {
                if (e) {
                    var t = e.parentElement;
                    t && t.removeChild(e)
                }
            }
        }, 34668: (e, t) => {
            "use strict";
            t.o = void 0, t.o = 1e3 / 60
        }, 39807: (e, t, n) => {
            "use strict";
            t.b = void 0, t.b = function (e) {
                var t = e.requestAnimationFrame || e.mozRequestAnimationFrame || e.webkitRequestAnimationFrame || e.msRequestAnimationFrame || function (t) {
                        return e.setTimeout(t, n(34668).o)
                    },
                    r = e.cancelAnimationFrame || e.mozCancelAnimationFrame || e.webkitCancelAnimationFrame || e.msCancelAnimationFrame || function (t) {
                        return e.clearTimeout(t)
                    };
                return {requestAnimationFrame: t.__pbind(e), cancelAnimationFrame: r.__pbind(e)}
            }
        }, 96757: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.cancelAnimationFrame = t.requestAnimationFrame = void 0;
            var r = (0, n(39807).b)(window);
            t.requestAnimationFrame = r.requestAnimationFrame, t.cancelAnimationFrame = r.cancelAnimationFrame
        }, 62763: (e, t, n) => {
            "use strict";
            var r = function () {
                return r = Object.assign || function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, r.apply(this, arguments)
            };
            Object.defineProperty(t, "__esModule", {value: !0}), t.updateSafeframeSize = t.isInSafeframe = t.nukeSafeframe = t.initSafeframe = t.loadSafeframe = t.getSafeframeLoaderURL = void 0;
            var o = "yaSafeFrameAsyncCallbacks", i = window;
            i.yaSafeFrameCallbacksStorage = i.yaSafeFrameCallbacksStorage || {};
            var a = (0, n(49820).isEncoded)("https://yastatic.net/safeframe/1-1-0/");

            function s() {
                var e = ["https://yastatic", ".net/safeframe-bundles/0.".concat((0, n(2979).HT)(), "/"), a ? "host_adb.js" : "host.js"].join("");
                return a ? (0, n(49820).encode)(e) : e
            }

            function u(e) {
                e.isLoadingSafeframeStarted || (e.isLoadingSafeframeStarted = !0, (0, n(54784).loadCustomScript)({
                    win: e,
                    src: s(),
                    hasCors: !a
                }))
            }

            function c(e) {
                var t = e[o] || [];
                return e[o] = t, t
            }

            function d(e, t) {
                delete e.yaSafeFrameCallbacksStorage[t]
            }

            function l(e) {
                return Boolean(e.$sf && e.$sf.ext)
            }

            t.getSafeframeLoaderURL = s, t.loadSafeframe = u, t.initSafeframe = function (e, t, o, i, a, s, l) {
                void 0 === i && (i = n(85225).noop), void 0 === a && (a = n(85225).noop), void 0 === s && (s = n(85225).noop), u(e);
                var f = c(e), p = o.id instanceof Element ? "" : o.id, _ = function (e, t) {
                    return t || e.id || "sf-".concat(Math.floor(4294967295 * Math.random()) + 1)
                }(t, p);
                f.push((function () {
                    e.yaSafeFrameCallbacksStorage = e.yaSafeFrameCallbacksStorage || {}, e.yaSafeFrameCallbacksStorage[_] = {
                        onError: i,
                        onRender: a,
                        onAction: s
                    }, function (e, t) {
                        e.yaSafeFrameCallbacksStorage = e.yaSafeFrameCallbacksStorage || {};
                        var n = e.yaSafeFrameCallbacksStorage;
                        new e.$sf.host.Config(r({
                            auto: !1, onFailure: function (e, t, r) {
                                n[e] && n[e].onError(e, r)
                            }, onEndPosRender: function (e, t, r) {
                                n[e] && n[e].onRender(e, r)
                            }, onPosMsg: function (t, r, o) {
                                n[t] && n[t].onAction(r, o), "nuke" === r && d(e, t)
                            }
                        }, t))
                    }(e, l ? {query: l} : void 0), function (e, t, n, r) {
                        t.id = r;
                        var o = n.html, i = n.width, a = n.height, s = n.basePath, u = {
                            id: r,
                            html: o,
                            conf: {
                                nonce: n.nonce,
                                w: i,
                                h: a,
                                dest: t,
                                protected: n["protected"],
                                sandbox: n.sandbox,
                                basePath: s
                            }
                        };
                        n.supports && (u.conf.supports = n.supports), e.$sf.host.render(u)
                    }(e, t, o, _)
                }))
            }, t.nukeSafeframe = function (e, t) {
                u(e), c(e).push((function () {
                    d(e, t), e.$sf.host.nuke(t)
                }))
            }, t.isInSafeframe = l, t.updateSafeframeSize = function (e, t) {
                if (l(e)) {
                    var n = e.$sf.ext.geom(), r = n.self.w + n.exp.r, o = n.self.h + n.exp.b,
                        i = r > t.width ? t.width - n.self.w : n.exp.r,
                        a = o > t.height ? t.height - n.self.h : n.exp.b;
                    e.$sf.ext.expand({t: 0, l: 0, r: i, b: a})
                }
            }
        }, 2979: (e, t) => {
            "use strict";
            t.FN = t.HT = void 0;
            var n = 83;
            t.HT = function () {
                return n
            }, t.FN = function (e) {
                e && (n = e)
            }
        }, 42896: (e, t) => {
            "use strict";
            t.j = void 0, t.j = "utf-8"
        }, 84703: (e, t, n) => {
            "use strict";
            var r = function () {
                return r = Object.assign || function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, r.apply(this, arguments)
            };
            t.T = void 0;
            var o = function (e) {
                return !0
            };

            function i(e) {
                var t = e.src, a = e.win, s = void 0 === a ? window : a, u = e.charset,
                    c = void 0 === u ? n(42896).j : u, d = e.async, l = void 0 === d || d, f = e.retries,
                    p = void 0 === f ? 0 : f, _ = e.onRetry, v = void 0 === _ ? n(85225).noop : _, h = e.retryDelay,
                    E = void 0 === h ? 0 : h, g = e.checkLoad, m = void 0 === g ? o : g, O = e.onBeforeLoad,
                    A = void 0 === O ? n(85225).noop : O, b = e.onLoad, S = void 0 === b ? n(85225).noop : b,
                    R = e.onError, y = void 0 === R ? n(85225).noop : R, I = s.document.createElement("script"),
                    T = function (o) {
                        p > 0 ? (v(o), i(r(r({}, e), {
                            src: t,
                            retries: p - 1
                        }))) : y(o), (0, n(91709).removeNodeFromParent)(I)
                    };
                I.type = "text/javascript", I.async = l, I.onload = function () {
                    return m(I) ? S() : T(new Error("checkLoad for ".concat(t, " failed")))
                }, I.onerror = function (e) {
                    try {
                        s.setTimeout((function () {
                            T(e)
                        }), E)
                    } catch (e) {
                    }
                }, I.src = t, I.charset = c, A(I), (0, n(50775).getHead)(s).appendChild(I)
            }

            t.T = function (e) {
                var t = e.dropCacheOnRetry, o = void 0 !== t && t, a = e.onBeforeLoad,
                    s = void 0 === a ? n(85225).noop : a, u = e.retries, c = void 0 === u ? 0 : u;
                if (!e.checkLoad || !e.checkLoad()) {
                    var d = s, l = 0;
                    return o && c > 0 && (d = function (e) {
                        if (s(e), l > 0) {
                            var t = -1 === e.src.indexOf("?") ? "?" : "&", r = (0, n(44084).z)(4);
                            e.src += t + r
                        }
                        l++
                    }), i(r(r({}, e), {onBeforeLoad: d}))
                }
                e.onLoad && e.onLoad()
            }
        }, 88390: (e, t, n) => {
            "use strict";
            t.o$ = t.Ri = void 0, t.Ri = "adSessionID", t.o$ = (0, n(12251).protect)("sessionId::configureMetrika", (function (e, r) {
                var o;
                (0, n(35332).C)(e, ((o = {})[t.Ri] = r, o))
            }))
        }, 72367: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.generateSessionId = void 0;
            t.generateSessionId = function () {
                return (1e6 * (0, n(70321).M)()).toFixed(0) + (new Date).valueOf().toString()
            }
        }, 44021: (e, t, n) => {
            "use strict";
            t.G = void 0;
            t.G = function (e, t, r, o) {
                var i = t.getItem(n(93777).Y);
                return i || (i = r.getItem(n(93777).Y) || e(), o(window, i)), t.setItem(n(93777).Y, i), r.setItem(n(93777).Y, i), i
            }
        }, 49131: (e, t, n) => {
            "use strict";
            var r;
            Object.defineProperty(t, "__esModule", {value: !0}), t.setSessionId = t.getSessionId = void 0;
            t.getSessionId = function () {
                return r || (r = (0, n(44021).G)(n(72367).generateSessionId, (0, n(24351).V)("common"), (0, n(60304).M)("common"), n(88390).o$)), r
            };
            t.setSessionId = function (e) {
                r !== e && ((0, n(61674).K)(e, (0, n(24351).V)("common"), (0, n(60304).M)("common"), n(88390).o$), r = e)
            }
        }, 93777: (e, t) => {
            "use strict";
            t.Y = void 0, t.Y = "sessionId"
        }, 61674: (e, t, n) => {
            "use strict";
            t.K = void 0;
            t.K = function (e, t, r, o) {
                o(window, e), t.setItem(n(93777).Y, e), r.setItem(n(93777).Y, e)
            }
        }, 4567: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.setAvailableFont = void 0;
            var r = ["sf", "roboto", "arial"];
            t.setAvailableFont = function () {
                var e, t;
                if (!(null === (e = null === window || void 0 === window ? void 0 : window.Ya) || void 0 === e ? void 0 : e.availableFontFamily)) {
                    var o = window && (window.Ya || (window.Ya = {})) || {};
                    try {
                        if ((null === (t = document.fonts) || void 0 === t ? void 0 : t.check) && !document.fonts.check("16px ABCDFGHJKLMN")) for (var i = 0; i < r.length; i++) {
                            var a = r[i];
                            if (document.fonts.check("16px ".concat((0, n(36781).formatFontFamily)(a)))) return void (o.availableFontFamily = a)
                        }
                    } catch (e) {
                    }
                    if (window) {
                        var s = document.body, u = document.createElement("span");
                        u.innerHTML = "WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW", u.style.cssText = ["position:absolute", "width:auto", "font-size:128px", "left:-99999px"].join(" !important;");
                        var c = {sf: 4962, roboto: 4770, arial: 5074}, d = function (e) {
                            u.style.fontFamily = e, s.appendChild(u);
                            var t = u.clientWidth;
                            return s.removeChild(u), t
                        };
                        for (i = 0; i < r.length; i++) {
                            a = r[i];
                            var l = d((0, n(36781).getFontFamilyString)([a]));
                            if (l >= c[a] - 5 && l <= c[a] + 5) return void (o.availableFontFamily = a)
                        }
                    }
                }
            }
        }, 2086: (e, t, n) => {
            "use strict";
            t.Pc = void 0;

            function r(e, t, n) {
                if (!n) return {x: .5, y: .5};
                var r = Number(n.x) + Number(n.w) / 2, o = Number(n.y) + Number(n.h) / 2;
                return {x: r / Number(e.w), y: o / Number(e.h)}
            }

            function o(e, t) {
                if (e && 0 !== e.length) {
                    var n = e.map((function (e) {
                        return function (e, t) {
                            var n = Number(e.w) / Number(e.h), r = n <= t.w / t.h, o = r ? t.w : t.h * n,
                                i = r ? t.w / n : t.h;
                            return {
                                area: Math.min(o, Number(e.w)) * Math.min(i, Number(e.h)),
                                originArea: Number(e.w) * Number(e.h),
                                smartCenter: e
                            }
                        }(e, t)
                    }));
                    return n.__preduce((function (e, t) {
                        return r = t, (n = e).area > r.area || n.area === r.area && n.originArea < r.originArea ? n : r;
                        var n, r
                    }), n[0]).smartCenter
                }
            }

            function i(e, t) {
                return Math.max(Number(e.w) - t.width, 0) + Math.max(Number(e.h) - t.height, 0)
            }

            function a(e, t) {
                return -Math.min(t.width - Number(e.w), 0) - Math.min(t.height - Number(e.h), 0)
            }

            t.Pc = r
        }, 68577: (e, t) => {
            "use strict";
            t.R = void 0;
            var n = function () {
                function e(e) {
                    this.obj = e
                }

                return e.prototype.getItem = function (e) {
                    return this.obj[e]
                }, e.prototype.setItem = function (e, t) {
                    this.obj[e] = t
                }, e
            }();
            t.R = n
        }, 11978: (e, t) => {
            "use strict";
            t.W = void 0;
            t.W = function (e, t, n) {
                var r = e.getItem(t);
                return r || (r = n(t), e.setItem(t, r)), r
            }
        }, 17978: (e, t, n) => {
            "use strict";
            t.a = void 0;
            t.a = function (e, t, r) {
                var o;
                return (0, n(94114).N)([e.top], (function (e) {
                    if (!(o = (0, n(12251).callSafe)((function () {
                        return (0, n(95721).U)(e, t)
                    })))) return (0, n(12251).callSafe)((function () {
                        return (0, n(66779).listToArray)(e.frames)
                    })) || []
                })), o || (o = r()), (0, n(9562).set)(e, t, o), o
            }
        }, 60304: (e, t, n) => {
            "use strict";
            t.M = void 0;
            var r = (0, n(94532).once)((function () {
                return (0, n(17978).a)(self, "Ya.pcodeCrossFrameData", (function () {
                    return new (n(68577).R)({})
                }))
            }));
            t.M = function (e) {
                return (0, n(11978).W)(r(), e, (function () {
                    return new (n(68577).R)({})
                }))
            }
        }, 80366: (e, t, n) => {
            "use strict";
            t.H = void 0;
            t.H = function (e, t, r) {
                var o = (0, n(95721).U)(e, t);
                return o || (o = r(), (0, n(9562).set)(e, t, o)), o
            }
        }, 24351: (e, t, n) => {
            "use strict";
            t.V = void 0;
            var r = (0, n(94532).once)((function () {
                return (0, n(80366).H)(self, "Ya.pcodeWindowData", (function () {
                    return new (n(68577).R)({})
                }))
            }));
            t.V = function (e) {
                return (0, n(11978).W)(r(), e, (function () {
                    return new (n(68577).R)({})
                }))
            }
        }, 22698: (e, t) => {
            "use strict";
            t.p = void 0, t.p = function (e, t) {
                return t === e.substring(e.length - t.length)
            }
        }, 3591: (e, t, n) => {
            "use strict";
            t.N = void 0, t.N = function (e, t) {
                void 0 === e && (e = "a"), void 0 === t && (t = "z");
                var r = (0, n(67729).getRandomInt)(e.charCodeAt(0), t.charCodeAt(0));
                return String.fromCharCode(r)
            }
        }, 44084: (e, t, n) => {
            "use strict";
            t.z = void 0, t.z = function (e) {
                for (var t = [], r = 0; r < e; r++) t.push((0, n(3591).N)());
                return t.join("")
            }
        }, 607: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.isNonEmptyString = void 0, t.isNonEmptyString = function (e) {
                return (0, n(41486).isString)(e) && e.length > 0
            }
        }, 41486: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.isString = void 0, t.isString = function (e) {
                return "string" == typeof e
            }
        }, 84527: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.padLeft = void 0, t.padLeft = function (e, t, n) {
                void 0 === n && (n = " ");
                var r = t - e.length;
                if (r > 0) {
                    for (var o = n; o.length < r;) o += o;
                    return (o.length > r ? o.substr(0, r) : o) + e
                }
                return e
            }
        }, 42726: (e, t, n) => {
            "use strict";
            var r = function () {
                return r = Object.assign || function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, r.apply(this, arguments)
            };
            t.f = void 0;
            var o = function () {
                function e(e) {
                    void 0 === e && (e = {}), this.props = {}, this.setProps(r(r({}, this.defaults()), e))
                }

                return e.sliceBits = function (e, t, r) {
                    return (0, n(98236).tf)(e, t, r)
                }, e.prototype.defaults = function () {
                    return {}
                }, e.prototype.toString = function () {
                    return this.serialize().toString()
                }, e.prototype.setProps = function (e) {
                    var t = this;
                    return (0, n(7153).isObject)(e) && (0, n(15137).forEach)(this.getTemplate(), (function (n) {
                        var r = n[1];
                        r && e.hasOwnProperty(r) && (t.props[r] = e[r])
                    }), this), this
                }, e.prototype.getProps = function () {
                    return r({}, this.props)
                }, e.prototype.clone = function () {
                    return new (0, this.constructor)(this.props)
                }, e.prototype.serialize = function () {
                    var e, t, r = (e = this.getTemplate(), t = this.props, (0, n(15735).map)(e, (function (e) {
                        var n = e[0], r = e[1];
                        return [n, r && t[r] || null]
                    })));
                    return (0, n(98236).OF)(r)
                }, e.prototype.slice = function (t, n) {
                    return e.sliceBits(this.serialize(), t, n)
                }, e
            }();
            t.f = o
        }, 27265: (e, t) => {
            "use strict";
            t.T = void 0, t.T = {
                DIRECT: 1,
                RTB: 2,
                PERFORMANCE: 3,
                DISTRIBUTION: 4,
                ADFOX: 5,
                WIDGET: 13,
                OLD_BUILD: 14,
                LONG_SESSION: 15
            }
        }, 98236: (e, t, n) => {
            "use strict";

            function r(e, t) {
                var n = function (e, t) {
                    return Number(e) & Math.pow(2, t) - 1
                }(e, t).toString(2);
                return o(n, t)
            }

            function o(e, t) {
                return (0, n(84527).padLeft)(e, t, "0")
            }

            t.tf = t.OF = void 0, t.OF = function (e) {
                for (var t = [], n = 0, o = e; n < o.length; n++) {
                    var i = o[n], a = i[0], s = r(i[1], a);
                    t.push(s)
                }
                return function (e) {
                    if (e.length > 53) throw new Error("bitString_overflow");
                    return parseInt(e, 2)
                }(t.reverse().join(""))
            }, t.tf = function (e, t, n) {
                var r = t + n, i = o(e.toString(2), r).substr(-r, n);
                return parseInt(i, 2)
            }
        }, 38414: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.DEFAULT_TAG_MODS = t.DEFAULT_CHAR = t.DOT = t.WBR = t.BREAK = t.HYPHEN = t.SHY = t.SPACE = t.YS_FONT_FAMILY = void 0, t.YS_FONT_FAMILY = "ys", t.SPACE = " ", t.SHY = "&shy;", t.HYPHEN = "\u2010", t.BREAK = "<br>", t.WBR = "<wbr>", t.DOT = "\u2022", t.DEFAULT_CHAR = "m", t.DEFAULT_TAG_MODS = {
                b: ["bold"],
                i: ["italic"]
            }
        }, 36781: (e, t, n) => {
            "use strict";

            function r(e) {
                return "sf" === e ? "SF Pro Text" : "ys" === e ? "YS Text Variable" : "sans-serif" === e || "inherit" === e ? e : "".concat(e[0].toUpperCase()).concat(e.slice(1))
            }

            Object.defineProperty(t, "__esModule", {value: !0}), t.formatFontFamily = t.getFontFamilyString = void 0, t.getFontFamilyString = function (e) {
                return void 0 === e && (e = []), -1 !== e.indexOf("inherit") ? "inherit" : (0, n(15735).map)((0, n(94320).filter)(e, Boolean), r).concat(["Arial", "sans-serif"]).join(", ")
            }, t.formatFontFamily = r
        }, 33200: (e, t) => {
            "use strict";
            t.$ = void 0, t.$ = function (e) {
                return Boolean(e.YA_TURBO_PAGES)
            }
        }, 28377: (e, t, n) => {
            "use strict";
            var r = function () {
                return r = Object.assign || function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, r.apply(this, arguments)
            };
            Object.defineProperty(t, "__esModule", {value: !0}), t.getPostProtocolIndex = t.addParamsToUrl = t.addParamToUrl = t.formatQueryString = t.getParamsFromUrl = t.parseQueryString = t.urlFromUrlObject = t.parseUrl = t.parseUrlUsingCache = t.PARSE_LINK_ELEMENT = void 0, t.PARSE_LINK_ELEMENT = document.createElement("a");
            t.parseUrlUsingCache = (0, n(70008).HP)((function (e) {
                var t = i(e);
                return r({}, t)
            }));
            var o = /^(android-app:|chrome-extension:)/;

            function i(e) {
                t.PARSE_LINK_ELEMENT.href = e;
                var n = t.PARSE_LINK_ELEMENT.pathname || "";
                "/" !== n.charAt(0) && (n = "/".concat(n));
                var a = (t.PARSE_LINK_ELEMENT.search || "") + (t.PARSE_LINK_ELEMENT.hash || ""), s = e.lastIndexOf(a),
                    u = -1 === s ? e : e.slice(0, s);
                if (o.test(e)) {
                    var c = i(e.replace(o, "https:"));
                    return t.PARSE_LINK_ELEMENT.href = e, r(r({}, c), {
                        originalPath: u,
                        protocol: e.slice(0, e.indexOf(":") + 1),
                        href: t.PARSE_LINK_ELEMENT.href
                    })
                }
                var d = t.PARSE_LINK_ELEMENT.protocol && /^[a-z\-]+:/i.test(t.PARSE_LINK_ELEMENT.protocol) ? t.PARSE_LINK_ELEMENT.protocol : "";
                return {
                    originalPath: u,
                    href: t.PARSE_LINK_ELEMENT.href,
                    protocol: d,
                    host: t.PARSE_LINK_ELEMENT.host,
                    hostname: t.PARSE_LINK_ELEMENT.hostname,
                    port: t.PARSE_LINK_ELEMENT.port,
                    pathname: n,
                    search: t.PARSE_LINK_ELEMENT.search,
                    hash: t.PARSE_LINK_ELEMENT.hash
                }
            }

            function a(e, t) {
                if (void 0 === t && (t = !1), t) {
                    var n = e.originalPath, r = "/" === e.pathname && "/" !== n[n.length - 1];
                    return "".concat(e.originalPath).concat(r ? "/" : "").concat(e.search).concat(e.hash)
                }
                var o = "443" === e.port || "80" === e.port ? e.hostname : e.host;
                return "".concat(e.protocol, "//").concat(o).concat(e.pathname).concat(e.search).concat(e.hash)
            }

            t.parseUrl = i, t.urlFromUrlObject = a;
            var s = function (e) {
                try {
                    return decodeURIComponent(e)
                } catch (t) {
                    return e
                }
            };

            function u(e) {
                for (var t = {}, n = e.replace(/^[?#]+/, "").replace(/#.*$/, "").split("&"), r = 0; r < n.length; r++) {
                    var o = n[r].indexOf("="), i = void 0, a = void 0;
                    if (-1 === o ? (i = s(n[r]), a = "") : (i = s(n[r].slice(0, o)), a = n[r].slice(o + 1)), i) {
                        var u = Boolean(/(\[\])$/.exec(i));
                        i = i.replace(/\[\]$/, ""), u ? void 0 === t[i] ? t[i] = [s(a)] : t[i] = [].concat(t[i], s(a)) : t[i] = s(a)
                    }
                }
                return t
            }

            t.parseQueryString = u, t.getParamsFromUrl = function (e) {
                return u(i(e).search)
            };
            var c = function (e, t) {
                return t.map((function (t) {
                    return "".concat(e, "[]=").concat(encodeURIComponent(t))
                })).join("&")
            };

            function d(e) {
                var t = [];
                for (var r in e) if (e.hasOwnProperty(r)) {
                    var o = e[r];
                    (0, n(85200).isArray)(o) ? t.push(c(r, o)) : void 0 !== o && t.push("".concat(r, "=").concat(encodeURIComponent(o)))
                }
                return "?".concat(t.join("&"))
            }

            t.formatQueryString = d, t.addParamToUrl = function (e, t, n) {
                if (void 0 === n) return e;
                var o = i(e), s = u(o.search);
                return s[t] = n, a(r(r({}, o), {search: d(s)}))
            }, t.addParamsToUrl = function (e, t, o) {
                var s = void 0 === o ? {} : o, c = s.override, l = void 0 === c || c, f = s.saveOriginalPath,
                    p = void 0 !== f && f, _ = i(e), v = u(_.search);
                (0, n(38715).forOwn)(t, (function (e, t) {
                    (void 0 === v[t] || l) && (v[t] = e)
                }));
                var h = d(v);
                return a(r(r({}, _), {search: h}), p)
            }, t.getPostProtocolIndex = function (e) {
                var t = e.indexOf("//");
                return -1 !== t ? t + 2 : 0
            }
        }, 21625: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.addEquals = t.cropEquals = t.utf8Decode = t.decodeUInt8String = t.decode = t.utf8Encode = t.encodeUInt8String = t.encode = void 0;
            var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=";

            function r(e) {
                for (var t = "", r = 0; r < e.length;) {
                    var o = e.charCodeAt(r++), i = e.charCodeAt(r++), a = e.charCodeAt(r++), s = o >> 2,
                        u = (3 & o) << 4 | i >> 4, c = (15 & i) << 2 | a >> 6, d = 63 & a;
                    isNaN(i) ? c = d = 64 : isNaN(a) && (d = 64), t = t + n.charAt(s) + n.charAt(u) + n.charAt(c) + n.charAt(d)
                }
                return t
            }

            function o(e, t) {
                e = e.replace(/\r\n/g, "\n");
                for (var n = "", r = 0; r < e.length; r++) {
                    var o = e.charCodeAt(r), i = void 0;
                    if (o < 128 ? i = String.fromCharCode(o) : o > 127 && o < 2048 ? (i = String.fromCharCode(o >> 6 | 192), i += String.fromCharCode(63 & o | 128)) : (i = String.fromCharCode(o >> 12 | 224), i += String.fromCharCode(o >> 6 & 63 | 128), i += String.fromCharCode(63 & o | 128)), n.length + i.length > t) break;
                    n += i
                }
                return n
            }

            function i(e) {
                var t = [], r = 0;
                for (e = e.replace(/[^A-Za-z0-9\-_=]/g, ""); r < e.length;) {
                    var o = n.indexOf(e.charAt(r++)), i = n.indexOf(e.charAt(r++)), a = n.indexOf(e.charAt(r++)),
                        s = n.indexOf(e.charAt(r++)), u = o << 2 | i >> 4, c = (15 & i) << 4 | a >> 2,
                        d = (3 & a) << 6 | s;
                    t.push(String.fromCharCode(u)), 64 !== a && t.push(String.fromCharCode(c)), 64 !== s && t.push(String.fromCharCode(d))
                }
                return t.join("")
            }

            function a(e) {
                for (var t = [], n = 0; n < e.length;) {
                    var r = e.charCodeAt(n);
                    if (r < 128) t.push(String.fromCharCode(r)), n++; else if (r > 191 && r < 224) {
                        var o = e.charCodeAt(n + 1);
                        t.push(String.fromCharCode((31 & r) << 6 | 63 & o)), n += 2
                    } else {
                        o = e.charCodeAt(n + 1);
                        var i = e.charCodeAt(n + 2);
                        t.push(String.fromCharCode((15 & r) << 12 | (63 & o) << 6 | 63 & i)), n += 3
                    }
                }
                return t.join("")
            }

            t.encode = function (e, t) {
                return void 0 === t && (t = 1e6), r(o(e, 3 * t / 4 | 0))
            }, t.encodeUInt8String = r, t.utf8Encode = o, t.decode = function (e) {
                return a(i(e))
            }, t.decodeUInt8String = i, t.utf8Decode = a, t.cropEquals = function (e) {
                return e.replace(/=+$/, "")
            }, t.addEquals = function (e) {
                for (; e.length % 4 != 0;) e += "=";
                return e
            }
        }, 65637: (e, t) => {
            "use strict";
            t.n = void 0;
            var n = 32768, r = 8192, o = 258;
            var i, a, s, u, c, d, l, f, p, _, v, h, E, g, m, O, A, b, S, R, y, I, T, w, D, N, C, M, P, L, x, B, k, F, j,
                H, W, U, Y, V, G, z, X, q, K, Z, $, Q, J, ee, te, ne, re, oe, ie, ae = 8192, se = 8191, ue = 262,
                ce = 32506, de = 15, le = 256, fe = 286, pe = 30, _e = 573, ve = parseInt(5), he = null,
                Ee = function () {
                    this.fc = 0, this.dl = 0
                }, ge = function () {
                    this.dyn_tree = null, this.static_tree = null, this.extra_bits = null, this.extra_base = 0, this.elems = 0, this.max_length = 0, this.max_code = 0
                }, me = function (e, t, n, r) {
                    this.good_length = e, this.max_lazy = t, this.nice_length = n, this.max_chain = r
                }, Oe = function () {
                    this.next = null, this.len = 0, this.ptr = new Array(r), this.off = 0
                }, Ae = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0),
                be = new Array(0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13),
                Se = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7),
                Re = new Array(16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15),
                ye = new Array(new me(0, 0, 0, 0), new me(4, 4, 8, 4), new me(4, 5, 16, 8), new me(4, 6, 32, 32), new me(4, 4, 16, 16), new me(8, 16, 32, 32), new me(8, 16, 128, 128), new me(8, 32, 128, 256), new me(32, 128, 258, 1024), new me(32, 258, 258, 4096)),
                Ie = function (e) {
                    e.next = i, i = e
                }, Te = function (e) {
                    return v[n + e]
                }, we = function (e, t) {
                    return v[n + e] = t
                }, De = function (e) {
                    he[d + c++] = e, d + c === r && et()
                }, Ne = function (e) {
                    e &= 65535, d + c < 8190 ? (he[d + c++] = 255 & e, he[d + c++] = e >>> 8) : (De(255 & e), De(e >>> 8))
                }, Ce = function () {
                    m = (m << ve ^ 255 & f[y + 3 - 1]) & se, O = Te(m), v[32767 & y] = O, we(m, y)
                }, Me = function (e, t) {
                    $e(t[e].fc, t[e].dl)
                }, Pe = function (e) {
                    return 255 & (e < 256 ? X[e] : X[256 + (e >> 7)])
                }, Le = function (e, t, n) {
                    return e[t].fc < e[n].fc || e[t].fc === e[n].fc && G[t] <= G[n]
                }, xe = function (e, t, n) {
                    var r;
                    for (r = 0; r < n && ie < oe.length; r++) e[t + r] = 255 & oe.charCodeAt(ie++);
                    return r
                }, Be = function (e) {
                    var t, n, r = D, i = y, a = R, s = y > ce ? y - ce : 0, u = y + o, c = f[i + a - 1], d = f[i + a];
                    R >= M && (r >>= 2);
                    do {
                        if (f[(t = e) + a] == d && f[t + a - 1] == c && f[t] == f[i] && f[++t] == f[i + 1]) {
                            i += 2, t++;
                            do {
                            } while (f[++i] === f[++t] && f[++i] === f[++t] && f[++i] === f[++t] && f[++i] === f[++t] && f[++i] === f[++t] && f[++i] === f[++t] && f[++i] === f[++t] && f[++i] === f[++t] && i < u);
                            if (n = o - (u - i), i = u - o, n > a) {
                                if (I = e, a = n, n >= o) break;
                                c = f[i + a - 1], d = f[i + a]
                            }
                        }
                    } while ((e = v[32767 & e]) > s && 0 != --r);
                    return a
                }, ke = function () {
                    var e, t, r = 65536 - w - y;
                    if (-1 === r) r--; else if (y >= 65274) {
                        for (e = 0; e < n; e++) f[e] = f[e + n];
                        for (I -= n, y -= n, g -= n, e = 0; e < ae; e++) t = Te(e), we(e, t >= n ? t - n : 0);
                        for (e = 0; e < n; e++) t = v[e], v[e] = t >= n ? t - n : 0;
                        r += n
                    }
                    T || ((e = xe(f, y + w, r)) <= 0 ? T = !0 : w += e)
                }, Fe = function () {
                    T || (h = 0, E = 0, We(), function () {
                        var e;
                        for (e = 0; e < ae; e++) v[n + e] = 0;
                        if (N = ye[C].max_lazy, M = ye[C].good_length, D = ye[C].max_chain, y = 0, g = 0, (w = xe(f, 0, 65536)) <= 0) return T = !0, void (w = 0);
                        for (T = !1; w < ue && !T;) ke();
                        for (m = 0, e = 0; e < 2; e++) m = (m << ve ^ 255 & f[e]) & se
                    }(), a = null, c = 0, d = 0, b = 0, C <= 3 ? (R = 2, S = 0) : (S = 2, b = 0, b = 0), l = !1)
                }, je = function (e, t, n) {
                    var r;
                    return u || (Fe(), u = !0, 0 !== w) ? (r = He(e, t, n)) === n ? n : l ? r : (C <= 3 ? function () {
                        for (; 0 != w && null === a;) {
                            var e;
                            if (Ce(), 0 != O && y - O <= ce && (S = Be(O)) > w && (S = w), S >= 3) if (e = Ke(y - I, S - 3), w -= S, S <= N) {
                                S--;
                                do {
                                    y++, Ce()
                                } while (0 != --S);
                                y++
                            } else y += S, S = 0, m = ((m = 255 & f[y]) << ve ^ 255 & f[y + 1]) & se; else e = Ke(0, 255 & f[y]), w--, y++;
                            for (e && (qe(0), g = y); w < ue && !T;) ke()
                        }
                    }() : function () {
                        for (; 0 != w && null === a;) {
                            if (Ce(), R = S, A = I, S = 2, 0 != O && R < N && y - O <= ce && ((S = Be(O)) > w && (S = w), 3 === S && y - I > 4096 && S--), R >= 3 && S <= R) {
                                var e;
                                e = Ke(y - 1 - A, R - 3), w -= R - 1, R -= 2;
                                do {
                                    y++, Ce()
                                } while (0 != --R);
                                b = 0, S = 2, y++, e && (qe(0), g = y)
                            } else 0 != b ? (Ke(0, 255 & f[y - 1]) && (qe(0), g = y), y++, w--) : (b = 1, y++, w--);
                            for (; w < ue && !T;) ke()
                        }
                    }(), 0 === w && (0 != b && Ke(0, 255 & f[y - 1]), qe(1), l = !0), r + He(e, r + t, n - r)) : (l = !0, 0)
                }, He = function (e, t, n) {
                    var r, o, i;
                    for (r = 0; null != a && r < n;) {
                        for ((o = n - r) > a.len && (o = a.len), i = 0; i < o; i++) e[t + r + i] = ~a.ptr[a.off + i];
                        var s;
                        if (a.off += o, a.len -= o, r += o, 0 === a.len) s = a, a = a.next, Ie(s)
                    }
                    if (r === n) return r;
                    if (d < c) {
                        for ((o = n - r) > c - d && (o = c - d), i = 0; i < o; i++) e[t + r + i] = ~he[d + i];
                        r += o, c === (d += o) && (c = d = 0)
                    }
                    return r
                }, We = function () {
                    var e, t, n, r, o;
                    if (0 == B[0].dl) {
                        for (F.dyn_tree = P, F.static_tree = x, F.extra_bits = Ae, F.extra_base = 257, F.elems = fe, F.max_length = de, F.max_code = 0, j.dyn_tree = L, j.static_tree = B, j.extra_bits = be, j.extra_base = 0, j.elems = pe, j.max_length = de, j.max_code = 0, H.dyn_tree = k, H.static_tree = null, H.extra_bits = Se, H.extra_base = 0, H.elems = 19, H.max_length = 7, H.max_code = 0, n = 0, r = 0; r < 28; r++) for (q[r] = n, e = 0; e < 1 << Ae[r]; e++) z[n++] = r;
                        for (z[n - 1] = r, o = 0, r = 0; r < 16; r++) for (K[r] = o, e = 0; e < 1 << be[r]; e++) X[o++] = r;
                        for (o >>= 7; r < pe; r++) for (K[r] = o << 7, e = 0; e < 1 << be[r] - 7; e++) X[256 + o++] = r;
                        for (t = 0; t <= de; t++) W[t] = 0;
                        for (e = 0; e <= 143;) x[e++].dl = 8, W[8]++;
                        for (; e <= 255;) x[e++].dl = 9, W[9]++;
                        for (; e <= 279;) x[e++].dl = 7, W[7]++;
                        for (; e <= 287;) x[e++].dl = 8, W[8]++;
                        for (Ve(x, 287), e = 0; e < pe; e++) B[e].dl = 5, B[e].fc = Qe(e, 5);
                        Ue()
                    }
                }, Ue = function () {
                    var e;
                    for (e = 0; e < fe; e++) P[e].fc = 0;
                    for (e = 0; e < pe; e++) L[e].fc = 0;
                    for (e = 0; e < 19; e++) k[e].fc = 0;
                    P[256].fc = 1, ne = re = 0, $ = Q = J = 0, ee = 0, te = 1
                }, Ye = function (e, t) {
                    for (var n = U[t], r = t << 1; r <= Y && (r < Y && Le(e, U[r + 1], U[r]) && r++, !Le(e, n, U[r]));) U[t] = U[r], t = r, r <<= 1;
                    U[t] = n
                }, Ve = function (e, t) {
                    var n, r, o = new Array(16), i = 0;
                    for (n = 1; n <= de; n++) i = i + W[n - 1] << 1, o[n] = i;
                    for (r = 0; r <= t; r++) {
                        var a = e[r].dl;
                        0 !== a && (e[r].fc = Qe(o[a]++, a))
                    }
                }, Ge = function (e) {
                    var t, n, r = e.dyn_tree, o = e.static_tree, i = e.elems, a = -1, s = i;
                    for (Y = 0, V = _e, t = 0; t < i; t++) 0 != r[t].fc ? (U[++Y] = a = t, G[t] = 0) : r[t].dl = 0;
                    for (; Y < 2;) {
                        var u = U[++Y] = a < 2 ? ++a : 0;
                        r[u].fc = 1, G[u] = 0, ne--, null != o && (re -= o[u].dl)
                    }
                    for (e.max_code = a, t = Y >> 1; t >= 1; t--) Ye(r, t);
                    do {
                        t = U[1], U[1] = U[Y--], Ye(r, 1), n = U[1], U[--V] = t, U[--V] = n, r[s].fc = r[t].fc + r[n].fc, G[t] > G[n] + 1 ? G[s] = G[t] : G[s] = G[n] + 1, r[t].dl = r[n].dl = s, U[1] = s++, Ye(r, 1)
                    } while (Y >= 2);
                    U[--V] = U[1], function (e) {
                        var t, n, r, o, i, a, s = e.dyn_tree, u = e.extra_bits, c = e.extra_base, d = e.max_code,
                            l = e.max_length, f = e.static_tree, p = 0;
                        for (o = 0; o <= de; o++) W[o] = 0;
                        for (s[U[V]].dl = 0, t = V + 1; t < _e; t++) (o = s[s[n = U[t]].dl].dl + 1) > l && (o = l, p++), s[n].dl = o, n > d || (W[o]++, i = 0, n >= c && (i = u[n - c]), a = s[n].fc, ne += a * (o + i), null != f && (re += a * (f[n].dl + i)));
                        if (0 !== p) {
                            do {
                                for (o = l - 1; 0 === W[o];) o--;
                                W[o]--, W[o + 1] += 2, W[l]--, p -= 2
                            } while (p > 0);
                            for (o = l; 0 != o; o--) for (n = W[o]; 0 != n;) (r = U[--t]) > d || (s[r].dl != o && (ne += (o - s[r].dl) * s[r].fc, s[r].fc = o), n--)
                        }
                    }(e), Ve(r, a)
                }, ze = function (e, t) {
                    var n, r, o = -1, i = e[0].dl, a = 0, s = 7, u = 4;
                    for (0 === i && (s = 138, u = 3), e[t + 1].dl = 65535, n = 0; n <= t; n++) r = i, i = e[n + 1].dl, ++a < s && r === i || (a < u ? k[r].fc += a : 0 != r ? (r != o && k[r].fc++, k[16].fc++) : a <= 10 ? k[17].fc++ : k[18].fc++, a = 0, o = r, 0 === i ? (s = 138, u = 3) : r === i ? (s = 6, u = 3) : (s = 7, u = 4))
                }, Xe = function (e, t) {
                    var n, r, o = -1, i = e[0].dl, a = 0, s = 7, u = 4;
                    for (0 === i && (s = 138, u = 3), n = 0; n <= t; n++) if (r = i, i = e[n + 1].dl, !(++a < s && r === i)) {
                        if (a < u) do {
                            Me(r, k)
                        } while (0 != --a); else 0 != r ? (r != o && (Me(r, k), a--), Me(16, k), $e(a - 3, 2)) : a <= 10 ? (Me(17, k), $e(a - 3, 3)) : (Me(18, k), $e(a - 11, 7));
                        a = 0, o = r, 0 === i ? (s = 138, u = 3) : r === i ? (s = 6, u = 3) : (s = 7, u = 4)
                    }
                }, qe = function (e) {
                    var t, n, r, o, i;
                    if (o = y - g, Z[J] = ee, Ge(F), Ge(j), r = function () {
                        var e;
                        for (ze(P, F.max_code), ze(L, j.max_code), Ge(H), e = 18; e >= 3 && 0 == k[Re[e]].dl; e--) ;
                        return ne += 3 * (e + 1) + 5 + 5 + 4, e
                    }(), (n = re + 3 + 7 >> 3) <= (t = ne + 3 + 7 >> 3) && (t = n), o + 4 <= t && g >= 0) for ($e(0 + e, 3), Je(), Ne(o), Ne(~o), i = 0; i < o; i++) De(f[g + i]); else n === t ? ($e(2 + e, 3), Ze(x, B)) : ($e(4 + e, 3), function (e, t, n) {
                        var r;
                        for ($e(e - 257, 5), $e(t - 1, 5), $e(n - 4, 4), r = 0; r < n; r++) $e(k[Re[r]].dl, 3);
                        Xe(P, e - 1), Xe(L, t - 1)
                    }(F.max_code + 1, j.max_code + 1, r + 1), Ze(P, L));
                    Ue(), 0 != e && Je()
                }, Ke = function (e, t) {
                    if (_[$++] = t, 0 === e ? P[t].fc++ : (e--, P[z[t] + le + 1].fc++, L[Pe(e)].fc++, p[Q++] = e, ee |= te), te <<= 1, 0 == (7 & $) && (Z[J++] = ee, ee = 0, te = 1), C > 2 && 0 == (4095 & $)) {
                        var n, r = 8 * $, o = y - g;
                        for (n = 0; n < pe; n++) r += L[n].fc * (5 + be[n]);
                        if (r >>= 3, Q < parseInt($ / 2) && r < parseInt(o / 2)) return !0
                    }
                    return 8191 === $ || 8192 === Q
                }, Ze = function (e, t) {
                    var n, r, o, i, a = 0, s = 0, u = 0, c = 0;
                    if (0 != $) do {
                        0 == (7 & a) && (c = Z[u++]), r = 255 & _[a++], 0 == (1 & c) ? Me(r, e) : (o = z[r], Me(o + le + 1, e), 0 != (i = Ae[o]) && (r -= q[o], $e(r, i)), n = p[s++], o = Pe(n), Me(o, t), 0 != (i = be[o]) && (n -= K[o], $e(n, i))), c >>= 1
                    } while (a < $);
                    Me(256, e)
                }, $e = function (e, t) {
                    E > 16 - t ? (Ne(h |= e << E), h = e >> 16 - E, E += t - 16) : (h |= e << E, E += t)
                }, Qe = function (e, t) {
                    var n = 0;
                    do {
                        n |= 1 & e, e >>= 1, n <<= 1
                    } while (--t > 0);
                    return n >> 1
                }, Je = function () {
                    E > 8 ? Ne(h) : E > 0 && De(h), h = 0, E = 0
                }, et = function () {
                    if (0 != c) {
                        var e, t;
                        for (null != i ? (n = i, i = i.next) : n = new Oe, n.next = null, n.len = n.off = 0, e = n, null === a ? a = s = e : s = s.next = e, e.len = c - d, t = 0; t < e.len; t++) e.ptr[t] = he[d + t];
                        c = d = 0
                    }
                    var n
                };
            t.n = function (e, t) {
                var n, o;
                oe = e, ie = 0, void 0 === t && (t = 6), function (e) {
                    var t;
                    if (e ? e < 1 ? e = 1 : e > 9 && (e = 9) : e = 6, C = e, u = !1, T = !1, null == he) {
                        for (i = a = s = null, he = new Array(r), f = new Array(65536), p = new Array(8192), _ = new Array(32832), v = new Array(65536), P = new Array(_e), t = 0; t < _e; t++) P[t] = new Ee;
                        for (L = new Array(61), t = 0; t < 61; t++) L[t] = new Ee;
                        for (x = new Array(288), t = 0; t < 288; t++) x[t] = new Ee;
                        for (B = new Array(pe), t = 0; t < pe; t++) B[t] = new Ee;
                        for (k = new Array(39), t = 0; t < 39; t++) k[t] = new Ee;
                        F = new ge, j = new ge, H = new ge, W = new Array(16), U = new Array(573), G = new Array(573), z = new Array(256), X = new Array(512), q = new Array(29), K = new Array(pe), Z = new Array(parseInt(1024))
                    }
                }(t);
                for (var c = new Array(1024), d = []; (n = je(c, 0, c.length)) > 0;) {
                    var l = new Array(n);
                    for (o = 0; o < n; o++) l[o] = String.fromCharCode((256 + c[o]) % 256);
                    d[d.length] = l.join("")
                }
                return oe = null, d.join("")
            }
        }, 93420: (e, t) => {
            "use strict";
            t.d = void 0, t.d = 2147483647
        }, 49573: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.BLOCK_TYPES = t.URLS = t.REFRESH_VIEWPORT_VISIBLE_PART = t.MAX_ADS_LIMIT = t.DEFAULT_RELOAD_TIMEOUT = void 0;
            var r = (0, n(7386).isHermione)() && (null === window || void 0 === window ? void 0 : window.location) && !(0, n(7386).isReleaseTestSuite)() ? "//".concat(window.location.host) : "//an.yandex.ru",
                o = n(70709).IS_YANDEX_RU_DOMAIN ? "//yandex.ru/ads" : r,
                i = n(70709).IS_YANDEX_RU_DOMAIN_DISTRIB ? "//yandex.ru/ads" : n(70709).IS_YANDEX_RU_DOMAIN ? "//yandex.ru/an" : "//an.yandex.ru";
            t.DEFAULT_RELOAD_TIMEOUT = 30, t.MAX_ADS_LIMIT = 9, t.REFRESH_VIEWPORT_VISIBLE_PART = .5, t.URLS = {
                direct: "".concat("https:").concat(i, "/page/"),
                rtb: "".concat("https:").concat(o, "/meta/"),
                render: "".concat("https:", "//yandex.ru/ads/render/"),
                favicon: (0, n(7386).isHermione)() ? "//pcode-ci.s3.mds.yandex.net/pcode-hermione/favicons/" : "https://favicon.yandex.net/favicon/"
            }, t.BLOCK_TYPES = {VERTICAL: "vertical", HORIZONTAL: "horizontal", GRID: "grid", SSR: "ssr"}
        }, 31629: (e, t, n) => {
            "use strict";
            t.H1 = t.iF = t.zh = void 0;
            var r, o = "__pcode_freq_storage__";

            function i() {
                if (!r) {
                    var e = n(74987).safeLocalStorage.getItem(o) || "";
                    try {
                        r = n.lv["json"].parse(e)
                    } catch (e) {
                        r = {}
                    }
                }
            }

            function a() {
                try {
                    var e = n.lv["json"].stringify(r);
                    n(74987).safeLocalStorage.setItem(o, e)
                } catch (e) {
                }
            }

            function s(e) {
                return Boolean(e) && u(e.maxShowCount, 1, 100) && u(e.periodInSeconds, 1, 86400)
            }

            function u(e, t, r) {
                return (0, n(50023).z)(e) && e > t && e < r
            }

            t.zh = function (e) {
                i();
                var t = r[e];
                return s(t) && (0, n(85200).isArray)(t.lastRequests) ? t : void 0
            }, t.iF = function (e) {
                var t;
                if ((0, n(41486).isString)(e.blockId)) {
                    if (i(), s(e)) {
                        var o = (null === (t = r[e.blockId]) || void 0 === t ? void 0 : t.lastRequests) || [];
                        o.push(e.reqTime), r[e.blockId] = {
                            maxShowCount: e.maxShowCount,
                            periodInSeconds: e.periodInSeconds,
                            lastRequests: o
                        }
                    } else delete r[e.blockId];
                    a()
                }
            }, t.H1 = function (e, t) {
                i(), r[e].lastRequests = t, a()
            }
        }, 30289: (e, t, n) => {
            "use strict";

            function r(e) {
                var t = (0, n(84492).ne)(e), r = null == t ? void 0 : t.pathEnabled,
                    o = null == t ? void 0 : t.pathDisabled, i = !0;
                if ((0, n(41486).isString)(r) || (0, n(41486).isString)(o)) {
                    if ((0, n(41486).isString)(r)) {
                        var a = r.split(",").map((function (e) {
                            return e.trim()
                        }));
                        i = (0, n(38179).some)(a, (function (e) {
                            return location.pathname.startsWith(e)
                        }))
                    }
                    if ((0, n(41486).isString)(o)) {
                        a = o.split(",").map((function (e) {
                            return e.trim()
                        }));
                        i = !(0, n(38179).some)(a, (function (e) {
                            return location.pathname.startsWith(e)
                        }))
                    }
                    (0, n(28274).traceLog)({
                        pathEnabled: r,
                        pathDisabled: o,
                        href: location.href,
                        canShow: i
                    }, "REQUEST_URL_MASK_RESULT")
                }
                return i
            }

            Object.defineProperty(t, "__esModule", {value: !0}), t.getRequestTimeout = t.markRequest = t.canShowAd = t.canMakeRequest = void 0, t.canMakeRequest = function (e, t) {
                return r(e) && function (e, t) {
                    var r = (0, n(31629).zh)(e);
                    if (!r) return !0;
                    var o = r.maxShowCount, i = r.periodInSeconds, a = r.lastRequests.filter((function (e) {
                        return e > t - i
                    }));
                    return (0, n(31629).H1)(e, a), a.length < o
                }(e, t)
            }, t.canShowAd = r, t.markRequest = function (e, t, r) {
                void 0 === r && (r = {}), (0, n(31629).iF)({
                    blockId: e,
                    maxShowCount: r.maxShowCount,
                    periodInSeconds: r.periodInSeconds,
                    reqTime: t
                }), (0, n(84492).tA)({blockId: e, pathEnabled: r.pathEnabled, pathDisabled: r.pathDisabled})
            }, t.getRequestTimeout = function (e) {
                var t = (0, n(31629).zh)(e);
                if (t) {
                    var r = t.maxShowCount, o = t.periodInSeconds;
                    return 1e3 * Math.max(o / r, n(49573).DEFAULT_RELOAD_TIMEOUT)
                }
            }
        }, 84492: (e, t, n) => {
            "use strict";
            t.tA = t.ne = void 0;
            var r, o = "__pcode_path_storage__";

            function i() {
                if (!r) {
                    var e = n(74987).safeSessionStorage.getItem(o) || "";
                    try {
                        r = n.lv["json"].parse(e)
                    } catch (e) {
                        r = {}
                    }
                }
            }

            t.ne = function (e) {
                return i(), r[e]
            }, t.tA = function (e) {
                if ((0, n(41486).isString)(e.blockId)) {
                    if (i(), !e.pathDisabled && !e.pathEnabled) return void delete r[e.blockId];
                    r[e.blockId] = {}, e.pathEnabled && (r[e.blockId].pathEnabled = e.pathEnabled), e.pathDisabled && (r[e.blockId].pathDisabled = e.pathDisabled), function () {
                        try {
                            var e = n.lv["json"].stringify(r);
                            n(74987).safeSessionStorage.setItem(o, e)
                        } catch (e) {
                        }
                    }()
                }
            }
        }, 98341: (e, t) => {
            "use strict";
            var n = function () {
                return n = Object.assign || function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, n.apply(this, arguments)
            };
            t.Z = void 0;
            var r = function () {
                function e() {
                    this.filterData = {awaps: "", yabs: []}
                }

                return e.prototype.getAdFilterData = function () {
                    return this.filterData
                }, e.prototype.setEmptyAdFilter = function () {
                    this.filterData = {awaps: "", yabs: []}
                }, e.prototype.setAdFilterData = function (e, t) {
                    var r;
                    this.filterData = n(n({}, this.filterData), ((r = {})[e] = t, r))
                }, e.prototype.getEmptyAdFilter = function () {
                    return {awaps: "", yabs: []}
                }, e
            }();
            t.Z = r
        }, 17010: (e, t, n) => {
            "use strict";
            t.s = void 0;
            var r = function () {
                function e() {
                    this.list = []
                }

                return e.prototype.add = function (e) {
                    e && (-1 === this.indexOf(e) && this.list.push(e))
                }, e.prototype.remove = function (e) {
                    if (e) {
                        var t = this.indexOf(e);
                        -1 !== t && this.list.splice(t, 1)
                    }
                }, e.prototype.items = function () {
                    return this.list
                }, e.prototype.indexOf = function (e) {
                    return (0, n(22886).indexOf)(this.list, e, 0, (function (t) {
                        return (0, n(41486).isString)(t) || (0, n(41486).isString)(e) ? t === e : !(!t.adId || !e.adId) && (t.adId === e.adId && t.pageNumber === e.pageNumber && t.renderTo === e.renderTo)
                    }))
                }, e
            }();
            t.s = r
        }, 72812: (e, t, n) => {
            "use strict";
            t.S = void 0, t.S = function () {
                if (!(0, n(38710).getGlobalVariable)("adUsageStorageVars")) {
                    var e = {ads: new (n(17010).s), allAds: new (n(17010).s), adFilterData: new (n(98341).Z)};
                    (0, n(38710).setGlobalVariable)("adUsageStorageVars", e)
                }
                return (0, n(38710).getGlobalVariable)("adUsageStorageVars")
            }
        }, 63771: (e, t, n) => {
            "use strict";

            function r(e, t) {
                for (var n = [], r = {}, o = 0, i = e; o < i.length; o++) {
                    var a = i[o];
                    !r[a.adId] && t(a) && (n.push(a.adId), r[a.adId] = !0)
                }
                return n
            }

            t.R = void 0;
            var o = function (e) {
                return 0 != (e.top | e.bottom | e.right | e.left)
            };
            t.R = function (e, t, i, a) {
                void 0 === a && (a = function (e, t) {
                    return e === t
                });
                var s = (0, n(52544).getWindowSize)().height * t;
                if (!i) return r(e, (function () {
                    return !0
                }));
                var u = (0, n(5989).getElementById)(i.renderTo), c = u && (0, n(34403).getBoundingClientRect)(u);
                if (!c || !o(c)) return r(e, (function (e) {
                    return a(i.pageNumber, e.pageNumber)
                }));
                var d = c.top - s, l = c.bottom + s;
                return r(e, (function (e) {
                    if (!a(i.pageNumber, e.pageNumber)) return !1;
                    var t = (0, n(5989).getElementById)(e.renderTo);
                    if (!t) return !1;
                    if (i.renderTo === e.renderTo) return !0;
                    if (e.hidden) return !1;
                    var r = (0, n(34403).getBoundingClientRect)(t);
                    return r.top < l && r.bottom > d || !o(r)
                }))
            }
        }, 91411: (e, t, n) => {
            "use strict";
            var r, o = Object.create ? function (e, t, n, r) {
                void 0 === r && (r = n);
                var o = Object.getOwnPropertyDescriptor(t, n);
                o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                    enumerable: !0,
                    get: function () {
                        return t[n]
                    }
                }), Object.defineProperty(e, r, o)
            } : function (e, t, n, r) {
                void 0 === r && (r = n), e[r] = t[n]
            }, i = Object.create ? function (e, t) {
                Object.defineProperty(e, "default", {enumerable: !0, value: t})
            } : function (e, t) {
                e["default"] = t
            }, a = function (e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e) for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && o(t, e, n);
                return i(t, e), t
            }(n(70749));
            if (n(73266).isAMP) {
                var s = (0, n(60304).M)("__pcodeStorage__"), u = "adUsageStorage";
                (r = s.getItem(u)) || (s.setItem(u, a), r = a)
            } else r = a;
            e.exports = r
        }, 70749: (e, t, n) => {
            "use strict";
            var r = function () {
                return r = Object.assign || function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, r.apply(this, arguments)
            };
            Object.defineProperty(t, "__esModule", {value: !0}), t.getAdUsageStorage = t.setAllowRepeatAds = void 0;
            var o = "yabs.", i = "awaps.", a = (0, n(72812).S)(), s = a.ads, u = a.allAds, c = a.adFilterData,
                d = (0, n(88521).getHref)();
            var l, f = function () {
                function e(e) {
                    var t = e.maxSkipSize, r = void 0 === t ? 9 : t, o = e.screen, i = e.custom;
                    this.id = i ? 1 : 0, this.hidden = Boolean(o && o < 0), this.getNearbyAds = o ? function (e, t) {
                        return (0, n(63771).R)(e, o, t, (function () {
                            return !0
                        }))
                    } : function (e) {
                        return (0, n(15735).map)(e.slice(-r), (function (e) {
                            return e.adId
                        }))
                    }
                }

                return e.limitYabs = function (e, t) {
                    var n = e.length - t;
                    return n > 0 ? e.slice(n) : e
                }, e.prototype.capture = function (e) {
                    s.add(r(r({}, e), {hidden: this.hidden}))
                }, e.prototype.release = function (e) {
                    s.remove(e)
                }, e.prototype.getCapturedCount = function () {
                    return s.items().length
                }, e.prototype.captureDirect = function (e) {
                    var t = u.items(), r = (0, n(1056).e)(e, t);
                    (0, n(15137).forEach)(r, (function (e) {
                        return u.add(e)
                    }))
                }, e.prototype.getUnusableAds = function (e, t) {
                    void 0 === t && (t = []);
                    var r = {};
                    (0, n(15137).forEach)(t, (function (e) {
                        return r[e] = !0
                    }));
                    var o = (0, n(94320).filter)(s.items(), (function (e) {
                        var t = e.adId;
                        return !r[t]
                    }));
                    return this.getNearbyAds(o, e)
                }, e.prototype.saveAdFilter = function (e, t) {
                    var r = function (e) {
                        var t = e ? e.split(":") : [], r = c.getEmptyAdFilter();
                        return (0, n(15137).forEach)(t, (function (e) {
                            if (-1 !== e.indexOf(i)) r.awaps = e.split(".")[1]; else if (-1 !== e.indexOf(o)) {
                                var t = e.split(".")[1];
                                t.length > 0 && (r.yabs = (0, n(21625).decode)(t).split("\n"))
                            }
                        })), r
                    }(e);
                    c.setAdFilterData("awaps", r.awaps), t && c.setAdFilterData("yabs", r.yabs)
                }, e.prototype.getSkipToken = function (t, r) {
                    var a;
                    a = (0, n(88521).getHref)(), d !== a && (c.setEmptyAdFilter(), d = a);
                    var s, l, f = c.getAdFilterData(), p = u.items(), _ = this.getUnusableAds(t, r),
                        v = (0, n(1056).e)(f.yabs, p), h = e.limitYabs(v.concat(_), 50), E = {awaps: f.awaps, yabs: h};
                    return l = [], (s = E).awaps && l.push(i + s.awaps), s.yabs.length && l.push(o + (0, n(21625).encode)(s.yabs.join("\n"))), l.join(":")
                }, e
            }();
            t.setAllowRepeatAds = function (e) {
                l = e
            };
            t.getAdUsageStorage = function (e) {
                var t = l || e && e.allowRepeatAds || {};
                return new f(t)
            }
        }, 85384: (e, t, n) => {
            "use strict";

            function r(e) {
                return void 0 === e && (e = ""), (0, n(80511).includes)(t.BannerTypes, e)
            }

            Object.defineProperty(t, "__esModule", {value: !0}), t.isCustomBannerTypeAndExp = t.isCustomBannerType = t.BannerTypes = void 0, t.BannerTypes = ["floorAd", "fullscreen"], t.isCustomBannerType = r, t.isCustomBannerTypeAndExp = function (e) {
                return void 0 === e && (e = ""), r(e) && (0, n(80511).includes)(t.BannerTypes, (0, n(88772).useExperimentFlag)("NEW_FULLSCREEN_AND_FLOOR_AD_IN_SHADOW_DOM"))
            }
        }, 34680: (e, t, n) => {
            "use strict";
            var r = function () {
                return r = Object.assign || function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, r.apply(this, arguments)
            };
            t.T = void 0, t.T = function (e) {
                var t;
                if ("object" == typeof e) {
                    t = r({}, e);
                    var o = e.screen;
                    o && (t.screen = Number(o) || (n(50880).isMobile ? o.mobile : o.desktop))
                } else t = {maxSkipSize: 0};
                return t.custom = !0, t
            }
        }, 44751: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.parseBlockId = void 0, t.parseBlockId = function (e) {
                var t = {product: null, pageId: null, impId: null};
                if (!e) return t;
                var n = e.lastIndexOf("-");
                if (-1 === n) return t;
                var r = e.lastIndexOf("-", n - 1), o = e.slice(r + 1, n);
                return parseInt(o, 10) ? (t.pageId = o, t.impId = e.slice(n + 1), -1 !== r && (t.product = e.slice(0, e.indexOf("-"))), t) : t
            }
        }, 21849: (e, t, n) => {
            "use strict";
            var r = function () {
                return r = Object.assign || function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, r.apply(this, arguments)
            };
            Object.defineProperty(t, "__esModule", {value: !0}), t.prepareRtbConfig = void 0, t.prepareRtbConfig = function (e) {
                var t = (0, n(44751).parseBlockId)(e.blockId), o = r({}, e);
                if (o.prepared) return o;
                var c = void 0 === e.statId ? (0, n(28722).brakePointsStatId)() : e.statId;
                return o.onRewarded = (0, n(94532).once)((0, n(95456).isolate)(e.onRewarded)), o.onRewardedCount = (0, n(94532).once)((0, n(95456).isolate)(e.onRewardedCount)), o.onOpen = (0, n(95456).isolate)(e.onOpen), o.onClose = (0, n(95456).isolate)(e.onClose), o.onError = (0, n(95456).isolate)(e.onError), o.onRender = (0, n(95456).isolate)(e.onRender), o.onHide = (0, n(95456).isolate)(e.onHide), o.pageId = t.pageId, o.blockImpId = t.impId, o.statId = o.blockImpId, o.partnerStatId = c, o.geo = (0, n(60509).getValidGeo)(o.geo), o.disableHighlight = !0 === o.disableHighlight, o.cspNonce && "exp" === (0, n(88772).useExperimentFlag)("ENCODE_CSP_NONCE") && (o.cspNonce = encodeURIComponent(o.cspNonce)), o.prepared = !0, function (e) {
                    var t = e.allowRepeatAds;
                    t = t ? (0, n(34680).T)(t) : i(e.pageId, !1) ? {maxSkipSize: 0, custom: !0} : a ? {
                        maxSkipSize: 9,
                        custom: !0
                    } : s ? {maxSkipSize: 20, custom: !0} : u ? {
                        screen: 9,
                        custom: !0
                    } : {screen: n(50880).isMobile ? 3 : 2};
                    return e.allowRepeatAds = t, e
                }(o)
            };
            var o = (0, n(38710).getYaContext)().isAllowedRepeatAds, i = void 0 === o ? function (e, t) {
                    return t
                } : o, a = (0, n(14573).Q)(window, ["yandexTv"]), s = (0, n(14573).Q)(window, ["avito", "avitoMobile"]),
                u = (0, n(14573).Q)(window, ["yandexZen"]) || (0, n(14573).Q)(window, ["yandexWebntp"]) || (0, n(14573).Q)(window, ["yandexChromeNtp"]) || (0, n(14573).Q)(window, ["yandexMorda"])
        }, 31231: (e, t, n) => {
            "use strict";
            var r, o = (r = function (e, t) {
                return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }, r(e, t)
            }, function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function n() {
                    this.constructor = e
                }

                r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            });
            t.K = void 0;
            var i = function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }

                return o(t, e), t.prototype.toString = function () {
                    return n.lv["json"].stringify(this.config)
                }, t.prototype.getConfig = function () {
                    return this.config
                }, t
            }(n(43).LayoutConfig);
            t.K = i
        }, 94449: (e, t) => {
            "use strict";
            t.p = void 0, t.p = function (e) {
                Promise.resolve().then(e)
            }
        }, 479: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.checkForEmptyAnswer = void 0, t.checkForEmptyAnswer = function (e) {
                return function (e) {
                    return !Boolean(e.direct)
                }(e) && function (e) {
                    return !Boolean(e.rtb)
                }(e) && function (e) {
                    if (!Boolean(e.seatbid)) return !0;
                    var t = e.seatbid[0].bid;
                    return (0, n(85200).isArray)(t) && 0 === t.length
                }(e) && function (e) {
                    return !(e.fullscreen || e.distribution || e.stripe || e.popup || e.microdistribution)
                }(e)
            }
        }, 72876: (e, t, n) => {
            "use strict";
            t.t = void 0, t.t = function (e) {
                var t = function (e) {
                    if (!(0, n(41486).isString)(e.response)) return;
                    if (e.response.indexOf("PageImp data not found") > -1) return {
                        code: "BLOCK_NOT_FOUND",
                        text: 'Block "'.concat(e.impId, '" is not exists')
                    };
                    if (e.response.indexOf("out of range") > -1) return {
                        code: "PAGE_NOT_FOUND",
                        text: 'Page "'.concat(e.pageId, '" is not exists')
                    };
                    if (e.response.indexOf("disabled") > -1) return {
                        code: "PAGE_DISABLED",
                        text: 'Page "'.concat(e.pageId, '" is disabled')
                    };
                    if (e.response.indexOf("Bad partner/domain") > -1) return {
                        code: "WRONG_DOMAIN",
                        text: 'Current domain is not allowed on the page "'.concat(e.pageId, '"')
                    };
                    return
                }(e);
                if (t && "-" !== e.uniqueId) {
                    n(49874).logger.errorStrict(t.code, {text: t.text});
                    var r = (0, n(74472).getPlacement)(e.uniqueId);
                    null == r || r.callbacks.triggerError(t.code, t.text)
                }
            }
        }, 34289: (e, t) => {
            "use strict";
            t.G = void 0, t.G = function () {
                return {common: {}}
            }
        }, 25379: (e, t, n) => {
            "use strict";
            var r = function () {
                return r = Object.assign || function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, r.apply(this, arguments)
            };
            t.J = void 0;
            var o = [200];
            var i = function () {
                function e(e) {
                    var t = this;
                    this.load = function () {
                        var e, o;
                        if ((0, n(68905).oi)()) t.config.callback((0, n(34289).G)()); else {
                            if (t.url = t.config.url.clone(), t.callbackId = (0, n(67729).getRandomInt)(1e12, 1e13), (0, n(9809).logSSPEvent)("SSP_EXP_LOAD", t.config.renderData), t.url.appendParams({callback: "Ya[".concat(t.callbackId, "]")}), t.xhrStatuses && t.xhrStatuses.length && (t.url.appendParams({"X-Yandex-Retry": t.xhrStatuses.length}), t.url.appendParams({"X-Yandex-Balancer-Retry": t.xhrStatuses.length})), document && document.location) {
                                var i = new URL(document.location.toString());
                                "true" === (null === (e = null == i ? void 0 : i.searchParams) || void 0 === e ? void 0 : e.get("hermione")) && t.url.appendParams({hermione: !0})
                            }
                            var a = t.config.renderData;
                            a && "object" == typeof a && (t.url.appendParams({hitlogid: null === (o = a.direct) || void 0 === o ? void 0 : o.ads[0].bs_data.hitLogId}), a = n.lv["json"].stringify(a));
                            var s = r({"Content-Type": "application/x-www-form-urlencoded"}, t.config.headers),
                                u = t.url.getUrl();
                            u = u.replace(/^http:\/\//, "https://"), t.startTime = Date.now(), (0, n(2052).W)({
                                url: u,
                                method: a ? "post" : "get",
                                data: a || void 0,
                                retries: 0,
                                headers: s,
                                withCredentials: !t.config.renderData,
                                onSuccess: t.successHandler,
                                onError: t.errorHandler
                            });
                            var c = (0, n(38710).getYaContext)();
                            c.Rum && c.Rum.then((function (e) {
                                var t = a ? "render" : "meta";
                                e && e.isRumInited() && e.sendResTiming(t, u)
                            }))
                        }
                    }, this.successHandler = function (e) {
                        var o, i, a = t.config.renderData;
                        if (t.startTime && a) {
                            var s = Date.now(), u = (0, n(88772).useExperimentFlag)("SSP_RENDER_REQUEST_PERCENT");
                            isFinite(u) || (u = 1), (0, n(9809).logSSPErrorEvent)("SSP_RENDER_REQUEST_TIME", {
                                time: s - t.startTime,
                                bidreqid: (null === (o = null == a ? void 0 : a.rtbAuctionInfo) || void 0 === o ? void 0 : o.bidReqIdStr) || "",
                                productType: (null === (i = null == a ? void 0 : a.common) || void 0 === i ? void 0 : i.productType) || ""
                            }, u)
                        }
                        var c = e.response || e.responseText;
                        var d = (0, n(34289).G)();
                        if ((0, n(41486).isString)(c)) {
                            try {
                                d = (0, n(61989).B)(c, t.callbackId, t.config.nonce)
                            } catch (e) {
                                return t.sendError("AD_LOADER_BAD_ANSWER", (0, n(21625).encode)(c), e.message), (0, n(9809).logSSPErrorEvent)("SSP_EXP_SERVER_ANSWER_ERROR", t.config.renderData), void (0, n(12251).protect)("Bad response", (function () {
                                    t.config.callback((0, n(34289).G)())
                                }))()
                            }
                            if (d.common && d.common.canRetry) return void t.retryLoading(200);
                            if (c.length < 200) return t.sendError("AD_LOADER_TOO_SHORT_ANSWER", c), void (0, n(12251).protect)("Short response", (function () {
                                t.config.callback((0, n(34289).G)())
                            }))()
                        } else (0, n(7153).isObject)(c) && (d = r(r({}, d), c));
                        if ((0, n(68905).Nf)(d), (0, n(479).checkForEmptyAnswer)(d)) return t.sendError("AD_LOADER_NO_ADS_TO_RENDER", c), void (0, n(12251).protect)("Alt response", (function () {
                            t.config.callback((0, n(34289).G)())
                        }))();
                        t.sendSuccess(), (0, n(12251).protect)("JSONP callback", (function () {
                            t.config.callback(d)
                        }))()
                    }, this.errorHandler = function (e, r) {
                        var o = 204 === r.status ? "AD_LOADER_EMPTY_ANSWER" : "AD_LOADER_XHR_ERROR";
                        (0, n(72876).t)({
                            uniqueId: t.config.uniqueId,
                            pageId: t.config.pageId,
                            impId: t.config.impId,
                            response: r.response
                        }), t.xhrStatuses.push(r.status), t.sendError(o, r.response, e && e.message), (0, n(12251).protect)("Ajax error", (function () {
                            t.config.callback((0, n(34289).G)())
                        }))()
                    }, this.config = e, this.xhrStatuses = []
                }

                return e.prototype.retryLoading = function (e) {
                    var t = this;
                    this.xhrStatuses.push(e);
                    var r = this.xhrStatuses.length;
                    r <= o.length ? setTimeout(this.load, o[r - 1]) : (this.sendError("AD_LOADER_TOO_MANY_ATTEMPTS"), (0, n(12251).protect)("Too many attempts", (function () {
                        t.config.callback((0, n(34289).G)())
                    }))())
                }, e.prototype.sendError = function (e, t, r) {
                    var o, i, a, s, u, c;
                    n(49874).logger.errorStrict(e, {
                        text: r || e,
                        url: this.url.getUrl(),
                        pageId: this.config.pageId,
                        refresh: Boolean(this.config.isRefresh),
                        response: t
                    }), this.config.renderData && this.config.renderData.rtb && (0, n(9809).logSSPErrorEvent)("SSP_EXP_HTML_ON_ERROR", {
                        html: document.documentElement.innerHTML,
                        bidreqid: (null === (o = this.config.renderData.rtb) || void 0 === o ? void 0 : o.bidreqid) || "",
                        productType: (null === (i = this.config.renderData.common) || void 0 === i ? void 0 : i.productType) || "",
                        adIds: null === (s = null === (a = this.config.renderData) || void 0 === a ? void 0 : a.settings) || void 0 === s ? void 0 : s.bannerIds,
                        hitLogId: null === (c = null === (u = this.config.renderData) || void 0 === u ? void 0 : u.eventConfirmationData) || void 0 === c ? void 0 : c.HitLogID
                    }, 1)
                }, e.prototype.sendSuccess = function () {
                    n(49874).logger.errorStrict("AD_LOADER_SUCCESS", {
                        text: "ok",
                        url: this.url.getUrl(),
                        pageId: this.config.pageId,
                        refresh: Boolean(this.config.isRefresh)
                    }), (0, n(9809).logSSPEvent)("SSP_EXP_LOAD_SUCCESS", this.config.renderData)
                }, e
            }();
            t.J = i
        }, 68905: (e, t) => {
            "use strict";
            t.Nf = t.oi = void 0;
            var n = !1;
            t.oi = function () {
                return n
            }, t.Nf = function (e) {
                e && e.obsolete && (n = !0)
            }
        }, 61989: (e, t, n) => {
            "use strict";
            var r = function () {
                return r = Object.assign || function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, r.apply(this, arguments)
            };

            function o(e) {
                "SyntaxError" === e.error.name && e.preventDefault()
            }

            t.B = void 0, t.B = function (e, t, i) {
                return "{" === e.charAt(0) && "}" === e.slice(-1).charAt(0) ? function (e) {
                    try {
                        var t = n.lv["json"].parse(e);
                        return r(r({}, (0, n(34289).G)()), t)
                    } catch (e) {
                        var o = new Error("Invalid JSON (".concat(e.message, ")"));
                        throw o.name = "NativeJSONParse_".concat(e.name), o
                    }
                }(e) : function (e, t, i) {
                    var a = (0, n(34289).G)();
                    try {
                        return (0, n(66333).C)(window) || (0, n(17817).i)() || (0, n(7937).U)(window) ? function (e, t, i, a) {
                            var s = n(85225).noop;
                            try {
                                var u = /Ya\[\d+]\('(.+)'\)$/.exec(t), c = u && u[1] || t,
                                    d = document.createElement("script");
                                d.type = "text/javascript", d.text = "Ya[".concat(i, "] = function() { return ").concat(c, " }"), d.async = !1, a && d.setAttribute("nonce", a || "");
                                var l = (0, n(41110).on)(window, "error", o, {options: !0});
                                l && (s = l.un), (0, n(50775).getHead)(window).appendChild(d), e = r(r({}, e), Ya[i]())
                            } finally {
                                delete Ya[i], s()
                            }
                            return e
                        }(a, e, t, i) : function (e, t, o) {
                            var i = (0, n(34289).G)();
                            try {
                                Ya[o] = function (e) {
                                    delete Ya[o];
                                    var t = new Function("return " + e)();
                                    i = r(r({}, i), t)
                                };
                                var a = new Function("return " + t)();
                                return a && (delete Ya[o], i = r(r({}, i), a)), i
                            } finally {
                                delete Ya[o]
                            }
                        }(0, e, t)
                    } catch (e) {
                        delete Ya[t];
                        var s = new Error("Invalid JSONP (".concat(e.message, ")"));
                        throw s.name = "JSONPParse_".concat(e.name), s
                    }
                }(e, t, i)
            }
        }, 18886: (e, t, n) => {
            "use strict";
            t.l = void 0;
            t.l = function (e) {
                new (n(25379).J)(e).load()
            }
        }, 86188: (e, t, n) => {
            "use strict";
            t.w = void 0;
            var r, o, i = n(71674);
            t.w = function () {
                return o || (o = new Promise((function (e, t) {
                    i((function (t) {
                        var o = t.AdvManager;
                        r = new o, (0, n(28722).brakeFor)(n(28722).POINT_NAME.ADV_MANAGER_INIT), e(r)
                    }), t)
                })))["catch"]((function (e) {
                    n(49874).logger.error(e, "adv_manager_load_error")
                })), o
            }
        }, 91491: (e, t, n) => {
            "use strict";
            var r = function () {
                return r = Object.assign || function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, r.apply(this, arguments)
            };
            t.u = void 0;
            t.u = function (e, t, o, i) {
                var a = o.renderData ? void 0 : o.pageId,
                    s = {gdpr: o.gdpr, "tcf-consent": o["tcf-consent"], "gdpr-consent-flag": o["gdpr-consent-flag"]};

                function u(u) {
                    var c = r(r(r(r(r(r({}, t), void 0), s), function (e) {
                            return (0, n(41486).isString)(e) ? (0, n(28377).parseQueryString)(decodeURIComponent(e)) : e
                        }(o.extParams || "")), (0, n(3776).q)(o)), {"grab-orig-len": u.length, grab: u}),
                        d = r(r({}, o.headers), void 0);
                    i(new (n(98026).Url)({host: e, path: a, params: c}), d)
                }

                "exp" === (0, n(88772).useExperimentFlag)("PCODE_CONSENT") ? (0, n(55386).U)().then((function (e) {
                    s = r(r({}, s), e), n(1324)(2048, o.grab, u, {
                        pageId: o.pageId,
                        isDisableGrab: Boolean(o.renderData)
                    })
                })) : n(1324)(2048, o.grab, u, {pageId: o.pageId, isDisableGrab: Boolean(o.renderData)})
            }
        }, 48568: (e, t, n) => {
            "use strict";
            t.K = void 0;
            t.K = function (e) {
                var t = {
                    "target-ref": (n(73266).isAMP ? (0, n(47175).L)() : (0, n(88521).getTargetRef)()).substr(0, 512),
                    "page-ref": (0, n(88521).getPageRef)().substr(0, 512),
                    charset: "utf-8"
                };
                (0, n(10439).assignUaasRequestParams)(t, {
                    disableSsr: (0, n(65661).o)(e.layoutConfig),
                    useSsr: n(73266).isAMP || e.useSsr
                });
                var r = (0, n(67028).getCookie)(document, "_ym_uid");
                r && (t.duid = (0, n(21625).encode)(r));
                var o = (0, n(79358).i)();
                return o && (t.shyid = o), e.experimentId && (t["experiment-id"] = String(e.experimentId)), e.blockImpId && (t["imp-id"] = e.blockImpId), e.lang && (t.lang = e.lang), e.refresh && (t.refresh = "1"), e.geo && (t["partner-geo-lat"] = e.geo.lat, t["partner-geo-long"] = e.geo["long"]), e.partnerStatId && (t["partner-stat-id"] = String(e.partnerStatId)), e.disableHighlight || (t["enable-flat-highlight"] = "1"), e.aimBanner && (t["aim-banner-id"] = e.aimBanner), e.aimDesign && (t["aim-design-id"] = e.aimDesign), e.aimSubDesign && (t["aim-subdesign-id"] = e.aimSubDesign), e.aimDesignName && (t["aim-design-name"] = e.aimDesignName), t["comboblock-unencoded-vast"] = "1", e.testtag && (t["test-tag"] = e.testtag), e.siteTheme && (0, n(41486).isString)(e.siteTheme) && (t["site-theme"] = e.siteTheme), e.isNewDesktopMorda && (t["is-new-desktop-morda"] = String(e.isNewDesktopMorda)), e.isNewWebNtp && (t["is-new-web-ntp"] = String(e.isNewWebNtp)), t["ad-session-id"] = (0, n(49131).getSessionId)(), t["target-id"] = String(-257 & (0, n(67729).getRandomInt)(1, 1e8)), t["tga-with-creatives"] = "1", n(42288).iR && (t["keep-csr-data"] = "1"), t["top-ancestor"] = n(22027).TOP_ANCESTOR, t["top-ancestor-undetermined"] = n(22027).IS_TOP_ANCESTOR_TRUSTED ? "0" : "1", t
            }
        }, 65661: (e, t, n) => {
            "use strict";
            t.o = void 0;
            t.o = function (e, t) {
                var r = {};
                try {
                    r = n.lv["json"].parse((null == e ? void 0 : e.toString()) || "{}")
                } catch (e) {
                }
                return (0, n(8595).Y)(r, t)
            }
        }, 3776: (e, t) => {
            "use strict";
            t.q = void 0;
            var n = 0;
            t.q = function (e) {
                if (e.layoutConfig) {
                    e.layoutConfig.set("req_no", n++), window.layoutConfig = e.layoutConfig;
                    var t = e.layoutConfig.toString();
                    if (t) return {"layout-config": t}
                }
                return {}
            }
        }, 79358: (e, t, n) => {
            "use strict";
            t.i = void 0, t.i = function (e) {
                var t;
                void 0 === e && (e = window);
                var r = null === (t = e.yandex) || void 0 === t ? void 0 : t.getSiteUid;
                if ((0, n(26413).isFunction)(r)) return String(r())
            }
        }, 67989: (e, t, n) => {
            "use strict";
            t.u = void 0, t.u = function (e, t) {
                var r = (0, n(48568).K)(e);
                !function (e, t) {
                    e["pcode-version"] = (0, n(30107).getCodeVersion)().toString(), e.pcodever = (0, n(30107).getCodeVersion)().toString(), e["flash-ver"] = "0";
                    var r = (0, n(4696).u)(t.availableWidth);
                    r && (e["available-width"] = r);
                    var o = (0, n(4696).u)(t.availableHeight);
                    o && (e["available-height"] = o);
                    t.skipToken && (e["skip-token"] = t.skipToken);
                    t.statId && (e["stat-id"] = t.statId);
                    t.cacheId && !t.refresh && (e["cache-id"] = t.cacheId);
                    "D" !== t.product && "Direct" !== t.product || t.blockImpId && (e["partner-stat-id"] = t.blockImpId)
                }(r, e);
                var o = function (e) {
                    var r, o, i;
                    (0, n(40817).Nb)(null === (r = null == e ? void 0 : e.common) || void 0 === r ? void 0 : r.isYandex, Boolean(null === (o = null == e ? void 0 : e.common) || void 0 === o ? void 0 : o.sticky)), (0, n(66445).Q)((null === (i = null == e ? void 0 : e.common) || void 0 === i ? void 0 : i.pcodever) || ""), t(e)
                }, i = e.renderData ? n(49573).URLS.render : n(49573).URLS.rtb;
                (0, n(91491).u)(i, r, e, (function (t, r) {
                    t.appendParams({uniformat: !0}), (0, n(18886).l)({
                        url: t,
                        headers: r,
                        uniqueId: e.uniqueId,
                        impId: e.blockImpId,
                        pageId: e.pageId,
                        isRefresh: e.refresh,
                        callback: o,
                        nonce: e.nonce,
                        renderData: e.renderData
                    })
                }))
            }
        }, 66445: (e, t, n) => {
            "use strict";
            t.Q = void 0, t.Q = function (e) {
                "" !== e && (0, n(40817).nH)("Ad version: ".concat(e), "ad-v-".concat(e))
            }
        }, 4696: (e, t) => {
            "use strict";
            t.u = void 0, t.u = function (e) {
                if (void 0 === e && (e = 0), e >= 1 && e <= 1e4) return Math.floor(e).toString()
            }
        }, 94390: (e, t, n) => {
            "use strict";
            t.I = void 0;
            var r = (0, n(60304).M)("__pcodeStorage__"), o = function () {
                function e() {
                    var e = "masterStorage";
                    this.queue = r.getItem(e), this.queue || (this.queue = new (n(39658).c), r.setItem(e, this.queue))
                }

                return e.prototype.add = function (e) {
                    this.queue.add(e)
                }, e.prototype.size = function () {
                    return this.queue.size()
                }, e
            }();
            t.I = o
        }, 2540: (e, t, n) => {
            "use strict";
            t.w = void 0;
            var r, o = n(73266).isAMP ? new (n(94390).I) : new (n(34790).q);
            t.w = function (e) {
                return "pcode" === e.project || e.sequentialLoading && !n(73266).isAMP ? o : (r || (r = new (n(34790).q)(20)), r)
            }
        }, 60091: (e, t, n) => {
            "use strict";
            var r = function () {
                return r = Object.assign || function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, r.apply(this, arguments)
            };
            t.b = void 0;
            var o = function () {
                function e() {
                    this.dataRequestTime = void 0
                }

                return e.prototype.setConfig = function (e) {
                    if (this.config = (0, n(21849).prepareRtbConfig)(e), this.reloadTimeout = this.reloadTimeout || n(49573).DEFAULT_RELOAD_TIMEOUT, n(49874).logger.configure({
                        labels: {pageId: (0, n(36087).getServiceName)()},
                        data: {blockId: e.blockId, pageId: e.pageId}
                    }), this.config.data) return this.config.data.common && this.config.data.common.reloadTimeout && (this.reloadTimeout = Number(this.config.data.common.reloadTimeout)), (0, n(64809).saveBundleType)(e.data, e.bundle), void (this.data = this.config.data)
                }, e.prototype.loadData = function (t) {
                    var o, s, u, c = this, d = (0, n(74472).getPlacement)(this.config.uniqueId);
                    if (this.config.data) {
                        (null === (o = this.config) || void 0 === o ? void 0 : o.layoutConfig) && (null == d || d.setLayoutConfig(this.config.layoutConfig));
                        var l = Number(null === (u = null === (s = this.config.data) || void 0 === s ? void 0 : s.direct) || void 0 === u ? void 0 : u.render_direct_sleep);
                        return l && isFinite(l) ? (this.config.containsData = !1, void setTimeout((function () {
                            c.config.containsData = !0, t(c.config)
                        }), l)) : (this.config.containsData = !0, void t(this.config))
                    }
                    if (this.config.containsData = !1, this.canReloadData() || this.config.refresh) if (this.setDataRequestTime(), d) {
                        var f = null == d ? void 0 : d.renderTo, p = (0, n(64809).checkBundleIsSSP)(),
                            _ = null == d ? void 0 : d.renderToDomNode,
                            v = (0, n(85384).isCustomBannerTypeAndExp)(this.config.type) ? (0, n(22230).go)({
                                containerId: f,
                                containerNode: _
                            }) : (0, n(22230).Op)(f), h = v.width, E = v.height, g = {
                                product: d.blockId.product,
                                uniqueId: this.config.uniqueId,
                                testtag: i(d),
                                pageId: encodeURIComponent(this.config.pageId),
                                blockImpId: encodeURIComponent(this.config.blockImpId || ""),
                                grab: this.config.grab,
                                extParams: this.config.extParams,
                                availableWidth: h,
                                availableHeight: E,
                                lang: this.config.lang,
                                geo: this.config.geo,
                                disableHighlight: this.config.disableHighlight,
                                aimBanner: n(30878).f2.next(),
                                aimDesign: n(30878).pv.next(),
                                aimSubDesign: n(30878).Ng.next(),
                                aimDesignName: n(30878).cF.next(),
                                partnerStatId: this.config.partnerStatId,
                                refresh: Boolean(this.config.refresh),
                                nonce: this.config.cspNonce,
                                cacheId: this.config.cacheId,
                                useSsr: Boolean(this.config.useSsr || this.config.renderServerSide),
                                siteTheme: encodeURIComponent(this.config.siteTheme || ""),
                                headers: (0, n(48674).l)(this.config.headers),
                                renderData: this.config.renderData,
                                isNewDesktopMorda: Boolean(this.config.isNewDesktopMorda),
                                isNewWebNtp: Boolean(this.config.isNewWebNtp),
                                gdpr: this.config.gdpr,
                                "tcf-consent": this.config["tcf-consent"],
                                "gdpr-consent-flag": this.config["gdpr-consent-flag"]
                            }, m = function (e, o) {
                                (0, n(85914).setMark)(c.config.uniqueId, n(85914).RenderMarks.ReadyToRequest);
                                var i = d.getRenderToElement();
                                if (!i) return a(f, d), void e();
                                var s = c.getSkipToken(d);
                                s && (g.skipToken = s);
                                var u = o || new (n(31231).K)(i), l = (0, n(91411).getAdUsageStorage)(c.config);
                                u.set("ad_no", l.getCapturedCount()), u.set("darkTheme", Boolean(c.config.darkTheme)), null == d || d.setLayoutConfig(u), g.layoutConfig = u, n(42288).h2 && (0, n(59936).c)((function (e) {
                                    return (new e).logBlockSize(c.config.blockId, c.config.renderTo, g.layoutConfig)
                                })), (0, n(67989).u)(r({}, g), (function (r) {
                                    return c.parseServerDataFunction(r, (function (o) {
                                        var i;
                                        if (p && "exp" === (0, n(88772).useExperimentFlag)("SSP_LAYOUT_CONFIG_LOG")) {
                                            var a = {layoutConfig: u.getConfig()}, s = c.config.blockImpId,
                                                d = s && (null === (i = null == r ? void 0 : r.settings) || void 0 === i ? void 0 : i[s]);
                                            d && (a.sizes = {
                                                width: d.width,
                                                height: d.height
                                            }), (0, n(9809).logSSPEvent)("SSP_PARSE_SERVER_DATA", c.config.renderData, a)
                                        }
                                        t(o, e)
                                    }))
                                }))
                            }, O = d.getRenderToElement();
                        if (O) {
                            if (p && "exp" === (0, n(88772).useExperimentFlag)("DISABLE_SMART_QUEUE_IN_SSP")) {
                                var A = new (n(31231).K)(O);
                                m(n(85225).noop, A)
                            } else if (e.queue instanceof n(34790).q) {
                                var b = !p && (0, n(38680).L)() && (0, n(88772).useExperimentFlag)("LAZY_LOAD_PCODE");
                                !1 !== this.config.lazyLoad && b && (this.config = r(r({}, this.config), {lazyLoad: r(r({}, b), this.config.lazyLoad)}));
                                var S = e.queue;
                                "floorAd" === this.config.type ? (0, n(53684).waitForFloorAdTimeout)({
                                    isRefresh: Boolean(this.config.refresh),
                                    callback: function () {
                                        return S.add(m)
                                    }
                                }) : "fullscreen" === this.config.type ? S.add(m) : this.config.lazyLoad ? ((0, n(85914).setMark)(this.config.uniqueId, n(85914).RenderMarks.StartLazyLoadObserver), S.addByLazyLoad(O, m, r(r({}, this.config.lazyLoad), {placement: d}))) : S.addByDimensionObserver(O, m, {
                                    onStartDimensionObserver: this.config.onRender,
                                    placement: d
                                })
                            } else e.queue.add(m);
                            var R = e.queue.size();
                            null == d || d.setAdditional({posInQueue: R})
                        } else a(f, d)
                    } else n(49874).logger.error("DATA_LOADER_NO_PLACEMENT"); else this.data && t(r(r({}, this.config), {data: this.data}))
                }, e.prototype.parseServerDataFunction = function (e, t) {
                    e.common && e.common.reloadTimeout && (this.reloadTimeout = Number(e.common.reloadTimeout)), (0, n(64809).saveBundleType)(e, this.config.bundle), this.data = e, t(r(r({}, this.config), {data: this.data}))
                }, e.prototype.setDataRequestTime = function () {
                    this.dataRequestTime = Number(new Date)
                }, e.prototype.canReloadData = function () {
                    return !this.dataRequestTime || Number(new Date) - this.dataRequestTime > 1e3 * this.reloadTimeout
                }, e.prototype.getSkipToken = function (e) {
                    var t, n, r, o;
                    if (!(null == e ? void 0 : e.skipTokenSettings.disable)) {
                        var i = null === (o = null === (r = null === (n = null === (t = window.Ya) || void 0 === t ? void 0 : t.Context) || void 0 === n ? void 0 : n.AdvManager) || void 0 === r ? void 0 : r.getSkipToken) || void 0 === o ? void 0 : o.call(r, this.config);
                        return i || void 0
                    }
                }, e.queue = (0, n(2540).w)({project: "pcode"}), e
            }();

            function i(e) {
                var t = e.blockId.product;
                return ("D" === t ? new (n(62236).T) : "N" === t ? new (n(96054).Testtag) : new (n(98496).a)).toString()
            }

            function a(e, t) {
                var r = 'Container with id "'.concat(e, '" is not found (load queue)');
                null == t || t.callbacks.triggerError("CONTAINER_NOT_FOUND", r), n(49874).logger.errorStrict("CONTAINER_NOT_FOUND", {text: r})
            }

            t.b = o
        }, 8960: (e, t, n) => {
            "use strict";
            t.C = void 0;
            var r = 0, o = function () {
                return 1
            }, i = function () {
                function e(e) {
                    void 0 === e && (e = 1), this.queue = [], this.runningTasks = [], this.threads = e
                }

                return e.prototype.add = function (e, t) {
                    var n = this;
                    void 0 === t && (t = {});
                    var i = r++, a = t.timeout, s = t.priority, u = void 0 === s ? o : s, c = t.async,
                        d = void 0 !== c && c, l = {id: i, taskFn: e, timeout: a, priority: u};
                    return this.queue.push(l), d ? setTimeout((function () {
                        return n.next()
                    }), 0) : this.next(), function () {
                        n.remove(i)
                    }
                }, e.prototype.remove = function (e) {
                    this.queue = this.queue.filter((function (t) {
                        return t.id !== e
                    })), this.doneTask(e)
                }, e.prototype.size = function () {
                    return this.queue.length
                }, e.prototype.countRunningTasks = function () {
                    return this.runningTasks.length
                }, e.prototype.next = function () {
                    if (this.queue.length > 0 && this.runningTasks.length < this.threads) {
                        var e = this.getNextTask();
                        e && this.runTask(e)
                    }
                }, e.prototype.getNextTask = function () {
                    return this.queue.sort((function (e, t) {
                        return t.priority() - e.priority()
                    })), this.queue.shift()
                }, e.prototype.runTask = function (e) {
                    var t = this, r = e.taskFn, o = e.id, i = e.timeout, a = void 0 === i ? 5e3 : i, s = null,
                        u = function () {
                            null !== s && clearTimeout(s), t.doneTask(o)
                        };
                    this.runningTasks.push(o), s = window.setTimeout(u, a), (0, n(12251).protect)("SimpleQueue", (function () {
                        return r(u)
                    }), void 0, u)()
                }, e.prototype.doneTask = function (e) {
                    var t = this.runningTasks.indexOf(e);
                    t > -1 && (this.runningTasks.splice(t, 1), this.next())
                }, e
            }();
            t.C = i
        }, 38680: (e, t, n) => {
            "use strict";
            t.L = void 0;
            var r = (0, n(88772).useExperimentFlag)("SMART_QUEUE_EXP_BLACK_LIST"),
                o = (0, n(88772).useExperimentFlag)("SMART_QUEUE_EXP_WHITE_LIST");
            t.L = (0, n(94532).once)((function () {
                if ((0, n(13058).isInIframe)(window)) return !1;
                if (null == r ? void 0 : r.length) {
                    for (var e = (0, n(97332).l)(window.location), t = 0; t < r.length; t++) if (e.indexOf(r[t]) > -1) return !1
                } else if (null == o ? void 0 : o.length) {
                    for (e = (0, n(97332).l)(window.location), t = 0; t < o.length; t++) if (e.indexOf(o[t]) > -1) return !0;
                    return !1
                }
                return !0
            }))
        }, 8842: (e, t, n) => {
            "use strict";
            t.C = void 0;
            var r = 0;
            t.C = function (e, t, o) {
                void 0 === o && (o = {});
                var i, a = "do_id_".concat(r++), s = o.onTimeout, u = o.timeout, c = void 0 === u ? 1e3 : u,
                    d = function () {
                        i && clearTimeout(i), (0, n(13215).x9)(a)
                    };
                return s && (i = window.setTimeout((function () {
                    return s()
                }), c)), (0, n(13215).M8)(a, e, (function () {
                    d(), t()
                })), d
            }
        }, 60794: (e, t, n) => {
            "use strict";
            t.n = void 0, t.n = function (e, t) {
                void 0 === t && (t = 0);
                var r = e.getBoundingClientRect(), o = (0, n(52544).getWindowSize)(), i = o.height * t, a = -i,
                    s = o.height + i;
                return r.bottom < a ? r.bottom - a : r.top > s ? -(r.top - s) : s - r.top
            }
        }, 34790: (e, t, n) => {
            "use strict";
            var r = function () {
                return r = Object.assign || function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, r.apply(this, arguments)
            };
            t.q = void 0;
            var o = function () {
                function e(e) {
                    void 0 === e && (e = 1), this.queue = new (n(8960).C)(e)
                }

                return e.prototype.add = function (e, t) {
                    return this.queue.add(e, {priority: t, async: !1})
                }, e.prototype.addByLazyLoad = function (e, t, o) {
                    var a = this, s = new (n(50773).M), u = function () {
                        return (0, n(60794).n)(e, 0)
                    }, c = function () {
                        var e = a.add((function (e) {
                            t(e)
                        }), u);
                        s.addOne(e)
                    }, d = this.add((function (a) {
                        var u = (0, n(60794).n)(e, 0), d = new (n(31231).K)(e);
                        if ((0, n(82308).H)(e, d, null == o ? void 0 : o.placement), i(d) && u > 0) t(a, d); else {
                            var l = (0, n(81465).p)(e, c, r({fetchMargin: 0, mobileScaling: 1}, o));
                            s.addOne(l), a()
                        }
                    }), u);
                    return s.addOne(d), function () {
                        return s.dispatch(void 0)
                    }
                }, e.prototype.addByDimensionObserver = function (e, t, r) {
                    var o = this, a = new (n(50773).M), s = function () {
                        return (0, n(60794).n)(e, 0)
                    }, u = function () {
                        var e = o.add((function (e) {
                            t(e)
                        }), s);
                        a.addOne(e)
                    }, c = this.add((function (o) {
                        var s = new (n(31231).K)(e);
                        if ((0, n(82308).H)(e, s, null == r ? void 0 : r.placement), i(s)) t(o, s); else {
                            r && (0, n(26413).isFunction)(r.onStartDimensionObserver) && r.onStartDimensionObserver({product: "unknown"});
                            var c = (0, n(8842).C)(e, u, {
                                onTimeout: null == r ? void 0 : r.onTimeout,
                                timeout: null == r ? void 0 : r.timeout
                            });
                            a.addOne(c), o()
                        }
                    }), s);
                    return a.addOne(c), function () {
                        return a.dispatch(void 0)
                    }
                }, e.prototype.size = function () {
                    return this.queue.size()
                }, e
            }();

            function i(e) {
                var t = e.get("w"), n = e.get("h");
                return t > 0 || n > 0
            }

            t.q = o
        }, 82308: (e, t, n) => {
            "use strict";
            t.H = void 0;
            var r = (0, n(14573).Q)(window, ["yandexVideo"]);
            t.H = function (e, t, n) {
                if (!r) {
                    var o = t.get("w"), i = t.get("h"), a = e.getAttribute("id");
                    if (0 === o && 0 === i) {
                        var s = "CONTAINER_IS_HIDDEN", u = 'Container with id "'.concat(a, '" is hidden');
                        return n || console.info(s, u), void (null == n || n.callbacks.triggerWarning(s, u))
                    }
                    if (o > 0 && o < 320 && i > 0 && i < 50) {
                        u = "Too small container. Width ".concat(o, "px. Height ").concat(i, "px.");
                        null == n || n.callbacks.triggerError("TOO_SMALL_CONTAINER", u)
                    } else if (o < 160) {
                        u = "Too narrow container. Width ".concat(o, "px.");
                        null == n || n.callbacks.triggerError("TOO_SMALL_CONTAINER", u)
                    }
                }
            }
        }, 22230: (e, t, n) => {
            "use strict";
            t.go = t.Op = void 0, t.Op = (0, n(70008).HP)((function (e) {
                if (n(73266).isAMP) return (0, n(52544).getWindowSize)();
                var t = (0, n(59020).R)("#" + e);
                return t ? (0, n(20697).getElementInnerSize)(t) : {width: 0, height: 0}
            })), t.go = (0, n(70008).HP)((function (e) {
                var t = e.containerId, r = e.containerNode;
                if (n(73266).isAMP) return (0, n(52544).getWindowSize)();
                var o = (0, n(59020).R)("#" + t) || r;
                return o ? (0, n(20697).getElementInnerSize)(o) : {width: 0, height: 0}
            }))
        }, 57112: (e, t, n) => {
            "use strict";
            t.c = void 0;
            var r = !1;
            t.c = function (e) {
                var t;
                if (!r) {
                    r = !0;
                    var o = (0, n(52544).getWindowSize)(), i = o.width, a = o.height;
                    (0, n(28274).traceLog)({
                        type: e.type,
                        sspId: String(e.sspId),
                        def: e.def,
                        width: i,
                        height: a,
                        inIframe: window.top !== window,
                        hasMraid: (0, n(44834).isAvailable)(),
                        version: (null === (t = (0, n(44834).getMraid)()) || void 0 === t ? void 0 : t.getVersion()) || "",
                        href: window.location.href
                    }, "SSP_MRAID_LOG", 2)
                }
            }
        }, 13215: (e, t, n) => {
            "use strict";
            t.x9 = t.M8 = void 0;
            var r = {};
            t.M8 = function (e, t, o) {
                var i = new (n(36976).SizeSensor)(t);
                i.onResize.add((function (e) {
                    (e.width > 0 || e.height > 0) && o()
                })), r[e] = {sensor: i}
            }, t.x9 = function (e) {
                r[e] && (r[e].sensor.destroy(), delete r[e])
            }
        }, 60509: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.getValidNumber = t.getValidGeo = void 0;
            t.getValidGeo = function (e) {
                if (e) {
                    var t = {}, n = parseFloat(e.lat), r = parseFloat(e["long"]);
                    return isNaN(n) || (t.lat = n.toFixed(6)), isNaN(r) || (t["long"] = r.toFixed(6)), t
                }
            }, t.getValidNumber = function (e) {
                var t = parseInt(e, 10);
                if (!(isNaN(t) || !isFinite(t))) return t
            }
        }, 38710: (e, t, n) => {
            "use strict";

            function r() {
                return window.Ya || (window.Ya = (0, t.initYa)())
            }

            function o() {
                var e = r();
                return e.Context || (e.Context = (0, t.initYaContext)())
            }

            Object.defineProperty(t, "__esModule", {value: !0}), t.initYa = t.initYaDirect = t.initYaContext = t.getYaContext = t.getYa = t.getGlobalVariable = t.setGlobalVariable = void 0, t.setGlobalVariable = function (e, t) {
                o()[e] = t
            }, t.getGlobalVariable = function (e) {
                return o()[e]
            }, t.getYa = r, t.getYaContext = o;

            function i() {
                return {}
            }

            t.initYaContext = function () {
                return {
                    isAllowedRepeatAds: n(28458).T,
                    _load_callbacks: [],
                    _callbacks: [],
                    _asyncIdCounter: 0,
                    LOG_DIRECT: (0, n(14415).isPercent)(1),
                    _activeTestIds: []
                }
            }, t.initYaDirect = i;
            t.initYa = function () {
                return {Direct: {}, Context: (0, t.initYaContext)()}
            }
        }, 7654: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.Deferred = void 0;
            var n = function () {
                var e = this;
                this.promise = new Promise((function (t, n) {
                    e.resolve = t, e.reject = n
                }))
            };
            t.Deferred = n
        }, 92738: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.addDelimiter = void 0, t.addDelimiter = function (e, t, n) {
                return t && 0 !== e.indexOf(t) && (e = t + e), n && e.slice(-n.length) !== n && (e += n), e
            }
        }, 98026: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.Url = void 0;
            var r = function () {
                function e(e) {
                    this.host = e.host || "", this.path = e.path || "", this.params = "", e.params && this.appendParams(e.params)
                }

                return e.prototype.clone = function () {
                    return new e({host: this.host, path: this.path, params: this.params})
                }, e.prototype.getCurrentLength = function () {
                    return this.getRawUrl().length
                }, e.prototype.appendParams = function (e) {
                    return (0, n(7153).isObject)(e) && (0, n(36484).x)(e) || ("" !== this.params && (this.params = (0, n(92738).addDelimiter)(this.params, "", "&")), (0, n(41486).isString)(e) ? this.params += (0, n(44552).removeDelimiter)((0, n(44552).removeDelimiter)(e, "?", ""), "&", "") : (0, n(7153).isObject)(e) && (this.params += (0, n(49221).toQueryParams)(e))), this
                }, e.prototype.getUrl = function () {
                    return this.getRawUrl()
                }, e.prototype.getRawUrl = function () {
                    var e = this.host;
                    if (this.path && (e = (0, n(92738).addDelimiter)(e, "", "/"), e += (0, n(44552).removeDelimiter)(String(this.path), "/")), "" !== this.params) {
                        var t = -1 === e.indexOf("?") ? "?" : "&";
                        e += (0, n(92738).addDelimiter)(this.params, t, "")
                    }
                    return e
                }, e
            }();
            t.Url = r
        }, 44552: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.removeDelimiter = void 0, t.removeDelimiter = function (e, t, n) {
                return t && 0 === e.indexOf(t) && (e = e.replace(t, "")), n && e.slice(-n.length) === n && (e = e.slice(0, -n.length)), e
            }
        }, 49221: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.toQueryParams = void 0, t.toQueryParams = function (e) {
                var t = [];
                for (var n in e) e.hasOwnProperty(n) && "" !== e[n] && void 0 !== e[n] && null !== e[n] && t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
                return t.join("&")
            }
        }, 84304: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.canShowFloorAd = void 0, t.canShowFloorAd = function (e) {
                var t = e.window, r = e.platform;
                return !!(0, n(14573).Q)(t, ["pi", "piHermione", "yandexDirect"]) || !!(0, n(63607).isMobile)() && (!r || "touch" === r)
            }
        }, 74351: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.canShowFullscreen = void 0, t.canShowFullscreen = function (e) {
                var t = e.platform, r = e.window;
                return !(!(0, n(64809).checkBundleIsSSP)() && !(0, n(14573).Q)(r, ["pi", "piHermione"])) || ((0, n(63607).isMobile)() ? !t || "touch" === t : "desktop" === t)
            }
        }, 81721: (e, t) => {
            "use strict";
            t.V = void 0, t.V = function (e) {
                for (var t = [/(^|.*\.)ya\.[a-z]+$/gi, /(^|.*\.)ya\.com?\.\w{2,3}$/gi, /(^|.*\.)yandex\.[a-z]+$/gi, /(^|.*\.)yandex\.com?\.\w{2,3}$/gi, /(^|.*\.)turbopages.org$/gi, /(^|.*\.)edadeal\.[a-z]+$/gi, /(^|.*\.)a[uv]to\.[a-z]+$/gi, /(^|.*\.)dzen\.ru$/gi], n = 0; n < t.length; n++) if (t[n].test(e)) return !0;
                return !1
            }
        }, 68954: (e, t) => {
            "use strict";
            t.PY = t.vq = void 0, t.vq = ["159294", "419036"], t.PY = function (e) {
                return !!e && t.vq.indexOf(e) >= 0
            }
        }, 84162: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.canUseGrab = void 0, t.canUseGrab = function (e, t) {
                return !(0, n(14573).Q)(e, ["mailRuAll"]) && !(0, n(68954).PY)(t)
            }
        }, 39699: (e, t) => {
            "use strict";
            t.N = void 0;
            t.N = function (e, t) {
                void 0 === t && (t = {});
                var n = t.allowLowerLevelDomains, r = void 0 === n || n, o = t.eol, i = void 0 !== o && o,
                    a = ["(?:\\/|%2F|^)"];
                return r && a.push("(?:[\\w-_\\.]+?\\.)?"), a.push("(?:".concat(e, ")")), a.push("(?:\\/|%2F|$)"), i && a.push("$"), new RegExp(a.join(""), "i")
            }
        }, 53002: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.info = t.net = t.com = t.rf = t.ru = t.piHermione = t.pi = t.avitoMobile = t.avito = t.gismeteo = t.wifi = t.authwifi = t.mailRuAll = t.mailRu = t.wowSale = t.cyberSport = t.ok = t.vk = t.yandexDirect = t.yandexMorda = t.yandexChromeNtp = t.yandexWebntp = t.yandexRasp = t.yandexMail = t.yandexZen = t.yandexImages = t.yandexVideo = t.yandexMaps = t.yandexPogoda = t.yandexNews = t.yandexTv = void 0, t.yandexTv = (0, n(39699).N)("(?:tv\\.yandex(\\.\\w+))"), t.yandexNews = (0, n(39699).N)("(?:yandex(\\.\\w+)\\/news)"), t.yandexPogoda = (0, n(39699).N)("(?:yandex(\\.\\w+)\\/pogoda)"), t.yandexMaps = (0, n(39699).N)("(?:yandex(\\.\\w+)\\/maps)"), t.yandexVideo = (0, n(39699).N)("(?:yandex(\\.\\w+)\\/video)"), t.yandexImages = (0, n(39699).N)("(?:yandex(\\.\\w+)\\/images)"), t.yandexZen = (0, n(39699).N)("(?:zen\\.yandex(\\.\\w+))"), t.yandexMail = (0, n(39699).N)("(?:mail\\.yandex(\\.\\w+))"), t.yandexRasp = (0, n(39699).N)("(?:rasp\\.yandex(\\.\\w+))"), t.yandexWebntp = (0, n(39699).N)("(?:webntp\\.yandex(\\.\\w))"), t.yandexChromeNtp = (0, n(39699).N)("(?:yandex(\\.\\w+)\\/chrome\\/newtab)"), t.yandexMorda = (0, n(39699).N)("(?:yandex(\\.\\w+))", {
                allowLowerLevelDomains: !1,
                eol: !0
            }), t.yandexDirect = (0, n(39699).N)("(?:direct\\.yandex(\\.\\w+))"), t.vk = (0, n(39699).N)("vk\\.com"), t.ok = (0, n(39699).N)("ok\\.ru");
            var r = (0, n(39699).N)("sportmail\\.ru");
            t.cyberSport = (0, n(39699).N)("cybersport\\.(ru|com)"), t.wowSale = (0, n(39699).N)("wowsale\\.ru"), t.mailRu = (0, n(39699).N)("(?:(?:devmail\\.ru)|(?:mail\\.ru))"), t.mailRuAll = [t.vk, t.ok, r, t.mailRu, t.wowSale, t.cyberSport], t.authwifi = (0, n(39699).N)("(?:\\w+-)?auth\\.wi-fi\\.ru");
            var o = (0, n(39699).N)("wi-fi\\.ru");
            t.wifi = [].concat(t.authwifi, o), t.gismeteo = (0, n(39699).N)("gismeteo\\.ru"), t.avito = (0, n(39699).N)("^(([^m]|\\w\\w+)(\\.avito)|avito)\\.(dev|ru)"), t.avitoMobile = (0, n(39699).N)("m\\.avito\\.(dev|ru)"), t.pi = (0, n(39699).N)("(dev-)?partner(s|2)?(-(creator01(e|f)|preprod|test|local))?(\\.crowdtest)?\\.yandex\\.(com(\\.tr)?|ru|by|kz|ua)"), t.piHermione = (0, n(39699).N)("\\w+\\.ldev\\.yandex\\.ru"), t.ru = (0, n(39699).N)(".*\\.ru"), t.rf = (0, n(39699).N)(".*\\.xn--p1ai"), t.com = (0, n(39699).N)(".*\\.com"), t.net = (0, n(39699).N)(".*\\.net"), t.info = (0, n(39699).N)(".*\\.info")
        }, 14573: (e, t, n) => {
            "use strict";
            var r = Object.create ? function (e, t, n, r) {
                void 0 === r && (r = n);
                var o = Object.getOwnPropertyDescriptor(t, n);
                o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                    enumerable: !0,
                    get: function () {
                        return t[n]
                    }
                }), Object.defineProperty(e, r, o)
            } : function (e, t, n, r) {
                void 0 === r && (r = n), e[r] = t[n]
            }, o = Object.create ? function (e, t) {
                Object.defineProperty(e, "default", {enumerable: !0, value: t})
            } : function (e, t) {
                e["default"] = t
            }, i = function (e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e) for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n);
                return o(t, e), t
            };
            t.Q = void 0;
            var a = i(n(53002));
            t.Q = function (e, t) {
                void 0 === e && (e = window);
                var r = (0, n(88521).getHostWithPath)(e);
                if ((0, n(29935).isTurboPage)(e) || n(73266).isAMP) return !1;
                for (var o = [], i = 0; i < t.length; i++) {
                    var s = t[i], u = a[s];
                    o = o.concat(u)
                }
                for (var c = 0; c < o.length; c++) if (o[c].test(r)) return !0;
                return !1
            }
        }, 55386: (e, t) => {
            "use strict";
            t.U = void 0;
            var n = window;
            t.U = function () {
                var e = {};
                return new Promise((function (t) {
                    "function" == typeof n.__tcfapi ? (n.__tcfapi("getTCData", 2, (function (n, r) {
                        r && (e.gdpr = n.gdprApplies ? "1" : "0", e["tcf-consent"] = n.tcString), t(e)
                    })), setTimeout((function () {
                        t(e)
                    }), 3e3)) : t(e)
                }))
            }
        }, 81423: (e, t) => {
            "use strict";
            t.e = void 0, t.e = ["&#8381;"]
        }, 59696: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.isCurrencyTitle = void 0, t.isCurrencyTitle = function (e) {
                return Boolean(e && (0, n(22886).indexOf)(n(81423).e, e) > -1)
            }
        }, 22432: (e, t) => {
            "use strict";
            t.F = void 0, t.F = function (e, t) {
                return t.getElementsByClassName(e)
            }
        }, 5989: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.getElementById = void 0;
            t.getElementById = function (e, t) {
                if (t) try {
                    var r = n(e, t);
                    if (r) return r
                } catch (e) {
                }
                return document.getElementById(e)
            };
            var n = function (e, t) {
                var n = "#".concat(e);
                return t.querySelector(n)
            }
        }, 59020: (e, t, n) => {
            "use strict";
            t.R = void 0;
            t.R = function (e, t) {
                if (void 0 === t && (t = document), !(0, n(41486).isString)(e)) return e;
                var r = e.slice(0, 1), o = e.slice(1);
                switch (r) {
                    case"#":
                        return (0, n(5989).getElementById)(o);
                    case".":
                        return (0, n(66779).listToArray)((0, n(22432).F)(o, t));
                    default:
                        return (0, n(66779).listToArray)((t || document).getElementsByTagName(e))
                }
            }
        }, 58233: (e, t) => {
            "use strict";
            var n = function () {
                return n = Object.assign || function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, n.apply(this, arguments)
            };
            t.sH = t.FH = void 0;
            var r = {INVALID_BLOCK_ID: 1, UNKNOWN_BLOCK_TYPE: 1, CONTAINER_NOT_FOUND: 1};
            t.FH = {BLOCK_NOT_FOUND: 1, PAGE_NOT_FOUND: 100, PAGE_DISABLED: 1, WRONG_DOMAIN: 1};
            var o = {
                NO_FOUND_ROOT_CONTAINER: 1,
                INIT_WITHOUT_DATASOURCE: 1,
                SET_STATS_ROOT_FIELDS_ERROR: 1,
                VIDEO_IN_COMBO_CLIENT_CODE_INIT_ERROR: 1,
                VIDEO_IN_COMBO_FLOOR_AD_ERROR: 1
            };
            t.sH = n(n(n(n(n(n(n(n(n(n(n({}, {
                AD_LOADER_SUCCESS: .1,
                AD_LOADER_XHR_ERROR: 1,
                AD_LOADER_EMPTY_ANSWER: 1,
                AD_LOADER_TOO_SHORT_ANSWER: 1,
                AD_LOADER_NO_ADS_TO_RENDER: 1,
                AD_LOADER_BAD_ANSWER: 100,
                AD_LOADER_TOO_MANY_ATTEMPTS: 100
            }), {
                ADFOX_LOAD_SUCCESS: .1,
                ADFOX_LOAD_XHR_ERROR: 1,
                ADFOX_LOAD_JSONP_ERROR: 1,
                ADFOX_UNKNOWN_ERROR: 1,
                ADFOX_LOG_ERROR: 1,
                ADFOX_LOG_EVENT: .1,
                ADFOX_ADX_STUB: 1,
                ADFOX_HB_TIMEOUT: .1,
                ADFOX_MATHID_SUCCESS: .1
            }), {
                HB_CALLED: .1,
                HB_ADAPTER_SEND: .01,
                HB_RENDERED: .1,
                HB_CONFIGURATION_ERROR: 1,
                HB_FETCH_BIDS_REQUEST_ERROR: 1,
                HB_FETCH_BIDS_REQUEST_TIMEOUT: 1,
                HB_ADAPTER_REQUEST_TIMEOUT: .1,
                HB_ADAPTER_REQUEST_ERROR: .1,
                HB_ADAPTER_PARSE_ERROR: 1
            }), {MEDIA_SEND_COMPLETE_MESSAGE_FAILED: .1}), {
                WIDGET_PRELOAD_FAILED: .1,
                WIDGET_INVALID_ID: .1,
                WIDGET_INVALID_RENDER_FIELD: .1,
                WIDGET_LOAD_META_FAILED: .1,
                WIDGET_LOAD_SETTINGS_FAILED: .1,
                WIDGET_LOAD_BUNDLE: .1,
                WIDGET_DEFINE_PRODUCT_VARIABLE: .1,
                WIDGET_MEDIA_ERROR: .1
            }), {COLLECTION_ERROR: 100}), r), t.FH), {}), o), {
                CLOSABLE_AD_CHUNK_LOAD_FAILED: 1,
                UNCAUGHT_SSP: 10,
                UNCAUGHT_SDK: 10,
                DESKTOP_FULLSCREEN: 1,
                RESPONSE_MISMATCH_BANNER_CFG: 1
            });
            n(n(n(n(n({}, r), t.FH), o), {TOUCH_MORDA_TZAR: 1}), {
                DESKTOP_FULLSCREEN: 1,
                DESKTOP_FLOOR_AD: 1,
                TOO_SMALL_CONTAINER: 1,
                VIDEO_ERROR: 1,
                CHUNK_LOAD: 1,
                UNEXPECTED_DOM: 1,
                RESPONSE_MISMATCH_BANNER_CFG: 1
            })
        }, 74377: (e, t, n) => {
            "use strict";

            function r(e, t, n, r) {
                var a = o(e, n, r), s = o(t, n, r);
                return isFinite(a) ? a !== s ? a > s ? t : e : i(e) > i(t) ? e : t : t
            }

            function o(e, t, n) {
                var r = n.width / n.height, o = t.width / t.height,
                    i = Math.min(1, o < r ? n.width / t.width : n.height / t.height);
                return n.width - Number(e.w) * i < 0 || n.height - Number(e.h) * i < 0 ? 1 / 0 : Math.abs(n.width - Number(e.w) * i) + Math.abs(n.height - Number(e.h) * i)
            }

            function i(e) {
                return Number(e.w) * Number(e.h)
            }

            t.cY = void 0, t.cY = function (e) {
                var t = e.containerWidth, o = e.containerHeight, i = e.options, a = void 0 === i ? {} : i;
                if (a["smart-centers"] && a["smart-centers"].length > 0) {
                    var s = a["smart-centers"], u = {width: Number(e.originWidth), height: Number(e.originHeight)},
                        c = {width: t, height: o};
                    return (0, n(12773).reduce)(s, (function (e, t) {
                        return r(e, t, u, c)
                    }), s[0])
                }
                return a["smart-center"] || null
            }
        }, 97332: (e, t) => {
            "use strict";
            var n = function (e, t, n) {
                if (n || 2 === arguments.length) for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
                return e.concat(r || Array.prototype.slice.call(t))
            };
            t.l = void 0, t.l = function (e) {
                var t = e.hostname.replace(/^www./, ""), r = e.pathname;
                return /^yandex\./.test(t) ? function (e, t) {
                    void 0 === t && (t = 0);
                    var r = e.hostname, o = e.pathname.replace(/\/$/g, "").split("/");
                    return n([r], o.slice(1, t + 1), !0).join("/")
                }({hostname: t, pathname: r}, 1) : t
            }
        }, 36087: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.getServiceName = void 0;
            var r = [{name: "Yandex News", list: ["yandexNews"]}, {
                name: "Yandex Pogoda",
                list: ["yandexPogoda"]
            }, {name: "Avito", list: ["avito", "avitoMobile"]}, {
                name: "Yandex Mail",
                list: ["yandexMail"]
            }, {name: "Yandex Zen", list: ["yandexZen"]}, {name: "Ok.Ru", list: ["ok"]}, {
                name: "Gismeteo",
                list: ["gismeteo"]
            }, {name: "Mail.Ru", list: ["mailRuAll"]}, {
                name: "Yandex Video",
                list: ["yandexVideo"]
            }, {name: "Yandex Images", list: ["yandexImages"]}, {name: "Yandex Maps", list: ["yandexMaps"]}];
            t.getServiceName = function (e) {
                void 0 === e && (e = window);
                for (var t = "Other", o = 0; o < r.length; o++) if ((0, n(14573).Q)(e, r[o].list)) {
                    t = r[o].name;
                    break
                }
                return t
            }
        }, 64809: (e, t, n) => {
            "use strict";
            var r;
            Object.defineProperty(t, "__esModule", {value: !0}), t.checkBundleIsWebView = t.checkBundleIsMobilSdk = t.checkBundleIsSSP = t.saveBundleType = void 0, function (e) {
                e["SSP"] = "ssp", e["mobileSdk"] = "msdk", e["webView"] = "webview"
            }(r || (r = {}));
            var o = "bundleType";

            function i(e) {
                return e === r.SSP ? (t = window, Boolean(t.YA_SSP_PAGE) || (0, n(38710).getGlobalVariable)(o) === e) : (0, n(38710).getGlobalVariable)(o) === e;
                var t
            }

            t.saveBundleType = function (e, t) {
                var i, a = Number(null === (i = null == e ? void 0 : e.common) || void 0 === i ? void 0 : i.sspId);
                if (a && 1e3 !== a && !t && (0, n(28274).traceLog)({sspId: a}, "NO SSP BUNDLE INFO", 100), (0, n(38710).getGlobalVariable)(o)) (0, n(57112).c)({
                    def: "global",
                    type: (0, n(38710).getGlobalVariable)(o),
                    sspId: a
                }); else {
                    var s = t ? function (e) {
                        var t;
                        switch (e) {
                            case"ssp":
                                t = r.SSP;
                                break;
                            case"mobsdk":
                                t = r.mobileSdk;
                                break;
                            case"viber":
                            case"webview":
                                t = r.webView;
                                break;
                            default:
                                t = void 0
                        }
                        return t
                    }(t) : function (e) {
                        if (e && e.common && 1 === Number(e.common.isMobileSdk)) return r.mobileSdk;
                        return
                    }(e);
                    s && ((0, n(38710).setGlobalVariable)(o, s), (0, n(57112).c)({
                        def: t ? "config" : "data",
                        type: s,
                        sspId: a
                    }))
                }
            }, t.checkBundleIsSSP = function () {
                return i(r.SSP)
            }, t.checkBundleIsMobilSdk = function () {
                return e = window, Boolean(e.YA_MOB_SDK_PAGE) || i(r.mobileSdk);
                var e
            }, t.checkBundleIsWebView = function () {
                return i(r.webView)
            }
        }, 30107: (e, t, n) => {
            "use strict";

            function r() {
                return 679108
            }

            Object.defineProperty(t, "__esModule", {value: !0}), t.getVasVersion = t.getRevisionNo = t.getCodeVersion = void 0, t.getCodeVersion = r, t.getRevisionNo = function () {
                return 196
            }, t.getVasVersion = function (e) {
                var t, r, o, i;
                if (void 0 === e && (e = window), (0, n(26413).isFunction)(null === (r = null === (t = e.ya) || void 0 === t ? void 0 : t.videoAd) || void 0 === r ? void 0 : r.getModuleVersion)) return null === (i = null === (o = e.ya) || void 0 === o ? void 0 : o.videoAd) || void 0 === i ? void 0 : i.getModuleVersion()
            }
        }, 17970: (e, t) => {
            "use strict";
            t.d = void 0, t.d = function () {
                return "production"
            }
        }, 17817: (e, t, n) => {
            "use strict";
            t.i = void 0, t.i = function () {
                var e = (0, n(38710).getYa)();
                return Boolean(e.Collections)
            }
        }, 66333: (e, t) => {
            "use strict";
            t.C = void 0, t.C = function (e) {
                return -1 !== e.location.hostname.indexOf("yandex") && "object" == typeof e.home && Boolean(e.home["export"])
            }
        }, 29935: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.isTurboPage = void 0, t.isTurboPage = function (e) {
                return void 0 === e && (e = window), Boolean(e.YA_TURBO_PAGES)
            }
        }, 7937: (e, t) => {
            "use strict";
            t.U = void 0, t.U = function (e) {
                return Boolean(e.Ya.Znatoki)
            }
        }, 79995: (e, t, n) => {
            "use strict";
            t.i = void 0;
            var r = function () {
                function e(e) {
                    this.outer = (0, n(36739).F)(e), this.status = "ok"
                }

                return e.prototype.triggerError = function (e, t) {
                    "ok" === this.status && (this.outer.onError ? (this.status = "error", this.outer.onError({
                        type: "error",
                        code: e,
                        text: t
                    })) : console.error(e, t))
                }, e.prototype.triggerWarning = function (e, t) {
                    "ok" === this.status && (this.outer.onError ? this.outer.onError({
                        type: "warning",
                        code: e,
                        text: t
                    }) : console.info(e, t))
                }, e.prototype.triggerOnClick = function (e) {
                    this.outer.onClick && this.outer.onClick(e)
                }, e.prototype.triggerAltCallback = function (e) {
                    "ok" === this.status && this.outer.altCallback && (this.status = "alt", this.outer.altCallback(e))
                }, e.prototype.triggerOnRender = function (e) {
                    var t, n;
                    null === (n = (t = this.outer).onRender) || void 0 === n || n.call(t, e)
                }, e.prototype.triggerOnPreload = function (e) {
                    return !!this.outer.onPreload && (this.outer.onPreload(e), !0)
                }, e
            }();
            t.i = r
        }, 36739: (e, t, n) => {
            "use strict";

            function r(e) {
                return (0, n(26413).isFunction)(e) ? (0, n(95456).isolate)(e) : void 0
            }

            t.F = void 0, t.F = function (e) {
                return {
                    onError: r(e.onError),
                    onClick: r(e.onClick),
                    onRender: r(e.onRender),
                    onPreload: r(e.onPreload),
                    altCallback: r(e.altCallback)
                }
            }
        }, 75084: (e, t, n) => {
            "use strict";
            t.u = void 0;
            var r = function () {
                function e() {
                    this.valid = !0, this.additionals = {}
                }

                return e.prototype.setSkipTokenSettings = function (e) {
                    this.skipTokenSettings = (0, n(98060).r)(e)
                }, e.prototype.setCallbacks = function (e) {
                    this.callbacks = new (n(79995).i)(e)
                }, e.prototype.setBlockId = function (e) {
                    var t = (0, n(44751).parseBlockId)(e);
                    if (null === t.product || null === t.pageId || null === t.impId) {
                        var r = 'Invalid block id: "'.concat(e, '"');
                        return this.callbacks.triggerError("INVALID_BLOCK_ID", r), n(49874).logger.errorStrict("INVALID_BLOCK_ID", {text: r}), void (this.valid = !1)
                    }
                    this.blockId = {origin: e, product: t.product, pageId: t.pageId, impId: t.impId}
                }, e.prototype.setContainer = function (e) {
                    this.renderTo = e
                }, e.prototype.setContainerDomNode = function (e) {
                    this.renderToDomNode = e
                }, e.prototype.setBannerType = function (e) {
                    this.bannerType = e
                }, e.prototype.setLayoutConfig = function (e) {
                    this.layoutConfig = e
                }, e.prototype.getLayoutConfig = function () {
                    return this.layoutConfig
                }, e.prototype.getRenderToElement = function (e) {
                    return (0, n(85384).isCustomBannerTypeAndExp)(this.bannerType) ? this.renderToDomNode : (0, n(5989).getElementById)((null == e ? void 0 : e.renderTo) || this.renderTo)
                }, e.prototype.isValid = function () {
                    return this.valid
                }, e.prototype.destroy = function () {
                }, e.prototype.setAdditional = function (e) {
                    (0, n(8627).assignProperties)(this.additionals, e)
                }, e
            }();
            t.u = r
        }, 98060: (e, t) => {
            "use strict";
            t.r = void 0, t.r = function (e) {
                var t = {disable: !1};
                return -1 === (null == e ? void 0 : e.screen) && (t.disable = !0), t
            }
        }, 74472: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.getAllBlocksInfo = t.destroyPlacement = t.getPlacement = t.registerPlacement = void 0;
            var r = {};
            t.registerPlacement = function (e) {
                return r[e] = new (n(75084).u), r[e]
            }, t.getPlacement = function (e) {
                return r[e]
            }, t.destroyPlacement = function (e) {
                var t = r[e];
                t && (t.destroy(), delete r[e])
            }, t.getAllBlocksInfo = function () {
                var e = [];
                for (var t in r) e.push({blockId: r[t].blockId.origin, renderTo: r[t].renderTo});
                return e
            }
        }, 28458: (e, t, n) => {
            "use strict";
            t.T = void 0;
            var r = {21753: 50, 27219: 50, 101833: 50, 122989: 50, 70350: 50, 250894: 10};
            t.T = function (e, t) {
                if (e in r) {
                    var o = r[e];
                    return "boolean" == typeof o ? o : r[e] = (0, n(14415).isPercent)(o)
                }
                return t
            }
        }, 8595: (e, t) => {
            "use strict";
            t.Y = void 0;
            t.Y = function (e, t) {
                var n = e && !e.width && !e.height && !e.w && !e.h;
                return Boolean(n && !("fullscreen" === t))
            }
        }, 95456: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.isolate = void 0, n(12251).protect.log = n(49874).logger.warn, t.isolate = function (e) {
                return (0, n(12251).protect)("isolate", e || n(85225).noop, this, (function (e) {
                    e.preventProtect = !0
                }))
            }
        }, 81465: (e, t, n) => {
            "use strict";
            t.p = void 0, t.p = function (e, t, r) {
                var o;
                if (!n(35930).isIntersectionObserverSupported) return o = (0, n(96757).requestAnimationFrame)(t), function () {
                    o && (0, n(96757).cancelAnimationFrame)(o)
                };
                var i = Math.max(0, r.fetchMargin), a = Math.max(1, r.mobileScaling), s = n(50880).isMobile ? i * a : i,
                    u = {rootMargin: "".concat(s, "%"), threshold: [0, .25, .5, .75, 1]},
                    c = new IntersectionObserver((function (r) {
                        for (var i = 0; i < r.length; i++) {
                            r[i].intersectionRatio > 0 && (c.unobserve(e), o = (0, n(96757).requestAnimationFrame)(t))
                        }
                    }), u);
                return c.observe(e), function () {
                    c.unobserve(e), o && (0, n(96757).cancelAnimationFrame)(o)
                }
            }
        }, 96483: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.requestCounter = void 0;
            var r = (0, n(64809).checkBundleIsSSP)(), o = (0, n(64809).checkBundleIsMobilSdk)(), i = !r && !o && !0,
                a = n(17451).B7.getInstance((function () {
                    return (0, n(38710).getYa)()
                }), i);
            t.requestCounter = function (e, t) {
                a.requestCounter(e, t)
            }
        }, 48289: (e, t, n) => {
            "use strict";
            t.r = void 0;
            var r;
            t.r = function () {
                return r || (r = new Promise((function (e) {
                    (0, n(96483).requestCounter)({id: 42093449, enableCookies: false}, e)
                }))).then((function (e) {
                    var t = (0, n(56240).getTestIds)();
                    e.params(t);
                    var r = (0, n(56240).getFlagsIdsMap)();
                    e.params(r)
                })), r
            }
        }, 88536: (e, t, n) => {
            "use strict";
            t.R = void 0, t.R = (0, n(94532).once)((function () {
                var e = (0, n(44834).getMraid)();
                if (e) {
                    var t = e.getVersion();
                    n(49874).logger.traceLog({msg: "MRAID_IS_ENABLED", version: t}, "MRAID_LOG")
                }
                return Boolean(e)
            }))
        }, 70585: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.needDisableHit = void 0, t.needDisableHit = function (e) {
                var t = e.type, r = e.platform, o = e.window;
                return !("fullscreen" !== t || (0, n(74351).canShowFullscreen)({
                    platform: r,
                    window: o
                }) || "exp" !== (0, n(88772).useExperimentFlag)("DISABLE_HIT_FOR_FULLSCREEN_DESKTOP", !0)) || "floorAd" === t && !(0, n(84304).canShowFloorAd)({
                    platform: r,
                    window: o
                })
            }
        }, 14415: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.isPercent = t.fixPrecision = t.toFraction = void 0;

            function n(e) {
                return r(e / 100)
            }

            function r(e) {
                return Number(e.toFixed(3))
            }

            t.toFraction = n, t.fixPrecision = r, t.isPercent = function (e) {
                return Math.random() < n(e)
            }
        }, 32868: (e, t, n) => {
            "use strict";
            t.G = void 0;
            var r = function () {
                function e(e) {
                    this.renderToNode = e, this.wasRendered = !1, this.wasAdSeen = !1, this.isVisible = !1, this.seenTime = 0, this.waitingRenderTime = 0, this.missedSeenTime = 0, this.rendering = new (n(48777).B), this.whenAdWasRendered = this.rendering.promise, this.viewability = new (n(48777).B), this.whenAdWasSeen = this.viewability.promise
                }

                return e.prototype.startObserve = function () {
                    var e = this;
                    if (void 0 === this.unobserve) {
                        var t, r = (t = {
                            rootMargin: "0px",
                            threshold: [0, .25, .5, .75, 1]
                        }, new (n(43945).ViewportObserver)(t)).observe(this.renderToNode, (function (t) {
                            t !== e.isVisible && (e.isVisible = t, t ? (e.seenTime = performance.now(), e.whenAdWasRendered.then((function () {
                                r(), e.wasAdSeen = !0, e.viewability.resolve()
                            }))) : e.seenTime && (e.missedSeenTime += performance.now() - e.seenTime, e.seenTime = 0))
                        }));
                        this.unobserve = r
                    }
                }, e.prototype.destroy = function () {
                    var e;
                    null === (e = this.unobserve) || void 0 === e || e.call(this)
                }, e.prototype.renderingIsCompleted = function () {
                    if (!this.wasRendered) {
                        if (this.wasRendered = !0, this.seenTime > 0) {
                            var e = performance.now();
                            this.waitingRenderTime = Math.max(0, e - this.seenTime), this.seenTime = 0, this.wasAdSeen = !0
                        }
                        this.rendering.resolve()
                    }
                }, e.prototype.getSeenStatus = function () {
                    var e = this, t = e.wasAdSeen, n = e.wasRendered, r = e.waitingRenderTime, o = e.missedSeenTime;
                    return {wasAdSeen: t, wasRendered: n, waiting: r, missed: o, total: o + r}
                }, e
            }();
            t.G = r
        }, 74192: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.getStatus = t.renderingIsCompleted = t.destroyAdSeenObserver = t.initAdSeenObserver = t.getAdSeenObserver = void 0;
            var r = {};
            t.getAdSeenObserver = function (e) {
                return r[e] || null
            }, t.initAdSeenObserver = function (e, t) {
                if (void 0 === r[e]) {
                    var o = new (n(32868).G)(t);
                    r[e] = o, o.startObserve()
                }
            }, t.destroyAdSeenObserver = function (e) {
                var t = r[e];
                void 0 !== t && (t.destroy(), delete r[e])
            }, t.renderingIsCompleted = function (e) {
                var t = r[e];
                void 0 !== t && t.renderingIsCompleted()
            }, t.getStatus = function (e) {
                var t = r[e];
                return void 0 === t ? null : t.getSeenStatus()
            }
        }, 28722: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.brakePointsStatId = t.brakeFor = t.brakePointsExp = t.POINT_NAME = void 0, function (e) {
                e["LOADER_INIT"] = "loaderInit", e["ADV_MANAGER_INIT"] = "advManagerInit", e["DOM_RENDERING"] = "domRendering"
            }(t.POINT_NAME || (t.POINT_NAME = {}));
            var r = {};

            function o(e, t) {
                var n = performance.now();
                for (t && t(); performance.now() - e < n;) ;
                return performance.now() - n
            }

            t.brakePointsExp = o;
            var i = (0, n(94532).once)((function () {
                if ((0, n(88772).useExperimentFlag)("BRAKE_POINTS", !0)) {
                    var e = (0, n(88772).useExperimentFlag)("BRAKE_POINTS_DOMAINS");
                    if (e) {
                        var t = (0, n(97332).l)(window.location);
                        return (0, n(80511).includes)(e, t)
                    }
                    return !0
                }
                return !1
            }));
            t.brakeFor = function (e) {
                if (i()) {
                    a();
                    var t = (0, n(88772).useExperimentFlag)("BRAKE_POINTS") || r, s = null == t ? void 0 : t[e];
                    if (s) {
                        o(s);
                        0
                    }
                }
            }, t.brakePointsStatId = function () {
                if (i()) return (0, n(88772).useExperimentFlag)("BRAKE_POINTS_STAT_ID")
            };
            var a = (0, n(94532).once)((function () {
                setTimeout((function () {
                    (0, n(48289).r)()
                }), 0)
            }))
        }, 31427: (e, t, n) => {
            "use strict";
            var r = function () {
                return r = Object.assign || function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, r.apply(this, arguments)
            };
            t.I = void 0;
            var o = n(64029).isTouchDevice ? "touch" : "desktop", i = "pcode", a = (0, n(56240).getUaasConfig)(),
                s = a.testIds ? a.testIds.split(";") : void 0;
            t.I = function (e) {
                var t, a,
                    u = null === (a = null === (t = null === window || void 0 === window ? void 0 : window.Ya) || void 0 === t ? void 0 : t.Context) || void 0 === a ? void 0 : a.Rum;
                return u || (u = new Promise((function (e) {
                    n(24673)((function (t) {
                        var a = function (e) {
                            var t, a;
                            if ((0, n(85914).isPerfLogging)()) {
                                var u = e.init({
                                    clck: "https://yandex.ru/clck/click",
                                    slots: s,
                                    reqid: "".concat(Date.now(), ":pcode:").concat(Math.random()),
                                    scrollMetric: !0,
                                    scrollLatencyMetric: !0,
                                    sendAutoElementTiming: !0,
                                    elementTimingEntryFilter: function (t) {
                                        return -1 !== t.identifier.indexOf("tgo-") && (n = t.intersectionRect, ["x", "y", "top", "bottom", "left", "right", "width", "height"].some((function (e) {
                                            return 0 !== n[e]
                                        }))) && e.isValidYaBroRender();
                                        var n
                                    },
                                    isDevMode: (0, n(85914).isLoggingQueryActive)()
                                }, {
                                    rum_id: "ru.pcode.".concat(o),
                                    "-project": i,
                                    "-page": (0, n(97332).l)(window.location),
                                    "-version": String((0, n(30107).getCodeVersion)()),
                                    "-platform": o,
                                    "-env": (0, n(17970).d)(),
                                    "-url": window.location.href,
                                    "-domain": window.location.host,
                                    "-blocker": void 0
                                });
                                a = r(r({}, e), u), e.isRumInited() && e.sendResTiming("context.js", (null === (t = document.currentScript) || void 0 === t ? void 0 : t.src) || "https://yandex.ru/ads/system/context.js")
                            }
                            return a
                        }(t);
                        e(a)
                    }), (function (e) {
                        return n(49874).logger.error(e, "Rum bundle loading error")
                    }))
                }))), e && u.then((function (t) {
                    e(t)
                })), u
            }
        }, 91208: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.isLightHouse = void 0;
            var n = -1 !== navigator.userAgent.indexOf("Chrome-Lighthouse");
            t.isLightHouse = function () {
                return n
            }
        }, 85914: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.getMarksByName = t.clearMarks = t.setMark = t.isPerfLogging = t.isLoggingQueryActive = t.RenderMarks = void 0, function (e) {
                e["AdvManagerLoader"] = "AdvManagerLoader", e["AdvManagerLoaded"] = "AdvManagerLoaded", e["StartLazyLoadObserver"] = "StartLazyLoadObserver", e["ReadyToRequest"] = "ReadyToRequest", e["DataLoaded"] = "DataLoaded", e["DepsLoadStart"] = "DepsLoadStart", e["AdvManagerRender"] = "AdvManagerRender", e["ReadyForRendering"] = "ReadyForRendering", e["StartDomRendering"] = "StartDomRendering", e["StopDomRendering"] = "StopDomRendering", e["StartDetector"] = "StartDetector", e["StartEffectRendering"] = "StartEffectRendering", e["StopEffectRendering"] = "StopEffectRendering", e["OnRenderCalled"] = "OnRenderCalled", e["ContentfulRender"] = "ContentfulRender", e["ContextJs"] = "ContextJs"
            }(t.RenderMarks || (t.RenderMarks = {}));
            var r = window, o = (0, n(28377).parseQueryString)(window.location.search);
            t.isLoggingQueryActive = function () {
                return Boolean(o.yandex_context_perf_logging)
            };
            t.isPerfLogging = function () {
                return void 0 === r.yandex_context_perf_logging && (r.yandex_context_perf_logging = (0, n(14415).isPercent)(3) && !(0, n(91208).isLightHouse)() || (0, t.isLoggingQueryActive)()), r.yandex_context_perf_logging
            }, t.setMark = function (e, n) {
                if ((0, t.isPerfLogging)()) try {
                    var r = "".concat(e, "_").concat(n);
                    performance.mark(r)
                } catch (e) {
                }
            }, t.clearMarks = function (e) {
                if ((0, t.isPerfLogging)()) try {
                    var r = performance.getEntriesByType("mark");
                    (0, n(15137).forEach)(r, (function (t) {
                        0 === t.name.indexOf(e) && performance.clearMarks(t.name)
                    }))
                } catch (e) {
                }
            }, t.getMarksByName = function (e) {
                if (!(0, t.isPerfLogging)()) return [];
                try {
                    return performance.getEntriesByName(e, "mark")
                } catch (e) {
                    return []
                }
            }
        }, 1164: (e, t, n) => {
            "use strict";
            var r, o, i, a;
            t.E7 = t.Ac = t.SS = void 0;
            var s = window;
            t.SS = function () {
                if (s.performance && s.performance.getEntriesByType) {
                    i = performance.now();
                    var e = n(40755).xD.__preduce((function (e, t) {
                        return e.concat(s[t])
                    }), []).filter((function (e) {
                        return "function" == typeof e && e.toString().match(/AdvManager\.render/)
                    }));
                    a = e.length, s.performance.getEntriesByType("resource").forEach((function (e) {
                        e.name === n(70709).CONTEXT_JS && (r = e.startTime, o = e.responseEnd)
                    }))
                }
            };
            t.Ac = function () {
                return a ? (a--, !0) : performance.now() - i < 100
            };
            t.E7 = function () {
                return {CONTEXT_JS_LOAD_START: r, CONTEXT_JS_LOAD_END: o, CONTEXT_JS_EXEC_START: i}
            }
        }, 55220: (e, t, n) => {
            "use strict";
            t.X0 = t.ji = void 0;
            var r = {};

            function o(e) {
                return function (t) {
                    var o = "queue_" + t + "_" + e;
                    if (!r[o]) if (window && window.performance) {
                        r[o] = !0;
                        var i = performance.now();
                        (0, n(31427).I)().then((0, n(12251).protect)("createQueueSignal:loadRum", (function (e) {
                            e && e.isRumInited() && e.sendDelta(o, i)
                        })))
                    } else r[o] = !0
                }
            }

            t.ji = o("ready"), t.X0 = o("start")
        }, 4374: (e, t, n) => {
            "use strict";
            var r = function () {
                return r = Object.assign || function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, r.apply(this, arguments)
            };
            Object.defineProperty(t, "__esModule", {value: !0}), t.sendRumDeltas = void 0, t.sendRumDeltas = function (e, t) {
                (0, n(85914).isPerfLogging)() && (0, n(31427).I)().then((function (o) {
                    var i = !!t && (t.isInViewport && o && o.isValidYaBroRender()),
                        a = (0, n(88772).getAllActiveTestIds)(), s = window;
                    t = r(r(r({}, t), s.yandex_context_rum_additionals), {isValidRender: i, activeTestIds: a});
                    var u = {"-additional": encodeURIComponent(n.lv["json"].stringify(t))};
                    (0, n(38715).forOwn)(e, (function (e, t) {
                        o && o.sendDelta(t, e, u)
                    }))
                }))
            }
        }, 48674: (e, t, n) => {
            "use strict";
            t.l = void 0, t.l = function (e) {
                if (!(0, n(7153).isObject)(e)) return {};
                var t = {};
                return (0, n(38715).forOwn)(e, (function (e, r) {
                    (0, n(41486).isString)(r) && "X" === r.charAt(0).toUpperCase() && (t[r] = String(e))
                })), t
            }
        }, 40817: (e, t, n) => {
            "use strict";
            t.Nb = t.nH = void 0;
            var r, o = [], i = {}, a = "on" === (0, n(88772).useExperimentFlag)("PUBLIC_BOARD"), s = !1;

            function u(e) {
                o.push(e), function () {
                    if (!s) return;
                    var e = o.join("<br>");
                    (function () {
                        if (r) return r;
                        r = document.createElement("div");
                        var e = ["border: 1px solid red", "font: 11px/1.3 sans-serif", "padding: 0 7px", "position: fixed", "background: white", "left: 0", "top: 0", "z-index: 1000000", "cursor: pointer"];
                        r.setAttribute("id", "debug_info"), r.setAttribute("style", e.join(";"));
                        var t = document.body || document.documentElement;
                        return r.onclick = function () {
                            t.removeChild(r)
                        }, t.appendChild(r), r
                    }()).innerHTML = e
                }()
            }

            t.nH = function (e, t) {
                i[t] || (i[t] = !0, u(e))
            }, t.Nb = function (e, t) {
                s = s || "1" === e && t && a
            }
        }, 2052: (e, t, n) => {
            "use strict";
            var r = function () {
                return r = Object.assign || function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, r.apply(this, arguments)
            };
            t.W = void 0;
            var o = {
                url: "",
                method: "get",
                headers: {"Content-Type": "application/x-www-form-urlencoded"},
                retries: 3,
                withCredentials: !0
            };
            t.W = function (e) {
                return (0, n(42180).W)(r(r(r({}, o), e), {headers: r(r({}, o.headers), e.headers)}))
            }
        }, 88521: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.getHostWithPath = t.getHref = t.getHost = t.getPageRef = t.getTargetRef = void 0, t.getTargetRef = function (e) {
                void 0 === e && (e = window);
                try {
                    return e.top.location.href
                } catch (e) {
                }
                try {
                    return e.document.referrer || e.location.href
                } catch (e) {
                }
                return ""
            }, t.getPageRef = function (e) {
                void 0 === e && (e = window);
                try {
                    return e.top.document.referrer
                } catch (e) {
                }
                return ""
            }, t.getHost = function (e) {
                void 0 === e && (e = window);
                try {
                    return e.location.host
                } catch (e) {
                }
                return ""
            }, t.getHref = function (e) {
                void 0 === e && (e = window);
                try {
                    return e.location.href
                } catch (e) {
                }
                return ""
            }, t.getHostWithPath = function (e) {
                void 0 === e && (e = window);
                try {
                    return "".concat(e.location.hostname).concat(e.location.pathname)
                } catch (e) {
                }
                return ""
            }
        }, 9403: (e, t, n) => {
            "use strict";
            t.Z = void 0, t.Z = function () {
                var e = {};
                return {
                    setItem: function (t, n) {
                        e[t] = n
                    }, getItem: function (t) {
                        return e[t]
                    }, removeItem: function (t) {
                        delete e[t]
                    }, clear: function () {
                        e = {}
                    }, key: function (t) {
                        var r = (0, n(10407).getObjectKeys)(e)[t];
                        return r || null
                    }, get length() {
                        return (0, n(10407).getObjectKeys)(e).length
                    }
                }
            }
        }, 70283: (e, t) => {
            "use strict";
            t.V = void 0, t.V = function (e) {
                return {
                    setItem: function (t, n) {
                        try {
                            e.setItem(t, n)
                        } catch (e) {
                        }
                    }, getItem: function (t) {
                        try {
                            return e.getItem(t)
                        } catch (e) {
                            return null
                        }
                    }, removeItem: function (t) {
                        try {
                            return e.removeItem(t)
                        } catch (e) {
                        }
                    }, clear: function () {
                        try {
                            e.clear()
                        } catch (e) {
                        }
                    }, key: function (t) {
                        try {
                            return e.key(t)
                        } catch (e) {
                            return null
                        }
                    }, get length() {
                        try {
                            return e.length
                        } catch (e) {
                            return 1 / 0
                        }
                    }
                }
            }
        }, 74987: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.safeSessionStorage = t.safeLocalStorage = void 0;
            var r = (0, n(64809).checkBundleIsSSP)();
            if (t.safeLocalStorage = (0, n(9403).Z)(), t.safeSessionStorage = (0, n(9403).Z)(), !r) {
                try {
                    t.safeLocalStorage = (0, n(70283).V)(localStorage)
                } catch (e) {
                }
                try {
                    t.safeSessionStorage = (0, n(70283).V)(sessionStorage)
                } catch (e) {
                }
            }
        }, 9809: (e, t, n) => {
            "use strict";
            var r = function () {
                return r = Object.assign || function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, r.apply(this, arguments)
            };
            Object.defineProperty(t, "__esModule", {value: !0}), t.logSSPErrorEvent = t.logSSPEvent = void 0;
            var o = (0, n(88772).useExperimentFlag)("SSP_LOG_PERCENT"), i = (0, n(50023).z)(o) ? o : 15,
                a = (0, n(14415).isPercent)(i), s = (0, n(12251).protect)("SSP_EXP:getLogData", (function (e) {
                    var t, n, r, o, i, a, s, u, c, d, l;
                    return {
                        url: null === (t = e.rtb) || void 0 === t ? void 0 : t.url,
                        isCache: Boolean(null === (n = e.rtb) || void 0 === n ? void 0 : n.url),
                        needBase64Html: Boolean(null === (o = null === (r = e.rtb) || void 0 === r ? void 0 : r.data) || void 0 === o ? void 0 : o.needBase64Html),
                        productType: (null === (i = e.common) || void 0 === i ? void 0 : i.productType) || "",
                        sspId: (null === (a = e.common) || void 0 === a ? void 0 : a.sspId) || "",
                        pageId: (null === (s = e.common) || void 0 === s ? void 0 : s.pageId) || "",
                        bidReqIdStr: (null === (u = e.common) || void 0 === u ? void 0 : u.bidReqIdStr) || "",
                        bidreqid: (null === (c = e.rtb) || void 0 === c ? void 0 : c.bidreqid) || "",
                        adIds: null === (d = null == e ? void 0 : e.settings) || void 0 === d ? void 0 : d.bannerIds,
                        hitLogId: null === (l = null == e ? void 0 : e.eventConfirmationData) || void 0 === l ? void 0 : l.HitLogID
                    }
                }));
            t.logSSPEvent = function (e, t, o) {
                if (t && a) {
                    var i = r(r({}, o), s(t));
                    (0, n(28274).traceLog)(i, e, 100)
                }
            };
            t.logSSPErrorEvent = function (e, t, r) {
                if (void 0 === r && (r = 100), t) {
                    var o = (0, n(88772).useExperimentFlag)("SSP_LOG_PERCENT");
                    (0, n(50023).z)(o) && (r = o), (0, n(28274).traceLog)(t, e, r)
                }
            }
        }, 70709: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.ADSDK_JS = t.CONTEXT_JS = t.AN_YANDEX_STATIC_DOMAIN = t.AN_YANDEX_DOMAIN = t.IS_YANDEX_RU_DOMAIN_DISTRIB = t.IS_YANDEX_RU_DOMAIN = void 0, t.IS_YANDEX_RU_DOMAIN = !1, t.IS_YANDEX_RU_DOMAIN_DISTRIB = !1;
            var r = !1;
            (r = 0 === n(72966).D.indexOf("https://yandex.ru")) && "exp" !== (0, n(88772).useExperimentFlag)("YANDEX_RU_REVERSE") && (t.IS_YANDEX_RU_DOMAIN = r), t.IS_YANDEX_RU_DOMAIN_DISTRIB = "exp" === (0, n(88772).useExperimentFlag)("YARU_DISTRIB_ALWAYS") || r, t.AN_YANDEX_DOMAIN = t.IS_YANDEX_RU_DOMAIN ? "yandex.ru/an" : "an.yandex.ru", t.AN_YANDEX_STATIC_DOMAIN = t.IS_YANDEX_RU_DOMAIN ? "yandex.ru/ads" : "an.yandex.ru", t.CONTEXT_JS = t.IS_YANDEX_RU_DOMAIN ? "https://yandex.ru/ads/system/context.js" : "https://an.yandex.ru/system/context.js", t.ADSDK_JS = t.IS_YANDEX_RU_DOMAIN ? "https://yandex.ru/ads/system/adsdk.js" : "https://an.yandex.ru/system/video-ads-sdk/adsdk.js"
        }, 10439: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.assignUaasRequestParams = void 0, t.assignUaasRequestParams = function (e, t) {
                var r = (0, n(56240).getUaasConfig)(), o = r.flagsMap, i = r.flagsMapCompressed, a = r.testIds;
                a && (e["pcode-test-ids"] = a), i ? e["pcode-flags-map"] = i : o && (0, n(10407).getObjectKeys)(o).length > 0 && (e["pcode-flags-map"] = n.lv["json"].stringify(o)), t.disableSsr || t.useSsr && (e["use-server-side-rendering"] = "1");
                var s = (0, n(28377).parseQueryString)(location.search || ""),
                    u = (0, n(88772).useExperimentFlag)("SRCRWR") || s["pcode-srcrwr"] || s.srcrwr;
                return u && (e.srcrwr = u, e["ssr-dev"] = "1", e["use-server-side-rendering"] = "1"), r.iCookie && (e["pcode-icookie"] = r.iCookie), (0, n(88772).useExperimentFlag)("DISABLE_BASE64_SSR") && (e.disableSsrBase64Please = "true"), (0, n(88772).useExperimentFlag)("DISABLE_BASE64_MEDIA") && (e["disable-base64"] = "1"), e
            }
        }, 88772: (e, t, n) => {
            "use strict";
            var r = function (e, t, n) {
                if (n || 2 === arguments.length) for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
                return e.concat(r || Array.prototype.slice.call(t))
            };
            Object.defineProperty(t, "__esModule", {value: !0}), t.addVasActiveTestId = t.getAllActiveTestIds = t.collectAllActiveTestIds = t.onAddActiveTestIds = t.generateActiveTestIds = t.getActiveTestIds = t.useExperimentFlag = t.getUaasConfig = t.resetExperimentsData = t.initExperimentsData = void 0;
            var o = [];
            window.__activeTestIds = window.__activeTestIds || [], window.__vasActiveTestIds = window.__vasActiveTestIds || [], window.__pcodeAllActiveTestIds = [];
            t.initExperimentsData = function (e) {
                var t = e.flags, n = e.flagsMap, r = e.testIds;
                t, n, r
            };
            t.resetExperimentsData = function () {
                void 0, void 0, void 0, o = []
            };
            t.getUaasConfig = function () {
                return n(56240).getUaasConfig()
            };
            t.useExperimentFlag = function (e, r, o) {
                var a, s;
                void 0 === r && (r = !1);
                var u = (0, t.getUaasConfig)();
                a = u.flags, s = u.flagsMap;
                var c = a && a[e];
                return !r && s && s[e] && (0, n(15137).forEach)(s[e], (function (e) {
                    var t, r, a = e.value, s = e.testId;
                    r = c, ((t = a) && r && "object" == typeof t && "object" == typeof r ? n.lv["json"].stringify(t) === n.lv["json"].stringify(r) : t === r) && i(s, o)
                })), c
            };
            var i = function (e, r) {
                var o = r;
                o || (o = a()), function (e, r) {
                    var o = (0, t.getUaasConfig)().testIds;
                    if (o) {
                        var i = (0, n(94383).find)(o.split(";"), (function (t) {
                            return 0 === t.indexOf(e)
                        }));
                        i && (r.push(i), (0, t.collectAllActiveTestIds)([i]))
                    }
                }(e, o)
            }, a = function () {
                return window.__activeTestIds || []
            };
            t.getActiveTestIds = function (e) {
                var t;
                return (0, n(98370).unique)(null !== (t = null == e ? void 0 : e.concat(o)) && void 0 !== t ? t : o)
            };
            t.generateActiveTestIds = function (e, t) {
                var r;
                void 0 === e && (e = []), void 0 === t && (t = []);
                var o = null !== (r = n(56240).getUaasConfig().rrActiveTestIds) && void 0 !== r ? r : [],
                    i = [].concat(e, t, a(), window.__vasActiveTestIds || [], o);
                if (i.length) return (0, n(98370).unique)(i).join(";")
            }, t.onAddActiveTestIds = new (n(50773).M);
            t.collectAllActiveTestIds = function (e) {
                e && e.length && window.__pcodeAllActiveTestIds && (window.__pcodeAllActiveTestIds = window.__pcodeAllActiveTestIds.concat(e), t.onAddActiveTestIds.dispatch(e))
            };
            t.getAllActiveTestIds = function () {
                if (window.__pcodeAllActiveTestIds && window.__pcodeAllActiveTestIds.length) return (0, n(98370).unique)(r(r([], window.__pcodeAllActiveTestIds, !0), window.__vasActiveTestIds || [], !0)).join(";")
            };
            t.addVasActiveTestId = function (e) {
                window.__vasActiveTestIds = (0, n(98370).unique)(r(r([], window.__vasActiveTestIds || [], !0), [e], !1))
            }, (0, n(2979).FN)((0, t.useExperimentFlag)("SAFEFRAME_VERSION"))
        }, 7386: (e, t) => {
            "use strict";
            var n;
            Object.defineProperty(t, "__esModule", {value: !0}), t.isHermione = t.isReleaseTestSuite = t.initHermioneData = void 0;
            t.initHermioneData = function (e) {
                var t = e.isHermione;
                n = t
            };
            var r = function () {
                return window && window.document && window.document.location && new URL(window.document.location.toString()) && new URL(window.document.location.toString()).searchParams
            };
            t.isReleaseTestSuite = function () {
                return r() && "true" === new URL(window.document.location.toString()).searchParams.get("releaseTestSuite")
            };
            t.isHermione = function () {
                return Boolean(n) || r() && "true" === new URL(window.document.location.toString()).searchParams.get("hermione")
            }
        }, 56240: (e, t, n) => {
            "use strict";
            var r, o, i, a = function () {
                return a = Object.assign || function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, a.apply(this, arguments)
            };
            Object.defineProperty(t, "__esModule", {value: !0}), t.getUaasIsInternalNetwork = t.getUaasFlags = t.getTestIds = t.getFlagsIdsMap = t.getUaasConfig = t.setMeta = t.parseConfig = void 0;
            t.parseConfig = function () {
                var e = {testIds: "", flags: {}, flagsMap: {}, isInternalNetwork: !1};
                try {
                    e = n.lv["json"].parse('{"flags":{"IGNORE_MISSED_DATA_PARAMS_FOR_VIDEO_IN_COMBO":"exp","VAS_REQUEST_VMAP_FROM_ADS":"TRUE","ENABLE_VIDEO_IN_COMBO_INFINITE_PACKSHOT_WITHOUT_ASSETS":"exp","ENABLE_VIDEO_IN_COMBO_INFINITE_PACKSHOT_WITH_ASSETS":"exp","ENABLE_VIDEO_IN_COMBO_ALL_PRODUCTS_INFINITE_PACKSHOT":"exp","ENABLE_ECOM_FOR_VIDEO_IN_COMBO":"exp","VAS_AD_CREATIVE_DETECTION_IGNORE_MEDIA_FILES":"TRUE","VAS_EXP_NEW_SKIN_OUTSTREAM_FIXES":"TRUE","MOVE_AD_LABEL_TO_VAS_EXP":"exp","VAS_USE_NEW_SKIN_IN_VIDEO_IN_COMBO":"TRUE","VAS_SHOW_AD_LABEL_FOR_IN_BANNER":"TRUE","DO_NO_SHOW_VERTICAL_IV_BUTTON":"TRUE","DO_NO_SHOW_IV_TICKER":"TRUE","DISABLE_VAS_TEST_TAG":"TRUE","DO_NO_SHOW_IV_ELEMENTS":"TRUE","SD_MAX_EARS_PERCENT":"20","VAS_STABLE_VERSION":"678065","UNILOADER_FOR_AMP":true,"USE_SSR_IN_AMP":"exp","AD_SEEN_OBSERVER":"enable","FIX_MIN_HEIGHT_NTP":"exp","YANDEX_RU_DOMAIN":"exp","FIX_BROKEN_NTP_GRID":"exp","YANDEX_RU_DOMAIN_DISTRIB":"exp","ZEN2_FULL_WIDTH_IMAGE":"exp","ZEN2_DISABLE_BORDER_RADIUS ":"exp","YARU_DISTRIB_ALWAYS":"exp","DFP_RESPONSE_TIMEOUT":"2000","PCODE_CONSENT":"exp","ADFOX_RELOAD_TIMEOUT_EXP":"exp","ADFOX_RELOAD_IF_AD_WAS_SEEN":"exp","ADFOX_RELOAD_TIMEOUT_VALUE":30,"LEARN_MORE_VARIANT":"2","PRIORITY_BY_VIEWPORT":"exp","DISABLE_DIRECT_CSR":"exp","ZEN2_IS_CARROT_ACCENTS":true,"ZEN2_IS_IMAGES_WITHOUT_PADDINGS":true,"COUNTER_TYPE_3":"exp","ADFOX_MRC_VISIBILITY":true,"ADFOX_MRC_VISIBILITY_ON_CLICK":"exp","MULTIBANNER_UNIFIED_INTERFACE":"exp","ADFOX_BANNER_VIDEO_TO_AD_PLAYBACK_CONTROLLER":"exp","GRAB2":"exp","GRAB2_SIZE":5120,"GRAB2_TIMEOUT":150,"ZEN2_IS_HEADER_REDESIGN":"exp","NEW_REFRESH_LOGIC":"exp","CONFIRM_BY_RENDER_FOR_PREBID":"exp","DISABLE_USERAGENT_CHECK_FULLSCREEN_SSP":"exp","FULLSCREEN_APP_LOGGING":"exp","DISABLE_HIT_FOR_FULLSCREEN_DESKTOP":"exp","ENABLE_CPM_MEDIA_CREATIVE_SSR":"exp","ENABLE_CPC_MEDIA_CREATIVE_SSR":"exp","ENABLE_VIDEO_IN_COMBO_DEFAULT_INFINITE_PACKSHOT":"exp","DISABLE_SMART_QUEUE_IN_SSP":"exp","LAZY_LOAD_PCODE":{"fetchMargin":150,"mobileScaling":2},"SMART_QUEUE_EXP_BLACK_LIST":["mail.ru","yandex.ru/images","yandex.ru/games","dzen.ru","avito.ru","m.avito.ru"],"VAS_THROW_VIDEO_IN_COMBO_ERROR_ON_INVALID_SLOT":"exp","USE_BANNER_LANGUAGE":"exp","CALL_ONRENDER_AFTER_IFRAME_LOADED":"exp","USE_FRIENDLY_FRAME_IN_APP":"exp","USE_BK_SIZE":"exp","USE_BK_SIZES_FOR_VIDEO_IN_COMBO":"exp","VAS_USE_MINIMAL_SIZE_INSTEAD_OF_ZERO_FOR_LAYOUT_CONFIG":"FALSE","VAS_ADD_LAYOUT_CONFIG_TO_VMAP_REQUEST":"TRUE","VAS_ENABLE_INTERSECTION_OBSERVER_TRACK_VISIBILITY_REPORTS":"TRUE","VAS_ENABLE_INTERSECTION_OBSERVER_TRACK_VISIBILITY_HEAVY_REPORT":"CTL","ADSDKVER":"679665","VIDEO_IN_COMBO_FIX_OBSERVE_ON_REMOVE_FROM_DOM_CONTAINER":"exp","CHANGE_MAX_HEIGHT_FLOOR_AD_EXP":"all","FULLSCREEN_GRID_DESKTOP":"exp","DISABLE_HOVER_VISIBILITY":"widget"},"flagsMap":{"IGNORE_MISSED_DATA_PARAMS_FOR_VIDEO_IN_COMBO":[{"value":"exp","testId":"590455"}],"VAS_REQUEST_VMAP_FROM_ADS":[{"value":"TRUE","testId":"617280"}],"ENABLE_VIDEO_IN_COMBO_INFINITE_PACKSHOT_WITHOUT_ASSETS":[{"value":"exp","testId":"655683"}],"ENABLE_VIDEO_IN_COMBO_INFINITE_PACKSHOT_WITH_ASSETS":[{"value":"exp","testId":"655683"}],"ENABLE_VIDEO_IN_COMBO_ALL_PRODUCTS_INFINITE_PACKSHOT":[{"value":"exp","testId":"655683"}],"ENABLE_ECOM_FOR_VIDEO_IN_COMBO":[{"value":"exp","testId":"655683"}],"VAS_AD_CREATIVE_DETECTION_IGNORE_MEDIA_FILES":[{"value":"TRUE","testId":"657461"}],"VAS_EXP_NEW_SKIN_OUTSTREAM_FIXES":[{"value":"TRUE","testId":"657579"}],"MOVE_AD_LABEL_TO_VAS_EXP":[{"value":"exp","testId":"657579"}],"VAS_USE_NEW_SKIN_IN_VIDEO_IN_COMBO":[{"value":"TRUE","testId":"657579"}],"VAS_SHOW_AD_LABEL_FOR_IN_BANNER":[{"value":"TRUE","testId":"663347"}],"DO_NO_SHOW_VERTICAL_IV_BUTTON":[{"value":"TRUE","testId":"672878"}],"DO_NO_SHOW_IV_TICKER":[{"value":"TRUE","testId":"673194"}],"DISABLE_VAS_TEST_TAG":[{"value":"TRUE","testId":"673809"}],"DO_NO_SHOW_IV_ELEMENTS":[{"value":"TRUE","testId":"673813"}],"SD_MAX_EARS_PERCENT":[{"value":"20","testId":"674326"}],"VAS_STABLE_VERSION":[{"value":"678065","testId":"679707"}],"UNILOADER_FOR_AMP":[{"value":true,"testId":"428390"}],"USE_SSR_IN_AMP":[{"value":"exp","testId":"428390"}],"AD_SEEN_OBSERVER":[{"value":"enable","testId":"436297"}],"FIX_MIN_HEIGHT_NTP":[{"value":"exp","testId":"445391"}],"YANDEX_RU_DOMAIN":[{"value":"exp","testId":"507236"}],"FIX_BROKEN_NTP_GRID":[{"value":"exp","testId":"517586"}],"YANDEX_RU_DOMAIN_DISTRIB":[{"value":"exp","testId":"521064"}],"ZEN2_FULL_WIDTH_IMAGE":[{"value":"exp","testId":"541480"}],"ZEN2_DISABLE_BORDER_RADIUS ":[{"value":"exp","testId":"541480"}],"YARU_DISTRIB_ALWAYS":[{"value":"exp","testId":"543791"}],"DFP_RESPONSE_TIMEOUT":[{"value":"2000","testId":"544034"}],"PCODE_CONSENT":[{"value":"exp","testId":"545200"}],"ADFOX_RELOAD_TIMEOUT_EXP":[{"value":"exp","testId":"544772"}],"ADFOX_RELOAD_IF_AD_WAS_SEEN":[{"value":"exp","testId":"544772"}],"ADFOX_RELOAD_TIMEOUT_VALUE":[{"value":30,"testId":"544772"}],"LEARN_MORE_VARIANT":[{"value":"2","testId":"550091"}],"PRIORITY_BY_VIEWPORT":[{"value":"exp","testId":"567690"}],"DISABLE_DIRECT_CSR":[{"value":"exp","testId":"591784"}],"ZEN2_IS_CARROT_ACCENTS":[{"value":true,"testId":"593511"}],"ZEN2_IS_IMAGES_WITHOUT_PADDINGS":[{"value":true,"testId":"594540"}],"COUNTER_TYPE_3":[{"value":"exp","testId":"594875"}],"ADFOX_MRC_VISIBILITY":[{"value":true,"testId":"594976"}],"ADFOX_MRC_VISIBILITY_ON_CLICK":[{"value":"exp","testId":"594976"}],"MULTIBANNER_UNIFIED_INTERFACE":[{"value":"exp","testId":"598277"}],"ADFOX_BANNER_VIDEO_TO_AD_PLAYBACK_CONTROLLER":[{"value":"exp","testId":"602432"}],"GRAB2":[{"value":"exp","testId":"604470"}],"GRAB2_SIZE":[{"value":5120,"testId":"604470"}],"GRAB2_TIMEOUT":[{"value":150,"testId":"604470"}],"ZEN2_IS_HEADER_REDESIGN":[{"value":"exp","testId":"615260"}],"NEW_REFRESH_LOGIC":[{"value":"exp","testId":"618364"}],"CONFIRM_BY_RENDER_FOR_PREBID":[{"value":"exp","testId":"621021"}],"DISABLE_USERAGENT_CHECK_FULLSCREEN_SSP":[{"value":"exp","testId":"619144"}],"FULLSCREEN_APP_LOGGING":[{"value":"exp","testId":"612195"}],"DISABLE_HIT_FOR_FULLSCREEN_DESKTOP":[{"value":"exp","testId":"637223"}],"ENABLE_CPM_MEDIA_CREATIVE_SSR":[{"value":"exp","testId":"639380"}],"ENABLE_CPC_MEDIA_CREATIVE_SSR":[{"value":"exp","testId":"639380"}],"ENABLE_VIDEO_IN_COMBO_DEFAULT_INFINITE_PACKSHOT":[{"value":"exp","testId":"645066"}],"DISABLE_SMART_QUEUE_IN_SSP":[{"value":"exp","testId":"656665"}],"LAZY_LOAD_PCODE":[{"value":{"fetchMargin":150,"mobileScaling":2},"testId":"665097"}],"SMART_QUEUE_EXP_BLACK_LIST":[{"value":["mail.ru","yandex.ru/images","yandex.ru/games","dzen.ru","avito.ru","m.avito.ru"],"testId":"665097"}],"VAS_THROW_VIDEO_IN_COMBO_ERROR_ON_INVALID_SLOT":[{"value":"exp","testId":"671732"}],"USE_BANNER_LANGUAGE":[{"value":"exp","testId":"643788"}],"CALL_ONRENDER_AFTER_IFRAME_LOADED":[{"value":"exp","testId":"678969"}],"USE_FRIENDLY_FRAME_IN_APP":[{"value":"exp","testId":"678969"}],"USE_BK_SIZE":[{"value":"exp","testId":"669344"}],"USE_BK_SIZES_FOR_VIDEO_IN_COMBO":[{"value":"exp","testId":"679407"}],"VAS_USE_MINIMAL_SIZE_INSTEAD_OF_ZERO_FOR_LAYOUT_CONFIG":[{"value":"FALSE","testId":"675076"}],"VAS_ADD_LAYOUT_CONFIG_TO_VMAP_REQUEST":[{"value":"TRUE","testId":"675076"}],"VAS_ENABLE_INTERSECTION_OBSERVER_TRACK_VISIBILITY_REPORTS":[{"value":"TRUE","testId":"674136"}],"VAS_ENABLE_INTERSECTION_OBSERVER_TRACK_VISIBILITY_HEAVY_REPORT":[{"value":"CTL","testId":"674136"}],"ADSDKVER":[{"value":"679665","testId":"679665"}],"VIDEO_IN_COMBO_FIX_OBSERVE_ON_REMOVE_FROM_DOM_CONTAINER":[{"value":"exp","testId":"679618"}],"CHANGE_MAX_HEIGHT_FLOOR_AD_EXP":[{"value":"all","testId":"675459"}],"FULLSCREEN_GRID_DESKTOP":[{"value":"exp","testId":"679029"}],"DISABLE_HOVER_VISIBILITY":[{"value":"widget","testId":"677689"}]},"flagsMapCompressed":"eJytWNtu20YQ/ZVCz0HKO8W8LcmhtNCSy+4uJctBsFBi1RVgO0XipGmD/HtnSUomaWcVpwX8IAs8Z4ZzOTOjrzO6qLgAXVIpIdc5UUTXRJBS6oILvaY5cE0rnfEy5bNXr7/OPu9uPu1nr2b7L3/OXszu9x/v6RX+GyZOEIazb29ezNZEagG/NSCVXpek1oXgpSa5HOGVaGBIELmxN3daAqhIymBiHD8UtKIK0L9sJZdc6Q1VS94oTdB3JW3eRWEYzf1nk/8fzIQxXQueN5mSj808jxqQ8pl5GZCYvJBcZwKIomvQOSjIFOWVPhYB5JTogjI4k6owDiL3xAkXta5go+UKHcJ8SIUW0E96cZ4njJOWp+ToEDrHSApMK657YvurneDm6UbCgxv4Z4mRxRHDhInZPDhj4o0sKakqEHaayPeDuKXJua54R7QGoWhGmKZrnTZK8cpOgm0Qz6ckiEWS1TkHYt9Ngg5LZVeN+D7KdKIii3PYuZM8YRcYlFCpM6lEtNuVmcx1SS40ECF1DSJD7AjqOWNg4HvRQ+hV5zUISSeBiuK5E4VjbBI7XbybijJOchBtukg5Kpz7D5/2A1jgzf2kUxpTM1K2+Z1gpsU2AGFlSAAs9VSCWE9Ssr/bvb3Zj5B+5CWdl9gSqLSVXgJdLJWulN1kEPpJ12ZbUuVwoUWjc14SWlmV2Ik9PzrZSwVfobNoSy8Eza1INw7n0ZMGNdaTEjS1wj3Xibrqu4TK00WD0rehOeooLckCrNjADXr1b7HH8k25MEkVJKeN/OUHGbbE+N05jPq7IVurhIeBH/dxzosaR5eseYWFoWgJKGeT4nWcMTZw/O6d64zngGKD0Mqq62EQIk1fSgXHKIOp3aO9c7KHJuPYewynhdGsjWkirM6fYTg6sCasGWXLd55GM2zySpdmdqyJoGTa6SOjoeP0Ua4F5YKqrU63qNKwqbmwByyKo773jnWRU4GzS2dSWIGJG88HFUmlzogQON1Jlk01baISYeKHrjvCtlUsT2tHTfKcVgs7SRAGnecZbyqFpay2NWjf7nUwj8NBekqRYZwkTSnDqNnNJXH0XaTGUZ8xHCNnrB85yoYp2s09jQJbUNwQqXmJgmT2bk7mXhwP/OhJupGM0x2LrWZkm+IWZDpGCc7YVEgnw97xcFC0lAtBUs/+LJao8/CslvRy5G/oeo7t+Sc63w2/gzgWxxLa8SMgB4n7lNU/N/SiDm0WFgEFas5SM76gmR0393uBxaAVVJSmgwRUx7lXC0jtEh+hRnvuqJVwBgqs6wq7aQmYDyPbEpdEHBpS2hcwN3GDzp8BiNS1eZUFtoYd7LlJOPJkSVX7GgMyDOZKcbsXfux5ozU5q8t+lz3tutIuFJGf+OPjI6uz/8wxuQRyKAh21DOPgCB0omgUJlkSoTTeVw0Y8nNJCqMo6uLMyOVWt0rfzqoh6uvs9/39uz/K3Yfrw11f7bfv3x5u9vLd7uZwdz175X0brbqh0y81Q3fMKZAy09UMx+/QwOvZ7e5w8/LDJ/Tt793d1f4Lfv71cLu73n8cfXW9u22/ufpnf9c9vvt8uH/ffbx9efrnzdPetPvuUpi9exx9QN0XRgFphfON4g7HzkQ+duNeccya2EsYI9WiObPMRLhQzLsVPjPnH6/6HiWFmQC0wPsa2kSAvVnjeRIlJw8KQZGGbXWHp22rPQOfrh4J4SNElPh9Rw8Qz/0tAPfywHlIh2HCrRenJ2vpkEMqVEvNC30JgrfsOA3MTG11bawbBWFycmvgivtwMuAUHqPb89H87tD/CHHmcBmR9Z3bTjnZX8fHPV8rYSp7ME8FmNXl3GUUuP7PGsChsj6aGVnJFPuOEZLLfDW9SjAj0aPb6SgLk0YxR0PvkWkXAe1t3v6Gg7dAO67xIDgzrZHd7TtgiR0D7UnYnz0F4+ZGyx8turubm0lqgjCZjhdzxPzQWIgTx0vG84Wv2yXkqU1q9tfh6np/P2aIo7lh+PYvod2c0g==","testIds":"657518,0,83;675076,0,64;674136,0,37;679665,0,8;679618,0,28;675459,0,16;679029,0,64;677689,0,99;204307,0,57","isDryRun":false,"pcodever":"0","adsdkver":"679665","yawProduct":"ads","route":"context","uri":"/pcode?route=context","query":{"route":"context"},"device":"desktop","iCookie":"6h1658a6an0RvLusJDen0RB15EE2k5glcjASWtffq5eITzov2l+kkS/nAMRDHJl/ASBwCdceydYgzcEctXvWZQVKIlM=","isInternalNetwork":false,"isStickyVersion":false,"ua":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36","src_domain":"ya","rrActiveTestIds":[]}')
                } catch (e) {
                } finally {
                    if (e.isInternalNetwork) {
                        var t = (0, n(42288).wD)();
                        (0, n(36484).x)(t) || (e.flags = a(a({}, e.flags), t))
                    }
                }
                return e
            };
            var s = (0, n(94532).once)(t.parseConfig);
            t.setMeta = function (e) {
                e.flags && (r = e.flags), e.flagsMap && (i = e.flagsMap), e.testIds && (o = e.testIds)
            };
            t.getUaasConfig = function () {
                var e = s();
                return e.flags = r || e.flags, e.flagsMap = i || e.flagsMap, e.testIds = o || e.testIds, e
            }, t.getFlagsIdsMap = (0, n(94532).once)((function () {
                var e = (0, t.getUaasConfig)().flagsMap, r = {};
                return (0, n(38715).forOwn)(e, (function (e, t) {
                    (0, n(15137).forEach)(e, (function (e) {
                        var n = e.testId;
                        r[t] = n
                    }))
                })), r
            })), t.getTestIds = (0, n(94532).once)((function () {
                var e = (0, t.getUaasConfig)().testIds.split(";");
                return (0, n(15735).map)(e, (function (e) {
                    return e.split(",")[0]
                }))
            }));
            t.getUaasFlags = function () {
                var e = s();
                return r || e.flags
            };
            t.getUaasIsInternalNetwork = function () {
                return s().isInternalNetwork
            }
        }, 30878: (e, t) => {
            "use strict";
            t.cF = t.Ng = t.pv = t.f2 = void 0;
            var n = function () {
                function e(e, t) {
                    if (void 0 === t && (t = document.location.search), this.current = 0, "undefined" != typeof URLSearchParams) {
                        var n = new URLSearchParams(t);
                        this.aims = n.getAll(e)
                    } else this.aims = []
                }

                return e.prototype.all = function () {
                    return this.aims
                }, e.prototype.next = function () {
                    var e = this.aims[this.current];
                    return this.current++, this.current === this.aims.length && (this.current = 0), e
                }, e
            }();
            t.f2 = new n("aim-banner-id"), t.pv = new n("aim-design-id"), t.Ng = new n("aim-subdesign-id"), t.cF = new n("aim-design-name")
        }, 42288: (e, t, n) => {
            "use strict";
            var r;
            t.yf = t.h2 = t.iR = t.U$ = t.wD = void 0;
            var o = (0, n(70008).HP)((function (e) {
                    return {search: (0, n(28377).parseQueryString)(e.search), hash: (0, n(28377).parseQueryString)(e.hash)}
                })),
                i = n(73266).isAMP && (null === (r = window.context) || void 0 === r ? void 0 : r.location) || window.location,
                a = function (e) {
                    var t = e.paramName, n = e.location, r = void 0 === n ? window.location : n, i = e.valueTransform,
                        a = void 0 === i ? function (e) {
                            return e
                        } : i, s = o(r), u = s.search, c = s.hash;
                    return a(t in u ? u[t] : t in c ? c[t] : null)
                };
            t.wD = function (e) {
                void 0 === e && (e = i);
                var t = {};
                null !== a({paramName: "pcode-test-flags", location: e}) && a({
                    paramName: "pcode-test-flags",
                    location: e
                }).split(";").forEach((function (e) {
                    var r = e.split("=");
                    if (r[0]) {
                        var o = r[1];
                        try {
                            o = n.lv["json"].parse(o)
                        } catch (e) {
                        }
                        t[r[0]] = o
                    }
                }));
                return t
            };
            t.U$ = function (e) {
                void 0 === e && (e = i);
                return a({paramName: "pcodeDebug", location: e, valueTransform: Boolean}) || !1
            }, t.iR = (0, t.U$)();
            t.h2 = function (e) {
                return void 0 === e && (e = i), a({paramName: "ya_ad_debug", location: e, valueTransform: Boolean})
            }(), t.yf = a({
                paramName: "yan_console", location: i, valueTransform: function (e) {
                    return null !== e
                }
            })
        }, 29479: (e, t, n) => {
            "use strict";
            t.W = void 0;
            t.W = function () {
                n.lv.json = (0, n(95121).LA)()
            }
        }, 99057: (e, t, n) => {
            "use strict";
            var r = function () {
                return r = Object.assign || function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, r.apply(this, arguments)
            };
            t.C = void 0;
            var o, i, a = {};
            var s = function () {
                function e() {
                }

                return e.prototype.render = function (e, t) {
                    d("render", e, t)
                }, e.prototype.preload = function (e, t) {
                    d("preload", e, t)
                }, e.prototype.renderWidget = function (e) {
                    var t = (0, n(10974).prepareWidgetConfig)(e);
                    d("renderWidget", r({}, t))
                }, e.prototype.getSkipToken = function (e) {
                    return c((function (t) {
                        return t.getSkipToken(e)
                    })) || ""
                }, e.prototype.getCapturedCount = function () {
                    return c((function (e) {
                        return e.getCapturedCount()
                    })) || 0
                }, e.prototype.getAdSessionId = function () {
                    return (0, n(49131).getSessionId)()
                }, e.prototype.getBlocks = function () {
                    return (0, n(74472).getAllBlocksInfo)()
                }, e.prototype.destroy = function (e) {
                    return n(49874).logger.traceLog({
                        href: window.location.href,
                        filter: e
                    }, "PCODE_DESTROY_CALL", 100), c((function (t) {
                        return t.destroy(e)
                    }))
                }, e
            }();

            function u(e) {
                var t;
                t = e, o ? t(o) : (i || (i = (0, n(86188).w)()).then((function (e) {
                    o = e
                }), n(85225).noop), i.then((function () {
                    t(o)
                }), n(85225).noop))
            }

            function c(e) {
                if (o) return e(o)
            }

            function d(e, t, o) {
                var i, s, c, d, l, f, p, _, v, h, E, g, m, O, A, b, S;
                if (!(0, n(70585).needDisableHit)({window, platform: t.platform, type: t.type})) {
                    var R, y = (0, n(85384).isCustomBannerTypeAndExp)(t.type), I = {
                        type: t.type,
                        markBannerDomNode: t.markBannerDomNode,
                        position: t.position,
                        offset: t.offset
                    };
                    if ("floorAd" === t.type && (0, n(88772).useExperimentFlag)("CHANGE_MAX_HEIGHT_FLOOR_AD_EXP"), y) {
                        var T = (0, n(2868).initRenderDomNodeExp)(I);
                        T && (t.renderTo = T.id, t.renderToDomNode = T.node)
                    } else {
                        var w = (0, n(73150).initRenderDomNode)(I);
                        w && (t.renderTo = w)
                    }
                    t.uniqueId ? R = (0, n(74472).getPlacement)(t.uniqueId) : ((t = r({}, t)).uniqueId = (0, n(66648).generateHexString)(10), t.slotIndex = (0, n(28255).increaseCounter)(), (R = (0, n(74472).registerPlacement)(t.uniqueId)).setCallbacks({
                        onError: t.onError,
                        onClick: t.onClick,
                        onRender: t.onRender,
                        onPreload: t.onPreload,
                        altCallback: t.altCallback || o
                    }), R.setSkipTokenSettings(t.allowRepeatAds), R.setBlockId(t.blockId || ""), R.setContainer(t.renderTo), R.setAdditional({
                        slotIndex: t.slotIndex,
                        posInQueue: 0,
                        isPreload: "preload" === e,
                        disableFullscreenCloseButton: t.disableFullscreenCloseButton
                    }), y && (R.setBannerType(t.type), t.renderToDomNode && R.setContainerDomNode(t.renderToDomNode)));
                    var D = (new Date).getTime() / 1e3;
                    if ((0, n(30289).canMakeRequest)(t.blockId || "", D)) {
                        (0, n(41486).isString)(t.renderData) && (t.renderData = n.lv["json"].parse(t.renderData)), t.extParams && !(0, n(81721).V)(document.location.host) && delete t.extParams;
                        var N = (0, n(44751).parseBlockId)(t.blockId || "");
                        if (N.pageId = N.pageId || t.pageId || null, N.impId = N.impId || t.blockImpId || null, t.renderData ? (0, n(9809).logSSPEvent)("SSP_EXP_RENDER", t.renderData) : "ssp" === t.bundle && t.data && ((0, n(9809).logSSPEvent)("SSP_CTRL_RENDER", t.data), (0, n(9809).logSSPErrorEvent)("SSP_RENDER_INFO", {
                            mode: document.compatMode,
                            html: document.documentElement.innerHTML,
                            href: document.location.href,
                            rawData: t.data,
                            bidreqid: (null === (c = null === (s = t.data) || void 0 === s ? void 0 : s.rtb) || void 0 === c ? void 0 : c.bidreqid) || "",
                            productType: (null === (l = null === (d = t.data) || void 0 === d ? void 0 : d.common) || void 0 === l ? void 0 : l.productType) || "",
                            adIds: null === (p = null === (f = t.data) || void 0 === f ? void 0 : f.settings) || void 0 === p ? void 0 : p.bannerIds,
                            hitLogId: null === (v = null === (_ = t.data) || void 0 === _ ? void 0 : _.eventConfirmationData) || void 0 === v ? void 0 : v.HitLogID
                        }, 1)), R.isValid()) {
                            var C = R.getRenderToElement();
                            if (!C) {
                                var M = 'Container with id "'.concat(R.renderTo, '" is not found (init)');
                                return R.callbacks.triggerError("CONTAINER_NOT_FOUND", M), void n(49874).logger.errorStrict("CONTAINER_NOT_FOUND", {
                                    text: M,
                                    pageId: R.blockId.pageId,
                                    blockId: R.blockId.origin,
                                    renderTo: R.renderTo
                                })
                            }
                            if ((0, n(85914).setMark)(t.uniqueId, n(85914).RenderMarks.AdvManagerLoader), (0, n(74192).initAdSeenObserver)(t.uniqueId, C), (0, n(16429).C)(t), (0, n(1164).Ac)() && (0, n(85914).setMark)(t.uniqueId, n(85914).RenderMarks.ContextJs), t.adSessionId && (0, n(49131).setSessionId)(t.adSessionId), (0, n(64809).saveBundleType)(t.data, t.bundle), (0, n(64809).checkBundleIsSSP)()) {
                                var P = t.renderData || t.data;
                                window.__sspbidreqid = null === (h = null == P ? void 0 : P.rtb) || void 0 === h ? void 0 : h.bidreqid, window.__ssphitlogid = null === (E = null == P ? void 0 : P.eventConfirmationData) || void 0 === E ? void 0 : E.HitLogID, (0, n(16074).J)(P, t.type)
                            }
                            (0, n(56240).setMeta)({
                                flags: null === (m = null === (g = null == t ? void 0 : t.data) || void 0 === g ? void 0 : g.common) || void 0 === m ? void 0 : m.flags,
                                flagsMap: null === (A = null === (O = null == t ? void 0 : t.data) || void 0 === O ? void 0 : O.common) || void 0 === A ? void 0 : A.flagsMap,
                                testIds: null === (S = null === (b = null == t ? void 0 : t.data) || void 0 === b ? void 0 : b.common) || void 0 === S ? void 0 : S.testIds
                            });
                            var L = function (e, i) {
                                void 0 === i && (i = n(85225).noop), (0, n(85914).setMark)(t.uniqueId, n(85914).RenderMarks.DataLoaded), u((function (a) {
                                    (0, n(85914).setMark)(t.uniqueId, n(85914).RenderMarks.AdvManagerLoaded), a.render(r({}, e), o), i()
                                }))
                            };
                            n(49874).logger.configure({
                                labels: {pageId: (0, n(36087).getServiceName)()},
                                data: {blockId: t.blockId, pageId: R.blockId.pageId}
                            }), "exp" !== (0, n(88772).useExperimentFlag)("REVERSE_YS_TEXT_LOAD") && (0, n(78257).b)(C);
                            var x = R.blockId.product;
                            switch (x) {
                                case"R":
                                case"N":
                                case"D":
                                    !function (e, t) {
                                        var r = "".concat(e.blockId, "#").concat(e.pageNumber || "");
                                        r in a || (a[r] = new (n(60091).b)), a[r].setConfig(e), t(a[r])
                                    }(t, (function (e) {
                                        e.loadData((function (e, t) {
                                            var r = (0, n(45815).a)(e);
                                            !r || (n(49874).logger.errorStrict("RESPONSE_MISMATCH_BANNER_CFG", {
                                                text: r,
                                                pageId: R.blockId.pageId,
                                                blockId: R.blockId.origin,
                                                renderTo: R.renderTo
                                            }), (0, n(63607).isMobile)() && "exp" !== (0, n(88772).useExperimentFlag)("USE_FS_MOBILE_BANNER_MISMATCH_CHECKING")) ? R.additionals.isPreload ? ((0, n(26413).isFunction)(t) && t(), "fullscreen" === e.type ? L(e) : R.callbacks.triggerOnPreload((function () {
                                                L(e)
                                            }))) : L(e, t) : null == R || R.callbacks.triggerError("RESPONSE_MISMATCH_BANNER_CFG", r)
                                        }))
                                    }));
                                    break;
                                case"Y":
                                    L(t);
                                    break;
                                default:
                                    M = 'Block type "'.concat(x, '" is not supported');
                                    R.callbacks.triggerError("UNKNOWN_BLOCK_TYPE", M), n(49874).logger.errorStrict("UNKNOWN_BLOCK_TYPE", {
                                        text: M,
                                        blockId: t.blockId
                                    })
                            }
                        } else (0, n(74472).destroyPlacement)(t.uniqueId)
                    } else null === (i = null == R ? void 0 : R.callbacks) || void 0 === i || i.triggerAltCallback()
                }
            }

            t.C = s
        }, 76079: (e, t, n) => {
            "use strict";
            t.c = void 0, t.c = function () {
                var e = (0, n(38710).getYa)();
                void 0 === e.codeVer && (e.codeVer = 679108, (0, n(56240).getUaasConfig)(), (0, n(40817).nH)("Loader version: ".concat(679108), "codever"), (0, n(40817).nH)("Adb: ".concat(!1), "adb"))
            }
        }, 60572: (e, t, n) => {
            "use strict";
            t.A = void 0;
            var r,
                o = ["preload", "render", "renderWidget", "getSkipToken", "getCapturedCount", "getAdSessionId", "getBlocks", "destroy"];
            t.A = function () {
                if (!r) {
                    r = new (n(99057).C);
                    for (var e = {}, t = 0, i = function () {
                        var i = o[t++];
                        e[i] = (0, n(12251).protect)("".concat(n(12251).ProtectedNames.AdvManager, ".").concat(i), (function () {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            return r[i].apply(r, e)
                        }))
                    }; t < o.length;) i();
                    (0, n(38710).getYaContext)()["AdvManager"] = e
                }
            }
        }, 40755: (e, t, n) => {
            "use strict";
            t.jI = t.xD = void 0, t.xD = ["yandexContextSyncCallbacks", "yandex_context_callbacks", "yandexContextAsyncCallbacks", "yaContextCb"];
            var r = function () {
                function e(e, t) {
                    this.queueId = t, (0, n(85200).isArray)(e) || (e = []), this.push.apply(this, e)
                }

                return e.prototype.push = function () {
                    for (var e = this, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                    t.length && (0, n(55220).X0)(this.queueId);
                    var o = (0, n(38710).getYaContext)(), i = o._load_callbacks || o._callbacks;
                    (0, n(15137).forEach)(t, (function (t) {
                        try {
                            t.queueName = e.queueId
                        } catch (e) {
                            (0, n(85225).noop)()
                        }
                        i.push(t)
                    })), setTimeout((function () {
                        o.processCallbacks()
                    }))
                }, e
            }();
            t.jI = function (e) {
                void 0 === e && (e = window);
                for (var o = function (o) {
                    var i = t.xD[o], a = e[i];
                    if ((0, n(55220).ji)(i), !(a instanceof r)) {
                        var s = new r(a, i);
                        Object.defineProperty(e, i, {
                            set: function (t) {
                                s.push.apply(s, t), e[i] !== t && console.warn("\u041f\u0435\u0440\u0435\u043f\u0440\u0438\u0441\u0432\u0430\u0438\u0432\u0430\u0442\u044c window.".concat(i, " \u043e\u043f\u0430\u0441\u043d\u043e"))
                            }, get: function () {
                                return s
                            }
                        })
                    }
                }, i = 0; i < t.xD.length; i++) o(i)
            }
        }, 25479: (e, t, n) => {
            "use strict";
            t.Q = void 0;
            t.Q = function () {
                var e, t = (0, n(38710).getYaContext)(), r = t._load_callbacks ? "_load_callbacks" : "_callbacks";
                t.processCallbacks = (0, n(12251).protect)("Ya.context.".concat(r), (e = r, function () {
                    for (var t = (0, n(38710).getYaContext)(), r = 0; r < t[e].length; r++) (0, n(12251).protect)("Ya.context.".concat(e, "_call"), t[e][r])();
                    t[e] = []
                }))
            }
        }, 73150: (e, t, n) => {
            "use strict";
            var r = function () {
                return r = Object.assign || function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, r.apply(this, arguments)
            };
            Object.defineProperty(t, "__esModule", {value: !0}), t.initRenderDomNode = t.getRenderDomNodeForFullscreen = void 0;
            var o = {}, i = {fullscreen: n(93420).d - 2, floorAd: n(93420).d - 4}, a = function (e) {
                var t = e.type, a = e.markBannerDomNode, s = o[t];
                if (s) {
                    var u = s.outerNode, c = s.renderNode;
                    if (u && u.parentElement) return c
                }
                var d = function (e) {
                    var t = e.type, o = e.offset, a = e.position, s = document.createElement("DIV"),
                        u = document.createElement("DIV");
                    u.id = "fa".concat((0, n(66648).generateHexString)(8));
                    var c, d = "floorAd" === t, l = (0, n(50102).normalizePosition)(a),
                        f = (0, n(57003).normalizeOffset)(o),
                        p = d ? (0, n(50102).getFloorAdBannerStyles)(l) : {width: "100%", height: "100%"};
                    switch ((0, n(12139).setStyle)(u, p, !0), t) {
                        case"floorAd":
                            var _ = (0, n(57003).getFloorAdOuterNodeSize)(l), v = _.height, h = _.width;
                            c = {height: "".concat(v, "px"), width: "".concat(h, "px")};
                            break;
                        case"fullscreen":
                            var E = (0, n(16714).PN)({
                                screenHeight: window.innerHeight,
                                screenWidth: window.innerWidth,
                                isMobile: (0, n(63607).isMobile)()
                            });
                            h = E.width, v = E.height, c = {width: "".concat(h, "px"), height: "".concat(v, "px")}
                    }
                    return (0, n(12139).setStyle)(s, r(r({
                        position: "fixed",
                        left: 0,
                        right: 0,
                        bottom: "-".concat(c.height),
                        "z-index": i[t] || n(93420).d,
                        "line-height": "initial"
                    }, d ? (0, n(50102).getOuterContainerFloorAdStyles)(l, f) : {}), c), !0), s.append(u), document.body.appendChild(s), {
                        outerNode: s,
                        renderNode: u
                    }
                }(e);
                o[t] = d;
                var l = d.renderNode, f = d.outerNode;
                return a && f.setAttribute("data-banner-dom-node", a), l
            };
            t.getRenderDomNodeForFullscreen = function (e) {
                return a({type: "fullscreen", markBannerDomNode: e.markBannerDomNode})
            };
            t.initRenderDomNode = function (e) {
                var t = e.type;
                return (0, n(85384).isCustomBannerType)(t) ? a(r(r({}, e), {type: t})).id : null
            }
        }, 2868: (e, t, n) => {
            "use strict";
            var r = function () {
                return r = Object.assign || function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, r.apply(this, arguments)
            };
            Object.defineProperty(t, "__esModule", {value: !0}), t.initRenderDomNodeExp = t.getRenderDomNodeForFullscreenExp = t.getRenderDomNode = void 0;
            var o = {}, i = {fullscreen: n(93420).d - 2, floorAd: n(93420).d - 4};
            t.getRenderDomNode = function (e) {
                var t = e.type, a = e.markBannerDomNode, s = o[t];
                if (s) {
                    var u = s.outerNode, c = s.renderNode, d = s.shadowDomNode, l = (0, n(53945).hasShadowDomSupport)();
                    if (l && d && d.parentElement || !l && u && u.parentElement) return c
                }
                var f = function (e) {
                    var t, o = e.type, a = e.position, s = e.offset, u = document.createElement("DIV");
                    u.attachShadow({mode: "open"});
                    var c = document.createElement("DIV"), d = document.createElement("DIV");
                    d.id = "fa".concat((0, n(66648).generateHexString)(8));
                    var l, f = "floorAd" === o, p = (0, n(50102).normalizePosition)(a),
                        _ = (0, n(57003).normalizeOffset)(s),
                        v = f ? (0, n(50102).getFloorAdBannerStyles)(p) : {width: "100%", height: "100%"};
                    switch ((0, n(12139).setStyle)(d, v, !0), o) {
                        case"floorAd":
                            var h = (0, n(57003).getFloorAdOuterNodeSize)(p), E = h.height, g = h.width;
                            l = {height: "".concat(E, "px"), width: "".concat(g, "px")};
                            break;
                        case"fullscreen":
                            var m = (0, n(16714).PN)({
                                screenHeight: window.innerHeight,
                                screenWidth: window.innerWidth,
                                isMobile: (0, n(63607).isMobile)()
                            });
                            g = m.width, E = m.height, l = {width: "".concat(g, "px"), height: "".concat(E, "px")}
                    }
                    return (0, n(12139).setStyle)(c, r(r({
                        position: "fixed",
                        left: 0,
                        right: 0,
                        bottom: "-".concat(l.height),
                        "z-index": i[o] || n(93420).d,
                        "line-height": "initial"
                    }, f ? (0, n(50102).getOuterContainerFloorAdStyles)(p, _) : {}), l), !0), c.append(d), (0, n(53945).hasShadowDomSupport)() ? (document.body.appendChild(u), null === (t = u.shadowRoot) || void 0 === t || t.appendChild(c)) : document.body.appendChild(c), {
                        outerNode: c,
                        renderNode: d,
                        shadowDomNode: u
                    }
                }(e);
                o[t] = f;
                var p = f.renderNode, _ = f.outerNode;
                return a && _.setAttribute("data-banner-dom-node", a), p
            };
            t.getRenderDomNodeForFullscreenExp = function (e) {
                return (0, t.getRenderDomNode)({type: "fullscreen", markBannerDomNode: e.markBannerDomNode})
            };
            t.initRenderDomNodeExp = function (e) {
                var o = e.type;
                if (!(0, n(85384).isCustomBannerTypeAndExp)(o)) return null;
                var i = (0, t.getRenderDomNode)(r(r({}, e), {type: o}));
                return {id: i.id, node: i}
            }
        }, 3530: (e, t, n) => {
            "use strict";
            t.i = void 0, t.i = function (e) {
                var t = e.getAttribute("id");
                return t || (t = "id" + (0, n(66648).generateHexString)(8), e.setAttribute("id", t)), t
            }
        }, 23449: (e, t, n) => {
            "use strict";
            t.b = void 0, t.b = function (e) {
                var t = (0, n(59020).R)(e);
                if ((0, n(85200).isArray)(t) && (t = t[0]), !t) try {
                    t = document.querySelector(e)
                } catch (e) {
                }
                return t ? (0, n(3530).i)(t) : e
            }
        }, 13691: (e, t, n) => {
            "use strict";
            t.n = void 0, t.n = function () {
                var e = window.yaads, t = window.yaads && window.yaads.destroy;
                if (!(0, n(85200).isArray)(window.yaads) && window.yaads || (window.yaads = {}, window.yaads.version = "v1", window.yaads.useExperimentFlag = n(88772).useExperimentFlag), window.yaads.push = function (e) {
                    e.method = "renderWidget", Ya.Context.AdvManager.renderWidget(e)
                }, window.yaads.destroy = function (e) {
                    if ((0, n(41486).isString)(e)) {
                        var r = (0, n(23449).b)(e);
                        (0, n(26413).isFunction)(t) && t.call(window.yaads, e), Ya.Context.AdvManager.destroy({renderTo: r})
                    }
                }, (0, n(85200).isArray)(e)) for (var r = 0; r < e.length; r++) window.yaads.push(e[r])
            }
        }, 10974: (e, t, n) => {
            "use strict";

            function r(e) {
                var t = e.onError || e.reject;
                return (0, n(26413).isFunction)(e.altCallback) ? e.altCallback : (0, n(26413).isFunction)(t) ? function () {
                    t({message: "Meta has no items", code: "noItemsForWidget", details: {clientError: !0}})
                } : void 0
            }

            function o(e) {
                return "".concat(e, "_1")
            }

            Object.defineProperty(t, "__esModule", {value: !0}), t.getWidgetPageNumber = t.prepareWidgetConfig = void 0, t.prepareWidgetConfig = function (e) {
                var t = (0, n(23449).b)(e.renderTo || e.render || ""), i = e.blockId || e.id || "";
                return 2 === i.split("-").length && (i = "N-I-".concat(i)), "C" === i[0] && (i = i.replace("C", "N")), {
                    renderTo: t,
                    blockId: i,
                    pageNumber: e.pageNumber || o(t),
                    cspNonce: e.cspNonce || e.nonce,
                    onRender: e.onRender || e.success,
                    onError: e.onError || e.reject,
                    onHide: e.onHide || e.hide,
                    nativeAdditionalClasses: e.nativeAdditionalClasses || e.additionalClasses || e.classes,
                    darkTheme: e.darkTheme,
                    method: e.method || "",
                    statId: e.statId,
                    extParams: e.extParams,
                    data: e.data,
                    onClick: e.onClick,
                    clickMacro: e.clickMacro,
                    disableRefresh: e.disableRefresh || void 0,
                    altCallback: r(e)
                }
            }, t.getWidgetPageNumber = o
        }, 21760: (e, t, n) => {
            "use strict";
            t.Z = void 0;
            t.Z = function () {
                var e = (0, n(38710).getYa)();
                e.Context || (e.Context = (0, n(38710).initYaContext)()), e.Direct || (e.Direct = (0, n(38710).initYaDirect)())
            }
        }, 37960: (e, t, n) => {
            "use strict";
            t.B = void 0;
            var r = {
                yastaticAdfox: "yastatic.net/pcode/adfox/loader.js",
                yastaticContext: "yastatic.net/pcode/context.js",
                anYandexAdfox: /an\.yandex\.[a-z]+\.?[a-z]{0,3}\/system\/adfox\.js/gi,
                anYandexContext: /an\.yandex\.[a-z]+\.?[a-z]{0,3}\/system\/context\.js/gi,
                anYandexWidget: /an\.yandex\.[a-z]+\.?[a-z]{0,3}\/system\/widget\.js/gi,
                yandexAdfox: /yandex\.[a-z]+\.?[a-z]{0,3}\/ads\/system\/adfox\.js/gi,
                yandexContext: /yandex\.[a-z]+\.?[a-z]{0,3}\/ads\/system\/context\.js/gi,
                yandexWidget: /yandex\.[a-z]+\.?[a-z]{0,3}\/ads\/system\/widget\.js/gi,
                adb: /yandex\.ru\/appcry\/.*/gi,
                tst: /hamster.yandex.ru\/pcode/gi,
                tst2: /yastatic.net\/partner-code-bundles\/pcode-beta\//
            };
            "exp" === (0, n(88772).useExperimentFlag)("CHECK_RELOAD_STAT") && (delete r["anYandexWidget"], delete r["yandexWidget"]), t.B = r
        }, 96125: (e, t, n) => {
            "use strict";
            t.f = void 0, t.f = function (e) {
                for (var t in n(37960).B) {
                    var r = n(37960).B[t];
                    if ((0, n(41486).isString)(r) && e.indexOf(r) > -1) return !1;
                    if (null !== e.match(r)) return !1
                }
                return !0
            }
        }, 16429: (e, t, n) => {
            "use strict";
            t.C = void 0;
            t.C = function (e) {
                var t = e.type;
                "fullscreen" === t && "exp" === (0, n(88772).useExperimentFlag)("EARLY_LOADING_FULLSCREEN_CONTROLLER") && (0, n(57354).loadNewFullscreenController)(), "floorAd" === t && "exp" === (0, n(88772).useExperimentFlag)("EARLY_LOADING_FLOOR_AD_CONTROLLER") && (0, n(12890).loadFloorAdController)()
            }
        }, 16074: (e, t, n) => {
            "use strict";
            t.J = void 0, t.J = function (e, t) {
                if (Math.random() < .1) {
                    var r = function (e) {
                            var t, r, o = null == e ? void 0 : e.settings;
                            if (o) {
                                var i = (0, n(10407).getObjectKeys)(o);
                                return {
                                    width: null === (t = o[i[0]]) || void 0 === t ? void 0 : t.width,
                                    height: null === (r = o[i[0]]) || void 0 === r ? void 0 : r.height
                                }
                            }
                        }(e), o = Math.max(0, Math.round(window.innerWidth)),
                        i = Math.max(0, Math.round(window.innerHeight)), a = r ? parseInt(r.height, 10) : -1e3,
                        s = r ? parseInt(r.width, 10) : -1e3;
                    (0, n(9809).logSSPEvent)("SSP_WRONG_SIZE_SETTINGS", e, {
                        href: window.location.href,
                        hasSettings: Boolean(r),
                        answer: n.lv["json"].stringify(e),
                        winWidth: o,
                        winHeight: i,
                        pixelRatio: window.devicePixelRatio,
                        sspWidth: s,
                        sspHeight: a,
                        sspOrigWidth: (null == r ? void 0 : r.width) || "---",
                        sspOrigHeight: (null == r ? void 0 : r.height) || "---",
                        customType: t || "common",
                        sizeProblem: s !== o || a !== i ? "yes" : "no",
                        logVersion: "v4",
                        ua: navigator.userAgent
                    })
                }
            }
        }, 73133: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.setVersionForVas = void 0, t.setVersionForVas = function () {
                var e = function () {
                    var e = window;
                    return e.ya = e.ya || {}, e.ya.videoAd = e.ya.videoAd || {}, e.ya.videoAd.statsRootParams = e.ya.videoAd.statsRootParams || {}, e.ya.videoAd.statsRootParams.vsid = n(24440).VSID, e
                }();
                e.ya.videoAd.statsRootParams.pcodeVersion = String(679108), e.ya.videoAd.statsRootParams.adfoxVersion = String(679108)
            }
        }, 28255: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.increaseCounter = void 0;
            var r = "slotCounter";
            t.increaseCounter = function () {
                var e = function () {
                    var e = (0, n(38710).getGlobalVariable)(r);
                    return void 0 === e ? ((0, n(38710).setGlobalVariable)(r, 0), 0) : e
                }() + 1;
                return (0, n(38710).setGlobalVariable)(r, e), e
            }
        }, 45815: (e, t, n) => {
            "use strict";
            t.a = void 0;
            t.a = function (e) {
                var t = e.type, r = e.data, o = e.platform, i = e.blockId;
                if (r && !(0, n(14573).Q)(window, ["pi", "piHermione"])) {
                    var a = (0, n(3164).getSettings)(r);
                    if (a) {
                        var s = Boolean(a.fullscreen), u = "fullscreen" === t, c = Boolean(a.allowDesktopFullscreen);
                        if (!s && u) return 'The received format doesn\'t match the expected type "fullscreen" for blockId: "'.concat(i, '"');
                        if (s) if ("adaptive0418" === a.name) {
                            if (!n(50880).isMobile) return 'Can\'t render "adaptive0418" format in fullscreen for desktops for blockId: "'.concat(i, '"')
                        } else {
                            if (!u) return 'The received "fullscreen" format doesn\'t match the expected type for blockId: "'.concat(i, '"');
                            if ("desktop" === o && !c) return 'The received "fullscreen" not allowed for desktops devices for blockId: "'.concat(i, '"');
                            if ("touch" === o && c) return 'The received "fullscreen" not allowed for touch devices for blockId: "'.concat(i, '"')
                        }
                    }
                }
            }
        }, 74297: (e, t, n) => {
            "use strict";
            var r;
            t.W = void 0, r = n(60551);
            var o = function () {
                function e() {
                    this.initialized = !1, this.savedMsgs = []
                }

                return e.prototype.init = function () {
                    var e = this;
                    return this.initialized || (this.initialized = !0, this.initPromise = new Promise((function (t, o) {
                        r((function (r) {
                            var o = (0, n(56240).getUaasConfig)();
                            e.logger = new r["default"], e.logger.initErrors({
                                project: "pcode",
                                version: String((0, n(30107).getCodeVersion)()),
                                env: (0, n(17970).d)(),
                                reqid: (0, n(49131).getSessionId)(),
                                platform: n(64029).isTouchDevice ? "touch" : "desktop",
                                blocker: !1,
                                additional: {bundle: "default", vasVersion: (0, n(30107).getVasVersion)()},
                                slots: o.testIds ? o.testIds.split(";") : void 0,
                                throttleSend: 0,
                                uncaughtException: !1,
                                unhandledRejection: !1,
                                preventError: !1
                            }), e.savedCfg && e.config(e.savedCfg), e.savedMsgs.forEach((function (t) {
                                return e.log(t)
                            })), delete e.savedCfg, e.savedMsgs = [], t(e)
                        }), (function (t) {
                            e.initialized = !1, o(t)
                        }))
                    }))), this.initPromise
                }, e.prototype.config = function (e) {
                    this.logger ? this.logger.updateErrors({
                        page: e.labels.pageId || void 0,
                        additional: {bundle: "default", pageId: e.data && e.data.pageId}
                    }) : this.savedCfg = e
                }, e.prototype.log = function (e) {
                    if (!this.logger) return this.savedMsgs.push(e), void this.init()["catch"](n(85225).noop);
                    var t = {type: e.namespace, level: "WARNING" === e.type ? "warn" : "error"}, r = e.additional,
                        o = (0, n(88772).getAllActiveTestIds)();
                    o && ((r = r || {}).activeTestIds = o), (window.__sspbidreqid || window.__ssphitlogid) && ((r = r || {}).sspbidreqid = window.__sspbidreqid, r.ssphitlogid = window.__ssphitlogid), r && (t.additional = r), this.logger.logError(t, e.error)
                }, e
            }();
            t.W = o
        }, 80135: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.GogolLogger = t.DEFAULT_GOGOL_EVENT_PROBABILITY = t.STATS_LOG_URL = void 0, t.STATS_LOG_URL = "https://log.strm.yandex.ru/log";
            t.DEFAULT_GOGOL_EVENT_PROBABILITY = .01;
            var r = function () {
                function e(e) {
                    this.params = e
                }

                return e.prototype.config = function (e) {
                    this.loggerConfig = e
                }, e.prototype.logGogolEvent = function (e) {
                    var r = e.name, o = e.probability, i = void 0 === o ? t.DEFAULT_GOGOL_EVENT_PROBABILITY : o,
                        a = this.params, s = a.version, u = a.vsid, c = a.rnd;
                    if (c < i && !(0, n(91208).isLightHouse)()) {
                        var d = "".concat(t.STATS_LOG_URL, "?PCODE=").concat(s, "&event=").concat(r), l = e, f = l.data,
                            p = l.values, _ = l.sensors, v = l.dailySensors, h = _ && (0, n(80908).O)(_, (function (e) {
                                return "boolean" == typeof e ? String(e) : e
                            })), E = v && (0, n(80908).O)(v, (function (e) {
                                return "boolean" == typeof e ? String(e) : e
                            })), g = (0, n(56240).getUaasConfig)().testIds,
                            m = (0, n(607).isNonEmptyString)(g) ? g.split(";").map((function (e) {
                                return Number(e.split(",")[0])
                            })).filter(n(25021).isPositiveFiniteNumber) : [];
                        (0, n(42180).W)({
                            method: "POST",
                            url: d,
                            data: n.lv["json"].stringify({
                                eventType: "event",
                                service: "VAS",
                                version: s,
                                vsid: u,
                                data: f,
                                timestamp: Number(new Date),
                                referrer: document.referrer,
                                location: (0, n(88521).getHref)(),
                                vasVersion: (0, n(30107).getVasVersion)(),
                                isVideoADB: !1,
                                eventName: r,
                                sensors: h,
                                dailySensors: E,
                                values: p,
                                rnd: c,
                                loggerConfig: this.loggerConfig,
                                slots: g,
                                testIds: m,
                                isSsp: (0, n(64809).checkBundleIsSSP)()
                            })
                        })
                    }
                }, e
            }();
            t.GogolLogger = r
        }, 88674: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0})
        }, 98637: (e, t, n) => {
            "use strict";
            t.QC = t.uG = t.YQ = t.iN = t.bv = t.oD = void 0, t.oD = "x", t.bv = 44, t.iN = 4, t.YQ = 10, t.uG = "VAS";
            var r = function (e) {
                return (0, n(84527).padLeft)(String(e % Math.pow(10, t.iN)), t.iN, "0")
            };
            t.QC = function (e) {
                return void 0 === e && (e = (0, n(30107).getCodeVersion)()), [(0, n(66648).generateHexString)(t.bv), t.uG, r(e), (0, n(84527).padLeft)(Date.now().toString().slice(0, t.YQ), t.YQ, "0")].join(t.oD)
            }
        }, 24440: (e, t, n) => {
            "use strict";
            var r = Object.create ? function (e, t, n, r) {
                void 0 === r && (r = n);
                var o = Object.getOwnPropertyDescriptor(t, n);
                o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                    enumerable: !0,
                    get: function () {
                        return t[n]
                    }
                }), Object.defineProperty(e, r, o)
            } : function (e, t, n, r) {
                void 0 === r && (r = n), e[r] = t[n]
            }, o = function (e, t) {
                for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
            };
            Object.defineProperty(t, "__esModule", {value: !0}), o(n(88674), t), o(n(80135), t), o(n(59835), t)
        }, 59835: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.VSID = void 0, t.VSID = (0, n(98637).QC)()
        }, 28871: (e, t, n) => {
            "use strict";

            function r() {
                return n(42288).iR
            }

            Object.defineProperty(t, "__esModule", {value: !0}), t.logger = t.LOGGER_DEFAULT_PORTION = t.isDevelopBuild = void 0, t.isDevelopBuild = r;
            var o = Math.random();
            t.LOGGER_DEFAULT_PORTION = 1, function (e) {
                var t = new (n(24440).GogolLogger)({
                    version: "pcode_".concat((0, n(30107).getCodeVersion)()),
                    vsid: n(24440).VSID,
                    rnd: o
                }), i = new (n(94632).M), a = new (n(74297).W), s = new (n(98568).W), u = !0;

                function c(e, t, r, o) {
                    return "string" == typeof t && (t = new Error(t), r || (r = "remoteLogString")), {
                        namespace: r,
                        version: (0, n(30107).getCodeVersion)(),
                        type: e,
                        additional: o,
                        error: t
                    }
                }

                function d(t, n) {
                    e.debug("REMOTE_LOG: ".concat(n || "", " "), t)
                }

                function l(e) {
                    return function (t, o, s, l) {
                        if (u) {
                            var f = c(e, t, o, s), p = l || 25;
                            if (r()) return d(f), void console.error(f.error);
                            (0, n(14415).isPercent)(p) && a.log(f), i.log(f)
                        }
                    }
                }

                (0, n(98489).NG)((function () {
                    u = !1
                })), e.errorStrict = function (e, t) {
                    if (u) {
                        var o = c("ERROR", e, "", t),
                            s = (0, n(41486).isString)(e) && e in n(58233).sH ? n(58233).sH[e] : 25;
                        if (r()) return d(o), void console.error(o.error);
                        (0, n(14415).isPercent)(s) && a.log(o), i.log(o)
                    }
                }, e.error = l("ERROR"), e.warn = l("WARNING"), e.logGogolEvent = function (o) {
                    if (r()) {
                        var i = o, a = i.data, s = i.sensors, u = i.values, c = i.dailySensors,
                            d = o.probability || n(24440).DEFAULT_GOGOL_EVENT_PROBABILITY;
                        e.debug("logGogolEvent=[".concat(o.name, "] probability=[").concat(d, "]"), {
                            data: a,
                            sensors: s,
                            values: u,
                            dailySensors: c
                        })
                    } else t.logGogolEvent(o)
                }, e.debug = r() ? function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    return console.warn.apply(console, e)
                } : n(85225).noop, e.traceLog = function (e, t, o) {
                    r() ? d(e, t) : ("string" == typeof e && (e = {msg: e}), (0, n(14415).isPercent)(o || 1) && s.sendCsrEvent({
                        data: e,
                        name: t,
                        version: String((0, n(30107).getCodeVersion)())
                    }))
                }, e.configure = function (e) {
                    t.config(e), a.config(e)
                }, e.pc = function () {
                    return (0, n(14415).isPercent)(0)
                }
            }(t.logger || (t.logger = {}))
        }, 94632: (e, t, n) => {
            "use strict";
            t.M = void 0;
            var r = function () {
                function e() {
                }

                return e.prototype.log = function (e) {
                    if ((0, n(14415).isPercent)(1)) {
                        var t = {};
                        t[e.version] = {}, t[e.version][e.namespace] = {}, t[e.version][e.namespace][e.error.name] = e.error, (0, n(48289).r)().then((function (e) {
                            e.hit(window.location.href, {params: t})
                        }))
                    }
                }, e
            }();
            t.M = r
        }, 98568: (e, t, n) => {
            "use strict";
            var r = function () {
                return r = Object.assign || function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, r.apply(this, arguments)
            };
            t.W = void 0;
            var o = function () {
                function e(e) {
                    void 0 === e && (e = {}), this.defaultData = e
                }

                return e.prototype.clearDefaultSsrData = function () {
                    this.defaultData = {}
                }, e.prototype.sendCsrEvent = function (e) {
                    if ((0, n(7153).isObject)(e)) {
                        var t = r(r(r({}, this.defaultData), e), {is_ssr: !1, unixtime: this.getUnixtime()});
                        this.sendEvent(t)
                    }
                }, e.prototype.sendEvent = function (e) {
                    var t = {method: "POST", url: "//yandex.ru/ads/trace", data: this.prepareData(e)};
                    (0, n(42180).W)(t)
                }, e.prototype.getUnixtime = function () {
                    return Math.floor(Date.now() / 1e3)
                }, e.prototype.undefinedToNull = function (e) {
                    return (0, n(38715).forOwn)(e, (function (t, n) {
                        void 0 === e[n] && (e[n] = null)
                    })), e
                }, e.prototype.prepareData = function (e) {
                    var t = this.undefinedToNull(e);
                    return n.lv["json"].stringify(t).replace(/\\n/g, "\\$&") + "\n"
                }, e
            }();
            t.W = o
        }, 28274: (e, t, n) => {
            "use strict";

            function r(e) {
                n(6382)((function (t) {
                    e(t.logger)
                }))
            }

            Object.defineProperty(t, "__esModule", {value: !0}), t.traceLog = t.warn = t.error = t.errorStrict = void 0, t.errorStrict = function (e, t) {
                r((function (n) {
                    n.errorStrict(e, t)
                }))
            }, t.error = function (e, t, n, o) {
                r((function (r) {
                    r.error(e, t, n, o)
                }))
            }, t.warn = function (e, t, n, o) {
                r((function (r) {
                    r.warn(e, t, n, o)
                }))
            }, t.traceLog = function (e, t, n) {
                r((function (r) {
                    r.traceLog(e, t, n)
                }))
            }
        }, 49874: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.logger = void 0, t.logger = n(28871).logger
        }, 55991: (e, t, n) => {
            "use strict";
            t.G = void 0;
            t.G = function (e) {
                return Number(new Date) > 1675855323162 ? n(27265).T.OLD_BUILD : e
            }
        }, 62236: (e, t, n) => {
            "use strict";
            var r, o = (r = function (e, t) {
                return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }, r(e, t)
            }, function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function n() {
                    this.constructor = e
                }

                r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }), i = function () {
                return i = Object.assign || function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, i.apply(this, arguments)
            };
            t.T = void 0;
            var a = function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }

                return o(t, e), t.prototype.getTemplate = function () {
                    return [[4, "marker"], [4, "renderedBannersAmount"], [1, "isTurbo"], [1, "advancedFormat"], [6, "format"], [1, "isIframe"], [1, "isHover"], [1, "isRefreshed"], [1, "isSSP"], [2, "layout"], [7, "userGroup"], [1, "isApp"], [1, "hasMraid"], [1, "isFullscreen"], [1, "isCarousel"], [1, "isFloorAd"], [2, null], [1, "honeypot"], [1, null], [1, "amp"], [10, "codeVer"], [1, "adblock"], [1, "isAdaptiveAd"], [1, "canBeAdaptiveAd"], [1, null]]
                }, t.prototype.defaults = function () {
                    return i({
                        marker: (0, n(55991).G)(n(27265).T.DIRECT),
                        adblock: !1,
                        amp: n(73266).isAMP,
                        isIframe: (0, n(13058).isInIframe)(window),
                        hasMraid: (0, n(88536).R)(),
                        isTurbo: (0, n(29935).isTurboPage)(),
                        isSSP: (0, n(64809).checkBundleIsSSP)()
                    }, (0, n(88772).useExperimentFlag)("IGNORE_VERSION_IN_TESTTAG_17863") ? {} : {codeVer: (0, n(30107).getRevisionNo)()})
                }, t
            }(n(42726).f);
            t.T = a
        }, 98496: (e, t, n) => {
            "use strict";
            var r, o = (r = function (e, t) {
                return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }, r(e, t)
            }, function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function n() {
                    this.constructor = e
                }

                r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }), i = function () {
                return i = Object.assign || function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, i.apply(this, arguments)
            };
            t.a = void 0;
            var a = function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }

                return o(t, e), t.prototype.getTemplate = function () {
                    return [[4, "marker"], [6, null], [1, "isIframe"], [1, "isApp"], [1, "isSSP"], [1, null], [1, "isFullscreen"], [1, "hasMraid"], [1, "isFloorAd"], [19, null], [1, "honeypot"], [1, null], [1, "amp"], [10, "codeVer"], [1, "adblock"], [3, null]]
                }, t.prototype.defaults = function () {
                    return i({
                        marker: (0, n(55991).G)(n(27265).T.RTB),
                        adblock: !1,
                        amp: n(73266).isAMP,
                        isIframe: (0, n(13058).isInIframe)(window),
                        hasMraid: (0, n(88536).R)(),
                        isSSP: (0, n(64809).checkBundleIsSSP)()
                    }, (0, n(88772).useExperimentFlag)("IGNORE_VERSION_IN_TESTTAG_17863") ? {} : {codeVer: (0, n(30107).getRevisionNo)()})
                }, t
            }(n(42726).f);
            t.a = a
        }, 6645: (e, t, n) => {
            "use strict";
            t.M = void 0;
            var r, o = n(67028), i = n(21625), a = n(91709), s = n(39701), u = n(19024), c = n(79287), d = n(49820),
                l = n(15137), f = n(38179), p = n(71238), _ = n(62763), v = n(28377), h = n(33586), E = n(3796),
                g = (r = n(31144)) && r.__esModule ? r : {default: r}, m = n(35235), O = n(43), A = n(22501),
                b = n(66038), S = n(4190), R = n(388), y = n(75539), I = n(98601), T = n(11959), w = n(80511),
                D = n(10505), N = n(78322), C = n(10439), M = n(73133), P = n(70709), L = n(88772), x = n(22027),
                B = n(28274), k = n(74192), F = n(57354), j = n(74351), H = function (e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {default: e};
                    var n = Z(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e) if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                        a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i]
                    }
                    r["default"] = e, n && n.set(e, r);
                    return r
                }(n(29916)), W = n(12890), U = n(53684), Y = n(84304), V = n(73150), G = n(5989), z = n(67729),
                X = n(95456), q = n(70585), K = n(7386);

            function Z(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap, n = new WeakMap;
                return (Z = function (e) {
                    return e ? n : t
                })(e)
            }

            function $(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Q(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? $(Object(n), !0).forEach((function (t) {
                        J(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function J(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            var ee = null, te = null;

            function ne() {
                var e;
                return ((0, K.isHermione)() && null != (e = window) && e.location && !(0, K.isReleaseTestSuite)() ? "//" + window.location.host : P.AN_YANDEX_STATIC_DOMAIN) + "/adfox"
            }

            var re = ["slide", "visibleAfterInit", "insertAfter", "insertPosition", "stick", "stickTo", "stickyColorScheme", "replayMode", "preload"],
                oe = [].concat(re), ie = function () {
                    return (new Date).getTime()
                }, ae = 1;

            function se(e, t) {
                var n;
                this._isDestroyed = !1, this._isTurbo = (0, h.isAdfoxPageTurbo)(window), this._turboPageUrl = t.turbo_original_url, this._useXhr = !0, this._win = e, this._doc = e.document, this._loc = e.location, this._params = t.params || {}, this._extParams = t.extParams, this._clickMacro = t.clickMacro, this._domain = t.customDomain || ne(), this._ownerId = t.ownerId, this._data = t.data, this._darkTheme = Boolean(t.darkTheme), this._containerId = t.containerId, this._pr1 = (0, m.generatePr)(), this._dt = new Date, this._bid = t.bid, this._useProtectMode = !(0, _.isInSafeframe)(this._win) && (t.useProtectMode || this._isTurbo), this._cspNonce = t.cspNonce, this._bannerId = t.bannerId, this._lastBannerName, this._resetCount = 0, this._errorsLog = [], this._reloadCounter = t.reloadCounter || 0, this._slotNumber = t.slotNumber || -1, this._insertionCodeParams = t.insertionCodeParams || {}, this._headers = (0, D.prepareCustomHeaders)(t.headers), this._methodCall = t.methodCall, this._isPreload = t.isPreload, this._type = t.type, this._isFullscreen = "fullscreen" === t.type, this._isFloorAd = "floorAd" === t.type || "floor ad" === t.type, this._platform = t.platform, this._container = t.container, this._fullscreenBannerBlacklist = t.fullscreenBannerBlacklist, this._position = t.position, this._offset = t.offset, this._layoutConfig = void 0, this._isFloorAd || (this._layoutConfig = t.layoutConfig), (this._isFloorAd || this._isFullscreen) && (this._container = (0, G.getElementById)((0, V.initRenderDomNode)({
                    type: this._isFloorAd ? "floorAd" : "fullscreen",
                    markBannerDomNode: t.markBannerDomNode,
                    position: this._position,
                    offset: this._offset
                }))), this._shouldShowFloorAd = !1, this._fullscreenDuration = t.fullscreenDuration || 10, this._fullscreenSlot = null, this._floorAdSlot = null, this._disableFullscreenCloseButton = t.disableFullscreenCloseButton, this._markBannerDomNode = t.markBannerDomNode, this._getTrustedOwners = t.getTrustedOwners || function () {
                    return []
                }, this.testtag = new y.AdfoxTesttag(((n = {})[y.Bits.methodCall] = Number(t.methodCall), n[y.Bits.marginsForLazyInitExp] = (0, L.useExperimentFlag)("MARGINS_FOR_LAZY_INIT_EXP") || 0, n[y.Bits.reloadTimeoutExp] = (0, y.experimentBitValues)((0, L.useExperimentFlag)("ADFOX_RELOAD_TIMEOUT")), n[y.Bits.reloadIfAdWasSeenExp] = (0, y.experimentBitValues)((0, L.useExperimentFlag)("ADFOX_RELOAD_IF_AD_WAS_SEEN")), n)), this._callbacks = {
                    onDestroy: (0, X.isolate)(t.onDestroy),
                    onError: (0, X.isolate)(t.onError),
                    onLoad: (0, X.isolate)(t.onLoad),
                    onRender: (0, X.isolate)(t.onRender),
                    onStub: (0, X.isolate)(t.onStub),
                    onVideoEnd: (0, X.isolate)(t.onVideoEnd),
                    onRewarded: (0, X.isolate)(t.onRewarded),
                    onRewardedCount: (0, X.isolate)(t.onRewardedCount),
                    onOpen: (0, X.isolate)(t.onOpen),
                    onClose: (0, X.isolate)(t.onClose),
                    onPreload: (0, X.isolate)(t.onPreload),
                    onAdStart: t.videoCallbacks && (0, X.isolate)(t.videoCallbacks.onAdStart),
                    onAdEnd: t.videoCallbacks && (0, X.isolate)(t.videoCallbacks.onAdEnd)
                }, R.renderPerfomanceManager.logRenderLabel(this._bannerId, R.BlockRenderSteps.AdCreated), R.renderPerfomanceManager.setBlockData(this._bannerId, {containerId: this._containerId})
            }

            (0, M.setVersionForVas)(), se.prototype = {
                constructor: se, render: function () {
                    if (R.renderPerfomanceManager.logRenderLabel(this._bannerId, R.BlockRenderSteps.AdStartedRender), this._data) R.renderPerfomanceManager.stopLoggingTime(this._bannerId), this._processResponseData(this._data), this._data = null; else {
                        if ((0, q.needDisableHit)({
                            window: this._win,
                            type: this._type,
                            platform: this._platform
                        })) return;
                        this._initRequest()
                    }
                }, destroy: function (e) {
                    if (!this._isDestroyed) {
                        this._isDestroyed = !0, this._transport && this._transport.destroy();
                        var t = this._fullscreenSlot;
                        if (t && t.close(), this._destroyBundle(), this._clean(), this._triggerCallback("onDestroy"), null == e || !e.isReload) {
                            var n = this._floorAdSlot;
                            n && n.hide()
                        }
                    }
                }, hide: function () {
                    this._floorAdSlot ? this._floorAdSlot.hide() : this._bundle && this._bundle.hide()
                }, show: function () {
                    this._floorAdSlot ? this._floorAdSlot.show() : this._bundle && this._bundle.show()
                }, _initRequest: function (e) {
                    var t = this._collectParams(), n = e && e.prepareCodeUrl || this._getPrepareUrl(t);
                    H.isDebugMode() && (H.setCurrentSessionState(this._bannerId, "dataLoadingBS"), H.createRequest(this._bannerId, {
                        url: n,
                        payload: t,
                        bids: this._bid
                    })), this._initXHRequest(n, {method: s.Methods.GET, headers: this._headers})
                }, _initXHRequest: function (e, t) {
                    var n = this, r = ie();
                    this._transport = new g["default"](this._win, {}, {
                        error: function (e) {
                            H.isDebugMode() && H.error(n._bannerId, "ADFOX_LOAD_XHR_ERROR"), (0, B.errorStrict)("ADFOX_LOAD_XHR_ERROR"), n._cleanAfterGoogle(), n._triggerCallback("onError", e)
                        }, success: function (e) {
                            H.isDebugMode() && H.setCurrentRequestParams(n._bannerId, {response: e}), (0, B.errorStrict)("ADFOX_LOAD_SUCCESS"), R.renderPerfomanceManager.logRenderLabel(n._bannerId, R.BlockRenderSteps.AdfoxXhrRequestLoaded);
                            var t = ie() - r;
                            n._transport = null, n._processResponseData(e, t)
                        }
                    }), R.renderPerfomanceManager.logRenderLabel(this._bannerId, R.BlockRenderSteps.AdfoxXhrRequestPrepared), this._transport.sendRequestWithUrl(e, t)
                }, _initJSONPRequest: function (e) {
                    var t = this, r = (0, z.getRandomInt)(0, Number.MAX_SAFE_INTEGER), o = this._win.Ya, i = !1,
                        s = null, u = function (e, n) {
                            void 0 === n && (n = null), t._cleanAfterGoogle(), o[r] && (o[r] = null), (0, B.errorStrict)("ADFOX_LOAD_JSONP_ERROR", {
                                reason: e,
                                exception: n
                            }), t._triggerCallback("onError", {type: "JSONPRequest", reason: e, exception: n})
                        }, c = setTimeout((function () {
                            return u("Script execution timeout")
                        }), 15e3);
                    o[r] = function (e) {
                        if (i = !0, t._win.clearTimeout(c), "string" == typeof e) try {
                            e = n.lv["json"].parse(e)
                        } catch (e) {
                            return void u("Parse error", e)
                        } else if ("object" != typeof e) return void u("Incorrect data type");
                        s && (0, a.removeNodeFromParent)(s), t._processResponseData(e)
                    }, (0, d.isEncoded)(e) && (e = (0, d.decode)(e)), e = (0, v.addParamToUrl)(e, "callback", "Ya[" + r + "]"), e = (0, d.encode)(e), R.renderPerfomanceManager.logRenderLabel(this._bannerId, R.BlockRenderSteps.AdfoxJsonpRequestPrepared), (s = document.createElement("script")).charset = "utf-8", s.src = e, s.onerror = function () {
                        return u("Script loading error")
                    }, s.onload = function () {
                        R.renderPerfomanceManager.logRenderLabel(t._bannerId, R.BlockRenderSteps.AdfoxJsonpRequestLoaded), i || (t._win.clearTimeout(c), c = setTimeout((function () {
                            return u("Script loading timeout")
                        }), 1e3))
                    }, ee(this._win).appendChild(s)
                }, _resetBanner: function (e, t) {
                    var n = this;
                    void 0 === t && (t = function () {
                        return n._initRequest(e)
                    }), R.renderPerfomanceManager.logRenderLabel(this._bannerId, R.BlockRenderSteps.AdReload), this._destroyBundle(), R.renderPerfomanceManager.logRenderLabel(this._bannerId, R.BlockRenderSteps.AdCreated), e.options && (this._pr1 = (0, m.generatePr)(), this._ownerId = e.options.ownerId || this._ownerId, this._params = e.options.params || this._params, this._domain = e.options.customDomain || ne()), R.renderPerfomanceManager.logRenderLabel(this._bannerId, R.BlockRenderSteps.AdStartedRender), t()
                }, _destroyBundle: function () {
                    if (this._bundle) {
                        this._bundle.destroy(), this._bundle = null;
                        var e = this._getSlot();
                        e && e.close()
                    }
                }, _collectParams: function () {
                    var e;
                    this._layoutConfig = null != (e = this._layoutConfig) ? e : new O.LayoutConfig(this._container), this._layoutConfig.set("darkTheme", this._darkTheme);
                    var t = Q(Q(Q({}, this._getDefaultParams()), this._params), {}, {
                        extParams: (0, p.tryStringify)(this._extParams),
                        slotNumber: this._slotNumber.toString()
                    });
                    if ((0, l.forEach)(oe, (function (e) {
                        t[e] = void 0
                    })), t.pk) try {
                        t.pk = decodeURIComponent(t.pk)
                    } catch (e) {
                    }
                    if (this._bid) {
                        this._bid.forEach((function (e) {
                            e.placement_id && (e.placement_id = String(e.placement_id))
                        })), this._bid.toJSON && (this._bid.toJSON = void 0);
                        var n = (0, p.tryStringify)(this._bid) || "";
                        t.bids = (0, i.encode)(n)
                    }
                    t.utf8 = "\u2713";
                    var r = (0, o.getCookie)(document, "_ym_uid");
                    r && (t.duid = (0, i.encode)(r)), this._reloadCounter && (t.adf_refresh = this._reloadCounter, t.refresh = "1"), (0, C.assignUaasRequestParams)(t, {
                        disableSsr: !1,
                        useSsr: !0
                    });
                    var a = (0, L.useExperimentFlag)("ADFOX_FIRST_LOOK_EXP");
                    a && (t["fl"] = a), t["top-ancestor"] = x.TOP_ANCESTOR, t["top-ancestor-undetermined"] = x.IS_TOP_ANCESTOR_TRUSTED ? "0" : "1";
                    var s = ("exp" === (0, L.useExperimentFlag)("GRAB2") ? (0, c.grab)(2048) : (0, u.grab)(2048)) || "";
                    return t["grab-orig-len"] = s.length, t.grab = s, t["tga-with-creatives"] = "1", t
                }, _getDefaultParams: function () {
                    return (0, A.getLoaderRequestParams)({
                        win: this._win,
                        date: this._dt,
                        pr1: this._pr1,
                        testtag: this.testtag,
                        isTurbo: this._isTurbo,
                        container: this._container,
                        containerId: this._containerId,
                        isFullscreen: this._isFullscreen,
                        preparedLayoutConfig: this._layoutConfig
                    })
                }, _getRawUrl: function () {
                    return "https://" + this._domain + "/" + this._ownerId + "/getBulk/v2"
                }, _getShrunkenUrl: function (e) {
                    void 0 === e && (e = this._collectParams());
                    var t = this._getRawUrl(), n = te(e, t);
                    return {url: n.url, headers: n.headers}
                }, _getPrepareUrl: function (e) {
                    void 0 === e && (e = this._collectParams());
                    var t = this._getRawUrl();
                    return (0, v.addParamsToUrl)(t, e)
                }, _processResponseData: function (e, t) {
                    e.data && e.data.length ? this._parseDataInResponse(e.data, t) : this._parseErrorsInResponse(e.errors)
                }, _removeAdContainer: function () {
                    (0, a.removeNodeFromParent)(this._adContainer), this._adContainer = null
                }, _parseDataInResponse: function (e, t) {
                    for (var n = this, r = 0; r < e.length; r++) this._loadBundle(e[r], t, {
                        onRender: function () {
                            var e = n._container.querySelector(".adfox_placeholder");
                            e && e.remove && e.remove()
                        }
                    })
                }, _parseErrorsInResponse: function (e) {
                    e && e.length && (0, f.some)(e, (function (e) {
                        return "" + e.status == "204"
                    })) ? this._onStub() : (this._cleanAfterGoogle(), this._triggerCallback("onError", {
                        message: e,
                        type: "adfoxBackend"
                    }))
                }, _processBundleName: function (e, t) {
                    return "banner.xml" === e && t.vastBase64 ? "banner.inpage" : e
                }, _loadBundle: function (e, t, n) {
                    var r = this, o = e.attributes && e.attributes.blockId || "";
                    R.renderPerfomanceManager.setBlockData(this._bannerId, {blockId: o});
                    var i = this._processBundleName(e.type, e.attributes),
                        a = this._processBundleParams(e.attributes, i);
                    if (a.uniqId = this._bannerId, this._isBundleGoogle(i) || this._cleanAfterGoogle(), "banner.reset" === i) {
                        var s = e.attributes && e.attributes.options && e.attributes.options.ownerId || this._ownerId;
                        (0, w.includes)(this._getTrustedOwners(), s) || (this._bid = void 0)
                    }
                    var u = "banner.direct" === i;
                    a.isTurbo = this._isTurbo, a.turboPageUrl = this._turboPageUrl, a.directBunnerType = this._type, a.platform = this._platform, a.disableFullscreenCloseButton = this._disableFullscreenCloseButton, a.markBannerDomNode = this._markBannerDomNode, u || (0, A.incrementAdNumber)(), R.renderPerfomanceManager.logRenderLabel(this._bannerId, R.BlockRenderSteps.AdTypeChosen), R.renderPerfomanceManager.setBlockData(this._bannerId, {product: i}), this._lastBannerName = i;
                    var c = this._triggerCallback("onLoad", {bundleName: i, bundleParams: a}, (function () {
                        return r._callOnRender()
                    }), (function () {
                        return r._callOnError()
                    }));
                    "bid" === i && !1 !== c ? this._renderHeaderBidding(a, n) : (u && (a.initTime = Number(new Date), a.refresh = this._reloadCounter > 0), !1 !== c && this._runBundle(i, a, n))
                }, _isSizeFitForTurbo: function (e) {
                    var t = e.width, n = e.height;
                    return Number(t) <= E.TURBO_MAX_SIZE.width && Number(n) <= E.TURBO_MAX_SIZE.height
                }, _renderHeaderBidding: function (e, t) {
                    var n = this;
                    H.isDebugMode() && (H.setCurrentSessionState(this._bannerId, "depsLoading"), H.setCurrentSessionParams(this._bannerId, {
                        render: {
                            format: "bid",
                            bannerId: e.bannerId || null,
                            campaignId: e.campaignId || null,
                            campaignLevel: e.campaignLevel || null
                        }
                    }));
                    var r = b.ns.headerBidding;
                    if (r && r.managerForAdfox && r.managerForAdfox.render) {
                        var o = function (o, i) {
                            R.renderPerfomanceManager.logRenderLabel(n._bannerId, R.BlockRenderSteps.BundleLoaded), H.isDebugMode() && H.setCurrentSessionState(n._bannerId, "rendering");
                            var a = function () {
                                R.renderPerfomanceManager.logRenderLabel(n._bannerId, R.BlockRenderSteps.HBRendered), n._renderComplete("bid", i), t && t.onRender && t.onRender();
                                for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++) r[o] = arguments[o];
                                var a, s = Q({}, r);
                                n._callbacks.onRender && (n._floorAdSlot && (s.floorAdSize = n._floorAdSlot.getSize()), (a = n._callbacks).onRender.apply(a, s))
                            };
                            r.managerForAdfox.render(n._win, o, n._containerId, e.campaignId, Q(Q({}, n._callbacks), {}, {
                                onRender: function () {
                                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                                    if (n._isPreload && n._isFullscreen && "banner.direct" !== bundleName) n._preload((function () {
                                        return a.apply(void 0, t)
                                    })); else {
                                        a();
                                        var o = n._getSlot();
                                        o && (o.onClose = function () {
                                            return n._triggerCallback("onClose")
                                        }, o.show())
                                    }
                                }, onAdfoxBid: function (e, t) {
                                    n._loadBundle(e, void 0, t)
                                }
                            }))
                        };
                        this._isFullscreen && (0, j.canShowFullscreen)({
                            platform: this._platform,
                            window: this._win
                        }) ? (0, F.loadNewFullscreenController)(void 0, (function () {
                            return n.destroy()
                        })).then((function (e) {
                            n._fullscreenSlot = e.createSlot({}, {
                                closeButtonTimeout: n._fullscreenDuration,
                                theme: "black",
                                centerContent: !0,
                                hideProgress: !0,
                                hideKebab: !0,
                                withoutDomain: !0,
                                disableFullscreenCloseButton: n._disableFullscreenCloseButton,
                                markBannerDomNode: n._markBannerDomNode
                            }), o(n._fullscreenSlot.node, {isFullscreen: !0})
                        })) : this._isFloorAd && (0, Y.canShowFloorAd)({
                            window: this._win,
                            platform: this._platform
                        }) ? this._loadFloorAdControllerWithTimeout().then((function (e) {
                            n._floorAdSlot = e.createSlot({
                                darkTheme: n._darkTheme,
                                position: n._position
                            }), n._container = n._floorAdSlot.node, o(n._container, {isFloorAd: !0})
                        })) : o(this._container, !1)
                    } else this._triggerCallback("onError", {message: "Yandex Wrapper not found", type: "adfoxBackend"})
                }, _callOnRender: function () {
                    this._bundle && this._bundle.callOnRender ? this._bundle.callOnRender() : this._triggerCallback("onRender")
                }, _callOnError: function () {
                    this._bundle && this._bundle.callOnError ? this._bundle.callOnError() : this._triggerCallback("onError", {
                        message: "Custom error",
                        type: "adfoxBackend"
                    })
                }, _runBundle: function (e, t, n) {
                    var r = this, o = t.blockId;
                    o && "n" === o.charAt(0).toLowerCase() && "banner.native" !== e ? e = "banner.native" : "banner.old" === e && (t.pr1 || (t.pr1 = this._pr1), this._useProtectMode && (e = "banner.old.protected"));
                    var i = [(0, N.loadBanner)(e)],
                        a = Array.isArray(this._fullscreenBannerBlacklist) ? this._fullscreenBannerBlacklist : [],
                        s = this._isFullscreen && (0, j.canShowFullscreen)({
                            platform: this._platform,
                            window: this._win
                        }) && !(0, w.includes)(a.concat(["banner.direct", "banner.fullscreen", "banner.fullscreen.html", "banner.native"]), e);
                    this._shouldShowFloorAd = this._isFloorAd && (0, Y.canShowFloorAd)({
                        window: this._win,
                        platform: this._platform
                    }) && !(0, w.includes)(["banner.fullscreen", "banner.fullscreen.html", "banner.native", "banner.background", "banner.interscroller", "banner.line"], e), s && i.push((0, F.loadNewFullscreenController)()), this._shouldShowFloorAd && i.push(this._loadFloorAdControllerWithTimeout()), H.isDebugMode() && (H.setCurrentSessionState(this._bannerId, "depsLoading"), H.setCurrentSessionParams(this._bannerId, {
                        render: {
                            format: e,
                            bannerId: t.bannerId || null,
                            campaignId: t.campaignId || null,
                            campaignLevel: t.campaignLevel || null
                        }
                    })), Promise.all(i).then((function (o) {
                        var i = o[0], a = o[1];
                        s && a && (r._fullscreenSlot = a.createSlot({}, {
                            closeButtonTimeout: r._fullscreenDuration,
                            theme: "black",
                            centerContent: !0,
                            hideProgress: !0,
                            hideKebab: !0,
                            withoutDomain: !0,
                            disableFullscreenCloseButton: r._disableFullscreenCloseButton,
                            markBannerDomNode: r._markBannerDomNode
                        })), r._shouldShowFloorAd && a && (r._floorAdSlot = a.createSlot({
                            darkTheme: r._darkTheme,
                            position: r._position
                        })), R.renderPerfomanceManager.logRenderLabel(r._bannerId, R.BlockRenderSteps.BundleLoaded), H.isDebugMode() && H.setCurrentSessionState(r._bannerId, "rendering");
                        var u = r._fullscreenSlot || r._floorAdSlot;
                        u && (r._container = u.node);
                        var c = function () {
                            R.renderPerfomanceManager.logRenderLabel(r._bannerId, R.BlockRenderSteps.BundleRendered), r._renderComplete(e, {
                                isFullscreen: s,
                                isFloorAd: r._shouldShowFloorAd
                            }), n && n.onRender && n.onRender();
                            var t = {};
                            r._floorAdSlot && (t.floorAdSize = r._floorAdSlot.getSize()), r._triggerCallback("onRender", t)
                        };
                        r._bundleStartTime = ie(), r._bundle = new i(r._win, t, Q(Q({}, r._callbacks), {}, {
                            onPreload: function (e) {
                                r._triggerCallback("onPreload", e)
                            }, onRender: function () {
                                r._isPreload && r._isFullscreen && "banner.direct" !== e ? r._preload(c) : (c(), u && (u.onClose = function () {
                                    return r._triggerCallback("onClose")
                                }, u.show()))
                            }, onError: function (t) {
                                (0, B.errorStrict)("ADFOX_UNKNOWN_ERROR", {bundleName: e}), r._triggerCallback("onError", t)
                            }, onReset: function (e) {
                                r._triggerCallback("onReset"), r._resetBanner(e)
                            }, onLoadAnotherBundle: function (e) {
                                r._destroyBundle(), r._processResponseData(e)
                            }, onDestroy: function () {
                                r.destroy()
                            }, onLogEvent: function (t) {
                                var n = t.name, r = t.labels, o = void 0 === r ? {} : r;
                                (0, B.errorStrict)("ADFOX_LOG_EVENT", Q({text: n, bundleName: e}, o))
                            }, onLogError: function (t) {
                                var n = t.name, r = t.labels, o = void 0 === r ? {} : r;
                                (0, B.errorStrict)("ADFOX_LOG_ERROR", Q({text: n, bundleName: e}, o))
                            }, onVideoEnd: function () {
                                r._triggerCallback("onVideoEnd")
                            }
                        })), r._bundle.renderTo(r._container, r._layoutConfig)
                    }), (function (t) {
                        (0, B.error)(t, "Chunk " + e + " loading error"), r._triggerCallback("onError", t)
                    }))
                }, _preload: function (e) {
                    var t = this, n = this._getSlot();
                    n && (n.onClose = function () {
                        return t._triggerCallback("onClose")
                    }, n.onShow = function () {
                        return e()
                    }, n.show({
                        isPreload: this._isPreload, triggerOnPreload: function (e) {
                            return t._triggerCallback("onPreload", e)
                        }
                    }))
                }, _triggerCallback: function (e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    if ("onError" === e && this._errorsLog.push({
                        time: new Date,
                        args: n
                    }), this._callbacks[e]) return this._callbacks[e].apply(this._win, n)
                }, _processBundleParams: function (e, t) {
                    var n = this;
                    return this._clickMacro && (e.clickMacro = this._clickMacro), this._useProtectMode && (e.useProtectMode = !0), this._cspNonce && (e.cspNonce = this._cspNonce), "banner.inpage" === t && (0, l.forEach)(re, (function (t) {
                        e[t] = n._params[t]
                    })), e.testtag = this.testtag, e.useXhr = this._useXhr, e.ownerId = this._ownerId, e.insertionCodeParams = this._insertionCodeParams, e.isPreload = this._isPreload, e
                }, getErrorsLog: function () {
                    return this._errorsLog
                }, _prepareLabels: function (e) {
                    return void 0 === e && (e = {}), Q(Q({}, e), {}, {bundleVersion: String((0, I.getBundleVersion)())})
                }, _clean: function () {
                    this._container.innerHTML = ""
                }, _isBundleGoogle: function (e) {
                    return "banner.adx" === e || "banner.dfp" === e
                }, _cleanAfterGoogle: function () {
                    this._isBundleGoogle(this._lastBannerName) && this._clean()
                }, _onStub: function () {
                    this._cleanAfterGoogle(), this._triggerCallback("onStub")
                }, _renderComplete: function (e, t) {
                    (0, k.renderingIsCompleted)(this._bannerId);
                    var n = ae++, r = Q({
                        type: "adfox",
                        format: e,
                        isRefreshed: this._reloadCounter > 0,
                        slotIndex: this._slotNumber,
                        renderNumber: n,
                        reloadCounter: this._reloadCounter
                    }, t);
                    R.renderPerfomanceManager.setBlockData(this._bannerId, {renderNumber: n}), H.isDebugMode() && H.setCurrentSessionState(this._bannerId, "ready"), (0, S.sendRenderData)(this._bannerId, r)
                }, _getSlot: function () {
                    return this._fullscreenSlot || this._floorAdSlot
                }, _loadFloorAdControllerWithTimeout: function () {
                    var e = this;
                    return Promise.all([(0, W.loadFloorAdController)(void 0, (function () {
                        return e.destroy()
                    })), (0, U.waitForFloorAdTimeout)()]).then((function (e) {
                        return e[0]
                    }))
                }
            };
            var ue = (0, T.manageLastBanner)(se);
            t.M = ue
        }, 17622: (e, t, n) => {
            "use strict";
            t.a = u;
            var r = function (e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {default: e};
                var n = o(t);
                if (n && n.has(e)) return n.get(e);
                var r = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e) if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                    var s = i ? Object.getOwnPropertyDescriptor(e, a) : null;
                    s && (s.get || s.set) ? Object.defineProperty(r, a, s) : r[a] = e[a]
                }
                r["default"] = e, n && n.set(e, r);
                return r
            }(n(65392));

            function o(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap, n = new WeakMap;
                return (o = function (e) {
                    return e ? n : t
                })(e)
            }

            function i(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(n), !0).forEach((function (t) {
                        s(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function s(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function u(e) {
                this._win = e, this._banners = [], this._stateDesktop = "desktop", this._stateTablet = "tablet", this._statePhone = "phone", this._initResizeEvents()
            }

            u.prototype = {
                constructor: u, addBanner: function (e, t, n) {
                    var r = this, o = {
                        adaptiveOptions: a(a({}, this._getDefaultBannerAdaptiveOptions()), n || {}),
                        adInstance: e,
                        isVisible: !1,
                        state: null,
                        states: t
                    };
                    this._banners.push(o), this._checkBannerState(o);
                    return function () {
                        return r.removeBanner(o.adInstance.getContainerId())
                    }
                }, removeBanner: function (e) {
                    for (var t = 0; t < this._banners.length; t++) if (this._banners[t].adInstance.getContainerId() === e) {
                        this._banners.splice(t, 1);
                        break
                    }
                }, _getDefaultBannerAdaptiveOptions: function () {
                    return {tabletWidth: 830, phoneWidth: 480, isAutoReloads: !1}
                }, _checkState: function () {
                    for (var e = 0; e < this._banners.length; e++) this._checkBannerState(this._banners[e])
                }, _checkBannerState: function (e) {
                    var t = this._win.document.documentElement.clientWidth, n = e.adaptiveOptions, r = null;
                    (r = t > n.tabletWidth ? this._stateDesktop : t <= n.tabletWidth && t > n.phoneWidth ? this._stateTablet : this._statePhone) !== e.state && (e.state = r, this._toggleBannerState(e))
                }, _initResizeEvents: function () {
                    var e = this;
                    r.addEvent(this._win, "resize", (function () {
                        return e._checkState()
                    }))
                }, _toggleBannerState: function (e) {
                    for (var t = !1, n = 0; n < e.states.length; n++) if (e.states[n] === e.state) {
                        t = !0;
                        break
                    }
                    t ? e.isVisible || this._showBanner(e) : e.isVisible && this._hideBanner(e)
                }, _showBanner: function (e) {
                    e.isVisible = !0, e.adInstance.initialize(), e.adaptiveOptions.isAutoReloads || e.adInstance.show()
                }, _hideBanner: function (e) {
                    e.isVisible = !1, e.adaptiveOptions.isAutoReloads ? e.adInstance.destroyWithoutCallbackInvocation() : e.adInstance.hide()
                }
            }
        }, 50913: (e, t) => {
            "use strict";
            var n;

            function r() {
                return n || (n = document.createElement("a")), n
            }

            t.$ = function (e, t) {
                var n = {containerId: "AdFox_banner_" + e, params: {}}, o = r();
                o.href = t;
                var i = o.pathname;
                "/" !== i[0] && (i = "/" + i);
                var a = /\/(\d+)\//.exec(i);
                a && a[1] && (n.ownerId = a[1]);
                for (var s = o.search.slice(1).replace(/&amp;/g, "&"), u = s.split("&"), c = 0; c < u.length; c++) {
                    var d = u[c], l = d.indexOf("=");
                    l > 0 && (n.params[d.substr(0, l)] = decodeURIComponent(d.substr(l + 1)))
                }
                if (!s.length || !n.ownerId) return !1;
                return n
            }
        }, 22658: (e, t, n) => {
            "use strict";
            t.C = function (e, t, n) {
                var s = function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? i(Object(n), !0).forEach((function (t) {
                            a(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({}, e);
                (function (e) {
                    var t = null;
                    e ? e.ownerId || e.data ? e.params || e.data ? e.element || e.containerId || (t = 'Banner options required "element" or "containerId"') : t = 'Banner options required "params" or "data"' : t = 'Banner option "ownerId" is required' : t = "Banner options is required";
                    if (t) throw new Error("adfox#checkBannerOptions: " + t)
                })(e), function (e) {
                    for (var t, n = ["onDestroy", "onError", "onLoad", "onRender", "onStub", "onOpen", "onClose", "onRewarded", "onRewardedCount", "onAdStart", "onAdEnd", "onPreload"], r = 0; r < n.length; r++) if ("undefined" !== (t = typeof e[n[r]]) && "function" !== t) throw new Error("adfox#checkBannerOptions: " + n[r] + " must be function")
                }(e), function (e, t) {
                    e.element && e.element instanceof Element ? t.container = e.element : e.containerId && (t.container = window.document.getElementById(e.containerId))
                }(e, s), function (e, t) {
                    if (!t.container) {
                        var n = e.element ? "Element not found or is not instance of Element" : "Element with id #" + e.containerId + " not found";
                        throw new Error("adfox#checkContainer: " + n)
                    }
                    if (!window.document.body.contains(t.container)) throw new Error("adfox#checkContainer: Element isn't inserted in dom")
                }(e, s), function (e, t) {
                    var n = t.bid;
                    if (n) {
                        if (!(0, r.isArray)(n)) throw new Error("adfox#bid: Must be an Array");
                        t.bid = (0, o.map)(n, (function (e) {
                            var t = e.campaign_id, n = e.bid, r = Number(t);
                            if (!isFinite(r)) throw new Error("adfox#bid.campaign_id: Can not be converted to number");
                            return {campaign_id: r, bid: n}
                        }))
                    }
                }(0, s), void 0 !== t && function (e) {
                    if (!(0, r.isArray)(e)) throw new Error("adfox#checkAdaptiveStates: adaptiveStates option must be Array");
                    if (e.length < 1) throw new Error("adfox#checkAdaptiveStates: adaptiveStates option can not be empty")
                }(t);
                void 0 !== n && function (e) {
                    if (e.tabletWidth && e.phoneWidth && e.tabletWidth < e.phoneWidth) throw new Error("adfox#checkAdaptiveOptions: phoneWidth must be less than tabletWidth")
                }(n);
                return s
            };
            var r = n(85200), o = n(15735);

            function i(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function a(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
        }, 1689: (e, t) => {
            "use strict";
            t.__esModule = !0, t.isWebkit = t.isTouch = t.isSafeframe = t.isPassiveEventsSupported = t.isFirefox = t.isCanvasSupported = t.isAMP = void 0;
            var n = (navigator || {}).userAgent || "", r = void 0 !== window.ontouchstart;
            t.isTouch = r;
            var o = Boolean(window.ampSeen);
            t.isAMP = o;
            var i = Boolean(window.$sf && window.$sf.ext);
            t.isSafeframe = i;
            var a = /Firefox/gi.test(n);
            t.isFirefox = a;
            var s, u = (s = document.createElement("canvas"), Boolean(s && s.getContext && s.getContext("2d")));
            t.isCanvasSupported = u;
            var c = function () {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function () {
                            e = !0
                        }
                    });
                    window.addEventListener("test", null, t)
                } catch (e) {
                }
                return e
            }();
            t.isPassiveEventsSupported = c;
            var d = /WebKit/gi.test(n);
            t.isWebkit = d
        }, 65392: (e, t, n) => {
            "use strict";
            t.__esModule = !0, t.addEvent = i, t.on = function (e, t, n, r) {
                return i(e, t, n, r), function () {
                    a(e, t, n)
                }
            }, t.removeEvent = a, t.stop = function (e) {
                e.stopPropagation ? (e.stopPropagation(), e.preventDefault()) : (e.returnValue = !1, e.cancelBubble = !0)
            };
            var r = function (e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {default: e};
                var n = o(t);
                if (n && n.has(e)) return n.get(e);
                var r = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e) if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                    var s = i ? Object.getOwnPropertyDescriptor(e, a) : null;
                    s && (s.get || s.set) ? Object.defineProperty(r, a, s) : r[a] = e[a]
                }
                r["default"] = e, n && n.set(e, r);
                return r
            }(n(1689));

            function o(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap, n = new WeakMap;
                return (o = function (e) {
                    return e ? n : t
                })(e)
            }

            function i(e, t, n, o) {
                void 0 === o && (o = !1), e.addEventListener ? e.addEventListener(t, n, !!r.isPassiveEventsSupported && o) : e.attachEvent("on" + t, n)
            }

            function a(e, t, n) {
                e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent("on" + t, n)
            }
        }, 62082: (e, t, n) => {
            "use strict";
            t.__esModule = !0, t.clearCache = function () {
                0
            }, t.report = function (e, t) {
                !e || "string" != typeof e || t && o[e] || (o[e] = !0, (0, r.sendPixel)(e))
            };
            var r = n(44327), o = {}
        }, 37643: (e, t, n) => {
            "use strict";
            var r = n(12251), o = n(54784), i = n(67729), a = n(91709), s = n(49874), u = n(85225);

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach((function (t) {
                        l(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function l(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            e.exports = function (e, t, n) {
                var c, l, f = (0, i.getRandomInt)(1e12, 2e12), p = (0, r.protect)("JSONP onLoadError", (function () {
                    Ya[f] && (Ya[f]("{}"), Ya[f] = u.noop)
                })), _ = r.protect.setTimeout(p, 15e3);
                Ya[f] = function (e) {
                    l = !0, window.clearTimeout(_);
                    var t = {common: {}}, o = null;
                    try {
                        delete Ya[f], o || (o = new Function("return " + e)()), t = d(d({}, t), o)
                    } catch (t) {
                        s.logger.error(t, "JSONPParseError", {data: e})
                    }
                    (0, r.protect)("JSONP callback", (function () {
                        n(t), c && (0, a.removeNodeFromParent)(c)
                    }))()
                }, e.appendParams("callback=Ya[" + f + "]");
                var v = {src: e.getUrl(), hasCors: !1, win: window};
                (c = (0, o.loadCustomScript)(v)) && (c.onerror = p, c.onload = function () {
                    l || (window.clearTimeout(_), _ = r.protect.setTimeout(p, 1e3))
                })
            }
        }, 1324: (e, t, n) => {
            "use strict";
            var r, o = n(84162), i = n(88772), a = n(73266), s = "exp" === (0, i.useExperimentFlag)("GRAB2");
            r = s ? n(79287).grab : n(19024).grab, e.exports = function (e, t, n, i) {
                void 0 === i && (i = {});
                var s = i.pageId, u = i.isDisableGrab;
                !(0, o.canUseGrab)(window, s) || a.isAMP || u ? n("") : n(r(e, t) || "")
            }
        }, 23104: (e, t, n) => {
            "use strict";
            n.d(t, {$: () => h});
            var r = function (e) {
                return void 0 === e && (e = window), function (e) {
                    void 0 === e && (e = window);
                    var t = n(281)(e);
                    return "boolean" == typeof t ? -1 : t
                }(e) > 11
            };

            function o(e) {
                return function (e) {
                    return Boolean(e.PointerEvent)
                }(e) && function (e) {
                    var t = e.navigator || {}, n = t.msMaxTouchPoints, r = t.maxTouchPoints;
                    return n || r || 0
                }(e) > 0 && !r(e)
            }

            var i = function (e, t, n) {
                for (var r = new Array(e.length), o = 0; o < e.length; o++) r[o] = t.call(n, e[o], o, e);
                return r
            }, a = n(95653), s = n(69807);

            function u(e, t) {
                if (!(0, a.m)(e.matchMedia)) return !1;
                var n = e.matchMedia(t);
                return (0, s.K)(n) && Boolean(n.matches)
            }

            var c = ["", "-webkit-", "-ms-", "-moz-", "-o-"], d = i(c, (function (e) {
                return "(" + e + "any-pointer:coarse)"
            })).join(",");
            var l = i(c, (function (e) {
                return "(" + e + "touch-enabled)"
            })).join(",");

            function f(e) {
                return void 0 === e && (e = window), o(e) || function (e) {
                    return u(e, d)
                }(e) || function (e) {
                    return u(e, l)
                }(e) || function (e) {
                    var t = e.DocumentTouch;
                    return Boolean(t) && e.document instanceof t
                }(e) || function (e) {
                    return "ontouchstart" in e
                }(e)
            }

            function p(e) {
                void 0 === e && (e = window);
                var t = e.navigator.userAgent.toLowerCase();
                return /ipad|iphone|ipod/.test(t) && !e.MSStream && !function (e) {
                    return void 0 === e && (e = window), e.navigator.userAgent.indexOf("UCBrowser") > -1
                }(e)
            }

            var _ = function (e) {
                void 0 === e && (e = window);
                var t = function (e) {
                    void 0 === e && (e = window);
                    try {
                        return (e.navigator || {}).userAgent || ""
                    } catch (e) {
                        return ""
                    }
                }(e).toLowerCase();
                if (t.indexOf("android") > -1) return !1;
                var n = t.replace(/\(.+?\)/gi, "").split(" ").map((function (e) {
                    return e.trim().split("/")[0]
                })).filter((function (e) {
                    return e && "mobile" !== e
                }));
                return 4 === n.length && "mozilla" === n[0] && "applewebkit" === n[1] && "version" === n[2] && "safari" === n[3]
            };
            var v, h = (void 0 === v && (v = window), _(v) || p(v) || function (e) {
                return void 0 === e && (e = window), /Apple/.test(e.navigator.vendor) && f(e)
            }(v))
        }, 28603: (e, t, n) => {
            "use strict";
            n.d(t, {M: () => p});
            var r = !(0, n(14990).E)(Math.random) || Math.random() == Math.random(), o = n(95653),
                i = Date && (0, o.m)(Date.now) ? function () {
                    return Date.now()
                } : function () {
                    return (new Date).getTime()
                }, a = "undefined" == typeof window ? void 0 : window.performance, s = a && (0, o.m)(a.now),
                u = a && a.timing && a.timing.navigationStart ? a.timing.navigationStart : i(), c = 0,
                d = s ? function () {
                    return a.now()
                } : function () {
                    return e = i() - u, c = Math.max(e, c);
                    var e
                }, l = 2147483647, f = Date.now() * d() % l;
            var p = r ? function () {
                return ((f = 16807 * f % l) - 1) / 2147483646
            } : function () {
                return Math.random()
            }
        }, 14990: (e, t, n) => {
            "use strict";

            function r(e) {
                if (!e || !e.toString) return !1;
                var t = Function.prototype.toString.call(e);
                return /\[native code\]/.test(t) || /\/\* source code not available \*\//.test(t)
            }

            n.d(t, {E: () => r})
        }, 34497: (e, t, n) => {
            "use strict";

            function r(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }

            function o(e, t, n) {
                for (var o in e) r(e, o) && t.call(n, e[o], o, e)
            }

            n.d(t, {M: () => o})
        }, 69807: (e, t, n) => {
            "use strict";

            function r(e) {
                var t = typeof e;
                return Boolean(e) && ("object" === t || "function" === t)
            }

            n.d(t, {K: () => r})
        }, 56169: (e, t, n) => {
            "use strict";
            n.d(t, {T: () => o});
            var r = n(45108), o = function (e) {
                for (var t = []; e;) try {
                    if ((0, r.b)(e), t.push(e), e.parent === e) break;
                    e = e.parent
                } catch (e) {
                    break
                }
                return t
            }
        }, 20363: (e, t, n) => {
            "use strict";
            n.d(t, {M: () => i});
            var r = {}.toString, o = /\[object (\w+)\]/, i = function (e) {
                var t = r.call(e);
                if (!t) return null;
                var n = t.match(o);
                if (!n) return null;
                var i = n[1];
                return i || null
            }
        }, 21040: (e, t, n) => {
            "use strict";
            n.d(t, {F: () => i});
            var r = n(45108), o = n(23104);

            function i(e) {
                var t = function (e, t) {
                    if (void 0 === t && (t = !0), o.$ && t) return [];
                    for (var n = [], r = e; ;) try {
                        if (!(r = r.ownerDocument.defaultView.frameElement)) return n;
                        n.push(r)
                    } catch (e) {
                        return n
                    }
                }(e.documentElement).map((function (e) {
                    return e.ownerDocument
                }));
                return t.unshift(e), t.map((function (e) {
                    return {location: (0, r.b)(e.defaultView), referrer: e.referrer}
                }))
            }
        }, 45108: (e, t, n) => {
            "use strict";

            function r(e) {
                if (e && e.location) {
                    var t = e.location;
                    return "function" == typeof t.toString ? t.toString() : t.href || ""
                }
                return ""
            }

            n.d(t, {b: () => r})
        }, 59169: (e, t, n) => {
            "use strict";
            n.d(t, {a: () => o});
            var r = n(28603);

            function o(e) {
                for (var t = "", n = 0; n < e; n++) t += (16 * (0, r.M)() | 0).toString(16);
                return t
            }
        }, 41145: (e, t, n) => {
            "use strict";
            n.d(t, {V: () => o});
            var r = n(20363), o = function (e) {
                return e instanceof Error || "Error" === (0, r.M)(e)
            }
        }, 95653: (e, t, n) => {
            "use strict";
            n.d(t, {m: () => o});
            var r = n(20363);

            function o(e) {
                return "function" == typeof e || "Function" === (0, r.M)(e)
            }
        }, 69350: (e, t, n) => {
            "use strict";
            n.d(t, {H: () => o});
            var r = n(16480);

            function o(e) {
                return (0, r.H)(e) && e.length > 0
            }
        }, 16480: (e, t, n) => {
            "use strict";

            function r(e) {
                return "string" == typeof e
            }

            n.d(t, {H: () => r})
        }, 23750: (e, t, n) => {
            "use strict";
            n.d(t, {m: () => a});
            var r = n(16480);

            function o(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (n) return (n = n.call(e)).next.__pbind(n);
                if (Array.isArray(e) || (n = function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return i(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var r = 0;
                    return function () {
                        return r >= e.length ? {done: !0} : {done: !1, value: e[r++]}
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function a(e) {
                if (void 0 !== e) {
                    if (!(0, r.H)(e)) throw new Error("testIdsString is not a string or undefined [" + e + "]");
                    if (0 !== e.length) {
                        for (var t, n = o(e.split(";")); !(t = n()).done;) {
                            var i = t.value.split(",");
                            if (3 !== i.length) throw new Error("testIdParts length error [" + e + "]");
                            var a = i[0], s = i[2];
                            if (0 === a.trim().length) throw new Error("testId length error [" + e + "]");
                            if (0 === s.trim().length) throw new Error("testId bucket length error [" + e + "]")
                        }
                        return e
                    }
                }
            }
        }, 20335: (e, t, n) => {
            "use strict";
            n.d(t, {V: () => we});
            n(59169);
            var r = n(83818), o = function (e, t) {
                for (var n = 0; n < e.length; n++) if (t(e[n], n, e)) return n;
                return -1
            }, i = n(89160), a = n(32302);

            function s(e, t) {
                return -1 !== e.indexOf(t)
            }

            var u = n(69350), c = n(65812), d = n(85771);
            var l = function (e, t, n) {
                var r = 0;
                for (arguments.length < 3 && (r = 1, n = e[0]); r < e.length; r++) n = t(n, e[r], r, e);
                return n
            }, f = function (e) {
                return void 0 === e ? {} : (t = e, n = function (e) {
                    return l(e, (function (e, t) {
                        var n, r = t.value, o = t.testId, i = null !== (n = e[r]) && void 0 !== n ? n : [];
                        return i.push(o), e[r] = i, e
                    }), {})
                }, r = {}, (0, i.E)((0, d.Z)(t), (function (e) {
                    r[e] = n(t[e], e)
                })), r);
                var t, n, r
            }, p = n(82170);

            function _(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (n) return (n = n.call(e)).next.__pbind(n);
                if (Array.isArray(e) || (n = function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return v(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var r = 0;
                    return function () {
                        return r >= e.length ? {done: !0} : {done: !1, value: e[r++]}
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function v(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            var h = function () {
                    function e(e, t) {
                        var n = this;
                        Object.defineProperty(this, "abFlags", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: void 0
                        }), Object.defineProperty(this, "initialAbFlags", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: void 0
                        }), Object.defineProperty(this, "activeTestIds", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: []
                        }), Object.defineProperty(this, "externalActiveTestIds", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: new Set
                        }), Object.defineProperty(this, "initialActiveTestIds", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: []
                        }), Object.defineProperty(this, "activeFlags", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: new Set
                        }), Object.defineProperty(this, "testIdMap", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: void 0
                        }), Object.defineProperty(this, "flagToTestIdMap", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: void 0
                        }), Object.defineProperty(this, "getFlagValueAndActivateTestId", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                var t, r = n.abFlags[e],
                                    o = r ? null === (t = n.flagToTestIdMap[e]) || void 0 === t ? void 0 : t[r] : void 0;
                                if (o) for (var i, a = _(o); !(i = a()).done;) {
                                    var s = i.value, u = n.testIdMap.get(s);
                                    u && (n.activateTestId(u), n.activateFlag(e))
                                }
                                return r
                            }
                        }), Object.defineProperty(this, "getActiveTestIds", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                return e = [].concat(n.activeTestIds, Array.from(n.externalActiveTestIds)), (0, p.h)(e, (function (e, t, n) {
                                    return n.indexOf(e) === t
                                }));
                                var e
                            }
                        }), Object.defineProperty(this, "activateExternalTestIds", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                                for (var o = 0, i = t; o < i.length; o++) {
                                    var a = i[o], s = a.split(","), c = s[0];
                                    if ((0, u.H)(c)) {
                                        var d = n.testIdMap.get(c);
                                        (0, u.H)(d) && n.externalActiveTestIds.add(d)
                                    }
                                }
                            }
                        }), Object.defineProperty(this, "__isFlagActive", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                return n.activeFlags.has(e)
                            }
                        }), Object.defineProperty(this, "__setAbFlags", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                n.abFlags = e
                            }
                        }), Object.defineProperty(this, "__restoreAbFlags", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                n.abFlags = n.initialAbFlags
                            }
                        }), Object.defineProperty(this, "__setActiveTestIds", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: function (e) {
                                n.initialActiveTestIds = n.activeTestIds, n.activeTestIds = e
                            }
                        }), Object.defineProperty(this, "__restoreActiveTestIds", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: function () {
                                n.activeTestIds = n.initialActiveTestIds
                            }
                        }), Object.defineProperty(this, "onTestIdActivated", {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: new c.Signal
                        }), this.abFlags = t, this.initialAbFlags = t;
                        var r = e.flagsMap, o = e.testIds;
                        if (this.testIdMap = new Map, (0, u.H)(o)) for (var i, a = _(o.split(";")); !(i = a()).done;) {
                            var s = i.value, d = s.split(",")[0];
                            this.testIdMap.set(d, s)
                        }
                        this.flagToTestIdMap = f(r)
                    }

                    var t = e.prototype;
                    return t.activateTestId = function (e) {
                        s(this.activeTestIds, e) || (this.activeTestIds.push(e), this.onTestIdActivated.dispatch(e))
                    }, t.activateFlag = function (e) {
                        this.activeFlags.has(e) || this.activeFlags.add(e)
                    }, t.getNumberFlagValueAndActivateTestId = function (e) {
                        var t, n = this.getFlagValueAndActivateTestId(e), r = Number(n);
                        return "number" == typeof (t = r) && isFinite(t) ? r : void 0
                    }, e
                }(), E = n(72577), g = (0, n(94356).I)((function (e) {
                    return (0, E.vn)(e || (0, E.Ou)())
                })), m = n(48953), O = n(50336), A = function (e) {
                    var t, n = (0, m.Y)((function () {
                        return function (e) {
                            if ((0, O.K)(e)) {
                                var t = {}, n = e.vsid, r = e.contentPlayerVersion, o = e.pcodeVersion, i = e.widgetVersion;
                                if ((0, u.H)(n) && (t.vsid = n), (0, u.H)(r) && (t.contentPlayerVersion = r), (0, u.H)(o) && (t.pcodeVersion = o), (0, u.H)(i) && (t.widgetVersion = i), (0, d.Z)(t).length > 0) return t
                            }
                        }(e)
                    }), (function (e) {
                        t = e
                    })) || void 0;
                    return {rootFields: n, extractionError: t}
                }, b = n(7601), S = n(28603), R = n(16480), y = n(34497), I = n(56169), T = n(21040), w = n(20363),
                D = n(14990);
            var N = function (e, t) {
                var n = e[t];
                if (!(0, D.E)(n)) {
                    var r = n;
                    try {
                        delete e[t];
                        var o = e[t];
                        "function" == typeof o && (n = o), e[t] = r
                    } catch (e) {
                    }
                }
                return n
            }(Array, "isArray"), C = (Boolean(N), function () {
                function e(e) {
                    this.cache = e
                }

                var t = e.prototype;
                return t.get = function (e) {
                    return this.cache[e]
                }, t.has = function (e) {
                    return e in this.cache
                }, t.set = function (e, t) {
                    this.cache[e] = t
                }, e
            }()), M = document.createElement("a");

            function P(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function L(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? P(Object(n), !0).forEach((function (t) {
                        x(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : P(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function x(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            B = function (e) {
                return L({}, H(e))
            }, void 0 === k && (k = function (e) {
                return e
            }), void 0 === F && (F = new C({}));
            var B, k, F, j = /^(android-app:|chrome-extension:)/;

            function H(e) {
                M.href = e;
                var t = M.pathname || "";
                "/" !== t.charAt(0) && (t = "/" + t);
                var n = (M.search || "") + (M.hash || ""), r = e.lastIndexOf(n), o = -1 === r ? e : e.slice(0, r);
                if (j.test(e)) {
                    var i = H(e.replace(j, "https:"));
                    return M.href = e, L(L({}, i), {}, {
                        originalPath: o,
                        protocol: e.slice(0, e.indexOf(":") + 1),
                        href: M.href
                    })
                }
                var a = M.protocol && /^[a-z\-]+:/i.test(M.protocol) ? M.protocol : "";
                return {
                    originalPath: o,
                    href: M.href,
                    protocol: a,
                    host: M.host,
                    hostname: M.hostname,
                    port: M.port,
                    pathname: t,
                    search: M.search,
                    hash: M.hash
                }
            }

            var W = function (e) {
                try {
                    return decodeURIComponent(e)
                } catch (t) {
                    return e
                }
            };

            function U(e) {
                for (var t = {}, n = e.replace(/^[?#]+/, "").replace(/#.*$/, "").split("&"), r = 0; r < n.length; r++) {
                    var o = n[r].indexOf("="), i = void 0, a = void 0;
                    if (-1 === o ? (i = W(n[r]), a = "") : (i = W(n[r].slice(0, o)), a = n[r].slice(o + 1)), i) {
                        var s = Boolean(/(\[\])$/.exec(i));
                        i = i.replace(/\[\]$/, ""), s ? void 0 === t[i] ? t[i] = [W(a)] : t[i] = [].concat(t[i], W(a)) : t[i] = W(a)
                    }
                }
                return t
            }

            var Y;
            var V, G = "aim-banner-id", z = "aim-design-id", X = "aim-design-name", q = "aim-subdesign-id", K = ((Y = {
                    adsdkver: 0,
                    adsdkecmaver: 0,
                    adsdktracelogs: 0,
                    adsdksecuremode: 0,
                    adsdkwithcredentials: 0,
                    adsdkabflags: 0,
                    adsdkuaas: 0
                })[G] = 0, Y[z] = 0, Y[X] = 0, Y[q] = 0, Y.adsdkhoneypotforced = 0, Y.adsdkgrforced = 0, Y.vasnetworklogs = 0, Y.vasconsolelogs = 0, Y.vasdebug = 0, Y.vasfulldebug = 0, Y.adsdkdebug = 0, Y),
                Z = (0, d.Z)(K), $ = (0, d.Z)({Unsafe: 0, Safe: 0, ForceSafe: 0, OnlyYandexCreatives: 0});

            function Q(e) {
                return Boolean(e)
            }

            function J(e) {
                return e
            }

            var ee = ((V = {
                adsdkver: function (e) {
                    return (0, u.H)(e) ? e : void 0
                }, adsdkecmaver: function (e) {
                    var t = null == e ? void 0 : e.toUpperCase();
                    return "ES2017" === t || "ES5" === t ? t : void 0
                }, adsdktracelogs: Q, adsdksecuremode: function (e) {
                    return e && s($, e) ? e : void 0
                }, adsdkwithcredentials: function (e) {
                    var t = e ? ("" + e).toLowerCase() : void 0;
                    return "true" === t || "false" !== t && void 0
                }, adsdkabflags: J, adsdkuaas: J
            })[G] = J, V[z] = J, V[X] = J, V[q] = J, V.adsdkhoneypotforced = Q, V.adsdkgrforced = Q, V.vasnetworklogs = Q, V.vasconsolelogs = Q, V.vasdebug = Q, V.vasfulldebug = function (e) {
                return "false" !== e && Boolean(e)
            }, V.adsdkdebug = Q, V), te = n(30595);
            var ne = n(44979);

            function re(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (n) return (n = n.call(e)).next.__pbind(n);
                if (Array.isArray(e) || (n = function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return oe(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return oe(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var r = 0;
                    return function () {
                        return r >= e.length ? {done: !0} : {done: !1, value: e[r++]}
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function oe(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function ie() {
                return ie = Object.assign ? Object.assign.__pbind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, ie.apply(this, arguments)
            }

            var ae = new Set(Z);

            function se(e, t) {
                var n, r = ue(ce(e, {}), t);
                return n = t, ae.has(n) ? (0, ee[t])(r) : r
            }

            function ue(e, t) {
                for (var n, r = function () {
                    var e, r = n.value, o = r.sourceName, i = r.getter, a = (0, m.Y)((function () {
                        return i(t)
                    }));
                    if ((0, u.H)(a)) return e = "VAS WARNING! Hardcoded parameter=[" + t + "] with value=[" + a + "] found in [" + o + "]", (0, O.K)(console) && (0, te.m)(console.warn) && console.warn(e), {v: a}
                }, o = re(e); !(n = o()).done;) {
                    var i = r();
                    if ("object" == typeof i) return i.v
                }
            }

            function ce(e, t) {
                for (var n, r = {}, o = re((0, T.F)(e.document)); !(n = o()).done;) {
                    var i = n.value.location, a = U(H(i).search);
                    (0, y.M)(a, (function (e, t) {
                        r[t] = e
                    }))
                }
                var s = function (e) {
                    var t;
                    return (t = {
                        adsdktracelogs: e.VAS_TRACE_LOGS,
                        adsdksecuremode: e.VAS_SECURE_MODE,
                        adsdkwithcredentials: e.VAS_WITH_CREDENTIALS,
                        adsdkabflags: e.VAS_AB_FLAGS,
                        adsdkuaas: e.VAS_UAAS
                    })[G] = e.VAS_AIM_BANNER_ID, t[z] = e.VAS_AIM_DESIGN_ID, t[X] = e.VAS_AIM_DESIGN_NAME, t[q] = e.VAS_AIM_SUBDESIGN_ID, t.adsdkhoneypotforced = e.VAS_HONEYPOT_FORCED, t.adsdkgrforced = e.VAS_GR_FORCED, t.vasconsolelogs = e.VAS_CONSOLE_LOGS, t.vasnetworklogs = e.VAS_NETWORK_LOGS, t.vasdebug = e.VAS_DEBUG, t.vasfulldebug = e.VAS_FULL_DEBUG, t
                }(t);
                return [{
                    sourceName: "UrlParams", getter: function (e) {
                        return r[e]
                    }
                }, {
                    sourceName: "LocalStorage", getter: function (t) {
                        return ne.J.getItem(e, t)
                    }
                }, {
                    sourceName: "GlobalVariable", getter: function (t) {
                        for (var n, r, o, i = re((0, I.T)(e)); !(o = i()).done;) {
                            var a = null === (r = null === (n = o.value.Ya) || void 0 === n ? void 0 : n.hardcodedParams) || void 0 === r ? void 0 : r[t];
                            if (a) return String(a)
                        }
                    }
                }, {
                    sourceName: "ABFlag", getter: function (e) {
                        return s[e]
                    }
                }]
            }

            !function (e) {
                for (var t = e, n = [e], r = e.top; t !== r;) t = t.parent, n.push(t)
            }(window);
            var de = n(61397), le = (0, n(84741).A)(document.documentElement), fe = le.length,
                pe = fe > 0 ? le[fe - 1].ownerDocument.defaultView : window;
            var _e = n(71781), ve = n(60155), he = document.currentScript;
            if (!he) {
                var Ee = function (e) {
                    if (!e) return [];
                    for (var t = [], n = 0; n < e.length; n++) t.push(e[n]);
                    return t
                }(document.getElementsByTagName("script"));
                (he = (0, ve.s)(Ee, _e.H4)) || (he = Ee[Ee.length - 1])
            }
            var ge = he, me = ge ? (0, _e.NQ)(ge) : void 0;
            ge && (0, _e.dm)(ge);
            var Oe = ge ? ge.src : "", Ae = n(48425), be = "AdSDKLoader" === de.R0;

            function Se() {
                return Se = Object.assign ? Object.assign.__pbind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, Se.apply(this, arguments)
            }

            var Re, ye = function (e) {
                var t, n, r, o, i, a, s, u = A(null == me ? void 0 : me.STATS_ROOT_PARAMS), c = function (e, t) {
                        var n, r = (null == t ? void 0 : t.VAS_UAAS_CONFIG) || E.Lh;
                        try {
                            var o = se(e, "adsdkuaas"), i = g(o);
                            if (i.error) throw i.error;
                            r = i.config
                        } catch (e) {
                            n = e
                        }
                        return {config: r, parsingError: n}
                    }(e, me), d = c.config, f = c.parsingError, p = function (e, t, n) {
                        var r, o = t.flags, i = null !== (r = null == n ? void 0 : n.AB_FLAGS) && void 0 !== r ? r : {},
                            a = {};
                        0;
                        var s = se(e, "adsdkabflags"), u = (0, R.H)(s) ? l(s.split(","), (function (e, t) {
                            var n, r = t.split("="), o = r[0], i = r[1];
                            return Se(Se({}, e), ((n = {})[o] = i, n))
                        }), {}) : {};
                        return Se(Se(Se(Se({}, a), o), i), u)
                    }(e, d, me), _ = function (e, t) {
                        var n = ce(e, t), r = l(Z, (function (e, t) {
                            var r, o = ue(n, t), i = (0, ee[t])(o);
                            return ie(ie({}, e), ((r = {})[t] = i, r))
                        }), {});
                        return r.adsdkdebug && (console.warn("adsdkdebug is deprecated, use vasfulldebug instead"), r.vasfulldebug = !0), r.vasfulldebug && (r.vasnetworklogs = "false" !== ue(n, "vasnetworklogs"), r.vasconsolelogs = "false" !== ue(n, "vasconsolelogs"), r.vasdebug = "false" !== ue(n, "vasdebug")), r
                    }(e, p), v = _.vasdebug, h = _.vasconsolelogs, m = (_.adsdktracelogs, s = h, function (e) {
                        var t, n, r = pe.console;
                        if (s && void 0 !== r) {
                            for (var o = "AdSDKJS[" + de.R0 + "]:", i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), u = 1; u < i; u++) a[u - 1] = arguments[u];
                            null === (n = r.log) || void 0 === n || (t = n).call.apply(t, [r, o, e].concat(a))
                        }
                    }),
                    O = (null === (t = null == u ? void 0 : u.rootFields) || void 0 === t ? void 0 : t.vsid) || (null == me ? void 0 : me.VSID) || (0, b.QC)();
                m(((null === (n = null == u ? void 0 : u.rootFields) || void 0 === n ? void 0 : n.vsid) || (null == me ? void 0 : me.VSID) ? "Use VSID from session" : "Generate new VSID") + " [" + O + "]");
                var y = null !== (r = null == me ? void 0 : me.VAS_USER_SESSION_RANDOM) && void 0 !== r ? r : (0, S.M)(),
                    I = (null == me ? void 0 : me.ICOOKIE) || d.iCookie,
                    T = (null == me ? void 0 : me.AdditionalStatsRootFields) || u.rootFields || void 0,
                    w = (null == me ? void 0 : me.TEST_IDS) || d.testIds || void 0,
                    D = (Oe ? H(Oe).hostname : void 0) === Ae.l3,
                    N = null !== (o = null == me ? void 0 : me.loaderLoadedFromAnYandexRu) && void 0 !== o ? o : be && ("an" === d.src_domain || D),
                    C = null != me ? me : {}, M = C.productTheme, P = C.pageId, L = C.impId;
                return {
                    hardcodedParams: _,
                    isDebugEnabled: v,
                    VSID: O,
                    VAS_USER_SESSION_RANDOM: y,
                    AB_FLAGS: p,
                    ICOOKIE: I,
                    TEST_IDS: w,
                    VAS_UAAS_CONFIG: d,
                    VAS_UAAS_CONFIG_ParseError: f,
                    AdditionalStatsRootFields: T,
                    AdditionalStatsRootFieldsExtractionError: u.extractionError,
                    STATS_ROOT_PARAMS: null !== (i = null == me ? void 0 : me.STATS_ROOT_PARAMS) && void 0 !== i ? i : {},
                    isRumEnabledByLogProbability: !1,
                    loaderLoadedFromAnYandexRu: N,
                    activeTestIds: null == me ? void 0 : me.ActiveTestIds,
                    grWasSent: null !== (a = null == me ? void 0 : me.grWasSent) && void 0 !== a && a,
                    productTheme: M,
                    pageId: P,
                    impId: L
                }
            }(window), Ie = (null == me ? void 0 : me.AB_FLAGS_STORE) || function () {
                var e = new h(ye.VAS_UAAS_CONFIG, ye.AB_FLAGS);
                e.getFlagValueAndActivateTestId("ADSDKVER");
                var t = null == me ? void 0 : me.ActiveTestIds;
                t && e.activateExternalTestIds.apply(e, t);
                return e
            }();

            function Te(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            !function (e) {
                e[e["DO_NOTHING"] = 0] = "DO_NOTHING", e[e["CALL_NORMALLY"] = 1] = "CALL_NORMALLY", e[e["DEPENDS_ON_AB_FLAGS"] = 2] = "DEPENDS_ON_AB_FLAGS"
            }(Re || (Re = {}));
            var we = function () {
                function e() {
                    Object.defineProperty(this, "_isDestroyed", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: !1
                    }), Object.defineProperty(this, "destroyHandlers", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: []
                    }), Object.defineProperty(this, "_destroyReason", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    })
                }

                e.addErrorHandler = function (t) {
                    e.errorHandlers.push(t);
                    return function () {
                        var n = o(e.errorHandlers, (function (e) {
                            return e === t
                        }));
                        -1 !== n && e.errorHandlers.splice(n, 1)
                    }
                }, e.addCallAfterDestroyErrorHandler = function (t) {
                    e.callAfterDestroyErrorHandlers.push(t);
                    return function () {
                        var n = o(e.callAfterDestroyErrorHandlers, (function (e) {
                            return e === t
                        }));
                        -1 !== n && e.callAfterDestroyErrorHandlers.splice(n, 1)
                    }
                };
                var t, n, s, u = e.prototype;
                return u.addDestroyHandler = function (e) {
                    this._addDestroyHandler(e)
                }, u.destroy = function () {
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    var o = n[0];
                    this._isDestroyed || (this._isDestroyed = !0, this._destroyReason = o, (0, i.E)(this.destroyHandlers, (function (t) {
                        try {
                            t.apply(void 0, n)
                        } catch (t) {
                            (0, a.p)(e.errorHandlers, t)
                        }
                    })), this.destroyHandlers.length = 0)
                }, u.ignoreAfterDestroy = function (t, n, o) {
                    var i = this;
                    return void 0 === o && (o = Re.DO_NOTHING), function () {
                        for (var s = arguments.length, u = new Array(s), c = 0; c < s; c++) u[c] = arguments[c];
                        if (!i.isDestroyed) return t.apply(i, u);
                        var d = new r.J({code: "DESTROYABLE_METHOD_CALLED_AFTER_DESTROY", details: {identifier: n}});
                        if ((0, a.p)(e.callAfterDestroyErrorHandlers, d), o === Re.DEPENDS_ON_AB_FLAGS) {
                            if ("TRUE" === Ie.getFlagValueAndActivateTestId("VAS_DESTROYABLE_THROW_ERROR_AFTER_DESTROY")) {
                                var l = new Error("You cannot call a method of a class that had destroy() called");
                                throw l
                            }
                            if ("TRUE" === Ie.getFlagValueAndActivateTestId("VAS_DESTROYABLE_RETURN_UNDEFINED_AFTER_DESTROY")) return
                        }
                        return o === Re.CALL_NORMALLY ? t.apply(i, u) : void 0
                    }
                }, u._addDestroyHandler = function (e) {
                    this._isDestroyed ? e.apply(void 0, [this._destroyReason]) : this.destroyHandlers.push(e)
                }, t = e, (n = [{
                    key: "destroyReason", get: function () {
                        return this._destroyReason
                    }
                }, {
                    key: "isDestroyed", get: function () {
                        return this._isDestroyed
                    }
                }]) && Te(t.prototype, n), s && Te(t, s), Object.defineProperty(t, "prototype", {writable: !1}), e
            }();
            Object.defineProperty(we, "errorHandlers", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: []
            }), Object.defineProperty(we, "callAfterDestroyErrorHandlers", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: []
            })
        }, 71781: (e, t, n) => {
            "use strict";
            n.d(t, {H4: () => o, NQ: () => a, O4: () => i, dm: () => s});
            var r = n(50336), o = function (e) {
                return (0, r.K)(e.__AD_SDK_SCRIPT_SESSION_PARAMETERS__)
            }, i = function (e, t) {
                e.__AD_SDK_SCRIPT_SESSION_PARAMETERS__ = t
            }, a = function (e) {
                return e.__AD_SDK_SCRIPT_SESSION_PARAMETERS__
            }, s = function (e) {
                delete e.__AD_SDK_SCRIPT_SESSION_PARAMETERS__
            }
        }, 48425: (e, t, n) => {
            "use strict";
            n.d(t, {N9: () => o, l3: () => r});
            var r = ["a", "n.ya", "nd", "ex.ru"].join(""),
                o = (["y", "a", "nde", "x.ru"].join(""), ["ya", "sta", "tic.net"].join(""));
            ["ver", "ify.y", "a", "nde", "x.ru"].join("")
        }, 83818: (e, t, n) => {
            "use strict";
            n.d(t, {J: () => y});
            var r = n(41145), o = n(16480), i = n(69350), a = n(50336), s = function (e) {
                return !!(0, a.K)(e) && (!!(0, o.H)(e.name) && !!(0, o.H)(e.message))
            }, u = n(60155);
            var c = function (e) {
                try {
                    return "display" in (t = e, void 0 === n && (n = window), ("function" == typeof n.getComputedStyle ? n.getComputedStyle(t, null) : t.currentStyle) || {})
                } catch (e) {
                    return !1
                }
                var t, n
            }, d = n(30595);

            function l(e) {
                return n.lv["json"].stringify(e, (t = [], l = "undefined" == typeof WeakMap ? void 0 : new WeakMap, f = [], s = {
                    set: function (e, t) {
                        if (void 0 !== l) try {
                            l.set(e, t)
                        } catch (n) {
                            f.push({path: t, value: e})
                        } else f.push({path: t, value: e})
                    }, get: function (e) {
                        var t = (0, u.s)(f, (function (t) {
                            return t.value === e
                        }));
                        return void 0 !== l && void 0 === t ? l.get(e) : t ? t.path : void 0
                    }
                }, function (e, n) {
                    if ((0, d.m)(n)) return (0, o.H)(n.name) ? n.name : "[Function]";
                    if ((0, r.V)(n)) return {name: (u = n).name, message: u.message, stack: u.stack};
                    var u, l;
                    if (!(0, a.K)(n)) return n;
                    if (c(n)) return (l = n).id ? l.id : l.className ? l.className : "HTML Element";
                    var f = s.get(n);
                    if ((0, i.H)(f)) return "[Circular " + f + "]";
                    for (; t.length > 0 && t[t.length - 1].value[e] !== n;) t.pop();
                    var p = (t.length > 0 ? t[t.length - 1].path : "") + (e ? "/" + e : "~");
                    return t.push({path: p, value: n}), s.set(n, p), n
                }));
                var t, s, l, f
            }

            var f = n(66644), p = n.n(f);

            function _(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function v(e) {
                var t = "function" == typeof Map ? new Map : void 0;
                return v = function (e) {
                    if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
                    var n;
                    if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== t) {
                        if (t.has(e)) return t.get(e);
                        t.set(e, r)
                    }

                    function r() {
                        return h(e, arguments, m(this).constructor)
                    }

                    return r.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: r,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), g(r, e)
                }, v(e)
            }

            function h(e, t, n) {
                return h = E() ? Reflect.construct.__pbind() : function (e, t, n) {
                    var r = [null];
                    r.push.apply(r, t);
                    var o = new (Function.bind.apply(e, r));
                    return n && g(o, n.prototype), o
                }, h.apply(null, arguments)
            }

            function E() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }

            function g(e, t) {
                return g = Object.setPrototypeOf ? Object.setPrototypeOf.__pbind() : function (e, t) {
                    return e.__proto__ = t, e
                }, g(e, t)
            }

            function m(e) {
                return m = Object.setPrototypeOf ? Object.getPrototypeOf.__pbind() : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, m(e)
            }

            function O(e) {
                var t = e.url, n = e.line, r = e.col, o = e.fileName, i = e.columnNumber, a = e.lineNumber;
                return (t || o || "?") + ":" + (n || a || "?") + ":" + (r || i || "?")
            }

            var A = "DEFAULT_ERROR_MESSAGE", b = 0, S = "", R = "?:?:?", y = function (e) {
                var t, n;

                function r() {
                    var t, n = 2 === arguments.length ? arguments.length <= 0 ? void 0 : arguments[0] : void 0,
                        o = 2 === arguments.length ? arguments.length <= 1 ? void 0 : arguments[1] : arguments.length <= 0 ? void 0 : arguments[0],
                        i = s(n) || "object" == typeof n && n && "code" in n && "details" in n ? n : {message: String(n || A)};
                    t = e.call(this) || this, Object.defineProperty(_(t), "originalError", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(_(t), "message", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(_(t), "code", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(_(t), "details", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(_(t), "stack", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(_(t), "toString", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(_(t), "toJSON", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), t.originalError = "object" == typeof n && n ? n : {
                        unknown: n,
                        unknownStr: String(n)
                    }, p()(_(t), r.prototype);
                    var a = o.code || i.code || i.id || b, u = o.message || i.message || A;
                    t.message = "VAS Error [" + a + "]" + (u ? "[" + u + "]" : ""), t.code = a, t.details = o.details || i.details || S;
                    var c = i.stack || O(i), d = c === R ? t.stack : c;
                    if (d && d !== R) t.stack = d; else if (!t.stack) try {
                        throw new Error(t.message)
                    } catch (e) {
                        t.stack = d = e.stack || R
                    }
                    return t.toString = function () {
                        return l(t.toJSON())
                    }, t.toJSON = function () {
                        return {
                            originalError: t.originalError,
                            message: t.message,
                            code: t.code,
                            details: t.details,
                            stack: d
                        }
                    }, t
                }

                return n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, g(t, n), r
            }(v(Error))
        }, 44979: (e, t, n) => {
            "use strict";
            n.d(t, {J: () => r});
            var r = {
                getItem: function (e, t) {
                    try {
                        return e.localStorage.getItem(t)
                    } catch (e) {
                        return null
                    }
                }, setItem: function (e, t, n) {
                    try {
                        e.localStorage.setItem(t, n)
                    } catch (e) {
                        return
                    }
                }, removeItem: function (e, t) {
                    try {
                        e.localStorage.removeItem(t)
                    } catch (e) {
                        return
                    }
                }
            }
        }, 61397: (e, t, n) => {
            "use strict";
            n.d(t, {R0: () => o, m1: () => r});
            var r = "undefined" == typeof BUNDLES_PATH ? "" : BUNDLES_PATH,
                o = "undefined" == typeof BUNDLE_NAME ? "Test" : BUNDLE_NAME;
            "undefined" == typeof BUILD_TIME || BUILD_TIME
        }, 82170: (e, t, n) => {
            "use strict";
            n.d(t, {h: () => r});
            var r = function (e, t, n) {
                for (var r = [], o = 0; o < e.length; o++) {
                    var i = e[o];
                    t.call(n, i, o, e) && r.push(i)
                }
                return r
            }
        }, 60155: (e, t, n) => {
            "use strict";
            n.d(t, {s: () => i});
            var r = n(16446), o = [].find, i = (0, r.E)(o) ? function (e, t) {
                return o.call(e, t)
            } : function (e, t) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    if (t(r, n, e)) return r
                }
            }
        }, 89160: (e, t, n) => {
            "use strict";
            n.d(t, {E: () => r});
            var r = function (e, t, n) {
                for (var r = 0; r < e.length; r++) t.call(n, e[r], r, e)
            }
        }, 59899: (e, t, n) => {
            "use strict";
            n.d(t, {k: () => a});
            var r = n(20363), o = n(16446);
            var i = function (e, t) {
                var n = e[t];
                if (!(0, o.E)(n)) {
                    var r = n;
                    try {
                        delete e[t];
                        var i = e[t];
                        "function" == typeof i && (n = i), e[t] = r
                    } catch (e) {
                    }
                }
                return n
            }(Array, "isArray"), a = Boolean(i) ? function (e) {
                return i.call(Array, e)
            } : function (e) {
                return "Array" === (0, r.M)(e)
            }
        }, 32302: (e, t, n) => {
            "use strict";
            n.d(t, {p: () => i});
            var r = n(89160), o = n(59899);

            function i(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                (0, o.k)(e) && (0, r.E)(e, (function (e) {
                    "function" == typeof e && e.apply(void 0, n)
                }))
            }
        }, 16446: (e, t, n) => {
            "use strict";

            function r(e) {
                if (!Boolean(null == e ? void 0 : e.toString)) return !1;
                var t = e.toString();
                return /\[native code\]/.test(t) || /\/\* source code not available \*\//.test(t)
            }

            n.d(t, {E: () => r})
        }, 30595: (e, t, n) => {
            "use strict";

            function r(e) {
                return "function" == typeof e
            }

            n.d(t, {m: () => r})
        }, 17835: (e, t, n) => {
            "use strict";

            function r() {
            }

            n.d(t, {Z: () => r})
        }, 94356: (e, t, n) => {
            "use strict";

            function r(e) {
                var t = function () {
                    var n;
                    return t = function () {
                        return n
                    }, n = e.apply(this, arguments)
                };
                return function () {
                    return t.apply(this, arguments)
                }
            }

            n.d(t, {I: () => r})
        }, 48953: (e, t, n) => {
            "use strict";

            function r(e, t) {
                try {
                    return e()
                } catch (e) {
                    "function" == typeof t && t(e)
                }
            }

            n.d(t, {Y: () => r})
        }, 84741: (e, t, n) => {
            "use strict";
            n.d(t, {A: () => o});
            var r = n(23104);

            function o(e, t) {
                if (void 0 === t && (t = !0), r.$ && t) return [];
                for (var n = [], o = e; ;) try {
                    if (!(o = o.ownerDocument.defaultView.frameElement)) return n;
                    n.push(o)
                } catch (e) {
                    return n
                }
            }
        }, 85771: (e, t, n) => {
            "use strict";

            function r(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }

            function o(e) {
                if ("function" == typeof Object.keys) return Object.keys(e);
                var t = [];
                for (var n in e) r(e, n) && t.push(n);
                return t
            }

            n.d(t, {Z: () => o})
        }, 50336: (e, t, n) => {
            "use strict";

            function r(e) {
                var t = typeof e;
                return Boolean(e) && ("object" === t || "function" === t)
            }

            n.d(t, {K: () => r})
        }, 56738: (e, t, n) => {
            "use strict";

            function r(e, t) {
                !function (e) {
                    return "function" == typeof e.dispatch
                }(e) ? e(t) : e.dispatch(t)
            }

            n.d(t, {p: () => r})
        }, 65812: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {Signal: () => s});
            var r = n(82170), o = n(89160), i = n(56738);

            function a(e, t) {
                (0, o.E)(e, (function (e) {
                    (0, i.p)(e, t)
                }))
            }

            var s = function () {
                function e() {
                    Object.defineProperty(this, "on", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: []
                    }), Object.defineProperty(this, "once", {enumerable: !0, configurable: !0, writable: !0, value: []})
                }

                var t = e.prototype;
                return t.add = function () {
                    for (var e, t = this, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                    return (e = this.on).push.apply(e, r), function () {
                        t.remove.apply(t, r)
                    }
                }, t.addOne = function () {
                    for (var e, t = this, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                    return (e = this.once).push.apply(e, r), function () {
                        t.remove.apply(t, r)
                    }
                }, t.promise = function () {
                    var e = this;
                    return new Promise((function (t) {
                        e.addOne(t)
                    }))
                }, t.dispatch = function (e) {
                    var t = this.once;
                    this.once = [], a(this.on, e), a(t, e)
                }, t.removeAll = function () {
                    this.on.length = 0, this.once.length = 0
                }, t.remove = function () {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    this.on = (0, r.h)(this.on, (function (e) {
                        return t.indexOf(e) < 0
                    })), this.once = (0, r.h)(this.once, (function (e) {
                        return t.indexOf(e) < 0
                    }))
                }, e
            }()
        }, 43984: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {ValueSignal: () => s});
            var r = n(65812), o = n(56738);

            function i(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function a(e, t) {
                return a = Object.setPrototypeOf ? Object.setPrototypeOf.__pbind() : function (e, t) {
                    return e.__proto__ = t, e
                }, a(e, t)
            }

            var s = function (e) {
                var t, n;

                function r(t, n) {
                    var r;
                    return void 0 === n && (n = function (e, t) {
                        return e === t
                    }), r = e.call(this) || this, Object.defineProperty(i(r), "checkToEqualFunction", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: n
                    }), Object.defineProperty(i(r), "value", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), r.value = t, r
                }

                n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, a(t, n);
                var s = r.prototype;
                return s.getValue = function () {
                    return this.value
                }, s.subscribeValueCondition = function (e, t) {
                    return this.add((function (n) {
                        e(n) && (0, o.p)(t, n)
                    }))
                }, s.subscribeValueConditionOnce = function (e, t) {
                    var n = this.subscribeValueCondition(e, (function (e) {
                        n(), (0, o.p)(t, e)
                    }));
                    return n
                }, s.dispatch = function (t) {
                    this.checkToEqualFunction(this.value, t) || (this.value = t, e.prototype.dispatch.call(this, t))
                }, r
            }(r.Signal)
        }, 36976: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {SizeSensor: () => f});
            var r = function (e) {
                try {
                    var t = e.getBoundingClientRect(), n = t.left, r = t.right, o = t.top, i = t.bottom;
                    return {left: n, right: r, top: o, bottom: i, width: r - n, height: i - o}
                } catch (e) {
                    return {left: 0, width: 0, top: 0, height: 0, right: 0, bottom: 0}
                }
            }, o = n(20335), i = n(65241), a = n(16446), s = n(43984), u = n(26951);

            function c() {
                return c = Object.assign ? Object.assign.__pbind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, c.apply(this, arguments)
            }

            function d(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function l(e, t) {
                return l = Object.setPrototypeOf ? Object.setPrototypeOf.__pbind() : function (e, t) {
                    return e.__proto__ = t, e
                }, l(e, t)
            }

            var f = function (e) {
                var t, n;

                function o(t) {
                    var n, o;
                    n = e.call(this) || this, Object.defineProperty(d(n), "onResize", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(d(n), "resizeObserverCallback", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: function (e) {
                            var t = e[0].contentRect, r = t.width, o = t.height;
                            n.onResize.dispatch({width: r, height: o})
                        }
                    }), Object.defineProperty(d(n), "getElementWindow", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: function (e) {
                            var t;
                            return (null === (t = e.ownerDocument) || void 0 === t ? void 0 : t.defaultView) || null
                        }
                    });
                    var i = r(t);
                    n.onResize = new s.ValueSignal({width: i.width, height: i.height}, (function (e, t) {
                        var n = t.width, r = t.height;
                        return e.width === n && e.height === r
                    })), n.addDestroyHandler((function () {
                        n.onResize.removeAll()
                    }));
                    var u = n.getElementWindow(t),
                        c = null !== (o = null == u ? void 0 : u.ResizeObserver) && void 0 !== o ? o : window.ResizeObserver;
                    if (void 0 !== c && (0, a.E)(ResizeObserver)) try {
                        var l = new c(n.resizeObserverCallback);
                        l.observe(t), n.addDestroyHandler((function () {
                            l.disconnect()
                        }))
                    } catch (e) {
                        n.fallbackToCustomDetectionMethods(t)
                    } else n.fallbackToCustomDetectionMethods(t);
                    return n
                }

                n = e, (t = o).prototype = Object.create(n.prototype), t.prototype.constructor = t, l(t, n);
                var f = o.prototype;
                return f.getSize = function () {
                    return c({}, this.onResize.getValue())
                }, f.fallbackToCustomDetectionMethods = function (e) {
                    var t = this, n = this.getElementWindow(e);
                    if (n) {
                        var o = function () {
                            var n = r(e);
                            t.onResize.dispatch({width: n.width, height: n.height})
                        };
                        this.addDestroyHandler((0, i.addElementEventListener)({
                            element: n,
                            eventName: "resize",
                            listener: o,
                            options: {passive: !0}
                        })), this.addDestroyHandler((0, u.X)(o))
                    }
                }, o
            }(o.V)
        }, 26951: (e, t, n) => {
            "use strict";
            n.d(t, {X: () => a});
            var r = n(32302), o = 0, i = [];

            function a(e) {
                return 0 === i.length && (o = window.setInterval((function () {
                    (0, r.p)(i)
                }), 250)), i.push(e), function () {
                    var t = i.indexOf(e);
                    t > -1 && i.splice(t, 1), 0 === i.length && window.clearInterval(o)
                }
            }
        }, 72577: (e, t, n) => {
            "use strict";
            n.d(t, {Lh: () => f, Ou: () => p, vn: () => _});
            var r = n(41145), o = n(23750), i = n(89160), a = n(59899), s = n(94356), u = n(85771), c = n(50336);

            function d() {
                return d = Object.assign ? Object.assign.__pbind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, d.apply(this, arguments)
            }

            var l = function (e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
                }
                return n
            }, f = {testIds: "", flags: {}};
            var p = (0, s.I)((function () {
                try {
                    return __UAAS_CFG__
                } catch (e) {
                    return e
                }
            })), _ = function (e) {
                if ((0, r.V)(e)) return {error: e, config: f};
                try {
                    var t = (0, c.K)(e) ? e : n.lv["json"].parse("" + (e || "")), s = function (e) {
                        return !!(0, c.K)(e) && !(!("expFlags" in e) || !(0, a.k)(e.expFlags))
                    }(t) ? function (e) {
                        e.expFlags;
                        var t = l(e, ["expFlags"]), n = {}, r = {};
                        return (0, i.E)(e.expFlags, (function (e) {
                            (0, i.E)(e, (function (e) {
                                var t = e.CONTEXT.FLAGS, o = e.TESTID;
                                (0, c.K)(t) && (0, i.E)((0, u.Z)(t), (function (e) {
                                    var i, a = t[e];
                                    n[e] = a, r[e] = null !== (i = r[e]) && void 0 !== i ? i : [], r[e].push({
                                        value: a,
                                        testId: o[0]
                                    })
                                }))
                            }))
                        })), d({flags: n, flagsMap: r}, t)
                    }(t) : t;
                    if (!function (e, t) {
                        if (!(0, c.K)(t)) throw new Error("Parsed replaced macro is not an object: " + e);
                        if ((0, o.m)(t.testIds), !("flags" in t) || !(0, c.K)(t.flags)) throw new Error("Parsed replaced macro has no flags field: " + e);
                        return !0
                    }(String(e), s)) throw new Error("UAAS config is not valid: " + e);
                    return {error: void 0, config: s}
                } catch (e) {
                    return {error: e, config: f}
                }
            }
        }, 65241: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {addElementEventListener: () => d, createFullOptionsObject: () => c});
            var r = n(30595), o = n(17835), i = !1, a = !1;
            try {
                var s = document.createElement("div"), u = {};
                Object.defineProperty(u, "once", {
                    get: function () {
                        return i = !0
                    }
                }), Object.defineProperty(u, "passive", {
                    get: function () {
                        return !0
                    }
                }), Object.defineProperty(u, "capture", {
                    get: function () {
                        return a = !0
                    }
                }), s.addEventListener("click", o.Z, u)
            } catch (e) {
            }

            function c(e) {
                var t = !1, n = !1, r = !1;
                return !0 === e ? t = !0 : "object" == typeof e && (t = Boolean(e.capture), n = Boolean(e.passive), r = Boolean(e.once)), {
                    capture: t,
                    passive: n,
                    once: r
                }
            }

            function d(e) {
                var t = e.element, n = e.eventName, o = e.listener, s = e.options, u = e.ignoreBubbling,
                    d = void 0 !== u && u ? function (e) {
                        e.target === t && o.call(this, e)
                    } : o, l = c(s), f = a ? l : l.capture, p = l.once && !i ? function (e) {
                        _(), d.call(this, e)
                    } : d, _ = function () {
                        (0, r.m)(t.removeEventListener) && t.removeEventListener(n, p, f)
                    };
                return t.addEventListener(n, p, f), _
            }
        }, 7601: (e, t, n) => {
            "use strict";
            n.d(t, {QC: () => c});
            var r, o = n(59169);

            function i(e, t, n) {
                void 0 === n && (n = " ");
                var r = t - e.length;
                if (r > 0) {
                    for (var o = n; o.length < r;) o += o;
                    return (o.length > r ? o.substr(0, r) : o) + e
                }
                return e
            }

            try {
                r = BUILD_VERSION
            } catch (e) {
                r = "INVALID_BUILD_VERSION"
            }
            var a = r, s = "VAS", u = function (e) {
                return i(e.substr(-4), 4, "0")
            }, c = function (e) {
                return void 0 === e && (e = a), [(0, o.a)(44), s, u(e), i(Date.now().toString().slice(0, 10), 10, "0")].join("x")
            }
        }, 12890: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.loadFloorAdController = void 0;
            var r = n(50238);
            t.loadFloorAdController = (0, r.getModuleLoader)("FloorAdController", (function () {
                return n(4465)
            }), (function (e) {
                return function (t) {
                    var n = t.floorAdController;
                    return e(n)
                }
            }))
        }, 57354: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.loadNewFullscreenController = void 0;
            var r = n(50238);
            t.loadNewFullscreenController = (0, r.getModuleLoader)("NewFullscreenController", (function () {
                return n(86545)
            }), (function (e) {
                return function (t) {
                    var n = t.getControllerInstance;
                    return e(n())
                }
            }))
        }, 50238: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.getModuleLoader = void 0;
            var r = n(49874);
            t.getModuleLoader = function (e, t, n) {
                var o;
                return function (i, a) {
                    return o || (o = new Promise((function (o) {
                        t()((function (e) {
                            n ? n(o)(e) : o(e)
                        }), (function (t) {
                            r.logger.error(t, "".concat(e, " bundle loading error")), null == a || a(t)
                        }))
                    }))), i && o.then(i), o
                }
            }
        }, 24064: (e, t, n) => {
            "use strict";
            var r;
            Object.defineProperty(t, "__esModule", {value: !0}), t.ExperimentsProvider = t.useExperiments = void 0;
            var o = n(55232);
            t.useExperiments = (r = (0, o.createCtx)())[0], t.ExperimentsProvider = r[1]
        }, 55232: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.createCtx = void 0;
            var r = n(6400), o = n(30396);
            t.createCtx = function () {
                var e = (0, r.createContext)(void 0);
                return [function () {
                    var t = (0, o.useContext)(e);
                    if (void 0 === t) throw new Error("useCtx must be inside a Provider with a value");
                    return t
                }, e.Provider]
            }
        }, 93872: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.SIZE_EXP_VALUES = t.FLOOR_AD_SCREEN_PART_EXP = t.TOP_AD_HEIGHT = t.POSITIONS = t.DIRECTIONS = t.FLOOR_AD_MIN_HEIGHT_TGA_EXP = t.FLOOR_AD_MAX_HEIGHT_TGA_EXP = t.MIN_FLOOR_AD_CONTAINER_WIDTH_WITH_SIDE_BORDERS = t.FLOOR_AD_CROSS_HEIGHT = t.FLOOR_AD_BORDER_WIDTH = t.FLOOR_AD_SHOW_TIMEOUT = t.MIN_FLOOR_AD_HEIGHT = t.FLOOR_AD_MAX_SCREEN_PART = t.FLOOR_AD_TGA_RATIO = t.FLOOR_AD_DEFAULT_RATIO = t.FLOOR_AD_ANIMATION_DURATION_MS = void 0, t.FLOOR_AD_ANIMATION_DURATION_MS = 300, t.FLOOR_AD_DEFAULT_RATIO = .25, t.FLOOR_AD_TGA_RATIO = .15, t.FLOOR_AD_MAX_SCREEN_PART = .3, t.MIN_FLOOR_AD_HEIGHT = 50, t.FLOOR_AD_SHOW_TIMEOUT = 2e3, t.FLOOR_AD_BORDER_WIDTH = 2, t.FLOOR_AD_CROSS_HEIGHT = 24, t.MIN_FLOOR_AD_CONTAINER_WIDTH_WITH_SIDE_BORDERS = 324, t.FLOOR_AD_MAX_HEIGHT_TGA_EXP = 250, t.FLOOR_AD_MIN_HEIGHT_TGA_EXP = 100, t.DIRECTIONS = ["top", "left", "right", "bottom"], t.POSITIONS = ["top", "bottom"], t.TOP_AD_HEIGHT = 100, t.FLOOR_AD_SCREEN_PART_EXP = .25, t.SIZE_EXP_VALUES = ["all", "media"]
        }, 57003: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.normalizeOffset = t.getShortWindowSide = t.getLongWindowSide = t.getWidthSideBorder = t.hasSideBorders = t.normalizeFloorAdHeightExp = t.normalizeFloorAdHeight = t.getFloorAdBannerMaxHeight = t.getFloorAdSize = t.getFloorAdOuterNodeSize = void 0;
            var r = n(93872), o = n(88772), i = n(34403), a = n(80511);
            t.getFloorAdOuterNodeSize = function (e) {
                var t = window.innerHeight, n = window.innerWidth, i = l(), c = f(),
                    d = s(r.FLOOR_AD_DEFAULT_RATIO * c, {width: n, height: t}),
                    p = (0, o.useExperimentFlag)("CHANGE_MAX_HEIGHT_FLOOR_AD_EXP", !0);
                return (0, a.includes)(r.SIZE_EXP_VALUES, p) && (d = u(i * r.FLOOR_AD_SCREEN_PART_EXP)), "top" === e && (d = r.TOP_AD_HEIGHT), {
                    width: c,
                    height: d + r.FLOOR_AD_BORDER_WIDTH
                }
            }, t.getFloorAdSize = function (e) {
                var t = (0, i.getBoundingClientRect)(e), n = t.height, o = t.width;
                return {height: n + (r.FLOOR_AD_BORDER_WIDTH + r.FLOOR_AD_CROSS_HEIGHT), width: o + 2 * d()}
            };

            function s(e, n) {
                var o = (0, t.getFloorAdBannerMaxHeight)(n);
                return Math.round(Math.max(Math.min(e, o), r.MIN_FLOOR_AD_HEIGHT))
            }

            function u(e) {
                return Math.min(Math.max(Math.round(e), r.FLOOR_AD_MIN_HEIGHT_TGA_EXP), r.FLOOR_AD_MAX_HEIGHT_TGA_EXP)
            }

            function c() {
                return f() >= r.MIN_FLOOR_AD_CONTAINER_WIDTH_WITH_SIDE_BORDERS
            }

            function d() {
                return c() ? r.FLOOR_AD_BORDER_WIDTH : 0
            }

            function l(e, t) {
                return void 0 === e && (e = window.innerHeight), void 0 === t && (t = window.innerWidth), Math.max(e, t)
            }

            function f(e, t) {
                return void 0 === e && (e = window.innerHeight), void 0 === t && (t = window.innerWidth), Math.min(e, t)
            }

            t.getFloorAdBannerMaxHeight = function (e) {
                var t = e.height, n = void 0 === t ? window.innerHeight : t, o = e.width,
                    i = l(n, void 0 === o ? window.innerWidth : o);
                return r.FLOOR_AD_MAX_SCREEN_PART * i
            }, t.normalizeFloorAdHeight = s, t.normalizeFloorAdHeightExp = u, t.hasSideBorders = c, t.getWidthSideBorder = d, t.getLongWindowSide = l, t.getShortWindowSide = f, t.normalizeOffset = function (e) {
                return "number" == typeof e ? e : 0
            }
        }, 50102: (e, t, n) => {
            "use strict";
            var r = function () {
                return r = Object.assign || function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, r.apply(this, arguments)
            };
            Object.defineProperty(t, "__esModule", {value: !0}), t.getTransitionFloorAdStateStyles = t.getClosedFloorAdStateStyles = t.getOpenedFloorAdStateStyles = t.getTransition = t.normalizePosition = t.getFloorAdBorderStyles = t.getOuterContainerFloorAdStyles = t.getFloorAdBannerStyles = void 0;
            var o = n(93872), i = n(7386), a = n(57003), s = n(80511), u = n(12773), c = n(94320), d = n(385);

            function l(e, t) {
                return void 0 === t && (t = o.FLOOR_AD_BORDER_WIDTH), (0, u.reduce)(e, (function (e, n) {
                    var r;
                    return e[(r = n, "border".concat((0, d.capitalizeFirst)(r), "Width"))] = "".concat(t, "px"), e
                }), {})
            }

            function f() {
                return (0, i.isHermione)() ? "none" : "transform ".concat(o.FLOOR_AD_ANIMATION_DURATION_MS, "ms ease-in")
            }

            function p(e) {
                return "top" === e ? {transition: f(), transform: "translateY(calc(-100% - 30px))"} : {
                    transition: f(),
                    transform: "translateY(calc(100% + 30px))"
                }
            }

            t.getFloorAdBannerStyles = function (e) {
                var t = p(e), n = (0, a.getFloorAdOuterNodeSize)(e), i = n.width, s = n.height,
                    u = (0, a.getWidthSideBorder)();
                return r(r({}, t), {
                    width: "".concat(i - 2 * u, "px"),
                    height: "".concat(s - o.FLOOR_AD_BORDER_WIDTH, "px"),
                    margin: "0 auto",
                    display: "flex",
                    "justify-content": "center"
                })
            }, t.getOuterContainerFloorAdStyles = function (e, t) {
                var n;
                return (n = {})[e] = "".concat(t, "px"), n["pointer-events"] = "none", n["align-items"] = "top" === e ? "flex-start" : "flex-end", n.display = "flex", n.margin = "0 auto", n
            }, t.getFloorAdBorderStyles = function (e) {
                var t = [];
                "top" !== e && "bottom" !== e || ((0, a.hasSideBorders)() && (t.push("left"), t.push("right")), "top" === e ? t.push("bottom") : t.push("top"));
                var n = (0, c.filter)(o.DIRECTIONS, (function (e) {
                    return !(0, s.includes)(t, e)
                }));
                return r(r({}, l(t)), l(n, 0))
            }, t.normalizePosition = function (e) {
                return e && (0, s.includes)(o.POSITIONS, e) ? e : "bottom"
            }, t.getTransition = f, t.getOpenedFloorAdStateStyles = function () {
                return {transition: f(), transform: "translateY(0)"}
            }, t.getClosedFloorAdStateStyles = p, t.getTransitionFloorAdStateStyles = function (e) {
                return p(e)
            }
        }, 53684: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.waitForFloorAdTimeout = void 0;
            var r = n(7386), o = n(93872);
            t.waitForFloorAdTimeout = function (e) {
                var t = void 0 === e ? {} : e, n = t.isRefresh, i = t.callback, a = n || (0, r.isHermione)();
                return new Promise((function (e) {
                    return setTimeout((function () {
                        null == i || i(), e()
                    }), a ? 0 : o.FLOOR_AD_SHOW_TIMEOUT)
                }))
            }
        }, 505: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.NEW_FULLSCREEN_PREFERRED_WIDTH_DESKTOP = t.NEW_FULLSCREEN_GRID_PREFERRED_HEIGHT_DESKTOP = t.NEW_FULLSCREEN_PREFERRED_HEIGHT_DESKTOP = t.NEW_FULLSCREEN_GAP_SIZE_DESKTOP = t.NEW_FULLSCREEN_HEADER_HEIGHT_DESKTOP = t.NEW_FULLSCREEN_HEADER_HEIGHT_MOBILE = t.YS_FONT = t.CLOSE_BUTTON_TIMEOUT_FOR_VIDEO_CREATIVE_REACH = t.VIDEO_CREATIVE_REACH_PRODUCT_TYPE = void 0, t.VIDEO_CREATIVE_REACH_PRODUCT_TYPE = "video-creative-reach", t.CLOSE_BUTTON_TIMEOUT_FOR_VIDEO_CREATIVE_REACH = 3, t.YS_FONT = "ys", t.NEW_FULLSCREEN_HEADER_HEIGHT_MOBILE = 49, t.NEW_FULLSCREEN_HEADER_HEIGHT_DESKTOP = 80, t.NEW_FULLSCREEN_GAP_SIZE_DESKTOP = 20, t.NEW_FULLSCREEN_PREFERRED_HEIGHT_DESKTOP = 293, t.NEW_FULLSCREEN_GRID_PREFERRED_HEIGHT_DESKTOP = 480, t.NEW_FULLSCREEN_PREFERRED_WIDTH_DESKTOP = 1080
        }, 16714: (e, t, n) => {
            "use strict";
            t.PN = void 0;
            var r = n(505), o = function (e) {
                return Math.ceil(e)
            }, i = function (e) {
                return Math.ceil(e - r.NEW_FULLSCREEN_HEADER_HEIGHT_MOBILE)
            }, a = function (e, t) {
                return Math.ceil(e - ((null == t ? void 0 : t.ignoreGap) ? 0 : r.NEW_FULLSCREEN_GAP_SIZE_DESKTOP))
            }, s = function (e) {
                return Math.ceil(e - r.NEW_FULLSCREEN_HEADER_HEIGHT_DESKTOP - r.NEW_FULLSCREEN_GAP_SIZE_DESKTOP)
            }, u = function (e) {
                return Math.ceil(Math.min(r.NEW_FULLSCREEN_PREFERRED_WIDTH_DESKTOP, a(e)))
            }, c = function (e) {
                return Math.ceil(Math.min(r.NEW_FULLSCREEN_PREFERRED_HEIGHT_DESKTOP, s(e)))
            }, d = function (e, t) {
                return Math.ceil(Math.min(r.NEW_FULLSCREEN_PREFERRED_WIDTH_DESKTOP, a(e, t)))
            }, l = function (e) {
                return Math.ceil(Math.min(r.NEW_FULLSCREEN_GRID_PREFERRED_HEIGHT_DESKTOP, s(e)))
            };
            t.PN = function (e) {
                var t = e.screenHeight, n = e.screenWidth, r = e.isMobile;
                return {height: r ? i(t) : s(t), width: r ? o(n) : a(n)}
            }
        }, 3164: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.getMobileAppProps = t.isMobileApp = t.getLimit = t.getCommon = t.getSettings = t.getDirectTitle = void 0;
            var r = n(87270), o = n(55598), i = n(46153), a = n(10407), s = n(59696), u = n(24064), c = n(98710),
                d = n(66812);

            function l(e) {
                return e.addInfo && "mobile-app" === e.addInfo.type
            }

            t.getDirectTitle = function (e, t) {
                var n = (e.direct || {}).directTitle;
                if (n) {
                    var i = n.url, a = n.userCurrency, c = n.title, d = (0, s.isCurrencyTitle)(a),
                        l = (0, u.useExperiments)().isAdblock, f = d && !l && a;
                    return {
                        title: c || (0, r.i18nCommon)("ADVERTISEMENT", t),
                        url: i,
                        tooltip: (0, o.i18nBanners)("YANDEX_DIRECT", t),
                        currency: f
                    }
                }
            }, t.getSettings = function (e) {
                if (e.settings) {
                    var t = (0, a.getObjectKeys)(e.settings)[0];
                    if (t) return e.settings[t]
                }
                return {}
            }, t.getCommon = function (e) {
                return e.common || {}
            }, t.getLimit = function (e) {
                var t = e.limit;
                return t ? parseInt(t, 10) : void 0
            }, t.isMobileApp = l, t.getMobileAppProps = function (e, t, n, a) {
                var s = n.pixel_ratio, u = n.bandwidth;
                if (l(e)) {
                    var f, p = e.addInfo, _ = e.skipPictures, v = e.domain;
                    p.icon && p.icon.length && !Number(_) && (f = (0, c.selectImageForContainerSize)(p.icon, t, s, u));
                    var h, E = (0, o.i18nBanners)("FREE", a || 1), g = (0, i.camelizeKeys)(p), m = g.callToAction,
                        O = g.reviewCount, A = g.callToActionUrl, b = g.price, S = g.priceCurrencySymbol, R = g.free,
                        y = g.rating, I = g.name, T = g.icon, w = b ? b + (S || "\u0440.") : void 0,
                        D = O && O > 0 ? O : void 0;
                    return {
                        icon: f,
                        icons: T,
                        caption: m || (0, r.i18nCommon)("GO", a || 1),
                        reviewCount: D,
                        url: A,
                        price: b,
                        priceCurrencySymbol: S,
                        free: R,
                        rating: y && y > 3.5 ? y : 0,
                        priceCaption: R ? E : w,
                        platform: (0, d.getRmpPlatformName)(v),
                        priceWithCurrency: w,
                        callToActionUrl: A,
                        name: I,
                        callToAction: m,
                        reviewLabel: function () {
                            if (D) return "".concat(D, " \u043e\u0442\u0437\u044b\u0432\u043e\u0432")
                        }(),
                        buttonLabel: (h = (0, d.getRmpPlatformName)(e.domain) === d.RmpPlatformName.IOS, {
                            longTitle: (0, o.i18nBanners)("INSTALL_FROM_STORE", a, {store: h ? "App Store" : "Google Play"}),
                            shortTitle: (0, o.i18nBanners)("INSTALL", a)
                        })
                    }
                }
            }
        }, 66812: (e, t) => {
            "use strict";
            var n, r;
            Object.defineProperty(t, "__esModule", {value: !0}), t.getRmpPlatformName = t.rmpStoreName = t.RmpPlatformName = void 0, function (e) {
                e["ANDROID"] = "android", e["IOS"] = "ios", e["HUAWEI"] = "huawei"
            }(r = t.RmpPlatformName || (t.RmpPlatformName = {})), t.rmpStoreName = ((n = {})[r.IOS] = "App Store", n[r.ANDROID] = "Google Play", n[r.HUAWEI] = "App Gallery", n);
            var o = ["play.google.com", "google play"], i = [];
            t.getRmpPlatformName = function (e) {
                var t = e.toLowerCase();
                return o.indexOf(t) > -1 ? r.ANDROID : i.indexOf(t) > -1 ? r.HUAWEI : r.IOS
            }
        }, 281: e => {
            e.exports = function (e) {
                e || (e = window);
                var t = e.navigator.userAgent, n = t.indexOf("MSIE ");
                if (n > 0) return parseInt(t.substring(n + 5, t.indexOf(".", n)), 10);
                if (t.indexOf("Trident/") > 0) {
                    var r = t.indexOf("rv:");
                    return parseInt(t.substring(r + 3, t.indexOf(".", r)), 10)
                }
                var o = t.indexOf("Edge/");
                return o > 0 && parseInt(t.substring(o + 5, t.indexOf(".", o)), 10)
            }
        }, 46056: e => {
            e.exports = {
                ARM_DEFAULT_TITLE: {
                    ar: "\u0627\u0644\u0645\u0632\u064a\u062f \u0645\u0646 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0639\u0646 \u0627\u0644\u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u0645\u0639\u0644\u0646\u0629",
                    cs: "Bli\u017e\u0161\xed informace na webov\xe9 str\xe1nce inzerenta",
                    en: "More information on the advertised website",
                    fr: "Plus d'informations sur le site annonc\xe9",
                    he: "\u05de\u05d9\u05d3\u05e2 \u05e0\u05d5\u05e1\u05e3 \u05d1\u05d0\u05ea\u05e8 \u05e2\u05dd \u05d4\u05e4\u05e8\u05e1\u05d5\u05de\u05d5\u05ea",
                    it: "Maggiori informazioni sul sito web pubblicizzato",
                    ja: "\u5ba3\u4f1d\u3055\u308c\u305f\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u306e\u8a73\u7d30",
                    pt: "Mais informa\xe7\xf5es no s\xedtio web do anunciante",
                    ru: "\u0411\u043e\u043b\u044c\u0448\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435 \u0440\u0435\u043a\u043b\u0430\u043c\u043e\u0434\u0430\u0442\u0435\u043b\u044f",
                    tr: "Reklam verenin sitesinden daha fazla bilgi"
                },
                BASED_ON_FIVE_REVIEWS: {
                    ar: "\u062a\u0628\u0639\u064b\u0627 \u0644\u0640 {val} \u062a\u0642\u064a\u064a\u0645\u0627\u062a",
                    be: "\u041d\u0430 \u0430\u0441\u043d\u043e\u0432\u0435 {val} \u0432\u043e\u0434\u0433\u0443\u043a\u0430\u045e",
                    cs: "Na z\xe1klad\u011b {val} recenz\xed",
                    de: "Basierend auf {val} Rezensionen",
                    en: "Based on {val} reviews",
                    es: "Basado en {val} rese\xf1as",
                    fr: "Bas\xe9 sur {val} les avis",
                    he: "\u05de\u05d1\u05d5\u05e1\u05e1 \u05e2\u05dc {val} \u05d1\u05d9\u05e7\u05d5\u05e8\u05d5\u05ea",
                    it: "In base a {val} recensioni",
                    ja: "\u5bfe\u8c61\u30ec\u30d3\u30e5\u30fc\u6570\uff1a{val}",
                    pl: "Na podstawie {val} opinii",
                    pt: "Baseado em {val} coment\xe1rios",
                    ru: "\u041d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 {val} \u043e\u0442\u0437\u044b\u0432\u043e\u0432",
                    tr: "{val} yoruma g\xf6re"
                },
                BASED_ON_ONE_REVIEW: {
                    ar: "\u062a\u0628\u0639\u064b\u0627 \u0644\u0640 {val} \u062a\u0642\u064a\u064a\u0645\u0627\u062a",
                    be: "\u041d\u0430 \u0430\u0441\u043d\u043e\u0432\u0435 {val} \u0432\u043e\u0434\u0433\u0443\u043a\u0443",
                    cs: "Na z\xe1klad\u011b {val} recenz\xed",
                    de: "Basierend auf {val} Rezensionen",
                    en: "Based on {val} reviews",
                    es: "Basado en {val} rese\xf1as",
                    fr: "Bas\xe9 sur {val} les avis",
                    he: "\u05de\u05d1\u05d5\u05e1\u05e1 \u05e2\u05dc {val} \u05d1\u05d9\u05e7\u05d5\u05e8\u05d5\u05ea",
                    it: "In base a {val} recensioni",
                    ja: "\u5bfe\u8c61\u30ec\u30d3\u30e5\u30fc\u6570\uff1a{val}",
                    pl: "Na podstawie {val} opinii",
                    pt: "Baseado em {val} coment\xe1rios",
                    ru: "\u041d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 {val} \u043e\u0442\u0437\u044b\u0432\u0430",
                    tr: "{val} yoruma g\xf6re"
                },
                BASED_ON_TWO_REVIEWS: {
                    ar: "\u062a\u0628\u0639\u064b\u0627 \u0644\u0640 {val} \u062a\u0642\u064a\u064a\u0645\u0627\u062a",
                    be: "\u041d\u0430 \u0430\u0441\u043d\u043e\u0432\u0435 {val} \u0432\u043e\u0434\u0433\u0443\u043a\u0430\u045e",
                    cs: "Na z\xe1klad\u011b {val} recenz\xed",
                    de: "Basierend auf {val} Rezensionen",
                    en: "Based on {val} reviews",
                    es: "Basado en {val} rese\xf1as",
                    fr: "Bas\xe9 sur {val} les avis",
                    he: "\u05de\u05d1\u05d5\u05e1\u05e1 \u05e2\u05dc {val} \u05d1\u05d9\u05e7\u05d5\u05e8\u05d5\u05ea",
                    it: "In base a {val} recensioni",
                    ja: "\u5bfe\u8c61\u30ec\u30d3\u30e5\u30fc\u6570\uff1a{val}",
                    pl: "Na podstawie {val} opinii",
                    pt: "Baseado em {val} coment\xe1rios",
                    ru: "\u041d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 {val} \u043e\u0442\u0437\u044b\u0432\u043e\u0432",
                    tr: "{val} yoruma g\xf6re"
                },
                CALL: {
                    ar: "\u0627\u062a\u0635\u0627\u0644",
                    cs: "Volat",
                    de: "Anrufen",
                    en: "Call",
                    es: "Llamar",
                    fr: "Appeler",
                    he: "\u05e9\u05d9\u05d7\u05d4",
                    it: "Chiama",
                    ja: "\u96fb\u8a71\u3059\u308b",
                    pl: "Zadzwo\u0144",
                    pt: "Chamar",
                    ru: "\u041f\u043e\u0437\u0432\u043e\u043d\u0438\u0442\u044c",
                    tr: "Ara"
                },
                CANCELLATION: {
                    ar: "\u0625\u0644\u063a\u0627\u0621",
                    cs: "Zru\u0161it",
                    de: "Abbrechen",
                    en: "Cancel",
                    es: "Cancelar",
                    fr: "Annuler",
                    he: "\u05d1\u05d9\u05d8\u05d5\u05dc",
                    it: "Annulla",
                    ja: "\u30ad\u30e3\u30f3\u30bb\u30eb",
                    pl: "Anuluj",
                    pt: "Cancelar",
                    ru: "\u041e\u0442\u043c\u0435\u043d\u0430",
                    tr: "\u0130ptal"
                },
                CLOSE: {
                    ar: "\u0625\u063a\u0644\u0627\u0642",
                    be: "\u0417\u0430\u0447\u044b\u043d\u0456\u0446\u044c",
                    en: "Close",
                    fr: "Fermer",
                    he: "\u05e1\u05d2\u05d5\u05e8",
                    it: "Chiudi",
                    ja: "\u9589\u3058\u308b",
                    kk: "\u0416\u0430\u0431\u0443",
                    ru: "\u0417\u0430\u043a\u0440\u044b\u0442\u044c",
                    tr: "Kapat",
                    uk: "\u0417\u0430\u043a\u0440\u0438\u0442\u0438"
                },
                COPY: {
                    ar: "\u0646\u0633\u062e",
                    cs: "Kop\xedrovat",
                    de: "Kopieren",
                    en: "Copy",
                    es: "Copiar",
                    fr: "Copier",
                    he: "\u05d4\u05e2\u05ea\u05e7",
                    it: "Copia",
                    ja: "\u30b3\u30d4\u30fc",
                    pl: "Kopiuj",
                    pt: "Copiar",
                    ru: "\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c",
                    tr: "Kopyala"
                },
                DETAILS: {
                    ar: "\u0645\u0639\u0631\u0641\u0629 \u0627\u0644\u0645\u0632\u064a\u062f",
                    en: "Learn more",
                    fr: "En savoir plus",
                    he: "\u05dc\u05de\u05d9\u05d3\u05e2 \u05e0\u05d5\u05e1\u05e3",
                    it: "Ulteriori informazioni",
                    ja: "\u3082\u3063\u3068\u8a73\u3057\u304f",
                    ru: "\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435",
                    tr: "Daha fazla bilgi"
                },
                DISCLAIMER_ALCOHOL: {
                    ar: "\u064a\u0636\u0631 \u0627\u0644\u0627\u0633\u062a\u0647\u0644\u0627\u0643 \u0627\u0644\u0632\u0627\u0626\u062f \u0639\u0646 \u0627\u0644\u062d\u062f \u0628\u0635\u062d\u062a\u0643",
                    cs: "Nadm\u011brn\xe9 u\u017e\xedv\xe1n\xed \u0161kod\xed zdrav\xed",
                    de: "\xdcberm\xe4\xdfiger Alkoholkonsum f\xfchrt zu Gesundheitssch\xe4den.",
                    en: "Excessive consumption is harmful to your health",
                    es: "El consumo excesivo es perjudicial para la salud",
                    fr: "Une consommation excessive est nocive pour la sant\xe9",
                    he: "\u05e6\u05e8\u05d9\u05db\u05d4 \u05de\u05d5\u05d2\u05d6\u05de\u05ea \u05de\u05d6\u05d9\u05e7\u05d4 \u05dc\u05d1\u05e8\u05d9\u05d0\u05d5\u05ea\u05da",
                    it: "Il consumo eccessivo \xe8 dannoso per la salute",
                    ja: "\u904e\u5270\u306a\u6d88\u8cbb\u306f\u5065\u5eb7\u3092\u5bb3\u3057\u307e\u3059",
                    pl: "Nadmierne spo\u017cycie jest szkodliwe.",
                    pt: "O consumo excessivo \xe9 prejudicial para a sua sa\xfade",
                    ru: "\u0427\u0440\u0435\u0437\u043c\u0435\u0440\u043d\u043e\u0435 \u043f\u043e\u0442\u0440\u0435\u0431\u043b\u0435\u043d\u0438\u0435 \u0432\u0440\u0435\u0434\u043d\u043e.",
                    tr: "A\u015f\u0131r\u0131 t\xfcketim zararl\u0131d\u0131r."
                },
                DISCLAIMER_DIETARYSUPPL: {
                    ar: "\u0647\u0630\u0627 \u0627\u0644\u0645\u0646\u062a\u062c \u063a\u064a\u0631 \u0645\u062e\u0635\u0635 \u0644\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0637\u0628\u064a",
                    cs: "Tento produkt nen\xed ur\u010den pro l\xe9ka\u0159sk\xe9 \xfa\u010dely",
                    de: "Kein Arzneimittel",
                    en: "This product is not intended for medical use",
                    es: "Este producto no est\xe1 dise\xf1ado para uso m\xe9dico",
                    fr: "Ce produit n'est pas destin\xe9 \xe0 un usage m\xe9dical",
                    he: "\u05de\u05d5\u05e6\u05e8 \u05d6\u05d4 \u05d0\u05d9\u05e0\u05d5 \u05de\u05d9\u05d5\u05e2\u05d3 \u05dc\u05e9\u05d9\u05de\u05d5\u05e9 \u05e8\u05e4\u05d5\u05d0\u05d9",
                    it: "Questo prodotto non \xe8 destinato a uso medico",
                    ja: "\u3053\u306e\u88fd\u54c1\u306f\u533b\u7642\u7528\u3067\u306f\u3042\u308a\u307e\u305b\u3093",
                    pl: "Nie jest lekarstwem",
                    pt: "Este medicamento n\xe3o se destina a uso m\xe9dico.",
                    ru: "\u041d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u043e\u043c",
                    tr: "\u0130la\xe7 de\u011fildir"
                },
                DISCLAIMER_MEDICINE: {
                    ar: "\u062a\u0646\u0637\u0628\u0642 \u0645\u0648\u0627\u0646\u0639 \u0627\u0644\u0627\u0633\u062a\u0639\u0645\u0627\u0644. \u064a\u0631\u062c\u0649 \u0627\u0633\u062a\u0634\u0627\u0631\u0629 \u0637\u0628\u064a\u0628\u0643",
                    cs: "Ohledn\u011b p\u0159\xedpadn\xfdch kontraindikac\xed se obra\u0165te na sv\xe9ho l\xe9ka\u0159e",
                    de: "Es bestehen Gegenanzeigen. Konsultieren Sie zun\xe4chst Ihren Arzt.",
                    en: "Contraindications apply. Please consult your doctor",
                    es: "Puede haber contraindicaciones. Por favor, consulta a tu m\xe9dico",
                    fr: "Des contre-indications s'appliquent. Veuillez consulter votre m\xe9decin",
                    he: "\u05e1\u05ea\u05d9\u05e8\u05d5\u05ea \u05de\u05ea\u05e7\u05d9\u05d9\u05de\u05d5\u05ea. \u05d0\u05e0\u05d0 \u05d4\u05ea\u05d9\u05d9\u05e2\u05e5 \u05e2\u05dd \u05d4\u05e8\u05d5\u05e4\u05d0 \u05e9\u05dc\u05da",
                    it: "Sono presenti controindicazioni. Consulta il tuo medico",
                    ja: "\u7981\u5fcc\u304c\u9069\u7528\u3055\u308c\u307e\u3059\u3002\u533b\u5e2b\u306b\u76f8\u8ac7\u3057\u3066\u304f\u3060\u3055\u3044",
                    pl: "Istniej\u0105 przeciwwskazania. Skonsultuj si\u0119 z lekarzem",
                    pt: "Pode haver contra-indica\xe7\xf5es. Por favor, consulte o seu m\xe9dico",
                    ru: "\u0415\u0441\u0442\u044c \u043f\u0440\u043e\u0442\u0438\u0432\u043e\u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0438\u044f. \u041f\u043e\u0441\u043e\u0432\u0435\u0442\u0443\u0439\u0442\u0435\u0441\u044c \u0441 \u0432\u0440\u0430\u0447\u043e\u043c",
                    tr: "Kontrendikasyonlar\u0131 var. L\xfctfen, doktorunuza dan\u0131\u015f\u0131n."
                },
                FREE: {
                    ar: "\u0645\u062c\u0627\u0646\u064a",
                    cs: "Voln\xfd",
                    de: "Kostenlos",
                    en: "Free",
                    es: "Gratis",
                    fr: "Gratuit",
                    he: "\u05d7\u05d9\u05e0\u05dd",
                    it: "Gratuito",
                    ja: "\u7121\u6599",
                    pl: "Bezp\u0142atne",
                    pt: "Gr\xe1tis",
                    ru: "\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e",
                    tr: "\xdccretsiz"
                },
                GO_TO_REVIEWS: {
                    ar: "\u0627\u0644\u0627\u0646\u062a\u0642\u0627\u0644 \u0625\u0644\u0649 \u0627\u0644\u062a\u0642\u064a\u064a\u0645\u0627\u062a",
                    cs: "P\u0159ej\xedt na recenze",
                    de: "Zu Bewertungen",
                    en: "Go to reviews",
                    es: "Ir a comentarios",
                    fr: "Aller aux avis",
                    he: "\u05e2\u05d1\u05d5\u05e8 \u05d0\u05dc \u05d1\u05d9\u05e7\u05d5\u05e8\u05d5\u05ea",
                    it: "Vai alle recensioni",
                    ja: "\u30ec\u30d3\u30e5\u30fc\u3092\u898b\u308b",
                    pl: "Przejd\u017a do opinii",
                    pt: "V\xe1 para resenhas",
                    ru: "\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u043e\u0442\u0437\u044b\u0432\u0430\u043c",
                    tr: "Yorumlara git"
                },
                GO_TO_SITE: {
                    ar: "\u0627\u0644\u0627\u0646\u062a\u0642\u0627\u0644 \u0625\u0644\u0649 \u0627\u0644\u0645\u0648\u0642\u0639",
                    cs: "J\xedt na str\xe1nky",
                    de: "Zur Website",
                    en: "Go to site",
                    es: "Ir al sitio",
                    fr: "Aller sur le site",
                    he: "\u05db\u05e0\u05e1\u05d5 \u05dc\u05d0\u05ea\u05e8",
                    it: "Vai al sito",
                    ja: "\u30b5\u30a4\u30c8\u306b\u884c\u304f",
                    pl: "Przejd\u017a do strony",
                    pt: "Ir para o site",
                    ru: "\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0441\u0430\u0439\u0442",
                    tr: "Siteye git"
                },
                HIDE_AD: {
                    ar: "\u0625\u062e\u0641\u0627\u0621&nbsp;\u0627\u0644\u0625\u0639\u0644\u0627\u0646",
                    cs: "Skr\xfdt&nbsp;reklamu",
                    de: "Anzeige&nbsp;ausblenden",
                    en: "Hide&nbsp;ad",
                    es: "Ocultar&nbsp;anuncio",
                    fr: "Masquer&nbsp;annonce",
                    he: "\u05d4\u05e1\u05ea\u05e8&nbsp;\u05de\u05d5\u05d3\u05e2\u05d4",
                    it: "Nascondi&nbsp;annuncio",
                    ja: "\u5e83\u544a\u3092\u975e\u8868\u793a",
                    pl: "Ukryj&nbsp;reklam\u0119",
                    pt: "Ocultar&nbsp;an\xfancio",
                    ru: "\u0421\u043a\u0440\u044b\u0442\u044c&nbsp;\u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435",
                    tr: "Reklamlar\u0131&nbsp;gizle"
                },
                INSTALL: {
                    ar: "\u0627\u0644\u062a\u062b\u0628\u064a\u062a",
                    cs: "Nainstalovat",
                    de: "Installieren",
                    en: "Install",
                    es: "Instalar",
                    fr: "Installer",
                    he: "\u05d4\u05ea\u05e7\u05df",
                    it: "Installa",
                    ja: "\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",
                    pl: "Instaluj",
                    pt: "Instalar",
                    ru: "\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c",
                    tr: "Y\xfcklemek"
                },
                INSTALL_FROM_STORE: {
                    ar: "\u0627\u062d\u0635\u0644 \u0639\u0644\u064a\u0647 \u0639\u0644\u0649 {store}",
                    cs: "Z\xedskejte ji v obchod\u011b {store}",
                    de: "\xdcber {store} installieren",
                    en: "Get it on {store}",
                    es: "Vamos a ello {store}",
                    fr: "Installer \xe0 partir de {store}",
                    he: "\u05dc\u05e7\u05d1\u05dc \u05d0\u05ea \u05d6\u05d4 {store}",
                    it: "Ottienilo su {store}",
                    ja: "{store}\u3067\u5165\u624b\u3059\u308b",
                    pl: "Ustaw z {store}",
                    pt: "Vamos a isto {store}",
                    ru: "\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0438\u0437 {store}",
                    tr: "{store} den alin"
                },
                LEARN_MORE: {
                    ar: "\u0627\u0643\u062a\u0634\u0641 \u0627\u0644\u0645\u0632\u064a\u062f",
                    cs: "Podrobn\u011bj\u0161\xed informace",
                    de: "Mehr erfahren",
                    en: "Find out more",
                    es: "M\xe1s informaci\xf3n",
                    fr: "Pour apprendre plus",
                    he: "\u05dc\u05de\u05d9\u05d3\u05e2 \u05e0\u05d5\u05e1\u05e3",
                    it: "Scopri di pi\xf9",
                    ja: "\u8a73\u7d30\u3092\u78ba\u8a8d\u3059\u308b",
                    pl: "Dowiedz si\u0119 wi\u0119cej",
                    pt: "Saiba mais",
                    ru: "\u0423\u0437\u043d\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435",
                    tr: "Ayr\u0131nt\u0131l\u0131 bilgi"
                },
                LEARN_MORE_EXP_1: {
                    ar: "\u0632\u064a\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0642\u0639",
                    cs: "Nav\u0161t\xedvit str\xe1nku",
                    de: "Zur Website",
                    en: "Visit Site",
                    es: "Ir",
                    fr: "Visiter le site",
                    he: "\u05d1\u05e7\u05e8 \u05d1\u05d0\u05ea\u05e8",
                    it: "Visita il sito",
                    ja: "\u30b5\u30a4\u30c8\u3092\u8a2a\u308c\u308b",
                    pl: "Przejd\u017a",
                    pt: "Visitar o s\xedtio web",
                    ru: "\u041f\u0435\u0440\u0435\u0439\u0442\u0438",
                    tr: "Git"
                },
                LEARN_MORE_EXP_2: {
                    ar: "\u0645\u0639\u0631\u0641\u0629 \u0627\u0644\u0645\u0632\u064a\u062f",
                    cs: "Bli\u017e\u0161\xed informace",
                    de: "Details",
                    en: "Learn More",
                    es: "M\xe1s detalles",
                    fr: "En savoir plus",
                    he: "\u05dc\u05de\u05d9\u05d3\u05e2 \u05e0\u05d5\u05e1\u05e3",
                    it: "Ulteriori informazioni",
                    ja: "\u3082\u3063\u3068\u8a73\u3057\u304f",
                    pl: "Wi\u0119cej",
                    pt: "Saiba mais",
                    ru: "\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435",
                    tr: "Daha fazla bilgi"
                },
                LEARN_MORE_EXP_3: {
                    ar: "\u0645\u0639\u0631\u0641\u0629 \u0627\u0644\u0645\u0632\u064a\u062f",
                    cs: "Bli\u017e\u0161\xed informace",
                    de: "Mehr erfahren",
                    en: "Learn More",
                    es: "Averiguar",
                    fr: "En savoir plus",
                    he: "\u05dc\u05de\u05d9\u05d3\u05e2 \u05e0\u05d5\u05e1\u05e3",
                    it: "Ulteriori informazioni",
                    ja: "\u3082\u3063\u3068\u8a73\u3057\u304f",
                    pl: "Dowiedz si\u0119",
                    pt: "Saiba mais",
                    ru: "\u0423\u0437\u043d\u0430\u0442\u044c",
                    tr: "Bilgi al"
                },
                LEARN_MORE_EXP_4: {
                    ar: "\u0632\u064a\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0642\u0639",
                    cs: "Nav\u0161t\xedvit str\xe1nku",
                    de: "Website besuchen",
                    en: "Visit Site",
                    es: "Abrir",
                    fr: "Visiter le site",
                    he: "\u05d1\u05e7\u05e8 \u05d1\u05d0\u05ea\u05e8",
                    it: "Visita il sito",
                    ja: "\u30b5\u30a4\u30c8\u3092\u8a2a\u308c\u308b",
                    pl: "Otw\xf3rz",
                    pt: "Visitar o s\xedtio web",
                    ru: "\u041e\u0442\u043a\u0440\u044b\u0442\u044c",
                    tr: "A\xe7"
                },
                MARKET_RATING: {
                    ar: "\u062a\u062e\u0632\u064a\u0646 \u0627\u0644\u062a\u0635\u0646\u064a\u0641",
                    cs: "hodnocen\xed obchodu",
                    de: "Store-Bewertung",
                    en: "store rating",
                    es: "valoraci\xf3n de la tienda",
                    fr: "\xe9valuation du magasin",
                    he: "\u05d3\u05d9\u05e8\u05d5\u05d2 \u05d4\u05d7\u05e0\u05d5\u05ea",
                    it: "valutazione del negozio",
                    ja: "\u30b9\u30c8\u30a2\u8a55\u4fa1",
                    pl: "ocena sklepu",
                    pt: "classifica\xe7\xe3o da loja",
                    ru: "\u0440\u0435\u0439\u0442\u0438\u043d\u0433 \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0430",
                    tr: "ma\u011faza puan\u0131"
                },
                MORE: {
                    ar: "\u0627\u0644\u0645\u0632\u064a\u062f",
                    cs: "Dal\u0161\xed",
                    de: "Details",
                    en: "More",
                    es: "M\xe1s",
                    fr: "Plus",
                    he: "\u05e2\u05d5\u05d3",
                    it: "Altro",
                    ja: "\u8a73\u7d30",
                    pl: "Przejd\u017a",
                    pt: "Mais",
                    ru: "\u041f\u0435\u0440\u0435\u0439\u0442\u0438",
                    tr: "Git"
                },
                MORE_ON: {
                    ar: "\u0627\u0644\u0645\u0632\u064a\u062f \u0639\u0646",
                    cs: "Podrobnosti na",
                    de: "Weitere Infos auf",
                    en: "More on",
                    es: "M\xe1s sobre",
                    fr: "Plus sur",
                    he: "\u05e2\u05d5\u05d3 \u05e2\u05dc",
                    it: "Altro su",
                    ja: "\u8a73\u7d30\uff1a",
                    pl: "Wi\u0119cej na",
                    pt: "Mais sobre",
                    ru: "\u0411\u043e\u043b\u044c\u0448\u0435 \u043d\u0430",
                    tr: "Ayr\u0131nt\u0131l\u0131 bilgi"
                },
                MORE_ON_THE_WEBSITE: {
                    ar: "\u0642\u0631\u0627\u0621\u0629 \u0627\u0644\u0645\u0632\u064a\u062f \u0639\u0644\u0649 \u0645\u0648\u0642\u0639 \u0627\u0644\u0648\u064a\u0628",
                    cs: "P\u0159e\u010dt\u011bte si v\xedce na webov\xe9 str\xe1nce",
                    de: "Weitere Infos unter",
                    en: "Read more on the website",
                    es: "M\xe1s detalles en la p\xe1gina",
                    fr: "En savoir plus sur le site",
                    he: "\u05e7\u05e8\u05d0 \u05e2\u05d5\u05d3 \u05d1\u05d0\u05ea\u05e8",
                    it: "Ulteriori informazioni sul sito web",
                    ja: "\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u3067\u3055\u3089\u306b\u8aad\u3080",
                    pl: "Wi\u0119cej na stronie",
                    pt: "Leia mais no s\xedtio web",
                    ru: "\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435",
                    tr: "Daha fazla ayr\u0131nt\u0131 i\xe7in siteye g\xf6z at\u0131n"
                },
                ORGANIZATION_RATING: {
                    ar: "\u062a\u0635\u0646\u064a\u0641 \u0627\u0644\u0634\u0631\u0643\u0629",
                    cs: "hodnocen\xed spole\u010dnosti",
                    de: "Organisationsbewertung",
                    en: "company rating",
                    es: "valoraci\xf3n de la organizaci\xf3n",
                    fr: "\xe9valuation de l'entreprise",
                    he: "\u05d3\u05d9\u05e8\u05d5\u05d2 \u05d4\u05d7\u05d1\u05e8\u05d4",
                    it: "valutazione dell'azienda",
                    ja: "\u4f1a\u793e\u8a55\u4fa1",
                    pl: "ocena organizacji",
                    pt: "classifica\xe7\xe3o da empresa",
                    ru: "\u0440\u0435\u0439\u0442\u0438\u043d\u0433 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438",
                    tr: "kurum puan\u0131"
                },
                PRICE_FROM: {
                    ar: "\u0645\u0646",
                    cs: "od",
                    de: "von",
                    en: "from",
                    es: "desde",
                    fr: "de",
                    he: "\u05de",
                    it: "da",
                    pl: "od",
                    pt: "desde",
                    ru: "\u043e\u0442",
                    tr: "min."
                },
                PRICE_TO: {
                    ar: "\u0625\u0644\u0649",
                    cs: "do",
                    de: "bis",
                    en: "to",
                    es: "hasta",
                    fr: "jusqu'\xe0",
                    he: "\u05d0\u05dc",
                    it: "a",
                    ja: "\uff5e",
                    pl: "do",
                    pt: "at\xe9",
                    ru: "\u0434\u043e",
                    tr: "maks."
                },
                REVIEW: {
                    ar: "{val} \u0645\u0631\u0627\u062c\u0639\u0629",
                    be: "{val} \u0432\u043e\u0434\u0433\u0443\u043a",
                    cs: "{val} recenze",
                    de: "{val} Review",
                    en: "{val} review",
                    es: "{val} rese\xf1a",
                    fr: "{val} avis",
                    he: "{val} \u05d1\u05d9\u05e7\u05d5\u05e8\u05ea",
                    it: "{val} recensione",
                    ja: "{val} \u500b\u306e\u30ec\u30d3\u30e5\u30fc",
                    kk: "{val} \u043f\u0456\u043a\u0456\u0440",
                    pl: "{val} ocena",
                    pt: "{val} avalia\xe7\xe3o",
                    ru: "{val} \u043e\u0442\u0437\u044b\u0432",
                    tr: "{val} yorum",
                    uk: "{val} \u0432\u0456\u0434\u0433\u0443\u043a"
                },
                REVIEWS: {
                    ar: "{val} \u0645\u0631\u0627\u062c\u0639\u0627\u062a",
                    be: "{val} \u0432\u043e\u0434\u0433\u0443\u043a\u0430\u045e",
                    cs: "{val} recenz\xed",
                    de: "{val} Reviews",
                    en: "{val} reviews",
                    es: "{val} rese\xf1as",
                    fr: "{val} avis",
                    he: "{val} \u05d1\u05d9\u05e7\u05d5\u05e8\u05d5\u05ea",
                    it: "{val} recensioni",
                    ja: "{val} \u500b\u306e\u30ec\u30d3\u30e5\u30fc",
                    kk: "{val} \u043f\u0456\u043a\u0456\u0440",
                    pl: "{val} oceny",
                    pt: "{val} avalia\xe7\xf5es",
                    ru: "{val} \u043e\u0442\u0437\u044b\u0432\u043e\u0432",
                    tr: "{val} yorum",
                    uk: "{val} \u0432\u0456\u0434\u0433\u0443\u043a\u0456\u0432"
                },
                REVIEWS_PROVIDED_BY: {
                    ar: "\u0627\u0644\u062a\u0642\u064a\u064a\u0645\u0627\u062a \u0627\u0644\u0645\u062a\u0648\u0641\u0631\u0629 \u0645\u0646 \u0642\u0650\u0628\u0644",
                    be: "\u0412\u043e\u0434\u0433\u0443\u043a\u0456 \u0430\u0442\u0440\u044b\u043c\u0430\u043d\u044b \u0430\u0434 \u0441\u044d\u0440\u0432\u0456\u0441\u0443",
                    cs: "Recenze poskytnuty od",
                    de: "Bewertungen bereitgestellt von",
                    en: "Reviews provided by",
                    es: "Comentarios proporcionados por el servicio",
                    fr: "Avis fournis par",
                    he: "\u05d1\u05d9\u05e7\u05d5\u05e8\u05d5\u05ea \u05e9\u05e1\u05d5\u05e4\u05e7\u05d5 \u05e2\u05dc \u05d9\u05d3\u05d9",
                    it: "Recensioni fornite da",
                    ja: "\u30ec\u30d3\u30e5\u30fc\u63d0\u4f9b\u8005\uff1a",
                    kk: "\u0421\u0435\u0440\u0432\u0438\u0441 \u04b1\u0441\u044b\u043d\u0493\u0430\u043d \u043f\u0456\u043a\u0456\u0440\u043b\u0435\u0440",
                    pl: "Opinie s\u0105 udost\u0119pnione przez serwis",
                    pt: "Resenhas fornecidas por",
                    ru: "\u041e\u0442\u0437\u044b\u0432\u044b \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u044b \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u043c",
                    tr: "Servis taraf\u0131ndan sa\u011flanan yorumlar",
                    uk: "\u0412\u0456\u0434\u0433\u0443\u043a\u0438 \u043d\u0430\u0434\u0430\u043d\u043e \u0441\u0435\u0440\u0432\u0456\u0441\u043e\u043c"
                },
                REWARDED_BEFORE_REWARD_MESSAGE: {
                    ar: "\u0633\u0648\u0641 \u062a\u062a\u0644\u0642\u0649 \u0645\u0643\u0627\u0641\u0623\u062a\u0643 \u062e\u0644\u0627\u0644",
                    be: "\u0423\u0437\u043d\u0430\u0433\u0430\u0440\u043e\u0434\u0430 \u043d\u0430\u043b\u0456\u0447\u044b\u0446\u0446\u0430 \u043f\u0440\u0430\u0437",
                    cs: "Odm\u011bnu obdr\u017e\xedte za",
                    de: "Sie erhalten Ihre Belohnung in",
                    en: "You'll receive your reward in",
                    es: "Recibir\xe1s tu recompensa en",
                    fr: "Vous recevrez votre r\xe9compense dans",
                    he: "\u05ea\u05e7\u05d1\u05dc \u05d0\u05ea \u05d4\u05e4\u05e8\u05e1 \u05e9\u05dc\u05da \u05d1",
                    it: "Riceverai la tua ricompensa tra",
                    ja: "\u30ea\u30ef\u30fc\u30c9\u306e\u53d7\u3051\u53d6\u308a\u307e\u3067\uff1a",
                    pl: "Otrzymasz nagrod\u0119 za",
                    pt: "Receber\xe1 o seu pr\xe9mio em",
                    ru: "\u041d\u0430\u0433\u0440\u0430\u0434\u0430 \u043d\u0430\u0447\u0438\u0441\u043b\u0438\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437",
                    tr: "\xd6d\xfcl\xfcn kazan\u0131lmas\u0131na kalan s\xfcre:",
                    uk: "\u041d\u0430\u0433\u043e\u0440\u043e\u0434\u0430 \u043d\u0430\u0440\u0430\u0445\u0443\u0454\u0442\u044c\u0441\u044f \u0447\u0435\u0440\u0435\u0437"
                },
                REWARDED_CLOSE_MESSAGE: {
                    ar: "\u0644\u0646 \u062a\u062a\u0644\u0642\u064e \u0645\u0643\u0627\u0641\u0623\u062a\u0643 \u0625\u0630\u0627 \u062a\u062e\u0637\u064a\u062a \u0627\u0644\u0625\u0639\u0644\u0627\u0646",
                    be: "\u0412\u044b \u043d\u0435 \u0430\u0442\u0440\u044b\u043c\u0430\u0435\u0446\u0435 \u045e\u0437\u043d\u0430\u0433\u0430\u0440\u043e\u0434\u0436\u0430\u043d\u043d\u0435, \u043a\u0430\u043b\u0456 \u043f\u0440\u0430\u043f\u0443\u0441\u0446\u0456\u0446\u0435 \u0440\u044d\u043a\u043b\u0430\u043c\u0443",
                    cs: "Odm\u011bnu neobdr\u017e\xedte, pokud p\u0159esko\u010d\xedte reklamu",
                    de: "Sie erhalten keine Belohnung, wenn Sie die Anzeige \xfcberspringen",
                    en: "You won't be rewarded if you skip the ad",
                    es: "No se te recompensar\xe1 si te saltas el anuncio",
                    fr: "Vous ne serez pas r\xe9compens\xe9 si vous ignorez l'annonce",
                    he: "\u05dc\u05d0 \u05ea\u05ea\u05d5\u05d2\u05de\u05dc \u05d0\u05dd \u05ea\u05d3\u05dc\u05d2 \u05e2\u05dc \u05d4\u05e4\u05e8\u05e1\u05d5\u05de\u05ea",
                    it: "Non riceverai la ricompensa se salti l'annuncio",
                    ja: "\u5e83\u544a\u3092\u30b9\u30ad\u30c3\u30d7\u3059\u308b\u3068\u30ea\u30ef\u30fc\u30c9\u306f\u3082\u3089\u3048\u307e\u305b\u3093",
                    pl: "Nie otrzymasz nagrody, je\u015bli pominiesz reklam\u0119",
                    pt: "N\xe3o ser\xe1 premiado se omitir o an\xfancio",
                    ru: "\u0412\u044b \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u0432\u043e\u0437\u043d\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043d\u0438\u0435, \u0435\u0441\u043b\u0438 \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u0440\u0435\u043a\u043b\u0430\u043c\u0443",
                    tr: "Reklam\u0131 atlarsan\u0131z \xf6d\xfcl\xfc kazanamazs\u0131n\u0131z",
                    uk: "\u0412\u0438 \u043d\u0435 \u043e\u0442\u0440\u0438\u043c\u0430\u0454\u0442\u0435 \u0432\u0438\u043d\u0430\u0433\u043e\u0440\u043e\u0434\u0443, \u044f\u043a\u0449\u043e \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u0440\u0435\u043a\u043b\u0430\u043c\u0443"
                },
                REWARDED_CONTINUE: {
                    ar: "\u0645\u062a\u0627\u0628\u0639\u0629 \u0627\u0644\u0645\u0634\u0627\u0647\u062f\u0629",
                    be: "\u041f\u0440\u0430\u0446\u044f\u0433\u043d\u0443\u0446\u044c \u043f\u0440\u0430\u0433\u043b\u044f\u0434",
                    cs: "Pokra\u010dovat ve sledov\xe1n\xed",
                    de: "Weiterschauen",
                    en: "Continue watching",
                    es: "Continuar viendo",
                    fr: "Continuer \xe0 regarder",
                    he: "\u05d4\u05de\u05e9\u05da \u05dc\u05e6\u05e4\u05d5\u05ea",
                    it: "Continua a guardare",
                    ja: "\u8996\u8074\u3057\u7d9a\u3051\u308b",
                    pl: "Kontynuuj ogl\u0105danie",
                    pt: "Continuar a ver",
                    ru: "\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440",
                    tr: "G\xf6r\xfcnt\xfclenmeye devam et",
                    uk: "\u041f\u0440\u043e\u0434\u043e\u0432\u0436\u0438\u0442\u0438 \u043f\u0435\u0440\u0435\u0433\u043b\u044f\u0434"
                },
                REWARDED_LOSE_REWARD: {
                    ar: "\u0631\u0641\u0636 \u0627\u0644\u0645\u0643\u0627\u0641\u0623\u0629",
                    be: "\u0410\u0434\u043c\u043e\u0432\u0456\u0446\u0446\u0430 \u0430\u0434 \u0443\u0437\u043d\u0430\u0433\u0430\u0440\u043e\u0434\u044b",
                    cs: "Odm\xedtnout odm\u011bnu",
                    de: "Belohnung ablehnen",
                    en: "Refuse award",
                    es: "Rechazar la recompensa",
                    fr: "Refuser la r\xe9compense",
                    he: "\u05e1\u05e8\u05d1 \u05dc\u05e4\u05e8\u05e1",
                    it: "Rifiuta la ricompensa",
                    ja: "\u30a2\u30ef\u30fc\u30c9\u3092\u62d2\u5426\u3059\u308b",
                    pl: "Odrzu\u0107 nagrod\u0119",
                    pt: "Recusar o pr\xe9mio",
                    ru: "\u041e\u0442\u043a\u0430\u0437\u0430\u0442\u044c\u0441\u044f \u043e\u0442 \u043d\u0430\u0433\u0440\u0430\u0434\u044b",
                    tr: "\xd6d\xfclden vazge\xe7",
                    uk: "\u0412\u0456\u0434\u043c\u043e\u0432\u0438\u0442\u0438\u0441\u044f \u0432\u0456\u0434 \u043d\u0430\u0433\u043e\u0440\u043e\u0434\u0438"
                },
                SHOW_MORE_GOODS: {
                    ar: "\u0625\u0638\u0647\u0627\u0631 \u0627\u0644\u0645\u0632\u064a\u062f",
                    cs: "Zobrazit v\xedce",
                    de: "Weitere Produkte anzeigen",
                    en: "Show more",
                    es: "Mostrar m\xe1s",
                    fr: "Afficher plus",
                    he: "\u05d4\u05e6\u05d2 \u05e2\u05d5\u05d3",
                    it: "Mostra di pi\xf9",
                    ja: "\u3055\u3089\u306b\u8868\u793a\u3059\u308b",
                    pl: "Wi\u0119cej produkt\xf3w",
                    pt: "Mostrar mais",
                    ru: "\u0415\u0449\u0451 \u0442\u043e\u0432\u0430\u0440\u044b",
                    tr: "Daha fazla \xfcr\xfcn"
                },
                SITE_RATING: {
                    ar: "\u062a\u0635\u0646\u064a\u0641 \u0645\u0648\u0642\u0639 \u0627\u0644\u0648\u064a\u0628",
                    cs: "hodnocen\xed webov\xe9 str\xe1nky",
                    de: "Website-Bewertung",
                    en: "website rating",
                    es: "valoraci\xf3n del sitio",
                    fr: "\xe9valuation du site Web",
                    he: "\u05d3\u05d9\u05e8\u05d5\u05d2 \u05d4\u05d0\u05ea\u05e8",
                    it: "valutazione del sito web",
                    ja: "\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u8a55\u4fa1",
                    pl: "ocena strony",
                    pt: "classifica\xe7\xe3o do s\xedtio web",
                    ru: "\u0440\u0435\u0439\u0442\u0438\u043d\u0433 \u0441\u0430\u0439\u0442\u0430",
                    tr: "site puan\u0131"
                },
                SOCIAL_ADV_SHORT: {
                    ar: "\u0625\u0639\u0644\u0627\u0646 \u0627\u062c\u062a\u0645\u0627\u0639\u064a",
                    cs: "Reklama na soci\xe1ln\xedch m\xe9di\xedch",
                    de: "Soziale Werbung",
                    en: "Social ad",
                    es: "Anuncio social",
                    fr: "Publicit\xe9 sociale",
                    he: "\u05de\u05d5\u05d3\u05e2\u05d4 \u05d7\u05d1\u05e8\u05ea\u05d9\u05ea",
                    it: "Annuncio sociale",
                    ja: "\u30bd\u30fc\u30b7\u30e3\u30eb\u5e83\u544a",
                    pl: "Reklama spo\u0142eczna",
                    pt: "An\xfancio social",
                    ru: "\u0421\u043e\u0446\u0440\u0435\u043a\u043b\u0430\u043c\u0430",
                    tr: "Kamu hizmet reklam\u0131"
                },
                THANKS_AD_HIDDEN: {
                    ar: "\u0634\u0643\u0631\u064b\u0627 \u0644\u0643\u060c \u0647\u0630\u0627 \u0627\u0644\u0625\u0639\u0644\u0627\u0646 \u0645\u062e\u0641\u064a \u0627\u0644\u0622\u0646.",
                    cs: "D\u011bkujeme v\xe1m, tato reklama je nyn\xed skryta.",
                    de: "Danke! Die Anzeige wurde ausgeblendet.",
                    en: "Thank you, this ad is hidden now.",
                    es: "Gracias, este anuncio ahora est\xe1 oculto.",
                    fr: "Merci, cette annonce est maintenant masqu\xe9e.",
                    he: "\u05ea\u05d5\u05d3\u05d4, \u05de\u05d5\u05d3\u05e2\u05d4 \u05d6\u05d5 \u05de\u05d5\u05e1\u05ea\u05e8\u05ea \u05e2\u05db\u05e9\u05d9\u05d5.",
                    it: "Grazie, questo annuncio \xe8 ora nascosto.",
                    ja: "\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\u3002\u3053\u306e\u5e83\u544a\u306f\u975e\u8868\u793a\u306b\u306a\u308a\u307e\u3057\u305f\u3002",
                    pl: "Dzi\u0119ki, og\u0142oszenie jest ukryte.",
                    pt: "Obrigado, este an\xfancio agora est\xe1 oculto.",
                    ru: "\u0421\u043f\u0430\u0441\u0438\u0431\u043e, \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u043a\u0440\u044b\u0442\u043e.",
                    tr: "Te\u015fekk\xfcrler, reklam kapat\u0131ld\u0131."
                },
                THEME_EMPTY_ACTION_BUTTON_DEFAULT_SHORT_TITLE: {
                    en: "Read more",
                    ru: "\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435",
                    tr: "Daha fazla bilgi"
                },
                THEME_EMPTY_ACTION_BUTTON_LABEL: {
                    en: "Go",
                    ru: "\u041f\u0435\u0440\u0435\u0439\u0442\u0438",
                    tr: "Git"
                },
                TIME_IN_MINUTES: {en: "{val} min", ru: "{val} \u043c\u0438\u043d", tr: "{val} dk."},
                TWO_REVIEWS: {
                    ar: "{val} \u0645\u0631\u0627\u062c\u0639\u0627\u062a",
                    be: "{val} \u0432\u043e\u0434\u0433\u0443\u043a\u0456",
                    cs: "{val} recenze",
                    de: "{val} Reviews",
                    en: "{val} reviews",
                    es: "{val} rese\xf1as",
                    fr: "{val} avis",
                    he: "{val} \u05d1\u05d9\u05e7\u05d5\u05e8\u05d5\u05ea",
                    it: "{val} recensioni",
                    ja: "{val} \u500b\u306e\u30ec\u30d3\u30e5\u30fc",
                    kk: "{val} \u043f\u0456\u043a\u0456\u0440",
                    pl: "{val} ocen",
                    pt: "{val} avalia\xe7\xf5es",
                    ru: "{val} \u043e\u0442\u0437\u044b\u0432\u0430",
                    tr: "{val} yorum",
                    uk: "{val} \u0432\u0456\u0434\u0433\u0443\u043a\u0438"
                },
                YANDEX_BROWSER: {
                    ar: "\u0645\u062a\u0635\u0641\u062d Yandex",
                    cs: "Yandex Browser",
                    de: "Yandex.Browser",
                    en: "Yandex Browser",
                    es: "Yandex.Navegador",
                    fr: "Navigateur Yandex",
                    he: "\u05d3\u05e4\u05d3\u05e4\u05df \u05d9\u05d0\u05e0\u05d3\u05e7\u05e1",
                    it: "Browser Yandex",
                    ja: "Yandex \u30d6\u30e9\u30a6\u30b6\u30fc",
                    pl: "Yandex.Przegl\u0105darka",
                    pt: "Navegador Yandex",
                    ru: "\u042f\u043d\u0434\u0435\u043a\u0441.\u0411\u0440\u0430\u0443\u0437\u0435\u0440",
                    tr: "Yandex.Browser"
                },
                YANDEX_BUSINESS: {
                    ar: "Yandex.Business",
                    cs: "Yandex.Business",
                    de: "Yandex.Business",
                    en: "Yandex.Business",
                    es: "Yandex.Business",
                    fr: "Yandex Business",
                    he: "Yandex.Business",
                    it: "Yandex.Business",
                    ja: "Yandex.Business",
                    pl: "Ya.Biznes",
                    pt: "Yandex.Business",
                    ru: "\u042f.\u0411\u0438\u0437\u043d\u0435\u0441",
                    tr: "Yandex.Business"
                },
                YANDEX_DIRECT: {
                    ar: "Yandex.Direct",
                    cs: "Yandex.Direct",
                    de: "Yandex.Direct",
                    en: "Yandex.Direct",
                    es: "Yandex.Direct",
                    fr: "Yandex Direct",
                    he: "Yandex.Direct",
                    it: "Yandex.Direct",
                    ja: "Yandex.Direct",
                    pl: "Yandex.Direct",
                    pt: "Yandex.Direct",
                    ru: "\u042f\u043d\u0434\u0435\u043a\u0441.\u0414\u0438\u0440\u0435\u043a\u0442",
                    tr: "Yandex.Direct"
                },
                YANDEX_MAPS: {
                    ar: "Yandex.Maps",
                    cs: "Yandex.Maps",
                    de: "Yandex.Maps",
                    en: "Yandex.Maps",
                    es: "Yandex.Mapas",
                    fr: "Yandex Maps",
                    he: "Yandex.Maps",
                    it: "Yandex.Maps",
                    ja: "Yandex.Maps",
                    pl: "Yandex.Mapy",
                    pt: "Yandex.Maps",
                    ru: "\u042f\u043d\u0434\u0435\u043a\u0441.\u041a\u0430\u0440\u0442\u044b",
                    tr: "Yandex.Maps"
                },
                YANDEX_MARKET: {
                    ar: "Yandex.Market",
                    cs: "Yandex.Market",
                    de: "Yandex.Market",
                    en: "Yandex.Market",
                    es: "Yandex.Mercado",
                    fr: "Yandex Market",
                    he: "Yandex.Market",
                    it: "Yandex.Market",
                    ja: "Yandex.Market",
                    pl: "Yandex.Market",
                    pt: "Yandex.Market",
                    ru: "\u042f\u043d\u0434\u0435\u043a\u0441.\u041c\u0430\u0440\u043a\u0435\u0442",
                    tr: "Yandex.Market"
                }
            }
        }, 35694: e => {
            e.exports = {
                ar: {
                    ARM_DEFAULT_TITLE: "\u0627\u0644\u0645\u0632\u064a\u062f \u0645\u0646 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0639\u0646 \u0627\u0644\u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u0645\u0639\u0644\u0646\u0629",
                    BASED_ON_FIVE_REVIEWS: "\u062a\u0628\u0639\u064b\u0627 \u0644\u0640 {val} \u062a\u0642\u064a\u064a\u0645\u0627\u062a",
                    BASED_ON_ONE_REVIEW: "\u062a\u0628\u0639\u064b\u0627 \u0644\u0640 {val} \u062a\u0642\u064a\u064a\u0645\u0627\u062a",
                    BASED_ON_TWO_REVIEWS: "\u062a\u0628\u0639\u064b\u0627 \u0644\u0640 {val} \u062a\u0642\u064a\u064a\u0645\u0627\u062a",
                    CALL: "\u0627\u062a\u0635\u0627\u0644",
                    CANCELLATION: "\u0625\u0644\u063a\u0627\u0621",
                    CLOSE: "\u0625\u063a\u0644\u0627\u0642",
                    COPY: "\u0646\u0633\u062e",
                    DETAILS: "\u0645\u0639\u0631\u0641\u0629 \u0627\u0644\u0645\u0632\u064a\u062f",
                    DISCLAIMER_ALCOHOL: "\u064a\u0636\u0631 \u0627\u0644\u0627\u0633\u062a\u0647\u0644\u0627\u0643 \u0627\u0644\u0632\u0627\u0626\u062f \u0639\u0646 \u0627\u0644\u062d\u062f \u0628\u0635\u062d\u062a\u0643",
                    DISCLAIMER_DIETARYSUPPL: "\u0647\u0630\u0627 \u0627\u0644\u0645\u0646\u062a\u062c \u063a\u064a\u0631 \u0645\u062e\u0635\u0635 \u0644\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0637\u0628\u064a",
                    DISCLAIMER_MEDICINE: "\u062a\u0646\u0637\u0628\u0642 \u0645\u0648\u0627\u0646\u0639 \u0627\u0644\u0627\u0633\u062a\u0639\u0645\u0627\u0644. \u064a\u0631\u062c\u0649 \u0627\u0633\u062a\u0634\u0627\u0631\u0629 \u0637\u0628\u064a\u0628\u0643",
                    FREE: "\u0645\u062c\u0627\u0646\u064a",
                    GO_TO_REVIEWS: "\u0627\u0644\u0627\u0646\u062a\u0642\u0627\u0644 \u0625\u0644\u0649 \u0627\u0644\u062a\u0642\u064a\u064a\u0645\u0627\u062a",
                    GO_TO_SITE: "\u0627\u0644\u0627\u0646\u062a\u0642\u0627\u0644 \u0625\u0644\u0649 \u0627\u0644\u0645\u0648\u0642\u0639",
                    HIDE_AD: "\u0625\u062e\u0641\u0627\u0621&nbsp;\u0627\u0644\u0625\u0639\u0644\u0627\u0646",
                    INSTALL: "\u0627\u0644\u062a\u062b\u0628\u064a\u062a",
                    INSTALL_FROM_STORE: "\u0627\u062d\u0635\u0644 \u0639\u0644\u064a\u0647 \u0639\u0644\u0649 {store}",
                    LEARN_MORE: "\u0627\u0643\u062a\u0634\u0641 \u0627\u0644\u0645\u0632\u064a\u062f",
                    LEARN_MORE_EXP_1: "\u0632\u064a\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0642\u0639",
                    LEARN_MORE_EXP_2: "\u0645\u0639\u0631\u0641\u0629 \u0627\u0644\u0645\u0632\u064a\u062f",
                    LEARN_MORE_EXP_3: "\u0645\u0639\u0631\u0641\u0629 \u0627\u0644\u0645\u0632\u064a\u062f",
                    LEARN_MORE_EXP_4: "\u0632\u064a\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0642\u0639",
                    MARKET_RATING: "\u062a\u062e\u0632\u064a\u0646 \u0627\u0644\u062a\u0635\u0646\u064a\u0641",
                    MORE: "\u0627\u0644\u0645\u0632\u064a\u062f",
                    MORE_ON: "\u0627\u0644\u0645\u0632\u064a\u062f \u0639\u0646",
                    MORE_ON_THE_WEBSITE: "\u0642\u0631\u0627\u0621\u0629 \u0627\u0644\u0645\u0632\u064a\u062f \u0639\u0644\u0649 \u0645\u0648\u0642\u0639 \u0627\u0644\u0648\u064a\u0628",
                    ORGANIZATION_RATING: "\u062a\u0635\u0646\u064a\u0641 \u0627\u0644\u0634\u0631\u0643\u0629",
                    PRICE_FROM: "\u0645\u0646",
                    PRICE_TO: "\u0625\u0644\u0649",
                    REVIEW: "{val} \u0645\u0631\u0627\u062c\u0639\u0629",
                    REVIEWS: "{val} \u0645\u0631\u0627\u062c\u0639\u0627\u062a",
                    REVIEWS_PROVIDED_BY: "\u0627\u0644\u062a\u0642\u064a\u064a\u0645\u0627\u062a \u0627\u0644\u0645\u062a\u0648\u0641\u0631\u0629 \u0645\u0646 \u0642\u0650\u0628\u0644",
                    REWARDED_BEFORE_REWARD_MESSAGE: "\u0633\u0648\u0641 \u062a\u062a\u0644\u0642\u0649 \u0645\u0643\u0627\u0641\u0623\u062a\u0643 \u062e\u0644\u0627\u0644",
                    REWARDED_CLOSE_MESSAGE: "\u0644\u0646 \u062a\u062a\u0644\u0642\u064e \u0645\u0643\u0627\u0641\u0623\u062a\u0643 \u0625\u0630\u0627 \u062a\u062e\u0637\u064a\u062a \u0627\u0644\u0625\u0639\u0644\u0627\u0646",
                    REWARDED_CONTINUE: "\u0645\u062a\u0627\u0628\u0639\u0629 \u0627\u0644\u0645\u0634\u0627\u0647\u062f\u0629",
                    REWARDED_LOSE_REWARD: "\u0631\u0641\u0636 \u0627\u0644\u0645\u0643\u0627\u0641\u0623\u0629",
                    SHOW_MORE_GOODS: "\u0625\u0638\u0647\u0627\u0631 \u0627\u0644\u0645\u0632\u064a\u062f",
                    SITE_RATING: "\u062a\u0635\u0646\u064a\u0641 \u0645\u0648\u0642\u0639 \u0627\u0644\u0648\u064a\u0628",
                    SOCIAL_ADV_SHORT: "\u0625\u0639\u0644\u0627\u0646 \u0627\u062c\u062a\u0645\u0627\u0639\u064a",
                    THANKS_AD_HIDDEN: "\u0634\u0643\u0631\u064b\u0627 \u0644\u0643\u060c \u0647\u0630\u0627 \u0627\u0644\u0625\u0639\u0644\u0627\u0646 \u0645\u062e\u0641\u064a \u0627\u0644\u0622\u0646.",
                    THEME_EMPTY_ACTION_BUTTON_DEFAULT_SHORT_TITLE: "Read more",
                    THEME_EMPTY_ACTION_BUTTON_LABEL: "Go",
                    TIME_IN_MINUTES: "{val} min",
                    TWO_REVIEWS: "{val} \u0645\u0631\u0627\u062c\u0639\u0627\u062a",
                    YANDEX_BROWSER: "\u0645\u062a\u0635\u0641\u062d Yandex",
                    YANDEX_BUSINESS: "Yandex.Business",
                    YANDEX_DIRECT: "Yandex.Direct",
                    YANDEX_MAPS: "Yandex.Maps",
                    YANDEX_MARKET: "Yandex.Market"
                }
            }
        }, 35030: e => {
            e.exports = {
                be: {
                    ARM_DEFAULT_TITLE: "\u0411\u043e\u043b\u044c\u0448\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435 \u0440\u0435\u043a\u043b\u0430\u043c\u043e\u0434\u0430\u0442\u0435\u043b\u044f",
                    BASED_ON_FIVE_REVIEWS: "\u041d\u0430 \u0430\u0441\u043d\u043e\u0432\u0435 {val} \u0432\u043e\u0434\u0433\u0443\u043a\u0430\u045e",
                    BASED_ON_ONE_REVIEW: "\u041d\u0430 \u0430\u0441\u043d\u043e\u0432\u0435 {val} \u0432\u043e\u0434\u0433\u0443\u043a\u0443",
                    BASED_ON_TWO_REVIEWS: "\u041d\u0430 \u0430\u0441\u043d\u043e\u0432\u0435 {val} \u0432\u043e\u0434\u0433\u0443\u043a\u0430\u045e",
                    CALL: "\u041f\u043e\u0437\u0432\u043e\u043d\u0438\u0442\u044c",
                    CANCELLATION: "\u041e\u0442\u043c\u0435\u043d\u0430",
                    CLOSE: "\u0417\u0430\u0447\u044b\u043d\u0456\u0446\u044c",
                    COPY: "\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c",
                    DETAILS: "\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435",
                    DISCLAIMER_ALCOHOL: "\u0427\u0440\u0435\u0437\u043c\u0435\u0440\u043d\u043e\u0435 \u043f\u043e\u0442\u0440\u0435\u0431\u043b\u0435\u043d\u0438\u0435 \u0432\u0440\u0435\u0434\u043d\u043e.",
                    DISCLAIMER_DIETARYSUPPL: "\u041d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u043e\u043c",
                    DISCLAIMER_MEDICINE: "\u0415\u0441\u0442\u044c \u043f\u0440\u043e\u0442\u0438\u0432\u043e\u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0438\u044f. \u041f\u043e\u0441\u043e\u0432\u0435\u0442\u0443\u0439\u0442\u0435\u0441\u044c \u0441 \u0432\u0440\u0430\u0447\u043e\u043c",
                    FREE: "\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e",
                    GO_TO_REVIEWS: "\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u043e\u0442\u0437\u044b\u0432\u0430\u043c",
                    GO_TO_SITE: "\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0441\u0430\u0439\u0442",
                    HIDE_AD: "\u0421\u043a\u0440\u044b\u0442\u044c&nbsp;\u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435",
                    INSTALL: "\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c",
                    INSTALL_FROM_STORE: "\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0438\u0437 {store}",
                    LEARN_MORE: "\u0423\u0437\u043d\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435",
                    LEARN_MORE_EXP_1: "\u041f\u0435\u0440\u0435\u0439\u0442\u0438",
                    LEARN_MORE_EXP_2: "\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435",
                    LEARN_MORE_EXP_3: "\u0423\u0437\u043d\u0430\u0442\u044c",
                    LEARN_MORE_EXP_4: "\u041e\u0442\u043a\u0440\u044b\u0442\u044c",
                    MARKET_RATING: "\u0440\u0435\u0439\u0442\u0438\u043d\u0433 \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0430",
                    MORE: "\u041f\u0435\u0440\u0435\u0439\u0442\u0438",
                    MORE_ON: "\u0411\u043e\u043b\u044c\u0448\u0435 \u043d\u0430",
                    MORE_ON_THE_WEBSITE: "\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435",
                    ORGANIZATION_RATING: "\u0440\u0435\u0439\u0442\u0438\u043d\u0433 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438",
                    PRICE_FROM: "\u043e\u0442",
                    PRICE_TO: "\u0434\u043e",
                    REVIEW: "{val} \u0432\u043e\u0434\u0433\u0443\u043a",
                    REVIEWS: "{val} \u0432\u043e\u0434\u0433\u0443\u043a\u0430\u045e",
                    REVIEWS_PROVIDED_BY: "\u0412\u043e\u0434\u0433\u0443\u043a\u0456 \u0430\u0442\u0440\u044b\u043c\u0430\u043d\u044b \u0430\u0434 \u0441\u044d\u0440\u0432\u0456\u0441\u0443",
                    REWARDED_BEFORE_REWARD_MESSAGE: "\u0423\u0437\u043d\u0430\u0433\u0430\u0440\u043e\u0434\u0430 \u043d\u0430\u043b\u0456\u0447\u044b\u0446\u0446\u0430 \u043f\u0440\u0430\u0437",
                    REWARDED_CLOSE_MESSAGE: "\u0412\u044b \u043d\u0435 \u0430\u0442\u0440\u044b\u043c\u0430\u0435\u0446\u0435 \u045e\u0437\u043d\u0430\u0433\u0430\u0440\u043e\u0434\u0436\u0430\u043d\u043d\u0435, \u043a\u0430\u043b\u0456 \u043f\u0440\u0430\u043f\u0443\u0441\u0446\u0456\u0446\u0435 \u0440\u044d\u043a\u043b\u0430\u043c\u0443",
                    REWARDED_CONTINUE: "\u041f\u0440\u0430\u0446\u044f\u0433\u043d\u0443\u0446\u044c \u043f\u0440\u0430\u0433\u043b\u044f\u0434",
                    REWARDED_LOSE_REWARD: "\u0410\u0434\u043c\u043e\u0432\u0456\u0446\u0446\u0430 \u0430\u0434 \u0443\u0437\u043d\u0430\u0433\u0430\u0440\u043e\u0434\u044b",
                    SHOW_MORE_GOODS: "\u0415\u0449\u0451 \u0442\u043e\u0432\u0430\u0440\u044b",
                    SITE_RATING: "\u0440\u0435\u0439\u0442\u0438\u043d\u0433 \u0441\u0430\u0439\u0442\u0430",
                    SOCIAL_ADV_SHORT: "\u0421\u043e\u0446\u0440\u0435\u043a\u043b\u0430\u043c\u0430",
                    THANKS_AD_HIDDEN: "\u0421\u043f\u0430\u0441\u0438\u0431\u043e, \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u043a\u0440\u044b\u0442\u043e.",
                    THEME_EMPTY_ACTION_BUTTON_DEFAULT_SHORT_TITLE: "\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435",
                    THEME_EMPTY_ACTION_BUTTON_LABEL: "\u041f\u0435\u0440\u0435\u0439\u0442\u0438",
                    TIME_IN_MINUTES: "{val} \u043c\u0438\u043d",
                    TWO_REVIEWS: "{val} \u0432\u043e\u0434\u0433\u0443\u043a\u0456",
                    YANDEX_BROWSER: "\u042f\u043d\u0434\u0435\u043a\u0441.\u0411\u0440\u0430\u0443\u0437\u0435\u0440",
                    YANDEX_BUSINESS: "\u042f.\u0411\u0438\u0437\u043d\u0435\u0441",
                    YANDEX_DIRECT: "\u042f\u043d\u0434\u0435\u043a\u0441.\u0414\u0438\u0440\u0435\u043a\u0442",
                    YANDEX_MAPS: "\u042f\u043d\u0434\u0435\u043a\u0441.\u041a\u0430\u0440\u0442\u044b",
                    YANDEX_MARKET: "\u042f\u043d\u0434\u0435\u043a\u0441.\u041c\u0430\u0440\u043a\u0435\u0442"
                }
            }
        }, 69464: e => {
            e.exports = {
                cs: {
                    ARM_DEFAULT_TITLE: "Bli\u017e\u0161\xed informace na webov\xe9 str\xe1nce inzerenta",
                    BASED_ON_FIVE_REVIEWS: "Na z\xe1klad\u011b {val} recenz\xed",
                    BASED_ON_ONE_REVIEW: "Na z\xe1klad\u011b {val} recenz\xed",
                    BASED_ON_TWO_REVIEWS: "Na z\xe1klad\u011b {val} recenz\xed",
                    CALL: "Volat",
                    CANCELLATION: "Zru\u0161it",
                    CLOSE: "Close",
                    COPY: "Kop\xedrovat",
                    DETAILS: "Learn more",
                    DISCLAIMER_ALCOHOL: "Nadm\u011brn\xe9 u\u017e\xedv\xe1n\xed \u0161kod\xed zdrav\xed",
                    DISCLAIMER_DIETARYSUPPL: "Tento produkt nen\xed ur\u010den pro l\xe9ka\u0159sk\xe9 \xfa\u010dely",
                    DISCLAIMER_MEDICINE: "Ohledn\u011b p\u0159\xedpadn\xfdch kontraindikac\xed se obra\u0165te na sv\xe9ho l\xe9ka\u0159e",
                    FREE: "Voln\xfd",
                    GO_TO_REVIEWS: "P\u0159ej\xedt na recenze",
                    GO_TO_SITE: "J\xedt na str\xe1nky",
                    HIDE_AD: "Skr\xfdt&nbsp;reklamu",
                    INSTALL: "Nainstalovat",
                    INSTALL_FROM_STORE: "Z\xedskejte ji v obchod\u011b {store}",
                    LEARN_MORE: "Podrobn\u011bj\u0161\xed informace",
                    LEARN_MORE_EXP_1: "Nav\u0161t\xedvit str\xe1nku",
                    LEARN_MORE_EXP_2: "Bli\u017e\u0161\xed informace",
                    LEARN_MORE_EXP_3: "Bli\u017e\u0161\xed informace",
                    LEARN_MORE_EXP_4: "Nav\u0161t\xedvit str\xe1nku",
                    MARKET_RATING: "hodnocen\xed obchodu",
                    MORE: "Dal\u0161\xed",
                    MORE_ON: "Podrobnosti na",
                    MORE_ON_THE_WEBSITE: "P\u0159e\u010dt\u011bte si v\xedce na webov\xe9 str\xe1nce",
                    ORGANIZATION_RATING: "hodnocen\xed spole\u010dnosti",
                    PRICE_FROM: "od",
                    PRICE_TO: "do",
                    REVIEW: "{val} recenze",
                    REVIEWS: "{val} recenz\xed",
                    REVIEWS_PROVIDED_BY: "Recenze poskytnuty od",
                    REWARDED_BEFORE_REWARD_MESSAGE: "Odm\u011bnu obdr\u017e\xedte za",
                    REWARDED_CLOSE_MESSAGE: "Odm\u011bnu neobdr\u017e\xedte, pokud p\u0159esko\u010d\xedte reklamu",
                    REWARDED_CONTINUE: "Pokra\u010dovat ve sledov\xe1n\xed",
                    REWARDED_LOSE_REWARD: "Odm\xedtnout odm\u011bnu",
                    SHOW_MORE_GOODS: "Zobrazit v\xedce",
                    SITE_RATING: "hodnocen\xed webov\xe9 str\xe1nky",
                    SOCIAL_ADV_SHORT: "Reklama na soci\xe1ln\xedch m\xe9di\xedch",
                    THANKS_AD_HIDDEN: "D\u011bkujeme v\xe1m, tato reklama je nyn\xed skryta.",
                    THEME_EMPTY_ACTION_BUTTON_DEFAULT_SHORT_TITLE: "Read more",
                    THEME_EMPTY_ACTION_BUTTON_LABEL: "Go",
                    TIME_IN_MINUTES: "{val} min",
                    TWO_REVIEWS: "{val} recenze",
                    YANDEX_BROWSER: "Yandex Browser",
                    YANDEX_BUSINESS: "Yandex.Business",
                    YANDEX_DIRECT: "Yandex.Direct",
                    YANDEX_MAPS: "Yandex.Maps",
                    YANDEX_MARKET: "Yandex.Market"
                }
            }
        }, 53693: e => {
            e.exports = {
                de: {
                    ARM_DEFAULT_TITLE: "More information on the advertised website",
                    BASED_ON_FIVE_REVIEWS: "Basierend auf {val} Rezensionen",
                    BASED_ON_ONE_REVIEW: "Basierend auf {val} Rezensionen",
                    BASED_ON_TWO_REVIEWS: "Basierend auf {val} Rezensionen",
                    CALL: "Anrufen",
                    CANCELLATION: "Abbrechen",
                    CLOSE: "Close",
                    COPY: "Kopieren",
                    DETAILS: "Learn more",
                    DISCLAIMER_ALCOHOL: "\xdcberm\xe4\xdfiger Alkoholkonsum f\xfchrt zu Gesundheitssch\xe4den.",
                    DISCLAIMER_DIETARYSUPPL: "Kein Arzneimittel",
                    DISCLAIMER_MEDICINE: "Es bestehen Gegenanzeigen. Konsultieren Sie zun\xe4chst Ihren Arzt.",
                    FREE: "Kostenlos",
                    GO_TO_REVIEWS: "Zu Bewertungen",
                    GO_TO_SITE: "Zur Website",
                    HIDE_AD: "Anzeige&nbsp;ausblenden",
                    INSTALL: "Installieren",
                    INSTALL_FROM_STORE: "\xdcber {store} installieren",
                    LEARN_MORE: "Mehr erfahren",
                    LEARN_MORE_EXP_1: "Zur Website",
                    LEARN_MORE_EXP_2: "Details",
                    LEARN_MORE_EXP_3: "Mehr erfahren",
                    LEARN_MORE_EXP_4: "Website besuchen",
                    MARKET_RATING: "Store-Bewertung",
                    MORE: "Details",
                    MORE_ON: "Weitere Infos auf",
                    MORE_ON_THE_WEBSITE: "Weitere Infos unter",
                    ORGANIZATION_RATING: "Organisationsbewertung",
                    PRICE_FROM: "von",
                    PRICE_TO: "bis",
                    REVIEW: "{val} Review",
                    REVIEWS: "{val} Reviews",
                    REVIEWS_PROVIDED_BY: "Bewertungen bereitgestellt von",
                    REWARDED_BEFORE_REWARD_MESSAGE: "Sie erhalten Ihre Belohnung in",
                    REWARDED_CLOSE_MESSAGE: "Sie erhalten keine Belohnung, wenn Sie die Anzeige \xfcberspringen",
                    REWARDED_CONTINUE: "Weiterschauen",
                    REWARDED_LOSE_REWARD: "Belohnung ablehnen",
                    SHOW_MORE_GOODS: "Weitere Produkte anzeigen",
                    SITE_RATING: "Website-Bewertung",
                    SOCIAL_ADV_SHORT: "Soziale Werbung",
                    THANKS_AD_HIDDEN: "Danke! Die Anzeige wurde ausgeblendet.",
                    THEME_EMPTY_ACTION_BUTTON_DEFAULT_SHORT_TITLE: "Read more",
                    THEME_EMPTY_ACTION_BUTTON_LABEL: "Go",
                    TIME_IN_MINUTES: "{val} min",
                    TWO_REVIEWS: "{val} Reviews",
                    YANDEX_BROWSER: "Yandex.Browser",
                    YANDEX_BUSINESS: "Yandex.Business",
                    YANDEX_DIRECT: "Yandex.Direct",
                    YANDEX_MAPS: "Yandex.Maps",
                    YANDEX_MARKET: "Yandex.Market"
                }
            }
        }, 43537: e => {
            e.exports = {
                en: {
                    ARM_DEFAULT_TITLE: "More information on the advertised website",
                    BASED_ON_FIVE_REVIEWS: "Based on {val} reviews",
                    BASED_ON_ONE_REVIEW: "Based on {val} reviews",
                    BASED_ON_TWO_REVIEWS: "Based on {val} reviews",
                    CALL: "Call",
                    CANCELLATION: "Cancel",
                    CLOSE: "Close",
                    COPY: "Copy",
                    DETAILS: "Learn more",
                    DISCLAIMER_ALCOHOL: "Excessive consumption is harmful to your health",
                    DISCLAIMER_DIETARYSUPPL: "This product is not intended for medical use",
                    DISCLAIMER_MEDICINE: "Contraindications apply. Please consult your doctor",
                    FREE: "Free",
                    GO_TO_REVIEWS: "Go to reviews",
                    GO_TO_SITE: "Go to site",
                    HIDE_AD: "Hide&nbsp;ad",
                    INSTALL: "Install",
                    INSTALL_FROM_STORE: "Get it on {store}",
                    LEARN_MORE: "Find out more",
                    LEARN_MORE_EXP_1: "Visit Site",
                    LEARN_MORE_EXP_2: "Learn More",
                    LEARN_MORE_EXP_3: "Learn More",
                    LEARN_MORE_EXP_4: "Visit Site",
                    MARKET_RATING: "store rating",
                    MORE: "More",
                    MORE_ON: "More on",
                    MORE_ON_THE_WEBSITE: "Read more on the website",
                    ORGANIZATION_RATING: "company rating",
                    PRICE_FROM: "from",
                    PRICE_TO: "to",
                    REVIEW: "{val} review",
                    REVIEWS: "{val} reviews",
                    REVIEWS_PROVIDED_BY: "Reviews provided by",
                    REWARDED_BEFORE_REWARD_MESSAGE: "You'll receive your reward in",
                    REWARDED_CLOSE_MESSAGE: "You won't be rewarded if you skip the ad",
                    REWARDED_CONTINUE: "Continue watching",
                    REWARDED_LOSE_REWARD: "Refuse award",
                    SHOW_MORE_GOODS: "Show more",
                    SITE_RATING: "website rating",
                    SOCIAL_ADV_SHORT: "Social ad",
                    THANKS_AD_HIDDEN: "Thank you, this ad is hidden now.",
                    THEME_EMPTY_ACTION_BUTTON_DEFAULT_SHORT_TITLE: "Read more",
                    THEME_EMPTY_ACTION_BUTTON_LABEL: "Go",
                    TIME_IN_MINUTES: "{val} min",
                    TWO_REVIEWS: "{val} reviews",
                    YANDEX_BROWSER: "Yandex Browser",
                    YANDEX_BUSINESS: "Yandex.Business",
                    YANDEX_DIRECT: "Yandex.Direct",
                    YANDEX_MAPS: "Yandex.Maps",
                    YANDEX_MARKET: "Yandex.Market"
                }
            }
        }, 74096: e => {
            e.exports = {
                es: {
                    ARM_DEFAULT_TITLE: "More information on the advertised website",
                    BASED_ON_FIVE_REVIEWS: "Basado en {val} rese\xf1as",
                    BASED_ON_ONE_REVIEW: "Basado en {val} rese\xf1as",
                    BASED_ON_TWO_REVIEWS: "Basado en {val} rese\xf1as",
                    CALL: "Llamar",
                    CANCELLATION: "Cancelar",
                    CLOSE: "Close",
                    COPY: "Copiar",
                    DETAILS: "Learn more",
                    DISCLAIMER_ALCOHOL: "El consumo excesivo es perjudicial para la salud",
                    DISCLAIMER_DIETARYSUPPL: "Este producto no est\xe1 dise\xf1ado para uso m\xe9dico",
                    DISCLAIMER_MEDICINE: "Puede haber contraindicaciones. Por favor, consulta a tu m\xe9dico",
                    FREE: "Gratis",
                    GO_TO_REVIEWS: "Ir a comentarios",
                    GO_TO_SITE: "Ir al sitio",
                    HIDE_AD: "Ocultar&nbsp;anuncio",
                    INSTALL: "Instalar",
                    INSTALL_FROM_STORE: "Vamos a ello {store}",
                    LEARN_MORE: "M\xe1s informaci\xf3n",
                    LEARN_MORE_EXP_1: "Ir",
                    LEARN_MORE_EXP_2: "M\xe1s detalles",
                    LEARN_MORE_EXP_3: "Averiguar",
                    LEARN_MORE_EXP_4: "Abrir",
                    MARKET_RATING: "valoraci\xf3n de la tienda",
                    MORE: "M\xe1s",
                    MORE_ON: "M\xe1s sobre",
                    MORE_ON_THE_WEBSITE: "M\xe1s detalles en la p\xe1gina",
                    ORGANIZATION_RATING: "valoraci\xf3n de la organizaci\xf3n",
                    PRICE_FROM: "desde",
                    PRICE_TO: "hasta",
                    REVIEW: "{val} rese\xf1a",
                    REVIEWS: "{val} rese\xf1as",
                    REVIEWS_PROVIDED_BY: "Comentarios proporcionados por el servicio",
                    REWARDED_BEFORE_REWARD_MESSAGE: "Recibir\xe1s tu recompensa en",
                    REWARDED_CLOSE_MESSAGE: "No se te recompensar\xe1 si te saltas el anuncio",
                    REWARDED_CONTINUE: "Continuar viendo",
                    REWARDED_LOSE_REWARD: "Rechazar la recompensa",
                    SHOW_MORE_GOODS: "Mostrar m\xe1s",
                    SITE_RATING: "valoraci\xf3n del sitio",
                    SOCIAL_ADV_SHORT: "Anuncio social",
                    THANKS_AD_HIDDEN: "Gracias, este anuncio ahora est\xe1 oculto.",
                    THEME_EMPTY_ACTION_BUTTON_DEFAULT_SHORT_TITLE: "Read more",
                    THEME_EMPTY_ACTION_BUTTON_LABEL: "Go",
                    TIME_IN_MINUTES: "{val} min",
                    TWO_REVIEWS: "{val} rese\xf1as",
                    YANDEX_BROWSER: "Yandex.Navegador",
                    YANDEX_BUSINESS: "Yandex.Business",
                    YANDEX_DIRECT: "Yandex.Direct",
                    YANDEX_MAPS: "Yandex.Mapas",
                    YANDEX_MARKET: "Yandex.Mercado"
                }
            }
        }, 17461: e => {
            e.exports = {
                fr: {
                    ARM_DEFAULT_TITLE: "Plus d'informations sur le site annonc\xe9",
                    BASED_ON_FIVE_REVIEWS: "Bas\xe9 sur {val} les avis",
                    BASED_ON_ONE_REVIEW: "Bas\xe9 sur {val} les avis",
                    BASED_ON_TWO_REVIEWS: "Bas\xe9 sur {val} les avis",
                    CALL: "Appeler",
                    CANCELLATION: "Annuler",
                    CLOSE: "Fermer",
                    COPY: "Copier",
                    DETAILS: "En savoir plus",
                    DISCLAIMER_ALCOHOL: "Une consommation excessive est nocive pour la sant\xe9",
                    DISCLAIMER_DIETARYSUPPL: "Ce produit n'est pas destin\xe9 \xe0 un usage m\xe9dical",
                    DISCLAIMER_MEDICINE: "Des contre-indications s'appliquent. Veuillez consulter votre m\xe9decin",
                    FREE: "Gratuit",
                    GO_TO_REVIEWS: "Aller aux avis",
                    GO_TO_SITE: "Aller sur le site",
                    HIDE_AD: "Masquer&nbsp;annonce",
                    INSTALL: "Installer",
                    INSTALL_FROM_STORE: "Installer \xe0 partir de {store}",
                    LEARN_MORE: "Pour apprendre plus",
                    LEARN_MORE_EXP_1: "Visiter le site",
                    LEARN_MORE_EXP_2: "En savoir plus",
                    LEARN_MORE_EXP_3: "En savoir plus",
                    LEARN_MORE_EXP_4: "Visiter le site",
                    MARKET_RATING: "\xe9valuation du magasin",
                    MORE: "Plus",
                    MORE_ON: "Plus sur",
                    MORE_ON_THE_WEBSITE: "En savoir plus sur le site",
                    ORGANIZATION_RATING: "\xe9valuation de l'entreprise",
                    PRICE_FROM: "de",
                    PRICE_TO: "jusqu'\xe0",
                    REVIEW: "{val} avis",
                    REVIEWS: "{val} avis",
                    REVIEWS_PROVIDED_BY: "Avis fournis par",
                    REWARDED_BEFORE_REWARD_MESSAGE: "Vous recevrez votre r\xe9compense dans",
                    REWARDED_CLOSE_MESSAGE: "Vous ne serez pas r\xe9compens\xe9 si vous ignorez l'annonce",
                    REWARDED_CONTINUE: "Continuer \xe0 regarder",
                    REWARDED_LOSE_REWARD: "Refuser la r\xe9compense",
                    SHOW_MORE_GOODS: "Afficher plus",
                    SITE_RATING: "\xe9valuation du site Web",
                    SOCIAL_ADV_SHORT: "Publicit\xe9 sociale",
                    THANKS_AD_HIDDEN: "Merci, cette annonce est maintenant masqu\xe9e.",
                    THEME_EMPTY_ACTION_BUTTON_DEFAULT_SHORT_TITLE: "Read more",
                    THEME_EMPTY_ACTION_BUTTON_LABEL: "Go",
                    TIME_IN_MINUTES: "{val} min",
                    TWO_REVIEWS: "{val} avis",
                    YANDEX_BROWSER: "Navigateur Yandex",
                    YANDEX_BUSINESS: "Yandex Business",
                    YANDEX_DIRECT: "Yandex Direct",
                    YANDEX_MAPS: "Yandex Maps",
                    YANDEX_MARKET: "Yandex Market"
                }
            }
        }, 73451: e => {
            e.exports = {
                he: {
                    ARM_DEFAULT_TITLE: "\u05de\u05d9\u05d3\u05e2 \u05e0\u05d5\u05e1\u05e3 \u05d1\u05d0\u05ea\u05e8 \u05e2\u05dd \u05d4\u05e4\u05e8\u05e1\u05d5\u05de\u05d5\u05ea",
                    BASED_ON_FIVE_REVIEWS: "\u05de\u05d1\u05d5\u05e1\u05e1 \u05e2\u05dc {val} \u05d1\u05d9\u05e7\u05d5\u05e8\u05d5\u05ea",
                    BASED_ON_ONE_REVIEW: "\u05de\u05d1\u05d5\u05e1\u05e1 \u05e2\u05dc {val} \u05d1\u05d9\u05e7\u05d5\u05e8\u05d5\u05ea",
                    BASED_ON_TWO_REVIEWS: "\u05de\u05d1\u05d5\u05e1\u05e1 \u05e2\u05dc {val} \u05d1\u05d9\u05e7\u05d5\u05e8\u05d5\u05ea",
                    CALL: "\u05e9\u05d9\u05d7\u05d4",
                    CANCELLATION: "\u05d1\u05d9\u05d8\u05d5\u05dc",
                    CLOSE: "\u05e1\u05d2\u05d5\u05e8",
                    COPY: "\u05d4\u05e2\u05ea\u05e7",
                    DETAILS: "\u05dc\u05de\u05d9\u05d3\u05e2 \u05e0\u05d5\u05e1\u05e3",
                    DISCLAIMER_ALCOHOL: "\u05e6\u05e8\u05d9\u05db\u05d4 \u05de\u05d5\u05d2\u05d6\u05de\u05ea \u05de\u05d6\u05d9\u05e7\u05d4 \u05dc\u05d1\u05e8\u05d9\u05d0\u05d5\u05ea\u05da",
                    DISCLAIMER_DIETARYSUPPL: "\u05de\u05d5\u05e6\u05e8 \u05d6\u05d4 \u05d0\u05d9\u05e0\u05d5 \u05de\u05d9\u05d5\u05e2\u05d3 \u05dc\u05e9\u05d9\u05de\u05d5\u05e9 \u05e8\u05e4\u05d5\u05d0\u05d9",
                    DISCLAIMER_MEDICINE: "\u05e1\u05ea\u05d9\u05e8\u05d5\u05ea \u05de\u05ea\u05e7\u05d9\u05d9\u05de\u05d5\u05ea. \u05d0\u05e0\u05d0 \u05d4\u05ea\u05d9\u05d9\u05e2\u05e5 \u05e2\u05dd \u05d4\u05e8\u05d5\u05e4\u05d0 \u05e9\u05dc\u05da",
                    FREE: "\u05d7\u05d9\u05e0\u05dd",
                    GO_TO_REVIEWS: "\u05e2\u05d1\u05d5\u05e8 \u05d0\u05dc \u05d1\u05d9\u05e7\u05d5\u05e8\u05d5\u05ea",
                    GO_TO_SITE: "\u05db\u05e0\u05e1\u05d5 \u05dc\u05d0\u05ea\u05e8",
                    HIDE_AD: "\u05d4\u05e1\u05ea\u05e8&nbsp;\u05de\u05d5\u05d3\u05e2\u05d4",
                    INSTALL: "\u05d4\u05ea\u05e7\u05df",
                    INSTALL_FROM_STORE: "\u05dc\u05e7\u05d1\u05dc \u05d0\u05ea \u05d6\u05d4 {store}",
                    LEARN_MORE: "\u05dc\u05de\u05d9\u05d3\u05e2 \u05e0\u05d5\u05e1\u05e3",
                    LEARN_MORE_EXP_1: "\u05d1\u05e7\u05e8 \u05d1\u05d0\u05ea\u05e8",
                    LEARN_MORE_EXP_2: "\u05dc\u05de\u05d9\u05d3\u05e2 \u05e0\u05d5\u05e1\u05e3",
                    LEARN_MORE_EXP_3: "\u05dc\u05de\u05d9\u05d3\u05e2 \u05e0\u05d5\u05e1\u05e3",
                    LEARN_MORE_EXP_4: "\u05d1\u05e7\u05e8 \u05d1\u05d0\u05ea\u05e8",
                    MARKET_RATING: "\u05d3\u05d9\u05e8\u05d5\u05d2 \u05d4\u05d7\u05e0\u05d5\u05ea",
                    MORE: "\u05e2\u05d5\u05d3",
                    MORE_ON: "\u05e2\u05d5\u05d3 \u05e2\u05dc",
                    MORE_ON_THE_WEBSITE: "\u05e7\u05e8\u05d0 \u05e2\u05d5\u05d3 \u05d1\u05d0\u05ea\u05e8",
                    ORGANIZATION_RATING: "\u05d3\u05d9\u05e8\u05d5\u05d2 \u05d4\u05d7\u05d1\u05e8\u05d4",
                    PRICE_FROM: "\u05de",
                    PRICE_TO: "\u05d0\u05dc",
                    REVIEW: "{val} \u05d1\u05d9\u05e7\u05d5\u05e8\u05ea",
                    REVIEWS: "{val} \u05d1\u05d9\u05e7\u05d5\u05e8\u05d5\u05ea",
                    REVIEWS_PROVIDED_BY: "\u05d1\u05d9\u05e7\u05d5\u05e8\u05d5\u05ea \u05e9\u05e1\u05d5\u05e4\u05e7\u05d5 \u05e2\u05dc \u05d9\u05d3\u05d9",
                    REWARDED_BEFORE_REWARD_MESSAGE: "\u05ea\u05e7\u05d1\u05dc \u05d0\u05ea \u05d4\u05e4\u05e8\u05e1 \u05e9\u05dc\u05da \u05d1",
                    REWARDED_CLOSE_MESSAGE: "\u05dc\u05d0 \u05ea\u05ea\u05d5\u05d2\u05de\u05dc \u05d0\u05dd \u05ea\u05d3\u05dc\u05d2 \u05e2\u05dc \u05d4\u05e4\u05e8\u05e1\u05d5\u05de\u05ea",
                    REWARDED_CONTINUE: "\u05d4\u05de\u05e9\u05da \u05dc\u05e6\u05e4\u05d5\u05ea",
                    REWARDED_LOSE_REWARD: "\u05e1\u05e8\u05d1 \u05dc\u05e4\u05e8\u05e1",
                    SHOW_MORE_GOODS: "\u05d4\u05e6\u05d2 \u05e2\u05d5\u05d3",
                    SITE_RATING: "\u05d3\u05d9\u05e8\u05d5\u05d2 \u05d4\u05d0\u05ea\u05e8",
                    SOCIAL_ADV_SHORT: "\u05de\u05d5\u05d3\u05e2\u05d4 \u05d7\u05d1\u05e8\u05ea\u05d9\u05ea",
                    THANKS_AD_HIDDEN: "\u05ea\u05d5\u05d3\u05d4, \u05de\u05d5\u05d3\u05e2\u05d4 \u05d6\u05d5 \u05de\u05d5\u05e1\u05ea\u05e8\u05ea \u05e2\u05db\u05e9\u05d9\u05d5.",
                    THEME_EMPTY_ACTION_BUTTON_DEFAULT_SHORT_TITLE: "Read more",
                    THEME_EMPTY_ACTION_BUTTON_LABEL: "Go",
                    TIME_IN_MINUTES: "{val} min",
                    TWO_REVIEWS: "{val} \u05d1\u05d9\u05e7\u05d5\u05e8\u05d5\u05ea",
                    YANDEX_BROWSER: "\u05d3\u05e4\u05d3\u05e4\u05df \u05d9\u05d0\u05e0\u05d3\u05e7\u05e1",
                    YANDEX_BUSINESS: "Yandex.Business",
                    YANDEX_DIRECT: "Yandex.Direct",
                    YANDEX_MAPS: "Yandex.Maps",
                    YANDEX_MARKET: "Yandex.Market"
                }
            }
        }, 30817: e => {
            e.exports = {
                it: {
                    ARM_DEFAULT_TITLE: "Maggiori informazioni sul sito web pubblicizzato",
                    BASED_ON_FIVE_REVIEWS: "In base a {val} recensioni",
                    BASED_ON_ONE_REVIEW: "In base a {val} recensioni",
                    BASED_ON_TWO_REVIEWS: "In base a {val} recensioni",
                    CALL: "Chiama",
                    CANCELLATION: "Annulla",
                    CLOSE: "Chiudi",
                    COPY: "Copia",
                    DETAILS: "Ulteriori informazioni",
                    DISCLAIMER_ALCOHOL: "Il consumo eccessivo \xe8 dannoso per la salute",
                    DISCLAIMER_DIETARYSUPPL: "Questo prodotto non \xe8 destinato a uso medico",
                    DISCLAIMER_MEDICINE: "Sono presenti controindicazioni. Consulta il tuo medico",
                    FREE: "Gratuito",
                    GO_TO_REVIEWS: "Vai alle recensioni",
                    GO_TO_SITE: "Vai al sito",
                    HIDE_AD: "Nascondi&nbsp;annuncio",
                    INSTALL: "Installa",
                    INSTALL_FROM_STORE: "Ottienilo su {store}",
                    LEARN_MORE: "Scopri di pi\xf9",
                    LEARN_MORE_EXP_1: "Visita il sito",
                    LEARN_MORE_EXP_2: "Ulteriori informazioni",
                    LEARN_MORE_EXP_3: "Ulteriori informazioni",
                    LEARN_MORE_EXP_4: "Visita il sito",
                    MARKET_RATING: "valutazione del negozio",
                    MORE: "Altro",
                    MORE_ON: "Altro su",
                    MORE_ON_THE_WEBSITE: "Ulteriori informazioni sul sito web",
                    ORGANIZATION_RATING: "valutazione dell'azienda",
                    PRICE_FROM: "da",
                    PRICE_TO: "a",
                    REVIEW: "{val} recensione",
                    REVIEWS: "{val} recensioni",
                    REVIEWS_PROVIDED_BY: "Recensioni fornite da",
                    REWARDED_BEFORE_REWARD_MESSAGE: "Riceverai la tua ricompensa tra",
                    REWARDED_CLOSE_MESSAGE: "Non riceverai la ricompensa se salti l'annuncio",
                    REWARDED_CONTINUE: "Continua a guardare",
                    REWARDED_LOSE_REWARD: "Rifiuta la ricompensa",
                    SHOW_MORE_GOODS: "Mostra di pi\xf9",
                    SITE_RATING: "valutazione del sito web",
                    SOCIAL_ADV_SHORT: "Annuncio sociale",
                    THANKS_AD_HIDDEN: "Grazie, questo annuncio \xe8 ora nascosto.",
                    THEME_EMPTY_ACTION_BUTTON_DEFAULT_SHORT_TITLE: "Read more",
                    THEME_EMPTY_ACTION_BUTTON_LABEL: "Go",
                    TIME_IN_MINUTES: "{val} min",
                    TWO_REVIEWS: "{val} recensioni",
                    YANDEX_BROWSER: "Browser Yandex",
                    YANDEX_BUSINESS: "Yandex.Business",
                    YANDEX_DIRECT: "Yandex.Direct",
                    YANDEX_MAPS: "Yandex.Maps",
                    YANDEX_MARKET: "Yandex.Market"
                }
            }
        }, 89213: e => {
            e.exports = {
                ja: {
                    ARM_DEFAULT_TITLE: "\u5ba3\u4f1d\u3055\u308c\u305f\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u306e\u8a73\u7d30",
                    BASED_ON_FIVE_REVIEWS: "\u5bfe\u8c61\u30ec\u30d3\u30e5\u30fc\u6570\uff1a{val}",
                    BASED_ON_ONE_REVIEW: "\u5bfe\u8c61\u30ec\u30d3\u30e5\u30fc\u6570\uff1a{val}",
                    BASED_ON_TWO_REVIEWS: "\u5bfe\u8c61\u30ec\u30d3\u30e5\u30fc\u6570\uff1a{val}",
                    CALL: "\u96fb\u8a71\u3059\u308b",
                    CANCELLATION: "\u30ad\u30e3\u30f3\u30bb\u30eb",
                    CLOSE: "\u9589\u3058\u308b",
                    COPY: "\u30b3\u30d4\u30fc",
                    DETAILS: "\u3082\u3063\u3068\u8a73\u3057\u304f",
                    DISCLAIMER_ALCOHOL: "\u904e\u5270\u306a\u6d88\u8cbb\u306f\u5065\u5eb7\u3092\u5bb3\u3057\u307e\u3059",
                    DISCLAIMER_DIETARYSUPPL: "\u3053\u306e\u88fd\u54c1\u306f\u533b\u7642\u7528\u3067\u306f\u3042\u308a\u307e\u305b\u3093",
                    DISCLAIMER_MEDICINE: "\u7981\u5fcc\u304c\u9069\u7528\u3055\u308c\u307e\u3059\u3002\u533b\u5e2b\u306b\u76f8\u8ac7\u3057\u3066\u304f\u3060\u3055\u3044",
                    FREE: "\u7121\u6599",
                    GO_TO_REVIEWS: "\u30ec\u30d3\u30e5\u30fc\u3092\u898b\u308b",
                    GO_TO_SITE: "\u30b5\u30a4\u30c8\u306b\u884c\u304f",
                    HIDE_AD: "\u5e83\u544a\u3092\u975e\u8868\u793a",
                    INSTALL: "\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",
                    INSTALL_FROM_STORE: "{store}\u3067\u5165\u624b\u3059\u308b",
                    LEARN_MORE: "\u8a73\u7d30\u3092\u78ba\u8a8d\u3059\u308b",
                    LEARN_MORE_EXP_1: "\u30b5\u30a4\u30c8\u3092\u8a2a\u308c\u308b",
                    LEARN_MORE_EXP_2: "\u3082\u3063\u3068\u8a73\u3057\u304f",
                    LEARN_MORE_EXP_3: "\u3082\u3063\u3068\u8a73\u3057\u304f",
                    LEARN_MORE_EXP_4: "\u30b5\u30a4\u30c8\u3092\u8a2a\u308c\u308b",
                    MARKET_RATING: "\u30b9\u30c8\u30a2\u8a55\u4fa1",
                    MORE: "\u8a73\u7d30",
                    MORE_ON: "\u8a73\u7d30\uff1a",
                    MORE_ON_THE_WEBSITE: "\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u3067\u3055\u3089\u306b\u8aad\u3080",
                    ORGANIZATION_RATING: "\u4f1a\u793e\u8a55\u4fa1",
                    PRICE_FROM: "from",
                    PRICE_TO: "\uff5e",
                    REVIEW: "{val} \u500b\u306e\u30ec\u30d3\u30e5\u30fc",
                    REVIEWS: "{val} \u500b\u306e\u30ec\u30d3\u30e5\u30fc",
                    REVIEWS_PROVIDED_BY: "\u30ec\u30d3\u30e5\u30fc\u63d0\u4f9b\u8005\uff1a",
                    REWARDED_BEFORE_REWARD_MESSAGE: "\u30ea\u30ef\u30fc\u30c9\u306e\u53d7\u3051\u53d6\u308a\u307e\u3067\uff1a",
                    REWARDED_CLOSE_MESSAGE: "\u5e83\u544a\u3092\u30b9\u30ad\u30c3\u30d7\u3059\u308b\u3068\u30ea\u30ef\u30fc\u30c9\u306f\u3082\u3089\u3048\u307e\u305b\u3093",
                    REWARDED_CONTINUE: "\u8996\u8074\u3057\u7d9a\u3051\u308b",
                    REWARDED_LOSE_REWARD: "\u30a2\u30ef\u30fc\u30c9\u3092\u62d2\u5426\u3059\u308b",
                    SHOW_MORE_GOODS: "\u3055\u3089\u306b\u8868\u793a\u3059\u308b",
                    SITE_RATING: "\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u8a55\u4fa1",
                    SOCIAL_ADV_SHORT: "\u30bd\u30fc\u30b7\u30e3\u30eb\u5e83\u544a",
                    THANKS_AD_HIDDEN: "\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\u3002\u3053\u306e\u5e83\u544a\u306f\u975e\u8868\u793a\u306b\u306a\u308a\u307e\u3057\u305f\u3002",
                    THEME_EMPTY_ACTION_BUTTON_DEFAULT_SHORT_TITLE: "Read more",
                    THEME_EMPTY_ACTION_BUTTON_LABEL: "Go",
                    TIME_IN_MINUTES: "{val} min",
                    TWO_REVIEWS: "{val} \u500b\u306e\u30ec\u30d3\u30e5\u30fc",
                    YANDEX_BROWSER: "Yandex \u30d6\u30e9\u30a6\u30b6\u30fc",
                    YANDEX_BUSINESS: "Yandex.Business",
                    YANDEX_DIRECT: "Yandex.Direct",
                    YANDEX_MAPS: "Yandex.Maps",
                    YANDEX_MARKET: "Yandex.Market"
                }
            }
        }, 87585: e => {
            e.exports = {
                kk: {
                    ARM_DEFAULT_TITLE: "\u0411\u043e\u043b\u044c\u0448\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435 \u0440\u0435\u043a\u043b\u0430\u043c\u043e\u0434\u0430\u0442\u0435\u043b\u044f",
                    BASED_ON_FIVE_REVIEWS: "\u041d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 {val} \u043e\u0442\u0437\u044b\u0432\u043e\u0432",
                    BASED_ON_ONE_REVIEW: "\u041d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 {val} \u043e\u0442\u0437\u044b\u0432\u0430",
                    BASED_ON_TWO_REVIEWS: "\u041d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 {val} \u043e\u0442\u0437\u044b\u0432\u043e\u0432",
                    CALL: "\u041f\u043e\u0437\u0432\u043e\u043d\u0438\u0442\u044c",
                    CANCELLATION: "\u041e\u0442\u043c\u0435\u043d\u0430",
                    CLOSE: "\u0416\u0430\u0431\u0443",
                    COPY: "\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c",
                    DETAILS: "\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435",
                    DISCLAIMER_ALCOHOL: "\u0427\u0440\u0435\u0437\u043c\u0435\u0440\u043d\u043e\u0435 \u043f\u043e\u0442\u0440\u0435\u0431\u043b\u0435\u043d\u0438\u0435 \u0432\u0440\u0435\u0434\u043d\u043e.",
                    DISCLAIMER_DIETARYSUPPL: "\u041d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u043e\u043c",
                    DISCLAIMER_MEDICINE: "\u0415\u0441\u0442\u044c \u043f\u0440\u043e\u0442\u0438\u0432\u043e\u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0438\u044f. \u041f\u043e\u0441\u043e\u0432\u0435\u0442\u0443\u0439\u0442\u0435\u0441\u044c \u0441 \u0432\u0440\u0430\u0447\u043e\u043c",
                    FREE: "\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e",
                    GO_TO_REVIEWS: "\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u043e\u0442\u0437\u044b\u0432\u0430\u043c",
                    GO_TO_SITE: "\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0441\u0430\u0439\u0442",
                    HIDE_AD: "\u0421\u043a\u0440\u044b\u0442\u044c&nbsp;\u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435",
                    INSTALL: "\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c",
                    INSTALL_FROM_STORE: "\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0438\u0437 {store}",
                    LEARN_MORE: "\u0423\u0437\u043d\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435",
                    LEARN_MORE_EXP_1: "\u041f\u0435\u0440\u0435\u0439\u0442\u0438",
                    LEARN_MORE_EXP_2: "\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435",
                    LEARN_MORE_EXP_3: "\u0423\u0437\u043d\u0430\u0442\u044c",
                    LEARN_MORE_EXP_4: "\u041e\u0442\u043a\u0440\u044b\u0442\u044c",
                    MARKET_RATING: "\u0440\u0435\u0439\u0442\u0438\u043d\u0433 \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0430",
                    MORE: "\u041f\u0435\u0440\u0435\u0439\u0442\u0438",
                    MORE_ON: "\u0411\u043e\u043b\u044c\u0448\u0435 \u043d\u0430",
                    MORE_ON_THE_WEBSITE: "\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435",
                    ORGANIZATION_RATING: "\u0440\u0435\u0439\u0442\u0438\u043d\u0433 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438",
                    PRICE_FROM: "\u043e\u0442",
                    PRICE_TO: "\u0434\u043e",
                    REVIEW: "{val} \u043f\u0456\u043a\u0456\u0440",
                    REVIEWS: "{val} \u043f\u0456\u043a\u0456\u0440",
                    REVIEWS_PROVIDED_BY: "\u0421\u0435\u0440\u0432\u0438\u0441 \u04b1\u0441\u044b\u043d\u0493\u0430\u043d \u043f\u0456\u043a\u0456\u0440\u043b\u0435\u0440",
                    REWARDED_BEFORE_REWARD_MESSAGE: "\u041d\u0430\u0433\u0440\u0430\u0434\u0430 \u043d\u0430\u0447\u0438\u0441\u043b\u0438\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437",
                    REWARDED_CLOSE_MESSAGE: "\u0412\u044b \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u0432\u043e\u0437\u043d\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043d\u0438\u0435, \u0435\u0441\u043b\u0438 \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u0440\u0435\u043a\u043b\u0430\u043c\u0443",
                    REWARDED_CONTINUE: "\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440",
                    REWARDED_LOSE_REWARD: "\u041e\u0442\u043a\u0430\u0437\u0430\u0442\u044c\u0441\u044f \u043e\u0442 \u043d\u0430\u0433\u0440\u0430\u0434\u044b",
                    SHOW_MORE_GOODS: "\u0415\u0449\u0451 \u0442\u043e\u0432\u0430\u0440\u044b",
                    SITE_RATING: "\u0440\u0435\u0439\u0442\u0438\u043d\u0433 \u0441\u0430\u0439\u0442\u0430",
                    SOCIAL_ADV_SHORT: "\u0421\u043e\u0446\u0440\u0435\u043a\u043b\u0430\u043c\u0430",
                    THANKS_AD_HIDDEN: "\u0421\u043f\u0430\u0441\u0438\u0431\u043e, \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u043a\u0440\u044b\u0442\u043e.",
                    THEME_EMPTY_ACTION_BUTTON_DEFAULT_SHORT_TITLE: "\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435",
                    THEME_EMPTY_ACTION_BUTTON_LABEL: "\u041f\u0435\u0440\u0435\u0439\u0442\u0438",
                    TIME_IN_MINUTES: "{val} \u043c\u0438\u043d",
                    TWO_REVIEWS: "{val} \u043f\u0456\u043a\u0456\u0440",
                    YANDEX_BROWSER: "\u042f\u043d\u0434\u0435\u043a\u0441.\u0411\u0440\u0430\u0443\u0437\u0435\u0440",
                    YANDEX_BUSINESS: "\u042f.\u0411\u0438\u0437\u043d\u0435\u0441",
                    YANDEX_DIRECT: "\u042f\u043d\u0434\u0435\u043a\u0441.\u0414\u0438\u0440\u0435\u043a\u0442",
                    YANDEX_MAPS: "\u042f\u043d\u0434\u0435\u043a\u0441.\u041a\u0430\u0440\u0442\u044b",
                    YANDEX_MARKET: "\u042f\u043d\u0434\u0435\u043a\u0441.\u041c\u0430\u0440\u043a\u0435\u0442"
                }
            }
        }, 65611: e => {
            e.exports = {
                pl: {
                    ARM_DEFAULT_TITLE: "More information on the advertised website",
                    BASED_ON_FIVE_REVIEWS: "Na podstawie {val} opinii",
                    BASED_ON_ONE_REVIEW: "Na podstawie {val} opinii",
                    BASED_ON_TWO_REVIEWS: "Na podstawie {val} opinii",
                    CALL: "Zadzwo\u0144",
                    CANCELLATION: "Anuluj",
                    CLOSE: "Close",
                    COPY: "Kopiuj",
                    DETAILS: "Learn more",
                    DISCLAIMER_ALCOHOL: "Nadmierne spo\u017cycie jest szkodliwe.",
                    DISCLAIMER_DIETARYSUPPL: "Nie jest lekarstwem",
                    DISCLAIMER_MEDICINE: "Istniej\u0105 przeciwwskazania. Skonsultuj si\u0119 z lekarzem",
                    FREE: "Bezp\u0142atne",
                    GO_TO_REVIEWS: "Przejd\u017a do opinii",
                    GO_TO_SITE: "Przejd\u017a do strony",
                    HIDE_AD: "Ukryj&nbsp;reklam\u0119",
                    INSTALL: "Instaluj",
                    INSTALL_FROM_STORE: "Ustaw z {store}",
                    LEARN_MORE: "Dowiedz si\u0119 wi\u0119cej",
                    LEARN_MORE_EXP_1: "Przejd\u017a",
                    LEARN_MORE_EXP_2: "Wi\u0119cej",
                    LEARN_MORE_EXP_3: "Dowiedz si\u0119",
                    LEARN_MORE_EXP_4: "Otw\xf3rz",
                    MARKET_RATING: "ocena sklepu",
                    MORE: "Przejd\u017a",
                    MORE_ON: "Wi\u0119cej na",
                    MORE_ON_THE_WEBSITE: "Wi\u0119cej na stronie",
                    ORGANIZATION_RATING: "ocena organizacji",
                    PRICE_FROM: "od",
                    PRICE_TO: "do",
                    REVIEW: "{val} ocena",
                    REVIEWS: "{val} oceny",
                    REVIEWS_PROVIDED_BY: "Opinie s\u0105 udost\u0119pnione przez serwis",
                    REWARDED_BEFORE_REWARD_MESSAGE: "Otrzymasz nagrod\u0119 za",
                    REWARDED_CLOSE_MESSAGE: "Nie otrzymasz nagrody, je\u015bli pominiesz reklam\u0119",
                    REWARDED_CONTINUE: "Kontynuuj ogl\u0105danie",
                    REWARDED_LOSE_REWARD: "Odrzu\u0107 nagrod\u0119",
                    SHOW_MORE_GOODS: "Wi\u0119cej produkt\xf3w",
                    SITE_RATING: "ocena strony",
                    SOCIAL_ADV_SHORT: "Reklama spo\u0142eczna",
                    THANKS_AD_HIDDEN: "Dzi\u0119ki, og\u0142oszenie jest ukryte.",
                    THEME_EMPTY_ACTION_BUTTON_DEFAULT_SHORT_TITLE: "Read more",
                    THEME_EMPTY_ACTION_BUTTON_LABEL: "Go",
                    TIME_IN_MINUTES: "{val} min",
                    TWO_REVIEWS: "{val} ocen",
                    YANDEX_BROWSER: "Yandex.Przegl\u0105darka",
                    YANDEX_BUSINESS: "Ya.Biznes",
                    YANDEX_DIRECT: "Yandex.Direct",
                    YANDEX_MAPS: "Yandex.Mapy",
                    YANDEX_MARKET: "Yandex.Market"
                }
            }
        }, 57047: e => {
            e.exports = {
                pt: {
                    ARM_DEFAULT_TITLE: "Mais informa\xe7\xf5es no s\xedtio web do anunciante",
                    BASED_ON_FIVE_REVIEWS: "Baseado em {val} coment\xe1rios",
                    BASED_ON_ONE_REVIEW: "Baseado em {val} coment\xe1rios",
                    BASED_ON_TWO_REVIEWS: "Baseado em {val} coment\xe1rios",
                    CALL: "Chamar",
                    CANCELLATION: "Cancelar",
                    CLOSE: "Close",
                    COPY: "Copiar",
                    DETAILS: "Learn more",
                    DISCLAIMER_ALCOHOL: "O consumo excessivo \xe9 prejudicial para a sua sa\xfade",
                    DISCLAIMER_DIETARYSUPPL: "Este medicamento n\xe3o se destina a uso m\xe9dico.",
                    DISCLAIMER_MEDICINE: "Pode haver contra-indica\xe7\xf5es. Por favor, consulte o seu m\xe9dico",
                    FREE: "Gr\xe1tis",
                    GO_TO_REVIEWS: "V\xe1 para resenhas",
                    GO_TO_SITE: "Ir para o site",
                    HIDE_AD: "Ocultar&nbsp;an\xfancio",
                    INSTALL: "Instalar",
                    INSTALL_FROM_STORE: "Vamos a isto {store}",
                    LEARN_MORE: "Saiba mais",
                    LEARN_MORE_EXP_1: "Visitar o s\xedtio web",
                    LEARN_MORE_EXP_2: "Saiba mais",
                    LEARN_MORE_EXP_3: "Saiba mais",
                    LEARN_MORE_EXP_4: "Visitar o s\xedtio web",
                    MARKET_RATING: "classifica\xe7\xe3o da loja",
                    MORE: "Mais",
                    MORE_ON: "Mais sobre",
                    MORE_ON_THE_WEBSITE: "Leia mais no s\xedtio web",
                    ORGANIZATION_RATING: "classifica\xe7\xe3o da empresa",
                    PRICE_FROM: "desde",
                    PRICE_TO: "at\xe9",
                    REVIEW: "{val} avalia\xe7\xe3o",
                    REVIEWS: "{val} avalia\xe7\xf5es",
                    REVIEWS_PROVIDED_BY: "Resenhas fornecidas por",
                    REWARDED_BEFORE_REWARD_MESSAGE: "Receber\xe1 o seu pr\xe9mio em",
                    REWARDED_CLOSE_MESSAGE: "N\xe3o ser\xe1 premiado se omitir o an\xfancio",
                    REWARDED_CONTINUE: "Continuar a ver",
                    REWARDED_LOSE_REWARD: "Recusar o pr\xe9mio",
                    SHOW_MORE_GOODS: "Mostrar mais",
                    SITE_RATING: "classifica\xe7\xe3o do s\xedtio web",
                    SOCIAL_ADV_SHORT: "An\xfancio social",
                    THANKS_AD_HIDDEN: "Obrigado, este an\xfancio agora est\xe1 oculto.",
                    THEME_EMPTY_ACTION_BUTTON_DEFAULT_SHORT_TITLE: "Read more",
                    THEME_EMPTY_ACTION_BUTTON_LABEL: "Go",
                    TIME_IN_MINUTES: "{val} min",
                    TWO_REVIEWS: "{val} avalia\xe7\xf5es",
                    YANDEX_BROWSER: "Navegador Yandex",
                    YANDEX_BUSINESS: "Yandex.Business",
                    YANDEX_DIRECT: "Yandex.Direct",
                    YANDEX_MAPS: "Yandex.Maps",
                    YANDEX_MARKET: "Yandex.Market"
                }
            }
        }, 39734: e => {
            e.exports = {
                ru: {
                    ARM_DEFAULT_TITLE: "\u0411\u043e\u043b\u044c\u0448\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435 \u0440\u0435\u043a\u043b\u0430\u043c\u043e\u0434\u0430\u0442\u0435\u043b\u044f",
                    BASED_ON_FIVE_REVIEWS: "\u041d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 {val} \u043e\u0442\u0437\u044b\u0432\u043e\u0432",
                    BASED_ON_ONE_REVIEW: "\u041d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 {val} \u043e\u0442\u0437\u044b\u0432\u0430",
                    BASED_ON_TWO_REVIEWS: "\u041d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 {val} \u043e\u0442\u0437\u044b\u0432\u043e\u0432",
                    CALL: "\u041f\u043e\u0437\u0432\u043e\u043d\u0438\u0442\u044c",
                    CANCELLATION: "\u041e\u0442\u043c\u0435\u043d\u0430",
                    CLOSE: "\u0417\u0430\u043a\u0440\u044b\u0442\u044c",
                    COPY: "\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c",
                    DETAILS: "\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435",
                    DISCLAIMER_ALCOHOL: "\u0427\u0440\u0435\u0437\u043c\u0435\u0440\u043d\u043e\u0435 \u043f\u043e\u0442\u0440\u0435\u0431\u043b\u0435\u043d\u0438\u0435 \u0432\u0440\u0435\u0434\u043d\u043e.",
                    DISCLAIMER_DIETARYSUPPL: "\u041d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u043e\u043c",
                    DISCLAIMER_MEDICINE: "\u0415\u0441\u0442\u044c \u043f\u0440\u043e\u0442\u0438\u0432\u043e\u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0438\u044f. \u041f\u043e\u0441\u043e\u0432\u0435\u0442\u0443\u0439\u0442\u0435\u0441\u044c \u0441 \u0432\u0440\u0430\u0447\u043e\u043c",
                    FREE: "\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e",
                    GO_TO_REVIEWS: "\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u043e\u0442\u0437\u044b\u0432\u0430\u043c",
                    GO_TO_SITE: "\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0441\u0430\u0439\u0442",
                    HIDE_AD: "\u0421\u043a\u0440\u044b\u0442\u044c&nbsp;\u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435",
                    INSTALL: "\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c",
                    INSTALL_FROM_STORE: "\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0438\u0437 {store}",
                    LEARN_MORE: "\u0423\u0437\u043d\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435",
                    LEARN_MORE_EXP_1: "\u041f\u0435\u0440\u0435\u0439\u0442\u0438",
                    LEARN_MORE_EXP_2: "\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435",
                    LEARN_MORE_EXP_3: "\u0423\u0437\u043d\u0430\u0442\u044c",
                    LEARN_MORE_EXP_4: "\u041e\u0442\u043a\u0440\u044b\u0442\u044c",
                    MARKET_RATING: "\u0440\u0435\u0439\u0442\u0438\u043d\u0433 \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0430",
                    MORE: "\u041f\u0435\u0440\u0435\u0439\u0442\u0438",
                    MORE_ON: "\u0411\u043e\u043b\u044c\u0448\u0435 \u043d\u0430",
                    MORE_ON_THE_WEBSITE: "\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435",
                    ORGANIZATION_RATING: "\u0440\u0435\u0439\u0442\u0438\u043d\u0433 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438",
                    PRICE_FROM: "\u043e\u0442",
                    PRICE_TO: "\u0434\u043e",
                    REVIEW: "{val} \u043e\u0442\u0437\u044b\u0432",
                    REVIEWS: "{val} \u043e\u0442\u0437\u044b\u0432\u043e\u0432",
                    REVIEWS_PROVIDED_BY: "\u041e\u0442\u0437\u044b\u0432\u044b \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u044b \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u043c",
                    REWARDED_BEFORE_REWARD_MESSAGE: "\u041d\u0430\u0433\u0440\u0430\u0434\u0430 \u043d\u0430\u0447\u0438\u0441\u043b\u0438\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437",
                    REWARDED_CLOSE_MESSAGE: "\u0412\u044b \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u0432\u043e\u0437\u043d\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043d\u0438\u0435, \u0435\u0441\u043b\u0438 \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u0440\u0435\u043a\u043b\u0430\u043c\u0443",
                    REWARDED_CONTINUE: "\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440",
                    REWARDED_LOSE_REWARD: "\u041e\u0442\u043a\u0430\u0437\u0430\u0442\u044c\u0441\u044f \u043e\u0442 \u043d\u0430\u0433\u0440\u0430\u0434\u044b",
                    SHOW_MORE_GOODS: "\u0415\u0449\u0451 \u0442\u043e\u0432\u0430\u0440\u044b",
                    SITE_RATING: "\u0440\u0435\u0439\u0442\u0438\u043d\u0433 \u0441\u0430\u0439\u0442\u0430",
                    SOCIAL_ADV_SHORT: "\u0421\u043e\u0446\u0440\u0435\u043a\u043b\u0430\u043c\u0430",
                    THANKS_AD_HIDDEN: "\u0421\u043f\u0430\u0441\u0438\u0431\u043e, \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u043a\u0440\u044b\u0442\u043e.",
                    THEME_EMPTY_ACTION_BUTTON_DEFAULT_SHORT_TITLE: "\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435",
                    THEME_EMPTY_ACTION_BUTTON_LABEL: "\u041f\u0435\u0440\u0435\u0439\u0442\u0438",
                    TIME_IN_MINUTES: "{val} \u043c\u0438\u043d",
                    TWO_REVIEWS: "{val} \u043e\u0442\u0437\u044b\u0432\u0430",
                    YANDEX_BROWSER: "\u042f\u043d\u0434\u0435\u043a\u0441.\u0411\u0440\u0430\u0443\u0437\u0435\u0440",
                    YANDEX_BUSINESS: "\u042f.\u0411\u0438\u0437\u043d\u0435\u0441",
                    YANDEX_DIRECT: "\u042f\u043d\u0434\u0435\u043a\u0441.\u0414\u0438\u0440\u0435\u043a\u0442",
                    YANDEX_MAPS: "\u042f\u043d\u0434\u0435\u043a\u0441.\u041a\u0430\u0440\u0442\u044b",
                    YANDEX_MARKET: "\u042f\u043d\u0434\u0435\u043a\u0441.\u041c\u0430\u0440\u043a\u0435\u0442"
                }
            }
        }, 30526: e => {
            e.exports = {
                tr: {
                    ARM_DEFAULT_TITLE: "Reklam verenin sitesinden daha fazla bilgi",
                    BASED_ON_FIVE_REVIEWS: "{val} yoruma g\xf6re",
                    BASED_ON_ONE_REVIEW: "{val} yoruma g\xf6re",
                    BASED_ON_TWO_REVIEWS: "{val} yoruma g\xf6re",
                    CALL: "Ara",
                    CANCELLATION: "\u0130ptal",
                    CLOSE: "Kapat",
                    COPY: "Kopyala",
                    DETAILS: "Daha fazla bilgi",
                    DISCLAIMER_ALCOHOL: "A\u015f\u0131r\u0131 t\xfcketim zararl\u0131d\u0131r.",
                    DISCLAIMER_DIETARYSUPPL: "\u0130la\xe7 de\u011fildir",
                    DISCLAIMER_MEDICINE: "Kontrendikasyonlar\u0131 var. L\xfctfen, doktorunuza dan\u0131\u015f\u0131n.",
                    FREE: "\xdccretsiz",
                    GO_TO_REVIEWS: "Yorumlara git",
                    GO_TO_SITE: "Siteye git",
                    HIDE_AD: "Reklamlar\u0131&nbsp;gizle",
                    INSTALL: "Y\xfcklemek",
                    INSTALL_FROM_STORE: "{store} den alin",
                    LEARN_MORE: "Ayr\u0131nt\u0131l\u0131 bilgi",
                    LEARN_MORE_EXP_1: "Git",
                    LEARN_MORE_EXP_2: "Daha fazla bilgi",
                    LEARN_MORE_EXP_3: "Bilgi al",
                    LEARN_MORE_EXP_4: "A\xe7",
                    MARKET_RATING: "ma\u011faza puan\u0131",
                    MORE: "Git",
                    MORE_ON: "Ayr\u0131nt\u0131l\u0131 bilgi",
                    MORE_ON_THE_WEBSITE: "Daha fazla ayr\u0131nt\u0131 i\xe7in siteye g\xf6z at\u0131n",
                    ORGANIZATION_RATING: "kurum puan\u0131",
                    PRICE_FROM: "min.",
                    PRICE_TO: "maks.",
                    REVIEW: "{val} yorum",
                    REVIEWS: "{val} yorum",
                    REVIEWS_PROVIDED_BY: "Servis taraf\u0131ndan sa\u011flanan yorumlar",
                    REWARDED_BEFORE_REWARD_MESSAGE: "\xd6d\xfcl\xfcn kazan\u0131lmas\u0131na kalan s\xfcre:",
                    REWARDED_CLOSE_MESSAGE: "Reklam\u0131 atlarsan\u0131z \xf6d\xfcl\xfc kazanamazs\u0131n\u0131z",
                    REWARDED_CONTINUE: "G\xf6r\xfcnt\xfclenmeye devam et",
                    REWARDED_LOSE_REWARD: "\xd6d\xfclden vazge\xe7",
                    SHOW_MORE_GOODS: "Daha fazla \xfcr\xfcn",
                    SITE_RATING: "site puan\u0131",
                    SOCIAL_ADV_SHORT: "Kamu hizmet reklam\u0131",
                    THANKS_AD_HIDDEN: "Te\u015fekk\xfcrler, reklam kapat\u0131ld\u0131.",
                    THEME_EMPTY_ACTION_BUTTON_DEFAULT_SHORT_TITLE: "Daha fazla bilgi",
                    THEME_EMPTY_ACTION_BUTTON_LABEL: "Git",
                    TIME_IN_MINUTES: "{val} dk.",
                    TWO_REVIEWS: "{val} yorum",
                    YANDEX_BROWSER: "Yandex.Browser",
                    YANDEX_BUSINESS: "Yandex.Business",
                    YANDEX_DIRECT: "Yandex.Direct",
                    YANDEX_MAPS: "Yandex.Maps",
                    YANDEX_MARKET: "Yandex.Market"
                }
            }
        }, 6715: e => {
            e.exports = {
                uk: {
                    ARM_DEFAULT_TITLE: "\u0411\u043e\u043b\u044c\u0448\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435 \u0440\u0435\u043a\u043b\u0430\u043c\u043e\u0434\u0430\u0442\u0435\u043b\u044f",
                    BASED_ON_FIVE_REVIEWS: "\u041d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 {val} \u043e\u0442\u0437\u044b\u0432\u043e\u0432",
                    BASED_ON_ONE_REVIEW: "\u041d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 {val} \u043e\u0442\u0437\u044b\u0432\u0430",
                    BASED_ON_TWO_REVIEWS: "\u041d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 {val} \u043e\u0442\u0437\u044b\u0432\u043e\u0432",
                    CALL: "\u041f\u043e\u0437\u0432\u043e\u043d\u0438\u0442\u044c",
                    CANCELLATION: "\u041e\u0442\u043c\u0435\u043d\u0430",
                    CLOSE: "\u0417\u0430\u043a\u0440\u0438\u0442\u0438",
                    COPY: "\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c",
                    DETAILS: "\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435",
                    DISCLAIMER_ALCOHOL: "\u0427\u0440\u0435\u0437\u043c\u0435\u0440\u043d\u043e\u0435 \u043f\u043e\u0442\u0440\u0435\u0431\u043b\u0435\u043d\u0438\u0435 \u0432\u0440\u0435\u0434\u043d\u043e.",
                    DISCLAIMER_DIETARYSUPPL: "\u041d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043b\u0435\u043a\u0430\u0440\u0441\u0442\u0432\u043e\u043c",
                    DISCLAIMER_MEDICINE: "\u0415\u0441\u0442\u044c \u043f\u0440\u043e\u0442\u0438\u0432\u043e\u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0438\u044f. \u041f\u043e\u0441\u043e\u0432\u0435\u0442\u0443\u0439\u0442\u0435\u0441\u044c \u0441 \u0432\u0440\u0430\u0447\u043e\u043c",
                    FREE: "\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e",
                    GO_TO_REVIEWS: "\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u043e\u0442\u0437\u044b\u0432\u0430\u043c",
                    GO_TO_SITE: "\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0441\u0430\u0439\u0442",
                    HIDE_AD: "\u0421\u043a\u0440\u044b\u0442\u044c&nbsp;\u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435",
                    INSTALL: "\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c",
                    INSTALL_FROM_STORE: "\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0438\u0437 {store}",
                    LEARN_MORE: "\u0423\u0437\u043d\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435",
                    LEARN_MORE_EXP_1: "\u041f\u0435\u0440\u0435\u0439\u0442\u0438",
                    LEARN_MORE_EXP_2: "\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435",
                    LEARN_MORE_EXP_3: "\u0423\u0437\u043d\u0430\u0442\u044c",
                    LEARN_MORE_EXP_4: "\u041e\u0442\u043a\u0440\u044b\u0442\u044c",
                    MARKET_RATING: "\u0440\u0435\u0439\u0442\u0438\u043d\u0433 \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0430",
                    MORE: "\u041f\u0435\u0440\u0435\u0439\u0442\u0438",
                    MORE_ON: "\u0411\u043e\u043b\u044c\u0448\u0435 \u043d\u0430",
                    MORE_ON_THE_WEBSITE: "\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435",
                    ORGANIZATION_RATING: "\u0440\u0435\u0439\u0442\u0438\u043d\u0433 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438",
                    PRICE_FROM: "\u043e\u0442",
                    PRICE_TO: "\u0434\u043e",
                    REVIEW: "{val} \u0432\u0456\u0434\u0433\u0443\u043a",
                    REVIEWS: "{val} \u0432\u0456\u0434\u0433\u0443\u043a\u0456\u0432",
                    REVIEWS_PROVIDED_BY: "\u0412\u0456\u0434\u0433\u0443\u043a\u0438 \u043d\u0430\u0434\u0430\u043d\u043e \u0441\u0435\u0440\u0432\u0456\u0441\u043e\u043c",
                    REWARDED_BEFORE_REWARD_MESSAGE: "\u041d\u0430\u0433\u043e\u0440\u043e\u0434\u0430 \u043d\u0430\u0440\u0430\u0445\u0443\u0454\u0442\u044c\u0441\u044f \u0447\u0435\u0440\u0435\u0437",
                    REWARDED_CLOSE_MESSAGE: "\u0412\u0438 \u043d\u0435 \u043e\u0442\u0440\u0438\u043c\u0430\u0454\u0442\u0435 \u0432\u0438\u043d\u0430\u0433\u043e\u0440\u043e\u0434\u0443, \u044f\u043a\u0449\u043e \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u0440\u0435\u043a\u043b\u0430\u043c\u0443",
                    REWARDED_CONTINUE: "\u041f\u0440\u043e\u0434\u043e\u0432\u0436\u0438\u0442\u0438 \u043f\u0435\u0440\u0435\u0433\u043b\u044f\u0434",
                    REWARDED_LOSE_REWARD: "\u0412\u0456\u0434\u043c\u043e\u0432\u0438\u0442\u0438\u0441\u044f \u0432\u0456\u0434 \u043d\u0430\u0433\u043e\u0440\u043e\u0434\u0438",
                    SHOW_MORE_GOODS: "\u0415\u0449\u0451 \u0442\u043e\u0432\u0430\u0440\u044b",
                    SITE_RATING: "\u0440\u0435\u0439\u0442\u0438\u043d\u0433 \u0441\u0430\u0439\u0442\u0430",
                    SOCIAL_ADV_SHORT: "\u0421\u043e\u0446\u0440\u0435\u043a\u043b\u0430\u043c\u0430",
                    THANKS_AD_HIDDEN: "\u0421\u043f\u0430\u0441\u0438\u0431\u043e, \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u043a\u0440\u044b\u0442\u043e.",
                    THEME_EMPTY_ACTION_BUTTON_DEFAULT_SHORT_TITLE: "\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435",
                    THEME_EMPTY_ACTION_BUTTON_LABEL: "\u041f\u0435\u0440\u0435\u0439\u0442\u0438",
                    TIME_IN_MINUTES: "{val} \u043c\u0438\u043d",
                    TWO_REVIEWS: "{val} \u0432\u0456\u0434\u0433\u0443\u043a\u0438",
                    YANDEX_BROWSER: "\u042f\u043d\u0434\u0435\u043a\u0441.\u0411\u0440\u0430\u0443\u0437\u0435\u0440",
                    YANDEX_BUSINESS: "\u042f.\u0411\u0438\u0437\u043d\u0435\u0441",
                    YANDEX_DIRECT: "\u042f\u043d\u0434\u0435\u043a\u0441.\u0414\u0438\u0440\u0435\u043a\u0442",
                    YANDEX_MAPS: "\u042f\u043d\u0434\u0435\u043a\u0441.\u041a\u0430\u0440\u0442\u044b",
                    YANDEX_MARKET: "\u042f\u043d\u0434\u0435\u043a\u0441.\u041c\u0430\u0440\u043a\u0435\u0442"
                }
            }
        }, 97013: e => {
            e.exports = {
                ADDRESS_AND_PHONE: {
                    ar: "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0648\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641",
                    cs: "Adresa a telefon",
                    de: "Adresse und Telefonnummer",
                    en: "Address and phone",
                    es: "Direcci\xf3n y tel\xe9fono",
                    fr: "Adresse et t\xe9l\xe9phone",
                    he: "\u05db\u05ea\u05d5\u05d1\u05ea \u05d5\u05d8\u05dc\u05e4\u05d5\u05df",
                    it: "Indirizzo e telefono",
                    ja: "\u4f4f\u6240\u3068\u96fb\u8a71\u756a\u53f7",
                    pl: "Adres i telefon",
                    pt: "Endere\xe7o e telefone",
                    ru: "\u0410\u0434\u0440\u0435\u0441 \u0438 \u0442\u0435\u043b\u0435\u0444\u043e\u043d",
                    tr: "Adres ve telefon"
                },
                ADVERTISEMENT: {
                    ar: "\u0627\u0644\u0625\u0639\u0644\u0627\u0646",
                    cs: "Reklama",
                    de: "Werbung",
                    en: "Ad",
                    es: "Anuncio",
                    fr: "Annonce",
                    he: "\u05de\u05d5\u05d3\u05e2\u05d4",
                    it: "Annuncio",
                    ja: "\u5e83\u544a",
                    pl: "Reklama",
                    pt: "An\xfancio",
                    ru: "\u0420\u0435\u043a\u043b\u0430\u043c\u0430",
                    tr: "Reklam"
                },
                BU_LABEL_TOOLTIP_TEXT: {
                    en: "Based on Yandex technologies",
                    ru: "\u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043d\u0430 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u044f\u0445 \u042f\u043d\u0434\u0435\u043a\u0441\u0430",
                    tr: "Bir Yandex teknolojisidir"
                },
                ECOM_PRODUCTS_BUTTON_HIDE: {en: "HIde", ru: "\u0421\u043a\u0440\u044b\u0442\u044c", tr: "Gizle"},
                ECOM_PRODUCTS_BUTTON_SHOW: {
                    en: "Show",
                    ru: "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c",
                    tr: "G\xf6ster"
                },
                GET: {ru: "\u0421\u043a\u0430\u0447\u0430\u0442\u044c", tr: "\u0130ndir"},
                GO: {
                    ar: "\u0627\u0646\u062a\u0642\u0644",
                    cs: "J\xedt",
                    de: "\xd6ffnen",
                    en: "Go",
                    es: "Ir",
                    fr: "Aller",
                    he: "\u05e7\u05d3\u05d9\u05de\u05d4",
                    it: "Vai",
                    ja: "\u7d9a\u884c",
                    pl: "Przejd\u017a",
                    pt: "Ir",
                    ru: "\u041f\u0435\u0440\u0435\u0439\u0442\u0438",
                    tr: "Hemen Al"
                },
                MORE: {
                    ar: "\u0627\u0644\u0645\u0632\u064a\u062f",
                    cs: "Dal\u0161\xed",
                    de: "Details",
                    en: "More",
                    es: "M\xe1s",
                    fr: "Plus",
                    he: "\u05e2\u05d5\u05d3",
                    it: "Altro",
                    ja: "\u8a73\u7d30",
                    pl: "Wi\u0119cej",
                    pt: "Mais",
                    ru: "\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435",
                    tr: "Detayl\u0131"
                },
                SURVEY: {
                    ar: "\u0627\u0644\u0627\u0633\u062a\u0637\u0644\u0627\u0639",
                    be: "\u041e\u043f\u0440\u043e\u0441",
                    cs: "Pr\u016fzkum",
                    de: "Umfrage",
                    en: "Survey",
                    es: "Encuesta",
                    fr: "Enqu\xeate",
                    he: "\u05e1\u05e7\u05e8",
                    it: "Indagine",
                    ja: "\u30a2\u30f3\u30b1\u30fc\u30c8",
                    kk: "\u0428\u043e\u043b\u0443",
                    pl: "Ankieta",
                    pt: "Inqu\xe9rito",
                    ru: "\u041e\u043f\u0440\u043e\u0441",
                    tr: "Anket",
                    uk: "\u041e\u0431\u0437\u0456\u0440"
                }
            }
        }, 69748: e => {
            e.exports = {
                ar: {
                    ADDRESS_AND_PHONE: "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0648\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641",
                    ADVERTISEMENT: "\u0627\u0644\u0625\u0639\u0644\u0627\u0646",
                    BU_LABEL_TOOLTIP_TEXT: "Based on Yandex technologies",
                    ECOM_PRODUCTS_BUTTON_HIDE: "HIde",
                    ECOM_PRODUCTS_BUTTON_SHOW: "Show",
                    GO: "\u0627\u0646\u062a\u0642\u0644",
                    MORE: "\u0627\u0644\u0645\u0632\u064a\u062f",
                    SURVEY: "\u0627\u0644\u0627\u0633\u062a\u0637\u0644\u0627\u0639"
                }
            }
        }, 76349: e => {
            e.exports = {
                be: {
                    ADDRESS_AND_PHONE: "\u0410\u0434\u0440\u0435\u0441 \u0438 \u0442\u0435\u043b\u0435\u0444\u043e\u043d",
                    ADVERTISEMENT: "\u0420\u0435\u043a\u043b\u0430\u043c\u0430",
                    BU_LABEL_TOOLTIP_TEXT: "\u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043d\u0430 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u044f\u0445 \u042f\u043d\u0434\u0435\u043a\u0441\u0430",
                    ECOM_PRODUCTS_BUTTON_HIDE: "\u0421\u043a\u0440\u044b\u0442\u044c",
                    ECOM_PRODUCTS_BUTTON_SHOW: "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c",
                    GET: "\u0421\u043a\u0430\u0447\u0430\u0442\u044c",
                    GO: "\u041f\u0435\u0440\u0435\u0439\u0442\u0438",
                    MORE: "\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435",
                    SURVEY: "\u041e\u043f\u0440\u043e\u0441"
                }
            }
        }, 33856: e => {
            e.exports = {
                cs: {
                    ADDRESS_AND_PHONE: "Adresa a telefon",
                    ADVERTISEMENT: "Reklama",
                    BU_LABEL_TOOLTIP_TEXT: "Based on Yandex technologies",
                    ECOM_PRODUCTS_BUTTON_HIDE: "HIde",
                    ECOM_PRODUCTS_BUTTON_SHOW: "Show",
                    GO: "J\xedt",
                    MORE: "Dal\u0161\xed",
                    SURVEY: "Pr\u016fzkum"
                }
            }
        }, 94004: e => {
            e.exports = {
                de: {
                    ADDRESS_AND_PHONE: "Adresse und Telefonnummer",
                    ADVERTISEMENT: "Werbung",
                    BU_LABEL_TOOLTIP_TEXT: "Based on Yandex technologies",
                    ECOM_PRODUCTS_BUTTON_HIDE: "HIde",
                    ECOM_PRODUCTS_BUTTON_SHOW: "Show",
                    GO: "\xd6ffnen",
                    MORE: "Details",
                    SURVEY: "Umfrage"
                }
            }
        }, 3231: e => {
            e.exports = {
                en: {
                    ADDRESS_AND_PHONE: "Address and phone",
                    ADVERTISEMENT: "Ad",
                    BU_LABEL_TOOLTIP_TEXT: "Based on Yandex technologies",
                    ECOM_PRODUCTS_BUTTON_HIDE: "HIde",
                    ECOM_PRODUCTS_BUTTON_SHOW: "Show",
                    GET: "\u0421\u043a\u0430\u0447\u0430\u0442\u044c",
                    GO: "Go",
                    MORE: "More",
                    SURVEY: "Survey"
                }
            }
        }, 19825: e => {
            e.exports = {
                es: {
                    ADDRESS_AND_PHONE: "Direcci\xf3n y tel\xe9fono",
                    ADVERTISEMENT: "Anuncio",
                    BU_LABEL_TOOLTIP_TEXT: "Based on Yandex technologies",
                    ECOM_PRODUCTS_BUTTON_HIDE: "HIde",
                    ECOM_PRODUCTS_BUTTON_SHOW: "Show",
                    GO: "Ir",
                    MORE: "M\xe1s",
                    SURVEY: "Encuesta"
                }
            }
        }, 9389: e => {
            e.exports = {
                fr: {
                    ADDRESS_AND_PHONE: "Adresse et t\xe9l\xe9phone",
                    ADVERTISEMENT: "Annonce",
                    BU_LABEL_TOOLTIP_TEXT: "Based on Yandex technologies",
                    ECOM_PRODUCTS_BUTTON_HIDE: "HIde",
                    ECOM_PRODUCTS_BUTTON_SHOW: "Show",
                    GO: "Aller",
                    MORE: "Plus",
                    SURVEY: "Enqu\xeate"
                }
            }
        }, 39387: e => {
            e.exports = {
                he: {
                    ADDRESS_AND_PHONE: "\u05db\u05ea\u05d5\u05d1\u05ea \u05d5\u05d8\u05dc\u05e4\u05d5\u05df",
                    ADVERTISEMENT: "\u05de\u05d5\u05d3\u05e2\u05d4",
                    BU_LABEL_TOOLTIP_TEXT: "Based on Yandex technologies",
                    ECOM_PRODUCTS_BUTTON_HIDE: "HIde",
                    ECOM_PRODUCTS_BUTTON_SHOW: "Show",
                    GO: "\u05e7\u05d3\u05d9\u05de\u05d4",
                    MORE: "\u05e2\u05d5\u05d3",
                    SURVEY: "\u05e1\u05e7\u05e8"
                }
            }
        }, 17275: e => {
            e.exports = {
                it: {
                    ADDRESS_AND_PHONE: "Indirizzo e telefono",
                    ADVERTISEMENT: "Annuncio",
                    BU_LABEL_TOOLTIP_TEXT: "Based on Yandex technologies",
                    ECOM_PRODUCTS_BUTTON_HIDE: "HIde",
                    ECOM_PRODUCTS_BUTTON_SHOW: "Show",
                    GO: "Vai",
                    MORE: "Altro",
                    SURVEY: "Indagine"
                }
            }
        }, 31911: e => {
            e.exports = {
                ja: {
                    ADDRESS_AND_PHONE: "\u4f4f\u6240\u3068\u96fb\u8a71\u756a\u53f7",
                    ADVERTISEMENT: "\u5e83\u544a",
                    BU_LABEL_TOOLTIP_TEXT: "Based on Yandex technologies",
                    ECOM_PRODUCTS_BUTTON_HIDE: "HIde",
                    ECOM_PRODUCTS_BUTTON_SHOW: "Show",
                    GO: "\u7d9a\u884c",
                    MORE: "\u8a73\u7d30",
                    SURVEY: "\u30a2\u30f3\u30b1\u30fc\u30c8"
                }
            }
        }, 18166: e => {
            e.exports = {
                kk: {
                    ADDRESS_AND_PHONE: "\u0410\u0434\u0440\u0435\u0441 \u0438 \u0442\u0435\u043b\u0435\u0444\u043e\u043d",
                    ADVERTISEMENT: "\u0420\u0435\u043a\u043b\u0430\u043c\u0430",
                    BU_LABEL_TOOLTIP_TEXT: "\u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043d\u0430 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u044f\u0445 \u042f\u043d\u0434\u0435\u043a\u0441\u0430",
                    ECOM_PRODUCTS_BUTTON_HIDE: "\u0421\u043a\u0440\u044b\u0442\u044c",
                    ECOM_PRODUCTS_BUTTON_SHOW: "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c",
                    GET: "\u0421\u043a\u0430\u0447\u0430\u0442\u044c",
                    GO: "\u041f\u0435\u0440\u0435\u0439\u0442\u0438",
                    MORE: "\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435",
                    SURVEY: "\u0428\u043e\u043b\u0443"
                }
            }
        }, 29057: e => {
            e.exports = {
                pl: {
                    ADDRESS_AND_PHONE: "Adres i telefon",
                    ADVERTISEMENT: "Reklama",
                    BU_LABEL_TOOLTIP_TEXT: "Based on Yandex technologies",
                    ECOM_PRODUCTS_BUTTON_HIDE: "HIde",
                    ECOM_PRODUCTS_BUTTON_SHOW: "Show",
                    GO: "Przejd\u017a",
                    MORE: "Wi\u0119cej",
                    SURVEY: "Ankieta"
                }
            }
        }, 40161: e => {
            e.exports = {
                pt: {
                    ADDRESS_AND_PHONE: "Endere\xe7o e telefone",
                    ADVERTISEMENT: "An\xfancio",
                    BU_LABEL_TOOLTIP_TEXT: "Based on Yandex technologies",
                    ECOM_PRODUCTS_BUTTON_HIDE: "HIde",
                    ECOM_PRODUCTS_BUTTON_SHOW: "Show",
                    GO: "Ir",
                    MORE: "Mais",
                    SURVEY: "Inqu\xe9rito"
                }
            }
        }, 1455: e => {
            e.exports = {
                ru: {
                    ADDRESS_AND_PHONE: "\u0410\u0434\u0440\u0435\u0441 \u0438 \u0442\u0435\u043b\u0435\u0444\u043e\u043d",
                    ADVERTISEMENT: "\u0420\u0435\u043a\u043b\u0430\u043c\u0430",
                    BU_LABEL_TOOLTIP_TEXT: "\u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043d\u0430 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u044f\u0445 \u042f\u043d\u0434\u0435\u043a\u0441\u0430",
                    ECOM_PRODUCTS_BUTTON_HIDE: "\u0421\u043a\u0440\u044b\u0442\u044c",
                    ECOM_PRODUCTS_BUTTON_SHOW: "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c",
                    GET: "\u0421\u043a\u0430\u0447\u0430\u0442\u044c",
                    GO: "\u041f\u0435\u0440\u0435\u0439\u0442\u0438",
                    MORE: "\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435",
                    SURVEY: "\u041e\u043f\u0440\u043e\u0441"
                }
            }
        }, 97300: e => {
            e.exports = {
                tr: {
                    ADDRESS_AND_PHONE: "Adres ve telefon",
                    ADVERTISEMENT: "Reklam",
                    BU_LABEL_TOOLTIP_TEXT: "Bir Yandex teknolojisidir",
                    ECOM_PRODUCTS_BUTTON_HIDE: "Gizle",
                    ECOM_PRODUCTS_BUTTON_SHOW: "G\xf6ster",
                    GET: "\u0130ndir",
                    GO: "Hemen Al",
                    MORE: "Detayl\u0131",
                    SURVEY: "Anket"
                }
            }
        }, 74238: e => {
            e.exports = {
                uk: {
                    ADDRESS_AND_PHONE: "\u0410\u0434\u0440\u0435\u0441 \u0438 \u0442\u0435\u043b\u0435\u0444\u043e\u043d",
                    ADVERTISEMENT: "\u0420\u0435\u043a\u043b\u0430\u043c\u0430",
                    BU_LABEL_TOOLTIP_TEXT: "\u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043d\u0430 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u044f\u0445 \u042f\u043d\u0434\u0435\u043a\u0441\u0430",
                    ECOM_PRODUCTS_BUTTON_HIDE: "\u0421\u043a\u0440\u044b\u0442\u044c",
                    ECOM_PRODUCTS_BUTTON_SHOW: "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c",
                    GET: "\u0421\u043a\u0430\u0447\u0430\u0442\u044c",
                    GO: "\u041f\u0435\u0440\u0435\u0439\u0442\u0438",
                    MORE: "\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435",
                    SURVEY: "\u041e\u0431\u0437\u0456\u0440"
                }
            }
        }, 6400: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                Component: () => m,
                Fragment: () => g,
                _unmount: () => P,
                cloneElement: () => k,
                createContext: () => F,
                createElement: () => v,
                createRef: () => E,
                h: () => v,
                hydrate: () => B,
                isValidElement: () => o,
                options: () => r,
                render: () => x,
                toChildArray: () => y
            });
            var r, o, i, a, s, u, c, d = {}, l = [], f = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

            function p(e, t) {
                for (var n in t) e[n] = t[n];
                return e
            }

            function _(e) {
                var t = e.parentNode;
                t && t.removeChild(e)
            }

            function v(e, t, n) {
                var r, o = arguments, i = {};
                for (r in t) "key" !== r && "ref" !== r && (i[r] = t[r]);
                if (arguments.length > 3) for (n = [n], r = 3; r < arguments.length; r++) n.push(o[r]);
                if (null != n && (i.children = n), "function" == typeof e && null != e.defaultProps) for (r in e.defaultProps) void 0 === i[r] && (i[r] = e.defaultProps[r]);
                return h(e, i, t && t.key, t && t.ref)
            }

            function h(e, t, n, o) {
                var i = {
                    type: e,
                    props: t,
                    key: n,
                    ref: o,
                    __k: null,
                    __: null,
                    __b: 0,
                    __e: null,
                    __d: void 0,
                    __c: null,
                    constructor: void 0
                };
                return r.vnode && r.vnode(i), i
            }

            function E() {
                return {}
            }

            function g(e) {
                return e.children
            }

            function m(e, t) {
                this.props = e, this.context = t
            }

            function O(e, t) {
                if (null == t) return e.__ ? O(e.__, e.__.__k.indexOf(e) + 1) : null;
                for (var n; t < e.__k.length; t++) if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
                return "function" == typeof e.type ? O(e) : null
            }

            function A(e) {
                var t, n;
                if (null != (e = e.__) && null != e.__c) {
                    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) if (null != (n = e.__k[t]) && null != n.__e) {
                        e.__e = e.__c.base = n.__e;
                        break
                    }
                    return A(e)
                }
            }

            function b(e) {
                (!e.__d && (e.__d = !0) && 1 === i.push(e) || s !== r.debounceRendering) && ((s = r.debounceRendering) || a)(S)
            }

            function S() {
                var e, t, n, r, o, a, s;
                for (i.sort((function (e, t) {
                    return t.__v.__b - e.__v.__b
                })); e = i.pop();) e.__d && (n = void 0, r = void 0, a = (o = (t = e).__v).__e, (s = t.__P) && (n = [], r = D(s, o, p({}, o), t.__n, void 0 !== s.ownerSVGElement, null, n, null == a ? O(o) : a), N(n, o), r != a && A(o)))
            }

            function R(e, t, n, r, o, i, a, s, u) {
                var c, f, p, v, h, E, g, m = n && n.__k || l, A = m.length;
                if (s == d && (s = null != i ? i[0] : A ? O(n, 0) : null), c = 0, t.__k = y(t.__k, (function (n) {
                    if (null != n) {
                        if (n.__ = t, n.__b = t.__b + 1, null === (p = m[c]) || p && n.key == p.key && n.type === p.type) m[c] = void 0; else for (f = 0; f < A; f++) {
                            if ((p = m[f]) && n.key == p.key && n.type === p.type) {
                                m[f] = void 0;
                                break
                            }
                            p = null
                        }
                        if (v = D(e, n, p = p || d, r, o, i, a, s, u), (f = n.ref) && p.ref != f && (g || (g = []), p.ref && g.push(p.ref, null, n), g.push(f, n.__c || v, n)), null != v) {
                            var l;
                            if (null == E && (E = v), void 0 !== n.__d) l = n.__d, n.__d = void 0; else if (i == p || v != s || null == v.parentNode) {
                                e:if (null == s || s.parentNode !== e) e.appendChild(v), l = null; else {
                                    for (h = s, f = 0; (h = h.nextSibling) && f < A; f += 2) if (h == v) break e;
                                    e.insertBefore(v, s), l = s
                                }
                                "option" == t.type && (e.value = "")
                            }
                            s = void 0 !== l ? l : v.nextSibling, "function" == typeof t.type && (t.__d = s)
                        } else s && p.__e == s && s.parentNode != e && (s = O(p))
                    }
                    return c++, n
                })), t.__e = E, null != i && "function" != typeof t.type) for (c = i.length; c--;) null != i[c] && _(i[c]);
                for (c = A; c--;) null != m[c] && P(m[c], m[c]);
                if (g) for (c = 0; c < g.length; c++) M(g[c], g[++c], g[++c])
            }

            function y(e, t, n) {
                if (null == n && (n = []), null == e || "boolean" == typeof e) t && n.push(t(null)); else if (Array.isArray(e)) for (var r = 0; r < e.length; r++) y(e[r], t, n); else n.push(t ? t("string" == typeof e || "number" == typeof e ? h(null, e, null, null) : null != e.__e || null != e.__c ? h(e.type, e.props, e.key, null) : e) : e);
                return n
            }

            function I(e, t, n) {
                "-" === t[0] ? e.setProperty(t, n) : e[t] = "number" == typeof n && !1 === f.test(t) ? n + "px" : null == n ? "" : n
            }

            function T(e, t, n, r, o) {
                var i, a, s, u, c;
                if (o ? "className" === t && (t = "class") : "class" === t && (t = "className"), "key" === t || "children" === t) ; else if ("style" === t) if (i = e.style, "string" == typeof n) i.cssText = n; else {
                    if ("string" == typeof r && (i.cssText = "", r = null), r) for (a in r) n && a in n || I(i, a, "");
                    if (n) for (s in n) r && n[s] === r[s] || I(i, s, n[s])
                } else "o" === t[0] && "n" === t[1] ? (u = t !== (t = t.replace(/Capture$/, "")), c = t.toLowerCase(), t = (c in e ? c : t).slice(2), n ? (r || e.addEventListener(t, w, u), (e.l || (e.l = {}))[t] = n) : e.removeEventListener(t, w, u)) : "list" !== t && "tagName" !== t && "form" !== t && "type" !== t && "size" !== t && !o && t in e ? e[t] = null == n ? "" : n : "function" != typeof n && "dangerouslySetInnerHTML" !== t && (t !== (t = t.replace(/^xlink:?/, "")) ? null == n || !1 === n ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), n) : null == n || !1 === n && !/^ar/.test(t) ? e.removeAttribute(t) : e.setAttribute(t, n))
            }

            function w(e) {
                this.l[e.type](r.event ? r.event(e) : e)
            }

            function D(e, t, n, o, i, a, s, u, c) {
                var d, l, f, _, v, h, E, O, A, b, S = t.type;
                if (void 0 !== t.constructor) return null;
                (d = r.__b) && d(t);
                try {
                    e:if ("function" == typeof S) {
                        if (O = t.props, A = (d = S.contextType) && o[d.__c], b = d ? A ? A.props.value : d.__ : o, n.__c ? E = (l = t.__c = n.__c).__ = l.__E : ("prototype" in S && S.prototype.render ? t.__c = l = new S(O, b) : (t.__c = l = new m(O, b), l.constructor = S, l.render = L), A && A.sub(l), l.props = O, l.state || (l.state = {}), l.context = b, l.__n = o, f = l.__d = !0, l.__h = []), null == l.__s && (l.__s = l.state), null != S.getDerivedStateFromProps && (l.__s == l.state && (l.__s = p({}, l.__s)), p(l.__s, S.getDerivedStateFromProps(O, l.__s))), _ = l.props, v = l.state, f) null == S.getDerivedStateFromProps && null != l.componentWillMount && l.componentWillMount(), null != l.componentDidMount && l.__h.push(l.componentDidMount); else {
                            if (null == S.getDerivedStateFromProps && O !== _ && null != l.componentWillReceiveProps && l.componentWillReceiveProps(O, b), !l.__e && null != l.shouldComponentUpdate && !1 === l.shouldComponentUpdate(O, l.__s, b)) {
                                for (l.props = O, l.state = l.__s, l.__d = !1, l.__v = t, t.__e = n.__e, t.__k = n.__k, l.__h.length && s.push(l), d = 0; d < t.__k.length; d++) t.__k[d] && (t.__k[d].__ = t);
                                break e
                            }
                            null != l.componentWillUpdate && l.componentWillUpdate(O, l.__s, b), null != l.componentDidUpdate && l.__h.push((function () {
                                l.componentDidUpdate(_, v, h)
                            }))
                        }
                        l.context = b, l.props = O, l.state = l.__s, (d = r.__r) && d(t), l.__d = !1, l.__v = t, l.__P = e, d = l.render(l.props, l.state, l.context), t.__k = null != d && d.type == g && null == d.key ? d.props.children : Array.isArray(d) ? d : [d], null != l.getChildContext && (o = p(p({}, o), l.getChildContext())), f || null == l.getSnapshotBeforeUpdate || (h = l.getSnapshotBeforeUpdate(_, v)), R(e, t, n, o, i, a, s, u, c), l.base = t.__e, l.__h.length && s.push(l), E && (l.__E = l.__ = null), l.__e = !1
                    } else t.__e = C(n.__e, t, n, o, i, a, s, c);
                    (d = r.diffed) && d(t)
                } catch (e) {
                    r.__e(e, t, n)
                }
                return t.__e
            }

            function N(e, t) {
                r.__c && r.__c(t, e), e.some((function (t) {
                    try {
                        e = t.__h, t.__h = [], e.some((function (e) {
                            e.call(t)
                        }))
                    } catch (e) {
                        r.__e(e, t.__v)
                    }
                }))
            }

            function C(e, t, n, r, o, i, a, s) {
                var u, c, f, p, _, v = n.props, h = t.props;
                if (o = "svg" === t.type || o, null != i) for (u = 0; u < i.length; u++) if (null != (c = i[u]) && ((null === t.type ? 3 === c.nodeType : c.localName === t.type) || e == c)) {
                    e = c, i[u] = null;
                    break
                }
                if (null == e) {
                    if (null === t.type) return document.createTextNode(h);
                    e = o ? document.createElementNS("http://www.w3.org/2000/svg", t.type) : document.createElement(t.type, h.is && {is: h.is}), i = null
                }
                if (null === t.type) v !== h && e.data != h && (e.data = h); else if (t !== n) {
                    if (null != i && (i = l.slice.call(e.childNodes)), f = (v = n.props || d).dangerouslySetInnerHTML, p = h.dangerouslySetInnerHTML, !s) {
                        if (v === d) for (v = {}, _ = 0; _ < e.attributes.length; _++) v[e.attributes[_].name] = e.attributes[_].value;
                        (p || f) && (p && f && p.__html == f.__html || (e.innerHTML = p && p.__html || ""))
                    }
                    (function (e, t, n, r, o) {
                        var i;
                        for (i in n) i in t || T(e, i, null, n[i], r);
                        for (i in t) o && "function" != typeof t[i] || "value" === i || "checked" === i || n[i] === t[i] || T(e, i, t[i], n[i], r)
                    })(e, h, v, o, s), t.__k = t.props.children, p || R(e, t, n, r, "foreignObject" !== t.type && o, i, a, d, s), s || ("value" in h && void 0 !== h.value && h.value !== e.value && (e.value = null == h.value ? "" : h.value), "checked" in h && void 0 !== h.checked && h.checked !== e.checked && (e.checked = h.checked))
                }
                return e
            }

            function M(e, t, n) {
                try {
                    "function" == typeof e ? e(t) : e.current = t
                } catch (e) {
                    r.__e(e, n)
                }
            }

            function P(e, t, n) {
                var o, i, a;
                if (r.unmount && r.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || M(o, null, t)), n || "function" == typeof e.type || (n = null != (i = e.__e)), e.__e = e.__d = void 0, null != (o = e.__c)) {
                    if (o.componentWillUnmount) try {
                        o.componentWillUnmount()
                    } catch (e) {
                        r.__e(e, t)
                    }
                    o.base = o.__P = null
                }
                if (o = e.__k) for (a = 0; a < o.length; a++) o[a] && P(o[a], t, n);
                null != i && _(i)
            }

            function L(e, t, n) {
                return this.constructor(e, n)
            }

            function x(e, t, n) {
                var o, i, a;
                r.__ && r.__(e, t), i = (o = n === u) ? null : n && n.__k || t.__k, e = v(g, null, [e]), a = [], D(t, (o ? t : n || t).__k = e, i || d, d, void 0 !== t.ownerSVGElement, n && !o ? [n] : i ? null : l.slice.call(t.childNodes), a, n || d, o), N(a, e)
            }

            function B(e, t) {
                x(e, t, u)
            }

            function k(e, t) {
                return t = p(p({}, e.props), t), arguments.length > 2 && (t.children = l.slice.call(arguments, 2)), h(e.type, t, t.key || e.key, t.ref || e.ref)
            }

            function F(e) {
                var t = {}, n = {
                    __c: "__cC" + c++, __: e, Consumer: function (e, t) {
                        return e.children(t)
                    }, Provider: function (e) {
                        var r, o = this;
                        return this.getChildContext || (r = [], this.getChildContext = function () {
                            return t[n.__c] = o, t
                        }, this.shouldComponentUpdate = function (t) {
                            e.value !== t.value && r.some((function (e) {
                                e.context = t.value, b(e)
                            }))
                        }, this.sub = function (e) {
                            r.push(e);
                            var t = e.componentWillUnmount;
                            e.componentWillUnmount = function () {
                                r.splice(r.indexOf(e), 1), t && t.call(e)
                            }
                        }), e.children
                    }
                };
                return n.Consumer.contextType = n, n
            }

            r = {
                __e: function (e, t) {
                    for (var n, r; t = t.__;) if ((n = t.__c) && !n.__) try {
                        if (n.constructor && null != n.constructor.getDerivedStateFromError && (r = !0, n.setState(n.constructor.getDerivedStateFromError(e))), null != n.componentDidCatch && (r = !0, n.componentDidCatch(e)), r) return b(n.__E = n)
                    } catch (t) {
                        e = t
                    }
                    throw e
                }
            }, o = function (e) {
                return null != e && void 0 === e.constructor
            }, m.prototype.setState = function (e, t) {
                var n;
                n = this.__s !== this.state ? this.__s : this.__s = p({}, this.state), "function" == typeof e && (e = e(n, this.props)), e && p(n, e), null != e && this.__v && (t && this.__h.push(t), b(this))
            }, m.prototype.forceUpdate = function (e) {
                this.__v && (this.__e = !0, e && this.__h.push(e), b(this))
            }, m.prototype.render = g, i = [], a = "function" == typeof Promise ? Promise.prototype.then.__pbind(Promise.resolve()) : setTimeout, u = d, c = 0
        }, 30396: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                useCallback: () => O,
                useContext: () => A,
                useDebugValue: () => b,
                useEffect: () => v,
                useErrorBoundary: () => S,
                useImperativeHandle: () => g,
                useLayoutEffect: () => h,
                useMemo: () => m,
                useReducer: () => _,
                useRef: () => E,
                useState: () => p
            });
            var r, o, i, a = n(6400), s = [], u = a.options.__r, c = a.options.diffed, d = a.options.__c,
                l = a.options.unmount;

            function f(e) {
                a.options.__h && a.options.__h(o);
                var t = o.__H || (o.__H = {__: [], __h: []});
                return e >= t.__.length && t.__.push({}), t.__[e]
            }

            function p(e) {
                return _(w, e)
            }

            function _(e, t, n) {
                var i = f(r++);
                return i.__c || (i.__c = o, i.__ = [n ? n(t) : w(void 0, t), function (t) {
                    var n = e(i.__[0], t);
                    i.__[0] !== n && (i.__[0] = n, i.__c.setState({}))
                }]), i.__
            }

            function v(e, t) {
                var n = f(r++);
                T(n.__H, t) && (n.__ = e, n.__H = t, o.__H.__h.push(n))
            }

            function h(e, t) {
                var n = f(r++);
                T(n.__H, t) && (n.__ = e, n.__H = t, o.__h.push(n))
            }

            function E(e) {
                return m((function () {
                    return {current: e}
                }), [])
            }

            function g(e, t, n) {
                h((function () {
                    "function" == typeof e ? e(t()) : e && (e.current = t())
                }), null == n ? n : n.concat(e))
            }

            function m(e, t) {
                var n = f(r++);
                return T(n.__H, t) ? (n.__H = t, n.__h = e, n.__ = e()) : n.__
            }

            function O(e, t) {
                return m((function () {
                    return e
                }), t)
            }

            function A(e) {
                var t = o.context[e.__c];
                if (!t) return e.__;
                var n = f(r++);
                return null == n.__ && (n.__ = !0, t.sub(o)), t.props.value
            }

            function b(e, t) {
                a.options.useDebugValue && a.options.useDebugValue(t ? t(e) : e)
            }

            function S(e) {
                var t = f(r++), n = p();
                return t.__ = e, o.componentDidCatch || (o.componentDidCatch = function (e) {
                    t.__ && t.__(e), n[1](e)
                }), [n[0], function () {
                    n[1](void 0)
                }]
            }

            function R() {
                s.some((function (e) {
                    if (e.__P) try {
                        e.__H.__h.forEach(y), e.__H.__h.forEach(I), e.__H.__h = []
                    } catch (t) {
                        return a.options.__e(t, e.__v), !0
                    }
                })), s = []
            }

            function y(e) {
                e.t && e.t()
            }

            function I(e) {
                var t = e.__();
                "function" == typeof t && (e.t = t)
            }

            function T(e, t) {
                return !e || t.some((function (t, n) {
                    return t !== e[n]
                }))
            }

            function w(e, t) {
                return "function" == typeof t ? t(e) : t
            }

            a.options.__r = function (e) {
                u && u(e), r = 0, (o = e.__c).__H && (o.__H.__h.forEach(y), o.__H.__h.forEach(I), o.__H.__h = [])
            }, a.options.diffed = function (e) {
                c && c(e);
                var t = e.__c;
                if (t) {
                    var n = t.__H;
                    n && n.__h.length && (1 !== s.push(t) && i === a.options.requestAnimationFrame || ((i = a.options.requestAnimationFrame) || function (e) {
                        var t, n = function () {
                            clearTimeout(r), cancelAnimationFrame(t), setTimeout(e)
                        }, r = setTimeout(n, 100);
                        "undefined" != typeof window && (t = requestAnimationFrame(n))
                    })(R))
                }
            }, a.options.__c = function (e, t) {
                t.some((function (e) {
                    try {
                        e.__h.forEach(y), e.__h = e.__h.filter((function (e) {
                            return !e.__ || I(e)
                        }))
                    } catch (n) {
                        t.some((function (e) {
                            e.__h && (e.__h = [])
                        })), t = [], a.options.__e(n, e.__v)
                    }
                })), d && d(e, t)
            }, a.options.unmount = function (e) {
                l && l(e);
                var t = e.__c;
                if (t) {
                    var n = t.__H;
                    if (n) try {
                        n.__.forEach((function (e) {
                            return e.t && e.t()
                        }))
                    } catch (e) {
                        a.options.__e(e, t.__v)
                    }
                }
            }
        }, 66644: e => {
            e.exports = Object.setPrototypeOf || ({__proto__: []} instanceof Array ? function (e, t) {
                return e.__proto__ = t, e
            } : function (e, t) {
                for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
                return e
            })
        }, 24617: (e, t, n) => {
            e.exports = function (e, t) {
                n.e(8588).then(function () {
                    e(n(40611))
                }.__pbind(null, n))["catch"]((function () {
                    t && t.apply(this, arguments)
                }))
            }
        }, 71674: (e, t, n) => {
            e.exports = function (e, t) {
                n.e(5051).then(function () {
                    e(n(2775))
                }.__pbind(null, n))["catch"]((function () {
                    t && t.apply(this, arguments)
                }))
            }
        }, 5945: (e, t, n) => {
            e.exports = function (e, t) {
                n.e(9769).then(function () {
                    e(n(36696))
                }.__pbind(null, n))["catch"]((function () {
                    t && t.apply(this, arguments)
                }))
            }
        }, 60551: (e, t, n) => {
            e.exports = function (e, t) {
                Promise.all([n.e(551), n.e(841)]).then(function () {
                    e(n(58040))
                }.__pbind(null, n))["catch"]((function () {
                    t && t.apply(this, arguments)
                }))
            }
        }, 6382: (e, t, n) => {
            e.exports = function (e, t) {
                Promise.all([n.e(551), n.e(841)]).then(function () {
                    e(n(28871))
                }.__pbind(null, n))["catch"]((function () {
                    t && t.apply(this, arguments)
                }))
            }
        }, 63520: (e, t, n) => {
            e.exports = function (e, t) {
                n.e(4864).then(function () {
                    e(n(23439))
                }.__pbind(null, n))["catch"]((function () {
                    t && t.apply(this, arguments)
                }))
            }
        }, 4465: (e, t, n) => {
            var r, o, i = !1;

            function a() {
                r = [], n.e(8238).then(function () {
                    if (o = n(71191), r && r.length) for (var e = 0, t = r.length; e < t; e++) r[e] && r[e].success(o);
                    i = !1, r = null
                }.__pbind(null, n))["catch"]((function () {
                    if (r && r.length) for (var e = 0, t = r.length; e < t; e++) r[e] && r[e].error.apply(this, arguments);
                    i = !0, r = null
                }))
            }

            e.exports = function (e, t) {
                t = t || function () {
                }, o ? e(o) : (i && a(), r.push({success: e, error: t}))
            }, a()
        }, 86545: (e, t, n) => {
            var r, o, i = !1;

            function a() {
                r = [], n.e(7635).then(function () {
                    if (o = n(16321), r && r.length) for (var e = 0, t = r.length; e < t; e++) r[e] && r[e].success(o);
                    i = !1, r = null
                }.__pbind(null, n))["catch"]((function () {
                    if (r && r.length) for (var e = 0, t = r.length; e < t; e++) r[e] && r[e].error.apply(this, arguments);
                    i = !0, r = null
                }))
            }

            e.exports = function (e, t) {
                t = t || function () {
                }, o ? e(o) : (i && a(), r.push({success: e, error: t}))
            }, a()
        }, 24673: (e, t, n) => {
            var r, o, i = !1;

            function a() {
                r = [], n.e(3634).then(function () {
                    if (o = n(69246), r && r.length) for (var e = 0, t = r.length; e < t; e++) r[e] && r[e].success(o);
                    i = !1, r = null
                }.__pbind(null, n))["catch"]((function () {
                    if (r && r.length) for (var e = 0, t = r.length; e < t; e++) r[e] && r[e].error.apply(this, arguments);
                    i = !0, r = null
                }))
            }

            e.exports = function (e, t) {
                t = t || function () {
                }, o ? e(o) : (i && a(), r.push({success: e, error: t}))
            }, a()
        }, 35930: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.isIntersectionObserverSupported = void 0;
            var r = n(61438);
            t.isIntersectionObserverSupported = "function" == typeof IntersectionObserver && (0, r.checkNativeCode)(IntersectionObserver)
        }, 43945: function (e, t, n) {
            "use strict";
            var r = this && this.__assign || function () {
                return r = Object.assign || function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, r.apply(this, arguments)
            };
            Object.defineProperty(t, "__esModule", {value: !0}), t.isInViewport = t.ViewportObserver = void 0;
            var o = n(22886), i = n(50880), a = n(35930), s = n(94532), u = n(52544), c = n(12251), d = n(7654),
                l = i.isMobile ? 2 : .7, f = "".concat(100 * l, "% 0px"), p = [0, .25, .5, .75, 1], _ = function () {
                    function e(e) {
                        var t = this;
                        this.options = e, this.onVisibilityChange = (0, c.protect)("viewportObserver::onVisibilityChange", (function (e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n], o = r.intersectionRatio > 0;
                                t.runTask(r.target, o)
                            }
                        }))
                    }

                    return e.prototype.observe = function (e, t) {
                        var n = this, i = (0, c.protect)("viewportObserver::protectedTask", t);
                        if (!a.isIntersectionObserverSupported) {
                            var u = new d.Deferred;
                            return u.promise.then((function () {
                                return i(!0)
                            })), u.resolve(), (0, s.once)((function () {
                                u.reject()
                            }))
                        }
                        if (!this.intersectionObserver) {
                            var l = r({rootMargin: f, threshold: p}, this.options);
                            this.tasks = new Map, this.intersectionObserver = new IntersectionObserver(this.onVisibilityChange, l)
                        }
                        this.tasks.has(e) || (this.intersectionObserver.observe(e), this.tasks.set(e, []));
                        var _ = this.tasks.get(e);
                        return _.push(i), (0, s.once)((function () {
                            var t = (0, o.indexOf)(_, i);
                            _.splice(t, 1), 0 === _.length && (n.tasks.delete(e), n.intersectionObserver.unobserve(e))
                        }))
                    }, e.prototype.runTask = function (e, t) {
                        var n = this.tasks.get(e);
                        if (n) for (var r = n.concat([]), o = 0; o < r.length; o++) {
                            (0, r[o])(t)
                        }
                    }, e
                }();
            t.ViewportObserver = _, t.isInViewport = function (e, t) {
                if (void 0 === t && (t = .5), !a.isIntersectionObserverSupported) return !0;
                var n = e.getBoundingClientRect();
                if (0 === n.width && 0 === n.height) return !1;
                var r = (0, u.getWindowSize)(), o = r.height * t, i = -o, s = r.height + o;
                return n.top > i && n.top < s || n.bottom > i && n.bottom < s
            }
        }, 89663: (e, t, n) => {
            e.exports = n(24617)
        }
    }, r = {};

    function o(e) {
        var t = r[e];
        if (void 0 !== t) return t.exports;
        var i = r[e] = {id: e, exports: {}};
        return n[e].call(i.exports, i, i.exports, o), i.exports
    }

    o.m = n, o.n = e => {
        var t = e && e.__esModule ? () => e["default"] : () => e;
        return o.d(t, {a: t}), t
    }, o.d = (e, t) => {
        for (var n in t) o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, {enumerable: !0, get: t[n]})
    }, o.f = {}, o.e = e => Promise.all(Object.keys(o.f).__preduce(((t, n) => (o.f[n](e, t), t)), [])), o.u = e => ({
        268: "65ae1411eb10ef9120ce",
        309: "7e1b6b0e2bd09fd91248",
        419: "53417b43751ff984b256",
        551: "5c28993f970fd8eae4b7",
        557: "64057dd96e278c61285c",
        631: "a077ddb35a728d84d1ad",
        720: "848feb6dbfc2354c727c",
        830: "f95fb5afaa524ef4d9cf",
        841: "723f8a2489a1a2539365",
        1264: "b034067b19d73f4561fc",
        1407: "faebc99af2eba3d8806b",
        1417: "6c3a4d5b14467e0e6e35",
        1493: "8f66076c8b2037b8075e",
        1584: "c21f873703d2504ef3bf",
        1606: "79f853b2c1f1382819e5",
        1676: "f39dc742dc27d2ca70fe",
        1802: "5c67d562472d490fe497",
        1962: "68a21c157076994eb473",
        2020: "8b20293f23cd81a1c96c",
        2214: "faf63a0fb1293ed97626",
        2346: "77c304d63a5cf7b44792",
        2370: "92a5ba0f33045262b8e7",
        2480: "cb8061d4a30ac23586f1",
        2637: "7417e73c3e2844edf7df",
        2846: "c8dc6bb1b7dcb3790dfb",
        2848: "4e246dd9bdb2e207614b",
        2933: "07799ab33a5cd224d000",
        2987: "e3b4410ad1e698833a0b",
        2998: "da26a9e8d6d570f1dfb3",
        3009: "f26b68a32ce2be5cadf0",
        3325: "abf9624362b3de1f5164",
        3352: "5edb8a494bdc9608cf65",
        3378: "def41746747e603a2b36",
        3634: "3521127290410543dbe9",
        3666: "221dabfca10e6261778b",
        3859: "6e4f71cb6f2968584e9f",
        4037: "70841805ed53a2394061",
        4160: "2c869618a49b4c78c2c6",
        4219: "c1bf9a4d807ccc40860f",
        4250: "6e54366836c5e2593c89",
        4359: "88b613cc8668c12cb5d5",
        4360: "cc9e1a74db1a076fb328",
        4474: "c400d3a104733240db0e",
        4864: "e7499af02db859040fc8",
        5051: "93ca76526105423526a6",
        5065: "b00ba2d5662e91eb37ce",
        5072: "7d79cf23a6c99f14eda2",
        5263: "b234005f2cde4df2813d",
        5356: "d0b7254e6ba9372b0848",
        5653: "c5f07ef4a37b5d4b43de",
        6144: "cc6ce45b4651c578bf2d",
        6686: "a2655f0fb894eea78fbe",
        6701: "a5e527d1b00f00b2894c",
        6791: "247b2cb8f010066d079b",
        6947: "d2019dd701803e097ad6",
        7034: "96ed154e598b24bc92ea",
        7219: "93dc7956b5eea9373c88",
        7378: "a42ae12ed3f544e1a41d",
        7631: "03c8b167c4f2573b3b51",
        7635: "187440723d3d027d3341",
        7640: "74a39c5d8b5d23dd4361",
        7770: "d29618defbf81627ee0c",
        7799: "91d9a311d480ea49b50b",
        7965: "28bb203632f30b8ab658",
        8029: "484fa7833bbf5c791a77",
        8081: "86d07a1fc3f650b353bd",
        8108: "58e37689fcad06ca57fb",
        8175: "b3d979395900fc6efd07",
        8238: "54e39d2d654067012afe",
        8296: "eb686e17e56b02c9d67d",
        8339: "9aef770c6b4a6b01893d",
        8390: "77b28193a0a08a802cd8",
        8588: "88228e019d33c0acb3aa",
        8594: "5d4b1e4ae9034638ed83",
        8633: "ba0e1763dafcda9d687b",
        8684: "1e397cd026f10d8df47d",
        8831: "32fc8afa85492714c015",
        8920: "64811756f3592c2cfb8a",
        9062: "1eaffb554b746e7f04ae",
        9325: "2146f00900f09bf4180d",
        9340: "fc113e85e097f3d1917f",
        9428: "b412efacf857cb666d5f",
        9453: "353ad8b8358233dd1d47",
        9514: "229fffb1784307ecc186",
        9769: "fcd6523f606adb747f47",
        9792: "4d7aff4f841a04df1d60",
        9959: "5c90645baceabbf1bda7",
        9962: "bbc8028cbdfd663c6a6d",
        9983: "57fa068062597b7af792"
    }[e] + ".js"), o.g = function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, t = "yandex-pcode:", o.l = (n, r, i, a) => {
        if (e[n]) e[n].push(r); else {
            var s, u;
            if (void 0 !== i) for (var c = document.getElementsByTagName("script"), d = 0; d < c.length; d++) {
                var l = c[d];
                if (l.getAttribute("src") == n || l.getAttribute("data-webpack") == t + i) {
                    s = l;
                    break
                }
            }
            s || (u = !0, (s = document.createElement("script")).charset = "utf-8", s.timeout = 120, o.nc && s.setAttribute("nonce", o.nc), s.setAttribute("data-webpack", t + i), s.src = n, 0 !== s.src.indexOf(window.location.origin + "/") && (s.crossOrigin = "anonymous")), e[n] = [r];
            var f = (t, r) => {
                s.onerror = s.onload = null, clearTimeout(p);
                var o = e[n];
                if (delete e[n], s.parentNode && s.parentNode.removeChild(s), o && o.forEach((e => e(r))), t) return t(r)
            }, p = setTimeout(f.__pbind(null, void 0, {type: "timeout", target: s}), 12e4);
            s.onerror = f.__pbind(null, s.onerror), s.onload = f.__pbind(null, s.onload), u && document.head.appendChild(s)
        }
    }, o.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, o.p = "https://yastatic.net/partner-code-bundles/679108/", o.lv = o.lv || {}, o.lv["json"] = JSON, (() => {
        var e = {2352: 0, 841: 0};
        o.f.j = (t, n) => {
            var r = o.o(e, t) ? e[t] : void 0;
            if (0 !== r) if (r) n.push(r[2]); else {
                var i = new Promise(((n, o) => r = e[t] = [n, o]));
                n.push(r[2] = i);
                var a = o.p + o.u(t), s = new Error;
                o.l(a, (n => {
                    if (o.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                        var i = n && ("load" === n.type ? "missing" : n.type), a = n && n.target && n.target.src;
                        s.message = "Loading chunk " + t + " failed.\n(" + i + ": " + a + ")", s.name = "ChunkLoadError", s.type = i, s.request = a, r[1](s)
                    }
                }), "chunk-" + t, t)
            }
        };
        var t = (t, n) => {
            var r, i, [a, s, u] = n, c = 0;
            if (a.some((t => 0 !== e[t]))) {
                for (r in s) o.o(s, r) && (o.m[r] = s[r]);
                if (u) u(o)
            }
            for (t && t(n); c < a.length; c++) i = a[c], o.o(e, i) && e[i] && e[i][0](), e[i] = 0
        }, n = self["webpackChunkyandex_pcode"] = self["webpackChunkyandex_pcode"] || [];
        n.forEach(t.__pbind(null, 0)), n.push = t.__pbind(null, n.push.__pbind(n))
    })();
    (() => {
        "use strict";
        (function () {
            if (!o(54569).p) {
                var e = document.currentScript, t = (null == e ? void 0 : e.src) || "";
                t && (0, o(96125).f)(t) ? (0, o(84703).T)({src: "https://yandex.ru/ads/system/context.js"}) : o(73852).ns.pr || ((0, o(71422).R)(), (0, o(33356).H)(), (0, o(931).V)(), (0, o(78322).initDeps)(), (0, o(43699).a)(), "exp" === (0, o(88772).useExperimentFlag)("CSP_LOG") && setTimeout(o(4977).B, 1e3))
            }
        })()
    })()
})();