import { defineComponent as $, h as ge, ref as j, onMounted as Ke, computed as C, nextTick as Je, openBlock as v, createElementBlock as w, mergeProps as re, createElementVNode as k, renderSlot as We, inject as Xe, resolveComponent as Ye, Fragment as Q, withModifiers as Ze, createVNode as O, unref as L, normalizeClass as et, createCommentVNode as T, toDisplayString as je, withCtx as Me, renderList as ie, createBlock as ce, provide as tt, TransitionGroup as nt } from "vue";
const A = /^[a-z0-9]+(-[a-z0-9]+)*$/, U = (e, n, t, s = "") => {
  const o = e.split(":");
  if (e.slice(0, 1) === "@") {
    if (o.length < 2 || o.length > 3)
      return null;
    s = o.shift().slice(1);
  }
  if (o.length > 3 || !o.length)
    return null;
  if (o.length > 1) {
    const c = o.pop(), l = o.pop(), u = {
      // Allow provider without '@': "provider:prefix:name"
      provider: o.length > 0 ? o[0] : s,
      prefix: l,
      name: c
    };
    return n && !H(u) ? null : u;
  }
  const r = o[0], i = r.split("-");
  if (i.length > 1) {
    const c = {
      provider: s,
      prefix: i.shift(),
      name: i.join("-")
    };
    return n && !H(c) ? null : c;
  }
  if (t && s === "") {
    const c = {
      provider: s,
      prefix: "",
      name: r
    };
    return n && !H(c, t) ? null : c;
  }
  return null;
}, H = (e, n) => e ? !!((e.provider === "" || e.provider.match(A)) && (n && e.prefix === "" || e.prefix.match(A)) && e.name.match(A)) : !1, Pe = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), q = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), G = Object.freeze({
  ...Pe,
  ...q
}), Y = Object.freeze({
  ...G,
  body: "",
  hidden: !1
});
function ot(e, n) {
  const t = {};
  !e.hFlip != !n.hFlip && (t.hFlip = !0), !e.vFlip != !n.vFlip && (t.vFlip = !0);
  const s = ((e.rotate || 0) + (n.rotate || 0)) % 4;
  return s && (t.rotate = s), t;
}
function me(e, n) {
  const t = ot(e, n);
  for (const s in Y)
    s in q ? s in e && !(s in t) && (t[s] = q[s]) : s in n ? t[s] = n[s] : s in e && (t[s] = e[s]);
  return t;
}
function st(e, n) {
  const t = e.icons, s = e.aliases || /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  function r(i) {
    if (t[i])
      return o[i] = [];
    if (!(i in o)) {
      o[i] = null;
      const c = s[i] && s[i].parent, l = c && r(c);
      l && (o[i] = [c].concat(l));
    }
    return o[i];
  }
  return (n || Object.keys(t).concat(Object.keys(s))).forEach(r), o;
}
function rt(e, n, t) {
  const s = e.icons, o = e.aliases || /* @__PURE__ */ Object.create(null);
  let r = {};
  function i(c) {
    r = me(
      s[c] || o[c],
      r
    );
  }
  return i(n), t.forEach(i), me(e, r);
}
function Le(e, n) {
  const t = [];
  if (typeof e != "object" || typeof e.icons != "object")
    return t;
  e.not_found instanceof Array && e.not_found.forEach((o) => {
    n(o, null), t.push(o);
  });
  const s = st(e);
  for (const o in s) {
    const r = s[o];
    r && (n(o, rt(e, o, r)), t.push(o));
  }
  return t;
}
const it = {
  provider: "",
  aliases: {},
  not_found: {},
  ...Pe
};
function W(e, n) {
  for (const t in n)
    if (t in e && typeof e[t] != typeof n[t])
      return !1;
  return !0;
}
function Fe(e) {
  if (typeof e != "object" || e === null)
    return null;
  const n = e;
  if (typeof n.prefix != "string" || !e.icons || typeof e.icons != "object" || !W(e, it))
    return null;
  const t = n.icons;
  for (const o in t) {
    const r = t[o];
    if (!o.match(A) || typeof r.body != "string" || !W(
      r,
      Y
    ))
      return null;
  }
  const s = n.aliases || /* @__PURE__ */ Object.create(null);
  for (const o in s) {
    const r = s[o], i = r.parent;
    if (!o.match(A) || typeof i != "string" || !t[i] && !s[i] || !W(
      r,
      Y
    ))
      return null;
  }
  return n;
}
const ye = /* @__PURE__ */ Object.create(null);
function ct(e, n) {
  return {
    provider: e,
    prefix: n,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function E(e, n) {
  const t = ye[e] || (ye[e] = /* @__PURE__ */ Object.create(null));
  return t[n] || (t[n] = ct(e, n));
}
function ae(e, n) {
  return Fe(n) ? Le(n, (t, s) => {
    s ? e.icons[t] = s : e.missing.add(t);
  }) : [];
}
function at(e, n, t) {
  try {
    if (typeof t.body == "string")
      return e.icons[n] = { ...t }, !0;
  } catch {
  }
  return !1;
}
let B = !1;
function Ae(e) {
  return typeof e == "boolean" && (B = e), B;
}
function lt(e) {
  const n = typeof e == "string" ? U(e, !0, B) : e;
  if (n) {
    const t = E(n.provider, n.prefix), s = n.name;
    return t.icons[s] || (t.missing.has(s) ? null : void 0);
  }
}
function ut(e, n) {
  const t = U(e, !0, B);
  if (!t)
    return !1;
  const s = E(t.provider, t.prefix);
  return at(s, t.name, n);
}
function ft(e, n) {
  if (typeof e != "object")
    return !1;
  if (typeof n != "string" && (n = e.provider || ""), B && !n && !e.prefix) {
    let o = !1;
    return Fe(e) && (e.prefix = "", Le(e, (r, i) => {
      i && ut(r, i) && (o = !0);
    })), o;
  }
  const t = e.prefix;
  if (!H({
    provider: n,
    prefix: t,
    name: "a"
  }))
    return !1;
  const s = E(n, t);
  return !!ae(s, e);
}
const Be = Object.freeze({
  width: null,
  height: null
}), Ne = Object.freeze({
  // Dimensions
  ...Be,
  // Transformations
  ...q
}), dt = /(-?[0-9.]*[0-9]+[0-9.]*)/g, pt = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function ve(e, n, t) {
  if (n === 1)
    return e;
  if (t = t || 100, typeof e == "number")
    return Math.ceil(e * n * t) / t;
  if (typeof e != "string")
    return e;
  const s = e.split(dt);
  if (s === null || !s.length)
    return e;
  const o = [];
  let r = s.shift(), i = pt.test(r);
  for (; ; ) {
    if (i) {
      const c = parseFloat(r);
      isNaN(c) ? o.push(r) : o.push(Math.ceil(c * n * t) / t);
    } else
      o.push(r);
    if (r = s.shift(), r === void 0)
      return o.join("");
    i = !i;
  }
}
const ht = (e) => e === "unset" || e === "undefined" || e === "none";
function gt(e, n) {
  const t = {
    ...G,
    ...e
  }, s = {
    ...Ne,
    ...n
  }, o = {
    left: t.left,
    top: t.top,
    width: t.width,
    height: t.height
  };
  let r = t.body;
  [t, s].forEach((y) => {
    const d = [], p = y.hFlip, S = y.vFlip;
    let b = y.rotate;
    p ? S ? b += 2 : (d.push(
      "translate(" + (o.width + o.left).toString() + " " + (0 - o.top).toString() + ")"
    ), d.push("scale(-1 1)"), o.top = o.left = 0) : S && (d.push(
      "translate(" + (0 - o.left).toString() + " " + (o.height + o.top).toString() + ")"
    ), d.push("scale(1 -1)"), o.top = o.left = 0);
    let x;
    switch (b < 0 && (b -= Math.floor(b / 4) * 4), b = b % 4, b) {
      case 1:
        x = o.height / 2 + o.top, d.unshift(
          "rotate(90 " + x.toString() + " " + x.toString() + ")"
        );
        break;
      case 2:
        d.unshift(
          "rotate(180 " + (o.width / 2 + o.left).toString() + " " + (o.height / 2 + o.top).toString() + ")"
        );
        break;
      case 3:
        x = o.width / 2 + o.left, d.unshift(
          "rotate(-90 " + x.toString() + " " + x.toString() + ")"
        );
        break;
    }
    b % 2 === 1 && (o.left !== o.top && (x = o.left, o.left = o.top, o.top = x), o.width !== o.height && (x = o.width, o.width = o.height, o.height = x)), d.length && (r = '<g transform="' + d.join(" ") + '">' + r + "</g>");
  });
  const i = s.width, c = s.height, l = o.width, u = o.height;
  let a, f;
  i === null ? (f = c === null ? "1em" : c === "auto" ? u : c, a = ve(f, l / u)) : (a = i === "auto" ? l : i, f = c === null ? ve(a, u / l) : c === "auto" ? u : c);
  const h = {}, m = (y, d) => {
    ht(d) || (h[y] = d.toString());
  };
  return m("width", a), m("height", f), h.viewBox = o.left.toString() + " " + o.top.toString() + " " + l.toString() + " " + u.toString(), {
    attributes: h,
    body: r
  };
}
const mt = /\sid="(\S+)"/g, yt = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let vt = 0;
function bt(e, n = yt) {
  const t = [];
  let s;
  for (; s = mt.exec(e); )
    t.push(s[1]);
  if (!t.length)
    return e;
  const o = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return t.forEach((r) => {
    const i = typeof n == "function" ? n(r) : n + (vt++).toString(), c = r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + c + ')([")]|\\.[a-z])', "g"),
      "$1" + i + o + "$3"
    );
  }), e = e.replace(new RegExp(o, "g"), ""), e;
}
const Z = /* @__PURE__ */ Object.create(null);
function wt(e, n) {
  Z[e] = n;
}
function ee(e) {
  return Z[e] || Z[""];
}
function le(e) {
  let n;
  if (typeof e.resources == "string")
    n = [e.resources];
  else if (n = e.resources, !(n instanceof Array) || !n.length)
    return null;
  return {
    // API hosts
    resources: n,
    // Root path
    path: e.path || "/",
    // URL length limit
    maxURL: e.maxURL || 500,
    // Timeout before next host is used.
    rotate: e.rotate || 750,
    // Timeout before failing query.
    timeout: e.timeout || 5e3,
    // Randomise default API end point.
    random: e.random === !0,
    // Start index
    index: e.index || 0,
    // Receive data after time out (used if time out kicks in first, then API module sends data anyway).
    dataAfterTimeout: e.dataAfterTimeout !== !1
  };
}
const ue = /* @__PURE__ */ Object.create(null), P = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], V = [];
for (; P.length > 0; )
  P.length === 1 || Math.random() > 0.5 ? V.push(P.shift()) : V.push(P.pop());
ue[""] = le({
  resources: ["https://api.iconify.design"].concat(V)
});
function xt(e, n) {
  const t = le(n);
  return t === null ? !1 : (ue[e] = t, !0);
}
function fe(e) {
  return ue[e];
}
const It = () => {
  let e;
  try {
    if (e = fetch, typeof e == "function")
      return e;
  } catch {
  }
};
let be = It();
function St(e, n) {
  const t = fe(e);
  if (!t)
    return 0;
  let s;
  if (!t.maxURL)
    s = 0;
  else {
    let o = 0;
    t.resources.forEach((i) => {
      o = Math.max(o, i.length);
    });
    const r = n + ".json?icons=";
    s = t.maxURL - o - t.path.length - r.length;
  }
  return s;
}
function Ct(e) {
  return e === 404;
}
const kt = (e, n, t) => {
  const s = [], o = St(e, n), r = "icons";
  let i = {
    type: r,
    provider: e,
    prefix: n,
    icons: []
  }, c = 0;
  return t.forEach((l, u) => {
    c += l.length + 1, c >= o && u > 0 && (s.push(i), i = {
      type: r,
      provider: e,
      prefix: n,
      icons: []
    }, c = l.length), i.icons.push(l);
  }), s.push(i), s;
};
function _t(e) {
  if (typeof e == "string") {
    const n = fe(e);
    if (n)
      return n.path;
  }
  return "/";
}
const Ot = (e, n, t) => {
  if (!be) {
    t("abort", 424);
    return;
  }
  let s = _t(n.provider);
  switch (n.type) {
    case "icons": {
      const r = n.prefix, c = n.icons.join(","), l = new URLSearchParams({
        icons: c
      });
      s += r + ".json?" + l.toString();
      break;
    }
    case "custom": {
      const r = n.uri;
      s += r.slice(0, 1) === "/" ? r.slice(1) : r;
      break;
    }
    default:
      t("abort", 400);
      return;
  }
  let o = 503;
  be(e + s).then((r) => {
    const i = r.status;
    if (i !== 200) {
      setTimeout(() => {
        t(Ct(i) ? "abort" : "next", i);
      });
      return;
    }
    return o = 501, r.json();
  }).then((r) => {
    if (typeof r != "object" || r === null) {
      setTimeout(() => {
        r === 404 ? t("abort", r) : t("next", o);
      });
      return;
    }
    setTimeout(() => {
      t("success", r);
    });
  }).catch(() => {
    t("next", o);
  });
}, Et = {
  prepare: kt,
  send: Ot
};
function Tt(e) {
  const n = {
    loaded: [],
    missing: [],
    pending: []
  }, t = /* @__PURE__ */ Object.create(null);
  e.sort((o, r) => o.provider !== r.provider ? o.provider.localeCompare(r.provider) : o.prefix !== r.prefix ? o.prefix.localeCompare(r.prefix) : o.name.localeCompare(r.name));
  let s = {
    provider: "",
    prefix: "",
    name: ""
  };
  return e.forEach((o) => {
    if (s.name === o.name && s.prefix === o.prefix && s.provider === o.provider)
      return;
    s = o;
    const r = o.provider, i = o.prefix, c = o.name, l = t[r] || (t[r] = /* @__PURE__ */ Object.create(null)), u = l[i] || (l[i] = E(r, i));
    let a;
    c in u.icons ? a = n.loaded : i === "" || u.missing.has(c) ? a = n.missing : a = n.pending;
    const f = {
      provider: r,
      prefix: i,
      name: c
    };
    a.push(f);
  }), n;
}
function $e(e, n) {
  e.forEach((t) => {
    const s = t.loaderCallbacks;
    s && (t.loaderCallbacks = s.filter((o) => o.id !== n));
  });
}
function jt(e) {
  e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0, setTimeout(() => {
    e.pendingCallbacksFlag = !1;
    const n = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
    if (!n.length)
      return;
    let t = !1;
    const s = e.provider, o = e.prefix;
    n.forEach((r) => {
      const i = r.icons, c = i.pending.length;
      i.pending = i.pending.filter((l) => {
        if (l.prefix !== o)
          return !0;
        const u = l.name;
        if (e.icons[u])
          i.loaded.push({
            provider: s,
            prefix: o,
            name: u
          });
        else if (e.missing.has(u))
          i.missing.push({
            provider: s,
            prefix: o,
            name: u
          });
        else
          return t = !0, !0;
        return !1;
      }), i.pending.length !== c && (t || $e([e], r.id), r.callback(
        i.loaded.slice(0),
        i.missing.slice(0),
        i.pending.slice(0),
        r.abort
      ));
    });
  }));
}
let Mt = 0;
function Pt(e, n, t) {
  const s = Mt++, o = $e.bind(null, t, s);
  if (!n.pending.length)
    return o;
  const r = {
    id: s,
    icons: n,
    callback: e,
    abort: o
  };
  return t.forEach((i) => {
    (i.loaderCallbacks || (i.loaderCallbacks = [])).push(r);
  }), o;
}
function Lt(e, n = !0, t = !1) {
  const s = [];
  return e.forEach((o) => {
    const r = typeof o == "string" ? U(o, n, t) : o;
    r && s.push(r);
  }), s;
}
var Ft = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function At(e, n, t, s) {
  const o = e.resources.length, r = e.random ? Math.floor(Math.random() * o) : e.index;
  let i;
  if (e.random) {
    let g = e.resources.slice(0);
    for (i = []; g.length > 1; ) {
      const I = Math.floor(Math.random() * g.length);
      i.push(g[I]), g = g.slice(0, I).concat(g.slice(I + 1));
    }
    i = i.concat(g);
  } else
    i = e.resources.slice(r).concat(e.resources.slice(0, r));
  const c = Date.now();
  let l = "pending", u = 0, a, f = null, h = [], m = [];
  typeof s == "function" && m.push(s);
  function y() {
    f && (clearTimeout(f), f = null);
  }
  function d() {
    l === "pending" && (l = "aborted"), y(), h.forEach((g) => {
      g.status === "pending" && (g.status = "aborted");
    }), h = [];
  }
  function p(g, I) {
    I && (m = []), typeof g == "function" && m.push(g);
  }
  function S() {
    return {
      startTime: c,
      payload: n,
      status: l,
      queriesSent: u,
      queriesPending: h.length,
      subscribe: p,
      abort: d
    };
  }
  function b() {
    l = "failed", m.forEach((g) => {
      g(void 0, a);
    });
  }
  function x() {
    h.forEach((g) => {
      g.status === "pending" && (g.status = "aborted");
    }), h = [];
  }
  function Ge(g, I, M) {
    const D = I !== "success";
    switch (h = h.filter((_) => _ !== g), l) {
      case "pending":
        break;
      case "failed":
        if (D || !e.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (I === "abort") {
      a = M, b();
      return;
    }
    if (D) {
      a = M, h.length || (i.length ? J() : b());
      return;
    }
    if (y(), x(), !e.random) {
      const _ = e.resources.indexOf(g.resource);
      _ !== -1 && _ !== e.index && (e.index = _);
    }
    l = "completed", m.forEach((_) => {
      _(M);
    });
  }
  function J() {
    if (l !== "pending")
      return;
    y();
    const g = i.shift();
    if (g === void 0) {
      if (h.length) {
        f = setTimeout(() => {
          y(), l === "pending" && (x(), b());
        }, e.timeout);
        return;
      }
      b();
      return;
    }
    const I = {
      status: "pending",
      resource: g,
      callback: (M, D) => {
        Ge(I, M, D);
      }
    };
    h.push(I), u++, f = setTimeout(J, e.rotate), t(g, n, I.callback);
  }
  return setTimeout(J), S;
}
function De(e) {
  const n = {
    ...Ft,
    ...e
  };
  let t = [];
  function s() {
    t = t.filter((c) => c().status === "pending");
  }
  function o(c, l, u) {
    const a = At(
      n,
      c,
      l,
      (f, h) => {
        s(), u && u(f, h);
      }
    );
    return t.push(a), a;
  }
  function r(c) {
    return t.find((l) => c(l)) || null;
  }
  return {
    query: o,
    find: r,
    setIndex: (c) => {
      n.index = c;
    },
    getIndex: () => n.index,
    cleanup: s
  };
}
function we() {
}
const X = /* @__PURE__ */ Object.create(null);
function Bt(e) {
  if (!X[e]) {
    const n = fe(e);
    if (!n)
      return;
    const t = De(n), s = {
      config: n,
      redundancy: t
    };
    X[e] = s;
  }
  return X[e];
}
function Nt(e, n, t) {
  let s, o;
  if (typeof e == "string") {
    const r = ee(e);
    if (!r)
      return t(void 0, 424), we;
    o = r.send;
    const i = Bt(e);
    i && (s = i.redundancy);
  } else {
    const r = le(e);
    if (r) {
      s = De(r);
      const i = e.resources ? e.resources[0] : "", c = ee(i);
      c && (o = c.send);
    }
  }
  return !s || !o ? (t(void 0, 424), we) : s.query(n, o, t)().abort;
}
const xe = "iconify2", N = "iconify", Re = N + "-count", Ie = N + "-version", He = 36e5, $t = 168;
function te(e, n) {
  try {
    return e.getItem(n);
  } catch {
  }
}
function de(e, n, t) {
  try {
    return e.setItem(n, t), !0;
  } catch {
  }
}
function Se(e, n) {
  try {
    e.removeItem(n);
  } catch {
  }
}
function ne(e, n) {
  return de(e, Re, n.toString());
}
function oe(e) {
  return parseInt(te(e, Re)) || 0;
}
const K = {
  local: !0,
  session: !0
}, Ve = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let pe = !1;
function Dt(e) {
  pe = e;
}
let R = typeof window > "u" ? {} : window;
function ze(e) {
  const n = e + "Storage";
  try {
    if (R && R[n] && typeof R[n].length == "number")
      return R[n];
  } catch {
  }
  K[e] = !1;
}
function Qe(e, n) {
  const t = ze(e);
  if (!t)
    return;
  const s = te(t, Ie);
  if (s !== xe) {
    if (s) {
      const c = oe(t);
      for (let l = 0; l < c; l++)
        Se(t, N + l.toString());
    }
    de(t, Ie, xe), ne(t, 0);
    return;
  }
  const o = Math.floor(Date.now() / He) - $t, r = (c) => {
    const l = N + c.toString(), u = te(t, l);
    if (typeof u == "string") {
      try {
        const a = JSON.parse(u);
        if (typeof a == "object" && typeof a.cached == "number" && a.cached > o && typeof a.provider == "string" && typeof a.data == "object" && typeof a.data.prefix == "string" && // Valid item: run callback
        n(a, c))
          return !0;
      } catch {
      }
      Se(t, l);
    }
  };
  let i = oe(t);
  for (let c = i - 1; c >= 0; c--)
    r(c) || (c === i - 1 ? (i--, ne(t, i)) : Ve[e].add(c));
}
function qe() {
  if (!pe) {
    Dt(!0);
    for (const e in K)
      Qe(e, (n) => {
        const t = n.data, s = n.provider, o = t.prefix, r = E(
          s,
          o
        );
        if (!ae(r, t).length)
          return !1;
        const i = t.lastModified || -1;
        return r.lastModifiedCached = r.lastModifiedCached ? Math.min(r.lastModifiedCached, i) : i, !0;
      });
  }
}
function Rt(e, n) {
  const t = e.lastModifiedCached;
  if (
    // Matches or newer
    t && t >= n
  )
    return t === n;
  if (e.lastModifiedCached = n, t)
    for (const s in K)
      Qe(s, (o) => {
        const r = o.data;
        return o.provider !== e.provider || r.prefix !== e.prefix || r.lastModified === n;
      });
  return !0;
}
function Ht(e, n) {
  pe || qe();
  function t(s) {
    let o;
    if (!K[s] || !(o = ze(s)))
      return;
    const r = Ve[s];
    let i;
    if (r.size)
      r.delete(i = Array.from(r).shift());
    else if (i = oe(o), !ne(o, i + 1))
      return;
    const c = {
      cached: Math.floor(Date.now() / He),
      provider: e.provider,
      data: n
    };
    return de(
      o,
      N + i.toString(),
      JSON.stringify(c)
    );
  }
  n.lastModified && !Rt(e, n.lastModified) || Object.keys(n.icons).length && (n.not_found && (n = Object.assign({}, n), delete n.not_found), t("local") || t("session"));
}
function Ce() {
}
function Vt(e) {
  e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
    e.iconsLoaderFlag = !1, jt(e);
  }));
}
function zt(e, n) {
  e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(n).sort() : e.iconsToLoad = n, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
    e.iconsQueueFlag = !1;
    const { provider: t, prefix: s } = e, o = e.iconsToLoad;
    delete e.iconsToLoad;
    let r;
    if (!o || !(r = ee(t)))
      return;
    r.prepare(t, s, o).forEach((c) => {
      Nt(t, c, (l) => {
        if (typeof l != "object")
          c.icons.forEach((u) => {
            e.missing.add(u);
          });
        else
          try {
            const u = ae(
              e,
              l
            );
            if (!u.length)
              return;
            const a = e.pendingIcons;
            a && u.forEach((f) => {
              a.delete(f);
            }), Ht(e, l);
          } catch (u) {
            console.error(u);
          }
        Vt(e);
      });
    });
  }));
}
const Qt = (e, n) => {
  const t = Lt(e, !0, Ae()), s = Tt(t);
  if (!s.pending.length) {
    let l = !0;
    return n && setTimeout(() => {
      l && n(
        s.loaded,
        s.missing,
        s.pending,
        Ce
      );
    }), () => {
      l = !1;
    };
  }
  const o = /* @__PURE__ */ Object.create(null), r = [];
  let i, c;
  return s.pending.forEach((l) => {
    const { provider: u, prefix: a } = l;
    if (a === c && u === i)
      return;
    i = u, c = a, r.push(E(u, a));
    const f = o[u] || (o[u] = /* @__PURE__ */ Object.create(null));
    f[a] || (f[a] = []);
  }), s.pending.forEach((l) => {
    const { provider: u, prefix: a, name: f } = l, h = E(u, a), m = h.pendingIcons || (h.pendingIcons = /* @__PURE__ */ new Set());
    m.has(f) || (m.add(f), o[u][a].push(f));
  }), r.forEach((l) => {
    const { provider: u, prefix: a } = l;
    o[u][a].length && zt(l, o[u][a]);
  }), n ? Pt(n, s, r) : Ce;
};
function qt(e, n) {
  const t = {
    ...e
  };
  for (const s in n) {
    const o = n[s], r = typeof o;
    s in Be ? (o === null || o && (r === "string" || r === "number")) && (t[s] = o) : r === typeof t[s] && (t[s] = s === "rotate" ? o % 4 : o);
  }
  return t;
}
const Ut = /[\s,]+/;
function Gt(e, n) {
  n.split(Ut).forEach((t) => {
    switch (t.trim()) {
      case "horizontal":
        e.hFlip = !0;
        break;
      case "vertical":
        e.vFlip = !0;
        break;
    }
  });
}
function Kt(e, n = 0) {
  const t = e.replace(/^-?[0-9.]*/, "");
  function s(o) {
    for (; o < 0; )
      o += 4;
    return o % 4;
  }
  if (t === "") {
    const o = parseInt(e);
    return isNaN(o) ? 0 : s(o);
  } else if (t !== e) {
    let o = 0;
    switch (t) {
      case "%":
        o = 25;
        break;
      case "deg":
        o = 90;
    }
    if (o) {
      let r = parseFloat(e.slice(0, e.length - t.length));
      return isNaN(r) ? 0 : (r = r / o, r % 1 === 0 ? s(r) : 0);
    }
  }
  return n;
}
function Jt(e, n) {
  let t = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const s in n)
    t += " " + s + '="' + n[s] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + t + ">" + e + "</svg>";
}
function Wt(e) {
  return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function Xt(e) {
  return "data:image/svg+xml," + Wt(e);
}
function Yt(e) {
  return 'url("' + Xt(e) + '")';
}
const ke = {
  ...Ne,
  inline: !1
}, Zt = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, en = {
  display: "inline-block"
}, se = {
  backgroundColor: "currentColor"
}, Ue = {
  backgroundColor: "transparent"
}, _e = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, Oe = {
  webkitMask: se,
  mask: se,
  background: Ue
};
for (const e in Oe) {
  const n = Oe[e];
  for (const t in _e)
    n[e + t] = _e[t];
}
const z = {};
["horizontal", "vertical"].forEach((e) => {
  const n = e.slice(0, 1) + "Flip";
  z[e + "-flip"] = n, z[e.slice(0, 1) + "-flip"] = n, z[e + "Flip"] = n;
});
function Ee(e) {
  return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
const Te = (e, n) => {
  const t = qt(ke, n), s = { ...Zt }, o = n.mode || "svg", r = {}, i = n.style, c = typeof i == "object" && !(i instanceof Array) ? i : {};
  for (let d in n) {
    const p = n[d];
    if (p !== void 0)
      switch (d) {
        case "icon":
        case "style":
        case "onLoad":
        case "mode":
          break;
        case "inline":
        case "hFlip":
        case "vFlip":
          t[d] = p === !0 || p === "true" || p === 1;
          break;
        case "flip":
          typeof p == "string" && Gt(t, p);
          break;
        case "color":
          r.color = p;
          break;
        case "rotate":
          typeof p == "string" ? t[d] = Kt(p) : typeof p == "number" && (t[d] = p);
          break;
        case "ariaHidden":
        case "aria-hidden":
          p !== !0 && p !== "true" && delete s["aria-hidden"];
          break;
        default: {
          const S = z[d];
          S ? (p === !0 || p === "true" || p === 1) && (t[S] = !0) : ke[d] === void 0 && (s[d] = p);
        }
      }
  }
  const l = gt(e, t), u = l.attributes;
  if (t.inline && (r.verticalAlign = "-0.125em"), o === "svg") {
    s.style = {
      ...r,
      ...c
    }, Object.assign(s, u);
    let d = 0, p = n.id;
    return typeof p == "string" && (p = p.replace(/-/g, "_")), s.innerHTML = bt(l.body, p ? () => p + "ID" + d++ : "iconifyVue"), ge("svg", s);
  }
  const { body: a, width: f, height: h } = e, m = o === "mask" || (o === "bg" ? !1 : a.indexOf("currentColor") !== -1), y = Jt(a, {
    ...u,
    width: f + "",
    height: h + ""
  });
  return s.style = {
    ...r,
    "--svg": Yt(y),
    width: Ee(u.width),
    height: Ee(u.height),
    ...en,
    ...m ? se : Ue,
    ...c
  }, ge("span", s);
};
Ae(!0);
wt("", Et);
if (typeof document < "u" && typeof window < "u") {
  qe();
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const n = e.IconifyPreload, t = "Invalid IconifyPreload syntax.";
    typeof n == "object" && n !== null && (n instanceof Array ? n : [n]).forEach((s) => {
      try {
        // Check if item is an object and not null/array
        (typeof s != "object" || s === null || s instanceof Array || // Check for 'icons' and 'prefix'
        typeof s.icons != "object" || typeof s.prefix != "string" || // Add icon set
        !ft(s)) && console.error(t);
      } catch {
        console.error(t);
      }
    });
  }
  if (e.IconifyProviders !== void 0) {
    const n = e.IconifyProviders;
    if (typeof n == "object" && n !== null)
      for (let t in n) {
        const s = "IconifyProviders[" + t + "] is invalid.";
        try {
          const o = n[t];
          if (typeof o != "object" || !o || o.resources === void 0)
            continue;
          xt(t, o) || console.error(s);
        } catch {
          console.error(s);
        }
      }
  }
}
const tn = {
  ...G,
  body: ""
}, F = $({
  // Do not inherit other attributes: it is handled by render()
  inheritAttrs: !1,
  // Set initial data
  data() {
    return {
      // Mounted status
      iconMounted: !1,
      // Callback counter to trigger re-render
      counter: 0
    };
  },
  mounted() {
    this._name = "", this._loadingIcon = null, this.iconMounted = !0;
  },
  unmounted() {
    this.abortLoading();
  },
  methods: {
    abortLoading() {
      this._loadingIcon && (this._loadingIcon.abort(), this._loadingIcon = null);
    },
    // Get data for icon to render or null
    getIcon(e, n) {
      if (typeof e == "object" && e !== null && typeof e.body == "string")
        return this._name = "", this.abortLoading(), {
          data: e
        };
      let t;
      if (typeof e != "string" || (t = U(e, !1, !0)) === null)
        return this.abortLoading(), null;
      const s = lt(t);
      if (!s)
        return (!this._loadingIcon || this._loadingIcon.name !== e) && (this.abortLoading(), this._name = "", s !== null && (this._loadingIcon = {
          name: e,
          abort: Qt([t], () => {
            this.counter++;
          })
        })), null;
      this.abortLoading(), this._name !== e && (this._name = e, n && n(e));
      const o = ["iconify"];
      return t.prefix !== "" && o.push("iconify--" + t.prefix), t.provider !== "" && o.push("iconify--" + t.provider), { data: s, classes: o };
    }
  },
  // Render icon
  render() {
    this.counter;
    const e = this.$attrs, n = this.iconMounted ? this.getIcon(e.icon, e.onLoad) : null;
    if (!n)
      return Te(tn, e);
    let t = e;
    return n.classes && (t = {
      ...e,
      class: (typeof e.class == "string" ? e.class + " " : "") + n.classes.join(" ")
    }), Te({
      ...G,
      ...n.data
    }, t);
  }
});
function he(e) {
  const n = [], t = {};
  return e({ classes: n, styles: t }), {
    class: n,
    style: t
  };
}
const nn = /* @__PURE__ */ $({
  __name: "CollapseBody",
  props: {
    expanded: { type: Boolean },
    option: {}
  },
  setup(e) {
    const n = e, t = j(null), s = j(0);
    Ke(() => {
      var a, f;
      (a = t.value) == null || a.addEventListener("v42-collapse-expand-changed", o), s.value = ((f = t.value) == null ? void 0 : f.offsetHeight) || 0;
    });
    function o(a) {
      a.target !== t.value && r();
    }
    function r() {
      s.value = void 0;
    }
    function i() {
      var a;
      n.expanded ? s.value = ((a = t.value) == null ? void 0 : a.offsetHeight) || 0 : s.value = 0;
    }
    const c = C(() => (Je(() => i()), n.expanded));
    function l() {
      var f;
      const a = new CustomEvent("v42-collapse-expand-changed", { bubbles: !0 });
      (f = t.value) == null || f.dispatchEvent(a);
    }
    const u = C(() => he(({ styles: a }) => {
      s.value !== void 0 ? c.value ? (a.height = `${s.value}px`, a.opacity = "1", l()) : (a.height = "0", a.opacity = "0") : i();
    }));
    return (a, f) => (v(), w("div", re({ class: "transition-all overflow-hidden" }, u.value), [
      k("div", {
        class: "transition-all",
        ref_key: "collapseBodyEl",
        ref: t
      }, [
        We(a.$slots, "default")
      ], 512)
    ], 16));
  }
}), on = ["title"], sn = { class: "flex justify-start items-center pl-4" }, rn = { key: 0 }, cn = { class: "py-1" }, an = {
  key: 0,
  class: "flex-shrink-0"
}, ln = { key: 0 }, un = { key: 1 }, fn = { key: 2 }, dn = {
  key: 0,
  class: "pl-4"
}, pn = /* @__PURE__ */ $({
  __name: "CascadeOption",
  props: {
    option: {},
    cascade: {}
  },
  emits: ["on-click"],
  setup(e, { emit: n }) {
    const t = e, s = Xe("selectedOptions"), o = j(!1), r = C(() => !!t.option.options || !!t.option.getAsyncOptions), i = C(() => !!t.option.children), c = C(() => {
      var m;
      const a = (m = s == null ? void 0 : s.value) == null ? void 0 : m.find((y) => y.cascadeId === t.cascade.id);
      if (!a)
        return !1;
      const f = a.option.id ?? a.option.value, h = t.option.id || t.option.value;
      return f === h;
    }), l = C(() => he(({ classes: a }) => {
      a.push("hover:bg-gray-200"), c.value && a.push("bg-blue-100");
    }));
    function u() {
      const a = { option: t.option, last: !r.value };
      n("on-click", a);
    }
    return (a, f) => {
      const h = Ye("CascadeOption", !0);
      return v(), w(Q, null, [
        k("div", re({
          class: "flex w-full justify-between items-center transition-all cursor-pointer pr-2",
          onClick: u
        }, l.value, {
          title: t.option.title
        }), [
          k("div", sn, [
            k("span", {
              class: "p-1 transition-all hover:bg-gray-300",
              onClick: f[0] || (f[0] = Ze((m) => o.value = !o.value, ["stop"]))
            }, [
              i.value ? (v(), w("span", rn, [
                O(L(F), {
                  class: et(["text-gray-500 text-xs", { "rotate-90": o.value }]),
                  icon: "bxs:right-arrow"
                }, null, 8, ["class"])
              ])) : T("", !0)
            ]),
            k("div", cn, je(t.option.title), 1)
          ]),
          r.value ? (v(), w("div", an, [
            a.option.loadingState ? a.option.loadingState === "process" ? (v(), w("span", un, [
              O(L(F), { icon: "ep:loading" })
            ])) : a.option.loadingState === "ready" ? (v(), w("span", fn, [
              O(L(F), { icon: "ep:refresh" })
            ])) : T("", !0) : (v(), w("span", ln, [
              O(L(F), { icon: "ep:arrow-right" })
            ]))
          ])) : T("", !0)
        ], 16, on),
        i.value ? (v(), w("div", dn, [
          O(nn, {
            expanded: o.value,
            option: t.option
          }, {
            default: Me(() => [
              (v(!0), w(Q, null, ie(a.option.children, (m) => (v(), ce(h, {
                key: m.id || m.value,
                cascade: a.cascade,
                option: m,
                onOnClick: f[1] || (f[1] = (y) => n("on-click", y))
              }, null, 8, ["cascade", "option"]))), 128))
            ]),
            _: 1
          }, 8, ["expanded", "option"])
        ])) : T("", !0)
      ], 64);
    };
  }
}), hn = {
  key: 0,
  class: "w-full"
}, gn = {
  key: 1,
  class: "absolute top-0 left-0 w-full h-full bg-black opacity-10"
}, mn = /* @__PURE__ */ $({
  __name: "Cascade",
  props: {
    cascade: {},
    padding: {},
    fog: { type: Boolean },
    canBack: { type: Boolean }
  },
  emits: ["on-select", "on-back"],
  setup(e, { emit: n }) {
    const t = e, s = C(() => he(({ classes: r, styles: i }) => {
      r.push("absolute top-0"), i.left = `${12 * t.padding}px`;
    }));
    function o(r) {
      n("on-select", { cascade: t.cascade, optionParams: r });
    }
    return (r, i) => (v(), w("div", re({ class: "v42-cascade border w-96 h-96 bg-white overflow-hidden overflow-y-auto select-none" }, s.value), [
      t.canBack ? (v(), w("div", hn, [
        k("div", {
          class: "h-10 w-10 flex items-center justify-center cursor-pointer hover:bg-gray-200",
          onClick: i[0] || (i[0] = (c) => n("on-back"))
        }, [
          O(L(F), { icon: "ep:back" })
        ])
      ])) : T("", !0),
      (v(!0), w(Q, null, ie(r.cascade.options, (c) => (v(), ce(pn, {
        key: c.id || c.value,
        cascade: r.cascade,
        option: c,
        onOnClick: o
      }, null, 8, ["cascade", "option"]))), 128)),
      t.fog ? (v(), w("div", gn)) : T("", !0)
    ], 16));
  }
});
const yn = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [s, o] of n)
    t[s] = o;
  return t;
}, vn = /* @__PURE__ */ yn(mn, [["__scopeId", "data-v-a9bdabd6"]]), bn = { class: "relative" }, wn = { class: "absolute top-8 left-0" }, xn = /* @__PURE__ */ $({
  __name: "Cascader",
  props: {
    modelValue: {},
    data: {},
    separator: { default: "/" }
  },
  setup(e) {
    const n = e, t = {
      value: "__ROOT_CASCADE__",
      title: "",
      options: n.data
    }, s = j(!1), o = j([]), r = C(() => s.value ? (o.value.length || m(t), o.value) : []), i = j([]);
    tt("selectedOptions", i);
    const c = C(() => i.value.map((d) => d.option.title)), l = C(() => c.value.join(n.separator)), u = (d) => {
      var p;
      return ((p = o.value[o.value.length - 1]) == null ? void 0 : p.id) === d.id;
    };
    function a(d) {
      s.value = d;
    }
    function f() {
      a(!0);
    }
    function h({ cascade: d, optionParams: p }) {
      if (i.value[d.id] = {
        cascadeId: d.id,
        option: p.option
      }, p.last) {
        a(!1);
        return;
      }
      m(p.option);
    }
    function m(d) {
      const p = o.value.length;
      o.value.push({
        id: p,
        options: d.options || []
      });
    }
    function y() {
      o.value.pop();
    }
    return (d, p) => (v(), w("div", bn, [
      k("div", {
        class: "border h-8",
        onClick: f
      }, je(l.value), 1),
      k("div", wn, [
        O(nt, {
          tag: "div",
          mode: "in-out",
          "enter-from-class": "translate-x-60 opacity-0",
          "enter-active-class": "transition-all duration-500",
          "enter-to-class": "opacity-100",
          "leave-from-class": "opacity-100",
          "leave-active-class": "transition-all duration-500",
          "leave-to-class": "translate-x-60 opacity-0"
        }, {
          default: Me(() => [
            (v(!0), w(Q, null, ie(r.value, (S, b) => (v(), ce(vn, {
              key: S.id,
              cascade: S,
              padding: b,
              fog: !u(S),
              canBack: b > 0,
              onOnSelect: h,
              onOnBack: y
            }, null, 8, ["cascade", "padding", "fog", "canBack"]))), 128))
          ]),
          _: 1
        })
      ])
    ]));
  }
}), Sn = {
  install: (e) => {
    e.component("Cascader", xn);
  }
};
export {
  xn as Cascader,
  Sn as default
};
