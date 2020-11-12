"use strict";
! function() {
    function bt(e) {
        return (bt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function d(t, e) {
        var n, r = Object.keys(t);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        })), r.push.apply(r, n)), r
    }

    function g(e) {
        if (!(e = (Array.isArray(e) ? r(e) : void 0) || ("undefined" != typeof Symbol && Symbol.iterator in Object(e) ? Array.from(e) : void 0) || c(e))) throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        return e
    }

    function c(e, t) {
        if (e) {
            if ("string" == typeof e) return r(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t)
        }
    }

    function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function a(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (n = c(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var r = 0;
                return {
                    s: t = function() {},
                    n: function() {
                        return r >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[r++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: t
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, a = !0,
            i = !1;
        return {
            s: function() {
                n = e[Symbol.iterator]()
            },
            n: function() {
                var e = n.next();
                return a = e.done, e
            },
            e: function(e) {
                i = !0, o = e
            },
            f: function() {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (i) throw o
                }
            }
        }
    }

    function e(e, t, n) {
        return e(n = {
            path: t,
            exports: {},
            require: function(e, t) {
                throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
            }
        }, n.exports), n.exports
    }

    function t(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }

    function n(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }

    function o(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }

    function i(e) {
        this.size = (this.__data__ = new Le(e)).size
    }

    function m(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.__data__ = new qe; ++t < n;) this.add(e[t])
    }

    function s(r, o) {
        if ("function" != typeof r || null != o && "function" != typeof o) throw new TypeError("Expected a function");

        function a() {
            var e = arguments,
                t = o ? o.apply(this, e) : e[0],
                n = a.cache;
            return n.has(t) ? n.get(t) : (e = r.apply(this, e), a.cache = n.set(t, e) || n, e)
        }
        return a.cache = new(s.Cache || qe), a
    }

    function u(e) {
        if ("string" == typeof e) return e;
        if (ie(e)) return Qt(e, u) + "";
        if (Gt(e)) return tn ? tn.call(e) : "";
        var t = e + "";
        return "0" == t && 1 / e == -Zt ? "-0" : t
    }

    function wt(e) {
        var t;
        return fn(e) || (e = e.text || "", (t = mn.getElementsByTagName("title")) && void 0 !== t[0] && (e = t[0].text)), e
    }

    function kt(e) {
        var t = /^(?:(?:https?|ftp):)\/*(?:[^@]+@)?([^:/#]+)/.exec(e);
        return t ? t[1] : e
    }

    function At(e) {
        var t = e.length;
        return "." === e.charAt(--t) && (e = e.slice(0, t)), "*." === e.slice(0, 2) && (e = e.slice(1)), e
    }

    function _t(e) {
        var t = "",
            n = St("referrer", pn.location.href) || St("referer", pn.location.href);
        if (n) return n;
        if (e) return e;
        try {
            t = pn.top.document.referrer
        } catch (e) {
            if (pn.parent) try {
                t = pn.parent.document.referrer
            } catch (e) {
                t = ""
            }
        }
        return "" === t && (t = mn.referrer), t
    }

    function jt(e, t, n, r) {
        return e.addEventListener ? (e.addEventListener(t, n, r), !0) : e.attachEvent ? e.attachEvent("on" + t, n) : void(e["on" + t] = n)
    }

    function St(e, t) {
        return (e = new RegExp("^[^#]*[?&]" + e + "=([^&#]*)").exec(t)) ? decodeURIComponent(e[1].replace(/\+/g, " ")) : null
    }

    function h(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return ln(dn(e, function(e) {
            if ("function" != typeof e) return e;
            try {
                return e.apply(null, t)
            } catch (e) {}
        }))
    }

    function Ot(e) {
        "undefined" != typeof console && console.warn("Snowplow: " + e)
    }

    function v(e) {
        return e.className.match(/\S+/g) || []
    }

    function y(e, t) {
        if (Array.isArray(e) || !Te(e)) return function() {
            return !0
        };
        if (e.hasOwnProperty("filter")) return e.filter;
        var n = e.hasOwnProperty("whitelist");
        e = e.whitelist || e.blacklist, Array.isArray(e) || (e = [e]);
        for (var r = {}, o = 0; o < e.length; o++) r[e[o]] = !0;
        return t ? function(e) {
            e: {
                var t;
                for (e = v(e), t = 0; t < e.length; t++)
                    if (r[e[t]]) {
                        e = !0;
                        break e
                    } e = !1
            }
            return e === n
        } : function(e) {
            return e.name in r === n
        }
    }

    function Tt(e, t, n) {
        var r = 2 < arguments.length && void 0 !== n ? n : 63072e3;
        try {
            var o = Date.now() + 1e3 * r;
            return hn.setItem("".concat(e, ".expires"), o), hn.setItem(e, t), !0
        } catch (e) {
            return !1
        }
    }

    function Ct(e) {
        try {
            return hn.removeItem(e), hn.removeItem(e + ".expires"), 1
        } catch (e) {
            return
        }
    }

    function Pt(e, t) {
        for (var n = 0; n < t.length; n++)
            if (t[n] === e) return !0;
        return !1
    }

    function xt(e, t, n, r, o, a, i) {
        return 1 < arguments.length ? mn.cookie = e + "=" + encodeURIComponent(t) + (n ? "; Expires=" + new Date(+new Date + 1e3 * n).toUTCString() : "") + (r ? "; Path=" + r : "") + (o ? "; Domain=" + o : "") + (a ? "; SameSite=" + a : "") + (i ? "; Secure" : "") : decodeURIComponent((("; " + mn.cookie).split("; " + e + "=")[1] || "").split(";")[0])
    }

    function It(e) {
        return e = parseInt(e), isNaN(e) ? void 0 : e
    }

    function Dt(e) {
        return e = parseFloat(e), isNaN(e) ? void 0 : e
    }

    function Et(e) {
        return !(!e || "function" != typeof e)
    }

    function l(r, o, a, e, i) {
        function c(e, t, n) {
            n = n || {}, s.hasOwnProperty(e) ? Ot("Tracker namespace " + e + " already exists.") : (s[e] = new r(i, e, o, a, n), s[e].setCollectorUrl(t))
        }

        function t() {
            for (var e = 0; e < arguments.length; e += 1) {
                var t = arguments[e],
                    n = Array.prototype.shift.call(t);
                if (Et(n)) try {
                    n.apply(s, t)
                } catch (e) {
                    Ot("Custom callback error - ".concat(e))
                } finally {
                    continue
                }
                var r = n.split(":");
                if (n = (r = [n = r[0], r = 1 < r.length ? r[1].split(";") : []])[0], r = r[1], "newTracker" === n) c(t[0], t[1], t[2]);
                else if ("setCollectorCf" !== n && "setCollectorUrl" !== n || r && 0 !== r.length) {
                    var o = [];
                    if (r && 0 !== r.length)
                        for (var a = 0; a < r.length; a++) s.hasOwnProperty(r[a]) ? o.push(s[r[a]]) : Ot('Warning: Tracker namespace "' + r[a] + '" not configured');
                    else o = dn(s);
                    for (0 === o.length && Ot("Warning: No tracker configured"), r = 0; r < o.length; r++) o[r][n].apply(o[r], t)
                } else r = t[0], t = t[1], Ot(n + " is deprecated. Set the collector when a new tracker instance using newTracker."), c(t = void 0 === t ? "sp" : t), s[t][n](r)
            }
        }
        for (var s = {}, n = 0; n < e.length; n++) t(e[n]);
        return {
            push: t
        }
    }

    function Lt(e, t, n) {
        if ("translate.googleusercontent.com" === e) "" === n && (n = t), e = kt(t = St("u", (e = /^(?:https?|ftp)(?::\/*(?:[^?]+))([?][^#]+)/.exec(t))[1]));
        else {
            if (!(r = "cc.bingj.com" === e || "webcache.googleusercontent.com" === e)) e: {
                if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(e)) try {
                    var r = "You have reached the cached page for" === document.body.children[0].children[0].children[0].children[0].children[0].children[0].innerHTML.slice(0, 36);
                    break e
                } catch (e) {
                    r = !1;
                    break e
                }
                r = void 0
            }
            r && (e = kt(t = document.links[0].href))
        }
        return [e, t, n]
    }

    function Nt(c, r, s) {
        function o(e, t) {
            for (var n, r, o, a, i; null !== (n = e.parentNode) && void 0 !== n && "A" !== (r = e.tagName.toUpperCase()) && "AREA" !== r;) e = n;
            void 0 !== e.href && (r = (n = e.hostname || kt(e.href)).toLowerCase(), i = e.href.replace(n, r), /^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto):/i.test(i) || (n = e.id, r = v(e), o = e.target, a = l ? e.innerHTML : null, i = unescape(i), c.trackLinkClick(i, n, r, o, a, s(h(t, e)))))
        }

        function a(r) {
            return function(e) {
                var t = (e = e || window.event).which || e.button,
                    n = e.target || e.srcElement;
                "click" === e.type ? n && o(n, r) : "mousedown" === e.type ? 1 !== t && 2 !== t || !n ? d = p = null : (d = t, p = n) : "mouseup" === e.type && (t === d && n === p && o(n, r), d = p = null)
            }
        }
        var i, u, l, f, d, p;
        return {
            configureLinkClickTracking: function(e, t, n, r) {
                l = n, f = r, u = t, i = y(e, !0)
            },
            addClickListeners: function() {
                for (var e, t = document.links, n = 0; n < t.length; n++) {
                    i(t[n]) && !t[n][r] && (e = t[n], u ? (jt(e, "mouseup", a(f), !1), jt(e, "mousedown", a(f), !1)) : jt(e, "click", a(f), !1), t[n][r] = !0)
                }
            }
        }
    }

    function zt(a, e, i) {
        function c(t) {
            return t[En(["name", "id", "type", "nodeName"], function(e) {
                return t[e] && "string" == typeof t[e]
            })]
        }

        function r(r, o) {
            return function(e) {
                var t = (e = e.target).nodeName && "INPUT" === e.nodeName.toUpperCase() ? e.type : null,
                    n = "checkbox" !== e.type || e.checked ? d(e.value, e) : null;
                ("change_form" === r || "checkbox" !== t && "radio" !== t) && a.trackFormFocusOrChange(r, function(e) {
                    for (; e && e.nodeName && "HTML" !== e.nodeName.toUpperCase() && "FORM" !== e.nodeName.toUpperCase();) e = e.parentNode;
                    if (e && e.nodeName && "FORM" === e.nodeName.toUpperCase()) return c(e)
                }(e), c(e), e.nodeName, t, v(e), n, i(h(o, e, t, n)))
            }
        }

        function o(o) {
            return function(e) {
                e = e.target;
                var t, n, r = (t = e, n = [], Ft(s, function(e) {
                    e = t.getElementsByTagName(e).filter(function(e) {
                        return e.hasOwnProperty(u)
                    }), Ft(e, function(e) {
                        var t;
                        "submit" !== e.type && (t = {
                            name: c(e),
                            value: e.value,
                            nodeName: e.nodeName
                        }, e.type && "INPUT" === e.nodeName.toUpperCase() && (t.type = e.type), "checkbox" !== e.type && "radio" !== e.type || e.checked || (t.value = null), n.push(t))
                    })
                }), n);
                Ft(r, function(e) {
                    e.value = d(e.value, e)
                }), a.trackFormSubmission(c(e), v(e), r, i(h(o, e, r)))
            }
        }
        var s = ["textarea", "input", "select"],
            u = e + "form",
            l = function() {
                return !0
            },
            f = function() {
                return !0
            },
            d = function(e) {
                return e
            };
        return {
            configureFormTracking: function(e) {
                var t;
                e && (l = y(e.forms, !0), f = y(e.fields, !1), t = e.fields, d = Te(t) ? t.hasOwnProperty("transform") ? t.transform : function(e) {
                    return e
                } : function(e) {
                    return e
                })
            },
            addFormListeners: function(n) {
                Ft(document.getElementsByTagName("form"), function(t) {
                    l(t) && !t[u] && (Ft(s, function(e) {
                        Ft(t.getElementsByTagName(e), function(e) {
                            f(e) && !e[u] && "password" !== e.type.toLowerCase() && (jt(e, "focus", r("focus_form", n), !1), jt(e, "change", r("change_form", n), !1), e[u] = !0)
                        })
                    }), jt(t, "submit", o(n)), t[u] = !0)
                })
            }
        }
    }

    function Mt(i) {
        function a(e, t, n, r, o, a) {
            i.trackSelfDescribingEvent({
                schema: "iglu:com.snowplowanalytics.snowplow/application_error/jsonschema/1-0-1",
                data: {
                    programmingLanguage: "JAVASCRIPT",
                    message: e || "JS Exception. Browser doesn't support ErrorEvent API",
                    stackTrace: o && o.stack ? o.stack : null,
                    lineNumber: n,
                    lineColumn: r,
                    fileName: t
                }
            }, a)
        }
        return {
            trackError: a,
            enableErrorTracking: function(n, r, o) {
                jt(Ln, "error", function(e) {
                    var t;
                    (Et(n) && n(e) || null == n) && (t = Et(r) ? o.concat(r(e)) : o, a(e.message, e.filename, e.lineno, e.colno, e.error, t))
                }, !0)
            }
        }
    }

    function Bt(e, t, n, s, r, o, a, u, l, f, d) {
        function i(e) {
            return {
                evt: e = zn(e, function(e) {
                    return e.toString()
                }),
                bytes: function(e) {
                    for (var t = 0, n = 0; n < e.length; n++) {
                        var r = e.charCodeAt(n);
                        r <= 127 ? t += 1 : r <= 2047 ? t += 2 : 55296 <= r && r <= 57343 ? (t += 4, n++) : t = r < 65535 ? t + 3 : t + 4
                    }
                    return t
                }(JSON.stringify(e))
            }
        }

        function p() {
            for (; O.length && "string" != typeof O[0] && "object" !== bt(O[0]);) O.shift();
            if (O.length < 1) b = !1;
            else {
                if (!fn(v)) throw "No Snowplow collector configured, cannot track";
                b = !0;
                var e = O[0];
                if (A) {
                    var t, n = function(e) {
                            for (var t = 0; t < e; t++) O.shift();
                            s && Tt(j, JSON.stringify(O.slice(0, f))), p()
                        },
                        r = m(v),
                        o = setTimeout(function() {
                            r.abort(), b = !1
                        }, d),
                        a = function(e) {
                            for (var t = 0, n = 0; t < e.length && (n += e[t].bytes, !(u <= n));) t += 1;
                            return t
                        }(O);
                    if (r.onreadystatechange = function() {
                            if (4 === r.readyState && 200 <= r.status && r.status < 400) {
                                if (clearTimeout(o), k && !y) try {
                                    gn.setItem(S, !0)
                                } catch (e) {}
                                n(a)
                            } else 4 === r.readyState && 400 <= r.status && (clearTimeout(o), b = !1)
                        }, 0 < (e = dn(O.slice(0, a), function(e) {
                            return e.evt
                        })).length) {
                        if (!(t = y) && (t = k)) try {
                            t = gn.getItem(S)
                        } catch (e) {
                            t = void 0
                        }
                        if (y = t) {
                            t = new Blob([h(g(e))], {
                                type: "application/json"
                            });
                            try {
                                var i = navigator.sendBeacon(v, t)
                            } catch (e) {
                                i = !1
                            }
                        }!0 === i && n(a), k && i || r.send(h(g(e)))
                    }
                } else {
                    i = new Image(1, 1);
                    var c = !0;
                    i.onload = function() {
                        c && (c = !1, O.shift(), s && Tt(j, JSON.stringify(O.slice(0, f))), p())
                    }, i.onerror = function() {
                        c && (b = c = !1)
                    }, i.src = l ? v + e.replace("?", "?stm=" + (new Date).getTime() + "&") : v + e, setTimeout(function() {
                        c && b && (c = !1, p())
                    }, d)
                }
            }
        }

        function m(e) {
            var t = new XMLHttpRequest;
            return t.open("POST", e, !0), t.withCredentials = !0, t.setRequestHeader("Content-Type", "application/json; charset=UTF-8"), t
        }

        function h(e) {
            return JSON.stringify({
                schema: "iglu:com.snowplowanalytics.snowplow/payload_data/jsonschema/1-0-4",
                data: e
            })
        }

        function g(e) {
            for (var t = (new Date).getTime().toString(), n = 0; n < e.length; n++) e[n].stm = t;
            return e
        }
        var v, y, c = window.localStorage,
            b = !1,
            w = null === (r = r.toLowerCase ? r.toLowerCase() : r) || !0 === r || "beacon" === r || "true" === r,
            k = !!(w && navigator && navigator.sendBeacon) && w,
            A = ("post" === r || k) && "get" !== r,
            _ = (A = A && !!(window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest)) ? o : "/i";
        a = function() {
            try {
                var t = !!jn.localStorage
            } catch (e) {
                t = !0
            }
            if (!t) return !1;
            try {
                return jn.localStorage.setItem("modernizr", "modernizr"), jn.localStorage.removeItem("modernizr"), !0
            } catch (e) {
                return !1
            }
        }() && s && A && a || 1;
        var j = "snowplowOutQueue_".concat(e, "_").concat(t, "_").concat(A ? "post2" : "get"),
            S = "spBeaconPreflight_".concat(e, "_").concat(t);
        if (s) try {
            var O = JSON.parse(c.getItem(j))
        } catch (e) {}
        return Array.isArray(O) || (O = []), n.outQueues.push(O), A && 1 < a && n.bufferFlushers.push(function() {
            b || p()
        }), {
            enqueueRequest: function(e, t) {
                if (v = t + _, A) {
                    if ((e = i(e)).bytes >= u) return Ot("Event of size " + e.bytes + " is too long - the maximum size is " + u), void m(v).send(h(g([e.evt])));
                    O.push(e)
                } else O.push(function(e) {
                    var t, n = "?",
                        r = {
                            co: !0,
                            cx: !0
                        },
                        o = !0;
                    for (t in e) e.hasOwnProperty(t) && !r.hasOwnProperty(t) && (o ? o = !1 : n += "&", n += encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
                    for (var a in r) e.hasOwnProperty(a) && r.hasOwnProperty(a) && (n += "&" + a + "=" + encodeURIComponent(e[a]));
                    return n
                }(e));
                e = !1, s && (e = Tt(j, JSON.stringify(O.slice(0, f)))), b || e && !(O.length >= a) || p()
            },
            executeQueue: p
        }
    }

    function p(e) {
        if (!e) return e;
        switch (4 - e.length % 4) {
            case 2:
                e += "==";
                break;
            case 3:
                e += "="
        }
        return function(e) {
            var t = 0,
                n = 0,
                r = "",
                o = [];
            if (!e) return e;
            e += "";
            do {
                var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(e.charAt(t++)),
                    i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(e.charAt(t++));
                r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(e.charAt(t++));
                var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(e.charAt(t++)),
                    s = a << 18 | i << 12 | r << 6 | c;
                a = s >> 16 & 255, i = s >> 8 & 255, s &= 255, o[n++] = 64 === r ? String.fromCharCode(a) : 64 === c ? String.fromCharCode(a, i) : String.fromCharCode(a, i, s)
            } while (t < e.length);
            return function(e) {
                return decodeURIComponent(e.split("").map(function(e) {
                    return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
                }).join(""))
            }((r = o.join("")).replace(/\0+$/, ""))
        }(e = e.replace(/-/g, "+").replace(/_/g, "/"))
    }

    function b(e) {
        if (f(e))
            for (var t in e)
                if (Object.prototype.hasOwnProperty.call(e, t)) return 1
    }

    function f(e) {
        return null != e && (e.constructor === {}.constructor || e.constructor === [].constructor)
    }

    function w(u) {
        function l(e, t) {
            null != t && "" !== t && (n[e] = t)
        }
        var n = {};
        return {
            add: l,
            addDict: function(e) {
                for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && l(t, e[t])
            },
            addJson: function(e, t, n) {
                if (n && b(n))
                    if (n = JSON.stringify(n), u) {
                        if (n) {
                            t = n;
                            var r = n = 0,
                                o = [];
                            if (t) {
                                t = unescape(encodeURIComponent(t));
                                do {
                                    var a = (i = t.charCodeAt(n++)) << 16 | (c = t.charCodeAt(n++)) << 8 | (s = t.charCodeAt(n++)),
                                        i = a >> 18 & 63,
                                        c = a >> 12 & 63,
                                        s = a >> 6 & 63;
                                    a &= 63, o[r++] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(i) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(s) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a)
                                } while (n < t.length);
                                n = o.join(""), t = ((t = t.length % 3) ? n.slice(0, t - 3) : n) + "===".slice(t || 3)
                            }
                            t = t.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
                        } else t = n;
                        l(e, t)
                    } else l(t, n)
            },
            build: function() {
                return n
            }
        }
    }

    function k() {
        var c = [],
            f = [];
        return {
            getGlobalPrimitives: function() {
                return c
            },
            getConditionalProviders: function() {
                return f
            },
            addGlobalContexts: function(t) {
                var e, n = [],
                    r = [];
                t = a(t);
                try {
                    for (t.s(); !(e = t.n()).done;) {
                        var o = e.value;
                        I(o) ? n.push(o) : C(o) && r.push(o)
                    }
                } catch (e) {
                    t.e(e)
                } finally {
                    t.f()
                }
                c = c.concat(r), f = f.concat(n)
            },
            clearGlobalContexts: function() {
                f = [], c = []
            },
            removeGlobalContexts: function(t) {
                var e;
                t = a(t);
                try {
                    var n = function() {
                        var t = e.value;
                        I(t) ? f = f.filter(function(e) {
                            return !Ht(e, t)
                        }) : C(t) && (c = c.filter(function(e) {
                            return !Ht(e, t)
                        }))
                    };
                    for (t.s(); !(e = t.n()).done;) n()
                } catch (e) {
                    t.e(e)
                } finally {
                    t.f()
                }
            },
            getApplicableContexts: function(t) {
                var e, s, u, l, n, r = !!(b(t = t.build()) && "e" in t) && "string" == typeof t.e;
                if (r) {
                    t = function(n) {
                        for (var e = 1; e < arguments.length; e++) {
                            var r = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? d(Object(r), !0).forEach(function(e) {
                                var t = r[e];
                                e in n ? Object.defineProperty(n, e, {
                                    value: t,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : n[e] = t
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach(function(e) {
                                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
                            })
                        }
                        return n
                    }({}, t);
                    try {
                        null != t && sn(t, "ue_px", er) && (t.ue_px = JSON.parse(p(an(t, ["ue_px"]))));
                        var o = t
                    } catch (e) {
                        o = t
                    }
                    r = "string" == typeof an(t = o, "ue_px.data.schema") ? an(t, "ue_px.data.schema") : "string" == typeof an(t, "ue_pr.data.schema") ? an(t, "ue_pr.data.schema") : "string" == typeof an(t, "schema") ? an(t, "schema") : "";
                    var a = an(t, "e", ""),
                        o = [],
                        i = N(c, t, a, r);
                    return o.push.apply(o, g(i)), s = t, u = a, l = r, e = L(e = f), e = dn(e, function(e) {
                        e: {
                            if (P(e)) {
                                var t = e[0],
                                    n = !1;
                                try {
                                    n = t({
                                        event: s,
                                        eventType: u,
                                        eventSchema: l
                                    })
                                } catch (e) {
                                    n = !1
                                }
                                if (!0 === n) {
                                    e = N(e[1], s, u, l);
                                    break e
                                }
                            } else if (x(e) && (r = e[0], o = l, i = a = 0, c = an(r, "accept"), Array.isArray(c) ? r.accept.some(function(e) {
                                    return D(e, o)
                                }) && i++ : "string" == typeof c && D(c, o) && i++, c = an(r, "reject"), Array.isArray(c) ? r.reject.some(function(e) {
                                    return D(e, o)
                                }) && a++ : "string" == typeof c && D(c, o) && a++, 0 < i && 0 === a)) {
                                e = N(e[1], s, u, l);
                                break e
                            }
                            e = []
                        }
                        var r, o, a, i, c;
                        if (e && 0 !== e.length) return e
                    }), t = (n = []).concat.apply(n, g(nr(e))), o.push.apply(o, g(t)), o
                }
                return []
            }
        }
    }

    function A(e) {
        return !!((e = e.split(".")) && 1 < e.length) && function(t) {
            if ("*" === t[0] || "*" === t[1]) return !1;
            if (0 < t.slice(2).length) {
                var e, n = !1;
                t = a(t.slice(2));
                try {
                    for (t.s(); !(e = t.n()).done;)
                        if ("*" === e.value) n = !0;
                        else if (n) return !1
                } catch (e) {
                    t.e(e)
                } finally {
                    t.f()
                }
                return !0
            }
            return 2 == t.length
        }(e)
    }

    function _(e) {
        if (null !== (e = /^iglu:((?:(?:[a-zA-Z0-9-_]+|\*).)+(?:[a-zA-Z0-9-_]+|\*))\/([a-zA-Z0-9-_.]+|\*)\/jsonschema\/([1-9][0-9]*|\*)-(0|[1-9][0-9]*|\*)-(0|[1-9][0-9]*|\*)$/.exec(e)) && A(e[1])) return e.slice(1, 6)
    }

    function j(e) {
        if (e = _(e)) {
            var t = e[0];
            return 5 === e.length && A(t)
        }
        return !1
    }

    function S(e) {
        return t = e, Array.isArray(t) && t.every(function(e) {
            return "string" == typeof e
        }) ? e.every(j) : "string" == typeof e && j(e);
        var t
    }

    function O(e) {
        return !!(b(e) && "schema" in e && "data" in e) && ("string" == typeof e.schema && "object" === bt(e.data))
    }

    function T(e) {
        return "function" == typeof e && e.length <= 1
    }

    function C(e) {
        return "function" == typeof e && e.length <= 1 || O(e)
    }

    function P(e) {
        return !(!Array.isArray(e) || 2 !== e.length) && (Array.isArray(e[1]) ? T(e[0]) && tr(e[1], C) : T(e[0]) && C(e[1]))
    }

    function x(e) {
        return !(!Array.isArray(e) || 2 !== e.length) && (!! function(e) {
            var t, n = 0;
            if (t = !(!te(e) || "[object Object]" != ee(e)) && (null === (t = rr(e)) || "function" == typeof(t = ar.call(t, "constructor") && t.constructor) && t instanceof t && or.call(t) == ir)) {
                if (null != e && sn(e, "accept", er)) {
                    if (!S(e.accept)) return;
                    n += 1
                }
                if (null != e && sn(e, "reject", er)) {
                    if (!S(e.reject)) return;
                    n += 1
                }
                return 0 < n && n <= 2
            }
        }(e[0]) && (Array.isArray(e[1]) ? tr(e[1], C) : C(e[1])))
    }

    function I(e) {
        return P(e) || x(e)
    }

    function D(e, t) {
        if (!j(e)) return !1;
        if (e = _(e), t = null !== (t = /^iglu:([a-zA-Z0-9-_.]+)\/([a-zA-Z0-9-_]+)\/jsonschema\/([1-9][0-9]*)-(0|[1-9][0-9]*)-(0|[1-9][0-9]*)$/.exec(t)) ? t.slice(1, 6) : void 0, e && t) {
            if (! function(e, t) {
                    if (t = t.split("."), e = e.split("."), t && e) {
                        if (t.length !== e.length) return;
                        for (var n = 0; n < e.length; n++)
                            if (!E(t[n], e[n])) return;
                        return 1
                    }
                    return
                }(e[0], t[0])) return !1;
            for (var n = 1; n < 5; n++)
                if (!E(e[n], t[n])) return !1;
            return !0
        }
        return !1
    }

    function E(e, t) {
        return e && t && "*" === e || e === t
    }

    function L(e) {
        return Array.isArray(e) ? e : [e]
    }

    function N(e, r, o, a) {
        var t;
        return e = L(e), e = dn(e, function(e) {
            e: if (O(e)) e = [e];
                else {
                    if ("function" == typeof e && e.length <= 1) {
                        t: {
                            var t = void 0;
                            try {
                                if (O(t = e({
                                        event: r,
                                        eventType: o,
                                        eventSchema: a
                                    })) || Array.isArray(t) && tr(t, O)) {
                                    var n = t;
                                    break t
                                }
                                n = void 0;
                                break t
                            } catch (e) {}
                            n = void 0
                        }
                        if (O(n)) {
                            e = [n];
                            break e
                        }
                        if (Array.isArray(n)) {
                            e = n;
                            break e
                        }
                    }
                    e = void 0
                }if (e && 0 !== e.length) return e
        }), (t = []).concat.apply(t, g(nr(e)))
    }

    function Ut(p, a) {
        var i = k(),
            c = {};
        void 0 === p && (p = !0);

        function d(e, t) {
            var n = {};
            for (var r in t = t || {}, e)(t[r] || null !== e[r] && void 0 !== e[r]) && (n[r] = e[r]);
            return n
        }

        function m(e, t, n, r) {
            e.addDict(c), e.add("eid", Qn.v4()), n = null == n ? {
                type: "dtm",
                value: (new Date).getTime()
            } : "number" == typeof n ? {
                type: "dtm",
                value: n
            } : "ttm" === n.type ? {
                type: "ttm",
                value: n.value
            } : {
                type: "dtm",
                value: n.value || (new Date).getTime()
            }, e.add(n.type, n.value.toString()), n = i.getApplicableContexts(e);
            var o = [];
            t && t.length && o.push.apply(o, g(t)), n && n.length && o.push.apply(o, g(n)), void 0 !== (t = o && o.length ? {
                schema: "iglu:com.snowplowanalytics.snowplow/contexts/jsonschema/1-0-0",
                data: o
            } : void 0) && e.addJson("cx", "co", t), "function" == typeof a && a(e);
            try {
                r && r(e.build())
            } catch (e) {
                console.warn("Snowplow: error running custom callback")
            }
            return e
        }

        function h(e, t, n, r) {
            var o = w(p);
            return e = {
                schema: "iglu:com.snowplowanalytics.snowplow/unstruct_event/jsonschema/1-0-0",
                data: e
            }, o.add("e", "ue"), o.addJson("ue_px", "ue_pr", e), m(o, t, n, r)
        }
        return {
            addPayloadPair: function(e, t) {
                c[e] = t
            },
            setBase64Encoding: function(e) {
                p = e
            },
            addPayloadDict: function(e) {
                for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (c[t] = e[t])
            },
            resetPayloadPairs: function(e) {
                c = f(e) ? e : {}
            },
            setTrackerVersion: function(e) {
                c.tv = e
            },
            setTrackerNamespace: function(e) {
                c.tna = e
            },
            setAppId: function(e) {
                c.aid = e
            },
            setPlatform: function(e) {
                c.p = e
            },
            setUserId: function(e) {
                c.uid = e
            },
            setScreenResolution: function(e, t) {
                c.res = e + "x" + t
            },
            setViewport: function(e, t) {
                c.vp = e + "x" + t
            },
            setColorDepth: function(e) {
                c.cd = e
            },
            setTimezone: function(e) {
                c.tz = e
            },
            setLang: function(e) {
                c.lang = e
            },
            setIpAddress: function(e) {
                c.ip = e
            },
            setUseragent: function(e) {
                c.ua = e
            },
            trackUnstructEvent: h,
            trackSelfDescribingEvent: h,
            trackPageView: function(e, t, n, r, o, a) {
                var i = w(p);
                return i.add("e", "pv"), i.add("url", e), i.add("page", t), i.add("refr", n), m(i, r, o, a)
            },
            trackPagePing: function(e, t, n, r, o, a, i, c, s, u) {
                var l = w(p);
                return l.add("e", "pp"), l.add("url", e), l.add("page", t), l.add("refr", n), l.add("pp_mix", r.toString()), l.add("pp_max", o.toString()), l.add("pp_miy", a.toString()), l.add("pp_may", i.toString()), m(l, c, s, u)
            },
            trackStructEvent: function(e, t, n, r, o, a, i, c) {
                var s = w(p);
                return s.add("e", "se"), s.add("se_ca", e), s.add("se_ac", t), s.add("se_la", n), s.add("se_pr", r), s.add("se_va", null == o ? void 0 : o.toString()), m(s, a, i, c)
            },
            trackEcommerceTransaction: function(e, t, n, r, o, a, i, c, s, u, l, f) {
                var d = w(p);
                return d.add("e", "tr"), d.add("tr_id", e), d.add("tr_af", t), d.add("tr_tt", n), d.add("tr_tx", r), d.add("tr_sh", o), d.add("tr_ci", a), d.add("tr_st", i), d.add("tr_co", c), d.add("tr_cu", s), m(d, u, l, f)
            },
            trackEcommerceTransactionItem: function(e, t, n, r, o, a, i, c, s, u) {
                var l = w(p);
                return l.add("e", "ti"), l.add("ti_id", e), l.add("ti_sk", t), l.add("ti_nm", n), l.add("ti_ca", r), l.add("ti_pr", o), l.add("ti_qu", a), l.add("ti_cu", i), m(l, c, s, u)
            },
            trackScreenView: function(e, t, n, r, o) {
                return h({
                    schema: "iglu:com.snowplowanalytics.snowplow/screen_view/jsonschema/1-0-0",
                    data: d({
                        name: e,
                        id: t
                    })
                }, n, r, o)
            },
            trackLinkClick: function(e, t, n, r, o, a, i, c) {
                return e = {
                    schema: "iglu:com.snowplowanalytics.snowplow/link_click/jsonschema/1-0-1",
                    data: d({
                        targetUrl: e,
                        elementId: t,
                        elementClasses: n,
                        elementTarget: r,
                        elementContent: o
                    })
                }, h(e, a, i, c)
            },
            trackAdImpression: function(e, t, n, r, o, a, i, c, s, u, l) {
                return e = {
                    schema: "iglu:com.snowplowanalytics.snowplow/ad_impression/jsonschema/1-0-0",
                    data: d({
                        impressionId: e,
                        costModel: t,
                        cost: n,
                        targetUrl: r,
                        bannerId: o,
                        zoneId: a,
                        advertiserId: i,
                        campaignId: c
                    })
                }, h(e, s, u, l)
            },
            trackAdClick: function(e, t, n, r, o, a, i, c, s, u, l, f) {
                return e = {
                    schema: "iglu:com.snowplowanalytics.snowplow/ad_click/jsonschema/1-0-0",
                    data: d({
                        targetUrl: e,
                        clickId: t,
                        costModel: n,
                        cost: r,
                        bannerId: o,
                        zoneId: a,
                        impressionId: i,
                        advertiserId: c,
                        campaignId: s
                    })
                }, h(e, u, l, f)
            },
            trackAdConversion: function(e, t, n, r, o, a, i, c, s, u, l, f) {
                return e = {
                    schema: "iglu:com.snowplowanalytics.snowplow/ad_conversion/jsonschema/1-0-0",
                    data: d({
                        conversionId: e,
                        costModel: t,
                        cost: n,
                        category: r,
                        action: o,
                        property: a,
                        initialValue: i,
                        advertiserId: c,
                        campaignId: s
                    })
                }, h(e, u, l, f)
            },
            trackSocialInteraction: function(e, t, n, r, o, a) {
                return e = {
                    schema: "iglu:com.snowplowanalytics.snowplow/social_interaction/jsonschema/1-0-0",
                    data: d({
                        action: e,
                        network: t,
                        target: n
                    })
                }, h(e, r, o, a)
            },
            trackAddToCart: function(e, t, n, r, o, a, i, c, s) {
                return h({
                    schema: "iglu:com.snowplowanalytics.snowplow/add_to_cart/jsonschema/1-0-0",
                    data: d({
                        sku: e,
                        name: t,
                        category: n,
                        unitPrice: r,
                        quantity: o,
                        currency: a
                    })
                }, i, c, s)
            },
            trackRemoveFromCart: function(e, t, n, r, o, a, i, c, s) {
                return h({
                    schema: "iglu:com.snowplowanalytics.snowplow/remove_from_cart/jsonschema/1-0-0",
                    data: d({
                        sku: e,
                        name: t,
                        category: n,
                        unitPrice: r,
                        quantity: o,
                        currency: a
                    })
                }, i, c, s)
            },
            trackFormFocusOrChange: function(e, t, n, r, o, a, i, c, s, u) {
                var l = "";
                return t = {
                    formId: t,
                    elementId: n,
                    nodeName: r,
                    elementClasses: a,
                    value: i
                }, "change_form" === e ? (l = "iglu:com.snowplowanalytics.snowplow/change_form/jsonschema/1-0-0", t.type = o) : "focus_form" === e && (l = "iglu:com.snowplowanalytics.snowplow/focus_form/jsonschema/1-0-0", t.elementType = o), h({
                    schema: l,
                    data: d(t, {
                        value: !0
                    })
                }, c, s, u)
            },
            trackFormSubmission: function(e, t, n, r, o, a) {
                return h({
                    schema: "iglu:com.snowplowanalytics.snowplow/submit_form/jsonschema/1-0-0",
                    data: d({
                        formId: e,
                        formClasses: t,
                        elements: n
                    })
                }, r, o, a)
            },
            trackSiteSearch: function(e, t, n, r, o, a, i) {
                return h({
                    schema: "iglu:com.snowplowanalytics.snowplow/site_search/jsonschema/1-0-0",
                    data: d({
                        terms: e,
                        filters: t,
                        totalResults: n,
                        pageResults: r
                    })
                }, o, a, i)
            },
            trackConsentWithdrawn: function(e, t, n, r, o, a, i, c) {
                return t = {
                    schema: "iglu:com.snowplowanalytics.snowplow/consent_document/jsonschema/1-0-0",
                    data: d({
                        id: t,
                        version: n,
                        name: r,
                        description: o
                    })
                }, h({
                    schema: "iglu:com.snowplowanalytics.snowplow/consent_withdrawn/jsonschema/1-0-0",
                    data: d({
                        all: e
                    })
                }, t.data && a ? a.concat([t]) : a, i, c)
            },
            trackConsentGranted: function(e, t, n, r, o, a, i, c) {
                return e = {
                    schema: "iglu:com.snowplowanalytics.snowplow/consent_document/jsonschema/1-0-0",
                    data: d({
                        id: e,
                        version: t,
                        name: n,
                        description: r
                    })
                }, h({
                    schema: "iglu:com.snowplowanalytics.snowplow/consent_granted/jsonschema/1-0-0",
                    data: d({
                        expiry: o
                    })
                }, a ? a.concat([e]) : [e], i, c)
            },
            addGlobalContexts: function(e) {
                i.addGlobalContexts(e)
            },
            clearGlobalContexts: function() {
                i.clearGlobalContexts()
            },
            removeGlobalContexts: function(e) {
                i.removeGlobalContexts(e)
            }
        }
    }

    function z(t, n, e, m, r) {
        function o(e) {
            return -1 < gt.map(function(e) {
                return e.toLowerCase()
            }).indexOf(e.toLowerCase())
        }

        function h() {
            (ke = Lt(ye.domain, be.location.href, _t()))[1] !== _e && (je = _t(_e)), Ae = At(ke[0]), _e = ke[1]
        }

        function a() {
            var e = (new Date).getTime();
            if (this.href) {
                e = "_sp=" + Z + "." + e;
                var t = this.href.split("#"),
                    n = t[0].split("?"),
                    r = n.shift();
                if (n = n.join("?")) {
                    for (var o = !0, a = n.split("&"), i = 0; i < a.length; i++)
                        if ("_sp=" === a[i].substr(0, 4)) {
                            o = !1, a[i] = e, n = a.join("&");
                            break
                        } o && (n = e + "&" + n)
                } else n = e;
                t[0] = r + "?" + n, this.href = t.join("#")
            }
        }

        function i(e) {
            for (var t = 0; t < ye.links.length; t++) {
                var n = ye.links[t];
                !n.spDecorationEnabled && e(n) && (jt(n, "click", a, !0), jt(n, "mousedown", a, !0), n.spDecorationEnabled = !0)
            }
        }

        function g(e) {
            var t;
            return H && (t = /#.*/, e = e.replace(t, "")), G && (t = /[{}]/g, e = e.replace(t, "")), e
        }

        function c(e) {
            return (e = /^([a-z]+):/.exec(e)) ? e[1] : null
        }

        function s(e) {
            return Ie + e + "." + Q
        }

        function v(e) {
            if (e = s(e), "localStorage" == Ye) {
                e: {
                    try {
                        var t = hn.getItem(e + ".expires");
                        if (null === t || +t > Date.now()) {
                            var n = hn.getItem(e);
                            break e
                        }
                        hn.removeItem(e), hn.removeItem(e + ".expires"), n = void 0;
                        break e
                    } catch (e) {}
                    n = void 0
                }
                return n
            }
            if ("cookie" == Ye || "cookieAndLocalStorage" == Ye) return xt(e)
        }

        function u() {
            h(), Q = Qe((De || Ae) + (Ee || "/")).slice(0, 4)
        }

        function l() {
            Y = (new Date).getTime()
        }

        function f() {
            var e = d(),
                t = e[0];
            t < W ? W = t : K < t && (K = t), (e = e[1]) < $ ? $ = e : X < e && (X = e), l()
        }

        function d() {
            var e = ye.compatMode && "BackCompat" !== ye.compatMode ? ye.documentElement : ye.body;
            return [e.scrollLeft || be.pageXOffset, e.scrollTop || be.pageYOffset]
        }

        function p() {
            var e = d(),
                t = e[0];
            K = W = t, X = $ = e = e[1]
        }

        function y(e) {
            if (e = Math.round(e), !isNaN(e)) return e
        }

        function b() {
            k(s("ses"), "*", Ue)
        }

        function w(e, t, n, r, o, a) {
            k(s("id"), e + "." + t + "." + n + "." + r + "." + o + "." + a, Be)
        }

        function k(e, t, n) {
            Ge && !He || ("localStorage" == Ye ? Tt(e, t, n) : "cookie" != Ye && "cookieAndLocalStorage" != Ye || xt(e, t, n, Ee, De, Le, Ne))
        }

        function A() {
            var e = s("id"),
                t = s("ses");
            Ct(e), Ct(t), xt(e, "", -1, "/", void 0), xt(t, "", -1, "/", void 0)
        }

        function _() {
            var e, t;
            Ge && !He || (e = "none" != Ye && !!v("ses"), (t = j())[1] ? Z = t[1] : (Z = Ge ? "" : Jn(), t[1] = Z), ee = t[6], e || (t[3]++, ee = Jn(), t[6] = ee, t[5] = t[4]), "none" != Ye && (b(), t[4] = Math.round((new Date).getTime() / 1e3), t.shift(), w.apply(null, t)))
        }

        function j() {
            if ("none" == Ye) return [];
            var e = Math.round((new Date).getTime() / 1e3),
                t = v("id");
            return t ? (e = t.split(".")).unshift("0") : e = ["1", Z, e, 0, e, ""], e[6] || (e[6] = Jn()), e
        }

        function S(e) {
            return Ve ? "https://" + e : Re ? "http://" + e : ("https:" === ye.location.protocol ? "https" : "http") + "://" + e
        }

        function O(e) {
            var t = ct.concat(e || []);
            if (it.webPage && t.push({
                    schema: "iglu:com.snowplowanalytics.snowplow/web_page/jsonschema/1-0-0",
                    data: {
                        id: C()
                    }
                }), it.performanceTiming && (e = function() {
                    var e = "navigationStart redirectStart redirectEnd fetchStart domainLookupStart domainLookupEnd connectStart secureConnectionStart connectEnd requestStart responseStart responseEnd unloadEventStart unloadEventEnd domLoading domInteractive domContentLoadedEventStart domContentLoadedEventEnd domComplete loadEventStart loadEventEnd msFirstPaint chromeFirstPaint requestEnd proxyStart proxyEnd".split(" "),
                        t = be.performance || be.mozPerformance || be.msPerformance || be.webkitPerformance;
                    if (t) {
                        var n, r = {};
                        for (n in t.timing) Pt(n, e) && null !== t.timing[n] && (r[n] = t.timing[n]);
                        return delete r.requestEnd, {
                            schema: "iglu:org.w3/PerformanceTiming/jsonschema/1-0-0",
                            data: r
                        }
                    }
                }()) && t.push(e), be.optimizely) {
                if (it.optimizelySummary && (e = dn(function() {
                        var n = P("state"),
                            r = P("experiments");
                        return dn(n && r && n.activeExperiments, function(e) {
                            var t = r[e];
                            return {
                                activeExperimentId: e.toString(),
                                variation: n.variationIdsMap[e][0].toString(),
                                conditional: t && t.conditional,
                                manual: t && t.manual,
                                name: t && t.name
                            }
                        })
                    }(), function(e) {
                        return {
                            schema: "iglu:com.optimizely.snowplow/optimizely_summary/jsonschema/1-0-0",
                            data: e
                        }
                    }), Ft(e, function(e) {
                        t.push(e)
                    })), it.optimizelyXSummary && (e = dn(function() {
                        var e = x("state"),
                            t = e && e.getActiveExperimentIds(),
                            o = e && e.getVariationMap(),
                            a = x("visitor");
                        return dn(t, function(e) {
                            var t = (n = o[e]) && n.name && n.name.toString() || null,
                                n = n && n.id,
                                r = a && a.visitorId && a.visitorId.toString() || null;
                            return {
                                experimentId: It(e) || null,
                                variationName: t,
                                variation: It(n) || null,
                                visitorId: r
                            }
                        })
                    }(), function(e) {
                        return {
                            schema: "iglu:com.optimizely.optimizelyx/summary/jsonschema/1-0-0",
                            data: e
                        }
                    }), Ft(e, function(e) {
                        t.push(e)
                    })), it.optimizelyExperiments) {
                    var n = function() {
                        var e = P("experiments");
                        if (e) {
                            var t, n, r, o = [];
                            for (t in e) {
                                e.hasOwnProperty(t) && ((n = {}).id = t, r = e[t], n.code = r.code, n.manual = r.manual, n.conditional = r.conditional, n.name = r.name, n.variationIds = r.variation_ids, o.push({
                                    schema: "iglu:com.optimizely/experiment/jsonschema/1-0-0",
                                    data: n
                                }))
                            }
                            return o
                        }
                        return []
                    }();
                    for (e = 0; e < n.length; e++) t.push(n[e])
                }
                if (it.optimizelyStates)
                    for (n = function() {
                            var e = [],
                                t = P("experiments");
                            if (t)
                                for (var n in t) t.hasOwnProperty(n) && e.push(n);
                            if (t = P("state")) {
                                n = [];
                                for (var r = t.activeExperiments || [], o = 0; o < e.length; o++) {
                                    var a = e[o],
                                        i = {};
                                    i.experimentId = a, i.isActive = Pt(e[o], r), i.variationIndex = (t.variationMap || {})[a], i.variationName = (t.variationNamesMap || {})[a];
                                    var c = t.variationIdsMap || {};
                                    c[a] && 1 === c[a].length && (i.variationId = c[a][0]), n.push({
                                        schema: "iglu:com.optimizely/state/jsonschema/1-0-0",
                                        data: i
                                    })
                                }
                                return n
                            }
                            return []
                        }(), e = 0; e < n.length; e++) t.push(n[e]);
                if (it.optimizelyVariations)
                    for (n = function() {
                            var e = P("variations");
                            if (e) {
                                var t, n, r, o = [];
                                for (t in e) {
                                    e.hasOwnProperty(t) && ((n = {}).id = t, r = e[t], n.name = r.name, n.code = r.code, o.push({
                                        schema: "iglu:com.optimizely/variation/jsonschema/1-0-0",
                                        data: n
                                    }))
                                }
                                return o
                            }
                            return []
                        }(), e = 0; e < n.length; e++) t.push(n[e]);
                if (it.optimizelyVisitor && (e = function() {
                        var e = P("visitor");
                        if (e) {
                            var t = {};
                            t.browser = e.browser, t.browserVersion = e.browserVersion, t.device = e.device, t.deviceType = e.deviceType, t.ip = e.ip;
                            var n = e.platform || {};
                            return t.platformId = n.id, t.platformVersion = n.version, n = e.location || {}, t.locationCity = n.city, t.locationRegion = n.region, t.locationCountry = n.country, t.mobile = e.mobile, t.mobileId = e.mobileId, t.referrer = e.referrer, t.os = e.os, {
                                schema: "iglu:com.optimizely/visitor/jsonschema/1-0-0",
                                data: t
                            }
                        }
                    }()) && t.push(e), it.optimizelyAudiences)
                    for (n = function() {
                            var e = P("visitor", "audiences");
                            if (e) {
                                var t, n = [];
                                for (t in e) e.hasOwnProperty(t) && n.push({
                                    schema: "iglu:com.optimizely/visitor_audience/jsonschema/1-0-0",
                                    data: {
                                        id: t,
                                        isMember: e[t]
                                    }
                                });
                                return n
                            }
                            return []
                        }(), e = 0; e < n.length; e++) t.push(n[e]);
                if (it.optimizelyDimensions)
                    for (n = function() {
                            var e = P("visitor", "dimensions");
                            if (e) {
                                var t, n = [];
                                for (t in e) e.hasOwnProperty(t) && n.push({
                                    schema: "iglu:com.optimizely/visitor_dimension/jsonschema/1-0-0",
                                    data: {
                                        id: t,
                                        value: e[t]
                                    }
                                });
                                return n
                            }
                            return []
                        }(), e = 0; e < n.length; e++) t.push(n[e])
            }
            return it.parrable && (e = function() {
                var e = window._hawk;
                if (e) {
                    var t = {
                        encryptedId: null,
                        optout: null
                    };
                    return t.encryptedId = e.browserid, e = new RegExp("(?:^|;)\\s?" + "_parrable_hawk_optout".replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1") + "=(.*?)(?:;|$)", "i"), e = document.cookie.match(e), t.optout = e && decodeURIComponent(e[1]) ? e && decodeURIComponent(e[1]) : "false", {
                        schema: "iglu:com.parrable/encrypted_payload/jsonschema/1-0-0",
                        data: t
                    }
                }
            }()) && t.push(e), it.gdprBasis && vt.gdprBasis && ((e = vt.gdprBasis ? {
                schema: "iglu:com.snowplowanalytics.snowplow/gdpr/jsonschema/1-0-0",
                data: {
                    basisForProcessing: vt.gdprBasis,
                    documentId: vt.gdprDocId || null,
                    documentVersion: vt.gdprDocVer || null,
                    documentDescription: vt.gdprDocDesc || null
                }
            } : void 0) && t.push(e)), it.clientHints && dt && t.push({
                schema: "iglu:org.ietf/http_client_hints/jsonschema/1-0-0",
                data: dt
            }), t
        }

        function T() {
            ut && null != m.pageViewId || (m.pageViewId = Jn())
        }

        function C() {
            return null == m.pageViewId && (m.pageViewId = Jn()), m.pageViewId
        }

        function P(e, t) {
            var n;
            return be.optimizely && be.optimizely.data && (n = be.optimizely.data[e], void 0 !== t && void 0 !== n && (n = n[t])), n
        }

        function x(e, t) {
            var n;
            return be.optimizely && "function" == typeof be.optimizely.get && (n = be.optimizely.get(e), void 0 !== t && void 0 !== n && (n = n[t])), n
        }

        function I() {
            !at && we.geolocation && we.geolocation.getCurrentPosition && (at = !0, we.geolocation.getCurrentPosition(function(e) {
                var t = e.coords;
                ct.push({
                    schema: "iglu:com.snowplowanalytics.snowplow/geolocation_context/jsonschema/1-1-0",
                    data: {
                        latitude: t.latitude,
                        longitude: t.longitude,
                        latitudeLongitudeAccuracy: t.accuracy,
                        altitude: t.altitude,
                        altitudeAccuracy: t.altitudeAccuracy,
                        bearing: t.heading,
                        speed: t.speed,
                        timestamp: Math.round(e.timestamp)
                    }
                })
            }))
        }

        function D(e, t) {
            function n(e, t) {
                h(), e({
                    context: t,
                    pageViewId: C(),
                    minXOffset: W,
                    minYOffset: $,
                    maxXOffset: K,
                    maxYOffset: X
                }), p()
            }

            function r() {
                Y + e.configHeartBeatTimer > (new Date).getTime() && n(e.callback, t)
            }
            e.activityInterval = 0 != e.configMinimumVisitLength ? setTimeout(function() {
                Y + e.configMinimumVisitLength > (new Date).getTime() && n(e.callback, t), e.activityInterval = setInterval(r, e.configHeartBeatTimer)
            }, e.configMinimumVisitLength) : setInterval(r, e.configHeartBeatTimer)
        }

        function E(e, t, n) {
            return "number" == typeof e && e == An(e) && "number" == typeof t && t == An(t) ? {
                configMinimumVisitLength: 1e3 * e,
                configHeartBeatTimer: 1e3 * t,
                activityInterval: null,
                callback: n
            } : (Ot("Activity tracking not enabled, please provide integer values for minimumVisitLength and heartBeatDelay."), {})
        }

        function L(e) {
            var t = e.context,
                n = e.minXOffset,
                r = e.minYOffset,
                o = e.maxXOffset;
            e = e.maxYOffset;
            var a = ye.title;
            a !== Ce && (Ce = a, R = null), me.trackPagePing(g(V || _e), wt(R || Ce), g(U || je), y(n), y(o), y(r), y(e), O(t))
        }

        function N(e, t) {
            return "" !== e ? e + t.charAt(0).toUpperCase() + t.slice(1) : t
        }

        function z(t) {
            var e, n, r = ["", "webkit", "ms", "moz"];
            if (!J)
                for (n = 0; n < r.length; n++) {
                    var o = r[n];
                    if (ye[N(o, "hidden")]) {
                        "prerender" === ye[N(o, "visibilityState")] && (e = !0);
                        break
                    }
                    if (!1 === ye[N(o, "hidden")]) break
                }
            e ? jt(ye, o + "visibilitychange", function e() {
                ye.removeEventListener(o + "visibilitychange", e, !1), t()
            }) : t()
        }(r = r || {}).hasOwnProperty("post") ? r.eventMethod = !0 === r.post ? "post" : "get" : r.eventMethod = r.eventMethod || "post", r.hasOwnProperty("useStm") || (r.useStm = !0);

        function M(e) {
            return e.hasOwnProperty("stateStorageStrategy") ? e.stateStorageStrategy : Je || qe ? Je && qe ? "cookieAndLocalStorage" : Je ? "cookie" : "localStorage" : "none"
        }

        function B(e) {
            return !!e.hasOwnProperty("anonymousTracking") && !0 === e.anonymousTracking.withSessionTracking
        }
        var U, F, V, R, H, G, q, J, Y, W, K, $, X, Q, Z, ee, te, ne, re, oe, ae, ie, ce, se, ue, le, fe, de, pe = Object.freeze({
                consent: "consent",
                contract: "contract",
                legalObligation: "legal_obligation",
                vitalInterests: "vital_interests",
                publicTask: "public_task",
                legitimateInterests: "legitimate_interests"
            }),
            me = Ut(!0, function(e) {
                var t, n, r, o = Math.round((new Date).getTime() / 1e3),
                    a = v("ses"),
                    i = (d = j())[0],
                    c = d[1],
                    s = d[2],
                    u = d[3],
                    l = d[4],
                    f = d[5],
                    d = d[6],
                    p = !!q && !!xt(q);
                Me || p ? A() : ("0" === i ? (ee = d, a || "none" == Ye || (u++, f = l, ee = Jn()), Ze = u) : (new Date).getTime() - Xe > 1e3 * Ue && (ee = Jn(), Ze++), e.add("vp", function() {
                    var e = jn,
                        t = "inner";
                    "innerWidth" in jn || (t = "client", e = Tn.documentElement || Tn.body);
                    var n = e[t + "Width"],
                        e = e[t + "Height"];
                    return 0 <= n && 0 <= e ? n + "x" + e : null
                }()), e.add("ds", (t = Tn.documentElement, n = Tn.body, r = Math.max(t.clientWidth, t.offsetWidth, t.scrollWidth), t = Math.max(t.clientHeight, t.offsetHeight, t.scrollHeight, n ? Math.max(n.offsetHeight, n.scrollHeight) : 0), isNaN(r) || isNaN(t) ? "" : r + "x" + t)), e.add("vid", !He && Ge ? null : Ze), e.add("sid", !He && Ge ? null : ee), e.add("duid", Ge ? null : c), e.add("uid", Ge ? null : te), h(), e.add("refr", g(U || je)), e.add("url", g(V || _e)), "none" != Ye && (w(c, s, Ze, o, f, ee), b()), Xe = (new Date).getTime()), o = Pe, a = new Date, i = !!q && !!xt(q), Me || i || (ot.enqueueRequest(e.build(), F), m.expireDateTime = a.getTime() + o)
            }),
            he = !1,
            ge = {},
            ve = {},
            ye = document,
            be = window,
            we = navigator,
            ke = Lt(ye.domain, be.location.href, _t()),
            Ae = At(ke[0]),
            _e = ke[1],
            je = ke[2],
            Se = r.hasOwnProperty("platform") ? r.platform : "web",
            Oe = r.hasOwnProperty("postPath") ? r.postPath : "/com.snowplowanalytics.snowplow/tp2",
            Te = r.hasOwnProperty("appId") ? r.appId : "",
            Ce = ye.title,
            Pe = r.hasOwnProperty("pageUnloadTimer") ? r.pageUnloadTimer : 500,
            xe = !r.hasOwnProperty("resetActivityTrackingOnPageView") || r.resetActivityTrackingOnPageView,
            Ie = r.hasOwnProperty("cookieName") ? r.cookieName : "_sp_",
            De = r.hasOwnProperty("cookieDomain") ? r.cookieDomain : null,
            Ee = "/",
            Le = r.hasOwnProperty("cookieSameSite") ? r.cookieSameSite : "None",
            Ne = !r.hasOwnProperty("cookieSecure") || r.cookieSecure,
            ze = we.doNotTrack || we.msDoNotTrack || be.doNotTrack,
            Me = !!r.hasOwnProperty("respectDoNotTrack") && (r.respectDoNotTrack && ("yes" === ze || "1" === ze)),
            Be = r.hasOwnProperty("cookieLifetime") ? r.cookieLifetime : 63072e3,
            Ue = r.hasOwnProperty("sessionCookieTimeout") ? r.sessionCookieTimeout : 1800,
            Fe = ye.characterSet || ye.charset,
            Ve = !!r.hasOwnProperty("forceSecureTracker") && !0 === r.forceSecureTracker,
            Re = !(Ve || !r.hasOwnProperty("forceUnsecureTracker")) && !0 === r.forceUnsecureTracker,
            He = B(r),
            Ge = !!r.anonymousTracking,
            qe = !r.hasOwnProperty("useLocalStorage") || (Ot("argmap.useLocalStorage is deprecated. Use argmap.stateStorageStrategy instead."), r.useLocalStorage),
            Je = !r.hasOwnProperty("useCookies") || (Ot("argmap.useCookies is deprecated. Use argmap.stateStorageStrategy instead."), r.useCookies),
            Ye = M(r),
            We = we.userLanguage || we.language,
            Ke = function(e, t) {
                var n, r, o = {
                        pdf: "application/pdf",
                        qt: "video/quicktime",
                        realp: "audio/x-pn-realaudio-plugin",
                        wma: "application/x-mplayer2",
                        dir: "application/x-director",
                        fla: "application/x-shockwave-flash",
                        java: "application/x-java-vm",
                        gears: "application/x-googlegears",
                        ag: "application/x-silverlight"
                    },
                    a = {};
                if (Sn.mimeTypes && Sn.mimeTypes.length)
                    for (n in o) {
                        Object.prototype.hasOwnProperty.call(o, n) && (r = Sn.mimeTypes[o[n]], a[n] = r && r.enabledPlugin ? "1" : "0")
                    }
                return Sn.constructor === window.Navigator && "unknown" != typeof Sn.javaEnabled && void 0 !== Sn.javaEnabled && Sn.javaEnabled() && (a.java = "1"), Et(jn.GearsFactory) && (a.gears = "1"), a.res = On.width + "x" + On.height, a.cd = On.colorDepth, e && (e = t || "testcookie", e = void 0 === Sn.cookieEnabled ? (xt(e, "1"), "1" === xt(e) ? "1" : "0") : Sn.cookieEnabled ? "1" : "0", a.cookie = e), a
            }("cookie" == Ye || "cookieAndLocalStorage" == Ye, s("testcookie")),
            $e = t + "_" + n,
            Xe = (new Date).getTime(),
            Qe = In,
            Ze = 1,
            et = [],
            tt = new Nt(me, $e, O),
            nt = new zt(me, $e, O),
            rt = new Mt(me),
            ot = new Bt(t, n, m, "localStorage" == Ye || "cookieAndLocalStorage" == Ye, r.eventMethod, Oe, r.bufferSize, r.maxPostBytes || 4e4, r.useStm, r.maxLocalStorageQueueSize || 1e3, r.connectionTimeout || 5e3),
            at = !1,
            it = r.contexts || {},
            ct = [],
            st = [],
            ut = !1,
            lt = !1,
            ft = {
                enabled: !1,
                installed: !1,
                configurations: {}
            },
            dt = null;
        it.clientHints && we.userAgentData && (dt = {
            isMobile: we.userAgentData.mobile,
            brands: we.userAgentData.brands
        }, it.clientHints.includeHighEntropy && we.userAgentData.getHighEntropyValues && we.userAgentData.getHighEntropyValues(["platform", "platformVersion", "architecture", "model", "uaFullVersion"]).then(function(e) {
            dt.architecture = e.architecture, dt.model = e.model, dt.platform = e.platform, dt.uaFullVersion = e.uaFullVersion, dt.platformVersion = e.platformVersion
        }));
        var pt, mt, ht, gt = r.skippedBrowserFeatures || [],
            vt = {};
        for (var yt in r.hasOwnProperty("discoverRootDomain") && r.discoverRootDomain && (De = function() {
                for (var e = "_sp_root_domain_test_" + (new Date).getTime(), t = "_test_value_" + (new Date).getTime(), n = pn.location.hostname.split("."), r = n.length - 1; 0 <= r;) {
                    var o = n.slice(r, n.length).join(".");
                    if (xt(e, t, 0, "/", o), xt(e) === t) {
                        for (xt(e, "", -1, "/", o), e = mn.cookie.split("; "), t = [], n = 0; n < e.length; n++) "_sp_root_domain_test_" === e[n].substring(0, 21) && t.push(e[n]);
                        for (e = t, t = 0; t < e.length; t++) xt(e[t], "", -1, "/", o);
                        return o
                    }--r
                }
                return pn.location.hostname
            }()), it.gaCookies && ct.push((pt = {}, Ft("__utma __utmb __utmc __utmv __utmz _ga".split(" "), function(e) {
                var t = xt(e);
                t && (pt[e] = t)
            }), {
                schema: "iglu:com.google.analytics/cookies/jsonschema/1-0-0",
                data: pt
            })), it.geolocation && I(), me.setBase64Encoding(!r.hasOwnProperty("encodeBase64") || r.encodeBase64), me.setTrackerVersion(e), me.setTrackerNamespace(n), me.setAppId(Te), me.setPlatform(Se), me.setTimezone(_n.jstz.determine().name()), me.addPayloadPair("lang", We), me.addPayloadPair("cs", Fe), Ke) Object.prototype.hasOwnProperty.call(Ke, yt) && ("res" !== yt && "cd" !== yt && "cookie" !== yt || o(yt) ? o(yt) || me.addPayloadPair("f_" + yt, Ke[yt]) : me.addPayloadPair(yt, Ke[yt]));
        return u(), _(), r.crossDomainLinker && i(r.crossDomainLinker), ge.getDomainSessionIndex = function() {
            return Ze
        }, ge.getPageViewId = C, ge.newSession = function() {
            var e = Math.round((new Date).getTime() / 1e3),
                t = j(),
                n = t[1],
                r = t[2],
                o = t[3],
                a = t[4],
                i = t[5],
                c = t[6];
            "0" === t[0] ? (ee = c, "none" != Ye && (o++, i = a, ee = Jn()), Ze = o, b()) : (ee = Jn(), Ze++), "none" != Ye && (w(n, r, Ze, e, i, ee), b()), Xe = (new Date).getTime()
        }, ge.getCookieName = s, ge.getUserId = function() {
            return te
        }, ge.getDomainUserId = function() {
            return j()[1]
        }, ge.getDomainUserInfo = j, ge.getUserFingerprint = function() {
            return Ot("User Fingerprinting is no longer supported. This function will be removed in a future release."), 0
        }, ge.setAppId = function(e) {
            Ot("setAppId is deprecated. Instead use the argmap argument on tracker initialisation: appId"), me.setAppId(e)
        }, ge.setReferrerUrl = function(e) {
            U = e
        }, ge.setCustomUrl = function(e) {
            h();
            var t, n = _e;
            V = c(e) ? e : "/" === e.slice(0, 1) ? c(n) + "://" + kt(n) + e : (0 <= (t = (n = g(n)).indexOf("?")) && (n = n.slice(0, t)), (t = n.lastIndexOf("/")) !== n.length - 1 && (n = n.slice(0, t + 1)), n + e)
        }, ge.setDocumentTitle = function(e) {
            Ce = ye.title, R = e
        }, ge.discardHashTag = function(e) {
            H = e
        }, ge.discardBrace = function(e) {
            G = e
        }, ge.setCookieNamePrefix = function(e) {
            Ot("setCookieNamePrefix is deprecated. Instead use the argmap argument on tracker initialisation: cookieName"), Ie = e
        }, ge.setCookieDomain = function(e) {
            Ot("setCookieDomain is deprecated. Instead use the argmap argument on tracker initialisation: cookieDomain"), De = At(e), u()
        }, ge.setCookiePath = function(e) {
            Ee = e, u()
        }, ge.setVisitorCookieTimeout = function(e) {
            Be = e
        }, ge.setSessionCookieTimeout = function(e) {
            Ot("setSessionCookieTimeout is deprecated. Instead use the argmap argument on tracker initialisation: sessionCookieTimeout"), Ue = e
        }, ge.setUserFingerprintSeed = function() {
            Ot("User Fingerprinting is no longer supported. This function will be removed in a future release.")
        }, ge.enableUserFingerprint = function() {
            Ot("User Fingerprinting is no longer supported. This function will be removed in a future release.")
        }, ge.respectDoNotTrack = function(e) {
            Ot("respectDoNotTrack is deprecated. Instead use the argmap argument on tracker initialisation: respectDoNotTrack");
            var t = we.doNotTrack || we.msDoNotTrack;
            Me = e && ("yes" === t || "1" === t)
        }, ge.crossDomainLinker = function(e) {
            i(e)
        }, ge.enableLinkClickTracking = function(e, t, n, r) {
            m.hasLoaded ? (tt.configureLinkClickTracking(e, t, n, r), tt.addClickListeners()) : m.registeredOnLoadHandlers.push(function() {
                tt.configureLinkClickTracking(e, t, n, r), tt.addClickListeners()
            })
        }, ge.refreshLinkClickTracking = function() {
            m.hasLoaded ? tt.addClickListeners() : m.registeredOnLoadHandlers.push(function() {
                tt.addClickListeners()
            })
        }, ge.enableActivityTracking = function(e, t) {
            ft.enabled = !0, ft.configurations.pagePing = E(e, t, L)
        }, ge.enableActivityTrackingCallback = function(e, t, n) {
            ft.enabled = !0, ft.configurations.callback = E(e, t, n)
        }, ge.updatePageActivity = function() {
            l()
        }, ge.enableFormTracking = function(e, t) {
            m.hasLoaded ? (nt.configureFormTracking(e), nt.addFormListeners(t)) : m.registeredOnLoadHandlers.push(function() {
                nt.configureFormTracking(e), nt.addFormListeners(t)
            })
        }, ge.killFrame = function() {
            be.location !== be.top.location && (be.top.location = be.location)
        }, ge.redirectFile = function(e) {
            "file:" === be.location.protocol && (be.location = e)
        }, ge.setOptOutCookie = function(e) {
            q = e
        }, ge.setCountPreRendered = function(e) {
            J = e
        }, ge.setUserId = function(e) {
            te = e
        }, ge.identifyUser = function(e) {
            ge.setUserId(e)
        }, ge.setUserIdFromLocation = function(e) {
            h(), te = St(e, _e)
        }, ge.setUserIdFromReferrer = function(e) {
            h(), te = St(e, je)
        }, ge.setUserIdFromCookie = function(e) {
            te = xt(e)
        }, ge.setCollectorCf = function(e) {
            F = S(e + ".cloudfront.net")
        }, ge.setCollectorUrl = function(e) {
            F = S(e)
        }, ge.setPlatform = function(e) {
            Ot("setPlatform is deprecated. Instead use the argmap argument on tracker initialisation: platform"), me.setPlatform(e)
        }, ge.encodeBase64 = function(e) {
            Ot("encodeBase64 is deprecated. Instead use the argmap argument on tracker initialisation: encodeBase64"), me.setBase64Encoding(e)
        }, ge.flushBuffer = function() {
            ot.executeQueue()
        }, ge.enableGeolocationContext = I, ge.trackPageView = function(e, t, n, r, o) {
            z(function() {
                ! function(e, t, n, r, o) {
                    var a;
                    if (h(), lt && T(), lt = !0, Ce = ye.title, e = wt((R = e) || Ce), me.trackPageView(g(V || _e), e, g(U || je), O((t || []).concat(n ? n() : [])), r, o), r = new Date, o = !1, ft.enabled && !ft.installed && (o = ft.installed = !0, (a = {
                            update: function() {
                                var e, t, n;
                                "undefined" != typeof window && "function" == typeof window.addEventListener && (e = !1, t = Object.defineProperty({}, "passive", {
                                    get: function() {
                                        e = !0
                                    }
                                }), window.addEventListener("testPassiveEventSupport", n = function() {}, t), window.removeEventListener("testPassiveEventSupport", n, t), a.hasSupport = e)
                            }
                        }).update(), e = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll", Object.prototype.hasOwnProperty.call(a, "hasSupport") ? jt(ye, e, l, {
                            passive: !0
                        }) : jt(ye, e, l), p(), e = function(e) {
                            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : l;
                            return function(e) {
                                return jt(ye, e, t)
                            }
                        }, Ft("click mouseup mousedown mousemove keypress keydown keyup".split(" "), e(ye)), Ft(["resize", "focus", "blur"], e(be)), e(be, f)("scroll")), ft.enabled && (xe || o))
                        for (var i in Y = r.getTime(), ft.configurations) ft.configurations.hasOwnProperty(i) && (r = ft.configurations[i], clearInterval(r.activityInterval), D(r, (t || []).concat(n ? n() : [])))
                }(e, t, n, r, o)
            })
        }, ge.trackStructEvent = function(e, t, n, r, o, a, i, c) {
            z(function() {
                me.trackStructEvent(e, t, n, r, o, O(a), i, c)
            })
        }, ge.trackSelfDescribingEvent = function(e, t, n, r) {
            z(function() {
                me.trackSelfDescribingEvent(e, O(t), n, r)
            })
        }, ge.trackUnstructEvent = function(e, t, n) {
            z(function() {
                me.trackSelfDescribingEvent(e, O(t), n)
            })
        }, ge.addTrans = function(e, t, n, r, o, a, i, c, s, u, l) {
            ne = e, re = t, oe = n, ae = r, ie = o, ce = a, se = i, ue = c, le = s, fe = u, de = l
        }, ge.addItem = function(e, t, n, r, o, a, i, c, s) {
            et.push({
                orderId: e,
                sku: t,
                name: n,
                category: r,
                price: o,
                quantity: a,
                currency: i,
                context: c,
                tstamp: s
            })
        }, ge.trackTrans = function() {
            z(function() {
                var e = de;
                for (me.trackEcommerceTransaction(ne, re, oe, ae, ie, ce, se, ue, le, O(fe), e), e = 0; e < et.length; e++) {
                    var t = et[e],
                        n = t.tstamp;
                    me.trackEcommerceTransactionItem(t.orderId, t.sku, t.name, t.category, t.price, t.quantity, t.currency, O(t.context), n)
                }
                de = fe = le = ue = se = ce = ie = ae = oe = re = ne = void 0, et = []
            })
        }, ge.trackLinkClick = function(e, t, n, r, o, a, i) {
            z(function() {
                me.trackLinkClick(e, t, n, r, o, O(a), i)
            })
        }, ge.trackAdImpression = function(e, t, n, r, o, a, i, c, s, u) {
            z(function() {
                me.trackAdImpression(e, t, n, r, o, a, i, c, O(s), u)
            })
        }, ge.trackAdClick = function(e, t, n, r, o, a, i, c, s, u, l) {
            z(function() {
                me.trackAdClick(e, t, n, r, o, a, i, c, s, O(u), l)
            })
        }, ge.trackAdConversion = function(e, t, n, r, o, a, i, c, s, u, l) {
            z(function() {
                me.trackAdConversion(e, t, n, r, o, a, i, c, s, O(u), l)
            })
        }, ge.trackSocialInteraction = function(e, t, n, r, o) {
            z(function() {
                me.trackSocialInteraction(e, t, n, O(r), o)
            })
        }, ge.trackAddToCart = function(e, t, n, r, o, a, i, c) {
            z(function() {
                me.trackAddToCart(e, t, n, r, o, a, O(i), c)
            })
        }, ge.trackRemoveFromCart = function(e, t, n, r, o, a, i, c) {
            z(function() {
                me.trackRemoveFromCart(e, t, n, r, o, a, O(i), c)
            })
        }, ge.trackSiteSearch = function(e, t, n, r, o, a) {
            z(function() {
                me.trackSiteSearch(e, t, n, r, O(o), a)
            })
        }, ge.trackTiming = function(e, t, n, r, o, a) {
            z(function() {
                me.trackSelfDescribingEvent({
                    schema: "iglu:com.snowplowanalytics.snowplow/timing/jsonschema/1-0-0",
                    data: {
                        category: e,
                        variable: t,
                        timing: n,
                        label: r
                    }
                }, O(o), a)
            })
        }, ge.trackConsentWithdrawn = function(e, t, n, r, o, a, i) {
            z(function() {
                me.trackConsentWithdrawn(e, t, n, r, o, O(a), i)
            })
        }, ge.trackConsentGranted = function(e, t, n, r, o, a, i) {
            z(function() {
                me.trackConsentGranted(e, t, n, r, o, O(a), i)
            })
        }, ge.trackEnhancedEcommerceAction = function(e, t, n) {
            var r = st.concat(t || []);
            st.length = 0, z(function() {
                me.trackSelfDescribingEvent({
                    schema: "iglu:com.google.analytics.enhanced-ecommerce/action/jsonschema/1-0-0",
                    data: {
                        action: e
                    }
                }, O(r), n)
            })
        }, ge.addEnhancedEcommerceActionContext = function(e, t, n, r, o, a, i, c, s, u) {
            st.push({
                schema: "iglu:com.google.analytics.enhanced-ecommerce/actionFieldObject/jsonschema/1-0-0",
                data: {
                    id: e,
                    affiliation: t,
                    revenue: Dt(n),
                    tax: Dt(r),
                    shipping: Dt(o),
                    coupon: a,
                    list: i,
                    step: It(c),
                    option: s,
                    currency: u
                }
            })
        }, ge.addEnhancedEcommerceImpressionContext = function(e, t, n, r, o, a, i, c, s) {
            st.push({
                schema: "iglu:com.google.analytics.enhanced-ecommerce/impressionFieldObject/jsonschema/1-0-0",
                data: {
                    id: e,
                    name: t,
                    list: n,
                    brand: r,
                    category: o,
                    variant: a,
                    position: It(i),
                    price: Dt(c),
                    currency: s
                }
            })
        }, ge.addEnhancedEcommerceProductContext = function(e, t, n, r, o, a, i, c, s, u, l) {
            st.push({
                schema: "iglu:com.google.analytics.enhanced-ecommerce/productFieldObject/jsonschema/1-0-0",
                data: {
                    id: e,
                    name: t,
                    list: n,
                    brand: r,
                    category: o,
                    variant: a,
                    price: Dt(i),
                    quantity: It(c),
                    coupon: s,
                    position: It(u),
                    currency: l
                }
            })
        }, ge.addEnhancedEcommercePromoContext = function(e, t, n, r, o) {
            st.push({
                schema: "iglu:com.google.analytics.enhanced-ecommerce/promoFieldObject/jsonschema/1-0-0",
                data: {
                    id: e,
                    name: t,
                    creative: n,
                    position: r,
                    currency: o
                }
            })
        }, ge.enableGdprContext = function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
                o = pe[e];
            o ? (it.gdprBasis = !0, vt = {
                gdprBasis: o,
                gdprDocId: t,
                gdprDocVer: n,
                gdprDocDesc: r
            }) : Ot("enableGdprContext failed. basisForProcessing must be set to one of: consent, legalObligation, vitalInterests publicTask, legitimateInterests")
        }, ge.addGlobalContexts = function(e) {
            me.addGlobalContexts(e)
        }, ge.removeGlobalContexts = function(e) {
            me.removeGlobalContexts(e)
        }, ge.clearGlobalContexts = function() {
            me.clearGlobalContexts()
        }, ge.enableErrorTracking = function(e, t) {
            rt.enableErrorTracking(e, t, O())
        }, ge.trackError = function(e, t, n, r, o, a) {
            a = O(a), rt.trackError(e, t, n, r, o, a)
        }, ge.preservePageViewId = function() {
            ut = !0
        }, ge.disableAnonymousTracking = function(e) {
            e ? (Object.assign(r, {
                stateStorageStrategy: e,
                anonymousTracking: !1
            }), Ye = M(r), ot = new Bt(t, n, m, "localStorage" == Ye || "cookieAndLocalStorage" == Ye, r.eventMethod, Oe, r.bufferSize, r.maxPostBytes || 4e4, r.useStm, r.maxLocalStorageQueueSize || 1e3, r.connectionTimeout || 5e3)) : Object.assign(r, {
                anonymousTracking: !1
            }), Ge = !!r.anonymousTracking, He = B(r), _()
        }, ge.enableAnonymousTracking = function(e) {
            Object.assign(r, {
                anonymousTracking: e || !0
            }), Ge = !!r.anonymousTracking, (He = B(r)) || T()
        }, ge.clearUserData = A, ge.setDebug = function(e) {
            he = (!!e).valueOf()
        }, ht = {}, "object" === bt(mt = ge) && null !== mt && Object.getOwnPropertyNames(mt).forEach(function(e, t, n) {
            "function" == typeof mt[e] && (ht[e] = Mn(mt[e]))
        }), ve = ht, he ? ge : ve
    }

    function M(e, n) {
        function r() {
            var e;
            if (!i.hasLoaded)
                for (i.hasLoaded = !0, e = 0; e < i.registeredOnLoadHandlers.length; e++) i.registeredOnLoadHandlers[e]();
            return !0
        }
        var t, o = document,
            a = window,
            i = {
                outQueues: [],
                bufferFlushers: [],
                expireDateTime: null,
                hasLoaded: !1,
                registeredOnLoadHandlers: [],
                pageViewId: null
            };
        return a.Snowplow = {
            getTrackerCf: function(e) {
                var t = new z(n, "", "js-2.16.2", i, {});
                return t.setCollectorCf(e), t
            },
            getTrackerUrl: function(e) {
                var t = new z(n, "", "js-2.16.2", i, {});
                return t.setCollectorUrl(e), t
            },
            getAsyncTracker: function() {
                return new z(n, "", "js-2.16.2", i, {})
            }
        }, jt(a, "beforeunload", function() {
            if (Ft(i.bufferFlushers, function(e) {
                    e()
                }), i.expireDateTime)
                do {
                    var e = new Date;
                    if (0 === i.outQueues.filter(function(e) {
                            return 0 < e.length
                        }).length) break
                } while (e.getTime() < i.expireDateTime)
        }, !1), o.addEventListener ? jt(o, "DOMContentLoaded", function e() {
            o.removeEventListener("DOMContentLoaded", e, !1), r()
        }) : o.attachEvent && (o.attachEvent("onreadystatechange", function e() {
            "complete" === o.readyState && (o.detachEvent("onreadystatechange", e), r())
        }), o.documentElement.doScroll && a === a.top && function t() {
            if (!i.hasLoaded) {
                try {
                    o.documentElement.doScroll("left")
                } catch (e) {
                    return void setTimeout(t, 0)
                }
                r()
            }
        }()), /WebKit/.test(navigator.userAgent) && (t = setInterval(function() {
            (i.hasLoaded || /loaded|complete/.test(o.readyState)) && (clearInterval(t), r())
        }, 10)), jt(a, "load", r, !1), new l(z, "js-2.16.2", i, e, n)
    }

    function B(e) {
        return te(e) && "[object Arguments]" == ee(e)
    }

    function U() {
        return !1
    }

    function F(e, t) {
        var n = bt(e);
        return !!(t = null == t ? 9007199254740991 : t) && ("number" == n || "symbol" != n && se.test(e)) && -1 < e && 0 == e % 1 && e < t
    }

    function V(e) {
        return "number" == typeof e && -1 < e && 0 == e % 1 && e <= 9007199254740991
    }
    var R = function(e, t, n) {
            for (var r = -1, o = Object(e), a = (n = n(e)).length; a--;) {
                var i = n[++r];
                if (!1 === t(o[i], i, o)) break
            }
            return e
        },
        H = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
        G = "object" == bt(H) && H && H.Object === Object && H,
        q = "object" == ("undefined" == typeof self ? "undefined" : bt(self)) && self && self.Object === Object && self,
        J = G || q || Function("return this")(),
        Y = J.Symbol,
        W = Object.prototype,
        K = W.hasOwnProperty,
        $ = W.toString,
        X = Y ? Y.toStringTag : void 0,
        Q = Object.prototype.toString,
        Z = Y ? Y.toStringTag : void 0,
        ee = function(e) {
            if (null == e) e = void 0 === e ? "[object Undefined]" : "[object Null]";
            else if (Z && Z in Object(e)) {
                var t = K.call(e, X),
                    n = e[X];
                try {
                    var r = !(e[X] = void 0)
                } catch (e) {}
                var o = $.call(e);
                r && (t ? e[X] = n : delete e[X]), e = o
            } else e = Q.call(e);
            return e
        },
        te = function(e) {
            return null != e && "object" == bt(e)
        },
        ne = Object.prototype,
        re = ne.hasOwnProperty,
        oe = ne.propertyIsEnumerable,
        ae = B(function() {
            return arguments
        }()) ? B : function(e) {
            return te(e) && re.call(e, "callee") && !oe.call(e, "callee")
        },
        ie = Array.isArray,
        ce = e(function(e, t) {
            var n = (t = t && !t.nodeType && t) && e && !e.nodeType && e;
            t = n && n.exports === t ? J.Buffer : void 0, e.exports = (t ? t.isBuffer : void 0) || U
        }),
        se = /^(?:0|[1-9]\d*)$/,
        ue = {};
    ue["[object Float32Array]"] = ue["[object Float64Array]"] = ue["[object Int8Array]"] = ue["[object Int16Array]"] = ue["[object Int32Array]"] = ue["[object Uint8Array]"] = ue["[object Uint8ClampedArray]"] = ue["[object Uint16Array]"] = ue["[object Uint32Array]"] = !0, ue["[object Arguments]"] = ue["[object Array]"] = ue["[object ArrayBuffer]"] = ue["[object Boolean]"] = ue["[object DataView]"] = ue["[object Date]"] = ue["[object Error]"] = ue["[object Function]"] = ue["[object Map]"] = ue["[object Number]"] = ue["[object Object]"] = ue["[object RegExp]"] = ue["[object Set]"] = ue["[object String]"] = ue["[object WeakMap]"] = !1;

    function le(t, n) {
        return function(e) {
            return t(n(e))
        }
    }

    function fe(e) {
        return !!Te(e) && ("[object Function]" == (e = ee(e)) || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e)
    }

    function de(e) {
        return null != e && V(e.length) && !fe(e)
    }

    function pe(e, t) {
        return e && R(e, t, Ce)
    }

    function me(e) {
        return e
    }

    function he(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length, o = 0, a = []; ++n < r;) {
            var i = e[n];
            t(i, n, e) && (a[o++] = i)
        }
        return a
    }

    function ge(e, t) {
        return e === t || e != e && t != t
    }

    function ve(e, t) {
        for (var n = e.length; n--;)
            if (ge(e[n][0], t)) return n;
        return -1
    }
    var ye, be, we = e(function(e, t) {
            var n = (t = (n = t && !t.nodeType && t) && e && !e.nodeType && e) && t.exports === n && G.process;
            e: {
                try {
                    var r = t && t.require && t.require("util").types;
                    if (r) {
                        var o = r;
                        break e
                    }
                    o = n && n.binding && n.binding("util");
                    break e
                } catch (e) {}
                o = void 0
            }
            e.exports = o
        }),
        ke = we && we.isTypedArray,
        Ae = ke ? (be = ke, function(e) {
            return be(e)
        }) : function(e) {
            return te(e) && V(e.length) && !!ue[ee(e)]
        },
        _e = Object.prototype.hasOwnProperty,
        je = Object.prototype,
        Se = le(Object.keys, Object),
        Oe = Object.prototype.hasOwnProperty,
        Te = function(e) {
            var t = bt(e);
            return null != e && ("object" == t || "function" == t)
        },
        Ce = function(e) {
            if (de(e)) {
                var t = ie(e),
                    n = !t && ae(e),
                    r = !t && !n && ce(e),
                    o = !t && !n && !r && Ae(e);
                if (t = t || n || r || o) {
                    n = e.length;
                    for (var a = String, i = -1, c = Array(n); ++i < n;) c[i] = a(i);
                    n = c
                } else n = [];
                for (var s in a = n.length, e) !_e.call(e, s) || t && ("length" == s || r && ("offset" == s || "parent" == s) || o && ("buffer" == s || "byteLength" == s || "byteOffset" == s) || F(s, a)) || n.push(s);
                e = n
            } else if (e === ("function" == typeof(s = e && e.constructor) && s.prototype || je)) {
                for (r in s = [], Object(e)) Oe.call(e, r) && "constructor" != r && s.push(r);
                e = s
            } else e = Se(e);
            return e
        },
        Pe = (ye = pe, function(e, t) {
            if (null == e) return e;
            if (!de(e)) return ye(e, t);
            for (var n = e.length, r = -1, o = Object(e); ++r < n && !1 !== t(o[r], r, o););
            return e
        }),
        Ft = function(e, t) {
            return (ie(e) ? function(e, t) {
                for (var n = -1, r = null == e ? 0 : e.length; ++n < r && !1 !== t(e[n], n, e););
                return e
            } : Pe)(e, "function" == typeof t ? t : me)
        },
        xe = Array.prototype.splice;
    t.prototype.clear = function() {
        this.__data__ = [], this.size = 0
    }, t.prototype.delete = function(e) {
        var t = this.__data__;
        return !((e = ve(t, e)) < 0) && (e == t.length - 1 ? t.pop() : xe.call(t, e, 1), --this.size, !0)
    }, t.prototype.get = function(e) {
        var t = this.__data__;
        return (e = ve(t, e)) < 0 ? void 0 : t[e][1]
    }, t.prototype.has = function(e) {
        return -1 < ve(this.__data__, e)
    }, t.prototype.set = function(e, t) {
        var n = this.__data__,
            r = ve(n, e);
        return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this
    };

    function Ie(e) {
        if (null == e) return "";
        try {
            return Me.call(e)
        } catch (e) {}
        return e + ""
    }

    function De(e, t) {
        return e = null == e ? void 0 : e[t], !Te(e) || ze && ze in e || !(fe(e) ? Ue : Be).test(Ie(e)) ? void 0 : e
    }
    var Ee, Le = t,
        Ne = J["__core-js_shared__"],
        ze = (Ee = /[^.]+$/.exec(Ne && Ne.keys && Ne.keys.IE_PROTO || "")) ? "Symbol(src)_1." + Ee : "",
        Me = Function.prototype.toString,
        Be = /^\[object .+?Constructor\]$/,
        Ue = RegExp("^" + Function.prototype.toString.call(Object.prototype.hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        Fe = De(J, "Map"),
        Ve = De(Object, "create"),
        Re = Object.prototype.hasOwnProperty,
        He = Object.prototype.hasOwnProperty;
    n.prototype.clear = function() {
        this.__data__ = Ve ? Ve(null) : {}, this.size = 0
    }, n.prototype.delete = function(e) {
        return e = this.has(e) && delete this.__data__[e], this.size -= e ? 1 : 0, e
    }, n.prototype.get = function(e) {
        var t = this.__data__;
        return Ve ? "__lodash_hash_undefined__" === (e = t[e]) ? void 0 : e : Re.call(t, e) ? t[e] : void 0
    }, n.prototype.has = function(e) {
        var t = this.__data__;
        return Ve ? void 0 !== t[e] : He.call(t, e)
    }, n.prototype.set = function(e, t) {
        var n = this.__data__;
        return this.size += this.has(e) ? 0 : 1, n[e] = Ve && void 0 === t ? "__lodash_hash_undefined__" : t, this
    };

    function Ge(e, t) {
        e = e.__data__;
        var n = bt(t);
        return ("string" == n || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== t : null === t) ? e["string" == typeof t ? "string" : "hash"] : e.map
    }
    o.prototype.clear = function() {
        this.size = 0, this.__data__ = {
            hash: new n,
            map: new(Fe || Le),
            string: new n
        }
    }, o.prototype.delete = function(e) {
        return e = Ge(this, e).delete(e), this.size -= e ? 1 : 0, e
    }, o.prototype.get = function(e) {
        return Ge(this, e).get(e)
    }, o.prototype.has = function(e) {
        return Ge(this, e).has(e)
    }, o.prototype.set = function(e, t) {
        var n = Ge(this, e),
            r = n.size;
        return n.set(e, t), this.size += n.size == r ? 0 : 1, this
    };
    var qe = o;
    i.prototype.clear = function() {
        this.__data__ = new Le, this.size = 0
    }, i.prototype.delete = function(e) {
        var t = this.__data__;
        return e = t.delete(e), this.size = t.size, e
    }, i.prototype.get = function(e) {
        return this.__data__.get(e)
    }, i.prototype.has = function(e) {
        return this.__data__.has(e)
    }, i.prototype.set = function(e, t) {
        var n = this.__data__;
        if (n instanceof Le) {
            var r = n.__data__;
            if (!Fe || r.length < 199) return r.push([e, t]), this.size = ++n.size, this;
            n = this.__data__ = new qe(r)
        }
        return n.set(e, t), this.size = n.size, this
    };
    var Je = i;
    m.prototype.add = m.prototype.push = function(e) {
        return this.__data__.set(e, "__lodash_hash_undefined__"), this
    }, m.prototype.has = function(e) {
        return this.__data__.has(e)
    };

    function Ye(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
            if (t(e[n], n, e)) return 1
    }

    function We(e) {
        var n = -1,
            r = Array(e.size);
        return e.forEach(function(e, t) {
            r[++n] = [t, e]
        }), r
    }

    function Ke(e) {
        var t = -1,
            n = Array(e.size);
        return e.forEach(function(e) {
            n[++t] = e
        }), n
    }
    var $e = function(e, t, n, r, o, a) {
            var i = 1 & n,
                c = e.length,
                s = t.length;
            if (c != s && !(i && c < s)) return !1;
            s = a.get(e);
            var u = a.get(t);
            if (s && u) return s == t && u == e;
            s = -1, u = !0;
            var l = 2 & n ? new m : void 0;
            for (a.set(e, t), a.set(t, e); ++s < c;) {
                var f, d = e[s],
                    p = t[s];
                if (r && (f = i ? r(p, d, s, t, e, a) : r(d, p, s, e, t, a)), void 0 !== f) {
                    if (f) continue;
                    u = !1;
                    break
                }
                if (l) {
                    if (!Ye(t, function(e, t) {
                            return !l.has(t) && (d === e || o(d, e, n, r, a)) && l.push(t)
                        })) {
                        u = !1;
                        break
                    }
                } else if (d !== p && !o(d, p, n, r, a)) {
                    u = !1;
                    break
                }
            }
            return a.delete(e), a.delete(t), u
        },
        Xe = J.Uint8Array,
        Qe = Y ? Y.prototype : void 0,
        Ze = Qe ? Qe.valueOf : void 0,
        et = function(e, t, n, r, o, a, i) {
            switch (n) {
                case "[object DataView]":
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
                    e = e.buffer, t = t.buffer;
                case "[object ArrayBuffer]":
                    if (e.byteLength != t.byteLength || !a(new Xe(e), new Xe(t))) break;
                    return !0;
                case "[object Boolean]":
                case "[object Date]":
                case "[object Number]":
                    return ge(+e, +t);
                case "[object Error]":
                    return e.name == t.name && e.message == t.message;
                case "[object RegExp]":
                case "[object String]":
                    return e == t + "";
                case "[object Map]":
                    var c = We;
                case "[object Set]":
                    if (c = c || Ke, e.size != t.size && !(1 & r)) break;
                    return (n = i.get(e)) ? n == t : (r |= 2, i.set(e, t), t = $e(c(e), c(t), r, o, a, i), i.delete(e), t);
                case "[object Symbol]":
                    if (Ze) return Ze.call(e) == Ze.call(t)
            }
            return !1
        },
        tt = function(e, t, n) {
            if (t = t(e), !ie(e)) {
                e = n(e), n = -1;
                for (var r = e.length, o = t.length; ++n < r;) t[o + n] = e[n]
            }
            return t
        },
        nt = Object.prototype.propertyIsEnumerable,
        rt = Object.getOwnPropertySymbols,
        ot = rt ? function(t) {
            return null == t ? [] : (t = Object(t), he(rt(t), function(e) {
                return nt.call(t, e)
            }))
        } : function() {
            return []
        },
        at = Object.prototype.hasOwnProperty,
        it = De(J, "DataView"),
        ct = De(J, "Promise"),
        st = De(J, "Set"),
        ut = De(J, "WeakMap"),
        lt = Ie(it),
        ft = Ie(Fe),
        dt = Ie(ct),
        pt = Ie(st),
        mt = Ie(ut),
        ht = ee;
    (it && "[object DataView]" != ht(new it(new ArrayBuffer(1))) || Fe && "[object Map]" != ht(new Fe) || ct && "[object Promise]" != ht(ct.resolve()) || st && "[object Set]" != ht(new st) || ut && "[object WeakMap]" != ht(new ut)) && (ht = function(e) {
        var t = ee(e);
        if (e = (e = "[object Object]" == t ? e.constructor : void 0) ? Ie(e) : "") switch (e) {
            case lt:
                return "[object DataView]";
            case ft:
                return "[object Map]";
            case dt:
                return "[object Promise]";
            case pt:
                return "[object Set]";
            case mt:
                return "[object WeakMap]"
        }
        return t
    });

    function gt(t, n) {
        return function(e) {
            return null != e && (e[t] === n && (void 0 !== n || t in Object(e)))
        }
    }

    function vt(t) {
        var n = function(e) {
            for (var t = Ce(e), n = t.length; n--;) {
                var r = t[n],
                    o = e[r];
                t[n] = [r, o, o == o && !Te(o)]
            }
            return t
        }(t);
        return 1 == n.length && n[0][2] ? gt(n[0][0], n[0][1]) : function(e) {
            return e === t || function(e, t, n, r) {
                var o = n.length,
                    a = o,
                    i = !r;
                if (null == e) return !a;
                for (e = Object(e); o--;) {
                    var c = n[o];
                    if (i && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1
                }
                for (; ++o < a;) {
                    var s = (c = n[o])[0],
                        u = e[s],
                        l = c[1];
                    if (i && c[2]) {
                        if (void 0 === u && !(s in e)) return !1
                    } else {
                        var f, c = new Je;
                        if (r && (f = r(u, l, s, e, t, c)), void 0 === f ? !Ht(l, u, 3, r, c) : !f) return !1
                    }
                }
                return !0
            }(e, t, n)
        }
    }

    function yt(e, t) {
        if (!ie(e)) {
            var n = bt(e);
            return !("number" != n && "symbol" != n && "boolean" != n && null != e && !Gt(e)) || (Jt.test(e) || !qt.test(e) || null != t && e in Object(t))
        }
    }
    var Vt = ht,
        Rt = Object.prototype.hasOwnProperty,
        Ht = function e(t, n, r, o, a) {
            if (t === n) n = !0;
            else if (null == t || null == n || !te(t) && !te(n)) n = t != t && n != n;
            else e: {
                var i = ie(t),
                    c = ie(n),
                    s = i ? "[object Array]" : Vt(t),
                    u = c ? "[object Array]" : Vt(n),
                    l = "[object Object]" == (s = "[object Arguments]" == s ? "[object Object]" : s),
                    c = "[object Object]" == (u = "[object Arguments]" == u ? "[object Object]" : u);
                if ((u = s == u) && ce(t)) {
                    if (!ce(n)) {
                        n = !1;
                        break e
                    }
                    l = !(i = !0)
                }
                if (u && !l) a = a || new Je,
                n = i || Ae(t) ? $e(t, n, r, o, e, a) : et(t, n, s, r, o, e, a);
                else {
                    if (!(1 & r) && (i = l && Rt.call(t, "__wrapped__"), s = c && Rt.call(n, "__wrapped__"), i || s)) {
                        n = e(t = i ? t.value() : t, n = s ? n.value() : n, r, o, a = a || new Je);
                        break e
                    }
                    if (u) t: if (a = a || new Je, i = 1 & r, s = tt(t, Ce, ot), c = s.length, u = tt(n, Ce, ot).length, c == u || i) {
                        for (u = c; u--;) {
                            var f = s[u];
                            if (!(i ? f in n : at.call(n, f))) {
                                n = !1;
                                break t
                            }
                        }
                        if (l = a.get(t), f = a.get(n), l && f) n = l == n && f == t;
                        else {
                            l = !0, a.set(t, n), a.set(n, t);
                            for (var d = i; ++u < c;) {
                                var p, m = t[f = s[u]],
                                    h = n[f];
                                if (o && (p = i ? o(h, m, f, n, t, a) : o(m, h, f, t, n, a)), void 0 === p ? m !== h && !e(m, h, r, o, a) : !p) {
                                    l = !1;
                                    break
                                }
                                d = d || "constructor" == f
                            }
                            l && !d && (r = t.constructor) != (o = n.constructor) && "constructor" in t && "constructor" in n && !("function" == typeof r && r instanceof r && "function" == typeof o && o instanceof o) && (l = !1), a.delete(t), a.delete(n), n = l
                        }
                    } else n = !1;
                    else n = !1
                }
            }
            return n
        },
        Gt = function(e) {
            return "symbol" == bt(e) || te(e) && "[object Symbol]" == ee(e)
        },
        qt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        Jt = /^\w*$/;
    s.Cache = qe;
    for (var Yt, Wt, Kt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, $t = /\\(\\)?/g, Xt = (Wt = (Yt = s(Yt = function(e) {
            var o = [];
            return 46 === e.charCodeAt(0) && o.push(""), e.replace(Kt, function(e, t, n, r) {
                o.push(n ? r.replace($t, "$1") : t || e)
            }), o
        }, function(e) {
            return 500 === Wt.size && Wt.clear(), e
        })).cache, Yt), Qt = function(e, t) {
            for (var n = -1, r = null == e ? 0 : e.length, o = Array(r); ++n < r;) o[n] = t(e[n], n, e);
            return o
        }, Zt = 1 / 0, en = Y ? Y.prototype : void 0, tn = en ? en.toString : void 0, nn = function(e, t) {
            return ie(e) ? e : yt(e, t) ? [e] : Xt(null == e ? "" : u(e))
        }, rn = function(e) {
            if ("string" == typeof e || Gt(e)) return e;
            var t = e + "";
            return "0" == t && 1 / e == -1 / 0 ? "-0" : t
        }, on = function(e, t) {
            for (var n = 0, r = (t = nn(t, e)).length; null != e && n < r;) e = e[rn(t[n++])];
            return n && n == r ? e : void 0
        }, an = function(e, t, n) {
            return void 0 === (e = null == e ? void 0 : on(e, t)) ? n : e
        }, cn = function(e, t) {
            return null != e && t in Object(e)
        }, sn = function(e, t, n) {
            for (var r = -1, o = (t = nn(t, e)).length, a = !1; ++r < o;) {
                var i = rn(t[r]);
                if (!(a = null != e && n(e, i))) break;
                e = e[i]
            }
            return a || ++r != o ? a : !!(o = null == e ? 0 : e.length) && V(o) && F(i, o) && (ie(e) || ae(e))
        }, un = function(e) {
            return "function" == typeof e ? e : null == e ? me : "object" == bt(e) ? ie(e) ? (r = e[0], o = e[1], yt(r) && o == o && !Te(o) ? gt(rn(r), o) : function(e) {
                var t = an(e, r);
                return void 0 === t && t === o ? null != e && sn(e, r, cn) : Ht(o, t, 3)
            }) : vt(e) : yt(e) ? (n = rn(e), function(e) {
                return null == e ? void 0 : e[n]
            }) : (t = e, function(e) {
                return on(e, t)
            });
            var t, n, r, o
        }, ln = function(e, t) {
            return (ie(e) ? he : function(e, r) {
                var o = [];
                return Pe(e, function(e, t, n) {
                    r(e, t, n) && o.push(e)
                }), o
            })(e, un(t))
        }, fn = function(e) {
            return "string" == typeof e || !ie(e) && te(e) && "[object String]" == ee(e)
        }, dn = function(e, t) {
            return (ie(e) ? Qt : function(e, r) {
                var o = -1,
                    a = de(e) ? Array(e.length) : [];
                return Pe(e, function(e, t, n) {
                    a[++o] = r(e, t, n)
                }), a
            })(e, un(t))
        }, pn = window, mn = document, hn = window.localStorage, gn = window.sessionStorage, vn = /^\s+|\s+$/g, yn = /^[-+]0x[0-9a-f]+$/i, bn = /^0b[01]+$/i, wn = /^0o[0-7]+$/i, kn = parseInt, An = function(e) {
            var t = (e = e ? (e = function(e) {
                if ("number" == typeof e) return e;
                if (Gt(e)) return NaN;
                if (Te(e) && (e = "function" == typeof e.valueOf ? e.valueOf() : e, e = Te(e) ? e + "" : e), "string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(vn, "");
                var t = bn.test(e);
                return t || wn.test(e) ? kn(e.slice(2), t ? 2 : 8) : yn.test(e) ? NaN : +e
            }(e)) === 1 / 0 || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0) % 1;
            return e == e ? t ? e - t : e : 0
        }, _n = e(function(e, t) {
            function r(e) {
                return null !== (e = -e.getTimezoneOffset()) ? e : 0
            }

            function o(e, t, n) {
                var r = new Date;
                return void 0 !== e && r.setFullYear(e), r.setMonth(t), r.setDate(n), r
            }
            var i;
            (i = {
                determine: function() {
                    var e = r(o(void 0, 0, 2)),
                        t = r(o(void 0, 5, 2)),
                        n = e - t;
                    return new i.TimeZone(i.olson.timezones[n < 0 ? e + ",1" : 0 < n ? t + ",1,s" : e + ",0"])
                },
                date_is_dst: function(e) {
                    var t = 7 < e.getMonth(),
                        n = r(o(e.getFullYear(), t ? 5 : 0, 2));
                    return e = n - r(e), n < 0 || t ? 0 !== e : e < 0
                },
                dst_start_for: function(e) {
                    var t = new Date(2010, 6, 15, 1, 0, 0, 0);
                    return {
                        "America/Denver": new Date(2011, 2, 13, 3, 0, 0, 0),
                        "America/Mazatlan": new Date(2011, 3, 3, 3, 0, 0, 0),
                        "America/Chicago": new Date(2011, 2, 13, 3, 0, 0, 0),
                        "America/Mexico_City": new Date(2011, 3, 3, 3, 0, 0, 0),
                        "America/Asuncion": new Date(2012, 9, 7, 3, 0, 0, 0),
                        "America/Santiago": new Date(2012, 9, 3, 3, 0, 0, 0),
                        "America/Campo_Grande": new Date(2012, 9, 21, 5, 0, 0, 0),
                        "America/Montevideo": new Date(2011, 9, 2, 3, 0, 0, 0),
                        "America/Sao_Paulo": new Date(2011, 9, 16, 5, 0, 0, 0),
                        "America/Los_Angeles": new Date(2011, 2, 13, 8, 0, 0, 0),
                        "America/Santa_Isabel": new Date(2011, 3, 5, 8, 0, 0, 0),
                        "America/Havana": new Date(2012, 2, 10, 2, 0, 0, 0),
                        "America/New_York": new Date(2012, 2, 10, 7, 0, 0, 0),
                        "Europe/Helsinki": new Date(2013, 2, 31, 5, 0, 0, 0),
                        "Pacific/Auckland": new Date(2011, 8, 26, 7, 0, 0, 0),
                        "America/Halifax": new Date(2011, 2, 13, 6, 0, 0, 0),
                        "America/Goose_Bay": new Date(2011, 2, 13, 2, 1, 0, 0),
                        "America/Miquelon": new Date(2011, 2, 13, 5, 0, 0, 0),
                        "America/Godthab": new Date(2011, 2, 27, 1, 0, 0, 0),
                        "Europe/Moscow": t,
                        "Asia/Amman": new Date(2013, 2, 29, 1, 0, 0, 0),
                        "Asia/Beirut": new Date(2013, 2, 31, 2, 0, 0, 0),
                        "Asia/Damascus": new Date(2013, 3, 6, 2, 0, 0, 0),
                        "Asia/Jerusalem": new Date(2013, 2, 29, 5, 0, 0, 0),
                        "Asia/Yekaterinburg": t,
                        "Asia/Omsk": t,
                        "Asia/Krasnoyarsk": t,
                        "Asia/Irkutsk": t,
                        "Asia/Yakutsk": t,
                        "Asia/Vladivostok": t,
                        "Asia/Baku": new Date(2013, 2, 31, 4, 0, 0),
                        "Asia/Yerevan": new Date(2013, 2, 31, 3, 0, 0),
                        "Asia/Kamchatka": t,
                        "Asia/Gaza": new Date(2010, 2, 27, 4, 0, 0),
                        "Africa/Cairo": new Date(2010, 4, 1, 3, 0, 0),
                        "Europe/Minsk": t,
                        "Pacific/Apia": new Date(2010, 10, 1, 1, 0, 0, 0),
                        "Pacific/Fiji": new Date(2010, 11, 1, 0, 0, 0),
                        "Australia/Perth": new Date(2008, 10, 1, 1, 0, 0, 0)
                    } [e]
                },
                TimeZone: function(e) {
                    var o = {
                            "America/Denver": ["America/Denver", "America/Mazatlan"],
                            "America/Chicago": ["America/Chicago", "America/Mexico_City"],
                            "America/Santiago": ["America/Santiago", "America/Asuncion", "America/Campo_Grande"],
                            "America/Montevideo": ["America/Montevideo", "America/Sao_Paulo"],
                            "Asia/Beirut": ["Asia/Amman", "Asia/Jerusalem", "Asia/Beirut", "Europe/Helsinki", "Asia/Damascus"],
                            "Pacific/Auckland": ["Pacific/Auckland", "Pacific/Fiji"],
                            "America/Los_Angeles": ["America/Los_Angeles", "America/Santa_Isabel"],
                            "America/New_York": ["America/Havana", "America/New_York"],
                            "America/Halifax": ["America/Goose_Bay", "America/Halifax"],
                            "America/Godthab": ["America/Miquelon", "America/Godthab"],
                            "Asia/Dubai": ["Europe/Moscow"],
                            "Asia/Dhaka": ["Asia/Yekaterinburg"],
                            "Asia/Jakarta": ["Asia/Omsk"],
                            "Asia/Shanghai": ["Asia/Krasnoyarsk", "Australia/Perth"],
                            "Asia/Tokyo": ["Asia/Irkutsk"],
                            "Australia/Brisbane": ["Asia/Yakutsk"],
                            "Pacific/Noumea": ["Asia/Vladivostok"],
                            "Pacific/Tarawa": ["Asia/Kamchatka", "Pacific/Fiji"],
                            "Pacific/Tongatapu": ["Pacific/Apia"],
                            "Asia/Baghdad": ["Europe/Minsk"],
                            "Asia/Baku": ["Asia/Yerevan", "Asia/Baku"],
                            "Africa/Johannesburg": ["Asia/Gaza", "Africa/Cairo"]
                        },
                        a = e;
                    return e = function() {
                        for (var e, t = o[a], n = t.length, r = 0; r < n; r += 1)
                            if (e = t[r], i.date_is_dst(i.dst_start_for(e))) {
                                a = e;
                                break
                            }
                    }, void 0 !== o[a] && e(), {
                        name: function() {
                            return a
                        }
                    }
                },
                olson: {}
            }).olson.timezones = {
                "-720,0": "Pacific/Majuro",
                "-660,0": "Pacific/Pago_Pago",
                "-600,1": "America/Adak",
                "-600,0": "Pacific/Honolulu",
                "-570,0": "Pacific/Marquesas",
                "-540,0": "Pacific/Gambier",
                "-540,1": "America/Anchorage",
                "-480,1": "America/Los_Angeles",
                "-480,0": "Pacific/Pitcairn",
                "-420,0": "America/Phoenix",
                "-420,1": "America/Denver",
                "-360,0": "America/Guatemala",
                "-360,1": "America/Chicago",
                "-360,1,s": "Pacific/Easter",
                "-300,0": "America/Bogota",
                "-300,1": "America/New_York",
                "-270,0": "America/Caracas",
                "-240,1": "America/Halifax",
                "-240,0": "America/Santo_Domingo",
                "-240,1,s": "America/Santiago",
                "-210,1": "America/St_Johns",
                "-180,1": "America/Godthab",
                "-180,0": "America/Argentina/Buenos_Aires",
                "-180,1,s": "America/Montevideo",
                "-120,0": "America/Noronha",
                "-120,1": "America/Noronha",
                "-60,1": "Atlantic/Azores",
                "-60,0": "Atlantic/Cape_Verde",
                "0,0": "UTC",
                "0,1": "Europe/London",
                "60,1": "Europe/Berlin",
                "60,0": "Africa/Lagos",
                "60,1,s": "Africa/Windhoek",
                "120,1": "Asia/Beirut",
                "120,0": "Africa/Johannesburg",
                "180,0": "Asia/Baghdad",
                "180,1": "Europe/Moscow",
                "210,1": "Asia/Tehran",
                "240,0": "Asia/Dubai",
                "240,1": "Asia/Baku",
                "270,0": "Asia/Kabul",
                "300,1": "Asia/Yekaterinburg",
                "300,0": "Asia/Karachi",
                "330,0": "Asia/Kolkata",
                "345,0": "Asia/Kathmandu",
                "360,0": "Asia/Dhaka",
                "360,1": "Asia/Omsk",
                "390,0": "Asia/Rangoon",
                "420,1": "Asia/Krasnoyarsk",
                "420,0": "Asia/Jakarta",
                "480,0": "Asia/Shanghai",
                "480,1": "Asia/Irkutsk",
                "525,0": "Australia/Eucla",
                "525,1,s": "Australia/Eucla",
                "540,1": "Asia/Yakutsk",
                "540,0": "Asia/Tokyo",
                "570,0": "Australia/Darwin",
                "570,1,s": "Australia/Adelaide",
                "600,0": "Australia/Brisbane",
                "600,1": "Asia/Vladivostok",
                "600,1,s": "Australia/Sydney",
                "630,1,s": "Australia/Lord_Howe",
                "660,1": "Asia/Kamchatka",
                "660,0": "Pacific/Noumea",
                "690,0": "Pacific/Norfolk",
                "720,1,s": "Pacific/Auckland",
                "720,0": "Pacific/Tarawa",
                "765,1,s": "Pacific/Chatham",
                "780,0": "Pacific/Tongatapu",
                "780,1,s": "Pacific/Apia",
                "840,0": "Pacific/Kiritimati"
            }, t.jstz = i
        }), jn = window, Sn = navigator, On = screen, Tn = document, Cn = e(function(e) {
            var n;
            n = {
                rotl: function(e, t) {
                    return e << t | e >>> 32 - t
                },
                rotr: function(e, t) {
                    return e << 32 - t | e >>> t
                },
                endian: function(e) {
                    if (e.constructor == Number) return 16711935 & n.rotl(e, 8) | 4278255360 & n.rotl(e, 24);
                    for (var t = 0; t < e.length; t++) e[t] = n.endian(e[t]);
                    return e
                },
                randomBytes: function(e) {
                    for (var t = []; 0 < e; e--) t.push(Math.floor(256 * Math.random()));
                    return t
                },
                bytesToWords: function(e) {
                    for (var t = [], n = 0, r = 0; n < e.length; n++, r += 8) t[r >>> 5] |= e[n] << 24 - r % 32;
                    return t
                },
                wordsToBytes: function(e) {
                    for (var t = [], n = 0; n < 32 * e.length; n += 8) t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
                    return t
                },
                bytesToHex: function(e) {
                    for (var t = [], n = 0; n < e.length; n++) t.push((e[n] >>> 4).toString(16)), t.push((15 & e[n]).toString(16));
                    return t.join("")
                },
                hexToBytes: function(e) {
                    for (var t = [], n = 0; n < e.length; n += 2) t.push(parseInt(e.substr(n, 2), 16));
                    return t
                },
                bytesToBase64: function(e) {
                    for (var t = [], n = 0; n < e.length; n += 3)
                        for (var r = e[n] << 16 | e[n + 1] << 8 | e[n + 2], o = 0; o < 4; o++) 8 * n + 6 * o <= 8 * e.length ? t.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(r >>> 6 * (3 - o) & 63)) : t.push("=");
                    return t.join("")
                },
                base64ToBytes: function(e) {
                    e = e.replace(/[^A-Z0-9+\/]/gi, "");
                    for (var t = [], n = 0, r = 0; n < e.length; r = ++n % 4) 0 != r && t.push(("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(e.charAt(n - 1)) & Math.pow(2, -2 * r + 8) - 1) << 2 * r | "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(e.charAt(n)) >>> 6 - 2 * r);
                    return t
                }
            }, e.exports = n
        }), Pn = {
            utf8: {
                stringToBytes: function(e) {
                    return Pn.bin.stringToBytes(unescape(encodeURIComponent(e)))
                },
                bytesToString: function(e) {
                    return decodeURIComponent(escape(Pn.bin.bytesToString(e)))
                }
            },
            bin: {
                stringToBytes: function(e) {
                    for (var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n));
                    return t
                },
                bytesToString: function(e) {
                    for (var t = [], n = 0; n < e.length; n++) t.push(String.fromCharCode(e[n]));
                    return t.join("")
                }
            }
        }, xn = Pn, In = e(function(e) {
            function t(e, t) {
                return e = Cn.wordsToBytes(function(e) {
                    e.constructor == String && (e = h.stringToBytes(e));
                    var t = Cn.bytesToWords(e),
                        n = 8 * e.length;
                    e = [];
                    var r = 1732584193,
                        o = -271733879,
                        a = -1732584194,
                        i = 271733878,
                        c = -1009589776;
                    for (t[n >> 5] |= 128 << 24 - n % 32, t[15 + (n + 64 >>> 9 << 4)] = n, n = 0; n < t.length; n += 16) {
                        for (var s, u = r, l = o, f = a, d = i, p = c, m = 0; m < 80; m++) {
                            m < 16 ? e[m] = t[n + m] : (s = e[m - 3] ^ e[m - 8] ^ e[m - 14] ^ e[m - 16], e[m] = s << 1 | s >>> 31), s = (r << 5 | r >>> 27) + c + (e[m] >>> 0) + (m < 20 ? 1518500249 + (o & a | ~o & i) : m < 40 ? 1859775393 + (o ^ a ^ i) : m < 60 ? (o & a | o & i | a & i) - 1894007588 : (o ^ a ^ i) - 899497514), c = i, i = a, a = o << 30 | o >>> 2, o = r, r = s
                        }
                        r += u, o += l, a += f, i += d, c += p
                    }
                    return [r, o, a, i, c]
                }(e)), t && t.asBytes ? e : t && t.asString ? n.bytesToString(e) : Cn.bytesToHex(e)
            }
            var h, n;
            h = xn.utf8, n = xn.bin, t._blocksize = 16, t._digestsize = 20, e.exports = t
        }), Dn = Math.max, En = function(e, t, n) {
            var r, o = Object(e);
            return de(e) || (r = un(t), e = Ce(e), t = function(e) {
                return r(o[e], e, o)
            }), -1 < (t = function(e, t, n) {
                var r = null == e ? 0 : e.length;
                if (!r) return -1;
                (n = null == n ? 0 : An(n)) < 0 && (n = Dn(r + n, 0));
                e: {
                    for (t = un(t), r = e.length, n += -1; ++n < r;)
                        if (t(e[n], n, e)) {
                            e = n;
                            break e
                        } e = -1
                }
                return e
            }(e, t, n)) ? o[r ? e[t] : t] : void 0
        }, Ln = window, Nn = function() {
            try {
                var e = De(Object, "defineProperty");
                return e({}, "", {}), e
            } catch (e) {}
        }(), zn = function(e, r) {
            var o = {};
            return r = un(r), pe(e, function(e, t, n) {
                e = r(e, t, n), "__proto__" == t && Nn ? Nn(o, t, {
                    configurable: !0,
                    enumerable: !0,
                    value: e,
                    writable: !0
                }) : o[t] = e
            }), o
        }, Mn = function(e) {
            return function() {
                try {
                    return e.apply(this, arguments)
                } catch (e) {}
            }
        }, Bn = e(function(e) {
            var t, n, r = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
            r ? (t = new Uint8Array(16), e.exports = function() {
                return r(t), t
            }) : (n = Array(16), e.exports = function() {
                for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), n[t] = e >>> ((3 & t) << 3) & 255;
                return n
            })
        }), Un = [], Fn = 0; Fn < 256; ++Fn) Un[Fn] = (Fn + 256).toString(16).substr(1);

    function Vn(e, t) {
        return t = t || 0, [Un[e[t++]], Un[e[t++]], Un[e[t++]], Un[e[t++]], "-", Un[e[t++]], Un[e[t++]], "-", Un[e[t++]], Un[e[t++]], "-", Un[e[t++]], Un[e[t++]], "-", Un[e[t++]], Un[e[t++]], Un[e[t++]], Un[e[t++]], Un[e[t++]], Un[e[t++]]].join("")
    }
    var Rn, Hn, Gn = 0,
        qn = 0,
        Jn = function(e, t, n) {
            if (n = t && n || 0, "string" == typeof e && (t = "binary" === e ? Array(16) : null, e = null), (e = (e = e || {}).random || (e.rng || Bn)())[6] = 15 & e[6] | 64, e[8] = 63 & e[8] | 128, t)
                for (var r = 0; r < 16; ++r) t[n + r] = e[r];
            return t || Vn(e)
        },
        Yn = Jn;
    Yn.v1 = function(e, t, n) {
        n = t && n || 0;
        var r, o = t || [],
            a = (e = e || {}).node || Rn,
            i = void 0 !== e.clockseq ? e.clockseq : Hn;
        null != a && null != i || (r = Bn(), null == a && (a = Rn = [1 | r[0], r[1], r[2], r[3], r[4], r[5]]), null == i && (i = Hn = 16383 & (r[6] << 8 | r[7]))), r = void 0 !== e.msecs ? e.msecs : (new Date).getTime();
        var c = void 0 !== e.nsecs ? e.nsecs : qn + 1,
            s = r - Gn + (c - qn) / 1e4;
        if (s < 0 && void 0 === e.clockseq && (i = i + 1 & 16383), (s < 0 || Gn < r) && void 0 === e.nsecs && (c = 0), 1e4 <= c) throw Error("uuid.v1(): Can't create more than 10M uuids/sec");
        for (Gn = r, Hn = i, e = (1e4 * (268435455 & (r += 122192928e5)) + (qn = c)) % 4294967296, o[n++] = e >>> 24 & 255, o[n++] = e >>> 16 & 255, o[n++] = e >>> 8 & 255, o[n++] = 255 & e, e = r / 4294967296 * 1e4 & 268435455, o[n++] = e >>> 8 & 255, o[n++] = 255 & e, o[n++] = e >>> 24 & 15 | 16, o[n++] = e >>> 16 & 255, o[n++] = i >>> 8 | 128, o[n++] = 255 & i, i = 0; i < 6; ++i) o[n + i] = a[i];
        return t || Vn(o)
    }, Yn.v4 = Jn;

    function Wn(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
            if (!t(e[n], n, e)) return !1;
        return !0
    }

    function Kn(e, r) {
        var o = !0;
        return Pe(e, function(e, t, n) {
            return o = !!r(e, t, n)
        }), o
    }
    var $n, Xn, Qn = Yn,
        Zn = Object.prototype.hasOwnProperty,
        er = function(e, t) {
            return null != e && Zn.call(e, t)
        },
        tr = function(e, t, n) {
            var r, o, a = ie(e) ? Wn : Kn;
            return (o = n) && (o = t, o = !!Te(n) && (!!("number" == (r = bt(o)) ? de(n) && F(o, n.length) : "string" == r && o in n) && ge(n[o], e))), o && (t = void 0), a(e, un(t))
        },
        nr = function(e) {
            for (var t = -1, n = null == e ? 0 : e.length, r = 0, o = []; ++t < n;) {
                var a = e[t];
                a && (o[r++] = a)
            }
            return o
        },
        rr = le(Object.getPrototypeOf, Object),
        or = Function.prototype.toString,
        ar = Object.prototype.hasOwnProperty,
        ir = or.call(Object),
        cr = window;
    cr.GlobalSnowplowNamespace && 0 < cr.GlobalSnowplowNamespace.length ? ($n = cr.GlobalSnowplowNamespace.shift(), (Xn = cr[$n]).q = new M(Xn.q, $n)) : (cr._snaq = cr._snaq || [], cr._snaq = new M(cr._snaq, "_snaq"))
}();
