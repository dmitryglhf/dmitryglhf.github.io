function Yv(t, e) {
    for (var n = 0; n < e.length; n++) {
        const i = e[n];
        if (typeof i != "string" && !Array.isArray(i)) {
            for (const s in i)
                if (s !== "default" && !(s in t)) {
                    const r = Object.getOwnPropertyDescriptor(i, s);
                    r && Object.defineProperty(t, s, r.get ? r : {
                        enumerable: !0,
                        get: () => i[s]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]')) i(s);
    new MutationObserver(s => {
        for (const r of s)
            if (r.type === "childList")
                for (const o of r.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && i(o)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(s) {
        const r = {};
        return s.integrity && (r.integrity = s.integrity), s.referrerPolicy && (r.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? r.credentials = "include" : s.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r
    }

    function i(s) {
        if (s.ep) return;
        s.ep = !0;
        const r = n(s);
        fetch(s.href, r)
    }
})();

function Zv(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
var cp = {
        exports: {}
    },
    zo = {},
    dp = {
        exports: {}
    },
    j = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qs = Symbol.for("react.element"),
    Jv = Symbol.for("react.portal"),
    e0 = Symbol.for("react.fragment"),
    t0 = Symbol.for("react.strict_mode"),
    n0 = Symbol.for("react.profiler"),
    i0 = Symbol.for("react.provider"),
    s0 = Symbol.for("react.context"),
    r0 = Symbol.for("react.forward_ref"),
    o0 = Symbol.for("react.suspense"),
    a0 = Symbol.for("react.memo"),
    l0 = Symbol.for("react.lazy"),
    od = Symbol.iterator;

function u0(t) {
    return t === null || typeof t != "object" ? null : (t = od && t[od] || t["@@iterator"], typeof t == "function" ? t : null)
}
var fp = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    hp = Object.assign,
    pp = {};

function Hi(t, e, n) {
    this.props = t, this.context = e, this.refs = pp, this.updater = n || fp
}
Hi.prototype.isReactComponent = {};
Hi.prototype.setState = function(t, e) {
    if (typeof t != "object" && typeof t != "function" && t != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, t, e, "setState")
};
Hi.prototype.forceUpdate = function(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate")
};

function mp() {}
mp.prototype = Hi.prototype;

function Tu(t, e, n) {
    this.props = t, this.context = e, this.refs = pp, this.updater = n || fp
}
var Eu = Tu.prototype = new mp;
Eu.constructor = Tu;
hp(Eu, Hi.prototype);
Eu.isPureReactComponent = !0;
var ad = Array.isArray,
    gp = Object.prototype.hasOwnProperty,
    Mu = {
        current: null
    },
    yp = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function vp(t, e, n) {
    var i, s = {},
        r = null,
        o = null;
    if (e != null)
        for (i in e.ref !== void 0 && (o = e.ref), e.key !== void 0 && (r = "" + e.key), e) gp.call(e, i) && !yp.hasOwnProperty(i) && (s[i] = e[i]);
    var a = arguments.length - 2;
    if (a === 1) s.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
        s.children = l
    }
    if (t && t.defaultProps)
        for (i in a = t.defaultProps, a) s[i] === void 0 && (s[i] = a[i]);
    return {
        $$typeof: Qs,
        type: t,
        key: r,
        ref: o,
        props: s,
        _owner: Mu.current
    }
}

function c0(t, e) {
    return {
        $$typeof: Qs,
        type: t.type,
        key: e,
        ref: t.ref,
        props: t.props,
        _owner: t._owner
    }
}

function Ru(t) {
    return typeof t == "object" && t !== null && t.$$typeof === Qs
}

function d0(t) {
    var e = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + t.replace(/[=:]/g, function(n) {
        return e[n]
    })
}
var ld = /\/+/g;

function ra(t, e) {
    return typeof t == "object" && t !== null && t.key != null ? d0("" + t.key) : e.toString(36)
}

function Er(t, e, n, i, s) {
    var r = typeof t;
    (r === "undefined" || r === "boolean") && (t = null);
    var o = !1;
    if (t === null) o = !0;
    else switch (r) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (t.$$typeof) {
                case Qs:
                case Jv:
                    o = !0
            }
    }
    if (o) return o = t, s = s(o), t = i === "" ? "." + ra(o, 0) : i, ad(s) ? (n = "", t != null && (n = t.replace(ld, "$&/") + "/"), Er(s, e, n, "", function(u) {
        return u
    })) : s != null && (Ru(s) && (s = c0(s, n + (!s.key || o && o.key === s.key ? "" : ("" + s.key).replace(ld, "$&/") + "/") + t)), e.push(s)), 1;
    if (o = 0, i = i === "" ? "." : i + ":", ad(t))
        for (var a = 0; a < t.length; a++) {
            r = t[a];
            var l = i + ra(r, a);
            o += Er(r, e, n, l, s)
        } else if (l = u0(t), typeof l == "function")
            for (t = l.call(t), a = 0; !(r = t.next()).done;) r = r.value, l = i + ra(r, a++), o += Er(r, e, n, l, s);
        else if (r === "object") throw e = String(t), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
    return o
}

function lr(t, e, n) {
    if (t == null) return t;
    var i = [],
        s = 0;
    return Er(t, i, "", "", function(r) {
        return e.call(n, r, s++)
    }), i
}

function f0(t) {
    if (t._status === -1) {
        var e = t._result;
        e = e(), e.then(function(n) {
            (t._status === 0 || t._status === -1) && (t._status = 1, t._result = n)
        }, function(n) {
            (t._status === 0 || t._status === -1) && (t._status = 2, t._result = n)
        }), t._status === -1 && (t._status = 0, t._result = e)
    }
    if (t._status === 1) return t._result.default;
    throw t._result
}
var Ie = {
        current: null
    },
    Mr = {
        transition: null
    },
    h0 = {
        ReactCurrentDispatcher: Ie,
        ReactCurrentBatchConfig: Mr,
        ReactCurrentOwner: Mu
    };

function wp() {
    throw Error("act(...) is not supported in production builds of React.")
}
j.Children = {
    map: lr,
    forEach: function(t, e, n) {
        lr(t, function() {
            e.apply(this, arguments)
        }, n)
    },
    count: function(t) {
        var e = 0;
        return lr(t, function() {
            e++
        }), e
    },
    toArray: function(t) {
        return lr(t, function(e) {
            return e
        }) || []
    },
    only: function(t) {
        if (!Ru(t)) throw Error("React.Children.only expected to receive a single React element child.");
        return t
    }
};
j.Component = Hi;
j.Fragment = e0;
j.Profiler = n0;
j.PureComponent = Tu;
j.StrictMode = t0;
j.Suspense = o0;
j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = h0;
j.act = wp;
j.cloneElement = function(t, e, n) {
    if (t == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
    var i = hp({}, t.props),
        s = t.key,
        r = t.ref,
        o = t._owner;
    if (e != null) {
        if (e.ref !== void 0 && (r = e.ref, o = Mu.current), e.key !== void 0 && (s = "" + e.key), t.type && t.type.defaultProps) var a = t.type.defaultProps;
        for (l in e) gp.call(e, l) && !yp.hasOwnProperty(l) && (i[l] = e[l] === void 0 && a !== void 0 ? a[l] : e[l])
    }
    var l = arguments.length - 2;
    if (l === 1) i.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
        i.children = a
    }
    return {
        $$typeof: Qs,
        type: t.type,
        key: s,
        ref: r,
        props: i,
        _owner: o
    }
};
j.createContext = function(t) {
    return t = {
        $$typeof: s0,
        _currentValue: t,
        _currentValue2: t,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, t.Provider = {
        $$typeof: i0,
        _context: t
    }, t.Consumer = t
};
j.createElement = vp;
j.createFactory = function(t) {
    var e = vp.bind(null, t);
    return e.type = t, e
};
j.createRef = function() {
    return {
        current: null
    }
};
j.forwardRef = function(t) {
    return {
        $$typeof: r0,
        render: t
    }
};
j.isValidElement = Ru;
j.lazy = function(t) {
    return {
        $$typeof: l0,
        _payload: {
            _status: -1,
            _result: t
        },
        _init: f0
    }
};
j.memo = function(t, e) {
    return {
        $$typeof: a0,
        type: t,
        compare: e === void 0 ? null : e
    }
};
j.startTransition = function(t) {
    var e = Mr.transition;
    Mr.transition = {};
    try {
        t()
    } finally {
        Mr.transition = e
    }
};
j.unstable_act = wp;
j.useCallback = function(t, e) {
    return Ie.current.useCallback(t, e)
};
j.useContext = function(t) {
    return Ie.current.useContext(t)
};
j.useDebugValue = function() {};
j.useDeferredValue = function(t) {
    return Ie.current.useDeferredValue(t)
};
j.useEffect = function(t, e) {
    return Ie.current.useEffect(t, e)
};
j.useId = function() {
    return Ie.current.useId()
};
j.useImperativeHandle = function(t, e, n) {
    return Ie.current.useImperativeHandle(t, e, n)
};
j.useInsertionEffect = function(t, e) {
    return Ie.current.useInsertionEffect(t, e)
};
j.useLayoutEffect = function(t, e) {
    return Ie.current.useLayoutEffect(t, e)
};
j.useMemo = function(t, e) {
    return Ie.current.useMemo(t, e)
};
j.useReducer = function(t, e, n) {
    return Ie.current.useReducer(t, e, n)
};
j.useRef = function(t) {
    return Ie.current.useRef(t)
};
j.useState = function(t) {
    return Ie.current.useState(t)
};
j.useSyncExternalStore = function(t, e, n) {
    return Ie.current.useSyncExternalStore(t, e, n)
};
j.useTransition = function() {
    return Ie.current.useTransition()
};
j.version = "18.3.1";
dp.exports = j;
var k = dp.exports;
const ll = Zv(k),
    p0 = Yv({
        __proto__: null,
        default: ll
    }, [k]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var m0 = k,
    g0 = Symbol.for("react.element"),
    y0 = Symbol.for("react.fragment"),
    v0 = Object.prototype.hasOwnProperty,
    w0 = m0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    x0 = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function xp(t, e, n) {
    var i, s = {},
        r = null,
        o = null;
    n !== void 0 && (r = "" + n), e.key !== void 0 && (r = "" + e.key), e.ref !== void 0 && (o = e.ref);
    for (i in e) v0.call(e, i) && !x0.hasOwnProperty(i) && (s[i] = e[i]);
    if (t && t.defaultProps)
        for (i in e = t.defaultProps, e) s[i] === void 0 && (s[i] = e[i]);
    return {
        $$typeof: g0,
        type: t,
        key: r,
        ref: o,
        props: s,
        _owner: w0.current
    }
}
zo.Fragment = y0;
zo.jsx = xp;
zo.jsxs = xp;
cp.exports = zo;
var C = cp.exports,
    bp = {
        exports: {}
    },
    Ye = {},
    kp = {
        exports: {}
    },
    Sp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(t) {
    function e(M, A) {
        var I = M.length;
        M.push(A);
        e: for (; 0 < I;) {
            var $ = I - 1 >>> 1,
                me = M[$];
            if (0 < s(me, A)) M[$] = A, M[I] = me, I = $;
            else break e
        }
    }

    function n(M) {
        return M.length === 0 ? null : M[0]
    }

    function i(M) {
        if (M.length === 0) return null;
        var A = M[0],
            I = M.pop();
        if (I !== A) {
            M[0] = I;
            e: for (var $ = 0, me = M.length, or = me >>> 1; $ < or;) {
                var zn = 2 * ($ + 1) - 1,
                    sa = M[zn],
                    Dn = zn + 1,
                    ar = M[Dn];
                if (0 > s(sa, I)) Dn < me && 0 > s(ar, sa) ? (M[$] = ar, M[Dn] = I, $ = Dn) : (M[$] = sa, M[zn] = I, $ = zn);
                else if (Dn < me && 0 > s(ar, I)) M[$] = ar, M[Dn] = I, $ = Dn;
                else break e
            }
        }
        return A
    }

    function s(M, A) {
        var I = M.sortIndex - A.sortIndex;
        return I !== 0 ? I : M.id - A.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var r = performance;
        t.unstable_now = function() {
            return r.now()
        }
    } else {
        var o = Date,
            a = o.now();
        t.unstable_now = function() {
            return o.now() - a
        }
    }
    var l = [],
        u = [],
        c = 1,
        d = null,
        f = 3,
        h = !1,
        y = !1,
        g = !1,
        x = typeof setTimeout == "function" ? setTimeout : null,
        p = typeof clearTimeout == "function" ? clearTimeout : null,
        m = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function v(M) {
        for (var A = n(u); A !== null;) {
            if (A.callback === null) i(u);
            else if (A.startTime <= M) i(u), A.sortIndex = A.expirationTime, e(l, A);
            else break;
            A = n(u)
        }
    }

    function w(M) {
        if (g = !1, v(M), !y)
            if (n(l) !== null) y = !0, Dt(b);
            else {
                var A = n(u);
                A !== null && re(w, A.startTime - M)
            }
    }

    function b(M, A) {
        y = !1, g && (g = !1, p(P), P = -1), h = !0;
        var I = f;
        try {
            for (v(A), d = n(l); d !== null && (!(d.expirationTime > A) || M && !B());) {
                var $ = d.callback;
                if (typeof $ == "function") {
                    d.callback = null, f = d.priorityLevel;
                    var me = $(d.expirationTime <= A);
                    A = t.unstable_now(), typeof me == "function" ? d.callback = me : d === n(l) && i(l), v(A)
                } else i(l);
                d = n(l)
            }
            if (d !== null) var or = !0;
            else {
                var zn = n(u);
                zn !== null && re(w, zn.startTime - A), or = !1
            }
            return or
        } finally {
            d = null, f = I, h = !1
        }
    }
    var S = !1,
        _ = null,
        P = -1,
        O = 5,
        D = -1;

    function B() {
        return !(t.unstable_now() - D < O)
    }

    function V() {
        if (_ !== null) {
            var M = t.unstable_now();
            D = M;
            var A = !0;
            try {
                A = _(!0, M)
            } finally {
                A ? Je() : (S = !1, _ = null)
            }
        } else S = !1
    }
    var Je;
    if (typeof m == "function") Je = function() {
        m(V)
    };
    else if (typeof MessageChannel < "u") {
        var St = new MessageChannel,
            Xi = St.port2;
        St.port1.onmessage = V, Je = function() {
            Xi.postMessage(null)
        }
    } else Je = function() {
        x(V, 0)
    };

    function Dt(M) {
        _ = M, S || (S = !0, Je())
    }

    function re(M, A) {
        P = x(function() {
            M(t.unstable_now())
        }, A)
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(M) {
        M.callback = null
    }, t.unstable_continueExecution = function() {
        y || h || (y = !0, Dt(b))
    }, t.unstable_forceFrameRate = function(M) {
        0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : O = 0 < M ? Math.floor(1e3 / M) : 5
    }, t.unstable_getCurrentPriorityLevel = function() {
        return f
    }, t.unstable_getFirstCallbackNode = function() {
        return n(l)
    }, t.unstable_next = function(M) {
        switch (f) {
            case 1:
            case 2:
            case 3:
                var A = 3;
                break;
            default:
                A = f
        }
        var I = f;
        f = A;
        try {
            return M()
        } finally {
            f = I
        }
    }, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = function() {}, t.unstable_runWithPriority = function(M, A) {
        switch (M) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                M = 3
        }
        var I = f;
        f = M;
        try {
            return A()
        } finally {
            f = I
        }
    }, t.unstable_scheduleCallback = function(M, A, I) {
        var $ = t.unstable_now();
        switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? $ + I : $) : I = $, M) {
            case 1:
                var me = -1;
                break;
            case 2:
                me = 250;
                break;
            case 5:
                me = 1073741823;
                break;
            case 4:
                me = 1e4;
                break;
            default:
                me = 5e3
        }
        return me = I + me, M = {
            id: c++,
            callback: A,
            priorityLevel: M,
            startTime: I,
            expirationTime: me,
            sortIndex: -1
        }, I > $ ? (M.sortIndex = I, e(u, M), n(l) === null && M === n(u) && (g ? (p(P), P = -1) : g = !0, re(w, I - $))) : (M.sortIndex = me, e(l, M), y || h || (y = !0, Dt(b))), M
    }, t.unstable_shouldYield = B, t.unstable_wrapCallback = function(M) {
        var A = f;
        return function() {
            var I = f;
            f = A;
            try {
                return M.apply(this, arguments)
            } finally {
                f = I
            }
        }
    }
})(Sp);
kp.exports = Sp;
var b0 = kp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var k0 = k,
    Qe = b0;

function T(t) {
    for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Pp = new Set,
    Es = {};

function Jn(t, e) {
    zi(t, e), zi(t + "Capture", e)
}

function zi(t, e) {
    for (Es[t] = e, t = 0; t < e.length; t++) Pp.add(e[t])
}
var Wt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    ul = Object.prototype.hasOwnProperty,
    S0 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    ud = {},
    cd = {};

function P0(t) {
    return ul.call(cd, t) ? !0 : ul.call(ud, t) ? !1 : S0.test(t) ? cd[t] = !0 : (ud[t] = !0, !1)
}

function C0(t, e, n, i) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof e) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return i ? !1 : n !== null ? !n.acceptsBooleans : (t = t.toLowerCase().slice(0, 5), t !== "data-" && t !== "aria-");
        default:
            return !1
    }
}

function _0(t, e, n, i) {
    if (e === null || typeof e > "u" || C0(t, e, n, i)) return !0;
    if (i) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !e;
        case 4:
            return e === !1;
        case 5:
            return isNaN(e);
        case 6:
            return isNaN(e) || 1 > e
    }
    return !1
}

function Fe(t, e, n, i, s, r, o) {
    this.acceptsBooleans = e === 2 || e === 3 || e === 4, this.attributeName = i, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = t, this.type = e, this.sanitizeURL = r, this.removeEmptyString = o
}
var ke = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
    ke[t] = new Fe(t, 0, !1, t, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(t) {
    var e = t[0];
    ke[e] = new Fe(e, 1, !1, t[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
    ke[t] = new Fe(t, 2, !1, t.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
    ke[t] = new Fe(t, 2, !1, t, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
    ke[t] = new Fe(t, 3, !1, t.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(t) {
    ke[t] = new Fe(t, 3, !0, t, null, !1, !1)
});
["capture", "download"].forEach(function(t) {
    ke[t] = new Fe(t, 4, !1, t, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(t) {
    ke[t] = new Fe(t, 6, !1, t, null, !1, !1)
});
["rowSpan", "start"].forEach(function(t) {
    ke[t] = new Fe(t, 5, !1, t.toLowerCase(), null, !1, !1)
});
var zu = /[\-:]([a-z])/g;

function Du(t) {
    return t[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
    var e = t.replace(zu, Du);
    ke[e] = new Fe(e, 1, !1, t, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
    var e = t.replace(zu, Du);
    ke[e] = new Fe(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
    var e = t.replace(zu, Du);
    ke[e] = new Fe(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(t) {
    ke[t] = new Fe(t, 1, !1, t.toLowerCase(), null, !1, !1)
});
ke.xlinkHref = new Fe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(t) {
    ke[t] = new Fe(t, 1, !1, t.toLowerCase(), null, !0, !0)
});

function Ou(t, e, n, i) {
    var s = ke.hasOwnProperty(e) ? ke[e] : null;
    (s !== null ? s.type !== 0 : i || !(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (_0(e, n, s, i) && (n = null), i || s === null ? P0(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n)) : s.mustUseProperty ? t[s.propertyName] = n === null ? s.type === 3 ? !1 : "" : n : (e = s.attributeName, i = s.attributeNamespace, n === null ? t.removeAttribute(e) : (s = s.type, n = s === 3 || s === 4 && n === !0 ? "" : "" + n, i ? t.setAttributeNS(i, e, n) : t.setAttribute(e, n))))
}
var Qt = k0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ur = Symbol.for("react.element"),
    si = Symbol.for("react.portal"),
    ri = Symbol.for("react.fragment"),
    Au = Symbol.for("react.strict_mode"),
    cl = Symbol.for("react.profiler"),
    Cp = Symbol.for("react.provider"),
    _p = Symbol.for("react.context"),
    Lu = Symbol.for("react.forward_ref"),
    dl = Symbol.for("react.suspense"),
    fl = Symbol.for("react.suspense_list"),
    Iu = Symbol.for("react.memo"),
    en = Symbol.for("react.lazy"),
    Tp = Symbol.for("react.offscreen"),
    dd = Symbol.iterator;

function Yi(t) {
    return t === null || typeof t != "object" ? null : (t = dd && t[dd] || t["@@iterator"], typeof t == "function" ? t : null)
}
var se = Object.assign,
    oa;

function ls(t) {
    if (oa === void 0) try {
        throw Error()
    } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        oa = e && e[1] || ""
    }
    return `
` + oa + t
}
var aa = !1;

function la(t, e) {
    if (!t || aa) return "";
    aa = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (e)
            if (e = function() {
                    throw Error()
                }, Object.defineProperty(e.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(e, [])
                } catch (u) {
                    var i = u
                }
                Reflect.construct(t, [], e)
            } else {
                try {
                    e.call()
                } catch (u) {
                    i = u
                }
                t.call(e.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                i = u
            }
            t()
        }
    } catch (u) {
        if (u && i && typeof u.stack == "string") {
            for (var s = u.stack.split(`
`), r = i.stack.split(`
`), o = s.length - 1, a = r.length - 1; 1 <= o && 0 <= a && s[o] !== r[a];) a--;
            for (; 1 <= o && 0 <= a; o--, a--)
                if (s[o] !== r[a]) {
                    if (o !== 1 || a !== 1)
                        do
                            if (o--, a--, 0 > a || s[o] !== r[a]) {
                                var l = `
` + s[o].replace(" at new ", " at ");
                                return t.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", t.displayName)), l
                            } while (1 <= o && 0 <= a);
                    break
                }
        }
    } finally {
        aa = !1, Error.prepareStackTrace = n
    }
    return (t = t ? t.displayName || t.name : "") ? ls(t) : ""
}

function T0(t) {
    switch (t.tag) {
        case 5:
            return ls(t.type);
        case 16:
            return ls("Lazy");
        case 13:
            return ls("Suspense");
        case 19:
            return ls("SuspenseList");
        case 0:
        case 2:
        case 15:
            return t = la(t.type, !1), t;
        case 11:
            return t = la(t.type.render, !1), t;
        case 1:
            return t = la(t.type, !0), t;
        default:
            return ""
    }
}

function hl(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
        case ri:
            return "Fragment";
        case si:
            return "Portal";
        case cl:
            return "Profiler";
        case Au:
            return "StrictMode";
        case dl:
            return "Suspense";
        case fl:
            return "SuspenseList"
    }
    if (typeof t == "object") switch (t.$$typeof) {
        case _p:
            return (t.displayName || "Context") + ".Consumer";
        case Cp:
            return (t._context.displayName || "Context") + ".Provider";
        case Lu:
            var e = t.render;
            return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case Iu:
            return e = t.displayName || null, e !== null ? e : hl(t.type) || "Memo";
        case en:
            e = t._payload, t = t._init;
            try {
                return hl(t(e))
            } catch {}
    }
    return null
}

function E0(t) {
    var e = t.type;
    switch (t.tag) {
        case 24:
            return "Cache";
        case 9:
            return (e.displayName || "Context") + ".Consumer";
        case 10:
            return (e._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return t = e.render, t = t.displayName || t.name || "", e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return e;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return hl(e);
        case 8:
            return e === Au ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof e == "function") return e.displayName || e.name || null;
            if (typeof e == "string") return e
    }
    return null
}

function wn(t) {
    switch (typeof t) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return t;
        case "object":
            return t;
        default:
            return ""
    }
}

function Ep(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
}

function M0(t) {
    var e = Ep(t) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
        i = "" + t[e];
    if (!t.hasOwnProperty(e) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var s = n.get,
            r = n.set;
        return Object.defineProperty(t, e, {
            configurable: !0,
            get: function() {
                return s.call(this)
            },
            set: function(o) {
                i = "" + o, r.call(this, o)
            }
        }), Object.defineProperty(t, e, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return i
            },
            setValue: function(o) {
                i = "" + o
            },
            stopTracking: function() {
                t._valueTracker = null, delete t[e]
            }
        }
    }
}

function cr(t) {
    t._valueTracker || (t._valueTracker = M0(t))
}

function Mp(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
        i = "";
    return t && (i = Ep(t) ? t.checked ? "true" : "false" : t.value), t = i, t !== n ? (e.setValue(t), !0) : !1
}

function Hr(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
        return t.activeElement || t.body
    } catch {
        return t.body
    }
}

function pl(t, e) {
    var n = e.checked;
    return se({}, e, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? t._wrapperState.initialChecked
    })
}

function fd(t, e) {
    var n = e.defaultValue == null ? "" : e.defaultValue,
        i = e.checked != null ? e.checked : e.defaultChecked;
    n = wn(e.value != null ? e.value : n), t._wrapperState = {
        initialChecked: i,
        initialValue: n,
        controlled: e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null
    }
}

function Rp(t, e) {
    e = e.checked, e != null && Ou(t, "checked", e, !1)
}

function ml(t, e) {
    Rp(t, e);
    var n = wn(e.value),
        i = e.type;
    if (n != null) i === "number" ? (n === 0 && t.value === "" || t.value != n) && (t.value = "" + n) : t.value !== "" + n && (t.value = "" + n);
    else if (i === "submit" || i === "reset") {
        t.removeAttribute("value");
        return
    }
    e.hasOwnProperty("value") ? gl(t, e.type, n) : e.hasOwnProperty("defaultValue") && gl(t, e.type, wn(e.defaultValue)), e.checked == null && e.defaultChecked != null && (t.defaultChecked = !!e.defaultChecked)
}

function hd(t, e, n) {
    if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
        var i = e.type;
        if (!(i !== "submit" && i !== "reset" || e.value !== void 0 && e.value !== null)) return;
        e = "" + t._wrapperState.initialValue, n || e === t.value || (t.value = e), t.defaultValue = e
    }
    n = t.name, n !== "" && (t.name = ""), t.defaultChecked = !!t._wrapperState.initialChecked, n !== "" && (t.name = n)
}

function gl(t, e, n) {
    (e !== "number" || Hr(t.ownerDocument) !== t) && (n == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + n && (t.defaultValue = "" + n))
}
var us = Array.isArray;

function Si(t, e, n, i) {
    if (t = t.options, e) {
        e = {};
        for (var s = 0; s < n.length; s++) e["$" + n[s]] = !0;
        for (n = 0; n < t.length; n++) s = e.hasOwnProperty("$" + t[n].value), t[n].selected !== s && (t[n].selected = s), s && i && (t[n].defaultSelected = !0)
    } else {
        for (n = "" + wn(n), e = null, s = 0; s < t.length; s++) {
            if (t[s].value === n) {
                t[s].selected = !0, i && (t[s].defaultSelected = !0);
                return
            }
            e !== null || t[s].disabled || (e = t[s])
        }
        e !== null && (e.selected = !0)
    }
}

function yl(t, e) {
    if (e.dangerouslySetInnerHTML != null) throw Error(T(91));
    return se({}, e, {
        value: void 0,
        defaultValue: void 0,
        children: "" + t._wrapperState.initialValue
    })
}

function pd(t, e) {
    var n = e.value;
    if (n == null) {
        if (n = e.children, e = e.defaultValue, n != null) {
            if (e != null) throw Error(T(92));
            if (us(n)) {
                if (1 < n.length) throw Error(T(93));
                n = n[0]
            }
            e = n
        }
        e == null && (e = ""), n = e
    }
    t._wrapperState = {
        initialValue: wn(n)
    }
}

function zp(t, e) {
    var n = wn(e.value),
        i = wn(e.defaultValue);
    n != null && (n = "" + n, n !== t.value && (t.value = n), e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)), i != null && (t.defaultValue = "" + i)
}

function md(t) {
    var e = t.textContent;
    e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e)
}

function Dp(t) {
    switch (t) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function vl(t, e) {
    return t == null || t === "http://www.w3.org/1999/xhtml" ? Dp(e) : t === "http://www.w3.org/2000/svg" && e === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t
}
var dr, Op = function(t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(e, n, i, s) {
        MSApp.execUnsafeLocalFunction(function() {
            return t(e, n, i, s)
        })
    } : t
}(function(t, e) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t) t.innerHTML = e;
    else {
        for (dr = dr || document.createElement("div"), dr.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>", e = dr.firstChild; t.firstChild;) t.removeChild(t.firstChild);
        for (; e.firstChild;) t.appendChild(e.firstChild)
    }
});

function Ms(t, e) {
    if (e) {
        var n = t.firstChild;
        if (n && n === t.lastChild && n.nodeType === 3) {
            n.nodeValue = e;
            return
        }
    }
    t.textContent = e
}
var ps = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    R0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(ps).forEach(function(t) {
    R0.forEach(function(e) {
        e = e + t.charAt(0).toUpperCase() + t.substring(1), ps[e] = ps[t]
    })
});

function Ap(t, e, n) {
    return e == null || typeof e == "boolean" || e === "" ? "" : n || typeof e != "number" || e === 0 || ps.hasOwnProperty(t) && ps[t] ? ("" + e).trim() : e + "px"
}

function Lp(t, e) {
    t = t.style;
    for (var n in e)
        if (e.hasOwnProperty(n)) {
            var i = n.indexOf("--") === 0,
                s = Ap(n, e[n], i);
            n === "float" && (n = "cssFloat"), i ? t.setProperty(n, s) : t[n] = s
        }
}
var z0 = se({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function wl(t, e) {
    if (e) {
        if (z0[t] && (e.children != null || e.dangerouslySetInnerHTML != null)) throw Error(T(137, t));
        if (e.dangerouslySetInnerHTML != null) {
            if (e.children != null) throw Error(T(60));
            if (typeof e.dangerouslySetInnerHTML != "object" || !("__html" in e.dangerouslySetInnerHTML)) throw Error(T(61))
        }
        if (e.style != null && typeof e.style != "object") throw Error(T(62))
    }
}

function xl(t, e) {
    if (t.indexOf("-") === -1) return typeof e.is == "string";
    switch (t) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var bl = null;

function Fu(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t
}
var kl = null,
    Pi = null,
    Ci = null;

function gd(t) {
    if (t = Zs(t)) {
        if (typeof kl != "function") throw Error(T(280));
        var e = t.stateNode;
        e && (e = Io(e), kl(t.stateNode, t.type, e))
    }
}

function Ip(t) {
    Pi ? Ci ? Ci.push(t) : Ci = [t] : Pi = t
}

function Fp() {
    if (Pi) {
        var t = Pi,
            e = Ci;
        if (Ci = Pi = null, gd(t), e)
            for (t = 0; t < e.length; t++) gd(e[t])
    }
}

function Np(t, e) {
    return t(e)
}

function Vp() {}
var ua = !1;

function jp(t, e, n) {
    if (ua) return t(e, n);
    ua = !0;
    try {
        return Np(t, e, n)
    } finally {
        ua = !1, (Pi !== null || Ci !== null) && (Vp(), Fp())
    }
}

function Rs(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var i = Io(n);
    if (i === null) return null;
    n = i[e];
    e: switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (i = !i.disabled) || (t = t.type, i = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !i;
            break e;
        default:
            t = !1
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(T(231, e, typeof n));
    return n
}
var Sl = !1;
if (Wt) try {
    var Zi = {};
    Object.defineProperty(Zi, "passive", {
        get: function() {
            Sl = !0
        }
    }), window.addEventListener("test", Zi, Zi), window.removeEventListener("test", Zi, Zi)
} catch {
    Sl = !1
}

function D0(t, e, n, i, s, r, o, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        e.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var ms = !1,
    Gr = null,
    qr = !1,
    Pl = null,
    O0 = {
        onError: function(t) {
            ms = !0, Gr = t
        }
    };

function A0(t, e, n, i, s, r, o, a, l) {
    ms = !1, Gr = null, D0.apply(O0, arguments)
}

function L0(t, e, n, i, s, r, o, a, l) {
    if (A0.apply(this, arguments), ms) {
        if (ms) {
            var u = Gr;
            ms = !1, Gr = null
        } else throw Error(T(198));
        qr || (qr = !0, Pl = u)
    }
}

function ei(t) {
    var e = t,
        n = t;
    if (t.alternate)
        for (; e.return;) e = e.return;
    else {
        t = e;
        do e = t, e.flags & 4098 && (n = e.return), t = e.return; while (t)
    }
    return e.tag === 3 ? n : null
}

function Bp(t) {
    if (t.tag === 13) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated
    }
    return null
}

function yd(t) {
    if (ei(t) !== t) throw Error(T(188))
}

function I0(t) {
    var e = t.alternate;
    if (!e) {
        if (e = ei(t), e === null) throw Error(T(188));
        return e !== t ? null : t
    }
    for (var n = t, i = e;;) {
        var s = n.return;
        if (s === null) break;
        var r = s.alternate;
        if (r === null) {
            if (i = s.return, i !== null) {
                n = i;
                continue
            }
            break
        }
        if (s.child === r.child) {
            for (r = s.child; r;) {
                if (r === n) return yd(s), t;
                if (r === i) return yd(s), e;
                r = r.sibling
            }
            throw Error(T(188))
        }
        if (n.return !== i.return) n = s, i = r;
        else {
            for (var o = !1, a = s.child; a;) {
                if (a === n) {
                    o = !0, n = s, i = r;
                    break
                }
                if (a === i) {
                    o = !0, i = s, n = r;
                    break
                }
                a = a.sibling
            }
            if (!o) {
                for (a = r.child; a;) {
                    if (a === n) {
                        o = !0, n = r, i = s;
                        break
                    }
                    if (a === i) {
                        o = !0, i = r, n = s;
                        break
                    }
                    a = a.sibling
                }
                if (!o) throw Error(T(189))
            }
        }
        if (n.alternate !== i) throw Error(T(190))
    }
    if (n.tag !== 3) throw Error(T(188));
    return n.stateNode.current === n ? t : e
}

function Up(t) {
    return t = I0(t), t !== null ? $p(t) : null
}

function $p(t) {
    if (t.tag === 5 || t.tag === 6) return t;
    for (t = t.child; t !== null;) {
        var e = $p(t);
        if (e !== null) return e;
        t = t.sibling
    }
    return null
}
var Wp = Qe.unstable_scheduleCallback,
    vd = Qe.unstable_cancelCallback,
    F0 = Qe.unstable_shouldYield,
    N0 = Qe.unstable_requestPaint,
    ue = Qe.unstable_now,
    V0 = Qe.unstable_getCurrentPriorityLevel,
    Nu = Qe.unstable_ImmediatePriority,
    Hp = Qe.unstable_UserBlockingPriority,
    Kr = Qe.unstable_NormalPriority,
    j0 = Qe.unstable_LowPriority,
    Gp = Qe.unstable_IdlePriority,
    Do = null,
    Tt = null;

function B0(t) {
    if (Tt && typeof Tt.onCommitFiberRoot == "function") try {
        Tt.onCommitFiberRoot(Do, t, void 0, (t.current.flags & 128) === 128)
    } catch {}
}
var gt = Math.clz32 ? Math.clz32 : W0,
    U0 = Math.log,
    $0 = Math.LN2;

function W0(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (U0(t) / $0 | 0) | 0
}
var fr = 64,
    hr = 4194304;

function cs(t) {
    switch (t & -t) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return t & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return t
    }
}

function Qr(t, e) {
    var n = t.pendingLanes;
    if (n === 0) return 0;
    var i = 0,
        s = t.suspendedLanes,
        r = t.pingedLanes,
        o = n & 268435455;
    if (o !== 0) {
        var a = o & ~s;
        a !== 0 ? i = cs(a) : (r &= o, r !== 0 && (i = cs(r)))
    } else o = n & ~s, o !== 0 ? i = cs(o) : r !== 0 && (i = cs(r));
    if (i === 0) return 0;
    if (e !== 0 && e !== i && !(e & s) && (s = i & -i, r = e & -e, s >= r || s === 16 && (r & 4194240) !== 0)) return e;
    if (i & 4 && (i |= n & 16), e = t.entangledLanes, e !== 0)
        for (t = t.entanglements, e &= i; 0 < e;) n = 31 - gt(e), s = 1 << n, i |= t[n], e &= ~s;
    return i
}

function H0(t, e) {
    switch (t) {
        case 1:
        case 2:
        case 4:
            return e + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function G0(t, e) {
    for (var n = t.suspendedLanes, i = t.pingedLanes, s = t.expirationTimes, r = t.pendingLanes; 0 < r;) {
        var o = 31 - gt(r),
            a = 1 << o,
            l = s[o];
        l === -1 ? (!(a & n) || a & i) && (s[o] = H0(a, e)) : l <= e && (t.expiredLanes |= a), r &= ~a
    }
}

function Cl(t) {
    return t = t.pendingLanes & -1073741825, t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
}

function qp() {
    var t = fr;
    return fr <<= 1, !(fr & 4194240) && (fr = 64), t
}

function ca(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e
}

function Xs(t, e, n) {
    t.pendingLanes |= e, e !== 536870912 && (t.suspendedLanes = 0, t.pingedLanes = 0), t = t.eventTimes, e = 31 - gt(e), t[e] = n
}

function q0(t, e) {
    var n = t.pendingLanes & ~e;
    t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.expiredLanes &= e, t.mutableReadLanes &= e, t.entangledLanes &= e, e = t.entanglements;
    var i = t.eventTimes;
    for (t = t.expirationTimes; 0 < n;) {
        var s = 31 - gt(n),
            r = 1 << s;
        e[s] = 0, i[s] = -1, t[s] = -1, n &= ~r
    }
}

function Vu(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n;) {
        var i = 31 - gt(n),
            s = 1 << i;
        s & e | t[i] & e && (t[i] |= e), n &= ~s
    }
}
var W = 0;

function Kp(t) {
    return t &= -t, 1 < t ? 4 < t ? t & 268435455 ? 16 : 536870912 : 4 : 1
}
var Qp, ju, Xp, Yp, Zp, _l = !1,
    pr = [],
    cn = null,
    dn = null,
    fn = null,
    zs = new Map,
    Ds = new Map,
    nn = [],
    K0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function wd(t, e) {
    switch (t) {
        case "focusin":
        case "focusout":
            cn = null;
            break;
        case "dragenter":
        case "dragleave":
            dn = null;
            break;
        case "mouseover":
        case "mouseout":
            fn = null;
            break;
        case "pointerover":
        case "pointerout":
            zs.delete(e.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Ds.delete(e.pointerId)
    }
}

function Ji(t, e, n, i, s, r) {
    return t === null || t.nativeEvent !== r ? (t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: i,
        nativeEvent: r,
        targetContainers: [s]
    }, e !== null && (e = Zs(e), e !== null && ju(e)), t) : (t.eventSystemFlags |= i, e = t.targetContainers, s !== null && e.indexOf(s) === -1 && e.push(s), t)
}

function Q0(t, e, n, i, s) {
    switch (e) {
        case "focusin":
            return cn = Ji(cn, t, e, n, i, s), !0;
        case "dragenter":
            return dn = Ji(dn, t, e, n, i, s), !0;
        case "mouseover":
            return fn = Ji(fn, t, e, n, i, s), !0;
        case "pointerover":
            var r = s.pointerId;
            return zs.set(r, Ji(zs.get(r) || null, t, e, n, i, s)), !0;
        case "gotpointercapture":
            return r = s.pointerId, Ds.set(r, Ji(Ds.get(r) || null, t, e, n, i, s)), !0
    }
    return !1
}

function Jp(t) {
    var e = Nn(t.target);
    if (e !== null) {
        var n = ei(e);
        if (n !== null) {
            if (e = n.tag, e === 13) {
                if (e = Bp(n), e !== null) {
                    t.blockedOn = e, Zp(t.priority, function() {
                        Xp(n)
                    });
                    return
                }
            } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    t.blockedOn = null
}

function Rr(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length;) {
        var n = Tl(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
        if (n === null) {
            n = t.nativeEvent;
            var i = new n.constructor(n.type, n);
            bl = i, n.target.dispatchEvent(i), bl = null
        } else return e = Zs(n), e !== null && ju(e), t.blockedOn = n, !1;
        e.shift()
    }
    return !0
}

function xd(t, e, n) {
    Rr(t) && n.delete(e)
}

function X0() {
    _l = !1, cn !== null && Rr(cn) && (cn = null), dn !== null && Rr(dn) && (dn = null), fn !== null && Rr(fn) && (fn = null), zs.forEach(xd), Ds.forEach(xd)
}

function es(t, e) {
    t.blockedOn === e && (t.blockedOn = null, _l || (_l = !0, Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority, X0)))
}

function Os(t) {
    function e(s) {
        return es(s, t)
    }
    if (0 < pr.length) {
        es(pr[0], t);
        for (var n = 1; n < pr.length; n++) {
            var i = pr[n];
            i.blockedOn === t && (i.blockedOn = null)
        }
    }
    for (cn !== null && es(cn, t), dn !== null && es(dn, t), fn !== null && es(fn, t), zs.forEach(e), Ds.forEach(e), n = 0; n < nn.length; n++) i = nn[n], i.blockedOn === t && (i.blockedOn = null);
    for (; 0 < nn.length && (n = nn[0], n.blockedOn === null);) Jp(n), n.blockedOn === null && nn.shift()
}
var _i = Qt.ReactCurrentBatchConfig,
    Xr = !0;

function Y0(t, e, n, i) {
    var s = W,
        r = _i.transition;
    _i.transition = null;
    try {
        W = 1, Bu(t, e, n, i)
    } finally {
        W = s, _i.transition = r
    }
}

function Z0(t, e, n, i) {
    var s = W,
        r = _i.transition;
    _i.transition = null;
    try {
        W = 4, Bu(t, e, n, i)
    } finally {
        W = s, _i.transition = r
    }
}

function Bu(t, e, n, i) {
    if (Xr) {
        var s = Tl(t, e, n, i);
        if (s === null) xa(t, e, i, Yr, n), wd(t, i);
        else if (Q0(s, t, e, n, i)) i.stopPropagation();
        else if (wd(t, i), e & 4 && -1 < K0.indexOf(t)) {
            for (; s !== null;) {
                var r = Zs(s);
                if (r !== null && Qp(r), r = Tl(t, e, n, i), r === null && xa(t, e, i, Yr, n), r === s) break;
                s = r
            }
            s !== null && i.stopPropagation()
        } else xa(t, e, i, null, n)
    }
}
var Yr = null;

function Tl(t, e, n, i) {
    if (Yr = null, t = Fu(i), t = Nn(t), t !== null)
        if (e = ei(t), e === null) t = null;
        else if (n = e.tag, n === 13) {
        if (t = Bp(e), t !== null) return t;
        t = null
    } else if (n === 3) {
        if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
        t = null
    } else e !== t && (t = null);
    return Yr = t, null
}

function em(t) {
    switch (t) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (V0()) {
                case Nu:
                    return 1;
                case Hp:
                    return 4;
                case Kr:
                case j0:
                    return 16;
                case Gp:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var on = null,
    Uu = null,
    zr = null;

function tm() {
    if (zr) return zr;
    var t, e = Uu,
        n = e.length,
        i, s = "value" in on ? on.value : on.textContent,
        r = s.length;
    for (t = 0; t < n && e[t] === s[t]; t++);
    var o = n - t;
    for (i = 1; i <= o && e[n - i] === s[r - i]; i++);
    return zr = s.slice(t, 1 < i ? 1 - i : void 0)
}

function Dr(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0
}

function mr() {
    return !0
}

function bd() {
    return !1
}

function Ze(t) {
    function e(n, i, s, r, o) {
        this._reactName = n, this._targetInst = s, this.type = i, this.nativeEvent = r, this.target = o, this.currentTarget = null;
        for (var a in t) t.hasOwnProperty(a) && (n = t[a], this[a] = n ? n(r) : r[a]);
        return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? mr : bd, this.isPropagationStopped = bd, this
    }
    return se(e.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = mr)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = mr)
        },
        persist: function() {},
        isPersistent: mr
    }), e
}
var Gi = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(t) {
            return t.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    $u = Ze(Gi),
    Ys = se({}, Gi, {
        view: 0,
        detail: 0
    }),
    J0 = Ze(Ys),
    da, fa, ts, Oo = se({}, Ys, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Wu,
        button: 0,
        buttons: 0,
        relatedTarget: function(t) {
            return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
        },
        movementX: function(t) {
            return "movementX" in t ? t.movementX : (t !== ts && (ts && t.type === "mousemove" ? (da = t.screenX - ts.screenX, fa = t.screenY - ts.screenY) : fa = da = 0, ts = t), da)
        },
        movementY: function(t) {
            return "movementY" in t ? t.movementY : fa
        }
    }),
    kd = Ze(Oo),
    ew = se({}, Oo, {
        dataTransfer: 0
    }),
    tw = Ze(ew),
    nw = se({}, Ys, {
        relatedTarget: 0
    }),
    ha = Ze(nw),
    iw = se({}, Gi, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    sw = Ze(iw),
    rw = se({}, Gi, {
        clipboardData: function(t) {
            return "clipboardData" in t ? t.clipboardData : window.clipboardData
        }
    }),
    ow = Ze(rw),
    aw = se({}, Gi, {
        data: 0
    }),
    Sd = Ze(aw),
    lw = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    uw = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    cw = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function dw(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = cw[t]) ? !!e[t] : !1
}

function Wu() {
    return dw
}
var fw = se({}, Ys, {
        key: function(t) {
            if (t.key) {
                var e = lw[t.key] || t.key;
                if (e !== "Unidentified") return e
            }
            return t.type === "keypress" ? (t = Dr(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? uw[t.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Wu,
        charCode: function(t) {
            return t.type === "keypress" ? Dr(t) : 0
        },
        keyCode: function(t) {
            return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        },
        which: function(t) {
            return t.type === "keypress" ? Dr(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        }
    }),
    hw = Ze(fw),
    pw = se({}, Oo, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    Pd = Ze(pw),
    mw = se({}, Ys, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Wu
    }),
    gw = Ze(mw),
    yw = se({}, Gi, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    vw = Ze(yw),
    ww = se({}, Oo, {
        deltaX: function(t) {
            return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0
        },
        deltaY: function(t) {
            return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    xw = Ze(ww),
    bw = [9, 13, 27, 32],
    Hu = Wt && "CompositionEvent" in window,
    gs = null;
Wt && "documentMode" in document && (gs = document.documentMode);
var kw = Wt && "TextEvent" in window && !gs,
    nm = Wt && (!Hu || gs && 8 < gs && 11 >= gs),
    Cd = " ",
    _d = !1;

function im(t, e) {
    switch (t) {
        case "keyup":
            return bw.indexOf(e.keyCode) !== -1;
        case "keydown":
            return e.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function sm(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null
}
var oi = !1;

function Sw(t, e) {
    switch (t) {
        case "compositionend":
            return sm(e);
        case "keypress":
            return e.which !== 32 ? null : (_d = !0, Cd);
        case "textInput":
            return t = e.data, t === Cd && _d ? null : t;
        default:
            return null
    }
}

function Pw(t, e) {
    if (oi) return t === "compositionend" || !Hu && im(t, e) ? (t = tm(), zr = Uu = on = null, oi = !1, t) : null;
    switch (t) {
        case "paste":
            return null;
        case "keypress":
            if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
                if (e.char && 1 < e.char.length) return e.char;
                if (e.which) return String.fromCharCode(e.which)
            }
            return null;
        case "compositionend":
            return nm && e.locale !== "ko" ? null : e.data;
        default:
            return null
    }
}
var Cw = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function Td(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Cw[t.type] : e === "textarea"
}

function rm(t, e, n, i) {
    Ip(i), e = Zr(e, "onChange"), 0 < e.length && (n = new $u("onChange", "change", null, n, i), t.push({
        event: n,
        listeners: e
    }))
}
var ys = null,
    As = null;

function _w(t) {
    gm(t, 0)
}

function Ao(t) {
    var e = ui(t);
    if (Mp(e)) return t
}

function Tw(t, e) {
    if (t === "change") return e
}
var om = !1;
if (Wt) {
    var pa;
    if (Wt) {
        var ma = "oninput" in document;
        if (!ma) {
            var Ed = document.createElement("div");
            Ed.setAttribute("oninput", "return;"), ma = typeof Ed.oninput == "function"
        }
        pa = ma
    } else pa = !1;
    om = pa && (!document.documentMode || 9 < document.documentMode)
}

function Md() {
    ys && (ys.detachEvent("onpropertychange", am), As = ys = null)
}

function am(t) {
    if (t.propertyName === "value" && Ao(As)) {
        var e = [];
        rm(e, As, t, Fu(t)), jp(_w, e)
    }
}

function Ew(t, e, n) {
    t === "focusin" ? (Md(), ys = e, As = n, ys.attachEvent("onpropertychange", am)) : t === "focusout" && Md()
}

function Mw(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return Ao(As)
}

function Rw(t, e) {
    if (t === "click") return Ao(e)
}

function zw(t, e) {
    if (t === "input" || t === "change") return Ao(e)
}

function Dw(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
}
var wt = typeof Object.is == "function" ? Object.is : Dw;

function Ls(t, e) {
    if (wt(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null) return !1;
    var n = Object.keys(t),
        i = Object.keys(e);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
        var s = n[i];
        if (!ul.call(e, s) || !wt(t[s], e[s])) return !1
    }
    return !0
}

function Rd(t) {
    for (; t && t.firstChild;) t = t.firstChild;
    return t
}

function zd(t, e) {
    var n = Rd(t);
    t = 0;
    for (var i; n;) {
        if (n.nodeType === 3) {
            if (i = t + n.textContent.length, t <= e && i >= e) return {
                node: n,
                offset: e - t
            };
            t = i
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Rd(n)
    }
}

function lm(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? lm(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
}

function um() {
    for (var t = window, e = Hr(); e instanceof t.HTMLIFrameElement;) {
        try {
            var n = typeof e.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) t = e.contentWindow;
        else break;
        e = Hr(t.document)
    }
    return e
}

function Gu(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
}

function Ow(t) {
    var e = um(),
        n = t.focusedElem,
        i = t.selectionRange;
    if (e !== n && n && n.ownerDocument && lm(n.ownerDocument.documentElement, n)) {
        if (i !== null && Gu(n)) {
            if (e = i.start, t = i.end, t === void 0 && (t = e), "selectionStart" in n) n.selectionStart = e, n.selectionEnd = Math.min(t, n.value.length);
            else if (t = (e = n.ownerDocument || document) && e.defaultView || window, t.getSelection) {
                t = t.getSelection();
                var s = n.textContent.length,
                    r = Math.min(i.start, s);
                i = i.end === void 0 ? r : Math.min(i.end, s), !t.extend && r > i && (s = i, i = r, r = s), s = zd(n, r);
                var o = zd(n, i);
                s && o && (t.rangeCount !== 1 || t.anchorNode !== s.node || t.anchorOffset !== s.offset || t.focusNode !== o.node || t.focusOffset !== o.offset) && (e = e.createRange(), e.setStart(s.node, s.offset), t.removeAllRanges(), r > i ? (t.addRange(e), t.extend(o.node, o.offset)) : (e.setEnd(o.node, o.offset), t.addRange(e)))
            }
        }
        for (e = [], t = n; t = t.parentNode;) t.nodeType === 1 && e.push({
            element: t,
            left: t.scrollLeft,
            top: t.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < e.length; n++) t = e[n], t.element.scrollLeft = t.left, t.element.scrollTop = t.top
    }
}
var Aw = Wt && "documentMode" in document && 11 >= document.documentMode,
    ai = null,
    El = null,
    vs = null,
    Ml = !1;

function Dd(t, e, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ml || ai == null || ai !== Hr(i) || (i = ai, "selectionStart" in i && Gu(i) ? i = {
        start: i.selectionStart,
        end: i.selectionEnd
    } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
    }), vs && Ls(vs, i) || (vs = i, i = Zr(El, "onSelect"), 0 < i.length && (e = new $u("onSelect", "select", null, e, n), t.push({
        event: e,
        listeners: i
    }), e.target = ai)))
}

function gr(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n
}
var li = {
        animationend: gr("Animation", "AnimationEnd"),
        animationiteration: gr("Animation", "AnimationIteration"),
        animationstart: gr("Animation", "AnimationStart"),
        transitionend: gr("Transition", "TransitionEnd")
    },
    ga = {},
    cm = {};
Wt && (cm = document.createElement("div").style, "AnimationEvent" in window || (delete li.animationend.animation, delete li.animationiteration.animation, delete li.animationstart.animation), "TransitionEvent" in window || delete li.transitionend.transition);

function Lo(t) {
    if (ga[t]) return ga[t];
    if (!li[t]) return t;
    var e = li[t],
        n;
    for (n in e)
        if (e.hasOwnProperty(n) && n in cm) return ga[t] = e[n];
    return t
}
var dm = Lo("animationend"),
    fm = Lo("animationiteration"),
    hm = Lo("animationstart"),
    pm = Lo("transitionend"),
    mm = new Map,
    Od = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function Cn(t, e) {
    mm.set(t, e), Jn(e, [t])
}
for (var ya = 0; ya < Od.length; ya++) {
    var va = Od[ya],
        Lw = va.toLowerCase(),
        Iw = va[0].toUpperCase() + va.slice(1);
    Cn(Lw, "on" + Iw)
}
Cn(dm, "onAnimationEnd");
Cn(fm, "onAnimationIteration");
Cn(hm, "onAnimationStart");
Cn("dblclick", "onDoubleClick");
Cn("focusin", "onFocus");
Cn("focusout", "onBlur");
Cn(pm, "onTransitionEnd");
zi("onMouseEnter", ["mouseout", "mouseover"]);
zi("onMouseLeave", ["mouseout", "mouseover"]);
zi("onPointerEnter", ["pointerout", "pointerover"]);
zi("onPointerLeave", ["pointerout", "pointerover"]);
Jn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Jn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Jn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Jn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Jn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Jn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ds = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    Fw = new Set("cancel close invalid load scroll toggle".split(" ").concat(ds));

function Ad(t, e, n) {
    var i = t.type || "unknown-event";
    t.currentTarget = n, L0(i, e, void 0, t), t.currentTarget = null
}

function gm(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
        var i = t[n],
            s = i.event;
        i = i.listeners;
        e: {
            var r = void 0;
            if (e)
                for (var o = i.length - 1; 0 <= o; o--) {
                    var a = i[o],
                        l = a.instance,
                        u = a.currentTarget;
                    if (a = a.listener, l !== r && s.isPropagationStopped()) break e;
                    Ad(s, a, u), r = l
                } else
                    for (o = 0; o < i.length; o++) {
                        if (a = i[o], l = a.instance, u = a.currentTarget, a = a.listener, l !== r && s.isPropagationStopped()) break e;
                        Ad(s, a, u), r = l
                    }
        }
    }
    if (qr) throw t = Pl, qr = !1, Pl = null, t
}

function Q(t, e) {
    var n = e[Al];
    n === void 0 && (n = e[Al] = new Set);
    var i = t + "__bubble";
    n.has(i) || (ym(e, t, 2, !1), n.add(i))
}

function wa(t, e, n) {
    var i = 0;
    e && (i |= 4), ym(n, t, i, e)
}
var yr = "_reactListening" + Math.random().toString(36).slice(2);

function Is(t) {
    if (!t[yr]) {
        t[yr] = !0, Pp.forEach(function(n) {
            n !== "selectionchange" && (Fw.has(n) || wa(n, !1, t), wa(n, !0, t))
        });
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[yr] || (e[yr] = !0, wa("selectionchange", !1, e))
    }
}

function ym(t, e, n, i) {
    switch (em(e)) {
        case 1:
            var s = Y0;
            break;
        case 4:
            s = Z0;
            break;
        default:
            s = Bu
    }
    n = s.bind(null, e, n, t), s = void 0, !Sl || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (s = !0), i ? s !== void 0 ? t.addEventListener(e, n, {
        capture: !0,
        passive: s
    }) : t.addEventListener(e, n, !0) : s !== void 0 ? t.addEventListener(e, n, {
        passive: s
    }) : t.addEventListener(e, n, !1)
}

function xa(t, e, n, i, s) {
    var r = i;
    if (!(e & 1) && !(e & 2) && i !== null) e: for (;;) {
        if (i === null) return;
        var o = i.tag;
        if (o === 3 || o === 4) {
            var a = i.stateNode.containerInfo;
            if (a === s || a.nodeType === 8 && a.parentNode === s) break;
            if (o === 4)
                for (o = i.return; o !== null;) {
                    var l = o.tag;
                    if ((l === 3 || l === 4) && (l = o.stateNode.containerInfo, l === s || l.nodeType === 8 && l.parentNode === s)) return;
                    o = o.return
                }
            for (; a !== null;) {
                if (o = Nn(a), o === null) return;
                if (l = o.tag, l === 5 || l === 6) {
                    i = r = o;
                    continue e
                }
                a = a.parentNode
            }
        }
        i = i.return
    }
    jp(function() {
        var u = r,
            c = Fu(n),
            d = [];
        e: {
            var f = mm.get(t);
            if (f !== void 0) {
                var h = $u,
                    y = t;
                switch (t) {
                    case "keypress":
                        if (Dr(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        h = hw;
                        break;
                    case "focusin":
                        y = "focus", h = ha;
                        break;
                    case "focusout":
                        y = "blur", h = ha;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        h = ha;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        h = kd;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        h = tw;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        h = gw;
                        break;
                    case dm:
                    case fm:
                    case hm:
                        h = sw;
                        break;
                    case pm:
                        h = vw;
                        break;
                    case "scroll":
                        h = J0;
                        break;
                    case "wheel":
                        h = xw;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        h = ow;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        h = Pd
                }
                var g = (e & 4) !== 0,
                    x = !g && t === "scroll",
                    p = g ? f !== null ? f + "Capture" : null : f;
                g = [];
                for (var m = u, v; m !== null;) {
                    v = m;
                    var w = v.stateNode;
                    if (v.tag === 5 && w !== null && (v = w, p !== null && (w = Rs(m, p), w != null && g.push(Fs(m, w, v)))), x) break;
                    m = m.return
                }
                0 < g.length && (f = new h(f, y, null, n, c), d.push({
                    event: f,
                    listeners: g
                }))
            }
        }
        if (!(e & 7)) {
            e: {
                if (f = t === "mouseover" || t === "pointerover", h = t === "mouseout" || t === "pointerout", f && n !== bl && (y = n.relatedTarget || n.fromElement) && (Nn(y) || y[Ht])) break e;
                if ((h || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, h ? (y = n.relatedTarget || n.toElement, h = u, y = y ? Nn(y) : null, y !== null && (x = ei(y), y !== x || y.tag !== 5 && y.tag !== 6) && (y = null)) : (h = null, y = u), h !== y)) {
                    if (g = kd, w = "onMouseLeave", p = "onMouseEnter", m = "mouse", (t === "pointerout" || t === "pointerover") && (g = Pd, w = "onPointerLeave", p = "onPointerEnter", m = "pointer"), x = h == null ? f : ui(h), v = y == null ? f : ui(y), f = new g(w, m + "leave", h, n, c), f.target = x, f.relatedTarget = v, w = null, Nn(c) === u && (g = new g(p, m + "enter", y, n, c), g.target = v, g.relatedTarget = x, w = g), x = w, h && y) t: {
                        for (g = h, p = y, m = 0, v = g; v; v = ni(v)) m++;
                        for (v = 0, w = p; w; w = ni(w)) v++;
                        for (; 0 < m - v;) g = ni(g),
                        m--;
                        for (; 0 < v - m;) p = ni(p),
                        v--;
                        for (; m--;) {
                            if (g === p || p !== null && g === p.alternate) break t;
                            g = ni(g), p = ni(p)
                        }
                        g = null
                    }
                    else g = null;
                    h !== null && Ld(d, f, h, g, !1), y !== null && x !== null && Ld(d, x, y, g, !0)
                }
            }
            e: {
                if (f = u ? ui(u) : window, h = f.nodeName && f.nodeName.toLowerCase(), h === "select" || h === "input" && f.type === "file") var b = Tw;
                else if (Td(f))
                    if (om) b = zw;
                    else {
                        b = Mw;
                        var S = Ew
                    }
                else(h = f.nodeName) && h.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (b = Rw);
                if (b && (b = b(t, u))) {
                    rm(d, b, n, c);
                    break e
                }
                S && S(t, f, u),
                t === "focusout" && (S = f._wrapperState) && S.controlled && f.type === "number" && gl(f, "number", f.value)
            }
            switch (S = u ? ui(u) : window, t) {
                case "focusin":
                    (Td(S) || S.contentEditable === "true") && (ai = S, El = u, vs = null);
                    break;
                case "focusout":
                    vs = El = ai = null;
                    break;
                case "mousedown":
                    Ml = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Ml = !1, Dd(d, n, c);
                    break;
                case "selectionchange":
                    if (Aw) break;
                case "keydown":
                case "keyup":
                    Dd(d, n, c)
            }
            var _;
            if (Hu) e: {
                switch (t) {
                    case "compositionstart":
                        var P = "onCompositionStart";
                        break e;
                    case "compositionend":
                        P = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        P = "onCompositionUpdate";
                        break e
                }
                P = void 0
            }
            else oi ? im(t, n) && (P = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");P && (nm && n.locale !== "ko" && (oi || P !== "onCompositionStart" ? P === "onCompositionEnd" && oi && (_ = tm()) : (on = c, Uu = "value" in on ? on.value : on.textContent, oi = !0)), S = Zr(u, P), 0 < S.length && (P = new Sd(P, t, null, n, c), d.push({
                event: P,
                listeners: S
            }), _ ? P.data = _ : (_ = sm(n), _ !== null && (P.data = _)))),
            (_ = kw ? Sw(t, n) : Pw(t, n)) && (u = Zr(u, "onBeforeInput"), 0 < u.length && (c = new Sd("onBeforeInput", "beforeinput", null, n, c), d.push({
                event: c,
                listeners: u
            }), c.data = _))
        }
        gm(d, e)
    })
}

function Fs(t, e, n) {
    return {
        instance: t,
        listener: e,
        currentTarget: n
    }
}

function Zr(t, e) {
    for (var n = e + "Capture", i = []; t !== null;) {
        var s = t,
            r = s.stateNode;
        s.tag === 5 && r !== null && (s = r, r = Rs(t, n), r != null && i.unshift(Fs(t, r, s)), r = Rs(t, e), r != null && i.push(Fs(t, r, s))), t = t.return
    }
    return i
}

function ni(t) {
    if (t === null) return null;
    do t = t.return; while (t && t.tag !== 5);
    return t || null
}

function Ld(t, e, n, i, s) {
    for (var r = e._reactName, o = []; n !== null && n !== i;) {
        var a = n,
            l = a.alternate,
            u = a.stateNode;
        if (l !== null && l === i) break;
        a.tag === 5 && u !== null && (a = u, s ? (l = Rs(n, r), l != null && o.unshift(Fs(n, l, a))) : s || (l = Rs(n, r), l != null && o.push(Fs(n, l, a)))), n = n.return
    }
    o.length !== 0 && t.push({
        event: e,
        listeners: o
    })
}
var Nw = /\r\n?/g,
    Vw = /\u0000|\uFFFD/g;

function Id(t) {
    return (typeof t == "string" ? t : "" + t).replace(Nw, `
`).replace(Vw, "")
}

function vr(t, e, n) {
    if (e = Id(e), Id(t) !== e && n) throw Error(T(425))
}

function Jr() {}
var Rl = null,
    zl = null;

function Dl(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
}
var Ol = typeof setTimeout == "function" ? setTimeout : void 0,
    jw = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Fd = typeof Promise == "function" ? Promise : void 0,
    Bw = typeof queueMicrotask == "function" ? queueMicrotask : typeof Fd < "u" ? function(t) {
        return Fd.resolve(null).then(t).catch(Uw)
    } : Ol;

function Uw(t) {
    setTimeout(function() {
        throw t
    })
}

function ba(t, e) {
    var n = e,
        i = 0;
    do {
        var s = n.nextSibling;
        if (t.removeChild(n), s && s.nodeType === 8)
            if (n = s.data, n === "/$") {
                if (i === 0) {
                    t.removeChild(s), Os(e);
                    return
                }
                i--
            } else n !== "$" && n !== "$?" && n !== "$!" || i++;
        n = s
    } while (n);
    Os(e)
}

function hn(t) {
    for (; t != null; t = t.nextSibling) {
        var e = t.nodeType;
        if (e === 1 || e === 3) break;
        if (e === 8) {
            if (e = t.data, e === "$" || e === "$!" || e === "$?") break;
            if (e === "/$") return null
        }
    }
    return t
}

function Nd(t) {
    t = t.previousSibling;
    for (var e = 0; t;) {
        if (t.nodeType === 8) {
            var n = t.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (e === 0) return t;
                e--
            } else n === "/$" && e++
        }
        t = t.previousSibling
    }
    return null
}
var qi = Math.random().toString(36).slice(2),
    _t = "__reactFiber$" + qi,
    Ns = "__reactProps$" + qi,
    Ht = "__reactContainer$" + qi,
    Al = "__reactEvents$" + qi,
    $w = "__reactListeners$" + qi,
    Ww = "__reactHandles$" + qi;

function Nn(t) {
    var e = t[_t];
    if (e) return e;
    for (var n = t.parentNode; n;) {
        if (e = n[Ht] || n[_t]) {
            if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
                for (t = Nd(t); t !== null;) {
                    if (n = t[_t]) return n;
                    t = Nd(t)
                }
            return e
        }
        t = n, n = t.parentNode
    }
    return null
}

function Zs(t) {
    return t = t[_t] || t[Ht], !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t
}

function ui(t) {
    if (t.tag === 5 || t.tag === 6) return t.stateNode;
    throw Error(T(33))
}

function Io(t) {
    return t[Ns] || null
}
var Ll = [],
    ci = -1;

function _n(t) {
    return {
        current: t
    }
}

function X(t) {
    0 > ci || (t.current = Ll[ci], Ll[ci] = null, ci--)
}

function q(t, e) {
    ci++, Ll[ci] = t.current, t.current = e
}
var xn = {},
    De = _n(xn),
    je = _n(!1),
    Gn = xn;

function Di(t, e) {
    var n = t.type.contextTypes;
    if (!n) return xn;
    var i = t.stateNode;
    if (i && i.__reactInternalMemoizedUnmaskedChildContext === e) return i.__reactInternalMemoizedMaskedChildContext;
    var s = {},
        r;
    for (r in n) s[r] = e[r];
    return i && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = e, t.__reactInternalMemoizedMaskedChildContext = s), s
}

function Be(t) {
    return t = t.childContextTypes, t != null
}

function eo() {
    X(je), X(De)
}

function Vd(t, e, n) {
    if (De.current !== xn) throw Error(T(168));
    q(De, e), q(je, n)
}

function vm(t, e, n) {
    var i = t.stateNode;
    if (e = e.childContextTypes, typeof i.getChildContext != "function") return n;
    i = i.getChildContext();
    for (var s in i)
        if (!(s in e)) throw Error(T(108, E0(t) || "Unknown", s));
    return se({}, n, i)
}

function to(t) {
    return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || xn, Gn = De.current, q(De, t), q(je, je.current), !0
}

function jd(t, e, n) {
    var i = t.stateNode;
    if (!i) throw Error(T(169));
    n ? (t = vm(t, e, Gn), i.__reactInternalMemoizedMergedChildContext = t, X(je), X(De), q(De, t)) : X(je), q(je, n)
}
var Lt = null,
    Fo = !1,
    ka = !1;

function wm(t) {
    Lt === null ? Lt = [t] : Lt.push(t)
}

function Hw(t) {
    Fo = !0, wm(t)
}

function Tn() {
    if (!ka && Lt !== null) {
        ka = !0;
        var t = 0,
            e = W;
        try {
            var n = Lt;
            for (W = 1; t < n.length; t++) {
                var i = n[t];
                do i = i(!0); while (i !== null)
            }
            Lt = null, Fo = !1
        } catch (s) {
            throw Lt !== null && (Lt = Lt.slice(t + 1)), Wp(Nu, Tn), s
        } finally {
            W = e, ka = !1
        }
    }
    return null
}
var di = [],
    fi = 0,
    no = null,
    io = 0,
    it = [],
    st = 0,
    qn = null,
    It = 1,
    Ft = "";

function An(t, e) {
    di[fi++] = io, di[fi++] = no, no = t, io = e
}

function xm(t, e, n) {
    it[st++] = It, it[st++] = Ft, it[st++] = qn, qn = t;
    var i = It;
    t = Ft;
    var s = 32 - gt(i) - 1;
    i &= ~(1 << s), n += 1;
    var r = 32 - gt(e) + s;
    if (30 < r) {
        var o = s - s % 5;
        r = (i & (1 << o) - 1).toString(32), i >>= o, s -= o, It = 1 << 32 - gt(e) + s | n << s | i, Ft = r + t
    } else It = 1 << r | n << s | i, Ft = t
}

function qu(t) {
    t.return !== null && (An(t, 1), xm(t, 1, 0))
}

function Ku(t) {
    for (; t === no;) no = di[--fi], di[fi] = null, io = di[--fi], di[fi] = null;
    for (; t === qn;) qn = it[--st], it[st] = null, Ft = it[--st], it[st] = null, It = it[--st], it[st] = null
}
var qe = null,
    Ge = null,
    J = !1,
    mt = null;

function bm(t, e) {
    var n = rt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = e, n.return = t, e = t.deletions, e === null ? (t.deletions = [n], t.flags |= 16) : e.push(n)
}

function Bd(t, e) {
    switch (t.tag) {
        case 5:
            var n = t.type;
            return e = e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase() ? null : e, e !== null ? (t.stateNode = e, qe = t, Ge = hn(e.firstChild), !0) : !1;
        case 6:
            return e = t.pendingProps === "" || e.nodeType !== 3 ? null : e, e !== null ? (t.stateNode = e, qe = t, Ge = null, !0) : !1;
        case 13:
            return e = e.nodeType !== 8 ? null : e, e !== null ? (n = qn !== null ? {
                id: It,
                overflow: Ft
            } : null, t.memoizedState = {
                dehydrated: e,
                treeContext: n,
                retryLane: 1073741824
            }, n = rt(18, null, null, 0), n.stateNode = e, n.return = t, t.child = n, qe = t, Ge = null, !0) : !1;
        default:
            return !1
    }
}

function Il(t) {
    return (t.mode & 1) !== 0 && (t.flags & 128) === 0
}

function Fl(t) {
    if (J) {
        var e = Ge;
        if (e) {
            var n = e;
            if (!Bd(t, e)) {
                if (Il(t)) throw Error(T(418));
                e = hn(n.nextSibling);
                var i = qe;
                e && Bd(t, e) ? bm(i, n) : (t.flags = t.flags & -4097 | 2, J = !1, qe = t)
            }
        } else {
            if (Il(t)) throw Error(T(418));
            t.flags = t.flags & -4097 | 2, J = !1, qe = t
        }
    }
}

function Ud(t) {
    for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13;) t = t.return;
    qe = t
}

function wr(t) {
    if (t !== qe) return !1;
    if (!J) return Ud(t), J = !0, !1;
    var e;
    if ((e = t.tag !== 3) && !(e = t.tag !== 5) && (e = t.type, e = e !== "head" && e !== "body" && !Dl(t.type, t.memoizedProps)), e && (e = Ge)) {
        if (Il(t)) throw km(), Error(T(418));
        for (; e;) bm(t, e), e = hn(e.nextSibling)
    }
    if (Ud(t), t.tag === 13) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(T(317));
        e: {
            for (t = t.nextSibling, e = 0; t;) {
                if (t.nodeType === 8) {
                    var n = t.data;
                    if (n === "/$") {
                        if (e === 0) {
                            Ge = hn(t.nextSibling);
                            break e
                        }
                        e--
                    } else n !== "$" && n !== "$!" && n !== "$?" || e++
                }
                t = t.nextSibling
            }
            Ge = null
        }
    } else Ge = qe ? hn(t.stateNode.nextSibling) : null;
    return !0
}

function km() {
    for (var t = Ge; t;) t = hn(t.nextSibling)
}

function Oi() {
    Ge = qe = null, J = !1
}

function Qu(t) {
    mt === null ? mt = [t] : mt.push(t)
}
var Gw = Qt.ReactCurrentBatchConfig;

function ns(t, e, n) {
    if (t = n.ref, t !== null && typeof t != "function" && typeof t != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(T(309));
                var i = n.stateNode
            }
            if (!i) throw Error(T(147, t));
            var s = i,
                r = "" + t;
            return e !== null && e.ref !== null && typeof e.ref == "function" && e.ref._stringRef === r ? e.ref : (e = function(o) {
                var a = s.refs;
                o === null ? delete a[r] : a[r] = o
            }, e._stringRef = r, e)
        }
        if (typeof t != "string") throw Error(T(284));
        if (!n._owner) throw Error(T(290, t))
    }
    return t
}

function xr(t, e) {
    throw t = Object.prototype.toString.call(e), Error(T(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t))
}

function $d(t) {
    var e = t._init;
    return e(t._payload)
}

function Sm(t) {
    function e(p, m) {
        if (t) {
            var v = p.deletions;
            v === null ? (p.deletions = [m], p.flags |= 16) : v.push(m)
        }
    }

    function n(p, m) {
        if (!t) return null;
        for (; m !== null;) e(p, m), m = m.sibling;
        return null
    }

    function i(p, m) {
        for (p = new Map; m !== null;) m.key !== null ? p.set(m.key, m) : p.set(m.index, m), m = m.sibling;
        return p
    }

    function s(p, m) {
        return p = yn(p, m), p.index = 0, p.sibling = null, p
    }

    function r(p, m, v) {
        return p.index = v, t ? (v = p.alternate, v !== null ? (v = v.index, v < m ? (p.flags |= 2, m) : v) : (p.flags |= 2, m)) : (p.flags |= 1048576, m)
    }

    function o(p) {
        return t && p.alternate === null && (p.flags |= 2), p
    }

    function a(p, m, v, w) {
        return m === null || m.tag !== 6 ? (m = Ma(v, p.mode, w), m.return = p, m) : (m = s(m, v), m.return = p, m)
    }

    function l(p, m, v, w) {
        var b = v.type;
        return b === ri ? c(p, m, v.props.children, w, v.key) : m !== null && (m.elementType === b || typeof b == "object" && b !== null && b.$$typeof === en && $d(b) === m.type) ? (w = s(m, v.props), w.ref = ns(p, m, v), w.return = p, w) : (w = Vr(v.type, v.key, v.props, null, p.mode, w), w.ref = ns(p, m, v), w.return = p, w)
    }

    function u(p, m, v, w) {
        return m === null || m.tag !== 4 || m.stateNode.containerInfo !== v.containerInfo || m.stateNode.implementation !== v.implementation ? (m = Ra(v, p.mode, w), m.return = p, m) : (m = s(m, v.children || []), m.return = p, m)
    }

    function c(p, m, v, w, b) {
        return m === null || m.tag !== 7 ? (m = Wn(v, p.mode, w, b), m.return = p, m) : (m = s(m, v), m.return = p, m)
    }

    function d(p, m, v) {
        if (typeof m == "string" && m !== "" || typeof m == "number") return m = Ma("" + m, p.mode, v), m.return = p, m;
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case ur:
                    return v = Vr(m.type, m.key, m.props, null, p.mode, v), v.ref = ns(p, null, m), v.return = p, v;
                case si:
                    return m = Ra(m, p.mode, v), m.return = p, m;
                case en:
                    var w = m._init;
                    return d(p, w(m._payload), v)
            }
            if (us(m) || Yi(m)) return m = Wn(m, p.mode, v, null), m.return = p, m;
            xr(p, m)
        }
        return null
    }

    function f(p, m, v, w) {
        var b = m !== null ? m.key : null;
        if (typeof v == "string" && v !== "" || typeof v == "number") return b !== null ? null : a(p, m, "" + v, w);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case ur:
                    return v.key === b ? l(p, m, v, w) : null;
                case si:
                    return v.key === b ? u(p, m, v, w) : null;
                case en:
                    return b = v._init, f(p, m, b(v._payload), w)
            }
            if (us(v) || Yi(v)) return b !== null ? null : c(p, m, v, w, null);
            xr(p, v)
        }
        return null
    }

    function h(p, m, v, w, b) {
        if (typeof w == "string" && w !== "" || typeof w == "number") return p = p.get(v) || null, a(m, p, "" + w, b);
        if (typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
                case ur:
                    return p = p.get(w.key === null ? v : w.key) || null, l(m, p, w, b);
                case si:
                    return p = p.get(w.key === null ? v : w.key) || null, u(m, p, w, b);
                case en:
                    var S = w._init;
                    return h(p, m, v, S(w._payload), b)
            }
            if (us(w) || Yi(w)) return p = p.get(v) || null, c(m, p, w, b, null);
            xr(m, w)
        }
        return null
    }

    function y(p, m, v, w) {
        for (var b = null, S = null, _ = m, P = m = 0, O = null; _ !== null && P < v.length; P++) {
            _.index > P ? (O = _, _ = null) : O = _.sibling;
            var D = f(p, _, v[P], w);
            if (D === null) {
                _ === null && (_ = O);
                break
            }
            t && _ && D.alternate === null && e(p, _), m = r(D, m, P), S === null ? b = D : S.sibling = D, S = D, _ = O
        }
        if (P === v.length) return n(p, _), J && An(p, P), b;
        if (_ === null) {
            for (; P < v.length; P++) _ = d(p, v[P], w), _ !== null && (m = r(_, m, P), S === null ? b = _ : S.sibling = _, S = _);
            return J && An(p, P), b
        }
        for (_ = i(p, _); P < v.length; P++) O = h(_, p, P, v[P], w), O !== null && (t && O.alternate !== null && _.delete(O.key === null ? P : O.key), m = r(O, m, P), S === null ? b = O : S.sibling = O, S = O);
        return t && _.forEach(function(B) {
            return e(p, B)
        }), J && An(p, P), b
    }

    function g(p, m, v, w) {
        var b = Yi(v);
        if (typeof b != "function") throw Error(T(150));
        if (v = b.call(v), v == null) throw Error(T(151));
        for (var S = b = null, _ = m, P = m = 0, O = null, D = v.next(); _ !== null && !D.done; P++, D = v.next()) {
            _.index > P ? (O = _, _ = null) : O = _.sibling;
            var B = f(p, _, D.value, w);
            if (B === null) {
                _ === null && (_ = O);
                break
            }
            t && _ && B.alternate === null && e(p, _), m = r(B, m, P), S === null ? b = B : S.sibling = B, S = B, _ = O
        }
        if (D.done) return n(p, _), J && An(p, P), b;
        if (_ === null) {
            for (; !D.done; P++, D = v.next()) D = d(p, D.value, w), D !== null && (m = r(D, m, P), S === null ? b = D : S.sibling = D, S = D);
            return J && An(p, P), b
        }
        for (_ = i(p, _); !D.done; P++, D = v.next()) D = h(_, p, P, D.value, w), D !== null && (t && D.alternate !== null && _.delete(D.key === null ? P : D.key), m = r(D, m, P), S === null ? b = D : S.sibling = D, S = D);
        return t && _.forEach(function(V) {
            return e(p, V)
        }), J && An(p, P), b
    }

    function x(p, m, v, w) {
        if (typeof v == "object" && v !== null && v.type === ri && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case ur:
                    e: {
                        for (var b = v.key, S = m; S !== null;) {
                            if (S.key === b) {
                                if (b = v.type, b === ri) {
                                    if (S.tag === 7) {
                                        n(p, S.sibling), m = s(S, v.props.children), m.return = p, p = m;
                                        break e
                                    }
                                } else if (S.elementType === b || typeof b == "object" && b !== null && b.$$typeof === en && $d(b) === S.type) {
                                    n(p, S.sibling), m = s(S, v.props), m.ref = ns(p, S, v), m.return = p, p = m;
                                    break e
                                }
                                n(p, S);
                                break
                            } else e(p, S);
                            S = S.sibling
                        }
                        v.type === ri ? (m = Wn(v.props.children, p.mode, w, v.key), m.return = p, p = m) : (w = Vr(v.type, v.key, v.props, null, p.mode, w), w.ref = ns(p, m, v), w.return = p, p = w)
                    }
                    return o(p);
                case si:
                    e: {
                        for (S = v.key; m !== null;) {
                            if (m.key === S)
                                if (m.tag === 4 && m.stateNode.containerInfo === v.containerInfo && m.stateNode.implementation === v.implementation) {
                                    n(p, m.sibling), m = s(m, v.children || []), m.return = p, p = m;
                                    break e
                                } else {
                                    n(p, m);
                                    break
                                }
                            else e(p, m);
                            m = m.sibling
                        }
                        m = Ra(v, p.mode, w),
                        m.return = p,
                        p = m
                    }
                    return o(p);
                case en:
                    return S = v._init, x(p, m, S(v._payload), w)
            }
            if (us(v)) return y(p, m, v, w);
            if (Yi(v)) return g(p, m, v, w);
            xr(p, v)
        }
        return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, m !== null && m.tag === 6 ? (n(p, m.sibling), m = s(m, v), m.return = p, p = m) : (n(p, m), m = Ma(v, p.mode, w), m.return = p, p = m), o(p)) : n(p, m)
    }
    return x
}
var Ai = Sm(!0),
    Pm = Sm(!1),
    so = _n(null),
    ro = null,
    hi = null,
    Xu = null;

function Yu() {
    Xu = hi = ro = null
}

function Zu(t) {
    var e = so.current;
    X(so), t._currentValue = e
}

function Nl(t, e, n) {
    for (; t !== null;) {
        var i = t.alternate;
        if ((t.childLanes & e) !== e ? (t.childLanes |= e, i !== null && (i.childLanes |= e)) : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e), t === n) break;
        t = t.return
    }
}

function Ti(t, e) {
    ro = t, Xu = hi = null, t = t.dependencies, t !== null && t.firstContext !== null && (t.lanes & e && (Ve = !0), t.firstContext = null)
}

function lt(t) {
    var e = t._currentValue;
    if (Xu !== t)
        if (t = {
                context: t,
                memoizedValue: e,
                next: null
            }, hi === null) {
            if (ro === null) throw Error(T(308));
            hi = t, ro.dependencies = {
                lanes: 0,
                firstContext: t
            }
        } else hi = hi.next = t;
    return e
}
var Vn = null;

function Ju(t) {
    Vn === null ? Vn = [t] : Vn.push(t)
}

function Cm(t, e, n, i) {
    var s = e.interleaved;
    return s === null ? (n.next = n, Ju(e)) : (n.next = s.next, s.next = n), e.interleaved = n, Gt(t, i)
}

function Gt(t, e) {
    t.lanes |= e;
    var n = t.alternate;
    for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null;) t.childLanes |= e, n = t.alternate, n !== null && (n.childLanes |= e), n = t, t = t.return;
    return n.tag === 3 ? n.stateNode : null
}
var tn = !1;

function ec(t) {
    t.updateQueue = {
        baseState: t.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function _m(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects
    })
}

function Vt(t, e) {
    return {
        eventTime: t,
        lane: e,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function pn(t, e, n) {
    var i = t.updateQueue;
    if (i === null) return null;
    if (i = i.shared, U & 2) {
        var s = i.pending;
        return s === null ? e.next = e : (e.next = s.next, s.next = e), i.pending = e, Gt(t, n)
    }
    return s = i.interleaved, s === null ? (e.next = e, Ju(i)) : (e.next = s.next, s.next = e), i.interleaved = e, Gt(t, n)
}

function Or(t, e, n) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194240) !== 0)) {
        var i = e.lanes;
        i &= t.pendingLanes, n |= i, e.lanes = n, Vu(t, n)
    }
}

function Wd(t, e) {
    var n = t.updateQueue,
        i = t.alternate;
    if (i !== null && (i = i.updateQueue, n === i)) {
        var s = null,
            r = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                r === null ? s = r = o : r = r.next = o, n = n.next
            } while (n !== null);
            r === null ? s = r = e : r = r.next = e
        } else s = r = e;
        n = {
            baseState: i.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: r,
            shared: i.shared,
            effects: i.effects
        }, t.updateQueue = n;
        return
    }
    t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e
}

function oo(t, e, n, i) {
    var s = t.updateQueue;
    tn = !1;
    var r = s.firstBaseUpdate,
        o = s.lastBaseUpdate,
        a = s.shared.pending;
    if (a !== null) {
        s.shared.pending = null;
        var l = a,
            u = l.next;
        l.next = null, o === null ? r = u : o.next = u, o = l;
        var c = t.alternate;
        c !== null && (c = c.updateQueue, a = c.lastBaseUpdate, a !== o && (a === null ? c.firstBaseUpdate = u : a.next = u, c.lastBaseUpdate = l))
    }
    if (r !== null) {
        var d = s.baseState;
        o = 0, c = u = l = null, a = r;
        do {
            var f = a.lane,
                h = a.eventTime;
            if ((i & f) === f) {
                c !== null && (c = c.next = {
                    eventTime: h,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var y = t,
                        g = a;
                    switch (f = e, h = n, g.tag) {
                        case 1:
                            if (y = g.payload, typeof y == "function") {
                                d = y.call(h, d, f);
                                break e
                            }
                            d = y;
                            break e;
                        case 3:
                            y.flags = y.flags & -65537 | 128;
                        case 0:
                            if (y = g.payload, f = typeof y == "function" ? y.call(h, d, f) : y, f == null) break e;
                            d = se({}, d, f);
                            break e;
                        case 2:
                            tn = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (t.flags |= 64, f = s.effects, f === null ? s.effects = [a] : f.push(a))
            } else h = {
                eventTime: h,
                lane: f,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null
            }, c === null ? (u = c = h, l = d) : c = c.next = h, o |= f;
            if (a = a.next, a === null) {
                if (a = s.shared.pending, a === null) break;
                f = a, a = f.next, f.next = null, s.lastBaseUpdate = f, s.shared.pending = null
            }
        } while (!0);
        if (c === null && (l = d), s.baseState = l, s.firstBaseUpdate = u, s.lastBaseUpdate = c, e = s.shared.interleaved, e !== null) {
            s = e;
            do o |= s.lane, s = s.next; while (s !== e)
        } else r === null && (s.shared.lanes = 0);
        Qn |= o, t.lanes = o, t.memoizedState = d
    }
}

function Hd(t, e, n) {
    if (t = e.effects, e.effects = null, t !== null)
        for (e = 0; e < t.length; e++) {
            var i = t[e],
                s = i.callback;
            if (s !== null) {
                if (i.callback = null, i = n, typeof s != "function") throw Error(T(191, s));
                s.call(i)
            }
        }
}
var Js = {},
    Et = _n(Js),
    Vs = _n(Js),
    js = _n(Js);

function jn(t) {
    if (t === Js) throw Error(T(174));
    return t
}

function tc(t, e) {
    switch (q(js, e), q(Vs, t), q(Et, Js), t = e.nodeType, t) {
        case 9:
        case 11:
            e = (e = e.documentElement) ? e.namespaceURI : vl(null, "");
            break;
        default:
            t = t === 8 ? e.parentNode : e, e = t.namespaceURI || null, t = t.tagName, e = vl(e, t)
    }
    X(Et), q(Et, e)
}

function Li() {
    X(Et), X(Vs), X(js)
}

function Tm(t) {
    jn(js.current);
    var e = jn(Et.current),
        n = vl(e, t.type);
    e !== n && (q(Vs, t), q(Et, n))
}

function nc(t) {
    Vs.current === t && (X(Et), X(Vs))
}
var te = _n(0);

function ao(t) {
    for (var e = t; e !== null;) {
        if (e.tag === 13) {
            var n = e.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return e
        } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
            if (e.flags & 128) return e
        } else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue
        }
        if (e === t) break;
        for (; e.sibling === null;) {
            if (e.return === null || e.return === t) return null;
            e = e.return
        }
        e.sibling.return = e.return, e = e.sibling
    }
    return null
}
var Sa = [];

function ic() {
    for (var t = 0; t < Sa.length; t++) Sa[t]._workInProgressVersionPrimary = null;
    Sa.length = 0
}
var Ar = Qt.ReactCurrentDispatcher,
    Pa = Qt.ReactCurrentBatchConfig,
    Kn = 0,
    ie = null,
    fe = null,
    ge = null,
    lo = !1,
    ws = !1,
    Bs = 0,
    qw = 0;

function Se() {
    throw Error(T(321))
}

function sc(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
        if (!wt(t[n], e[n])) return !1;
    return !0
}

function rc(t, e, n, i, s, r) {
    if (Kn = r, ie = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, Ar.current = t === null || t.memoizedState === null ? Yw : Zw, t = n(i, s), ws) {
        r = 0;
        do {
            if (ws = !1, Bs = 0, 25 <= r) throw Error(T(301));
            r += 1, ge = fe = null, e.updateQueue = null, Ar.current = Jw, t = n(i, s)
        } while (ws)
    }
    if (Ar.current = uo, e = fe !== null && fe.next !== null, Kn = 0, ge = fe = ie = null, lo = !1, e) throw Error(T(300));
    return t
}

function oc() {
    var t = Bs !== 0;
    return Bs = 0, t
}

function Ct() {
    var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ge === null ? ie.memoizedState = ge = t : ge = ge.next = t, ge
}

function ut() {
    if (fe === null) {
        var t = ie.alternate;
        t = t !== null ? t.memoizedState : null
    } else t = fe.next;
    var e = ge === null ? ie.memoizedState : ge.next;
    if (e !== null) ge = e, fe = t;
    else {
        if (t === null) throw Error(T(310));
        fe = t, t = {
            memoizedState: fe.memoizedState,
            baseState: fe.baseState,
            baseQueue: fe.baseQueue,
            queue: fe.queue,
            next: null
        }, ge === null ? ie.memoizedState = ge = t : ge = ge.next = t
    }
    return ge
}

function Us(t, e) {
    return typeof e == "function" ? e(t) : e
}

function Ca(t) {
    var e = ut(),
        n = e.queue;
    if (n === null) throw Error(T(311));
    n.lastRenderedReducer = t;
    var i = fe,
        s = i.baseQueue,
        r = n.pending;
    if (r !== null) {
        if (s !== null) {
            var o = s.next;
            s.next = r.next, r.next = o
        }
        i.baseQueue = s = r, n.pending = null
    }
    if (s !== null) {
        r = s.next, i = i.baseState;
        var a = o = null,
            l = null,
            u = r;
        do {
            var c = u.lane;
            if ((Kn & c) === c) l !== null && (l = l.next = {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
            }), i = u.hasEagerState ? u.eagerState : t(i, u.action);
            else {
                var d = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (a = l = d, o = i) : l = l.next = d, ie.lanes |= c, Qn |= c
            }
            u = u.next
        } while (u !== null && u !== r);
        l === null ? o = i : l.next = a, wt(i, e.memoizedState) || (Ve = !0), e.memoizedState = i, e.baseState = o, e.baseQueue = l, n.lastRenderedState = i
    }
    if (t = n.interleaved, t !== null) {
        s = t;
        do r = s.lane, ie.lanes |= r, Qn |= r, s = s.next; while (s !== t)
    } else s === null && (n.lanes = 0);
    return [e.memoizedState, n.dispatch]
}

function _a(t) {
    var e = ut(),
        n = e.queue;
    if (n === null) throw Error(T(311));
    n.lastRenderedReducer = t;
    var i = n.dispatch,
        s = n.pending,
        r = e.memoizedState;
    if (s !== null) {
        n.pending = null;
        var o = s = s.next;
        do r = t(r, o.action), o = o.next; while (o !== s);
        wt(r, e.memoizedState) || (Ve = !0), e.memoizedState = r, e.baseQueue === null && (e.baseState = r), n.lastRenderedState = r
    }
    return [r, i]
}

function Em() {}

function Mm(t, e) {
    var n = ie,
        i = ut(),
        s = e(),
        r = !wt(i.memoizedState, s);
    if (r && (i.memoizedState = s, Ve = !0), i = i.queue, ac(Dm.bind(null, n, i, t), [t]), i.getSnapshot !== e || r || ge !== null && ge.memoizedState.tag & 1) {
        if (n.flags |= 2048, $s(9, zm.bind(null, n, i, s, e), void 0, null), ve === null) throw Error(T(349));
        Kn & 30 || Rm(n, e, s)
    }
    return s
}

function Rm(t, e, n) {
    t.flags |= 16384, t = {
        getSnapshot: e,
        value: n
    }, e = ie.updateQueue, e === null ? (e = {
        lastEffect: null,
        stores: null
    }, ie.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t))
}

function zm(t, e, n, i) {
    e.value = n, e.getSnapshot = i, Om(e) && Am(t)
}

function Dm(t, e, n) {
    return n(function() {
        Om(e) && Am(t)
    })
}

function Om(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
        var n = e();
        return !wt(t, n)
    } catch {
        return !0
    }
}

function Am(t) {
    var e = Gt(t, 1);
    e !== null && yt(e, t, 1, -1)
}

function Gd(t) {
    var e = Ct();
    return typeof t == "function" && (t = t()), e.memoizedState = e.baseState = t, t = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Us,
        lastRenderedState: t
    }, e.queue = t, t = t.dispatch = Xw.bind(null, ie, t), [e.memoizedState, t]
}

function $s(t, e, n, i) {
    return t = {
        tag: t,
        create: e,
        destroy: n,
        deps: i,
        next: null
    }, e = ie.updateQueue, e === null ? (e = {
        lastEffect: null,
        stores: null
    }, ie.updateQueue = e, e.lastEffect = t.next = t) : (n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (i = n.next, n.next = t, t.next = i, e.lastEffect = t)), t
}

function Lm() {
    return ut().memoizedState
}

function Lr(t, e, n, i) {
    var s = Ct();
    ie.flags |= t, s.memoizedState = $s(1 | e, n, void 0, i === void 0 ? null : i)
}

function No(t, e, n, i) {
    var s = ut();
    i = i === void 0 ? null : i;
    var r = void 0;
    if (fe !== null) {
        var o = fe.memoizedState;
        if (r = o.destroy, i !== null && sc(i, o.deps)) {
            s.memoizedState = $s(e, n, r, i);
            return
        }
    }
    ie.flags |= t, s.memoizedState = $s(1 | e, n, r, i)
}

function qd(t, e) {
    return Lr(8390656, 8, t, e)
}

function ac(t, e) {
    return No(2048, 8, t, e)
}

function Im(t, e) {
    return No(4, 2, t, e)
}

function Fm(t, e) {
    return No(4, 4, t, e)
}

function Nm(t, e) {
    if (typeof e == "function") return t = t(), e(t),
        function() {
            e(null)
        };
    if (e != null) return t = t(), e.current = t,
        function() {
            e.current = null
        }
}

function Vm(t, e, n) {
    return n = n != null ? n.concat([t]) : null, No(4, 4, Nm.bind(null, e, t), n)
}

function lc() {}

function jm(t, e) {
    var n = ut();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    return i !== null && e !== null && sc(e, i[1]) ? i[0] : (n.memoizedState = [t, e], t)
}

function Bm(t, e) {
    var n = ut();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    return i !== null && e !== null && sc(e, i[1]) ? i[0] : (t = t(), n.memoizedState = [t, e], t)
}

function Um(t, e, n) {
    return Kn & 21 ? (wt(n, e) || (n = qp(), ie.lanes |= n, Qn |= n, t.baseState = !0), e) : (t.baseState && (t.baseState = !1, Ve = !0), t.memoizedState = n)
}

function Kw(t, e) {
    var n = W;
    W = n !== 0 && 4 > n ? n : 4, t(!0);
    var i = Pa.transition;
    Pa.transition = {};
    try {
        t(!1), e()
    } finally {
        W = n, Pa.transition = i
    }
}

function $m() {
    return ut().memoizedState
}

function Qw(t, e, n) {
    var i = gn(t);
    if (n = {
            lane: i,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Wm(t)) Hm(e, n);
    else if (n = Cm(t, e, n, i), n !== null) {
        var s = Ae();
        yt(n, t, i, s), Gm(n, e, i)
    }
}

function Xw(t, e, n) {
    var i = gn(t),
        s = {
            lane: i,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (Wm(t)) Hm(e, s);
    else {
        var r = t.alternate;
        if (t.lanes === 0 && (r === null || r.lanes === 0) && (r = e.lastRenderedReducer, r !== null)) try {
            var o = e.lastRenderedState,
                a = r(o, n);
            if (s.hasEagerState = !0, s.eagerState = a, wt(a, o)) {
                var l = e.interleaved;
                l === null ? (s.next = s, Ju(e)) : (s.next = l.next, l.next = s), e.interleaved = s;
                return
            }
        } catch {} finally {}
        n = Cm(t, e, s, i), n !== null && (s = Ae(), yt(n, t, i, s), Gm(n, e, i))
    }
}

function Wm(t) {
    var e = t.alternate;
    return t === ie || e !== null && e === ie
}

function Hm(t, e) {
    ws = lo = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e
}

function Gm(t, e, n) {
    if (n & 4194240) {
        var i = e.lanes;
        i &= t.pendingLanes, n |= i, e.lanes = n, Vu(t, n)
    }
}
var uo = {
        readContext: lt,
        useCallback: Se,
        useContext: Se,
        useEffect: Se,
        useImperativeHandle: Se,
        useInsertionEffect: Se,
        useLayoutEffect: Se,
        useMemo: Se,
        useReducer: Se,
        useRef: Se,
        useState: Se,
        useDebugValue: Se,
        useDeferredValue: Se,
        useTransition: Se,
        useMutableSource: Se,
        useSyncExternalStore: Se,
        useId: Se,
        unstable_isNewReconciler: !1
    },
    Yw = {
        readContext: lt,
        useCallback: function(t, e) {
            return Ct().memoizedState = [t, e === void 0 ? null : e], t
        },
        useContext: lt,
        useEffect: qd,
        useImperativeHandle: function(t, e, n) {
            return n = n != null ? n.concat([t]) : null, Lr(4194308, 4, Nm.bind(null, e, t), n)
        },
        useLayoutEffect: function(t, e) {
            return Lr(4194308, 4, t, e)
        },
        useInsertionEffect: function(t, e) {
            return Lr(4, 2, t, e)
        },
        useMemo: function(t, e) {
            var n = Ct();
            return e = e === void 0 ? null : e, t = t(), n.memoizedState = [t, e], t
        },
        useReducer: function(t, e, n) {
            var i = Ct();
            return e = n !== void 0 ? n(e) : e, i.memoizedState = i.baseState = e, t = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: t,
                lastRenderedState: e
            }, i.queue = t, t = t.dispatch = Qw.bind(null, ie, t), [i.memoizedState, t]
        },
        useRef: function(t) {
            var e = Ct();
            return t = {
                current: t
            }, e.memoizedState = t
        },
        useState: Gd,
        useDebugValue: lc,
        useDeferredValue: function(t) {
            return Ct().memoizedState = t
        },
        useTransition: function() {
            var t = Gd(!1),
                e = t[0];
            return t = Kw.bind(null, t[1]), Ct().memoizedState = t, [e, t]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(t, e, n) {
            var i = ie,
                s = Ct();
            if (J) {
                if (n === void 0) throw Error(T(407));
                n = n()
            } else {
                if (n = e(), ve === null) throw Error(T(349));
                Kn & 30 || Rm(i, e, n)
            }
            s.memoizedState = n;
            var r = {
                value: n,
                getSnapshot: e
            };
            return s.queue = r, qd(Dm.bind(null, i, r, t), [t]), i.flags |= 2048, $s(9, zm.bind(null, i, r, n, e), void 0, null), n
        },
        useId: function() {
            var t = Ct(),
                e = ve.identifierPrefix;
            if (J) {
                var n = Ft,
                    i = It;
                n = (i & ~(1 << 32 - gt(i) - 1)).toString(32) + n, e = ":" + e + "R" + n, n = Bs++, 0 < n && (e += "H" + n.toString(32)), e += ":"
            } else n = qw++, e = ":" + e + "r" + n.toString(32) + ":";
            return t.memoizedState = e
        },
        unstable_isNewReconciler: !1
    },
    Zw = {
        readContext: lt,
        useCallback: jm,
        useContext: lt,
        useEffect: ac,
        useImperativeHandle: Vm,
        useInsertionEffect: Im,
        useLayoutEffect: Fm,
        useMemo: Bm,
        useReducer: Ca,
        useRef: Lm,
        useState: function() {
            return Ca(Us)
        },
        useDebugValue: lc,
        useDeferredValue: function(t) {
            var e = ut();
            return Um(e, fe.memoizedState, t)
        },
        useTransition: function() {
            var t = Ca(Us)[0],
                e = ut().memoizedState;
            return [t, e]
        },
        useMutableSource: Em,
        useSyncExternalStore: Mm,
        useId: $m,
        unstable_isNewReconciler: !1
    },
    Jw = {
        readContext: lt,
        useCallback: jm,
        useContext: lt,
        useEffect: ac,
        useImperativeHandle: Vm,
        useInsertionEffect: Im,
        useLayoutEffect: Fm,
        useMemo: Bm,
        useReducer: _a,
        useRef: Lm,
        useState: function() {
            return _a(Us)
        },
        useDebugValue: lc,
        useDeferredValue: function(t) {
            var e = ut();
            return fe === null ? e.memoizedState = t : Um(e, fe.memoizedState, t)
        },
        useTransition: function() {
            var t = _a(Us)[0],
                e = ut().memoizedState;
            return [t, e]
        },
        useMutableSource: Em,
        useSyncExternalStore: Mm,
        useId: $m,
        unstable_isNewReconciler: !1
    };

function ht(t, e) {
    if (t && t.defaultProps) {
        e = se({}, e), t = t.defaultProps;
        for (var n in t) e[n] === void 0 && (e[n] = t[n]);
        return e
    }
    return e
}

function Vl(t, e, n, i) {
    e = t.memoizedState, n = n(i, e), n = n == null ? e : se({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n)
}
var Vo = {
    isMounted: function(t) {
        return (t = t._reactInternals) ? ei(t) === t : !1
    },
    enqueueSetState: function(t, e, n) {
        t = t._reactInternals;
        var i = Ae(),
            s = gn(t),
            r = Vt(i, s);
        r.payload = e, n != null && (r.callback = n), e = pn(t, r, s), e !== null && (yt(e, t, s, i), Or(e, t, s))
    },
    enqueueReplaceState: function(t, e, n) {
        t = t._reactInternals;
        var i = Ae(),
            s = gn(t),
            r = Vt(i, s);
        r.tag = 1, r.payload = e, n != null && (r.callback = n), e = pn(t, r, s), e !== null && (yt(e, t, s, i), Or(e, t, s))
    },
    enqueueForceUpdate: function(t, e) {
        t = t._reactInternals;
        var n = Ae(),
            i = gn(t),
            s = Vt(n, i);
        s.tag = 2, e != null && (s.callback = e), e = pn(t, s, i), e !== null && (yt(e, t, i, n), Or(e, t, i))
    }
};

function Kd(t, e, n, i, s, r, o) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(i, r, o) : e.prototype && e.prototype.isPureReactComponent ? !Ls(n, i) || !Ls(s, r) : !0
}

function qm(t, e, n) {
    var i = !1,
        s = xn,
        r = e.contextType;
    return typeof r == "object" && r !== null ? r = lt(r) : (s = Be(e) ? Gn : De.current, i = e.contextTypes, r = (i = i != null) ? Di(t, s) : xn), e = new e(n, r), t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null, e.updater = Vo, t.stateNode = e, e._reactInternals = t, i && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = s, t.__reactInternalMemoizedMaskedChildContext = r), e
}

function Qd(t, e, n, i) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, i), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, i), e.state !== t && Vo.enqueueReplaceState(e, e.state, null)
}

function jl(t, e, n, i) {
    var s = t.stateNode;
    s.props = n, s.state = t.memoizedState, s.refs = {}, ec(t);
    var r = e.contextType;
    typeof r == "object" && r !== null ? s.context = lt(r) : (r = Be(e) ? Gn : De.current, s.context = Di(t, r)), s.state = t.memoizedState, r = e.getDerivedStateFromProps, typeof r == "function" && (Vl(t, e, r, n), s.state = t.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (e = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), e !== s.state && Vo.enqueueReplaceState(s, s.state, null), oo(t, n, s, i), s.state = t.memoizedState), typeof s.componentDidMount == "function" && (t.flags |= 4194308)
}

function Ii(t, e) {
    try {
        var n = "",
            i = e;
        do n += T0(i), i = i.return; while (i);
        var s = n
    } catch (r) {
        s = `
Error generating stack: ` + r.message + `
` + r.stack
    }
    return {
        value: t,
        source: e,
        stack: s,
        digest: null
    }
}

function Ta(t, e, n) {
    return {
        value: t,
        source: null,
        stack: n ?? null,
        digest: e ?? null
    }
}

function Bl(t, e) {
    try {
        console.error(e.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var ex = typeof WeakMap == "function" ? WeakMap : Map;

function Km(t, e, n) {
    n = Vt(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var i = e.value;
    return n.callback = function() {
        fo || (fo = !0, Yl = i), Bl(t, e)
    }, n
}

function Qm(t, e, n) {
    n = Vt(-1, n), n.tag = 3;
    var i = t.type.getDerivedStateFromError;
    if (typeof i == "function") {
        var s = e.value;
        n.payload = function() {
            return i(s)
        }, n.callback = function() {
            Bl(t, e)
        }
    }
    var r = t.stateNode;
    return r !== null && typeof r.componentDidCatch == "function" && (n.callback = function() {
        Bl(t, e), typeof i != "function" && (mn === null ? mn = new Set([this]) : mn.add(this));
        var o = e.stack;
        this.componentDidCatch(e.value, {
            componentStack: o !== null ? o : ""
        })
    }), n
}

function Xd(t, e, n) {
    var i = t.pingCache;
    if (i === null) {
        i = t.pingCache = new ex;
        var s = new Set;
        i.set(e, s)
    } else s = i.get(e), s === void 0 && (s = new Set, i.set(e, s));
    s.has(n) || (s.add(n), t = px.bind(null, t, e, n), e.then(t, t))
}

function Yd(t) {
    do {
        var e;
        if ((e = t.tag === 13) && (e = t.memoizedState, e = e !== null ? e.dehydrated !== null : !0), e) return t;
        t = t.return
    } while (t !== null);
    return null
}

function Zd(t, e, n, i, s) {
    return t.mode & 1 ? (t.flags |= 65536, t.lanes = s, t) : (t === e ? t.flags |= 65536 : (t.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (e = Vt(-1, 1), e.tag = 2, pn(n, e, 1))), n.lanes |= 1), t)
}
var tx = Qt.ReactCurrentOwner,
    Ve = !1;

function Oe(t, e, n, i) {
    e.child = t === null ? Pm(e, null, n, i) : Ai(e, t.child, n, i)
}

function Jd(t, e, n, i, s) {
    n = n.render;
    var r = e.ref;
    return Ti(e, s), i = rc(t, e, n, i, r, s), n = oc(), t !== null && !Ve ? (e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~s, qt(t, e, s)) : (J && n && qu(e), e.flags |= 1, Oe(t, e, i, s), e.child)
}

function ef(t, e, n, i, s) {
    if (t === null) {
        var r = n.type;
        return typeof r == "function" && !gc(r) && r.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (e.tag = 15, e.type = r, Xm(t, e, r, i, s)) : (t = Vr(n.type, null, i, e, e.mode, s), t.ref = e.ref, t.return = e, e.child = t)
    }
    if (r = t.child, !(t.lanes & s)) {
        var o = r.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Ls, n(o, i) && t.ref === e.ref) return qt(t, e, s)
    }
    return e.flags |= 1, t = yn(r, i), t.ref = e.ref, t.return = e, e.child = t
}

function Xm(t, e, n, i, s) {
    if (t !== null) {
        var r = t.memoizedProps;
        if (Ls(r, i) && t.ref === e.ref)
            if (Ve = !1, e.pendingProps = i = r, (t.lanes & s) !== 0) t.flags & 131072 && (Ve = !0);
            else return e.lanes = t.lanes, qt(t, e, s)
    }
    return Ul(t, e, n, i, s)
}

function Ym(t, e, n) {
    var i = e.pendingProps,
        s = i.children,
        r = t !== null ? t.memoizedState : null;
    if (i.mode === "hidden")
        if (!(e.mode & 1)) e.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, q(mi, He), He |= n;
        else {
            if (!(n & 1073741824)) return t = r !== null ? r.baseLanes | n : n, e.lanes = e.childLanes = 1073741824, e.memoizedState = {
                baseLanes: t,
                cachePool: null,
                transitions: null
            }, e.updateQueue = null, q(mi, He), He |= t, null;
            e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, i = r !== null ? r.baseLanes : n, q(mi, He), He |= i
        }
    else r !== null ? (i = r.baseLanes | n, e.memoizedState = null) : i = n, q(mi, He), He |= i;
    return Oe(t, e, s, n), e.child
}

function Zm(t, e) {
    var n = e.ref;
    (t === null && n !== null || t !== null && t.ref !== n) && (e.flags |= 512, e.flags |= 2097152)
}

function Ul(t, e, n, i, s) {
    var r = Be(n) ? Gn : De.current;
    return r = Di(e, r), Ti(e, s), n = rc(t, e, n, i, r, s), i = oc(), t !== null && !Ve ? (e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~s, qt(t, e, s)) : (J && i && qu(e), e.flags |= 1, Oe(t, e, n, s), e.child)
}

function tf(t, e, n, i, s) {
    if (Be(n)) {
        var r = !0;
        to(e)
    } else r = !1;
    if (Ti(e, s), e.stateNode === null) Ir(t, e), qm(e, n, i), jl(e, n, i, s), i = !0;
    else if (t === null) {
        var o = e.stateNode,
            a = e.memoizedProps;
        o.props = a;
        var l = o.context,
            u = n.contextType;
        typeof u == "object" && u !== null ? u = lt(u) : (u = Be(n) ? Gn : De.current, u = Di(e, u));
        var c = n.getDerivedStateFromProps,
            d = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        d || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== i || l !== u) && Qd(e, o, i, u), tn = !1;
        var f = e.memoizedState;
        o.state = f, oo(e, i, o, s), l = e.memoizedState, a !== i || f !== l || je.current || tn ? (typeof c == "function" && (Vl(e, n, c, i), l = e.memoizedState), (a = tn || Kd(e, n, a, i, f, l, u)) ? (d || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = i, e.memoizedState = l), o.props = i, o.state = l, o.context = u, i = a) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308), i = !1)
    } else {
        o = e.stateNode, _m(t, e), a = e.memoizedProps, u = e.type === e.elementType ? a : ht(e.type, a), o.props = u, d = e.pendingProps, f = o.context, l = n.contextType, typeof l == "object" && l !== null ? l = lt(l) : (l = Be(n) ? Gn : De.current, l = Di(e, l));
        var h = n.getDerivedStateFromProps;
        (c = typeof h == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== d || f !== l) && Qd(e, o, i, l), tn = !1, f = e.memoizedState, o.state = f, oo(e, i, o, s);
        var y = e.memoizedState;
        a !== d || f !== y || je.current || tn ? (typeof h == "function" && (Vl(e, n, h, i), y = e.memoizedState), (u = tn || Kd(e, n, u, i, f, y, l) || !1) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(i, y, l), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(i, y, l)), typeof o.componentDidUpdate == "function" && (e.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === t.memoizedProps && f === t.memoizedState || (e.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === t.memoizedProps && f === t.memoizedState || (e.flags |= 1024), e.memoizedProps = i, e.memoizedState = y), o.props = i, o.state = y, o.context = l, i = u) : (typeof o.componentDidUpdate != "function" || a === t.memoizedProps && f === t.memoizedState || (e.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === t.memoizedProps && f === t.memoizedState || (e.flags |= 1024), i = !1)
    }
    return $l(t, e, n, i, r, s)
}

function $l(t, e, n, i, s, r) {
    Zm(t, e);
    var o = (e.flags & 128) !== 0;
    if (!i && !o) return s && jd(e, n, !1), qt(t, e, r);
    i = e.stateNode, tx.current = e;
    var a = o && typeof n.getDerivedStateFromError != "function" ? null : i.render();
    return e.flags |= 1, t !== null && o ? (e.child = Ai(e, t.child, null, r), e.child = Ai(e, null, a, r)) : Oe(t, e, a, r), e.memoizedState = i.state, s && jd(e, n, !0), e.child
}

function Jm(t) {
    var e = t.stateNode;
    e.pendingContext ? Vd(t, e.pendingContext, e.pendingContext !== e.context) : e.context && Vd(t, e.context, !1), tc(t, e.containerInfo)
}

function nf(t, e, n, i, s) {
    return Oi(), Qu(s), e.flags |= 256, Oe(t, e, n, i), e.child
}
var Wl = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function Hl(t) {
    return {
        baseLanes: t,
        cachePool: null,
        transitions: null
    }
}

function eg(t, e, n) {
    var i = e.pendingProps,
        s = te.current,
        r = !1,
        o = (e.flags & 128) !== 0,
        a;
    if ((a = o) || (a = t !== null && t.memoizedState === null ? !1 : (s & 2) !== 0), a ? (r = !0, e.flags &= -129) : (t === null || t.memoizedState !== null) && (s |= 1), q(te, s & 1), t === null) return Fl(e), t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null) ? (e.mode & 1 ? t.data === "$!" ? e.lanes = 8 : e.lanes = 1073741824 : e.lanes = 1, null) : (o = i.children, t = i.fallback, r ? (i = e.mode, r = e.child, o = {
        mode: "hidden",
        children: o
    }, !(i & 1) && r !== null ? (r.childLanes = 0, r.pendingProps = o) : r = Uo(o, i, 0, null), t = Wn(t, i, n, null), r.return = e, t.return = e, r.sibling = t, e.child = r, e.child.memoizedState = Hl(n), e.memoizedState = Wl, t) : uc(e, o));
    if (s = t.memoizedState, s !== null && (a = s.dehydrated, a !== null)) return nx(t, e, o, i, a, s, n);
    if (r) {
        r = i.fallback, o = e.mode, s = t.child, a = s.sibling;
        var l = {
            mode: "hidden",
            children: i.children
        };
        return !(o & 1) && e.child !== s ? (i = e.child, i.childLanes = 0, i.pendingProps = l, e.deletions = null) : (i = yn(s, l), i.subtreeFlags = s.subtreeFlags & 14680064), a !== null ? r = yn(a, r) : (r = Wn(r, o, n, null), r.flags |= 2), r.return = e, i.return = e, i.sibling = r, e.child = i, i = r, r = e.child, o = t.child.memoizedState, o = o === null ? Hl(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        }, r.memoizedState = o, r.childLanes = t.childLanes & ~n, e.memoizedState = Wl, i
    }
    return r = t.child, t = r.sibling, i = yn(r, {
        mode: "visible",
        children: i.children
    }), !(e.mode & 1) && (i.lanes = n), i.return = e, i.sibling = null, t !== null && (n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t)), e.child = i, e.memoizedState = null, i
}

function uc(t, e) {
    return e = Uo({
        mode: "visible",
        children: e
    }, t.mode, 0, null), e.return = t, t.child = e
}

function br(t, e, n, i) {
    return i !== null && Qu(i), Ai(e, t.child, null, n), t = uc(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t
}

function nx(t, e, n, i, s, r, o) {
    if (n) return e.flags & 256 ? (e.flags &= -257, i = Ta(Error(T(422))), br(t, e, o, i)) : e.memoizedState !== null ? (e.child = t.child, e.flags |= 128, null) : (r = i.fallback, s = e.mode, i = Uo({
        mode: "visible",
        children: i.children
    }, s, 0, null), r = Wn(r, s, o, null), r.flags |= 2, i.return = e, r.return = e, i.sibling = r, e.child = i, e.mode & 1 && Ai(e, t.child, null, o), e.child.memoizedState = Hl(o), e.memoizedState = Wl, r);
    if (!(e.mode & 1)) return br(t, e, o, null);
    if (s.data === "$!") {
        if (i = s.nextSibling && s.nextSibling.dataset, i) var a = i.dgst;
        return i = a, r = Error(T(419)), i = Ta(r, i, void 0), br(t, e, o, i)
    }
    if (a = (o & t.childLanes) !== 0, Ve || a) {
        if (i = ve, i !== null) {
            switch (o & -o) {
                case 4:
                    s = 2;
                    break;
                case 16:
                    s = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    s = 32;
                    break;
                case 536870912:
                    s = 268435456;
                    break;
                default:
                    s = 0
            }
            s = s & (i.suspendedLanes | o) ? 0 : s, s !== 0 && s !== r.retryLane && (r.retryLane = s, Gt(t, s), yt(i, t, s, -1))
        }
        return mc(), i = Ta(Error(T(421))), br(t, e, o, i)
    }
    return s.data === "$?" ? (e.flags |= 128, e.child = t.child, e = mx.bind(null, t), s._reactRetry = e, null) : (t = r.treeContext, Ge = hn(s.nextSibling), qe = e, J = !0, mt = null, t !== null && (it[st++] = It, it[st++] = Ft, it[st++] = qn, It = t.id, Ft = t.overflow, qn = e), e = uc(e, i.children), e.flags |= 4096, e)
}

function sf(t, e, n) {
    t.lanes |= e;
    var i = t.alternate;
    i !== null && (i.lanes |= e), Nl(t.return, e, n)
}

function Ea(t, e, n, i, s) {
    var r = t.memoizedState;
    r === null ? t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: n,
        tailMode: s
    } : (r.isBackwards = e, r.rendering = null, r.renderingStartTime = 0, r.last = i, r.tail = n, r.tailMode = s)
}

function tg(t, e, n) {
    var i = e.pendingProps,
        s = i.revealOrder,
        r = i.tail;
    if (Oe(t, e, i.children, n), i = te.current, i & 2) i = i & 1 | 2, e.flags |= 128;
    else {
        if (t !== null && t.flags & 128) e: for (t = e.child; t !== null;) {
            if (t.tag === 13) t.memoizedState !== null && sf(t, n, e);
            else if (t.tag === 19) sf(t, n, e);
            else if (t.child !== null) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === e) break e;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) break e;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        i &= 1
    }
    if (q(te, i), !(e.mode & 1)) e.memoizedState = null;
    else switch (s) {
        case "forwards":
            for (n = e.child, s = null; n !== null;) t = n.alternate, t !== null && ao(t) === null && (s = n), n = n.sibling;
            n = s, n === null ? (s = e.child, e.child = null) : (s = n.sibling, n.sibling = null), Ea(e, !1, s, n, r);
            break;
        case "backwards":
            for (n = null, s = e.child, e.child = null; s !== null;) {
                if (t = s.alternate, t !== null && ao(t) === null) {
                    e.child = s;
                    break
                }
                t = s.sibling, s.sibling = n, n = s, s = t
            }
            Ea(e, !0, n, null, r);
            break;
        case "together":
            Ea(e, !1, null, null, void 0);
            break;
        default:
            e.memoizedState = null
    }
    return e.child
}

function Ir(t, e) {
    !(e.mode & 1) && t !== null && (t.alternate = null, e.alternate = null, e.flags |= 2)
}

function qt(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies), Qn |= e.lanes, !(n & e.childLanes)) return null;
    if (t !== null && e.child !== t.child) throw Error(T(153));
    if (e.child !== null) {
        for (t = e.child, n = yn(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null;) t = t.sibling, n = n.sibling = yn(t, t.pendingProps), n.return = e;
        n.sibling = null
    }
    return e.child
}

function ix(t, e, n) {
    switch (e.tag) {
        case 3:
            Jm(e), Oi();
            break;
        case 5:
            Tm(e);
            break;
        case 1:
            Be(e.type) && to(e);
            break;
        case 4:
            tc(e, e.stateNode.containerInfo);
            break;
        case 10:
            var i = e.type._context,
                s = e.memoizedProps.value;
            q(so, i._currentValue), i._currentValue = s;
            break;
        case 13:
            if (i = e.memoizedState, i !== null) return i.dehydrated !== null ? (q(te, te.current & 1), e.flags |= 128, null) : n & e.child.childLanes ? eg(t, e, n) : (q(te, te.current & 1), t = qt(t, e, n), t !== null ? t.sibling : null);
            q(te, te.current & 1);
            break;
        case 19:
            if (i = (n & e.childLanes) !== 0, t.flags & 128) {
                if (i) return tg(t, e, n);
                e.flags |= 128
            }
            if (s = e.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), q(te, te.current), i) break;
            return null;
        case 22:
        case 23:
            return e.lanes = 0, Ym(t, e, n)
    }
    return qt(t, e, n)
}
var ng, Gl, ig, sg;
ng = function(t, e) {
    for (var n = e.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === e) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === e) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
Gl = function() {};
ig = function(t, e, n, i) {
    var s = t.memoizedProps;
    if (s !== i) {
        t = e.stateNode, jn(Et.current);
        var r = null;
        switch (n) {
            case "input":
                s = pl(t, s), i = pl(t, i), r = [];
                break;
            case "select":
                s = se({}, s, {
                    value: void 0
                }), i = se({}, i, {
                    value: void 0
                }), r = [];
                break;
            case "textarea":
                s = yl(t, s), i = yl(t, i), r = [];
                break;
            default:
                typeof s.onClick != "function" && typeof i.onClick == "function" && (t.onclick = Jr)
        }
        wl(n, i);
        var o;
        n = null;
        for (u in s)
            if (!i.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null)
                if (u === "style") {
                    var a = s[u];
                    for (o in a) a.hasOwnProperty(o) && (n || (n = {}), n[o] = "")
                } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Es.hasOwnProperty(u) ? r || (r = []) : (r = r || []).push(u, null));
        for (u in i) {
            var l = i[u];
            if (a = s != null ? s[u] : void 0, i.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) {
                        for (o in a) !a.hasOwnProperty(o) || l && l.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
                        for (o in l) l.hasOwnProperty(o) && a[o] !== l[o] && (n || (n = {}), n[o] = l[o])
                    } else n || (r || (r = []), r.push(u, n)), n = l;
            else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (r = r || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (r = r || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Es.hasOwnProperty(u) ? (l != null && u === "onScroll" && Q("scroll", t), r || a === l || (r = [])) : (r = r || []).push(u, l))
        }
        n && (r = r || []).push("style", n);
        var u = r;
        (e.updateQueue = u) && (e.flags |= 4)
    }
};
sg = function(t, e, n, i) {
    n !== i && (e.flags |= 4)
};

function is(t, e) {
    if (!J) switch (t.tailMode) {
        case "hidden":
            e = t.tail;
            for (var n = null; e !== null;) e.alternate !== null && (n = e), e = e.sibling;
            n === null ? t.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = t.tail;
            for (var i = null; n !== null;) n.alternate !== null && (i = n), n = n.sibling;
            i === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : i.sibling = null
    }
}

function Pe(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
        n = 0,
        i = 0;
    if (e)
        for (var s = t.child; s !== null;) n |= s.lanes | s.childLanes, i |= s.subtreeFlags & 14680064, i |= s.flags & 14680064, s.return = t, s = s.sibling;
    else
        for (s = t.child; s !== null;) n |= s.lanes | s.childLanes, i |= s.subtreeFlags, i |= s.flags, s.return = t, s = s.sibling;
    return t.subtreeFlags |= i, t.childLanes = n, e
}

function sx(t, e, n) {
    var i = e.pendingProps;
    switch (Ku(e), e.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Pe(e), null;
        case 1:
            return Be(e.type) && eo(), Pe(e), null;
        case 3:
            return i = e.stateNode, Li(), X(je), X(De), ic(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (t === null || t.child === null) && (wr(e) ? e.flags |= 4 : t === null || t.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024, mt !== null && (eu(mt), mt = null))), Gl(t, e), Pe(e), null;
        case 5:
            nc(e);
            var s = jn(js.current);
            if (n = e.type, t !== null && e.stateNode != null) ig(t, e, n, i, s), t.ref !== e.ref && (e.flags |= 512, e.flags |= 2097152);
            else {
                if (!i) {
                    if (e.stateNode === null) throw Error(T(166));
                    return Pe(e), null
                }
                if (t = jn(Et.current), wr(e)) {
                    i = e.stateNode, n = e.type;
                    var r = e.memoizedProps;
                    switch (i[_t] = e, i[Ns] = r, t = (e.mode & 1) !== 0, n) {
                        case "dialog":
                            Q("cancel", i), Q("close", i);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            Q("load", i);
                            break;
                        case "video":
                        case "audio":
                            for (s = 0; s < ds.length; s++) Q(ds[s], i);
                            break;
                        case "source":
                            Q("error", i);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            Q("error", i), Q("load", i);
                            break;
                        case "details":
                            Q("toggle", i);
                            break;
                        case "input":
                            fd(i, r), Q("invalid", i);
                            break;
                        case "select":
                            i._wrapperState = {
                                wasMultiple: !!r.multiple
                            }, Q("invalid", i);
                            break;
                        case "textarea":
                            pd(i, r), Q("invalid", i)
                    }
                    wl(n, r), s = null;
                    for (var o in r)
                        if (r.hasOwnProperty(o)) {
                            var a = r[o];
                            o === "children" ? typeof a == "string" ? i.textContent !== a && (r.suppressHydrationWarning !== !0 && vr(i.textContent, a, t), s = ["children", a]) : typeof a == "number" && i.textContent !== "" + a && (r.suppressHydrationWarning !== !0 && vr(i.textContent, a, t), s = ["children", "" + a]) : Es.hasOwnProperty(o) && a != null && o === "onScroll" && Q("scroll", i)
                        } switch (n) {
                        case "input":
                            cr(i), hd(i, r, !0);
                            break;
                        case "textarea":
                            cr(i), md(i);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof r.onClick == "function" && (i.onclick = Jr)
                    }
                    i = s, e.updateQueue = i, i !== null && (e.flags |= 4)
                } else {
                    o = s.nodeType === 9 ? s : s.ownerDocument, t === "http://www.w3.org/1999/xhtml" && (t = Dp(n)), t === "http://www.w3.org/1999/xhtml" ? n === "script" ? (t = o.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild)) : typeof i.is == "string" ? t = o.createElement(n, {
                        is: i.is
                    }) : (t = o.createElement(n), n === "select" && (o = t, i.multiple ? o.multiple = !0 : i.size && (o.size = i.size))) : t = o.createElementNS(t, n), t[_t] = e, t[Ns] = i, ng(t, e, !1, !1), e.stateNode = t;
                    e: {
                        switch (o = xl(n, i), n) {
                            case "dialog":
                                Q("cancel", t), Q("close", t), s = i;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Q("load", t), s = i;
                                break;
                            case "video":
                            case "audio":
                                for (s = 0; s < ds.length; s++) Q(ds[s], t);
                                s = i;
                                break;
                            case "source":
                                Q("error", t), s = i;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Q("error", t), Q("load", t), s = i;
                                break;
                            case "details":
                                Q("toggle", t), s = i;
                                break;
                            case "input":
                                fd(t, i), s = pl(t, i), Q("invalid", t);
                                break;
                            case "option":
                                s = i;
                                break;
                            case "select":
                                t._wrapperState = {
                                    wasMultiple: !!i.multiple
                                }, s = se({}, i, {
                                    value: void 0
                                }), Q("invalid", t);
                                break;
                            case "textarea":
                                pd(t, i), s = yl(t, i), Q("invalid", t);
                                break;
                            default:
                                s = i
                        }
                        wl(n, s),
                        a = s;
                        for (r in a)
                            if (a.hasOwnProperty(r)) {
                                var l = a[r];
                                r === "style" ? Lp(t, l) : r === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Op(t, l)) : r === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Ms(t, l) : typeof l == "number" && Ms(t, "" + l) : r !== "suppressContentEditableWarning" && r !== "suppressHydrationWarning" && r !== "autoFocus" && (Es.hasOwnProperty(r) ? l != null && r === "onScroll" && Q("scroll", t) : l != null && Ou(t, r, l, o))
                            } switch (n) {
                            case "input":
                                cr(t), hd(t, i, !1);
                                break;
                            case "textarea":
                                cr(t), md(t);
                                break;
                            case "option":
                                i.value != null && t.setAttribute("value", "" + wn(i.value));
                                break;
                            case "select":
                                t.multiple = !!i.multiple, r = i.value, r != null ? Si(t, !!i.multiple, r, !1) : i.defaultValue != null && Si(t, !!i.multiple, i.defaultValue, !0);
                                break;
                            default:
                                typeof s.onClick == "function" && (t.onclick = Jr)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                i = !!i.autoFocus;
                                break e;
                            case "img":
                                i = !0;
                                break e;
                            default:
                                i = !1
                        }
                    }
                    i && (e.flags |= 4)
                }
                e.ref !== null && (e.flags |= 512, e.flags |= 2097152)
            }
            return Pe(e), null;
        case 6:
            if (t && e.stateNode != null) sg(t, e, t.memoizedProps, i);
            else {
                if (typeof i != "string" && e.stateNode === null) throw Error(T(166));
                if (n = jn(js.current), jn(Et.current), wr(e)) {
                    if (i = e.stateNode, n = e.memoizedProps, i[_t] = e, (r = i.nodeValue !== n) && (t = qe, t !== null)) switch (t.tag) {
                        case 3:
                            vr(i.nodeValue, n, (t.mode & 1) !== 0);
                            break;
                        case 5:
                            t.memoizedProps.suppressHydrationWarning !== !0 && vr(i.nodeValue, n, (t.mode & 1) !== 0)
                    }
                    r && (e.flags |= 4)
                } else i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i), i[_t] = e, e.stateNode = i
            }
            return Pe(e), null;
        case 13:
            if (X(te), i = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                if (J && Ge !== null && e.mode & 1 && !(e.flags & 128)) km(), Oi(), e.flags |= 98560, r = !1;
                else if (r = wr(e), i !== null && i.dehydrated !== null) {
                    if (t === null) {
                        if (!r) throw Error(T(318));
                        if (r = e.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(T(317));
                        r[_t] = e
                    } else Oi(), !(e.flags & 128) && (e.memoizedState = null), e.flags |= 4;
                    Pe(e), r = !1
                } else mt !== null && (eu(mt), mt = null), r = !0;
                if (!r) return e.flags & 65536 ? e : null
            }
            return e.flags & 128 ? (e.lanes = n, e) : (i = i !== null, i !== (t !== null && t.memoizedState !== null) && i && (e.child.flags |= 8192, e.mode & 1 && (t === null || te.current & 1 ? he === 0 && (he = 3) : mc())), e.updateQueue !== null && (e.flags |= 4), Pe(e), null);
        case 4:
            return Li(), Gl(t, e), t === null && Is(e.stateNode.containerInfo), Pe(e), null;
        case 10:
            return Zu(e.type._context), Pe(e), null;
        case 17:
            return Be(e.type) && eo(), Pe(e), null;
        case 19:
            if (X(te), r = e.memoizedState, r === null) return Pe(e), null;
            if (i = (e.flags & 128) !== 0, o = r.rendering, o === null)
                if (i) is(r, !1);
                else {
                    if (he !== 0 || t !== null && t.flags & 128)
                        for (t = e.child; t !== null;) {
                            if (o = ao(t), o !== null) {
                                for (e.flags |= 128, is(r, !1), i = o.updateQueue, i !== null && (e.updateQueue = i, e.flags |= 4), e.subtreeFlags = 0, i = n, n = e.child; n !== null;) r = n, t = i, r.flags &= 14680066, o = r.alternate, o === null ? (r.childLanes = 0, r.lanes = t, r.child = null, r.subtreeFlags = 0, r.memoizedProps = null, r.memoizedState = null, r.updateQueue = null, r.dependencies = null, r.stateNode = null) : (r.childLanes = o.childLanes, r.lanes = o.lanes, r.child = o.child, r.subtreeFlags = 0, r.deletions = null, r.memoizedProps = o.memoizedProps, r.memoizedState = o.memoizedState, r.updateQueue = o.updateQueue, r.type = o.type, t = o.dependencies, r.dependencies = t === null ? null : {
                                    lanes: t.lanes,
                                    firstContext: t.firstContext
                                }), n = n.sibling;
                                return q(te, te.current & 1 | 2), e.child
                            }
                            t = t.sibling
                        }
                    r.tail !== null && ue() > Fi && (e.flags |= 128, i = !0, is(r, !1), e.lanes = 4194304)
                }
            else {
                if (!i)
                    if (t = ao(o), t !== null) {
                        if (e.flags |= 128, i = !0, n = t.updateQueue, n !== null && (e.updateQueue = n, e.flags |= 4), is(r, !0), r.tail === null && r.tailMode === "hidden" && !o.alternate && !J) return Pe(e), null
                    } else 2 * ue() - r.renderingStartTime > Fi && n !== 1073741824 && (e.flags |= 128, i = !0, is(r, !1), e.lanes = 4194304);
                r.isBackwards ? (o.sibling = e.child, e.child = o) : (n = r.last, n !== null ? n.sibling = o : e.child = o, r.last = o)
            }
            return r.tail !== null ? (e = r.tail, r.rendering = e, r.tail = e.sibling, r.renderingStartTime = ue(), e.sibling = null, n = te.current, q(te, i ? n & 1 | 2 : n & 1), e) : (Pe(e), null);
        case 22:
        case 23:
            return pc(), i = e.memoizedState !== null, t !== null && t.memoizedState !== null !== i && (e.flags |= 8192), i && e.mode & 1 ? He & 1073741824 && (Pe(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Pe(e), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(T(156, e.tag))
}

function rx(t, e) {
    switch (Ku(e), e.tag) {
        case 1:
            return Be(e.type) && eo(), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 3:
            return Li(), X(je), X(De), ic(), t = e.flags, t & 65536 && !(t & 128) ? (e.flags = t & -65537 | 128, e) : null;
        case 5:
            return nc(e), null;
        case 13:
            if (X(te), t = e.memoizedState, t !== null && t.dehydrated !== null) {
                if (e.alternate === null) throw Error(T(340));
                Oi()
            }
            return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 19:
            return X(te), null;
        case 4:
            return Li(), null;
        case 10:
            return Zu(e.type._context), null;
        case 22:
        case 23:
            return pc(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var kr = !1,
    _e = !1,
    ox = typeof WeakSet == "function" ? WeakSet : Set,
    R = null;

function pi(t, e) {
    var n = t.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (i) {
            oe(t, e, i)
        } else n.current = null
}

function ql(t, e, n) {
    try {
        n()
    } catch (i) {
        oe(t, e, i)
    }
}
var rf = !1;

function ax(t, e) {
    if (Rl = Xr, t = um(), Gu(t)) {
        if ("selectionStart" in t) var n = {
            start: t.selectionStart,
            end: t.selectionEnd
        };
        else e: {
            n = (n = t.ownerDocument) && n.defaultView || window;
            var i = n.getSelection && n.getSelection();
            if (i && i.rangeCount !== 0) {
                n = i.anchorNode;
                var s = i.anchorOffset,
                    r = i.focusNode;
                i = i.focusOffset;
                try {
                    n.nodeType, r.nodeType
                } catch {
                    n = null;
                    break e
                }
                var o = 0,
                    a = -1,
                    l = -1,
                    u = 0,
                    c = 0,
                    d = t,
                    f = null;
                t: for (;;) {
                    for (var h; d !== n || s !== 0 && d.nodeType !== 3 || (a = o + s), d !== r || i !== 0 && d.nodeType !== 3 || (l = o + i), d.nodeType === 3 && (o += d.nodeValue.length), (h = d.firstChild) !== null;) f = d, d = h;
                    for (;;) {
                        if (d === t) break t;
                        if (f === n && ++u === s && (a = o), f === r && ++c === i && (l = o), (h = d.nextSibling) !== null) break;
                        d = f, f = d.parentNode
                    }
                    d = h
                }
                n = a === -1 || l === -1 ? null : {
                    start: a,
                    end: l
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (zl = {
            focusedElem: t,
            selectionRange: n
        }, Xr = !1, R = e; R !== null;)
        if (e = R, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, R = t;
        else
            for (; R !== null;) {
                e = R;
                try {
                    var y = e.alternate;
                    if (e.flags & 1024) switch (e.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (y !== null) {
                                var g = y.memoizedProps,
                                    x = y.memoizedState,
                                    p = e.stateNode,
                                    m = p.getSnapshotBeforeUpdate(e.elementType === e.type ? g : ht(e.type, g), x);
                                p.__reactInternalSnapshotBeforeUpdate = m
                            }
                            break;
                        case 3:
                            var v = e.stateNode.containerInfo;
                            v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(T(163))
                    }
                } catch (w) {
                    oe(e, e.return, w)
                }
                if (t = e.sibling, t !== null) {
                    t.return = e.return, R = t;
                    break
                }
                R = e.return
            }
    return y = rf, rf = !1, y
}

function xs(t, e, n) {
    var i = e.updateQueue;
    if (i = i !== null ? i.lastEffect : null, i !== null) {
        var s = i = i.next;
        do {
            if ((s.tag & t) === t) {
                var r = s.destroy;
                s.destroy = void 0, r !== void 0 && ql(e, n, r)
            }
            s = s.next
        } while (s !== i)
    }
}

function jo(t, e) {
    if (e = e.updateQueue, e = e !== null ? e.lastEffect : null, e !== null) {
        var n = e = e.next;
        do {
            if ((n.tag & t) === t) {
                var i = n.create;
                n.destroy = i()
            }
            n = n.next
        } while (n !== e)
    }
}

function Kl(t) {
    var e = t.ref;
    if (e !== null) {
        var n = t.stateNode;
        switch (t.tag) {
            case 5:
                t = n;
                break;
            default:
                t = n
        }
        typeof e == "function" ? e(t) : e.current = t
    }
}

function rg(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, rg(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && (delete e[_t], delete e[Ns], delete e[Al], delete e[$w], delete e[Ww])), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null
}

function og(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 4
}

function of(t) {
    e: for (;;) {
        for (; t.sibling === null;) {
            if (t.return === null || og(t.return)) return null;
            t = t.return
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;) {
            if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
            t.child.return = t, t = t.child
        }
        if (!(t.flags & 2)) return t.stateNode
    }
}

function Ql(t, e, n) {
    var i = t.tag;
    if (i === 5 || i === 6) t = t.stateNode, e ? n.nodeType === 8 ? n.parentNode.insertBefore(t, e) : n.insertBefore(t, e) : (n.nodeType === 8 ? (e = n.parentNode, e.insertBefore(t, n)) : (e = n, e.appendChild(t)), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = Jr));
    else if (i !== 4 && (t = t.child, t !== null))
        for (Ql(t, e, n), t = t.sibling; t !== null;) Ql(t, e, n), t = t.sibling
}

function Xl(t, e, n) {
    var i = t.tag;
    if (i === 5 || i === 6) t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (i !== 4 && (t = t.child, t !== null))
        for (Xl(t, e, n), t = t.sibling; t !== null;) Xl(t, e, n), t = t.sibling
}
var we = null,
    pt = !1;

function Xt(t, e, n) {
    for (n = n.child; n !== null;) ag(t, e, n), n = n.sibling
}

function ag(t, e, n) {
    if (Tt && typeof Tt.onCommitFiberUnmount == "function") try {
        Tt.onCommitFiberUnmount(Do, n)
    } catch {}
    switch (n.tag) {
        case 5:
            _e || pi(n, e);
        case 6:
            var i = we,
                s = pt;
            we = null, Xt(t, e, n), we = i, pt = s, we !== null && (pt ? (t = we, n = n.stateNode, t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n)) : we.removeChild(n.stateNode));
            break;
        case 18:
            we !== null && (pt ? (t = we, n = n.stateNode, t.nodeType === 8 ? ba(t.parentNode, n) : t.nodeType === 1 && ba(t, n), Os(t)) : ba(we, n.stateNode));
            break;
        case 4:
            i = we, s = pt, we = n.stateNode.containerInfo, pt = !0, Xt(t, e, n), we = i, pt = s;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!_e && (i = n.updateQueue, i !== null && (i = i.lastEffect, i !== null))) {
                s = i = i.next;
                do {
                    var r = s,
                        o = r.destroy;
                    r = r.tag, o !== void 0 && (r & 2 || r & 4) && ql(n, e, o), s = s.next
                } while (s !== i)
            }
            Xt(t, e, n);
            break;
        case 1:
            if (!_e && (pi(n, e), i = n.stateNode, typeof i.componentWillUnmount == "function")) try {
                i.props = n.memoizedProps, i.state = n.memoizedState, i.componentWillUnmount()
            } catch (a) {
                oe(n, e, a)
            }
            Xt(t, e, n);
            break;
        case 21:
            Xt(t, e, n);
            break;
        case 22:
            n.mode & 1 ? (_e = (i = _e) || n.memoizedState !== null, Xt(t, e, n), _e = i) : Xt(t, e, n);
            break;
        default:
            Xt(t, e, n)
    }
}

function af(t) {
    var e = t.updateQueue;
    if (e !== null) {
        t.updateQueue = null;
        var n = t.stateNode;
        n === null && (n = t.stateNode = new ox), e.forEach(function(i) {
            var s = gx.bind(null, t, i);
            n.has(i) || (n.add(i), i.then(s, s))
        })
    }
}

function ft(t, e) {
    var n = e.deletions;
    if (n !== null)
        for (var i = 0; i < n.length; i++) {
            var s = n[i];
            try {
                var r = t,
                    o = e,
                    a = o;
                e: for (; a !== null;) {
                    switch (a.tag) {
                        case 5:
                            we = a.stateNode, pt = !1;
                            break e;
                        case 3:
                            we = a.stateNode.containerInfo, pt = !0;
                            break e;
                        case 4:
                            we = a.stateNode.containerInfo, pt = !0;
                            break e
                    }
                    a = a.return
                }
                if (we === null) throw Error(T(160));
                ag(r, o, s), we = null, pt = !1;
                var l = s.alternate;
                l !== null && (l.return = null), s.return = null
            } catch (u) {
                oe(s, e, u)
            }
        }
    if (e.subtreeFlags & 12854)
        for (e = e.child; e !== null;) lg(e, t), e = e.sibling
}

function lg(t, e) {
    var n = t.alternate,
        i = t.flags;
    switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (ft(e, t), Pt(t), i & 4) {
                try {
                    xs(3, t, t.return), jo(3, t)
                } catch (g) {
                    oe(t, t.return, g)
                }
                try {
                    xs(5, t, t.return)
                } catch (g) {
                    oe(t, t.return, g)
                }
            }
            break;
        case 1:
            ft(e, t), Pt(t), i & 512 && n !== null && pi(n, n.return);
            break;
        case 5:
            if (ft(e, t), Pt(t), i & 512 && n !== null && pi(n, n.return), t.flags & 32) {
                var s = t.stateNode;
                try {
                    Ms(s, "")
                } catch (g) {
                    oe(t, t.return, g)
                }
            }
            if (i & 4 && (s = t.stateNode, s != null)) {
                var r = t.memoizedProps,
                    o = n !== null ? n.memoizedProps : r,
                    a = t.type,
                    l = t.updateQueue;
                if (t.updateQueue = null, l !== null) try {
                    a === "input" && r.type === "radio" && r.name != null && Rp(s, r), xl(a, o);
                    var u = xl(a, r);
                    for (o = 0; o < l.length; o += 2) {
                        var c = l[o],
                            d = l[o + 1];
                        c === "style" ? Lp(s, d) : c === "dangerouslySetInnerHTML" ? Op(s, d) : c === "children" ? Ms(s, d) : Ou(s, c, d, u)
                    }
                    switch (a) {
                        case "input":
                            ml(s, r);
                            break;
                        case "textarea":
                            zp(s, r);
                            break;
                        case "select":
                            var f = s._wrapperState.wasMultiple;
                            s._wrapperState.wasMultiple = !!r.multiple;
                            var h = r.value;
                            h != null ? Si(s, !!r.multiple, h, !1) : f !== !!r.multiple && (r.defaultValue != null ? Si(s, !!r.multiple, r.defaultValue, !0) : Si(s, !!r.multiple, r.multiple ? [] : "", !1))
                    }
                    s[Ns] = r
                } catch (g) {
                    oe(t, t.return, g)
                }
            }
            break;
        case 6:
            if (ft(e, t), Pt(t), i & 4) {
                if (t.stateNode === null) throw Error(T(162));
                s = t.stateNode, r = t.memoizedProps;
                try {
                    s.nodeValue = r
                } catch (g) {
                    oe(t, t.return, g)
                }
            }
            break;
        case 3:
            if (ft(e, t), Pt(t), i & 4 && n !== null && n.memoizedState.isDehydrated) try {
                Os(e.containerInfo)
            } catch (g) {
                oe(t, t.return, g)
            }
            break;
        case 4:
            ft(e, t), Pt(t);
            break;
        case 13:
            ft(e, t), Pt(t), s = t.child, s.flags & 8192 && (r = s.memoizedState !== null, s.stateNode.isHidden = r, !r || s.alternate !== null && s.alternate.memoizedState !== null || (fc = ue())), i & 4 && af(t);
            break;
        case 22:
            if (c = n !== null && n.memoizedState !== null, t.mode & 1 ? (_e = (u = _e) || c, ft(e, t), _e = u) : ft(e, t), Pt(t), i & 8192) {
                if (u = t.memoizedState !== null, (t.stateNode.isHidden = u) && !c && t.mode & 1)
                    for (R = t, c = t.child; c !== null;) {
                        for (d = R = c; R !== null;) {
                            switch (f = R, h = f.child, f.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    xs(4, f, f.return);
                                    break;
                                case 1:
                                    pi(f, f.return);
                                    var y = f.stateNode;
                                    if (typeof y.componentWillUnmount == "function") {
                                        i = f, n = f.return;
                                        try {
                                            e = i, y.props = e.memoizedProps, y.state = e.memoizedState, y.componentWillUnmount()
                                        } catch (g) {
                                            oe(i, n, g)
                                        }
                                    }
                                    break;
                                case 5:
                                    pi(f, f.return);
                                    break;
                                case 22:
                                    if (f.memoizedState !== null) {
                                        uf(d);
                                        continue
                                    }
                            }
                            h !== null ? (h.return = f, R = h) : uf(d)
                        }
                        c = c.sibling
                    }
                e: for (c = null, d = t;;) {
                    if (d.tag === 5) {
                        if (c === null) {
                            c = d;
                            try {
                                s = d.stateNode, u ? (r = s.style, typeof r.setProperty == "function" ? r.setProperty("display", "none", "important") : r.display = "none") : (a = d.stateNode, l = d.memoizedProps.style, o = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = Ap("display", o))
                            } catch (g) {
                                oe(t, t.return, g)
                            }
                        }
                    } else if (d.tag === 6) {
                        if (c === null) try {
                            d.stateNode.nodeValue = u ? "" : d.memoizedProps
                        } catch (g) {
                            oe(t, t.return, g)
                        }
                    } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === t) && d.child !== null) {
                        d.child.return = d, d = d.child;
                        continue
                    }
                    if (d === t) break e;
                    for (; d.sibling === null;) {
                        if (d.return === null || d.return === t) break e;
                        c === d && (c = null), d = d.return
                    }
                    c === d && (c = null), d.sibling.return = d.return, d = d.sibling
                }
            }
            break;
        case 19:
            ft(e, t), Pt(t), i & 4 && af(t);
            break;
        case 21:
            break;
        default:
            ft(e, t), Pt(t)
    }
}

function Pt(t) {
    var e = t.flags;
    if (e & 2) {
        try {
            e: {
                for (var n = t.return; n !== null;) {
                    if (og(n)) {
                        var i = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(T(160))
            }
            switch (i.tag) {
                case 5:
                    var s = i.stateNode;
                    i.flags & 32 && (Ms(s, ""), i.flags &= -33);
                    var r = of(t);
                    Xl(t, r, s);
                    break;
                case 3:
                case 4:
                    var o = i.stateNode.containerInfo,
                        a = of(t);
                    Ql(t, a, o);
                    break;
                default:
                    throw Error(T(161))
            }
        }
        catch (l) {
            oe(t, t.return, l)
        }
        t.flags &= -3
    }
    e & 4096 && (t.flags &= -4097)
}

function lx(t, e, n) {
    R = t, ug(t)
}

function ug(t, e, n) {
    for (var i = (t.mode & 1) !== 0; R !== null;) {
        var s = R,
            r = s.child;
        if (s.tag === 22 && i) {
            var o = s.memoizedState !== null || kr;
            if (!o) {
                var a = s.alternate,
                    l = a !== null && a.memoizedState !== null || _e;
                a = kr;
                var u = _e;
                if (kr = o, (_e = l) && !u)
                    for (R = s; R !== null;) o = R, l = o.child, o.tag === 22 && o.memoizedState !== null ? cf(s) : l !== null ? (l.return = o, R = l) : cf(s);
                for (; r !== null;) R = r, ug(r), r = r.sibling;
                R = s, kr = a, _e = u
            }
            lf(t)
        } else s.subtreeFlags & 8772 && r !== null ? (r.return = s, R = r) : lf(t)
    }
}

function lf(t) {
    for (; R !== null;) {
        var e = R;
        if (e.flags & 8772) {
            var n = e.alternate;
            try {
                if (e.flags & 8772) switch (e.tag) {
                    case 0:
                    case 11:
                    case 15:
                        _e || jo(5, e);
                        break;
                    case 1:
                        var i = e.stateNode;
                        if (e.flags & 4 && !_e)
                            if (n === null) i.componentDidMount();
                            else {
                                var s = e.elementType === e.type ? n.memoizedProps : ht(e.type, n.memoizedProps);
                                i.componentDidUpdate(s, n.memoizedState, i.__reactInternalSnapshotBeforeUpdate)
                            } var r = e.updateQueue;
                        r !== null && Hd(e, r, i);
                        break;
                    case 3:
                        var o = e.updateQueue;
                        if (o !== null) {
                            if (n = null, e.child !== null) switch (e.child.tag) {
                                case 5:
                                    n = e.child.stateNode;
                                    break;
                                case 1:
                                    n = e.child.stateNode
                            }
                            Hd(e, o, n)
                        }
                        break;
                    case 5:
                        var a = e.stateNode;
                        if (n === null && e.flags & 4) {
                            n = a;
                            var l = e.memoizedProps;
                            switch (e.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    l.autoFocus && n.focus();
                                    break;
                                case "img":
                                    l.src && (n.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (e.memoizedState === null) {
                            var u = e.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var d = c.dehydrated;
                                    d !== null && Os(d)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(T(163))
                }
                _e || e.flags & 512 && Kl(e)
            } catch (f) {
                oe(e, e.return, f)
            }
        }
        if (e === t) {
            R = null;
            break
        }
        if (n = e.sibling, n !== null) {
            n.return = e.return, R = n;
            break
        }
        R = e.return
    }
}

function uf(t) {
    for (; R !== null;) {
        var e = R;
        if (e === t) {
            R = null;
            break
        }
        var n = e.sibling;
        if (n !== null) {
            n.return = e.return, R = n;
            break
        }
        R = e.return
    }
}

function cf(t) {
    for (; R !== null;) {
        var e = R;
        try {
            switch (e.tag) {
                case 0:
                case 11:
                case 15:
                    var n = e.return;
                    try {
                        jo(4, e)
                    } catch (l) {
                        oe(e, n, l)
                    }
                    break;
                case 1:
                    var i = e.stateNode;
                    if (typeof i.componentDidMount == "function") {
                        var s = e.return;
                        try {
                            i.componentDidMount()
                        } catch (l) {
                            oe(e, s, l)
                        }
                    }
                    var r = e.return;
                    try {
                        Kl(e)
                    } catch (l) {
                        oe(e, r, l)
                    }
                    break;
                case 5:
                    var o = e.return;
                    try {
                        Kl(e)
                    } catch (l) {
                        oe(e, o, l)
                    }
            }
        } catch (l) {
            oe(e, e.return, l)
        }
        if (e === t) {
            R = null;
            break
        }
        var a = e.sibling;
        if (a !== null) {
            a.return = e.return, R = a;
            break
        }
        R = e.return
    }
}
var ux = Math.ceil,
    co = Qt.ReactCurrentDispatcher,
    cc = Qt.ReactCurrentOwner,
    ot = Qt.ReactCurrentBatchConfig,
    U = 0,
    ve = null,
    de = null,
    be = 0,
    He = 0,
    mi = _n(0),
    he = 0,
    Ws = null,
    Qn = 0,
    Bo = 0,
    dc = 0,
    bs = null,
    Ne = null,
    fc = 0,
    Fi = 1 / 0,
    At = null,
    fo = !1,
    Yl = null,
    mn = null,
    Sr = !1,
    an = null,
    ho = 0,
    ks = 0,
    Zl = null,
    Fr = -1,
    Nr = 0;

function Ae() {
    return U & 6 ? ue() : Fr !== -1 ? Fr : Fr = ue()
}

function gn(t) {
    return t.mode & 1 ? U & 2 && be !== 0 ? be & -be : Gw.transition !== null ? (Nr === 0 && (Nr = qp()), Nr) : (t = W, t !== 0 || (t = window.event, t = t === void 0 ? 16 : em(t.type)), t) : 1
}

function yt(t, e, n, i) {
    if (50 < ks) throw ks = 0, Zl = null, Error(T(185));
    Xs(t, n, i), (!(U & 2) || t !== ve) && (t === ve && (!(U & 2) && (Bo |= n), he === 4 && sn(t, be)), Ue(t, i), n === 1 && U === 0 && !(e.mode & 1) && (Fi = ue() + 500, Fo && Tn()))
}

function Ue(t, e) {
    var n = t.callbackNode;
    G0(t, e);
    var i = Qr(t, t === ve ? be : 0);
    if (i === 0) n !== null && vd(n), t.callbackNode = null, t.callbackPriority = 0;
    else if (e = i & -i, t.callbackPriority !== e) {
        if (n != null && vd(n), e === 1) t.tag === 0 ? Hw(df.bind(null, t)) : wm(df.bind(null, t)), Bw(function() {
            !(U & 6) && Tn()
        }), n = null;
        else {
            switch (Kp(i)) {
                case 1:
                    n = Nu;
                    break;
                case 4:
                    n = Hp;
                    break;
                case 16:
                    n = Kr;
                    break;
                case 536870912:
                    n = Gp;
                    break;
                default:
                    n = Kr
            }
            n = yg(n, cg.bind(null, t))
        }
        t.callbackPriority = e, t.callbackNode = n
    }
}

function cg(t, e) {
    if (Fr = -1, Nr = 0, U & 6) throw Error(T(327));
    var n = t.callbackNode;
    if (Ei() && t.callbackNode !== n) return null;
    var i = Qr(t, t === ve ? be : 0);
    if (i === 0) return null;
    if (i & 30 || i & t.expiredLanes || e) e = po(t, i);
    else {
        e = i;
        var s = U;
        U |= 2;
        var r = fg();
        (ve !== t || be !== e) && (At = null, Fi = ue() + 500, $n(t, e));
        do try {
            fx();
            break
        } catch (a) {
            dg(t, a)
        }
        while (!0);
        Yu(), co.current = r, U = s, de !== null ? e = 0 : (ve = null, be = 0, e = he)
    }
    if (e !== 0) {
        if (e === 2 && (s = Cl(t), s !== 0 && (i = s, e = Jl(t, s))), e === 1) throw n = Ws, $n(t, 0), sn(t, i), Ue(t, ue()), n;
        if (e === 6) sn(t, i);
        else {
            if (s = t.current.alternate, !(i & 30) && !cx(s) && (e = po(t, i), e === 2 && (r = Cl(t), r !== 0 && (i = r, e = Jl(t, r))), e === 1)) throw n = Ws, $n(t, 0), sn(t, i), Ue(t, ue()), n;
            switch (t.finishedWork = s, t.finishedLanes = i, e) {
                case 0:
                case 1:
                    throw Error(T(345));
                case 2:
                    Ln(t, Ne, At);
                    break;
                case 3:
                    if (sn(t, i), (i & 130023424) === i && (e = fc + 500 - ue(), 10 < e)) {
                        if (Qr(t, 0) !== 0) break;
                        if (s = t.suspendedLanes, (s & i) !== i) {
                            Ae(), t.pingedLanes |= t.suspendedLanes & s;
                            break
                        }
                        t.timeoutHandle = Ol(Ln.bind(null, t, Ne, At), e);
                        break
                    }
                    Ln(t, Ne, At);
                    break;
                case 4:
                    if (sn(t, i), (i & 4194240) === i) break;
                    for (e = t.eventTimes, s = -1; 0 < i;) {
                        var o = 31 - gt(i);
                        r = 1 << o, o = e[o], o > s && (s = o), i &= ~r
                    }
                    if (i = s, i = ue() - i, i = (120 > i ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * ux(i / 1960)) - i, 10 < i) {
                        t.timeoutHandle = Ol(Ln.bind(null, t, Ne, At), i);
                        break
                    }
                    Ln(t, Ne, At);
                    break;
                case 5:
                    Ln(t, Ne, At);
                    break;
                default:
                    throw Error(T(329))
            }
        }
    }
    return Ue(t, ue()), t.callbackNode === n ? cg.bind(null, t) : null
}

function Jl(t, e) {
    var n = bs;
    return t.current.memoizedState.isDehydrated && ($n(t, e).flags |= 256), t = po(t, e), t !== 2 && (e = Ne, Ne = n, e !== null && eu(e)), t
}

function eu(t) {
    Ne === null ? Ne = t : Ne.push.apply(Ne, t)
}

function cx(t) {
    for (var e = t;;) {
        if (e.flags & 16384) {
            var n = e.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var i = 0; i < n.length; i++) {
                    var s = n[i],
                        r = s.getSnapshot;
                    s = s.value;
                    try {
                        if (!wt(r(), s)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = e.child, e.subtreeFlags & 16384 && n !== null) n.return = e, e = n;
        else {
            if (e === t) break;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) return !0;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
    }
    return !0
}

function sn(t, e) {
    for (e &= ~dc, e &= ~Bo, t.suspendedLanes |= e, t.pingedLanes &= ~e, t = t.expirationTimes; 0 < e;) {
        var n = 31 - gt(e),
            i = 1 << n;
        t[n] = -1, e &= ~i
    }
}

function df(t) {
    if (U & 6) throw Error(T(327));
    Ei();
    var e = Qr(t, 0);
    if (!(e & 1)) return Ue(t, ue()), null;
    var n = po(t, e);
    if (t.tag !== 0 && n === 2) {
        var i = Cl(t);
        i !== 0 && (e = i, n = Jl(t, i))
    }
    if (n === 1) throw n = Ws, $n(t, 0), sn(t, e), Ue(t, ue()), n;
    if (n === 6) throw Error(T(345));
    return t.finishedWork = t.current.alternate, t.finishedLanes = e, Ln(t, Ne, At), Ue(t, ue()), null
}

function hc(t, e) {
    var n = U;
    U |= 1;
    try {
        return t(e)
    } finally {
        U = n, U === 0 && (Fi = ue() + 500, Fo && Tn())
    }
}

function Xn(t) {
    an !== null && an.tag === 0 && !(U & 6) && Ei();
    var e = U;
    U |= 1;
    var n = ot.transition,
        i = W;
    try {
        if (ot.transition = null, W = 1, t) return t()
    } finally {
        W = i, ot.transition = n, U = e, !(U & 6) && Tn()
    }
}

function pc() {
    He = mi.current, X(mi)
}

function $n(t, e) {
    t.finishedWork = null, t.finishedLanes = 0;
    var n = t.timeoutHandle;
    if (n !== -1 && (t.timeoutHandle = -1, jw(n)), de !== null)
        for (n = de.return; n !== null;) {
            var i = n;
            switch (Ku(i), i.tag) {
                case 1:
                    i = i.type.childContextTypes, i != null && eo();
                    break;
                case 3:
                    Li(), X(je), X(De), ic();
                    break;
                case 5:
                    nc(i);
                    break;
                case 4:
                    Li();
                    break;
                case 13:
                    X(te);
                    break;
                case 19:
                    X(te);
                    break;
                case 10:
                    Zu(i.type._context);
                    break;
                case 22:
                case 23:
                    pc()
            }
            n = n.return
        }
    if (ve = t, de = t = yn(t.current, null), be = He = e, he = 0, Ws = null, dc = Bo = Qn = 0, Ne = bs = null, Vn !== null) {
        for (e = 0; e < Vn.length; e++)
            if (n = Vn[e], i = n.interleaved, i !== null) {
                n.interleaved = null;
                var s = i.next,
                    r = n.pending;
                if (r !== null) {
                    var o = r.next;
                    r.next = s, i.next = o
                }
                n.pending = i
            } Vn = null
    }
    return t
}

function dg(t, e) {
    do {
        var n = de;
        try {
            if (Yu(), Ar.current = uo, lo) {
                for (var i = ie.memoizedState; i !== null;) {
                    var s = i.queue;
                    s !== null && (s.pending = null), i = i.next
                }
                lo = !1
            }
            if (Kn = 0, ge = fe = ie = null, ws = !1, Bs = 0, cc.current = null, n === null || n.return === null) {
                he = 1, Ws = e, de = null;
                break
            }
            e: {
                var r = t,
                    o = n.return,
                    a = n,
                    l = e;
                if (e = be, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l,
                        c = a,
                        d = c.tag;
                    if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var f = c.alternate;
                        f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null)
                    }
                    var h = Yd(o);
                    if (h !== null) {
                        h.flags &= -257, Zd(h, o, a, r, e), h.mode & 1 && Xd(r, u, e), e = h, l = u;
                        var y = e.updateQueue;
                        if (y === null) {
                            var g = new Set;
                            g.add(l), e.updateQueue = g
                        } else y.add(l);
                        break e
                    } else {
                        if (!(e & 1)) {
                            Xd(r, u, e), mc();
                            break e
                        }
                        l = Error(T(426))
                    }
                } else if (J && a.mode & 1) {
                    var x = Yd(o);
                    if (x !== null) {
                        !(x.flags & 65536) && (x.flags |= 256), Zd(x, o, a, r, e), Qu(Ii(l, a));
                        break e
                    }
                }
                r = l = Ii(l, a),
                he !== 4 && (he = 2),
                bs === null ? bs = [r] : bs.push(r),
                r = o;do {
                    switch (r.tag) {
                        case 3:
                            r.flags |= 65536, e &= -e, r.lanes |= e;
                            var p = Km(r, l, e);
                            Wd(r, p);
                            break e;
                        case 1:
                            a = l;
                            var m = r.type,
                                v = r.stateNode;
                            if (!(r.flags & 128) && (typeof m.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (mn === null || !mn.has(v)))) {
                                r.flags |= 65536, e &= -e, r.lanes |= e;
                                var w = Qm(r, a, e);
                                Wd(r, w);
                                break e
                            }
                    }
                    r = r.return
                } while (r !== null)
            }
            pg(n)
        } catch (b) {
            e = b, de === n && n !== null && (de = n = n.return);
            continue
        }
        break
    } while (!0)
}

function fg() {
    var t = co.current;
    return co.current = uo, t === null ? uo : t
}

function mc() {
    (he === 0 || he === 3 || he === 2) && (he = 4), ve === null || !(Qn & 268435455) && !(Bo & 268435455) || sn(ve, be)
}

function po(t, e) {
    var n = U;
    U |= 2;
    var i = fg();
    (ve !== t || be !== e) && (At = null, $n(t, e));
    do try {
        dx();
        break
    } catch (s) {
        dg(t, s)
    }
    while (!0);
    if (Yu(), U = n, co.current = i, de !== null) throw Error(T(261));
    return ve = null, be = 0, he
}

function dx() {
    for (; de !== null;) hg(de)
}

function fx() {
    for (; de !== null && !F0();) hg(de)
}

function hg(t) {
    var e = gg(t.alternate, t, He);
    t.memoizedProps = t.pendingProps, e === null ? pg(t) : de = e, cc.current = null
}

function pg(t) {
    var e = t;
    do {
        var n = e.alternate;
        if (t = e.return, e.flags & 32768) {
            if (n = rx(n, e), n !== null) {
                n.flags &= 32767, de = n;
                return
            }
            if (t !== null) t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null;
            else {
                he = 6, de = null;
                return
            }
        } else if (n = sx(n, e, He), n !== null) {
            de = n;
            return
        }
        if (e = e.sibling, e !== null) {
            de = e;
            return
        }
        de = e = t
    } while (e !== null);
    he === 0 && (he = 5)
}

function Ln(t, e, n) {
    var i = W,
        s = ot.transition;
    try {
        ot.transition = null, W = 1, hx(t, e, n, i)
    } finally {
        ot.transition = s, W = i
    }
    return null
}

function hx(t, e, n, i) {
    do Ei(); while (an !== null);
    if (U & 6) throw Error(T(327));
    n = t.finishedWork;
    var s = t.finishedLanes;
    if (n === null) return null;
    if (t.finishedWork = null, t.finishedLanes = 0, n === t.current) throw Error(T(177));
    t.callbackNode = null, t.callbackPriority = 0;
    var r = n.lanes | n.childLanes;
    if (q0(t, r), t === ve && (de = ve = null, be = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Sr || (Sr = !0, yg(Kr, function() {
            return Ei(), null
        })), r = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || r) {
        r = ot.transition, ot.transition = null;
        var o = W;
        W = 1;
        var a = U;
        U |= 4, cc.current = null, ax(t, n), lg(n, t), Ow(zl), Xr = !!Rl, zl = Rl = null, t.current = n, lx(n), N0(), U = a, W = o, ot.transition = r
    } else t.current = n;
    if (Sr && (Sr = !1, an = t, ho = s), r = t.pendingLanes, r === 0 && (mn = null), B0(n.stateNode), Ue(t, ue()), e !== null)
        for (i = t.onRecoverableError, n = 0; n < e.length; n++) s = e[n], i(s.value, {
            componentStack: s.stack,
            digest: s.digest
        });
    if (fo) throw fo = !1, t = Yl, Yl = null, t;
    return ho & 1 && t.tag !== 0 && Ei(), r = t.pendingLanes, r & 1 ? t === Zl ? ks++ : (ks = 0, Zl = t) : ks = 0, Tn(), null
}

function Ei() {
    if (an !== null) {
        var t = Kp(ho),
            e = ot.transition,
            n = W;
        try {
            if (ot.transition = null, W = 16 > t ? 16 : t, an === null) var i = !1;
            else {
                if (t = an, an = null, ho = 0, U & 6) throw Error(T(331));
                var s = U;
                for (U |= 4, R = t.current; R !== null;) {
                    var r = R,
                        o = r.child;
                    if (R.flags & 16) {
                        var a = r.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (R = u; R !== null;) {
                                    var c = R;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            xs(8, c, r)
                                    }
                                    var d = c.child;
                                    if (d !== null) d.return = c, R = d;
                                    else
                                        for (; R !== null;) {
                                            c = R;
                                            var f = c.sibling,
                                                h = c.return;
                                            if (rg(c), c === u) {
                                                R = null;
                                                break
                                            }
                                            if (f !== null) {
                                                f.return = h, R = f;
                                                break
                                            }
                                            R = h
                                        }
                                }
                            }
                            var y = r.alternate;
                            if (y !== null) {
                                var g = y.child;
                                if (g !== null) {
                                    y.child = null;
                                    do {
                                        var x = g.sibling;
                                        g.sibling = null, g = x
                                    } while (g !== null)
                                }
                            }
                            R = r
                        }
                    }
                    if (r.subtreeFlags & 2064 && o !== null) o.return = r, R = o;
                    else e: for (; R !== null;) {
                        if (r = R, r.flags & 2048) switch (r.tag) {
                            case 0:
                            case 11:
                            case 15:
                                xs(9, r, r.return)
                        }
                        var p = r.sibling;
                        if (p !== null) {
                            p.return = r.return, R = p;
                            break e
                        }
                        R = r.return
                    }
                }
                var m = t.current;
                for (R = m; R !== null;) {
                    o = R;
                    var v = o.child;
                    if (o.subtreeFlags & 2064 && v !== null) v.return = o, R = v;
                    else e: for (o = m; R !== null;) {
                        if (a = R, a.flags & 2048) try {
                            switch (a.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    jo(9, a)
                            }
                        } catch (b) {
                            oe(a, a.return, b)
                        }
                        if (a === o) {
                            R = null;
                            break e
                        }
                        var w = a.sibling;
                        if (w !== null) {
                            w.return = a.return, R = w;
                            break e
                        }
                        R = a.return
                    }
                }
                if (U = s, Tn(), Tt && typeof Tt.onPostCommitFiberRoot == "function") try {
                    Tt.onPostCommitFiberRoot(Do, t)
                } catch {}
                i = !0
            }
            return i
        } finally {
            W = n, ot.transition = e
        }
    }
    return !1
}

function ff(t, e, n) {
    e = Ii(n, e), e = Km(t, e, 1), t = pn(t, e, 1), e = Ae(), t !== null && (Xs(t, 1, e), Ue(t, e))
}

function oe(t, e, n) {
    if (t.tag === 3) ff(t, t, n);
    else
        for (; e !== null;) {
            if (e.tag === 3) {
                ff(e, t, n);
                break
            } else if (e.tag === 1) {
                var i = e.stateNode;
                if (typeof e.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (mn === null || !mn.has(i))) {
                    t = Ii(n, t), t = Qm(e, t, 1), e = pn(e, t, 1), t = Ae(), e !== null && (Xs(e, 1, t), Ue(e, t));
                    break
                }
            }
            e = e.return
        }
}

function px(t, e, n) {
    var i = t.pingCache;
    i !== null && i.delete(e), e = Ae(), t.pingedLanes |= t.suspendedLanes & n, ve === t && (be & n) === n && (he === 4 || he === 3 && (be & 130023424) === be && 500 > ue() - fc ? $n(t, 0) : dc |= n), Ue(t, e)
}

function mg(t, e) {
    e === 0 && (t.mode & 1 ? (e = hr, hr <<= 1, !(hr & 130023424) && (hr = 4194304)) : e = 1);
    var n = Ae();
    t = Gt(t, e), t !== null && (Xs(t, e, n), Ue(t, n))
}

function mx(t) {
    var e = t.memoizedState,
        n = 0;
    e !== null && (n = e.retryLane), mg(t, n)
}

function gx(t, e) {
    var n = 0;
    switch (t.tag) {
        case 13:
            var i = t.stateNode,
                s = t.memoizedState;
            s !== null && (n = s.retryLane);
            break;
        case 19:
            i = t.stateNode;
            break;
        default:
            throw Error(T(314))
    }
    i !== null && i.delete(e), mg(t, n)
}
var gg;
gg = function(t, e, n) {
    if (t !== null)
        if (t.memoizedProps !== e.pendingProps || je.current) Ve = !0;
        else {
            if (!(t.lanes & n) && !(e.flags & 128)) return Ve = !1, ix(t, e, n);
            Ve = !!(t.flags & 131072)
        }
    else Ve = !1, J && e.flags & 1048576 && xm(e, io, e.index);
    switch (e.lanes = 0, e.tag) {
        case 2:
            var i = e.type;
            Ir(t, e), t = e.pendingProps;
            var s = Di(e, De.current);
            Ti(e, n), s = rc(null, e, i, t, s, n);
            var r = oc();
            return e.flags |= 1, typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (e.tag = 1, e.memoizedState = null, e.updateQueue = null, Be(i) ? (r = !0, to(e)) : r = !1, e.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, ec(e), s.updater = Vo, e.stateNode = s, s._reactInternals = e, jl(e, i, t, n), e = $l(null, e, i, !0, r, n)) : (e.tag = 0, J && r && qu(e), Oe(null, e, s, n), e = e.child), e;
        case 16:
            i = e.elementType;
            e: {
                switch (Ir(t, e), t = e.pendingProps, s = i._init, i = s(i._payload), e.type = i, s = e.tag = vx(i), t = ht(i, t), s) {
                    case 0:
                        e = Ul(null, e, i, t, n);
                        break e;
                    case 1:
                        e = tf(null, e, i, t, n);
                        break e;
                    case 11:
                        e = Jd(null, e, i, t, n);
                        break e;
                    case 14:
                        e = ef(null, e, i, ht(i.type, t), n);
                        break e
                }
                throw Error(T(306, i, ""))
            }
            return e;
        case 0:
            return i = e.type, s = e.pendingProps, s = e.elementType === i ? s : ht(i, s), Ul(t, e, i, s, n);
        case 1:
            return i = e.type, s = e.pendingProps, s = e.elementType === i ? s : ht(i, s), tf(t, e, i, s, n);
        case 3:
            e: {
                if (Jm(e), t === null) throw Error(T(387));i = e.pendingProps,
                r = e.memoizedState,
                s = r.element,
                _m(t, e),
                oo(e, i, null, n);
                var o = e.memoizedState;
                if (i = o.element, r.isDehydrated)
                    if (r = {
                            element: i,
                            isDehydrated: !1,
                            cache: o.cache,
                            pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                            transitions: o.transitions
                        }, e.updateQueue.baseState = r, e.memoizedState = r, e.flags & 256) {
                        s = Ii(Error(T(423)), e), e = nf(t, e, i, n, s);
                        break e
                    } else if (i !== s) {
                    s = Ii(Error(T(424)), e), e = nf(t, e, i, n, s);
                    break e
                } else
                    for (Ge = hn(e.stateNode.containerInfo.firstChild), qe = e, J = !0, mt = null, n = Pm(e, null, i, n), e.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (Oi(), i === s) {
                        e = qt(t, e, n);
                        break e
                    }
                    Oe(t, e, i, n)
                }
                e = e.child
            }
            return e;
        case 5:
            return Tm(e), t === null && Fl(e), i = e.type, s = e.pendingProps, r = t !== null ? t.memoizedProps : null, o = s.children, Dl(i, s) ? o = null : r !== null && Dl(i, r) && (e.flags |= 32), Zm(t, e), Oe(t, e, o, n), e.child;
        case 6:
            return t === null && Fl(e), null;
        case 13:
            return eg(t, e, n);
        case 4:
            return tc(e, e.stateNode.containerInfo), i = e.pendingProps, t === null ? e.child = Ai(e, null, i, n) : Oe(t, e, i, n), e.child;
        case 11:
            return i = e.type, s = e.pendingProps, s = e.elementType === i ? s : ht(i, s), Jd(t, e, i, s, n);
        case 7:
            return Oe(t, e, e.pendingProps, n), e.child;
        case 8:
            return Oe(t, e, e.pendingProps.children, n), e.child;
        case 12:
            return Oe(t, e, e.pendingProps.children, n), e.child;
        case 10:
            e: {
                if (i = e.type._context, s = e.pendingProps, r = e.memoizedProps, o = s.value, q(so, i._currentValue), i._currentValue = o, r !== null)
                    if (wt(r.value, o)) {
                        if (r.children === s.children && !je.current) {
                            e = qt(t, e, n);
                            break e
                        }
                    } else
                        for (r = e.child, r !== null && (r.return = e); r !== null;) {
                            var a = r.dependencies;
                            if (a !== null) {
                                o = r.child;
                                for (var l = a.firstContext; l !== null;) {
                                    if (l.context === i) {
                                        if (r.tag === 1) {
                                            l = Vt(-1, n & -n), l.tag = 2;
                                            var u = r.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var c = u.pending;
                                                c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l
                                            }
                                        }
                                        r.lanes |= n, l = r.alternate, l !== null && (l.lanes |= n), Nl(r.return, n, e), a.lanes |= n;
                                        break
                                    }
                                    l = l.next
                                }
                            } else if (r.tag === 10) o = r.type === e.type ? null : r.child;
                            else if (r.tag === 18) {
                                if (o = r.return, o === null) throw Error(T(341));
                                o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), Nl(o, n, e), o = r.sibling
                            } else o = r.child;
                            if (o !== null) o.return = r;
                            else
                                for (o = r; o !== null;) {
                                    if (o === e) {
                                        o = null;
                                        break
                                    }
                                    if (r = o.sibling, r !== null) {
                                        r.return = o.return, o = r;
                                        break
                                    }
                                    o = o.return
                                }
                            r = o
                        }
                Oe(t, e, s.children, n),
                e = e.child
            }
            return e;
        case 9:
            return s = e.type, i = e.pendingProps.children, Ti(e, n), s = lt(s), i = i(s), e.flags |= 1, Oe(t, e, i, n), e.child;
        case 14:
            return i = e.type, s = ht(i, e.pendingProps), s = ht(i.type, s), ef(t, e, i, s, n);
        case 15:
            return Xm(t, e, e.type, e.pendingProps, n);
        case 17:
            return i = e.type, s = e.pendingProps, s = e.elementType === i ? s : ht(i, s), Ir(t, e), e.tag = 1, Be(i) ? (t = !0, to(e)) : t = !1, Ti(e, n), qm(e, i, s), jl(e, i, s, n), $l(null, e, i, !0, t, n);
        case 19:
            return tg(t, e, n);
        case 22:
            return Ym(t, e, n)
    }
    throw Error(T(156, e.tag))
};

function yg(t, e) {
    return Wp(t, e)
}

function yx(t, e, n, i) {
    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function rt(t, e, n, i) {
    return new yx(t, e, n, i)
}

function gc(t) {
    return t = t.prototype, !(!t || !t.isReactComponent)
}

function vx(t) {
    if (typeof t == "function") return gc(t) ? 1 : 0;
    if (t != null) {
        if (t = t.$$typeof, t === Lu) return 11;
        if (t === Iu) return 14
    }
    return 2
}

function yn(t, e) {
    var n = t.alternate;
    return n === null ? (n = rt(t.tag, e, t.key, t.mode), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 14680064, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext
    }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n
}

function Vr(t, e, n, i, s, r) {
    var o = 2;
    if (i = t, typeof t == "function") gc(t) && (o = 1);
    else if (typeof t == "string") o = 5;
    else e: switch (t) {
        case ri:
            return Wn(n.children, s, r, e);
        case Au:
            o = 8, s |= 8;
            break;
        case cl:
            return t = rt(12, n, e, s | 2), t.elementType = cl, t.lanes = r, t;
        case dl:
            return t = rt(13, n, e, s), t.elementType = dl, t.lanes = r, t;
        case fl:
            return t = rt(19, n, e, s), t.elementType = fl, t.lanes = r, t;
        case Tp:
            return Uo(n, s, r, e);
        default:
            if (typeof t == "object" && t !== null) switch (t.$$typeof) {
                case Cp:
                    o = 10;
                    break e;
                case _p:
                    o = 9;
                    break e;
                case Lu:
                    o = 11;
                    break e;
                case Iu:
                    o = 14;
                    break e;
                case en:
                    o = 16, i = null;
                    break e
            }
            throw Error(T(130, t == null ? t : typeof t, ""))
    }
    return e = rt(o, n, e, s), e.elementType = t, e.type = i, e.lanes = r, e
}

function Wn(t, e, n, i) {
    return t = rt(7, t, i, e), t.lanes = n, t
}

function Uo(t, e, n, i) {
    return t = rt(22, t, i, e), t.elementType = Tp, t.lanes = n, t.stateNode = {
        isHidden: !1
    }, t
}

function Ma(t, e, n) {
    return t = rt(6, t, null, e), t.lanes = n, t
}

function Ra(t, e, n) {
    return e = rt(4, t.children !== null ? t.children : [], t.key, e), e.lanes = n, e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation
    }, e
}

function wx(t, e, n, i, s) {
    this.tag = e, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ca(0), this.expirationTimes = ca(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ca(0), this.identifierPrefix = i, this.onRecoverableError = s, this.mutableSourceEagerHydrationData = null
}

function yc(t, e, n, i, s, r, o, a, l) {
    return t = new wx(t, e, n, a, l), e === 1 ? (e = 1, r === !0 && (e |= 8)) : e = 0, r = rt(3, null, null, e), t.current = r, r.stateNode = t, r.memoizedState = {
        element: i,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, ec(r), t
}

function xx(t, e, n) {
    var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: si,
        key: i == null ? null : "" + i,
        children: t,
        containerInfo: e,
        implementation: n
    }
}

function vg(t) {
    if (!t) return xn;
    t = t._reactInternals;
    e: {
        if (ei(t) !== t || t.tag !== 1) throw Error(T(170));
        var e = t;do {
            switch (e.tag) {
                case 3:
                    e = e.stateNode.context;
                    break e;
                case 1:
                    if (Be(e.type)) {
                        e = e.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            e = e.return
        } while (e !== null);
        throw Error(T(171))
    }
    if (t.tag === 1) {
        var n = t.type;
        if (Be(n)) return vm(t, n, e)
    }
    return e
}

function wg(t, e, n, i, s, r, o, a, l) {
    return t = yc(n, i, !0, t, s, r, o, a, l), t.context = vg(null), n = t.current, i = Ae(), s = gn(n), r = Vt(i, s), r.callback = e ?? null, pn(n, r, s), t.current.lanes = s, Xs(t, s, i), Ue(t, i), t
}

function $o(t, e, n, i) {
    var s = e.current,
        r = Ae(),
        o = gn(s);
    return n = vg(n), e.context === null ? e.context = n : e.pendingContext = n, e = Vt(r, o), e.payload = {
        element: t
    }, i = i === void 0 ? null : i, i !== null && (e.callback = i), t = pn(s, e, o), t !== null && (yt(t, s, o, r), Or(t, s, o)), o
}

function mo(t) {
    if (t = t.current, !t.child) return null;
    switch (t.child.tag) {
        case 5:
            return t.child.stateNode;
        default:
            return t.child.stateNode
    }
}

function hf(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
        var n = t.retryLane;
        t.retryLane = n !== 0 && n < e ? n : e
    }
}

function vc(t, e) {
    hf(t, e), (t = t.alternate) && hf(t, e)
}

function bx() {
    return null
}
var xg = typeof reportError == "function" ? reportError : function(t) {
    console.error(t)
};

function wc(t) {
    this._internalRoot = t
}
Wo.prototype.render = wc.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(T(409));
    $o(t, e, null, null)
};
Wo.prototype.unmount = wc.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
        this._internalRoot = null;
        var e = t.containerInfo;
        Xn(function() {
            $o(null, t, null, null)
        }), e[Ht] = null
    }
};

function Wo(t) {
    this._internalRoot = t
}
Wo.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
        var e = Yp();
        t = {
            blockedOn: null,
            target: t,
            priority: e
        };
        for (var n = 0; n < nn.length && e !== 0 && e < nn[n].priority; n++);
        nn.splice(n, 0, t), n === 0 && Jp(t)
    }
};

function xc(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
}

function Ho(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
}

function pf() {}

function kx(t, e, n, i, s) {
    if (s) {
        if (typeof i == "function") {
            var r = i;
            i = function() {
                var u = mo(o);
                r.call(u)
            }
        }
        var o = wg(e, i, t, 0, null, !1, !1, "", pf);
        return t._reactRootContainer = o, t[Ht] = o.current, Is(t.nodeType === 8 ? t.parentNode : t), Xn(), o
    }
    for (; s = t.lastChild;) t.removeChild(s);
    if (typeof i == "function") {
        var a = i;
        i = function() {
            var u = mo(l);
            a.call(u)
        }
    }
    var l = yc(t, 0, !1, null, null, !1, !1, "", pf);
    return t._reactRootContainer = l, t[Ht] = l.current, Is(t.nodeType === 8 ? t.parentNode : t), Xn(function() {
        $o(e, l, n, i)
    }), l
}

function Go(t, e, n, i, s) {
    var r = n._reactRootContainer;
    if (r) {
        var o = r;
        if (typeof s == "function") {
            var a = s;
            s = function() {
                var l = mo(o);
                a.call(l)
            }
        }
        $o(e, o, t, s)
    } else o = kx(n, e, t, s, i);
    return mo(o)
}
Qp = function(t) {
    switch (t.tag) {
        case 3:
            var e = t.stateNode;
            if (e.current.memoizedState.isDehydrated) {
                var n = cs(e.pendingLanes);
                n !== 0 && (Vu(e, n | 1), Ue(e, ue()), !(U & 6) && (Fi = ue() + 500, Tn()))
            }
            break;
        case 13:
            Xn(function() {
                var i = Gt(t, 1);
                if (i !== null) {
                    var s = Ae();
                    yt(i, t, 1, s)
                }
            }), vc(t, 1)
    }
};
ju = function(t) {
    if (t.tag === 13) {
        var e = Gt(t, 134217728);
        if (e !== null) {
            var n = Ae();
            yt(e, t, 134217728, n)
        }
        vc(t, 134217728)
    }
};
Xp = function(t) {
    if (t.tag === 13) {
        var e = gn(t),
            n = Gt(t, e);
        if (n !== null) {
            var i = Ae();
            yt(n, t, e, i)
        }
        vc(t, e)
    }
};
Yp = function() {
    return W
};
Zp = function(t, e) {
    var n = W;
    try {
        return W = t, e()
    } finally {
        W = n
    }
};
kl = function(t, e, n) {
    switch (e) {
        case "input":
            if (ml(t, n), e = n.name, n.type === "radio" && e != null) {
                for (n = t; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'), e = 0; e < n.length; e++) {
                    var i = n[e];
                    if (i !== t && i.form === t.form) {
                        var s = Io(i);
                        if (!s) throw Error(T(90));
                        Mp(i), ml(i, s)
                    }
                }
            }
            break;
        case "textarea":
            zp(t, n);
            break;
        case "select":
            e = n.value, e != null && Si(t, !!n.multiple, e, !1)
    }
};
Np = hc;
Vp = Xn;
var Sx = {
        usingClientEntryPoint: !1,
        Events: [Zs, ui, Io, Ip, Fp, hc]
    },
    ss = {
        findFiberByHostInstance: Nn,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    Px = {
        bundleType: ss.bundleType,
        version: ss.version,
        rendererPackageName: ss.rendererPackageName,
        rendererConfig: ss.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Qt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(t) {
            return t = Up(t), t === null ? null : t.stateNode
        },
        findFiberByHostInstance: ss.findFiberByHostInstance || bx,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Pr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Pr.isDisabled && Pr.supportsFiber) try {
        Do = Pr.inject(Px), Tt = Pr
    } catch {}
}
Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sx;
Ye.createPortal = function(t, e) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!xc(e)) throw Error(T(200));
    return xx(t, e, null, n)
};
Ye.createRoot = function(t, e) {
    if (!xc(t)) throw Error(T(299));
    var n = !1,
        i = "",
        s = xg;
    return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (i = e.identifierPrefix), e.onRecoverableError !== void 0 && (s = e.onRecoverableError)), e = yc(t, 1, !1, null, null, n, !1, i, s), t[Ht] = e.current, Is(t.nodeType === 8 ? t.parentNode : t), new wc(e)
};
Ye.findDOMNode = function(t) {
    if (t == null) return null;
    if (t.nodeType === 1) return t;
    var e = t._reactInternals;
    if (e === void 0) throw typeof t.render == "function" ? Error(T(188)) : (t = Object.keys(t).join(","), Error(T(268, t)));
    return t = Up(e), t = t === null ? null : t.stateNode, t
};
Ye.flushSync = function(t) {
    return Xn(t)
};
Ye.hydrate = function(t, e, n) {
    if (!Ho(e)) throw Error(T(200));
    return Go(null, t, e, !0, n)
};
Ye.hydrateRoot = function(t, e, n) {
    if (!xc(t)) throw Error(T(405));
    var i = n != null && n.hydratedSources || null,
        s = !1,
        r = "",
        o = xg;
    if (n != null && (n.unstable_strictMode === !0 && (s = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), e = wg(e, null, t, 1, n ?? null, s, !1, r, o), t[Ht] = e.current, Is(t), i)
        for (t = 0; t < i.length; t++) n = i[t], s = n._getVersion, s = s(n._source), e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [n, s] : e.mutableSourceEagerHydrationData.push(n, s);
    return new Wo(e)
};
Ye.render = function(t, e, n) {
    if (!Ho(e)) throw Error(T(200));
    return Go(null, t, e, !1, n)
};
Ye.unmountComponentAtNode = function(t) {
    if (!Ho(t)) throw Error(T(40));
    return t._reactRootContainer ? (Xn(function() {
        Go(null, null, t, !1, function() {
            t._reactRootContainer = null, t[Ht] = null
        })
    }), !0) : !1
};
Ye.unstable_batchedUpdates = hc;
Ye.unstable_renderSubtreeIntoContainer = function(t, e, n, i) {
    if (!Ho(n)) throw Error(T(200));
    if (t == null || t._reactInternals === void 0) throw Error(T(38));
    return Go(t, e, n, !1, i)
};
Ye.version = "18.3.1-next-f1338f8080-20240426";

function bg() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bg)
    } catch (t) {
        console.error(t)
    }
}
bg(), bp.exports = Ye;
var Cx = bp.exports,
    kg, mf = Cx;
kg = mf.createRoot, mf.hydrateRoot;
var _x = (t, e, n, i, s, r, o, a) => {
        let l = document.documentElement,
            u = ["light", "dark"];

        function c(h) {
            (Array.isArray(t) ? t : [t]).forEach(y => {
                let g = y === "class",
                    x = g && r ? s.map(p => r[p] || p) : s;
                g ? (l.classList.remove(...x), l.classList.add(h)) : l.setAttribute(y, h)
            }), d(h)
        }

        function d(h) {
            a && u.includes(h) && (l.style.colorScheme = h)
        }

        function f() {
            return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
        }
        if (i) c(i);
        else try {
            let h = localStorage.getItem(e) || n,
                y = o && h === "system" ? f() : h;
            c(y)
        } catch {}
    },
    gf = ["light", "dark"],
    Sg = "(prefers-color-scheme: dark)",
    Tx = typeof window > "u",
    Pg = k.createContext(void 0),
    Ex = t => k.useContext(Pg) ? k.createElement(k.Fragment, null, t.children) : k.createElement(Rx, {
        ...t
    }),
    Mx = ["light", "dark"],
    Rx = ({
        forcedTheme: t,
        disableTransitionOnChange: e = !1,
        enableSystem: n = !0,
        enableColorScheme: i = !0,
        storageKey: s = "theme",
        themes: r = Mx,
        defaultTheme: o = n ? "system" : "light",
        attribute: a = "data-theme",
        value: l,
        children: u,
        nonce: c,
        scriptProps: d
    }) => {
        let [f, h] = k.useState(() => yf(s, o)), [y, g] = k.useState(() => yf(s)), x = l ? Object.values(l) : r, p = k.useCallback(b => {
            let S = b;
            if (!S) return;
            b === "system" && n && (S = vf());
            let _ = l ? l[S] : S,
                P = e ? Dx(c) : null,
                O = document.documentElement,
                D = B => {
                    B === "class" ? (O.classList.remove(...x), _ && O.classList.add(_)) : B.startsWith("data-") && (_ ? O.setAttribute(B, _) : O.removeAttribute(B))
                };
            if (Array.isArray(a) ? a.forEach(D) : D(a), i) {
                let B = gf.includes(o) ? o : null,
                    V = gf.includes(S) ? S : B;
                O.style.colorScheme = V
            }
            P == null || P()
        }, [c]), m = k.useCallback(b => {
            let S = typeof b == "function" ? b(f) : b;
            h(S);
            try {
                localStorage.setItem(s, S)
            } catch {}
        }, [f]), v = k.useCallback(b => {
            let S = vf(b);
            g(S), f === "system" && n && !t && p("system")
        }, [f, t]);
        k.useEffect(() => {
            let b = window.matchMedia(Sg);
            return b.addListener(v), v(b), () => b.removeListener(v)
        }, [v]), k.useEffect(() => {
            let b = S => {
                if (S.key !== s) return;
                let _ = S.newValue || o;
                m(_)
            };
            return window.addEventListener("storage", b), () => window.removeEventListener("storage", b)
        }, [m]), k.useEffect(() => {
            p(t ?? f)
        }, [t, f]);
        let w = k.useMemo(() => ({
            theme: f,
            setTheme: m,
            forcedTheme: t,
            resolvedTheme: f === "system" ? y : f,
            themes: n ? [...r, "system"] : r,
            systemTheme: n ? y : void 0
        }), [f, m, t, y, n, r]);
        return k.createElement(Pg.Provider, {
            value: w
        }, k.createElement(zx, {
            forcedTheme: t,
            storageKey: s,
            attribute: a,
            enableSystem: n,
            enableColorScheme: i,
            defaultTheme: o,
            value: l,
            themes: r,
            nonce: c,
            scriptProps: d
        }), u)
    },
    zx = k.memo(({
        forcedTheme: t,
        storageKey: e,
        attribute: n,
        enableSystem: i,
        enableColorScheme: s,
        defaultTheme: r,
        value: o,
        themes: a,
        nonce: l,
        scriptProps: u
    }) => {
        let c = JSON.stringify([n, e, r, t, a, o, i, s]).slice(1, -1);
        return k.createElement("script", {
            ...u,
            suppressHydrationWarning: !0,
            nonce: typeof window > "u" ? l : "",
            dangerouslySetInnerHTML: {
                __html: `(${_x.toString()})(${c})`
            }
        })
    }),
    yf = (t, e) => {
        if (Tx) return;
        let n;
        try {
            n = localStorage.getItem(t) || void 0
        } catch {}
        return n || e
    },
    Dx = t => {
        let e = document.createElement("style");
        return t && e.setAttribute("nonce", t), e.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(e), () => {
            window.getComputedStyle(document.body), setTimeout(() => {
                document.head.removeChild(e)
            }, 1)
        }
    },
    vf = t => (t || (t = window.matchMedia(Sg)), t.matches ? "dark" : "light");
/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function go() {
    return go = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }, go.apply(this, arguments)
}
var ln;
(function(t) {
    t.Pop = "POP", t.Push = "PUSH", t.Replace = "REPLACE"
})(ln || (ln = {}));
const wf = "popstate";

function Ox(t) {
    t === void 0 && (t = {});

    function e(i, s) {
        let {
            pathname: r,
            search: o,
            hash: a
        } = i.location;
        return tu("", {
            pathname: r,
            search: o,
            hash: a
        }, s.state && s.state.usr || null, s.state && s.state.key || "default")
    }

    function n(i, s) {
        return typeof s == "string" ? s : _g(s)
    }
    return Lx(e, n, null, t)
}

function $e(t, e) {
    if (t === !1 || t === null || typeof t > "u") throw new Error(e)
}

function Cg(t, e) {
    if (!t) {
        typeof console < "u" && console.warn(e);
        try {
            throw new Error(e)
        } catch {}
    }
}

function Ax() {
    return Math.random().toString(36).substr(2, 8)
}

function xf(t, e) {
    return {
        usr: t.state,
        key: t.key,
        idx: e
    }
}

function tu(t, e, n, i) {
    return n === void 0 && (n = null), go({
        pathname: typeof t == "string" ? t : t.pathname,
        search: "",
        hash: ""
    }, typeof e == "string" ? qo(e) : e, {
        state: n,
        key: e && e.key || i || Ax()
    })
}

function _g(t) {
    let {
        pathname: e = "/",
        search: n = "",
        hash: i = ""
    } = t;
    return n && n !== "?" && (e += n.charAt(0) === "?" ? n : "?" + n), i && i !== "#" && (e += i.charAt(0) === "#" ? i : "#" + i), e
}

function qo(t) {
    let e = {};
    if (t) {
        let n = t.indexOf("#");
        n >= 0 && (e.hash = t.substr(n), t = t.substr(0, n));
        let i = t.indexOf("?");
        i >= 0 && (e.search = t.substr(i), t = t.substr(0, i)), t && (e.pathname = t)
    }
    return e
}

function Lx(t, e, n, i) {
    i === void 0 && (i = {});
    let {
        window: s = document.defaultView,
        v5Compat: r = !1
    } = i, o = s.history, a = ln.Pop, l = null, u = c();
    u == null && (u = 0, o.replaceState(go({}, o.state, {
        idx: u
    }), ""));

    function c() {
        return (o.state || {
            idx: null
        }).idx
    }

    function d() {
        a = ln.Pop;
        let x = c(),
            p = x == null ? null : x - u;
        u = x, l && l({
            action: a,
            location: g.location,
            delta: p
        })
    }

    function f(x, p) {
        a = ln.Push;
        let m = tu(g.location, x, p);
        u = c() + 1;
        let v = xf(m, u),
            w = g.createHref(m);
        try {
            o.pushState(v, "", w)
        } catch (b) {
            if (b instanceof DOMException && b.name === "DataCloneError") throw b;
            s.location.assign(w)
        }
        r && l && l({
            action: a,
            location: g.location,
            delta: 1
        })
    }

    function h(x, p) {
        a = ln.Replace;
        let m = tu(g.location, x, p);
        u = c();
        let v = xf(m, u),
            w = g.createHref(m);
        o.replaceState(v, "", w), r && l && l({
            action: a,
            location: g.location,
            delta: 0
        })
    }

    function y(x) {
        let p = s.location.origin !== "null" ? s.location.origin : s.location.href,
            m = typeof x == "string" ? x : _g(x);
        return m = m.replace(/ $/, "%20"), $e(p, "No window.location.(origin|href) available to create URL for href: " + m), new URL(m, p)
    }
    let g = {
        get action() {
            return a
        },
        get location() {
            return t(s, o)
        },
        listen(x) {
            if (l) throw new Error("A history only accepts one active listener");
            return s.addEventListener(wf, d), l = x, () => {
                s.removeEventListener(wf, d), l = null
            }
        },
        createHref(x) {
            return e(s, x)
        },
        createURL: y,
        encodeLocation(x) {
            let p = y(x);
            return {
                pathname: p.pathname,
                search: p.search,
                hash: p.hash
            }
        },
        push: f,
        replace: h,
        go(x) {
            return o.go(x)
        }
    };
    return g
}
var bf;
(function(t) {
    t.data = "data", t.deferred = "deferred", t.redirect = "redirect", t.error = "error"
})(bf || (bf = {}));

function Ix(t, e, n) {
    return n === void 0 && (n = "/"), Fx(t, e, n, !1)
}

function Fx(t, e, n, i) {
    let s = typeof e == "string" ? qo(e) : e,
        r = Mg(s.pathname || "/", n);
    if (r == null) return null;
    let o = Tg(t);
    Nx(o);
    let a = null;
    for (let l = 0; a == null && l < o.length; ++l) {
        let u = Qx(r);
        a = qx(o[l], u, i)
    }
    return a
}

function Tg(t, e, n, i) {
    e === void 0 && (e = []), n === void 0 && (n = []), i === void 0 && (i = "");
    let s = (r, o, a) => {
        let l = {
            relativePath: a === void 0 ? r.path || "" : a,
            caseSensitive: r.caseSensitive === !0,
            childrenIndex: o,
            route: r
        };
        l.relativePath.startsWith("/") && ($e(l.relativePath.startsWith(i), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + i + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), l.relativePath = l.relativePath.slice(i.length));
        let u = Mi([i, l.relativePath]),
            c = n.concat(l);
        r.children && r.children.length > 0 && ($e(r.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')), Tg(r.children, e, c, u)), !(r.path == null && !r.index) && e.push({
            path: u,
            score: Hx(u, r.index),
            routesMeta: c
        })
    };
    return t.forEach((r, o) => {
        var a;
        if (r.path === "" || !((a = r.path) != null && a.includes("?"))) s(r, o);
        else
            for (let l of Eg(r.path)) s(r, o, l)
    }), e
}

function Eg(t) {
    let e = t.split("/");
    if (e.length === 0) return [];
    let [n, ...i] = e, s = n.endsWith("?"), r = n.replace(/\?$/, "");
    if (i.length === 0) return s ? [r, ""] : [r];
    let o = Eg(i.join("/")),
        a = [];
    return a.push(...o.map(l => l === "" ? r : [r, l].join("/"))), s && a.push(...o), a.map(l => t.startsWith("/") && l === "" ? "/" : l)
}

function Nx(t) {
    t.sort((e, n) => e.score !== n.score ? n.score - e.score : Gx(e.routesMeta.map(i => i.childrenIndex), n.routesMeta.map(i => i.childrenIndex)))
}
const Vx = /^:[\w-]+$/,
    jx = 3,
    Bx = 2,
    Ux = 1,
    $x = 10,
    Wx = -2,
    kf = t => t === "*";

function Hx(t, e) {
    let n = t.split("/"),
        i = n.length;
    return n.some(kf) && (i += Wx), e && (i += Bx), n.filter(s => !kf(s)).reduce((s, r) => s + (Vx.test(r) ? jx : r === "" ? Ux : $x), i)
}

function Gx(t, e) {
    return t.length === e.length && t.slice(0, -1).every((i, s) => i === e[s]) ? t[t.length - 1] - e[e.length - 1] : 0
}

function qx(t, e, n) {
    let {
        routesMeta: i
    } = t, s = {}, r = "/", o = [];
    for (let a = 0; a < i.length; ++a) {
        let l = i[a],
            u = a === i.length - 1,
            c = r === "/" ? e : e.slice(r.length) || "/",
            d = Sf({
                path: l.relativePath,
                caseSensitive: l.caseSensitive,
                end: u
            }, c),
            f = l.route;
        if (!d && u && n && !i[i.length - 1].route.index && (d = Sf({
                path: l.relativePath,
                caseSensitive: l.caseSensitive,
                end: !1
            }, c)), !d) return null;
        Object.assign(s, d.params), o.push({
            params: s,
            pathname: Mi([r, d.pathname]),
            pathnameBase: Xx(Mi([r, d.pathnameBase])),
            route: f
        }), d.pathnameBase !== "/" && (r = Mi([r, d.pathnameBase]))
    }
    return o
}

function Sf(t, e) {
    typeof t == "string" && (t = {
        path: t,
        caseSensitive: !1,
        end: !0
    });
    let [n, i] = Kx(t.path, t.caseSensitive, t.end), s = e.match(n);
    if (!s) return null;
    let r = s[0],
        o = r.replace(/(.)\/+$/, "$1"),
        a = s.slice(1);
    return {
        params: i.reduce((u, c, d) => {
            let {
                paramName: f,
                isOptional: h
            } = c;
            if (f === "*") {
                let g = a[d] || "";
                o = r.slice(0, r.length - g.length).replace(/(.)\/+$/, "$1")
            }
            const y = a[d];
            return h && !y ? u[f] = void 0 : u[f] = (y || "").replace(/%2F/g, "/"), u
        }, {}),
        pathname: r,
        pathnameBase: o,
        pattern: t
    }
}

function Kx(t, e, n) {
    e === void 0 && (e = !1), n === void 0 && (n = !0), Cg(t === "*" || !t.endsWith("*") || t.endsWith("/*"), 'Route path "' + t + '" will be treated as if it were ' + ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + t.replace(/\*$/, "/*") + '".'));
    let i = [],
        s = "^" + t.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (o, a, l) => (i.push({
            paramName: a,
            isOptional: l != null
        }), l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return t.endsWith("*") ? (i.push({
        paramName: "*"
    }), s += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? s += "\\/*$" : t !== "" && t !== "/" && (s += "(?:(?=\\/|$))"), [new RegExp(s, e ? void 0 : "i"), i]
}

function Qx(t) {
    try {
        return t.split("/").map(e => decodeURIComponent(e).replace(/\//g, "%2F")).join("/")
    } catch (e) {
        return Cg(!1, 'The URL path "' + t + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + e + ").")), t
    }
}

function Mg(t, e) {
    if (e === "/") return t;
    if (!t.toLowerCase().startsWith(e.toLowerCase())) return null;
    let n = e.endsWith("/") ? e.length - 1 : e.length,
        i = t.charAt(n);
    return i && i !== "/" ? null : t.slice(n) || "/"
}
const Mi = t => t.join("/").replace(/\/\/+/g, "/"),
    Xx = t => t.replace(/\/+$/, "").replace(/^\/*/, "/");

function Yx(t) {
    return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.internal == "boolean" && "data" in t
}
const Rg = ["post", "put", "patch", "delete"];
new Set(Rg);
const Zx = ["get", ...Rg];
new Set(Zx);
/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function yo() {
    return yo = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }, yo.apply(this, arguments)
}
const Jx = k.createContext(null),
    e1 = k.createContext(null),
    zg = k.createContext(null),
    Ko = k.createContext(null),
    Qo = k.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    }),
    Dg = k.createContext(null);

function bc() {
    return k.useContext(Ko) != null
}

function t1() {
    return bc() || $e(!1), k.useContext(Ko).location
}

function n1(t, e) {
    return i1(t, e)
}

function i1(t, e, n, i) {
    bc() || $e(!1);
    let {
        navigator: s
    } = k.useContext(zg), {
        matches: r
    } = k.useContext(Qo), o = r[r.length - 1], a = o ? o.params : {};
    o && o.pathname;
    let l = o ? o.pathnameBase : "/";
    o && o.route;
    let u = t1(),
        c;
    if (e) {
        var d;
        let x = typeof e == "string" ? qo(e) : e;
        l === "/" || (d = x.pathname) != null && d.startsWith(l) || $e(!1), c = x
    } else c = u;
    let f = c.pathname || "/",
        h = f;
    if (l !== "/") {
        let x = l.replace(/^\//, "").split("/");
        h = "/" + f.replace(/^\//, "").split("/").slice(x.length).join("/")
    }
    let y = Ix(t, {
            pathname: h
        }),
        g = l1(y && y.map(x => Object.assign({}, x, {
            params: Object.assign({}, a, x.params),
            pathname: Mi([l, s.encodeLocation ? s.encodeLocation(x.pathname).pathname : x.pathname]),
            pathnameBase: x.pathnameBase === "/" ? l : Mi([l, s.encodeLocation ? s.encodeLocation(x.pathnameBase).pathname : x.pathnameBase])
        })), r, n, i);
    return e && g ? k.createElement(Ko.Provider, {
        value: {
            location: yo({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, c),
            navigationType: ln.Pop
        }
    }, g) : g
}

function s1() {
    let t = f1(),
        e = Yx(t) ? t.status + " " + t.statusText : t instanceof Error ? t.message : JSON.stringify(t),
        n = t instanceof Error ? t.stack : null,
        s = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        };
    return k.createElement(k.Fragment, null, k.createElement("h2", null, "Unexpected Application Error!"), k.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, e), n ? k.createElement("pre", {
        style: s
    }, n) : null, null)
}
const r1 = k.createElement(s1, null);
class o1 extends k.Component {
    constructor(e) {
        super(e), this.state = {
            location: e.location,
            revalidation: e.revalidation,
            error: e.error
        }
    }
    static getDerivedStateFromError(e) {
        return {
            error: e
        }
    }
    static getDerivedStateFromProps(e, n) {
        return n.location !== e.location || n.revalidation !== "idle" && e.revalidation === "idle" ? {
            error: e.error,
            location: e.location,
            revalidation: e.revalidation
        } : {
            error: e.error !== void 0 ? e.error : n.error,
            location: n.location,
            revalidation: e.revalidation || n.revalidation
        }
    }
    componentDidCatch(e, n) {
        console.error("React Router caught the following error during render", e, n)
    }
    render() {
        return this.state.error !== void 0 ? k.createElement(Qo.Provider, {
            value: this.props.routeContext
        }, k.createElement(Dg.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}

function a1(t) {
    let {
        routeContext: e,
        match: n,
        children: i
    } = t, s = k.useContext(Jx);
    return s && s.static && s.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (s.staticContext._deepestRenderedBoundaryId = n.route.id), k.createElement(Qo.Provider, {
        value: e
    }, i)
}

function l1(t, e, n, i) {
    var s;
    if (e === void 0 && (e = []), n === void 0 && (n = null), i === void 0 && (i = null), t == null) {
        var r;
        if (!n) return null;
        if (n.errors) t = n.matches;
        else if ((r = i) != null && r.v7_partialHydration && e.length === 0 && !n.initialized && n.matches.length > 0) t = n.matches;
        else return null
    }
    let o = t,
        a = (s = n) == null ? void 0 : s.errors;
    if (a != null) {
        let c = o.findIndex(d => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0);
        c >= 0 || $e(!1), o = o.slice(0, Math.min(o.length, c + 1))
    }
    let l = !1,
        u = -1;
    if (n && i && i.v7_partialHydration)
        for (let c = 0; c < o.length; c++) {
            let d = o[c];
            if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c), d.route.id) {
                let {
                    loaderData: f,
                    errors: h
                } = n, y = d.route.loader && f[d.route.id] === void 0 && (!h || h[d.route.id] === void 0);
                if (d.route.lazy || y) {
                    l = !0, u >= 0 ? o = o.slice(0, u + 1) : o = [o[0]];
                    break
                }
            }
        }
    return o.reduceRight((c, d, f) => {
        let h, y = !1,
            g = null,
            x = null;
        n && (h = a && d.route.id ? a[d.route.id] : void 0, g = d.route.errorElement || r1, l && (u < 0 && f === 0 ? (y = !0, x = null) : u === f && (y = !0, x = d.route.hydrateFallbackElement || null)));
        let p = e.concat(o.slice(0, f + 1)),
            m = () => {
                let v;
                return h ? v = g : y ? v = x : d.route.Component ? v = k.createElement(d.route.Component, null) : d.route.element ? v = d.route.element : v = c, k.createElement(a1, {
                    match: d,
                    routeContext: {
                        outlet: c,
                        matches: p,
                        isDataRoute: n != null
                    },
                    children: v
                })
            };
        return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0) ? k.createElement(o1, {
            location: n.location,
            revalidation: n.revalidation,
            component: g,
            error: h,
            children: m(),
            routeContext: {
                outlet: null,
                matches: p,
                isDataRoute: !0
            }
        }) : m()
    }, null)
}
var nu = function(t) {
    return t.UseBlocker = "useBlocker", t.UseLoaderData = "useLoaderData", t.UseActionData = "useActionData", t.UseRouteError = "useRouteError", t.UseNavigation = "useNavigation", t.UseRouteLoaderData = "useRouteLoaderData", t.UseMatches = "useMatches", t.UseRevalidator = "useRevalidator", t.UseNavigateStable = "useNavigate", t.UseRouteId = "useRouteId", t
}(nu || {});

function u1(t) {
    let e = k.useContext(e1);
    return e || $e(!1), e
}

function c1(t) {
    let e = k.useContext(Qo);
    return e || $e(!1), e
}

function d1(t) {
    let e = c1(),
        n = e.matches[e.matches.length - 1];
    return n.route.id || $e(!1), n.route.id
}

function f1() {
    var t;
    let e = k.useContext(Dg),
        n = u1(nu.UseRouteError),
        i = d1(nu.UseRouteError);
    return e !== void 0 ? e : (t = n.errors) == null ? void 0 : t[i]
}

function Og(t) {
    $e(!1)
}

function h1(t) {
    let {
        basename: e = "/",
        children: n = null,
        location: i,
        navigationType: s = ln.Pop,
        navigator: r,
        static: o = !1,
        future: a
    } = t;
    bc() && $e(!1);
    let l = e.replace(/^\/*/, "/"),
        u = k.useMemo(() => ({
            basename: l,
            navigator: r,
            static: o,
            future: yo({
                v7_relativeSplatPath: !1
            }, a)
        }), [l, a, r, o]);
    typeof i == "string" && (i = qo(i));
    let {
        pathname: c = "/",
        search: d = "",
        hash: f = "",
        state: h = null,
        key: y = "default"
    } = i, g = k.useMemo(() => {
        let x = Mg(c, l);
        return x == null ? null : {
            location: {
                pathname: x,
                search: d,
                hash: f,
                state: h,
                key: y
            },
            navigationType: s
        }
    }, [l, c, d, f, h, y, s]);
    return g == null ? null : k.createElement(zg.Provider, {
        value: u
    }, k.createElement(Ko.Provider, {
        children: n,
        value: g
    }))
}

function p1(t) {
    let {
        children: e,
        location: n
    } = t;
    return n1(iu(e), n)
}
new Promise(() => {});

function iu(t, e) {
    e === void 0 && (e = []);
    let n = [];
    return k.Children.forEach(t, (i, s) => {
        if (!k.isValidElement(i)) return;
        let r = [...e, s];
        if (i.type === k.Fragment) {
            n.push.apply(n, iu(i.props.children, r));
            return
        }
        i.type !== Og && $e(!1), !i.props.index || !i.props.children || $e(!1);
        let o = {
            id: i.props.id || r.join("-"),
            caseSensitive: i.props.caseSensitive,
            element: i.props.element,
            Component: i.props.Component,
            index: i.props.index,
            path: i.props.path,
            loader: i.props.loader,
            action: i.props.action,
            errorElement: i.props.errorElement,
            ErrorBoundary: i.props.ErrorBoundary,
            hasErrorBoundary: i.props.ErrorBoundary != null || i.props.errorElement != null,
            shouldRevalidate: i.props.shouldRevalidate,
            handle: i.props.handle,
            lazy: i.props.lazy
        };
        i.props.children && (o.children = iu(i.props.children, r)), n.push(o)
    }), n
}
/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const m1 = "6";
try {
    window.__reactRouterVersion = m1
} catch {}
const g1 = "startTransition",
    Pf = p0[g1];

function y1(t) {
    let {
        basename: e,
        children: n,
        future: i,
        window: s
    } = t, r = k.useRef();
    r.current == null && (r.current = Ox({
        window: s,
        v5Compat: !0
    }));
    let o = r.current,
        [a, l] = k.useState({
            action: o.action,
            location: o.location
        }),
        {
            v7_startTransition: u
        } = i || {},
        c = k.useCallback(d => {
            u && Pf ? Pf(() => l(d)) : l(d)
        }, [l, u]);
    return k.useLayoutEffect(() => o.listen(c), [o, c]), k.createElement(h1, {
        basename: e,
        children: n,
        location: a.location,
        navigationType: a.action,
        navigator: o,
        future: i
    })
}
var Cf;
(function(t) {
    t.UseScrollRestoration = "useScrollRestoration", t.UseSubmit = "useSubmit", t.UseSubmitFetcher = "useSubmitFetcher", t.UseFetcher = "useFetcher", t.useViewTransitionState = "useViewTransitionState"
})(Cf || (Cf = {}));
var _f;
(function(t) {
    t.UseFetcher = "useFetcher", t.UseFetchers = "useFetchers", t.UseScrollRestoration = "useScrollRestoration"
})(_f || (_f = {}));
const Ss = "generated",
    v1 = "pointerdown",
    w1 = "pointerup",
    su = "pointerleave",
    x1 = "pointerout",
    Yn = "pointermove",
    b1 = "touchstart",
    Tf = "touchend",
    k1 = "touchmove",
    S1 = "touchcancel",
    P1 = "resize",
    C1 = "visibilitychange",
    ct = "tsParticles - Error";
class We {
    constructor(e, n, i) {
        if (this._updateFromAngle = (s, r) => {
                this.x = Math.cos(s) * r, this.y = Math.sin(s) * r
            }, !Me(e) && e) {
            this.x = e.x, this.y = e.y;
            const s = e;
            this.z = s.z ? s.z : 0
        } else if (e !== void 0 && n !== void 0) this.x = e, this.y = n, this.z = i ?? 0;
        else throw new Error(`${ct} Vector3d not initialized correctly`)
    }
    static get origin() {
        return We.create(0, 0, 0)
    }
    get angle() {
        return Math.atan2(this.y, this.x)
    }
    set angle(e) {
        this._updateFromAngle(e, this.length)
    }
    get length() {
        return Math.sqrt(this.getLengthSq())
    }
    set length(e) {
        this._updateFromAngle(this.angle, e)
    }
    static clone(e) {
        return We.create(e.x, e.y, e.z)
    }
    static create(e, n, i) {
        return new We(e, n, i)
    }
    add(e) {
        return We.create(this.x + e.x, this.y + e.y, this.z + e.z)
    }
    addTo(e) {
        this.x += e.x, this.y += e.y, this.z += e.z
    }
    copy() {
        return We.clone(this)
    }
    distanceTo(e) {
        return this.sub(e).length
    }
    distanceToSq(e) {
        return this.sub(e).getLengthSq()
    }
    div(e) {
        return We.create(this.x / e, this.y / e, this.z / e)
    }
    divTo(e) {
        this.x /= e, this.y /= e, this.z /= e
    }
    getLengthSq() {
        return this.x ** 2 + this.y ** 2
    }
    mult(e) {
        return We.create(this.x * e, this.y * e, this.z * e)
    }
    multTo(e) {
        this.x *= e, this.y *= e, this.z *= e
    }
    normalize() {
        const e = this.length;
        e != 0 && this.multTo(1 / e)
    }
    rotate(e) {
        return We.create(this.x * Math.cos(e) - this.y * Math.sin(e), this.x * Math.sin(e) + this.y * Math.cos(e), 0)
    }
    setTo(e) {
        this.x = e.x, this.y = e.y;
        const n = e;
        this.z = n.z ? n.z : 0
    }
    sub(e) {
        return We.create(this.x - e.x, this.y - e.y, this.z - e.z)
    }
    subFrom(e) {
        this.x -= e.x, this.y -= e.y, this.z -= e.z
    }
}
class G extends We {
    constructor(e, n) {
        super(e, n, 0)
    }
    static get origin() {
        return G.create(0, 0)
    }
    static clone(e) {
        return G.create(e.x, e.y)
    }
    static create(e, n) {
        return new G(e, n)
    }
}
let _1 = Math.random;
const ru = new Map;

function za(t, e) {
    ru.get(t) || ru.set(t, e)
}

function Ag(t) {
    return ru.get(t) || (e => e)
}

function F() {
    return xt(_1(), 0, 1 - 1e-16)
}

function xt(t, e, n) {
    return Math.min(Math.max(t, e), n)
}

function Da(t, e, n, i) {
    return Math.floor((t * n + e * i) / (n + i))
}

function ye(t) {
    const e = un(t);
    let n = kc(t);
    return e === n && (n = 0), F() * (e - n) + n
}

function E(t) {
    return Me(t) ? t : ye(t)
}

function kc(t) {
    return Me(t) ? t : t.min
}

function un(t) {
    return Me(t) ? t : t.max
}

function z(t, e) {
    if (t === e || e === void 0 && Me(t)) return t;
    const n = kc(t),
        i = un(t);
    return e !== void 0 ? {
        min: Math.min(n, e),
        max: Math.max(i, e)
    } : z(n, i)
}

function Kt(t) {
    const e = t.random,
        {
            enable: n,
            minimumValue: i
        } = vn(e) ? {
            enable: e,
            minimumValue: 0
        } : e;
    return E(n ? z(t.value, i) : t.value)
}

function Ee(t, e) {
    const n = t.x - e.x,
        i = t.y - e.y;
    return {
        dx: n,
        dy: i,
        distance: Math.sqrt(n ** 2 + i ** 2)
    }
}

function Le(t, e) {
    return Ee(t, e).distance
}

function T1(t, e, n) {
    if (Me(t)) return t * Math.PI / 180;
    switch (t) {
        case "top":
            return -Math.PI / 2;
        case "top-right":
            return -Math.PI / 4;
        case "right":
            return 0;
        case "bottom-right":
            return Math.PI / 4;
        case "bottom":
            return Math.PI / 2;
        case "bottom-left":
            return 3 * Math.PI / 4;
        case "left":
            return Math.PI;
        case "top-left":
            return -3 * Math.PI / 4;
        case "inside":
            return Math.atan2(n.y - e.y, n.x - e.x);
        case "outside":
            return Math.atan2(e.y - n.y, e.x - n.x);
        default:
            return F() * Math.PI * 2
    }
}

function E1(t) {
    const e = G.origin;
    return e.length = 1, e.angle = t, e
}

function Ef(t, e, n, i) {
    return G.create(t.x * (n - i) / (n + i) + e.x * 2 * i / (n + i), t.y)
}

function Lg(t) {
    var e, n;
    return {
        x: (((e = t.position) == null ? void 0 : e.x) ?? F() * 100) * t.size.width / 100,
        y: (((n = t.position) == null ? void 0 : n.y) ?? F() * 100) * t.size.height / 100
    }
}

function Ig(t) {
    var n, i;
    const e = {
        x: ((n = t.position) == null ? void 0 : n.x) !== void 0 ? E(t.position.x) : void 0,
        y: ((i = t.position) == null ? void 0 : i.y) !== void 0 ? E(t.position.y) : void 0
    };
    return Lg({
        size: t.size,
        position: e
    })
}

function M1(t) {
    var e, n;
    return {
        x: ((e = t.position) == null ? void 0 : e.x) ?? F() * t.size.width,
        y: ((n = t.position) == null ? void 0 : n.y) ?? F() * t.size.height
    }
}

function Fg(t) {
    return t ? t.endsWith("%") ? parseFloat(t) / 100 : parseFloat(t) : 1
}
const R1 = {
    debug: console.debug,
    error: console.error,
    info: console.info,
    log: console.log,
    verbose: console.log,
    warning: console.warn
};

function Zn() {
    return R1
}

function Mf(t) {
    const e = {
            bounced: !1
        },
        {
            pSide: n,
            pOtherSide: i,
            rectSide: s,
            rectOtherSide: r,
            velocity: o,
            factor: a
        } = t;
    return i.min < r.min || i.min > r.max || i.max < r.min || i.max > r.max || (n.max >= s.min && n.max <= (s.max + s.min) / 2 && o > 0 || n.min <= s.max && n.min > (s.max + s.min) / 2 && o < 0) && (e.velocity = o * -a, e.bounced = !0), e
}

function z1(t, e) {
    const n = Z(e, i => t.matches(i));
    return pe(n) ? n.some(i => i) : n
}

function Ni() {
    return typeof window > "u" || !window || typeof window.document > "u" || !window.document
}

function D1() {
    return !Ni() && typeof matchMedia < "u"
}

function Ng(t) {
    if (D1()) return matchMedia(t)
}

function O1(t) {
    if (!(Ni() || typeof MutationObserver > "u")) return new MutationObserver(t)
}

function Y(t, e) {
    return t === e || pe(e) && e.indexOf(t) > -1
}
async function A1(t, e) {
    try {
        await document.fonts.load(`${e??"400"} 36px '${t??"Verdana"}'`)
    } catch {}
}

function Vg(t) {
    return Math.floor(F() * t.length)
}

function er(t, e, n = !0) {
    return t[e !== void 0 && n ? e % t.length : Vg(t)]
}

function tr(t, e, n, i, s) {
    return L1(nr(t, i ?? 0), e, n, s)
}

function L1(t, e, n, i) {
    let s = !0;
    return (!i || i === "bottom") && (s = t.top < e.height + n.x), s && (!i || i === "left") && (s = t.right > n.x), s && (!i || i === "right") && (s = t.left < e.width + n.y), s && (!i || i === "top") && (s = t.bottom > n.y), s
}

function nr(t, e) {
    return {
        bottom: t.y + e,
        left: t.x - e,
        right: t.x + e,
        top: t.y - e
    }
}

function ce(t, ...e) {
    for (const n of e) {
        if (n == null) continue;
        if (!gi(n)) {
            t = n;
            continue
        }
        const i = Array.isArray(n);
        i && (gi(t) || !t || !Array.isArray(t)) ? t = [] : !i && (gi(t) || !t || Array.isArray(t)) && (t = {});
        for (const s in n) {
            if (s === "__proto__") continue;
            const r = n,
                o = r[s],
                a = t;
            a[s] = gi(o) && Array.isArray(o) ? o.map(l => ce(a[s], l)) : ce(a[s], o)
        }
    }
    return t
}

function Sc(t, e) {
    return !!Ug(e, n => n.enable && Y(t, n.mode))
}

function Pc(t, e, n) {
    Z(e, i => {
        const s = i.mode;
        i.enable && Y(t, s) && I1(i, n)
    })
}

function I1(t, e) {
    const n = t.selectors;
    Z(n, i => {
        e(i, t)
    })
}

function jg(t, e) {
    if (!(!e || !t)) return Ug(t, n => z1(e, n.selectors))
}

function ou(t) {
    return {
        position: t.getPosition(),
        radius: t.getRadius(),
        mass: t.getMass(),
        velocity: t.velocity,
        factor: G.create(Kt(t.options.bounce.horizontal), Kt(t.options.bounce.vertical))
    }
}

function Bg(t, e) {
    const {
        x: n,
        y: i
    } = t.velocity.sub(e.velocity), [s, r] = [t.position, e.position], {
        dx: o,
        dy: a
    } = Ee(r, s);
    if (n * o + i * a < 0) return;
    const l = -Math.atan2(a, o),
        u = t.mass,
        c = e.mass,
        d = t.velocity.rotate(l),
        f = e.velocity.rotate(l),
        h = Ef(d, f, u, c),
        y = Ef(f, d, u, c),
        g = h.rotate(-l),
        x = y.rotate(-l);
    t.velocity.x = g.x * t.factor.x, t.velocity.y = g.y * t.factor.y, e.velocity.x = x.x * e.factor.x, e.velocity.y = x.y * e.factor.y
}

function F1(t, e) {
    const n = t.getPosition(),
        i = t.getRadius(),
        s = nr(n, i),
        r = Mf({
            pSide: {
                min: s.left,
                max: s.right
            },
            pOtherSide: {
                min: s.top,
                max: s.bottom
            },
            rectSide: {
                min: e.left,
                max: e.right
            },
            rectOtherSide: {
                min: e.top,
                max: e.bottom
            },
            velocity: t.velocity.x,
            factor: Kt(t.options.bounce.horizontal)
        });
    r.bounced && (r.velocity !== void 0 && (t.velocity.x = r.velocity), r.position !== void 0 && (t.position.x = r.position));
    const o = Mf({
        pSide: {
            min: s.top,
            max: s.bottom
        },
        pOtherSide: {
            min: s.left,
            max: s.right
        },
        rectSide: {
            min: e.top,
            max: e.bottom
        },
        rectOtherSide: {
            min: e.left,
            max: e.right
        },
        velocity: t.velocity.y,
        factor: Kt(t.options.bounce.vertical)
    });
    o.bounced && (o.velocity !== void 0 && (t.velocity.y = o.velocity), o.position !== void 0 && (t.position.y = o.position))
}

function Z(t, e) {
    return pe(t) ? t.map((n, i) => e(n, i)) : e(t, 0)
}

function Ke(t, e, n) {
    return pe(t) ? er(t, e, n) : t
}

function Ug(t, e) {
    return pe(t) ? t.find((n, i) => e(n, i)) : e(t, 0) ? t : void 0
}

function $g(t, e) {
    const n = t.value,
        i = t.animation,
        s = {
            delayTime: E(i.delay) * 1e3,
            enable: i.enable,
            value: E(t.value) * e,
            max: un(n) * e,
            min: kc(n) * e,
            loops: 0,
            maxLoops: E(i.count),
            time: 0
        };
    if (i.enable) {
        switch (s.decay = 1 - E(i.decay), i.mode) {
            case "increase":
                s.status = "increasing";
                break;
            case "decrease":
                s.status = "decreasing";
                break;
            case "random":
                s.status = F() >= .5 ? "increasing" : "decreasing";
                break
        }
        const r = i.mode === "auto";
        switch (i.startValue) {
            case "min":
                s.value = s.min, r && (s.status = "increasing");
                break;
            case "max":
                s.value = s.max, r && (s.status = "decreasing");
                break;
            case "random":
            default:
                s.value = ye(s), r && (s.status = F() >= .5 ? "increasing" : "decreasing");
                break
        }
    }
    return s.initialValue = s.value, s
}

function Wg(t, e) {
    if (!(t.mode === "percent")) {
        const {
            mode: s,
            ...r
        } = t;
        return r
    }
    return "x" in t ? {
        x: t.x / 100 * e.width,
        y: t.y / 100 * e.height
    } : {
        width: t.width / 100 * e.width,
        height: t.height / 100 * e.height
    }
}

function Hg(t, e) {
    return Wg(t, e)
}

function N1(t, e) {
    return Wg(t, e)
}

function vn(t) {
    return typeof t == "boolean"
}

function vt(t) {
    return typeof t == "string"
}

function Me(t) {
    return typeof t == "number"
}

function Gg(t) {
    return typeof t == "function"
}

function gi(t) {
    return typeof t == "object" && t !== null
}

function pe(t) {
    return Array.isArray(t)
}
const vo = "random",
    jr = "mid",
    Xo = new Map;

function Rf(t) {
    Xo.set(t.key, t)
}

function Oa(t, e, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
}

function V1(t) {
    for (const [, r] of Xo)
        if (t.startsWith(r.stringPrefix)) return r.parseString(t);
    const e = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,
        n = t.replace(e, (r, o, a, l, u) => o + o + a + a + l + l + (u !== void 0 ? u + u : "")),
        i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i,
        s = i.exec(n);
    return s ? {
        a: s[4] !== void 0 ? parseInt(s[4], 16) / 255 : 1,
        b: parseInt(s[3], 16),
        g: parseInt(s[2], 16),
        r: parseInt(s[1], 16)
    } : void 0
}

function at(t, e, n = !0) {
    if (!t) return;
    const i = vt(t) ? {
        value: t
    } : t;
    if (vt(i.value)) return qg(i.value, e, n);
    if (pe(i.value)) return at({
        value: er(i.value, e, n)
    });
    for (const [, s] of Xo) {
        const r = s.handleRangeColor(i);
        if (r) return r
    }
}

function qg(t, e, n = !0) {
    if (!t) return;
    const i = vt(t) ? {
        value: t
    } : t;
    if (vt(i.value)) return i.value === vo ? Qg() : j1(i.value);
    if (pe(i.value)) return qg({
        value: er(i.value, e, n)
    });
    for (const [, s] of Xo) {
        const r = s.handleColor(i);
        if (r) return r
    }
}

function bn(t, e, n = !0) {
    const i = at(t, e, n);
    return i ? Kg(i) : void 0
}

function Kg(t) {
    const e = t.r / 255,
        n = t.g / 255,
        i = t.b / 255,
        s = Math.max(e, n, i),
        r = Math.min(e, n, i),
        o = {
            h: 0,
            l: (s + r) / 2,
            s: 0
        };
    return s !== r && (o.s = o.l < .5 ? (s - r) / (s + r) : (s - r) / (2 - s - r), o.h = e === s ? (n - i) / (s - r) : o.h = n === s ? 2 + (i - e) / (s - r) : 4 + (e - n) / (s - r)), o.l *= 100, o.s *= 100, o.h *= 60, o.h < 0 && (o.h += 360), o.h >= 360 && (o.h -= 360), o
}

function j1(t) {
    return V1(t)
}

function Vi(t) {
    const e = {
            b: 0,
            g: 0,
            r: 0
        },
        n = {
            h: t.h / 360,
            l: t.l / 100,
            s: t.s / 100
        };
    if (!n.s) e.r = e.g = e.b = n.l;
    else {
        const i = n.l < .5 ? n.l * (1 + n.s) : n.l + n.s - n.l * n.s,
            s = 2 * n.l - i;
        e.r = Oa(s, i, n.h + 1 / 3), e.g = Oa(s, i, n.h), e.b = Oa(s, i, n.h - 1 / 3)
    }
    return e.r = Math.floor(e.r * 255), e.g = Math.floor(e.g * 255), e.b = Math.floor(e.b * 255), e
}

function B1(t) {
    const e = Vi(t);
    return {
        a: t.a,
        b: e.b,
        g: e.g,
        r: e.r
    }
}

function Qg(t) {
    return {
        b: Math.floor(ye(z(0, 256))),
        g: Math.floor(ye(z(0, 256))),
        r: Math.floor(ye(z(0, 256)))
    }
}

function Mt(t, e) {
    return `rgba(${t.r}, ${t.g}, ${t.b}, ${e??1})`
}

function ji(t, e) {
    return `hsla(${t.h}, ${t.s}%, ${t.l}%, ${e??1})`
}

function Cc(t, e, n, i) {
    let s = t,
        r = e;
    return s.r === void 0 && (s = Vi(t)), r.r === void 0 && (r = Vi(e)), {
        b: Da(s.b, r.b, n, i),
        g: Da(s.g, r.g, n, i),
        r: Da(s.r, r.r, n, i)
    }
}

function au(t, e, n) {
    if (n === vo) return Qg();
    if (n === jr) {
        const i = t.getFillColor() ?? t.getStrokeColor(),
            s = (e == null ? void 0 : e.getFillColor()) ?? (e == null ? void 0 : e.getStrokeColor());
        if (i && s && e) return Cc(i, s, t.getRadius(), e.getRadius());
        {
            const r = i ?? s;
            if (r) return Vi(r)
        }
    } else return n
}

function Xg(t, e, n) {
    const i = vt(t) ? t : t.value;
    return i === vo ? n ? at({
        value: i
    }) : e ? vo : jr : i === jr ? jr : at({
        value: i
    })
}

function zf(t) {
    return t !== void 0 ? {
        h: t.h.value,
        s: t.s.value,
        l: t.l.value
    } : void 0
}

function Yg(t, e, n) {
    const i = {
        h: {
            enable: !1,
            value: t.h
        },
        s: {
            enable: !1,
            value: t.s
        },
        l: {
            enable: !1,
            value: t.l
        }
    };
    return e && (Aa(i.h, e.h, n), Aa(i.s, e.s, n), Aa(i.l, e.l, n)), i
}

function Aa(t, e, n) {
    t.enable = e.enable, t.enable ? (t.velocity = E(e.speed) / 100 * n, t.decay = 1 - E(e.decay), t.status = "increasing", t.loops = 0, t.maxLoops = E(e.count), t.time = 0, t.delayTime = E(e.delay) * 1e3, e.sync || (t.velocity *= F(), t.value *= F()), t.initialValue = t.value) : t.velocity = 0
}

function Ps(t, e, n) {
    t.beginPath(), t.moveTo(e.x, e.y), t.lineTo(n.x, n.y), t.closePath()
}

function U1(t, e, n, i) {
    t.beginPath(), t.moveTo(e.x, e.y), t.lineTo(n.x, n.y), t.lineTo(i.x, i.y), t.closePath()
}

function $1(t, e, n) {
    t.fillStyle = n ?? "rgba(0,0,0,0)", t.fillRect(0, 0, e.width, e.height)
}

function W1(t, e, n, i) {
    n && (t.globalAlpha = i, t.drawImage(n, 0, 0, e.width, e.height), t.globalAlpha = 1)
}

function La(t, e) {
    t.clearRect(0, 0, e.width, e.height)
}

function H1(t) {
    const {
        container: e,
        context: n,
        particle: i,
        delta: s,
        colorStyles: r,
        backgroundMask: o,
        composite: a,
        radius: l,
        opacity: u,
        shadow: c,
        transform: d
    } = t, f = i.getPosition(), h = i.rotation + (i.pathRotation ? i.velocity.angle : 0), y = {
        sin: Math.sin(h),
        cos: Math.cos(h)
    }, g = {
        a: y.cos * (d.a ?? 1),
        b: y.sin * (d.b ?? 1),
        c: -y.sin * (d.c ?? 1),
        d: y.cos * (d.d ?? 1)
    };
    n.setTransform(g.a, g.b, g.c, g.d, f.x, f.y), n.beginPath(), o && (n.globalCompositeOperation = a);
    const x = i.shadowColor;
    c.enable && x && (n.shadowBlur = c.blur, n.shadowColor = Mt(x), n.shadowOffsetX = c.offset.x, n.shadowOffsetY = c.offset.y), r.fill && (n.fillStyle = r.fill);
    const p = i.strokeWidth ?? 0;
    n.lineWidth = p, r.stroke && (n.strokeStyle = r.stroke), G1(e, n, i, l, u, s), p > 0 && n.stroke(), i.close && n.closePath(), i.fill && n.fill(), q1(e, n, i, l, u, s), n.globalCompositeOperation = "source-over", n.setTransform(1, 0, 0, 1, 0, 0)
}

function G1(t, e, n, i, s, r) {
    if (!n.shape) return;
    const o = t.drawers.get(n.shape);
    o && o.draw(e, n, i, s, r, t.retina.pixelRatio)
}

function q1(t, e, n, i, s, r) {
    if (!n.shape) return;
    const o = t.drawers.get(n.shape);
    !o || !o.afterEffect || o.afterEffect(e, n, i, s, r, t.retina.pixelRatio)
}

function K1(t, e, n) {
    e.draw && e.draw(t, n)
}

function Q1(t, e, n, i) {
    e.drawParticle && e.drawParticle(t, n, i)
}

function X1(t, e, n) {
    return {
        h: t.h,
        s: t.s,
        l: t.l + (e === "darken" ? -1 : 1) * n
    }
}

function Y1(t, e, n) {
    const i = e[n];
    i !== void 0 && (t[n] = (t[n] ?? 1) * i)
}
class Z1 {
    constructor(e) {
        this.container = e, this._applyPostDrawUpdaters = n => {
            for (const i of this._postDrawUpdaters) i.afterDraw && i.afterDraw(n)
        }, this._applyPreDrawUpdaters = (n, i, s, r, o, a) => {
            for (const l of this._preDrawUpdaters) {
                if (l.getColorStyles) {
                    const {
                        fill: u,
                        stroke: c
                    } = l.getColorStyles(i, n, s, r);
                    u && (o.fill = u), c && (o.stroke = c)
                }
                if (l.getTransformValues) {
                    const u = l.getTransformValues(i);
                    for (const c in u) Y1(a, u, c)
                }
                l.beforeDraw && l.beforeDraw(i)
            }
        }, this._applyResizePlugins = () => {
            for (const n of this._resizePlugins) n.resize && n.resize()
        }, this._getPluginParticleColors = n => {
            let i, s;
            for (const r of this._colorPlugins)
                if (!i && r.particleFillColor && (i = bn(r.particleFillColor(n))), !s && r.particleStrokeColor && (s = bn(r.particleStrokeColor(n))), i && s) break;
            return [i, s]
        }, this._initCover = () => {
            const n = this.container.actualOptions,
                i = n.backgroundMask.cover,
                s = i.color,
                r = at(s);
            if (r) {
                const o = {
                    ...r,
                    a: i.opacity
                };
                this._coverColorStyle = Mt(o, o.a)
            }
        }, this._initStyle = () => {
            const n = this.element,
                i = this.container.actualOptions;
            if (n) {
                this._fullScreen ? (this._originalStyle = ce({}, n.style), this._setFullScreenStyle()) : this._resetOriginalStyle();
                for (const s in i.style) {
                    if (!s || !i.style) continue;
                    const r = i.style[s];
                    r && n.style.setProperty(s, r, "important")
                }
            }
        }, this._initTrail = async () => {
            const n = this.container.actualOptions,
                i = n.particles.move.trail,
                s = i.fill;
            if (i.enable)
                if (s.color) {
                    const r = at(s.color);
                    if (!r) return;
                    const o = n.particles.move.trail;
                    this._trailFill = {
                        color: {
                            ...r
                        },
                        opacity: 1 / o.length
                    }
                } else await new Promise((r, o) => {
                    if (!s.image) return;
                    const a = document.createElement("img");
                    a.addEventListener("load", () => {
                        this._trailFill = {
                            image: a,
                            opacity: 1 / i.length
                        }, r()
                    }), a.addEventListener("error", l => {
                        o(l.error)
                    }), a.src = s.image
                })
        }, this._paintBase = n => {
            this.draw(i => $1(i, this.size, n))
        }, this._paintImage = (n, i) => {
            this.draw(s => W1(s, this.size, n, i))
        }, this._repairStyle = () => {
            const n = this.element;
            n && (this._safeMutationObserver(i => i.disconnect()), this._initStyle(), this.initBackground(), this._safeMutationObserver(i => i.observe(n, {
                attributes: !0
            })))
        }, this._resetOriginalStyle = () => {
            const n = this.element,
                i = this._originalStyle;
            if (!(n && i)) return;
            const s = n.style;
            s.position = i.position, s.zIndex = i.zIndex, s.top = i.top, s.left = i.left, s.width = i.width, s.height = i.height
        }, this._safeMutationObserver = n => {
            this._mutationObserver && n(this._mutationObserver)
        }, this._setFullScreenStyle = () => {
            const n = this.element;
            if (!n) return;
            const i = "important",
                s = n.style;
            s.setProperty("position", "fixed", i), s.setProperty("z-index", this.container.actualOptions.fullScreen.zIndex.toString(10), i), s.setProperty("top", "0", i), s.setProperty("left", "0", i), s.setProperty("width", "100%", i), s.setProperty("height", "100%", i)
        }, this.size = {
            height: 0,
            width: 0
        }, this._context = null, this._generated = !1, this._preDrawUpdaters = [], this._postDrawUpdaters = [], this._resizePlugins = [], this._colorPlugins = []
    }
    get _fullScreen() {
        return this.container.actualOptions.fullScreen.enable
    }
    clear() {
        const e = this.container.actualOptions,
            n = e.particles.move.trail,
            i = this._trailFill;
        e.backgroundMask.enable ? this.paint() : n.enable && n.length > 0 && i ? i.color ? this._paintBase(Mt(i.color, i.opacity)) : i.image && this._paintImage(i.image, i.opacity) : this.draw(s => {
            La(s, this.size)
        })
    }
    destroy() {
        if (this.stop(), this._generated) {
            const e = this.element;
            e && e.remove()
        } else this._resetOriginalStyle();
        this._preDrawUpdaters = [], this._postDrawUpdaters = [], this._resizePlugins = [], this._colorPlugins = []
    }
    draw(e) {
        const n = this._context;
        if (n) return e(n)
    }
    drawParticle(e, n) {
        if (e.spawning || e.destroyed) return;
        const i = e.getRadius();
        if (i <= 0) return;
        const s = e.getFillColor(),
            r = e.getStrokeColor() ?? s;
        let [o, a] = this._getPluginParticleColors(e);
        o || (o = s), a || (a = r), !(!o && !a) && this.draw(l => {
            var v;
            const u = this.container,
                c = u.actualOptions,
                d = e.options.zIndex,
                f = (1 - e.zIndexFactor) ** d.opacityRate,
                h = e.bubble.opacity ?? ((v = e.opacity) == null ? void 0 : v.value) ?? 1,
                y = e.strokeOpacity ?? h,
                g = h * f,
                x = y * f,
                p = {},
                m = {
                    fill: o ? ji(o, g) : void 0
                };
            m.stroke = a ? ji(a, x) : m.fill, this._applyPreDrawUpdaters(l, e, i, g, m, p), H1({
                container: u,
                context: l,
                particle: e,
                delta: n,
                colorStyles: m,
                backgroundMask: c.backgroundMask.enable,
                composite: c.backgroundMask.composite,
                radius: i * (1 - e.zIndexFactor) ** d.sizeRate,
                opacity: g,
                shadow: e.options.shadow,
                transform: p
            }), this._applyPostDrawUpdaters(e)
        })
    }
    drawParticlePlugin(e, n, i) {
        this.draw(s => Q1(s, e, n, i))
    }
    drawPlugin(e, n) {
        this.draw(i => K1(i, e, n))
    }
    async init() {
        this._safeMutationObserver(e => e.disconnect()), this._mutationObserver = O1(e => {
            for (const n of e) n.type === "attributes" && n.attributeName === "style" && this._repairStyle()
        }), this.resize(), this._initStyle(), this._initCover();
        try {
            await this._initTrail()
        } catch (e) {
            Zn().error(e)
        }
        this.initBackground(), this._safeMutationObserver(e => {
            this.element && e.observe(this.element, {
                attributes: !0
            })
        }), this.initUpdaters(), this.initPlugins(), this.paint()
    }
    initBackground() {
        const e = this.container.actualOptions,
            n = e.background,
            i = this.element;
        if (!i) return;
        const s = i.style;
        if (s) {
            if (n.color) {
                const r = at(n.color);
                s.backgroundColor = r ? Mt(r, n.opacity) : ""
            } else s.backgroundColor = "";
            s.backgroundImage = n.image || "", s.backgroundPosition = n.position || "", s.backgroundRepeat = n.repeat || "", s.backgroundSize = n.size || ""
        }
    }
    initPlugins() {
        this._resizePlugins = [];
        for (const [, e] of this.container.plugins) e.resize && this._resizePlugins.push(e), (e.particleFillColor || e.particleStrokeColor) && this._colorPlugins.push(e)
    }
    initUpdaters() {
        this._preDrawUpdaters = [], this._postDrawUpdaters = [];
        for (const e of this.container.particles.updaters) e.afterDraw && this._postDrawUpdaters.push(e), (e.getColorStyles || e.getTransformValues || e.beforeDraw) && this._preDrawUpdaters.push(e)
    }
    loadCanvas(e) {
        this._generated && this.element && this.element.remove(), this._generated = e.dataset && Ss in e.dataset ? e.dataset[Ss] === "true" : this._generated, this.element = e, this.element.ariaHidden = "true", this._originalStyle = ce({}, this.element.style), this.size.height = e.offsetHeight, this.size.width = e.offsetWidth, this._context = this.element.getContext("2d"), this._safeMutationObserver(n => {
            this.element && n.observe(this.element, {
                attributes: !0
            })
        }), this.container.retina.init(), this.initBackground()
    }
    paint() {
        const e = this.container.actualOptions;
        this.draw(n => {
            e.backgroundMask.enable && e.backgroundMask.cover ? (La(n, this.size), this._paintBase(this._coverColorStyle)) : this._paintBase()
        })
    }
    resize() {
        if (!this.element) return !1;
        const e = this.container,
            n = e.retina.pixelRatio,
            i = e.canvas.size,
            s = {
                width: this.element.offsetWidth * n,
                height: this.element.offsetHeight * n
            };
        if (s.height === i.height && s.width === i.width && s.height === this.element.height && s.width === this.element.width) return !1;
        const r = {
            ...i
        };
        return this.element.width = i.width = this.element.offsetWidth * n, this.element.height = i.height = this.element.offsetHeight * n, this.container.started && (this.resizeFactor = {
            width: i.width / r.width,
            height: i.height / r.height
        }), !0
    }
    stop() {
        this._safeMutationObserver(e => e.disconnect()), this._mutationObserver = void 0, this.draw(e => La(e, this.size))
    }
    async windowResize() {
        if (!this.element || !this.resize()) return;
        const e = this.container,
            n = e.updateActualOptions();
        e.particles.setDensity(), this._applyResizePlugins(), n && await e.refresh()
    }
}

function et(t, e, n, i, s) {
    if (i) {
        let r = {
            passive: !0
        };
        vn(s) ? r.capture = s : s !== void 0 && (r = s), t.addEventListener(e, n, r)
    } else {
        const r = s;
        t.removeEventListener(e, n, r)
    }
}
class J1 {
    constructor(e) {
        this.container = e, this._doMouseTouchClick = n => {
            const i = this.container,
                s = i.actualOptions;
            if (this._canPush) {
                const r = i.interactivity.mouse,
                    o = r.position;
                if (!o) return;
                r.clickPosition = {
                    ...o
                }, r.clickTime = new Date().getTime();
                const a = s.interactivity.events.onClick;
                Z(a.mode, l => this.container.handleClickMode(l))
            }
            n.type === "touchend" && setTimeout(() => this._mouseTouchFinish(), 500)
        }, this._handleThemeChange = n => {
            const i = n,
                s = this.container,
                r = s.options,
                o = r.defaultThemes,
                a = i.matches ? o.dark : o.light,
                l = r.themes.find(u => u.name === a);
            l && l.default.auto && s.loadTheme(a)
        }, this._handleVisibilityChange = () => {
            const n = this.container,
                i = n.actualOptions;
            this._mouseTouchFinish(), i.pauseOnBlur && (document && document.hidden ? (n.pageHidden = !0, n.pause()) : (n.pageHidden = !1, n.getAnimationStatus() ? n.play(!0) : n.draw(!0)))
        }, this._handleWindowResize = async () => {
            this._resizeTimeout && (clearTimeout(this._resizeTimeout), delete this._resizeTimeout), this._resizeTimeout = setTimeout(async () => {
                const n = this.container.canvas;
                n && await n.windowResize()
            }, this.container.actualOptions.interactivity.events.resize.delay * 1e3)
        }, this._manageInteractivityListeners = (n, i) => {
            const s = this._handlers,
                r = this.container,
                o = r.actualOptions,
                a = r.interactivity.element;
            if (!a) return;
            const l = a,
                u = r.canvas.element;
            u && (u.style.pointerEvents = l === u ? "initial" : "none"), (o.interactivity.events.onHover.enable || o.interactivity.events.onClick.enable) && (et(a, Yn, s.mouseMove, i), et(a, b1, s.touchStart, i), et(a, k1, s.touchMove, i), o.interactivity.events.onClick.enable ? (et(a, Tf, s.touchEndClick, i), et(a, w1, s.mouseUp, i), et(a, v1, s.mouseDown, i)) : et(a, Tf, s.touchEnd, i), et(a, n, s.mouseLeave, i), et(a, S1, s.touchCancel, i))
        }, this._manageListeners = n => {
            const i = this._handlers,
                s = this.container,
                r = s.actualOptions,
                o = r.interactivity.detectsOn,
                a = s.canvas.element;
            let l = su;
            o === "window" ? (s.interactivity.element = window, l = x1) : o === "parent" && a ? s.interactivity.element = a.parentElement ?? a.parentNode : s.interactivity.element = a, this._manageMediaMatch(n), this._manageResize(n), this._manageInteractivityListeners(l, n), document && et(document, C1, i.visibilityChange, n, !1)
        }, this._manageMediaMatch = n => {
            const i = this._handlers,
                s = Ng("(prefers-color-scheme: dark)");
            if (s) {
                if (s.addEventListener !== void 0) {
                    et(s, "change", i.themeChange, n);
                    return
                }
                s.addListener !== void 0 && (n ? s.addListener(i.oldThemeChange) : s.removeListener(i.oldThemeChange))
            }
        }, this._manageResize = n => {
            const i = this._handlers,
                s = this.container;
            if (!s.actualOptions.interactivity.events.resize) return;
            if (typeof ResizeObserver > "u") {
                et(window, P1, i.resize, n);
                return
            }
            const o = s.canvas.element;
            this._resizeObserver && !n ? (o && this._resizeObserver.unobserve(o), this._resizeObserver.disconnect(), delete this._resizeObserver) : !this._resizeObserver && n && o && (this._resizeObserver = new ResizeObserver(async a => {
                a.find(u => u.target === o) && await this._handleWindowResize()
            }), this._resizeObserver.observe(o))
        }, this._mouseDown = () => {
            const {
                interactivity: n
            } = this.container;
            if (!n) return;
            const {
                mouse: i
            } = n;
            i.clicking = !0, i.downPosition = i.position
        }, this._mouseTouchClick = n => {
            const i = this.container,
                s = i.actualOptions,
                {
                    mouse: r
                } = i.interactivity;
            r.inside = !0;
            let o = !1;
            const a = r.position;
            if (!(!a || !s.interactivity.events.onClick.enable)) {
                for (const [, l] of i.plugins)
                    if (l.clickPositionValid && (o = l.clickPositionValid(a), o)) break;
                o || this._doMouseTouchClick(n), r.clicking = !1
            }
        }, this._mouseTouchFinish = () => {
            const n = this.container.interactivity;
            if (!n) return;
            const i = n.mouse;
            delete i.position, delete i.clickPosition, delete i.downPosition, n.status = su, i.inside = !1, i.clicking = !1
        }, this._mouseTouchMove = n => {
            const i = this.container,
                s = i.actualOptions,
                r = i.interactivity,
                o = i.canvas.element;
            if (!r || !r.element) return;
            r.mouse.inside = !0;
            let a;
            if (n.type.startsWith("pointer")) {
                this._canPush = !0;
                const u = n;
                if (r.element === window) {
                    if (o) {
                        const c = o.getBoundingClientRect();
                        a = {
                            x: u.clientX - c.left,
                            y: u.clientY - c.top
                        }
                    }
                } else if (s.interactivity.detectsOn === "parent") {
                    const c = u.target,
                        d = u.currentTarget;
                    if (c && d && o) {
                        const f = c.getBoundingClientRect(),
                            h = d.getBoundingClientRect(),
                            y = o.getBoundingClientRect();
                        a = {
                            x: u.offsetX + 2 * f.left - (h.left + y.left),
                            y: u.offsetY + 2 * f.top - (h.top + y.top)
                        }
                    } else a = {
                        x: u.offsetX ?? u.clientX,
                        y: u.offsetY ?? u.clientY
                    }
                } else u.target === o && (a = {
                    x: u.offsetX ?? u.clientX,
                    y: u.offsetY ?? u.clientY
                })
            } else if (this._canPush = n.type !== "touchmove", o) {
                const u = n,
                    c = u.touches[u.touches.length - 1],
                    d = o.getBoundingClientRect();
                a = {
                    x: c.clientX - (d.left ?? 0),
                    y: c.clientY - (d.top ?? 0)
                }
            }
            const l = i.retina.pixelRatio;
            a && (a.x *= l, a.y *= l), r.mouse.position = a, r.status = Yn
        }, this._touchEnd = n => {
            const i = n,
                s = Array.from(i.changedTouches);
            for (const r of s) this._touches.delete(r.identifier);
            this._mouseTouchFinish()
        }, this._touchEndClick = n => {
            const i = n,
                s = Array.from(i.changedTouches);
            for (const r of s) this._touches.delete(r.identifier);
            this._mouseTouchClick(n)
        }, this._touchStart = n => {
            const i = n,
                s = Array.from(i.changedTouches);
            for (const r of s) this._touches.set(r.identifier, performance.now());
            this._mouseTouchMove(n)
        }, this._canPush = !0, this._touches = new Map, this._handlers = {
            mouseDown: () => this._mouseDown(),
            mouseLeave: () => this._mouseTouchFinish(),
            mouseMove: n => this._mouseTouchMove(n),
            mouseUp: n => this._mouseTouchClick(n),
            touchStart: n => this._touchStart(n),
            touchMove: n => this._mouseTouchMove(n),
            touchEnd: n => this._touchEnd(n),
            touchCancel: n => this._touchEnd(n),
            touchEndClick: n => this._touchEndClick(n),
            visibilityChange: () => this._handleVisibilityChange(),
            themeChange: n => this._handleThemeChange(n),
            oldThemeChange: n => this._handleThemeChange(n),
            resize: () => {
                this._handleWindowResize()
            }
        }
    }
    addListeners() {
        this._manageListeners(!0)
    }
    removeListeners() {
        this._manageListeners(!1)
    }
}
class ae {
    constructor() {
        this.value = ""
    }
    static create(e, n) {
        const i = new ae;
        return i.load(e), n !== void 0 && (vt(n) || pe(n) ? i.load({
            value: n
        }) : i.load(n)), i
    }
    load(e) {
        (e == null ? void 0 : e.value) !== void 0 && (this.value = e.value)
    }
}
class eb {
    constructor() {
        this.color = new ae, this.color.value = "", this.image = "", this.position = "", this.repeat = "", this.size = "", this.opacity = 1
    }
    load(e) {
        e && (e.color !== void 0 && (this.color = ae.create(this.color, e.color)), e.image !== void 0 && (this.image = e.image), e.position !== void 0 && (this.position = e.position), e.repeat !== void 0 && (this.repeat = e.repeat), e.size !== void 0 && (this.size = e.size), e.opacity !== void 0 && (this.opacity = e.opacity))
    }
}
class tb {
    constructor() {
        this.color = new ae, this.color.value = "#fff", this.opacity = 1
    }
    load(e) {
        e && (e.color !== void 0 && (this.color = ae.create(this.color, e.color)), e.opacity !== void 0 && (this.opacity = e.opacity))
    }
}
class nb {
    constructor() {
        this.composite = "destination-out", this.cover = new tb, this.enable = !1
    }
    load(e) {
        if (e) {
            if (e.composite !== void 0 && (this.composite = e.composite), e.cover !== void 0) {
                const n = e.cover,
                    i = vt(e.cover) ? {
                        color: e.cover
                    } : e.cover;
                this.cover.load(n.color !== void 0 ? n : {
                    color: i
                })
            }
            e.enable !== void 0 && (this.enable = e.enable)
        }
    }
}
class ib {
    constructor() {
        this.enable = !0, this.zIndex = 0
    }
    load(e) {
        e && (e.enable !== void 0 && (this.enable = e.enable), e.zIndex !== void 0 && (this.zIndex = e.zIndex))
    }
}
class sb {
    constructor() {
        this.enable = !1, this.mode = []
    }
    load(e) {
        e && (e.enable !== void 0 && (this.enable = e.enable), e.mode !== void 0 && (this.mode = e.mode))
    }
}
class Df {
    constructor() {
        this.selectors = [], this.enable = !1, this.mode = [], this.type = "circle"
    }
    get el() {
        return this.elementId
    }
    set el(e) {
        this.elementId = e
    }
    get elementId() {
        return this.ids
    }
    set elementId(e) {
        this.ids = e
    }
    get ids() {
        return Z(this.selectors, e => e.replace("#", ""))
    }
    set ids(e) {
        this.selectors = Z(e, n => `#${n}`)
    }
    load(e) {
        if (!e) return;
        const n = e.ids ?? e.elementId ?? e.el;
        n !== void 0 && (this.ids = n), e.selectors !== void 0 && (this.selectors = e.selectors), e.enable !== void 0 && (this.enable = e.enable), e.mode !== void 0 && (this.mode = e.mode), e.type !== void 0 && (this.type = e.type)
    }
}
class rb {
    constructor() {
        this.enable = !1, this.force = 2, this.smooth = 10
    }
    load(e) {
        e && (e.enable !== void 0 && (this.enable = e.enable), e.force !== void 0 && (this.force = e.force), e.smooth !== void 0 && (this.smooth = e.smooth))
    }
}
class ob {
    constructor() {
        this.enable = !1, this.mode = [], this.parallax = new rb
    }
    load(e) {
        e && (e.enable !== void 0 && (this.enable = e.enable), e.mode !== void 0 && (this.mode = e.mode), this.parallax.load(e.parallax))
    }
}
class ab {
    constructor() {
        this.delay = .5, this.enable = !0
    }
    load(e) {
        e !== void 0 && (e.delay !== void 0 && (this.delay = e.delay), e.enable !== void 0 && (this.enable = e.enable))
    }
}
class lb {
    constructor() {
        this.onClick = new sb, this.onDiv = new Df, this.onHover = new ob, this.resize = new ab
    }
    get onclick() {
        return this.onClick
    }
    set onclick(e) {
        this.onClick = e
    }
    get ondiv() {
        return this.onDiv
    }
    set ondiv(e) {
        this.onDiv = e
    }
    get onhover() {
        return this.onHover
    }
    set onhover(e) {
        this.onHover = e
    }
    load(e) {
        if (!e) return;
        this.onClick.load(e.onClick ?? e.onclick);
        const n = e.onDiv ?? e.ondiv;
        n !== void 0 && (this.onDiv = Z(n, i => {
            const s = new Df;
            return s.load(i), s
        })), this.onHover.load(e.onHover ?? e.onhover), vn(e.resize) ? this.resize.enable = e.resize : this.resize.load(e.resize)
    }
}
class ub {
    constructor(e, n) {
        this._engine = e, this._container = n
    }
    load(e) {
        if (!e || !this._container) return;
        const n = this._engine.plugins.interactors.get(this._container);
        if (n)
            for (const i of n) i.loadModeOptions && i.loadModeOptions(this, e)
    }
}
class Zg {
    constructor(e, n) {
        this.detectsOn = "window", this.events = new lb, this.modes = new ub(e, n)
    }
    get detect_on() {
        return this.detectsOn
    }
    set detect_on(e) {
        this.detectsOn = e
    }
    load(e) {
        if (!e) return;
        const n = e.detectsOn ?? e.detect_on;
        n !== void 0 && (this.detectsOn = n), this.events.load(e.events), this.modes.load(e.modes)
    }
}
class cb {
    load(e) {
        e && (e.position && (this.position = {
            x: e.position.x ?? 50,
            y: e.position.y ?? 50,
            mode: e.position.mode ?? "percent"
        }), e.options && (this.options = ce({}, e.options)))
    }
}
class db {
    constructor() {
        this.maxWidth = 1 / 0, this.options = {}, this.mode = "canvas"
    }
    load(e) {
        e && (e.maxWidth !== void 0 && (this.maxWidth = e.maxWidth), e.mode !== void 0 && (e.mode === "screen" ? this.mode = "screen" : this.mode = "canvas"), e.options !== void 0 && (this.options = ce({}, e.options)))
    }
}
class fb {
    constructor() {
        this.auto = !1, this.mode = "any", this.value = !1
    }
    load(e) {
        e && (e.auto !== void 0 && (this.auto = e.auto), e.mode !== void 0 && (this.mode = e.mode), e.value !== void 0 && (this.value = e.value))
    }
}
class hb {
    constructor() {
        this.name = "", this.default = new fb
    }
    load(e) {
        e && (e.name !== void 0 && (this.name = e.name), this.default.load(e.default), e.options !== void 0 && (this.options = ce({}, e.options)))
    }
}
class Ia {
    constructor() {
        this.count = 0, this.enable = !1, this.offset = 0, this.speed = 1, this.delay = 0, this.decay = 0, this.sync = !0
    }
    load(e) {
        e && (e.count !== void 0 && (this.count = z(e.count)), e.enable !== void 0 && (this.enable = e.enable), e.offset !== void 0 && (this.offset = z(e.offset)), e.speed !== void 0 && (this.speed = z(e.speed)), e.decay !== void 0 && (this.decay = z(e.decay)), e.delay !== void 0 && (this.delay = z(e.delay)), e.sync !== void 0 && (this.sync = e.sync))
    }
}
class pb {
    constructor() {
        this.h = new Ia, this.s = new Ia, this.l = new Ia
    }
    load(e) {
        e && (this.h.load(e.h), this.s.load(e.s), this.l.load(e.l))
    }
}
class Bi extends ae {
    constructor() {
        super(), this.animation = new pb
    }
    static create(e, n) {
        const i = new Bi;
        return i.load(e), n !== void 0 && (vt(n) || pe(n) ? i.load({
            value: n
        }) : i.load(n)), i
    }
    load(e) {
        if (super.load(e), !e) return;
        const n = e.animation;
        n !== void 0 && (n.enable !== void 0 ? this.animation.h.load(n) : this.animation.load(e.animation))
    }
}
class mb {
    constructor() {
        this.speed = 2
    }
    load(e) {
        e && e.speed !== void 0 && (this.speed = e.speed)
    }
}
class gb {
    constructor() {
        this.enable = !0, this.retries = 0
    }
    load(e) {
        e && (e.enable !== void 0 && (this.enable = e.enable), e.retries !== void 0 && (this.retries = e.retries))
    }
}
class yb {
    constructor() {
        this.count = 0, this.enable = !1, this.speed = 1, this.decay = 0, this.delay = 0, this.sync = !1
    }
    load(e) {
        e && (e.count !== void 0 && (this.count = z(e.count)), e.enable !== void 0 && (this.enable = e.enable), e.speed !== void 0 && (this.speed = z(e.speed)), e.decay !== void 0 && (this.decay = z(e.decay)), e.delay !== void 0 && (this.delay = z(e.delay)), e.sync !== void 0 && (this.sync = e.sync))
    }
}
class Jg extends yb {
    constructor() {
        super(), this.mode = "auto", this.startValue = "random"
    }
    load(e) {
        super.load(e), e && (e.minimumValue !== void 0 && (this.minimumValue = e.minimumValue), e.mode !== void 0 && (this.mode = e.mode), e.startValue !== void 0 && (this.startValue = e.startValue))
    }
}
class vb {
    constructor() {
        this.enable = !1, this.minimumValue = 0
    }
    load(e) {
        e && (e.enable !== void 0 && (this.enable = e.enable), e.minimumValue !== void 0 && (this.minimumValue = e.minimumValue))
    }
}
class dt {
    constructor() {
        this.random = new vb, this.value = 0
    }
    load(e) {
        e && (vn(e.random) ? this.random.enable = e.random : this.random.load(e.random), e.value !== void 0 && (this.value = z(e.value, this.random.enable ? this.random.minimumValue : void 0)))
    }
}
class Of extends dt {
    constructor() {
        super(), this.random.minimumValue = .1, this.value = 1
    }
}
class ey {
    constructor() {
        this.horizontal = new Of, this.vertical = new Of
    }
    load(e) {
        e && (this.horizontal.load(e.horizontal), this.vertical.load(e.vertical))
    }
}
class wb {
    constructor() {
        this.absorb = new mb, this.bounce = new ey, this.enable = !1, this.maxSpeed = 50, this.mode = "bounce", this.overlap = new gb
    }
    load(e) {
        e && (this.absorb.load(e.absorb), this.bounce.load(e.bounce), e.enable !== void 0 && (this.enable = e.enable), e.maxSpeed !== void 0 && (this.maxSpeed = z(e.maxSpeed)), e.mode !== void 0 && (this.mode = e.mode), this.overlap.load(e.overlap))
    }
}
class xb {
    constructor() {
        this.offset = 0, this.value = 90
    }
    load(e) {
        e && (e.offset !== void 0 && (this.offset = z(e.offset)), e.value !== void 0 && (this.value = z(e.value)))
    }
}
class bb {
    constructor() {
        this.distance = 200, this.enable = !1, this.rotate = {
            x: 3e3,
            y: 3e3
        }
    }
    get rotateX() {
        return this.rotate.x
    }
    set rotateX(e) {
        this.rotate.x = e
    }
    get rotateY() {
        return this.rotate.y
    }
    set rotateY(e) {
        this.rotate.y = e
    }
    load(e) {
        var s, r;
        if (!e) return;
        e.distance !== void 0 && (this.distance = z(e.distance)), e.enable !== void 0 && (this.enable = e.enable);
        const n = ((s = e.rotate) == null ? void 0 : s.x) ?? e.rotateX;
        n !== void 0 && (this.rotate.x = n);
        const i = ((r = e.rotate) == null ? void 0 : r.y) ?? e.rotateY;
        i !== void 0 && (this.rotate.y = i)
    }
}
class kb {
    constructor() {
        this.x = 50, this.y = 50, this.mode = "percent", this.radius = 0
    }
    load(e) {
        e && (e.x !== void 0 && (this.x = e.x), e.y !== void 0 && (this.y = e.y), e.mode !== void 0 && (this.mode = e.mode), e.radius !== void 0 && (this.radius = e.radius))
    }
}
class Sb {
    constructor() {
        this.acceleration = 9.81, this.enable = !1, this.inverse = !1, this.maxSpeed = 50
    }
    load(e) {
        e && (e.acceleration !== void 0 && (this.acceleration = z(e.acceleration)), e.enable !== void 0 && (this.enable = e.enable), e.inverse !== void 0 && (this.inverse = e.inverse), e.maxSpeed !== void 0 && (this.maxSpeed = z(e.maxSpeed)))
    }
}
class Pb {
    constructor() {
        this.clamp = !0, this.delay = new dt, this.enable = !1, this.options = {}
    }
    load(e) {
        e && (e.clamp !== void 0 && (this.clamp = e.clamp), this.delay.load(e.delay), e.enable !== void 0 && (this.enable = e.enable), this.generator = e.generator, e.options && (this.options = ce(this.options, e.options)))
    }
}
class Cb {
    load(e) {
        e && (e.color !== void 0 && (this.color = ae.create(this.color, e.color)), e.image !== void 0 && (this.image = e.image))
    }
}
class _b {
    constructor() {
        this.enable = !1, this.length = 10, this.fill = new Cb
    }
    get fillColor() {
        return this.fill.color
    }
    set fillColor(e) {
        this.fill.load({
            color: e
        })
    }
    load(e) {
        e && (e.enable !== void 0 && (this.enable = e.enable), (e.fill !== void 0 || e.fillColor !== void 0) && this.fill.load(e.fill || {
            color: e.fillColor
        }), e.length !== void 0 && (this.length = e.length))
    }
}
class Tb {
    constructor() {
        this.default = "out"
    }
    load(e) {
        e && (e.default !== void 0 && (this.default = e.default), this.bottom = e.bottom ?? e.default, this.left = e.left ?? e.default, this.right = e.right ?? e.default, this.top = e.top ?? e.default)
    }
}
class Eb {
    constructor() {
        this.acceleration = 0, this.enable = !1
    }
    load(e) {
        e && (e.acceleration !== void 0 && (this.acceleration = z(e.acceleration)), e.enable !== void 0 && (this.enable = e.enable), e.position && (this.position = ce({}, e.position)))
    }
}
class Mb {
    constructor() {
        this.angle = new xb, this.attract = new bb, this.center = new kb, this.decay = 0, this.distance = {}, this.direction = "none", this.drift = 0, this.enable = !1, this.gravity = new Sb, this.path = new Pb, this.outModes = new Tb, this.random = !1, this.size = !1, this.speed = 2, this.spin = new Eb, this.straight = !1, this.trail = new _b, this.vibrate = !1, this.warp = !1
    }
    get bounce() {
        return this.collisions
    }
    set bounce(e) {
        this.collisions = e
    }
    get collisions() {
        return !1
    }
    set collisions(e) {}
    get noise() {
        return this.path
    }
    set noise(e) {
        this.path = e
    }
    get outMode() {
        return this.outModes.default
    }
    set outMode(e) {
        this.outModes.default = e
    }
    get out_mode() {
        return this.outMode
    }
    set out_mode(e) {
        this.outMode = e
    }
    load(e) {
        if (!e) return;
        this.angle.load(Me(e.angle) ? {
            value: e.angle
        } : e.angle), this.attract.load(e.attract), this.center.load(e.center), e.decay !== void 0 && (this.decay = z(e.decay)), e.direction !== void 0 && (this.direction = e.direction), e.distance !== void 0 && (this.distance = Me(e.distance) ? {
            horizontal: e.distance,
            vertical: e.distance
        } : {
            ...e.distance
        }), e.drift !== void 0 && (this.drift = z(e.drift)), e.enable !== void 0 && (this.enable = e.enable), this.gravity.load(e.gravity);
        const n = e.outModes ?? e.outMode ?? e.out_mode;
        n !== void 0 && (gi(n) ? this.outModes.load(n) : this.outModes.load({
            default: n
        })), this.path.load(e.path ?? e.noise), e.random !== void 0 && (this.random = e.random), e.size !== void 0 && (this.size = e.size), e.speed !== void 0 && (this.speed = z(e.speed)), this.spin.load(e.spin), e.straight !== void 0 && (this.straight = e.straight), this.trail.load(e.trail), e.vibrate !== void 0 && (this.vibrate = e.vibrate), e.warp !== void 0 && (this.warp = e.warp)
    }
}
class Rb extends Jg {
    constructor() {
        super(), this.destroy = "none", this.speed = 2
    }
    get opacity_min() {
        return this.minimumValue
    }
    set opacity_min(e) {
        this.minimumValue = e
    }
    load(e) {
        (e == null ? void 0 : e.opacity_min) !== void 0 && e.minimumValue === void 0 && (e.minimumValue = e.opacity_min), super.load(e), e && e.destroy !== void 0 && (this.destroy = e.destroy)
    }
}
class zb extends dt {
    constructor() {
        super(), this.animation = new Rb, this.random.minimumValue = .1, this.value = 1
    }
    get anim() {
        return this.animation
    }
    set anim(e) {
        this.animation = e
    }
    load(e) {
        if (!e) return;
        super.load(e);
        const n = e.animation ?? e.anim;
        n !== void 0 && (this.animation.load(n), this.value = z(this.value, this.animation.enable ? this.animation.minimumValue : void 0))
    }
}
class Db {
    constructor() {
        this.enable = !1, this.width = 1920, this.height = 1080
    }
    get area() {
        return this.width
    }
    set area(e) {
        this.width = e
    }
    get factor() {
        return this.height
    }
    set factor(e) {
        this.height = e
    }
    get value_area() {
        return this.area
    }
    set value_area(e) {
        this.area = e
    }
    load(e) {
        if (!e) return;
        e.enable !== void 0 && (this.enable = e.enable);
        const n = e.width ?? e.area ?? e.value_area;
        n !== void 0 && (this.width = n);
        const i = e.height ?? e.factor;
        i !== void 0 && (this.height = i)
    }
}
class Ob {
    constructor() {
        this.density = new Db, this.limit = 0, this.value = 0
    }
    get max() {
        return this.limit
    }
    set max(e) {
        this.limit = e
    }
    load(e) {
        if (!e) return;
        this.density.load(e.density);
        const n = e.limit ?? e.max;
        n !== void 0 && (this.limit = n), e.value !== void 0 && (this.value = e.value)
    }
}
class Ab {
    constructor() {
        this.blur = 0, this.color = new ae, this.enable = !1, this.offset = {
            x: 0,
            y: 0
        }, this.color.value = "#000"
    }
    load(e) {
        e && (e.blur !== void 0 && (this.blur = e.blur), this.color = ae.create(this.color, e.color), e.enable !== void 0 && (this.enable = e.enable), e.offset !== void 0 && (e.offset.x !== void 0 && (this.offset.x = e.offset.x), e.offset.y !== void 0 && (this.offset.y = e.offset.y)))
    }
}
const Fa = "character",
    Na = "char",
    Va = "image",
    ja = "images",
    Ba = "polygon",
    Ua = "star";
class Lb {
    constructor() {
        this.loadShape = (e, n, i, s) => {
            if (!e) return;
            const r = pe(e),
                o = r ? [] : {},
                a = r !== pe(this.options[n]),
                l = r !== pe(this.options[i]);
            a && (this.options[n] = o), l && s && (this.options[i] = o), this.options[n] = ce(this.options[n] ?? o, e), (!this.options[i] || s) && (this.options[i] = ce(this.options[i] ?? o, e))
        }, this.close = !0, this.fill = !0, this.options = {}, this.type = "circle"
    }
    get character() {
        return this.options[Fa] ?? this.options[Na]
    }
    set character(e) {
        this.options[Na] = this.options[Fa] = e
    }
    get custom() {
        return this.options
    }
    set custom(e) {
        this.options = e
    }
    get image() {
        return this.options[Va] ?? this.options[ja]
    }
    set image(e) {
        this.options[ja] = this.options[Va] = e
    }
    get images() {
        return this.image
    }
    set images(e) {
        this.image = e
    }
    get polygon() {
        return this.options[Ba] ?? this.options[Ua]
    }
    set polygon(e) {
        this.options[Ua] = this.options[Ba] = e
    }
    get stroke() {
        return []
    }
    set stroke(e) {}
    load(e) {
        if (!e) return;
        const n = e.options ?? e.custom;
        if (n !== void 0)
            for (const i in n) {
                const s = n[i];
                s && (this.options[i] = ce(this.options[i] ?? {}, s))
            }
        this.loadShape(e.character, Fa, Na, !0), this.loadShape(e.polygon, Ba, Ua, !1), this.loadShape(e.image ?? e.images, Va, ja, !0), e.close !== void 0 && (this.close = e.close), e.fill !== void 0 && (this.fill = e.fill), e.type !== void 0 && (this.type = e.type)
    }
}
class Ib extends Jg {
    constructor() {
        super(), this.destroy = "none", this.speed = 5
    }
    get size_min() {
        return this.minimumValue
    }
    set size_min(e) {
        this.minimumValue = e
    }
    load(e) {
        (e == null ? void 0 : e.size_min) !== void 0 && e.minimumValue === void 0 && (e.minimumValue = e.size_min), super.load(e), e && e.destroy !== void 0 && (this.destroy = e.destroy)
    }
}
class Fb extends dt {
    constructor() {
        super(), this.animation = new Ib, this.random.minimumValue = 1, this.value = 3
    }
    get anim() {
        return this.animation
    }
    set anim(e) {
        this.animation = e
    }
    load(e) {
        if (super.load(e), !e) return;
        const n = e.animation ?? e.anim;
        n !== void 0 && (this.animation.load(n), this.value = z(this.value, this.animation.enable ? this.animation.minimumValue : void 0))
    }
}
class Af {
    constructor() {
        this.width = 0
    }
    load(e) {
        e && (e.color !== void 0 && (this.color = Bi.create(this.color, e.color)), e.width !== void 0 && (this.width = z(e.width)), e.opacity !== void 0 && (this.opacity = z(e.opacity)))
    }
}
class Nb extends dt {
    constructor() {
        super(), this.opacityRate = 1, this.sizeRate = 1, this.velocityRate = 1
    }
    load(e) {
        super.load(e), e && (e.opacityRate !== void 0 && (this.opacityRate = e.opacityRate), e.sizeRate !== void 0 && (this.sizeRate = e.sizeRate), e.velocityRate !== void 0 && (this.velocityRate = e.velocityRate))
    }
}
class Vb {
    constructor(e, n) {
        this._engine = e, this._container = n, this.bounce = new ey, this.collisions = new wb, this.color = new Bi, this.color.value = "#fff", this.groups = {}, this.move = new Mb, this.number = new Ob, this.opacity = new zb, this.reduceDuplicates = !1, this.shadow = new Ab, this.shape = new Lb, this.size = new Fb, this.stroke = new Af, this.zIndex = new Nb
    }
    load(e) {
        var s, r, o;
        if (!e) return;
        if (this.bounce.load(e.bounce), this.color.load(Bi.create(this.color, e.color)), e.groups !== void 0)
            for (const a in e.groups) {
                const l = e.groups[a];
                l !== void 0 && (this.groups[a] = ce(this.groups[a] ?? {}, l))
            }
        this.move.load(e.move), this.number.load(e.number), this.opacity.load(e.opacity), e.reduceDuplicates !== void 0 && (this.reduceDuplicates = e.reduceDuplicates), this.shape.load(e.shape), this.size.load(e.size), this.shadow.load(e.shadow), this.zIndex.load(e.zIndex);
        const n = ((s = e.move) == null ? void 0 : s.collisions) ?? ((r = e.move) == null ? void 0 : r.bounce);
        n !== void 0 && (this.collisions.enable = n), this.collisions.load(e.collisions), e.interactivity !== void 0 && (this.interactivity = ce({}, e.interactivity));
        const i = e.stroke ?? ((o = e.shape) == null ? void 0 : o.stroke);
        if (i && (this.stroke = Z(i, a => {
                const l = new Af;
                return l.load(a), l
            })), this._container) {
            const a = this._engine.plugins.updaters.get(this._container);
            if (a)
                for (const u of a) u.loadOptions && u.loadOptions(this, e);
            const l = this._engine.plugins.interactors.get(this._container);
            if (l)
                for (const u of l) u.loadParticlesOptions && u.loadParticlesOptions(this, e)
        }
    }
}

function ty(t, ...e) {
    for (const n of e) t.load(n)
}

function _c(t, e, ...n) {
    const i = new Vb(t, e);
    return ty(i, ...n), i
}
class jb {
    constructor(e, n) {
        this._findDefaultTheme = i => this.themes.find(s => s.default.value && s.default.mode === i) ?? this.themes.find(s => s.default.value && s.default.mode === "any"), this._importPreset = i => {
            this.load(this._engine.plugins.getPreset(i))
        }, this._engine = e, this._container = n, this.autoPlay = !0, this.background = new eb, this.backgroundMask = new nb, this.defaultThemes = {}, this.delay = 0, this.fullScreen = new ib, this.detectRetina = !0, this.duration = 0, this.fpsLimit = 120, this.interactivity = new Zg(e, n), this.manualParticles = [], this.particles = _c(this._engine, this._container), this.pauseOnBlur = !0, this.pauseOnOutsideViewport = !0, this.responsive = [], this.smooth = !1, this.style = {}, this.themes = [], this.zLayers = 100
    }
    get backgroundMode() {
        return this.fullScreen
    }
    set backgroundMode(e) {
        this.fullScreen.load(e)
    }
    get fps_limit() {
        return this.fpsLimit
    }
    set fps_limit(e) {
        this.fpsLimit = e
    }
    get retina_detect() {
        return this.detectRetina
    }
    set retina_detect(e) {
        this.detectRetina = e
    }
    load(e) {
        var o, a;
        if (!e) return;
        e.preset !== void 0 && Z(e.preset, l => this._importPreset(l)), e.autoPlay !== void 0 && (this.autoPlay = e.autoPlay), e.delay !== void 0 && (this.delay = z(e.delay));
        const n = e.detectRetina ?? e.retina_detect;
        n !== void 0 && (this.detectRetina = n), e.duration !== void 0 && (this.duration = z(e.duration));
        const i = e.fpsLimit ?? e.fps_limit;
        i !== void 0 && (this.fpsLimit = i), e.pauseOnBlur !== void 0 && (this.pauseOnBlur = e.pauseOnBlur), e.pauseOnOutsideViewport !== void 0 && (this.pauseOnOutsideViewport = e.pauseOnOutsideViewport), e.zLayers !== void 0 && (this.zLayers = e.zLayers), this.background.load(e.background);
        const s = e.fullScreen ?? e.backgroundMode;
        vn(s) ? this.fullScreen.enable = s : this.fullScreen.load(s), this.backgroundMask.load(e.backgroundMask), this.interactivity.load(e.interactivity), e.manualParticles && (this.manualParticles = e.manualParticles.map(l => {
            const u = new cb;
            return u.load(l), u
        })), this.particles.load(e.particles), this.style = ce(this.style, e.style), this._engine.plugins.loadOptions(this, e), e.smooth !== void 0 && (this.smooth = e.smooth);
        const r = this._engine.plugins.interactors.get(this._container);
        if (r)
            for (const l of r) l.loadOptions && l.loadOptions(this, e);
        if (e.responsive !== void 0)
            for (const l of e.responsive) {
                const u = new db;
                u.load(l), this.responsive.push(u)
            }
        if (this.responsive.sort((l, u) => l.maxWidth - u.maxWidth), e.themes !== void 0)
            for (const l of e.themes) {
                const u = this.themes.find(c => c.name === l.name);
                if (u) u.load(l);
                else {
                    const c = new hb;
                    c.load(l), this.themes.push(c)
                }
            }
        this.defaultThemes.dark = (o = this._findDefaultTheme("dark")) == null ? void 0 : o.name, this.defaultThemes.light = (a = this._findDefaultTheme("light")) == null ? void 0 : a.name
    }
    setResponsive(e, n, i) {
        this.load(i);
        const s = this.responsive.find(r => r.mode === "screen" && screen ? r.maxWidth > screen.availWidth : r.maxWidth * n > e);
        return this.load(s == null ? void 0 : s.options), s == null ? void 0 : s.maxWidth
    }
    setTheme(e) {
        if (e) {
            const n = this.themes.find(i => i.name === e);
            n && this.load(n.options)
        } else {
            const n = Ng("(prefers-color-scheme: dark)"),
                i = n && n.matches,
                s = this._findDefaultTheme(i ? "dark" : "light");
            s && this.load(s.options)
        }
    }
}
class Bb {
    constructor(e, n) {
        this.container = n, this._engine = e, this._interactors = e.plugins.getInteractors(this.container, !0), this._externalInteractors = [], this._particleInteractors = []
    }
    async externalInteract(e) {
        for (const n of this._externalInteractors) n.isEnabled() && await n.interact(e)
    }
    handleClickMode(e) {
        for (const n of this._externalInteractors) n.handleClickMode && n.handleClickMode(e)
    }
    init() {
        this._externalInteractors = [], this._particleInteractors = [];
        for (const e of this._interactors) {
            switch (e.type) {
                case "external":
                    this._externalInteractors.push(e);
                    break;
                case "particles":
                    this._particleInteractors.push(e);
                    break
            }
            e.init()
        }
    }
    async particlesInteract(e, n) {
        for (const i of this._externalInteractors) i.clear(e, n);
        for (const i of this._particleInteractors) i.isEnabled(e) && await i.interact(e, n)
    }
    async reset(e) {
        for (const n of this._externalInteractors) n.isEnabled() && n.reset(e);
        for (const n of this._particleInteractors) n.isEnabled(e) && n.reset(e)
    }
}
const Lf = t => {
    if (!Y(t.outMode, t.checkModes)) return;
    const e = t.radius * 2;
    t.coord > t.maxCoord - e ? t.setCb(-t.radius) : t.coord < e && t.setCb(t.radius)
};
class Ub {
    constructor(e, n, i, s, r, o) {
        this.container = i, this._calcPosition = (a, l, u, c = 0) => {
            for (const [, m] of a.plugins) {
                const v = m.particlePosition !== void 0 ? m.particlePosition(l, this) : void 0;
                if (v) return We.create(v.x, v.y, u)
            }
            const d = a.canvas.size,
                f = M1({
                    size: d,
                    position: l
                }),
                h = We.create(f.x, f.y, u),
                y = this.getRadius(),
                g = this.options.move.outModes,
                x = m => {
                    Lf({
                        outMode: m,
                        checkModes: ["bounce", "bounce-horizontal"],
                        coord: h.x,
                        maxCoord: a.canvas.size.width,
                        setCb: v => h.x += v,
                        radius: y
                    })
                },
                p = m => {
                    Lf({
                        outMode: m,
                        checkModes: ["bounce", "bounce-vertical"],
                        coord: h.y,
                        maxCoord: a.canvas.size.height,
                        setCb: v => h.y += v,
                        radius: y
                    })
                };
            return x(g.left ?? g.default), x(g.right ?? g.default), p(g.top ?? g.default), p(g.bottom ?? g.default), this._checkOverlap(h, c) ? this._calcPosition(a, void 0, u, c + 1) : h
        }, this._calculateVelocity = () => {
            const a = E1(this.direction),
                l = a.copy(),
                u = this.options.move;
            if (u.direction === "inside" || u.direction === "outside") return l;
            const c = Math.PI / 180 * E(u.angle.value),
                d = Math.PI / 180 * E(u.angle.offset),
                f = {
                    left: d - c / 2,
                    right: d + c / 2
                };
            return u.straight || (l.angle += ye(z(f.left, f.right))), u.random && typeof u.speed == "number" && (l.length *= F()), l
        }, this._checkOverlap = (a, l = 0) => {
            const u = this.options.collisions,
                c = this.getRadius();
            if (!u.enable) return !1;
            const d = u.overlap;
            if (d.enable) return !1;
            const f = d.retries;
            if (f >= 0 && l > f) throw new Error(`${ct} particle is overlapping and can't be placed`);
            return !!this.container.particles.find(h => Le(a, h.position) < c + h.getRadius())
        }, this._getRollColor = a => {
            if (!a || !this.roll || !this.backColor && !this.roll.alter) return a;
            const l = this.roll.horizontal && this.roll.vertical ? 2 : 1,
                u = this.roll.horizontal ? Math.PI / 2 : 0;
            return Math.floor(((this.roll.angle ?? 0) + u) / (Math.PI / l)) % 2 ? this.backColor ? this.backColor : this.roll.alter ? X1(a, this.roll.alter.type, this.roll.alter.value) : a : a
        }, this._initPosition = a => {
            const l = this.container,
                u = E(this.options.zIndex.value);
            this.position = this._calcPosition(l, a, xt(u, 0, l.zLayers)), this.initialPosition = this.position.copy();
            const c = l.canvas.size;
            switch (this.moveCenter = {
                    ...Hg(this.options.move.center, c),
                    radius: this.options.move.center.radius ?? 0,
                    mode: this.options.move.center.mode ?? "percent"
                }, this.direction = T1(this.options.move.direction, this.position, this.moveCenter), this.options.move.direction) {
                case "inside":
                    this.outType = "inside";
                    break;
                case "outside":
                    this.outType = "outside";
                    break
            }
            this.offset = G.origin
        }, this._loadShapeData = (a, l) => {
            const u = a.options[this.shape];
            if (u) return ce({
                close: a.close,
                fill: a.fill
            }, Ke(u, this.id, l))
        }, this._engine = e, this.init(n, s, r, o)
    }
    destroy(e) {
        if (this.unbreakable || this.destroyed) return;
        this.destroyed = !0, this.bubble.inRange = !1, this.slow.inRange = !1;
        const n = this.container,
            i = this.pathGenerator;
        for (const [, s] of n.plugins) s.particleDestroyed && s.particleDestroyed(this, e);
        for (const s of n.particles.updaters) s.particleDestroyed && s.particleDestroyed(this, e);
        i && i.reset(this)
    }
    draw(e) {
        const n = this.container;
        for (const [, i] of n.plugins) n.canvas.drawParticlePlugin(i, this, e);
        n.canvas.drawParticle(this, e)
    }
    getFillColor() {
        return this._getRollColor(this.bubble.color ?? zf(this.color))
    }
    getMass() {
        return this.getRadius() ** 2 * Math.PI / 2
    }
    getPosition() {
        return {
            x: this.position.x + this.offset.x,
            y: this.position.y + this.offset.y,
            z: this.position.z
        }
    }
    getRadius() {
        return this.bubble.radius ?? this.size.value
    }
    getStrokeColor() {
        return this._getRollColor(this.bubble.color ?? zf(this.strokeColor))
    }
    init(e, n, i, s) {
        const r = this.container,
            o = this._engine;
        this.id = e, this.group = s, this.fill = !0, this.pathRotation = !1, this.close = !0, this.lastPathTime = 0, this.destroyed = !1, this.unbreakable = !1, this.rotation = 0, this.misplaced = !1, this.retina = {
            maxDistance: {}
        }, this.outType = "normal", this.ignoresResizeRatio = !0;
        const a = r.retina.pixelRatio,
            l = r.actualOptions,
            u = _c(this._engine, r, l.particles),
            c = u.shape.type,
            {
                reduceDuplicates: d
            } = u;
        this.shape = Ke(c, this.id, d);
        const f = u.shape;
        if (i && i.shape && i.shape.type) {
            const v = i.shape.type,
                w = Ke(v, this.id, d);
            w && (this.shape = w, f.load(i.shape))
        }
        this.shapeData = this._loadShapeData(f, d), u.load(i);
        const h = this.shapeData;
        h && u.load(h.particles);
        const y = new Zg(o, r);
        y.load(r.actualOptions.interactivity), y.load(u.interactivity), this.interactivity = y, this.fill = (h == null ? void 0 : h.fill) ?? u.shape.fill, this.close = (h == null ? void 0 : h.close) ?? u.shape.close, this.options = u;
        const g = this.options.move.path;
        this.pathDelay = Kt(g.delay) * 1e3, g.generator && (this.pathGenerator = this._engine.plugins.getPathGenerator(g.generator), this.pathGenerator && r.addPath(g.generator, this.pathGenerator) && this.pathGenerator.init(r)), r.retina.initParticle(this), this.size = $g(this.options.size, a), this.bubble = {
            inRange: !1
        }, this.slow = {
            inRange: !1,
            factor: 1
        }, this._initPosition(n), this.initialVelocity = this._calculateVelocity(), this.velocity = this.initialVelocity.copy(), this.moveDecay = 1 - E(this.options.move.decay);
        const x = r.particles;
        x.needsSort = x.needsSort || x.lastZIndex < this.position.z, x.lastZIndex = this.position.z, this.zIndexFactor = this.position.z / r.zLayers, this.sides = 24;
        let p = r.drawers.get(this.shape);
        p || (p = this._engine.plugins.getShapeDrawer(this.shape), p && r.drawers.set(this.shape, p)), p && p.loadShape && p.loadShape(this);
        const m = p == null ? void 0 : p.getSidesCount;
        m && (this.sides = m(this)), this.spawning = !1, this.shadowColor = at(this.options.shadow.color);
        for (const v of r.particles.updaters) v.init(this);
        for (const v of r.particles.movers) v.init && v.init(this);
        p && p.particleInit && p.particleInit(r, this);
        for (const [, v] of r.plugins) v.particleCreated && v.particleCreated(this)
    }
    isInsideCanvas() {
        const e = this.getRadius(),
            n = this.container.canvas.size,
            i = this.position;
        return i.x >= -e && i.y >= -e && i.y <= n.height + e && i.x <= n.width + e
    }
    isVisible() {
        return !this.destroyed && !this.spawning && this.isInsideCanvas()
    }
    reset() {
        for (const e of this.container.particles.updaters) e.reset && e.reset(this)
    }
}
class $b {
    constructor(e, n) {
        this.position = e, this.particle = n
    }
}
class ny {
    constructor(e, n) {
        this.position = {
            x: e,
            y: n
        }
    }
}
class bt extends ny {
    constructor(e, n, i, s) {
        super(e, n), this.size = {
            height: s,
            width: i
        }
    }
    contains(e) {
        const n = this.size.width,
            i = this.size.height,
            s = this.position;
        return e.x >= s.x && e.x <= s.x + n && e.y >= s.y && e.y <= s.y + i
    }
    intersects(e) {
        e instanceof Re && e.intersects(this);
        const n = this.size.width,
            i = this.size.height,
            s = this.position,
            r = e.position,
            o = e instanceof bt ? e.size : {
                width: 0,
                height: 0
            },
            a = o.width,
            l = o.height;
        return r.x < s.x + n && r.x + a > s.x && r.y < s.y + i && r.y + l > s.y
    }
}
class Re extends ny {
    constructor(e, n, i) {
        super(e, n), this.radius = i
    }
    contains(e) {
        return Le(e, this.position) <= this.radius
    }
    intersects(e) {
        const n = this.position,
            i = e.position,
            s = {
                x: Math.abs(i.x - n.x),
                y: Math.abs(i.y - n.y)
            },
            r = this.radius;
        if (e instanceof Re) {
            const o = r + e.radius,
                a = Math.sqrt(s.x ** 2 + s.y ** 2);
            return o > a
        } else if (e instanceof bt) {
            const {
                width: o,
                height: a
            } = e.size;
            return Math.pow(s.x - o, 2) + Math.pow(s.y - a, 2) <= r ** 2 || s.x <= r + o && s.y <= r + a || s.x <= o || s.y <= a
        }
        return !1
    }
}
class wo {
    constructor(e, n) {
        this.rectangle = e, this.capacity = n, this._subdivide = () => {
            const {
                x: i,
                y: s
            } = this.rectangle.position, {
                width: r,
                height: o
            } = this.rectangle.size, {
                capacity: a
            } = this;
            for (let l = 0; l < 4; l++) this._subs.push(new wo(new bt(i + r / 2 * (l % 2), s + o / 2 * (Math.round(l / 2) - l % 2), r / 2, o / 2), a));
            this._divided = !0
        }, this._points = [], this._divided = !1, this._subs = []
    }
    insert(e) {
        return this.rectangle.contains(e.position) ? this._points.length < this.capacity ? (this._points.push(e), !0) : (this._divided || this._subdivide(), this._subs.some(n => n.insert(e))) : !1
    }
    query(e, n, i) {
        const s = i || [];
        if (!e.intersects(this.rectangle)) return [];
        for (const r of this._points) !e.contains(r.position) && Le(e.position, r.position) > r.particle.getRadius() && (!n || n(r.particle)) || s.push(r.particle);
        if (this._divided)
            for (const r of this._subs) r.query(e, n, s);
        return s
    }
    queryCircle(e, n, i) {
        return this.query(new Re(e.x, e.y, n), i)
    }
    queryRectangle(e, n, i) {
        return this.query(new bt(e.x, e.y, n.width, n.height), i)
    }
}
const If = 4,
    Ff = t => new bt(-t.width / 4, -t.height / 4, t.width * 3 / 2, t.height * 3 / 2);
let Wb = class {
    constructor(e, n) {
        this._applyDensity = (s, r, o) => {
            var h;
            if (!((h = s.number.density) != null && h.enable)) return;
            const a = s.number,
                l = this._initDensityFactor(a.density),
                u = a.value,
                c = a.limit > 0 ? a.limit : u,
                d = Math.min(u, c) * l + r,
                f = Math.min(this.count, this.filter(y => y.group === o).length);
            this.limit = a.limit * l, f < d ? this.push(Math.abs(d - f), void 0, s, o) : f > d && this.removeQuantity(f - d, o)
        }, this._initDensityFactor = s => {
            const r = this._container;
            if (!r.canvas.element || !s.enable) return 1;
            const o = r.canvas.element,
                a = r.retina.pixelRatio;
            return o.width * o.height / (s.factor * a ** 2 * s.area)
        }, this._pushParticle = (s, r, o, a) => {
            try {
                let l = this.pool.pop();
                l ? l.init(this._nextId, s, r, o) : l = new Ub(this._engine, this._nextId, this._container, s, r, o);
                let u = !0;
                return a && (u = a(l)), u ? (this._array.push(l), this._zArray.push(l), this._nextId++, this._engine.dispatchEvent("particleAdded", {
                    container: this._container,
                    data: {
                        particle: l
                    }
                }), l) : void 0
            } catch (l) {
                Zn().warning(`${ct} adding particle: ${l}`);
                return
            }
        }, this._removeParticle = (s, r, o) => {
            const a = this._array[s];
            if (!a || a.group !== r) return !1;
            a.destroy(o);
            const l = this._zArray.indexOf(a);
            return this._array.splice(s, 1), this._zArray.splice(l, 1), this.pool.push(a), this._engine.dispatchEvent("particleRemoved", {
                container: this._container,
                data: {
                    particle: a
                }
            }), !0
        }, this._engine = e, this._container = n, this._nextId = 0, this._array = [], this._zArray = [], this.pool = [], this.limit = 0, this.needsSort = !1, this.lastZIndex = 0, this._interactionManager = new Bb(e, n);
        const i = n.canvas.size;
        this.quadTree = new wo(Ff(i), If), this.movers = this._engine.plugins.getMovers(n, !0), this.updaters = this._engine.plugins.getUpdaters(n, !0)
    }
    get count() {
        return this._array.length
    }
    addManualParticles() {
        const e = this._container,
            n = e.actualOptions;
        for (const i of n.manualParticles) this.addParticle(i.position ? Hg(i.position, e.canvas.size) : void 0, i.options)
    }
    addParticle(e, n, i, s) {
        const r = this._container,
            o = r.actualOptions,
            a = o.particles.number.limit;
        if (a > 0) {
            const l = this.count + 1 - a;
            l > 0 && this.removeQuantity(l)
        }
        return this._pushParticle(e, n, i, s)
    }
    clear() {
        this._array = [], this._zArray = []
    }
    destroy() {
        this._array = [], this._zArray = [], this.movers = [], this.updaters = []
    }
    async draw(e) {
        const n = this._container;
        n.canvas.clear(), await this.update(e);
        for (const [, i] of n.plugins) n.canvas.drawPlugin(i, e);
        for (const i of this._zArray) i.draw(e)
    }
    filter(e) {
        return this._array.filter(e)
    }
    find(e) {
        return this._array.find(e)
    }
    handleClickMode(e) {
        this._interactionManager.handleClickMode(e)
    }
    init() {
        var s;
        const e = this._container,
            n = e.actualOptions;
        this.lastZIndex = 0, this.needsSort = !1;
        let i = !1;
        this.updaters = this._engine.plugins.getUpdaters(e, !0), this._interactionManager.init();
        for (const [, r] of e.plugins)
            if (r.particlesInitialization !== void 0 && (i = r.particlesInitialization()), i) break;
        this._interactionManager.init();
        for (const [, r] of e.pathGenerators) r.init(e);
        if (this.addManualParticles(), !i) {
            for (const r in n.particles.groups) {
                const o = n.particles.groups[r];
                for (let a = this.count, l = 0; l < ((s = o.number) == null ? void 0 : s.value) && a < n.particles.number.value; a++, l++) this.addParticle(void 0, o, r)
            }
            for (let r = this.count; r < n.particles.number.value; r++) this.addParticle()
        }
    }
    push(e, n, i, s) {
        this.pushing = !0;
        for (let r = 0; r < e; r++) this.addParticle(n == null ? void 0 : n.position, i, s);
        this.pushing = !1
    }
    async redraw() {
        this.clear(), this.init(), await this.draw({
            value: 0,
            factor: 0
        })
    }
    remove(e, n, i) {
        this.removeAt(this._array.indexOf(e), void 0, n, i)
    }
    removeAt(e, n = 1, i, s) {
        if (e < 0 || e > this.count) return;
        let r = 0;
        for (let o = e; r < n && o < this.count; o++) this._removeParticle(o--, i, s) && r++
    }
    removeQuantity(e, n) {
        this.removeAt(0, e, n)
    }
    setDensity() {
        const e = this._container.actualOptions,
            n = e.particles.groups;
        for (const i in n) this._applyDensity(n[i], 0, i);
        this._applyDensity(e.particles, e.manualParticles.length)
    }
    async update(e) {
        const n = this._container,
            i = new Set;
        this.quadTree = new wo(Ff(n.canvas.size), If);
        for (const [, s] of n.pathGenerators) s.update();
        for (const [, s] of n.plugins) s.update && s.update(e);
        for (const s of this._array) {
            const r = n.canvas.resizeFactor;
            r && !s.ignoresResizeRatio && (s.position.x *= r.width, s.position.y *= r.height, s.initialPosition.x *= r.width, s.initialPosition.y *= r.height), s.ignoresResizeRatio = !1, await this._interactionManager.reset(s);
            for (const [, o] of this._container.plugins) {
                if (s.destroyed) break;
                o.particleUpdate && o.particleUpdate(s, e)
            }
            for (const o of this.movers) o.isEnabled(s) && o.move(s, e);
            if (s.destroyed) {
                i.add(s);
                continue
            }
            this.quadTree.insert(new $b(s.getPosition(), s))
        }
        if (i.size) {
            const s = r => !i.has(r);
            this._array = this.filter(s), this._zArray = this._zArray.filter(s), this.pool.push(...i)
        }
        await this._interactionManager.externalInteract(e);
        for (const s of this._array) {
            for (const r of this.updaters) r.update(s, e);
            !s.destroyed && !s.spawning && await this._interactionManager.particlesInteract(s, e)
        }
        if (delete n.canvas.resizeFactor, this.needsSort) {
            const s = this._zArray;
            s.sort((r, o) => o.position.z - r.position.z || r.id - o.id), this.lastZIndex = s[s.length - 1].position.z, this.needsSort = !1
        }
    }
};
class Hb {
    constructor(e) {
        this.container = e, this.pixelRatio = 1, this.reduceFactor = 1
    }
    init() {
        const e = this.container,
            n = e.actualOptions;
        this.pixelRatio = !n.detectRetina || Ni() ? 1 : window.devicePixelRatio, this.reduceFactor = 1;
        const i = this.pixelRatio;
        if (e.canvas.element) {
            const o = e.canvas.element;
            e.canvas.size.width = o.offsetWidth * i, e.canvas.size.height = o.offsetHeight * i
        }
        const s = n.particles,
            r = s.move;
        this.attractDistance = E(r.attract.distance) * i, this.maxSpeed = E(r.gravity.maxSpeed) * i, this.sizeAnimationSpeed = E(s.size.animation.speed) * i
    }
    initParticle(e) {
        const n = e.options,
            i = this.pixelRatio,
            s = n.move,
            r = s.distance,
            o = e.retina;
        o.attractDistance = E(s.attract.distance) * i, o.moveDrift = E(s.drift) * i, o.moveSpeed = E(s.speed) * i, o.sizeAnimationSpeed = E(n.size.animation.speed) * i;
        const a = o.maxDistance;
        a.horizontal = r.horizontal !== void 0 ? r.horizontal * i : void 0, a.vertical = r.vertical !== void 0 ? r.vertical * i : void 0, o.maxSpeed = E(s.gravity.maxSpeed) * i
    }
}

function ee(t) {
    return t && !t.destroyed
}

function Gb(t, e = 60, n = !1) {
    return {
        value: t,
        factor: n ? 60 / e : 60 * t / 1e3
    }
}

function ii(t, e, ...n) {
    const i = new jb(t, e);
    return ty(i, ...n), i
}
const qb = "default",
    Nf = {
        generate: t => t.velocity,
        init: () => {},
        update: () => {},
        reset: () => {}
    };
class Kb {
    constructor(e, n, i) {
        this.id = n, this._intersectionManager = s => {
            if (!(!ee(this) || !this.actualOptions.pauseOnOutsideViewport))
                for (const r of s) r.target === this.interactivity.element && (r.isIntersecting ? this.play : this.pause)()
        }, this._nextFrame = async s => {
            try {
                if (!this.smooth && this.lastFrameTime !== void 0 && s < this.lastFrameTime + 1e3 / this.fpsLimit) {
                    this.draw(!1);
                    return
                }
                this.lastFrameTime ?? (this.lastFrameTime = s);
                const r = Gb(s - this.lastFrameTime, this.fpsLimit, this.smooth);
                if (this.addLifeTime(r.value), this.lastFrameTime = s, r.value > 1e3) {
                    this.draw(!1);
                    return
                }
                if (await this.particles.draw(r), !this.alive()) {
                    this.destroy();
                    return
                }
                this.getAnimationStatus() && this.draw(!1)
            } catch (r) {
                Zn().error(`${ct} in animation loop`, r)
            }
        }, this._engine = e, this.fpsLimit = 120, this.smooth = !1, this._delay = 0, this._duration = 0, this._lifeTime = 0, this._firstStart = !0, this.started = !1, this.destroyed = !1, this._paused = !0, this.lastFrameTime = 0, this.zLayers = 100, this.pageHidden = !1, this._sourceOptions = i, this._initialSourceOptions = i, this.retina = new Hb(this), this.canvas = new Z1(this), this.particles = new Wb(this._engine, this), this.pathGenerators = new Map, this.interactivity = {
            mouse: {
                clicking: !1,
                inside: !1
            }
        }, this.plugins = new Map, this.drawers = new Map, this._options = ii(this._engine, this), this.actualOptions = ii(this._engine, this), this._eventListeners = new J1(this), typeof IntersectionObserver < "u" && IntersectionObserver && (this._intersectionObserver = new IntersectionObserver(s => this._intersectionManager(s))), this._engine.dispatchEvent("containerBuilt", {
            container: this
        })
    }
    get options() {
        return this._options
    }
    get sourceOptions() {
        return this._sourceOptions
    }
    addClickHandler(e) {
        if (!ee(this)) return;
        const n = this.interactivity.element;
        if (!n) return;
        const i = (d, f, h) => {
                if (!ee(this)) return;
                const y = this.retina.pixelRatio,
                    g = {
                        x: f.x * y,
                        y: f.y * y
                    },
                    x = this.particles.quadTree.queryCircle(g, h * y);
                e(d, x)
            },
            s = d => {
                if (!ee(this)) return;
                const f = d,
                    h = {
                        x: f.offsetX || f.clientX,
                        y: f.offsetY || f.clientY
                    };
                i(d, h, 1)
            },
            r = () => {
                ee(this) && (u = !0, c = !1)
            },
            o = () => {
                ee(this) && (c = !0)
            },
            a = d => {
                if (ee(this)) {
                    if (u && !c) {
                        const f = d;
                        let h = f.touches[f.touches.length - 1];
                        if (!h && (h = f.changedTouches[f.changedTouches.length - 1], !h)) return;
                        const y = this.canvas.element,
                            g = y ? y.getBoundingClientRect() : void 0,
                            x = {
                                x: h.clientX - (g ? g.left : 0),
                                y: h.clientY - (g ? g.top : 0)
                            };
                        i(d, x, Math.max(h.radiusX, h.radiusY))
                    }
                    u = !1, c = !1
                }
            },
            l = () => {
                ee(this) && (u = !1, c = !1)
            };
        let u = !1,
            c = !1;
        n.addEventListener("click", s), n.addEventListener("touchstart", r), n.addEventListener("touchmove", o), n.addEventListener("touchend", a), n.addEventListener("touchcancel", l)
    }
    addLifeTime(e) {
        this._lifeTime += e
    }
    addPath(e, n, i = !1) {
        return !ee(this) || !i && this.pathGenerators.has(e) ? !1 : (this.pathGenerators.set(e, n ?? Nf), !0)
    }
    alive() {
        return !this._duration || this._lifeTime <= this._duration
    }
    destroy() {
        if (!ee(this)) return;
        this.stop(), this.particles.destroy(), this.canvas.destroy();
        for (const [, i] of this.drawers) i.destroy && i.destroy(this);
        for (const i of this.drawers.keys()) this.drawers.delete(i);
        this._engine.plugins.destroy(this), this.destroyed = !0;
        const e = this._engine.dom(),
            n = e.findIndex(i => i === this);
        n >= 0 && e.splice(n, 1), this._engine.dispatchEvent("containerDestroyed", {
            container: this
        })
    }
    draw(e) {
        if (!ee(this)) return;
        let n = e;
        this._drawAnimationFrame = requestAnimationFrame(async i => {
            n && (this.lastFrameTime = void 0, n = !1), await this._nextFrame(i)
        })
    }
    async export (e, n = {}) {
        for (const [, i] of this.plugins) {
            if (!i.export) continue;
            const s = await i.export(e, n);
            if (s.supported) return s.blob
        }
        Zn().error(`${ct} - Export plugin with type ${e} not found`)
    }
    getAnimationStatus() {
        return !this._paused && !this.pageHidden && ee(this)
    }
    handleClickMode(e) {
        if (ee(this)) {
            this.particles.handleClickMode(e);
            for (const [, n] of this.plugins) n.handleClickMode && n.handleClickMode(e)
        }
    }
    async init() {
        if (!ee(this)) return;
        const e = this._engine.plugins.getSupportedShapes();
        for (const i of e) {
            const s = this._engine.plugins.getShapeDrawer(i);
            s && this.drawers.set(i, s)
        }
        this._options = ii(this._engine, this, this._initialSourceOptions, this.sourceOptions), this.actualOptions = ii(this._engine, this, this._options);
        const n = this._engine.plugins.getAvailablePlugins(this);
        for (const [i, s] of n) this.plugins.set(i, s);
        this.retina.init(), await this.canvas.init(), this.updateActualOptions(), this.canvas.initBackground(), this.canvas.resize(), this.zLayers = this.actualOptions.zLayers, this._duration = E(this.actualOptions.duration) * 1e3, this._delay = E(this.actualOptions.delay) * 1e3, this._lifeTime = 0, this.fpsLimit = this.actualOptions.fpsLimit > 0 ? this.actualOptions.fpsLimit : 120, this.smooth = this.actualOptions.smooth;
        for (const [, i] of this.drawers) i.init && await i.init(this);
        for (const [, i] of this.plugins) i.init && await i.init();
        this._engine.dispatchEvent("containerInit", {
            container: this
        }), this.particles.init(), this.particles.setDensity();
        for (const [, i] of this.plugins) i.particlesSetup && i.particlesSetup();
        this._engine.dispatchEvent("particlesSetup", {
            container: this
        })
    }
    async loadTheme(e) {
        ee(this) && (this._currentTheme = e, await this.refresh())
    }
    pause() {
        if (ee(this) && (this._drawAnimationFrame !== void 0 && (cancelAnimationFrame(this._drawAnimationFrame), delete this._drawAnimationFrame), !this._paused)) {
            for (const [, e] of this.plugins) e.pause && e.pause();
            this.pageHidden || (this._paused = !0), this._engine.dispatchEvent("containerPaused", {
                container: this
            })
        }
    }
    play(e) {
        if (!ee(this)) return;
        const n = this._paused || e;
        if (this._firstStart && !this.actualOptions.autoPlay) {
            this._firstStart = !1;
            return
        }
        if (this._paused && (this._paused = !1), n)
            for (const [, i] of this.plugins) i.play && i.play();
        this._engine.dispatchEvent("containerPlay", {
            container: this
        }), this.draw(n || !1)
    }
    async refresh() {
        if (ee(this)) return this.stop(), this.start()
    }
    async reset() {
        if (ee(this)) return this._initialSourceOptions = void 0, this._options = ii(this._engine, this), this.actualOptions = ii(this._engine, this, this._options), this.refresh()
    }
    setNoise(e, n, i) {
        ee(this) && this.setPath(e, n, i)
    }
    setPath(e, n, i) {
        if (!e || !ee(this)) return;
        const s = {
            ...Nf
        };
        if (Gg(e)) s.generate = e, n && (s.init = n), i && (s.update = i);
        else {
            const r = s;
            s.generate = e.generate || r.generate, s.init = e.init || r.init, s.update = e.update || r.update
        }
        this.addPath(qb, s, !0)
    }
    async start() {
        !ee(this) || this.started || (await this.init(), this.started = !0, await new Promise(e => {
            this._delayTimeout = setTimeout(async () => {
                this._eventListeners.addListeners(), this.interactivity.element instanceof HTMLElement && this._intersectionObserver && this._intersectionObserver.observe(this.interactivity.element);
                for (const [, n] of this.plugins) n.start && await n.start();
                this._engine.dispatchEvent("containerStarted", {
                    container: this
                }), this.play(), e()
            }, this._delay)
        }))
    }
    stop() {
        if (!(!ee(this) || !this.started)) {
            this._delayTimeout && (clearTimeout(this._delayTimeout), delete this._delayTimeout), this._firstStart = !0, this.started = !1, this._eventListeners.removeListeners(), this.pause(), this.particles.clear(), this.canvas.stop(), this.interactivity.element instanceof HTMLElement && this._intersectionObserver && this._intersectionObserver.unobserve(this.interactivity.element);
            for (const [, e] of this.plugins) e.stop && e.stop();
            for (const e of this.plugins.keys()) this.plugins.delete(e);
            this._sourceOptions = this._options, this._engine.dispatchEvent("containerStopped", {
                container: this
            })
        }
    }
    updateActualOptions() {
        this.actualOptions.responsive = [];
        const e = this.actualOptions.setResponsive(this.canvas.size.width, this.retina.pixelRatio, this._options);
        return this.actualOptions.setTheme(this._currentTheme), this.responsiveMaxWidth === e ? !1 : (this.responsiveMaxWidth = e, !0)
    }
}
class Qb {
    constructor() {
        this._listeners = new Map
    }
    addEventListener(e, n) {
        this.removeEventListener(e, n);
        let i = this._listeners.get(e);
        i || (i = [], this._listeners.set(e, i)), i.push(n)
    }
    dispatchEvent(e, n) {
        const i = this._listeners.get(e);
        i && i.forEach(s => s(n))
    }
    hasEventListener(e) {
        return !!this._listeners.get(e)
    }
    removeAllEventListeners(e) {
        e ? this._listeners.delete(e) : this._listeners = new Map
    }
    removeEventListener(e, n) {
        const i = this._listeners.get(e);
        if (!i) return;
        const s = i.length,
            r = i.indexOf(n);
        r < 0 || (s === 1 ? this._listeners.delete(e) : i.splice(r, 1))
    }
}

function $a(t, e, n, i = !1) {
    let s = e.get(t);
    return (!s || i) && (s = [...n.values()].map(r => r(t)), e.set(t, s)), s
}
class Xb {
    constructor(e) {
        this._engine = e, this.plugins = [], this._initializers = {
            interactors: new Map,
            movers: new Map,
            updaters: new Map
        }, this.interactors = new Map, this.movers = new Map, this.updaters = new Map, this.presets = new Map, this.drawers = new Map, this.pathGenerators = new Map
    }
    addInteractor(e, n) {
        this._initializers.interactors.set(e, n)
    }
    addParticleMover(e, n) {
        this._initializers.movers.set(e, n)
    }
    addParticleUpdater(e, n) {
        this._initializers.updaters.set(e, n)
    }
    addPathGenerator(e, n) {
        !this.getPathGenerator(e) && this.pathGenerators.set(e, n)
    }
    addPlugin(e) {
        !this.getPlugin(e.id) && this.plugins.push(e)
    }
    addPreset(e, n, i = !1) {
        (i || !this.getPreset(e)) && this.presets.set(e, n)
    }
    addShapeDrawer(e, n) {
        Z(e, i => {
            !this.getShapeDrawer(i) && this.drawers.set(i, n)
        })
    }
    destroy(e) {
        this.updaters.delete(e), this.movers.delete(e), this.interactors.delete(e)
    }
    getAvailablePlugins(e) {
        const n = new Map;
        for (const i of this.plugins) i.needsPlugin(e.actualOptions) && n.set(i.id, i.getPlugin(e));
        return n
    }
    getInteractors(e, n = !1) {
        return $a(e, this.interactors, this._initializers.interactors, n)
    }
    getMovers(e, n = !1) {
        return $a(e, this.movers, this._initializers.movers, n)
    }
    getPathGenerator(e) {
        return this.pathGenerators.get(e)
    }
    getPlugin(e) {
        return this.plugins.find(n => n.id === e)
    }
    getPreset(e) {
        return this.presets.get(e)
    }
    getShapeDrawer(e) {
        return this.drawers.get(e)
    }
    getSupportedShapes() {
        return this.drawers.keys()
    }
    getUpdaters(e, n = !1) {
        return $a(e, this.updaters, this._initializers.updaters, n)
    }
    loadOptions(e, n) {
        for (const i of this.plugins) i.loadOptions(e, n)
    }
    loadParticlesOptions(e, n, ...i) {
        const s = this.updaters.get(e);
        if (s)
            for (const r of s) r.loadOptions && r.loadOptions(n, ...i)
    }
}
async function Yb(t) {
    const e = Ke(t.url, t.index);
    if (!e) return t.fallback;
    const n = await fetch(e);
    return n.ok ? n.json() : (Zn().error(`${ct} ${n.status} while retrieving config file`), t.fallback)
}

function Zb(t) {
    return !t.id && !t.element && !t.url && !t.options
}

function Jb(t) {
    return !Zb(t)
}
class ek {
    constructor() {
        this._configs = new Map, this._domArray = [], this._eventDispatcher = new Qb, this._initialized = !1, this.plugins = new Xb(this)
    }
    get configs() {
        const e = {};
        for (const [n, i] of this._configs) e[n] = i;
        return e
    }
    get version() {
        return "2.12.0"
    }
    addConfig(e, n) {
        vt(e) ? n && (n.name = e, this._configs.set(e, n)) : this._configs.set(e.name ?? "default", e)
    }
    addEventListener(e, n) {
        this._eventDispatcher.addEventListener(e, n)
    }
    async addInteractor(e, n, i = !0) {
        this.plugins.addInteractor(e, n), await this.refresh(i)
    }
    async addMover(e, n, i = !0) {
        this.plugins.addParticleMover(e, n), await this.refresh(i)
    }
    async addParticleUpdater(e, n, i = !0) {
        this.plugins.addParticleUpdater(e, n), await this.refresh(i)
    }
    async addPathGenerator(e, n, i = !0) {
        this.plugins.addPathGenerator(e, n), await this.refresh(i)
    }
    async addPlugin(e, n = !0) {
        this.plugins.addPlugin(e), await this.refresh(n)
    }
    async addPreset(e, n, i = !1, s = !0) {
        this.plugins.addPreset(e, n, i), await this.refresh(s)
    }
    async addShape(e, n, i, s, r, o = !0) {
        let a, l = o,
            u, c, d;
        vn(i) ? (l = i, u = void 0) : u = i, vn(s) ? (l = s, c = void 0) : c = s, vn(r) ? (l = r, d = void 0) : d = r, Gg(n) ? a = {
            afterEffect: c,
            destroy: d,
            draw: n,
            init: u
        } : a = n, this.plugins.addShapeDrawer(e, a), await this.refresh(l)
    }
    dispatchEvent(e, n) {
        this._eventDispatcher.dispatchEvent(e, n)
    }
    dom() {
        return this._domArray
    }
    domItem(e) {
        const n = this.dom(),
            i = n[e];
        if (!i || i.destroyed) {
            n.splice(e, 1);
            return
        }
        return i
    }
    init() {
        this._initialized || (this._initialized = !0)
    }
    async load(e, n) {
        return this.loadFromArray(e, n)
    }
    async loadFromArray(e, n, i) {
        let s;
        return Jb(e) ? s = e : (s = {}, vt(e) ? s.id = e : s.options = e, Me(n) ? s.index = n : s.options = n ?? s.options, s.index = i ?? s.index), this._loadParams(s)
    }
    async loadJSON(e, n, i) {
        let s, r;
        return Me(n) || n === void 0 ? s = e : (r = e, s = n), this._loadParams({
            id: r,
            url: s,
            index: i
        })
    }
    async refresh(e = !0) {
        e && this.dom().forEach(n => n.refresh())
    }
    removeEventListener(e, n) {
        this._eventDispatcher.removeEventListener(e, n)
    }
    async set(e, n, i, s) {
        const r = {
            index: s
        };
        return vt(e) ? r.id = e : r.element = e, n instanceof HTMLElement ? r.element = n : r.options = n, Me(i) ? r.index = i : r.options = i ?? r.options, this._loadParams(r)
    }
    async setJSON(e, n, i, s) {
        const r = {};
        return e instanceof HTMLElement ? (r.element = e, r.url = n, r.index = i) : (r.id = e, r.element = n, r.url = i, r.index = s), this._loadParams(r)
    }
    setOnClickHandler(e) {
        const n = this.dom();
        if (!n.length) throw new Error(`${ct} can only set click handlers after calling tsParticles.load()`);
        for (const i of n) i.addClickHandler(e)
    }
    async _loadParams(e) {
        const n = e.id ?? `tsparticles${Math.floor(F()*1e4)}`,
            {
                index: i,
                url: s
            } = e,
            r = s ? await Yb({
                fallback: e.options,
                url: s,
                index: i
            }) : e.options;
        let o = e.element ?? document.getElementById(n);
        o || (o = document.createElement("div"), o.id = n, document.body.append(o));
        const a = Ke(r, i),
            l = this.dom(),
            u = l.findIndex(f => f.id === n);
        if (u >= 0) {
            const f = this.domItem(u);
            f && !f.destroyed && (f.destroy(), l.splice(u, 1))
        }
        let c;
        if (o.tagName.toLowerCase() === "canvas") c = o, c.dataset[Ss] = "false";
        else {
            const f = o.getElementsByTagName("canvas");
            f.length ? (c = f[0], c.dataset[Ss] = "false") : (c = document.createElement("canvas"), c.dataset[Ss] = "true", o.appendChild(c))
        }
        c.style.width || (c.style.width = "100%"), c.style.height || (c.style.height = "100%");
        const d = new Kb(this, n, a);
        return u >= 0 ? l.splice(u, 0, d) : l.push(d), d.canvas.loadCanvas(c), await d.start(), d
    }
}
class tk {
    constructor() {
        this.key = "hsl", this.stringPrefix = "hsl"
    }
    handleColor(e) {
        const n = e.value,
            i = n.hsl ?? e.value;
        if (i.h !== void 0 && i.s !== void 0 && i.l !== void 0) return Vi(i)
    }
    handleRangeColor(e) {
        const n = e.value,
            i = n.hsl ?? e.value;
        if (i.h !== void 0 && i.l !== void 0) return Vi({
            h: E(i.h),
            l: E(i.l),
            s: E(i.s)
        })
    }
    parseString(e) {
        if (!e.startsWith("hsl")) return;
        const n = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.%]+)\s*)?\)/i,
            i = n.exec(e);
        return i ? B1({
            a: i.length > 4 ? Fg(i[5]) : 1,
            h: parseInt(i[1], 10),
            l: parseInt(i[3], 10),
            s: parseInt(i[2], 10)
        }) : void 0
    }
}
class nk {
    constructor() {
        this.key = "rgb", this.stringPrefix = "rgb"
    }
    handleColor(e) {
        const n = e.value,
            i = n.rgb ?? e.value;
        if (i.r !== void 0) return i
    }
    handleRangeColor(e) {
        const n = e.value,
            i = n.rgb ?? e.value;
        if (i.r !== void 0) return {
            r: E(i.r),
            g: E(i.g),
            b: E(i.b)
        }
    }
    parseString(e) {
        if (!e.startsWith(this.stringPrefix)) return;
        const n = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.%]+)\s*)?\)/i,
            i = n.exec(e);
        return i ? {
            a: i.length > 4 ? Fg(i[5]) : 1,
            b: parseInt(i[3], 10),
            g: parseInt(i[2], 10),
            r: parseInt(i[1], 10)
        } : void 0
    }
}

function ik() {
    const t = new nk,
        e = new tk;
    Rf(t), Rf(e);
    const n = new ek;
    return n.init(), n
}
class kt {
    constructor(e) {
        this.container = e, this.type = "external"
    }
}
class Tc {
    constructor(e) {
        this.container = e, this.type = "particles"
    }
}
const xo = ik();
Ni() || (window.tsParticles = xo);
const yi = t => typeof t == "object" && t !== null;

function bo(t, e, n = () => !1) {
    if (!yi(t) || !yi(e)) return t === e;
    const i = Object.keys(t).filter(r => !n(r)),
        s = Object.keys(e).filter(r => !n(r));
    if (i.length !== s.length) return !1;
    for (const r of i) {
        const o = t[r],
            a = e[r];
        if (yi(o) && yi(a)) {
            if (o === e && a === t) continue;
            if (!bo(o, a, n)) return !1
        } else if (Array.isArray(o) && Array.isArray(a)) {
            if (!iy(o, a, n)) return !1
        } else if (o !== a) return !1
    }
    return !0
}

function iy(t, e, n) {
    if (t.length !== e.length) return !1;
    for (let i = 0; i < t.length; i++) {
        const s = t[i],
            r = e[i];
        if (Array.isArray(s) && Array.isArray(r)) {
            if (!iy(s, r, n)) return !1
        } else if (yi(s) && yi(r)) {
            if (!bo(s, r, n)) return !1
        } else if (s !== r) return !1
    }
    return !0
}
const sy = "tsparticles";
let ry = class oy extends k.Component {
    constructor(e) {
        super(e), this.state = {
            init: !1,
            library: void 0
        }
    }
    destroy() {
        this.state.library && (this.state.library.destroy(), this.setState({
            library: void 0
        }))
    }
    shouldComponentUpdate(e) {
        const n = e.options ?? e.params,
            i = this.props.options ?? this.props.params;
        return e.url !== this.props.url || e.id !== this.props.id || e.canvasClassName !== this.props.canvasClassName || e.className !== this.props.className || e.height !== this.props.height || e.width !== this.props.width || !bo(e.style, this.props.style) || e.init !== this.props.init || e.loaded !== this.props.loaded || !bo(n, i, s => s.startsWith("_"))
    }
    componentDidUpdate() {
        this.refresh()
    }
    forceUpdate() {
        this.refresh().then(() => {
            super.forceUpdate()
        })
    }
    componentDidMount() {
        (async () => (this.props.init && await this.props.init(xo), this.setState({
            init: !0
        }, async () => {
            await this.loadParticles()
        })))()
    }
    componentWillUnmount() {
        this.destroy()
    }
    render() {
        const {
            width: e,
            height: n,
            className: i,
            canvasClassName: s,
            id: r
        } = this.props;
        return ll.createElement("div", {
            className: i,
            id: r
        }, ll.createElement("canvas", {
            className: s,
            style: {
                ...this.props.style,
                width: e,
                height: n
            }
        }))
    }
    async refresh() {
        this.destroy(), await this.loadParticles()
    }
    async loadParticles() {
        if (!this.state.init) return;
        const e = this.props.id ?? oy.defaultProps.id ?? sy,
            n = await xo.load({
                url: this.props.url,
                id: e,
                options: this.props.options ?? this.props.params
            });
        this.props.container && (this.props.container.current = n), this.setState({
            library: n
        }), this.props.loaded && await this.props.loaded(n)
    }
};
ry.defaultProps = {
    width: "100%",
    height: "100%",
    options: {},
    style: {},
    url: void 0,
    id: sy
};
class sk {
    constructor() {
        this.radius = 0, this.mass = 0
    }
    load(e) {
        e && (e.mass !== void 0 && (this.mass = e.mass), e.radius !== void 0 && (this.radius = e.radius))
    }
}
class rk extends dt {
    constructor() {
        super(), this.density = 5, this.value = 50, this.limit = new sk
    }
    load(e) {
        e && (super.load(e), e.density !== void 0 && (this.density = e.density), Me(e.limit) ? this.limit.radius = e.limit : this.limit.load(e.limit))
    }
}
class ko {
    constructor() {
        this.color = new ae, this.color.value = "#000000", this.draggable = !1, this.opacity = 1, this.destroy = !0, this.orbits = !1, this.size = new rk
    }
    load(e) {
        e !== void 0 && (e.color !== void 0 && (this.color = ae.create(this.color, e.color)), e.draggable !== void 0 && (this.draggable = e.draggable), this.name = e.name, e.opacity !== void 0 && (this.opacity = e.opacity), e.position !== void 0 && (this.position = {}, e.position.x !== void 0 && (this.position.x = z(e.position.x)), e.position.y !== void 0 && (this.position.y = z(e.position.y))), e.size !== void 0 && this.size.load(e.size), e.destroy !== void 0 && (this.destroy = e.destroy), e.orbits !== void 0 && (this.orbits = e.orbits))
    }
}
class ok {
    constructor(e, n, i, s) {
        var o;
        this.absorbers = e, this.container = n, this._calcPosition = () => {
            const a = Ig({
                size: this.container.canvas.size,
                position: this.options.position
            });
            return G.create(a.x, a.y)
        }, this._updateParticlePosition = (a, l) => {
            if (a.destroyed) return;
            const u = this.container,
                c = u.canvas.size;
            if (a.needsNewPosition) {
                const d = Lg({
                    size: c
                });
                a.position.setTo(d), a.velocity.setTo(a.initialVelocity), a.absorberOrbit = void 0, a.needsNewPosition = !1
            }
            if (this.options.orbits) {
                if (a.absorberOrbit === void 0 && (a.absorberOrbit = G.create(0, 0), a.absorberOrbit.length = Le(a.getPosition(), this.position), a.absorberOrbit.angle = F() * Math.PI * 2), a.absorberOrbit.length <= this.size && !this.options.destroy) {
                    const g = Math.min(c.width, c.height);
                    a.absorberOrbit.length = g * (1 + (F() * .2 - .1))
                }
                a.absorberOrbitDirection === void 0 && (a.absorberOrbitDirection = a.velocity.x >= 0 ? "clockwise" : "counter-clockwise");
                const d = a.absorberOrbit.length,
                    f = a.absorberOrbit.angle,
                    h = a.absorberOrbitDirection;
                a.velocity.setTo(G.origin);
                const y = {
                    x: h === "clockwise" ? Math.cos : Math.sin,
                    y: h === "clockwise" ? Math.sin : Math.cos
                };
                a.position.x = this.position.x + d * y.x(f), a.position.y = this.position.y + d * y.y(f), a.absorberOrbit.length -= l.length, a.absorberOrbit.angle += (a.retina.moveSpeed ?? 0) * u.retina.pixelRatio / 100 * u.retina.reduceFactor
            } else {
                const d = G.origin;
                d.length = l.length, d.angle = l.angle, a.velocity.addTo(d)
            }
        }, this.initialPosition = s ? G.create(s.x, s.y) : void 0, i instanceof ko ? this.options = i : (this.options = new ko, this.options.load(i)), this.dragging = !1, this.name = this.options.name, this.opacity = this.options.opacity, this.size = E(this.options.size.value) * n.retina.pixelRatio, this.mass = this.size * this.options.size.density * n.retina.reduceFactor;
        const r = this.options.size.limit;
        this.limit = {
            radius: r.radius * n.retina.pixelRatio * n.retina.reduceFactor,
            mass: r.mass
        }, this.color = at(this.options.color) ?? {
            b: 0,
            g: 0,
            r: 0
        }, this.position = ((o = this.initialPosition) == null ? void 0 : o.copy()) ?? this._calcPosition()
    }
    attract(e) {
        const n = this.container,
            i = this.options;
        if (i.draggable) {
            const u = n.interactivity.mouse;
            u.clicking && u.downPosition ? Le(this.position, u.downPosition) <= this.size && (this.dragging = !0) : this.dragging = !1, this.dragging && u.position && (this.position.x = u.position.x, this.position.y = u.position.y)
        }
        const s = e.getPosition(),
            {
                dx: r,
                dy: o,
                distance: a
            } = Ee(this.position, s),
            l = G.create(r, o);
        if (l.length = this.mass / Math.pow(a, 2) * n.retina.reduceFactor, a < this.size + e.getRadius()) {
            const u = e.getRadius() * .033 * n.retina.pixelRatio;
            this.size > e.getRadius() && a < this.size - e.getRadius() || e.absorberOrbit !== void 0 && e.absorberOrbit.length < 0 ? i.destroy ? e.destroy() : (e.needsNewPosition = !0, this._updateParticlePosition(e, l)) : (i.destroy && (e.size.value -= u), this._updateParticlePosition(e, l)), (this.limit.radius <= 0 || this.size < this.limit.radius) && (this.size += u), (this.limit.mass <= 0 || this.mass < this.limit.mass) && (this.mass += u * this.options.size.density * n.retina.reduceFactor)
        } else this._updateParticlePosition(e, l)
    }
    draw(e) {
        e.translate(this.position.x, this.position.y), e.beginPath(), e.arc(0, 0, this.size, 0, Math.PI * 2, !1), e.closePath(), e.fillStyle = Mt(this.color, this.opacity), e.fill()
    }
    resize() {
        const e = this.initialPosition;
        this.position = e && tr(e, this.container.canvas.size, G.origin) ? e : this._calcPosition()
    }
}
class ak {
    constructor(e) {
        this.container = e, this.array = [], this.absorbers = [], this.interactivityAbsorbers = [], e.getAbsorber = n => n === void 0 || Me(n) ? this.array[n || 0] : this.array.find(i => i.name === n), e.addAbsorber = (n, i) => this.addAbsorber(n, i)
    }
    addAbsorber(e, n) {
        const i = new ok(this, this.container, e, n);
        return this.array.push(i), i
    }
    draw(e) {
        for (const n of this.array) n.draw(e)
    }
    handleClickMode(e) {
        const n = this.absorbers,
            i = this.interactivityAbsorbers;
        if (e === "absorber") {
            const s = Ke(i),
                r = s ?? Ke(n),
                o = this.container.interactivity.mouse.clickPosition;
            this.addAbsorber(r, o)
        }
    }
    async init() {
        this.absorbers = this.container.actualOptions.absorbers, this.interactivityAbsorbers = this.container.actualOptions.interactivity.modes.absorbers, Z(this.absorbers, e => {
            this.addAbsorber(e)
        })
    }
    particleUpdate(e) {
        for (const n of this.array)
            if (n.attract(e), e.destroyed) break
    }
    removeAbsorber(e) {
        const n = this.array.indexOf(e);
        n >= 0 && this.array.splice(n, 1)
    }
    resize() {
        for (const e of this.array) e.resize()
    }
    stop() {
        this.array = []
    }
}
class lk {
    constructor() {
        this.id = "absorbers"
    }
    getPlugin(e) {
        return new ak(e)
    }
    loadOptions(e, n) {
        var i, s;
        !this.needsPlugin(e) && !this.needsPlugin(n) || (n != null && n.absorbers && (e.absorbers = Z(n.absorbers, r => {
            const o = new ko;
            return o.load(r), o
        })), e.interactivity.modes.absorbers = Z((s = (i = n == null ? void 0 : n.interactivity) == null ? void 0 : i.modes) == null ? void 0 : s.absorbers, r => {
            const o = new ko;
            return o.load(r), o
        }))
    }
    needsPlugin(e) {
        var i, s, r;
        if (!e) return !1;
        const n = e.absorbers;
        return pe(n) ? !!n.length : n ? !0 : !!((r = (s = (i = e.interactivity) == null ? void 0 : i.events) == null ? void 0 : s.onClick) != null && r.mode && Y("absorber", e.interactivity.events.onClick.mode))
    }
}
async function uk(t, e = !0) {
    await t.addPlugin(new lk, e)
}
class ck {
    load(e) {
        e && (e.bottom !== void 0 && (this.bottom = z(e.bottom)), e.left !== void 0 && (this.left = z(e.left)), e.right !== void 0 && (this.right = z(e.right)), e.top !== void 0 && (this.top = z(e.top)))
    }
}
class dk extends dt {
    constructor() {
        super(), this.value = 3
    }
}
class fk extends dt {
    constructor() {
        super(), this.value = {
            min: 4,
            max: 9
        }
    }
}
class hk {
    constructor() {
        this.count = 1, this.factor = new dk, this.rate = new fk, this.sizeOffset = !0
    }
    load(e) {
        e && (e.color !== void 0 && (this.color = ae.create(this.color, e.color)), e.count !== void 0 && (this.count = e.count), this.factor.load(e.factor), this.rate.load(e.rate), this.particles = Z(e.particles, n => ce({}, n)), e.sizeOffset !== void 0 && (this.sizeOffset = e.sizeOffset), e.colorOffset && (this.colorOffset = this.colorOffset ?? {}, e.colorOffset.h !== void 0 && (this.colorOffset.h = e.colorOffset.h), e.colorOffset.s !== void 0 && (this.colorOffset.s = e.colorOffset.s), e.colorOffset.l !== void 0 && (this.colorOffset.l = e.colorOffset.l)))
    }
}
class pk {
    constructor() {
        this.bounds = new ck, this.mode = "none", this.split = new hk
    }
    load(e) {
        e && (e.mode && (this.mode = e.mode), e.bounds && this.bounds.load(e.bounds), this.split.load(e.split))
    }
}

function mk(t, e, n, i) {
    const s = n.options.destroy;
    if (!s) return;
    const r = s.split,
        o = _c(t, e, n.options),
        a = Kt(r.factor),
        l = n.getFillColor();
    r.color ? o.color.load(r.color) : r.colorOffset && l ? o.color.load({
        value: {
            hsl: {
                h: l.h + E(r.colorOffset.h ?? 0),
                s: l.s + E(r.colorOffset.s ?? 0),
                l: l.l + E(r.colorOffset.l ?? 0)
            }
        }
    }) : o.color.load({
        value: {
            hsl: n.getFillColor()
        }
    }), o.move.load({
        center: {
            x: n.position.x,
            y: n.position.y,
            mode: "precise"
        }
    }), Me(o.size.value) ? o.size.value /= a : (o.size.value.min /= a, o.size.value.max /= a), o.load(i);
    const u = r.sizeOffset ? z(-n.size.value, n.size.value) : 0,
        c = {
            x: n.position.x + ye(u),
            y: n.position.y + ye(u)
        };
    return e.particles.addParticle(c, o, n.group, d => d.size.value < .5 ? !1 : (d.velocity.length = ye(z(n.velocity.length, d.velocity.length)), d.splitCount = (n.splitCount ?? 0) + 1, d.unbreakable = !0, setTimeout(() => {
        d.unbreakable = !1
    }, 500), !0))
}

function gk(t, e, n) {
    const i = n.options.destroy;
    if (!i) return;
    const s = i.split;
    if (s.count >= 0 && (n.splitCount === void 0 || n.splitCount++ > s.count)) return;
    const r = Kt(s.rate),
        o = Ke(s.particles);
    for (let a = 0; a < r; a++) mk(t, e, n, o)
}
class yk {
    constructor(e, n) {
        this.engine = e, this.container = n
    }
    init(e) {
        const n = this.container,
            i = e.options,
            s = i.destroy;
        if (!s) return;
        e.splitCount = 0;
        const r = s.bounds;
        e.destroyBounds || (e.destroyBounds = {});
        const {
            bottom: o,
            left: a,
            right: l,
            top: u
        } = r, {
            destroyBounds: c
        } = e, d = n.canvas.size;
        o && (c.bottom = E(o) * d.height / 100), a && (c.left = E(a) * d.width / 100), l && (c.right = E(l) * d.width / 100), u && (c.top = E(u) * d.height / 100)
    }
    isEnabled(e) {
        return !e.destroyed
    }
    loadOptions(e, ...n) {
        e.destroy || (e.destroy = new pk);
        for (const i of n) e.destroy.load(i == null ? void 0 : i.destroy)
    }
    particleDestroyed(e, n) {
        if (n) return;
        const i = e.options.destroy;
        i && i.mode === "split" && gk(this.engine, this.container, e)
    }
    update(e) {
        if (!this.isEnabled(e)) return;
        const n = e.getPosition(),
            i = e.destroyBounds;
        i && (i.bottom !== void 0 && n.y >= i.bottom || i.left !== void 0 && n.x <= i.left || i.right !== void 0 && n.x >= i.right || i.top !== void 0 && n.y <= i.top) && e.destroy()
    }
}
async function vk(t, e = !0) {
    await t.addParticleUpdater("destroy", n => new yk(t, n), e)
}
class wk {
    randomPosition(e, n, i) {
        const s = (d, f) => {
                const h = F() / 4,
                    y = Math.atan(f / d * Math.tan(2 * Math.PI * h)),
                    g = F();
                return g < .25 ? y : g < .5 ? Math.PI - y : g < .75 ? Math.PI + y : -y
            },
            r = (d, f, h) => d * f / Math.sqrt((f * Math.cos(h)) ** 2 + (d * Math.sin(h)) ** 2),
            [o, a] = [n.width / 2, n.height / 2],
            l = s(o, a),
            u = r(o, a, l),
            c = i ? u * Math.sqrt(F()) : u;
        return {
            x: e.x + c * Math.cos(l),
            y: e.y + c * Math.sin(l)
        }
    }
}
class xk {
    constructor() {
        this.wait = !1
    }
    load(e) {
        e && (e.count !== void 0 && (this.count = e.count), e.delay !== void 0 && (this.delay = z(e.delay)), e.duration !== void 0 && (this.duration = z(e.duration)), e.wait !== void 0 && (this.wait = e.wait))
    }
}
class bk {
    constructor() {
        this.quantity = 1, this.delay = .1
    }
    load(e) {
        e !== void 0 && (e.quantity !== void 0 && (this.quantity = z(e.quantity)), e.delay !== void 0 && (this.delay = z(e.delay)))
    }
}
class ay {
    constructor() {
        this.mode = "percent", this.height = 0, this.width = 0
    }
    load(e) {
        e !== void 0 && (e.mode !== void 0 && (this.mode = e.mode), e.height !== void 0 && (this.height = e.height), e.width !== void 0 && (this.width = e.width))
    }
}
class rn {
    constructor() {
        this.autoPlay = !0, this.fill = !0, this.life = new xk, this.rate = new bk, this.shape = "square", this.startCount = 0
    }
    load(e) {
        e && (e.autoPlay !== void 0 && (this.autoPlay = e.autoPlay), e.size !== void 0 && (this.size || (this.size = new ay), this.size.load(e.size)), e.direction !== void 0 && (this.direction = e.direction), this.domId = e.domId, e.fill !== void 0 && (this.fill = e.fill), this.life.load(e.life), this.name = e.name, this.particles = Z(e.particles, n => ce({}, n)), this.rate.load(e.rate), e.shape !== void 0 && (this.shape = e.shape), e.position !== void 0 && (this.position = {}, e.position.x !== void 0 && (this.position.x = z(e.position.x)), e.position.y !== void 0 && (this.position.y = z(e.position.y))), e.spawnColor !== void 0 && (this.spawnColor === void 0 && (this.spawnColor = new Bi), this.spawnColor.load(e.spawnColor)), e.startCount !== void 0 && (this.startCount = e.startCount))
    }
}
class kk {
    constructor(e, n, i, s, r) {
        var a, l;
        this.emitters = n, this.container = i, this._calcPosition = () => Ig({
            size: this.container.canvas.size,
            position: this.options.position
        }), this._destroy = () => {
            this.emitters.removeEmitter(this), this._engine.dispatchEvent("emitterDestroyed", {
                container: this.container,
                data: {
                    emitter: this
                }
            })
        }, this._emit = () => {
            if (this._paused) return;
            const u = E(this.options.rate.quantity);
            this._emitParticles(u)
        }, this._emitParticles = u => {
            var h, y;
            const c = this.getPosition(),
                d = this.getSize(),
                f = Ke(this._particlesOptions);
            for (let g = 0; g < u; g++) {
                const x = ce({}, f);
                if (this.spawnColor) {
                    const m = (h = this.options.spawnColor) == null ? void 0 : h.animation;
                    m && (this.spawnColor.h = this._setColorAnimation(m.h, this.spawnColor.h, 360), this.spawnColor.s = this._setColorAnimation(m.s, this.spawnColor.s, 100), this.spawnColor.l = this._setColorAnimation(m.l, this.spawnColor.l, 100)), x.color ? x.color.value = this.spawnColor : x.color = {
                        value: this.spawnColor
                    }
                }
                if (!c) return;
                const p = ((y = this._shape) == null ? void 0 : y.randomPosition(c, d, this.fill)) ?? c;
                this.container.particles.addParticle(p, x)
            }
        }, this._prepareToDie = () => {
            var c;
            if (this._paused) return;
            const u = ((c = this.options.life) == null ? void 0 : c.duration) !== void 0 ? E(this.options.life.duration) : void 0;
            this.container.retina.reduceFactor && (this._lifeCount > 0 || this._immortal) && u !== void 0 && u > 0 && (this._duration = u * 1e3)
        }, this._setColorAnimation = (u, c, d) => {
            const f = this.container;
            if (!u.enable) return c;
            const h = ye(u.offset),
                y = E(this.options.rate.delay),
                g = 1e3 * y / f.retina.reduceFactor,
                x = E(u.speed ?? 0);
            return (c + x * f.fpsLimit / g + h * 3.6) % d
        }, this._engine = e, this._currentDuration = 0, this._currentEmitDelay = 0, this._currentSpawnDelay = 0, this._initialPosition = r, s instanceof rn ? this.options = s : (this.options = new rn, this.options.load(s)), this._spawnDelay = E(this.options.life.delay ?? 0) * 1e3 / this.container.retina.reduceFactor, this.position = this._initialPosition ?? this._calcPosition(), this.name = this.options.name, this._shape = (a = this._engine.emitterShapeManager) == null ? void 0 : a.getShape(this.options.shape), this.fill = this.options.fill, this._firstSpawn = !this.options.life.wait, this._startParticlesAdded = !1;
        let o = ce({}, this.options.particles);
        o ?? (o = {}), o.move ?? (o.move = {}), (l = o.move).direction ?? (l.direction = this.options.direction), this.options.spawnColor && (this.spawnColor = bn(this.options.spawnColor)), this._paused = !this.options.autoPlay, this._particlesOptions = o, this.size = this.options.size ?? (() => {
            const u = new ay;
            return u.load({
                height: 0,
                mode: "percent",
                width: 0
            }), u
        })(), this._lifeCount = this.options.life.count ?? -1, this._immortal = this._lifeCount <= 0, this._engine.dispatchEvent("emitterCreated", {
            container: i,
            data: {
                emitter: this
            }
        }), this.play()
    }
    externalPause() {
        this._paused = !0, this.pause()
    }
    externalPlay() {
        this._paused = !1, this.play()
    }
    getPosition() {
        if (this.options.domId) {
            const e = this.container,
                n = document.getElementById(this.options.domId);
            if (n) {
                const i = n.getBoundingClientRect();
                return {
                    x: (i.x + i.width / 2) * e.retina.pixelRatio,
                    y: (i.y + i.height / 2) * e.retina.pixelRatio
                }
            }
        }
        return this.position
    }
    getSize() {
        const e = this.container;
        if (this.options.domId) {
            const n = document.getElementById(this.options.domId);
            if (n) {
                const i = n.getBoundingClientRect();
                return {
                    width: i.width * e.retina.pixelRatio,
                    height: i.height * e.retina.pixelRatio
                }
            }
        }
        return N1(this.size, e.canvas.size)
    }
    pause() {
        this._paused || delete this._emitDelay
    }
    play() {
        if (!this._paused && this.container.retina.reduceFactor && (this._lifeCount > 0 || this._immortal || !this.options.life.count) && (this._firstSpawn || this._currentSpawnDelay >= (this._spawnDelay ?? 0))) {
            if (this._emitDelay === void 0) {
                const e = E(this.options.rate.delay);
                this._emitDelay = 1e3 * e / this.container.retina.reduceFactor
            }(this._lifeCount > 0 || this._immortal) && this._prepareToDie()
        }
    }
    resize() {
        const e = this._initialPosition;
        this.position = e && tr(e, this.container.canvas.size, G.origin) ? e : this._calcPosition()
    }
    update(e) {
        this._paused || (this._firstSpawn && (this._firstSpawn = !1, this._currentSpawnDelay = this._spawnDelay ?? 0, this._currentEmitDelay = this._emitDelay ?? 0), this._startParticlesAdded || (this._startParticlesAdded = !0, this._emitParticles(this.options.startCount)), this._duration !== void 0 && (this._currentDuration += e.value, this._currentDuration >= this._duration && (this.pause(), this._spawnDelay !== void 0 && delete this._spawnDelay, this._immortal || this._lifeCount--, this._lifeCount > 0 || this._immortal ? (this.position = this._calcPosition(), this._spawnDelay = E(this.options.life.delay ?? 0) * 1e3 / this.container.retina.reduceFactor) : this._destroy(), this._currentDuration -= this._duration, delete this._duration)), this._spawnDelay !== void 0 && (this._currentSpawnDelay += e.value, this._currentSpawnDelay >= this._spawnDelay && (this._engine.dispatchEvent("emitterPlay", {
            container: this.container
        }), this.play(), this._currentSpawnDelay -= this._currentSpawnDelay, delete this._spawnDelay)), this._emitDelay !== void 0 && (this._currentEmitDelay += e.value, this._currentEmitDelay >= this._emitDelay && (this._emit(), this._currentEmitDelay -= this._emitDelay)))
    }
}
class Sk {
    constructor(e, n) {
        this.container = n, this._engine = e, this.array = [], this.emitters = [], this.interactivityEmitters = {
            random: {
                count: 1,
                enable: !1
            },
            value: []
        }, n.getEmitter = i => i === void 0 || Me(i) ? this.array[i || 0] : this.array.find(s => s.name === i), n.addEmitter = (i, s) => this.addEmitter(i, s), n.removeEmitter = i => {
            const s = n.getEmitter(i);
            s && this.removeEmitter(s)
        }, n.playEmitter = i => {
            const s = n.getEmitter(i);
            s && s.externalPlay()
        }, n.pauseEmitter = i => {
            const s = n.getEmitter(i);
            s && s.externalPause()
        }
    }
    addEmitter(e, n) {
        const i = new rn;
        i.load(e);
        const s = new kk(this._engine, this, this.container, i, n);
        return this.array.push(s), s
    }
    handleClickMode(e) {
        const n = this.emitters,
            i = this.interactivityEmitters;
        if (e !== "emitter") return;
        let s;
        if (i && pe(i.value))
            if (i.value.length > 0 && i.random.enable) {
                s = [];
                const a = [];
                for (let l = 0; l < i.random.count; l++) {
                    const u = Vg(i.value);
                    if (a.includes(u) && a.length < i.value.length) {
                        l--;
                        continue
                    }
                    a.push(u), s.push(er(i.value, u))
                }
            } else s = i.value;
        else s = i == null ? void 0 : i.value;
        const r = s ?? n,
            o = this.container.interactivity.mouse.clickPosition;
        Z(r, a => {
            this.addEmitter(a, o)
        })
    }
    async init() {
        if (this.emitters = this.container.actualOptions.emitters, this.interactivityEmitters = this.container.actualOptions.interactivity.modes.emitters, !!this.emitters)
            if (pe(this.emitters))
                for (const e of this.emitters) this.addEmitter(e);
            else this.addEmitter(this.emitters)
    }
    pause() {
        for (const e of this.array) e.pause()
    }
    play() {
        for (const e of this.array) e.play()
    }
    removeEmitter(e) {
        const n = this.array.indexOf(e);
        n >= 0 && this.array.splice(n, 1)
    }
    resize() {
        for (const e of this.array) e.resize()
    }
    stop() {
        this.array = []
    }
    update(e) {
        for (const n of this.array) n.update(e)
    }
}
const Wa = new Map;
class Pk {
    constructor(e) {
        this._engine = e
    }
    addShape(e, n) {
        this.getShape(e) || Wa.set(e, n)
    }
    getShape(e) {
        return Wa.get(e)
    }
    getSupportedShapes() {
        return Wa.keys()
    }
}

function Vf(t, e) {
    return t + e * (F() - .5)
}
class Ck {
    randomPosition(e, n, i) {
        if (i) return {
            x: Vf(e.x, n.width),
            y: Vf(e.y, n.height)
        };
        {
            const s = n.width / 2,
                r = n.height / 2,
                o = Math.floor(F() * 4),
                a = (F() - .5) * 2;
            switch (o) {
                case 0:
                    return {
                        x: e.x + a * s, y: e.y - r
                    };
                case 1:
                    return {
                        x: e.x - s, y: e.y + a * r
                    };
                case 2:
                    return {
                        x: e.x + a * s, y: e.y + r
                    };
                case 3:
                default:
                    return {
                        x: e.x + s, y: e.y + a * r
                    }
            }
        }
    }
}
class _k {
    constructor(e) {
        this._engine = e, this.id = "emitters"
    }
    getPlugin(e) {
        return new Sk(this._engine, e)
    }
    loadOptions(e, n) {
        var s, r;
        if (!this.needsPlugin(e) && !this.needsPlugin(n)) return;
        n != null && n.emitters && (e.emitters = Z(n.emitters, o => {
            const a = new rn;
            return a.load(o), a
        }));
        const i = (r = (s = n == null ? void 0 : n.interactivity) == null ? void 0 : s.modes) == null ? void 0 : r.emitters;
        if (i)
            if (pe(i)) e.interactivity.modes.emitters = {
                random: {
                    count: 1,
                    enable: !0
                },
                value: i.map(o => {
                    const a = new rn;
                    return a.load(o), a
                })
            };
            else {
                const o = i;
                if (o.value !== void 0)
                    if (pe(o.value)) e.interactivity.modes.emitters = {
                        random: {
                            count: o.random.count ?? 1,
                            enable: o.random.enable ?? !1
                        },
                        value: o.value.map(a => {
                            const l = new rn;
                            return l.load(a), l
                        })
                    };
                    else {
                        const a = new rn;
                        a.load(o.value), e.interactivity.modes.emitters = {
                            random: {
                                count: o.random.count ?? 1,
                                enable: o.random.enable ?? !1
                            },
                            value: a
                        }
                    }
                else(e.interactivity.modes.emitters = {
                    random: {
                        count: 1,
                        enable: !1
                    },
                    value: new rn
                }).value.load(i)
            }
    }
    needsPlugin(e) {
        var i, s, r;
        if (!e) return !1;
        const n = e.emitters;
        return pe(n) && !!n.length || n !== void 0 || !!((r = (s = (i = e.interactivity) == null ? void 0 : i.events) == null ? void 0 : s.onClick) != null && r.mode) && Y("emitter", e.interactivity.events.onClick.mode)
    }
}
async function Tk(t, e = !0) {
    t.emitterShapeManager || (t.emitterShapeManager = new Pk(t)), t.addEmitterShape || (t.addEmitterShape = (i, s) => {
        var r;
        (r = t.emitterShapeManager) == null || r.addShape(i, s)
    });
    const n = new _k(t);
    await t.addPlugin(n, e), t.addEmitterShape("circle", new wk), t.addEmitterShape("square", new Ck)
}
class Ek {
    constructor() {
        this.delay = 1, this.pauseOnStop = !1, this.quantity = 1
    }
    load(e) {
        e && (e.delay !== void 0 && (this.delay = e.delay), e.quantity !== void 0 && (this.quantity = e.quantity), e.particles !== void 0 && (this.particles = ce({}, e.particles)), e.pauseOnStop !== void 0 && (this.pauseOnStop = e.pauseOnStop))
    }
}
class Mk extends kt {
    constructor(e) {
        super(e), this._delay = 0
    }
    clear() {}
    init() {}
    async interact(e) {
        var u, c, d, f;
        const n = this.container,
            {
                interactivity: i
            } = n;
        if (!n.retina.reduceFactor) return;
        const s = n.actualOptions,
            r = s.interactivity.modes.trail;
        if (!r) return;
        const o = r.delay * 1e3 / this.container.retina.reduceFactor;
        if (this._delay < o && (this._delay += e.value), this._delay < o) return;
        const a = !(r.pauseOnStop && (i.mouse.position === this._lastPosition || ((u = i.mouse.position) == null ? void 0 : u.x) === ((c = this._lastPosition) == null ? void 0 : c.x) && ((d = i.mouse.position) == null ? void 0 : d.y) === ((f = this._lastPosition) == null ? void 0 : f.y))),
            l = n.interactivity.mouse.position;
        l ? this._lastPosition = {
            ...l
        } : delete this._lastPosition, a && n.particles.push(r.quantity, n.interactivity.mouse, r.particles), this._delay -= o
    }
    isEnabled(e) {
        const n = this.container,
            i = n.actualOptions,
            s = n.interactivity.mouse,
            r = ((e == null ? void 0 : e.interactivity) ?? i.interactivity).events;
        return s.clicking && s.inside && !!s.position && Y("trail", r.onClick.mode) || s.inside && !!s.position && Y("trail", r.onHover.mode)
    }
    loadModeOptions(e, ...n) {
        e.trail || (e.trail = new Ek);
        for (const i of n) e.trail.load(i == null ? void 0 : i.trail)
    }
    reset() {}
}
async function Rk(t, e = !0) {
    await t.addInteractor("externalTrail", n => new Mk(n), e)
}

function zk(t) {
    const e = t.options.roll;
    if (!(e != null && e.enable)) {
        t.roll = {
            enable: !1,
            horizontal: !1,
            vertical: !1,
            angle: 0,
            speed: 0
        };
        return
    }
    if (t.roll = {
            enable: e.enable,
            horizontal: e.mode === "horizontal" || e.mode === "both",
            vertical: e.mode === "vertical" || e.mode === "both",
            angle: F() * Math.PI * 2,
            speed: E(e.speed) / 360
        }, e.backColor) t.backColor = bn(e.backColor);
    else if (e.darken.enable && e.enlighten.enable) {
        const n = F() >= .5 ? "darken" : "enlighten";
        t.roll.alter = {
            type: n,
            value: E(n === "darken" ? e.darken.value : e.enlighten.value)
        }
    } else e.darken.enable ? t.roll.alter = {
        type: "darken",
        value: E(e.darken.value)
    } : e.enlighten.enable && (t.roll.alter = {
        type: "enlighten",
        value: E(e.enlighten.value)
    })
}

function Dk(t, e) {
    const n = t.options.roll,
        i = t.roll;
    if (!i || !(n != null && n.enable)) return;
    const s = i.speed * e.factor,
        r = 2 * Math.PI;
    i.angle += s, i.angle > r && (i.angle -= r)
}
class jf {
    constructor() {
        this.enable = !1, this.value = 0
    }
    load(e) {
        e && (e.enable !== void 0 && (this.enable = e.enable), e.value !== void 0 && (this.value = z(e.value)))
    }
}
class Ok {
    constructor() {
        this.darken = new jf, this.enable = !1, this.enlighten = new jf, this.mode = "vertical", this.speed = 25
    }
    load(e) {
        e && (e.backColor !== void 0 && (this.backColor = ae.create(this.backColor, e.backColor)), this.darken.load(e.darken), e.enable !== void 0 && (this.enable = e.enable), this.enlighten.load(e.enlighten), e.mode !== void 0 && (this.mode = e.mode), e.speed !== void 0 && (this.speed = z(e.speed)))
    }
}
class Ak {
    getTransformValues(e) {
        var r;
        const n = ((r = e.roll) == null ? void 0 : r.enable) && e.roll,
            i = n && n.horizontal,
            s = n && n.vertical;
        return {
            a: i ? Math.cos(n.angle) : void 0,
            d: s ? Math.sin(n.angle) : void 0
        }
    }
    init(e) {
        zk(e)
    }
    isEnabled(e) {
        const n = e.options.roll;
        return !e.destroyed && !e.spawning && !!(n != null && n.enable)
    }
    loadOptions(e, ...n) {
        e.roll || (e.roll = new Ok);
        for (const i of n) e.roll.load(i == null ? void 0 : i.roll)
    }
    update(e, n) {
        this.isEnabled(e) && Dk(e, n)
    }
}
async function Lk(t, e = !0) {
    await t.addParticleUpdater("roll", () => new Ak, e)
}
class So {
    static init(e) {
        var r;
        const n = new So,
            i = e.selector;
        if (!i) throw new Error("No selector provided");
        const s = document.querySelector(i);
        if (!s) throw new Error("No element found for selector");
        return xo.set(i.replace(".", "").replace("!", ""), s, {
            fullScreen: {
                enable: !1
            },
            particles: {
                color: {
                    value: e.color ?? "!000000"
                },
                links: {
                    color: "random",
                    distance: e.minDistance ?? 120,
                    enable: e.connectParticles ?? !1
                },
                move: {
                    enable: !0,
                    speed: e.speed ?? .5
                },
                number: {
                    value: e.maxParticles ?? 100
                },
                size: {
                    value: {
                        min: 1,
                        max: e.sizeVariations ?? 3
                    }
                }
            },
            responsive: (r = e.responsive) == null ? void 0 : r.map(o => {
                var a, l, u, c, d;
                return {
                    maxWidth: o.breakpoint,
                    options: {
                        particles: {
                            color: {
                                value: (a = o.options) == null ? void 0 : a.color
                            },
                            links: {
                                distance: (l = o.options) == null ? void 0 : l.minDistance,
                                enable: (u = o.options) == null ? void 0 : u.connectParticles
                            },
                            number: {
                                value: e.maxParticles
                            },
                            move: {
                                enable: !0,
                                speed: (c = o.options) == null ? void 0 : c.speed
                            },
                            size: {
                                value: (d = o.options) == null ? void 0 : d.sizeVariations
                            }
                        }
                    }
                }
            })
        }).then(o => {
            n._container = o
        }), n
    }
    destroy() {
        const e = this._container;
        e && e.destroy()
    }
    pauseAnimation() {
        const e = this._container;
        e && e.pause()
    }
    resumeAnimation() {
        const e = this._container;
        e && e.play()
    }
}
const Ik = t => {
        const e = (i, s) => t.load(i, s);
        e.load = (i, s, r) => {
            t.loadJSON(i, s).then(o => {
                o && r(o)
            }).catch(() => {
                r(void 0)
            })
        }, e.setOnClickHandler = i => {
            t.setOnClickHandler(i)
        };
        const n = t.dom();
        return {
            particlesJS: e,
            pJSDom: n
        }
    },
    Fk = t => {
        const {
            particlesJS: e,
            pJSDom: n
        } = Ik(t);
        return window.particlesJS = e, window.pJSDom = n, window.Particles = So, {
            particlesJS: e,
            pJSDom: n,
            Particles: So
        }
    };

function Nk(t) {
    const e = t.initialPosition,
        {
            dx: n,
            dy: i
        } = Ee(e, t.position),
        s = Math.abs(n),
        r = Math.abs(i),
        {
            maxDistance: o
        } = t.retina,
        a = o.horizontal,
        l = o.vertical;
    if (!(!a && !l)) {
        if ((a && s >= a || l && r >= l) && !t.misplaced) t.misplaced = !!a && s > a || !!l && r > l, a && (t.velocity.x = t.velocity.y / 2 - t.velocity.x), l && (t.velocity.y = t.velocity.x / 2 - t.velocity.y);
        else if ((!a || s < a) && (!l || r < l) && t.misplaced) t.misplaced = !1;
        else if (t.misplaced) {
            const u = t.position,
                c = t.velocity;
            a && (u.x < e.x && c.x < 0 || u.x > e.x && c.x > 0) && (c.x *= -F()), l && (u.y < e.y && c.y < 0 || u.y > e.y && c.y > 0) && (c.y *= -F())
        }
    }
}

function Vk(t, e, n, i, s, r) {
    Bk(t, r);
    const o = t.gravity,
        a = o != null && o.enable && o.inverse ? -1 : 1;
    s && n && (t.velocity.x += s * r.factor / (60 * n)), o != null && o.enable && n && (t.velocity.y += a * (o.acceleration * r.factor) / (60 * n));
    const l = t.moveDecay;
    t.velocity.multTo(l);
    const u = t.velocity.mult(n);
    o != null && o.enable && i > 0 && (!o.inverse && u.y >= 0 && u.y >= i || o.inverse && u.y <= 0 && u.y <= -i) && (u.y = a * i, n && (t.velocity.y = u.y / n));
    const c = t.options.zIndex,
        d = (1 - t.zIndexFactor) ** c.velocityRate;
    u.multTo(d);
    const {
        position: f
    } = t;
    f.addTo(u), e.vibrate && (f.x += Math.sin(f.x * Math.cos(f.y)), f.y += Math.cos(f.y * Math.sin(f.x)))
}

function jk(t, e) {
    const n = t.container;
    if (!t.spin) return;
    const i = {
        x: t.spin.direction === "clockwise" ? Math.cos : Math.sin,
        y: t.spin.direction === "clockwise" ? Math.sin : Math.cos
    };
    t.position.x = t.spin.center.x + t.spin.radius * i.x(t.spin.angle), t.position.y = t.spin.center.y + t.spin.radius * i.y(t.spin.angle), t.spin.radius += t.spin.acceleration;
    const s = Math.max(n.canvas.size.width, n.canvas.size.height);
    t.spin.radius > s / 2 ? (t.spin.radius = s / 2, t.spin.acceleration *= -1) : t.spin.radius < 0 && (t.spin.radius = 0, t.spin.acceleration *= -1), t.spin.angle += e / 100 * (1 - t.spin.radius / s)
}

function Bk(t, e) {
    var o;
    const n = t.options,
        i = n.move.path;
    if (!i.enable) return;
    if (t.lastPathTime <= t.pathDelay) {
        t.lastPathTime += e.value;
        return
    }
    const r = (o = t.pathGenerator) == null ? void 0 : o.generate(t, e);
    r && t.velocity.addTo(r), i.clamp && (t.velocity.x = xt(t.velocity.x, -1, 1), t.velocity.y = xt(t.velocity.y, -1, 1)), t.lastPathTime -= t.pathDelay
}

function Uk(t) {
    return t.slow.inRange ? t.slow.factor : 1
}
const $k = 2;
class Wk {
    constructor() {
        this._initSpin = e => {
            const n = e.container,
                i = e.options,
                s = i.move.spin;
            if (!s.enable) return;
            const r = s.position ?? {
                    x: 50,
                    y: 50
                },
                o = {
                    x: r.x / 100 * n.canvas.size.width,
                    y: r.y / 100 * n.canvas.size.height
                },
                a = e.getPosition(),
                l = Le(a, o),
                u = E(s.acceleration);
            e.retina.spinAcceleration = u * n.retina.pixelRatio, e.spin = {
                center: o,
                direction: e.velocity.x >= 0 ? "clockwise" : "counter-clockwise",
                angle: e.velocity.angle,
                radius: l,
                acceleration: e.retina.spinAcceleration
            }
        }
    }
    init(e) {
        const n = e.options,
            i = n.move.gravity;
        e.gravity = {
            enable: i.enable,
            acceleration: E(i.acceleration),
            inverse: i.inverse
        }, this._initSpin(e)
    }
    isEnabled(e) {
        return !e.destroyed && e.options.move.enable
    }
    move(e, n) {
        var y, g;
        const i = e.options,
            s = i.move;
        if (!s.enable) return;
        const r = e.container,
            o = r.retina.pixelRatio,
            a = Uk(e),
            l = ((y = e.retina).moveSpeed ?? (y.moveSpeed = E(s.speed) * o)) * r.retina.reduceFactor,
            u = (g = e.retina).moveDrift ?? (g.moveDrift = E(e.options.move.drift) * o),
            c = un(i.size.value) * o,
            d = s.size ? e.getRadius() / c : 1,
            f = l * d * a * (n.factor || 1) / $k,
            h = e.retina.maxSpeed ?? r.retina.maxSpeed;
        s.spin.enable ? jk(e, f) : Vk(e, s, f, h, u, n), Nk(e)
    }
}
async function Hk(t, e = !0) {
    await t.addMover("base", () => new Wk, e)
}
class Gk {
    draw(e, n, i) {
        n.circleRange || (n.circleRange = {
            min: 0,
            max: Math.PI * 2
        });
        const s = n.circleRange;
        e.arc(0, 0, i, s.min, s.max, !1)
    }
    getSidesCount() {
        return 12
    }
    particleInit(e, n) {
        const i = n.shapeData,
            s = (i == null ? void 0 : i.angle) ?? {
                max: 360,
                min: 0
            };
        n.circleRange = gi(s) ? {
            min: s.min * Math.PI / 180,
            max: s.max * Math.PI / 180
        } : {
            min: 0,
            max: s * Math.PI / 180
        }
    }
}
async function qk(t, e = !0) {
    await t.addShape("circle", new Gk, e)
}

function Ha(t, e, n, i, s) {
    if (!e || !n.enable || (e.maxLoops ?? 0) > 0 && (e.loops ?? 0) > (e.maxLoops ?? 0) || (e.time || (e.time = 0), (e.delayTime ?? 0) > 0 && e.time < (e.delayTime ?? 0) && (e.time += t.value), (e.delayTime ?? 0) > 0 && e.time < (e.delayTime ?? 0))) return;
    const r = ye(n.offset),
        o = (e.velocity ?? 0) * t.factor + r * 3.6,
        a = e.decay ?? 1;
    !s || e.status === "increasing" ? (e.value += o, e.value > i && (e.loops || (e.loops = 0), e.loops++, s && (e.status = "decreasing", e.value -= e.value % i))) : (e.value -= o, e.value < 0 && (e.loops || (e.loops = 0), e.loops++, e.status = "increasing", e.value += e.value)), e.velocity && a !== 1 && (e.velocity *= a), e.value > i && (e.value %= i)
}

function Kk(t, e) {
    const {
        h: n,
        s: i,
        l: s
    } = t.options.color.animation, {
        color: r
    } = t;
    if (!r) return;
    const {
        h: o,
        s: a,
        l
    } = r;
    o && Ha(e, o, n, 360, !1), a && Ha(e, a, i, 100, !0), l && Ha(e, l, s, 100, !0)
}
class Qk {
    constructor(e) {
        this.container = e
    }
    init(e) {
        const n = bn(e.options.color, e.id, e.options.reduceDuplicates);
        n && (e.color = Yg(n, e.options.color.animation, this.container.retina.reduceFactor))
    }
    isEnabled(e) {
        const {
            h: n,
            s: i,
            l: s
        } = e.options.color.animation, {
            color: r
        } = e;
        return !e.destroyed && !e.spawning && ((r == null ? void 0 : r.h.value) !== void 0 && n.enable || (r == null ? void 0 : r.s.value) !== void 0 && i.enable || (r == null ? void 0 : r.l.value) !== void 0 && s.enable)
    }
    update(e, n) {
        Kk(e, n)
    }
}
async function Xk(t, e = !0) {
    await t.addParticleUpdater("color", n => new Qk(n), e)
}

function Yk(t, e, n, i) {
    switch (t.options.opacity.animation.destroy) {
        case "max":
            e >= i && t.destroy();
            break;
        case "min":
            e <= n && t.destroy();
            break
    }
}

function Zk(t, e) {
    const n = t.opacity;
    if (t.destroyed || !(n != null && n.enable) || (n.maxLoops ?? 0) > 0 && (n.loops ?? 0) > (n.maxLoops ?? 0)) return;
    const i = n.min,
        s = n.max,
        r = n.decay ?? 1;
    if (n.time || (n.time = 0), (n.delayTime ?? 0) > 0 && n.time < (n.delayTime ?? 0) && (n.time += e.value), !((n.delayTime ?? 0) > 0 && n.time < (n.delayTime ?? 0))) {
        switch (n.status) {
            case "increasing":
                n.value >= s ? (n.status = "decreasing", n.loops || (n.loops = 0), n.loops++) : n.value += (n.velocity ?? 0) * e.factor;
                break;
            case "decreasing":
                n.value <= i ? (n.status = "increasing", n.loops || (n.loops = 0), n.loops++) : n.value -= (n.velocity ?? 0) * e.factor;
                break
        }
        n.velocity && n.decay !== 1 && (n.velocity *= r), Yk(t, n.value, i, s), t.destroyed || (n.value = xt(n.value, i, s))
    }
}
class Jk {
    constructor(e) {
        this.container = e
    }
    init(e) {
        const n = e.options.opacity;
        e.opacity = $g(n, 1);
        const i = n.animation;
        i.enable && (e.opacity.velocity = E(i.speed) / 100 * this.container.retina.reduceFactor, i.sync || (e.opacity.velocity *= F()))
    }
    isEnabled(e) {
        return !e.destroyed && !e.spawning && !!e.opacity && e.opacity.enable && ((e.opacity.maxLoops ?? 0) <= 0 || (e.opacity.maxLoops ?? 0) > 0 && (e.opacity.loops ?? 0) < (e.opacity.maxLoops ?? 0))
    }
    reset(e) {
        e.opacity && (e.opacity.time = 0, e.opacity.loops = 0)
    }
    update(e, n) {
        this.isEnabled(e) && Zk(e, n)
    }
}
async function eS(t, e = !0) {
    await t.addParticleUpdater("opacity", n => new Jk(n), e)
}

function tS(t) {
    if (t.outMode !== "bounce" && t.outMode !== "bounce-horizontal" && t.outMode !== "bounceHorizontal" && t.outMode !== "split" || t.direction !== "left" && t.direction !== "right") return;
    t.bounds.right < 0 && t.direction === "left" ? t.particle.position.x = t.size + t.offset.x : t.bounds.left > t.canvasSize.width && t.direction === "right" && (t.particle.position.x = t.canvasSize.width - t.size - t.offset.x);
    const e = t.particle.velocity.x;
    let n = !1;
    if (t.direction === "right" && t.bounds.right >= t.canvasSize.width && e > 0 || t.direction === "left" && t.bounds.left <= 0 && e < 0) {
        const s = Kt(t.particle.options.bounce.horizontal);
        t.particle.velocity.x *= -s, n = !0
    }
    if (!n) return;
    const i = t.offset.x + t.size;
    t.bounds.right >= t.canvasSize.width && t.direction === "right" ? t.particle.position.x = t.canvasSize.width - i : t.bounds.left <= 0 && t.direction === "left" && (t.particle.position.x = i), t.outMode === "split" && t.particle.destroy()
}

function nS(t) {
    if (t.outMode !== "bounce" && t.outMode !== "bounce-vertical" && t.outMode !== "bounceVertical" && t.outMode !== "split" || t.direction !== "bottom" && t.direction !== "top") return;
    t.bounds.bottom < 0 && t.direction === "top" ? t.particle.position.y = t.size + t.offset.y : t.bounds.top > t.canvasSize.height && t.direction === "bottom" && (t.particle.position.y = t.canvasSize.height - t.size - t.offset.y);
    const e = t.particle.velocity.y;
    let n = !1;
    if (t.direction === "bottom" && t.bounds.bottom >= t.canvasSize.height && e > 0 || t.direction === "top" && t.bounds.top <= 0 && e < 0) {
        const s = Kt(t.particle.options.bounce.vertical);
        t.particle.velocity.y *= -s, n = !0
    }
    if (!n) return;
    const i = t.offset.y + t.size;
    t.bounds.bottom >= t.canvasSize.height && t.direction === "bottom" ? t.particle.position.y = t.canvasSize.height - i : t.bounds.top <= 0 && t.direction === "top" && (t.particle.position.y = i), t.outMode === "split" && t.particle.destroy()
}
class iS {
    constructor(e) {
        this.container = e, this.modes = ["bounce", "bounce-vertical", "bounce-horizontal", "bounceVertical", "bounceHorizontal", "split"]
    }
    update(e, n, i, s) {
        if (!this.modes.includes(s)) return;
        const r = this.container;
        let o = !1;
        for (const [, f] of r.plugins)
            if (f.particleBounce !== void 0 && (o = f.particleBounce(e, i, n)), o) break;
        if (o) return;
        const a = e.getPosition(),
            l = e.offset,
            u = e.getRadius(),
            c = nr(a, u),
            d = r.canvas.size;
        tS({
            particle: e,
            outMode: s,
            direction: n,
            bounds: c,
            canvasSize: d,
            offset: l,
            size: u
        }), nS({
            particle: e,
            outMode: s,
            direction: n,
            bounds: c,
            canvasSize: d,
            offset: l,
            size: u
        })
    }
}
class sS {
    constructor(e) {
        this.container = e, this.modes = ["destroy"]
    }
    update(e, n, i, s) {
        if (!this.modes.includes(s)) return;
        const r = this.container;
        switch (e.outType) {
            case "normal":
            case "outside":
                if (tr(e.position, r.canvas.size, G.origin, e.getRadius(), n)) return;
                break;
            case "inside": {
                const {
                    dx: o,
                    dy: a
                } = Ee(e.position, e.moveCenter), {
                    x: l,
                    y: u
                } = e.velocity;
                if (l < 0 && o > e.moveCenter.radius || u < 0 && a > e.moveCenter.radius || l >= 0 && o < -e.moveCenter.radius || u >= 0 && a < -e.moveCenter.radius) return;
                break
            }
        }
        r.particles.remove(e, void 0, !0)
    }
}
class rS {
    constructor(e) {
        this.container = e, this.modes = ["none"]
    }
    update(e, n, i, s) {
        if (!this.modes.includes(s) || e.options.move.distance.horizontal && (n === "left" || n === "right") || e.options.move.distance.vertical && (n === "top" || n === "bottom")) return;
        const r = e.options.move.gravity,
            o = this.container,
            a = o.canvas.size,
            l = e.getRadius();
        if (r.enable) {
            const u = e.position;
            (!r.inverse && u.y > a.height + l && n === "bottom" || r.inverse && u.y < -l && n === "top") && o.particles.remove(e)
        } else {
            if (e.velocity.y > 0 && e.position.y <= a.height + l || e.velocity.y < 0 && e.position.y >= -l || e.velocity.x > 0 && e.position.x <= a.width + l || e.velocity.x < 0 && e.position.x >= -l) return;
            tr(e.position, o.canvas.size, G.origin, l, n) || o.particles.remove(e)
        }
    }
}
class oS {
    constructor(e) {
        this.container = e, this.modes = ["out"]
    }
    update(e, n, i, s) {
        if (!this.modes.includes(s)) return;
        const r = this.container;
        switch (e.outType) {
            case "inside": {
                const {
                    x: o,
                    y: a
                } = e.velocity, l = G.origin;
                l.length = e.moveCenter.radius, l.angle = e.velocity.angle + Math.PI, l.addTo(G.create(e.moveCenter));
                const {
                    dx: u,
                    dy: c
                } = Ee(e.position, l);
                if (o <= 0 && u >= 0 || a <= 0 && c >= 0 || o >= 0 && u <= 0 || a >= 0 && c <= 0) return;
                e.position.x = Math.floor(ye({
                    min: 0,
                    max: r.canvas.size.width
                })), e.position.y = Math.floor(ye({
                    min: 0,
                    max: r.canvas.size.height
                }));
                const {
                    dx: d,
                    dy: f
                } = Ee(e.position, e.moveCenter);
                e.direction = Math.atan2(-f, -d), e.velocity.angle = e.direction;
                break
            }
            default: {
                if (tr(e.position, r.canvas.size, G.origin, e.getRadius(), n)) return;
                switch (e.outType) {
                    case "outside": {
                        e.position.x = Math.floor(ye({
                            min: -e.moveCenter.radius,
                            max: e.moveCenter.radius
                        })) + e.moveCenter.x, e.position.y = Math.floor(ye({
                            min: -e.moveCenter.radius,
                            max: e.moveCenter.radius
                        })) + e.moveCenter.y;
                        const {
                            dx: o,
                            dy: a
                        } = Ee(e.position, e.moveCenter);
                        e.moveCenter.radius && (e.direction = Math.atan2(a, o), e.velocity.angle = e.direction);
                        break
                    }
                    case "normal": {
                        const o = e.options.move.warp,
                            a = r.canvas.size,
                            l = {
                                bottom: a.height + e.getRadius() + e.offset.y,
                                left: -e.getRadius() - e.offset.x,
                                right: a.width + e.getRadius() + e.offset.x,
                                top: -e.getRadius() - e.offset.y
                            },
                            u = e.getRadius(),
                            c = nr(e.position, u);
                        n === "right" && c.left > a.width + e.offset.x ? (e.position.x = l.left, e.initialPosition.x = e.position.x, o || (e.position.y = F() * a.height, e.initialPosition.y = e.position.y)) : n === "left" && c.right < -e.offset.x && (e.position.x = l.right, e.initialPosition.x = e.position.x, o || (e.position.y = F() * a.height, e.initialPosition.y = e.position.y)), n === "bottom" && c.top > a.height + e.offset.y ? (o || (e.position.x = F() * a.width, e.initialPosition.x = e.position.x), e.position.y = l.top, e.initialPosition.y = e.position.y) : n === "top" && c.bottom < -e.offset.y && (o || (e.position.x = F() * a.width, e.initialPosition.x = e.position.x), e.position.y = l.bottom, e.initialPosition.y = e.position.y);
                        break
                    }
                }
                break
            }
        }
    }
}
class aS {
    constructor(e) {
        this.container = e, this._updateOutMode = (n, i, s, r) => {
            for (const o of this.updaters) o.update(n, r, i, s)
        }, this.updaters = [new iS(e), new sS(e), new oS(e), new rS(e)]
    }
    init() {}
    isEnabled(e) {
        return !e.destroyed && !e.spawning
    }
    update(e, n) {
        const i = e.options.move.outModes;
        this._updateOutMode(e, n, i.bottom ?? i.default, "bottom"), this._updateOutMode(e, n, i.left ?? i.default, "left"), this._updateOutMode(e, n, i.right ?? i.default, "right"), this._updateOutMode(e, n, i.top ?? i.default, "top")
    }
}
async function lS(t, e = !0) {
    await t.addParticleUpdater("outModes", n => new aS(n), e)
}

function uS(t, e, n, i) {
    switch (t.options.size.animation.destroy) {
        case "max":
            e >= i && t.destroy();
            break;
        case "min":
            e <= n && t.destroy();
            break
    }
}

function cS(t, e) {
    const n = t.size;
    if (t.destroyed || !n || !n.enable || (n.maxLoops ?? 0) > 0 && (n.loops ?? 0) > (n.maxLoops ?? 0)) return;
    const i = (n.velocity ?? 0) * e.factor,
        s = n.min,
        r = n.max,
        o = n.decay ?? 1;
    if (n.time || (n.time = 0), (n.delayTime ?? 0) > 0 && n.time < (n.delayTime ?? 0) && (n.time += e.value), !((n.delayTime ?? 0) > 0 && n.time < (n.delayTime ?? 0))) {
        switch (n.status) {
            case "increasing":
                n.value >= r ? (n.status = "decreasing", n.loops || (n.loops = 0), n.loops++) : n.value += i;
                break;
            case "decreasing":
                n.value <= s ? (n.status = "increasing", n.loops || (n.loops = 0), n.loops++) : n.value -= i
        }
        n.velocity && o !== 1 && (n.velocity *= o), uS(t, n.value, s, r), t.destroyed || (n.value = xt(n.value, s, r))
    }
}
class dS {
    init(e) {
        const n = e.container,
            i = e.options.size,
            s = i.animation;
        s.enable && (e.size.velocity = (e.retina.sizeAnimationSpeed ?? n.retina.sizeAnimationSpeed) / 100 * n.retina.reduceFactor, s.sync || (e.size.velocity *= F()))
    }
    isEnabled(e) {
        return !e.destroyed && !e.spawning && e.size.enable && ((e.size.maxLoops ?? 0) <= 0 || (e.size.maxLoops ?? 0) > 0 && (e.size.loops ?? 0) < (e.size.maxLoops ?? 0))
    }
    reset(e) {
        e.size.loops = 0
    }
    update(e, n) {
        this.isEnabled(e) && cS(e, n)
    }
}
async function fS(t, e = !0) {
    await t.addParticleUpdater("size", () => new dS, e)
}
async function hS(t, e = !0) {
    await Hk(t, !1), await qk(t, !1), await Xk(t, !1), await eS(t, !1), await lS(t, !1), await fS(t, !1), await t.refresh(e)
}
async function pS() {
    za("ease-in-quad", t => t ** 2), za("ease-out-quad", t => 1 - (1 - t) ** 2), za("ease-in-out-quad", t => t < .5 ? 2 * t ** 2 : 1 - (-2 * t + 2) ** 2 / 2)
}
class mS {
    constructor() {
        this.distance = 200, this.duration = .4, this.easing = "ease-out-quad", this.factor = 1, this.maxSpeed = 50, this.speed = 1
    }
    load(e) {
        e && (e.distance !== void 0 && (this.distance = e.distance), e.duration !== void 0 && (this.duration = e.duration), e.easing !== void 0 && (this.easing = e.easing), e.factor !== void 0 && (this.factor = e.factor), e.maxSpeed !== void 0 && (this.maxSpeed = e.maxSpeed), e.speed !== void 0 && (this.speed = e.speed))
    }
}
let gS = class extends kt {
    constructor(e, n) {
        super(n), this._clickAttract = () => {
            const i = this.container;
            i.attract || (i.attract = {
                particles: []
            });
            const {
                attract: s
            } = i;
            if (s.finish || (s.count || (s.count = 0), s.count++, s.count === i.particles.count && (s.finish = !0)), s.clicking) {
                const r = i.interactivity.mouse.clickPosition,
                    o = i.retina.attractModeDistance;
                if (!o || o < 0 || !r) return;
                this._processAttract(r, o, new Re(r.x, r.y, o))
            } else s.clicking === !1 && (s.particles = [])
        }, this._hoverAttract = () => {
            const i = this.container,
                s = i.interactivity.mouse.position,
                r = i.retina.attractModeDistance;
            !r || r < 0 || !s || this._processAttract(s, r, new Re(s.x, s.y, r))
        }, this._processAttract = (i, s, r) => {
            const o = this.container,
                a = o.actualOptions.interactivity.modes.attract;
            if (!a) return;
            const l = o.particles.quadTree.query(r, u => this.isEnabled(u));
            for (const u of l) {
                const {
                    dx: c,
                    dy: d,
                    distance: f
                } = Ee(u.position, i), h = a.speed * a.factor, y = xt(Ag(a.easing)(1 - f / s) * h, 0, a.maxSpeed), g = G.create(f === 0 ? h : c / f * y, f === 0 ? h : d / f * y);
                u.position.subFrom(g)
            }
        }, this._engine = e, n.attract || (n.attract = {
            particles: []
        }), this.handleClickMode = i => {
            const s = this.container.actualOptions,
                r = s.interactivity.modes.attract;
            if (!(!r || i !== "attract")) {
                n.attract || (n.attract = {
                    particles: []
                }), n.attract.clicking = !0, n.attract.count = 0;
                for (const o of n.attract.particles) this.isEnabled(o) && o.velocity.setTo(o.initialVelocity);
                n.attract.particles = [], n.attract.finish = !1, setTimeout(() => {
                    n.destroyed || (n.attract || (n.attract = {
                        particles: []
                    }), n.attract.clicking = !1)
                }, r.duration * 1e3)
            }
        }
    }
    clear() {}
    init() {
        const e = this.container,
            n = e.actualOptions.interactivity.modes.attract;
        n && (e.retina.attractModeDistance = n.distance * e.retina.pixelRatio)
    }
    async interact() {
        const e = this.container,
            n = e.actualOptions,
            i = e.interactivity.status === Yn,
            s = n.interactivity.events,
            r = s.onHover.enable,
            o = s.onHover.mode,
            a = s.onClick.enable,
            l = s.onClick.mode;
        i && r && Y("attract", o) ? this._hoverAttract() : a && Y("attract", l) && this._clickAttract()
    }
    isEnabled(e) {
        const n = this.container,
            i = n.actualOptions,
            s = n.interactivity.mouse,
            r = ((e == null ? void 0 : e.interactivity) ?? i.interactivity).events;
        if ((!s.position || !r.onHover.enable) && (!s.clickPosition || !r.onClick.enable)) return !1;
        const o = r.onHover.mode,
            a = r.onClick.mode;
        return Y("attract", o) || Y("attract", a)
    }
    loadModeOptions(e, ...n) {
        e.attract || (e.attract = new mS);
        for (const i of n) e.attract.load(i == null ? void 0 : i.attract)
    }
    reset() {}
};
async function yS(t, e = !0) {
    await t.addInteractor("externalAttract", n => new gS(t, n), e)
}
class vS {
    constructor() {
        this.distance = 200
    }
    load(e) {
        e && e.distance !== void 0 && (this.distance = e.distance)
    }
}
class wS extends kt {
    constructor(e) {
        super(e), this._processBounce = (n, i, s) => {
            const r = this.container.particles.quadTree.query(s, o => this.isEnabled(o));
            for (const o of r) s instanceof Re ? Bg(ou(o), {
                position: n,
                radius: i,
                mass: i ** 2 * Math.PI / 2,
                velocity: G.origin,
                factor: G.origin
            }) : s instanceof bt && F1(o, nr(n, i))
        }, this._processMouseBounce = () => {
            const n = this.container,
                i = n.retina.pixelRatio,
                s = 10 * i,
                r = n.interactivity.mouse.position,
                o = n.retina.bounceModeDistance;
            !o || o < 0 || !r || this._processBounce(r, o, new Re(r.x, r.y, o + s))
        }, this._singleSelectorBounce = (n, i) => {
            const s = this.container,
                r = document.querySelectorAll(n);
            r.length && r.forEach(o => {
                const a = o,
                    l = s.retina.pixelRatio,
                    u = {
                        x: (a.offsetLeft + a.offsetWidth / 2) * l,
                        y: (a.offsetTop + a.offsetHeight / 2) * l
                    },
                    c = a.offsetWidth / 2 * l,
                    d = 10 * l,
                    f = i.type === "circle" ? new Re(u.x, u.y, c + d) : new bt(a.offsetLeft * l - d, a.offsetTop * l - d, a.offsetWidth * l + d * 2, a.offsetHeight * l + d * 2);
                this._processBounce(u, c, f)
            })
        }
    }
    clear() {}
    init() {
        const e = this.container,
            n = e.actualOptions.interactivity.modes.bounce;
        n && (e.retina.bounceModeDistance = n.distance * e.retina.pixelRatio)
    }
    async interact() {
        const e = this.container,
            n = e.actualOptions,
            i = n.interactivity.events,
            s = e.interactivity.status === Yn,
            r = i.onHover.enable,
            o = i.onHover.mode,
            a = i.onDiv;
        s && r && Y("bounce", o) ? this._processMouseBounce() : Pc("bounce", a, (l, u) => this._singleSelectorBounce(l, u))
    }
    isEnabled(e) {
        const n = this.container,
            i = n.actualOptions,
            s = n.interactivity.mouse,
            r = ((e == null ? void 0 : e.interactivity) ?? i.interactivity).events,
            o = r.onDiv;
        return s.position && r.onHover.enable && Y("bounce", r.onHover.mode) || Sc("bounce", o)
    }
    loadModeOptions(e, ...n) {
        e.bounce || (e.bounce = new vS);
        for (const i of n) e.bounce.load(i == null ? void 0 : i.bounce)
    }
    reset() {}
}
async function xS(t, e = !0) {
    await t.addInteractor("externalBounce", n => new wS(n), e)
}
class ly {
    constructor() {
        this.distance = 200, this.duration = .4, this.mix = !1
    }
    load(e) {
        if (e) {
            if (e.distance !== void 0 && (this.distance = e.distance), e.duration !== void 0 && (this.duration = e.duration), e.mix !== void 0 && (this.mix = e.mix), e.opacity !== void 0 && (this.opacity = e.opacity), e.color !== void 0) {
                const n = pe(this.color) ? void 0 : this.color;
                this.color = Z(e.color, i => ae.create(n, i))
            }
            e.size !== void 0 && (this.size = e.size)
        }
    }
}
class bS extends ly {
    constructor() {
        super(), this.selectors = []
    }
    get ids() {
        return Z(this.selectors, e => e.replace("#", ""))
    }
    set ids(e) {
        this.selectors = Z(e, n => `#${n}`)
    }
    load(e) {
        super.load(e), e && (e.ids !== void 0 && (this.ids = e.ids), e.selectors !== void 0 && (this.selectors = e.selectors))
    }
}
class kS extends ly {
    load(e) {
        super.load(e), e && (this.divs = Z(e.divs, n => {
            const i = new bS;
            return i.load(n), i
        }))
    }
}

function Bf(t, e, n, i) {
    if (e >= n) {
        const s = t + (e - n) * i;
        return xt(s, t, e)
    } else if (e < n) {
        const s = t - (n - e) * i;
        return xt(s, e, t)
    }
}
class SS extends kt {
    constructor(e) {
        super(e), this._clickBubble = () => {
            var u;
            const n = this.container,
                i = n.actualOptions,
                s = n.interactivity.mouse.clickPosition,
                r = i.interactivity.modes.bubble;
            if (!r || !s) return;
            n.bubble || (n.bubble = {});
            const o = n.retina.bubbleModeDistance;
            if (!o || o < 0) return;
            const a = n.particles.quadTree.queryCircle(s, o, c => this.isEnabled(c)),
                {
                    bubble: l
                } = n;
            for (const c of a) {
                if (!l.clicking) continue;
                c.bubble.inRange = !l.durationEnd;
                const d = c.getPosition(),
                    f = Le(d, s),
                    h = (new Date().getTime() - (n.interactivity.mouse.clickTime || 0)) / 1e3;
                h > r.duration && (l.durationEnd = !0), h > r.duration * 2 && (l.clicking = !1, l.durationEnd = !1);
                const y = {
                    bubbleObj: {
                        optValue: n.retina.bubbleModeSize,
                        value: c.bubble.radius
                    },
                    particlesObj: {
                        optValue: un(c.options.size.value) * n.retina.pixelRatio,
                        value: c.size.value
                    },
                    type: "size"
                };
                this._process(c, f, h, y);
                const g = {
                    bubbleObj: {
                        optValue: r.opacity,
                        value: c.bubble.opacity
                    },
                    particlesObj: {
                        optValue: un(c.options.opacity.value),
                        value: ((u = c.opacity) == null ? void 0 : u.value) ?? 1
                    },
                    type: "opacity"
                };
                this._process(c, f, h, g), !l.durationEnd && f <= o ? this._hoverBubbleColor(c, f) : delete c.bubble.color
            }
        }, this._hoverBubble = () => {
            const n = this.container,
                i = n.interactivity.mouse.position,
                s = n.retina.bubbleModeDistance;
            if (!s || s < 0 || i === void 0) return;
            const r = n.particles.quadTree.queryCircle(i, s, o => this.isEnabled(o));
            for (const o of r) {
                o.bubble.inRange = !0;
                const a = o.getPosition(),
                    l = Le(a, i),
                    u = 1 - l / s;
                l <= s ? u >= 0 && n.interactivity.status === Yn && (this._hoverBubbleSize(o, u), this._hoverBubbleOpacity(o, u), this._hoverBubbleColor(o, u)) : this.reset(o), n.interactivity.status === su && this.reset(o)
            }
        }, this._hoverBubbleColor = (n, i, s) => {
            const r = this.container.actualOptions,
                o = s ?? r.interactivity.modes.bubble;
            if (o) {
                if (!n.bubble.finalColor) {
                    const a = o.color;
                    if (!a) return;
                    const l = Ke(a);
                    n.bubble.finalColor = bn(l)
                }
                if (n.bubble.finalColor)
                    if (o.mix) {
                        n.bubble.color = void 0;
                        const a = n.getFillColor();
                        n.bubble.color = a ? Kg(Cc(a, n.bubble.finalColor, 1 - i, i)) : n.bubble.finalColor
                    } else n.bubble.color = n.bubble.finalColor
            }
        }, this._hoverBubbleOpacity = (n, i, s) => {
            var d, f;
            const r = this.container,
                o = r.actualOptions,
                a = (s == null ? void 0 : s.opacity) ?? ((d = o.interactivity.modes.bubble) == null ? void 0 : d.opacity);
            if (!a) return;
            const l = n.options.opacity.value,
                u = ((f = n.opacity) == null ? void 0 : f.value) ?? 1,
                c = Bf(u, a, un(l), i);
            c !== void 0 && (n.bubble.opacity = c)
        }, this._hoverBubbleSize = (n, i, s) => {
            const r = this.container,
                o = s != null && s.size ? s.size * r.retina.pixelRatio : r.retina.bubbleModeSize;
            if (o === void 0) return;
            const a = un(n.options.size.value) * r.retina.pixelRatio,
                l = n.size.value,
                u = Bf(l, o, a, i);
            u !== void 0 && (n.bubble.radius = u)
        }, this._process = (n, i, s, r) => {
            const o = this.container,
                a = r.bubbleObj.optValue,
                l = o.actualOptions,
                u = l.interactivity.modes.bubble;
            if (!u || a === void 0) return;
            const c = u.duration,
                d = o.retina.bubbleModeDistance,
                f = r.particlesObj.optValue,
                h = r.bubbleObj.value,
                y = r.particlesObj.value || 0,
                g = r.type;
            if (!(!d || d < 0 || a === f))
                if (o.bubble || (o.bubble = {}), o.bubble.durationEnd) h && (g === "size" && delete n.bubble.radius, g === "opacity" && delete n.bubble.opacity);
                else if (i <= d) {
                if ((h ?? y) !== a) {
                    const p = y - s * (y - a) / c;
                    g === "size" && (n.bubble.radius = p), g === "opacity" && (n.bubble.opacity = p)
                }
            } else g === "size" && delete n.bubble.radius, g === "opacity" && delete n.bubble.opacity
        }, this._singleSelectorHover = (n, i, s) => {
            const r = this.container,
                o = document.querySelectorAll(i),
                a = r.actualOptions.interactivity.modes.bubble;
            !a || !o.length || o.forEach(l => {
                const u = l,
                    c = r.retina.pixelRatio,
                    d = {
                        x: (u.offsetLeft + u.offsetWidth / 2) * c,
                        y: (u.offsetTop + u.offsetHeight / 2) * c
                    },
                    f = u.offsetWidth / 2 * c,
                    h = s.type === "circle" ? new Re(d.x, d.y, f) : new bt(u.offsetLeft * c, u.offsetTop * c, u.offsetWidth * c, u.offsetHeight * c),
                    y = r.particles.quadTree.query(h, g => this.isEnabled(g));
                for (const g of y) {
                    if (!h.contains(g.getPosition())) continue;
                    g.bubble.inRange = !0;
                    const x = a.divs,
                        p = jg(x, u);
                    (!g.bubble.div || g.bubble.div !== u) && (this.clear(g, n, !0), g.bubble.div = u), this._hoverBubbleSize(g, 1, p), this._hoverBubbleOpacity(g, 1, p), this._hoverBubbleColor(g, 1, p)
                }
            })
        }, e.bubble || (e.bubble = {}), this.handleClickMode = n => {
            n === "bubble" && (e.bubble || (e.bubble = {}), e.bubble.clicking = !0)
        }
    }
    clear(e, n, i) {
        e.bubble.inRange && !i || (delete e.bubble.div, delete e.bubble.opacity, delete e.bubble.radius, delete e.bubble.color)
    }
    init() {
        const e = this.container,
            n = e.actualOptions.interactivity.modes.bubble;
        n && (e.retina.bubbleModeDistance = n.distance * e.retina.pixelRatio, n.size !== void 0 && (e.retina.bubbleModeSize = n.size * e.retina.pixelRatio))
    }
    async interact(e) {
        const n = this.container.actualOptions,
            i = n.interactivity.events,
            s = i.onHover,
            r = i.onClick,
            o = s.enable,
            a = s.mode,
            l = r.enable,
            u = r.mode,
            c = i.onDiv;
        o && Y("bubble", a) ? this._hoverBubble() : l && Y("bubble", u) ? this._clickBubble() : Pc("bubble", c, (d, f) => this._singleSelectorHover(e, d, f))
    }
    isEnabled(e) {
        const n = this.container,
            i = n.actualOptions,
            s = n.interactivity.mouse,
            r = ((e == null ? void 0 : e.interactivity) ?? i.interactivity).events,
            {
                onClick: o,
                onDiv: a,
                onHover: l
            } = r,
            u = Sc("bubble", a);
        return u || l.enable && s.position || o.enable && s.clickPosition ? Y("bubble", l.mode) || Y("bubble", o.mode) || u : !1
    }
    loadModeOptions(e, ...n) {
        e.bubble || (e.bubble = new kS);
        for (const i of n) e.bubble.load(i == null ? void 0 : i.bubble)
    }
    reset(e) {
        e.bubble.inRange = !1
    }
}
async function PS(t, e = !0) {
    await t.addInteractor("externalBubble", n => new SS(n), e)
}
class CS {
    constructor() {
        this.opacity = .5
    }
    load(e) {
        e && e.opacity !== void 0 && (this.opacity = e.opacity)
    }
}
class _S {
    constructor() {
        this.distance = 80, this.links = new CS, this.radius = 60
    }
    get lineLinked() {
        return this.links
    }
    set lineLinked(e) {
        this.links = e
    }
    get line_linked() {
        return this.links
    }
    set line_linked(e) {
        this.links = e
    }
    load(e) {
        e && (e.distance !== void 0 && (this.distance = e.distance), this.links.load(e.links ?? e.lineLinked ?? e.line_linked), e.radius !== void 0 && (this.radius = e.radius))
    }
}

function TS(t, e, n, i) {
    const s = Math.floor(n.getRadius() / e.getRadius()),
        r = e.getFillColor(),
        o = n.getFillColor();
    if (!r || !o) return;
    const a = e.getPosition(),
        l = n.getPosition(),
        u = Cc(r, o, e.getRadius(), n.getRadius()),
        c = t.createLinearGradient(a.x, a.y, l.x, l.y);
    return c.addColorStop(0, ji(r, i)), c.addColorStop(s > 1 ? 1 : s, Mt(u, i)), c.addColorStop(1, ji(o, i)), c
}

function ES(t, e, n, i, s) {
    Ps(t, i, s), t.lineWidth = e, t.strokeStyle = n, t.stroke()
}

function MS(t, e, n, i) {
    const s = t.actualOptions,
        r = s.interactivity.modes.connect;
    if (r) return TS(e, n, i, r.links.opacity)
}

function RS(t, e, n) {
    t.canvas.draw(i => {
        const s = MS(t, i, e, n);
        if (!s) return;
        const r = e.getPosition(),
            o = n.getPosition();
        ES(i, e.retina.linksWidth ?? 0, s, r, o)
    })
}
class zS extends kt {
    constructor(e) {
        super(e)
    }
    clear() {}
    init() {
        const e = this.container,
            n = e.actualOptions.interactivity.modes.connect;
        n && (e.retina.connectModeDistance = n.distance * e.retina.pixelRatio, e.retina.connectModeRadius = n.radius * e.retina.pixelRatio)
    }
    async interact() {
        const e = this.container;
        if (e.actualOptions.interactivity.events.onHover.enable && e.interactivity.status === "pointermove") {
            const i = e.interactivity.mouse.position;
            if (!e.retina.connectModeDistance || e.retina.connectModeDistance < 0 || !e.retina.connectModeRadius || e.retina.connectModeRadius < 0 || !i) return;
            const s = Math.abs(e.retina.connectModeRadius),
                r = e.particles.quadTree.queryCircle(i, s, a => this.isEnabled(a));
            let o = 0;
            for (const a of r) {
                const l = a.getPosition();
                for (const u of r.slice(o + 1)) {
                    const c = u.getPosition(),
                        d = Math.abs(e.retina.connectModeDistance),
                        f = Math.abs(l.x - c.x),
                        h = Math.abs(l.y - c.y);
                    f < d && h < d && RS(e, a, u)
                }++o
            }
        }
    }
    isEnabled(e) {
        const n = this.container,
            i = n.interactivity.mouse,
            s = ((e == null ? void 0 : e.interactivity) ?? n.actualOptions.interactivity).events;
        return s.onHover.enable && i.position ? Y("connect", s.onHover.mode) : !1
    }
    loadModeOptions(e, ...n) {
        e.connect || (e.connect = new _S);
        for (const i of n) e.connect.load(i == null ? void 0 : i.connect)
    }
    reset() {}
}
async function DS(t, e = !0) {
    await t.addInteractor("externalConnect", n => new zS(n), e)
}
class OS {
    constructor() {
        this.blink = !1, this.consent = !1, this.opacity = 1
    }
    load(e) {
        e && (e.blink !== void 0 && (this.blink = e.blink), e.color !== void 0 && (this.color = ae.create(this.color, e.color)), e.consent !== void 0 && (this.consent = e.consent), e.opacity !== void 0 && (this.opacity = e.opacity))
    }
}
class AS {
    constructor() {
        this.distance = 100, this.links = new OS
    }
    get lineLinked() {
        return this.links
    }
    set lineLinked(e) {
        this.links = e
    }
    get line_linked() {
        return this.links
    }
    set line_linked(e) {
        this.links = e
    }
    load(e) {
        e && (e.distance !== void 0 && (this.distance = e.distance), this.links.load(e.links ?? e.lineLinked ?? e.line_linked))
    }
}

function LS(t, e, n, i, s, r) {
    Ps(t, n, i), t.strokeStyle = Mt(s, r), t.lineWidth = e, t.stroke()
}

function IS(t, e, n, i, s) {
    t.canvas.draw(r => {
        const o = e.getPosition();
        LS(r, e.retina.linksWidth ?? 0, o, s, n, i)
    })
}
class FS extends kt {
    constructor(e) {
        super(e)
    }
    clear() {}
    init() {
        const e = this.container,
            n = e.actualOptions.interactivity.modes.grab;
        n && (e.retina.grabModeDistance = n.distance * e.retina.pixelRatio)
    }
    async interact() {
        var a;
        const e = this.container,
            n = e.actualOptions,
            i = n.interactivity;
        if (!i.modes.grab || !i.events.onHover.enable || e.interactivity.status !== Yn) return;
        const s = e.interactivity.mouse.position;
        if (!s) return;
        const r = e.retina.grabModeDistance;
        if (!r || r < 0) return;
        const o = e.particles.quadTree.queryCircle(s, r, l => this.isEnabled(l));
        for (const l of o) {
            const u = l.getPosition(),
                c = Le(u, s);
            if (c > r) continue;
            const d = i.modes.grab.links,
                f = d.opacity,
                h = f - c * f / r;
            if (h <= 0) continue;
            const y = d.color ?? ((a = l.options.links) == null ? void 0 : a.color);
            if (!e.particles.grabLineColor && y) {
                const x = i.modes.grab.links;
                e.particles.grabLineColor = Xg(y, x.blink, x.consent)
            }
            const g = au(l, void 0, e.particles.grabLineColor);
            g && IS(e, l, g, h, s)
        }
    }
    isEnabled(e) {
        const n = this.container,
            i = n.interactivity.mouse,
            s = ((e == null ? void 0 : e.interactivity) ?? n.actualOptions.interactivity).events;
        return s.onHover.enable && !!i.position && Y("grab", s.onHover.mode)
    }
    loadModeOptions(e, ...n) {
        e.grab || (e.grab = new AS);
        for (const i of n) e.grab.load(i == null ? void 0 : i.grab)
    }
    reset() {}
}
async function NS(t, e = !0) {
    await t.addInteractor("externalGrab", n => new FS(n), e)
}
class VS extends kt {
    constructor(e) {
        super(e), this.handleClickMode = n => {
            if (n !== "pause") return;
            const i = this.container;
            i.getAnimationStatus() ? i.pause() : i.play()
        }
    }
    clear() {}
    init() {}
    async interact() {}
    isEnabled() {
        return !0
    }
    reset() {}
}
async function jS(t, e = !0) {
    await t.addInteractor("externalPause", n => new VS(n), e)
}
class BS {
    constructor() {
        this.default = !0, this.groups = [], this.quantity = 4
    }
    get particles_nb() {
        return this.quantity
    }
    set particles_nb(e) {
        this.quantity = z(e)
    }
    load(e) {
        if (!e) return;
        e.default !== void 0 && (this.default = e.default), e.groups !== void 0 && (this.groups = e.groups.map(i => i)), this.groups.length || (this.default = !0);
        const n = e.quantity ?? e.particles_nb;
        n !== void 0 && (this.quantity = z(n))
    }
}
class US extends kt {
    constructor(e) {
        super(e), this.handleClickMode = n => {
            if (n !== "push") return;
            const i = this.container,
                s = i.actualOptions,
                r = s.interactivity.modes.push;
            if (!r) return;
            const o = E(r.quantity);
            if (o <= 0) return;
            const a = er([void 0, ...r.groups]),
                l = a !== void 0 ? i.actualOptions.particles.groups[a] : void 0;
            i.particles.push(o, i.interactivity.mouse, l, a)
        }
    }
    clear() {}
    init() {}
    async interact() {}
    isEnabled() {
        return !0
    }
    loadModeOptions(e, ...n) {
        e.push || (e.push = new BS);
        for (const i of n) e.push.load(i == null ? void 0 : i.push)
    }
    reset() {}
}
async function $S(t, e = !0) {
    await t.addInteractor("externalPush", n => new US(n), e)
}
class WS {
    constructor() {
        this.quantity = 2
    }
    get particles_nb() {
        return this.quantity
    }
    set particles_nb(e) {
        this.quantity = z(e)
    }
    load(e) {
        if (!e) return;
        const n = e.quantity ?? e.particles_nb;
        n !== void 0 && (this.quantity = z(n))
    }
}
class HS extends kt {
    constructor(e) {
        super(e), this.handleClickMode = n => {
            const i = this.container,
                s = i.actualOptions;
            if (!s.interactivity.modes.remove || n !== "remove") return;
            const r = E(s.interactivity.modes.remove.quantity);
            i.particles.removeQuantity(r)
        }
    }
    clear() {}
    init() {}
    async interact() {}
    isEnabled() {
        return !0
    }
    loadModeOptions(e, ...n) {
        e.remove || (e.remove = new WS);
        for (const i of n) e.remove.load(i == null ? void 0 : i.remove)
    }
    reset() {}
}
async function GS(t, e = !0) {
    await t.addInteractor("externalRemove", n => new HS(n), e)
}
class uy {
    constructor() {
        this.distance = 200, this.duration = .4, this.factor = 100, this.speed = 1, this.maxSpeed = 50, this.easing = "ease-out-quad"
    }
    load(e) {
        e && (e.distance !== void 0 && (this.distance = e.distance), e.duration !== void 0 && (this.duration = e.duration), e.easing !== void 0 && (this.easing = e.easing), e.factor !== void 0 && (this.factor = e.factor), e.speed !== void 0 && (this.speed = e.speed), e.maxSpeed !== void 0 && (this.maxSpeed = e.maxSpeed))
    }
}
class qS extends uy {
    constructor() {
        super(), this.selectors = []
    }
    get ids() {
        return Z(this.selectors, e => e.replace("#", ""))
    }
    set ids(e) {
        this.selectors = Z(e, n => `#${n}`)
    }
    load(e) {
        super.load(e), e && (e.ids !== void 0 && (this.ids = e.ids), e.selectors !== void 0 && (this.selectors = e.selectors))
    }
}
class KS extends uy {
    load(e) {
        super.load(e), e && (this.divs = Z(e.divs, n => {
            const i = new qS;
            return i.load(n), i
        }))
    }
}
class QS extends kt {
    constructor(e, n) {
        super(n), this._clickRepulse = () => {
            const i = this.container,
                s = i.actualOptions.interactivity.modes.repulse;
            if (!s) return;
            const r = i.repulse || {
                particles: []
            };
            if (r.finish || (r.count || (r.count = 0), r.count++, r.count === i.particles.count && (r.finish = !0)), r.clicking) {
                const o = i.retina.repulseModeDistance;
                if (!o || o < 0) return;
                const a = Math.pow(o / 6, 3),
                    l = i.interactivity.mouse.clickPosition;
                if (l === void 0) return;
                const u = new Re(l.x, l.y, a),
                    c = i.particles.quadTree.query(u, d => this.isEnabled(d));
                for (const d of c) {
                    const {
                        dx: f,
                        dy: h,
                        distance: y
                    } = Ee(l, d.position), g = y ** 2, x = s.speed, p = -a * x / g;
                    if (g <= a) {
                        r.particles.push(d);
                        const m = G.create(f, h);
                        m.length = p, d.velocity.setTo(m)
                    }
                }
            } else if (r.clicking === !1) {
                for (const o of r.particles) o.velocity.setTo(o.initialVelocity);
                r.particles = []
            }
        }, this._hoverRepulse = () => {
            const i = this.container,
                s = i.interactivity.mouse.position,
                r = i.retina.repulseModeDistance;
            !r || r < 0 || !s || this._processRepulse(s, r, new Re(s.x, s.y, r))
        }, this._processRepulse = (i, s, r, o) => {
            const a = this.container,
                l = a.particles.quadTree.query(r, c => this.isEnabled(c)),
                u = a.actualOptions.interactivity.modes.repulse;
            if (u)
                for (const c of l) {
                    const {
                        dx: d,
                        dy: f,
                        distance: h
                    } = Ee(c.position, i), y = ((o == null ? void 0 : o.speed) ?? u.speed) * u.factor, g = xt(Ag(u.easing)(1 - h / s) * y, 0, u.maxSpeed), x = G.create(h === 0 ? y : d / h * g, h === 0 ? y : f / h * g);
                    c.position.addTo(x)
                }
        }, this._singleSelectorRepulse = (i, s) => {
            const r = this.container,
                o = r.actualOptions.interactivity.modes.repulse;
            if (!o) return;
            const a = document.querySelectorAll(i);
            a.length && a.forEach(l => {
                const u = l,
                    c = r.retina.pixelRatio,
                    d = {
                        x: (u.offsetLeft + u.offsetWidth / 2) * c,
                        y: (u.offsetTop + u.offsetHeight / 2) * c
                    },
                    f = u.offsetWidth / 2 * c,
                    h = s.type === "circle" ? new Re(d.x, d.y, f) : new bt(u.offsetLeft * c, u.offsetTop * c, u.offsetWidth * c, u.offsetHeight * c),
                    y = o.divs,
                    g = jg(y, u);
                this._processRepulse(d, f, h, g)
            })
        }, this._engine = e, n.repulse || (n.repulse = {
            particles: []
        }), this.handleClickMode = i => {
            const s = this.container.actualOptions,
                r = s.interactivity.modes.repulse;
            if (!r || i !== "repulse") return;
            n.repulse || (n.repulse = {
                particles: []
            });
            const o = n.repulse;
            o.clicking = !0, o.count = 0;
            for (const a of n.repulse.particles) this.isEnabled(a) && a.velocity.setTo(a.initialVelocity);
            o.particles = [], o.finish = !1, setTimeout(() => {
                n.destroyed || (o.clicking = !1)
            }, r.duration * 1e3)
        }
    }
    clear() {}
    init() {
        const e = this.container,
            n = e.actualOptions.interactivity.modes.repulse;
        n && (e.retina.repulseModeDistance = n.distance * e.retina.pixelRatio)
    }
    async interact() {
        const e = this.container,
            n = e.actualOptions,
            i = e.interactivity.status === Yn,
            s = n.interactivity.events,
            r = s.onHover,
            o = r.enable,
            a = r.mode,
            l = s.onClick,
            u = l.enable,
            c = l.mode,
            d = s.onDiv;
        i && o && Y("repulse", a) ? this._hoverRepulse() : u && Y("repulse", c) ? this._clickRepulse() : Pc("repulse", d, (f, h) => this._singleSelectorRepulse(f, h))
    }
    isEnabled(e) {
        const n = this.container,
            i = n.actualOptions,
            s = n.interactivity.mouse,
            r = ((e == null ? void 0 : e.interactivity) ?? i.interactivity).events,
            o = r.onDiv,
            a = r.onHover,
            l = r.onClick,
            u = Sc("repulse", o);
        if (!(u || a.enable && s.position || l.enable && s.clickPosition)) return !1;
        const c = a.mode,
            d = l.mode;
        return Y("repulse", c) || Y("repulse", d) || u
    }
    loadModeOptions(e, ...n) {
        e.repulse || (e.repulse = new KS);
        for (const i of n) e.repulse.load(i == null ? void 0 : i.repulse)
    }
    reset() {}
}
async function XS(t, e = !0) {
    await t.addInteractor("externalRepulse", n => new QS(t, n), e)
}
class YS {
    constructor() {
        this.factor = 3, this.radius = 200
    }
    load(e) {
        e && (e.factor !== void 0 && (this.factor = e.factor), e.radius !== void 0 && (this.radius = e.radius))
    }
}
class ZS extends kt {
    constructor(e) {
        super(e)
    }
    clear(e, n, i) {
        e.slow.inRange && !i || (e.slow.factor = 1)
    }
    init() {
        const e = this.container,
            n = e.actualOptions.interactivity.modes.slow;
        n && (e.retina.slowModeRadius = n.radius * e.retina.pixelRatio)
    }
    async interact() {}
    isEnabled(e) {
        const n = this.container,
            i = n.interactivity.mouse,
            s = ((e == null ? void 0 : e.interactivity) ?? n.actualOptions.interactivity).events;
        return s.onHover.enable && !!i.position && Y("slow", s.onHover.mode)
    }
    loadModeOptions(e, ...n) {
        e.slow || (e.slow = new YS);
        for (const i of n) e.slow.load(i == null ? void 0 : i.slow)
    }
    reset(e) {
        e.slow.inRange = !1;
        const n = this.container,
            i = n.actualOptions,
            s = n.interactivity.mouse.position,
            r = n.retina.slowModeRadius,
            o = i.interactivity.modes.slow;
        if (!o || !r || r < 0 || !s) return;
        const a = e.getPosition(),
            l = Le(s, a),
            u = l / r,
            c = o.factor,
            {
                slow: d
            } = e;
        l > r || (d.inRange = !0, d.factor = u / c)
    }
}
async function JS(t, e = !0) {
    await t.addInteractor("externalSlow", n => new ZS(n), e)
}
const Ga = [0, 4, 2, 1],
    Uf = [8, 8, 4, 2];
class eP {
    constructor(e) {
        this.pos = 0, this.data = new Uint8ClampedArray(e)
    }
    getString(e) {
        const n = this.data.slice(this.pos, this.pos + e);
        return this.pos += n.length, n.reduce((i, s) => i + String.fromCharCode(s), "")
    }
    nextByte() {
        return this.data[this.pos++]
    }
    nextTwoBytes() {
        return this.pos += 2, this.data[this.pos - 2] + (this.data[this.pos - 1] << 8)
    }
    readSubBlocks() {
        let e = "",
            n = 0;
        do {
            n = this.data[this.pos++];
            for (let i = n; --i >= 0; e += String.fromCharCode(this.data[this.pos++]));
        } while (n !== 0);
        return e
    }
    readSubBlocksBin() {
        let e = 0,
            n = 0;
        for (let s = 0;
            (e = this.data[this.pos + s]) !== 0; s += e + 1) n += e;
        const i = new Uint8Array(n);
        for (let s = 0;
            (e = this.data[this.pos++]) !== 0;)
            for (let r = e; --r >= 0; i[s++] = this.data[this.pos++]);
        return i
    }
    skipSubBlocks() {
        for (; this.data[this.pos] !== 0; this.pos += this.data[this.pos] + 1);
        this.pos++
    }
}

function cy(t, e) {
    const n = [];
    for (let i = 0; i < e; i++) n.push({
        r: t.data[t.pos],
        g: t.data[t.pos + 1],
        b: t.data[t.pos + 2]
    }), t.pos += 3;
    return n
}
async function tP(t, e, n, i) {
    switch (t.nextByte()) {
        case 249: {
            const s = e.frames[n(!1)];
            t.pos++;
            const r = t.nextByte();
            s.GCreserved = (r & 224) >>> 5, s.disposalMethod = (r & 28) >>> 2, s.userInputDelayFlag = (r & 2) === 2;
            const o = (r & 1) === 1;
            s.delayTime = t.nextTwoBytes() * 10;
            const a = t.nextByte();
            o && i(a), t.pos++;
            break
        }
        case 255: {
            t.pos++;
            const s = {
                identifier: t.getString(8),
                authenticationCode: t.getString(3),
                data: t.readSubBlocksBin()
            };
            e.applicationExtensions.push(s);
            break
        }
        case 254: {
            e.comments.push([n(!1), t.readSubBlocks()]);
            break
        }
        case 1: {
            if (e.globalColorTable.length === 0) throw new EvalError("plain text extension without global color table");
            t.pos++, e.frames[n(!1)].plainTextData = {
                left: t.nextTwoBytes(),
                top: t.nextTwoBytes(),
                width: t.nextTwoBytes(),
                height: t.nextTwoBytes(),
                charSize: {
                    width: t.nextTwoBytes(),
                    height: t.nextTwoBytes()
                },
                foregroundColor: t.nextByte(),
                backgroundColor: t.nextByte(),
                text: t.readSubBlocks()
            };
            break
        }
        default:
            t.skipSubBlocks();
            break
    }
}
async function nP(t, e, n, i, s, r) {
    const o = e.frames[i(!0)];
    o.left = t.nextTwoBytes(), o.top = t.nextTwoBytes(), o.width = t.nextTwoBytes(), o.height = t.nextTwoBytes();
    const a = t.nextByte(),
        l = (a & 128) === 128,
        u = (a & 64) === 64;
    o.sortFlag = (a & 32) === 32, o.reserved = (a & 24) >>> 3;
    const c = 1 << (a & 7) + 1;
    l && (o.localColorTable = cy(t, c));
    const d = p => {
            const {
                r: m,
                g: v,
                b: w
            } = (l ? o.localColorTable : e.globalColorTable)[p];
            return {
                r: m,
                g: v,
                b: w,
                a: p === s(null) ? n ? ~~((m + v + w) / 3) : 0 : 255
            }
        },
        f = (() => {
            try {
                return new ImageData(o.width, o.height, {
                    colorSpace: "srgb"
                })
            } catch (p) {
                if (p instanceof DOMException && p.name === "IndexSizeError") return null;
                throw p
            }
        })();
    if (f == null) throw new EvalError("GIF frame size is to large");
    const h = t.nextByte(),
        y = t.readSubBlocksBin(),
        g = 1 << h,
        x = (p, m) => {
            const v = p >>> 3,
                w = p & 7;
            return (y[v] + (y[v + 1] << 8) + (y[v + 2] << 16) & (1 << m) - 1 << w) >>> w
        };
    if (u) {
        for (let p = 0, m = h + 1, v = 0, w = [
                [0]
            ], b = 0; b < 4; b++)
            if (Ga[b] < o.height)
                for (let S = 0, _ = 0;;) {
                    const P = p;
                    if (p = x(v, m), v += m + 1, p === g) {
                        m = h + 1, w.length = g + 2;
                        for (let O = 0; O < w.length; O++) w[O] = O < g ? [O] : []
                    } else {
                        p >= w.length ? w.push(w[P].concat(w[P][0])) : P !== g && w.push(w[P].concat(w[p][0]));
                        for (let O = 0; O < w[p].length; O++) {
                            const {
                                r: D,
                                g: B,
                                b: V,
                                a: Je
                            } = d(w[p][O]);
                            f.data.set([D, B, V, Je], Ga[b] * o.width + Uf[b] * _ + S % (o.width * 4)), S += 4
                        }
                        w.length === 1 << m && m < 12 && m++
                    }
                    if (S === o.width * 4 * (_ + 1) && (_++, Ga[b] + Uf[b] * _ >= o.height)) break
                }
        o.image = f, o.bitmap = await createImageBitmap(f)
    } else {
        for (let p = 0, m = h + 1, v = 0, w = [
                [0]
            ], b = -4;;) {
            const S = p;
            if (p = x(v, m), v += m, p === g) {
                m = h + 1, w.length = g + 2;
                for (let _ = 0; _ < w.length; _++) w[_] = _ < g ? [_] : []
            } else {
                if (p === g + 1) break;
                p >= w.length ? w.push(w[S].concat(w[S][0])) : S !== g && w.push(w[S].concat(w[p][0]));
                for (let _ = 0; _ < w[p].length; _++) {
                    const {
                        r: P,
                        g: O,
                        b: D,
                        a: B
                    } = d(w[p][_]);
                    f.data.set([P, O, D, B], b += 4)
                }
                w.length >= 1 << m && m < 12 && m++
            }
        }
        o.image = f, o.bitmap = await createImageBitmap(f)
    }
}
async function iP(t, e, n, i, s, r) {
    switch (t.nextByte()) {
        case 59:
            return !0;
        case 44:
            await nP(t, e, n, i, s);
            break;
        case 33:
            await tP(t, e, i, s);
            break;
        default:
            throw new EvalError("undefined block found")
    }
    return !1
}

function sP(t) {
    for (const e of t.applicationExtensions)
        if (e.identifier + e.authenticationCode === "NETSCAPE2.0") return e.data[1] + (e.data[2] << 8);
    return NaN
}
async function rP(t, e, n) {
    n || (n = !1);
    const i = await fetch(t);
    if (!i.ok && i.status === 404) throw new EvalError("file not found");
    const s = await i.arrayBuffer(),
        r = {
            width: 0,
            height: 0,
            totalTime: 0,
            colorRes: 0,
            pixelAspectRatio: 0,
            frames: [],
            sortFlag: !1,
            globalColorTable: [],
            backgroundImage: new ImageData(1, 1, {
                colorSpace: "srgb"
            }),
            comments: [],
            applicationExtensions: []
        },
        o = new eP(new Uint8ClampedArray(s));
    if (o.getString(6) !== "GIF89a") throw new Error("not a supported GIF file");
    r.width = o.nextTwoBytes(), r.height = o.nextTwoBytes();
    const a = o.nextByte(),
        l = (a & 128) === 128;
    r.colorRes = (a & 112) >>> 4, r.sortFlag = (a & 8) === 8;
    const u = 1 << (a & 7) + 1,
        c = o.nextByte();
    r.pixelAspectRatio = o.nextByte(), r.pixelAspectRatio !== 0 && (r.pixelAspectRatio = (r.pixelAspectRatio + 15) / 64), l && (r.globalColorTable = cy(o, u));
    const d = (() => {
        try {
            return new ImageData(r.width, r.height, {
                colorSpace: "srgb"
            })
        } catch (w) {
            if (w instanceof DOMException && w.name === "IndexSizeError") return null;
            throw w
        }
    })();
    if (d == null) throw new Error("GIF frame size is to large");
    const {
        r: f,
        g: h,
        b: y
    } = r.globalColorTable[c];
    d.data.set(l ? [f, h, y, 255] : [0, 0, 0, 0]);
    for (let w = 4; w < d.data.length; w *= 2) d.data.copyWithin(w, 0, w);
    r.backgroundImage = d;
    let g = -1,
        x = !0,
        p = -1;
    const m = w => (w && (x = !0), g),
        v = w => (w != null && (p = w), p);
    try {
        do x && (r.frames.push({
            left: 0,
            top: 0,
            width: 0,
            height: 0,
            disposalMethod: 0,
            image: new ImageData(1, 1, {
                colorSpace: "srgb"
            }),
            plainTextData: null,
            userInputDelayFlag: !1,
            delayTime: 0,
            sortFlag: !1,
            localColorTable: [],
            reserved: 0,
            GCreserved: 0
        }), g++, p = -1, x = !1); while (!await iP(o, r, n, m, v, e));
        r.frames.length--;
        for (const w of r.frames) {
            if (w.userInputDelayFlag && w.delayTime === 0) {
                r.totalTime = 1 / 0;
                break
            }
            r.totalTime += w.delayTime
        }
        return r
    } catch (w) {
        throw w instanceof EvalError ? new Error(`error while parsing frame ${g} "${w.message}"`) : w
    }
}
const oP = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;

function aP(t, e, n) {
    const {
        svgData: i
    } = t;
    if (!i) return "";
    const s = ji(e, n);
    if (i.includes("fill")) return i.replace(oP, () => s);
    const r = i.indexOf(">");
    return `${i.substring(0,r)} fill="${s}"${i.substring(r)}`
}
async function Yo(t) {
    return new Promise(e => {
        t.loading = !0;
        const n = new Image;
        t.element = n, n.addEventListener("load", () => {
            t.loading = !1, e()
        }), n.addEventListener("error", () => {
            t.element = void 0, t.error = !0, t.loading = !1, Zn().error(`${ct} loading image: ${t.source}`), e()
        }), n.src = t.source
    })
}
async function lP(t) {
    if (t.type !== "gif") {
        await Yo(t);
        return
    }
    t.loading = !0;
    try {
        t.gifData = await rP(t.source), t.gifLoopCount = sP(t.gifData) ?? 0, t.gifLoopCount === 0 && (t.gifLoopCount = 1 / 0)
    } catch {
        t.error = !0
    }
    t.loading = !1
}
async function uP(t) {
    if (t.type !== "svg") {
        await Yo(t);
        return
    }
    t.loading = !0;
    const e = await fetch(t.source);
    e.ok ? t.svgData = await e.text() : (Zn().error(`${ct} Image not found`), t.error = !0), t.loading = !1
}

function cP(t, e, n, i) {
    var o;
    const s = aP(t, n, ((o = i.opacity) == null ? void 0 : o.value) ?? 1),
        r = {
            color: n,
            gif: e.gif,
            data: {
                ...t,
                svgData: s
            },
            loaded: !1,
            ratio: e.width / e.height,
            replaceColor: e.replaceColor ?? e.replace_color,
            source: e.src
        };
    return new Promise(a => {
        const l = new Blob([s], {
                type: "image/svg+xml"
            }),
            u = URL || window.URL || window.webkitURL || window,
            c = u.createObjectURL(l),
            d = new Image;
        d.addEventListener("load", () => {
            r.loaded = !0, r.element = d, a(r), u.revokeObjectURL(c)
        }), d.addEventListener("error", async () => {
            u.revokeObjectURL(c);
            const f = {
                ...t,
                error: !1,
                loading: !0
            };
            await Yo(f), r.loaded = !0, r.element = f.element, a(r)
        }), d.src = c
    })
}
class dP {
    constructor(e) {
        this.loadImageShape = async n => {
            if (!this._engine.loadImage) throw new Error(`${ct} image shape not initialized`);
            await this._engine.loadImage({
                gif: n.gif,
                name: n.name,
                replaceColor: n.replaceColor ?? n.replace_color ?? !1,
                src: n.src
            })
        }, this._engine = e
    }
    addImage(e) {
        this._engine.images || (this._engine.images = []), this._engine.images.push(e)
    }
    draw(e, n, i, s, r) {
        const o = n.image,
            a = o == null ? void 0 : o.element;
        if (o) {
            if (e.globalAlpha = s, o.gif && o.gifData) {
                const l = new OffscreenCanvas(o.gifData.width, o.gifData.height),
                    u = l.getContext("2d");
                if (!u) throw new Error("could not create offscreen canvas context");
                u.imageSmoothingQuality = "low", u.imageSmoothingEnabled = !1, u.clearRect(0, 0, l.width, l.height), n.gifLoopCount === void 0 && (n.gifLoopCount = o.gifLoopCount ?? 0);
                let c = n.gifFrame ?? 0;
                const d = {
                        x: -o.gifData.width * .5,
                        y: -o.gifData.height * .5
                    },
                    f = o.gifData.frames[c];
                if (n.gifTime === void 0 && (n.gifTime = 0), !f.bitmap) return;
                switch (e.scale(i / o.gifData.width, i / o.gifData.height), f.disposalMethod) {
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 0:
                        u.drawImage(f.bitmap, f.left, f.top), e.drawImage(l, d.x, d.y), u.clearRect(0, 0, l.width, l.height);
                        break;
                    case 1:
                        u.drawImage(f.bitmap, f.left, f.top), e.drawImage(l, d.x, d.y);
                        break;
                    case 2:
                        u.drawImage(f.bitmap, f.left, f.top), e.drawImage(l, d.x, d.y), u.clearRect(0, 0, l.width, l.height), o.gifData.globalColorTable.length === 0 ? u.putImageData(o.gifData.frames[0].image, d.x + f.left, d.y + f.top) : u.putImageData(o.gifData.backgroundImage, d.x, d.y);
                        break;
                    case 3: {
                        const h = u.getImageData(0, 0, l.width, l.height);
                        u.drawImage(f.bitmap, f.left, f.top), e.drawImage(l, d.x, d.y), u.clearRect(0, 0, l.width, l.height), u.putImageData(h, 0, 0)
                    }
                    break
                }
                if (n.gifTime += r.value, n.gifTime > f.delayTime) {
                    if (n.gifTime -= f.delayTime, ++c >= o.gifData.frames.length) {
                        if (--n.gifLoopCount <= 0) return;
                        c = 0, u.clearRect(0, 0, l.width, l.height)
                    }
                    n.gifFrame = c
                }
                e.scale(o.gifData.width / i, o.gifData.height / i)
            } else if (a) {
                const l = o.ratio,
                    u = {
                        x: -i,
                        y: -i
                    };
                e.drawImage(a, u.x, u.y, i * 2, i * 2 / l)
            }
            e.globalAlpha = 1
        }
    }
    getSidesCount() {
        return 12
    }
    async init(e) {
        const n = e.actualOptions;
        if (!(!n.preload || !this._engine.loadImage))
            for (const i of n.preload) await this._engine.loadImage(i)
    }
    loadShape(e) {
        if (e.shape !== "image" && e.shape !== "images") return;
        this._engine.images || (this._engine.images = []);
        const n = e.shapeData;
        this._engine.images.find(s => s.name === n.name || s.source === n.src) || this.loadImageShape(n).then(() => {
            this.loadShape(e)
        })
    }
    particleInit(e, n) {
        if (n.shape !== "image" && n.shape !== "images") return;
        this._engine.images || (this._engine.images = []);
        const i = this._engine.images,
            s = n.shapeData,
            r = n.getFillColor(),
            o = i.find(l => l.name === s.name || l.source === s.src);
        if (!o) return;
        const a = s.replaceColor ?? s.replace_color ?? o.replaceColor;
        if (o.loading) {
            setTimeout(() => {
                this.particleInit(e, n)
            });
            return
        }(async () => {
            let l;
            o.svgData && r ? l = await cP(o, s, r, n) : l = {
                color: r,
                data: o,
                element: o.element,
                gif: o.gif,
                gifData: o.gifData,
                gifLoopCount: o.gifLoopCount,
                loaded: !0,
                ratio: s.width && s.height ? s.width / s.height : o.ratio ?? 1,
                replaceColor: a,
                source: s.src
            }, l.ratio || (l.ratio = 1);
            const u = s.fill ?? n.fill,
                c = s.close ?? n.close,
                d = {
                    image: l,
                    fill: u,
                    close: c
                };
            n.image = d.image, n.fill = d.fill, n.close = d.close
        })()
    }
}
class fP {
    constructor() {
        this.src = "", this.gif = !1
    }
    load(e) {
        e && (e.gif !== void 0 && (this.gif = e.gif), e.height !== void 0 && (this.height = e.height), e.name !== void 0 && (this.name = e.name), e.replaceColor !== void 0 && (this.replaceColor = e.replaceColor), e.src !== void 0 && (this.src = e.src), e.width !== void 0 && (this.width = e.width))
    }
}
class hP {
    constructor(e) {
        this.id = "imagePreloader", this._engine = e
    }
    getPlugin() {
        return {}
    }
    loadOptions(e, n) {
        if (!n || !n.preload) return;
        e.preload || (e.preload = []);
        const i = e.preload;
        for (const s of n.preload) {
            const r = i.find(o => o.name === s.name || o.src === s.src);
            if (r) r.load(s);
            else {
                const o = new fP;
                o.load(s), i.push(o)
            }
        }
    }
    needsPlugin() {
        return !0
    }
}

function pP(t) {
    t.loadImage || (t.loadImage = async e => {
        if (!e.name && !e.src) throw new Error(`${ct} no image source provided`);
        if (t.images || (t.images = []), !t.images.find(n => n.name === e.name || n.source === e.src)) try {
            const n = {
                gif: e.gif ?? !1,
                name: e.name ?? e.src,
                source: e.src,
                type: e.src.substring(e.src.length - 3),
                error: !1,
                loading: !0,
                replaceColor: e.replaceColor,
                ratio: e.width && e.height ? e.width / e.height : void 0
            };
            t.images.push(n), await (e.gif ? lP : e.replaceColor ? uP : Yo)(n)
        } catch {
            throw new Error(`${ct} ${e.name??e.src} not found`)
        }
    })
}
async function mP(t, e = !0) {
    pP(t);
    const n = new hP(t);
    await t.addPlugin(n, e), await t.addShape(["image", "images"], new dP(t), e)
}
class gP extends dt {
    constructor() {
        super(), this.sync = !1
    }
    load(e) {
        e && (super.load(e), e.sync !== void 0 && (this.sync = e.sync))
    }
}
class yP extends dt {
    constructor() {
        super(), this.random.minimumValue = 1e-4, this.sync = !1
    }
    load(e) {
        e && (super.load(e), e.sync !== void 0 && (this.sync = e.sync))
    }
}
class vP {
    constructor() {
        this.count = 0, this.delay = new gP, this.duration = new yP
    }
    load(e) {
        e && (e.count !== void 0 && (this.count = e.count), this.delay.load(e.delay), this.duration.load(e.duration))
    }
}
class wP {
    constructor(e) {
        this.container = e
    }
    init(e) {
        const n = this.container,
            i = e.options,
            s = i.life;
        s && (e.life = {
            delay: n.retina.reduceFactor ? E(s.delay.value) * (s.delay.sync ? 1 : F()) / n.retina.reduceFactor * 1e3 : 0,
            delayTime: 0,
            duration: n.retina.reduceFactor ? E(s.duration.value) * (s.duration.sync ? 1 : F()) / n.retina.reduceFactor * 1e3 : 0,
            time: 0,
            count: s.count
        }, e.life.duration <= 0 && (e.life.duration = -1), e.life.count <= 0 && (e.life.count = -1), e.life && (e.spawning = e.life.delay > 0))
    }
    isEnabled(e) {
        return !e.destroyed
    }
    loadOptions(e, ...n) {
        e.life || (e.life = new vP);
        for (const i of n) e.life.load(i == null ? void 0 : i.life)
    }
    update(e, n) {
        if (!this.isEnabled(e) || !e.life) return;
        const i = e.life;
        let s = !1;
        if (e.spawning)
            if (i.delayTime += n.value, i.delayTime >= e.life.delay) s = !0, e.spawning = !1, i.delayTime = 0, i.time = 0;
            else return;
        if (i.duration === -1 || e.spawning || (s ? i.time = 0 : i.time += n.value, i.time < i.duration)) return;
        if (i.time = 0, e.life.count > 0 && e.life.count--, e.life.count === 0) {
            e.destroy();
            return
        }
        const r = this.container.canvas.size,
            o = z(0, r.width),
            a = z(0, r.width);
        e.position.x = ye(o), e.position.y = ye(a), e.spawning = !0, i.delayTime = 0, i.time = 0, e.reset();
        const l = e.options.life;
        l && (i.delay = E(l.delay.value) * 1e3, i.duration = E(l.duration.value) * 1e3)
    }
}
async function xP(t, e = !0) {
    await t.addParticleUpdater("life", n => new wP(n), e)
}
class bP {
    draw(e, n, i) {
        const s = n.shapeData;
        e.moveTo(-i / 2, 0), e.lineTo(i / 2, 0), e.lineCap = (s == null ? void 0 : s.cap) ?? "butt"
    }
    getSidesCount() {
        return 1
    }
}
async function kP(t, e = !0) {
    await t.addShape("line", new bP, e)
}
class SP {
    init() {}
    isEnabled(e) {
        return !Ni() && !e.destroyed && e.container.actualOptions.interactivity.events.onHover.parallax.enable
    }
    move(e) {
        const n = e.container,
            i = n.actualOptions,
            s = i.interactivity.events.onHover.parallax;
        if (Ni() || !s.enable) return;
        const r = s.force,
            o = n.interactivity.mouse.position;
        if (!o) return;
        const a = n.canvas.size,
            l = {
                x: a.width / 2,
                y: a.height / 2
            },
            u = s.smooth,
            c = e.getRadius() / r,
            d = {
                x: (o.x - l.x) * c,
                y: (o.y - l.y) * c
            },
            {
                offset: f
            } = e;
        f.x += (d.x - f.x) / u, f.y += (d.y - f.y) / u
    }
}
async function PP(t, e = !0) {
    await t.addMover("parallax", () => new SP, e)
}
class CP extends Tc {
    constructor(e) {
        super(e)
    }
    clear() {}
    init() {}
    async interact(e) {
        const n = this.container,
            i = e.retina.attractDistance ?? n.retina.attractDistance,
            s = e.getPosition(),
            r = n.particles.quadTree.queryCircle(s, i);
        for (const o of r) {
            if (e === o || !o.options.move.attract.enable || o.destroyed || o.spawning) continue;
            const a = o.getPosition(),
                {
                    dx: l,
                    dy: u
                } = Ee(s, a),
                c = e.options.move.attract.rotate,
                d = l / (c.x * 1e3),
                f = u / (c.y * 1e3),
                h = o.size.value / e.size.value,
                y = 1 / h;
            e.velocity.x -= d * h, e.velocity.y -= f * h, o.velocity.x += d * y, o.velocity.y += f * y
        }
    }
    isEnabled(e) {
        return e.options.move.attract.enable
    }
    reset() {}
}
async function _P(t, e = !0) {
    await t.addInteractor("particlesAttract", n => new CP(n), e)
}

function $f(t, e, n, i, s, r) {
    const o = xt(t.options.collisions.absorb.speed * s.factor / 10, 0, i);
    t.size.value += o / 2, n.size.value -= o, i <= r && (n.size.value = 0, n.destroy())
}

function TP(t, e, n, i) {
    const s = t.getRadius(),
        r = e.getRadius();
    s === void 0 && r !== void 0 ? t.destroy() : s !== void 0 && r === void 0 ? e.destroy() : s !== void 0 && r !== void 0 && (s >= r ? $f(t, s, e, r, n, i) : $f(e, r, t, s, n, i))
}
const Wf = t => {
    t.collisionMaxSpeed === void 0 && (t.collisionMaxSpeed = E(t.options.collisions.maxSpeed)), t.velocity.length > t.collisionMaxSpeed && (t.velocity.length = t.collisionMaxSpeed)
};

function dy(t, e) {
    Bg(ou(t), ou(e)), Wf(t), Wf(e)
}

function EP(t, e) {
    !t.unbreakable && !e.unbreakable && dy(t, e), t.getRadius() === void 0 && e.getRadius() !== void 0 ? t.destroy() : t.getRadius() !== void 0 && e.getRadius() === void 0 ? e.destroy() : t.getRadius() !== void 0 && e.getRadius() !== void 0 && (t.getRadius() >= e.getRadius() ? e : t).destroy()
}

function MP(t, e, n, i) {
    switch (t.options.collisions.mode) {
        case "absorb": {
            TP(t, e, n, i);
            break
        }
        case "bounce": {
            dy(t, e);
            break
        }
        case "destroy": {
            EP(t, e);
            break
        }
    }
}
class RP extends Tc {
    constructor(e) {
        super(e)
    }
    clear() {}
    init() {}
    async interact(e, n) {
        if (e.destroyed || e.spawning) return;
        const i = this.container,
            s = e.getPosition(),
            r = e.getRadius(),
            o = i.particles.quadTree.queryCircle(s, r * 2);
        for (const a of o) {
            if (e === a || !a.options.collisions.enable || e.options.collisions.mode !== a.options.collisions.mode || a.destroyed || a.spawning) continue;
            const l = a.getPosition(),
                u = a.getRadius();
            if (Math.abs(Math.round(s.z) - Math.round(l.z)) > r + u) continue;
            const c = Le(s, l),
                d = r + u;
            c > d || MP(e, a, n, i.retina.pixelRatio)
        }
    }
    isEnabled(e) {
        return e.options.collisions.enable
    }
    reset() {}
}
async function zP(t, e = !0) {
    await t.addInteractor("particlesCollisions", n => new RP(n), e)
}
class DP extends Re {
    constructor(e, n, i, s) {
        super(e, n, i), this.canvasSize = s, this.canvasSize = {
            ...s
        }
    }
    contains(e) {
        const {
            width: n,
            height: i
        } = this.canvasSize, {
            x: s,
            y: r
        } = e;
        return super.contains(e) || super.contains({
            x: s - n,
            y: r
        }) || super.contains({
            x: s - n,
            y: r - i
        }) || super.contains({
            x: s,
            y: r - i
        })
    }
    intersects(e) {
        if (super.intersects(e)) return !0;
        const n = e,
            i = e,
            s = {
                x: e.position.x - this.canvasSize.width,
                y: e.position.y - this.canvasSize.height
            };
        if (i.radius !== void 0) {
            const r = new Re(s.x, s.y, i.radius * 2);
            return super.intersects(r)
        } else if (n.size !== void 0) {
            const r = new bt(s.x, s.y, n.size.width * 2, n.size.height * 2);
            return super.intersects(r)
        }
        return !1
    }
}
class OP {
    constructor() {
        this.blur = 5, this.color = new ae, this.color.value = "#000", this.enable = !1
    }
    load(e) {
        e && (e.blur !== void 0 && (this.blur = e.blur), this.color = ae.create(this.color, e.color), e.enable !== void 0 && (this.enable = e.enable))
    }
}
class AP {
    constructor() {
        this.enable = !1, this.frequency = 1
    }
    load(e) {
        e && (e.color !== void 0 && (this.color = ae.create(this.color, e.color)), e.enable !== void 0 && (this.enable = e.enable), e.frequency !== void 0 && (this.frequency = e.frequency), e.opacity !== void 0 && (this.opacity = e.opacity))
    }
}
class LP {
    constructor() {
        this.blink = !1, this.color = new ae, this.color.value = "#fff", this.consent = !1, this.distance = 100, this.enable = !1, this.frequency = 1, this.opacity = 1, this.shadow = new OP, this.triangles = new AP, this.width = 1, this.warp = !1
    }
    load(e) {
        e && (e.id !== void 0 && (this.id = e.id), e.blink !== void 0 && (this.blink = e.blink), this.color = ae.create(this.color, e.color), e.consent !== void 0 && (this.consent = e.consent), e.distance !== void 0 && (this.distance = e.distance), e.enable !== void 0 && (this.enable = e.enable), e.frequency !== void 0 && (this.frequency = e.frequency), e.opacity !== void 0 && (this.opacity = e.opacity), this.shadow.load(e.shadow), this.triangles.load(e.triangles), e.width !== void 0 && (this.width = e.width), e.warp !== void 0 && (this.warp = e.warp))
    }
}

function IP(t, e, n, i, s) {
    const {
        dx: r,
        dy: o,
        distance: a
    } = Ee(t, e);
    if (!s || a <= n) return a;
    const l = {
            x: Math.abs(r),
            y: Math.abs(o)
        },
        u = {
            x: Math.min(l.x, i.width - l.x),
            y: Math.min(l.y, i.height - l.y)
        };
    return Math.sqrt(u.x ** 2 + u.y ** 2)
}
class FP extends Tc {
    constructor(e) {
        super(e), this._setColor = n => {
            if (!n.options.links) return;
            const i = this.linkContainer,
                s = n.options.links;
            let r = s.id === void 0 ? i.particles.linksColor : i.particles.linksColors.get(s.id);
            if (r) return;
            const o = s.color;
            r = Xg(o, s.blink, s.consent), s.id === void 0 ? i.particles.linksColor = r : i.particles.linksColors.set(s.id, r)
        }, this.linkContainer = e
    }
    clear() {}
    init() {
        this.linkContainer.particles.linksColor = void 0, this.linkContainer.particles.linksColors = new Map
    }
    async interact(e) {
        if (!e.options.links) return;
        e.links = [];
        const n = e.getPosition(),
            i = this.container,
            s = i.canvas.size;
        if (n.x < 0 || n.y < 0 || n.x > s.width || n.y > s.height) return;
        const r = e.options.links,
            o = r.opacity,
            a = e.retina.linksDistance ?? 0,
            l = r.warp,
            u = l ? new DP(n.x, n.y, a, s) : new Re(n.x, n.y, a),
            c = i.particles.quadTree.query(u);
        for (const d of c) {
            const f = d.options.links;
            if (e === d || !(f != null && f.enable) || r.id !== f.id || d.spawning || d.destroyed || !d.links || e.links.some(x => x.destination === d) || d.links.some(x => x.destination === e)) continue;
            const h = d.getPosition();
            if (h.x < 0 || h.y < 0 || h.x > s.width || h.y > s.height) continue;
            const y = IP(n, h, a, s, l && f.warp);
            if (y > a) continue;
            const g = (1 - y / a) * o;
            this._setColor(e), e.links.push({
                destination: d,
                opacity: g
            })
        }
    }
    isEnabled(e) {
        var n;
        return !!((n = e.options.links) != null && n.enable)
    }
    loadParticlesOptions(e, ...n) {
        e.links || (e.links = new LP);
        for (const i of n) e.links.load((i == null ? void 0 : i.links) ?? (i == null ? void 0 : i.lineLinked) ?? (i == null ? void 0 : i.line_linked))
    }
    reset() {}
}
async function NP(t, e = !0) {
    await t.addInteractor("particlesLinks", n => new FP(n), e)
}

function VP(t) {
    let e = !1;
    const {
        begin: n,
        end: i,
        maxDistance: s,
        context: r,
        canvasSize: o,
        width: a,
        backgroundMask: l,
        colorLine: u,
        opacity: c,
        links: d
    } = t;
    if (Le(n, i) <= s) Ps(r, n, i), e = !0;
    else if (d.warp) {
        let h, y;
        const g = {
                x: i.x - o.width,
                y: i.y
            },
            x = Ee(n, g);
        if (x.distance <= s) {
            const p = n.y - x.dy / x.dx * n.x;
            h = {
                x: 0,
                y: p
            }, y = {
                x: o.width,
                y: p
            }
        } else {
            const p = {
                    x: i.x,
                    y: i.y - o.height
                },
                m = Ee(n, p);
            if (m.distance <= s) {
                const w = -(n.y - m.dy / m.dx * n.x) / (m.dy / m.dx);
                h = {
                    x: w,
                    y: 0
                }, y = {
                    x: w,
                    y: o.height
                }
            } else {
                const v = {
                        x: i.x - o.width,
                        y: i.y - o.height
                    },
                    w = Ee(n, v);
                if (w.distance <= s) {
                    const b = n.y - w.dy / w.dx * n.x;
                    h = {
                        x: -b / (w.dy / w.dx),
                        y: b
                    }, y = {
                        x: h.x + o.width,
                        y: h.y + o.height
                    }
                }
            }
        }
        h && y && (Ps(r, n, h), Ps(r, i, y), e = !0)
    }
    if (!e) return;
    r.lineWidth = a, l.enable && (r.globalCompositeOperation = l.composite), r.strokeStyle = Mt(u, c);
    const {
        shadow: f
    } = d;
    if (f.enable) {
        const h = at(f.color);
        h && (r.shadowBlur = f.blur, r.shadowColor = Mt(h))
    }
    r.stroke()
}

function jP(t) {
    const {
        context: e,
        pos1: n,
        pos2: i,
        pos3: s,
        backgroundMask: r,
        colorTriangle: o,
        opacityTriangle: a
    } = t;
    U1(e, n, i, s), r.enable && (e.globalCompositeOperation = r.composite), e.fillStyle = Mt(o, a), e.fill()
}

function BP(t) {
    return t.sort((e, n) => e - n), t.join("_")
}

function Hf(t, e) {
    const n = BP(t.map(s => s.id));
    let i = e.get(n);
    return i === void 0 && (i = F(), e.set(n, i)), i
}
class UP {
    constructor(e) {
        this.container = e, this._drawLinkLine = (n, i) => {
            const s = n.options.links;
            if (!(s != null && s.enable)) return;
            const r = this.container,
                o = r.actualOptions,
                a = i.destination,
                l = n.getPosition(),
                u = a.getPosition();
            let c = i.opacity;
            r.canvas.draw(d => {
                var p;
                let f;
                const h = (p = n.options.twinkle) == null ? void 0 : p.lines;
                if (h != null && h.enable) {
                    const m = h.frequency,
                        v = at(h.color);
                    F() < m && v && (f = v, c = E(h.opacity))
                }
                if (!f) {
                    const m = s.id !== void 0 ? r.particles.linksColors.get(s.id) : r.particles.linksColor;
                    f = au(n, a, m)
                }
                if (!f) return;
                const y = n.retina.linksWidth ?? 0,
                    g = n.retina.linksDistance ?? 0,
                    {
                        backgroundMask: x
                    } = o;
                VP({
                    context: d,
                    width: y,
                    begin: l,
                    end: u,
                    maxDistance: g,
                    canvasSize: r.canvas.size,
                    links: s,
                    backgroundMask: x,
                    colorLine: f,
                    opacity: c
                })
            })
        }, this._drawLinkTriangle = (n, i, s) => {
            const r = n.options.links;
            if (!(r != null && r.enable)) return;
            const o = r.triangles;
            if (!o.enable) return;
            const a = this.container,
                l = a.actualOptions,
                u = i.destination,
                c = s.destination,
                d = o.opacity ?? (i.opacity + s.opacity) / 2;
            d <= 0 || a.canvas.draw(f => {
                const h = n.getPosition(),
                    y = u.getPosition(),
                    g = c.getPosition(),
                    x = n.retina.linksDistance ?? 0;
                if (Le(h, y) > x || Le(g, y) > x || Le(g, h) > x) return;
                let p = at(o.color);
                if (!p) {
                    const m = r.id !== void 0 ? a.particles.linksColors.get(r.id) : a.particles.linksColor;
                    p = au(n, u, m)
                }
                p && jP({
                    context: f,
                    pos1: h,
                    pos2: y,
                    pos3: g,
                    backgroundMask: l.backgroundMask,
                    colorTriangle: p,
                    opacityTriangle: d
                })
            })
        }, this._drawTriangles = (n, i, s, r) => {
            var l, u, c;
            const o = s.destination;
            if (!((l = n.links) != null && l.triangles.enable && ((u = o.options.links) != null && u.triangles.enable))) return;
            const a = (c = o.links) == null ? void 0 : c.filter(d => {
                const f = this._getLinkFrequency(o, d.destination);
                return o.options.links && f <= o.options.links.frequency && r.findIndex(h => h.destination === d.destination) >= 0
            });
            if (a != null && a.length)
                for (const d of a) {
                    const f = d.destination;
                    this._getTriangleFrequency(i, o, f) > n.links.triangles.frequency || this._drawLinkTriangle(i, s, d)
                }
        }, this._getLinkFrequency = (n, i) => Hf([n, i], this._freqs.links), this._getTriangleFrequency = (n, i, s) => Hf([n, i, s], this._freqs.triangles), this._freqs = {
            links: new Map,
            triangles: new Map
        }
    }
    drawParticle(e, n) {
        const {
            links: i,
            options: s
        } = n;
        if (!i || i.length <= 0) return;
        const r = i.filter(o => s.links && this._getLinkFrequency(n, o.destination) <= s.links.frequency);
        for (const o of r) this._drawTriangles(s, n, o, r), o.opacity > 0 && (n.retina.linksWidth ?? 0) > 0 && this._drawLinkLine(n, o)
    }
    async init() {
        this._freqs.links = new Map, this._freqs.triangles = new Map
    }
    particleCreated(e) {
        if (e.links = [], !e.options.links) return;
        const n = this.container.retina.pixelRatio,
            {
                retina: i
            } = e,
            {
                distance: s,
                width: r
            } = e.options.links;
        i.linksDistance = s * n, i.linksWidth = r * n
    }
    particleDestroyed(e) {
        e.links = []
    }
}
class $P {
    constructor() {
        this.id = "links"
    }
    getPlugin(e) {
        return new UP(e)
    }
    loadOptions() {}
    needsPlugin() {
        return !0
    }
}
async function WP(t, e = !0) {
    const n = new $P;
    await t.addPlugin(n, e)
}
async function HP(t, e = !0) {
    await NP(t, e), await WP(t, e)
}
class fy {
    draw(e, n, i) {
        const s = this.getCenter(n, i),
            r = this.getSidesData(n, i),
            o = r.count.numerator * r.count.denominator,
            a = r.count.numerator / r.count.denominator,
            l = 180 * (a - 2) / a,
            u = Math.PI - Math.PI * l / 180;
        if (e) {
            e.beginPath(), e.translate(s.x, s.y), e.moveTo(0, 0);
            for (let c = 0; c < o; c++) e.lineTo(r.length, 0), e.translate(r.length, 0), e.rotate(u)
        }
    }
    getSidesCount(e) {
        const n = e.shapeData;
        return Math.round(E((n == null ? void 0 : n.sides) ?? (n == null ? void 0 : n.nb_sides) ?? 5))
    }
}
class GP extends fy {
    getCenter(e, n) {
        return {
            x: -n / (e.sides / 3.5),
            y: -n / (2.66 / 3.5)
        }
    }
    getSidesData(e, n) {
        const i = e.sides;
        return {
            count: {
                denominator: 1,
                numerator: i
            },
            length: n * 2.66 / (i / 3)
        }
    }
}
class qP extends fy {
    getCenter(e, n) {
        return {
            x: -n,
            y: n / 1.66
        }
    }
    getSidesCount() {
        return 3
    }
    getSidesData(e, n) {
        return {
            count: {
                denominator: 2,
                numerator: 3
            },
            length: n * 2
        }
    }
}
async function KP(t, e = !0) {
    await t.addShape("polygon", new GP, e)
}
async function QP(t, e = !0) {
    await t.addShape("triangle", new qP, e)
}
async function XP(t, e = !0) {
    await KP(t, e), await QP(t, e)
}
class YP {
    constructor() {
        this.enable = !1, this.speed = 0, this.decay = 0, this.sync = !1
    }
    load(e) {
        e && (e.enable !== void 0 && (this.enable = e.enable), e.speed !== void 0 && (this.speed = z(e.speed)), e.decay !== void 0 && (this.decay = z(e.decay)), e.sync !== void 0 && (this.sync = e.sync))
    }
}
class ZP extends dt {
    constructor() {
        super(), this.animation = new YP, this.direction = "clockwise", this.path = !1, this.value = 0
    }
    load(e) {
        e && (super.load(e), e.direction !== void 0 && (this.direction = e.direction), this.animation.load(e.animation), e.path !== void 0 && (this.path = e.path))
    }
}

function JP(t, e) {
    const n = t.rotate,
        i = t.options.rotate;
    if (!n || !i) return;
    const s = i.animation,
        r = (n.velocity ?? 0) * e.factor,
        o = 2 * Math.PI,
        a = n.decay ?? 1;
    if (s.enable) {
        switch (n.status) {
            case "increasing":
                n.value += r, n.value > o && (n.value -= o);
                break;
            case "decreasing":
            default:
                n.value -= r, n.value < 0 && (n.value += o);
                break
        }
        n.velocity && a !== 1 && (n.velocity *= a)
    }
}
class eC {
    constructor(e) {
        this.container = e
    }
    init(e) {
        const n = e.options.rotate;
        if (!n) return;
        e.rotate = {
            enable: n.animation.enable,
            value: E(n.value) * Math.PI / 180
        }, e.pathRotation = n.path;
        let i = n.direction;
        switch (i === "random" && (i = Math.floor(F() * 2) > 0 ? "counter-clockwise" : "clockwise"), i) {
            case "counter-clockwise":
            case "counterClockwise":
                e.rotate.status = "decreasing";
                break;
            case "clockwise":
                e.rotate.status = "increasing";
                break
        }
        const s = n.animation;
        s.enable && (e.rotate.decay = 1 - E(s.decay), e.rotate.velocity = E(s.speed) / 360 * this.container.retina.reduceFactor, s.sync || (e.rotate.velocity *= F())), e.rotation = e.rotate.value
    }
    isEnabled(e) {
        const n = e.options.rotate;
        return n ? !e.destroyed && !e.spawning && n.animation.enable && !n.path : !1
    }
    loadOptions(e, ...n) {
        e.rotate || (e.rotate = new ZP);
        for (const i of n) e.rotate.load(i == null ? void 0 : i.rotate)
    }
    update(e, n) {
        var i;
        this.isEnabled(e) && (JP(e, n), e.rotation = ((i = e.rotate) == null ? void 0 : i.value) ?? 0)
    }
}
async function tC(t, e = !0) {
    await t.addParticleUpdater("rotate", n => new eC(n), e)
}
const nC = Math.sqrt(2);
class iC {
    draw(e, n, i) {
        const s = i / nC,
            r = s * 2;
        e.rect(-s, -s, r, r)
    }
    getSidesCount() {
        return 4
    }
}
async function sC(t, e = !0) {
    await t.addShape(["edge", "square"], new iC, e)
}
class rC {
    draw(e, n, i) {
        const s = n.sides,
            r = n.starInset ?? 2;
        e.moveTo(0, 0 - i);
        for (let o = 0; o < s; o++) e.rotate(Math.PI / s), e.lineTo(0, 0 - i * r), e.rotate(Math.PI / s), e.lineTo(0, 0 - i)
    }
    getSidesCount(e) {
        const n = e.shapeData;
        return Math.round(E((n == null ? void 0 : n.sides) ?? (n == null ? void 0 : n.nb_sides) ?? 5))
    }
    particleInit(e, n) {
        const i = n.shapeData,
            s = E((i == null ? void 0 : i.inset) ?? 2);
        n.starInset = s
    }
}
async function oC(t, e = !0) {
    await t.addShape("star", new rC, e)
}

function qa(t, e, n, i, s) {
    if (!e || !n.enable || (e.maxLoops ?? 0) > 0 && (e.loops ?? 0) > (e.maxLoops ?? 0) || (e.time || (e.time = 0), (e.delayTime ?? 0) > 0 && e.time < (e.delayTime ?? 0) && (e.time += t.value), (e.delayTime ?? 0) > 0 && e.time < (e.delayTime ?? 0))) return;
    const r = ye(n.offset),
        o = (e.velocity ?? 0) * t.factor + r * 3.6,
        a = e.decay ?? 1;
    !s || e.status === "increasing" ? (e.value += o, e.value > i && (e.loops || (e.loops = 0), e.loops++, s && (e.status = "decreasing", e.value -= e.value % i))) : (e.value -= o, e.value < 0 && (e.loops || (e.loops = 0), e.loops++, e.status = "increasing", e.value += e.value)), e.velocity && a !== 1 && (e.velocity *= a), e.value > i && (e.value %= i)
}

function aC(t, e) {
    if (!t.strokeColor || !t.strokeAnimation) return;
    const {
        h: n,
        s: i,
        l: s
    } = t.strokeColor, {
        h: r,
        s: o,
        l: a
    } = t.strokeAnimation;
    n && qa(e, n, r, 360, !1), i && qa(e, i, o, 100, !0), s && qa(e, s, a, 100, !0)
}
class lC {
    constructor(e) {
        this.container = e
    }
    init(e) {
        var o;
        const n = this.container,
            i = e.options,
            s = Ke(i.stroke, e.id, i.reduceDuplicates);
        e.strokeWidth = E(s.width) * n.retina.pixelRatio, e.strokeOpacity = E(s.opacity ?? 1), e.strokeAnimation = (o = s.color) == null ? void 0 : o.animation;
        const r = bn(s.color) ?? e.getFillColor();
        r && (e.strokeColor = Yg(r, e.strokeAnimation, n.retina.reduceFactor))
    }
    isEnabled(e) {
        const n = e.strokeAnimation,
            {
                strokeColor: i
            } = e;
        return !e.destroyed && !e.spawning && !!n && ((i == null ? void 0 : i.h.value) !== void 0 && i.h.enable || (i == null ? void 0 : i.s.value) !== void 0 && i.s.enable || (i == null ? void 0 : i.l.value) !== void 0 && i.l.enable)
    }
    update(e, n) {
        this.isEnabled(e) && aC(e, n)
    }
}
async function uC(t, e = !0) {
    await t.addParticleUpdater("strokeColor", n => new lC(n), e)
}
const Br = ["text", "character", "char"];
class cC {
    draw(e, n, i, s) {
        const r = n.shapeData;
        if (r === void 0) return;
        const o = r.value;
        if (o === void 0) return;
        n.text === void 0 && (n.text = Ke(o, n.randomIndexData));
        const a = n.text,
            l = r.style ?? "",
            u = r.weight ?? "400",
            c = Math.round(i) * 2,
            d = r.font ?? "Verdana",
            f = n.fill,
            h = a.length * i / 2;
        e.font = `${l} ${u} ${c}px "${d}"`;
        const y = {
            x: -h,
            y: i / 2
        };
        e.globalAlpha = s, f ? e.fillText(a, y.x, y.y) : e.strokeText(a, y.x, y.y), e.globalAlpha = 1
    }
    getSidesCount() {
        return 12
    }
    async init(e) {
        const n = e.actualOptions;
        if (Br.find(i => Y(i, n.particles.shape.type))) {
            const i = Br.map(r => n.particles.shape.options[r]).find(r => !!r),
                s = [];
            Z(i, r => {
                s.push(A1(r.font, r.weight))
            }), await Promise.all(s)
        }
    }
    particleInit(e, n) {
        if (!n.shape || !Br.includes(n.shape)) return;
        const i = n.shapeData;
        if (i === void 0) return;
        const s = i.value;
        s !== void 0 && (n.text = Ke(s, n.randomIndexData))
    }
}
async function dC(t, e = !0) {
    await t.addShape(Br, new cC, e)
}
async function fC(t, e = !0) {
    Fk(t), await PP(t, !1), await yS(t, !1), await xS(t, !1), await PS(t, !1), await DS(t, !1), await NS(t, !1), await jS(t, !1), await $S(t, !1), await GS(t, !1), await XS(t, !1), await JS(t, !1), await _P(t, !1), await zP(t, !1), await HP(t, !1), await pS(), await mP(t, !1), await kP(t, !1), await XP(t, !1), await sC(t, !1), await oC(t, !1), await dC(t, !1), await xP(t, !1), await tC(t, !1), await uC(t, !1), await hS(t, e)
}
class hC {
    constructor() {
        this.enable = !1, this.speed = 0, this.decay = 0, this.sync = !1
    }
    load(e) {
        e && (e.enable !== void 0 && (this.enable = e.enable), e.speed !== void 0 && (this.speed = z(e.speed)), e.decay !== void 0 && (this.decay = z(e.decay)), e.sync !== void 0 && (this.sync = e.sync))
    }
}
class pC extends dt {
    constructor() {
        super(), this.animation = new hC, this.direction = "clockwise", this.enable = !1, this.value = 0
    }
    load(e) {
        super.load(e), e && (this.animation.load(e.animation), e.direction !== void 0 && (this.direction = e.direction), e.enable !== void 0 && (this.enable = e.enable))
    }
}

function mC(t, e) {
    if (!t.tilt || !t.options.tilt) return;
    const n = t.options.tilt,
        i = n.animation,
        s = (t.tilt.velocity ?? 0) * e.factor,
        r = 2 * Math.PI,
        o = t.tilt.decay ?? 1;
    if (i.enable) {
        switch (t.tilt.status) {
            case "increasing":
                t.tilt.value += s, t.tilt.value > r && (t.tilt.value -= r);
                break;
            case "decreasing":
            default:
                t.tilt.value -= s, t.tilt.value < 0 && (t.tilt.value += r);
                break
        }
        t.tilt.velocity && o !== 1 && (t.tilt.velocity *= o)
    }
}
class gC {
    constructor(e) {
        this.container = e
    }
    getTransformValues(e) {
        var i;
        const n = ((i = e.tilt) == null ? void 0 : i.enable) && e.tilt;
        return {
            b: n ? Math.cos(n.value) * n.cosDirection : void 0,
            c: n ? Math.sin(n.value) * n.sinDirection : void 0
        }
    }
    init(e) {
        var r;
        const n = e.options.tilt;
        if (!n) return;
        e.tilt = {
            enable: n.enable,
            value: E(n.value) * Math.PI / 180,
            sinDirection: F() >= .5 ? 1 : -1,
            cosDirection: F() >= .5 ? 1 : -1
        };
        let i = n.direction;
        switch (i === "random" && (i = Math.floor(F() * 2) > 0 ? "counter-clockwise" : "clockwise"), i) {
            case "counter-clockwise":
            case "counterClockwise":
                e.tilt.status = "decreasing";
                break;
            case "clockwise":
                e.tilt.status = "increasing";
                break
        }
        const s = (r = e.options.tilt) == null ? void 0 : r.animation;
        s != null && s.enable && (e.tilt.decay = 1 - E(s.decay), e.tilt.velocity = E(s.speed) / 360 * this.container.retina.reduceFactor, s.sync || (e.tilt.velocity *= F()))
    }
    isEnabled(e) {
        var i;
        const n = (i = e.options.tilt) == null ? void 0 : i.animation;
        return !e.destroyed && !e.spawning && !!(n != null && n.enable)
    }
    loadOptions(e, ...n) {
        e.tilt || (e.tilt = new pC);
        for (const i of n) e.tilt.load(i == null ? void 0 : i.tilt)
    }
    update(e, n) {
        this.isEnabled(e) && mC(e, n)
    }
}
async function yC(t, e = !0) {
    await t.addParticleUpdater("tilt", n => new gC(n), e)
}
class Gf {
    constructor() {
        this.enable = !1, this.frequency = .05, this.opacity = 1
    }
    load(e) {
        e && (e.color !== void 0 && (this.color = ae.create(this.color, e.color)), e.enable !== void 0 && (this.enable = e.enable), e.frequency !== void 0 && (this.frequency = e.frequency), e.opacity !== void 0 && (this.opacity = z(e.opacity)))
    }
}
class vC {
    constructor() {
        this.lines = new Gf, this.particles = new Gf
    }
    load(e) {
        e && (this.lines.load(e.lines), this.particles.load(e.particles))
    }
}
class wC {
    getColorStyles(e, n, i, s) {
        const r = e.options,
            o = r.twinkle;
        if (!o) return {};
        const a = o.particles,
            l = a.enable && F() < a.frequency,
            u = e.options.zIndex,
            c = (1 - e.zIndexFactor) ** u.opacityRate,
            d = l ? E(a.opacity) * c : s,
            f = bn(a.color),
            h = f ? ji(f, d) : void 0,
            y = {},
            g = l && h;
        return y.fill = g ? h : void 0, y.stroke = g ? h : void 0, y
    }
    init() {}
    isEnabled(e) {
        const n = e.options,
            i = n.twinkle;
        return i ? i.particles.enable : !1
    }
    loadOptions(e, ...n) {
        e.twinkle || (e.twinkle = new vC);
        for (const i of n) e.twinkle.load(i == null ? void 0 : i.twinkle)
    }
    update() {}
}
async function xC(t, e = !0) {
    await t.addParticleUpdater("twinkle", () => new wC, e)
}
class bC {
    constructor() {
        this.angle = 50, this.move = 10
    }
    load(e) {
        e && (e.angle !== void 0 && (this.angle = z(e.angle)), e.move !== void 0 && (this.move = z(e.move)))
    }
}
class kC {
    constructor() {
        this.distance = 5, this.enable = !1, this.speed = new bC
    }
    load(e) {
        if (e && (e.distance !== void 0 && (this.distance = z(e.distance)), e.enable !== void 0 && (this.enable = e.enable), e.speed !== void 0))
            if (Me(e.speed)) this.speed.load({
                angle: e.speed
            });
            else {
                const n = e.speed;
                n.min !== void 0 ? this.speed.load({
                    angle: n
                }) : this.speed.load(e.speed)
            }
    }
}

function SC(t, e) {
    const {
        wobble: n
    } = t.options, {
        wobble: i
    } = t;
    if (!(n != null && n.enable) || !i) return;
    const s = i.angleSpeed * e.factor,
        r = i.moveSpeed * e.factor,
        o = r * ((t.retina.wobbleDistance ?? 0) * e.factor) / (1e3 / 60),
        a = 2 * Math.PI,
        {
            position: l
        } = t;
    i.angle += s, i.angle > a && (i.angle -= a), l.x += o * Math.cos(i.angle), l.y += o * Math.abs(Math.sin(i.angle))
}
class PC {
    constructor(e) {
        this.container = e
    }
    init(e) {
        const n = e.options.wobble;
        n != null && n.enable ? e.wobble = {
            angle: F() * Math.PI * 2,
            angleSpeed: E(n.speed.angle) / 360,
            moveSpeed: E(n.speed.move) / 10
        } : e.wobble = {
            angle: 0,
            angleSpeed: 0,
            moveSpeed: 0
        }, e.retina.wobbleDistance = E((n == null ? void 0 : n.distance) ?? 0) * this.container.retina.pixelRatio
    }
    isEnabled(e) {
        var n;
        return !e.destroyed && !e.spawning && !!((n = e.options.wobble) != null && n.enable)
    }
    loadOptions(e, ...n) {
        e.wobble || (e.wobble = new kC);
        for (const i of n) e.wobble.load(i == null ? void 0 : i.wobble)
    }
    update(e, n) {
        this.isEnabled(e) && SC(e, n)
    }
}
async function CC(t, e = !0) {
    await t.addParticleUpdater("wobble", n => new PC(n), e)
}
async function _C(t, e = !0) {
    await vk(t, !1), await Lk(t, !1), await yC(t, !1), await xC(t, !1), await CC(t, !1), await Rk(t, !1), await uk(t, !1), await Tk(t, !1), await fC(t, e)
}

function TC(t) {
    if (typeof Proxy > "u") return t;
    const e = new Map,
        n = (...i) => t(...i);
    return new Proxy(n, {
        get: (i, s) => s === "create" ? t : (e.has(s) || e.set(s, t(s)), e.get(s))
    })
}

function Zo(t) {
    return t !== null && typeof t == "object" && typeof t.start == "function"
}
const lu = t => Array.isArray(t);

function hy(t, e) {
    if (!Array.isArray(e)) return !1;
    const n = e.length;
    if (n !== t.length) return !1;
    for (let i = 0; i < n; i++)
        if (e[i] !== t[i]) return !1;
    return !0
}

function Hs(t) {
    return typeof t == "string" || Array.isArray(t)
}

function qf(t) {
    const e = [{}, {}];
    return t == null || t.values.forEach((n, i) => {
        e[0][i] = n.get(), e[1][i] = n.getVelocity()
    }), e
}

function Ec(t, e, n, i) {
    if (typeof e == "function") {
        const [s, r] = qf(i);
        e = e(n !== void 0 ? n : t.custom, s, r)
    }
    if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
        const [s, r] = qf(i);
        e = e(n !== void 0 ? n : t.custom, s, r)
    }
    return e
}

function Jo(t, e, n) {
    const i = t.getProps();
    return Ec(i, e, n !== void 0 ? n : i.custom, t)
}
const Mc = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    Rc = ["initial", ...Mc],
    ir = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    ti = new Set(ir),
    jt = t => t * 1e3,
    Bt = t => t / 1e3,
    EC = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    },
    MC = t => ({
        type: "spring",
        stiffness: 550,
        damping: t === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    RC = {
        type: "keyframes",
        duration: .8
    },
    zC = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    },
    DC = (t, {
        keyframes: e
    }) => e.length > 2 ? RC : ti.has(t) ? t.startsWith("scale") ? MC(e[1]) : EC : zC;

function zc(t, e) {
    return t ? t[e] || t.default || t : void 0
}
const OC = {
        skipAnimations: !1,
        useManualTiming: !1
    },
    AC = t => t !== null;

function ea(t, {
    repeat: e,
    repeatType: n = "loop"
}, i) {
    const s = t.filter(AC),
        r = e && n !== "loop" && e % 2 === 1 ? 0 : s.length - 1;
    return !r || i === void 0 ? s[r] : i
}
const ze = t => t;

function LC(t) {
    let e = new Set,
        n = new Set,
        i = !1,
        s = !1;
    const r = new WeakSet;
    let o = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };

    function a(u) {
        r.has(u) && (l.schedule(u), t()), u(o)
    }
    const l = {
        schedule: (u, c = !1, d = !1) => {
            const h = d && i ? e : n;
            return c && r.add(u), h.has(u) || h.add(u), u
        },
        cancel: u => {
            n.delete(u), r.delete(u)
        },
        process: u => {
            if (o = u, i) {
                s = !0;
                return
            }
            i = !0, [e, n] = [n, e], n.clear(), e.forEach(a), i = !1, s && (s = !1, l.process(u))
        }
    };
    return l
}
const Cr = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"],
    IC = 40;

function py(t, e) {
    let n = !1,
        i = !0;
    const s = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        r = () => n = !0,
        o = Cr.reduce((p, m) => (p[m] = LC(r), p), {}),
        {
            read: a,
            resolveKeyframes: l,
            update: u,
            preRender: c,
            render: d,
            postRender: f
        } = o,
        h = () => {
            const p = performance.now();
            n = !1, s.delta = i ? 1e3 / 60 : Math.max(Math.min(p - s.timestamp, IC), 1), s.timestamp = p, s.isProcessing = !0, a.process(s), l.process(s), u.process(s), c.process(s), d.process(s), f.process(s), s.isProcessing = !1, n && e && (i = !1, t(h))
        },
        y = () => {
            n = !0, i = !0, s.isProcessing || t(h)
        };
    return {
        schedule: Cr.reduce((p, m) => {
            const v = o[m];
            return p[m] = (w, b = !1, S = !1) => (n || y(), v.schedule(w, b, S)), p
        }, {}),
        cancel: p => {
            for (let m = 0; m < Cr.length; m++) o[Cr[m]].cancel(p)
        },
        state: s,
        steps: o
    }
}
const {
    schedule: H,
    cancel: kn,
    state: xe,
    steps: Ka
} = py(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ze, !0), my = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t, FC = 1e-7, NC = 12;

function VC(t, e, n, i, s) {
    let r, o, a = 0;
    do o = e + (n - e) / 2, r = my(o, i, s) - t, r > 0 ? n = o : e = o; while (Math.abs(r) > FC && ++a < NC);
    return o
}

function sr(t, e, n, i) {
    if (t === e && n === i) return ze;
    const s = r => VC(r, 0, 1, t, n);
    return r => r === 0 || r === 1 ? r : my(s(r), e, i)
}
const gy = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
    yy = t => e => 1 - t(1 - e),
    vy = sr(.33, 1.53, .69, .99),
    Dc = yy(vy),
    wy = gy(Dc),
    xy = t => (t *= 2) < 1 ? .5 * Dc(t) : .5 * (2 - Math.pow(2, -10 * (t - 1))),
    Oc = t => 1 - Math.sin(Math.acos(t)),
    by = yy(Oc),
    ky = gy(Oc),
    Sy = t => /^0[^.\s]+$/u.test(t);

function jC(t) {
    return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || Sy(t) : !0
}
let uu = ze;
const Py = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
    Cy = t => e => typeof e == "string" && e.startsWith(t),
    _y = Cy("--"),
    BC = Cy("var(--"),
    Ac = t => BC(t) ? UC.test(t.split("/*")[0].trim()) : !1,
    UC = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
    $C = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function WC(t) {
    const e = $C.exec(t);
    if (!e) return [, ];
    const [, n, i, s] = e;
    return [`--${n??i}`, s]
}

function Ty(t, e, n = 1) {
    const [i, s] = WC(t);
    if (!i) return;
    const r = window.getComputedStyle(e).getPropertyValue(i);
    if (r) {
        const o = r.trim();
        return Py(o) ? parseFloat(o) : o
    }
    return Ac(s) ? Ty(s, e, n + 1) : s
}
const Sn = (t, e, n) => n > e ? e : n < t ? t : n,
    Ki = {
        test: t => typeof t == "number",
        parse: parseFloat,
        transform: t => t
    },
    Gs = {
        ...Ki,
        transform: t => Sn(0, 1, t)
    },
    _r = {
        ...Ki,
        default: 1
    },
    rr = t => ({
        test: e => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
        parse: parseFloat,
        transform: e => `${e}${t}`
    }),
    Jt = rr("deg"),
    Rt = rr("%"),
    L = rr("px"),
    HC = rr("vh"),
    GC = rr("vw"),
    Kf = {
        ...Rt,
        parse: t => Rt.parse(t) / 100,
        transform: t => Rt.transform(t * 100)
    },
    qC = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
    Qf = t => t === Ki || t === L,
    Xf = (t, e) => parseFloat(t.split(", ")[e]),
    Yf = (t, e) => (n, {
        transform: i
    }) => {
        if (i === "none" || !i) return 0;
        const s = i.match(/^matrix3d\((.+)\)$/u);
        if (s) return Xf(s[1], e);
        {
            const r = i.match(/^matrix\((.+)\)$/u);
            return r ? Xf(r[1], t) : 0
        }
    },
    KC = new Set(["x", "y", "z"]),
    QC = ir.filter(t => !KC.has(t));

function XC(t) {
    const e = [];
    return QC.forEach(n => {
        const i = t.getValue(n);
        i !== void 0 && (e.push([n, i.get()]), i.set(n.startsWith("scale") ? 1 : 0))
    }), e
}
const Ui = {
    width: ({
        x: t
    }, {
        paddingLeft: e = "0",
        paddingRight: n = "0"
    }) => t.max - t.min - parseFloat(e) - parseFloat(n),
    height: ({
        y: t
    }, {
        paddingTop: e = "0",
        paddingBottom: n = "0"
    }) => t.max - t.min - parseFloat(e) - parseFloat(n),
    top: (t, {
        top: e
    }) => parseFloat(e),
    left: (t, {
        left: e
    }) => parseFloat(e),
    bottom: ({
        y: t
    }, {
        top: e
    }) => parseFloat(e) + (t.max - t.min),
    right: ({
        x: t
    }, {
        left: e
    }) => parseFloat(e) + (t.max - t.min),
    x: Yf(4, 13),
    y: Yf(5, 14)
};
Ui.translateX = Ui.x;
Ui.translateY = Ui.y;
const Ey = t => e => e.test(t),
    YC = {
        test: t => t === "auto",
        parse: t => t
    },
    My = [Ki, L, Rt, Jt, GC, HC, YC],
    Zf = t => My.find(Ey(t)),
    Hn = new Set;
let cu = !1,
    du = !1;

function Ry() {
    if (du) {
        const t = Array.from(Hn).filter(i => i.needsMeasurement),
            e = new Set(t.map(i => i.element)),
            n = new Map;
        e.forEach(i => {
            const s = XC(i);
            s.length && (n.set(i, s), i.render())
        }), t.forEach(i => i.measureInitialState()), e.forEach(i => {
            i.render();
            const s = n.get(i);
            s && s.forEach(([r, o]) => {
                var a;
                (a = i.getValue(r)) === null || a === void 0 || a.set(o)
            })
        }), t.forEach(i => i.measureEndState()), t.forEach(i => {
            i.suspendedScrollY !== void 0 && window.scrollTo(0, i.suspendedScrollY)
        })
    }
    du = !1, cu = !1, Hn.forEach(t => t.complete()), Hn.clear()
}

function zy() {
    Hn.forEach(t => {
        t.readKeyframes(), t.needsMeasurement && (du = !0)
    })
}

function ZC() {
    zy(), Ry()
}
class Lc {
    constructor(e, n, i, s, r, o = !1) {
        this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...e], this.onComplete = n, this.name = i, this.motionValue = s, this.element = r, this.isAsync = o
    }
    scheduleResolve() {
        this.isScheduled = !0, this.isAsync ? (Hn.add(this), cu || (cu = !0, H.read(zy), H.resolveKeyframes(Ry))) : (this.readKeyframes(), this.complete())
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: e,
            name: n,
            element: i,
            motionValue: s
        } = this;
        for (let r = 0; r < e.length; r++)
            if (e[r] === null)
                if (r === 0) {
                    const o = s == null ? void 0 : s.get(),
                        a = e[e.length - 1];
                    if (o !== void 0) e[0] = o;
                    else if (i && n) {
                        const l = i.readValue(n, a);
                        l != null && (e[0] = l)
                    }
                    e[0] === void 0 && (e[0] = a), s && o === void 0 && s.set(e[0])
                } else e[r] = e[r - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), Hn.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1, Hn.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const Cs = t => Math.round(t * 1e5) / 1e5,
    Ic = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function JC(t) {
    return t == null
}
const e_ = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    Fc = (t, e) => n => !!(typeof n == "string" && e_.test(n) && n.startsWith(t) || e && !JC(n) && Object.prototype.hasOwnProperty.call(n, e)),
    Dy = (t, e, n) => i => {
        if (typeof i != "string") return i;
        const [s, r, o, a] = i.match(Ic);
        return {
            [t]: parseFloat(s),
            [e]: parseFloat(r),
            [n]: parseFloat(o),
            alpha: a !== void 0 ? parseFloat(a) : 1
        }
    },
    t_ = t => Sn(0, 255, t),
    Qa = {
        ...Ki,
        transform: t => Math.round(t_(t))
    },
    Bn = {
        test: Fc("rgb", "red"),
        parse: Dy("red", "green", "blue"),
        transform: ({
            red: t,
            green: e,
            blue: n,
            alpha: i = 1
        }) => "rgba(" + Qa.transform(t) + ", " + Qa.transform(e) + ", " + Qa.transform(n) + ", " + Cs(Gs.transform(i)) + ")"
    };

function n_(t) {
    let e = "",
        n = "",
        i = "",
        s = "";
    return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), i = t.substring(5, 7), s = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), i = t.substring(3, 4), s = t.substring(4, 5), e += e, n += n, i += i, s += s), {
        red: parseInt(e, 16),
        green: parseInt(n, 16),
        blue: parseInt(i, 16),
        alpha: s ? parseInt(s, 16) / 255 : 1
    }
}
const fu = {
        test: Fc("#"),
        parse: n_,
        transform: Bn.transform
    },
    vi = {
        test: Fc("hsl", "hue"),
        parse: Dy("hue", "saturation", "lightness"),
        transform: ({
            hue: t,
            saturation: e,
            lightness: n,
            alpha: i = 1
        }) => "hsla(" + Math.round(t) + ", " + Rt.transform(Cs(e)) + ", " + Rt.transform(Cs(n)) + ", " + Cs(Gs.transform(i)) + ")"
    },
    Ce = {
        test: t => Bn.test(t) || fu.test(t) || vi.test(t),
        parse: t => Bn.test(t) ? Bn.parse(t) : vi.test(t) ? vi.parse(t) : fu.parse(t),
        transform: t => typeof t == "string" ? t : t.hasOwnProperty("red") ? Bn.transform(t) : vi.transform(t)
    },
    i_ = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function s_(t) {
    var e, n;
    return isNaN(t) && typeof t == "string" && (((e = t.match(Ic)) === null || e === void 0 ? void 0 : e.length) || 0) + (((n = t.match(i_)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const Oy = "number",
    Ay = "color",
    r_ = "var",
    o_ = "var(",
    Jf = "${}",
    a_ = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function qs(t) {
    const e = t.toString(),
        n = [],
        i = {
            color: [],
            number: [],
            var: []
        },
        s = [];
    let r = 0;
    const a = e.replace(a_, l => (Ce.test(l) ? (i.color.push(r), s.push(Ay), n.push(Ce.parse(l))) : l.startsWith(o_) ? (i.var.push(r), s.push(r_), n.push(l)) : (i.number.push(r), s.push(Oy), n.push(parseFloat(l))), ++r, Jf)).split(Jf);
    return {
        values: n,
        split: a,
        indexes: i,
        types: s
    }
}

function Ly(t) {
    return qs(t).values
}

function Iy(t) {
    const {
        split: e,
        types: n
    } = qs(t), i = e.length;
    return s => {
        let r = "";
        for (let o = 0; o < i; o++)
            if (r += e[o], s[o] !== void 0) {
                const a = n[o];
                a === Oy ? r += Cs(s[o]) : a === Ay ? r += Ce.transform(s[o]) : r += s[o]
            } return r
    }
}
const l_ = t => typeof t == "number" ? 0 : t;

function u_(t) {
    const e = Ly(t);
    return Iy(t)(e.map(l_))
}
const Pn = {
        test: s_,
        parse: Ly,
        createTransformer: Iy,
        getAnimatableNone: u_
    },
    c_ = new Set(["brightness", "contrast", "saturate", "opacity"]);

function d_(t) {
    const [e, n] = t.slice(0, -1).split("(");
    if (e === "drop-shadow") return t;
    const [i] = n.match(Ic) || [];
    if (!i) return t;
    const s = n.replace(i, "");
    let r = c_.has(e) ? 1 : 0;
    return i !== n && (r *= 100), e + "(" + r + s + ")"
}
const f_ = /\b([a-z-]*)\(.*?\)/gu,
    hu = {
        ...Pn,
        getAnimatableNone: t => {
            const e = t.match(f_);
            return e ? e.map(d_).join(" ") : t
        }
    },
    h_ = {
        borderWidth: L,
        borderTopWidth: L,
        borderRightWidth: L,
        borderBottomWidth: L,
        borderLeftWidth: L,
        borderRadius: L,
        radius: L,
        borderTopLeftRadius: L,
        borderTopRightRadius: L,
        borderBottomRightRadius: L,
        borderBottomLeftRadius: L,
        width: L,
        maxWidth: L,
        height: L,
        maxHeight: L,
        top: L,
        right: L,
        bottom: L,
        left: L,
        padding: L,
        paddingTop: L,
        paddingRight: L,
        paddingBottom: L,
        paddingLeft: L,
        margin: L,
        marginTop: L,
        marginRight: L,
        marginBottom: L,
        marginLeft: L,
        backgroundPositionX: L,
        backgroundPositionY: L
    },
    p_ = {
        rotate: Jt,
        rotateX: Jt,
        rotateY: Jt,
        rotateZ: Jt,
        scale: _r,
        scaleX: _r,
        scaleY: _r,
        scaleZ: _r,
        skew: Jt,
        skewX: Jt,
        skewY: Jt,
        distance: L,
        translateX: L,
        translateY: L,
        translateZ: L,
        x: L,
        y: L,
        z: L,
        perspective: L,
        transformPerspective: L,
        opacity: Gs,
        originX: Kf,
        originY: Kf,
        originZ: L
    },
    eh = {
        ...Ki,
        transform: Math.round
    },
    Nc = {
        ...h_,
        ...p_,
        zIndex: eh,
        size: L,
        fillOpacity: Gs,
        strokeOpacity: Gs,
        numOctaves: eh
    },
    m_ = {
        ...Nc,
        color: Ce,
        backgroundColor: Ce,
        outlineColor: Ce,
        fill: Ce,
        stroke: Ce,
        borderColor: Ce,
        borderTopColor: Ce,
        borderRightColor: Ce,
        borderBottomColor: Ce,
        borderLeftColor: Ce,
        filter: hu,
        WebkitFilter: hu
    },
    Vc = t => m_[t];

function Fy(t, e) {
    let n = Vc(t);
    return n !== hu && (n = Pn), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
}
const g_ = new Set(["auto", "none", "0"]);

function y_(t, e, n) {
    let i = 0,
        s;
    for (; i < t.length && !s;) {
        const r = t[i];
        typeof r == "string" && !g_.has(r) && qs(r).values.length && (s = t[i]), i++
    }
    if (s && n)
        for (const r of e) t[r] = Fy(n, s)
}
class Ny extends Lc {
    constructor(e, n, i, s, r) {
        super(e, n, i, s, r, !0)
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: e,
            element: n,
            name: i
        } = this;
        if (!n || !n.current) return;
        super.readKeyframes();
        for (let l = 0; l < e.length; l++) {
            let u = e[l];
            if (typeof u == "string" && (u = u.trim(), Ac(u))) {
                const c = Ty(u, n.current);
                c !== void 0 && (e[l] = c), l === e.length - 1 && (this.finalKeyframe = u)
            }
        }
        if (this.resolveNoneKeyframes(), !qC.has(i) || e.length !== 2) return;
        const [s, r] = e, o = Zf(s), a = Zf(r);
        if (o !== a)
            if (Qf(o) && Qf(a))
                for (let l = 0; l < e.length; l++) {
                    const u = e[l];
                    typeof u == "string" && (e[l] = parseFloat(u))
                } else this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {
            unresolvedKeyframes: e,
            name: n
        } = this, i = [];
        for (let s = 0; s < e.length; s++) jC(e[s]) && i.push(s);
        i.length && y_(e, i, n)
    }
    measureInitialState() {
        const {
            element: e,
            unresolvedKeyframes: n,
            name: i
        } = this;
        if (!e || !e.current) return;
        i === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Ui[i](e.measureViewportBox(), window.getComputedStyle(e.current)), n[0] = this.measuredOrigin;
        const s = n[n.length - 1];
        s !== void 0 && e.getValue(i, s).jump(s, !1)
    }
    measureEndState() {
        var e;
        const {
            element: n,
            name: i,
            unresolvedKeyframes: s
        } = this;
        if (!n || !n.current) return;
        const r = n.getValue(i);
        r && r.jump(this.measuredOrigin, !1);
        const o = s.length - 1,
            a = s[o];
        s[o] = Ui[i](n.measureViewportBox(), window.getComputedStyle(n.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), !((e = this.removedTransforms) === null || e === void 0) && e.length && this.removedTransforms.forEach(([l, u]) => {
            n.getValue(l).set(u)
        }), this.resolveNoneKeyframes()
    }
}

function jc(t) {
    return typeof t == "function"
}
let Ur;

function v_() {
    Ur = void 0
}
const zt = {
        now: () => (Ur === void 0 && zt.set(xe.isProcessing || OC.useManualTiming ? xe.timestamp : performance.now()), Ur),
        set: t => {
            Ur = t, queueMicrotask(v_)
        }
    },
    th = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (Pn.test(t) || t === "0") && !t.startsWith("url("));

function w_(t) {
    const e = t[0];
    if (t.length === 1) return !0;
    for (let n = 0; n < t.length; n++)
        if (t[n] !== e) return !0
}

function x_(t, e, n, i) {
    const s = t[0];
    if (s === null) return !1;
    if (e === "display" || e === "visibility") return !0;
    const r = t[t.length - 1],
        o = th(s, e),
        a = th(r, e);
    return !o || !a ? !1 : w_(t) || (n === "spring" || jc(n)) && i
}
const b_ = 40;
class Vy {
    constructor({
        autoplay: e = !0,
        delay: n = 0,
        type: i = "keyframes",
        repeat: s = 0,
        repeatDelay: r = 0,
        repeatType: o = "loop",
        ...a
    }) {
        this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = zt.now(), this.options = {
            autoplay: e,
            delay: n,
            type: i,
            repeat: s,
            repeatDelay: r,
            repeatType: o,
            ...a
        }, this.updateFinishedPromise()
    }
    calcStartTime() {
        return this.resolvedAt ? this.resolvedAt - this.createdAt > b_ ? this.resolvedAt : this.createdAt : this.createdAt
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && ZC(), this._resolved
    }
    onKeyframesResolved(e, n) {
        this.resolvedAt = zt.now(), this.hasAttemptedResolve = !0;
        const {
            name: i,
            type: s,
            velocity: r,
            delay: o,
            onComplete: a,
            onUpdate: l,
            isGenerator: u
        } = this.options;
        if (!u && !x_(e, i, s, r))
            if (o) this.options.duration = 0;
            else {
                l == null || l(ea(e, this.options, n)), a == null || a(), this.resolveFinishedPromise();
                return
            } const c = this.initPlayback(e, n);
        c !== !1 && (this._resolved = {
            keyframes: e,
            finalKeyframe: n,
            ...c
        }, this.onPostResolved())
    }
    onPostResolved() {}
    then(e, n) {
        return this.currentFinishedPromise.then(e, n)
    }
    flatten() {
        this.options.type = "keyframes", this.options.ease = "linear"
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(e => {
            this.resolveFinishedPromise = e
        })
    }
}

function jy(t, e) {
    return e ? t * (1e3 / e) : 0
}
const k_ = 5;

function By(t, e, n) {
    const i = Math.max(e - k_, 0);
    return jy(n - t(i), e - i)
}
const Xa = .001,
    S_ = .01,
    P_ = 10,
    C_ = .05,
    __ = 1;

function T_({
    duration: t = 800,
    bounce: e = .25,
    velocity: n = 0,
    mass: i = 1
}) {
    let s, r, o = 1 - e;
    o = Sn(C_, __, o), t = Sn(S_, P_, Bt(t)), o < 1 ? (s = u => {
        const c = u * o,
            d = c * t,
            f = c - n,
            h = pu(u, o),
            y = Math.exp(-d);
        return Xa - f / h * y
    }, r = u => {
        const d = u * o * t,
            f = d * n + n,
            h = Math.pow(o, 2) * Math.pow(u, 2) * t,
            y = Math.exp(-d),
            g = pu(Math.pow(u, 2), o);
        return (-s(u) + Xa > 0 ? -1 : 1) * ((f - h) * y) / g
    }) : (s = u => {
        const c = Math.exp(-u * t),
            d = (u - n) * t + 1;
        return -Xa + c * d
    }, r = u => {
        const c = Math.exp(-u * t),
            d = (n - u) * (t * t);
        return c * d
    });
    const a = 5 / t,
        l = M_(s, r, a);
    if (t = jt(t), isNaN(l)) return {
        stiffness: 100,
        damping: 10,
        duration: t
    };
    {
        const u = Math.pow(l, 2) * i;
        return {
            stiffness: u,
            damping: o * 2 * Math.sqrt(i * u),
            duration: t
        }
    }
}
const E_ = 12;

function M_(t, e, n) {
    let i = n;
    for (let s = 1; s < E_; s++) i = i - t(i) / e(i);
    return i
}

function pu(t, e) {
    return t * Math.sqrt(1 - e * e)
}
const R_ = ["duration", "bounce"],
    z_ = ["stiffness", "damping", "mass"];

function nh(t, e) {
    return e.some(n => t[n] !== void 0)
}

function D_(t) {
    let e = {
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1,
        ...t
    };
    if (!nh(t, z_) && nh(t, R_)) {
        const n = T_(t);
        e = {
            ...e,
            ...n,
            mass: 1
        }, e.isResolvedFromDuration = !0
    }
    return e
}

function Uy({
    keyframes: t,
    restDelta: e,
    restSpeed: n,
    ...i
}) {
    const s = t[0],
        r = t[t.length - 1],
        o = {
            done: !1,
            value: s
        },
        {
            stiffness: a,
            damping: l,
            mass: u,
            duration: c,
            velocity: d,
            isResolvedFromDuration: f
        } = D_({
            ...i,
            velocity: -Bt(i.velocity || 0)
        }),
        h = d || 0,
        y = l / (2 * Math.sqrt(a * u)),
        g = r - s,
        x = Bt(Math.sqrt(a / u)),
        p = Math.abs(g) < 5;
    n || (n = p ? .01 : 2), e || (e = p ? .005 : .5);
    let m;
    if (y < 1) {
        const v = pu(x, y);
        m = w => {
            const b = Math.exp(-y * x * w);
            return r - b * ((h + y * x * g) / v * Math.sin(v * w) + g * Math.cos(v * w))
        }
    } else if (y === 1) m = v => r - Math.exp(-x * v) * (g + (h + x * g) * v);
    else {
        const v = x * Math.sqrt(y * y - 1);
        m = w => {
            const b = Math.exp(-y * x * w),
                S = Math.min(v * w, 300);
            return r - b * ((h + y * x * g) * Math.sinh(S) + v * g * Math.cosh(S)) / v
        }
    }
    return {
        calculatedDuration: f && c || null,
        next: v => {
            const w = m(v);
            if (f) o.done = v >= c;
            else {
                let b = 0;
                y < 1 && (b = v === 0 ? jt(h) : By(m, v, w));
                const S = Math.abs(b) <= n,
                    _ = Math.abs(r - w) <= e;
                o.done = S && _
            }
            return o.value = o.done ? r : w, o
        }
    }
}

function ih({
    keyframes: t,
    velocity: e = 0,
    power: n = .8,
    timeConstant: i = 325,
    bounceDamping: s = 10,
    bounceStiffness: r = 500,
    modifyTarget: o,
    min: a,
    max: l,
    restDelta: u = .5,
    restSpeed: c
}) {
    const d = t[0],
        f = {
            done: !1,
            value: d
        },
        h = P => a !== void 0 && P < a || l !== void 0 && P > l,
        y = P => a === void 0 ? l : l === void 0 || Math.abs(a - P) < Math.abs(l - P) ? a : l;
    let g = n * e;
    const x = d + g,
        p = o === void 0 ? x : o(x);
    p !== x && (g = p - d);
    const m = P => -g * Math.exp(-P / i),
        v = P => p + m(P),
        w = P => {
            const O = m(P),
                D = v(P);
            f.done = Math.abs(O) <= u, f.value = f.done ? p : D
        };
    let b, S;
    const _ = P => {
        h(f.value) && (b = P, S = Uy({
            keyframes: [f.value, y(f.value)],
            velocity: By(v, P, f.value),
            damping: s,
            stiffness: r,
            restDelta: u,
            restSpeed: c
        }))
    };
    return _(0), {
        calculatedDuration: null,
        next: P => {
            let O = !1;
            return !S && b === void 0 && (O = !0, w(P), _(P)), b !== void 0 && P >= b ? S.next(P - b) : (!O && w(P), f)
        }
    }
}
const O_ = sr(.42, 0, 1, 1),
    A_ = sr(0, 0, .58, 1),
    $y = sr(.42, 0, .58, 1),
    L_ = t => Array.isArray(t) && typeof t[0] != "number",
    Bc = t => Array.isArray(t) && typeof t[0] == "number",
    sh = {
        linear: ze,
        easeIn: O_,
        easeInOut: $y,
        easeOut: A_,
        circIn: Oc,
        circInOut: ky,
        circOut: by,
        backIn: Dc,
        backInOut: wy,
        backOut: vy,
        anticipate: xy
    },
    rh = t => {
        if (Bc(t)) {
            uu(t.length === 4);
            const [e, n, i, s] = t;
            return sr(e, n, i, s)
        } else if (typeof t == "string") return uu(sh[t] !== void 0), sh[t];
        return t
    },
    I_ = (t, e) => n => e(t(n)),
    Ut = (...t) => t.reduce(I_),
    $i = (t, e, n) => {
        const i = e - t;
        return i === 0 ? 1 : (n - t) / i
    },
    ne = (t, e, n) => t + (e - t) * n;

function Ya(t, e, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
}

function F_({
    hue: t,
    saturation: e,
    lightness: n,
    alpha: i
}) {
    t /= 360, e /= 100, n /= 100;
    let s = 0,
        r = 0,
        o = 0;
    if (!e) s = r = o = n;
    else {
        const a = n < .5 ? n * (1 + e) : n + e - n * e,
            l = 2 * n - a;
        s = Ya(l, a, t + 1 / 3), r = Ya(l, a, t), o = Ya(l, a, t - 1 / 3)
    }
    return {
        red: Math.round(s * 255),
        green: Math.round(r * 255),
        blue: Math.round(o * 255),
        alpha: i
    }
}

function Po(t, e) {
    return n => n > 0 ? e : t
}
const Za = (t, e, n) => {
        const i = t * t,
            s = n * (e * e - i) + i;
        return s < 0 ? 0 : Math.sqrt(s)
    },
    N_ = [fu, Bn, vi],
    V_ = t => N_.find(e => e.test(t));

function oh(t) {
    const e = V_(t);
    if (!e) return !1;
    let n = e.parse(t);
    return e === vi && (n = F_(n)), n
}
const ah = (t, e) => {
        const n = oh(t),
            i = oh(e);
        if (!n || !i) return Po(t, e);
        const s = {
            ...n
        };
        return r => (s.red = Za(n.red, i.red, r), s.green = Za(n.green, i.green, r), s.blue = Za(n.blue, i.blue, r), s.alpha = ne(n.alpha, i.alpha, r), Bn.transform(s))
    },
    mu = new Set(["none", "hidden"]);

function j_(t, e) {
    return mu.has(t) ? n => n <= 0 ? t : e : n => n >= 1 ? e : t
}

function B_(t, e) {
    return n => ne(t, e, n)
}

function Uc(t) {
    return typeof t == "number" ? B_ : typeof t == "string" ? Ac(t) ? Po : Ce.test(t) ? ah : W_ : Array.isArray(t) ? Wy : typeof t == "object" ? Ce.test(t) ? ah : U_ : Po
}

function Wy(t, e) {
    const n = [...t],
        i = n.length,
        s = t.map((r, o) => Uc(r)(r, e[o]));
    return r => {
        for (let o = 0; o < i; o++) n[o] = s[o](r);
        return n
    }
}

function U_(t, e) {
    const n = {
            ...t,
            ...e
        },
        i = {};
    for (const s in n) t[s] !== void 0 && e[s] !== void 0 && (i[s] = Uc(t[s])(t[s], e[s]));
    return s => {
        for (const r in i) n[r] = i[r](s);
        return n
    }
}

function $_(t, e) {
    var n;
    const i = [],
        s = {
            color: 0,
            var: 0,
            number: 0
        };
    for (let r = 0; r < e.values.length; r++) {
        const o = e.types[r],
            a = t.indexes[o][s[o]],
            l = (n = t.values[a]) !== null && n !== void 0 ? n : 0;
        i[r] = l, s[o]++
    }
    return i
}
const W_ = (t, e) => {
    const n = Pn.createTransformer(e),
        i = qs(t),
        s = qs(e);
    return i.indexes.var.length === s.indexes.var.length && i.indexes.color.length === s.indexes.color.length && i.indexes.number.length >= s.indexes.number.length ? mu.has(t) && !s.values.length || mu.has(e) && !i.values.length ? j_(t, e) : Ut(Wy($_(i, s), s.values), n) : Po(t, e)
};

function Hy(t, e, n) {
    return typeof t == "number" && typeof e == "number" && typeof n == "number" ? ne(t, e, n) : Uc(t)(t, e)
}

function H_(t, e, n) {
    const i = [],
        s = n || Hy,
        r = t.length - 1;
    for (let o = 0; o < r; o++) {
        let a = s(t[o], t[o + 1]);
        if (e) {
            const l = Array.isArray(e) ? e[o] || ze : e;
            a = Ut(l, a)
        }
        i.push(a)
    }
    return i
}

function G_(t, e, {
    clamp: n = !0,
    ease: i,
    mixer: s
} = {}) {
    const r = t.length;
    if (uu(r === e.length), r === 1) return () => e[0];
    if (r === 2 && t[0] === t[1]) return () => e[1];
    t[0] > t[r - 1] && (t = [...t].reverse(), e = [...e].reverse());
    const o = H_(e, i, s),
        a = o.length,
        l = u => {
            let c = 0;
            if (a > 1)
                for (; c < t.length - 2 && !(u < t[c + 1]); c++);
            const d = $i(t[c], t[c + 1], u);
            return o[c](d)
        };
    return n ? u => l(Sn(t[0], t[r - 1], u)) : l
}

function q_(t, e) {
    const n = t[t.length - 1];
    for (let i = 1; i <= e; i++) {
        const s = $i(0, e, i);
        t.push(ne(n, 1, s))
    }
}

function K_(t) {
    const e = [0];
    return q_(e, t.length - 1), e
}

function Q_(t, e) {
    return t.map(n => n * e)
}

function X_(t, e) {
    return t.map(() => e || $y).splice(0, t.length - 1)
}

function Co({
    duration: t = 300,
    keyframes: e,
    times: n,
    ease: i = "easeInOut"
}) {
    const s = L_(i) ? i.map(rh) : rh(i),
        r = {
            done: !1,
            value: e[0]
        },
        o = Q_(n && n.length === e.length ? n : K_(e), t),
        a = G_(o, e, {
            ease: Array.isArray(s) ? s : X_(e, s)
        });
    return {
        calculatedDuration: t,
        next: l => (r.value = a(l), r.done = l >= t, r)
    }
}
const lh = 2e4;

function Y_(t) {
    let e = 0;
    const n = 50;
    let i = t.next(e);
    for (; !i.done && e < lh;) e += n, i = t.next(e);
    return e >= lh ? 1 / 0 : e
}
const Z_ = t => {
        const e = ({
            timestamp: n
        }) => t(n);
        return {
            start: () => H.update(e, !0),
            stop: () => kn(e),
            now: () => xe.isProcessing ? xe.timestamp : zt.now()
        }
    },
    J_ = {
        decay: ih,
        inertia: ih,
        tween: Co,
        keyframes: Co,
        spring: Uy
    },
    eT = t => t / 100;
class $c extends Vy {
    constructor(e) {
        super(e), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
            if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
            this.teardown();
            const {
                onStop: l
            } = this.options;
            l && l()
        };
        const {
            name: n,
            motionValue: i,
            element: s,
            keyframes: r
        } = this.options, o = (s == null ? void 0 : s.KeyframeResolver) || Lc, a = (l, u) => this.onKeyframesResolved(l, u);
        this.resolver = new o(r, a, n, i, s), this.resolver.scheduleResolve()
    }
    flatten() {
        super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
    }
    initPlayback(e) {
        const {
            type: n = "keyframes",
            repeat: i = 0,
            repeatDelay: s = 0,
            repeatType: r,
            velocity: o = 0
        } = this.options, a = jc(n) ? n : J_[n] || Co;
        let l, u;
        a !== Co && typeof e[0] != "number" && (l = Ut(eT, Hy(e[0], e[1])), e = [0, 100]);
        const c = a({
            ...this.options,
            keyframes: e
        });
        r === "mirror" && (u = a({
            ...this.options,
            keyframes: [...e].reverse(),
            velocity: -o
        })), c.calculatedDuration === null && (c.calculatedDuration = Y_(c));
        const {
            calculatedDuration: d
        } = c, f = d + s, h = f * (i + 1) - s;
        return {
            generator: c,
            mirroredGenerator: u,
            mapPercentToKeyframes: l,
            calculatedDuration: d,
            resolvedDuration: f,
            totalDuration: h
        }
    }
    onPostResolved() {
        const {
            autoplay: e = !0
        } = this.options;
        this.play(), this.pendingPlayState === "paused" || !e ? this.pause() : this.state = this.pendingPlayState
    }
    tick(e, n = !1) {
        const {
            resolved: i
        } = this;
        if (!i) {
            const {
                keyframes: P
            } = this.options;
            return {
                done: !0,
                value: P[P.length - 1]
            }
        }
        const {
            finalKeyframe: s,
            generator: r,
            mirroredGenerator: o,
            mapPercentToKeyframes: a,
            keyframes: l,
            calculatedDuration: u,
            totalDuration: c,
            resolvedDuration: d
        } = i;
        if (this.startTime === null) return r.next(0);
        const {
            delay: f,
            repeat: h,
            repeatType: y,
            repeatDelay: g,
            onUpdate: x
        } = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - c / this.speed, this.startTime)), n ? this.currentTime = e : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(e - this.startTime) * this.speed;
        const p = this.currentTime - f * (this.speed >= 0 ? 1 : -1),
            m = this.speed >= 0 ? p < 0 : p > c;
        this.currentTime = Math.max(p, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
        let v = this.currentTime,
            w = r;
        if (h) {
            const P = Math.min(this.currentTime, c) / d;
            let O = Math.floor(P),
                D = P % 1;
            !D && P >= 1 && (D = 1), D === 1 && O--, O = Math.min(O, h + 1), !!(O % 2) && (y === "reverse" ? (D = 1 - D, g && (D -= g / d)) : y === "mirror" && (w = o)), v = Sn(0, 1, D) * d
        }
        const b = m ? {
            done: !1,
            value: l[0]
        } : w.next(v);
        a && (b.value = a(b.value));
        let {
            done: S
        } = b;
        !m && u !== null && (S = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
        const _ = this.holdTime === null && (this.state === "finished" || this.state === "running" && S);
        return _ && s !== void 0 && (b.value = ea(l, this.options, s)), x && x(b.value), _ && this.finish(), b
    }
    get duration() {
        const {
            resolved: e
        } = this;
        return e ? Bt(e.calculatedDuration) : 0
    }
    get time() {
        return Bt(this.currentTime)
    }
    set time(e) {
        e = jt(e), this.currentTime = e, this.holdTime !== null || this.speed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(e) {
        const n = this.playbackSpeed !== e;
        this.playbackSpeed = e, n && (this.time = Bt(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped) return;
        const {
            driver: e = Z_,
            onPlay: n,
            startTime: i
        } = this.options;
        this.driver || (this.driver = e(r => this.tick(r))), n && n();
        const s = this.driver.now();
        this.holdTime !== null ? this.startTime = s - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = s) : this.startTime = i ?? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
    }
    pause() {
        var e;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused", this.holdTime = (e = this.currentTime) !== null && e !== void 0 ? e : 0
    }
    complete() {
        this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
    }
    finish() {
        this.teardown(), this.state = "finished";
        const {
            onComplete: e
        } = this.options;
        e && e()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(), this.driver = void 0)
    }
    sample(e) {
        return this.startTime = 0, this.tick(e, !0)
    }
}
const tT = new Set(["opacity", "clipPath", "filter", "transform"]),
    nT = 10,
    iT = (t, e) => {
        let n = "";
        const i = Math.max(Math.round(e / nT), 2);
        for (let s = 0; s < i; s++) n += t($i(0, i - 1, s)) + ", ";
        return `linear(${n.substring(0,n.length-2)})`
    };

function Wc(t) {
    let e;
    return () => (e === void 0 && (e = t()), e)
}
const sT = {
    linearEasing: void 0
};

function rT(t, e) {
    const n = Wc(t);
    return () => {
        var i;
        return (i = sT[e]) !== null && i !== void 0 ? i : n()
    }
}
const _o = rT(() => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}, "linearEasing");

function Gy(t) {
    return !!(typeof t == "function" && _o() || !t || typeof t == "string" && (t in gu || _o()) || Bc(t) || Array.isArray(t) && t.every(Gy))
}
const fs = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`,
    gu = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: fs([0, .65, .55, 1]),
        circOut: fs([.55, 0, 1, .45]),
        backIn: fs([.31, .01, .66, -.59]),
        backOut: fs([.33, 1.53, .69, .99])
    };

function qy(t, e) {
    if (t) return typeof t == "function" && _o() ? iT(t, e) : Bc(t) ? fs(t) : Array.isArray(t) ? t.map(n => qy(n, e) || gu.easeOut) : gu[t]
}

function oT(t, e, n, {
    delay: i = 0,
    duration: s = 300,
    repeat: r = 0,
    repeatType: o = "loop",
    ease: a = "easeInOut",
    times: l
} = {}) {
    const u = {
        [e]: n
    };
    l && (u.offset = l);
    const c = qy(a, s);
    return Array.isArray(c) && (u.easing = c), t.animate(u, {
        delay: i,
        duration: s,
        easing: Array.isArray(c) ? "linear" : c,
        fill: "both",
        iterations: r + 1,
        direction: o === "reverse" ? "alternate" : "normal"
    })
}

function uh(t, e) {
    t.timeline = e, t.onfinish = null
}
const aT = Wc(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
    To = 10,
    lT = 2e4;

function uT(t) {
    return jc(t.type) || t.type === "spring" || !Gy(t.ease)
}

function cT(t, e) {
    const n = new $c({
        ...e,
        keyframes: t,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let i = {
        done: !1,
        value: t[0]
    };
    const s = [];
    let r = 0;
    for (; !i.done && r < lT;) i = n.sample(r), s.push(i.value), r += To;
    return {
        times: void 0,
        keyframes: s,
        duration: r - To,
        ease: "linear"
    }
}
const Ky = {
    anticipate: xy,
    backInOut: wy,
    circInOut: ky
};

function dT(t) {
    return t in Ky
}
class ch extends Vy {
    constructor(e) {
        super(e);
        const {
            name: n,
            motionValue: i,
            element: s,
            keyframes: r
        } = this.options;
        this.resolver = new Ny(r, (o, a) => this.onKeyframesResolved(o, a), n, i, s), this.resolver.scheduleResolve()
    }
    initPlayback(e, n) {
        var i;
        let {
            duration: s = 300,
            times: r,
            ease: o,
            type: a,
            motionValue: l,
            name: u,
            startTime: c
        } = this.options;
        if (!(!((i = l.owner) === null || i === void 0) && i.current)) return !1;
        if (typeof o == "string" && _o() && dT(o) && (o = Ky[o]), uT(this.options)) {
            const {
                onComplete: f,
                onUpdate: h,
                motionValue: y,
                element: g,
                ...x
            } = this.options, p = cT(e, x);
            e = p.keyframes, e.length === 1 && (e[1] = e[0]), s = p.duration, r = p.times, o = p.ease, a = "keyframes"
        }
        const d = oT(l.owner.current, u, e, {
            ...this.options,
            duration: s,
            times: r,
            ease: o
        });
        return d.startTime = c ?? this.calcStartTime(), this.pendingTimeline ? (uh(d, this.pendingTimeline), this.pendingTimeline = void 0) : d.onfinish = () => {
            const {
                onComplete: f
            } = this.options;
            l.set(ea(e, this.options, n)), f && f(), this.cancel(), this.resolveFinishedPromise()
        }, {
            animation: d,
            duration: s,
            times: r,
            type: a,
            ease: o,
            keyframes: e
        }
    }
    get duration() {
        const {
            resolved: e
        } = this;
        if (!e) return 0;
        const {
            duration: n
        } = e;
        return Bt(n)
    }
    get time() {
        const {
            resolved: e
        } = this;
        if (!e) return 0;
        const {
            animation: n
        } = e;
        return Bt(n.currentTime || 0)
    }
    set time(e) {
        const {
            resolved: n
        } = this;
        if (!n) return;
        const {
            animation: i
        } = n;
        i.currentTime = jt(e)
    }
    get speed() {
        const {
            resolved: e
        } = this;
        if (!e) return 1;
        const {
            animation: n
        } = e;
        return n.playbackRate
    }
    set speed(e) {
        const {
            resolved: n
        } = this;
        if (!n) return;
        const {
            animation: i
        } = n;
        i.playbackRate = e
    }
    get state() {
        const {
            resolved: e
        } = this;
        if (!e) return "idle";
        const {
            animation: n
        } = e;
        return n.playState
    }
    get startTime() {
        const {
            resolved: e
        } = this;
        if (!e) return null;
        const {
            animation: n
        } = e;
        return n.startTime
    }
    attachTimeline(e) {
        if (!this._resolved) this.pendingTimeline = e;
        else {
            const {
                resolved: n
            } = this;
            if (!n) return ze;
            const {
                animation: i
            } = n;
            uh(i, e)
        }
        return ze
    }
    play() {
        if (this.isStopped) return;
        const {
            resolved: e
        } = this;
        if (!e) return;
        const {
            animation: n
        } = e;
        n.playState === "finished" && this.updateFinishedPromise(), n.play()
    }
    pause() {
        const {
            resolved: e
        } = this;
        if (!e) return;
        const {
            animation: n
        } = e;
        n.pause()
    }
    stop() {
        if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
        this.resolveFinishedPromise(), this.updateFinishedPromise();
        const {
            resolved: e
        } = this;
        if (!e) return;
        const {
            animation: n,
            keyframes: i,
            duration: s,
            type: r,
            ease: o,
            times: a
        } = e;
        if (n.playState === "idle" || n.playState === "finished") return;
        if (this.time) {
            const {
                motionValue: u,
                onUpdate: c,
                onComplete: d,
                element: f,
                ...h
            } = this.options, y = new $c({
                ...h,
                keyframes: i,
                duration: s,
                type: r,
                ease: o,
                times: a,
                isGenerator: !0
            }), g = jt(this.time);
            u.setWithVelocity(y.sample(g - To).value, y.sample(g).value, To)
        }
        const {
            onStop: l
        } = this.options;
        l && l(), this.cancel()
    }
    complete() {
        const {
            resolved: e
        } = this;
        e && e.animation.finish()
    }
    cancel() {
        const {
            resolved: e
        } = this;
        e && e.animation.cancel()
    }
    static supports(e) {
        const {
            motionValue: n,
            name: i,
            repeatDelay: s,
            repeatType: r,
            damping: o,
            type: a
        } = e;
        return aT() && i && tT.has(i) && n && n.owner && n.owner.current instanceof HTMLElement && !n.owner.getProps().onUpdate && !s && r !== "mirror" && o !== 0 && a !== "inertia"
    }
}
const fT = Wc(() => window.ScrollTimeline !== void 0);
class hT {
    constructor(e) {
        this.stop = () => this.runAll("stop"), this.animations = e.filter(Boolean)
    }
    then(e, n) {
        return Promise.all(this.animations).then(e).catch(n)
    }
    getAll(e) {
        return this.animations[0][e]
    }
    setAll(e, n) {
        for (let i = 0; i < this.animations.length; i++) this.animations[i][e] = n
    }
    attachTimeline(e, n) {
        const i = this.animations.map(s => fT() && s.attachTimeline ? s.attachTimeline(e) : n(s));
        return () => {
            i.forEach((s, r) => {
                s && s(), this.animations[r].stop()
            })
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(e) {
        this.setAll("time", e)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(e) {
        this.setAll("speed", e)
    }
    get startTime() {
        return this.getAll("startTime")
    }
    get duration() {
        let e = 0;
        for (let n = 0; n < this.animations.length; n++) e = Math.max(e, this.animations[n].duration);
        return e
    }
    runAll(e) {
        this.animations.forEach(n => n[e]())
    }
    flatten() {
        this.runAll("flatten")
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}

function pT({
    when: t,
    delay: e,
    delayChildren: n,
    staggerChildren: i,
    staggerDirection: s,
    repeat: r,
    repeatType: o,
    repeatDelay: a,
    from: l,
    elapsed: u,
    ...c
}) {
    return !!Object.keys(c).length
}
const Hc = (t, e, n, i = {}, s, r) => o => {
        const a = zc(i, t) || {},
            l = a.delay || i.delay || 0;
        let {
            elapsed: u = 0
        } = i;
        u = u - jt(l);
        let c = {
            keyframes: Array.isArray(n) ? n : [null, n],
            ease: "easeOut",
            velocity: e.getVelocity(),
            ...a,
            delay: -u,
            onUpdate: f => {
                e.set(f), a.onUpdate && a.onUpdate(f)
            },
            onComplete: () => {
                o(), a.onComplete && a.onComplete()
            },
            name: t,
            motionValue: e,
            element: r ? void 0 : s
        };
        pT(a) || (c = {
            ...c,
            ...DC(t, c)
        }), c.duration && (c.duration = jt(c.duration)), c.repeatDelay && (c.repeatDelay = jt(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
        let d = !1;
        if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (c.duration = 0, c.delay === 0 && (d = !0)), d && !r && e.get() !== void 0) {
            const f = ea(c.keyframes, a);
            if (f !== void 0) return H.update(() => {
                c.onUpdate(f), c.onComplete()
            }), new hT([])
        }
        return !r && ch.supports(c) ? new ch(c) : new $c(c)
    },
    mT = t => !!(t && typeof t == "object" && t.mix && t.toValue),
    gT = t => lu(t) ? t[t.length - 1] || 0 : t;

function Gc(t, e) {
    t.indexOf(e) === -1 && t.push(e)
}

function qc(t, e) {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1)
}
class Kc {
    constructor() {
        this.subscriptions = []
    }
    add(e) {
        return Gc(this.subscriptions, e), () => qc(this.subscriptions, e)
    }
    notify(e, n, i) {
        const s = this.subscriptions.length;
        if (s)
            if (s === 1) this.subscriptions[0](e, n, i);
            else
                for (let r = 0; r < s; r++) {
                    const o = this.subscriptions[r];
                    o && o(e, n, i)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const dh = 30,
    yT = t => !isNaN(parseFloat(t));
class vT {
    constructor(e, n = {}) {
        this.version = "11.11.17", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (i, s = !0) => {
            const r = zt.now();
            this.updatedAt !== r && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(i), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), s && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }, this.hasAnimated = !1, this.setCurrent(e), this.owner = n.owner
    }
    setCurrent(e) {
        this.current = e, this.updatedAt = zt.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = yT(this.current))
    }
    setPrevFrameValue(e = this.current) {
        this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt
    }
    onChange(e) {
        return this.on("change", e)
    }
    on(e, n) {
        this.events[e] || (this.events[e] = new Kc);
        const i = this.events[e].add(n);
        return e === "change" ? () => {
            i(), H.read(() => {
                this.events.change.getSize() || this.stop()
            })
        } : i
    }
    clearListeners() {
        for (const e in this.events) this.events[e].clear()
    }
    attach(e, n) {
        this.passiveEffect = e, this.stopPassiveEffect = n
    }
    set(e, n = !0) {
        !n || !this.passiveEffect ? this.updateAndNotify(e, n) : this.passiveEffect(e, this.updateAndNotify)
    }
    setWithVelocity(e, n, i) {
        this.set(n), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - i
    }
    jump(e, n = !0) {
        this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const e = zt.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > dh) return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, dh);
        return jy(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(e) {
        return this.stop(), new Promise(n => {
            this.hasAnimated = !0, this.animation = e(n), this.events.animationStart && this.events.animationStart.notify()
        }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
        })
    }
    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
}

function Ks(t, e) {
    return new vT(t, e)
}

function wT(t, e, n) {
    t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, Ks(n))
}

function xT(t, e) {
    const n = Jo(t, e);
    let {
        transitionEnd: i = {},
        transition: s = {},
        ...r
    } = n || {};
    r = {
        ...r,
        ...i
    };
    for (const o in r) {
        const a = gT(r[o]);
        wT(t, o, a)
    }
}
const Qc = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
    bT = "framerAppearId",
    Qy = "data-" + Qc(bT);

function Xy(t) {
    return t.props[Qy]
}
const Te = t => !!(t && t.getVelocity);

function kT(t) {
    return !!(Te(t) && t.add)
}

function yu(t, e) {
    const n = t.getValue("willChange");
    if (kT(n)) return n.add(e)
}

function ST({
    protectedKeys: t,
    needsAnimating: e
}, n) {
    const i = t.hasOwnProperty(n) && e[n] !== !0;
    return e[n] = !1, i
}

function Yy(t, e, {
    delay: n = 0,
    transitionOverride: i,
    type: s
} = {}) {
    var r;
    let {
        transition: o = t.getDefaultTransition(),
        transitionEnd: a,
        ...l
    } = e;
    i && (o = i);
    const u = [],
        c = s && t.animationState && t.animationState.getState()[s];
    for (const d in l) {
        const f = t.getValue(d, (r = t.latestValues[d]) !== null && r !== void 0 ? r : null),
            h = l[d];
        if (h === void 0 || c && ST(c, d)) continue;
        const y = {
            delay: n,
            ...zc(o || {}, d)
        };
        let g = !1;
        if (window.MotionHandoffAnimation) {
            const p = Xy(t);
            if (p) {
                const m = window.MotionHandoffAnimation(p, d, H);
                m !== null && (y.startTime = m, g = !0)
            }
        }
        yu(t, d), f.start(Hc(d, f, h, t.shouldReduceMotion && ti.has(d) ? {
            type: !1
        } : y, t, g));
        const x = f.animation;
        x && u.push(x)
    }
    return a && Promise.all(u).then(() => {
        H.update(() => {
            a && xT(t, a)
        })
    }), u
}

function vu(t, e, n = {}) {
    var i;
    const s = Jo(t, e, n.type === "exit" ? (i = t.presenceContext) === null || i === void 0 ? void 0 : i.custom : void 0);
    let {
        transition: r = t.getDefaultTransition() || {}
    } = s || {};
    n.transitionOverride && (r = n.transitionOverride);
    const o = s ? () => Promise.all(Yy(t, s, n)) : () => Promise.resolve(),
        a = t.variantChildren && t.variantChildren.size ? (u = 0) => {
            const {
                delayChildren: c = 0,
                staggerChildren: d,
                staggerDirection: f
            } = r;
            return PT(t, e, c + u, d, f, n)
        } : () => Promise.resolve(),
        {
            when: l
        } = r;
    if (l) {
        const [u, c] = l === "beforeChildren" ? [o, a] : [a, o];
        return u().then(() => c())
    } else return Promise.all([o(), a(n.delay)])
}

function PT(t, e, n = 0, i = 0, s = 1, r) {
    const o = [],
        a = (t.variantChildren.size - 1) * i,
        l = s === 1 ? (u = 0) => u * i : (u = 0) => a - u * i;
    return Array.from(t.variantChildren).sort(CT).forEach((u, c) => {
        u.notify("AnimationStart", e), o.push(vu(u, e, {
            ...r,
            delay: n + l(c)
        }).then(() => u.notify("AnimationComplete", e)))
    }), Promise.all(o)
}

function CT(t, e) {
    return t.sortNodePosition(e)
}

function _T(t, e, n = {}) {
    t.notify("AnimationStart", e);
    let i;
    if (Array.isArray(e)) {
        const s = e.map(r => vu(t, r, n));
        i = Promise.all(s)
    } else if (typeof e == "string") i = vu(t, e, n);
    else {
        const s = typeof e == "function" ? Jo(t, e, n.custom) : e;
        i = Promise.all(Yy(t, s, n))
    }
    return i.then(() => {
        t.notify("AnimationComplete", e)
    })
}
const TT = Rc.length;

function Zy(t) {
    if (!t) return;
    if (!t.isControllingVariants) {
        const n = t.parent ? Zy(t.parent) || {} : {};
        return t.props.initial !== void 0 && (n.initial = t.props.initial), n
    }
    const e = {};
    for (let n = 0; n < TT; n++) {
        const i = Rc[n],
            s = t.props[i];
        (Hs(s) || s === !1) && (e[i] = s)
    }
    return e
}
const ET = [...Mc].reverse(),
    MT = Mc.length;

function RT(t) {
    return e => Promise.all(e.map(({
        animation: n,
        options: i
    }) => _T(t, n, i)))
}

function zT(t) {
    let e = RT(t),
        n = fh(),
        i = !0;
    const s = l => (u, c) => {
        var d;
        const f = Jo(t, c, l === "exit" ? (d = t.presenceContext) === null || d === void 0 ? void 0 : d.custom : void 0);
        if (f) {
            const {
                transition: h,
                transitionEnd: y,
                ...g
            } = f;
            u = {
                ...u,
                ...g,
                ...y
            }
        }
        return u
    };

    function r(l) {
        e = l(t)
    }

    function o(l) {
        const {
            props: u
        } = t, c = Zy(t.parent) || {}, d = [], f = new Set;
        let h = {},
            y = 1 / 0;
        for (let x = 0; x < MT; x++) {
            const p = ET[x],
                m = n[p],
                v = u[p] !== void 0 ? u[p] : c[p],
                w = Hs(v),
                b = p === l ? m.isActive : null;
            b === !1 && (y = x);
            let S = v === c[p] && v !== u[p] && w;
            if (S && i && t.manuallyAnimateOnMount && (S = !1), m.protectedKeys = {
                    ...h
                }, !m.isActive && b === null || !v && !m.prevProp || Zo(v) || typeof v == "boolean") continue;
            const _ = DT(m.prevProp, v);
            let P = _ || p === l && m.isActive && !S && w || x > y && w,
                O = !1;
            const D = Array.isArray(v) ? v : [v];
            let B = D.reduce(s(p), {});
            b === !1 && (B = {});
            const {
                prevResolvedValues: V = {}
            } = m, Je = {
                ...V,
                ...B
            }, St = re => {
                P = !0, f.has(re) && (O = !0, f.delete(re)), m.needsAnimating[re] = !0;
                const M = t.getValue(re);
                M && (M.liveStyle = !1)
            };
            for (const re in Je) {
                const M = B[re],
                    A = V[re];
                if (h.hasOwnProperty(re)) continue;
                let I = !1;
                lu(M) && lu(A) ? I = !hy(M, A) : I = M !== A, I ? M != null ? St(re) : f.add(re) : M !== void 0 && f.has(re) ? St(re) : m.protectedKeys[re] = !0
            }
            m.prevProp = v, m.prevResolvedValues = B, m.isActive && (h = {
                ...h,
                ...B
            }), i && t.blockInitialAnimation && (P = !1), P && (!(S && _) || O) && d.push(...D.map(re => ({
                animation: re,
                options: {
                    type: p
                }
            })))
        }
        if (f.size) {
            const x = {};
            f.forEach(p => {
                const m = t.getBaseTarget(p),
                    v = t.getValue(p);
                v && (v.liveStyle = !0), x[p] = m ?? null
            }), d.push({
                animation: x
            })
        }
        let g = !!d.length;
        return i && (u.initial === !1 || u.initial === u.animate) && !t.manuallyAnimateOnMount && (g = !1), i = !1, g ? e(d) : Promise.resolve()
    }

    function a(l, u) {
        var c;
        if (n[l].isActive === u) return Promise.resolve();
        (c = t.variantChildren) === null || c === void 0 || c.forEach(f => {
            var h;
            return (h = f.animationState) === null || h === void 0 ? void 0 : h.setActive(l, u)
        }), n[l].isActive = u;
        const d = o(l);
        for (const f in n) n[f].protectedKeys = {};
        return d
    }
    return {
        animateChanges: o,
        setActive: a,
        setAnimateFunction: r,
        getState: () => n,
        reset: () => {
            n = fh(), i = !0
        }
    }
}

function DT(t, e) {
    return typeof e == "string" ? e !== t : Array.isArray(e) ? !hy(e, t) : !1
}

function On(t = !1) {
    return {
        isActive: t,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function fh() {
    return {
        animate: On(!0),
        whileInView: On(),
        whileHover: On(),
        whileTap: On(),
        whileDrag: On(),
        whileFocus: On(),
        exit: On()
    }
}
class En {
    constructor(e) {
        this.isMounted = !1, this.node = e
    }
    update() {}
}
class OT extends En {
    constructor(e) {
        super(e), e.animationState || (e.animationState = zT(e))
    }
    updateAnimationControlsSubscription() {
        const {
            animate: e
        } = this.node.getProps();
        Zo(e) && (this.unmountControls = e.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {
            animate: e
        } = this.node.getProps(), {
            animate: n
        } = this.node.prevProps || {};
        e !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var e;
        this.node.animationState.reset(), (e = this.unmountControls) === null || e === void 0 || e.call(this)
    }
}
let AT = 0;
class LT extends En {
    constructor() {
        super(...arguments), this.id = AT++
    }
    update() {
        if (!this.node.presenceContext) return;
        const {
            isPresent: e,
            onExitComplete: n
        } = this.node.presenceContext, {
            isPresent: i
        } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || e === i) return;
        const s = this.node.animationState.setActive("exit", !e);
        n && !e && s.then(() => n(this.id))
    }
    mount() {
        const {
            register: e
        } = this.node.presenceContext || {};
        e && (this.unmount = e(this.id))
    }
    unmount() {}
}
const IT = {
        animation: {
            Feature: OT
        },
        exit: {
            Feature: LT
        }
    },
    Jy = t => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1;

function ta(t, e = "page") {
    return {
        point: {
            x: t[`${e}X`],
            y: t[`${e}Y`]
        }
    }
}
const FT = t => e => Jy(e) && t(e, ta(e));

function Nt(t, e, n, i = {
    passive: !0
}) {
    return t.addEventListener(e, n, i), () => t.removeEventListener(e, n)
}

function $t(t, e, n, i) {
    return Nt(t, e, FT(n), i)
}
const hh = (t, e) => Math.abs(t - e);

function NT(t, e) {
    const n = hh(t.x, e.x),
        i = hh(t.y, e.y);
    return Math.sqrt(n ** 2 + i ** 2)
}
class ev {
    constructor(e, n, {
        transformPagePoint: i,
        contextWindow: s,
        dragSnapToOrigin: r = !1
    } = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const d = el(this.lastMoveEventInfo, this.history),
                    f = this.startEvent !== null,
                    h = NT(d.offset, {
                        x: 0,
                        y: 0
                    }) >= 3;
                if (!f && !h) return;
                const {
                    point: y
                } = d, {
                    timestamp: g
                } = xe;
                this.history.push({
                    ...y,
                    timestamp: g
                });
                const {
                    onStart: x,
                    onMove: p
                } = this.handlers;
                f || (x && x(this.lastMoveEvent, d), this.startEvent = this.lastMoveEvent), p && p(this.lastMoveEvent, d)
            }, this.handlePointerMove = (d, f) => {
                this.lastMoveEvent = d, this.lastMoveEventInfo = Ja(f, this.transformPagePoint), H.update(this.updatePoint, !0)
            }, this.handlePointerUp = (d, f) => {
                this.end();
                const {
                    onEnd: h,
                    onSessionEnd: y,
                    resumeAnimation: g
                } = this.handlers;
                if (this.dragSnapToOrigin && g && g(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const x = el(d.type === "pointercancel" ? this.lastMoveEventInfo : Ja(f, this.transformPagePoint), this.history);
                this.startEvent && h && h(d, x), y && y(d, x)
            }, !Jy(e)) return;
        this.dragSnapToOrigin = r, this.handlers = n, this.transformPagePoint = i, this.contextWindow = s || window;
        const o = ta(e),
            a = Ja(o, this.transformPagePoint),
            {
                point: l
            } = a,
            {
                timestamp: u
            } = xe;
        this.history = [{
            ...l,
            timestamp: u
        }];
        const {
            onSessionStart: c
        } = n;
        c && c(e, el(a, this.history)), this.removeListeners = Ut($t(this.contextWindow, "pointermove", this.handlePointerMove), $t(this.contextWindow, "pointerup", this.handlePointerUp), $t(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(e) {
        this.handlers = e
    }
    end() {
        this.removeListeners && this.removeListeners(), kn(this.updatePoint)
    }
}

function Ja(t, e) {
    return e ? {
        point: e(t.point)
    } : t
}

function ph(t, e) {
    return {
        x: t.x - e.x,
        y: t.y - e.y
    }
}

function el({
    point: t
}, e) {
    return {
        point: t,
        delta: ph(t, tv(e)),
        offset: ph(t, VT(e)),
        velocity: jT(e, .1)
    }
}

function VT(t) {
    return t[0]
}

function tv(t) {
    return t[t.length - 1]
}

function jT(t, e) {
    if (t.length < 2) return {
        x: 0,
        y: 0
    };
    let n = t.length - 1,
        i = null;
    const s = tv(t);
    for (; n >= 0 && (i = t[n], !(s.timestamp - i.timestamp > jt(e)));) n--;
    if (!i) return {
        x: 0,
        y: 0
    };
    const r = Bt(s.timestamp - i.timestamp);
    if (r === 0) return {
        x: 0,
        y: 0
    };
    const o = {
        x: (s.x - i.x) / r,
        y: (s.y - i.y) / r
    };
    return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
}

function nv(t) {
    let e = null;
    return () => {
        const n = () => {
            e = null
        };
        return e === null ? (e = t, n) : !1
    }
}
const mh = nv("dragHorizontal"),
    gh = nv("dragVertical");

function iv(t) {
    let e = !1;
    if (t === "y") e = gh();
    else if (t === "x") e = mh();
    else {
        const n = mh(),
            i = gh();
        n && i ? e = () => {
            n(), i()
        } : (n && n(), i && i())
    }
    return e
}

function sv() {
    const t = iv(!0);
    return t ? (t(), !1) : !0
}

function wi(t) {
    return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current")
}
const rv = 1e-4,
    BT = 1 - rv,
    UT = 1 + rv,
    ov = .01,
    $T = 0 - ov,
    WT = 0 + ov;

function Xe(t) {
    return t.max - t.min
}

function HT(t, e, n) {
    return Math.abs(t - e) <= n
}

function yh(t, e, n, i = .5) {
    t.origin = i, t.originPoint = ne(e.min, e.max, t.origin), t.scale = Xe(n) / Xe(e), t.translate = ne(n.min, n.max, t.origin) - t.originPoint, (t.scale >= BT && t.scale <= UT || isNaN(t.scale)) && (t.scale = 1), (t.translate >= $T && t.translate <= WT || isNaN(t.translate)) && (t.translate = 0)
}

function _s(t, e, n, i) {
    yh(t.x, e.x, n.x, i ? i.originX : void 0), yh(t.y, e.y, n.y, i ? i.originY : void 0)
}

function vh(t, e, n) {
    t.min = n.min + e.min, t.max = t.min + Xe(e)
}

function GT(t, e, n) {
    vh(t.x, e.x, n.x), vh(t.y, e.y, n.y)
}

function wh(t, e, n) {
    t.min = e.min - n.min, t.max = t.min + Xe(e)
}

function Ts(t, e, n) {
    wh(t.x, e.x, n.x), wh(t.y, e.y, n.y)
}

function qT(t, {
    min: e,
    max: n
}, i) {
    return e !== void 0 && t < e ? t = i ? ne(e, t, i.min) : Math.max(t, e) : n !== void 0 && t > n && (t = i ? ne(n, t, i.max) : Math.min(t, n)), t
}

function xh(t, e, n) {
    return {
        min: e !== void 0 ? t.min + e : void 0,
        max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
    }
}

function KT(t, {
    top: e,
    left: n,
    bottom: i,
    right: s
}) {
    return {
        x: xh(t.x, n, s),
        y: xh(t.y, e, i)
    }
}

function bh(t, e) {
    let n = e.min - t.min,
        i = e.max - t.max;
    return e.max - e.min < t.max - t.min && ([n, i] = [i, n]), {
        min: n,
        max: i
    }
}

function QT(t, e) {
    return {
        x: bh(t.x, e.x),
        y: bh(t.y, e.y)
    }
}

function XT(t, e) {
    let n = .5;
    const i = Xe(t),
        s = Xe(e);
    return s > i ? n = $i(e.min, e.max - i, t.min) : i > s && (n = $i(t.min, t.max - s, e.min)), Sn(0, 1, n)
}

function YT(t, e) {
    const n = {};
    return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n
}
const wu = .35;

function ZT(t = wu) {
    return t === !1 ? t = 0 : t === !0 && (t = wu), {
        x: kh(t, "left", "right"),
        y: kh(t, "top", "bottom")
    }
}

function kh(t, e, n) {
    return {
        min: Sh(t, e),
        max: Sh(t, n)
    }
}

function Sh(t, e) {
    return typeof t == "number" ? t : t[e] || 0
}
const Ph = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }),
    xi = () => ({
        x: Ph(),
        y: Ph()
    }),
    Ch = () => ({
        min: 0,
        max: 0
    }),
    le = () => ({
        x: Ch(),
        y: Ch()
    });

function nt(t) {
    return [t("x"), t("y")]
}

function av({
    top: t,
    left: e,
    right: n,
    bottom: i
}) {
    return {
        x: {
            min: e,
            max: n
        },
        y: {
            min: t,
            max: i
        }
    }
}

function JT({
    x: t,
    y: e
}) {
    return {
        top: e.min,
        right: t.max,
        bottom: e.max,
        left: t.min
    }
}

function eE(t, e) {
    if (!e) return t;
    const n = e({
            x: t.left,
            y: t.top
        }),
        i = e({
            x: t.right,
            y: t.bottom
        });
    return {
        top: n.y,
        left: n.x,
        bottom: i.y,
        right: i.x
    }
}

function tl(t) {
    return t === void 0 || t === 1
}

function xu({
    scale: t,
    scaleX: e,
    scaleY: n
}) {
    return !tl(t) || !tl(e) || !tl(n)
}

function In(t) {
    return xu(t) || lv(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
}

function lv(t) {
    return _h(t.x) || _h(t.y)
}

function _h(t) {
    return t && t !== "0%"
}

function Eo(t, e, n) {
    const i = t - n,
        s = e * i;
    return n + s
}

function Th(t, e, n, i, s) {
    return s !== void 0 && (t = Eo(t, s, i)), Eo(t, n, i) + e
}

function bu(t, e = 0, n = 1, i, s) {
    t.min = Th(t.min, e, n, i, s), t.max = Th(t.max, e, n, i, s)
}

function uv(t, {
    x: e,
    y: n
}) {
    bu(t.x, e.translate, e.scale, e.originPoint), bu(t.y, n.translate, n.scale, n.originPoint)
}
const Eh = .999999999999,
    Mh = 1.0000000000001;

function tE(t, e, n, i = !1) {
    const s = n.length;
    if (!s) return;
    e.x = e.y = 1;
    let r, o;
    for (let a = 0; a < s; a++) {
        r = n[a], o = r.projectionDelta;
        const {
            visualElement: l
        } = r.options;
        l && l.props.style && l.props.style.display === "contents" || (i && r.options.layoutScroll && r.scroll && r !== r.root && ki(t, {
            x: -r.scroll.offset.x,
            y: -r.scroll.offset.y
        }), o && (e.x *= o.x.scale, e.y *= o.y.scale, uv(t, o)), i && In(r.latestValues) && ki(t, r.latestValues))
    }
    e.x < Mh && e.x > Eh && (e.x = 1), e.y < Mh && e.y > Eh && (e.y = 1)
}

function bi(t, e) {
    t.min = t.min + e, t.max = t.max + e
}

function Rh(t, e, n, i, s = .5) {
    const r = ne(t.min, t.max, s);
    bu(t, e, n, r, i)
}

function ki(t, e) {
    Rh(t.x, e.x, e.scaleX, e.scale, e.originX), Rh(t.y, e.y, e.scaleY, e.scale, e.originY)
}

function cv(t, e) {
    return av(eE(t.getBoundingClientRect(), e))
}

function nE(t, e, n) {
    const i = cv(t, n),
        {
            scroll: s
        } = e;
    return s && (bi(i.x, s.offset.x), bi(i.y, s.offset.y)), i
}
const dv = ({
        current: t
    }) => t ? t.ownerDocument.defaultView : null,
    iE = new WeakMap;
class sE {
    constructor(e) {
        this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = le(), this.visualElement = e
    }
    start(e, {
        snapToCursor: n = !1
    } = {}) {
        const {
            presenceContext: i
        } = this.visualElement;
        if (i && i.isPresent === !1) return;
        const s = c => {
                const {
                    dragSnapToOrigin: d
                } = this.getProps();
                d ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(ta(c, "page").point)
            },
            r = (c, d) => {
                const {
                    drag: f,
                    dragPropagation: h,
                    onDragStart: y
                } = this.getProps();
                if (f && !h && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = iv(f), !this.openGlobalLock)) return;
                this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), nt(x => {
                    let p = this.getAxisMotionValue(x).get() || 0;
                    if (Rt.test(p)) {
                        const {
                            projection: m
                        } = this.visualElement;
                        if (m && m.layout) {
                            const v = m.layout.layoutBox[x];
                            v && (p = Xe(v) * (parseFloat(p) / 100))
                        }
                    }
                    this.originPoint[x] = p
                }), y && H.postRender(() => y(c, d)), yu(this.visualElement, "transform");
                const {
                    animationState: g
                } = this.visualElement;
                g && g.setActive("whileDrag", !0)
            },
            o = (c, d) => {
                const {
                    dragPropagation: f,
                    dragDirectionLock: h,
                    onDirectionLock: y,
                    onDrag: g
                } = this.getProps();
                if (!f && !this.openGlobalLock) return;
                const {
                    offset: x
                } = d;
                if (h && this.currentDirection === null) {
                    this.currentDirection = rE(x), this.currentDirection !== null && y && y(this.currentDirection);
                    return
                }
                this.updateAxis("x", d.point, x), this.updateAxis("y", d.point, x), this.visualElement.render(), g && g(c, d)
            },
            a = (c, d) => this.stop(c, d),
            l = () => nt(c => {
                var d;
                return this.getAnimationState(c) === "paused" && ((d = this.getAxisMotionValue(c).animation) === null || d === void 0 ? void 0 : d.play())
            }),
            {
                dragSnapToOrigin: u
            } = this.getProps();
        this.panSession = new ev(e, {
            onSessionStart: s,
            onStart: r,
            onMove: o,
            onSessionEnd: a,
            resumeAnimation: l
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: u,
            contextWindow: dv(this.visualElement)
        })
    }
    stop(e, n) {
        const i = this.isDragging;
        if (this.cancel(), !i) return;
        const {
            velocity: s
        } = n;
        this.startAnimation(s);
        const {
            onDragEnd: r
        } = this.getProps();
        r && H.postRender(() => r(e, n))
    }
    cancel() {
        this.isDragging = !1;
        const {
            projection: e,
            animationState: n
        } = this.visualElement;
        e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
        const {
            dragPropagation: i
        } = this.getProps();
        !i && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), n && n.setActive("whileDrag", !1)
    }
    updateAxis(e, n, i) {
        const {
            drag: s
        } = this.getProps();
        if (!i || !Tr(e, s, this.currentDirection)) return;
        const r = this.getAxisMotionValue(e);
        let o = this.originPoint[e] + i[e];
        this.constraints && this.constraints[e] && (o = qT(o, this.constraints[e], this.elastic[e])), r.set(o)
    }
    resolveConstraints() {
        var e;
        const {
            dragConstraints: n,
            dragElastic: i
        } = this.getProps(), s = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (e = this.visualElement.projection) === null || e === void 0 ? void 0 : e.layout, r = this.constraints;
        n && wi(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && s ? this.constraints = KT(s.layoutBox, n) : this.constraints = !1, this.elastic = ZT(i), r !== this.constraints && s && this.constraints && !this.hasMutatedConstraints && nt(o => {
            this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = YT(s.layoutBox[o], this.constraints[o]))
        })
    }
    resolveRefConstraints() {
        const {
            dragConstraints: e,
            onMeasureDragConstraints: n
        } = this.getProps();
        if (!e || !wi(e)) return !1;
        const i = e.current,
            {
                projection: s
            } = this.visualElement;
        if (!s || !s.layout) return !1;
        const r = nE(i, s.root, this.visualElement.getTransformPagePoint());
        let o = QT(s.layout.layoutBox, r);
        if (n) {
            const a = n(JT(o));
            this.hasMutatedConstraints = !!a, a && (o = av(a))
        }
        return o
    }
    startAnimation(e) {
        const {
            drag: n,
            dragMomentum: i,
            dragElastic: s,
            dragTransition: r,
            dragSnapToOrigin: o,
            onDragTransitionEnd: a
        } = this.getProps(), l = this.constraints || {}, u = nt(c => {
            if (!Tr(c, n, this.currentDirection)) return;
            let d = l && l[c] || {};
            o && (d = {
                min: 0,
                max: 0
            });
            const f = s ? 200 : 1e6,
                h = s ? 40 : 1e7,
                y = {
                    type: "inertia",
                    velocity: i ? e[c] : 0,
                    bounceStiffness: f,
                    bounceDamping: h,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...r,
                    ...d
                };
            return this.startAxisValueAnimation(c, y)
        });
        return Promise.all(u).then(a)
    }
    startAxisValueAnimation(e, n) {
        const i = this.getAxisMotionValue(e);
        return yu(this.visualElement, e), i.start(Hc(e, i, 0, n, this.visualElement, !1))
    }
    stopAnimation() {
        nt(e => this.getAxisMotionValue(e).stop())
    }
    pauseAnimation() {
        nt(e => {
            var n;
            return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.pause()
        })
    }
    getAnimationState(e) {
        var n;
        return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.state
    }
    getAxisMotionValue(e) {
        const n = `_drag${e.toUpperCase()}`,
            i = this.visualElement.getProps(),
            s = i[n];
        return s || this.visualElement.getValue(e, (i.initial ? i.initial[e] : void 0) || 0)
    }
    snapToCursor(e) {
        nt(n => {
            const {
                drag: i
            } = this.getProps();
            if (!Tr(n, i, this.currentDirection)) return;
            const {
                projection: s
            } = this.visualElement, r = this.getAxisMotionValue(n);
            if (s && s.layout) {
                const {
                    min: o,
                    max: a
                } = s.layout.layoutBox[n];
                r.set(e[n] - ne(o, a, .5))
            }
        })
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const {
            drag: e,
            dragConstraints: n
        } = this.getProps(), {
            projection: i
        } = this.visualElement;
        if (!wi(n) || !i || !this.constraints) return;
        this.stopAnimation();
        const s = {
            x: 0,
            y: 0
        };
        nt(o => {
            const a = this.getAxisMotionValue(o);
            if (a && this.constraints !== !1) {
                const l = a.get();
                s[o] = XT({
                    min: l,
                    max: l
                }, this.constraints[o])
            }
        });
        const {
            transformTemplate: r
        } = this.visualElement.getProps();
        this.visualElement.current.style.transform = r ? r({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), nt(o => {
            if (!Tr(o, e, null)) return;
            const a = this.getAxisMotionValue(o),
                {
                    min: l,
                    max: u
                } = this.constraints[o];
            a.set(ne(l, u, s[o]))
        })
    }
    addListeners() {
        if (!this.visualElement.current) return;
        iE.set(this.visualElement, this);
        const e = this.visualElement.current,
            n = $t(e, "pointerdown", l => {
                const {
                    drag: u,
                    dragListener: c = !0
                } = this.getProps();
                u && c && this.start(l)
            }),
            i = () => {
                const {
                    dragConstraints: l
                } = this.getProps();
                wi(l) && l.current && (this.constraints = this.resolveRefConstraints())
            },
            {
                projection: s
            } = this.visualElement,
            r = s.addEventListener("measure", i);
        s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), H.read(i);
        const o = Nt(window, "resize", () => this.scalePositionWithinConstraints()),
            a = s.addEventListener("didUpdate", ({
                delta: l,
                hasLayoutChanged: u
            }) => {
                this.isDragging && u && (nt(c => {
                    const d = this.getAxisMotionValue(c);
                    d && (this.originPoint[c] += l[c].translate, d.set(d.get() + l[c].translate))
                }), this.visualElement.render())
            });
        return () => {
            o(), n(), r(), a && a()
        }
    }
    getProps() {
        const e = this.visualElement.getProps(),
            {
                drag: n = !1,
                dragDirectionLock: i = !1,
                dragPropagation: s = !1,
                dragConstraints: r = !1,
                dragElastic: o = wu,
                dragMomentum: a = !0
            } = e;
        return {
            ...e,
            drag: n,
            dragDirectionLock: i,
            dragPropagation: s,
            dragConstraints: r,
            dragElastic: o,
            dragMomentum: a
        }
    }
}

function Tr(t, e, n) {
    return (e === !0 || e === t) && (n === null || n === t)
}

function rE(t, e = 10) {
    let n = null;
    return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n
}
class oE extends En {
    constructor(e) {
        super(e), this.removeGroupControls = ze, this.removeListeners = ze, this.controls = new sE(e)
    }
    mount() {
        const {
            dragControls: e
        } = this.node.getProps();
        e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || ze
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners()
    }
}
const zh = t => (e, n) => {
    t && H.postRender(() => t(e, n))
};
class aE extends En {
    constructor() {
        super(...arguments), this.removePointerDownListener = ze
    }
    onPointerDown(e) {
        this.session = new ev(e, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: dv(this.node)
        })
    }
    createPanHandlers() {
        const {
            onPanSessionStart: e,
            onPanStart: n,
            onPan: i,
            onPanEnd: s
        } = this.node.getProps();
        return {
            onSessionStart: zh(e),
            onStart: zh(n),
            onMove: i,
            onEnd: (r, o) => {
                delete this.session, s && H.postRender(() => s(r, o))
            }
        }
    }
    mount() {
        this.removePointerDownListener = $t(this.node.current, "pointerdown", e => this.onPointerDown(e))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end()
    }
}
const Xc = k.createContext(null);

function lE() {
    const t = k.useContext(Xc);
    if (t === null) return [!0, null];
    const {
        isPresent: e,
        onExitComplete: n,
        register: i
    } = t, s = k.useId();
    k.useEffect(() => i(s), []);
    const r = k.useCallback(() => n && n(s), [s, n]);
    return !e && n ? [!1, r] : [!0]
}
const fv = k.createContext({}),
    hv = k.createContext({}),
    $r = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
    };

function Dh(t, e) {
    return e.max === e.min ? 0 : t / (e.max - e.min) * 100
}
const rs = {
        correct: (t, e) => {
            if (!e.target) return t;
            if (typeof t == "string")
                if (L.test(t)) t = parseFloat(t);
                else return t;
            const n = Dh(t, e.target.x),
                i = Dh(t, e.target.y);
            return `${n}% ${i}%`
        }
    },
    uE = {
        correct: (t, {
            treeScale: e,
            projectionDelta: n
        }) => {
            const i = t,
                s = Pn.parse(t);
            if (s.length > 5) return i;
            const r = Pn.createTransformer(t),
                o = typeof s[0] != "number" ? 1 : 0,
                a = n.x.scale * e.x,
                l = n.y.scale * e.y;
            s[0 + o] /= a, s[1 + o] /= l;
            const u = ne(a, l, .5);
            return typeof s[2 + o] == "number" && (s[2 + o] /= u), typeof s[3 + o] == "number" && (s[3 + o] /= u), r(s)
        }
    },
    Mo = {};

function cE(t) {
    Object.assign(Mo, t)
}
const {
    schedule: Yc,
    cancel: l2
} = py(queueMicrotask, !1);
class dE extends k.Component {
    componentDidMount() {
        const {
            visualElement: e,
            layoutGroup: n,
            switchLayoutGroup: i,
            layoutId: s
        } = this.props, {
            projection: r
        } = e;
        cE(fE), r && (n.group && n.group.add(r), i && i.register && s && i.register(r), r.root.didUpdate(), r.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }), r.setOptions({
            ...r.options,
            onExitComplete: () => this.safeToRemove()
        })), $r.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(e) {
        const {
            layoutDependency: n,
            visualElement: i,
            drag: s,
            isPresent: r
        } = this.props, o = i.projection;
        return o && (o.isPresent = r, s || e.layoutDependency !== n || n === void 0 ? o.willUpdate() : this.safeToRemove(), e.isPresent !== r && (r ? o.promote() : o.relegate() || H.postRender(() => {
            const a = o.getStack();
            (!a || !a.members.length) && this.safeToRemove()
        }))), null
    }
    componentDidUpdate() {
        const {
            projection: e
        } = this.props.visualElement;
        e && (e.root.didUpdate(), Yc.postRender(() => {
            !e.currentAnimation && e.isLead() && this.safeToRemove()
        }))
    }
    componentWillUnmount() {
        const {
            visualElement: e,
            layoutGroup: n,
            switchLayoutGroup: i
        } = this.props, {
            projection: s
        } = e;
        s && (s.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(s), i && i.deregister && i.deregister(s))
    }
    safeToRemove() {
        const {
            safeToRemove: e
        } = this.props;
        e && e()
    }
    render() {
        return null
    }
}

function pv(t) {
    const [e, n] = lE(), i = k.useContext(fv);
    return C.jsx(dE, {
        ...t,
        layoutGroup: i,
        switchLayoutGroup: k.useContext(hv),
        isPresent: e,
        safeToRemove: n
    })
}
const fE = {
        borderRadius: {
            ...rs,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
        },
        borderTopLeftRadius: rs,
        borderTopRightRadius: rs,
        borderBottomLeftRadius: rs,
        borderBottomRightRadius: rs,
        boxShadow: uE
    },
    mv = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    hE = mv.length,
    Oh = t => typeof t == "string" ? parseFloat(t) : t,
    Ah = t => typeof t == "number" || L.test(t);

function pE(t, e, n, i, s, r) {
    s ? (t.opacity = ne(0, n.opacity !== void 0 ? n.opacity : 1, mE(i)), t.opacityExit = ne(e.opacity !== void 0 ? e.opacity : 1, 0, gE(i))) : r && (t.opacity = ne(e.opacity !== void 0 ? e.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, i));
    for (let o = 0; o < hE; o++) {
        const a = `border${mv[o]}Radius`;
        let l = Lh(e, a),
            u = Lh(n, a);
        if (l === void 0 && u === void 0) continue;
        l || (l = 0), u || (u = 0), l === 0 || u === 0 || Ah(l) === Ah(u) ? (t[a] = Math.max(ne(Oh(l), Oh(u), i), 0), (Rt.test(u) || Rt.test(l)) && (t[a] += "%")) : t[a] = u
    }(e.rotate || n.rotate) && (t.rotate = ne(e.rotate || 0, n.rotate || 0, i))
}

function Lh(t, e) {
    return t[e] !== void 0 ? t[e] : t.borderRadius
}
const mE = gv(0, .5, by),
    gE = gv(.5, .95, ze);

function gv(t, e, n) {
    return i => i < t ? 0 : i > e ? 1 : n($i(t, e, i))
}

function Ih(t, e) {
    t.min = e.min, t.max = e.max
}

function tt(t, e) {
    Ih(t.x, e.x), Ih(t.y, e.y)
}

function Fh(t, e) {
    t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin
}

function Nh(t, e, n, i, s) {
    return t -= e, t = Eo(t, 1 / n, i), s !== void 0 && (t = Eo(t, 1 / s, i)), t
}

function yE(t, e = 0, n = 1, i = .5, s, r = t, o = t) {
    if (Rt.test(e) && (e = parseFloat(e), e = ne(o.min, o.max, e / 100) - o.min), typeof e != "number") return;
    let a = ne(r.min, r.max, i);
    t === r && (a -= e), t.min = Nh(t.min, e, n, a, s), t.max = Nh(t.max, e, n, a, s)
}

function Vh(t, e, [n, i, s], r, o) {
    yE(t, e[n], e[i], e[s], e.scale, r, o)
}
const vE = ["x", "scaleX", "originX"],
    wE = ["y", "scaleY", "originY"];

function jh(t, e, n, i) {
    Vh(t.x, e, vE, n ? n.x : void 0, i ? i.x : void 0), Vh(t.y, e, wE, n ? n.y : void 0, i ? i.y : void 0)
}

function Bh(t) {
    return t.translate === 0 && t.scale === 1
}

function yv(t) {
    return Bh(t.x) && Bh(t.y)
}

function Uh(t, e) {
    return t.min === e.min && t.max === e.max
}

function xE(t, e) {
    return Uh(t.x, e.x) && Uh(t.y, e.y)
}

function $h(t, e) {
    return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
}

function vv(t, e) {
    return $h(t.x, e.x) && $h(t.y, e.y)
}

function Wh(t) {
    return Xe(t.x) / Xe(t.y)
}

function Hh(t, e) {
    return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
}
class bE {
    constructor() {
        this.members = []
    }
    add(e) {
        Gc(this.members, e), e.scheduleRender()
    }
    remove(e) {
        if (qc(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(e) {
        const n = this.members.findIndex(s => e === s);
        if (n === 0) return !1;
        let i;
        for (let s = n; s >= 0; s--) {
            const r = this.members[s];
            if (r.isPresent !== !1) {
                i = r;
                break
            }
        }
        return i ? (this.promote(i), !0) : !1
    }
    promote(e, n) {
        const i = this.lead;
        if (e !== i && (this.prevLead = i, this.lead = e, e.show(), i)) {
            i.instance && i.scheduleRender(), e.scheduleRender(), e.resumeFrom = i, n && (e.resumeFrom.preserveOpacity = !0), i.snapshot && (e.snapshot = i.snapshot, e.snapshot.latestValues = i.animationValues || i.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            const {
                crossfade: s
            } = e.options;
            s === !1 && i.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(e => {
            const {
                options: n,
                resumingFrom: i
            } = e;
            n.onExitComplete && n.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete()
        })
    }
    scheduleRender() {
        this.members.forEach(e => {
            e.instance && e.scheduleRender(!1)
        })
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}

function kE(t, e, n) {
    let i = "";
    const s = t.x.translate / e.x,
        r = t.y.translate / e.y,
        o = (n == null ? void 0 : n.z) || 0;
    if ((s || r || o) && (i = `translate3d(${s}px, ${r}px, ${o}px) `), (e.x !== 1 || e.y !== 1) && (i += `scale(${1/e.x}, ${1/e.y}) `), n) {
        const {
            transformPerspective: u,
            rotate: c,
            rotateX: d,
            rotateY: f,
            skewX: h,
            skewY: y
        } = n;
        u && (i = `perspective(${u}px) ${i}`), c && (i += `rotate(${c}deg) `), d && (i += `rotateX(${d}deg) `), f && (i += `rotateY(${f}deg) `), h && (i += `skewX(${h}deg) `), y && (i += `skewY(${y}deg) `)
    }
    const a = t.x.scale * e.x,
        l = t.y.scale * e.y;
    return (a !== 1 || l !== 1) && (i += `scale(${a}, ${l})`), i || "none"
}
const SE = (t, e) => t.depth - e.depth;
class PE {
    constructor() {
        this.children = [], this.isDirty = !1
    }
    add(e) {
        Gc(this.children, e), this.isDirty = !0
    }
    remove(e) {
        qc(this.children, e), this.isDirty = !0
    }
    forEach(e) {
        this.isDirty && this.children.sort(SE), this.isDirty = !1, this.children.forEach(e)
    }
}

function Wr(t) {
    const e = Te(t) ? t.get() : t;
    return mT(e) ? e.toValue() : e
}

function CE(t, e) {
    const n = zt.now(),
        i = ({
            timestamp: s
        }) => {
            const r = s - n;
            r >= e && (kn(i), t(r - e))
        };
    return H.read(i, !0), () => kn(i)
}

function _E(t) {
    return t instanceof SVGElement && t.tagName !== "svg"
}

function TE(t, e, n) {
    const i = Te(t) ? t : Ks(t);
    return i.start(Hc("", i, e, n)), i.animation
}
const Fn = {
        type: "projectionFrame",
        totalNodes: 0,
        resolvedTargetDeltas: 0,
        recalculatedProjection: 0
    },
    hs = typeof window < "u" && window.MotionDebug !== void 0,
    nl = ["", "X", "Y", "Z"],
    EE = {
        visibility: "hidden"
    },
    Gh = 1e3;
let ME = 0;

function il(t, e, n, i) {
    const {
        latestValues: s
    } = e;
    s[t] && (n[t] = s[t], e.setStaticValue(t, 0), i && (i[t] = 0))
}

function wv(t) {
    if (t.hasCheckedOptimisedAppear = !0, t.root === t) return;
    const {
        visualElement: e
    } = t.options;
    if (!e) return;
    const n = Xy(e);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {
            layout: s,
            layoutId: r
        } = t.options;
        window.MotionCancelOptimisedAnimation(n, "transform", H, !(s || r))
    }
    const {
        parent: i
    } = t;
    i && !i.hasCheckedOptimisedAppear && wv(i)
}

function xv({
    attachResizeListener: t,
    defaultParent: e,
    measureScroll: n,
    checkIsScrollRoot: i,
    resetTransform: s
}) {
    return class {
        constructor(o = {}, a = e == null ? void 0 : e()) {
            this.id = ME++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, hs && (Fn.totalNodes = Fn.resolvedTargetDeltas = Fn.recalculatedProjection = 0), this.nodes.forEach(DE), this.nodes.forEach(FE), this.nodes.forEach(NE), this.nodes.forEach(OE), hs && window.MotionDebug.record(Fn)
            }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = o, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
            for (let l = 0; l < this.path.length; l++) this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new PE)
        }
        addEventListener(o, a) {
            return this.eventHandlers.has(o) || this.eventHandlers.set(o, new Kc), this.eventHandlers.get(o).add(a)
        }
        notifyListeners(o, ...a) {
            const l = this.eventHandlers.get(o);
            l && l.notify(...a)
        }
        hasListeners(o) {
            return this.eventHandlers.has(o)
        }
        mount(o, a = this.root.hasTreeAnimated) {
            if (this.instance) return;
            this.isSVG = _E(o), this.instance = o;
            const {
                layoutId: l,
                layout: u,
                visualElement: c
            } = this.options;
            if (c && !c.current && c.mount(o), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (u || l) && (this.isLayoutDirty = !0), t) {
                let d;
                const f = () => this.root.updateBlockedByResize = !1;
                t(o, () => {
                    this.root.updateBlockedByResize = !0, d && d(), d = CE(f, 250), $r.hasAnimatedSinceResize && ($r.hasAnimatedSinceResize = !1, this.nodes.forEach(Kh))
                })
            }
            l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({
                delta: d,
                hasLayoutChanged: f,
                hasRelativeTargetChanged: h,
                layout: y
            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                const g = this.options.transition || c.getDefaultTransition() || $E,
                    {
                        onLayoutAnimationStart: x,
                        onLayoutAnimationComplete: p
                    } = c.getProps(),
                    m = !this.targetLayout || !vv(this.targetLayout, y) || h,
                    v = !f && h;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || v || f && (m || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, v);
                    const w = {
                        ...zc(g, "layout"),
                        onPlay: x,
                        onComplete: p
                    };
                    (c.shouldReduceMotion || this.options.layoutRoot) && (w.delay = 0, w.type = !1), this.startAnimation(w)
                } else f || Kh(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = y
            })
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const o = this.getStack();
            o && o.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, kn(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(VE), this.animationId++)
        }
        getTransformTemplate() {
            const {
                visualElement: o
            } = this.options;
            return o && o.getProps().transformTemplate
        }
        willUpdate(o = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && wv(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let c = 0; c < this.path.length; c++) {
                const d = this.path[c];
                d.shouldResetTransform = !0, d.updateScroll("snapshot"), d.options.layoutRoot && d.willUpdate(!1)
            }
            const {
                layoutId: a,
                layout: l
            } = this.options;
            if (a === void 0 && !l) return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), o && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(qh);
                return
            }
            this.isUpdating || this.nodes.forEach(LE), this.isUpdating = !1, this.nodes.forEach(IE), this.nodes.forEach(RE), this.nodes.forEach(zE), this.clearAllSnapshots();
            const a = zt.now();
            xe.delta = Sn(0, 1e3 / 60, a - xe.timestamp), xe.timestamp = a, xe.isProcessing = !0, Ka.update.process(xe), Ka.preRender.process(xe), Ka.render.process(xe), xe.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, Yc.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(AE), this.sharedNodes.forEach(jE)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, H.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            H.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
            const o = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = le(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
                visualElement: a
            } = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0)
        }
        updateScroll(o = "measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (a = !1), a) {
                const l = i(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: o,
                    isRoot: l,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : l
                }
            }
        }
        resetTransform() {
            if (!s) return;
            const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                a = this.projectionDelta && !yv(this.projectionDelta),
                l = this.getTransformTemplate(),
                u = l ? l(this.latestValues, "") : void 0,
                c = u !== this.prevTransformTemplateValue;
            o && (a || In(this.latestValues) || c) && (s(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(o = !0) {
            const a = this.measurePageBox();
            let l = this.removeElementScroll(a);
            return o && (l = this.removeTransform(l)), WE(l), {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: l,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var o;
            const {
                visualElement: a
            } = this.options;
            if (!a) return le();
            const l = a.measureViewportBox();
            if (!(((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) || this.path.some(HE))) {
                const {
                    scroll: c
                } = this.root;
                c && (bi(l.x, c.offset.x), bi(l.y, c.offset.y))
            }
            return l
        }
        removeElementScroll(o) {
            var a;
            const l = le();
            if (tt(l, o), !((a = this.scroll) === null || a === void 0) && a.wasRoot) return l;
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u],
                    {
                        scroll: d,
                        options: f
                    } = c;
                c !== this.root && d && f.layoutScroll && (d.wasRoot && tt(l, o), bi(l.x, d.offset.x), bi(l.y, d.offset.y))
            }
            return l
        }
        applyTransform(o, a = !1) {
            const l = le();
            tt(l, o);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                !a && c.options.layoutScroll && c.scroll && c !== c.root && ki(l, {
                    x: -c.scroll.offset.x,
                    y: -c.scroll.offset.y
                }), In(c.latestValues) && ki(l, c.latestValues)
            }
            return In(this.latestValues) && ki(l, this.latestValues), l
        }
        removeTransform(o) {
            const a = le();
            tt(a, o);
            for (let l = 0; l < this.path.length; l++) {
                const u = this.path[l];
                if (!u.instance || !In(u.latestValues)) continue;
                xu(u.latestValues) && u.updateSnapshot();
                const c = le(),
                    d = u.measurePageBox();
                tt(c, d), jh(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
            }
            return In(this.latestValues) && jh(a, this.latestValues), a
        }
        setTargetDelta(o) {
            this.targetDelta = o, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }
        setOptions(o) {
            this.options = {
                ...this.options,
                ...o,
                crossfade: o.crossfade !== void 0 ? o.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== xe.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(o = !1) {
            var a;
            const l = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
            const u = !!this.resumingFrom || this !== l;
            if (!(o || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
            const {
                layout: d,
                layoutId: f
            } = this.options;
            if (!(!this.layout || !(d || f))) {
                if (this.resolvedRelativeTargetAt = xe.timestamp, !this.targetDelta && !this.relativeTarget) {
                    const h = this.getClosestProjectingParent();
                    h && h.layout && this.animationProgress !== 1 ? (this.relativeParent = h, this.forceRelativeParentToResolveTarget(), this.relativeTarget = le(), this.relativeTargetOrigin = le(), Ts(this.relativeTargetOrigin, this.layout.layoutBox, h.layout.layoutBox), tt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = le(), this.targetWithTransforms = le()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), GT(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : tt(this.target, this.layout.layoutBox), uv(this.target, this.targetDelta)) : tt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const h = this.getClosestProjectingParent();
                        h && !!h.resumingFrom == !!this.resumingFrom && !h.options.layoutScroll && h.target && this.animationProgress !== 1 ? (this.relativeParent = h, this.forceRelativeParentToResolveTarget(), this.relativeTarget = le(), this.relativeTargetOrigin = le(), Ts(this.relativeTargetOrigin, this.target, h.target), tt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    hs && Fn.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || xu(this.parent.latestValues) || lv(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var o;
            const a = this.getLead(),
                l = !!this.resumingFrom || this !== a;
            let u = !0;
            if ((this.isProjectionDirty || !((o = this.parent) === null || o === void 0) && o.isProjectionDirty) && (u = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === xe.timestamp && (u = !1), u) return;
            const {
                layout: c,
                layoutId: d
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || d)) return;
            tt(this.layoutCorrected, this.layout.layoutBox);
            const f = this.treeScale.x,
                h = this.treeScale.y;
            tE(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = le());
            const {
                target: y
            } = a;
            if (!y) {
                this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                return
            }!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Fh(this.prevProjectionDelta.x, this.projectionDelta.x), Fh(this.prevProjectionDelta.y, this.projectionDelta.y)), _s(this.projectionDelta, this.layoutCorrected, y, this.latestValues), (this.treeScale.x !== f || this.treeScale.y !== h || !Hh(this.projectionDelta.x, this.prevProjectionDelta.x) || !Hh(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", y)), hs && Fn.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(o = !0) {
            var a;
            if ((a = this.options.visualElement) === null || a === void 0 || a.scheduleRender(), o) {
                const l = this.getStack();
                l && l.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = xi(), this.projectionDelta = xi(), this.projectionDeltaWithTransform = xi()
        }
        setAnimationOrigin(o, a = !1) {
            const l = this.snapshot,
                u = l ? l.latestValues : {},
                c = {
                    ...this.latestValues
                },
                d = xi();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
            const f = le(),
                h = l ? l.source : void 0,
                y = this.layout ? this.layout.source : void 0,
                g = h !== y,
                x = this.getStack(),
                p = !x || x.members.length <= 1,
                m = !!(g && !p && this.options.crossfade === !0 && !this.path.some(UE));
            this.animationProgress = 0;
            let v;
            this.mixTargetDelta = w => {
                const b = w / 1e3;
                Qh(d.x, o.x, b), Qh(d.y, o.y, b), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Ts(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), BE(this.relativeTarget, this.relativeTargetOrigin, f, b), v && xE(this.relativeTarget, v) && (this.isProjectionDirty = !1), v || (v = le()), tt(v, this.relativeTarget)), g && (this.animationValues = c, pE(c, u, this.latestValues, b, m, p)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = b
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(o) {
            this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (kn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = H.update(() => {
                $r.hasAnimatedSinceResize = !0, this.currentAnimation = TE(0, Gh, {
                    ...o,
                    onUpdate: a => {
                        this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a)
                    },
                    onComplete: () => {
                        o.onComplete && o.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const o = this.getStack();
            o && o.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Gh), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            const o = this.getLead();
            let {
                targetWithTransforms: a,
                target: l,
                layout: u,
                latestValues: c
            } = o;
            if (!(!a || !l || !u)) {
                if (this !== o && this.layout && u && bv(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    l = this.target || le();
                    const d = Xe(this.layout.layoutBox.x);
                    l.x.min = o.target.x.min, l.x.max = l.x.min + d;
                    const f = Xe(this.layout.layoutBox.y);
                    l.y.min = o.target.y.min, l.y.max = l.y.min + f
                }
                tt(a, l), ki(a, c), _s(this.projectionDeltaWithTransform, this.layoutCorrected, a, c)
            }
        }
        registerSharedNode(o, a) {
            this.sharedNodes.has(o) || this.sharedNodes.set(o, new bE), this.sharedNodes.get(o).add(a);
            const u = a.options.initialPromotionConfig;
            a.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
            })
        }
        isLead() {
            const o = this.getStack();
            return o ? o.lead === this : !0
        }
        getLead() {
            var o;
            const {
                layoutId: a
            } = this.options;
            return a ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) || this : this
        }
        getPrevLead() {
            var o;
            const {
                layoutId: a
            } = this.options;
            return a ? (o = this.getStack()) === null || o === void 0 ? void 0 : o.prevLead : void 0
        }
        getStack() {
            const {
                layoutId: o
            } = this.options;
            if (o) return this.root.sharedNodes.get(o)
        }
        promote({
            needsReset: o,
            transition: a,
            preserveFollowOpacity: l
        } = {}) {
            const u = this.getStack();
            u && u.promote(this, l), o && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({
                transition: a
            })
        }
        relegate() {
            const o = this.getStack();
            return o ? o.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {
                visualElement: o
            } = this.options;
            if (!o) return;
            let a = !1;
            const {
                latestValues: l
            } = o;
            if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a) return;
            const u = {};
            l.z && il("z", o, u, this.animationValues);
            for (let c = 0; c < nl.length; c++) il(`rotate${nl[c]}`, o, u, this.animationValues), il(`skew${nl[c]}`, o, u, this.animationValues);
            o.render();
            for (const c in u) o.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]);
            o.scheduleRender()
        }
        getProjectionStyles(o) {
            var a, l;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return EE;
            const u = {
                    visibility: ""
                },
                c = this.getTransformTemplate();
            if (this.needsReset) return this.needsReset = !1, u.opacity = "", u.pointerEvents = Wr(o == null ? void 0 : o.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
            const d = this.getLead();
            if (!this.projectionDelta || !this.layout || !d.target) {
                const g = {};
                return this.options.layoutId && (g.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, g.pointerEvents = Wr(o == null ? void 0 : o.pointerEvents) || ""), this.hasProjected && !In(this.latestValues) && (g.transform = c ? c({}, "") : "none", this.hasProjected = !1), g
            }
            const f = d.animationValues || d.latestValues;
            this.applyTransformsToTarget(), u.transform = kE(this.projectionDeltaWithTransform, this.treeScale, f), c && (u.transform = c(f, u.transform));
            const {
                x: h,
                y
            } = this.projectionDelta;
            u.transformOrigin = `${h.origin*100}% ${y.origin*100}% 0`, d.animationValues ? u.opacity = d === this ? (l = (a = f.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : u.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
            for (const g in Mo) {
                if (f[g] === void 0) continue;
                const {
                    correct: x,
                    applyTo: p
                } = Mo[g], m = u.transform === "none" ? f[g] : x(f[g], d);
                if (p) {
                    const v = p.length;
                    for (let w = 0; w < v; w++) u[p[w]] = m
                } else u[g] = m
            }
            return this.options.layoutId && (u.pointerEvents = d === this ? Wr(o == null ? void 0 : o.pointerEvents) || "" : "none"), u
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(o => {
                var a;
                return (a = o.currentAnimation) === null || a === void 0 ? void 0 : a.stop()
            }), this.root.nodes.forEach(qh), this.root.sharedNodes.clear()
        }
    }
}

function RE(t) {
    t.updateLayout()
}

function zE(t) {
    var e;
    const n = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot;
    if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
        const {
            layoutBox: i,
            measuredBox: s
        } = t.layout, {
            animationType: r
        } = t.options, o = n.source !== t.layout.source;
        r === "size" ? nt(d => {
            const f = o ? n.measuredBox[d] : n.layoutBox[d],
                h = Xe(f);
            f.min = i[d].min, f.max = f.min + h
        }) : bv(r, n.layoutBox, i) && nt(d => {
            const f = o ? n.measuredBox[d] : n.layoutBox[d],
                h = Xe(i[d]);
            f.max = f.min + h, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[d].max = t.relativeTarget[d].min + h)
        });
        const a = xi();
        _s(a, i, n.layoutBox);
        const l = xi();
        o ? _s(l, t.applyTransform(s, !0), n.measuredBox) : _s(l, i, n.layoutBox);
        const u = !yv(a);
        let c = !1;
        if (!t.resumeFrom) {
            const d = t.getClosestProjectingParent();
            if (d && !d.resumeFrom) {
                const {
                    snapshot: f,
                    layout: h
                } = d;
                if (f && h) {
                    const y = le();
                    Ts(y, n.layoutBox, f.layoutBox);
                    const g = le();
                    Ts(g, i, h.layoutBox), vv(y, g) || (c = !0), d.options.layoutRoot && (t.relativeTarget = g, t.relativeTargetOrigin = y, t.relativeParent = d)
                }
            }
        }
        t.notifyListeners("didUpdate", {
            layout: i,
            snapshot: n,
            delta: l,
            layoutDelta: a,
            hasLayoutChanged: u,
            hasRelativeTargetChanged: c
        })
    } else if (t.isLead()) {
        const {
            onExitComplete: i
        } = t.options;
        i && i()
    }
    t.options.transition = void 0
}

function DE(t) {
    hs && Fn.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
}

function OE(t) {
    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
}

function AE(t) {
    t.clearSnapshot()
}

function qh(t) {
    t.clearMeasurements()
}

function LE(t) {
    t.isLayoutDirty = !1
}

function IE(t) {
    const {
        visualElement: e
    } = t.options;
    e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
}

function Kh(t) {
    t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
}

function FE(t) {
    t.resolveTargetDelta()
}

function NE(t) {
    t.calcProjection()
}

function VE(t) {
    t.resetSkewAndRotation()
}

function jE(t) {
    t.removeLeadSnapshot()
}

function Qh(t, e, n) {
    t.translate = ne(e.translate, 0, n), t.scale = ne(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint
}

function Xh(t, e, n, i) {
    t.min = ne(e.min, n.min, i), t.max = ne(e.max, n.max, i)
}

function BE(t, e, n, i) {
    Xh(t.x, e.x, n.x, i), Xh(t.y, e.y, n.y, i)
}

function UE(t) {
    return t.animationValues && t.animationValues.opacityExit !== void 0
}
const $E = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    },
    Yh = t => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
    Zh = Yh("applewebkit/") && !Yh("chrome/") ? Math.round : ze;

function Jh(t) {
    t.min = Zh(t.min), t.max = Zh(t.max)
}

function WE(t) {
    Jh(t.x), Jh(t.y)
}

function bv(t, e, n) {
    return t === "position" || t === "preserve-aspect" && !HT(Wh(e), Wh(n), .2)
}

function HE(t) {
    var e;
    return t !== t.root && ((e = t.scroll) === null || e === void 0 ? void 0 : e.wasRoot)
}
const GE = xv({
        attachResizeListener: (t, e) => Nt(t, "resize", e),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
        checkIsScrollRoot: () => !0
    }),
    sl = {
        current: void 0
    },
    kv = xv({
        measureScroll: t => ({
            x: t.scrollLeft,
            y: t.scrollTop
        }),
        defaultParent: () => {
            if (!sl.current) {
                const t = new GE({});
                t.mount(window), t.setOptions({
                    layoutScroll: !0
                }), sl.current = t
            }
            return sl.current
        },
        resetTransform: (t, e) => {
            t.style.transform = e !== void 0 ? e : "none"
        },
        checkIsScrollRoot: t => window.getComputedStyle(t).position === "fixed"
    }),
    qE = {
        pan: {
            Feature: aE
        },
        drag: {
            Feature: oE,
            ProjectionNode: kv,
            MeasureLayout: pv
        }
    };

function ep(t, e) {
    const n = e ? "pointerenter" : "pointerleave",
        i = e ? "onHoverStart" : "onHoverEnd",
        s = (r, o) => {
            if (r.pointerType === "touch" || sv()) return;
            const a = t.getProps();
            t.animationState && a.whileHover && t.animationState.setActive("whileHover", e);
            const l = a[i];
            l && H.postRender(() => l(r, o))
        };
    return $t(t.current, n, s, {
        passive: !t.getProps()[i]
    })
}
class KE extends En {
    mount() {
        this.unmount = Ut(ep(this.node, !0), ep(this.node, !1))
    }
    unmount() {}
}
class QE extends En {
    constructor() {
        super(...arguments), this.isActive = !1
    }
    onFocus() {
        let e = !1;
        try {
            e = this.node.current.matches(":focus-visible")
        } catch {
            e = !0
        }!e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
    }
    mount() {
        this.unmount = Ut(Nt(this.node.current, "focus", () => this.onFocus()), Nt(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
const Sv = (t, e) => e ? t === e ? !0 : Sv(t, e.parentElement) : !1;

function rl(t, e) {
    if (!e) return;
    const n = new PointerEvent("pointer" + t);
    e(n, ta(n))
}
class XE extends En {
    constructor() {
        super(...arguments), this.removeStartListeners = ze, this.removeEndListeners = ze, this.removeAccessibleListeners = ze, this.startPointerPress = (e, n) => {
            if (this.isPressing) return;
            this.removeEndListeners();
            const i = this.node.getProps(),
                r = $t(window, "pointerup", (a, l) => {
                    if (!this.checkPressEnd()) return;
                    const {
                        onTap: u,
                        onTapCancel: c,
                        globalTapTarget: d
                    } = this.node.getProps(), f = !d && !Sv(this.node.current, a.target) ? c : u;
                    f && H.update(() => f(a, l))
                }, {
                    passive: !(i.onTap || i.onPointerUp)
                }),
                o = $t(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
                    passive: !(i.onTapCancel || i.onPointerCancel)
                });
            this.removeEndListeners = Ut(r, o), this.startPress(e, n)
        }, this.startAccessiblePress = () => {
            const e = r => {
                    if (r.key !== "Enter" || this.isPressing) return;
                    const o = a => {
                        a.key !== "Enter" || !this.checkPressEnd() || rl("up", (l, u) => {
                            const {
                                onTap: c
                            } = this.node.getProps();
                            c && H.postRender(() => c(l, u))
                        })
                    };
                    this.removeEndListeners(), this.removeEndListeners = Nt(this.node.current, "keyup", o), rl("down", (a, l) => {
                        this.startPress(a, l)
                    })
                },
                n = Nt(this.node.current, "keydown", e),
                i = () => {
                    this.isPressing && rl("cancel", (r, o) => this.cancelPress(r, o))
                },
                s = Nt(this.node.current, "blur", i);
            this.removeAccessibleListeners = Ut(n, s)
        }
    }
    startPress(e, n) {
        this.isPressing = !0;
        const {
            onTapStart: i,
            whileTap: s
        } = this.node.getProps();
        s && this.node.animationState && this.node.animationState.setActive("whileTap", !0), i && H.postRender(() => i(e, n))
    }
    checkPressEnd() {
        return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !sv()
    }
    cancelPress(e, n) {
        if (!this.checkPressEnd()) return;
        const {
            onTapCancel: i
        } = this.node.getProps();
        i && H.postRender(() => i(e, n))
    }
    mount() {
        const e = this.node.getProps(),
            n = $t(e.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
                passive: !(e.onTapStart || e.onPointerStart)
            }),
            i = Nt(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = Ut(n, i)
    }
    unmount() {
        this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
    }
}
const ku = new WeakMap,
    ol = new WeakMap,
    YE = t => {
        const e = ku.get(t.target);
        e && e(t)
    },
    ZE = t => {
        t.forEach(YE)
    };

function JE({
    root: t,
    ...e
}) {
    const n = t || document;
    ol.has(n) || ol.set(n, {});
    const i = ol.get(n),
        s = JSON.stringify(e);
    return i[s] || (i[s] = new IntersectionObserver(ZE, {
        root: t,
        ...e
    })), i[s]
}

function eM(t, e, n) {
    const i = JE(e);
    return ku.set(t, n), i.observe(t), () => {
        ku.delete(t), i.unobserve(t)
    }
}
const tM = {
    some: 0,
    all: 1
};
class nM extends En {
    constructor() {
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {
            viewport: e = {}
        } = this.node.getProps(), {
            root: n,
            margin: i,
            amount: s = "some",
            once: r
        } = e, o = {
            root: n ? n.current : void 0,
            rootMargin: i,
            threshold: typeof s == "number" ? s : tM[s]
        }, a = l => {
            const {
                isIntersecting: u
            } = l;
            if (this.isInView === u || (this.isInView = u, r && !u && this.hasEnteredView)) return;
            u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
            const {
                onViewportEnter: c,
                onViewportLeave: d
            } = this.node.getProps(), f = u ? c : d;
            f && f(l)
        };
        return eM(this.node.current, o, a)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const {
            props: e,
            prevProps: n
        } = this.node;
        ["amount", "margin", "root"].some(iM(e, n)) && this.startObserver()
    }
    unmount() {}
}

function iM({
    viewport: t = {}
}, {
    viewport: e = {}
} = {}) {
    return n => t[n] !== e[n]
}
const sM = {
        inView: {
            Feature: nM
        },
        tap: {
            Feature: XE
        },
        focus: {
            Feature: QE
        },
        hover: {
            Feature: KE
        }
    },
    rM = {
        layout: {
            ProjectionNode: kv,
            MeasureLayout: pv
        }
    },
    Pv = k.createContext({
        transformPagePoint: t => t,
        isStatic: !1,
        reducedMotion: "never"
    }),
    na = k.createContext({}),
    Zc = typeof window < "u",
    oM = Zc ? k.useLayoutEffect : k.useEffect,
    Cv = k.createContext({
        strict: !1
    });

function aM(t, e, n, i, s) {
    var r, o;
    const {
        visualElement: a
    } = k.useContext(na), l = k.useContext(Cv), u = k.useContext(Xc), c = k.useContext(Pv).reducedMotion, d = k.useRef();
    i = i || l.renderer, !d.current && i && (d.current = i(t, {
        visualState: e,
        parent: a,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: c
    }));
    const f = d.current,
        h = k.useContext(hv);
    f && !f.projection && s && (f.type === "html" || f.type === "svg") && lM(d.current, n, s, h);
    const y = k.useRef(!1);
    k.useInsertionEffect(() => {
        f && y.current && f.update(n, u)
    });
    const g = n[Qy],
        x = k.useRef(!!g && !(!((r = window.MotionHandoffIsComplete) === null || r === void 0) && r.call(window, g)) && ((o = window.MotionHasOptimisedAnimation) === null || o === void 0 ? void 0 : o.call(window, g)));
    return oM(() => {
        f && (y.current = !0, window.MotionIsMounted = !0, f.updateFeatures(), Yc.render(f.render), x.current && f.animationState && f.animationState.animateChanges())
    }), k.useEffect(() => {
        f && (!x.current && f.animationState && f.animationState.animateChanges(), x.current && (queueMicrotask(() => {
            var p;
            (p = window.MotionHandoffMarkAsComplete) === null || p === void 0 || p.call(window, g)
        }), x.current = !1))
    }), f
}

function lM(t, e, n, i) {
    const {
        layoutId: s,
        layout: r,
        drag: o,
        dragConstraints: a,
        layoutScroll: l,
        layoutRoot: u
    } = e;
    t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : _v(t.parent)), t.projection.setOptions({
        layoutId: s,
        layout: r,
        alwaysMeasureLayout: !!o || a && wi(a),
        visualElement: t,
        animationType: typeof r == "string" ? r : "both",
        initialPromotionConfig: i,
        layoutScroll: l,
        layoutRoot: u
    })
}

function _v(t) {
    if (t) return t.options.allowProjection !== !1 ? t.projection : _v(t.parent)
}

function uM(t, e, n) {
    return k.useCallback(i => {
        i && t.mount && t.mount(i), e && (i ? e.mount(i) : e.unmount()), n && (typeof n == "function" ? n(i) : wi(n) && (n.current = i))
    }, [e])
}

function ia(t) {
    return Zo(t.animate) || Rc.some(e => Hs(t[e]))
}

function Tv(t) {
    return !!(ia(t) || t.variants)
}

function cM(t, e) {
    if (ia(t)) {
        const {
            initial: n,
            animate: i
        } = t;
        return {
            initial: n === !1 || Hs(n) ? n : void 0,
            animate: Hs(i) ? i : void 0
        }
    }
    return t.inherit !== !1 ? e : {}
}

function dM(t) {
    const {
        initial: e,
        animate: n
    } = cM(t, k.useContext(na));
    return k.useMemo(() => ({
        initial: e,
        animate: n
    }), [tp(e), tp(n)])
}

function tp(t) {
    return Array.isArray(t) ? t.join(" ") : t
}
const np = {
        animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"]
    },
    Wi = {};
for (const t in np) Wi[t] = {
    isEnabled: e => np[t].some(n => !!e[n])
};

function fM(t) {
    for (const e in t) Wi[e] = {
        ...Wi[e],
        ...t[e]
    }
}
const hM = Symbol.for("motionComponentSymbol");

function pM({
    preloadedFeatures: t,
    createVisualElement: e,
    useRender: n,
    useVisualState: i,
    Component: s
}) {
    t && fM(t);

    function r(a, l) {
        let u;
        const c = {
                ...k.useContext(Pv),
                ...a,
                layoutId: mM(a)
            },
            {
                isStatic: d
            } = c,
            f = dM(a),
            h = i(a, d);
        if (!d && Zc) {
            gM();
            const y = yM(c);
            u = y.MeasureLayout, f.visualElement = aM(s, h, c, e, y.ProjectionNode)
        }
        return C.jsxs(na.Provider, {
            value: f,
            children: [u && f.visualElement ? C.jsx(u, {
                visualElement: f.visualElement,
                ...c
            }) : null, n(s, a, uM(h, f.visualElement, l), h, d, f.visualElement)]
        })
    }
    const o = k.forwardRef(r);
    return o[hM] = s, o
}

function mM({
    layoutId: t
}) {
    const e = k.useContext(fv).id;
    return e && t !== void 0 ? e + "-" + t : t
}

function gM(t, e) {
    k.useContext(Cv).strict
}

function yM(t) {
    const {
        drag: e,
        layout: n
    } = Wi;
    if (!e && !n) return {};
    const i = {
        ...e,
        ...n
    };
    return {
        MeasureLayout: e != null && e.isEnabled(t) || n != null && n.isEnabled(t) ? i.MeasureLayout : void 0,
        ProjectionNode: i.ProjectionNode
    }
}
const vM = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function Jc(t) {
    return typeof t != "string" || t.includes("-") ? !1 : !!(vM.indexOf(t) > -1 || /[A-Z]/u.test(t))
}

function Ev(t, {
    style: e,
    vars: n
}, i, s) {
    Object.assign(t.style, e, s && s.getProjectionStyles(i));
    for (const r in n) t.style.setProperty(r, n[r])
}
const Mv = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function Rv(t, e, n, i) {
    Ev(t, e, void 0, i);
    for (const s in e.attrs) t.setAttribute(Mv.has(s) ? s : Qc(s), e.attrs[s])
}

function zv(t, {
    layout: e,
    layoutId: n
}) {
    return ti.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!Mo[t] || t === "opacity")
}

function ed(t, e, n) {
    var i;
    const {
        style: s
    } = t, r = {};
    for (const o in s)(Te(s[o]) || e.style && Te(e.style[o]) || zv(o, t) || ((i = n == null ? void 0 : n.getValue(o)) === null || i === void 0 ? void 0 : i.liveStyle) !== void 0) && (r[o] = s[o]);
    return r
}

function Dv(t, e, n) {
    const i = ed(t, e, n);
    for (const s in t)
        if (Te(t[s]) || Te(e[s])) {
            const r = ir.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
            i[r] = t[s]
        } return i
}

function wM(t) {
    const e = k.useRef(null);
    return e.current === null && (e.current = t()), e.current
}

function xM({
    scrapeMotionValuesFromProps: t,
    createRenderState: e,
    onMount: n
}, i, s, r) {
    const o = {
        latestValues: bM(i, s, r, t),
        renderState: e()
    };
    return n && (o.mount = a => n(i, a, o)), o
}
const Ov = t => (e, n) => {
    const i = k.useContext(na),
        s = k.useContext(Xc),
        r = () => xM(t, e, i, s);
    return n ? r() : wM(r)
};

function bM(t, e, n, i) {
    const s = {},
        r = i(t, {});
    for (const f in r) s[f] = Wr(r[f]);
    let {
        initial: o,
        animate: a
    } = t;
    const l = ia(t),
        u = Tv(t);
    e && u && !l && t.inherit !== !1 && (o === void 0 && (o = e.initial), a === void 0 && (a = e.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || o === !1;
    const d = c ? a : o;
    if (d && typeof d != "boolean" && !Zo(d)) {
        const f = Array.isArray(d) ? d : [d];
        for (let h = 0; h < f.length; h++) {
            const y = Ec(t, f[h]);
            if (y) {
                const {
                    transitionEnd: g,
                    transition: x,
                    ...p
                } = y;
                for (const m in p) {
                    let v = p[m];
                    if (Array.isArray(v)) {
                        const w = c ? v.length - 1 : 0;
                        v = v[w]
                    }
                    v !== null && (s[m] = v)
                }
                for (const m in g) s[m] = g[m]
            }
        }
    }
    return s
}
const td = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
    }),
    Av = () => ({
        ...td(),
        attrs: {}
    }),
    Lv = (t, e) => e && typeof t == "number" ? e.transform(t) : t,
    kM = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    },
    SM = ir.length;

function PM(t, e, n) {
    let i = "",
        s = !0;
    for (let r = 0; r < SM; r++) {
        const o = ir[r],
            a = t[o];
        if (a === void 0) continue;
        let l = !0;
        if (typeof a == "number" ? l = a === (o.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
            const u = Lv(a, Nc[o]);
            if (!l) {
                s = !1;
                const c = kM[o] || o;
                i += `${c}(${u}) `
            }
            n && (e[o] = u)
        }
    }
    return i = i.trim(), n ? i = n(e, s ? "" : i) : s && (i = "none"), i
}

function nd(t, e, n) {
    const {
        style: i,
        vars: s,
        transformOrigin: r
    } = t;
    let o = !1,
        a = !1;
    for (const l in e) {
        const u = e[l];
        if (ti.has(l)) {
            o = !0;
            continue
        } else if (_y(l)) {
            s[l] = u;
            continue
        } else {
            const c = Lv(u, Nc[l]);
            l.startsWith("origin") ? (a = !0, r[l] = c) : i[l] = c
        }
    }
    if (e.transform || (o || n ? i.transform = PM(e, t.transform, n) : i.transform && (i.transform = "none")), a) {
        const {
            originX: l = "50%",
            originY: u = "50%",
            originZ: c = 0
        } = r;
        i.transformOrigin = `${l} ${u} ${c}`
    }
}

function ip(t, e, n) {
    return typeof t == "string" ? t : L.transform(e + n * t)
}

function CM(t, e, n) {
    const i = ip(e, t.x, t.width),
        s = ip(n, t.y, t.height);
    return `${i} ${s}`
}
const _M = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    },
    TM = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };

function EM(t, e, n = 1, i = 0, s = !0) {
    t.pathLength = 1;
    const r = s ? _M : TM;
    t[r.offset] = L.transform(-i);
    const o = L.transform(e),
        a = L.transform(n);
    t[r.array] = `${o} ${a}`
}

function id(t, {
    attrX: e,
    attrY: n,
    attrScale: i,
    originX: s,
    originY: r,
    pathLength: o,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
}, c, d) {
    if (nd(t, u, d), c) {
        t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
        return
    }
    t.attrs = t.style, t.style = {};
    const {
        attrs: f,
        style: h,
        dimensions: y
    } = t;
    f.transform && (y && (h.transform = f.transform), delete f.transform), y && (s !== void 0 || r !== void 0 || h.transform) && (h.transformOrigin = CM(y, s !== void 0 ? s : .5, r !== void 0 ? r : .5)), e !== void 0 && (f.x = e), n !== void 0 && (f.y = n), i !== void 0 && (f.scale = i), o !== void 0 && EM(f, o, a, l, !1)
}
const sd = t => typeof t == "string" && t.toLowerCase() === "svg",
    MM = {
        useVisualState: Ov({
            scrapeMotionValuesFromProps: Dv,
            createRenderState: Av,
            onMount: (t, e, {
                renderState: n,
                latestValues: i
            }) => {
                H.read(() => {
                    try {
                        n.dimensions = typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect()
                    } catch {
                        n.dimensions = {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }
                    }
                }), H.render(() => {
                    id(n, i, sd(e.tagName), t.transformTemplate), Rv(e, n)
                })
            }
        })
    },
    RM = {
        useVisualState: Ov({
            scrapeMotionValuesFromProps: ed,
            createRenderState: td
        })
    };

function Iv(t, e, n) {
    for (const i in e) !Te(e[i]) && !zv(i, n) && (t[i] = e[i])
}

function zM({
    transformTemplate: t
}, e) {
    return k.useMemo(() => {
        const n = td();
        return nd(n, e, t), Object.assign({}, n.vars, n.style)
    }, [e])
}

function DM(t, e) {
    const n = t.style || {},
        i = {};
    return Iv(i, n, t), Object.assign(i, zM(t, e)), i
}

function OM(t, e) {
    const n = {},
        i = DM(t, e);
    return t.drag && t.dragListener !== !1 && (n.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = t.drag === !0 ? "none" : `pan-${t.drag==="x"?"y":"x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = i, n
}
const AM = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

function Ro(t) {
    return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || AM.has(t)
}
let Fv = t => !Ro(t);

function LM(t) {
    t && (Fv = e => e.startsWith("on") ? !Ro(e) : t(e))
}
try {
    LM(require("@emotion/is-prop-valid").default)
} catch {}

function IM(t, e, n) {
    const i = {};
    for (const s in t) s === "values" && typeof t.values == "object" || (Fv(s) || n === !0 && Ro(s) || !e && !Ro(s) || t.draggable && s.startsWith("onDrag")) && (i[s] = t[s]);
    return i
}

function FM(t, e, n, i) {
    const s = k.useMemo(() => {
        const r = Av();
        return id(r, e, sd(i), t.transformTemplate), {
            ...r.attrs,
            style: {
                ...r.style
            }
        }
    }, [e]);
    if (t.style) {
        const r = {};
        Iv(r, t.style, t), s.style = {
            ...r,
            ...s.style
        }
    }
    return s
}

function NM(t = !1) {
    return (n, i, s, {
        latestValues: r
    }, o) => {
        const l = (Jc(n) ? FM : OM)(i, r, o, n),
            u = IM(i, typeof n == "string", t),
            c = n !== k.Fragment ? {
                ...u,
                ...l,
                ref: s
            } : {},
            {
                children: d
            } = i,
            f = k.useMemo(() => Te(d) ? d.get() : d, [d]);
        return k.createElement(n, {
            ...c,
            children: f
        })
    }
}

function VM(t, e) {
    return function(i, {
        forwardMotionProps: s
    } = {
        forwardMotionProps: !1
    }) {
        const o = {
            ...Jc(i) ? MM : RM,
            preloadedFeatures: t,
            useRender: NM(s),
            createVisualElement: e,
            Component: i
        };
        return pM(o)
    }
}
const Su = {
        current: null
    },
    Nv = {
        current: !1
    };

function jM() {
    if (Nv.current = !0, !!Zc)
        if (window.matchMedia) {
            const t = window.matchMedia("(prefers-reduced-motion)"),
                e = () => Su.current = t.matches;
            t.addListener(e), e()
        } else Su.current = !1
}

function BM(t, e, n) {
    for (const i in e) {
        const s = e[i],
            r = n[i];
        if (Te(s)) t.addValue(i, s);
        else if (Te(r)) t.addValue(i, Ks(s, {
            owner: t
        }));
        else if (r !== s)
            if (t.hasValue(i)) {
                const o = t.getValue(i);
                o.liveStyle === !0 ? o.jump(s) : o.hasAnimated || o.set(s)
            } else {
                const o = t.getStaticValue(i);
                t.addValue(i, Ks(o !== void 0 ? o : s, {
                    owner: t
                }))
            }
    }
    for (const i in n) e[i] === void 0 && t.removeValue(i);
    return e
}
const sp = new WeakMap,
    UM = [...My, Ce, Pn],
    $M = t => UM.find(Ey(t)),
    rp = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class WM {
    scrapeMotionValuesFromProps(e, n, i) {
        return {}
    }
    constructor({
        parent: e,
        props: n,
        presenceContext: i,
        reducedMotionConfig: s,
        blockInitialAnimation: r,
        visualState: o
    }, a = {}) {
        this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = Lc, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }, this.renderScheduledAt = 0, this.scheduleRender = () => {
            const f = zt.now();
            this.renderScheduledAt < f && (this.renderScheduledAt = f, H.render(this.render, !1, !0))
        };
        const {
            latestValues: l,
            renderState: u
        } = o;
        this.latestValues = l, this.baseTarget = {
            ...l
        }, this.initialValues = n.initial ? {
            ...l
        } : {}, this.renderState = u, this.parent = e, this.props = n, this.presenceContext = i, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = s, this.options = a, this.blockInitialAnimation = !!r, this.isControllingVariants = ia(n), this.isVariantNode = Tv(n), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(e && e.current);
        const {
            willChange: c,
            ...d
        } = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const f in d) {
            const h = d[f];
            l[f] !== void 0 && Te(h) && h.set(l[f], !1)
        }
    }
    mount(e) {
        this.current = e, sp.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, i) => this.bindToMotionValue(i, n)), Nv.current || jM(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Su.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
    }
    unmount() {
        sp.delete(this.current), this.projection && this.projection.unmount(), kn(this.notifyUpdate), kn(this.render), this.valueSubscriptions.forEach(e => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
        for (const e in this.events) this.events[e].clear();
        for (const e in this.features) {
            const n = this.features[e];
            n && (n.unmount(), n.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(e, n) {
        this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
        const i = ti.has(e),
            s = n.on("change", a => {
                this.latestValues[e] = a, this.props.onUpdate && H.preRender(this.notifyUpdate), i && this.projection && (this.projection.isTransformDirty = !0)
            }),
            r = n.on("renderRequest", this.scheduleRender);
        let o;
        window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, e, n)), this.valueSubscriptions.set(e, () => {
            s(), r(), o && o(), n.owner && n.stop()
        })
    }
    sortNodePosition(e) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current)
    }
    updateFeatures() {
        let e = "animation";
        for (e in Wi) {
            const n = Wi[e];
            if (!n) continue;
            const {
                isEnabled: i,
                Feature: s
            } = n;
            if (!this.features[e] && s && i(this.props) && (this.features[e] = new s(this)), this.features[e]) {
                const r = this.features[e];
                r.isMounted ? r.update() : (r.mount(), r.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : le()
    }
    getStaticValue(e) {
        return this.latestValues[e]
    }
    setStaticValue(e, n) {
        this.latestValues[e] = n
    }
    update(e, n) {
        (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
        for (let i = 0; i < rp.length; i++) {
            const s = rp[i];
            this.propEventSubscriptions[s] && (this.propEventSubscriptions[s](), delete this.propEventSubscriptions[s]);
            const r = "on" + s,
                o = e[r];
            o && (this.propEventSubscriptions[s] = this.on(s, o))
        }
        this.prevMotionValues = BM(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(e) {
        return this.props.variants ? this.props.variants[e] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(e) {
        const n = this.getClosestVariantNode();
        if (n) return n.variantChildren && n.variantChildren.add(e), () => n.variantChildren.delete(e)
    }
    addValue(e, n) {
        const i = this.values.get(e);
        n !== i && (i && this.removeValue(e), this.bindToMotionValue(e, n), this.values.set(e, n), this.latestValues[e] = n.get())
    }
    removeValue(e) {
        this.values.delete(e);
        const n = this.valueSubscriptions.get(e);
        n && (n(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState)
    }
    hasValue(e) {
        return this.values.has(e)
    }
    getValue(e, n) {
        if (this.props.values && this.props.values[e]) return this.props.values[e];
        let i = this.values.get(e);
        return i === void 0 && n !== void 0 && (i = Ks(n === null ? void 0 : n, {
            owner: this
        }), this.addValue(e, i)), i
    }
    readValue(e, n) {
        var i;
        let s = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : (i = this.getBaseTargetFromProps(this.props, e)) !== null && i !== void 0 ? i : this.readValueFromInstance(this.current, e, this.options);
        return s != null && (typeof s == "string" && (Py(s) || Sy(s)) ? s = parseFloat(s) : !$M(s) && Pn.test(n) && (s = Fy(e, n)), this.setBaseTarget(e, Te(s) ? s.get() : s)), Te(s) ? s.get() : s
    }
    setBaseTarget(e, n) {
        this.baseTarget[e] = n
    }
    getBaseTarget(e) {
        var n;
        const {
            initial: i
        } = this.props;
        let s;
        if (typeof i == "string" || typeof i == "object") {
            const o = Ec(this.props, i, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
            o && (s = o[e])
        }
        if (i && s !== void 0) return s;
        const r = this.getBaseTargetFromProps(this.props, e);
        return r !== void 0 && !Te(r) ? r : this.initialValues[e] !== void 0 && s === void 0 ? void 0 : this.baseTarget[e]
    }
    on(e, n) {
        return this.events[e] || (this.events[e] = new Kc), this.events[e].add(n)
    }
    notify(e, ...n) {
        this.events[e] && this.events[e].notify(...n)
    }
}
class Vv extends WM {
    constructor() {
        super(...arguments), this.KeyframeResolver = Ny
    }
    sortInstanceNodePosition(e, n) {
        return e.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(e, n) {
        return e.style ? e.style[n] : void 0
    }
    removeValueFromRenderState(e, {
        vars: n,
        style: i
    }) {
        delete n[e], delete i[e]
    }
}

function HM(t) {
    return window.getComputedStyle(t)
}
class GM extends Vv {
    constructor() {
        super(...arguments), this.type = "html", this.renderInstance = Ev
    }
    readValueFromInstance(e, n) {
        if (ti.has(n)) {
            const i = Vc(n);
            return i && i.default || 0
        } else {
            const i = HM(e),
                s = (_y(n) ? i.getPropertyValue(n) : i[n]) || 0;
            return typeof s == "string" ? s.trim() : s
        }
    }
    measureInstanceViewportBox(e, {
        transformPagePoint: n
    }) {
        return cv(e, n)
    }
    build(e, n, i) {
        nd(e, n, i.transformTemplate)
    }
    scrapeMotionValuesFromProps(e, n, i) {
        return ed(e, n, i)
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const {
            children: e
        } = this.props;
        Te(e) && (this.childSubscription = e.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }))
    }
}
class qM extends Vv {
    constructor() {
        super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = le
    }
    getBaseTargetFromProps(e, n) {
        return e[n]
    }
    readValueFromInstance(e, n) {
        if (ti.has(n)) {
            const i = Vc(n);
            return i && i.default || 0
        }
        return n = Mv.has(n) ? n : Qc(n), e.getAttribute(n)
    }
    scrapeMotionValuesFromProps(e, n, i) {
        return Dv(e, n, i)
    }
    build(e, n, i) {
        id(e, n, this.isSVGTag, i.transformTemplate)
    }
    renderInstance(e, n, i, s) {
        Rv(e, n, i, s)
    }
    mount(e) {
        this.isSVGTag = sd(e.tagName), super.mount(e)
    }
}
const KM = (t, e) => Jc(t) ? new qM(e) : new GM(e, {
        allowProjection: t !== k.Fragment
    }),
    QM = VM({
        ...IT,
        ...sM,
        ...qE,
        ...rM
    }, KM),
    Pu = TC(QM);
/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const XM = t => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    jv = (...t) => t.filter((e, n, i) => !!e && i.indexOf(e) === n).join(" ");
/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var YM = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ZM = k.forwardRef(({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: i,
    className: s = "",
    children: r,
    iconNode: o,
    ...a
}, l) => k.createElement("svg", {
    ref: l,
    ...YM,
    width: e,
    height: e,
    stroke: t,
    strokeWidth: i ? Number(n) * 24 / Number(e) : n,
    className: jv("lucide", s),
    ...a
}, [...o.map(([u, c]) => k.createElement(u, c)), ...Array.isArray(r) ? r : [r]]));
/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mn = (t, e) => {
    const n = k.forwardRef(({
        className: i,
        ...s
    }, r) => k.createElement(ZM, {
        ref: r,
        iconNode: e,
        className: jv(`lucide-${XM(t)}`, i),
        ...s
    }));
    return n.displayName = `${t}`, n
};
/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const JM = Mn("ArrowDown", [
    ["path", {
        d: "M12 5v14",
        key: "s699le"
    }],
    ["path", {
        d: "m19 12-7 7-7-7",
        key: "1idqje"
    }]
]);
/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eR = Mn("Brain", [
    ["path", {
        d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
        key: "l5xja"
    }],
    ["path", {
        d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
        key: "ep3f8r"
    }],
    ["path", {
        d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",
        key: "1p4c4q"
    }],
    ["path", {
        d: "M17.599 6.5a3 3 0 0 0 .399-1.375",
        key: "tmeiqw"
    }],
    ["path", {
        d: "M6.003 5.125A3 3 0 0 0 6.401 6.5",
        key: "105sqy"
    }],
    ["path", {
        d: "M3.477 10.896a4 4 0 0 1 .585-.396",
        key: "ql3yin"
    }],
    ["path", {
        d: "M19.938 10.5a4 4 0 0 1 .585.396",
        key: "1qfode"
    }],
    ["path", {
        d: "M6 18a4 4 0 0 1-1.967-.516",
        key: "2e4loj"
    }],
    ["path", {
        d: "M19.967 17.484A4 4 0 0 1 18 18",
        key: "159ez6"
    }]
]);
/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tR = Mn("Code", [
    ["polyline", {
        points: "16 18 22 12 16 6",
        key: "z7tu5w"
    }],
    ["polyline", {
        points: "8 6 2 12 8 18",
        key: "1eg1df"
    }]
]);
/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nR = Mn("Database", [
    ["ellipse", {
        cx: "12",
        cy: "5",
        rx: "9",
        ry: "3",
        key: "msslwz"
    }],
    ["path", {
        d: "M3 5V19A9 3 0 0 0 21 19V5",
        key: "1wlel7"
    }],
    ["path", {
        d: "M3 12A9 3 0 0 0 21 12",
        key: "mv7ke4"
    }]
]);
/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iR = Mn("Download", [
    ["path", {
        d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
        key: "ih7n3h"
    }],
    ["polyline", {
        points: "7 10 12 15 17 10",
        key: "2ggqvy"
    }],
    ["line", {
        x1: "12",
        x2: "12",
        y1: "15",
        y2: "3",
        key: "1vk2je"
    }]
]);
/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sR = Mn("Mail", [
    ["rect", {
        width: "20",
        height: "16",
        x: "2",
        y: "4",
        rx: "2",
        key: "18n3k1"
    }],
    ["path", {
        d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
        key: "1ocrg3"
    }]
]);
/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rR = Mn("MessageSquare", [
    ["path", {
        d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
        key: "1lielz"
    }]
]);
/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oR = Mn("Phone", [
        ["path", {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
            key: "foiqr5"
        }]
    ]),
    githb = Mn("GitHub", [
        ["path", {
            d: "M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
        }]
    ]),
    aR = () => {
        const t = e => {
            const n = document.getElementById(e);
            n == null || n.scrollIntoView({
                behavior: "smooth"
            })
        };
        return C.jsxs("section", {
            id: "hero",
            className: "min-h-screen flex flex-col items-center justify-center px-4 pt-16 relative bg-gradient-to-b from-background via-background/80 to-background",
            children: [C.jsxs(Pu.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .8
                },
                className: "text-center",
                children: [C.jsx("h1", {
                    className: "text-5xl md:text-7xl font-bold mb-6 gradient-text",
                    children: "Dmitry Gilemkhanov"
                }), C.jsx("p", {
                    className: "text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto",
                    children: "ML Engineer"
                })]
            }), C.jsx(Pu.button, {
                onClick: () => t("about"),
                className: "absolute bottom-10 animate-bounce",
                whileHover: {
                    scale: 1.1
                },
                children: C.jsx(JM, {
                    className: "h-8 w-8 text-primary"
                })
            })]
        })
    };

function Bv(t) {
    var e, n, i = "";
    if (typeof t == "string" || typeof t == "number") i += t;
    else if (typeof t == "object")
        if (Array.isArray(t)) {
            var s = t.length;
            for (e = 0; e < s; e++) t[e] && (n = Bv(t[e])) && (i && (i += " "), i += n)
        } else
            for (n in t) t[n] && (i && (i += " "), i += n);
    return i
}

function lR() {
    for (var t, e, n = 0, i = "", s = arguments.length; n < s; n++)(t = arguments[n]) && (e = Bv(t)) && (i && (i += " "), i += e);
    return i
}
const rd = "-",
    uR = t => {
        const e = dR(t),
            {
                conflictingClassGroups: n,
                conflictingClassGroupModifiers: i
            } = t;
        return {
            getClassGroupId: o => {
                const a = o.split(rd);
                return a[0] === "" && a.length !== 1 && a.shift(), Uv(a, e) || cR(o)
            },
            getConflictingClassGroupIds: (o, a) => {
                const l = n[o] || [];
                return a && i[o] ? [...l, ...i[o]] : l
            }
        }
    },
    Uv = (t, e) => {
        var o;
        if (t.length === 0) return e.classGroupId;
        const n = t[0],
            i = e.nextPart.get(n),
            s = i ? Uv(t.slice(1), i) : void 0;
        if (s) return s;
        if (e.validators.length === 0) return;
        const r = t.join(rd);
        return (o = e.validators.find(({
            validator: a
        }) => a(r))) == null ? void 0 : o.classGroupId
    },
    op = /^\[(.+)\]$/,
    cR = t => {
        if (op.test(t)) {
            const e = op.exec(t)[1],
                n = e == null ? void 0 : e.substring(0, e.indexOf(":"));
            if (n) return "arbitrary.." + n
        }
    },
    dR = t => {
        const {
            theme: e,
            prefix: n
        } = t, i = {
            nextPart: new Map,
            validators: []
        };
        return hR(Object.entries(t.classGroups), n).forEach(([r, o]) => {
            Cu(o, i, r, e)
        }), i
    },
    Cu = (t, e, n, i) => {
        t.forEach(s => {
            if (typeof s == "string") {
                const r = s === "" ? e : ap(e, s);
                r.classGroupId = n;
                return
            }
            if (typeof s == "function") {
                if (fR(s)) {
                    Cu(s(i), e, n, i);
                    return
                }
                e.validators.push({
                    validator: s,
                    classGroupId: n
                });
                return
            }
            Object.entries(s).forEach(([r, o]) => {
                Cu(o, ap(e, r), n, i)
            })
        })
    },
    ap = (t, e) => {
        let n = t;
        return e.split(rd).forEach(i => {
            n.nextPart.has(i) || n.nextPart.set(i, {
                nextPart: new Map,
                validators: []
            }), n = n.nextPart.get(i)
        }), n
    },
    fR = t => t.isThemeGetter,
    hR = (t, e) => e ? t.map(([n, i]) => {
        const s = i.map(r => typeof r == "string" ? e + r : typeof r == "object" ? Object.fromEntries(Object.entries(r).map(([o, a]) => [e + o, a])) : r);
        return [n, s]
    }) : t,
    pR = t => {
        if (t < 1) return {
            get: () => {},
            set: () => {}
        };
        let e = 0,
            n = new Map,
            i = new Map;
        const s = (r, o) => {
            n.set(r, o), e++, e > t && (e = 0, i = n, n = new Map)
        };
        return {
            get(r) {
                let o = n.get(r);
                if (o !== void 0) return o;
                if ((o = i.get(r)) !== void 0) return s(r, o), o
            },
            set(r, o) {
                n.has(r) ? n.set(r, o) : s(r, o)
            }
        }
    },
    $v = "!",
    mR = t => {
        const {
            separator: e,
            experimentalParseClassName: n
        } = t, i = e.length === 1, s = e[0], r = e.length, o = a => {
            const l = [];
            let u = 0,
                c = 0,
                d;
            for (let x = 0; x < a.length; x++) {
                let p = a[x];
                if (u === 0) {
                    if (p === s && (i || a.slice(x, x + r) === e)) {
                        l.push(a.slice(c, x)), c = x + r;
                        continue
                    }
                    if (p === "/") {
                        d = x;
                        continue
                    }
                }
                p === "[" ? u++ : p === "]" && u--
            }
            const f = l.length === 0 ? a : a.substring(c),
                h = f.startsWith($v),
                y = h ? f.substring(1) : f,
                g = d && d > c ? d - c : void 0;
            return {
                modifiers: l,
                hasImportantModifier: h,
                baseClassName: y,
                maybePostfixModifierPosition: g
            }
        };
        return n ? a => n({
            className: a,
            parseClassName: o
        }) : o
    },
    gR = t => {
        if (t.length <= 1) return t;
        const e = [];
        let n = [];
        return t.forEach(i => {
            i[0] === "[" ? (e.push(...n.sort(), i), n = []) : n.push(i)
        }), e.push(...n.sort()), e
    },
    yR = t => ({
        cache: pR(t.cacheSize),
        parseClassName: mR(t),
        ...uR(t)
    }),
    vR = /\s+/,
    wR = (t, e) => {
        const {
            parseClassName: n,
            getClassGroupId: i,
            getConflictingClassGroupIds: s
        } = e, r = [], o = t.trim().split(vR);
        let a = "";
        for (let l = o.length - 1; l >= 0; l -= 1) {
            const u = o[l],
                {
                    modifiers: c,
                    hasImportantModifier: d,
                    baseClassName: f,
                    maybePostfixModifierPosition: h
                } = n(u);
            let y = !!h,
                g = i(y ? f.substring(0, h) : f);
            if (!g) {
                if (!y) {
                    a = u + (a.length > 0 ? " " + a : a);
                    continue
                }
                if (g = i(f), !g) {
                    a = u + (a.length > 0 ? " " + a : a);
                    continue
                }
                y = !1
            }
            const x = gR(c).join(":"),
                p = d ? x + $v : x,
                m = p + g;
            if (r.includes(m)) continue;
            r.push(m);
            const v = s(g, y);
            for (let w = 0; w < v.length; ++w) {
                const b = v[w];
                r.push(p + b)
            }
            a = u + (a.length > 0 ? " " + a : a)
        }
        return a
    };

function xR() {
    let t = 0,
        e, n, i = "";
    for (; t < arguments.length;)(e = arguments[t++]) && (n = Wv(e)) && (i && (i += " "), i += n);
    return i
}
const Wv = t => {
    if (typeof t == "string") return t;
    let e, n = "";
    for (let i = 0; i < t.length; i++) t[i] && (e = Wv(t[i])) && (n && (n += " "), n += e);
    return n
};

function bR(t, ...e) {
    let n, i, s, r = o;

    function o(l) {
        const u = e.reduce((c, d) => d(c), t());
        return n = yR(u), i = n.cache.get, s = n.cache.set, r = a, a(l)
    }

    function a(l) {
        const u = i(l);
        if (u) return u;
        const c = wR(l, n);
        return s(l, c), c
    }
    return function() {
        return r(xR.apply(null, arguments))
    }
}
const K = t => {
        const e = n => n[t] || [];
        return e.isThemeGetter = !0, e
    },
    Hv = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    kR = /^\d+\/\d+$/,
    SR = new Set(["px", "full", "screen"]),
    PR = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    CR = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    _R = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    TR = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    ER = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    Ot = t => Ri(t) || SR.has(t) || kR.test(t),
    Yt = t => Qi(t, "length", IR),
    Ri = t => !!t && !Number.isNaN(Number(t)),
    al = t => Qi(t, "number", Ri),
    os = t => !!t && Number.isInteger(Number(t)),
    MR = t => t.endsWith("%") && Ri(t.slice(0, -1)),
    N = t => Hv.test(t),
    Zt = t => PR.test(t),
    RR = new Set(["length", "size", "percentage"]),
    zR = t => Qi(t, RR, Gv),
    DR = t => Qi(t, "position", Gv),
    OR = new Set(["image", "url"]),
    AR = t => Qi(t, OR, NR),
    LR = t => Qi(t, "", FR),
    as = () => !0,
    Qi = (t, e, n) => {
        const i = Hv.exec(t);
        return i ? i[1] ? typeof e == "string" ? i[1] === e : e.has(i[1]) : n(i[2]) : !1
    },
    IR = t => CR.test(t) && !_R.test(t),
    Gv = () => !1,
    FR = t => TR.test(t),
    NR = t => ER.test(t),
    VR = () => {
        const t = K("colors"),
            e = K("spacing"),
            n = K("blur"),
            i = K("brightness"),
            s = K("borderColor"),
            r = K("borderRadius"),
            o = K("borderSpacing"),
            a = K("borderWidth"),
            l = K("contrast"),
            u = K("grayscale"),
            c = K("hueRotate"),
            d = K("invert"),
            f = K("gap"),
            h = K("gradientColorStops"),
            y = K("gradientColorStopPositions"),
            g = K("inset"),
            x = K("margin"),
            p = K("opacity"),
            m = K("padding"),
            v = K("saturate"),
            w = K("scale"),
            b = K("sepia"),
            S = K("skew"),
            _ = K("space"),
            P = K("translate"),
            O = () => ["auto", "contain", "none"],
            D = () => ["auto", "hidden", "clip", "visible", "scroll"],
            B = () => ["auto", N, e],
            V = () => [N, e],
            Je = () => ["", Ot, Yt],
            St = () => ["auto", Ri, N],
            Xi = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
            Dt = () => ["solid", "dashed", "dotted", "double", "none"],
            re = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
            M = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
            A = () => ["", "0", N],
            I = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            $ = () => [Ri, N];
        return {
            cacheSize: 500,
            separator: ":",
            theme: {
                colors: [as],
                spacing: [Ot, Yt],
                blur: ["none", "", Zt, N],
                brightness: $(),
                borderColor: [t],
                borderRadius: ["none", "", "full", Zt, N],
                borderSpacing: V(),
                borderWidth: Je(),
                contrast: $(),
                grayscale: A(),
                hueRotate: $(),
                invert: A(),
                gap: V(),
                gradientColorStops: [t],
                gradientColorStopPositions: [MR, Yt],
                inset: B(),
                margin: B(),
                opacity: $(),
                padding: V(),
                saturate: $(),
                scale: $(),
                sepia: A(),
                skew: $(),
                space: V(),
                translate: V()
            },
            classGroups: {
                aspect: [{
                    aspect: ["auto", "square", "video", N]
                }],
                container: ["container"],
                columns: [{
                    columns: [Zt]
                }],
                "break-after": [{
                    "break-after": I()
                }],
                "break-before": [{
                    "break-before": I()
                }],
                "break-inside": [{
                    "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                }],
                "box-decoration": [{
                    "box-decoration": ["slice", "clone"]
                }],
                box: [{
                    box: ["border", "content"]
                }],
                display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                float: [{
                    float: ["right", "left", "none", "start", "end"]
                }],
                clear: [{
                    clear: ["left", "right", "both", "none", "start", "end"]
                }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{
                    object: ["contain", "cover", "fill", "none", "scale-down"]
                }],
                "object-position": [{
                    object: [...Xi(), N]
                }],
                overflow: [{
                    overflow: D()
                }],
                "overflow-x": [{
                    "overflow-x": D()
                }],
                "overflow-y": [{
                    "overflow-y": D()
                }],
                overscroll: [{
                    overscroll: O()
                }],
                "overscroll-x": [{
                    "overscroll-x": O()
                }],
                "overscroll-y": [{
                    "overscroll-y": O()
                }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{
                    inset: [g]
                }],
                "inset-x": [{
                    "inset-x": [g]
                }],
                "inset-y": [{
                    "inset-y": [g]
                }],
                start: [{
                    start: [g]
                }],
                end: [{
                    end: [g]
                }],
                top: [{
                    top: [g]
                }],
                right: [{
                    right: [g]
                }],
                bottom: [{
                    bottom: [g]
                }],
                left: [{
                    left: [g]
                }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{
                    z: ["auto", os, N]
                }],
                basis: [{
                    basis: B()
                }],
                "flex-direction": [{
                    flex: ["row", "row-reverse", "col", "col-reverse"]
                }],
                "flex-wrap": [{
                    flex: ["wrap", "wrap-reverse", "nowrap"]
                }],
                flex: [{
                    flex: ["1", "auto", "initial", "none", N]
                }],
                grow: [{
                    grow: A()
                }],
                shrink: [{
                    shrink: A()
                }],
                order: [{
                    order: ["first", "last", "none", os, N]
                }],
                "grid-cols": [{
                    "grid-cols": [as]
                }],
                "col-start-end": [{
                    col: ["auto", {
                        span: ["full", os, N]
                    }, N]
                }],
                "col-start": [{
                    "col-start": St()
                }],
                "col-end": [{
                    "col-end": St()
                }],
                "grid-rows": [{
                    "grid-rows": [as]
                }],
                "row-start-end": [{
                    row: ["auto", {
                        span: [os, N]
                    }, N]
                }],
                "row-start": [{
                    "row-start": St()
                }],
                "row-end": [{
                    "row-end": St()
                }],
                "grid-flow": [{
                    "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                }],
                "auto-cols": [{
                    "auto-cols": ["auto", "min", "max", "fr", N]
                }],
                "auto-rows": [{
                    "auto-rows": ["auto", "min", "max", "fr", N]
                }],
                gap: [{
                    gap: [f]
                }],
                "gap-x": [{
                    "gap-x": [f]
                }],
                "gap-y": [{
                    "gap-y": [f]
                }],
                "justify-content": [{
                    justify: ["normal", ...M()]
                }],
                "justify-items": [{
                    "justify-items": ["start", "end", "center", "stretch"]
                }],
                "justify-self": [{
                    "justify-self": ["auto", "start", "end", "center", "stretch"]
                }],
                "align-content": [{
                    content: ["normal", ...M(), "baseline"]
                }],
                "align-items": [{
                    items: ["start", "end", "center", "baseline", "stretch"]
                }],
                "align-self": [{
                    self: ["auto", "start", "end", "center", "stretch", "baseline"]
                }],
                "place-content": [{
                    "place-content": [...M(), "baseline"]
                }],
                "place-items": [{
                    "place-items": ["start", "end", "center", "baseline", "stretch"]
                }],
                "place-self": [{
                    "place-self": ["auto", "start", "end", "center", "stretch"]
                }],
                p: [{
                    p: [m]
                }],
                px: [{
                    px: [m]
                }],
                py: [{
                    py: [m]
                }],
                ps: [{
                    ps: [m]
                }],
                pe: [{
                    pe: [m]
                }],
                pt: [{
                    pt: [m]
                }],
                pr: [{
                    pr: [m]
                }],
                pb: [{
                    pb: [m]
                }],
                pl: [{
                    pl: [m]
                }],
                m: [{
                    m: [x]
                }],
                mx: [{
                    mx: [x]
                }],
                my: [{
                    my: [x]
                }],
                ms: [{
                    ms: [x]
                }],
                me: [{
                    me: [x]
                }],
                mt: [{
                    mt: [x]
                }],
                mr: [{
                    mr: [x]
                }],
                mb: [{
                    mb: [x]
                }],
                ml: [{
                    ml: [x]
                }],
                "space-x": [{
                    "space-x": [_]
                }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{
                    "space-y": [_]
                }],
                "space-y-reverse": ["space-y-reverse"],
                w: [{
                    w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", N, e]
                }],
                "min-w": [{
                    "min-w": [N, e, "min", "max", "fit"]
                }],
                "max-w": [{
                    "max-w": [N, e, "none", "full", "min", "max", "fit", "prose", {
                        screen: [Zt]
                    }, Zt]
                }],
                h: [{
                    h: [N, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "min-h": [{
                    "min-h": [N, e, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "max-h": [{
                    "max-h": [N, e, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                size: [{
                    size: [N, e, "auto", "min", "max", "fit"]
                }],
                "font-size": [{
                    text: ["base", Zt, Yt]
                }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{
                    font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", al]
                }],
                "font-family": [{
                    font: [as]
                }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
                tracking: [{
                    tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", N]
                }],
                "line-clamp": [{
                    "line-clamp": ["none", Ri, al]
                }],
                leading: [{
                    leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ot, N]
                }],
                "list-image": [{
                    "list-image": ["none", N]
                }],
                "list-style-type": [{
                    list: ["none", "disc", "decimal", N]
                }],
                "list-style-position": [{
                    list: ["inside", "outside"]
                }],
                "placeholder-color": [{
                    placeholder: [t]
                }],
                "placeholder-opacity": [{
                    "placeholder-opacity": [p]
                }],
                "text-alignment": [{
                    text: ["left", "center", "right", "justify", "start", "end"]
                }],
                "text-color": [{
                    text: [t]
                }],
                "text-opacity": [{
                    "text-opacity": [p]
                }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{
                    decoration: [...Dt(), "wavy"]
                }],
                "text-decoration-thickness": [{
                    decoration: ["auto", "from-font", Ot, Yt]
                }],
                "underline-offset": [{
                    "underline-offset": ["auto", Ot, N]
                }],
                "text-decoration-color": [{
                    decoration: [t]
                }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{
                    text: ["wrap", "nowrap", "balance", "pretty"]
                }],
                indent: [{
                    indent: V()
                }],
                "vertical-align": [{
                    align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", N]
                }],
                whitespace: [{
                    whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                }],
                break: [{
                    break: ["normal", "words", "all", "keep"]
                }],
                hyphens: [{
                    hyphens: ["none", "manual", "auto"]
                }],
                content: [{
                    content: ["none", N]
                }],
                "bg-attachment": [{
                    bg: ["fixed", "local", "scroll"]
                }],
                "bg-clip": [{
                    "bg-clip": ["border", "padding", "content", "text"]
                }],
                "bg-opacity": [{
                    "bg-opacity": [p]
                }],
                "bg-origin": [{
                    "bg-origin": ["border", "padding", "content"]
                }],
                "bg-position": [{
                    bg: [...Xi(), DR]
                }],
                "bg-repeat": [{
                    bg: ["no-repeat", {
                        repeat: ["", "x", "y", "round", "space"]
                    }]
                }],
                "bg-size": [{
                    bg: ["auto", "cover", "contain", zR]
                }],
                "bg-image": [{
                    bg: ["none", {
                        "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                    }, AR]
                }],
                "bg-color": [{
                    bg: [t]
                }],
                "gradient-from-pos": [{
                    from: [y]
                }],
                "gradient-via-pos": [{
                    via: [y]
                }],
                "gradient-to-pos": [{
                    to: [y]
                }],
                "gradient-from": [{
                    from: [h]
                }],
                "gradient-via": [{
                    via: [h]
                }],
                "gradient-to": [{
                    to: [h]
                }],
                rounded: [{
                    rounded: [r]
                }],
                "rounded-s": [{
                    "rounded-s": [r]
                }],
                "rounded-e": [{
                    "rounded-e": [r]
                }],
                "rounded-t": [{
                    "rounded-t": [r]
                }],
                "rounded-r": [{
                    "rounded-r": [r]
                }],
                "rounded-b": [{
                    "rounded-b": [r]
                }],
                "rounded-l": [{
                    "rounded-l": [r]
                }],
                "rounded-ss": [{
                    "rounded-ss": [r]
                }],
                "rounded-se": [{
                    "rounded-se": [r]
                }],
                "rounded-ee": [{
                    "rounded-ee": [r]
                }],
                "rounded-es": [{
                    "rounded-es": [r]
                }],
                "rounded-tl": [{
                    "rounded-tl": [r]
                }],
                "rounded-tr": [{
                    "rounded-tr": [r]
                }],
                "rounded-br": [{
                    "rounded-br": [r]
                }],
                "rounded-bl": [{
                    "rounded-bl": [r]
                }],
                "border-w": [{
                    border: [a]
                }],
                "border-w-x": [{
                    "border-x": [a]
                }],
                "border-w-y": [{
                    "border-y": [a]
                }],
                "border-w-s": [{
                    "border-s": [a]
                }],
                "border-w-e": [{
                    "border-e": [a]
                }],
                "border-w-t": [{
                    "border-t": [a]
                }],
                "border-w-r": [{
                    "border-r": [a]
                }],
                "border-w-b": [{
                    "border-b": [a]
                }],
                "border-w-l": [{
                    "border-l": [a]
                }],
                "border-opacity": [{
                    "border-opacity": [p]
                }],
                "border-style": [{
                    border: [...Dt(), "hidden"]
                }],
                "divide-x": [{
                    "divide-x": [a]
                }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{
                    "divide-y": [a]
                }],
                "divide-y-reverse": ["divide-y-reverse"],
                "divide-opacity": [{
                    "divide-opacity": [p]
                }],
                "divide-style": [{
                    divide: Dt()
                }],
                "border-color": [{
                    border: [s]
                }],
                "border-color-x": [{
                    "border-x": [s]
                }],
                "border-color-y": [{
                    "border-y": [s]
                }],
                "border-color-s": [{
                    "border-s": [s]
                }],
                "border-color-e": [{
                    "border-e": [s]
                }],
                "border-color-t": [{
                    "border-t": [s]
                }],
                "border-color-r": [{
                    "border-r": [s]
                }],
                "border-color-b": [{
                    "border-b": [s]
                }],
                "border-color-l": [{
                    "border-l": [s]
                }],
                "divide-color": [{
                    divide: [s]
                }],
                "outline-style": [{
                    outline: ["", ...Dt()]
                }],
                "outline-offset": [{
                    "outline-offset": [Ot, N]
                }],
                "outline-w": [{
                    outline: [Ot, Yt]
                }],
                "outline-color": [{
                    outline: [t]
                }],
                "ring-w": [{
                    ring: Je()
                }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{
                    ring: [t]
                }],
                "ring-opacity": [{
                    "ring-opacity": [p]
                }],
                "ring-offset-w": [{
                    "ring-offset": [Ot, Yt]
                }],
                "ring-offset-color": [{
                    "ring-offset": [t]
                }],
                shadow: [{
                    shadow: ["", "inner", "none", Zt, LR]
                }],
                "shadow-color": [{
                    shadow: [as]
                }],
                opacity: [{
                    opacity: [p]
                }],
                "mix-blend": [{
                    "mix-blend": [...re(), "plus-lighter", "plus-darker"]
                }],
                "bg-blend": [{
                    "bg-blend": re()
                }],
                filter: [{
                    filter: ["", "none"]
                }],
                blur: [{
                    blur: [n]
                }],
                brightness: [{
                    brightness: [i]
                }],
                contrast: [{
                    contrast: [l]
                }],
                "drop-shadow": [{
                    "drop-shadow": ["", "none", Zt, N]
                }],
                grayscale: [{
                    grayscale: [u]
                }],
                "hue-rotate": [{
                    "hue-rotate": [c]
                }],
                invert: [{
                    invert: [d]
                }],
                saturate: [{
                    saturate: [v]
                }],
                sepia: [{
                    sepia: [b]
                }],
                "backdrop-filter": [{
                    "backdrop-filter": ["", "none"]
                }],
                "backdrop-blur": [{
                    "backdrop-blur": [n]
                }],
                "backdrop-brightness": [{
                    "backdrop-brightness": [i]
                }],
                "backdrop-contrast": [{
                    "backdrop-contrast": [l]
                }],
                "backdrop-grayscale": [{
                    "backdrop-grayscale": [u]
                }],
                "backdrop-hue-rotate": [{
                    "backdrop-hue-rotate": [c]
                }],
                "backdrop-invert": [{
                    "backdrop-invert": [d]
                }],
                "backdrop-opacity": [{
                    "backdrop-opacity": [p]
                }],
                "backdrop-saturate": [{
                    "backdrop-saturate": [v]
                }],
                "backdrop-sepia": [{
                    "backdrop-sepia": [b]
                }],
                "border-collapse": [{
                    border: ["collapse", "separate"]
                }],
                "border-spacing": [{
                    "border-spacing": [o]
                }],
                "border-spacing-x": [{
                    "border-spacing-x": [o]
                }],
                "border-spacing-y": [{
                    "border-spacing-y": [o]
                }],
                "table-layout": [{
                    table: ["auto", "fixed"]
                }],
                caption: [{
                    caption: ["top", "bottom"]
                }],
                transition: [{
                    transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", N]
                }],
                duration: [{
                    duration: $()
                }],
                ease: [{
                    ease: ["linear", "in", "out", "in-out", N]
                }],
                delay: [{
                    delay: $()
                }],
                animate: [{
                    animate: ["none", "spin", "ping", "pulse", "bounce", N]
                }],
                transform: [{
                    transform: ["", "gpu", "none"]
                }],
                scale: [{
                    scale: [w]
                }],
                "scale-x": [{
                    "scale-x": [w]
                }],
                "scale-y": [{
                    "scale-y": [w]
                }],
                rotate: [{
                    rotate: [os, N]
                }],
                "translate-x": [{
                    "translate-x": [P]
                }],
                "translate-y": [{
                    "translate-y": [P]
                }],
                "skew-x": [{
                    "skew-x": [S]
                }],
                "skew-y": [{
                    "skew-y": [S]
                }],
                "transform-origin": [{
                    origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", N]
                }],
                accent: [{
                    accent: ["auto", t]
                }],
                appearance: [{
                    appearance: ["none", "auto"]
                }],
                cursor: [{
                    cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", N]
                }],
                "caret-color": [{
                    caret: [t]
                }],
                "pointer-events": [{
                    "pointer-events": ["none", "auto"]
                }],
                resize: [{
                    resize: ["none", "y", "x", ""]
                }],
                "scroll-behavior": [{
                    scroll: ["auto", "smooth"]
                }],
                "scroll-m": [{
                    "scroll-m": V()
                }],
                "scroll-mx": [{
                    "scroll-mx": V()
                }],
                "scroll-my": [{
                    "scroll-my": V()
                }],
                "scroll-ms": [{
                    "scroll-ms": V()
                }],
                "scroll-me": [{
                    "scroll-me": V()
                }],
                "scroll-mt": [{
                    "scroll-mt": V()
                }],
                "scroll-mr": [{
                    "scroll-mr": V()
                }],
                "scroll-mb": [{
                    "scroll-mb": V()
                }],
                "scroll-ml": [{
                    "scroll-ml": V()
                }],
                "scroll-p": [{
                    "scroll-p": V()
                }],
                "scroll-px": [{
                    "scroll-px": V()
                }],
                "scroll-py": [{
                    "scroll-py": V()
                }],
                "scroll-ps": [{
                    "scroll-ps": V()
                }],
                "scroll-pe": [{
                    "scroll-pe": V()
                }],
                "scroll-pt": [{
                    "scroll-pt": V()
                }],
                "scroll-pr": [{
                    "scroll-pr": V()
                }],
                "scroll-pb": [{
                    "scroll-pb": V()
                }],
                "scroll-pl": [{
                    "scroll-pl": V()
                }],
                "snap-align": [{
                    snap: ["start", "end", "center", "align-none"]
                }],
                "snap-stop": [{
                    snap: ["normal", "always"]
                }],
                "snap-type": [{
                    snap: ["none", "x", "y", "both"]
                }],
                "snap-strictness": [{
                    snap: ["mandatory", "proximity"]
                }],
                touch: [{
                    touch: ["auto", "none", "manipulation"]
                }],
                "touch-x": [{
                    "touch-pan": ["x", "left", "right"]
                }],
                "touch-y": [{
                    "touch-pan": ["y", "up", "down"]
                }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{
                    select: ["none", "text", "all", "auto"]
                }],
                "will-change": [{
                    "will-change": ["auto", "scroll", "contents", "transform", N]
                }],
                fill: [{
                    fill: [t, "none"]
                }],
                "stroke-w": [{
                    stroke: [Ot, Yt, al]
                }],
                stroke: [{
                    stroke: [t, "none"]
                }],
                sr: ["sr-only", "not-sr-only"],
                "forced-color-adjust": [{
                    "forced-color-adjust": ["auto", "none"]
                }]
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"]
            },
            conflictingClassGroupModifiers: {
                "font-size": ["leading"]
            }
        }
    },
    jR = bR(VR);

function Rn(...t) {
    return jR(lR(t))
}
const Un = k.forwardRef(({
    className: t,
    ...e
}, n) => C.jsx("div", {
    ref: n,
    className: Rn("rounded-lg border bg-card text-card-foreground shadow-sm", t),
    ...e
}));
Un.displayName = "Card";
const BR = k.forwardRef(({
    className: t,
    ...e
}, n) => C.jsx("div", {
    ref: n,
    className: Rn("flex flex-col space-y-1.5 p-6", t),
    ...e
}));
BR.displayName = "CardHeader";
const UR = k.forwardRef(({
    className: t,
    ...e
}, n) => C.jsx("h3", {
    ref: n,
    className: Rn("text-2xl font-semibold leading-none tracking-tight", t),
    ...e
}));
UR.displayName = "CardTitle";
const $R = k.forwardRef(({
    className: t,
    ...e
}, n) => C.jsx("p", {
    ref: n,
    className: Rn("text-sm text-muted-foreground", t),
    ...e
}));
$R.displayName = "CardDescription";
const WR = k.forwardRef(({
    className: t,
    ...e
}, n) => C.jsx("div", {
    ref: n,
    className: Rn("p-6 pt-0", t),
    ...e
}));
WR.displayName = "CardContent";
const HR = k.forwardRef(({
    className: t,
    ...e
}, n) => C.jsx("div", {
    ref: n,
    className: Rn("flex items-center p-6 pt-0", t),
    ...e
}));
HR.displayName = "CardFooter";

function qv(t) {
    var e, n, i = "";
    if (typeof t == "string" || typeof t == "number") i += t;
    else if (typeof t == "object")
        if (Array.isArray(t))
            for (e = 0; e < t.length; e++) t[e] && (n = qv(t[e])) && (i && (i += " "), i += n);
        else
            for (e in t) t[e] && (i && (i += " "), i += e);
    return i
}

function GR() {
    for (var t, e, n = 0, i = ""; n < arguments.length;)(t = arguments[n++]) && (e = qv(t)) && (i && (i += " "), i += e);
    return i
}
const lp = t => typeof t == "boolean" ? "".concat(t) : t === 0 ? "0" : t,
    up = GR,
    Kv = (t, e) => n => {
        var i;
        if ((e == null ? void 0 : e.variants) == null) return up(t, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
        const {
            variants: s,
            defaultVariants: r
        } = e, o = Object.keys(s).map(u => {
            const c = n == null ? void 0 : n[u],
                d = r == null ? void 0 : r[u];
            if (c === null) return null;
            const f = lp(c) || lp(d);
            return s[u][f]
        }), a = n && Object.entries(n).reduce((u, c) => {
            let [d, f] = c;
            return f === void 0 || (u[d] = f), u
        }, {}), l = e == null || (i = e.compoundVariants) === null || i === void 0 ? void 0 : i.reduce((u, c) => {
            let {
                class: d,
                className: f,
                ...h
            } = c;
            return Object.entries(h).every(y => {
                let [g, x] = y;
                return Array.isArray(x) ? x.includes({
                    ...r,
                    ...a
                } [g]) : {
                    ...r,
                    ...a
                } [g] === x
            }) ? [...u, d, f] : u
        }, []);
        return up(t, o, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
    },
    qR = Kv("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
        variants: {
            variant: {
                default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
                secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
                destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
                outline: "text-foreground"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    });

function KR({
    className: t,
    variant: e,
    ...n
}) {
    return C.jsx("div", {
        className: Rn(qR({
            variant: e
        }), t),
        ...n
    })
}
const QR = () => {
        const t = [{
            title: "Plugin for Autodesk Revit",
            description: "The name of the plugin is Terracotta. It was created to simplify the life of a civil engineer when creating drawings.",
            image: "./src/img/terracotta_picture.jpg",
            technologies: ["C#", "RevitAPI"],
            link: "https://rutube.ru/plst/487165/"
        }, {
            title: "Open Source Framework FEDOT",
            description: "As part of the NSS Lab team contributed to FEDOT, an open-source framework for automated modeling and machine learning (AutoML) problems.",
            image: "./src/img/fedot_picture.jpg",
            technologies: ["Python"],
            link: "https://github.com/aimclub/FEDOT"
        }];
        return C.jsx("section", {
            id: "projects",
            className: "py-20 px-4 bg-background/50",
            children: C.jsxs("div", {
                className: "container max-w-6xl",
                children: [C.jsx("h2", {
                    className: "text-3xl font-bold mb-8 gradient-text",
                    children: "Projects"
                }), C.jsx("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: t.map((e, n) => C.jsx(Pu.div, {
                        whileHover: {
                            scale: 1.02
                        },
                        transition: {
                            duration: .2
                        },
                        children: C.jsx("a", {
                            href: e.link,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "block h-full",
                            children: C.jsxs(Un, {
                                className: "overflow-hidden bg-card/50 backdrop-blur hover:bg-card/60 transition-colors h-full border border-border/50",
                                children: [C.jsx("img", {
                                    src: e.image,
                                    alt: e.title,
                                    className: "w-full h-36 object-cover"
                                }), C.jsxs("div", {
                                    className: "p-4",
                                    children: [C.jsx("h3", {
                                        className: "text-lg font-semibold mb-2",
                                        children: e.title
                                    }), C.jsx("p", {
                                        className: "text-sm text-muted-foreground mb-3",
                                        children: e.description
                                    }), C.jsx("div", {
                                        className: "flex flex-wrap gap-1",
                                        children: e.technologies.map((i, s) => C.jsx(KR, {
                                            variant: "secondary",
                                            className: "text-xs",
                                            children: i
                                        }, s))
                                    })]
                                })]
                            })
                        })
                    }, n))
                })]
            })
        })
    },
    XR = () => C.jsx("section", {
        id: "contact",
        className: "py-20 px-4",
        children: C.jsxs("div", {
            className: "container max-w-4xl text-center",
            children: [C.jsx("h2", {
                className: "text-3xl font-bold mb-8 gradient-text",
                children: "Get in Touch"
            }), C.jsx(Un, {
                className: "p-8 bg-secondary/50 backdrop-blur",
                children: C.jsxs("div", {
                    className: "grid gap-6",
                    children: [C.jsxs("div", {
                        className: "flex items-center justify-center gap-3",
                        children: [C.jsx(sR, {
                            className: "w-6 h-6 text-primary"
                        }), C.jsx("span", {
                            children: "dima.rize@yandex.ru"
                        })]
                    }), C.jsxs("div", {
                        className: "flex items-center justify-center gap-3",
                        children: [C.jsx(rR, {
                            className: "w-6 h-6 text-primary"
                        }), C.jsx("a", {
                            href: "https://t.me/dimaglhf",
                            target: "_blank",
                            className: "text-primary hover:underline",
                            children: "@dimaglhf"
                        })]
                    }), C.jsxs("div", {
                        className: "flex items-center justify-center gap-3",
                        children: [C.jsx(githb, {
                            className: "w-6 h-6 text-primary"
                        }), C.jsx("a", {
                            href: "https://github.com/dmitryglhf",
                            target: "_blank",
                            className: "text-primary hover:underline",
                            children: "GitHub"
                        })]
                    })]
                })
            })]
        })
    });

function YR(t, e) {
    typeof t == "function" ? t(e) : t != null && (t.current = e)
}

function ZR(...t) {
    return e => t.forEach(n => YR(n, e))
}
var Qv = k.forwardRef((t, e) => {
    const {
        children: n,
        ...i
    } = t, s = k.Children.toArray(n), r = s.find(e2);
    if (r) {
        const o = r.props.children,
            a = s.map(l => l === r ? k.Children.count(o) > 1 ? k.Children.only(null) : k.isValidElement(o) ? o.props.children : null : l);
        return C.jsx(_u, {
            ...i,
            ref: e,
            children: k.isValidElement(o) ? k.cloneElement(o, void 0, a) : null
        })
    }
    return C.jsx(_u, {
        ...i,
        ref: e,
        children: n
    })
});
Qv.displayName = "Slot";
var _u = k.forwardRef((t, e) => {
    const {
        children: n,
        ...i
    } = t;
    if (k.isValidElement(n)) {
        const s = n2(n);
        return k.cloneElement(n, {
            ...t2(i, n.props),
            ref: e ? ZR(e, s) : s
        })
    }
    return k.Children.count(n) > 1 ? k.Children.only(null) : null
});
_u.displayName = "SlotClone";
var JR = ({
    children: t
}) => C.jsx(C.Fragment, {
    children: t
});

function e2(t) {
    return k.isValidElement(t) && t.type === JR
}

function t2(t, e) {
    const n = {
        ...e
    };
    for (const i in e) {
        const s = t[i],
            r = e[i];
        /^on[A-Z]/.test(i) ? s && r ? n[i] = (...a) => {
            r(...a), s(...a)
        } : s && (n[i] = s) : i === "style" ? n[i] = {
            ...s,
            ...r
        } : i === "className" && (n[i] = [s, r].filter(Boolean).join(" "))
    }
    return {
        ...t,
        ...n
    }
}

function n2(t) {
    var i, s;
    let e = (i = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : i.get,
        n = e && "isReactWarning" in e && e.isReactWarning;
    return n ? t.ref : (e = (s = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : s.get, n = e && "isReactWarning" in e && e.isReactWarning, n ? t.props.ref : t.props.ref || t.ref)
}
const i2 = Kv("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline"
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }),
    Xv = k.forwardRef(({
        className: t,
        variant: e,
        size: n,
        asChild: i = !1,
        ...s
    }, r) => {
        const o = i ? Qv : "button";
        return C.jsx(o, {
            className: Rn(i2({
                variant: e,
                size: n,
                className: t
            })),
            ref: r,
            ...s
        })
    });
Xv.displayName = "Button";
const s2 = () => {
    const t = k.useCallback(async s => {
            await _C(s)
        }, []),
        e = k.useCallback(async s => {}, []),
        n = s => {
            const r = document.getElementById(s);
            r == null || r.scrollIntoView({
                behavior: "smooth"
            })
        },
        i = () => {
            console.log("Downloading CV...")
        };
    return C.jsxs("div", {
        className: "min-h-screen bg-background text-foreground",
        children: [C.jsx("nav", {
            className: "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/40",
            children: C.jsx("div", {
                className: "container mx-auto px-4",
                children: C.jsxs("div", {
                    className: "flex items-center justify-center h-16 space-x-8",
                    children: [C.jsx("button", {
                        onClick: () => n("hero"),
                        className: "text-sm hover:text-primary transition-colors",
                        children: "Home"
                    }), C.jsx("button", {
                        onClick: () => n("about"),
                        className: "text-sm hover:text-primary transition-colors",
                        children: "About"
                    }), C.jsx("button", {
                        onClick: () => n("skills"),
                        className: "text-sm hover:text-primary transition-colors",
                        children: "Skills"
                    }), C.jsx("button", {
                        onClick: () => n("projects"),
                        className: "text-sm hover:text-primary transition-colors",
                        children: "Projects"
                    }), C.jsx("button", {
                        onClick: () => n("contact"),
                        className: "text-sm hover:text-primary transition-colors",
                        children: "Contact"
                    })]
                })
            })
        }), C.jsx(ry, {
            className: "absolute inset-0 -z-10",
            id: "tsparticles",
            init: t,
            loaded: e,
            options: {
                background: {
                    color: {
                        value: "transparent"
                    }
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onHover: {
                            enable: !0,
                            mode: "repulse"
                        }
                    },
                    modes: {
                        repulse: {
                            distance: 100,
                            duration: .4
                        }
                    }
                },
                particles: {
                    color: {
                        value: "#333333"
                    },
                    links: {
                        color: "#333333",
                        distance: 150,
                        enable: !0,
                        opacity: .5,
                        width: 1
                    },
                    move: {
                        enable: !0,
                        outModes: {
                            default: "bounce"
                        },
                        random: !1,
                        speed: 1,
                        straight: !1
                    },
                    number: {
                        density: {
                            enable: !0,
                            area: 800
                        },
                        value: 80
                    },
                    opacity: {
                        value: .5
                    },
                    shape: {
                        type: "circle"
                    },
                    size: {
                        value: {
                            min: 1,
                            max: 5
                        }
                    }
                },
                detectRetina: !0
            }
        }), C.jsx(aR, {}), C.jsx("section", {
            id: "about",
            className: "py-20 px-4",
            children: C.jsxs("div", {
                className: "container max-w-4xl",
                children: [C.jsx("h2", {
                    className: "text-3xl font-bold mb-8 gradient-text",
                    children: "About Me"
                }), C.jsx(Un, {
                    className: "p-6 bg-secondary/50 backdrop-blur",
                    children: C.jsxs("div", {
                        className: "grid md:grid-cols-3 gap-6",
                        children: [C.jsxs("div", {
                            className: "md:col-span-1",
                            children: [C.jsx("div", {
                                className: "aspect-square rounded-lg bg-background/20 mb-4 overflow-hidden",
                                children: C.jsx("img", {
                                    src: "/src/img/me.jpeg",
                                    alt: "Profile",
                                    className: "w-full h-full object-cover"
                                })
                            }), C.jsxs(Xv, {
                                onClick: () => window.open("./src/pdfs/cv.pdf", "_blank"),
                                className: "w-full bg-primary/80 hover:bg-primary",
                                children: [C.jsx(iR, {
                                    className: "mr-2 h-4 w-4"
                                }), "Download CV"]
                            })]
                        }), C.jsxs("div", {
                            className: "md:col-span-2",
                            children: [C.jsx("h3", {
                                className: "text-xl font-semibold mb-4",
                                children: "Background"
                            }), C.jsx("p", {
                                className: "text-muted-foreground mb-4",
                                children: "Junior Machine Learning Engineer."
                            }), C.jsx("p", {
                                className: "text-muted-foreground",
                                children: "With 2 years of experience in the field as ITMO University master student, I've worked on projects ranging from research to computer vision applications. My expertise includes developing python frameworks, optimizing model performance and implementing MLOps practices."
                            })]
                        })]
                    })
                })]
            })
        }), C.jsx("section", {
            id: "skills",
            className: "py-20 px-4 bg-secondary/20",
            children: C.jsxs("div", {
                className: "container max-w-4xl",
                children: [C.jsx("h2", {
                    className: "text-3xl font-bold mb-8 gradient-text",
                    children: "Skills"
                }), C.jsxs("div", {
                    className: "grid gap-6 md:grid-cols-3",
                    children: [C.jsxs(Un, {
                        className: "p-6 bg-secondary/50 backdrop-blur",
                        children: [C.jsx(tR, {
                            className: "w-12 h-12 mb-4 text-primary"
                        }), C.jsx("h3", {
                            className: "text-xl font-semibold mb-2",
                            children: "Languages"
                        }), C.jsx("p", {
                            className: "text-muted-foreground",
                            children: "Python, C#"
                        })]
                    }), C.jsxs(Un, {
                        className: "p-6 bg-secondary/50 backdrop-blur",
                        children: [C.jsx(eR, {
                            className: "w-12 h-12 mb-4 text-primary"
                        }), C.jsx("h3", {
                            className: "text-xl font-semibold mb-2",
                            children: "ML/DL"
                        }), C.jsx("p", {
                            className: "text-muted-foreground",
                            children: "NumPy, Pandas, PyTorch, Scikit-learn"
                        })]
                    }), C.jsxs(Un, {
                        className: "p-6 bg-secondary/50 backdrop-blur",
                        children: [C.jsx(nR, {
                            className: "w-12 h-12 mb-4 text-primary"
                        }), C.jsx("h3", {
                            className: "text-xl font-semibold mb-2",
                            children: "Tools"
                        }), C.jsx("p", {
                            className: "text-muted-foreground",
                            children: "Git"
                        })]
                    })]
                })]
            })
        }), C.jsx(QR, {}), C.jsx(XR, {})]
    })
};

function r2() {
    return C.jsx(Ex, {
        defaultTheme: "dark",
        attribute: "class",
        children: C.jsx(y1, {
            children: C.jsx(p1, {
                children: C.jsx(Og, {
                    path: "/",
                    element: C.jsx(s2, {})
                })
            })
        })
    })
}
kg(document.getElementById("root")).render(C.jsx(r2, {}));