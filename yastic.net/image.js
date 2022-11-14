/*! v:679108 b:default c:advmanager */
try {
    var cnc = function (t) {
        if (!t || !t.toString) return !1;
        const e = t.toString();
        return /\[native code\]/.test(e) || /\/\* source code not available \*\//.test(e)
    };
    cnc(Function.prototype.bind) ? Function.prototype.__pbind = Function.prototype.bind : Function.prototype.__pbind = function (t, ...e) {
        let n = this;
        return function (...r) {
            n.apply(t, [...e, ...r])
        }
    }, cnc(Array.prototype.reduce) ? Object.defineProperty && Object.defineProperty(Array.prototype, "__preduce", {
        enumerable: !1,
        iterable: !1,
        value: Array.prototype.reduce
    }) : Object.defineProperty(Array.prototype, "__preduce", {
        enumerable: !1, iterable: !1, value: function (t) {
            if (null == this) throw new TypeError("Array.prototype.reduce called on null or undefined");
            if ("function" != typeof t) throw new TypeError(t + " is not a function");
            var e, n = Object(this), r = n.length >>> 0, i = 0;
            if (arguments.length >= 2) e = arguments[1]; else {
                for (; i < r && !(i in n);) i++;
                if (i >= r) throw new TypeError("Reduce of empty array with no initial value");
                e = n[i++]
            }
            for (; i < r; i++) i in n && (e = t(e, n[i], i, n));
            return e
        }
    })
} catch (t) {
}
(self["webpackChunkyandex_pcode"] = self["webpackChunkyandex_pcode"] || []).push([[5051], {
    87130: (t, e, n) => {
        var r = n(8081), i = n(23645)(r);
        i.push([t.id, "__id__ .i3e644214{display:none !important;position:absolute !important;-webkit-box-sizing:border-box !important;box-sizing:border-box !important;z-index:10 !important}__id__ .i3e644214 [data-tooltip-arrow]{display:block !important;position:absolute !important;width:24px !important;height:8px !important}__id__ .i3e644214 [data-tooltip-arrow] svg{position:absolute !important;top:0 !important;left:0 !important}__id__ .i3e644214[data-show=true]{display:block !important}", ""]), i.locals = {tooltip: "i3e644214"}, t.exports = i
    }, 25365: (t, e, n) => {
        var r = n(8081), i = n(23645)(r);
        i.push([t.id, '__id__ .md7835ec0{cursor:pointer !important;position:absolute !important;right:4px !important;top:4px !important;z-index:10 !important}__id__ .n5a37c155.md7835ec0{display:-webkit-box !important;display:-ms-flexbox !important;display:flex !important;-webkit-box-align:center !important;-ms-flex-align:center !important;align-items:center !important;-webkit-box-pack:center !important;-ms-flex-pack:center !important;justify-content:center !important;pointer-events:auto !important;border-radius:50% !important;-webkit-user-select:none !important;-moz-user-select:none !important;-ms-user-select:none !important;user-select:none !important;-webkit-tap-highlight-color:transparent !important}__id__ .n5a37c155.md7835ec0:before{content:"" !important;position:absolute !important;top:-4px !important;left:50% !important;-webkit-transform:translateX(-50%) !important;transform:translateX(-50%) !important}__id__ .n5a37c155.md7835ec0:hover .g2b7443f0{opacity:.8 !important}__id__ .n5a37c155.md7835ec0.j351e8f7b .g2b7443f0{background-color:#fff !important;opacity:.8 !important}__id__ .n5a37c155.md7835ec0.j351e8f7b .ue79c4ebe svg{fill:#575c66 !important}__id__ .n5a37c155.md7835ec0.d4beea8e3 .g2b7443f0,__id__ .n5a37c155.md7835ec0.fbc00b281 .g2b7443f0{background:none !important}__id__ .n5a37c155.md7835ec0.d4beea8e3:hover{background-color:#e9e9e9 !important}__id__ .n5a37c155.md7835ec0.d4beea8e3 .ue79c4ebe svg{fill:#242526 !important}__id__ .n5a37c155.md7835ec0.d4beea8e3 .a428ad882{color:#242526 !important}__id__ .n5a37c155.md7835ec0.fbc00b281:hover{background-color:rgba(248,250,255,.2) !important}__id__ .n5a37c155.md7835ec0.fbc00b281 .ue79c4ebe svg{fill:#fff !important}__id__ .n5a37c155.md7835ec0.fbc00b281 .a428ad882{color:#fff !important}__id__ .n5a37c155.s90ad0f2e{width:12px !important;height:12px !important}__id__ .n5a37c155.s90ad0f2e:before{width:28px !important;height:28px !important}__id__ .n5a37c155.s90ad0f2e .ue79c4ebe{-webkit-transform:scale(.6) !important;transform:scale(.6) !important}__id__ .n5a37c155.p184ffc96{width:16px !important;height:16px !important}__id__ .n5a37c155.p184ffc96:before{width:32px !important;height:32px !important}__id__ .n5a37c155.p184ffc96 .ue79c4ebe{-webkit-transform:scale(.8) !important;transform:scale(.8) !important}__id__ .n5a37c155.oa2837ec8{width:24px !important;height:24px !important}__id__ .n5a37c155.oa2837ec8:before{width:42px !important;height:42px !important}__id__ .n5a37c155.n79eb9229{width:28px !important;height:28px !important}__id__ .n5a37c155.n79eb9229:before{width:42px !important;height:42px !important}__id__ .n5a37c155.h1c95eaf1{width:32px !important;height:32px !important}__id__ .n5a37c155.h1c95eaf1:before{width:48px !important;height:48px !important}__id__ .g2b7443f0{height:100% !important;width:100% !important;position:absolute !important;top:0 !important;left:0 !important;z-index:-1 !important;border-radius:inherit !important;-webkit-transition:opacity .15s !important;-o-transition:opacity .15s !important;transition:opacity .15s !important;-webkit-transition:background-color .5s ease-in-out !important;-o-transition:background-color .5s ease-in-out !important;transition:background-color .5s ease-in-out !important}__id__ .g2b7443f0.e777ae27f{background:rgba(26,43,77,.4) !important;color:#fff !important}__id__ .g2b7443f0.e777ae27f:hover{opacity:.5 !important}__id__ .g2b7443f0.jd69e5a9d{background:hsla(0,0%,100%,.8) !important;color:#3a3c40 !important}__id__ .g2b7443f0.jd69e5a9d:hover{opacity:.9 !important}__id__ .g2b7443f0.wea0084ba{background:none !important}__id__ .n5a37c155 .ue79c4ebe{display:-webkit-box !important;display:-ms-flexbox !important;display:flex !important;-webkit-box-align:center !important;-ms-flex-align:center !important;align-items:center !important;-webkit-box-pack:center !important;-ms-flex-pack:center !important;justify-content:center !important;pointer-events:none !important}__id__ .n5a37c155 .ue79c4ebe.e777ae27f svg{fill:#fff !important}__id__ .n5a37c155 .ue79c4ebe.e777ae27f svg,__id__ .n5a37c155 .ue79c4ebe.jd69e5a9d svg{-webkit-transition:fill .5s ease-in-out !important;-o-transition:fill .5s ease-in-out !important;transition:fill .5s ease-in-out !important}__id__ .n5a37c155 .ue79c4ebe.jd69e5a9d svg{fill:#242526 !important}__id__ .a428ad882{display:-webkit-box !important;display:-ms-flexbox !important;display:flex !important;-webkit-box-align:center !important;-ms-flex-align:center !important;align-items:center !important;-webkit-box-pack:center !important;-ms-flex-pack:center !important;justify-content:center !important;pointer-events:none !important}__id__ .a428ad882.e777ae27f{color:#fff !important}__id__ .a428ad882.jd69e5a9d{color:#242526 !important}@-webkit-keyframes r4de990d0{0%,to{opacity:0 !important;visibility:hidden !important}4%,96%{visibility:visible !important;opacity:1 !important}}@keyframes r4de990d0{0%,to{opacity:0 !important;visibility:hidden !important}4%,96%{visibility:visible !important;opacity:1 !important}}@media (hover:hover) and (pointer:fine){__id__ .qaa063971:hover .se8eb1bea{opacity:0 !important;visibility:hidden !important}__id__ .qaa063971:hover .u2f0ca79f{visibility:visible !important;opacity:1 !important}__id__ .qaa063971[data-active]:hover .u2f0ca79f{opacity:0 !important;visibility:hidden !important}__id__ .qaa063971[data-active]:hover .se8eb1bea{visibility:visible !important;opacity:1 !important}}__id__ .qaa063971.o65fb5741{right:45px !important}__id__ .qaa063971.o65fb5741 .k7ad5d02a.se8eb1bea{-webkit-transform:translateX(41px) !important;transform:translateX(41px) !important}__id__ .qaa063971.o65fb5741 .k7ad5d02a.se8eb1bea .p51f6ff53{-webkit-transform:translateX(-43px) !important;transform:translateX(-43px) !important}__id__ .qaa063971{right:36px !important;width:32px !important}__id__ .qaa063971[data-active] svg{color:#ee4f4f !important;fill:#ee4f4f !important}__id__ .qaa063971[data-active] .se8eb1bea{-webkit-animation:r4de990d0 8s linear !important;animation:r4de990d0 8s linear !important}__id__ .qaa063971 .k7ad5d02a{position:absolute !important;color:#fff !important;opacity:0 !important;visibility:hidden !important;white-space:nowrap !important;top:29px !important;right:50% !important;-webkit-transform:translateX(50%) !important;transform:translateX(50%) !important;background:#343334 !important;border-radius:6px !important;padding:0 8px !important;height:24px !important;line-height:24px !important;font-size:11px !important;-webkit-transition:all .2s !important;-o-transition:all .2s !important;transition:all .2s !important}__id__ .qaa063971 .k7ad5d02a.se8eb1bea{-webkit-transform:translateX(32px) !important;transform:translateX(32px) !important;right:0 !important}__id__ .qaa063971 .k7ad5d02a.se8eb1bea .p51f6ff53{right:0 !important;-webkit-transform:translateX(-34px) !important;transform:translateX(-34px) !important}__id__ .qaa063971 .k7ad5d02a .x1ea7ae57{font-size:11px !important}__id__ .qaa063971 .k7ad5d02a .p51f6ff53{width:28px !important;height:8px !important;position:absolute !important;top:-6px !important;right:50% !important;-webkit-transform:translateX(50%) !important;transform:translateX(50%) !important;display:-webkit-box !important;display:-ms-flexbox !important;display:flex !important;-webkit-box-align:center !important;-ms-flex-align:center !important;align-items:center !important;-webkit-box-pack:center !important;-ms-flex-pack:center !important;justify-content:center !important}__id__ .qaa063971 .k7ad5d02a .f439b8a{color:#ffd400 !important;text-decoration:none !important;text-transform:lowercase !important}__id__ .tf374bf9{margin-left:2px !important;pointer-events:auto !important;font-family:inherit !important;position:relative !important;-ms-flex-item-align:center !important;align-self:center !important}__id__ .ydcb8369c{display:-webkit-box !important;display:-ms-flexbox !important;display:flex !important;-webkit-box-align:center !important;-ms-flex-align:center !important;align-items:center !important;cursor:pointer !important;position:absolute !important;left:4px !important;top:4px !important;z-index:10 !important;font-family:YS Text Variable,Helvetica,Arial,sans-serif !important;white-space:nowrap !important;height:12px !important;line-height:normal !important;-webkit-box-sizing:border-box !important;box-sizing:border-box !important;padding:0 4px !important;color:hsla(0,0%,100%,.8) !important;border-radius:16px !important;font-size:8px !important;text-transform:uppercase !important;letter-spacing:.125em !important;pointer-events:none !important;text-decoration:none !important;-webkit-transition:color .5s ease-in-out !important;-o-transition:color .5s ease-in-out !important;transition:color .5s ease-in-out !important}__id__ .ydcb8369c.y69e33f5e{padding:0 1px 0 4px !important}__id__ .ydcb8369c>a{text-decoration:none !important;color:inherit !important}__id__ .ydcb8369c.j351e8f7b{color:rgba(87,92,102,.8) !important;background-color:hsla(0,0%,100%,.8) !important}__id__ .ydcb8369c.d4beea8e3,__id__ .ydcb8369c.jd69e5a9d{color:#3a3c40 !important}__id__ .ydcb8369c.jd69e5a9d{background:hsla(0,0%,100%,.8) !important}__id__ .ydcb8369c.e777ae27f,__id__ .ydcb8369c.fbc00b281{color:#fff !important}__id__ .ydcb8369c.e777ae27f{background:rgba(26,43,77,.4) !important}__id__ .ydcb8369c.e9017aafc,__id__ .ydcb8369c.t5b17dc0{top:auto !important;left:auto !important;right:0 !important;bottom:0 !important;background:none !important;text-shadow:none !important;font-size:7px !important;padding:0 !important;height:auto !important;opacity:.8 !important;-webkit-backdrop-filter:none !important;backdrop-filter:none !important}__id__ .ydcb8369c.wea0084ba{background:none !important}__id__ .ydcb8369c.heae337ec{max-width:calc(100% - 42px) !important}__id__ .j75cd6533{margin:0 2px !important}__id__ .f85feeeff{text-decoration:none !important;pointer-events:auto !important;color:inherit !important}', ""]), i.locals = {
            adKebabBase: "md7835ec0",
            adKebab: "n5a37c155",
            adKebabBg: "g2b7443f0",
            rtb: "j351e8f7b",
            adKebabIcon: "ue79c4ebe",
            dark: "d4beea8e3",
            light: "fbc00b281",
            collectionIcon: "a428ad882",
            adKebabBase_size_xs: "s90ad0f2e",
            adKebabBaseSizeXs: "s90ad0f2e",
            adKebabBase_size_s: "p184ffc96",
            adKebabBaseSizeS: "p184ffc96",
            adKebabBase_size_m: "oa2837ec8",
            adKebabBaseSizeM: "oa2837ec8",
            adKebabBase_size_l: "n79eb9229",
            adKebabBaseSizeL: "n79eb9229",
            adKebabBase_size_xl: "h1c95eaf1",
            adKebabBaseSizeXl: "h1c95eaf1",
            "dark-theme": "e777ae27f",
            darkTheme: "e777ae27f",
            "light-theme": "jd69e5a9d",
            lightTheme: "jd69e5a9d",
            hideBg: "wea0084ba",
            collectionBtn: "qaa063971",
            tooltipAdded: "se8eb1bea",
            tooltipNotAdded: "u2f0ca79f",
            clickableAreaExp: "o65fb5741",
            tooltip: "k7ad5d02a",
            tooltipArrow: "p51f6ff53",
            fadeinout: "r4de990d0",
            tooltipText: "x1ea7ae57",
            tooltipLink: "f439b8a",
            businessUnitLabel: "tf374bf9",
            adLabel: "ydcb8369c",
            adLabelWithBusinessUnit: "y69e33f5e",
            mini: "e9017aafc",
            small: "t5b17dc0",
            limitWidth: "heae337ec",
            pipe: "j75cd6533",
            link: "f85feeeff"
        }, t.exports = i
    }, 73643: (t, e, n) => {
        var r = n(8081), i = n(23645)(r);
        i.push([t.id, "__id__ .e552643f9{position:relative !important}__id__ .nd95c0f59,__id__ .vc753db87{background-color:#2f2f32 !important;z-index:10000 !important;border-radius:6px !important}__id__ .nd95c0f59 [data-tooltip-arrow] svg path,__id__ .vc753db87 [data-tooltip-arrow] svg path{fill:#2f2f32 !important}__id__ .nd95c0f59 .t90d7f1e5,__id__ .vc753db87 .t90d7f1e5{font-family:YS Text Variable,Helvetica,Arial,sans-serif !important;position:relative !important;color:#fff !important;font-size:13px !important;line-height:16px !important;text-transform:none !important;font-weight:400 !important;text-decoration:none !important;letter-spacing:normal !important}__id__ .nd95c0f59 .t90d7f1e5 .xb85a3272,__id__ .vc753db87 .t90d7f1e5 .xb85a3272{position:absolute !important;top:0 !important;right:-24px !important}__id__ .nd95c0f59{padding:5px 8px 7px !important}__id__ .vc753db87{padding:5px 36px 7px 8px !important}__id__ .h66965da7{display:-webkit-box !important;display:-ms-flexbox !important;display:flex !important;-webkit-box-align:center !important;-ms-flex-align:center !important;align-items:center !important;-webkit-box-pack:center !important;-ms-flex-pack:center !important;justify-content:center !important}__id__ .l43929239 svg path:first-child{fill:#737b8c !important}__id__ .x369a879b svg path:first-child{fill:#fff !important}__id__ .x369a879b svg path:last-child{fill:#23314c !important}", ""]), i.locals = {
            labelWrapper: "e552643f9",
            tooltip: "nd95c0f59",
            tooltipCross: "vc753db87",
            content: "t90d7f1e5",
            cross: "xb85a3272",
            icon: "h66965da7",
            icon__light: "l43929239",
            iconLight: "l43929239",
            icon__dark: "x369a879b",
            iconDark: "x369a879b"
        }, t.exports = i
    }, 22477: (t, e, n) => {
        var r = n(8081), i = n(23645)(r);
        i.push([t.id, "__id__ .rf25e8f1c{position:absolute !important;right:-2px !important;top:0 !important;z-index:9 !important;pointer-events:auto !important}__id__ .ca5a8a31{background:red !important}", ""]), i.locals = {
            preventClick: "rf25e8f1c",
            paintedPrevent: "ca5a8a31"
        }, t.exports = i
    }, 18775: (t, e, n) => {
        var r = n(8081), i = n(23645)(r);
        i.push([t.id, "__id__ .gdbbb69a5{overflow:hidden !important;pointer-events:all !important}__id__ .y42981ed8{overflow-x:auto !important;scrollbar-width:none !important}__id__ .y42981ed8::-webkit-scrollbar{display:none !important}__id__ .w43a971ee{-webkit-mask-image:-webkit-gradient(linear,left top,right top,color-stop(0,transparent),color-stop(1em,#000),color-stop(#000),to(transparent)) !important;-webkit-mask-image:linear-gradient(90deg,transparent 0,#000 1em,#000 calc(100% - 1em),transparent) !important;mask-image:-webkit-gradient(linear,left top,right top,color-stop(0,transparent),color-stop(1em,#000),color-stop(#000),to(transparent)) !important;mask-image:linear-gradient(90deg,transparent 0,#000 1em,#000 calc(100% - 1em),transparent) !important;-webkit-mask-size:100% !important;mask-size:100% !important;-webkit-mask-position:0 !important;mask-position:0 !important;-webkit-transition:-webkit-mask-image .3s !important;transition:-webkit-mask-image .3s !important;-o-transition:mask-image .3s !important;transition:mask-image .3s !important;transition:mask-image .3s,-webkit-mask-image .3s !important}__id__ .w43a971ee.xc212bbf9{-webkit-mask-image:-webkit-gradient(linear,left top,right top,color-stop(0,#000),color-stop(#000),to(transparent)) !important;-webkit-mask-image:linear-gradient(90deg,#000 0,#000 calc(100% - 1em),transparent) !important;mask-image:-webkit-gradient(linear,left top,right top,color-stop(0,#000),color-stop(#000),to(transparent)) !important;mask-image:linear-gradient(90deg,#000 0,#000 calc(100% - 1em),transparent) !important}__id__ .w43a971ee.rc66ca0e2{-webkit-mask-image:-webkit-gradient(linear,left top,right top,color-stop(0,transparent),color-stop(1em,#000),to(#000)) !important;-webkit-mask-image:linear-gradient(90deg,transparent 0,#000 1em,#000) !important;mask-image:-webkit-gradient(linear,left top,right top,color-stop(0,transparent),color-stop(1em,#000),to(#000)) !important;mask-image:linear-gradient(90deg,transparent 0,#000 1em,#000) !important}", ""]), i.locals = {
            container: "gdbbb69a5",
            scroller: "y42981ed8",
            container_mask: "w43a971ee",
            containerMask: "w43a971ee",
            left: "xc212bbf9",
            right: "rc66ca0e2"
        }, t.exports = i
    }, 86504: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.destroyAnimatedImageGalleryClientCode = e.initAnimatedImageGalleryClientCode = void 0;
        var r = n(17553), i = n(12542), o = n(65421), a = n(49569), s = n(98064), l = n(23089), c = n(18716),
            u = n(15137), d = n(49874), p = n(54825), f = {};
        e.initAnimatedImageGalleryClientCode = function (t, e, n) {
            var h, g, v = (0, i.getElementByData)("name", c.ANIMATED_IMAGE_GALLERY_CONTAINER_NAME, t),
                m = (0, o.getElementsByData)("name", c.ANIMATED_IMAGE_GALLERY_SLIDE_NAME, t);
            if (v && m) {
                var _ = v.dataset.animation;
                if (_) {
                    var b = (0, i.getElementByData)("new-adtune", "true", v),
                        y = (0, i.getElementByData)("label", void 0, v), I = f[e] = [];
                    (0, u.forEach)(m, (function (t) {
                        var e = "adaptiveImage-".concat((0, s.generateId)());
                        (0, a.adaptImageToContainer)(t), (0, a.initAdaptiveImageClientCode)(t, e, {
                            enableAnimation: !1,
                            lazyLoadMargin: "100%",
                            lazyLoadContainer: v
                        }), I.push((function () {
                            return (0, a.destroyAdaptiveImageClientCode)(t, e)
                        }))
                    }));
                    var A = m.length, C = 0;
                    (0, r.setAttributes)(m[C], ((h = {})[c.ANIMATED_IMAGE_GALLERY_ACTIVE_SLIDE_INDICATOR] = "", h)), (0, r.setAttributes)(m[(C + 1) % A], ((g = {})[c.ANIMATED_IMAGE_GALLERY_NEXT_SLIDE_INDICATOR] = "", g));
                    var S, E = c.animationTimings[_] || 4e3, O = function () {
                        var t, e, i;
                        try {
                            var o = m[C];
                            C = ++C % A;
                            var a = m[C], s = m[(C + 1) % A], u = o.dataset.theme, p = void 0 === u ? "dark" : u,
                                f = a.dataset.theme, h = void 0 === f ? "dark" : f;
                            p !== h && (0, l.updateKebabAndLabelTheme)(n, h, y, b), o.removeAttribute(c.ANIMATED_IMAGE_GALLERY_ACTIVE_SLIDE_INDICATOR), o.removeAttribute(c.ANIMATED_IMAGE_GALLERY_INIT_SLIDE_INDICATOR), (0, r.setAttributes)(o, ((t = {})[c.ANIMATED_IMAGE_GALLERY_PREV_SLIDE_INDICATOR] = "", t)), setTimeout((function () {
                                return o.removeAttribute(c.ANIMATED_IMAGE_GALLERY_PREV_SLIDE_INDICATOR)
                            }), E / 2), a.removeAttribute(c.ANIMATED_IMAGE_GALLERY_NEXT_SLIDE_INDICATOR), (0, r.setAttributes)(a, ((e = {})[c.ANIMATED_IMAGE_GALLERY_ACTIVE_SLIDE_INDICATOR] = "", e)), (0, r.setAttributes)(s, ((i = {})[c.ANIMATED_IMAGE_GALLERY_NEXT_SLIDE_INDICATOR] = "", i))
                        } catch (t) {
                            d.logger.error(t), S && clearInterval(S)
                        }
                    }, T = function () {
                        var t;
                        S && clearInterval(S), (0, r.setAttributes)(m[C], ((t = {})[c.ANIMATED_IMAGE_GALLERY_INIT_SLIDE_INDICATOR] = "", t)), m[(C + 1) % A].removeAttribute(c.ANIMATED_IMAGE_GALLERY_NEXT_SLIDE_INDICATOR)
                    }, R = function () {
                        S = setInterval(O, E)
                    };
                    (0, p.addEventListener)(v, "mouseenter", T), (0, p.addEventListener)(v, "mouseleave", R), (0, p.addEventListener)(document, "visibilitychange", (function () {
                        document.hidden ? T() : R()
                    })), S = setInterval(O, E), I.push((function () {
                        S && clearInterval(S)
                    }))
                }
            }
        }, e.destroyAnimatedImageGalleryClientCode = function (t) {
            var e = f[t];
            (null == e ? void 0 : e.length) && (0, u.forEach)(e, (function (t) {
                return t()
            }))
        }
    }, 18716: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.animationTimings = e.ANIMATED_IMAGE_GALLERY_NEXT_SLIDE_INDICATOR = e.ANIMATED_IMAGE_GALLERY_ACTIVE_SLIDE_INDICATOR = e.ANIMATED_IMAGE_GALLERY_PREV_SLIDE_INDICATOR = e.ANIMATED_IMAGE_GALLERY_INIT_SLIDE_INDICATOR = e.ANIMATED_IMAGE_GALLERY_SLIDE_NAME = e.ANIMATED_IMAGE_GALLERY_CONTAINER_NAME = void 0, e.ANIMATED_IMAGE_GALLERY_CONTAINER_NAME = "animatedImageGalleryContainer", e.ANIMATED_IMAGE_GALLERY_SLIDE_NAME = "animatedImageGallerySlide", e.ANIMATED_IMAGE_GALLERY_INIT_SLIDE_INDICATOR = "data-init", e.ANIMATED_IMAGE_GALLERY_PREV_SLIDE_INDICATOR = "data-prev-active", e.ANIMATED_IMAGE_GALLERY_ACTIVE_SLIDE_INDICATOR = "data-active", e.ANIMATED_IMAGE_GALLERY_NEXT_SLIDE_INDICATOR = "data-next-active", e.animationTimings = {
            opacity: 4e3,
            slowScale: 5500,
            scale: 4e3
        }
    }, 1888: (t, e, n) => {
        "use strict";
        var r, i = (r = function (t, e) {
            return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }, r(t, e)
        }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function n() {
                this.constructor = t
            }

            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", {value: !0}), e.LeadFormClientCode = void 0;
        var o = n(13058), a = n(41110), s = n(66553), l = n(87650), c = n(374), u = n(97553), d = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return i(e, t), e.prototype.init = function () {
                var t, e, n = this.props, r = n.dataSource, i = n.container.getAttribute("data-ad-id");
                if (i) {
                    var s = r.getBlockId(), d = null === (t = r.getLeadFormSrc) || void 0 === t ? void 0 : t.call(r, i),
                        p = null === (e = r.getAdByAdId) || void 0 === e ? void 0 : e.call(r, i);
                    if (p && s && d) {
                        var f = new u.LeadFormLogger({blockId: s, iframeSrc: d});
                        if ((0, o.isInIframe)(window)) f.logCanceledBy("IFRAME"); else if (r.isFloorAd()) f.logCanceledBy("FLOOR_AD"); else if (r.isFullscreen()) f.logCanceledBy("FULLSCREEN"); else {
                            var h, g = !1;
                            (0, c.loadLeadFormRenderer)().then((function (t) {
                                h = t, g = !0, f.logLoadingBundleSuccess()
                            }))["catch"]((function (t) {
                                f.logLoadingBundleError(t)
                            })), (0, a.on)(this.props.container, "click", (function (t) {
                                if (g) try {
                                    var e = t.target;
                                    if (!(e instanceof Element)) return;
                                    var n = (0, l.findParent)(e, (function (t) {
                                        return "A" === t.tagName
                                    }), !0);
                                    if (!n) return;
                                    var r = n.getAttribute("data-asset-click") || "unknown-asset";
                                    f.logClickToAsset(r), h({
                                        src: d,
                                        punyDomain: p.punyDomain,
                                        green_url_text_prefix: p.green_url_text_prefix,
                                        domain: p.domain,
                                        iconUrl: p.iconUrl,
                                        logger: f
                                    }), t.preventDefault()
                                } catch (t) {
                                    f.logShowingDialogError(t)
                                } else f.logClickBeforeBundleLoading()
                            }))
                        }
                    }
                }
            }, e
        }(s.Destroyable);
        e.LeadFormClientCode = d
    }, 83448: (t, e, n) => {
        "use strict";
        var r = function () {
            return r = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }, r.apply(this, arguments)
        }, i = function (t) {
            return t && t.__esModule ? t : {default: t}
        };
        Object.defineProperty(e, "__esModule", {value: !0}), e.Tooltip = void 0;
        var o = n(6400), a = n(89243), s = i(n(38879)), l = n(56339), c = i(n(86010)), u = n(70073);
        e.Tooltip = function (t) {
            var e, n = t.children, i = t.id, d = t.className;
            (0, a.useStyles)(s["default"]);
            var p = ((e = {})["data-".concat(l.TOOLTIP_ARROW_DATA_ATTR)] = "", e);
            return (0, o.h)("div", {
                className: (0, c["default"])(s["default"].tooltip, d),
                id: i
            }, n, (0, o.h)("div", r({}, p, {dangerouslySetInnerHTML: {__html: u}})))
        }
    }, 10901: (t, e, n) => {
        "use strict";
        var r, i = (r = function (t, e) {
            return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }, r(t, e)
        }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function n() {
                this.constructor = t
            }

            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", {value: !0}), e.TooltipClientCode = void 0;
        var o = n(17553), a = n(5989), s = n(15137), l = n(64029), c = n(12542), u = n(65421), d = n(56339),
            p = n(55045), f = n(66553), h = n(61750), g = n(66897), v = function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }

                return i(e, t), e.prototype.init = function () {
                    var t = this, e = (0, u.getElementsByData)(d.TOOLTIP_DATA_ATTR, void 0, this.props.container);
                    (null == e ? void 0 : e.length) && (0, s.forEach)(e, (function (e) {
                        var n = e.dataset[(0, g.kebabCaseToCamelCase)(d.TOOLTIP_TARGET_ID)];
                        if (n) {
                            var r = (0, a.getElementById)(n, t.props.container);
                            r && (t.props.container.appendChild(r), l.isTouchDevice ? t.addEventListener(e, "click", t.handleAction(t.props.container)) : t.addEventListener(e, "mouseenter", t.handleAction(t.props.container)))
                        }
                    }))
                }, e.prototype.handleAction = function (t) {
                    var e = this;
                    return function (n) {
                        var r;
                        n.preventDefault(), n.stopPropagation();
                        var i = n.currentTarget;
                        if (i) {
                            var s = i.dataset[(0, g.kebabCaseToCamelCase)(d.TOOLTIP_TARGET_ID)];
                            if (s) {
                                var u = parseInt(i.dataset[(0, g.kebabCaseToCamelCase)(d.TOOLTIP_MARGIN_ATTR)] || "", 10);
                                isNaN(u) && (u = h.DEFAULT_BLOCK_HORIZONTAL_INDENT);
                                var f = (0, a.getElementById)(s, t);
                                if (f) if (!("true" === f.dataset[(0, g.kebabCaseToCamelCase)(d.TOOLTIP_INCORRECT_HEIGHT)])) {
                                    var v = (0, c.getElementByData)(d.TOOLTIP_ARROW_DATA_ATTR, void 0, f),
                                        m = (0, c.getElementByData)(d.TOOLTIP_CROSS_DARA_ATTR, void 0, f);
                                    if (v) {
                                        var _ = function e() {
                                            f.dataset.show = "false", l.isTouchDevice || (f.removeEventListener("mouseleave", e), t.removeEventListener("mouseleave", e)), m && m.removeEventListener("click", e), window.removeEventListener("click", e)
                                        };
                                        if ("true" !== f.dataset.show) {
                                            var b = "top" === i.dataset[(0, g.kebabCaseToCamelCase)(d.TOOLTIP_ARROW_POSITION)] ? "top" : "bottom",
                                                y = (0, p.getRealTooltipSizeAfterCallback)(f, (function (e) {
                                                    var n = (0, p.getContainerMaxWidth)(t, u),
                                                        r = (0, p.fixTooltipWidth)(t, n, u);
                                                    e.style.maxWidth = "".concat(r, "px")
                                                })), I = {width: y.width, height: y.height},
                                                A = (0, p.getTooltipOffsets)(i, t, u, I, f, b);
                                            if (!A) return void (0, o.setAttributes)(f, (r = {}, r["data-".concat(d.TOOLTIP_INCORRECT_HEIGHT)] = "true", r));
                                            f.style.top = "".concat(A.tooltip.top, "px"), f.style.left = "".concat(A.tooltip.left, "px"), v.style.left = "".concat(A.arrow.left, "px"), v.style[A.arrowDirection] = "".concat(A.arrow.top, "px"), v.style.transform = "top" === A.arrowDirection ? "rotate(0deg)" : "rotate(180deg)", f.dataset.show = "true", e.addEventListener(f, "mouseleave", _), e.addEventListener(t, "mouseleave", _), e.addEventListener(window, "click", _), m && e.addEventListener(m, "click", _)
                                        } else _()
                                    }
                                }
                            }
                        }
                    }
                }, e
            }(f.Destroyable);
        e.TooltipClientCode = v
    }, 56339: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.TOOLTIP_OFFSET_INACCURACY = e.TOOLTIP_MIN_WIDTH = e.TOOLTIP_MAX_WIDTH = e.TOOLTIP_CROSS_DARA_ATTR = e.TOOLTIP_ARROW_DEFAULT_OFFSET = e.TOOLTIP_ARROW_HEIGHT = e.TOOLTIP_ARROW_WIDTH = e.TOOLTIP_ARROW_POSITION = e.TOOLTIP_ARROW_DATA_ATTR = e.TOOLTIP_INCORRECT_HEIGHT = e.TOOLTIP_MARGIN_ATTR = e.TOOLTIP_TARGET_ID = e.TOOLTIP_DATA_ATTR = void 0, e.TOOLTIP_DATA_ATTR = "tooltip", e.TOOLTIP_TARGET_ID = "".concat(e.TOOLTIP_DATA_ATTR, "-target-id"), e.TOOLTIP_MARGIN_ATTR = "".concat(e.TOOLTIP_DATA_ATTR, "-margin"), e.TOOLTIP_INCORRECT_HEIGHT = "".concat(e.TOOLTIP_DATA_ATTR, "-incorrect-height"), e.TOOLTIP_ARROW_DATA_ATTR = "".concat(e.TOOLTIP_DATA_ATTR, "-arrow"), e.TOOLTIP_ARROW_POSITION = "".concat(e.TOOLTIP_DATA_ATTR, "-position"), e.TOOLTIP_ARROW_WIDTH = 24, e.TOOLTIP_ARROW_HEIGHT = 8, e.TOOLTIP_ARROW_DEFAULT_OFFSET = 5, e.TOOLTIP_CROSS_DARA_ATTR = "".concat(e.TOOLTIP_DATA_ATTR, "-cross"), e.TOOLTIP_MAX_WIDTH = 300, e.TOOLTIP_MIN_WIDTH = 100, e.TOOLTIP_OFFSET_INACCURACY = 2
    }, 55045: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.getRealTooltipSizeAfterCallback = e.getTooltipOffsets = e.fixTooltipWidth = e.getContainerMaxWidth = void 0;
        var r = n(56339), i = n(55362);

        function o(t, e) {
            return t.offsetWidth - 2 * e
        }

        e.getContainerMaxWidth = o, e.fixTooltipWidth = function (t, e, n) {
            return function (t, e, n) {
                var r = o(t, n);
                return Math.min(r, e)
            }(t, (0, i.clamp)(e, r.TOOLTIP_MIN_WIDTH, r.TOOLTIP_MAX_WIDTH), n)
        };

        function a(t, e) {
            t.style.opacity = "0", t.dataset.show = "true", e && e(t);
            var n = {width: t.offsetWidth, height: t.offsetHeight};
            return t.dataset.show = "false", t.style.opacity = "1", n
        }

        e.getTooltipOffsets = function (t, e, n, i, o, s) {
            var l = s, c = t.getBoundingClientRect(), u = c.x, d = c.y, p = c.height, f = c.width,
                h = e.getBoundingClientRect(), g = h.x, v = h.y, m = h.width, _ = h.height, b = u - g, y = d - v,
                I = b - i.width / 2 + f / 2;
            I + i.width + n > m ? I = m - i.width - n - r.TOOLTIP_OFFSET_INACCURACY : I < 0 && (I = n);
            var A, C, S, E, O = b - I - r.TOOLTIP_ARROW_WIDTH / 2 + f / 2, T = -r.TOOLTIP_ARROW_HEIGHT,
                R = a(o, (function (t) {
                    t.style.maxWidth = "".concat(m - I - n, "px")
                })).height, w = y, k = r.TOOLTIP_ARROW_HEIGHT + r.TOOLTIP_ARROW_DEFAULT_OFFSET + p, P = y + k,
                N = y - k - R + p, L = (C = (A = {
                    bannerHeight: _,
                    tooltipCoordinatesY: {forTopArrowPosition: w + R + k + n, forBottomArrowPosition: w - k - R + p - n}
                }).tooltipCoordinatesY, S = A.bannerHeight, E = C.forBottomArrowPosition, {
                    isValidTopArrowPosition: C.forTopArrowPosition < S,
                    isValidBottomArrowPosition: E > 0
                });
            if ("top" === l) if (L.isValidTopArrowPosition) w = P; else {
                if (!L.isValidBottomArrowPosition) return null;
                l = "bottom", w = N
            }
            if ("bottom" === l) if (L.isValidBottomArrowPosition) w = N; else {
                if (!L.isValidTopArrowPosition) return null;
                l = "top", w = P
            }
            return {tooltip: {left: I, top: w}, arrow: {left: O, top: T}, arrowDirection: l}
        }, e.getRealTooltipSizeAfterCallback = a
    }, 55342: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.Tooltip = void 0;
        var r = n(83448);
        Object.defineProperty(e, "Tooltip", {
            enumerable: !0, get: function () {
                return r.Tooltip
            }
        })
    }, 63830: (t, e, n) => {
        "use strict";
        var r = function (t) {
            return t && t.__esModule ? t : {default: t}
        };
        Object.defineProperty(e, "__esModule", {value: !0}), e.CollectionBtn = e.Kebab = e.AdLabelContent = e.AdLabel = e.AdKebabAndLabel = void 0;
        var i = r(n(86010)), o = n(1796), a = n(6400), s = n(55598), l = n(87270), c = n(89243), u = n(21342),
            d = n(22143), p = n(9049), f = n(91081), h = n(88772), g = n(54227), v = n(12213), m = n(4674),
            _ = n(60044), b = n(38455), y = n(35461);

        function I(t) {
            var e;
            (0, c.useStyles)(b);
            var n = t.adLabelMode, r = t.theme, o = t.adLabelClassName, s = t.rowSize, l = t.bgColor,
                u = t.additionalLabel, d = t.isBusinessUnit, p = t.businessUnitLabelTheme,
                f = t.shouldRenderBusinessUnitCross, h = t.language, g = t.disableBusinessUnitTooltip,
                v = t.businessUnitLabelClassName;
            return (0, a.h)("div", {
                className: (0, i["default"])(b.adLabel, o, d && b.adLabelWithBusinessUnit, u && b.limitWidth, n && b[n], s && b[s], r && b["".concat(r, "-theme")], (e = {}, e[b.hideBg] = !l && "rtb" !== n, e)),
                "data-test": "AdKebabAndLabel--adLabelContent",
                "data-label": !0
            }, A(t), d && (0, a.h)("span", {className: b.businessUnitLabel}, (0, m.BusinessUnitLabel)({
                size: "s",
                theme: null != p ? p : r,
                language: h,
                shouldRenderCross: f,
                disableTooltip: g,
                className: v
            })))
        }

        function A(t) {
            (0, c.useStyles)(b);
            var e = t.age, n = t.isSocialAd, r = t.isBusiness, o = t.language,
                u = void 0 === o ? (0, _.usePageLanguage)() : o, h = t.additionalLabel, g = t.isSurvey;
            return n ? function (t) {
                return (0, a.h)("a", {
                    "data-test": "AdKebabAndLabel--link",
                    className: (0, i["default"])(b.link),
                    href: d.SOCIAL_AD_URL,
                    target: "_blank"
                }, (0, a.h)("div", {"data-sociallabel": "1"}, (0, s.i18nBanners)("SOCIAL_ADV_SHORT", t)))
            }(u) : (0, a.h)(a.Fragment, null, g ? function (t) {
                return (0, a.h)("a", {
                    "data-test": "AdKebabAndLabel--surveyLink",
                    className: (0, i["default"])(b.link),
                    href: p.SURVEY_AD_LABEL_URL,
                    target: "_blank"
                }, (0, s.i18nBanners)("SURVEY", t))
            }(u) : (0, l.i18nCommon)("ADVERTISEMENT", u), h && C(h, !0), r && C(function (t) {
                return (0, a.h)("a", {
                    "data-test": "AdKebabAndLabel--businessLink",
                    className: (0, i["default"])(b.link),
                    href: f.BUSINESS_AD_URL,
                    target: "_blank"
                }, (0, s.i18nBanners)("YANDEX_BUSINESS", t))
            }(u)), e && C(e))
        }

        function C(t, e) {
            void 0 === e && (e = !1);
            var n = "string" == typeof t ? 50 * t.length : void 0;
            return (0, a.h)(a.Fragment, null, (0, a.h)("span", {className: b.pipe}, "\u2022"), e ? (0, a.h)(v.Scroller, {
                autoplay: !0,
                autoplayDuration: n
            }, t) : t)
        }

        function S(t) {
            var e, n = t.mode, r = t.theme, o = t.rowSize, s = t.kebabClassName, l = t.icon, c = t.size,
                u = void 0 === c ? "m" : c, d = t.bgColor, p = t.isStickyAdtune, f = t.color;
            return (0, a.h)(a.Fragment, null, (0, a.h)(g.PreventClickKebab, null), (0, a.h)("div", {
                "data-close": !0,
                "data-new-adtune": "true",
                "data-row-size-kebab": o,
                "data-sticky-adtune": p ? "true" : "false",
                className: (0, i["default"])(b.adKebab, b.adKebabBase, n && b[n], o && b[o], s, b["adKebabBase_size_".concat(u)])
            }, (0, a.h)("div", {className: (0, i["default"])(b.adKebabBg, b["".concat(r, "-theme")], (e = {}, e[b.hideBg] = !d, e))}), l ? (0, a.h)("div", {
                className: (0, i["default"])(b.adKebabIcon, r && b["".concat(r, "-theme")]),
                dangerouslySetInnerHTML: {__html: l}
            }) : (0, a.h)("div", {className: (0, i["default"])(b.adKebabIcon, r && b["".concat(r, "-theme")])}, (0, a.h)(E, {color: f}))))
        }

        function E(t) {
            var e = t.color, n = void 0 === e ? "white" : e;
            return (0, a.h)("svg", {
                width: "8",
                height: "20",
                viewBox: "0 0 8 20",
                fill: n,
                xmlns: "http://www.w3.org/2000/svg"
            }, (0, a.h)("circle", {cx: "4", cy: "4", r: "1.5"}), (0, a.h)("circle", {
                cx: "4",
                cy: "10",
                r: "1.5"
            }), (0, a.h)("circle", {cx: "4", cy: "16", r: "1.5"}))
        }

        function O(t) {
            var e = t.mode, r = t.theme, s = t.bgColor, l = t.rowSize, c = t.kebabClassName, d = t.language,
                p = void 0 === d ? 1 : d,
                f = "exp-icon-2" === (0, h.useExperimentFlag)("POSTER_COLLECTION") ? n(93776) : n(47938);
            return (0, a.h)("div", {
                "data-collection": !0,
                className: (0, i["default"])(b.adKebab, b.adKebabBase, b.collectionBtn, e && b[e], l && b[l], c)
            }, (0, a.h)("div", {className: (0, i["default"])(b.adKebabBg, s && (0, u.applyStyles)({background: s}))}), (0, a.h)("div", {
                className: (0, i["default"])(b.collectionIcon, r && b["".concat(r, "-theme")]),
                dangerouslySetInnerHTML: {__html: f}
            }), function (t) {
                return (0, a.h)(a.Fragment, null, (0, a.h)("div", {className: (0, i["default"])(b.tooltip, b.tooltipNotAdded)}, (0, a.h)("div", {
                    className: b.tooltipArrow,
                    dangerouslySetInnerHTML: {__html: y}
                }), (0, o.i18n)("ADD_TO_COLLECTION", t)), (0, a.h)("div", {className: (0, i["default"])(b.tooltip, b.tooltipAdded)}, (0, a.h)("div", {
                    className: b.tooltipArrow,
                    dangerouslySetInnerHTML: {__html: y}
                }), (0, o.i18n)("ADDED_TO", t), "\xa0", (0, a.h)("a", {
                    className: b.tooltipLink,
                    href: "https://yandex.ru/collections?utm_source=ad",
                    target: "_blank",
                    "data-collection-link": !0
                }, (0, o.i18n)("COLLECTION", t))))
            }(p))
        }

        e.AdKebabAndLabel = function (t) {
            (0, c.useStyles)(b);
            var e = t.hideLabel, n = t.hideKebab, r = t.showCollection;
            return (0, a.h)(a.Fragment, null, !e && I(t), !n && S(t), r && O(t))
        }, e.AdLabel = I, e.AdLabelContent = A, e.Kebab = S, e.CollectionBtn = O
    }, 74573: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.AdKebabAndLabel = void 0;
        var r = n(63830);
        Object.defineProperty(e, "AdKebabAndLabel", {
            enumerable: !0, get: function () {
                return r.AdKebabAndLabel
            }
        })
    }, 49569: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.adaptImageToContainer = e.destroyAdaptiveImageClientCode = e.initAdaptiveImageClientCode = e.getSelectedImageFromContainer = e.getCroppedRectFromContainer = void 0;
        var r = n(46552), i = n(12139), o = n(85225), a = n(38715), s = n(52452), l = n(22511), c = n(35930),
            u = n(17515), d = n(39698), p = n(12542), f = n(44580), h = n(66562), g = n(49874), v = n(17553),
            m = n(98064), _ = new u.AnimationQueue({delay: 1e3}), b = {};

        function y(t) {
            if (!c.isIntersectionObserverSupported) return "";
            var e = t.lazyLoadContainer;
            if (e) {
                var n = e.dataset.observerId || (0, m.generateId)();
                return (0, v.setAttributes)(e, {"data-observer-id": n}), I(n, t)
            }
            return I("default", t)
        }

        function I(t, e) {
            if (b[t]) return t;
            var n = e.lazyLoadContainer, r = e.lazyLoadMargin;
            return b[t] = {
                watchers: 0, observer: new IntersectionObserver((function (t) {
                    for (var n = function (t) {
                        if (t.isIntersecting) {
                            var n = t.target, r = n.getAttribute("data-src");
                            (0, v.setAttributes)(n, {src: r}), E(n, e)
                        }
                    }, r = [], i = t.length - 1; i >= 0; i--) {
                        var o = t[i];
                        if (-1 !== r.indexOf(o.target)) return;
                        r.push(o.target), n(o)
                    }
                }), {root: n || null, rootMargin: r})
            }, t
        }

        var A = {};

        function C(t) {
            var e = (0, p.getElementByData)("name", "adaptiveImageContainer", t);
            if ((null == e ? void 0 : e.dataset.croppedWidth) && (null == e ? void 0 : e.dataset.croppedHeight)) return {
                width: parseInt(e.dataset.croppedWidth, 10),
                height: parseInt(e.dataset.croppedHeight, 10)
            }
        }

        function S(t) {
            var e = (0, p.getElementByData)("name", "adaptiveImageContainer", t),
                n = (0, p.getElementByData)("name", "adaptiveImageTransform", t),
                r = (0, p.getElementByData)("name", "adaptiveImage", t);
            if (!e || !n || !r) return null;
            var i = parseFloat(e.dataset.x), o = parseFloat(e.dataset.y), a = parseFloat(e.dataset.width),
                s = parseFloat(e.dataset.height);
            return {
                width: a,
                height: s,
                originWidth: a,
                originHeight: s,
                ratio: a / s,
                src: r.src,
                containerWidth: e.clientWidth,
                containerHeight: e.clientHeight,
                bgPosition: {x: i, y: o}
            }
        }

        e.getCroppedRectFromContainer = C, e.getSelectedImageFromContainer = S;

        function E(t, e) {
            var n = "IMG" === t.tagName ? t : (0, p.getElementByData)("name", "adaptiveImage", t), r = y(e), i = b[r];
            i && n && (i.observer.unobserve(n), i.watchers--, i.watchers <= 0 && (i.observer.disconnect(), delete b[r]))
        }

        function O(t, e) {
            A[e] && ((0, d.removeObserver)(e, t), A[e].onStop(o.noop), _.remove(A[e]), delete A[e])
        }

        e.initAdaptiveImageClientCode = function (t, e, n) {
            if (S(t)) {
                var o = n.enableAnimation, a = n.animationCount, s = n.lazyLoadContainer, l = n.lazyLoadMargin,
                    c = o && (a || 1 / 0);
                c && function (t, e, n) {
                    var o, a = (0, p.getElementByData)("name", "adaptiveImageContainer", t),
                        s = (0, p.getElementByData)("name", "adaptiveImageTransform", t),
                        l = (0, p.getElementByData)("name", "adaptiveImage", t);
                    if (!a || !s || !l) return;
                    var c = !1, u = 0, f = {
                        onStart: function (t) {
                            u++, o = function (t, e, n, o) {
                                var a, s = Number(t.getAttribute("data-x")), l = Number(t.getAttribute("data-y")),
                                    c = t.getBoundingClientRect(), u = c.width, d = c.height,
                                    p = n.getBoundingClientRect(), f = p.width, h = p.height, g = f > u, v = s, m = l,
                                    _ = 1;
                                a = g ? Math.acos(2 * s - 1) / Math.PI : -Math.asin(2 * l - 1) / Math.PI;
                                var b = a * Math.PI, y = 0, I = .3;
                                f * h / (u * d) < 1.3 && (y = .2);
                                var A = function (t, n, r) {
                                    void 0 === r && (r = 1), t = Math.max(0, Math.min(1, t)), n = Math.max(0, Math.min(1, n));
                                    var o = -(f - u) / f * t * 100, a = -(h - d) / h * n * 100;
                                    (0, i.setStyle)(e, {
                                        transform: "translate(".concat(o, "%, ").concat(a, "%) scale(").concat(r, ")"),
                                        "transform-origin": "".concat(100 * t, "% ").concat(100 * n, "%")
                                    })
                                };
                                return (0, r.animate)({
                                    duration: 8e3, start: 0, end: 1, onFrame: function (t) {
                                        var e = 1;
                                        t < I ? e = t / I : t > 1 - I && (e = (1 - t) / I), e = function (t) {
                                            return t < .5 ? 2 * t * t : (4 - 2 * t) * t - 1
                                        }(e), _ = e * y + 1;
                                        var n = t * Math.PI * 2 + b;
                                        g ? v = (1 + Math.cos(n)) / 2 : m = (1 + Math.sin(-n)) / 2, A(v, m, _)
                                    }, onEnd: function () {
                                        A(s, l), o()
                                    }
                                })
                            }(a, s, l, (function () {
                                f.onStop(t)
                            }))
                        }, onStop: function (t) {
                            null == o || o.stop(), c && u < n ? _.push(f) : u = 0, t()
                        }
                    };
                    O(t, e), A[e] = f, (0, d.addObserver)(e, (function (t) {
                        var e = t.inScreen;
                        c = e, e ? _.push(f) : (_.remove(f), u = 0)
                    }), t)
                }(t, e, c), function (t, e) {
                    var n = (0, p.getElementByData)("name", "adaptiveImage", t),
                        r = null == n ? void 0 : n.getAttribute("data-src");
                    if (!r || !n) return;
                    var i = b[y(e)];
                    if (i) return i.observer.observe(n), void i.watchers++;
                    n.setAttribute("src", r)
                }(t, {lazyLoadContainer: s, lazyLoadMargin: l})
            }
        }, e.destroyAdaptiveImageClientCode = function (t, e, n) {
            O(t, e), E(t, n || {})
        }, e.adaptImageToContainer = function (t) {
            var e = (0, p.getElementByData)("name", "adaptiveImageContainer", t),
                n = (0, p.getElementByData)("name", "adaptiveImageTransform", t),
                r = (0, p.getElementByData)("name", "adaptiveImage", t), i = S(t);
            if (e && n && r && i) {
                g.logger.traceLog({
                    placeWidth: e.offsetWidth,
                    placeHeight: e.offsetHeight,
                    imageWidth: i.originWidth,
                    imageHeight: i.originHeight,
                    imageSrc: i.src,
                    pixelRatio: (0, s.getPixelRatio)(),
                    bandwidth: (0, l.getDownlink)()
                }, "SSR_IMAGE_INFO", 1);
                var o = C(t), c = (0, f.getImageScaleModifier)(i, o);
                if (null == e ? void 0 : e.dataset.hasOwnProperty("needsAdapt")) {
                    var u = (0, h.getImageStyles)(i, c);
                    (0, a.forOwn)(u, (function (t, e) {
                        n.style[e] = t
                    }))
                }
            }
        }
    }, 66562: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.getImageStyles = void 0;
        var r = n(55362), i = function (t) {
            return Number(t.toFixed(8))
        };

        function o(t, e, n) {
            return function (t, e, n, r) {
                void 0 === r && (r = !0);
                r ? e = t / n : t = e * n;
                return {width: t, height: e}
            }(t, e, n, n <= t / e)
        }

        e.getImageStyles = function (t, e) {
            var n = t.originWidth, a = t.containerWidth, s = t.containerHeight, l = t.bgPosition, c = t.ratio,
                u = Math.max(0, Math.min(1, l.x)), d = Math.max(0, Math.min(1, l.y)), p = o(a, s, c),
                f = e ? n * e : p.width, h = f / c, g = .5 * a - u * f, v = .5 * s - d * h,
                m = e ? g : (0, r.clamp)(g, a - f, 0), _ = e ? v : (0, r.clamp)(v, s - h, 0), b = i(m / f * 100),
                y = i(_ / h * 100), I = i(f / a * 100), A = i(I / c);
            return {
                transform: "translate(".concat(b, "%, ").concat(y, "%)"),
                width: "".concat(I, "%"),
                paddingTop: "".concat(A, "%")
            }
        }
    }, 44580: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.getImageScaleModifier = e.getCroppedRect = void 0;
        var r = n(98710);

        function i(t) {
            var e = t.options || {};
            if ((0, r.shouldContainImage)(t)) return {
                width: Number(e["smart-center"].w),
                height: Number(e["smart-center"].h)
            }
        }

        e.getCroppedRect = i, e.getImageScaleModifier = function (t, e) {
            if (void 0 === e && (e = i(t)), !e) return null;
            var n = t.containerWidth, r = t.containerHeight, o = n / r,
                a = e.width / e.height >= o ? n / e.width : r / e.height;
            return Math.min(a, 1)
        }
    }, 86394: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.DATA_BACKPACK = void 0, e.DATA_BACKPACK = "backpack"
    }, 52017: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.initBackpackLogger = void 0;
        var r = n(15137), i = n(12542), o = n(65421), a = n(64029), s = n(49874), l = n(86394);
        e.initBackpackLogger = function (t, e, n) {
            if (Boolean((0, i.getElementByData)("name", "adaptiveConstructorAd", t))) {
                var u = (0, o.getElementsByData)(l.DATA_BACKPACK, void 0, t);
                u && (0, r.forEach)(u, (function (r) {
                    var i, o, u, d = Number(r.getAttribute("data-".concat(l.DATA_BACKPACK)));
                    if (d) {
                        var p = r.dataset.blockName;
                        if ("button" !== p) {
                            var f = parseFloat(window.getComputedStyle(r).marginTop);
                            f = isNaN(f) ? 0 : f;
                            var h = r.offsetHeight + f, g = h - d;
                            if (g > 2) {
                                var v = c(t);
                                if (!v) return;
                                var m = (null === (i = e.getDesignId) || void 0 === i ? void 0 : i.call(e)) || null,
                                    _ = null === (o = e.getFreeAds().find((function (t) {
                                        return t.adId === v
                                    }))) || void 0 === o ? void 0 : o.pCodeInfo,
                                    b = null === (u = e.getBannerSize) || void 0 === u ? void 0 : u.call(e, v, !0),
                                    y = "-";
                                if (b) {
                                    var I = b.size, A = I.width, C = I.height;
                                    y = "".concat(A, "X").concat(C)
                                }
                                var S = e.getSettings() || {}, E = S.blockId, O = S.limit, T = S.fontFamily,
                                    R = window.location.href, w = window.navigator.userAgent, k = {
                                        blockId: E,
                                        limit: O,
                                        designId: m,
                                        pcodeInfo: _,
                                        size: y,
                                        bannerId: v,
                                        backpackData: d,
                                        elHeight: h,
                                        diff: g,
                                        blockName: p,
                                        url: R,
                                        fontFamily: T,
                                        isTouchDevice: a.isTouchDevice,
                                        userAgent: w
                                    };
                                s.logger.traceLog(k, "BACKPACK_LOG", n)
                            }
                        }
                    }
                }))
            }
        };
        var c = function (t) {
            var e = t.closest("[data-ad-id]");
            if (e) return e.dataset.adId
        }
    }, 38310: (t, e, n) => {
        "use strict";
        var r, i = (r = function (t, e) {
            return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }, r(t, e)
        }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function n() {
                this.constructor = t
            }

            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }), o = function () {
            return o = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }, o.apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {value: !0}), e.destroyBannerShoppingButtonClientCode = e.initBannerShoppingButtonClientCode = e.BannerShoppingButtonController = void 0;
        var a = n(17553), s = n(12542), l = n(39698), c = n(66553), u = n(22184), d = n(49874), p = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return i(e, t), e.prototype.init = function () {
                var e = this;
                t.prototype.init.call(this);
                var n = this.props, r = n.container, i = n.getDataSource;
                this.animated = !1;
                var o = r.getAttribute("id");
                o && (r.dataset.hasOwnProperty("disabled") || this.addEventListener(r, "click", (function (t) {
                    t.preventDefault(), t.stopPropagation(), d.logger.traceLog({}, "BANNER_SHOPPING_BUTTON_CLICK", 100), (0, u.showBannerShopping)({getDataSource: i}).then((function (t) {
                        d.logger.traceLog({}, "BANNER_SHOPPING_DIALOG_SHOWN", 100), e.doOnDestroy(t)
                    }))
                })), r.dataset.hasOwnProperty("animated") && ((0, l.addObserver)(o, (function (t) {
                    var n = t.inScreen;
                    !e.animated && n && (e.animated = !0, (0, a.setAttributes)(r, {"data-animated": n ? "running" : null}))
                }), r.parentElement), this.doOnDestroy((function () {
                    return (0, l.removeObserver)(o, r.parentElement)
                }))))
            }, e
        }(c.Destroyable);
        e.BannerShoppingButtonController = p;
        var f = {};
        e.initBannerShoppingButtonClientCode = function (t, e, n) {
            var r = (0, s.getElementByData)("name", "shopping-button", t);
            r && (f[e] = new p(o({container: r}, n)))
        }, e.destroyBannerShoppingButtonClientCode = function (t, e) {
            var n;
            null === (n = f[e]) || void 0 === n || n.destroy(), f[e] = void 0
        }
    }, 36926: (t, e, n) => {
        "use strict";
        e.ut = e.OQ = e.Z7 = void 0;
        var r = n(15137), i = n(41110), o = n(12251), a = n(65421), s = n(49874);

        function l(t) {
            var e = t.getAttribute("data-close-animated-class"), n = t.getAttribute("data-closed-class");
            e && n && (t.classList.add(e), setTimeout((function () {
                t.classList.add(n)
            }), 1e3))
        }

        e.Z7 = function (t) {
            var e = ((0, a.getElementsByData)("name", "surveyClose", t) || [])[0],
                n = t.getAttribute("data-surveyId") || "";
            if (e) var c = (0, i.on)(e, "click", (function () {
                s.logger.traceLog({type: "closeSurvey", surveyId: n}, "BANNER_SURVEY", 100), l(t), (0, i.un)(c)
            }));
            var u = (0, a.getElementsByData)("name", "surveyAnswer", t) || [];
            (0, r.forEach)(u, (function (e) {
                var r = (0, i.on)(e, "click", (function () {
                    var a = e.getAttribute("data-answerId") || "";
                    s.logger.traceLog({type: "selectAnswer", answerId: a, surveyId: n}, "BANNER_SURVEY", 100);
                    var c = t.getAttribute("data-done-class");
                    c && (t.classList.add(c), o.protect.setTimeout((function () {
                        l(t)
                    }), 2500)), (0, i.un)(r)
                }))
            }))
        };
        e.OQ = function (t) {
            if (t.length) {
                var e = t[t.length - 1], n = ((0, a.getElementsByData)("name", "bannerSurvey", e.target) || [])[0];
                if (n) {
                    var r = n.getAttribute("data-should-visible-after-return"),
                        i = n.getAttribute("data-surveyId") || "", o = n.getAttribute("data-visible-class");
                    null === r && s.logger.traceLog({
                        type: "showSurvey",
                        surveyId: i
                    }, "BANNER_SURVEY", 100), o && n.classList.add(o)
                }
            }
        }, e.ut = {root: null, threshold: .5}
    }, 13959: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.getBusinessUnitLabelIcon = void 0;
        var r = {m: n(58032), s: n(54304)};
        e.getBusinessUnitLabelIcon = function (t) {
            return t ? r[t] : void 0
        }
    }, 4674: (t, e, n) => {
        "use strict";
        var r = function () {
            return r = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }, r.apply(this, arguments)
        }, i = function (t) {
            return t && t.__esModule ? t : {default: t}
        };
        Object.defineProperty(e, "__esModule", {value: !0}), e.BusinessUnitLabel = void 0;
        var o = n(6400), a = n(55342), s = n(98064), l = n(56339), c = n(13959), u = i(n(86010)), d = n(89243),
            p = n(87270), f = n(60044), h = n(74729), g = n(91470);
        e.BusinessUnitLabel = function (t) {
            var e, n, i;
            (0, d.useStyles)(h);
            var v = t.size, m = void 0 === v ? "m" : v, _ = t.theme, b = void 0 === _ ? "default" : _, y = t.className,
                I = t.language, A = void 0 === I ? (0, f.usePageLanguage)() : I, C = t.shouldRenderCross,
                S = void 0 !== C && C, E = t.disableTooltip, O = void 0 !== E && E, T = (0, s.generateId)(),
                R = ((e = {})["data-".concat(l.TOOLTIP_DATA_ATTR)] = "", e["data-".concat(l.TOOLTIP_TARGET_ID)] = T, e["data-".concat(l.TOOLTIP_ARROW_POSITION)] = "top", e),
                w = ((n = {})["data-".concat(l.TOOLTIP_CROSS_DARA_ATTR)] = "", n);
            return (0, o.h)("div", {className: (0, u["default"])(y, h.labelWrapper, h["labelWrapper__".concat(b)])}, (0, o.h)("div", r({className: (0, u["default"])(h.icon, h["icon__".concat(b)])}, R, {dangerouslySetInnerHTML: {__html: null !== (i = (0, c.getBusinessUnitLabelIcon)(m)) && void 0 !== i ? i : ""}})), !O && (0, o.h)(a.Tooltip, {
                id: T,
                className: S ? h.tooltipCross : h.tooltip
            }, (0, o.h)("div", {className: h.content}, (0, p.i18nCommon)("BU_LABEL_TOOLTIP_TEXT", A), S && (0, o.h)("div", r({}, w, {
                className: h.cross,
                dangerouslySetInnerHTML: {__html: g}
            })))))
        }
    }, 76161: (t, e, n) => {
        "use strict";
        var r, i = (r = function (t, e) {
            return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }, r(t, e)
        }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function n() {
                this.constructor = t
            }

            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", {value: !0}), e.BaseCarouselController = void 0;
        var o = n(66553), a = n(46552), s = n(17787), l = n(36191), c = n(72262), u = n(47281), d = n(19399),
            p = n(12251), f = n(12542), h = n(65421), g = n(87650), v = n(69318), m = n(94320), _ = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.shouldIgnoreScroll = !1, e.performedMouseScroll = !1, e.slideAnimation = null, e.autoScrollDirection = v.CarouselDirection.NEXT, e.isSmoothScrollSupports = (0, l.testProperty)("scroll-behavior: smooth"), e.onScrollStop = (0, s.debounce)((function () {
                        e.shouldIgnoreScroll = !1
                    }), 150), e
                }

                return i(e, t), e.prototype.init = function () {
                    var e = this;
                    t.prototype.init.call(this);
                    var n = this.props, r = n.container, i = n.slideElements, o = n.allowedMouseScroll,
                        a = Boolean(null == i ? void 0 : i.length);
                    this.trackElement = (0, f.getElementByData)("name", v.CAROUSEL_TRACK_NAME, r), this.slideElements = a ? i : this.getSlideElements(), this.currentIndex = this.getCurrentIndex(), this.addEventListener(this.trackElement, "scroll", this.onTrackScroll, {passive: !0}), o && !c.isTouchScreenDevice && this.initDragScroll();
                    var s = (0, f.getElementByData)("name", v.CAROUSEL_PREV_BUTTON_NAME, r),
                        l = (0, f.getElementByData)("name", v.CAROUSEL_NEXT_BUTTON_NAME, r);
                    s && (this.prevButtonElement = s, this.addEventListener(s, "click", (function (t) {
                        t.preventDefault(), e.slidePrev()
                    }))), l && (this.nextButtonElement = l, this.addEventListener(l, "click", (function (t) {
                        t.preventDefault(), e.slideNext()
                    })))
                }, Object.defineProperty(e.prototype, "performedScrollWithMouse", {
                    get: function () {
                        return !!this.performedMouseScroll && (this.performedMouseScroll = !1, !0)
                    }, enumerable: !1, configurable: !0
                }), e.prototype.getSlideElements = function () {
                    var t = this, e = this.props.container,
                        n = (0, h.getElementsByData)("name", v.CAROUSEL_SLIDE_NAME, e) || [];
                    return (0, m.filter)(n, (function (e) {
                        var n = (0, g.findParent)(e, (function (t) {
                            return "carousel-track" === t.dataset.name
                        }), !1);
                        return t.trackElement === n
                    }))
                }, e.prototype.initDragScroll = function () {
                    var t = this, e = this.props.dragMoveMultiplier, n = void 0 === e ? 1 : e, r = !1, i = 0, o = 0,
                        a = (0, p.protect)("carouselCtr:dragEnd", (function () {
                            r = !1;
                            var e = t.getCurrentIndex();
                            d.isFirefox ? t.trackElement.dataset.mouse = "free" : u.isSafari || (t.trackElement.dataset.mouse = "smooth"), t.scrollTo(e), setTimeout((0, p.protect)("carouselCtr:dragEnd:t-out", (function () {
                                t.trackElement.dataset.mouse = "free", t.performedMouseScroll = !1
                            })), 200)
                        }));
                    this.addEventListener(this.trackElement, "mousedown", (0, p.protect)("carouselCtr:mdown", (function (e) {
                        o = 0, r = !0, i = t.props.orientation === v.CarouselOrientation.VERTICAL ? e.screenY : e.screenX, e.preventDefault()
                    }))), this.addEventListener(this.trackElement, "mouseup", a), this.addEventListener(this.trackElement, "mouseleave", a), this.addEventListener(this.trackElement, "mousemove", (0, p.protect)("carouselCtr:mmove", (function (e) {
                        if (r) {
                            t.trackElement.dataset.mouse = "captured", e.preventDefault(), e.stopPropagation();
                            var a = t.props.orientation === v.CarouselOrientation.VERTICAL ? e.screenY : e.screenX,
                                s = i - a;
                            t.setTrackPosition(t.getTrackPosition() + s * n), o += s, i = a, Math.abs(o) > 10 && (t.performedMouseScroll = !0)
                        }
                    })))
                }, e.prototype.destroy = function () {
                    var e;
                    t.prototype.destroy.call(this), this.stopAutoScroll(), null === (e = this.slideAnimation) || void 0 === e || e.stop()
                }, e.prototype.startAutoScroll = function (t) {
                    var e = this;
                    !this.slideElements || this.slideElements.length < 2 || !this.props.autoScrollDelay || (clearTimeout(this.autoScrollTimeout), this.autoScrollTimeout = setTimeout((function () {
                        e.autoScrollTimeout && e.slideElements && (e.autoScrollDirection === v.CarouselDirection.NEXT ? e.slideNext() : e.autoScrollDirection === v.CarouselDirection.PREV && e.slidePrev(), e.startAutoScroll())
                    }), t || this.props.autoScrollDelay))
                }, e.prototype.stopAutoScroll = function () {
                    clearTimeout(this.autoScrollTimeout), this.autoScrollTimeout = void 0
                }, e.prototype.onTrackScroll = function () {
                    if (!this.shouldIgnoreScroll) {
                        var t = this.getCurrentIndex();
                        this.updateAutoScrollDirection(t), this.currentIndex !== t && (this.currentIndex = t, this.props.onPageShown(t))
                    }
                    this.updateCurrent(), this.onScrollStop()
                }, e.prototype.updateCurrent = function () {
                    if (this.props.onScroll) {
                        var t = this.getTrackPosition();
                        this.props.onScroll(t)
                    }
                }, e.prototype.slidePrev = function () {
                    var t = this.getCurrentIndex();
                    this.scrollTo(t - 1)
                }, e.prototype.slideNext = function () {
                    var t = this.getCurrentIndex();
                    this.scrollTo(t + 1)
                }, e.prototype.updateAutoScrollDirection = function (t) {
                    if (this.slideElements[t]) {
                        var e = 0 === t, n = t === this.slideElements.length - 1;
                        (e || t > this.currentIndex && !n) && (this.autoScrollDirection = v.CarouselDirection.NEXT), (n || t < this.currentIndex && !e) && (this.autoScrollDirection = v.CarouselDirection.PREV)
                    }
                }, e.prototype.scrollTo = function (t) {
                    var e, n = this, r = this.props, i = r.onPageShown, o = r.onAnimationStart, s = r.allowedPreciseScroll,
                        l = this.slideElements[t];
                    if (!this.slideAnimation && l) {
                        var c = this.trackElement.getBoundingClientRect(), u = c.width, d = c.height,
                            p = l.getBoundingClientRect(), f = p.width, h = p.height,
                            g = s ? [.5 * (u - f), .5 * (d - h)] : [0, 0];
                        this.updateAutoScrollDirection(t);
                        var v = this.getUpdatedTrackPosition(l, g), m = this.getTrackPosition();
                        if (!(Math.abs(m - v) <= 1)) {
                            if (!this.props.disableSnapScroll && this.isSmoothScrollSupports) return this.setTrackPosition(v), void (this.currentIndex !== t && (this.currentIndex = t, i(t)));
                            o && this.currentIndex !== t && o(this.currentIndex, t), this.slideAnimation = (0, a.animate)({
                                easing: this.props.easing,
                                duration: null !== (e = this.props.scrollDuration) && void 0 !== e ? e : 200,
                                start: m,
                                end: v,
                                onFrame: function (t) {
                                    return n.setTrackPosition(t)
                                },
                                onEnd: function () {
                                    n.setTrackPosition(v), n.slideAnimation = null, n.currentIndex !== t && (n.currentIndex = t, i(t))
                                }
                            })
                        }
                    }
                }, e.prototype.getUpdatedTrackPosition = function (t, e) {
                    return this.props.orientation === v.CarouselOrientation.VERTICAL ? t.offsetTop - e[1] : t.offsetLeft - e[0]
                }, e.prototype.getTrackPosition = function () {
                    return this.props.orientation === v.CarouselOrientation.HORIZONTAL ? this.trackElement.scrollLeft : this.props.orientation === v.CarouselOrientation.VERTICAL ? this.trackElement.scrollTop : 0
                }, e.prototype.setTrackPosition = function (t) {
                    this.shouldIgnoreScroll = !0, this.props.orientation === v.CarouselOrientation.HORIZONTAL && (this.trackElement.scrollLeft = t), this.props.orientation === v.CarouselOrientation.VERTICAL && (this.trackElement.scrollTop = t)
                }, e
            }(o.Destroyable);
        e.BaseCarouselController = _
    }, 60546: (t, e, n) => {
        "use strict";
        var r, i = (r = function (t, e) {
            return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }, r(t, e)
        }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function n() {
                this.constructor = t
            }

            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", {value: !0}), e.CarouselIndicatorController = void 0;
        var o = n(15137), a = n(66553), s = n(65421), l = n(69318), c = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return i(e, t), e.prototype.init = function () {
                var e = this, n = this.props, r = n.container, i = n.onChangePage;
                t.prototype.init.call(this), this.indicators = (0, s.getElementsByData)("name", l.CAROUSEL_INDICATOR_PAGE_NAME, r) || [], (0, o.forEach)(this.indicators, (function (t, n) {
                    e.addEventListener(t, "click", (function () {
                        i(n), e.setCurrentPage(n)
                    }))
                })), this.setCurrentPage(this.props.initialIndex || 0)
            }, e.prototype.setCurrentPage = function (t) {
                var e = Math.min(this.indicators.length - 5, Math.max(0, t - 1)), n = e + 5;
                (0, o.forEach)(this.indicators, (function (r, i) {
                    r.removeAttribute("data-variant"), i !== e - 1 && i !== n || r.setAttribute("data-variant", "small"), i >= e && i < n && r.setAttribute("data-variant", "large"), i === t && r.setAttribute("data-variant", "active")
                }))
            }, e
        }(a.Destroyable);
        e.CarouselIndicatorController = c
    }, 48754: (t, e, n) => {
        "use strict";
        var r, i = (r = function (t, e) {
            return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }, r(t, e)
        }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function n() {
                this.constructor = t
            }

            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", {value: !0}), e.CenterCarouselController = void 0;
        var o = n(30913), a = n(15137), s = n(6485), l = n(76161), c = n(69318), u = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return i(e, t), e.prototype.getCurrentIndex = function () {
                var t = this.props.orientation, e = this.getTrackPosition(),
                    n = e + .5 * (t === c.CarouselOrientation.HORIZONTAL ? this.trackElement.parentElement.offsetWidth : this.trackElement.parentElement.offsetHeight);
                return 0 === e ? 0 : (0, o.findIndex)(this.slideElements, (function (e) {
                    var r = e.offsetLeft, i = e.offsetWidth, o = e.offsetTop, a = e.offsetHeight;
                    return (0, s.isInRange)(n, t === c.CarouselOrientation.HORIZONTAL ? r : o, t === c.CarouselOrientation.HORIZONTAL ? r + i : o + a)
                }))
            }, e.prototype.slidePrev = function () {
                var t = this.props.orientation, e = this.getTrackPosition(),
                    n = (0, o.findIndex)(this.slideElements, (function (n) {
                        var r = n.offsetLeft, i = n.offsetWidth, o = n.offsetTop, a = n.offsetHeight;
                        return t === c.CarouselOrientation.HORIZONTAL ? (0, s.isInRange)(e, r, r + i) : (0, s.isInRange)(e, o, o + a)
                    }));
                this.scrollTo(n)
            }, e.prototype.slideNext = function () {
                var t = this.props.orientation, e = this.getTrackPosition(),
                    n = t === c.CarouselOrientation.HORIZONTAL ? this.trackElement.parentElement.offsetWidth : this.trackElement.parentElement.offsetHeight,
                    r = (0, o.findIndex)(this.slideElements, (function (r) {
                        var i = e + n;
                        return t === c.CarouselOrientation.HORIZONTAL ? r.offsetLeft > i || r.offsetLeft < i && r.offsetLeft + r.offsetWidth > i : r.offsetTop > i || r.offsetTop < i && r.offsetTop + r.offsetHeight > i
                    }));
                this.scrollTo(r)
            }, e.prototype.getUpdatedTrackPosition = function (t, e) {
                var n = this.props.orientation, r = this.trackElement.getBoundingClientRect(), i = r.width,
                    o = r.height;
                return n === c.CarouselOrientation.VERTICAL ? t.offsetTop - (o - t.offsetHeight) / 2 - e[1] : t.offsetLeft - (i - t.offsetWidth) / 2 - e[0]
            }, e.prototype.calcOffsetAndLimit = function (t) {
                var e = this.props.orientation, n = -1, r = 0, i = this.trackElement.parentElement, o = i.offsetWidth,
                    s = i.offsetHeight, l = this.slideElements[t],
                    u = e === c.CarouselOrientation.HORIZONTAL ? o - l.offsetWidth : s - l.offsetHeight,
                    d = this.slideElements[this.slideElements.length - 1],
                    p = e === c.CarouselOrientation.HORIZONTAL ? d.offsetLeft + d.offsetWidth : d.offsetTop + d.offsetHeight,
                    f = (e === c.CarouselOrientation.HORIZONTAL ? l.offsetLeft : l.offsetTop) - u / 2,
                    h = (e === c.CarouselOrientation.HORIZONTAL ? l.offsetLeft + l.offsetWidth : l.offsetTop + l.offsetHeight) + u / 2;
                return f <= 0 && (f = 0, h = e === c.CarouselOrientation.HORIZONTAL ? o : s), h >= p && (h = p, f = p - (e === c.CarouselOrientation.HORIZONTAL ? o : s)), (0, a.forEach)(this.slideElements, (function (t, i) {
                    var o = t.offsetLeft, a = t.offsetWidth, s = t.offsetTop, l = t.offsetHeight,
                        u = e === c.CarouselOrientation.HORIZONTAL ? a : l,
                        d = e === c.CarouselOrientation.HORIZONTAL ? o : s, p = d + u,
                        g = Math.min(p, h) - Math.max(d, f);
                    (g > 0 ? g / u : 0) > .7 && (r += 1, -1 === n && (n = i))
                })), {offset: -1 === n ? 0 : n, limit: r}
            }, e
        }(l.BaseCarouselController);
        e.CenterCarouselController = u
    }, 27474: (t, e, n) => {
        "use strict";
        var r, i = (r = function (t, e) {
            return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }, r(t, e)
        }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function n() {
                this.constructor = t
            }

            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", {value: !0}), e.CarouselController = void 0;
        var o = n(30913), a = n(76161), s = n(69318), l = n(6485), c = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return i(e, t), e.prototype.getCurrentIndex = function () {
                var t = this.props.orientation, e = this.getTrackPosition();
                if (t === s.CarouselOrientation.HORIZONTAL) {
                    var n = this.trackElement.parentElement.offsetWidth;
                    return (0, o.findIndex)(this.slideElements, (function (t) {
                        return (0, l.isInRange)(e + n / 2 - t.offsetLeft, 0, t.offsetWidth)
                    }))
                }
                if (t === s.CarouselOrientation.VERTICAL) {
                    var r = this.trackElement.parentElement.offsetHeight;
                    return (0, o.findIndex)(this.slideElements, (function (t) {
                        return (0, l.isInRange)(e + r / 2 - t.offsetTop, 0, t.offsetHeight)
                    }))
                }
                return -1
            }, e
        }(a.BaseCarouselController);
        e.CarouselController = c
    }, 69318: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.CarouselDirection = e.CarouselOrientation = e.CAROUSEL_INDICATOR_PAGE_NAME = e.CAROUSEL_SLIDE_NAME = e.CAROUSEL_INNER_TRACK_NAME = e.CAROUSEL_TRACK_NAME = e.CAROUSEL_NEXT_BUTTON_NAME = e.CAROUSEL_PREV_BUTTON_NAME = void 0, e.CAROUSEL_PREV_BUTTON_NAME = "carousel-prev-button", e.CAROUSEL_NEXT_BUTTON_NAME = "carousel-next-button", e.CAROUSEL_TRACK_NAME = "carousel-track", e.CAROUSEL_INNER_TRACK_NAME = "carousel-inner-track", e.CAROUSEL_SLIDE_NAME = "carousel-slide", e.CAROUSEL_INDICATOR_PAGE_NAME = "carousel-indicator-page", function (t) {
            t["VERTICAL"] = "vertical", t["HORIZONTAL"] = "horizontal"
        }(e.CarouselOrientation || (e.CarouselOrientation = {})), function (t) {
            t["NEXT"] = "next", t["PREV"] = "prev"
        }(e.CarouselDirection || (e.CarouselDirection = {}))
    }, 61788: (t, e, n) => {
        "use strict";
        var r, i = (r = function (t, e) {
            return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }, r(t, e)
        }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function n() {
                this.constructor = t
            }

            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", {value: !0}), e.destroyImageGalleryClientCode = e.initImageGalleryClientCode = e.ImageGalleryController = void 0;
        var o = n(66553), a = n(94532), s = n(15137), l = n(17553), c = n(17787), u = n(12542), d = n(65421),
            p = n(39698), f = n(23089), h = n(69318), g = n(27474), v = n(91900), m = n(49569), _ = n(98064),
            b = n(49874), y = n(86504), I = function (t) {
                function e(e) {
                    var n = t.call(this, e) || this;
                    return n.disableFalseClickProtection = (0, c.debounce)((function () {
                        n.props.container.removeAttribute("data-click-protection")
                    }), 500), n.onSlideDidChanged = (0, a.once)((function () {
                        b.logger.traceLog({}, "MULTIBANNER_SLIDE_CHANGED", 100)
                    })), n
                }

                return i(e, t), e.prototype.init = function () {
                    var e, n = this;
                    t.prototype.init.call(this);
                    var r = this.props.container;
                    r.setAttribute("data-initialized", ""), b.logger.traceLog({}, "MULTIBANNER_RENDERED", 10), this.slides = (0, d.getElementsByData)("name", h.CAROUSEL_SLIDE_NAME, r) || [], this.prevButton = (0, u.getElementByData)("name", h.CAROUSEL_PREV_BUTTON_NAME, r), this.nextButton = (0, u.getElementByData)("name", h.CAROUSEL_NEXT_BUTTON_NAME, r), this.indicators = (0, d.getElementsByData)("name", v.IMAGE_GALLERY_INDICATOR_NAME, r) || [], this.kebab = (0, u.getElementByData)("new-adtune", "true", r.parentElement || r), this.adLabel = (0, u.getElementByData)("label", "", r.parentElement || r), this.images = this.slides.map((function (t) {
                        var e;
                        return (null === (e = (0, u.getElementByData)("name", "adaptiveImageContainer", t)) || void 0 === e ? void 0 : e.parentElement) || null
                    }));
                    var i = (0, u.getElementByData)("name", h.CAROUSEL_TRACK_NAME, r), o = r.dataset.animation,
                        a = new g.CarouselController({
                            container: r,
                            orientation: h.CarouselOrientation.HORIZONTAL,
                            allowedPreciseScroll: !0,
                            autoScrollDelay: 3e3,
                            disableSnapScroll: Boolean(null == i ? void 0 : i.dataset.hasOwnProperty("disableSnap")),
                            scrollDuration: o && v.animationDuration[o],
                            easing: o && v.animationEasing[o],
                            onPageShown: function (t) {
                                return n.handlePageShown(t)
                            },
                            onAnimationStart: function (t, e) {
                                return n.handleScrollAnimationStart(t, e)
                            }
                        });
                    this.addResource("carouselController", a), null === (e = (0, d.getElementsByData)("name", h.CAROUSEL_SLIDE_NAME, r)) || void 0 === e || e.forEach((function (t) {
                        var e = "adaptiveImage-".concat((0, _.generateId)());
                        (0, m.adaptImageToContainer)(t), (0, m.initAdaptiveImageClientCode)(t, e, {
                            enableAnimation: !1,
                            lazyLoadMargin: "100%",
                            lazyLoadContainer: a.trackElement
                        }), n.doOnDestroy((function () {
                            return (0, m.destroyAdaptiveImageClientCode)(t, e)
                        }))
                    })), this.handlePageShown(0), this.initAutoScroll()
                }, e.prototype.initAutoScroll = function () {
                    var t = this.props.container, e = t.getAttribute("id"), n = t.dataset.hasOwnProperty("auto"),
                        r = this.getResource("carouselController");
                    if (e && n) {
                        var i = "undefined" != typeof window && void 0 !== window.ontouchstart;
                        this.addEventListener(t, i ? "touchmove" : "mousemove", (function () {
                            null == r || r.stopAutoScroll()
                        }), {passive: i}), this.addEventListener(t, i ? "touchend" : "mouseleave", (function () {
                            null == r || r.startAutoScroll()
                        })), (0, p.addObserver)(e, (function (t) {
                            t.inScreen ? null == r || r.startAutoScroll() : null == r || r.stopAutoScroll()
                        }), t.parentElement), this.doOnDestroy((function () {
                            return (0, p.removeObserver)(e, t.parentElement)
                        }))
                    }
                }, e.prototype.handlePageShown = function (t) {
                    var e, n, r, i, o = this.props.salt, a = this.slides.length;
                    (0, l.setAttributes)(this.prevButton, {"data-hidden": 0 === t ? "" : null}), (0, l.setAttributes)(this.nextButton, {"data-hidden": t === a - 1 ? "" : null}), (0, s.forEach)(this.indicators, (function (t) {
                        return t.removeAttribute(v.IMAGE_GALLERY_ACTIVE_SLIDE_INDICATOR)
                    })), (0, s.forEach)(this.slides, (function (t) {
                        t.removeAttribute(v.IMAGE_GALLERY_ACTIVE_SLIDE_INDICATOR), t.removeAttribute(v.IMAGE_GALLERY_ANIMATING_PREV_SLIDE_INDICATOR), t.removeAttribute(v.IMAGE_GALLERY_ANIMATING_NEXT_SLIDE_INDICATOR)
                    })), (0, l.setAttributes)(this.indicators[t], ((e = {})[v.IMAGE_GALLERY_ACTIVE_SLIDE_INDICATOR] = "", e)), (0, l.setAttributes)(this.slides[t], ((n = {})[v.IMAGE_GALLERY_ACTIVE_SLIDE_INDICATOR] = "", n)), t > 0 && (null === (r = this.onSlideDidChanged) || void 0 === r || r.call(this));
                    var c = this.images[t].dataset.theme, u = void 0 === c ? "dark" : c;
                    this.props.container.setAttribute("data-click-protection", ""), null === (i = this.disableFalseClickProtection) || void 0 === i || i.call(this), this.props.container.dataset.theme = u, (0, f.updateKebabAndLabelTheme)(o, u, this.adLabel, this.kebab)
                }, e.prototype.handleScrollAnimationStart = function (t, e) {
                    var n, r, i;
                    null === (i = this.slides[t]) || void 0 === i || i.removeAttribute(v.IMAGE_GALLERY_ACTIVE_SLIDE_INDICATOR), (0, l.setAttributes)(this.slides[t], ((n = {})[v.IMAGE_GALLERY_ANIMATING_PREV_SLIDE_INDICATOR] = "", n)), (0, l.setAttributes)(this.slides[e], ((r = {})[v.IMAGE_GALLERY_ANIMATING_NEXT_SLIDE_INDICATOR] = "", r))
                }, e
            }(o.Destroyable);
        e.ImageGalleryController = I;
        var A = {};
        e.initImageGalleryClientCode = function (t, e, n) {
            (0, y.initAnimatedImageGalleryClientCode)(t, e, n);
            var r = (0, u.getElementByData)("name", "imageGallery", t);
            r && (A[e] = new I({container: r, salt: n}))
        }, e.destroyImageGalleryClientCode = function (t, e) {
            var n;
            null === (n = A[e]) || void 0 === n || n.destroy(), A[e] = void 0
        }
    }, 91900: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.animationEasing = e.animationDuration = e.IMAGE_GALLERY_MIN_HEIGHT = e.IMAGE_GALLERY_MIN_WIDTH = e.IMAGE_GALLERY_ANIMATING_NEXT_SLIDE_INDICATOR = e.IMAGE_GALLERY_ANIMATING_PREV_SLIDE_INDICATOR = e.IMAGE_GALLERY_ACTIVE_SLIDE_INDICATOR = e.IMAGE_GALLERY_INDICATOR_NAME = void 0, e.IMAGE_GALLERY_INDICATOR_NAME = "imageGalleryIndicator", e.IMAGE_GALLERY_ACTIVE_SLIDE_INDICATOR = "data-active", e.IMAGE_GALLERY_ANIMATING_PREV_SLIDE_INDICATOR = "data-animating-prev", e.IMAGE_GALLERY_ANIMATING_NEXT_SLIDE_INDICATOR = "data-animating-next", e.IMAGE_GALLERY_MIN_WIDTH = 150, e.IMAGE_GALLERY_MIN_HEIGHT = 100, e.animationDuration = {
            scale: 1e3,
            shrink: 1e3
        }, e.animationEasing = {scale: "easeOutQuad"}
    }, 23089: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.updateKebabAndLabelTheme = void 0;
        var r = n(48629);
        e.updateKebabAndLabelTheme = function (t, e, n, i) {
            var o = r("".concat(e, "-theme"), t), a = r("dark-theme", t), s = r("light-theme", t);
            if (n && (n.classList.remove(a, s), n.classList.add(o)), i) for (var l = 0; l < i.children.length; l++) i.children[l].classList.remove(a, s), i.children[l].classList.add(o)
        }
    }, 59406: (t, e, n) => {
        "use strict";
        var r, i = (r = function (t, e) {
            return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }, r(t, e)
        }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function n() {
                this.constructor = t
            }

            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", {value: !0}), e.MediaSmartLayoutController = void 0;
        var o = n(66553), a = n(12542), s = n(34024), l = n(4549), c = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return i(e, t), e.prototype.init = function () {
                t.prototype.init.call(this);
                var e = this.props.container, n = (0, a.getElementByData)("name", "warning-important", e);
                n && this.addResource("warningImportantController", new s.WarningImportantController({container: n}));
                var r = new l.ScrollerClientCode({container: e, salt: ""});
                this.doOnDestroy((function () {
                    return r.destroy()
                }))
            }, e
        }(o.Destroyable);
        e.MediaSmartLayoutController = c
    }, 50997: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.MediaSmartLayoutVariant = void 0, function (t) {
            t["COLUMN"] = "column", t["ROW"] = "row"
        }(e.MediaSmartLayoutVariant || (e.MediaSmartLayoutVariant = {}))
    }, 75879: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.ADVERTISER_INFO_URL = e.ABOUT_URL = e.CrossButtonVariant = void 0, function (t) {
            t["LIGHT"] = "light", t["DARK"] = "dark"
        }(e.CrossButtonVariant || (e.CrossButtonVariant = {})), e.ABOUT_URL = "https://yandex.ru/secure-ads", e.ADVERTISER_INFO_URL = "https://yandex.ru/ads/advertiser_info"
    }, 33397: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.getAdvertiserInfoUrl = void 0;
        var r = n(46093), i = n(75879), o = "yandex.by", a = "yandex.ru";
        e.getAdvertiserInfoUrl = function (t) {
            return t ? function () {
                try {
                    return ((null === window || void 0 === window ? void 0 : window.document) ? window.location.hostname : (0, r.useLayoutConfig)().referer).indexOf(o) > -1 ? i.ADVERTISER_INFO_URL.replace(a, o) : i.ADVERTISER_INFO_URL
                } catch (t) {
                    return i.ADVERTISER_INFO_URL
                }
            }() + t.slice(t.lastIndexOf("/")) : ""
        }
    }, 80025: (t, e, n) => {
        "use strict";
        e.I = void 0;
        var r = n(12542), i = n(34403), o = n(88443), a = n(23185);
        e.I = function (t) {
            var e = (0, r.getElementByData)("prevent-click", "kebab", t);
            if (e) {
                var n = parseInt(e.dataset["width"] || "", 10), s = parseInt(e.dataset["height"] || "", 10),
                    l = parseInt(e.dataset["min"] || "", 10), c = parseInt(e.dataset["max"] || "", 10);
                if (isNaN(n) || isNaN(s) || isNaN(l) || isNaN(c)) return;
                var u = (0, i.getBoundingClientRect)(t), d = (0, o.getLimitFunction)(l, c), p = d(u.height * s),
                    f = d(u.width * n);
                (0, a.setStyle)(e, {width: "".concat(f, "px"), height: "".concat(p, "px")})
            }
        }
    }, 54227: (t, e, n) => {
        "use strict";
        var r = function (t) {
            return t && t.__esModule ? t : {default: t}
        };
        Object.defineProperty(e, "__esModule", {value: !0}), e.PreventClickKebab = void 0;
        var i = r(n(86010)), o = n(6400), a = n(88772), s = n(89243), l = n(68902);
        e.PreventClickKebab = function () {
            if ((0, s.useStyles)(l), !("exp" === (0, a.useExperimentFlag)("KEBAB_CLICK_AREA"))) return null;
            var t = ((0, a.useExperimentFlag)("KEBAB_CLICK_AREA_SIZES") || "").split("_"), e = t[0], n = t[1], r = t[2],
                c = t[3];
            if (!(e && n && r && c)) return null;
            var u = "paint" === (0, a.useExperimentFlag)("KEBAB_CLICK_PAINT");
            return (0, o.h)("div", {
                className: (0, i["default"])(l.preventClick, u ? l.paintedPrevent : ""),
                onClick: function (t) {
                    return t.stopPropagation()
                },
                "data-prevent-click": "kebab",
                "data-width": e,
                "data-height": n,
                "data-min": r,
                "data-max": c
            })
        }
    }, 6344: (t, e, n) => {
        "use strict";
        var r, i = (r = function (t, e) {
            return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }, r(t, e)
        }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function n() {
                this.constructor = t
            }

            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", {value: !0}), e.BgImage = void 0;
        var o = n(61296), a = n(6400), s = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.ready = !1, e.canvasRef = (0, a.createRef)(), e.width = 0, e.height = 0, e
            }

            return i(e, t), e.prototype.render = function () {
                var t = this.props.classNames, e = (0, o.classNamesFactory)(t);
                return (0, a.h)("canvas", {ref: this.canvasRef, className: e("::host")})
            }, e.prototype.componentDidMount = function () {
                var t = this;
                this.canvas = this.canvasRef.current, this.canvasContext = this.canvas.getContext("2d"), this.image = new Image;
                var e = this.image;
                e.crossOrigin = "Anonymous", e.onload = function () {
                    t.ready = !0, t.drawImage()
                }, e.onerror = function () {
                }, e.src = this.props.posterSrc
            }, e.prototype.resize = function (t, e) {
                var n = this.canvas;
                n.width = t, n.height = e, this.width = t, this.height = e, this.ready && this.drawImage()
            }, e.prototype.drawImage = function () {
                var t = this.canvasContext, e = this.image, n = this.width, r = this.height,
                    i = Number((e.width / e.height).toFixed(2)), o = n, a = r;
                i <= n / r ? a = o / i : o = a * i;
                var s = e.width / o, l = Math.abs(.5 * (o - n) * s), c = Math.abs(.5 * (a - r) * s),
                    u = Math.ceil(n * s), d = Math.ceil(r * s);
                if (t.drawImage(e, l, c, u, d, 0, 0, n, r), void 0 === this.imageData) {
                    try {
                        this.imageData = t.getImageData(0, 0, n, r)
                    } catch (t) {
                        this.imageData = null
                    }
                    this.props.getImageData(this.imageData)
                }
            }, e
        }(n(98661).PureComponent);
        e.BgImage = s
    }, 82704: (t, e, n) => {
        "use strict";
        var r, i = (r = function (t, e) {
            return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }, r(t, e)
        }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function n() {
                this.constructor = t
            }

            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }), o = function () {
            return o = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }, o.apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {value: !0}), e.RtbBanner = void 0;
        var a = n(6400), s = n(77192), l = n(86301), c = n(4777), u = n(33698), d = n(64623), p = n(41073),
            f = n(69206), h = n(15137), g = n(51846), v = n(61296), m = n(54825), _ = n(20697), b = n(85206),
            y = n(12139), I = n(77179), A = n(55598), C = n(68008), S = n(34403), E = n(38968), O = n(12251),
            T = n(62763), R = n(46466), w = n(80200), k = n(55157), P = n(7654), N = n(64809), L = n(30107),
            M = n(29935), D = n(74472), B = n(74192), x = n(28722), F = n(79562), j = n(85914), U = n(4374),
            V = n(35740), H = n(69100), z = n(71955), G = n(9809), W = n(56240), Y = n(88772), q = n(51163),
            K = n(49874), Z = n(98661), X = n(24064), Q = n(81558), $ = n(13595), J = n(77579), tt = n(97773),
            et = n(63830), nt = n(71935), rt = n(33397), it = n(6344), ot = n(10901), at = n(50880), st = n(72178),
            lt = n(8627), ct = n(1550), ut = n(31549), dt = [n(72646), n(82845)],
            pt = {0: "none", 1: "invisible", 2: "one-pixel"}, ft = function (t) {
                return Math.max(0, Math.round(t))
            }, ht = (0, v.bemClassNamesFactory)("rtb-banner", {}), gt = function (t) {
                function e(e) {
                    var n = t.call(this, e) || this;
                    n.bgImage = (0, a.createRef)(), n.bgColor = (0, a.createRef)(), n.main = (0, a.createRef)(), n.container = (0, a.createRef)(), n.body = (0, a.createRef)(), n.iframe = (0, a.createRef)(), n.root = (0, a.createRef)(), n.clientCodeWorkers = [], n.isAdtuneOpened = !1, n.isRenderStartedInViewport = !1, n.beforeRenderTimemark = 0;
                    var r = e.dataSource, i = e.testtag, o = e.nonce;
                    n.id = n.props.id || n.props.dataSource.getUniqueId(), n.uniqId = n.props.dataSource.getUniqueId(), n.destroyHandlers = [], (0, j.setMark)(n.uniqId, j.RenderMarks.ReadyForRendering), n.nonce = o, n.isInterstitial = r.isInterstitial, n.isFullscreen = !1, n.isMediaAdaptive = r.isMediaAdaptive(), r.isFullscreen() && (n.isFullscreen = !0, n.isInterstitial = !0), n.shouldShowButton = Boolean(n.props.dataSource.getButtonUrl() && !n.isDisabledButton()), n.honeypot = r.getHoneypot(), i.setProps({
                        isFullscreen: n.isFullscreen,
                        isFloorAd: r.isFloorAd()
                    });
                    var s = new P.Deferred;
                    return s.promise.then((0, O.protect)("RTBBanner.onReady", n.onReady, n)), n.resolveDomReady = s.resolve, e.visibilityCheckerSignal.addOne((function (t) {
                        return n.onVisibilityConfirmation(t)
                    })), n
                }

                return i(e, t), e.prototype.componentWillUnmount = function () {
                    this.iframe || (0, T.nukeSafeframe)(window, this.id), this.removeResizeListener && this.removeResizeListener(), this.clientCodeWorkers.length > 0 && (this.clientCodeWorkers.forEach((function (t) {
                        t.destroy()
                    })), this.clientCodeWorkers = []), (0, h.forEach)(this.destroyHandlers, (function (t) {
                        return t()
                    }))
                }, e.prototype.render = function () {
                    var t = this;
                    (0, j.setMark)(this.uniqId, j.RenderMarks.StartDomRendering);
                    var e = this, n = e.id, r = e.isInterstitial, i = e.props, s = e.isFullscreen, l = i.dataSource,
                        u = i.html, d = i.nonce, p = i.horizontalAlign, f = void 0 === p || p, h = i.alternativeCode;
                    if (l.isMainPageBlock()) return this.renderNewPortalLayout();
                    var g = l.getPosterSrc(), v = l.getSize(), m = v[0], _ = v[1], b = l.isInterscroller(),
                        y = l.getLanguage(), I = l.isAdLabelDisabled(), C = Boolean(u), S = l.isSSR();
                    u && h && ((0, M.isTurboPage)(window) || (C = !1)), C && (l.isApp() && "exp" === (0, Y.useExperimentFlag)("USE_FRIENDLY_FRAME_IN_APP") || l.isSSP() && "exp" === (0, Y.useExperimentFlag)("USE_FRIENDLY_FRAME_IN_SSP")) && (C = !1);
                    var E = "100%" === m ? (0, tt.styleObjToCss)({width: "100%"}, !0) : void 0;
                    return (0, a.h)("div", {
                        ref: this.root,
                        className: (0, Q.encodeClassNames)(ht("yap-reset", n)),
                        style: E
                    }, (0, a.h)($.Style, {
                        styles: dt,
                        variables: this.getCssVariables(),
                        nonce: d
                    }, (0, a.h)(X.ExperimentsProvider, {value: (0, W.getUaasConfig)()}, (0, a.h)(nt.DisplayDetector, {onReady: this.resolveDomReady}), (0, a.h)("div", {
                        ref: this.main,
                        className: (0, Q.encodeClassNames)(ht(ht(), "_horizontal-align_".concat(f || r), r && "_interstitial", "_honeypot_".concat(pt[this.honeypot]), b && "_interscroller", s && "_fullscreen", s && !this.shouldShowButton && "_fullscreen-without-btn"))
                    }, r && g && !s ? (0, a.h)(it.BgImage, {
                        ref: this.bgImage, posterSrc: g, getImageData: function (e) {
                            return t.onGetImageData(e)
                        }, classNames: {"::host": (0, Q.encodeClassNames)(ht("__paranja-image"))}
                    }) : null, r && !s ? (0, a.h)("div", {
                        ref: this.bgColor,
                        className: (0, Q.encodeClassNames)(ht("__paranja-bg"))
                    }) : null, (0, a.h)("div", {
                        ref: this.container,
                        style: (0, tt.styleObjToCss)({width: m, height: _}, !0),
                        className: (0, Q.encodeClassNames)(ht("__container"))
                    }, (0, a.h)("div", {
                        ref: this.body,
                        id: "".concat(n),
                        style: (0, tt.styleObjToCss)({width: m, height: _}, !0),
                        className: (0, Q.encodeClassNames)(ht("__body"))
                    }, C || S ? null : (0, a.h)("iframe", o({ref: this.iframe, scrolling: "no"}, {
                        marginWidth: 0,
                        marginHeight: 0,
                        frameBorder: 0,
                        vspace: 0,
                        hspace: 0,
                        style: {width: "100%", height: "100%"}
                    }))), !(s || I) && this.renderAdLabel(), !s && this.renderAdtuneAndFeedback())))), s && this.shouldShowButton && (0, a.h)("div", {className: (0, Q.encodeClassNames)(ht("__buttons"))}, (0, a.h)("a", {
                        target: "_blank",
                        href: l.getButtonUrl(),
                        onClick: function (t) {
                            return (0, c.open)(t, l.getButtonUrl())
                        },
                        className: (0, Q.encodeClassNames)(ht("__button", "__button-go"))
                    }, (0, A.i18nBanners)("DETAILS", y), (0, a.h)("div", {
                        className: (0, Q.encodeClassNames)(ht("__arrow")),
                        dangerouslySetInnerHTML: {__html: ut}
                    }))))
                }, e.prototype.getCssVariables = function () {
                    return {
                        id: (0, Q.encodeClassNames)(this.id),
                        honeyWidth: "auto",
                        honeyHeight: "auto",
                        visibility: "visible",
                        settings: {bgColor: "#fff"}
                    }
                }, e.prototype.renderNewPortalLayout = function () {
                    var t = this.id, e = this.props.nonce;
                    return (0, a.h)("div", {
                        ref: this.root,
                        className: (0, Q.encodeClassNames)(ht("yap-reset", t))
                    }, (0, a.h)($.Style, {
                        styles: dt,
                        variables: this.getCssVariables(),
                        nonce: e
                    }, (0, a.h)(X.ExperimentsProvider, {value: (0, W.getUaasConfig)()}, (0, a.h)(nt.DisplayDetector, {onReady: this.resolveDomReady}), (0, a.h)("div", {
                        ref: this.container,
                        className: (0, Q.encodeClassNames)(ht("__newPortal"))
                    }, this.renderAdLabel(), this.renderAdtuneAndFeedback()))))
                }, e.prototype.renderAdLabel = function () {
                    var t = this.props, e = t.dataSource, n = t.isSocialAdvertising, r = t.alternativeCode,
                        i = t.isBusinessUnit, o = e.getRawData(), s = st.IN_BANNER_PRESETS.some((function (t) {
                            var e, n;
                            return -1 !== (null !== (n = null === (e = null == o ? void 0 : o.common) || void 0 === e ? void 0 : e.mediaBundleName) && void 0 !== n ? n : "").search(t)
                        }));
                    if (!(s && "TRUE" === (0, Y.useExperimentFlag)("VAS_SHOW_AD_LABEL_FOR_IN_BANNER") || r)) {
                        var l = e.getLanguage(), c = e.isSmartBanner();
                        return (0, a.h)(et.AdLabel, {
                            language: l,
                            age: e.getAge(),
                            additionalLabel: e.getAdditionalAdLabel(),
                            adLabelMode: c ? "dark" : "rtb",
                            isSocialAd: n,
                            businessUnitLabelTheme: "light",
                            isBusinessUnit: i,
                            shouldRenderBusinessUnitCross: at.isMobile
                        })
                    }
                }, e.prototype.renderAdtuneAndFeedback = function () {
                    var t = this, e = this.props.dataSource;
                    if (e.shouldShowKebab() && (0, k.shouldShowAdtune)(e) && !this.isFullscreen && (0, w.canUseAdtune)(window)) {
                        var n = e.isSmartBanner();
                        return (0, a.h)("div", {
                            onClick: function () {
                                return t.onClickAdtune()
                            }
                        }, (0, a.h)(et.AdKebabAndLabel, {
                            language: e.getLanguage(),
                            hideLabel: !0,
                            size: this.isCompactAdtune() ? "s" : void 0,
                            additionalLabel: e.getAdditionalAdLabel(),
                            mode: n ? "dark" : "rtb"
                        }))
                    }
                }, e.prototype.componentDidMount = function () {
                    (0, j.setMark)(this.uniqId, j.RenderMarks.StopDomRendering), (0, j.setMark)(this.uniqId, j.RenderMarks.StartDetector)
                }, e.prototype.onReady = function () {
                    (0, j.setMark)(this.uniqId, j.RenderMarks.StartEffectRendering), this.resizeBanner(), this.props.onReady(), this.isRenderStartedInViewport = this.isInViewport(), this.beforeRenderTimemark = performance.now(), this.initTooltip(), this.props.ssr || this.props.dataSource.isMainPageBlock() ? this.initSSR() : this.iframe.current ? this.initFriendlyFrame() : this.initSafeFrame()
                }, e.prototype.initTooltip = function () {
                    this.container.current && this.clientCodeWorkers.push(new ot.TooltipClientCode({container: this.container.current}))
                }, e.prototype.getContainerSize = function () {
                    var t = (0, S.getBoundingClientRect)(this.props.renderToNode), e = t.width, n = t.height;
                    if (this.isInterstitial && this.isFullscreen) {
                        return {width: e - 32, height: n - 10 - 20 - (this.shouldShowButton ? 64 : 0)}
                    }
                    var r = (0, s.getElementSize)(this.props.renderToNode);
                    return {width: ft(r.width) || e, height: ft(r.height) || n}
                }, e.prototype.resizeBanner = function (t) {
                    var e, n = this.props.dataSource, r = n.getSize(), i = r[0], o = r[1], a = this.getContainerSize(),
                        s = function (e, n) {
                            !0 !== (null == t ? void 0 : t.disableLogging) && K.logger.traceLog({
                                containerWidth: e.width,
                                containerHeight: e.height,
                                bannerWidth: n.width,
                                bannerHeight: n.height
                            }, "RTB_BANNER_SIZE")
                        };
                    if (!n.isMainPageBlock()) if (this.isMediaAdaptive) {
                        s(a, this.setAdaptiveBannerSize())
                    } else {
                        if ("100%" === i && this.body.current) return (0, y.setStyle)(this.body.current, {
                            width: i,
                            height: o
                        }, !0), void s(a, {width: a.width, height: o});
                        if (this.isInterstitial && this.main.current) if ((0, y.setStyle)(this.main.current, a, !0), null === (e = this.bgImage) || void 0 === e ? void 0 : e.current) this.bgImage.current.resize(a.width, a.height);
                        var l = Math.min(1.1, (0, I.getScale)(a, {width: i, height: o})),
                            c = this.isInterstitial && 1 !== l || l > 1;
                        if (c && this.container.current) {
                            var u = Math.floor(i * l), d = Math.floor(o * l);
                            (0, y.setStyle)(this.container.current, {width: u, height: d}, !0), s(a, {width: u, height: d})
                        } else s(a, {width: i, height: o});
                        this.body.current && (0, y.setStyle)(this.body.current, {
                            width: i,
                            height: o,
                            transform: c ? "scale(".concat(l, ")") : void 0
                        }, !0)
                    }
                }, e.prototype.setAdaptiveBannerSize = function () {
                    var t = (0, b.calculateSizeInfo)(this.props.renderToNode), e = t.max.inner, n = e.width,
                        r = (0, E.getPreferredHeight)(n), i = {};
                    return i = t.isFixed || r > e.height ? {width: "100%", height: "100%"} : {
                        width: "".concat(n, "px"),
                        height: "".concat(r, "px")
                    }, K.logger.traceLog(i, "ADAPTIVE_RTB_SIZE", 1), (0, y.setStyle)(this.container.current, i, !0), (0, y.setStyle)(this.body.current, i, !0), (0, y.setStyle)(this.main.current, i, !0), (0, y.setStyle)(this.root.current, i, !0), {
                        width: e.width,
                        height: t.isFixed || r > e.height ? e.height : r
                    }
                }, e.prototype.onGetImageData = function (t) {
                    if (t) {
                        var e = (0, C.getAverageColor)(t.data);
                        if (e) {
                            var n = g.rgbToHsv.apply(void 0, e), r = n[0], i = n[1];
                            (0, y.setStyle)(this.bgColor.current, {"background-color": "hsla(".concat(r, ",").concat(i, "%,15%, 0.9)")}, !0)
                        }
                    }
                }, e.prototype.isCacheUrl = function () {
                    var t = this.props, e = t.url, n = t.html;
                    return Boolean(e) && !1 || !n
                }, e.prototype.initFriendlyFrame = function () {
                    var t, e, n, r, i = this, o = this.props.dataSource, a = this.getTemplateData(), s = ct(a),
                        l = "exp" === (0, Y.useExperimentFlag)("CALL_ONRENDER_AFTER_IFRAME_LOADED");
                    try {
                        var c = this.iframe.current, u = c.contentDocument;
                        (0, m.addEventListener)(c, "load", (function () {
                            l && i.onRender()
                        })), u.open(), u.write(s), u.close(), l || this.onRender(), this.isCacheUrl() && (0, G.logSSPEvent)("SSP_RTB_CACHE_REQUEST", o.getRawData())
                    } catch (i) {
                        if (i.name = "RTBBanner.initFriendlyFrame", i.stack = "".concat(i.stack, ":HTML:\n").concat(s), this.isCacheUrl()) {
                            var d = o.getRawData();
                            (0, G.logSSPErrorEvent)("SSP_RTB_CACHE_RENDER_ERROR", {
                                html: document.documentElement.innerHTML,
                                bidreqid: (null === (t = null == d ? void 0 : d.rtb) || void 0 === t ? void 0 : t.bidreqid) || "",
                                productType: (null === (e = null == d ? void 0 : d.common) || void 0 === e ? void 0 : e.productType) || "",
                                adIds: null === (n = null == d ? void 0 : d.settings) || void 0 === n ? void 0 : n.bannerIds,
                                hitLogId: null === (r = null == d ? void 0 : d.eventConfirmationData) || void 0 === r ? void 0 : r.HitLogID
                            }, 1)
                        }
                        this.onError(i)
                    }
                }, e.prototype.getTemplateData = function () {
                    var t = this.props, e = t.url, r = t.nonce, i = void 0 === r ? "" : r, a = t.basePath, s = t.dataSource,
                        l = this.props.html, c = {baseURL: "", nonce: i};
                    (s.isApp() && "exp" === (0, Y.useExperimentFlag)("USE_FRIENDLY_FRAME_IN_APP") || s.isSSP() && "exp" === (0, Y.useExperimentFlag)("USE_FRIENDLY_FRAME_IN_SSP")) && (l = this.getHTML());
                    var u = this.isCacheUrl() ? {url: e} : {html: l, url: null, baseURL: a};
                    return o(o(o({}, c), u), {blockSettings: n.lv["json"].stringify(s.getSmartCreativeBlockSettings())})
                }, e.prototype.getHTML = function () {
                    var t = this.props, e = t.protect, r = t.dataSource, i = r.getSettings(),
                        o = r.getSmartCreativeBlockSettings(), a = (0, L.getRevisionNo)(),
                        s = (0, Y.useExperimentFlag)("MBVER");
                    s && (a = s % 1024);
                    var l = r.generateActiveTestIds() || "", c = this.props.html;
                    if (e) {
                        var u = "media-test-tag=".concat(r.getMediaTesttag());
                        l && (u += "&active-test-ids=".concat(l)), ((0, N.checkBundleIsSSP)() || r.isApp()) && (u += "&pcode-test-ids-from-count=".concat((0, W.getUaasConfig)().testIds)), c = c.replace(/(\/.?yandex\.[a-zA-Z]+\/(?:an\/)?count\/)([^\s,"]+)/g, "$1$2?".concat(u))
                    }
                    return (r.isApp() && "exp" === (0, Y.useExperimentFlag)("USE_FRIENDLY_FRAME_IN_APP") || r.isSSP() && "exp" === (0, Y.useExperimentFlag)("USE_FRIENDLY_FRAME_IN_SSP")) && (c = c.replace(/<script[^>]+src="mraid.js".*?><\/script>/, "<script>window.mraid = window.parent.mraid;<\/script>")), ["<script>window.pcodeVer = ".concat(a, ";<\/script>"), "<script>window.pcodeBlockSettings = ".concat(n.lv["json"].stringify(o), ";<\/script>"), l ? "<script>window.__activeTestIds=".concat(n.lv["json"].stringify(l.split(";")), ";<\/script>") : "", (0, V.getPreventMissClicksScript)(), (0, H.getReportingEventEmitterScript)({bannerIds: i.bannerIds}), c].join("")
                }, e.prototype.initSafeFrame = function () {
                    var t = this, e = this.props, n = e.basePath, r = e.nonce, i = e.protect, o = e.dataSource,
                        a = this.body.current, s = this.getSafeframeSandboxAttr(), l = this.getHTML(),
                        c = o.isExternalDsp() && !o.getBasePath();
                    (0, T.initSafeframe)(window, a, {
                        id: this.id,
                        html: l,
                        basePath: c ? "" : n,
                        width: "100%",
                        height: "100%",
                        nonce: r,
                        sandbox: s,
                        protected: i
                    }, void 0, (function () {
                        return t.onRender()
                    }), (function (e, n) {
                        return t.onActionSafeFrame(e, n, l)
                    }))
                }, e.prototype.initSSR = function () {
                    var t, e, n, r, i, o = this, a = document.createElement("div");
                    null === (e = null === (t = this.body) || void 0 === t ? void 0 : t.current) || void 0 === e || e.appendChild(a);
                    var s = this.props, l = s.visibilitySignal, c = s.dataSource, p = c.getSSR(), f = p.html,
                        h = void 0 === f ? "" : f, g = p.css, v = void 0 === g ? "" : g;
                    if (c.isMainPageBlock()) {
                        var _ = null === (n = this.props.renderToNode) || void 0 === n ? void 0 : n.getElementsByTagName("iframe")[0];
                        _ && (this.ssrRootElement = null === (r = null == _ ? void 0 : _.contentDocument) || void 0 === r ? void 0 : r.body)
                    } else this.ssrRootElement = (0, u.protectedRender)(a, (0, d.getShadowRootOptions)(c), h, v, this.props.nonce);
                    this.ssrRootElement && ((0, J.initSSRClientCode)(this.ssrRootElement, c.getFormat(), {
                        visibilitySignal: l,
                        getDataSource: function () {
                            return c
                        }
                    }), (null === (i = c.getClickConfirmation()) || void 0 === i ? void 0 : i.timeout) && (this.clickConfirmationInitTime = Date.now(), this.destroyHandlers.push((0, m.addEventListener)(this.ssrRootElement, "click", (function (t) {
                        return o.onClickConfirmation(t, o.ssrRootElement)
                    })))), this.destroyHandlers.push((function () {
                        (0, J.destroySSRClientCode)(o.ssrRootElement, c.getFormat())
                    })), this.onRender())
                }, e.prototype.isInViewport = function () {
                    return (0, q.isInViewport)(this.props.renderToNode, 0)
                }, e.prototype.isBundleTypeWithNavigation = function () {
                    return (0, N.checkBundleIsSSP)() || (0, N.checkBundleIsMobilSdk)() || (0, N.checkBundleIsWebView)()
                }, e.prototype.getSafeframeSandboxAttr = function () {
                    if (this.props.protect && this.isBundleTypeWithNavigation()) return {"allow-top-navigation": !0}
                }, e.prototype.onActionSafeFrame = function (t, e, r) {
                    var i, o = this;
                    if ("error" === t) {
                        var a = new Error("RTBSafeframeError");
                        try {
                            var s = n.lv["json"].parse(e);
                            (0, lt.assignProperties)(a, {name: s.type, message: s.message})
                        } catch (t) {
                        }
                        var l = this.props.dataSource, c = l.getSettings(), u = l.getBugData(), d = u.hitLogId,
                            p = u.bidReqIdStr, f = null === (i = c.bannerIds) || void 0 === i ? void 0 : i[0];
                        this.onError(a, "RTB Safeframe error", {
                            bannerId: f,
                            hitLogId: d,
                            bidReqIdStr: p,
                            payload: e,
                            html: r
                        }, 1)
                    } else "performance-timings" === t && Array.isArray(e) && e.forEach((function (t) {
                        "first-paint" === t.name ? (0, U.sendRumDeltas)({totalFCP: o.beforeRenderTimemark + t.startTime}, o.getRumAdditionals()) : "largest-contentful-paint" === t.entryType && (0, U.sendRumDeltas)({totalLCP: o.beforeRenderTimemark + (t.renderTime || t.loadTime)}, o.getRumAdditionals())
                    }))
                }, e.prototype.onError = function (t, e, n, r) {
                    this.props.onError(t, e, n, r)
                }, e.prototype.onRender = function () {
                    (0, x.brakeFor)(x.POINT_NAME.DOM_RENDERING), (0, j.setMark)(this.uniqId, j.RenderMarks.StopEffectRendering), (0, j.setMark)(this.uniqId, j.RenderMarks.ContentfulRender), (0, B.renderingIsCompleted)(this.uniqId), this.props.onRender();
                    var t = this.getRumAdditionals();
                    (0, F.asyncCollectMarks)(this.uniqId, t)
                }, e.prototype.isDisabledButton = function () {
                    return this.props.dataSource.getSettings().disableFullscreenMediaButton || "exp" === (0, Y.useExperimentFlag)("DISABLE_FS_MEDIA_BUTTON")
                }, e.prototype.isCompactAdtune = function () {
                    var t = this.props.dataSource.getSize(), e = t[0], n = t[1];
                    return "number" == typeof e && e * n < 75e3
                }, e.prototype.getAdtuneCloseButtonIndent = function () {
                    return this.isCompactAdtune() ? {top: "1px !important;", right: "1px !important;"} : void 0
                }, e.prototype.getRumAdditionals = function () {
                    var t, e = this.props.dataSource, n = e.getSmartBannerMeta(), r = e.getSettings(), i = Boolean(r.reach),
                        o = (0, D.getPlacement)(this.uniqId), a = (null == o ? void 0 : o.additionals) || {},
                        s = a.posInQueue, l = a.slotIndex,
                        c = "".concat(this.isFullscreen ? "fullscreen-" : "").concat(this.getMediaCodeFormat()),
                        u = e.getBugData(), d = u.hitLogId, p = u.bidReqIdStr,
                        f = null === (t = r.bannerIds) || void 0 === t ? void 0 : t[0];
                    return {
                        type: "media",
                        format: c,
                        isReach: i,
                        pageId: e.getPageId(),
                        isDocumentHidden: (0, R.isHidden)(),
                        isRefreshed: e.isRefreshed(),
                        containsData: e.isContainsData(),
                        isInViewport: this.isInViewport(),
                        slotIndex: l,
                        posInQueue: s,
                        inApp: e.isApp(),
                        isSsp: (0, N.checkBundleIsSSP)(),
                        uniqId: this.uniqId,
                        hitLogId: d,
                        bidReqIdStr: p,
                        bannerId: f,
                        externalDeltas: e.getSsrTimings(),
                        isSsrSmartBanner: e.isSsrSmartBanner(),
                        smartBannerPages: null == n ? void 0 : n.pages,
                        smartBannerPerPage: null == n ? void 0 : n.perPage,
                        isInterstitial: e.isInterstitial,
                        detailedDeviceType: e.getDetailedDeviceType(),
                        isRenderStartedInViewport: this.isRenderStartedInViewport
                    }
                }, e.prototype.getMediaCodeFormat = function () {
                    if (this.props.ssr) return this.props.dataSource.getFormat();
                    if (this.props.html) {
                        var t = this.props.html.match(/window.Ya.mediaCode.create\('([^']+)'/);
                        if (t) return t[1]
                    }
                    return "html5"
                }, e.prototype.onClickConfirmation = function (t, e) {
                    var n, r = this, i = this.props.dataSource,
                        o = null === (n = (0, l.getLinkTarget)(t.target)) || void 0 === n ? void 0 : n.getAttribute("href"),
                        a = i.getClickConfirmation() || {}, s = a.timeout, u = void 0 === s ? 0 : s, d = a.needConfirmation;
                    if (this.body.current && o && this.clickConfirmationInitTime && "exp" === (0, Y.useExperimentFlag)("RTB_DOUBLE_CLICK_EXP", !0)) {
                        if (Date.now() - this.clickConfirmationInitTime < u) {
                            if (t.preventDefault(), t.stopPropagation(), d) {
                                if (this.isClickConfirmationOpened) return;
                                var p = i.getLanguage(), h = (0, _.getElementInnerSize)(this.body.current);
                                return (0, f.showClickConfirmation)(e, {
                                    size: h,
                                    language: p,
                                    url: o,
                                    cancelCallback: function (t) {
                                        t.stopPropagation(), r.isClickConfirmationOpened = !1
                                    },
                                    confirmCallback: function (e) {
                                        e.stopPropagation(), r.isClickConfirmationOpened = !1, (0, c.open)(t, o)
                                    }
                                }, this.props.nonce), void (this.isClickConfirmationOpened = !0)
                            }
                            return void (this.clickConfirmationInitTime = 0)
                        }
                        this.clickConfirmationInitTime = 0
                    }
                }, e.prototype.onClickAdtune = function () {
                    var t, e = this;
                    if (!this.isAdtuneOpened) {
                        var n = this.props, r = n.dataSource, i = n.isSocialAdvertising, a = r.getAbuseUrl(),
                            s = r.getLanguage(), l = r.getSettings(), c = (0, N.checkBundleIsSSP)(),
                            u = (0, rt.getAdvertiserInfoUrl)(a);
                        (0, p.showAdtune)(this.container.current, {
                            useNewAdtuneAndKebab: !0,
                            abuseUrl: a,
                            language: s,
                            type: i ? "social" : "default",
                            hasBackground: !1,
                            hasBorders: !0,
                            closeButtonIndent: this.getAdtuneCloseButtonIndent(),
                            warning: r.getOptionalDisclaimer(),
                            copyLink: r.getCopyLink(),
                            advertiserInfoLink: u,
                            callback: function (t) {
                                var n, r;
                                e.isAdtuneOpened = !1, t && e.props.dataSource.abuseAd(z.PREVENTS_BROWSING_ID), null === (r = (n = e.props).onAdtuneClose) || void 0 === r || r.call(n, t)
                            },
                            hideAbout: c,
                            hideAdvertiserInfo: c,
                            showBug: r.hasShowBug(),
                            isExternalDsp: r.isExternalDsp()
                        }, {
                            className: ht("__feedback-menu"),
                            nonce: this.props.nonce,
                            protectNode: !0,
                            data: o({
                                blockId: l.blockId,
                                bannerId: null === (t = l.bannerIds) || void 0 === t ? void 0 : t[0]
                            }, r.getBugData())
                        }), this.isAdtuneOpened = !0
                    }
                }, e.prototype.onVisibilityConfirmation = function (t) {
                    var e = t.confirmTime, n = this.getRumAdditionals();
                    (0, U.sendRumDeltas)({visibilityConfirmed: e}, n)
                }, e
            }(Z.PureComponent);
        e.RtbBanner = gt
    }, 67234: (t, e, n) => {
        "use strict";
        var r = function () {
            return r = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }, r.apply(this, arguments)
        };
        e.R = void 0;
        var i = n(6400), o = n(94358), a = n(43173), s = n(42155), l = n(82704);

        function c(t, e) {
            var n, o = (0, i.h)(s.VNodeReplace, null, (0, i.h)(l.RtbBanner, r({}, e))), c = t;
            if (e.dataSource.isMainPageBlock()) {
                var u = null == t ? void 0 : t.getElementsByTagName("iframe")[0],
                    d = null === (n = null == u ? void 0 : u.contentDocument) || void 0 === n ? void 0 : n.body;
                d && (c = d)
            }
            t === c && (0, a.clearHTML)(t), (0, i.render)(o, c)
        }

        e.R = function (t, e) {
            return e.dataSource.isCSRBlock() ? function (t, e) {
                (0, o.previewRenderer)(e.dataSource, t.id, e.nonce || "").then((function (n) {
                    e.dataSource.data = n, e.dataSource.rtbData = n.rtb, c(t, e)
                }))
            }(t, e) : c(t, e), {
                destroy: function () {
                    (0, i.render)(null, t)
                }
            }
        }
    }, 56119: (t, e, n) => {
        "use strict";
        var r, i = (r = function (t, e) {
            return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }, r(t, e)
        }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function n() {
                this.constructor = t
            }

            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }), o = function () {
            return o = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }, o.apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {value: !0}), e.RtbInline = void 0;
        var a = n(6400), s = n(98661), l = n(61296), c = n(13595), u = n(81558), d = n(74573), p = n(97773),
            f = n(76274), h = n(71955), g = n(41073), v = n(41110), m = n(64809), _ = n(50880),
            b = [n(72646), n(88854)], y = (0, l.bemClassNamesFactory)("rtb-inline", {}), I = function (t) {
                function e(e) {
                    var n = t.call(this, e) || this;
                    return n.isAdtuneOpened = !1, n.body = (0, a.createRef)(), n.container = (0, a.createRef)(), n.id = n.props.id || n.props.dataSource.getUniqueId(), n
                }

                return i(e, t), e.prototype.render = function () {
                    var t = this.id, e = this.props.nonce, n = this.props, r = n.width, i = n.height;
                    return (0, a.h)("div", {
                        style: (0, p.styleObjToCss)({
                            position: "relative",
                            display: "block",
                            boxSizing: "border-box",
                            overflow: "hidden",
                            width: r,
                            height: i
                        }, !0)
                    }, (0, a.h)("div", {
                        ref: this.body,
                        className: (0, u.encodeClassNames)(y("__body")),
                        style: (0, p.styleObjToCss)({position: "relative", top: 0, left: 0, width: r, height: i}, !0)
                    }), (0, a.h)(c.Style, {
                        styles: b,
                        variables: this.getCssVariables(),
                        nonce: e
                    }, (0, a.h)("div", {
                        ref: this.container,
                        className: (0, u.encodeClassNames)(y("yap-reset", t, y()))
                    }, this.renderKebabMenu())))
                }, e.prototype.renderKebabMenu = function () {
                    var t = this, e = this.props, n = e.dataSource, r = e.isSocialAdvertising, i = e.isBusinessUnit;
                    if (n.shouldShowKebab()) {
                        var o = n.getLanguage(), s = n.getSize(), l = s[0], c = s[1],
                            p = "number" == typeof l && "number" == typeof c && l * c >= 75e3 ? "L" : "M",
                            f = n.isSmartBanner(), h = (0, m.checkBundleIsSSP)();
                        return (0, a.h)("div", {
                            className: (0, u.encodeClassNames)(y("__adtune", "_size_".concat(p), "adtune-button")),
                            onClick: function () {
                                return t.onClickAdtune()
                            }
                        }, (0, a.h)(d.AdKebabAndLabel, {
                            language: o,
                            hideLabel: h,
                            isSocialAd: r,
                            isBusinessUnit: i,
                            age: n.getAge(),
                            additionalLabel: n.getAdditionalAdLabel(),
                            businessUnitLabelTheme: "light",
                            mode: f ? "dark" : "rtb",
                            adLabelMode: f ? "dark" : "rtb",
                            shouldRenderBusinessUnitCross: _.isMobile
                        }))
                    }
                }, e.prototype.getCssVariables = function () {
                    return {
                        id: (0, u.encodeClassNames)(this.id),
                        honeyWidth: "auto",
                        honeyHeight: "auto",
                        visibility: "visible",
                        settings: {bgColor: "#fff"}
                    }
                }, e.prototype.componentDidMount = function () {
                    this.initBasePath();
                    var t = this.body.current;
                    this.errorDescriptor = (0, v.on)(window, "error", this.onError, this), (0, f.setInnerHTML)(t, this.props.html, this.props.nonce)
                }, e.prototype.componentWillUnmount = function () {
                    null !== this.errorDescriptor && this.errorDescriptor.un()
                }, e.prototype.initBasePath = function () {
                    var t = window.document, e = t.head.querySelector("base");
                    e || (e = t.createElement("base"), t.head.appendChild(e)), e.href = this.props.basePath
                }, e.prototype.onError = function (t) {
                    this.props.onError(t.error)
                }, e.prototype.onClickAdtune = function () {
                    var t, e = this;
                    if (!this.isAdtuneOpened) {
                        var n = this.props.dataSource, r = n.getSettings(), i = (0, m.checkBundleIsSSP)();
                        (0, g.showAdtune)(this.container.current, {
                            useNewAdtuneAndKebab: !0,
                            abuseUrl: n.getAbuseUrl(),
                            language: n.getLanguage(),
                            type: "default",
                            hasBackground: !1,
                            hasBorders: !0,
                            warning: n.getOptionalDisclaimer(),
                            copyLink: n.getCopyLink(),
                            callback: function (t) {
                                return e.closeAdtune(t)
                            },
                            hideAbout: i,
                            hideAdvertiserInfo: i,
                            showBug: n.hasShowBug(),
                            isExternalDsp: n.isExternalDsp()
                        }, {
                            className: y("__feedback-menu"),
                            nonce: this.props.nonce,
                            protectNode: !0,
                            data: o({
                                blockId: r.blockId,
                                bannerId: null === (t = r.bannerIds) || void 0 === t ? void 0 : t[0]
                            }, n.getBugData())
                        }), this.isAdtuneOpened = !0
                    }
                }, e.prototype.closeAdtune = function (t) {
                    var e, n;
                    this.isAdtuneOpened = !1, t && this.props.dataSource.abuseAd(h.PREVENTS_BROWSING_ID), null === (n = (e = this.props).onAdtuneClose) || void 0 === n || n.call(e, t)
                }, e
            }(s.PureComponent);
        e.RtbInline = I
    }, 35525: (t, e, n) => {
        "use strict";
        var r = function () {
            return r = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }, r.apply(this, arguments)
        };
        e.S = void 0;
        var i = n(6400), o = n(42155), a = n(43173), s = n(56119);
        e.S = function (t, e) {
            var n = (0, i.h)(o.VNodeReplace, null, (0, i.h)(s.RtbInline, r({}, e)));
            return (0, a.clearHTML)(t), (0, i.render)(n, t), {
                destroy: function () {
                    (0, i.render)(null, t)
                }
            }
        }
    }, 31417: (t, e, n) => {
        "use strict";
        var r = function () {
            return r = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }, r.apply(this, arguments)
        }, i = function (t) {
            return t && t.__esModule ? t : {default: t}
        };
        Object.defineProperty(e, "__esModule", {value: !0}), e.Scroller = void 0;
        var o = n(6400), a = n(98661), s = i(n(86010)), l = i(n(44736)), c = n(74394), u = n(89243), d = n(98064);
        e.Scroller = (0, a.memo)((function (t) {
            var e, n = t.children, i = t.className, a = t.autoplay, p = t.autoplayDelay, f = t.autoplayDuration,
                h = t.autoplayAnimation;
            if (!n) return null;
            (0, u.useStyles)(l["default"]);
            var g = ((e = {})["data-".concat(c.SCROLLER_DATA_ATTR)] = !0, e["data-".concat(c.SCROLLER_AUTOPLAY)] = a, e["data-".concat(c.SCROLLER_AUTOPLAY_DELAY)] = p, e["data-".concat(c.SCROLLER_AUTOPLAY_DURATION)] = f, e["data-".concat(c.SCROLLER_AUTOPLAY_ANIMATION)] = h, e);
            return (0, o.h)("div", {className: (0, s["default"])(l["default"].container, i)}, (0, o.h)("div", r({
                id: (0, d.generateId)(),
                className: l["default"].scroller
            }, g), n))
        }))
    }, 5478: (t, e, n) => {
        "use strict";
        var r = function (t, e) {
            var n = {};
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
            if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                var i = 0;
                for (r = Object.getOwnPropertySymbols(t); i < r.length; i++) e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]])
            }
            return n
        };
        Object.defineProperty(e, "__esModule", {value: !0}), e.ScrollerController = void 0;
        var i = n(55362), o = n(50880), a = n(45608), s = function () {
            function t(t, e, n, r, i) {
                var a = this;
                this.container = t, this.salt = e, this._scroller = n, this.animationQueue = r, this._currentPosition = 0, this.animationSettings = {}, this.updateMask(), i(t, "touchstart", (function () {
                    a.stopAnimation()
                }), {passive: !0}), i(n, "scroll", (function (t) {
                    o.isMobile && (a._currentPosition = t.currentTarget.scrollLeft), a.updateMask()
                }))
            }

            return Object.defineProperty(t.prototype, "currentPosition", {
                get: function () {
                    return this._currentPosition
                }, set: function (t) {
                    t = (0, i.clamp)(t, 0, this.maxPosition), this._scroller.scrollLeft = t, this._currentPosition = t
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(t.prototype, "maxPosition", {
                get: function () {
                    var t = this._scroller, e = t.clientWidth, n = t.scrollWidth;
                    return Math.max(0, n - e)
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(t.prototype, "scroller", {
                get: function () {
                    return this._scroller
                }, enumerable: !1, configurable: !0
            }), t.prototype.runAnimation = function (t) {
                var e = this;
                this.clearTimer();
                var n = t(this), i = n.fn, o = r(n, ["fn"]), a = function () {
                    e.lastTickTime = Date.now(), e.animationSettings = o, i(), void 0 !== e.targetPosition && (e.initialDiff = e.targetPosition - e.currentPosition), e.rerunTask()
                };
                (null == o ? void 0 : o.delay) ? this.timer = setTimeout((function () {
                    return a()
                }), o.delay) : a()
            }, t.prototype.resetPosition = function () {
                this.targetPosition = void 0, this.currentPosition = 0
            }, t.prototype.isMaxRightPosition = function () {
                return this.currentPosition === this.maxPosition
            }, t.prototype.isMaxLeftPosition = function () {
                return this.currentPosition < 1
            }, t.prototype.stopAnimation = function () {
                this.runningTask && this.animationQueue.remove(this.runningTask), this.clearTimer()
            }, t.prototype.updateMask = function () {
                this.container.classList.remove(a("left", this.salt)), this.container.classList.remove(a("right", this.salt)), this.container.classList.remove(a("container_mask", this.salt)), this.maxPosition && (this.container.classList.add(a("container_mask", this.salt)), this.isMaxLeftPosition() && this.container.classList.add(a("left", this.salt)), this.isMaxRightPosition() && this.container.classList.add(a("right", this.salt)))
            }, t.prototype.onFinish = function () {
                this.runningTask = void 0, this.animationSettings.finishCb && this.animationSettings.finishCb()
            }, t.prototype.startTask = function () {
                var t = this, e = {
                    onStart: function (n) {
                        if (void 0 !== t.targetPosition) {
                            var r = t.targetPosition - t.currentPosition;
                            Math.abs(r) < 1 ? (t.currentPosition = t.targetPosition, t.onFinish()) : (t.animationSettings.duration && t.initialDiff ? t.currentPosition += t.initialDiff * t.getDeltaTimeCof() : t.currentPosition += t.useEasingFn(r), t.animationQueue.push(e)), t.lastTickTime = Date.now(), n()
                        } else n()
                    }, onStop: function (t) {
                        t()
                    }
                };
                this.animationQueue.push(e), this.runningTask = e
            }, t.prototype.rerunTask = function () {
                this.runningTask || this.startTask()
            }, t.prototype.clearTimer = function () {
                this.timer && (clearTimeout(this.timer), this.timer = void 0)
            }, t.prototype.getDeltaTimeCof = function () {
                return this.lastTickTime && this.animationSettings.duration ? (Date.now() - this.lastTickTime) / this.animationSettings.duration : 0
            }, t.prototype.useEasingFn = function (t) {
                return this.animationSettings.easingFn ? this.animationSettings.easingFn(t) : .057 * t
            }, t
        }();
        e.ScrollerController = s
    }, 7393: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.inScreenAnimation = void 0;
        e.inScreenAnimation = function (t, e) {
            return void 0 === t && (t = 1e3), void 0 === e && (e = 5e3), function (n) {
                return {
                    fn: function () {
                        n.targetPosition = n.maxPosition
                    }, delay: t, duration: e, finishCb: function () {
                        n.runAnimation((function (t) {
                            return {
                                fn: function () {
                                    t.targetPosition = 0
                                }, duration: 1e3, delay: 1e3
                            }
                        }))
                    }
                }
            }
        }
    }, 99533: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.mousemoveAnimation = void 0;
        e.mousemoveAnimation = function (t) {
            return function (e) {
                var n = e.scroller, r = n.clientWidth, i = n.scrollWidth, o = e.scroller.getBoundingClientRect(),
                    a = Math.max(20, r * r / i), s = r - a, l = t.clientX - o.left - a / 2,
                    c = Math.max(0, Math.min(1, l / s)), u = e.maxPosition * c;
                return {
                    fn: function () {
                        e.targetPosition = u
                    }
                }
            }
        }
    }, 9231: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.tickerAnimation = void 0;
        e.tickerAnimation = function (t, n) {
            return void 0 === t && (t = 2500), void 0 === n && (n = 5e3), function (r) {
                var i = r.scroller;
                return i.style.setProperty("transition", "opacity 0.25s linear"), {
                    fn: function () {
                        i.style.removeProperty("opacity"), r.targetPosition = r.maxPosition
                    }, delay: t, duration: n, finishCb: function () {
                        r.runAnimation((function (o) {
                            return {
                                fn: function () {
                                    i.style.setProperty("opacity", "0"), o.targetPosition = r.maxPosition - 2
                                }, finishCb: function () {
                                    r.currentPosition = 0, i.style.removeProperty("opacity"), r.runAnimation((0, e.tickerAnimation)(t, n))
                                }, duration: 1e3, delay: 1e3
                            }
                        }))
                    }
                }
            }
        }
    }, 4549: (t, e, n) => {
        "use strict";
        var r, i = (r = function (t, e) {
            return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }, r(t, e)
        }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function n() {
                this.constructor = t
            }

            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", {value: !0}), e.ScrollerClientCode = void 0;
        var o = n(39698), a = n(7386), s = n(65421), l = n(17515), c = n(66553), u = n(5478), d = n(99533), p = n(7393),
            f = n(9231), h = n(74394), g = {inScreen: p.inScreenAnimation, ticker: f.tickerAnimation},
            v = function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }

                return i(e, t), e.prototype.init = function () {
                    if (!(0, a.isHermione)()) {
                        this.animationQueue = new l.AnimationQueue({delay: 16.66});
                        for (var t = 0, e = (0, s.getElementsByData)(h.SCROLLER_DATA_ATTR, void 0, this.props.container) || []; t < e.length; t++) {
                            var n = e[t];
                            this.initScrollerListeners(n)
                        }
                    }
                }, e.prototype.initScrollerListeners = function (t) {
                    var e;
                    if (t) {
                        var n = t, r = function (t) {
                                if (t) {
                                    var e = Number(t);
                                    if (isNaN(e)) return;
                                    return e
                                }
                            }, i = n.getAttribute("id"), a = t.hasAttribute("data-".concat(h.SCROLLER_AUTOPLAY)),
                            s = r(t.getAttribute("data-".concat(h.SCROLLER_AUTOPLAY_DELAY))),
                            l = r(t.getAttribute("data-".concat(h.SCROLLER_AUTOPLAY_DURATION))),
                            c = new u.ScrollerController(t, this.props.salt, n, this.animationQueue, this.addEventListener.__pbind(this));
                        if (this.addEventListener(t, "mousemove", (function (t) {
                            c.runAnimation((0, d.mousemoveAnimation)(t))
                        })), a && i) {
                            var f = t.getAttribute("data-".concat(h.SCROLLER_AUTOPLAY_ANIMATION)),
                                v = null !== (e = g[null != f ? f : ""]) && void 0 !== e ? e : p.inScreenAnimation,
                                m = !1;
                            (0, o.addObserver)(i, (function (t) {
                                t.inScreen ? m || (c.runAnimation(v(s, l)), m = !0) : c.resetPosition()
                            }), t), this.doOnDestroy((function () {
                                return (0, o.removeObserver)(i, t)
                            }))
                        }
                    }
                }, e
            }(c.Destroyable);
        e.ScrollerClientCode = v
    }, 74394: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.SCROLLER_AUTOPLAY_DURATION = e.SCROLLER_AUTOPLAY_DELAY = e.SCROLLER_AUTOPLAY_ANIMATION = e.SCROLLER_AUTOPLAY = e.SCROLLER_DATA_ATTR = void 0, e.SCROLLER_DATA_ATTR = "scroller", e.SCROLLER_AUTOPLAY = "autoplay", e.SCROLLER_AUTOPLAY_ANIMATION = "autoplay-animation", e.SCROLLER_AUTOPLAY_DELAY = "autoplay-delay", e.SCROLLER_AUTOPLAY_DURATION = "autoplay-duration"
    }, 12213: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.Scroller = void 0;
        var r = n(31417);
        Object.defineProperty(e, "Scroller", {
            enumerable: !0, get: function () {
                return r.Scroller
            }
        })
    }, 44334: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.initWarningClientCode = void 0;
        var r = n(50880), i = n(17515), o = n(65421), a = n(81330), s = n(47522),
            l = new i.AnimationQueue({delay: 16.66});
        e.initWarningClientCode = function (t, e) {
            var n = ((0, o.getElementsByData)("name", "warningScroll", t) || [])[0];
            if (n) {
                var i = n.children[0];
                if (i) {
                    var c = 0, u = 0, d = 0, p = {
                        onStart: function (t) {
                            var r = u - c;
                            Math.abs(r) < 1 ? c = u : (c += .057 * r, l.push(p)), i.scrollLeft = c, n.classList.remove(a("left", e)), n.classList.remove(a("right", e)), 0 === c && n.classList.add(a("left", e)), d && c === d && n.classList.add(a("right", e)), t()
                        }, onStop: function (t) {
                            t()
                        }
                    };
                    if (r.isMobile) return i.classList.add(s("mobile-scroll", e)), n.classList.remove(a("left", e)), void n.classList.remove(a("right", e));
                    i.classList.remove(s("mobile-scroll", e)), n.addEventListener("mousemove", (function (t) {
                        var e = i.clientWidth, n = i.scrollWidth, r = i.getBoundingClientRect(),
                            o = e - Math.max(64, e * e / n), a = t.clientX - r.left - o / 2,
                            s = Math.max(0, Math.min(1, a / o));
                        u = (d = n - e) * s, l.push(p)
                    }))
                }
            }
        }
    }, 34024: (t, e, n) => {
        "use strict";
        var r, i, o = (r = function (t, e) {
            return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }, r(t, e)
        }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function n() {
                this.constructor = t
            }

            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", {value: !0}), e.WarningImportantController = void 0;
        var a = n(88443), s = n(25154), l = n(20816), c = n(66553),
            u = ((i = {})[s.DIETARY_SUPPLEMENT_FLAG] = "sup", i[s.MEDICINE_FLAG] = "med", i), d = function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }

                return o(e, t), e.prototype.init = function () {
                    t.prototype.init.call(this);
                    var e, n = this.props.container, r = n.dataset.warningFlag, i = u[void 0 === r ? "" : r],
                        o = Number(n.dataset.warningRatio),
                        s = (e = (0, a.getLimitFunction)(2, 100)(o), 2 * Math.floor(e / 2 + .25));
                    (0, l.loadImage)({
                        src: "https://yastatic.net/pcode-static/resources/41/warning_svg/".concat(i, "/").concat(s, "_1.svg"),
                        onLoad: function (t) {
                            n.innerHTML = "", n.appendChild(t)
                        }
                    })
                }, e
            }(c.Destroyable);
        e.WarningImportantController = d
    }, 68181: (t, e, n) => {
        "use strict";
        e.rP = e.KL = void 0;
        var r = n(15137), i = n(65421), o = n(49569), a = n(61788), s = n(44334), l = n(37871), c = n(28871),
            u = n(25001), d = n(25021), p = {};
        e.KL = function (t, e, n, r) {
            var f = ((0, i.getElementsByData)("name", "adaptiveAd", t) || [])[0];
            if (f) {
                var h = f.id;
                p[h] = p[h] || [], (0, o.adaptImageToContainer)(t), (0, s.initWarningClientCode)(t, e);
                var g = Boolean(n.vastBase64 || n.vast);
                if (c.logger.logGogolEvent({name: "AdaptiveClientCodeInit", dailySensors: {hasVideo: g}}), g) {
                    var v = !1, m = (0, u.createVideoInTgaAbortLatch)({
                        getIsStarted: function () {
                            return v
                        }, logEventName: "VideoInTgaAdaptiveDestroy"
                    }), _ = (0, d.isPositiveFiniteNumber)(null == r ? void 0 : r().getAuxQueryParams().subDesignId);
                    (0, l.clientCodeLoader)().then((function (e) {
                        var i, o;
                        try {
                            var a = new e({
                                container: t,
                                isAA: _,
                                dataSource: r(),
                                videoParams: n,
                                format: "adaptive",
                                videoInTgaAbortLatch: m,
                                pageId: null === (i = r()) || void 0 === i ? void 0 : i.getPageId(),
                                impId: null === (o = r()) || void 0 === o ? void 0 : o.getImpId(),
                                onAdPodStart: function () {
                                    v = !0
                                }
                            });
                            p[h].push(a)
                        } catch (t) {
                            c.logger.logGogolEvent({
                                name: "INIT_SD_CLIENT_CODE_IN_ADAPTIVE_ERROR",
                                data: {message: t.message, stack: t.stack}
                            })
                        }
                    }))["catch"]((function (t) {
                        m.dispatch({reason: "cannotLoadModule", details: {message: t.message, stack: t.stack}})
                    }))
                }
                (0, a.initImageGalleryClientCode)(t, f.id, e)
            }
        }, e.rP = function (t) {
            var e = ((0, i.getElementsByData)("name", "adaptiveAd", t) || [])[0];
            if (e) {
                var n = e.id;
                n && ((0, r.forEach)(p[n], (function (t) {
                    return t.destroy()
                })), delete p[n]), (0, o.destroyAdaptiveImageClientCode)(t, e.id), (0, a.destroyImageGalleryClientCode)(t, e.id)
            }
        }
    }, 5896: (t, e, n) => {
        "use strict";
        var r, i = (r = function (t, e) {
            return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }, r(t, e)
        }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function n() {
                this.constructor = t
            }

            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }), o = function () {
            return o = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }, o.apply(this, arguments)
        }, a = function (t, e, n) {
            if (n || 2 === arguments.length) for (var r, i = 0, o = e.length; i < o; i++) !r && i in e || (r || (r = Array.prototype.slice.call(e, 0, i)), r[i] = e[i]);
            return t.concat(r || Array.prototype.slice.call(e))
        };
        Object.defineProperty(e, "__esModule", {value: !0}), e.AbstractSmartBannerController = void 0;
        var s = n(66553), l = n(59406), c = n(12542), u = n(41073), d = n(98370), p = n(25154), f = n(33397),
            h = n(64809), g = n(10901), v = function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }

                return i(e, t), e.prototype.init = function () {
                    t.prototype.init.call(this);
                    var e = this.props.container;
                    this.addResource("bannerLayoutController", new l.MediaSmartLayoutController({container: e})), this.addResource("tooltip", new g.TooltipClientCode({container: e}));
                    var n = (0, c.getElementByData)("close", "", e);
                    n && (n.removeAttribute("data-close"), this.addEventListener(n, "click", this.handleClickCrossBtn))
                }, e.prototype.handleClickCrossBtn = function (t) {
                    var e = this;
                    t.preventDefault(), t.stopPropagation();
                    var n = (0, this.props.getDataSource)(), r = n.getSettings(), i = (0, h.checkBundleIsSSP)(),
                        s = n.getFreeAds(), l = s[0], c = l.abuseUrl, g = n.getLanguage(),
                        v = (0, d.unique)(s.__preduce((function (t, e) {
                            return a(a([], t, !0), (0, p.parseBannerFlags)(e.bannerFlags), !0)
                        }), [])).join(","), m = (0, p.hasImportantFlags)(v) ? "" : l.warning, _ = l.url.toString(),
                        b = (0, f.getAdvertiserInfoUrl)(c);
                    (0, u.showAdtune)(this.props.container, {
                        useNewAdtuneAndKebab: !0,
                        abuseUrl: c,
                        language: g,
                        hasBackground: !0,
                        hasBorders: !1,
                        bigCross: !1,
                        type: "default",
                        warning: m,
                        copyLink: _,
                        advertiserInfoLink: b,
                        callback: function (t) {
                            return e.closeAdtune(t)
                        },
                        hideAbout: i,
                        hideAdvertiserInfo: i,
                        showBug: n.hasShowBug(),
                        isExternalDsp: n.isExternalDsp()
                    }, {
                        nonce: this.props.nonce,
                        data: o({
                            blockId: null == r ? void 0 : r.blockId,
                            bannerId: l.adId,
                            hitLogId: l.hitLogId
                        }, n.getBugData())
                    })
                }, e.prototype.closeAdtune = function (t) {
                    t && this.props.onClose()
                }, e
            }(s.Destroyable);
        e.AbstractSmartBannerController = v
    }, 74039: (t, e, n) => {
        "use strict";
        var r, i = (r = function (t, e) {
            return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }, r(t, e)
        }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function n() {
                this.constructor = t
            }

            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        e.a = void 0;
        var o = n(66553), a = n(15735), s = n(15137), l = n(37598), c = n(17553), u = n(60913), d = n(12542),
            p = n(65421), f = n(85494), h = n(49569), g = function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }

                return i(e, t), e.prototype.init = function () {
                    var e = this;
                    t.prototype.init.call(this);
                    var n = this.props.container, r = n.dataset.orientation,
                        i = void 0 === r ? f.FullscreenOrientation.PORTRAIT : r;
                    this.isPortrait = i === f.FullscreenOrientation.PORTRAIT, this.listElement = (0, d.getElementByData)("name", f.FULLSCREEN_GRID_SCROLLABLE_NAME, n), this.resizerElement = (0, d.getElementByData)("name", f.FULLSCREEN_GRID_RESIZER_NAME, n), this.offers = (0, a.map)((0, p.getElementsByData)("name", f.FULLSCREEN_GRID_ITEM_NAME, n) || [], (function (t) {
                        return {
                            element: t,
                            index: Number(t.dataset.offerIndex),
                            offerSize: e.isPortrait ? t.offsetHeight : t.offsetWidth,
                            offerOffset: e.isPortrait ? t.offsetTop : t.offsetLeft
                        }
                    })), this.addEventListener(window, "resize", (function () {
                        return e.onResize()
                    }), {passive: !0}), (0, s.forEach)(this.offers, (function (t) {
                        (0, h.adaptImageToContainer)(t.element), (0, h.initAdaptiveImageClientCode)(t.element, t.element.id, {enableAnimation: !1}), e.doOnDestroy((function () {
                            return (0, h.destroyAdaptiveImageClientCode)(n, t.element.id)
                        }))
                    })), this.listElement && (this.addEventListener(this.listElement, "scroll", (0, l.throttle)((function () {
                        return e.onScroll()
                    }), 250), {passive: !0}), this.doOnDestroy((0, u.disableOverflowChaining)(this.listElement))), this.onResize()
                }, e.prototype.onResize = function () {
                    this.resizerElement && (this.props.container.style.setProperty("height", "".concat(this.resizerElement.clientHeight, "px")), this.recalculateOffers())
                }, e.prototype.recalculateOffers = function () {
                    var t = this;
                    (0, s.forEach)(this.offers, (function (e) {
                        e.offerSize = t.isPortrait ? e.element.offsetHeight : e.element.offsetWidth, e.offerOffset = t.isPortrait ? e.element.offsetTop : e.element.offsetLeft
                    }))
                }, e.prototype.onScroll = function () {
                    var t = this.listElement.scrollTop;
                    (0, c.setAttributes)(this.props.container, {"data-scrolled": t > 25 ? "" : null}), this.props.onPageShown(this.getVisibleItems())
                }, e.prototype.getVisibleItems = function () {
                    var t = this.props.container.dataset.orientation,
                        e = (void 0 === t ? f.FullscreenOrientation.PORTRAIT : t) === f.FullscreenOrientation.PORTRAIT,
                        n = [], r = e ? this.listElement.scrollTop : this.listElement.scrollLeft,
                        i = e ? this.listElement.clientHeight : this.listElement.clientWidth;
                    return (0, s.forEach)(this.offers, (function (t) {
                        var e = t.index, o = t.offerOffset, a = t.offerSize, s = Math.max(o, r);
                        (Math.min(o + a, r + i) - s) / a >= .5 && !isNaN(e) && n.push(e)
                    })), {limit: n.length, offset: Math.min.apply(Math, n)}
                }, e
            }(o.Destroyable);
        e.a = g
    }, 85494: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.FULLSCREEN_GRID_ITEM_NAME = e.FULLSCREEN_GRID_SCROLLABLE_NAME = e.FULLSCREEN_GRID_RESIZER_NAME = e.FULLSCREEN_GRID_CONTAINER_NAME = e.FullscreenOfferSize = e.FULLSCREEN_OFFER_OPTIMAL_WIDTH = e.LANDSCAPE_OFFER_VERTICAL_PADDING = e.LANDSCAPE_IMAGE_MAX_HEIGHT = e.LANDSCAPE_IMAGE_MAX_RATIO = e.LANDSCAPE_IMAGE_MIN_RATIO = e.PORTRAIT_IMAGE_MAX_RATIO = e.PORTRAIT_IMAGE_MIN_RATIO = e.FullscreenOrientation = e.FullscreenTheme = void 0, function (t) {
            t["DARK"] = "dark", t["LIGHT"] = "light"
        }(e.FullscreenTheme || (e.FullscreenTheme = {})), function (t) {
            t["PORTRAIT"] = "portrait", t["LANDSCAPE"] = "landscape"
        }(e.FullscreenOrientation || (e.FullscreenOrientation = {})), e.PORTRAIT_IMAGE_MIN_RATIO = 9 / 16, e.PORTRAIT_IMAGE_MAX_RATIO = 16 / 9, e.LANDSCAPE_IMAGE_MIN_RATIO = 9 / 16, e.LANDSCAPE_IMAGE_MAX_RATIO = 1, e.LANDSCAPE_IMAGE_MAX_HEIGHT = 184, e.LANDSCAPE_OFFER_VERTICAL_PADDING = 16, e.FULLSCREEN_OFFER_OPTIMAL_WIDTH = 156, function (t) {
            t["XS"] = "xs", t["SM"] = "sm", t["MD"] = "md", t["LG"] = "lg"
        }(e.FullscreenOfferSize || (e.FullscreenOfferSize = {})), e.FULLSCREEN_GRID_CONTAINER_NAME = "fullscreen-grid-container", e.FULLSCREEN_GRID_RESIZER_NAME = "fullscreen-grid-resizer", e.FULLSCREEN_GRID_SCROLLABLE_NAME = "fullscreen-grid-scrollable-container", e.FULLSCREEN_GRID_ITEM_NAME = "fullscreen-grid-item"
    }, 16269: (t, e, n) => {
        "use strict";
        var r, i = (r = function (t, e) {
            return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }, r(t, e)
        }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function n() {
                this.constructor = t
            }

            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        e.N = void 0;
        var o = n(66553), a = n(48754), s = n(69318), l = n(12542), c = n(76617), u = n(12139), d = n(85236),
            p = function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }

                return i(e, t), e.prototype.init = function () {
                    t.prototype.init.call(this);
                    var e = this.props.container, n = (0, l.getElementByData)("name", c.CAROUSEL_CONTAINER_NAME, e);
                    n && (this.carouselController = new a.CenterCarouselController({
                        container: n,
                        orientation: s.CarouselOrientation.HORIZONTAL,
                        onPageShown: this.onPageShown.__pbind(this),
                        onScroll: this.updateArrows.__pbind(this)
                    }), this.onPageShown(this.carouselController.getCurrentIndex()), this.carouselController.updateCurrent(), this.addResource("carouselController", this.carouselController))
                }, e.prototype.updateArrows = function (t) {
                    var e = this.carouselController, n = e.trackElement, r = e.nextButtonElement,
                        i = e.prevButtonElement;
                    if (i && r) {
                        var o = n.clientWidth, a = n.scrollWidth - o, s = .3 * o, l = 1 - f(0, s, t),
                            c = f(a - s, a, t);
                        d.vsync.mutate((function () {
                            (0, u.setStyle)(i, {
                                transform: "translateX(".concat(-45 * l, "px)"),
                                opacity: 1 - l
                            }), (0, u.setStyle)(r, {transform: "translateX(".concat(45 * c, "px)"), opacity: 1 - c})
                        }))
                    }
                }, e.prototype.onPageShown = function (t) {
                    this.carouselController && this.props.onPageShown(this.carouselController.calcOffsetAndLimit(t))
                }, e.prototype.getVisibleItems = function () {
                    return this.carouselController ? this.carouselController.calcOffsetAndLimit(this.carouselController.getCurrentIndex()) : {
                        offset: 0,
                        limit: 0
                    }
                }, e
            }(o.Destroyable);

        function f(t, e, n) {
            var r = e - t;
            return (function (t, e, n) {
                return Math.max(t, Math.min(e, n))
            }(t, e, n) - t) / r
        }

        e.N = p
    }, 22935: (t, e) => {
        "use strict";
        e.xp = e.Hw = e.EZ = e.C7 = void 0, e.C7 = 272, e.EZ = 24, e.Hw = 3, e.Hw, e.C7, e.EZ, e.Hw, e.xp = "fullscreen-grid-desktop-container"
    }, 82810: (t, e, n) => {
        "use strict";
        var r, i = (r = function (t, e) {
            return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }, r(t, e)
        }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function n() {
                this.constructor = t
            }

            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        e.Z = void 0;
        var o = n(15137), a = n(30913), s = n(65421), l = n(59406), c = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return i(e, t), e.prototype.init = function () {
                var e = this;
                t.prototype.init.call(this);
                var n = this.props.container, r = void 0 !== window.ontouchstart;
                this.addResource("bannerLayoutController", new l.MediaSmartLayoutController({container: n})), this.offerElements = (0, s.getElementsByData)("name", "offer", n) || [], this.indicatorElements = (0, s.getElementsByData)("name", "indicator", n) || [], this.activeIndex = (0, a.findIndex)(this.offerElements, (function (t) {
                    return t.hasAttribute("data-active")
                })), (0, o.forEach)(this.indicatorElements, (function (t, n) {
                    n === e.activeIndex && t.setAttribute("data-active", ""), e.addEventListener(t, r ? "click" : "mouseenter", (function () {
                        return e.setActiveOffer(n)
                    }))
                }))
            }, e.prototype.setActiveOffer = function (t) {
                var e, n, r, i;
                if (this.activeIndex !== t) {
                    var o = this.activeIndex;
                    null === (e = this.indicatorElements[o]) || void 0 === e || e.removeAttribute("data-active"), null === (n = this.indicatorElements[t]) || void 0 === n || n.setAttribute("data-active", ""), null === (r = this.offerElements[o]) || void 0 === r || r.removeAttribute("data-active"), null === (i = this.offerElements[t]) || void 0 === i || i.setAttribute("data-active", ""), this.activeIndex = t
                }
            }, e.prototype.getPageInfo = function () {
                return {offset: 0, limit: this.offerElements.length}
            }, e.prototype.getVisibleItems = function () {
                return this.getPageInfo()
            }, e
        }(n(5896).AbstractSmartBannerController);
        e.Z = c
    }, 66279: (t, e, n) => {
        "use strict";
        var r;
        e.Ry = e.L8 = e.fr = void 0, e.fr = "smart-mosaic-container";
        var i, o = n(50997);
        (function (t) {
            t["SQUARE"] = "square", t["VERTICAL"] = "vertical", t["HORIZONTAL_ROW"] = "horizontalRow", t["HORIZONTAL_COLUMN"] = "horizontalColumn"
        })(i = e.L8 || (e.L8 = {})), function (t) {
            t["VERTICAL"] = "vertical", t["HORIZONTAL"] = "horizontal"
        }(e.Ry || (e.Ry = {})), (r = {})[i.SQUARE] = o.MediaSmartLayoutVariant.COLUMN, r[i.VERTICAL] = o.MediaSmartLayoutVariant.COLUMN, r[i.HORIZONTAL_COLUMN] = o.MediaSmartLayoutVariant.COLUMN, r[i.HORIZONTAL_ROW] = o.MediaSmartLayoutVariant.ROW
    }, 33329: (t, e, n) => {
        "use strict";
        var r, i = (r = function (t, e) {
            return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }, r(t, e)
        }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function n() {
                this.constructor = t
            }

            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        e.e = void 0;
        var o = n(15735), a = n(59406), s = n(65421), l = n(18475), c = n(12542), u = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return i(e, t), e.prototype.init = function () {
                t.prototype.init.call(this);
                var e = this.props.container;
                this.addResource("bannerLayoutController", new a.MediaSmartLayoutController({container: e})), this.initCarouselController()
            }, e.prototype.initCarouselController = function () {
                var t = this, e = this.props, n = e.container, r = e.onPageShown,
                    i = (0, c.getElementByData)("name", "offers-carousel", n);
                if (i) {
                    this.chunks = (0, o.map)((0, s.getElementsByData)("name", "carousel-slide", n) || [], (function (t) {
                        return ((0, s.getElementsByData)("name", "offer-tile", t) || []).length
                    }));
                    var a = new l.SmartTileCarouselController({
                        container: i, onChangePage: function (e) {
                            return r(t.getPageInfo(e))
                        }
                    });
                    this.addResource("carouselController", a)
                }
            }, e.prototype.getPageInfo = function (t) {
                var e = this.chunks[t];
                return {
                    offset: this.chunks.slice(0, t).__preduce((function (t, e) {
                        return t + e
                    }), 0), limit: e
                }
            }, e.prototype.getVisibleItems = function () {
                var t, e = this.getResource("carouselController"),
                    n = null !== (t = null == e ? void 0 : e.getCurrentIndex()) && void 0 !== t ? t : 0;
                return this.getPageInfo(n)
            }, e
        }(n(5896).AbstractSmartBannerController);
        e.e = u
    }, 18475: (t, e, n) => {
        "use strict";
        var r, i = (r = function (t, e) {
            return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }, r(t, e)
        }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function n() {
                this.constructor = t
            }

            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", {value: !0}), e.SmartTileCarouselController = void 0;
        var o = n(66553), a = n(12542), s = n(27474), l = n(60546), c = n(17553), u = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return i(e, t), e.prototype.init = function () {
                var e = this;
                t.prototype.init.call(this);
                var n = this.props, r = n.container, i = n.onChangePage,
                    o = (0, a.getElementByData)("name", "carousel-prev-button", r),
                    c = (0, a.getElementByData)("name", "carousel-next-button", r);
                this.setButtonVisibility(0, o, c), this.paused = !1, this.carouselController = new s.CarouselController({
                    container: r,
                    orientation: r.dataset.orientation,
                    onPageShown: function (t) {
                        var n = e.getResource("indicatorController");
                        null == n || n.setCurrentPage(t), i(t), e.setButtonVisibility(t, o, c)
                    }
                }), this.addResource("carouselController", this.carouselController);
                var u = (0, a.getElementByData)("name", "carousel-indicator", r);
                u && this.addResource("indicatorController", new l.CarouselIndicatorController({
                    initialIndex: this.carouselController.getCurrentIndex(),
                    container: u,
                    onChangePage: function (t) {
                        e.carouselController.scrollTo(t), i(t)
                    }
                }))
            }, e.prototype.setButtonVisibility = function (t, e, n) {
                var r,
                    i = (null === (r = this.carouselController) || void 0 === r ? void 0 : r.slideElements.length) - 1;
                (0, c.setAttributes)(e, {"data-hidden": 0 === t ? "" : null}), (0, c.setAttributes)(n, {"data-hidden": t === i ? "" : null})
            }, e.prototype.getCurrentIndex = function () {
                var t, e;
                return null !== (e = null === (t = this.carouselController) || void 0 === t ? void 0 : t.getCurrentIndex()) && void 0 !== e ? e : 0
            }, e.prototype.isPaused = function () {
                return this.paused
            }, e
        }(o.Destroyable);
        e.SmartTileCarouselController = u
    }, 36853: (t, e) => {
        "use strict";
        e.Ar = e.pD = e.nf = void 0, e.nf = "smart-tile-container", function (t) {
            t["Vertical"] = "vertical", t["Horizontal"] = "horizontal", t["Square"] = "square"
        }(e.pD || (e.pD = {})), function (t) {
            t["Vertical"] = "vertical", t["Horizontal"] = "horizontal", t["Compact"] = "compact"
        }(e.Ar || (e.Ar = {}))
    }, 66134: (t, e, n) => {
        "use strict";
        var r, i = (r = function (t, e) {
            return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }, r(t, e)
        }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function n() {
                this.constructor = t
            }

            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        e.H = void 0;
        var o = n(66553), a = n(15137), s = n(22886), l = n(12139), c = n(85236), u = n(27474), d = n(69318),
            p = n(12542), f = n(76617), h = function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }

                return i(e, t), e.prototype.init = function () {
                    var t = this, e = this.props.container,
                        n = (0, p.getElementByData)("name", f.CAROUSEL_CONTAINER_NAME, e);
                    n && (this.controller = new u.CarouselController({
                        dragMoveMultiplier: 2,
                        container: n,
                        orientation: d.CarouselOrientation.HORIZONTAL,
                        allowedMouseScroll: !0,
                        allowedPreciseScroll: !0,
                        onPageShown: function (e) {
                            return t.props.onPageShown({offset: e, limit: 1})
                        },
                        onScroll: function (e) {
                            return t.handleScroll(e)
                        }
                    }), this.controller.updateCurrent(), this.initClickHandlers(), this.addResource("controller", this.controller))
                }, e.prototype.initClickHandlers = function () {
                    var t = this;
                    (0, a.forEach)(this.controller.slideElements, (function (e) {
                        t.addEventListener(e, "click", t.onClickSlide)
                    }))
                }, e.prototype.handleScroll = function (t) {
                    this.updateArrows(t)
                }, e.prototype.updateArrows = function (t) {
                    var e = this.controller, n = e.trackElement, r = e.nextButtonElement, i = e.prevButtonElement;
                    if (i && r) {
                        var o = n.clientWidth, a = n.scrollWidth - o, s = .3 * o, u = 1 - g(0, s, t), d = g(a - s, a, t);
                        c.vsync.mutate((function () {
                            (0, l.setStyle)(i, {
                                transform: "translateX(".concat(-45 * u, "px)"),
                                opacity: 1 - u
                            }), (0, l.setStyle)(r, {transform: "translateX(".concat(45 * d, "px)"), opacity: 1 - d})
                        }))
                    }
                }, e.prototype.onClickSlide = function (t) {
                    if (this.controller.performedScrollWithMouse) t.preventDefault(); else {
                        var e = t.currentTarget, n = (0, s.indexOf)(this.controller.slideElements, e);
                        this.controller.getCurrentIndex() !== n && (this.controller.scrollTo(n), t.preventDefault())
                    }
                }, e.prototype.getVisibleItems = function () {
                    return {offset: this.controller.getCurrentIndex(), limit: 1}
                }, e
            }(o.Destroyable);

        function g(t, e, n) {
            var r = e - t;
            return (function (t, e, n) {
                return Math.max(t, Math.min(e, n))
            }(t, e, n) - t) / r
        }

        e.H = h
    }, 76617: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.CAROUSEL_CONTAINER_NAME = void 0, e.CAROUSEL_CONTAINER_NAME = "carousel-container"
    }, 34994: (t, e) => {
        "use strict";
        e.w = void 0, e.w = "partial-container"
    }, 71935: (t, e, n) => {
        "use strict";
        var r, i = (r = function (t, e) {
            return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }, r(t, e)
        }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function n() {
                this.constructor = t
            }

            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", {value: !0}), e.DisplayDetector = void 0;
        var o = n(61296), a = n(6400), s = n(98661), l = n(81558), c = n(89243), u = n(6110).b, d = n(24073),
            p = (0, o.bemClassNamesFactory)("display-detector", {}), f = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.dummyRef = (0, a.createRef)(), e
                }

                return i(e, t), e.prototype.render = function () {
                    return (0, c.useStyles)(d), (0, a.h)("div", {
                        ref: this.dummyRef,
                        className: (0, l.encodeClassNames)(p())
                    })
                }, e.prototype.componentDidMount = function () {
                    var t = this, e = this.dummyRef.current;
                    this.displayObserver = new u((function (e) {
                        e && (t.displayObserver.disconnect(), t.props.onReady())
                    })), this.displayObserver.observe(e)
                }, e.prototype.componentWillUnmount = function () {
                    this.displayObserver && this.displayObserver.disconnect()
                }, e
            }(s.PureComponent);
        e.DisplayDetector = f
    }, 88136: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.YA_CLAMP_HIDDEN = e.YA_CLAMP_DATA_WARNING = e.YA_CLAMP_DATA_AGE = e.YA_CLAMP_DATA_CATEGORY = e.YA_CLAMP_DATA_DOMAIN = e.YA_CLAMP_DATA_TITLE = e.YA_CLAMP_CONTENT = e.YA_CLAMP_CLASSNAME = void 0, e.YA_CLAMP_CLASSNAME = "ya-clamp", e.YA_CLAMP_CONTENT = "yrw-content", e.YA_CLAMP_DATA_TITLE = "data-title", e.YA_CLAMP_DATA_DOMAIN = "data-domain", e.YA_CLAMP_DATA_CATEGORY = "data-category", e.YA_CLAMP_DATA_AGE = "data-age", e.YA_CLAMP_DATA_WARNING = "data-warning", e.YA_CLAMP_HIDDEN = "yrw-clamp-hidden"
    }, 17716: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.DEFAULT_CLICK_ASSET = e.ClickAsset = void 0, e.ClickAsset = {
            image: "image",
            age: "age",
            category: "category",
            button: "button",
            date: "date",
            desc: "desc",
            domain: "domain",
            title: "title",
            warning: "warning",
            address: "address",
            logo: "logo",
            sitelinks: "sitelinks",
            callouts: "callouts",
            phone: "phone",
            favicon: "favicon",
            price: "price",
            discount: "discount",
            reviewCount: "reviewCount",
            rating: "rating",
            appName: "appName",
            appIcon: "appIcon",
            mobileAppButton: "mobileAppButton",
            imageGallery: "imageGallery"
        }, e.DEFAULT_CLICK_ASSET = "container"
    }, 50298: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.AsyncBlock = void 0;
        var r = n(15137), i = n(85225), o = n(49771), a = n(49874), s = n(60669), l = n(57297), c = n(75622),
            u = n(41712), d = function () {
                function t(t) {
                    var e = this, n = t.dependencies, i = t.isOld, s = void 0 !== i && i, d = t.dataSource, p = t.settings,
                        f = t.blockId, h = t.nonce, g = t.pageNumber, v = t.renderParams, m = t.renderTo;
                    this.uniqueId = d.getUniqueId(), this.callbacks = [], this.settings = p, this.isOldBlock = s, this.onCloseCallback = function () {
                        var t;
                        null === (t = d.getCloseCallback()) || void 0 === t || t()
                    };
                    var _ = this.getAdsByLimit(d.getFreeAds());
                    1 === d.getSkipTokenSliderExp() ? d.captureAd(_[0].adId) : (0, r.forEach)(_, (function (t) {
                        return d.captureAd(t.adId)
                    })), this.ads = _, (0, o.loadDependencies)(n).then((function (n) {
                        var i, o = n[0], a = n[1];
                        if ((0, r.forEach)(_, (function (t) {
                            return d.releaseAd(t.adId)
                        })), a) if (d.isInterscroller()) {
                            var s = document.getElementById(m), b = a;
                            b.validateSlot(s) && (e.interscrollerSlot = b.createSlot({
                                node: s,
                                bgColor: p.interscrollerBgColor,
                                animated: p.interscrollerAnimation
                            }), b.prepareInterscrollerOptions(d, s, e.settings), m = e.interscrollerSlot.nodeId, t.renderToNode = e.interscrollerSlot.node)
                        } else if (d.isFloorAd()) e.floorAdSlot = a.createSlot({
                            dataSource: d,
                            settings: p,
                            renderTo: m,
                            darkTheme: d.isForceDarkTheme(),
                            position: d.getPosition()
                        }), e.floorAdSlot.onClose = function () {
                            e.destroy()
                        }, m = e.floorAdSlot.nodeId, t.renderToNode = e.floorAdSlot.node, t.onClose = e.floorAdSlot.close; else if (d.isClosable()) e.closableAdSlot = a.createSlot({
                            dataSource: d,
                            settings: p,
                            renderTo: m
                        }), e.closableAdSlot.onClose = function () {
                            e.destroy()
                        }, m = e.closableAdSlot.nodeId, t.renderToNode = e.closableAdSlot.node, t.onClose = e.closableAdSlot.close; else if ((0, u.isNewFullscreen)(p)) e.fullscreenSlot = a.createSlot(d, {
                            fullscreenDisableTimeout: e.settings.fullscreenDisableTimeout,
                            closeButtonTimeout: (0, l.getFullscreenSettings)(p).duration,
                            theme: (0, c.getFullscreenTheme)(p),
                            onRewarded: d.getRewardedCallback(),
                            onRewardedCount: d.getRewardedCountCallback(),
                            rewarded: e.settings.rewarded,
                            hideProgress: e.settings.rewarded,
                            pendingCloseButtonTimeout: (null === (i = e.settings.pcodeSettings) || void 0 === i ? void 0 : i.pendingCloseButton) || e.settings.fullscreenPendingCloseButtonTimeout,
                            fullscreenEnableTimer: e.settings.fullscreenEnableTimer
                        }), m = e.fullscreenSlot.nodeId, t.renderToNode = e.fullscreenSlot.node; else {
                            var y = (0, l.getFullscreenSettings)(e.settings);
                            e.fullscreenSlot = a.createSlot({
                                closeButtonVisibilityTimeout: y.closeButtonVisibilityTimeout,
                                isRtb: !1
                            }), m = e.fullscreenSlot.nodeId, t.renderToNode = e.fullscreenSlot.node
                        }
                        e.block = e.isOldBlock ? new o(d, p, m, f, h, g, v, t.onClose, t.renderToNode) : new o(t), e.layout = e.block.layout, (0, r.forEach)(e.callbacks, (function (t) {
                            return t()
                        })), e.callbacks = []
                    }))["catch"]((function (t) {
                        return a.logger.error(t, "Bundle loading error")
                    }))
                }

                return t.prototype.getRealBlock = function (t) {
                    var e = this;
                    this.block ? t(this.block) : this.callbacks.push((function () {
                        return t(e.block)
                    }))
                }, t.prototype.renderToContainer = function (t) {
                    this.renderTo(t)
                }, t.prototype.renderTo = function (t, e) {
                    var n = this;
                    void 0 === e && (e = function () {
                    }), this.block ? this.renderBlock(t, e) : this.callbacks.push((function () {
                        n.renderBlock(t, e)
                    }))
                }, t.prototype.initVisibilityChecker = function () {
                    var t = this;
                    this.block ? this.block.initVisibilityChecker() : this.callbacks.push((function () {
                        return t.block && t.block.initVisibilityChecker()
                    }))
                }, t.prototype.destructor = function () {
                    this.destroy()
                }, t.prototype.slideUp = function (t) {
                    this.block && this.block.slideUp(t)
                }, t.prototype.destroy = function () {
                    var t = this, e = this, n = e.fullscreenSlot, r = e.floorAdSlot, i = e.closableAdSlot;
                    n ? (delete n.onClose, n.close()) : r ? r.close() : i ? i.close() : this.block ? this.destroyBlock(this.block) : this.callbacks.push((function () {
                        return t.destroyBlock(t.block)
                    }))
                }, t.prototype.getUsedAdvs = function () {
                    return this.block ? this.block.getUsedAdvs() : this.ads || []
                }, t.prototype.getFloorAdSlot = function () {
                    return this.floorAdSlot
                }, t.prototype.isInViewport = function () {
                    return !!this.block && this.block.isInViewport()
                }, t.prototype.isVisible = function () {
                    return !!this.block && this.block.isVisible()
                }, t.prototype.isVisibilityConfirmed = function () {
                    return !!this.block && this.block.isVisibilityConfirmed()
                }, t.prototype.getAdsByLimit = function (t) {
                    return t.slice(0, this.settings.limit)
                }, t.prototype.renderBlock = function (t, e) {
                    var n = this, r = this, o = r.fullscreenSlot, a = r.interscrollerSlot, c = r.floorAdSlot,
                        d = r.closableAdSlot, p = function () {
                            n.block && (n.destroyBlock(n.block), n.onCloseCallback())
                        };
                    if (o) {
                        var f = (0, l.getFullscreenSettings)(this.settings), h = e, g = i.noop;
                        t = o.node, o.onShow = function () {
                            g = (0, s.addFullscreenListeners)(o.node), (0, u.isNewFullscreen)(n.settings) || o.startCountdown(f.duration, (function () {
                                o.close()
                            })), h()
                        }, o.onClose = function () {
                            g(), p()
                        }, e = function () {
                            return o.show()
                        }
                    }
                    if (a && (t = a.node), c) {
                        var v = e;
                        t = c.node, e = function () {
                            c.show(), v()
                        }, c.onClose = p
                    }
                    if (d) {
                        var m = e;
                        t = d.node, e = function () {
                            d.show(), m()
                        }, d.onClose = p
                    }
                    this.isOldBlock && this.block && this.block.render ? this.block.render() : this.block.renderToContainer(t), e()
                }, t.prototype.destroyBlock = function (t) {
                    t && (t.destroy ? t.destroy() : t.destructor && t.destructor(), this.interscrollerSlot && this.interscrollerSlot.destroy(), delete this.block)
                }, t
            }();
        e.AsyncBlock = d
    }, 17515: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.animationQueue = e.AnimationQueue = void 0;
        var r = n(22886), i = n(94532), o = n(12251), a = function () {
            function t(t) {
                void 0 === t && (t = {}), this.queue = [], this.timer = null, this.runningTask = null;
                var e = t.delay, n = void 0 === e ? 5e3 : e;
                this.delay = n
            }

            return t.prototype.push = function (t) {
                -1 === (0, r.indexOf)(this.queue, t) && (this.queue.push(t), this.start())
            }, t.prototype.remove = function (t) {
                var e = (0, r.indexOf)(this.queue, t);
                if (e > -1) this.queue.splice(e, 1), 0 === this.queue.length && this.stop(); else if (this.isRunningTask(t)) {
                    var n = this.runningTask.next;
                    this.runningTask = null, t.onStop(n)
                }
            }, t.prototype.isRunningTask = function (t) {
                return this.runningTask && t === this.runningTask.task
            }, t.prototype.start = function () {
                null === this.runningTask && null === this.timer && this.sleep()
            }, t.prototype.stop = function () {
                clearTimeout(this.timer), this.runningTask = null, this.timer = null
            }, t.prototype.sleep = function () {
                this.runningTask = null, this.timer = o.protect.setTimeout(this.run, this.delay, this)
            }, t.prototype.run = function () {
                var t = this;
                this.timer = null, this.runningTask = null;
                var e = this.queue.shift();
                e && (this.runningTask = {
                    task: e, next: (0, i.once)((function () {
                        return t.sleep()
                    }))
                }, e.onStart(this.runningTask.next))
            }, t
        }();
        e.AnimationQueue = a, e.animationQueue = new a
    }, 32115: (t, e, n) => {
        "use strict";
        var r = function () {
            return r = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }, r.apply(this, arguments)
        };
        e.g = void 0;
        var i = n(4091), o = n(37579), a = n(41486), s = n(98026), l = n(49874),
            c = (0, o.isNativeSendBeaconSupported)(window), u = function () {
                function t(t, e, n) {
                    var r = this;
                    this.toString = function () {
                        return r.getRedirect()
                    }, this.redirectUrl = t, this.targetUrl = e, this.useSendBeacon = n
                }

                return t.prototype.getRedirect = function () {
                    return new s.Url({host: this.redirectUrl}).getUrl()
                }, t.prototype.shouldUseSendBeacon = function () {
                    return c && (0, a.isString)(this.targetUrl) && Boolean(this.useSendBeacon)
                }, t.prototype.shouldUseIntentLink = function () {
                    return !1
                }, t.prototype.sendViaSendBeacon = function (t, e) {
                    var n = (0, i.extendUrl)(this.getRedirect(), r({beacon: "1"}, t), e), o = new s.Url({host: n}).getUrl();
                    try {
                        window.navigator.sendBeacon(o)
                    } catch (t) {
                        l.logger.error(new Error("Could not send beacon with url ".concat(o)))
                    }
                }, t.prototype.getBeaconWithQueryArg = function () {
                    return new s.Url({host: this.getRedirect(), params: {beacon: 1}}).getUrl()
                }, t.prototype.getTargetUrl = function () {
                    var t = this.shouldUseSendBeacon() ? this.targetUrl : this.redirectUrl;
                    return "".concat(t)
                }, t
            }();
        e.g = u
    }, 13227: (t, e, n) => {
        "use strict";
        var r, i = (r = function (t, e) {
            return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }, r(t, e)
        }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function n() {
                this.constructor = t
            }

            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        e.h = void 0;
        var o = n(73087), a = n(65234), s = n(46466), l = n(44751), c = n(74472), u = n(79562), d = n(85914),
            p = n(49874), f = n(96054), h = n(3936), g = n(66553), v = n(15137), m = n(15735), _ = n(94320),
            b = n(7153), y = n(74192), I = n(64809), A = n(44588);
        var C = function (t) {
            function e(e) {
                var n = t.call(this, e) || this, r = e.uniqueId, i = e.renderTo, o = e.adUsageStorage, a = e.data;
                return n.doOnDestroy((function () {
                    return (0, d.clearMarks)(r)
                })), (0, v.forEach)(function (t) {
                    var e, n = null === (e = (t.seatbid || [])[0]) || void 0 === e ? void 0 : e.bid,
                        r = (0, m.map)(n || [], (function (t) {
                            var e, n, r;
                            return null === (r = null === (n = null === (e = null == t ? void 0 : t.adm) || void 0 === e ? void 0 : e["native"]) || void 0 === n ? void 0 : n.ext) || void 0 === r ? void 0 : r.adId
                        }));
                    return (0, _.filter)(r, (function (t) {
                        return Boolean(t)
                    }))
                }(a), (function (t) {
                    var r = {adId: t, renderTo: e.renderTo.replace("#", "")};
                    o.capture(r), n.doOnDestroy((function () {
                        return o.release(r)
                    }))
                })), (0, d.setMark)(r, d.RenderMarks.DepsLoadStart), A((function (t) {
                    n.doOnDestroy((function () {
                        return t.manager.clearBlock(i)
                    })), (0, d.setMark)(r, d.RenderMarks.ReadyForRendering), t.manager.create(n.prepareWidgetRenderParams()).then((function () {
                        return n.onRender()
                    }))["catch"]((function (t) {
                        var e = (0, c.getPlacement)(n.props.uniqueId);
                        null == e || e.callbacks.triggerAltCallback(t)
                    }))
                }), (function (t) {
                    p.logger.error(t, "Widget bundle loading error")
                })), n
            }

            return i(e, t), e.prototype.prepareWidgetRenderParams = function () {
                var t, e, n = this.props, r = n.blockId, i = n.renderTo, o = n.data, a = n.nonce, s = n.dataSource,
                    l = n.additionalClasses, u = n.darkTheme, d = n.uniqueId, p = n.onHide,
                    h = this.getCorrectSettings(o), g = new f.Testtag({isRefresh: s.isRefreshed()}),
                    v = null === (t = s.getSettings()) || void 0 === t ? void 0 : t.clickMacro;
                return {
                    block: {
                        id: r,
                        render: i,
                        additionalClasses: l,
                        darkTheme: u,
                        hide: p,
                        onClick: function (t) {
                            var e = (0, c.getPlacement)(d);
                            null == e || e.callbacks.triggerOnClick(t)
                        },
                        onVideoInit: null === (e = s.getVideoCallbacks()) || void 0 === e ? void 0 : e.onVideoInit,
                        nonce: a,
                        clickMacro: v
                    }, meta: o, settings: h, additional: {testtag: g, nonce: a}
                }
            }, e.prototype.onRender = function () {
                var t = this.props, e = t.uniqueId, n = t.onRenderCallback;
                (0, d.setMark)(e, d.RenderMarks.ContentfulRender), (0, y.renderingIsCompleted)(e), null == n || n(), (0, u.asyncCollectMarks)(e, this.getRumAdditionals())
            }, e.prototype.getCorrectSettings = function (t) {
                var e = t.settings || {};
                if (!S(e) && !S(e = (0, o.getObjectEntries)(t.settings)[0][1])) {
                    var r = (0, c.getPlacement)(this.props.uniqueId);
                    null == r || r.callbacks.triggerAltCallback();
                    var i = new Error("Widget: \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u043e\u0441\u044c \u0440\u0430\u0441\u043f\u0430\u0440\u0441\u0438\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0431\u043b\u043e\u043a\u0430");
                    p.logger.error(i, "WIDGET_INCORRECT_SETTINGS", {data: n.lv["json"].stringify(t)})
                }
                return e
            }, e.prototype.getRumAdditionals = function () {
                var t, e = this.props, n = e.renderTo, r = e.dataSource, i = e.uniqueId, o = (0, h.findContainer)(n),
                    u = (0, l.parseBlockId)((null === (t = r.getSettings()) || void 0 === t ? void 0 : t.blockId) || "").pageId,
                    d = (0, c.getPlacement)(i), p = (null == d ? void 0 : d.additionals) || {}, f = p.posInQueue,
                    g = p.slotIndex;
                return {
                    type: "native",
                    format: "native",
                    pageId: u,
                    isDocumentHidden: (0, s.isHidden)(),
                    isRefreshed: r.isRefreshed(),
                    containsData: r.isContainsData(),
                    isInViewport: !!o && (0, a.isInViewport)(o, 0),
                    slotIndex: g,
                    posInQueue: f,
                    inApp: r.isApp(),
                    isSsp: (0, I.checkBundleIsSSP)()
                }
            }, e
        }(g.Destroyable);

        function S(t) {
            return !!(0, b.isObject)(t) && Boolean(t.name || t.template || t.css || t.activeTestIds || t.ssr)
        }

        e.h = C
    }, 69631: (t, e, n) => {
        "use strict";
        e.p = function (t) {
            return function () {
                if (!arguments.length) return t;
                for (var e = [], n = 0; n < arguments.length;) {
                    var i = arguments[n++];
                    if ((0, r.isString)(i)) for (var o = i.split(" "), a = 0; a < o.length;) {
                        var s = o[a++];
                        if (s) {
                            var l = s[0];
                            "_" === l || "-" === l ? e.push(t + s) : e.push(s)
                        }
                    }
                }
                return e.join(" ")
            }
        };
        var r = n(41486)
    }, 3936: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.findContainer = void 0, e.findContainer = function (t) {
            if (!(0, n(41486).isString)(t)) return null;
            var e = t.trim();
            if ("#" === e[0]) {
                var r = e.slice(1);
                if (i = document.getElementById(r)) return i
            }
            try {
                var i;
                return i = document.querySelector(t)
            } catch (t) {
                return null
            }
        }
    }, 51657: (t, e, n) => {
        "use strict";
        e.G = void 0;
        var r = function () {
            function t(t) {
                this._uniqueId = t.uniqueId, this._data = t.data || {}, this._isAlternativeCode = Boolean(this._data && this._data.rtb && this._data.rtb.debug), this.dataSource = t.dataSource, this.blockId = t.blockId, this._pageNumber = t.pageNumber, this._renderTo = t.renderTo, this._visibilityManager = t.visibilityManager, this._nonce = t.nonce, this._onHide = t.onHide, this._onRenderCallback = t.onRender || n(85225).noop, this._nativeAdditionalClasses = t.nativeAdditionalClasses, this._darkTheme = t.darkTheme, this._position = t.position, this._mainContId = "ya_partner_" + this.blockId + (t.pageNumber ? "-" + t.pageNumber : ""), this.uniqueId = t.uniqueId, this.visibilitySignal = new (n(43984).ValueSignal)(!1), this.visibilityCheckerSignal = new (n(50773).M), this._adUsageStorage = t.adUsageStorage, this._visibilityConfirmed = !1, this._measurersInitialized = !1, this._protected = this.dataSource.isHTML5(), this._basePath = this._data.rtb && this._data.rtb.basePath, this._isFullscreen = this.dataSource.isFullscreen(), this._isFloorAd = this.dataSource.isFloorAd(), this._isClosable = this.dataSource.isClosable(), this._isInterscroller = this.dataSource.isInterscroller(), this._innerComponents = [], this._stopIframeWindowChecking = null, this._reportingEventEmitterDestructor = null, t.renderParams && (this._horizontalAlign = t.renderParams.horizontalAlign), this._testtag = new (n(98496).a)({
                    isApp: this.dataSource.isApp(),
                    honeypot: Boolean(this.dataSource.getHoneypot())
                })
            }

            return t.prototype.render = function (t) {
                var e = this, r = this.dataSource.getSettings();
                if (n(50880).isMobile && r.videoInComboDesign === n(9248).MORDA_TZAR_SETTINGS_NAME) {
                    var i = "Morda-tzar is forbidden on mobile devices", o = (0, n(74472).getPlacement)(this._uniqueId);
                    return null == o || o.callbacks.triggerError("TOUCH_MORDA_TZAR", i), void n(49874).logger.error(new Error(i))
                }
                var a = "nativeDesign" === r.name || "grid" === r.name;
                this._horizontalAlign = this._horizontalAlign || r.horizontalAlign;
                this._container = (0, n(7234).getContainer)(t, this._nonce, a || this._isFullscreen), "modernAdaptive" === r.name && (this._horizontalAlign = !0), this.dataSource.isInterstitial && (0, n(22130).initMraidCloseButton)(this.dataSource.getSettings());
                var s = [];
                !r.displayDelayed || this._isFullscreen || this._isInterscroller || this._isFloorAd || s.push(this._renderOnVisible()), this._isFullscreen && s.push((0, n(57354).loadNewFullscreenController)()), this._isInterscroller && s.push((0, n(31514).loadInterscrollerController)()), this._isFloorAd && s.push((0, n(12890).loadFloorAdController)()), this._isClosable && s.push((0, n(54559).loadClosableAdController)()), this.dataSource.needLoadingSSP() && s.push(this.dataSource.loadHtml()), s.length ? Promise.all(s).then((function () {
                    return e._renderBlock()
                }))["catch"]((function (t) {
                    n(49874).logger.error(t, "RtbBlock_render_async")
                })) : this._renderBlock()
            }, t.prototype._renderOnVisible = function () {
                var t = this;
                return new Promise((function (e) {
                    var r = (0, n(12251).protect)(n(12251).ProtectedNames.RTB + " container visible", (function () {
                        e()
                    }));
                    t._containerVisibilityConfirmer = new (n(72233).VisibilityConfirmer)({
                        element: t._container,
                        portion: 0,
                        confirmations: [{delay: 0, onConfirm: r}]
                    })
                }))
            }, t.prototype.destructor = function () {
                var t = this.fullscreenSlot;
                t && (delete t.onClose, t.close());
                var e = this.interscrollerSlot;
                e && e.destroy();
                var r = this.closableAdSlot;
                r && r.close();
                var i = this.floorAdSlot;
                i && i.close(), this._clearComponents(), this._containerVisibilityConfirmer && this._containerVisibilityConfirmer.stop(), this._contentVisibilityChecker && this._contentVisibilityChecker.stop(), this._visibilityConfirmer && this._visibilityConfirmer.stop(), this._renderConfirmer && this._renderConfirmer.stop(), this._stopIframeWindowChecking && (this._stopIframeWindowChecking(), this._stopIframeWindowChecking = null), this._reportingEventEmitterDestructor && this._reportingEventEmitterDestructor(), this._measurersInitialized && ((0, n(79026).sV)(this._mainContId), this._measurersInitialized = !1)
            }, t.prototype._clearComponents = function () {
                (0, n(15137).forEach)(this._innerComponents, (function (t) {
                    t.destructor ? t.destructor() : t.destroy && t.destroy()
                })), this._innerComponents = []
            }, t.prototype._renderBlock = function () {
                this._isInPage() ? this.renderInPage() : this._isWidget() ? this.renderWidget() : this.dataSource.isInlineSSP() && "exp" !== (0, n(88772).useExperimentFlag)("USE_FRIENDLY_FRAME_IN_SSP") ? this.renderInline() : this.renderBlock()
            }, t.prototype.renderBlock = function () {
                var t = this, e = this.dataSource.getSettings();
                this._isFullscreen ? (0, n(57354).loadNewFullscreenController)((function (r) {
                    var i, o = r.createSlot(t.dataSource, {
                        fullscreenDisableTimeout: e.fullscreenDisableTimeout,
                        closeButtonTimeout: (0, n(57297).getFullscreenSettings)(e).duration,
                        theme: "black",
                        rewarded: e.rewarded,
                        onRewarded: t.dataSource.getRewardedCallback(),
                        onRewardedCount: t.dataSource.getRewardedCountCallback(),
                        pendingCloseButtonTimeout: (null === (i = null == e ? void 0 : e.pcodeSettings) || void 0 === i ? void 0 : i.pendingCloseButton) || e.fullscreenPendingCloseButtonTimeout,
                        fullscreenEnableTimer: e.fullscreenEnableTimer
                    });
                    o && (t.fullscreenSlot = o, t.fullscreenSlot.onClose = function () {
                        t._onClose()
                    }, t._container = t.fullscreenSlot.node), t.renderBanner()
                })) : this._isInterscroller ? (0, n(31514).loadInterscrollerController)((function (n) {
                    var r = e.interscrollerAnimation, i = void 0 === r || r;
                    t.interscrollerSlot = n.createSlot({
                        node: t._container,
                        mediaSize: t.dataSource.getSize(),
                        bgColor: e.interscrollerBgColor,
                        animated: i
                    }), t._container = t.interscrollerSlot.node, t.renderBanner()
                })) : this._isFloorAd ? (0, n(12890).loadFloorAdController)((function (e) {
                    t.floorAdSlot = e.createSlot({
                        darkTheme: t._darkTheme,
                        position: t._position
                    }), t.floorAdSlot.onClose = function () {
                        t._onClose()
                    }, t._container = t.floorAdSlot.node, t.renderBanner()
                })) : this._isClosable ? (0, n(54559).loadClosableAdController)((function (r) {
                    var i = (0, n(74472).getPlacement)(t._uniqueId);
                    t.closableAdSlot = r.createSlot({
                        renderTo: null == i ? void 0 : i.renderTo,
                        dataSource: t.dataSource,
                        settings: e
                    }), t.closableAdSlot.onClose = function () {
                        t._onClose()
                    }, t._container = t.closableAdSlot.node, t.renderBanner()
                })) : this.renderBanner()
            }, t.prototype.renderWidget = function () {
                var t = this, e = this._data, r = e.seatbid, i = e.settings, o = e.common, a = e.rtbAuctionInfo,
                    s = function () {
                        t._visibilityConfirmed = !0, n(62570).refresher.confirm(t._uniqueId)
                    }, l = {
                        blockId: this.blockId,
                        renderTo: this._renderTo,
                        data: {seatbid: r, settings: i, common: o, rtbAuctionInfo: a},
                        nonce: this._nonce,
                        onRenderCallback: function () {
                            t._createVisibilityConfirmation(t._container, s), t._onRenderCallbackCall(), t._sendAdbConfirmEvent()
                        },
                        onHide: this._onHide,
                        adUsageStorage: this._adUsageStorage,
                        pageNumber: this._pageNumber,
                        additionalClasses: this._nativeAdditionalClasses,
                        darkTheme: this._darkTheme,
                        uniqueId: this.uniqueId,
                        dataSource: this.dataSource
                    }, c = new (n(13227).h)(l);
                this._innerComponents.push(c)
            }, t.prototype.renderInline = function () {
                var t = this, e = this.getBasePath(), r = this.dataSource.getSize(),
                    i = (0, n(35525).S)(this._container, {
                        html: this.dataSource.getHtml(),
                        basePath: e,
                        id: this._mainContId,
                        dataSource: this.dataSource,
                        nonce: this._nonce,
                        width: r[0],
                        height: r[1],
                        encodeStyles: !0,
                        isSocialAdvertising: (0, n(25154).hasSocialAdvertisingFlag)(this.dataSource.getSettings().bannerFlags),
                        isBusinessUnit: (0, n(25154).hasBusinessUnitFlag)(this.dataSource.getSettings().bannerFlags),
                        onError: function (e) {
                            e.stack = "".concat(t.dataSource.getUrl(), " :: ").concat(e.stack), n(49874).logger.error(e, "SSPInlineError"), t._contentVisibilityChecker && t._contentVisibilityChecker.stop()
                        },
                        onAdtuneClose: function (e) {
                            var n, r, i, o;
                            e && (null === (r = null === (n = t.floorAdSlot) || void 0 === n ? void 0 : n.close) || void 0 === r || r.call(n)), e && (null === (o = null === (i = t.closableAdSlot) || void 0 === i ? void 0 : i.close) || void 0 === o || o.call(i))
                        }
                    });
                this.afterRender(document.body), this._onRender(document.body), this._innerComponents.push(i), this._onRenderCallbackCall()
            }, t.prototype.renderBanner = function () {
                var t = this, e = this.getUrl(), r = this.getBasePath(), i = (0, n(67234).R)(this._container, {
                    encodeStyles: !0,
                    id: this._mainContId,
                    renderToNode: this._container,
                    nonce: this._nonce,
                    visibilitySignal: this.visibilitySignal,
                    visibilityCheckerSignal: this.visibilityCheckerSignal,
                    url: e,
                    html: this.dataSource.getHtml(),
                    basePath: r,
                    protect: this._protected,
                    dataSource: this.dataSource,
                    testtag: this._testtag,
                    alternativeCode: this._isAlternativeCode,
                    horizontalAlign: this._horizontalAlign,
                    ssr: this.dataSource.isSSR(),
                    isSocialAdvertising: (0, n(25154).hasSocialAdvertisingFlag)(this.dataSource.getSettings().bannerFlags),
                    isBusinessUnit: (0, n(25154).hasBusinessUnitFlag)(this.dataSource.getSettings().bannerFlags),
                    onReady: function () {
                        t.afterRender()
                    },
                    onRender: function () {
                        t._onRender()
                    },
                    onError: function (e, r, i, o) {
                        n(49874).logger.error(e, r || e.name || "UnknownRtbBlockError", i, o), t._contentVisibilityChecker && t._contentVisibilityChecker.stop(), t._visibilityConfirmed = !0, n(62570).refresher.confirm(t._uniqueId)
                    },
                    onAdtuneClose: function (e) {
                        var n, r, i, o;
                        e && (null === (r = null === (n = t.floorAdSlot) || void 0 === n ? void 0 : n.close) || void 0 === r || r.call(n)), e && (null === (o = null === (i = t.closableAdSlot) || void 0 === i ? void 0 : i.close) || void 0 === o || o.call(i))
                    }
                });
                this._innerComponents.push(i), this._onRenderCallbackCall()
            }, t.prototype.renderInPage = function () {
                var t, e, r, i = this, o = this._data.rtb, a = o.vastBase64, s = o.vast, l = o.data_params, c = o.ssr,
                    u = this.dataSource.getSettings();
                if (!c && !(0, n(84330).isMainPage)(u)) return u.floorAd ? void n(49874).logger.logGogolEvent({
                    name: "VideoInComboFloorAd_NotSSRed",
                    data: {
                        dataParams: l,
                        csrReason: this._data.common && this._data.common.csrReason,
                        vast: Boolean(s),
                        vastBase64: Boolean(a),
                        screenWidth: screen.width,
                        screenHeight: screen.height,
                        ua: navigator.userAgent
                    },
                    sensors: {},
                    values: {}
                }) : void n(49874).logger.logGogolEvent({
                    name: "IMPORTANT_INPAGE_NOT_SSRED",
                    data: {
                        dataParams: l,
                        csrReason: this._data.common && this._data.common.csrReason,
                        vast: Boolean(s),
                        vastBase64: Boolean(a)
                    },
                    sensors: {},
                    values: {}
                });
                var d = u.width, p = u.height, f = u.adsdkPlayer;
                f && (delete f.insertAfter, delete f.insertPosition);
                var h = new (n(22374).q)({
                    inpageProps: {
                        vastBase64: a,
                        vast: s,
                        width: d,
                        height: p,
                        uniqueId: this._uniqueId,
                        blockId: this.blockId,
                        renderToNode: this._container,
                        nonce: this._nonce,
                        backgroundScale: [1, -1],
                        encodeStyles: !0,
                        settings: this.dataSource.getSettings(),
                        horizontalAlign: this._horizontalAlign,
                        playerConfig: f,
                        onRewarded: this.dataSource.getRewardedCallback(),
                        onRewardedCount: this.dataSource.getRewardedCountCallback(),
                        onHide: this.dataSource.getHideCallback(),
                        videoCallbacks: this.dataSource.getVideoCallbacks(),
                        dataSource: this.dataSource,
                        dataParams: l,
                        isVisible: function () {
                            return i.isVisible()
                        },
                        renderId: (0, n(8990).getRenderId)({
                            blockId: this.blockId,
                            pageNumber: this._pageNumber,
                            renderTo: this._container
                        }),
                        lang: null !== (r = null === (e = null === (t = this._data) || void 0 === t ? void 0 : t.common) || void 0 === e ? void 0 : e.pageLang) && void 0 !== r ? r : void 0,
                        productType: this._data.common && this._data.common.productType,
                        darkTheme: Boolean(this._darkTheme),
                        onRender: function () {
                            return i._onRenderCallbackCall()
                        },
                        ssr: c
                    }, onAdInit: function (t) {
                        return i._onRender(t)
                    }
                });
                this._innerComponents.push(h)
            }, t.prototype.initMovementChecking = function (t, e) {
                var n = t.contentWindow, r = function () {
                    return clearInterval(i)
                }, i = setInterval((function () {
                    n && t.contentWindow && n !== t.contentWindow && (r(), e())
                }), 150);
                return r
            }, t.prototype.afterRender = function (t) {
                var e = this;
                if (void 0 === t && (t = this._container), this._createVisibilityChecker(t), this._visibilityManager.sendWinNotice(), "exp" === (0, n(88772).useExperimentFlag)("MEDIA_INIT_TIMEOUT_EXP")) {
                    var r = (0, n(88772).useExperimentFlag)("MEDIA_INIT_TIMEOUT_VALUE");
                    this._initVisibilityConfirmationTimeout = setTimeout((function () {
                        return e._initVisibilityConfirmation(t)
                    }), r || 0)
                }
            }, t.prototype.getUrl = function () {
                var t = this.dataSource.getUrl();
                if (t) {
                    var e = t;
                    return 0 === e.indexOf("//") && (e = window.location.protocol + t), new (n(98026).Url)({
                        host: e,
                        params: {click_macro: this.dataSource.getSettings().clickMacro}
                    }).getUrl()
                }
            }, t.prototype.getFloorAdSlot = function () {
                return this.floorAdSlot
            }, t.prototype.getBasePath = function () {
                var t = window.location.host;
                return new (n(98026).Url)({
                    host: this._protected && this._basePath ? this._basePath : "".concat("https:", "//").concat(t),
                    params: {click_macro: this.dataSource.getSettings().clickMacro, ssp_id: this.dataSource.getSSPId()}
                }).getUrl()
            }, t.prototype._initVisibilityConfirmation = function (t) {
                if (void 0 === t && (t = this._container), this._visibilityManager._isConfirmSent) return this._visibilityConfirmed = !0, void n(62570).refresher.confirm(this._uniqueId);
                this._createVisibilityConfirmation(t)
            }, t.prototype._createVisibilityConfirmation = function (t, e) {
                var r = this;
                if (!this._visibilityConfirmer) {
                    clearTimeout(this._initVisibilityConfirmationTimeout);
                    var i = (0, n(7234).getVisibilityContainer)(t),
                        o = (0, n(12251).protect)("visibility confirmer: rtb", (e || this.confirmVisibility).__pbind(this, i)),
                        a = this.dataSource.getSettings().reach, s = this.dataSource.generateActiveTestIds(),
                        l = (0, n(88772).useExperimentFlag)("DISABLE_HOVER_VISIBILITY");
                    if (this._visibilityConfirmer = (0, n(32147).NP)({
                        element: i,
                        autostart: !0,
                        trackings: this.dataSource && this.dataSource.getSettings(),
                        delay: this.dataSource ? this.dataSource.getVisibilityTime() : void 0,
                        onVisible: o,
                        confirmOnHover: !a && "rtb" !== l,
                        query: {
                            "media-test-tag": this.dataSource.getMediaTesttag(),
                            "pcode-test-ids-from-count": this.dataSource.isApp() || (0, n(64809).checkBundleIsSSP)() ? (0, n(56240).getUaasConfig)().testIds : void 0,
                            "pcode-active-testids": s || void 0
                        }
                    }), "revert" !== (0, n(88772).useExperimentFlag)("COUNTER_TYPE_3") && (this._isWidget() || (this._renderConfirmer = (0, n(32147).NP)({
                        element: i,
                        portion: 0,
                        autostart: !0,
                        delay: 0,
                        confirmOnHover: "ct3" !== l,
                        onVisible: function () {
                            var t = r.dataSource.getSettings().renderLinkTail;
                            t && (0, n(83009).sendConfirm)({src: (0, n(32147).FW)(t)})
                        }
                    }))), "10500" === this.dataSource.getSSPId()) {
                        var c = (0, n(88772).useExperimentFlag)("CONFIRM_BY_RENDER_FOR_PREBID") || "default";
                        (0, n(9809).logSSPEvent)("SSP_CONFIRM_BY_RENDER:".concat(c), this.dataSource.getRawData()), "exp" === c && this._visibilityConfirmer.confirm()
                    }
                }
            }, t.prototype._createVisibilityChecker = function (t) {
                var e = this, r = this.dataSource.isInlineSSP();
                this._contentVisibilityChecker = new (n(72233).VisibilityConfirmer)({
                    portion: 0,
                    element: t,
                    onVisibilityChange: function (i) {
                        try {
                            var o = n.lv["json"].stringify({action: "pcode:" + (i ? "visible" : "invisible")});
                            if (e.visibilitySignal.dispatch(i), r) window.postMessage(o, "*"); else {
                                var a = (0, n(59020).R)("iframe", t);
                                a && a[0] && a[0].contentWindow && a[0].contentWindow.postMessage(o, "*")
                            }
                        } catch (t) {
                            0
                        }
                    }
                })
            }, t.prototype.confirmVisibility = function (t, e, r) {
                this._visibilityConfirmed = !0, n(62570).refresher.confirm(this._uniqueId), this._visibilityManager.confirm({
                    testtagProps: this._testtag.getProps(),
                    renderSize: this.getBlockSize(),
                    extParams: {confirmTime: e, confirmRatio: (0, n(49018).getVisibilityRatio)(t)}
                }, r), this.dataSource.isRenderData() ? (0, n(9809).logSSPEvent)("SSP_EXP_VISIBILITY_CONFIRM_RTB", this._data) : (0, n(64809).checkBundleIsSSP)() && (0, n(9809).logSSPEvent)("SSP_CTRL_VISIBILITY_CONFIRM_RTB", this._data), this.visibilityCheckerSignal.dispatch({confirmTime: e})
            }, t.prototype.isVisibilityConfirmed = function () {
                return this._visibilityConfirmed
            }, t.prototype.isInViewport = function () {
                return !!(0, n(5989).getElementById)(this._mainContId) && (0, n(65234).isInViewport)(this._container, n(49573).REFRESH_VIEWPORT_VISIBLE_PART)
            }, t.prototype.isVisible = function () {
                return !!this._visibilityConfirmer && this._visibilityConfirmer.getIsVisible()
            }, t.prototype._isInPage = function () {
                var t = this._data.rtb, e = void 0 === t ? {} : t, n = e.vastBase64, r = e.vast;
                return Boolean(n || r)
            }, t.prototype._isWidget = function () {
                var t = this._data.seatbid;
                return Boolean(t)
            }, t.prototype.getRtbData = function () {
                return this._data.rtb
            }, t.prototype.slideUp = function (t) {
                (0, n(71955).slideUp)(this._container, t)
            }, t.prototype.getBlockSize = function () {
                return (0, n(87291).getElementRectSize)(this._container)
            }, t.prototype.getTesttag = function () {
                return this._testtag.toString()
            }, t.prototype._onRender = function (t) {
                var e = this;
                void 0 === t && (t = this._container), this._initVisibilityConfirmation(t), this._initMeasurers(t.children[0] || t);
                var r = this._container.querySelector("iframe");
                if (r && (this._stopIframeWindowChecking || (this._stopIframeWindowChecking = this.initMovementChecking(r, (function () {
                    e._stopIframeWindowChecking = null, e.destructor();
                    e.render(e._container)
                }))), "exp" === (0, n(88772).useExperimentFlag)("CALL_ONRENDER_AFTER_IFRAME_LOADED") ? (0, n(57979)._)(r) : !r.src)) {
                    var i = this.dataSource.getSettings();
                    this._reportingEventEmitterDestructor = (0, n(69100).createReportingEventEmitter)({
                        window: r.contentWindow,
                        params: {bannerIds: i.bannerIds}
                    })
                }
                this._sendAdbConfirmEvent()
            }, t.prototype._onRenderCallbackCall = function () {
                var t = this, e = this.fullscreenSlot || this.floorAdSlot || this.closableAdSlot,
                    r = (0, n(74472).getPlacement)(this._uniqueId);
                if (e) {
                    if (this.fullscreenSlot && (null == r ? void 0 : r.additionals.isPreload)) return e.onShow = function () {
                        return t._onRenderCallback()
                    }, void e.show();
                    e.show()
                }
                this._onRenderCallback()
            }, t.prototype._initMeasurers = function (t) {
                if (!this._measurersInitialized) {
                    var e = this.dataSource.getSettings().measurers || {};
                    (0, n(79026).tO)({
                        id: this._mainContId,
                        container: t,
                        nonce: this._nonce,
                        config: e
                    }), this._measurersInitialized = !0
                }
            }, t.prototype._onClose = function () {
                this.dataSource.getCloseCallback()(), delete this.fullscreenSlot, this.destructor()
            }, t.prototype._sendAdbConfirmEvent = function () {
            }, t
        }();
        e.G = r
    }, 82551: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.adaptive0418Blocks = void 0, e.adaptive0418Blocks = {
            modernAdaptive: {
                measurer: "modernAdaptive",
                limit: 1
            }, horizontal: {measurer: "horizontal", advMinSquare: 55e3}, adaptive: {measurer: "adaptive"}
        }
    }, 3573: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.ASSOCIATED_BLOCKS = void 0, e.ASSOCIATED_BLOCKS = {
            ssr: [n(34688).SSR, {}],
            ssrZen2: [n(34688).ZEN2, {}],
            ssrZen2Gallery: [n(34688).ZEN2, {}]
        }
    }, 4114: (t, e, n) => {
        "use strict";
        e.a = void 0, e.a = function (t, e) {
            var r = "exp" === (0, n(88772).useExperimentFlag)("BOUNCES_EXP"),
                i = (0, n(88772).useExperimentFlag)("BOUNCES_EXP_BLOCKS_WHITELIST") || "",
                o = "exp" === (0, n(88772).useExperimentFlag)("BOUNCES_EXP_ONLY_TOUCH"), a = (0, n(88285).$)(window),
                s = !e || (0, n(88772).useExperimentFlag)(e) && "ctl" !== (0, n(88772).useExperimentFlag)(e);
            return r && s && (!o || a) && (!i || i.includes(t))
        }
    }, 35909: (t, e, n) => {
        "use strict";
        var r, i = (r = function (t, e) {
            return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }, r(t, e)
        }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function n() {
                this.constructor = t
            }

            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }), o = function () {
            return o = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }, o.apply(this, arguments)
        }, a = function (t, e, n, r) {
            return new (n || (n = Promise))((function (i, o) {
                function a(t) {
                    try {
                        l(r.next(t))
                    } catch (t) {
                        o(t)
                    }
                }

                function s(t) {
                    try {
                        l(r["throw"](t))
                    } catch (t) {
                        o(t)
                    }
                }

                function l(t) {
                    var e;
                    t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function (t) {
                        t(e)
                    }))).then(a, s)
                }

                l((r = r.apply(t, e || [])).next())
            }))
        }, s = function (t, e) {
            var n, r, i, o, a = {
                label: 0, sent: function () {
                    if (1 & i[0]) throw i[1];
                    return i[1]
                }, trys: [], ops: []
            };
            return o = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
                return this
            }), o;

            function s(o) {
                return function (s) {
                    return function (o) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; a;) try {
                            if (n = 1, r && (i = 2 & o[0] ? r["return"] : o[0] ? r["throw"] || ((i = r["return"]) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return a.label++, {value: o[1], done: !1};
                                case 5:
                                    a.label++, r = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < i[1]) {
                                        a.label = i[1], i = o;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2], a.ops.push(o);
                                        break
                                    }
                                    i[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            o = e.call(t, a)
                        } catch (t) {
                            o = [6, t], r = 0
                        } finally {
                            n = i = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {value: o[0] ? o[1] : void 0, done: !0}
                    }([o, s])
                }
            }
        };
        e.h = void 0;
        var l = "light", c = "dark", u = function (t) {
            function e(e) {
                var r = t.call(this, e) || this;
                r.isAdtuneOpened = !1, r.clickConfirmationInitTime = 0, r.lastScrollTimestamp = 0, r.isClickConfirmationOpened = !1;
                var i = r.props, o = i.rootNode, a = i.adv, s = o.querySelector("[data-close]");
                if (r.bannerNode = o.querySelector('[data-name="adaptiveConstructorAd"]'), a.iconUrl) {
                    var c = o.querySelector("[data-favicon]") || void 0;
                    c && (c.onerror = function () {
                        n(49874).logger.traceLog({}, "ICON_URL_LOAD_ERROR", 100);
                        var t = (0, n(33671).getFavicon)({punyDomain: a.punyDomain, size: 32});
                        t && c.setAttribute("src", t)
                    })
                }
                return s && (r.crossBtnNode = s, r.crossBtnVariant = s.dataset.close || l, s.removeAttribute("data-close")), r.prepareLinks(), r.props.dataSource.captureAd(r.props.adv.adId), r.doOnDestroy((function () {
                    return r.props.dataSource.releaseAd(r.props.adv.adId)
                })), r
            }

            return i(e, t), e.prototype.initClientCode = function () {
                this.initListeners();
                var t = this.props, e = t.rootNode, r = t.blockNode, i = t.adv, o = t.dataSource, a = t.salt,
                    s = i.abuseUrl, l = i.vastBase64, c = i.callUrl, u = i.vast, d = i.url, p = i.hitLogId,
                    f = i.settings, h = i.videoWidth, g = i.videoHeight,
                    v = {renderSize: (0, n(87291).getElementRectSize)(this.props.blockNode)}, m = o.getAuxParams(i, v),
                    _ = o.getClickMacro(), b = (0, n(98163).t)(window, _),
                    y = (0, n(25021).isPositiveFiniteNumber)(h) && (0, n(25021).isPositiveFiniteNumber)(g) ? {
                        width: h,
                        height: g
                    } : void 0;
                this.initClientCodeController(e, r, i, f, (function () {
                    return o
                }), {
                    abuseUrl: s,
                    vastBase64: l,
                    vast: u,
                    urlParams: m,
                    callUrl: c ? c.toString() : void 0,
                    salt: a,
                    url: d,
                    hitLogId: p,
                    clickMacro: b ? _ : void 0,
                    videoContentSize: y
                })
            }, e.prototype.initListeners = function () {
                var t = null, e = !1;

                function r() {
                    null !== t && (clearTimeout(t), t = null)
                }

                this.doOnDestroy(r), this.addEventListener(this.props.rootNode, "click", this.handleClick), this.addEventListener(this.props.rootNode, "mouseover", (function () {
                    var r = this;
                    null === t && (t = n(12251).protect.setTimeout((function () {
                        e || (e = !0, r.props.onConfirmHover())
                    }), 300))
                })), this.addEventListener(this.props.rootNode, "mouseleave", r), this.bouncesExpScrollListener()
            }, e.prototype.initClickConfirmation = function () {
                (this.props.dataSource.getClickConfirmation() || {}).timeout && (this.clickConfirmationInitTime = Date.now())
            }, e.prototype.handleClick = function (t) {
                var e, r,
                    i = Boolean(t.target && (null === (e = t.target.dataset) || void 0 === e ? void 0 : e.sociallabel));
                if (this.isAdtuneOpened || this.isClickConfirmationOpened || i) return i && (0, n(42009).open)(null === (r = t.target.dataset) || void 0 === r ? void 0 : r.url), void t.stopPropagation();
                if (this.crossBtnNode && t.target === this.crossBtnNode) this.handleClickCrossBtn(t); else {
                    if (this.clickConfirmationInitTime && (0, n(86301).getLinkTarget)(t.target)) {
                        var o = this.props.dataSource.getClickConfirmation() || {}, a = o.timeout,
                            s = void 0 === a ? 0 : a, l = o.needConfirmation;
                        if (Date.now() - this.clickConfirmationInitTime < s) return t.preventDefault(), t.stopPropagation(), void (l ? this.showClickConfirmation() : this.clickConfirmationInitTime = 0);
                        this.clickConfirmationInitTime = 0
                    }
                    this.bouncesExpClickCheck(t), this.performClick(t)
                }
            }, e.prototype.bouncesExpClickCheck = function (t) {
                var e = (0, n(4114).a)(this.props.dataSource.getBlockId(), "BOUNCES_EXP_OFF_IMAGE") && Boolean((0, n(82478).oq)(t.target, '[data-asset-click="image"]')),
                    r = (0, n(4114).a)(this.props.dataSource.getBlockId(), "BOUNCES_EXP_AFTER_SCROLL") && this.lastScrollTimestamp && Date.now() - this.lastScrollTimestamp < Number((0, n(88772).useExperimentFlag)("BOUNCES_EXP_AFTER_SCROLL"));
                if (e || r) return t.preventDefault(), void t.stopPropagation()
            }, e.prototype.bouncesExpScrollListener = function () {
                var t = this;
                if ((0, n(4114).a)(this.props.dataSource.getBlockId(), "BOUNCES_EXP_AFTER_SCROLL")) {
                    var e = (0, n(37598).throttle)((function () {
                        t.lastScrollTimestamp = Date.now()
                    }), 1e3);
                    window.addEventListener("scroll", e, !0), this.doOnDestroy((function () {
                        window.removeEventListener("scroll", e, !0)
                    }))
                }
            }, e.prototype.performClick = function (t) {
                var e, r, i = this.props, o = i.adv, a = i.dataSource, s = i.blockNode,
                    l = null === (r = null === (e = (0, n(82478).Ze)(t.target, "data-asset-click")) || void 0 === e ? void 0 : e.dataset) || void 0 === r ? void 0 : r.assetClick,
                    c = {renderSize: (0, n(87291).getElementRectSize)(s), assetClick: l}, u = a.getAuxParams(o, c);
                (0, n(86301).handleClick)(t, o.url, u, a), a.trackClick(o, {onReturnCallback: this.handleSurveyFastClick.__pbind(this)})
            }, e.prototype.handleSurveyFastClick = function (t) {
                var e = this.props.blockNode;
                if (!(t > 1e4)) {
                    var r = ((0, n(65421).getElementsByData)("name", "bannerSurvey", e) || [])[0];
                    if (r) if (null !== r.getAttribute("data-should-visible-after-return")) {
                        var i = r.getAttribute("data-surveyId") || "", o = r.getAttribute("data-after-returning-class");
                        n(49874).logger.traceLog({
                            type: "showSurvey",
                            surveyId: i
                        }, "BANNER_SURVEY", 100), o && r.classList.add(o)
                    }
                }
            }, e.prototype.setAdtuneIndent = function () {
                var t;
                if ("true" === (null === (t = this.crossBtnNode.dataset) || void 0 === t ? void 0 : t.stickyAdtune)) {
                    var e = this.props.rootNode.getBoundingClientRect(), n = this.crossBtnNode.getBoundingClientRect();
                    this.adtuneIndent = {
                        top: (n.top - e.top).toFixed() + "px !important",
                        right: (e.right - n.right).toFixed() + "px !important"
                    }
                }
            }, e.prototype.handleClickCrossBtn = function (t) {
                var e = this;
                t.preventDefault(), t.stopPropagation();
                var r = this.props, i = r.adv, a = r.dataSource, s = i.abuseUrl, l = a.getLanguage(),
                    u = a.getSettings(), d = (0, n(64809).checkBundleIsSSP)(),
                    p = !1 !== (null == u ? void 0 : u.bannerBorder),
                    f = (0, n(25154).hasSocialAdvertisingFlag)(i.bannerFlags), h = i.url.toString(),
                    g = (0, n(17172).prettify)(i.warning, {softBreakPunct: !1}),
                    v = (0, n(33397).getAdvertiserInfoUrl)(s), m = a.getAppName(i);
                this.setAdtuneIndent(), (0, n(41073).showAdtune)(this.props.rootNode, {
                    useNewAdtuneAndKebab: !0,
                    abuseUrl: s,
                    language: l,
                    darkTheme: a.isForceDarkTheme(),
                    hasBackground: this.crossBtnVariant === c,
                    hasBorders: !p,
                    bigCross: Boolean(this.crossBtnNode.dataset.bigCross),
                    rowSize: this.crossBtnNode.dataset.rowSizeKebab,
                    callback: function (t) {
                        return e.closeAdtune(t)
                    },
                    onScreenRender: function (t) {
                        var n = t.size;
                        e.adtuneSize = n, e.changeBannerVisibility("none"), e.changeKebabVisibility("off")
                    },
                    type: f ? "social" : "default",
                    indent: this.adtuneIndent ? this.adtuneIndent : void 0,
                    copyLink: h,
                    warning: g,
                    advertiserInfoLink: v,
                    hideAbout: d,
                    hideAdvertiserInfo: d,
                    showBug: a.hasShowBug(),
                    isExternalDsp: a.isExternalDsp(),
                    appName: m
                }, {
                    nonce: this.props.nonce,
                    zIndexFix: !0,
                    data: o({blockId: null == u ? void 0 : u.blockId, bannerId: i.adId}, a.getBugData())
                }), this.isAdtuneOpened = !0
            }, e.prototype.closeAdtune = function (t) {
                this.isAdtuneOpened = !1, this.changeBannerVisibility("block"), this.changeKebabVisibility("on"), t && this.props.onClose && this.props.onClose()
            }, e.prototype.changeKebabVisibility = function (t) {
                this.crossBtnNode && ("on" === t ? this.crossBtnNode.style.removeProperty("display") : this.crossBtnNode.style.display = "none")
            }, e.prototype.changeBannerVisibility = function (t) {
                this.bannerNode && "micro" === this.adtuneSize && (this.bannerNode.style.opacity = "none" === t ? "0" : "1")
            }, e.prototype.prepareLinks = function () {
                var t = this.props, e = t.adv, r = t.dataSource, i = t.rootNode, o = r.getClickMacro(),
                    a = (0, n(98163).t)(window, o), s = (0, n(66779).listToArray)(i.querySelectorAll("a")),
                    l = {renderSize: (0, n(87291).getElementRectSize)(this.props.blockNode)};
                (0, n(15137).forEach)(s, (function (t) {
                    var i = t.href;
                    if (0 !== i.indexOf("tel:") && !(0, n(82478).Ze)(t, "data-collection-link")) {
                        var s = (0, n(4091).extendUrl)(i, r.getAuxParams(e, l));
                        i = a ? "".concat(o).concat(encodeURIComponent(s)) : s, t.href = i
                    }
                }))
            }, e.prototype.showClickConfirmation = function () {
                return a(this, void 0, void 0, (function () {
                    var t, e, r, i, o, a = this;
                    return s(this, (function (s) {
                        return this.isClickConfirmationOpened || (t = this.props, e = t.adv, r = t.dataSource, i = r.getLanguage(), o = (0, n(20697).getElementInnerSize)(this.props.rootNode), (0, n(69206).showClickConfirmation)(this.props.rootNode, {
                            size: o,
                            language: i,
                            url: e.url,
                            cancelCallback: function (t) {
                                t.stopPropagation(), a.isClickConfirmationOpened = !1
                            },
                            confirmCallback: function (t) {
                                t.stopPropagation(), a.isClickConfirmationOpened = !1, a.performClick(t)
                            }
                        }, this.props.nonce), this.isClickConfirmationOpened = !0), [2]
                    }))
                }))
            }, e
        }(n(66553).Destroyable);
        e.h = u
    }, 93128: (t, e, n) => {
        "use strict";
        var r, i = (r = function (t, e) {
            return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }, r(t, e)
        }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function n() {
                this.constructor = t
            }

            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        e.n = void 0;
        var o = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return i(e, t), e.prototype.getVisibleItems = function () {
                return null
            }, e
        }(n(66553).Destroyable);
        e.n = o
    }, 83255: (t, e, n) => {
        "use strict";
        var r, i = (r = function (t, e) {
            return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }, r(t, e)
        }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function n() {
                this.constructor = t
            }

            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }), o = function () {
            return o = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }, o.apply(this, arguments)
        }, a = function (t, e, n, r) {
            return new (n || (n = Promise))((function (i, o) {
                function a(t) {
                    try {
                        l(r.next(t))
                    } catch (t) {
                        o(t)
                    }
                }

                function s(t) {
                    try {
                        l(r["throw"](t))
                    } catch (t) {
                        o(t)
                    }
                }

                function l(t) {
                    var e;
                    t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function (t) {
                        t(e)
                    }))).then(a, s)
                }

                l((r = r.apply(t, e || [])).next())
            }))
        }, s = function (t, e) {
            var n, r, i, o, a = {
                label: 0, sent: function () {
                    if (1 & i[0]) throw i[1];
                    return i[1]
                }, trys: [], ops: []
            };
            return o = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
                return this
            }), o;

            function s(o) {
                return function (s) {
                    return function (o) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; a;) try {
                            if (n = 1, r && (i = 2 & o[0] ? r["return"] : o[0] ? r["throw"] || ((i = r["return"]) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return a.label++, {value: o[1], done: !1};
                                case 5:
                                    a.label++, r = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < i[1]) {
                                        a.label = i[1], i = o;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2], a.ops.push(o);
                                        break
                                    }
                                    i[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            o = e.call(t, a)
                        } catch (t) {
                            o = [6, t], r = 0
                        } finally {
                            n = i = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {value: o[0] ? o[1] : void 0, done: !0}
                    }([o, s])
                }
            }
        };
        e.j = void 0;
        var l = function (t) {
            function e(e, r, i, o, a, s, l, c, u) {
                var d = t.call(this, {
                    dataSource: e,
                    settings: r,
                    renderTo: i,
                    renderToNode: u,
                    nonce: a,
                    onClose: c
                }) || this;
                d.confirmVisibilityAds = (0, n(12251).protect)("SsrBlock:confirmVisibilityAds", (function (t) {
                    var e = d.getUsedAdvs();
                    d.props.dataSource.onConfirmVisibility(e, {
                        renderSize: d.getBlockSize(),
                        extParams: {confirmTime: t, confirmRatio: (0, n(49018).getVisibilityRatio)(d.rootNode)}
                    });
                    for (var r = 0; r < d.adControllers.length; r++) d.adControllers[r].initClickConfirmation();
                    d.visibilityConfirmed = !0, n(62570).refresher.confirm(d.uniqId)
                })), d.confirmVisibilityRtb = (0, n(12251).protect)("SsrBlock:confirmVisibilityRtb", (function (t) {
                    d.props.dataSource.confirmVisibilityInRtb({
                        renderSize: d.getBlockSize(),
                        extParams: {confirmTime: t, confirmRatio: (0, n(49018).getVisibilityRatio)(d.rootNode)}
                    })
                })), d.uniqId = d.props.dataSource.getUniqueId();
                var p = d.props.dataSource.getSsr();
                if (p) {
                    var f = p.html, h = p.css, g = p.salt, v = p.encoding;
                    d.setRenderResources(f, h, g, v)
                }
                return d.advs = [], d.visibilityConfirmed = !1, (0, n(85914).setMark)(d.uniqId, n(85914).RenderMarks.ReadyForRendering), d
            }

            return i(e, t), e.prototype.render = function () {
                this.props.dataSource.isCSRBlock() ? this._csrRender() : this._render()
            }, e.prototype._csrRender = function () {
                var t;
                return a(this, void 0, void 0, (function () {
                    var e, r, i, o, a, l, c, u, d;
                    return s(this, (function (s) {
                        switch (s.label) {
                            case 0:
                                return e = this.props.renderTo, [4, (0, n(94358).previewRenderer)(this.props.dataSource, e, this.props.nonce)];
                            case 1:
                                return r = s.sent(), (null === (t = null == r ? void 0 : r.direct) || void 0 === t ? void 0 : t.ssr) && (i = r.direct.ssr, o = i.html, a = i.css, l = i.salt, c = i.encoding, u = Object.keys(r.settings)[0], d = r.settings[u], this.props.dataSource.updateSettings(d), this.setRenderResources(o, a, l, c)), this._render(), [2]
                        }
                    }))
                }))
            }, e.prototype._render = function () {
                var t = this;
                (0, n(85914).setMark)(this.uniqId, n(85914).RenderMarks.StartDomRendering);
                var e = (0, n(74472).getPlacement)(this.uniqId), r = this.props, i = r.nonce, a = r.renderTo,
                    s = r.renderToNode,
                    l = (0, n(85384).isCustomBannerTypeAndExp)(null == e ? void 0 : e.bannerType) ? s : (0, n(5989).getElementById)(a);
                if (!l) {
                    var c = o(o({}, this.getRumAdditionals()), {
                        csr: this.props.dataSource.isCSRBlock(),
                        text: 'Container with id "'.concat(a, '" is not found')
                    });
                    return n(49874).logger.error("CONTAINER_WAS_REMOVED", "markup", c, 100), void (0, n(85914).clearMarks)(this.uniqId)
                }
                this.rootNode = (0, n(7234).getContainer)(l, this.props.nonce, this.props.dataSource.isFullscreen()), (0, n(35740).preventMissClicks)(this.rootNode, (0, n(4114).a)(this.props.dataSource.getBlockId(), "BOUNCES_EXP_CLICK_TIMER") ? Number((0, n(88772).useExperimentFlag)("BOUNCES_EXP_CLICK_TIMER")) : void 0);
                var u = this.rootNode;
                if (this.props.dataSource.isMainPageBlock()) {
                    var d = l.getElementsByTagName("iframe")[0];
                    d && (this.blockNode = d.contentDocument.body)
                } else this.rootNode.innerHTML = "", u = document.createElement("div"), this.rootNode.appendChild(u), this.blockNode = (0, n(33698).protectedRender)(u, (0, n(64623).getShadowRootOptions)(this.props.dataSource), this.html, this.css, i);
                this.doOnDestroy((function () {
                    t.rootNode.innerHTML = "", t.blockNode = null, (0, n(85914).clearMarks)(t.uniqId)
                })), this.blockNode && (this.initAdControllers(), this.initBlockController()), (0, n(85914).setMark)(this.uniqId, n(85914).RenderMarks.StopDomRendering), (0, n(85914).setMark)(this.uniqId, n(85914).RenderMarks.ContentfulRender), (0, n(85914).setMark)(this.uniqId, n(85914).RenderMarks.StartEffectRendering), (0, n(74192).renderingIsCompleted)(this.uniqId), this.initVisibilityChecker(u), this.initImageLoadHandler(), (0, n(96757).requestAnimationFrame)(this.protectAsyncCallback((function () {
                    t.initClientCode(), (0, n(85914).setMark)(t.uniqId, n(85914).RenderMarks.StopEffectRendering), (0, n(79562).asyncCollectMarks)(t.uniqId, t.getRumAdditionals())
                })))
            }, e.prototype.initAdControllers = function () {
                var t, e = this, r = this.blockNode, i = this.props.dataSource, a = i.getFreeAds(),
                    s = (t = r, (0, n(66779).listToArray)(t.querySelectorAll("[data-id]"))), l = [];
                this.adControllers = [];
                var c = Boolean((0, n(12542).getElementByData)("name", "carousel-container", r));
                (0, n(15137).forEach)(s, (function (t) {
                    var e = t.dataset.id, r = (0, n(94383).find)(a, (function (t) {
                        return t.adId === e
                    }));
                    r && i.addBannerSize({adId: r.adId, size: (0, n(87291).getElementRectSize)(t)})
                })), (0, n(15137).forEach)(s, (function (t, r) {
                    var s = t.dataset.id;
                    t.removeAttribute("data-id");
                    var u = (0, n(94383).find)(a, (function (t) {
                        return t.adId === s
                    }));
                    if (u) {
                        var d = i.prepareAd(u, {}, r + 1);
                        if (function (t, e) {
                            var n = e.getTesttagProps();
                            e.setTesttagProps(o(o({}, n), t))
                        }({isCarousel: c}, i), d) {
                            l.push(d);
                            var p = e.createAdController(t, d);
                            e.addResource("adv-".concat(s), p), e.adControllers.push(p)
                        } else n(49874).logger.error(new Error("NO_ADV_AFTER_PREPARE"), "adController", {adId: u.adId})
                    }
                })), this.advs = (0, n(94320).filter)(l, (function (t) {
                    return Boolean(t)
                }))
            }, e.prototype.initBlockController = function () {
                var t = (0, n(12542).getElementByData)("name", n(34994).w, this.blockNode);
                if (t) {
                    var e = this.createBlockController(t);
                    this.addResource(n(34994).w, e), this.blockController = e;
                    var r = this.props.dataSource;
                    (0, n(15137).forEach)(this.advs, (function (t) {
                        return r.releaseAd(t.adId)
                    }));
                    var i = e.getVisibleItems();
                    this.onPageShown(i)
                }
            }, e.prototype.initImageLoadHandler = function () {
                var t = this;
                if (this.blockNode) {
                    var e = this.blockNode.querySelectorAll("img"), r = [].slice.call(e), i = Date.now();
                    r.forEach((function (e) {
                        e.addEventListener("error", (function () {
                            var r = o(o({}, t.getRumAdditionals()), {src: e.src, loadTime: Date.now() - i});
                            n(49874).logger.error("Image Load Error", "network", r, 100)
                        }))
                    }))
                }
            }, e.prototype.getRumAdditionals = function () {
                var t = this.props, e = t.dataSource, r = t.settings, i = e.getSsr(), o = e.isFullscreen(),
                    a = (0, n(74472).getPlacement)(this.uniqId), s = (null == a ? void 0 : a.additionals) || {},
                    l = s.posInQueue, c = s.slotIndex, u = "".concat(o ? "fullscreen-" : "").concat(r.format.name),
                    d = e.getBugData(), p = d.hitLogId, f = d.bidReqIdStr;
                return {
                    type: "ssr",
                    format: u,
                    pageId: e.getPageId(),
                    isDocumentHidden: (0, n(46466).isHidden)(),
                    isRefreshed: e.isRefreshed(),
                    containsData: e.isContainsData(),
                    isInViewport: (0, n(65234).isInViewport)(this.blockNode, 0),
                    slotIndex: c,
                    posInQueue: l,
                    inApp: e.isApp(),
                    isSsp: (0, n(64809).checkBundleIsSSP)(),
                    hitLogId: p,
                    bidReqIdStr: f,
                    externalDeltas: i ? i.timing : void 0,
                    isAsyncReady: !1,
                    limit: this.getUsedAdvs().length,
                    isInterstitial: e.isInterstitial,
                    detailedDeviceType: e.getDetailedDeviceType(),
                    hasVideo: e.hasVideo(),
                    isAdfox: e.isAdfox(),
                    isSspRtbCache: e.isSspRtbCache()
                }
            }, e.prototype.destructor = function () {
                this.destroy()
            }, e.prototype.getUsedAdvs = function () {
                return this.getResource(n(34994).w) ? (0, n(94320).filter)(this.advs, (function (t) {
                    return t.captured
                })) : this.advs
            }, e.prototype.isVisibilityConfirmed = function () {
                return this.visibilityConfirmed
            }, e.prototype.confirmVisibility = function () {
            }, e.prototype.isInViewport = function () {
                return (0, n(65234).isInViewport)(this.rootNode, n(49573).REFRESH_VIEWPORT_VISIBLE_PART)
            }, e.prototype.isVisible = function () {
                return !!this.visibilityConfirmerInRtb && this.visibilityConfirmerInRtb.getIsVisible()
            }, e.prototype.slideUp = function (t) {
                (0, n(71955).slideUp)(this.rootNode, t)
            }, e.prototype.setRenderResources = function (t, e, r, i) {
                this.salt = r, "URI" === i ? (this.html = decodeURIComponent(t), this.css = decodeURIComponent(e)) : "raw" === i ? (this.html = t, this.css = e) : (this.html = (0, n(21625).decode)(t), this.css = (0, n(21625).decode)(e))
            }, e.prototype.onPageShown = function (t) {
                var e = this;
                t && (0, n(15137).forEach)((0, n(85200).isArray)(t) ? t : [t], (function (t) {
                    for (var n = t.offset; n < t.offset + t.limit; n++) e.captureAd(e.advs[n])
                }))
            }, e.prototype.captureAd = function (t) {
                t && !t.captured && (t.captured = !0, this.props.dataSource.captureAd(t.adId), this.visibilityConfirmed && this.props.dataSource.onConfirmVisibility([t], {
                    renderSize: this.getBlockSize(),
                    extParams: {confirmTime: -1, confirmRatio: (0, n(49018).getVisibilityRatio)(this.rootNode)}
                }))
            }, e.prototype.initVisibilityChecker = function (t) {
                var e, r = this, i = this.props.dataSource, o = new (n(72233).VisibilityConfirmer)({
                    element: t,
                    autostart: !0,
                    portion: 0,
                    confirmations: [{delay: i.getVisibilityTime(), onConfirm: this.confirmVisibilityAds}]
                }), a = (0, n(88772).useExperimentFlag)("DISABLE_HOVER_VISIBILITY");
                if (this.visibilityConfirmerInRtb = (0, n(32147).NP)({
                    element: t,
                    trackings: null == i ? void 0 : i.getSettings(),
                    delay: i ? i.getVisibilityTime() : void 0,
                    confirmOnHover: "direct" !== a,
                    autostart: !0,
                    onVisible: this.confirmVisibilityRtb
                }), "revert" !== (0, n(88772).useExperimentFlag)("COUNTER_TYPE_3") && (e = (0, n(32147).NP)({
                    element: t,
                    delay: 0,
                    portion: 0,
                    autostart: !0,
                    confirmOnHover: "ct3" !== a,
                    onVisible: function () {
                        var t, e = null === (t = i.getSettings()) || void 0 === t ? void 0 : t.renderLinkTail;
                        e && (0, n(83009).sendConfirm)({src: (0, n(32147).FW)(e)})
                    }
                })), this.doOnDestroy((function () {
                    o.stop(), e && e.stop(), r.visibilityConfirmerInRtb.stop()
                })), "10500" === i.getSspId()) {
                    var s = (0, n(88772).useExperimentFlag)("CONFIRM_BY_RENDER_FOR_PREBID") || "default";
                    (0, n(9809).logSSPEvent)("SSP_CONFIRM_BY_RENDER:".concat(s), i.getRawData()), "exp" === s && this.visibilityConfirmerInRtb.confirm()
                }
                this.confirmVisibility = function () {
                    o.confirm(), r.visibilityConfirmerInRtb.confirm()
                }
            }, e.prototype.confirmVisibilityAdHover = function (t) {
                var e = [t];
                this.props.dataSource.sendVisibilityConfirmation(e, {
                    testtagProps: {isHover: !0},
                    renderSize: this.getBlockSize(),
                    extParams: {confirmTime: -1, confirmRatio: (0, n(49018).getVisibilityRatio)(this.rootNode)}
                })
            }, e.prototype.initClientCode = function () {
                for (var t = 0; t < this.adControllers.length; t++) this.adControllers[t].initClientCode()
            }, e.prototype.getBlockSize = function () {
                return (0, n(87291).getElementRectSize)(this.rootNode)
            }, e.prototype.onClose = function () {
                var t, e;
                null === (e = null === (t = this.props) || void 0 === t ? void 0 : t.onClose) || void 0 === e || e.call(t), this.props.dataSource.abuseAd(n(71955).PREVENTS_BROWSING_ID)
            }, e
        }(n(66553).Destroyable);
        e.j = l
    }, 94358: (t, e, n) => {
        "use strict";
        var r, i = function () {
            return i = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }, i.apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {value: !0}), e.previewRenderer = void 0, e.previewRenderer = function (t, e, o) {
            var a = (0, n(56240).getUaasConfig)(), s = void 0 !== window.ontouchstart ? "touch" : "desktop";
            return new Promise((function (l) {
                n(36366)((function (n) {
                    var c, u, d = n.Preview;
                    r || (r = new d({skipPcodeLoad: !0, loadViaScript: !0, flags: a.flagsMap, nonce: o, device: s}));
                    var p = t.getRawData();
                    (null === (c = p.direct) || void 0 === c ? void 0 : c.ssr) && (null === (u = (p = i(i({}, p), {direct: i({}, p.direct)})).direct) || void 0 === u || delete u.ssr), l(r.dataRender({
                        elementId: e,
                        data: p
                    }))
                }))
            }))
        }
    }, 23413: (t, e, n) => {
        "use strict";
        var r, i = (r = function (t, e) {
            return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }, r(t, e)
        }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function n() {
                this.constructor = t
            }

            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }), o = function () {
            return o = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }, o.apply(this, arguments)
        };
        e.w = void 0;
        var a = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return i(e, t), e.prototype.initClientCodeController = function (t, e, r, i, a, s) {
                var l = s.vast, c = s.vastBase64, u = s.hitLogId, d = s.url, p = s.urlParams, f = s.clickMacro,
                    h = s.videoContentSize, g = i.name, v = i.limit, m = this.props.salt,
                    _ = {vast: l, vastBase64: c, hitLogId: u, url: d, urlParams: p, clickMacro: f, videoContentSize: h};
                (0, n(80025).I)(t), (0, n(96403).Y0)(g) && ((0, n(68181).KL)(t, m, _, a), this.doOnDestroy((function () {
                    (0, n(68181).rP)(t)
                }))), ((0, n(96403).J4)(g) || "shoppable" === g || (0, n(41712).isNewDesktopFullscreenGrid)(i)) && ((0, n(45517).initConstructorClientCode)(t, _, m, a, {carousel: i.carousel && v > 1}), this.doOnDestroy((function () {
                    (0, n(45517).destroyConstructorClientCode)(t)
                })));
                var b = ((0, n(65421).getElementsByData)("name", "bannerSurvey", e) || [])[0];
                b && ((0, n(36926).Z7)(b), n(35930).isIntersectionObserverSupported && new IntersectionObserver(n(36926).OQ, n(36926).ut).observe(e));
                if ((0, n(88772).useExperimentFlag)("GLOBAL_SIZE_INFO")) {
                    var y = t.querySelector("[data-adaptive]"), I = null == y ? void 0 : y.dataset.adaptive,
                        A = e.getBoundingClientRect(), C = A.width, S = A.height, E = n(64029).isTouchDevice, O = a(),
                        T = O.getSettings(), R = T.width, w = T.height, k = T.blockId, P = t.getBoundingClientRect(),
                        N = function (t) {
                            var e, n;
                            return null === (n = null === (e = null == t ? void 0 : t._ads[0]) || void 0 === e ? void 0 : e.images) || void 0 === n ? void 0 : n[0]
                        }(O) || {}, L = parseInt(N[1], 10) / parseInt(N[2], 10), M = window.layoutConfig;
                    n(49874).logger.traceLog(o({
                        imageRatio: L,
                        imageUrl: N[0],
                        isTouch: E,
                        widthBlock: Math.round(P.width),
                        heightBlock: Math.round(P.height),
                        rootWidth: Math.round(C),
                        rootHeight: Math.round(S),
                        clientHeightBlock: Math.round(t.clientHeight),
                        hasScailed: Math.abs(Math.round(P.height) - Math.round(t.clientHeight)) > 20,
                        topPosition: P.top,
                        isWholeFirstScreen: P.bottom < window.innerHeight,
                        windowHeight: window.innerHeight,
                        widthPI: R,
                        heightPI: w,
                        host: location.host,
                        blockId: k,
                        format: O._settings.format,
                        product: O._product,
                        limit: O._settings.limit,
                        adaptiveFormFactor: I
                    }, M ? M.config : {noLayoutConfig: !0}), "GLOBAL_SIZE_INFO", 10)
                }
            }, e
        }(n(35909).h);
        e.w = a
    }, 62596: (t, e, n) => {
        "use strict";
        var r, i, o = (r = function (t, e) {
                return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                }, r(t, e)
            }, function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                function n() {
                    this.constructor = t
                }

                r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            a = ((i = {})[n(76617).CAROUSEL_CONTAINER_NAME] = n(66134).H, i[n(85494).FULLSCREEN_GRID_CONTAINER_NAME] = n(74039).a, i[n(22935).xp] = n(16269).N, i[n(36853).nf] = n(33329).e, i[n(66279).fr] = n(82810).Z, i),
            s = function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }

                return o(e, t), e.prototype.createBlockController = function (t) {
                    var e = this, r = t.dataset.containerType, i = a[void 0 === r ? "" : r];
                    if (!i) return new (n(93128).n)(t);
                    var o = this.props.dataSource;
                    return new i({
                        container: t, salt: this.salt, nonce: this.props.nonce, getDataSource: function () {
                            return o
                        }, onPageShown: function (t) {
                            return e.onPageShown(t)
                        }, onClose: function () {
                            return e.onClose()
                        }
                    })
                }, e.prototype.createAdController = function (t, e) {
                    var r = this, i = this.blockNode, o = this.props.dataSource;
                    return new (n(23413).w)({
                        rootNode: t, blockNode: i, adv: e, dataSource: o, onClose: function () {
                            return r.onClose()
                        }, onConfirmHover: function () {
                            return r.confirmVisibilityAdHover(e)
                        }, salt: this.salt, nonce: this.props.nonce
                    })
                }, e
            }(n(83255).j);
        t.exports = s
    }, 66553: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.Destroyable = void 0;
        var r = function () {
            function t(t) {
                this.destroyed = !1, this.props = t, this.embeddedResources = {}, this.onDestroyTasks = [], this.init()
            }

            return t.prototype.init = function () {
            }, t.prototype.destroy = function () {
                for (var t = (0, n(10407).getObjectKeys)(this.embeddedResources); t.length;) {
                    var e = t.shift();
                    this.destroyResource(e)
                }
                for (; this.onDestroyTasks.length;) {
                    var r = this.onDestroyTasks.shift();
                    r && r()
                }
                this.destroyed = !0
            }, t.prototype.isDestroyed = function () {
                return this.destroyed
            }, t.prototype.doOnDestroy = function (t) {
                this.onDestroyTasks.push(t)
            }, t.prototype.addResource = function (t, e) {
                this.embeddedResources[t] = e
            }, t.prototype.getResource = function (t) {
                var e = this.embeddedResources[t];
                return e || null
            }, t.prototype.destroyResource = function (t) {
                var e = this.getResource(t);
                t && null !== e && (e.destroy(), delete this.embeddedResources[t])
            }, t.prototype.addEventListener = function (t, e, r, i) {
                var o = (0, n(12251).protect)("compositeModule:handler:" + e, r, this),
                    a = (0, n(54825).addEventListener)(t, e, o, i);
                return this.doOnDestroy(a), a
            }, t.prototype.protectAsyncCallback = function (t) {
                var e = this;
                return (0, n(12251).protect)("compositeModule:asyncCallback", (function () {
                    for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                    e.isDestroyed() || t.apply(e, n)
                }))
            }, t
        }();
        e.Destroyable = r
    }, 4091: (t, e, n) => {
        "use strict";
        var r = function () {
            return r = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }, r.apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {value: !0}), e.extendUrl = void 0;
        var i = function (t) {
            return t
        }, o = i, a = i;
        e.extendUrl = function (t, e, i) {
            var l = a(t);
            if (s(l)) return t;
            var c = {};
            if (i) {
                var u = (0, n(79447).createClickInfo)(i);
                c = (0, n(80908).O)((0, n(91308).v)(u, (function (t) {
                    return void 0 !== t
                })), String)
            }
            return o((0, n(28377).addParamsToUrl)(l, r(r({}, e), c)))
        };
        var s = function (t) {
            return ["direct.yandex.ru", "vk.com", "facebook.com", "twitter.com", "connect.ok.ru"].some((function (e) {
                return t.indexOf(e) > -1
            }))
        }
    }, 86301: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.shouldStopClickEvent = e.getLinkTarget = e.handleClick = void 0;
        var r = /^https:\/\/direct\.yandex\.ru\//;

        function i(t) {
            for (var e = t; e;) {
                if (e.href) return e;
                e = e.parentElement
            }
            return null
        }

        e.handleClick = function (t, o, a, s) {
            var l = i(t.target);
            if (l) {
                var c, u, d = l.href;
                if ((0, n(82478).Ze)(l, "data-collection-link")) (0, n(4777).open)(t, d); else {
                    if (!d.match(r) && o && o.shouldUseSendBeacon && o.shouldUseSendBeacon()) o.sendViaSendBeacon(a, t), c = u = o.getTargetUrl(); else {
                        if ("exp" === (0, n(88772).useExperimentFlag)("NOT_CLICKABLE_EDGES_AREA_EXP", !0) && (0, e.shouldStopClickEvent)(t)) return t.preventDefault(), void t.stopPropagation();
                        var p = null == s ? void 0 : s.getSettings(),
                            f = (null == p ? void 0 : p.disableAuxClickQueryParams) ? d : (0, n(4091).extendUrl)(d, a, t);
                        c = new (n(98026).Url)({host: f}).getUrl(), u = f
                    }
                    l.href = u, c && (0, n(4777).open)(t, c)
                }
            }
        }, e.getLinkTarget = i;
        e.shouldStopClickEvent = function (t) {
            var e, r, i = (0, n(88772).useExperimentFlag)("NOT_CLICKABLE_EDGES_AREA_SIZE"),
                o = (0, n(88772).useExperimentFlag)("NOT_CLICKABLE_EDGES_AREA_MIN"),
                a = (0, n(88772).useExperimentFlag)("NOT_CLICKABLE_EDGES_AREA_MAX"),
                s = (0, n(88772).useExperimentFlag)("NOT_CLICKABLE_EDGES_AREA_DISABLE_ASSETS");
            if (!i) return !1;
            var l = parseFloat(i);
            if (isNaN(l) || !l) return !1;
            var c = (0, n(79447).createClickInfo)(t), u = c.clickX, d = c.clickY, p = c.width, f = c.height,
                h = null === (r = null === (e = (0, n(82478).Ze)(t.target, "data-asset-click")) || void 0 === e ? void 0 : e.dataset) || void 0 === r ? void 0 : r.assetClick;
            if (s && h && (0, n(80511).includes)(s, h)) return !1;
            var g, v = l, m = l;
            return "%" === (g = i)[g.length - 1] && (v = Math.ceil(l * p / 100), m = Math.ceil(l * f / 100)), a && (v = Math.min(v, Number(a)), m = Math.min(m, Number(a))), o && (v = Math.max(v, Number(o)), m = Math.max(m, Number(o))), u <= v || p - u <= v || d <= m || f - d <= m
        }
    }, 4777: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.open = void 0;
        var r = n(45229).MraidHelpers.isAvailable();
        e.open = (0, n(12251).protect)("open", (function (t, e) {
            r && (n(45229).MraidHelpers.open(window, e), t.preventDefault())
        }))
    }, 33698: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.attachIsolateNode = e.protectedRender = void 0;
        var r = (0, n(53945).hasShadowDomSupport)();

        function i(t, e) {
            var n = {mode: e || "closed"};
            return t.attachShadow(n)
        }

        function o(t) {
            var e = (0, n(98022).Q)(t, {content: "<!DOCTYPE html><html><head><style>body{display:table}</style></head><body></body></html>"}),
                r = e.contentDocument.body, i = new (n(92191).RafSizeSensor)(r);
            return i.addResizeHandler((function (o, a) {
                var s = o.width, l = o.height, c = t.parentElement;
                if (c) {
                    var u = (0, n(20697).getElementInnerSize)(c);
                    e.width = "".concat(Math.max(o.width, u.width), "px"), e.height = "".concat(Math.max(o.height, u.height), "px"), s = (u = (0, n(20697).getElementInnerSize)(c)).width, l = u.height
                }
                e.width = "".concat(s, "px"), e.height = "".concat(l, "px"), r.style.display = "block", a(), i.destroy()
            })), r
        }

        e.protectedRender = r ? function (t, e, r, o, a) {
            (0, n(84863).D)(t);
            var s = e.stretch ? "\n            width: 100% !important;\n            height: 100% !important;\n        " : "",
                l = "exp" === (0, n(88772).useExperimentFlag)("FIX_MIN_HEIGHT_NTP") ? "\n            min-height: inherit !important;\n            " : "",
                c = i(t, e.shadowDomMode), u = n(83865).getAlias((0, n(17347).identify)({prefix: "container"})),
                d = n(83865).getAlias((0, n(17347).identify)({prefix: "container"})),
                p = '<div class="'.concat(u, '">\n            <div class="').concat(d, '"></div>\n            <style ').concat(a ? "nonce=".concat(a) : "", ">\n                :host {\n                    all: initial !important;\n                    font-family: inherit !important;\n                    ").concat(s, "\n                    ").concat(l, "\n                }\n                .").concat(u, " {\n                    max-width: 100%;\n                }\n                .").concat(d, " {\n                    display: table;\n                    table-layout: fixed;\n                    width: 100%;\n                    height: 0;\n                    visibility: hidden;\n                }\n            </style>\n            ").concat(r, "\n        </div>");
            "exp" === (0, n(88772).useExperimentFlag)("TABLE_CONTAINER_REVERSE") && (p = '<div style="max-width: 100%">\n            <style '.concat(a ? "nonce=".concat(a) : "", ">\n                :host {\n                    all: initial !important;\n                    font-family: inherit !important;\n                    ").concat(s, "\n                    ").concat(l, "\n                }\n            </style>\n            ").concat(r, "\n        </div>")), (0, n(76274).setInnerHTML)(c, p, a);
            var f = c.firstChild;
            return (0, n(41486).isString)(o) && (0, n(5045).appendStyle)(o, a, f), f
        } : function (t, e, r, i, a) {
            var s = o(t);
            return (0, n(41486).isString)(i) && (0, n(5045).appendStyle)(i, a, s), (0, n(76274).setInnerHTML)(s, r, a), s
        }, e.attachIsolateNode = function (t, e) {
            return r ? i(t, e) : o(t)
        }
    }, 64623: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.getShadowRootOptions = void 0;
        e.getShadowRootOptions = function (t) {
            var e = n(91787).isIOS && (n(17122).i || n(79759).v || n(3639).u) || t.isYandex();
            return {stretch: !t.isInterscroller(), shadowDomMode: e ? "open" : "closed"}
        }
    }, 41073: (t, e, n) => {
        "use strict";
        var r = function () {
            return r = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }, r.apply(this, arguments)
        }, i = function (t, e) {
            var n = {};
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
            if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                var i = 0;
                for (r = Object.getOwnPropertySymbols(t); i < r.length; i++) e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]])
            }
            return n
        };
        Object.defineProperty(e, "__esModule", {value: !0}), e.showAdtune = void 0;
        e.showAdtune = function (t, e, o) {
            var a, s = e.callback, l = void 0 === s ? n(85225).noop : s, c = e.showBug, u = e.isExternalDsp,
                d = e.hiddenFieldList, p = void 0 === d ? [] : d, f = e.hideAbout, h = e.hideAdvertiserInfo,
                g = i(e, ["callback", "showBug", "isExternalDsp", "hiddenFieldList", "hideAbout", "hideAdvertiserInfo"]),
                v = o.nonce, m = o.className, _ = o.protectNode, b = o.zIndexFix, y = o.data;
            return (a = g.language, new Promise((function (t) {
                var e = n(82244)(a), r = Date.now();
                e((function (e) {
                    Date.now() - r > 1e4 && n(49874).logger.error(new Error("Adtune bundle long load")), t(e.render)
                }), (function (t) {
                    return n(49874).logger.error(t, "Adtune bundle loading error")
                }))
            }))).then((function (e) {
                var i = document.createElement("div");
                i.setAttribute("data-feedback", "true"), i.setAttribute("data-name", "adtune-feedback"), b && (i.style.zIndex = "10000"), m && i.classList.add(n(83865).getAlias(m)), u && p.push("about", "advertiserInfo", "copyLink", "dontLike", "hide", "lie", "notInterested", "politics", "report"), g.abuseUrl || p.push("about", "advertiserInfo", "dontLike", "hide", "lie", "notInterested", "politics", "report");
                var o, a = "exp" === (0, n(88772).useExperimentFlag)("HIDE_ADTUNE_ITEMS_IN_SSP");
                (f || a) && p.push("about"), (h || a) && p.push("advertiserInfo"), t.appendChild(i), e(r(r({}, g), {
                    hiddenFieldList: (0, n(98370).unique)(p),
                    data: r(r({}, y), {banner: t}),
                    showBug: c && !(0, n(7386).isHermione)(),
                    protectNode: _,
                    onScreenRender: function (e) {
                        var r, i = e.size;
                        null === (r = null == g ? void 0 : g.onScreenRender) || void 0 === r || r.call(g, {size: i}), i && "micro" === i && (o = new (n(4549).ScrollerClientCode)({
                            container: t,
                            salt: ""
                        }))
                    },
                    callback: function (t) {
                        t || ((0, n(91709).removeNodeFromParent)(i), null == o || o.destroy()), l(t)
                    }
                }), i, v)
            }))
        }
    }, 69206: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.showClickConfirmation = void 0;
        e.showClickConfirmation = function (t, e, r) {
            var i = e.url, o = e.size, a = e.language, s = e.cancelCallback, l = e.confirmCallback;
            return new Promise((function (t) {
                n(89254)((function (e) {
                    t(e.render)
                }), (function (t) {
                    return n(49874).logger.error(t, "ClickConfirmation bundle loading error")
                }))
            })).then((function (e) {
                var n = document.createElement("div");
                return t.appendChild(n), e({
                    size: o, language: a, url: i, cancelCallback: function (e) {
                        t.removeChild(n), s(e)
                    }, confirmCallback: function (e) {
                        t.removeChild(n), l(e)
                    }
                }, n, r), n
            }))
        }
    }, 38746: (t, e, n) => {
        "use strict";
        var r = function () {
            return r = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }, r.apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {value: !0}), e.switchFormat = void 0, e.switchFormat = function (t) {
            var e, i = t.blockName, o = t.blockSettings;
            return {
                selectedBlock: null === (e = n(3573).ASSOCIATED_BLOCKS[i]) || void 0 === e ? void 0 : e[0],
                newBlockSettings: r({}, o)
            }
        }
    }, 96579: (t, e) => {
        "use strict";
        e.d = void 0, e.d = function (t) {
            void 0 === t && (t = window);
            var e = t.navigator.userAgent, n = e.indexOf("Android");
            return -1 === n ? -1 : parseFloat(e.slice(n + 8))
        }
    }, 48770: (t, e, n) => {
        "use strict";
        e.a = void 0, e.a = (0, n(96579).d)()
    }, 72543: (t, e, n) => {
        "use strict";
        e.g = void 0;
        e.g = function (t) {
            void 0 === t && (t = window);
            var e = (0, n(24931).i)(t),
                r = e.match(/(opera|chrome|safari|firefox|ucbrowser|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            if (/trident/i.test(r[1])) return "MSIE";
            if ("Chrome" === r[1]) {
                var i = e.match(/\b(OPR|Edge|YaBrowser)\/(\d+)/);
                if (null !== i) return i[1].replace("OPR", "Opera")
            }
            return r[1]
        }
    }, 62107: (t, e, n) => {
        "use strict";
        e.o = void 0, e.o = function (t) {
            if (void 0 === t && (t = window), (0, n(82377).P)(t) && t.navigator) {
                var e = t.navigator.platform;
                if (e && /iP(hone|od|ad)/.test(e)) {
                    var r = t.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                    if (r) return parseInt(r[1], 10)
                }
            }
            return -1
        }
    }, 47993: (t, e, n) => {
        "use strict";
        e.d = void 0, e.d = function (t) {
            void 0 === t && (t = window);
            var e = t.navigator.userAgent, r = void 0 === e ? "" : e, i = /Android/.test(r), o = (0, n(90138).a)(t),
                a = /com\.yandex\.mobile\.metrica\.ads\.sdk.*?Android/.test(r);
            return i && !o || a
        }
    }, 38357: (t, e, n) => {
        "use strict";
        e.g = void 0;
        e.g = function (t) {
            return void 0 === t && (t = window), /Chrome/.test(t.navigator.userAgent) && /Google Inc/.test(t.navigator.vendor) && !(0, n(87340).a)(t)
        }
    }, 17122: (t, e, n) => {
        "use strict";
        e.i = void 0, e.i = (0, n(38357).g)()
    }, 6368: (t, e, n) => {
        "use strict";
        e.b = void 0, e.b = (0, n(85150).b)()
    }, 85150: (t, e, n) => {
        "use strict";
        e.b = void 0;
        e.b = function (t) {
            return void 0 === t && (t = window), (0, n(52452).getPixelRatio)(t) > 1
        }
    }, 91787: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.isIOS = void 0, e.isIOS = (0, n(82377).P)()
    }, 60769: (t, e, n) => {
        "use strict";
        e.J = void 0;
        e.J = function (t) {
            return void 0 === t && (t = window), (0, n(82377).P)(t) && (0, n(24931).i)(t).toLowerCase().indexOf("iphone") > -1
        }
    }, 26978: (t, e, n) => {
        "use strict";
        e.B = void 0, e.B = function (t) {
            void 0 === t && (t = window);
            var e = (0, n(24931).i)(t).toLowerCase();
            return /mac/.test(e) && !(0, n(82377).P)(t)
        }
    }, 12777: (t, e, n) => {
        "use strict";
        e.V = void 0, e.V = (0, n(26978).B)()
    }, 68616: (t, e, n) => {
        "use strict";
        e.M = void 0;
        e.M = function (t) {
            return void 0 === t && (t = window), (0, n(60769).J)(t) || (0, n(47993).d)(t) && (0, n(24931).i)(t).toLowerCase().indexOf("mobile") > -1
        }
    }, 47281: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.isSafari = void 0, e.isSafari = (0, n(98667).B)()
    }, 88285: (t, e, n) => {
        "use strict";
        e.$ = void 0, e.$ = function (t) {
            return void 0 === t && (t = window), (0, n(78383).H)(t)
        }
    }, 72262: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.isTouchScreenDevice = void 0, e.isTouchScreenDevice = (0, n(88285).$)()
    }, 90138: (t, e) => {
        "use strict";
        e.a = void 0;
        e.a = function (t) {
            return void 0 === t && (t = window), /Windows Phone/i.test(t.navigator.userAgent)
        }
    }, 87340: (t, e, n) => {
        "use strict";
        e.a = void 0;
        e.a = function (t) {
            return void 0 === t && (t = window), /YaBrowser/.test((0, n(24931).i)(t))
        }
    }, 79759: (t, e, n) => {
        "use strict";
        e.v = void 0, e.v = (0, n(87340).a)()
    }, 3639: (t, e, n) => {
        "use strict";
        e.u = void 0;
        e.u = function (t) {
            return void 0 === t && (t = window), /YandexSearch|YaSearchBrowser|YaApp_iOS|YaApp_Android/i.test((0, n(24931).i)(t))
        }
    }, 47124: (t, e, n) => {
        "use strict";
        e.j = void 0, e.j = function (t) {
            void 0 === t && (t = window);
            var e = (0, n(24931).i)(t).toLowerCase(), r = /windows nt (\d+\.\d+)/.exec(e);
            if (r) {
                var i = Number(r[1]);
                return i > 0 ? i : -1
            }
            return -1
        }
    }, 84666: (t, e, n) => {
        "use strict";
        e.c = void 0, e.c = (0, n(47124).j)()
    }, 24681: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.deleteUndefinedProperties = void 0, e.deleteUndefinedProperties = function (t) {
            var e = {};
            for (var r in t) (0, n(98581).hasOwnProperty)(t, r) && void 0 !== t[r] && (e[r] = t[r]);
            return e
        }
    }, 91308: (t, e, n) => {
        "use strict";
        e.v = void 0, e.v = function (t, e) {
            var r = {};
            return (0, n(10407).getObjectKeys)(t).forEach((function (n) {
                e(t[n], n) && (r[n] = t[n])
            })), r
        }
    }, 89030: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.getObjectValues = void 0, e.getObjectValues = function (t) {
            var e = Object.values;
            if ("function" == typeof e) return e(t);
            var r = [];
            for (var i in t) (0, n(98581).hasOwnProperty)(t, i) && r.push(t[i]);
            return r
        }
    }, 91366: (t, e, n) => {
        "use strict";
        e.O = void 0, e.O = function (t) {
            try {
                return (0, n(41486).isString)(t) ? n.lv["json"].parse(t) : void 0
            } catch (t) {
                return
            }
        }
    }, 57747: (t, e, n) => {
        "use strict";
        var r, i = (r = function (t, e) {
            return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }, r(t, e)
        }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function n() {
                this.constructor = t
            }

            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        e.R = void 0;
        var o = function (t) {
            function e(e, n) {
                void 0 === n && (n = function (t, e) {
                    return t === e
                });
                var r = t.call(this) || this;
                return r.checkToEqualFunction = n, r.value = e, r
            }

            return i(e, t), e.prototype.getValue = function () {
                return this.value
            }, e.prototype.subscribeValueCondition = function (t, e) {
                return this.add((function (r) {
                    t(r) && (0, n(30224).p)(e, r)
                }))
            }, e.prototype.subscribeValueConditionOnce = function (t, e) {
                var r = this.subscribeValueCondition(t, (function (t) {
                    r(), (0, n(30224).p)(e, t)
                }));
                return r
            }, e.prototype.dispatch = function (e) {
                this.checkToEqualFunction(this.value, e) || (this.value = e, t.prototype.dispatch.call(this, e))
            }, e
        }(n(50773).M);
        e.R = o
    }, 42587: (t, e, n) => {
        "use strict";
        e.s = void 0;
        e.s = function (t) {
            return function (e, r, i) {
                void 0 === i && (i = {});
                var o = (0, n(7690).visibilityObserver)(t, i), a = n(85225).noop;
                this.start = function () {
                    a(), a = o(e, r)
                }, this.stop = function () {
                    a()
                }, i.disableAutoStart || this.start()
            }
        }
    }, 75578: (t, e, n) => {
        "use strict";
        e.I2 = void 0, Object.defineProperty(e, "I2", {
            enumerable: !0, get: function () {
                return n(36428).GeneralStrategy
            }
        }), (0, n(42587).s)(n(36428).GeneralStrategy.factory)
    }, 46552: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.animate = void 0;
        var r = {
            linear: function (t, e, n, r) {
                return n * t / r + e
            }, easeOutQuad: function (t, e, n, r) {
                return -n * (t /= r) * (t - 2) + e
            }
        };
        e.animate = function (t) {
            var e = t.easing, i = void 0 === e ? "linear" : e, o = t.start, a = void 0 === o ? 0 : o, s = t.end,
                l = void 0 === s ? 0 : s, c = t.duration, u = t.onFrame, d = t.onEnd, p = !0;
            return function (t, e) {
                var r = Date.now();
                (0, n(96757).requestAnimationFrame)((function i() {
                    t(Date.now() - r) ? (0, n(96757).requestAnimationFrame)(i) : e && e()
                }))
            }((function (t) {
                var e = (0, r[i])(t, a, l - a, c), n = t < c;
                return u(n ? e : l), n && p
            }), d), {
                stop: function () {
                    p = !1
                }
            }
        }
    }, 28983: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.closest = void 0;
        var n = function (t, e) {
            return Math.abs(t - e)
        };
        e.closest = function (t, e, r) {
            return void 0 === r && (r = n), e.length > 0 ? e.__preduce((function (e, n) {
                return r(n, t) < r(e, t) ? n : e
            })) : void 0
        }
    }, 30913: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.findIndex = void 0;
        e.findIndex = function (t, e) {
            void 0 === e && (e = function (t) {
                return Boolean((0, n(27547).y)(t))
            });
            for (var r = 0; r < t.length; r++) if (e(t[r], r, t)) return r;
            return -1
        }
    }, 65648: (t, e, n) => {
        "use strict";
        var r = function (t, e, n) {
            if (n || 2 === arguments.length) for (var r, i = 0, o = e.length; i < o; i++) !r && i in e || (r || (r = Array.prototype.slice.call(e, 0, i)), r[i] = e[i]);
            return t.concat(r || Array.prototype.slice.call(e))
        };
        Object.defineProperty(e, "__esModule", {value: !0}), e.enableBodyScroll = e.clearAllBodyScrollLocks = e.disableBodyScroll = void 0;
        var i, o, a = (0, n(82377).P)(), s = [], l = null, c = -1;

        function u(t) {
            return t.composed ? function (t) {
                var e = t.composedPath();
                return (0, n(38179).some)(e, (function (t) {
                    var e;
                    return null === (e = t.classList) || void 0 === e ? void 0 : e.contains("yaEnableScroll")
                }))
            }(t) : (0, n(38179).some)(s, (function (e) {
                return Boolean(e.options.allowTouchMove && e.options.allowTouchMove(t.target))
            }))
        }

        function d(t) {
            var e = t || window.event;
            return !!u(e) || (e.touches.length > 1 || (e.preventDefault && e.preventDefault(), !1))
        }

        function p() {
            setTimeout((function () {
                void 0 !== o && (document.body.style.paddingRight = o || "", o = void 0), void 0 !== i && (document.body.style.overflow = i, i = void 0)
            }))
        }

        e.disableBodyScroll = function (t, e) {
            if (a) {
                if (!t) return;
                if (t && !(0, n(38179).some)(s, (function (e) {
                    return e.targetElement === t
                }))) {
                    var p = {targetElement: t, options: e || {}};
                    s = r(r([], s, !0), [p], !1), t.ontouchstart = function (t) {
                        1 === t.targetTouches.length && (c = t.targetTouches[0].clientY)
                    }, t.ontouchmove = function (e) {
                        1 === e.targetTouches.length && function (t, e) {
                            var n = t.targetTouches[0].clientY - c;
                            !u(t) && (e && 0 === e.scrollTop && n > 0 || function (t) {
                                return !!t && t.scrollHeight - t.scrollTop <= t.clientHeight
                            }(e) && n < 0 ? d(t) : t.stopPropagation())
                        }(e, t)
                    }, l || (l = (0, n(54825).addEventListener)(document, "touchmove", d, {passive: !1}))
                }
            } else {
                !function (t) {
                    setTimeout((function () {
                        if (void 0 === o) {
                            var e = !!t && !0 === t.reserveScrollBarGap,
                                n = window.innerWidth - document.documentElement.clientWidth;
                            e && n > 0 && (o = document.body.style.paddingRight, document.body.style.paddingRight = "".concat(n, "px"))
                        }
                        void 0 === i && (i = document.body.style.overflow || "", document.body.style.overflow = "hidden")
                    }))
                }(e);
                p = {targetElement: t, options: e || {}};
                s = r(r([], s, !0), [p], !1)
            }
        }, e.clearAllBodyScrollLocks = function () {
            a ? (s.forEach((function (t) {
                t.targetElement.ontouchstart = null, t.targetElement.ontouchmove = null
            })), null !== l && (l(), l = null), s = [], c = -1) : (p(), s = [])
        }, e.enableBodyScroll = function (t) {
            if (a) {
                if (!t) return;
                t.ontouchstart = null, t.ontouchmove = null, s = s.filter((function (e) {
                    return e.targetElement !== t
                })), null !== l && 0 === s.length && (l(), l = null)
            } else 1 === s.length && s[0].targetElement === t ? (p(), s = []) : s = s.filter((function (e) {
                return e.targetElement !== t
            }))
        }
    }, 78359: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.getDeviceName = e.getBrowserName = e.testProperty = e.isHDPIScreen = e.isPhone = e.isMobile = e.isWindowsPhone = e.androidVersion = e.isAndroid = e.iOSVersion = e.isIOS = e.isUCBrowser = e.isYaBrowser = e.isChrome = e.isFirefox = e.isSafariBasedBrowser = e.isSafari = void 0;
        var r = window;
        e.isSafari = (0, n(98667).B)(r), e.isSafariBasedBrowser = (0, n(13677).z)(r), e.isFirefox = (0, n(97885).v)(r), e.isChrome = (0, n(38357).g)(r), e.isYaBrowser = (0, n(87340).a)(r), e.isUCBrowser = (0, n(73673).f)(r), e.isIOS = (0, n(82377).P)(r), e.iOSVersion = (0, n(62107).o)(r), e.isAndroid = (0, n(47993).d)(r), e.androidVersion = (0, n(96579).d)(r), e.isWindowsPhone = (0, n(90138).a)(r), e.isMobile = (0, n(63607).isMobile)(r), e.isPhone = (0, n(68616).M)(r), e.isHDPIScreen = (0, n(85150).b)(r), Object.defineProperty(e, "testProperty", {
            enumerable: !0,
            get: function () {
                return n(36191).testProperty
            }
        }), Object.defineProperty(e, "getBrowserName", {
            enumerable: !0, get: function () {
                return n(72543).g
            }
        }), e.getDeviceName = function () {
            return (e.isPhone ? "phone" : e.isMobile && "tablet") || "desktop"
        }
    }, 61296: (t, e, n) => {
        "use strict";

        function r(t) {
            return void 0 === t && (t = {}), function () {
                for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                for (var i = [], o = 0; o < e.length;) {
                    var a = e[o++];
                    if ((0, n(41486).isString)(a) && "" !== a) for (var s = a.split(" "), l = 0; l < s.length;) {
                        var c = s[l++];
                        if (c) {
                            var u = t[c] || c;
                            ":" !== u[0] && i.push(u)
                        }
                    }
                }
                return i.join(" ")
            }
        }

        Object.defineProperty(e, "__esModule", {value: !0}), e.bemClassNamesFactory = e.classNamesFactory = void 0, e.classNamesFactory = r, e.bemClassNamesFactory = function (t, e) {
            var i = (0, n(69631).p)(t);
            if ((0, n(26413).isFunction)(e)) return i;
            var o = r(e);
            return function () {
                var t = i.apply(i, arguments);
                return o(t)
            }
        }
    }, 17787: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.debounce = void 0, e.debounce = function (t, e, n, r) {
            3 === arguments.length && "boolean" != typeof n && (r = n, n = !1);
            var i = null;

            function o() {
                null !== i && clearTimeout(i), i = null
            }

            var a = function () {
                var a = arguments;
                r = r || this, n && null === i && t.apply(r, a), o(), i = window.setTimeout((function () {
                    n || t.apply(r, a), i = null
                }), e)
            };
            return a.cancel = o, a
        }
    }, 60913: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.disableOverflowChaining = void 0;
        var r = (0, n(82377).P)();
        e.disableOverflowChaining = function (t) {
            if (!r) return n(85225).noop;
            var e, i = (0, n(54825).addEventListener)(t, "touchstart", (function (t) {
                1 === t.targetTouches.length && (e = {x: t.targetTouches[0].clientX, y: t.targetTouches[0].clientY})
            }), {passive: !1}), o = (0, n(54825).addEventListener)(t, "touchmove", (function (n) {
                var r, i, o = n.targetTouches[0].clientY - e.y, a = n.targetTouches[0].clientX - e.x;
                e = {
                    x: e.x + a,
                    y: e.y + o
                }, Math.abs(a) > Math.abs(o) || (0 === t.scrollTop && o > 0 && (null === (r = n.preventDefault) || void 0 === r || r.call(n)), t.scrollHeight - t.scrollTop <= t.clientHeight && o < 0 && (null === (i = n.preventDefault) || void 0 === i || i.call(n)))
            }), {passive: !1});
            return function () {
                o(), i()
            }
        }
    }, 73599: (t, e, n) => {
        "use strict";
        var r, i = (r = function (t, e) {
            return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }, r(t, e)
        }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function n() {
                this.constructor = t
            }

            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }), o = function () {
            return o = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }, o.apply(this, arguments)
        };
        e.b = void 0;
        var a = function (t) {
            function e(e) {
                var r = t.call(this) || this;
                r.resizeObserverCallback = function (t) {
                    var e = t[0].contentRect, n = e.width, i = e.height;
                    r.onResize.dispatch({width: n, height: i})
                };
                var i = (0, n(34403).getBoundingClientRect)(e);
                if (r.onResize = new (n(57747).R)({width: i.width, height: i.height}, (function (t, e) {
                    var n = e.width, r = e.height;
                    return t.width === n && t.height === r
                })), r.addDestroyHandler((function () {
                    r.onResize.removeAll()
                })), "undefined" != typeof ResizeObserver && (0, n(61438).checkNativeCode)(ResizeObserver)) try {
                    var o = new ResizeObserver(r.resizeObserverCallback);
                    o.observe(e), r.addDestroyHandler((function () {
                        o.disconnect()
                    }))
                } catch (t) {
                    r.fallbackToCustomDetectionMethods(e)
                } else r.fallbackToCustomDetectionMethods(e);
                return r
            }

            return i(e, t), e.prototype.getSize = function () {
                return o({}, this.onResize.getValue())
            }, e.prototype.fallbackToCustomDetectionMethods = function (t) {
                var e = this, r = t.ownerDocument;
                if (r) {
                    var i = r.defaultView;
                    if (i) {
                        var o = function () {
                            var r = (0, n(34403).getBoundingClientRect)(t);
                            e.onResize.dispatch({width: r.width, height: r.height})
                        };
                        this.addDestroyHandler((0, n(54825).addEventListener)(i, "resize", o, {passive: !0})), this.addDestroyHandler((0, n(44989).R)(o))
                    }
                }
            }, e
        }(n(81444).Destroyable);
        e.b = a
    }, 54825: (t, e, n) => {
        "use strict";

        function r(t) {
            var e = !1, n = !1, r = !1;
            return !0 === t ? e = !0 : "object" == typeof t && (e = Boolean(t.capture), n = Boolean(t.passive), r = Boolean(t.once)), {
                capture: e,
                passive: n,
                once: r
            }
        }

        Object.defineProperty(e, "__esModule", {value: !0}), e.addEventListener = e.createFullOptionsObject = void 0, e.createFullOptionsObject = r, e.addEventListener = function (t, e, i, o) {
            var a = r(o), s = n(60622).FF ? a : a.capture, l = a.once && !n(60622).vE ? function (t) {
                c(), i.call(this, t)
            } : i, c = function () {
                (0, n(40428).fu)(t, e, l, s)
            };
            return (0, n(40428).hS)(t, e, l, s), c
        }
    }, 43173: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.clearHTML = void 0;
        e.clearHTML = function (t) {
            for (; t.firstChild;) t.removeChild(t.firstChild)
        }
    }, 82478: (t, e) => {
        "use strict";
        e.Ze = e.oq = void 0, e.oq = function (t, e) {
            for (; t;) {
                if (t.matches(e)) return t;
                t = t.parentElement
            }
            return null
        }, e.Ze = function (t, e) {
            for (; t;) {
                if (t.hasAttribute(e)) return t;
                t = t.parentElement
            }
            return null
        }
    }, 69086: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.getFriendlyWindowsChain = void 0;
        e.getFriendlyWindowsChain = function (t) {
            for (var e = []; t;) try {
                if ((0, n(81915).b)(t), e.push(t), t.parent === t) break;
                t = t.parent
            } catch (t) {
                break
            }
            return e
        }
    }, 87291: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.getElementRectSize = void 0, e.getElementRectSize = function (t) {
            return {width: t.clientWidth, height: t.clientHeight}
        }
    }, 25867: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.hasDimensions = void 0, e.hasDimensions = function (t) {
            var e = (0, n(34403).getBoundingClientRect)(t), r = e.width, i = e.height;
            return r > 0 && i > 0
        }
    }, 67401: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.isInShadowDom = void 0;
        var r = (0, n(53945).hasShadowDomSupport)();
        e.isInShadowDom = function (t, e) {
            if (!r && !e) return !1;
            for (var n = t; n;) {
                if (n instanceof window.ShadowRoot) return !0;
                n = n.parentNode
            }
            return !1
        }
    }, 1480: (t, e, n) => {
        "use strict";

        function r(t, e) {
            var n = t.getRootNode();
            return !(!n || !n.host) && (!!e.contains(n.host) || r(n.host, e))
        }

        function i(t, e) {
            var n = e.getRootNode();
            return !(!n || !n.host) && (t === n.host || i(t, n.host))
        }

        Object.defineProperty(e, "__esModule", {value: !0}), e.isOverlapped = void 0, e.isOverlapped = function (t, e) {
            var o = (0, n(34403).getBoundingClientRect)(t), a = o.left, s = o.top, l = o.width, c = o.height;
            return !(0, n(38179).some)(e, (function (e) {
                var o = e[0], u = e[1], d = a + (l - 1) * (1 + o) / 2, p = s + (c - 1) * (1 + u) / 2,
                    f = document.elementFromPoint(d, p);
                if (!f || t === f || t.contains(f)) return !0;
                if ((0, n(26413).isFunction)(t.getRootNode)) {
                    if (r(f, t)) return !0;
                    if (i(f, t)) return !0
                }
                return !1
            }))
        }
    }, 71075: (t, e, n) => {
        "use strict";
        e.p = void 0, e.p = function (t) {
            for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
            (0, n(85200).isArray)(t) && t.forEach((function (t) {
                "function" == typeof t && t.apply(void 0, e)
            }))
        }
    }, 8763: (t, e, n) => {
        "use strict";
        var r = function (t, e, n) {
            if (n || 2 === arguments.length) for (var r, i = 0, o = e.length; i < o; i++) !r && i in e || (r || (r = Array.prototype.slice.call(e, 0, i)), r[i] = e[i]);
            return t.concat(r || Array.prototype.slice.call(e))
        };
        Object.defineProperty(e, "__esModule", {value: !0}), e.rafDebounce = e.rafDebounceFactory = void 0;
        e.rafDebounceFactory = function (t, e) {
            return function (n) {
                var i, o, a = function () {
                    t(o), o = NaN
                }, s = function () {
                    for (var t = this, s = [], l = 0; l < arguments.length; l++) s[l] = arguments[l];
                    return a(), o = e((function (e) {
                        o = NaN, i = n.call.apply(n, r([t, e], s, !1))
                    })), i
                };
                return s.cancel = a, s
            }
        }, e.rafDebounce = (0, e.rafDebounceFactory)(n(96757).cancelAnimationFrame, n(96757).requestAnimationFrame)
    }, 77179: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.getScale = void 0;
        var n = function (t, e) {
            return (1e3 - ((n = (t - e) / (.001 * t)) > 0 ? Math.ceil(n) : Math.floor(n))) / 1e3;
            var n
        };
        e.getScale = function (t, e) {
            return e.width / t.width > e.height / t.height ? n(e.width, t.width) : n(e.height, t.height)
        }
    }, 86058: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.getDefaultLanguage = void 0;
        e.getDefaultLanguage = function (t) {
            var e = t.isSSP;
            return "exp" === (0, n(88772).useExperimentFlag)("EN_LANG_FOR_SSP") && e ? "3" : "1"
        }
    }, 27547: (t, e) => {
        "use strict";
        e.y = void 0;
        e.y = function (t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            return t
        }
    }, 57979: (t, e) => {
        "use strict";
        e._ = void 0, e._ = function (t) {
            try {
                return Boolean(t.contentDocument)
            } catch (t) {
                return !1
            }
        }
    }, 68008: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.getAverageColor = void 0, e.getAverageColor = function (t) {
            var e = 0, n = 0, r = 0;
            if (!t) return null;
            for (var i = 0; i < t.length; i += 4) e += t[i], n += t[i + 1], r += t[i + 2];
            if (0 !== t.length) {
                var o = t.length / 4;
                e = Math.floor(e / o), n = Math.floor(n / o), r = Math.floor(r / o)
            }
            return [e, n, r]
        }
    }, 48645: (t, e) => {
        "use strict";
        e.L = void 0;
        var n = /^(?:(?:https?:)?\/\/)?(?:an\.)?yandex\.[a-z]+\//i;
        e.L = function (t) {
            return n.test(t)
        }
    }, 38968: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.getPreferredHeight = void 0;
        var r = [{width: 100, aspectRatio: 3}, {width: 200, aspectRatio: 1.5}, {
            width: 400,
            aspectRatio: .75
        }, {width: 600, aspectRatio: .5}, {width: 800, aspectRatio: .25}, {width: 1e3, aspectRatio: .25}, {
            width: 1200,
            aspectRatio: .125
        }, {width: 1 / 0, aspectRatio: .125}];
        e.getPreferredHeight = function (t) {
            for (var e = 1; e < r.length - 1 && t >= r[e].width;) e++;
            var i = r[e - 1], o = r[e],
                a = (0, n(88443).getLinearFunction)(i.width, i.aspectRatio, o.width, o.aspectRatio);
            return Math.floor(t * a(t))
        }
    }, 45229: (t, e, n) => {
        "use strict";
        var r = Object.create ? function (t, e, n, r) {
            void 0 === r && (r = n);
            var i = Object.getOwnPropertyDescriptor(e, n);
            i && !("get" in i ? !e.__esModule : i.writable || i.configurable) || (i = {
                enumerable: !0,
                get: function () {
                    return e[n]
                }
            }), Object.defineProperty(t, r, i)
        } : function (t, e, n, r) {
            void 0 === r && (r = n), t[r] = e[n]
        }, i = Object.create ? function (t, e) {
            Object.defineProperty(t, "default", {enumerable: !0, value: e})
        } : function (t, e) {
            t["default"] = e
        }, o = function (t, e) {
            for (var n in t) "default" === n || Object.prototype.hasOwnProperty.call(e, n) || r(e, t, n)
        }, a = function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t) for (var n in t) "default" !== n && Object.prototype.hasOwnProperty.call(t, n) && r(e, t, n);
            return i(e, t), e
        };
        Object.defineProperty(e, "__esModule", {value: !0}), e.MraidHelpers = void 0, o(n(71162), e);
        var s = a(n(44834));
        e.MraidHelpers = s
    }, 71162: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0})
    }, 94427: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.fixCurrency = e.currencyRxp = void 0, e.currencyRxp = /(\u20bd|\u20b8|\u20b4|\u20ba|\u20be|&#8381;|&#8376;|&#8372;|&#8378;|&#8382;)/g;
        var r = (0, n(94532).once)((function () {
            var t = (0, n(50775).getHead)(window), e = document.createElement("style");
            e.innerHTML = '@font-face {\n        font-family: ArialRub;\n        src: url(https://yastatic.net/pcode-static/resources/22/fonts/rouble/font.woff) format("woff"),\n            url(https://yastatic.net/pcode-static/resources/22/fonts/rouble/font.ttf) format("truetype");\n        unicode-range: U+20BD;\n    }', t.appendChild(e)
        }));
        e.fixCurrency = function (t) {
            var i = null;
            return (n(84666).c > 0 && n(84666).c < 8.1 || n(48770).a > 0 && n(48770).a < 5) && (i = "SF, Roboto, Arial, Helvetica, ArialRub, sans-serif", r()), (n(91787).isIOS || n(12777).V) && (i = "-apple-system"), i ? t.replace(e.currencyRxp, '<span style="font-family: '.concat(i, ' !important;">$1</span>')) : t
        }
    }, 45609: (t, e) => {
        "use strict";
        e.Vx = e.sP = void 0;
        var n = /&\w+;/g;
        e.sP = {
            "&quot;": '"',
            "&laquo;": "\xab",
            "&raquo;": "\xbb",
            "&bdquo;": "\u201e",
            "&ndash;": "\u2013",
            "&mdash;": "\u2014"
        }, e.Vx = function (t) {
            return void 0 === t && (t = ""), t.replace(n, (function (t) {
                return t in e.sP ? e.sP[t] : t
            }))
        }
    }, 17172: (t, e, n) => {
        "use strict";
        var r = function () {
            return r = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }, r.apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {value: !0}), e.prettify = void 0;
        var i, o = "\xa0",
            a = new RegExp('(^|\\s)"([.\\-\\s\\da-zA-Z\u0430-\u044f\u0410-\u042f\u0451\u0401]{3,})"', "g"),
            s = new RegExp('(^|\\(|\\s)([\u0410\u0430]|[\u0411\u0431]\u0435\u0437|[\u0412\u0432](?:|\u044b|\u0430\u0441|\u0430\u043c|\u0441\u0435|\u0441\u0451)|[\u0413\u0433]\u0434\u0435|[\u0414\u0434](?:\u043e|\u043b\u044f)|[\u0417\u0437]\u0430|[\u0418\u0438](?:|\u0437)|[\u041a\u043a](?:|\u043e|\u0430\u043a)|[\u041c\u043c]\u044b|[\u041d\u043d](?:\u0430|\u0430\u043c|\u0430\u0441|\u0435|\u0438|\u043e)|[\u041e\u043e](?:|\u0431|\u0442)|[\u041f\u043f](?:\u043e|\u0440\u043e)|[\u0421\u0441](?:|\u043e)|[\u0422\u0442](?:\u043e|\u0443\u0442|\u044b)|[\u0423\u0443]|[\u0427\u0447]\u0442\u043e|[\u042d\u044d]\u0442\u043e)\\s([\xab"$\\da-zA-Z\u0430-\u044f\u0410-\u042f\u0451\u0401]+)', "g"),
            l = /"/g, c = /[\u0404\u0406\u0407\u0454\u0456\u0457\u0490\u0491]/, u = /^[\-\s]|[\-\s]$|^[\-\s\d]+$/,
            d = /([.,!?:;)+]+|[^<]\/|=(?!"))([^ -])(?!$|[.,!?:;)+=\/ ])/g, p = /([0-9]+) (?=[0-9]{3})/g,
            f = /([0-9\u00A0]+) (\u0440|\u0440\u0443\u0431|\u20bd|\$|\u20ac|\u20b8|\u20b4|\u20ba|Br|\u0442\u044b\u0441|\u043c\u043b\u043d|\u043a\u043c|\u043c|\u0441\u043c|\u043c\u043c)(?=[.,?!:;\s]|$)/g,
            h = /((?:\u0442\u044b\u0441|\u043c\u043b\u043d)\.?) (\u0440|\u0440\u0443\u0431|\u20bd|\$|\u20ac|\u20b8|\u20b4|\u20ba|Br|\u043a\u043c|\u043c|\u0441\u043c|\u043c\u043c)(?=[.,?!:;\s]|$)/g,
            g = / \-(\d\d?)%/g, v = / !/;

        function m(t, e, n, r) {
            return (n + r).length + 1 <= i.maxGluedLength ? e + n + o + r : t
        }

        function _(t, e, n) {
            return t.length <= i.maxGluedLength ? e + o + n : t
        }

        function b(t, e, n) {
            return u.test(n) ? t : e + "\xab" + n + "\xbb"
        }

        e.prettify = function (t, e) {
            if (i = r({
                gluePrepositions: !0,
                maxGluedLength: 1 / 0,
                softBreakPunct: !1,
                fixCurrency: !0
            }, e), c.test(t)) return t;
            var o = (t = (0, n(45609).Vx)(t)).match(l), u = t.match(a);
            return o && u && o.length % 2 == 0 && o.length / 2 === u.length && (t = t.replace(a, b)), i.gluePrepositions && (t = t.replace(s, m)), i.softBreakPunct && (t = t.replace(d, "$1<wbr />$2")), t = t.replace(p, "$1\xa0").replace(f, _).replace(h, _).replace(g, " \u2212$1%").replace(v, "\xa0!"), i.fixCurrency && (t = (0, n(94427).fixCurrency)(t)), t
        }
    }, 99125: (t, e, n) => {
        "use strict";
        e.v = void 0, e.v = function (t) {
            var e = document.createElement("div");
            document.body.appendChild(e), e.style.position = "fixed", e.style.left = "-99px";
            var r = document.createElement("div");
            e.appendChild(r);
            var i = (0, n(66648).generateHexString)(10), o = {nonce: t.nonce, width: 1, height: 1, html: t.html, id: i},
                a = (0, n(94532).once)((function () {
                    var t = window;
                    (0, n(62763).nukeSafeframe)(t, i), (0, n(91709).removeNodeFromParent)(e)
                })), s = function () {
                    setTimeout(a, t.wait)
                }, l = window;
            return (0, n(62763).initSafeframe)(l, r, o, (function () {
                (0, n(26413).isFunction)(t.onError) && t.onError(), s()
            }), (function () {
                (0, n(26413).isFunction)(t.onLoad) && t.onLoad(), s()
            }), (function (e, n) {
                t.onAction(e, n)
            })), a
        }
    }, 37579: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.isNativeSendBeaconSupported = void 0;
        e.isNativeSendBeaconSupported = function (t) {
            return (0, n(61438).checkNativeCode)(t.navigator.sendBeacon) || !1
        }
    }, 17553: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.setAttributes = void 0, e.setAttributes = function (t, e) {
            t && (0, n(10407).getObjectKeys)(e).forEach((function (n) {
                var r = e[n];
                null === r ? t.removeAttribute(n) : t.setAttribute(n, r)
            }))
        }
    }, 17347: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.identify = void 0;
        var n = 0, r = "__" + Number(new Date),
            i = Boolean(null === window || void 0 === window ? void 0 : window.document), o = function (t) {
                return i ? "csr-".concat(t).concat(++n) : "".concat(t).concat(++n)
            };
        e.identify = function (t) {
            var e = void 0 === t ? {} : t, n = e.obj, i = e.onlyGet, a = void 0 !== i && i, s = e.prefix,
                l = void 0 === s ? "uniq" : s;
            if (!n) return o(l);
            var c = "uniqueID" in n ? "uniqueID" : r;
            return a || c in n ? n[c] : n[c] = o(l)
        }
    }, 81444: (t, e, n) => {
        "use strict";
        var r = function (t, e, n) {
            if (n || 2 === arguments.length) for (var r, i = 0, o = e.length; i < o; i++) !r && i in e || (r || (r = Array.prototype.slice.call(e, 0, i)), r[i] = e[i]);
            return t.concat(r || Array.prototype.slice.call(e))
        };
        Object.defineProperty(e, "__esModule", {value: !0}), e.Destroyable = void 0;
        var i = function () {
            function t() {
                this._isDestroyed = !1, this.destroyHandlers = []
            }

            return Object.defineProperty(t.prototype, "destroyReason", {
                get: function () {
                    return this._destroyReason
                }, enumerable: !1, configurable: !0
            }), Object.defineProperty(t.prototype, "isDestroyed", {
                get: function () {
                    return this._isDestroyed
                }, enumerable: !1, configurable: !0
            }), t.addErrorHandler = function (e) {
                t.errorHandlers.push(e)
            }, t.prototype.onDestroy = function (t) {
                this._addDestroyHandler(t)
            }, t.prototype.addDestroyListener = function (t) {
                this._addDestroyHandler(t)
            }, t.prototype.addDestroyHandler = function (t) {
                this._addDestroyHandler(t)
            }, t.prototype.destroy = function () {
                for (var e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
                var o = e[0];
                if (!this._isDestroyed) {
                    this._isDestroyed = !0, this._destroyReason = o;
                    try {
                        n(71075).p.apply(void 0, r([this.destroyHandlers], e, !1))
                    } catch (e) {
                        (0, n(71075).p)(t.errorHandlers, e)
                    }
                    this.destroyHandlers.length = 0
                }
            }, t.prototype.getIsDestroyed = function () {
                return this._isDestroyed
            }, t.prototype.ignoreAfterDestroy = function (t) {
                var e = this, r = t;
                return function () {
                    for (var t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
                    e.isDestroyed && (r = n(85225).noop), r.apply(e, t)
                }
            }, t.prototype._addDestroyHandler = function (t) {
                this._isDestroyed ? t.apply(void 0, [this._destroyReason]) : this.destroyHandlers.push(t)
            }, t.errorHandlers = [], t
        }();
        e.Destroyable = i
    }, 37598: (t, e) => {
        "use strict";
        var n = function (t, e, n) {
            if (n || 2 === arguments.length) for (var r, i = 0, o = e.length; i < o; i++) !r && i in e || (r || (r = Array.prototype.slice.call(e, 0, i)), r[i] = e[i]);
            return t.concat(r || Array.prototype.slice.call(e))
        };
        Object.defineProperty(e, "__esModule", {value: !0}), e.throttle = void 0, e.throttle = function (t, e, r) {
            var i, o = 0, a = function () {
                for (var e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
                t.call.apply(t, n([r], e, !1))
            };
            return function () {
                for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                var s = Date.now(), l = s - o;
                clearTimeout(i), l < e ? i = window.setTimeout.apply(window, n([a, e - l], t, !1)) : (o = s, a.apply(void 0, t))
            }
        }
    }, 44989: (t, e) => {
        "use strict";
        e.R = void 0;
        var n = 0, r = [];
        e.R = function (t) {
            return 0 === r.length && (n = window.setInterval((function () {
                r.forEach((function (t) {
                    return t()
                }))
            }), 250)), r.push(t), function () {
                var e = r.indexOf(t);
                e > -1 && r.splice(e, 1), 0 === r.length && clearInterval(n)
            }
        }
    }, 22805: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.VISIBILITY_CRITERIA = void 0, function (t) {
            t["MRC"] = "mrc", t["YA"] = "ya"
        }(e.VISIBILITY_CRITERIA || (e.VISIBILITY_CRITERIA = {}))
    }, 88159: (t, e, n) => {
        "use strict";

        function r(t, e, n) {
            return Math.max(Math.min(e, n) - Math.max(t, 0), 0)
        }

        Object.defineProperty(e, "__esModule", {value: !0}), e.getRatioInViewport = void 0, e.getRatioInViewport = function (t) {
            var e = (0, n(34403).getBoundingClientRect)(t), i = e.width, o = e.height, a = 0;
            if (i > 0 && o > 0) {
                var s = (0, n(52544).getWindowSize)();
                a = r(e.left, e.right, s.width) * r(e.top, e.bottom, s.height) / (i * o)
            }
            return a
        }
    }, 65234: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.isInViewport = void 0, e.isInViewport = function (t, e) {
            return (0, n(88159).getRatioInViewport)(t) >= (e || Number.MIN_VALUE)
        }
    }, 34605: (t, e, n) => {
        "use strict";
        var r;
        Object.defineProperty(e, "__esModule", {value: !0}), e.getDelay = void 0;
        var i = ((r = {})[n(22805).VISIBILITY_CRITERIA.YA] = 2100, r[n(22805).VISIBILITY_CRITERIA.MRC] = 1e3, r);
        e.getDelay = function (t) {
            return i[t]
        }
    }, 4264: (t, e) => {
        "use strict";
        e.GU = e.Cd = e.qX = e.nu = void 0, e.nu = 242500, e.qX = .3, e.Cd = .5, e.GU = function (t, n) {
            return n && (n.clientWidth || 0) * (n.clientHeight || 0) >= e.nu ? e.qX : e.Cd
        }
    }, 38554: (t, e) => {
        "use strict";
        e.e = void 0;
        var n = function () {
            function t(t) {
                void 0 === t && (t = window), this.windowObj = t, this.initYaBrowserApi()
            }

            return t.prototype.canUseYaBroApi = function () {
                return Boolean(this.yaBroApiInstance && this.yaBroApiInstance.isInCustoPage)
            }, t.prototype.isPageHiddenYaBroApi = function () {
                return !(this.yaBroApiInstance && this.yaBroApiInstance.pageVisible)
            }, t.prototype.initYaBrowserApi = function () {
                var t = this;
                this.windowObj.browser && this.windowObj.browser.BrowserEmbeddedApi && this.windowObj.browser.BrowserEmbeddedApi.getInstance().then((function (e) {
                    t.yaBroApiInstance = e
                }))
            }, t
        }();
        e.e = n
    }, 46466: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.isHidden = e.changeEventName = void 0;
        var r = new (n(38554).e);
        e.changeEventName = "visibilitychange", e.isHidden = function () {
            return r.canUseYaBroApi() ? r.isPageHiddenYaBroApi() : Boolean(document["hidden"])
        }
    }, 72233: (t, e, n) => {
        "use strict";
        var r = function () {
            return r = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }, r.apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {value: !0}), e.VisibilityConfirmer = void 0;
        var i = function () {
            function t(t) {
                var e = this;
                this.onChange = function (t) {
                    return e.check(t)
                };
                var i = {
                    portion: void 0 !== t.portion ? t.portion : (0, n(4264).GU)(n(22805).VISIBILITY_CRITERIA.YA, t.element),
                    interval: void 0 !== t.interval ? t.interval : n(7690).DEFAULT_INTERVAL,
                    overlappedPoints: void 0 !== t.overlappedPoints ? t.overlappedPoints : [[0, 0]]
                }, o = (t.strategy ? t.strategy : n(36428).GeneralStrategy.factory)({
                    portion: Math.max(Number.MIN_VALUE, i.portion),
                    interval: i.interval,
                    overlappedPoints: i.overlappedPoints,
                    element: t.element,
                    callback: (0, n(12251).protect)("visibilityObserver", this.onChange)
                });
                if (!o) throw new Error("VisibilityConfirmer: no strategy");
                this.strategy = o, this.confirmationEntries = (0, n(15735).map)(t.confirmations || [], (function (t) {
                    return r(r({
                        confirmOnHover: !0,
                        delay: (0, n(34605).getDelay)(n(22805).VISIBILITY_CRITERIA.YA)
                    }, t), {confirmTimeoutId: null, isConfirmed: !1})
                })), this.preventStop = t.preventStop, this.onVisibilityChange = t.onVisibilityChange;
                var a = (0, n(41110).on)(t.element, "mouseover", (function () {
                    return e.onHover()
                }));
                this.stopMouseoverTracking = function () {
                    return (0, n(41110).un)(a)
                }, !1 !== t.autostart && this.start()
            }

            return t.factory = function (e, n) {
                return new t({
                    portion: n.factoryOptions.portion,
                    overlappedPoints: n.factoryOptions.overlappedPoints,
                    interval: n.factoryOptions.interval,
                    element: e,
                    strategy: n.factory,
                    preventStop: n.preventStop,
                    onVisibilityChange: n.onVisibilityChange,
                    confirmations: [{delay: n.delay, onConfirm: n.onConfirm, confirmOnHover: !1}]
                })
            }, t.prototype.start = function () {
                this.strategy.start()
            }, t.prototype.stop = function (t) {
                void 0 === t && (t = !1), this.cancelConfirmSchedule(), this.preventStop && !t || (this.strategy.stop(), this.stopMouseoverTracking())
            }, t.prototype.confirm = function () {
                var t = this;
                (0, n(15137).forEach)(this.confirmationEntries, (function (e) {
                    return t.confirmEntry(e, -1)
                }))
            }, t.prototype.getIsVisible = function () {
                return this.strategy.getIsVisible()
            }, t.prototype.onHover = function () {
                var t = this;
                this.stopMouseoverTracking(), (0, n(15137).forEach)(this.confirmationEntries, (function (e) {
                    !e.isConfirmed && e.confirmOnHover && t.confirmEntry(e, -1)
                }))
            }, t.prototype.confirmEntry = function (t, e) {
                t.isConfirmed || (t.isConfirmed = !0, null !== t.confirmTimeoutId && (clearTimeout(t.confirmTimeoutId), t.confirmTimeoutId = null), t.onConfirm(e < 0 ? e : Number(new Date) - e, this.strategy.isDetermined), this.confirmationEntries.splice((0, n(22886).indexOf)(this.confirmationEntries, t), 1), 0 === this.confirmationEntries.length && this.stop())
            }, t.prototype.check = function (t) {
                this.onVisibilityChange && this.onVisibilityChange(t), t ? this.scheduleConfirm() : this.cancelConfirmSchedule()
            }, t.prototype.scheduleConfirm = function () {
                var t = this, e = Date.now();
                (0, n(15137).forEach)(this.confirmationEntries, (function (n) {
                    n.delay ? null === n.confirmTimeoutId && (n.confirmTimeoutId = setTimeout((function () {
                        return t.confirmEntry(n, e)
                    }), n.delay)) : t.confirmEntry(n, e)
                }))
            }, t.prototype.cancelConfirmSchedule = function () {
                (0, n(15137).forEach)(this.confirmationEntries, (function (t) {
                    null !== t.confirmTimeoutId && (clearTimeout(t.confirmTimeoutId), t.confirmTimeoutId = null)
                }))
            }, t
        }();
        e.VisibilityConfirmer = i
    }, 9381: (t, e) => {
        "use strict";
        e.aI = e.XC = void 0, e.XC = 1e3 / 60, e.aI = function (t) {
            var n = t.requestAnimationFrame || t.webkitRequestAnimationFrame;
            if (n) return n.__pbind(t);
            var r = 0;
            return function (n) {
                var i = Date.now(), o = Math.max(0, e.XC - (i - r));
                r = i + o, t.setTimeout(n, o)
            }
        }
    }, 85236: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.vsync = e.Vsync = void 0;
        var r = function () {
            function t() {
                var t = this;
                this.boundRunScheduledTasks = function () {
                    return t.runScheduledTasks_()
                }, this.raf = (0, n(9381).aI)(window), this.tasks = [], this.nextTasks = [], this.states = [], this.nextStates = [], this.scheduled = !1, this.nextFrameResolver = null, this.nextFramePromise = null
            }

            return t.prototype.measure = function (t) {
                this.run({measure: t, mutate: void 0})
            }, t.prototype.measurePromise = function (t) {
                var e = this;
                return new Promise((function (n) {
                    e.measure((function () {
                        n(t())
                    }))
                }))
            }, t.prototype.mutate = function (t) {
                this.run({measure: void 0, mutate: t})
            }, t.prototype.mutatePromise = function (t) {
                return this.runPromise({measure: void 0, mutate: t})
            }, t.prototype.run = function (t, e) {
                this.tasks.push(t), this.states.push(e || void 0), this.schedule()
            }, t.prototype.runPromise = function (t, e) {
                if (this.run(t, e), this.nextFramePromise) return this.nextFramePromise;
                var r = new (n(48777).B);
                return this.nextFrameResolver = r.resolve, this.nextFramePromise = r.promise
            }, t.prototype.schedule = function () {
                this.scheduled || (this.scheduled = !0, this.forceSchedule())
            }, t.prototype.forceSchedule = function () {
                this.raf(this.boundRunScheduledTasks)
            }, t.prototype.runScheduledTasks_ = function () {
                this.scheduled = !1;
                var t = this, e = t.tasks, n = t.states, r = t.nextFrameResolver;
                this.nextFrameResolver = null, this.nextFramePromise = null, this.tasks = this.nextTasks, this.states = this.nextStates;
                for (var o = 0; o < e.length; o++) {
                    var a = e[o].measure;
                    a && (i(a, n[o]) || (e[o].mutate = void 0))
                }
                for (o = 0; o < e.length; o++) {
                    var s = e[o].mutate;
                    s && i(s, n[o])
                }
                this.nextTasks = e, this.nextStates = n, this.nextTasks.length = 0, this.nextStates.length = 0, r && r()
            }, t
        }();

        function i(t, e) {
            try {
                t(e)
            } catch (t) {
                return (0, n(12251).rethrowAsync)(t, "Vsync"), !1
            }
            return !0
        }

        e.Vsync = r, e.vsync = new r
    }, 72178: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.IN_BANNER_PRESETS = e.IN_BANNER_PRESET_TWO_IMAGES_EQUAL = e.IN_BANNER_PRESET_TWO_IMAGES_INVERSE = e.IN_BANNER_PRESET_TWO_IMAGES = e.IN_BANNER_PRESET_VIDEO_ON_RIGHT = e.IN_BANNER_PRESET_VIDEO_ON_LEFT = e.IN_BANNER_PRESET_VIDEO_ON_BOTTOM = e.IN_BANNER_PRESET_VIDEO_ON_TOP = void 0, e.IN_BANNER_PRESET_VIDEO_ON_TOP = "media-banner_theme_in_banner", e.IN_BANNER_PRESET_VIDEO_ON_BOTTOM = "media-banner_theme_in_banner_inverse", e.IN_BANNER_PRESET_VIDEO_ON_LEFT = "media-banner_theme_in_banner_on_left", e.IN_BANNER_PRESET_VIDEO_ON_RIGHT = "media-banner_theme_in_banner_on_right", e.IN_BANNER_PRESET_TWO_IMAGES = "media-banner_theme_two_images_in_banner", e.IN_BANNER_PRESET_TWO_IMAGES_INVERSE = "media-banner_theme_two_images_in_banner_inverse", e.IN_BANNER_PRESET_TWO_IMAGES_EQUAL = "media-banner_theme_two_images_in_banner_equal", e.IN_BANNER_PRESETS = [e.IN_BANNER_PRESET_VIDEO_ON_TOP, e.IN_BANNER_PRESET_VIDEO_ON_BOTTOM, e.IN_BANNER_PRESET_VIDEO_ON_LEFT, e.IN_BANNER_PRESET_VIDEO_ON_RIGHT, e.IN_BANNER_PRESET_TWO_IMAGES, e.IN_BANNER_PRESET_TWO_IMAGES_INVERSE, e.IN_BANNER_PRESET_TWO_IMAGES_EQUAL]
    }, 91081: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.BUSINESS_AD_URL = void 0, e.BUSINESS_AD_URL = "https://yandex.ru/business/?utm_source=yan_banner"
    }, 22143: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.SOCIAL_AD_URL = void 0, e.SOCIAL_AD_URL = "https://yandex.ru/socialads-transparency-report"
    }, 9049: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.SURVEY_AD_LABEL_URL = void 0, e.SURVEY_AD_LABEL_URL = "https://surveys.yandex.ru/landing"
    }, 19436: (t, e, n) => {
        "use strict";
        var r, i = (r = function (t, e) {
            return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }, r(t, e)
        }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function n() {
                this.constructor = t
            }

            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        e.C = void 0;
        var o = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return i(e, t), e.prototype.initRefreshment = function (t) {
                var e = this;
                (0, n(46466).isHidden)() ? (0, n(41110).on)(document, n(46466).changeEventName, (function () {
                    return e.refresh(t)
                })) : this.refresh(t)
            }, e
        }(n(82270).I);
        e.C = o
    }, 20966: (t, e, n) => {
        "use strict";
        e.t = void 0;
        var r = "exp" === (0, n(88772).useExperimentFlag)("REFRESH_30_50"), i = function () {
            function t() {
                this.store = {}, this.hiddenMoment = 1 / 0, this.initRefreshment()
            }

            return t.prototype.register = function (t) {
                this.store[t.uniqueId] = {confirmed: !1, onRefresh: t.onRefresh}
            }, t.prototype.confirm = function (t) {
                var e = this.store[t];
                e && (e.confirmed = !0)
            }, t.prototype.unregister = function (t) {
                delete this.store[t]
            }, t.prototype.initRefreshment = function () {
                var t = this;
                (0, n(41110).on)(document, n(46466).changeEventName, (function () {
                    (0, n(46466).isHidden)() ? t.hiddenMoment = Date.now() : Date.now() - t.hiddenMoment > 1e4 && t.triggerCallbacks()
                }))
            }, t.prototype.triggerCallbacks = function () {
                for (var t, e = this.getConfirmedIds(), i = 0; i < e.length; i++) {
                    var o = (null === (t = (0, n(74472).getPlacement)(e[i])) || void 0 === t ? void 0 : t.renderTo) || "",
                        a = (0, n(5989).getElementById)(o);
                    if (r) {
                        if (!a) return;
                        var s = (0, n(34403).getBoundingClientRect)(a), l = s.width * s.height > n(4264).nu ? .3 : .5;
                        return void ((0, n(65234).isInViewport)(a, l) && this.store[e[i]].onRefresh())
                    }
                    a && (0, n(65234).isInViewport)(a, n(49573).REFRESH_VIEWPORT_VISIBLE_PART) && this.store[e[i]].onRefresh()
                }
            }, t.prototype.getConfirmedIds = function () {
                var t = [];
                for (var e in this.store) this.store[e].confirmed && t.push(e);
                return t
            }, t
        }();
        e.t = i
    }, 82270: (t, e, n) => {
        "use strict";
        e.I = void 0;
        var r = function () {
            function t() {
                this.store = {}
            }

            return t.prototype.register = function (t) {
                var e = this.store[t.uniqueId], n = e ? e.count : 0;
                this.unregister(t.uniqueId), this.store[t.uniqueId] = {
                    confirmed: !1,
                    onRefresh: t.onRefresh,
                    timeout: t.timeout || 9e4,
                    timeoutId: -1,
                    count: n,
                    maxCount: t.maxCount || 10
                }
            }, t.prototype.confirm = function (t) {
                var e = this, n = this.store[t];
                n && !n.confirmed && (n.confirmed = !0, n.timeoutId = setTimeout((function () {
                    e.initRefreshment(t)
                }), n.timeout))
            }, t.prototype.unregister = function (t) {
                var e, n = null === (e = this.store[t]) || void 0 === e ? void 0 : e.timeoutId;
                n && -1 !== n && clearTimeout(n), i(t), delete this.store[t]
            }, t.prototype.initRefreshment = function (t) {
                var e, r = this,
                    i = (null === (e = (0, n(74472).getPlacement)(t)) || void 0 === e ? void 0 : e.renderTo) || "",
                    o = (0, n(5989).getElementById)(i);
                o && ((0, n(65234).isInViewport)(o, n(49573).REFRESH_VIEWPORT_VISIBLE_PART) && !document.hidden ? this.refresh(t) : (0, n(39698).addObserver)(i, (function (e) {
                    e.ratio > .5 && r.refresh(t)
                })))
            }, t.prototype.refresh = function (t) {
                var e = this.store[t];
                e && (e.count++, e.count > e.maxCount || (i(t), e.onRefresh()))
            }, t
        }();

        function i(t) {
            var e, r = (null === (e = (0, n(74472).getPlacement)(t)) || void 0 === e ? void 0 : e.renderTo) || "";
            r && (0, n(39698).removeObserver)(r, document)
        }

        e.I = r
    }, 62570: (t, e, n) => {
        "use strict";
        var r = function () {
            return r = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }, r.apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {value: !0}), e.refresher = void 0;
        var i = function () {
            function t() {
                this.callbacks = {}, this.tabRefresher = new (n(20966).t), this.timeRefresher = new (n(82270).I), this.fullScreenRefresher = new (n(19436).C)
            }

            return t.prototype.register = function (t) {
                var e = this;
                this.callbacks[t.uniqueId] = t.onRefresh;
                var i = r(r({}, t), {
                    onRefresh: function () {
                        var r, i;
                        null === (i = (r = e.callbacks)[t.uniqueId]) || void 0 === i || i.call(r), e.callbacks[t.uniqueId] = n(85225).noop
                    }
                });
                "tab" === t.rule ? this.tabRefresher.register(i) : "time" === t.rule ? this.timeRefresher.register(i) : "fullscreen" === t.rule && this.fullScreenRefresher.register(i)
            }, t.prototype.confirm = function (t) {
                this.tabRefresher.confirm(t), this.timeRefresher.confirm(t), this.fullScreenRefresher.confirm(t)
            }, t.prototype.unregister = function (t) {
                this.tabRefresher.unregister(t), this.timeRefresher.unregister(t), this.fullScreenRefresher.unregister(t), delete this.callbacks[t]
            }, t
        }();
        e.refresher = new i
    }, 81713: (t, e, n) => {
        "use strict";
        var r = function () {
            return r = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }, r.apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {value: !0}), e.initReportListener = void 0, e.initReportListener = function () {
            (0, n(41110).on)(window, "message", (function (t) {
                var e = (0, n(91366).O)(t.data) || t.data;
                if (e.name === n(90812).O5) {
                    var i = e || {}, o = i.reports, a = void 0 === o ? [] : o, s = i.params, l = void 0 === s ? {} : s;
                    (0, n(15137).forEach)(a, (function (t) {
                        return n(49874).logger.traceLog(r(r({}, l), t.body ? {
                            sourceFile: t.body.sourceFile,
                            lineNumber: t.body.lineNumber,
                            columnNumber: t.body.columnNumber
                        } : {}), (0, n(21206).F)(t), 100)
                    }))
                }
            }))
        }
    }, 84330: (t, e) => {
        "use strict";
        var n;
        Object.defineProperty(e, "__esModule", {value: !0}), e.isMainPage = e.PAGES = void 0, function (t) {
            t["MAIN"] = "main"
        }(n = e.PAGES || (e.PAGES = {})), e.isMainPage = function (t) {
            var e;
            return (null === (e = null == t ? void 0 : t.pcodeSettings) || void 0 === e ? void 0 : e.page) === n.MAIN
        }
    }, 68810: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.isMainPageRefreshBlock = void 0, e.isMainPageRefreshBlock = function (t, e) {
            var r;
            if (!t) return !1;
            if ((0, n(84330).isMainPage)(null === (r = t.settings) || void 0 === r ? void 0 : r[e])) {
                if (t.rtb) {
                    var i = Number(t.rtb.height || 1 / 0);
                    return n(50880).isMobile && i <= 134 || !n(50880).isMobile && i <= 180
                }
                return !0
            }
            return !1
        }
    }, 8990: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.getRenderId = void 0, e.getRenderId = function (t) {
            return (t.blockId || t.renderTo) + "#" + (t.pageNumber || "")
        }
    }, 98164: (t, e, n) => {
        "use strict";
        var r = function () {
            return r = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }, r.apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {value: !0}), e.prepareDistributionConfig = void 0, e.prepareDistributionConfig = function (t) {
            var e = r({}, t);
            return e.onRender = (0, n(95456).isolate)(e.onRender), e.onHide = (0, n(95456).isolate)(e.onHide), e.onResize = (0, n(95456).isolate)(e.onResize), e
        }
    }, 40085: (t, e) => {
        "use strict";
        e.Q = void 0;
        e.Q = function () {
            var t;
            try {
                return "true" === new URLSearchParams(null === (t = null === window || void 0 === window ? void 0 : window.location) || void 0 === t ? void 0 : t.search).get("darkTheme")
            } catch (t) {
                return !1
            }
        }
    }, 97425: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.DirectVisibilityManager = void 0;
        var r = function () {
            function t() {
                this.abused = {}
            }

            return t.prototype.isNotConfirmed = function (e) {
                return !t.confirmed[e]
            }, t.prototype.confirm = function (e) {
                t.confirmed[e] = !0
            }, t.prototype.unConfirm = function (e) {
                t.confirmed[e] = !1
            }, t.prototype.confirmRtb = function (t, e, r) {
                this.rtbVisibilityManager || (this.rtbVisibilityManager = n(59060).x.getManager({
                    linkTail: t.linkTail,
                    viewNotices: r,
                    isSendTestIds: e.isSendTestIds,
                    activeTestIds: e.activeTestIds,
                    testIds: e.testIds
                }), this.rtbVisibilityManager.confirm(e))
            }, t.prototype.abuse = function (t) {
                this.abused[t] = !0
            }, t.prototype.isAbused = function (t) {
                return Boolean(this.abused[t])
            }, t.confirmed = {}, t
        }();
        e.DirectVisibilityManager = r
    }, 5930: (t, e) => {
        "use strict";
        e.g = void 0, e.g = {miss: 0, exp: 1, ctl: 2}
    }, 7234: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.getVisibilityContainer = e.getContainer = void 0;
        e.getContainer = function (t, e, n) {
            return t
        }, e.getVisibilityContainer = function (t) {
            return t
        }
    }, 14367: (t, e, n) => {
        "use strict";
        var r = function () {
            return r = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }, r.apply(this, arguments)
        }, i = Object.create ? function (t, e, n, r) {
            void 0 === r && (r = n);
            var i = Object.getOwnPropertyDescriptor(e, n);
            i && !("get" in i ? !e.__esModule : i.writable || i.configurable) || (i = {
                enumerable: !0,
                get: function () {
                    return e[n]
                }
            }), Object.defineProperty(t, r, i)
        } : function (t, e, n, r) {
            void 0 === r && (r = n), t[r] = e[n]
        }, o = Object.create ? function (t, e) {
            Object.defineProperty(t, "default", {enumerable: !0, value: e})
        } : function (t, e) {
            t["default"] = e
        }, a = function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t) for (var n in t) "default" !== n && Object.prototype.hasOwnProperty.call(t, n) && i(e, t, n);
            return o(e, t), e
        };
        Object.defineProperty(e, "__esModule", {value: !0}), e.DirectDataSource = void 0;
        var s = a(n(78359)), l = {};
        (0, n(13058).isInIframe)(window) && (l["target-ref"] = document.referrer);
        var c = {off: 0, disabled: 1, calculation: 2, enabled: 3}, u = function () {
            function t(t, e) {
                var r, i, o = this, a = (0, n(56240).getUaasConfig)();
                if (this.useExperimentFlag = function (t, e) {
                    return void 0 === e && (e = !1), (0, n(88772).useExperimentFlag)(t, e, o._clientActiveTestIds)
                }, this.isInterstitial = (0, n(22130).isNanpuInterstitial)(e), this._data = t.data, !(0, n(7386).isHermione)() && ((0, n(93052).j)(this._data) || a.isInternalNetwork || "true" === (null === (r = this._data.common) || void 0 === r ? void 0 : r.isStaff))) try {
                    this._rawDataJSON = n.lv["json"].stringify(t.data, null, 2)
                } catch (t) {
                }
                this._settings = t.settings, this._visibilityManager = t.visibilityManager, this._onAdAbused = t.onAdAbused, this._product = e.product, this._uniqueId = e.uniqueId, this._statId = e.statId, this._blockId = e.blockId, this._renderTo = e.renderTo, this._pageId = e.pageId, this._pageNumber = e.pageNumber, this._clickMacro = e.clickMacro, this._isInOverlay = Boolean(e.isInOverlay), this._nonce = e.cspNonce, this._refreshed = e.refresh || !1, this._containsData = e.containsData || Boolean(e.renderData), this._flags = (0, n(56240).getUaasFlags)(), this._testIds = a.testIds, this._activeTestIds = (null === (i = this._data.common) || void 0 === i ? void 0 : i.activeTestIds) || [], this._videoCallbacks = e.videoCallbacks, this._clientActiveTestIds = [], this._hasVideo = !1, this._isAdfox = e.isAdfox, this._isSspRtbCache = e.isSspRtbCache, this._isRmp = !1, this._rewardedCallback = e.onRewarded, this._rewardedCountCallback = e.onRewardedCount, this._closeCallback = e.onClose, this._isClosable = Boolean(e.showCloseButton), this._isMainPageBlock = (0, n(84330).isMainPage)(t.settings) && Boolean(t.settings.smeta), (0, n(88772).collectAllActiveTestIds)(this._activeTestIds), this.callOnHide = function () {
                    (0, n(26413).isFunction)(e.onHide) && e.onHide.call(window, e.renderTo)
                }, this._adUsageStorage = (0, n(91411).getAdUsageStorage)(t), this._testtag = new (n(62236).T), this._bannerSizes = [], this._visibilitySettings = t.data.visibilitySettings || {}, this.initTesttag();
                var s = this._getFromData("ads") || [];
                this.saveToDirectStorage(s), (0, n(15137).forEach)(s, (function (t) {
                    (0, n(41712).isNewFullscreen)(o.getSettings() || {}) || (0, n(80200).canUseAdtune)(window) && !o.isFullscreen() || delete t.abuseUrl
                })), this._ads = s, this._visibilityTime = (0, n(87378).calcVisibilityTime)(this.getSettings()), this._forceDarkTheme = Boolean(e.darkTheme), this._position = e.position
            }

            return t.prototype.getBlockId = function () {
                return this.getPageId() + "-" + this.getImpId()
            }, t.prototype.getProductType = function () {
                var t;
                return null === (t = this._data.common) || void 0 === t ? void 0 : t.productType
            }, t.prototype.initTesttag = function () {
                var t = this._settings.format.index, e = {
                    advancedFormat: Math.floor(t / 64),
                    format: t,
                    isApp: this.isApp(),
                    isFullscreen: this.isFullscreen(),
                    isFloorAd: this.isFloorAd(),
                    isRefreshed: this.isRefreshed(),
                    honeypot: Boolean(this.getHoneypot()),
                    renderedBannersAmount: 0,
                    isCarousel: !1
                };
                this.setTesttagProps(e), this.setAdaptiveAdTesttagInfo()
            }, t.prototype.setAdaptiveAdTesttagInfo = function () {
                var t = (0, n(74472).getPlacement)(this.getUniqueId());
                if (t) {
                    var e = t.getLayoutConfig();
                    if (e) {
                        var r = !1, i = !1, o = e.get("top"), a = e.get("w"), s = e.get("win_height"), l = e.get("h"),
                            c = e.get("win_width"), u = 0 === l, d = o / s > 1,
                            p = l > e.get("height") && l / s <= 1.015, f = u || p && l / s >= .6849999999999999,
                            h = u || p && l / s >= .385, g = a / c >= .885;
                        n(50880).isMobile ? this.isFullscreen() || this.isFloorAd() || !d || (r = !0, f && g && (i = !0)) : a < 400 && !this.isFullscreen() && (r = !0, h && (i = !0)), this.setTesttagProps({
                            isAdaptiveAd: i && !this._settings.height,
                            canBeAdaptiveAd: r
                        })
                    }
                }
            }, t.prototype.setTesttagProps = function (t) {
                this._testtag.setProps(t)
            }, t.prototype.getTesttagProps = function () {
                return this._testtag.getProps()
            }, t.prototype.getTesttag = function () {
                return this._testtag.toString()
            }, t.prototype.addBannerSize = function (t) {
                t.adId && this._bannerSizes.push(t)
            }, t.prototype.getBannerSizes = function () {
                return (0, n(62061).buildBannerSizes)(this._bannerSizes)
            }, t.prototype.getBannerSize = function (t, e) {
                void 0 === e && (e = !1);
                var r = (0, n(94383).find)(this._bannerSizes, (function (e) {
                    return (null == e ? void 0 : e.adId) === t
                }));
                if (r) return e ? r : (0, n(62061).buildBannerSizes)([r])
            }, t.prototype.getDesignId = function () {
                var t;
                return null === (t = this._data.common) || void 0 === t ? void 0 : t.designId
            }, t.prototype.getVideoCallbacks = function () {
                return this._videoCallbacks
            }, t.prototype.hasVideo = function () {
                return this._hasVideo
            }, t.prototype.isInOverlay = function () {
                return this._isInOverlay
            }, t.prototype.getVisibilityTime = function () {
                return this._visibilityTime
            }, t.prototype.getCspNonce = function () {
                return this._nonce
            }, t.prototype._getFromData = function (t) {
                var e;
                return null === (e = this._data[this._product]) || void 0 === e ? void 0 : e[t]
            }, t.prototype.prepareAd = function (t, e, r) {
                try {
                    var i = (0, n(61490).extend)({}, t), o = i.url;
                    i.uniqId = (0, n(67729).getRandomInt)(0, Number.MAX_SAFE_INTEGER), i.isFirst = 1 === r, s.isPhone && (i.telNumOriginal = i.telNum), this._prepareCallouts(i), i.skipPictures = this._settings.format.skipPictures || Boolean(Number(i.skipPictures)), i.images && !i.skipPictures && ((0, n(85696).S)("SKIP_PICTURES"), i.image = new (n(69958).t)(i.images, n(6368).b)), i.language = this.getLanguage(), i.domain = i.domain ? i.domain.replace(/^www\./, "") : "", /yandex\.ru\/turbo/i.test(i.targetUrl) && (this._settings.favicon = !1), /yandex\.ru\/(web-)?maps/i.test(i.targetUrl) && (i.domain = i.path, this._settings.favicon = !1), "1" !== this.getLanguage() && (delete i.address, delete i.geoDistance, delete i.geoDistanceRegular), i.address && (i.geoDistance || i.geoDistanceRegular) ? ((0, n(85696).S)("FORMAT_ADDRESS"), i.address = this._getFormattedAddress(i.address)) : i.address = null, i.geoDistance && ((0, n(85696).S)("GEO_DISTANCE_2"), i.geoDistance = (0, n(17172).prettify)(i.geoDistance)), this._settings.favicon && (i.favicon = this._getFavicon(i)), i.settings = this._settings, i.originalTitle = i.title, i.originalBody = i.body;
                    var a = this._settings.format.name, l = /^ssr/.test(a);
                    this._hasVideo || !i.vast && !i.vastBase64 || (this._hasVideo = !0);
                    var u = this.useExperimentFlag("SWR_SWR"), d = u && {3600: 1, 7200: 2}[u] || 0,
                        p = this.useExperimentFlag("FITTED_IMAGE_CSR");
                    this._isRmp = this.isMobileApp(i), i.bannerTesttag = new (n(67926).M0)({
                        bannerIndex: r,
                        hasImage: Boolean(i.images),
                        hasCallouts: Boolean(i.callouts),
                        hasPhone: Boolean(i.telNum),
                        hasTitle: Boolean(i.title),
                        hasSubtitle: Boolean(i.secondTitle),
                        hasText: Boolean(i.body),
                        hasDomain: Boolean(i.domain),
                        hasFavIcon: Boolean(i.favicon),
                        hasPrice: Boolean(i && i.price_info && i.price_info.price),
                        hasStoreRating: "number" == typeof i.floatMarketRating && i.floatMarketRating >= 0,
                        hasAddress: Boolean(i.address),
                        hasVideo: Boolean(i.vastBase64 || i.vast),
                        hasRmpIcon: Boolean(i.addInfo && i.addInfo.icon && i.addInfo.icon.length),
                        hasRmpRating: Boolean(i.addInfo && i.addInfo.reviewCount && i.addInfo.reviewCount > 0),
                        hasRmpPrice: Boolean(i.addInfo && i.addInfo.price && i.addInfo.price > 0),
                        hasRmpCall2Action: Boolean(i.addInfo && i.addInfo.callToActionUrl),
                        isRmp: this._isRmp,
                        fittedImageClientExp: !l && p && c.hasOwnProperty(p) ? c[p] : c.off,
                        staleWhileRevalidate: d,
                        skipTokenSlider: this.getSkipTokenSliderExp(),
                        hasPcodeInfo: Boolean(i.pCodeInfo)
                    });
                    var f = this.getAuxClickQueryParams(i, e), h = this.isMobileApp(i);
                    return i.url = this.createLink({
                        host: o,
                        params: f,
                        targetUrl: i.targetUrl,
                        isMobileApp: h
                    }), i.vcardUrl && (i.vcardUrl = this.createLink({
                        host: i.vcardUrl,
                        params: f,
                        targetUrl: i.targetUrl,
                        isMobileApp: h
                    })), i.callUrl && (i.callUrl = this.createLink({
                        host: i.callUrl,
                        params: f,
                        targetUrl: i.targetUrl,
                        isMobileApp: h
                    })), i.image && !i.skipPictures && (i.clickImageUrl = i.url), this._settings.noSitelinks || !i.sitelinks ? i.sitelinks = null : i.sitelinks = this._prepareSitelinks(i.sitelinks, f, h), this.isMobileApp(i) && this._prepareMobileApp(i, f), i.isFullscreen = this.isFullscreen(), i
                } catch (t) {
                    return n(49874).logger.error(t, "prepareAd"), null
                }
            }, t.prototype.createLink = function (t) {
                var e = t.host, r = t.params, i = t.isMobileApp, o = t.targetUrl,
                    a = new (n(98026).Url)({host: e, params: r});
                a.appendParams(l);
                var s = a.getUrl();
                return (0, n(98163).t)(window, this._clickMacro) && (s = "".concat(this._clickMacro).concat(encodeURIComponent(s))), new (n(32115).g)(s, o, i)
            }, t.prototype._getFormattedAddress = function (t) {
                if (!t) return null;
                return (0, n(15137).forEach)([[/,\s\u043e\u0444\u0438\u0441\s.+$/g, ""], [/\u0434.\s\u0434.\s?/i, "\u0434. "], [/\u043a\u043e\u0440\u043f.\s\u043a\u043e\u0440\u043f.\s?/i, "\u043a\u043e\u0440\u043f. "], [/,{2,}/g, ","], [/\.{2,}/g, "."]], (function (e) {
                    t = t.replace(e[0], e[1])
                })), t
            }, t.prototype._prepareCallouts = function (t) {
                if (this._settings.callouts && t.addInfo && "callouts" === t.addInfo.type && (0, n(85200).isArray)(t.addInfo["callouts_list"])) {
                    t.callouts = "callouts" === t.addInfo.type ? (0, n(15735).map)(t.addInfo["callouts_list"], (function (t) {
                        return (0, n(17172).prettify)(t)
                    })).slice(0, 4) : void 0
                } else t.callouts = void 0
            }, t.prototype._prepareSitelinks = function (t, e, r) {
                var i = this, o = [];
                return (0, n(15137).forEach)(t, (function (t) {
                    if (t.title && t.url) {
                        var n = i.createLink({host: t.url, params: e, targetUrl: t.targetUrl, isMobileApp: r});
                        o.push({title: t.title, url: n})
                    }
                })), o.length ? o : null
            }, t.prototype._prepareMobileApp = function (t, e) {
                if (t.addInfo = (0, n(46153).camelizeKeys)(t.addInfo), t.addInfo.callToActionUrl = this.createLink({
                    host: t.addInfo.callToActionUrl,
                    params: e,
                    targetUrl: t.targetUrl,
                    isMobileApp: !0
                }), t.addInfo.price && t.addInfo.price > 0) {
                    var r = t.addInfo.price;
                    t.addInfo.price = Number(r) > parseInt(r, 10) ? Number(r).toFixed(2) : Number(r), "RUB" === t.addInfo.priceCurrencyCode && (t.addInfo.priceCurrencySymbol = "\u0440.")
                } else delete t.addInfo.price;
                if (t.addInfo.reviewCount = t.addInfo.reviewCount && t.addInfo.reviewCount > 0 ? t.addInfo.reviewCount : void 0, t.addInfo.icon && t.addInfo.icon.length && !t.skipPictures) {
                    var i = new (n(69958).t)(t.addInfo.icon, n(6368).b);
                    t.hasIcon = !0, t.icon = i, t.image || (t.image = i, t.isIconIsteadOfImage = !0, t.clickImageUrl = t.url)
                } else t.hasIcon = !1;
                t.addInfo.rating = t.addInfo.rating && t.addInfo.rating > 0 ? t.addInfo.rating : void 0, t.addInfo.domain = t.domain, delete t.domain, t.isAppAd = !0
            }, t.prototype.getAppName = function (t) {
                var e;
                if (this.isMobileApp(t)) {
                    var n = null === (e = t.addInfo) || void 0 === e ? void 0 : e.name;
                    if (n && "string" == typeof n) return n
                }
            }, t.prototype._getFavicon = function (t) {
                if (this.isMobileApp(t)) {
                    if (t.skipPictures && t.addInfo.icon && t.addInfo.icon.length) return new (n(69958).t)(t.addInfo.icon, n(6368).b).getFitting(16, 16).src
                } else if (t.punyDomain) return new (n(98026).Url)({
                    host: n(49573).URLS.favicon,
                    path: t.punyDomain
                }).getUrl()
            }, t.prototype.isEmpty = function () {
                return !(this._data.direct.ssr || this._ads && this._ads.length)
            }, t.prototype.getClickConfirmation = function () {
                var t;
                return null === (t = this._data.common) || void 0 === t ? void 0 : t.clickConfirmation
            }, t.prototype.isYandexPage = function () {
                var t;
                return "1" == (null === (t = this._data.common) || void 0 === t ? void 0 : t.isYandexPage)
            }, t.prototype.isYandex = function () {
                var t;
                return "1" == (null === (t = this._data.common) || void 0 === t ? void 0 : t.isYandex)
            }, t.prototype.isApp = function () {
                var t;
                return "1" == (null === (t = this._data.common) || void 0 === t ? void 0 : t.isMobileSdk) || (0, n(64809).checkBundleIsMobilSdk)()
            }, t.prototype.getDetailedDeviceType = function () {
                var t;
                return null === (t = this._data.common) || void 0 === t ? void 0 : t.detailedDeviceType
            }, t.prototype.isMobileApp = function (t) {
                return t.addInfo && "mobile-app" === t.addInfo.type
            }, t.prototype.isAdfox = function () {
                return Boolean(this._isAdfox)
            }, t.prototype.isSspRtbCache = function () {
                return Boolean(this._isSspRtbCache)
            }, t.prototype.getLinkHead = function () {
                var t;
                return null === (t = this._data.common) || void 0 === t ? void 0 : t.linkHead
            }, t.prototype.getFreeAds = function () {
                var t = this;
                return (0, n(94320).filter)(this._ads, (function (e) {
                    return !t._visibilityManager.isAbused(e.adId)
                }))
            }, t.prototype.getBugData = function () {
                var t, e, n, r, i, o, a, s;
                return {
                    meta: this.hasShowBug() ? this._rawDataJSON : "",
                    rtbBidReqID: null === (e = null === (t = this._data) || void 0 === t ? void 0 : t.eventConfirmationData) || void 0 === e ? void 0 : e.RtbBidReqID,
                    hitLogId: null === (r = null === (n = this._data) || void 0 === n ? void 0 : n.eventConfirmationData) || void 0 === r ? void 0 : r.HitLogID,
                    bidReqIdStr: null === (o = null === (i = this._data) || void 0 === i ? void 0 : i.rtbAuctionInfo) || void 0 === o ? void 0 : o.bidReqIdStr,
                    bsGeneratedUniqID: null === (s = null === (a = this._data) || void 0 === a ? void 0 : a.rtbAuctionInfo) || void 0 === s ? void 0 : s.bsGeneratedUniqID,
                    block: this._getBlock()
                }
            }, t.prototype.hasShowBug = function () {
                return (0, n(21266).O)(this._data)
            }, t.prototype._getBlock = function () {
                var t = this._renderTo;
                return t ? document.getElementById(t) : null
            }, t.prototype.releaseAd = function (t) {
                this._adUsageStorage.release({adId: t, pageNumber: this._pageNumber, renderTo: this._renderTo})
            }, t.prototype.captureAd = function (t) {
                this._adUsageStorage.capture({adId: t, pageNumber: this._pageNumber, renderTo: this._renderTo})
            }, t.prototype.saveToDirectStorage = function (t) {
                var e = (0, n(15735).map)(t, (function (t) {
                    return t.adId
                }));
                this._adUsageStorage.captureDirect(e)
            }, t.prototype.getLanguage = function () {
                var t;
                return (null === (t = this._data.common) || void 0 === t ? void 0 : t.pageLang) || (0, n(86058).getDefaultLanguage)({isSSP: this.isSSP()})
            }, t.prototype.isInternalRequest = function () {
                return (0, n(93052).j)(this._data)
            }, t.prototype._getKeyFromSettings = function () {
                if (this._data && this._data.settings) for (var t in this._data.settings) if (Object.prototype.hasOwnProperty.call(this._data.settings, t)) return t;
                return null
            }, t.prototype.getPageId = function () {
                return this._pageId
            }, t.prototype.getImpId = function () {
                var t = this._blockId;
                return t ? (0, n(44751).parseBlockId)(t).impId : null
            }, t.prototype.getSettings = function () {
                var t = this._getKeyFromSettings();
                if (null !== t) return this._data.settings[t]
            }, t.prototype.getViewNotices = function () {
                return (0, n(2363).Y)(this.getSettings())
            }, t.prototype.getSsr = function () {
                return this._getFromData("ssr")
            }, t.prototype.getAuxParams = function (t, e) {
                return r(r({}, this.getAuxClickQueryParams(t, e)), l)
            }, t.prototype.confirmVisibilityInRtb = function (t) {
                void 0 === t && (t = {});
                var e = this.getSettings();
                e && e.linkTail && (t.testtagProps = (0, n(61490).extend)({
                    isApp: this.isApp(),
                    isFullscreen: this.isFullscreen()
                }, t.testtagProps), t.formatType = this._settings.format.index, t.actualFormat = (0, n(30374).getSsrActualFormat)(this.actualFormat, this._settings), t.testIds = this._testIds, t.activeTestIds = [].concat(this._activeTestIds, this._clientActiveTestIds), t.isSendTestIds = this.isSSP() || this.isApp(), t.bannerSizes = this.getBannerSizes(), this._visibilityManager.confirmRtb(e, t, this.getViewNotices()))
            }, t.prototype.onConfirmVisibility = function (t, e) {
                var n = this.getUnconfirmedAds(t);
                this.sendVisibilityConfirmation(n, e), this.rememberConfirmedAds(n)
            }, t.prototype.getUnconfirmedAds = function (t) {
                return (0, n(94320).filter)(t, (function (t) {
                    return this._visibilityManager.isNotConfirmed(t.linkTail)
                }), this)
            }, t.prototype.rememberConfirmedAds = function (t) {
                var e = this;
                (0, n(15137).forEach)(t, (function (t) {
                    return e._visibilityManager.confirm(t.linkTail)
                }))
            }, t.prototype.unconfirmAds = function (t) {
                var e = this;
                (0, n(15137).forEach)(t, (function (t) {
                    return e._visibilityManager.unConfirm(t.linkTail)
                }))
            }, t.prototype.sendVisibilityConfirmation = function (t, e) {
                var r;
                if ((t = this.getUnconfirmedAds(t)).length) {
                    (0, n(75294).H)(e);
                    var i = new (n(98026).Url)({
                        host: (0, n(62061).createLinkTailUrl)(this.getLinkHead(), t),
                        params: this.getAuxQueryParams(t, e)
                    });
                    i.appendParams(((r = {wmode: "0"})[n(62061).ORDER_BANNER_OPTIONS_KEY] = (0, n(62061).buildOrderBannerOptions)(t), r)), this.sendConfirm(i.getUrl(), t), this.rememberConfirmedAds(t)
                }
            }, t.prototype.trackClick = function (t, e) {
                var r = this, i = [t], o = e || {}, a = o.isConfirmedClick, s = o.onReturnCallback;
                (0, n(94345).trackClick)((function (t, e) {
                    var o, l = (0, n(62061).buildBannerTesttags)(i, {clickPixel: t, isConfirmedClick: Boolean(a)}),
                        c = ((o = {})[n(62061).ORDER_BANNER_OPTIONS_KEY] = (0, n(62061).buildOrderBannerOptions)(i), o[n(62061).BANNER_TEST_TAG_KEY] = l.toString(), o.reactionTime = e, o);
                    s && t === n(67926).UZ.RETURN && s(e);
                    var u = new (n(98026).Url)({host: (0, n(62061).createLinkTailUrl)(r.getLinkHead(), i), params: c});
                    r.sendConfirm(u.getUrl())
                }))
            }, t.prototype.sendConfirm = function (t, e) {
                var r = this;
                (0, n(83009).sendConfirm)({
                    src: t, onError: e ? function () {
                        return r.unconfirmAds(e)
                    } : void 0
                })
            }, t.prototype.generateBannerTesttag = function (t, e) {
                var r, i = (0, n(62061).buildBannerTesttags)(t, e);
                return (r = {})[n(62061).ORDER_BANNER_OPTIONS_KEY] = (0, n(62061).buildOrderBannerOptions)(t), r[n(62061).BANNER_TEST_TAG_KEY] = i.toString(), r
            }, t.prototype.generateActiveTestIds = function () {
                return (0, n(88772).generateActiveTestIds)(this._activeTestIds, this._clientActiveTestIds)
            }, t.prototype.setActualFormat = function (t) {
                this.actualFormat = t
            }, t.prototype.getAuxClickQueryParams = function (t, e) {
                var r = this.getSettings();
                if (!t || r && r.disableAuxClickQueryParams) return {};
                var i = this.getAuxQueryParams([t], e);
                if (null == t ? void 0 : t.adId) {
                    var o = {"banner-sizes": this.getBannerSize(t.adId)};
                    (0, n(61490).extend)(i, o)
                }
                return i
            }, t.prototype.getAuxQueryParams = function (t, e) {
                var i, o, a;
                void 0 === t && (t = []), void 0 === e && (e = {});
                var s = e.testtagProps, l = e.bannerTesttagProps, c = e.renderSize, u = e.extParams, d = e.assetClick,
                    p = this._bannerSizes.length,
                    f = this._testtag.clone().setProps(r(r({}, s), {renderedBannersAmount: p})),
                    h = (0, n(62061).buildBannerTesttags)(t, l), g = this.generateActiveTestIds(),
                    v = this.isSSP() || this.isApp(), m = ((i = {
                        "stat-id": this._statId,
                        "test-tag": f.toString(),
                        "banner-sizes": this.getBannerSizes(),
                        "format-type": this._settings.format.index,
                        "actual-format": (0, n(30374).getSsrActualFormat)(this.actualFormat, this._settings),
                        pcodever: (0, n(30107).getCodeVersion)().toString(),
                        "adsdk-bundle-version": (0, n(30107).getVasVersion)(),
                        "pcode-test-ids-from-count": v ? this._testIds : void 0
                    })[n(62061).BANNER_TEST_TAG_KEY] = h.toString(), i[n(62061).ORDER_BANNER_OPTIONS_KEY] = (0, n(62061).buildOrderBannerOptions)(t), i);
                g && (m["pcode-active-testids"] = g), c && (m.width = c.width, m.height = c.height), d && (m["asset-click"] = d);
                var _ = null === (a = null === (o = this._data) || void 0 === o ? void 0 : o.common) || void 0 === a ? void 0 : a.subDesignId;
                return _ && (m.subDesignId = _), r(r({}, m), u)
            }, t.prototype.abuseAd = function (t) {
                this._onAdAbused && (0, n(26413).isFunction)(this._onAdAbused) && this._onAdAbused(t)
            }, t.prototype.getUniqueId = function () {
                return this._uniqueId
            }, t.prototype.getHoneypot = function () {
                return this._visibilitySettings.expShow || 0
            }, t.prototype.isFullscreen = function () {
                return (0, n(57297).isFullscreen)(this._settings)
            }, t.prototype.getRewardedCountCallback = function () {
                return this._rewardedCountCallback
            }, t.prototype.getRewardedCallback = function () {
                return this._rewardedCallback
            }, t.prototype.getCloseCallback = function () {
                return this._closeCallback
            }, t.prototype.isFloorAd = function () {
                return (0, n(2268).isFloorAd)(this._settings)
            }, t.prototype.isClosable = function () {
                return this._isClosable
            }, t.prototype.isInterscroller = function () {
                var t = this._settings.interscroller;
                return (!t || "exp" !== (0, n(88772).useExperimentFlag)("DISABLE_INTERSCROLLER")) && Boolean(t)
            }, t.prototype.isRefreshed = function () {
                return this._refreshed
            }, t.prototype.isContainsData = function () {
                return this._containsData
            }, t.prototype.getClickMacro = function () {
                return this._clickMacro
            }, t.prototype.getSkipTokenSliderExp = function () {
                var t = this._flags && this._flags.SKIP_TOKEN_SLIDER;
                return this._settings.format.name.toLowerCase().indexOf("carousel") > -1 && t ? n(5930).g[t] : n(5930).g.miss
            }, t.prototype.getIsRmp = function () {
                return this._isRmp
            }, t.prototype.getRawData = function () {
                return r(r({}, this._data), {settings: this.getSettings()})
            }, t.prototype.isCSRBlock = function () {
                var t;
                return "exp" === (0, n(88772).useExperimentFlag)("FORCE_CSR_RENDER") || (null === (t = this._data.common) || void 0 === t ? void 0 : t.isCSRBlock)
            }, t.prototype.isMainPageBlock = function () {
                return this._isMainPageBlock
            }, t.prototype.getSspId = function () {
                var t;
                return (null === (t = this._data.common) || void 0 === t ? void 0 : t.sspId) ? this._data.common.sspId : null
            }, t.prototype.getPosition = function () {
                return this._position
            }, t.prototype.isForceDarkTheme = function () {
                return this._forceDarkTheme || (0, n(40085).Q)()
            }, t.prototype.isExternalDsp = function () {
                return (0, n(61640).M)(this._data.common)
            }, t.prototype.updateSettings = function (t) {
                this._settings = t
            }, t.prototype.getAdByAdId = function (t) {
                var e = this._data.direct.ads;
                return e && t ? (0, n(94383).find)(e, (function (e) {
                    return e.adId === t
                })) : void 0
            }, t.prototype.getLeadFormSrc = function (t) {
                var e = this.getAdByAdId(t);
                return e && e.popup ? e.url : null
            }, t.prototype.isSSP = function () {
                return (0, n(64809).checkBundleIsSSP)()
            }, t.prototype.shouldHideCross = function () {
                var t;
                return this.isSSP() && !(null === (t = this._data.direct.ads) || void 0 === t ? void 0 : t[0].abuseUrl)
            }, t
        }();
        e.DirectDataSource = u
    }, 66264: (t, e, n) => {
        "use strict";
        var r = function () {
            return r = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }, r.apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {value: !0}), e.parseSettings = e.getLimit = e.parse = void 0, e.parse = function (t, e, o) {
            e.fullscreenEnableTimer = o.fullscreenEnableTimer;
            var s = o.directSettings, l = o.data;
            return s && (e = r(r({}, e), function (t) {
                var e = {};
                return (0, n(38715).forOwn)(t, (function (t, r) {
                    (0, n(85200).isArray)(i) && (e[r] = t)
                })), e
            }(s))), a(e, t, l)
        };
        var i = ["siteBgColor", "bgColor", "borderColor", "headerBgColor", "titleColor", "textColor", "urlColor", "urlBackgroundColor", "sitelinksColor", "hoverColor", "titleHoverColor", "backColor", "highlightColor", "smallImage", "buttonTextColor", "buttonBgColor"];

        function o(t, e) {
            var r = t.limit, i = "adaptive" === t.name || t.name in n(82551).adaptive0418Blocks;
            if (t.fixed && !i) return r;
            var o = parseInt(e.limit, 10);
            return (0, n(6485).isInRange)(o, 1, r) ? o : r
        }

        function a(t, e, r) {
            var i, a, s = Number(t.domainFontSize) || 0, l = t.domainBgOpacity, c = t.titleFontSizeAbs,
                u = t.fontSizeAbs, d = t.bodyFontSize, p = t.animationStep;
            try {
                a = n.lv["json"].parse(t.pCodeInfo)
            } catch (t) {
            }
            var f = (t || {}).name, h = t.ssrName, g = function (t, e) {
                    var r;
                    return ((null === (r = null == e ? void 0 : e.direct) || void 0 === r ? void 0 : r.ads) || []).some((function (t) {
                        var e = t.vastBase64, n = t.vast;
                        return Boolean(e) || Boolean(n)
                    })), !!(0, n(79139).Z)(window) && t.enableAnimation
                }(t, r), v = Number(t.animationCount) || 1 / 0, m = t.linkTail, _ = t.renderLinkTail,
                b = Boolean(t.favicon), y = Boolean(void 0 === t.button || t.button),
                I = Boolean(t.warningCompact) && !1, A = Boolean(t.noSitelinks), C = Boolean(t.paddingsDisabled),
                S = Boolean(t.noBodyText), E = t.c11n || {}, O = Boolean(t.imagesFirst), T = o(e, t),
                R = void 0 === t.bannerBorder ? e.border[0] : t.bannerBorder, w = Boolean(t.borderRadius),
                k = void 0 === t.linksUnderline || Boolean(t.linksUnderline), P = t.adaptiveType, N = t.horizontalAlign,
                L = Boolean(Number(t.callouts || 0)), M = Boolean(Number(t.skipCyclicAnimation || 0)),
                D = function (t, e) {
                    var r = t.fontSize, i = t.titleFontSize, o = t.fontFamily;
                    e.fixed && (r = "1", i = "3");
                    0 === e.name.indexOf("poster") && (r = "1");
                    var a = "simple" !== e.name, s = parseFloat(r);
                    a && !(0, n(6485).isInRange)(s, .8, 1.2) && (s = 1);
                    var l = parseFloat(i);
                    a && !(0, n(6485).isInRange)(l, 1, 3) && (l = 3);
                    var c = {
                        1: [[0, 110], [1, 107]],
                        2: [[0, 135], [.9, 130], [1, 126]],
                        3: [[0, 144], [.9, 142], [1, 133]]
                    }, u = "";
                    if (a) for (var d = c[l], p = 0; d[p] && d[p][0] < s; p++) u = d[p][1] + "%";
                    var f = String(o || "").toLowerCase();
                    return {fontSize: s, titleFontSize: l, titleFontSizePercent: u, fontFamily: f}
                }(t, e);

            function B(e) {
                if (t[e]) {
                    var r = (0, n(32568).normalizeColorHash)(t[e]);
                    return null === r ? void 0 : (0, n(17925).createColor)(r).toString()
                }
            }

            function x(e) {
                return (0, n(60509).getValidNumber)(t[e])
            }

            var F = Boolean(t.smallPictures), j = t.allowRepeatAds && (0, n(34680).T)(t.allowRepeatAds),
                U = t.advSpacing, V = t.advMinSquare, H = t.advMinHeight, z = t.advMinWidth, G = t.theme, W = t.layout,
                Y = t.skin, q = t.headerPosition, K = t.imagePosition, Z = t.imagePaddingLeft,
                X = t.clickableBackground, Q = Number(t.headerFontSize), $ = Number(t.imageRadius) || 0,
                J = t.headerText ? String(t.headerText) : void 0, tt = "right" === t.pictureFloat ? "right" : void 0,
                et = Boolean(t.fullClickable), nt = Boolean(t.extendedTitleFontRange), rt = Boolean(t.feedbackBgColor),
                it = Boolean(t.fullscreen), ot = Boolean(t.floorAd), at = t.fullscreenTheme,
                st = t.fullscreenDisableTimeout, lt = null !== (i = t.fullscreenDuration) && void 0 !== i ? i : 10,
                ct = Boolean(t.fullscreenEnableTimer), ut = Number(t.fullscreenCloseButtonVisibilityTimeout) || void 0,
                dt = t.fullscreenPendingCloseButtonTimeout, pt = t.allowDesktopFullscreen, ft = Boolean(t.rewarded),
                ht = Boolean(t.rewardedOverlay), gt = Boolean(t.interscroller), vt = t.interscrollerAnimation,
                mt = void 0 === vt || vt, _t = Number(t.firstAdGrow) || 1, bt = Boolean(t.carousel),
                yt = Number(t.spaceAroundCarousel), It = Number(t.advLessWidthCarousel), At = t.arrowsCarousel,
                Ct = t.mrcImpressions;
            return {
                bgColor: B("bgColor"),
                borderColor: B("borderColor"),
                siteBgColor: B("siteBgColor"),
                titleColor: B("titleColor"),
                textColor: B("textColor"),
                urlColor: B("urlColor"),
                urlBackgroundColor: B("urlBackgroundColor"),
                sitelinksColor: B("sitelinksColor"),
                hoverColor: B("hoverColor"),
                titleHoverColor: B("titleHoverColor"),
                backColor: B("backColor"),
                highlightColor: B("highlightColor"),
                smallImage: B("smallImage"),
                buttonTextColor: B("buttonTextColor"),
                buttonBgColor: B("buttonBgColor"),
                headerBgColor: B("headerBgColor"),
                headerFontColor: B("headerFontColor"),
                width: x("width"),
                minWidth: x("minWidth"),
                maxWidth: x("maxWidth"),
                height: x("height"),
                minHeight: x("minHeight"),
                maxHeight: x("maxHeight"),
                offersOnXAxis: x("offersOnXAxis"),
                offersOnYAxis: x("offersOnYAxis"),
                fontSize: D.fontSize,
                titleFontSize: D.titleFontSize,
                titleFontSizePercent: D.titleFontSizePercent,
                fontFamily: D.fontFamily,
                mrcImpressions: Ct,
                interscrollerBgColor: B("interscrollerBgColor"),
                name: f,
                ssrName: h,
                pCodeInfo: a,
                format: e,
                blockId: t.blockId,
                smallPictures: F,
                allowRepeatAds: j,
                imageWidth: x("imageWidth"),
                imageHeight: x("imageHeight"),
                enableAnimation: g,
                animationStep: p,
                animationCount: v,
                imagePaddingLeft: Z,
                domainFontSize: s,
                domainBgOpacity: l,
                titleFontSizeAbs: c,
                bodyFontSize: d,
                linkTail: m,
                renderLinkTail: _,
                favicon: b,
                button: y,
                hideAdtuneInSsp: !1,
                noSitelinks: A,
                c11n: E,
                imagesFirst: O,
                limit: T,
                bannerBorder: R,
                borderRadius: w,
                linksUnderline: k,
                adaptiveType: P,
                horizontalAlign: N,
                callouts: L,
                skipCyclicAnimation: M,
                advSpacing: U,
                advMinSquare: V,
                advMinWidth: z,
                advMinHeight: H,
                layout: W,
                skin: Y,
                theme: G,
                clickableBackground: X,
                paddingsDisabled: C,
                noBodyText: S,
                fullClickable: et,
                isWarningCompact: I,
                imagePosition: K,
                headerText: J,
                pictureFloat: tt,
                headerPosition: q,
                headerFontSize: Q,
                imageRadius: $,
                fontSizeAbs: u,
                extendedTitleFontRange: nt,
                feedbackBgColor: rt,
                fullscreen: it,
                fullscreenTheme: at,
                fullscreenDisableTimeout: st,
                fullscreenDuration: lt,
                fullscreenCloseButtonVisibilityTimeout: ut,
                fullscreenPendingCloseButtonTimeout: dt,
                allowDesktopFullscreen: pt,
                floorAd: ot,
                rewarded: ft,
                rewardedOverlay: ht,
                interscroller: gt,
                interscrollerAnimation: mt,
                firstAdGrow: _t,
                carousel: bt,
                arrowsCarousel: At,
                spaceAroundCarousel: yt,
                advLessWidthCarousel: It,
                pcodeSettings: t.pcodeSettings,
                bannerFlags: t.bannerFlags,
                viewNotice: t.viewNotice,
                viewNotices: t.viewNotices,
                piSettings: t.piSettings,
                zenBulkData: t.zenBulkData,
                zenAdType: t.zenAdType,
                zenAddButton: t.zenAddButton,
                zenAddButtonDelay: t.zenAddButtonDelay,
                zenAddButtonInactiveBGColor: t.zenAddButtonInactiveBGColor,
                zenAddButtonBGColor: t.zenAddButtonBGColor,
                zenUpdateRmpDesign: t.zenUpdateRmpDesign,
                zen2SliderMinDiscountForDisplay: t.zen2SliderMinDiscountForDisplay,
                zen2MoreButtonDisabled: t.zen2MoreButtonDisabled,
                zen2Redesign21Q3Step2: t.zen2Redesign21Q3Step2,
                zen2FooterWithSharing: t.zen2FooterWithSharing,
                zen2FeedWithHears: t.zen2FeedWithHears,
                zen2FeedWithHearsRatio: t.zen2FeedWithHearsRatio,
                zen2ShowPrice: t.zen2ShowPrice,
                zen2DisableSnippet: t.zen2DisableSnippet,
                zen2Carousel: t.zen2Carousel,
                zen2CarouselItemWidthDesktop: t.zen2CarouselItemWidthDesktop,
                zen2CarouselItemWidthTouch: t.zen2CarouselItemWidthTouch,
                zen2CarouselItemMinWidthDesktop: t.zen2CarouselItemMinWidthDesktop,
                zen2CarouselItemMinWidthTouch: t.zen2CarouselItemMinWidthTouch,
                zen2CarouselItemHasText: t.zen2CarouselItemHasText,
                zen2CarouselImageRatio: t.zen2CarouselImageRatio,
                zen2CarouselSameWidth: t.zen2CarouselSameWidth,
                zen2DesktopSmallHeightMinWidth: t.zen2DesktopSmallHeightMinWidth,
                zen2PriceFontSize: t.zen2PriceFontSize,
                zen2TitleFontAbsFixed: t.zen2TitleFontAbsFixed,
                zen2ShouldUseSmartCenters: t.zen2ShouldUseSmartCenters,
                zen2IsHeaderRedesign: t.zen2IsHeaderRedesign,
                zen2LargeHeaderAvatar: t.zen2LargeHeaderAvatar,
                zen2ShouldUseContainEars: t.zen2ShouldUseContainEars,
                zen2ShowServiceIcon: t.zen2ShowServiceIcon,
                zen2CarouselRedesign: t.zen2CarouselRedesign,
                disableAuxClickQueryParams: t.disableAuxClickQueryParams,
                fullscreenEnableTimer: ct
            }
        }

        e.getLimit = o, e.parseSettings = a
    }, 50445: (t, e, n) => {
        "use strict";
        var r = function () {
            return r = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }, r.apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {value: !0}), e.getBlockModule = e.loadBlockSet = void 0;
        var i, o = {advmanager: n(30473)}, a = {}, s = {}, l = !1;

        function c(t) {
            void 0 === t && (t = "advmanager");
            var e = t;
            i || (i = new (n(48777).B)).promise.then((function () {
                l = !0
            }));
            var r = a[e];
            return r || (r = new Promise((function (t) {
                o[e]((function (e) {
                    (0, n(38715).forOwn)(e, u), t(), i.resolve()
                }), (function (t) {
                    n(49874).logger.error(t, "block-set_load_error")
                }))
            })), a[e] = r), i.promise
        }

        function u(t, e, i) {
            var o = s[e], a = i[e];
            o ? o.async && !a.async && (s[e].async = a.async, s[e].module = a.module) : (s[e] = r({}, a), a.async && (s[e].module = function (t) {
                a.module((function (n) {
                    s[e].async = !1, s[e].module = function (t) {
                        t(n)
                    }, t(n)
                }), (function (t) {
                    n(49874).logger.error(t, "block-module_load_error")
                }))
            }))
        }

        function d(t) {
            var e = s[t];
            return {name: t, async: e.async, module: e.module}
        }

        e.loadBlockSet = c, e.getBlockModule = function (t) {
            var e = t.name;
            return l ? d(e) : (i || c(), {
                name: e, async: !0, module: function (t) {
                    i.promise.then((function () {
                        d(e).module(t)
                    }))
                }
            })
        }
    }, 30374: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.getSsrActualFormat = e.getActualFormatValue = void 0;
        var r = Object.keys(n(2265)).__preduce((function (t, e) {
            return t[n(2265)[e]] = Number(e), t
        }), {});

        function i(t) {
            return r[t]
        }

        e.getActualFormatValue = i, e.getSsrActualFormat = function (t, e) {
            var n = e.ssrName;
            return n && i(n) || t
        }
    }, 2775: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.AdvManager = void 0, (0, n(94449).p)((function () {
            (0, n(7332).K)()
        })), e.AdvManager = n(21439)
    }, 85696: (t, e, n) => {
        "use strict";
        var r = function () {
            return r = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }, r.apply(this, arguments)
        };
        e.S = void 0;
        var i = {
            RTB_VISIBILITY_CONFIRMED: 1,
            FORMAT_ADDRESS: 10,
            GEO_DISTANCE_2: 100,
            SKIP_PICTURES: 1,
            RTB_CAPTURED: 1,
            RTB_AD_ABUSED: 100
        };
        e.S = function (t, e) {
            n(49874).logger.traceLog(r(r({}, e), {href: window.location.href, event: t}), "LEGACY_LOG", i[t])
        }
    }, 93331: (t, e) => {
        "use strict";
        e.u = void 0, e.u = ["moat", "adloox", "weborama", "adserving"]
    }, 49528: (t, e) => {
        "use strict";
        e.bo = e.TT = void 0, e.TT = {
            moat: {actual: 73, unstable: 73},
            adloox: {actual: 61, unstable: 62},
            weborama: {actual: 80, unstable: 80},
            adserving: {actual: 93, unstable: 93}
        }, e.bo = function (t, n) {
            return n.use_unstable_script ? e.TT[t].unstable : e.TT[t].actual
        }
    }, 79026: (t, e, n) => {
        "use strict";
        var r = function () {
            return r = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }, r.apply(this, arguments)
        };
        e.sV = e.tO = void 0;
        var i = {};
        e.tO = function (t) {
            i[t.id] = [], (0, n(15137).forEach)((0, n(10407).getObjectKeys)(t.config), (function (e) {
                if (a = e, (0, n(22886).indexOf)(n(93331).u, a) > -1) {
                    var o = (0, n(49528).bo)(e, t.config[e]);
                    (0, n(48053).K)(e, o, t.nonce).then((function (n) {
                        if (i[t.id]) {
                            var a = function (t) {
                                var e = r({}, t);
                                return delete e.use_unstable_script, e
                            }(t.config[e]), s = n(t.container, a, {actualVersion: o, nonce: t.nonce});
                            i[t.id].push(s)
                        }
                    }))
                } else (0, n(53417).H)(n(53417).WZ, e);
                var a
            }))
        }, e.sV = function (t) {
            var e = i[t];
            if ((0, n(85200).isArray)(e)) {
                for (var r = 0; r < e.length; r++) e[r]();
                delete i[t]
            }
        }
    }, 48053: (t, e, n) => {
        "use strict";
        e.K = void 0, e.K = function (t, e, r) {
            var i = function (t, e) {
                return "https://yastatic.net/pcode-static/measurers/".concat(e, "/media/").concat(t, ".js")
            }(t, e), o = (0, n(38710).getYa)();
            return o.measurers && o.measurers[t] ? new Promise((function (e) {
                e(o.measurers[t])
            })) : new Promise((function (e) {
                (0, n(54784).loadCustomScript)({
                    win: window, src: i, nonce: r, onLoad: function () {
                        return e(o.measurers[t])
                    }, hasCors: !0
                })
            }))
        }
    }, 53417: (t, e, n) => {
        "use strict";
        e.H = e.WZ = void 0;
        e.WZ = "WRONG_VERIFIER_NAME", e.H = function (t, e) {
            n(49874).logger.error(new Error(t), "measure_block", {data: e})
        }
    }, 58734: (t, e, n) => {
        "use strict";
        var r = function () {
            return r = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }, r.apply(this, arguments)
        };
        e.X = void 0;
        var i = function () {
            function t(t, e, r) {
                var i, o, a = this;
                if (this._onAdAbused = null, this._clientActiveTestIds = [], this._rawDataJSON = "", this.confirmedCache = {}, this.useExperimentFlag = function (t, e) {
                    return void 0 === e && (e = !1), (0, n(88772).useExperimentFlag)(t, e, a._clientActiveTestIds)
                }, this.data = t, this.settings = e, this.cfg = r, this.rtbData = t.rtb, this._activeTestIds = (null === (i = t.common) || void 0 === i ? void 0 : i.activeTestIds) || [], (0, n(88772).collectAllActiveTestIds)(this._activeTestIds), !(0, n(7386).isHermione)() && ((0, n(93052).j)(this.data) || (0, n(56240).getUaasIsInternalNetwork)() || "true" === (null === (o = this.data.common) || void 0 === o ? void 0 : o.isStaff))) try {
                    this._rawDataJSON = n.lv["json"].stringify(this.data, null, 2)
                } catch (t) {
                }
                this.rtbData && !this.rtbData.vastBase64 && Boolean(this.rtbData.video) && (this.rtbData.vastBase64 = this.rtbData.video), !e.clickMacro && (0, n(98163).t)(window, r.clickMacro) && (e.clickMacro = r.clickMacro), this._visibilityTime = (0, n(87378).calcVisibilityTime)(this.getSettings()), this.isInterstitial = (0, n(22130).isNanpuInterstitial)(r), this.forceDarkTheme = Boolean(r.darkTheme)
            }

            return t.prototype.sendVisibilityConfirmation = function (t) {
                var e = this;
                this.confirmedCache[t] || ((0, n(83009).sendConfirm)({
                    src: t, onError: function () {
                        e.confirmedCache[t] = void 0
                    }
                }), this.confirmedCache[t] = !0)
            }, t.prototype.getSmartCreativeBlockSettings = function () {
                return (0, n(74119).M)(this.data)
            }, t.prototype.getSettings = function () {
                return this.settings || {}
            }, t.prototype.setAbuseHandler = function (t) {
                this._onAdAbused = t
            }, t.prototype.abuseAd = function (t) {
                this._onAdAbused && (0, n(26413).isFunction)(this._onAdAbused) && this._onAdAbused(t)
            }, t.prototype.getSize = function () {
                var t = this.data, e = t.rtb, r = t.sizes,
                    i = r && "exp" === this.useExperimentFlag("USE_BK_SIZE_MEDIA"),
                    o = i ? r.width : null == e ? void 0 : e.width, a = i ? r.maxHeight : null == e ? void 0 : e.height;
                if (!(null == e ? void 0 : e.html) && (0, n(98239).ud)(null == e ? void 0 : e.format)) {
                    var s = (0, n(98239).Gi)(e || {});
                    if (s) return [s.width, s.height]
                }
                return [0 == o ? "100%" : o, a]
            }, t.prototype.getBugData = function () {
                var t, e, r, i, o, a, s, l, c = (0, n(74472).getPlacement)(this.getUniqueId()),
                    u = null == c ? void 0 : c.renderTo;
                return {
                    meta: this.hasShowBug() ? this._rawDataJSON : "",
                    hitLogId: null === (e = null === (t = this.data) || void 0 === t ? void 0 : t.eventConfirmationData) || void 0 === e ? void 0 : e.HitLogID,
                    rtbBidReqId: null === (i = null === (r = this.data) || void 0 === r ? void 0 : r.eventConfirmationData) || void 0 === i ? void 0 : i.RtbBidReqID,
                    bidReqIdStr: null === (a = null === (o = this.data) || void 0 === o ? void 0 : o.rtbAuctionInfo) || void 0 === a ? void 0 : a.bidReqIdStr,
                    bsGeneratedUniqID: null === (l = null === (s = this.data) || void 0 === s ? void 0 : s.rtbAuctionInfo) || void 0 === l ? void 0 : l.bsGeneratedUniqID,
                    block: u ? document.getElementById(u) : null
                }
            }, t.prototype.hasShowBug = function () {
                return (0, n(21266).O)(this.data)
            }, t.prototype.getProductType = function () {
                var t, e;
                return null === (e = null === (t = this.data) || void 0 === t ? void 0 : t.common) || void 0 === e ? void 0 : e.productType
            }, t.prototype.getUrl = function () {
                return this.data.rtb && this.data.rtb.url
            }, t.prototype.isSsrSmartBanner = function () {
                return this.data && this.data.rtb && this.data.rtb.isSmartBanner
            }, t.prototype.getAdditionalAdLabel = function () {
                var t, e, n;
                return (null === (e = null === (t = this.data) || void 0 === t ? void 0 : t.rtb) || void 0 === e ? void 0 : e.publicTitle) || (null === (n = this.getSettings()) || void 0 === n ? void 0 : n.domain)
            }, t.prototype.isSmartBanner = function () {
                var t = this.data && this.data.rtb && this.data.rtb.format;
                return "smart-banner-mosaic_v1" === t || "smart-banner-adaptive_v1" === t
            }, t.prototype.getOptionalDisclaimer = function () {
                var t;
                if (null === (t = this.data.rtb) || void 0 === t ? void 0 : t.optionalDisclaimer) return this.data.rtb.optionalDisclaimer
            }, t.prototype.getCopyLink = function () {
                var t;
                if (null === (t = this.data) || void 0 === t ? void 0 : t.rtb) return this.isSmartBanner() ? this.data.rtb.copyLink ? this.data.rtb.copyLink : void 0 : this.data.rtb.buttonClick
            }, t.prototype.getSmartBannerMeta = function () {
                return this.data && this.data.rtb && this.data.rtb.meta || {}
            }, t.prototype.getHtml = function () {
                var t, e, i = this.data.rtb;
                if ((null == i ? void 0 : i.isSmartBanner) && i.html) return i.html;
                if ((null == i ? void 0 : i.format) && !i.html) {
                    var o = i.format;
                    return (0, n(56397).h)(r(r({}, i.data), {pageLang: null === (e = null === (t = this.data) || void 0 === t ? void 0 : t.common) || void 0 === e ? void 0 : e.pageLang}), o)
                }
                return !this.decodedHtml && (null == i ? void 0 : i.html) && (this.useExperimentFlag("DISABLE_BASE64_MEDIA") && /^</.test(i.html.trim()) ? this.decodedHtml = i.html : this.decodedHtml = (0, n(21625).decode)(i.html)), this.decodedHtml
            }, t.prototype.isSSR = function () {
                return this.data.rtb && this.data.rtb.is_ssr || this.isMainPageBlock()
            }, t.prototype.getSSR = function () {
                return this.data.rtb && this.data.rtb.ssr || {}
            }, t.prototype.isApp = function () {
                return this.data.common && "1" == this.data.common.isMobileSdk || (0, n(64809).checkBundleIsMobilSdk)()
            }, t.prototype.isSSP = function () {
                return (0, n(64809).checkBundleIsSSP)()
            }, t.prototype.getLinkTail = function () {
                return this.getSettings().linkTail
            }, t.prototype.getViewNotices = function () {
                return (0, n(2363).Y)(this.getSettings())
            }, t.prototype.getWinNotice = function () {
                var t = this.getSettings().winNotice;
                return new (n(98026).Url)({host: t}).getUrl()
            }, t.prototype.getLanguage = function () {
                return this.data.common && this.data.common.pageLang || (0, n(86058).getDefaultLanguage)({isSSP: (0, n(64809).checkBundleIsSSP)()})
            }, t.prototype.isInternalRequest = function () {
                return (0, n(93052).j)(this.data)
            }, t.prototype.getSSPId = function () {
                var t = null;
                return this.data.common && this.data.common.sspId && (t = this.data.common.sspId), t
            }, t.prototype.getAbuseUrl = function () {
                var t;
                return this.cfg.isInOverlay || null === (t = this.data.rtb) || void 0 === t ? void 0 : t.abuseLink
            }, t.prototype.getUniqueId = function () {
                return this.cfg.uniqueId
            }, t.prototype.loadHtml = function () {
                var t = this;
                return new Promise((function (e, r) {
                    (0, n(9809).logSSPEvent)("SSP_RTB_CACHE_FF_REQUEST", t.cfg.data), (0, n(2052).W)({
                        url: t.getUrl(),
                        method: "get",
                        retries: 0,
                        withCredentials: !1,
                        onSuccess: function (r) {
                            (0, n(9809).logSSPEvent)("SSP_RTB_CACHE_REQUEST_FF_SUCCESS", t.cfg.data), t.decodedHtml = r.response, e()
                        },
                        onError: function () {
                            return r()
                        }
                    })
                }))
            }, t.prototype.getVisibilityTime = function () {
                return this._visibilityTime
            }, t.prototype.getHoneypot = function () {
                var t = this.data.visibilitySettings;
                return t && t.expShow || 0
            }, t.prototype.getBasePath = function () {
                return this.isHTML5() ? this.data.rtb && this.data.rtb.basePath : null
            }, t.prototype.isMediaAdaptive = function () {
                var t = this.getSize();
                return !(t[0] && t[1])
            }, t.prototype.getPosterSrc = function () {
                return this.data.rtb && this.data.rtb.posterSrc
            }, t.prototype.isHTML5 = function () {
                return Boolean(this.data.rtb && this.data.rtb.html5)
            }, t.prototype.getMediaTesttag = function () {
                var t = this.data.rtb, e = this.data.common;
                if (((null == t ? void 0 : t.is_ssr) || (null == t ? void 0 : t.html)) && !t.isSmartBanner) return new (n(9022).mF)({
                    theme: (0, n(9022).ro)(null == e ? void 0 : e.mediaBundleName, t.html5),
                    format: (0, n(9022)._Z)(t.width, t.height),
                    isSsr: t.is_ssr ? 1 : 0
                }).toString()
            }, t.prototype.needLoadingSSP = function () {
                return Boolean(this.data.rtb && !this.data.rtb.html && this.getUrl() && ((0, n(64809).checkBundleIsSSP)() && this.isHTML5() || this.isInlineSSP()))
            }, t.prototype.isInlineSSP = function () {
                return (0, n(64809).checkBundleIsSSP)() && Boolean(this.cfg.sspInline) || Boolean(this.cfg.injectInline) && ((0, n(64809).checkBundleIsSSP)() || (0, n(64809).checkBundleIsMobilSdk)())
            }, t.prototype.isFullscreen = function () {
                return (0, n(57297).isFullscreen)(this.getSettings())
            }, t.prototype.isFloorAd = function () {
                return (0, n(2268).isFloorAd)(this.getSettings())
            }, t.prototype.isClosable = function () {
                return Boolean(this.cfg.showCloseButton)
            }, t.prototype.getPlatform = function () {
                return this.cfg.platform
            }, t.prototype.isInterscroller = function () {
                var t = this.getSettings().interscroller;
                return (!t || "exp" !== (0, n(88772).useExperimentFlag)("DISABLE_INTERSCROLLER")) && Boolean(t)
            }, t.prototype.isAdLabelDisabled = function () {
                return 0 === this.getSettings().adLabel
            }, t.prototype.isRefreshed = function () {
                return this.cfg.refresh || !1
            }, t.prototype.getRewardedCallback = function () {
                return this.cfg.onRewarded
            }, t.prototype.getRewardedCountCallback = function () {
                return this.cfg.onRewardedCount
            }, t.prototype.getOpenCallback = function () {
                return this.cfg.onOpen
            }, t.prototype.getCloseCallback = function () {
                return this.cfg.onClose
            }, t.prototype.getHideCallback = function () {
                return this.cfg.onHide
            }, t.prototype.getVideoCallbacks = function () {
                if (this.cfg.videoCallbacks) return {
                    onAdStart: this.cfg.videoCallbacks.onAdStart,
                    onAdEnd: this.cfg.videoCallbacks.onAdEnd,
                    onVideoInit: this.cfg.videoCallbacks.onVideoInit || void 0
                }
            }, t.prototype.getSsrTimings = function () {
                var t;
                return null === (t = this.data.rtb) || void 0 === t ? void 0 : t.timings
            }, t.prototype.isContainsData = function () {
                return this.cfg.containsData || Boolean(this.cfg.renderData)
            }, t.prototype.isRenderData = function () {
                return Boolean(this.cfg.renderData)
            }, t.prototype.generateActiveTestIds = function () {
                return (0, n(88772).generateActiveTestIds)(this.data.common && this.data.common.activeTestIds, this._clientActiveTestIds)
            }, t.prototype.getPageId = function () {
                return (0, n(44751).parseBlockId)(this.getSettings().blockId).pageId
            }, t.prototype.getImpId = function () {
                return (0, n(44751).parseBlockId)(this.getSettings().blockId).impId
            }, t.prototype.getDomain = function () {
                var t;
                return null === (t = this.data.rtb) || void 0 === t ? void 0 : t.domain
            }, t.prototype.getPunyDomain = function () {
                var t;
                return null === (t = this.data.rtb) || void 0 === t ? void 0 : t.punyDomain
            }, t.prototype.getButtonUrl = function () {
                var t, e;
                return (null === (t = this.data.rtb) || void 0 === t ? void 0 : t.buttonUrl) || (null === (e = this.data.rtb) || void 0 === e ? void 0 : e.buttonClick)
            }, t.prototype.getFormat = function () {
                var t;
                return (null === (t = this.data.rtb) || void 0 === t ? void 0 : t.format) || (0, n(24704).h)(this.settings)
            }, t.prototype.getClickConfirmation = function () {
                var t;
                return null === (t = this.data.common) || void 0 === t ? void 0 : t.clickConfirmation
            }, t.prototype.isYandex = function () {
                var t;
                return "1" == (null === (t = this.data.common) || void 0 === t ? void 0 : t.isYandex)
            }, t.prototype.isSocialAd = function () {
                var t, e, r, i;
                return (0, n(25154).hasSocialAdvertisingFlag)((null === (t = this.data.rtb) || void 0 === t ? void 0 : t.bannerFlags) || (null === (i = null === (r = null === (e = this.data.rtb) || void 0 === e ? void 0 : e.data_params) || void 0 === r ? void 0 : r.text) || void 0 === i ? void 0 : i.bannerFlags))
            }, t.prototype.isBusinessUnit = function () {
                var t, e, r, i;
                return (0, n(25154).hasBusinessUnitFlag)((null === (t = this.data.rtb) || void 0 === t ? void 0 : t.bannerFlags) || (null === (i = null === (r = null === (e = this.data.rtb) || void 0 === e ? void 0 : e.data_params) || void 0 === r ? void 0 : r.text) || void 0 === i ? void 0 : i.bannerFlags))
            }, t.prototype.getRawData = function () {
                return this.data
            }, t.prototype.getSalt = function () {
                var t, e;
                return (null === (e = null === (t = this.data.rtb) || void 0 === t ? void 0 : t.ssr) || void 0 === e ? void 0 : e.salt) || ""
            }, t.prototype.getAge = function () {
                var t, e;
                return null !== (e = null === (t = this.data.rtb) || void 0 === t ? void 0 : t.age) && void 0 !== e ? e : void 0
            }, t.prototype.isCSRBlock = function () {
                var t;
                return "exp" === (0, n(88772).useExperimentFlag)("FORCE_CSR_RENDER") || (null === (t = this.data.common) || void 0 === t ? void 0 : t.isCSRBlock)
            }, t.prototype.getDetailedDeviceType = function () {
                var t;
                return null === (t = this.data.common) || void 0 === t ? void 0 : t.detailedDeviceType
            }, t.prototype.isMainPageBlock = function () {
                return (0, n(84330).isMainPage)(this.settings) && Boolean(this.settings.smeta)
            }, t.prototype.isForceDarkTheme = function () {
                return this.forceDarkTheme || (0, n(40085).Q)()
            }, t.prototype.isExternalDsp = function () {
                return (0, n(61640).M)(this.data.common)
            }, t.prototype.updateSettings = function (t) {
                this.settings = t
            }, t.prototype.shouldShowKebab = function () {
                var t = Boolean(this.getAbuseUrl()), e = Boolean(this.isExternalDsp()),
                    n = Boolean(this.getOptionalDisclaimer()), r = this.hasShowBug();
                return t || e && n || r
            }, t.prototype.shouldHideCross = function () {
                var t;
                return this.isSSP() && !(null === (t = this.data.rtb) || void 0 === t ? void 0 : t.abuseLink)
            }, t
        }();
        e.X = i
    }, 90991: (t, e, n) => {
        "use strict";
        e.r = void 0;
        var r = function () {
            function t(t) {
                var e = this;
                this.sendAdbEvent = function (t) {
                }, this.handleAdAbuse = function (t, r) {
                    (0, n(26413).isFunction)(e.onAdAbused) && e.onAdAbused(e, t, r)
                }, this.handleDirectAdAbuse = function (t, n, r) {
                    e.handleAdAbuse(n, r)
                }, this.directManager = new (n(42705))({onAdAbused: this.handleDirectAdAbuse}), this.onAdAbused = t.onAdAbused, this.uniqueId = null, this.renderTimestamp = null, this.container = null, this.dataTimestamp = null
            }

            return t.prototype.setData = function (t) {
                this.data = t, this.dataTimestamp = new Date, this.rtbDataSource = null, this.rtbVisibilityManager = null, this.directManager.setData(this.data)
            }, t.prototype.getBlocks = function () {
                return this.block && this.block.isInViewport ? [this.block] : this.directManager.getBlocks()
            }, t.prototype.resetTimeout = function () {
                this.directManager && this.directManager.resetTimeout(), this.dataTimestamp = null
            }, t.prototype.getUsedIds = function (t) {
                return this.directManager.getUsedIds(t)
            }, t.prototype.render = function (t, e) {
                void 0 === e && (e = {}), e.horizontalAlign || (e.horizontalAlign = Boolean(t.horizontalAlign));
                var r = (0, n(74472).getPlacement)(t.uniqueId);
                if (Boolean(null == r ? void 0 : r.getRenderToElement())) this.uniqueId && this.uniqueId !== (null == t ? void 0 : t.uniqueId) && n(62570).refresher.unregister(this.uniqueId), this.uniqueId = null == t ? void 0 : t.uniqueId, this.data.rtb ? (this.sendAdbEvent(t), this.renderRtbBlock(t, e), (0, n(91208).isLightHouse)() || n(43663).transport.initSupportLogic(t.cspNonce), n(43663).transport.cookieMatching(this.data.matchUrls, t.cspNonce)) : this.data.direct ? this.renderDirect(t, e) : this.data.seatbid && (this.sendAdbEvent(t), this.renderRtbBlock(t, this.data)); else {
                    var i = 'Container with id "'.concat(t.renderTo, '" is not found (data loaded)');
                    if (null == r || r.callbacks.triggerError("CONTAINER_NOT_FOUND", i), n(49874).logger.errorStrict("CONTAINER_NOT_FOUND", {
                        text: i,
                        pageId: t.pageId,
                        blockId: t.blockId,
                        renderTo: t.renderTo
                    }), e.isRefresh) return;
                    this.block && (this.block.destructor(), this.block = null)
                }
            }, t.prototype.destructor = function () {
                this.block && this.block.destructor && this.block.destructor(), this.uniqueId && n(62570).refresher.unregister(this.uniqueId), this.directManager.destructor(), this.directManager = null, this.container = null
            }, t.prototype.getRenderTo = function () {
                var t = this.directManager.getRenderTo(), e = this.container && this.container.getAttribute("id");
                return t || e
            }, t.prototype.slideUp = function (t) {
                var e = null;
                if (this.block.slideUp) e = this.block; else if (this.directManager) {
                    var r = this.directManager.getBlocks();
                    r.length > 1 && n(49874).logger.warn(new Error("DirectManager returned block count greater than 1"), "RtbManager::slideUp", {directBlocks: r}), e = r[0]
                }
                e && e.slideUp && e.slideUp((function () {
                    t()
                }))
            }, t.prototype.renderRtbBlock = function (t, e) {
                var r = this, i = (0, n(74472).getPlacement)(t.uniqueId),
                    o = null == i ? void 0 : i.getRenderToElement();
                if (!o) return this.container = null, this.renderTimestamp = null, void (this.block && (this.block.destructor(), this.block = null));
                if (o !== this.container || this.renderTimestamp !== this.dataTimestamp) {
                    if (this.container = o, this.renderTimestamp = this.dataTimestamp, this.block && this.block.destructor(), !this.rtbDataSource) {
                        var a = this.data.settings ? this.data.settings[t.blockImpId] || this.data.settings : {},
                            s = this.data && this.data.rtb, l = this.data && this.data.common,
                            c = s && s.activeTestIds || l && l.activeTestIds, u = (0, n(56240).getUaasConfig)().testIds,
                            d = void 0;
                        this.rtbDataSource = new (n(58734).X)(this.data, a, t);
                        var p = this.rtbDataSource.getMediaTesttag();
                        p && (d = {"media-test-tag": p.toString()}), this.rtbVisibilityManager = n(59060).x.getManager({
                            nonce: t.cspNonce,
                            linkTail: this.rtbDataSource.getLinkTail(),
                            viewNotices: this.rtbDataSource.getViewNotices(),
                            winNotice: this.rtbDataSource.getWinNotice(),
                            safeframe: !this.rtbDataSource.isInlineSSP(),
                            isSendTestIds: (0, n(64809).checkBundleIsSSP)() || this.rtbDataSource.isApp(),
                            activeTestIds: c,
                            testIds: u,
                            query: d
                        }), this.rtbDataSource.setAbuseHandler((function (e) {
                            r.handleAdAbuse(t, e)
                        }))
                    }
                    this.block = new (n(51657).G)({
                        dataSource: this.rtbDataSource,
                        data: this.data,
                        uniqueId: t.uniqueId,
                        blockId: t.blockId,
                        renderTo: "#" + t.renderTo,
                        onRender: function () {
                            var e, i, o, a, s, l;
                            t.renderData ? (0, n(9809).logSSPEvent)("SSP_EXP_RENDER_COMPLETE_RTB", t.renderData) : "ssp" === t.bundle && t.data && (0, n(9809).logSSPEvent)("SSP_CTRL_RENDER_COMPLETE_RTB", t.data), (0, n(85914).setMark)(t.uniqueId, n(85914).RenderMarks.OnRenderCalled);
                            var c = [],
                                u = null === (e = r.data.eventConfirmationData) || void 0 === e ? void 0 : e.HitLogID,
                                d = null === (o = null === (i = r.data) || void 0 === i ? void 0 : i.common) || void 0 === o ? void 0 : o.productType,
                                p = null === (s = null === (a = r.data) || void 0 === a ? void 0 : a.rtbAuctionInfo) || void 0 === s ? void 0 : s.bidReqIdStr;
                            if ((0, n(85200).isArray)(r.data.seatbid) && (0, n(85200).isArray)(r.data.seatbid[0].adIds)) for (var f = r.data.seatbid[0].adIds, h = 0; h < f.length; h++) {
                                var g = {adId: f[h]};
                                u && (g.hitLogId = u), p && (g.bidReqIdStr = p), c.push(g)
                            } else if (r.data.rtb) {
                                f = (r.data.settings ? r.data.settings[t.blockImpId] || r.data.settings : {}).bannerIds || [];
                                var v = (0, n(41486).isString)(d) ? d.indexOf("video") > -1 : void 0;
                                for (h = 0; h < f.length; h++) {
                                    var m = {adId: f[h], video: v};
                                    u && (m.hitLogId = u), p && (m.bidReqIdStr = p), m.eventHash = r.data.rtb.eventHash, c.push(m)
                                }
                            }
                            var _ = r.block.dataSource, b = {
                                product: r.data.seatbid ? "native" : "rtb",
                                lang: _.getLanguage(),
                                advData: c,
                                productType: d
                            };
                            if ("floorAd" === t.type) {
                                var y = r.getBlocks()[0], I = null == y ? void 0 : y.getFloorAdSlot();
                                I && (b.floorAdSize = I.getSize())
                            }
                            if (_.isApp()) {
                                var A = ["pcode-test-ids-from-count=".concat((0, n(56240).getUaasConfig)().testIds)],
                                    C = _.generateActiveTestIds();
                                C && A.push("pcode-active-testids=".concat(C));
                                var S = _.getMediaTesttag();
                                S && A.push("media-test-tag=".concat(S)), b.testTag = r.block.getTesttag()
                            }
                            null === (l = (0, n(74472).getPlacement)(t.uniqueId)) || void 0 === l || l.callbacks.triggerOnRender(b)
                        },
                        visibilityManager: this.rtbVisibilityManager,
                        checkVisibility: t.checkVisibility,
                        nonce: t.cspNonce,
                        pageNumber: t.pageNumber,
                        onHide: t.onHide,
                        nanpuSettings: t.nanpuSettings,
                        nativeAdditionalClasses: t.nativeAdditionalClasses,
                        darkTheme: t.darkTheme,
                        position: t.position,
                        renderParams: e,
                        adUsageStorage: (0, n(91411).getAdUsageStorage)(t)
                    }), this.block.render(o)
                }
            }, t.prototype.renderDirect = function (t, e) {
                var r = this;
                this.block && this.block.destructor();
                var i = (0, n(61490).extend)(t, {product: "direct"}), o = this.data.settings[t.blockImpId];
                t.imagesFirst && (o.imagesFirst = !0);
                var a = this.directManager.getData();
                n(43663).transport.cookieMatching(a && a.matchUrls, t.cspNonce), this.directManager.render(i, o, e), this.block = {
                    destructor: function () {
                        r.data.direct || r.directManager.render(i, o)
                    }
                }
            }, t
        }();
        e.r = r
    }, 59060: (t, e, n) => {
        "use strict";
        var r = function () {
            return r = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }, r.apply(this, arguments)
        };
        e.x = void 0;
        var i = function () {
            function t(t) {
                this._viewNotices = t.viewNotices, this._winNotice = t.winNotice, this._linkTail = t.linkTail, this._safeframe = t.safeframe, this._isSendTestIds = t.isSendTestIds, this._activeTestIds = t.activeTestIds, this._getClientactiveTestIds = t.getClientactiveTestIds, this._testIds = t.testIds, this._query = t.query, this.nonce = t.nonce || ""
            }

            return t.prototype.confirm = function (t, e) {
                var i = this;
                if (void 0 === t && (t = {}), this._linkTail && !this._isConfirmSent) {
                    (0, n(75294).H)(t);
                    var o = this.getConfirmUrl(t), a = this._testIds,
                        s = (0, n(88772).generateActiveTestIds)(this._activeTestIds);
                    if (this._viewNotices && this._viewNotices.length) {
                        var l = (0, n(15735).map)(this._viewNotices, (function (o) {
                            return function (t, e, r, i, o) {
                                if (!/\.?yandex\.[a-zA-Z]+\/(?:an\/)?count/.test(t)) return t;
                                var a = t;
                                if (!1 === e && (a = (0, n(28377).addParamToUrl)(a, "viewability-undetermined", "1")), r && (a = (0, n(28377).addParamToUrl)(a, "pcode-active-testids", r)), i && (a = (0, n(28377).addParamToUrl)(a, "pcode-test-ids-from-count", i)), o) for (var s in o) a = (0, n(28377).addParamToUrl)(a, s, o[s]);
                                return a
                            }(o, e, s, i._isSendTestIds ? a : void 0, r(r(r({}, t.extParams || {}), t.renderSize ? {
                                renderWidth: t.renderSize.width,
                                renderHeight: t.renderSize.height
                            } : {}), i._query))
                        }));
                        (0, n(95606).N)(l, this.nonce, this._safeframe).then((function () {
                            (0, n(83009).sendConfirm)({src: o})
                        }), (function () {
                            n(49874).logger.error(new Error("View notices load error"), "RTB_visibility_manager_error")
                        }))
                    } else (0, n(83009).sendConfirm)({src: o});
                    this._isConfirmSent = !0
                }
            }, t.prototype.sendWinNotice = function () {
                !this._isWinNoticeSent && this._winNotice && ((0, n(95606).N)([this._winNotice], this.nonce, this._safeframe), this._isWinNoticeSent = !0)
            }, t.prototype.getConfirmUrl = function (t) {
                var e = t.testtagProps, i = t.renderSize, o = t.formatType, a = t.actualFormat, s = t.extParams,
                    l = t.bannerSizes, c = new (n(98496).a)(e),
                    u = (0, n(88772).generateActiveTestIds)(this._activeTestIds, this._getClientactiveTestIds && this._getClientactiveTestIds()),
                    d = r(r({}, s), {
                        "test-tag": c.toString(),
                        "format-type": o,
                        "actual-format": a,
                        rnd: (0, n(67729).getRandomInt)(1e12, 1e13),
                        "adsdk-bundle-version": (0, n(30107).getVasVersion)()
                    });
                if (u && (d["pcode-active-testids"] = u), this._isSendTestIds && (d["pcode-test-ids-from-count"] = this._testIds), l && (d["banner-sizes"] = l), i && (d.width = i.width, d.height = i.height), this._query) for (var p in this._query) d[p] = this._query[p];
                return new (n(98026).Url)({host: this._linkTail, params: d}).getUrl()
            }, t.getManager = function (e) {
                return e.linkTail in t.visibilityManagers || (t.visibilityManagers[e.linkTail] = new t(e)), t.visibilityManagers[e.linkTail]
            }, t.visibilityManagers = {}, t
        }();
        e.x = i
    }, 56842: (t, e, n) => {
        "use strict";
        e.y = void 0, e.y = function (t, e) {
            var r, i, o, a, s;
            if (!(0, n(13058).isInIframe)(window)) try {
                for (var l = {
                    minWidth: .5 * window.innerWidth,
                    minHeight: .7 * window.innerHeight,
                    maxWidth: window.innerWidth,
                    maxHeight: window.innerHeight
                }, c = e; c;) {
                    var u = window.getComputedStyle(c).getPropertyValue("position");
                    if ("absolute" === u || "fixed" === u || "sticky" === u) {
                        var d = (0, n(87291).getElementRectSize)(e),
                            p = Boolean(location && (0, n(41486).isString)(location.href) && (0, n(26413).isFunction)(location.href.indexOf) && (-1 !== location.href.indexOf("yandex.ru/games") || -1 !== location.href.indexOf("games.s3.yandex.net")));
                        if (d.width >= l.minWidth && d.width <= l.maxWidth && d.height >= l.minHeight && d.height <= l.maxHeight && (r = void 0, i = void 0, o = void 0, a = void 0, s = void 0, r = e.getBoundingClientRect(), i = r.left, o = r.right, a = r.top, s = r.bottom, i >= 0 && a >= 0 && o <= window.innerWidth && s <= window.innerHeight)) return void n(49874).logger.traceLog({
                            blockId: t,
                            viewportWidth: window.innerWidth,
                            viewportHeight: window.innerHeight,
                            wrapperWidth: d.width,
                            wrapperHeight: d.height
                        }, p ? "FULLSCREEN_LOGGING" : "ALL_FULLSCREENS_LOGGING", 100)
                    }
                    c = c.parentElement
                }
            } catch (r) {
            }
        }
    }, 83500: (t, e) => {
        "use strict";
        e.n = void 0, e.n = function (t) {
            for (var e = 0; e < t.length; e++) (new Image).src = t[e]
        }
    }, 95606: (t, e, n) => {
        "use strict";
        e.N = void 0, e.N = function (t, e, r) {
            return void 0 === r && (r = !0), r ? n(43663).transport.confirmUrls(t, e) : ((0, n(83500).n)(t), Promise.resolve())
        }
    }, 3418: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.Rtb = void 0;
        var r = function () {
            function t() {
                this.managers = {}
            }

            return t.prototype.render = function (t, e) {
                var r = this;
                var i = (0, n(12251).protect)("".concat(n(12251).ProtectedNames.Rtb, ".render"), (function (i) {
                    var o = r._getManagerKey(t);
                    for (var a in r.managers) {
                        if (r.managers.hasOwnProperty(a)) (r.managers[a] && r.managers[a].getRenderTo()) === t.renderTo && a !== o && r._destroyByKey(a)
                    }
                    t.onDataLoad(i.data), t.blockId && (0, n(30289).canShowAd)(t.blockId) && r.renderByData(i, {isRefresh: e})
                })), o = this._getManager(t);
                (0, n(64809).saveBundleType)(t.data, t.bundle), i({
                    cfg: t,
                    data: t.data,
                    rtbManager: o,
                    dataFromParams: !0
                }), (0, n(75556).l)(t.pageId)
            }, t.prototype.renderByData = function (t, e) {
                var r = t.rtbManager, i = t.data, o = t.cfg, a = (0, n(74472).getPlacement)(o.uniqueId);
                if ((0, n(479).checkForEmptyAnswer)(i)) null == a || a.callbacks.triggerAltCallback(); else {
                    if (i.settings) {
                        var s = o.blockImpId, l = i.settings[s] || {};
                        (0, n(91411).getAdUsageStorage)(o).saveAdFilter(l.adFilter, Boolean(i.rtb))
                    }
                    r.setData(i);
                    var c = o.onRender, u = null == a ? void 0 : a.getRenderToElement();
                    o.onRender = function () {
                        (0, n(26413).isFunction)(c) && ((0, n(7386).isHermione)() ? c(arguments, t.data) : c.apply(null, arguments));
                        var e = i.settings, r = void 0 === e ? {} : e;
                        u && o.blockId && (!(0, n(57297).isFullscreen)(r) && !r.interscroller && Math.random() < .1 && (0, n(56842).y)(o.blockId, u), r.interscroller || (0, n(2268).isFloorAd)(r) || (0, n(88918).q)(o.blockId, u))
                    }, r.render(o, e)
                }
            }, t.prototype.destroy = function (t) {
                this._destroyByKey(this._getManagerKey(t))
            }, t.prototype._destroyByKey = function (t) {
                this.managers[t] && (this.managers[t].destructor(), delete this.managers[t])
            }, t.prototype._getManagerKey = function (t) {
                return t.blockId + "#" + (t.pageNumber ? t.pageNumber : "")
            }, t.prototype._getManager = function (t) {
                var e = this._getManagerKey(t);
                return e in this.managers || (this.managers[e] = new (n(90991).r)({onAdAbused: this.handleAdAbused.__pbind(this)})), this.managers[e]
            }, t.prototype.getSkipToken = function (t, e) {
                var r = e || t && this._getManager(t);
                return (0, n(91411).getAdUsageStorage)(t).getSkipToken(t, r && r.getUsedIds())
            }, t.prototype.getCapturedCount = function () {
                return (0, n(85696).S)("RTB_CAPTURED"), (0, n(91411).getAdUsageStorage)().getCapturedCount()
            }, t.prototype.handleAdAbused = function (t, e, r) {
                var i = this;
                (0, n(85696).S)("RTB_AD_ABUSED"), (0, n(71955).shouldSlideUp)(e, r) && t.slideUp((function () {
                    var t = e.renderTo, r = e.onHide, o = (0, n(74472).getPlacement)(e.uniqueId);
                    i.destroy(e);
                    var a = null == o ? void 0 : o.getRenderToElement();
                    a && (0, n(43173).clearHTML)(a), r && (0, n(26413).isFunction)(r) && r.call(window, t)
                }))
            }, t
        }();
        e.Rtb = r
    }, 88918: (t, e, n) => {
        "use strict";
        e.q = void 0, e.q = function (t, e) {
            var r = e;
            try {
                for (; r;) {
                    var i = window.getComputedStyle(r).getPropertyValue("position");
                    if ("absolute" === i || "fixed" === i) {
                        var o = window.innerWidth, a = window.innerHeight, s = (0, n(34403).getBoundingClientRect)(r),
                            l = s.width, c = s.height, u = s.top;
                        if (l < .7 * o || c > .3 * a) return;
                        if (Math.abs(u) > 20 && Math.abs(u + c - a) > 20) return;
                        return void n(49874).logger.traceLog({
                            blockId: t,
                            viewportWidth: o,
                            viewportHeight: a,
                            wrapperWidth: l,
                            wrapperHeight: c,
                            position: Math.abs(u) < 20 ? "TOP" : "BOTTOM"
                        }, "FLOOR_AD_USE_CASE", 10)
                    }
                    r = r.parentElement
                }
            } catch (t) {
            }
        }
    }, 21050: (t, e, n) => {
        "use strict";
        e.n = void 0;
        e.n = function (t) {
            return function (e, r, i) {
                return (0, n(25465).K)(t, e, r, i)
            }
        }
    }, 20834: (t, e) => {
        "use strict";
        e.I = void 0, e.I = function (t, e) {
            var n = t % 100, r = t % 10;
            return n > 10 && n < 20 ? e[2] : r > 1 && r < 5 ? e[1] : 1 === r ? e[0] : e[2]
        }
    }, 25465: (t, e, n) => {
        "use strict";
        e.K = void 0;
        var r = [1, 3, 6];
        e.K = function (t, e, i, o) {
            var a;
            if (!i) throw new Error('I18n: \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043d\u0435\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0439 \u043a\u043b\u044e\u0447 \u044f\u0437\u044b\u043a\u0430: "'.concat(i, '"'));
            if (a = Number(i), -1 === (0, n(22886).indexOf)(r, a) && (a = 1), !t[e] || !t[e][a]) throw new Error('I18n: \u043d\u0435\u0442 \u044f\u0437\u044b\u043a\u043e\u0432\u043e\u0439 \u043c\u0435\u0442\u043a\u0438 "'.concat(e, '" \u043d\u0430 \u044f\u0437\u044b\u043a\u0435 ').concat(a));
            var s = t[e][a];
            if ((0, n(26413).isFunction)(s)) {
                if (!(0, n(7153).isObject)(o)) throw new Error('I18n: \u0412\u043c\u0435\u0441\u0442\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0441 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u043d "'.concat(typeof o, '"'));
                return s(o)
            }
            return s
        }
    }, 1796: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.i18n = void 0, e.i18n = (0, n(21050).n)(n(82586).p)
    }, 82586: (t, e, n) => {
        "use strict";
        e.p = void 0, e.p = {
            ABOUT_SELLER: {
                1: "\u041e \u043f\u0440\u043e\u0434\u0430\u0432\u0446\u0435",
                3: "About the seller",
                6: "Sat\u0131c\u0131 hakk\u0131nda"
            },
            HIDE: {1: "\u0421\u043a\u0440\u044b\u0442\u044c", 3: "Hide", 6: "Gizle"},
            HIDE_AD: {
                1: "\u0421\u043a\u0440\u044b\u0442\u044c&nbsp;\u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435",
                3: "Hide&nbsp;ad",
                6: "Reklamlar\u0131&nbsp;gizle"
            },
            ADDRESS_AND_PHONE: {
                1: "\u0410\u0434\u0440\u0435\u0441&nbsp;\u0438&nbsp;\u0442\u0435\u043b\u0435\u0444\u043e\u043d",
                3: "Adress&nbsp;and&nbsp;phone",
                6: "Adres&nbsp;ve&nbsp;telefon"
            },
            CONTACTS: {1: "\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b", 3: "Contacts", 6: "Contacts"},
            GEO_FROM: {1: "\u041e\u0442&nbsp;\u0432\u0430\u0441"},
            METRO: {1: "\u043c.", 3: "m.", 6: "m."},
            MORE: {1: "\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435", 3: "More", 6: "Detayl\u0131"},
            LEARN_MORE_LONG: {
                1: "\u0423\u0437\u043d\u0430\u0439\u0442\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435",
                3: "",
                6: ""
            },
            MORE_ON: {
                1: "\u0411\u043e\u043b\u044c\u0448\u0435 \u043d\u0430",
                3: "More on",
                6: "Ayr\u0131nt\u0131l\u0131 bilgi"
            },
            ON: {1: "\u043d\u0430", 3: "", 6: "ile"},
            LOOK_FURTHER: {
                1: "\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435",
                3: "see also",
                6: "\u015eunlara da g\xf6z at\u0131n"
            },
            LEGAL_INFO: {
                1: "\u042e\u0440.\xa0\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f",
                3: "Legal info",
                6: "Yasal bilgiler"
            },
            LEGAL_INFO_FULL: {
                1: "\u042e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f",
                3: "Legal info",
                6: "Yasal bilgiler"
            },
            ADVERTISMENT: {1: "\u0420\u0435\u043a\u043b\u0430\u043c\u0430", 3: "Ad", 6: "Reklam"},
            INSTALL: {
                1: "\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c",
                3: "Install",
                6: "Y\xfcklemek"
            },
            INSTALL_FROM_STORE: {
                1: function (t) {
                    return "\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0438\u0437 ".concat(t.store)
                }, 3: function (t) {
                    return "Get it on ".concat(t.store)
                }, 6: function (t) {
                    return "".concat(t.store, " 'den alin")
                }
            },
            DOWNLOAD_APP: {1: "\u0421\u043a\u0430\u0447\u0430\u0442\u044c", 3: "Get it", 6: "Y\xfcklemek"},
            RATING_FROM_STORE: {
                1: function (t) {
                    return "".concat(t.rating, " \u0438\u0437 ").concat(t.max)
                }, 3: function (t) {
                    return "".concat(t.rating, " out of ").concat(t.max)
                }, 6: function (t) {
                    return "".concat(t.rating, " \xfczerinden ").concat(t.max)
                }
            },
            REVIEW: {
                1: function (t) {
                    return (0, n(20834).I)(t.count, ["\u043e\u0442\u0437\u044b\u0432", "\u043e\u0442\u0437\u044b\u0432\u0430", "\u043e\u0442\u0437\u044b\u0432\u043e\u0432"])
                }, 3: function (t) {
                    return (0, n(20834).I)(t.count, ["review", "reviews", "reviews"])
                }, 6: function (t) {
                    return (0, n(20834).I)(t.count, ["yorum", "yorum", "yorumlar"])
                }
            },
            DOWNLOADS: {
                1: function (t) {
                    return (0, n(20834).I)(t.count, ["\u0441\u043a\u0430\u0447\u0438\u0432\u0430\u043d\u0438\u0435", "\u0441\u043a\u0430\u0447\u0438\u0432\u0430\u043d\u0438\u044f", "\u0441\u043a\u0430\u0447\u0438\u0432\u0430\u043d\u0438\u0439"])
                }, 3: function (t) {
                    return (0, n(20834).I)(t.count, ["download", "downloads", "downloads"])
                }, 6: function (t) {
                    return (0, n(20834).I)(t.count, ["kurulum", "kurulum", "kurulum"])
                }
            },
            MILLIONS_SHORT: {1: "\u043c\u043b\u043d.", 3: "M", 6: "M"},
            THOUSANDS_SHORT: {1: "\u0442\u044b\u0441.", 3: "K", 6: "B"},
            RATING: {1: "\u0420\u0435\u0439\u0442\u0438\u043d\u0433", 3: "Rating", 6: "De\u011ferlendirme"},
            SMART_READ_MORE: {
                1: "\u0423\u0437\u043d\u0430\u0442\u044c \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435",
                3: "Find out more",
                6: "Daha fazla bilgi"
            },
            ADV_COLLAPSE: {1: "\u0421\u0432\u0435\u0440\u043d\u0443\u0442\u044c", 3: "Hide", 6: "Gizle"},
            ADV_MINIMIZE: {1: "\u0421\u0432\u0435\u0440\u043d\u0443\u0442\u044c", 3: "Minimize", 6: "Gizle"},
            ADV_EXPAND: {
                1: "\u0420\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044c",
                3: "Expand",
                6: "G\xf6ster"
            },
            ADV_IS_HIDDEN: {
                1: "\u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u043a\u0440\u044b\u0442\u043e",
                3: "Advertisement hidden",
                6: "Reklam gizlendi"
            },
            CANCEL: {1: "\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c", 3: "Cancel", 6: "\u0130ptal"},
            ZEN_ADV_IS_HIDDEN: {
                1: "\u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u043a\u0440\u044b\u0442\u043e. \u0422\u0435\u043f\u0435\u0440\u044c \u0432\u044b \u0431\u0443\u0434\u0435\u0442\u0435 \u0432\u0438\u0434\u0435\u0442\u044c \u043c\u0435\u043d\u044c\u0448\u0435 \u043f\u043e\u0434\u043e\u0431\u043d\u044b\u0445 \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0439.",
                3: "The ad is hidden. You will see fewer ads like this.",
                6: "Reklam gizlendi. Benzer reklamlar\u0131 daha az g\xf6receksiniz."
            },
            LOGO_DIRECT: {1: "\u0414\u0438\u0440\u0435\u043a\u0442", 3: "Direct", 6: "Direct"},
            RUB: {1: "\u0440\u0443\u0431", 3: "rub", 6: "ruble"},
            BYR: {1: "Br", 3: "Br", 6: ""},
            UZS: {1: "\u0441\u0443\u043c", 3: "sum", 6: ""},
            TURBO_PAGE: {
                1: "\u0422\u0443\u0440\u0431\u043e-\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430",
                3: "Turbo page",
                6: "Turbo sayfa"
            },
            COPY: {1: "\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c", 3: "Copy", 6: "Kopyala"},
            ZEN2_COPIED: {
                1: "\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u043e",
                3: "Copied",
                6: "Kopyalanan"
            },
            ZEN2_SHARE: {
                1: "\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f",
                3: "Share",
                6: "Payla\u015f"
            },
            ZEN2_SHARE_TELEGRAM: {1: "Telegram", 3: "Telegram", 6: "Telegram"},
            ZEN2_SHARE_VK: {1: "VK", 3: "VK", 6: "VK"},
            ZEN2_SHARE_OK: {
                1: "\u041e\u0434\u043d\u043e\u043a\u043b\u0430\u0441\u0441\u043d\u0438\u043a\u0438",
                3: "Odnoklassniki",
                6: "Odnoklasniki"
            },
            ZEN2_SHARE_FB: {1: "Facebook", 3: "Facebook", 6: "Facebook"},
            ZEN2_SHARE_TWITTER: {1: "Twitter", 3: "Twitter", 6: "Twitter"},
            ZEN2_SHARE_WHATSAPP: {1: "Whats App", 3: "Whats App", 6: "Whats App"},
            SOCIAL_ADV: {
                1: "\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u0440\u0435\u043a\u043b\u0430\u043c\u0430",
                3: "Social advertising",
                6: ""
            },
            SOCIAL_ADV_SHORT: {
                1: "\u0421\u043e\u0446\u0440\u0435\u043a\u043b\u0430\u043c\u0430",
                3: "Social ad",
                6: ""
            },
            SOCIAL_ADV_SHORT_ZEN2_RIGHT: {
                1: "\u0421\u043e\u0446. \u0440\u0435\u043a\u043b\u0430\u043c\u0430",
                3: "Social ad",
                6: ""
            },
            REPEAT: {1: "\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c", 3: "Repeat", 6: "Tekrarla"},
            ADD_TO_COLLECTION: {
                1: "\u0412 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435",
                3: "Add to collection",
                6: ""
            },
            COLLECTION: {1: "\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435", 3: "Collection", 6: ""},
            ADDED_TO: {1: "\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432", 3: "Added to", 6: ""},
            LIKE: {1: "\u041d\u0440\u0430\u0432\u0438\u0442\u0441\u044f", 3: "Like", 6: ""},
            DISLIKE: {1: "\u041d\u0435 \u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f", 3: "Dislike", 6: ""},
            SUBSCRIBE: {
                1: "\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f",
                3: "Subscribe",
                6: "Abone ol"
            },
            SUBSCRIBED: {
                1: "\u0412\u044b \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d\u044b",
                3: "Subscribed",
                6: ""
            },
            YANDEX_SERVICES: {
                1: "\u0421\u0435\u0440\u0432\u0438\u0441\u044b \u042f\u043d\u0434\u0435\u043a\u0441\u0430",
                3: "Yandex Services"
            },
            GO_TO: {1: "\u041f\u0435\u0440\u0435\u0439\u0442\u0438", 3: "Proceed", 6: ""}
        }
    }, 92191: (t, e, n) => {
        "use strict";
        var r, i = (r = function (t, e) {
            return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }, r(t, e)
        }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function n() {
                this.constructor = t
            }

            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", {value: !0}), e.RafSizeSensor = void 0;
        var o = function (t) {
            function e(e, r) {
                void 0 === r && (r = {disableProtect: !1});
                var i = t.call(this) || this;
                i.container = e, i.settings = r, i.listeners = [], i.canTriggerResize = !0;
                var o = new (n(73599).b)(i.container), a = (0, n(8763).rafDebounce)((function (t, e) {
                    if (i.settings.disableProtect) (0, n(15137).forEach)(i.listeners, (function (t) {
                        return t(e, n(85225).noop)
                    })); else if (i.canTriggerResize) {
                        i.canTriggerResize = !1;
                        var r = (0, n(15735).map)(i.listeners, (function (t) {
                            return new Promise((function (n) {
                                t(e, n)
                            }))
                        }));
                        Promise.all(r).then((function () {
                            (0, n(96757).requestAnimationFrame)((function () {
                                i.canTriggerResize = !0
                            }))
                        }))
                    }
                }));
                return o.onResize.add(a), i.addDestroyHandler((function () {
                    o.destroy(), a.cancel(), i.listeners = []
                })), i
            }

            return i(e, t), e.prototype.addResizeHandler = function (t) {
                this.listeners.push(t)
            }, e.prototype.addSyncResizeListener = function (t) {
                this.listeners.push((function (e, n) {
                    t(e), n()
                }))
            }, e
        }(n(81444).Destroyable);
        e.RafSizeSensor = o
    }, 25154: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.getWarningMinSquareRatio = e.WARNING_HEIGHT_SHARE_0_05 = e.WARNING_HEIGHT_SHARE_0_1 = e.hasMedicineFlag = e.hasBusinessUnitFlag = e.hasSocialAdvertisingFlag = e.hasImportantFlags = e.parseBannerFlags = e.ALCOHOL_FLAG = e.DIETARY_SUPPLEMENT_FLAG = e.MEDICINE_FLAG = void 0, e.MEDICINE_FLAG = "medicine", e.DIETARY_SUPPLEMENT_FLAG = "dietarysuppl", e.ALCOHOL_FLAG = "alcohol";
        var r = [e.MEDICINE_FLAG, e.ALCOHOL_FLAG, e.DIETARY_SUPPLEMENT_FLAG];

        function i(t) {
            return "" !== t && (0, n(41486).isString)(t) ? (0, n(15735).map)(t.split(","), (function (t) {
                return t.trim()
            })) : []
        }

        e.parseBannerFlags = i, e.hasImportantFlags = function (t) {
            return (0, n(85200).isArray)(t) || (t = i(t)), (0, n(38179).some)(t, (function (t) {
                return (0, n(22886).indexOf)(r, t) > -1
            }))
        }, e.hasSocialAdvertisingFlag = function (t) {
            return (0, n(85200).isArray)(t) || (t = i(t)), (0, n(22886).indexOf)(t, "social_advertising") > -1
        }, e.hasBusinessUnitFlag = function (t) {
            return (0, n(85200).isArray)(t) || (t = i(t)), (0, n(22886).indexOf)(t, "business_unit") > -1
        }, e.hasMedicineFlag = function (t) {
            return (0, n(85200).isArray)(t) || (t = i(t)), (0, n(22886).indexOf)(t, e.MEDICINE_FLAG) > -1
        }, e.WARNING_HEIGHT_SHARE_0_1 = .1, e.WARNING_HEIGHT_SHARE_0_05 = .05, e.getWarningMinSquareRatio = function (t) {
            return (0, n(85200).isArray)(t) || (t = i(t)), t.indexOf(e.DIETARY_SUPPLEMENT_FLAG) > -1 || t.indexOf(e.ALCOHOL_FLAG) > -1 ? e.WARNING_HEIGHT_SHARE_0_1 : t.indexOf(e.MEDICINE_FLAG) > -1 ? e.WARNING_HEIGHT_SHARE_0_05 : 0
        }
    }, 87378: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.calcVisibilityTime = void 0, e.calcVisibilityTime = function (t) {
            if (t && "exposureTimeout" in t) {
                var e = parseInt(t.exposureTimeout, 10);
                if (!isNaN(e)) return e
            }
            return (0, n(34605).getDelay)(n(22805).VISIBILITY_CRITERIA.YA)
        }
    }, 21266: (t, e, n) => {
        "use strict";
        e.O = void 0, e.O = function (t) {
            var e, r = t && (0, n(93052).j)(t),
                i = "true" === (null === (e = null == t ? void 0 : t.common) || void 0 === e ? void 0 : e.isStaff),
                o = (0, n(56240).getUaasIsInternalNetwork)();
            return (r || o || i) && !(0, n(7386).isHermione)()
        }
    }, 29219: (t, e, n) => {
        "use strict";
        e.s = void 0, e.s = function (t) {
            return !(0, n(14573).Q)(t, ["wifi"])
        }
    }, 80200: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.canUseAdtune = void 0, e.canUseAdtune = function (t) {
            return !(0, n(14573).Q)(t, ["authwifi"])
        }
    }, 98163: (t, e, n) => {
        "use strict";
        e.t = void 0, e.t = function (t, e) {
            return Boolean(e) && (0, n(41486).isString)(e) && ((0, n(14573).Q)(t, ["wifi"]) || (0, n(64809).checkBundleIsSSP)())
        }
    }, 48937: (t, e, n) => {
        "use strict";
        e.s = void 0, e.s = function (t) {
            return (0, n(14573).Q)(t, ["mailRuAll"])
        }
    }, 79139: (t, e, n) => {
        "use strict";
        e.Z = void 0;
        e.Z = function (t) {
            return !(0, n(14573).Q)(t, ["mailRu", "vk"])
        }
    }, 55157: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.shouldShowAdtune = void 0;
        e.shouldShowAdtune = function (t) {
            if (t.isInOverlay && t.isInOverlay()) return !1;
            if (t.isApp()) return !1;
            var e = n(45229).MraidHelpers.getMraid();
            return !(0, n(64809).checkBundleIsSSP)() || !(e && "3.0" === e.getVersion() || t.getSettings && t.getSettings().hideAdtuneInSsp)
        }
    }, 79447: (t, e, n) => {
        "use strict";
        var r, i = function () {
            return i = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }, i.apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {value: !0}), e.getAssetClick = e.createClickInfo = e.getClickInfoForUrl = void 0, e.getClickInfoForUrl = function () {
            var t;
            return r && (t = {clickX: r.clickX, clickY: r.clickY, width: r.width, height: r.height}), t
        }, e.createClickInfo = function (t, e) {
            void 0 === e && (e = {});
            var o = (0, n(34403).getBoundingClientRect)(t.currentTarget), a = o.left, s = o.top, l = o.width,
                c = o.height, u = Math.round(t.clientX - a), d = Math.round(t.clientY - s);
            return r = i({clickX: u, clickY: d, width: Math.round(l), height: Math.round(c)}, e)
        }, e.getAssetClick = function (t, e) {
            var r, i, o, a;
            if ("string" == typeof t.className && t.className.search(n(88136).YA_CLAMP_CONTENT) >= 0) return (null === (a = null === (o = null === (i = null === (r = null == t ? void 0 : t.parentNode) || void 0 === r ? void 0 : r.lastElementChild) || void 0 === i ? void 0 : i.firstElementChild) || void 0 === o ? void 0 : o.dataset) || void 0 === a ? void 0 : a.assetClick) || n(17716).DEFAULT_CLICK_ASSET;
            var s = t;
            do {
                if (s.dataset && s.dataset.assetClick) return s.dataset.assetClick;
                s = null == s ? void 0 : s.parentNode
            } while (s !== e && Boolean(s));
            return n(17716).DEFAULT_CLICK_ASSET
        }
    }, 5045: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.appendStyle = e.getStylesContainer = void 0;

        function r(t, e) {
            e || (e = (0, n(50775).getHead)(window));
            var r = document.createElement("style");
            return r.setAttribute("type", "text/css"), t && r.setAttribute("nonce", t), e.appendChild(r), r
        }

        var i = [];
        e.getStylesContainer = function (t, e) {
            e || (e = (0, n(50775).getHead)(window));
            for (var o = null, a = 0; a < i.length; a++) if (i[a].parent === e) {
                o = i[a].container;
                break
            }
            return o || (o = r(t, e)), i.push({parent: e, container: o}), o
        }, e.appendStyle = function (t, e, n, i) {
            void 0 === i && (i = !1);
            var o = r(e, n);
            return o.insertAdjacentHTML("beforeend", t), o
        }
    }, 84863: (t, e, n) => {
        "use strict";
        e.D = void 0, e.D = function (t) {
            n(50880).isMobile && t.classList.add("needsclick")
        }
    }, 87650: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.findParent = void 0;
        e.findParent = function (t, e, n) {
            void 0 === n && (n = !1);
            for (var r = n ? t : t.parentNode; r && 1 === r.nodeType;) {
                if (e(r)) return r;
                r = r.parentNode
            }
            return null
        }
    }, 12542: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.getElementByData = void 0, e.getElementByData = function (t, e, r) {
            void 0 === r && (r = document);
            var i = ((0, n(65421).getElementsByData)(t, e, r) || [])[0];
            return i || null
        }
    }, 65421: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.getElementsByData = void 0, e.getElementsByData = function (t, e, r) {
            void 0 === r && (r = document);
            var i = void 0 === e ? "[data-".concat(t, "]") : "[data-".concat(t, '="').concat(e, '"]'),
                o = r.querySelectorAll(i);
            return o && 0 !== o.length ? (0, n(66779).listToArray)(o) : null
        }
    }, 20816: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.loadImage = void 0, e.loadImage = function (t) {
            if (!t.src) return n(49874).logger.warn(new Error("Empty image src"), "loadImage"), void (t.onError && (0, n(12251).protect)("handler:error", t.onError, t.ctx)());
            var e = new Image;
            (0, n(26413).isFunction)(t.onLoad) && (0, n(41110).on)(e, "load", (0, n(94532).once)((function () {
                return t.onLoad(e)
            })), t.ctx), (0, n(26413).isFunction)(t.onError) && (0, n(41110).on)(e, "error", (0, n(94532).once)(t.onError), t.ctx), e.src = t.src
        }
    }, 74119: (t, e) => {
        "use strict";
        e.M = void 0, e.M = function (t) {
            void 0 === t && (t = {});
            var e = t.settings || {}, n = Object.keys(e)[0], r = (n ? e[n] : {}).enableAnimation;
            return {enableAnimation: void 0 === r || r}
        }
    }, 2363: (t, e, n) => {
        "use strict";
        e.Y = void 0, e.Y = function (t) {
            var e = [];
            return t.viewNotices && t.viewNotices.length && (e = e.concat(t.viewNotices)), (0, n(41486).isString)(t.viewNotice) && "" !== t.viewNotice && e.push(t.viewNotice), e = (0, n(15735).map)((0, n(98370).unique)(e), (function (t) {
                return new (n(98026).Url)({host: t}).getUrl()
            }))
        }
    }, 61640: (t, e) => {
        "use strict";
        e.M = void 0, e.M = function (t) {
            return "1" === String(null == t ? void 0 : t.externalDSP)
        }
    }, 93052: (t, e) => {
        "use strict";
        e.j = void 0, e.j = function (t) {
            var e;
            return 1 === (null === (e = t.rtbAuctionInfo) || void 0 === e ? void 0 : e.isInternalRequest)
        }
    }, 32709: (t, e) => {
        "use strict";
        e.o = void 0;
        e.o = function (t) {
            return "a" === t.tagName.toLowerCase()
        }
    }, 8: (t, e, n) => {
        "use strict";
        e.g = void 0, e.g = function (t, e) {
            return void 0 === t && (t = ""), void 0 === e && (e = window), (0, n(13058).isInIframe)(e) && (/^partner-code\.yandex\.ru/i.test(location.host) || /^(?:106712)|(?:106713)$/.test(t))
        }
    }, 49771: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.loadDependencies = void 0, e.loadDependencies = function (t) {
            if (0 === t.length) return Promise.resolve([]);
            for (var e = [], n = function (n) {
                var r = t[n], i = new Promise((function (t, e) {
                    r((function (e) {
                        return t(e)
                    }), e)
                }));
                e.push(i)
            }, r = 0; r < t.length; r++) n(r);
            return Promise.all(e)
        }
    }, 75556: (t, e, n) => {
        "use strict";
        e.l = void 0;
        var r = {}, i = (0, n(12251).protect)("metrika_yan", (function (t) {
            t.hit(window.location.href, {referer: document.referrer})
        }));
        e.l = function (t) {
            !r[t] && ((0, n(96483).requestCounter)({
                id: parseInt(t, 10),
                isYAN: !0,
                enableCookies: !1
            }, i), r[String(t)] = !0)
        }
    }, 63565: (t, e, n) => {
        "use strict";
        e.on = e.S = void 0;
        var r = (0, n(94532).once)((function (t) {
            try {
                var e = n(45229).MraidHelpers.getMraid(t);
                if (!e) return;
                return e.addEventListener("error", (function (t, e) {
                    n(49874).logger.error(new Error(t), "MRAID_error_".concat(e))
                })), e
            } catch (t) {
                return
            }
        }));
        e.S = function (t) {
            return void 0 === t && (t = window), r(t)
        }, e.on = function (t, e) {
            var r = (0, n(12251).protect)("MRAID_Listener_".concat(t), e);
            return n(45229).MraidHelpers.on(t, r, window)
        }
    }, 42009: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.open = void 0, e.open = (0, n(12251).protect)("open", (function (t) {
            var e = n(45229).MraidHelpers.isAvailable();
            if ("string" == typeof t) e ? n(45229).MraidHelpers.open(window, t) : window.open(t, "_blank"); else if (!t.defaultPrevented && e) {
                var r = (0, n(87650).findParent)(t.target, n(32709).o, !0);
                r && (n(45229).MraidHelpers.open(window, r.href), t.preventDefault())
            }
        }))
    }, 79562: (t, e, n) => {
        "use strict";
        var r = function () {
            return r = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }, r.apply(this, arguments)
        }, i = function (t, e, n) {
            if (n || 2 === arguments.length) for (var r, i = 0, o = e.length; i < o; i++) !r && i in e || (r || (r = Array.prototype.slice.call(e, 0, i)), r[i] = e[i]);
            return t.concat(r || Array.prototype.slice.call(e))
        };
        Object.defineProperty(e, "__esModule", {value: !0}), e.asyncCollectMarks = void 0;
        var o = function () {
            function t(t, e, n) {
                void 0 === n && (n = 0), this.name = t, this.startTime = e, this.duration = n || 0
            }

            return t.prototype.toJSON = function () {
                var t = this;
                return {name: t.name, startTime: t.startTime, duration: t.duration}
            }, t
        }(), a = ["total"];

        function s(t) {
            var e = c(t, n(85914).RenderMarks.AdvManagerLoader), r = c(t, n(85914).RenderMarks.AdvManagerRender),
                i = -1, o = n(85914).RenderMarks.AdvManagerLoader;
            return e ? i = e.startTime : r && (o = n(85914).RenderMarks.AdvManagerRender, i = r.startTime), {
                initMark: o,
                startTime: i
            }
        }

        function l(t, e) {
            (0, n(31427).I)().then((function () {
                var l = function (t) {
                    var e = s(t), r = e.startTime, a = e.initMark, l = c(t, n(85914).RenderMarks.OnRenderCalled),
                        d = u(t, a, n(85914).RenderMarks.OnRenderCalled, "total"),
                        p = u(t, a, n(85914).RenderMarks.ReadyForRendering, "loading"),
                        f = u(t, a, n(85914).RenderMarks.ContentfulRender, "contentfulRendering"),
                        h = new o("renderFromNavigation", 0, null == l ? void 0 : l.startTime),
                        g = u(t, n(85914).RenderMarks.AdvManagerLoader, n(85914).RenderMarks.DataLoaded, "fullDataLoading"),
                        v = u(t, n(85914).RenderMarks.AdvManagerLoader, n(85914).RenderMarks.ReadyToRequest, "dataLoadingInQueue"),
                        m = u(t, n(85914).RenderMarks.StartLazyLoadObserver, n(85914).RenderMarks.ReadyToRequest, "lazyLoadWaitingForIntersection"),
                        _ = u(t, n(85914).RenderMarks.ReadyToRequest, n(85914).RenderMarks.DataLoaded, "dataLoadingBS"),
                        b = u(t, n(85914).RenderMarks.DataLoaded, n(85914).RenderMarks.AdvManagerLoaded, "advManagerLoading"),
                        y = u(t, n(85914).RenderMarks.DepsLoadStart, n(85914).RenderMarks.ReadyForRendering, "depsLoading"),
                        I = u(t, n(85914).RenderMarks.StartDomRendering, n(85914).RenderMarks.StopDomRendering, "domRendering"),
                        A = u(t, n(85914).RenderMarks.StartDetector, n(85914).RenderMarks.StartEffectRendering, "pendingDetect"),
                        C = u(t, n(85914).RenderMarks.StopDomRendering, n(85914).RenderMarks.StartEffectRendering, "waitingLayout"),
                        S = u(t, n(85914).RenderMarks.StartEffectRendering, n(85914).RenderMarks.StopEffectRendering, "effectRendering"),
                        E = u(t, n(85914).RenderMarks.StartDomRendering, n(85914).RenderMarks.StopEffectRendering, "totalRendering"),
                        O = i(i(i(i(i(i(i(i(i(i(i(i(i(i(i([], p, !0), g, !0), v, !0), _, !0), b, !0), y, !0), m, !0), I, !0), A, !0), C, !0), S, !0), E, !0), d, !0), f, !0), [h], !1);
                    O.sort((function (t, e) {
                        return t.startTime + t.duration - (e.startTime + e.duration)
                    }));
                    var T = m[0], R = {startTime: r};
                    return (0, n(15137).forEach)(O, (function (t) {
                        T && t.startTime < T.startTime && t.startTime + t.duration > T.startTime + T.duration ? R[t.name] = t.duration - T.duration : R[t.name] = t.duration
                    })), R
                }(t), d = function (t) {
                    var e = s(t).startTime, r = c(t, n(85914).RenderMarks.ContextJs), i = (0, n(1164).E7)(),
                        o = i.CONTEXT_JS_LOAD_START, a = i.CONTEXT_JS_LOAD_END, l = i.CONTEXT_JS_EXEC_START, u = {};
                    return r && o && a && (u.waitContextJsBeforeLoad = o, u.waitContextJsLoad = a - o, u.waitContextJsParse = l - a, u.waitContextJsExecToRender = e - l, u.waitContextJs = e - o), u
                }(t), p = (null == e ? void 0 : e.externalDeltas) || {};
                null == e || delete e.externalDeltas, (0, n(85914).clearMarks)(t);
                var f = r(r(r({}, p), l), d);
                d.waitContextJs && l.total && (f.ultimateTotal = d.waitContextJs + l.total);
                var h = r({}, e), g = (0, n(74192).getStatus)(t);
                null !== g && (h.isInViewportOnRenderComplete = h.isInViewport, h.isInViewport = g.wasAdSeen, f.adSeenWaiting = g.total), (0, n(15137).forEach)(a, (function (t) {
                    f["".concat(t, "_type_").concat(h.type)] = f[t]
                })), (0, n(38715).forOwn)(f, (function (t, e) {
                    f[e] = Math.round(t)
                })), (0, n(4374).sendRumDeltas)(f, h)
            }))
        }

        function c(t, e) {
            var r = "".concat(t, "_").concat(e), i = (0, n(85914).getMarksByName)(r);
            return i.length ? i[i.length - 1] : null
        }

        function u(t, e, r, i) {
            void 0 === i && (i = "".concat(e, " - ").concat(r));
            var a = "".concat(t, "_").concat(e), s = "".concat(t, "_").concat(r), l = (0, n(85914).getMarksByName)(a),
                c = (0, n(85914).getMarksByName)(s), u = [];
            if (l.length && c.length) {
                var d = l.concat(c).sort((function (t, e) {
                    return t.startTime - e.startTime
                })), p = 0;
                (0, n(15137).forEach)(d, (function (t) {
                    if (t.name === a) p = t.startTime; else if (p <= t.startTime) {
                        var e = new o(i, p, t.startTime - p);
                        u.push(e)
                    }
                }))
            }
            return u
        }

        e.asyncCollectMarks = function (t, e) {
            (0, n(85914).isPerfLogging)() && n(12251).protect.setTimeout((function () {
                return l(t, e)
            }), 0)
        }
    }, 35740: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.preventMissClicks = e.getPreventMissClicksScript = void 0;
        var r, i = 100;
        e.getPreventMissClicksScript = function () {
            return r || (r = ["<scr", 'ipt>"use strict";(', n(92713).preventClicks, ")(document,", i, ")</scr", "ipt>"].join(""))
        }, e.preventMissClicks = function (t, e) {
            t && (0, n(92713).preventClicks)(t, e || i)
        }
    }, 92713: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.preventClicks = void 0, e.preventClicks = function (t, e) {
            for (var n = ["click", "mousedown", "mouseup", "touchstart", "touchend"], r = Date.now(), i = function (t) {
                Date.now() - r < e && (t.stopPropagation(), t.preventDefault())
            }, o = 0, a = n; o < a.length; o++) {
                var s = a[o];
                t.addEventListener(s, i, {passive: !1})
            }
            setTimeout((function () {
                for (var e = 0, r = n; e < r.length; e++) {
                    var o = r[e];
                    t.removeEventListener(o, i, !0)
                }
            }), e)
        }
    }, 90812: (t, e) => {
        "use strict";
        e.O5 = e.C2 = e.i7 = void 0, function (t) {
            t["CSP_VIOLATION"] = "csp-violation", t["INTERVENTION"] = "intervention", t["DEPRECATION"] = "deprecation", t["FEATURE_POLICY_VIOLATION"] = "feature-policy-violation"
        }(e.i7 || (e.i7 = {})), function (t) {
            t["EMPTY_REPORT"] = "EMPTY_REPORT", t["UNKNOWN_REPORT_TYPE"] = "UNKNOWN_REPORT_TYPE", t["NETWORK_USAGE_INTERVENTION_REPORT"] = "NETWORK_USAGE_INTERVENTION_REPORT", t["CPU_USAGE_INTERVENTION_REPORT"] = "CPU_USAGE_INTERVENTION_REPORT", t["PEAK_CPU_INTERVENTION_REPORT"] = "PEAK_CPU_INTERVENTION_REPORT", t["TOTAL_CPU_INTERVENTION_REPORT"] = "TOTAL_CPU_INTERVENTION_REPORT", t["TOUCHMOVE_INTERVENTION_REPORT"] = "TOUCHMOVE_INTERVENTION_REPORT", t["UNKNOWN_INTERVENTION_REPORT"] = "UNKNOWN_INTERVENTION_REPORT", t["FEATURE_POLICY_VIOLATION_REPORT"] = "FEATURE_POLICY_VIOLATION_REPORT", t["CSP_VIOLATION_REPORT"] = "CSP_VIOLATION_REPORT", t["DEPRECATION_REPORT"] = "DEPRECATION_REPORT"
        }(e.C2 || (e.C2 = {})), e.O5 = "BROWSER_REPORTING"
    }, 21206: (t, e, n) => {
        "use strict";
        e.F = void 0, e.F = function (t) {
            var e;
            if (!(0, n(7153).isObject)(t)) return n(90812).C2.EMPTY_REPORT;
            if (!t.type) return n(90812).C2.EMPTY_REPORT;
            if (t.type === n(90812).i7.CSP_VIOLATION) return n(90812).C2.CSP_VIOLATION_REPORT;
            if (t.type === n(90812).i7.INTERVENTION) {
                var r = (null === (e = t.body) || void 0 === e ? void 0 : e.message.toLowerCase()) || "";
                return r.includes("network usage") ? n(90812).C2.NETWORK_USAGE_INTERVENTION_REPORT : r.includes("peak cpu") ? n(90812).C2.PEAK_CPU_INTERVENTION_REPORT : r.includes("total cpu") ? n(90812).C2.TOTAL_CPU_INTERVENTION_REPORT : r.includes("cpu usage") ? n(90812).C2.CPU_USAGE_INTERVENTION_REPORT : r.includes("touchmove") ? n(90812).C2.TOUCHMOVE_INTERVENTION_REPORT : n(90812).C2.UNKNOWN_INTERVENTION_REPORT
            }
            return t.type === n(90812).i7.DEPRECATION ? n(90812).C2.DEPRECATION_REPORT : t.type === n(90812).i7.FEATURE_POLICY_VIOLATION ? n(90812).C2.FEATURE_POLICY_VIOLATION_REPORT : n(90812).C2.UNKNOWN_REPORT_TYPE
        }
    }, 69100: (t, e, n) => {
        "use strict";

        function r(t) {
            if (!("ReportingObserver" in t.window)) return null;
            var e = t.window;

            function n(n) {
                try {
                    e.parent.postMessage(window.JSON.stringify({
                        reports: n,
                        params: t.params,
                        name: "BROWSER_REPORTING"
                    }), "*")
                } catch (t) {
                    console.error("Original Error: ".concat(t.message, ", Reports Data: ").concat(window.JSON.stringify(n)))
                }
            }

            var r = new e.ReportingObserver((function (t) {
                n(r.takeRecords().concat(t))
            }), {buffered: !0});
            r.observe();
            var i = r.takeRecords();
            return i.length && n(i), window.addEventListener("unload", (function () {
                n(r.takeRecords())
            })), function () {
                r.disconnect()
            }
        }

        Object.defineProperty(e, "__esModule", {value: !0}), e.getReportingEventEmitterScript = e.createReportingEventEmitter = void 0, e.createReportingEventEmitter = r, e.getReportingEventEmitterScript = function (t) {
            return ["<scr", 'ipt>"use strict";(', r, ")({ window, params: ".concat(n.lv["json"].stringify(t), " })</scr"), "ipt>"].join("")
        }
    }, 37275: (t, e, n) => {
        "use strict";
        e.N = void 0, e.N = function (t, e) {
            return (0, n(85200).isArray)(t) || n(49874).logger.error(new Error("confirmUrls: urls arent array"), "frameTransport"), (0, n(85200).isArray)(t) && 0 !== t.length ? (0, n(28903).C)({
                name: "load_image",
                urls: t,
                bundle: "default",
                adblockCountToXhr: n(72218).v.countToXhr,
                countToXhr: !1
            }, e) : Promise.resolve()
        }
    }, 42832: (t, e) => {
        "use strict";
        e.eG = e.BW = void 0, e.BW = "CONFIRM_FRAME_READY", e.eG = "CONFIRM_FRAME_UNLOADED"
    }, 97305: (t, e, n) => {
        "use strict";
        e.u = void 0, e.u = function (t, e) {
            var r = (0, n(85200).isArray)(t) ? t : [];
            0 !== r.length && (0, n(28903).C)({name: "load_image", namespace: "pcssspb", days: 6, urls: r}, e)
        }
    }, 43663: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.transport = void 0;
        var r = (0, n(94532).once)((function () {
            return !(0, n(64809).checkBundleIsSSP)() && !(0, n(64809).checkBundleIsMobilSdk)() && !(0, n(48937).s)()
        }));
        e.transport = {
            cookieMatching: (0, n(94532).once)((function (t, e) {
                r() && (0, n(97305).u)(t, e)
            })), initSupportLogic: (0, n(94532).once)((function (t) {
                r() && ((0, n(94807).b)(t), n(12251).protect.setTimeout((function () {
                    return (0, n(34700).y)(t)
                }), 2e3))
            })), confirmUrls: n(37275).N
        }
    }, 94807: (t, e, n) => {
        "use strict";
        e.b = void 0;
        e.b = function (t) {
            (0, n(28903).C)({
                name: "load_image",
                namespace: "afpix",
                days: 1,
                urls: ["https://ysa-static.passport.yandex.ru/static/1/d959d7e39d5067fad30d9c06204866e9/d.png?ex=yes"]
            }, t)
        }
    }, 34700: (t, e, n) => {
        "use strict";
        e.y = void 0;
        e.y = function (t) {
            (0, n(29219).s)(window) && (0, n(28903).C)({
                name: "load_script",
                namespace: "pcs3",
                days: 1,
                urls: ["https://yastatic.net/q/set/s/rsya-tag-users/bundle.js"]
            }, t)
        }
    }, 28903: (t, e, n) => {
        "use strict";
        e.C = void 0, e.C = function (t, e) {
            return r = e, new Promise((function (n, r) {
                o.push({message: t, onerror: r, onsuccess: n}), l(e)
            }))
        };
        var r, i, o = [], a = "not-inited", s = (0, n(94532).once)((function () {
            (0, n(41110).on)(window, "message", (function (t) {
                var e = t && t.data && t.data.name;
                e === n(42832).eG && (a = "not-inited"), e === n(42832).BW && (a = "ready", i = function () {
                    return function (t) {
                        try {
                            if (!t.source || !(0, n(26413).isFunction)(t.source.postMessage)) return a = "not-inited", void l(r);
                            for (; o.length > 0;) {
                                var e = o[o.length - 1];
                                t.source.postMessage(e.message, "*"), o.pop().onsuccess()
                            }
                        } catch (t) {
                            a = "broken", n(49874).logger.error(t, "frameTransportAccess"), u()
                        }
                    }(t)
                }, i())
            }))
        }));

        function l(t) {
            if ("loading" !== a) if ("ready" !== a) if ("broken" !== a) {
                s(), a = "loading";
                var e = ["<scr", "ipt>", n(75193), "</scr", "ipt>"].join("");
                (0, n(99125).v)({
                    html: e, onAction: c, onError: function () {
                        a = "not-inited"
                    }, nonce: t, wait: 36e5
                })
            } else u(); else i()
        }

        function c(t, e) {
            if ("error" === t) {
                var r = new Error("PerformSafeframeTaskError");
                try {
                    var i = n.lv["json"].parse(e);
                    (0, n(8627).assignProperties)(r, {name: i.type, message: i.message})
                } catch (t) {
                }
                n(49874).logger.error(r, "confirmFrameContent", {payload: e}, 1)
            }
        }

        function u() {
            (0, n(15137).forEach)(o, (function (t) {
                t.onerror()
            }))
        }
    }, 83009: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.loadImage = e.sendConfirm = void 0;
        var r = [];

        function i(t, e, r, i) {
            (0, n(82649).sendPixel)(t, e, r, i)
        }

        e.sendConfirm = function (t) {
            if (t.trackOnce) {
                if (r.indexOf(t.src) > -1) return;
                r.push(t.src)
            }
            var e, o, a, s;
            t.body ? (e = t.src, o = t.body, a = t.onLoad, s = t.onError, (0, n(2052).W)({
                url: e,
                data: o,
                method: "post",
                withCredentials: !0,
                retries: 0,
                headers: {"Content-Type": "application/json"},
                onError: s,
                onSuccess: a
            })) : (0, n(48645).L)(t.src) ? function (t, e, r) {
                (0, n(2052).W)({url: t, method: "get", withCredentials: !0, retries: 0, onError: r, onSuccess: e})
            }(t.src, t.onLoad, t.onError) : i(t.src, t.onLoad, t.onError, t.ctx)
        }, e.loadImage = i
    }, 82649: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.sendPixel = void 0, e.sendPixel = function (t, e, r, i) {
            (0, n(20816).loadImage)({src: t, onLoad: e, onError: r, ctx: i})
        }
    }, 14252: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.serverAddParamToUrl = void 0, e.serverAddParamToUrl = function (t, e, n) {
            return void 0 === n ? t : (e = encodeURIComponent(e), n = encodeURIComponent(n), "".concat(t).concat(-1 === t.indexOf("?") ? "?" : "&").concat(e, "=").concat(n))
        }
    }, 76274: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.setInnerHTML = void 0, e.setInnerHTML = function t(e, n, r, i) {
            void 0 === i && (i = {});
            var o = i.onRender, a = i.crossorigin, s = void 0 === a ? "anonymous" : a,
                l = document.createElement("div");
            l.innerHTML = n;
            for (var c = l.getElementsByTagName("script"), u = [], d = 0; d < c.length; d++) u.push(c[d]);
            for (; l.firstChild;) e.appendChild(l.firstChild);
            var p = document.write, f = document.writeln;
            !function n() {
                try {
                    if (document.write = function (n) {
                        t(e, n, r)
                    }, document.writeln = function (t) {
                        document.write(t + "<br/>")
                    }, u.length) {
                        var i = u.shift();
                        i && function (t, e) {
                            for (var n = document.createElement("script"), i = 0; i < t.attributes.length; i++) {
                                var o = t.attributes[i];
                                n.setAttribute(o.name, o.value)
                            }
                            r && n.setAttribute("nonce", r);
                            t.src ? (s && n.setAttribute("crossorigin", s), n.async = !0, n.src = t.src, n.onload = function () {
                                n.onload = function () {
                                }, e()
                            }, t.parentNode.replaceChild(n, t)) : (n.innerHTML = t.text, t.parentNode.replaceChild(n, t), e())
                        }(i, n)
                    } else o && o()
                } finally {
                    document.write = p, document.writeln = f
                }
            }()
        }
    }, 71955: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.shouldSlideUp = e.slideUp = e.PREVENTS_BROWSING_ID = void 0, e.PREVENTS_BROWSING_ID = "9-1";
        e.slideUp = function (t, e) {
            (0, n(12139).setStyle)(t, "overflow", "hidden", true);
            var r = function (e) {
                var r = Math.round(100 * e) / 100;
                (0, n(12139).setStyle)(t, "height", r + "px", true)
            };
            setTimeout((function () {
                (0, n(46552).animate)({
                    duration: 500, start: t.offsetHeight, end: 0, onFrame: r, onEnd: function () {
                        var t = n(45229).MraidHelpers.getMraid();
                        t && t.unload && t.unload(), e()
                    }
                })
            }), 1e3)
        };
        e.shouldSlideUp = function (t, r) {
            var i = window.top !== window.self, o = t.pageId;
            return !(i && !(0, n(8).g)(o)) && r === e.PREVENTS_BROWSING_ID
        }
    }, 94345: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.trackClick = void 0, Object.defineProperty(e, "trackClick", {
            enumerable: !0,
            get: function () {
                return n(99747).ob
            }
        })
    }, 99747: (t, e, n) => {
        "use strict";
        e.ob = e.Zu = void 0;
        e.Zu = function (t) {
            return function (e) {
                t(!1, 3e4, (function (r) {
                    e(n(67926).UZ.TRANSITION, r), t(!0, 24e4, (function (t) {
                        e(n(67926).UZ.RETURN, t)
                    }))
                }))
            }
        }, e.ob = (0, e.Zu)(n(69950).p2)
    }, 69950: (t, e, n) => {
        "use strict";
        var r = Object.create ? function (t, e, n, r) {
            void 0 === r && (r = n);
            var i = Object.getOwnPropertyDescriptor(e, n);
            i && !("get" in i ? !e.__esModule : i.writable || i.configurable) || (i = {
                enumerable: !0,
                get: function () {
                    return e[n]
                }
            }), Object.defineProperty(t, r, i)
        } : function (t, e, n, r) {
            void 0 === r && (r = n), t[r] = e[n]
        }, i = Object.create ? function (t, e) {
            Object.defineProperty(t, "default", {enumerable: !0, value: e})
        } : function (t, e) {
            t["default"] = e
        }, o = function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t) for (var n in t) "default" !== n && Object.prototype.hasOwnProperty.call(t, n) && r(e, t, n);
            return i(e, t), e
        };
        e.p2 = e.Vh = void 0;
        var a = o(n(46466));
        e.Vh = function (t) {
            return function (e, r, i) {
                var o = new Date, a = (0, n(41110).on)(document, t.changeEventName, (function () {
                    t.isHidden() !== e && ((0, n(41110).un)(a), clearTimeout(s), i(Number(new Date) - Number(o)))
                })), s = setTimeout((function () {
                    (0, n(41110).un)(a)
                }), r)
            }
        }, e.p2 = (0, e.Vh)(a)
    }, 84117: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.TzarEventConfirmation = void 0;
        var r = function () {
            function t(t) {
                var e = this;
                if (this.cfg = t, this.cfg.data && this.cfg.data.eventConfirmationData) {
                    this.sendEventConfirmation(this.getEventConfirmationData("bs_response"));
                    var r = this.cfg.renderTo;
                    try {
                        var i = (0, n(5989).getElementById)(r), o = (0, n(3936).findContainer)(r);
                        this.visibilityConfirmer = new (n(72233).VisibilityConfirmer)({
                            element: i || o,
                            autostart: !0,
                            strategy: n(36428).GeneralStrategy.factory,
                            interval: 100,
                            portion: .001,
                            confirmations: [{
                                delay: 0, confirmOnHover: !0, onConfirm: function () {
                                    e.sendEventConfirmation(e.getEventConfirmationData("container_in_viewport_after_response"))
                                }
                            }]
                        })
                    } catch (t) {
                    }
                }
            }

            return t.prototype.getEventConfirmationData = function (t) {
                var e;
                return {
                    Events: [{
                        CommonData: null === (e = this.cfg.data) || void 0 === e ? void 0 : e.eventConfirmationData,
                        VariedData: [{ConfirmationType: t}]
                    }]
                }
            }, t.prototype.sendEventConfirmation = function (t) {
                (0, n(2052).W)({
                    url: "https://an.yandex.ru/event_confirmation",
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    data: n.lv["json"].stringify(t)
                })
            }, t.prototype.destroy = function () {
                this.visibilityConfirmer && (this.visibilityConfirmer.stop(), this.visibilityConfirmer = void 0)
            }, t
        }();
        e.TzarEventConfirmation = r
    }, 32147: (t, e, n) => {
        "use strict";
        var r = function () {
            return r = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }, r.apply(this, arguments)
        };
        e.NP = e.FW = e.SK = void 0;
        e.SK = function (t, e, i) {
            if (!t) return t;
            var o = {"viewability-undetermined": String(Number(!e))};
            return /\.?yandex\.[a-zA-Z]+\/(?:an\/)?count/.test(t) && (o = r(r({}, o), i)), (0, n(28377).addParamsToUrl)(t, o)
        };
        e.FW = function (t) {
            return t
        };
        e.NP = function (t) {
            var r = t.element, o = t.autostart, a = void 0 === o || o, s = t.confirmOnHover, l = void 0 === s || s,
                c = t.onVisible, u = t.portion, d = t.trackings, p = t.delay, f = t.strategy,
                h = t.onVisibilityChangeHandler, g = t.query, v = [{delay: p, onConfirm: c, confirmOnHover: l}];
            return d && (d.mrcImpression && v.push({
                delay: (0, n(34605).getDelay)(n(22805).VISIBILITY_CRITERIA.MRC),
                onConfirm: function (t, r) {
                    (0, n(83009).sendConfirm)({src: (0, e.FW)((0, e.SK)(d.mrcImpression, r, g))})
                },
                confirmOnHover: l
            }), (0, n(85200).isArray)(d.mrcImpressions) && (0, n(15137).forEach)(d.mrcImpressions, (function (t) {
                (0, n(41486).isString)(t) ? v.push({
                    confirmOnHover: !1,
                    delay: (0, n(34605).getDelay)(n(22805).VISIBILITY_CRITERIA.MRC),
                    onConfirm: function (r, i) {
                        (0, n(83009).sendConfirm)({src: (0, e.FW)((0, e.SK)(t, i, g))})
                    }
                }) : (0, n(41486).isString)(t.url) && v.push({
                    delay: t.delay || (0, n(34605).getDelay)(n(22805).VISIBILITY_CRITERIA.MRC),
                    confirmOnHover: !1,
                    onConfirm: function (r, i) {
                        var o = t.url;
                        !i && t.undeterminedUrl && (o = t.undeterminedUrl), o = (0, e.FW)((0, e.SK)(o, i, g)), t.frame ? (0, n(37275).N)([o], "load_image") : (0, n(83009).sendConfirm)({src: o})
                    }
                })
            })), (0, n(85200).isArray)(d.viewabilityTracking) && (0, n(15137).forEach)(d.viewabilityTracking, (function (t) {
                (0, n(41486).isString)(t.url) && t.time && i(v, t.url, t.time, t.frame, g), (0, n(85200).isArray)(t.childs) && (0, n(41486).isString)(t.prefix_url) && (0, n(15137).forEach)(t.childs, (function (e) {
                    i(v, "".concat(t.prefix_url).concat(e.suffix_url), e.time, t.frame, g)
                }))
            }))), new (n(72233).VisibilityConfirmer)({
                element: r,
                portion: u,
                autostart: a,
                strategy: f || n(36428).GeneralStrategy.factory,
                interval: 100,
                confirmations: v,
                onVisibilityChange: h,
                preventStop: (0, n(26413).isFunction)(h)
            })
        };
        var i = function (t, r, i, o, a) {
            void 0 === o && (o = !1), t.push({
                delay: i, onConfirm: function (t, i) {
                    o ? (0, n(37275).N)([(0, e.SK)(r, !1, a)], "load_image") : (0, n(83009).sendConfirm)({src: (0, e.SK)(r, i, a)})
                }
            })
        }
    }, 75294: (t, e) => {
        "use strict";
        e.H = void 0, e.H = function (t) {
            t && t.extParams && (t.extParams.confirmTime && -1 !== t.extParams.confirmTime && (t.extParams.confirmTime *= 1e3), t.extParams.confirmRatio && (t.extParams.confirmRatio = Math.round(1e6 * t.extParams.confirmRatio)))
        }
    }, 49018: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.getVisibilityRatio = void 0, e.getVisibilityRatio = function (t) {
            return Number((0, n(88159).getRatioInViewport)(t).toFixed(2))
        }
    }, 7332: (t, e, n) => {
        "use strict";
        e.K = void 0;
        var r = /\/partner-code-bundles\/\d+\/\w+\.js$|system\/context\.js/i;
        e.K = function () {
            (0, n(41110).on)(window, "error", (function (t) {
                r.test(t.filename) && n(49874).logger.error(t, "UncaughtError")
            }))
        }
    }, 2268: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.isFloorAd = void 0;
        e.isFloorAd = function (t) {
            return Boolean(t && t.floorAd)
        }
    }, 60669: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.addFullscreenListeners = void 0;
        var r = ["click", "mousedown", "mouseup", "touchstart", "touchend"];
        e.addFullscreenListeners = function (t) {
            var e = Date.now(), i = [];
            return function (t, e, i) {
                for (var o = 0, a = r; o < a.length; o++) {
                    var s = a[o], l = (0, n(41110).on)(t, s, (function (t) {
                        Date.now() - e < 1e3 && (t.stopPropagation(), t.preventDefault())
                    }), void 0, {capture: !0, passive: !1});
                    i.push(l)
                }
            }(t, e, i), function () {
                for (var t = 0, e = i; t < e.length; t++) {
                    var r = e[t];
                    (0, n(41110).un)(r)
                }
            }
        }
    }, 57297: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.isFullscreen = e.getFullscreenSettings = void 0, e.getFullscreenSettings = function (t) {
            var e = t.fullscreenDuration, n = void 0 === e ? 10 : e, r = t.fullscreenCloseButtonVisibilityTimeout,
                i = t.pcodeSettings, o = r ? 1e3 * r : r;
            return {duration: (null == i ? void 0 : i.fullscreenDuration) || n, closeButtonVisibilityTimeout: o}
        }, e.isFullscreen = function (t) {
            var e = t;
            return !!(0, n(7153).isObject)(e) && (Boolean(e.fullscreen) || Boolean(e.rewarded))
        }
    }, 10954: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.loadFullscreenController = void 0;
        var r, i = window;
        e.loadFullscreenController = function (t) {
            return r || (r = new Promise((function (t) {
                n(50983)((function () {
                    return t(i.Ya.fullscreen)
                }), (function (t) {
                    return n(49874).logger.error(t, "FullscreenController bundle loading error")
                }))
            }))), t && r.then((function (e) {
                t(e)
            })), r
        }
    }, 22130: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.initMraidCloseButton = e.isNanpuInterstitial = void 0, e.isNanpuInterstitial = function (t) {
            return Boolean(t.nanpuSettings && "interstitial" === t.nanpuSettings.adType)
        }, e.initMraidCloseButton = (0, n(94532).once)((function (t) {
            var e = (0, n(63565).S)(), r = (0, n(57297).getFullscreenSettings)(t).closeButtonVisibilityTimeout;
            e && r && r > 0 && (0, n(63565).on)("ready", (function () {
                e.useCustomClose(!0), (0, n(7690).visibilityObserver)(n(97741).OneOfStrategy.from(n(87793).MraidStrategy.factory, n(75578).I2.factory))(document.body, (function () {
                    window.setTimeout((function () {
                        e.useCustomClose(!1)
                    }), r)
                }))
            }))
        }))
    }, 67926: (t, e, n) => {
        "use strict";
        var r, i = (r = function (t, e) {
            return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }, r(t, e)
        }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function n() {
                this.constructor = t
            }

            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        e.M0 = e.UZ = void 0, function (t) {
            t[t["TRANSITION"] = 1] = "TRANSITION", t[t["RETURN"] = 2] = "RETURN"
        }(e.UZ || (e.UZ = {}));
        var o = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return i(e, t), e.prototype.getTemplate = function () {
                return [[4, "bannerIndex"], [1, "hasTitle"], [1, "hasSubtitle"], [3, "marketRating"], [1, "hasRmpCall2Action"], [1, "hasRmpPrice"], [2, "clickPixel"], [1, "hasText"], [1, "hasDomain"], [1, "hasImage"], [1, "hasCallouts"], [1, "hasPhone"], [1, "hasFavIcon"], [1, "hasVideo"], [1, "videoPlayed"], [1, "isConfirmedClick"], [1, "hasPrice"], [1, "hasStoreRating"], [2, "fittedImageBackgroundVariant"], [2, "fittedImageIndentationVariant"], [1, "hasAddress"], [1, "hasRmpIcon"], [1, "hasRmpRating"], [1, null], [1, "hasPcodeInfo"], [1, "hasValidTitle"], [1, "hasValidDomain"], [1, null], [2, "skipTokenSlider"], [4, null], [3, "staleWhileRevalidate"], [1, "isRmp"], [2, null], [2, null], [2, null], [1, "lastBit"]]
            }, e.prototype.defaults = function () {
                return {}
            }, e
        }(n(42726).f);
        e.M0 = o
    }, 62061: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.buildBannerSizes = e.buildOrderBannerOptions = e.buildBannerTesttags = e.createLinkTailUrl = e.ORDER_BANNER_OPTIONS_KEY = e.BANNER_TEST_TAG_KEY = void 0, e.BANNER_TEST_TAG_KEY = ["ban", "ner-te", "st-tags"].join(""), e.ORDER_BANNER_OPTIONS_KEY = ["orde", "r-bann", "ers-options"].join(""), e.createLinkTailUrl = function (t, e) {
            return t + (0, n(98370).unique)((0, n(15735).map)(e, (function (t) {
                return t.linkTail
            }))).join("")
        }, e.buildBannerTesttags = function (t, e) {
            void 0 === e && (e = {});
            var r = {};
            return (0, n(15137).forEach)(t, (function (t) {
                if (null == t ? void 0 : t.adId) {
                    var i = t.bannerTesttag ? t.bannerTesttag.clone() : new (n(67926).M0);
                    i.setProps(e), r[t.adId] = i.toString()
                }
            })), (0, n(21625).encode)(n.lv["json"].stringify(r))
        }, e.buildOrderBannerOptions = function (t) {
            var e = {};
            if ((0, n(15137).forEach)(t, (function (t) {
                (null == t ? void 0 : t.adId) && (null == t ? void 0 : t.orderBannerOptions) && (e[t.adId] = t.orderBannerOptions)
            })), 0 !== (0, n(89030).getObjectValues)(e).length) {
                var r = (0, n(21625).encode)(n.lv["json"].stringify(e));
                return (0, n(21625).cropEquals)(r)
            }
        }, e.buildBannerSizes = function (t) {
            var e = {};
            return (0, n(15137).forEach)(t, (function (t) {
                t && (e[t.adId] = "".concat(t.size.width, "x").concat(t.size.height))
            })), (0, n(21625).encode)(n.lv["json"].stringify(e))
        }
    }, 9022: (t, e, n) => {
        "use strict";
        var r, i = (r = function (t, e) {
            return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }, r(t, e)
        }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function n() {
                this.constructor = t
            }

            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        e.mF = e.ro = e._Z = e.I2 = void 0, e.I2 = {
            "240x400": 1,
            "240x600": 2,
            "300x250": 3,
            "300x500": 4,
            "300x600": 5,
            "728x90": 6,
            "970x250": 7,
            "1000x120": 8,
            motion: 9,
            video: 10
        };
        e._Z = function (t, n) {
            return e.I2["".concat(t, "x").concat(n)] || 0
        };
        var o = {
            "smart-banner_theme_auto": 1,
            "smart-banner_theme_auto-accordion": 2,
            "smart-banner_theme_auto-static-accordion": 3,
            "smart-banner_theme_avia": 4,
            "smart-banner_theme_big-image": 5,
            "smart-banner_theme_dzen": 6,
            "smart-banner_theme_dzen-text": 7,
            "smart-banner_theme_hover": 8,
            "smart-banner_theme_mobile": 9,
            "smart-banner_theme_mobile-tap": 10,
            "smart-banner_theme_mosaic": 11,
            "smart-banner_theme_multiple": 13,
            "smart-banner_theme_normal": 14,
            "smart-banner_theme_realty": 15,
            "smart-banner_theme_travel": 16,
            "video-banner_theme_caucasus": 17,
            "video-banner_motion": 18,
            "video-banner_theme_moroz": 19,
            "video-banner_theme_lake": 20,
            "video-banner_theme_empty": 21,
            "video-banner_motion-rmp": 22,
            "video-banner_theme_zen": 23,
            "video-banner_theme_video-smart": 24,
            "video-banner_theme_string": 25,
            "video-banner_theme_interstitial": 26,
            "video-banner_theme_premium": 27,
            "video-banner_motion_3": 28,
            "video-banner_theme_audio": 29,
            "video-banner_theme_rmp": 30,
            "smart-banner-adaptive_v1": 31,
            "media-banner_theme_big-pic-button_v_2": 32,
            "media-banner_theme_divided_v_1": 33,
            "media-banner_theme_divided_v_2": 34,
            "media-banner_theme_gif_v_1": 35,
            "media-banner_theme_gif_v_2": 36,
            "media-banner_theme_metro_v_2": 37,
            "media-banner_theme_pic-button-color-background_v_1": 38,
            "media-banner_theme_pic-button-color-background_v_2": 39,
            "media-banner_theme_speedy_v_1": 40,
            "media-banner_theme_speedy_v_2": 41,
            "media-banner_theme_twin_v_1": 42,
            "media-banner_theme_twin_v_2": 43,
            "media-banner_theme_wine-adaptive_v_1": 44,
            "media-banner_theme_wine-adaptive_v_2": 45,
            "media-banner_theme_wine-adaptive_v_3": 46,
            "media-banner_theme_wine_v_1": 47,
            "media-banner_theme_wine_v_2": 48,
            "media-banner_theme_big-pic-button_v_1": 49,
            "smart-banner_theme_clothes": 50,
            "media-banner": 51,
            "smart-banner-mosaic_v1": 52,
            "media-banner_theme-image": 53,
            "media-banner_theme-html5": 54
        };
        e.ro = function (t, e) {
            return e ? o["media-banner_theme-html5"] : o[t] || 0
        };
        var a = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return i(e, t), e.prototype.defaults = function () {
                return {marker: n(27265).T.PERFORMANCE, adblock: !1, creativeType: 0}
            }, e.prototype.getTemplate = function () {
                return [[4, "marker"], [6, "theme"], [6, "format"], [1, "adblock"], [4, null], [3, "creativeType"], [10, "pcodeVer"], [5, null], [10, "version"], [2, null], [2, "isSsr"]]
            }, e
        }(n(42726).f);
        e.mF = a
    }, 83865: t => {
        "use strict";
        var e = /yatag/gi, n = /(?:"|\s)+(?:id|class)=["'](.*?)["']/g, r = /<\/?[a-z][\s\S]*>/i,
            i = /[#.][a-z\d\-_/=]+[^:,.\s{]/gi, o = /:(.*?)(?:;|})/g;

        function a(t, e) {
            for (var n = 5381, r = t.length + e.length, i = "" + e + t; r;) n = 33 * n ^ i.charCodeAt(--r);
            return n >>>= 0, "" + String.fromCharCode(n % 25 + 97) + n.toString(16)
        }

        var s = {};

        function l(t, e) {
            return t ? a(t, e) : ""
        }

        function c(t) {
            return t.replace(e, "div")
        }

        function u(t, e) {
            var n = t + "--" + (e = e || "rS6ys3dT3Q");
            return s.hasOwnProperty(n) ? s[n] : s[n] = l(t, e)
        }

        t.exports = {
            calculatePathHash: function (t) {
                return a(t, "")
            }, encodeTemplate: function (t) {
                return r.test(t) ? c(t = t.replace(n, (function (t, e) {
                    for (var n = e.split(" "), r = 0; r < n.length; r++) t = t.replace(new RegExp(n[r] + "(?![-\\w])", "g"), u(n[r]));
                    return t
                }))) : t
            }, encodeStyle: function (t, e, n) {
                return void 0 === e && (e = !0), void 0 === n && (n = !1), n ? (t = t.replace(/(?:^|})(.*?){/g, (function (t) {
                    return t.replace(i, (function (t) {
                        return "" + t[0] + u(t.slice(1))
                    }))
                })), e && (t = c(t)), t) : t
            }, replaceYatag: c, getAlias: u, generateAlias: l, encodeSelectors: function (t) {
                return t.replace(i, (function (t) {
                    return /__([0-9]+?)__/g.test(t) ? t : "" + t[0] + u(t.slice(1))
                }))
            }, getClassName: function (t, e) {
                return t + "---" + e
            }, clearStorage: function () {
                s = {}
            }, prioritizeStyles: function (t) {
                return t.replace(o, (function (t, e) {
                    return -1 === t.indexOf("!important") && -1 === t.indexOf("data:") && "{" !== e[e.length - 1] && (t = t.replace(e, e + " !important")), t
                }))
            }, splitSelectors: function (t) {
                var e = [];
                if (t) for (var n = 0, r = 0, i = 0; i < t.length; i++) switch (t[i]) {
                    case"{":
                        n++;
                        break;
                    case"}":
                        if (0 === --n) {
                            var o = t.substring(r, i + 1);
                            e.push(o.trim().replace(/,\s+/gi, ",")), r = i + 1
                        }
                }
                return e
            }
        }
    }, 64360: (t, e, n) => {
        "use strict";
        var r = n(50298), i = n(38746), o = n(3573), a = n(31514), s = n(7234), l = n(85914), c = n(22130),
            u = n(50445), d = n(49573), p = n(57354), f = n(41712), h = n(61490), g = n(37505), v = n(12890),
            m = n(54559), _ = n(74472), b = n(10954), y = (0, g.augment)(Object, {
                constructor: function (t, e, n, c, g, y, I, A) {
                    var C, S = this;
                    void 0 === I && (I = {});
                    var E = (0, _.getPlacement)(A);
                    this.formatName = e.format.name;
                    var O = this.formatName;
                    e.format.type !== d.BLOCK_TYPES.SSR || O in o.ASSOCIATED_BLOCKS || (O = d.BLOCK_TYPES.SSR);
                    var T = (null == (C = o.ASSOCIATED_BLOCKS[O]) ? void 0 : C[1]) || {};
                    this.dataSource = t, this._renderToNode = (0, s.getContainer)(E.getRenderToElement(), g), this.renderTo = n;
                    var R = {blockId: c, blockName: O, blockSettings: T, isTurbo: window.YA_TURBO_PAGES},
                        w = (0, i.switchFormat)(R), k = w.selectedBlock;
                    T = w.newBlockSettings;
                    var P = k.isOld;
                    this.dataSource.setActualFormat(k.id);
                    var N = (0, u.getBlockModule)(k), L = N.async, M = N.module;
                    var D = [];
                    L && D.push(M), (0, f.isNewFullscreen)(e) && (L || D.push(M), D.push(p.loadNewFullscreenController)), t.isFullscreen() && (L || D.push(M), D.push(b.loadFullscreenController)), t.isFloorAd() && (L || D.push(M), D.push(v.loadFloorAdController)), t.isClosable() && (L || D.push(M), D.push(m.loadClosableAdController)), t.isInterscroller() && (L || D.push(M), D.push(a.loadInterscrollerController)), this._isAsync = Boolean(D.length), this.isOldBlock = P, (0, l.setMark)(t.getUniqueId(), l.RenderMarks.DepsLoadStart), this._isAsync ? this.block = new r.AsyncBlock({
                        dependencies: D,
                        isOld: P,
                        blockId: c,
                        blockName: O,
                        renderToNode: this._renderToNode,
                        renderTo: n,
                        dataSource: t,
                        settings: (0, h.extend)(e, T),
                        nonce: g,
                        pageNumber: y,
                        renderParams: I,
                        encodeStyles: !0
                    }) : M((function (r) {
                        S.block = S.isOldBlock ? new r(t, e, n, c, g, y, I) : new r({
                            blockId: c,
                            blockName: O,
                            renderToNode: S._renderToNode,
                            renderTo: n,
                            dataSource: t,
                            settings: (0, h.extend)(e, T),
                            nonce: g,
                            pageNumber: y,
                            renderParams: I,
                            encodeStyles: !0
                        })
                    }))
                }, getRealBlock: function (t) {
                    this._isAsync ? this.block.getRealBlock((function (e) {
                        return t(e)
                    })) : t(this.block)
                }, confirmVisibility: function () {
                    this.block.confirmVisibility()
                }, destructor: function () {
                    this.block.destroy ? this.block.destroy() : this.block.destructor(), (0, l.clearMarks)(this.dataSource.getUniqueId())
                }, render: function (t) {
                    this.dataSource.isInterstitial && (0, c.initMraidCloseButton)(this.dataSource.getSettings()), this._isAsync ? this.block.renderTo(this._renderToNode, t) : (this.isOldBlock ? this.block.render() : this.block.renderToContainer(this._renderToNode), t())
                }, getMainCont: function () {
                    return this._renderToNode
                }, getDataSource: function () {
                    return this.dataSource
                }, getUsedAdvs: function () {
                    return this.block.getUsedAdvs()
                }, isInViewport: function () {
                    return this.block.isInViewport()
                }, isVisible: function () {
                    return this.block.isVisible()
                }, isVisibilityConfirmed: function () {
                    return this.block.isVisibilityConfirmed()
                }, slideUp: function () {
                    var t;
                    return (t = this.block).slideUp.apply(t, arguments)
                }, getTesttag: function () {
                    return this.dataSource.getTesttag()
                }
            });
        t.exports = y
    }, 37505: (t, e, n) => {
        "use strict";
        e.__esModule = !0, e.augment = function (t, e) {
            var n = e.constructor;
            e.hasOwnProperty("constructor") || (n = function () {
                n.__parent.apply(this, arguments)
            });
            var i = Object.create(t.prototype);
            return i.constructor = n, n.__super = t.prototype, n.__parent = t, i.__self = n, n.prototype = (0, r.extend)(i, e), n
        };
        var r = n(61490)
    }, 6110: (t, e, n) => {
        "use strict";
        e.b = void 0;
        var r = n(37505), i = n(15137), o = n(22886), a = n(25867);
        var s = null, l = (0, r.augment)(Object, {
            constructor: function (t) {
                this.handler = t
            }, observe: function (t) {
                return this.disconnect(), this.element = t, function (t) {
                    var e = t.element, n = d(e);
                    n || (n = new c(e), u.push(n));
                    n.observers.push(t), p(n), u.length && !s && (s = window.setInterval(f, 300))
                }(this), this
            }, disconnect: function () {
                var t, e;
                return (e = d((t = this).element)) && (h(e.observers, t), e.observers.length || h(u, e), !u.length && s && (window.clearInterval(s), s = null)), this
            }
        });

        function c(t) {
            this.element = t, this.observers = []
        }

        e.b = l;
        var u = [];

        function d(t) {
            for (var e = 0; e < u.length; e++) {
                var n = u[e];
                if (n.element === t) return n
            }
            return null
        }

        function p(t) {
            var e = t.element, n = (0, a.hasDimensions)(e);
            (0, i.forEach)(t.observers.concat(), (function (t) {
                t.handler(n, e)
            }))
        }

        function f() {
            (0, i.forEach)(u.concat(), p)
        }

        function h(t, e) {
            var n = (0, o.indexOf)(t, e);
            n > -1 && t.splice(n, 1)
        }
    }, 61490: (t, e) => {
        "use strict";
        e.__esModule = !0, e.extend = function (t) {
            for (var e, n = 1, r = arguments.length; n < r; n++) if (e = arguments[n]) for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            return t
        }
    }, 21439: (t, e, n) => {
        "use strict";
        var r = n(49131), i = n(64809), o = n(41110), a = n(30289), s = n(49874), l = n(66648), c = n(479),
            u = n(38710), d = n(36087), p = n(85914), f = n(28255), h = n(15137), g = n(94320), v = n(89030),
            m = n(81713), _ = n(74472), b = n(84117), y = n(10974), I = n(74192), A = n(8990), C = n(62570),
            S = n(68810), E = n(84330), O = n(3418), T = n(88772), R = n(49573), w = n(85384), k = n(44751),
            P = n(21849), N = n(98164);

        function L(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function M(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? L(Object(n), !0).forEach((function (e) {
                    D(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : L(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        function D(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        function B() {
            this._rtb = new O.Rtb, this._settingsStorage = {}, this._refreshFlag = !1, (0, m.initReportListener)()
        }

        B.prototype = {
            render: function (t, e) {
                var n, h = this;
                this.tzarEventConfirmation = new b.TzarEventConfirmation(t), t.uniqueId ? n = (0, _.getPlacement)(t.uniqueId) : ((t = M({}, t)).uniqueId = (0, l.generateHexString)(10), t.slotIndex = (0, f.increaseCounter)(), (n = (0, _.registerPlacement)(t.uniqueId)).setCallbacks({
                    onError: t.onError,
                    onClick: t.onClick,
                    onRender: t.onRender,
                    onPreload: t.onPreload,
                    altCallback: t.altCallback || e
                }), n.setBlockId(t.blockId), n.setContainer(t.renderTo), (0, w.isCustomBannerTypeAndExp)(t.type) && (n.setContainerDomNode(t.renderToDomNode), n.setBannerType(t.type))), this._initAdRefreshment(t);
                var g = n.getRenderToElement();
                if (!g) {
                    var v = 'Container with id "' + n.renderTo + '" is not found (init)';
                    return n.callbacks.triggerError("CONTAINER_NOT_FOUND", v), void s.logger.errorStrict("CONTAINER_NOT_FOUND", {
                        text: v,
                        pageId: n.blockId.pageId,
                        blockId: n.blockId.origin,
                        renderTo: n.renderTo
                    })
                }
                if (n.isValid()) {
                    var m = (new Date).getTime() / 1e3;
                    if ((0, a.canMakeRequest)(t.blockId, m)) {
                        (0, p.setMark)(t.uniqueId, p.RenderMarks.AdvManagerRender), t.adSessionId && (0, r.setSessionId)(t.adSessionId), s.logger.configure({
                            labels: {pageId: (0, d.getServiceName)()},
                            data: {blockId: t.blockId, pageId: n.blockId.pageId}
                        }), (0, i.saveBundleType)(t.data, t.bundle), (0, o.on)(g, "error", this._sendExternalResourceError, this, {capture: !0});
                        var y = (0, A.getRenderId)(t);
                        this.save(y, t), t.onDataLoad = function (e) {
                            var r;
                            if (!(0, c.checkForEmptyAnswer)(e)) {
                                var i = n.blockId.impId,
                                    o = (0, E.isMainPage)(null == e || null == (r = e.settings) ? void 0 : r[i]),
                                    s = (0, S.isMainPageRefreshBlock)(e, i);
                                (0, a.markRequest)(t.blockId, m, e.settings && e.settings[i] && e.settings[i].pcodeSettings);
                                var l = 1e3 * (0, a.getRequestTimeout)(t.blockId),
                                    d = "fullscreen" === t.type && t.autoRefresh && l,
                                    p = "floorAd" === t.type && !t.isAdfox && "exp" === (0, T.useExperimentFlag)("REFRESH_FLOOR_AD");
                                (o && !s || d) && C.refresher.unregister(t.uniqueId);
                                (s || d || p) && C.refresher.register({
                                    uniqueId: t.uniqueId,
                                    rule: d ? "fullscreen" : "time",
                                    timeout: p ? 1e3 * R.DEFAULT_RELOAD_TIMEOUT : l,
                                    onRefresh: function () {
                                        delete t.data, t.refresh = !0, h._refreshFlag = !0, (0, u.getYaContext)().AdvManager.render(t), h._refreshFlag = !1
                                    }
                                })
                            }
                        };
                        var I = n.blockId.product;
                        switch (I) {
                            case"R":
                            case"N":
                            case"D":
                                var O = (0, P.prepareRtbConfig)(t);
                                this._rtb.render(O, this._refreshFlag);
                                break;
                            case"Y":
                                this._renderDistribution(t);
                                break;
                            default:
                                var k = 'Block type "' + I + '" is not supported';
                                n.callbacks.triggerError("UNKNOWN_BLOCK_TYPE", k), s.logger.errorStrict("UNKNOWN_BLOCK_TYPE", {
                                    text: k,
                                    blockId: t.blockId
                                })
                        }
                    } else {
                        var N, L;
                        null == (N = n) || null == (L = N.callbacks) || L.triggerAltCallback()
                    }
                } else (0, _.destroyPlacement)(t.uniqueId)
            }, renderWidget: function (t) {
                var e = (0, y.prepareWidgetConfig)(t);
                this.render(M(M({}, e), {}, {
                    statId: t.statId,
                    extParams: t.extParams,
                    data: t.data,
                    onClick: t.onClick
                }), e.onError)
            }, _sendExternalResourceError: function (t) {
                s.logger.error(new Error("ExternalResourceError"), void 0, {
                    tagName: t && t.srcElement ? t.srcElement.tagName : "none",
                    src: t && t.target ? t.target.src : "none"
                })
            }, _renderDistribution: function (t) {
                var e = this;
                this._distribution || n(62507)((function (n) {
                    e._distribution = new n, e._distribution.render((0, N.prepareDistributionConfig)(t))
                }), (function (t) {
                    return s.logger.error(t, "Distribution bundle loading error")
                }))
            }, save: function (t, e) {
                var n = this._settingsStorage[t] || {};
                this._settingsStorage[t] = M(M({}, n), e)
            }, getSaved: function (t) {
                return M({}, this._settingsStorage[t])
            }, _initAdRefreshment: function (t) {
                t.disableRefresh || (0, i.checkBundleIsSSP)() || (0, i.checkBundleIsMobilSdk)() || C.refresher.register({
                    uniqueId: t.uniqueId,
                    onRefresh: function () {
                        delete t.data, t.refresh = !0, this._refreshFlag = !0, (0, u.getYaContext)().AdvManager.render(t), this._refreshFlag = !1
                    },
                    rule: "tab"
                })
            }, getSkipToken: function (t) {
                return this._rtb.getSkipToken(t)
            }, getCapturedCount: function () {
                return this._rtb.getCapturedCount()
            }, getAdSessionId: function () {
                return (0, r.getSessionId)()
            }, getBlocks: function () {
                return (0, _.getAllBlocksInfo)()
            }, destroy: function (t) {
                var e = this, n = (0, v.getObjectValues)(this._settingsStorage),
                    r = t ? (0, g.filter)(n, (function (n) {
                        return e._destroySettingsComparer(n, t)
                    })) : n;
                (0, h.forEach)(r, (function (t) {
                    e._destroyByCfg(t)
                })), this.tzarEventConfirmation && this.tzarEventConfirmation.destroy()
            }, _destroySettingsComparer: function (t, e) {
                return !(e.renderTo && t.renderTo !== e.renderTo || e.blockId && t.blockId !== e.blockId)
            }, _destroyByCfg: function (t) {
                var e = (0, k.parseBlockId)(t.blockId).product;
                switch ((0, _.destroyPlacement)(t.uniqueId), (0, I.destroyAdSeenObserver)(this.uniqueId), e) {
                    case"N":
                    case"D":
                    case"R":
                        this._destroyBlockFromManager(this._rtb, t);
                        break;
                    case"Y":
                        this._destroyBlockFromManager(this._distribution, t)
                }
            }, _destroyBlockFromManager: function (t, e) {
                t && t.destroy(e)
            }
        }, t.exports = B
    }, 34688: t => {
        "use strict";
        t.exports = {
            SSR: {name: "SSR", path: "blocks/ssr/CommonFormat/BlockController", isOld: !0, id: 78},
            ZEN2: {name: "ZEN2", path: "blocks/ssr/Zen2/BlockController", isOld: !0, id: 79}
        }
    }, 42705: (t, e, n) => {
        "use strict";
        var r = n(74472), i = n(14367), o = n(66264), a = n(85914), s = n(91208), l = n(26413), c = n(15137),
            u = n(15735), d = n(38715), p = n(56240), f = n(34403), h = n(62763), g = n(49874), v = n(49573),
            m = n(70749), _ = n(97425), b = n(30374), y = n(43663), I = n(71288), A = n(60509), C = n(28722),
            S = n(52544), E = n(73266), O = n(8990), T = n(84330);

        function R(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function w(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? R(Object(n), !0).forEach((function (e) {
                    k(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : R(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        function k(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        function P(t) {
            this._blocks = {}, this._onAdAbused = t.onAdAbused
        }

        function N(t) {
            var e = t.getUsedAdvs(), n = [];
            return e && (0, c.forEach)(e, (function (t) {
                n.push(t.adId)
            })), n
        }

        P.prototype.setData = function (t) {
            this._data = t, this._visibilityManager = new _.DirectVisibilityManager
        }, P.prototype.getData = function () {
            return this._data
        }, P.prototype.getBlocks = function () {
            var t = [];
            return (0, d.forOwn)(this._blocks, (function (e) {
                t.push(e)
            })), t
        }, P.prototype.render = function (t, e, n) {
            void 0 === n && (n = {}), n.horizontalAlign || (n.horizontalAlign = Boolean(t.horizontalAlign));
            var i = (0, r.getPlacement)(t.uniqueId), o = Boolean(i.getRenderToElement());
            if (this.renderTo = t.renderTo, !o) {
                var a = 'Container with id "' + t.renderTo + '" is not found (data loaded)';
                return null == i || i.callbacks.triggerError("CONTAINER_NOT_FOUND", a), void g.logger.errorStrict("CONTAINER_NOT_FOUND", {
                    text: a,
                    pageId: t.pageId,
                    blockId: t.blockId,
                    renderTo: t.renderTo
                })
            }
            (0, s.isLightHouse)() || y.transport.initSupportLogic(t.cspNonce);
            var l = (0, O.getRenderId)(t);
            this._destroyBlock(l), this._data && this._data[t.product] ? this._createBlockWrapper(t, e, n) : null == i || i.callbacks.triggerAltCallback()
        }, P.prototype._createBlockWrapper = function (t, e, n) {
            var i = this, o = (0, O.getRenderId)(t), a = (0, r.getPlacement)(t.uniqueId);
            this._createBlock({
                cfg: t, rawSettings: e, renderParams: n, callback: function (n) {
                    n ? (i._blocks[o] = n, n.render((function () {
                        if (i._runOnRenderCallback(n, t), (0, h.isInSafeframe)(window)) {
                            var r = (0, f.getBoundingClientRect)(a.getRenderToElement()), o = r.width, s = r.height,
                                l = e || {}, c = l.width, u = l.height;
                            (0, h.updateSafeframeSize)(window, {
                                width: Math.max((0, A.getValidNumber)(c) || 0, o),
                                height: Math.max((0, A.getValidNumber)(u) || 0, s)
                            })
                        }
                    }))) : null == a || a.callbacks.triggerAltCallback()
                }
            })
        }, P.prototype.getRenderTo = function () {
            return this.renderTo
        }, P.prototype._destroyBlock = function (t) {
            this._blocks[t] && (this._blocks[t].destructor(), delete this._blocks[t])
        }, P.prototype._runOnRenderCallback = function (t, e) {
            var n = this;
            (0, C.brakeFor)(C.POINT_NAME.DOM_RENDERING), (0, a.setMark)(e.uniqueId, a.RenderMarks.OnRenderCalled);
            var r = e.onRender;
            if (r) {
                var i, o, s = t.dataSource, l = {
                    lang: s.getLanguage(),
                    product: "direct",
                    productType: null == s || null == (i = s._data) || null == (o = i.common) ? void 0 : o.productType
                }, c = t.getUsedAdvs();
                if ("floorAd" === e.type) {
                    var d, f = null == (d = t.block) ? void 0 : d.getFloorAdSlot();
                    f && (l.floorAdSize = f.getSize())
                }
                if (l.advData = (0, u.map)(c, (function (t) {
                    var e, r, i = null == (e = n._data) || null == (r = e.rtbAuctionInfo) ? void 0 : r.bidReqIdStr,
                        o = {adId: t.adId, eventHash: t.eventHash, hitLogId: t.hitLogId, video: s.hasVideo()};
                    return i && (o.bidReqIdStr = i), t.ctr && (o.ctr = t.ctr), o
                })), s.isApp()) {
                    var h = t.getTesttag(),
                        g = ["pcode-test-ids-from-count=" + (0, p.getUaasConfig)().testIds, "actual-format=" + (0, b.getSsrActualFormat)(s.actualFormat, s._settings), "format-type=" + s._settings.format.index],
                        v = s.generateActiveTestIds();
                    v && g.push("pcode-active-testids=" + v), h += "&" + g.join("&"), l.testTag = h
                }
                r(l)
            }
        }, P.prototype.getUsedIds = function (t) {
            var e = [];
            return t && this._blocks[t] ? e = e.concat(N(this._blocks[t])) : (0, d.forOwn)(this._blocks, (function (t) {
                t && (e = e.concat(N(t)))
            })), e
        }, P.prototype._createBlock = function (t) {
            var e = this, n = t.cfg, r = t.rawSettings, i = t.renderParams, o = t.callback;
            this._getFormatObject({
                rawSettings: r, cfg: n, callback: function (t) {
                    return void 0 === t && (t = {}), e._createBlockByFormat({
                        formatObject: t,
                        createBlockCallback: o,
                        cfg: n,
                        renderParams: i,
                        rawSettings: r
                    })
                }
            })
        }, P.prototype._createBlockByFormat = function (t) {
            var e = this, n = t.formatObject, r = t.createBlockCallback, o = t.cfg, a = t.renderParams,
                s = t.rawSettings;
            if ("__disable-csr__" == n.format) return g.logger.error(new Error("Csr disabled"), "Disable_CsrFormat", {name: s.name}), r(null);
            if (null === n.format) return g.logger.error(new Error("Format not found"), "Format_NoFormat", {name: s.name}), r(null);
            E.isAMP && (s = w(w({}, s), (0, S.getWindowSize)()));
            var l = this._getSettings(n, s, o);
            if (null === l) return g.logger.error(new Error("Settings is null"), "Format_NoSettings"), r(null);
            var c = new i.DirectDataSource({
                data: this._data,
                settings: l,
                visibilityManager: this._visibilityManager,
                onAdAbused: function () {
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    e._handleAdAbuse.apply(e, [o].concat(n))
                }
            }, o);
            if (c.isEmpty()) return g.logger.error(new Error("No ads to render"), "Format_NoData"), r(null);
            var u = o.blockId;
            r(new n.constructor(c, l, o.renderTo, u, o.cspNonce, o.pageNumber, a, o.uniqueId))
        }, P.prototype.destructor = function () {
            (0, d.forOwn)(this._blocks, (function (t) {
                t.destructor()
            })), this._blocks = {}
        }, P.prototype._handleAdAbuse = function () {
            if (this._onAdAbused && (0, l.isFunction)(this._onAdAbused)) {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                this._onAdAbused.apply(this, [this].concat(e))
            }
        }, P.prototype.slideUp = function (t, e) {
            var n = this, r = this._blocks[t];
            r.slideUp && r.slideUp((function () {
                n._destroyBlock(t), e()
            }))
        }, P.prototype._getFormatObject = function (t) {
            var e = t.rawSettings, r = t.callback, i = t.cfg, o = e.name, a = i.directSettings || {};
            if ((location.href || "").indexOf("partner-page.html") > 0 && a.type && (o = a.type), E.isAMP && (o = "adaptive0418", e.limit = 1), this._data.direct.ssr && this._data.direct.ssr.html || this._data.common.isCSRBlock || (0, T.isMainPage)(e)) {
                var s = (0, I.camelize)("ssr-" + o);
                n(82929).getFormatByName(s) ? o = s : (g.logger.traceLog({
                    settings: e,
                    formatName: o,
                    ssrFormatName: s
                }, "BAD_SSR_FORMAT", 50), o = v.BLOCK_TYPES.SSR)
            } else o = "__disable-csr__";
            r({constructor: n(64360), format: n(82929).getFormatByName(o)})
        }, P.prototype._getSettings = function (t, e, n) {
            var r = t.format;
            r.blockId = n.blockId;
            var i = (0, o.parse)(r, e, n);
            return i ? ((0, m.setAllowRepeatAds)(i.allowRepeatAds), i) : null
        }, t.exports = P
    }, 82929: (t, e, n) => {
        "use strict";
        var r = n(15137);

        function i(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function o(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        var a = {};
        (0, r.forEach)(n(99354), (function (t) {
            t.index = t.id, t.className = "adapterComponentBlock", t.limit = t.limit || n(49573).MAX_ADS_LIMIT, a[t.name] = t
        })), t.exports = {
            getFormatByName: function (t) {
                var e = a[t];
                return e ? function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? i(Object(n), !0).forEach((function (e) {
                            o(t, e, n[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function (e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }))
                    }
                    return t
                }({}, e) : null
            }
        }
    }, 99354: (t, e, n) => {
        "use strict";

        function r(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function i(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? r(Object(n), !0).forEach((function (e) {
                    o(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        function o(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        var a = "vertical", s = "horizontal", l = "ssr", c = [{id: 0, name: "unknown"}, {
            id: 1,
            name: "flat",
            fixed: !1,
            type: a,
            limit: 4,
            border: [!1, !0],
            useElasticPicture: !0
        }, {id: 2, name: s, fixed: !1, type: s, limit: 6, border: [!1, !0]}, {id: 3, name: "160x600"}, {
            id: 4,
            name: "240x400"
        }, {id: 5, name: "200x300"}, {id: 6, name: "300x300"}, {id: 7, name: "300x250"}, {
            id: 8,
            name: "250x250"
        }, {id: 9, name: "728x90"}, {id: 10, name: "1000x120"}, {
            id: 11,
            name: a,
            fixed: !1,
            type: a,
            border: [!1, !0],
            useElasticPicture: !0
        }, {id: 12, name: "mobile", className: a, fixed: !1, type: a, limit: 1, border: [!1, !0]}, {
            id: 13,
            name: "ssrFullscreen",
            type: l,
            border: []
        }, {id: 14, name: "ssr-320x50"}, {id: 15, name: "320x50"}, {
            id: 16,
            name: "ssrSmartTile",
            type: l,
            border: []
        }, {id: 17, name: "posterVertical"}, {id: 18, name: "newPosterVertical"}, {
            id: 19,
            name: "newPosterHorizontal"
        }, {id: 20, name: "ssrAdaptiveConstructor", type: l, border: []}, {
            id: 21,
            name: "ssrHorizontalSD",
            type: l,
            border: []
        }, {id: 22, name: "posterHorizontal"}, {id: 23, name: "320x100"}, {
            id: 24,
            name: "adaptive",
            fixed: !0,
            type: s,
            border: [!1, !0],
            useElasticPicture: !0
        }, {id: 25, name: "400x240"}, {id: 26, name: "ssrAdaptiveCarousel"}, {id: 27, name: "0x50"}, {
            id: 28,
            name: "320x480"
        }, {id: 29, name: "480x320"}, {id: 30, name: "newVk"}, {id: 31, name: "336x280"}, {
            id: 32,
            name: "728x90-design"
        }, {id: 33, name: "300x600"}, {id: 34, name: "300x500"}, {id: 35, name: "970x250"}, {
            id: 36,
            name: "970x90"
        }, {id: 37, name: "0x90"}, {id: 38, name: "0x90-gismeteo"}, {id: 39, name: "newVertical"}, {
            id: 40,
            name: "newHorizontal"
        }, {id: 41, name: "newGrid"}, {id: 42, name: "newAdaptive"}, {id: 43, name: "extensibleMobile"}, {
            id: 44,
            name: "ssrGrid",
            type: l,
            border: []
        }, {id: 45, name: "ssrNewVertical", type: l, border: []}, {id: 46, name: "oldVertical"}, {
            id: 47,
            name: "oldHorizontal",
            type: s,
            limit: 4,
            showLogoOnTop: !0,
            border: [!1, !0]
        }, {id: 48, name: "0x90-yanews", limit: 1, border: [!1]}, {id: 49, name: "posterVerticalYanews"}, {
            id: 50,
            name: "yaVertical",
            type: a,
            showLogoOnTop: !0,
            border: [!1, !0]
        }, {id: 51, name: "yaPogodaHorizontal3", fixed: !1, type: a, border: [!1], showLogoOnTop: !0}, {
            id: 52,
            name: "yaPogodaHorizontal4",
            fixed: !1,
            type: a,
            border: [!1],
            showLogoOnTop: !0
        }, {id: 53, name: "yaPogodaGrid", fixed: !1, type: a, border: [!1], showLogoOnTop: !0}, {
            id: 54,
            name: "modernAdaptive",
            fixed: !1,
            border: [!1, !0]
        }, {id: 55, name: "mordaApp"}, {id: 56, name: "avitoVertical"}, {id: 57, name: "yaMobileMailTop"}, {
            id: 58,
            name: "yaMobileMailMiddle"
        }, {id: 59, name: "rmpVideo"}, {id: 60, name: "mailruPlugin"}, {
            id: 61,
            name: "animatedScrollableMobile",
            limit: 4,
            border: [!1, !0]
        }, {id: 62, name: "pictureSearch"}, {
            id: 63,
            name: "customBlock",
            fixed: !0,
            type: "custom",
            limit: 9,
            border: [!1, !0]
        }, {id: 64, name: "pictureSearch3"}, {id: 65, name: "zen"}, {id: 66, name: "responsiveMobile"}, {
            id: 67,
            name: "320x67"
        }, {id: 68, name: "relapIo"}, {id: 69, name: "recommendation"}, {id: 70, name: "plista"}, {
            id: 71,
            name: "motion",
            limit: 1,
            border: [!1]
        }, {id: 72, name: "oldPosterHorizontal"}, {id: 73, name: "oldPosterVertical", type: a, border: [!0]}, {
            id: 74,
            name: "newRow"
        }, {id: 75, name: "oldMotion"}, {id: 76, name: "horizontal0318", fixed: !1, type: s, border: [!0]}, {
            id: 77,
            name: "adaptive0418",
            border: [!1, !0]
        }, {id: 78, name: "scrollSlider"}, {id: 79, name: "media"}, {id: 80, name: "multiInterstitial"}, {
            id: 81,
            name: "vertical0318",
            fixed: !1,
            type: a,
            border: [!0]
        }, {id: 82, name: "rowMailRu"}, {id: 83, name: "rowMailRuOctavius"}, {id: 84, name: "mailruVertical2"}, {
            id: 85,
            name: "mailruHorizontal2"
        }, {id: 86, name: "posterVertical2"}, {id: 87, name: "posterHorizontal2"}, {id: 88, name: "simple"}, {
            id: 89,
            name: "billboard",
            limit: 1,
            type: s,
            border: [!1, !0]
        }, {id: 90, name: "zenCarousel"}, {id: 91, name: "posterCarousel"}, {id: 92, name: "ssrPoster"}, {
            id: 93,
            name: l,
            type: l,
            border: []
        }, {id: 94, name: "ssrPosterVertical", type: l, border: []}, {id: 95, name: "ssrPosterHorizontal"}, {
            id: 96,
            name: "ssrBillboard",
            type: l,
            border: []
        }, {id: 97, name: "ssrMotion", type: l, border: []}, {id: 98, name: "ssr-300x300"}, {
            id: 99,
            name: "ssrZen",
            type: l,
            border: []
        }, {id: 100, name: "ssr-970x90"}, {id: 101, name: "ssr-728x90"}, {id: 102, name: "ssr-320x100"}, {
            id: 103,
            name: "ssr-200x300"
        }, {id: 104, name: "ssr-160x600"}, {id: 105, name: "ssr-240x400"}, {id: 106, name: "ssr-1000x120"}, {
            id: 107,
            name: "ssr-300x250"
        }, {id: 108, name: "ssr-300x600"}, {id: 109, name: "ssr-336x280"}, {id: 110, name: "ssr-970x250"}, {
            id: 111,
            name: "ssr-300x500"
        }, {id: 112, name: "ssr-250x250"}, {id: 113, name: "ssr-480x320"}, {id: 114, name: "ssr-400x240"}, {
            id: 115,
            name: "ssrZen2",
            type: l,
            border: []
        }, {id: 116, name: "ssrZen2Gallery", type: l, border: []}, {
            id: 117,
            name: "ssrAdaptive",
            type: l,
            border: []
        }, {id: 118, name: "ssrAdaptive0418", type: l, border: []}, {
            id: 119,
            name: "ssrModernAdaptive",
            type: l,
            border: []
        }, {id: 120, name: "ssrOldPosterVertical", type: l, border: []}, {
            id: 121,
            name: "ssrOldPosterHorizontal"
        }, {id: 122, name: "ssrPosterVertical2", type: l, border: []}, {
            id: 123,
            name: "ssrPosterHorizontal2"
        }, {id: 124, name: "ssrHorizontal", type: l, border: []}, {
            id: 125,
            name: "ssrHorizontal0318",
            type: l,
            border: []
        }, {id: 126, name: "ssrVertical", type: l, border: []}, {id: 127, name: "ssrPosterCarousel"}];
        if ("undefined" != typeof window) for (var u = n(82551).adaptive0418Blocks, d = 0; d < c.length; d++) {
            var p = c[d], f = p.name;
            if (f in u) {
                var h = u[f].limit;
                c[d] = i(i({}, p), {limit: h, border: [!1, !0]})
            }
        }
        t.exports = c
    }, 69958: (t, e, n) => {
        "use strict";
        e.t = d;
        var r = n(15137), i = n(15735), o = n(85200), a = n(22511);

        function s(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function l(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? s(Object(n), !0).forEach((function (e) {
                    c(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        function c(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        var u = function (t, e) {
            return t / e >= 1.6
        };

        function d(t, e) {
            if (this._downscaleRatio = e ? 2 : 1, !(0, o.isArray)(t)) throw new Error("Picture: \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043d\u0435 \u043c\u0430\u0441\u0441\u0438\u0432");
            if (!t.length) throw new Error("Picture: \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043f\u0443\u0441\u0442\u043e\u0439 \u043c\u0430\u0441\u0441\u0438\u0432");
            this._images = (0, i.map)(t, this._createDownscaled, this)
        }

        d.prototype = {
            getFitting: function (t, e, n, i) {
                var o, s = this, c = (0, a.getDownlink)();
                return n = n || 0, !i && -1 !== c && c < .4 && (i = 1.5), (0, r.forEach)(this._images, (function (r) {
                    var a = l({}, r), c = t;
                    i && (a.width *= i, a.height *= i), a.width / a.height >= 1.6 && (c = t + t * n), a = s._downscale(a, c, e, t), o && !s._isFittingBetter(a, o) || (o = a)
                }), this), 2 === this._downscaleRatio && this._upscale(o, t, e, this._downscaleRatio), delete o.area, o
            }, getAll: function () {
                return this._images
            }, _createDownscaled: function (t) {
                var e = Number(t[1]), n = Number(t[2]),
                    r = (t[3] || {})["smart-center"] || {x: e / 2, y: n / 2, w: 0, h: 0};
                return {
                    src: t[0],
                    width: Math.floor(e / this._downscaleRatio),
                    height: Math.floor(n / this._downscaleRatio),
                    isWide: u(e, n),
                    smartCenter: {x: r.x / e, y: r.y / n, width: r.w / e, height: r.h / n}
                }
            }, _isFittingBetter: function (t, e) {
                return t.area.visible > e.area.visible || t.area.visible === e.area.visible && t.area.original < e.area.original
            }, _downscale: function (t, e, n, r) {
                t = l({area: {original: t.width * t.height}}, t), e = e || t.width, n = n || t.height;
                var i, o, a, s = (i = t, o = {
                    width: e,
                    height: n
                }, a = Math.min(o.width / i.width, o.height / i.height, 1), {
                    width: Math.round(i.width *= a),
                    height: Math.round(i.height *= a)
                });
                return (t = l(l({}, t), s)).area.visible = Math.min(r, t.width) * Math.min(n, t.height), t
            }, _upscale: function (t, e, n, r) {
                var i = Math.min(e / t.width, n / t.height, r);
                i > 1 && (t.width = Math.round(t.width * i), t.height = Math.round(t.height * i))
            }
        }, d.isWide = u
    }, 55984: (t, e, n) => {
        "use strict";
        n.d(e, {U: () => r});
        var r = function (t, e, n) {
            for (var r = new Array(t.length), i = 0; i < t.length; i++) r[i] = e.call(n, t[i], i, t);
            return r
        }
    }, 61554: (t, e, n) => {
        "use strict";
        n.r(e), n.d(e, {Latch: () => l});
        var r = n(82170), i = n(32302), o = n(30595), a = n(17835), s = n(94356), l = function () {
            function t(t) {
                var e = this;
                Object.defineProperty(this, "dispatch", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: (0, s.I)((function (t) {
                        e.value = t, e._isDispatched = !0, (0, i.p)(e.callbacks, t), e.callbacks.length = 0
                    }))
                }), Object.defineProperty(this, "callbacks", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }), Object.defineProperty(this, "_isDispatched", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), Object.defineProperty(this, "value", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), (0, o.m)(t) && this.callbacks.push(t)
            }

            var e = t.prototype;
            return e.subscribe = function (t) {
                var e = this;
                return this._isDispatched ? (t(this.value), a.Z) : (this.callbacks.push(t), function () {
                    e.callbacks = (0, r.h)(e.callbacks, (function (e) {
                        return e !== t
                    }))
                })
            }, e.getDispatched = function () {
                return this._isDispatched
            }, e.getValue = function () {
                return this.value
            }, e.wait = function () {
                var t = this;
                return new Promise((function (e) {
                    t.subscribe(e)
                }))
            }, t
        }()
    }, 40350: (t, e, n) => {
        "use strict";
        n.r(e), n.d(e, {UNLOAD_EVENTS: () => l, onUnload: () => c});
        var r = n(65241), i = n(55984), o = n(32302), a = n(17835), s = n(94356), l = ["pagehide", "unload"];

        function c(t, e) {
            void 0 === e && (e = window);
            var n = a.Z, c = function (e) {
                "pagehide" === e.type && e.persisted || (t(e), n())
            }, u = (0, i.U)(l, (function (t) {
                return (0, r.addElementEventListener)({element: e, eventName: t, listener: c})
            }));
            return n = (0, s.I)((function () {
                (0, o.p)(u)
            }))
        }
    }, 37871: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.clientCodeLoader = void 0;
        var r = n(17811);
        e.clientCodeLoader = function () {
            return new Promise((function (t, e) {
                r((function (e) {
                    t(e.VideoClientCode)
                }), (function (t) {
                    e(t)
                }))
            }))
        }
    }, 25001: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.createVideoInTgaAbortLatch = void 0;
        var r = n(61554), i = n(40350), o = n(28871);
        e.createVideoInTgaAbortLatch = function (t) {
            var e = t.logEventName, n = t.getIsStarted, a = new r.Latch;
            return (0, i.onUnload)((function () {
                a.dispatch({reason: "unload", details: {}})
            }), window), a.subscribe((function (t) {
                var r = t.reason, i = t.details;
                o.logger.logGogolEvent({name: e, dailySensors: {reason: r, isStarted: n()}, data: {details: i}})
            })), a
        }
    }, 22374: (t, e, n) => {
        "use strict";
        var r, i = (r = function (t, e) {
            return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }, r(t, e)
        }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function n() {
                this.constructor = t
            }

            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }), o = function () {
            return o = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }, o.apply(this, arguments)
        };
        e.q = void 0;
        var a = n(50880), s = n(64953), l = n(10391), c = n(13972), u = n(42723), d = n(86664), p = n(78291),
            f = n(45497), h = n(49874), g = n(74472), v = n(66553), m = n(85914), _ = n(74192), b = n(79562),
            y = n(46466), I = n(65234), A = n(64809), C = n(9248), S = n(88772), E = function (t) {
                function e(e) {
                    var n = t.call(this, e) || this, r = e.inpageProps, i = r.uniqueId;
                    return (0, m.setMark)(i, m.RenderMarks.DepsLoadStart), n.loadClientCodeVideoInCombo().then((function (t) {
                        (0, m.setMark)(i, m.RenderMarks.ReadyForRendering);
                        var e = t && t.VideoInComboController;
                        e && n.protectAsyncCallback((function () {
                            n.render(e)
                        }))()
                    }))["catch"]((function (t) {
                        var e = r.settings, n = r.dataSource, o = e.rewarded, a = n.isFullscreen(),
                            s = e.videoInComboDesign, l = "zen" === s;
                        h.logger.error(t, t.name, {
                            isVideoInComboZen: l,
                            isVideoInComboFullscreen: a,
                            isRewarded: o,
                            isFullscreen: a,
                            videoInComboDesign: s
                        });
                        var c = (0, g.getPlacement)(i);
                        null == c || c.callbacks.triggerError("VIDEO_IN_COMBO_CLIENT_CODE_INIT_ERROR", "[".concat(t.name, "][").concat(t.message, "][").concat(t.stack, "]"))
                    })), n
                }

                return i(e, t), e.prototype.render = function (t) {
                    var e, n, r = this, i = this.props.inpageProps,
                        a = null === (n = (e = i.dataSource).isFullscreen) || void 0 === n ? void 0 : n.call(e),
                        s = new t(o(o({}, i), {
                            onAdInit: function (t) {
                                return r.onAdInit(t)
                            }, onRender: function () {
                                return a && r.onRender()
                            }
                        }));
                    this.doOnDestroy((function () {
                        return s.destroy()
                    })), a || this.onRender()
                }, e.prototype.onRender = function () {
                    var t = this.props.inpageProps.onRender;
                    null == t || t()
                }, e.prototype.onAdInit = function (t) {
                    var e = this.props, n = e.onAdInit, r = e.inpageProps.uniqueId;
                    (0, m.setMark)(r, m.RenderMarks.ContentfulRender), (0, _.renderingIsCompleted)(r), null == n || n(t), (0, b.asyncCollectMarks)(r, this.getRumAdditionals(t))
                }, e.prototype.getRumAdditionals = function (t) {
                    var e = this.props.inpageProps, n = e.dataSource, r = e.uniqueId, i = e.renderToNode, o = e.productType,
                        a = (0, g.getPlacement)(r), s = (null == a ? void 0 : a.additionals) || {}, l = s.posInQueue,
                        c = s.slotIndex, u = n.getBugData().hitLogId, d = t || i;
                    return {
                        type: "inpage",
                        format: o,
                        pageId: n.getPageId(),
                        isDocumentHidden: (0, y.isHidden)(),
                        isRefreshed: n.isRefreshed(),
                        containsData: n.isContainsData(),
                        isInViewport: (0, I.isInViewport)(d, 0),
                        slotIndex: c,
                        posInQueue: l,
                        inApp: n.isApp(),
                        isSsp: (0, A.checkBundleIsSSP)(),
                        uniqId: r,
                        hitLogId: u,
                        detailedDeviceType: n.getDetailedDeviceType()
                    }
                }, e.prototype.getClientCodeVariables = function () {
                    var t = this.props.inpageProps, e = t.dataSource, n = t.settings, r = n.videoInComboDesign,
                        i = e.isFullscreen(),
                        o = Boolean(n.floorAd) && "exp" === (0, S.useExperimentFlag)("VIDEO_IN_COMBO_FLOOR_AD_ENABLE"),
                        s = n.allowDesktopFullscreen, l = i && Boolean(s) && !a.isMobile, c = i && !l, u = "zen" === r,
                        d = "yaVideo" === r;
                    return {
                        isFloorAd: o,
                        isPremiumVideoInCombo: r === C.MORDA_TZAR_SETTINGS_NAME,
                        isYaVideoInCombo: d,
                        isZenVideoInCombo: u,
                        isDesktopFullscreen: l,
                        isMobileFullscreen: c
                    }
                }, e.prototype.loadClientCodeVideoInCombo = function () {
                    var t = this.getClientCodeVariables(), e = t.isFloorAd, n = t.isDesktopFullscreen,
                        r = t.isMobileFullscreen, i = t.isZenVideoInCombo, o = t.isYaVideoInCombo,
                        a = t.isPremiumVideoInCombo;
                    switch (!0) {
                        case e:
                            return (0, p.loadClientCodeDesignFloorAd)();
                        case n:
                            return (0, s.loadClientCodeDesignFullscreen)();
                        case r:
                            return (0, l.loadClientCodeDesignFullscreen)();
                        case i:
                            return (0, c.loadClientCodeDesignZen)();
                        case o:
                            return (0, u.loadClientCodeDesignYaVideo)();
                        case a:
                            return (0, f.loadClientCodeDesktop)();
                        default:
                            return (0, d.loadClientCodeDesignDefault)()
                    }
                }, e
            }(v.Destroyable);
        e.q = E
    }, 86664: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.loadClientCodeDesignDefault = void 0;
        e.loadClientCodeDesignDefault = function () {
            return new Promise((function (t, e) {
                n(1857)((function (e) {
                    t(e)
                }), (function (t) {
                    return e(t)
                }))
            }))
        }
    }, 78291: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.loadClientCodeDesignFloorAd = void 0;
        e.loadClientCodeDesignFloorAd = function () {
            return new Promise((function (t, e) {
                n(11805)((function (e) {
                    t(e)
                }), (function (t) {
                    return e(t)
                }))
            }))
        }
    }, 64953: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.loadClientCodeDesignFullscreen = void 0;
        e.loadClientCodeDesignFullscreen = function () {
            return new Promise((function (t, e) {
                n(98735)((function (e) {
                    t(e)
                }), (function (t) {
                    return e(t)
                }))
            }))
        }
    }, 10391: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.loadClientCodeDesignFullscreen = void 0;
        e.loadClientCodeDesignFullscreen = function () {
            return new Promise((function (t, e) {
                n(90505)((function (e) {
                    t(e)
                }), (function (t) {
                    return e(t)
                }))
            }))
        }
    }, 9248: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.MORDA_TZAR_SETTINGS_NAME = void 0, e.MORDA_TZAR_SETTINGS_NAME = "morda-tzar"
    }, 45497: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.loadClientCodeDesktop = void 0;
        e.loadClientCodeDesktop = function () {
            return new Promise((function (t, e) {
                n(72144)((function (e) {
                    t(e)
                }), (function (t) {
                    return e(t)
                }))
            }))
        }
    }, 42723: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.loadClientCodeDesignYaVideo = void 0;
        e.loadClientCodeDesignYaVideo = function () {
            return new Promise((function (t, e) {
                n(62121)((function (e) {
                    t(e)
                }), (function (t) {
                    return e(t)
                }))
            }))
        }
    }, 13972: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.loadClientCodeDesignZen = void 0;
        e.loadClientCodeDesignZen = function () {
            return new Promise((function (t, e) {
                n(88155)((function (e) {
                    t(e)
                }), (function (t) {
                    return e(t)
                }))
            }))
        }
    }, 22184: (t, e, n) => {
        "use strict";
        var r = function () {
            return r = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }, r.apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {value: !0}), e.showBannerShopping = void 0;
        var i = n(17347), o = n(49874), a = n(65648);
        e.showBannerShopping = function (t) {
            return new Promise((function (t, e) {
                n(14705)()((function (e) {
                    return t(e.render)
                }), (function (t) {
                    o.logger.error(t, "BannerShopping bundle loading error"), e(t)
                }))
            })).then((function (e) {
                var n, o = t.getDataSource, s = (0, i.identify)({prefix: "pcode_bannershopping"}),
                    l = document.createElement("div");
                document.body.appendChild(l);
                var c = function t() {
                    var e;
                    l.remove(), (0, a.clearAllBodyScrollLocks)(), window.removeEventListener("popstate", t), (null === (e = window.history.state) || void 0 === e ? void 0 : e[s]) && window.history.back()
                };
                return window.history.pushState(r(r({}, window.history.state), ((n = {})[s] = "opened", n)), "", ""), window.addEventListener("popstate", c), e({
                    getDataSource: o,
                    onDismiss: c
                }, l), function () {
                    return c()
                }
            }))
        }
    }, 45517: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.destroyConstructorClientCode = e.initConstructorClientCode = void 0;
        var r = n(15137), i = n(41110), o = n(88772), a = n(39698), s = n(65421), l = n(87650), c = n(28871),
            u = n(38310), d = n(61788), p = n(98064), f = n(4549), h = n(49569), g = n(52017), v = n(37871),
            m = n(10901), _ = n(15754), b = n(1888), y = n(86504), I = n(41596), A = n(25021), C = n(25001),
            S = n(12542), E = n(64809), O = {};
        e.initConstructorClientCode = function (t, e, n, r, y) {
            var T = ((0, s.getElementsByData)("name", "adaptiveConstructorAd", t) || [])[0];
            if (T) {
                (0, d.initImageGalleryClientCode)(t, T.id, n), (0, I.metricaGoalClickListener)(t), r && ((0, u.initBannerShoppingButtonClientCode)(t, T.id, {getDataSource: r}), (0, g.initBackpackLogger)(t, r(), 5)), (0, h.initAdaptiveImageClientCode)(t, T.id, {
                    enableAnimation: !1,
                    lazyLoadContainer: y.carousel ? (0, l.findParent)(t, (function (t) {
                        return "carousel-track" === t.dataset.name
                    })) : void 0,
                    lazyLoadMargin: "200%"
                });
                var R = T.id;
                O[R] = O[R] || [];
                var w = e && (e.vastBase64 || e.vast);
                if (c.logger.logGogolEvent({
                    name: "SdClientCodeInit",
                    dailySensors: {hasVideo: Boolean(w && r), hasVideoParams: Boolean(w), hasDataSource: Boolean(r)},
                    probability: .001
                }), w && r) {
                    var k = !1, P = (0, C.createVideoInTgaAbortLatch)({
                        getIsStarted: function () {
                            return k
                        }, logEventName: "VideoInTgaSdDestroy"
                    }), N = (0, S.getElementByData)("asset-click", "image", t);
                    P.subscribe((function () {
                        N ? N.style.setProperty("display", "block") : c.logger.logGogolEvent({name: "SdNoImageLink"})
                    }));
                    var L = (0, A.isPositiveFiniteNumber)(r().getAuxQueryParams().subDesignId);
                    (0, v.clientCodeLoader)().then((function (n) {
                        try {
                            var i = new n({
                                container: t,
                                dataSource: r(),
                                videoParams: e,
                                format: "constructor",
                                isAA: L,
                                pageId: r().getPageId(),
                                impId: r().getImpId(),
                                videoInTgaAbortLatch: P,
                                onAdPodStart: function () {
                                    k = !0
                                }
                            });
                            O[R].push(i)
                        } catch (t) {
                            throw c.logger.logGogolEvent({
                                name: "INIT_SD_CLIENT_CODE_IN_CONSTRUCTOR_ERROR",
                                data: {message: t.message, stack: t.stack},
                                probability: 1
                            }), t
                        }
                    }))["catch"]((function (t) {
                        P.dispatch({reason: "cannotLoadModule", details: {message: t.message, stack: t.stack}})
                    }))
                }
                if (O[R].push(new f.ScrollerClientCode({
                    container: t,
                    salt: n
                })), O[R].push(new m.TooltipClientCode({container: t})), O[R].push(new _.HandlerMouseActionsClientCode({container: t})), "exp" === (0, o.useExperimentFlag)("USE_LEAD_FORM") && !(0, E.checkBundleIsMobilSdk)()) {
                    var M = null == r ? void 0 : r();
                    M && O[R].push(new b.LeadFormClientCode({container: t, dataSource: M}))
                }
                for (var D = function (t) {
                    t.id = t.id || (0, p.generateId)(), (0, a.addObserver)(t.id, (function (e) {
                        var n = t.dataset.animationClass;
                        e.inScreen && n && (t.classList.add(n), (0, a.removeObserver)(t.id, T))
                    }), T)
                }, B = 0, x = (0, s.getElementsByData)("has-animation", "true", t) || []; B < x.length; B++) {
                    D(V = x[B])
                }
                var F = (0, s.getElementsByData)("unclickable", "", T);
                if (F && F.length) for (var j = 0, U = F; j < U.length; j++) {
                    var V = U[j];
                    (0, i.on)(V, "click", (function (t) {
                        return t.preventDefault()
                    }), void 0, {capture: !0})
                }
            }
        }, e.destroyConstructorClientCode = function (t) {
            var e = ((0, s.getElementsByData)("name", "adaptiveConstructorAd", t) || [])[0];
            if (e) {
                (0, h.destroyAdaptiveImageClientCode)(t, e.id, {
                    lazyLoadContainer: (0, l.findParent)(t, (function (t) {
                        return "carousel-track" === t.dataset.name
                    })) || void 0
                }), (0, d.destroyImageGalleryClientCode)(t, e.id), (0, y.destroyAnimatedImageGalleryClientCode)(e.id), (0, u.destroyBannerShoppingButtonClientCode)(t, e.id);
                for (var n = 0, i = (0, s.getElementsByData)("has-animation", "true", t) || []; n < i.length; n++) {
                    var o = i[n];
                    (0, a.removeObserver)(o.id, e)
                }
                var c = e.id;
                (0, r.forEach)(O[c], (function (t) {
                    return t.destroy()
                })), delete O[c]
            }
        }
    }, 14918: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.ANIMATION_PLAY_STATE_PAUSED = e.ANIMATION_PLAY_STATE_RUNNING = e.ANIMATION_CONTAINER_NAME = e.BLOCK_NAME_DATA_ATTR = void 0, e.BLOCK_NAME_DATA_ATTR = "block-name", e.ANIMATION_CONTAINER_NAME = "animationContainer", e.ANIMATION_PLAY_STATE_RUNNING = "running", e.ANIMATION_PLAY_STATE_PAUSED = "paused"
    }, 15754: (t, e, n) => {
        "use strict";
        var r, i = (r = function (t, e) {
            return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }, r(t, e)
        }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function n() {
                this.constructor = t
            }

            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", {value: !0}), e.HandlerMouseActionsClientCode = void 0;
        var o, a = n(66553), s = n(65421), l = n(12542), c = n(14918), u = n(58787);
        !function (t) {
            t["ENTER"] = "ENTER", t["LEAVE"] = "LEAVE"
        }(o || (o = {}));
        var d = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return i(e, t), e.prototype.init = function () {
                this.animationContainerBlocks = this.getAnimationContainerBlocks(this.props.container), this.billboardLayoutBgBlock = this.getBillboardLayoutBgBlock(this.props.container), this.addEventListener(this.props.container, "mouseenter", this.handleMouseenterAction)
            }, e.prototype.handleMouseenterAction = function (t) {
                t.preventDefault(), t.stopPropagation(), this.toggleAnimationPlayState(o.ENTER), this.toggleBillboardLayoutBgColor(o.ENTER), this.addEventListener(this.props.container, "mouseleave", this.handleMouseleaveAction)
            }, e.prototype.handleMouseleaveAction = function (t) {
                t.preventDefault(), t.stopPropagation(), this.toggleAnimationPlayState(o.LEAVE), this.toggleBillboardLayoutBgColor(o.LEAVE), this.props.container.removeEventListener("mouseleave", this.handleMouseleaveAction)
            }, e.prototype.getAnimationContainerBlocks = function (t) {
                return (0, s.getElementsByData)(c.BLOCK_NAME_DATA_ATTR, c.ANIMATION_CONTAINER_NAME, t)
            }, e.prototype.getBillboardLayoutBgBlock = function (t) {
                return (0, l.getElementByData)("name", u.BILLBOARD_BG_BLOCK_NAME, t)
            }, e.prototype.toggleBillboardLayoutBgColor = function (t) {
                if (this.billboardLayoutBgBlock) {
                    var e = this.billboardLayoutBgBlock.dataset.color,
                        n = this.billboardLayoutBgBlock.dataset.hoveredColor;
                    e && n && (this.billboardLayoutBgBlock.style.color = t === o.ENTER ? n : e)
                }
            }, e.prototype.toggleAnimationPlayState = function (t) {
                var e;
                if (null === (e = this.animationContainerBlocks) || void 0 === e ? void 0 : e.length) for (var n = t === o.ENTER ? c.ANIMATION_PLAY_STATE_PAUSED : c.ANIMATION_PLAY_STATE_RUNNING, r = 0; r < this.animationContainerBlocks.length; r++) this.setStyleAnimationPlayState(this.animationContainerBlocks[r], n)
            }, e.prototype.setStyleAnimationPlayState = function (t, e) {
                if (t) for (var n = t.childNodes || [], r = 0; r < n.length; r++) n[r].style.animationPlayState = e
            }, e
        }(a.Destroyable);
        e.HandlerMouseActionsClientCode = d
    }, 61750: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.DEFAULT_BANNER_OPTIONS = e.INDENT_FROM_KEBAB = e.FULLSCREEN_BLOCK_HORIZONTAL_INDENT = e.DEFAULT_BLOCK_HORIZONTAL_INDENT = e.HORIZONTAL_BANNER_DEFAULT_IMAGE_WIDTH_PORTION = e.HORIZONTAL_BANNER_IMAGE_WIDTH_PORTION_LIMITS = e.BORDER_WIDTH = e.ADV_SPACING = e.DEFAULT_LIMIT = e.REDESIGN_FLOOR_AD_MAX_HEIGHT = e.DEFAULT_VERTICAL_BANNER_RATIO = e.DEFAULT_HORIZONTAL_BANNER_RATIO = e.INTERSCROLLER_SIZE_LIMITS_LIST = e.BILLBOARD_SIZE_LIMITS = e.VERTICAL_SIZE_LIMITS = e.HORIZONTAL_SIZE_LIMITS = e.POSTER_SIZE_LIMITS = e.ADAPTIVE_SIZE_LIMITS = void 0, e.ADAPTIVE_SIZE_LIMITS = {
            width: {
                min: 150,
                max: 1 / 0
            }, height: {min: 50, max: 1 / 0}
        }, e.POSTER_SIZE_LIMITS = {
            width: {min: 155, max: 1 / 0},
            height: {min: 190, max: 1 / 0}
        }, e.HORIZONTAL_SIZE_LIMITS = {
            width: {min: 200, max: 1 / 0},
            height: {min: 50, max: 1 / 0}
        }, e.VERTICAL_SIZE_LIMITS = {
            width: {min: 150, max: 1 / 0},
            height: {min: 200, max: 1 / 0}
        }, e.BILLBOARD_SIZE_LIMITS = {
            width: {min: 700, max: 1 / 0},
            height: {min: 180, max: 300}
        }, e.INTERSCROLLER_SIZE_LIMITS_LIST = [e.POSTER_SIZE_LIMITS, e.HORIZONTAL_SIZE_LIMITS, e.VERTICAL_SIZE_LIMITS], e.DEFAULT_HORIZONTAL_BANNER_RATIO = 1.7, e.DEFAULT_VERTICAL_BANNER_RATIO = .5, e.REDESIGN_FLOOR_AD_MAX_HEIGHT = 160, e.DEFAULT_LIMIT = 1, e.ADV_SPACING = 5, e.BORDER_WIDTH = 1, e.HORIZONTAL_BANNER_IMAGE_WIDTH_PORTION_LIMITS = {
            min: .1,
            max: .55
        }, e.HORIZONTAL_BANNER_DEFAULT_IMAGE_WIDTH_PORTION = .5, e.DEFAULT_BLOCK_HORIZONTAL_INDENT = 10, e.FULLSCREEN_BLOCK_HORIZONTAL_INDENT = 20, e.INDENT_FROM_KEBAB = 28, e.DEFAULT_BANNER_OPTIONS = {
            wrapperOptions: {paddingBottom: 10},
            props: {drawKebab: !1}
        }
    }, 58787: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.getBillboardCoerceBannerSize = e.getBannerIndents = e.isMiddleHeight = e.isSmallHeight = e.isExtraSmallHeight = e.CONTENT_LEFT_INDENT = e.ANIMATION_CONTAINER_DURATION = e.CONTENT_ANIMATION_STEP = e.CONTENT_ANIMATION_DURATION = e.IMAGE_ANIMATION_DURATION = e.DARK_THEME_OPACITY = e.LIGHT_THEME_OPACITY = e.BILLBOARD_BG_BLOCK_NAME = e.IS_STICKY_ADTUNE_HEIGHT = e.MIDDLE_HEIGHT = e.SMALL_HEIGHT = e.EXTRA_SMALL_HEIGHT = void 0;
        var r = n(88443), i = n(61750);
        e.EXTRA_SMALL_HEIGHT = 250, e.SMALL_HEIGHT = 300, e.MIDDLE_HEIGHT = 360, e.IS_STICKY_ADTUNE_HEIGHT = 230, e.BILLBOARD_BG_BLOCK_NAME = "billboardBackground", e.LIGHT_THEME_OPACITY = .5, e.DARK_THEME_OPACITY = .25, e.IMAGE_ANIMATION_DURATION = 1.28, e.CONTENT_ANIMATION_DURATION = .32, e.CONTENT_ANIMATION_STEP = .08, e.ANIMATION_CONTAINER_DURATION = 3.6, e.CONTENT_LEFT_INDENT = 24;
        e.isExtraSmallHeight = function (t) {
            return t < e.EXTRA_SMALL_HEIGHT
        };
        e.isSmallHeight = function (t) {
            return t < e.SMALL_HEIGHT
        };
        e.isMiddleHeight = function (t) {
            return t < e.MIDDLE_HEIGHT
        };
        e.getBannerIndents = function (t) {
            return (0, e.isMiddleHeight)(t) ? {vertical: 8} : {vertical: 12}
        };
        e.getBillboardCoerceBannerSize = function (t) {
            var e = (0, r.getLimitFunction)(i.BILLBOARD_SIZE_LIMITS.width.min, i.BILLBOARD_SIZE_LIMITS.width.max),
                n = (0, r.getLimitFunction)(i.BILLBOARD_SIZE_LIMITS.height.min, i.BILLBOARD_SIZE_LIMITS.height.max);
            return {width: e(t.width), height: n(t.height)}
        }
    }, 44614: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.LIGHT_COLOR_THRESHOLD = e.DEFAULT_MARGIN_TOP = e.FULLSCREEN_DARK_WARNING_COLOR = e.BUTTON_METRIKA_ATTR = void 0, e.BUTTON_METRIKA_ATTR = "button-metrika", e.FULLSCREEN_DARK_WARNING_COLOR = "rgba(255,255,255,0.25)", e.DEFAULT_MARGIN_TOP = 8, e.LIGHT_COLOR_THRESHOLD = 195
    }, 41596: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.metricaGoalClickListener = void 0;
        var r = n(41110), i = n(96483), o = n(44614), a = function (t) {
            var e = t.split(":"), n = e[0], r = e[1];
            return {counterID: Number(n), goalName: r}
        };
        e.metricaGoalClickListener = function (t, e, n) {
            void 0 === e && (e = o.BUTTON_METRIKA_ATTR), void 0 === n && (n = a);
            var s = "data-".concat(e), l = t.querySelector("[".concat(s, "]"));
            if (l) {
                var c = l.getAttribute(s);
                if (c) {
                    var u = n(c), d = u.goalName, p = u.counterID;
                    d && p && (0, r.on)(l, "click", (function () {
                        (0, i.requestCounter)({id: p}, (function (t) {
                            t.reachGoal(d)
                        }))
                    }))
                }
            }
        }
    }, 97553: (t, e, n) => {
        "use strict";
        var r = function () {
            return r = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }, r.apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {value: !0}), e.LeadFormLogger = void 0;
        var i = n(49874), o = function () {
            function t(t) {
                var e = t.blockId, n = t.iframeSrc;
                this.blockId = e, this.iframeSrc = n
            }

            return t.prototype.log = function (t, e, n) {
                i.logger.traceLog(r({
                    type: e,
                    blockId: this.blockId,
                    iframeSrc: this.iframeSrc,
                    errorMessage: t instanceof Error ? t.message : ""
                }, n), "LEAD_FORM_LOGS", 100)
            }, t.prototype.logLoadingBundleError = function (t) {
                this.log(t, "LOADING_BUNDLE_ERROR")
            }, t.prototype.logCanceledBy = function (t) {
                this.log(void 0, "CANCELED_BY_".concat(t))
            }, t.prototype.logLoadingBundleSuccess = function () {
                this.log(void 0, "LOADING_BUNDLE_SUCCESS")
            }, t.prototype.logShowingDialogError = function (t) {
                this.log(t, "SHOWING_DIALOG_ERROR")
            }, t.prototype.logLoadingIFrameError = function (t) {
                this.log(void 0, "LOADING_IFRAME_ERROR", t ? {iframeSrc: t} : void 0)
            }, t.prototype.logLoadingIFrameSuccess = function (t) {
                this.log(void 0, "LOADING_IFRAME_SUCCESS", t ? {iframeSrc: t} : void 0)
            }, t.prototype.logClickToAsset = function (t) {
                this.log(void 0, "CLICK_TO_ASSET", {assetName: t})
            }, t.prototype.logClickBeforeBundleLoading = function () {
                this.log(void 0, "CLICK_ASSET_BEFORE_BUNDLE_LOADING")
            }, t
        }();
        e.LeadFormLogger = o
    }, 374: (t, e, n) => {
        "use strict";
        var r = function () {
            return r = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }, r.apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {value: !0}), e.loadLeadFormRenderer = void 0;
        e.loadLeadFormRenderer = function () {
            return new Promise((function (t, e) {
                n(8532)()((function (e) {
                    return t((n = e.render, function (t) {
                        var e = t.logger, i = t.domain, o = t.src, a = t.green_url_text_prefix, s = t.iconUrl,
                            l = t.punyDomain, c = a ? {domain: a, url: "https://".concat(a)} : {domain: i, url: o},
                            u = document.createElement("div");
                        document.body.appendChild(u), n(r(r({}, c), {
                            punyDomain: l,
                            iconUrl: s,
                            src: o,
                            onDismiss: function () {
                                u.remove()
                            },
                            onIFrameLoadingError: function () {
                                return e.logLoadingIFrameError(o)
                            },
                            onIFrameLoadingSuccess: function () {
                                return e.logLoadingIFrameSuccess(o)
                            }
                        }), u)
                    }));
                    var n
                }), (function (t) {
                    e(t)
                }))
            }))
        }
    }, 96403: (t, e) => {
        "use strict";
        e.Uj = e.J4 = e.Y0 = void 0;
        var n = ["vertical", "newVertical", "adaptive", "modernAdaptive", "horizontal", "horizontal0318", "grid", "motion", "zen"];

        function r(t) {
            return /\d+x\d+/.test(t)
        }

        function i(t) {
            return "adaptive0418" === t || "adaptiveConstructor" === t || "horizontalSD" === t || "fullscreen" === t || r(t)
        }

        function o(t) {
            return "smart_tile" === t || "smart_mosaic" === t || "shoppable" === t || "fullscreen_grid" === t
        }

        e.Y0 = function (t) {
            return "adaptive" === t || "modernAdaptive" === t || "horizontal" === t || "horizontal0318" === t || "grid" === t
        }, e.J4 = i;
        e.Uj = function (t) {
            return n.includes(t)
        }
    }, 54559: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.loadClosableAdController = void 0;
        var r = n(50238);
        e.loadClosableAdController = (0, r.getModuleLoader)("ClosableAd", (function () {
            return n(73718)
        }), (function (t) {
            return function (e) {
                var n = e.closableAdController;
                return t(n)
            }
        }))
    }, 31514: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.loadInterscrollerController = void 0;
        var r = n(50238);
        e.loadInterscrollerController = (0, r.getModuleLoader)("InterscrollerController", (function () {
            return n(77299)
        }), (function (t) {
            return function (e) {
                var n = e.interscrollerController;
                return t(n)
            }
        }))
    }, 60044: (t, e, n) => {
        "use strict";
        var r;
        Object.defineProperty(e, "__esModule", {value: !0}), e.useAllAds = e.useAds = e.updateSsrName = e.useLanguage = e.usePageLanguage = e.BannerLanguageProvider = e.usePcodeSettings = e.useBkSizes = e.useSettings = e.useCommon = e.AdvProvider = e.useAdvConfig = void 0;
        var i = n(6400), o = n(30396), a = n(3164), s = n(55232), l = n(45550), c = n(86058), u = n(88772);
        e.useAdvConfig = (r = (0, s.createCtx)())[0], e.AdvProvider = r[1];
        e.useCommon = function () {
            var t = (0, e.useAdvConfig)();
            return (0, a.getCommon)(t)
        };
        e.useSettings = function () {
            var t = (0, e.useAdvConfig)();
            return (0, a.getSettings)(t)
        };
        e.useBkSizes = function () {
            return (0, e.useAdvConfig)().sizes
        };
        e.usePcodeSettings = function () {
            return (0, e.useSettings)().pcodeSettings
        };
        var d = (0, i.createContext)(void 0);
        e.BannerLanguageProvider = d.Provider;
        e.usePageLanguage = function () {
            var t, n, r;
            try {
                var i = (0, e.useAdvConfig)();
                return (null === (t = i.common) || void 0 === t ? void 0 : t.pageLang) || (0, c.getDefaultLanguage)({isSSP: (r = null === (n = i.common) || void 0 === n ? void 0 : n.sspId, Boolean(r && 1e3 !== r))})
            } catch (t) {
                return "1"
            }
        };
        e.useLanguage = function () {
            var t = (0, e.usePageLanguage)();
            return "exp" === (0, u.useExperimentFlag)("USE_BANNER_LANGUAGE") && (0, o.useContext)(d) || t
        };
        e.updateSsrName = function (t) {
            var n;
            (0, e.useSettings)().ssrName = t, null === (n = l.EventLogger.getInstance()) || void 0 === n || n.addParams({ssrName: t})
        };
        e.useAds = function () {
            var t, n = (0, e.useAdvConfig)(), r = (0, e.useSettings)(), i = (0, a.getLimit)(r);
            return ((null === (t = n.direct) || void 0 === t ? void 0 : t.ads) || []).slice(0, i)
        };
        e.useAllAds = function () {
            var t;
            return (null === (t = (0, e.useAdvConfig)().direct) || void 0 === t ? void 0 : t.ads) || []
        }
    }, 46093: (t, e, n) => {
        "use strict";
        var r;
        Object.defineProperty(e, "__esModule", {value: !0}), e.LayoutProvider = e.useLayoutConfig = void 0;
        var i = n(55232);
        e.useLayoutConfig = (r = (0, i.createCtx)())[0], e.LayoutProvider = r[1]
    }, 42155: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.VNodeReplace = void 0;
        var r = n(6400), i = n(30396);

        function o() {
            return function (t) {
                "div" === t.type && (t.type = "yatag")
            }
        }

        e.VNodeReplace = function (t) {
            var e = t.children, n = t.replace, a = void 0 === n ? o : n, s = r.options.vnode;
            return r.options.vnode = a(s), (0, i.useLayoutEffect)((function () {
                r.options.vnode = s
            }), []), (0, r.h)(r.Fragment, null, e)
        }
    }, 15462: (t, e, n) => {
        "use strict";
        var r, i = (r = function (t, e) {
            return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }, r(t, e)
        }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function n() {
                this.constructor = t
            }

            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }), o = function () {
            return o = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }, o.apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {value: !0}), e.destroyCreativeConstructorClientCode = e.initCreativeConstructorClientCode = e.CreativeConstructorController = void 0;
        var a = n(45517), s = n(98064), l = function (t) {
            function e(e) {
                var n = t.call(this, e) || this, r = e.getDataSource();
                return (0, a.initConstructorClientCode)(e.container, void 0, r.getSalt(), void 0, {carousel: !1}), n
            }

            return i(e, t), e.prototype.destroy = function () {
                t.prototype.destroy.call(this), (0, a.destroyConstructorClientCode)(this.props.container)
            }, e
        }(n(9331).MediaCreativeController);
        e.CreativeConstructorController = l;
        var c = {};
        e.initCreativeConstructorClientCode = function (t, e) {
            var n = (0, s.generateId)();
            t.setAttribute("id", n), c[n] = new l(o({container: t}, e))
        }, e.destroyCreativeConstructorClientCode = function (t) {
            var e, n = t.getAttribute("id");
            n && (null === (e = c[n]) || void 0 === e || e.destroy(), c[n] = void 0)
        }
    }, 9331: (t, e, n) => {
        "use strict";
        var r, i = (r = function (t, e) {
            return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }, r(t, e)
        }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function n() {
                this.constructor = t
            }

            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", {value: !0}), e.MediaCreativeController = void 0;
        var o = n(4777), a = n(66553), s = n(15137), l = n(66779), c = n(28377), u = n(58431), d = n(92713);

        function p(t, e) {
            var n = e.getSettings().clickMacro, r = void 0 === n ? "" : n;
            return (0, c.addParamToUrl)(function (t, e) {
                return e ? "".concat(e).concat(encodeURIComponent(t)) : t
            }(t, r), "pcode-active-testids", e.generateActiveTestIds())
        }

        var f = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return i(e, t), e.prototype.init = function () {
                var e = this;
                t.prototype.init.call(this), this.isVisibilityConfirmed = !1;
                var n = this.props, r = n.container, i = n.visibilitySignal, a = (0, n.getDataSource)();
                (0, d.preventClicks)(r, 350);
                var c, f = (0, l.listToArray)(r.querySelectorAll("a"));
                (0, s.forEach)(f, (function (t) {
                    t.href = p(t.href, a)
                })), this.addEventListener(r, "click", (function (t) {
                    if (!t.target) return !1;
                    var e = (0, u.closestElementWithAttr)(t.target, "href");
                    return !!e && ((0, o.open)(t, e.href), !1)
                }), !0), i.subscribeValueCondition((function (t) {
                    return !t
                }), (function () {
                    return clearTimeout(c)
                })), i.subscribeValueCondition((function (t) {
                    return t
                }), (function () {
                    e.isVisibilityConfirmed || (c = setTimeout((function () {
                        e.isVisibilityConfirmed = !0, e.onBannerVisible()
                    }), 2e3))
                }))
            }, e.prototype.onBannerVisible = function () {
            }, e
        }(a.Destroyable);
        e.MediaCreativeController = f
    }, 46601: (t, e, n) => {
        "use strict";
        var r, i = (r = function (t, e) {
            return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }, r(t, e)
        }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function n() {
                this.constructor = t
            }

            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }), o = function () {
            return o = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }, o.apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {value: !0}), e.destroyMediaImageClientCode = e.initMediaImageClientCode = e.MediaImageController = void 0;
        var a = n(98064), s = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return i(e, t), e
        }(n(9331).MediaCreativeController);
        e.MediaImageController = s;
        var l = {};
        e.initMediaImageClientCode = function (t, e) {
            var n = (0, a.generateId)();
            t.setAttribute("id", n), l[n] = new s(o({container: t}, e))
        }, e.destroyMediaImageClientCode = function (t) {
            var e, n = t.getAttribute("id");
            n && (null === (e = l[n]) || void 0 === e || e.destroy(), l[n] = void 0)
        }
    }, 20775: (t, e, n) => {
        "use strict";
        var r, i = (r = function (t, e) {
            return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }, r(t, e)
        }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function n() {
                this.constructor = t
            }

            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }), o = function () {
            return o = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }, o.apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {value: !0}), e.destroySmartMosaicClientCode = e.initSmartMosaicClientCode = e.SmartMosaicController = void 0;
        var a = n(15735), s = n(98370), l = n(15137), c = n(30913), u = n(28377), d = n(64029), p = n(65421),
            f = n(12542), h = n(98064), g = n(59406), v = function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }

                return i(e, t), e.prototype.init = function () {
                    var e = this;
                    t.prototype.init.call(this);
                    var n = this.props.container;
                    this.parentElement = (0, f.getElementByData)("parent-count", void 0, n), this.offerElements = (0, p.getElementsByData)("name", "offer", n) || [], this.indicatorElements = (0, p.getElementsByData)("name", "indicator", n) || [], this.activeIndex = (0, c.findIndex)(this.offerElements, (function (t) {
                        return t.hasAttribute("data-active")
                    })), this.parentElement && 0 !== this.offerElements.length && 0 !== this.indicatorElements.length && (this.addResource("bannerLayoutController", new g.MediaSmartLayoutController({container: n})), (0, l.forEach)(this.indicatorElements, (function (t, n) {
                        n === e.activeIndex && t.setAttribute("data-active", ""), e.addEventListener(t, d.isTouchDevice ? "click" : "mouseenter", (function (t) {
                            return e.setActiveOffer(n), t.preventDefault(), !1
                        }))
                    })))
                }, e.prototype.onBannerVisible = function () {
                    var e;
                    t.prototype.onBannerVisible.call(this);
                    var n = this.props.getDataSource(),
                        r = null === (e = this.parentElement) || void 0 === e ? void 0 : e.dataset.parentCount,
                        i = (0, s.unique)((0, a.map)(this.offerElements || [], (function (t) {
                            return t.dataset.count
                        })));
                    r && n.sendVisibilityConfirmation((0, u.addParamToUrl)(r, "pcode-active-testids", n.generateActiveTestIds())), (0, l.forEach)(i, (function (t) {
                        t && n.sendVisibilityConfirmation((0, u.addParamToUrl)(t, "pcode-active-testids", n.generateActiveTestIds()))
                    }))
                }, e.prototype.setActiveOffer = function (t) {
                    var e, n, r, i;
                    if (this.activeIndex !== t) {
                        var o = this.activeIndex;
                        null === (e = this.indicatorElements[o]) || void 0 === e || e.removeAttribute("data-active"), null === (n = this.indicatorElements[t]) || void 0 === n || n.setAttribute("data-active", ""), null === (r = this.offerElements[o]) || void 0 === r || r.removeAttribute("data-active"), null === (i = this.offerElements[t]) || void 0 === i || i.setAttribute("data-active", ""), this.activeIndex = t
                    }
                }, e
            }(n(9331).MediaCreativeController);
        e.SmartMosaicController = v;
        var m = {};
        e.initSmartMosaicClientCode = function (t, e) {
            var n = (0, h.generateId)();
            t.setAttribute("id", n), m[n] = new v(o({container: t}, e))
        }, e.destroySmartMosaicClientCode = function (t) {
            var e, n = t.getAttribute("id");
            n && (null === (e = m[n]) || void 0 === e || e.destroy(), m[n] = void 0)
        }
    }, 13317: (t, e, n) => {
        "use strict";
        var r, i = (r = function (t, e) {
            return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }, r(t, e)
        }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function n() {
                this.constructor = t
            }

            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }), o = function () {
            return o = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }, o.apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {value: !0}), e.destroySmartTileClientCode = e.initSmartTileClientCode = e.SmartTileController = void 0;
        var a = n(28377), s = n(15137), l = n(65421), c = n(12542), u = n(98064), d = n(18475), p = n(59406),
            f = function (t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }

                return i(e, t), e.prototype.init = function () {
                    var e = this;
                    t.prototype.init.call(this);
                    var n = this.props.container;
                    if (this.parentElement = (0, c.getElementByData)("parent-count", void 0, n), this.pages = (0, l.getElementsByData)("name", "carousel-slide", n) || [], this.parentElement && 0 !== this.pages.length) {
                        this.addResource("bannerLayoutController", new p.MediaSmartLayoutController({container: n}));
                        var r = (0, c.getElementByData)("name", "offers-carousel", n);
                        if (r) {
                            var i = new d.SmartTileCarouselController({
                                container: r, onChangePage: function (t) {
                                    return e.reportVisibilityOfOffers(t)
                                }
                            });
                            this.addResource("offersCarouselController", i)
                        }
                    }
                }, e.prototype.onBannerVisible = function () {
                    var e;
                    t.prototype.onBannerVisible.call(this);
                    var n = this.props.getDataSource(),
                        r = null === (e = this.parentElement) || void 0 === e ? void 0 : e.dataset.parentCount,
                        i = this.getResource("offersCarouselController");
                    r && n.sendVisibilityConfirmation((0, a.addParamToUrl)(r, "pcode-active-testids", n.generateActiveTestIds())), i && this.reportVisibilityOfOffers(i.getCurrentIndex())
                }, e.prototype.reportVisibilityOfOffers = function (t) {
                    var e = this.pages[t], n = this.props.getDataSource();
                    if (e) {
                        var r = (0, l.getElementsByData)("name", "offer-tile", e) || [];
                        (0, s.forEach)(r, (function (t) {
                            if (t.dataset.hasOwnProperty("count")) {
                                var e = t.dataset.count;
                                e && n.sendVisibilityConfirmation((0, a.addParamToUrl)(e, "pcode-active-testids", n.generateActiveTestIds()))
                            }
                        }))
                    }
                }, e
            }(n(9331).MediaCreativeController);
        e.SmartTileController = f;
        var h = {};
        e.initSmartTileClientCode = function (t, e) {
            var n = (0, u.generateId)();
            t.setAttribute("id", n), h[n] = new f(o({container: t}, e))
        }, e.destroySmartTileClientCode = function (t) {
            var e, n = t.getAttribute("id");
            n && (null === (e = h[n]) || void 0 === e || e.destroy(), h[n] = void 0)
        }
    }, 21088: (t, e, n) => {
        "use strict";
        var r = function () {
            return r = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }, r.apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {value: !0}), e.addMediaTesttag = void 0;
        var i = n(14252);
        e.addMediaTesttag = function (t, e) {
            var n = String(e.serialize());
            if ("string" == typeof t) return (0, i.serverAddParamToUrl)(t, "media-test-tag", n);
            var o = r({}, t);
            return Object.keys(o).forEach((function (t) {
                o[t] = (0, i.serverAddParamToUrl)(o[t], "media-test-tag", n)
            })), o
        }
    }, 64878: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.getMediaSmartWarningFlag = e.getWarningFlag = void 0;
        var r = n(38179), i = n(22886), o = n(15137), a = n(80511), s = n(10407), l = n(25154),
            c = ["spec", "logo", "misc", "unmoderated"], u = ["medication", l.MEDICINE_FLAG],
            d = ["dietary_supplement", l.DIETARY_SUPPLEMENT_FLAG];
        e.getWarningFlag = function (t) {
            void 0 === t && (t = "");
            var e = (0, l.parseBannerFlags)(t), n = (0, r.some)(e, (function (t) {
                return (0, i.indexOf)(u, t) > -1
            })), o = (0, r.some)(e, (function (t) {
                return (0, i.indexOf)(d, t) > -1
            }));
            return n ? l.MEDICINE_FLAG : o ? l.DIETARY_SUPPLEMENT_FLAG : void 0
        };
        e.getMediaSmartWarningFlag = function (t) {
            var n, r,
                i = null !== (r = null === (n = null == t ? void 0 : t.AUCTION_DC_PARAMS) || void 0 === n ? void 0 : n.data_params) && void 0 !== r ? r : {},
                u = (0, l.parseBannerFlags)(t.SMART_PHARM_DISCLAIMER_TYPE);
            return (0, o.forEach)((0, s.getObjectKeys)(i), (function (t) {
                var e;
                if (!(0, a.includes)(c, t)) {
                    var n = i[t];
                    (null === (e = null == n ? void 0 : n.unmoderated) || void 0 === e ? void 0 : e.bannerFlags) && u.push.apply(u, (0, l.parseBannerFlags)(n.unmoderated.bannerFlags))
                }
            })), (0, e.getWarningFlag)(u.join(","))
        }
    }, 14766: (t, e, n) => {
        "use strict";
        var r = function () {
            return r = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }, r.apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {value: !0}), e.getOffersCount = e.makeBannerProps = void 0;
        var i = n(15735), o = n(94320), a = n(15137), s = n(80511), l = n(55598), c = n(10407), u = n(24681),
            d = n(51370), p = n(21088), f = n(60140), h = n(64878), g = ["spec", "logo", "misc", "unmoderated"],
            v = ["small", "big", "huge", "hugeX", "hugeXX", "orig"], m = function (t) {
                return (0, o.filter)((null == t ? void 0 : t.split(";")) || [], (function (t) {
                    return Boolean(t)
                }))
            }, _ = function (t) {
                return (0, i.map)(m(t), (function (t) {
                    return "#".concat(t)
                }))
            }, b = function (t, e, n) {
                var r, i;
                if (t) {
                    var o = (0, p.addMediaTesttag)(t, n);
                    return (null === (r = e.misc) || void 0 === r ? void 0 : r.link_head) ? (null === (i = e.misc) || void 0 === i ? void 0 : i.link_head) + o : o
                }
            }, y = function (t) {
                var e = t.MAX_SHOW_ITEMS;
                return e > 0 ? e : 1 / 0
            }, I = [void 0, "PRICE_FROM", "PRICE_TO"];
        e.makeBannerProps = function (t, e, n) {
            var A, C, S, E, O, T, R, w, k, P, N, L, M, D, B;
            void 0 === n && (n = 1);
            var x = (0, f.normalizeCreativeParams)(t.metaData),
                F = null !== (C = null === (A = null == x ? void 0 : x.AUCTION_DC_PARAMS) || void 0 === A ? void 0 : A.data_params) && void 0 !== C ? C : {},
                j = function (t, e, n, f) {
                    var h = e.SHUFFLE, A = y(e), C = [], S = I[Number(e.OFFER_PRICE_FROM_TO) || 0],
                        E = S ? "".concat((0, l.i18nBanners)(S, f), "\xa0") : void 0;
                    return (0, a.forEach)((0, c.getObjectKeys)(t), (function (e) {
                        var a, l, c;
                        if (!(0, s.includes)(g, e)) {
                            var f = t[e], h = f.text,
                                y = Number(null === (a = f.price) || void 0 === a ? void 0 : a.current) || 0,
                                I = Number(null === (l = f.price) || void 0 === l ? void 0 : l.old) || 0,
                                S = Math.round((I - y) / I * 100), O = (0, u.deleteUndefinedProperties)(r(r({}, h), {
                                    id: e,
                                    adId: e,
                                    url: (0, p.addMediaTesttag)(f.click_url.text_name, n),
                                    clickUrls: (0, p.addMediaTesttag)(f.click_url, n),
                                    count: b(f.count, t, n),
                                    price: y,
                                    priceOld: y >= I || 0 === I ? void 0 : I,
                                    discount: 0 === I || S >= 95 || S < 5 ? 0 : S,
                                    currencyCode: "RUR" === (null == h ? void 0 : h.currency_iso_code) ? "RUB" : null == h ? void 0 : h.currency_iso_code,
                                    position: parseInt(null === (c = f.unmoderated) || void 0 === c ? void 0 : c.position, 10) || 0,
                                    body: (null == h ? void 0 : h.body) ? (0, d.replaceDirectEntities)(null == h ? void 0 : h.body) : void 0,
                                    title: (null == h ? void 0 : h.title) ? (0, d.replaceDirectEntities)(null == h ? void 0 : h.title) : void 0,
                                    warning: (null == h ? void 0 : h.warning) ? (0, d.replaceDirectEntities)(null == h ? void 0 : h.warning) : void 0,
                                    age: (null == h ? void 0 : h.age) && parseInt(h.age, 10) > 0 ? parseInt(null == h ? void 0 : h.age, 10) + "+" : void 0,
                                    sizes: m(null == h ? void 0 : h.sizes),
                                    consist: m(null == h ? void 0 : h.consist),
                                    facilities: m(null == h ? void 0 : h.facilities),
                                    colors: _(null == h ? void 0 : h.colors),
                                    metroColors: _(null == h ? void 0 : h.metro_colors),
                                    locationAndSublocation: (null == h ? void 0 : h.sub_location) && (null == h ? void 0 : h.location) ? "".concat(h.location, ", ").concat(h.sub_location) : (null == h ? void 0 : h.sub_location) || (null == h ? void 0 : h.location),
                                    images: (0, o.filter)((0, i.map)(v, (function (t) {
                                        var e, n, r, o,
                                            a = (null == f ? void 0 : f.image[t]) || (null == f ? void 0 : f.image["".concat(t, "_1")]);
                                        return a ? {
                                            size: t,
                                            width: a.width,
                                            height: a.height,
                                            url: a.url,
                                            "smart-center": a["smart-center"] ? {
                                                x: Number(null === (e = a["smart-center"]) || void 0 === e ? void 0 : e.x) || 0,
                                                y: Number(null === (n = a["smart-center"]) || void 0 === n ? void 0 : n.y) || 0,
                                                w: Number(null === (r = a["smart-center"]) || void 0 === r ? void 0 : r.w),
                                                h: Number(null === (o = a["smart-center"]) || void 0 === o ? void 0 : o.h)
                                            } : void 0,
                                            "smart-centers": (0, i.map)(a["smart-centers"] || [], (function (t) {
                                                return {
                                                    x: Number(null == t ? void 0 : t.x),
                                                    y: Number(null == t ? void 0 : t.y),
                                                    w: Number(null == t ? void 0 : t.w),
                                                    h: Number(null == t ? void 0 : t.h)
                                                }
                                            }))
                                        } : null
                                    })), (function (t) {
                                        return null !== t
                                    })),
                                    settings: {offerPricePrefix: E}
                                }));
                            C.length < A && C.push(O)
                        }
                    })), C.sort((function (t, e) {
                        return h ? 1 - 2 * Math.random() : t.position && e.position ? t.position - e.position : 0
                    }))
                }(F, x, e, n);
            return {
                blockWidth: t.blockWidth,
                blockHeight: t.blockHeight,
                enableAnimation: t.enableAnimation,
                offersOnXAxis: Number(x.OFFERS_ON_X_AXIS || 2),
                offersOnYAxis: Number(x.OFFERS_ON_Y_AXIS || 1),
                carousel: {delay: x.CAROUSEL_AUTO_INTERVAL || 3, enabled: !x.ALLOW_ONLY_ONE_OFFER},
                mosaic: {delay: x.MOSAIC_AUTO_INTERVAL || 3, enabled: !x.ALLOW_ONLY_ONE_OFFER},
                warningFlag: (0, h.getMediaSmartWarningFlag)(x),
                logo: {
                    href: (0, p.addMediaTesttag)(null === (E = null === (S = j[0]) || void 0 === S ? void 0 : S.clickUrls) || void 0 === E ? void 0 : E.price_current, e),
                    count: b(null === (O = F.logo) || void 0 === O ? void 0 : O.count, F, e),
                    punyDomain: null === (R = null === (T = F.logo) || void 0 === T ? void 0 : T.unmoderated) || void 0 === R ? void 0 : R.punyDomain,
                    domain: null !== (P = null === (k = null === (w = F.logo) || void 0 === w ? void 0 : w.unmoderated) || void 0 === k ? void 0 : k.domain) && void 0 !== P ? P : null === (L = null === (N = F.logo) || void 0 === N ? void 0 : N.unmoderated) || void 0 === L ? void 0 : L.punyDomain,
                    image: (null === (B = null === (D = null === (M = F.logo) || void 0 === M ? void 0 : M.image) || void 0 === D ? void 0 : D.logo) || void 0 === B ? void 0 : B.url) ? {
                        width: Number(x["LOGO.Width"]) || 0,
                        height: Number(x["LOGO.Height"]) || 0,
                        url: F.logo.image.logo.url
                    } : void 0
                },
                offers: j
            }
        }, e.getOffersCount = function (t) {
            var e, n, r = (0, f.normalizeCreativeParams)(t),
                i = null !== (n = null === (e = null == r ? void 0 : r.AUCTION_DC_PARAMS) || void 0 === e ? void 0 : e.data_params) && void 0 !== n ? n : {},
                o = y(r), l = 0;
            return (0, a.forEach)((0, c.getObjectKeys)(i), (function (t) {
                (0, s.includes)(g, t) || l < o && l++
            })), l
        }
    }, 60140: (t, e, n) => {
        "use strict";
        var r = function () {
            return r = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }, r.apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {value: !0}), e.normalizeCreativeParams = void 0;
        var i = n(38715), o = n(85200);
        e.normalizeCreativeParams = function (t) {
            var e = r({}, t);
            return (0, i.forOwn)(e, (function (t, n) {
                if ((0, o.isArray)(t) && 1 === t.length) {
                    var r = t[0];
                    isNaN(Number(r)) || (e[n] = Number(r)), (n.startsWith("HAS_") || n.startsWith("IS_") || n.endsWith("_AUTO")) && (e[n] = Boolean(r))
                }
            })), e
        }
    }, 51370: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.replaceDirectEntities = void 0;
        var n = {
            "&laquo": "\xab",
            "&raquo": "\xbb",
            "&bdquo": "\u201e",
            "&rdquo": "\u201d",
            "&lsaquo": "\u2039",
            "&rsaquo": "\u203a",
            "&ndash": "\u2013",
            "&mdash": "\u2014",
            "&#039": "'",
            "&lt": "<",
            "&gt": ">",
            "&quot": '"'
        }, r = {};

        function i(t) {
            return r[t] || (r[t] = new RegExp("".concat(t, "(;)?"), "gm"))
        }

        e.replaceDirectEntities = function (t) {
            for (var e in n) -1 !== t.indexOf(e) && (t = t.replace(i(e), n[e]));
            return t
        }
    }, 77579: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.destroySSRClientCode = e.initSSRClientCode = void 0;
        var r = n(15462), i = n(46601), o = n(20775), a = n(13317);
        e.initSSRClientCode = function (t, e, n) {
            "MediaImage" === e && (0, i.initMediaImageClientCode)(t, n), "MediaCreative" === e && (0, r.initCreativeConstructorClientCode)(t, n), "smart-banner-adaptive_v1" === e && (0, a.initSmartTileClientCode)(t, n), "smart-banner-mosaic_v1" === e && (0, o.initSmartMosaicClientCode)(t, n)
        }, e.destroySSRClientCode = function (t, e) {
            "MediaImage" === e && (0, i.destroyMediaImageClientCode)(t), "MediaCreative" === e && (0, r.destroyCreativeConstructorClientCode)(t), "smart-banner-adaptive_v1" === e && (0, a.destroySmartTileClientCode)(t), "smart-banner-mosaic_v1" === e && (0, o.destroySmartMosaicClientCode)(t)
        }
    }, 13595: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.Style = void 0;
        var r = n(22886), i = n(67401), o = n(50775), a = n(26413), s = n(6400), l = n(30396), c = n(62948);
        e.Style = function (t) {
            var e = t.children, n = t.nonce, u = t.styles, d = t.variables, p = t.checkOnlyShadowRoot,
                f = (0, l.useRef)(), h = (0, l.useState)({css: []})[0], g = !1, v = function () {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    t.forEach((function (t) {
                        -1 === (0, r.indexOf)(h.css, t) && h.css.push(t)
                    })), g && m()
                }, m = function () {
                    var t = h.styleElement;
                    if (!t && (t = f.current, !g && t && !(0, i.isInShadowDom)(t, p))) {
                        var e = t.ownerDocument, n = e.defaultView && (0, o.getHead)(e.defaultView);
                        n && n.appendChild(t)
                    }
                    var r = t.innerHTML, s = h.css.map((function (t) {
                        return (0, a.isFunction)(t) ? t(d) : (d && d.id && (e = ".".concat(d.id)), t._getCss(e));
                        var e
                    })).join("");
                    s !== r && (t.innerHTML = s)
                };
            return (0, l.useLayoutEffect)((function () {
                g = !0, m()
            })), u && v.apply(void 0, u), (0, s.h)(c.StyleContext.Provider, {value: {insertCss: v}}, (0, s.h)("style", {
                ref: f,
                nonce: n,
                type: "text/css"
            }), e)
        }
    }, 62948: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.StyleContext = e.defaultInsertCss = void 0;
        var r = n(6400);
        e.defaultInsertCss = function () {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            var n = t.map((function (t) {
                return t._insertCss()
            }));
            return function () {
                return n.forEach((function (t) {
                    return t()
                }))
            }
        }, e.StyleContext = (0, r.createContext)({insertCss: e.defaultInsertCss})
    }, 89781: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.buildStyles = void 0;
        var r = n(97773), i = null;
        e.buildStyles = function (t) {
            var e = Object.keys(t).map((function (e) {
                return function (t, e) {
                    return (0, r.styleObjToCss)(e) ? "".concat(t, "{").concat((0, r.styleObjToCss)(e), "}") : ""
                }(e, t[e])
            })).join(" ");
            return {
                _getContent: function () {
                    return e
                }, _getCss: function () {
                    return e
                }, _insertCss: function () {
                    i || (i = document.createElement("style"), document.body.appendChild(i)), i.innerText += e
                }
            }
        }
    }, 81558: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.encodeClassNames = void 0;
        var r = n(15137), i = n(83865);
        e.encodeClassNames = function (t) {
            var e = [];
            return (0, r.forEach)(t.split(" "), (function (t) {
                t && e.push(i.getAlias(t, "rS6ys3dT3Q"))
            })), e.join(" ")
        }
    }, 89243: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.useStyles = void 0;
        var r = n(30396), i = n(62948);
        e.useStyles = function () {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            var n = "object" == typeof (null === window || void 0 === window ? void 0 : window.window) && !(null === window || void 0 === window ? void 0 : window.isPcodePreview),
                o = (0, r.useContext)(i.StyleContext).insertCss, a = function () {
                    o.apply(void 0, t.filter(Boolean))
                };
            n ? (0, r.useLayoutEffect)(a, []) : a()
        }
    }, 45550: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.EventLogger = void 0;
        var n = function () {
            function t(t) {
                this.logger = t
            }

            return t.createInstance = function (e) {
                return this.instance || (this.instance = new t(e)), this.instance.clearBannerContext(), this.instance
            }, t.prototype.createBannerContext = function (t) {
                t && (this.bannerId = t)
            }, t.prototype.getBannerContext = function (t) {
                var e = this;
                return t = t || this.bannerId, {
                    addParams: function (n) {
                        e.addParams(n, t)
                    }
                }
            }, t.prototype.clearBannerContext = function () {
                this.bannerId = void 0
            }, t.prototype.addParams = function (t, e) {
                var n;
                null === (n = this.logger) || void 0 === n || n.addParams(t, e)
            }, t.clearInstance = function () {
                delete this.instance
            }, t.getInstance = function () {
                return this.instance
            }, t.hasInstance = function () {
                return Boolean(this.instance)
            }, t
        }();
        e.EventLogger = n
    }, 21342: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.applyStyles = e.InlineStyle = e.StylesMap = void 0;
        var r = n(17347), i = n(89781), o = n(89243), a = n(83865), s = n(51901);
        Object.defineProperty(e, "StylesMap", {
            enumerable: !0, get: function () {
                return s.StylesMap
            }
        }), Object.defineProperty(e, "InlineStyle", {
            enumerable: !0, get: function () {
                return s.InlineStyle
            }
        }), e.applyStyles = function (t, e, n) {
            void 0 === n && (n = 1);
            var s = [];
            if (t || e) {
                for (; n > 0;) n--, s.push(a.getAlias((0, r.identify)()));
                var l = {};
                t && (l[".".concat(s.join("."))] = t), e && (l[".".concat(s.join("."), ":hover")] = e), (0, o.useStyles)((0, i.buildStyles)(l))
            }
            return s.join(" ")
        }
    }, 51901: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0})
    }, 98064: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.generateId = void 0;
        var r = n(72367);
        e.generateId = function () {
            return "id".concat((0, r.generateSessionId)())
        }
    }, 33671: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.getFaviconJson = e.getFavicon = void 0;
        var r = n(49221), i = n(49573), o = n(98026), a = n(92738), s = n(44552);

        function l(t, e) {
            var n = t;
            return e && (n = (0, a.addDelimiter)(n, "", "/"), n += (0, s.removeDelimiter)(String(e), "/")), n
        }

        e.getFavicon = function (t) {
            var e = t.punyDomain, n = t.iconUrl, o = t.size;
            if (n) return n;
            if (e) {
                var a = (0, r.toQueryParams)({size: o, stub: 2});
                return l(i.URLS.favicon, e) + (a ? "?".concat(a) : "")
            }
            return ""
        }, e.getFaviconJson = function (t, e) {
            if (t) {
                return new o.Url({
                    host: l("https://favicon.yandex.net/favicon/v2/", t),
                    params: {size: e, json: 1}
                }).getRawUrl()
            }
            return ""
        }
    }, 24704: (t, e) => {
        "use strict";
        e.h = void 0, e.h = function (t) {
            return t && t.name
        }
    }, 75622: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.getFullscreenTheme = e.DEFAULT_FULLSCREEN_THEME = void 0, e.DEFAULT_FULLSCREEN_THEME = "light", e.getFullscreenTheme = function (t) {
            return t.fullscreenTheme || e.DEFAULT_FULLSCREEN_THEME
        }
    }, 41712: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.isNewDesktopFullscreenGrid = e.isNewDesktopFullscreen = e.isNewFullscreen = void 0;
        var r = n(88772);

        function i(t) {
            return "fullscreen" === (null == t ? void 0 : t.name) || "fullscreen_grid" === (null == t ? void 0 : t.name)
        }

        function o(t) {
            return i(t) && (null == t ? void 0 : t.allowDesktopFullscreen)
        }

        e.isNewFullscreen = i, e.isNewDesktopFullscreen = o, e.isNewDesktopFullscreenGrid = function (t) {
            return "fullscreen_grid" === (null == t ? void 0 : t.name) && o(t) && "exp" === (0, r.useExperimentFlag)("FULLSCREEN_GRID_DESKTOP")
        }
    }, 66897: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.kebabCaseToCamelCase = void 0;
        e.kebabCaseToCamelCase = function (t) {
            return t.split("-").map((function (t, e) {
                if (0 === e) return t;
                var n = t.split("");
                return n.splice(0, 1, n[0].toUpperCase()), n.join("")
            })).join("")
        }
    }, 97773: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.styleObjToCss = void 0;
        var n = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;
        e.styleObjToCss = function (t, e) {
            void 0 === e && (e = !1);
            var r = e ? "!important" : "", i = "";
            for (var o in t) {
                var a = t[o];
                null != a && (i && (i += " "), i += "".concat(o.replace(/([A-Z])/g, "-$1").toLowerCase(), ": ").concat(a), "number" == typeof a && !1 === n.test(o) && (i += "px"), i += r + ";")
            }
            return i || void 0
        }
    }, 98239: (t, e, n) => {
        "use strict";
        e.Gi = e.ud = void 0;
        var r = n(15735), i = n(94320), o = n(28983), a = n(80511), s = n(10407), l = n(74881), c = n(27457),
            u = n(14766), d = [{width: 160, height: 600}, {width: 240, height: 400}, {width: 240, height: 600}, {
                width: 300,
                height: 300
            }, {width: 300, height: 500}, {width: 300, height: 600}, {width: 300, height: 900}, {
                width: 320,
                height: 100
            }, {width: 336, height: 280}, {width: 600, height: 340}, {width: 970, height: 250}, {
                width: 1e3,
                height: 120
            }, {width: 1200, height: 150}],
            p = {"smart-banner-adaptive_v1": l.canRenderInBlock, "smart-banner-mosaic_v1": c.canRenderInBlock};
        e.ud = function (t) {
            return (0, a.includes)((0, s.getObjectKeys)(p), t)
        };
        var f = function (t, e) {
            return 0 !== e.width ? Math.abs(e.width - t.width) + t.height / 600 : 0 !== e.height ? Math.abs(e.height - t.height) + 1 / t.width : 0
        }, h = function (t, e, n) {
            return Math.max.apply(Math, (0, r.map)(t, e, n))
        };

        function g(t, e) {
            var n = e.blockWidth, r = e.blockHeight, a = e.offersCount, s = p[t];
            if (s) {
                if (n > 0 && r > 0) return {width: n, height: r};
                var l = (0, i.filter)(d, (function (t) {
                    return s(t, {offersCount: a})
                })), c = h(l, (function (t) {
                    return t.width
                })), u = h(l, (function (t) {
                    return t.height
                })), g = (0, o.closest)({width: n, height: r}, l, f);
                if (g && (0 !== n || 0 !== r)) {
                    var v = Math.max(Math.min(n, c) / g.width, Math.min(r, u) / g.height);
                    return {width: Math.round(g.width * v), height: Math.round(g.height * v)}
                }
                return {width: 300, height: 300}
            }
        }

        e.Gi = function (t) {
            var e = Number(t.width), n = Number(t.height), r = (0, u.getOffersCount)(t.data);
            return g(t.format, {blockWidth: e, blockHeight: n, offersCount: r})
        }
    }, 58431: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.closestElementWithAttr = void 0, e.closestElementWithAttr = function (t, e) {
            for (var n = t; n && 1 === n.nodeType;) {
                if (n.getAttribute(e)) return n;
                n = n.parentElement
            }
            return null
        }
    }, 56397: (t, e, n) => {
        "use strict";
        e.h = void 0, e.h = function (t, e, r) {
            var i = r ? "hydration" : "client";
            return '<!DOCTYPE html>\n<html>\n<head>\n    <meta charset="utf-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <style>\n        html, body {width: 100%; height: 100%}\n        body {margin: 0; overflow: hidden}\n    </style>\n    '.concat(r ? '<style id="app_styles">'.concat(r.css, "</style>") : "", '\n</head>\n<body>\n<div id="app">').concat(r ? r.html : "", '</div>\n<script src="').concat(n.p).concat(e, "_").concat(i, ".js\"><\/script>\n<script>\n    window.Ya.mediaCode.create('").concat(e, "', ").concat(n.lv["json"].stringify(t), ", '").concat(r ? "ssr" : "", "');\n<\/script>\n</body>\n</html>")
        }
    }, 74881: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.canRenderInBlock = void 0;
        e.canRenderInBlock = function (t, e) {
            var n = e.offersCount;
            return !(t.width >= 900 && n < 2 || t.width <= 200 && t.height >= 600 && n < 3)
        }
    }, 27457: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.canRenderInBlock = void 0;
        e.canRenderInBlock = function () {
            return !0
        }
    }, 86010: (t, e, n) => {
        "use strict";

        function r(t) {
            var e, n, i = "";
            if ("string" == typeof t || "number" == typeof t) i += t; else if ("object" == typeof t) if (Array.isArray(t)) for (e = 0; e < t.length; e++) t[e] && (n = r(t[e])) && (i && (i += " "), i += n); else for (e in t) t[e] && (i && (i += " "), i += e);
            return i
        }

        function i() {
            for (var t, e, n = 0, i = ""; n < arguments.length;) (t = arguments[n++]) && (e = r(t)) && (i && (i += " "), i += e);
            return i
        }

        n.r(e), n.d(e, {clsx: () => i, default: () => o});
        const o = i
    }, 23645: t => {
        "use strict";
        t.exports = function (t) {
            var e = [];
            return e.toString = function () {
                return this.map((function (e) {
                    var n = "", r = void 0 !== e[5];
                    return e[4] && (n += "@supports (".concat(e[4], ") {")), e[2] && (n += "@media ".concat(e[2], " {")), r && (n += "@layer".concat(e[5].length > 0 ? " ".concat(e[5]) : "", " {")), n += t(e), r && (n += "}"), e[2] && (n += "}"), e[4] && (n += "}"), n
                })).join("")
            }, e.i = function (t, n, r, i, o) {
                "string" == typeof t && (t = [[null, t, void 0]]);
                var a = {};
                if (r) for (var s = 0; s < this.length; s++) {
                    var l = this[s][0];
                    null != l && (a[l] = !0)
                }
                for (var c = 0; c < t.length; c++) {
                    var u = [].concat(t[c]);
                    r && a[u[0]] || (void 0 !== o && (void 0 === u[5] || (u[1] = "@layer".concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {").concat(u[1], "}")), u[5] = o), n && (u[2] ? (u[1] = "@media ".concat(u[2], " {").concat(u[1], "}"), u[2] = n) : u[2] = n), i && (u[4] ? (u[1] = "@supports (".concat(u[4], ") {").concat(u[1], "}"), u[4] = i) : u[4] = "".concat(i)), e.push(u))
                }
            }, e
        }
    }, 8081: t => {
        "use strict";
        t.exports = function (t) {
            return t[1]
        }
    }, 71013: (t, e, n) => {
        var r = n(87130), i = n(84718), o = "string" == typeof r ? [[t.id, r, ""]] : r;
        (e = t.exports = r.locals || {})._getContent = function () {
            return o
        }, e._getCss = function () {
            return "" + r
        }, e._insertCss = function (t) {
            return i(o, t)
        }
    }, 24166: (t, e, n) => {
        var r = n(25365), i = n(84718), o = "string" == typeof r ? [[t.id, r, ""]] : r;
        (e = t.exports = r.locals || {})._getContent = function () {
            return o
        }, e._getCss = function () {
            return "" + r
        }, e._insertCss = function (t) {
            return i(o, t)
        }
    }, 99689: (t, e, n) => {
        var r = n(73643), i = n(84718), o = "string" == typeof r ? [[t.id, r, ""]] : r;
        (e = t.exports = r.locals || {})._getContent = function () {
            return o
        }, e._getCss = function () {
            return "" + r
        }, e._insertCss = function (t) {
            return i(o, t)
        }
    }, 95548: (t, e, n) => {
        var r = n(22477), i = n(84718), o = "string" == typeof r ? [[t.id, r, ""]] : r;
        (e = t.exports = r.locals || {})._getContent = function () {
            return o
        }, e._getCss = function () {
            return "" + r
        }, e._insertCss = function (t) {
            return i(o, t)
        }
    }, 50038: (t, e, n) => {
        var r = n(18775), i = n(84718), o = "string" == typeof r ? [[t.id, r, ""]] : r;
        (e = t.exports = r.locals || {})._getContent = function () {
            return o
        }, e._getCss = function () {
            return "" + r
        }, e._insertCss = function (t) {
            return i(o, t)
        }
    }, 84718: (t, e, n) => {
        "use strict";
        var r = {};

        function i(t) {
            t.forEach((function (t) {
                if (--r[t] <= 0) {
                    var e = document.getElementById(t);
                    e && e.parentNode.removeChild(e)
                }
            }))
        }

        t.exports = function (t, e) {
            for (var o, a = void 0 === e ? {} : e, s = a.replace, l = void 0 !== s && s, c = a.prepend, u = void 0 !== c && c, d = a.prefix, p = void 0 === d ? "s" : d, f = [], h = 0; h < t.length; h++) {
                var g = t[h], v = g[0], m = g[1], _ = g[2], b = g[3], y = "" + p + v + "-" + h;
                if (f.push(y), !r[y] || l) {
                    r[y] = 1;
                    var I = document.getElementById(y), A = !1;
                    I || (A = !0, (I = document.createElement("style")).setAttribute("type", "text/css"), I.id = y, _ && I.setAttribute("media", _));
                    var C = m;
                    b && "function" == typeof btoa && (C += "\n/*# sourceMappingURL=data:application/json;base64," + (o = n.lv["json"].stringify(b), btoa(encodeURIComponent(o).replace(/%([0-9A-F]{2})/g, (function (t, e) {
                        return String.fromCharCode("0x" + e)
                    }))) + "*/"), C += "\n/*# sourceURL=" + b.file + "?" + y + "*/"), "textContent" in I ? I.textContent = C : I.styleSheet.cssText = C, A && (u ? document.head.insertBefore(I, document.head.childNodes[0]) : document.head.appendChild(I))
                } else r[y]++
            }
            return i.__pbind(null, f)
        }
    }, 2265: t => {
        t.exports = {
            3: "ssr-poster",
            4: "ssr-zen",
            5: "ssr-zen-2",
            7: "ssr-adaptiveConstructor",
            8: "ssr-adaptive-billboard",
            9: "ssr-adaptive-v3",
            10: "ssr-adaptive-leaderboard",
            11: "ssr-adaptive-leaderboard-avito",
            12: "ssr-adaptive-row",
            13: "ssr-adaptive-square",
            14: "ssr-adaptive-tower",
            15: "ssr-adaptive-tower-avito",
            16: "ssr-smart-tile",
            17: "ssr-poster-carousel",
            18: "ssr-smart-mosaic",
            19: "ssr-horizontalSD",
            20: "ssr-fullscreen",
            21: "ssr-fullscreen-grid",
            22: "ssr-shoppable",
            23: "ssr-native"
        }
    }, 98661: (t, e, n) => {
        "use strict";
        n.r(e), n.d(e, {
            Children: () => p,
            Component: () => i.Component,
            Fragment: () => i.Fragment,
            PureComponent: () => s,
            Suspense: () => g,
            SuspenseList: () => _,
            cloneElement: () => M,
            createContext: () => i.createContext,
            createElement: () => i.createElement,
            createFactory: () => N,
            createPortal: () => A,
            createRef: () => i.createRef,
            default: () => F,
            findDOMNode: () => B,
            forwardRef: () => u,
            hydrate: () => O,
            isValidElement: () => L,
            lazy: () => m,
            memo: () => l,
            render: () => E,
            unmountComponentAtNode: () => D,
            unstable_batchedUpdates: () => x,
            useCallback: () => r.useCallback,
            useContext: () => r.useContext,
            useDebugValue: () => r.useDebugValue,
            useEffect: () => r.useEffect,
            useErrorBoundary: () => r.useErrorBoundary,
            useImperativeHandle: () => r.useImperativeHandle,
            useLayoutEffect: () => r.useLayoutEffect,
            useMemo: () => r.useMemo,
            useReducer: () => r.useReducer,
            useRef: () => r.useRef,
            useState: () => r.useState,
            version: () => P
        });
        var r = n(30396), i = n(6400);

        function o(t, e) {
            for (var n in e) t[n] = e[n];
            return t
        }

        function a(t, e) {
            for (var n in t) if ("__source" !== n && !(n in e)) return !0;
            for (var r in e) if ("__source" !== r && t[r] !== e[r]) return !0;
            return !1
        }

        var s = function (t) {
            var e, n;

            function r(e) {
                var n;
                return (n = t.call(this, e) || this).isPureReactComponent = !0, n
            }

            return n = t, (e = r).prototype = Object.create(n.prototype), e.prototype.constructor = e, e.__proto__ = n, r.prototype.shouldComponentUpdate = function (t, e) {
                return a(this.props, t) || a(this.state, e)
            }, r
        }(i.Component);

        function l(t, e) {
            function n(t) {
                var n = this.props.ref, r = n == t.ref;
                return !r && n && (n.call ? n(null) : n.current = null), e ? !e(this.props, t) || !r : a(this.props, t)
            }

            function r(e) {
                return this.shouldComponentUpdate = n, (0, i.createElement)(t, o({}, e))
            }

            return r.prototype.isReactComponent = !0, r.displayName = "Memo(" + (t.displayName || t.name) + ")", r.t = !0, r
        }

        var c = i.options.vnode;

        function u(t) {
            function e(e) {
                var n = o({}, e);
                return delete n.ref, t(n, e.ref)
            }

            return e.prototype.isReactComponent = !0, e.t = !0, e.displayName = "ForwardRef(" + (t.displayName || t.name) + ")", e
        }

        i.options.vnode = function (t) {
            t.type && t.type.t && t.ref && (t.props.ref = t.ref, t.ref = null), c && c(t)
        };
        var d = function (t, e) {
            return t ? (0, i.toChildArray)(t).__preduce((function (t, n, r) {
                return t.concat(e(n, r))
            }), []) : null
        }, p = {
            map: d, forEach: d, count: function (t) {
                return t ? (0, i.toChildArray)(t).length : 0
            }, only: function (t) {
                if (1 !== (t = (0, i.toChildArray)(t)).length) throw new Error("Children.only() expects only one child.");
                return t[0]
            }, toArray: i.toChildArray
        }, f = i.options.__e;

        function h(t) {
            return t && ((t = o({}, t)).__c = null, t.__k = t.__k && t.__k.map(h)), t
        }

        function g(t) {
            this.__u = 0, this.u = null, this.__b = null
        }

        function v(t) {
            var e = t.__.__c;
            return e && e.o && e.o(t)
        }

        function m(t) {
            var e, n, r;

            function o(o) {
                if (e || (e = t()).then((function (t) {
                    n = t.default || t
                }), (function (t) {
                    r = t
                })), r) throw r;
                if (!n) throw e;
                return (0, i.createElement)(n, o)
            }

            return o.displayName = "Lazy", o.t = !0, o
        }

        function _() {
            this.i = null, this.l = null
        }

        i.options.__e = function (t, e, n) {
            if (t.then) for (var r, i = e; i = i.__;) if ((r = i.__c) && r.__c) return r.__c(t, e.__c);
            f(t, e, n)
        }, (g.prototype = new i.Component).__c = function (t, e) {
            var n = this;
            null == n.u && (n.u = []), n.u.push(e);
            var r = v(n.__v), i = !1, o = function () {
                i || (i = !0, r ? r(a) : a())
            };
            e.__c = e.componentWillUnmount, e.componentWillUnmount = function () {
                o(), e.__c && e.__c()
            };
            var a = function () {
                var t;
                if (!--n.__u) for (n.__v.__k[0] = n.state.o, n.setState({o: n.__b = null}); t = n.u.pop();) t.forceUpdate()
            };
            n.__u++ || n.setState({o: n.__b = n.__v.__k[0]}), t.then(o, o)
        }, g.prototype.render = function (t, e) {
            return this.__b && (this.__v.__k[0] = h(this.__b), this.__b = null), [(0, i.createElement)(i.Component, null, e.o ? null : t.children), e.o && t.fallback]
        };
        var b = function (t, e, n) {
            if (++n[1] === n[0] && t.l.delete(e), t.props.revealOrder && ("t" !== t.props.revealOrder[0] || !t.l.size)) for (n = t.i; n;) {
                for (; n.length > 3;) n.pop()();
                if (n[1] < n[0]) break;
                t.i = n = n[2]
            }
        };
        (_.prototype = new i.Component).o = function (t) {
            var e = this, n = v(e.__v), r = e.l.get(t);
            return r[0]++, function (i) {
                var o = function () {
                    e.props.revealOrder ? (r.push(i), b(e, t, r)) : i()
                };
                n ? n(o) : o()
            }
        }, _.prototype.render = function (t) {
            this.i = null, this.l = new Map;
            var e = (0, i.toChildArray)(t.children);
            t.revealOrder && "b" === t.revealOrder[0] && e.reverse();
            for (var n = e.length; n--;) this.l.set(e[n], this.i = [1, 0, this.i]);
            return t.children
        }, _.prototype.componentDidUpdate = _.prototype.componentDidMount = function () {
            var t = this;
            t.l.forEach((function (e, n) {
                b(t, n, e)
            }))
        };
        var y = function () {
            function t() {
            }

            var e = t.prototype;
            return e.getChildContext = function () {
                return this.props.context
            }, e.render = function (t) {
                return t.children
            }, t
        }();

        function I(t) {
            var e = this, n = t.container, r = (0, i.createElement)(y, {context: e.context}, t.vnode);
            return e.s && e.s !== n && (e.h.parentNode && e.s.removeChild(e.h), (0, i._unmount)(e.v), e.p = !1), t.vnode ? e.p ? (n.__k = e.__k, (0, i.render)(r, n), e.__k = n.__k) : (e.h = document.createTextNode(""), (0, i.hydrate)("", n), n.appendChild(e.h), e.p = !0, e.s = n, (0, i.render)(r, n, e.h), e.__k = this.h.__k) : e.p && (e.h.parentNode && e.s.removeChild(e.h), (0, i._unmount)(e.v)), e.v = r, e.componentWillUnmount = function () {
                e.h.parentNode && e.s.removeChild(e.h), (0, i._unmount)(e.v)
            }, null
        }

        function A(t, e) {
            return (0, i.createElement)(I, {vnode: t, container: e})
        }

        var C = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
        i.Component.prototype.isReactComponent = {};
        var S = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;

        function E(t, e, n) {
            if (null == e.__k) for (; e.firstChild;) e.removeChild(e.firstChild);
            return (0, i.render)(t, e), "function" == typeof n && n(), t ? t.__c : null
        }

        function O(t, e, n) {
            return (0, i.hydrate)(t, e), "function" == typeof n && n(), t ? t.__c : null
        }

        var T = i.options.event;

        function R(t, e) {
            t["UNSAFE_" + e] && !t[e] && Object.defineProperty(t, e, {
                configurable: !1, get: function () {
                    return this["UNSAFE_" + e]
                }, set: function (t) {
                    this["UNSAFE_" + e] = t
                }
            })
        }

        i.options.event = function (t) {
            T && (t = T(t)), t.persist = function () {
            }, t.isDefaultPrevented = function () {
                return t.defaultPrevented
            };
            var e = t.stopPropagation, n = !1;
            return t.stopPropagation = function () {
                n = !0, e.call(this)
            }, t.isPropagationStopped = function () {
                return n
            }, t.nativeEvent = t
        };
        var w = {
            configurable: !0, get: function () {
                return this.class
            }
        }, k = i.options.vnode;
        i.options.vnode = function (t) {
            t.$$typeof = S;
            var e = t.type, n = t.props;
            if (n.class != n.className && (w.enumerable = "className" in n, null != n.className && (n.class = n.className), Object.defineProperty(n, "className", w)), "function" != typeof e) {
                var r, o, a;
                for (a in n.defaultValue && (n.value || 0 === n.value || (n.value = n.defaultValue), delete n.defaultValue), Array.isArray(n.value) && n.multiple && "select" === e && ((0, i.toChildArray)(n.children).forEach((function (t) {
                    -1 != n.value.indexOf(t.props.value) && (t.props.selected = !0)
                })), delete n.value), n) if (r = C.test(a)) break;
                if (r) for (a in o = t.props = {}, n) o[C.test(a) ? a.replace(/([A-Z0-9])/, "-$1").toLowerCase() : a] = n[a]
            }
            !function (e) {
                var n = t.type, r = t.props;
                if (r && "string" == typeof n) {
                    var i = {};
                    for (var o in r) /^on(Ani|Tra|Tou)/.test(o) && (r[o.toLowerCase()] = r[o], delete r[o]), i[o.toLowerCase()] = o;
                    if (i.ondoubleclick && (r.ondblclick = r[i.ondoubleclick], delete r[i.ondoubleclick]), i.onbeforeinput && (r.onbeforeinput = r[i.onbeforeinput], delete r[i.onbeforeinput]), i.onchange && ("textarea" === n || "input" === n.toLowerCase() && !/^fil|che|ra/i.test(r.type))) {
                        var a = i.oninput || "oninput";
                        r[a] || (r[a] = r[i.onchange], delete r[i.onchange])
                    }
                }
            }(), "function" == typeof e && !e.m && e.prototype && (R(e.prototype, "componentWillMount"), R(e.prototype, "componentWillReceiveProps"), R(e.prototype, "componentWillUpdate"), e.m = !0), k && k(t)
        };
        var P = "16.8.0";

        function N(t) {
            return i.createElement.__pbind(null, t)
        }

        function L(t) {
            return !!t && t.$$typeof === S
        }

        function M(t) {
            return L(t) ? i.cloneElement.apply(null, arguments) : t
        }

        function D(t) {
            return !!t.__k && ((0, i.render)(null, t), !0)
        }

        function B(t) {
            return t && (t.base || 1 === t.nodeType && t) || null
        }

        var x = function (t, e) {
            return t(e)
        };
        const F = {
            useState: r.useState,
            useReducer: r.useReducer,
            useEffect: r.useEffect,
            useLayoutEffect: r.useLayoutEffect,
            useRef: r.useRef,
            useImperativeHandle: r.useImperativeHandle,
            useMemo: r.useMemo,
            useCallback: r.useCallback,
            useContext: r.useContext,
            useDebugValue: r.useDebugValue,
            version: "16.8.0",
            Children: p,
            render: E,
            hydrate: E,
            unmountComponentAtNode: D,
            createPortal: A,
            createElement: i.createElement,
            createContext: i.createContext,
            createFactory: N,
            cloneElement: M,
            createRef: i.createRef,
            Fragment: i.Fragment,
            isValidElement: L,
            findDOMNode: B,
            Component: i.Component,
            PureComponent: s,
            memo: l,
            forwardRef: u,
            unstable_batchedUpdates: x,
            Suspense: g,
            SuspenseList: _,
            lazy: m
        }
    }, 70073: t => {
        t.exports = '<svg width="24" height="8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 8c6 0 9-8 12-8s6 8 12 8H0z" fill="#fff"/></svg>'
    }, 47938: t => {
        t.exports = '<svg width="10" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.75 11.25v0h0L5.47 8.606 5 8.226l-.47.38-3.28 2.645h0V1.127a.375.375 0 01.375-.375h6.75c.1 0 .195.04.265.11l.53-.53-.53.53c.07.07.11.166.11.265V11.25z" stroke-width="1.5" stroke="currentColor"/></svg>'
    }, 93776: t => {
        t.exports = '<svg width="16" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.999 12.945c-.75-.508-2.395-1.685-3.884-3.175-.789-.79-1.515-1.648-2.04-2.524-.528-.88-.825-1.73-.825-2.516C1.25.452 6.084.02 7.323 2.616L8 4.032l.677-1.416C9.917.02 14.75.452 14.75 4.73c0 .786-.297 1.637-.825 2.516-.525.876-1.251 1.735-2.04 2.524-1.49 1.491-3.138 2.669-3.886 3.175z" stroke="currentColor" stroke-width="1.5"/></svg>'
    }, 35461: t => {
        t.exports = '<svg width="28" height="8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.857 7.163c1.55 0 2.325 0 3.02-.293.695-.292 1.236-.846 2.32-1.955l2.133-2.183C12.586 1.447 13.214.804 14 .804s1.414.643 2.67 1.928l2.133 2.183c1.084 1.109 1.625 1.663 2.32 1.955.695.293 1.47.293 3.02.293H28 0h3.857z" fill="#343334"/></svg>'
    }, 58032: t => {
        t.exports = '<svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 8a8 8 0 1116 0A8 8 0 010 8z" fill="#B9BDC6"/><path d="M9.133 12.817h1.67v-9.6h-2.43c-2.445 0-3.73 1.257-3.73 3.107 0 1.478.705 2.349 1.962 3.247l-2.183 3.246h1.81l2.43-3.633-.842-.567c-1.022-.69-1.52-1.229-1.52-2.39 0-1.021.72-1.712 2.087-1.712h.746v8.302z" fill="#fff"/></svg>'
    }, 54304: t => {
        t.exports = '<svg width="10" height="10" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 8a8 8 0 1116 0A8 8 0 010 8z" fill="#B9BDC6"/><path d="M9.133 12.817h1.67v-9.6h-2.43c-2.445 0-3.73 1.257-3.73 3.107 0 1.478.705 2.349 1.962 3.247l-2.183 3.246h1.81l2.43-3.633-.842-.567c-1.022-.69-1.52-1.229-1.52-2.39 0-1.021.72-1.712 2.087-1.712h.746v8.302z" fill="#fff"/></svg>'
    }, 91470: t => {
        t.exports = '<svg width="16" height="17" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16.003a8 8 0 100-16 8 8 0 000 16zm2.404-11.82A1 1 0 1111.818 5.6L9.414 8.003l2.404 2.404a1 1 0 01-1.414 1.414L8 9.417 5.596 11.82a1 1 0 01-1.414-1.414l2.404-2.404-2.404-2.404a1 1 0 011.414-1.415L8 6.59l2.404-2.405v-.001z" fill="#fff" fill-opacity=".25"/></svg>'
    }, 31549: t => {
        t.exports = '<svg width="10" height="11" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.816 7.054a1 1 0 002 0v-5.37a1 1 0 00-1-1h-5.37a1 1 0 000 2h.584a10 10 0 002.233-.254l.86-.197v.066l-.775.581a9.864 9.864 0 00-1.071.929l-4.801 4.8a1 1 0 001.414 1.415l4.801-4.8a10 10 0 00.929-1.072l.581-.775h.066l-.197.864a10 10 0 00-.253 2.23v.583z"/></svg>'
    }, 75193: t => {
        t.exports = '"use strict";var p=["https://yastatic.net/q/set/s/rsya-tag-users/bundle.js"],m=/^(?:(?:https?:)?\\/\\/)?(?:an\\.)?yandex\\.[a-z]+\\//gi,t=window.parent;window.addEventListener("message",function(e){if("string"==typeof e.data)try{t=JSON.parse(e.data)}catch(e){return}else t=e.data;var t=(e=t||{}).name,n=e.namespace,a=e.days,r=e.urls,o=e.adblockCountToXhr,i=e.countToXhr,e=e.bundle,s="load_image"===t||"load_script"===t,n=function(e,t){if(t&&e){e="".concat(e,"=1");if(-1!==document.cookie.indexOf(e))return!1;var t=86400*t*1e3,n=new Date,n=new Date(Number(n)+t).toUTCString();document.cookie="".concat(e,"; expires=").concat(n,"; SameSite=None; Secure")}return!0}(n,a),a=Array.isArray(r)&&0<r.length;if(s&&n&&a)if("load_image"===t)for(var c=r,d=o,u=i,f=e,l=0;l<c.length;l++)(u&&m.test(c[l])||"adblock"===f&&d?function(e){var t=new XMLHttpRequest;t.open("GET",e,!0),t.withCredentials=!0,t.send()}:function(e){(new Image).src=e})(c[l]);else"load_script"===t&&r.filter(function(e){return p.includes(e)}).forEach(function(e){return e=e,(t=document.createElement("script")).src=e,void document.body.appendChild(t);var t})});function n(e){"pagehide"===e.type&&e.persisted||a||(a=!0,t.postMessage({name:"CONFIRM_FRAME_UNLOADED"},"*"))}var a=!1;["beforeunload","pagehide","unload"].forEach(function(e){return window.addEventListener(e,n)}),t.postMessage({name:"CONFIRM_FRAME_READY"},"*");'
    }, 30473: (t, e, n) => {
        t.exports = function (t, e) {
            n.e(5051).then(function () {
                t(n(47717))
            }.__pbind(null, n))["catch"]((function () {
                e && e.apply(this, arguments)
            }))
        }
    }, 98151: (t, e, n) => {
        t.exports = function (t, e) {
            Promise.all([n.e(720), n.e(4474)]).then(function () {
                t(n(55737))
            }.__pbind(null, n))["catch"]((function () {
                e && e.apply(this, arguments)
            }))
        }
    }, 36366: (t, e, n) => {
        t.exports = function (t, e) {
            Promise.all([n.e(7965), n.e(1493)]).then(function () {
                t(n(61835))
            }.__pbind(null, n))["catch"]((function () {
                e && e.apply(this, arguments)
            }))
        }
    }, 75406: (t, e, n) => {
        t.exports = function (t, e) {
            Promise.all([n.e(720), n.e(9325), n.e(5653)]).then(function () {
                t(n(47380))
            }.__pbind(null, n))["catch"]((function () {
                e && e.apply(this, arguments)
            }))
        }
    }, 44588: (t, e, n) => {
        t.exports = function (t, e) {
            Promise.all([n.e(720), n.e(9325), n.e(7378), n.e(2370)]).then(function () {
                t(n(82555))
            }.__pbind(null, n))["catch"]((function () {
                e && e.apply(this, arguments)
            }))
        }
    }, 77299: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], n.e(1676).then(function () {
                if (i = n(64393), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 72535: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], n.e(1962).then(function () {
                if (i = n(29182), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 8874: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], n.e(8633).then(function () {
                if (i = n(99704), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 77480: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], n.e(9792).then(function () {
                if (i = n(46609), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 81380: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], n.e(7034).then(function () {
                if (i = n(21591), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 65017: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], n.e(5356).then(function () {
                if (i = n(26120), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 54566: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], n.e(6947).then(function () {
                if (i = n(39885), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 9393: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], n.e(1802).then(function () {
                if (i = n(10433), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 97809: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], n.e(8390).then(function () {
                if (i = n(79989), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 52012: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], n.e(9959).then(function () {
                if (i = n(28637), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 53436: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], n.e(8175).then(function () {
                if (i = n(87560), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 73331: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], n.e(1417).then(function () {
                if (i = n(90892), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 46124: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], n.e(8108).then(function () {
                if (i = n(87476), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 69200: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], n.e(5263).then(function () {
                if (i = n(80306), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 88497: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], n.e(4037).then(function () {
                if (i = n(43298), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 39996: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], n.e(7770).then(function () {
                if (i = n(32817), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 22450: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], n.e(8081).then(function () {
                if (i = n(78079), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 11634: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], n.e(2998).then(function () {
                if (i = n(66811), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 72144: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], Promise.all([n.e(720), n.e(9962)]).then(function () {
                if (i = n(62838), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 84667: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], n.e(5072).then(function () {
                if (i = n(16907), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 18359: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], n.e(7631).then(function () {
                if (i = n(67722), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 74665: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], n.e(8339).then(function () {
                if (i = n(89767), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 62555: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], n.e(2846).then(function () {
                if (i = n(99178), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 81030: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], n.e(9340).then(function () {
                if (i = n(55131), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 37838: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], n.e(3859).then(function () {
                if (i = n(96654), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 91395: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], n.e(7219).then(function () {
                if (i = n(36361), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 34260: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], n.e(2848).then(function () {
                if (i = n(80657), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 90113: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], n.e(7640).then(function () {
                if (i = n(96425), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 84682: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], n.e(1264).then(function () {
                if (i = n(71375), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 6721: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], n.e(268).then(function () {
                if (i = n(99400), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 11222: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], n.e(9062).then(function () {
                if (i = n(18592), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 34508: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], n.e(9514).then(function () {
                if (i = n(50614), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 85331: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], n.e(1584).then(function () {
                if (i = n(30012), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 88599: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], n.e(4219).then(function () {
                if (i = n(69422), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 2850: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], n.e(6686).then(function () {
                if (i = n(12628), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 9570: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], n.e(8684).then(function () {
                if (i = n(51755), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 67920: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], Promise.all([n.e(7965), n.e(830)]).then(function () {
                if (i = n(4919), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 83329: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], Promise.all([n.e(7965), n.e(8029)]).then(function () {
                if (i = n(30957), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 68446: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], Promise.all([n.e(7965), n.e(2987)]).then(function () {
                if (i = n(62265), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 1333: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], Promise.all([n.e(7965), n.e(419)]).then(function () {
                if (i = n(29854), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 4253: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], Promise.all([n.e(7965), n.e(2346)]).then(function () {
                if (i = n(70627), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 51929: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], Promise.all([n.e(7965), n.e(4360)]).then(function () {
                if (i = n(44753), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 41440: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], Promise.all([n.e(7965), n.e(2480)]).then(function () {
                if (i = n(44420), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 70901: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], Promise.all([n.e(7965), n.e(1606)]).then(function () {
                if (i = n(42531), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 9975: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], Promise.all([n.e(7965), n.e(8920)]).then(function () {
                if (i = n(77779), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 5694: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], Promise.all([n.e(7965), n.e(9428)]).then(function () {
                if (i = n(58562), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 42545: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], Promise.all([n.e(7965), n.e(2637)]).then(function () {
                if (i = n(36311), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 96001: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], Promise.all([n.e(7965), n.e(8296)]).then(function () {
                if (i = n(45866), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 7076: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], Promise.all([n.e(7965), n.e(4250)]).then(function () {
                if (i = n(80295), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 39288: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], Promise.all([n.e(7965), n.e(2214)]).then(function () {
                if (i = n(67478), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 28618: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], Promise.all([n.e(7965), n.e(2020)]).then(function () {
                if (i = n(94273), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 94922: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], Promise.all([n.e(7965), n.e(3378)]).then(function () {
                if (i = n(53225), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 98573: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], Promise.all([n.e(7965), n.e(6144)]).then(function () {
                if (i = n(21408), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 89254: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], n.e(2933).then(function () {
                if (i = n(72050), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 73718: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], n.e(8594).then(function () {
                if (i = n(76740), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 62507: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], n.e(5065).then(function () {
                if (i = n(4481), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 50983: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], n.e(4160).then(function () {
                if (i = n(24739), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 1857: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], Promise.all([n.e(720), n.e(9325), n.e(3009)]).then(function () {
                if (i = n(5579), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 62121: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], Promise.all([n.e(720), n.e(9325), n.e(3009)]).then(function () {
                if (i = n(86134), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 11805: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], Promise.all([n.e(720), n.e(3325)]).then(function () {
                if (i = n(74095), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 98735: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], Promise.all([n.e(720), n.e(4359)]).then(function () {
                if (i = n(97247), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 90505: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], Promise.all([n.e(720), n.e(4359)]).then(function () {
                if (i = n(83510), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 88155: (t, e, n) => {
        var r, i, o = !1;

        function a() {
            r = [], Promise.all([n.e(720), n.e(9983)]).then(function () {
                if (i = n(29415), r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].success(i);
                o = !1, r = null
            }.__pbind(null, n))["catch"]((function () {
                if (r && r.length) for (var t = 0, e = r.length; t < e; t++) r[t] && r[t].error.apply(this, arguments);
                o = !0, r = null
            }))
        }

        t.exports = function (t, e) {
            e = e || function () {
            }, i ? t(i) : (o && a(), r.push({success: t, error: e}))
        }, a()
    }, 7690: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.visibilityObserver = e.DEFAULT_INTERVAL = void 0;
        var r = n(94532), i = n(12251);
        e.DEFAULT_INTERVAL = 300;
        e.visibilityObserver = function (t, n) {
            return void 0 === n && (n = {}), function (o, a) {
                var s, l = {
                    portion: void 0 !== n.portion ? n.portion : 0,
                    interval: void 0 !== n.interval ? n.interval : e.DEFAULT_INTERVAL,
                    overlappedPoints: void 0 !== n.overlappedPoints ? n.overlappedPoints : [[0, 0]]
                }, c = t({
                    portion: Math.max(Number.MIN_VALUE, l.portion),
                    interval: l.interval,
                    overlappedPoints: l.overlappedPoints,
                    element: o,
                    callback: (0, i.protect)("visibilityObserver", (function (t) {
                        s !== t && (s = t, a(t))
                    }))
                });
                if (!c) throw new Error("visibilityObserver: no strategy");
                return c.start(), (0, r.once)((function () {
                    return c.stop()
                }))
            }
        }
    }, 2601: function (t, e, n) {
        "use strict";
        var r = this && this.__assign || function () {
            return r = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }, r.apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {value: !0}), e.AllOfStrategy = void 0;
        var i = n(15735), o = function () {
            function t(t) {
                var e = this;
                this.args = t, this.runningCount = 0, this.callback = function (t, n) {
                    var r = t + 1;
                    n ? r === e.strategies.length ? e.args.callback(n) : r === e.runningCount && e.startNext() : (e.stopUntil(r), e.args.callback(n))
                }, this.strategies = (0, i.map)(t.strategyFactories, (function (t, n) {
                    return t((function (t) {
                        return e.callback(n, t)
                    }))
                }))
            }

            return t.from = function () {
                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                return function (n) {
                    for (var i = [], o = function (t) {
                        var e = function () {
                            return null
                        }, o = t(r(r({}, n), {
                            callback: function (t) {
                                return e(t)
                            }
                        }));
                        if (!o) return {value: null};
                        i.push((function (t) {
                            return e = t, o
                        }))
                    }, a = 0, s = e; a < s.length; a++) {
                        var l = o(s[a]);
                        if ("object" == typeof l) return l.value
                    }
                    return new t({callback: n.callback, strategyFactories: i})
                }
            }, t.prototype.start = function () {
                !this.runningCount && this.strategies.length && this.startNext()
            }, t.prototype.stop = function () {
                this.stopUntil(0)
            }, Object.defineProperty(t.prototype, "isDetermined", {
                get: function () {
                    for (var t = 0, e = this.strategies; t < e.length; t++) {
                        if (!e[t].isDetermined) return !1
                    }
                    return !0
                }, enumerable: !1, configurable: !0
            }), t.prototype.getIsVisible = function () {
                for (var t = 0; t < this.strategies.length; t++) if (!this.strategies[t].getIsVisible()) return !1;
                return !0
            }, t.prototype.startNext = function () {
                this.strategies[this.runningCount++].start()
            }, t.prototype.stopUntil = function (t) {
                for (; this.runningCount > t;) this.strategies[--this.runningCount].stop()
            }, t
        }();
        e.AllOfStrategy = o
    }, 98335: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.DisplayStrategy = void 0;
        var r = n(2601), i = n(16056), o = n(85389), a = function () {
            function t() {
            }

            return t.factory = function (t) {
                return r.AllOfStrategy.from(o.ViewportStrategy.factory, i.OverlayStrategy.factory)(t)
            }, t
        }();
        e.DisplayStrategy = a
    }, 80236: function (t, e, n) {
        "use strict";
        var r = this && this.__createBinding || (Object.create ? function (t, e, n, r) {
            void 0 === r && (r = n);
            var i = Object.getOwnPropertyDescriptor(e, n);
            i && !("get" in i ? !e.__esModule : i.writable || i.configurable) || (i = {
                enumerable: !0,
                get: function () {
                    return e[n]
                }
            }), Object.defineProperty(t, r, i)
        } : function (t, e, n, r) {
            void 0 === r && (r = n), t[r] = e[n]
        }), i = this && this.__setModuleDefault || (Object.create ? function (t, e) {
            Object.defineProperty(t, "default", {enumerable: !0, value: e})
        } : function (t, e) {
            t["default"] = e
        }), o = this && this.__importStar || function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t) for (var n in t) "default" !== n && Object.prototype.hasOwnProperty.call(t, n) && r(e, t, n);
            return i(e, t), e
        };
        Object.defineProperty(e, "__esModule", {value: !0}), e.DocumentStrategy = void 0;
        var a = n(41110), s = o(n(46466)), l = function () {
            function t(t) {
                var e = this;
                this.args = t, this.isDetermined = !0, this.onVisibilityChangeCallback = function () {
                    e.args.callback(e.getIsVisible())
                }
            }

            return t.factory = function (e) {
                return new t(e)
            }, t.prototype.start = function () {
                var t = this;
                this.timer = window.setTimeout((function () {
                    t.onVisibilityChangeCallback(), t.subscription = (0, a.on)(document, s.changeEventName, t.onVisibilityChangeCallback)
                }))
            }, t.prototype.stop = function () {
                window.clearTimeout(this.timer), (0, a.un)(this.subscription)
            }, t.prototype.getIsVisible = function () {
                return !s.isHidden()
            }, t
        }();
        e.DocumentStrategy = l
    }, 53379: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.DummyStrategy = void 0;
        var n = function () {
            function t() {
                this.isDetermined = !1
            }

            return t.factory = function () {
                return new t
            }, t.prototype.start = function () {
            }, t.prototype.stop = function () {
            }, t.prototype.getIsVisible = function () {
                return !0
            }, t
        }();
        e.DummyStrategy = n
    }, 36428: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.GeneralStrategy = void 0;
        var r = n(2601), i = n(98335), o = n(80236), a = n(53379), s = n(35741), l = n(87793), c = n(97741),
            u = n(16056), d = function () {
                function t() {
                }

                return t.factory = c.OneOfStrategy.from(l.MraidStrategy.factory, r.AllOfStrategy.from(o.DocumentStrategy.factory, s.IntersectionStrategy.factory, u.OverlayStrategy.factory), r.AllOfStrategy.from(o.DocumentStrategy.factory, i.DisplayStrategy.factory), a.DummyStrategy.factory), t
            }();
        e.GeneralStrategy = d
    }, 35741: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.IntersectionStrategy = void 0;
        var r = n(65234), i = Math.pow(2, -149), o = function () {
            function t(t) {
                var e = this;
                this.args = t, this.isDetermined = !0, this.callback = function (t) {
                    var n = t[t.length - 1].intersectionRatio >= e.observer.thresholds[0];
                    e.args.callback(n)
                }, this.threshold = Math.max(i, this.args.portion), this.observer = new IntersectionObserver(this.callback, {threshold: this.threshold})
            }

            return t.factory = function (e) {
                return "undefined" == typeof IntersectionObserver ? null : "thresholds" in IntersectionObserver.prototype && e.element ? new t(e) : null
            }, t.prototype.start = function () {
                this.observer.observe(this.args.element)
            }, t.prototype.stop = function () {
                this.observer.disconnect()
            }, t.prototype.getIsVisible = function () {
                return (0, r.isInViewport)(this.args.element, this.threshold)
            }, t
        }();
        e.IntersectionStrategy = o
    }, 61581: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.IntervalStrategy = void 0;
        var r = n(12251), i = function () {
            function t(t) {
                this.args = t, this.isDetermined = !0
            }

            return t.prototype.start = function () {
                var t = this;
                this.timer = window.setInterval((0, r.protect)("visibilityObserver", (function () {
                    t.args.callback(t.isVisible())
                })), this.args.interval)
            }, t.prototype.stop = function () {
                window.clearInterval(this.timer)
            }, t.prototype.getIsVisible = function () {
                return this.isVisible()
            }, t
        }();
        e.IntervalStrategy = i
    }, 87793: function (t, e, n) {
        "use strict";
        var r = this && this.__assign || function () {
            return r = Object.assign || function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }, r.apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {value: !0}), e.MraidStrategy = void 0;
        var i = n(45229), o = n(12251), a = function () {
            function t(e) {
                var n = this;
                this.args = e, this.isDetermined = !0, this.onViewableChange = (0, o.protect)("MRAID::viewableChange", (function () {
                    var t = n.args.mraid;
                    n.check(t.isViewable())
                }), this), this.onExposureChange = (0, o.protect)("MRAID::exposureChange", (function (t) {
                    var e = n.args.portion, r = t / 100;
                    n.check(r >= e)
                }), this);
                var r = e.mraid, i = r.getVersion();
                this.onViewableChange.toString = t.getProtectedToStringFunction(), this.onExposureChange.toString = t.getProtectedToStringFunction(), (parseInt(i, 10) >= 3 || r.__PRIV__ && r.__PRIV__.isYaMraid3FeatureSupported && r.__PRIV__.isYaMraid3FeatureSupported("exposureChange")) && (this.isSupportExposureChange = !0)
            }

            return t.factory = function (e) {
                var n = e.element;
                if (!n) return null;
                var o = i.MraidHelpers.getMraid(n);
                return o ? new t(r(r({}, e), {mraid: o})) : null
            }, t.prototype.start = function () {
                var t = this.args.mraid;
                this.isSupportExposureChange ? t.addEventListener("exposureChange", this.onExposureChange) : (t.addEventListener("viewableChange", this.onViewableChange), setTimeout(this.onViewableChange))
            }, t.prototype.stop = function () {
                var t = this.args.mraid;
                this.isSupportExposureChange ? t.removeEventListener("exposureChange", this.onExposureChange) : t.removeEventListener("viewableChange", this.onViewableChange)
            }, t.prototype.getIsVisible = function () {
                return !0
            }, t.prototype.check = function (t) {
                (0, this.args.callback)(t)
            }, t.callbackCount = 0, t.getProtectedToStringFunction = function () {
                var e = t.callbackCount++;
                return function () {
                    return "pcode-protected-callback-".concat(e)
                }
            }, t
        }();
        e.MraidStrategy = a
    }, 97741: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.OneOfStrategy = void 0;
        var n = function () {
            function t() {
            }

            return t.from = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return function (e) {
                    for (var n = 0, r = t; n < r.length; n++) {
                        var i = (0, r[n])(e);
                        if (i) return i
                    }
                    return null
                }
            }, t
        }();
        e.OneOfStrategy = n
    }, 16056: function (t, e, n) {
        "use strict";
        var r, i = this && this.__extends || (r = function (t, e) {
            return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }, r(t, e)
        }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function n() {
                this.constructor = t
            }

            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", {value: !0}), e.OverlayStrategy = void 0;
        var o = n(1480), a = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }

            return i(e, t), e.factory = function (t) {
                return t.element ? new e(t) : null
            }, e.prototype.isVisible = function () {
                return !(0, o.isOverlapped)(this.args.element, this.args.overlappedPoints)
            }, e
        }(n(61581).IntervalStrategy);
        e.OverlayStrategy = a
    }, 85389: function (t, e, n) {
        "use strict";
        var r, i = this && this.__extends || (r = function (t, e) {
            return r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }, r(t, e)
        }, function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function n() {
                this.constructor = t
            }

            r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        });
        Object.defineProperty(e, "__esModule", {value: !0}), e.ViewportStrategy = void 0;
        var o = n(12773), a = n(69086), s = n(34403), l = function (t) {
            function e(e) {
                var n = t.call(this, e) || this;
                n.args = e, n.windowChain = (0, a.getFriendlyWindowsChain)(window).reverse();
                try {
                    n.isDetermined = Boolean(window.top.location.hostname)
                } catch (t) {
                    n.isDetermined = !1
                }
                return n
            }

            return i(e, t), e.factory = function (t) {
                return t.element ? new e(t) : null
            }, e.prototype.isVisible = function () {
                var t = this, e = (0, s.getBoundingClientRect)(this.args.element), n = e.width * e.height;
                if (n <= 0) return !1;
                var r = (0, o.reduce)(this.windowChain, (function (e, n) {
                    return t.getFrameVisiblePart(n, e)
                }), void 0), i = Math.max(e.left, r.left), a = Math.max(e.top, r.top);
                return (Math.min(e.right, r.right) - i) * (Math.min(e.bottom, r.bottom) - a) >= Math.floor(n * this.args.portion)
            }, e.prototype.getFrameVisiblePart = function (t, e) {
                if (!e || !t.frameElement) return {left: 0, right: t.innerWidth, top: 0, bottom: t.innerHeight};
                var n = (0, s.getBoundingClientRect)(t.frameElement);
                return {
                    left: Math.max(e.left - n.left, 0),
                    right: t.innerWidth - Math.max(n.right - e.right, 0),
                    top: Math.max(e.top - n.top, 0),
                    bottom: t.innerHeight - Math.max(n.bottom - e.bottom, 0)
                }
            }, e
        }(n(61581).IntervalStrategy);
        e.ViewportStrategy = l
    }, 39698: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.checkVisibility = e.removeObserver = e.addObserver = void 0;
        var r, i = n(35930), o = n(5989), a = {};

        function s(t) {
            return t ? {inScreen: t.ratio > 0, ratio: t.ratio} : {inScreen: !1, ratio: 0}
        }

        function l(t, e, n) {
            a[t] = {callback: n, ratio: 0}, r.observe(e)
        }

        e.addObserver = function (t, e, n) {
            var c = (0, o.getElementById)(t, n);
            c && (i.isIntersectionObserverSupported ? (r || (r = new IntersectionObserver((function (t) {
                t.forEach((function (t) {
                    var e = t.target.getAttribute("id");
                    if (e) {
                        var n = Math.round(1e4 * t.intersectionRatio) / 1e4, r = a[e];
                        r && (r.ratio = n, r.callback(s(r)))
                    }
                }))
            }), {
                root: null,
                rootMargin: "0px",
                threshold: [.01, .3, .45, .5, .7]
            })), l(t, c, e)) : setTimeout((function () {
                e({inScreen: !0, ratio: 1})
            }), 0))
        }, e.removeObserver = function (t, e) {
            var n = (0, o.getElementById)(t, e);
            delete a[t], n && i.isIntersectionObserverSupported && r && r.unobserve(n)
        }, e.checkVisibility = function (t, e) {
            return new Promise((function (n) {
                var r = a[t];
                if (r) n(s(r)); else {
                    var i = (0, o.getElementById)(t, e);
                    i ? l(t, i, (function (t) {
                        n(t)
                    })) : n(s(null))
                }
            }))
        }
    }, 51163: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.isInViewport = e.viewportObserver = void 0;
        var r = n(43945);
        e.viewportObserver = new r.ViewportObserver, e.isInViewport = r.isInViewport
    }, 47717: (t, e, n) => {
        t.exports = {
            SSR: {
                async: !1, module: function (t) {
                    t(n(62596))
                }
            }, ZEN2: {
                async: !0, module: function (t, e) {
                    n(98151)(t, e)
                }
            }
        }
    }, 17811: (t, e, n) => {
        t.exports = n(75406)
    }, 38879: (t, e, n) => {
        var r = n(71013), i = r._getCss;
        (t.exports = r)._getCss = function (t) {
            return t = t || "", i().replace(/__id__/g, t)
        }
    }, 38455: (t, e, n) => {
        var r = n(24166), i = r._getCss;
        (t.exports = r)._getCss = function (t) {
            return t = t || "", i().replace(/__id__/g, t)
        }
    }, 74729: (t, e, n) => {
        var r = n(99689), i = r._getCss;
        (t.exports = r)._getCss = function (t) {
            return t = t || "", i().replace(/__id__/g, t)
        }
    }, 68902: (t, e, n) => {
        var r = n(95548), i = r._getCss;
        (t.exports = r)._getCss = function (t) {
            return t = t || "", i().replace(/__id__/g, t)
        }
    }, 44736: (t, e, n) => {
        var r = n(50038), i = r._getCss;
        (t.exports = r)._getCss = function (t) {
            return t = t || "", i().replace(/__id__/g, t)
        }
    }, 48629: (t, e, n) => {
        var r = n(83865);
        t.exports = function (t, e) {
            return r.getAlias(r.getClassName("x9afe9c4f", t), e)
        }
    }, 45608: (t, e, n) => {
        var r = n(83865);
        t.exports = function (t, e) {
            return r.getAlias(r.getClassName("cb82e8d51", t), e)
        }
    }, 81330: (t, e, n) => {
        var r = n(83865);
        t.exports = function (t, e) {
            return r.getAlias(r.getClassName("j543ee4d7", t), e)
        }
    }, 47522: (t, e, n) => {
        var r = n(83865);
        t.exports = function (t, e) {
            return r.getAlias(r.getClassName("wa870df72", t), e)
        }
    }, 72646: t => {
        t.exports = function (t) {
            var e = [];
            return e.push(".", t.id, "{opacity:", t.opacity, " !important;white-space:normal !important;visibility:visible !important}.", t.id, ",.", t.id, " yatag{display:block !important;font-family:inherit !important}.", t.id, ",.", t.id, ",.", t.id, " a,.", t.id, " b,.", t.id, " em,.", t.id, " iframe,.", t.id, " img,.", t.id, " table,.", t.id, " tbody,.", t.id, " td,.", t.id, " tr,.", t.id, " yatag{-webkit-box-sizing:content-box !important;box-sizing:content-box !important;color:inherit !important;font-size:inherit !important;font-weight:inherit !important;-webkit-hyphens:manual !important;-ms-hyphens:manual !important;hyphens:manual !important;-webkit-transition:none !important;-o-transition:none !important;transition:none !important}.", t.id, ",.", t.id, " a,.", t.id, " b,.", t.id, " em,.", t.id, " iframe,.", t.id, " img,.", t.id, " table,.", t.id, " tbody,.", t.id, " td,.", t.id, " tr{background:none !important;border:none !important;border-radius:0 !important;border-spacing:0 !important;border-collapse:collapse !important;clear:none !important;float:none !important;font-variant:normal !important;letter-spacing:normal !important;line-height:normal !important;margin:0 !important;max-height:none !important;max-width:none !important;min-height:0 !important;min-width:0 !important;outline:none !important;padding:0 !important;position:static !important;text-align:left !important;text-decoration:none !important;text-indent:0 !important;text-transform:none !important;vertical-align:baseline !important;visibility:inherit !important;word-spacing:normal !important}.", t.id, ",.", t.id, " a,.", t.id, " b,.", t.id, " em,.", t.id, " img,.", t.id, " table,.", t.id, " tbody,.", t.id, " td,.", t.id, " tr{height:auto !important}.", t.id, " table{display:table !important;empty-cells:hide !important;table-layout:fixed !important}.", t.id, " table,.", t.id, " td{font-size:100% !important}.", t.id, " td{display:table-cell !important;vertical-align:middle !important}.", t.id, "{width:", t.honeyWidth, " !important;height:", t.honeyHeight, " !important;overflow:", t.visibility, " !important}"), e.join("")
        }
    }, 82845: t => {
        t.exports = function (t) {
            var e = [];
            return e.push(".", t.id, " .g31b601a4{position:relative !important;margin:auto !important;display:-webkit-box !important;display:-ms-flexbox !important;display:flex !important;-webkit-box-pack:center !important;-ms-flex-pack:center !important;justify-content:center !important;-webkit-box-align:center !important;-ms-flex-align:center !important;align-items:center !important;overflow:hidden !important}.", t.id, " .m6bf5f604{padding:10px 16px 86px !important}.", t.id, " .m53693650{padding:10px 16px 20px !important}.", t.id, " .tcbf1784b,.", t.id, " .r476f2ae9{position:absolute !important;z-index:1 !important;top:0 !important;left:0 !important;right:0 !important;bottom:0 !important;width:100% !important;height:100% !important;display:none !important}.", t.id, " .neecd7e2c{width:100% !important;height:100% !important;position:absolute !important;pointer-events:none !important}.", t.id, " .j39cc73a3{position:relative !important;z-index:2 !important}.", t.id, " .m22444b14{position:relative !important;top:0 !important;left:0 !important;width:100% !important;height:100% !important;-webkit-transform-origin:0 0 !important;transform-origin:0 0 !important}.", t.id, " .m22444b14 iframe{position:absolute !important;top:0 !important;left:0 !important;width:100% !important;height:100% !important}.", t.id, " .va0d9b98b{position:absolute !important;width:100% !important;right:0 !important;top:0 !important;z-index:20 !important}.", t.id, " .g66330b93{position:absolute !important;z-index:21 !important;top:0 !important;left:0 !important;width:100% !important;height:100% !important}.", t.id, " .h9c835361{position:absolute !important;top:0 !important;left:0 !important;z-index:10 !important;height:16px !important;padding:0 4px !important;font-size:11px !important;line-height:16px !important;color:#000 !important;text-decoration:none !important;background:#fff !important;border:1px solid #e5e5e5 !important;border-bottom-right-radius:3px !important;cursor:pointer !important}.", t.id, " .ued72bda5{border:1px solid #303050 !important}.", t.id, " .b1d639bc1{max-width:100% !important;max-height:100% !important}.", t.id, " .b1d639bc1 .tcbf1784b,.", t.id, " .b1d639bc1 .r476f2ae9{display:block !important}.", t.id, " .b1d639bc1 .r476f2ae9{-webkit-filter:blur(10px) saturate(0) contrast(400%) !important;filter:blur(10px) saturate(0) contrast(400%) !important}.", t.id, " .b1d639bc1 .tcbf1784b{background-color:rgba(38,38,38,.9) !important}.", t.id, " .d2209f767{-webkit-box-pack:start !important;-ms-flex-pack:start !important;justify-content:flex-start !important}.", t.id, " .fea752453,.", t.id, " .ld21832bb{visibility:hidden !important;opacity:0 !important}.", t.id, " .ld21832bb{max-width:1px !important;max-height:1px !important}.", t.id, " .o6f0b5f61{position:absolute !important;bottom:20px !important;left:16px !important;right:16px !important;z-index:3 !important;display:-webkit-box !important;display:-ms-flexbox !important;display:flex !important}.", t.id, " .ybdce7eb2{height:48px !important;line-height:48px !important;font-size:16px !important;border-radius:8px !important;text-align:center !important;font-weight:700 !important;-ms-flex-item-align:stretch !important;align-self:stretch !important;padding:0 20px !important;white-space:nowrap !important;min-width:0 !important}.", t.id, " .u55a563c9{background:-webkit-gradient(linear,left top,left bottom,from(#efefef),to(#e5e5e5)) !important;background:-o-linear-gradient(top,#efefef 0,#e5e5e5 100%) !important;background:linear-gradient(180deg,#efefef,#e5e5e5) !important;margin-right:8px !important;-webkit-box-flex:2 !important;-ms-flex:2 1 !important;flex:2 1 !important}.", t.id, " .sa08e4697{background:-webkit-gradient(linear,left top,right top,color-stop(-40%,#f60),color-stop(20%,rgba(255,102,0,0))),-webkit-gradient(linear,right top,left top,color-stop(-40%,#f60),color-stop(20%,rgba(255,102,0,0))),-webkit-gradient(linear,left bottom,left top,color-stop(-80%,#f60),color-stop(80%,#fd0)) !important;background:-o-linear-gradient(left,#f60 -40%,rgba(255,102,0,0) 20%),-o-linear-gradient(right,#f60 -40%,rgba(255,102,0,0) 20%),-o-linear-gradient(bottom,#f60 -80%,#fd0 80%) !important;background:linear-gradient(90deg,#f60 -40%,rgba(255,102,0,0) 20%),linear-gradient(270deg,#f60 -40%,rgba(255,102,0,0) 20%),linear-gradient(0deg,#f60 -80%,#fd0 80%) !important;-webkit-box-flex:3 !important;-ms-flex:3 1 !important;flex:3 1 !important}.", t.id, " .c14f3407d{display:inline-block !important;margin-left:8px !important}"), e.join("")
        }
    }, 88854: t => {
        t.exports = function (t) {
            var e = [];
            return e.push(".", t.id, " .ec012ec76{position:absolute !important;width:100% !important;right:0 !important;top:0 !important;z-index:20 !important}.", t.id, " .p70de106e{position:absolute !important;z-index:21 !important;top:0 !important;left:0 !important;width:100% !important;height:100% !important}"), e.join("")
        }
    }, 24073: t => {
        t.exports = function (t) {
            var e = [];
            return e.push(".", t.id, " .pb639b14{position:absolute !important;left:-1000px !important;top:-1000px !important;width:1px !important;height:1px !important;display:block !important}"), e.join("")
        }
    }, 1550: t => {
        t.exports = function (t) {
            var e = [];
            return e.push('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><base href="', t.baseURL, '" target="_blank"/>'), t.additionalStyles && e.push('<style nonce="', t.nonce, '">', t.additionalStyles, "</style>"), e.push("</head><body>"), t.url ? e.push('<script nonce="', t.nonce, '">window.location = "', t.url, '";<\/script>') : (e.push(""), t.blockSettings && e.push('<script nonce="', t.nonce, '">window.pcodeBlockSettings = ', t.blockSettings, ";<\/script>"), e.push("", t.html, "")), e.push("</body></html>"), e.join("")
        }
    }, 8532: (t, e, n) => {
        t.exports = function (t) {
            return n("25" == t ? 8874 : "4" == t ? 77480 : "20" == t ? 81380 : "18" == t ? 65017 : "3" == t ? 54566 : "19" == t ? 9393 : "22" == t ? 97809 : "16" == t ? 52012 : "23" == t ? 53436 : "24" == t ? 73331 : "5" == t ? 46124 : "21" == t ? 69200 : "15" == t ? 88497 : "1" == t ? 39996 : "6" == t ? 22450 : "2" == t ? 11634 : 72535)
        }
    }, 82244: (t, e, n) => {
        t.exports = function (t) {
            return n("25" == t ? 18359 : "4" == t ? 74665 : "20" == t ? 62555 : "18" == t ? 81030 : "3" == t ? 37838 : "19" == t ? 91395 : "22" == t ? 34260 : "16" == t ? 90113 : "23" == t ? 84682 : "24" == t ? 6721 : "5" == t ? 11222 : "21" == t ? 34508 : "15" == t ? 85331 : "1" == t ? 88599 : "6" == t ? 2850 : "2" == t ? 9570 : 84667)
        }
    }, 14705: (t, e, n) => {
        t.exports = function (t) {
            return n("25" == t ? 83329 : "4" == t ? 68446 : "20" == t ? 1333 : "18" == t ? 4253 : "3" == t ? 51929 : "19" == t ? 41440 : "22" == t ? 70901 : "16" == t ? 9975 : "23" == t ? 5694 : "24" == t ? 42545 : "5" == t ? 96001 : "21" == t ? 7076 : "15" == t ? 39288 : "1" == t ? 28618 : "6" == t ? 94922 : "2" == t ? 98573 : 67920)
        }
    }
}]);