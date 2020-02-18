!(function(c) {
    function e(e) {
        for (var t, n, r = e[0], o = e[1], i = e[2], a = 0, u = []; a < r.length; a++)
            (n = r[a]), Object.prototype.hasOwnProperty.call(f, n) && f[n] && u.push(f[n][0]), (f[n] = 0)
        for (t in o) Object.prototype.hasOwnProperty.call(o, t) && (c[t] = o[t])
        for (p && p(e); u.length; ) u.shift()()
        return s.push.apply(s, i || []), l()
    }
    function l() {
        for (var e, t = 0; t < s.length; t++) {
            for (var n = s[t], r = !0, o = 1; o < n.length; o++) {
                var i = n[o]
                0 !== f[i] && (r = !1)
            }
            r && (s.splice(t--, 1), (e = a((a.s = n[0]))))
        }
        return e
    }
    var n = {},
        f = { 0: 0 },
        s = []
    function a(e) {
        if (n[e]) return n[e].exports
        var t = (n[e] = { i: e, l: !1, exports: {} })
        return c[e].call(t.exports, t, t.exports, a), (t.l = !0), t.exports
    }
    ;(a.m = c),
        (a.c = n),
        (a.d = function(e, t, n) {
            a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n })
        }),
        (a.r = function(e) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 })
        }),
        (a.t = function(t, e) {
            if ((1 & e && (t = a(t)), 8 & e)) return t
            if (4 & e && 'object' == typeof t && t && t.__esModule) return t
            var n = Object.create(null)
            if (
                (a.r(n),
                Object.defineProperty(n, 'default', { enumerable: !0, value: t }),
                2 & e && 'string' != typeof t)
            )
                for (var r in t)
                    a.d(
                        n,
                        r,
                        function(e) {
                            return t[e]
                        }.bind(null, r),
                    )
            return n
        }),
        (a.n = function(e) {
            var t =
                e && e.__esModule
                    ? function() {
                          return e.default
                      }
                    : function() {
                          return e
                      }
            return a.d(t, 'a', t), t
        }),
        (a.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }),
        (a.p = '')
    var t = (window.webpackJsonp = window.webpackJsonp || []),
        r = t.push.bind(t)
    ;(t.push = e), (t = t.slice())
    for (var o = 0; o < t.length; o++) e(t[o])
    var p = r
    s.push([13, 1]), l()
})({
    13: function(e, t, n) {
        'use strict'
        n.r(t)
        var r = n(0),
            o = n.n(r),
            i = n(2)
        function a(e) {
            return (a =
                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                    ? function(e) {
                          return typeof e
                      }
                    : function(e) {
                          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                              ? 'symbol'
                              : typeof e
                      })(e)
        }
        function u(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n]
                ;(r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    'value' in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
            }
        }
        function c(e) {
            return (c = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function(e) {
                      return e.__proto__ || Object.getPrototypeOf(e)
                  })(e)
        }
        function l(e, t) {
            return (l =
                Object.setPrototypeOf ||
                function(e, t) {
                    return (e.__proto__ = t), e
                })(e, t)
        }
        var f,
            s,
            p,
            b =
                ((function(e, t) {
                    if ('function' != typeof t && null !== t)
                        throw new TypeError('Super expression must either be null or a function')
                    ;(e.prototype = Object.create(t && t.prototype, {
                        constructor: { value: e, writable: !0, configurable: !0 },
                    })),
                        t && l(e, t)
                })(h, r.Component),
                u(h.prototype, [
                    {
                        key: 'componentDidCatch',
                        value: function(e, t) {
                            this.setState({ hasError: !0, error: e, info: t })
                        },
                    },
                    {
                        key: 'render',
                        value: function() {
                            return this.state.hasError
                                ? o.a.createElement(r.Fragment, null, o.a.createElement('h1', null, '数据错误'))
                                : this.props.children
                        },
                    },
                ]),
                h),
            y = n(1)
        function h(e) {
            var t
            return (
                (function(e) {
                    if (!(e instanceof h)) throw new TypeError('Cannot call a class as a function')
                })(this),
                ((t = (function(e, t) {
                    return !t || ('object' !== a(t) && 'function' != typeof t)
                        ? (function() {
                              if (void 0 !== e) return e
                              throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                          })()
                        : t
                })(this, c(h).call(this, e))).state = { hasError: !1, error: null, info: null }),
                t
            )
        }
        function m(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n]
                ;(r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    'value' in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
            }
        }
        function d(n, r, e, t, o) {
            var i = {}
            return (
                Object.keys(t).forEach(function(e) {
                    i[e] = t[e]
                }),
                (i.enumerable = !!i.enumerable),
                (i.configurable = !!i.configurable),
                ('value' in i || i.initializer) && (i.writable = !0),
                (i = e
                    .slice()
                    .reverse()
                    .reduce(function(e, t) {
                        return t(n, r, e) || e
                    }, i)),
                o &&
                    void 0 !== i.initializer &&
                    ((i.value = i.initializer ? i.initializer.call(o) : void 0), (i.initializer = void 0)),
                void 0 === i.initializer && (Object.defineProperty(n, r, i), (i = null)),
                i
            )
        }
        var v =
            ((f = y.d.bound2),
            (p = d(
                (m(O.prototype, [
                    {
                        key: 'reset',
                        value: function() {
                            this.timer = 0
                        },
                    },
                    {
                        key: 'curentTimer',
                        get: function() {
                            return this.timer
                        },
                    },
                ]),
                (s = O)).prototype,
                'timer',
                [y.m],
                {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return 0
                    },
                },
            )),
            d(s.prototype, 'reset', [f], Object.getOwnPropertyDescriptor(s.prototype, 'reset'), s.prototype),
            d(
                s.prototype,
                'curentTimer',
                [y.f],
                Object.getOwnPropertyDescriptor(s.prototype, 'curentTimer'),
                s.prototype,
            ),
            new s())
        function O() {
            var e,
                t,
                n,
                r = this
            !(function(e) {
                if (!(e instanceof O)) throw new TypeError('Cannot call a class as a function')
            })(this),
                (n = e = this),
                (t = p) &&
                    Object.defineProperty(e, 'timer', {
                        enumerable: t.enumerable,
                        configurable: t.configurable,
                        writable: t.writable,
                        value: t.initializer ? t.initializer.call(n) : void 0,
                    }),
                (this.interval = setInterval(function() {
                    ;(r.timer += 1), 5 == r.timer && clearInterval(r.interval)
                }, 1e3))
        }
        Object(y.e)(function() {
            console.log('the timer is:' + v.timer)
        }),
            Object(y.s)(
                function() {
                    return 5 === v.timer
                },
                function() {
                    console.log('时间到！')
                },
            ),
            Object(y.n)(
                function() {
                    return v.timer
                },
                function(e, t) {
                    console.log('reaction打印timer', e), t.dispose()
                },
            )
        var g,
            w,
            j,
            S = v,
            _ = n(4),
            E = n(3)
        function k(e) {
            return (k =
                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                    ? function(e) {
                          return typeof e
                      }
                    : function(e) {
                          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                              ? 'symbol'
                              : typeof e
                      })(e)
        }
        function P(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }
        function C(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n]
                ;(r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    'value' in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
            }
        }
        function M(e, t, n) {
            return t && C(e.prototype, t), n && C(e, n), e
        }
        function z(e, t) {
            return !t || ('object' !== k(t) && 'function' != typeof t) ? T(e) : t
        }
        function D(e) {
            return (D = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function(e) {
                      return e.__proto__ || Object.getPrototypeOf(e)
                  })(e)
        }
        function T(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return e
        }
        function x(e, t) {
            if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function')
            ;(e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
            })),
                t && I(e, t)
        }
        function I(e, t) {
            return (I =
                Object.setPrototypeOf ||
                function(e, t) {
                    return (e.__proto__ = t), e
                })(e, t)
        }
        var N,
            F,
            R,
            J,
            W,
            q = Object(y.m)({ foreground: '#000', background: '#000' }),
            A =
                Object(_.b)('colors')(
                    (g =
                        Object(_.c)(
                            ((N = (x(G, r.Component),
                            M(G, [
                                {
                                    key: 'componentWillMount',
                                    value: function() {
                                        var e = this
                                        ;(this.inter = setInterval(function() {
                                            e.stateDefault++
                                        }, 2500)),
                                            Object(y.s)(
                                                function() {
                                                    return 5 == e.stateDefault
                                                },
                                                function() {
                                                    clearInterval(e.inter), (e.stateDefault = 0)
                                                },
                                            )
                                    },
                                },
                                {
                                    key: 'handleClick',
                                    value: function() {
                                        console.log(Object(E.randomColor)()),
                                            (this.props.colors.foreground = Object(E.randomColor)()),
                                            (this.props.colors.background = Object(E.randomColor)())
                                    },
                                },
                                {
                                    key: 'render',
                                    value: function() {
                                        return o.a.createElement(
                                            r.Fragment,
                                            null,
                                            o.a.createElement(
                                                'button',
                                                { onClick: this.props.appState.reset, className: 'countDown' },
                                                'Seconds passed: ',
                                                this.props.appState.timer,
                                            ),
                                            o.a.createElement('p', { className: 'timerP' }, this.stateDefault),
                                            o.a.createElement(
                                                'p',
                                                {
                                                    className: 'timerP',
                                                    style: {
                                                        color: this.props.colors.foreground,
                                                        backgroundColor: this.props.colors.background,
                                                    },
                                                    onClick: this.handleClick.bind(this),
                                                },
                                                '测试Inject',
                                            ),
                                        )
                                    },
                                },
                            ]),
                            (w = G)).prototype),
                            (F = 'stateDefault'),
                            (R = [y.m]),
                            (J = {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                initializer: function() {
                                    return 0
                                },
                            }),
                            (W = {}),
                            Object.keys(J).forEach(function(e) {
                                W[e] = J[e]
                            }),
                            (W.enumerable = !!W.enumerable),
                            (W.configurable = !!W.configurable),
                            ('value' in W || W.initializer) && (W.writable = !0),
                            void 0 ===
                                (W = R.slice()
                                    .reverse()
                                    .reduce(function(e, t) {
                                        return t(N, F, e) || e
                                    }, W)).initializer && (Object.defineProperty(N, F, W), (W = null)),
                            (j = W),
                            (g = w)),
                        ) || g),
                ) || g,
            U =
                (x(B, r.Component),
                M(B, [
                    {
                        key: 'render',
                        value: function() {
                            return o.a.createElement(
                                _.a,
                                { colors: q },
                                o.a.createElement(A, { appState: this.props.appState }),
                            )
                        },
                    },
                ]),
                B)
        function B() {
            return P(this, B), z(this, D(B).apply(this, arguments))
        }
        function G() {
            var e, t, n, r, o
            P(this, G)
            for (var i = arguments.length, a = new Array(i), u = 0; u < i; u++) a[u] = arguments[u]
            return (
                (n = t = z(this, (e = D(G)).call.apply(e, [this].concat(a)))),
                (r = j),
                (o = T(t)),
                r &&
                    Object.defineProperty(n, 'stateDefault', {
                        enumerable: r.enumerable,
                        configurable: r.configurable,
                        writable: r.writable,
                        value: r.initializer ? r.initializer.call(o) : void 0,
                    }),
                t
            )
        }
        function H(e) {
            return (H =
                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                    ? function(e) {
                          return typeof e
                      }
                    : function(e) {
                          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                              ? 'symbol'
                              : typeof e
                      })(e)
        }
        function K(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n]
                ;(r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    'value' in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
            }
        }
        function L(e) {
            return (L = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function(e) {
                      return e.__proto__ || Object.getPrototypeOf(e)
                  })(e)
        }
        function Q(e, t) {
            return (Q =
                Object.setPrototypeOf ||
                function(e, t) {
                    return (e.__proto__ = t), e
                })(e, t)
        }
        n(6)
        var V =
            ((function(e, t) {
                if ('function' != typeof t && null !== t)
                    throw new TypeError('Super expression must either be null or a function')
                ;(e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 },
                })),
                    t && Q(e, t)
            })(X, r.Component),
            K(X.prototype, [
                {
                    key: 'componentDidMount',
                    value: function() {
                        var t = this
                        ;(this._isMounted = !0),
                            new Promise(function(e, t) {
                                e(555)
                            }).then(function(e) {
                                t._isMounted && t.setState({ data: e })
                            })
                        for (var e = 0, n = [1, 2, 3, 4]; e < n.length; e++) {
                            var r = n[e]
                            console.log(r)
                        }
                    },
                },
                {
                    key: 'componentWillUnmount',
                    value: function() {
                        this._isMounted = !1
                    },
                },
                {
                    key: 'handleClick',
                    value: function() {
                        this._isMounted && this.setState({ hasError: !0 })
                    },
                },
                {
                    key: 'render',
                    value: function() {
                        if (this.state.hasError) throw new Error('I Crashed')
                        return o.a.createElement(
                            r.Fragment,
                            null,
                            o.a.createElement(
                                'div',
                                { className: 'testDiv' },
                                o.a.createElement(
                                    'div',
                                    { className: 'buttonCheck', onClick: this.handleClick.bind(this) },
                                    '123打开佣金宝',
                                ),
                            ),
                            o.a.createElement(U, { appState: S }),
                        )
                    },
                },
            ]),
            X)
        function X(e) {
            var t
            return (
                (function(e) {
                    if (!(e instanceof X)) throw new TypeError('Cannot call a class as a function')
                })(this),
                ((t = (function(e, t) {
                    return !t || ('object' !== H(t) && 'function' != typeof t)
                        ? (function() {
                              if (void 0 !== e) return e
                              throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                          })()
                        : t
                })(this, L(X).call(this, e))).state = { data: 123123123, hasError: !1 }),
                (t._isMounted = !1),
                t
            )
        }
        n(6),
            Object(i.render)(
                o.a.createElement(function() {
                    return o.a.createElement(b, null, o.a.createElement(V, null))
                }, null),
                document.querySelector('#content'),
            )
    },
    3: function(e, t) {
        e.exports = {
            randomColor: function() {
                var e = Math.floor(256 * Math.random()),
                    t = Math.floor(256 * Math.random()),
                    n = Math.floor(256 * Math.random())
                return '#' + e.toString(16) + t.toString(16) + n.toString(16)
            },
        }
    },
    6: function(e, t, n) {},
})
