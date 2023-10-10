import { getCurrentScope as fn, onScopeDispose as dn, unref as X, watch as Te, defineComponent as J, h as ae, ref as D, onMounted as Le, computed as P, nextTick as Pe, openBlock as C, createElementBlock as k, mergeProps as pt, createElementVNode as N, renderSlot as et, createBlock as ht, toDisplayString as lt, inject as pn, resolveComponent as hn, normalizeClass as gn, withModifiers as mn, createVNode as B, createCommentVNode as W, withCtx as at, Fragment as Tt, renderList as Zt, normalizeProps as ut, guardReactiveProps as ft, Transition as yn, provide as vn, TransitionGroup as wn } from "vue";
function xn(t) {
  return fn() ? (dn(t), !0) : !1;
}
function Re(t) {
  return typeof t == "function" ? t() : X(t);
}
const Me = typeof window < "u" && typeof document < "u", bn = Object.prototype.toString, _n = (t) => bn.call(t) === "[object Object]", Ht = () => {
}, Cn = /* @__PURE__ */ kn();
function kn() {
  var t;
  return Me && ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.userAgent) && /* @__PURE__ */ /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
function ct(t) {
  var e;
  const n = Re(t);
  return (e = n == null ? void 0 : n.$el) != null ? e : n;
}
const Fe = Me ? window : void 0;
function Nt(...t) {
  let e, n, o, i;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([n, o, i] = t, e = Fe) : [e, n, o, i] = t, !e)
    return Ht;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const s = [], r = () => {
    s.forEach((u) => u()), s.length = 0;
  }, c = (u, f, d, p) => (u.addEventListener(f, d, p), () => u.removeEventListener(f, d, p)), l = Te(
    () => [ct(e), Re(i)],
    ([u, f]) => {
      if (r(), !u)
        return;
      const d = _n(f) ? { ...f } : f;
      s.push(
        ...n.flatMap((p) => o.map((h) => c(u, p, h, d)))
      );
    },
    { immediate: !0, flush: "post" }
  ), a = () => {
    l(), r();
  };
  return xn(a), a;
}
let ue = !1;
function Sn(t, e, n = {}) {
  const { window: o = Fe, ignore: i = [], capture: s = !0, detectIframe: r = !1 } = n;
  if (!o)
    return;
  Cn && !ue && (ue = !0, Array.from(o.document.body.children).forEach((d) => d.addEventListener("click", Ht)), o.document.documentElement.addEventListener("click", Ht));
  let c = !0;
  const l = (d) => i.some((p) => {
    if (typeof p == "string")
      return Array.from(o.document.querySelectorAll(p)).some((h) => h === d.target || d.composedPath().includes(h));
    {
      const h = ct(p);
      return h && (d.target === h || d.composedPath().includes(h));
    }
  }), u = [
    Nt(o, "click", (d) => {
      const p = ct(t);
      if (!(!p || p === d.target || d.composedPath().includes(p))) {
        if (d.detail === 0 && (c = !l(d)), !c) {
          c = !0;
          return;
        }
        e(d);
      }
    }, { passive: !0, capture: s }),
    Nt(o, "pointerdown", (d) => {
      const p = ct(t);
      p && (c = !d.composedPath().includes(p) && !l(d));
    }, { passive: !0 }),
    r && Nt(o, "blur", (d) => {
      setTimeout(() => {
        var p;
        const h = ct(t);
        ((p = o.document.activeElement) == null ? void 0 : p.tagName) === "IFRAME" && !(h != null && h.contains(o.document.activeElement)) && e(d);
      }, 0);
    })
  ].filter(Boolean);
  return () => u.forEach((d) => d());
}
const dt = /^[a-z0-9]+(-[a-z0-9]+)*$/, Lt = (t, e, n, o = "") => {
  const i = t.split(":");
  if (t.slice(0, 1) === "@") {
    if (i.length < 2 || i.length > 3)
      return null;
    o = i.shift().slice(1);
  }
  if (i.length > 3 || !i.length)
    return null;
  if (i.length > 1) {
    const c = i.pop(), l = i.pop(), a = {
      // Allow provider without '@': "provider:prefix:name"
      provider: i.length > 0 ? i[0] : o,
      prefix: l,
      name: c
    };
    return e && !_t(a) ? null : a;
  }
  const s = i[0], r = s.split("-");
  if (r.length > 1) {
    const c = {
      provider: o,
      prefix: r.shift(),
      name: r.join("-")
    };
    return e && !_t(c) ? null : c;
  }
  if (n && o === "") {
    const c = {
      provider: o,
      prefix: "",
      name: s
    };
    return e && !_t(c, n) ? null : c;
  }
  return null;
}, _t = (t, e) => t ? !!((t.provider === "" || t.provider.match(dt)) && (e && t.prefix === "" || t.prefix.match(dt)) && t.name.match(dt)) : !1, je = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), Ot = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), Pt = Object.freeze({
  ...je,
  ...Ot
}), Wt = Object.freeze({
  ...Pt,
  body: "",
  hidden: !1
});
function On(t, e) {
  const n = {};
  !t.hFlip != !e.hFlip && (n.hFlip = !0), !t.vFlip != !e.vFlip && (n.vFlip = !0);
  const o = ((t.rotate || 0) + (e.rotate || 0)) % 4;
  return o && (n.rotate = o), n;
}
function fe(t, e) {
  const n = On(t, e);
  for (const o in Wt)
    o in Ot ? o in t && !(o in n) && (n[o] = Ot[o]) : o in e ? n[o] = e[o] : o in t && (n[o] = t[o]);
  return n;
}
function In(t, e) {
  const n = t.icons, o = t.aliases || /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null);
  function s(r) {
    if (n[r])
      return i[r] = [];
    if (!(r in i)) {
      i[r] = null;
      const c = o[r] && o[r].parent, l = c && s(c);
      l && (i[r] = [c].concat(l));
    }
    return i[r];
  }
  return (e || Object.keys(n).concat(Object.keys(o))).forEach(s), i;
}
function En(t, e, n) {
  const o = t.icons, i = t.aliases || /* @__PURE__ */ Object.create(null);
  let s = {};
  function r(c) {
    s = fe(
      o[c] || i[c],
      s
    );
  }
  return r(e), n.forEach(r), fe(t, s);
}
function De(t, e) {
  const n = [];
  if (typeof t != "object" || typeof t.icons != "object")
    return n;
  t.not_found instanceof Array && t.not_found.forEach((i) => {
    e(i, null), n.push(i);
  });
  const o = In(t);
  for (const i in o) {
    const s = o[i];
    s && (e(i, En(t, i, s)), n.push(i));
  }
  return n;
}
const An = {
  provider: "",
  aliases: {},
  not_found: {},
  ...je
};
function $t(t, e) {
  for (const n in e)
    if (n in t && typeof t[n] != typeof e[n])
      return !1;
  return !0;
}
function Be(t) {
  if (typeof t != "object" || t === null)
    return null;
  const e = t;
  if (typeof e.prefix != "string" || !t.icons || typeof t.icons != "object" || !$t(t, An))
    return null;
  const n = e.icons;
  for (const i in n) {
    const s = n[i];
    if (!i.match(dt) || typeof s.body != "string" || !$t(
      s,
      Wt
    ))
      return null;
  }
  const o = e.aliases || /* @__PURE__ */ Object.create(null);
  for (const i in o) {
    const s = o[i], r = s.parent;
    if (!i.match(dt) || typeof r != "string" || !n[r] && !o[r] || !$t(
      s,
      Wt
    ))
      return null;
  }
  return e;
}
const de = /* @__PURE__ */ Object.create(null);
function Tn(t, e) {
  return {
    provider: t,
    prefix: e,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function G(t, e) {
  const n = de[t] || (de[t] = /* @__PURE__ */ Object.create(null));
  return n[e] || (n[e] = Tn(t, e));
}
function te(t, e) {
  return Be(e) ? De(e, (n, o) => {
    o ? t.icons[n] = o : t.missing.add(n);
  }) : [];
}
function Ln(t, e, n) {
  try {
    if (typeof n.body == "string")
      return t.icons[e] = { ...n }, !0;
  } catch {
  }
  return !1;
}
let gt = !1;
function Ne(t) {
  return typeof t == "boolean" && (gt = t), gt;
}
function Pn(t) {
  const e = typeof t == "string" ? Lt(t, !0, gt) : t;
  if (e) {
    const n = G(e.provider, e.prefix), o = e.name;
    return n.icons[o] || (n.missing.has(o) ? null : void 0);
  }
}
function Rn(t, e) {
  const n = Lt(t, !0, gt);
  if (!n)
    return !1;
  const o = G(n.provider, n.prefix);
  return Ln(o, n.name, e);
}
function Mn(t, e) {
  if (typeof t != "object")
    return !1;
  if (typeof e != "string" && (e = t.provider || ""), gt && !e && !t.prefix) {
    let i = !1;
    return Be(t) && (t.prefix = "", De(t, (s, r) => {
      r && Rn(s, r) && (i = !0);
    })), i;
  }
  const n = t.prefix;
  if (!_t({
    provider: e,
    prefix: n,
    name: "a"
  }))
    return !1;
  const o = G(e, n);
  return !!te(o, t);
}
const $e = Object.freeze({
  width: null,
  height: null
}), Ve = Object.freeze({
  // Dimensions
  ...$e,
  // Transformations
  ...Ot
}), Fn = /(-?[0-9.]*[0-9]+[0-9.]*)/g, jn = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function pe(t, e, n) {
  if (e === 1)
    return t;
  if (n = n || 100, typeof t == "number")
    return Math.ceil(t * e * n) / n;
  if (typeof t != "string")
    return t;
  const o = t.split(Fn);
  if (o === null || !o.length)
    return t;
  const i = [];
  let s = o.shift(), r = jn.test(s);
  for (; ; ) {
    if (r) {
      const c = parseFloat(s);
      isNaN(c) ? i.push(s) : i.push(Math.ceil(c * e * n) / n);
    } else
      i.push(s);
    if (s = o.shift(), s === void 0)
      return i.join("");
    r = !r;
  }
}
const Dn = (t) => t === "unset" || t === "undefined" || t === "none";
function Bn(t, e) {
  const n = {
    ...Pt,
    ...t
  }, o = {
    ...Ve,
    ...e
  }, i = {
    left: n.left,
    top: n.top,
    width: n.width,
    height: n.height
  };
  let s = n.body;
  [n, o].forEach((h) => {
    const g = [], m = h.hFlip, _ = h.vFlip;
    let x = h.rotate;
    m ? _ ? x += 2 : (g.push(
      "translate(" + (i.width + i.left).toString() + " " + (0 - i.top).toString() + ")"
    ), g.push("scale(-1 1)"), i.top = i.left = 0) : _ && (g.push(
      "translate(" + (0 - i.left).toString() + " " + (i.height + i.top).toString() + ")"
    ), g.push("scale(1 -1)"), i.top = i.left = 0);
    let y;
    switch (x < 0 && (x -= Math.floor(x / 4) * 4), x = x % 4, x) {
      case 1:
        y = i.height / 2 + i.top, g.unshift(
          "rotate(90 " + y.toString() + " " + y.toString() + ")"
        );
        break;
      case 2:
        g.unshift(
          "rotate(180 " + (i.width / 2 + i.left).toString() + " " + (i.height / 2 + i.top).toString() + ")"
        );
        break;
      case 3:
        y = i.width / 2 + i.left, g.unshift(
          "rotate(-90 " + y.toString() + " " + y.toString() + ")"
        );
        break;
    }
    x % 2 === 1 && (i.left !== i.top && (y = i.left, i.left = i.top, i.top = y), i.width !== i.height && (y = i.width, i.width = i.height, i.height = y)), g.length && (s = '<g transform="' + g.join(" ") + '">' + s + "</g>");
  });
  const r = o.width, c = o.height, l = i.width, a = i.height;
  let u, f;
  r === null ? (f = c === null ? "1em" : c === "auto" ? a : c, u = pe(f, l / a)) : (u = r === "auto" ? l : r, f = c === null ? pe(u, a / l) : c === "auto" ? a : c);
  const d = {}, p = (h, g) => {
    Dn(g) || (d[h] = g.toString());
  };
  return p("width", u), p("height", f), d.viewBox = i.left.toString() + " " + i.top.toString() + " " + l.toString() + " " + a.toString(), {
    attributes: d,
    body: s
  };
}
const Nn = /\sid="(\S+)"/g, $n = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let Vn = 0;
function Hn(t, e = $n) {
  const n = [];
  let o;
  for (; o = Nn.exec(t); )
    n.push(o[1]);
  if (!n.length)
    return t;
  const i = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return n.forEach((s) => {
    const r = typeof e == "function" ? e(s) : e + (Vn++).toString(), c = s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    t = t.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + c + ')([")]|\\.[a-z])', "g"),
      "$1" + r + i + "$3"
    );
  }), t = t.replace(new RegExp(i, "g"), ""), t;
}
const zt = /* @__PURE__ */ Object.create(null);
function Wn(t, e) {
  zt[t] = e;
}
function qt(t) {
  return zt[t] || zt[""];
}
function ee(t) {
  let e;
  if (typeof t.resources == "string")
    e = [t.resources];
  else if (e = t.resources, !(e instanceof Array) || !e.length)
    return null;
  return {
    // API hosts
    resources: e,
    // Root path
    path: t.path || "/",
    // URL length limit
    maxURL: t.maxURL || 500,
    // Timeout before next host is used.
    rotate: t.rotate || 750,
    // Timeout before failing query.
    timeout: t.timeout || 5e3,
    // Randomise default API end point.
    random: t.random === !0,
    // Start index
    index: t.index || 0,
    // Receive data after time out (used if time out kicks in first, then API module sends data anyway).
    dataAfterTimeout: t.dataAfterTimeout !== !1
  };
}
const ne = /* @__PURE__ */ Object.create(null), rt = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], Ct = [];
for (; rt.length > 0; )
  rt.length === 1 || Math.random() > 0.5 ? Ct.push(rt.shift()) : Ct.push(rt.pop());
ne[""] = ee({
  resources: ["https://api.iconify.design"].concat(Ct)
});
function zn(t, e) {
  const n = ee(e);
  return n === null ? !1 : (ne[t] = n, !0);
}
function oe(t) {
  return ne[t];
}
const qn = () => {
  let t;
  try {
    if (t = fetch, typeof t == "function")
      return t;
  } catch {
  }
};
let he = qn();
function Qn(t, e) {
  const n = oe(t);
  if (!n)
    return 0;
  let o;
  if (!n.maxURL)
    o = 0;
  else {
    let i = 0;
    n.resources.forEach((r) => {
      i = Math.max(i, r.length);
    });
    const s = e + ".json?icons=";
    o = n.maxURL - i - n.path.length - s.length;
  }
  return o;
}
function Un(t) {
  return t === 404;
}
const Kn = (t, e, n) => {
  const o = [], i = Qn(t, e), s = "icons";
  let r = {
    type: s,
    provider: t,
    prefix: e,
    icons: []
  }, c = 0;
  return n.forEach((l, a) => {
    c += l.length + 1, c >= i && a > 0 && (o.push(r), r = {
      type: s,
      provider: t,
      prefix: e,
      icons: []
    }, c = l.length), r.icons.push(l);
  }), o.push(r), o;
};
function Xn(t) {
  if (typeof t == "string") {
    const e = oe(t);
    if (e)
      return e.path;
  }
  return "/";
}
const Gn = (t, e, n) => {
  if (!he) {
    n("abort", 424);
    return;
  }
  let o = Xn(e.provider);
  switch (e.type) {
    case "icons": {
      const s = e.prefix, c = e.icons.join(","), l = new URLSearchParams({
        icons: c
      });
      o += s + ".json?" + l.toString();
      break;
    }
    case "custom": {
      const s = e.uri;
      o += s.slice(0, 1) === "/" ? s.slice(1) : s;
      break;
    }
    default:
      n("abort", 400);
      return;
  }
  let i = 503;
  he(t + o).then((s) => {
    const r = s.status;
    if (r !== 200) {
      setTimeout(() => {
        n(Un(r) ? "abort" : "next", r);
      });
      return;
    }
    return i = 501, s.json();
  }).then((s) => {
    if (typeof s != "object" || s === null) {
      setTimeout(() => {
        s === 404 ? n("abort", s) : n("next", i);
      });
      return;
    }
    setTimeout(() => {
      n("success", s);
    });
  }).catch(() => {
    n("next", i);
  });
}, Yn = {
  prepare: Kn,
  send: Gn
};
function Jn(t) {
  const e = {
    loaded: [],
    missing: [],
    pending: []
  }, n = /* @__PURE__ */ Object.create(null);
  t.sort((i, s) => i.provider !== s.provider ? i.provider.localeCompare(s.provider) : i.prefix !== s.prefix ? i.prefix.localeCompare(s.prefix) : i.name.localeCompare(s.name));
  let o = {
    provider: "",
    prefix: "",
    name: ""
  };
  return t.forEach((i) => {
    if (o.name === i.name && o.prefix === i.prefix && o.provider === i.provider)
      return;
    o = i;
    const s = i.provider, r = i.prefix, c = i.name, l = n[s] || (n[s] = /* @__PURE__ */ Object.create(null)), a = l[r] || (l[r] = G(s, r));
    let u;
    c in a.icons ? u = e.loaded : r === "" || a.missing.has(c) ? u = e.missing : u = e.pending;
    const f = {
      provider: s,
      prefix: r,
      name: c
    };
    u.push(f);
  }), e;
}
function He(t, e) {
  t.forEach((n) => {
    const o = n.loaderCallbacks;
    o && (n.loaderCallbacks = o.filter((i) => i.id !== e));
  });
}
function Zn(t) {
  t.pendingCallbacksFlag || (t.pendingCallbacksFlag = !0, setTimeout(() => {
    t.pendingCallbacksFlag = !1;
    const e = t.loaderCallbacks ? t.loaderCallbacks.slice(0) : [];
    if (!e.length)
      return;
    let n = !1;
    const o = t.provider, i = t.prefix;
    e.forEach((s) => {
      const r = s.icons, c = r.pending.length;
      r.pending = r.pending.filter((l) => {
        if (l.prefix !== i)
          return !0;
        const a = l.name;
        if (t.icons[a])
          r.loaded.push({
            provider: o,
            prefix: i,
            name: a
          });
        else if (t.missing.has(a))
          r.missing.push({
            provider: o,
            prefix: i,
            name: a
          });
        else
          return n = !0, !0;
        return !1;
      }), r.pending.length !== c && (n || He([t], s.id), s.callback(
        r.loaded.slice(0),
        r.missing.slice(0),
        r.pending.slice(0),
        s.abort
      ));
    });
  }));
}
let to = 0;
function eo(t, e, n) {
  const o = to++, i = He.bind(null, n, o);
  if (!e.pending.length)
    return i;
  const s = {
    id: o,
    icons: e,
    callback: t,
    abort: i
  };
  return n.forEach((r) => {
    (r.loaderCallbacks || (r.loaderCallbacks = [])).push(s);
  }), i;
}
function no(t, e = !0, n = !1) {
  const o = [];
  return t.forEach((i) => {
    const s = typeof i == "string" ? Lt(i, e, n) : i;
    s && o.push(s);
  }), o;
}
var oo = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function io(t, e, n, o) {
  const i = t.resources.length, s = t.random ? Math.floor(Math.random() * i) : t.index;
  let r;
  if (t.random) {
    let b = t.resources.slice(0);
    for (r = []; b.length > 1; ) {
      const O = Math.floor(Math.random() * b.length);
      r.push(b[O]), b = b.slice(0, O).concat(b.slice(O + 1));
    }
    r = r.concat(b);
  } else
    r = t.resources.slice(s).concat(t.resources.slice(0, s));
  const c = Date.now();
  let l = "pending", a = 0, u, f = null, d = [], p = [];
  typeof o == "function" && p.push(o);
  function h() {
    f && (clearTimeout(f), f = null);
  }
  function g() {
    l === "pending" && (l = "aborted"), h(), d.forEach((b) => {
      b.status === "pending" && (b.status = "aborted");
    }), d = [];
  }
  function m(b, O) {
    O && (p = []), typeof b == "function" && p.push(b);
  }
  function _() {
    return {
      startTime: c,
      payload: e,
      status: l,
      queriesSent: a,
      queriesPending: d.length,
      subscribe: m,
      abort: g
    };
  }
  function x() {
    l = "failed", p.forEach((b) => {
      b(void 0, u);
    });
  }
  function y() {
    d.forEach((b) => {
      b.status === "pending" && (b.status = "aborted");
    }), d = [];
  }
  function E(b, O, A) {
    const w = O !== "success";
    switch (d = d.filter((v) => v !== b), l) {
      case "pending":
        break;
      case "failed":
        if (w || !t.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (O === "abort") {
      u = A, x();
      return;
    }
    if (w) {
      u = A, d.length || (r.length ? S() : x());
      return;
    }
    if (h(), y(), !t.random) {
      const v = t.resources.indexOf(b.resource);
      v !== -1 && v !== t.index && (t.index = v);
    }
    l = "completed", p.forEach((v) => {
      v(A);
    });
  }
  function S() {
    if (l !== "pending")
      return;
    h();
    const b = r.shift();
    if (b === void 0) {
      if (d.length) {
        f = setTimeout(() => {
          h(), l === "pending" && (y(), x());
        }, t.timeout);
        return;
      }
      x();
      return;
    }
    const O = {
      status: "pending",
      resource: b,
      callback: (A, w) => {
        E(O, A, w);
      }
    };
    d.push(O), a++, f = setTimeout(S, t.rotate), n(b, e, O.callback);
  }
  return setTimeout(S), _;
}
function We(t) {
  const e = {
    ...oo,
    ...t
  };
  let n = [];
  function o() {
    n = n.filter((c) => c().status === "pending");
  }
  function i(c, l, a) {
    const u = io(
      e,
      c,
      l,
      (f, d) => {
        o(), a && a(f, d);
      }
    );
    return n.push(u), u;
  }
  function s(c) {
    return n.find((l) => c(l)) || null;
  }
  return {
    query: i,
    find: s,
    setIndex: (c) => {
      e.index = c;
    },
    getIndex: () => e.index,
    cleanup: o
  };
}
function ge() {
}
const Vt = /* @__PURE__ */ Object.create(null);
function so(t) {
  if (!Vt[t]) {
    const e = oe(t);
    if (!e)
      return;
    const n = We(e), o = {
      config: e,
      redundancy: n
    };
    Vt[t] = o;
  }
  return Vt[t];
}
function ro(t, e, n) {
  let o, i;
  if (typeof t == "string") {
    const s = qt(t);
    if (!s)
      return n(void 0, 424), ge;
    i = s.send;
    const r = so(t);
    r && (o = r.redundancy);
  } else {
    const s = ee(t);
    if (s) {
      o = We(s);
      const r = t.resources ? t.resources[0] : "", c = qt(r);
      c && (i = c.send);
    }
  }
  return !o || !i ? (n(void 0, 424), ge) : o.query(e, i, n)().abort;
}
const me = "iconify2", mt = "iconify", ze = mt + "-count", ye = mt + "-version", qe = 36e5, co = 168;
function Qt(t, e) {
  try {
    return t.getItem(e);
  } catch {
  }
}
function ie(t, e, n) {
  try {
    return t.setItem(e, n), !0;
  } catch {
  }
}
function ve(t, e) {
  try {
    t.removeItem(e);
  } catch {
  }
}
function Ut(t, e) {
  return ie(t, ze, e.toString());
}
function Kt(t) {
  return parseInt(Qt(t, ze)) || 0;
}
const Rt = {
  local: !0,
  session: !0
}, Qe = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let se = !1;
function lo(t) {
  se = t;
}
let bt = typeof window > "u" ? {} : window;
function Ue(t) {
  const e = t + "Storage";
  try {
    if (bt && bt[e] && typeof bt[e].length == "number")
      return bt[e];
  } catch {
  }
  Rt[t] = !1;
}
function Ke(t, e) {
  const n = Ue(t);
  if (!n)
    return;
  const o = Qt(n, ye);
  if (o !== me) {
    if (o) {
      const c = Kt(n);
      for (let l = 0; l < c; l++)
        ve(n, mt + l.toString());
    }
    ie(n, ye, me), Ut(n, 0);
    return;
  }
  const i = Math.floor(Date.now() / qe) - co, s = (c) => {
    const l = mt + c.toString(), a = Qt(n, l);
    if (typeof a == "string") {
      try {
        const u = JSON.parse(a);
        if (typeof u == "object" && typeof u.cached == "number" && u.cached > i && typeof u.provider == "string" && typeof u.data == "object" && typeof u.data.prefix == "string" && // Valid item: run callback
        e(u, c))
          return !0;
      } catch {
      }
      ve(n, l);
    }
  };
  let r = Kt(n);
  for (let c = r - 1; c >= 0; c--)
    s(c) || (c === r - 1 ? (r--, Ut(n, r)) : Qe[t].add(c));
}
function Xe() {
  if (!se) {
    lo(!0);
    for (const t in Rt)
      Ke(t, (e) => {
        const n = e.data, o = e.provider, i = n.prefix, s = G(
          o,
          i
        );
        if (!te(s, n).length)
          return !1;
        const r = n.lastModified || -1;
        return s.lastModifiedCached = s.lastModifiedCached ? Math.min(s.lastModifiedCached, r) : r, !0;
      });
  }
}
function ao(t, e) {
  const n = t.lastModifiedCached;
  if (
    // Matches or newer
    n && n >= e
  )
    return n === e;
  if (t.lastModifiedCached = e, n)
    for (const o in Rt)
      Ke(o, (i) => {
        const s = i.data;
        return i.provider !== t.provider || s.prefix !== t.prefix || s.lastModified === e;
      });
  return !0;
}
function uo(t, e) {
  se || Xe();
  function n(o) {
    let i;
    if (!Rt[o] || !(i = Ue(o)))
      return;
    const s = Qe[o];
    let r;
    if (s.size)
      s.delete(r = Array.from(s).shift());
    else if (r = Kt(i), !Ut(i, r + 1))
      return;
    const c = {
      cached: Math.floor(Date.now() / qe),
      provider: t.provider,
      data: e
    };
    return ie(
      i,
      mt + r.toString(),
      JSON.stringify(c)
    );
  }
  e.lastModified && !ao(t, e.lastModified) || Object.keys(e.icons).length && (e.not_found && (e = Object.assign({}, e), delete e.not_found), n("local") || n("session"));
}
function we() {
}
function fo(t) {
  t.iconsLoaderFlag || (t.iconsLoaderFlag = !0, setTimeout(() => {
    t.iconsLoaderFlag = !1, Zn(t);
  }));
}
function po(t, e) {
  t.iconsToLoad ? t.iconsToLoad = t.iconsToLoad.concat(e).sort() : t.iconsToLoad = e, t.iconsQueueFlag || (t.iconsQueueFlag = !0, setTimeout(() => {
    t.iconsQueueFlag = !1;
    const { provider: n, prefix: o } = t, i = t.iconsToLoad;
    delete t.iconsToLoad;
    let s;
    if (!i || !(s = qt(n)))
      return;
    s.prepare(n, o, i).forEach((c) => {
      ro(n, c, (l) => {
        if (typeof l != "object")
          c.icons.forEach((a) => {
            t.missing.add(a);
          });
        else
          try {
            const a = te(
              t,
              l
            );
            if (!a.length)
              return;
            const u = t.pendingIcons;
            u && a.forEach((f) => {
              u.delete(f);
            }), uo(t, l);
          } catch (a) {
            console.error(a);
          }
        fo(t);
      });
    });
  }));
}
const ho = (t, e) => {
  const n = no(t, !0, Ne()), o = Jn(n);
  if (!o.pending.length) {
    let l = !0;
    return e && setTimeout(() => {
      l && e(
        o.loaded,
        o.missing,
        o.pending,
        we
      );
    }), () => {
      l = !1;
    };
  }
  const i = /* @__PURE__ */ Object.create(null), s = [];
  let r, c;
  return o.pending.forEach((l) => {
    const { provider: a, prefix: u } = l;
    if (u === c && a === r)
      return;
    r = a, c = u, s.push(G(a, u));
    const f = i[a] || (i[a] = /* @__PURE__ */ Object.create(null));
    f[u] || (f[u] = []);
  }), o.pending.forEach((l) => {
    const { provider: a, prefix: u, name: f } = l, d = G(a, u), p = d.pendingIcons || (d.pendingIcons = /* @__PURE__ */ new Set());
    p.has(f) || (p.add(f), i[a][u].push(f));
  }), s.forEach((l) => {
    const { provider: a, prefix: u } = l;
    i[a][u].length && po(l, i[a][u]);
  }), e ? eo(e, o, s) : we;
};
function go(t, e) {
  const n = {
    ...t
  };
  for (const o in e) {
    const i = e[o], s = typeof i;
    o in $e ? (i === null || i && (s === "string" || s === "number")) && (n[o] = i) : s === typeof n[o] && (n[o] = o === "rotate" ? i % 4 : i);
  }
  return n;
}
const mo = /[\s,]+/;
function yo(t, e) {
  e.split(mo).forEach((n) => {
    switch (n.trim()) {
      case "horizontal":
        t.hFlip = !0;
        break;
      case "vertical":
        t.vFlip = !0;
        break;
    }
  });
}
function vo(t, e = 0) {
  const n = t.replace(/^-?[0-9.]*/, "");
  function o(i) {
    for (; i < 0; )
      i += 4;
    return i % 4;
  }
  if (n === "") {
    const i = parseInt(t);
    return isNaN(i) ? 0 : o(i);
  } else if (n !== t) {
    let i = 0;
    switch (n) {
      case "%":
        i = 25;
        break;
      case "deg":
        i = 90;
    }
    if (i) {
      let s = parseFloat(t.slice(0, t.length - n.length));
      return isNaN(s) ? 0 : (s = s / i, s % 1 === 0 ? o(s) : 0);
    }
  }
  return e;
}
function wo(t, e) {
  let n = t.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const o in e)
    n += " " + o + '="' + e[o] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + t + "</svg>";
}
function xo(t) {
  return t.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function bo(t) {
  return "data:image/svg+xml," + xo(t);
}
function _o(t) {
  return 'url("' + bo(t) + '")';
}
const xe = {
  ...Ve,
  inline: !1
}, Co = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, ko = {
  display: "inline-block"
}, Xt = {
  backgroundColor: "currentColor"
}, Ge = {
  backgroundColor: "transparent"
}, be = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, _e = {
  webkitMask: Xt,
  mask: Xt,
  background: Ge
};
for (const t in _e) {
  const e = _e[t];
  for (const n in be)
    e[t + n] = be[n];
}
const kt = {};
["horizontal", "vertical"].forEach((t) => {
  const e = t.slice(0, 1) + "Flip";
  kt[t + "-flip"] = e, kt[t.slice(0, 1) + "-flip"] = e, kt[t + "Flip"] = e;
});
function Ce(t) {
  return t + (t.match(/^[-0-9.]+$/) ? "px" : "");
}
const ke = (t, e) => {
  const n = go(xe, e), o = { ...Co }, i = e.mode || "svg", s = {}, r = e.style, c = typeof r == "object" && !(r instanceof Array) ? r : {};
  for (let g in e) {
    const m = e[g];
    if (m !== void 0)
      switch (g) {
        case "icon":
        case "style":
        case "onLoad":
        case "mode":
          break;
        case "inline":
        case "hFlip":
        case "vFlip":
          n[g] = m === !0 || m === "true" || m === 1;
          break;
        case "flip":
          typeof m == "string" && yo(n, m);
          break;
        case "color":
          s.color = m;
          break;
        case "rotate":
          typeof m == "string" ? n[g] = vo(m) : typeof m == "number" && (n[g] = m);
          break;
        case "ariaHidden":
        case "aria-hidden":
          m !== !0 && m !== "true" && delete o["aria-hidden"];
          break;
        default: {
          const _ = kt[g];
          _ ? (m === !0 || m === "true" || m === 1) && (n[_] = !0) : xe[g] === void 0 && (o[g] = m);
        }
      }
  }
  const l = Bn(t, n), a = l.attributes;
  if (n.inline && (s.verticalAlign = "-0.125em"), i === "svg") {
    o.style = {
      ...s,
      ...c
    }, Object.assign(o, a);
    let g = 0, m = e.id;
    return typeof m == "string" && (m = m.replace(/-/g, "_")), o.innerHTML = Hn(l.body, m ? () => m + "ID" + g++ : "iconifyVue"), ae("svg", o);
  }
  const { body: u, width: f, height: d } = t, p = i === "mask" || (i === "bg" ? !1 : u.indexOf("currentColor") !== -1), h = wo(u, {
    ...a,
    width: f + "",
    height: d + ""
  });
  return o.style = {
    ...s,
    "--svg": _o(h),
    width: Ce(a.width),
    height: Ce(a.height),
    ...ko,
    ...p ? Xt : Ge,
    ...c
  }, ae("span", o);
};
Ne(!0);
Wn("", Yn);
if (typeof document < "u" && typeof window < "u") {
  Xe();
  const t = window;
  if (t.IconifyPreload !== void 0) {
    const e = t.IconifyPreload, n = "Invalid IconifyPreload syntax.";
    typeof e == "object" && e !== null && (e instanceof Array ? e : [e]).forEach((o) => {
      try {
        // Check if item is an object and not null/array
        (typeof o != "object" || o === null || o instanceof Array || // Check for 'icons' and 'prefix'
        typeof o.icons != "object" || typeof o.prefix != "string" || // Add icon set
        !Mn(o)) && console.error(n);
      } catch {
        console.error(n);
      }
    });
  }
  if (t.IconifyProviders !== void 0) {
    const e = t.IconifyProviders;
    if (typeof e == "object" && e !== null)
      for (let n in e) {
        const o = "IconifyProviders[" + n + "] is invalid.";
        try {
          const i = e[n];
          if (typeof i != "object" || !i || i.resources === void 0)
            continue;
          zn(n, i) || console.error(o);
        } catch {
          console.error(o);
        }
      }
  }
}
const So = {
  ...Pt,
  body: ""
}, tt = J({
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
    getIcon(t, e) {
      if (typeof t == "object" && t !== null && typeof t.body == "string")
        return this._name = "", this.abortLoading(), {
          data: t
        };
      let n;
      if (typeof t != "string" || (n = Lt(t, !1, !0)) === null)
        return this.abortLoading(), null;
      const o = Pn(n);
      if (!o)
        return (!this._loadingIcon || this._loadingIcon.name !== t) && (this.abortLoading(), this._name = "", o !== null && (this._loadingIcon = {
          name: t,
          abort: ho([n], () => {
            this.counter++;
          })
        })), null;
      this.abortLoading(), this._name !== t && (this._name = t, e && e(t));
      const i = ["iconify"];
      return n.prefix !== "" && i.push("iconify--" + n.prefix), n.provider !== "" && i.push("iconify--" + n.provider), { data: o, classes: i };
    }
  },
  // Render icon
  render() {
    this.counter;
    const t = this.$attrs, e = this.iconMounted ? this.getIcon(t.icon, t.onLoad) : null;
    if (!e)
      return ke(So, t);
    let n = t;
    return e.classes && (n = {
      ...t,
      class: (typeof t.class == "string" ? t.class + " " : "") + e.classes.join(" ")
    }), ke({
      ...Pt,
      ...e.data
    }, n);
  }
}), yt = (t) => {
  const e = [], n = {};
  return t({ classes: e, styles: n }), {
    class: e,
    style: n
  };
}, St = (t) => typeof t == "number" ? `${t}px` : t, Oo = /* @__PURE__ */ J({
  __name: "CollapseBody",
  props: {
    expanded: { type: Boolean },
    option: {},
    padding: {}
  },
  setup(t) {
    const e = t, n = D(null), o = D(0);
    Le(() => {
      var f, d;
      (f = n.value) == null || f.addEventListener("vui-collapse-expand-changed", i), o.value = ((d = n.value) == null ? void 0 : d.offsetHeight) || 0;
    });
    function i(f) {
      f.target !== n.value && s();
    }
    function s() {
      o.value = void 0;
    }
    function r() {
      var f;
      e.expanded ? o.value = ((f = n.value) == null ? void 0 : f.offsetHeight) || 0 : o.value = 0;
    }
    const c = P(() => (Pe(() => r()), e.expanded));
    function l() {
      var d;
      const f = new CustomEvent("vui-collapse-expand-changed", { bubbles: !0 });
      (d = n.value) == null || d.dispatchEvent(f);
    }
    const a = P(() => yt(({ styles: f }) => {
      o.value !== void 0 ? c.value ? (f.height = `${o.value}px`, f.opacity = "1", l()) : (f.height = "0", f.opacity = "0") : r();
    })), u = P(() => yt(({ styles: f }) => {
      f.paddingLeft = St(e.padding || "1rem");
    }));
    return (f, d) => (C(), k("div", pt({ class: "vui-collapse-body" }, a.value), [
      N("div", pt({
        class: "vui-collapse-body__content",
        ref_key: "collapseBodyEl",
        ref: n
      }, u.value), [
        et(f.$slots, "default", {}, void 0, !0)
      ], 16)
    ], 16));
  }
});
const wt = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [o, i] of e)
    n[o] = i;
  return n;
}, Ye = /* @__PURE__ */ wt(Oo, [["__scopeId", "data-v-518f14fa"]]), Io = {
  key: 1,
  class: "vui-cascade-option-title__default-title"
}, Eo = /* @__PURE__ */ J({
  __name: "CascadeOptionTitle",
  props: {
    option: {}
  },
  setup(t) {
    const e = t, n = () => {
      var o, i;
      return (i = (o = e.option).render) == null ? void 0 : i.call(o);
    };
    return (o, i) => (C(), k("div", null, [
      e.option.render ? (C(), ht(n, { key: 0 })) : (C(), k("div", Io, lt(e.option.title), 1))
    ]));
  }
});
const Ao = ["title"], To = { class: "vui-cascade-option__string" }, Lo = { class: "vui-cascade-option__string-left" }, Po = { class: "vui-cascade-option__tree-btn-space" }, Ro = {
  key: 0,
  class: "vui-cascade-oprion__next-btn"
}, Mo = { key: 0 }, Fo = { key: 1 }, jo = { key: 2 }, Do = /* @__PURE__ */ J({
  __name: "CascadeOption",
  props: {
    option: {},
    cascade: {}
  },
  emits: ["on-click"],
  setup(t, { emit: e }) {
    const n = t, o = pn("selectedOptions"), i = D(!1), s = P(() => !!n.option.options || !!n.option.getAsyncOptions), r = P(() => !!n.option.children), c = P(() => {
      var p;
      const u = (p = o == null ? void 0 : o.value) == null ? void 0 : p.find((h, g) => g === n.cascade.id);
      if (!u)
        return !1;
      const f = u.id ?? u.value, d = n.option.id || n.option.value;
      return f === d;
    }), l = P(() => yt(({ classes: u }) => {
      c.value && u.push("vui-cascade-option--selected");
    }));
    function a() {
      var p, h;
      const u = { option: n.option, last: !s.value };
      let f = !0;
      const d = () => f = !1;
      (h = (p = n.option).onClick) == null || h.call(p, { preventEmit: d, option: n.option }), f && e("on-click", u);
    }
    return (u, f) => {
      const d = hn("CascadeOption", !0);
      return C(), k("div", pt({
        class: "vui-cascade-option",
        onClick: a
      }, l.value, {
        title: n.option.title
      }), [
        N("div", To, [
          N("div", Lo, [
            N("div", Po, [
              r.value ? (C(), k("div", {
                key: 0,
                class: gn(["vui-cascade-option__tree-btn", { "vui-cascade-option__tree-btn--opened": i.value }]),
                onClick: f[0] || (f[0] = mn((p) => i.value = !i.value, ["stop"]))
              }, [
                B(X(tt), { icon: "bxs:right-arrow" })
              ], 2)) : W("", !0)
            ]),
            B(Eo, {
              option: n.option
            }, null, 8, ["option"])
          ]),
          s.value ? (C(), k("div", Ro, [
            u.option.loadingState ? u.option.loadingState === "process" ? (C(), k("span", Fo, [
              B(X(tt), { icon: "ep:loading" })
            ])) : u.option.loadingState === "ready" ? (C(), k("span", jo, [
              B(X(tt), { icon: "ep:refresh" })
            ])) : W("", !0) : (C(), k("span", Mo, [
              B(X(tt), { icon: "ep:arrow-right" })
            ]))
          ])) : W("", !0)
        ]),
        r.value ? (C(), ht(Ye, {
          key: 0,
          expanded: i.value,
          option: n.option
        }, {
          default: at(() => [
            (C(!0), k(Tt, null, Zt(u.option.children, (p) => (C(), ht(d, {
              key: p.id || p.value,
              cascade: u.cascade,
              option: p,
              onOnClick: f[1] || (f[1] = (h) => e("on-click", h))
            }, null, 8, ["cascade", "option"]))), 128))
          ]),
          _: 1
        }, 8, ["expanded", "option"])) : W("", !0)
      ], 16, Ao);
    };
  }
});
const Bo = /* @__PURE__ */ wt(Do, [["__scopeId", "data-v-2b5f9ed8"]]), No = { class: "vui-cascade__scrollable" }, $o = {
  key: 0,
  class: "vui-cascade__top-space"
}, Vo = {
  key: 0,
  class: "vui-cascade__no-data"
}, Ho = {
  key: 0,
  class: "vui-cascade__fog"
}, Wo = /* @__PURE__ */ J({
  __name: "Cascade",
  props: {
    cascade: {},
    padding: {},
    fog: { type: Boolean },
    canBack: { type: Boolean },
    configs: {},
    noDataText: {}
  },
  emits: ["on-select", "on-back"],
  setup(t, { emit: e }) {
    const n = t, o = P(() => yt(({ styles: r }) => {
      var c, l, a;
      r.width = St(((c = n.configs) == null ? void 0 : c.width) || "240px"), (l = n.configs) != null && l.maxHeight ? r.maxHeight = St(n.configs.maxHeight) : r.height = St(((a = n.configs) == null ? void 0 : a.height) || "120px"), r.left = `${12 * n.padding}px`;
    }));
    function i(r) {
      n.fog || e("on-select", { cascade: n.cascade, optionParams: r });
    }
    function s() {
      e("on-back");
    }
    return (r, c) => (C(), k("div", pt({ class: "vui-cascade" }, o.value), [
      N("div", No, [
        n.canBack ? (C(), k("div", $o, [
          N("div", {
            class: "vui-cascade__back-btn",
            onClick: s
          }, [
            et(r.$slots, "backBtn", ut(ft({ back: s })), () => [
              B(X(tt), { icon: "ep:back" })
            ], !0)
          ])
        ])) : W("", !0),
        et(r.$slots, "beforeOptions", ut(ft({ cascade: n.cascade })), void 0, !0),
        (C(!0), k(Tt, null, Zt(r.cascade.options, (l) => (C(), ht(Bo, {
          key: l.id || l.value,
          cascade: r.cascade,
          option: l,
          onOnClick: i
        }, null, 8, ["cascade", "option"]))), 128)),
        et(r.$slots, "cascadeNoData", ut(ft({ cascade: n.cascade })), () => [
          r.cascade.options.length ? W("", !0) : (C(), k("div", Vo, lt(n.noDataText || "no data"), 1))
        ], !0),
        B(yn, { class: "vui-cascade__fog-transition" }, {
          default: at(() => [
            n.fog ? (C(), k("div", Ho)) : W("", !0)
          ]),
          _: 1
        })
      ])
    ], 16));
  }
});
const zo = /* @__PURE__ */ wt(Wo, [["__scopeId", "data-v-4749e1ce"]]), qo = { class: "vui-cascade-input__label" }, Qo = { key: 0 }, Uo = {
  key: 1,
  class: "vuscade-input__placeholder"
}, Ko = {
  key: 0,
  class: "vui-cascade-input__error"
}, Xo = /* @__PURE__ */ J({
  __name: "CascadeInput",
  props: {
    values: {},
    errorMsg: {},
    separator: { default: "/" },
    placeholder: {},
    disabled: { type: Boolean },
    clearable: { type: Boolean }
  },
  emits: ["on-click", "on-clear"],
  setup(t, { emit: e }) {
    const n = t, o = P(() => n.values.join(n.separator)), i = P(() => yt(({ classes: c }) => {
      n.disabled && c.push("vui-cascade-input--disabled");
    }));
    function s() {
      e("on-click");
    }
    function r() {
      e("on-clear");
    }
    return (c, l) => (C(), k(Tt, null, [
      N("div", pt({
        class: "vui-cascade-input",
        onClick: s
      }, i.value), [
        N("div", qo, [
          o.value ? (C(), k("span", Qo, lt(o.value), 1)) : (C(), k("div", Uo, lt(n.placeholder), 1))
        ]),
        n.clearable && n.values.length ? (C(), k("div", {
          key: 0,
          class: "flex-shrink-0 rounded p-1 hover:bg-gray-300",
          onClick: r
        }, [
          B(X(tt), { icon: "material-symbols:close" })
        ])) : W("", !0)
      ], 16),
      c.errorMsg ? (C(), k("div", Ko, lt(c.errorMsg), 1)) : W("", !0)
    ], 64));
  }
});
const Go = /* @__PURE__ */ wt(Xo, [["__scopeId", "data-v-6e040be7"]]), Gt = Math.min, nt = Math.max, It = Math.round, Q = (t) => ({
  x: t,
  y: t
}), Yo = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Jo = {
  start: "end",
  end: "start"
};
function Se(t, e, n) {
  return nt(t, Gt(e, n));
}
function Mt(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Y(t) {
  return t.split("-")[0];
}
function Ft(t) {
  return t.split("-")[1];
}
function Je(t) {
  return t === "x" ? "y" : "x";
}
function Ze(t) {
  return t === "y" ? "height" : "width";
}
function jt(t) {
  return ["top", "bottom"].includes(Y(t)) ? "y" : "x";
}
function tn(t) {
  return Je(jt(t));
}
function Zo(t, e, n) {
  n === void 0 && (n = !1);
  const o = Ft(t), i = tn(t), s = Ze(i);
  let r = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[s] > e.floating[s] && (r = Et(r)), [r, Et(r)];
}
function ti(t) {
  const e = Et(t);
  return [Yt(t), e, Yt(e)];
}
function Yt(t) {
  return t.replace(/start|end/g, (e) => Jo[e]);
}
function ei(t, e, n) {
  const o = ["left", "right"], i = ["right", "left"], s = ["top", "bottom"], r = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? i : o : e ? o : i;
    case "left":
    case "right":
      return e ? s : r;
    default:
      return [];
  }
}
function ni(t, e, n, o) {
  const i = Ft(t);
  let s = ei(Y(t), n === "start", o);
  return i && (s = s.map((r) => r + "-" + i), e && (s = s.concat(s.map(Yt)))), s;
}
function Et(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Yo[e]);
}
function oi(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function ii(t) {
  return typeof t != "number" ? oi(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function At(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
function Oe(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const s = jt(e), r = tn(e), c = Ze(r), l = Y(e), a = s === "y", u = o.x + o.width / 2 - i.width / 2, f = o.y + o.height / 2 - i.height / 2, d = o[c] / 2 - i[c] / 2;
  let p;
  switch (l) {
    case "top":
      p = {
        x: u,
        y: o.y - i.height
      };
      break;
    case "bottom":
      p = {
        x: u,
        y: o.y + o.height
      };
      break;
    case "right":
      p = {
        x: o.x + o.width,
        y: f
      };
      break;
    case "left":
      p = {
        x: o.x - i.width,
        y: f
      };
      break;
    default:
      p = {
        x: o.x,
        y: o.y
      };
  }
  switch (Ft(e)) {
    case "start":
      p[r] -= d * (n && a ? -1 : 1);
      break;
    case "end":
      p[r] += d * (n && a ? -1 : 1);
      break;
  }
  return p;
}
const si = async (t, e, n) => {
  const {
    placement: o = "bottom",
    strategy: i = "absolute",
    middleware: s = [],
    platform: r
  } = n, c = s.filter(Boolean), l = await (r.isRTL == null ? void 0 : r.isRTL(e));
  let a = await r.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: u,
    y: f
  } = Oe(a, o, l), d = o, p = {}, h = 0;
  for (let g = 0; g < c.length; g++) {
    const {
      name: m,
      fn: _
    } = c[g], {
      x,
      y,
      data: E,
      reset: S
    } = await _({
      x: u,
      y: f,
      initialPlacement: o,
      placement: d,
      strategy: i,
      middlewareData: p,
      rects: a,
      platform: r,
      elements: {
        reference: t,
        floating: e
      }
    });
    if (u = x ?? u, f = y ?? f, p = {
      ...p,
      [m]: {
        ...p[m],
        ...E
      }
    }, S && h <= 50) {
      h++, typeof S == "object" && (S.placement && (d = S.placement), S.rects && (a = S.rects === !0 ? await r.getElementRects({
        reference: t,
        floating: e,
        strategy: i
      }) : S.rects), {
        x: u,
        y: f
      } = Oe(a, d, l)), g = -1;
      continue;
    }
  }
  return {
    x: u,
    y: f,
    placement: d,
    strategy: i,
    middlewareData: p
  };
};
async function en(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: o,
    y: i,
    platform: s,
    rects: r,
    elements: c,
    strategy: l
  } = t, {
    boundary: a = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: f = "floating",
    altBoundary: d = !1,
    padding: p = 0
  } = Mt(e, t), h = ii(p), m = c[d ? f === "floating" ? "reference" : "floating" : f], _ = At(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(m))) == null || n ? m : m.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(c.floating)),
    boundary: a,
    rootBoundary: u,
    strategy: l
  })), x = f === "floating" ? {
    ...r.floating,
    x: o,
    y: i
  } : r.reference, y = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c.floating)), E = await (s.isElement == null ? void 0 : s.isElement(y)) ? await (s.getScale == null ? void 0 : s.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = At(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: x,
    offsetParent: y,
    strategy: l
  }) : x);
  return {
    top: (_.top - S.top + h.top) / E.y,
    bottom: (S.bottom - _.bottom + h.bottom) / E.y,
    left: (_.left - S.left + h.left) / E.x,
    right: (S.right - _.right + h.right) / E.x
  };
}
const ri = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n, o;
      const {
        placement: i,
        middlewareData: s,
        rects: r,
        initialPlacement: c,
        platform: l,
        elements: a
      } = e, {
        mainAxis: u = !0,
        crossAxis: f = !0,
        fallbackPlacements: d,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: g = !0,
        ...m
      } = Mt(t, e);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const _ = Y(i), x = Y(c) === c, y = await (l.isRTL == null ? void 0 : l.isRTL(a.floating)), E = d || (x || !g ? [Et(c)] : ti(c));
      !d && h !== "none" && E.push(...ni(c, g, h, y));
      const S = [c, ...E], b = await en(e, m), O = [];
      let A = ((o = s.flip) == null ? void 0 : o.overflows) || [];
      if (u && O.push(b[_]), f) {
        const T = Zo(i, r, y);
        O.push(b[T[0]], b[T[1]]);
      }
      if (A = [...A, {
        placement: i,
        overflows: O
      }], !O.every((T) => T <= 0)) {
        var w, v;
        const T = (((w = s.flip) == null ? void 0 : w.index) || 0) + 1, V = S[T];
        if (V)
          return {
            data: {
              index: T,
              overflows: A
            },
            reset: {
              placement: V
            }
          };
        let L = (v = A.filter((q) => q.overflows[0] <= 0).sort((q, H) => q.overflows[1] - H.overflows[1])[0]) == null ? void 0 : v.placement;
        if (!L)
          switch (p) {
            case "bestFit": {
              var I;
              const q = (I = A.map((H) => [H.placement, H.overflows.filter((F) => F > 0).reduce((F, j) => F + j, 0)]).sort((H, F) => H[1] - F[1])[0]) == null ? void 0 : I[0];
              q && (L = q);
              break;
            }
            case "initialPlacement":
              L = c;
              break;
          }
        if (i !== L)
          return {
            reset: {
              placement: L
            }
          };
      }
      return {};
    }
  };
};
async function ci(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, s = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), r = Y(n), c = Ft(n), l = jt(n) === "y", a = ["left", "top"].includes(r) ? -1 : 1, u = s && l ? -1 : 1, f = Mt(e, t);
  let {
    mainAxis: d,
    crossAxis: p,
    alignmentAxis: h
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...f
  };
  return c && typeof h == "number" && (p = c === "end" ? h * -1 : h), l ? {
    x: p * u,
    y: d * a
  } : {
    x: d * a,
    y: p * u
  };
}
const li = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, i = await ci(e, t);
      return {
        x: n + i.x,
        y: o + i.y,
        data: i
      };
    }
  };
}, ai = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o,
        placement: i
      } = e, {
        mainAxis: s = !0,
        crossAxis: r = !1,
        limiter: c = {
          fn: (m) => {
            let {
              x: _,
              y: x
            } = m;
            return {
              x: _,
              y: x
            };
          }
        },
        ...l
      } = Mt(t, e), a = {
        x: n,
        y: o
      }, u = await en(e, l), f = jt(Y(i)), d = Je(f);
      let p = a[d], h = a[f];
      if (s) {
        const m = d === "y" ? "top" : "left", _ = d === "y" ? "bottom" : "right", x = p + u[m], y = p - u[_];
        p = Se(x, p, y);
      }
      if (r) {
        const m = f === "y" ? "top" : "left", _ = f === "y" ? "bottom" : "right", x = h + u[m], y = h - u[_];
        h = Se(x, h, y);
      }
      const g = c.fn({
        ...e,
        [d]: p,
        [f]: h
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - o
        }
      };
    }
  };
};
function U(t) {
  return nn(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function R(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function K(t) {
  var e;
  return (e = (nn(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function nn(t) {
  return t instanceof Node || t instanceof R(t).Node;
}
function z(t) {
  return t instanceof Element || t instanceof R(t).Element;
}
function $(t) {
  return t instanceof HTMLElement || t instanceof R(t).HTMLElement;
}
function Ie(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof R(t).ShadowRoot;
}
function xt(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = M(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function ui(t) {
  return ["table", "td", "th"].includes(U(t));
}
function re(t) {
  const e = ce(), n = M(t);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function fi(t) {
  let e = it(t);
  for (; $(e) && !Dt(e); ) {
    if (re(e))
      return e;
    e = it(e);
  }
  return null;
}
function ce() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Dt(t) {
  return ["html", "body", "#document"].includes(U(t));
}
function M(t) {
  return R(t).getComputedStyle(t);
}
function Bt(t) {
  return z(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function it(t) {
  if (U(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    Ie(t) && t.host || // Fallback.
    K(t)
  );
  return Ie(e) ? e.host : e;
}
function on(t) {
  const e = it(t);
  return Dt(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : $(e) && xt(e) ? e : on(e);
}
function Jt(t, e, n) {
  var o;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const i = on(t), s = i === ((o = t.ownerDocument) == null ? void 0 : o.body), r = R(i);
  return s ? e.concat(r, r.visualViewport || [], xt(i) ? i : [], r.frameElement && n ? Jt(r.frameElement) : []) : e.concat(i, Jt(i, [], n));
}
function sn(t) {
  const e = M(t);
  let n = parseFloat(e.width) || 0, o = parseFloat(e.height) || 0;
  const i = $(t), s = i ? t.offsetWidth : n, r = i ? t.offsetHeight : o, c = It(n) !== s || It(o) !== r;
  return c && (n = s, o = r), {
    width: n,
    height: o,
    $: c
  };
}
function rn(t) {
  return z(t) ? t : t.contextElement;
}
function ot(t) {
  const e = rn(t);
  if (!$(e))
    return Q(1);
  const n = e.getBoundingClientRect(), {
    width: o,
    height: i,
    $: s
  } = sn(e);
  let r = (s ? It(n.width) : n.width) / o, c = (s ? It(n.height) : n.height) / i;
  return (!r || !Number.isFinite(r)) && (r = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: r,
    y: c
  };
}
const di = /* @__PURE__ */ Q(0);
function cn(t) {
  const e = R(t);
  return !ce() || !e.visualViewport ? di : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function pi(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== R(t) ? !1 : e;
}
function vt(t, e, n, o) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const i = t.getBoundingClientRect(), s = rn(t);
  let r = Q(1);
  e && (o ? z(o) && (r = ot(o)) : r = ot(t));
  const c = pi(s, n, o) ? cn(s) : Q(0);
  let l = (i.left + c.x) / r.x, a = (i.top + c.y) / r.y, u = i.width / r.x, f = i.height / r.y;
  if (s) {
    const d = R(s), p = o && z(o) ? R(o) : o;
    let h = d.frameElement;
    for (; h && o && p !== d; ) {
      const g = ot(h), m = h.getBoundingClientRect(), _ = M(h), x = m.left + (h.clientLeft + parseFloat(_.paddingLeft)) * g.x, y = m.top + (h.clientTop + parseFloat(_.paddingTop)) * g.y;
      l *= g.x, a *= g.y, u *= g.x, f *= g.y, l += x, a += y, h = R(h).frameElement;
    }
  }
  return At({
    width: u,
    height: f,
    x: l,
    y: a
  });
}
function hi(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: o
  } = t;
  const i = $(n), s = K(n);
  if (n === s)
    return e;
  let r = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Q(1);
  const l = Q(0);
  if ((i || !i && o !== "fixed") && ((U(n) !== "body" || xt(s)) && (r = Bt(n)), $(n))) {
    const a = vt(n);
    c = ot(n), l.x = a.x + n.clientLeft, l.y = a.y + n.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - r.scrollLeft * c.x + l.x,
    y: e.y * c.y - r.scrollTop * c.y + l.y
  };
}
function gi(t) {
  return Array.from(t.getClientRects());
}
function ln(t) {
  return vt(K(t)).left + Bt(t).scrollLeft;
}
function mi(t) {
  const e = K(t), n = Bt(t), o = t.ownerDocument.body, i = nt(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth), s = nt(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
  let r = -n.scrollLeft + ln(t);
  const c = -n.scrollTop;
  return M(o).direction === "rtl" && (r += nt(e.clientWidth, o.clientWidth) - i), {
    width: i,
    height: s,
    x: r,
    y: c
  };
}
function yi(t, e) {
  const n = R(t), o = K(t), i = n.visualViewport;
  let s = o.clientWidth, r = o.clientHeight, c = 0, l = 0;
  if (i) {
    s = i.width, r = i.height;
    const a = ce();
    (!a || a && e === "fixed") && (c = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: s,
    height: r,
    x: c,
    y: l
  };
}
function vi(t, e) {
  const n = vt(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, s = $(t) ? ot(t) : Q(1), r = t.clientWidth * s.x, c = t.clientHeight * s.y, l = i * s.x, a = o * s.y;
  return {
    width: r,
    height: c,
    x: l,
    y: a
  };
}
function Ee(t, e, n) {
  let o;
  if (e === "viewport")
    o = yi(t, n);
  else if (e === "document")
    o = mi(K(t));
  else if (z(e))
    o = vi(e, n);
  else {
    const i = cn(t);
    o = {
      ...e,
      x: e.x - i.x,
      y: e.y - i.y
    };
  }
  return At(o);
}
function an(t, e) {
  const n = it(t);
  return n === e || !z(n) || Dt(n) ? !1 : M(n).position === "fixed" || an(n, e);
}
function wi(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = Jt(t, [], !1).filter((c) => z(c) && U(c) !== "body"), i = null;
  const s = M(t).position === "fixed";
  let r = s ? it(t) : t;
  for (; z(r) && !Dt(r); ) {
    const c = M(r), l = re(r);
    !l && c.position === "fixed" && (i = null), (s ? !l && !i : !l && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || xt(r) && !l && an(t, r)) ? o = o.filter((u) => u !== r) : i = c, r = it(r);
  }
  return e.set(t, o), o;
}
function xi(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = t;
  const r = [...n === "clippingAncestors" ? wi(e, this._c) : [].concat(n), o], c = r[0], l = r.reduce((a, u) => {
    const f = Ee(e, u, i);
    return a.top = nt(f.top, a.top), a.right = Gt(f.right, a.right), a.bottom = Gt(f.bottom, a.bottom), a.left = nt(f.left, a.left), a;
  }, Ee(e, c, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function bi(t) {
  return sn(t);
}
function _i(t, e, n) {
  const o = $(e), i = K(e), s = n === "fixed", r = vt(t, !0, s, e);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Q(0);
  if (o || !o && !s)
    if ((U(e) !== "body" || xt(i)) && (c = Bt(e)), o) {
      const a = vt(e, !0, s, e);
      l.x = a.x + e.clientLeft, l.y = a.y + e.clientTop;
    } else
      i && (l.x = ln(i));
  return {
    x: r.left + c.scrollLeft - l.x,
    y: r.top + c.scrollTop - l.y,
    width: r.width,
    height: r.height
  };
}
function Ae(t, e) {
  return !$(t) || M(t).position === "fixed" ? null : e ? e(t) : t.offsetParent;
}
function un(t, e) {
  const n = R(t);
  if (!$(t))
    return n;
  let o = Ae(t, e);
  for (; o && ui(o) && M(o).position === "static"; )
    o = Ae(o, e);
  return o && (U(o) === "html" || U(o) === "body" && M(o).position === "static" && !re(o)) ? n : o || fi(t) || n;
}
const Ci = async function(t) {
  let {
    reference: e,
    floating: n,
    strategy: o
  } = t;
  const i = this.getOffsetParent || un, s = this.getDimensions;
  return {
    reference: _i(e, await i(n), o),
    floating: {
      x: 0,
      y: 0,
      ...await s(n)
    }
  };
};
function ki(t) {
  return M(t).direction === "rtl";
}
const Si = {
  convertOffsetParentRelativeRectToViewportRelativeRect: hi,
  getDocumentElement: K,
  getClippingRect: xi,
  getOffsetParent: un,
  getElementRects: Ci,
  getClientRects: gi,
  getDimensions: bi,
  getScale: ot,
  isElement: z,
  isRTL: ki
}, Oi = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: Si,
    ...n
  }, s = {
    ...i.platform,
    _c: o
  };
  return si(t, e, {
    ...i,
    platform: s
  });
}, Ii = /* @__PURE__ */ J({
  __name: "Cascader",
  props: {
    modelValue: {},
    data: {},
    separator: { default: "/" },
    cascadesConfig: {},
    transform: {},
    reform: {},
    placeholder: { default: "" },
    disabled: { type: Boolean },
    clearable: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const n = t, o = D(null), i = D(null), s = D(null), r = D(!1), c = D(""), l = D([]), a = P(() => r.value ? l.value : []), u = D([]);
    vn("selectedOptions", u);
    const f = P(() => ({
      value: "__ROOT_CASCADE__",
      title: "",
      options: n.data
    }));
    function d() {
      y(f.value, 0), u.value = O(n.modelValue || []);
    }
    d(), Te(() => n.data, () => {
      d();
    });
    const p = P(() => u.value.map((w) => w.title)), h = (w) => {
      var v;
      return ((v = l.value[l.value.length - 1]) == null ? void 0 : v.id) === w.id;
    };
    function g(w) {
      w && n.disabled || (r.value = w, w || (u.value = O(n.modelValue || [])));
    }
    Le(() => {
      Sn(o.value, _);
      const w = i.value, v = s.value;
      Oi(w, v, {
        middleware: [
          ri(),
          li(4),
          ai()
        ]
      }).then(({ y: I }) => {
        Object.assign(v.style, {
          top: `${I}px`
        });
      });
    });
    function m() {
      g(!0);
    }
    function _() {
      g(!1);
    }
    function x({ cascade: w, optionParams: v }) {
      if (u.value = u.value.slice(0, w.id), u.value[w.id] = v.option, v.last) {
        e("update:modelValue", A(u.value)), Pe(() => {
          g(!1);
        });
        return;
      }
      y(v.option);
    }
    function y(w, v) {
      const I = v ?? l.value.length;
      v !== void 0 && (l.value = l.value.slice(0, v)), l.value.push(E(w, I));
    }
    function E(w, v) {
      return { id: v, options: w.options || [] };
    }
    function S() {
      l.value.pop();
    }
    function b() {
      u.value = [], e("update:modelValue", A([])), y(f.value, 0);
    }
    function O(w) {
      var T, V;
      if (n.transform)
        return n.transform(w, E);
      const v = [], I = w;
      for (let L = 0; L < I.length; L++) {
        const q = I[L], H = (j) => {
          var le;
          let st = j == null ? void 0 : j.find((Z) => Z.value === q);
          if (st)
            return st;
          for (let Z = 0; Z < (j == null ? void 0 : j.length); Z++)
            if ((le = j[Z].children) != null && le.length && (st = H(j[Z].children), st))
              return st;
        }, F = H((T = l.value[L]) == null ? void 0 : T.options);
        if (F)
          if (v.push(F), (V = F.options) != null && V.length)
            y(F, L + 1);
          else if (L < I.length - 1) {
            c.value = "Can`t display such a value";
            break;
          } else
            L === I.length - 1 && (c.value = "");
        else {
          c.value = "Can`t display such a value";
          break;
        }
      }
      return v;
    }
    function A(w) {
      return n.reform ? n.reform(w) : w.map((v) => v.value);
    }
    return (w, v) => (C(), k("div", {
      class: "vui-cascader",
      ref_key: "cascaderEl",
      ref: o
    }, [
      N("div", {
        class: "vue-cascader__input-wrapper",
        ref_key: "inputWrapperEl",
        ref: i
      }, [
        B(Go, {
          values: p.value,
          separator: n.separator,
          placeholder: n.placeholder,
          disabled: n.disabled,
          onOnClick: m,
          onOnClear: b,
          clearable: n.clearable
        }, null, 8, ["values", "separator", "placeholder", "disabled", "clearable"])
      ], 512),
      N("div", {
        class: "vui-cascader__dropdown",
        ref_key: "dropdownEl",
        ref: s
      }, [
        B(wn, {
          tag: "div",
          mode: "in-out",
          name: "vui-cascader-transition"
        }, {
          default: at(() => [
            (C(!0), k(Tt, null, Zt(a.value, (I, T) => (C(), ht(zo, {
              key: I.id,
              cascade: I,
              padding: T,
              fog: !h(I),
              canBack: T > 0,
              configs: n.cascadesConfig,
              onOnSelect: x,
              onOnBack: S,
              noDataText: n.noDataText
            }, {
              cascadeNoData: at(({ cascade: V }) => [
                et(w.$slots, "cascadeNoData", ut(ft(V)), void 0, !0)
              ]),
              beforeOptions: at(({ cascade: V }) => [
                et(w.$slots, "beforeOptions", ut(ft({ cascade: V, selectedOptions: u.value })), void 0, !0)
              ]),
              _: 2
            }, 1032, ["cascade", "padding", "fog", "canBack", "configs", "noDataText"]))), 128))
          ]),
          _: 3
        })
      ], 512)
    ], 512));
  }
});
const Ei = /* @__PURE__ */ wt(Ii, [["__scopeId", "data-v-964ef261"]]), Ti = {
  install: (t) => {
    t.component("Cascader", Ei), t.component("CollapseBody", Ye);
  }
};
export {
  Ei as Cascader,
  Ye as CollapseBody,
  yt as createStyleClasses,
  Ti as default
};
