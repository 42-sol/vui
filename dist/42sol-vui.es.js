import { getCurrentScope as an, onScopeDispose as un, unref as Y, watch as Ee, defineComponent as X, h as ce, ref as j, onMounted as Ae, computed as L, nextTick as Te, openBlock as C, createElementBlock as S, mergeProps as ut, createElementVNode as W, renderSlot as J, createBlock as ft, toDisplayString as st, inject as fn, resolveComponent as dn, normalizeClass as pn, withModifiers as hn, createVNode as N, createCommentVNode as H, withCtx as rt, Fragment as Yt, renderList as Jt, normalizeProps as ct, guardReactiveProps as lt, Transition as gn, provide as mn, TransitionGroup as yn } from "vue";
function vn(t) {
  return an() ? (un(t), !0) : !1;
}
function Le(t) {
  return typeof t == "function" ? t() : Y(t);
}
const Pe = typeof window < "u" && typeof document < "u", wn = Object.prototype.toString, xn = (t) => wn.call(t) === "[object Object]", $t = () => {
}, bn = /* @__PURE__ */ _n();
function _n() {
  var t;
  return Pe && ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.userAgent) && /* @__PURE__ */ /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
function ot(t) {
  var e;
  const n = Le(t);
  return (e = n == null ? void 0 : n.$el) != null ? e : n;
}
const Re = Pe ? window : void 0;
function Dt(...t) {
  let e, n, o, i;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([n, o, i] = t, e = Re) : [e, n, o, i] = t, !e)
    return $t;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const s = [], r = () => {
    s.forEach((u) => u()), s.length = 0;
  }, c = (u, f, d, p) => (u.addEventListener(f, d, p), () => u.removeEventListener(f, d, p)), l = Ee(
    () => [ot(e), Le(i)],
    ([u, f]) => {
      if (r(), !u)
        return;
      const d = xn(f) ? { ...f } : f;
      s.push(
        ...n.flatMap((p) => o.map((h) => c(u, p, h, d)))
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
  const { window: o = Re, ignore: i = [], capture: s = !0, detectIframe: r = !1 } = n;
  if (!o)
    return;
  bn && !le && (le = !0, Array.from(o.document.body.children).forEach((d) => d.addEventListener("click", $t)), o.document.documentElement.addEventListener("click", $t));
  let c = !0;
  const l = (d) => i.some((p) => {
    if (typeof p == "string")
      return Array.from(o.document.querySelectorAll(p)).some((h) => h === d.target || d.composedPath().includes(h));
    {
      const h = ot(p);
      return h && (d.target === h || d.composedPath().includes(h));
    }
  }), u = [
    Dt(o, "click", (d) => {
      const p = ot(t);
      if (!(!p || p === d.target || d.composedPath().includes(p))) {
        if (d.detail === 0 && (c = !l(d)), !c) {
          c = !0;
          return;
        }
        e(d);
      }
    }, { passive: !0, capture: s }),
    Dt(o, "pointerdown", (d) => {
      const p = ot(t);
      p && (c = !d.composedPath().includes(p) && !l(d));
    }, { passive: !0 }),
    r && Dt(o, "blur", (d) => {
      setTimeout(() => {
        var p;
        const h = ot(t);
        ((p = o.document.activeElement) == null ? void 0 : p.tagName) === "IFRAME" && !(h != null && h.contains(o.document.activeElement)) && e(d);
      }, 0);
    })
  ].filter(Boolean);
  return () => u.forEach((d) => d());
}
const at = /^[a-z0-9]+(-[a-z0-9]+)*$/, At = (t, e, n, o = "") => {
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
    return e && !bt(a) ? null : a;
  }
  const s = i[0], r = s.split("-");
  if (r.length > 1) {
    const c = {
      provider: o,
      prefix: r.shift(),
      name: r.join("-")
    };
    return e && !bt(c) ? null : c;
  }
  if (n && o === "") {
    const c = {
      provider: o,
      prefix: "",
      name: s
    };
    return e && !bt(c, n) ? null : c;
  }
  return null;
}, bt = (t, e) => t ? !!((t.provider === "" || t.provider.match(at)) && (e && t.prefix === "" || t.prefix.match(at)) && t.name.match(at)) : !1, Me = Object.freeze(
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
  ...Me,
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
function Fe(t, e) {
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
  ...Me
};
function Bt(t, e) {
  for (const n in e)
    if (n in t && typeof t[n] != typeof e[n])
      return !1;
  return !0;
}
function je(t) {
  if (typeof t != "object" || t === null)
    return null;
  const e = t;
  if (typeof e.prefix != "string" || !t.icons || typeof t.icons != "object" || !Bt(t, In))
    return null;
  const n = e.icons;
  for (const i in n) {
    const s = n[i];
    if (!i.match(at) || typeof s.body != "string" || !Bt(
      s,
      Vt
    ))
      return null;
  }
  const o = e.aliases || /* @__PURE__ */ Object.create(null);
  for (const i in o) {
    const s = o[i], r = s.parent;
    if (!i.match(at) || typeof r != "string" || !n[r] && !o[r] || !Bt(
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
  return je(e) ? Fe(e, (n, o) => {
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
let dt = !1;
function De(t) {
  return typeof t == "boolean" && (dt = t), dt;
}
function Tn(t) {
  const e = typeof t == "string" ? At(t, !0, dt) : t;
  if (e) {
    const n = U(e.provider, e.prefix), o = e.name;
    return n.icons[o] || (n.missing.has(o) ? null : void 0);
  }
}
function Ln(t, e) {
  const n = At(t, !0, dt);
  if (!n)
    return !1;
  const o = U(n.provider, n.prefix);
  return An(o, n.name, e);
}
function Pn(t, e) {
  if (typeof t != "object")
    return !1;
  if (typeof e != "string" && (e = t.provider || ""), dt && !e && !t.prefix) {
    let i = !1;
    return je(t) && (t.prefix = "", Fe(t, (s, r) => {
      r && Ln(s, r) && (i = !0);
    })), i;
  }
  const n = t.prefix;
  if (!bt({
    provider: e,
    prefix: n,
    name: "a"
  }))
    return !1;
  const o = U(e, n);
  return !!Zt(o, t);
}
const Be = Object.freeze({
  width: null,
  height: null
}), Ne = Object.freeze({
  // Dimensions
  ...Be,
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
    ...Ne,
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
  let u, f;
  r === null ? (f = c === null ? "1em" : c === "auto" ? a : c, u = fe(f, l / a)) : (u = r === "auto" ? l : r, f = c === null ? fe(u, a / l) : c === "auto" ? a : c);
  const d = {}, p = (h, g) => {
    Fn(g) || (d[h] = g.toString());
  };
  return p("width", u), p("height", f), d.viewBox = i.left.toString() + " " + i.top.toString() + " " + l.toString() + " " + a.toString(), {
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
const ee = /* @__PURE__ */ Object.create(null), nt = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], _t = [];
for (; nt.length > 0; )
  nt.length === 1 || Math.random() > 0.5 ? _t.push(nt.shift()) : _t.push(nt.pop());
ee[""] = te({
  resources: ["https://api.iconify.design"].concat(_t)
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
function $e(t, e) {
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
      }), r.pending.length !== c && (n || $e([t], s.id), s.callback(
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
  const o = Jn++, i = $e.bind(null, n, o);
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
      b(void 0, u);
    });
  }
  function x() {
    d.forEach((b) => {
      b.status === "pending" && (b.status = "aborted");
    }), d = [];
  }
  function T(b, y, w) {
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
      u = w, v();
      return;
    }
    if (O) {
      u = w, d.length || (r.length ? k() : v());
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
        f = setTimeout(() => {
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
        T(y, w, O);
      }
    };
    d.push(y), a++, f = setTimeout(k, t.rotate), n(b, e, y.callback);
  }
  return setTimeout(k), _;
}
function Ve(t) {
  const e = {
    ...eo,
    ...t
  };
  let n = [];
  function o() {
    n = n.filter((c) => c().status === "pending");
  }
  function i(c, l, a) {
    const u = no(
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
function pe() {
}
const Nt = /* @__PURE__ */ Object.create(null);
function oo(t) {
  if (!Nt[t]) {
    const e = ne(t);
    if (!e)
      return;
    const n = Ve(e), o = {
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
      o = Ve(s);
      const r = t.resources ? t.resources[0] : "", c = Wt(r);
      c && (i = c.send);
    }
  }
  return !o || !i ? (n(void 0, 424), pe) : o.query(e, i, n)().abort;
}
const he = "iconify2", pt = "iconify", He = pt + "-count", ge = pt + "-version", We = 36e5, so = 168;
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
  return oe(t, He, e.toString());
}
function Qt(t) {
  return parseInt(zt(t, He)) || 0;
}
const Lt = {
  local: !0,
  session: !0
}, ze = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let ie = !1;
function ro(t) {
  ie = t;
}
let xt = typeof window > "u" ? {} : window;
function qe(t) {
  const e = t + "Storage";
  try {
    if (xt && xt[e] && typeof xt[e].length == "number")
      return xt[e];
  } catch {
  }
  Lt[t] = !1;
}
function Qe(t, e) {
  const n = qe(t);
  if (!n)
    return;
  const o = zt(n, ge);
  if (o !== he) {
    if (o) {
      const c = Qt(n);
      for (let l = 0; l < c; l++)
        me(n, pt + l.toString());
    }
    oe(n, ge, he), qt(n, 0);
    return;
  }
  const i = Math.floor(Date.now() / We) - so, s = (c) => {
    const l = pt + c.toString(), a = zt(n, l);
    if (typeof a == "string") {
      try {
        const u = JSON.parse(a);
        if (typeof u == "object" && typeof u.cached == "number" && u.cached > i && typeof u.provider == "string" && typeof u.data == "object" && typeof u.data.prefix == "string" && // Valid item: run callback
        e(u, c))
          return !0;
      } catch {
      }
      me(n, l);
    }
  };
  let r = Qt(n);
  for (let c = r - 1; c >= 0; c--)
    s(c) || (c === r - 1 ? (r--, qt(n, r)) : ze[t].add(c));
}
function Ue() {
  if (!ie) {
    ro(!0);
    for (const t in Lt)
      Qe(t, (e) => {
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
      Qe(o, (i) => {
        const s = i.data;
        return i.provider !== t.provider || s.prefix !== t.prefix || s.lastModified === e;
      });
  return !0;
}
function lo(t, e) {
  ie || Ue();
  function n(o) {
    let i;
    if (!Lt[o] || !(i = qe(o)))
      return;
    const s = ze[o];
    let r;
    if (s.size)
      s.delete(r = Array.from(s).shift());
    else if (r = Qt(i), !qt(i, r + 1))
      return;
    const c = {
      cached: Math.floor(Date.now() / We),
      provider: t.provider,
      data: e
    };
    return oe(
      i,
      pt + r.toString(),
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
            const u = t.pendingIcons;
            u && a.forEach((f) => {
              u.delete(f);
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
  const n = to(t, !0, De()), o = Gn(n);
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
    const { provider: a, prefix: u } = l;
    if (u === c && a === r)
      return;
    r = a, c = u, s.push(U(a, u));
    const f = i[a] || (i[a] = /* @__PURE__ */ Object.create(null));
    f[u] || (f[u] = []);
  }), o.pending.forEach((l) => {
    const { provider: a, prefix: u, name: f } = l, d = U(a, u), p = d.pendingIcons || (d.pendingIcons = /* @__PURE__ */ new Set());
    p.has(f) || (p.add(f), i[a][u].push(f));
  }), s.forEach((l) => {
    const { provider: a, prefix: u } = l;
    i[a][u].length && uo(l, i[a][u]);
  }), e ? Zn(e, o, s) : ye;
};
function po(t, e) {
  const n = {
    ...t
  };
  for (const o in e) {
    const i = e[o], s = typeof i;
    o in Be ? (i === null || i && (s === "string" || s === "number")) && (n[o] = i) : s === typeof n[o] && (n[o] = o === "rotate" ? i % 4 : i);
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
  ...Ne,
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
}, Ke = {
  backgroundColor: "transparent"
}, we = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, xe = {
  webkitMask: Ut,
  mask: Ut,
  background: Ke
};
for (const t in xe) {
  const e = xe[t];
  for (const n in we)
    e[t + n] = we[n];
}
const Ct = {};
["horizontal", "vertical"].forEach((t) => {
  const e = t.slice(0, 1) + "Flip";
  Ct[t + "-flip"] = e, Ct[t.slice(0, 1) + "-flip"] = e, Ct[t + "Flip"] = e;
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
          const _ = Ct[g];
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
  const { body: u, width: f, height: d } = t, p = i === "mask" || (i === "bg" ? !1 : u.indexOf("currentColor") !== -1), h = yo(u, {
    ...a,
    width: f + "",
    height: d + ""
  });
  return o.style = {
    ...s,
    "--svg": xo(h),
    width: be(a.width),
    height: be(a.height),
    ..._o,
    ...p ? Ut : Ke,
    ...c
  }, ce("span", o);
};
De(!0);
Vn("", Xn);
if (typeof document < "u" && typeof window < "u") {
  Ue();
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
}, it = X({
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
}), ht = (t) => {
  const e = [], n = {};
  return t({ classes: e, styles: n }), {
    class: e,
    style: n
  };
}, kt = (t) => typeof t == "number" ? `${t}px` : t, ko = /* @__PURE__ */ X({
  __name: "CollapseBody",
  props: {
    expanded: { type: Boolean },
    option: {},
    padding: {}
  },
  setup(t) {
    const e = t, n = j(null), o = j(0);
    Ae(() => {
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
    const c = L(() => (Te(() => r()), e.expanded));
    function l() {
      var d;
      const f = new CustomEvent("vui-collapse-expand-changed", { bubbles: !0 });
      (d = n.value) == null || d.dispatchEvent(f);
    }
    const a = L(() => ht(({ styles: f }) => {
      o.value !== void 0 ? c.value ? (f.height = `${o.value}px`, f.opacity = "1", l()) : (f.height = "0", f.opacity = "0") : r();
    })), u = L(() => ht(({ styles: f }) => {
      f.paddingLeft = kt(e.padding || "1rem");
    }));
    return (f, d) => (C(), S("div", ut({ class: "vui-collapse-body" }, a.value), [
      W("div", ut({
        class: "vui-collapse-body__content",
        ref_key: "collapseBodyEl",
        ref: n
      }, u.value), [
        J(f.$slots, "default", {}, void 0, !0)
      ], 16)
    ], 16));
  }
});
const mt = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [o, i] of e)
    n[o] = i;
  return n;
}, Xe = /* @__PURE__ */ mt(ko, [["__scopeId", "data-v-518f14fa"]]), So = {
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
      e.option.render ? (C(), ft(n, { key: 0 })) : (C(), S("div", So, st(e.option.title), 1))
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
      const u = (p = o == null ? void 0 : o.value) == null ? void 0 : p.find((h, g) => g === n.cascade.id);
      if (!u)
        return !1;
      const f = u.id ?? u.value, d = n.option.id || n.option.value;
      return f === d;
    }), l = L(() => ht(({ classes: u }) => {
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
      const d = dn("CascadeOption", !0);
      return C(), S("div", ut({
        class: "vui-cascade-option",
        onClick: a
      }, l.value, {
        title: n.option.title
      }), [
        W("div", Eo, [
          W("div", Ao, [
            W("div", To, [
              r.value ? (C(), S("div", {
                key: 0,
                class: pn(["vui-cascade-option__tree-btn", { "vui-cascade-option__tree-btn--opened": i.value }]),
                onClick: f[0] || (f[0] = hn((p) => i.value = !i.value, ["stop"]))
              }, [
                N(Y(it), { icon: "bxs:right-arrow" })
              ], 2)) : H("", !0)
            ]),
            N(Oo, {
              option: n.option
            }, null, 8, ["option"])
          ]),
          s.value ? (C(), S("div", Lo, [
            u.option.loadingState ? u.option.loadingState === "process" ? (C(), S("span", Ro, [
              N(Y(it), { icon: "ep:loading" })
            ])) : u.option.loadingState === "ready" ? (C(), S("span", Mo, [
              N(Y(it), { icon: "ep:refresh" })
            ])) : H("", !0) : (C(), S("span", Po, [
              N(Y(it), { icon: "ep:arrow-right" })
            ]))
          ])) : H("", !0)
        ]),
        r.value ? (C(), ft(Xe, {
          key: 0,
          expanded: i.value,
          option: n.option
        }, {
          default: rt(() => [
            (C(!0), S(Yt, null, Jt(u.option.children, (p) => (C(), ft(d, {
              key: p.id || p.value,
              cascade: u.cascade,
              option: p,
              onOnClick: f[1] || (f[1] = (h) => e("on-click", h))
            }, null, 8, ["cascade", "option"]))), 128))
          ]),
          _: 1
        }, 8, ["expanded", "option"])) : H("", !0)
      ], 16, Io);
    };
  }
});
const jo = /* @__PURE__ */ mt(Fo, [["__scopeId", "data-v-2b5f9ed8"]]), Do = { class: "vui-cascade__scrollable" }, Bo = {
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
    const n = t, o = L(() => ht(({ styles: r }) => {
      var c, l, a;
      r.width = kt(((c = n.configs) == null ? void 0 : c.width) || "240px"), (l = n.configs) != null && l.maxHeight ? r.maxHeight = kt(n.configs.maxHeight) : r.height = kt(((a = n.configs) == null ? void 0 : a.height) || "120px"), r.left = `${12 * n.padding}px`;
    }));
    function i(r) {
      n.fog || e("on-select", { cascade: n.cascade, optionParams: r });
    }
    function s() {
      e("on-back");
    }
    return (r, c) => (C(), S("div", ut({ class: "vui-cascade" }, o.value), [
      W("div", Do, [
        n.canBack ? (C(), S("div", Bo, [
          W("div", {
            class: "vui-cascade__back-btn",
            onClick: s
          }, [
            J(r.$slots, "backBtn", ct(lt({ back: s })), () => [
              N(Y(it), { icon: "ep:back" })
            ], !0)
          ])
        ])) : H("", !0),
        J(r.$slots, "beforeOptions", ct(lt({ cascade: n.cascade })), void 0, !0),
        (C(!0), S(Yt, null, Jt(r.cascade.options, (l) => (C(), ft(jo, {
          key: l.id || l.value,
          cascade: r.cascade,
          option: l,
          onOnClick: i
        }, null, 8, ["cascade", "option"]))), 128)),
        J(r.$slots, "cascadeNoData", ct(lt({ cascade: n.cascade })), () => [
          r.cascade.options.length ? H("", !0) : (C(), S("div", No, st(n.noDataText || "no data"), 1))
        ], !0),
        N(gn, { class: "vui-cascade__fog-transition" }, {
          default: rt(() => [
            n.fog ? (C(), S("div", $o)) : H("", !0)
          ]),
          _: 1
        })
      ])
    ], 16));
  }
});
const Ho = /* @__PURE__ */ mt(Vo, [["__scopeId", "data-v-4749e1ce"]]), Wo = {
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
    const n = t, o = L(() => n.values.join(n.separator)), i = L(() => ht(({ classes: r }) => {
      n.disabled && r.push("vui-cascade-input--disabled");
    }));
    function s() {
      e("on-click");
    }
    return (r, c) => (C(), S("div", ut({
      class: "vui-cascade-input",
      onClick: s
    }, i.value), [
      o.value ? (C(), S("div", Wo, st(o.value), 1)) : (C(), S("div", zo, st(n.placeholder), 1)),
      r.errorMsg ? (C(), S("div", qo, st(r.errorMsg), 1)) : H("", !0)
    ], 16));
  }
});
const Uo = /* @__PURE__ */ mt(Qo, [["__scopeId", "data-v-c86b87e6"]]), Kt = Math.min, Z = Math.max, Ot = Math.round, z = (t) => ({
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
  return Z(t, Kt(e, n));
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
function Ge(t) {
  return t === "x" ? "y" : "x";
}
function Ye(t) {
  return t === "y" ? "height" : "width";
}
function Mt(t) {
  return ["top", "bottom"].includes(K(t)) ? "y" : "x";
}
function Je(t) {
  return Ge(Mt(t));
}
function Go(t, e, n) {
  n === void 0 && (n = !1);
  const o = Rt(t), i = Je(t), s = Ye(i);
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
  const s = Mt(e), r = Je(e), c = Ye(r), l = K(e), a = s === "y", u = o.x + o.width / 2 - i.width / 2, f = o.y + o.height / 2 - i.height / 2, d = o[c] / 2 - i[c] / 2;
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
    x: u,
    y: f
  } = ke(a, o, l), d = o, p = {}, h = 0;
  for (let g = 0; g < c.length; g++) {
    const {
      name: m,
      fn: _
    } = c[g], {
      x: v,
      y: x,
      data: T,
      reset: k
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
    if (u = v ?? u, f = x ?? f, p = {
      ...p,
      [m]: {
        ...p[m],
        ...T
      }
    }, k && h <= 50) {
      h++, typeof k == "object" && (k.placement && (d = k.placement), k.rects && (a = k.rects === !0 ? await r.getElementRects({
        reference: t,
        floating: e,
        strategy: i
      }) : k.rects), {
        x: u,
        y: f
      } = ke(a, d, l)), g = -1;
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
async function Ze(t, e) {
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
  } = Pt(e, t), h = ei(p), m = c[d ? f === "floating" ? "reference" : "floating" : f], _ = Et(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(m))) == null || n ? m : m.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(c.floating)),
    boundary: a,
    rootBoundary: u,
    strategy: l
  })), v = f === "floating" ? {
    ...r.floating,
    x: o,
    y: i
  } : r.reference, x = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c.floating)), T = await (s.isElement == null ? void 0 : s.isElement(x)) ? await (s.getScale == null ? void 0 : s.getScale(x)) || {
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
    top: (_.top - k.top + h.top) / T.y,
    bottom: (k.bottom - _.bottom + h.bottom) / T.y,
    left: (_.left - k.left + h.left) / T.x,
    right: (k.right - _.right + h.right) / T.x
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
        mainAxis: u = !0,
        crossAxis: f = !0,
        fallbackPlacements: d,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: g = !0,
        ...m
      } = Pt(t, e);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const _ = K(i), v = K(c) === c, x = await (l.isRTL == null ? void 0 : l.isRTL(a.floating)), T = d || (v || !g ? [It(c)] : Yo(c));
      !d && h !== "none" && T.push(...Zo(c, g, h, x));
      const k = [c, ...T], b = await Ze(e, m), y = [];
      let w = ((o = s.flip) == null ? void 0 : o.overflows) || [];
      if (u && y.push(b[_]), f) {
        const E = Go(i, r, x);
        y.push(b[E[0]], b[E[1]]);
      }
      if (w = [...w, {
        placement: i,
        overflows: y
      }], !y.every((E) => E <= 0)) {
        var O, I;
        const E = (((O = s.flip) == null ? void 0 : O.index) || 0) + 1, vt = k[E];
        if (vt)
          return {
            data: {
              index: E,
              overflows: w
            },
            reset: {
              placement: vt
            }
          };
        let V = (I = w.filter((M) => M.overflows[0] <= 0).sort((M, A) => M.overflows[1] - A.overflows[1])[0]) == null ? void 0 : I.placement;
        if (!V)
          switch (p) {
            case "bestFit": {
              var B;
              const M = (B = w.map((A) => [A.placement, A.overflows.filter((F) => F > 0).reduce((F, wt) => F + wt, 0)]).sort((A, F) => A[1] - F[1])[0]) == null ? void 0 : B[0];
              M && (V = M);
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
async function ii(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, s = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), r = K(n), c = Rt(n), l = Mt(n) === "y", a = ["left", "top"].includes(r) ? -1 : 1, u = s && l ? -1 : 1, f = Pt(e, t);
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
      }, u = await Ze(e, l), f = Mt(K(i)), d = Ge(f);
      let p = a[d], h = a[f];
      if (s) {
        const m = d === "y" ? "top" : "left", _ = d === "y" ? "bottom" : "right", v = p + u[m], x = p - u[_];
        p = Ce(v, p, x);
      }
      if (r) {
        const m = f === "y" ? "top" : "left", _ = f === "y" ? "bottom" : "right", v = h + u[m], x = h - u[_];
        h = Ce(v, h, x);
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
function q(t) {
  return tn(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function P(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function Q(t) {
  var e;
  return (e = (tn(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function tn(t) {
  return t instanceof Node || t instanceof P(t).Node;
}
function $(t) {
  return t instanceof Element || t instanceof P(t).Element;
}
function D(t) {
  return t instanceof HTMLElement || t instanceof P(t).HTMLElement;
}
function Se(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof P(t).ShadowRoot;
}
function yt(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = R(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function ci(t) {
  return ["table", "td", "th"].includes(q(t));
}
function se(t) {
  const e = re(), n = R(t);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function li(t) {
  let e = et(t);
  for (; D(e) && !Ft(e); ) {
    if (se(e))
      return e;
    e = et(e);
  }
  return null;
}
function re() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ft(t) {
  return ["html", "body", "#document"].includes(q(t));
}
function R(t) {
  return P(t).getComputedStyle(t);
}
function jt(t) {
  return $(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function et(t) {
  if (q(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    Se(t) && t.host || // Fallback.
    Q(t)
  );
  return Se(e) ? e.host : e;
}
function en(t) {
  const e = et(t);
  return Ft(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : D(e) && yt(e) ? e : en(e);
}
function Gt(t, e, n) {
  var o;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const i = en(t), s = i === ((o = t.ownerDocument) == null ? void 0 : o.body), r = P(i);
  return s ? e.concat(r, r.visualViewport || [], yt(i) ? i : [], r.frameElement && n ? Gt(r.frameElement) : []) : e.concat(i, Gt(i, [], n));
}
function nn(t) {
  const e = R(t);
  let n = parseFloat(e.width) || 0, o = parseFloat(e.height) || 0;
  const i = D(t), s = i ? t.offsetWidth : n, r = i ? t.offsetHeight : o, c = Ot(n) !== s || Ot(o) !== r;
  return c && (n = s, o = r), {
    width: n,
    height: o,
    $: c
  };
}
function on(t) {
  return $(t) ? t : t.contextElement;
}
function tt(t) {
  const e = on(t);
  if (!D(e))
    return z(1);
  const n = e.getBoundingClientRect(), {
    width: o,
    height: i,
    $: s
  } = nn(e);
  let r = (s ? Ot(n.width) : n.width) / o, c = (s ? Ot(n.height) : n.height) / i;
  return (!r || !Number.isFinite(r)) && (r = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: r,
    y: c
  };
}
const ai = /* @__PURE__ */ z(0);
function sn(t) {
  const e = P(t);
  return !re() || !e.visualViewport ? ai : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function ui(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== P(t) ? !1 : e;
}
function gt(t, e, n, o) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const i = t.getBoundingClientRect(), s = on(t);
  let r = z(1);
  e && (o ? $(o) && (r = tt(o)) : r = tt(t));
  const c = ui(s, n, o) ? sn(s) : z(0);
  let l = (i.left + c.x) / r.x, a = (i.top + c.y) / r.y, u = i.width / r.x, f = i.height / r.y;
  if (s) {
    const d = P(s), p = o && $(o) ? P(o) : o;
    let h = d.frameElement;
    for (; h && o && p !== d; ) {
      const g = tt(h), m = h.getBoundingClientRect(), _ = R(h), v = m.left + (h.clientLeft + parseFloat(_.paddingLeft)) * g.x, x = m.top + (h.clientTop + parseFloat(_.paddingTop)) * g.y;
      l *= g.x, a *= g.y, u *= g.x, f *= g.y, l += v, a += x, h = P(h).frameElement;
    }
  }
  return Et({
    width: u,
    height: f,
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
  const i = D(n), s = Q(n);
  if (n === s)
    return e;
  let r = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = z(1);
  const l = z(0);
  if ((i || !i && o !== "fixed") && ((q(n) !== "body" || yt(s)) && (r = jt(n)), D(n))) {
    const a = gt(n);
    c = tt(n), l.x = a.x + n.clientLeft, l.y = a.y + n.clientTop;
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
function rn(t) {
  return gt(Q(t)).left + jt(t).scrollLeft;
}
function pi(t) {
  const e = Q(t), n = jt(t), o = t.ownerDocument.body, i = Z(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth), s = Z(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
  let r = -n.scrollLeft + rn(t);
  const c = -n.scrollTop;
  return R(o).direction === "rtl" && (r += Z(e.clientWidth, o.clientWidth) - i), {
    width: i,
    height: s,
    x: r,
    y: c
  };
}
function hi(t, e) {
  const n = P(t), o = Q(t), i = n.visualViewport;
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
  const n = gt(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, s = D(t) ? tt(t) : z(1), r = t.clientWidth * s.x, c = t.clientHeight * s.y, l = i * s.x, a = o * s.y;
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
    o = pi(Q(t));
  else if ($(e))
    o = gi(e, n);
  else {
    const i = sn(t);
    o = {
      ...e,
      x: e.x - i.x,
      y: e.y - i.y
    };
  }
  return Et(o);
}
function cn(t, e) {
  const n = et(t);
  return n === e || !$(n) || Ft(n) ? !1 : R(n).position === "fixed" || cn(n, e);
}
function mi(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = Gt(t, [], !1).filter((c) => $(c) && q(c) !== "body"), i = null;
  const s = R(t).position === "fixed";
  let r = s ? et(t) : t;
  for (; $(r) && !Ft(r); ) {
    const c = R(r), l = se(r);
    !l && c.position === "fixed" && (i = null), (s ? !l && !i : !l && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || yt(r) && !l && cn(t, r)) ? o = o.filter((u) => u !== r) : i = c, r = et(r);
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
  const r = [...n === "clippingAncestors" ? mi(e, this._c) : [].concat(n), o], c = r[0], l = r.reduce((a, u) => {
    const f = Oe(e, u, i);
    return a.top = Z(f.top, a.top), a.right = Kt(f.right, a.right), a.bottom = Kt(f.bottom, a.bottom), a.left = Z(f.left, a.left), a;
  }, Oe(e, c, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function vi(t) {
  return nn(t);
}
function wi(t, e, n) {
  const o = D(e), i = Q(e), s = n === "fixed", r = gt(t, !0, s, e);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = z(0);
  if (o || !o && !s)
    if ((q(e) !== "body" || yt(i)) && (c = jt(e)), o) {
      const a = gt(e, !0, s, e);
      l.x = a.x + e.clientLeft, l.y = a.y + e.clientTop;
    } else
      i && (l.x = rn(i));
  return {
    x: r.left + c.scrollLeft - l.x,
    y: r.top + c.scrollTop - l.y,
    width: r.width,
    height: r.height
  };
}
function Ie(t, e) {
  return !D(t) || R(t).position === "fixed" ? null : e ? e(t) : t.offsetParent;
}
function ln(t, e) {
  const n = P(t);
  if (!D(t))
    return n;
  let o = Ie(t, e);
  for (; o && ci(o) && R(o).position === "static"; )
    o = Ie(o, e);
  return o && (q(o) === "html" || q(o) === "body" && R(o).position === "static" && !se(o)) ? n : o || li(t) || n;
}
const xi = async function(t) {
  let {
    reference: e,
    floating: n,
    strategy: o
  } = t;
  const i = this.getOffsetParent || ln, s = this.getDimensions;
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
  return R(t).direction === "rtl";
}
const _i = {
  convertOffsetParentRelativeRectToViewportRelativeRect: fi,
  getDocumentElement: Q,
  getClippingRect: yi,
  getOffsetParent: ln,
  getElementRects: xi,
  getClientRects: di,
  getDimensions: vi,
  getScale: tt,
  isElement: $,
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
    const n = t, o = j(null), i = j(null), s = j(null), r = j(!1), c = j(""), l = j([]), a = L(() => r.value ? l.value : []), u = j([]), f = L(() => (console.log("props.data has been changed", n.data), {
      value: "__ROOT_CASCADE__",
      title: "",
      options: n.data
    }));
    Ee(() => n.data, () => {
      function y() {
        v(f.value, 0), u.value = k(n.modelValue || []);
      }
      y();
    }), mn("selectedOptions", u);
    const d = L(() => u.value.map((y) => y.title)), p = (y) => {
      var w;
      return ((w = l.value[l.value.length - 1]) == null ? void 0 : w.id) === y.id;
    };
    function h(y) {
      y && n.disabled || (r.value = y, y || (u.value = k(n.modelValue || [])));
    }
    Ae(() => {
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
        e("update:modelValue", b(u.value)), Te(() => {
          h(!1);
        });
        return;
      }
      v(w.option);
    }
    function v(y, w) {
      const O = w || l.value.length;
      w !== void 0 && (l.value = l.value.slice(0, w)), l.value.push(x(y, O));
    }
    function x(y, w) {
      return { id: w, options: y.options || [] };
    }
    function T() {
      l.value.pop();
    }
    function k(y) {
      var I, B;
      if (n.transform)
        return n.transform(y, x);
      const w = [], O = y;
      for (let E = 0; E < O.length; E++) {
        const vt = O[E], V = (A) => {
          var wt;
          let F = A == null ? void 0 : A.find((G) => G.value === vt);
          if (F)
            return F;
          for (let G = 0; G < (A == null ? void 0 : A.length); G++)
            if ((wt = A[G].children) != null && wt.length && (F = V(A[G].children), F))
              return F;
        }, M = V((I = l.value[E]) == null ? void 0 : I.options);
        if (M)
          if (w.push(M), (B = M.options) != null && B.length)
            v(M, E + 1);
          else if (E < O.length - 1) {
            c.value = "Can`t display such a value";
            break;
          } else
            E === O.length - 1 && (c.value = "");
        else {
          c.value = "Can`t display such a value";
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
      W("div", {
        class: "vue-cascader__input-wrapper",
        ref_key: "inputWrapperEl",
        ref: i
      }, [
        N(Uo, {
          values: d.value,
          separator: n.separator,
          placeholder: n.placeholder,
          disabled: n.disabled,
          onOnClick: g
        }, null, 8, ["values", "separator", "placeholder", "disabled"])
      ], 512),
      W("div", {
        class: "vui-cascader__dropdown",
        ref_key: "dropdownEl",
        ref: s
      }, [
        N(yn, {
          tag: "div",
          mode: "in-out",
          name: "vui-cascader-transition"
        }, {
          default: rt(() => [
            (C(!0), S(Yt, null, Jt(a.value, (O, I) => (C(), ft(Ho, {
              key: O.id,
              cascade: O,
              padding: I,
              fog: !p(O),
              canBack: I > 0,
              configs: n.cascadesConfig,
              onOnSelect: _,
              onOnBack: T,
              noDataText: n.noDataText
            }, {
              cascadeNoData: rt(({ cascade: B }) => [
                J(y.$slots, "cascadeNoData", ct(lt(B)), void 0, !0)
              ]),
              beforeOptions: rt(({ cascade: B }) => [
                J(y.$slots, "beforeOptions", ct(lt({ cascade: B, selectedOptions: u.value })), void 0, !0)
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
const Si = /* @__PURE__ */ mt(ki, [["__scopeId", "data-v-b5e316fb"]]), Ii = {
  install: (t) => {
    t.component("Cascader", Si), t.component("CollapseBody", Xe);
  }
};
export {
  Si as Cascader,
  Xe as CollapseBody,
  ht as createStyleClasses,
  Ii as default
};
