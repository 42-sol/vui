import { defineComponent as P, reactive as Xe, openBlock as y, createElementBlock as x, normalizeClass as je, unref as T, renderSlot as Me, h as ge, ref as M, onMounted as Ye, computed as S, nextTick as Ze, mergeProps as re, createElementVNode as C, inject as et, resolveComponent as tt, Fragment as Q, withModifiers as nt, createVNode as O, createCommentVNode as j, toDisplayString as Pe, withCtx as Le, renderList as ie, createBlock as ce, provide as ot, TransitionGroup as st } from "vue";
const rt = /* @__PURE__ */ P({
  __name: "Button",
  props: {
    primary: { type: Boolean, default: !1 }
  },
  setup(e) {
    const n = e, { primary: t } = Xe(n);
    return (s, o) => (y(), x("button", {
      class: je(["btn", { primary: T(t) }])
    }, [
      Me(s.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
const Fe = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [s, o] of n)
    t[s] = o;
  return t;
}, it = /* @__PURE__ */ Fe(rt, [["__scopeId", "data-v-3efb7d64"]]), B = /^[a-z0-9]+(-[a-z0-9]+)*$/, U = (e, n, t, s = "") => {
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
}, H = (e, n) => e ? !!((e.provider === "" || e.provider.match(B)) && (n && e.prefix === "" || e.prefix.match(B)) && e.name.match(B)) : !1, Ae = Object.freeze(
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
  ...Ae,
  ...q
}), Y = Object.freeze({
  ...G,
  body: "",
  hidden: !1
});
function ct(e, n) {
  const t = {};
  !e.hFlip != !n.hFlip && (t.hFlip = !0), !e.vFlip != !n.vFlip && (t.vFlip = !0);
  const s = ((e.rotate || 0) + (n.rotate || 0)) % 4;
  return s && (t.rotate = s), t;
}
function me(e, n) {
  const t = ct(e, n);
  for (const s in Y)
    s in q ? s in e && !(s in t) && (t[s] = q[s]) : s in n ? t[s] = n[s] : s in e && (t[s] = e[s]);
  return t;
}
function at(e, n) {
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
function lt(e, n, t) {
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
function Be(e, n) {
  const t = [];
  if (typeof e != "object" || typeof e.icons != "object")
    return t;
  e.not_found instanceof Array && e.not_found.forEach((o) => {
    n(o, null), t.push(o);
  });
  const s = at(e);
  for (const o in s) {
    const r = s[o];
    r && (n(o, lt(e, o, r)), t.push(o));
  }
  return t;
}
const ut = {
  provider: "",
  aliases: {},
  not_found: {},
  ...Ae
};
function W(e, n) {
  for (const t in n)
    if (t in e && typeof e[t] != typeof n[t])
      return !1;
  return !0;
}
function $e(e) {
  if (typeof e != "object" || e === null)
    return null;
  const n = e;
  if (typeof n.prefix != "string" || !e.icons || typeof e.icons != "object" || !W(e, ut))
    return null;
  const t = n.icons;
  for (const o in t) {
    const r = t[o];
    if (!o.match(B) || typeof r.body != "string" || !W(
      r,
      Y
    ))
      return null;
  }
  const s = n.aliases || /* @__PURE__ */ Object.create(null);
  for (const o in s) {
    const r = s[o], i = r.parent;
    if (!o.match(B) || typeof i != "string" || !t[i] && !s[i] || !W(
      r,
      Y
    ))
      return null;
  }
  return n;
}
const ye = /* @__PURE__ */ Object.create(null);
function ft(e, n) {
  return {
    provider: e,
    prefix: n,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function E(e, n) {
  const t = ye[e] || (ye[e] = /* @__PURE__ */ Object.create(null));
  return t[n] || (t[n] = ft(e, n));
}
function ae(e, n) {
  return $e(n) ? Be(n, (t, s) => {
    s ? e.icons[t] = s : e.missing.add(t);
  }) : [];
}
function dt(e, n, t) {
  try {
    if (typeof t.body == "string")
      return e.icons[n] = { ...t }, !0;
  } catch {
  }
  return !1;
}
let $ = !1;
function Ne(e) {
  return typeof e == "boolean" && ($ = e), $;
}
function pt(e) {
  const n = typeof e == "string" ? U(e, !0, $) : e;
  if (n) {
    const t = E(n.provider, n.prefix), s = n.name;
    return t.icons[s] || (t.missing.has(s) ? null : void 0);
  }
}
function ht(e, n) {
  const t = U(e, !0, $);
  if (!t)
    return !1;
  const s = E(t.provider, t.prefix);
  return dt(s, t.name, n);
}
function gt(e, n) {
  if (typeof e != "object")
    return !1;
  if (typeof n != "string" && (n = e.provider || ""), $ && !n && !e.prefix) {
    let o = !1;
    return $e(e) && (e.prefix = "", Be(e, (r, i) => {
      i && ht(r, i) && (o = !0);
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
const De = Object.freeze({
  width: null,
  height: null
}), Re = Object.freeze({
  // Dimensions
  ...De,
  // Transformations
  ...q
}), mt = /(-?[0-9.]*[0-9]+[0-9.]*)/g, yt = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function ve(e, n, t) {
  if (n === 1)
    return e;
  if (t = t || 100, typeof e == "number")
    return Math.ceil(e * n * t) / t;
  if (typeof e != "string")
    return e;
  const s = e.split(mt);
  if (s === null || !s.length)
    return e;
  const o = [];
  let r = s.shift(), i = yt.test(r);
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
const vt = (e) => e === "unset" || e === "undefined" || e === "none";
function bt(e, n) {
  const t = {
    ...G,
    ...e
  }, s = {
    ...Re,
    ...n
  }, o = {
    left: t.left,
    top: t.top,
    width: t.width,
    height: t.height
  };
  let r = t.body;
  [t, s].forEach((v) => {
    const d = [], p = v.hFlip, I = v.vFlip;
    let b = v.rotate;
    p ? I ? b += 2 : (d.push(
      "translate(" + (o.width + o.left).toString() + " " + (0 - o.top).toString() + ")"
    ), d.push("scale(-1 1)"), o.top = o.left = 0) : I && (d.push(
      "translate(" + (0 - o.left).toString() + " " + (o.height + o.top).toString() + ")"
    ), d.push("scale(1 -1)"), o.top = o.left = 0);
    let w;
    switch (b < 0 && (b -= Math.floor(b / 4) * 4), b = b % 4, b) {
      case 1:
        w = o.height / 2 + o.top, d.unshift(
          "rotate(90 " + w.toString() + " " + w.toString() + ")"
        );
        break;
      case 2:
        d.unshift(
          "rotate(180 " + (o.width / 2 + o.left).toString() + " " + (o.height / 2 + o.top).toString() + ")"
        );
        break;
      case 3:
        w = o.width / 2 + o.left, d.unshift(
          "rotate(-90 " + w.toString() + " " + w.toString() + ")"
        );
        break;
    }
    b % 2 === 1 && (o.left !== o.top && (w = o.left, o.left = o.top, o.top = w), o.width !== o.height && (w = o.width, o.width = o.height, o.height = w)), d.length && (r = '<g transform="' + d.join(" ") + '">' + r + "</g>");
  });
  const i = s.width, c = s.height, l = o.width, u = o.height;
  let a, f;
  i === null ? (f = c === null ? "1em" : c === "auto" ? u : c, a = ve(f, l / u)) : (a = i === "auto" ? l : i, f = c === null ? ve(a, u / l) : c === "auto" ? u : c);
  const h = {}, m = (v, d) => {
    vt(d) || (h[v] = d.toString());
  };
  return m("width", a), m("height", f), h.viewBox = o.left.toString() + " " + o.top.toString() + " " + l.toString() + " " + u.toString(), {
    attributes: h,
    body: r
  };
}
const xt = /\sid="(\S+)"/g, wt = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let _t = 0;
function It(e, n = wt) {
  const t = [];
  let s;
  for (; s = xt.exec(e); )
    t.push(s[1]);
  if (!t.length)
    return e;
  const o = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return t.forEach((r) => {
    const i = typeof n == "function" ? n(r) : n + (_t++).toString(), c = r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + c + ')([")]|\\.[a-z])', "g"),
      "$1" + i + o + "$3"
    );
  }), e = e.replace(new RegExp(o, "g"), ""), e;
}
const Z = /* @__PURE__ */ Object.create(null);
function St(e, n) {
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
const ue = /* @__PURE__ */ Object.create(null), F = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], V = [];
for (; F.length > 0; )
  F.length === 1 || Math.random() > 0.5 ? V.push(F.shift()) : V.push(F.pop());
ue[""] = le({
  resources: ["https://api.iconify.design"].concat(V)
});
function Ct(e, n) {
  const t = le(n);
  return t === null ? !1 : (ue[e] = t, !0);
}
function fe(e) {
  return ue[e];
}
const kt = () => {
  let e;
  try {
    if (e = fetch, typeof e == "function")
      return e;
  } catch {
  }
};
let be = kt();
function Ot(e, n) {
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
function Et(e) {
  return e === 404;
}
const Tt = (e, n, t) => {
  const s = [], o = Ot(e, n), r = "icons";
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
function jt(e) {
  if (typeof e == "string") {
    const n = fe(e);
    if (n)
      return n.path;
  }
  return "/";
}
const Mt = (e, n, t) => {
  if (!be) {
    t("abort", 424);
    return;
  }
  let s = jt(n.provider);
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
        t(Et(i) ? "abort" : "next", i);
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
}, Pt = {
  prepare: Tt,
  send: Mt
};
function Lt(e) {
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
function He(e, n) {
  e.forEach((t) => {
    const s = t.loaderCallbacks;
    s && (t.loaderCallbacks = s.filter((o) => o.id !== n));
  });
}
function Ft(e) {
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
      }), i.pending.length !== c && (t || He([e], r.id), r.callback(
        i.loaded.slice(0),
        i.missing.slice(0),
        i.pending.slice(0),
        r.abort
      ));
    });
  }));
}
let At = 0;
function Bt(e, n, t) {
  const s = At++, o = He.bind(null, t, s);
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
function $t(e, n = !0, t = !1) {
  const s = [];
  return e.forEach((o) => {
    const r = typeof o == "string" ? U(o, n, t) : o;
    r && s.push(r);
  }), s;
}
var Nt = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function Dt(e, n, t, s) {
  const o = e.resources.length, r = e.random ? Math.floor(Math.random() * o) : e.index;
  let i;
  if (e.random) {
    let g = e.resources.slice(0);
    for (i = []; g.length > 1; ) {
      const _ = Math.floor(Math.random() * g.length);
      i.push(g[_]), g = g.slice(0, _).concat(g.slice(_ + 1));
    }
    i = i.concat(g);
  } else
    i = e.resources.slice(r).concat(e.resources.slice(0, r));
  const c = Date.now();
  let l = "pending", u = 0, a, f = null, h = [], m = [];
  typeof s == "function" && m.push(s);
  function v() {
    f && (clearTimeout(f), f = null);
  }
  function d() {
    l === "pending" && (l = "aborted"), v(), h.forEach((g) => {
      g.status === "pending" && (g.status = "aborted");
    }), h = [];
  }
  function p(g, _) {
    _ && (m = []), typeof g == "function" && m.push(g);
  }
  function I() {
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
  function w() {
    h.forEach((g) => {
      g.status === "pending" && (g.status = "aborted");
    }), h = [];
  }
  function We(g, _, L) {
    const D = _ !== "success";
    switch (h = h.filter((k) => k !== g), l) {
      case "pending":
        break;
      case "failed":
        if (D || !e.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (_ === "abort") {
      a = L, b();
      return;
    }
    if (D) {
      a = L, h.length || (i.length ? J() : b());
      return;
    }
    if (v(), w(), !e.random) {
      const k = e.resources.indexOf(g.resource);
      k !== -1 && k !== e.index && (e.index = k);
    }
    l = "completed", m.forEach((k) => {
      k(L);
    });
  }
  function J() {
    if (l !== "pending")
      return;
    v();
    const g = i.shift();
    if (g === void 0) {
      if (h.length) {
        f = setTimeout(() => {
          v(), l === "pending" && (w(), b());
        }, e.timeout);
        return;
      }
      b();
      return;
    }
    const _ = {
      status: "pending",
      resource: g,
      callback: (L, D) => {
        We(_, L, D);
      }
    };
    h.push(_), u++, f = setTimeout(J, e.rotate), t(g, n, _.callback);
  }
  return setTimeout(J), I;
}
function Ve(e) {
  const n = {
    ...Nt,
    ...e
  };
  let t = [];
  function s() {
    t = t.filter((c) => c().status === "pending");
  }
  function o(c, l, u) {
    const a = Dt(
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
function xe() {
}
const X = /* @__PURE__ */ Object.create(null);
function Rt(e) {
  if (!X[e]) {
    const n = fe(e);
    if (!n)
      return;
    const t = Ve(n), s = {
      config: n,
      redundancy: t
    };
    X[e] = s;
  }
  return X[e];
}
function Ht(e, n, t) {
  let s, o;
  if (typeof e == "string") {
    const r = ee(e);
    if (!r)
      return t(void 0, 424), xe;
    o = r.send;
    const i = Rt(e);
    i && (s = i.redundancy);
  } else {
    const r = le(e);
    if (r) {
      s = Ve(r);
      const i = e.resources ? e.resources[0] : "", c = ee(i);
      c && (o = c.send);
    }
  }
  return !s || !o ? (t(void 0, 424), xe) : s.query(n, o, t)().abort;
}
const we = "iconify2", N = "iconify", ze = N + "-count", _e = N + "-version", Qe = 36e5, Vt = 168;
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
function Ie(e, n) {
  try {
    e.removeItem(n);
  } catch {
  }
}
function ne(e, n) {
  return de(e, ze, n.toString());
}
function oe(e) {
  return parseInt(te(e, ze)) || 0;
}
const K = {
  local: !0,
  session: !0
}, qe = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let pe = !1;
function zt(e) {
  pe = e;
}
let R = typeof window > "u" ? {} : window;
function Ue(e) {
  const n = e + "Storage";
  try {
    if (R && R[n] && typeof R[n].length == "number")
      return R[n];
  } catch {
  }
  K[e] = !1;
}
function Ge(e, n) {
  const t = Ue(e);
  if (!t)
    return;
  const s = te(t, _e);
  if (s !== we) {
    if (s) {
      const c = oe(t);
      for (let l = 0; l < c; l++)
        Ie(t, N + l.toString());
    }
    de(t, _e, we), ne(t, 0);
    return;
  }
  const o = Math.floor(Date.now() / Qe) - Vt, r = (c) => {
    const l = N + c.toString(), u = te(t, l);
    if (typeof u == "string") {
      try {
        const a = JSON.parse(u);
        if (typeof a == "object" && typeof a.cached == "number" && a.cached > o && typeof a.provider == "string" && typeof a.data == "object" && typeof a.data.prefix == "string" && // Valid item: run callback
        n(a, c))
          return !0;
      } catch {
      }
      Ie(t, l);
    }
  };
  let i = oe(t);
  for (let c = i - 1; c >= 0; c--)
    r(c) || (c === i - 1 ? (i--, ne(t, i)) : qe[e].add(c));
}
function Ke() {
  if (!pe) {
    zt(!0);
    for (const e in K)
      Ge(e, (n) => {
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
function Qt(e, n) {
  const t = e.lastModifiedCached;
  if (
    // Matches or newer
    t && t >= n
  )
    return t === n;
  if (e.lastModifiedCached = n, t)
    for (const s in K)
      Ge(s, (o) => {
        const r = o.data;
        return o.provider !== e.provider || r.prefix !== e.prefix || r.lastModified === n;
      });
  return !0;
}
function qt(e, n) {
  pe || Ke();
  function t(s) {
    let o;
    if (!K[s] || !(o = Ue(s)))
      return;
    const r = qe[s];
    let i;
    if (r.size)
      r.delete(i = Array.from(r).shift());
    else if (i = oe(o), !ne(o, i + 1))
      return;
    const c = {
      cached: Math.floor(Date.now() / Qe),
      provider: e.provider,
      data: n
    };
    return de(
      o,
      N + i.toString(),
      JSON.stringify(c)
    );
  }
  n.lastModified && !Qt(e, n.lastModified) || Object.keys(n.icons).length && (n.not_found && (n = Object.assign({}, n), delete n.not_found), t("local") || t("session"));
}
function Se() {
}
function Ut(e) {
  e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
    e.iconsLoaderFlag = !1, Ft(e);
  }));
}
function Gt(e, n) {
  e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(n).sort() : e.iconsToLoad = n, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
    e.iconsQueueFlag = !1;
    const { provider: t, prefix: s } = e, o = e.iconsToLoad;
    delete e.iconsToLoad;
    let r;
    if (!o || !(r = ee(t)))
      return;
    r.prepare(t, s, o).forEach((c) => {
      Ht(t, c, (l) => {
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
            }), qt(e, l);
          } catch (u) {
            console.error(u);
          }
        Ut(e);
      });
    });
  }));
}
const Kt = (e, n) => {
  const t = $t(e, !0, Ne()), s = Lt(t);
  if (!s.pending.length) {
    let l = !0;
    return n && setTimeout(() => {
      l && n(
        s.loaded,
        s.missing,
        s.pending,
        Se
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
    o[u][a].length && Gt(l, o[u][a]);
  }), n ? Bt(n, s, r) : Se;
};
function Jt(e, n) {
  const t = {
    ...e
  };
  for (const s in n) {
    const o = n[s], r = typeof o;
    s in De ? (o === null || o && (r === "string" || r === "number")) && (t[s] = o) : r === typeof t[s] && (t[s] = s === "rotate" ? o % 4 : o);
  }
  return t;
}
const Wt = /[\s,]+/;
function Xt(e, n) {
  n.split(Wt).forEach((t) => {
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
function Yt(e, n = 0) {
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
function Zt(e, n) {
  let t = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const s in n)
    t += " " + s + '="' + n[s] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + t + ">" + e + "</svg>";
}
function en(e) {
  return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function tn(e) {
  return "data:image/svg+xml," + en(e);
}
function nn(e) {
  return 'url("' + tn(e) + '")';
}
const Ce = {
  ...Re,
  inline: !1
}, on = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, sn = {
  display: "inline-block"
}, se = {
  backgroundColor: "currentColor"
}, Je = {
  backgroundColor: "transparent"
}, ke = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, Oe = {
  webkitMask: se,
  mask: se,
  background: Je
};
for (const e in Oe) {
  const n = Oe[e];
  for (const t in ke)
    n[e + t] = ke[t];
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
  const t = Jt(Ce, n), s = { ...on }, o = n.mode || "svg", r = {}, i = n.style, c = typeof i == "object" && !(i instanceof Array) ? i : {};
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
          typeof p == "string" && Xt(t, p);
          break;
        case "color":
          r.color = p;
          break;
        case "rotate":
          typeof p == "string" ? t[d] = Yt(p) : typeof p == "number" && (t[d] = p);
          break;
        case "ariaHidden":
        case "aria-hidden":
          p !== !0 && p !== "true" && delete s["aria-hidden"];
          break;
        default: {
          const I = z[d];
          I ? (p === !0 || p === "true" || p === 1) && (t[I] = !0) : Ce[d] === void 0 && (s[d] = p);
        }
      }
  }
  const l = bt(e, t), u = l.attributes;
  if (t.inline && (r.verticalAlign = "-0.125em"), o === "svg") {
    s.style = {
      ...r,
      ...c
    }, Object.assign(s, u);
    let d = 0, p = n.id;
    return typeof p == "string" && (p = p.replace(/-/g, "_")), s.innerHTML = It(l.body, p ? () => p + "ID" + d++ : "iconifyVue"), ge("svg", s);
  }
  const { body: a, width: f, height: h } = e, m = o === "mask" || (o === "bg" ? !1 : a.indexOf("currentColor") !== -1), v = Zt(a, {
    ...u,
    width: f + "",
    height: h + ""
  });
  return s.style = {
    ...r,
    "--svg": nn(v),
    width: Ee(u.width),
    height: Ee(u.height),
    ...sn,
    ...m ? se : Je,
    ...c
  }, ge("span", s);
};
Ne(!0);
St("", Pt);
if (typeof document < "u" && typeof window < "u") {
  Ke();
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const n = e.IconifyPreload, t = "Invalid IconifyPreload syntax.";
    typeof n == "object" && n !== null && (n instanceof Array ? n : [n]).forEach((s) => {
      try {
        // Check if item is an object and not null/array
        (typeof s != "object" || s === null || s instanceof Array || // Check for 'icons' and 'prefix'
        typeof s.icons != "object" || typeof s.prefix != "string" || // Add icon set
        !gt(s)) && console.error(t);
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
          Ct(t, o) || console.error(s);
        } catch {
          console.error(s);
        }
      }
  }
}
const rn = {
  ...G,
  body: ""
}, A = P({
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
      const s = pt(t);
      if (!s)
        return (!this._loadingIcon || this._loadingIcon.name !== e) && (this.abortLoading(), this._name = "", s !== null && (this._loadingIcon = {
          name: e,
          abort: Kt([t], () => {
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
      return Te(rn, e);
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
const cn = /* @__PURE__ */ P({
  __name: "CollapseBody",
  props: {
    expanded: { type: Boolean },
    option: {}
  },
  setup(e) {
    const n = e, t = M(null), s = M(0);
    Ye(() => {
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
    const c = S(() => (Ze(() => i()), n.expanded));
    function l() {
      var f;
      const a = new CustomEvent("v42-collapse-expand-changed", { bubbles: !0 });
      (f = t.value) == null || f.dispatchEvent(a);
    }
    const u = S(() => he(({ styles: a }) => {
      s.value !== void 0 ? c.value ? (a.height = `${s.value}px`, a.opacity = "1", l()) : (a.height = "0", a.opacity = "0") : i();
    }));
    return (a, f) => (y(), x("div", re({ class: "transition-all overflow-hidden" }, u.value), [
      C("div", {
        class: "transition-all",
        ref_key: "collapseBodyEl",
        ref: t
      }, [
        Me(a.$slots, "default")
      ], 512)
    ], 16));
  }
}), an = ["title"], ln = { class: "flex justify-start items-center pl-4" }, un = { key: 0 }, fn = { class: "py-1" }, dn = {
  key: 0,
  class: "flex-shrink-0"
}, pn = { key: 0 }, hn = { key: 1 }, gn = { key: 2 }, mn = {
  key: 0,
  class: "pl-4"
}, yn = /* @__PURE__ */ P({
  __name: "CascadeOption",
  props: {
    option: {},
    cascade: {}
  },
  emits: ["on-click"],
  setup(e, { emit: n }) {
    const t = e, s = et("selectedOptions"), o = M(!1), r = S(() => !!t.option.options || !!t.option.getAsyncOptions), i = S(() => !!t.option.children), c = S(() => {
      var m;
      const a = (m = s == null ? void 0 : s.value) == null ? void 0 : m.find((v) => v.cascadeId === t.cascade.id);
      if (!a)
        return !1;
      const f = a.option.id ?? a.option.value, h = t.option.id || t.option.value;
      return f === h;
    }), l = S(() => he(({ classes: a }) => {
      a.push("hover:bg-gray-200"), c.value && a.push("bg-blue-100");
    }));
    function u() {
      const a = { option: t.option, last: !r.value };
      n("on-click", a);
    }
    return (a, f) => {
      const h = tt("CascadeOption", !0);
      return y(), x(Q, null, [
        C("div", re({
          class: "flex w-full justify-between items-center transition-all cursor-pointer pr-2",
          onClick: u
        }, l.value, {
          title: t.option.title
        }), [
          C("div", ln, [
            C("span", {
              class: "p-1 transition-all hover:bg-gray-300",
              onClick: f[0] || (f[0] = nt((m) => o.value = !o.value, ["stop"]))
            }, [
              i.value ? (y(), x("span", un, [
                O(T(A), {
                  class: je(["text-gray-500 text-xs", { "rotate-90": o.value }]),
                  icon: "bxs:right-arrow"
                }, null, 8, ["class"])
              ])) : j("", !0)
            ]),
            C("div", fn, Pe(t.option.title), 1)
          ]),
          r.value ? (y(), x("div", dn, [
            a.option.loadingState ? a.option.loadingState === "process" ? (y(), x("span", hn, [
              O(T(A), { icon: "ep:loading" })
            ])) : a.option.loadingState === "ready" ? (y(), x("span", gn, [
              O(T(A), { icon: "ep:refresh" })
            ])) : j("", !0) : (y(), x("span", pn, [
              O(T(A), { icon: "ep:arrow-right" })
            ]))
          ])) : j("", !0)
        ], 16, an),
        i.value ? (y(), x("div", mn, [
          O(cn, {
            expanded: o.value,
            option: t.option
          }, {
            default: Le(() => [
              (y(!0), x(Q, null, ie(a.option.children, (m) => (y(), ce(h, {
                key: m.id || m.value,
                cascade: a.cascade,
                option: m,
                onOnClick: f[1] || (f[1] = (v) => n("on-click", v))
              }, null, 8, ["cascade", "option"]))), 128))
            ]),
            _: 1
          }, 8, ["expanded", "option"])
        ])) : j("", !0)
      ], 64);
    };
  }
}), vn = {
  key: 0,
  class: "w-full"
}, bn = {
  key: 1,
  class: "absolute top-0 left-0 w-full h-full bg-black opacity-10"
}, xn = /* @__PURE__ */ P({
  __name: "Cascade",
  props: {
    cascade: {},
    padding: {},
    fog: { type: Boolean },
    canBack: { type: Boolean }
  },
  emits: ["on-select", "on-back"],
  setup(e, { emit: n }) {
    const t = e, s = S(() => he(({ classes: r, styles: i }) => {
      r.push("absolute top-0"), i.left = `${12 * t.padding}px`;
    }));
    function o(r) {
      n("on-select", { cascade: t.cascade, optionParams: r });
    }
    return (r, i) => (y(), x("div", re({ class: "v42-cascade border w-96 h-96 bg-white overflow-hidden overflow-y-auto select-none" }, s.value), [
      t.canBack ? (y(), x("div", vn, [
        C("div", {
          class: "h-10 w-10 flex items-center justify-center cursor-pointer hover:bg-gray-200",
          onClick: i[0] || (i[0] = (c) => n("on-back"))
        }, [
          O(T(A), { icon: "ep:back" })
        ])
      ])) : j("", !0),
      (y(!0), x(Q, null, ie(r.cascade.options, (c) => (y(), ce(yn, {
        key: c.id || c.value,
        cascade: r.cascade,
        option: c,
        onOnClick: o
      }, null, 8, ["cascade", "option"]))), 128)),
      t.fog ? (y(), x("div", bn)) : j("", !0)
    ], 16));
  }
});
const wn = /* @__PURE__ */ Fe(xn, [["__scopeId", "data-v-a9bdabd6"]]), _n = { class: "relative" }, In = { class: "absolute top-8 left-0" }, Sn = /* @__PURE__ */ P({
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
    }, s = M(!1), o = M([]), r = S(() => s.value ? (o.value.length || m(t), o.value) : []), i = M([]);
    ot("selectedOptions", i);
    const c = S(() => i.value.map((d) => d.option.title)), l = S(() => c.value.join(n.separator)), u = (d) => {
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
    function v() {
      o.value.pop();
    }
    return (d, p) => (y(), x("div", _n, [
      C("div", {
        class: "border h-8",
        onClick: f
      }, Pe(l.value), 1),
      C("div", In, [
        O(st, {
          tag: "div",
          mode: "in-out",
          "enter-from-class": "translate-x-60 opacity-0",
          "enter-active-class": "transition-all duration-500",
          "enter-to-class": "opacity-100",
          "leave-from-class": "opacity-100",
          "leave-active-class": "transition-all duration-500",
          "leave-to-class": "translate-x-60 opacity-0"
        }, {
          default: Le(() => [
            (y(!0), x(Q, null, ie(r.value, (I, b) => (y(), ce(wn, {
              key: I.id,
              cascade: I,
              padding: b,
              fog: !u(I),
              canBack: b > 0,
              onOnSelect: h,
              onOnBack: v
            }, null, 8, ["cascade", "padding", "fog", "canBack"]))), 128))
          ]),
          _: 1
        })
      ])
    ]));
  }
}), kn = {
  install: (e) => {
    e.component("Button", it), e.component("Cascader", Sn);
  }
};
export {
  it as Button,
  Sn as Cascader,
  kn as default
};
