import { getCurrentScope as ht, onScopeDispose as gt, unref as F, watch as mt, defineComponent as B, h as Te, inject as vt, ref as T, computed as k, resolveComponent as je, openBlock as b, createElementBlock as x, mergeProps as Y, createElementVNode as E, normalizeClass as yt, withModifiers as _t, createVNode as j, createCommentVNode as A, toDisplayString as le, createBlock as Z, withCtx as ye, Fragment as _e, renderList as be, renderSlot as Ue, normalizeProps as bt, guardReactiveProps as wt, Transition as xt, provide as Ct, onMounted as We, TransitionGroup as It, nextTick as Ge } from "vue";
function St(e) {
  return ht() ? (gt(e), !0) : !1;
}
function Ke(e) {
  return typeof e == "function" ? e() : F(e);
}
const Je = typeof window < "u" && typeof document < "u", kt = Object.prototype.toString, Ot = (e) => kt.call(e) === "[object Object]", ue = () => {
}, Et = /* @__PURE__ */ Tt();
function Tt() {
  var e;
  return Je && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && /* @__PURE__ */ /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
function D(e) {
  var n;
  const t = Ke(e);
  return (n = t == null ? void 0 : t.$el) != null ? n : t;
}
const Xe = Je ? window : void 0;
function re(...e) {
  let n, t, s, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([t, s, o] = e, n = Xe) : [n, t, s, o] = e, !n)
    return ue;
  Array.isArray(t) || (t = [t]), Array.isArray(s) || (s = [s]);
  const i = [], r = () => {
    i.forEach((u) => u()), i.length = 0;
  }, c = (u, f, d, h) => (u.addEventListener(f, d, h), () => u.removeEventListener(f, d, h)), a = mt(
    () => [D(n), Ke(o)],
    ([u, f]) => {
      if (r(), !u)
        return;
      const d = Ot(f) ? { ...f } : f;
      i.push(
        ...t.flatMap((h) => s.map((g) => c(u, h, g, d)))
      );
    },
    { immediate: !0, flush: "post" }
  ), l = () => {
    a(), r();
  };
  return St(l), l;
}
let Pe = !1;
function jt(e, n, t = {}) {
  const { window: s = Xe, ignore: o = [], capture: i = !0, detectIframe: r = !1 } = t;
  if (!s)
    return;
  Et && !Pe && (Pe = !0, Array.from(s.document.body.children).forEach((d) => d.addEventListener("click", ue)), s.document.documentElement.addEventListener("click", ue));
  let c = !0;
  const a = (d) => o.some((h) => {
    if (typeof h == "string")
      return Array.from(s.document.querySelectorAll(h)).some((g) => g === d.target || d.composedPath().includes(g));
    {
      const g = D(h);
      return g && (d.target === g || d.composedPath().includes(g));
    }
  }), u = [
    re(s, "click", (d) => {
      const h = D(e);
      if (!(!h || h === d.target || d.composedPath().includes(h))) {
        if (d.detail === 0 && (c = !a(d)), !c) {
          c = !0;
          return;
        }
        n(d);
      }
    }, { passive: !0, capture: i }),
    re(s, "pointerdown", (d) => {
      const h = D(e);
      h && (c = !d.composedPath().includes(h) && !a(d));
    }, { passive: !0 }),
    r && re(s, "blur", (d) => {
      setTimeout(() => {
        var h;
        const g = D(e);
        ((h = s.document.activeElement) == null ? void 0 : h.tagName) === "IFRAME" && !(g != null && g.contains(s.document.activeElement)) && n(d);
      }, 0);
    })
  ].filter(Boolean);
  return () => u.forEach((d) => d());
}
const V = /^[a-z0-9]+(-[a-z0-9]+)*$/, ne = (e, n, t, s = "") => {
  const o = e.split(":");
  if (e.slice(0, 1) === "@") {
    if (o.length < 2 || o.length > 3)
      return null;
    s = o.shift().slice(1);
  }
  if (o.length > 3 || !o.length)
    return null;
  if (o.length > 1) {
    const c = o.pop(), a = o.pop(), l = {
      // Allow provider without '@': "provider:prefix:name"
      provider: o.length > 0 ? o[0] : s,
      prefix: a,
      name: c
    };
    return n && !G(l) ? null : l;
  }
  const i = o[0], r = i.split("-");
  if (r.length > 1) {
    const c = {
      provider: s,
      prefix: r.shift(),
      name: r.join("-")
    };
    return n && !G(c) ? null : c;
  }
  if (t && s === "") {
    const c = {
      provider: s,
      prefix: "",
      name: i
    };
    return n && !G(c, t) ? null : c;
  }
  return null;
}, G = (e, n) => e ? !!((e.provider === "" || e.provider.match(V)) && (n && e.prefix === "" || e.prefix.match(V)) && e.name.match(V)) : !1, Ye = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), ee = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), oe = Object.freeze({
  ...Ye,
  ...ee
}), fe = Object.freeze({
  ...oe,
  body: "",
  hidden: !1
});
function Pt(e, n) {
  const t = {};
  !e.hFlip != !n.hFlip && (t.hFlip = !0), !e.vFlip != !n.vFlip && (t.vFlip = !0);
  const s = ((e.rotate || 0) + (n.rotate || 0)) % 4;
  return s && (t.rotate = s), t;
}
function Ae(e, n) {
  const t = Pt(e, n);
  for (const s in fe)
    s in ee ? s in e && !(s in t) && (t[s] = ee[s]) : s in n ? t[s] = n[s] : s in e && (t[s] = e[s]);
  return t;
}
function At(e, n) {
  const t = e.icons, s = e.aliases || /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  function i(r) {
    if (t[r])
      return o[r] = [];
    if (!(r in o)) {
      o[r] = null;
      const c = s[r] && s[r].parent, a = c && i(c);
      a && (o[r] = [c].concat(a));
    }
    return o[r];
  }
  return (n || Object.keys(t).concat(Object.keys(s))).forEach(i), o;
}
function Lt(e, n, t) {
  const s = e.icons, o = e.aliases || /* @__PURE__ */ Object.create(null);
  let i = {};
  function r(c) {
    i = Ae(
      s[c] || o[c],
      i
    );
  }
  return r(n), t.forEach(r), Ae(e, i);
}
function Ze(e, n) {
  const t = [];
  if (typeof e != "object" || typeof e.icons != "object")
    return t;
  e.not_found instanceof Array && e.not_found.forEach((o) => {
    n(o, null), t.push(o);
  });
  const s = At(e);
  for (const o in s) {
    const i = s[o];
    i && (n(o, Lt(e, o, i)), t.push(o));
  }
  return t;
}
const Mt = {
  provider: "",
  aliases: {},
  not_found: {},
  ...Ye
};
function ce(e, n) {
  for (const t in n)
    if (t in e && typeof e[t] != typeof n[t])
      return !1;
  return !0;
}
function et(e) {
  if (typeof e != "object" || e === null)
    return null;
  const n = e;
  if (typeof n.prefix != "string" || !e.icons || typeof e.icons != "object" || !ce(e, Mt))
    return null;
  const t = n.icons;
  for (const o in t) {
    const i = t[o];
    if (!o.match(V) || typeof i.body != "string" || !ce(
      i,
      fe
    ))
      return null;
  }
  const s = n.aliases || /* @__PURE__ */ Object.create(null);
  for (const o in s) {
    const i = s[o], r = i.parent;
    if (!o.match(V) || typeof r != "string" || !t[r] && !s[r] || !ce(
      i,
      fe
    ))
      return null;
  }
  return n;
}
const Le = /* @__PURE__ */ Object.create(null);
function Ft(e, n) {
  return {
    provider: e,
    prefix: n,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function L(e, n) {
  const t = Le[e] || (Le[e] = /* @__PURE__ */ Object.create(null));
  return t[n] || (t[n] = Ft(e, n));
}
function we(e, n) {
  return et(n) ? Ze(n, (t, s) => {
    s ? e.icons[t] = s : e.missing.add(t);
  }) : [];
}
function Bt(e, n, t) {
  try {
    if (typeof t.body == "string")
      return e.icons[n] = { ...t }, !0;
  } catch {
  }
  return !1;
}
let H = !1;
function tt(e) {
  return typeof e == "boolean" && (H = e), H;
}
function $t(e) {
  const n = typeof e == "string" ? ne(e, !0, H) : e;
  if (n) {
    const t = L(n.provider, n.prefix), s = n.name;
    return t.icons[s] || (t.missing.has(s) ? null : void 0);
  }
}
function Nt(e, n) {
  const t = ne(e, !0, H);
  if (!t)
    return !1;
  const s = L(t.provider, t.prefix);
  return Bt(s, t.name, n);
}
function Dt(e, n) {
  if (typeof e != "object")
    return !1;
  if (typeof n != "string" && (n = e.provider || ""), H && !n && !e.prefix) {
    let o = !1;
    return et(e) && (e.prefix = "", Ze(e, (i, r) => {
      r && Nt(i, r) && (o = !0);
    })), o;
  }
  const t = e.prefix;
  if (!G({
    provider: n,
    prefix: t,
    name: "a"
  }))
    return !1;
  const s = L(n, t);
  return !!we(s, e);
}
const nt = Object.freeze({
  width: null,
  height: null
}), ot = Object.freeze({
  // Dimensions
  ...nt,
  // Transformations
  ...ee
}), Rt = /(-?[0-9.]*[0-9]+[0-9.]*)/g, Vt = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function Me(e, n, t) {
  if (n === 1)
    return e;
  if (t = t || 100, typeof e == "number")
    return Math.ceil(e * n * t) / t;
  if (typeof e != "string")
    return e;
  const s = e.split(Rt);
  if (s === null || !s.length)
    return e;
  const o = [];
  let i = s.shift(), r = Vt.test(i);
  for (; ; ) {
    if (r) {
      const c = parseFloat(i);
      isNaN(c) ? o.push(i) : o.push(Math.ceil(c * n * t) / t);
    } else
      o.push(i);
    if (i = s.shift(), i === void 0)
      return o.join("");
    r = !r;
  }
}
const Ht = (e) => e === "unset" || e === "undefined" || e === "none";
function zt(e, n) {
  const t = {
    ...oe,
    ...e
  }, s = {
    ...ot,
    ...n
  }, o = {
    left: t.left,
    top: t.top,
    width: t.width,
    height: t.height
  };
  let i = t.body;
  [t, s].forEach((g) => {
    const m = [], v = g.hFlip, O = g.vFlip;
    let C = g.rotate;
    v ? O ? C += 2 : (m.push(
      "translate(" + (o.width + o.left).toString() + " " + (0 - o.top).toString() + ")"
    ), m.push("scale(-1 1)"), o.top = o.left = 0) : O && (m.push(
      "translate(" + (0 - o.left).toString() + " " + (o.height + o.top).toString() + ")"
    ), m.push("scale(1 -1)"), o.top = o.left = 0);
    let w;
    switch (C < 0 && (C -= Math.floor(C / 4) * 4), C = C % 4, C) {
      case 1:
        w = o.height / 2 + o.top, m.unshift(
          "rotate(90 " + w.toString() + " " + w.toString() + ")"
        );
        break;
      case 2:
        m.unshift(
          "rotate(180 " + (o.width / 2 + o.left).toString() + " " + (o.height / 2 + o.top).toString() + ")"
        );
        break;
      case 3:
        w = o.width / 2 + o.left, m.unshift(
          "rotate(-90 " + w.toString() + " " + w.toString() + ")"
        );
        break;
    }
    C % 2 === 1 && (o.left !== o.top && (w = o.left, o.left = o.top, o.top = w), o.width !== o.height && (w = o.width, o.width = o.height, o.height = w)), m.length && (i = '<g transform="' + m.join(" ") + '">' + i + "</g>");
  });
  const r = s.width, c = s.height, a = o.width, l = o.height;
  let u, f;
  r === null ? (f = c === null ? "1em" : c === "auto" ? l : c, u = Me(f, a / l)) : (u = r === "auto" ? a : r, f = c === null ? Me(u, l / a) : c === "auto" ? l : c);
  const d = {}, h = (g, m) => {
    Ht(m) || (d[g] = m.toString());
  };
  return h("width", u), h("height", f), d.viewBox = o.left.toString() + " " + o.top.toString() + " " + a.toString() + " " + l.toString(), {
    attributes: d,
    body: i
  };
}
const qt = /\sid="(\S+)"/g, Qt = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let Ut = 0;
function Wt(e, n = Qt) {
  const t = [];
  let s;
  for (; s = qt.exec(e); )
    t.push(s[1]);
  if (!t.length)
    return e;
  const o = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return t.forEach((i) => {
    const r = typeof n == "function" ? n(i) : n + (Ut++).toString(), c = i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + c + ')([")]|\\.[a-z])', "g"),
      "$1" + r + o + "$3"
    );
  }), e = e.replace(new RegExp(o, "g"), ""), e;
}
const de = /* @__PURE__ */ Object.create(null);
function Gt(e, n) {
  de[e] = n;
}
function pe(e) {
  return de[e] || de[""];
}
function xe(e) {
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
const Ce = /* @__PURE__ */ Object.create(null), N = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], K = [];
for (; N.length > 0; )
  N.length === 1 || Math.random() > 0.5 ? K.push(N.shift()) : K.push(N.pop());
Ce[""] = xe({
  resources: ["https://api.iconify.design"].concat(K)
});
function Kt(e, n) {
  const t = xe(n);
  return t === null ? !1 : (Ce[e] = t, !0);
}
function Ie(e) {
  return Ce[e];
}
const Jt = () => {
  let e;
  try {
    if (e = fetch, typeof e == "function")
      return e;
  } catch {
  }
};
let Fe = Jt();
function Xt(e, n) {
  const t = Ie(e);
  if (!t)
    return 0;
  let s;
  if (!t.maxURL)
    s = 0;
  else {
    let o = 0;
    t.resources.forEach((r) => {
      o = Math.max(o, r.length);
    });
    const i = n + ".json?icons=";
    s = t.maxURL - o - t.path.length - i.length;
  }
  return s;
}
function Yt(e) {
  return e === 404;
}
const Zt = (e, n, t) => {
  const s = [], o = Xt(e, n), i = "icons";
  let r = {
    type: i,
    provider: e,
    prefix: n,
    icons: []
  }, c = 0;
  return t.forEach((a, l) => {
    c += a.length + 1, c >= o && l > 0 && (s.push(r), r = {
      type: i,
      provider: e,
      prefix: n,
      icons: []
    }, c = a.length), r.icons.push(a);
  }), s.push(r), s;
};
function en(e) {
  if (typeof e == "string") {
    const n = Ie(e);
    if (n)
      return n.path;
  }
  return "/";
}
const tn = (e, n, t) => {
  if (!Fe) {
    t("abort", 424);
    return;
  }
  let s = en(n.provider);
  switch (n.type) {
    case "icons": {
      const i = n.prefix, c = n.icons.join(","), a = new URLSearchParams({
        icons: c
      });
      s += i + ".json?" + a.toString();
      break;
    }
    case "custom": {
      const i = n.uri;
      s += i.slice(0, 1) === "/" ? i.slice(1) : i;
      break;
    }
    default:
      t("abort", 400);
      return;
  }
  let o = 503;
  Fe(e + s).then((i) => {
    const r = i.status;
    if (r !== 200) {
      setTimeout(() => {
        t(Yt(r) ? "abort" : "next", r);
      });
      return;
    }
    return o = 501, i.json();
  }).then((i) => {
    if (typeof i != "object" || i === null) {
      setTimeout(() => {
        i === 404 ? t("abort", i) : t("next", o);
      });
      return;
    }
    setTimeout(() => {
      t("success", i);
    });
  }).catch(() => {
    t("next", o);
  });
}, nn = {
  prepare: Zt,
  send: tn
};
function on(e) {
  const n = {
    loaded: [],
    missing: [],
    pending: []
  }, t = /* @__PURE__ */ Object.create(null);
  e.sort((o, i) => o.provider !== i.provider ? o.provider.localeCompare(i.provider) : o.prefix !== i.prefix ? o.prefix.localeCompare(i.prefix) : o.name.localeCompare(i.name));
  let s = {
    provider: "",
    prefix: "",
    name: ""
  };
  return e.forEach((o) => {
    if (s.name === o.name && s.prefix === o.prefix && s.provider === o.provider)
      return;
    s = o;
    const i = o.provider, r = o.prefix, c = o.name, a = t[i] || (t[i] = /* @__PURE__ */ Object.create(null)), l = a[r] || (a[r] = L(i, r));
    let u;
    c in l.icons ? u = n.loaded : r === "" || l.missing.has(c) ? u = n.missing : u = n.pending;
    const f = {
      provider: i,
      prefix: r,
      name: c
    };
    u.push(f);
  }), n;
}
function st(e, n) {
  e.forEach((t) => {
    const s = t.loaderCallbacks;
    s && (t.loaderCallbacks = s.filter((o) => o.id !== n));
  });
}
function sn(e) {
  e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0, setTimeout(() => {
    e.pendingCallbacksFlag = !1;
    const n = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
    if (!n.length)
      return;
    let t = !1;
    const s = e.provider, o = e.prefix;
    n.forEach((i) => {
      const r = i.icons, c = r.pending.length;
      r.pending = r.pending.filter((a) => {
        if (a.prefix !== o)
          return !0;
        const l = a.name;
        if (e.icons[l])
          r.loaded.push({
            provider: s,
            prefix: o,
            name: l
          });
        else if (e.missing.has(l))
          r.missing.push({
            provider: s,
            prefix: o,
            name: l
          });
        else
          return t = !0, !0;
        return !1;
      }), r.pending.length !== c && (t || st([e], i.id), i.callback(
        r.loaded.slice(0),
        r.missing.slice(0),
        r.pending.slice(0),
        i.abort
      ));
    });
  }));
}
let rn = 0;
function cn(e, n, t) {
  const s = rn++, o = st.bind(null, t, s);
  if (!n.pending.length)
    return o;
  const i = {
    id: s,
    icons: n,
    callback: e,
    abort: o
  };
  return t.forEach((r) => {
    (r.loaderCallbacks || (r.loaderCallbacks = [])).push(i);
  }), o;
}
function an(e, n = !0, t = !1) {
  const s = [];
  return e.forEach((o) => {
    const i = typeof o == "string" ? ne(o, n, t) : o;
    i && s.push(i);
  }), s;
}
var ln = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function un(e, n, t, s) {
  const o = e.resources.length, i = e.random ? Math.floor(Math.random() * o) : e.index;
  let r;
  if (e.random) {
    let p = e.resources.slice(0);
    for (r = []; p.length > 1; ) {
      const _ = Math.floor(Math.random() * p.length);
      r.push(p[_]), p = p.slice(0, _).concat(p.slice(_ + 1));
    }
    r = r.concat(p);
  } else
    r = e.resources.slice(i).concat(e.resources.slice(0, i));
  const c = Date.now();
  let a = "pending", l = 0, u, f = null, d = [], h = [];
  typeof s == "function" && h.push(s);
  function g() {
    f && (clearTimeout(f), f = null);
  }
  function m() {
    a === "pending" && (a = "aborted"), g(), d.forEach((p) => {
      p.status === "pending" && (p.status = "aborted");
    }), d = [];
  }
  function v(p, _) {
    _ && (h = []), typeof p == "function" && h.push(p);
  }
  function O() {
    return {
      startTime: c,
      payload: n,
      status: a,
      queriesSent: l,
      queriesPending: d.length,
      subscribe: v,
      abort: m
    };
  }
  function C() {
    a = "failed", h.forEach((p) => {
      p(void 0, u);
    });
  }
  function w() {
    d.forEach((p) => {
      p.status === "pending" && (p.status = "aborted");
    }), d = [];
  }
  function ie(p, _, S) {
    const P = _ !== "success";
    switch (d = d.filter((I) => I !== p), a) {
      case "pending":
        break;
      case "failed":
        if (P || !e.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (_ === "abort") {
      u = S, C();
      return;
    }
    if (P) {
      u = S, d.length || (r.length ? y() : C());
      return;
    }
    if (g(), w(), !e.random) {
      const I = e.resources.indexOf(p.resource);
      I !== -1 && I !== e.index && (e.index = I);
    }
    a = "completed", h.forEach((I) => {
      I(S);
    });
  }
  function y() {
    if (a !== "pending")
      return;
    g();
    const p = r.shift();
    if (p === void 0) {
      if (d.length) {
        f = setTimeout(() => {
          g(), a === "pending" && (w(), C());
        }, e.timeout);
        return;
      }
      C();
      return;
    }
    const _ = {
      status: "pending",
      resource: p,
      callback: (S, P) => {
        ie(_, S, P);
      }
    };
    d.push(_), l++, f = setTimeout(y, e.rotate), t(p, n, _.callback);
  }
  return setTimeout(y), O;
}
function it(e) {
  const n = {
    ...ln,
    ...e
  };
  let t = [];
  function s() {
    t = t.filter((c) => c().status === "pending");
  }
  function o(c, a, l) {
    const u = un(
      n,
      c,
      a,
      (f, d) => {
        s(), l && l(f, d);
      }
    );
    return t.push(u), u;
  }
  function i(c) {
    return t.find((a) => c(a)) || null;
  }
  return {
    query: o,
    find: i,
    setIndex: (c) => {
      n.index = c;
    },
    getIndex: () => n.index,
    cleanup: s
  };
}
function Be() {
}
const ae = /* @__PURE__ */ Object.create(null);
function fn(e) {
  if (!ae[e]) {
    const n = Ie(e);
    if (!n)
      return;
    const t = it(n), s = {
      config: n,
      redundancy: t
    };
    ae[e] = s;
  }
  return ae[e];
}
function dn(e, n, t) {
  let s, o;
  if (typeof e == "string") {
    const i = pe(e);
    if (!i)
      return t(void 0, 424), Be;
    o = i.send;
    const r = fn(e);
    r && (s = r.redundancy);
  } else {
    const i = xe(e);
    if (i) {
      s = it(i);
      const r = e.resources ? e.resources[0] : "", c = pe(r);
      c && (o = c.send);
    }
  }
  return !s || !o ? (t(void 0, 424), Be) : s.query(n, o, t)().abort;
}
const $e = "iconify2", z = "iconify", rt = z + "-count", Ne = z + "-version", ct = 36e5, pn = 168;
function he(e, n) {
  try {
    return e.getItem(n);
  } catch {
  }
}
function Se(e, n, t) {
  try {
    return e.setItem(n, t), !0;
  } catch {
  }
}
function De(e, n) {
  try {
    e.removeItem(n);
  } catch {
  }
}
function ge(e, n) {
  return Se(e, rt, n.toString());
}
function me(e) {
  return parseInt(he(e, rt)) || 0;
}
const se = {
  local: !0,
  session: !0
}, at = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let ke = !1;
function hn(e) {
  ke = e;
}
let W = typeof window > "u" ? {} : window;
function lt(e) {
  const n = e + "Storage";
  try {
    if (W && W[n] && typeof W[n].length == "number")
      return W[n];
  } catch {
  }
  se[e] = !1;
}
function ut(e, n) {
  const t = lt(e);
  if (!t)
    return;
  const s = he(t, Ne);
  if (s !== $e) {
    if (s) {
      const c = me(t);
      for (let a = 0; a < c; a++)
        De(t, z + a.toString());
    }
    Se(t, Ne, $e), ge(t, 0);
    return;
  }
  const o = Math.floor(Date.now() / ct) - pn, i = (c) => {
    const a = z + c.toString(), l = he(t, a);
    if (typeof l == "string") {
      try {
        const u = JSON.parse(l);
        if (typeof u == "object" && typeof u.cached == "number" && u.cached > o && typeof u.provider == "string" && typeof u.data == "object" && typeof u.data.prefix == "string" && // Valid item: run callback
        n(u, c))
          return !0;
      } catch {
      }
      De(t, a);
    }
  };
  let r = me(t);
  for (let c = r - 1; c >= 0; c--)
    i(c) || (c === r - 1 ? (r--, ge(t, r)) : at[e].add(c));
}
function ft() {
  if (!ke) {
    hn(!0);
    for (const e in se)
      ut(e, (n) => {
        const t = n.data, s = n.provider, o = t.prefix, i = L(
          s,
          o
        );
        if (!we(i, t).length)
          return !1;
        const r = t.lastModified || -1;
        return i.lastModifiedCached = i.lastModifiedCached ? Math.min(i.lastModifiedCached, r) : r, !0;
      });
  }
}
function gn(e, n) {
  const t = e.lastModifiedCached;
  if (
    // Matches or newer
    t && t >= n
  )
    return t === n;
  if (e.lastModifiedCached = n, t)
    for (const s in se)
      ut(s, (o) => {
        const i = o.data;
        return o.provider !== e.provider || i.prefix !== e.prefix || i.lastModified === n;
      });
  return !0;
}
function mn(e, n) {
  ke || ft();
  function t(s) {
    let o;
    if (!se[s] || !(o = lt(s)))
      return;
    const i = at[s];
    let r;
    if (i.size)
      i.delete(r = Array.from(i).shift());
    else if (r = me(o), !ge(o, r + 1))
      return;
    const c = {
      cached: Math.floor(Date.now() / ct),
      provider: e.provider,
      data: n
    };
    return Se(
      o,
      z + r.toString(),
      JSON.stringify(c)
    );
  }
  n.lastModified && !gn(e, n.lastModified) || Object.keys(n.icons).length && (n.not_found && (n = Object.assign({}, n), delete n.not_found), t("local") || t("session"));
}
function Re() {
}
function vn(e) {
  e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
    e.iconsLoaderFlag = !1, sn(e);
  }));
}
function yn(e, n) {
  e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(n).sort() : e.iconsToLoad = n, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
    e.iconsQueueFlag = !1;
    const { provider: t, prefix: s } = e, o = e.iconsToLoad;
    delete e.iconsToLoad;
    let i;
    if (!o || !(i = pe(t)))
      return;
    i.prepare(t, s, o).forEach((c) => {
      dn(t, c, (a) => {
        if (typeof a != "object")
          c.icons.forEach((l) => {
            e.missing.add(l);
          });
        else
          try {
            const l = we(
              e,
              a
            );
            if (!l.length)
              return;
            const u = e.pendingIcons;
            u && l.forEach((f) => {
              u.delete(f);
            }), mn(e, a);
          } catch (l) {
            console.error(l);
          }
        vn(e);
      });
    });
  }));
}
const _n = (e, n) => {
  const t = an(e, !0, tt()), s = on(t);
  if (!s.pending.length) {
    let a = !0;
    return n && setTimeout(() => {
      a && n(
        s.loaded,
        s.missing,
        s.pending,
        Re
      );
    }), () => {
      a = !1;
    };
  }
  const o = /* @__PURE__ */ Object.create(null), i = [];
  let r, c;
  return s.pending.forEach((a) => {
    const { provider: l, prefix: u } = a;
    if (u === c && l === r)
      return;
    r = l, c = u, i.push(L(l, u));
    const f = o[l] || (o[l] = /* @__PURE__ */ Object.create(null));
    f[u] || (f[u] = []);
  }), s.pending.forEach((a) => {
    const { provider: l, prefix: u, name: f } = a, d = L(l, u), h = d.pendingIcons || (d.pendingIcons = /* @__PURE__ */ new Set());
    h.has(f) || (h.add(f), o[l][u].push(f));
  }), i.forEach((a) => {
    const { provider: l, prefix: u } = a;
    o[l][u].length && yn(a, o[l][u]);
  }), n ? cn(n, s, i) : Re;
};
function bn(e, n) {
  const t = {
    ...e
  };
  for (const s in n) {
    const o = n[s], i = typeof o;
    s in nt ? (o === null || o && (i === "string" || i === "number")) && (t[s] = o) : i === typeof t[s] && (t[s] = s === "rotate" ? o % 4 : o);
  }
  return t;
}
const wn = /[\s,]+/;
function xn(e, n) {
  n.split(wn).forEach((t) => {
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
function Cn(e, n = 0) {
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
      let i = parseFloat(e.slice(0, e.length - t.length));
      return isNaN(i) ? 0 : (i = i / o, i % 1 === 0 ? s(i) : 0);
    }
  }
  return n;
}
function In(e, n) {
  let t = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const s in n)
    t += " " + s + '="' + n[s] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + t + ">" + e + "</svg>";
}
function Sn(e) {
  return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function kn(e) {
  return "data:image/svg+xml," + Sn(e);
}
function On(e) {
  return 'url("' + kn(e) + '")';
}
const Ve = {
  ...ot,
  inline: !1
}, En = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, Tn = {
  display: "inline-block"
}, ve = {
  backgroundColor: "currentColor"
}, dt = {
  backgroundColor: "transparent"
}, He = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, ze = {
  webkitMask: ve,
  mask: ve,
  background: dt
};
for (const e in ze) {
  const n = ze[e];
  for (const t in He)
    n[e + t] = He[t];
}
const J = {};
["horizontal", "vertical"].forEach((e) => {
  const n = e.slice(0, 1) + "Flip";
  J[e + "-flip"] = n, J[e.slice(0, 1) + "-flip"] = n, J[e + "Flip"] = n;
});
function qe(e) {
  return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
const Qe = (e, n) => {
  const t = bn(Ve, n), s = { ...En }, o = n.mode || "svg", i = {}, r = n.style, c = typeof r == "object" && !(r instanceof Array) ? r : {};
  for (let m in n) {
    const v = n[m];
    if (v !== void 0)
      switch (m) {
        case "icon":
        case "style":
        case "onLoad":
        case "mode":
          break;
        case "inline":
        case "hFlip":
        case "vFlip":
          t[m] = v === !0 || v === "true" || v === 1;
          break;
        case "flip":
          typeof v == "string" && xn(t, v);
          break;
        case "color":
          i.color = v;
          break;
        case "rotate":
          typeof v == "string" ? t[m] = Cn(v) : typeof v == "number" && (t[m] = v);
          break;
        case "ariaHidden":
        case "aria-hidden":
          v !== !0 && v !== "true" && delete s["aria-hidden"];
          break;
        default: {
          const O = J[m];
          O ? (v === !0 || v === "true" || v === 1) && (t[O] = !0) : Ve[m] === void 0 && (s[m] = v);
        }
      }
  }
  const a = zt(e, t), l = a.attributes;
  if (t.inline && (i.verticalAlign = "-0.125em"), o === "svg") {
    s.style = {
      ...i,
      ...c
    }, Object.assign(s, l);
    let m = 0, v = n.id;
    return typeof v == "string" && (v = v.replace(/-/g, "_")), s.innerHTML = Wt(a.body, v ? () => v + "ID" + m++ : "iconifyVue"), Te("svg", s);
  }
  const { body: u, width: f, height: d } = e, h = o === "mask" || (o === "bg" ? !1 : u.indexOf("currentColor") !== -1), g = In(u, {
    ...l,
    width: f + "",
    height: d + ""
  });
  return s.style = {
    ...i,
    "--svg": On(g),
    width: qe(l.width),
    height: qe(l.height),
    ...Tn,
    ...h ? ve : dt,
    ...c
  }, Te("span", s);
};
tt(!0);
Gt("", nn);
if (typeof document < "u" && typeof window < "u") {
  ft();
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const n = e.IconifyPreload, t = "Invalid IconifyPreload syntax.";
    typeof n == "object" && n !== null && (n instanceof Array ? n : [n]).forEach((s) => {
      try {
        // Check if item is an object and not null/array
        (typeof s != "object" || s === null || s instanceof Array || // Check for 'icons' and 'prefix'
        typeof s.icons != "object" || typeof s.prefix != "string" || // Add icon set
        !Dt(s)) && console.error(t);
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
          Kt(t, o) || console.error(s);
        } catch {
          console.error(s);
        }
      }
  }
}
const jn = {
  ...oe,
  body: ""
}, R = B({
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
      if (typeof e != "string" || (t = ne(e, !1, !0)) === null)
        return this.abortLoading(), null;
      const s = $t(t);
      if (!s)
        return (!this._loadingIcon || this._loadingIcon.name !== e) && (this.abortLoading(), this._name = "", s !== null && (this._loadingIcon = {
          name: e,
          abort: _n([t], () => {
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
      return Qe(jn, e);
    let t = e;
    return n.classes && (t = {
      ...e,
      class: (typeof e.class == "string" ? e.class + " " : "") + n.classes.join(" ")
    }), Qe({
      ...oe,
      ...n.data
    }, t);
  }
}), te = (e) => {
  const n = [], t = {};
  return e({ classes: n, styles: t }), {
    class: n,
    style: t
  };
}, X = (e) => typeof e == "number" ? `${e}px` : e, Pn = ["title"], An = { class: "vui-cascade-option__string" }, Ln = { class: "vui-cascade-option__string-left" }, Mn = { class: "vui-cascade-option__tree-btn-space" }, Fn = { class: "py-1" }, Bn = {
  key: 0,
  class: "vui-cascade-oprion__next-btn"
}, $n = { key: 0 }, Nn = { key: 1 }, Dn = { key: 2 }, Rn = /* @__PURE__ */ B({
  __name: "CascadeOption",
  props: {
    option: {},
    cascade: {}
  },
  emits: ["on-click"],
  setup(e, { emit: n }) {
    const t = e, s = vt("selectedOptions"), o = T(!1), i = k(() => !!t.option.options || !!t.option.getAsyncOptions), r = k(() => !!t.option.children), c = k(() => {
      var h;
      const u = (h = s == null ? void 0 : s.value) == null ? void 0 : h.find((g, m) => m === t.cascade.id);
      if (!u)
        return !1;
      const f = u.id ?? u.value, d = t.option.id || t.option.value;
      return f === d;
    }), a = k(() => te(({ classes: u }) => {
      c.value && u.push("vui-cascade-option--selected");
    }));
    function l() {
      const u = { option: t.option, last: !i.value };
      n("on-click", u);
    }
    return (u, f) => {
      const d = je("CascadeOption", !0), h = je("CollapseBody");
      return b(), x("div", Y({
        class: "vui-cascade-option",
        onClick: l
      }, a.value, {
        title: t.option.title
      }), [
        E("div", An, [
          E("div", Ln, [
            E("div", Mn, [
              r.value ? (b(), x("div", {
                key: 0,
                class: yt(["vui-cascade-option__tree-btn", { "vui-cascade-option__tree-btn--opened": o.value }]),
                onClick: f[0] || (f[0] = _t((g) => o.value = !o.value, ["stop"]))
              }, [
                j(F(R), { icon: "bxs:right-arrow" })
              ], 2)) : A("", !0)
            ]),
            E("div", Fn, le(t.option.title), 1)
          ]),
          i.value ? (b(), x("div", Bn, [
            u.option.loadingState ? u.option.loadingState === "process" ? (b(), x("span", Nn, [
              j(F(R), { icon: "ep:loading" })
            ])) : u.option.loadingState === "ready" ? (b(), x("span", Dn, [
              j(F(R), { icon: "ep:refresh" })
            ])) : A("", !0) : (b(), x("span", $n, [
              j(F(R), { icon: "ep:arrow-right" })
            ]))
          ])) : A("", !0)
        ]),
        r.value ? (b(), Z(h, {
          key: 0,
          expanded: o.value,
          option: t.option
        }, {
          default: ye(() => [
            (b(!0), x(_e, null, be(u.option.children, (g) => (b(), Z(d, {
              key: g.id || g.value,
              cascade: u.cascade,
              option: g,
              onOnClick: f[1] || (f[1] = (m) => n("on-click", m))
            }, null, 8, ["cascade", "option"]))), 128))
          ]),
          _: 1
        }, 8, ["expanded", "option"])) : A("", !0)
      ], 16, Pn);
    };
  }
});
const q = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [s, o] of n)
    t[s] = o;
  return t;
}, Vn = /* @__PURE__ */ q(Rn, [["__scopeId", "data-v-ffb37f0f"]]), Hn = { class: "vui-cascade__scrollable" }, zn = {
  key: 0,
  class: "vui-cascade__top-space"
}, qn = {
  key: 0,
  class: "vui-cascade__fog"
}, Qn = /* @__PURE__ */ B({
  __name: "Cascade",
  props: {
    cascade: {},
    padding: {},
    fog: { type: Boolean },
    canBack: { type: Boolean },
    configs: {}
  },
  emits: ["on-select", "on-back"],
  setup(e, { emit: n }) {
    const t = e, s = k(() => te(({ styles: r }) => {
      var c, a, l;
      r.width = X(((c = t.configs) == null ? void 0 : c.width) || "240px"), (a = t.configs) != null && a.maxHeight ? r.maxHeight = X(t.configs.maxHeight) : r.height = X(((l = t.configs) == null ? void 0 : l.height) || "120px"), r.left = `${12 * t.padding}px`;
    }));
    function o(r) {
      t.fog || n("on-select", { cascade: t.cascade, optionParams: r });
    }
    function i() {
      n("on-back");
    }
    return (r, c) => (b(), x("div", Y({ class: "vui-cascade" }, s.value), [
      E("div", Hn, [
        t.canBack ? (b(), x("div", zn, [
          E("div", {
            class: "vui-cascade__back-btn",
            onClick: i
          }, [
            Ue(r.$slots, "backBtn", bt(wt({ back: i })), () => [
              j(F(R), { icon: "ep:back" })
            ], !0)
          ])
        ])) : A("", !0),
        (b(!0), x(_e, null, be(r.cascade.options, (a) => (b(), Z(Vn, {
          key: a.id || a.value,
          cascade: r.cascade,
          option: a,
          onOnClick: o
        }, null, 8, ["cascade", "option"]))), 128)),
        j(xt, { class: "vui-cascade__fog-transition" }, {
          default: ye(() => [
            t.fog ? (b(), x("div", qn)) : A("", !0)
          ]),
          _: 1
        })
      ])
    ], 16));
  }
});
const Un = /* @__PURE__ */ q(Qn, [["__scopeId", "data-v-9a933cca"]]), Wn = { class: "vui-cascade-input__label" }, Gn = {
  key: 0,
  class: "vui-cascade-input__error"
}, Kn = /* @__PURE__ */ B({
  __name: "CascadeInput",
  props: {
    values: {},
    errorMsg: {},
    separator: { default: "/" }
  },
  emits: ["on-click"],
  setup(e, { emit: n }) {
    const t = e, s = k(() => t.values.join(t.separator));
    function o() {
      n("on-click");
    }
    return (i, r) => (b(), x("div", {
      class: "vui-cascader__input",
      onClick: o
    }, [
      E("div", Wn, le(s.value), 1),
      i.errorMsg ? (b(), x("div", Gn, le(i.errorMsg), 1)) : A("", !0)
    ]));
  }
});
const Jn = /* @__PURE__ */ q(Kn, [["__scopeId", "data-v-8a6e07f2"]]), Xn = { class: "vui-cascader__dropdown-wrapper" }, Yn = { class: "vui-cascader__dropdown" }, Zn = /* @__PURE__ */ B({
  __name: "Cascader",
  props: {
    modelValue: {},
    data: {},
    separator: { default: "/" },
    cascadesConfig: {},
    transform: {},
    reform: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const t = e, s = T(null), o = {
      value: "__ROOT_CASCADE__",
      title: "",
      options: t.data
    }, i = T(!1), r = T(""), c = T([]);
    v(o, 0);
    const a = k(() => i.value ? c.value : []), l = T([]);
    l.value = w(t.modelValue), Ct("selectedOptions", l);
    const u = k(() => l.value.map((y) => y.title)), f = (y) => {
      var p;
      return ((p = c.value[c.value.length - 1]) == null ? void 0 : p.id) === y.id;
    };
    function d(y) {
      i.value = y, y || (l.value = w(t.modelValue));
    }
    We(() => {
      jt(s.value, g);
    });
    function h() {
      d(!0);
    }
    function g() {
      d(!1);
    }
    function m({ cascade: y, optionParams: p }) {
      if (l.value = l.value.slice(0, y.id), l.value[y.id] = p.option, p.last) {
        n("update:modelValue", ie(l.value)), Ge(() => {
          d(!1);
        });
        return;
      }
      v(p.option);
    }
    function v(y, p) {
      const _ = p || c.value.length;
      p !== void 0 && (c.value = c.value.slice(0, p)), c.value.push(O(y, _));
    }
    function O(y, p) {
      return { id: p, options: y.options || [] };
    }
    function C() {
      c.value.pop();
    }
    function w(y) {
      var S, P;
      if (t.transform)
        return t.transform(y, O);
      const p = [], _ = y;
      for (let I = 0; I < _.length; I++) {
        const pt = _[I], Oe = (U) => {
          var Ee;
          let $ = U.find((M) => M.value === pt);
          if ($)
            return $;
          for (let M = 0; M < U.length; M++)
            if ((Ee = U[M].children) != null && Ee.length && ($ = Oe(U[M].children), $))
              return $;
        }, Q = Oe((S = c.value[I]) == null ? void 0 : S.options);
        if (Q)
          if (p.push(Q), (P = Q.options) != null && P.length)
            v(Q, I + 1);
          else if (I < _.length - 1) {
            r.value = "Can`t display such a value";
            break;
          } else
            I === _.length - 1 && (r.value = "");
        else {
          r.value = "Can`t display such a value";
          break;
        }
      }
      return p;
    }
    function ie(y) {
      return t.reform ? t.reform(y) : y.map((p) => p.value);
    }
    return (y, p) => (b(), x("div", {
      class: "vui-cascader",
      ref_key: "cascaderEl",
      ref: s
    }, [
      j(Jn, {
        values: u.value,
        separator: t.separator,
        onOnClick: h
      }, null, 8, ["values", "separator"]),
      E("div", Xn, [
        E("div", Yn, [
          j(It, {
            tag: "div",
            mode: "in-out",
            name: "vui-cascader-transition"
          }, {
            default: ye(() => [
              (b(!0), x(_e, null, be(a.value, (_, S) => (b(), Z(Un, {
                key: _.id,
                cascade: _,
                padding: S,
                fog: !f(_),
                canBack: S > 0,
                configs: t.cascadesConfig,
                onOnSelect: m,
                onOnBack: C
              }, null, 8, ["cascade", "padding", "fog", "canBack", "configs"]))), 128))
            ]),
            _: 1
          })
        ])
      ])
    ], 512));
  }
});
const eo = /* @__PURE__ */ q(Zn, [["__scopeId", "data-v-47720ba2"]]), to = /* @__PURE__ */ B({
  __name: "CollapseBody",
  props: {
    expanded: { type: Boolean },
    option: {},
    padding: {}
  },
  setup(e) {
    const n = e, t = T(null), s = T(0);
    We(() => {
      var f, d;
      (f = t.value) == null || f.addEventListener("vui-collapse-expand-changed", o), s.value = ((d = t.value) == null ? void 0 : d.offsetHeight) || 0;
    });
    function o(f) {
      f.target !== t.value && i();
    }
    function i() {
      s.value = void 0;
    }
    function r() {
      var f;
      n.expanded ? s.value = ((f = t.value) == null ? void 0 : f.offsetHeight) || 0 : s.value = 0;
    }
    const c = k(() => (Ge(() => r()), n.expanded));
    function a() {
      var d;
      const f = new CustomEvent("vui-collapse-expand-changed", { bubbles: !0 });
      (d = t.value) == null || d.dispatchEvent(f);
    }
    const l = k(() => te(({ styles: f }) => {
      s.value !== void 0 ? c.value ? (f.height = `${s.value}px`, f.opacity = "1", a()) : (f.height = "0", f.opacity = "0") : r();
    })), u = k(() => te(({ styles: f }) => {
      f.paddingLeft = X(n.padding || "1rem");
    }));
    return (f, d) => (b(), x("div", Y({ class: "vui-collapse-body" }, l.value), [
      E("div", Y({
        class: "vui-collapse-body__content",
        ref_key: "collapseBodyEl",
        ref: t
      }, u.value), [
        Ue(f.$slots, "default", {}, void 0, !0)
      ], 16)
    ], 16));
  }
});
const no = /* @__PURE__ */ q(to, [["__scopeId", "data-v-1abca66d"]]), so = {
  install: (e) => {
    e.component("Cascader", eo), e.component("CollapseBody", no);
  }
};
export {
  eo as Cascader,
  no as CollapseBody,
  te as createStyleClasses,
  so as default
};
