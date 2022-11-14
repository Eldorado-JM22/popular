// Copyright 2012 Google Inc. All rights reserved.
(function () {

    var data = {
        "resource": {
            "version": "1",

            "macros": [{"function": "__e"}, {"function": "__cid"}],
            "tags": [{"function": "__rep", "once_per_event": true, "vtp_containerId": ["macro", 1], "tag_id": 1}],
            "predicates": [{"function": "_eq", "arg0": ["macro", 0], "arg1": "gtm.js"}],
            "rules": [[["if", 0], ["add", 0]]]
        },
        "runtime": []


    };


    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var ba, ca = function (a) {
        var b = 0;
        return function () {
            return b < a.length ? {done: !1, value: a[b++]} : {done: !0}
        }
    }, da = "function" == typeof Object.create ? Object.create : function (a) {
        var b = function () {
        };
        b.prototype = a;
        return new b
    }, ea;
    if ("function" == typeof Object.setPrototypeOf) ea = Object.setPrototypeOf; else {
        var fa;
        a:{
            var ha = {a: !0}, ia = {};
            try {
                ia.__proto__ = ha;
                fa = ia.a;
                break a
            } catch (a) {
            }
            fa = !1
        }
        ea = fa ? function (a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ja = ea, ka = function (a, b) {
        a.prototype = da(b.prototype);
        a.prototype.constructor = a;
        if (ja) ja(a, b); else for (var c in b) if ("prototype" != c) if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c);
            d && Object.defineProperty(a, c, d)
        } else a[c] = b[c];
        a.Fk = b.prototype
    }, la = this || self, ma = function (a) {
        return a
    };
    var na = function () {
        }, oa = function (a) {
            return "function" === typeof a
        }, h = function (a) {
            return "string" === typeof a
        }, pa = function (a) {
            return "number" === typeof a && !isNaN(a)
        }, qa = Array.isArray, ra = function (a, b) {
            if (a && qa(a)) for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c]
        }, sa = function (a, b) {
            if (!pa(a) || !pa(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        }, ua = function (a, b) {
            for (var c = new ta, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
            return !1
        }, k = function (a,
                         b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        }, xa = function (a) {
            return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
        }, za = function (a) {
            return Math.round(Number(a)) || 0
        }, Aa = function (a) {
            return "false" === String(a).toLowerCase() ? !1 : !!a
        }, Ba = function (a) {
            var b = [];
            if (qa(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        }, Ca = function (a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        }, Da = function () {
            return new Date(Date.now())
        },
        z = function () {
            return Da().getTime()
        }, ta = function () {
            this.prefix = "gtm.";
            this.values = {}
        };
    ta.prototype.set = function (a, b) {
        this.values[this.prefix + a] = b
    };
    ta.prototype.get = function (a) {
        return this.values[this.prefix + a]
    };
    var Ea = function (a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        }, Fa = function (a) {
            var b = a;
            return function () {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c()
                    } catch (d) {
                    }
                }
            }
        }, Ga = function (a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        }, Ha = function (a) {
            for (var b in a) if (a.hasOwnProperty(b)) return !0;
            return !1
        }, Ia = function (a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        }, Ja = function (a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        }, Ka = /^\w{1,9}$/,
        La = function (a, b) {
            a = a || {};
            b = b || ",";
            var c = [];
            k(a, function (d, e) {
                Ka.test(d) && e && c.push(d)
            });
            return c.join(b)
        }, Ma = function (a, b) {
            function c() {
                ++d === b && (e(), e = null, c.done = !0)
            }

            var d = 0, e = a;
            c.done = !1;
            return c
        };

    function Pa() {
        for (var a = Qa, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function Ra() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }

    var Qa, Sa;

    function Ta(a) {
        Qa = Qa || Ra();
        Sa = Sa || Pa();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length, e = c + 2 < a.length, f = a.charCodeAt(c), g = d ? a.charCodeAt(c + 1) : 0,
                l = e ? a.charCodeAt(c + 2) : 0, m = f >> 2, n = (f & 3) << 4 | g >> 4, p = (g & 15) << 2 | l >> 6,
                q = l & 63;
            e || (q = 64, d || (p = 64));
            b.push(Qa[m], Qa[n], Qa[p], Qa[q])
        }
        return b.join("")
    }

    function Ua(a) {
        function b(m) {
            for (; d < a.length;) {
                var n = a.charAt(d++), p = Sa[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return m
        }

        Qa = Qa || Ra();
        Sa = Sa || Pa();
        for (var c = "", d = 0; ;) {
            var e = b(-1), f = b(0), g = b(64), l = b(64);
            if (64 === l && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != l && (c += String.fromCharCode(g << 6 & 192 | l)))
        }
    };var Va = {}, Wa = function (a, b) {
        Va[a] = Va[a] || [];
        Va[a][b] = !0
    }, Xa = function () {
        delete Va.GA4_EVENT
    }, Ya = function (a) {
        var b = Va[a];
        if (!b || 0 === b.length) return "";
        for (var c = [], d = 0, e = 0; e < b.length; e++) 0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), d = 0), b[e] && (d |= 1 << e % 8);
        0 < d && c.push(String.fromCharCode(d));
        return Ta(c.join("")).replace(/\.+$/, "")
    };
    var Za = Array.prototype.indexOf ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function (a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1
    };
    var $a, ab = function () {
        if (void 0 === $a) {
            var a = null, b = la.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {createHTML: ma, createScript: ma, createScriptURL: ma})
                } catch (c) {
                    la.console && la.console.error(c.message)
                }
                $a = a
            } else $a = a
        }
        return $a
    };
    var cb = function (a, b) {
        this.h = b === bb ? a : ""
    };
    cb.prototype.toString = function () {
        return this.h + ""
    };
    var bb = {};
    var db = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function eb() {
        var a = la.navigator;
        if (a) {
            var b = a.userAgent;
            if (b) return b
        }
        return ""
    }

    function fb(a) {
        return -1 != eb().indexOf(a)
    };

    function gb() {
        return fb("Firefox") || fb("FxiOS")
    }

    function hb() {
        return (fb("Chrome") || fb("CriOS")) && !fb("Edge") || fb("Silk")
    };var ib = {}, jb = function (a, b) {
        this.h = b === ib ? a : ""
    };
    jb.prototype.toString = function () {
        return this.h.toString()
    };
    var kb = function (a) {
        return a instanceof jb && a.constructor === jb ? a.h : "type_error:SafeHtml"
    }, lb = function (a) {
        var b = a, c = ab(), d = c ? c.createHTML(b) : b;
        return new jb(d, ib)
    };/*

 SPDX-License-Identifier: Apache-2.0
*/
    function mb(a) {
        if ("script" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeScript.");
        if ("style" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeStyleSheet.");
    };var E = window, F = document, nb = navigator, ob = F.currentScript && F.currentScript.src, pb = function (a, b) {
            var c = E[a];
            E[a] = void 0 === c ? b : c;
            return E[a]
        }, qb = function (a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function () {
                a.readyState in {loaded: 1, complete: 1} && (a.onreadystatechange = null, b())
            })
        }, rb = {async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1},
        sb = {onload: 1, src: 1, width: 1, height: 1, style: 1};

    function tb(a, b, c) {
        b && k(b, function (d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }

    var ub = function (a, b, c, d, e) {
        var f = F.createElement("script");
        tb(f, d, rb);
        f.type = "text/javascript";
        f.async = !0;
        var g, l = a, m = ab(), n = m ? m.createScriptURL(l) : l;
        g = new cb(n, bb);
        f.src = g instanceof cb && g.constructor === cb ? g.h : "type_error:TrustedResourceUrl";
        var p, q, t,
            u = null == (t = (q = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : t.call(q, "script[nonce]");
        (p = u ? u.nonce || u.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", p);
        qb(f, b);
        c && (f.onerror = c);
        if (e) e.appendChild(f); else {
            var r =
                F.getElementsByTagName("script")[0] || F.body || F.head;
            r.parentNode.insertBefore(f, r)
        }
        return f
    }, vb = function () {
        if (ob) {
            var a = ob.toLowerCase();
            if (0 === a.indexOf("https://")) return 2;
            if (0 === a.indexOf("http://")) return 3
        }
        return 1
    }, wb = function (a, b, c, d, e) {
        var f;
        f = void 0 === f ? !0 : f;
        var g = e, l = !1;
        g || (g = F.createElement("iframe"), l = !0);
        tb(g, c, sb);
        d && k(d, function (n, p) {
            g.dataset[n] = p
        });
        f && (g.height = "0", g.width = "0", g.style.display = "none", g.style.visibility = "hidden");
        if (l) {
            var m = F.body && F.body.lastChild || F.body || F.head;
            m.parentNode.insertBefore(g, m)
        }
        qb(g, b);
        void 0 !== a && (g.src = a);
        return g
    }, xb = function (a, b, c) {
        var d = new Image(1, 1);
        d.onload = function () {
            d.onload = null;
            b && b()
        };
        d.onerror = function () {
            d.onerror = null;
            c && c()
        };
        d.src = a
    }, yb = function (a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
    }, zb = function (a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
    }, G = function (a) {
        E.setTimeout(a, 0)
    }, Ab = function (a, b) {
        return a && b && a.attributes &&
        a.attributes[b] ? a.attributes[b].value : null
    }, Bb = function (a) {
        var b = a.innerText || a.textContent || "";
        b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
        b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
        return b
    }, Cb = function (a) {
        var b = F.createElement("div"), c = b, d = lb("A<div>" + a + "</div>");
        void 0 !== c.tagName && mb(c);
        c.innerHTML = kb(d);
        b = b.lastChild;
        for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
        return e
    }, Db = function (a, b, c) {
        c = c || 100;
        for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
        for (var f = a, g = 0; f &&
        g <= c; g++) {
            if (d[String(f.tagName).toLowerCase()]) return f;
            f = f.parentElement
        }
        return null
    }, Eb = function (a) {
        var b;
        try {
            b = nb.sendBeacon && nb.sendBeacon(a)
        } catch (c) {
            Wa("TAGGING", 15)
        }
        b || xb(a)
    }, Fb = function (a, b) {
        var c = a[b];
        c && "string" === typeof c.animVal && (c = c.animVal);
        return c
    }, Gb = function () {
        var a = E.performance;
        if (a && oa(a.now)) return a.now()
    };/*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Hb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/, Ib = function (a) {
        if (null == a) return String(a);
        var b = Hb.exec(Object.prototype.toString.call(Object(a)));
        return b ? b[1].toLowerCase() : "object"
    }, Jb = function (a, b) {
        return Object.prototype.hasOwnProperty.call(Object(a), b)
    }, Kb = function (a) {
        if (!a || "object" != Ib(a) || a.nodeType || a == a.window) return !1;
        try {
            if (a.constructor && !Jb(a, "constructor") && !Jb(a.constructor.prototype, "isPrototypeOf")) return !1
        } catch (c) {
            return !1
        }
        for (var b in a) ;
        return void 0 ===
            b || Jb(a, b)
    }, J = function (a, b) {
        var c = b || ("array" == Ib(a) ? [] : {}), d;
        for (d in a) if (Jb(a, d)) {
            var e = a[d];
            "array" == Ib(e) ? ("array" != Ib(c[d]) && (c[d] = []), c[d] = J(e, c[d])) : Kb(e) ? (Kb(c[d]) || (c[d] = {}), c[d] = J(e, c[d])) : c[d] = e
        }
        return c
    };
    var Lb = function (a) {
        if (void 0 === a || qa(a) || Kb(a)) return !0;
        switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
            case "function":
                return !0
        }
        return !1
    };
    var Mb = function () {
        var a = function (b) {
            return {
                toString: function () {
                    return b
                }
            }
        };
        return {
            Oh: a("consent"),
            Lf: a("convert_case_to"),
            Mf: a("convert_false_to"),
            Nf: a("convert_null_to"),
            Of: a("convert_true_to"),
            Pf: a("convert_undefined_to"),
            sk: a("debug_mode_metadata"),
            Ra: a("function"),
            Ue: a("instance_name"),
            Ei: a("live_only"),
            Fi: a("malware_disabled"),
            Gi: a("metadata"),
            Ji: a("original_activity_id"),
            wk: a("original_vendor_template_id"),
            vk: a("once_on_load"),
            Ii: a("once_per_event"),
            Sg: a("once_per_load"),
            xk: a("priority_override"),
            yk: a("respected_consent_types"),
            Wg: a("setup_tags"),
            Qc: a("tag_id"),
            Xg: a("teardown_tags")
        }
    }();
    var ic;
    var jc = [], kc = [], lc = [], mc = [], nc = [], oc = {}, pc, qc, sc = function () {
        var a = rc;
        qc = qc || a
    }, tc, uc = function (a, b) {
        var c = a["function"], d = b && b.event;
        if (!c) throw Error("Error: No function name given for function call.");
        var e = oc[c], f = {}, g;
        for (g in a) a.hasOwnProperty(g) && 0 === g.indexOf("vtp_") && (e && d && d.dh && d.dh(a[g]), f[void 0 !== e ? g : g.substr(4)] = a[g]);
        e && d && d.bh && (f.vtp_gtmCachedValues = d.bh);
        if (b) {
            if (null == b.name) {
                var l;
                a:{
                    var m = b.index;
                    if (null == m) l = ""; else {
                        var n;
                        switch (b.type) {
                            case 2:
                                n = jc[m];
                                break;
                            case 1:
                                n = mc[m];
                                break;
                            default:
                                l = "";
                                break a
                        }
                        var p = n && n[Mb.Ue];
                        l = p ? String(p) : ""
                    }
                }
                b.name = l
            }
            e && (f.vtp_gtmEntityIndex = b.index, f.vtp_gtmEntityName = b.name)
        }
        return void 0 !== e ? e(f) : ic(c, f, b)
    }, wc = function (a, b, c) {
        c = c || [];
        var d = {}, e;
        for (e in a) a.hasOwnProperty(e) && (d[e] = vc(a[e], b, c));
        return d
    }, vc = function (a, b, c) {
        if (qa(a)) {
            var d;
            switch (a[0]) {
                case "function_id":
                    return a[1];
                case "list":
                    d = [];
                    for (var e = 1; e < a.length; e++) d.push(vc(a[e], b, c));
                    return d;
                case "macro":
                    var f = a[1];
                    if (c[f]) return;
                    var g = jc[f];
                    if (!g || b.nf(g)) return;
                    c[f] = !0;
                    var l =
                        String(g[Mb.Ue]);
                    try {
                        var m = wc(g, b, c);
                        m.vtp_gtmEventId = b.id;
                        b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
                        d = uc(m, {event: b, index: f, type: 2, name: l});
                        tc && (d = tc.Yi(d, m))
                    } catch (x) {
                        b.qh && b.qh(x, Number(f), l), d = !1
                    }
                    c[f] = !1;
                    return d;
                case "map":
                    d = {};
                    for (var n = 1; n < a.length; n += 2) d[vc(a[n], b, c)] = vc(a[n + 1], b, c);
                    return d;
                case "template":
                    d = [];
                    for (var p = !1, q = 1; q < a.length; q++) {
                        var t = vc(a[q], b, c);
                        qc && (p = p || t === qc.Rd);
                        d.push(t)
                    }
                    return qc && p ? qc.Zi(d) : d.join("");
                case "escape":
                    d = vc(a[1], b, c);
                    if (qc && qa(a[1]) && "macro" ===
                        a[1][0] && qc.yj(a)) return qc.Qj(d);
                    d = String(d);
                    for (var u = 2; u < a.length; u++) Nb[a[u]] && (d = Nb[a[u]](d));
                    return d;
                case "tag":
                    var r = a[1];
                    if (!mc[r]) throw Error("Unable to resolve tag reference " + r + ".");
                    return d = {jh: a[2], index: r};
                case "zb":
                    var v = {arg0: a[2], arg1: a[3], ignore_case: a[5]};
                    v["function"] = a[1];
                    var w = xc(v, b, c), y = !!a[4];
                    return y || 2 !== w ? y !== (1 === w) : null;
                default:
                    throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
            }
        }
        return a
    }, xc = function (a, b, c) {
        try {
            return pc(wc(a, b, c))
        } catch (d) {
            JSON.stringify(a)
        }
        return 2
    };
    var Ac = function (a) {
        function b(t) {
            for (var u = 0; u < t.length; u++) d[t[u]] = !0
        }

        for (var c = [], d = [], e = yc(a), f = 0; f < kc.length; f++) {
            var g = kc[f], l = zc(g, e);
            if (l) {
                for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
                b(g.block || [])
            } else null === l && b(g.block || []);
        }
        for (var p = [], q = 0; q < mc.length; q++) c[q] && !d[q] && (p[q] = !0);
        return p
    }, zc = function (a, b) {
        for (var c = a["if"] || [], d = 0; d < c.length; d++) {
            var e = b(c[d]);
            if (0 === e) return !1;
            if (2 === e) return null
        }
        for (var f =
            a.unless || [], g = 0; g < f.length; g++) {
            var l = b(f[g]);
            if (2 === l) return null;
            if (1 === l) return !1
        }
        return !0
    }, yc = function (a) {
        var b = [];
        return function (c) {
            void 0 === b[c] && (b[c] = xc(lc[c], a));
            return b[c]
        }
    };
    var Bc = {
        Yi: function (a, b) {
            b[Mb.Lf] && "string" === typeof a && (a = 1 == b[Mb.Lf] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Mb.Nf) && null === a && (a = b[Mb.Nf]);
            b.hasOwnProperty(Mb.Pf) && void 0 === a && (a = b[Mb.Pf]);
            b.hasOwnProperty(Mb.Of) && !0 === a && (a = b[Mb.Of]);
            b.hasOwnProperty(Mb.Mf) && !1 === a && (a = b[Mb.Mf]);
            return a
        }
    };
    var Dc = [];
    Dc[7] = !0;
    Dc[9] = !0;
    Dc[27] = !0;
    Dc[6] = !0;
    Dc[12] = !0;
    Dc[11] = !0;
    Dc[13] = !0;
    Dc[15] = !0;
    Dc[23] = !0;
    Dc[29] = !0;
    Dc[33] = !0;
    Dc[35] = !0;
    Dc[36] = !0;
    Dc[38] = !0;
    Dc[43] = !0;
    Dc[44] = !0;
    Ec(46, 47);
    Dc[54] = !0;
    Dc[57] = !0;
    Dc[60] = !0;

    function Ec(a, b) {
        for (var c, d, e = 0; c === d;) if (c = Math.floor(2 * Math.random()), d = Math.floor(2 * Math.random()), e++, 20 < e) return;
        c ? Dc[a] = !0 : Dc[b] = !0;
    }

    var O = function (a) {
        return !!Dc[a]
    };
    var Zc = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;

    function $c(a, b) {
        return "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[a << 2 | b]
    };var ed = function (a) {
        return ad ? F.querySelectorAll(a) : null
    }, fd = function (a, b) {
        if (!ad) return null;
        if (Element.prototype.closest) try {
            return a.closest(b)
        } catch (e) {
            return null
        }
        var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
            d = a;
        if (!F.documentElement.contains(d)) return null;
        do {
            try {
                if (c.call(d, b)) return d
            } catch (e) {
                break
            }
            d = d.parentElement || d.parentNode
        } while (null !== d && 1 === d.nodeType);
        return null
    }, gd = !1;
    if (F.querySelectorAll) try {
        var hd = F.querySelectorAll(":root");
        hd && 1 == hd.length && hd[0] == F.documentElement && (gd = !0)
    } catch (a) {
    }
    var ad = gd;
    var P = function (a) {
        Wa("GTM", a)
    };
    var R = {
            g: {
                F: "ad_storage",
                R: "analytics_storage",
                If: "region",
                Jf: "consent_updated",
                Kf: "wait_for_update",
                Sh: "app_remove",
                Th: "app_store_refund",
                Uh: "app_store_subscription_cancel",
                Vh: "app_store_subscription_convert",
                Wh: "app_store_subscription_renew",
                Qf: "add_payment_info",
                Rf: "add_shipping_info",
                mc: "add_to_cart",
                nc: "remove_from_cart",
                Sf: "view_cart",
                Ib: "begin_checkout",
                oc: "select_item",
                sb: "view_item_list",
                Jb: "select_promotion",
                tb: "view_promotion",
                Ba: "purchase",
                qc: "refund",
                Ha: "view_item",
                Tf: "add_to_wishlist",
                Xh: "first_open",
                Yh: "first_visit",
                va: "gtag.config",
                Ca: "gtag.get",
                Zh: "in_app_purchase",
                sc: "page_view",
                ai: "session_start",
                we: "user_engagement",
                Kb: "gclid",
                ia: "ads_data_redaction",
                X: "allow_ad_personalization_signals",
                xe: "allow_custom_scripts",
                bi: "allow_display_features",
                uc: "allow_enhanced_conversions",
                Lb: "allow_google_signals",
                wa: "allow_interest_groups",
                vd: "auid",
                ci: "auto_detection_enabled",
                Wa: "aw_remarketing",
                wd: "aw_remarketing_only",
                vc: "discount",
                wc: "aw_feed_country",
                xc: "aw_feed_language",
                Z: "items",
                yc: "aw_merchant_id",
                Uf: "aw_basket_type",
                xd: "campaign_content",
                yd: "campaign_id",
                zd: "campaign_medium",
                Ad: "campaign_name",
                zc: "campaign",
                Bd: "campaign_source",
                Cd: "campaign_term",
                kb: "client_id",
                di: "content_group",
                ei: "content_type",
                Da: "conversion_cookie_prefix",
                Ac: "conversion_id",
                Xa: "conversion_label",
                qa: "conversion_linker",
                ye: "conversion_api",
                Ya: "cookie_domain",
                Ia: "cookie_expires",
                Za: "cookie_flags",
                Bc: "cookie_name",
                ze: "cookie_path",
                Pa: "cookie_prefix",
                ub: "cookie_update",
                Mb: "country",
                ma: "currency",
                Cc: "customer_lifetime_value",
                Dc: "custom_map",
                fi: "debug_mode",
                aa: "developer_id",
                Vf: "disable_merchant_reported_purchases",
                gi: "dc_custom_params",
                hi: "dc_natural_search",
                Ae: "dynamic_event_settings",
                ii: "affiliation",
                Wf: "checkout_option",
                Xf: "checkout_step",
                ji: "coupon",
                Yf: "item_list_name",
                Zf: "list_name",
                ki: "promotions",
                Ec: "shipping",
                ag: "tax",
                Dd: "engagement_time_msec",
                Fc: "enhanced_client_id",
                Gc: "enhanced_conversions",
                cg: "enhanced_conversions_automatic_settings",
                Hc: "estimated_delivery_date",
                Be: "euid_logged_in_state",
                Nb: "event_callback",
                Ob: "event_developer_id_string",
                dg: "event",
                Ed: "event_settings",
                Fd: "event_timeout",
                li: "experiments",
                Ce: "firebase_id",
                Gd: "first_party_collection",
                Hd: "_x_20",
                vb: "_x_19",
                eg: "fledge",
                fg: "flight_error_code",
                gg: "flight_error_message",
                hg: "gac_gclid",
                Id: "gac_wbraid",
                ig: "gac_wbraid_multiple_conversions",
                Ic: "ga_restrict_domain",
                De: "ga_temp_client_id",
                jg: "gdpr_applies",
                kg: "geo_granularity",
                ab: "value_callback",
                Qa: "value_key",
                Pb: "global_developer_id_string",
                tk: "google_ono",
                lb: "google_signals",
                Jd: "google_tld",
                Kd: "groups",
                lg: "gsa_experiment_id",
                mg: "iframe_state",
                Ld: "ignore_referrer",
                Ee: "internal_traffic_results",
                Md: "is_legacy_loaded",
                ng: "is_passthrough",
                Ja: "language",
                Fe: "legacy_developer_id_string",
                ra: "linker",
                Qb: "accept_incoming",
                Rb: "decorate_forms",
                T: "domains",
                Jc: "url_position",
                og: "method",
                Sb: "new_customer",
                pg: "non_interaction",
                mi: "optimize_id",
                Ka: "page_location",
                Ge: "page_path",
                La: "page_referrer",
                Tb: "page_title",
                qg: "passengers",
                rg: "phone_conversion_callback",
                ni: "phone_conversion_country_code",
                sg: "phone_conversion_css_class",
                oi: "phone_conversion_ids",
                ug: "phone_conversion_number",
                vg: "phone_conversion_options",
                wg: "quantity",
                Kc: "redact_device_info",
                He: "redact_enhanced_user_id",
                ri: "redact_ga_client_id",
                si: "redact_user_id",
                Nd: "referral_exclusion_definition",
                nb: "restricted_data_processing",
                ui: "retoken",
                xg: "screen_name",
                wb: "screen_resolution",
                vi: "search_term",
                xa: "send_page_view",
                xb: "send_to",
                Lc: "session_duration",
                Od: "session_engaged",
                Ie: "session_engaged_time",
                ob: "session_id",
                Pd: "session_number",
                Ub: "delivery_postal_code",
                yg: "tc_privacy_string",
                zg: "temporary_client_id",
                wi: "tracking_id",
                Je: "traffic_type",
                Ea: "transaction_id",
                na: "transport_url",
                Ag: "trip_type",
                Mc: "update",
                cb: "url_passthrough",
                Ke: "_user_agent_architecture",
                Le: "_user_agent_bitness",
                Me: "_user_agent_full_version_list",
                Bg: "_user_agent_mobile",
                Ne: "_user_agent_model",
                Oe: "_user_agent_platform",
                Pe: "_user_agent_platform_version",
                Cg: "_user_agent_wait",
                Qe: "_user_agent_wow64",
                ca: "user_data",
                Dg: "user_data_auto_latency",
                Eg: "user_data_auto_meta",
                Fg: "user_data_auto_multi",
                Gg: "user_data_auto_selectors",
                Hg: "user_data_auto_status",
                Ig: "user_data_mode",
                Re: "user_data_settings",
                sa: "user_id",
                Ma: "user_properties",
                Jg: "us_privacy_string",
                ka: "value",
                Qd: "wbraid",
                Kg: "wbraid_multiple_conversions",
                Ng: "_host_name",
                Og: "_in_page_command",
                Pg: "_is_linker_valid",
                Qg: "_is_passthrough_cid",
                Rg: "non_personalized_ads"
            }
        }, Fd = {},
        Gd = Object.freeze((Fd[R.g.X] = 1, Fd[R.g.uc] = 1, Fd[R.g.Lb] = 1, Fd[R.g.Z] = 1, Fd[R.g.Ya] = 1, Fd[R.g.Ia] = 1, Fd[R.g.Za] = 1, Fd[R.g.Bc] = 1, Fd[R.g.ze] = 1, Fd[R.g.Pa] = 1, Fd[R.g.ub] = 1, Fd[R.g.Dc] = 1, Fd[R.g.aa] = 1, Fd[R.g.Ae] = 1,
            Fd[R.g.Nb] = 1, Fd[R.g.Ed] = 1, Fd[R.g.Fd] = 1, Fd[R.g.Gd] = 1, Fd[R.g.Ic] = 1, Fd[R.g.lb] = 1, Fd[R.g.Jd] = 1, Fd[R.g.Kd] = 1, Fd[R.g.Ee] = 1, Fd[R.g.Md] = 1, Fd[R.g.ra] = 1, Fd[R.g.He] = 1, Fd[R.g.Nd] = 1, Fd[R.g.nb] = 1, Fd[R.g.xa] = 1, Fd[R.g.xb] = 1, Fd[R.g.Lc] = 1, Fd[R.g.Ie] = 1, Fd[R.g.Ub] = 1, Fd[R.g.na] = 1, Fd[R.g.Mc] = 1, Fd[R.g.Re] = 1, Fd[R.g.Ma] = 1, Fd));
    Object.freeze([R.g.Ka, R.g.La, R.g.Tb, R.g.Ja, R.g.xg, R.g.sa, R.g.Ce, R.g.di]);
    var Hd = {},
        Id = Object.freeze((Hd[R.g.Sh] = 1, Hd[R.g.Th] = 1, Hd[R.g.Uh] = 1, Hd[R.g.Vh] = 1, Hd[R.g.Wh] = 1, Hd[R.g.Xh] = 1, Hd[R.g.Yh] = 1, Hd[R.g.Zh] = 1, Hd[R.g.ai] = 1, Hd[R.g.we] = 1, Hd)),
        Jd = {},
        Kd = Object.freeze((Jd[R.g.Qf] = 1, Jd[R.g.Rf] = 1, Jd[R.g.mc] = 1, Jd[R.g.nc] = 1, Jd[R.g.Sf] = 1, Jd[R.g.Ib] = 1, Jd[R.g.oc] = 1, Jd[R.g.sb] = 1, Jd[R.g.Jb] = 1, Jd[R.g.tb] = 1, Jd[R.g.Ba] = 1, Jd[R.g.qc] = 1, Jd[R.g.Ha] = 1, Jd[R.g.Tf] = 1, Jd)),
        Md = Object.freeze([R.g.X, R.g.Lb, R.g.ub]), Nd = Object.freeze([].concat(Md)),
        Od = Object.freeze([R.g.Ia, R.g.Fd, R.g.Lc, R.g.Ie, R.g.Dd]),
        Pd = Object.freeze([].concat(Od)), Qd = {}, Rd = (Qd[R.g.F] = "1", Qd[R.g.R] = "2", Qd), Sd = {},
        Td = Object.freeze((Sd[R.g.X] = 1, Sd[R.g.uc] = 1, Sd[R.g.wa] = 1, Sd[R.g.Wa] = 1, Sd[R.g.wd] = 1, Sd[R.g.vc] = 1, Sd[R.g.wc] = 1, Sd[R.g.xc] = 1, Sd[R.g.Z] = 1, Sd[R.g.yc] = 1, Sd[R.g.Da] = 1, Sd[R.g.qa] = 1, Sd[R.g.Ya] = 1, Sd[R.g.Ia] = 1, Sd[R.g.Za] = 1, Sd[R.g.Pa] = 1, Sd[R.g.ma] = 1, Sd[R.g.Cc] = 1, Sd[R.g.aa] = 1, Sd[R.g.Vf] = 1, Sd[R.g.Gc] = 1, Sd[R.g.Hc] = 1, Sd[R.g.Ce] = 1, Sd[R.g.Gd] = 1, Sd[R.g.Md] = 1, Sd[R.g.Ja] = 1, Sd[R.g.Sb] = 1, Sd[R.g.Ka] = 1, Sd[R.g.La] = 1, Sd[R.g.rg] = 1, Sd[R.g.sg] = 1, Sd[R.g.ug] =
            1, Sd[R.g.vg] = 1, Sd[R.g.nb] = 1, Sd[R.g.xa] = 1, Sd[R.g.xb] = 1, Sd[R.g.Ub] = 1, Sd[R.g.Ea] = 1, Sd[R.g.na] = 1, Sd[R.g.Mc] = 1, Sd[R.g.cb] = 1, Sd[R.g.ca] = 1, Sd[R.g.sa] = 1, Sd[R.g.ka] = 1, Sd));
    Object.freeze(R.g);
    var Ud = {}, Vd = E.google_tag_manager = E.google_tag_manager || {}, Wd = Math.random();
    Ud.Pc = "b90";
    Ud.Xe = Number("0") || 0;
    Ud.fa = "dataLayer";
    Ud.Qh = "ChAIgKW9mwYQwdzEo4zxl+ZuEicAZSAHovFhAlc0qhEaZY4QLePLgcccvAzYxZvsQwIvw05GK8kDwEIaAoM5";
    var Xd = {
        __cl: !0,
        __ecl: !0,
        __ehl: !0,
        __evl: !0,
        __fal: !0,
        __fil: !0,
        __fsl: !0,
        __hl: !0,
        __jel: !0,
        __lcl: !0,
        __sdl: !0,
        __tl: !0,
        __ytl: !0
    }, Yd = {__paused: !0, __tg: !0}, Zd;
    for (Zd in Xd) Xd.hasOwnProperty(Zd) && (Yd[Zd] = !0);
    var $d = Aa(""), ae = Aa(""), be, ce = !1;
    ce = !0;
    be = ce;
    var de, ee = !1;
    de = ee;
    var fe, ge = !1;
    fe = ge;
    var he, ie = !1;
    he = ie;
    Ud.ud = "www.googletagmanager.com";
    var je = "" + Ud.ud + (be ? "/gtag/js" : "/gtm.js"), ke = null, le = null, me = {}, ne = {}, oe = {},
        pe = function () {
            var a = Vd.sequence || 1;
            Vd.sequence = a + 1;
            return a
        };
    Ud.Ph = "";
    var qe = "";
    Ud.Vd = qe;
    var re = new ta, se = {}, te = {}, we = {
        name: Ud.fa, set: function (a, b) {
            J(Ja(a, b), se);
            ue()
        }, get: function (a) {
            return ve(a, 2)
        }, reset: function () {
            re = new ta;
            se = {};
            ue()
        }
    }, ve = function (a, b) {
        return 2 != b ? re.get(a) : xe(a)
    }, xe = function (a) {
        var b, c = a.split(".");
        b = b || [];
        for (var d = se, e = 0; e < c.length; e++) {
            if (null === d) return !1;
            if (void 0 === d) break;
            d = d[c[e]];
            if (-1 !== b.indexOf(d)) return
        }
        return d
    }, ye = function (a, b) {
        te.hasOwnProperty(a) || (re.set(a, b), J(Ja(a, b), se), ue())
    }, ue = function (a) {
        k(te, function (b, c) {
            re.set(b, c);
            J(Ja(b), se);
            J(Ja(b,
                c), se);
            a && delete te[b]
        })
    }, ze = function (a, b) {
        var c, d = 1 !== (void 0 === b ? 2 : b) ? xe(a) : re.get(a);
        "array" === Ib(d) || "object" === Ib(d) ? c = J(d) : c = d;
        return c
    };
    var Ae, Be = !1, Ce = function (a) {
        if (!Be) {
            Be = !0;
            Ae = Ae || {}
        }
        return Ae[a]
    };
    var De = function () {
        var a = E.screen;
        return {width: a ? a.width : 0, height: a ? a.height : 0}
    }, Ee = function (a) {
        if (F.hidden) return !0;
        var b = a.getBoundingClientRect();
        if (b.top == b.bottom || b.left == b.right || !E.getComputedStyle) return !0;
        var c = E.getComputedStyle(a, null);
        if ("hidden" === c.visibility) return !0;
        for (var d = a, e = c; d;) {
            if ("none" === e.display) return !0;
            var f = e.opacity, g = e.filter;
            if (g) {
                var l = g.indexOf("opacity(");
                0 <= l && (g = g.substring(l + 8, g.indexOf(")", l)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g,
                    f))
            }
            if (void 0 !== f && 0 >= f) return !0;
            (d = d.parentElement) && (e = E.getComputedStyle(d, null))
        }
        return !1
    };
    var Pe = /:[0-9]+$/, Qe = function (a, b, c) {
        for (var d = a.split("&"), e = 0; e < d.length; e++) {
            var f = d[e].split("=");
            if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
                var g = f.slice(1).join("=");
                return c ? g : decodeURIComponent(g).replace(/\+/g, " ")
            }
        }
    }, Te = function (a, b, c, d, e) {
        b && (b = String(b).toLowerCase());
        if ("protocol" === b || "port" === b) a.protocol = Re(a.protocol) || Re(E.location.protocol);
        "port" === b ? a.port = String(Number(a.hostname ? a.port : E.location.port) || ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" ===
            b && (a.hostname = (a.hostname || E.location.hostname).replace(Pe, "").toLowerCase());
        return Se(a, b, c, d, e)
    }, Se = function (a, b, c, d, e) {
        var f, g = Re(a.protocol);
        b && (b = String(b).toLowerCase());
        switch (b) {
            case "url_no_fragment":
                f = Ue(a);
                break;
            case "protocol":
                f = g;
                break;
            case "host":
                f = a.hostname.replace(Pe, "").toLowerCase();
                if (c) {
                    var l = /^www\d*\./.exec(f);
                    l && l[0] && (f = f.substr(l[0].length))
                }
                break;
            case "port":
                f = String(Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : ""));
                break;
            case "path":
                a.pathname || a.hostname || Wa("TAGGING",
                    1);
                f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                var m = f.split("/");
                0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
                f = m.join("/");
                break;
            case "query":
                f = a.search.replace("?", "");
                e && (f = Qe(f, e));
                break;
            case "extension":
                var n = a.pathname.split(".");
                f = 1 < n.length ? n[n.length - 1] : "";
                f = f.split("/")[0];
                break;
            case "fragment":
                f = a.hash.replace("#", "");
                break;
            default:
                f = a && a.href
        }
        return f
    }, Re = function (a) {
        return a ? a.replace(":", "").toLowerCase() : ""
    }, Ue = function (a) {
        var b = "";
        if (a && a.href) {
            var c = a.href.indexOf("#");
            b = 0 > c ? a.href : a.href.substr(0, c)
        }
        return b
    }, Ve = function (a) {
        var b = F.createElement("a");
        a && (b.href = a);
        var c = b.pathname;
        "/" !== c[0] && (a || Wa("TAGGING", 1), c = "/" + c);
        var d = b.hostname.replace(Pe, "");
        return {
            href: b.href,
            protocol: b.protocol,
            host: b.host,
            hostname: d,
            pathname: c,
            search: b.search,
            hash: b.hash,
            port: b.port
        }
    }, We = function (a) {
        function b(n) {
            var p = n.split("=")[0];
            return 0 > d.indexOf(p) ? n : p + "=0"
        }

        function c(n) {
            return n.split("&").map(b).filter(function (p) {
                return void 0 !== p
            }).join("&")
        }

        var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
            e = Ve(a), f = a.split(/[?#]/)[0], g = e.search, l = e.hash;
        "?" === g[0] && (g = g.substring(1));
        "#" === l[0] && (l = l.substring(1));
        g = c(g);
        l = c(l);
        "" !== g && (g = "?" + g);
        "" !== l && (l = "#" + l);
        var m = "" + f + g + l;
        "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
        return m
    };
    var Xe = {};
    var zf = {}, Af = function (a, b) {
        if (E._gtmexpgrp && E._gtmexpgrp.hasOwnProperty(a)) return E._gtmexpgrp[a];
        void 0 === zf[a] && (zf[a] = Math.floor(Math.random() * b));
        return zf[a]
    };
    var Cf = {fh: "KG", Wj: "KG-C"};
    var Df = new function (a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1933);
    var Ef = function (a) {
        Ef[" "](a);
        return a
    };
    Ef[" "] = function () {
    };
    var Gf = function () {
        var a = Ff, b = "kf";
        if (a.kf && a.hasOwnProperty(b)) return a.kf;
        var c = new a;
        return a.kf = c
    };
    var Ff = function () {
        var a = {};
        this.h = function () {
            var b = Df.h, c = Df.defaultValue;
            return null != a[b] ? a[b] : c
        };
        this.m = function () {
            a[Df.h] = !0
        }
    };
    var Hf = [];

    function If() {
        var a = pb("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            set: Jf,
            update: Kf,
            addListener: Lf,
            notifyListeners: Mf,
            active: !1,
            usedDefault: !1,
            usedUpdate: !1,
            accessedDefault: !1,
            accessedAny: !1,
            wasSetLate: !1
        });
        return a.ics
    }

    function Jf(a, b, c, d, e, f) {
        var g = If();
        g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var l = g.entries, m = l[a] || {}, n = m.region, p = c && h(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
                var q = !!(f && 0 < f && void 0 === m.update),
                    t = {region: p, initial: "granted" === b, update: m.update, quiet: q};
                if ("" !== d || !1 !== m.initial) l[a] = t;
                q && E.setTimeout(function () {
                    l[a] === t && t.quiet && (t.quiet = !1, Nf(a), Mf(), Wa("TAGGING",
                        2))
                }, f)
            }
        }
    }

    function Kf(a, b) {
        var c = If();
        c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
        c.active = !0;
        c.usedUpdate = !0;
        if (void 0 != b) {
            var d = Of(c, a), e = c.entries, f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var g = Of(c, a);
            f.quiet ? (f.quiet = !1, Nf(a)) : g !== d && Nf(a)
        }
    }

    function Lf(a, b) {
        Hf.push({bf: a, ij: b})
    }

    function Nf(a) {
        for (var b = 0; b < Hf.length; ++b) {
            var c = Hf[b];
            qa(c.bf) && -1 !== c.bf.indexOf(a) && (c.vh = !0)
        }
    }

    function Mf(a, b) {
        for (var c = 0; c < Hf.length; ++c) {
            var d = Hf[c];
            if (d.vh) {
                d.vh = !1;
                try {
                    d.ij({consentEventId: a, consentPriorityId: b})
                } catch (e) {
                }
            }
        }
    }

    function Of(a, b) {
        var c = a.entries[b] || {};
        return void 0 !== c.update ? c.update : c.initial
    }

    var Pf = function (a) {
        var b = If();
        b.accessedAny = !0;
        return Of(b, a)
    }, Qf = function (a) {
        var b = If();
        b.accessedDefault = !0;
        return (b.entries[a] || {}).initial
    }, Rf = function (a) {
        var b = If();
        b.accessedAny = !0;
        return !(b.entries[a] || {}).quiet
    }, Sf = function () {
        if (!Gf().h()) return !1;
        var a = If();
        a.accessedAny = !0;
        return a.active
    }, Tf = function () {
        var a = If();
        a.accessedDefault = !0;
        return a.usedDefault
    }, Uf = function (a, b) {
        If().addListener(a, b)
    }, Vf = function (a, b) {
        If().notifyListeners(a, b)
    }, Wf = function (a, b) {
        function c() {
            for (var e = 0; e < b.length; e++) if (!Rf(b[e])) return !0;
            return !1
        }

        if (c()) {
            var d = !1;
            Uf(b, function (e) {
                d || c() || (d = !0, a(e))
            })
        } else a({})
    }, Xf = function (a, b) {
        function c() {
            for (var f = [], g = 0; g < d.length; g++) {
                var l = d[g];
                !1 === Pf(l) || e[l] || (f.push(l), e[l] = !0)
            }
            return f
        }

        var d = h(b) ? [b] : b, e = {};
        c().length !== d.length && Uf(d, function (f) {
            var g = c();
            0 < g.length && (f.bf = g, a(f))
        })
    };

    function Yf() {
    }

    function Zf() {
    };

    function $f(a) {
        for (var b = [], c = 0; c < ag.length; c++) {
            var d = a(ag[c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-"
        }
        return b.join("")
    }

    var ag = [R.g.F, R.g.R], bg = function (a) {
        var b = a[R.g.If];
        b && P(40);
        var c = a[R.g.Kf];
        c && P(41);
        for (var d = qa(b) ? b : [b], e = {ic: 0}; e.ic < d.length; e = {ic: e.ic}, ++e.ic) k(a, function (f) {
            return function (g, l) {
                if (g !== R.g.If && g !== R.g.Kf) {
                    var m = d[f.ic], n = Cf.fh, p = Cf.Wj;
                    If().set(g, l, m, n, p, c)
                }
            }
        }(e))
    }, cg = 0, dg = function (a, b) {
        k(a, function (e, f) {
            If().update(e, f)
        });
        Vf(b.eventId, b.priorityId);
        var c = z(), d = c - cg;
        cg && 0 <= d && 1E3 > d && P(66);
        cg = c
    }, eg = function (a) {
        var b = Pf(a);
        return void 0 != b ? b : !0
    }, fg = function () {
        return "G1" + $f(Pf)
    }, gg = function (a,
                      b) {
        Xf(a, b)
    }, hg = function (a, b) {
        Wf(a, b)
    };
    var ig = function (a) {
        var b = 1, c, d, e;
        if (a) for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 !== c ? b ^ c >> 21 : b;
        return b
    };
    var jg = function (a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("="), l = g[0].replace(/^\s*|\s*$/g, "");
            if (l && l == a) {
                var m = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                m && c && (m = decodeURIComponent(m));
                d.push(m)
            }
        }
        return d
    };
    var kg = function (a, b) {
        var c = function () {
        };
        c.prototype = a.prototype;
        var d = new c;
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d
    }, lg = function (a) {
        var b = a;
        return function () {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };

    function mg(a) {
        return "null" !== a.origin
    };var pg = function (a, b, c, d) {
        return ng(d) ? jg(a, String(b || og()), c) : []
    }, sg = function (a, b, c, d, e) {
        if (ng(e)) {
            var f = qg(a, d, e);
            if (1 === f.length) return f[0].id;
            if (0 !== f.length) {
                f = rg(f, function (g) {
                    return g.be
                }, b);
                if (1 === f.length) return f[0].id;
                f = rg(f, function (g) {
                    return g.fd
                }, c);
                return f[0] ? f[0].id : void 0
            }
        }
    };

    function tg(a, b, c, d) {
        var e = og(), f = window;
        mg(f) && (f.document.cookie = a);
        var g = og();
        return e != g || void 0 != c && 0 <= pg(b, g, !1, d).indexOf(c)
    }

    var Eg = function (a, b, c) {
        function d(u, r, v) {
            if (null == v) return delete g[r], u;
            g[r] = v;
            return u + "; " + r + "=" + v
        }

        function e(u, r) {
            if (null == r) return delete g[r], u;
            g[r] = !0;
            return u + "; " + r
        }

        if (!ng(c.rb)) return 2;
        var f;
        void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Bg(b), f = a + "=" + b);
        var g = {};
        f = d(f, "path", c.path);
        var l;
        c.expires instanceof Date ? l = c.expires.toUTCString() : null != c.expires && (l = "" + c.expires);
        f = d(f, "expires", l);
        f = d(f, "max-age", c.Ck);
        f = d(f, "samesite",
            c.Dk);
        c.Ek && (f = e(f, "secure"));
        var m = c.domain;
        if (m && "auto" === m.toLowerCase()) {
            for (var n = Cg(), p = 0; p < n.length; ++p) {
                var q = "none" !== n[p] ? n[p] : void 0, t = d(f, "domain", q);
                t = e(t, c.flags);
                if (!Dg(q, c.path) && tg(t, a, b, c.rb)) return 0
            }
            return 1
        }
        m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
        f = e(f, c.flags);
        return Dg(m, c.path) ? 1 : tg(f, a, b, c.rb) ? 0 : 1
    }, Fg = function (a, b, c) {
        null == c.path && (c.path = "/");
        c.domain || (c.domain = "auto");
        return Eg(a, b, c)
    };

    function rg(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var l = a[g], m = b(l);
            m === c ? d.push(l) : void 0 === f || m < f ? (e = [l], f = m) : m === f && e.push(l)
        }
        return 0 < d.length ? d : e
    }

    function qg(a, b, c) {
        for (var d = [], e = pg(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."), l = g.shift();
            if (!b || -1 !== b.indexOf(l)) {
                var m = g.shift();
                m && (m = m.split("-"), d.push({id: g.join("."), be: 1 * m[0] || 1, fd: 1 * m[1] || 1}))
            }
        }
        return d
    }

    var Bg = function (a) {
        a && 1200 < a.length && (a = a.substring(0, 1200));
        return a
    }, Gg = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/, Hg = /(^|\.)doubleclick\.net$/i, Dg = function (a, b) {
        return Hg.test(window.document.location.hostname) || "/" === b && Gg.test(a)
    }, og = function () {
        return mg(window) ? window.document.cookie : ""
    }, Cg = function () {
        var a = [], b = window.document.location.hostname.split(".");
        if (4 === b.length) {
            var c = b[b.length - 1];
            if (parseInt(c, 10).toString() === c) return ["none"]
        }
        for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
        var e = window.document.location.hostname;
        Hg.test(e) || Gg.test(e) || a.push("none");
        return a
    }, ng = function (a) {
        if (!Gf().h() || !a || !Sf()) return !0;
        if (!Rf(a)) return !1;
        var b = Pf(a);
        return null == b ? !0 : !!b
    };
    var Ig = function (a) {
        var b = Math.round(2147483647 * Math.random());
        return a ? String(b ^ ig(a) & 2147483647) : String(b)
    }, Jg = function (a) {
        return [Ig(a), Math.round(z() / 1E3)].join(".")
    }, Mg = function (a, b, c, d, e) {
        var f = Kg(b);
        return sg(a, f, Lg(c), d, e)
    }, Ng = function (a, b, c, d) {
        var e = "" + Kg(c), f = Lg(d);
        1 < f && (e += "-" + f);
        return [b, e, a].join(".")
    }, Kg = function (a) {
        if (!a) return 1;
        a = 0 === a.indexOf(".") ? a.substr(1) : a;
        return a.split(".").length
    }, Lg = function (a) {
        if (!a || "/" === a) return 1;
        "/" !== a[0] && (a = "/" + a);
        "/" !== a[a.length - 1] && (a += "/");
        return a.split("/").length -
            1
    };
    var Og = function () {
        Vd.dedupe_gclid || (Vd.dedupe_gclid = "" + Jg());
        return Vd.dedupe_gclid
    };
    var Pg = function () {
        var a = !1;
        return a
    };
    var Qg = {M: "UA-122922324-1", Hb: ""}, Rg = {sh: "UA-122922324-1", th: "UA-122922324-1"};
    Qg.Ve = Aa("");
    var Sg = function () {
            return Rg.sh ? Rg.sh.split("|") : [Qg.M]
        }, Tg = function () {
            if (Rg.th) return Rg.th.split("|");
            P(84);
            return []
        }, Ug = function () {
            this.container = {};
            this.destination = {};
            this.canonical = {}
        }, Wg = function () {
            for (var a = Vg(), b = Sg(), c = 0; c < b.length; c++) {
                var d = a.container[b[c]];
                !d || pa(d) ? a.container[b[c]] = {state: 2} : d.state = 2
            }
            for (var e = Tg(), f = 0; f < e.length; f++) {
                var g = a.destination[e[f]];
                g && 0 === g.state && P(93);
                g ? g.state = 2 : a.destination[e[f]] = {state: 2}
            }
            a.canonical[Qg.Hb] = 2
        }, Xg = function (a) {
            return !!Vg().container[a]
        },
        Yg = function () {
            var a = Vg().container, b;
            for (b in a) if (a.hasOwnProperty(b)) {
                var c = a[b];
                if (pa(c)) {
                    if (1 === c) return !0
                } else if (1 === c.state) return !0
            }
            return !1
        }, Zg = function () {
            var a = {};
            k(Vg().destination, function (b, c) {
                0 === c.state && (a[b] = c)
            });
            return a
        };

    function Vg() {
        var a = Vd.tidr;
        a || (a = new Ug, Vd.tidr = a);
        return a
    }

    var $g = {"": "n", UA: "u", AW: "a", DC: "d", G: "e", GF: "f", GT: "t", HA: "h", MC: "m", GTM: "g", OPT: "o"},
        ah = {UA: 1, AW: 2, DC: 3, G: 4, GF: 5, GT: 12, GTM: 14, HA: 6, MC: 7}, bh = function (a) {
            var b = Qg.M.split("-"), c = b[0].toUpperCase();
            if (O(45)) {
                var d = {};
                d.aj = Qg.M;
                d.bk = Ud.Xe;
                d.fk = Ud.Pc;
                d.Hj = Qg.Ve ? 2 : 1;
                be ? (d.pe = ah[c], d.pe || (d.pe = 0)) : d.pe = he ? 13 : 10;
                fe ? d.tf = 1 : Pg() ? d.tf = 2 : d.tf = 3;
                var e;
                var f = d.pe, g = d.tf;
                void 0 === f ? e = "" : (g || (g = 0), e = "" + $c(1, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[f << 2 | g]);
                var l = d.zk, m = 4 + e + (l ? "" + $c(2,
                    1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[l] : ""), n, p = d.fk;
                n = p && Zc.test(p) ? "" + $c(3, 2) + p : "";
                var q, t = d.bk;
                q = t ? "" + $c(4, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[t] : "";
                var u;
                var r = d.aj;
                if (r && a) {
                    var v = r.split("-"), w = v[0].toUpperCase();
                    if ("GTM" !== w && "OPT" !== w) u = ""; else {
                        var y = v[1];
                        u = "" + $c(5, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[1 + y.length] + (d.Hj || 0) + y
                    }
                } else u = "";
                return m + n + q + u
            }
            var x = $g[c] || "i", A = a && "GTM" === c ? b[1] : "OPT" ===
            c ? b[1] : "", B = "w";
            be && (B = Pg() ? "s" : "o");
            de ? ("w" === B && (B = "x"), "o" === B && (B = "q")) : fe ? ("w" === B && (B = "y"), "o" === B && (B = "r")) : he && (B = "z");
            return "2" + B + x + (4 === Ud.Pc.length ? Ud.Pc.slice(1) : Ud.Pc) + A
        };

    function ch(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };var dh = function (a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };

    function eh() {
        return fb("iPhone") && !fb("iPod") && !fb("iPad")
    }

    function fh() {
        eh() || fb("iPad") || fb("iPod")
    };fb("Opera");
    fb("Trident") || fb("MSIE");
    fb("Edge");
    !fb("Gecko") || -1 != eb().toLowerCase().indexOf("webkit") && !fb("Edge") || fb("Trident") || fb("MSIE") || fb("Edge");
    -1 != eb().toLowerCase().indexOf("webkit") && !fb("Edge") && fb("Mobile");
    fb("Macintosh");
    fb("Windows");
    fb("Linux") || fb("CrOS");
    var gh = la.navigator || null;
    gh && (gh.appVersion || "").indexOf("X11");
    fb("Android");
    eh();
    fb("iPad");
    fb("iPod");
    fh();
    eb().toLowerCase().indexOf("kaios");
    var hh = function (a, b, c, d) {
        for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d;) {
            var g = a.charCodeAt(e - 1);
            if (38 == g || 63 == g) {
                var l = a.charCodeAt(e + f);
                if (!l || 61 == l || 38 == l || 35 == l) return e
            }
            e += f + 1
        }
        return -1
    }, ih = /#|$/, jh = function (a, b) {
        var c = a.search(ih), d = hh(a, 0, b, c);
        if (0 > d) return null;
        var e = a.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
    }, kh = /[?&]($|#)/, lh = function (a, b, c) {
        for (var d, e = a.search(ih), f = 0, g, l = []; 0 <= (g = hh(a, f, b, e));) l.push(a.substring(f,
            g)), f = Math.min(a.indexOf("&", g) + 1 || e, e);
        l.push(a.slice(f));
        d = l.join("").replace(kh, "$1");
        var m, n = null != c ? "=" + encodeURIComponent(String(c)) : "";
        var p = b + n;
        if (p) {
            var q, t = d.indexOf("#");
            0 > t && (t = d.length);
            var u = d.indexOf("?"), r;
            0 > u || u > t ? (u = t, r = "") : r = d.substring(u + 1, t);
            q = [d.slice(0, u), r, d.slice(t)];
            var v = q[1];
            q[1] = p ? v ? v + "&" + p : p : v;
            m = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
        } else m = d;
        return m
    };
    var mh = function (a, b) {
        if (a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    };

    function nh(a) {
        if (!a || !F.head) return null;
        var b = oh("META");
        F.head.appendChild(b);
        b.httpEquiv = "origin-trial";
        b.content = a;
        return b
    }

    var ph = function () {
        if (E.top == E) return 0;
        var a = E.location.ancestorOrigins;
        if (a) return a[a.length - 1] == E.location.origin ? 1 : 2;
        var b;
        var c = E.top;
        try {
            var d;
            if (d = !!c && null != c.location.href) b:{
                try {
                    Ef(c.foo);
                    d = !0;
                    break b
                } catch (e) {
                }
                d = !1
            }
            b = d
        } catch (e) {
            b = !1
        }
        return b ? 1 : 2
    }, oh = function (a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    };

    function qh(a, b, c) {
        a.google_image_requests || (a.google_image_requests = []);
        var d = oh("IMG", a.document);
        if (c) {
            var e = function () {
                if (c) {
                    var f = a.google_image_requests, g = Za(f, d);
                    0 <= g && Array.prototype.splice.call(f, g, 1)
                }
                d.removeEventListener && d.removeEventListener("load", e, !1);
                d.removeEventListener && d.removeEventListener("error", e, !1)
            };
            dh(d, "load", e);
            dh(d, "error", e)
        }
        d.src = b;
        a.google_image_requests.push(d)
    }

    var sh = function (a) {
        var b;
        b = void 0 === b ? !1 : b;
        var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
        mh(a, function (d, e) {
            d && (c += "&" + e + "=" + encodeURIComponent(d))
        });
        rh(c, b)
    }, rh = function (a, b) {
        var c = window;
        b = void 0 === b ? !1 : b;
        c.fetch ? c.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors"
        }) : qh(c, a, void 0 === b ? !1 : b)
    };
    var th = function () {
    };
    var uh = function (a) {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    }, vh = function (a, b, c) {
        this.m = a;
        this.h = null;
        this.K = {};
        this.Ga = 0;
        this.P = void 0 === b ? 500 : b;
        this.D = void 0 === c ? !1 : c;
        this.B = null
    };
    ka(vh, th);
    vh.prototype.addEventListener = function (a) {
        var b = this, c = {internalBlockOnErrors: this.D}, d = lg(function () {
            return a(c)
        }), e = 0;
        -1 !== this.P && (e = setTimeout(function () {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.P));
        var f = function (g, l) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = uh(c), c.internalBlockOnErrors = b.D, l && 0 === c.internalErrorState || (c.tcString = "tcunavailable", l || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            wh(this, "addEventListener", f)
        } catch (g) {
            c.tcString =
                "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    vh.prototype.removeEventListener = function (a) {
        a && a.listenerId && wh(this, "removeEventListener", null, a.listenerId)
    };
    var yh = function (a, b, c) {
        var d;
        d = void 0 === d ? "755" : d;
        var e;
        a:{
            if (a.publisher && a.publisher.restrictions) {
                var f = a.publisher.restrictions[b];
                if (void 0 !== f) {
                    e = f[void 0 === d ? "755" : d];
                    break a
                }
            }
            e = void 0
        }
        var g = e;
        if (0 === g) return !1;
        var l = c;
        2 === c ? (l = 0, 2 === g && (l = 1)) : 3 === c && (l = 1, 1 === g && (l = 0));
        var m;
        if (0 === l) if (a.purpose && a.vendor) {
            var n = xh(a.vendor.consents, void 0 === d ? "755" : d);
            m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && xh(a.purpose.consents, b)
        } else m = !0; else m = 1 === l ? a.purpose && a.vendor ? xh(a.purpose.legitimateInterests,
            b) && xh(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
        return m
    }, xh = function (a, b) {
        return !(!a || !a[b])
    }, wh = function (a, b, c, d) {
        c || (c = function () {
        });
        if ("function" === typeof a.m.__tcfapi) {
            var e = a.m.__tcfapi;
            e(b, 2, c, d)
        } else if (zh(a)) {
            Ah(a);
            var f = ++a.Ga;
            a.K[f] = c;
            if (a.h) {
                var g = {};
                a.h.postMessage((g.__tcfapiCall = {command: b, version: 2, callId: f, parameter: d}, g), "*")
            }
        } else c({}, !1)
    }, zh = function (a) {
        if (a.h) return a.h;
        var b;
        a:{
            for (var c = a.m, d = 0; 50 > d; ++d) {
                var e;
                try {
                    e = !(!c.frames || !c.frames.__tcfapiLocator)
                } catch (l) {
                    e =
                        !1
                }
                if (e) {
                    b = c;
                    break a
                }
                var f;
                b:{
                    try {
                        var g = c.parent;
                        if (g && g != c) {
                            f = g;
                            break b
                        }
                    } catch (l) {
                    }
                    f = null
                }
                if (!(c = f)) break
            }
            b = null
        }
        a.h = b;
        return a.h
    }, Ah = function (a) {
        a.B || (a.B = function (b) {
            try {
                var c;
                c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.K[c.callId](c.returnValue, c.success)
            } catch (d) {
            }
        }, dh(a.m, "message", a.B))
    }, Bh = function (a) {
        if (!1 === a.gdprApplies) return !0;
        void 0 === a.internalErrorState && (a.internalErrorState = uh(a));
        return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ?
            (sh({e: String(a.internalErrorState)}), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
    };
    var Ch = !0;
    Ch = !1;
    var Dh = {1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3}, Eh = ch("", 550), Fh = ch("", 500);

    function Gh() {
        var a = Vd.tcf || {};
        return Vd.tcf = a
    }

    var Lh = function () {
        var a = Gh(), b = new vh(E, Ch ? 3E3 : -1);
        if (!0 === E.gtag_enable_tcf_support && !a.active && ("function" === typeof E.__tcfapi || "function" === typeof b.m.__tcfapi || null != zh(b))) {
            a.active = !0;
            a.hd = {};
            Hh();
            var c = null;
            Ch ? c = E.setTimeout(function () {
                Ih(a);
                Jh(a);
                c = null
            }, Fh) : a.tcString = "tcunavailable";
            try {
                b.addEventListener(function (d) {
                    c && (clearTimeout(c), c = null);
                    if (0 !== d.internalErrorState) Ih(a), Jh(a); else {
                        var e;
                        a.gdprApplies = d.gdprApplies;
                        if (!1 === d.gdprApplies) e = Kh(), b.removeEventListener(d); else if ("tcloaded" ===
                            d.eventStatus || "useractioncomplete" === d.eventStatus || "cmpuishown" === d.eventStatus) {
                            var f = {}, g;
                            for (g in Dh) if (Dh.hasOwnProperty(g)) if ("1" === g) {
                                var l, m = d, n = !0;
                                n = void 0 === n ? !1 : n;
                                l = Bh(m) ? !1 === m.gdprApplies || "tcunavailable" === m.tcString || void 0 === m.gdprApplies && !n || "string" !== typeof m.tcString || !m.tcString.length ? !0 : yh(m, "1", 0) : !1;
                                f["1"] = l
                            } else f[g] = yh(d, g, Dh[g]);
                            e = f
                        }
                        e && (a.tcString = d.tcString || "tcempty", a.hd = e, Jh(a))
                    }
                })
            } catch (d) {
                c && (clearTimeout(c), c = null), Ih(a), Jh(a)
            }
        }
    };

    function Ih(a) {
        a.type = "e";
        a.tcString = "tcunavailable";
        Ch && (a.hd = Kh())
    }

    function Hh() {
        var a = {}, b = (a.ad_storage = "denied", a.wait_for_update = Eh, a);
        bg(b)
    }

    function Kh() {
        var a = {}, b;
        for (b in Dh) Dh.hasOwnProperty(b) && (a[b] = !0);
        return a
    }

    function Jh(a) {
        var b = {}, c = (b.ad_storage = a.hd["1"] ? "granted" : "denied", b);
        dg(c, {eventId: 0}, {gdprApplies: a ? a.gdprApplies : void 0, tcString: Mh()})
    }

    var Mh = function () {
        var a = Gh();
        return a.active ? a.tcString || "" : ""
    }, Nh = function () {
        var a = Gh();
        return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
    }, Oh = function (a) {
        if (!Dh.hasOwnProperty(String(a))) return !0;
        var b = Gh();
        return b.active && b.hd ? !!b.hd[String(a)] : !0
    };
    var Ph = ["L", "S", "Y"], Qh = ["S", "E"], Rh = {sampleRate: "0.005000", Kh: "", Jh: Number("5"), Ih: Number("")},
        Sh = 0 <= F.location.search.indexOf("?gtm_latency=") || 0 <= F.location.search.indexOf("&gtm_latency="), Th;
    if (!(Th = Sh)) {
        var Uh = Math.random(), Vh = Rh.sampleRate;
        Th = Uh < Vh
    }
    var Wh = Th, Xh = "https://www.googletagmanager.com/a?id=" + Qg.M + "&cv=1",
        Yh = {label: Qg.M + " Container", children: [{label: "Initialization", children: []}]};

    function Zh() {
        return [Xh, "&v=3&t=t", "&pid=" + sa(), "&rv=" + Ud.Pc].join("")
    }

    var $h = Zh();

    function ai() {
        $h = Zh()
    }

    var bi = {}, ci = "", di = "", ei = "", fi = "", gi = [], hi = "", ii = {}, ji = !1, ki = {}, li = {}, mi = {},
        ni = "", oi = void 0, pi = {}, qi = {}, ri = void 0, si = 5;
    0 < Rh.Jh && (si = Rh.Jh);
    var ti = function (a, b) {
        for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
        return {
            zj: function () {
                return c < a ? !1 : z() - d[c % a] < b
            }, Xj: function () {
                var f = c++ % a;
                d[f] = z()
            }
        }
    }(si, 1E3), ui = 1E3, vi = "";

    function wi(a, b) {
        var c = oi;
        if (void 0 === c) return "";
        var d = Ya("GTM"), e = Ya("TAGGING"), f = Ya("HEALTH"), g = $h, l = bi[c] ? "" : "&es=1", m = pi[c], n = xi(c),
            p = yi(), q = ci, t = di, u = ni, r = zi(a), v = ei, w = fi, y = Ai(a, b), x;
        return [g, l, m, n, d ? "&u=" + d : "", e ? "&ut=" + e : "", f ? "&h=" + f : "", p, q, t, u, r, v, w, y, x, hi ? "&dl=" + encodeURIComponent(hi) : "", 0 < gi.length ? "&tdp=" + gi.join(".") :
            "", Ud.Xe ? "&x=" + Ud.Xe : "", "&z=0"].join("")
    }

    function Ci(a) {
        ri && (E.clearTimeout(ri), ri = void 0);
        if (void 0 !== oi && (!bi[oi] || ci || di || Di(a))) if (void 0 === Ei[oi] && (qi[oi] || ti.zj() || 0 >= ui--)) P(1), qi[oi] = !0; else {
            void 0 === Ei[oi] && ti.Xj();
            var b = wi(!0, a);
            a ? Eb(b) : xb(b);
            if (fi || hi && 0 < gi.length) {
                var c = b.replace("/a?", "/td?");
                xb(c)
            }
            bi[oi] = !0;
            hi = fi = ei = ni = di = ci = "";
            gi = []
        }
    }

    function Fi() {
        ri || (ri = E.setTimeout(Ci, 500))
    }

    function Gi(a) {
        var b = String(a[Mb.Ra] || "").replace(/_/g, "");
        0 === b.indexOf("cvt") && (b = "cvt");
        return b
    }

    function Hi(a) {
        return a.match(/^(gtm|gtag)\./) ? encodeURIComponent(a) : "*"
    }

    function Ii() {
        2022 <= wi().length && Ci()
    }

    function yi() {
        return "&tc=" + mc.filter(function (a) {
            return a
        }).length
    }

    var Ki = function (a, b) {
        if (Wh && !qi[a] && oi !== a) {
            Ci();
            oi = a;
            ei = ci = "";
            pi[a] = "&e=" + Hi(b) + "&eid=" + a;
            Fi();
        }
    }, Li = function (a, b, c, d) {
        if (Wh && b) {
            var e = Gi(b), f = c + e;
            if (!qi[a]) {
                a !== oi && (Ci(), oi = a);
                ci = ci ? ci + "." + f : "&tr=" + f;
                var g = b["function"];
                if (!g) throw Error("Error: No function name given for function call.");
                var l = (oc[g] ? "1" : "2") + e;
                ei = ei ? ei + "." + l : "&ti=" + l;
                Fi();
                Ii()
            }
        }
    }, Mi = function (a, b, c) {
        if (Wh && a && a[Mb.Qc]) {
            var d = b + "." + a[Mb.Qc];
            mi[d] = c;
            "html" == Gi(a) && vi == d && (ci += ":" + Math.floor(c))
        }
    };

    function zi(a) {
    }

    function xi(a) {
    }

    var Ti = function (a, b, c) {
            if (Wh && void 0 !== a && !qi[a]) {
                a !== oi && (Ci(), oi = a);
                var d = c + b;
                di = di ? di + "." + d : "&epr=" + d;
                Fi();
                Ii()
            }
        }, Ui = function (a, b, c) {
        }, Vi = ["S", "P", "C", "Z"], Wi = {}, Xi = (Wi[1] = 5, Wi[2] = 5, Wi[3] = 5, Wi), Yi = {}, Ei = {}, Bi = void 0,
        Zi = function (a, b) {
            var c = !1;
            if (!Wh || Ei[a] || 0 === Xi[b]) return !1;
            --Xi[b];
            Ei[a] = b;
            c = !0;
            return c
        }, $i = function (a, b, c) {
            if (!Wh || !Ei[a]) return;
            var d = Yi[a];
            d || (Yi[a] = d = {});
            d[b] = c;
        };

    function Ai(a, b) {
        var c;
        if (!oi || !Di(b)) return "";
        var d = Yi[oi];
        c = "&al=" + Vi.filter(function (e) {
            return void 0 !== d[e]
        }).map(function (e) {
            return e + Math.floor(d[e])
        }).join(".") + (".Z" + Ei[oi]);
        a && delete Yi[oi];
        return c
    }

    function Di(a) {
        var b = !1;
        if (!oi || !Yi[oi]) return !1;
        b = a || "C" in Yi[oi];
        return b
    }

    var aj = function () {
        if (Wh) {
            E.setInterval(ai, 864E5);
            yb(E, "pagehide", function () {
                oi && Ei[oi] && Ci(!0);
                for (var a in Yi) Yi.hasOwnProperty(a) && (oi = Number(a), Ci(!0));
            });
        }
    };
    gb();
    eh() || fb("iPod");
    fb("iPad");
    !fb("Android") || hb() || gb() || fb("Opera") || fb("Silk");
    hb();
    !fb("Safari") || hb() || fb("Coast") || fb("Opera") || fb("Edge") || fb("Edg/") || fb("OPR") || gb() || fb("Silk") || fb("Android") || fh();
    var bj = {}, cj = null, dj = function (a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        var f = 4;
        void 0 === f && (f = 0);
        if (!cj) {
            cj = {};
            for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), l = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; 5 > m; m++) {
                var n = g.concat(l[m].split(""));
                bj[m] = n;
                for (var p = 0; p < n.length; p++) {
                    var q = n[p];
                    void 0 === cj[q] && (cj[q] = p)
                }
            }
        }
        for (var t = bj[f], u = Array(Math.floor(b.length / 3)), r = t[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
            var y = b[v],
                x = b[v + 1], A = b[v + 2], B = t[y >> 2], C = t[(y & 3) << 4 | x >> 4], H = t[(x & 15) << 2 | A >> 6],
                I = t[A & 63];
            u[w++] = "" + B + C + H + I
        }
        var D = 0, K = r;
        switch (b.length - v) {
            case 2:
                D = b[v + 1], K = t[(D & 15) << 2] || r;
            case 1:
                var N = b[v];
                u[w] = "" + t[N >> 2] + t[(N & 3) << 4 | D >> 4] + K + r
        }
        return u.join("")
    };
    var ej = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function fj() {
        var a;
        return null != (a = E.google_tag_data) ? a : E.google_tag_data = {}
    }

    function gj() {
        var a = E.google_tag_data, b;
        if (null != a && a.uach) {
            var c = a.uach, d = Object.assign({}, c);
            c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
            b = d
        } else b = null;
        return b
    }

    function hj() {
        var a, b;
        return null != (b = null == (a = E.google_tag_data) ? void 0 : a.uach_promise) ? b : null
    }

    function ij() {
        var a, b;
        return "function" === typeof (null == (a = E.navigator) ? void 0 : null == (b = a.userAgentData) ? void 0 : b.getHighEntropyValues)
    }

    function jj() {
        if (!ij()) return null;
        var a = fj();
        if (a.uach_promise) return a.uach_promise;
        var b = E.navigator.userAgentData.getHighEntropyValues(ej).then(function (c) {
            null != a.uach || (a.uach = c);
            return c
        });
        return a.uach_promise = b
    };

    function pj(a, b, c, d) {
        var e, f = Number(null != a.Ta ? a.Ta : void 0);
        0 !== f && (e = new Date((b || z()) + 1E3 * (f || 7776E3)));
        return {path: a.path, domain: a.domain, flags: a.flags, encode: !!c, expires: e, rb: d}
    };var qj = ["1"], rj = {}, sj = {}, Kj = function (a) {
        return rj[Jj(a)]
    }, Nj = function (a, b) {
        b = void 0 === b ? !0 : b;
        var c = Jj(a.prefix);
        if (!rj[c] && !Lj(c, a.path, a.domain) && b) {
            var d = Jj(a.prefix), e = Jg();
            if (0 === Mj(d, e, a)) {
                var f = pb("google_tag_data", {});
                f._gcl_au ? Wa("GTM", 57) : f._gcl_au = e
            }
            Lj(c, a.path, a.domain)
        }
    };

    function Mj(a, b, c, d) {
        var e = Ng(b, "1", c.domain, c.path), f = pj(c, d);
        f.rb = "ad_storage";
        return Fg(a, e, f)
    }

    function Lj(a, b, c) {
        var d = Mg(a, b, c, qj, "ad_storage");
        if (!d) return !1;
        var e = d.split(".");
        5 === e.length ? (rj[a] = e.slice(0, 2).join("."), sj[a] = {
            id: e.slice(2, 4).join("."),
            ph: Number(e[4]) || 0
        }) : 3 === e.length ? sj[a] = {id: e.slice(0, 2).join("."), ph: Number(e[2]) || 0} : rj[a] = d;
        return !0
    }

    function Jj(a) {
        return (a || "_gcl") + "_au"
    };var Oj;
    var Sj = function () {
        var a = Pj, b = Qj, c = Rj(), d = function (g) {
            a(g.target || g.srcElement || {})
        }, e = function (g) {
            b(g.target || g.srcElement || {})
        };
        if (!c.init) {
            yb(F, "mousedown", d);
            yb(F, "keyup", d);
            yb(F, "submit", e);
            var f = HTMLFormElement.prototype.submit;
            HTMLFormElement.prototype.submit = function () {
                b(this);
                f.call(this)
            };
            c.init = !0
        }
    }, Tj = function (a, b, c, d, e) {
        var f = {callback: a, domains: b, fragment: 2 === c, placement: c, forms: d, sameHost: e};
        Rj().decorators.push(f)
    }, Uj = function (a, b, c) {
        for (var d = Rj().decorators, e = {}, f = 0; f < d.length; ++f) {
            var g =
                d[f], l;
            if (l = !c || g.forms) a:{
                var m = g.domains, n = a, p = !!g.sameHost;
                if (m && (p || n !== F.location.hostname)) for (var q = 0; q < m.length; q++) if (m[q] instanceof RegExp) {
                    if (m[q].test(n)) {
                        l = !0;
                        break a
                    }
                } else if (0 <= n.indexOf(m[q]) || p && 0 <= m[q].indexOf(n)) {
                    l = !0;
                    break a
                }
                l = !1
            }
            if (l) {
                var t = g.placement;
                void 0 == t && (t = g.fragment ? 2 : 1);
                t === b && Ga(e, g.callback())
            }
        }
        return e
    };

    function Rj() {
        var a = pb("google_tag_data", {}), b = a.gl;
        b && b.decorators || (b = {decorators: []}, a.gl = b);
        return b
    };var Vj = /(.*?)\*(.*?)\*(.*)/, Wj = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        Xj = /^(?:www\.|m\.|amp\.)+/, Yj = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function Zj(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }

    var bk = function (a) {
        var b = [], c;
        for (c in a) if (a.hasOwnProperty(c)) {
            var d = a[c];
            void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(Ta(String(d))))
        }
        var e = b.join("*");
        return ["1", ak(e), e].join("*")
    };

    function ak(a, b) {
        var c = [E.navigator.userAgent, (new Date).getTimezoneOffset(), nb.userLanguage || nb.language, Math.floor(z() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
            d;
        if (!(d = Oj)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var g = f, l = 0; 8 > l; l++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        Oj = d;
        for (var m = 4294967295, n = 0; n < c.length; n++) m = m >>> 8 ^ Oj[(m ^ c.charCodeAt(n)) & 255];
        return ((m ^ -1) >>> 0).toString(36)
    }

    function ck() {
        return function (a) {
            var b = Ve(E.location.href), c = b.search.replace("?", ""), d = Qe(c, "_gl", !0) || "";
            a.query = dk(d) || {};
            var e = Te(b, "fragment").match(Zj("_gl"));
            a.fragment = dk(e && e[3] || "") || {}
        }
    }

    function ek(a, b) {
        var c = Zj(a).exec(b), d = b;
        if (c) {
            var e = c[2], f = c[4];
            d = c[1];
            f && (d = d + e + f)
        }
        return d
    }

    var fk = function (a, b) {
        b || (b = "_gl");
        var c = Yj.exec(a);
        if (!c) return "";
        var d = c[1], e = ek(b, (c[2] || "").slice(1)), f = ek(b, (c[3] || "").slice(1));
        e.length && (e = "?" + e);
        f.length && (f = "#" + f);
        return "" + d + e + f
    }, gk = function (a) {
        var b = ck(), c = Rj();
        c.data || (c.data = {query: {}, fragment: {}}, b(c.data));
        var d = {}, e = c.data;
        e && (Ga(d, e.query), a && Ga(d, e.fragment));
        return d
    }, dk = function (a) {
        try {
            var b = hk(a, 3);
            if (void 0 !== b) {
                for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                    var f = d[e], g = Ua(d[e + 1]);
                    c[f] = g
                }
                Wa("TAGGING", 6);
                return c
            }
        } catch (l) {
            Wa("TAGGING",
                8)
        }
    };

    function hk(a, b) {
        if (a) {
            var c;
            a:{
                for (var d = a, e = 0; 3 > e; ++e) {
                    var f = Vj.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var g = c;
            if (g && "1" === g[1]) {
                var l = g[3], m;
                a:{
                    for (var n = g[2], p = 0; p < b; ++p) if (n === ak(l, p)) {
                        m = !0;
                        break a
                    }
                    m = !1
                }
                if (m) return l;
                Wa("TAGGING", 7)
            }
        }
    }

    function ik(a, b, c, d) {
        function e(p) {
            p = ek(a, p);
            var q = p.charAt(p.length - 1);
            p && "&" !== q && (p += "&");
            return p + n
        }

        d = void 0 === d ? !1 : d;
        var f = Yj.exec(c);
        if (!f) return "";
        var g = f[1], l = f[2] || "", m = f[3] || "", n = a + "=" + b;
        d ? m = "#" + e(m.substring(1)) : l = "?" + e(l.substring(1));
        return "" + g + l + m
    }

    function jk(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(), d = Uj(b, 1, c), e = Uj(b, 2, c), f = Uj(b, 3, c);
        if (Ha(d)) {
            var g = bk(d);
            c ? kk("_gl", g, a) : lk("_gl", g, a, !1)
        }
        if (!c && Ha(e)) {
            var l = bk(e);
            lk("_gl", l, a, !0)
        }
        for (var m in f) if (f.hasOwnProperty(m)) a:{
            var n = m, p = f[m], q = a;
            if (q.tagName) {
                if ("a" === q.tagName.toLowerCase()) {
                    lk(n, p, q);
                    break a
                }
                if ("form" === q.tagName.toLowerCase()) {
                    kk(n, p, q);
                    break a
                }
            }
            "string" == typeof q && ik(n, p, q)
        }
    }

    function lk(a, b, c, d) {
        if (c.href) {
            var e = ik(a, b, c.href, void 0 === d ? !1 : d);
            db.test(e) && (c.href = e)
        }
    }

    function kk(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var l = e[g];
                    if (l.name === a) {
                        l.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var m = F.createElement("input");
                    m.setAttribute("type", "hidden");
                    m.setAttribute("name", a);
                    m.setAttribute("value", b);
                    c.appendChild(m)
                }
            } else if ("post" === d) {
                var n = ik(a, b, c.action);
                db.test(n) && (c.action = n)
            }
        }
    }

    function Pj(a) {
        try {
            var b;
            a:{
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || jk(e, e.hostname)
            }
        } catch (g) {
        }
    }

    function Qj(a) {
        try {
            if (a.action) {
                var b = Te(Ve(a.action), "host");
                jk(a, b)
            }
        } catch (c) {
        }
    }

    var mk = function (a, b, c, d) {
        Sj();
        Tj(a, b, "fragment" === c ? 2 : 1, !!d, !1)
    }, nk = function (a, b) {
        Sj();
        Tj(a, [Se(E.location, "host", !0)], b, !0, !0)
    }, ok = function () {
        var a = F.location.hostname, b = Wj.exec(F.referrer);
        if (!b) return !1;
        var c = b[2], d = b[1], e = "";
        if (c) {
            var f = c.split("/"), g = f[1];
            e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
        } else if (d) {
            if (0 === d.indexOf("xn--")) return !1;
            e = d.replace(/-/g, ".").replace(/\.\./g, "-")
        }
        var l = a.replace(Xj, ""), m = e.replace(Xj, ""), n;
        if (!(n = l === m)) {
            var p = "." + m;
            n = l.substring(l.length - p.length,
                l.length) === p
        }
        return n
    }, pk = function (a, b) {
        return !1 === a ? !1 : a || b || ok()
    };
    var qk = {};
    var rk = function (a) {
        for (var b = [], c = F.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({Ef: f[1], value: f[2], timestamp: Number(f[2].split(".")[1]) || 0})
        }
        b.sort(function (g, l) {
            return l.timestamp - g.timestamp
        });
        return b
    };

    function sk(a, b) {
        var c = rk(a), d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].Ef] || (d[c[e].Ef] = []);
                var g = {version: f[0], timestamp: 1E3 * Number(f[1]), da: f[2]};
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].Ef].push(g)
            }
        }
        return d
    };var tk = /^\w+$/, uk = /^[\w-]+$/, vk = {aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb"},
        wk = function () {
            if (!Gf().h() || !Sf()) return !0;
            var a = Pf("ad_storage");
            return null == a ? !0 : !!a
        }, xk = function (a, b) {
            Rf("ad_storage") ? wk() ? a() : Xf(a, "ad_storage") : b ? Wa("TAGGING", 3) : Wf(function () {
                xk(a, !0)
            }, ["ad_storage"])
        }, zk = function (a) {
            return yk(a).map(function (b) {
                return b.da
            })
        }, yk = function (a) {
            var b = [];
            if (!mg(E) || !F.cookie) return b;
            var c = pg(a, F.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d =
                {od: d.od}, e++) {
                var f = Ak(c[e]);
                if (null != f) {
                    var g = f, l = g.version;
                    d.od = g.da;
                    var m = g.timestamp, n = g.labels, p = ra(b, function (q) {
                        return function (t) {
                            return t.da === q.od
                        }
                    }(d));
                    p ? (p.timestamp = Math.max(p.timestamp, m), p.labels = Bk(p.labels, n || [])) : b.push({
                        version: l,
                        da: d.od,
                        timestamp: m,
                        labels: n
                    })
                }
            }
            b.sort(function (q, t) {
                return t.timestamp - q.timestamp
            });
            return Ck(b)
        };

    function Bk(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
        return d
    }

    function Dk(a) {
        return a && "string" == typeof a && a.match(tk) ? a : "_gcl"
    }

    var Fk = function () {
        var a = Ve(E.location.href), b = Te(a, "query", !1, void 0, "gclid"), c = Te(a, "query", !1, void 0, "gclsrc"),
            d = Te(a, "query", !1, void 0, "wbraid"), e = Te(a, "query", !1, void 0, "dclid");
        if (!b || !c || !d) {
            var f = a.hash.replace("#", "");
            b = b || Qe(f, "gclid");
            c = c || Qe(f, "gclsrc");
            d = d || Qe(f, "wbraid")
        }
        return Ek(b, c, e, d)
    }, Ek = function (a, b, c, d) {
        var e = {}, f = function (g, l) {
            e[l] || (e[l] = []);
            e[l].push(g)
        };
        e.gclid = a;
        e.gclsrc = b;
        e.dclid = c;
        void 0 !== d && uk.test(d) && (e.gbraid = d, f(d, "gb"));
        if (void 0 !== a && a.match(uk)) switch (b) {
            case void 0:
                f(a,
                    "aw");
                break;
            case "aw.ds":
                f(a, "aw");
                f(a, "dc");
                break;
            case "ds":
                f(a, "dc");
                break;
            case "3p.ds":
                f(a, "dc");
                break;
            case "gf":
                f(a, "gf");
                break;
            case "ha":
                f(a, "ha")
        }
        c && f(c, "dc");
        return e
    }, Hk = function (a) {
        var b = Fk();
        xk(function () {
            Gk(b, !1, a)
        })
    };

    function Gk(a, b, c, d, e) {
        function f(w, y) {
            var x = Ik(w, g);
            x && (Fg(x, y, l), m = !0)
        }

        c = c || {};
        e = e || [];
        var g = Dk(c.prefix);
        d = d || z();
        var l = pj(c, d, !0);
        l.rb = "ad_storage";
        var m = !1, n = Math.round(d / 1E3), p = function (w) {
            var y = ["GCL", n, w];
            0 < e.length && y.push(e.join("."));
            return y.join(".")
        };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if ((void 0 == qk.enable_gbraid_cookie_write ? 0 : qk.enable_gbraid_cookie_write) && !m && a.gb) {
            var q = a.gb[0], t = Ik("gb", g),
                u = !1;
            if (!b) for (var r = yk(t), v = 0; v < r.length; v++) r[v].da === q && r[v].labels && 0 < r[v].labels.length && (u = !0);
            u || f("gb", p(q))
        }
    }

    var Kk = function (a, b) {
        var c = gk(!0);
        xk(function () {
            for (var d = Dk(b.prefix), e = 0; e < a.length; ++e) {
                var f = a[e];
                if (void 0 !== vk[f]) {
                    var g = Ik(f, d), l = c[g];
                    if (l) {
                        var m = Math.min(Jk(l), z()), n;
                        b:{
                            var p = m;
                            if (mg(E)) for (var q = pg(g, F.cookie, void 0, "ad_storage"), t = 0; t < q.length; ++t) if (Jk(q[t]) > p) {
                                n = !0;
                                break b
                            }
                            n = !1
                        }
                        if (!n) {
                            var u = pj(b, m, !0);
                            u.rb = "ad_storage";
                            Fg(g, l, u)
                        }
                    }
                }
            }
            Gk(Ek(c.gclid, c.gclsrc), !1, b)
        })
    }, Ik = function (a, b) {
        var c = vk[a];
        if (void 0 !== c) return b + c
    }, Jk = function (a) {
        return 0 !== Lk(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
            0) : 0
    };

    function Ak(a) {
        var b = Lk(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            da: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }

    function Lk(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !uk.test(a[2]) ? [] : a
    }

    var Mk = function (a, b, c, d, e) {
        if (qa(b) && mg(E)) {
            var f = Dk(e), g = function () {
                for (var l = {}, m = 0; m < a.length; ++m) {
                    var n = Ik(a[m], f);
                    if (n) {
                        var p = pg(n, F.cookie, void 0, "ad_storage");
                        p.length && (l[n] = p.sort()[p.length - 1])
                    }
                }
                return l
            };
            xk(function () {
                mk(g, b, c, d)
            })
        }
    }, Ck = function (a) {
        return a.filter(function (b) {
            return uk.test(b.da)
        })
    }, Nk = function (a, b) {
        if (mg(E)) {
            for (var c = Dk(b.prefix), d = {}, e = 0; e < a.length; e++) vk[a[e]] && (d[a[e]] = vk[a[e]]);
            xk(function () {
                k(d, function (f, g) {
                    var l = pg(c + g, F.cookie, void 0, "ad_storage");
                    l.sort(function (u,
                                     r) {
                        return Jk(r) - Jk(u)
                    });
                    if (l.length) {
                        var m = l[0], n = Jk(m), p = 0 !== Lk(m.split(".")).length ? m.split(".").slice(3) : [], q = {},
                            t;
                        t = 0 !== Lk(m.split(".")).length ? m.split(".")[2] : void 0;
                        q[f] = [t];
                        Gk(q, !0, b, n, p)
                    }
                })
            })
        }
    };

    function Ok(a, b) {
        for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
        return !1
    }

    var Pk = function (a) {
        function b(e, f, g) {
            g && (e[f] = g)
        }

        if (Sf()) {
            var c = Fk();
            if (Ok(c, a)) {
                var d = {};
                b(d, "gclid", c.gclid);
                b(d, "dclid", c.dclid);
                b(d, "gclsrc", c.gclsrc);
                b(d, "wbraid", c.gbraid);
                nk(function () {
                    return d
                }, 3);
                nk(function () {
                    var e = {};
                    return e._up = "1", e
                }, 1)
            }
        }
    }, Qk = function (a, b, c, d) {
        var e = [];
        c = c || {};
        if (!wk()) return e;
        var f = yk(a);
        if (!f.length) return e;
        for (var g = 0; g < f.length; g++) -1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
        if (d) return e;
        if (1 !== e[0]) {
            var l = f[0], m = f[0].timestamp, n = [l.version, Math.round(m /
                1E3), l.da].concat(l.labels || [], [b]).join("."), p = pj(c, m, !0);
            p.rb = "ad_storage";
            Fg(a, n, p)
        }
        return e
    };

    function Rk(a, b) {
        var c = Dk(b), d = Ik(a, c);
        if (!d) return 0;
        for (var e = yk(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f
    }

    function Sk(a) {
        var b = 0, c;
        for (c in a) for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    }

    var Tk = function (a) {
        var b = Math.max(Rk("aw", a), Sk(wk() ? sk() : {}));
        return Math.max(Rk("gb", a), Sk(wk() ? sk("_gac_gb", !0) : {})) > b
    };
    var Yk = /[A-Z]+/, Zk = /\s/, $k = function (a) {
        if (h(a)) {
            a = Ca(a);
            var b = a.indexOf("-");
            if (!(0 > b)) {
                var c = a.substring(0, b);
                if (Yk.test(c)) {
                    for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++) if (!d[e] || Zk.test(d[e]) && ("AW" !== c || 1 !== e)) return;
                    return {id: a, prefix: c, U: c + "-" + d[0], I: d}
                }
            }
        }
    }, bl = function (a) {
        for (var b = {}, c = 0; c < a.length; ++c) {
            var d = $k(a[c]);
            d && (b[d.id] = d)
        }
        al(b);
        var e = [];
        k(b, function (f, g) {
            e.push(g)
        });
        return e
    };

    function al(a) {
        var b = [], c;
        for (c in a) if (a.hasOwnProperty(c)) {
            var d = a[c];
            "AW" === d.prefix && d.I[1] && b.push(d.U)
        }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };var dl = function (a, b, c, d) {
        return (2 === cl() || d || "http:" != E.location.protocol ? a : b) + c
    }, cl = function () {
        var a = vb(), b;
        if (1 === a) a:{
            var c = je;
            c = c.toLowerCase();
            for (var d = "https://" + c, e = "http://" + c, f = 1, g = F.getElementsByTagName("script"), l = 0; l < g.length && 100 > l; l++) {
                var m = g[l].src;
                if (m) {
                    m = m.toLowerCase();
                    if (0 === m.indexOf(e)) {
                        b = 3;
                        break a
                    }
                    1 === f && 0 === m.indexOf(d) && (f = 2)
                }
            }
            b = f
        } else b = a;
        return b
    };
    var fl = function (a, b, c) {
            if (E[a.functionName]) return b.wf && G(b.wf), E[a.functionName];
            var d = el();
            E[a.functionName] = d;
            if (a.Xd) for (var e = 0; e < a.Xd.length; e++) E[a.Xd[e]] = E[a.Xd[e]] || el();
            a.me && void 0 === E[a.me] && (E[a.me] = c);
            ub(dl("https://", "http://", a.Df), b.wf, b.Lj);
            return d
        }, el = function () {
            var a = function () {
                a.q = a.q || [];
                a.q.push(arguments)
            };
            return a
        }, gl = {functionName: "_googWcmImpl", me: "_googWcmAk", Df: "www.gstatic.com/wcm/loader.js"},
        hl = {functionName: "_gaPhoneImpl", me: "ga_wpid", Df: "www.gstatic.com/gaphone/loader.js"},
        il = {Nh: "", Li: "5"}, jl = {
            functionName: "_googCallTrackingImpl",
            Xd: [hl.functionName, gl.functionName],
            Df: "www.gstatic.com/call-tracking/call-tracking_" + (il.Nh || il.Li) + ".js"
        }, kl = {}, ll = function (a, b, c, d) {
            P(22);
            if (c) {
                d = d || {};
                var e = fl(gl, d, a), f = {ak: a, cl: b};
                void 0 === d.fb && (f.autoreplace = c);
                e(2, d.fb, f, c, 0, Da(), d.options)
            }
        }, ml = function (a, b, c, d) {
            P(21);
            if (b && c) {
                d = d || {};
                for (var e = {countryNameCode: c, destinationNumber: b, retrievalTime: Da()}, f = 0; f < a.length; f++) {
                    var g = a[f];
                    kl[g.id] ||
                    (g && "AW" === g.prefix && !e.adData && 2 <= g.I.length ? (e.adData = {
                        ak: g.I[0],
                        cl: g.I[1]
                    }, kl[g.id] = !0) : g && "UA" === g.prefix && !e.gaData && (e.gaData = {gaWpid: g.U}, kl[g.id] = !0))
                }
                (e.gaData || e.adData) && fl(jl, d)(d.fb, e, d.options)
            }
        }, nl = function () {
            var a = !1;
            return a
        }, ol = function (a, b) {
            if (a) if (Pg()) {
            } else {
                if (h(a)) {
                    var c =
                        $k(a);
                    if (!c) return;
                    a = c
                }
                var d = void 0, e = !1, f = U(b, R.g.oi);
                if (f && qa(f)) {
                    d = [];
                    for (var g = 0; g < f.length; g++) {
                        var l = $k(f[g]);
                        l && (d.push(l), (a.id === l.id || a.id === a.U && a.U === l.U) && (e = !0))
                    }
                }
                if (!d || e) {
                    var m = U(b, R.g.ug), n;
                    if (m) {
                        qa(m) ? n = m : n = [m];
                        var p = U(b, R.g.rg), q = U(b, R.g.sg), t = U(b, R.g.vg), u = U(b, R.g.ni), r = p || q, v = 1;
                        "UA" !== a.prefix || d || (v = 5);
                        for (var w = 0; w < n.length; w++) if (w < v) if (d) ml(d, n[w], u, {
                            fb: r,
                            options: t
                        }); else if ("AW" === a.prefix && a.I[1]) nl() ? ml([a], n[w], u || "US", {
                            fb: r,
                            options: t
                        }) : ll(a.I[0], a.I[1], n[w], {fb: r, options: t});
                        else if ("UA" === a.prefix) if (nl()) ml([a], n[w], u || "US", {fb: r}); else {
                            var y = a.U, x = n[w], A = {fb: r};
                            P(23);
                            if (x) {
                                A = A || {};
                                var B = fl(hl, A, y), C = {};
                                void 0 !== A.fb ? C.receiver = A.fb : C.replace = x;
                                C.ga_wpid = y;
                                C.destination = x;
                                B(2, Da(), C)
                            }
                        }
                    }
                }
            }
        };
    var pl = function (a, b, c) {
        this.target = a;
        this.eventName = b;
        this.h = c;
        this.m = {};
        this.metadata = J(c.eventMetadata || {});
        this.H = !1
    }, ql = function (a, b, c) {
        var d = U(a.h, b);
        void 0 !== d ? a.m[b] = d : void 0 !== c && (a.m[b] = c)
    }, rl = function (a, b, c) {
        var d = Ce(a.target.U);
        return d && d.hasOwnProperty(b) ? d[b] : c
    };

    function sl(a) {
        return {
            getDestinationId: function () {
                return a.target.U
            }, getEventName: function () {
                return a.eventName
            }, setEventName: function (b) {
                return void (a.eventName = b)
            }, getHitData: function (b) {
                return a.m[b]
            }, setHitData: function (b, c) {
                return void (a.m[b] = c)
            }, setHitDataIfNotDefined: function (b, c) {
                void 0 === a.m[b] && (a.m[b] = c)
            }, copyToHitData: function (b, c) {
                ql(a, b, c)
            }, getMetadata: function (b) {
                return a.metadata[b]
            }, setMetadata: function (b, c) {
                return void (a.metadata[b] = c)
            }, abort: function () {
                return void (a.H = !0)
            }, getProcessedEvent: function () {
                return a
            },
            getFromEventContext: function (b) {
                return U(a.h, b)
            }
        }
    };var Ll = function (a, b, c, d, e, f, g, l, m, n, p, q) {
            this.eventId = a;
            this.priorityId = b;
            this.h = c;
            this.K = d;
            this.m = e;
            this.D = f;
            this.P = g;
            this.B = l;
            this.eventMetadata = m;
            this.O = n;
            this.N = p;
            this.C = q
        }, U = function (a, b, c) {
            if (void 0 !== a.h[b]) return a.h[b];
            if (void 0 !== a.K[b]) return a.K[b];
            if (void 0 !== a.m[b]) return a.m[b];
            Wh && Ml(a, a.D[b], a.P[b]) && (P(71), P(79));
            return void 0 !== a.D[b] ? a.D[b] : void 0 !== a.B[b] ? a.B[b] : c
        }, Nl = function (a) {
            function b(g) {
                for (var l = Object.keys(g), m = 0; m < l.length; ++m) c[l[m]] = 1
            }

            var c = {};
            b(a.h);
            b(a.K);
            b(a.m);
            b(a.D);
            if (Wh) for (var d = Object.keys(a.P), e = 0; e < d.length; e++) {
                var f = d[e];
                if ("event" !== f && "gtm" !== f && "tagTypeBlacklist" !== f && !c.hasOwnProperty(f)) {
                    P(71);
                    P(80);
                    break
                }
            }
            return Object.keys(c)
        }, Ol = function (a, b, c) {
            function d(m) {
                Kb(m) && k(m, function (n, p) {
                    f = !0;
                    e[n] = p
                })
            }

            var e = {}, f = !1;
            c && 1 !== c || (d(a.B[b]), d(a.D[b]), d(a.m[b]), d(a.K[b]));
            c && 2 !== c || d(a.h[b]);
            if (Wh) {
                var g = f, l = e;
                e = {};
                f = !1;
                c && 1 !== c || (d(a.B[b]), d(a.P[b]), d(a.m[b]), d(a.K[b]));
                c && 2 !== c || d(a.h[b]);
                if (f !== g || Ml(a, e, l)) P(71), P(81);
                f = g;
                e = l
            }
            return f ? e : void 0
        },
        Pl = function (a) {
            var b = [R.g.zc, R.g.xd, R.g.yd, R.g.zd, R.g.Ad, R.g.Bd, R.g.Cd], c = {}, d = !1, e = function (l) {
                for (var m = 0; m < b.length; m++) void 0 !== l[b[m]] && (c[b[m]] = l[b[m]], d = !0);
                return d
            };
            if (e(a.h) || e(a.K) || e(a.m)) return c;
            e(a.D);
            if (Wh) {
                var f = c, g = d;
                c = {};
                d = !1;
                e(a.P);
                Ml(a, c, f) && (P(71), P(82));
                c = f;
                d = g
            }
            if (d) return c;
            e(a.B);
            return c
        }, Ml = function (a, b, c) {
            if (!Wh) return !1;
            try {
                if (b === c) return !1;
                var d = Ib(b);
                if (d !== Ib(c) || !(Kb(b) && Kb(c) || "array" === d)) return !0;
                if ("array" === d) {
                    if (b.length !== c.length) return !0;
                    for (var e = 0; e < b.length; e++) if (Ml(a,
                        b[e], c[e])) return !0
                } else {
                    for (var f in c) if (!b.hasOwnProperty(f)) return !0;
                    for (var g in b) if (!c.hasOwnProperty(g) || Ml(a, b[g], c[g])) return !0
                }
            } catch (l) {
                P(72)
            }
            return !1
        }, Ql = function (a, b) {
            this.zi = a;
            this.Ai = b;
            this.D = {};
            this.Lg = {};
            this.h = {};
            this.K = {};
            this.m = {};
            this.Nc = {};
            this.B = {};
            this.kc = function () {
            };
            this.Ga = function () {
            };
            this.P = !1
        }, Rl = function (a, b) {
            a.D = b;
            return a
        }, Sl = function (a, b) {
            a.Lg = b;
            return a
        }, Tl = function (a, b) {
            a.h = b;
            return a
        }, Ul = function (a, b) {
            a.K = b;
            return a
        }, Vl = function (a, b) {
            a.m = b;
            return a
        }, Wl = function (a,
                          b) {
            a.Nc = b;
            return a
        }, Xl = function (a, b) {
            a.B = b || {};
            return a
        }, Yl = function (a, b) {
            a.kc = b;
            return a
        }, Zl = function (a, b) {
            a.Ga = b;
            return a
        }, $l = function (a) {
            a.P = !0;
            return a
        }, am = function (a) {
            return new Ll(a.zi, a.Ai, a.D, a.Lg, a.h, a.K, a.m, a.Nc, a.B, a.kc, a.Ga, a.P)
        };

    function em() {
        return "attribution-reporting"
    }

    function fm(a) {
        var b;
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a))
    };var gm = !1;

    function hm() {
        if (fm("join-ad-interest-group") && oa(nb.joinAdInterestGroup)) return !0;
        gm || (nh('A751Xsk4ZW3DVQ8WZng2Dk5s3YzAyqncTzgv+VaE6wavgTY0QHkDvUTET1o7HanhuJO8lgv1Vvc88Ij78W1FIAAAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), gm = !0);
        return fm("join-ad-interest-group") && oa(nb.joinAdInterestGroup)
    }

    function im(a, b) {
        var c = void 0;
        try {
            c = F.querySelector('iframe[data-tagging-id="' + b + '"]')
        } catch (e) {
        }
        if (c) {
            var d = Number(c.dataset.loadTime);
            if (d && 6E4 > z() - d) {
                Wa("TAGGING", 9);
                return
            }
        } else try {
            if (50 <= F.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                Wa("TAGGING", 10);
                return
            }
        } catch (e) {
        }
        wb(a, void 0, {allow: "join-ad-interest-group"}, {taggingId: b, loadTime: z()}, c)
    }

    function jm() {
        return O(60) ? "https://td.doubleclick.net" : "https://googleads.g.doubleclick.net"
    };var km = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
        lm = /^~?[\w-]+(?:\.~?[\w-]+)*$/, mm = /^\d+\.fls\.doubleclick\.net$/, nm = /;gac=([^;?]+)/,
        om = /;gacgb=([^;?]+)/, pm = /;gclaw=([^;?]+)/, qm = /;gclgb=([^;?]+)/;

    function rm(a, b) {
        if (mm.test(F.location.host)) {
            var c = F.location.href.match(b);
            return c && 2 == c.length && c[1].match(km) ? decodeURIComponent(c[1]) : ""
        }
        var d = [], e;
        for (e in a) {
            for (var f = [], g = a[e], l = 0; l < g.length; l++) f.push(g[l].da);
            d.push(e + ":" + f.join(","))
        }
        return 0 < d.length ? d.join(";") : ""
    }

    var sm = function (a, b, c) {
        var d = wk() ? sk("_gac_gb", !0) : {}, e = [], f = !1, g;
        for (g in d) {
            var l = Qk("_gac_gb_" + g, a, b, c);
            f = f || 0 !== l.length && l.some(function (m) {
                return 1 === m
            });
            e.push(g + ":" + l.join(","))
        }
        return {lj: f ? e.join(";") : "", kj: rm(d, om)}
    };

    function tm(a, b, c) {
        if (mm.test(F.location.host)) {
            var d = F.location.href.match(c);
            if (d && 2 == d.length && d[1].match(lm)) return [{da: d[1]}]
        } else return yk((a || "_gcl") + b);
        return []
    }

    var um = function (a) {
        return tm(a, "_aw", pm).map(function (b) {
            return b.da
        }).join(".")
    }, vm = function (a) {
        return tm(a, "_gb", qm).map(function (b) {
            return b.da
        }).join(".")
    }, wm = function (a, b) {
        var c = Qk((b && b.prefix || "_gcl") + "_gb", a, b);
        return 0 === c.length || c.every(function (d) {
            return 0 === d
        }) ? "" : c.join(".")
    };
    var xm = function () {
        if (oa(E.__uspapi)) {
            var a = "";
            try {
                E.__uspapi("getUSPData", 1, function (b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {
            }
            return a
        }
    };
    var gn = function (a, b) {
        var c, d = E.GooglebQhCsO;
        d || (d = {}, E.GooglebQhCsO = d);
        c = d;
        if (c[a]) return !1;
        c[a] = [];
        c[a][0] = b;
        return !0
    };
    var hn = function (a, b) {
        var c = jh(a, "fmt");
        if (b) {
            var d = jh(a, "random"), e = jh(a, "label") || "";
            if (!d) return !1;
            var f = dj(decodeURIComponent(e.replace(/\+/g, " ")) + ":" + decodeURIComponent(d.replace(/\+/g, " ")));
            if (!gn(f, b)) return !1
        }
        c && 4 != c && (a = lh(a, "rfmt", c));
        var g = lh(a, "fmt", 4);
        ub(g, function () {
            E.google_noFurtherRedirects && b && b.call && (E.google_noFurtherRedirects = null, b())
        }, void 0, void 0, F.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };
    var yn = function () {
        this.h = {}
    }, zn = function (a, b, c) {
        null != c && (a.h[b] = c)
    }, An = function (a) {
        return Object.keys(a.h).map(function (b) {
            return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b])
        }).join("&")
    }, Cn = function (a, b, c, d, e) {
    };

    function En(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return Ve("" + c + b).href
        }
    }

    function Fn(a, b) {
        return de || fe ? En(a, b) : void 0
    }

    function Gn() {
        return !!Ud.Vd && "SGTM_TOKEN" !== Ud.Vd.split("@@").join("")
    };var In = function (a, b, c, d) {
        if (!Hn() && !Xg(a)) {
            var e = c ? "/gtag/js" : "/gtm.js", f = "?id=" + encodeURIComponent(a) + "&l=" + Ud.fa,
                g = 0 === a.indexOf("GTM-");
            g || (f += "&cx=c");
            var l = Gn();
            l && (f += "&sign=" + Ud.Vd);
            var m = Fn(b, e + f);
            if (!m) {
                var n = Ud.ud + e;
                l && ob && g && (n = ob.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
                m = dl("https://", "http://", n + f)
            }
            Vg().container[a] = {state: 1, context: d};
            ub(m)
        }
    }, Jn = function (a, b, c) {
        var d;
        if (d = !Hn()) {
            var e = Vg().destination[a];
            d = !(e && e.state)
        }
        if (d) if (Yg()) Vg().destination[a] = {
            state: 0, transportUrl: b,
            context: c
        }, P(91); else {
            var f = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + Ud.fa + "&cx=c";
            Gn() && (f += "&sign=" + Ud.Vd);
            var g = Fn(b, f);
            g || (g = dl("https://", "http://", Ud.ud + f));
            Vg().destination[a] = {state: 1, context: c};
            ub(g)
        }
    };

    function Hn() {
        if (Pg()) {
            return !0
        }
        return !1
    };var Kn = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/), Ln = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        }, Mn = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        }, Nn = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" "),
        Qn = function (a) {
            var b = ve("gtm.allowlist") || ve("gtm.whitelist");
            b && P(9);
            be && (b = ["google", "gtagfl", "lcl", "zone"]);
            On && Pn() &&
            (b = [], window.console && window.console.log && window.console.log("GTM blocked. See go/13687728."));
            var c = b && Ia(Ba(b), Ln), d = ve("gtm.blocklist") || ve("gtm.blacklist");
            d || (d = ve("tagTypeBlacklist")) && P(3);
            d ? P(8) : d = [];
            Pn() && (d = Ba(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Ba(d).indexOf("google") && P(2);
            var e = d && Ia(Ba(d), Mn), f = {};
            return function (g) {
                var l = g && g[Mb.Ra];
                if (!l || "string" != typeof l) return !0;
                l = l.replace(/^_*/, "");
                if (void 0 !== f[l]) return f[l];
                var m = ne[l] || [], n = a(l, m);
                if (b) {
                    var p;
                    if (p = n) a:{
                        if (0 > c.indexOf(l)) if (m && 0 < m.length) for (var q = 0; q < m.length; q++) {
                            if (0 > c.indexOf(m[q])) {
                                P(11);
                                p = !1;
                                break a
                            }
                        } else {
                            p = !1;
                            break a
                        }
                        p = !0
                    }
                    n = p
                }
                var t = !1;
                if (d) {
                    var u = 0 <= e.indexOf(l);
                    if (u) t = u; else {
                        var r = ua(e, m || []);
                        r && P(10);
                        t = r
                    }
                }
                var v = !n || t;
                v || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (v = ua(e, Nn));
                return f[l] = v
            }
        }, On = !1;
    var Pn = function () {
        return Kn.test(E.location && E.location.hostname)
    };
    var Rn = {initialized: 11, complete: 12, interactive: 13}, Sn = {}, Tn = Object.freeze((Sn[R.g.xa] = !0, Sn)),
        Un = 0 <= F.location.search.indexOf("?gtm_diagnostics=") || 0 <= F.location.search.indexOf("&gtm_diagnostics="),
        Wn = function (a, b, c) {
            if (Wh && "config" === a && !(1 < $k(b).I.length)) {
                var d, e = pb("google_tag_data", {});
                e.td || (e.td = {});
                d = e.td;
                var f = J(c.D);
                J(c.h, f);
                var g = [], l;
                for (l in d) {
                    var m = Vn(d[l], f);
                    m.length && (Un && console.log(m), g.push(l))
                }
                if (g.length) {
                    if (g.length) {
                        var n = b + "*" + g.join(".");
                        fi = fi ? fi + "!" + n : "&tdc=" + n
                    }
                    Wa("TAGGING",
                        Rn[F.readyState] || 14)
                }
                d[b] = f
            }
        };

    function Xn(a, b) {
        var c = {}, d;
        for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }

    function Vn(a, b, c, d) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? "" : d;
        if (a === b) return [];
        var e = function (q, t) {
            var u = t[q];
            return void 0 === u ? Tn[q] : u
        }, f;
        for (f in Xn(a, b)) {
            var g = (d ? d + "." : "") + f, l = e(f, a), m = e(f, b), n = "object" === Ib(l) || "array" === Ib(l),
                p = "object" === Ib(m) || "array" === Ib(m);
            if (n && p) Vn(l, m, c, g); else if (n || p || l !== m) c[g] = !0
        }
        return Object.keys(c)
    };var Yn = !1, Zn = 0, $n = [];

    function ao(a) {
        if (!Yn) {
            var b = F.createEventObject, c = "complete" == F.readyState, d = "interactive" == F.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                Yn = !0;
                for (var e = 0; e < $n.length; e++) G($n[e])
            }
            $n.push = function () {
                for (var f = 0; f < arguments.length; f++) G(arguments[f]);
                return 0
            }
        }
    }

    function bo() {
        if (!Yn && 140 > Zn) {
            Zn++;
            try {
                F.documentElement.doScroll("left"), ao()
            } catch (a) {
                E.setTimeout(bo, 50)
            }
        }
    }

    var co = function (a) {
        Yn ? a() : $n.push(a)
    };
    var eo = function (a, b) {
        return {entityType: 1, indexInOriginContainer: a, nameInOriginContainer: b, originContainerId: Qg.M}
    };
    var go = function (a, b) {
        this.h = !1;
        this.D = [];
        this.K = {tags: []};
        this.P = !1;
        this.m = this.B = 0;
        fo(this, a, b)
    }, ho = function (a, b, c, d) {
        if (Yd.hasOwnProperty(b) || "__zone" === b) return -1;
        var e = {};
        Kb(d) && (e = J(d, e));
        e.id = c;
        e.status = "timeout";
        return a.K.tags.push(e) - 1
    }, io = function (a, b, c, d) {
        var e = a.K.tags[b];
        e && (e.status = c, e.executionTime = d)
    }, jo = function (a) {
        if (!a.h) {
            for (var b = a.D, c = 0; c < b.length; c++) b[c]();
            a.h = !0;
            a.D.length = 0
        }
    }, fo = function (a, b, c) {
        void 0 !== b && ko(a, b);
        c && E.setTimeout(function () {
            return jo(a)
        }, Number(c))
    }, ko =
        function (a, b) {
            var c = Fa(function () {
                return G(function () {
                    b(Qg.M, a.K)
                })
            });
            a.h ? c() : a.D.push(c)
        }, lo = function (a) {
        a.B++;
        return Fa(function () {
            a.m++;
            a.P && a.m >= a.B && jo(a)
        })
    }, mo = function (a) {
        a.P = !0;
        a.m >= a.B && jo(a)
    };
    var no = function () {
        function a(d) {
            return !pa(d) || 0 > d ? 0 : d
        }

        if (!Vd._li && E.performance && E.performance.timing) {
            var b = E.performance.timing.navigationStart, c = pa(we.get("gtm.start")) ? we.get("gtm.start") : 0;
            Vd._li = {cst: a(c - b), cbt: a(le - b)}
        }
    }, oo = function (a) {
        E.performance && E.performance.mark(Qg.M + "_" + a + "_start")
    }, po = function (a) {
        if (E.performance) {
            var b = Qg.M + "_" + a + "_start", c = Qg.M + "_" + a + "_duration";
            E.performance.measure(c, b);
            var d = E.performance.getEntriesByName(c)[0];
            E.performance.clearMarks(b);
            E.performance.clearMeasures(c);
            var e = Vd._p || {};
            void 0 === e[a] && (e[a] = d.duration, Vd._p = e);
            return d.duration
        }
    }, qo = function () {
        var a = Gb();
        if (void 0 !== a) {
            var b = Vd._p || {};
            b.PAGEVIEW = a;
            Vd._p = b
        }
    };
    var ro = {}, so = function () {
        return E.GoogleAnalyticsObject && E[E.GoogleAnalyticsObject]
    }, to = !1;
    var uo = function (a) {
        E.GoogleAnalyticsObject || (E.GoogleAnalyticsObject = a || "ga");
        var b = E.GoogleAnalyticsObject;
        if (E[b]) E.hasOwnProperty(b) || P(12); else {
            var c = function () {
                c.q = c.q || [];
                c.q.push(arguments)
            };
            c.l = Number(Da());
            E[b] = c
        }
        no();
        return E[b]
    }, vo = function (a) {
        if (Sf()) {
            var b = so();
            b(a + "require", "linker");
            b(a + "linker:passthrough", !0)
        }
    };

    function wo() {
        return E.GoogleAnalyticsObject || "ga"
    }

    var xo = function (a) {
    }, yo = function (a, b) {
        return function () {
            var c = so(), d = c && c.getByName && c.getByName(a);
            if (d) {
                var e = d.get("sendHitTask");
                d.set("sendHitTask", function (f) {
                    var g = f.get("hitPayload"), l = f.get("hitCallback"), m = 0 > g.indexOf("&tid=" + b);
                    m && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                    e(f);
                    m && (f.set("hitPayload",
                        g, !0), f.set("hitCallback", l, !0), f.set("_x_19", void 0, !0), e(f))
                })
            }
        }
    };

    function Do(a, b, c, d) {
        var e = mc[a], f = Eo(a, b, c, d);
        if (!f) return null;
        var g = vc(e[Mb.Wg], c, []);
        if (g && g.length) {
            var l = g[0];
            f = Do(l.index, {O: f, N: 1 === l.jh ? b.terminate : f, terminate: b.terminate}, c, d)
        }
        return f
    }

    function Eo(a, b, c, d) {
        function e() {
            if (f[Mb.Fi]) l(); else {
                var w = wc(f, c, []), y = w[Mb.Oh];
                if (null != y) for (var x = 0; x < y.length; x++) if (!eg(y[x])) {
                    l();
                    return
                }
                var A = ho(c.zb, String(f[Mb.Ra]), Number(f[Mb.Qc]), w[Mb.Gi]), B = !1;
                w.vtp_gtmOnSuccess = function () {
                    if (!B) {
                        B = !0;
                        var I = z() - H;
                        Li(c.id, mc[a], "5", I);
                        io(c.zb, A, "success", I);
                        g()
                    }
                };
                w.vtp_gtmOnFailure = function () {
                    if (!B) {
                        B = !0;
                        var I = z() - H;
                        Li(c.id, mc[a], "6", I);
                        io(c.zb, A, "failure", I);
                        l()
                    }
                };
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId = c.id;
                c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
                Li(c.id, f, "1");
                var C = function () {
                    var I = z() - H;
                    Li(c.id, f, "7", I);
                    io(c.zb, A, "exception", I);
                    B || (B = !0, l())
                };
                var H = z();
                try {
                    uc(w, {event: c, index: a, type: 1})
                } catch (I) {
                    C(I)
                }
            }
        }

        var f = mc[a], g = b.O, l = b.N, m = b.terminate;
        if (c.nf(f)) return null;
        var n = vc(f[Mb.Xg], c, []);
        if (n && n.length) {
            var p = n[0], q = Do(p.index, {O: g, N: l, terminate: m}, c, d);
            if (!q) return null;
            g = q;
            l = 2 === p.jh ? m : q
        }
        if (f[Mb.Sg] || f[Mb.Ii]) {
            var t = f[Mb.Sg] ? nc : c.lk, u = g, r = l;
            if (!t[a]) {
                e = Fa(e);
                var v = Fo(a, t, e);
                g = v.O;
                l = v.N
            }
            return function () {
                t[a](u, r)
            }
        }
        return e
    }

    function Fo(a, b, c) {
        var d = [], e = [];
        b[a] = Go(d, e, c);
        return {
            O: function () {
                b[a] = Ho;
                for (var f = 0; f < d.length; f++) d[f]()
            }, N: function () {
                b[a] = Io;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function Go(a, b, c) {
        return function (d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function Ho(a) {
        a()
    }

    function Io(a, b) {
        b()
    };var Ko = function (a, b) {
        return 1 === arguments.length ? Jo("config", a) : Jo("config", a, b)
    }, Lo = function (a, b, c) {
        c = c || {};
        c[R.g.xb] = a;
        return Jo("event", b, c)
    };

    function Jo(a) {
        return arguments
    }

    var Mo = function () {
        this.h = [];
        this.m = []
    };
    Mo.prototype.enqueue = function (a, b, c) {
        var d = this.h.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        c.eventId = b;
        c.fromContainerExecution = !0;
        c.priorityId = d;
        var e = {message: a, notBeforeEventId: b, priorityId: d, messageContext: c};
        this.h.push(e);
        for (var f = 0; f < this.m.length; f++) try {
            this.m[f](e)
        } catch (g) {
        }
    };
    Mo.prototype.listen = function (a) {
        this.m.push(a)
    };
    Mo.prototype.get = function () {
        for (var a = {}, b = 0; b < this.h.length; b++) {
            var c = this.h[b], d = a[c.notBeforeEventId];
            d || (d = [], a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    };
    Mo.prototype.prune = function (a) {
        for (var b = [], c = [], d = 0; d < this.h.length; d++) {
            var e = this.h[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e)
        }
        this.h = c;
        return b
    };
    var Oo = function (a, b, c) {
        No().enqueue(a, b, c)
    }, Qo = function () {
        var a = Po;
        No().listen(a)
    };

    function No() {
        var a = Vd.mb;
        a || (a = new Mo, Vd.mb = a);
        return a
    }

    var Yo = function (a) {
        var b = Vd.zones;
        return b ? b.getIsAllowedFn(Sg(), a) : function () {
            return !0
        }
    }, Zo = function (a) {
        var b = Vd.zones;
        return b ? b.isActive(Sg(), a) : !0
    };
    var bp = function (a, b) {
        for (var c = [], d = 0; d < mc.length; d++) if (a[d]) {
            var e = mc[d];
            var f = lo(b.zb);
            try {
                var g = Do(d, {O: f, N: f, terminate: f}, b, d);
                if (g) {
                    var l = c, m = l.push, n = d, p = e["function"];
                    if (!p) throw"Error: No function name given for function call.";
                    var q = oc[p];
                    m.call(l, {Fh: n, wh: q ? q.priorityOverride || 0 : 0, execute: g})
                } else $o(d, b), f()
            } catch (u) {
                f()
            }
        }
        c.sort(ap);
        for (var t = 0; t < c.length; t++) c[t].execute();
        return 0 < c.length
    };

    function ap(a, b) {
        var c, d = b.wh, e = a.wh;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c; else {
            var g = a.Fh, l = b.Fh;
            f = g > l ? 1 : g < l ? -1 : 0
        }
        return f
    }

    function $o(a, b) {
        if (Wh) {
            var c = function (d) {
                var e = b.nf(mc[d]) ? "3" : "4", f = vc(mc[d][Mb.Wg], b, []);
                f && f.length && c(f[0].index);
                Li(b.id, mc[d], e);
                var g = vc(mc[d][Mb.Xg], b, []);
                g && g.length && c(g[0].index)
            };
            c(a)
        }
    }

    var ep = !1, cp;
    var Hp = function (a) {
        var b = z(), c = a["gtm.uniqueEventId"], d = a["gtm.priorityId"], e = a.event;
        if ("gtm.js" === e) {
            if (ep) return !1;
            ep = !0;
        }
        var l, m = !1;
        if (Zo(c)) l = Yo(c); else {
            if ("gtm.js" !== e && "gtm.init" !== e && "gtm.init_consent" !== e) return !1;
            m = !0;
            l = Yo(Number.MAX_SAFE_INTEGER)
        }
        Ki(c, e);
        var n = a.eventCallback, p = a.eventTimeout,
            q = n;
        var t = {
            id: c, priorityId: d, name: e, nf: Qn(l), lk: [], qh: function () {
                P(6);
                Wa("HEALTH", 0)
            }, bh: fp(), dh: Ep(c), zb: new go(q, p)
        }, u = Ac(t);
        m && (u = Fp(u));
        var r = bp(u, t), v = !1;
        mo(t.zb);
        "gtm.js" !== e && "gtm.sync" !== e || xo(Qg.M);
        return Gp(u, r) || v
    };

    function Ep(a) {
        return function (b) {
            Wh && (Lb(b) || Ui(a, "input", b))
        }
    }

    function fp() {
        var a = {};
        a.event = ze("event", 1);
        a.ecommerce = ze("ecommerce", 1);
        a.gtm = ze("gtm");
        a.eventModel = ze("eventModel");
        return a
    }

    function Fp(a) {
        for (var b = [], c = 0; c < a.length; c++) if (a[c]) {
            var d = String(mc[c][Mb.Ra]);
            if (Xd[d] || void 0 !== mc[c][Mb.Ji] || oe[d]) b[c] = !0;
            O(58) || 0 !== mc[c][Mb.Ra].indexOf("__ccd") && 0 !== mc[c][Mb.Ra].indexOf("__ogt") && "__set_product_settings" !== mc[c][Mb.Ra] || (b[c] = !0)
        }
        return b
    }

    function Gp(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++) if (a[c] && mc[c] && !Yd[String(mc[c][Mb.Ra])]) return !0;
        return !1
    }

    var Jp = function (a, b, c, d) {
        Ip.push("event", [b, a], c, d)
    }, Kp = function (a, b, c, d) {
        Ip.push("get", [a, b], c, d)
    }, Lp = function () {
        this.status = 1;
        this.D = {};
        this.h = {};
        this.K = {};
        this.P = null;
        this.B = {};
        this.m = !1
    }, Mp = function (a, b, c, d) {
        var e = z();
        this.type = a;
        this.m = e;
        this.W = b || "";
        this.h = c;
        this.messageContext = d
    }, Np = function () {
        this.m = {};
        this.B = {};
        this.h = []
    }, Op = function (a, b) {
        var c = $k(b);
        return a.m[c.U] = a.m[c.U] || new Lp
    }, Pp = function (a, b, c, d) {
        if (d.W) {
            var e = Op(a, d.W), f = e.P;
            if (f) {
                var g = J(c), l = J(e.D[d.W]), m = J(e.B), n = J(e.h), p = J(a.B),
                    q = {};
                if (Wh) try {
                    q = J(se)
                } catch (v) {
                    P(72)
                }
                var t = $k(d.W).prefix, u = function (v) {
                        Ti(d.messageContext.eventId, t, v);
                        var w = g[R.g.Nb];
                        w && G(w)
                    },
                    r = am(Zl(Yl(Xl(Vl(Ul(Wl(Tl(Sl(Rl(new Ql(d.messageContext.eventId, d.messageContext.priorityId), g), l), m), n), p), q), d.messageContext.eventMetadata), function () {
                        if (u) {
                            var v = u;
                            u = void 0;
                            v("2")
                        }
                    }), function () {
                        if (u) {
                            var v = u;
                            u = void 0;
                            v("3")
                        }
                    }));
                try {
                    Ti(d.messageContext.eventId, t, "1"), Wn(d.type, d.W, r), f(d.W, b, d.m, r)
                } catch (v) {
                    Ti(d.messageContext.eventId, t, "4")
                }
            }
        }
    };
    Np.prototype.register = function (a, b, c) {
        var d = Op(this, a);
        3 !== d.status && (d.P = b, d.status = 3, c && (J(d.h, c), d.h = c), this.flush())
    };
    Np.prototype.push = function (a, b, c, d) {
        if (void 0 !== c) {
            if (!$k(c)) return;
            if (c) {
                var e = $k(c);
                e && 1 === Op(this, c).status && (Op(this, c).status = 2, this.push("require", [{}], e.U, {}))
            }
            Op(this, c).m && (d.deferrable = !1)
        }
        this.h.push(new Mp(a, c, b, d));
        d.deferrable || this.flush()
    };
    Np.prototype.flush = function (a) {
        for (var b = this, c = [], d = !1, e = {}; this.h.length;) {
            var f = this.h[0];
            if (f.messageContext.deferrable) !f.W || Op(this, f.W).m ? (f.messageContext.deferrable = !1, this.h.push(f)) : c.push(f), this.h.shift(); else {
                var g = void 0;
                switch (f.type) {
                    case "require":
                        g = Op(this, f.W);
                        if (3 !== g.status && !a) {
                            this.h.push.apply(this.h, c);
                            return
                        }
                        break;
                    case "set":
                        k(f.h[0], function (t, u) {
                            J(Ja(t, u), b.B)
                        });
                        break;
                    case "config":
                        g = Op(this, f.W);
                        e.hb = {};
                        k(f.h[0], function (t) {
                            return function (u, r) {
                                J(Ja(u, r), t.hb)
                            }
                        }(e));
                        var l = !!e.hb[R.g.Mc];
                        delete e.hb[R.g.Mc];
                        var m = $k(f.W), n = m.U === m.id;
                        l || (n ? g.B = {} : g.D[f.W] = {});
                        g.m && l || Pp(this, R.g.va, e.hb, f);
                        g.m = !0;
                        n ? J(e.hb, g.B) : (J(e.hb, g.D[f.W]), P(70));
                        d = !0;
                        break;
                    case "event":
                        g = Op(this, f.W);
                        e.nd = {};
                        k(f.h[0], function (t) {
                            return function (u, r) {
                                J(Ja(u, r), t.nd)
                            }
                        }(e));
                        Pp(this, f.h[1], e.nd, f);
                        break;
                    case "get":
                        g = Op(this, f.W);
                        var p = {}, q = (p[R.g.Qa] = f.h[0], p[R.g.ab] = f.h[1], p);
                        Pp(this, R.g.Ca, q, f)
                }
                this.h.shift();
                Qp(this, f)
            }
            e = {hb: e.hb, nd: e.nd}
        }
        this.h.push.apply(this.h, c);
        d && this.flush()
    };
    var Qp = function (a, b) {
        if ("require" !== b.type) if (b.W) for (var c = Op(a, b.W).K[b.type] || [], d = 0; d < c.length; d++) c[d](); else for (var e in a.m) if (a.m.hasOwnProperty(e)) {
            var f = a.m[e];
            if (f && f.K) for (var g = f.K[b.type] || [], l = 0; l < g.length; l++) g[l]()
        }
    }, Rp = function (a, b) {
        var c = Ip, d = J(b);
        J(Op(c, a).h, d);
        Op(c, a).h = d
    }, Ip = new Np;
    var Sp = {}, Tp = {}, Up = function (a) {
        for (var b = [], c = [], d = {}, e = 0; e < a.length; d = {sd: d.sd, pd: d.pd}, e++) {
            var f = a[e];
            if (0 <= f.indexOf("-")) {
                if (d.sd = $k(f), d.sd) {
                    var g = Tg();
                    ra(g, function (q) {
                        return function (t) {
                            return q.sd.U === t
                        }
                    }(d)) ? b.push(f) : c.push(f)
                }
            } else {
                var l = Sp[f] || [];
                d.pd = {};
                l.forEach(function (q) {
                    return function (t) {
                        return q.pd[t] = !0
                    }
                }(d));
                for (var m = Sg(), n = 0; n < m.length; n++) if (d.pd[m[n]]) {
                    b = b.concat(Tg());
                    break
                }
                var p = Tp[f] || [];
                p.length && (b = b.concat(p))
            }
        }
        return {Ij: b, Kj: c}
    }, Vp = function (a) {
        k(Sp, function (b, c) {
            var d =
                c.indexOf(a);
            0 <= d && c.splice(d, 1)
        })
    }, Wp = function (a) {
        k(Tp, function (b, c) {
            var d = c.indexOf(a);
            0 <= d && c.splice(d, 1)
        })
    };
    var Xp = "HA GF G UA AW DC MC".split(" "), Yp = !1, Zp = !1;

    function $p(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {value: pe()});
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {eventId: b.eventId, priorityId: b.priorityId}
    }

    var aq = {
        config: function (a, b) {
            var c = $p(a, b);
            if (!(2 > a.length) && h(a[1])) {
                var d = {};
                if (2 < a.length) {
                    if (void 0 != a[2] && !Kb(a[2]) || 3 < a.length) return;
                    d = a[2]
                }
                var e = $k(a[1]);
                if (e) {
                    Ki(c.eventId, "gtag.config");
                    var f = e.U, g = e.id !== f;
                    if (g ? -1 === Tg().indexOf(f) : -1 === Sg().indexOf(f)) {
                        if (!O(61) || !d[R.g.Md]) {
                            var l = d[R.g.na] || Ip.B[R.g.na];
                            g ? Jn(f, l, {
                                source: 2,
                                fromContainerExecution: b.fromContainerExecution
                            }) : In(f, l, !0, {source: 2, fromContainerExecution: b.fromContainerExecution})
                        }
                    } else {
                        if (ae && !g && !d[R.g.Mc]) {
                            var m = Zp;
                            Zp = !0;
                            if (m) return
                        }
                        Yp || P(43);
                        if (!b.noTargetGroup) if (g) {
                            Wp(e.id);
                            var n = e.id, p = d[R.g.Kd] || "default";
                            p = String(p).split(",");
                            for (var q = 0; q < p.length; q++) {
                                var t = Tp[p[q]] || [];
                                Tp[p[q]] = t;
                                0 > t.indexOf(n) && t.push(n)
                            }
                        } else {
                            Vp(e.id);
                            var u = e.id, r = d[R.g.Kd] || "default";
                            r = r.toString().split(",");
                            for (var v = 0; v < r.length; v++) {
                                var w = Sp[r[v]] || [];
                                Sp[r[v]] = w;
                                0 > w.indexOf(u) && w.push(u)
                            }
                        }
                        delete d[R.g.Kd];
                        var y = b.eventMetadata || {};
                        y.hasOwnProperty("is_external_event") || (y.is_external_event = !b.fromContainerExecution);
                        b.eventMetadata =
                            y;
                        delete d[R.g.Nb];
                        for (var x = g ? [e.id] : Tg(), A = 0; A < x.length; A++) {
                            var B = J(b);
                            Ip.push("config", [d], x[A], B)
                        }
                    }
                }
            }
        }, consent: function (a, b) {
            if (3 === a.length) {
                P(39);
                var c = $p(a, b), d = a[1];
                "default" === d ? bg(a[2]) : "update" === d && dg(a[2], c)
            }
        }, event: function (a, b) {
            var c = a[1];
            if (!(2 > a.length) && h(c)) {
                var d;
                if (2 < a.length) {
                    if (!Kb(a[2]) && void 0 != a[2] || 3 < a.length) return;
                    d = a[2]
                }
                var e = d, f = {}, g = (f.event = c, f);
                e && (g.eventModel = J(e), e[R.g.Nb] && (g.eventCallback = e[R.g.Nb]), e[R.g.Fd] && (g.eventTimeout = e[R.g.Fd]));
                var l = $p(a, b), m = l.eventId,
                    n = l.priorityId;
                g["gtm.uniqueEventId"] = m;
                n && (g["gtm.priorityId"] = n);
                if ("optimize.callback" === c) return g.eventModel = g.eventModel || {}, g;
                var p;
                var q = d, t = q && q[R.g.xb];
                void 0 === t && (t = ve(R.g.xb, 2), void 0 === t && (t = "default"));
                if (h(t) || qa(t)) {
                    var u = t.toString().replace(/\s+/g, "").split(","), r = Up(u), v = r.Ij, w = r.Kj;
                    if (w.length) for (var y = q && q[R.g.na] || Ip.B[R.g.na], x = 0; x < w.length; x++) {
                        var A = $k(w[x]);
                        A && Jn(A.U, y, {source: 3, fromContainerExecution: b.fromContainerExecution})
                    }
                    p = bl(v)
                } else p = void 0;
                var B = p;
                if (B) {
                    Ki(m,
                        c);
                    for (var C = [], H = 0; H < B.length; H++) {
                        var I = B[H], D = J(b);
                        if (-1 !== Xp.indexOf(I.prefix)) {
                            var K = J(d), N = D.eventMetadata || {};
                            N.hasOwnProperty("is_external_event") || (N.is_external_event = !D.fromContainerExecution);
                            D.eventMetadata = N;
                            delete K[R.g.Nb];
                            Jp(c, K, I.id, D)
                        }
                        C.push(I.id)
                    }
                    g.eventModel = g.eventModel || {};
                    0 < B.length ? g.eventModel[R.g.xb] = C.join() : delete g.eventModel[R.g.xb];
                    Yp || P(43);
                    return b.noGtmEvent ? void 0 : g
                }
            }
        }, get: function (a, b) {
            P(53);
            if (4 === a.length && h(a[1]) && h(a[2]) && oa(a[3])) {
                var c = $k(a[1]), d = String(a[2]),
                    e = a[3];
                if (c) {
                    Yp || P(43);
                    var f = Ip.B[R.g.na];
                    if (!ra(Tg(), function (l) {
                        return c.U === l
                    })) Jn(c.U, f, {
                        source: 4,
                        fromContainerExecution: b.fromContainerExecution
                    }); else if (-1 !== Xp.indexOf(c.prefix)) {
                        $p(a, b);
                        var g = {};
                        Yf(J((g[R.g.Qa] = d, g[R.g.ab] = e, g)));
                        Kp(d, function (l) {
                            G(function () {
                                return e(l)
                            })
                        }, c.id, b)
                    }
                }
            }
        }, js: function (a, b) {
            if (2 == a.length && a[1].getTime) {
                Yp = !0;
                var c = $p(a, b), d = c.eventId, e = c.priorityId, f = {};
                return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f
            }
        }, policy: function () {
        },
        set: function (a, b) {
            var c;
            2 == a.length && Kb(a[1]) ? c = J(a[1]) : 3 == a.length && h(a[1]) && (c = {}, Kb(a[2]) || qa(a[2]) ? c[a[1]] = J(a[2]) : c[a[1]] = a[2]);
            if (c) {
                var d = $p(a, b), e = d.eventId, f = d.priorityId;
                J(c);
                var g = J(c);
                Ip.push("set", [g], void 0, b);
                c["gtm.uniqueEventId"] = e;
                f && (c["gtm.priorityId"] = f);
                O(30) && delete c.event;
                b.overwriteModelFields = !0;
                return c
            }
        }
    }, bq = {policy: !0};
    var cq = function (a) {
        var b = E[Ud.fa].hide;
        if (b && void 0 !== b[a] && b.end) {
            b[a] = !1;
            var c = !0, d;
            for (d in b) if (b.hasOwnProperty(d) && !0 === b[d]) {
                c = !1;
                break
            }
            c && (b.end(), b.end = null)
        }
    }, dq = function (a) {
        var b = E[Ud.fa], c = b && b.hide;
        c && c.end && (c[a] = !0)
    };
    var eq = !1, fq = [];

    function gq() {
        if (!eq) {
            eq = !0;
            for (var a = 0; a < fq.length; a++) G(fq[a])
        }
    }

    var hq = function (a) {
        eq ? G(a) : fq.push(a)
    };
    var yq = function (a) {
        if (xq(a)) return a;
        this.h = a
    };
    yq.prototype.getUntrustedMessageValue = function () {
        return this.h
    };
    var xq = function (a) {
        return !a || "object" !== Ib(a) || Kb(a) ? !1 : "getUntrustedMessageValue" in a
    };
    yq.prototype.getUntrustedMessageValue = yq.prototype.getUntrustedMessageValue;
    var zq = 0, Aq = {}, Bq = [], Cq = [], Dq = !1, Eq = !1;

    function Fq(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }

    var Gq = function (a) {
        return E[Ud.fa].push(a)
    }, Hq = function (a, b) {
        var c = Vd[Ud.fa], d = c ? c.subscribers : 1, e = 0, f = !1, g = void 0;
        b && (g = E.setTimeout(function () {
            f || (f = !0, a());
            g = void 0
        }, b));
        return function () {
            ++e === d && (g && (E.clearTimeout(g), g = void 0), f || (a(), f = !0))
        }
    };

    function Iq(a, b) {
        var c = a._clear || b.overwriteModelFields;
        k(a, function (e, f) {
            "_clear" !== e && (c && ye(e), ye(e, f))
        });
        ke || (ke = a["gtm.start"]);
        var d = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        "number" !== typeof d && (d = pe(), a["gtm.uniqueEventId"] = d, ye("gtm.uniqueEventId", d));
        return Hp(a)
    }

    function Jq(a) {
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (xa(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b || "get" === b) return !0
        }
        return !1
    }

    function Kq() {
        var a;
        if (Cq.length) a = Cq.shift(); else if (Bq.length) a = Bq.shift(); else return;
        var b;
        var c = a;
        if (Dq || !Jq(c.message)) b = c; else {
            Dq = !0;
            var d = c.message["gtm.uniqueEventId"];
            "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = pe());
            var e = {}, f = {
                message: (e.event = "gtm.init_consent", e["gtm.uniqueEventId"] = d - 2, e),
                messageContext: {eventId: d - 2}
            }, g = {}, l = {
                message: (g.event = "gtm.init", g["gtm.uniqueEventId"] = d - 1, g),
                messageContext: {eventId: d - 1}
            };
            Bq.unshift(l, c);
            if (Wh && Qg.M) {
                var m;
                if (Qg.Ve) {
                    var n = Qg.M, p = Vg().destination[n];
                    m = p && p.context
                } else {
                    var q = Qg.M, t = Vg().container[q];
                    m = t && t.context
                }
                var u = m, r, v = Ve(E.location.href);
                r = v.hostname + v.pathname;
                var w = u && u.fromContainerExecution, y = u && u.source, x = Qg.M, A = Qg.Hb, B = Qg.Ve;
                hi || (hi = r);
                gi.push(x + ";" + A + ";" + (w ? 1 : 0) + ";" + (y || 0) + ";" + (B ? 1 : 0))
            }
            b = f
        }
        return b
    }

    function Lq() {
        for (var a = !1, b; !Eq && (b = Kq());) {
            Eq = !0;
            delete se.eventModel;
            ue();
            var c = b, d = c.message, e = c.messageContext;
            if (null == d) Eq = !1; else {
                if (e.fromContainerExecution) for (var f = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], g = 0; g < f.length; g++) {
                    var l = f[g], m = ve(l, 1);
                    if (qa(m) || Kb(m)) m = J(m);
                    te[l] = m
                }
                try {
                    if (oa(d)) try {
                        d.call(we)
                    } catch (C) {
                    } else if (qa(d)) {
                        var n =
                            d;
                        if (h(n[0])) {
                            var p = n[0].split("."), q = p.pop(), t = n.slice(1), u = ve(p.join("."), 2);
                            if (null != u) try {
                                u[q].apply(u, t)
                            } catch (C) {
                            }
                        }
                    } else {
                        var r = void 0, v = !1;
                        if (xa(d)) {
                            a:{
                                if (d.length && h(d[0])) {
                                    var w = aq[d[0]];
                                    if (w && (!e.fromContainerExecution || !bq[d[0]])) {
                                        r = w(d, e);
                                        break a
                                    }
                                }
                                r = void 0
                            }
                            (v = r && "set" === d[0] && !!r.event) && P(101)
                        } else r = d;
                        if (r) {
                            var y = Iq(r, e);
                            a = y || a;
                            v && y && P(113)
                        }
                    }
                } finally {
                    e.fromContainerExecution && ue(!0);
                    var x = d["gtm.uniqueEventId"];
                    if ("number" === typeof x) {
                        for (var A = Aq[String(x)] || [], B = 0; B < A.length; B++) Cq.push(Mq(A[B]));
                        A.length && Cq.sort(Fq);
                        delete Aq[String(x)];
                        x > zq && (zq = x)
                    }
                    Eq = !1
                }
            }
        }
        return !a
    }

    function Nq() {
        var b = Lq();
        try {
            cq(Qg.M)
        } catch (c) {
        }
        return b
    }

    function Po(a) {
        if (zq < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            Aq[b] = Aq[b] || [];
            Aq[b].push(a)
        } else Cq.push(Mq(a)), Cq.sort(Fq), G(function () {
            Eq || Lq()
        })
    }

    function Mq(a) {
        return {message: a.message, messageContext: a.messageContext}
    }

    var Pq = function () {
        function a(f) {
            var g = {};
            if (xq(f)) {
                var l = f;
                f = xq(l) ? l.getUntrustedMessageValue() : void 0;
                g.fromContainerExecution = !0
            }
            return {message: f, messageContext: g}
        }

        var b = pb(Ud.fa, []), c = Vd[Ud.fa] = Vd[Ud.fa] || {};
        !0 === c.pruned && P(83);
        Aq = No().get();
        Qo();
        co(function () {
            if (!c.gtmDom) {
                c.gtmDom = !0;
                var f = {};
                b.push((f.event = "gtm.dom", f))
            }
        });
        hq(function () {
            if (!c.gtmLoad) {
                c.gtmLoad = !0;
                var f = {};
                b.push((f.event = "gtm.load", f))
            }
        });
        c.subscribers = (c.subscribers || 0) + 1;
        var d = b.push;
        b.push = function () {
            var f;
            if (0 < Vd.SANDBOXED_JS_SEMAPHORE) {
                f =
                    [];
                for (var g = 0; g < arguments.length; g++) f[g] = new yq(arguments[g])
            } else f = [].slice.call(arguments, 0);
            var l = f.map(function (q) {
                return a(q)
            });
            Bq.push.apply(Bq, l);
            var m = d.apply(b, f), n = Math.max(100, Number("1000") || 300);
            if (this.length > n) for (P(4), c.pruned = !0; this.length > n;) this.shift();
            var p = "boolean" !== typeof m || m;
            return Lq() && p
        };
        var e = b.slice(0).map(function (f) {
            return a(f)
        });
        Bq.push.apply(Bq, e);
        if (Oq()) {
            G(Nq)
        }
    }, Oq = function () {
        var a = !0;
        return a
    };

    function Qq(a) {
        if (null == a || 0 === a.length) return !1;
        var b = Number(a), c = z();
        return b < c + 3E5 && b > c - 9E5
    }

    function Rq(a) {
        return a && 0 === a.indexOf("pending:") ? Qq(a.substr(8)) : !1
    };var rc = {};
    rc.Rd = new String("undefined");
    var rr = E.clearTimeout, sr = E.setTimeout, V = function (a, b, c, d) {
        if (Pg()) {
            b && G(b)
        } else return ub(a, b, c, d)
    }, tr = function () {
        return new Date
    }, ur = function () {
        return E.location.href
    }, vr = function (a) {
        return Te(Ve(a), "fragment")
    }, wr = function (a) {
        return Ue(Ve(a))
    }, xr = function (a, b) {
        return ve(a, b || 2)
    }, yr = function (a, b, c) {
        var d;
        b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = Gq(a)) : d = Gq(a);
        return d
    }, zr = function (a, b) {
        E[a] = b
    }, W = function (a, b, c) {
        b &&
        (void 0 === E[a] || c && !E[a]) && (E[a] = b);
        return E[a]
    }, Ar = function (a, b, c) {
        return pg(a, b, void 0 === c ? !0 : !!c)
    }, Br = function (a, b, c) {
        return 0 === Fg(a, b, c)
    }, Cr = function (a, b) {
        if (Pg()) {
            b && G(b)
        } else wb(a, b)
    }, Dr = function (a) {
        return !!Yq(a, "init", !1)
    }, Er = function (a) {
        Wq(a, "init", !0)
    }, Fr = function (a, b, c) {
        Wh && (Lb(a) || Ui(c, b, a))
    };
    var cs = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];

    function ds(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) === c
    }

    var es = new ta;

    function fs(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d, f = es.get(e);
            f || (f = new RegExp(b, d), es.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }

    function gs(a, b) {
        function c(g) {
            var l = Ve(g), m = Te(l, "protocol"), n = Te(l, "host", !0), p = Te(l, "port"),
                q = Te(l, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === m || "http" === m && "80" === p || "https" === m && "443" === p) m = "web", p = "default";
            return [m, n, p, q]
        }

        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++) if (d[f] !== e[f]) return !1;
        return !0
    }

    function hs(a) {
        return is(a) ? 1 : 0
    }

    function is(a) {
        var b = a.arg0, c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = J(a, {});
                J({arg1: c[d], any_of: void 0}, e);
                if (hs(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var f;
                a:{
                    if (b) try {
                        for (var g = 0; g < cs.length; g++) {
                            var l = cs[g];
                            if (b[l]) {
                                f = b[l](c);
                                break a
                            }
                        }
                    } catch (m) {
                    }
                    f = !1
                }
                return f;
            case "_ew":
                return ds(b, c);
            case "_eq":
                return String(b) === String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                return 0 <= String(b).split(",").indexOf(String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                return fs(b, c, a.ignore_case);
            case "_sw":
                return 0 === String(b).indexOf(String(c));
            case "_um":
                return gs(b, c)
        }
        return !1
    };Object.freeze({dl: 1, id: 1});
    Object.freeze(["config", "event", "get", "set"]);

    function As() {
        return E.gaGlobal = E.gaGlobal || {}
    }

    var Bs = function () {
        var a = As();
        a.hid = a.hid || sa();
        return a.hid
    }, Cs = function (a, b) {
        var c = As();
        if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
    };
    var Zs = function () {
        var a = !0;
        Oh(7) && Oh(9) && Oh(10) || (a = !1);
        return a
    }, $s = function () {
        var a = !0;
        Oh(3) && Oh(4) || (a = !1);
        return a
    };
    var Ct = window, Dt = document, Et = function (a) {
        var b = Ct._gaUserPrefs;
        if (b && b.ioo && b.ioo() || a && !0 === Ct["ga-disable-" + a]) return !0;
        try {
            var c = Ct.external;
            if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
        } catch (f) {
        }
        for (var d = jg("AMP_TOKEN", String(Dt.cookie), !0), e = 0; e < d.length; e++) if ("$OPT_OUT" == d[e]) return !0;
        return Dt.getElementById("__gaOptOutExtension") ? !0 : !1
    };

    function Mt(a) {
        k(a, function (c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[R.g.Ma] || {};
        k(b, function (c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };var Vt = function (a, b) {
    };

    function Ut(a, b) {
        var c = function () {
        };
        return c
    }

    function Wt(a, b, c) {
    };
    var av = function (a, b) {
        if (!b.C) {
            var c = U(b, R.g.Qa), d = U(b, R.g.ab), e = U(b, c);
            if (void 0 === e) {
                var f = void 0;
                Yu.hasOwnProperty(c) ? f = Yu[c] : Zu.hasOwnProperty(c) && (f = Zu[c]);
                1 === f && (f = $u(c));
                h(f) ? so()(function () {
                    var g = so().getByName(a).get(f);
                    d(g)
                }) : d(void 0)
            } else d(e)
        }
    }, bv = function (a, b) {
        var c = a[R.g.Jc], d = b + ".", e = a[R.g.T] || "", f = void 0 === c ? !!a.use_anchor : "fragment" === c,
            g = !!a[R.g.Rb];
        e = String(e).replace(/\s+/g, "").split(",");
        var l = so();
        l(d + "require", "linker");
        l(d + "linker:autoLink", e, f, g)
    }, fv = function (a, b, c) {
        if (Sf() &&
            (!c.C || !cv[a])) {
            var d = !eg(R.g.R), e = function (f) {
                var g, l, m = so(), n = dv(b, "", c), p, q = n.createOnlyFields._useUp;
                if (c.C || ev(b, n.createOnlyFields)) {
                    c.C && (g = "gtm" + pe(), l = n.createOnlyFields, n.gtmTrackerName && (l.name = g));
                    m(function () {
                        var u = m.getByName(b);
                        u && (p = u.get("clientId"));
                        c.C || m.remove(b)
                    });
                    m("create", a, c.C ? l : n.createOnlyFields);
                    d &&
                    eg(R.g.R) && (d = !1, m(function () {
                        var u = so().getByName(c.C ? g : b);
                        !u || u.get("clientId") == p && q || (c.C ? (n.fieldsToSet["&gcu"] = "1", n.fieldsToSet["&gcut"] = Rd[f]) : (n.fieldsToSend["&gcu"] = "1", n.fieldsToSend["&gcut"] = Rd[f]), u.set(n.fieldsToSet), c.C ? u.send("pageview") : u.send("pageview", n.fieldsToSend))
                    }));
                    c.C && m(function () {
                        m.remove(g)
                    })
                }
            };
            gg(function () {
                return e(R.g.R)
            }, R.g.R);
            gg(function () {
                return e(R.g.F)
            }, R.g.F);
            c.C && (cv[a] = !0)
        }
    }, gv = function (a, b) {
        Gn() && b && (a[R.g.vb] = b)
    }, pv = function (a, b, c) {
        function d() {
            var D = U(c,
                R.g.Dc);
            l(function () {
                if (!c.C && Kb(D)) {
                    var K = r.fieldsToSend, N = m().getByName(n), S;
                    for (S in D) if (D.hasOwnProperty(S) && /^(dimension|metric)\d+$/.test(S) && void 0 != D[S]) {
                        var aa = N.get($u(D[S]));
                        hv(K, S, aa)
                    }
                }
            })
        }

        function e() {
            if (r.displayfeatures) {
                var D = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                p("require", "displayfeatures", void 0, {cookieName: D})
            }
        }

        var f = a, g = "https://www.google-analytics.com/analytics.js", l = c.C ? uo(U(c, "gaFunctionName")) : uo();
        if (oa(l)) {
            var m = so, n;
            c.C ? n = U(c, "name") || U(c, "gtmTrackerName") : n = "gtag_" +
                f.split("-").join("_");
            var p = function (D) {
                var K = [].slice.call(arguments, 0);
                K[0] = n ? n + "." + K[0] : "" + K[0];
                l.apply(window, K)
            }, q = function (D) {
                var K = function (Y, T) {
                    for (var Q = 0; T && Q < T.length; Q++) p(Y, T[Q])
                }, N = c.C, S = N ? iv(r) : jv(b, c);
                if (S) {
                    var aa = {};
                    gv(aa, D);
                    p("require", "ec", "ec.js", aa);
                    N && S.df && p("set", "&cu", S.df);
                    var M = S.action;
                    if (N || "impressions" === M) if (K("ec:addImpression", S.oh), !N) return;
                    if ("promo_click" === M || "promo_view" === M || N && S.gd) {
                        var L = S.gd;
                        K("ec:addPromo", L);
                        if (L && 0 < L.length && "promo_click" === M) {
                            N ? p("ec:setAction",
                                M, S.Sa) : p("ec:setAction", M);
                            return
                        }
                        if (!N) return
                    }
                    "promo_view" !== M && "impressions" !== M && (K("ec:addProduct", S.Bb), p("ec:setAction", M, S.Sa))
                }
            }, t = function (D) {
                if (D) {
                    var K = {};
                    if (Kb(D)) for (var N in kv) kv.hasOwnProperty(N) && lv(kv[N], N, D[N], K);
                    gv(K, y);
                    p("require", "linkid", K)
                }
            }, u = function () {
                if (Pg()) {
                } else {
                    var D = U(c, R.g.mi);
                    D && (p("require", D, {dataLayer: Ud.fa}), p("require", "render"))
                }
            }, r = dv(n, b, c), v = function (D, K, N) {
                N && (K = "" + K);
                r.fieldsToSend[D] =
                    K
            };
            !c.C && ev(n, r.createOnlyFields) && (l(function () {
                m() && m().remove(n)
            }), mv[n] = !1);
            l("create", f, r.createOnlyFields);
            if (r.createOnlyFields[R.g.vb] && !c.C) {
                var w = Fn(r.createOnlyFields[R.g.vb], "/analytics.js");
                w && (g = w)
            }
            var y = c.C ? r.fieldsToSet[R.g.vb] : r.createOnlyFields[R.g.vb];
            if (y) {
                var x = c.C ? r.fieldsToSet[R.g.Hd] : r.createOnlyFields[R.g.Hd];
                x && !mv[n] && (mv[n] = !0, l(yo(n, x)))
            }
            c.C ? r.enableRecaptcha && p("require", "recaptcha", "recaptcha.js") : (d(), t(r.linkAttribution));
            var A = r[R.g.ra];
            A && A[R.g.T] && bv(A, n);
            p("set",
                r.fieldsToSet);
            if (c.C) {
                if (r.enableLinkId) {
                    var B = {};
                    gv(B, y);
                    p("require", "linkid", "linkid.js", B)
                }
                Sf() && fv(f, n, c)
            }
            if (b === R.g.sc) if (c.C) {
                e();
                if (r.remarketingLists) {
                    var C = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                    p("require", "adfeatures", {cookieName: C})
                }
                q(y);
                p("send", "pageview");
                r.createOnlyFields._useUp && vo(n + ".")
            } else u(), p("send", "pageview", r.fieldsToSend); else b === R.g.va ? (u(), ol(f, c), U(c, R.g.cb) && (Pk(["aw", "dc"]), vo(n + ".")), 0 != r.sendPageView && p("send", "pageview", r.fieldsToSend), fv(f, n, c)) : b === R.g.Ca ?
                av(n, c) : "screen_view" === b ? p("send", "screenview", r.fieldsToSend) : "timing_complete" === b ? (r.fieldsToSend.hitType = "timing", v("timingCategory", r.eventCategory, !0), c.C ? v("timingVar", r.timingVar, !0) : v("timingVar", r.name, !0), v("timingValue", za(r.value)), void 0 !== r.eventLabel && v("timingLabel", r.eventLabel, !0), p("send", r.fieldsToSend)) : "exception" === b ? p("send", "exception", r.fieldsToSend) : "" === b && c.C || ("track_social" === b && c.C ? (r.fieldsToSend.hitType = "social", v("socialNetwork", r.socialNetwork, !0), v("socialAction",
                    r.socialAction, !0), v("socialTarget", r.socialTarget, !0)) : ((c.C || nv[b]) && q(y), c.C && e(), r.fieldsToSend.hitType = "event", v("eventCategory", r.eventCategory, !0), v("eventAction", r.eventAction || b, !0), void 0 !== r.eventLabel && v("eventLabel", r.eventLabel, !0), void 0 !== r.value && v("eventValue", za(r.value))), p("send", r.fieldsToSend));
            if (!ov && !c.C) {
                ov = !0;
                no();
                var H = function () {
                    c.N()
                }, I = function () {
                    m().loaded || H()
                };
                Pg() ? G(I) : ub(g, I, H)
            }
        } else G(c.N)
    }, qv = function (a, b, c, d) {
        hg(function () {
            pv(a, b, d)
        }, [R.g.R, R.g.F])
    }, tv = function (a,
                      b) {
        function c(f) {
            function g(n, p) {
                for (var q = 0; q < p.length; q++) {
                    var t = p[q];
                    if (f[t]) {
                        m[n] = f[t];
                        break
                    }
                }
            }

            function l() {
                if (f.category) m.category = f.category; else {
                    for (var n = "", p = 0; p < rv.length; p++) void 0 !== f[rv[p]] && (n && (n += "/"), n += f[rv[p]]);
                    n && (m.category = n)
                }
            }

            var m = J(f);
            if (sv || b) g("id", ["id", "item_id", "promotion_id"]), g("name", ["name", "item_name", "promotion_name"]), g("brand", ["brand", "item_brand"]), g("variant", ["variant", "item_variant"]), g("list", ["list_name", "item_list_name"]), g("position", ["list_position",
                "creative_slot", "index"]), l();
            g("listPosition", ["list_position"]);
            g("creative", ["creative_name"]);
            g("list", ["list_name"]);
            g("position", ["list_position", "creative_slot"]);
            return m
        }

        b = void 0 === b ? !1 : b;
        for (var d = [], e = 0; a && e < a.length; e++) a[e] && Kb(a[e]) && d.push(c(a[e]));
        return d.length ? d : void 0
    }, uv = function (a) {
        return eg(a)
    }, vv = !1;
    var sv = !1;
    sv = !0;
    var ov, mv = {}, cv = {}, wv = {},
        Yu = Object.freeze((wv.client_storage = "storage", wv.sample_rate = 1, wv.site_speed_sample_rate = 1, wv.store_gac = 1, wv.use_amp_client_id = 1, wv[R.g.kb] = 1, wv[R.g.qa] = "storeGac", wv[R.g.Ya] = 1, wv[R.g.Ia] = 1, wv[R.g.Za] = 1, wv[R.g.Bc] = 1, wv[R.g.ze] = 1, wv[R.g.ub] = 1, wv)),
        xv = {},
        yv = Object.freeze((xv._cs = 1, xv._useUp = 1, xv.allowAnchor = 1, xv.allowLinker = 1, xv.alwaysSendReferrer = 1, xv.clientId = 1, xv.cookieDomain = 1, xv.cookieExpires = 1, xv.cookieFlags =
            1, xv.cookieName = 1, xv.cookiePath = 1, xv.cookieUpdate = 1, xv.legacyCookieDomain = 1, xv.legacyHistoryImport = 1, xv.name = 1, xv.sampleRate = 1, xv.siteSpeedSampleRate = 1, xv.storage = 1, xv.storeGac = 1, xv.useAmpClientId = 1, xv._cd2l = 1, xv)),
        zv = Object.freeze({anonymize_ip: 1}), Av = {}, Zu = Object.freeze((Av.campaign = {
            content: "campaignContent",
            id: "campaignId",
            medium: "campaignMedium",
            name: "campaignName",
            source: "campaignSource",
            term: "campaignKeyword"
        }, Av.app_id = 1, Av.app_installer_id = 1, Av.app_name = 1, Av.app_version = 1, Av.description =
            "exDescription", Av.fatal = "exFatal", Av.language = 1, Av.page_hostname = "hostname", Av.transport_type = "transport", Av[R.g.ma] = "currencyCode", Av[R.g.pg] = 1, Av[R.g.Ka] = "location", Av[R.g.Ge] = "page", Av[R.g.La] = "referrer", Av[R.g.Tb] = "title", Av[R.g.xg] = 1, Av[R.g.sa] = 1, Av)),
        Bv = {},
        Cv = Object.freeze((Bv.content_id = 1, Bv.event_action = 1, Bv.event_category = 1, Bv.event_label = 1, Bv.link_attribution = 1, Bv.name = 1, Bv[R.g.ra] = 1, Bv[R.g.og] = 1, Bv[R.g.xa] = 1, Bv[R.g.ka] = 1, Bv)),
        Dv = Object.freeze({
            displayfeatures: 1,
            enableLinkId: 1,
            enableRecaptcha: 1,
            eventAction: 1,
            eventCategory: 1,
            eventLabel: 1,
            gaFunctionName: 1,
            gtmEcommerceData: 1,
            gtmTrackerName: 1,
            linker: 1,
            remarketingLists: 1,
            socialAction: 1,
            socialNetwork: 1,
            socialTarget: 1,
            timingVar: 1,
            value: 1
        }),
        rv = Object.freeze(["item_category", "item_category2", "item_category3", "item_category4", "item_category5"]),
        Ev = {}, kv = Object.freeze((Ev.levels = 1, Ev[R.g.Ia] = "duration", Ev[R.g.Bc] = 1, Ev)), Fv = {},
        Gv = Object.freeze((Fv.anonymize_ip = 1, Fv.fatal = 1, Fv.send_page_view = 1, Fv.store_gac = 1, Fv.use_amp_client_id = 1, Fv[R.g.qa] = 1, Fv[R.g.pg] =
            1, Fv)), lv = function (a, b, c, d) {
            if (void 0 !== c) if (Gv[b] && (c = Aa(c)), "anonymize_ip" !== b || c || (c = void 0), 1 === a) d[$u(b)] = c; else if (h(a)) d[a] = c; else for (var e in a) a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
        }, $u = function (a) {
            return a && h(a) ? a.replace(/(_[a-z])/g, function (b) {
                return b[1].toUpperCase()
            }) : a
        }, Hv = {},
        nv = Object.freeze((Hv.checkout_progress = 1, Hv.select_content = 1, Hv.set_checkout_option = 1, Hv[R.g.mc] = 1, Hv[R.g.nc] = 1, Hv[R.g.Ib] = 1, Hv[R.g.oc] = 1, Hv[R.g.sb] = 1, Hv[R.g.Jb] = 1, Hv[R.g.tb] = 1, Hv[R.g.Ba] = 1, Hv[R.g.qc] =
            1, Hv[R.g.Ha] = 1, Hv)), Iv = {},
        Jv = Object.freeze((Iv.checkout_progress = 1, Iv.set_checkout_option = 1, Iv[R.g.Qf] = 1, Iv[R.g.Rf] = 1, Iv[R.g.mc] = 1, Iv[R.g.nc] = 1, Iv[R.g.Sf] = 1, Iv[R.g.Ib] = 1, Iv[R.g.Ba] = 1, Iv[R.g.qc] = 1, Iv[R.g.Tf] = 1, Iv)),
        Kv = {},
        Lv = Object.freeze((Kv.generate_lead = 1, Kv.login = 1, Kv.search = 1, Kv.select_content = 1, Kv.share = 1, Kv.sign_up = 1, Kv.view_search_results = 1, Kv[R.g.oc] = 1, Kv[R.g.sb] = 1, Kv[R.g.Jb] = 1, Kv[R.g.tb] = 1, Kv[R.g.Ha] = 1, Kv)),
        Mv = function (a) {
            var b = "general";
            Jv[a] ? b = "ecommerce" : Lv[a] ? b = "engagement" : "exception" ===
                a && (b = "error");
            return b
        }, Nv = {},
        Ov = Object.freeze((Nv.view_search_results = 1, Nv[R.g.sb] = 1, Nv[R.g.tb] = 1, Nv[R.g.Ha] = 1, Nv)),
        hv = function (a, b, c) {
            a.hasOwnProperty(b) || (a[b] = c)
        }, Pv = function (a) {
            if (qa(a)) {
                for (var b = [], c = 0; c < a.length; c++) {
                    var d = a[c];
                    if (void 0 != d) {
                        var e = d.id, f = d.variant;
                        void 0 != e && void 0 != f && b.push(String(e) + "." + String(f))
                    }
                }
                return 0 < b.length ? b.join("!") : void 0
            }
        }, dv = function (a, b, c) {
            var d = function (K) {
                return U(c, K)
            }, e = {}, f = {}, g = {}, l = {}, m = Pv(d(R.g.li));
            !c.C && m && hv(f, "exp", m);
            g["&gtm"] = bh(!0);
            Sf() &&
            (l._cs = uv);
            var n = d(R.g.Dc);
            if (!c.C && Kb(n)) for (var p in n) if (n.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != n[p]) {
                var q = d(String(n[p]));
                void 0 !== q && hv(f, p, q)
            }
            for (var t = Nl(c), u = 0; u < t.length; ++u) {
                var r = t[u];
                if (c.C) {
                    var v = d(r);
                    Dv.hasOwnProperty(r) ? e[r] = v : yv.hasOwnProperty(r) ? l[r] = v : g[r] = v
                } else {
                    var w = void 0;
                    w = r !== R.g.aa ? d(r) : Ol(c, r);
                    if (Cv.hasOwnProperty(r)) lv(Cv[r], r, w, e); else if (zv.hasOwnProperty(r)) lv(zv[r], r, w, g); else if (Zu.hasOwnProperty(r)) lv(Zu[r], r, w, f); else if (Yu.hasOwnProperty(r)) lv(Yu[r],
                        r, w, l); else if (/^(dimension|metric|content_group)\d+$/.test(r)) lv(1, r, w, f); else if (r === R.g.aa) {
                        if (!vv) {
                            var y = La(w);
                            y && (f["&did"] = y)
                        }
                        var x = void 0, A = void 0;
                        b === R.g.va ? x = La(Ol(c, r), ".") : (x = La(Ol(c, r, 1), "."), A = La(Ol(c, r, 2), "."));
                        x && (f["&gdid"] = x);
                        A && (f["&edid"] = A)
                    } else r === R.g.Pa && 0 > t.indexOf(R.g.Bc) && (l.cookieName = w + "_ga")
                }
            }
            !1 !== d(R.g.bi) && !1 !== d(R.g.Lb) && Zs() || (g.allowAdFeatures = !1);
            !1 !== d(R.g.X) && $s() || (g.allowAdPersonalizationSignals = !1);
            !c.C && d(R.g.cb) && (l._useUp = !0);
            if (c.C) {
                l.name = l.name || e.gtmTrackerName;
                var B = g.hitCallback;
                g.hitCallback = function () {
                    oa(B) && B();
                    c.O()
                }
            } else {
                hv(l, "cookieDomain", "auto");
                hv(g, "forceSSL", !0);
                hv(e, "eventCategory", Mv(b));
                Ov[b] && hv(f, "nonInteraction", !0);
                "login" === b || "sign_up" === b || "share" === b ? hv(e, "eventLabel", d(R.g.og)) : "search" === b || "view_search_results" === b ? hv(e, "eventLabel", d(R.g.vi)) : "select_content" === b && hv(e, "eventLabel", d(R.g.ei));
                var C = e[R.g.ra] || {}, H = C[R.g.Qb];
                H || 0 != H && C[R.g.T] ? l.allowLinker = !0 : !1 === H && hv(l, "useAmpClientId", !1);
                f.hitCallback = c.O;
                l.name = a
            }
            Sf() && (g["&gcs"] =
                fg(), eg(R.g.R) || (l.storage = "none"), eg(R.g.F) || (g.allowAdFeatures = !1, l.storeGac = !1));
            var I = d(R.g.na) || d(R.g.vb), D = d(R.g.Hd);
            I && (c.C || (l[R.g.vb] = I), l._cd2l = !0);
            D && !c.C && (l[R.g.Hd] = D);
            e.fieldsToSend = f;
            e.fieldsToSet = g;
            e.createOnlyFields = l;
            return e
        }, iv = function (a) {
            var b = a.gtmEcommerceData;
            if (!b) return null;
            var c = {};
            b.currencyCode && (c.df = b.currencyCode);
            if (b.impressions) {
                c.action = "impressions";
                var d = b.impressions;
                c.oh = "impressions" === b.translateIfKeyEquals ? tv(d, !0) : d
            }
            if (b.promoView) {
                c.action = "promo_view";
                var e = b.promoView.promotions;
                c.gd = "promoView" === b.translateIfKeyEquals ? tv(e, !0) : e
            }
            if (b.promoClick) {
                c.action = "promo_click";
                var f = b.promoClick.promotions;
                c.gd = "promoClick" === b.translateIfKeyEquals ? tv(f, !0) : f;
                c.Sa = b.promoClick.actionField;
                return c
            }
            for (var g in b) if (b.hasOwnProperty(g) && "translateIfKeyEquals" !== g && "impressions" !== g && "promoView" !== g && "promoClick" !== g && "currencyCode" !== g) {
                c.action = g;
                var l = b[g].products;
                c.Bb = "products" === b.translateIfKeyEquals ? tv(l, !0) : l;
                c.Sa = b[g].actionField;
                break
            }
            return Object.keys(c).length ?
                c : null
        }, jv = function (a, b) {
            function c(v) {
                return {
                    id: d(R.g.Ea),
                    affiliation: d(R.g.ii),
                    revenue: d(R.g.ka),
                    tax: d(R.g.ag),
                    shipping: d(R.g.Ec),
                    coupon: d(R.g.ji),
                    list: e() || v
                }
            }

            for (var d = function (v) {
                return U(b, v)
            }, e = function () {
                var v;
                sv && (v = d(R.g.Yf));
                return d(R.g.Zf) || v
            }, f = d(R.g.Z), g, l = 0; f && l < f.length && (g = f[l][R.g.Zf], !g && sv && (g = f[l][R.g.Yf]), !g); l++) ;
            var m = d(R.g.Dc);
            if (Kb(m)) for (var n = 0; f && n < f.length; ++n) {
                var p = f[n], q;
                for (q in m) m.hasOwnProperty(q) && /^(dimension|metric)\d+$/.test(q) && void 0 != m[q] && hv(p, q, p[m[q]])
            }
            var t =
                null, u = d(R.g.ki);
            if (a === R.g.Ba || a === R.g.qc) t = {
                action: a,
                Sa: c(),
                Bb: tv(f)
            }; else if (a === R.g.mc) t = {action: "add", Sa: c(), Bb: tv(f)}; else if (a === R.g.nc) t = {
                action: "remove",
                Sa: c(),
                Bb: tv(f)
            }; else if (a === R.g.Ha) t = {
                action: "detail",
                Sa: c(g),
                Bb: tv(f)
            }; else if (a === R.g.sb) t = {
                action: "impressions",
                oh: tv(f)
            }; else if (a === R.g.tb) t = {
                action: "promo_view",
                gd: sv ? tv(u) || tv(f) : tv(u)
            }; else if ("select_content" === a && u && 0 < u.length || sv && a === R.g.Jb) t = {
                action: "promo_click",
                gd: sv ? tv(u) || tv(f) : tv(u)
            }; else if ("select_content" === a || sv && a ===
                R.g.oc) t = {
                action: "click",
                Sa: {list: e() || g},
                Bb: tv(f)
            }; else if (a === R.g.Ib || "checkout_progress" === a) {
                var r = {step: a === R.g.Ib ? 1 : d(R.g.Xf), option: d(R.g.Wf)};
                t = {action: "checkout", Bb: tv(f), Sa: J(c(), r)}
            } else "set_checkout_option" === a && (t = {
                action: "checkout_option",
                Sa: {step: d(R.g.Xf), option: d(R.g.Wf)}
            });
            t && (t.df = d(R.g.ma));
            return t
        }, Qv = {}, ev = function (a, b) {
            var c = Qv[a];
            Qv[a] = J(b);
            if (!c) return !1;
            for (var d in b) if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
            for (var e in c) if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
            return !1
        };
    var Rv = Ut;
    var Tv = encodeURI, X = encodeURIComponent, Uv = function (a, b, c) {
        xb(a, b, c)
    }, Vv = function (a, b) {
        if (!a) return !1;
        var c = Te(Ve(a), "host");
        if (!c) return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                if (0 <= f && c.indexOf(e, f) == f) return !0
            }
        }
        return !1
    }, Wv = function (a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) &&
        a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
        return e ? d : null
    };
    var Z = {o: {}};
    Z.o.e = ["google"], function () {
        (function (a) {
            Z.__e = a;
            Z.__e.s = "e";
            Z.__e.isVendorTemplate = !0;
            Z.__e.priorityOverride = 0;
            Z.__e.isInfrastructure = !1
        })(function (a) {
            return String(a.vtp_gtmCachedValues.event)
        })
    }();
    Z.o.v = ["google"], function () {
        (function (a) {
            Z.__v = a;
            Z.__v.s = "v";
            Z.__v.isVendorTemplate = !0;
            Z.__v.priorityOverride = 0;
            Z.__v.isInfrastructure = !1
        })(function (a) {
            var b = a.vtp_name;
            if (!b || !b.replace) return !1;
            var c = xr(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1), d = void 0 !== c ? c : a.vtp_defaultValue;
            Fr(d, "v", a.vtp_gtmEventId);
            return d
        })
    }();

    Z.o.rep = ["google"], function () {
        (function (a) {
            Z.__rep = a;
            Z.__rep.s = "rep";
            Z.__rep.isVendorTemplate = !0;
            Z.__rep.priorityOverride = 0;
            Z.__rep.isInfrastructure = !1
        })(function (a) {
            var b = $k(a.vtp_containerId), c;
            switch (b.prefix) {
                case "AW":
                    c = zu;
                    c = $t;
                    break;
                case "DC":
                    c = Ju;
                    break;
                case "GF":
                    c =
                        Pu;
                    break;
                case "HA":
                    c = Uu;
                    break;
                case "UA":
                    c = qv;
                    break;
                case "MC":
                    break;
                default:
                    G(a.vtp_gtmOnFailure);
                    return
            }
            c ? (G(a.vtp_gtmOnSuccess), Ip.register(a.vtp_containerId, c), a.vtp_remoteConfig && Rp(a.vtp_containerId, a.vtp_remoteConfig || {})) : G(a.vtp_gtmOnFailure)
        })
    }();
    Z.o.cid = ["google"], function () {
        (function (a) {
            Z.__cid = a;
            Z.__cid.s = "cid";
            Z.__cid.isVendorTemplate = !0;
            Z.__cid.priorityOverride = 0;
            Z.__cid.isInfrastructure = !1
        })(function () {
            return Qg.M
        })
    }();


    Z.o.get = ["google"], function () {
        (function (a) {
            Z.__get = a;
            Z.__get.s = "get";
            Z.__get.isVendorTemplate = !0;
            Z.__get.priorityOverride = 0;
            Z.__get.isInfrastructure = !1
        })(function (a) {
            var b = a.vtp_settings, c = b.eventParameters || {}, d = String(a.vtp_eventName), e = {};
            e.eventId = a.vtp_gtmEventId;
            e.priorityId = a.vtp_gtmPriorityId;
            a.vtp_deferrable && (e.deferrable = !0);
            var f = Lo(String(b.streamId), d, c);
            Oo(f, e.eventId, e);
            a.vtp_gtmOnSuccess()
        })
    }();


    const nx = {};
    nx.dataLayer = we;
    nx.callback = function (a) {
        me.hasOwnProperty(a) && oa(me[a]) && me[a]();
        delete me[a]
    };
    nx.bootstrap = 0;
    nx._spx = !1;

    function ox() {
        Vd[Qg.M] = Vd[Qg.M] || nx;
        Qg.Hb && (Vd["ctid_" + Qg.Hb] = nx);
        Wg();
        Yg() || k(Zg(), function (a, b) {
            Jn(a, b.transportUrl, b.context);
            P(92)
        });
        Ga(ne, Z.o);
        tc = Bc
    }

    (function (a) {
        function b() {
            m = F.documentElement.getAttribute("data-tag-assistant-present");
            Qq(m) && (l = g.xi)
        }

        if (!E["__TAGGY_INSTALLED"]) {
            var c = !1;
            if (F.referrer) {
                var d = Ve(F.referrer);
                c = "cct.google" === Se(d, "host")
            }
            if (!c) {
                var e = pg("googTaggyReferrer");
                c = e.length && e[0].length
            }
            c && (E["__TAGGY_INSTALLED"] = !0, ub("https://cct.google/taggy/agent.js"))
        }
        if (he) a(); else {
            var f = function (r) {
                    var v = "GTM", w = "GTM";
                    be ? (v = "OGT", w = "GTAG") : he && (w = v = "OPT");
                    var y = E["google.tagmanager.debugui2.queue"];
                    y || (y = [],
                        E["google.tagmanager.debugui2.queue"] = y, ub("https://" + Ud.ud + "/debug/bootstrap?id=" + Qg.M + "&src=" + w + "&cond=" + r + "&gtm=" + bh()));
                    var x = {
                        messageType: "CONTAINER_STARTING",
                        data: {scriptSource: ob, containerProduct: v, debug: !1, id: Qg.M, isGte: ae}
                    };
                    x.data.resume = function () {
                        a()
                    };
                    Ud.Ph && (x.data.initialPublish = !0);
                    y.push(x)
                }, g = {uk: 1, yi: 2, Ki: 3, Rh: 4, xi: 5}, l = void 0, m = void 0,
                n = Te(E.location, "query", !1, void 0, "gtm_debug");
            Qq(n) && (l = g.yi);
            if (!l && F.referrer) {
                var p = Ve(F.referrer);
                "tagassistant.google.com" === Se(p, "host") && (l = g.Ki)
            }
            if (!l) {
                var q =
                    pg("__TAG_ASSISTANT");
                q.length && q[0].length && (l = g.Rh)
            }
            l || b();
            if (!l && O(54) && Rq(m)) {
                var t = function () {
                    if (u) return !0;
                    u = !0;
                    b();
                    l && ob ? f(l) : a()
                }, u = !1;
                yb(F, "TADebugSignal", function () {
                    t()
                }, !1);
                E.setTimeout(function () {
                    t()
                }, 200)
            } else l && ob ? f(l) : a()
        }
    })(function () {
        var a = !1;
        a && oo("INIT");
        Gf().m();
        Lh();
        qk.enable_gbraid_cookie_write = !0;
        if (Qg.Hb ? Vd["ctid_" + Qg.Hb] : Vd[Qg.M]) {
            var b = Vd.zones;
            b && b.unregisterChild(Sg());
        } else {
            for (var c = data.resource || {}, d = c.macros || [], e = 0; e < d.length; e++) jc.push(d[e]);
            for (var f = c.tags || [], g = 0; g < f.length; g++) mc.push(f[g]);
            for (var l = c.predicates || [], m = 0; m <
            l.length; m++) lc.push(l[m]);
            for (var n = c.rules || [], p = 0; p < n.length; p++) {
                for (var q = n[p], t = {}, u = 0; u < q.length; u++) t[q[u][0]] = Array.prototype.slice.call(q[u], 1);
                kc.push(t)
            }
            oc = Z;
            pc = hs;
            ox();
            Pq();
            Yn = !1;
            Zn = 0;
            if ("interactive" == F.readyState && !F.createEventObject || "complete" == F.readyState) ao(); else {
                yb(F, "DOMContentLoaded", ao);
                yb(F, "readystatechange", ao);
                if (F.createEventObject && F.documentElement.doScroll) {
                    var r = !0;
                    try {
                        r = !E.frameElement
                    } catch (A) {
                    }
                    r && bo()
                }
                yb(E, "load", ao)
            }
            eq = !1;
            "complete" === F.readyState ? gq() : yb(E,
                "load", gq);
            aj();
            O(46) && (P(111), Wa("HEALTH", 1));
            O(47) && (P(112), Wa("HEALTH", 2));
            le = z();
            nx.bootstrap = le;
            if (a) {
                var x = po("INIT");
            }
        }
    });

})()
