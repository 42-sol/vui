import { getCurrentScope as an, onScopeDispose as un, unref as Z, watch as fn, defineComponent as Y, h as le, ref as j, onMounted as Ae, computed as T, nextTick as Te, openBlock as C, createElementBlock as S, mergeProps as dt, createElementVNode as W, renderSlot as tt, createBlock as pt, toDisplayString as ct, inject as dn, resolveComponent as pn, normalizeClass as hn, withModifiers as gn, createVNode as N, createCommentVNode as H, withCtx as lt, Fragment as Yt, renderList as Jt, normalizeProps as at, guardReactiveProps as ut, Transition as mn, provide as yn, TransitionGroup as vn } from "vue";
function wn(t) {
  return an() ? (un(t), !0) : !1;
}
function Le(t) {
  return typeof t == "function" ? t() : Z(t);
}
const Pe = typeof window < "u" && typeof document < "u", xn = Object.prototype.toString, bn = (t) => xn.call(t) === "[object Object]", $t = () => {
}, _n = /* @__PURE__ */ Cn();
function Cn() {
  var t;
  return Pe && ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.userAgent) && /* @__PURE__ */ /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
function st(t) {
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
    s.forEach((f) => f()), s.length = 0;
  }, c = (f, u, d, p) => (f.addEventListener(u, d, p), () => f.removeEventListener(u, d, p)), l = fn(
    () => [st(e), Le(i)],
    ([f, u]) => {
      if (r(), !f)
        return;
      const d = bn(u) ? { ...u } : u;
      s.push(
        ...n.flatMap((p) => o.map((h) => c(f, p, h, d)))
      );
    },
    { immediate: !0, flush: "post" }
  ), a = () => {
    l(), r();
  };
  return wn(a), a;
}
let ae = !1;
function kn(t, e, n = {}) {
  const { window: o = Re, ignore: i = [], capture: s = !0, detectIframe: r = !1 } = n;
  if (!o)
    return;
  _n && !ae && (ae = !0, Array.from(o.document.body.children).forEach((d) => d.addEventListener("click", $t)), o.document.documentElement.addEventListener("click", $t));
  let c = !0;
  const l = (d) => i.some((p) => {
    if (typeof p == "string")
      return Array.from(o.document.querySelectorAll(p)).some((h) => h === d.target || d.composedPath().includes(h));
    {
      const h = st(p);
      return h && (d.target === h || d.composedPath().includes(h));
    }
  }), f = [
    Dt(o, "click", (d) => {
      const p = st(t);
      if (!(!p || p === d.target || d.composedPath().includes(p))) {
        if (d.detail === 0 && (c = !l(d)), !c) {
          c = !0;
          return;
        }
        e(d);
      }
    }, { passive: !0, capture: s }),
    Dt(o, "pointerdown", (d) => {
      const p = st(t);
      p && (c = !d.composedPath().includes(p) && !l(d));
    }, { passive: !0 }),
    r && Dt(o, "blur", (d) => {
      setTimeout(() => {
        var p;
        const h = st(t);
        ((p = o.document.activeElement) == null ? void 0 : p.tagName) === "IFRAME" && !(h != null && h.contains(o.document.activeElement)) && e(d);
      }, 0);
    })
  ].filter(Boolean);
  return () => f.forEach((d) => d());
}
const ft = /^[a-z0-9]+(-[a-z0-9]+)*$/, At = (t, e, n, o = "") => {
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
}, bt = (t, e) => t ? !!((t.provider === "" || t.provider.match(ft)) && (e && t.prefix === "" || t.prefix.match(ft)) && t.name.match(ft)) : !1, Me = Object.freeze(
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
function Sn(t, e) {
  const n = {};
  !t.hFlip != !e.hFlip && (n.hFlip = !0), !t.vFlip != !e.vFlip && (n.vFlip = !0);
  const o = ((t.rotate || 0) + (e.rotate || 0)) % 4;
  return o && (n.rotate = o), n;
}
function ue(t, e) {
  const n = Sn(t, e);
  for (const o in Vt)
    o in St ? o in t && !(o in n) && (n[o] = St[o]) : o in e ? n[o] = e[o] : o in t && (n[o] = t[o]);
  return n;
}
function On(t, e) {
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
    s = ue(
      o[c] || i[c],
      s
    );
  }
  return r(e), n.forEach(r), ue(t, s);
}
function Fe(t, e) {
  const n = [];
  if (typeof t != "object" || typeof t.icons != "object")
    return n;
  t.not_found instanceof Array && t.not_found.forEach((i) => {
    e(i, null), n.push(i);
  });
  const o = On(t);
  for (const i in o) {
    const s = o[i];
    s && (e(i, In(t, i, s)), n.push(i));
  }
  return n;
}
const En = {
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
  if (typeof e.prefix != "string" || !t.icons || typeof t.icons != "object" || !Bt(t, En))
    return null;
  const n = e.icons;
  for (const i in n) {
    const s = n[i];
    if (!i.match(ft) || typeof s.body != "string" || !Bt(
      s,
      Vt
    ))
      return null;
  }
  const o = e.aliases || /* @__PURE__ */ Object.create(null);
  for (const i in o) {
    const s = o[i], r = s.parent;
    if (!i.match(ft) || typeof r != "string" || !n[r] && !o[r] || !Bt(
      s,
      Vt
    ))
      return null;
  }
  return e;
}
const fe = /* @__PURE__ */ Object.create(null);
function An(t, e) {
  return {
    provider: t,
    prefix: e,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function X(t, e) {
  const n = fe[t] || (fe[t] = /* @__PURE__ */ Object.create(null));
  return n[e] || (n[e] = An(t, e));
}
function Zt(t, e) {
  return je(e) ? Fe(e, (n, o) => {
    o ? t.icons[n] = o : t.missing.add(n);
  }) : [];
}
function Tn(t, e, n) {
  try {
    if (typeof n.body == "string")
      return t.icons[e] = { ...n }, !0;
  } catch {
  }
  return !1;
}
let ht = !1;
function De(t) {
  return typeof t == "boolean" && (ht = t), ht;
}
function Ln(t) {
  const e = typeof t == "string" ? At(t, !0, ht) : t;
  if (e) {
    const n = X(e.provider, e.prefix), o = e.name;
    return n.icons[o] || (n.missing.has(o) ? null : void 0);
  }
}
function Pn(t, e) {
  const n = At(t, !0, ht);
  if (!n)
    return !1;
  const o = X(n.provider, n.prefix);
  return Tn(o, n.name, e);
}
function Rn(t, e) {
  if (typeof t != "object")
    return !1;
  if (typeof e != "string" && (e = t.provider || ""), ht && !e && !t.prefix) {
    let i = !1;
    return je(t) && (t.prefix = "", Fe(t, (s, r) => {
      r && Pn(s, r) && (i = !0);
    })), i;
  }
  const n = t.prefix;
  if (!bt({
    provider: e,
    prefix: n,
    name: "a"
  }))
    return !1;
  const o = X(e, n);
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
}), Mn = /(-?[0-9.]*[0-9]+[0-9.]*)/g, Fn = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function de(t, e, n) {
  if (e === 1)
    return t;
  if (n = n || 100, typeof t == "number")
    return Math.ceil(t * e * n) / n;
  if (typeof t != "string")
    return t;
  const o = t.split(Mn);
  if (o === null || !o.length)
    return t;
  const i = [];
  let s = o.shift(), r = Fn.test(s);
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
const jn = (t) => t === "unset" || t === "undefined" || t === "none";
function Dn(t, e) {
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
    let x = h.rotate;
    m ? _ ? x += 2 : (g.push(
      "translate(" + (i.width + i.left).toString() + " " + (0 - i.top).toString() + ")"
    ), g.push("scale(-1 1)"), i.top = i.left = 0) : _ && (g.push(
      "translate(" + (0 - i.left).toString() + " " + (i.height + i.top).toString() + ")"
    ), g.push("scale(1 -1)"), i.top = i.left = 0);
    let v;
    switch (x < 0 && (x -= Math.floor(x / 4) * 4), x = x % 4, x) {
      case 1:
        v = i.height / 2 + i.top, g.unshift(
          "rotate(90 " + v.toString() + " " + v.toString() + ")"
        );
        break;
      case 2:
        g.unshift(
          "rotate(180 " + (i.width / 2 + i.left).toString() + " " + (i.height / 2 + i.top).toString() + ")"
        );
        break;
      case 3:
        v = i.width / 2 + i.left, g.unshift(
          "rotate(-90 " + v.toString() + " " + v.toString() + ")"
        );
        break;
    }
    x % 2 === 1 && (i.left !== i.top && (v = i.left, i.left = i.top, i.top = v), i.width !== i.height && (v = i.width, i.width = i.height, i.height = v)), g.length && (s = '<g transform="' + g.join(" ") + '">' + s + "</g>");
  });
  const r = o.width, c = o.height, l = i.width, a = i.height;
  let f, u;
  r === null ? (u = c === null ? "1em" : c === "auto" ? a : c, f = de(u, l / a)) : (f = r === "auto" ? l : r, u = c === null ? de(f, a / l) : c === "auto" ? a : c);
  const d = {}, p = (h, g) => {
    jn(g) || (d[h] = g.toString());
  };
  return p("width", f), p("height", u), d.viewBox = i.left.toString() + " " + i.top.toString() + " " + l.toString() + " " + a.toString(), {
    attributes: d,
    body: s
  };
}
const Bn = /\sid="(\S+)"/g, Nn = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let $n = 0;
function Vn(t, e = Nn) {
  const n = [];
  let o;
  for (; o = Bn.exec(t); )
    n.push(o[1]);
  if (!n.length)
    return t;
  const i = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return n.forEach((s) => {
    const r = typeof e == "function" ? e(s) : e + ($n++).toString(), c = s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    t = t.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + c + ')([")]|\\.[a-z])', "g"),
      "$1" + r + i + "$3"
    );
  }), t = t.replace(new RegExp(i, "g"), ""), t;
}
const Ht = /* @__PURE__ */ Object.create(null);
function Hn(t, e) {
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
const ee = /* @__PURE__ */ Object.create(null), it = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], _t = [];
for (; it.length > 0; )
  it.length === 1 || Math.random() > 0.5 ? _t.push(it.shift()) : _t.push(it.pop());
ee[""] = te({
  resources: ["https://api.iconify.design"].concat(_t)
});
function Wn(t, e) {
  const n = te(e);
  return n === null ? !1 : (ee[t] = n, !0);
}
function ne(t) {
  return ee[t];
}
const zn = () => {
  let t;
  try {
    if (t = fetch, typeof t == "function")
      return t;
  } catch {
  }
};
let pe = zn();
function qn(t, e) {
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
function Qn(t) {
  return t === 404;
}
const Un = (t, e, n) => {
  const o = [], i = qn(t, e), s = "icons";
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
function Kn(t) {
  if (typeof t == "string") {
    const e = ne(t);
    if (e)
      return e.path;
  }
  return "/";
}
const Xn = (t, e, n) => {
  if (!pe) {
    n("abort", 424);
    return;
  }
  let o = Kn(e.provider);
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
  pe(t + o).then((s) => {
    const r = s.status;
    if (r !== 200) {
      setTimeout(() => {
        n(Qn(r) ? "abort" : "next", r);
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
}, Gn = {
  prepare: Un,
  send: Xn
};
function Yn(t) {
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
    const s = i.provider, r = i.prefix, c = i.name, l = n[s] || (n[s] = /* @__PURE__ */ Object.create(null)), a = l[r] || (l[r] = X(s, r));
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
function $e(t, e) {
  t.forEach((n) => {
    const o = n.loaderCallbacks;
    o && (n.loaderCallbacks = o.filter((i) => i.id !== e));
  });
}
function Jn(t) {
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
let Zn = 0;
function to(t, e, n) {
  const o = Zn++, i = $e.bind(null, n, o);
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
function eo(t, e = !0, n = !1) {
  const o = [];
  return t.forEach((i) => {
    const s = typeof i == "string" ? At(i, e, n) : i;
    s && o.push(s);
  }), o;
}
var no = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function oo(t, e, n, o) {
  const i = t.resources.length, s = t.random ? Math.floor(Math.random() * i) : t.index;
  let r;
  if (t.random) {
    let w = t.resources.slice(0);
    for (r = []; w.length > 1; ) {
      const I = Math.floor(Math.random() * w.length);
      r.push(w[I]), w = w.slice(0, I).concat(w.slice(I + 1));
    }
    r = r.concat(w);
  } else
    r = t.resources.slice(s).concat(t.resources.slice(0, s));
  const c = Date.now();
  let l = "pending", a = 0, f, u = null, d = [], p = [];
  typeof o == "function" && p.push(o);
  function h() {
    u && (clearTimeout(u), u = null);
  }
  function g() {
    l === "pending" && (l = "aborted"), h(), d.forEach((w) => {
      w.status === "pending" && (w.status = "aborted");
    }), d = [];
  }
  function m(w, I) {
    I && (p = []), typeof w == "function" && p.push(w);
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
    l = "failed", p.forEach((w) => {
      w(void 0, f);
    });
  }
  function v() {
    d.forEach((w) => {
      w.status === "pending" && (w.status = "aborted");
    }), d = [];
  }
  function E(w, I, y) {
    const b = I !== "success";
    switch (d = d.filter((k) => k !== w), l) {
      case "pending":
        break;
      case "failed":
        if (b || !t.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (I === "abort") {
      f = y, x();
      return;
    }
    if (b) {
      f = y, d.length || (r.length ? O() : x());
      return;
    }
    if (h(), v(), !t.random) {
      const k = t.resources.indexOf(w.resource);
      k !== -1 && k !== t.index && (t.index = k);
    }
    l = "completed", p.forEach((k) => {
      k(y);
    });
  }
  function O() {
    if (l !== "pending")
      return;
    h();
    const w = r.shift();
    if (w === void 0) {
      if (d.length) {
        u = setTimeout(() => {
          h(), l === "pending" && (v(), x());
        }, t.timeout);
        return;
      }
      x();
      return;
    }
    const I = {
      status: "pending",
      resource: w,
      callback: (y, b) => {
        E(I, y, b);
      }
    };
    d.push(I), a++, u = setTimeout(O, t.rotate), n(w, e, I.callback);
  }
  return setTimeout(O), _;
}
function Ve(t) {
  const e = {
    ...no,
    ...t
  };
  let n = [];
  function o() {
    n = n.filter((c) => c().status === "pending");
  }
  function i(c, l, a) {
    const f = oo(
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
function he() {
}
const Nt = /* @__PURE__ */ Object.create(null);
function io(t) {
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
function so(t, e, n) {
  let o, i;
  if (typeof t == "string") {
    const s = Wt(t);
    if (!s)
      return n(void 0, 424), he;
    i = s.send;
    const r = io(t);
    r && (o = r.redundancy);
  } else {
    const s = te(t);
    if (s) {
      o = Ve(s);
      const r = t.resources ? t.resources[0] : "", c = Wt(r);
      c && (i = c.send);
    }
  }
  return !o || !i ? (n(void 0, 424), he) : o.query(e, i, n)().abort;
}
const ge = "iconify2", gt = "iconify", He = gt + "-count", me = gt + "-version", We = 36e5, ro = 168;
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
function ye(t, e) {
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
function co(t) {
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
  const o = zt(n, me);
  if (o !== ge) {
    if (o) {
      const c = Qt(n);
      for (let l = 0; l < c; l++)
        ye(n, gt + l.toString());
    }
    oe(n, me, ge), qt(n, 0);
    return;
  }
  const i = Math.floor(Date.now() / We) - ro, s = (c) => {
    const l = gt + c.toString(), a = zt(n, l);
    if (typeof a == "string") {
      try {
        const f = JSON.parse(a);
        if (typeof f == "object" && typeof f.cached == "number" && f.cached > i && typeof f.provider == "string" && typeof f.data == "object" && typeof f.data.prefix == "string" && // Valid item: run callback
        e(f, c))
          return !0;
      } catch {
      }
      ye(n, l);
    }
  };
  let r = Qt(n);
  for (let c = r - 1; c >= 0; c--)
    s(c) || (c === r - 1 ? (r--, qt(n, r)) : ze[t].add(c));
}
function Ue() {
  if (!ie) {
    co(!0);
    for (const t in Lt)
      Qe(t, (e) => {
        const n = e.data, o = e.provider, i = n.prefix, s = X(
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
function lo(t, e) {
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
function ao(t, e) {
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
      gt + r.toString(),
      JSON.stringify(c)
    );
  }
  e.lastModified && !lo(t, e.lastModified) || Object.keys(e.icons).length && (e.not_found && (e = Object.assign({}, e), delete e.not_found), n("local") || n("session"));
}
function ve() {
}
function uo(t) {
  t.iconsLoaderFlag || (t.iconsLoaderFlag = !0, setTimeout(() => {
    t.iconsLoaderFlag = !1, Jn(t);
  }));
}
function fo(t, e) {
  t.iconsToLoad ? t.iconsToLoad = t.iconsToLoad.concat(e).sort() : t.iconsToLoad = e, t.iconsQueueFlag || (t.iconsQueueFlag = !0, setTimeout(() => {
    t.iconsQueueFlag = !1;
    const { provider: n, prefix: o } = t, i = t.iconsToLoad;
    delete t.iconsToLoad;
    let s;
    if (!i || !(s = Wt(n)))
      return;
    s.prepare(n, o, i).forEach((c) => {
      so(n, c, (l) => {
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
            }), ao(t, l);
          } catch (a) {
            console.error(a);
          }
        uo(t);
      });
    });
  }));
}
const po = (t, e) => {
  const n = eo(t, !0, De()), o = Yn(n);
  if (!o.pending.length) {
    let l = !0;
    return e && setTimeout(() => {
      l && e(
        o.loaded,
        o.missing,
        o.pending,
        ve
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
    r = a, c = f, s.push(X(a, f));
    const u = i[a] || (i[a] = /* @__PURE__ */ Object.create(null));
    u[f] || (u[f] = []);
  }), o.pending.forEach((l) => {
    const { provider: a, prefix: f, name: u } = l, d = X(a, f), p = d.pendingIcons || (d.pendingIcons = /* @__PURE__ */ new Set());
    p.has(u) || (p.add(u), i[a][f].push(u));
  }), s.forEach((l) => {
    const { provider: a, prefix: f } = l;
    i[a][f].length && fo(l, i[a][f]);
  }), e ? to(e, o, s) : ve;
};
function ho(t, e) {
  const n = {
    ...t
  };
  for (const o in e) {
    const i = e[o], s = typeof i;
    o in Be ? (i === null || i && (s === "string" || s === "number")) && (n[o] = i) : s === typeof n[o] && (n[o] = o === "rotate" ? i % 4 : i);
  }
  return n;
}
const go = /[\s,]+/;
function mo(t, e) {
  e.split(go).forEach((n) => {
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
function yo(t, e = 0) {
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
function vo(t, e) {
  let n = t.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const o in e)
    n += " " + o + '="' + e[o] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + t + "</svg>";
}
function wo(t) {
  return t.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function xo(t) {
  return "data:image/svg+xml," + wo(t);
}
function bo(t) {
  return 'url("' + xo(t) + '")';
}
const we = {
  ...Ne,
  inline: !1
}, _o = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, Co = {
  display: "inline-block"
}, Ut = {
  backgroundColor: "currentColor"
}, Ke = {
  backgroundColor: "transparent"
}, xe = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
}, be = {
  webkitMask: Ut,
  mask: Ut,
  background: Ke
};
for (const t in be) {
  const e = be[t];
  for (const n in xe)
    e[t + n] = xe[n];
}
const Ct = {};
["horizontal", "vertical"].forEach((t) => {
  const e = t.slice(0, 1) + "Flip";
  Ct[t + "-flip"] = e, Ct[t.slice(0, 1) + "-flip"] = e, Ct[t + "Flip"] = e;
});
function _e(t) {
  return t + (t.match(/^[-0-9.]+$/) ? "px" : "");
}
const Ce = (t, e) => {
  const n = ho(we, e), o = { ..._o }, i = e.mode || "svg", s = {}, r = e.style, c = typeof r == "object" && !(r instanceof Array) ? r : {};
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
          typeof m == "string" && mo(n, m);
          break;
        case "color":
          s.color = m;
          break;
        case "rotate":
          typeof m == "string" ? n[g] = yo(m) : typeof m == "number" && (n[g] = m);
          break;
        case "ariaHidden":
        case "aria-hidden":
          m !== !0 && m !== "true" && delete o["aria-hidden"];
          break;
        default: {
          const _ = Ct[g];
          _ ? (m === !0 || m === "true" || m === 1) && (n[_] = !0) : we[g] === void 0 && (o[g] = m);
        }
      }
  }
  const l = Dn(t, n), a = l.attributes;
  if (n.inline && (s.verticalAlign = "-0.125em"), i === "svg") {
    o.style = {
      ...s,
      ...c
    }, Object.assign(o, a);
    let g = 0, m = e.id;
    return typeof m == "string" && (m = m.replace(/-/g, "_")), o.innerHTML = Vn(l.body, m ? () => m + "ID" + g++ : "iconifyVue"), le("svg", o);
  }
  const { body: f, width: u, height: d } = t, p = i === "mask" || (i === "bg" ? !1 : f.indexOf("currentColor") !== -1), h = vo(f, {
    ...a,
    width: u + "",
    height: d + ""
  });
  return o.style = {
    ...s,
    "--svg": bo(h),
    width: _e(a.width),
    height: _e(a.height),
    ...Co,
    ...p ? Ut : Ke,
    ...c
  }, le("span", o);
};
De(!0);
Hn("", Gn);
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
        !Rn(o)) && console.error(n);
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
          Wn(n, i) || console.error(o);
        } catch {
          console.error(o);
        }
      }
  }
}
const ko = {
  ...Tt,
  body: ""
}, rt = Y({
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
      const o = Ln(n);
      if (!o)
        return (!this._loadingIcon || this._loadingIcon.name !== t) && (this.abortLoading(), this._name = "", o !== null && (this._loadingIcon = {
          name: t,
          abort: po([n], () => {
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
      return Ce(ko, t);
    let n = t;
    return e.classes && (n = {
      ...t,
      class: (typeof t.class == "string" ? t.class + " " : "") + e.classes.join(" ")
    }), Ce({
      ...Tt,
      ...e.data
    }, n);
  }
}), mt = (t) => {
  const e = [], n = {};
  return t({ classes: e, styles: n }), {
    class: e,
    style: n
  };
}, kt = (t) => typeof t == "number" ? `${t}px` : t, So = /* @__PURE__ */ Y({
  __name: "CollapseBody",
  props: {
    expanded: { type: Boolean },
    option: {},
    padding: {}
  },
  setup(t) {
    const e = t, n = j(null), o = j(0);
    Ae(() => {
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
    const c = T(() => (Te(() => r()), e.expanded));
    function l() {
      var d;
      const u = new CustomEvent("vui-collapse-expand-changed", { bubbles: !0 });
      (d = n.value) == null || d.dispatchEvent(u);
    }
    const a = T(() => mt(({ styles: u }) => {
      o.value !== void 0 ? c.value ? (u.height = `${o.value}px`, u.opacity = "1", l()) : (u.height = "0", u.opacity = "0") : r();
    })), f = T(() => mt(({ styles: u }) => {
      u.paddingLeft = kt(e.padding || "1rem");
    }));
    return (u, d) => (C(), S("div", dt({ class: "vui-collapse-body" }, a.value), [
      W("div", dt({
        class: "vui-collapse-body__content",
        ref_key: "collapseBodyEl",
        ref: n
      }, f.value), [
        tt(u.$slots, "default", {}, void 0, !0)
      ], 16)
    ], 16));
  }
});
const vt = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [o, i] of e)
    n[o] = i;
  return n;
}, Xe = /* @__PURE__ */ vt(So, [["__scopeId", "data-v-518f14fa"]]), Oo = {
  key: 1,
  class: "vui-cascade-option-title__default-title"
}, Io = /* @__PURE__ */ Y({
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
      e.option.render ? (C(), pt(n, { key: 0 })) : (C(), S("div", Oo, ct(e.option.title), 1))
    ]));
  }
});
const Eo = ["title"], Ao = { class: "vui-cascade-option__string" }, To = { class: "vui-cascade-option__string-left" }, Lo = { class: "vui-cascade-option__tree-btn-space" }, Po = {
  key: 0,
  class: "vui-cascade-oprion__next-btn"
}, Ro = { key: 0 }, Mo = { key: 1 }, Fo = { key: 2 }, jo = /* @__PURE__ */ Y({
  __name: "CascadeOption",
  props: {
    option: {},
    cascade: {}
  },
  emits: ["on-click"],
  setup(t, { emit: e }) {
    const n = t, o = dn("selectedOptions"), i = j(!1), s = T(() => !!n.option.options || !!n.option.getAsyncOptions), r = T(() => !!n.option.children), c = T(() => {
      var p;
      const f = (p = o == null ? void 0 : o.value) == null ? void 0 : p.find((h, g) => g === n.cascade.id);
      if (!f)
        return !1;
      const u = f.id ?? f.value, d = n.option.id || n.option.value;
      return u === d;
    }), l = T(() => mt(({ classes: f }) => {
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
      const d = pn("CascadeOption", !0);
      return C(), S("div", dt({
        class: "vui-cascade-option",
        onClick: a
      }, l.value, {
        title: n.option.title
      }), [
        W("div", Ao, [
          W("div", To, [
            W("div", Lo, [
              r.value ? (C(), S("div", {
                key: 0,
                class: hn(["vui-cascade-option__tree-btn", { "vui-cascade-option__tree-btn--opened": i.value }]),
                onClick: u[0] || (u[0] = gn((p) => i.value = !i.value, ["stop"]))
              }, [
                N(Z(rt), { icon: "bxs:right-arrow" })
              ], 2)) : H("", !0)
            ]),
            N(Io, {
              option: n.option
            }, null, 8, ["option"])
          ]),
          s.value ? (C(), S("div", Po, [
            f.option.loadingState ? f.option.loadingState === "process" ? (C(), S("span", Mo, [
              N(Z(rt), { icon: "ep:loading" })
            ])) : f.option.loadingState === "ready" ? (C(), S("span", Fo, [
              N(Z(rt), { icon: "ep:refresh" })
            ])) : H("", !0) : (C(), S("span", Ro, [
              N(Z(rt), { icon: "ep:arrow-right" })
            ]))
          ])) : H("", !0)
        ]),
        r.value ? (C(), pt(Xe, {
          key: 0,
          expanded: i.value,
          option: n.option
        }, {
          default: lt(() => [
            (C(!0), S(Yt, null, Jt(f.option.children, (p) => (C(), pt(d, {
              key: p.id || p.value,
              cascade: f.cascade,
              option: p,
              onOnClick: u[1] || (u[1] = (h) => e("on-click", h))
            }, null, 8, ["cascade", "option"]))), 128))
          ]),
          _: 1
        }, 8, ["expanded", "option"])) : H("", !0)
      ], 16, Eo);
    };
  }
});
const Do = /* @__PURE__ */ vt(jo, [["__scopeId", "data-v-2b5f9ed8"]]), Bo = { class: "vui-cascade__scrollable" }, No = {
  key: 0,
  class: "vui-cascade__top-space"
}, $o = {
  key: 0,
  class: "vui-cascade__no-data"
}, Vo = {
  key: 0,
  class: "vui-cascade__fog"
}, Ho = /* @__PURE__ */ Y({
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
    const n = t, o = T(() => mt(({ styles: r }) => {
      var c, l, a;
      r.width = kt(((c = n.configs) == null ? void 0 : c.width) || "240px"), (l = n.configs) != null && l.maxHeight ? r.maxHeight = kt(n.configs.maxHeight) : r.height = kt(((a = n.configs) == null ? void 0 : a.height) || "120px"), r.left = `${12 * n.padding}px`;
    }));
    function i(r) {
      n.fog || e("on-select", { cascade: n.cascade, optionParams: r });
    }
    function s() {
      e("on-back");
    }
    return (r, c) => (C(), S("div", dt({ class: "vui-cascade" }, o.value), [
      W("div", Bo, [
        n.canBack ? (C(), S("div", No, [
          W("div", {
            class: "vui-cascade__back-btn",
            onClick: s
          }, [
            tt(r.$slots, "backBtn", at(ut({ back: s })), () => [
              N(Z(rt), { icon: "ep:back" })
            ], !0)
          ])
        ])) : H("", !0),
        tt(r.$slots, "beforeOptions", at(ut({ cascade: n.cascade })), void 0, !0),
        (C(!0), S(Yt, null, Jt(r.cascade.options, (l) => (C(), pt(Do, {
          key: l.id || l.value,
          cascade: r.cascade,
          option: l,
          onOnClick: i
        }, null, 8, ["cascade", "option"]))), 128)),
        tt(r.$slots, "cascadeNoData", at(ut({ cascade: n.cascade })), () => [
          r.cascade.options.length ? H("", !0) : (C(), S("div", $o, ct(n.noDataText || "no data"), 1))
        ], !0),
        N(mn, { class: "vui-cascade__fog-transition" }, {
          default: lt(() => [
            n.fog ? (C(), S("div", Vo)) : H("", !0)
          ]),
          _: 1
        })
      ])
    ], 16));
  }
});
const Wo = /* @__PURE__ */ vt(Ho, [["__scopeId", "data-v-4749e1ce"]]), zo = {
  key: 0,
  class: "vui-cascade-input__label"
}, qo = {
  key: 1,
  class: "vui-cascade-input__placeholder"
}, Qo = {
  key: 2,
  class: "vui-cascade-input__error"
}, Uo = /* @__PURE__ */ Y({
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
    const n = t, o = T(() => n.values.join(n.separator)), i = T(() => mt(({ classes: r }) => {
      n.disabled && r.push("vui-cascade-input--disabled");
    }));
    function s() {
      e("on-click");
    }
    return (r, c) => (C(), S("div", dt({
      class: "vui-cascade-input",
      onClick: s
    }, i.value), [
      o.value ? (C(), S("div", zo, ct(o.value), 1)) : (C(), S("div", qo, ct(n.placeholder), 1)),
      r.errorMsg ? (C(), S("div", Qo, ct(r.errorMsg), 1)) : H("", !0)
    ], 16));
  }
});
const Ko = /* @__PURE__ */ vt(Uo, [["__scopeId", "data-v-c86b87e6"]]), Kt = Math.min, et = Math.max, Ot = Math.round, z = (t) => ({
  x: t,
  y: t
}), Xo = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Go = {
  start: "end",
  end: "start"
};
function ke(t, e, n) {
  return et(t, Kt(e, n));
}
function Pt(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function G(t) {
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
  return ["top", "bottom"].includes(G(t)) ? "y" : "x";
}
function Je(t) {
  return Ge(Mt(t));
}
function Yo(t, e, n) {
  n === void 0 && (n = !1);
  const o = Rt(t), i = Je(t), s = Ye(i);
  let r = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[s] > e.floating[s] && (r = It(r)), [r, It(r)];
}
function Jo(t) {
  const e = It(t);
  return [Xt(t), e, Xt(e)];
}
function Xt(t) {
  return t.replace(/start|end/g, (e) => Go[e]);
}
function Zo(t, e, n) {
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
function ti(t, e, n, o) {
  const i = Rt(t);
  let s = Zo(G(t), n === "start", o);
  return i && (s = s.map((r) => r + "-" + i), e && (s = s.concat(s.map(Xt)))), s;
}
function It(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Xo[e]);
}
function ei(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function ni(t) {
  return typeof t != "number" ? ei(t) : {
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
function Se(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const s = Mt(e), r = Je(e), c = Ye(r), l = G(e), a = s === "y", f = o.x + o.width / 2 - i.width / 2, u = o.y + o.height / 2 - i.height / 2, d = o[c] / 2 - i[c] / 2;
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
const oi = async (t, e, n) => {
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
  } = Se(a, o, l), d = o, p = {}, h = 0;
  for (let g = 0; g < c.length; g++) {
    const {
      name: m,
      fn: _
    } = c[g], {
      x,
      y: v,
      data: E,
      reset: O
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
    if (f = x ?? f, u = v ?? u, p = {
      ...p,
      [m]: {
        ...p[m],
        ...E
      }
    }, O && h <= 50) {
      h++, typeof O == "object" && (O.placement && (d = O.placement), O.rects && (a = O.rects === !0 ? await r.getElementRects({
        reference: t,
        floating: e,
        strategy: i
      }) : O.rects), {
        x: f,
        y: u
      } = Se(a, d, l)), g = -1;
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
    rootBoundary: f = "viewport",
    elementContext: u = "floating",
    altBoundary: d = !1,
    padding: p = 0
  } = Pt(e, t), h = ni(p), m = c[d ? u === "floating" ? "reference" : "floating" : u], _ = Et(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(m))) == null || n ? m : m.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(c.floating)),
    boundary: a,
    rootBoundary: f,
    strategy: l
  })), x = u === "floating" ? {
    ...r.floating,
    x: o,
    y: i
  } : r.reference, v = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c.floating)), E = await (s.isElement == null ? void 0 : s.isElement(v)) ? await (s.getScale == null ? void 0 : s.getScale(v)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, O = Et(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: x,
    offsetParent: v,
    strategy: l
  }) : x);
  return {
    top: (_.top - O.top + h.top) / E.y,
    bottom: (O.bottom - _.bottom + h.bottom) / E.y,
    left: (_.left - O.left + h.left) / E.x,
    right: (O.right - _.right + h.right) / E.x
  };
}
const ii = function(t) {
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
      const _ = G(i), x = G(c) === c, v = await (l.isRTL == null ? void 0 : l.isRTL(a.floating)), E = d || (x || !g ? [It(c)] : Jo(c));
      !d && h !== "none" && E.push(...ti(c, g, h, v));
      const O = [c, ...E], w = await Ze(e, m), I = [];
      let y = ((o = s.flip) == null ? void 0 : o.overflows) || [];
      if (f && I.push(w[_]), u) {
        const A = Yo(i, r, v);
        I.push(w[A[0]], w[A[1]]);
      }
      if (y = [...y, {
        placement: i,
        overflows: I
      }], !I.every((A) => A <= 0)) {
        var b, k;
        const A = (((b = s.flip) == null ? void 0 : b.index) || 0) + 1, M = O[A];
        if (M)
          return {
            data: {
              index: A,
              overflows: y
            },
            reset: {
              placement: M
            }
          };
        let U = (k = y.filter((B) => B.overflows[0] <= 0).sort((B, R) => B.overflows[1] - R.overflows[1])[0]) == null ? void 0 : k.placement;
        if (!U)
          switch (p) {
            case "bestFit": {
              var V;
              const B = (V = y.map((R) => [R.placement, R.overflows.filter((F) => F > 0).reduce((F, K) => F + K, 0)]).sort((R, F) => R[1] - F[1])[0]) == null ? void 0 : V[0];
              B && (U = B);
              break;
            }
            case "initialPlacement":
              U = c;
              break;
          }
        if (i !== U)
          return {
            reset: {
              placement: U
            }
          };
      }
      return {};
    }
  };
};
async function si(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, s = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), r = G(n), c = Rt(n), l = Mt(n) === "y", a = ["left", "top"].includes(r) ? -1 : 1, f = s && l ? -1 : 1, u = Pt(e, t);
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
const ri = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, i = await si(e, t);
      return {
        x: n + i.x,
        y: o + i.y,
        data: i
      };
    }
  };
}, ci = function(t) {
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
      } = Pt(t, e), a = {
        x: n,
        y: o
      }, f = await Ze(e, l), u = Mt(G(i)), d = Ge(u);
      let p = a[d], h = a[u];
      if (s) {
        const m = d === "y" ? "top" : "left", _ = d === "y" ? "bottom" : "right", x = p + f[m], v = p - f[_];
        p = ke(x, p, v);
      }
      if (r) {
        const m = u === "y" ? "top" : "left", _ = u === "y" ? "bottom" : "right", x = h + f[m], v = h - f[_];
        h = ke(x, h, v);
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
function q(t) {
  return tn(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function L(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function Q(t) {
  var e;
  return (e = (tn(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function tn(t) {
  return t instanceof Node || t instanceof L(t).Node;
}
function $(t) {
  return t instanceof Element || t instanceof L(t).Element;
}
function D(t) {
  return t instanceof HTMLElement || t instanceof L(t).HTMLElement;
}
function Oe(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof L(t).ShadowRoot;
}
function wt(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = P(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function li(t) {
  return ["table", "td", "th"].includes(q(t));
}
function se(t) {
  const e = re(), n = P(t);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function ai(t) {
  let e = ot(t);
  for (; D(e) && !Ft(e); ) {
    if (se(e))
      return e;
    e = ot(e);
  }
  return null;
}
function re() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ft(t) {
  return ["html", "body", "#document"].includes(q(t));
}
function P(t) {
  return L(t).getComputedStyle(t);
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
function ot(t) {
  if (q(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    Oe(t) && t.host || // Fallback.
    Q(t)
  );
  return Oe(e) ? e.host : e;
}
function en(t) {
  const e = ot(t);
  return Ft(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : D(e) && wt(e) ? e : en(e);
}
function Gt(t, e, n) {
  var o;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const i = en(t), s = i === ((o = t.ownerDocument) == null ? void 0 : o.body), r = L(i);
  return s ? e.concat(r, r.visualViewport || [], wt(i) ? i : [], r.frameElement && n ? Gt(r.frameElement) : []) : e.concat(i, Gt(i, [], n));
}
function nn(t) {
  const e = P(t);
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
function nt(t) {
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
const ui = /* @__PURE__ */ z(0);
function sn(t) {
  const e = L(t);
  return !re() || !e.visualViewport ? ui : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function fi(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== L(t) ? !1 : e;
}
function yt(t, e, n, o) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const i = t.getBoundingClientRect(), s = on(t);
  let r = z(1);
  e && (o ? $(o) && (r = nt(o)) : r = nt(t));
  const c = fi(s, n, o) ? sn(s) : z(0);
  let l = (i.left + c.x) / r.x, a = (i.top + c.y) / r.y, f = i.width / r.x, u = i.height / r.y;
  if (s) {
    const d = L(s), p = o && $(o) ? L(o) : o;
    let h = d.frameElement;
    for (; h && o && p !== d; ) {
      const g = nt(h), m = h.getBoundingClientRect(), _ = P(h), x = m.left + (h.clientLeft + parseFloat(_.paddingLeft)) * g.x, v = m.top + (h.clientTop + parseFloat(_.paddingTop)) * g.y;
      l *= g.x, a *= g.y, f *= g.x, u *= g.y, l += x, a += v, h = L(h).frameElement;
    }
  }
  return Et({
    width: f,
    height: u,
    x: l,
    y: a
  });
}
function di(t) {
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
  if ((i || !i && o !== "fixed") && ((q(n) !== "body" || wt(s)) && (r = jt(n)), D(n))) {
    const a = yt(n);
    c = nt(n), l.x = a.x + n.clientLeft, l.y = a.y + n.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - r.scrollLeft * c.x + l.x,
    y: e.y * c.y - r.scrollTop * c.y + l.y
  };
}
function pi(t) {
  return Array.from(t.getClientRects());
}
function rn(t) {
  return yt(Q(t)).left + jt(t).scrollLeft;
}
function hi(t) {
  const e = Q(t), n = jt(t), o = t.ownerDocument.body, i = et(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth), s = et(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
  let r = -n.scrollLeft + rn(t);
  const c = -n.scrollTop;
  return P(o).direction === "rtl" && (r += et(e.clientWidth, o.clientWidth) - i), {
    width: i,
    height: s,
    x: r,
    y: c
  };
}
function gi(t, e) {
  const n = L(t), o = Q(t), i = n.visualViewport;
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
function mi(t, e) {
  const n = yt(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, s = D(t) ? nt(t) : z(1), r = t.clientWidth * s.x, c = t.clientHeight * s.y, l = i * s.x, a = o * s.y;
  return {
    width: r,
    height: c,
    x: l,
    y: a
  };
}
function Ie(t, e, n) {
  let o;
  if (e === "viewport")
    o = gi(t, n);
  else if (e === "document")
    o = hi(Q(t));
  else if ($(e))
    o = mi(e, n);
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
  const n = ot(t);
  return n === e || !$(n) || Ft(n) ? !1 : P(n).position === "fixed" || cn(n, e);
}
function yi(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = Gt(t, [], !1).filter((c) => $(c) && q(c) !== "body"), i = null;
  const s = P(t).position === "fixed";
  let r = s ? ot(t) : t;
  for (; $(r) && !Ft(r); ) {
    const c = P(r), l = se(r);
    !l && c.position === "fixed" && (i = null), (s ? !l && !i : !l && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || wt(r) && !l && cn(t, r)) ? o = o.filter((f) => f !== r) : i = c, r = ot(r);
  }
  return e.set(t, o), o;
}
function vi(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = t;
  const r = [...n === "clippingAncestors" ? yi(e, this._c) : [].concat(n), o], c = r[0], l = r.reduce((a, f) => {
    const u = Ie(e, f, i);
    return a.top = et(u.top, a.top), a.right = Kt(u.right, a.right), a.bottom = Kt(u.bottom, a.bottom), a.left = et(u.left, a.left), a;
  }, Ie(e, c, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function wi(t) {
  return nn(t);
}
function xi(t, e, n) {
  const o = D(e), i = Q(e), s = n === "fixed", r = yt(t, !0, s, e);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = z(0);
  if (o || !o && !s)
    if ((q(e) !== "body" || wt(i)) && (c = jt(e)), o) {
      const a = yt(e, !0, s, e);
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
function Ee(t, e) {
  return !D(t) || P(t).position === "fixed" ? null : e ? e(t) : t.offsetParent;
}
function ln(t, e) {
  const n = L(t);
  if (!D(t))
    return n;
  let o = Ee(t, e);
  for (; o && li(o) && P(o).position === "static"; )
    o = Ee(o, e);
  return o && (q(o) === "html" || q(o) === "body" && P(o).position === "static" && !se(o)) ? n : o || ai(t) || n;
}
const bi = async function(t) {
  let {
    reference: e,
    floating: n,
    strategy: o
  } = t;
  const i = this.getOffsetParent || ln, s = this.getDimensions;
  return {
    reference: xi(e, await i(n), o),
    floating: {
      x: 0,
      y: 0,
      ...await s(n)
    }
  };
};
function _i(t) {
  return P(t).direction === "rtl";
}
const Ci = {
  convertOffsetParentRelativeRectToViewportRelativeRect: di,
  getDocumentElement: Q,
  getClippingRect: vi,
  getOffsetParent: ln,
  getElementRects: bi,
  getClientRects: pi,
  getDimensions: wi,
  getScale: nt,
  isElement: $,
  isRTL: _i
}, ki = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: Ci,
    ...n
  }, s = {
    ...i.platform,
    _c: o
  };
  return oi(t, e, {
    ...i,
    platform: s
  });
}, Si = /* @__PURE__ */ Y({
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
    const n = t, o = j(null), i = j(null), s = j(null), r = T(() => ({
      value: "__ROOT_CASCADE__",
      title: "",
      options: n.data
    })), c = j(!1), l = j(""), a = j([]), f = T(() => c.value ? a.value : []), u = j([]);
    function d() {
      v(r.value, 0), u.value = w(n.modelValue || []);
    }
    d(), yn("selectedOptions", u);
    const p = T(() => u.value.map((y) => y.title)), h = (y) => {
      var b;
      return ((b = a.value[a.value.length - 1]) == null ? void 0 : b.id) === y.id;
    };
    function g(y) {
      y && n.disabled || (c.value = y, y || (u.value = w(n.modelValue || [])));
    }
    Ae(() => {
      kn(o.value, _);
      const y = i.value, b = s.value;
      ki(y, b, {
        middleware: [
          ii(),
          ri(4),
          ci()
        ]
      }).then(({ y: k }) => {
        Object.assign(b.style, {
          top: `${k}px`
        });
      });
    });
    function m() {
      g(!0);
    }
    function _() {
      g(!1);
    }
    function x({ cascade: y, optionParams: b }) {
      if (u.value = u.value.slice(0, y.id), u.value[y.id] = b.option, b.last) {
        e("update:modelValue", I(u.value)), Te(() => {
          g(!1);
        });
        return;
      }
      v(b.option);
    }
    function v(y, b) {
      const k = b || a.value.length;
      b !== void 0 && (a.value = a.value.slice(0, b)), a.value.push(E(y, k));
    }
    function E(y, b) {
      return { id: b, options: y.options || [] };
    }
    function O() {
      a.value.pop();
    }
    function w(y) {
      var V, A;
      if (n.transform)
        return n.transform(y, E);
      const b = [], k = y;
      for (let M = 0; M < k.length; M++) {
        const U = k[M], B = (F) => {
          var ce;
          let K = F.find((J) => J.value === U);
          if (K)
            return K;
          for (let J = 0; J < F.length; J++)
            if ((ce = F[J].children) != null && ce.length && (K = B(F[J].children), K))
              return K;
        }, R = B((V = a.value[M]) == null ? void 0 : V.options);
        if (R)
          if (b.push(R), (A = R.options) != null && A.length)
            v(R, M + 1);
          else if (M < k.length - 1) {
            l.value = "Can`t display such a value";
            break;
          } else
            M === k.length - 1 && (l.value = "");
        else {
          l.value = "Can`t display such a value";
          break;
        }
      }
      return b;
    }
    function I(y) {
      return n.reform ? n.reform(y) : y.map((b) => b.value);
    }
    return (y, b) => (C(), S("div", {
      class: "vui-cascader",
      ref_key: "cascaderEl",
      ref: o
    }, [
      W("div", {
        class: "vue-cascader__input-wrapper",
        ref_key: "inputWrapperEl",
        ref: i
      }, [
        N(Ko, {
          values: p.value,
          separator: n.separator,
          placeholder: n.placeholder,
          disabled: n.disabled,
          onOnClick: m
        }, null, 8, ["values", "separator", "placeholder", "disabled"])
      ], 512),
      W("div", {
        class: "vui-cascader__dropdown",
        ref_key: "dropdownEl",
        ref: s
      }, [
        N(vn, {
          tag: "div",
          mode: "in-out",
          name: "vui-cascader-transition"
        }, {
          default: lt(() => [
            (C(!0), S(Yt, null, Jt(f.value, (k, V) => (C(), pt(Wo, {
              key: k.id,
              cascade: k,
              padding: V,
              fog: !h(k),
              canBack: V > 0,
              configs: n.cascadesConfig,
              onOnSelect: x,
              onOnBack: O,
              noDataText: n.noDataText
            }, {
              cascadeNoData: lt(({ cascade: A }) => [
                tt(y.$slots, "cascadeNoData", at(ut(A)), void 0, !0)
              ]),
              beforeOptions: lt(({ cascade: A }) => [
                tt(y.$slots, "beforeOptions", at(ut({ cascade: A, selectedOptions: u.value })), void 0, !0)
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
const Oi = /* @__PURE__ */ vt(Si, [["__scopeId", "data-v-397df68c"]]), Ei = {
  install: (t) => {
    t.component("Cascader", Oi), t.component("CollapseBody", Xe);
  }
};
export {
  Oi as Cascader,
  Xe as CollapseBody,
  mt as createStyleClasses,
  Ei as default
};
