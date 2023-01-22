/*! jQuery v3.6.3 -ajax,-ajax/jsonp,-ajax/load,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-deprecated/ajax-event-alias,-effects,-effects/Tween,-effects/animatedSelector | (c) OpenJS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";
  var n = [],
    r = Object.getPrototypeOf,
    i = n.slice,
    o = n.flat
      ? function (e) {
          return n.flat.call(e);
        }
      : function (e) {
          return n.concat.apply([], e);
        },
    a = n.push,
    s = n.indexOf,
    u = {},
    l = u.toString,
    c = u.hasOwnProperty,
    f = c.toString,
    d = f.call(Object),
    p = {},
    h = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
    },
    g = function (e) {
      return null != e && e === e.window;
    },
    v = e.document,
    m = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function y(e, t, n) {
    var r,
      i,
      o = (n = n || v).createElement("script");
    if (((o.text = e), t)) for (r in m) (i = t[r] || (t.getAttribute && t.getAttribute(r))) && o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function b(e) {
    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[l.call(e)] || "object" : typeof e;
  }
  var x = "3.6.3 -ajax,-ajax/jsonp,-ajax/load,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-deprecated/ajax-event-alias,-effects,-effects/Tween,-effects/animatedSelector",
    w = function (e, t) {
      return new w.fn.init(e, t);
    };
  function C(e) {
    var t = !!e && "length" in e && e.length,
      n = b(e);
    return !h(e) && !g(e) && ("array" === n || 0 === t || ("number" == typeof t && 0 < t && t - 1 in e));
  }
  (w.fn = w.prototype =
    {
      jquery: x,
      constructor: w,
      length: 0,
      toArray: function () {
        return i.call(this);
      },
      get: function (e) {
        return null == e ? i.call(this) : e < 0 ? this[e + this.length] : this[e];
      },
      pushStack: function (e) {
        var t = w.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return w.each(this, e);
      },
      map: function (e) {
        return this.pushStack(
          w.map(this, function (t, n) {
            return e.call(t, n, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(i.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          w.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          w.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: a,
      sort: n.sort,
      splice: n.splice,
    }),
    (w.extend = w.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for ("boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++), "object" == typeof a || h(a) || (a = {}), s === u && ((a = this), s--); s < u; s++)
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                "__proto__" !== t &&
                  a !== r &&
                  (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? ((n = a[t]), (o = i && !Array.isArray(n) ? [] : i || w.isPlainObject(n) ? n : {}), (i = !1), (a[t] = w.extend(l, o, r))) : void 0 !== r && (a[t] = r));
        return a;
      }),
    w.extend({
      expando: "jQuery" + (x + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return !(!e || "[object Object]" !== l.call(e) || ((t = r(e)) && ("function" != typeof (n = c.call(t, "constructor") && t.constructor) || f.call(n) !== d)));
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        y(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (C(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
        else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n;
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : s.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          a = 0,
          s = [];
        if (C(e)) for (r = e.length; a < r; a++) null != (i = t(e[a], a, n)) && s.push(i);
        else for (a in e) null != (i = t(e[a], a, n)) && s.push(i);
        return o(s);
      },
      guid: 1,
      support: p,
    }),
    "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
    w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
      u["[object " + t + "]"] = t.toLowerCase();
    });
  var T = (function (e) {
    var t,
      n,
      r,
      i,
      o,
      a,
      s,
      u,
      l,
      c,
      f,
      d,
      p,
      h,
      g,
      v,
      m,
      y,
      b,
      x = "sizzle" + 1 * new Date(),
      w = e.document,
      C = 0,
      T = 0,
      E = ue(),
      S = ue(),
      A = ue(),
      N = ue(),
      k = function (e, t) {
        return e === t && (f = !0), 0;
      },
      D = {}.hasOwnProperty,
      L = [],
      j = L.pop,
      q = L.push,
      O = L.push,
      P = L.slice,
      H = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      R = "[\\x20\\t\\r\\n\\f]",
      B = "(?:\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      M = "\\[" + R + "*(" + B + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + B + "))|)" + R + "*\\]",
      W = ":(" + B + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
      F = new RegExp(R + "+", "g"),
      $ = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
      z = new RegExp("^" + R + "*," + R + "*"),
      _ = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
      U = new RegExp(R + "|>"),
      V = new RegExp(W),
      X = new RegExp("^" + B + "$"),
      Q = {
        ID: new RegExp("^#(" + B + ")"),
        CLASS: new RegExp("^\\.(" + B + ")"),
        TAG: new RegExp("^(" + B + "|[*])"),
        ATTR: new RegExp("^" + M),
        PSEUDO: new RegExp("^" + W),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + I + ")$", "i"),
        needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i"),
      },
      Y = /HTML$/i,
      G = /^(?:input|select|textarea|button)$/i,
      K = /^h\d$/i,
      J = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\([^\\r\\n\\f])", "g"),
      ne = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320));
      },
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function (e, t) {
        return t ? ("\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
      },
      oe = function () {
        d();
      },
      ae = xe(
        function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      O.apply((L = P.call(w.childNodes)), w.childNodes), L[w.childNodes.length].nodeType;
    } catch (t) {
      O = {
        apply: L.length
          ? function (e, t) {
              q.apply(e, P.call(t));
            }
          : function (e, t) {
              for (var n = e.length, r = 0; (e[n++] = t[r++]); );
              e.length = n - 1;
            },
      };
    }
    function se(e, t, r, i) {
      var o,
        s,
        l,
        c,
        f,
        h,
        m,
        y = t && t.ownerDocument,
        w = t ? t.nodeType : 9;
      if (((r = r || []), "string" != typeof e || !e || (1 !== w && 9 !== w && 11 !== w))) return r;
      if (!i && (d(t), (t = t || p), g)) {
        if (11 !== w && (f = Z.exec(e)))
          if ((o = f[1])) {
            if (9 === w) {
              if (!(l = t.getElementById(o))) return r;
              if (l.id === o) return r.push(l), r;
            } else if (y && (l = y.getElementById(o)) && b(t, l) && l.id === o) return r.push(l), r;
          } else {
            if (f[2]) return O.apply(r, t.getElementsByTagName(e)), r;
            if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return O.apply(r, t.getElementsByClassName(o)), r;
          }
        if (n.qsa && !N[e + " "] && (!v || !v.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
          if (((m = e), (y = t), 1 === w && (U.test(e) || _.test(e)))) {
            for (((y = (ee.test(e) && me(t.parentNode)) || t) === t && n.scope) || ((c = t.getAttribute("id")) ? (c = c.replace(re, ie)) : t.setAttribute("id", (c = x))), s = (h = a(e)).length; s--; ) h[s] = (c ? "#" + c : ":scope") + " " + be(h[s]);
            m = h.join(",");
          }
          try {
            if (n.cssSupportsSelector && !CSS.supports("selector(:is(" + m + "))")) throw new Error();
            return O.apply(r, y.querySelectorAll(m)), r;
          } catch (t) {
            N(e, !0);
          } finally {
            c === x && t.removeAttribute("id");
          }
        }
      }
      return u(e.replace($, "$1"), t, r, i);
    }
    function ue() {
      var e = [];
      return function t(n, i) {
        return e.push(n + " ") > r.cacheLength && delete t[e.shift()], (t[n + " "] = i);
      };
    }
    function le(e) {
      return (e[x] = !0), e;
    }
    function ce(e) {
      var t = p.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function fe(e, t) {
      for (var n = e.split("|"), i = n.length; i--; ) r.attrHandle[n[i]] = t;
    }
    function de(e, t) {
      var n = t && e,
        r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function pe(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function he(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    function ge(e) {
      return function (t) {
        return "form" in t
          ? t.parentNode && !1 === t.disabled
            ? "label" in t
              ? "label" in t.parentNode
                ? t.parentNode.disabled === e
                : t.disabled === e
              : t.isDisabled === e || (t.isDisabled !== !e && ae(t) === e)
            : t.disabled === e
          : "label" in t && t.disabled === e;
      };
    }
    function ve(e) {
      return le(function (t) {
        return (
          (t = +t),
          le(function (n, r) {
            for (var i, o = e([], n.length, t), a = o.length; a--; ) n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
          })
        );
      });
    }
    function me(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    for (t in ((n = se.support = {}),
    (o = se.isXML =
      function (e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
        return !Y.test(t || (n && n.nodeName) || "HTML");
      }),
    (d = se.setDocument =
      function (e) {
        var t,
          i,
          a = e ? e.ownerDocument || e : w;
        return (
          a != p &&
            9 === a.nodeType &&
            a.documentElement &&
            ((h = (p = a).documentElement),
            (g = !o(p)),
            w != p && (i = p.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)),
            (n.scope = ce(function (e) {
              return h.appendChild(e).appendChild(p.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
            })),
            (n.cssSupportsSelector = ce(function () {
              return CSS.supports("selector(*)") && p.querySelectorAll(":is(:jqfake)") && !CSS.supports("selector(:is(*,:jqfake))");
            })),
            (n.attributes = ce(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (n.getElementsByTagName = ce(function (e) {
              return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length;
            })),
            (n.getElementsByClassName = J.test(p.getElementsByClassName)),
            (n.getById = ce(function (e) {
              return (h.appendChild(e).id = x), !p.getElementsByName || !p.getElementsByName(x).length;
            })),
            n.getById
              ? ((r.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (r.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((r.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t;
                  };
                }),
                (r.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && g) {
                    var n,
                      r,
                      i,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                      for (i = t.getElementsByName(e), r = 0; (o = i[r++]); ) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                    }
                    return [];
                  }
                })),
            (r.find.TAG = n.getElementsByTagName
              ? function (e, t) {
                  return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" === e) {
                    for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                    return r;
                  }
                  return o;
                }),
            (r.find.CLASS =
              n.getElementsByClassName &&
              function (e, t) {
                if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e);
              }),
            (m = []),
            (v = []),
            (n.qsa = J.test(p.querySelectorAll)) &&
              (ce(function (e) {
                var t;
                (h.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + R + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length || v.push("\\[" + R + "*(?:value|" + I + ")"),
                  e.querySelectorAll("[id~=" + x + "-]").length || v.push("~="),
                  (t = p.createElement("input")).setAttribute("name", ""),
                  e.appendChild(t),
                  e.querySelectorAll("[name='']").length || v.push("\\[" + R + "*name" + R + "*=" + R + "*(?:''|\"\")"),
                  e.querySelectorAll(":checked").length || v.push(":checked"),
                  e.querySelectorAll("a#" + x + "+*").length || v.push(".#.+[+~]"),
                  e.querySelectorAll("\\\f"),
                  v.push("[\\r\\n\\f]");
              }),
              ce(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = p.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length && v.push("name" + R + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                  (h.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  v.push(",.*:");
              })),
            (n.matchesSelector = J.test((y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector))) &&
              ce(function (e) {
                (n.disconnectedMatch = y.call(e, "*")), y.call(e, "[s!='']:x"), m.push("!=", W);
              }),
            n.cssSupportsSelector || v.push(":has"),
            (v = v.length && new RegExp(v.join("|"))),
            (m = m.length && new RegExp(m.join("|"))),
            (t = J.test(h.compareDocumentPosition)),
            (b =
              t || J.test(h.contains)
                ? function (e, t) {
                    var n = (9 === e.nodeType && e.documentElement) || e,
                      r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
                  }
                : function (e, t) {
                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                    return !1;
                  }),
            (k = t
              ? function (e, t) {
                  if (e === t) return (f = !0), 0;
                  var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    r ||
                    (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!n.sortDetached && t.compareDocumentPosition(e) === r)
                      ? e == p || (e.ownerDocument == w && b(w, e))
                        ? -1
                        : t == p || (t.ownerDocument == w && b(w, t))
                        ? 1
                        : c
                        ? H(c, e) - H(c, t)
                        : 0
                      : 4 & r
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (f = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!i || !o) return e == p ? -1 : t == p ? 1 : i ? -1 : o ? 1 : c ? H(c, e) - H(c, t) : 0;
                  if (i === o) return de(e, t);
                  for (n = e; (n = n.parentNode); ) a.unshift(n);
                  for (n = t; (n = n.parentNode); ) s.unshift(n);
                  for (; a[r] === s[r]; ) r++;
                  return r ? de(a[r], s[r]) : a[r] == w ? -1 : s[r] == w ? 1 : 0;
                })),
          p
        );
      }),
    (se.matches = function (e, t) {
      return se(e, null, null, t);
    }),
    (se.matchesSelector = function (e, t) {
      if ((d(e), n.matchesSelector && g && !N[t + " "] && (!m || !m.test(t)) && (!v || !v.test(t))))
        try {
          var r = y.call(e, t);
          if (r || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return r;
        } catch (e) {
          N(t, !0);
        }
      return 0 < se(t, p, null, [e]).length;
    }),
    (se.contains = function (e, t) {
      return (e.ownerDocument || e) != p && d(e), b(e, t);
    }),
    (se.attr = function (e, t) {
      (e.ownerDocument || e) != p && d(e);
      var i = r.attrHandle[t.toLowerCase()],
        o = i && D.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
      return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
    }),
    (se.escape = function (e) {
      return (e + "").replace(re, ie);
    }),
    (se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (se.uniqueSort = function (e) {
      var t,
        r = [],
        i = 0,
        o = 0;
      if (((f = !n.detectDuplicates), (c = !n.sortStable && e.slice(0)), e.sort(k), f)) {
        for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
        for (; i--; ) e.splice(r[i], 1);
      }
      return (c = null), e;
    }),
    (i = se.getText =
      function (e) {
        var t,
          n = "",
          r = 0,
          o = e.nodeType;
        if (o) {
          if (1 === o || 9 === o || 11 === o) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
          } else if (3 === o || 4 === o) return e.nodeValue;
        } else for (; (t = e[r++]); ) n += i(t);
        return n;
      }),
    ((r = se.selectors =
      {
        cacheLength: 50,
        createPseudo: le,
        match: Q,
        attrHandle: {},
        find: {},
        relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
        preFilter: {
          ATTR: function (e) {
            return (e[1] = e[1].replace(te, ne)), (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && se.error(e[0]), e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return Q.CHILD.test(e[0]) ? null : (e[3] ? (e[2] = e[4] || e[5] || "") : n && V.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = E[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) &&
                E(e, function (e) {
                  return t.test(("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || "");
                }))
            );
          },
          ATTR: function (e, t, n) {
            return function (r) {
              var i = se.attr(r, e);
              return null == i
                ? "!=" === t
                : !t ||
                    ((i += ""),
                    "=" === t
                      ? i === n
                      : "!=" === t
                      ? i !== n
                      : "^=" === t
                      ? n && 0 === i.indexOf(n)
                      : "*=" === t
                      ? n && -1 < i.indexOf(n)
                      : "$=" === t
                      ? n && i.slice(-n.length) === n
                      : "~=" === t
                      ? -1 < (" " + i.replace(F, " ") + " ").indexOf(n)
                      : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
            };
          },
          CHILD: function (e, t, n, r, i) {
            var o = "nth" !== e.slice(0, 3),
              a = "last" !== e.slice(-4),
              s = "of-type" === t;
            return 1 === r && 0 === i
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (t, n, u) {
                  var l,
                    c,
                    f,
                    d,
                    p,
                    h,
                    g = o !== a ? "nextSibling" : "previousSibling",
                    v = t.parentNode,
                    m = s && t.nodeName.toLowerCase(),
                    y = !u && !s,
                    b = !1;
                  if (v) {
                    if (o) {
                      for (; g; ) {
                        for (d = t; (d = d[g]); ) if (s ? d.nodeName.toLowerCase() === m : 1 === d.nodeType) return !1;
                        h = g = "only" === e && !h && "nextSibling";
                      }
                      return !0;
                    }
                    if (((h = [a ? v.firstChild : v.lastChild]), a && y)) {
                      for (b = (p = (l = (c = (f = (d = v)[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === C && l[1]) && l[2], d = p && v.childNodes[p]; (d = (++p && d && d[g]) || (b = p = 0) || h.pop()); )
                        if (1 === d.nodeType && ++b && d === t) {
                          c[e] = [C, p, b];
                          break;
                        }
                    } else if ((y && (b = p = (l = (c = (f = (d = t)[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === C && l[1]), !1 === b))
                      for (
                        ;
                        (d = (++p && d && d[g]) || (b = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== m : 1 !== d.nodeType) || !++b || (y && ((c = (f = d[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [C, b]), d !== t));

                      );
                    return (b -= i) === r || (b % r == 0 && 0 <= b / r);
                  }
                };
          },
          PSEUDO: function (e, t) {
            var n,
              i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
            return i[x]
              ? i(t)
              : 1 < i.length
              ? ((n = [e, e, "", t]),
                r.setFilters.hasOwnProperty(e.toLowerCase())
                  ? le(function (e, n) {
                      for (var r, o = i(e, t), a = o.length; a--; ) e[(r = H(e, o[a]))] = !(n[r] = o[a]);
                    })
                  : function (e) {
                      return i(e, 0, n);
                    })
              : i;
          },
        },
        pseudos: {
          not: le(function (e) {
            var t = [],
              n = [],
              r = s(e.replace($, "$1"));
            return r[x]
              ? le(function (e, t, n, i) {
                  for (var o, a = r(e, null, i, []), s = e.length; s--; ) (o = a[s]) && (e[s] = !(t[s] = o));
                })
              : function (e, i, o) {
                  return (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop();
                };
          }),
          has: le(function (e) {
            return function (t) {
              return 0 < se(e, t).length;
            };
          }),
          contains: le(function (e) {
            return (
              (e = e.replace(te, ne)),
              function (t) {
                return -1 < (t.textContent || i(t)).indexOf(e);
              }
            );
          }),
          lang: le(function (e) {
            return (
              X.test(e || "") || se.error("unsupported lang: " + e),
              (e = e.replace(te, ne).toLowerCase()),
              function (t) {
                var n;
                do {
                  if ((n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                } while ((t = t.parentNode) && 1 === t.nodeType);
                return !1;
              }
            );
          }),
          target: function (t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id;
          },
          root: function (e) {
            return e === h;
          },
          focus: function (e) {
            return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
          },
          selected: function (e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !r.pseudos.empty(e);
          },
          header: function (e) {
            return K.test(e.nodeName);
          },
          input: function (e) {
            return G.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
          },
          first: ve(function () {
            return [0];
          }),
          last: ve(function (e, t) {
            return [t - 1];
          }),
          eq: ve(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: ve(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: ve(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = r.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      r.pseudos[t] = pe(t);
    for (t in { submit: !0, reset: !0 }) r.pseudos[t] = he(t);
    function ye() {}
    function be(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function xe(e, t, n) {
      var r = t.dir,
        i = t.next,
        o = i || r,
        a = n && "parentNode" === o,
        s = T++;
      return t.first
        ? function (t, n, i) {
            for (; (t = t[r]); ) if (1 === t.nodeType || a) return e(t, n, i);
            return !1;
          }
        : function (t, n, u) {
            var l,
              c,
              f,
              d = [C, s];
            if (u) {
              for (; (t = t[r]); ) if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
            } else
              for (; (t = t[r]); )
                if (1 === t.nodeType || a)
                  if (((c = (f = t[x] || (t[x] = {}))[t.uniqueID] || (f[t.uniqueID] = {})), i && i === t.nodeName.toLowerCase())) t = t[r] || t;
                  else {
                    if ((l = c[o]) && l[0] === C && l[1] === s) return (d[2] = l[2]);
                    if (((c[o] = d)[2] = e(t, n, u))) return !0;
                  }
            return !1;
          };
    }
    function we(e) {
      return 1 < e.length
        ? function (t, n, r) {
            for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
            return !0;
          }
        : e[0];
    }
    function Ce(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Te(e, t, n, r, i, o) {
      return (
        r && !r[x] && (r = Te(r)),
        i && !i[x] && (i = Te(i, o)),
        le(function (o, a, s, u) {
          var l,
            c,
            f,
            d = [],
            p = [],
            h = a.length,
            g =
              o ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                return n;
              })(t || "*", s.nodeType ? [s] : s, []),
            v = !e || (!o && t) ? g : Ce(g, d, e, s, u),
            m = n ? (i || (o ? e : h || r) ? [] : a) : v;
          if ((n && n(v, m, s, u), r)) for (l = Ce(m, p), r(l, [], s, u), c = l.length; c--; ) (f = l[c]) && (m[p[c]] = !(v[p[c]] = f));
          if (o) {
            if (i || e) {
              if (i) {
                for (l = [], c = m.length; c--; ) (f = m[c]) && l.push((v[c] = f));
                i(null, (m = []), l, u);
              }
              for (c = m.length; c--; ) (f = m[c]) && -1 < (l = i ? H(o, f) : d[c]) && (o[l] = !(a[l] = f));
            }
          } else (m = Ce(m === a ? m.splice(h, m.length) : m)), i ? i(null, a, m, u) : O.apply(a, m);
        })
      );
    }
    function Ee(e) {
      for (
        var t,
          n,
          i,
          o = e.length,
          a = r.relative[e[0].type],
          s = a || r.relative[" "],
          u = a ? 1 : 0,
          c = xe(
            function (e) {
              return e === t;
            },
            s,
            !0
          ),
          f = xe(
            function (e) {
              return -1 < H(t, e);
            },
            s,
            !0
          ),
          d = [
            function (e, n, r) {
              var i = (!a && (r || n !== l)) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
              return (t = null), i;
            },
          ];
        u < o;
        u++
      )
        if ((n = r.relative[e[u].type])) d = [xe(we(d), n)];
        else {
          if ((n = r.filter[e[u].type].apply(null, e[u].matches))[x]) {
            for (i = ++u; i < o && !r.relative[e[i].type]; i++);
            return Te(1 < u && we(d), 1 < u && be(e.slice(0, u - 1).concat({ value: " " === e[u - 2].type ? "*" : "" })).replace($, "$1"), n, u < i && Ee(e.slice(u, i)), i < o && Ee((e = e.slice(i))), i < o && be(e));
          }
          d.push(n);
        }
      return we(d);
    }
    return (
      (ye.prototype = r.filters = r.pseudos),
      (r.setFilters = new ye()),
      (a = se.tokenize =
        function (e, t) {
          var n,
            i,
            o,
            a,
            s,
            u,
            l,
            c = S[e + " "];
          if (c) return t ? 0 : c.slice(0);
          for (s = e, u = [], l = r.preFilter; s; ) {
            for (a in ((n && !(i = z.exec(s))) || (i && (s = s.slice(i[0].length) || s), u.push((o = []))), (n = !1), (i = _.exec(s)) && ((n = i.shift()), o.push({ value: n, type: i[0].replace($, " ") }), (s = s.slice(n.length))), r.filter))
              !(i = Q[a].exec(s)) || (l[a] && !(i = l[a](i))) || ((n = i.shift()), o.push({ value: n, type: a, matches: i }), (s = s.slice(n.length)));
            if (!n) break;
          }
          return t ? s.length : s ? se.error(e) : S(e, u).slice(0);
        }),
      (s = se.compile =
        function (e, t) {
          var n,
            i,
            o,
            s,
            u,
            c,
            f = [],
            h = [],
            v = A[e + " "];
          if (!v) {
            for (t || (t = a(e)), n = t.length; n--; ) (v = Ee(t[n]))[x] ? f.push(v) : h.push(v);
            (v = A(
              e,
              ((i = h),
              (s = 0 < (o = f).length),
              (u = 0 < i.length),
              (c = function (e, t, n, a, c) {
                var f,
                  h,
                  v,
                  m = 0,
                  y = "0",
                  b = e && [],
                  x = [],
                  w = l,
                  T = e || (u && r.find.TAG("*", c)),
                  E = (C += null == w ? 1 : Math.random() || 0.1),
                  S = T.length;
                for (c && (l = t == p || t || c); y !== S && null != (f = T[y]); y++) {
                  if (u && f) {
                    for (h = 0, t || f.ownerDocument == p || (d(f), (n = !g)); (v = i[h++]); )
                      if (v(f, t || p, n)) {
                        a.push(f);
                        break;
                      }
                    c && (C = E);
                  }
                  s && ((f = !v && f) && m--, e && b.push(f));
                }
                if (((m += y), s && y !== m)) {
                  for (h = 0; (v = o[h++]); ) v(b, x, t, n);
                  if (e) {
                    if (0 < m) for (; y--; ) b[y] || x[y] || (x[y] = j.call(a));
                    x = Ce(x);
                  }
                  O.apply(a, x), c && !e && 0 < x.length && 1 < m + o.length && se.uniqueSort(a);
                }
                return c && ((C = E), (l = w)), b;
              }),
              s ? le(c) : c)
            )).selector = e;
          }
          return v;
        }),
      (u = se.select =
        function (e, t, n, i) {
          var o,
            u,
            l,
            c,
            f,
            d = "function" == typeof e && e,
            p = !i && a((e = d.selector || e));
          if (((n = n || []), 1 === p.length)) {
            if (2 < (u = p[0] = p[0].slice(0)).length && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
              if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0])) return n;
              d && (t = t.parentNode), (e = e.slice(u.shift().value.length));
            }
            for (o = Q.needsContext.test(e) ? 0 : u.length; o-- && ((l = u[o]), !r.relative[(c = l.type)]); )
              if ((f = r.find[c]) && (i = f(l.matches[0].replace(te, ne), (ee.test(u[0].type) && me(t.parentNode)) || t))) {
                if ((u.splice(o, 1), !(e = i.length && be(u)))) return O.apply(n, i), n;
                break;
              }
          }
          return (d || s(e, p))(i, t, !g, n, !t || (ee.test(e) && me(t.parentNode)) || t), n;
        }),
      (n.sortStable = x.split("").sort(k).join("") === x),
      (n.detectDuplicates = !!f),
      d(),
      (n.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(p.createElement("fieldset"));
      })),
      ce(function (e) {
        return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
      }) ||
        fe("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (n.attributes &&
        ce(function (e) {
          return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
        })) ||
        fe("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ce(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        fe(I, function (e, t, n) {
          var r;
          if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }),
      se
    );
  })(e);
  (w.find = T), (w.expr = T.selectors), (w.expr[":"] = w.expr.pseudos), (w.uniqueSort = w.unique = T.uniqueSort), (w.text = T.getText), (w.isXMLDoc = T.isXML), (w.contains = T.contains), (w.escapeSelector = T.escape);
  var E = function (e, t, n) {
      for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (i && w(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    S = function (e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    A = w.expr.match.needsContext;
  function N(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var k = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function D(e, t, n) {
    return h(t)
      ? w.grep(e, function (e, r) {
          return !!t.call(e, r, e) !== n;
        })
      : t.nodeType
      ? w.grep(e, function (e) {
          return (e === t) !== n;
        })
      : "string" != typeof t
      ? w.grep(e, function (e) {
          return -1 < s.call(t, e) !== n;
        })
      : w.filter(t, e, n);
  }
  (w.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? w.find.matchesSelector(r, e)
          ? [r]
          : []
        : w.find.matches(
            e,
            w.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    w.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            w(e).filter(function () {
              for (t = 0; t < r; t++) if (w.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
        return 1 < r ? w.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(D(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(D(this, e || [], !0));
      },
      is: function (e) {
        return !!D(this, "string" == typeof e && A.test(e) ? w(e) : e || [], !1).length;
      },
    });
  var L,
    j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((w.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || L), "string" == typeof e)) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : j.exec(e)) || (!r[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (((t = t instanceof w ? t[0] : t), w.merge(this, w.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : v, !0)), k.test(r[1]) && w.isPlainObject(t))) for (r in t) h(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (i = v.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this;
    }
    return e.nodeType ? ((this[0] = e), (this.length = 1), this) : h(e) ? (void 0 !== n.ready ? n.ready(e) : e(w)) : w.makeArray(e, this);
  }).prototype = w.fn),
    (L = w(v));
  var q = /^(?:parents|prev(?:Until|All))/,
    O = { children: !0, contents: !0, next: !0, prev: !0 };
  function P(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  w.fn.extend({
    has: function (e) {
      var t = w(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && w(e);
      if (!A.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? w.uniqueSort(o) : o);
    },
    index: function (e) {
      return e ? ("string" == typeof e ? s.call(w(e), this[0]) : s.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function (e, t) {
      return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    w.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return E(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return E(e, "parentNode", n);
        },
        next: function (e) {
          return P(e, "nextSibling");
        },
        prev: function (e) {
          return P(e, "previousSibling");
        },
        nextAll: function (e) {
          return E(e, "nextSibling");
        },
        prevAll: function (e) {
          return E(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return E(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return E(e, "previousSibling", n);
        },
        siblings: function (e) {
          return S((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return S(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes));
        },
      },
      function (e, t) {
        w.fn[e] = function (n, r) {
          var i = w.map(this, t, n);
          return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), 1 < this.length && (O[e] || w.uniqueSort(i), q.test(e) && i.reverse()), this.pushStack(i);
        };
      }
    );
  var H = /[^\x20\t\r\n\f]+/g;
  function I(e) {
    return e;
  }
  function R(e) {
    throw e;
  }
  function B(e, t, n, r) {
    var i;
    try {
      e && h((i = e.promise)) ? i.call(e).done(t).fail(n) : e && h((i = e.then)) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (w.Callbacks = function (e) {
    var t, n;
    e =
      "string" == typeof e
        ? ((t = e),
          (n = {}),
          w.each(t.match(H) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : w.extend({}, e);
    var r,
      i,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || e.once, o = r = !0; u.length; l = -1) for (i = u.shift(); ++l < s.length; ) !1 === s[l].apply(i[0], i[1]) && e.stopOnFalse && ((l = s.length), (i = !1));
        e.memory || (i = !1), (r = !1), a && (s = i ? [] : "");
      },
      f = {
        add: function () {
          return (
            s &&
              (i && !r && ((l = s.length - 1), u.push(i)),
              (function t(n) {
                w.each(n, function (n, r) {
                  h(r) ? (e.unique && f.has(r)) || s.push(r) : r && r.length && "string" !== b(r) && t(r);
                });
              })(arguments),
              i && !r && c()),
            this
          );
        },
        remove: function () {
          return (
            w.each(arguments, function (e, t) {
              for (var n; -1 < (n = w.inArray(t, s, n)); ) s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < w.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = u = []), (s = i = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = u = []), i || r || (s = i = ""), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return a || ((t = [e, (t = t || []).slice ? t.slice() : t]), u.push(t), r || c()), this;
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    w.extend({
      Deferred: function (t) {
        var n = [
            ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
            ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
            ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"],
          ],
          r = "pending",
          i = {
            state: function () {
              return r;
            },
            always: function () {
              return o.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return i.then(null, e);
            },
            pipe: function () {
              var e = arguments;
              return w
                .Deferred(function (t) {
                  w.each(n, function (n, r) {
                    var i = h(e[r[4]]) && e[r[4]];
                    o[r[1]](function () {
                      var e = i && i.apply(this, arguments);
                      e && h(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments);
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            then: function (t, r, i) {
              var o = 0;
              function a(t, n, r, i) {
                return function () {
                  var s = this,
                    u = arguments,
                    l = function () {
                      var e, l;
                      if (!(t < o)) {
                        if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                        (l = e && ("object" == typeof e || "function" == typeof e) && e.then),
                          h(l) ? (i ? l.call(e, a(o, n, I, i), a(o, n, R, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, R, i), a(o, n, I, n.notifyWith)))) : (r !== I && ((s = void 0), (u = [e])), (i || n.resolveWith)(s, u));
                      }
                    },
                    c = i
                      ? l
                      : function () {
                          try {
                            l();
                          } catch (e) {
                            w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), o <= t + 1 && (r !== R && ((s = void 0), (u = [e])), n.rejectWith(s, u));
                          }
                        };
                  t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c));
                };
              }
              return w
                .Deferred(function (e) {
                  n[0][3].add(a(0, e, h(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, h(t) ? t : I)), n[2][3].add(a(0, e, h(r) ? r : R));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? w.extend(e, i) : i;
            },
          },
          o = {};
        return (
          w.each(n, function (e, t) {
            var a = t[2],
              s = t[5];
            (i[t[1]] = a.add),
              s &&
                a.add(
                  function () {
                    r = s;
                  },
                  n[3 - e][2].disable,
                  n[3 - e][3].disable,
                  n[0][2].lock,
                  n[0][3].lock
                ),
              a.add(t[3].fire),
              (o[t[0]] = function () {
                return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
              }),
              (o[t[0] + "With"] = a.fireWith);
          }),
          i.promise(o),
          t && t.call(o, o),
          o
        );
      },
      when: function (e) {
        var t = arguments.length,
          n = t,
          r = Array(n),
          o = i.call(arguments),
          a = w.Deferred(),
          s = function (e) {
            return function (n) {
              (r[e] = this), (o[e] = 1 < arguments.length ? i.call(arguments) : n), --t || a.resolveWith(r, o);
            };
          };
        if (t <= 1 && (B(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || h(o[n] && o[n].then))) return a.then();
        for (; n--; ) B(o[n], s(n), a.reject);
        return a.promise();
      },
    });
  var M = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (w.Deferred.exceptionHook = function (t, n) {
    e.console && e.console.warn && t && M.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }),
    (w.readyException = function (t) {
      e.setTimeout(function () {
        throw t;
      });
    });
  var W = w.Deferred();
  function F() {
    v.removeEventListener("DOMContentLoaded", F), e.removeEventListener("load", F), w.ready();
  }
  (w.fn.ready = function (e) {
    return (
      W.then(e).catch(function (e) {
        w.readyException(e);
      }),
      this
    );
  }),
    w.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --w.readyWait : w.isReady) || ((w.isReady = !0) !== e && 0 < --w.readyWait) || W.resolveWith(v, [w]);
      },
    }),
    (w.ready.then = W.then),
    "complete" === v.readyState || ("loading" !== v.readyState && !v.documentElement.doScroll) ? e.setTimeout(w.ready) : (v.addEventListener("DOMContentLoaded", F), e.addEventListener("load", F));
  var $ = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === b(n)) for (s in ((i = !0), n)) $(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        h(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(w(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    z = /^-ms-/,
    _ = /-([a-z])/g;
  function U(e, t) {
    return t.toUpperCase();
  }
  function V(e) {
    return e.replace(z, "ms-").replace(_, U);
  }
  var X = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function Q() {
    this.expando = w.expando + Q.uid++;
  }
  (Q.uid = 1),
    (Q.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return t || ((t = {}), X(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[V(t)] = n;
        else for (r in t) i[V(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(H) || []).length;
            for (; n--; ) delete r[t[n]];
          }
          (void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !w.isEmptyObject(t);
      },
    });
  var Y = new Q(),
    G = new Q(),
    K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    J = /[A-Z]/g;
  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (((r = "data-" + t.replace(J, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(r)))) {
        try {
          n = "true" === (i = n) || ("false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i));
        } catch (e) {}
        G.set(e, t, n);
      } else n = void 0;
    return n;
  }
  w.extend({
    hasData: function (e) {
      return G.hasData(e) || Y.hasData(e);
    },
    data: function (e, t, n) {
      return G.access(e, t, n);
    },
    removeData: function (e, t) {
      G.remove(e, t);
    },
    _data: function (e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function (e, t) {
      Y.remove(e, t);
    },
  }),
    w.fn.extend({
      data: function (e, t) {
        var n,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === e) {
          if (this.length && ((i = G.get(o)), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
            for (n = a.length; n--; ) a[n] && 0 === (r = a[n].name).indexOf("data-") && ((r = V(r.slice(5))), Z(o, r, i[r]));
            Y.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof e
          ? this.each(function () {
              G.set(this, e);
            })
          : $(
              this,
              function (t) {
                var n;
                if (o && void 0 === t) return void 0 !== (n = G.get(o, e)) || void 0 !== (n = Z(o, e)) ? n : void 0;
                this.each(function () {
                  G.set(this, e, t);
                });
              },
              null,
              t,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          G.remove(this, e);
        });
      },
    }),
    w.extend({
      queue: function (e, t, n) {
        var r;
        if (e) return (t = (t || "fx") + "queue"), (r = Y.get(e, t)), n && (!r || Array.isArray(n) ? (r = Y.access(e, t, w.makeArray(n))) : r.push(n)), r || [];
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = w.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = w._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                w.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Y.get(e, n) ||
          Y.access(e, n, {
            empty: w.Callbacks("once memory").add(function () {
              Y.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    w.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), n--),
          arguments.length < n
            ? w.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          w.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = w.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; a--; ) (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    ne = ["Top", "Right", "Bottom", "Left"],
    re = v.documentElement,
    ie = function (e) {
      return w.contains(e.ownerDocument, e);
    },
    oe = { composed: !0 };
  re.getRootNode &&
    (ie = function (e) {
      return w.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument;
    });
  var ae = function (e, t) {
      return "none" === (e = t || e).style.display || ("" === e.style.display && ie(e) && "none" === w.css(e, "display"));
    },
    se = {};
  function ue(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n && ((l[c] = Y.get(r, "display") || null), l[c] || (r.style.display = "")),
            "" === r.style.display &&
              ae(r) &&
              (l[c] =
                ((u = a = o = void 0), (a = (i = r).ownerDocument), (s = i.nodeName), (u = se[s]) || ((o = a.body.appendChild(a.createElement(s))), (u = w.css(o, "display")), o.parentNode.removeChild(o), "none" === u && (u = "block"), (se[s] = u)))))
          : "none" !== n && ((l[c] = "none"), Y.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  w.fn.extend({
    show: function () {
      return ue(this, !0);
    },
    hide: function () {
      return ue(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ae(this) ? w(this).show() : w(this).hide();
          });
    },
  });
  var le,
    ce,
    fe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    pe = /^$|^module$|\/(?:java|ecma)script/i;
  (le = v.createDocumentFragment().appendChild(v.createElement("div"))),
    (ce = v.createElement("input")).setAttribute("type", "radio"),
    ce.setAttribute("checked", "checked"),
    ce.setAttribute("name", "t"),
    le.appendChild(ce),
    (p.checkClone = le.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (le.innerHTML = "<textarea>x</textarea>"),
    (p.noCloneChecked = !!le.cloneNode(!0).lastChild.defaultValue),
    (le.innerHTML = "<option></option>"),
    (p.option = !!le.lastChild);
  var he = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
  function ge(e, t) {
    var n;
    return (n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && N(e, t)) ? w.merge([e], n) : n;
  }
  function ve(e, t) {
    for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
  }
  (he.tbody = he.tfoot = he.colgroup = he.caption = he.thead), (he.th = he.td), p.option || (he.optgroup = he.option = [1, "<select multiple='multiple'>", "</select>"]);
  var me = /<|&#?\w+;/;
  function ye(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
      if ((o = e[p]) || 0 === o)
        if ("object" === b(o)) w.merge(d, o.nodeType ? [o] : o);
        else if (me.test(o)) {
          for (a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = he[s] || he._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0]; c--; ) a = a.lastChild;
          w.merge(d, a.childNodes), ((a = f.firstChild).textContent = "");
        } else d.push(t.createTextNode(o));
    for (f.textContent = "", p = 0; (o = d[p++]); )
      if (r && -1 < w.inArray(o, r)) i && i.push(o);
      else if (((l = ie(o)), (a = ge(f.appendChild(o), "script")), l && ve(a), n)) for (c = 0; (o = a[c++]); ) pe.test(o.type || "") && n.push(o);
    return f;
  }
  var be = /^([^.]*)(?:\.(.+)|)/;
  function xe() {
    return !0;
  }
  function we() {
    return !1;
  }
  function Ce(e, t) {
    return (
      (e ===
        (function () {
          try {
            return v.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function Te(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t)) Te(e, s, n, r, t[s], o);
      return e;
    }
    if ((null == r && null == i ? ((i = n), (r = n = void 0)) : null == i && ("string" == typeof n ? ((i = r), (r = void 0)) : ((i = r), (r = n), (n = void 0))), !1 === i)) i = we;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return w().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = w.guid++))),
      e.each(function () {
        w.event.add(this, t, i, r, n);
      })
    );
  }
  function Ee(e, t, n) {
    n
      ? (Y.set(e, t, !1),
        w.event.add(e, t, {
          namespace: !1,
          handler: function (e) {
            var r,
              o,
              a = Y.get(this, t);
            if (1 & e.isTrigger && this[t]) {
              if (a.length) (w.event.special[t] || {}).delegateType && e.stopPropagation();
              else if (((a = i.call(arguments)), Y.set(this, t, a), (r = n(this, t)), this[t](), a !== (o = Y.get(this, t)) || r ? Y.set(this, t, !1) : (o = {}), a !== o)) return e.stopImmediatePropagation(), o && o.value;
            } else a.length && (Y.set(this, t, { value: w.event.trigger(w.extend(a[0], w.Event.prototype), a.slice(1), this) }), e.stopImmediatePropagation());
          },
        }))
      : void 0 === Y.get(e, t) && w.event.add(e, t, xe);
  }
  (w.event = {
    global: {},
    add: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        d,
        p,
        h,
        g,
        v = Y.get(e);
      if (X(e))
        for (
          n.handler && ((n = (o = n).handler), (i = o.selector)),
            i && w.find.matchesSelector(re, i),
            n.guid || (n.guid = w.guid++),
            (u = v.events) || (u = v.events = Object.create(null)),
            (a = v.handle) ||
              (a = v.handle =
                function (t) {
                  return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
                }),
            l = (t = (t || "").match(H) || [""]).length;
          l--;

        )
          (p = g = (s = be.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            p &&
              ((f = w.event.special[p] || {}),
              (p = (i ? f.delegateType : f.bindType) || p),
              (f = w.event.special[p] || {}),
              (c = w.extend({ type: p, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && w.expr.match.needsContext.test(i), namespace: h.join(".") }, o)),
              (d = u[p]) || (((d = u[p] = []).delegateCount = 0), (f.setup && !1 !== f.setup.call(e, r, h, a)) || (e.addEventListener && e.addEventListener(p, a))),
              f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? d.splice(d.delegateCount++, 0, c) : d.push(c),
              (w.event.global[p] = !0));
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        d,
        p,
        h,
        g,
        v = Y.hasData(e) && Y.get(e);
      if (v && (u = v.events)) {
        for (l = (t = (t || "").match(H) || [""]).length; l--; )
          if (((p = g = (s = be.exec(t[l]) || [])[1]), (h = (s[2] || "").split(".").sort()), p)) {
            for (f = w.event.special[p] || {}, d = u[(p = (r ? f.delegateType : f.bindType) || p)] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--; )
              (c = d[o]),
                (!i && g !== c.origType) || (n && n.guid !== c.guid) || (s && !s.test(c.namespace)) || (r && r !== c.selector && ("**" !== r || !c.selector)) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
            a && !d.length && ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) || w.removeEvent(e, p, v.handle), delete u[p]);
          } else for (p in u) w.event.remove(e, p + t[l], n, r, !0);
        w.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = w.event.fix(e),
        l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
        c = w.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (((u.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, u))) {
        for (a = w.event.handlers.call(this, u, l), t = 0; (i = a[t++]) && !u.isPropagationStopped(); )
          for (u.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !u.isImmediatePropagationStopped(); )
            (u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o), (u.data = o.data), void 0 !== (r = ((w.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[(i = (r = t[n]).selector + " ")] && (a[i] = r.needsContext ? -1 < w(i, this).index(l) : w.find(i, this, null, [l]).length), a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s;
    },
    addProp: function (e, t) {
      Object.defineProperty(w.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: h(t)
          ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function (t) {
          Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
        },
      });
    },
    fix: function (e) {
      return e[w.expando] ? e : new w.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return fe.test(t.type) && t.click && N(t, "input") && Ee(t, "click", xe), !1;
        },
        trigger: function (e) {
          var t = this || e;
          return fe.test(t.type) && t.click && N(t, "input") && Ee(t, "click"), !0;
        },
        _default: function (e) {
          var t = e.target;
          return (fe.test(t.type) && t.click && N(t, "input") && Y.get(t, "click")) || N(t, "a");
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (w.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (w.Event = function (e, t) {
      if (!(this instanceof w.Event)) return new w.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? xe : we),
          (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && w.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[w.expando] = !0);
    }),
    (w.Event.prototype = {
      constructor: w.Event,
      isDefaultPrevented: we,
      isPropagationStopped: we,
      isImmediatePropagationStopped: we,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = xe), e && !this.isSimulated;
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = xe), e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = xe), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
      },
    }),
    w.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      w.event.addProp
    ),
    w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      w.event.special[e] = {
        setup: function () {
          return Ee(this, e, Ce), !1;
        },
        trigger: function () {
          return Ee(this, e), !0;
        },
        _default: function (t) {
          return Y.get(t.target, e);
        },
        delegateType: t,
      };
    }),
    w.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
      w.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function (e) {
          var n,
            r = e.relatedTarget,
            i = e.handleObj;
          return (r && (r === this || w.contains(this, r))) || ((e.type = i.origType), (n = i.handler.apply(this, arguments)), (e.type = t)), n;
        },
      };
    }),
    w.fn.extend({
      on: function (e, t, n, r) {
        return Te(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return Te(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj) return (r = e.handleObj), w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = we),
          this.each(function () {
            w.event.remove(this, e, n, t);
          })
        );
      },
    });
  var Se = /<script|<style|<link/i,
    Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ne = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  function ke(e, t) {
    return (N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0]) || e;
  }
  function De(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function Le(e) {
    return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
  }
  function je(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events)) for (i in (Y.remove(t, "handle events"), s)) for (n = 0, r = s[i].length; n < r; n++) w.event.add(t, i, s[i][n]);
      G.hasData(e) && ((o = G.access(e)), (a = w.extend({}, o)), G.set(t, a));
    }
  }
  function qe(e, t, n, r) {
    t = o(t);
    var i,
      a,
      s,
      u,
      l,
      c,
      f = 0,
      d = e.length,
      g = d - 1,
      v = t[0],
      m = h(v);
    if (m || (1 < d && "string" == typeof v && !p.checkClone && Ae.test(v)))
      return e.each(function (i) {
        var o = e.eq(i);
        m && (t[0] = v.call(this, i, o.html())), qe(o, t, n, r);
      });
    if (d && ((a = (i = ye(t, e[0].ownerDocument, !1, e, r)).firstChild), 1 === i.childNodes.length && (i = a), a || r)) {
      for (u = (s = w.map(ge(i, "script"), De)).length; f < d; f++) (l = i), f !== g && ((l = w.clone(l, !0, !0)), u && w.merge(s, ge(l, "script"))), n.call(e[f], l, f);
      if (u)
        for (c = s[s.length - 1].ownerDocument, w.map(s, Le), f = 0; f < u; f++)
          (l = s[f]),
            pe.test(l.type || "") &&
              !Y.access(l, "globalEval") &&
              w.contains(c, l) &&
              (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && !l.noModule && w._evalUrl(l.src, { nonce: l.nonce || l.getAttribute("nonce") }, c) : y(l.textContent.replace(Ne, ""), l, c));
    }
    return e;
  }
  function Oe(e, t, n) {
    for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(ge(r)), r.parentNode && (n && ie(r) && ve(ge(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  w.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = ie(e);
      if (!(p.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || w.isXMLDoc(e)))
        for (a = ge(c), r = 0, i = (o = ge(e)).length; r < i; r++)
          (s = o[r]), "input" === (l = (u = a[r]).nodeName.toLowerCase()) && fe.test(s.type) ? (u.checked = s.checked) : ("input" !== l && "textarea" !== l) || (u.defaultValue = s.defaultValue);
      if (t)
        if (n) for (o = o || ge(e), a = a || ge(c), r = 0, i = o.length; r < i; r++) je(o[r], a[r]);
        else je(e, c);
      return 0 < (a = ge(c, "script")).length && ve(a, !f && ge(e, "script")), c;
    },
    cleanData: function (e) {
      for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (X(n)) {
          if ((t = n[Y.expando])) {
            if (t.events) for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
            n[Y.expando] = void 0;
          }
          n[G.expando] && (n[G.expando] = void 0);
        }
    },
  }),
    w.fn.extend({
      detach: function (e) {
        return Oe(this, e, !0);
      },
      remove: function (e) {
        return Oe(this, e);
      },
      text: function (e) {
        return $(
          this,
          function (e) {
            return void 0 === e
              ? w.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return qe(this, arguments, function (e) {
          (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || ke(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return qe(this, arguments, function (e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = ke(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return qe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return qe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ge(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return w.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return $(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if ("string" == typeof e && !Se.test(e) && !he[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
              e = w.htmlPrefilter(e);
              try {
                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ge(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = [];
        return qe(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            w.inArray(this, e) < 0 && (w.cleanData(ge(this)), n && n.replaceChild(t, this));
          },
          e
        );
      },
    }),
    w.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
      w.fn[e] = function (e) {
        for (var n, r = [], i = w(e), o = i.length - 1, s = 0; s <= o; s++) (n = s === o ? this : this.clone(!0)), w(i[s])[t](n), a.apply(r, n.get());
        return this.pushStack(r);
      };
    });
  var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
    He = /^--/,
    Ie = function (t) {
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = e), n.getComputedStyle(t);
    },
    Re = function (e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
      return r;
    },
    Be = new RegExp(ne.join("|"), "i"),
    Me = "[\\x20\\t\\r\\n\\f]",
    We = new RegExp("^" + Me + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Me + "+$", "g");
  function Fe(e, t, n) {
    var r,
      i,
      o,
      a,
      s = He.test(t),
      u = e.style;
    return (
      (n = n || Ie(e)) &&
        ((a = n.getPropertyValue(t) || n[t]),
        s && a && (a = a.replace(We, "$1") || void 0),
        "" !== a || ie(e) || (a = w.style(e, t)),
        !p.pixelBoxStyles() && Pe.test(a) && Be.test(t) && ((r = u.width), (i = u.minWidth), (o = u.maxWidth), (u.minWidth = u.maxWidth = u.width = a), (a = n.width), (u.width = r), (u.minWidth = i), (u.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function $e(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function t() {
      if (c) {
        (l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          re.appendChild(l).appendChild(c);
        var t = e.getComputedStyle(c);
        (r = "1%" !== t.top), (u = 12 === n(t.marginLeft)), (c.style.right = "60%"), (a = 36 === n(t.right)), (i = 36 === n(t.width)), (c.style.position = "absolute"), (o = 12 === n(c.offsetWidth / 3)), re.removeChild(l), (c = null);
      }
    }
    function n(e) {
      return Math.round(parseFloat(e));
    }
    var r,
      i,
      o,
      a,
      s,
      u,
      l = v.createElement("div"),
      c = v.createElement("div");
    c.style &&
      ((c.style.backgroundClip = "content-box"),
      (c.cloneNode(!0).style.backgroundClip = ""),
      (p.clearCloneStyle = "content-box" === c.style.backgroundClip),
      w.extend(p, {
        boxSizingReliable: function () {
          return t(), i;
        },
        pixelBoxStyles: function () {
          return t(), a;
        },
        pixelPosition: function () {
          return t(), r;
        },
        reliableMarginLeft: function () {
          return t(), u;
        },
        scrollboxSize: function () {
          return t(), o;
        },
        reliableTrDimensions: function () {
          var t, n, r, i;
          return (
            null == s &&
              ((t = v.createElement("table")),
              (n = v.createElement("tr")),
              (r = v.createElement("div")),
              (t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate"),
              (n.style.cssText = "border:1px solid"),
              (n.style.height = "1px"),
              (r.style.height = "9px"),
              (r.style.display = "block"),
              re.appendChild(t).appendChild(n).appendChild(r),
              (i = e.getComputedStyle(n)),
              (s = parseInt(i.height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === n.offsetHeight),
              re.removeChild(t)),
            s
          );
        },
      }));
  })();
  var ze = ["Webkit", "Moz", "ms"],
    _e = v.createElement("div").style,
    Ue = {};
  function Ve(e) {
    return (
      w.cssProps[e] ||
      Ue[e] ||
      (e in _e
        ? e
        : (Ue[e] =
            (function (e) {
              for (var t = e[0].toUpperCase() + e.slice(1), n = ze.length; n--; ) if ((e = ze[n] + t) in _e) return e;
            })(e) || e))
    );
  }
  var Xe,
    Qe,
    Ye = /^(none|table(?!-c[ea]).+)/,
    Ge = { position: "absolute", visibility: "hidden", display: "block" },
    Ke = { letterSpacing: "0", fontWeight: "400" };
  function Je(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function Ze(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (u += w.css(e, n + ne[a], !0, i)),
        r
          ? ("content" === n && (u -= w.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + ne[a] + "Width", !0, i)))
          : ((u += w.css(e, "padding" + ne[a], !0, i)), "padding" !== n ? (u += w.css(e, "border" + ne[a] + "Width", !0, i)) : (s += w.css(e, "border" + ne[a] + "Width", !0, i)));
    return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5)) || 0), u;
  }
  function et(e, t, n) {
    var r = Ie(e),
      i = (!p.boxSizingReliable() || n) && "border-box" === w.css(e, "boxSizing", !1, r),
      o = i,
      a = Fe(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Pe.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ((!p.boxSizingReliable() && i) || (!p.reliableTrDimensions() && N(e, "tr")) || "auto" === a || (!parseFloat(a) && "inline" === w.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((i = "border-box" === w.css(e, "boxSizing", !1, r)), (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) + Ze(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    );
  }
  w.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Fe(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = V(t),
          u = He.test(t),
          l = e.style;
        if ((u || (t = Ve(s)), (a = w.cssHooks[t] || w.cssHooks[s]), void 0 === n)) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" == (o = typeof n) &&
          (i = te.exec(n)) &&
          i[1] &&
          ((n = (function (e, t, n, r) {
            var i,
              o,
              a = 20,
              s = function () {
                return w.css(e, t, "");
              },
              u = s(),
              l = (n && n[3]) || (w.cssNumber[t] ? "" : "px"),
              c = e.nodeType && (w.cssNumber[t] || ("px" !== l && +u)) && te.exec(w.css(e, t));
            if (c && c[3] !== l) {
              for (u /= 2, l = l || c[3], c = +u || 1; a--; ) w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0), (c /= o);
              (c *= 2), w.style(e, t, c + l), (n = n || []);
            }
            return n && ((c = +c || +u || 0), (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2])), i;
          })(e, t, i)),
          (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o || u || (n += (i && i[3]) || (w.cssNumber[s] ? "" : "px")),
            p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) || (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = V(t);
      return (
        He.test(t) || (t = Ve(s)),
        (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)),
        void 0 === i && (i = Fe(e, t, r)),
        "normal" === i && t in Ke && (i = Ke[t]),
        "" === n || n ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i) : i
      );
    },
  }),
    w.each(["height", "width"], function (e, t) {
      w.cssHooks[t] = {
        get: function (e, n, r) {
          if (n)
            return !Ye.test(w.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
              ? et(e, t, r)
              : Re(e, Ge, function () {
                  return et(e, t, r);
                });
        },
        set: function (e, n, r) {
          var i,
            o = Ie(e),
            a = !p.scrollboxSize() && "absolute" === o.position,
            s = (a || r) && "border-box" === w.css(e, "boxSizing", !1, o),
            u = r ? Ze(e, t, r, s, o) : 0;
          return s && a && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - 0.5)), u && (i = te.exec(n)) && "px" !== (i[3] || "px") && ((e.style[t] = n), (n = w.css(e, t))), Je(0, n, u);
        },
      };
    }),
    (w.cssHooks.marginLeft = $e(p.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Fe(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              Re(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (w.cssHooks[e + t] = {
        expand: function (n) {
          for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + ne[r] + t] = o[r] || o[r - 2] || o[0];
          return i;
        },
      }),
        "margin" !== e && (w.cssHooks[e + t].set = Je);
    }),
    w.fn.extend({
      css: function (e, t) {
        return $(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Ie(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (w.fn.delay = function (t, n) {
      return (
        (t = (w.fx && w.fx.speeds[t]) || t),
        (n = n || "fx"),
        this.queue(n, function (n, r) {
          var i = e.setTimeout(n, t);
          r.stop = function () {
            e.clearTimeout(i);
          };
        })
      );
    }),
    (Xe = v.createElement("input")),
    (Qe = v.createElement("select").appendChild(v.createElement("option"))),
    (Xe.type = "checkbox"),
    (p.checkOn = "" !== Xe.value),
    (p.optSelected = Qe.selected),
    ((Xe = v.createElement("input")).value = "t"),
    (Xe.type = "radio"),
    (p.radioValue = "t" === Xe.value);
  var tt,
    nt = w.expr.attrHandle;
  w.fn.extend({
    attr: function (e, t) {
      return $(this, w.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        w.removeAttr(this, e);
      });
    },
  }),
    w.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return void 0 === e.getAttribute
            ? w.prop(e, t, n)
            : ((1 === o && w.isXMLDoc(e)) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? tt : void 0)),
              void 0 !== n
                ? null === n
                  ? void w.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = w.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!p.radioValue && "radio" === t && N(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(H);
        if (i && 1 === e.nodeType) for (; (n = i[r++]); ) e.removeAttribute(n);
      },
    }),
    (tt = {
      set: function (e, t, n) {
        return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = nt[t] || w.find.attr;
      nt[t] = function (e, t, r) {
        var i,
          o,
          a = t.toLowerCase();
        return r || ((o = nt[a]), (nt[a] = i), (i = null != n(e, t, r) ? a : null), (nt[a] = o)), i;
      };
    });
  var rt = /^(?:input|select|textarea|button)$/i,
    it = /^(?:a|area)$/i;
  function ot(e) {
    return (e.match(H) || []).join(" ");
  }
  function at(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function st(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(H)) || [];
  }
  w.fn.extend({
    prop: function (e, t) {
      return $(this, w.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[w.propFix[e] || e];
      });
    },
  }),
    w.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (1 === o && w.isXMLDoc(e)) || ((t = w.propFix[t] || t), (i = w.propHooks[t])), void 0 !== n ? (i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e[t] = n)) : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = w.find.attr(e, "tabindex");
            return t ? parseInt(t, 10) : rt.test(e.nodeName) || (it.test(e.nodeName) && e.href) ? 0 : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    p.optSelected ||
      (w.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
      w.propFix[this.toLowerCase()] = this;
    }),
    w.fn.extend({
      addClass: function (e) {
        var t, n, r, i, o, a;
        return h(e)
          ? this.each(function (t) {
              w(this).addClass(e.call(this, t, at(this)));
            })
          : (t = st(e)).length
          ? this.each(function () {
              if (((r = at(this)), (n = 1 === this.nodeType && " " + ot(r) + " "))) {
                for (o = 0; o < t.length; o++) (i = t[o]), n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                (a = ot(n)), r !== a && this.setAttribute("class", a);
              }
            })
          : this;
      },
      removeClass: function (e) {
        var t, n, r, i, o, a;
        return h(e)
          ? this.each(function (t) {
              w(this).removeClass(e.call(this, t, at(this)));
            })
          : arguments.length
          ? (t = st(e)).length
            ? this.each(function () {
                if (((r = at(this)), (n = 1 === this.nodeType && " " + ot(r) + " "))) {
                  for (o = 0; o < t.length; o++) for (i = t[o]; -1 < n.indexOf(" " + i + " "); ) n = n.replace(" " + i + " ", " ");
                  (a = ot(n)), r !== a && this.setAttribute("class", a);
                }
              })
            : this
          : this.attr("class", "");
      },
      toggleClass: function (e, t) {
        var n,
          r,
          i,
          o,
          a = typeof e,
          s = "string" === a || Array.isArray(e);
        return h(e)
          ? this.each(function (n) {
              w(this).toggleClass(e.call(this, n, at(this), t), t);
            })
          : "boolean" == typeof t && s
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : ((n = st(e)),
            this.each(function () {
              if (s) for (o = w(this), i = 0; i < n.length; i++) (r = n[i]), o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
              else (void 0 !== e && "boolean" !== a) || ((r = at(this)) && Y.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === e ? "" : Y.get(this, "__className__") || ""));
            }));
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        for (t = " " + e + " "; (n = this[r++]); ) if (1 === n.nodeType && -1 < (" " + ot(at(n)) + " ").indexOf(t)) return !0;
        return !1;
      },
    });
  var ut = /\r/g;
  w.fn.extend({
    val: function (e) {
      var t,
        n,
        r,
        i = this[0];
      return arguments.length
        ? ((r = h(e)),
          this.each(function (n) {
            var i;
            1 === this.nodeType &&
              (null == (i = r ? e.call(this, n, w(this).val()) : e)
                ? (i = "")
                : "number" == typeof i
                ? (i += "")
                : Array.isArray(i) &&
                  (i = w.map(i, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value")) || (this.value = i));
          }))
        : i
        ? (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value"))
          ? n
          : "string" == typeof (n = i.value)
          ? n.replace(ut, "")
          : null == n
          ? ""
          : n
        : void 0;
    },
  }),
    w.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = w.find.attr(e, "value");
            return null != t ? t : ot(w.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                if (((t = w(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            for (var n, r, i = e.options, o = w.makeArray(t), a = i.length; a--; ) ((r = i[a]).selected = -1 < w.inArray(w.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    w.each(["radio", "checkbox"], function () {
      (w.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t)) return (e.checked = -1 < w.inArray(w(e).val(), t));
        },
      }),
        p.checkOn ||
          (w.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (p.focusin = "onfocusin" in e);
  var lt = /^(?:focusinfocus|focusoutblur)$/,
    ct = function (e) {
      e.stopPropagation();
    };
  w.extend(w.event, {
    trigger: function (t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        f,
        d,
        p,
        m = [r || v],
        y = c.call(t, "type") ? t.type : t,
        b = c.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((a = p = s = r = r || v),
        3 !== r.nodeType &&
          8 !== r.nodeType &&
          !lt.test(y + w.event.triggered) &&
          (-1 < y.indexOf(".") && ((y = (b = y.split(".")).shift()), b.sort()),
          (l = y.indexOf(":") < 0 && "on" + y),
          ((t = t[w.expando] ? t : new w.Event(y, "object" == typeof t && t)).isTrigger = i ? 2 : 3),
          (t.namespace = b.join(".")),
          (t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
          (t.result = void 0),
          t.target || (t.target = r),
          (n = null == n ? [t] : w.makeArray(n, [t])),
          (d = w.event.special[y] || {}),
          i || !d.trigger || !1 !== d.trigger.apply(r, n)))
      ) {
        if (!i && !d.noBubble && !g(r)) {
          for (u = d.delegateType || y, lt.test(u + y) || (a = a.parentNode); a; a = a.parentNode) m.push(a), (s = a);
          s === (r.ownerDocument || v) && m.push(s.defaultView || s.parentWindow || e);
        }
        for (o = 0; (a = m[o++]) && !t.isPropagationStopped(); )
          (p = a),
            (t.type = 1 < o ? u : d.bindType || y),
            (f = (Y.get(a, "events") || Object.create(null))[t.type] && Y.get(a, "handle")) && f.apply(a, n),
            (f = l && a[l]) && f.apply && X(a) && ((t.result = f.apply(a, n)), !1 === t.result && t.preventDefault());
        return (
          (t.type = y),
          i ||
            t.isDefaultPrevented() ||
            (d._default && !1 !== d._default.apply(m.pop(), n)) ||
            !X(r) ||
            (l &&
              h(r[y]) &&
              !g(r) &&
              ((s = r[l]) && (r[l] = null), (w.event.triggered = y), t.isPropagationStopped() && p.addEventListener(y, ct), r[y](), t.isPropagationStopped() && p.removeEventListener(y, ct), (w.event.triggered = void 0), s && (r[l] = s))),
          t.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });
      w.event.trigger(r, null, t);
    },
  }),
    w.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          w.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return w.event.trigger(e, t, n, !0);
      },
    }),
    p.focusin ||
      w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = function (e) {
          w.event.simulate(t, e.target, w.event.fix(e));
        };
        w.event.special[t] = {
          setup: function () {
            var r = this.ownerDocument || this.document || this,
              i = Y.access(r, t);
            i || r.addEventListener(e, n, !0), Y.access(r, t, (i || 0) + 1);
          },
          teardown: function () {
            var r = this.ownerDocument || this.document || this,
              i = Y.access(r, t) - 1;
            i ? Y.access(r, t, i) : (r.removeEventListener(e, n, !0), Y.remove(r, t));
          },
        };
      }),
    (w.parseXML = function (t) {
      var n, r;
      if (!t || "string" != typeof t) return null;
      try {
        n = new e.DOMParser().parseFromString(t, "text/xml");
      } catch (t) {}
      return (
        (r = n && n.getElementsByTagName("parsererror")[0]),
        (n && !r) ||
          w.error(
            "Invalid XML: " +
              (r
                ? w
                    .map(r.childNodes, function (e) {
                      return e.textContent;
                    })
                    .join("\n")
                : t)
          ),
        n
      );
    });
  var ft,
    dt = /\[\]$/,
    pt = /\r?\n/g,
    ht = /^(?:submit|button|image|reset|file)$/i,
    gt = /^(?:input|select|textarea|keygen)/i;
  function vt(e, t, n, r) {
    var i;
    if (Array.isArray(t))
      w.each(t, function (t, i) {
        n || dt.test(e) ? r(e, i) : vt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r);
      });
    else if (n || "object" !== b(t)) r(e, t);
    else for (i in t) vt(e + "[" + i + "]", t[i], n, r);
  }
  (w.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = h(t) ? t() : t;
        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !w.isPlainObject(e)))
      w.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) vt(n, e[n], t, i);
    return r.join("&");
  }),
    w.fn.extend({
      serialize: function () {
        return w.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = w.prop(this, "elements");
          return e ? w.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return this.name && !w(this).is(":disabled") && gt.test(this.nodeName) && !ht.test(e) && (this.checked || !fe.test(e));
          })
          .map(function (e, t) {
            var n = w(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? w.map(n, function (e) {
                  return { name: t.name, value: e.replace(pt, "\r\n") };
                })
              : { name: t.name, value: n.replace(pt, "\r\n") };
          })
          .get();
      },
    }),
    w.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (h(e) && (e = e.call(this[0])),
            (t = w(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (e) {
        return h(e)
          ? this.each(function (t) {
              w(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = w(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = h(e);
        return this.each(function (n) {
          w(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              w(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (w.expr.pseudos.hidden = function (e) {
      return !w.expr.pseudos.visible(e);
    }),
    (w.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (p.createHTMLDocument = (((ft = v.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === ft.childNodes.length)),
    (w.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t || (p.createHTMLDocument ? (((r = (t = v.implementation.createHTMLDocument("")).createElement("base")).href = v.location.href), t.head.appendChild(r)) : (t = v)),
          (o = !n && []),
          (i = k.exec(e)) ? [t.createElement(i[1])] : ((i = ye([e], t, o)), o && o.length && w(o).remove(), w.merge([], i.childNodes)));
      var r, i, o;
    }),
    (w.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = w.css(e, "position"),
          c = w(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          (s = c.offset()),
          (o = w.css(e, "top")),
          (u = w.css(e, "left")),
          ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? ((a = (r = c.position()).top), (i = r.left)) : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          h(t) && (t = t.call(e, n, w.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    w.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                w.offset.setOffset(this, e, t);
              });
        var t,
          n,
          r = this[0];
        return r ? (r.getClientRects().length ? ((t = r.getBoundingClientRect()), (n = r.ownerDocument.defaultView), { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 }) : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
          else {
            for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position"); ) e = e.parentNode;
            e && e !== r && 1 === e.nodeType && (((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0)), (i.left += w.css(e, "borderLeftWidth", !0)));
          }
          return { top: t.top - i.top - w.css(r, "marginTop", !0), left: t.left - i.left - w.css(r, "marginLeft", !0) };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (var e = this.offsetParent; e && "static" === w.css(e, "position"); ) e = e.offsetParent;
          return e || re;
        });
      },
    }),
    w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
      var n = "pageYOffset" === t;
      w.fn[e] = function (r) {
        return $(
          this,
          function (e, r, i) {
            var o;
            if ((g(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView), void 0 === i)) return o ? o[t] : e[r];
            o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : (e[r] = i);
          },
          e,
          r,
          arguments.length
        );
      };
    }),
    w.each(["top", "left"], function (e, t) {
      w.cssHooks[t] = $e(p.pixelPosition, function (e, n) {
        if (n) return (n = Fe(e, t)), Pe.test(n) ? w(e).position()[t] + "px" : n;
      });
    }),
    w.each({ Height: "height", Width: "width" }, function (e, t) {
      w.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
        w.fn[r] = function (i, o) {
          var a = arguments.length && (n || "boolean" != typeof i),
            s = n || (!0 === i || !0 === o ? "margin" : "border");
          return $(
            this,
            function (t, n, i) {
              var o;
              return g(t)
                ? 0 === r.indexOf("outer")
                  ? t["inner" + e]
                  : t.document.documentElement["client" + e]
                : 9 === t.nodeType
                ? ((o = t.documentElement), Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e]))
                : void 0 === i
                ? w.css(t, n, s)
                : w.style(t, n, i, s);
            },
            t,
            a ? i : void 0,
            a
          );
        };
      });
    }),
    w.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
      w.fn[t] = function (e, n) {
        return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t);
      };
    });
  var mt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  (w.proxy = function (e, t) {
    var n, r, o;
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), h(e)))
      return (
        (r = i.call(arguments, 2)),
        ((o = function () {
          return e.apply(t || this, r.concat(i.call(arguments)));
        }).guid = e.guid =
          e.guid || w.guid++),
        o
      );
  }),
    (w.holdReady = function (e) {
      e ? w.readyWait++ : w.ready(!0);
    }),
    (w.isArray = Array.isArray),
    (w.parseJSON = JSON.parse),
    (w.nodeName = N),
    (w.isFunction = h),
    (w.isWindow = g),
    (w.camelCase = V),
    (w.type = b),
    (w.now = Date.now),
    (w.isNumeric = function (e) {
      var t = w.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (w.trim = function (e) {
      return null == e ? "" : (e + "").replace(mt, "$1");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return w;
      });
  var yt = e.jQuery,
    bt = e.$;
  return (
    (w.noConflict = function (t) {
      return e.$ === w && (e.$ = bt), t && e.jQuery === w && (e.jQuery = yt), w;
    }),
    void 0 === t && (e.jQuery = e.$ = w),
    w
  );
});


// Event Listners

(function () {
  if (typeof EventTarget !== 'undefined') {
    let supportsPassive = false;
    try {
      // Test via a getter in the options object to see if the passive property is accessed
      const opts = Object.defineProperty({}, 'passive', {
        get: () => {
          supportsPassive = true;
        },
      });
      window.addEventListener('testPassive', null, opts);
      window.removeEventListener('testPassive', null, opts);
    } catch (e) {}
    const func = EventTarget.prototype.addEventListener;
    EventTarget.prototype.addEventListener = function (type, fn) {
      this.func = func;
      this.func(type, fn, supportsPassive ? { passive: false } : false);
    };
  }
})();