import { getCurrentScope as rn, onScopeDispose as cn, unref as X, watch as ln, defineComponent as Z, h as ie, ref as j, onMounted as Se, computed as L, nextTick as Ie, openBlock as C, createElementBlock as I, mergeProps as rt, createElementVNode as D, renderSlot as Oe, inject as an, resolveComponent as un, normalizeClass as fn, withModifiers as dn, createVNode as $, createCommentVNode as q, createBlock as it, toDisplayString as mt, withCtx as Ut, Fragment as Kt, renderList as Xt, normalizeProps as pn, guardReactiveProps as hn, Transition as gn, provide as mn, TransitionGroup as yn } from "vue";
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
    s.forEach((d) => d()), s.length = 0;
  }, c = (d, u, f, p) => (d.addEventListener(u, f, p), () => d.removeEventListener(u, f, p)), l = ln(
    () => [nt(e), Ee(i)],
    ([d, u]) => {
      if (r(), !d)
        return;
      const f = xn(u) ? { ...u } : u;
      s.push(
        ...n.flatMap((p) => o.map((h) => c(d, p, h, f)))
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
  bn && !se && (se = !0, Array.from(o.document.body.children).forEach((f) => f.addEventListener("click", jt)), o.document.documentElement.addEventListener("click", jt));
  let c = !0;
  const l = (f) => i.some((p) => {
    if (typeof p == "string")
      return Array.from(o.document.querySelectorAll(p)).some((h) => h === f.target || f.composedPath().includes(h));
    {
      const h = nt(p);
      return h && (f.target === h || f.composedPath().includes(h));
    }
  }), d = [
    Rt(o, "click", (f) => {
      const p = nt(t);
      if (!(!p || p === f.target || f.composedPath().includes(p))) {
        if (f.detail === 0 && (c = !l(f)), !c) {
          c = !0;
          return;
        }
        e(f);
      }
    }, { passive: !0, capture: s }),
    Rt(o, "pointerdown", (f) => {
      const p = nt(t);
      p && (c = !f.composedPath().includes(p) && !l(f));
    }, { passive: !0 }),
    r && Rt(o, "blur", (f) => {
      setTimeout(() => {
        var p;
        const h = nt(t);
        ((p = o.document.activeElement) == null ? void 0 : p.tagName) === "IFRAME" && !(h != null && h.contains(o.document.activeElement)) && e(f);
      }, 0);
    })
  ].filter(Boolean);
  return () => d.forEach((f) => f());
}
const st = /^[a-z0-9]+(-[a-z0-9]+)*$/, St = (t, e, n, o = "") => {
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
    return e && !yt(a) ? null : a;
  }
  const s = i[0], r = s.split("-");
  if (r.length > 1) {
    const c = {
      provider: o,
      prefix: r.shift(),
      name: r.join("-")
    };
    return e && !yt(c) ? null : c;
  }
  if (n && o === "") {
    const c = {
      provider: o,
      prefix: "",
      name: s
    };
    return e && !yt(c, n) ? null : c;
  }
  return null;
}, yt = (t, e) => t ? !!((t.provider === "" || t.provider.match(st)) && (e && t.prefix === "" || t.prefix.match(st)) && t.name.match(st)) : !1, Le = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), bt = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), It = Object.freeze({
  ...Le,
  ...bt
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
    o in bt ? o in t && !(o in n) && (n[o] = bt[o]) : o in e ? n[o] = e[o] : o in t && (n[o] = t[o]);
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
    if (!i.match(st) || typeof s.body != "string" || !Mt(
      s,
      Bt
    ))
      return null;
  }
  const o = e.aliases || /* @__PURE__ */ Object.create(null);
  for (const i in o) {
    const s = o[i], r = s.parent;
    if (!i.match(st) || typeof r != "string" || !n[r] && !o[r] || !Mt(
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
let ct = !1;
function Me(t) {
  return typeof t == "boolean" && (ct = t), ct;
}
function Tn(t) {
  const e = typeof t == "string" ? St(t, !0, ct) : t;
  if (e) {
    const n = Q(e.provider, e.prefix), o = e.name;
    return n.icons[o] || (n.missing.has(o) ? null : void 0);
  }
}
function Ln(t, e) {
  const n = St(t, !0, ct);
  if (!n)
    return !1;
  const o = Q(n.provider, n.prefix);
  return An(o, n.name, e);
}
function Pn(t, e) {
  if (typeof t != "object")
    return !1;
  if (typeof e != "string" && (e = t.provider || ""), ct && !e && !t.prefix) {
    let i = !1;
    return Re(t) && (t.prefix = "", Pe(t, (s, r) => {
      r && Ln(s, r) && (i = !0);
    })), i;
  }
  const n = t.prefix;
  if (!yt({
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
  ...bt
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
  let d, u;
  r === null ? (u = c === null ? "1em" : c === "auto" ? a : c, d = le(u, l / a)) : (d = r === "auto" ? l : r, u = c === null ? le(d, a / l) : c === "auto" ? a : c);
  const f = {}, p = (h, g) => {
    Fn(g) || (f[h] = g.toString());
  };
  return p("width", d), p("height", u), f.viewBox = i.left.toString() + " " + i.top.toString() + " " + l.toString() + " " + a.toString(), {
    attributes: f,
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
], vt = [];
for (; et.length > 0; )
  et.length === 1 || Math.random() > 0.5 ? vt.push(et.shift()) : vt.push(et.pop());
Jt[""] = Yt({
  resources: ["https://api.iconify.design"].concat(vt)
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
    let d;
    c in a.icons ? d = e.loaded : r === "" || a.missing.has(c) ? d = e.missing : d = e.pending;
    const u = {
      provider: s,
      prefix: r,
      name: c
    };
    d.push(u);
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
  let l = "pending", a = 0, d, u = null, f = [], p = [];
  typeof o == "function" && p.push(o);
  function h() {
    u && (clearTimeout(u), u = null);
  }
  function g() {
    l === "pending" && (l = "aborted"), h(), f.forEach((b) => {
      b.status === "pending" && (b.status = "aborted");
    }), f = [];
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
      queriesPending: f.length,
      subscribe: m,
      abort: g
    };
  }
  function v() {
    l = "failed", p.forEach((b) => {
      b(void 0, d);
    });
  }
  function x() {
    f.forEach((b) => {
      b.status === "pending" && (b.status = "aborted");
    }), f = [];
  }
  function A(b, y, w) {
    const S = y !== "success";
    switch (f = f.filter((O) => O !== b), l) {
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
      d = w, v();
      return;
    }
    if (S) {
      d = w, f.length || (r.length ? k() : v());
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
      if (f.length) {
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
    f.push(y), a++, u = setTimeout(k, t.rotate), n(b, e, y.callback);
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
    const d = no(
      e,
      c,
      l,
      (u, f) => {
        o(), a && a(u, f);
      }
    );
    return n.push(d), d;
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
const fe = "iconify2", lt = "iconify", Ne = lt + "-count", de = lt + "-version", Ve = 36e5, so = 168;
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
let gt = typeof window > "u" ? {} : window;
function He(t) {
  const e = t + "Storage";
  try {
    if (gt && gt[e] && typeof gt[e].length == "number")
      return gt[e];
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
        pe(n, lt + l.toString());
    }
    te(n, de, fe), $t(n, 0);
    return;
  }
  const i = Math.floor(Date.now() / Ve) - so, s = (c) => {
    const l = lt + c.toString(), a = Vt(n, l);
    if (typeof a == "string") {
      try {
        const d = JSON.parse(a);
        if (typeof d == "object" && typeof d.cached == "number" && d.cached > i && typeof d.provider == "string" && typeof d.data == "object" && typeof d.data.prefix == "string" && // Valid item: run callback
        e(d, c))
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
      lt + r.toString(),
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
            const d = t.pendingIcons;
            d && a.forEach((u) => {
              d.delete(u);
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
    const { provider: a, prefix: d } = l;
    if (d === c && a === r)
      return;
    r = a, c = d, s.push(Q(a, d));
    const u = i[a] || (i[a] = /* @__PURE__ */ Object.create(null));
    u[d] || (u[d] = []);
  }), o.pending.forEach((l) => {
    const { provider: a, prefix: d, name: u } = l, f = Q(a, d), p = f.pendingIcons || (f.pendingIcons = /* @__PURE__ */ new Set());
    p.has(u) || (p.add(u), i[a][d].push(u));
  }), s.forEach((l) => {
    const { provider: a, prefix: d } = l;
    i[a][d].length && uo(l, i[a][d]);
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
const wt = {};
["horizontal", "vertical"].forEach((t) => {
  const e = t.slice(0, 1) + "Flip";
  wt[t + "-flip"] = e, wt[t.slice(0, 1) + "-flip"] = e, wt[t + "Flip"] = e;
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
          const _ = wt[g];
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
  const { body: d, width: u, height: f } = t, p = i === "mask" || (i === "bg" ? !1 : d.indexOf("currentColor") !== -1), h = yo(d, {
    ...a,
    width: u + "",
    height: f + ""
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
}), at = (t) => {
  const e = [], n = {};
  return t({ classes: e, styles: n }), {
    class: e,
    style: n
  };
}, xt = (t) => typeof t == "number" ? `${t}px` : t, ko = /* @__PURE__ */ Z({
  __name: "CollapseBody",
  props: {
    expanded: { type: Boolean },
    option: {},
    padding: {}
  },
  setup(t) {
    const e = t, n = j(null), o = j(0);
    Se(() => {
      var u, f;
      (u = n.value) == null || u.addEventListener("vui-collapse-expand-changed", i), o.value = ((f = n.value) == null ? void 0 : f.offsetHeight) || 0;
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
    const c = L(() => (Ie(() => r()), e.expanded));
    function l() {
      var f;
      const u = new CustomEvent("vui-collapse-expand-changed", { bubbles: !0 });
      (f = n.value) == null || f.dispatchEvent(u);
    }
    const a = L(() => at(({ styles: u }) => {
      o.value !== void 0 ? c.value ? (u.height = `${o.value}px`, u.opacity = "1", l()) : (u.height = "0", u.opacity = "0") : r();
    })), d = L(() => at(({ styles: u }) => {
      u.paddingLeft = xt(e.padding || "1rem");
    }));
    return (u, f) => (C(), I("div", rt({ class: "vui-collapse-body" }, a.value), [
      D("div", rt({
        class: "vui-collapse-body__content",
        ref_key: "collapseBodyEl",
        ref: n
      }, d.value), [
        Oe(u.$slots, "default", {}, void 0, !0)
      ], 16)
    ], 16));
  }
});
const ft = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [o, i] of e)
    n[o] = i;
  return n;
}, Qe = /* @__PURE__ */ ft(ko, [["__scopeId", "data-v-518f14fa"]]), So = ["title"], Io = { class: "vui-cascade-option__string" }, Oo = { class: "vui-cascade-option__string-left" }, Eo = { class: "vui-cascade-option__tree-btn-space" }, Ao = { key: 1 }, To = {
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
    const n = t, o = an("selectedOptions"), i = () => {
      var u, f;
      return (f = (u = n.option).render) == null ? void 0 : f.call(u);
    }, s = j(!1), r = L(() => !!n.option.options || !!n.option.getAsyncOptions), c = L(() => !!n.option.children), l = L(() => {
      var h;
      const u = (h = o == null ? void 0 : o.value) == null ? void 0 : h.find((g, m) => m === n.cascade.id);
      if (!u)
        return !1;
      const f = u.id ?? u.value, p = n.option.id || n.option.value;
      return f === p;
    }), a = L(() => at(({ classes: u }) => {
      l.value && u.push("vui-cascade-option--selected");
    }));
    function d() {
      var h, g;
      const u = { option: n.option, last: !r.value };
      let f = !0;
      const p = () => f = !1;
      (g = (h = n.option).onClick) == null || g.call(h, { preventEmit: p, option: n.option }), f && e("on-click", u);
    }
    return (u, f) => {
      const p = un("CascadeOption", !0);
      return C(), I("div", rt({
        class: "vui-cascade-option",
        onClick: d
      }, a.value, {
        title: n.option.title
      }), [
        D("div", Io, [
          D("div", Oo, [
            D("div", Eo, [
              c.value ? (C(), I("div", {
                key: 0,
                class: fn(["vui-cascade-option__tree-btn", { "vui-cascade-option__tree-btn--opened": s.value }]),
                onClick: f[0] || (f[0] = dn((h) => s.value = !s.value, ["stop"]))
              }, [
                $(X(ot), { icon: "bxs:right-arrow" })
              ], 2)) : q("", !0)
            ]),
            D("div", null, [
              n.option.render ? (C(), it(i, { key: 0 })) : (C(), I("span", Ao, mt(n.option.title), 1))
            ])
          ]),
          r.value ? (C(), I("div", To, [
            u.option.loadingState ? u.option.loadingState === "process" ? (C(), I("span", Po, [
              $(X(ot), { icon: "ep:loading" })
            ])) : u.option.loadingState === "ready" ? (C(), I("span", Ro, [
              $(X(ot), { icon: "ep:refresh" })
            ])) : q("", !0) : (C(), I("span", Lo, [
              $(X(ot), { icon: "ep:arrow-right" })
            ]))
          ])) : q("", !0)
        ]),
        c.value ? (C(), it(Qe, {
          key: 0,
          expanded: s.value,
          option: n.option
        }, {
          default: Ut(() => [
            (C(!0), I(Kt, null, Xt(u.option.children, (h) => (C(), it(p, {
              key: h.id || h.value,
              cascade: u.cascade,
              option: h,
              onOnClick: f[1] || (f[1] = (g) => e("on-click", g))
            }, null, 8, ["cascade", "option"]))), 128))
          ]),
          _: 1
        }, 8, ["expanded", "option"])) : q("", !0)
      ], 16, So);
    };
  }
});
const Fo = /* @__PURE__ */ ft(Mo, [["__scopeId", "data-v-fc22c733"]]), jo = { class: "vui-cascade__scrollable" }, Bo = {
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
    const n = t, o = L(() => at(({ styles: r }) => {
      var c, l, a;
      r.width = xt(((c = n.configs) == null ? void 0 : c.width) || "240px"), (l = n.configs) != null && l.maxHeight ? r.maxHeight = xt(n.configs.maxHeight) : r.height = xt(((a = n.configs) == null ? void 0 : a.height) || "120px"), r.left = `${12 * n.padding}px`;
    }));
    function i(r) {
      n.fog || e("on-select", { cascade: n.cascade, optionParams: r });
    }
    function s() {
      e("on-back");
    }
    return (r, c) => (C(), I("div", rt({ class: "vui-cascade" }, o.value), [
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
        (C(!0), I(Kt, null, Xt(r.cascade.options, (l) => (C(), it(Fo, {
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
const Vo = /* @__PURE__ */ ft(No, [["__scopeId", "data-v-f5002212"]]), $o = {
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
    placeholder: {},
    disabled: { type: Boolean }
  },
  emits: ["on-click"],
  setup(t, { emit: e }) {
    const n = t, o = L(() => n.values.join(n.separator)), i = L(() => at(({ classes: r }) => {
      n.disabled && r.push("vui-cascade-input--disabled");
    }));
    function s() {
      e("on-click");
    }
    return (r, c) => (C(), I("div", rt({
      class: "vui-cascade-input",
      onClick: s
    }, i.value), [
      o.value ? (C(), I("div", $o, mt(o.value), 1)) : (C(), I("div", Ho, mt(n.placeholder), 1)),
      r.errorMsg ? (C(), I("div", Wo, mt(r.errorMsg), 1)) : q("", !0)
    ], 16));
  }
});
const qo = /* @__PURE__ */ ft(zo, [["__scopeId", "data-v-c86b87e6"]]), zt = Math.min, G = Math.max, _t = Math.round, H = (t) => ({
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
  const s = Tt(e), r = Xe(e), c = Ke(r), l = U(e), a = s === "y", d = o.x + o.width / 2 - i.width / 2, u = o.y + o.height / 2 - i.height / 2, f = o[c] / 2 - i[c] / 2;
  let p;
  switch (l) {
    case "top":
      p = {
        x: d,
        y: o.y - i.height
      };
      break;
    case "bottom":
      p = {
        x: d,
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
      p[r] -= f * (n && a ? -1 : 1);
      break;
    case "end":
      p[r] += f * (n && a ? -1 : 1);
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
    x: d,
    y: u
  } = be(a, o, l), f = o, p = {}, h = 0;
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
      x: d,
      y: u,
      initialPlacement: o,
      placement: f,
      strategy: i,
      middlewareData: p,
      rects: a,
      platform: r,
      elements: {
        reference: t,
        floating: e
      }
    });
    if (d = v ?? d, u = x ?? u, p = {
      ...p,
      [m]: {
        ...p[m],
        ...A
      }
    }, k && h <= 50) {
      h++, typeof k == "object" && (k.placement && (f = k.placement), k.rects && (a = k.rects === !0 ? await r.getElementRects({
        reference: t,
        floating: e,
        strategy: i
      }) : k.rects), {
        x: d,
        y: u
      } = be(a, f, l)), g = -1;
      continue;
    }
  }
  return {
    x: d,
    y: u,
    placement: f,
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
    rootBoundary: d = "viewport",
    elementContext: u = "floating",
    altBoundary: f = !1,
    padding: p = 0
  } = Et(e, t), h = Zo(p), m = c[f ? u === "floating" ? "reference" : "floating" : u], _ = kt(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(m))) == null || n ? m : m.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(c.floating)),
    boundary: a,
    rootBoundary: d,
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
        mainAxis: d = !0,
        crossAxis: u = !0,
        fallbackPlacements: f,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: g = !0,
        ...m
      } = Et(t, e);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const _ = U(i), v = U(c) === c, x = await (l.isRTL == null ? void 0 : l.isRTL(a.floating)), A = f || (v || !g ? [Ct(c)] : Xo(c));
      !f && h !== "none" && A.push(...Yo(c, g, h, x));
      const k = [c, ...A], b = await Ge(e, m), y = [];
      let w = ((o = s.flip) == null ? void 0 : o.overflows) || [];
      if (d && y.push(b[_]), u) {
        const E = Ko(i, r, x);
        y.push(b[E[0]], b[E[1]]);
      }
      if (w = [...w, {
        placement: i,
        overflows: y
      }], !y.every((E) => E <= 0)) {
        var S, O;
        const E = (((S = s.flip) == null ? void 0 : S.index) || 0) + 1, pt = k[E];
        if (pt)
          return {
            data: {
              index: E,
              overflows: w
            },
            reset: {
              placement: pt
            }
          };
        let V = (O = w.filter((R) => R.overflows[0] <= 0).sort((R, M) => R.overflows[1] - M.overflows[1])[0]) == null ? void 0 : O.placement;
        if (!V)
          switch (p) {
            case "bestFit": {
              var tt;
              const R = (tt = w.map((M) => [M.placement, M.overflows.filter((F) => F > 0).reduce((F, ht) => F + ht, 0)]).sort((M, F) => M[1] - F[1])[0]) == null ? void 0 : tt[0];
              R && (V = R);
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
  } = t, s = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), r = U(n), c = At(n), l = Tt(n) === "y", a = ["left", "top"].includes(r) ? -1 : 1, d = s && l ? -1 : 1, u = Et(e, t);
  let {
    mainAxis: f,
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
    x: p * d,
    y: f * a
  } : {
    x: f * a,
    y: p * d
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
      }, d = await Ge(e, l), u = Tt(U(i)), f = Ue(u);
      let p = a[f], h = a[u];
      if (s) {
        const m = f === "y" ? "top" : "left", _ = f === "y" ? "bottom" : "right", v = p + d[m], x = p - d[_];
        p = xe(v, p, x);
      }
      if (r) {
        const m = u === "y" ? "top" : "left", _ = u === "y" ? "bottom" : "right", v = h + d[m], x = h - d[_];
        h = xe(v, h, x);
      }
      const g = c.fn({
        ...e,
        [f]: p,
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
function dt(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = P(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function si(t) {
  return ["table", "td", "th"].includes(W(t));
}
function ne(t) {
  const e = oe(), n = P(t);
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
function P(t) {
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
  return Lt(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : B(e) && dt(e) ? e : Je(e);
}
function Qt(t, e, n) {
  var o;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const i = Je(t), s = i === ((o = t.ownerDocument) == null ? void 0 : o.body), r = T(i);
  return s ? e.concat(r, r.visualViewport || [], dt(i) ? i : [], r.frameElement && n ? Qt(r.frameElement) : []) : e.concat(i, Qt(i, [], n));
}
function Ze(t) {
  const e = P(t);
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
function ut(t, e, n, o) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const i = t.getBoundingClientRect(), s = tn(t);
  let r = H(1);
  e && (o ? N(o) && (r = Y(o)) : r = Y(t));
  const c = li(s, n, o) ? en(s) : H(0);
  let l = (i.left + c.x) / r.x, a = (i.top + c.y) / r.y, d = i.width / r.x, u = i.height / r.y;
  if (s) {
    const f = T(s), p = o && N(o) ? T(o) : o;
    let h = f.frameElement;
    for (; h && o && p !== f; ) {
      const g = Y(h), m = h.getBoundingClientRect(), _ = P(h), v = m.left + (h.clientLeft + parseFloat(_.paddingLeft)) * g.x, x = m.top + (h.clientTop + parseFloat(_.paddingTop)) * g.y;
      l *= g.x, a *= g.y, d *= g.x, u *= g.y, l += v, a += x, h = T(h).frameElement;
    }
  }
  return kt({
    width: d,
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
  if ((i || !i && o !== "fixed") && ((W(n) !== "body" || dt(s)) && (r = Pt(n)), B(n))) {
    const a = ut(n);
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
  return ut(z(t)).left + Pt(t).scrollLeft;
}
function fi(t) {
  const e = z(t), n = Pt(t), o = t.ownerDocument.body, i = G(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth), s = G(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
  let r = -n.scrollLeft + nn(t);
  const c = -n.scrollTop;
  return P(o).direction === "rtl" && (r += G(e.clientWidth, o.clientWidth) - i), {
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
  const n = ut(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, s = B(t) ? Y(t) : H(1), r = t.clientWidth * s.x, c = t.clientHeight * s.y, l = i * s.x, a = o * s.y;
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
  return n === e || !N(n) || Lt(n) ? !1 : P(n).position === "fixed" || on(n, e);
}
function hi(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = Qt(t, [], !1).filter((c) => N(c) && W(c) !== "body"), i = null;
  const s = P(t).position === "fixed";
  let r = s ? J(t) : t;
  for (; N(r) && !Lt(r); ) {
    const c = P(r), l = ne(r);
    !l && c.position === "fixed" && (i = null), (s ? !l && !i : !l && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || dt(r) && !l && on(t, r)) ? o = o.filter((d) => d !== r) : i = c, r = J(r);
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
  const r = [...n === "clippingAncestors" ? hi(e, this._c) : [].concat(n), o], c = r[0], l = r.reduce((a, d) => {
    const u = Ce(e, d, i);
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
  const o = B(e), i = z(e), s = n === "fixed", r = ut(t, !0, s, e);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = H(0);
  if (o || !o && !s)
    if ((W(e) !== "body" || dt(i)) && (c = Pt(e)), o) {
      const a = ut(e, !0, s, e);
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
  return !B(t) || P(t).position === "fixed" ? null : e ? e(t) : t.offsetParent;
}
function sn(t, e) {
  const n = T(t);
  if (!B(t))
    return n;
  let o = ke(t, e);
  for (; o && si(o) && P(o).position === "static"; )
    o = ke(o, e);
  return o && (W(o) === "html" || W(o) === "body" && P(o).position === "static" && !ne(o)) ? n : o || ri(t) || n;
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
  return P(t).direction === "rtl";
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
    const d = L(() => c.value ? a.value : []), u = j([]);
    u.value = k(n.modelValue || []), mn("selectedOptions", u);
    const f = L(() => u.value.map((y) => y.title)), p = (y) => {
      var w;
      return ((w = a.value[a.value.length - 1]) == null ? void 0 : w.id) === y.id;
    };
    function h(y) {
      y && n.disabled || (c.value = y, y || (u.value = k(n.modelValue || [])));
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
        const pt = S[E], V = (M) => {
          var ht;
          let F = M.find((K) => K.value === pt);
          if (F)
            return F;
          for (let K = 0; K < M.length; K++)
            if ((ht = M[K].children) != null && ht.length && (F = V(M[K].children), F))
              return F;
        }, R = V((O = a.value[E]) == null ? void 0 : O.options);
        if (R)
          if (w.push(R), (tt = R.options) != null && tt.length)
            v(R, E + 1);
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
          values: f.value,
          separator: n.separator,
          placeholder: n.placeholder,
          disabled: n.disabled,
          onOnClick: g
        }, null, 8, ["values", "separator", "placeholder", "disabled"])
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
            (C(!0), I(Kt, null, Xt(d.value, (S, O) => (C(), it(Vo, {
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
const Ci = /* @__PURE__ */ ft(_i, [["__scopeId", "data-v-19ea7c67"]]), Si = {
  install: (t) => {
    t.component("Cascader", Ci), t.component("CollapseBody", Qe);
  }
};
export {
  Ci as Cascader,
  Qe as CollapseBody,
  at as createStyleClasses,
  Si as default
};
