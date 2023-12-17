(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[888], {
    9642: function(e, n, t) {
        "use strict";
        function r() {
            return (r = Object.assign || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var r in t)
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function o(e, n) {
            if (null == e)
                return {};
            var t, r, o = {}, a = Object.keys(e);
            for (r = 0; r < a.length; r++)
                t = a[r],
                n.indexOf(t) >= 0 || (o[t] = e[t]);
            return o
        }
        function a(e, n) {
            (null == n || n > e.length) && (n = e.length);
            for (var t = 0, r = new Array(n); t < n; t++)
                r[t] = e[t];
            return r
        }
        function i(e, n) {
            var t;
            if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (t = function(e, n) {
                    if (e) {
                        if ("string" === typeof e)
                            return a(e, n);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === t && e.constructor && (t = e.constructor.name),
                        "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? a(e, n) : void 0
                    }
                }(e)) || n && e && "number" === typeof e.length) {
                    t && (e = t);
                    var r = 0;
                    return function() {
                        return r >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[r++]
                        }
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            return (t = e[Symbol.iterator]()).next.bind(t)
        }
        t.d(n, {
            Ul: function() {
                return i
            },
            gY: function() {
                return r
            },
            gK: function() {
                return o
            }
        })
    },
    2659: function(e, n, t) {
        "use strict";
        var r;
        t.d(n, {
            R: function() {
                return r
            }
        }),
        function(e) {
            e.Space = " ",
            e.Enter = "Enter",
            e.Escape = "Escape",
            e.Backspace = "Backspace",
            e.ArrowLeft = "ArrowLeft",
            e.ArrowUp = "ArrowUp",
            e.ArrowRight = "ArrowRight",
            e.ArrowDown = "ArrowDown",
            e.Home = "Home",
            e.End = "End",
            e.PageUp = "PageUp",
            e.PageDown = "PageDown",
            e.Tab = "Tab"
        }(r || (r = {}))
    },
    2506: function(e, n, t) {
        "use strict";
        t.d(n, {
            M: function() {
                return u
            }
        });
        var r = t(7294)
          , o = t(852)
          , a = t(5989)
          , i = 0;
        function s() {
            return ++i
        }
        function u() {
            var e = (0,
            a.H)()
              , n = (0,
            r.useState)(e ? s : null)
              , t = n[0]
              , i = n[1];
            return (0,
            o.e)((function() {
                null === t && i(s())
            }
            ), [t]),
            null != t ? "" + t : void 0
        }
    },
    852: function(e, n, t) {
        "use strict";
        t.d(n, {
            e: function() {
                return o
            }
        });
        var r = t(7294)
          , o = "undefined" !== typeof window ? r.useLayoutEffect : r.useEffect
    },
    6637: function(e, n, t) {
        "use strict";
        t.d(n, {
            f: function() {
                return i
            }
        });
        var r = t(7294)
          , o = t(852);
        function a(e) {
            var n;
            if (e.type)
                return e.type;
            var t = null != (n = e.as) ? n : "button";
            return "string" === typeof t && "button" === t.toLowerCase() ? "button" : void 0
        }
        function i(e, n) {
            var t = (0,
            r.useState)((function() {
                return a(e)
            }
            ))
              , i = t[0]
              , s = t[1];
            return (0,
            o.e)((function() {
                s(a(e))
            }
            ), [e.type, e.as]),
            (0,
            o.e)((function() {
                i || n.current && n.current instanceof HTMLButtonElement && !n.current.hasAttribute("type") && s("button")
            }
            ), [i, n]),
            i
        }
    },
    5989: function(e, n, t) {
        "use strict";
        t.d(n, {
            H: function() {
                return a
            }
        });
        var r = t(7294)
          , o = {
            serverHandoffComplete: !1
        };
        function a() {
            var e = (0,
            r.useState)(o.serverHandoffComplete)
              , n = e[0]
              , t = e[1];
            return (0,
            r.useEffect)((function() {
                !0 !== n && t(!0)
            }
            ), [n]),
            (0,
            r.useEffect)((function() {
                !1 === o.serverHandoffComplete && (o.serverHandoffComplete = !0)
            }
            ), []),
            n
        }
    },
    7471: function(e, n, t) {
        "use strict";
        t.d(n, {
            T: function() {
                return a
            }
        });
        var r = t(9642)
          , o = t(7294);
        function a() {
            for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
                n[t] = arguments[t];
            var a = (0,
            o.useRef)(n);
            return (0,
            o.useEffect)((function() {
                a.current = n
            }
            ), [n]),
            (0,
            o.useCallback)((function(e) {
                for (var n, t = (0,
                r.Ul)(a.current); !(n = t()).done; ) {
                    var o = n.value;
                    null != o && ("function" === typeof o ? o(e) : o.current = e)
                }
            }
            ), [a])
        }
    },
    3980: function(e, n, t) {
        "use strict";
        t.d(n, {
            up: function() {
                return s
            },
            ZM: function() {
                return r
            },
            oJ: function() {
                return i
            }
        });
        var r, o = t(7294), a = (0,
        o.createContext)(null);
        function i() {
            return (0,
            o.useContext)(a)
        }
        function s(e) {
            var n = e.value
              , t = e.children;
            return o.createElement(a.Provider, {
                value: n
            }, t)
        }
        a.displayName = "OpenClosedContext",
        function(e) {
            e[e.Open = 0] = "Open",
            e[e.Closed = 1] = "Closed"
        }(r || (r = {}))
    },
    9016: function(e, n, t) {
        "use strict";
        function r(e) {
            for (var n, t, r = e.parentElement, o = null; r && !(r instanceof HTMLFieldSetElement); )
                r instanceof HTMLLegendElement && (o = r),
                r = r.parentElement;
            var a = null != (n = "" === (null == (t = r) ? void 0 : t.getAttribute("disabled"))) && n;
            return (!a || !function(e) {
                if (!e)
                    return !1;
                var n = e.previousElementSibling;
                for (; null !== n; ) {
                    if (n instanceof HTMLLegendElement)
                        return !1;
                    n = n.previousElementSibling
                }
                return !0
            }(o)) && a
        }
        t.d(n, {
            P: function() {
                return r
            }
        })
    },
    133: function(e, n, t) {
        "use strict";
        function r(e, n) {
            if (e in n) {
                for (var t = n[e], o = arguments.length, a = new Array(o > 2 ? o - 2 : 0), i = 2; i < o; i++)
                    a[i - 2] = arguments[i];
                return "function" === typeof t ? t.apply(void 0, a) : t
            }
            var s = new Error('Tried to handle "' + e + '" but there is no handler defined. Only defined handlers are: ' + Object.keys(n).map((function(e) {
                return '"' + e + '"'
            }
            )).join(", ") + ".");
            throw Error.captureStackTrace && Error.captureStackTrace(s, r),
            s
        }
        t.d(n, {
            E: function() {
                return r
            }
        })
    },
    8529: function(e, n, t) {
        "use strict";
        t.d(n, {
            AN: function() {
                return r
            },
            l4: function() {
                return o
            },
            yV: function() {
                return c
            },
            sY: function() {
                return u
            }
        });
        var r, o, a = t(9642), i = t(7294), s = t(133);
        function u(e) {
            var n = e.props
              , t = e.slot
              , i = e.defaultTag
              , u = e.features
              , c = e.visible
              , f = void 0 === c || c
              , d = e.name;
            if (f)
                return l(n, t, i, d);
            var p = null != u ? u : r.None;
            if (p & r.Static) {
                var m = n.static
                  , v = void 0 !== m && m
                  , g = (0,
                a.gK)(n, ["static"]);
                if (v)
                    return l(g, t, i, d)
            }
            if (p & r.RenderStrategy) {
                var h, x = n.unmount, y = void 0 === x || x, b = (0,
                a.gK)(n, ["unmount"]), w = y ? o.Unmount : o.Hidden;
                return (0,
                s.E)(w, ((h = {})[o.Unmount] = function() {
                    return null
                }
                ,
                h[o.Hidden] = function() {
                    return l((0,
                    a.gY)({}, b, {
                        hidden: !0,
                        style: {
                            display: "none"
                        }
                    }), t, i, d)
                }
                ,
                h))
            }
            return l(n, t, i, d)
        }
        function l(e, n, t, r) {
            var o;
            void 0 === n && (n = {});
            var s = f(e, ["unmount", "static"])
              , u = s.as
              , l = void 0 === u ? t : u
              , c = s.children
              , d = s.refName
              , p = void 0 === d ? "ref" : d
              , m = (0,
            a.gK)(s, ["as", "children", "refName"])
              , v = void 0 !== e.ref ? ((o = {})[p] = e.ref,
            o) : {}
              , g = "function" === typeof c ? c(n) : c;
            if (m.className && "function" === typeof m.className && (m.className = m.className(n)),
            l === i.Fragment && Object.keys(m).length > 0) {
                if (!(0,
                i.isValidElement)(g) || Array.isArray(g) && g.length > 1)
                    throw new Error(['Passing props on "Fragment"!', "", "The current component <" + r + ' /> is rendering a "Fragment".', "However we need to passthrough the following props:", Object.keys(m).map((function(e) {
                        return "  - " + e
                    }
                    )).join("\n"), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((function(e) {
                        return "  - " + e
                    }
                    )).join("\n")].join("\n"));
                return (0,
                i.cloneElement)(g, Object.assign({}, function(e, n, t) {
                    for (var r, o = Object.assign({}, e), i = function() {
                        var t, a = r.value;
                        void 0 !== e[a] && void 0 !== n[a] && Object.assign(o, ((t = {})[a] = function(t) {
                            t.defaultPrevented || e[a](t),
                            t.defaultPrevented || n[a](t)
                        }
                        ,
                        t))
                    }, s = (0,
                    a.Ul)(t); !(r = s()).done; )
                        i();
                    return o
                }(function(e) {
                    var n = Object.assign({}, e);
                    for (var t in n)
                        void 0 === n[t] && delete n[t];
                    return n
                }(f(m, ["ref"])), g.props, ["onClick"]), v))
            }
            return (0,
            i.createElement)(l, Object.assign({}, f(m, ["ref"]), l !== i.Fragment && v), g)
        }
        function c(e) {
            var n;
            return Object.assign((0,
            i.forwardRef)(e), {
                displayName: null != (n = e.displayName) ? n : e.name
            })
        }
        function f(e, n) {
            void 0 === n && (n = []);
            for (var t, r = Object.assign({}, e), o = (0,
            a.Ul)(n); !(t = o()).done; ) {
                var i = t.value;
                i in r && delete r[i]
            }
            return r
        }
        !function(e) {
            e[e.None = 0] = "None",
            e[e.RenderStrategy = 1] = "RenderStrategy",
            e[e.Static = 2] = "Static"
        }(r || (r = {})),
        function(e) {
            e[e.Unmount = 0] = "Unmount",
            e[e.Hidden = 1] = "Hidden"
        }(o || (o = {}))
    },
    6373: function(e, n, t) {
        "use strict";
        t.d(n, {
            s9: function() {
                return r
            },
            pF: function() {
                return o
            },
            G: function() {
                return a
            },
            Af: function() {
                return i
            }
        });
        var r = [{
            id: 0,
            level: "LV-1-3"
        }, {
            id: 1,
            level: "LV-2-3"
        }, {
            id: 2,
            level: "LV-3-3"
        }]
          , o = [{
            id: 0,
            leveltwo: "LV-1/3"
        }, {
            id: 1,
            leveltwo: "LV-2/3"
        }, {
            id: 2,
            leveltwo: "LV-3/3"
        }, {
            id: 3,
            leveltwo: "LV-4/4"
        }]
          , a = [{
            name: "ABOUT US",
            href: "/about"
        }, {
            name: "PASSCARD",
            href: "/passcard"
        }, {
            name: "PROFILE",
            href: "/profile"
        }]
          , i = [{
            name: "ABOUT US",
            href: "/about"
        }, {
            name: "PASSCARD",
            href: "/passcard"
        }, {
            name: "PROFILE",
            href: "/profile"
        }, {
            name: "LOGIN",
            href: "/login"
        }, {
            name: "SIGN UP",
            href: "/signup"
        }]
    },
    5224: function(e, n, t) {
        "use strict";
        function r(e, n, t) {
            return n in e ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[n] = t,
            e
        }
        t.r(n),
        t.d(n, {
            default: function() {
                return _
            }
        });
        t(3498);
        var o, a, i, s = t(9642), u = t(7294), l = t(133), c = t(8529), f = t(7471), d = t(2659), p = t(9016), m = t(2506), v = t(3980), g = t(6637);
        !function(e) {
            e[e.Open = 0] = "Open",
            e[e.Closed = 1] = "Closed"
        }(a || (a = {})),
        function(e) {
            e[e.ToggleDisclosure = 0] = "ToggleDisclosure",
            e[e.CloseDisclosure = 1] = "CloseDisclosure",
            e[e.SetButtonId = 2] = "SetButtonId",
            e[e.SetPanelId = 3] = "SetPanelId",
            e[e.LinkPanel = 4] = "LinkPanel",
            e[e.UnlinkPanel = 5] = "UnlinkPanel"
        }(i || (i = {}));
        var h = ((o = {})[i.ToggleDisclosure] = function(e) {
            var n;
            return (0,
            s.gY)({}, e, {
                disclosureState: (0,
                l.E)(e.disclosureState, (n = {},
                n[a.Open] = a.Closed,
                n[a.Closed] = a.Open,
                n))
            })
        }
        ,
        o[i.CloseDisclosure] = function(e) {
            return e.disclosureState === a.Closed ? e : (0,
            s.gY)({}, e, {
                disclosureState: a.Closed
            })
        }
        ,
        o[i.LinkPanel] = function(e) {
            return !0 === e.linkedPanel ? e : (0,
            s.gY)({}, e, {
                linkedPanel: !0
            })
        }
        ,
        o[i.UnlinkPanel] = function(e) {
            return !1 === e.linkedPanel ? e : (0,
            s.gY)({}, e, {
                linkedPanel: !1
            })
        }
        ,
        o[i.SetButtonId] = function(e, n) {
            return e.buttonId === n.buttonId ? e : (0,
            s.gY)({}, e, {
                buttonId: n.buttonId
            })
        }
        ,
        o[i.SetPanelId] = function(e, n) {
            return e.panelId === n.panelId ? e : (0,
            s.gY)({}, e, {
                panelId: n.panelId
            })
        }
        ,
        o)
          , x = (0,
        u.createContext)(null);
        function y(e) {
            var n = (0,
            u.useContext)(x);
            if (null === n) {
                var t = new Error("<" + e + " /> is missing a parent <" + O.name + " /> component.");
                throw Error.captureStackTrace && Error.captureStackTrace(t, y),
                t
            }
            return n
        }
        x.displayName = "DisclosureContext";
        var b = (0,
        u.createContext)(null);
        function w(e) {
            var n = (0,
            u.useContext)(b);
            if (null === n) {
                var t = new Error("<" + e + " /> is missing a parent <" + O.name + " /> component.");
                throw Error.captureStackTrace && Error.captureStackTrace(t, w),
                t
            }
            return n
        }
        b.displayName = "DisclosureAPIContext";
        var j = (0,
        u.createContext)(null);
        function k(e, n) {
            return (0,
            l.E)(n.type, h, e, n)
        }
        j.displayName = "DisclosurePanelContext";
        var E = u.Fragment;
        function O(e) {
            var n, t = e.defaultOpen, r = void 0 !== t && t, o = (0,
            s.gK)(e, ["defaultOpen"]), f = "headlessui-disclosure-button-" + (0,
            m.M)(), d = "headlessui-disclosure-panel-" + (0,
            m.M)(), p = (0,
            u.useReducer)(k, {
                disclosureState: r ? a.Open : a.Closed,
                linkedPanel: !1,
                buttonId: f,
                panelId: d
            }), g = p[0].disclosureState, h = p[1];
            (0,
            u.useEffect)((function() {
                return h({
                    type: i.SetButtonId,
                    buttonId: f
                })
            }
            ), [f, h]),
            (0,
            u.useEffect)((function() {
                return h({
                    type: i.SetPanelId,
                    panelId: d
                })
            }
            ), [d, h]);
            var y = (0,
            u.useCallback)((function(e) {
                h({
                    type: i.CloseDisclosure
                });
                var n = e ? e instanceof HTMLElement ? e : e.current instanceof HTMLElement ? e.current : document.getElementById(f) : document.getElementById(f);
                null == n || n.focus()
            }
            ), [h, f])
              , w = (0,
            u.useMemo)((function() {
                return {
                    close: y
                }
            }
            ), [y])
              , j = (0,
            u.useMemo)((function() {
                return {
                    open: g === a.Open,
                    close: y
                }
            }
            ), [g, y]);
            return u.createElement(x.Provider, {
                value: p
            }, u.createElement(b.Provider, {
                value: w
            }, u.createElement(v.up, {
                value: (0,
                l.E)(g, (n = {},
                n[a.Open] = v.ZM.Open,
                n[a.Closed] = v.ZM.Closed,
                n))
            }, (0,
            c.sY)({
                props: o,
                slot: j,
                defaultTag: E,
                name: "Disclosure"
            }))))
        }
        var S = (0,
        c.yV)((function e(n, t) {
            var r = y([O.name, e.name].join("."))
              , o = r[0]
              , l = r[1]
              , m = (0,
            u.useRef)(null)
              , v = (0,
            f.T)(m, t)
              , h = (0,
            u.useContext)(j)
              , x = null !== h && h === o.panelId
              , b = (0,
            u.useCallback)((function(e) {
                var n;
                if (x) {
                    if (o.disclosureState === a.Closed)
                        return;
                    switch (e.key) {
                    case d.R.Space:
                    case d.R.Enter:
                        e.preventDefault(),
                        e.stopPropagation(),
                        l({
                            type: i.ToggleDisclosure
                        }),
                        null == (n = document.getElementById(o.buttonId)) || n.focus()
                    }
                } else
                    switch (e.key) {
                    case d.R.Space:
                    case d.R.Enter:
                        e.preventDefault(),
                        e.stopPropagation(),
                        l({
                            type: i.ToggleDisclosure
                        })
                    }
            }
            ), [l, x, o.disclosureState])
              , w = (0,
            u.useCallback)((function(e) {
                switch (e.key) {
                case d.R.Space:
                    e.preventDefault()
                }
            }
            ), [])
              , k = (0,
            u.useCallback)((function(e) {
                var t;
                (0,
                p.P)(e.currentTarget) || (n.disabled || (x ? (l({
                    type: i.ToggleDisclosure
                }),
                null == (t = document.getElementById(o.buttonId)) || t.focus()) : l({
                    type: i.ToggleDisclosure
                })))
            }
            ), [l, n.disabled, o.buttonId, x])
              , E = (0,
            u.useMemo)((function() {
                return {
                    open: o.disclosureState === a.Open
                }
            }
            ), [o])
              , S = (0,
            g.f)(n, m)
              , N = n
              , P = x ? {
                ref: v,
                type: S,
                onKeyDown: b,
                onClick: k
            } : {
                ref: v,
                id: o.buttonId,
                type: S,
                "aria-expanded": n.disabled ? void 0 : o.disclosureState === a.Open,
                "aria-controls": o.linkedPanel ? o.panelId : void 0,
                onKeyDown: b,
                onKeyUp: w,
                onClick: k
            };
            return (0,
            c.sY)({
                props: (0,
                s.gY)({}, N, P),
                slot: E,
                defaultTag: "button",
                name: "Disclosure.Button"
            })
        }
        ))
          , N = c.AN.RenderStrategy | c.AN.Static
          , P = (0,
        c.yV)((function e(n, t) {
            var r = y([O.name, e.name].join("."))
              , o = r[0]
              , l = r[1]
              , d = w([O.name, e.name].join(".")).close
              , p = (0,
            f.T)(t, (function() {
                o.linkedPanel || l({
                    type: i.LinkPanel
                })
            }
            ))
              , m = (0,
            v.oJ)()
              , g = null !== m ? m === v.ZM.Open : o.disclosureState === a.Open;
            (0,
            u.useEffect)((function() {
                return function() {
                    return l({
                        type: i.UnlinkPanel
                    })
                }
            }
            ), [l]),
            (0,
            u.useEffect)((function() {
                var e;
                o.disclosureState !== a.Closed || null != (e = n.unmount) && !e || l({
                    type: i.UnlinkPanel
                })
            }
            ), [o.disclosureState, n.unmount, l]);
            var h = (0,
            u.useMemo)((function() {
                return {
                    open: o.disclosureState === a.Open,
                    close: d
                }
            }
            ), [o, d])
              , x = {
                ref: p,
                id: o.panelId
            }
              , b = n;
            return u.createElement(j.Provider, {
                value: o.panelId
            }, (0,
            c.sY)({
                props: (0,
                s.gY)({}, b, x),
                slot: h,
                defaultTag: "div",
                features: N,
                visible: g,
                name: "Disclosure.Panel"
            }))
        }
        ));
        O.Button = S,
        O.Panel = P;
        var C = function(e) {
            return u.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
            }, e), u.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M4 6h16M4 12h16M4 18h16"
            }))
        };
        var I = function(e) {
            return u.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
            }, e), u.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            }))
        };
        var L = function(e) {
            return u.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
            }, e), u.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            }))
        };
        var T = function(e) {
            return u.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
            }, e), u.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M6 18L18 6M6 6l12 12"
            }))
        };
        var A = t(6373)
          , D = t(5893);
        function M() {
            for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
                n[t] = arguments[t];
            return n.filter(Boolean).join(" ")
        }
        function U() {
            return (0,
            D.jsx)(O, {
                as: "nav",
                className: "bg-white border-b",
                children: function(e) {
                    var n = e.open;
                    return (0,
                    D.jsxs)(D.Fragment, {
                        children: [(0,
                        D.jsx)("div", {
                            className: "max-w-7xl mx-auto px-2 sm:px-6 lg:px-8",
                            children: (0,
                            D.jsxs)("div", {
                                className: "relative flex items-center justify-between h-16",
                                children: [(0,
                                D.jsx)("div", {
                                    className: "absolute inset-y-0 left-0 flex items-center sm:hidden",
                                    children: (0,
                                    D.jsxs)(O.Button, {
                                        className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                                        children: [(0,
                                        D.jsx)("span", {
                                            className: "sr-only",
                                            children: "Open main menu"
                                        }), n ? (0,
                                        D.jsx)(T, {
                                            className: "block h-6 w-6",
                                            "aria-hidden": "true"
                                        }) : (0,
                                        D.jsx)(C, {
                                            className: "block h-6 w-6",
                                            "aria-hidden": "true"
                                        })]
                                    })
                                }), (0,
                                D.jsxs)("div", {
                                    className: "flex-1 flex items-center justify-center sm:items-stretch sm:justify-start ",
                                    children: [(0,
                                    D.jsxs)("a", {
                                        href: "/",
                                        className: "flex-shrink-0  items-center flex",
                                        children: [(0,
                                        D.jsx)("img", {
                                            className: "block lg:hidden h-8 w-auto",
                                            src: "/logo.png",
                                            alt: "logo"
                                        }), (0,
                                        D.jsx)("img", {
                                            className: "hidden lg:block h-8 w-auto",
                                            src: "/logo.png",
                                            alt: "logo"
                                        }), (0,
                                        D.jsxs)("span", {
                                            className: "mr-2 flex text-xl",
                                            children: [(0,
                                            D.jsx)("p", {
                                                className: "font-medium mr-1",
                                                children: "Job"
                                            }), (0,
                                            D.jsx)("span", {
                                                className: "ffont-extralight text-gray-500",
                                                children: "Passcard"
                                            })]
                                        })]
                                    }), (0,
                                    D.jsx)("div", {
                                        className: "hidden sm:block sm:ml-6 flex-1",
                                        children: (0,
                                        D.jsx)("div", {
                                            className: "flex space-x-4 flex items-center justify-center",
                                            children: A.G.map((function(e) {
                                                return (0,
                                                D.jsx)("a", {
                                                    href: e.href,
                                                    className: M(e.current ? "bg-gray-900 text-white" : "text-black hover:bg-green-400 hover:text-white", "px-1 lg:px-3 py-2 rounded-md text-sm font-medium"),
                                                    children: e.name
                                                }, e.name)
                                            }
                                            ))
                                        })
                                    })]
                                }), (0,
                                D.jsxs)("div", {
                                    className: "absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0",
                                    children: [(0,
                                    D.jsxs)("button", {
                                        type: "button",
                                        className: "p-3 rounded-full text-gray-400 hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",
                                        children: [(0,
                                        D.jsx)("span", {
                                            className: "sr-only",
                                            children: "Search"
                                        }), (0,
                                        D.jsx)(I, {
                                            className: "h-6 w-6",
                                            "aria-hidden": "true"
                                        })]
                                    }), (0,
                                    D.jsxs)("button", {
                                        type: "button",
                                        className: "p-3 rounded-full text-gray-400 hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",
                                        children: [(0,
                                        D.jsx)("span", {
                                            className: "sr-only",
                                            children: "Shopping Cart"
                                        }), (0,
                                        D.jsx)(L, {
                                            className: "h-6 w-6",
                                            "aria-hidden": "true"
                                        })]
                                    }), (0,
                                    D.jsxs)("div", {
                                        className: "grid grid-cols-2 divide-x divide-gray-300 hidden sm:flex",
                                        children: [(0,
                                        D.jsx)("div", {
                                            className: "mr-1",
                                            children: (0,
                                            D.jsx)("a", {
                                                className: "px-3 py-2 rounded-md text-sm font-medium text-black hover:bg-green-400 hover:text-white uppercase",
                                                children: "Login"
                                            })
                                        }), (0,
                                        D.jsx)("div", {
                                            className: "",
                                            children: (0,
                                            D.jsx)("a", {
                                                className: "ml-1 px-3 rounded-md py-2 text-sm font-medium text-black hover:bg-green-400 hover:text-white uppercase",
                                                children: "Sign up"
                                            })
                                        })]
                                    })]
                                })]
                            })
                        }), (0,
                        D.jsx)(O.Panel, {
                            className: "sm:hidden",
                            children: (0,
                            D.jsx)("div", {
                                className: "px-2 pt-2 pb-3 space-y-1",
                                children: A.Af.map((function(e) {
                                    return (0,
                                    D.jsx)("a", {
                                        href: e.href,
                                        className: M(e.current ? "bg-gray-900 text-white" : "text-black hover:bg-green-400 hover:text-white", "block px-3 py-2 rounded-md text-base font-medium"),
                                        "aria-current": e.current ? "page" : void 0,
                                        children: e.name
                                    }, e.name)
                                }
                                ))
                            })
                        })]
                    })
                }
            })
        }
        var B = t(9008);
        function H(e) {
            var n = e.children;
            return (0,
            D.jsxs)(D.Fragment, {
                children: [(0,
                D.jsx)(U, {}), (0,
                D.jsxs)("main", {
                    children: [(0,
                    D.jsxs)(B.default, {
                        children: [(0,
                        D.jsx)("title", {
                            children: "Job Passcard"
                        }), (0,
                        D.jsx)("link", {
                            rel: "icon",
                            href: "/logo.png"
                        })]
                    }), n]
                }), (0,
                D.jsx)("footer", {
                    className: "flex items-center justify-center w-full h-24 border-t mt-20",
                    children: (0,
                    D.jsx)("a", {
                        className: "flex items-center justify-center",
                        rel: "noopener noreferrer"
                    })
                })]
            })
        }
        t(3098);
        function R(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n && (r = r.filter((function(n) {
                    return Object.getOwnPropertyDescriptor(e, n).enumerable
                }
                ))),
                t.push.apply(t, r)
            }
            return t
        }
        function Y(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2 ? R(Object(t), !0).forEach((function(n) {
                    r(e, n, t[n])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : R(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }
                ))
            }
            return e
        }
        var _ = function(e) {
            var n = e.Component
              , t = e.pageProps;
            return (0,
            D.jsx)(H, {
                children: (0,
                D.jsx)(n, Y({}, t))
            })
        }
    },
    1780: function(e, n, t) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
            return t(5224)
        }
        ])
    },
    3498: function() {},
    3098: function() {},
    9008: function(e, n, t) {
        e.exports = t(639)
    }
}, function(e) {
    var n = function(n) {
        return e(e.s = n)
    };
    e.O(0, [774, 179], (function() {
        return n(1780),
        n(4651)
    }
    ));
    var t = e.O();
    _N_E = t
}
]);
