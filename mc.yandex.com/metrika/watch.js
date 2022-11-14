(function () {
    try {
        (function () {
            function ie(a, c, b, d) {
                const e = this;
                return A(window, "c.i", function () {
                    function f(C, K, Q) {
                        e[K] = lk(k, l, Q || p, K, C)
                    }

                    function g(C, K) {
                        const Q = id(k, l, "", C)(k, l);
                        Q && (T(Q.then) ? Q.then(yb(h)(K)) : h(Q, K));
                        return Q
                    }

                    function h(C, K) {
                        C && (T(C) ? m.push(C) : K && m.push(C[K]))
                    }

                    const k = window;
                    (!k || isNaN(a) && !a) && Wf();
                    const l = mk(a, je, c, b, d), m = [], p = [Xf, id, Yf];
                    p.unshift(nk);
                    const r = q(O, g), w = z(O, Wb), v = P(l);
                    l.id || pb(k, v, "Invalid Metrika id: " + l.id);
                    var x = Xb.o("counters", {});
                    if (x[v]) return pb(k, v, "Duplicate counter " + v + " initialization"),
                        x[v];
                    x[v] = e;
                    Xb.C("counters", x);
                    Xb.oa("counter", e);
                    D(function (C) {
                        C(k, l)
                    }, ke);
                    ok(k, l);
                    g(pk);
                    D(r, jd);
                    g(qk);
                    w.push(rk);
                    g(sk);
                    f(tk(k, l), "hit");
                    f(uk(k, l), "params");
                    v = g(vk, db({unsubscribe: 1}));
                    e.trackHash = id(k, l, "", n(v, db({Me: 1})));
                    f(kd(k, l), "reachGoal");
                    g(wk);
                    v = g(xk, db({Ib: 1}));
                    f(n(v, db({qe: 1})), "notBounce");
                    f(yk(k, l), "firstPartyParams");
                    f(E([k, l], zk), "firstPartyParamsHashed");
                    f(n(v, db({ab: 1})), "accurateTrackBounce");
                    g(Ak);
                    v = g(Bk, db({Ib: 1}));
                    f(n(v, db({Qd: 1})), "extLink");
                    f(n(v, db({Ad: 1})), "addFileExtension");
                    f(n(v, db({file: 1})), "file");
                    f(n(v, db({Bb: 1})), "trackLinks");
                    f(Ck(k, l), "userParams");
                    f(Dk(k, l, m), "destruct", [Xf, Yf]);
                    f(Ek(k, l), "setUserID");
                    e.getClientID = g(Fk) || F;
                    g(Gk);
                    f(Hk(k, l), "clickmap");
                    f(Ik(k, l), "enableAll");
                    g(Jk);
                    g(Kk);
                    w.push(Lk);
                    Yb(k, E([k, w, r, 1, "a.i"], Mk));
                    Nk(k);
                    D(function (C) {
                        var K = C[0];
                        f((0, C[1])(k, l), K)
                    }, hc);
                    D(r, Ua)
                })()
            }

            function Ok(a, c, b, d) {
                d = n(d, "target");
                (d = Ib("button,input", a, d)) && "submit" === d.type && (d = Zf(a, d)) && (b.push(d), ea(a, E([!1, a, c, b, d], $f), 300))
            }

            function $f(a, c, b, d, e) {
                const f = Zb(c)(e,
                    d), g = -1 !== f;
                if (a || g) g && d.splice(f, 1), a = ag(c, e), a = "?" + Dc(a), d = E([c, b, "Form goal. Counter " + b.id + ". Form: " + a + "."], bg), kd(c, b, "form", d)(a)
            }

            function bg(a, c, b) {
                return Pk(a, c).then(function (d) {
                    d && qb(a, c, b)()
                })
            }

            function rk(a, c) {
                const b = Qk(a), d = ka(a, "r", c), e = A(a, "rts.p");
                return la(a, c, M(N, null, function (f, g) {
                    var h = {id: g.Id, R: g.R};
                    h = d({O: {W: g.xe}, G: ra(g.Cd), F: g.M, L: {Wa: g.Wa}, qa: {wa: g.wa}}, h)["catch"](e);
                    return f.then(u(h, O))
                }, H.resolve(""), b))["catch"](e)
            }

            function Rk(a, c, b, d) {
                const e;
                if (a = ua(a, b)) {
                    var f = d.data;
                    b = "" + b.id;
                    var g = d.sended || [];
                    d.sended || (d.sended = g);
                    L(b, g) || !a.params || d.counter && "" + d.counter !== b || (a.params(f), g.push(b), d.parent && c.$c((e = {}, e.type = "params", e.data = f, e)))
                }
            }

            function Sk(a) {
                const c = F, b = null, d = a.length;
                if (0 !== a.length && a[0]) {
                    var e = a.slice(-1)[0];
                    T(e) && (c = e, d = a.length + -1);
                    var f = a.slice(-2)[0];
                    T(f) && (c = f, b = e, d = a.length + -2);
                    d = a.slice(0, d);
                    return {Kd: b, za: c, M: 1 === d.length ? a[0] : ic(d)}
                }
            }

            function Tk(a) {
                a = Uk(a);
                return Vk[a] || a
            }

            function Wk(a) {
                a = cg(a);
                return Xk[a] || "ru"
            }

            function Yk(a, c, b, d) {
                var e =
                    c.G;
                if (b.We || !e) d(); else {
                    var f = ld(a), g = jc(a, "");
                    d = q(function () {
                        var v = dg(f);
                        v = "" + v + Zk(v, g);
                        e.C("gdpr", v);
                        md(c, "gdpr", v)
                    }, d);
                    if (3 === b.id) d(); else {
                        var h = J(a), k = h.o("f1");
                        if (k) k(d); else if (k = (k = dg(f)) ? z(u(nd, n), k.split(",")) : [], eg(k)) d(); else {
                            var l = od(a), m = R(a);
                            var p = /(^|\w+\.)yango(\.yandex)?\.com$/.test(m.hostname) ? {
                                url: "https://yastatic.net/s3/taxi-front/yango-gdpr-popup/",
                                Mc: "ar az be en es et fi fr he hy ka kk ky lt lv no pt ro ru sl sr tg tr uk uz zh".split(" ")
                            } : void 0;
                            var r = (l = l || !!p) && (-1 !==
                                m.href.indexOf("yagdprcheck=1") || g.o("yaGdprCheck"));
                            m = g.o("gdpr");
                            g.o("yandex_login") ? (k.push("13"), g.C("gdpr", kc, 525600)) : l ? L(m, Jb) ? m === le ? k.push("12") : k.push("3") : me(a) || Ec(a) ? k.push("17") : $k(a) && k.push("28") : k.push("14");
                            var w = u(f, al);
                            eg(k) ? (D(w, k), d()) : (pd.push(d), h.C("f1", function (v, x) {
                                var C = 0;
                                if (x) {
                                    var K = eb(a, x) || "";
                                    C += K.length
                                }
                                pd.push(v);
                                1E6 >= C && pd.push(v)
                            }), (0, ne[0])(a).then(S("params.eu")).then(function (v) {
                                if (v || r) {
                                    g.C("gdpr_popup", le);
                                    bl(a, b);
                                    if (zb(a)) return cl(a, w, b);
                                    var x = fg(a, f);
                                    if (x) return v =
                                        dl(a, w, x, b, p), v.then(E([a, b], el)), v
                                }
                                v || w("8");
                                return H.resolve({value: kc, Rb: !0})
                            }).then(function (v) {
                                g.ib("gdpr_popup");
                                if (v) {
                                    var x = v.value;
                                    v = v.Rb;
                                    L(x, Jb) && g.C("gdpr", x, v ? void 0 : 525600)
                                }
                                x = oe(pd, ma);
                                gg(a, x, 20)(rb(A(a, "gdr"), F));
                                h.C("f1", ma)
                            })["catch"](A(a, "gdp.a")))
                        }
                    }
                }
            }

            function el(a, c) {
                if (od(a)) {
                    var b = ld(a), d = ua(a, c);
                    d = d && d.params;
                    b = z(u(fl, n), pe(b));
                    d && b.length && d("gdpr", U(Boolean, b))
                }
            }

            function cl(a, c, b) {
                var d = qd(a, b);
                return new H(function (e) {
                    var f;
                    if (d) {
                        var g = d.V, h = q(u("4", c), u(null, e)), k = ea(a, h, 2E3,
                            "gdp.f.t");
                        d.$c((f = {}, f.type = "isYandex", f)).then(function (l) {
                            l.isYandex ? (c("5"), g.D(X(["GDPR-ok-view-default", "GDPR-ok-view-detailed"], qe), function (m) {
                                e({value: hg(m[1].type)})
                            })) : (c("6"), e(null))
                        })["catch"](h).then(E([a, k], Pa))
                    } else e({value: le, Rb: !0})
                })
            }

            function bl(a, c) {
                var b = qd(a, c);
                b && b.V.D(["isYandex"], function () {
                    var d;
                    return d = {type: "isYandex"}, d.isYandex = od(a), d
                });
                return b
            }

            function dl(a, c, b, d, e) {
                var f = void 0 === e ? {url: "https://yastatic.net/s3/gdpr/popup/v2/", Mc: gl} : e;
                e = f.url;
                f = hl(a, f.Mc, d.Xe);
                var g = qd(a, d);
                if (!g) return H.resolve({value: kc, Rb: !0});
                var h = Fc(a, {src: "" + e + f + "_inversed_buttons.js"});
                return new H(function (k, l) {
                    h ? (c("7"), h.onerror = function () {
                        var m;
                        c("9");
                        g.Zc((m = {}, m.type = "GDPR-ok-view-default", m));
                        k(null)
                    }, h.onload = function () {
                        c("10");
                        b.D(X(["GDPR-ok-view-default", "GDPR-ok-view-detailed"], qe), function (m) {
                            var p;
                            m = m.type;
                            g.Zc((p = {}, p.type = m, p));
                            k({value: hg(m)})
                        })
                    }) : (c("9"), l(Ja("gdp.e")))
                })
            }

            function hl(a, c, b) {
                a = b || cg(a);
                return L(a, c) ? a : "en"
            }

            function hg(a) {
                if (L(a, ["GDPR-ok-view-default",
                    "GDPR-ok-view-detailed"])) return kc;
                a = a.replace("GDPR-ok-view-detailed-", "");
                return L(a, Jb) ? a : kc
            }

            function ig(a, c, b) {
                var d = n(a, "AppMetricaInitializer"), e = n(d, "init");
                if (e) try {
                    M(e, d)(eb(a, c))
                } catch (f) {
                } else jg = ea(a, E([a, c, 2 * b], ig), b, "ai.d");
                return function () {
                    return Pa(a, jg)
                }
            }

            function zk(a, c, b) {
                var d, e, f = ua(a, c);
                f && (sb(b) ? wa(ca(b)) ? (a = kg(b)) && wa(a) && f.params((d = {}, d.__ym = (e = {}, e.fpmh = a, e), d)) : qb(a, c, "First party params error. Empty object.")() : qb(a, c, "First party params error. Not an object.")())
            }

            function kg(a) {
                a =
                    Ea(a);
                return N(function (c, b) {
                    var d = b[0], e = b[1], f = sb(e);
                    if (!Ka(e) && !f) return c;
                    e = f ? kg(e) : e;
                    wa(e) && c.push([d, e]);
                    return c
                }, [], a)
            }

            function lg(a, c, b) {
                void 0 === b && (b = 0);
                c = Ea(c);
                c = N(function (d, e) {
                    var f = e[0], g = e[1], h = sb(g);
                    if (!Ka(g) && !h) return d;
                    h ? g = lg(a, g, b + 1) : b || "yandex_cid" !== f ? ("phone_number" === f ? g = il(g) : "email" === f && (g = jl(g)), g = mg(a, g)) : g = H.resolve(g);
                    d.push(g.then(function (k) {
                        return [f, k]
                    }));
                    return d
                }, [], c);
                return H.all(c)
            }

            function jl(a) {
                var c = fb(a).toLowerCase().split("@"), b = c[0];
                c = c[1];
                if (!c) return a;
                c = c.replace("googlemail.com", "gmail.com");
                ng(c) && (c = "yandex.ru");
                "yandex.ru" === c ? b = b.replace(re, "-") : "gmail.com" === c && (b = b.replace(re, ""));
                a = og(b, "+");
                -1 !== a && (b = b.slice(0, a));
                return b + "@" + c
            }

            function il(a) {
                a = Ab(a);
                return "8" === a[0] ? "7" + a.slice(1) : a
            }

            function mg(a, c) {
                return new H(function (b, d) {
                    var e = (new a.TextEncoder).encode(c);
                    a.crypto.subtle.digest("SHA-256", e).then(function (f) {
                        f = new a.Blob([f], {type: "application/octet-binary"});
                        var g = new a.FileReader;
                        g.onload = function (h) {
                            h = n(h, "target.result");
                            var k =
                                (h || "").indexOf(",");
                            -1 !== k ? b(h.substring(k + 1)) : d(Gc("fpm.i"))
                        };
                        g.readAsDataURL(f)
                    }, d)
                })
            }

            function kl(a) {
                var c = n(a, "speechSynthesis.getVoices");
                if (!c) return "";
                a = M(c, a.speechSynthesis);
                return Kb(function (b) {
                    return z(u(b, n), ll)
                }, a())
            }

            function ml(a, c, b) {
                return I("x", z(q(O, sa("concat", "" + a), u(b, n)), c))
            }

            function nl(a, c) {
                var b = c.Ed;
                if (!ol(a, b)) return "";
                var d = [];
                a:{
                    var e = pl(a, b);
                    try {
                        var f = E(e, q)()();
                        break a
                    } catch (C) {
                        if ("ccf" === C.message) {
                            f = null;
                            break a
                        }
                        gb(C)
                    }
                    f = void 0
                }
                if (Ya(f)) var g = ""; else try {
                    g = f.toDataURL()
                } catch (C) {
                    g =
                        ""
                }
                (f = g) && d.push(f);
                var h = b.getContextAttributes();
                try {
                    var k = xa(b.getSupportedExtensions, "getSupportedExtensions") ? b.getSupportedExtensions() || [] : []
                } catch (C) {
                    k = []
                }
                k = I(";", k);
                f = se(b.getParameter(b.ALIASED_LINE_WIDTH_RANGE), b);
                e = se(b.getParameter(b.ALIASED_POINT_SIZE_RANGE), b);
                g = b.getParameter(b.ALPHA_BITS);
                h = h && h.antialias ? "yes" : "no";
                var l = b.getParameter(b.BLUE_BITS), m = b.getParameter(b.DEPTH_BITS), p = b.getParameter(b.GREEN_BITS),
                    r = b.getExtension("EXT_texture_filter_anisotropic") || b.getExtension("WEBKIT_EXT_texture_filter_anisotropic") ||
                        b.getExtension("MOZ_EXT_texture_filter_anisotropic");
                if (r) {
                    var w = b.getParameter(r.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                    0 === w && (w = 2)
                }
                w = {
                    wf: k,
                    "webgl aliased line width range": f,
                    "webgl aliased point size range": e,
                    "webgl alpha bits": g,
                    "webgl antialiasing": h,
                    "webgl blue bits": l,
                    "webgl depth bits": m,
                    "webgl green bits": p,
                    "webgl max anisotropy": r ? w : null,
                    "webgl max combined texture image units": b.getParameter(b.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
                    "webgl max cube map texture size": b.getParameter(b.MAX_CUBE_MAP_TEXTURE_SIZE),
                    "webgl max fragment uniform vectors": b.getParameter(b.MAX_FRAGMENT_UNIFORM_VECTORS),
                    "webgl max render buffer size": b.getParameter(b.MAX_RENDERBUFFER_SIZE),
                    "webgl max texture image units": b.getParameter(b.MAX_TEXTURE_IMAGE_UNITS),
                    "webgl max texture size": b.getParameter(b.MAX_TEXTURE_SIZE),
                    "webgl max varying vectors": b.getParameter(b.MAX_VARYING_VECTORS),
                    "webgl max vertex attribs": b.getParameter(b.MAX_VERTEX_ATTRIBS),
                    "webgl max vertex texture image units": b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
                    "webgl max vertex uniform vectors": b.getParameter(b.MAX_VERTEX_UNIFORM_VECTORS),
                    "webgl max viewport dims": se(b.getParameter(b.MAX_VIEWPORT_DIMS), b),
                    "webgl red bits": b.getParameter(b.RED_BITS),
                    "webgl renderer": b.getParameter(b.RENDERER),
                    "webgl shading language version": b.getParameter(b.SHADING_LANGUAGE_VERSION),
                    "webgl stencil bits": b.getParameter(b.STENCIL_BITS),
                    "webgl vendor": b.getParameter(b.VENDOR),
                    "webgl version": b.getParameter(b.VERSION)
                };
                te(d, w, ": ");
                a:{
                    try {
                        var v = b.getExtension("WEBGL_debug_renderer_info");
                        if (v) {
                            var x = {
                                "webgl unmasked vendor": b.getParameter(v.UNMASKED_VENDOR_WEBGL),
                                "webgl unmasked renderer": b.getParameter(v.UNMASKED_RENDERER_WEBGL)
                            };
                            break a
                        }
                    } catch (C) {
                    }
                    x = {}
                }
                te(d, x);
                if (!b.getShaderPrecisionFormat) return I("~", d);
                te(d, ql(b));
                return I("~", d)
            }

            function te(a, c, b) {
                void 0 === b && (b = ":");
                D(function (d) {
                    return a.push("" + d[0] + b + d[1])
                }, Ea(c))
            }

            function rl(a, c, b, d) {
                c = d.o("cc");
                d = E(["cc", ""], d.C);
                if (c) {
                    var e = c.split("&");
                    c = e[0];
                    if ((e = (e = e[1]) && Fa(e)) && 1440 < Y(a)(Za) - e) return d();
                    b.C("cc", c)
                } else na(0)(c) ||
                d()
            }

            function sl(a, c, b, d) {
                return la(a, c, function (e) {
                    if ("0" === n(e, "settings.pcs") && !rd(a)) if (e = d.o("zzlc"), Z(e) || Ya(e) || "na" === e) {
                        e = "ru";
                        var f = ue(a, 68), g = ve(a, 79);
                        if (f || g) e = "md";
                        if (f = hb(a)) {
                            var h = f("iframe");
                            y(h.style, {display: "none", width: "1px", height: "1px", visibility: "hidden"});
                            h.src = "https://mc.yandex." + e + pg("L21ldHJpa2EvenpsYy5odG1s");
                            if (e = Lb(a)) {
                                e.appendChild(h);
                                var k = 0, l = ia(a).D(a, ["message"], A(a, "zz.m", function (m) {
                                    (m = n(m, "data")) && m.substr && "__ym__zz" === m.substr(0, 8) && ($b(h), m = m.substr(8), d.C("zzlc",
                                        m), b.C("zzlc", m), l(), Pa(a, k))
                                }));
                                k = ea(a, q(l, u(h, $b)), 3E3)
                            }
                        }
                    } else b.C("zzlc", e)
                })
            }

            function tl(a, c, b) {
                var d, e;
                c = Bb(u(a, n), ul);
                c = Z(c) ? null : n(a, c);
                if (n(a, "navigator.onLine") && c && c && n(c, "prototype.constructor.name")) {
                    var f = new c((d = {}, d.iceServers = [], d));
                    a = n(f, "createDataChannel");
                    T(a) && (M(a, f, "y.metrika")(), a = n(f, "createOffer"), T(a) && !a.length && (a = M(a, f)(), d = n(a, "then"), T(d) && M(d, a, function (g) {
                        var h = n(f, "setLocalDescription");
                        T(h) && M(h, f, g, F, F)()
                    })(), y(f, (e = {}, e.onicecandidate = function () {
                        var g, h = n(f,
                            "close");
                        if (T(h)) {
                            h = M(h, f);
                            try {
                                var k = (g = n(f, "localDescription.sdp")) && g.match(/c=IN\s[\w\d]+\s([\w\d:.]+)/)
                            } catch (l) {
                                f.onicecandidate = F;
                                "closed" !== f.iceConnectionState && h();
                                return
                            }
                            k && 0 < k.length && (g = ac(k[1]), b.C("pp", g));
                            f.onicecandidate = F;
                            h()
                        }
                    }, e))))
                }
            }

            function vl(a, c, b) {
                var d, e = Hc(a, c);
                if (e) {
                    e.V.D(["gpu-get"], function () {
                        var h;
                        return h = {}, h.type = "gpu-get", h.pu = b.o("pu"), h
                    });
                    var f = n(a, "opener");
                    if (f) {
                        var g = ea(a, E([a, c, b], qg), 200, "pu.m");
                        e.dc(f, (d = {}, d.type = "gpu-get", d), function (h, k) {
                            var l = n(k, "pu");
                            l && (Pa(a, g), b.C("pu", l))
                        })
                    } else qg(a, c, b)
                }
            }

            function qg(a, c, b) {
                var d = n(a, "location.host");
                a = sd(a, c);
                b.C("pu", "" + ac(d) + a)
            }

            function rg(a, c, b) {
                c = jc(a, void 0, c);
                c = sg(a, c.o("phc_settings") || "");
                var d = n(c, "clientId"), e = n(c, "orderId"), f = n(c, "service_id"), g = n(c, "phones") || [];
                return d && e && g ? wl(a, b.tc, {gd: xl}).Uc(g).then(function (h) {
                    return yl(b, {Ma: d, Ta: e, cd: f}, h.Z, g, h.ba)
                })["catch"](function () {
                }) : H.resolve()
            }

            function xl(a, c, b) {
                a = zl(b.xb);
                if ("href" === b.bc) {
                    var d = b.Fa;
                    c = d.href;
                    b = c.replace(a, b.va);
                    if (c !== b) return d.href =
                        b, !0
                } else if ((a = null === (d = b.Fa.textContent) || void 0 === d ? void 0 : d.replace(a, b.va)) && a !== b.Fa.textContent) return b.Fa.textContent = a, !0;
                return !1
            }

            function yl(a, c, b, d, e) {
                var f;
                c.Ma && c.Ta && (c.Ma === a.Ma && c.Ta === a.Ta || y(a, c, {
                    Z: {},
                    Kb: !0
                }), 0 < e && Ga(a.ba, [e]), D(function (g) {
                    var h, k, l = g[0];
                    g = g[1];
                    var m = +(a.Z[l] && a.Z[l][g] ? a.Z[l][g] : 0);
                    y(a.Z, (h = {}, h[l] = (k = {}, k[g] = m, k), h))
                }, d), D(function (g) {
                    var h, k, l = g[0];
                    g = g[1];
                    var m = 1 + (a.Z[l] ? a.Z[l][g] : 0);
                    y(a.Z, (h = {}, h[l] = (k = {}, k[g] = m, k), h))
                }, b), a.Jc && (a.Kb || b.length) && ((c = ua(a.l,
                    a.tc)) && c.params("__ym", "phc", (f = {}, f.clientId = a.Ma, f.orderId = a.Ta, f.service_id = a.cd, f.phones = a.Z, f.performance = a.ba, f)), a.Kb = !1))
            }

            function Al(a) {
                a = hb(a);
                if (!a) return "";
                a = a("video");
                try {
                    var c = sa("canPlayType", a), b = Kb(function (d) {
                        return z(q(O, sa("concat", d + "; codecs=")), Bl)
                    }, tg);
                    return z(c, [].concat(tg, b))
                } catch (d) {
                    return "canPlayType"
                }
            }

            function Cl(a) {
                var c = n(a, "matchMedia");
                if (c && ya("matchMedia", c)) {
                    var b = sa("matchMedia", a);
                    return N(function (d, e) {
                        d[e] = b("(" + e + ")");
                        return d
                    }, {}, Dl)
                }
            }

            function ql(a) {
                return N(function (c,
                                   b) {
                    var d = b[0], e = b[1];
                    c[d + " precision"] = n(e, "precision") || "n";
                    c[d + " precision rangeMin"] = n(e, "rangeMin") || "n";
                    c[d + " precision rangeMax"] = n(e, "rangeMax") || "n";
                    return c
                }, {}, [["webgl vertex shader high float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT)], ["webgl vertex shader medium", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT)], ["webgl vertex shader low float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT)], ["webgl fragment shader high float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,
                    a.HIGH_FLOAT)], ["webgl fragment shader medium float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT)], ["webgl fragment shader low float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT)], ["webgl vertex shader high int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT)], ["webgl vertex shader medium int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT)], ["webgl vertex shader low int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT)], ["webgl fragment shader high int",
                    a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT)], ["webgl fragment shader medium int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT)], ["webgl fragment shader low int precision", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT)]])
            }

            function pl(a, c) {
                return [function () {
                    var b = c.createBuffer();
                    b && c.getParameter && ya("getParameter", c.getParameter) || we();
                    c.bindBuffer(c.ARRAY_BUFFER, b);
                    var d = new a.Float32Array(El);
                    c.bufferData(c.ARRAY_BUFFER, d, c.STATIC_DRAW);
                    b.le = 3;
                    b.se = 3;
                    d = c.createProgram();
                    var e = c.createShader(c.VERTEX_SHADER);
                    d && e || we();
                    return {ac: d, Ve: e, Ue: b}
                }, function (b) {
                    var d = b.ac, e = b.Ve;
                    c.shaderSource(e, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}");
                    c.compileShader(e);
                    c.attachShader(d, e);
                    (d = c.createShader(c.FRAGMENT_SHADER)) || we();
                    return y(b, {Wd: d})
                }, function (b) {
                    var d = b.ac, e = b.Wd;
                    c.shaderSource(e, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}");
                    c.compileShader(e);
                    c.attachShader(d, e);
                    c.linkProgram(d);
                    c.useProgram(d);
                    return b
                }, function (b) {
                    var d = b.ac;
                    b = b.Ue;
                    d.Te = c.getAttribLocation(d, "attrVertex");
                    d.ue = c.getUniformLocation(d, "uniformOffset");
                    c.enableVertexAttribArray(d.fg);
                    c.vertexAttribPointer(d.Te, b.le, c.FLOAT, !1, 0, 0);
                    c.uniform2f(d.ue, 1, 1);
                    c.drawArrays(c.TRIANGLE_STRIP, 0, b.se);
                    return c.canvas
                }]
            }

            function ol(a, c) {
                if (!T(a.Float32Array)) return !1;
                var b = n(c, "canvas");
                if (!b || !ya("toDataUrl", b.toDataURL)) return !1;
                try {
                    c.createBuffer()
                } catch (d) {
                    return !1
                }
                return !0
            }

            function se(a, c) {
                c.clearColor(0, 0, 0, 1);
                c.enable(c.DEPTH_TEST);
                c.depthFunc(c.LEQUAL);
                c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT);
                return "[" + n(a, "0") + ", " + n(a, "1") + "]"
            }

            function Fl(a) {
                try {
                    var c = wa(a) ? a : [];
                    return I(",", [a.name, a.description, q(Ba, lc(Boolean), $a(Gl), Ic(","))(c)])
                } catch (b) {
                    return ""
                }
            }

            function Gl(a) {
                return I(",", [a.description, a.suffixes, a.type])
            }

            function Hl(a, c, b) {
                function d(r) {
                    return function () {
                        var w = b.o("scip", "") + r;
                        b.C("scip", w)
                    }
                }

                var e, f = Jc(a, "ci");
                f = tb(a, f);
                var g = xe(a), h = Y(a)(Za), k =
                    ["sync.cook.int"], l = Il(g.o("sci"));
                if (!l || 1440 < h - l) {
                    b.C("scip", "0");
                    var m = d("a"), p = mc(a, c);
                    return f({
                        O: {ea: k, Ia: 1500, Db: !0},
                        F: (e = {}, e.duid = p, e.hid = "" + Mb(a), e)
                    }, ["https://an.yandex.ru/sync_cookie"]).then(function (r) {
                        r = n(r.yb, "CookieMatchUrls");
                        ba(r) || (r = []);
                        wa(r) ? d("1")() : m();
                        var w = Jc(a, "c"), v = tb(a, w);
                        r = z(function (x, C) {
                            var K = "" + x + (nc(x, "?") ? "&" : "?") + "duid=" + p;
                            return v({O: {ea: k, Ia: 1500}}, ["https://" + K]).then(F, q(d("b"), d("" + C)))
                        }, U(Ka, r));
                        return H.all(r)
                    }, m).then(function () {
                        var r = b.o("scip");
                        !r || nc(r,
                            "a") || nc(r, "b") || (g.C("sci", h), d("2")())
                    }, F)
                }
                return H.resolve()
            }

            function ug(a) {
                return {
                    N: function (c, b) {
                        if (!c.G) return b();
                        var d = J(a).o("fid");
                        !vg && d && (md(c, "fid", d), vg = !0);
                        return b()
                    }
                }
            }

            function Jl(a, c) {
                var b = a.document;
                if (L(b.readyState, ["interactive", "complete"])) Yb(a, c); else {
                    var d = ia(a), e = d.D, f = d.Za, g = function () {
                        f(b, ["DOMContentLoaded"], g);
                        f(a, ["load"], g);
                        c()
                    };
                    e(b, ["DOMContentLoaded"], g);
                    e(a, ["load"], g)
                }
            }

            function ye(a) {
                return {
                    N: function (c, b) {
                        var d = c.G;
                        if (d) {
                            var e = J(a).o("adBlockEnabled");
                            e && d.C("adb",
                                e)
                        }
                        b()
                    }
                }
            }

            function Kl(a) {
                var c = A(a, "i.clch", Ll);
                ia(a).D(a.document, ["click"], M(c, null, a), {passive: !1});
                return function (b) {
                    var d = oa.sa, e = a.Ya[oa.eb], f = !!e._informer;
                    e._informer = y({domain: "informer.yandex.ru"}, b);
                    f || Fc(a, {src: d + "//informer.yandex.ru/metrika/informer.js"})
                }
            }

            function oc(a, c) {
                return {
                    N: function (b, d) {
                        ze(b) ? d() : la(a, c, function (e) {
                            var f;
                            if (e = n(e, "settings.hittoken")) e = (f = {}, f.hittoken = e, f), b.F = y(b.F || {}, e);
                            d()
                        })
                    }
                }
            }

            function Ml(a, c) {
                var b = La(a);
                if ("" === b.o("cc")) {
                    var d = u("cc", b.C);
                    d(0);
                    var e =
                        Y(a), f = J(a);
                    f = q(S(db({yb: 1}) + ".c"), Kc(function (g) {
                        d(g + "&" + e(Za))
                    }), u("cc", f.C));
                    ka(a, "6", c)({
                        O: {
                            Db: !0,
                            od: !1
                        }
                    }, ["https://mc.yandex.md/cc"]).then(f)["catch"](q(Kc(function () {
                        var g = e(Za);
                        b.C("cc", "&" + g)
                    }), A(a, "cc")))
                }
            }

            function td(a, c) {
                if (!c) return !1;
                var b = R(a);
                return (new RegExp(c)).test("" + b.pathname + b.hash + b.search)
            }

            function Nl(a, c) {
                return la(a, c, function (b) {
                    var d = n(b, "settings.dr");
                    return {Nd: Ol(a, d), isEnabled: n(b, "settings.auto_goals")}
                })
            }

            function Pl(a, c, b, d, e) {
                b = Ae(a.document.body, b);
                d = Ae(a.document.body,
                    d);
                L(e.target, [b, d]) && Be(a, c)
            }

            function wg(a, c, b, d) {
                (b = Ql(a, d, b)) && Be(a, c, b)
            }

            function xg(a, c) {
                var b = yg(a, c);
                return Rl(a, b)
            }

            function yg(a, c) {
                var b = Ae(a.document.body, c);
                return b ? Sl(a, b) : ""
            }

            function Be(a, c, b) {
                if (c = ua(a, c)) a = ic(["dr", b || "" + Va(a, 10, 99)]), c.params(ic(["__ym", a]))
            }

            function Ae(a, c) {
                var b = null;
                try {
                    b = c ? pc(c, a) : b
                } catch (d) {
                }
                return b
            }

            function zg(a) {
                a = Ba(pg(a));
                return z(function (c) {
                    c = c.charCodeAt(0).toString(2);
                    return Ag("0", 8, c)
                }, a)
            }

            function Sl(a, c) {
                if (!c) return "";
                var b = [], d = n(a, "document");
                Bg(a,
                    c, function (e) {
                        if (e.nodeType === d.TEXT_NODE) var f = e.textContent; else e instanceof a.HTMLImageElement ? f = e.alt : e instanceof a.HTMLInputElement && (f = e.value);
                        (f = f && f.trim()) && b.push(f)
                    });
                return 0 === b.length ? "" : b.join(" ")
            }

            function Tl(a, c, b) {
                a = ta(b);
                b = a[1];
                "track" === a[0] && c({version: "0", jb: b})
            }

            function Ul(a, c, b) {
                if (b) {
                    var d = b.version;
                    (b = n(Vl, d + "." + b.jb)) && (c && L(b, Wl) || a("ym-" + b + "-" + d))
                }
            }

            function ud(a, c, b) {
                return function (d) {
                    var e, f, g = ua(c, b);
                    g && Xl(a, d, c) && (g = M(g.params, g), (d = Ce(a, d, "goods")) && g && g((e = {},
                        e.__ym = (f = {}, f.ecommerce = [d], f), e)))
                }
            }

            function Yl(a, c, b, d) {
                var e, f;
                c = n(d, "ecommerce") || {};
                var g = n(d, "event") || "";
                c = (g = Cg[g]) ? Ce(g, c, "items") : void 0;
                if (!c) a:{
                    c = d;
                    !ba(d) && vd(a, wa(d)) && (c = ta(c));
                    if (ba(c) && (a = Cg[c[1]], "event" === c[0] && a)) {
                        c = Ce(a, c[2], "items");
                        break a
                    }
                    c = void 0
                }
                (d = c || Zl(d)) && b && b((e = {}, e.__ym = (f = {}, f.ecommerce = [d], f), e))
            }

            function Zl(a) {
                var c = n(a, "ecommerce") || {};
                a = U(bc($l), ca(c));
                a = N(function (b, d) {
                    b[d] = c[d];
                    return b
                }, {}, a);
                return ca(a).length ? a : void 0
            }

            function Xl(a, c, b) {
                var d = !1, e = "";
                if (!sb(c)) return pb(b,
                    "", "Ecommerce data should be an object"), d;
                var f = c.goods;
                switch (a) {
                    case "detail":
                    case "add":
                    case "remove":
                        ba(f) && f.length ? (d = Dg(function (g) {
                            return sb(g) && (Ka(g.id) || vd(b, g.id) || Ka(g.name))
                        }, f)) || (e = "All items in 'goods' should be objects and contain 'id' or 'name' field") : e = "Ecommerce data should contain 'goods' non-empty array";
                        break;
                    case "purchase":
                        vd(b, c.id) || Ka(c.id) ? d = !0 : e = "Purchase object should contain string or number 'id' field"
                }
                pb(b, "", e);
                return d
            }

            function Ce(a, c, b) {
                var d, e;
                if (c) {
                    var f =
                        c.purchase || c;
                    c = ca(f);
                    var g = f[b];
                    if (g) {
                        var h = (d = {}, d[a] = (e = {}, e.products = z(am, g), e), d);
                        1 < c.length && (h[a].actionField = N(function (k, l) {
                            if (l === b) return k;
                            if ("currency" === l) return h.currencyCode = f.currency, k;
                            k[De[l] || l] = f[l];
                            return k
                        }, {}, c));
                        return h
                    }
                }
            }

            function am(a) {
                var c = {};
                D(function (b) {
                    var d = De[b] || b;
                    -1 !== b.indexOf("item_category") ? (d = De.item_category, c[d] = c[d] ? c[d] + ("/" + a[b]) : a[b]) : c[d] = a[b]
                }, ca(a));
                return c
            }

            function fg(a, c, b) {
                void 0 === b && (b = O);
                var d = Ee(a);
                b(d);
                var e = u(d, bm);
                Fe(a, c, function (f) {
                    f.ub.D(e)
                });
                return d
            }

            function bm(a, c) {
                var b = n(c, "ymetrikaEvent");
                b && a.T(n(b, "type"), b)
            }

            function Fe(a, c, b, d) {
                void 0 === b && (b = F);
                void 0 === d && (d = !1);
                var e = Lc(a);
                if (c && T(c.push)) {
                    var f = c.push;
                    c.push = function () {
                        var g = ta(arguments), h = g[0];
                        d && e.T(h);
                        g = f.apply(c, g);
                        d || e.T(h);
                        return g
                    };
                    a = {
                        ub: e, unsubscribe: function () {
                            c.push = f
                        }
                    };
                    b(a);
                    D(e.T, c);
                    return a
                }
            }

            function ld(a) {
                a = J(a);
                var c = a.o("dataLayer", []);
                a.C("dataLayer", c);
                return c
            }

            function al(a, c) {
                var b, d;
                a.push((b = {}, b.ymetrikaEvent = (d = {}, d.type = c, d), b))
            }

            function cm(a, c, b) {
                var d,
                    e = Eg(a, c), f = R(a);
                f = wd(f.protocol + "//" + f.hostname + f.pathname);
                c = sd(a, c);
                var g = "";
                do g += Va(a); while (g.length < c.length);
                g = g.slice(0, c.length);
                a = "";
                for (var h = 0; h < c.length; h += 1) a += (c.charCodeAt(h) + g.charCodeAt(h) - 96) % 10;
                c = [g, a];
                a = c[0];
                c = c[1];
                return (d = {}, d.mf = "https://adstat.yandex.ru/track?service=metrika&id=" + c + "&mask=" + a + "&ref=" + f, d.rt = "https://" + e + ".mc.yandex.ru/watch/3/1?browser-info=rt:1", d)[b]
            }

            function dm(a, c, b, d) {
                a = n(d, "data");
                if (Ka(a)) {
                    var e = a.split("*");
                    a = e[0];
                    var f = e[1];
                    e = e[2];
                    "sc.frame" === a ?
                        d.source.postMessage("sc.images*" + c, "*") : "sc.image" === a && f === c && b(e)
                }
            }

            function em(a) {
                var c = a.l, b = ub(a.X);
                if (b) {
                    var d = Math.random();
                    a = {x: b.scrollLeft, y: b.scrollTop};
                    if (b.Vb) {
                        if (d = Ge[b.Vb], !d || 10 > Math.abs(a.x - d.x) && 10 > Math.abs(a.y - d.y)) return
                    } else {
                        for (; Ge[d];) d = Math.random();
                        b.Vb = d
                    }
                    Ge[b.Vb] = a;
                    if (b !== c.document) {
                        d = vb(c, b);
                        c = Ha(c);
                        var e = [];
                        b = b[za];
                        !b || 0 > b ? a = [] : (Ia(e, 16), G(e, c), G(e, a.x), G(e, a.y), G(e, b), a = e);
                        a = X(d, a)
                    } else a = [];
                    return a
                }
            }

            function Fg(a) {
                var c = a.l, b = a.X;
                Gg(a);
                if (b.touches && b.touches.length) {
                    var d =
                        ub(b);
                    if (d && d !== c.document) return X(vb(c, d), Kb(function (e) {
                        return Hg(c, Ha(c), "touch", d, [e.pageX, e.pageY], 0, 0)
                    }, Ba(b.touches)))
                }
            }

            function fm(a) {
                var c = a.l;
                a = Ha(c);
                var b = xd(c), d = Ig(c);
                c = [];
                var e = b[0];
                b = b[1];
                var f = d[0];
                d = d[1];
                Ia(c, 28);
                G(c, a);
                G(c, e);
                G(c, b);
                G(c, f);
                G(c, d);
                return c
            }

            function Jg(a) {
                var c = [];
                return Qa(a.l, c, 13) ? [] : c
            }

            function gm(a) {
                var c = a.l;
                a = a.X;
                var b = ub(a);
                if (b) {
                    var d;
                    "wheel" === a.type ? d = 0 < a.deltaY ? 1 : 0 > a.deltaY ? 2 : 0 : "mousewheel" === a.type && a.wheelDelta && (d = 0 < a.wheelDelta ? 2 : 0 > a.wheelDelta ? 1 : 0);
                    if (d) {
                        var e = yd(c, a);
                        a = vb(c, b);
                        c = Ha(c);
                        e = [e.x, e.y];
                        b = b[za];
                        if (!b || 0 > b) b = []; else {
                            var f = [];
                            Ia(f, 31);
                            G(f, c);
                            G(f, b);
                            G(f, e[0]);
                            G(f, e[1]);
                            Ia(f, 0);
                            Ia(f, 0);
                            Ia(f, d);
                            b = f
                        }
                        return X(a, b)
                    }
                }
            }

            function Gg(a) {
                var c = a.l;
                a = He(c);
                var b = Y(c)(aa);
                if (!(10 > b - Kg || 10 > Math.abs(a.x - Ie.x) && 10 > Math.abs(a.y - Ie.y))) return Kg = b, Ie = a, c = Ha(c), b = [], Ia(b, 3), G(b, c), G(b, a.x), G(b, a.y), b
            }

            function hm(a) {
                var c = a.l, b = a.X, d = Y(c)(aa), e = d - Lg;
                if (!(10 > e)) {
                    c = yd(c, b);
                    b = Je.x - c.x;
                    var f = Je.y - c.y;
                    b = b * b + f * f;
                    if (!(0 >= b || 16 > b && 100 > e || 20 > e && 256 > b)) return Lg =
                        d, Je = c, Mc(a)
                }
            }

            function im(a, c, b, d, e) {
                function f() {
                    k && k.stop()
                }

                if (!c.qc) return H.resolve(F);
                var g = ka(a, "4", c), h = {G: ra()};
                b = new jm(a, b, function (l, m, p) {
                    if (!g) return H.resolve();
                    m = "wv-data=" + Mg(l, !0);
                    for (var r = l.length, w = 0, v = 255, x = 255, C, K, Q; r;) {
                        C = 21 < r ? 21 : r;
                        r -= C;
                        do K = "string" === typeof l ? l.charCodeAt(w) : l[w], w += 1, 255 < K && (Q = K >> 8, K &= 255, K ^= Q), v += K, x += v; while (--C);
                        v = (v & 255) + (v >> 8);
                        x = (x & 255) + (x >> 8)
                    }
                    l = (v & 255) + (v >> 8) << 8 | (x & 255) + (x >> 8);
                    return g(y({}, h, {O: {W: m}, F: {"wv-check": "" + (65535 === l ? 0 : l), "wv-type": "0"}}),
                        c, p)["catch"](A(a, "m.n.m.s"))
                });
                var k = km(a, b, d, e);
                return la(a, c, function (l) {
                    l && J(a).C("isEU", n(l, "settings.eu"));
                    if (!J(a).o("oo") && k) {
                        var m = cc(a), p = m.o("visorc");
                        L(p, ["w", "b"]) || (p = "");
                        Ng(a) && Og(a, zd, "visorc") && !lm.test(ib(a) || "") || (p = "b");
                        l = n(l, "settings.webvisor.recp");
                        if (!a.isFinite(l) || 0 > l || 1 < l) p = "w";
                        p || (p = J(a).o("hitId") % 1E4 / 1E4 < l ? "w" : "b");
                        m.C("visorc", p, 30);
                        "w" === p && k.start()
                    }
                    return f
                })
            }

            function km(a, c, b, d) {
                var e = a.document, f = [], g = ia(a), h = ":submit" + Math.random(), k = [], l = M(c.flush, c),
                    m = fa(function (w,
                                     v) {
                        A(a, "hfv." + w, function () {
                            try {
                                var x = v.type
                            } catch (C) {
                                return
                            }
                            x = L(x, d);
                            c.push(v, {type: w});
                            x && l()
                        })()
                    }), p = A(a, "sfv", function () {
                        var w = b(a), v = mm(a);
                        D(function (x) {
                            f.push(g.D(x.target, [x.event], m(x.type)))
                        }, w);
                        D(function (x) {
                            f.push(g.D(x.target, [x.event], A(a, "hff." + x.type + "." + x.event, function (C) {
                                D(Ca({l: a, X: C, flush: l}), x.H)
                            })))
                        }, v);
                        k = Pg(a, "form", e);
                        e.attachEvent && (w = Pg(a, "form *", e), D(function (x) {
                            f.push(g.D(x, ["submit"], m("form")))
                        }, k), D(function (x) {
                            Ke(x) && f.push(g.D(x, ["change"], m("formInput")))
                        }, w));
                        D(function (x) {
                            var C =
                                x.submit;
                            if (T(C) || "object" === typeof C && nm.test("" + C)) x[h] = C, x.submit = A(a, "fv", function () {
                                var K = {target: x, type: "submit"};
                                m("document")(K);
                                return x[h]()
                            })
                        }, k)
                    }), r = A(a, "ufv", function () {
                        D(ma, f);
                        D(function (w) {
                            w && (w.submit = w[h])
                        }, k);
                        c.flush()
                    });
                return {start: p, stop: r}
            }

            function Qg(a, c) {
                var b = U(function (e) {
                    return 0 < e.H.length
                }, c), d = Rg({target: a.document, type: "document"});
                return z(q(O, d, om(a)), b)
            }

            function Sg(a, c) {
                var b = a.l, d = [], e = c.form;
                if (!c[za] && e) {
                    var f = e.elements;
                    e = e.length;
                    for (var g = 0; g < e; g += 1) {
                        var h =
                            f[g];
                        Ad(h) && !h[za] && Ga(d, vb(b, h))
                    }
                } else Ga(d, vb(b, c));
                return d
            }

            function Le(a) {
                if (Nc) {
                    Nc = !1;
                    var c = Ha(a.l), b = [];
                    Qa(a.l, b, 15) ? a = [] : (G(b, c), a = b);
                    return a
                }
            }

            function Tg(a) {
                if (!Nc) {
                    Nc = !0;
                    a = Ha(a.l);
                    var c = [];
                    Ia(c, 14);
                    G(c, a);
                    return c
                }
            }

            function pm(a, c, b) {
                var d = c[za];
                if (d) {
                    a:{
                        var e = Ha(a), f = c[za];
                        if (0 < f) {
                            var g = [];
                            c = Me(a, c);
                            var h = dc[f], k = c[0] + "x" + c[1], l = c[2] + "x" + c[3];
                            if (k !== h.Qc) {
                                h.Qc = k;
                                if (Qa(a, g, 9)) {
                                    a = [];
                                    break a
                                }
                                G(g, e);
                                G(g, f);
                                G(g, c[0]);
                                G(g, c[1])
                            }
                            if (l !== h.size) {
                                h.size = l;
                                if (Qa(a, g, 10)) {
                                    a = [];
                                    break a
                                }
                                G(g, e);
                                G(g, f);
                                G(g, c[2]);
                                G(g, c[3])
                            }
                            if (g.length) {
                                a = g;
                                break a
                            }
                        }
                        a = []
                    }
                    Ga(b, a)
                }
                return d
            }

            function Bd(a, c, b) {
                void 0 === b && (b = !1);
                if ("button" === c.getAttribute("type")) return {Sa: !1, Ac: !1, Ic: !1};
                var d = c && Nb("ym-record-keys", c), e = Ug(c);
                a = Ne(a, c) || b && e;
                return {Sa: !(d || !a), Ac: d, Ic: e}
            }

            function Ne(a, c) {
                return Vg(a, c) || Oc(a, c) ? !0 : Wg(a, c)
            }

            function Ug(a) {
                if (!a) return !1;
                var c = a.placeholder, b = a.type;
                a = U(Xg, [a.className, a.id, a.name]);
                return b && L(b, qm) || Ra(Ma(rm), a) || Xg(c) && sm.test(c)
            }

            function Xg(a) {
                return !!(a && 2 < a.length)
            }

            function Yg(a,
                        c) {
                return c && Nb("(ym-disable-submit|-metrika-noform)", c)
            }

            function Wg(a, c) {
                if (pa(c)) return !1;
                if (Zg(c)) {
                    var b = c.parentNode;
                    return (pa(b) ? 0 : 11 === b.nodeType) ? !1 : Wg(a, c.parentNode)
                }
                if (tm.test(c.className)) return !0;
                b = $g(a);
                if (!b) return !1;
                var d = b.call(c, ".ym-hide-content *");
                return d && (um.test(c.className) || b.call(c, ".ym-hide-content .ym-show-content *")) ? !1 : d
            }

            function vm(a) {
                return !!Bb(function (c) {
                    return L(c.type, ["articleInfo", "publishersHeader"])
                }, a)
            }

            function Cd(a) {
                return ba(a) ? z(Cd, a) : pa(a) || "object" !==
                typeof a ? a : N(function (c, b) {
                    var d = b[0], e = b[1], f = wm[d];
                    Z(f) && (f = d);
                    e = L(f, xm) ? e : Cd(e);
                    f ? c[f] = e : c[d] = e;
                    return c
                }, {}, Ea(a))
            }

            function ah(a, c, b) {
                return function (d, e, f) {
                    var g;
                    d = y({G: ra()}, d);
                    d.F || (d.F = {});
                    var h = d.F;
                    h.wmode = "0";
                    h["wv-part"] = "" + f;
                    h["wv-hit"] = h["wv-hit"] || "" + Mb(a);
                    h["page-url"] = h["page-url"] || a.location.href;
                    h.rn = h.rn || "" + Va(a);
                    if (!h["wv-type"]) {
                        f = d.ta || {};
                        var k = f.Gd, l = "4", m = "2";
                        f.fe && (l = "5", m = "3");
                        h["wv-type"] = k ? l : m
                    }
                    h = {
                        qa: {wa: "webvisor/" + e.id}, O: y(d.O, {
                            Ua: (g = {}, g["Content-Type"] = "text/plain",
                                g), md: "POST"
                        }), F: h
                    };
                    e = Ga(Oe(a, "wv", e), b);
                    return Dd(a, c, e)(y(d, h))
                }
            }

            function zm(a, c) {
                return la(a, c, function (b) {
                    var d = J(a);
                    P(c);
                    if (!d.o("dSync", !1)) return d.C("dSync", !0), bh(a, b, {
                        Aa: c,
                        wb: "s",
                        Tb: "ds",
                        Ge: function (e, f, g) {
                            var h = e.yb;
                            e = e.host;
                            if (n(h, "settings")) return gb(Ja("ds.e"));
                            f = f(aa) - g;
                            g = e[1];
                            var k, l;
                            h = ra((k = {}, k.di = h, k.dit = f, k.dip = g, k));
                            k = (l = {}, l["page-url"] = R(a).href, l);
                            return ka(a, "S", ch)({G: h, F: k}, ch)["catch"](A(a, "ds.rs"))
                        }
                    })
                })
            }

            function bh(a, c, b) {
                var d = b.Aa, e = Y(a), f = Am(a, c.userData, d), g = Bm(a);
                return g.length ? Cm(a, e, f, c, b).then(function () {
                    return Dm(a, g, f, e, b)
                }, F) : H.resolve()
            }

            function Bm(a) {
                var c = Ed(a);
                a = q(Pe, bc(["iPhone", "iPad"]))(a);
                return c ? Em : a ? Fm : []
            }

            function Dm(a, c, b, d, e) {
                var f = e.Ge, g = void 0 === f ? F : f, h = e.Tb, k = d(aa);
                return Gm(a, c, e)(rb(function (l) {
                    D(function (m) {
                        m && Fd(a, h + ".s", m)
                    }, l);
                    l = d(Za);
                    b.C(h, l)
                }, function (l) {
                    b.C(h, d(Za));
                    g(l, d, k)
                }))
            }

            function Cm(a, c, b, d, e) {
                var f = e.Tb, g = e.Aa;
                return new H(function (h, k) {
                    var l = b.o(f, 0);
                    l = parseInt("" + l, 10);
                    return 60 >= c(Za) - l ? k() : Hm(a) ? h(void 0) : dh(d) ? k() :
                        h(Im(a, g))
                })
            }

            function Gm(a, c, b) {
                var d = b.wb, e = b.data, f = ka(a, d, b.Aa);
                a = y({}, eh);
                e && y(a.F, e);
                return Jm(z(function (g) {
                    return Km(f(y({O: {od: !1, Be: !0}}, eh), z(function (h) {
                        var k = h[1], l = h[2];
                        h = I("", z(function (m) {
                            return String.fromCharCode(m.charCodeAt(0) + 10)
                        }, h[0].split("")));
                        return "http" + (l ? "s" : "") + "://" + h + ":" + k + "/" + Lm[d]
                    }, g)).then(function (h) {
                        return y({}, h, {host: g[h.kd]})
                    }))
                }, c))
            }

            function Am(a, c, b) {
                var d = c || {}, e = ka(a, "u", b), f = La(a);
                return {
                    o: function (g, h) {
                        return Z(d[g]) ? f.o(g, h) : d[g]
                    }, C: function (g, h) {
                        var k,
                            l = "" + h;
                        d[g] = l;
                        f.C(g, l);
                        return e({F: (k = {}, k.key = g, k.value = l, k)}, [oa.sa + "//" + ec + "/user_storage_set"], {})["catch"](A(a, "u.d.s.s"))
                    }
                }
            }

            function Mm(a, c) {
                try {
                    var b = c.origin
                } catch (e) {
                }
                if (b) {
                    var d = Ra(q(Ma, Ca(b)), [/^http:\/\/([\w\-.]+\.)?webvisor\.com\/?$/, /^https:\/\/([\w\-.]+\.)?metri[kc]a\.yandex\.(ru|ua|by|kz|com|com\.tr)\/?$/]);
                    if (N(function (e, f) {
                        return e || f(b)
                    }, !1, fh) || d) d = Cb(a, c.data), "appendremote" === n(d, "action") && Nm(a, c, d)
                }
            }

            function gh(a, c) {
                var b, d, e, f, g = c.data;
                g = void 0 === g ? "" : g;
                var h = c.id;
                h = void 0 ===
                h ? "" : h;
                var k = J(a), l = {};
                l.getCachedTags = hh;
                l.form = (b = {}, b.closest = u(a, Zf), b.select = Om, b.getData = u(a, ag), b);
                l.button = (d = {}, d.closest = u(a, ih), d.select = jh, d.getData = u(a, kh), d);
                l.phone = (e = {}, e.hidePhones = E([a, null, [g]], lh), e);
                l.status = (f = {}, f.checkStatus = E([a, Fa(h)], Pm), f);
                k.C("_u", l);
                b = c.lang;
                b = void 0 === b ? "" : b;
                d = c.appVersion;
                d = void 0 === d ? "" : d;
                e = c.fileId;
                e = void 0 === e ? "" : e;
                f = c.beta;
                f = void 0 === f ? !1 : f;
                d = I(".", q($a(q(O, Fa)), lc(Boolean))(d.split(".")));
                L(e, Qm) && L(b, ["ru", "en", "tr"]) ? (b = (f ? "https://s3.mds.yandex.net/internal-metrika-betas" :
                    "https://yastatic.net/s3/metrika") + (d ? "/" + d : "") + "/form-selector/" + (e + "_" + b + ".js"), b = mh(b) ? b : "") : b = "";
                b && Fc(a, {src: b})
            }

            function Rm(a, c) {
                var b = hb(a);
                if (b) {
                    b = b("div");
                    var d = Lb(a);
                    if (d) {
                        b.innerHTML = '<iframe name="RemoteIframe" allowtransparency="true" style="position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"></iframe>';
                        var e = b.firstChild;
                        e.onload = function () {
                            Fc(e.contentWindow, {src: c})
                        };
                        a._ym__remoteIframeEl = e;
                        d.appendChild(b);
                        b.removeChild(e);
                        var f = null;
                        b.attachShadow ? f = b.attachShadow({mode: "open"}) :
                            b.createShadowRoot ? f = b.createShadowRoot() : b.webkitCreateShadowRoot && (f = b.webkitCreateShadowRoot());
                        f ? f.appendChild(e) : (d.appendChild(e), a._ym__remoteIframeContainer = e)
                    }
                }
            }

            function Pm(a) {
                var c, b = nh(a);
                a = J(a).o("getCounters", Gd)();
                a = z(S("id"), a);
                return c = {id: b}, c.counterFound = !!b && L(b, a), c
            }

            function lh(a, c, b) {
                var d;
                c = oh(a, c, {gd: Sm, oe: (d = {}, d.href = !0, d)});
                b = U(Boolean, z(function (f) {
                    return "*" === f ? f : Ab(f)
                }, b));
                var e = z(q(O, sa("concat", [""]), Tm("reverse"), ma), b);
                b = Lc(a);
                d = ph(a, b, 1E3);
                c = M(c.Uc, c, e, !1);
                d.D(c);
                Um(a, b);
                qh(a, b);
                c()
            }

            function Sm(a, c, b) {
                var d = hb(a), e = b.Fa, f = b.xb, g = e.parentNode, h = e.textContent;
                if ("text" === b.bc && h && d && g) {
                    b = d("small");
                    rh(b);
                    var k = h.split(""), l = sh(h).length;
                    D(sa("appendChild", b), N(function (m, p) {
                        var r = m.Yb, w = m.nd, v = d("small");
                        v.innerHTML = p;
                        var x = Vm.test(p);
                        rh(v);
                        x && (v.style.opacity = "" + (l - w - 1) / l);
                        r.push(v);
                        return {Yb: r, nd: w + (x ? 1 : 0)}
                    }, {Yb: [], nd: 0}, k).Yb);
                    Wm(a, c, b, f);
                    g.insertBefore(b, e);
                    e.textContent = "";
                    return !0
                }
                return !1
            }

            function Wm(a, c, b, d) {
                function e() {
                    D(u(["style", "opacity", ""], ic),
                        Ba(b.childNodes));
                    if (c) {
                        var k = ua(a, c);
                        k && k.extLink("tel:" + d, {})
                    }
                    g();
                    h()
                }

                var f = ia(a), g = F, h = F;
                g = f.D(b, ["mouseenter"], function (k) {
                    if (k.target === b) {
                        var l = ea(a, e, 200, "ph.h.e");
                        (h || F)();
                        h = f.D(b, ["mouseleave"], function (m) {
                            m.target === b && Pa(a, l)
                        })
                    }
                })
            }

            function qh(a, c) {
                Pc(a)(rb(F, function () {
                    var b, d = a.document.body, e = (b = {}, b.attributes = !0, b.childList = !0, b.subtree = !0, b);
                    ya("MutationObserver", a.MutationObserver) && (new MutationObserver(c.T)).observe(d, e)
                }))
            }

            function Um(a, c) {
                return ia(a).D(a, ["load"], c.T)
            }

            function oh(a,
                        c, b) {
                function d(k) {
                    var l;
                    return f(a, c, k) ? null === (l = h[k.xb]) || void 0 === l ? void 0 : l.Cb : null
                }

                var e, f = b.gd;
                b = b.oe;
                var g = void 0 === b ? (e = {}, e.href = !0, e.text = !0, e) : b, h;
                return {
                    Uc: function (k) {
                        return new H(function (l, m) {
                            k && k.length || m();
                            h = th()(k);
                            Pc(a)(rb(u({Z: [], ba: 0}, l), function () {
                                var p = Y(a), r = p(aa), w = g.href ? Xm(a, h) : [], v = g.text ? uh(a, h) : [];
                                l({Z: U(ba, U(Boolean, z(d, w.concat(v)))), ba: p(aa) - r})
                            }))
                        })
                    }
                }
            }

            function Xm(a, c) {
                var b = a.document.body;
                if (!b) return [];
                var d = vh(c);
                return N(function (e, f) {
                    var g = n(f, "href");
                    try {
                        var h =
                            decodeURI(g || "")
                    } catch (p) {
                        h = ""
                    }
                    if ("tel:" === h.slice(0, 4)) {
                        var k = (d.exec(h) || [])[0], l = k ? Ab(k) : "", m = c[l];
                        Z(m) || !l && "*" !== m.Cb[0] || (e.push({
                            bc: "href",
                            Fa: f,
                            xb: l,
                            va: wh(k, c[l].va),
                            Ie: g
                        }), g = Ab(h.slice(4)), l = th()([l ? m.Cb : [g, ""]]), e.push.apply(e, uh(a, l, f)))
                    }
                    return e
                }, [], Ba(b.querySelectorAll("a")))
            }

            function uh(a, c, b) {
                void 0 === b && (b = a.document.body);
                if (!b) return [];
                var d = [], e = vh(c);
                Bg(a, b, function (f) {
                    if (f !== b && "script" !== (n(f, "parentNode.nodeName") || "").toLowerCase()) {
                        var g = U(Boolean, e.exec(f.textContent || "") ||
                            []);
                        D(function (h) {
                            var k = Ab(h);
                            Z(c[k]) || d.push({bc: "text", Fa: f, xb: k, va: wh(h, c[k].va), Ie: f.textContent || ""})
                        }, g)
                    }
                }, function (f) {
                    return e.test(f.textContent || "") ? 1 : 0
                }, a.NodeFilter.SHOW_TEXT);
                return d
            }

            function th() {
                return Qe(function (a, c) {
                    var b = z(Ab, c), d = b[0];
                    b = b[1];
                    a[d] = {va: b, Cb: c};
                    var e = xh(d);
                    e !== d && (a[e] = {va: xh(b), Cb: c});
                    return a
                }, {})
            }

            function wh(a, c) {
                for (var b = [], d = a.split(""), e = c.split(""), f = 0, g = 0; g < a.length && !(f >= e.length); g += 1) {
                    var h = d[g];
                    "0" <= h && "9" >= h ? (b.push(e[f]), f += 1) : b.push(d[g])
                }
                return I("",
                    b) + c.slice(f + 1)
            }

            function xh(a) {
                var c = {7: "8", 8: "7"};
                return 11 === a.length && c[a[0]] ? "" + c[a[0]] + a.slice(1) : a
            }

            function vh(a) {
                return new RegExp("(?:" + I("|", z(yh, ca(a))) + ")")
            }

            function Bg(a, c, b, d, e) {
                function f(g) {
                    return T(d) ? d(g) ? a.NodeFilter.FILTER_ACCEPT : a.NodeFilter.FILTER_REJECT : a.NodeFilter.FILTER_ACCEPT
                }

                void 0 === e && (e = -1);
                if (T(b) && f(c) === a.NodeFilter.FILTER_ACCEPT && (b(c), !Zg(c))) for (c = a.document.createTreeWalker(c, e, d ? {acceptNode: f} : null, !1); c.nextNode() && !1 !== b(c.currentNode);) ;
            }

            function ag(a, c, b) {
                return zh(a,
                    c, ["i", "n", "p"], void 0, b)
            }

            function Ym(a) {
                return {
                    N: function (c, b) {
                        J(a).o("oo") || b()
                    }
                }
            }

            function Zm(a, c) {
                try {
                    var b = c[0];
                    var d = b[1]
                } catch (e) {
                    return function () {
                        return H.resolve()
                    }
                }
                return function (e) {
                    var f, g = (f = {}, f["browser-info"] = $m, f["page-url"] = a.location && "" + a.location.href, f);
                    return d && (e = eb(a, e)) ? d(an, {
                        Va: g,
                        ea: [],
                        W: "site-info=" + wd(e)
                    })["catch"](F) : H.resolve()
                }
            }

            function bn(a, c, b) {
                if (b && (b = ih(a, b), b = kh(a, b))) {
                    b = "?" + Dc(b);
                    var d = qb(a, c, "Button goal. Counter " + c.id + ". Button: " + b + ".");
                    kd(a, c, "btn", d)(b)
                }
            }

            function cn(a, c) {
                var b;
                a((b = {}, b.clickmap = Z(c) ? !0 : c, b))
            }

            function dn(a, c, b, d, e) {
                var f;
                c = {G: ra(), F: (f = {}, f["page-url"] = c, f["pointer-click"] = b, f)};
                d(c, e)["catch"](A(a, "c.s.c"))
            }

            function en(a, c, b, d, e) {
                if (Qc(a, "ymDisabledClickmap") || !c || !c.element) return !1;
                a = Wa(c.element);
                if (e && !e(c.element, a) || L(c.button, [2, 3]) && "A" !== a || Ra(na(a), d)) return !1;
                d = c.element;
                if (c && b) {
                    if (50 > c.time - b.time) return !1;
                    e = Math.abs(b.position.x - c.position.x);
                    a = Math.abs(b.position.y - c.position.y);
                    c = c.time - b.time;
                    if (b.element === d && 2 >
                        e && 2 > a && 1E3 > c) return !1
                }
                for (; d;) {
                    if (fn(d)) return !1;
                    d = d.parentElement
                }
                return !0
            }

            function gn(a, c) {
                var b = null;
                try {
                    if (b = c.target || c.srcElement) !b.ownerDocument && b.documentElement ? b = b.documentElement : b.ownerDocument !== a.document && (b = null)
                } catch (d) {
                }
                return b
            }

            function hn(a) {
                var c = a.which;
                a = a.button;
                return c || void 0 === a ? c : 1 === a || 3 === a ? 1 : 2 === a ? 3 : 4 === a ? 2 : 0
            }

            function yd(a, c) {
                var b = Lb(a), d = He(a);
                return {
                    x: c.pageX || c.clientX + d.x - (b.clientLeft || 0) || 0,
                    y: c.pageY || c.clientY + d.y - (b.clientTop || 0) || 0
                }
            }

            function jn(a, c) {
                if (a.Ne()) {
                    var b =
                        Ah(c);
                    if (b && !Nb("ym-disable-tracklink", b)) {
                        var d = a.l, e = a.Jd, f = a.Aa, g = a.sender, h = a.Sd, k = f.mb, l = b.href,
                            m = fb(b && b.innerHTML && b.innerHTML.replace(/<\/?[^>]+>/gi, ""));
                        m = l === m ? "" : m;
                        if (Nb("ym-external-link", b)) Hd(d, f, {url: l, Qa: !0, title: m, sender: g}); else {
                            k = k ? Id(d, k).hostname : R(d).hostname;
                            h = RegExp("\\.(" + I("|", z(kn, h)) + ")$", "i");
                            var p = b.protocol + "//" + b.hostname + b.pathname;
                            h = Bh.test(p) || Bh.test(l) || h.test(l) || h.test(p);
                            b = b.hostname;
                            Jd(k) === Jd(b) ? h ? Hd(d, f, {
                                url: l,
                                qb: !0,
                                title: m,
                                sender: g
                            }) : m && e.C("il", fb(m).slice(0,
                                100)) : l && ln.test(l) || Hd(d, f, {
                                url: l,
                                tb: !0,
                                Qa: !0,
                                qb: h,
                                title: m,
                                sender: g
                            })
                        }
                    }
                }
            }

            function Hd(a, c, b, d) {
                var e, f = ra();
                b.qb && f.C("dl", "1");
                b.Qa && f.C("ln", "1");
                f = {
                    G: f,
                    L: {title: b.title, tb: !!b.tb, M: b.M},
                    F: (e = {}, e["page-url"] = b.url, e["page-ref"] = c.mb || R(a).href, e)
                };
                e = "Link";
                b.qb ? e = b.Qa ? "Ext link - File" : "File" : b.Qa && (e = "Ext link");
                c = b.sender(f, c).then(d || F).then(qb(a, c, e + ". Counter " + c.id + ". Url: " + b.url, b));
                return qc(a, "cl.p.s", c, b.za || F, b.l)
            }

            function mn(a, c) {
                var b, d, e = (b = {}, b.string = !0, b.object = !0, b["boolean"] =
                    c, b)[typeof c] || !1;
                a((d = {}, d.trackLinks = e, d))
            }

            function nn(a, c, b, d) {
                var e = R(a), f = e.hostname;
                e = e.href;
                if (c = Rc(c).url) a = Id(a, c), f = a.hostname, e = a.href;
                return [d + "://" + f + "/" + b, e || ""]
            }

            function Ch(a) {
                return (a.split(":")[1] || "").replace(/^\/*/, "").replace(/^www\./, "").split("/")[0]
            }

            function Kd(a, c) {
                return function (b) {
                    Dh(a, c, b)
                }
            }

            function on(a, c) {
                Re(a)(function (b) {
                    delete b[c]
                })
            }

            function Dh(a, c, b) {
                Re(a)(function (d) {
                    d[c] = y(d[c] || {}, b)
                })
            }

            function Re(a) {
                a = J(a);
                var c = a.o("dsjf") || Ca({});
                a.oa("dsjf", c);
                return c
            }

            function qc(a,
                        c, b, d, e) {
                var f = E([a, d, e], Se);
                return b.then(f, function (g) {
                    f();
                    Fd(a, c, g)
                })
            }

            function Eh(a, c) {
                J(a).C("dce:" + c, !0);
                var b = J(a).o("dclq:" + c);
                b && (D(function (d) {
                    var e = d[0];
                    d = d[1];
                    ma.apply(void 0, X([Ld(a, c)[e]], d))
                }, b), b.splice(0, b.length))
            }

            function qb(a, c, b, d) {
                return Fh(c) ? F : u(E(X([a, P(c)], d ? [b + ". Params:", d] : [b]), pb), ma)
            }

            function pb() {
                var a = ta(arguments), c = a.slice(2);
                Ld(a[0], a[1]).log.apply(pb, c)
            }

            function Gh(a) {
                var c = "1" === cc(a).o("debug"), b = -1 < R(a).href.indexOf("_ym_debug=1");
                a = a._ym_debug;
                return {
                    ce: c, ie: a ||
                        b, isEnabled: Ra(Boolean, [c, a, b])
                }
            }

            function la(a, c, b) {
                a = P(c);
                return Hh()(pn(a)).then(b)
            }

            function qn(a, c, b) {
                c = P(c);
                a = Ih(a);
                b = y({Ud: a(aa)}, b);
                return Hh()(rn(c, b))
            }

            function rn(a, c) {
                return function (b) {
                    var d = b[a];
                    d ? (d.ze = c, d.Wc = !0, d.Vc ? d.Vc(c) : d.ua = H.resolve(c)) : b[a] = {
                        ua: H.resolve(c),
                        ze: c,
                        Wc: !0
                    }
                }
            }

            function Db(a) {
                return z(function (c) {
                    return !c || L(c, a) ? c : 0
                }, wb)
            }

            function Jh(a) {
                return !Ec(a) && Kh(a)
            }

            function Te(a) {
                return hb(a) ? u(a, sn) : !1
            }

            function Kh(a) {
                var c = n(a, "navigator.sendBeacon");
                return c && ya("sendBeacon",
                    c) ? E([a, M(c, n(a, "navigator"))], tn) : !1
            }

            function tn(a, c, b, d) {
                return new H(function (e, f) {
                    if (!n(a, "navigator.onLine")) return f();
                    var g = y(d.Va, {"force-urlencoded": 1});
                    g = b + "?" + Dc(g) + (d.W ? "&" + d.W : "");
                    return 2E3 < g.length ? f(Ja("sb.tlq")) : c(g) ? e("") : f()
                })
            }

            function sn(a, c, b) {
                return new H(function (d, e) {
                    var f, g, h = "_ymjsp" + Va(a), k = y((f = {}, f.callback = h, f), b.Va), l = E([a, h], un);
                    a[h] = function (p) {
                        try {
                            l(), $b(m), d(p)
                        } catch (r) {
                            e(r)
                        }
                    };
                    k.wmode = "5";
                    var m = Fc(a, (g = {}, g.src = Lh(c, b, k), g));
                    if (!m) return l(), e(Gc("jp.s"));
                    f = u(m,
                        $b);
                    f = q(f, u(Ja(b.ea), e));
                    g = Md(a, f, b.Ia || 1E4);
                    g = E([a, g], Pa);
                    m.onload = g;
                    m.onerror = q(l, g, f)
                })
            }

            function un(a, c) {
                try {
                    delete a[c]
                } catch (b) {
                    a[c] = void 0
                }
            }

            function Sc(a) {
                var c = hb(a);
                return c ? E([a, c], vn) : !1
            }

            function vn(a, c, b, d) {
                return new H(function (e, f) {
                    var g = Lb(a), h = c("img"), k = q(u(h, $b), u(Ja(d.ea), f)), l = Md(a, k, d.Ia || 3E3);
                    h.onerror = k;
                    h.onload = q(u(h, $b), u(null, e), E([a, l], Pa));
                    k = y({}, d.Va);
                    delete k.wmode;
                    h.src = Lh(b, d, k);
                    Tc(a) && (y(h.style, {
                        position: "absolute",
                        visibility: "hidden",
                        width: "0px",
                        height: "0px"
                    }), g.appendChild(h))
                })
            }

            function Ob(a) {
                var c;
                if (c = n(a, "XMLHttpRequest")) if (c = "withCredentials" in new a.XMLHttpRequest) {
                    a:{
                        if (wn.test(a.location.host) && a.opera && T(a.opera.version) && (c = a.opera.version(), "string" === typeof c && "12" === c.split(".")[0])) {
                            c = !0;
                            break a
                        }
                        c = !1
                    }
                    c = !c
                }
                return c ? u(a, xn) : !1
            }

            function xn(a, c, b) {
                var d, e = new a.XMLHttpRequest, f = b.W, g = y(b.Db ? (d = {}, d.wmode = "7", d) : {}, b.Va);
                return new H(function (h, k) {
                    e.open(b.md || "GET", c + "?" + Dc(g), !0);
                    e.withCredentials = !1 !== b.od;
                    b.Ia && (e.timeout = b.Ia);
                    Mh(Ea, $a(function (m) {
                        e.setRequestHeader(m[0],
                            m[1])
                    }))(b.Ua);
                    var l = E([a, e, Ja(b.ea), b.Db, b.Be, h, k], yn);
                    e.onreadystatechange = l;
                    try {
                        e.send(f)
                    } catch (m) {
                    }
                })
            }

            function yn(a, c, b, d, e, f, g, h) {
                if (4 === c.readyState) if (200 === c.status || e || g(b), e) 200 === c.status ? f(c.responseText) : g(Gc("http." + c.status + ".st." + c.statusText + ".rt." + ("" + c.responseText).substring(0, 50))); else {
                    e = null;
                    if (d) try {
                        (e = Cb(a, c.responseText)) || g(b)
                    } catch (k) {
                        g(b)
                    }
                    f(e)
                }
                return h
            }

            function Lh(a, c, b) {
                (b = Dc(b)) && (a += "?" + b);
                c.W && (a += (b ? "&" : "?") + c.W);
                return a
            }

            function zn(a, c, b) {
                var d = z(rc, Eb[c] || xb);
                D(function (e) {
                    return d.unshift(e)
                }, Ue);
                return z(q(Uc([a, b]), ma), d)
            }

            function Nh(a, c) {
                var b = R(a), d = b.href, e = b.host, f = -1;
                if (!Ka(c) || Z(c)) return d;
                b = c.replace(Oh, "");
                if (-1 !== b.search(An)) return b;
                var g = b.charAt(0);
                if ("?" === g && (f = d.search(/\?/), -1 === f) || "#" === g && (f = d.search(/#/), -1 === f)) return d + b;
                if (-1 !== f) return d.substr(0, f) + b;
                if ("/" === g) {
                    if (f = d.indexOf(e), -1 !== f) return d.substr(0, f + e.length) + b
                } else return d = d.split("/"), d[d.length - 1] = b, I("/", d);
                return ""
            }

            function Ve() {
                return function (a, c) {
                    return {
                        N: function (b,
                                     d) {
                            var e, f = b.G, g = b.ya, h = b.F, k = b.O;
                            k = void 0 === k ? {} : k;
                            if (f && h) {
                                var l = Y(a);
                                f.Xa("rqnl", 1);
                                for (var m = Vc(a), p = 1; m[p];) p += 1;
                                b.L || (b.L = {});
                                b.L.Wa = p;
                                m[p] = (e = {}, e.protocol = oa.sa, e.host = ec, e.resource = "watch", e.postParams = k.W, e.time = l(aa), e.counterType = c.R, e.params = h, e.browserInfo = f.l(), e.counterId = c.id, e.ghid = Mb(a), e);
                                g && (g.Xa("rqnl", 1), m[p].telemetry = g.l());
                                We(a)
                            }
                            d()
                        }, da: function (b, d) {
                            Ph(a, b);
                            d()
                        }
                    }
                }
            }

            function Ph(a, c) {
                var b = Vc(a);
                c.G && !Ya(b) && c.L && (delete b[c.L.Wa], We(a))
            }

            function We(a) {
                var c = Vc(a);
                La(a).C("retryReqs",
                    c)
            }

            function Xe(a, c) {
                return {
                    N: function (b, d) {
                        var e = b.G;
                        if (e && (!c || c.Yc)) {
                            var f = a.document.title;
                            b.L && b.L.title && (f = b.L.title);
                            var g = Pb("getElementsByTagName", a.document);
                            "string" !== typeof f && g && (f = g("title"), f = (f = n(f, "0.innerHtml")) ? f : "");
                            f = f.slice(0, oa.ud);
                            e.C("t", f)
                        }
                        d()
                    }
                }
            }

            function Qb(a) {
                void 0 === a && (a = Bn);
                return function (c, b) {
                    return {
                        N: function (d, e) {
                            var f = d.G, g = d.F;
                            f && g && D(function (h) {
                                var k = Nd[h], l = "bi", m = f;
                                k || (k = Ye[h], l = "tel", m = md(d));
                                k && (k = B(l + ":" + h, k, null)(c, b, d), m.Xa(h, k))
                            }, a);
                            e()
                        }
                    }
                }
            }

            function Cn(a) {
                if (Ec(a)) return null;
                var c = Dn(a), b = c.Sc;
                Z(b) && (c.Sc = null, En(a).then(function (d) {
                    c.Sc = d
                }));
                return b ? 1 : null
            }

            function Fn(a, c, b) {
                c = P(c);
                a = Qh(a);
                b = b.F;
                if ((void 0 === b ? {} : b).nohit) return null;
                var d = b = null;
                n(a, "getEntriesByType") && (d = n(a.getEntriesByType("navigation"), "0")) && (b = Gn);
                if (!b) {
                    var e = n(a, "timing");
                    e && (b = Hn, d = e)
                }
                if (!b) return null;
                a = In(a, d, b);
                c = Jn(c);
                return (c = Kn(c, a)) && I(",", c)
            }

            function Kn(a, c) {
                var b = a.length ? z(function (d, e) {
                    var f = c[e];
                    return f === d ? null : f
                }, a) : c;
                a.length = 0;
                D(q(O, sa("push", a)), c);
                return U(na(null), b).length ===
                a.length ? null : b
            }

            function In(a, c, b) {
                return z(function (d) {
                    var e = d[0], f = d[1];
                    if (T(e)) return e(a, c) || null;
                    if (T(f)) return null;
                    var g = !(!c[e] || !c[f]);
                    !g && 2 === d.length && (g = 0 === c[e] && 0 === c[f]) && (g = d[1], g = !(Rh[d[0]] || Rh[g]));
                    return g ? (d = Math.round(c[e]) - Math.round(c[f]), 0 > d || 36E5 < d ? null : d) : 1 === d.length && c[e] ? Math.round(c[e]) : null
                }, b)
            }

            function Od(a, c) {
                return {
                    N: function (b, d) {
                        var e = Sh(c);
                        e = E([b, e, d], Ln);
                        Mn(a, c, e)
                    }, da: function (b, d) {
                        var e = b.G, f = Sh(c);
                        if (e) {
                            var g = f.$;
                            f.zc === e && g && (D(ma, g), f.$ = null)
                        }
                        d()
                    }
                }
            }

            function Ln(a,
                        c, b) {
                var d = a.G;
                d ? ze(a) ? (c.zc = d, b()) : c.$ ? c.$.push(b) : b() : b()
            }

            function ze(a) {
                return (a = a.G) && a.o("pv") && !a.o("ar")
            }

            function Mn(a, c, b) {
                if (Ze(a) && zb(a)) {
                    var d = Nn(c);
                    if (!d.je) {
                        d.je = !0;
                        c = Hc(a, c);
                        if (!c) {
                            b();
                            return
                        }
                        d.$ = [];
                        var e = function () {
                            d.$ && (D(ma, d.$), d.$ = null)
                        };
                        ea(a, e, 3E3);
                        c.V.D(["initToChild"], e)
                    }
                    d.$ ? d.$.push(b) : b()
                } else b()
            }

            function Mg(a, c) {
                void 0 === c && (c = !1);
                for (var b = a.length, d = b - b % 3, e = [], f = 0; f < d; f += 3) {
                    var g = (a[f] << 16) + (a[f + 1] << 8) + a[f + 2];
                    e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g >>
                    18 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g & 63])
                }
                switch (b - d) {
                    case 1:
                        b = a[d] << 4;
                        e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b & 63], "=", "=");
                        break;
                    case 2:
                        b = (a[d] << 10) + (a[d + 1] << 2), e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b >>
                        12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b & 63], "=")
                }
                e = e.join("");
                return c ? Th(e, !0) : e
            }

            function pg(a, c) {
                void 0 === c && (c = !1);
                var b = a, d = "", e = 0;
                if (!b) return "";
                for (c && (b = Th(b)); b.length % 4;) b += "=";
                do {
                    var f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++)),
                        g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++)),
                        h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++)),
                        k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++));
                    if (0 > f || 0 > g || 0 > h || 0 > k) return "";
                    var l = f << 18 | g << 12 | h << 6 | k;
                    f = l >> 16 & 255;
                    g = l >> 8 & 255;
                    l &= 255;
                    d = 64 === h ? d + String.fromCharCode(f) : 64 === k ? d + String.fromCharCode(f, g) : d + String.fromCharCode(f, g, l)
                } while (e < b.length);
                return d
            }

            function Th(a, c) {
                void 0 === c && (c = !1);
                return a ? a.replace(c ? /[+/=]/g : /[-*_]/g, function (b) {
                    return On[b] || b
                }) : ""
            }

            function Pn(a, c, b, d, e, f, g, h) {
                var k = b.o(f);
                pa(k) && (b.C(f, g), e(a, c, b, d), k = b.o(f, g));
                Z(h) || h.Xa(f,
                    "" + k);
                return k
            }

            function Qn(a, c) {
                if (Tc(a)) {
                    var b = ib(a).match(Rn);
                    if (b && b.length) return b[1] === c
                }
                return !1
            }

            function kh(a, c, b) {
                var d = Wa(c);
                return d && zh(a, c, U(Boolean, ["p", Sn[d], "c"]), jh, b)
            }

            function ih(a, c) {
                var b = Ib($e, a, c);
                if (!b) {
                    var d = Ib("div", a, c);
                    d && (jb($e + ",div", d).length || (b = d))
                }
                return b
            }

            function zh(a, c, b, d, e) {
                return N(function (f, g) {
                    var h = null;
                    g in Uh ? h = c.getAttribute && c.getAttribute(Uh[g]) : g in sc && (h = "p" === g ? sc[g](a, c, e) : "c" === g ? sc[g](a, c, d) : sc[g](a, c));
                    h && (h = h.slice(0, Vh[g] || 100), f[g] = af[g] ? "" +
                        ac(h) : h);
                    return f
                }, {}, b)
            }

            function Pg(a, c, b) {
                if (Wc(a)) return Ba(b.querySelectorAll(c));
                var d = Wh(c.split(" "), b);
                return U(function (e, f) {
                    return Zb(a)(e, d) === f
                }, d)
            }

            function Wh(a, c) {
                var b = X(a), d = b.shift();
                if (!d) return [];
                d = c.getElementsByTagName(d);
                return b.length ? Kb(u(b, Wh), Ba(d)) : Ba(d)
            }

            function pc(a, c) {
                if (c.querySelector) return c.querySelector(a);
                var b = jb(a, c);
                return b && b.length ? b[0] : null
            }

            function jb(a, c) {
                if (!c) return [];
                var b = c.querySelectorAll(a);
                return b ? Ba(b) : []
            }

            function Ah(a) {
                var c = null;
                try {
                    c = a.target ||
                        a.srcElement
                } catch (b) {
                }
                if (c) {
                    3 === c.nodeType && (c = c.parentNode);
                    for (a = c && c.nodeName && ("" + c.nodeName).toLowerCase(); n(c, "parentNode.nodeName") && ("a" !== a && "area" !== a || !c.href && !c.getAttribute("xlink:href"));) a = (c = c.parentNode) && c.nodeName && ("" + c.nodeName).toLowerCase();
                    return c.href ? c : null
                }
                return null
            }

            function Fc(a, c) {
                var b = a.document, d = y({type: "text/javascript", charset: "utf-8", async: !0}, c), e = hb(a);
                if (e) {
                    var f = e("script");
                    Mh(Ea, $a(function (l) {
                        var m = l[0];
                        l = l[1];
                        "async" === m && l ? f.async = !0 : f[m] = l
                    }))(d);
                    try {
                        var g =
                            Pb("getElementsByTagName", b), h = g("head")[0];
                        if (!h) {
                            var k = g("html")[0];
                            h = e("head");
                            k && k.appendChild(h)
                        }
                        h.insertBefore(f, h.firstChild);
                        return f
                    } catch (l) {
                    }
                }
            }

            function Tn(a, c, b) {
                var d = Xh(c);
                L(b, d.Ea) || d.Ea.push(b);
                if (Ya(d.Ba)) {
                    b = hb(a);
                    if (!b) return null;
                    b = b("iframe");
                    y(b.style, {display: "none", width: "1px", height: "1px", visibility: "hidden"});
                    b.src = c;
                    a = Lb(a);
                    if (!a) return null;
                    a.appendChild(b);
                    d.Ba = b
                } else (a = n(d.Ba, "contentWindow")) && a.postMessage("frameReinit", "*");
                return d.Ba
            }

            function Un(a, c) {
                var b = ba(a) ? a :
                    [a];
                c = c || document;
                if (c.querySelectorAll) {
                    var d = I(", ", z(function (e) {
                        return "." + e
                    }, b));
                    return Ba(c.querySelectorAll(d))
                }
                if (c.getElementsByClassName) return Kb(q(sa("getElementsByClassName", c), Ba), b);
                d = c.getElementsByTagName("*");
                b = "(" + I("|", b) + ")";
                return U(u(b, Nb), Ba(d))
            }

            function bf(a, c, b) {
                for (var d = "", e = hh(), f = Wa(c) || "*"; c && c.parentNode && !L(f, ["BODY", "HTML"]);) d += e[f] || "*", d += Yh(a, c, b) || "", c = c.parentElement, f = Wa(c) || "*";
                return fb(d, 128)
            }

            function Yh(a, c, b) {
                if (a = Pd(a, c)) {
                    a = a.childNodes;
                    for (var d = c && c.nodeName,
                             e = 0, f = 0; f < a.length; f += 1) if (d === (a[f] && a[f].nodeName)) {
                        if (c === a[f]) return e;
                        b && a[f] === b || (e += 1)
                    }
                }
                return 0
            }

            function Pd(a, c) {
                var b = n(a, "document");
                if (!c || c === b.documentElement) return null;
                if (c === fc(a)) return b.documentElement;
                b = null;
                try {
                    b = c.parentNode
                } catch (d) {
                }
                return b
            }

            function Me(a, c) {
                var b = cf(a, c), d = b.left;
                b = b.top;
                var e = Qd(a, c);
                return [d, b, e[0], e[1]]
            }

            function Qd(a, c) {
                var b = n(a, "document");
                return c === fc(a) || c === b.documentElement ? Ig(a) : (b = Rd(c)) ? [b.width, b.height] : [c.offsetWidth, c.offsetHeight]
            }

            function cf(a,
                        c) {
                var b = c, d = n(a, "document"), e = Wa(b);
                if (!b || !b.ownerDocument || "PARAM" === e || b === fc(a) || b === d.documentElement) return {
                    left: 0,
                    top: 0
                };
                if (d = b.getBoundingClientRect && Rd(b)) return b = He(a), {
                    left: Math.round(d.left + b.x),
                    top: Math.round(d.top + b.y)
                };
                for (e = d = 0; b;) d += b.offsetLeft, e += b.offsetTop, b = b.offsetParent;
                return {left: d, top: e}
            }

            function Ib(a, c, b) {
                if (!(c && c.Element && c.Element.prototype && c.document && b)) return null;
                if (c.Element.prototype.closest && ya("closest", c.Element.prototype.closest) && b.closest) return b.closest(a);
                var d = $g(c);
                if (d) {
                    for (; b && 1 === b.nodeType && !d.call(b, a);) b = b.parentElement || b.parentNode;
                    return b && 1 === b.nodeType ? b : null
                }
                if (Wc(c)) {
                    for (a = Ba((c.document || c.ownerDocument).querySelectorAll(a)); b && 1 === b.nodeType && -1 === Zb(c)(b, a);) b = b.parentElement || b.parentNode;
                    return b && 1 === b.nodeType ? b : null
                }
                return null
            }

            function Wc(a) {
                return !(!ya("querySelectorAll", n(a, "Element.prototype.querySelectorAll")) || !a.document.querySelectorAll)
            }

            function Zh(a) {
                return Sd(a) && !Ra(na(a.type), Vn) ? $h(a) ? !a.checked : !a.value : Wn(a) ?
                    !a.value : Xn(a) ? 0 > a.selectedIndex : !0
            }

            function Wa(a) {
                if (a) try {
                    var c = a.nodeName;
                    if (Ka(c)) return c;
                    c = a.tagName;
                    if (Ka(c)) return c
                } catch (b) {
                }
            }

            function ai(a, c) {
                var b = a.document.getElementsByTagName("form");
                return Zb(a)(c, Ba(b))
            }

            function Yn(a, c, b) {
                b = Pb("dispatchEvent", b || a.document);
                var d = null, e = n(a, "Event.prototype.constructor");
                if (e && (ya("(Event|Object|constructor)", e) || Td(a) && "[object Event]" === "" + e)) try {
                    d = new a.Event(c)
                } catch (f) {
                    if ((a = Pb("createEvent", n(a, "document"))) && T(a)) {
                        try {
                            d = a(c)
                        } catch (g) {
                        }
                        d &&
                        d.initEvent && d.initEvent(c, !1, !1)
                    }
                }
                d && b(d)
            }

            function Rd(a) {
                try {
                    return a.getBoundingClientRect && a.getBoundingClientRect()
                } catch (c) {
                    return "object" === typeof c && null !== c && 16389 === (c.Oc && c.Oc & 65535) ? {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        width: 0,
                        height: 0,
                        right: 0
                    } : null
                }
            }

            function Ig(a) {
                var c = Lb(a);
                a = xd(a);
                return [Math.max(c.scrollWidth, a[0]), Math.max(c.scrollHeight, a[1])]
            }

            function He(a) {
                var c = fc(a), b = n(a, "document");
                return {
                    x: a.pageXOffset || b.documentElement && b.documentElement.scrollLeft || c && c.scrollLeft || 0,
                    y: a.pageYOffset ||
                        b.documentElement && b.documentElement.scrollTop || c && c.scrollTop || 0
                }
            }

            function xd(a) {
                var c = bi(a);
                if (c) {
                    var b = c[2];
                    return [a.Math.round(c[0] * b), a.Math.round(c[1] * b)]
                }
                c = Lb(a);
                return [n(c, "clientWidth") || a.innerWidth, n(c, "clientHeight") || a.innerHeight]
            }

            function bi(a) {
                var c = n(a, "visualViewport.width"), b = n(a, "visualViewport.height");
                a = n(a, "visualViewport.scale");
                return pa(c) || pa(b) ? null : [Math.floor(c), Math.floor(b), a]
            }

            function Lb(a) {
                var c = n(a, "document") || {}, b = c.documentElement;
                return "CSS1Compat" === c.compatMode ?
                    b : fc(a) || b
            }

            function fc(a) {
                a = n(a, "document");
                try {
                    return a.getElementsByTagName("body")[0]
                } catch (c) {
                    return null
                }
            }

            function Nb(a, c) {
                try {
                    return (new RegExp("(?:^|\\s)" + a + "(?:\\s|$)")).test(c.className)
                } catch (b) {
                    return !1
                }
            }

            function ub(a) {
                var c;
                try {
                    if (c = a.target || a.srcElement) !c.ownerDocument && c.documentElement ? c = c.documentElement : c.ownerDocument !== document && (c = null)
                } catch (b) {
                }
                return c
            }

            function $b(a) {
                var c = a && a.parentNode;
                c && c.removeChild(a)
            }

            function Fb(a) {
                return a ? a.innerText || "" : ""
            }

            function Zg(a) {
                if (pa(a)) return !1;
                a = a.nodeType;
                return 3 === a || 8 === a
            }

            function Zn(a, c) {
                if (a["disableYaCounter" + c.id]) {
                    var b = P(c);
                    delete J(a).o("counters", {})[b];
                    gb(Ja("oo.e"))
                }
            }

            function ua(a, c) {
                var b = J(a).o("counters", {}), d = P(c);
                return b[d]
            }

            function ci(a, c) {
                var b = Hc(a, c), d = [], e = [];
                if (!b) return null;
                var f = E([a, b.dc], $n), g = u(f, ao);
                b.V.D(["initToParent"], function (h) {
                    g(d, b.children[h[1].counterId])
                }).D(["parentConnect"], function (h) {
                    g(e, b.ia[h[1].counterId])
                });
                return {
                    V: b.V, ag: function (h, k) {
                        return new H(function (l, m) {
                            b.dc(h, k, function (p, r) {
                                l([p,
                                    r])
                            });
                            ea(a, u(Ja(), m), 5100, "is.o")
                        })
                    }, Zc: function (h) {
                        var k = {bd: [], jc: [], data: h};
                        d.push(k);
                        return f(b.children, k, h)
                    }, $c: function (h) {
                        var k = {bd: [], jc: [], data: h};
                        e.push(k);
                        return f(b.ia, k, h)
                    }
                }
            }

            function ao(a, c, b) {
                c = U(function (d) {
                    return !L(b.info.counterId, d.jc)
                }, c);
                D(function (d) {
                    var e;
                    b.info.counterId && a((e = {}, e[b.info.counterId] = b, e), d, d.data)
                }, c)
            }

            function $n(a, c, b, d, e) {
                return (new H(function (f, g) {
                    var h = ca(b), k = q(d.resolve ? d.resolve : O, Kc(f)), l = q(d.reject ? d.reject : O, Kc(g));
                    d.resolve = k;
                    d.reject = l;
                    D(function (m) {
                        var p;
                        d.jc.push(+m);
                        var r = b[m], w = ea(a, u(Ja(), l), 5100, "is.m");
                        c(r.window, y(e, (p = {}, p.toCounter = Fa(m), p)), function (v, x) {
                            Pa(a, w);
                            d.bd.push(m);
                            d.resolve && d.resolve(x)
                        })
                    }, h)
                }))["catch"](A(a, "if.b"))
            }

            function bo(a, c) {
                var b = Xc(a);
                c.D(["initToParent"], function (d) {
                    var e = d[0];
                    d = d[1];
                    window.window && (b.children[d.counterId] = {info: d, window: e.source})
                }).D(["initToChild"], function (d) {
                    var e = d[0];
                    d = d[1];
                    e.source === a.parent && c.T("parentConnect", [e, d])
                }).D(["parentConnect"], function (d) {
                    var e = d[1];
                    e.counterId && (b.ia[e.counterId] =
                        {info: e, window: d[0].source})
                })
            }

            function co(a) {
                if (ya("MutationObserver", a.MutationObserver)) {
                    var c = Xc(a).children, b = new a.MutationObserver(function () {
                        D(function (d) {
                            c[d].window.window || delete c[d]
                        }, ca(c))
                    });
                    Pc(a)(rb(F, function () {
                        b.observe(a.document.body, {subtree: !0, childList: !0})
                    }))
                }
            }

            function eo(a, c) {
                return function (b, d) {
                    var e, f = {hb: Y(a)(aa), key: a.Math.random(), dir: 0};
                    b.length && (f.hb = Fa(b[0]), f.key = parseFloat(b[1]), f.dir = Fa(b[2]));
                    y(d, c);
                    var g = (e = {data: d}, e.__yminfo = I(":", ["__yminfo", f.hb, f.key, f.dir]),
                        e);
                    return {ga: f, ed: eb(a, g) || ""}
                }
            }

            function Pc(a, c) {
                function b(e) {
                    n(c, d) ? e() : ea(a, u(e, b), 100)
                }

                void 0 === c && (c = a);
                var d = (c.nodeType ? "contentWindow." : "") + "document.body";
                return Ca(function (e, f) {
                    b(f)
                })
            }

            function mc(a, c) {
                var b = c.Ub, d = b || "uid";
                b = b ? a.location.hostname : void 0;
                var e = cc(a), f = La(a), g = Y(a), h = g(Ud), k = di(a, c), l = k[0];
                k = k[1];
                var m = e.o("d");
                ei(a, c);
                var p = !1;
                !k && l && (k = l, p = !0);
                if (!k) k = I("", [g(Ud), Va(a)]), p = !0; else if (!m || 15768E3 < h - Fa(m)) p = !0;
                p && !c.Ca && (e.C(d, k, 525600, b), e.C("d", "" + h, 525600, b));
                f.C(d, k);
                return k
            }

            function fo(a, c) {
                return !c.Ca && ei(a, c)
            }

            function di(a, c) {
                var b = La(a), d = cc(a), e = c.Ub || "uid";
                return [b.o(e), d.o(e)]
            }

            function xe(a, c, b) {
                void 0 === c && (c = "");
                void 0 === b && (b = "_ym");
                var d = "" + b + c + "_";
                return {
                    Qb: go(a), o: function (e, f) {
                        var g = fi(a, "" + d + e);
                        return Ya(g) && !Z(f) ? f : g
                    }, C: function (e, f) {
                        gi(a, "" + d + e, f);
                        return this
                    }, ib: function (e) {
                        hi(a, "" + d + e);
                        return this
                    }
                }
            }

            function gi(a, c, b) {
                var d = df(a);
                a = eb(a, b);
                if (!Ya(a)) try {
                    d.setItem(c, a)
                } catch (e) {
                }
            }

            function fi(a, c) {
                var b = df(a);
                try {
                    return Cb(a, b.getItem(c))
                } catch (d) {
                }
                return null
            }

            function hi(a, c) {
                var b = df(a);
                try {
                    b.removeItem(c)
                } catch (d) {
                }
            }

            function df(a) {
                try {
                    return a.localStorage
                } catch (c) {
                }
                return null
            }

            function eb(a, c, b) {
                try {
                    return a.JSON.stringify(c, null, b)
                } catch (d) {
                    return null
                }
            }

            function Ng(a, c, b) {
                ef(a, "metrika_enabled", "1", 0, c, b, !0);
                var d = ii(a);
                (d = d && d.metrika_enabled) && ji(a, "metrika_enabled", c, b, !0);
                return !!d
            }

            function ef(a, c, b, d, e, f, g) {
                void 0 === g && (g = !1);
                if (Og(a, zd, c)) {
                    var h = c + "=" + encodeURIComponent(b) + ";";
                    h += "" + ho(a);
                    if (d) {
                        var k = new Date;
                        k.setTime(k.getTime() + 6E4 * d);
                        h +=
                            "expires=" + k.toUTCString() + ";"
                    }
                    e && (d = e.replace(io, ""), h += "domain=" + d + ";");
                    try {
                        a.document.cookie = h + ("path=" + (f || "/")), g || (ki(a)[c] = b)
                    } catch (l) {
                    }
                }
            }

            function zd(a, c) {
                var b = ki(a);
                return b ? b[c] || null : null
            }

            function ii(a) {
                try {
                    var c = a.document.cookie;
                    if (!pa(c)) {
                        var b = {};
                        D(function (d) {
                            d = d.split("=");
                            var e = d[1];
                            b[fb(d[0])] = fb(li(e))
                        }, (c || "").split(";"));
                        return b
                    }
                } catch (d) {
                }
                return null
            }

            function Og(a, c, b) {
                return !ff.length || L(b, mi) ? !0 : N(function (d, e) {
                    return d && e(a, c, b)
                }, !0, ff)
            }

            function fb(a, c) {
                if (a) {
                    var b = ni ? ni.call(a) :
                        ("" + a).replace(Oh, "");
                    return c && b.length > c ? b.substring(0, c) : b
                }
                return ""
            }

            function R(a) {
                return N(function (c, b) {
                    var d = n(a, "location." + b);
                    c[b] = d ? "" + d : "";
                    return c
                }, {}, jo)
            }

            function ng(a) {
                var c = a.match(oi);
                if (c) {
                    a = c[1];
                    if (c = c[2]) return L(c, gf) ? c : !1;
                    if (a) return gf[0]
                }
                return !1
            }

            function Mb(a) {
                var c = J(a), b = c.o("hitId");
                b || (b = Va(a), c.C("hitId", b));
                return b
            }

            function md(a, c, b) {
                void 0 === b && (b = null);
                a.ya || (a.ya = pi());
                c && a.ya.Xa(c, b);
                return a.ya
            }

            function hf(a) {
                return {
                    N: function (c, b) {
                        var d = a.document, e = c.G;
                        if (e && jf(a)) {
                            var f =
                                ia(a), g = function (h) {
                                jf(a) || (f.Za(d, qi, g), b());
                                return h
                            };
                            f.D(d, qi, g);
                            e.C("pr", "1")
                        } else b()
                    }
                }
            }

            function Na(a, c, b) {
                return function (d, e) {
                    var f = Ga(Oe(a, "w", e), b);
                    return Dd(a, c, f)(d)
                }
            }

            function Dd(a, c, b) {
                var d = tb(a, c);
                return function (e) {
                    return ri(b, e, !0).then(function () {
                        var f = e.qa || {}, g = f.de, h = void 0 === g ? "" : g;
                        g = f.wa;
                        var k = void 0 === g ? "" : g;
                        f = f.Ff;
                        f = void 0 === f ? [ko(a, k)] : f;
                        f = z(function (l) {
                            return oa.sa + "//" + ("" + h + l || ec) + "/" + k
                        }, f);
                        return d(e, f)
                    }).then(function (f) {
                        var g = f.yb;
                        f = f.kd;
                        e.Ae = g;
                        e.$f = f;
                        return ri(b, e).then(u(g,
                            O))
                    })
                }
            }

            function ko(a, c) {
                return N(function (b, d) {
                    return b || d(a, c)
                }, void 0, si) || ec
            }

            function ri(a, c, b) {
                void 0 === b && (b = !1);
                return new H(function (d, e) {
                    function f(k, l) {
                        l();
                        d()
                    }

                    var g = a.slice();
                    g.push({N: f, da: f});
                    var h = oe(g, function (k, l) {
                        var m = b ? k.N : k.da;
                        if (m) try {
                            m(c, l)
                        } catch (p) {
                            h(lo), e(p)
                        } else l()
                    });
                    h(ti)
                })
            }

            function Yb(a, c, b) {
                var d = b || "as";
                if (a.postMessage && !a.attachEvent) {
                    b = ia(a);
                    var e = "__ym__promise_" + Va(a) + "_" + Va(a), f = F;
                    d = A(a, d, function (g) {
                        try {
                            var h = g.data
                        } catch (k) {
                            return
                        }
                        h === e && (f(), g.stopPropagation &&
                        g.stopPropagation(), c())
                    });
                    f = b.D(a, ["message"], d);
                    a.postMessage(e, "*")
                } else ea(a, c, 0, d)
            }

            function Mk(a, c, b, d, e) {
                void 0 === d && (d = 1);
                void 0 === e && (e = "itc");
                c = oe(c, b);
                gg(a, c, d)(rb(A(a, e), F))
            }

            function gg(a, c, b, d) {
                void 0 === b && (b = 1);
                void 0 === d && (d = mo);
                kf = Infinity === b;
                return Ca(function (e, f) {
                    function g() {
                        try {
                            var k = c(d(a, b));
                            h = h.concat(k)
                        } catch (l) {
                            return e(l)
                        }
                        c(no);
                        if (c(Vd)) return f(h), ui(a);
                        kf ? (c(d(a, 1E4)), f(h), ui(a)) : ea(a, g, 100)
                    }

                    var h = [];
                    oo(g)
                })
            }

            function ui(a) {
                if (lf.length) {
                    var c = lf.shift();
                    kf ? c() : ea(a, c,
                        100)
                } else mf = !1
            }

            function oo(a) {
                mf ? lf.push(a) : (mf = !0, a())
            }

            function vi(a) {
                return Ca(function (c, b) {
                    b(a)
                })
            }

            function Km(a) {
                return Ca(function (c, b) {
                    a.then(b, c)
                })
            }

            function Jm(a) {
                var c = [], b = !1;
                return Ca(function (d, e) {
                    function f(g) {
                        c.push(g) === a.length && d(c)
                    }

                    D(function (g) {
                        g(rb(f, function (h) {
                            if (!b) try {
                                e(h), b = !0
                            } catch (k) {
                                f(k)
                            }
                        }))
                    }, a)
                })
            }

            function rb(a, c) {
                return function (b) {
                    return b(a, c)
                }
            }

            function oe(a, c) {
                void 0 === c && (c = O);
                return Ca({sb: a, Lc: c, ec: !1, aa: 0})
            }

            function ti(a) {
                function c() {
                    function d() {
                        b = !0;
                        a.aa += 1
                    }

                    b = !1;
                    a.Lc(a.sb[a.aa], function () {
                        d()
                    });
                    b || (a.aa += 1, d = M(ti, null, a))
                }

                for (var b = !0; !Vd(a) && b;) c()
            }

            function mo(a, c) {
                return function (b) {
                    var d = Y(a), e = d(aa);
                    return po(function (f, g) {
                        d(aa) - e >= c && g(qo)
                    })(b)
                }
            }

            function ro(a) {
                Vd(a) && gb(Gc("i"));
                var c = a.Lc(a.sb[a.aa]);
                a.aa += 1;
                return c
            }

            function no(a) {
                a.ec = !1
            }

            function qo(a) {
                a.ec = !0
            }

            function lo(a) {
                a.aa = a.sb.length
            }

            function Vd(a) {
                return a.ec || a.sb.length <= a.aa
            }

            function tb(a, c) {
                return function (b, d) {
                    return wi(a, c, d, b)
                }
            }

            function wi(a, c, b, d, e, f) {
                var g;
                void 0 === e && (e = 0);
                void 0 === f && (f = 0);
                var h = y({ea: []}, d.O), k = c[f], l = k[0];
                k = k[1];
                var m = y({}, d.F), p = Y(a);
                d.G && (m["browser-info"] = ra(d.G.l()).C("st", p(Ud)).xa());
                !m.t && (p = d.ya) && (p.C("ti", l), m.t = p.xa());
                p = b[e];
                h.Ua && h.Ua["Content-Type"] || !h.W || (h.Ua = y({}, h.Ua, (g = {}, g["Content-Type"] = "application/x-www-form-urlencoded", g)), h.W = "site-info=" + wd(h.W));
                h.md = h.W ? "POST" : "GET";
                h.Va = m;
                h.ea.push(l);
                y(d.O, h);
                return k("" + p + (d.ta && d.ta.pe ? "/1" : ""), h).then(function (r) {
                    return {yb: r, kd: e}
                })["catch"](function (r) {
                    var w = f + 1 >= c.length, v = e +
                        1 >= b.length;
                    w && v && gb(r);
                    return wi(a, c, b, d, !v && w ? e + 1 : e, w ? 0 : f + 1)
                })
            }

            function Dc(a) {
                return a ? q(Ea, Qe(function (c, b) {
                    var d = b[0], e = b[1];
                    Z(e) || pa(e) || c.push(d + "=" + wd(e));
                    return c
                }, []), Ic("&"))(a) : ""
            }

            function so(a) {
                return a ? q($a(function (c) {
                    c = c.split("=");
                    var b = c[1];
                    return [c[0], pa(b) ? void 0 : li(b)]
                }), Qe(function (c, b) {
                    c[b[0]] = b[1];
                    return c
                }, {}))(a.split("&")) : {}
            }

            function li(a) {
                var c = "";
                try {
                    c = decodeURIComponent(a)
                } catch (b) {
                }
                return c
            }

            function wd(a) {
                try {
                    return encodeURIComponent(a)
                } catch (c) {
                }
                a = I("", U(function (c) {
                    return 55296 >=
                        c.charCodeAt(0)
                }, a.split("")));
                return encodeURIComponent(a)
            }

            function Ha(a) {
                a = Y(a);
                return Math.round(a(xi) / 50)
            }

            function xi(a) {
                var c = a.ba, b = c[1];
                a = c[0] && b ? b() : aa(a) - a.ee;
                return Math.round(a)
            }

            function Ud(a) {
                return Math.round(aa(a) / 1E3)
            }

            function Za(a) {
                return Math.floor(aa(a) / 1E3 / 60)
            }

            function aa(a) {
                var c = a.lc;
                return 0 !== c ? c : nf(a.l, a.ba)
            }

            function Ih(a) {
                var c = ia(a), b = yi(a), d = {l: a, lc: 0, ba: b, ee: nf(a, b)}, e = b[1];
                b[0] && e || c.D(a, ["beforeunload", "unload"], function () {
                    0 === d.lc && (d.lc = nf(a, d.ba))
                });
                return Ca(d)
            }

            function to(a) {
                return (10 >
                a ? "0" : "") + a
            }

            function ph(a, c, b) {
                function d() {
                    f = 0;
                    g && (g = !1, f = ea(a, d, b), e.T(h))
                }

                var e = Lc(a), f, g = !1, h;
                c.D(function (k) {
                    g = !0;
                    h = k;
                    f || d();
                    return F
                });
                return e
            }

            function uo(a, c) {
                return a.clearInterval(c)
            }

            function vo(a, c, b, d) {
                return a.setInterval(A(a, "i.err." + (d || "def"), c), b)
            }

            function ea(a, c, b, d) {
                return Md(a, A(a, "d.err." + (d || "def"), c), b)
            }

            function Ee(a) {
                var c = {};
                return {
                    D: function (b, d) {
                        D(function (e) {
                            n(c, e) || (c[e] = Lc(a));
                            c[e].D(d)
                        }, b);
                        return this
                    }, Da: function (b, d) {
                        D(function (e) {
                            n(c, e) && c[e].Da(d)
                        }, b);
                        return this
                    },
                    T: function (b, d) {
                        return n(c, b) ? A(a, "e." + d, c[b].T)(d) : []
                    }
                }
            }

            function Lc(a) {
                var c = [], b = {};
                b.Jf = c;
                b.D = q(sa("push", c), u(b, O));
                b.Da = q(yb(Zb(a))(c), yb(sa("splice", c))(1), u(b, O));
                b.T = q(O, yb(ma), wo(c));
                return b
            }

            function B(a, c, b) {
                return function () {
                    return A(arguments[0], a, c, b).apply(this, arguments)
                }
            }

            function A(a, c, b, d, e) {
                var f = gb, g = b || f;
                return function () {
                    var h = d;
                    try {
                        h = g.apply(e || null, arguments)
                    } catch (k) {
                        Fd(a, c, k)
                    }
                    return h
                }
            }

            function nf(a, c) {
                var b = c || yi(a), d = b[0];
                b = b[1];
                return !isNaN(d) && T(b) ? Math.round(b() + d) :
                    a.Date.now ? a.Date.now() : (new a.Date).getTime()
            }

            function yi(a) {
                a = Qh(a);
                var c = n(a, "timing.navigationStart"), b = n(a, "now");
                b && (b = M(b, a));
                return [c, b]
            }

            function Qh(a) {
                return n(a, "performance") || n(a, "webkitPerformance")
            }

            function Fd(a, c, b) {
                var d = "u.a.e", e = "";
                b && ("object" === typeof b ? (d = b.message, e = "string" === typeof b.stack && b.stack.replace(/\n/g, "\\n") || "n.s.e.s") : d = "" + b);
                xo(d) || Ra(q(sa("indexOf", d), na(-1), Rb), yo) || zo(d) && .1 <= a.Math.random() || D(q(O, Uc(["jserrs", d, c, e]), ma), zi)
            }

            function Wf() {
                var a = ta(arguments);
                return gb(Ja(a))
            }

            function Ja(a) {
                var c = "";
                ba(a) ? c = I(".", a) : Ka(a) && (c = a);
                return Gc("err.kn(" + oa.bb + ")" + c)
            }

            function Ao(a) {
                this.message = a
            }

            function Ai(a, c, b, d, e) {
                var f = a.addEventListener && a.removeEventListener, g = !f && a.attachEvent && a.detachEvent;
                if (f || g) if (e = e ? f ? "removeEventListener" : "detachEvent" : f ? "addEventListener" : "attachEvent", f) a[e](c, b, d); else a[e]("on" + c, b)
            }

            function Oe(a, c, b) {
                return z(q(rc, Uc([a, b]), ma), Bi[c] || [])
            }

            function Ci(a, c, b, d) {
                a[c] || (a[c] = []);
                b && !pa(d) && Di(a[c], b, d)
            }

            function Di(a, c, b) {
                for (var d =
                    [c, b], e = -1E4, f = 0; f < a.length; f += 1) {
                    var g = a[f], h = g[0];
                    g = g[1];
                    if (b === g && h === c) return;
                    if (b < g && b >= e) {
                        a.splice(f, 0, d);
                        return
                    }
                    e = g
                }
                a.push(d)
            }

            function Wd(a) {
                D(function (c) {
                    var b = c[1];
                    je[c[0]] = {ha: b.ha, Ra: b.Ra}
                }, Ea(a))
            }

            function mk(a, c, b, d, e) {
                var f = "object" === typeof a ? a : {id: a, R: d, gb: e, M: b};
                a = N(function (g, h) {
                    var k = h[1], l = k.Ra;
                    k = f[k.ha];
                    g[h[0]] = l ? l(k) : k;
                    return g
                }, {}, Ea(c));
                Ei(a, a.M || {});
                return a
            }

            function Bo(a, c) {
                return N(function (b, d) {
                    b[c[d[0]].ha] = d[1];
                    return b
                }, {}, Ea(a))
            }

            function Fi(a) {
                a = P(a);
                return Sb[a] && Sb[a].Ke
            }

            function Ei(a, c) {
                var b = P(a), d = n(c, "__ym.turbo_page"), e = n(c, "__ym.turbo_page_id");
                Sb[b] || (Sb[b] = {});
                if (d || e) Sb[b].Ke = d, Sb[b].Le = e
            }

            function Co(a) {
                return of(a) || Ed(a) || /mobile/i.test(ib(a)) || !Z(n(a, "orientation"))
            }

            function ue(a, c) {
                if (Yc(a) && c) {
                    var b = ib(a).match(Do);
                    if (b && b.length) return +b[1] >= c
                }
                return !1
            }

            function ve(a, c) {
                var b = ib(a);
                return b && (b = b.match(Eo)) && 1 < b.length ? Fa(b[1]) >= c : !1
            }

            function jf(a) {
                return L("prerender", z(u(n(a, "document"), n), ["webkitVisibilityState", "visibilityState"]))
            }

            function Va(a,
                        c, b) {
                var d = Z(b);
                Z(c) && d ? (d = 1, c = 1073741824) : d ? d = 1 : (d = c, c = b);
                return a.Math.floor(a.Math.random() * (c - d)) + d
            }

            function Il(a) {
                try {
                    return parseInt(a, 10)
                } catch (c) {
                    return null
                }
            }

            function vd(a, c) {
                return a.isFinite(c) && !a.isNaN(c) && "[object Number]" === pf(c)
            }

            function Fo(a) {
                for (var c = [], b = a.length - 1; 0 <= b; --b) c[a.length - 1 - b] = a[b];
                return c
            }

            function Ga(a, c) {
                D(q(O, sa("push", a)), c);
                return a
            }

            function Ba(a) {
                return a ? ba(a) ? a : Xd ? Xd(a) : "number" === typeof a.length && 0 <= a.length ? Gi(a) : [] : []
            }

            function qf(a, c, b) {
                return b ? a : c
            }

            function Go(a,
                        c) {
                if (!Yc(a)) return !0;
                try {
                    c.call({0: !0, length: -Math.pow(2, 32) + 1}, function () {
                        throw 1;
                    })
                } catch (b) {
                    return !1
                }
                return !0
            }

            function Ho(a, c) {
                for (var b = "", d = 0; d < c; d += 1) b += a;
                return b
            }

            function Io(a, c) {
                for (var b = 0; b < c.length; b += 1) if (a.call(c, c[b], b)) return c[b]
            }

            function Hi(a) {
                return Z(a) ? [] : Zc(function (c, b) {
                    c.push([b, a[b]]);
                    return c
                }, [], Ii(a))
            }

            function Jo(a, c) {
                return Zc(function (b, d, e) {
                    d = a(d, e);
                    return b.concat(ba(d) ? d : [d])
                }, [], c)
            }

            function Ji(a, c) {
                return Zc(function (b, d, e) {
                    b.push(a(d, e));
                    return b
                }, [], c)
            }

            function Ko() {
                var a =
                    ta(arguments), c = a[0];
                for (a = a.slice(1); a.length;) {
                    var b = a.shift(), d;
                    for (d in b) Qc(b, d) && (c[d] = b[d]);
                    Qc(b, "toString") && (c.toString = b.toString)
                }
                return c
            }

            function Ii(a) {
                var c = [], b;
                for (b in a) Qc(a, b) && c.push(b);
                return c
            }

            function Lo(a, c) {
                return 1 <= Ki(na(a), c).length
            }

            function Ki(a, c) {
                return Zc(function (b, d, e) {
                    a(d, e) && b.push(d);
                    return b
                }, [], c)
            }

            function ba(a) {
                if ($c) return $c(a);
                ($c = xa(Array.isArray, "isArray")) || ($c = Mo);
                return $c(a)
            }

            function Se(a, c, b) {
                try {
                    if (T(c)) {
                        var d = ta(arguments).slice(3);
                        pa(b) ? c.apply(void 0,
                            d) : M.apply(void 0, X([c, b], d))()
                    }
                } catch (e) {
                    Md(a, u(e, gb), 0)
                }
            }

            function gb(a) {
                throw a;
            }

            function Md(a, c, b) {
                return Pb("setTimeout", a)(c, b)
            }

            function Pa(a, c) {
                return Pb("clearTimeout", a)(c)
            }

            function Gd() {
                return []
            }

            function tc() {
                return {}
            }

            function Pb(a, c) {
                var b = n(c, a), d = n(c, "constructor.prototype." + a) || b;
                try {
                    if (d && d.apply) return function () {
                        return d.apply(c, arguments)
                    }
                } catch (e) {
                    return b
                }
                return d
            }

            function Tb(a, c) {
                return function () {
                    var b = ta(arguments), d = b[0];
                    b = b.slice(1);
                    var e = J(d), f = e.o("m921", {}), g = n(f, a);
                    g ||
                    (g = t(c), f[a] = g, e.C("m921", f));
                    return g.apply(void 0, X([d], b))
                }
            }

            function ic(a, c) {
                void 0 === c && (c = {});
                if (!a || 1 > a.length) return c;
                N(function (b, d, e) {
                    if (e === a.length - 1) return b;
                    e === a.length - 2 ? b[d] = a[e + 1] : b[d] || (b[d] = {});
                    return b[d]
                }, c, a);
                return c
            }

            function n(a, c) {
                return a ? N(function (b, d) {
                    if (pa(b)) return b;
                    try {
                        return b[d]
                    } catch (e) {
                    }
                    return null
                }, a, c.split(".")) : null
            }

            function Ub(a) {
                a = a.Ya = a.Ya || {};
                var c = a._metrika = a._metrika || {};
                return {
                    oa: function (b, d) {
                        rf.call(c, b) || (c[b] = d);
                        return this
                    }, C: function (b, d) {
                        c[b] =
                            d;
                        return this
                    }, o: function (b, d) {
                        var e = c[b];
                        return rf.call(c, b) || Z(d) ? e : d
                    }
                }
            }

            function Qc(a, c) {
                return pa(a) ? !1 : rf.call(a, c)
            }

            function t(a, c) {
                var b = [], d = [];
                var e = c ? c : O;
                return function () {
                    var f = ta(arguments), g = e.apply(void 0, f), h = Li(g, d);
                    if (-1 !== h) return b[h];
                    f = a.apply(void 0, f);
                    b.push(f);
                    d.push(g);
                    return f
                }
            }

            function Zb(a) {
                if (sf) return sf;
                var c = !1;
                try {
                    c = [].indexOf && 0 === [void 0].indexOf(void 0)
                } catch (d) {
                }
                var b = a.Array && a.Array.prototype && xa(a.Array.prototype.indexOf, "indexOf");
                return sf = a = c && b ? function (d,
                                                   e) {
                    return b.call(e, d)
                } : No
            }

            function No(a, c) {
                for (var b = 0; b < c.length; b += 1) if (c[b] === a) return b;
                return -1
            }

            function ma(a, c) {
                return c ? a(c) : a()
            }

            function q() {
                var a = ta(arguments), c = a.shift();
                return function () {
                    var b = c.apply(void 0, arguments);
                    return N(Mi, b, a)
                }
            }

            function Qe(a, c) {
                return E([a, c], N)
            }

            function Ma(a) {
                return sa("test", a)
            }

            function sa(a, c) {
                return M(c[a], c)
            }

            function u(a, c) {
                return E([a], c)
            }

            function E(a, c) {
                return M.apply(void 0, X([c, null], a))
            }

            function Oo() {
                var a = ta(arguments), c = a[0], b = a[1], d = a.slice(2);
                return function () {
                    var e =
                        X(d, ta(arguments));
                    if (Function.prototype.call) return Function.prototype.call.apply(c, X([b], e));
                    if (b) {
                        for (var f = "_b"; b[f];) f += "_" + f.length;
                        b[f] = c;
                        e = b[f] && Ni(f, e, b);
                        delete b[f];
                        return e
                    }
                    return Ni(c, e)
                }
            }

            function Ni(a, c, b) {
                void 0 === c && (c = []);
                b = b || {};
                var d = c.length, e = a;
                T(e) && (e = "d", b[e] = a);
                var f;
                d ? 1 === d ? f = b[e](c[0]) : 2 === d ? f = b[e](c[0], c[1]) : 3 === d ? f = b[e](c[0], c[1], c[2]) : 4 === d && (f = b[e](c[0], c[1], c[2], c[3])) : f = b[e]();
                return f
            }

            function sb(a) {
                return !Ya(a) && !Z(a) && "[object Object]" === pf(a)
            }

            function pa(a) {
                return Z(a) ||
                    Ya(a)
            }

            function T(a) {
                return "function" === typeof a
            }

            function yb(a) {
                return function (c) {
                    return function (b) {
                        return a(b, c)
                    }
                }
            }

            function fa(a) {
                return function (c) {
                    return function (b) {
                        return a(c, b)
                    }
                }
            }

            function Mi(a, c) {
                return c(a)
            }

            function Po(a, c) {
                for (var b = "", d = 0; d < c.length; d += 1) b += "" + (d ? a : "") + c[d];
                return b
            }

            function kn(a) {
                return a.replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(re, "\\.").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\|/g, "\\|").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\?/g, "\\?").replace(/\*/g,
                    "\\*").replace(/\+/g, "\\+").replace(/\{/g, "\\{").replace(/\}/g, "\\}")
            }

            function nc(a, c) {
                return !(!a || -1 === og(a, c))
            }

            function og(a, c) {
                if (Oi) var b = Oi.call(a, c); else a:{
                    b = 0;
                    for (var d = a.length - c.length, e = 0; e < a.length; e += 1) {
                        b = a[e] === c[b] ? b + 1 : 0;
                        if (b === c.length) {
                            b = e - c.length + 1;
                            break a
                        }
                        if (!b && e > d) break
                    }
                    b = -1
                }
                return b
            }

            function Ka(a) {
                return "string" === typeof a
            }

            function pf(a) {
                return Object.prototype.toString.call(a)
            }

            function ta(a) {
                if (Xd) try {
                    return Xd(a)
                } catch (c) {
                }
                return Gi(a)
            }

            function Gi(a) {
                for (var c = a.length, b =
                    [], d = 0; d < c; d += 1) b.push(a[d]);
                return b
            }

            function tf(a, c) {
                tf = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (b, d) {
                    b.__proto__ = d
                } || function (b, d) {
                    for (var e in d) d.hasOwnProperty(e) && (b[e] = d[e])
                };
                return tf(a, c)
            }

            function Zc(a, c, b) {
                for (var d = 0, e = b.length; d < e;) c = a(c, b[d], d), d += 1;
                return c
            }

            function xa(a, c) {
                return ya(c, a) && a
            }

            function ya(a, c) {
                var b = Yd(a, c);
                c && !b && uf.push([a, c]);
                return b
            }

            function Yd(a, c) {
                if (!c || "function" !== typeof c) return !1;
                try {
                    var b = "" + c
                } catch (h) {
                    return !1
                }
                var d = b.length;
                if (d >
                    35 + a.length) return !1;
                for (var e = d - 13, f = 0, g = 8; g < d; g += 1) {
                    f = "[native code]"[f] === b[g] || 7 === f && "-" === b[g] ? f + 1 : 0;
                    if (12 === f) return !0;
                    if (!f && g > e) break
                }
                return !1
            }

            function F() {
            }

            function Rb(a) {
                return !a
            }

            function kb(a, c) {
                return c
            }

            function O(a) {
                return a
            }

            function ad(a, c) {
                function b() {
                    this.constructor = a
                }

                tf(a, c);
                a.prototype = null === c ? Object.create(c) : (b.prototype = c.prototype, new b)
            }

            function X() {
                for (var a = 0, c = 0, b = arguments.length; c < b; c++) a += arguments[c].length;
                a = Array(a);
                var d = 0;
                for (c = 0; c < b; c++) for (var e = arguments[c],
                                                 f = 0, g = e.length; f < g; f++, d++) a[d] = e[f];
                return a
            }

            function Qo() {
            }

            function Ro(a, c) {
                return function () {
                    a.apply(c, arguments)
                }
            }

            function qa(a) {
                if (!(this instanceof qa)) throw new TypeError("Promises must be constructed via new");
                if ("function" !== typeof a) throw new TypeError("not a function");
                this.ja = 0;
                this.rc = !1;
                this.ra = void 0;
                this.Ka = [];
                Pi(a, this)
            }

            function Qi(a, c) {
                for (; 3 === a.ja;) a = a.ra;
                0 === a.ja ? a.Ka.push(c) : (a.rc = !0, qa.sc(function () {
                    var b = 1 === a.ja ? c.ve : c.we;
                    if (null === b) (1 === a.ja ? vf : bd)(c.ua, a.ra); else {
                        try {
                            var d =
                                b(a.ra)
                        } catch (e) {
                            bd(c.ua, e);
                            return
                        }
                        vf(c.ua, d)
                    }
                }))
            }

            function vf(a, c) {
                try {
                    if (c === a) throw new TypeError("A promise cannot be resolved with itself.");
                    if (c && ("object" === typeof c || "function" === typeof c)) {
                        var b = c.then;
                        if (c instanceof qa) {
                            a.ja = 3;
                            a.ra = c;
                            wf(a);
                            return
                        }
                        if ("function" === typeof b) {
                            Pi(Ro(b, c), a);
                            return
                        }
                    }
                    a.ja = 1;
                    a.ra = c;
                    wf(a)
                } catch (d) {
                    bd(a, d)
                }
            }

            function bd(a, c) {
                a.ja = 2;
                a.ra = c;
                wf(a)
            }

            function wf(a) {
                2 === a.ja && 0 === a.Ka.length && qa.sc(function () {
                    a.rc || qa.zd(a.ra)
                });
                for (var c = 0, b = a.Ka.length; c < b; c++) Qi(a, a.Ka[c]);
                a.Ka = null
            }

            function So(a, c, b) {
                this.ve = "function" === typeof a ? a : null;
                this.we = "function" === typeof c ? c : null;
                this.ua = b
            }

            function Pi(a, c) {
                var b = !1;
                try {
                    a(function (d) {
                        b || (b = !0, vf(c, d))
                    }, function (d) {
                        b || (b = !0, bd(c, d))
                    })
                } catch (d) {
                    b || (b = !0, bd(c, d))
                }
            }

            function ji(a, c, b, d, e) {
                void 0 === e && (e = !1);
                return ef(a, c, "", -100, b, d, e)
            }

            function jc(a, c, b) {
                void 0 === c && (c = "_ym_");
                void 0 === b && (b = "");
                var d = To(a), e = 1 === (d || "").split(".").length ? d : "." + d, f = b ? "_" + b : "";
                return {
                    ib: function (g, h, k) {
                        ji(a, "" + c + g + f, h || e, k);
                        return this
                    }, o: function (g) {
                        return zd(a,
                            "" + c + g + f)
                    }, C: function (g, h, k, l, m) {
                        ef(a, "" + c + g + f, h, k, l || e, m);
                        return this
                    }
                }
            }

            function Cb(a, c) {
                if (!c) return null;
                try {
                    return a.JSON.parse(c)
                } catch (b) {
                    return null
                }
            }

            function ac(a) {
                a = "" + a;
                for (var c = 2166136261, b = a.length, d = 0; d < b; d += 1) c ^= a.charCodeAt(d), c += (c << 1) + (c << 4) + (c << 7) + (c << 8) + (c << 24);
                return c >>> 0
            }

            function ab(a, c) {
                a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
                c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
                var b = [0, 0, 0, 0];
                b[3] += a[3] * c[3];
                b[2] += b[3] >>> 16;
                b[3] &= 65535;
                b[2] += a[2] * c[3];
                b[1] += b[2] >>> 16;
                b[2] &=
                    65535;
                b[2] += a[3] * c[2];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[1] += a[1] * c[3];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[1] += a[2] * c[2];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[1] += a[3] * c[1];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[0] += a[0] * c[3] + a[1] * c[2] + a[2] * c[1] + a[3] * c[0];
                b[0] &= 65535;
                return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
            }

            function Vb(a, c) {
                a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
                c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
                var b = [0, 0, 0, 0];
                b[3] += a[3] + c[3];
                b[2] += b[3] >>> 16;
                b[3] &= 65535;
                b[2] += a[2] + c[2];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[1] += a[1] + c[1];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[0] += a[0] + c[0];
                b[0] &= 65535;
                return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
            }

            function uc(a, c) {
                c %= 64;
                if (32 === c) return [a[1], a[0]];
                if (32 > c) return [a[0] << c | a[1] >>> 32 - c, a[1] << c | a[0] >>> 32 - c];
                c -= 32;
                return [a[1] << c | a[0] >>> 32 - c, a[0] << c | a[1] >>> 32 - c]
            }

            function Xa(a, c) {
                c %= 64;
                return 0 === c ? a : 32 > c ? [a[0] << c | a[1] >>> 32 - c, a[1] << c] : [a[1] << c - 32, 0]
            }

            function ha(a, c) {
                return [a[0] ^ c[0], a[1] ^ c[1]]
            }

            function Ri(a) {
                a = ha(a, [0, a[0] >>> 1]);
                a = ab(a, [4283543511, 3981806797]);
                a = ha(a, [0, a[0] >>> 1]);
                a = ab(a, [3301882366, 444984403]);
                return a = ha(a, [0, a[0] >>> 1])
            }

            function Uo(a, c) {
                void 0 === c && (c = 210);
                var b = a || "", d = c || 0, e = b.length - b.length % 16;
                d = {J: [0, d], K: [0, d]};
                for (var f = 0; f < e; f += 16) {
                    var g = d,
                        h = [a.charCodeAt(f + 4) & 255 | (a.charCodeAt(f + 5) & 255) << 8 | (a.charCodeAt(f + 6) & 255) << 16 | (a.charCodeAt(f + 7) & 255) << 24, a.charCodeAt(f) & 255 | (a.charCodeAt(f + 1) & 255) << 8 | (a.charCodeAt(f + 2) & 255) << 16 | (a.charCodeAt(f + 3) & 255) << 24],
                        k = [a.charCodeAt(f + 12) & 255 | (a.charCodeAt(f + 13) & 255) << 8 | (a.charCodeAt(f + 14) & 255) << 16 | (a.charCodeAt(f + 15) & 255) << 24, a.charCodeAt(f + 8) & 255 |
                        (a.charCodeAt(f + 9) & 255) << 8 | (a.charCodeAt(f + 10) & 255) << 16 | (a.charCodeAt(f + 11) & 255) << 24];
                    h = ab(h, Zd);
                    h = uc(h, 31);
                    h = ab(h, $d);
                    g.J = ha(g.J, h);
                    g.J = uc(g.J, 27);
                    g.J = Vb(g.J, g.K);
                    g.J = Vb(ab(g.J, [0, 5]), [0, 1390208809]);
                    k = ab(k, $d);
                    k = uc(k, 33);
                    k = ab(k, Zd);
                    g.K = ha(g.K, k);
                    g.K = uc(g.K, 31);
                    g.K = Vb(g.K, g.J);
                    g.K = Vb(ab(g.K, [0, 5]), [0, 944331445])
                }
                e = b.length % 16;
                f = b.length - e;
                g = [0, 0];
                h = [0, 0];
                switch (e) {
                    case 15:
                        h = ha(h, Xa([0, b.charCodeAt(f + 14)], 48));
                    case 14:
                        h = ha(h, Xa([0, b.charCodeAt(f + 13)], 40));
                    case 13:
                        h = ha(h, Xa([0, b.charCodeAt(f + 12)],
                            32));
                    case 12:
                        h = ha(h, Xa([0, b.charCodeAt(f + 11)], 24));
                    case 11:
                        h = ha(h, Xa([0, b.charCodeAt(f + 10)], 16));
                    case 10:
                        h = ha(h, Xa([0, b.charCodeAt(f + 9)], 8));
                    case 9:
                        h = ha(h, [0, b.charCodeAt(f + 8)]), h = ab(h, $d), h = uc(h, 33), h = ab(h, Zd), d.K = ha(d.K, h);
                    case 8:
                        g = ha(g, Xa([0, b.charCodeAt(f + 7)], 56));
                    case 7:
                        g = ha(g, Xa([0, b.charCodeAt(f + 6)], 48));
                    case 6:
                        g = ha(g, Xa([0, b.charCodeAt(f + 5)], 40));
                    case 5:
                        g = ha(g, Xa([0, b.charCodeAt(f + 4)], 32));
                    case 4:
                        g = ha(g, Xa([0, b.charCodeAt(f + 3)], 24));
                    case 3:
                        g = ha(g, Xa([0, b.charCodeAt(f + 2)], 16));
                    case 2:
                        g = ha(g,
                            Xa([0, b.charCodeAt(f + 1)], 8));
                    case 1:
                        g = ha(g, [0, b.charCodeAt(f)]), g = ab(g, Zd), g = uc(g, 31), g = ab(g, $d), d.J = ha(d.J, g)
                }
                d.J = ha(d.J, [0, b.length]);
                d.K = ha(d.K, [0, b.length]);
                d.J = Vb(d.J, d.K);
                d.K = Vb(d.K, d.J);
                d.J = Ri(d.J);
                d.K = Ri(d.K);
                d.J = Vb(d.J, d.K);
                d.K = Vb(d.K, d.J);
                return ("00000000" + (d.J[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.J[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.K[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.K[1] >>> 0).toString(16)).slice(-8)
            }

            function Si(a) {
                return (a = R(a).hash.split("#")[1]) ? a.split("?")[0] :
                    ""
            }

            function Vo(a, c) {
                var b = Si(a);
                Ti = vo(a, function () {
                    var d = Si(a);
                    d !== b && (c(), b = d)
                }, 200, "t.h");
                return M(uo, null, a, Ti)
            }

            function Wo(a, c, b) {
                var d, e, f = c.R, g = c.oc, h = c.mb, k = J(a), l = ra((d = {}, d.wh = "1", d.pv = "1", d));
                Ui(f) && a.yd && a.yd.Ye && l.C("ad", "1");
                g && l.C("ut", "1");
                f = k.o("lastReferrer");
                d = R(a).href;
                h = {F: (e = {}, e["page-url"] = h || d, e["page-ref"] = f, e), G: l};
                b(h, c)["catch"](A(a, "g.s"));
                k.C("lastReferrer", d)
            }

            function Id(a, c) {
                var b = Xo(a);
                return b ? (b.href = c, {
                    protocol: b.protocol,
                    host: b.host,
                    port: b.port,
                    hostname: b.hostname,
                    hash: b.hash,
                    search: b.search,
                    query: b.search.replace(/^\?/, ""),
                    pathname: b.pathname || "/",
                    path: (b.pathname || "/") + b.search,
                    href: b.href
                }) : {}
            }

            function Yo(a, c, b) {
                function d() {
                    xf[v] = !0;
                    f(!1);
                    c()
                }

                function e() {
                    Pa(a, ae[v]);
                    if (xf[v]) f(!1); else {
                        var C = Math.max(0, b - (m ? p : p + h(aa) - r));
                        C ? ae[v] = ea(a, d, C, "u.t.d.c") : d()
                    }
                }

                function f(C) {
                    D(function (K) {
                        var Q = K[0], Da = K[1];
                        K = K[2];
                        C ? w.D(Q, Da, K) : w.Za(Q, Da, K)
                    }, x)
                }

                var g = u(!1, f);
                if (Td(a)) return {id: ea(a, c, b, "u.t.d"), wc: g};
                var h = Y(a), k = !1, l = !1, m = !0, p = 0, r = h(aa), w = ia(a), v = Vi;
                Vi += 1;
                ae[v] =
                    0;
                var x = [[a, ["blur"], function () {
                    m = k = l = !0;
                    p += h(aa) - r;
                    r = h(aa);
                    e()
                }], [a, ["focus"], function () {
                    k || l || (p = 0);
                    r = h(aa);
                    k = l = !0;
                    m = !1;
                    e()
                }], [a.document, ["click", "mousemove", "keydown", "scroll"], function () {
                    l || (k = !0, m = !1, l = !0, e())
                }]];
                f(!0);
                e();
                return {id: v, wc: g}
            }

            function id(a, c, b, d) {
                return function () {
                    if (ua(a, c)) {
                        var e = ta(arguments);
                        return d.apply(void 0, e)
                    }
                }
            }

            function nk(a, c, b, d) {
                var e = Wi[b];
                return e ? function () {
                    var f = ta(arguments);
                    try {
                        var g = d.apply(void 0, f);
                        var h = J(a);
                        h.oa("mt", {});
                        var k = h.o("mt"), l = k[e];
                        k[e] = l ?
                            l + 1 : 1
                    } catch (m) {
                        gb(m)
                    }
                    return g
                } : d
            }

            function cd(a, c, b) {
                var d = c.getAttribute("itemtype");
                b = jb('[itemprop~="' + b + '"]', c);
                return d ? U(function (e) {
                    return e.parentNode && Ib("[itemtype]", a, e.parentNode) === c
                }, b) : b
            }

            function Sa(a, c, b) {
                return (a = cd(a, c, b)) && a.length ? a[0] : null
            }

            function Oa(a) {
                if (!a) return "";
                a = ba(a) ? a : [a];
                return a.length ? a[0].getAttribute("content") || Fb(a[0]) : ""
            }

            function Xi(a) {
                return a ? a.attributes && a.getAttribute("datetime") ? a.getAttribute("datetime") : Oa(a) : ""
            }

            function Oc(a, c, b) {
                a = c && (nc(c.className,
                    "ym-disable-keys") || nc(c.className, "-metrika-nokeys"));
                return b && c ? a || !!Un(["ym-disable-keys", "-metrika-nokeys"], c).length : a
            }

            function Vg(a, c) {
                return Sd(c) ? "password" === c.type || c.name && L(c.name.toLowerCase(), Yi) || c.id && L(c.id.toLowerCase(), Yi) : !1
            }

            function Zi(a, c) {
                var b = Math.max(0, Math.min(c, 65535));
                Ga(a, [b >> 8, b & 255])
            }

            function Ia(a, c) {
                Ga(a, [c & 255])
            }

            function Qa(a, c, b) {
                Ia(c, b);
                return !1
            }

            function G(a, c) {
                for (var b = Math.max(0, c | 0); 127 < b;) Ga(a, [b & 127 | 128]), b >>= 7;
                Ga(a, [b])
            }

            function yf(a, c) {
                G(a, c.length);
                for (var b =
                    0; b < c.length; b += 1) G(a, c.charCodeAt(b))
            }

            function zf(a, c) {
                var b = c;
                255 < b.length && (b = b.substr(0, 255));
                a.push(b.length);
                for (var d = 0; d < b.length; d += 1) Zi(a, b.charCodeAt(d))
            }

            function Zo(a, c) {
                var b = [];
                if (Qa(a, b, 27)) return [];
                G(b, c);
                return b
            }

            function $o(a, c) {
                var b = Wa(c);
                if (!b) return c[za] = -1, null;
                var d = +c[za];
                if (!isFinite(d) || 0 >= d) return null;
                if (c.attributes) for (var e = c; e;) {
                    if (e.attributes.ef) return null;
                    e = e.parentElement
                }
                e = 64;
                var f = Pd(a, c), g = f && f[za] ? f[za] : 0;
                0 > g && (g = 0);
                b = (b || "").toUpperCase();
                var h = ap()[b];
                h || (e |= 2);
                var k = Yh(a, c);
                k || (e |= 4);
                var l = Me(a, c);
                (f = f ? Me(a, f) : null) && l[0] === f[0] && l[1] === f[1] && l[2] === f[2] && l[3] === f[3] && (e |= 8);
                dc[d].Qc = l[0] + "x" + l[1];
                dc[d].size = l[2] + "x" + l[3];
                c.id && "string" === typeof c.id && (e |= 32);
                f = [];
                if (Qa(a, f, 1)) return null;
                G(f, d);
                Ia(f, e);
                G(f, g);
                h ? Ia(f, h) : zf(f, b);
                k && G(f, k);
                e & 8 || (G(f, l[0]), G(f, l[1]), G(f, l[2]), G(f, l[3]));
                e & 32 && zf(f, c.id);
                Ia(f, 0);
                return f
            }

            function bp(a, c) {
                var b = c[za];
                if (!b || 0 > b || !Ke(c) || !c.form || Yg(a, c.form)) return [];
                var d = ai(a, c.form);
                if (0 > d) return [];
                if (Sd(c)) {
                    var e =
                        {
                            text: 0,
                            color: 0,
                            hb: 0,
                            tf: 0,
                            "datetime-local": 0,
                            email: 0,
                            Oc: 0,
                            Zf: 0,
                            search: 0,
                            dg: 0,
                            time: 0,
                            url: 0,
                            month: 0,
                            gg: 0,
                            password: 2,
                            Yf: 3,
                            qf: 4,
                            file: 6,
                            image: 7
                        };
                    e = e[c.type]
                } else {
                    e = {bf: 1, cf: 5};
                    var f = Wa(c);
                    e = Z(f) ? "" : e[f]
                }
                if ("number" !== typeof e) return [];
                f = -1;
                for (var g = c.form.elements, h = g.length, k = 0, l = 0; k < h; k += 1) if (g[k].name === c.name) {
                    if (g[k] === c) {
                        f = l;
                        break
                    }
                    l += 1
                }
                if (0 > f) return [];
                g = [];
                if (Qa(a, g, 7)) return [];
                G(g, b);
                G(g, d);
                G(g, e);
                yf(g, c.name || "");
                G(g, f);
                return g
            }

            function Hg(a, c, b, d, e, f, g) {
                var h;
                var k = Qd(a, d);
                var l = k[0];
                for (k =
                         k[1]; d && (!l || !k);) if (d = Pd(a, d)) k = Qd(a, d), l = k[0], k = k[1];
                if (!d) return [];
                l = d[za];
                if (!l || 0 > l) return [];
                k = (h = {}, h.mousemove = 2, h.click = 32, h.dblclick = 33, h.mousedown = 4, h.mouseup = 30, h.touch = 12, h)[b];
                if (!k) return [];
                h = [];
                d = cf(a, d);
                if (Qa(a, h, k)) return [];
                G(h, c);
                G(h, l);
                G(h, Math.max(0, e[0] - d.left));
                G(h, Math.max(0, e[1] - d.top));
                /^mouse(up|down)|click$/.test(b) && (a = f || g, Ia(h, 2 > a ? 1 : a === (f ? 2 : 4) ? 4 : 2));
                return h
            }

            function cp(a, c, b) {
                var d = ai(a, b);
                if (0 > d) return [];
                var e = b.elements, f = e.length;
                b = [];
                for (var g = 0; g < f; g += 1) if (!Zh(e[g])) {
                    var h =
                        e[g][za];
                    h && 0 < h && b.push(h)
                }
                e = [];
                if (Qa(a, e, 11)) return [];
                G(e, c);
                G(e, d);
                G(e, b.length);
                for (a = 0; a < b.length; a += 1) G(e, b[a]);
                return e
            }

            function vb(a, c, b) {
                void 0 === b && (b = []);
                for (var d = []; c && !pm(a, c, b); c = Pd(a, c)) d.push(c);
                D(function (e) {
                    dc.Gb += 1;
                    var f = dc.Gb;
                    e[za] = f;
                    dc[f] = {};
                    f = $o(a, e);
                    e = bp(a, e);
                    f && e && (Ga(b, f), Ga(b, e))
                }, dp(d));
                return b
            }

            function ep(a) {
                var c = a.X;
                if (!Nc || c && !c.fromElement) return Tg(a)
            }

            function fp(a) {
                var c = a.X;
                if (c && !c.toElement) return Le(a)
            }

            function $i(a) {
                var c = ub(a.X);
                if (c && Ad(c)) {
                    var b = Sg(a, c);
                    var d = Ha(a.l), e = [];
                    Qa(a.l, e, 17) ? a = [] : (G(e, d), G(e, c[za]), a = e);
                    return X(b, a)
                }
            }

            function aj(a) {
                var c = a.l, b = a.X.target;
                if (b && Ad(b)) {
                    c = vb(c, b);
                    var d = Ha(a.l), e = [];
                    Qa(a.l, e, 18) ? a = [] : (G(e, d), G(e, b[za]), a = e);
                    return X(c, a)
                }
            }

            function bj(a) {
                var c = a.l, b = ub(a.X);
                if (!b || Vg(c, b) || Oc(c, b)) return [];
                if (Ke(b)) {
                    var d = J(c).o("isEU"), e = Bd(c, b, d), f = e.Sa;
                    d = e.Ic;
                    e = e.Ac;
                    if ($h(b)) var g = b.checked; else g = b.value, g = f ? I("", cj(g.split(""))) : g;
                    c = vb(c, b);
                    f = Ha(a.l);
                    d = d && !e;
                    e = [];
                    Qa(a.l, e, 39) ? a = [] : (G(e, f), G(e, b[za]), zf(e, String(g)), Ia(e,
                        d ? 1 : 0), a = e);
                    return X(c, a)
                }
            }

            function Mc(a) {
                var c = a.l, b = a.X, d = ub(b);
                if (!d || "SCROLLBAR" === d.nodeName) return [];
                var e = [], f = u(e, Ga);
                d && Ad(d) ? f(Sg(a, d)) : f(vb(c, d));
                f = yd(c, b);
                return X(e, Hg(c, Ha(a.l), b.type, d, [f.x, f.y], b.which, b.button))
            }

            function gp(a) {
                var c = null, b = a.l, d = b.document;
                if (b.getSelection) {
                    d = void 0;
                    try {
                        d = b.getSelection()
                    } catch (g) {
                        return []
                    }
                    if (Ya(d)) return [];
                    var e = "" + d;
                    c = d.anchorNode
                } else d.selection && d.selection.createRange && (d = d.selection.createRange(), e = d.text, c = d.parentElement());
                if ("string" !==
                    typeof e) return [];
                try {
                    for (; c && 1 !== c.nodeType;) c = c.parentNode
                } catch (g) {
                    return []
                }
                if (!c) return [];
                d = Bd(b, c).Sa || Oc(b, c, !0);
                c = c.getElementsByTagName("*");
                for (var f = 0; f < c.length && !d;) d = c[f], d = Bd(b, d).Sa || Oc(b, d, !0), f += 1;
                if (e !== Af) return Af = e, d = d ? I("", cj(e.split(""))) : e, e = Ha(a.l), 0 === d.length ? d = b = "" : 100 >= d.length ? (b = d, d = "") : 200 >= d.length ? (b = d.substr(0, 100), d = d.substr(100)) : (b = d.substr(0, 97), d = d.substr(d.length - 97)), c = [], Qa(a.l, c, 29) ? a = [] : (G(c, e), yf(c, b), yf(c, d), a = c), a
            }

            function hp(a) {
                return X(Mc(a), gp(a) ||
                    [])
            }

            function dj(a) {
                return (a.shiftKey ? 2 : 0) | (a.ctrlKey ? 4 : 0) | (a.altKey ? 1 : 0) | (a.metaKey ? 8 : 0) | (a.ctrlKey || a.altKey ? 16 : 0)
            }

            function ej(a) {
                var c = [];
                Bf || (Bf = !0, Af && c.push.apply(c, Zo(a.l, Ha(a.l))), Yb(a.l, function () {
                    Bf = !1
                }, "fv.c"));
                return c
            }

            function fj(a, c, b, d) {
                var e = ub(c);
                if (!e || Ne(a, e)) return [];
                var f = e && Nb("ym-record-keys", e), g = Ug(e);
                c = Bd(a, e).Sa;
                var h = J(a);
                if (!f && (g && h.o("isEU") || Oc(a, e))) a = []; else {
                    f = vb(a, e);
                    h = Ha(a);
                    g = [];
                    if (Qa(a, g, 38)) a = []; else {
                        G(g, h);
                        Zi(g, b);
                        Ia(g, d);
                        a = e[za];
                        if (!a || 0 > a) a = 0;
                        G(g, a);
                        Ia(g, c ?
                            1 : 0);
                        a = g
                    }
                    a = X(f, a)
                }
                return a
            }

            function ip(a) {
                var c = a.l, b = a.X, d = b.keyCode, e = dj(b), f = [], g = u(f, Ga);
                if ({
                    3: 1,
                    8: 1,
                    9: 1,
                    13: 1,
                    16: 1,
                    17: 1,
                    18: 1,
                    19: 1,
                    20: 1,
                    27: 1,
                    33: 1,
                    34: 1,
                    35: 1,
                    36: 1,
                    37: 1,
                    38: 1,
                    39: 1,
                    40: 1,
                    45: 1,
                    46: 1,
                    91: 1,
                    92: 1,
                    93: 1,
                    106: 1,
                    110: 1,
                    111: 1,
                    144: 1,
                    145: 1
                }[d] || 112 <= d && 123 >= d || 96 <= d && 105 >= d || e & 16) 19 === d && 4 === (e & -17) && (d = 144), g(fj(c, b, d, e | 16)), Cf = !1, Yb(c, function () {
                    Cf = !0
                }, "fv.kd"), !(67 === d && e & 4) || e & 1 || e & 2 || g(ej(a));
                return f
            }

            function jp(a) {
                var c = a.l;
                a = a.X;
                var b = [];
                Cf && !Df && 0 !== a.which && (b.push.apply(b, fj(c, a, a.charCode ||
                    a.keyCode, dj(a))), Df = !0, Yb(c, function () {
                    Df = !1
                }, "fv.kp"));
                return b
            }

            function gj(a) {
                var c = a.l, b = ub(a.X);
                if (!b || Yg(c, b)) return [];
                var d = [];
                if ("FORM" === b.nodeName) {
                    for (var e = b.elements, f = 0; f < e.length; f += 1) Zh(e[f]) || d.push.apply(d, vb(c, e[f]));
                    d.push.apply(d, cp(c, Ha(a.l), b))
                }
                return d
            }

            function kp(a) {
                var c = a.flush;
                a = ub(a.X);
                "BODY" === Wa(a) && c()
            }

            function Ll(a, c) {
                var b, d = ub(c), e = oa.eb, f = Ub(a);
                if (d && Nb("ym-advanced-informer", d)) {
                    var g = f.o("ifc", 0) + 1;
                    f.C("ifc", g);
                    g = d.getAttribute("data-lang");
                    var h = Fa(d.getAttribute("data-cid") ||
                        "");
                    if (h || 0 === h) (e = n(a, "Ya." + e + ".informer")) ? e((b = {}, b.i = d, b.id = h, b.lang = g, b)) : f.C("ib", !0), b = c || window.event, b.preventDefault ? b.preventDefault() : b.returnValue = !1
                }
            }

            function Yf(a, c, b, d) {
                return function () {
                    var e = ua(a, c), f = ta(arguments);
                    d.apply(void 0, f);
                    return e
                }
            }

            function Xf(a, c, b, d) {
                return A(a, "cm." + b, d)
            }

            function lk(a, c, b, d, e) {
                return b.length && e ? E(N(function (f, g, h) {
                    return b[h] ? f.concat(E([a, c, d], g)) : f
                }, [], b), q)()(e) : e
            }

            var vc = {
                    construct: "Metrika",
                    callbackPostfix: "",
                    version: "eaymfsx12tenugu9n18fo",
                    host: "mc.yandex.ru"
                },
                uf = [], Xd = xa(Array.from, "from"), re = /\./g, Oi = xa(String.prototype.indexOf, "indexOf"),
                hj = xa(Array.prototype.join, "join"), I = hj ? function (a, c) {
                    return hj.call(c, a)
                } : Po, na = fa(function (a, c) {
                    return a === c
                }), Kc = fa(function (a, c) {
                    a(c);
                    return c
                }), Ic = fa(I), Ca = fa(Mi), Ya = na(null), Z = na(void 0), ij = xa(Function.prototype.bind, "bind"),
                M = ij ? function () {
                    var a = ta(arguments);
                    return ij.apply(a[0], X([a[1]], a.slice(2)))
                } : Oo, Uc = fa(E), Tm = fa(sa), jj = xa(Array.prototype.reduce, "reduce"),
                N = jj ? function (a, c, b) {
                    return jj.call(b, a, c)
                } : Zc,
                Mh = q, lp = q(O, ma), sf, Li = Zb(window), mp = yb(Li), rf = Object.prototype.hasOwnProperty,
                J = t(Ub), S = yb(n), wa = S("length"), Dg = Array.prototype.every ? function (a, c) {
                    return Array.prototype.every.call(c, a)
                } : function (a, c) {
                    return N(function (b, d) {
                        return b ? a(d) : !1
                    }, !0, c)
                }, $c, Mo = q(pf, na("[object Array]")), np = q(Hi, u(S("1"), Ji)),
                kj = xa(Array.prototype.filter, "filter"), U = kj ? function (a, c) {
                    return kj.call(c, a)
                } : Ki, lc = fa(U), Bb = ya("find", Array.prototype.find) ? function (a, c) {
                    return Array.prototype.find.call(c, a)
                } : Io, L = Array.prototype.includes ?
                    function (a, c) {
                        return Array.prototype.includes.call(c, a)
                    } : Lo, bc = yb(L), lj = t(function (a) {
                    a = n(a, "navigator") || {};
                    var c = n(a, "userAgent") || "";
                    return {Hc: -1 < (n(a, "vendor") || "").indexOf("Apple"), ld: c}
                }), ib = t(S("navigator.userAgent")), mj = t(u(/gecko/, function (a, c) {
                    return -1 !== (n(c, "navigator.userAgent") || "").toLowerCase().search(a)
                })), Yc = t(function (a) {
                    var c = n(a, "document.documentElement.style");
                    a = n(a, "InstallTrigger");
                    return !(!(c && "MozAppearance" in c) || pa(a))
                }), nj = xa(Array.prototype.map, "map"), z = nj && Go(window,
                    Array.prototype.map) ? function (a, c) {
                    return c && 0 < c.length ? nj.call(c, a) : []
                } : Ji, D = z, Kb = Array.prototype.flatMap ? function (a, c) {
                    return Array.prototype.flatMap.call(c, a)
                } : Jo, $a = fa(z), wo = yb(z), Ra = qf(function (a, c) {
                    return Array.prototype.some.call(c, a)
                }, function (a, c) {
                    for (var b = 0; b < c.length; b += 1) if (b in c && a.call(c, c[b], b)) return !0;
                    return !1
                }, ya("some", Array.prototype.some)), Ef = t(Zb), rc = S("0"), op = fa(function (a, c) {
                    return Array.prototype.sort.call(c, a)
                }), oj = xa(Array.prototype.reverse, "reverse"), dp = oj ? function (a) {
                        return oj.call(a)
                    } :
                    Fo, pj = yb(parseInt), Fa = pj(10), Ff = pj(2), Ea = Object.entries ? function (a) {
                    return a ? Object.entries(a) : []
                } : Hi, ca = Object.keys ? Object.keys : Ii, pp = Object.values ? Object.values : np,
                y = Object.assign || Ko, Rg = fa(function (a, c) {
                    return y({}, a, c)
                }), rd = t(q(S("String.fromCharCode"), u("fromCharCode", ya), Rb)), of = t(q(ib, Ma(/ipad|iphone|ipod/i))),
                Pe = t(function (a) {
                    return n(a, "navigator.platform") || ""
                }), qp = "FB_IAB FBAV OKApp GSA/ yandex yango uber EatsKit YKeyboard iOSAppUslugi".split(" "),
                me = t(function (a) {
                    var c = lj(a);
                    a = c.Hc;
                    c =
                        c.ld;
                    var b = sa("indexOf", c);
                    b = Ra(q(b, na(-1), Rb), qp);
                    var d = /YaBrowser\/[\d.]+\sSA\/3|CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/;
                    return a && (!/Safari/.test(c) && /Mobile/.test(c) || d.test(c) || b)
                }), Tc = t(function (a) {
                    a = lj(a);
                    var c = a.ld;
                    return a.Hc && !c.match("CriOS")
                }),
                rp = Ma(/Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]|Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*|; wv\).*Chrome\/[0-9][0-9.]*\sMobile/),
                sp = Ma(/; wv\)/), Ec = t(function (a) {
                    a = ib(a);
                    return sp(a) ||
                        rp(a)
                }), tp = /Chrome\/(\d+)\./, up = t(function (a) {
                    return (a = (n(a, "navigator.userAgent") || "").match(tp)) && a.length ? 76 <= Fa(a[1]) : !1
                }), Ed = t(function (a) {
                    var c = (ib(a) || "").toLowerCase();
                    a = Pe(a);
                    return !(-1 === c.indexOf("android") || -1 === c.indexOf(c, "mobile") || !/^android|linux armv/i.test(a))
                }), vp = "other none unknown wifi ethernet bluetooth cellular wimax mixed".split(" "), wp = t(function (a) {
                    var c = n(a, "navigator.connection.type");
                    if (Z(c)) return null;
                    a = Ef(a)(c, vp);
                    return -1 === a ? c : "" + a
                }), Td = t(q(S("document.addEventListener"),
                    Rb)), qj = t(function (a) {
                    var c = n(a, "navigator") || {};
                    return N(function (b, d) {
                        return b || n(c, d)
                    }, "", ["language", "userLanguage", "browserLanguage", "systemLanguage"])
                }), cg = t(function (a) {
                    var c = n(a, "navigator") || {};
                    a = qj(a);
                    Ka(a) || (a = "", c = n(c, "languages.0"), Ka(c) && (a = c));
                    return a.toLowerCase().split("-")[0]
                }), zb = t(function (a) {
                    var c = !1;
                    try {
                        c = a.top !== a
                    } catch (b) {
                    }
                    return c
                }), xp = t(function (a) {
                    var c = !1;
                    try {
                        c = a.top.contentWindow
                    } catch (b) {
                    }
                    return c
                }), yp = t(function (a) {
                    var c = !1;
                    try {
                        c = a.navigator.javaEnabled()
                    } catch (b) {
                    }
                    return c
                }),
                zp = t(function (a) {
                    var c = "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(" "),
                        b = n(a, "external");
                    b = -1 !== (n(b, "toString") ? "" + b.toString() : "").indexOf("Sequentum");
                    var d = n(a, "document.documentElement"), e = ["selenium", "webdriver", "driver"];
                    return !!(Ra(u(a, n), ["_selenium", "callSelenium", "_Selenium_IDE_Recorder"]) ||
                        Ra(u(n(a, "document"), n), c) || b || d && Ra(M(d.getAttribute, d), e))
                }), Ap = t(function (a) {
                    return !!(Ra(u(a, n), ["_phantom", "__nightmare", "callPhantom"]) || /(PhantomJS)|(HeadlessChrome)/.test(ib(a)) || n(a, "navigator.webdriver") || n(a, "isChrome") && !n(a, "chrome"))
                }), Bp = t(function (a) {
                    return Dg(u(a, n), ["ia_document.shareURL", "ia_document.referrer"])
                }), Cp = t(function (a) {
                    a = n(a, "navigator.plugins");
                    return !!(a && wa(a) && Ra(q(S("name"), Ma(/Chrome PDF Viewer/)), a))
                }),
                Dp = new RegExp(I("|", "yandex.com/bots;Googlebot;APIs-Google;Mediapartners-Google;AdsBot-Google;FeedFetcher-Google;Google-Read-Aloud;DuplexWeb-Google;Google Favicon;googleweblight;Chrome-Lighthouse;Mail.RU_Bot;StackRambler;Slurp;msnbot;bingbot;www.baidu.com/search/spi_?der.htm".split(";")).replace(/[./]/g,
                    "\\$&")), $k = t(q(S("navigator.userAgent"), Ma(Dp))), dd = t(function (a) {
                    var c = ib(a) || "", b = c.match(/Mac OS X ([0-9]+)_([0-9]+)/);
                    b = b ? [+b[1], +b[2]] : [0, 0];
                    c = c.match(/iPhone OS ([1-9]+)_([0-9]+)/);
                    return 14 <= (c ? +c[1] : 0) ? !0 : (of(a) || 10 < b[0] || 10 === b[0] && 13 <= b[1]) && Tc(a)
                }), Eo = /Edg\/(\d+)\./, Do = /Firefox\/([0-9]+)/, Ze = t(function (a) {
                    return dd(a) || ue(a, 68) || ve(a, 79)
                }), Ep = vc.construct, ec = vc.host, Gf = Td(window), oa = {
                    wd: 24226447,
                    pd: 26302566,
                    xd: 51533966,
                    Ze: 65446441,
                    sa: "https:",
                    bb: "921",
                    eb: Ep,
                    vd: Gf ? 512 : 2048,
                    sd: Gf ? 512 : 2048,
                    ud: Gf ? 100 : 400,
                    $e: 100,
                    af: "noindex"
                }, Sb = {}, P = t(function (a) {
                    return a.id + ":" + a.R
                }), Ui = na("1"), lb = {id: "id", oc: "ut", R: "type", Ub: "ldc", Ca: "nck", mb: "url", Vd: "referrer"},
                Fp = /^\d+$/, wc = {
                    id: function (a) {
                        a = "" + (a || "0");
                        Fp.test(a) || (a = "0");
                        try {
                            var c = Fa(a)
                        } catch (b) {
                            c = 0
                        }
                        return c
                    }, R: function (a) {
                        return "" + (a || 0 === a ? a : "0")
                    }, Ca: Boolean, oc: Boolean
                };
            lb.gb = "defer";
            wc.gb = Boolean;
            lb.M = "params";
            wc.M = function (a) {
                return sb(a) || ba(a) ? a : null
            };
            lb.nc = "userParams";
            lb.ab = "accurateTrackBounce";
            lb.hd = "triggerEvent";
            wc.hd = Boolean;
            lb.Yc =
                "sendTitle";
            wc.Yc = function (a) {
                return !!a || Z(a)
            };
            lb.ic = "trackHash";
            wc.ic = Boolean;
            lb.Fd = "clickmap";
            lb.Bb = "trackLinks";
            lb.Od = "enableAll";
            var je = N(function (a, c) {
                    var b = c[0];
                    a[b] = {ha: c[1], Ra: wc[b]};
                    return a
                }, {}, Ea(lb)), rj = fa(function (a, c) {
                    var b = c || {};
                    return {
                        l: u(b, O), o: function (d, e) {
                            var f = b[d];
                            return Z(f) && !Z(e) ? e : f
                        }, C: function (d, e) {
                            b[d] = e;
                            return this
                        }, Xa: function (d, e) {
                            return "" === e || pa(e) ? this : this.C(d, e)
                        }, xa: u(b, a)
                    }
                }), ra = rj(function (a) {
                    var c = "";
                    a = N(function (b, d) {
                        var e = d[0], f = "" + e + ":" + d[1];
                        "t" === e ? c = f : b.push(f);
                        return b
                    }, [], Ea(a));
                    c && a.push(c);
                    return I(":", a)
                }), Hf, Bi = (Hf = {}, Hf.w = [[function (a, c) {
                    return {
                        N: function (b, d) {
                            var e, f = b.F;
                            f = (e = {}, e["page-url"] = f && f["page-url"] || "", e.charset = "utf-8", e);
                            "0" !== c.R && (f["cnt-class"] = c.R);
                            b.G || (b.G = ra());
                            e = b.G;
                            var g = b.O;
                            f = {
                                qa: {wa: "watch/" + c.id},
                                O: y(void 0 === g ? {} : g, {Db: !(!e.o("pv") || e.o("ar") || e.o("wh"))}),
                                F: y(b.F || {}, f)
                            };
                            y(b, f);
                            d()
                        }
                    }
                }, 1]], Hf), Gp = u(Bi, Ci), Hp = t(function (a) {
                    var c = !1;
                    if (!a.addEventListener) return c;
                    try {
                        var b = Object.defineProperty({}, "passive", {
                            get: function () {
                                c =
                                    !0;
                                return 1
                            }
                        });
                        a.addEventListener("test", F, b)
                    } catch (d) {
                    }
                    return c
                }), Ip = fa(function (a, c) {
                    return a ? y({capture: !0, passive: !0}, c || {}) : !!c
                }), ia = t(function (a) {
                    a = Hp(a);
                    var c = Ip(a), b = {};
                    return y(b, {
                        D: function (d, e, f, g) {
                            D(function (h) {
                                var k = c(g);
                                Ai(d, h, f, k, !1)
                            }, e);
                            return M(b.Za, b, d, e, f, g)
                        }, Za: function (d, e, f, g) {
                            D(function (h) {
                                var k = c(g);
                                Ai(d, h, f, k, !0)
                            }, e)
                        }
                    })
                }), Jp = bc([26812653]), Fh = t(q(S("id"), Jp), P),
                yo = ["http.0.st..rt.", "network error occurred", "send beacon", "Content Security Policy", "DOM Exception 18"],
                ed, Gc =
                    function (a) {
                        return function (c) {
                            if (ed) return new ed(c);
                            if (ya("Error", a.Error)) return ed = a.Error, new a.Error(c);
                            ed = Ao;
                            return new ed(c)
                        }
                    }(window), zo = Ma(/^http./), xo = Ma(/^err.kn/), zi = [], Y = t(Ih), Kp = setTimeout;
            qa.prototype["catch"] = function (a) {
                return this.then(null, a)
            };
            qa.prototype.then = function (a, c) {
                var b = new this.constructor(Qo);
                Qi(this, new So(a, c, b));
                return b
            };
            qa.prototype["finally"] = function (a) {
                var c = this.constructor;
                return this.then(function (b) {
                    return c.resolve(a()).then(function () {
                        return b
                    })
                }, function (b) {
                    return c.resolve(a()).then(function () {
                        return c.reject(b)
                    })
                })
            };
            qa.all = function (a) {
                return new qa(function (c, b) {
                    function d(h, k) {
                        try {
                            if (k && ("object" === typeof k || "function" === typeof k)) {
                                var l = k.then;
                                if ("function" === typeof l) {
                                    l.call(k, function (m) {
                                        d(h, m)
                                    }, b);
                                    return
                                }
                            }
                            e[h] = k;
                            0 === --f && c(e)
                        } catch (m) {
                            b(m)
                        }
                    }

                    if (!a || "undefined" === typeof a.length) return b(new TypeError("Promise.all accepts an array"));
                    var e = Array.prototype.slice.call(a);
                    if (0 === e.length) return c([]);
                    for (var f = e.length, g = 0; g < e.length; g++) d(g, e[g])
                })
            };
            qa.resolve = function (a) {
                return a && "object" === typeof a && a.constructor ===
                qa ? a : new qa(function (c) {
                    c(a)
                })
            };
            qa.reject = function (a) {
                return new qa(function (c, b) {
                    b(a)
                })
            };
            qa.race = function (a) {
                return new qa(function (c, b) {
                    if (!a || "undefined" === typeof a.length) return b(new TypeError("Promise.race accepts an array"));
                    for (var d = 0, e = a.length; d < e; d++) qa.resolve(a[d]).then(c, b)
                })
            };
            qa.sc = "function" === typeof setImmediate && function (a) {
                setImmediate(a)
            } || function (a) {
                Kp(a, 0)
            };
            qa.zd = function (a) {
                "undefined" !== typeof console && console && console.warn("Possible Unhandled Promise Rejection:", a)
            };
            var H =
                    window.Promise, Lp = xa(H, "Promise"), sj = xa(n(H, "resolve"), "resolve"),
                tj = xa(n(H, "reject"), "reject"), uj = xa(n(H, "all"), "all");
            if (L(!1, [Lp, sj, tj, uj])) H = qa; else {
                var be = function (a) {
                    return new Promise(a)
                };
                be.resolve = M(sj, H);
                be.reject = M(tj, H);
                be.all = M(uj, H);
                H = be
            }
            var po = fa(function (a, c) {
                    for (var b = []; !Vd(c);) {
                        var d = ro(c);
                        a(d, function (e) {
                            return e(c)
                        });
                        b.push(d)
                    }
                    return b
                }), lf = [], mf = !1, kf = !1, si = [], qi = ["webkitvisibilitychange", "visibilitychange"],
                pi = rj(function (a) {
                    a = Ea(a);
                    return I("", z(function (c) {
                        var b = c[0];
                        c = c[1];
                        return Ya(c) ? "" : b + "(" + c + ")"
                    }, a))
                }),
                vj = "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title".split(" "),
                ln = /^ *(data|javascript):/i,
                Bh = new RegExp(I("", ["\\.(" + I("|", "3gp 7z aac ac3 acs ai avi ape apk asf bmp bz2 cab cdr crc32 css csv cue divx dmg djvu? doc(x|m|b)? emf eps exe flac? flv iso swf gif t?gz jpe?g? js m3u8? m4a mp(3|4|e?g?) m4v md5 mkv mov msi ods og(g|m|v) psd rar rss rtf sea sfv sit sha1 svg tar tif?f torrent ts txt vob wave? wma wmv wmf webm ppt(x|m|b)? xls(x|m|b)? pdf phps png xpi g?zip".split(" ")) + ")$"]), "i"),
                Aa, Wi = (Aa = {}, Aa.hit = "h", Aa.params = "p", Aa.reachGoal = "g", Aa.userParams = "up",
                    Aa.trackHash = "th", Aa.accurateTrackBounce = "atb", Aa.notBounce = "nb", Aa.addFileExtension = "fe", Aa.extLink = "el", Aa.file = "fc", Aa.trackLinks = "tl", Aa.destruct = "d", Aa.setUserID = "ui", Aa.getClientID = "ci", Aa.clickmap = "cm", Aa.enableAll = "ea", Aa),
                jo = "hash host hostname href pathname port protocol search".split(" "),
                gf = "ru ua by kz az kg lv md tj tm uz ee fr lt com co.il com.ge com.am com.tr com.ua com.ru".split(" "),
                oi = /(?:^|\.)(?:(ya\.ru)|(?:yandex)\.(\w+|com?\.\w+))$/, Uk = t(function (a) {
                    a = R(a).hostname.split(".");
                    return a[a.length - 1]
                }), wj = t(function (a) {
                    return -1 !== R(a).hostname.search(/(?:^|\.)(?:ya|yandex|beru|kinopoisk|edadeal)\.(?:\w+|com?\.\w+)$/)
                }), Jd = t(function (a) {
                    return (a ? a.replace(/^www\./, "") : "").toLowerCase()
                }),
                Mp = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|yastatic\.net|meteum\.(ai|es|io)|.*\.yandex|turbopages\.org|turbo\.site)$/,
                od = t(function (a) {
                    a = R(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search(Mp));
                    return c
                }),
                Np = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|.*\.yandex|turbopages\.org|turbo\.site)$/,
                Hm = t(function (a) {
                    a = R(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search(Np));
                    return c
                }), Op = t(function (a) {
                    a = R(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search(oi));
                    return c
                }), xj = q(R, S("protocol"), na("https:")), ho = t(function (a) {
                    return up(a) && xj(a) ? "SameSite=None;Secure;" : ""
                }), Oh = /^\s+|\s+$/g, ni = xa(String.prototype.trim, "trim"), yj = fa(function (a, c) {
                    return c.replace(a, "")
                }), sh = yj(/\s/g), Ab = yj(/\D/g), mi = ["metrika_enabled"], ff = [], ki = Tb("gsc", ii), io = /:\d+$/,
                To = t(function (a) {
                    var c = (R(a).host || "").split(".");
                    return 1 === c.length ?
                        c[0] : N(function (b, d, e) {
                            e += 1;
                            2 <= e && !b && (e = I(".", c.slice(-e)), Ng(a, e) && (b = e));
                            return b
                        }, "", c)
                }), cc = t(jc), go = t(function (a) {
                    gi(a, "_ymBRC", "1");
                    var c = "1" !== fi(a, "_ymBRC");
                    c || hi(a, "_ymBRC");
                    return c
                }), La = t(xe), xc = t(xe, function (a, c, b) {
                    return "" + c + b
                }), ei = Tb("r", function (a, c) {
                    var b = di(a, c), d = b[0];
                    return !b[1] && d
                }), Xc = t(function () {
                    return {ia: {}, pending: {}, children: {}}
                }), If = S("postMessage"), Pp = B("s.f", function (a, c, b, d, e) {
                    c = c(d);
                    var f = Xc(a), g = I(":", [c.ga.hb, c.ga.key]);
                    if (If(b)) {
                        f.pending[g] = e;
                        try {
                            b.postMessage(c.ed,
                                "*")
                        } catch (h) {
                            delete f.pending[g];
                            return
                        }
                        ea(a, function () {
                            delete f.pending[g]
                        }, 5E3, "if.s")
                    }
                }), Qp = B("s.fh", function (a, c, b, d, e, f) {
                    var g = null, h = null, k = Xc(a), l = null;
                    try {
                        g = Cb(a, f.data), h = g.__yminfo, l = g.data
                    } catch (m) {
                        return
                    }
                    if (!pa(h) && h.substring && "__yminfo" === h.substring(0, 8) && !pa(l) && (g = h.split(":"), 4 === g.length)) if (h = c.id, c = g[1], a = g[2], g = g[3], !ba(l) && l.type && "0" === g && l.counterId) {
                        if (!l.toCounter || l.toCounter == h) {
                            k = null;
                            try {
                                k = f.source
                            } catch (m) {
                            }
                            !Ya(k) && If(k) && (f = d.T(l.type, [f, l]), e = z(q(O, Rg(e)), f.concat([{}])),
                                l = b([c, a, l.counterId], e), k.postMessage(l.ed, "*"))
                        }
                    } else g === "" + h && ba(l) && U(function (m) {
                        return !(!m.hid || !m.counterId)
                    }, l).length === l.length && (b = k.pending[I(":", [c, a])]) && b.apply(null, [f].concat(l))
                }), Hc = t(function (a, c) {
                    var b, d = Pb("getElementsByTagName", n(a, "document")), e = Xc(a), f = If(a), g = Ee(a), h = ia(a);
                    if (!d || !f) return null;
                    d = d.call(a.document, "iframe");
                    f = (b = {}, b.counterId = c.id, b.hid = "" + Mb(a), b);
                    Ze(a) && (f.duid = mc(a, c));
                    bo(a, g);
                    co(a);
                    b = eo(a, f);
                    var k = E([a, u([], b)], Pp);
                    D(function (l) {
                        var m = null;
                        try {
                            m = l.contentWindow
                        } catch (p) {
                        }
                        m &&
                        k(m, {type: "initToChild"}, function (p, r) {
                            g.T("initToParent", [p, r])
                        })
                    }, d);
                    zb(a) && k(a.parent, {type: "initToParent"}, function (l, m) {
                        g.T("parentConnect", [l, m])
                    });
                    h.D(a, ["message"], E([a, c, b, g, f], Qp));
                    return {V: g, ia: e.ia, children: e.children, dc: k}
                }, q(kb, P)), qd = t(ci, q(kb, P)), Rp = B("pa.plgn", function (a, c) {
                    var b = qd(a, c);
                    b && b.V.D(["pluginInfo"], A(a, "c.plgn", function () {
                        var d = J(a);
                        d.C("cmc", d.o("cmc", 0) + 1);
                        return Bo(c, je)
                    }))
                }), Gb = E([1, null], qf), ce = E([1, 0], qf), mb, gc,
                De = (mb = {}, mb.transaction_id = "id", mb.item_id = "id", mb.item_name =
                    "name", mb.item_brand = "brand", mb.promotion_name = "coupon", mb.index = "position", mb.item_variant = "variant", mb.value = "revenue", mb.item_category = "category", mb),
                Cg = (gc = {}, gc.view_item = "detail", gc.add_to_cart = "add", gc.remove_from_cart = "remove", gc.begin_checkout = "checkout", gc.purchase = "purchase", gc),
                $l = "currencyCode add delete remove purchase checkout detail".split(" "), bb, Ta,
                Vk = (bb = {}, bb.am = "com.am", bb.tr = "com.tr", bb.ge = "com.ge", bb.il = "co.il", bb["\u0440\u0444"] = "ru", bb["xn--p1ai"] = "ru", bb["\u0443\u043a\u0440"] =
                    "ua", bb["xn--j1amh"] = "ua", bb["\u0431\u0435\u043b"] = "by", bb["xn--90ais"] = "by", bb), zj = {
                    "mc.edadeal.ru": /^([^/]+\.)?edadeal\.ru$/,
                    "mc.yandexsport.ru": /^([^/]+\.)?yandexsport\.ru$/,
                    "mc.kinopoisk.ru": /^([^/]+\.)?kinopoisk\.ru$/
                },
                Xk = (Ta = {}, Ta.ka = "ge", Ta.ro = "md", Ta.tg = "tj", Ta.tk = "tm", Ta.et = "ee", Ta.hy = "com.am", Ta.he = "co.li", Ta.ky = "kg", Ta.uk = "ua", Ta.be = "by", Ta.tr = "com.tr", Ta.kk = "kz", Ta),
                de = fa(function (a, c) {
                    return J(c).o(a, null)
                }), Sp = t(function () {
                    var a = 0;
                    return function () {
                        return a += 1
                    }
                }), Tp = q(P, Sp, ma), Ye = {
                    mc: function (a) {
                        a =
                            Ub(a).o("mt", {});
                        a = Ea(a);
                        return a.length ? N(function (c, b, d) {
                            return "" + c + (d ? "-" : "") + b[0] + "-" + b[1]
                        }, "", a) : null
                    }, clc: function (a) {
                        var c = J(a).o("cls", {cb: 0, x: 0, y: 0}), b = c.cb, d = c.x;
                        c = c.y;
                        return b ? b + "-" + a.Math.floor(d / b) + "-" + a.Math.floor(c / b) : b + "-" + d + "-" + c
                    }, rqnt: function (a, c, b) {
                        a = b.F;
                        return !a || a.nohit ? null : Tp(c)
                    }
                };
            y(Ye, function () {
                var a = {};
                a.oo = de("oo");
                a.pmc = de("cmc");
                a.lt = function (c) {
                    var b = Ub(c).o("lt", null);
                    return b ? c.Math.round(100 * b) : b
                };
                a.yu = function (c) {
                    var b = R(c);
                    return L(b.hostname, ["dzen.ru", "ya.ru"]) ?
                        (jc(c, "").o("yandexuid") || "").substring(0, 25) : null
                };
                a.re = q(fo, Gb);
                a.aw = function (c) {
                    c = Bb(q(pa, Rb), [c.document.hidden, c.document.msHidden, c.document.webkitHidden]);
                    return pa(c) ? null : ce(!c)
                };
                a.ifc = function (c) {
                    return Ub(c).o("ifc")
                };
                a.ifb = function (c) {
                    return Ub(c).o("ifb")
                };
                a.ecs = function (c) {
                    return Ub(c).o("ecs")
                };
                a.csi = de("scip");
                return a
            }());
            var Up = ca(Ye), Vp = t(function (a) {
                    a = n(a, "document") || {};
                    return ("" + (a.characterSet || a.charset || "")).toLowerCase()
                }), hb = t(q(S("document"), u("createElement", Pb))), $g =
                    t(function (a) {
                        var c = n(a, "Element.prototype");
                        return c ? (a = Bb(function (b) {
                            return ya(b, c[b])
                        }, ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"])) ? c[a] : null : null
                    }), Wp = na("INPUT"), Sd = q(Wa, Wp), Xp = na("TEXTAREA"), Wn = q(Wa, Xp), Yp = na("SELECT"),
                Xn = q(Wa, Yp), $h = q(S("type"), Ma(/^(checkbox|radio)$/)), Ke = q(Wa, Ma(/^INPUT|SELECT|TEXTAREA$/)),
                Ad = q(Wa, Ma(/^INPUT|SELECT|TEXTAREA|BUTTON$/)), Vn = ["submit", "image", "hidden"],
                hh = t(function () {
                    for (var a = 59, c = {}, b = 0; b < vj.length; b +=
                        1) c[vj[b]] = String.fromCharCode(a), a += 1;
                    return c
                }), Xh = t(function (a) {
                    return {zf: a, Ba: null, Ea: []}
                }), Vh = {}, af = {};
            Vh.p = 500;
            var Uh = {i: "id", n: "name", h: "href", ty: "type"};
            af.h = !0;
            af.c = !0;
            var sc = {};
            sc.p = bf;
            sc.c = function (a, c, b) {
                (a = fb(n(c, "textContent"))) && b && (b = b(c), b.length && Ra(q(S("textContent"), fb, na(a)), b) && (a = ""));
                Sd(c) && (a = fb(c.getAttribute && c.getAttribute("value") || a));
                return a
            };
            var yc, $e = "button," + z(function (a) {
                    return 'input[type="' + a + '"]'
                }, ["button", "submit", "reset", "file"]).join(",") + ",a", jh = u($e, jb),
                Sn = (yc = {}, yc.A = "h", yc.BUTTON = "i", yc.DIV = "i", yc.INPUT = "ty", yc), fd = t(function (a) {
                    a = n(a, "console");
                    var c = n(a, "log");
                    c = Yd("log", c) ? M(c, a) : F;
                    var b = n(a, "warn");
                    b = Yd("warn", b) ? M(b, a) : c;
                    var d = n(a, "error");
                    a = Yd("error", d) ? M(d, a) : c;
                    return {log: c, error: a, warn: b}
                }), Zp = B("p.cd", function (a, c) {
                    if (Ed(a) || of(a)) {
                        var b = La(a);
                        if (pa(b.o("jn"))) {
                            b.C("jn", !1);
                            var d = a.rf || Tc(a) ? function () {
                            } : /./, e = fd(a, P(c));
                            d.toString = function () {
                                b.C("jn", !0);
                                return "Yandex.Metrika counter is initialized"
                            };
                            e.log("%c%s", "color: inherit", d)
                        }
                    }
                }),
                Rn = /([0-9\\.]+) Safari/, $p = /\sYptp\/\d\.(\d+)\s/, Aj = t(function (a) {
                    var c;
                    a:{
                        if ((c = ib(a)) && (c = $p.exec(c)) && 1 < c.length) {
                            c = Fa(c[1]);
                            break a
                        }
                        c = 0
                    }
                    return 50 <= c && 99 >= c || ve(a, 79) ? !1 : !dd(a) || me(a)
                }),
                Bj = "monospace;sans-serif;serif;Andale Mono;Arial;Arial Black;Arial Hebrew;Arial MT;Arial Narrow;Arial Rounded MT Bold;Arial Unicode MS;Bitstream Vera Sans Mono;Book Antiqua;Bookman Old Style;Calibri;Cambria;Cambria Math;Century;Century Gothic;Century Schoolbook;Comic Sans;Comic Sans MS;Consolas;Courier;Courier New;Garamond;Geneva;Georgia;Helvetica;Helvetica Neue;Impact;Lucida Bright;Lucida Calligraphy;Lucida Console;Lucida Fax;LUCIDA GRANDE;Lucida Handwriting;Lucida Sans;Lucida Sans Typewriter;Lucida Sans Unicode;Microsoft Sans Serif;Monaco;Monotype Corsiva;MS Gothic;MS Outlook;MS PGothic;MS Reference Sans Serif;MS Sans Serif;MS Serif;MYRIAD;MYRIAD PRO;Palatino;Palatino Linotype;Segoe Print;Segoe Script;Segoe UI;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Tahoma;Times;Times New Roman;Times New Roman PS;Trebuchet MS;Verdana;Wingdings;Wingdings 2;Wingdings 3".split(";"),
                aq = t(function (a) {
                    a = hb(a)("canvas");
                    var c = n(a, "getContext");
                    if (!c) return null;
                    try {
                        var b = M(c, a)("2d");
                        b.font = "72px mmmmmmmmmmlli";
                        var d = b.measureText("mmmmmmmmmmlli").width;
                        return function (e) {
                            b.font = "72px " + e;
                            return b.measureText("mmmmmmmmmmlli").width === d
                        }
                    } catch (e) {
                        return null
                    }
                }), Cj = xa(String.prototype.repeat, "repeat"), bq = Cj ? function (a, c) {
                    return Cj.call(a, c)
                } : Ho, Ag = u(!0, function (a, c, b, d) {
                    b = c.length && (b - d.length) / c.length;
                    if (0 >= b) return d;
                    c = bq(c, b);
                    return a ? c + d : d + c
                }), Zd = [2277735313, 289559509], $d = [1291169091,
                    658871167], On = {"*": "+", "-": "/", df: "=", "+": "*", "/": "-", "=": "_"},
                cq = t(q(Y, Ca(function (a) {
                    return -(new a.l.Date).getTimezoneOffset()
                }))), dq = q(Y, Ca(function (a) {
                    a = new a.l.Date;
                    return I("", z(to, [a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()]))
                })), eq = q(Y, Ca(Ud)), Dj = t(q(Y, Ca(function (a) {
                    return a.ba[0]
                }))), Nn = t(tc, P), Sh = t(function () {
                    return {zc: null, $: []}
                }, P), fq = /(\?|&)turbo_uid=([\w\d]+)($|&)/, gq = t(function (a, c) {
                    var b = cc(a), d = R(a).search.match(fq);
                    return d && 2 <= d.length ?
                        (d = d[2], c.Ca || b.C("turbo_uid", d), d) : (b = b.o("turbo_uid")) ? b : ""
                }),
                Hn = [["domainLookupEnd", "domainLookupStart"], ["connectEnd", "connectStart"], ["responseStart", "requestStart"], ["responseEnd", "responseStart"], ["fetchStart", "navigationStart"], ["redirectEnd", "redirectStart"], [function (a, c) {
                    return n(c, "redirectCount") || n(a, "navigation.redirectCount")
                }], ["domInteractive", "domLoading"], ["domContentLoadedEventEnd", "domContentLoadedEventStart"], ["domComplete", "navigationStart"], ["loadEventStart", "navigationStart"],
                    ["loadEventEnd", "loadEventStart"], ["domContentLoadedEventStart", "navigationStart"]], cb,
                Gn = [["domainLookupEnd", "domainLookupStart"], ["connectEnd", "connectStart"], ["responseStart", "requestStart"], ["responseEnd", "responseStart"], ["fetchStart"], ["redirectEnd", "redirectStart"], ["redirectCount"], ["domInteractive", "responseEnd"], ["domContentLoadedEventEnd", "domContentLoadedEventStart"], ["domComplete"], ["loadEventStart"], ["loadEventEnd", "loadEventStart"], ["domContentLoadedEventStart"]],
                Rh = (cb = {}, cb.responseEnd =
                    1, cb.domInteractive = 1, cb.domContentLoadedEventStart = 1, cb.domContentLoadedEventEnd = 1, cb.domComplete = 1, cb.loadEventStart = 1, cb.loadEventEnd = 1, cb.unloadEventStart = 1, cb.unloadEventEnd = 1, cb.secureConnectionStart = 1, cb),
                Jn = t(Gd), Dn = t(tc), En = t(function (a) {
                    var c = n(a, "webkitRequestFileSystem");
                    if (T(c) && !Ed(a)) return (new H(M(c, a, 0, 0))).then(function () {
                        var d = n(a, "navigator.storage") || {};
                        return d.estimate ? d.estimate() : {}
                    }).then(function (d) {
                        return (d = d.quota) && 12E7 > d ? !0 : !1
                    })["catch"](u(!0, O));
                    if (Yc(a)) return c = n(a,
                        "navigator.serviceWorker"), H.resolve(Z(c));
                    c = n(a, "openDatabase");
                    if (Tc(a) && T(c)) {
                        var b = !1;
                        try {
                            c(null, null, null, null)
                        } catch (d) {
                            b = !0
                        }
                        return H.resolve(b)
                    }
                    return H.resolve(!n(a, "indexedDB") && (n(a, "PointerEvent") || n(a, "MSPointerEvent")))
                }), hq = t(function (a) {
                    return T(n(a, "yandex.getSiteUid")) ? a.yandex.getSiteUid() : null
                }), Ej = /\/$/, iq = t(tc), sd = t(function (a, c) {
                    if (!Ze(a) || !zb(a)) return mc(a, c);
                    var b = Hc(a, c);
                    return b && b.ia[c.id] ? b.ia[c.id].info.duid || mc(a, c) : mc(a, c)
                }, function (a, c) {
                    return "{" + c.Ub + c.Ca
                }), W, jq =
                    t(function (a) {
                        a = J(a);
                        var c = a.o("counterNum", 0) + 1;
                        a.C("counterNum", c);
                        return c
                    }, q(kb, P)), Nd = (W = {}, W.vf = u(vc.version, O), W.nt = wp, W.fp = function (a, c, b) {
                    if (b.F && b.F.nohit) return null;
                    c = P(c);
                    b = iq(a);
                    if (b[c]) return null;
                    a:{
                        var d = Dj(a), e = n(a, "performance.getEntriesByType");
                        if (T(e)) {
                            if (a = U(q(O, S("name"), na("first-contentful-paint")), e.call(a.performance, "paint")), a.length) {
                                a = a[0].startTime;
                                break a
                            }
                        } else {
                            e = n(a, "chrome.loadTimes");
                            if (T(e) && (e = e.call(a.chrome), e = n(e, "firstPaintTime"), d && e)) {
                                a = 1E3 * e - d;
                                break a
                            }
                            if (a =
                                n(a, "performance.timing.msFirstPaint")) {
                                a -= d;
                                break a
                            }
                        }
                        a = void 0
                    }
                    return a ? (b[c] = a, Math.round(a)) : null
                }, W.fu = function (a, c, b) {
                    var d = b.F;
                    if (!d) return null;
                    c = (n(a, "document.referrer") || "").replace(Ej, "");
                    b = (d["page-ref"] || "").replace(Ej, "");
                    d = d["page-url"];
                    a = R(a).href !== d;
                    c = c !== b;
                    b = 0;
                    a && c ? b = 3 : c ? b = 1 : a && (b = 2);
                    return b
                }, W.en = Vp, W.la = qj, W.ut = function (a, c, b) {
                    var d = b.L;
                    b = b.F;
                    d = d && d.tb;
                    b && (Op(a) || c.oc || d) && (b.ut = "noindex");
                    return null
                }, W.v = u(oa.bb, O), W.cn = jq, W.dp = function (a) {
                    var c = J(a), b = c.o("bt", {});
                    if (Z(c.o("bt"))) {
                        var d =
                            n(a, "navigator.getBattery");
                        try {
                            b.p = d && d.call(a.navigator)
                        } catch (e) {
                        }
                        c.C("bt", b);
                        b.p && b.p.then && b.p.then(A(a, "bi:dp.p", function (e) {
                            b.Se = n(e, "charging") && 0 === n(e, "chargingTime")
                        }))
                    }
                    return ce(b.Se)
                }, W.ls = t(function (a, c) {
                    var b = xc(a, c.id), d = Y(a), e = b.o("lsid");
                    return +e ? e : (d = Va(a, 0, d(aa)), b.C("lsid", d), d)
                }, kb), W.hid = Mb, W.phid = function (a, c) {
                    if (!zb(a)) return null;
                    var b = Hc(a, c);
                    if (!b) return null;
                    var d = ca(b.ia);
                    return d.length ? b.ia[d[0]].info.hid : null
                }, W.z = cq, W.i = dq, W.et = eq, W.c = q(S("navigator.cookieEnabled"),
                    Gb), W.rn = q(O, Va), W.rqn = function (a, c, b) {
                    b = b.F;
                    if (!b || b.nohit) return null;
                    c = P(c);
                    a = xc(a, c);
                    c = (a.o("reqNum", 0) || 0) + 1;
                    a.C("reqNum", c);
                    if (a.o("reqNum") === c) return c;
                    a.ib("reqNum");
                    return null
                }, W.u = sd, W.tp = q(kb, Fi, Gb), W.tpid = q(kb, function (a) {
                    a = P(a);
                    return Sb[a] && Sb[a].Le || null
                }), W.w = function (a) {
                    a = xd(a);
                    return a[0] + "x" + a[1]
                }, W.s = function (a) {
                    var c = n(a, "screen");
                    if (c) {
                        a = n(c, "width");
                        var b = n(c, "height");
                        c = n(c, "colorDepth") || n(c, "pixelDepth");
                        return I("x", [a, b, c])
                    }
                    return null
                }, W.sk = S("devicePixelRatio"), W.ifr =
                    q(zb, Gb), W.j = q(yp, Gb), W.sti = function (a) {
                    return zb(a) ? xp(a) ? "1" : null : null
                }, W), Fj = function () {
                    var a, c = {}, b = {};
                    c.bu = hq;
                    c.pri = Cn;
                    c.ds = Fn;
                    b.co = function (d) {
                        return ce(J(d).o("jn"))
                    };
                    c.td = gq;
                    y(c, (a = {}, a.iss = q(zp, Gb), a.hdl = q(Ap, Gb), a.iia = q(Bp, Gb), a.cpf = q(Cp, Gb), a.ntf = t(function (d) {
                        a:switch (n(d, "Notification.permission")) {
                            case "denied":
                                d = !1;
                                break a;
                            case "granted":
                                d = !0;
                                break a;
                            default:
                                d = null
                        }
                        return Ya(d) ? null : d ? 2 : 1
                    }), a.eu = de("isEU"), a.ns = Dj, a.np = function (d) {
                        if (Va(d, 0, 100)) d = null; else {
                            d = fb(Pe(d), 100);
                            for (var e =
                                [], f = 0; f < d.length; f++) {
                                var g = d.charCodeAt(f);
                                128 > g ? e.push(g) : (127 < g && 2048 > g ? e.push(g >> 6 | 192) : (e.push(g >> 12 | 224), e.push(g >> 6 & 63 | 128)), e.push(g & 63 | 128))
                            }
                            d = Mg(e)
                        }
                        return d
                    }, a));
                    return {Md: c, Bd: b}
                }(), kq = Fj.Bd;
            y(Nd, Fj.Md);
            var lq = ca(Nd);
            y(Nd, kq);
            var Bn = lq.concat(Up), Vc = Tb("retryReqs", function (a) {
                    return La(a).o("retryReqs", {})
                }), Qk = B("g.r", function (a) {
                    var c = Y(a), b = Vc(a), d = c(aa), e = Mb(a);
                    return N(function (f, g) {
                        var h = g[0], k = g[1];
                        k && !k.d && k.ghid && k.ghid !== e && k.time && 500 < d - k.time && k.time + 864E5 > d && 2 >= k.browserInfo.rqnl &&
                        (k.d = 1, f.push({
                            protocol: k.protocol,
                            host: k.host,
                            wa: k.resource,
                            xe: k.postParams,
                            M: k.params,
                            Cd: k.browserInfo,
                            ya: k.telemetry,
                            Bf: k.ghid,
                            time: k.time,
                            Wa: Fa(h),
                            Id: k.counterId,
                            R: k.counterType
                        }));
                        return f
                    }, [], Ea(b))
                }), An = /^[a-z][\w.+-]+:/i, Gj = t(Gd), Jf, xb = [[hf, 1], [Od, 2], [Qb(), 3], [Xe, 4]], Ue = [],
                nb = u(xb, Di);
            nb(function (a, c) {
                return {
                    da: function (b, d) {
                        var e = ua(a, c);
                        e = e && e.userParams;
                        var f = (b.L || {}).nc;
                        e && f && e(f);
                        d()
                    }
                }
            }, 0);
            nb(Ve(), 100);
            var Eb = (Jf = {}, Jf.h = xb, Jf), V = u(Eb, Ci);
            Eb["2"] = xb;
            nb(function (a, c) {
                return {
                    N: function (b,
                                 d) {
                        var e = (b.L || {}).M, f = b.O;
                        f = void 0 === f ? {} : f;
                        if (e && (Ei(c, e), !f.W && b.G && b.F)) {
                            var g = eb(a, e), h = Gj(a), k = b.G.o("pv");
                            g && !b.F.nohit && (k ? encodeURIComponent(g).length > oa.sd ? h.push([b.G, e]) : b.F["site-info"] = g : (f.W = g, b.O = f, b.ta || (b.ta = {}), b.ta.pe = !0))
                        }
                        d()
                    }, da: function (b, d) {
                        var e = Gj(a), f = ua(a, c), g = f && f.params;
                        g && (f = U(q(rc, na(b.G)), e), D(function (h) {
                            g(h[1]);
                            h = Ef(a)(h, e);
                            e.splice(h, 1)
                        }, f));
                        d()
                    }
                }
            }, -1);
            Eb["1"] = U(q(rc, na(Xe), Rb), xb);
            nb(function (a) {
                return {
                    N: function (c, b) {
                        var d = c.F;
                        if (!c.G || !d) return b();
                        var e = d["page-ref"],
                            f = d["page-url"];
                        e && f !== e ? d["page-ref"] = Nh(a, e) : delete d["page-ref"];
                        d["page-url"] = Nh(a, f).slice(0, oa.vd);
                        return b()
                    }
                }
            }, -100);
            Eb.a = xb;
            Eb.g = xb;
            V("r", Od, 1);
            V("r", function () {
                return function (a) {
                    return {
                        N: function (c, b) {
                            var d = c.G, e = void 0 === d ? ra() : d, f = c.ya, g = c.L.Wa, h = Vc(a);
                            d = e.o("rqnl", 0) + 1;
                            e.C("rqnl", d);
                            var k = e = n(h, I(".", [g, "browserInfo"]));
                            e && (e.rqnl = d);
                            f && (f.C("rqnl", d), f = n(h, I(".", [g, "telemetry"]))) && (f.rqnl = d, k = k || e);
                            k && We(a);
                            b()
                        }, da: function (c, b) {
                            Ph(a, c);
                            b()
                        }
                    }
                }
            }(), 2);
            Eb.t = xb;
            V("n", hf, 1);
            V("n", Od, 2);
            V("n", Qb(), 3);
            V("n", Ve(), 100);
            V("m", Qb(["u", "v", "vf"]), 1);
            V("m", Ve(), 2);
            var wn = /[^a-z0-9.:-]/, Kf, wb = [], Lf = {};
            wb.push(Jh, 0, Ob, Te, Sc);
            var Hj = [Ob];
            Hj.push(Te);
            var Ij = Db(Hj), zc = Db([Sc]), mq = Db([Jh, Sc]), ee = Db([0, Ob, Te, Sc]), da = (Kf = {}, Kf.h = Ij, Kf);
            da.m = mq;
            da["2"] = wb;
            da.t = wb;
            da.a = ee;
            da.n = wb;
            da.r = ee;
            da["1"] = ee;
            da.g = ee;
            var Jc = t(function (a, c) {
                    var b = Lf["*"] ? Lf["*"] : c && Lf[c];
                    b || (b = c ? da[c] || [] : wb);
                    b = N(function (d, e, f) {
                        (e = e && e(a)) && d.push([f, e]);
                        return d
                    }, [], b);
                    b.length || Wf();
                    return b
                }, kb), Mf, nq = M(H.reject, H, Ja()),
                ja = (Mf = {}, Mf.h = Na, Mf);
            ja.a = Na;
            ja.n = Na;
            ja["1"] = Na;
            ja.g = Na;
            ja["2"] = Na;
            ja.r = Na;
            ja.m = function (a, c, b) {
                return function (d, e) {
                    var f, g = d.F;
                    g = (f = {}, f["page-url"] = g && g["page-url"] || "", f);
                    f = y(d, {F: y(d.F || {}, g), qa: {wa: "clmap/" + e.id}});
                    g = Ga(Oe(a, "cm", e), b);
                    return Dd(a, c, g)(f)["catch"](A(a, "c.m"))
                }
            };
            ja.t = Na;
            var ka = B("g.sen", function (a, c, b) {
                    var d = Jc(a, c);
                    b = b ? zn(a, c, b) : [];
                    var e = ja[c], f = e ? e(a, d, b) : Na(a, d, b);
                    return function () {
                        var g = ta(arguments), h = g[0];
                        g = g.slice(1);
                        var k = h.O;
                        h = y(h, {O: y(void 0 === k ? {} : k, {ea: [c]})});
                        return f.apply(void 0,
                            X([h], g))
                    }
                }, nq), pn = fa(function (a, c) {
                    if (!c[a]) {
                        var b, d = new H(function (e) {
                            b = e
                        });
                        c[a] = {Vc: b, ua: d, Wc: !1}
                    }
                    return c[a].ua
                }), Hh = t(q(tc, Ca)), dh = q(S("settings.pcs"), na("1")), oq = B("dc.init", function (a, c) {
                    function b(k) {
                        for (var l = [], m = 1; m < arguments.length; m++) l[m - 1] = arguments[m];
                        J(a).o("dce:" + c, !1) && e[k].apply(e, l);
                        J(a).o("dclq:" + c).push([k, l])
                    }

                    var d = R(a), e = fd(a, c);
                    J(a).oa("dclq:" + c, []);
                    var f = cc(a), g = Gh(a), h = g.ie;
                    g = g.ce;
                    h && !g && f.C("debug", "1", void 0, d.host);
                    return h || g ? {
                        log: u("log", b), warn: u("warn", b), error: u("error",
                            b)
                    } : {log: F, warn: F, error: F}
                }), Ld = t(oq, kb), ok = B("p.dc", function (a, c) {
                    var b = P(c);
                    Eh(a, "");
                    Eh(a, b)
                }), qk = A(window, "h.p", function (a, c) {
                    var b, d, e = ka(a, "h", c), f = c.mb || "" + R(a).href, g = c.Vd || a.document.referrer,
                        h = {G: ra((b = {}, b.pv = 1, b)), F: (d = {}, d["page-url"] = f, d["page-ref"] = g, d), L: {}};
                    h.L.M = c.M;
                    h.L.nc = c.nc;
                    c.gb && h.F && (h.F.nohit = "1");
                    return e(h, c).then(function (k) {
                        k && (c.gb || qb(a, c, "PageView. Counter " + c.id + ". URL: " + f + ". Referrer: " + g, c.M)(), Yb(a, E([a, c, k], qn)))
                    })["catch"](A(a, "h.g.s"))
                }), Rc = t(tc, P), tk = B("p.ar",
                    function (a, c) {
                        var b = ka(a, "a", c);
                        return function (d, e, f, g, h, k) {
                            var l, m, p = {F: {}, G: ra((l = {}, l.pv = 1, l.ar = 1, l))};
                            if (d) return e = sb(e) ? {
                                title: e.title,
                                Tc: e.referer,
                                M: e.params,
                                za: e.callback,
                                l: e.ctx
                            } : {
                                title: e,
                                Tc: f,
                                M: g,
                                za: h,
                                l: k
                            }, f = Rc(c), f.url !== d && (f.ref = f.url, f.url = d), d = d || R(a).href, f = e.Tc || f.ref || a.document.referrer, g = qb(a, c, "PageView. Counter " + c.id + ". URL: " + d + ". Referrer: " + f, e.M), h = y(p.L || {}, {
                                M: e.M,
                                title: e.title
                            }), p = b(y(p, {
                                L: h,
                                F: y(p.F || {}, (m = {}, m["page-url"] = d, m["page-ref"] = f, m))
                            }), c).then(g), qc(a, "p.ar.s",
                                p, e.za || F, e.l)
                        }
                    }), fe = fa(function (a, c) {
                    var b = {};
                    Re(a)(function (d) {
                        b = d[c] || {}
                    });
                    return b
                }), pq = B("c.c.cc", function (a) {
                    var c = J(a), b = q(fe(a), function (d) {
                        var e;
                        return y({}, d, (e = {}, e.oldCode = !!a.ya_cid, e.clickmap = !!d.clickmap, e))
                    });
                    return A(a, "g.c.cc", q(M(c.o, c, "counters", {}), ca, $a(b)))
                }), pk = B("gt.c.rs", function (a, c) {
                    var b, d = P(c), e = c.id, f = c.R, g = c.Fd, h = c.qc, k = c.ic, l = E([a, d], on);
                    Dh(a, d, (b = {}, b.id = e, b.type = +f, b.clickmap = g, b.webvisor = !!h, b.trackHash = !!k, b));
                    return l
                }), Ti, vk = B("th.e", function (a, c) {
                    function b() {
                        f ||
                        (h = Qc(a, "onhashchange") ? ia(a).D(a, ["hashchange"], g) : Vo(a, g))
                    }

                    var d = ka(a, "t", c), e = Kd(a, P(c)), f = !1, g = A(a, "h.h.ch", M(Wo, null, a, c, d)), h = F;
                    c.ic && (b(), f = !0);
                    return {
                        Me: A(a, "tr.hs.h", function (k) {
                            var l;
                            k ? b() : h();
                            f = !!k;
                            e((l = {}, l.trackHash = f, l))
                        }), unsubscribe: h
                    }
                }), Xo = t(function (a) {
                    if (a = hb(a)) return a("a")
                }), Vi = 1, xf = {}, ae = {}, xk = B("nb.p", function (a, c) {
                    function b(C) {
                        k() || (C = "number" === typeof C ? C : 15E3, C = Yo(a, d(!1), C), w = C.id, x = C.wc, l())
                    }

                    function d(C) {
                        return function (K) {
                            var Q, Da, va;
                            void 0 === K && (K = (Q = {}, Q.ctx = {}, Q.callback =
                                F, Q));
                            if (C || !r && !h.Qb) {
                                r = !0;
                                l();
                                w && (Q = w, Td(a) ? Pa(a, Q) : (xf[Q] = !0, Pa(a, ae[Q] || 0)));
                                var Ac = m(aa);
                                Q = (Fa(h.o("lastHit")) || 0) < Ac - 18E5;
                                var Nf = .1 > Math.random();
                                h.C("lastHit", Ac);
                                Ac = ra((Da = {}, Da.nb = "1", Da.cl = v, Da.ar = "1", Da));
                                Da = Rc(c);
                                Da = {F: (va = {}, va["page-url"] = Da.url || R(a).href, va), G: Ac, L: {force: C}};
                                va = fd(a, P(c)).warn;
                                !K.callback && K.ctx && va('"callback" argument missing');
                                (va = C || Q || Nf) || (va = a.location.href, Q = a.document.referrer, va = !(va && Q ? Ch(va) === Ch(Q) : !va && !Q));
                                if (va) return va = f(Da, c), qc(a, "l.o.l", va, K.callback,
                                    K.ctx)
                            }
                            return null
                        }
                    }

                    var e, f = ka(a, "n", c), g = P(c), h = xc(a, c.id),
                        k = u(u(g, fe(a)), q(ma, S("accurateTrackBounce"))),
                        l = u((e = {}, e.accurateTrackBounce = !0, e), Kd(a, g)), m = Y(a), p = m(aa), r = !1, w = 0, v = 0,
                        x;
                    la(a, c, function (C) {
                        v = C.Ud - p
                    });
                    c.ab && b(c.ab);
                    return {qe: d(!0), ab: b, Ib: x}
                }), Of = ["yandex_metrika_callback" + vc.callbackPostfix, "yandex_metrika_callbacks" + vc.callbackPostfix],
                qq = B("cb.i", function (a) {
                    var c = Of[0], b = Of[1];
                    if (T(a[c])) a[c]();
                    "object" === typeof a[b] && D(function (d, e) {
                        a[b][e] = null;
                        Se(a, d)
                    }, a[b]);
                    D(function (d) {
                        try {
                            delete a[d]
                        } catch (e) {
                            a[d] =
                                void 0
                        }
                    }, Of)
                }), Jj = {Cf: Ma(/[/&=?#]/)}, kd = B("go.in", function (a, c, b, d) {
                    void 0 === b && (b = "goal");
                    return function (e, f, g, h) {
                        var k, l;
                        if (!e || Jj[b] && Jj[b](e)) return null;
                        var m = f, p = g || F;
                        T(f) && (p = f, m = void 0, h = g);
                        var r = qb(a, c, "Reach goal. Counter: " + c.id + ". Goal id: " + e, m), w = "goal" === b;
                        f = ka(a, "g", c);
                        g = nn(a, c, e, b);
                        e = g[0];
                        g = g[1];
                        m = f({
                            L: {M: m},
                            G: ra((k = {}, k.ar = 1, k)),
                            F: (l = {}, l["page-url"] = e, l["page-ref"] = g, l)
                        }, c).then(function () {
                            w && r();
                            d && d()
                        });
                        return qc(a, "g.s", m, p, h)
                    }
                }), rq = fa(function (a, c) {
                    Ka(c) ? a.push(c) : D(q(O, sa("push",
                        a)), c)
                }), Bk = B("cl.p", function (a, c) {
                    function b(m, p, r, w) {
                        void 0 === w && (w = {});
                        r ? Hd(a, c, {
                            url: r,
                            Qa: !0,
                            qb: m,
                            tb: p,
                            sender: d,
                            l: w.ctx,
                            za: w.callback,
                            title: w.title,
                            M: w.params
                        }) : f.warn("Empty link")
                    }

                    var d = ka(a, "2", c), e = [], f = fd(a, P(c)), g = P(c), h = A(a, "s.s.tr", u(Kd(a, g), mn));
                    g = {
                        l: a,
                        Aa: c,
                        Sd: e,
                        sender: d,
                        globalStorage: J(a),
                        Jd: xc(a, c.id),
                        Ef: Mb(a),
                        Ne: u(u(g, fe(a)), q(ma, S("trackLinks")))
                    };
                    g = A(a, "cl.p.c", u(g, jn));
                    g = ia(a).D(a, ["click"], g);
                    c.Bb && h(c.Bb);
                    var k = A(a, "file.clc", E([!0, !1], b)), l = A(a, "e.l.l.clc", E([!1, !0], b));
                    e = A(a,
                        "add.f.e.clc", rq(e));
                    return {file: k, Qd: l, Ad: e, Bb: h, Ib: g}
                }), fn = fa(Nb)("(ym-disable-clickmap|ym-clickmap-ignore)"), Gk = B("clm.p", function (a, c) {
                    if (rd(a)) return F;
                    var b = ka(a, "m", c), d = P(c), e = Y(a), f = e(aa), g = u(u(d, fe(a)), q(ma, S("clickmap"))), h,
                        k = null;
                    d = A(a, "clm.p.c", function (l) {
                        var m = g();
                        if (m) {
                            var p = J(a), r = p.o("cls", {cb: 0, x: 0, y: 0});
                            p.C("cls", {cb: r.cb + 1, x: r.x + l.clientX, y: r.y + l.clientY});
                            p = "object" === typeof m ? m : {};
                            r = p.filter;
                            m = p.isTrackHash || !1;
                            var w = z(function (x) {
                                return ("" + x).toUpperCase()
                            }, p.ignoreTags || []);
                            Z(h) && (h = p.quota || null);
                            var v = !!p.quota;
                            l = {element: gn(a, l), position: yd(a, l), button: hn(l), time: e(aa)};
                            p = R(a).href;
                            if (en(a, l, k, w, r)) {
                                if (v) {
                                    if (!h) return;
                                    --h
                                }
                                w = Qd(a, l.element);
                                r = w[0];
                                w = w[1];
                                v = cf(a, l.element);
                                r = ["rn", Va(a), "x", Math.floor(65535 * (l.position.x - v.left) / (r || 1)), "y", Math.floor(65535 * (l.position.y - v.top) / (w || 1)), "t", Math.floor((l.time - f) / 100), "p", bf(a, l.element), "X", l.position.x, "Y", l.position.y];
                                r = I(":", r);
                                m && (r += ":wh:1");
                                dn(a, p, r, b, c);
                                k = l
                            }
                        }
                    });
                    return ia(a).D(n(a, "document"), ["click"], d)
                }), db =
                    q(ca, rc), Hk = B("c.m.p", function (a, c) {
                    var b = P(c);
                    return u(Kd(a, b), cn)
                }), Ik = B("e.a.p", function (a, c) {
                    var b = ua(a, c);
                    b = E([q(O, Ca(!0)), U(Boolean, z(u(b, n), ["clickmap", "trackLinks", "accurateTrackBounce"]))], z);
                    c.Od && b();
                    return b
                }), Kk = B("s.f.i", function (a, c) {
                    return la(a, c, function (b) {
                        if (n(b, "settings.button_goals") || -1 !== R(a).href.indexOf("yagoalsbuttons=1")) ia(a).D(a, ["click"], A(a, "c.t.c", q(S("target"), E([a, c], id(a, c, "", bn))))), qb(a, c, "Button goal. Counter " + c.id + ". Init.")()
                    })
                }), Wb = [], Ua = [], jd = [], hc = [], ke =
                    [], Kj = [], $m = "ar:1:pv:1:v:" + oa.bb + ":vf:" + vc.version,
                an = oa.sa + "//" + ec + "/watch/" + oa.pd, Zf = u("form", Ib), Om = u("form", jb),
                yh = t(function (a) {
                    return I("[^\\d<>]*", a.split(""))
                }), zl = t(function (a) {
                    return new RegExp(yh(a), "g")
                }), Vm = /\S/,
                rh = u(["style", "display:inline;margin:0;padding:0;font-size:inherit;color:inherit;line-height:inherit"], ic),
                Lj = t(function (a) {
                    a = R(a);
                    a = so(a.search.substring(1));
                    a["_ym_status-check"] = a["_ym_status-check"] || "";
                    a._ym_lang = a._ym_lang || "ru";
                    return a
                }), nh = q(Lj, S("_ym_status-check"),
                    Fa), sq = q(Lj, S("_ym_lang")),
                mh = Ma(/^https:\/\/(yastatic\.net\/s3\/metrika|s3\.mds\.yandex\.net\/internal-metrika-betas|[\w-]+\.dev\.webvisor\.com|[\w-]+\.dev\.metrika\.yandex\.ru)\/(\w|-|\/|(\.)(?!\.))+\.js$/),
                Qm = ["form", "button", "phone", "status"], Mj = [], Nm = t(function (a, c, b) {
                    D(q(Uc([a, c, b]), ma), Mj);
                    b.inline ? gh(a, b) : b.resource && mh(b.resource) && (a._ym__postMessageEvent = c, a._ym__inpageMode = b.inpageMode, a._ym__initMessage = b.initMessage, Rm(a, b.resource))
                }, function (a, c, b) {
                    return b.id
                }), fh = [], ne = [], tq = B("p.fh",
                    function (a, c) {
                        var b, d;
                        void 0 === c && (c = !0);
                        var e = La(a), f = Y(a), g = e.o("wasSynced"), h = {id: 3, R: "0"};
                        return c && g && g.time + 864E5 > f(aa) ? H.resolve(g) : ka(a, "f", h)({
                            G: ra((b = {}, b.pv = 1, b)),
                            F: (d = {}, d["page-url"] = R(a).href, d["page-ref"] = a.document.referrer, d)
                        }, h).then(function (k) {
                            var l;
                            k = (l = {}, l.time = f(aa), l.params = n(k, "settings"), l.bkParams = n(k, "userData"), l);
                            e.C("wasSynced", k);
                            return k
                        })["catch"](A(a, "f.h"))
                    }), uq = fa(function (a, c) {
                    0 === parseFloat(n(c, "settings.c_recp")) && (a.Wb.C("ymoo" + a.ma, a.fd(Za)), a.Hb && a.Hb.destruct &&
                    a.Hb.destruct())
                }),
                Em = [[["'(-$&$&$'", 30102, 0], ["'(-$&$&$'", 29009, 0]], [["oWdZ[nc[jh_YW$Yec", 30103, 1], ["oWdZ[nc[jh_YW$Yec", 29010, 1]]],
                Fm = [[["oWdZ[nc[jh_YW$Yec", 30103, 1]], [["oWdZ[nc[jh_YW$Yec", 29010, 1]]],
                eh = {F: {t: 'UV|L7,!"T[rwe&D_>ZIb\\aW#98Y.PC6k'}}, ch = {id: 42822899, R: "0"}, ge,
                Lm = (ge = {}, ge.s = "p", ge["8"] = "i", ge), Im = Tb("csp", function (a, c) {
                    return ka(a, "s", c)({}, ["https://ymetrica1.com/watch/3/1"])
                }), Nj = "et w v z i u vf".split(" "), wm = {
                    bg: "stamp",
                    yf: "frameId",
                    ga: "meta",
                    lf: "base",
                    Df: "hasBase",
                    gf: "address",
                    eg: "ua",
                    Xf: "prev",
                    Lf: "namespace",
                    If: "keystrokes",
                    Hf: "isMeta",
                    Kf: "modifier",
                    Uf: "pageWidth",
                    Tf: "pageHeight",
                    cg: "startNode",
                    uf: "endNode",
                    hg: "zoomFrom",
                    ig: "zoomTo",
                    level: "level",
                    duration: "duration",
                    Gf: "i",
                    Pf: "o",
                    n: "n",
                    r: "r",
                    sf: "ct",
                    jf: "at",
                    Mf: "nm",
                    Nf: "ns",
                    Sf: "pa",
                    Wf: "pr",
                    Of: "nx",
                    Pa: "h",
                    pf: "changes",
                    ff: "a",
                    kf: "b",
                    nf: "c",
                    Rf: "op"
                }, xm = ["attributes", "attrs"], Oj = function () {
                    function a(c) {
                        this.l = c
                    }

                    a.prototype.xa = function (c) {
                        var b = Cd(c);
                        c = z(M(this.Ha, this), b);
                        return vi(eb(this.l, z(function (d, e) {
                            var f;
                            return y({},
                                b[e], (f = {}, f.data = d, f))
                        }, c)))
                    };
                    a.prototype.Ha = function (c) {
                        var b = c.data;
                        "string" !== typeof b && (b = eb(this.l, Cd(c.data)));
                        return b
                    };
                    a.prototype.Oa = function (c) {
                        return encodeURIComponent(c).length
                    };
                    a.prototype.dd = function (c, b) {
                        for (var d = Math.ceil(c.length / b), e = [], f = 0; f < b; f += 1) e.push(c.slice(f * d, d * (f + 1)));
                        return e
                    };
                    a.prototype.isEnabled = function () {
                        return !!this.l.JSON
                    };
                    return a
                }(), Pj = function () {
                    function a(c, b, d) {
                        this.vc = 0;
                        this.$b = 1;
                        this.Eb = 5E3;
                        this.l = c;
                        this.ca = b;
                        this.De = d
                    }

                    a.prototype.Ab = function () {
                        this.vc =
                            ea(this.l, q(M(this.flush, this), M(this.Ab, this)), this.Eb, "b.f")
                    };
                    a.prototype.send = function (c, b) {
                        var d = this.De(c, b || [], this.$b);
                        this.$b += 1;
                        return d
                    };
                    a.prototype.push = function () {
                    };
                    a.prototype.flush = function () {
                    };
                    return a
                }(), Pf, vq = (Pf = function (a) {
                    function c(b, d, e, f) {
                        void 0 === f && (f = 0);
                        d = a.call(this, b, d, e) || this;
                        d.hc = 0;
                        d.La = 0;
                        d.fc = 0;
                        d.buffer = [];
                        d.Eb = 2E3;
                        d.V = Ee(b);
                        d.Ab();
                        d.fc = f;
                        return d
                    }

                    ad(c, a);
                    c.prototype.Cc = function (b) {
                        return U(Boolean, this.V.T("ag", b))
                    };
                    c.prototype.Bc = function (b, d) {
                        var e = this;
                        b(rb(A(this.l,
                            "wv2.b.st"), function (f) {
                            e.send(f, d)
                        }))
                    };
                    c.prototype.Ee = function (b, d) {
                        var e = this;
                        Pa(this.l, this.vc);
                        var f = Math.ceil(this.ca.Oa(d) / 63E4), g = this.ca.dd(d, f);
                        D(function (h, k) {
                            var l, m = y({}, b, (l = {}, l.data = h, l.partNum = k + 1, l.end = k + 1 === f, l));
                            l = e.ca.xa([m], !1);
                            e.Bc(l, [m])
                        }, g);
                        this.Ab()
                    };
                    c.prototype.send = function (b, d) {
                        var e = this;
                        this.V.T("se", d);
                        return a.prototype.send.call(this, b, d).then(O, function () {
                            e.V.T("see", d)
                        })
                    };
                    c.Xd = function (b, d, e, f) {
                        c.Fb["" + b + "e"] || (this.Fb.e = new c(f, e, d, 0));
                        return this.Fb.e
                    };
                    c.prototype.ke =
                        function () {
                            return this.fc && this.hc >= this.fc
                        };
                    c.prototype.push = function (b) {
                        var d = this;
                        if (!this.ke()) {
                            this.V.T("p", b);
                            var e = this.ca.Ha(b), f = this.ca.Oa(e);
                            7E5 < f ? this.Ee(b, e) : (e = this.Cc(this.buffer.concat([b])), e = N(function (g, h) {
                                return g + d.ca.Oa(d.ca.Ha(h))
                            }, 0, e), this.La + e + f >= 7E5 * .7 && this.flush(), this.buffer.push(b), this.La += f)
                        }
                    };
                    c.prototype.D = function (b, d) {
                        this.V.D([b], d)
                    };
                    c.prototype.Da = function (b, d) {
                        this.V.Da([b], d)
                    };
                    c.prototype.flush = function () {
                        var b = this.buffer.concat(this.Cc(this.buffer));
                        if (b.length) {
                            this.buffer =
                                [];
                            this.hc += this.La;
                            this.La = 0;
                            var d = this.ca.xa(b);
                            this.Bc(d, b)
                        }
                    };
                    return c
                }(Pj), Pf.Fb = {}, Pf), gd, Qf = (gd = {}, gd[1] = 500, gd[2] = 500, gd[3] = 0, gd), Rf = function () {
                    function a(c, b) {
                        var d, e = this;
                        this.id = "a";
                        this.Pb = !1;
                        this.Na = {};
                        this.Ga = {
                            "schema.org": "Article NewsArticle Movie BlogPosting Review Recipe Answer".split(" "),
                            Pc: ["article"]
                        };
                        this.kc = (d = {}, d.Answer = 3, d.Review = 2, d);
                        this.Hd = t(function (f, g) {
                            pb(e.l, e.ma, "Warning: content has only " + g.chars + " chars. Required " + Qf[g.type], g)
                        });
                        this.l = c;
                        this.root = Lb(c);
                        this.ma =
                            b
                    }

                    a.prototype.na = function (c) {
                        return c.element
                    };
                    a.prototype.Dc = function (c, b) {
                        var d = this, e;
                        A(this.l, "P.s." + b, function () {
                            e = d.Na[b].call(d, c)
                        })();
                        return e
                    };
                    a.prototype.ye = function (c) {
                        var b = y({}, c);
                        this.Pb && !b.id && L(c.type, [3, 2]) && (c = I(", ", z(S("name"), b.authors || [])), b.pageTitle = c + ": " + b.pageTitle);
                        b.pageTitle || (b.pageTitle = this.ae(b.fb));
                        b.pageUrlCanonical || (c = b.id, b.pageUrlCanonical = ("string" !== typeof c ? 0 : /^(https?:)\/\//.test(c)) ? b.id : this.$d());
                        b.id || (b.id = b.pageTitle || b.pageUrlCanonical);
                        return b
                    };
                    a.prototype.fa = function (c) {
                        var b = this, d = {}, e = this.na(c);
                        if (!e) return null;
                        d.type = c.type;
                        D(function (g) {
                            d[g] = b.Dc(c, g)
                        }, ca(this.Na));
                        var f = Y(this.l);
                        d.stamp = f(xi);
                        d.element = c.element;
                        d.fb = e;
                        d = this.ye(d);
                        d.id = d.id ? ac(d.id) : 1;
                        d.update = function (g) {
                            return b.na(c) ? b.Dc(c, g) : void 0
                        };
                        return d
                    };
                    a.prototype.ae = function (c) {
                        for (var b = 1; 5 >= b; b += 1) {
                            var d = Oa(pc("h" + b, c));
                            if (d) return d
                        }
                    };
                    a.prototype.$d = function () {
                        var c = pc('[rel="canonical"]', this.root);
                        if (c) return c.href
                    };
                    a.prototype.Fc = function () {
                        return 1
                    };
                    a.prototype.lb =
                        function () {
                            return []
                        };
                    a.prototype.Td = function () {
                        var c = this, b = this.lb(), d = 1;
                        return N(function (e, f) {
                            var g = c.fa({element: f, type: c.Fc(f)}) || [];
                            ba(g) || (g = [g]);
                            g = N(function (h, k) {
                                var l = h.values, m = h.Gc;
                                k && k.chars > Qf[k.type] && !L(k.id, m) ? (l.push(k), m.push(k.id)) : k && k.chars <= Qf[k.type] && c.Hd(k.id, k);
                                return {values: l, Gc: m}
                            }, {values: [], Gc: z(S("id"), e)}, g).values;
                            return e.concat(z(function (h) {
                                var k;
                                h = y((k = {index: d, ad: !1}, k.involvedTime = 0, k), h);
                                d += 1;
                                return h
                            }, g))
                        }, [], b)
                    };
                    return a
                }(), Qj = function (a) {
                    function c() {
                        var b,
                            d = null !== a && a.apply(this, arguments) || this;
                        d.id = "j";
                        d.Pb = !0;
                        d.uc = I(",", ['script[type="application/ld+json"]', 'script[type="application/json+ld"]', 'script[type="ld+json"]', 'script[type="json+ld"]']);
                        d.Na = (b = {}, b.id = function (e) {
                            var f = e.data["@id"];
                            e = e.data.mainEntity || e.data.mainEntityOfPage;
                            !f && e && (f = e["@id"]);
                            return f
                        }, b.chars = function (e) {
                            return "string" === typeof e.data.text ? e.data.text.length : Fb(this.na(e)).length
                        }, b.authors = function (e) {
                            var f = [];
                            f = f.concat(this.kb(e.data, "author"));
                            f = f.concat(this.kb(e.data.mainEntity,
                                "author"));
                            return f.concat(this.kb(e.data.mainEntityOfPage, "author"))
                        }, b.pageTitle = function (e) {
                            var f = e.data.headline || "";
                            e.data.hf && (f += " " + e.data.alternativeHeadline);
                            "" === f && (e.data.name ? f = e.data.name : e.data.itemReviewed && (f = e.data.itemReviewed));
                            3 === e.type && e.data.parentItem && (f = e.data.parentItem.text);
                            return f
                        }, b.updateDate = function (e) {
                            return e.data.dateModified || ""
                        }, b.publicationDate = function (e) {
                            return e.data.datePublished || ""
                        }, b.pageUrlCanonical = function (e) {
                            return e.data.url
                        }, b.topics = function (e) {
                            return this.kb(e.data,
                                "about", ["name", "alternateName"])
                        }, b.rubric = function (e) {
                            var f = this, g = this.na(e);
                            e = U(Boolean, z(function (h) {
                                if (h = Cb(f.l, Fb(h))) {
                                    var k = f.Ec(h);
                                    if (k) return N(function (l, m) {
                                        return l ? l : "BreadcrumbList" === m["@type"] ? m : l
                                    }, null, k);
                                    if ("BreadcrumbList" === h["@type"]) return h
                                }
                                return null
                            }, [e.element].concat(jb(this.uc, document.body === g ? document.documentElement : g))));
                            return e.length && (e = e[0].itemListElement, ba(e)) ? U(Boolean, z(function (h) {
                                return h.item && !f.l.isNaN(h.position) ? {
                                        name: h.item.name || h.name,
                                        position: h.position
                                    } :
                                    null
                            }, e)) : []
                        }, b);
                        return d
                    }

                    ad(c, a);
                    c.prototype.kb = function (b, d, e) {
                        void 0 === e && (e = ["name"]);
                        if (!b || !b[d]) return [];
                        b = ba(b[d]) ? b[d] : [b[d]];
                        b = U(O, z(function (f) {
                            return f ? "string" === typeof f ? f : N(function (g, h) {
                                return g || "" + f[h]
                            }, "", e) : null
                        }, b));
                        return z(function (f) {
                            var g;
                            return g = {}, g.name = f, g
                        }, b)
                    };
                    c.prototype.na = function (b) {
                        var d = b.element, e = b.data["@id"], f = b.data.url;
                        b = null;
                        f && "string" === typeof f && (b = this.yc(f));
                        !b && e && "string" === typeof e && (b = this.yc(e));
                        b || (b = e = d.parentNode, !Ib("head", this.l, d) && e && 0 !==
                        Fb(e).length) || (b = this.l.document.body);
                        return b
                    };
                    c.prototype.yc = function (b) {
                        try {
                            var d = Id(this.l, b).hash;
                            if (d) {
                                var e = pc(d, this.l.document.body);
                                if (e) return e
                            }
                        } catch (f) {
                        }
                        return null
                    };
                    c.prototype.Zb = function (b) {
                        return this.kc[b["@type"]] || 1
                    };
                    c.prototype.fa = function (b) {
                        var d = this, e = b.element;
                        if (!b.data && (b.data = Cb(this.l, Fb(e)), !b.data || !/schema\.org/.test(b.data["@context"]) && !ba(b.data))) return null;
                        var f = this.Ec(b.data);
                        if (f) return z(function (h) {
                            if (!L(h["@type"], d.Ga["schema.org"])) return null;
                            h =
                                {element: e, data: h, type: d.Zb(h)};
                            return a.prototype.fa.call(d, h)
                        }, f);
                        if ("QAPage" === b.data["@type"]) {
                            var g = b.data.mainEntity || b.data.mainEntityOfPage;
                            if (!g) return null
                        }
                        "Question" === b.data["@type"] && (g = b.data);
                        return g ? (b = Kb(u(g, n), ["acceptedAnswer", "suggestedAnswer"]), z(function (h) {
                            var k;
                            if (!h || !L(h["@type"], d.Ga["schema.org"])) return null;
                            h = {element: e, type: d.Zb(h), data: y((k = {}, k.parentItem = g, k), h)};
                            return a.prototype.fa.call(d, h)
                        }, b)) : L(b.data["@type"], this.Ga["schema.org"]) ? a.prototype.fa.call(this,
                            y(b, {type: this.Zb(b.data)})) : null
                    };
                    c.prototype.lb = function () {
                        return jb(this.uc, this.root)
                    };
                    c.prototype.Ec = function (b) {
                        return ba(b) && b || b && ba(b["@graph"]) && b["@graph"]
                    };
                    return c
                }(Rf), Sf = function (a) {
                    function c() {
                        var b, d = null !== a && a.apply(this, arguments) || this;
                        d.id = "s";
                        d.Pb = !0;
                        d.Oe = sa("exec", new RegExp("schema.org\\/(" + I("|", ca(d.kc)) + ")$"));
                        d.Na = (b = {}, b.id = function (e) {
                            e = e.element;
                            var f = Sa(this.l, e, "identifier");
                            return f ? Oa(f) : (f = Sa(this.l, e, "mainEntityOfPage")) && f.getAttribute("itemid") ? f.getAttribute("itemid") :
                                null
                        }, b.chars = function (e) {
                            var f = 0;
                            e = e.element;
                            for (var g = ["articleBody", "reviewBody", "recipeInstructions", "description", "text"], h = 0; h < g.length; h += 1) {
                                var k = Sa(this.l, e, g[h]);
                                if (k) {
                                    f = Oa(k).length;
                                    break
                                }
                            }
                            e = Fb(e);
                            0 === f && e && (f += e.length);
                            return f
                        }, b.topics = function (e) {
                            var f = this, g = cd(this.l, e.element, "about");
                            return z(function (h) {
                                var k = {name: Oa(h)};
                                if (g = Sa(f.l, h, "name")) k.name = Oa(g);
                                return k
                            }, g)
                        }, b.rubric = function (e) {
                            var f = this;
                            (e = pc('[itemtype$="schema.org/BreadcrumbList"]', e.element)) || (e = pc('[itemtype$="schema.org/BreadcrumbList"]',
                                this.root));
                            return e ? z(function (g) {
                                return {name: Oa(Sa(f.l, g, "name")), position: Oa(Sa(f.l, g, "position"))}
                            }, cd(this.l, e, "itemListElement")) : []
                        }, b.updateDate = function (e) {
                            return (e = Sa(this.l, e.element, "dateModified")) ? Xi(e) : ""
                        }, b.publicationDate = function (e) {
                            return (e = Sa(this.l, e.element, "datePublished")) ? Xi(e) : ""
                        }, b.pageUrlCanonical = function (e) {
                            e = cd(this.l, e.element, "url");
                            if (e.length) {
                                var f = e[0];
                                return f.href ? f.href : Oa(e)
                            }
                            return null
                        }, b.pageTitle = function (e) {
                            var f = "", g = e.element, h = Sa(this.l, g, "headline");
                            h && (f += Oa(h));
                            (h = Sa(this.l, g, "alternativeHeadline")) && (f += " " + Oa(h));
                            "" === f && ((h = Sa(this.l, g, "name")) || (h = Sa(this.l, g, "itemReviewed")), h && (f += Oa(h)));
                            3 === e.type && (e = Ib('[itemtype$="schema.org/Question"]', this.l, g)) && (e = Sa(this.l, e, "text")) && (f += Oa(e));
                            return f
                        }, b.authors = function (e) {
                            var f = this;
                            e = cd(this.l, e.element, "author");
                            return z(function (g) {
                                var h, k = (h = {}, h.name = "", h);
                                /.+schema.org\/(Person|Organization)/.test(g.getAttribute("itemtype") || "") && (h = Sa(f.l, g, "name")) && (k.name = Oa(h));
                                k.name || (k.name =
                                    g.getAttribute("content") || Fb(g) || g.getAttribute("href"));
                                return k
                            }, e)
                        }, b);
                        return d
                    }

                    ad(c, a);
                    c.prototype.Fc = function (b) {
                        b = b.getAttribute("itemtype") || "";
                        return (b = this.Oe(b)) ? this.kc[b[1]] : 1
                    };
                    c.prototype.fa = function (b) {
                        return b.element && Fb(b.element).length ? a.prototype.fa.call(this, b) : null
                    };
                    c.prototype.lb = function () {
                        var b = I(",", z(function (d) {
                            return '[itemtype$="schema.org/' + d + '"]'
                        }, this.Ga["schema.org"]));
                        return jb(b, this.root)
                    };
                    return c
                }(Rf), Rj = function (a) {
                    function c(b, d) {
                        var e, f = a.call(this, b, d) ||
                            this;
                        f.id = "o";
                        f.Na = (e = {}, e.chars = function (g) {
                            g = this.na(g);
                            return Fb(g).length
                        }, e.authors = function (g) {
                            return this.Lb(g.data.author)
                        }, e.pageTitle = function (g) {
                            return this.pb(g.data.title) || ""
                        }, e.updateDate = function (g) {
                            return this.pb(g.data.modified_time)
                        }, e.publicationDate = function (g) {
                            return this.pb(g.data.published_time)
                        }, e.pageUrlCanonical = function (g) {
                            return this.pb(g.data.url)
                        }, e.rubric = function (g) {
                            return this.Lb(g.data.section)
                        }, e.topics = function (g) {
                            return this.Lb(g.data.tag)
                        }, e);
                        f.Pd = new RegExp("^(og:)?((" +
                            I("|", f.Ga.Pc) + "):)?");
                        return f
                    }

                    ad(c, a);
                    c.prototype.Lb = function (b) {
                        var d;
                        return b ? ba(b) ? z(function (e) {
                            var f;
                            return f = {}, f.name = e, f
                        }, b) : [(d = {}, d.name = b, d)] : []
                    };
                    c.prototype.pb = function (b) {
                        return ba(b) ? b.length ? b[0] : null : b
                    };
                    c.prototype.lb = function () {
                        var b = jb('meta[property="og:type"]', this.l.document.body);
                        return [this.l.document.head].concat(b)
                    };
                    c.prototype.Zd = function (b) {
                        var d = this, e = b.element, f = {}, g = this.na(b);
                        e = jb("meta[property]", e === this.l.document.head ? e : g);
                        if (e.length) D(function (h) {
                            try {
                                if (h.parentNode ===
                                    g || h.parentNode === d.l.document.head) {
                                    var k = h.getAttribute("property").replace(d.Pd, ""), l = Oa(h);
                                    f[k] ? ba(f[k]) ? f[k].push(l) : f[k] = [f[k], l] : f[k] = l
                                }
                            } catch (m) {
                                Fd(d.l, "og.ed", m)
                            }
                        }, e); else return null;
                        return L(f.type, this.Ga.Pc) ? y(b, {data: f}) : null
                    };
                    c.prototype.na = function (b) {
                        b = b.element;
                        var d = this.l.document;
                        return b === d.head ? d.body : b.parentNode
                    };
                    c.prototype.fa = function (b) {
                        return (b = this.Zd(b)) ? a.prototype.fa.call(this, b) : null
                    };
                    return c
                }(Rf),
                Sj = "resize scroll mousemove mousedown click windowfocus keydown orientationchange change focus touchmove touchstart".split(" "),
                wq = "id pageTitle stamp chars authors updateDate publicationDate pageUrlCanonical topics rubric".split(" "),
                xq = function () {
                    function a(c, b, d, e) {
                        this.rb = !1;
                        this.ga = {};
                        this.scroll = {x: 0, y: 0};
                        this.Ob = this.Nc = 0;
                        this.Xb = this.Rc = "";
                        this.Y = [];
                        this.Je = 0;
                        this.Ja = {Pa: 0, pc: 0};
                        this.qd = wq;
                        this.buffer = d;
                        this.$a = M(this.$a, this);
                        this.ob = M(this.ob, this);
                        this.vb = M(this.vb, this);
                        this.l = c;
                        this.ma = e;
                        this.zb = b;
                        this.Sb = "pai" + b.id;
                        this.Mb();
                        this.xc = ia(this.l);
                        this.time = Y(this.l);
                        this.jd();
                        this.Nb = J(this.l)
                    }

                    a.prototype.start =
                        function () {
                            var c = this;
                            if (!this.rb) {
                                this.buffer.D("ag", this.ob);
                                this.buffer.D("se", this.vb);
                                this.Fe();
                                var b = this.Nb.o(this.Sb, []), d = !b.length;
                                b.push(M(this.me, this));
                                this.Nb.oa(this.Sb, b);
                                d && this.Xc();
                                var e = function (f, g) {
                                    return (f.cc || 0) <= (g.cc || 0) ? g : f
                                };
                                ia(this.l).D(this.l, ["click"], function (f) {
                                    if (c.Y.length) {
                                        f = Ah(f);
                                        var g = R(c.l).hostname, h;
                                        if (h = f) h = Jd(f.hostname) === Jd(g);
                                        h && (f = N(e, c.Y[0], c.Y).id, g = Mb(c.l), xc(c.l, c.ma.split(":")[0]).C("pai", f + "-" + g))
                                    }
                                });
                                this.$a({type: "page", target: this.l})
                            }
                        };
                    a.prototype.stop =
                        function () {
                            this.buffer.Da("se", this.vb);
                            this.buffer.Da("ag", this.ob);
                            this.Pe();
                            this.rb = !0
                        };
                    a.prototype.Kc = function (c) {
                        return Ib("html", this.l, c) !== this.l.document.documentElement
                    };
                    a.prototype.Xc = function () {
                        var c = this;
                        A(this.l, "p.ic" + this.zb.id, function () {
                            if (!c.rb) {
                                var b = c.Nb.o(c.Sb), d = c.zb.Td();
                                D(function (e) {
                                    var f = z(function (g) {
                                        return y({}, g)
                                    }, d);
                                    T(e) && e(f)
                                }, b);
                                c.Je = ea(c.l, M(c.Xc, c), 1E3, "p")
                            }
                        })()
                    };
                    a.prototype.me = function (c) {
                        this.rb || (this.Qe(c), this.Re(), this.Ce())
                    };
                    a.prototype.$a = function (c) {
                        var b =
                            this;
                        A(this.l, "p.ec." + this.zb.id, function () {
                            try {
                                var d = c.type;
                                var e = c.target
                            } catch (l) {
                                return
                            }
                            var f = "page" === d;
                            if ("scroll" === d || f) {
                                var g = [b.l, b.l.document, b.l.document.documentElement, fc(b.l)];
                                L(e, g) && b.Mb()
                            }
                            ("resize" === d || f) && b.jd();
                            d = b.time(aa);
                            var h = Math.min(d - b.Nc, 5E3);
                            b.Ob += Math.round(h);
                            b.Nc = d;
                            if (b.ga && b.scroll && b.Ja) {
                                var k = b.Ja.Pa * b.Ja.pc;
                                b.Y = z(function (l) {
                                    var m = y({}, l), p = b.ga[m.id], r = Rd(l.fb);
                                    if (!p || b.Kc(m.element) || !r) return m;
                                    l = b.l.Math;
                                    p = l.max((b.scroll.y + b.Ja.Pa - p.y) / p.height, 0);
                                    var w = r.height *
                                        r.width;
                                    r = b.Dd(r);
                                    m.cc = r / k;
                                    m.visibility = r / w;
                                    if (.9 <= m.visibility || .1 <= m.cc) m.involvedTime += h;
                                    m.maxScrolled = l.round(1E4 * p) / 1E4;
                                    return m
                                }, b.Y)
                            }
                        })()
                    };
                    a.prototype.Dd = function (c) {
                        var b = c.top, d = c.bottom, e = c.left, f = this.Ja, g = f.pc;
                        f = f.Pa;
                        var h = this.l.Math;
                        c = h.min(h.max(c.right, 0), g) - h.min(h.max(e, 0), g);
                        return (h.min(h.max(d, 0), f) - h.min(h.max(b, 0), f)) * c
                    };
                    a.prototype.Qe = function (c) {
                        var b = z(function (d) {
                            return d.id
                        }, this.Y);
                        this.Y = this.Y.concat(U(function (d) {
                            return !L(d.id, b)
                        }, c))
                    };
                    a.prototype.jd = function () {
                        var c =
                            bi(this.l) || xd(this.l);
                        this.Ja = {pc: c[0], Pa: c[1]}
                    };
                    a.prototype.Re = function () {
                        var c = this;
                        A(this.l, "p.um." + this.zb.id, function () {
                            var b = [];
                            c.Mb();
                            c.ga = N(function (d, e) {
                                var f;
                                if (c.Kc(e.element)) b.push(e), delete d[e.id]; else {
                                    var g = (f = {}, f.id = e.id, f.involvedTime = Math.max(e.involvedTime, 0), f.maxScrolled = e.maxScrolled || 0, f.chars = e.update ? e.update("chars") || 0 : 0, f);
                                    e.fb && (f = Rd(e.fb)) && (g.x = Math.max(Math.round(f.left) + c.scroll.x, 0), g.y = Math.max(Math.round(f.top) + c.scroll.y, 0), g.width = Math.round(f.width), g.height =
                                        Math.round(f.height));
                                    d[e.id] = g
                                }
                                return d
                            }, {}, c.Y);
                            D(function (d) {
                                d = Ef(c.l)(d, c.Y);
                                c.Y.splice(d, 1)
                            }, b)
                        })()
                    };
                    a.prototype.vb = function () {
                        this.Rc = this.Xb
                    };
                    a.prototype.ob = function () {
                        var c, b, d = z(u(this.ga, n), ca(this.ga));
                        return d.length && (this.Xb = eb(this.l, d), this.Rc !== this.Xb) ? (c = {}, c.type = "publishersHeader", c.data = (b = {}, b.articleMeta = d || [], b.involvedTime = this.Ob, b), c) : null
                    };
                    a.prototype.Ce = function () {
                        var c = this;
                        if (this.Y.length) {
                            var b = U(function (d) {
                                return !d.ad
                            }, this.Y);
                            D(function (d) {
                                var e, f = N(function (g,
                                                       h) {
                                    d[h] && (g[h] = d[h]);
                                    return g
                                }, {}, c.qd);
                                c.buffer.push((e = {}, e.type = "articleInfo", e.stamp = f.stamp, e.data = f, e));
                                d.ad = !0
                            }, b);
                            b.length && pb(this.l, this.ma, "Publisher content info found: ", b)
                        }
                    };
                    a.prototype.Fe = function () {
                        this.xc.D(this.l, Sj, this.$a)
                    };
                    a.prototype.Pe = function () {
                        this.xc.Za(this.l, Sj, this.$a)
                    };
                    a.prototype.Mb = function () {
                        this.scroll = {
                            x: this.l.pageXOffset || n(this.l, "document.documentElement.scrollLeft") || 0,
                            y: this.l.pageYOffset || n(this.l, "document.documentElement.scrollLeft") || 0
                        }
                    };
                    return a
                }(), hd =
                    {};
            Qj && (hd.json_ld = Qj);
            Sf && (hd.schema = Sf, hd.microdata = Sf);
            Rj && (hd.opengraph = Rj);
            var yq = B("p.p", function (a, c) {
                    function b(l, m, p) {
                        var r = y({}, k);
                        r.O.W = l;
                        r.ta.Gd = vm(m);
                        return e(y({}, r), c, p)["catch"](A(a, "s.ww.p"))
                    }

                    if (!ya("querySelectorAll", a.document.querySelectorAll)) return H.resolve();
                    var d = [new Oj(a)], e = ka(a, "p", c), f = Bb(function (l) {
                        return l.isEnabled()
                    }, d);
                    d = ra();
                    var g = xc(a, c.id), h = g.o("pai");
                    h && (g.ib("pai"), d.C("pai", h));
                    var k = {F: {}, G: d, ta: {fe: !(f instanceof Oj)}, O: {}};
                    return la(a, c, A(a, "ps.s", function (l) {
                        if (l =
                            n(l, "settings.publisher.schema")) {
                            l = Fi(c) ? "microdata" : l;
                            var m = hd[l];
                            if (m && f) {
                                var p = P(c), r = vq.Xd(p, b, f, a);
                                m = new m(a, p);
                                (new xq(a, m, r, p)).start();
                                pb(a, p, 'Publishers analytics schema "' + l + '"')
                            }
                        }
                    }))
                }), zq = function () {
                    function a(c, b) {
                        this.l = c;
                        this.Yd = b
                    }

                    a.prototype.xa = function (c) {
                        return vi(Kb(M(this.Ha, this), c))
                    };
                    a.prototype.Ha = function (c, b) {
                        var d = this, e = [], f = this.Yd(this.l, b && b.type, c.type);
                        f && (e = Kb(function (g) {
                            return g({l: d.l, X: c}) || []
                        }, f));
                        return e
                    };
                    a.prototype.Oa = function (c) {
                        return c.length
                    };
                    a.prototype.dd =
                        function (c) {
                            return [c]
                        };
                    a.prototype.isEnabled = function () {
                        return !0
                    };
                    return a
                }(), jm = function (a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.buffer = [];
                        b.rd = 7500;
                        b.Eb = 3E4;
                        b.Ab();
                        return b
                    }

                    ad(c, a);
                    c.prototype.push = function (b, d) {
                        var e = this.ca.Ha(b, d);
                        Ga(this.buffer, e);
                        this.ca.Oa(this.buffer) > this.rd && this.flush()
                    };
                    c.prototype.flush = function () {
                        var b = this.buffer;
                        b.length && (this.send(b), this.buffer = [])
                    };
                    return c
                }(Pj), lm = /opera mini/i,
                Tj = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state contact.*".split(" "),
                qm = ["email", "tel"], tm = /ym-hide-content/, um = /ym-show-content/,
                rm = new RegExp("(" + I("|", Tj) + ")", "i"), Yi = ["password", "passwd", "pswd"],
                sm = new RegExp("(" + I("|", Tj.concat("\u0438\u043c\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0434\u0435\u043a\u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0430\u0434\u0440\u0435\u0441 \u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u043d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f(-|\\.|_|\\s){0,2}\u043f\u043e\u0447\u0442\u0430 \u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2}\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u043e\u043c \u0443\u043b\u0438\u0446\u0430 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0433\u043e\u0440\u043e\u0434 \u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(" "))) +
                    ")", "i"), za = "metrikaId_" + Math.random(), dc = {Gb: 0}, ap = t(function () {
                    var a;
                    return a = {}, a.A = 1, a.ABBR = 2, a.ACRONYM = 3, a.ADDRESS = 4, a.APPLET = 5, a.AREA = 6, a.B = 7, a.BASE = 8, a.BASEFONT = 9, a.BDO = 10, a.BIG = 11, a.BLOCKQUOTE = 12, a.BODY = 13, a.BR = 14, a.BUTTON = 15, a.CAPTION = 16, a.CENTER = 17, a.CITE = 18, a.CODE = 19, a.COL = 20, a.COLGROUP = 21, a.DD = 22, a.DEL = 23, a.DFN = 24, a.DIR = 25, a.DIV = 26, a.DL = 27, a.DT = 28, a.EM = 29, a.FIELDSET = 30, a.FONT = 31, a.FORM = 32, a.FRAME = 33, a.FRAMESET = 34, a.H1 = 35, a.H2 = 36, a.H3 = 37, a.H4 = 38, a.H5 = 39, a.H6 = 40, a.HEAD = 41, a.HR = 42, a.HTML =
                        43, a.I = 44, a.IFRAME = 45, a.IMG = 46, a.INPUT = 47, a.INS = 48, a.ISINDEX = 49, a.KBD = 50, a.LABEL = 51, a.LEGEND = 52, a.LI = 53, a.LINK = 54, a.MAP = 55, a.MENU = 56, a.META = 57, a.NOFRAMES = 58, a.NOSCRIPT = 59, a.OBJECT = 60, a.OL = 61, a.OPTGROUP = 62, a.OPTION = 63, a.P = 64, a.PARAM = 65, a.PRE = 66, a.Q = 67, a.S = 68, a.SAMP = 69, a.SCRIPT = 70, a.SELECT = 71, a.SMALL = 72, a.SPAN = 73, a.STRIKE = 74, a.STRONG = 75, a.STYLE = 76, a.SUB = 77, a.SUP = 78, a.TABLE = 79, a.TBODY = 80, a.TD = 81, a.TEXTAREA = 82, a.TFOOT = 83, a.TH = 84, a.THEAD = 85, a.TITLE = 86, a.TR = 87, a.TT = 88, a.U = 89, a.UL = 90, a.VAR = 91, a.NOINDEX =
                        100, a
                }), Aq = function () {
                    var a = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state".split(" ");
                    return {
                        Af: new RegExp("(" + I("|", a) + ")", "i"),
                        Vf: new RegExp("(" + I("|", a.concat("\u0438\u043c\u044f;\u0444\u0430\u043c\u0438\u043b\u0438\u044f;\u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e;\u0438\u043d\u0434\u0435\u043a\u0441;\u0442\u0435\u043b\u0435\u0444\u043e\u043d;\u0430\u0434\u0440\u0435\u0441;\u043f\u0430\u0441\u043f\u043e\u0440\u0442;\u041d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b;\u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2} \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f;\u0434\u043e\u043c;\u0443\u043b\u0438\u0446\u0430;\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430;\u0433\u043e\u0440\u043e\u0434;\u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(";"))) +
                            ")", "i"),
                        xf: /ym-record-keys/i,
                        te: "\u2022",
                        Qf: 88
                    }
                }(), cj = $a(u(Aq.te, O)), Nc = !0, Af = "", Bf = !1, Cf = !0, Df = !1, om = fa(function (a, c) {
                    var b = E([a, "efv." + c.event], A);
                    c.H = z(q(O, b), c.H);
                    return c
                }), Bq = t(function (a) {
                    var c = [], b = [], d = [];
                    a.document.attachEvent && !a.opera && (c.push(Le), b.push(ep), b.push(fp));
                    a.document.addEventListener ? c.push(aj) : (b.push($i), d.push(aj));
                    c = X([{target: a, type: "window", event: "beforeunload", H: [F]}, {
                        target: a,
                        type: "window",
                        event: "unload",
                        H: [F]
                    }, {event: "click", H: [Mc]}, {event: "dblclick", H: [Mc]}, {
                        event: "mousedown",
                        H: [Mc]
                    }, {event: "mouseup", H: [hp]}, {event: "keydown", H: [ip]}, {
                        event: "keypress",
                        H: [jp]
                    }, {event: "copy", H: [ej]}, {event: "blur", H: c}, {event: "focusin", H: b}, {
                        event: "focusout",
                        H: d
                    }], !a.document.attachEvent || a.opera ? [{
                        target: a,
                        type: "window",
                        event: "focus",
                        H: [Tg]
                    }, {
                        target: a,
                        type: "window",
                        event: "blur",
                        H: [Le]
                    }] : [], a.document.addEventListener ? [{event: "focus", H: [$i]}, {
                        event: "change",
                        H: [bj]
                    }, {event: "submit", H: [gj]}] : [{type: "formInput", event: "change", H: [bj]}, {
                        type: "form",
                        event: "submit",
                        H: [gj]
                    }]);
                    return Qg(a, c)
                }), mm =
                    t(function (a) {
                        return X(fc(a) ? [{target: a, type: "document", event: "mouseleave", H: [kp]}] : [])
                    }), Cq = ["submit", "beforeunload", "unload"], Dq = t(function (a, c) {
                    var b = c(a);
                    return N(function (d, e) {
                        d[e.type + ":" + e.event] = e.H;
                        return d
                    }, {}, b)
                }), nm = /^\s*function submit\(\)/, Lg = 0, Je = {x: 0, y: 0}, Kg = 0, Ie = {x: 0, y: 0}, Ge = {},
                Uj = t(function (a) {
                    var c = X([{event: "mousemove", H: [hm]}, {
                        target: a,
                        type: "window",
                        event: "scroll",
                        H: [Gg]
                    }, {event: "onmousewheel" in a.document ? "mousewheel" : "wheel", H: [gm]}, {
                        target: a, type: "window", event: "beforeunload",
                        H: [Jg]
                    }], mj(a) ? [{target: a, type: "window", event: "unload", H: [Jg]}] : [], [{
                        target: a,
                        type: "window",
                        event: "resize",
                        H: [fm]
                    }, {event: "touchmove", H: [Fg]}, {
                        event: "touchstart",
                        H: [Fg]
                    }], a.document.addEventListener ? [{event: "scroll", H: [em]}] : []);
                    return X(Bq(a), Qg(a, c))
                }), Eq = u(Uj, function (a, c, b, d) {
                    return Dq(c, a)[b + ":" + d] || []
                }), Fq = t(function (a) {
                    return X(Cq, ["beforeunload"], mj(a) ? ["unload"] : [])
                }), Gq = B("wv.p", function (a, c) {
                    var b;
                    if (!(b = !c.qc)) {
                        var d = J(a), e = !1;
                        b = d.o("hitParam", {});
                        var f = P(c);
                        b[f] && (d = d.o("counters", {}),
                            e = !(!Ui(c.R) || d[f]));
                        b[f] = 1;
                        b = e
                    }
                    if (b) return H.resolve(F);
                    b = new zq(a, Eq);
                    return im(a, c, b, Uj, Fq(a))
                }), Hq = t(function (a) {
                    var c = J(a), b = c.o("isEU");
                    if (Z(b)) {
                        var d = Fa(zd(a, "is_gdpr") || "");
                        if (L(d, [0, 1])) c.C("isEU", d), b = !!d; else if (a = La(a).o("wasSynced"), a = n(a, "params.eu")) c.C("isEU", a), b = !!a
                    }
                    return b
                }, function (a) {
                    return J(a).o("isEU")
                }), Vj = B("i.e", Hq), Wj = t(tc, P), Eg = q(sd, ac),
                Xj = oa.sa + "//" + ec + "/metrika/metrika_match.html", Yj = ec.split("."), Iq = Yj.pop(),
                Zj = I(".", Yj), ak = F, Jq = Tb("isp.stat", function (a, c) {
                    return new H(function (b,
                                           d) {
                        if (Tn(a, Xj, "isp")) {
                            var e = function (f) {
                                ("1" === f ? b : d)();
                                ak();
                                f = Xh(Xj);
                                L("isp", f.Ea) && (f.Ea = U(q(na("isp"), Rb), f.Ea), f.Ea.length || ($b(f.Ba), f.Ba = null))
                            };
                            ak = ia(a).D(a, ["message"], E([a, c, e], dm));
                            ea(a, e, 1500)
                        } else d()
                    })
                }), Kq = Tb("isp", function (a, c) {
                    la(a, c, function (b) {
                        var d = Bb(function (g) {
                            return n(b, "settings." + g)
                        }, ["rt", "mf"]);
                        if (d && dd(a)) {
                            var e = dh(b) && !od(a), f = Wj(c);
                            y(f, {wb: d, status: e ? 3 : 4});
                            if (!e) return d = cm(a, c, d), e = function (g) {
                                f.status = g
                            }, Jq(a, d).then(u(1, e))["catch"](u(2, e))
                        }
                    })["catch"](A(a, "l.isp"))
                }),
                he = B("dl.w", function (a, c, b) {
                    var d = 0;
                    Fe(a, a[c], b) || (d = ea(a, function () {
                        he(a, c, b)
                    }, 1E3, "ec.dl"));
                    return function () {
                        return Pa(a, d)
                    }
                }), Lq = B("p.e", function (a, c) {
                    var b = ua(a, c);
                    if (b) {
                        var d = J(a);
                        b = M(b.params, b);
                        var e = A(a, "h.ee", E([a, P(c), b], Yl)), f, g = function (k) {
                            f = k;
                            k.ub.D(e)
                        };
                        if (c.Jb) return d.C("ecs", 0), he(a, c.Jb, g);
                        var h = la(a, c, function (k) {
                            k = n(k, "settings.ecommerce");
                            d.C("ecs", 1);
                            return k ? he(a, k, g) : F
                        });
                        return function () {
                            h.then(function (k) {
                                k();
                                f && f.unsubscribe()
                            })
                        }
                    }
                }), bk = B("fbq.o", function (a, c, b) {
                    var d = n(a,
                        "fbq");
                    if (d && d.callMethod) {
                        var e = function () {
                            var g = ta(arguments), h = d.apply(void 0, g);
                            c(g);
                            return h
                        };
                        y(e, d);
                        b && D(c, b);
                        a.fbq = e
                    } else var f = ea(a, E([a, c, X(Ba(d && d.queue))], bk), 1E3, "fbq.d");
                    return M(Pa, null, a, f)
                }), Mq = B("ecm.a", u("add", ud)), Nq = B("ecm.r", u("remove", ud)), Oq = B("ecm.d", u("detail", ud)),
                Pq = B("ecm.p", u("purchase", ud)), Bc, ob, Cc,
                Tf = (Bc = {}, Bc.add_to_wishlist = "add-to-wishlist", Bc.begin_checkout = "begin-checkout", Bc.generate_lead = "submit-lead", Bc.add_payment_info = "add-payment-info", Bc),
                Uf = (ob = {}, ob.AddToCart =
                    "add-to-cart", ob.Lead = "submit-lead", ob.InitiateCheckout = "begin-checkout", ob.Purchase = "purchase", ob.CompleteRegistration = "register", ob.Contact = "submit-contact", ob.AddPaymentInfo = "add-payment-info", ob.AddToWishlist = "add-to-wishlist", ob.Subscribe = "subscribe", ob),
                Vl = (Cc = {}, Cc["1"] = Tf, Cc["2"] = Tf, Cc["3"] = Tf, Cc["0"] = Uf, Cc),
                Wl = [Uf.AddToCart, Uf.Purchase], Qq = fa(function (a, c) {
                    var b = n(c, "ecommerce"), d = n(c, "event") || "";
                    if (!(b = b && d && {version: "3", jb: d})) a:{
                        if (ba(c) || wa(c)) if (b = ta(c), d = b[1], "event" === b[0] && d) {
                            b =
                                {version: "2", jb: d};
                            break a
                        }
                        b = void 0
                    }
                    b || (b = (b = n(c, "ecommerce")) && {version: "1", jb: I(",", ca(b))});
                    b && a(b)
                }), Rq = B("ag.e", function (a, c) {
                    var b = [], d = A(a, "ag.s", E([ma, b], D));
                    "0" === c.R && la(a, c, function (e) {
                        if (n(e, "settings.auto_goals") && ua(a, c) && (e = kd(a, c, "autogoal"))) {
                            e = E([e, c.Jb], Ul);
                            var f = Qq(e);
                            e = E([a, e], Tl);
                            b.push(bk(a, e));
                            b.push(he(a, "dataLayer", function (g) {
                                g.ub.D(f)
                            }))
                        }
                    });
                    return d
                }), Sq = /[^\d.,]/g, Tq = /[.,]$/, Rl = B("ep.pp", function (a, c) {
                    if (!c) return 0;
                    a:{
                        var b = c.replace(Sq, "").replace(Tq, "");
                        var d = "0" ===
                            b[b.length - 1];
                        for (var e = b.length; 0 < e && !(3 < b.length - e + 1 && d); --e) {
                            var f = b[e - 1];
                            if (L(f, [",", "."])) {
                                d = f;
                                break a
                            }
                        }
                        d = ""
                    }
                    b = d ? c.split(d) : [c];
                    d = d ? b[1] : "00";
                    b = parseFloat(Ab(b[0]) + "." + Ab(d));
                    d = Math.pow(10, 8) - .01;
                    a.isNaN(b) ? b = 0 : (b = a.Math.min(b, d), b = a.Math.max(b, 0));
                    return b
                }),
                Uq = [[["EUR", "\u20ac"], "978"], [["USD", "\u0423\\.\u0415\\.", "\\$"], "840"], [["UAH", "\u0413\u0420\u041d", "\u20b4"], "980"], ["\u0422\u0413 KZT \u20b8 \u0422\u04a2\u0413 TENGE \u0422\u0415\u041d\u0413\u0415".split(" "), "398"], [["GBP", "\u00a3",
                    "UKL"], "826"], ["RUR RUB \u0420 \u0420\u0423\u0411 \u20bd P \u0420UB P\u0423\u0411 P\u0423B PY\u0411 \u0420Y\u0411 \u0420\u0423B P\u0423\u0411".split(" "), "643"]],
                Vq = t(function (a) {
                    return new RegExp(a.join("|"), "i")
                }), Wq = B("ep.cp", function (a) {
                    if (!a) return "643";
                    var c = sh(a);
                    return (a = Bb(function (b) {
                        return Vq(b[0]).test(c)
                    }, Uq)) ? a[1] : "643"
                }), Xq = t(function () {
                    function a() {
                        var k = h + "0", l = h + "1";
                        f[k] ? f[l] ? (h = h.slice(0, -1), --g) : (e[l] = b(8), f[l] = 1) : (e[k] = b(8), f[k] = 1)
                    }

                    function c() {
                        var k = h + "1";
                        f[h + "0"] ? f[k] ? (h = h.slice(0,
                            -1), --g) : (h += "1", f[h] = 1) : (h += "0", f[h] = 1)
                    }

                    function b(k) {
                        void 0 === k && (k = 1);
                        var l = d.slice(g, g + k);
                        g += k;
                        return l
                    }

                    for (var d = zg("Cy2FcreLJLpYXW3BXFJqldVsGMwDcBw2BGnHL5uj1TKstzse3piMo3Osz+EqDotgqs1TIoZvKtMKDaSRFztgUS8qkqZcaETgKWM54tCpTXjV5vW5OrjBpC0jF4mspUBQGd95fNSfv+vz+g+Hze33Hg8by+Yen1PP6zsdl7PQCwX9mf+f7FMb9x/Pw+v2Pp8Xy74eTwuBwTt913u4On1XW6hxOO5nIzFam00tC218S0kaeugpqST+XliLOlMoTpRQkuewUxoy4CT3efWtdFjSAAm+1BkjIhyeU4vGOf13a6U8wzNY4bGo6DIUemE7N3SBojDr7ezXahpWF022y8mma1NuTnZbq8XZZlPStejfG/CsbPhV6/bSnA==").join(""),
                             e = {}, f = {}, g = 1, h = ""; g < d.length - 1;) ("0" === b() ? c : a)();
                    return e
                }), Ol = B("ep.dec", function (a, c) {
                    if (!c || rd(a)) return [];
                    var b = zg(c), d = b[1], e = b[2], f = b.slice(3);
                    if (2 !== Ff(b[0])) return [];
                    b = Xq();
                    f = f.join("");
                    e = Ff(d + e);
                    var g = "";
                    d = "";
                    for (var h = 0; d.length < e && f[h];) g += f[h], b[g] && (d += String.fromCharCode(Ff(b[g])), g = ""), h += 1;
                    b = "";
                    for (f = 0; f < d.length;) e = d.charCodeAt(f), 128 > e ? (b += String.fromCharCode(e), f++) : 191 < e && 224 > e ? (g = d.charCodeAt(f + 1), b += String.fromCharCode((e & 31) << 6 | g & 63), f += 2) : (g = d.charCodeAt(f + 1), b += String.fromCharCode((e &
                        15) << 12 | (g & 63) << 6 | d.charCodeAt(f + 2) & 63), f += 3);
                    d = Cb(a, b);
                    return ba(d) ? d : []
                }), Ql = B("ep.ent", function (a, c, b) {
                    a = "" + Va(a, 10, 99);
                    b = "" + 100 * c + b + a;
                    if (16 < wa(b)) return "";
                    b = Ag("0", 16, b);
                    c = b.slice(0, 8);
                    b = b.slice(-8);
                    c = (+c ^ 92844).toString(35);
                    b = (+b ^ 92844).toString(35);
                    return "" + c + "z" + b
                }), ck = q(yg, Wq), dk = B("ep.ctp", function (a, c, b, d) {
                    var e = ck(a, b), f = xg(a, d);
                    wg(a, c, e, f);
                    ya("MutationObserver", a.MutationObserver) && (new a.MutationObserver(function () {
                        var g = ck(a, b), h = xg(a, d);
                        if (e !== g || f !== h) e = g, f = h, wg(a, c, e, f)
                    })).observe(a.document.body,
                        {attributes: !0, childList: !0, subtree: !0, characterData: !0})
                }), Yq = B("ep.chp", function (a, c, b, d, e) {
                    b && Be(a, c);
                    return d || e ? ia(a).D(a.document, ["click"], A(a, "ep.chp.cl", E([a, c, d, e], Pl))) : F
                }), cr = B("ep.i", function (a, c) {
                    return Wc(a) ? Nl(a, c).then(function (b) {
                        var d = b.Nd, e = d[0], f = d[1], g = d[2], h = d[3], k = d[4], l = d[5], m = d[6], p = d[7],
                            r = d[8], w = d[9], v = d[10], x = d[11], C = d[12], K = d[13], Q = d[14], Da = d[15];
                        if (!b.isEnabled) return H.resolve(F);
                        var va = td(a, e), Ac = td(a, h), Nf = td(a, m), Zq = td(a, r),
                            $q = "" + e + f + g === "" + h + k + l;
                        return new H(function (ar,
                                               br) {
                            Pc(a)(rb(br, function () {
                                va && dk(a, c, f, g, v, x, C);
                                Ac && !$q && dk(a, c, k, l, K, Q, Da);
                                ar(Yq(a, c, Nf || Zq, p, w))
                            }))
                        })
                    }) : H.resolve(F)
                }), ul = ["RTCPeerConnection", "mozRTCPeerConnection", "webkitRTCPeerConnection"],
                dr = B("cc.i", function (a, c) {
                    var b = E([a, c], Ml);
                    b = E([a, b, 300, void 0], ea);
                    la(a, c, b)
                }), ek = {}, er = B("exps.int", function (a, c) {
                    return function (b, d, e) {
                        var f, g;
                        void 0 === d && (d = F);
                        if (b && 0 < b.length) {
                            var h = ka(a, "e", c), k = Rc(c).url;
                            b = h({
                                G: ra((f = {}, f.ex = 1, f.ar = 1, f)),
                                F: (g = {}, g["page-url"] = k || R(a).href, g.exp = b, g)
                            }, c);
                            return qc(a,
                                "exps.s", b, d, e)
                        }
                    }
                }), fr = u("9-d5ve+.r%7", O), gr = B("ad", function (a, c) {
                    if (!c.Ca) {
                        var b = J(a);
                        if (!b.o("adBlockEnabled")) {
                            var d = function (m) {
                                L(m, ["2", "1"]) && b.C("adBlockEnabled", m)
                            }, e = cc(a), f = e.o("isad");
                            if (f) d(f); else {
                                var g = u("adStatus", b.C), h = function (m) {
                                    m = m ? "1" : "2";
                                    d(m);
                                    g("complete");
                                    e.C("isad", m, 1200);
                                    return m
                                }, k = ka(a, "adb", c);
                                if (!b.o("adStatus")) {
                                    g("process");
                                    var l = "metrika/a" + fr().replace(/[^a-v]+/g, "") + "t.gif";
                                    Jl(a, function () {
                                        return k({qa: {wa: l}}).then(u(!1, h))["catch"](u(!0, h))
                                    })
                                }
                            }
                        }
                    }
                }), hr = B("pr.p",
                    function (a, c) {
                        var b, d;
                        if (jf(a)) {
                            var e = ka(a, "5", c), f = ra((b = {}, b.pq = 1, b.ar = 1, b));
                            e({
                                G: f,
                                F: (d = {}, d["page-url"] = R(a).href, d["page-ref"] = n(a, "document.referrer") || "", d)
                            }, c)["catch"](A(a, "pr.p.s"))
                        }
                    }), vg = !1, ir = B("fid", function (a) {
                    var c, b = F;
                    if (!T(a.PerformanceObserver)) return b;
                    var d = J(a);
                    if (d.o("fido")) return b;
                    d.C("fido", !0);
                    var e = new a.PerformanceObserver(A(a, "fid", function (f) {
                        f = f.getEntries()[0];
                        d.C("fid", a.Math.round(100 * (f.processingStart - f.startTime)));
                        b()
                    }));
                    b = function () {
                        return e.disconnect()
                    };
                    try {
                        e.observe((c =
                            {}, c.type = "first-input", c.buffered = !0, c))
                    } catch (f) {
                    }
                    return b
                }), fk = {
                    1882689622: 1,
                    2318205080: 1,
                    3115871109: 1,
                    3604875100: 1,
                    339366994: 1,
                    2890452365: 1,
                    849340123: 1,
                    173872646: 1,
                    2343947156: 1,
                    655012937: 1,
                    3724710748: 1,
                    3364370932: 1,
                    1996539654: 1,
                    2065498185: 1,
                    823651274: 1,
                    12282461: 1,
                    1555719328: 1,
                    1417229093: 1,
                    138396985: 1
                }, jr = t(function () {
                    return N(function (a, c) {
                        var b = ac(c + "/watch.js");
                        fk[b] || (a[b] = 1);
                        return a
                    }, {}, ["mc.yandex.ru", "mc.yandex.com", "cdn.jsdelivr.net/npm/yandex-metrica-watch"])
                }), kr = B("p.sci", function (a,
                                              c) {
                    var b = J(a);
                    return b.o("scip") ? H.resolve() : la(a, c, O).then(function (d) {
                        d = n(d, "settings.ins");
                        return !b.o("scip") && d ? Hl(a, c, b) : null
                    }, A(a, "ins.cs"))
                }), lr = B("lt.p", Tb("lt.p", function (a) {
                    var c;
                    if (ya("PerformanceObserver", a.PerformanceObserver)) {
                        var b = 0, d = new a.PerformanceObserver(A(a, "lt.o", function (e) {
                            e && e.getEntries && (e = e.getEntries(), b = N(function (f, g) {
                                return f + g.duration
                            }, b, e), Ub(a).C("lt", b))
                        }));
                        try {
                            d.observe((c = {}, c.type = "longtask", c.buffered = !0, c))
                        } catch (e) {
                            return F
                        }
                        return function () {
                            return d.disconnect()
                        }
                    }
                    return F
                })),
                mr = t(q(S("performance.memory.jsHeapSizeLimit"), sa("concat", ""))),
                nr = ["availWidth", "availHeight", "availTop"],
                or = "appName vendor deviceMemory hardwareConcurrency maxTouchPoints appVersion productSub appCodeName vendorSub".split(" "),
                pr = ["webgl", "experimental-webgl"], El = [-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0],
                we = u(Ja("ccf"), gb),
                Dl = "prefers-reduced-motion;prefers-reduced-transparency;prefers-color-scheme: dark;prefers-color-scheme: light;pointer: none;pointer: coarse;pointer: fine;any-pointer: none;any-pointer: coarse;any-pointer: fine;scan: interlace;scan: progressive;color-gamut: srgb;color-gamut: p3;color-gamut: rec2020;update: fast;update: slow;update: none;grid: 0;grid: 2;hover: hover;inverted-colors: inverted;inverted-colors: none".split(";"),
                tg = "video/ogg video/mp4 video/webm audio/x-aiff audio/x-m4a audio/mpeg audio/aac audio/wav audio/ogg audio/mp4".split(" "),
                Bl = "theora vorbis 1 avc1.4D401E mp4a.40.2 vp8.0 mp4a.40.5".split(" "), gk = t(function (a) {
                    return rd(a) || !Wc(a)
                }), wl = t(oh), sg = t(Cb, kb), qr = B("phc.p", function (a, c) {
                    return gk(a) ? F : la(a, c, function (b) {
                        var d = c.id, e = jc(a, void 0, d), f = e.o("phc_settings") || "";
                        if (b = n(b, "settings.phchange")) {
                            var g = eb(a, b) || "";
                            g !== f && e.C("phc_settings", g)
                        } else f && (b = sg(a, f));
                        e = n(b, "clientId");
                        f = n(b, "orderId");
                        b = n(b, "phones") || [];
                        e && f && b.length && (f = {
                            Ma: "",
                            Ta: "",
                            cd: 0,
                            Z: {},
                            ba: [],
                            Jc: !1,
                            Kb: !0,
                            l: a,
                            tc: c
                        }, y(f, {Jc: !0}), rg(a, d, f), b = Lc(a), e = ph(a, b, 1E3), d = M(rg, null, a, d, f), e.D(d), qh(a, b))
                    })
                }), Vf = t(function (a, c) {
                    var b = J(a), d = La(a), e = [], f = E([a, c, b, d], Pn);
                    Ec(a) || Qn(a, "14.1") || e.push(E([tl, "pp", ""], f));
                    var g = Aj(a) && !ue(a, 68);
                    g || e.push(E([vl, "pu", ""], f));
                    g || d.Qb || dd(a) || (e.push(E([sl, "zzlc", "na"], f)), e.push(E([rl, "cc", ""], f)));
                    return e.length ? {
                        da: function (h, k) {
                            if (0 === b.o("isEU")) try {
                                D(lp, e)
                            } catch (l) {
                            }
                            k()
                        }, N: function (h,
                                        k) {
                            var l = h.G;
                            if (l && 0 === b.o("isEU")) try {
                                D(Ca(l), e)
                            } catch (m) {
                            }
                            k()
                        }
                    } : {}
                }, function (a, c) {
                    return P(c)
                }), rr = q(function (a) {
                    a = n(a, "navigator.plugins") || [];
                    return wa(a) ? q(Ba, lc(Boolean), op(function (c, b) {
                        return c.name > b.name ? 1 : 2
                    }), $a(Fl))(a) : ""
                }, Ic(",")), sr = function (a) {
                    return function (c) {
                        var b = hb(c);
                        if (!b) return "";
                        b = b("canvas");
                        var d = [], e = a(), f = e.Rd;
                        e = e.Ld;
                        try {
                            var g = sa("getContext", b);
                            d = z(q(O, g), e)
                        } catch (h) {
                            return ""
                        }
                        return (g = Bb(O, d)) ? f(c, {canvas: b, Ed: g}) : ""
                    }
                }(function () {
                    return {Ld: pr, Rd: nl}
                }), ll = ["name", "lang",
                    "localService", "voiceURI", "default"], tr = ["https://iframe-toloka.com/"], hk = t(function (a) {
                    return n(a, "crypto.subtle.digest") && n(a, "TextEncoder") && n(a, "FileReader") && n(a, "Blob")
                }), yk = B("fpm", function (a, c) {
                    if (!xj(a)) return F;
                    var b = P(c);
                    if (!hk(a)) return pb(a, b, "Not supported"), F;
                    var d = ua(a, c);
                    return d ? function (e) {
                        return (new H(function (f, g) {
                            return sb(e) ? ca(e).length ? f(lg(a, e).then(function (h) {
                                var k, l;
                                h && h.length && d.params((k = {}, k.__ym = (l = {}, l.fpp = h, l), k))
                            }, F)) : g(Ja("fpm.l")) : g(Ja("fpm.o"))
                        }))["catch"](A(a,
                            "fpm.en"))
                    } : F
                }), ur = Ma(/[a-z\u0430-\u044f,.]/gi), vr = B("ice", function (a, c, b) {
                    var d = ua(a, c);
                    if (d) {
                        var e = n(b, "target");
                        if (e && (c = n(e, "value"), (c = fb(c)) && !(100 <= wa(c)))) {
                            b = Ab(c);
                            var f = 0 < c.indexOf("@"), g = "tel" === n(e, "type") || !f && wa(b);
                            if (f || g) {
                                if (g) {
                                    if (ur(c)) return;
                                    g = c[0];
                                    var h = b[0];
                                    if (g !== h && "+" !== g) return;
                                    var k = c[1];
                                    if ("+" === g && k !== h) return;
                                    c = c[wa(c) - 1];
                                    g = b[wa(b) - 1];
                                    if (c !== g) return;
                                    c = b
                                }
                                b = f ? 5 : 11;
                                g = f ? 100 : 16;
                                wa(c) < b || wa(c) > g || mg(a, c).then(function (l) {
                                    var m, p, r, w = bf(a, e);
                                    d.params((m = {}, m.__ym = (p = {}, p.fi = pi((r =
                                        {}, r.a = f ? 1 : 0, r.b = w, r.c = l, r)).xa(), p), m))
                                }, A(a, "ice.s"))
                            }
                        }
                    }
                }), wr = ["text", "email", "tel"], xr = ["cc-", "name", "shipping"], yr = B("icei", function (a, c) {
                    return Wc(a) && hk(a) && Pc(a)(rb(F, E([a, c, function (b) {
                        const d = n(b, "settings.cf");
                        b = Vj(a) || n(b, "settings.eu");
                        if (d && !b) {
                            var e = ia(a);
                            d = jb("input", a.document.body);
                            D(function (f) {
                                Ne(a, f) || !L(f.type, wr) || Ra(O, z(u(f.autocomplete, nc), xr)) || e.D(f, ["blur"], E([a, c], vr))
                            }, Ba(d))
                        }
                    }], la)))
                }), zr = Tb("gic", yr), jg, Ar = B("p.ai", function (a, c) {
                    return new H(function (b) {
                        (Ec(a) || me(a)) &&
                        b(la(a, c, function (d) {
                            var e;
                            return (d = n(d, "settings.sbp")) ? ig(a, y({}, d, (e = {}, e.c = c.id, e)), 10) : F
                        }));
                        b(F)
                    })
                }), Jb = ["0", "1", "2", "3"], kc = Jb[0], le = Jb[1], Br = Jb[2],
                qe = z(q(O, sa("concat", "GDPR-ok-view-detailed-")), Jb),
                nd = X("GDPR-ok GDPR-cross GDPR-cancel 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 GDPR-settings GDPR-ok-view-default GDPR-ok-view-detailed 21 22 23".split(" "), qe, ["28", "29", "30"]),
                Cr = "3 13 14 15 16 17 28".split(" "), pe = q($a(S("ymetrikaEvent.type")), lc(bc(nd))),
                gl = "ru en et fi lt lv pl fr no sr".split(" "),
                Hb,
                fl = (Hb = {}, Hb["GDPR-ok"] = "ok", Hb["GDPR-ok-view-default"] = "ok-default", Hb["GDPR-ok-view-detailed"] = "ok-detailed", Hb["GDPR-ok-view-detailed-0"] = "ok-detailed-all", Hb["GDPR-ok-view-detailed-1"] = "ok-detailed-tech", Hb["GDPR-ok-view-detailed-2"] = "ok-detailed-tech-analytics", Hb["GDPR-ok-view-detailed-3"] = "ok-detailed-tech-other", Hb),
                pd = [], dg = q(pe, $a(mp(nd)), Ic(",")), eg = q(lc(bc(nd)), wa, Boolean), Zk = t(function (a, c) {
                    var b = c.o("gdpr");
                    return L(b, Jb) ? "-" + b : ""
                });
            "function" == typeof Promise && Promise.resolve();
            var ik =
                    t(Gd), Dr = t(function () {
                    var a = N(function (c, b) {
                        "ru" !== b && (c[b] = Zj + "." + b);
                        return c
                    }, {}, gf);
                    D(function (c) {
                        a[c] = c
                    }, ca(zj));
                    return a
                }), Er = t(function (a) {
                    var c = R(a).hostname;
                    return (a = Bb(function (b) {
                        return b[1].test(c)
                    }, Ea(zj))) && a[0]
                }), Fr = fa(function (a, c) {
                    var b = Wk(c), d = [Er(c) || Tk(c)];
                    wj(c) && d.push(b);
                    var e = Y(c);
                    b = La(c);
                    var f = b.o("synced", {});
                    d = U(function (g) {
                        if (a[g]) {
                            var h = (f[g] || 1) + 1440 < e(Za);
                            h && delete f[g];
                            return h
                        }
                    }, d);
                    b.C("synced", f);
                    return z(function (g) {
                        return {He: a[g], ne: g}
                    }, d)
                }), jk = function (a, c) {
                    return function (b,
                                     d) {
                        var e = P(d);
                        e = Dr(e);
                        var f = Fr(e);
                        return dd(b) || Yc(b) ? {} : {
                            N: function (g, h) {
                                var k = g.G, l = J(b), m = wj(b), p = zb(b);
                                k = !(k && k.o("pv"));
                                if (!m || p || k) return h();
                                m = f(b);
                                if (!m.length) return h();
                                if (l.o("startSync")) ik(b).push(h); else {
                                    l.C("startSync", !0);
                                    l = E([b, m, F], a);
                                    m = ne[0];
                                    if (!m) return h();
                                    m(b).then(l).then(h, q(Kc(h), A(b, c)))["catch"](F)
                                }
                            }
                        }
                    }
                }(function (a, c) {
                    var b = Y(a), d = J(a), e = La(a), f = Jc(a, "c"), g = tb(a, f);
                    return N(function (h, k) {
                        function l() {
                            var r = e.o("synced");
                            d.C("startSync", !1);
                            r && (r[k.ne] = p, e.C("synced", r));
                            D(ma, ik(a))
                        }

                        var m = g({O: {ea: ["sync.cook"], Ia: 1500}}, [oa.sa + "//" + k.He + "/sync_cookie_image_check"]),
                            p;
                        m.then(function () {
                            p = b(Za);
                            l()
                        })["catch"](function () {
                            p = b(Za) - 1435;
                            l()
                        });
                        m = u(m, O);
                        return h.then(m)
                    }, H.resolve(""), c)["catch"](A(a, "ctl"))
                }, "sy.c"), Gr = ["ecommerce", "user_id", "fpp"], uk = B("pa.int", function (a, c) {
                    return function () {
                        var b, d, e = ta(arguments), f = Sk(e);
                        if (!f) return null;
                        e = f.Kd;
                        var g = f.M;
                        f = f.za;
                        if (!sb(g) && !ba(g)) return null;
                        var h = ka(a, "1", c), k = Rc(c).url, l = n(g, "__ym.user_id"), m = ca(g), p = L("__ymu", m),
                            r = L("__ym", m) && l;
                        m = !Fh(c);
                        var w = g;
                        w.__ym && (w = y({}, g), w.__ym = N(function (v, x) {
                            var C = n(g, "__ym." + x);
                            C && (v[x] = C);
                            return v
                        }, {}, Gr), ca(w.__ym).length || delete w.__ym, m = !!ca(w).length);
                        l = qb(a, c, r ? "Set user id " + l : (p ? "User p" : "P") + "arams. Counter " + c.id, r ? void 0 : JSON.stringify(w));
                        h = h({
                            L: {M: g},
                            G: ra((b = {}, b.pa = 1, b.ar = 1, b)),
                            F: (d = {}, d["page-url"] = k || R(a).href, d)
                        }, c).then(m ? l : F);
                        return qc(a, "p.s", h, f, e)
                    }
                }), Ak = B("y.p", function (a, c) {
                    var b = ci(a, c);
                    if (b) {
                        var d = ld(a), e = E([a, b, c], Rk);
                        fg(a, d, function (f) {
                            f.D(["params"],
                                e)
                        });
                        b.V.D(["params"], q(S("1"), e))
                    }
                }), Lk = B("cs.init", function (a, c) {
                    var b, d = nh(a);
                    d && c.id === d && "0" === c.R && (d = (b = {}, b.lang = sq(a), b.fileId = "status", b.id = "" + c.id, b), ea(a, E([a, d], gh), 0, "cs"))
                }), Ck = B("up.int", function (a, c) {
                    return A(a, "up.c", function (b, d, e) {
                        var f, g = ua(a, c), h = Ld(a, P(c)).warn;
                        g ? sb(b) ? (b = (f = {}, f.__ymu = b, f), (f = g.params) && f(b, d || F, e)) : h("Wrong user params") : h("No counter instance found")
                    })
                }), wk = B("trigger.in", function (a, c) {
                    c.hd && Yb(a, E([a, "yacounter" + c.id + "inited"], Yn), "t.i")
                }), Dk = B("destruct.e",
                    function (a, c, b) {
                        return function () {
                            var d = J(a), e = c.id;
                            D(function (f, g) {
                                return T(f) && A(a, "dest.fr." + g, f)()
                            }, b);
                            delete d.o("counters")[P(c)];
                            delete a["yaCounter" + e]
                        }
                    }), Ek = B("suid.int", function (a, c) {
                    return function (b, d, e) {
                        if (Ka(b) || vd(a, b)) {
                            var f = ua(a, c);
                            b = ic(["__ym", "user_id", b]);
                            f.params(b, d || F, e)
                        } else fd(a, P(c)).error("Incorrect user ID")
                    }
                }), Fk = B("guid.int", function (a, c) {
                    return function (b) {
                        var d = mc(a, c);
                        b && Se(a, b, null, d);
                        return d
                    }
                }), Pk = t(function (a, c) {
                    return la(a, c, S("settings.form_goals"))
                }, kb), Hr =
                    u(!0, $f), Jk = B("s.f.i", function (a, c) {
                    var b = [];
                    ia(a).D(a, ["click"], A(a, "s.f.c", E([a, c, b], Ok)));
                    ia(a).D(a, ["submit"], A(a, "s.f.e", q(S("target"), E([a, c, b], Hr))));
                    bg(a, c, "Form goal. Counter " + c.id + ". Init.")
                }), Ir = /[\*\.\?\(\)]/g, Jr = t(function (a, c, b) {
                    try {
                        var d = b.replace("\\s", " ").replace(Ir, "");
                        Ld(a, "").warn('Function "' + d + '" has been overriden, this may cause issues with Metrika counter')
                    } catch (e) {
                    }
                }, kb), Nk = B("r.nn", function (a) {
                    Gh(a).isEnabled && Fe(a, uf, function (c) {
                        c.ub.D(function (b) {
                            Jr(a, b[1], b[0]);
                            uf.splice(100)
                        })
                    })
                }),
                sk = B("phc.h", function (a, c) {
                    return Co(a) || gk(a) ? null : la(a, c, function (b) {
                        if (!n(b, "settings.phchange")) {
                            var d = jc(a, "").o("yaHidePhones");
                            d = d ? Cb(a, d) : "";
                            (b = n(b, "settings.phhide") || d) && lh(a, c, b)
                        }
                    })
                }), Xb = J(window);
            Xb.oa("hitParam", {});
            Xb.oa("lastReferrer", window.location.href);
            Xb.oa("getCounters", pq(window));
            da.er = zc;
            (function (a) {
                try {
                    var c = Jc(a, "er"), b = Zm(a, c);
                    zi.push(function (d, e, f, g) {
                        var h, k, l, m, p;
                        .01 >= a.Math.random() || b((h = {}, h[d] = (k = {}, k[oa.bb] = (l = {}, l[e] = (m = {}, m[f] = g ? (p = {}, p[a.location.href] = g, p) :
                            a.location.href, m), l), k), h))
                    })
                } catch (d) {
                }
            })(window);
            (function () {
                ke.push(Zn);
                Ue.unshift(Ym);
                Mj.push(function (a) {
                    var c = void 0;
                    void 0 === c && (c = !0);
                    J(a).C("oo", c)
                })
            })();
            (function () {
                var a;
                ne.push(tq);
                ja.f = Na;
                y(da, (a = {}, a.f = Ij, a));
                V("f", Qb(), 1);
                V("f", Xe, 2)
            })();
            ke.push(function (a, c) {
                var b = {ma: P(c), Hb: ua(a, c), fd: Y(a), Wb: La(a)}, d = b.fd(Za);
                if (!b.Wb.Qb) {
                    var e = b.Wb.o("ymoo" + b.ma);
                    if (e && 30 > d - e) b = b.ma, delete J(a).o("counters", {})[b], gb(Ja("uws")); else la(a, c, uq(b))["catch"](A(a, "d.f"))
                }
            });
            (function () {
                var a, c, b =
                    Db([Ob]);
                y(da, (a = {}, a.s = b, a.S = b, a.u = zc, a));
                y(ja, (c = {}, c.s = tb, c.S = Na, c.u = tb, c));
                V("s");
                V("u");
                V("S", Qb(["v", "hid", "u", "vf", "rn"]), 1);
                Ua.push(B("s", zm))
            })();
            ja["8"] = tb;
            da["8"] = [Kh];
            Ua.push(function (a, c) {
                return la(a, c, function (b) {
                    var d, e = n(b, "settings.sbp");
                    return e && bh(a, b, {Aa: c, wb: "8", data: y({}, e, (d = {}, d.c = c.id, d)), Tb: "cs"})
                })
            });
            V("p", Qb(Nj), 1);
            ja.p = ah;
            da.p = Db([0, Ob]);
            Wb.push(yq);
            V("4", Qb(Nj), 1);
            ja["4"] = ah;
            da["4"] = Db([0, Ob, Sc]);
            Wb.push(Gq);
            Wd({qc: {ha: "webvisor", Ra: Boolean}});
            Ua.push(Kq);
            V("pi");
            ja.pi =
                tb;
            da.pi = zc;
            Gp("w", function (a, c) {
                return {
                    N: function (b, d) {
                        if (b.G) {
                            var e = Wj(c), f = e.status;
                            "rt" === e.wb && f && (b.G.C("rt", f), b.qa || (b.qa = {}), b.qa.de = 1 === f ? Eg(a, c) + "." : "")
                        }
                        d()
                    }
                }
            }, 2);
            (function () {
                Ua.push(Lq);
                Wd({
                    Jb: {
                        ha: "ecommerce", Ra: function (a) {
                            if (a) return !0 === a ? "dataLayer" : "" + a
                        }
                    }
                });
                ja["1"] || (ja["1"] = Na)
            })();
            hc.push(["ecommerceAdd", Mq]);
            hc.push(["ecommerceRemove", Nq]);
            hc.push(["ecommerceDetail", Oq]);
            hc.push(["ecommercePurchase", Pq]);
            Ua.push(Rq);
            Ua.push(cr);
            da["6"] = Db([0, Ob]);
            ja["6"] = tb;
            Ua.push(dr);
            nb(oc, 20);
            V("f", oc, 20);
            V("n", oc, 20);
            V("1", oc, 20);
            V("d", oc, 20);
            V("5", oc, 20);
            nb(function (a, c) {
                return {
                    N: function (b, d) {
                        var e = b.F, f = b.G;
                        !ek[c.id] && f.o("pv") && c.exp && !e.nohit && (e.exp = c.exp, ek[c.id] = !0);
                        d()
                    }
                }
            }, -99);
            hc.push(["experiments", er]);
            Eb.e = xb;
            ja.e = Na;
            da.e = wb;
            Wd({exp: {ha: "experiments"}});
            Wi.experiments = "ex";
            Ua.push(Rp);
            (function () {
                Kj.push(function () {
                    window.Ya[oa.eb].informer = Kl(window)
                })
            })();
            nb(ye, 6);
            V("1", ye, 6);
            V("adb");
            V("n", ye, 4);
            da.adb = zc;
            ja.adb = Dd;
            jd.push(gr);
            da["5"] = wb;
            ja["5"] = Na;
            Eb["5"] = U(q(rc, bc([hf,
                Od]), Rb), xb);
            Ua.push(hr);
            nb(ug, 7);
            V("n", ug, 6);
            Wb.push(ir);
            ja.d = Na;
            V("d", Qb(["hid", "u", "v", "vf"]), 1);
            da.d = zc;
            V("n", function (a, c) {
                return {
                    da: function (b, d) {
                        if (!b.L || !b.L.force) {
                            var e = .002, f = c.id === oa.wd ? 1 : .002, g, h, k, l, m;
                            void 0 === e && (e = 1);
                            void 0 === f && (f = 1);
                            var p = a.performance;
                            if (p && T(p.getEntriesByType) && (e = Math.random() > e, f = Math.random() > f, !e || !f)) {
                                p = a.performance.getEntriesByType("resource");
                                for (var r = {}, w = {}, v = {}, x = jr(a), C = 0; C < p.length; C += 1) {
                                    var K = p[C], Q = K.name.replace(/^https?:\/\//, "").split("?")[0],
                                        Da = ac(Q),
                                        va = (g = {}, g.dns = Math.round(K.domainLookupEnd - K.domainLookupStart), g.tcp = Math.round(K.connectEnd - K.connectStart), g.duration = Math.round(K.duration), g.response = Math.round(K.responseEnd - K.requestStart), g);
                                    "script" !== K.initiatorType || e || (w[Q] = y(va, (h = {}, h.name = K.name, h.decodedBodySize = K.decodedBodySize, h)));
                                    !fk[Da] && !x[Da] || r[Q] || f || (r[Q] = y(va, (k = {}, k.pages = a.location.href, k)))
                                }
                                ca(r).length && (v.timings8 = r);
                                ca(w).length && (v.scripts = w);
                                if (ca(v).length) ka(a, "d", c)({
                                    G: ra((l = {}, l.ar = "1", l.pv = "1", l)),
                                    O: {W: eb(a, v) || void 0},
                                    F: (m = {}, m["page-url"] = a.location && "" + a.location.href, m)
                                }, {id: oa.xd, R: "0"})["catch"](A(a, "r.tim.ng2"))
                            }
                        }
                        d()
                    }
                }
            }, 7);
            da.ci = Db([Ob]);
            Wb.push(kr);
            Ua.push(lr);
            Wb.push(Zp);
            Ua.push(qr);
            da.g = wb;
            da["1"] = wb;
            nb(Vf, 8);
            V("f", Vf, 3);
            V("n", Vf, 5);
            jd.push(function (a) {
                return B("fip", function (c) {
                    if (!Aj(c) || Yc(c)) {
                        var b = La(c);
                        if (!b.o("fip")) {
                            var d = q($a(q(function (e, f) {
                                return B("fip." + f, e)(c)
                            }, M(Uo, null))), Ic("-"))(a);
                            b.C("fip", d)
                        }
                    }
                })
            }([sr, rr, function (a) {
                var c = n(a, "ApplePaySession"), b = R(a).protocol;
                a = c && "https:" === b && !zb(a) ? c : void 0;
                c = "";
                if (!a) return c;
                try {
                    c = "" + a.canMakePayments();
                    b = "";
                    var d = a.supportsVersion;
                    if (T(d)) for (var e = 1; 20 >= e; e += 1) b += d.call(a, e) ? "" + e : "0";
                    return b + c
                } catch (f) {
                    return c
                }
            }, function (a) {
                a = n(a, "navigator") || {};
                return a.doNotTrack || a.msDoNotTrack || "unknown"
            }, function (a) {
                if (a = aq(a)) try {
                    for (var c = [], b = 0; b < Bj.length; b += 1) {
                        var d = a(Bj[b]);
                        c.push(d)
                    }
                    var e = c
                } catch (f) {
                    e = []
                } else e = [];
                return e ? I("x", e) : ""
            }, function (a) {
                var c = void 0;
                void 0 === c && (c = or);
                var b = n(a, "navigator") || {};
                c = z(u(b,
                    n), c);
                c = I("x", c);
                try {
                    var d = n(a, "navigator.getGamepads");
                    var e = xa(d, "getGamepads") && a.navigator.getGamepads() || []
                } catch (f) {
                    e = []
                }
                return c + "x" + wa(e)
            }, mr, function (a) {
                a = n(a, "screen") || {};
                return I("x", z(u(a, n), nr))
            }, function (a) {
                return I("x", kl(a) || [])
            }, function (a) {
                a = Al(a);
                return ba(a) ? I("x", a) : a
            }, function (a) {
                return (a = Cl(a)) ? q(pp, lc(O), $a(E(["", ["matches", "media"]], ml)), u("x", I))(a) : ""
            }]));
            nb(function (a) {
                return {
                    N: function (c, b) {
                        var d = c.G, e = La(a).o("fip");
                        e && d && (d.C("fip", e), md(c, "fip", ce(e)));
                        b()
                    }
                }
            }, 9);
            V("h",
                function (a) {
                    return {
                        da: function (c, b) {
                            var d = c.Ae;
                            ze(c) && d && J(a).C("isEU", n(d, "settings.eu"));
                            b()
                        }
                    }
                }, 3);
            jd.push(Vj);
            fh.push(function (a) {
                return L(a.replace(/\/?$/, "/"), tr)
            });
            Wb.push(zr);
            Ua.push(Ar);
            Wd({We: {ha: "yaDisableGDPR"}, Xe: {ha: "yaGDPRLang"}});
            Ue.push(function (a, c) {
                return {
                    N: function (b, d) {
                        Yk(a, b, c, d)
                    }
                }
            });
            mi.push("gdpr", "gdpr_popup");
            ff.push(function (a, c) {
                var b = ld(a);
                b = pe(b);
                if (U(bc(Cr), b).length) return !0;
                b = c(a, "gdpr");
                return L(b, [kc, Br])
            });
            si.push(function (a) {
                var c = n(a, "document.referrer");
                if (c) return a =
                    Id(a, c).host, a = ng(a), Zj + "." + (a || Iq)
            });
            nb(jk, 5);
            V("1", jk, 6);
            da.c = zc;
            ja.c = tb;
            (function (a) {
                var c = J(a);
                c.o("i") || (c.C("i", !0), ia(a).D(a, ["message"], u(a, Mm)))
            })(window);
            if (window.Ya && ie) {
                var kk = oa.eb;
                window.Ya[kk] = ie;
                qq(window);
                var Kr = window.Ya[kk];
                D(q(Uc([window]), ma), Kj);
                Kr.counters = Xb.o("getCounters")
            }
        })()
    } catch (ie) {
    }
    ;
}).call(this)
