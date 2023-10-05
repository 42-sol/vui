import { getCurrentScope as rn, onScopeDispose as cn, unref as X, watch as ln, defineComponent as Z, h as ie, ref as j, onMounted as Se, computed as F, nextTick as Ie, openBlock as C, createElementBlock as I, mergeProps as vt, createElementVNode as D, renderSlot as Oe, inject as an, resolveComponent as un, normalizeClass as fn, withModifiers as dn, createVNode as $, createCommentVNode as q, toDisplayString as pt, createBlock as wt, withCtx as Ut, Fragment as Kt, renderList as Xt, normalizeProps as pn, guardReactiveProps as hn, Transition as gn, provide as mn, TransitionGroup as yn } from "vue";
function vn(t) {
  return rn() ? (cn(t), !0) : !1;
}
function Ee(t) {
  return typeof t == "function" ? t() : X(t);
}
const Ae = typeof window < "u" && typeof document < "u", wn = Object.prototype.toString, xn = (t) => wn.call(t) === "[object Object]", jt = () => {
}, bn = /* @__PURE__ */ _n();
function _n() {
  var t;
  return Ae && ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.userAgent) && /* @__PURE__ */ /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
function nt(t) {
  var e;
  const n = Ee(t);
  return (e = n == null ? void 0 : n.$el) != null ? e : n;
}
const Te = Ae ? window : void 0;
function Rt(...t) {
  let e, n, o, i;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([n, o, i] = t, e = Te) : [e, n, o, i] = t, !e)
    return jt;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const s = [], r = () => {
    s.forEach((f) => f()), s.length = 0;
  }, c = (f, u, d, p) => (f.addEventListener(u, d, p), () => f.removeEventListener(u, d, p)), l = ln(
    () => [nt(e), Ee(i)],
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
let se = !1;
function Cn(t, e, n = {}) {
  const { window: o = Te, ignore: i = [], capture: s = !0, detectIframe: r = !1 } = n;
  if (!o)
    return;
  bn && !se && (se = !0, Array.from(o.document.body.children).forEach((d) => d.addEventListener("click", jt)), o.document.documentElement.addEventListener("click", jt));
  let c = !0;
  const l = (d) => i.some((p) => {
    if (typeof p == "string")
      return Array.from(o.document.querySelectorAll(p)).some((h) => h === d.target || d.composedPath().includes(h));
    {
      const h = nt(p);
      return h && (d.target === h || d.composedPath().includes(h));
    }
  }), f = [
    Rt(o, "click", (d) => {
      const p = nt(t);
      if (!(!p || p === d.target || d.composedPath().includes(p))) {
        if (d.detail === 0 && (c = !l(d)), !c) {
          c = !0;
          return;
        }
        e(d);
      }
    }, { passive: !0, capture: s }),
    Rt(o, "pointerdown", (d) => {
      const p = nt(t);
      p && (c = !d.composedPath().includes(p) && !l(d));
    }, { passive: !0 }),
    r && Rt(o, "blur", (d) => {
      setTimeout(() => {
        var p;
        const h = nt(t);
        ((p = o.document.activeElement) == null ? void 0 : p.tagName) === "IFRAME" && !(h != null && h.contains(o.document.activeElement)) && e(d);
      }, 0);
    })
  ].filter(Boolean);
  return () => f.forEach((d) => d());
}
const it = /^[a-z0-9]+(-[a-z0-9]+)*$/, St = (t, e, n, o = "") => {
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
    return e && !ht(a) ? null : a;
  }
  const s = i[0], r = s.split("-");
  if (r.length > 1) {
    const c = {
      provider: o,
      prefix: r.shift(),
      name: r.join("-")
    };
    return e && !ht(c) ? null : c;
  }
  if (n && o === "") {
    const c = {
      provider: o,
      prefix: "",
      name: s
    };
    return e && !ht(c, n) ? null : c;
  }
  return null;
}, ht = (t, e) => t ? !!((t.provider === "" || t.provider.match(it)) && (e && t.prefix === "" || t.prefix.match(it)) && t.name.match(it)) : !1, Le = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), xt = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), It = Object.freeze({
  ...Le,
  ...xt
}), Bt = Object.freeze({
  ...It,
  body: "",
  hidden: !1
});
function kn(t, e) {
  const n = {};
  !t.hFlip != !e.hFlip && (n.hFlip = !0), !t.vFlip != !e.vFlip && (n.vFlip = !0);
  const o = ((t.rotate || 0) + (e.rotate || 0)) % 4;
  return o && (n.rotate = o), n;
}
function re(t, e) {
  const n = kn(t, e);
  for (const o in Bt)
    o in xt ? o in t && !(o in n) && (n[o] = xt[o]) : o in e ? n[o] = e[o] : o in t && (n[o] = t[o]);
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
function In(t, e, n) {
  const o = t.icons, i = t.aliases || /* @__PURE__ */ Object.create(null);
  let s = {};
  function r(c) {
    s = re(
      o[c] || i[c],
      s
    );
  }
  return r(e), n.forEach(r), re(t, s);
}
function Pe(t, e) {
  const n = [];
  if (typeof t != "object" || typeof t.icons != "object")
    return n;
  t.not_found instanceof Array && t.not_found.forEach((i) => {
    e(i, null), n.push(i);
  });
  const o = Sn(t);
  for (const i in o) {
    const s = o[i];
    s && (e(i, In(t, i, s)), n.push(i));
  }
  return n;
}
const On = {
  provider: "",
  aliases: {},
  not_found: {},
  ...Le
};
function Mt(t, e) {
  for (const n in e)
    if (n in t && typeof t[n] != typeof e[n])
      return !1;
  return !0;
}
function Re(t) {
  if (typeof t != "object" || t === null)
    return null;
  const e = t;
  if (typeof e.prefix != "string" || !t.icons || typeof t.icons != "object" || !Mt(t, On))
    return null;
  const n = e.icons;
  for (const i in n) {
    const s = n[i];
    if (!i.match(it) || typeof s.body != "string" || !Mt(
      s,
      Bt
    ))
      return null;
  }
  const o = e.aliases || /* @__PURE__ */ Object.create(null);
  for (const i in o) {
    const s = o[i], r = s.parent;
    if (!i.match(it) || typeof r != "string" || !n[r] && !o[r] || !Mt(
      s,
      Bt
    ))
      return null;
  }
  return e;
}
const ce = /* @__PURE__ */ Object.create(null);
function En(t, e) {
  return {
    provider: t,
    prefix: e,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function Q(t, e) {
  const n = ce[t] || (ce[t] = /* @__PURE__ */ Object.create(null));
  return n[e] || (n[e] = En(t, e));
}
function Gt(t, e) {
  return Re(e) ? Pe(e, (n, o) => {
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
let st = !1;
function Me(t) {
  return typeof t == "boolean" && (st = t), st;
}
function Tn(t) {
  const e = typeof t == "string" ? St(t, !0, st) : t;
  if (e) {
    const n = Q(e.provider, e.prefix), o = e.name;
    return n.icons[o] || (n.missing.has(o) ? null : void 0);
  }
}
function Ln(t, e) {
  const n = St(t, !0, st);
  if (!n)
    return !1;
  const o = Q(n.provider, n.prefix);
  return An(o, n.name, e);
}
function Pn(t, e) {
  if (typeof t != "object")
    return !1;
  if (typeof e != "string" && (e = t.provider || ""), st && !e && !t.prefix) {
    let i = !1;
    return Re(t) && (t.prefix = "", Pe(t, (s, r) => {
      r && Ln(s, r) && (i = !0);
    })), i;
  }
  const n = t.prefix;
  if (!ht({
    provider: e,
    prefix: n,
    name: "a"
  }))
    return !1;
  const o = Q(e, n);
  return !!Gt(o, t);
}
const Fe = Object.freeze({
  width: null,
  height: null
}), je = Object.freeze({
  // Dimensions
  ...Fe,
  // Transformations
  ...xt
}), Rn = /(-?[0-9.]*[0-9]+[0-9.]*)/g, Mn = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function le(t, e, n) {
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
    ...It,
    ...t
  }, o = {
    ...je,
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
  r === null ? (u = c === null ? "1em" : c === "auto" ? a : c, f = le(u, l / a)) : (f = r === "auto" ? l : r, u = c === null ? le(f, a / l) : c === "auto" ? a : c);
  const d = {}, p = (h, g) => {
    Fn(g) || (d[h] = g.toString());
  };
  return p("width", f), p("height", u), d.viewBox = i.left.toString() + " " + i.top.toString() + " " + l.toString() + " " + a.toString(), {
    attributes: d,
    body: s
  };
}
const Bn = /\sid="(\S+)"/g, Dn = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let Nn = 0;
function Vn(t, e = Dn) {
  const n = [];
  let o;
  for (; o = Bn.exec(t); )
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
const Dt = /* @__PURE__ */ Object.create(null);
function $n(t, e) {
  Dt[t] = e;
}
function Nt(t) {
  return Dt[t] || Dt[""];
}
function Yt(t) {
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
const Jt = /* @__PURE__ */ Object.create(null), et = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], gt = [];
for (; et.length > 0; )
  et.length === 1 || Math.random() > 0.5 ? gt.push(et.shift()) : gt.push(et.pop());
Jt[""] = Yt({
  resources: ["https://api.iconify.design"].concat(gt)
});
function Hn(t, e) {
  const n = Yt(e);
  return n === null ? !1 : (Jt[t] = n, !0);
}
function Zt(t) {
  return Jt[t];
}
const Wn = () => {
  let t;
  try {
    if (t = fetch, typeof t == "function")
      return t;
  } catch {
  }
};
let ae = Wn();
function zn(t, e) {
  const n = Zt(t);
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
    const e = Zt(t);
    if (e)
      return e.path;
  }
  return "/";
}
const Kn = (t, e, n) => {
  if (!ae) {
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
  ae(t + o).then((s) => {
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
    const s = i.provider, r = i.prefix, c = i.name, l = n[s] || (n[s] = /* @__PURE__ */ Object.create(null)), a = l[r] || (l[r] = Q(s, r));
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
function Be(t, e) {
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
      }), r.pending.length !== c && (n || Be([t], s.id), s.callback(
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
  const o = Jn++, i = Be.bind(null, n, o);
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
    const s = typeof i == "string" ? St(i, e, n) : i;
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
    const S = y !== "success";
    switch (d = d.filter((O) => O !== b), l) {
      case "pending":
        break;
      case "failed":
        if (S || !t.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (y === "abort") {
      f = w, v();
      return;
    }
    if (S) {
      f = w, d.length || (r.length ? k() : v());
      return;
    }
    if (h(), x(), !t.random) {
      const O = t.resources.indexOf(b.resource);
      O !== -1 && O !== t.index && (t.index = O);
    }
    l = "completed", p.forEach((O) => {
      O(w);
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
      callback: (w, S) => {
        A(y, w, S);
      }
    };
    d.push(y), a++, u = setTimeout(k, t.rotate), n(b, e, y.callback);
  }
  return setTimeout(k), _;
}
function De(t) {
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
function ue() {
}
const Ft = /* @__PURE__ */ Object.create(null);
function oo(t) {
  if (!Ft[t]) {
    const e = Zt(t);
    if (!e)
      return;
    const n = De(e), o = {
      config: e,
      redundancy: n
    };
    Ft[t] = o;
  }
  return Ft[t];
}
function io(t, e, n) {
  let o, i;
  if (typeof t == "string") {
    const s = Nt(t);
    if (!s)
      return n(void 0, 424), ue;
    i = s.send;
    const r = oo(t);
    r && (o = r.redundancy);
  } else {
    const s = Yt(t);
    if (s) {
      o = De(s);
      const r = t.resources ? t.resources[0] : "", c = Nt(r);
      c && (i = c.send);
    }
  }
  return !o || !i ? (n(void 0, 424), ue) : o.query(e, i, n)().abort;
}
const fe = "iconify2", rt = "iconify", Ne = rt + "-count", de = rt + "-version", Ve = 36e5, so = 168;
function Vt(t, e) {
  try {
    return t.getItem(e);
  } catch {
  }
}
function te(t, e, n) {
  try {
    return t.setItem(e, n), !0;
  } catch {
  }
}
function pe(t, e) {
  try {
    t.removeItem(e);
  } catch {
  }
}
function $t(t, e) {
  return te(t, Ne, e.toString());
}
function Ht(t) {
  return parseInt(Vt(t, Ne)) || 0;
}
const Ot = {
  local: !0,
  session: !0
}, $e = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let ee = !1;
function ro(t) {
  ee = t;
}
let dt = typeof window > "u" ? {} : window;
function He(t) {
  const e = t + "Storage";
  try {
    if (dt && dt[e] && typeof dt[e].length == "number")
      return dt[e];
  } catch {
  }
  Ot[t] = !1;
}
function We(t, e) {
  const n = He(t);
  if (!n)
    return;
  const o = Vt(n, de);
  if (o !== fe) {
    if (o) {
      const c = Ht(n);
      for (let l = 0; l < c; l++)
        pe(n, rt + l.toString());
    }
    te(n, de, fe), $t(n, 0);
    return;
  }
  const i = Math.floor(Date.now() / Ve) - so, s = (c) => {
    const l = rt + c.toString(), a = Vt(n, l);
    if (typeof a == "string") {
      try {
        const f = JSON.parse(a);
        if (typeof f == "object" && typeof f.cached == "number" && f.cached > i && typeof f.provider == "string" && typeof f.data == "object" && typeof f.data.prefix == "string" && // Valid item: run callback
        e(f, c))
          return !0;
      } catch {
      }
      pe(n, l);
    }
  };
  let r = Ht(n);
  for (let c = r - 1; c >= 0; c--)
    s(c) || (c === r - 1 ? (r--, $t(n, r)) : $e[t].add(c));
}
function ze() {
  if (!ee) {
    ro(!0);
    for (const t in Ot)
      We(t, (e) => {
        const n = e.data, o = e.provider, i = n.prefix, s = Q(
          o,
          i
        );
        if (!Gt(s, n).length)
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
    for (const o in Ot)
      We(o, (i) => {
        const s = i.data;
        return i.provider !== t.provider || s.prefix !== t.prefix || s.lastModified === e;
      });
  return !0;
}
function lo(t, e) {
  ee || ze();
  function n(o) {
    let i;
    if (!Ot[o] || !(i = He(o)))
      return;
    const s = $e[o];
    let r;
    if (s.size)
      s.delete(r = Array.from(s).shift());
    else if (r = Ht(i), !$t(i, r + 1))
      return;
    const c = {
      cached: Math.floor(Date.now() / Ve),
      provider: t.provider,
      data: e
    };
    return te(
      i,
      rt + r.toString(),
      JSON.stringify(c)
    );
  }
  e.lastModified && !co(t, e.lastModified) || Object.keys(e.icons).length && (e.not_found && (e = Object.assign({}, e), delete e.not_found), n("local") || n("session"));
}
function he() {
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
    if (!i || !(s = Nt(n)))
      return;
    s.prepare(n, o, i).forEach((c) => {
      io(n, c, (l) => {
        if (typeof l != "object")
          c.icons.forEach((a) => {
            t.missing.add(a);
          });
        else
          try {
            const a = Gt(
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
  const n = to(t, !0, Me()), o = Gn(n);
  if (!o.pending.length) {
    let l = !0;
    return e && setTimeout(() => {
      l && e(
        o.loaded,
        o.missing,
        o.pending,
        he
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
    r = a, c = f, s.push(Q(a, f));
    const u = i[a] || (i[a] = /* @__PURE__ */ Object.create(null));
    u[f] || (u[f] = []);
  }), o.pending.forEach((l) => {
    const { provider: a, prefix: f, name: u } = l, d = Q(a, f), p = d.pendingIcons || (d.pendingIcons = /* @__PURE__ */ new Set());
    p.has(u) || (p.add(u), i[a][f].push(u));
  }), s.forEach((l) => {
    const { provider: a, prefix: f } = l;
    i[a][f].length && uo(l, i[a][f]);
  }), e ? Zn(e, o, s) : he;
};
function po(t, e) {
  const n = {
    ...t
  };
  for (const o in e) {
    const i = e[o], s = typeof i;
    o in Fe ? (i === null || i && (s === "string" || s === "number")) && (n[o] = i) : s === typeof n[o] && (n[o] = o === "rotate" ? i % 4 : i);
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
const ge = {
  ...je,
  inline: !1
}, bo = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, _o = {
  display: "inline-block"
}, Wt = {
  backgroundColor: "currentColor"
}, qe = {
  backgroundColor: "transparent"
}, me = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, ye = {
  webkitMask: Wt,
  mask: Wt,
  background: qe
};
for (const t in ye) {
  const e = ye[t];
  for (const n in me)
    e[t + n] = me[n];
}
const mt = {};
["horizontal", "vertical"].forEach((t) => {
  const e = t.slice(0, 1) + "Flip";
  mt[t + "-flip"] = e, mt[t.slice(0, 1) + "-flip"] = e, mt[t + "Flip"] = e;
});
function ve(t) {
  return t + (t.match(/^[-0-9.]+$/) ? "px" : "");
}
const we = (t, e) => {
  const n = po(ge, e), o = { ...bo }, i = e.mode || "svg", s = {}, r = e.style, c = typeof r == "object" && !(r instanceof Array) ? r : {};
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
          const _ = mt[g];
          _ ? (m === !0 || m === "true" || m === 1) && (n[_] = !0) : ge[g] === void 0 && (o[g] = m);
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
    return typeof m == "string" && (m = m.replace(/-/g, "_")), o.innerHTML = Vn(l.body, m ? () => m + "ID" + g++ : "iconifyVue"), ie("svg", o);
  }
  const { body: f, width: u, height: d } = t, p = i === "mask" || (i === "bg" ? !1 : f.indexOf("currentColor") !== -1), h = yo(f, {
    ...a,
    width: u + "",
    height: d + ""
  });
  return o.style = {
    ...s,
    "--svg": xo(h),
    width: ve(a.width),
    height: ve(a.height),
    ..._o,
    ...p ? Wt : qe,
    ...c
  }, ie("span", o);
};
Me(!0);
$n("", Xn);
if (typeof document < "u" && typeof window < "u") {
  ze();
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
  ...It,
  body: ""
}, ot = Z({
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
      if (typeof t != "string" || (n = St(t, !1, !0)) === null)
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
      return we(Co, t);
    let n = t;
    return e.classes && (n = {
      ...t,
      class: (typeof t.class == "string" ? t.class + " " : "") + e.classes.join(" ")
    }), we({
      ...It,
      ...e.data
    }, n);
  }
}), bt = (t) => {
  const e = [], n = {};
  return t({ classes: e, styles: n }), {
    class: e,
    style: n
  };
}, yt = (t) => typeof t == "number" ? `${t}px` : t, ko = /* @__PURE__ */ Z({
  __name: "CollapseBody",
  props: {
    expanded: { type: Boolean },
    option: {},
    padding: {}
  },
  setup(t) {
    const e = t, n = j(null), o = j(0);
    Se(() => {
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
    const c = F(() => (Ie(() => r()), e.expanded));
    function l() {
      var d;
      const u = new CustomEvent("vui-collapse-expand-changed", { bubbles: !0 });
      (d = n.value) == null || d.dispatchEvent(u);
    }
    const a = F(() => bt(({ styles: u }) => {
      o.value !== void 0 ? c.value ? (u.height = `${o.value}px`, u.opacity = "1", l()) : (u.height = "0", u.opacity = "0") : r();
    })), f = F(() => bt(({ styles: u }) => {
      u.paddingLeft = yt(e.padding || "1rem");
    }));
    return (u, d) => (C(), I("div", vt({ class: "vui-collapse-body" }, a.value), [
      D("div", vt({
        class: "vui-collapse-body__content",
        ref_key: "collapseBodyEl",
        ref: n
      }, f.value), [
        Oe(u.$slots, "default", {}, void 0, !0)
      ], 16)
    ], 16));
  }
});
const lt = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [o, i] of e)
    n[o] = i;
  return n;
}, Qe = /* @__PURE__ */ lt(ko, [["__scopeId", "data-v-1abca66d"]]), So = ["title"], Io = { class: "vui-cascade-option__string" }, Oo = { class: "vui-cascade-option__string-left" }, Eo = { class: "vui-cascade-option__tree-btn-space" }, Ao = { class: "py-1" }, To = {
  key: 0,
  class: "vui-cascade-oprion__next-btn"
}, Lo = { key: 0 }, Po = { key: 1 }, Ro = { key: 2 }, Mo = /* @__PURE__ */ Z({
  __name: "CascadeOption",
  props: {
    option: {},
    cascade: {}
  },
  emits: ["on-click"],
  setup(t, { emit: e }) {
    const n = t, o = an("selectedOptions"), i = j(!1), s = F(() => !!n.option.options || !!n.option.getAsyncOptions), r = F(() => !!n.option.children), c = F(() => {
      var p;
      const f = (p = o == null ? void 0 : o.value) == null ? void 0 : p.find((h, g) => g === n.cascade.id);
      if (!f)
        return !1;
      const u = f.id ?? f.value, d = n.option.id || n.option.value;
      return u === d;
    }), l = F(() => bt(({ classes: f }) => {
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
      const d = un("CascadeOption", !0);
      return C(), I("div", vt({
        class: "vui-cascade-option",
        onClick: a
      }, l.value, {
        title: n.option.title
      }), [
        D("div", Io, [
          D("div", Oo, [
            D("div", Eo, [
              r.value ? (C(), I("div", {
                key: 0,
                class: fn(["vui-cascade-option__tree-btn", { "vui-cascade-option__tree-btn--opened": i.value }]),
                onClick: u[0] || (u[0] = dn((p) => i.value = !i.value, ["stop"]))
              }, [
                $(X(ot), { icon: "bxs:right-arrow" })
              ], 2)) : q("", !0)
            ]),
            D("div", Ao, pt(n.option.title), 1)
          ]),
          s.value ? (C(), I("div", To, [
            f.option.loadingState ? f.option.loadingState === "process" ? (C(), I("span", Po, [
              $(X(ot), { icon: "ep:loading" })
            ])) : f.option.loadingState === "ready" ? (C(), I("span", Ro, [
              $(X(ot), { icon: "ep:refresh" })
            ])) : q("", !0) : (C(), I("span", Lo, [
              $(X(ot), { icon: "ep:arrow-right" })
            ]))
          ])) : q("", !0)
        ]),
        r.value ? (C(), wt(Qe, {
          key: 0,
          expanded: i.value,
          option: n.option
        }, {
          default: Ut(() => [
            (C(!0), I(Kt, null, Xt(f.option.children, (p) => (C(), wt(d, {
              key: p.id || p.value,
              cascade: f.cascade,
              option: p,
              onOnClick: u[1] || (u[1] = (h) => e("on-click", h))
            }, null, 8, ["cascade", "option"]))), 128))
          ]),
          _: 1
        }, 8, ["expanded", "option"])) : q("", !0)
      ], 16, So);
    };
  }
});
const Fo = /* @__PURE__ */ lt(Mo, [["__scopeId", "data-v-89b82406"]]), jo = { class: "vui-cascade__scrollable" }, Bo = {
  key: 0,
  class: "vui-cascade__top-space"
}, Do = {
  key: 0,
  class: "vui-cascade__fog"
}, No = /* @__PURE__ */ Z({
  __name: "Cascade",
  props: {
    cascade: {},
    padding: {},
    fog: { type: Boolean },
    canBack: { type: Boolean },
    configs: {}
  },
  emits: ["on-select", "on-back"],
  setup(t, { emit: e }) {
    const n = t, o = F(() => bt(({ styles: r }) => {
      var c, l, a;
      r.width = yt(((c = n.configs) == null ? void 0 : c.width) || "240px"), (l = n.configs) != null && l.maxHeight ? r.maxHeight = yt(n.configs.maxHeight) : r.height = yt(((a = n.configs) == null ? void 0 : a.height) || "120px"), r.left = `${12 * n.padding}px`;
    }));
    function i(r) {
      n.fog || e("on-select", { cascade: n.cascade, optionParams: r });
    }
    function s() {
      e("on-back");
    }
    return (r, c) => (C(), I("div", vt({ class: "vui-cascade" }, o.value), [
      D("div", jo, [
        n.canBack ? (C(), I("div", Bo, [
          D("div", {
            class: "vui-cascade__back-btn",
            onClick: s
          }, [
            Oe(r.$slots, "backBtn", pn(hn({ back: s })), () => [
              $(X(ot), { icon: "ep:back" })
            ], !0)
          ])
        ])) : q("", !0),
        (C(!0), I(Kt, null, Xt(r.cascade.options, (l) => (C(), wt(Fo, {
          key: l.id || l.value,
          cascade: r.cascade,
          option: l,
          onOnClick: i
        }, null, 8, ["cascade", "option"]))), 128)),
        $(gn, { class: "vui-cascade__fog-transition" }, {
          default: Ut(() => [
            n.fog ? (C(), I("div", Do)) : q("", !0)
          ]),
          _: 1
        })
      ])
    ], 16));
  }
});
const Vo = /* @__PURE__ */ lt(No, [["__scopeId", "data-v-9a933cca"]]), $o = {
  key: 0,
  class: "vui-cascade-input__label"
}, Ho = {
  key: 1,
  class: "vui-cascade-input__placeholder"
}, Wo = {
  key: 2,
  class: "vui-cascade-input__error"
}, zo = /* @__PURE__ */ Z({
  __name: "CascadeInput",
  props: {
    values: {},
    errorMsg: {},
    separator: { default: "/" },
    placeholder: {}
  },
  emits: ["on-click"],
  setup(t, { emit: e }) {
    const n = t, o = F(() => n.values.join(n.separator));
    function i() {
      e("on-click");
    }
    return (s, r) => (C(), I("div", {
      class: "vui-cascade-input",
      onClick: i
    }, [
      o.value ? (C(), I("div", $o, pt(o.value), 1)) : (C(), I("div", Ho, pt(n.placeholder), 1)),
      s.errorMsg ? (C(), I("div", Wo, pt(s.errorMsg), 1)) : q("", !0)
    ]));
  }
});
const qo = /* @__PURE__ */ lt(zo, [["__scopeId", "data-v-0dd079a2"]]), zt = Math.min, G = Math.max, _t = Math.round, H = (t) => ({
  x: t,
  y: t
}), Qo = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Uo = {
  start: "end",
  end: "start"
};
function xe(t, e, n) {
  return G(t, zt(e, n));
}
function Et(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function U(t) {
  return t.split("-")[0];
}
function At(t) {
  return t.split("-")[1];
}
function Ue(t) {
  return t === "x" ? "y" : "x";
}
function Ke(t) {
  return t === "y" ? "height" : "width";
}
function Tt(t) {
  return ["top", "bottom"].includes(U(t)) ? "y" : "x";
}
function Xe(t) {
  return Ue(Tt(t));
}
function Ko(t, e, n) {
  n === void 0 && (n = !1);
  const o = At(t), i = Xe(t), s = Ke(i);
  let r = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[s] > e.floating[s] && (r = Ct(r)), [r, Ct(r)];
}
function Xo(t) {
  const e = Ct(t);
  return [qt(t), e, qt(e)];
}
function qt(t) {
  return t.replace(/start|end/g, (e) => Uo[e]);
}
function Go(t, e, n) {
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
function Yo(t, e, n, o) {
  const i = At(t);
  let s = Go(U(t), n === "start", o);
  return i && (s = s.map((r) => r + "-" + i), e && (s = s.concat(s.map(qt)))), s;
}
function Ct(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Qo[e]);
}
function Jo(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Zo(t) {
  return typeof t != "number" ? Jo(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function kt(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
function be(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const s = Tt(e), r = Xe(e), c = Ke(r), l = U(e), a = s === "y", f = o.x + o.width / 2 - i.width / 2, u = o.y + o.height / 2 - i.height / 2, d = o[c] / 2 - i[c] / 2;
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
  switch (At(e)) {
    case "start":
      p[r] -= d * (n && a ? -1 : 1);
      break;
    case "end":
      p[r] += d * (n && a ? -1 : 1);
      break;
  }
  return p;
}
const ti = async (t, e, n) => {
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
  } = be(a, o, l), d = o, p = {}, h = 0;
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
      } = be(a, d, l)), g = -1;
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
async function Ge(t, e) {
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
  } = Et(e, t), h = Zo(p), m = c[d ? u === "floating" ? "reference" : "floating" : u], _ = kt(await s.getClippingRect({
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
  }, k = kt(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const ei = function(t) {
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
      } = Et(t, e);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const _ = U(i), v = U(c) === c, x = await (l.isRTL == null ? void 0 : l.isRTL(a.floating)), A = d || (v || !g ? [Ct(c)] : Xo(c));
      !d && h !== "none" && A.push(...Yo(c, g, h, x));
      const k = [c, ...A], b = await Ge(e, m), y = [];
      let w = ((o = s.flip) == null ? void 0 : o.overflows) || [];
      if (f && y.push(b[_]), u) {
        const E = Ko(i, r, x);
        y.push(b[E[0]], b[E[1]]);
      }
      if (w = [...w, {
        placement: i,
        overflows: y
      }], !y.every((E) => E <= 0)) {
        var S, O;
        const E = (((S = s.flip) == null ? void 0 : S.index) || 0) + 1, ut = k[E];
        if (ut)
          return {
            data: {
              index: E,
              overflows: w
            },
            reset: {
              placement: ut
            }
          };
        let V = (O = w.filter((P) => P.overflows[0] <= 0).sort((P, R) => P.overflows[1] - R.overflows[1])[0]) == null ? void 0 : O.placement;
        if (!V)
          switch (p) {
            case "bestFit": {
              var tt;
              const P = (tt = w.map((R) => [R.placement, R.overflows.filter((M) => M > 0).reduce((M, ft) => M + ft, 0)]).sort((R, M) => R[1] - M[1])[0]) == null ? void 0 : tt[0];
              P && (V = P);
              break;
            }
            case "initialPlacement":
              V = c;
              break;
          }
        if (i !== V)
          return {
            reset: {
              placement: V
            }
          };
      }
      return {};
    }
  };
};
async function ni(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, s = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), r = U(n), c = At(n), l = Tt(n) === "y", a = ["left", "top"].includes(r) ? -1 : 1, f = s && l ? -1 : 1, u = Et(e, t);
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
const oi = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, i = await ni(e, t);
      return {
        x: n + i.x,
        y: o + i.y,
        data: i
      };
    }
  };
}, ii = function(t) {
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
      } = Et(t, e), a = {
        x: n,
        y: o
      }, f = await Ge(e, l), u = Tt(U(i)), d = Ue(u);
      let p = a[d], h = a[u];
      if (s) {
        const m = d === "y" ? "top" : "left", _ = d === "y" ? "bottom" : "right", v = p + f[m], x = p - f[_];
        p = xe(v, p, x);
      }
      if (r) {
        const m = u === "y" ? "top" : "left", _ = u === "y" ? "bottom" : "right", v = h + f[m], x = h - f[_];
        h = xe(v, h, x);
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
function W(t) {
  return Ye(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function T(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function z(t) {
  var e;
  return (e = (Ye(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function Ye(t) {
  return t instanceof Node || t instanceof T(t).Node;
}
function N(t) {
  return t instanceof Element || t instanceof T(t).Element;
}
function B(t) {
  return t instanceof HTMLElement || t instanceof T(t).HTMLElement;
}
function _e(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof T(t).ShadowRoot;
}
function at(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = L(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function si(t) {
  return ["table", "td", "th"].includes(W(t));
}
function ne(t) {
  const e = oe(), n = L(t);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function ri(t) {
  let e = J(t);
  for (; B(e) && !Lt(e); ) {
    if (ne(e))
      return e;
    e = J(e);
  }
  return null;
}
function oe() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Lt(t) {
  return ["html", "body", "#document"].includes(W(t));
}
function L(t) {
  return T(t).getComputedStyle(t);
}
function Pt(t) {
  return N(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function J(t) {
  if (W(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    _e(t) && t.host || // Fallback.
    z(t)
  );
  return _e(e) ? e.host : e;
}
function Je(t) {
  const e = J(t);
  return Lt(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : B(e) && at(e) ? e : Je(e);
}
function Qt(t, e, n) {
  var o;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const i = Je(t), s = i === ((o = t.ownerDocument) == null ? void 0 : o.body), r = T(i);
  return s ? e.concat(r, r.visualViewport || [], at(i) ? i : [], r.frameElement && n ? Qt(r.frameElement) : []) : e.concat(i, Qt(i, [], n));
}
function Ze(t) {
  const e = L(t);
  let n = parseFloat(e.width) || 0, o = parseFloat(e.height) || 0;
  const i = B(t), s = i ? t.offsetWidth : n, r = i ? t.offsetHeight : o, c = _t(n) !== s || _t(o) !== r;
  return c && (n = s, o = r), {
    width: n,
    height: o,
    $: c
  };
}
function tn(t) {
  return N(t) ? t : t.contextElement;
}
function Y(t) {
  const e = tn(t);
  if (!B(e))
    return H(1);
  const n = e.getBoundingClientRect(), {
    width: o,
    height: i,
    $: s
  } = Ze(e);
  let r = (s ? _t(n.width) : n.width) / o, c = (s ? _t(n.height) : n.height) / i;
  return (!r || !Number.isFinite(r)) && (r = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: r,
    y: c
  };
}
const ci = /* @__PURE__ */ H(0);
function en(t) {
  const e = T(t);
  return !oe() || !e.visualViewport ? ci : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function li(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== T(t) ? !1 : e;
}
function ct(t, e, n, o) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const i = t.getBoundingClientRect(), s = tn(t);
  let r = H(1);
  e && (o ? N(o) && (r = Y(o)) : r = Y(t));
  const c = li(s, n, o) ? en(s) : H(0);
  let l = (i.left + c.x) / r.x, a = (i.top + c.y) / r.y, f = i.width / r.x, u = i.height / r.y;
  if (s) {
    const d = T(s), p = o && N(o) ? T(o) : o;
    let h = d.frameElement;
    for (; h && o && p !== d; ) {
      const g = Y(h), m = h.getBoundingClientRect(), _ = L(h), v = m.left + (h.clientLeft + parseFloat(_.paddingLeft)) * g.x, x = m.top + (h.clientTop + parseFloat(_.paddingTop)) * g.y;
      l *= g.x, a *= g.y, f *= g.x, u *= g.y, l += v, a += x, h = T(h).frameElement;
    }
  }
  return kt({
    width: f,
    height: u,
    x: l,
    y: a
  });
}
function ai(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: o
  } = t;
  const i = B(n), s = z(n);
  if (n === s)
    return e;
  let r = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = H(1);
  const l = H(0);
  if ((i || !i && o !== "fixed") && ((W(n) !== "body" || at(s)) && (r = Pt(n)), B(n))) {
    const a = ct(n);
    c = Y(n), l.x = a.x + n.clientLeft, l.y = a.y + n.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - r.scrollLeft * c.x + l.x,
    y: e.y * c.y - r.scrollTop * c.y + l.y
  };
}
function ui(t) {
  return Array.from(t.getClientRects());
}
function nn(t) {
  return ct(z(t)).left + Pt(t).scrollLeft;
}
function fi(t) {
  const e = z(t), n = Pt(t), o = t.ownerDocument.body, i = G(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth), s = G(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
  let r = -n.scrollLeft + nn(t);
  const c = -n.scrollTop;
  return L(o).direction === "rtl" && (r += G(e.clientWidth, o.clientWidth) - i), {
    width: i,
    height: s,
    x: r,
    y: c
  };
}
function di(t, e) {
  const n = T(t), o = z(t), i = n.visualViewport;
  let s = o.clientWidth, r = o.clientHeight, c = 0, l = 0;
  if (i) {
    s = i.width, r = i.height;
    const a = oe();
    (!a || a && e === "fixed") && (c = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: s,
    height: r,
    x: c,
    y: l
  };
}
function pi(t, e) {
  const n = ct(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, s = B(t) ? Y(t) : H(1), r = t.clientWidth * s.x, c = t.clientHeight * s.y, l = i * s.x, a = o * s.y;
  return {
    width: r,
    height: c,
    x: l,
    y: a
  };
}
function Ce(t, e, n) {
  let o;
  if (e === "viewport")
    o = di(t, n);
  else if (e === "document")
    o = fi(z(t));
  else if (N(e))
    o = pi(e, n);
  else {
    const i = en(t);
    o = {
      ...e,
      x: e.x - i.x,
      y: e.y - i.y
    };
  }
  return kt(o);
}
function on(t, e) {
  const n = J(t);
  return n === e || !N(n) || Lt(n) ? !1 : L(n).position === "fixed" || on(n, e);
}
function hi(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = Qt(t, [], !1).filter((c) => N(c) && W(c) !== "body"), i = null;
  const s = L(t).position === "fixed";
  let r = s ? J(t) : t;
  for (; N(r) && !Lt(r); ) {
    const c = L(r), l = ne(r);
    !l && c.position === "fixed" && (i = null), (s ? !l && !i : !l && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || at(r) && !l && on(t, r)) ? o = o.filter((f) => f !== r) : i = c, r = J(r);
  }
  return e.set(t, o), o;
}
function gi(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = t;
  const r = [...n === "clippingAncestors" ? hi(e, this._c) : [].concat(n), o], c = r[0], l = r.reduce((a, f) => {
    const u = Ce(e, f, i);
    return a.top = G(u.top, a.top), a.right = zt(u.right, a.right), a.bottom = zt(u.bottom, a.bottom), a.left = G(u.left, a.left), a;
  }, Ce(e, c, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function mi(t) {
  return Ze(t);
}
function yi(t, e, n) {
  const o = B(e), i = z(e), s = n === "fixed", r = ct(t, !0, s, e);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = H(0);
  if (o || !o && !s)
    if ((W(e) !== "body" || at(i)) && (c = Pt(e)), o) {
      const a = ct(e, !0, s, e);
      l.x = a.x + e.clientLeft, l.y = a.y + e.clientTop;
    } else
      i && (l.x = nn(i));
  return {
    x: r.left + c.scrollLeft - l.x,
    y: r.top + c.scrollTop - l.y,
    width: r.width,
    height: r.height
  };
}
function ke(t, e) {
  return !B(t) || L(t).position === "fixed" ? null : e ? e(t) : t.offsetParent;
}
function sn(t, e) {
  const n = T(t);
  if (!B(t))
    return n;
  let o = ke(t, e);
  for (; o && si(o) && L(o).position === "static"; )
    o = ke(o, e);
  return o && (W(o) === "html" || W(o) === "body" && L(o).position === "static" && !ne(o)) ? n : o || ri(t) || n;
}
const vi = async function(t) {
  let {
    reference: e,
    floating: n,
    strategy: o
  } = t;
  const i = this.getOffsetParent || sn, s = this.getDimensions;
  return {
    reference: yi(e, await i(n), o),
    floating: {
      x: 0,
      y: 0,
      ...await s(n)
    }
  };
};
function wi(t) {
  return L(t).direction === "rtl";
}
const xi = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ai,
  getDocumentElement: z,
  getClippingRect: gi,
  getOffsetParent: sn,
  getElementRects: vi,
  getClientRects: ui,
  getDimensions: mi,
  getScale: Y,
  isElement: N,
  isRTL: wi
}, bi = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: xi,
    ...n
  }, s = {
    ...i.platform,
    _c: o
  };
  return ti(t, e, {
    ...i,
    platform: s
  });
}, _i = /* @__PURE__ */ Z({
  __name: "Cascader",
  props: {
    modelValue: {},
    data: {},
    separator: { default: "/" },
    cascadesConfig: {},
    transform: {},
    reform: {},
    placeholder: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const n = t, o = j(null), i = j(null), s = j(null), r = {
      value: "__ROOT_CASCADE__",
      title: "",
      options: n.data
    }, c = j(!1), l = j(""), a = j([]);
    v(r, 0);
    const f = F(() => c.value ? a.value : []), u = j([]);
    u.value = k(n.modelValue || []), mn("selectedOptions", u);
    const d = F(() => u.value.map((y) => y.title)), p = (y) => {
      var w;
      return ((w = a.value[a.value.length - 1]) == null ? void 0 : w.id) === y.id;
    };
    function h(y) {
      c.value = y, y || (u.value = k(n.modelValue || []));
    }
    Se(() => {
      Cn(o.value, m);
      const y = i.value, w = s.value;
      bi(y, w, {
        middleware: [
          ei(),
          oi(4),
          ii()
        ]
      }).then(({ y: S }) => {
        Object.assign(w.style, {
          top: `${S}px`
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
        e("update:modelValue", b(u.value)), Ie(() => {
          h(!1);
        });
        return;
      }
      v(w.option);
    }
    function v(y, w) {
      const S = w || a.value.length;
      w !== void 0 && (a.value = a.value.slice(0, w)), a.value.push(x(y, S));
    }
    function x(y, w) {
      return { id: w, options: y.options || [] };
    }
    function A() {
      a.value.pop();
    }
    function k(y) {
      var O, tt;
      if (n.transform)
        return n.transform(y, x);
      const w = [], S = y;
      for (let E = 0; E < S.length; E++) {
        const ut = S[E], V = (R) => {
          var ft;
          let M = R.find((K) => K.value === ut);
          if (M)
            return M;
          for (let K = 0; K < R.length; K++)
            if ((ft = R[K].children) != null && ft.length && (M = V(R[K].children), M))
              return M;
        }, P = V((O = a.value[E]) == null ? void 0 : O.options);
        if (P)
          if (w.push(P), (tt = P.options) != null && tt.length)
            v(P, E + 1);
          else if (E < S.length - 1) {
            l.value = "Can`t display such a value";
            break;
          } else
            E === S.length - 1 && (l.value = "");
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
    return (y, w) => (C(), I("div", {
      class: "vui-cascader",
      ref_key: "cascaderEl",
      ref: o
    }, [
      D("div", {
        class: "vue-cascader__input-wrapper",
        ref_key: "inputWrapperEl",
        ref: i
      }, [
        $(qo, {
          values: d.value,
          separator: n.separator,
          placeholder: n.placeholder,
          onOnClick: g
        }, null, 8, ["values", "separator", "placeholder"])
      ], 512),
      D("div", {
        class: "vui-cascader__dropdown",
        ref_key: "dropdownEl",
        ref: s
      }, [
        $(yn, {
          tag: "div",
          mode: "in-out",
          name: "vui-cascader-transition"
        }, {
          default: Ut(() => [
            (C(!0), I(Kt, null, Xt(f.value, (S, O) => (C(), wt(Vo, {
              key: S.id,
              cascade: S,
              padding: O,
              fog: !p(S),
              canBack: O > 0,
              configs: n.cascadesConfig,
              onOnSelect: _,
              onOnBack: A
            }, null, 8, ["cascade", "padding", "fog", "canBack", "configs"]))), 128))
          ]),
          _: 1
        })
      ], 512)
    ], 512));
  }
});
const Ci = /* @__PURE__ */ lt(_i, [["__scopeId", "data-v-a7ab9232"]]), Si = {
  install: (t) => {
    t.component("Cascader", Ci), t.component("CollapseBody", Qe);
  }
};
export {
  Ci as Cascader,
  Qe as CollapseBody,
  bt as createStyleClasses,
  Si as default
};
