import { getCurrentScope as ln, onScopeDispose as an, unref as Y, watch as un, defineComponent as X, h as ce, ref as j, onMounted as Ee, computed as L, nextTick as Ae, openBlock as C, createElementBlock as S, mergeProps as ct, createElementVNode as H, renderSlot as it, createBlock as lt, toDisplayString as st, inject as fn, resolveComponent as dn, normalizeClass as pn, withModifiers as hn, createVNode as B, createCommentVNode as V, withCtx as kt, Fragment as Yt, renderList as Jt, normalizeProps as vt, guardReactiveProps as wt, Transition as gn, provide as mn, TransitionGroup as yn } from "vue";
function vn(t) {
  return ln() ? (an(t), !0) : !1;
}
function Te(t) {
  return typeof t == "function" ? t() : Y(t);
}
const Le = typeof window < "u" && typeof document < "u", wn = Object.prototype.toString, xn = (t) => wn.call(t) === "[object Object]", $t = () => {
}, bn = /* @__PURE__ */ _n();
function _n() {
  var t;
  return Le && ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.userAgent) && /* @__PURE__ */ /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
function nt(t) {
  var e;
  const n = Te(t);
  return (e = n == null ? void 0 : n.$el) != null ? e : n;
}
const Pe = Le ? window : void 0;
function Dt(...t) {
  let e, n, o, i;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([n, o, i] = t, e = Pe) : [e, n, o, i] = t, !e)
    return $t;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const s = [], r = () => {
    s.forEach((f) => f()), s.length = 0;
  }, c = (f, u, d, p) => (f.addEventListener(u, d, p), () => f.removeEventListener(u, d, p)), l = un(
    () => [nt(e), Te(i)],
    ([f, u]) => {
      if (r(), !f)
        return;
      const d = xn(u) ? { ...u } : u;
      s.push(
        ...n.flatMap((p) => o.map((h) => c(f, p, h, d)))
      );
    },
    { immediate: !0, flush: "post" }
  ), a = () => {
    l(), r();
  };
  return vn(a), a;
}
let le = !1;
function Cn(t, e, n = {}) {
  const { window: o = Pe, ignore: i = [], capture: s = !0, detectIframe: r = !1 } = n;
  if (!o)
    return;
  bn && !le && (le = !0, Array.from(o.document.body.children).forEach((d) => d.addEventListener("click", $t)), o.document.documentElement.addEventListener("click", $t));
  let c = !0;
  const l = (d) => i.some((p) => {
    if (typeof p == "string")
      return Array.from(o.document.querySelectorAll(p)).some((h) => h === d.target || d.composedPath().includes(h));
    {
      const h = nt(p);
      return h && (d.target === h || d.composedPath().includes(h));
    }
  }), f = [
    Dt(o, "click", (d) => {
      const p = nt(t);
      if (!(!p || p === d.target || d.composedPath().includes(p))) {
        if (d.detail === 0 && (c = !l(d)), !c) {
          c = !0;
          return;
        }
        e(d);
      }
    }, { passive: !0, capture: s }),
    Dt(o, "pointerdown", (d) => {
      const p = nt(t);
      p && (c = !d.composedPath().includes(p) && !l(d));
    }, { passive: !0 }),
    r && Dt(o, "blur", (d) => {
      setTimeout(() => {
        var p;
        const h = nt(t);
        ((p = o.document.activeElement) == null ? void 0 : p.tagName) === "IFRAME" && !(h != null && h.contains(o.document.activeElement)) && e(d);
      }, 0);
    })
  ].filter(Boolean);
  return () => f.forEach((d) => d());
}
const rt = /^[a-z0-9]+(-[a-z0-9]+)*$/, At = (t, e, n, o = "") => {
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
    return e && !xt(a) ? null : a;
  }
  const s = i[0], r = s.split("-");
  if (r.length > 1) {
    const c = {
      provider: o,
      prefix: r.shift(),
      name: r.join("-")
    };
    return e && !xt(c) ? null : c;
  }
  if (n && o === "") {
    const c = {
      provider: o,
      prefix: "",
      name: s
    };
    return e && !xt(c, n) ? null : c;
  }
  return null;
}, xt = (t, e) => t ? !!((t.provider === "" || t.provider.match(rt)) && (e && t.prefix === "" || t.prefix.match(rt)) && t.name.match(rt)) : !1, Re = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), St = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), Tt = Object.freeze({
  ...Re,
  ...St
}), Vt = Object.freeze({
  ...Tt,
  body: "",
  hidden: !1
});
function kn(t, e) {
  const n = {};
  !t.hFlip != !e.hFlip && (n.hFlip = !0), !t.vFlip != !e.vFlip && (n.vFlip = !0);
  const o = ((t.rotate || 0) + (e.rotate || 0)) % 4;
  return o && (n.rotate = o), n;
}
function ae(t, e) {
  const n = kn(t, e);
  for (const o in Vt)
    o in St ? o in t && !(o in n) && (n[o] = St[o]) : o in e ? n[o] = e[o] : o in t && (n[o] = t[o]);
  return n;
}
function Sn(t, e) {
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
function On(t, e, n) {
  const o = t.icons, i = t.aliases || /* @__PURE__ */ Object.create(null);
  let s = {};
  function r(c) {
    s = ae(
      o[c] || i[c],
      s
    );
  }
  return r(e), n.forEach(r), ae(t, s);
}
function Me(t, e) {
  const n = [];
  if (typeof t != "object" || typeof t.icons != "object")
    return n;
  t.not_found instanceof Array && t.not_found.forEach((i) => {
    e(i, null), n.push(i);
  });
  const o = Sn(t);
  for (const i in o) {
    const s = o[i];
    s && (e(i, On(t, i, s)), n.push(i));
  }
  return n;
}
const In = {
  provider: "",
  aliases: {},
  not_found: {},
  ...Re
};
function Bt(t, e) {
  for (const n in e)
    if (n in t && typeof t[n] != typeof e[n])
      return !1;
  return !0;
}
function Fe(t) {
  if (typeof t != "object" || t === null)
    return null;
  const e = t;
  if (typeof e.prefix != "string" || !t.icons || typeof t.icons != "object" || !Bt(t, In))
    return null;
  const n = e.icons;
  for (const i in n) {
    const s = n[i];
    if (!i.match(rt) || typeof s.body != "string" || !Bt(
      s,
      Vt
    ))
      return null;
  }
  const o = e.aliases || /* @__PURE__ */ Object.create(null);
  for (const i in o) {
    const s = o[i], r = s.parent;
    if (!i.match(rt) || typeof r != "string" || !n[r] && !o[r] || !Bt(
      s,
      Vt
    ))
      return null;
  }
  return e;
}
const ue = /* @__PURE__ */ Object.create(null);
function En(t, e) {
  return {
    provider: t,
    prefix: e,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function U(t, e) {
  const n = ue[t] || (ue[t] = /* @__PURE__ */ Object.create(null));
  return n[e] || (n[e] = En(t, e));
}
function Zt(t, e) {
  return Fe(e) ? Me(e, (n, o) => {
    o ? t.icons[n] = o : t.missing.add(n);
  }) : [];
}
function An(t, e, n) {
  try {
    if (typeof n.body == "string")
      return t.icons[e] = { ...n }, !0;
  } catch {
  }
  return !1;
}
let at = !1;
function je(t) {
  return typeof t == "boolean" && (at = t), at;
}
function Tn(t) {
  const e = typeof t == "string" ? At(t, !0, at) : t;
  if (e) {
    const n = U(e.provider, e.prefix), o = e.name;
    return n.icons[o] || (n.missing.has(o) ? null : void 0);
  }
}
function Ln(t, e) {
  const n = At(t, !0, at);
  if (!n)
    return !1;
  const o = U(n.provider, n.prefix);
  return An(o, n.name, e);
}
function Pn(t, e) {
  if (typeof t != "object")
    return !1;
  if (typeof e != "string" && (e = t.provider || ""), at && !e && !t.prefix) {
    let i = !1;
    return Fe(t) && (t.prefix = "", Me(t, (s, r) => {
      r && Ln(s, r) && (i = !0);
    })), i;
  }
  const n = t.prefix;
  if (!xt({
    provider: e,
    prefix: n,
    name: "a"
  }))
    return !1;
  const o = U(e, n);
  return !!Zt(o, t);
}
const De = Object.freeze({
  width: null,
  height: null
}), Be = Object.freeze({
  // Dimensions
  ...De,
  // Transformations
  ...St
}), Rn = /(-?[0-9.]*[0-9]+[0-9.]*)/g, Mn = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function fe(t, e, n) {
  if (e === 1)
    return t;
  if (n = n || 100, typeof t == "number")
    return Math.ceil(t * e * n) / n;
  if (typeof t != "string")
    return t;
  const o = t.split(Rn);
  if (o === null || !o.length)
    return t;
  const i = [];
  let s = o.shift(), r = Mn.test(s);
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
const Fn = (t) => t === "unset" || t === "undefined" || t === "none";
function jn(t, e) {
  const n = {
    ...Tt,
    ...t
  }, o = {
    ...Be,
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
    let v = h.rotate;
    m ? _ ? v += 2 : (g.push(
      "translate(" + (i.width + i.left).toString() + " " + (0 - i.top).toString() + ")"
    ), g.push("scale(-1 1)"), i.top = i.left = 0) : _ && (g.push(
      "translate(" + (0 - i.left).toString() + " " + (i.height + i.top).toString() + ")"
    ), g.push("scale(1 -1)"), i.top = i.left = 0);
    let x;
    switch (v < 0 && (v -= Math.floor(v / 4) * 4), v = v % 4, v) {
      case 1:
        x = i.height / 2 + i.top, g.unshift(
          "rotate(90 " + x.toString() + " " + x.toString() + ")"
        );
        break;
      case 2:
        g.unshift(
          "rotate(180 " + (i.width / 2 + i.left).toString() + " " + (i.height / 2 + i.top).toString() + ")"
        );
        break;
      case 3:
        x = i.width / 2 + i.left, g.unshift(
          "rotate(-90 " + x.toString() + " " + x.toString() + ")"
        );
        break;
    }
    v % 2 === 1 && (i.left !== i.top && (x = i.left, i.left = i.top, i.top = x), i.width !== i.height && (x = i.width, i.width = i.height, i.height = x)), g.length && (s = '<g transform="' + g.join(" ") + '">' + s + "</g>");
  });
  const r = o.width, c = o.height, l = i.width, a = i.height;
  let f, u;
  r === null ? (u = c === null ? "1em" : c === "auto" ? a : c, f = fe(u, l / a)) : (f = r === "auto" ? l : r, u = c === null ? fe(f, a / l) : c === "auto" ? a : c);
  const d = {}, p = (h, g) => {
    Fn(g) || (d[h] = g.toString());
  };
  return p("width", f), p("height", u), d.viewBox = i.left.toString() + " " + i.top.toString() + " " + l.toString() + " " + a.toString(), {
    attributes: d,
    body: s
  };
}
const Dn = /\sid="(\S+)"/g, Bn = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let Nn = 0;
function $n(t, e = Bn) {
  const n = [];
  let o;
  for (; o = Dn.exec(t); )
    n.push(o[1]);
  if (!n.length)
    return t;
  const i = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return n.forEach((s) => {
    const r = typeof e == "function" ? e(s) : e + (Nn++).toString(), c = s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    t = t.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + c + ')([")]|\\.[a-z])', "g"),
      "$1" + r + i + "$3"
    );
  }), t = t.replace(new RegExp(i, "g"), ""), t;
}
const Ht = /* @__PURE__ */ Object.create(null);
function Vn(t, e) {
  Ht[t] = e;
}
function Wt(t) {
  return Ht[t] || Ht[""];
}
function te(t) {
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
const ee = /* @__PURE__ */ Object.create(null), et = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], bt = [];
for (; et.length > 0; )
  et.length === 1 || Math.random() > 0.5 ? bt.push(et.shift()) : bt.push(et.pop());
ee[""] = te({
  resources: ["https://api.iconify.design"].concat(bt)
});
function Hn(t, e) {
  const n = te(e);
  return n === null ? !1 : (ee[t] = n, !0);
}
function ne(t) {
  return ee[t];
}
const Wn = () => {
  let t;
  try {
    if (t = fetch, typeof t == "function")
      return t;
  } catch {
  }
};
let de = Wn();
function zn(t, e) {
  const n = ne(t);
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
function qn(t) {
  return t === 404;
}
const Qn = (t, e, n) => {
  const o = [], i = zn(t, e), s = "icons";
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
function Un(t) {
  if (typeof t == "string") {
    const e = ne(t);
    if (e)
      return e.path;
  }
  return "/";
}
const Kn = (t, e, n) => {
  if (!de) {
    n("abort", 424);
    return;
  }
  let o = Un(e.provider);
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
  de(t + o).then((s) => {
    const r = s.status;
    if (r !== 200) {
      setTimeout(() => {
        n(qn(r) ? "abort" : "next", r);
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
}, Xn = {
  prepare: Qn,
  send: Kn
};
function Gn(t) {
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
    const s = i.provider, r = i.prefix, c = i.name, l = n[s] || (n[s] = /* @__PURE__ */ Object.create(null)), a = l[r] || (l[r] = U(s, r));
    let f;
    c in a.icons ? f = e.loaded : r === "" || a.missing.has(c) ? f = e.missing : f = e.pending;
    const u = {
      provider: s,
      prefix: r,
      name: c
    };
    f.push(u);
  }), e;
}
function Ne(t, e) {
  t.forEach((n) => {
    const o = n.loaderCallbacks;
    o && (n.loaderCallbacks = o.filter((i) => i.id !== e));
  });
}
function Yn(t) {
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
      }), r.pending.length !== c && (n || Ne([t], s.id), s.callback(
        r.loaded.slice(0),
        r.missing.slice(0),
        r.pending.slice(0),
        s.abort
      ));
    });
  }));
}
let Jn = 0;
function Zn(t, e, n) {
  const o = Jn++, i = Ne.bind(null, n, o);
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
function to(t, e = !0, n = !1) {
  const o = [];
  return t.forEach((i) => {
    const s = typeof i == "string" ? At(i, e, n) : i;
    s && o.push(s);
  }), o;
}
var eo = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function no(t, e, n, o) {
  const i = t.resources.length, s = t.random ? Math.floor(Math.random() * i) : t.index;
  let r;
  if (t.random) {
    let b = t.resources.slice(0);
    for (r = []; b.length > 1; ) {
      const y = Math.floor(Math.random() * b.length);
      r.push(b[y]), b = b.slice(0, y).concat(b.slice(y + 1));
    }
    r = r.concat(b);
  } else
    r = t.resources.slice(s).concat(t.resources.slice(0, s));
  const c = Date.now();
  let l = "pending", a = 0, f, u = null, d = [], p = [];
  typeof o == "function" && p.push(o);
  function h() {
    u && (clearTimeout(u), u = null);
  }
  function g() {
    l === "pending" && (l = "aborted"), h(), d.forEach((b) => {
      b.status === "pending" && (b.status = "aborted");
    }), d = [];
  }
  function m(b, y) {
    y && (p = []), typeof b == "function" && p.push(b);
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
  function v() {
    l = "failed", p.forEach((b) => {
      b(void 0, f);
    });
  }
  function x() {
    d.forEach((b) => {
      b.status === "pending" && (b.status = "aborted");
    }), d = [];
  }
  function A(b, y, w) {
    const O = y !== "success";
    switch (d = d.filter((I) => I !== b), l) {
      case "pending":
        break;
      case "failed":
        if (O || !t.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (y === "abort") {
      f = w, v();
      return;
    }
    if (O) {
      f = w, d.length || (r.length ? k() : v());
      return;
    }
    if (h(), x(), !t.random) {
      const I = t.resources.indexOf(b.resource);
      I !== -1 && I !== t.index && (t.index = I);
    }
    l = "completed", p.forEach((I) => {
      I(w);
    });
  }
  function k() {
    if (l !== "pending")
      return;
    h();
    const b = r.shift();
    if (b === void 0) {
      if (d.length) {
        u = setTimeout(() => {
          h(), l === "pending" && (x(), v());
        }, t.timeout);
        return;
      }
      v();
      return;
    }
    const y = {
      status: "pending",
      resource: b,
      callback: (w, O) => {
        A(y, w, O);
      }
    };
    d.push(y), a++, u = setTimeout(k, t.rotate), n(b, e, y.callback);
  }
  return setTimeout(k), _;
}
function $e(t) {
  const e = {
    ...eo,
    ...t
  };
  let n = [];
  function o() {
    n = n.filter((c) => c().status === "pending");
  }
  function i(c, l, a) {
    const f = no(
      e,
      c,
      l,
      (u, d) => {
        o(), a && a(u, d);
      }
    );
    return n.push(f), f;
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
function pe() {
}
const Nt = /* @__PURE__ */ Object.create(null);
function oo(t) {
  if (!Nt[t]) {
    const e = ne(t);
    if (!e)
      return;
    const n = $e(e), o = {
      config: e,
      redundancy: n
    };
    Nt[t] = o;
  }
  return Nt[t];
}
function io(t, e, n) {
  let o, i;
  if (typeof t == "string") {
    const s = Wt(t);
    if (!s)
      return n(void 0, 424), pe;
    i = s.send;
    const r = oo(t);
    r && (o = r.redundancy);
  } else {
    const s = te(t);
    if (s) {
      o = $e(s);
      const r = t.resources ? t.resources[0] : "", c = Wt(r);
      c && (i = c.send);
    }
  }
  return !o || !i ? (n(void 0, 424), pe) : o.query(e, i, n)().abort;
}
const he = "iconify2", ut = "iconify", Ve = ut + "-count", ge = ut + "-version", He = 36e5, so = 168;
function zt(t, e) {
  try {
    return t.getItem(e);
  } catch {
  }
}
function oe(t, e, n) {
  try {
    return t.setItem(e, n), !0;
  } catch {
  }
}
function me(t, e) {
  try {
    t.removeItem(e);
  } catch {
  }
}
function qt(t, e) {
  return oe(t, Ve, e.toString());
}
function Qt(t) {
  return parseInt(zt(t, Ve)) || 0;
}
const Lt = {
  local: !0,
  session: !0
}, We = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let ie = !1;
function ro(t) {
  ie = t;
}
let yt = typeof window > "u" ? {} : window;
function ze(t) {
  const e = t + "Storage";
  try {
    if (yt && yt[e] && typeof yt[e].length == "number")
      return yt[e];
  } catch {
  }
  Lt[t] = !1;
}
function qe(t, e) {
  const n = ze(t);
  if (!n)
    return;
  const o = zt(n, ge);
  if (o !== he) {
    if (o) {
      const c = Qt(n);
      for (let l = 0; l < c; l++)
        me(n, ut + l.toString());
    }
    oe(n, ge, he), qt(n, 0);
    return;
  }
  const i = Math.floor(Date.now() / He) - so, s = (c) => {
    const l = ut + c.toString(), a = zt(n, l);
    if (typeof a == "string") {
      try {
        const f = JSON.parse(a);
        if (typeof f == "object" && typeof f.cached == "number" && f.cached > i && typeof f.provider == "string" && typeof f.data == "object" && typeof f.data.prefix == "string" && // Valid item: run callback
        e(f, c))
          return !0;
      } catch {
      }
      me(n, l);
    }
  };
  let r = Qt(n);
  for (let c = r - 1; c >= 0; c--)
    s(c) || (c === r - 1 ? (r--, qt(n, r)) : We[t].add(c));
}
function Qe() {
  if (!ie) {
    ro(!0);
    for (const t in Lt)
      qe(t, (e) => {
        const n = e.data, o = e.provider, i = n.prefix, s = U(
          o,
          i
        );
        if (!Zt(s, n).length)
          return !1;
        const r = n.lastModified || -1;
        return s.lastModifiedCached = s.lastModifiedCached ? Math.min(s.lastModifiedCached, r) : r, !0;
      });
  }
}
function co(t, e) {
  const n = t.lastModifiedCached;
  if (
    // Matches or newer
    n && n >= e
  )
    return n === e;
  if (t.lastModifiedCached = e, n)
    for (const o in Lt)
      qe(o, (i) => {
        const s = i.data;
        return i.provider !== t.provider || s.prefix !== t.prefix || s.lastModified === e;
      });
  return !0;
}
function lo(t, e) {
  ie || Qe();
  function n(o) {
    let i;
    if (!Lt[o] || !(i = ze(o)))
      return;
    const s = We[o];
    let r;
    if (s.size)
      s.delete(r = Array.from(s).shift());
    else if (r = Qt(i), !qt(i, r + 1))
      return;
    const c = {
      cached: Math.floor(Date.now() / He),
      provider: t.provider,
      data: e
    };
    return oe(
      i,
      ut + r.toString(),
      JSON.stringify(c)
    );
  }
  e.lastModified && !co(t, e.lastModified) || Object.keys(e.icons).length && (e.not_found && (e = Object.assign({}, e), delete e.not_found), n("local") || n("session"));
}
function ye() {
}
function ao(t) {
  t.iconsLoaderFlag || (t.iconsLoaderFlag = !0, setTimeout(() => {
    t.iconsLoaderFlag = !1, Yn(t);
  }));
}
function uo(t, e) {
  t.iconsToLoad ? t.iconsToLoad = t.iconsToLoad.concat(e).sort() : t.iconsToLoad = e, t.iconsQueueFlag || (t.iconsQueueFlag = !0, setTimeout(() => {
    t.iconsQueueFlag = !1;
    const { provider: n, prefix: o } = t, i = t.iconsToLoad;
    delete t.iconsToLoad;
    let s;
    if (!i || !(s = Wt(n)))
      return;
    s.prepare(n, o, i).forEach((c) => {
      io(n, c, (l) => {
        if (typeof l != "object")
          c.icons.forEach((a) => {
            t.missing.add(a);
          });
        else
          try {
            const a = Zt(
              t,
              l
            );
            if (!a.length)
              return;
            const f = t.pendingIcons;
            f && a.forEach((u) => {
              f.delete(u);
            }), lo(t, l);
          } catch (a) {
            console.error(a);
          }
        ao(t);
      });
    });
  }));
}
const fo = (t, e) => {
  const n = to(t, !0, je()), o = Gn(n);
  if (!o.pending.length) {
    let l = !0;
    return e && setTimeout(() => {
      l && e(
        o.loaded,
        o.missing,
        o.pending,
        ye
      );
    }), () => {
      l = !1;
    };
  }
  const i = /* @__PURE__ */ Object.create(null), s = [];
  let r, c;
  return o.pending.forEach((l) => {
    const { provider: a, prefix: f } = l;
    if (f === c && a === r)
      return;
    r = a, c = f, s.push(U(a, f));
    const u = i[a] || (i[a] = /* @__PURE__ */ Object.create(null));
    u[f] || (u[f] = []);
  }), o.pending.forEach((l) => {
    const { provider: a, prefix: f, name: u } = l, d = U(a, f), p = d.pendingIcons || (d.pendingIcons = /* @__PURE__ */ new Set());
    p.has(u) || (p.add(u), i[a][f].push(u));
  }), s.forEach((l) => {
    const { provider: a, prefix: f } = l;
    i[a][f].length && uo(l, i[a][f]);
  }), e ? Zn(e, o, s) : ye;
};
function po(t, e) {
  const n = {
    ...t
  };
  for (const o in e) {
    const i = e[o], s = typeof i;
    o in De ? (i === null || i && (s === "string" || s === "number")) && (n[o] = i) : s === typeof n[o] && (n[o] = o === "rotate" ? i % 4 : i);
  }
  return n;
}
const ho = /[\s,]+/;
function go(t, e) {
  e.split(ho).forEach((n) => {
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
function mo(t, e = 0) {
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
function yo(t, e) {
  let n = t.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const o in e)
    n += " " + o + '="' + e[o] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + t + "</svg>";
}
function vo(t) {
  return t.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function wo(t) {
  return "data:image/svg+xml," + vo(t);
}
function xo(t) {
  return 'url("' + wo(t) + '")';
}
const ve = {
  ...Be,
  inline: !1
}, bo = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, _o = {
  display: "inline-block"
}, Ut = {
  backgroundColor: "currentColor"
}, Ue = {
  backgroundColor: "transparent"
}, we = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, xe = {
  webkitMask: Ut,
  mask: Ut,
  background: Ue
};
for (const t in xe) {
  const e = xe[t];
  for (const n in we)
    e[t + n] = we[n];
}
const _t = {};
["horizontal", "vertical"].forEach((t) => {
  const e = t.slice(0, 1) + "Flip";
  _t[t + "-flip"] = e, _t[t.slice(0, 1) + "-flip"] = e, _t[t + "Flip"] = e;
});
function be(t) {
  return t + (t.match(/^[-0-9.]+$/) ? "px" : "");
}
const _e = (t, e) => {
  const n = po(ve, e), o = { ...bo }, i = e.mode || "svg", s = {}, r = e.style, c = typeof r == "object" && !(r instanceof Array) ? r : {};
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
          typeof m == "string" && go(n, m);
          break;
        case "color":
          s.color = m;
          break;
        case "rotate":
          typeof m == "string" ? n[g] = mo(m) : typeof m == "number" && (n[g] = m);
          break;
        case "ariaHidden":
        case "aria-hidden":
          m !== !0 && m !== "true" && delete o["aria-hidden"];
          break;
        default: {
          const _ = _t[g];
          _ ? (m === !0 || m === "true" || m === 1) && (n[_] = !0) : ve[g] === void 0 && (o[g] = m);
        }
      }
  }
  const l = jn(t, n), a = l.attributes;
  if (n.inline && (s.verticalAlign = "-0.125em"), i === "svg") {
    o.style = {
      ...s,
      ...c
    }, Object.assign(o, a);
    let g = 0, m = e.id;
    return typeof m == "string" && (m = m.replace(/-/g, "_")), o.innerHTML = $n(l.body, m ? () => m + "ID" + g++ : "iconifyVue"), ce("svg", o);
  }
  const { body: f, width: u, height: d } = t, p = i === "mask" || (i === "bg" ? !1 : f.indexOf("currentColor") !== -1), h = yo(f, {
    ...a,
    width: u + "",
    height: d + ""
  });
  return o.style = {
    ...s,
    "--svg": xo(h),
    width: be(a.width),
    height: be(a.height),
    ..._o,
    ...p ? Ut : Ue,
    ...c
  }, ce("span", o);
};
je(!0);
Vn("", Xn);
if (typeof document < "u" && typeof window < "u") {
  Qe();
  const t = window;
  if (t.IconifyPreload !== void 0) {
    const e = t.IconifyPreload, n = "Invalid IconifyPreload syntax.";
    typeof e == "object" && e !== null && (e instanceof Array ? e : [e]).forEach((o) => {
      try {
        // Check if item is an object and not null/array
        (typeof o != "object" || o === null || o instanceof Array || // Check for 'icons' and 'prefix'
        typeof o.icons != "object" || typeof o.prefix != "string" || // Add icon set
        !Pn(o)) && console.error(n);
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
          Hn(n, i) || console.error(o);
        } catch {
          console.error(o);
        }
      }
  }
}
const Co = {
  ...Tt,
  body: ""
}, ot = X({
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
      if (typeof t != "string" || (n = At(t, !1, !0)) === null)
        return this.abortLoading(), null;
      const o = Tn(n);
      if (!o)
        return (!this._loadingIcon || this._loadingIcon.name !== t) && (this.abortLoading(), this._name = "", o !== null && (this._loadingIcon = {
          name: t,
          abort: fo([n], () => {
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
      return _e(Co, t);
    let n = t;
    return e.classes && (n = {
      ...t,
      class: (typeof t.class == "string" ? t.class + " " : "") + e.classes.join(" ")
    }), _e({
      ...Tt,
      ...e.data
    }, n);
  }
}), ft = (t) => {
  const e = [], n = {};
  return t({ classes: e, styles: n }), {
    class: e,
    style: n
  };
}, Ct = (t) => typeof t == "number" ? `${t}px` : t, ko = /* @__PURE__ */ X({
  __name: "CollapseBody",
  props: {
    expanded: { type: Boolean },
    option: {},
    padding: {}
  },
  setup(t) {
    const e = t, n = j(null), o = j(0);
    Ee(() => {
      var u, d;
      (u = n.value) == null || u.addEventListener("vui-collapse-expand-changed", i), o.value = ((d = n.value) == null ? void 0 : d.offsetHeight) || 0;
    });
    function i(u) {
      u.target !== n.value && s();
    }
    function s() {
      o.value = void 0;
    }
    function r() {
      var u;
      e.expanded ? o.value = ((u = n.value) == null ? void 0 : u.offsetHeight) || 0 : o.value = 0;
    }
    const c = L(() => (Ae(() => r()), e.expanded));
    function l() {
      var d;
      const u = new CustomEvent("vui-collapse-expand-changed", { bubbles: !0 });
      (d = n.value) == null || d.dispatchEvent(u);
    }
    const a = L(() => ft(({ styles: u }) => {
      o.value !== void 0 ? c.value ? (u.height = `${o.value}px`, u.opacity = "1", l()) : (u.height = "0", u.opacity = "0") : r();
    })), f = L(() => ft(({ styles: u }) => {
      u.paddingLeft = Ct(e.padding || "1rem");
    }));
    return (u, d) => (C(), S("div", ct({ class: "vui-collapse-body" }, a.value), [
      H("div", ct({
        class: "vui-collapse-body__content",
        ref_key: "collapseBodyEl",
        ref: n
      }, f.value), [
        it(u.$slots, "default", {}, void 0, !0)
      ], 16)
    ], 16));
  }
});
const pt = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [o, i] of e)
    n[o] = i;
  return n;
}, Ke = /* @__PURE__ */ pt(ko, [["__scopeId", "data-v-518f14fa"]]), So = {
  key: 1,
  class: "vui-cascade-option-title__default-title"
}, Oo = /* @__PURE__ */ X({
  __name: "CascadeOptionTitle",
  props: {
    option: {}
  },
  setup(t) {
    const e = t, n = () => {
      var o, i;
      return (i = (o = e.option).render) == null ? void 0 : i.call(o);
    };
    return (o, i) => (C(), S("div", null, [
      e.option.render ? (C(), lt(n, { key: 0 })) : (C(), S("div", So, st(e.option.title), 1))
    ]));
  }
});
const Io = ["title"], Eo = { class: "vui-cascade-option__string" }, Ao = { class: "vui-cascade-option__string-left" }, To = { class: "vui-cascade-option__tree-btn-space" }, Lo = {
  key: 0,
  class: "vui-cascade-oprion__next-btn"
}, Po = { key: 0 }, Ro = { key: 1 }, Mo = { key: 2 }, Fo = /* @__PURE__ */ X({
  __name: "CascadeOption",
  props: {
    option: {},
    cascade: {}
  },
  emits: ["on-click"],
  setup(t, { emit: e }) {
    const n = t, o = fn("selectedOptions"), i = j(!1), s = L(() => !!n.option.options || !!n.option.getAsyncOptions), r = L(() => !!n.option.children), c = L(() => {
      var p;
      const f = (p = o == null ? void 0 : o.value) == null ? void 0 : p.find((h, g) => g === n.cascade.id);
      if (!f)
        return !1;
      const u = f.id ?? f.value, d = n.option.id || n.option.value;
      return u === d;
    }), l = L(() => ft(({ classes: f }) => {
      c.value && f.push("vui-cascade-option--selected");
    }));
    function a() {
      var p, h;
      const f = { option: n.option, last: !s.value };
      let u = !0;
      const d = () => u = !1;
      (h = (p = n.option).onClick) == null || h.call(p, { preventEmit: d, option: n.option }), u && e("on-click", f);
    }
    return (f, u) => {
      const d = dn("CascadeOption", !0);
      return C(), S("div", ct({
        class: "vui-cascade-option",
        onClick: a
      }, l.value, {
        title: n.option.title
      }), [
        H("div", Eo, [
          H("div", Ao, [
            H("div", To, [
              r.value ? (C(), S("div", {
                key: 0,
                class: pn(["vui-cascade-option__tree-btn", { "vui-cascade-option__tree-btn--opened": i.value }]),
                onClick: u[0] || (u[0] = hn((p) => i.value = !i.value, ["stop"]))
              }, [
                B(Y(ot), { icon: "bxs:right-arrow" })
              ], 2)) : V("", !0)
            ]),
            B(Oo, {
              option: n.option
            }, null, 8, ["option"])
          ]),
          s.value ? (C(), S("div", Lo, [
            f.option.loadingState ? f.option.loadingState === "process" ? (C(), S("span", Ro, [
              B(Y(ot), { icon: "ep:loading" })
            ])) : f.option.loadingState === "ready" ? (C(), S("span", Mo, [
              B(Y(ot), { icon: "ep:refresh" })
            ])) : V("", !0) : (C(), S("span", Po, [
              B(Y(ot), { icon: "ep:arrow-right" })
            ]))
          ])) : V("", !0)
        ]),
        r.value ? (C(), lt(Ke, {
          key: 0,
          expanded: i.value,
          option: n.option
        }, {
          default: kt(() => [
            (C(!0), S(Yt, null, Jt(f.option.children, (p) => (C(), lt(d, {
              key: p.id || p.value,
              cascade: f.cascade,
              option: p,
              onOnClick: u[1] || (u[1] = (h) => e("on-click", h))
            }, null, 8, ["cascade", "option"]))), 128))
          ]),
          _: 1
        }, 8, ["expanded", "option"])) : V("", !0)
      ], 16, Io);
    };
  }
});
const jo = /* @__PURE__ */ pt(Fo, [["__scopeId", "data-v-2b5f9ed8"]]), Do = { class: "vui-cascade__scrollable" }, Bo = {
  key: 0,
  class: "vui-cascade__top-space"
}, No = {
  key: 0,
  class: "vui-cascade__no-data"
}, $o = {
  key: 0,
  class: "vui-cascade__fog"
}, Vo = /* @__PURE__ */ X({
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
    const n = t, o = L(() => ft(({ styles: r }) => {
      var c, l, a;
      r.width = Ct(((c = n.configs) == null ? void 0 : c.width) || "240px"), (l = n.configs) != null && l.maxHeight ? r.maxHeight = Ct(n.configs.maxHeight) : r.height = Ct(((a = n.configs) == null ? void 0 : a.height) || "120px"), r.left = `${12 * n.padding}px`;
    }));
    function i(r) {
      n.fog || e("on-select", { cascade: n.cascade, optionParams: r });
    }
    function s() {
      e("on-back");
    }
    return (r, c) => (C(), S("div", ct({ class: "vui-cascade" }, o.value), [
      H("div", Do, [
        n.canBack ? (C(), S("div", Bo, [
          H("div", {
            class: "vui-cascade__back-btn",
            onClick: s
          }, [
            it(r.$slots, "backBtn", vt(wt({ back: s })), () => [
              B(Y(ot), { icon: "ep:back" })
            ], !0)
          ]),
          it(r.$slots, "beforeOptions", vt(wt({ cascade: n.cascade })), void 0, !0)
        ])) : V("", !0),
        (C(!0), S(Yt, null, Jt(r.cascade.options, (l) => (C(), lt(jo, {
          key: l.id || l.value,
          cascade: r.cascade,
          option: l,
          onOnClick: i
        }, null, 8, ["cascade", "option"]))), 128)),
        it(r.$slots, "cascadeNoData", vt(wt({ cascade: n.cascade })), () => [
          r.cascade.options.length ? V("", !0) : (C(), S("div", No, st(n.noDataText || "no data"), 1))
        ], !0),
        B(gn, { class: "vui-cascade__fog-transition" }, {
          default: kt(() => [
            n.fog ? (C(), S("div", $o)) : V("", !0)
          ]),
          _: 1
        })
      ])
    ], 16));
  }
});
const Ho = /* @__PURE__ */ pt(Vo, [["__scopeId", "data-v-317b962c"]]), Wo = {
  key: 0,
  class: "vui-cascade-input__label"
}, zo = {
  key: 1,
  class: "vui-cascade-input__placeholder"
}, qo = {
  key: 2,
  class: "vui-cascade-input__error"
}, Qo = /* @__PURE__ */ X({
  __name: "CascadeInput",
  props: {
    values: {},
    errorMsg: {},
    separator: { default: "/" },
    placeholder: {},
    disabled: { type: Boolean }
  },
  emits: ["on-click"],
  setup(t, { emit: e }) {
    const n = t, o = L(() => n.values.join(n.separator)), i = L(() => ft(({ classes: r }) => {
      n.disabled && r.push("vui-cascade-input--disabled");
    }));
    function s() {
      e("on-click");
    }
    return (r, c) => (C(), S("div", ct({
      class: "vui-cascade-input",
      onClick: s
    }, i.value), [
      o.value ? (C(), S("div", Wo, st(o.value), 1)) : (C(), S("div", zo, st(n.placeholder), 1)),
      r.errorMsg ? (C(), S("div", qo, st(r.errorMsg), 1)) : V("", !0)
    ], 16));
  }
});
const Uo = /* @__PURE__ */ pt(Qo, [["__scopeId", "data-v-c86b87e6"]]), Kt = Math.min, J = Math.max, Ot = Math.round, W = (t) => ({
  x: t,
  y: t
}), Ko = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Xo = {
  start: "end",
  end: "start"
};
function Ce(t, e, n) {
  return J(t, Kt(e, n));
}
function Pt(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function K(t) {
  return t.split("-")[0];
}
function Rt(t) {
  return t.split("-")[1];
}
function Xe(t) {
  return t === "x" ? "y" : "x";
}
function Ge(t) {
  return t === "y" ? "height" : "width";
}
function Mt(t) {
  return ["top", "bottom"].includes(K(t)) ? "y" : "x";
}
function Ye(t) {
  return Xe(Mt(t));
}
function Go(t, e, n) {
  n === void 0 && (n = !1);
  const o = Rt(t), i = Ye(t), s = Ge(i);
  let r = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[s] > e.floating[s] && (r = It(r)), [r, It(r)];
}
function Yo(t) {
  const e = It(t);
  return [Xt(t), e, Xt(e)];
}
function Xt(t) {
  return t.replace(/start|end/g, (e) => Xo[e]);
}
function Jo(t, e, n) {
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
function Zo(t, e, n, o) {
  const i = Rt(t);
  let s = Jo(K(t), n === "start", o);
  return i && (s = s.map((r) => r + "-" + i), e && (s = s.concat(s.map(Xt)))), s;
}
function It(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Ko[e]);
}
function ti(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function ei(t) {
  return typeof t != "number" ? ti(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function Et(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
function ke(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const s = Mt(e), r = Ye(e), c = Ge(r), l = K(e), a = s === "y", f = o.x + o.width / 2 - i.width / 2, u = o.y + o.height / 2 - i.height / 2, d = o[c] / 2 - i[c] / 2;
  let p;
  switch (l) {
    case "top":
      p = {
        x: f,
        y: o.y - i.height
      };
      break;
    case "bottom":
      p = {
        x: f,
        y: o.y + o.height
      };
      break;
    case "right":
      p = {
        x: o.x + o.width,
        y: u
      };
      break;
    case "left":
      p = {
        x: o.x - i.width,
        y: u
      };
      break;
    default:
      p = {
        x: o.x,
        y: o.y
      };
  }
  switch (Rt(e)) {
    case "start":
      p[r] -= d * (n && a ? -1 : 1);
      break;
    case "end":
      p[r] += d * (n && a ? -1 : 1);
      break;
  }
  return p;
}
const ni = async (t, e, n) => {
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
    x: f,
    y: u
  } = ke(a, o, l), d = o, p = {}, h = 0;
  for (let g = 0; g < c.length; g++) {
    const {
      name: m,
      fn: _
    } = c[g], {
      x: v,
      y: x,
      data: A,
      reset: k
    } = await _({
      x: f,
      y: u,
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
    if (f = v ?? f, u = x ?? u, p = {
      ...p,
      [m]: {
        ...p[m],
        ...A
      }
    }, k && h <= 50) {
      h++, typeof k == "object" && (k.placement && (d = k.placement), k.rects && (a = k.rects === !0 ? await r.getElementRects({
        reference: t,
        floating: e,
        strategy: i
      }) : k.rects), {
        x: f,
        y: u
      } = ke(a, d, l)), g = -1;
      continue;
    }
  }
  return {
    x: f,
    y: u,
    placement: d,
    strategy: i,
    middlewareData: p
  };
};
async function Je(t, e) {
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
    rootBoundary: f = "viewport",
    elementContext: u = "floating",
    altBoundary: d = !1,
    padding: p = 0
  } = Pt(e, t), h = ei(p), m = c[d ? u === "floating" ? "reference" : "floating" : u], _ = Et(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(m))) == null || n ? m : m.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(c.floating)),
    boundary: a,
    rootBoundary: f,
    strategy: l
  })), v = u === "floating" ? {
    ...r.floating,
    x: o,
    y: i
  } : r.reference, x = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c.floating)), A = await (s.isElement == null ? void 0 : s.isElement(x)) ? await (s.getScale == null ? void 0 : s.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, k = Et(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: v,
    offsetParent: x,
    strategy: l
  }) : v);
  return {
    top: (_.top - k.top + h.top) / A.y,
    bottom: (k.bottom - _.bottom + h.bottom) / A.y,
    left: (_.left - k.left + h.left) / A.x,
    right: (k.right - _.right + h.right) / A.x
  };
}
const oi = function(t) {
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
        mainAxis: f = !0,
        crossAxis: u = !0,
        fallbackPlacements: d,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: g = !0,
        ...m
      } = Pt(t, e);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const _ = K(i), v = K(c) === c, x = await (l.isRTL == null ? void 0 : l.isRTL(a.floating)), A = d || (v || !g ? [It(c)] : Yo(c));
      !d && h !== "none" && A.push(...Zo(c, g, h, x));
      const k = [c, ...A], b = await Je(e, m), y = [];
      let w = ((o = s.flip) == null ? void 0 : o.overflows) || [];
      if (f && y.push(b[_]), u) {
        const E = Go(i, r, x);
        y.push(b[E[0]], b[E[1]]);
      }
      if (w = [...w, {
        placement: i,
        overflows: y
      }], !y.every((E) => E <= 0)) {
        var O, I;
        const E = (((O = s.flip) == null ? void 0 : O.index) || 0) + 1, gt = k[E];
        if (gt)
          return {
            data: {
              index: E,
              overflows: w
            },
            reset: {
              placement: gt
            }
          };
        let $ = (I = w.filter((R) => R.overflows[0] <= 0).sort((R, M) => R.overflows[1] - M.overflows[1])[0]) == null ? void 0 : I.placement;
        if (!$)
          switch (p) {
            case "bestFit": {
              var Q;
              const R = (Q = w.map((M) => [M.placement, M.overflows.filter((F) => F > 0).reduce((F, mt) => F + mt, 0)]).sort((M, F) => M[1] - F[1])[0]) == null ? void 0 : Q[0];
              R && ($ = R);
              break;
            }
            case "initialPlacement":
              $ = c;
              break;
          }
        if (i !== $)
          return {
            reset: {
              placement: $
            }
          };
      }
      return {};
    }
  };
};
async function ii(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, s = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), r = K(n), c = Rt(n), l = Mt(n) === "y", a = ["left", "top"].includes(r) ? -1 : 1, f = s && l ? -1 : 1, u = Pt(e, t);
  let {
    mainAxis: d,
    crossAxis: p,
    alignmentAxis: h
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...u
  };
  return c && typeof h == "number" && (p = c === "end" ? h * -1 : h), l ? {
    x: p * f,
    y: d * a
  } : {
    x: d * a,
    y: p * f
  };
}
const si = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, i = await ii(e, t);
      return {
        x: n + i.x,
        y: o + i.y,
        data: i
      };
    }
  };
}, ri = function(t) {
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
              y: v
            } = m;
            return {
              x: _,
              y: v
            };
          }
        },
        ...l
      } = Pt(t, e), a = {
        x: n,
        y: o
      }, f = await Je(e, l), u = Mt(K(i)), d = Xe(u);
      let p = a[d], h = a[u];
      if (s) {
        const m = d === "y" ? "top" : "left", _ = d === "y" ? "bottom" : "right", v = p + f[m], x = p - f[_];
        p = Ce(v, p, x);
      }
      if (r) {
        const m = u === "y" ? "top" : "left", _ = u === "y" ? "bottom" : "right", v = h + f[m], x = h - f[_];
        h = Ce(v, h, x);
      }
      const g = c.fn({
        ...e,
        [d]: p,
        [u]: h
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
function z(t) {
  return Ze(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function T(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function q(t) {
  var e;
  return (e = (Ze(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function Ze(t) {
  return t instanceof Node || t instanceof T(t).Node;
}
function N(t) {
  return t instanceof Element || t instanceof T(t).Element;
}
function D(t) {
  return t instanceof HTMLElement || t instanceof T(t).HTMLElement;
}
function Se(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof T(t).ShadowRoot;
}
function ht(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = P(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function ci(t) {
  return ["table", "td", "th"].includes(z(t));
}
function se(t) {
  const e = re(), n = P(t);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function li(t) {
  let e = tt(t);
  for (; D(e) && !Ft(e); ) {
    if (se(e))
      return e;
    e = tt(e);
  }
  return null;
}
function re() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ft(t) {
  return ["html", "body", "#document"].includes(z(t));
}
function P(t) {
  return T(t).getComputedStyle(t);
}
function jt(t) {
  return N(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function tt(t) {
  if (z(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    Se(t) && t.host || // Fallback.
    q(t)
  );
  return Se(e) ? e.host : e;
}
function tn(t) {
  const e = tt(t);
  return Ft(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : D(e) && ht(e) ? e : tn(e);
}
function Gt(t, e, n) {
  var o;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const i = tn(t), s = i === ((o = t.ownerDocument) == null ? void 0 : o.body), r = T(i);
  return s ? e.concat(r, r.visualViewport || [], ht(i) ? i : [], r.frameElement && n ? Gt(r.frameElement) : []) : e.concat(i, Gt(i, [], n));
}
function en(t) {
  const e = P(t);
  let n = parseFloat(e.width) || 0, o = parseFloat(e.height) || 0;
  const i = D(t), s = i ? t.offsetWidth : n, r = i ? t.offsetHeight : o, c = Ot(n) !== s || Ot(o) !== r;
  return c && (n = s, o = r), {
    width: n,
    height: o,
    $: c
  };
}
function nn(t) {
  return N(t) ? t : t.contextElement;
}
function Z(t) {
  const e = nn(t);
  if (!D(e))
    return W(1);
  const n = e.getBoundingClientRect(), {
    width: o,
    height: i,
    $: s
  } = en(e);
  let r = (s ? Ot(n.width) : n.width) / o, c = (s ? Ot(n.height) : n.height) / i;
  return (!r || !Number.isFinite(r)) && (r = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: r,
    y: c
  };
}
const ai = /* @__PURE__ */ W(0);
function on(t) {
  const e = T(t);
  return !re() || !e.visualViewport ? ai : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function ui(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== T(t) ? !1 : e;
}
function dt(t, e, n, o) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const i = t.getBoundingClientRect(), s = nn(t);
  let r = W(1);
  e && (o ? N(o) && (r = Z(o)) : r = Z(t));
  const c = ui(s, n, o) ? on(s) : W(0);
  let l = (i.left + c.x) / r.x, a = (i.top + c.y) / r.y, f = i.width / r.x, u = i.height / r.y;
  if (s) {
    const d = T(s), p = o && N(o) ? T(o) : o;
    let h = d.frameElement;
    for (; h && o && p !== d; ) {
      const g = Z(h), m = h.getBoundingClientRect(), _ = P(h), v = m.left + (h.clientLeft + parseFloat(_.paddingLeft)) * g.x, x = m.top + (h.clientTop + parseFloat(_.paddingTop)) * g.y;
      l *= g.x, a *= g.y, f *= g.x, u *= g.y, l += v, a += x, h = T(h).frameElement;
    }
  }
  return Et({
    width: f,
    height: u,
    x: l,
    y: a
  });
}
function fi(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: o
  } = t;
  const i = D(n), s = q(n);
  if (n === s)
    return e;
  let r = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = W(1);
  const l = W(0);
  if ((i || !i && o !== "fixed") && ((z(n) !== "body" || ht(s)) && (r = jt(n)), D(n))) {
    const a = dt(n);
    c = Z(n), l.x = a.x + n.clientLeft, l.y = a.y + n.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - r.scrollLeft * c.x + l.x,
    y: e.y * c.y - r.scrollTop * c.y + l.y
  };
}
function di(t) {
  return Array.from(t.getClientRects());
}
function sn(t) {
  return dt(q(t)).left + jt(t).scrollLeft;
}
function pi(t) {
  const e = q(t), n = jt(t), o = t.ownerDocument.body, i = J(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth), s = J(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
  let r = -n.scrollLeft + sn(t);
  const c = -n.scrollTop;
  return P(o).direction === "rtl" && (r += J(e.clientWidth, o.clientWidth) - i), {
    width: i,
    height: s,
    x: r,
    y: c
  };
}
function hi(t, e) {
  const n = T(t), o = q(t), i = n.visualViewport;
  let s = o.clientWidth, r = o.clientHeight, c = 0, l = 0;
  if (i) {
    s = i.width, r = i.height;
    const a = re();
    (!a || a && e === "fixed") && (c = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: s,
    height: r,
    x: c,
    y: l
  };
}
function gi(t, e) {
  const n = dt(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, s = D(t) ? Z(t) : W(1), r = t.clientWidth * s.x, c = t.clientHeight * s.y, l = i * s.x, a = o * s.y;
  return {
    width: r,
    height: c,
    x: l,
    y: a
  };
}
function Oe(t, e, n) {
  let o;
  if (e === "viewport")
    o = hi(t, n);
  else if (e === "document")
    o = pi(q(t));
  else if (N(e))
    o = gi(e, n);
  else {
    const i = on(t);
    o = {
      ...e,
      x: e.x - i.x,
      y: e.y - i.y
    };
  }
  return Et(o);
}
function rn(t, e) {
  const n = tt(t);
  return n === e || !N(n) || Ft(n) ? !1 : P(n).position === "fixed" || rn(n, e);
}
function mi(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = Gt(t, [], !1).filter((c) => N(c) && z(c) !== "body"), i = null;
  const s = P(t).position === "fixed";
  let r = s ? tt(t) : t;
  for (; N(r) && !Ft(r); ) {
    const c = P(r), l = se(r);
    !l && c.position === "fixed" && (i = null), (s ? !l && !i : !l && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || ht(r) && !l && rn(t, r)) ? o = o.filter((f) => f !== r) : i = c, r = tt(r);
  }
  return e.set(t, o), o;
}
function yi(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = t;
  const r = [...n === "clippingAncestors" ? mi(e, this._c) : [].concat(n), o], c = r[0], l = r.reduce((a, f) => {
    const u = Oe(e, f, i);
    return a.top = J(u.top, a.top), a.right = Kt(u.right, a.right), a.bottom = Kt(u.bottom, a.bottom), a.left = J(u.left, a.left), a;
  }, Oe(e, c, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function vi(t) {
  return en(t);
}
function wi(t, e, n) {
  const o = D(e), i = q(e), s = n === "fixed", r = dt(t, !0, s, e);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = W(0);
  if (o || !o && !s)
    if ((z(e) !== "body" || ht(i)) && (c = jt(e)), o) {
      const a = dt(e, !0, s, e);
      l.x = a.x + e.clientLeft, l.y = a.y + e.clientTop;
    } else
      i && (l.x = sn(i));
  return {
    x: r.left + c.scrollLeft - l.x,
    y: r.top + c.scrollTop - l.y,
    width: r.width,
    height: r.height
  };
}
function Ie(t, e) {
  return !D(t) || P(t).position === "fixed" ? null : e ? e(t) : t.offsetParent;
}
function cn(t, e) {
  const n = T(t);
  if (!D(t))
    return n;
  let o = Ie(t, e);
  for (; o && ci(o) && P(o).position === "static"; )
    o = Ie(o, e);
  return o && (z(o) === "html" || z(o) === "body" && P(o).position === "static" && !se(o)) ? n : o || li(t) || n;
}
const xi = async function(t) {
  let {
    reference: e,
    floating: n,
    strategy: o
  } = t;
  const i = this.getOffsetParent || cn, s = this.getDimensions;
  return {
    reference: wi(e, await i(n), o),
    floating: {
      x: 0,
      y: 0,
      ...await s(n)
    }
  };
};
function bi(t) {
  return P(t).direction === "rtl";
}
const _i = {
  convertOffsetParentRelativeRectToViewportRelativeRect: fi,
  getDocumentElement: q,
  getClippingRect: yi,
  getOffsetParent: cn,
  getElementRects: xi,
  getClientRects: di,
  getDimensions: vi,
  getScale: Z,
  isElement: N,
  isRTL: bi
}, Ci = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: _i,
    ...n
  }, s = {
    ...i.platform,
    _c: o
  };
  return ni(t, e, {
    ...i,
    platform: s
  });
}, ki = /* @__PURE__ */ X({
  __name: "Cascader",
  props: {
    modelValue: {},
    data: {},
    separator: { default: "/" },
    cascadesConfig: {},
    transform: {},
    reform: {},
    placeholder: { default: "" },
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const n = t, o = j(null), i = j(null), s = j(null), r = {
      value: "__ROOT_CASCADE__",
      title: "",
      options: n.data
    }, c = j(!1), l = j(""), a = j([]);
    v(r, 0);
    const f = L(() => c.value ? a.value : []), u = j([]);
    u.value = k(n.modelValue || []), mn("selectedOptions", u);
    const d = L(() => u.value.map((y) => y.title)), p = (y) => {
      var w;
      return ((w = a.value[a.value.length - 1]) == null ? void 0 : w.id) === y.id;
    };
    function h(y) {
      y && n.disabled || (c.value = y, y || (u.value = k(n.modelValue || [])));
    }
    Ee(() => {
      Cn(o.value, m);
      const y = i.value, w = s.value;
      Ci(y, w, {
        middleware: [
          oi(),
          si(4),
          ri()
        ]
      }).then(({ y: O }) => {
        Object.assign(w.style, {
          top: `${O}px`
        });
      });
    });
    function g() {
      h(!0);
    }
    function m() {
      h(!1);
    }
    function _({ cascade: y, optionParams: w }) {
      if (u.value = u.value.slice(0, y.id), u.value[y.id] = w.option, w.last) {
        e("update:modelValue", b(u.value)), Ae(() => {
          h(!1);
        });
        return;
      }
      v(w.option);
    }
    function v(y, w) {
      const O = w || a.value.length;
      w !== void 0 && (a.value = a.value.slice(0, w)), a.value.push(x(y, O));
    }
    function x(y, w) {
      return { id: w, options: y.options || [] };
    }
    function A() {
      a.value.pop();
    }
    function k(y) {
      var I, Q;
      if (n.transform)
        return n.transform(y, x);
      const w = [], O = y;
      for (let E = 0; E < O.length; E++) {
        const gt = O[E], $ = (M) => {
          var mt;
          let F = M.find((G) => G.value === gt);
          if (F)
            return F;
          for (let G = 0; G < M.length; G++)
            if ((mt = M[G].children) != null && mt.length && (F = $(M[G].children), F))
              return F;
        }, R = $((I = a.value[E]) == null ? void 0 : I.options);
        if (R)
          if (w.push(R), (Q = R.options) != null && Q.length)
            v(R, E + 1);
          else if (E < O.length - 1) {
            l.value = "Can`t display such a value";
            break;
          } else
            E === O.length - 1 && (l.value = "");
        else {
          l.value = "Can`t display such a value";
          break;
        }
      }
      return w;
    }
    function b(y) {
      return n.reform ? n.reform(y) : y.map((w) => w.value);
    }
    return (y, w) => (C(), S("div", {
      class: "vui-cascader",
      ref_key: "cascaderEl",
      ref: o
    }, [
      H("div", {
        class: "vue-cascader__input-wrapper",
        ref_key: "inputWrapperEl",
        ref: i
      }, [
        B(Uo, {
          values: d.value,
          separator: n.separator,
          placeholder: n.placeholder,
          disabled: n.disabled,
          onOnClick: g
        }, null, 8, ["values", "separator", "placeholder", "disabled"])
      ], 512),
      H("div", {
        class: "vui-cascader__dropdown",
        ref_key: "dropdownEl",
        ref: s
      }, [
        B(yn, {
          tag: "div",
          mode: "in-out",
          name: "vui-cascader-transition"
        }, {
          default: kt(() => [
            (C(!0), S(Yt, null, Jt(f.value, (O, I) => (C(), lt(Ho, {
              key: O.id,
              cascade: O,
              padding: I,
              fog: !p(O),
              canBack: I > 0,
              configs: n.cascadesConfig,
              onOnSelect: _,
              onOnBack: A,
              noDataText: n.noDataText
            }, {
              cascadeNoData: kt(({ cascade: Q }) => [
                it(y.$slots, "cascadeNoData", vt(wt(Q)), void 0, !0)
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
const Si = /* @__PURE__ */ pt(ki, [["__scopeId", "data-v-5d38b7a3"]]), Ii = {
  install: (t) => {
    t.component("Cascader", Si), t.component("CollapseBody", Ke);
  }
};
export {
  Si as Cascader,
  Ke as CollapseBody,
  ft as createStyleClasses,
  Ii as default
};
