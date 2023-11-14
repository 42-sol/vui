import {
  Fragment,
  Transition,
  TransitionGroup,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createVNode,
  defineComponent,
  getCurrentScope,
  guardReactiveProps,
  inject,
  mergeProps,
  nextTick,
  normalizeClass,
  normalizeProps,
  onMounted,
  onScopeDispose,
  openBlock,
  popScopeId,
  provide,
  pushScopeId,
  ref,
  renderList,
  renderSlot,
  resolveComponent,
  toDisplayString,
  unref,
  watch,
  withCtx,
  withModifiers
} from "./chunk-V7AUFIRV.js";

// node_modules/@42sol/vui/dist/vui.es.js
var Ht = "vui-button";
var ke = defineComponent({
  __name: "Button",
  props: {
    type: { default: "default" }
  },
  setup(t) {
    const n = t, e = computed(() => nt(({ classes: o }) => {
      o.push(Ht, `${Ht}--${n.type}`);
    }));
    return (o, i) => (openBlock(), createElementBlock("button", normalizeProps(guardReactiveProps(e.value)), [
      renderSlot(o.$slots, "default", {}, void 0, true)
    ], 16));
  }
});
var J = (t, n) => {
  const e = t.__vccOpts || t;
  for (const [o, i] of n)
    e[o] = i;
  return e;
};
var Oe = J(ke, [["__scopeId", "data-v-02707fde"]]);
function Ee(t) {
  return getCurrentScope() ? (onScopeDispose(t), true) : false;
}
function Zt(t) {
  return typeof t == "function" ? t() : unref(t);
}
var te = typeof window < "u" && typeof document < "u";
var Ae = Object.prototype.toString;
var Se = (t) => Ae.call(t) === "[object Object]";
var $t = () => {
};
var Be = $e();
function $e() {
  var t;
  return te && ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
function ft(t) {
  var n;
  const e = Zt(t);
  return (n = e == null ? void 0 : e.$el) != null ? n : e;
}
var ee = te ? window : void 0;
function Et(...t) {
  let n, e, o, i;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([e, o, i] = t, n = ee) : [n, e, o, i] = t, !n)
    return $t;
  Array.isArray(e) || (e = [e]), Array.isArray(o) || (o = [o]);
  const s = [], l = () => {
    s.forEach((m) => m()), s.length = 0;
  }, r = (m, c, a, u) => (m.addEventListener(c, a, u), () => m.removeEventListener(c, a, u)), d = watch(
    () => [ft(n), Zt(i)],
    ([m, c]) => {
      if (l(), !m)
        return;
      const a = Se(c) ? { ...c } : c;
      s.push(
        ...e.flatMap((u) => o.map((f) => r(m, u, f, a)))
      );
    },
    { immediate: true, flush: "post" }
  ), p = () => {
    d(), l();
  };
  return Ee(p), p;
}
var jt = false;
function Ve(t, n, e = {}) {
  const { window: o = ee, ignore: i = [], capture: s = true, detectIframe: l = false } = e;
  if (!o)
    return;
  Be && !jt && (jt = true, Array.from(o.document.body.children).forEach((a) => a.addEventListener("click", $t)), o.document.documentElement.addEventListener("click", $t));
  let r = true;
  const d = (a) => i.some((u) => {
    if (typeof u == "string")
      return Array.from(o.document.querySelectorAll(u)).some((f) => f === a.target || a.composedPath().includes(f));
    {
      const f = ft(u);
      return f && (a.target === f || a.composedPath().includes(f));
    }
  }), m = [
    Et(o, "click", (a) => {
      const u = ft(t);
      if (!(!u || u === a.target || a.composedPath().includes(u))) {
        if (a.detail === 0 && (r = !d(a)), !r) {
          r = true;
          return;
        }
        n(a);
      }
    }, { passive: true, capture: s }),
    Et(o, "pointerdown", (a) => {
      const u = ft(t);
      u && (r = !a.composedPath().includes(u) && !d(a));
    }, { passive: true }),
    l && Et(o, "blur", (a) => {
      setTimeout(() => {
        var u;
        const f = ft(t);
        ((u = o.document.activeElement) == null ? void 0 : u.tagName) === "IFRAME" && !(f != null && f.contains(o.document.activeElement)) && n(a);
      }, 0);
    })
  ].filter(Boolean);
  return () => m.forEach((a) => a());
}
var Vt = Math.min;
var it = Math.max;
var _t = Math.round;
var G = (t) => ({
  x: t,
  y: t
});
var Te = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var Re = {
  start: "end",
  end: "start"
};
function Xt(t, n, e) {
  return it(t, Vt(n, e));
}
function xt(t, n) {
  return typeof t == "function" ? t(n) : t;
}
function et(t) {
  return t.split("-")[0];
}
function wt(t) {
  return t.split("-")[1];
}
function ne(t) {
  return t === "x" ? "y" : "x";
}
function oe(t) {
  return t === "y" ? "height" : "width";
}
function Ct(t) {
  return ["top", "bottom"].includes(et(t)) ? "y" : "x";
}
function ie(t) {
  return ne(Ct(t));
}
function Le(t, n, e) {
  e === void 0 && (e = false);
  const o = wt(t), i = ie(t), s = oe(i);
  let l = i === "x" ? o === (e ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return n.reference[s] > n.floating[s] && (l = yt(l)), [l, yt(l)];
}
function Ie(t) {
  const n = yt(t);
  return [Tt(t), n, Tt(n)];
}
function Tt(t) {
  return t.replace(/start|end/g, (n) => Re[n]);
}
function De(t, n, e) {
  const o = ["left", "right"], i = ["right", "left"], s = ["top", "bottom"], l = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return e ? n ? i : o : n ? o : i;
    case "left":
    case "right":
      return n ? s : l;
    default:
      return [];
  }
}
function Pe(t, n, e, o) {
  const i = wt(t);
  let s = De(et(t), e === "start", o);
  return i && (s = s.map((l) => l + "-" + i), n && (s = s.concat(s.map(Tt)))), s;
}
function yt(t) {
  return t.replace(/left|right|bottom|top/g, (n) => Te[n]);
}
function Ne(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Fe(t) {
  return typeof t != "number" ? Ne(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function bt(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
function Yt(t, n, e) {
  let {
    reference: o,
    floating: i
  } = t;
  const s = Ct(n), l = ie(n), r = oe(l), d = et(n), p = s === "y", m = o.x + o.width / 2 - i.width / 2, c = o.y + o.height / 2 - i.height / 2, a = o[r] / 2 - i[r] / 2;
  let u;
  switch (d) {
    case "top":
      u = {
        x: m,
        y: o.y - i.height
      };
      break;
    case "bottom":
      u = {
        x: m,
        y: o.y + o.height
      };
      break;
    case "right":
      u = {
        x: o.x + o.width,
        y: c
      };
      break;
    case "left":
      u = {
        x: o.x - i.width,
        y: c
      };
      break;
    default:
      u = {
        x: o.x,
        y: o.y
      };
  }
  switch (wt(n)) {
    case "start":
      u[l] -= a * (e && p ? -1 : 1);
      break;
    case "end":
      u[l] += a * (e && p ? -1 : 1);
      break;
  }
  return u;
}
var We = async (t, n, e) => {
  const {
    placement: o = "bottom",
    strategy: i = "absolute",
    middleware: s = [],
    platform: l
  } = e, r = s.filter(Boolean), d = await (l.isRTL == null ? void 0 : l.isRTL(n));
  let p = await l.getElementRects({
    reference: t,
    floating: n,
    strategy: i
  }), {
    x: m,
    y: c
  } = Yt(p, o, d), a = o, u = {}, f = 0;
  for (let v = 0; v < r.length; v++) {
    const {
      name: y,
      fn: b
    } = r[v], {
      x: O,
      y: E,
      data: I,
      reset: A
    } = await b({
      x: m,
      y: c,
      initialPlacement: o,
      placement: a,
      strategy: i,
      middlewareData: u,
      rects: p,
      platform: l,
      elements: {
        reference: t,
        floating: n
      }
    });
    if (m = O ?? m, c = E ?? c, u = {
      ...u,
      [y]: {
        ...u[y],
        ...I
      }
    }, A && f <= 50) {
      f++, typeof A == "object" && (A.placement && (a = A.placement), A.rects && (p = A.rects === true ? await l.getElementRects({
        reference: t,
        floating: n,
        strategy: i
      }) : A.rects), {
        x: m,
        y: c
      } = Yt(p, a, d)), v = -1;
      continue;
    }
  }
  return {
    x: m,
    y: c,
    placement: a,
    strategy: i,
    middlewareData: u
  };
};
async function se(t, n) {
  var e;
  n === void 0 && (n = {});
  const {
    x: o,
    y: i,
    platform: s,
    rects: l,
    elements: r,
    strategy: d
  } = t, {
    boundary: p = "clippingAncestors",
    rootBoundary: m = "viewport",
    elementContext: c = "floating",
    altBoundary: a = false,
    padding: u = 0
  } = xt(n, t), f = Fe(u), y = r[a ? c === "floating" ? "reference" : "floating" : c], b = bt(await s.getClippingRect({
    element: (e = await (s.isElement == null ? void 0 : s.isElement(y))) == null || e ? y : y.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(r.floating)),
    boundary: p,
    rootBoundary: m,
    strategy: d
  })), O = c === "floating" ? {
    ...l.floating,
    x: o,
    y: i
  } : l.reference, E = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(r.floating)), I = await (s.isElement == null ? void 0 : s.isElement(E)) ? await (s.getScale == null ? void 0 : s.getScale(E)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, A = bt(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: O,
    offsetParent: E,
    strategy: d
  }) : O);
  return {
    top: (b.top - A.top + f.top) / I.y,
    bottom: (A.bottom - b.bottom + f.bottom) / I.y,
    left: (b.left - A.left + f.left) / I.x,
    right: (A.right - b.right + f.right) / I.x
  };
}
var Me = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(n) {
      var e, o;
      const {
        placement: i,
        middlewareData: s,
        rects: l,
        initialPlacement: r,
        platform: d,
        elements: p
      } = n, {
        mainAxis: m = true,
        crossAxis: c = true,
        fallbackPlacements: a,
        fallbackStrategy: u = "bestFit",
        fallbackAxisSideDirection: f = "none",
        flipAlignment: v = true,
        ...y
      } = xt(t, n);
      if ((e = s.arrow) != null && e.alignmentOffset)
        return {};
      const b = et(i), O = et(r) === r, E = await (d.isRTL == null ? void 0 : d.isRTL(p.floating)), I = a || (O || !v ? [yt(r)] : Ie(r));
      !a && f !== "none" && I.push(...Pe(r, v, f, E));
      const A = [r, ...I], X = await se(n, y), Z = [];
      let tt = ((o = s.flip) == null ? void 0 : o.overflows) || [];
      if (m && Z.push(X[b]), c) {
        const P = Le(i, l, E);
        Z.push(X[P[0]], X[P[1]]);
      }
      if (tt = [...tt, {
        placement: i,
        overflows: Z
      }], !Z.every((P) => P <= 0)) {
        var rt, ht;
        const P = (((rt = s.flip) == null ? void 0 : rt.index) || 0) + 1, h = A[P];
        if (h)
          return {
            data: {
              index: P,
              overflows: tt
            },
            reset: {
              placement: h
            }
          };
        let g = (ht = tt.filter((_) => _.overflows[0] <= 0).sort((_, S) => _.overflows[1] - S.overflows[1])[0]) == null ? void 0 : ht.placement;
        if (!g)
          switch (u) {
            case "bestFit": {
              var ut;
              const _ = (ut = tt.map((S) => [S.placement, S.overflows.filter((w) => w > 0).reduce((w, $) => w + $, 0)]).sort((S, w) => S[1] - w[1])[0]) == null ? void 0 : ut[0];
              _ && (g = _);
              break;
            }
            case "initialPlacement":
              g = r;
              break;
          }
        if (i !== g)
          return {
            reset: {
              placement: g
            }
          };
      }
      return {};
    }
  };
};
async function He(t, n) {
  const {
    placement: e,
    platform: o,
    elements: i
  } = t, s = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), l = et(e), r = wt(e), d = Ct(e) === "y", p = ["left", "top"].includes(l) ? -1 : 1, m = s && d ? -1 : 1, c = xt(n, t);
  let {
    mainAxis: a,
    crossAxis: u,
    alignmentAxis: f
  } = typeof c == "number" ? {
    mainAxis: c,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...c
  };
  return r && typeof f == "number" && (u = r === "end" ? f * -1 : f), d ? {
    x: u * m,
    y: a * p
  } : {
    x: a * p,
    y: u * m
  };
}
var je = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(n) {
      const {
        x: e,
        y: o
      } = n, i = await He(n, t);
      return {
        x: e + i.x,
        y: o + i.y,
        data: i
      };
    }
  };
};
var Xe = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(n) {
      const {
        x: e,
        y: o,
        placement: i
      } = n, {
        mainAxis: s = true,
        crossAxis: l = false,
        limiter: r = {
          fn: (y) => {
            let {
              x: b,
              y: O
            } = y;
            return {
              x: b,
              y: O
            };
          }
        },
        ...d
      } = xt(t, n), p = {
        x: e,
        y: o
      }, m = await se(n, d), c = Ct(et(i)), a = ne(c);
      let u = p[a], f = p[c];
      if (s) {
        const y = a === "y" ? "top" : "left", b = a === "y" ? "bottom" : "right", O = u + m[y], E = u - m[b];
        u = Xt(O, u, E);
      }
      if (l) {
        const y = c === "y" ? "top" : "left", b = c === "y" ? "bottom" : "right", O = f + m[y], E = f - m[b];
        f = Xt(O, f, E);
      }
      const v = r.fn({
        ...n,
        [a]: u,
        [c]: f
      });
      return {
        ...v,
        data: {
          x: v.x - e,
          y: v.y - o
        }
      };
    }
  };
};
function K(t) {
  return ce(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function T(t) {
  var n;
  return (t == null || (n = t.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function Q(t) {
  var n;
  return (n = (ce(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : n.documentElement;
}
function ce(t) {
  return t instanceof Node || t instanceof T(t).Node;
}
function j(t) {
  return t instanceof Element || t instanceof T(t).Element;
}
function F(t) {
  return t instanceof HTMLElement || t instanceof T(t).HTMLElement;
}
function zt(t) {
  return typeof ShadowRoot > "u" ? false : t instanceof ShadowRoot || t instanceof T(t).ShadowRoot;
}
function vt(t) {
  const {
    overflow: n,
    overflowX: e,
    overflowY: o,
    display: i
  } = L(t);
  return /auto|scroll|overlay|hidden|clip/.test(n + o + e) && !["inline", "contents"].includes(i);
}
function Ye(t) {
  return ["table", "td", "th"].includes(K(t));
}
function Nt(t) {
  const n = Ft(), e = L(t);
  return e.transform !== "none" || e.perspective !== "none" || (e.containerType ? e.containerType !== "normal" : false) || !n && (e.backdropFilter ? e.backdropFilter !== "none" : false) || !n && (e.filter ? e.filter !== "none" : false) || ["transform", "perspective", "filter"].some((o) => (e.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (e.contain || "").includes(o));
}
function ze(t) {
  let n = at(t);
  for (; F(n) && !kt(n); ) {
    if (Nt(n))
      return n;
    n = at(n);
  }
  return null;
}
function Ft() {
  return typeof CSS > "u" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter", "none");
}
function kt(t) {
  return ["html", "body", "#document"].includes(K(t));
}
function L(t) {
  return T(t).getComputedStyle(t);
}
function Ot(t) {
  return j(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function at(t) {
  if (K(t) === "html")
    return t;
  const n = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    zt(t) && t.host || // Fallback.
    Q(t)
  );
  return zt(n) ? n.host : n;
}
function le(t) {
  const n = at(t);
  return kt(n) ? t.ownerDocument ? t.ownerDocument.body : t.body : F(n) && vt(n) ? n : le(n);
}
function Rt(t, n, e) {
  var o;
  n === void 0 && (n = []), e === void 0 && (e = true);
  const i = le(t), s = i === ((o = t.ownerDocument) == null ? void 0 : o.body), l = T(i);
  return s ? n.concat(l, l.visualViewport || [], vt(i) ? i : [], l.frameElement && e ? Rt(l.frameElement) : []) : n.concat(i, Rt(i, [], e));
}
function ae(t) {
  const n = L(t);
  let e = parseFloat(n.width) || 0, o = parseFloat(n.height) || 0;
  const i = F(t), s = i ? t.offsetWidth : e, l = i ? t.offsetHeight : o, r = _t(e) !== s || _t(o) !== l;
  return r && (e = s, o = l), {
    width: e,
    height: o,
    $: r
  };
}
function re(t) {
  return j(t) ? t : t.contextElement;
}
function st(t) {
  const n = re(t);
  if (!F(n))
    return G(1);
  const e = n.getBoundingClientRect(), {
    width: o,
    height: i,
    $: s
  } = ae(n);
  let l = (s ? _t(e.width) : e.width) / o, r = (s ? _t(e.height) : e.height) / i;
  return (!l || !Number.isFinite(l)) && (l = 1), (!r || !Number.isFinite(r)) && (r = 1), {
    x: l,
    y: r
  };
}
var qe = G(0);
function ue(t) {
  const n = T(t);
  return !Ft() || !n.visualViewport ? qe : {
    x: n.visualViewport.offsetLeft,
    y: n.visualViewport.offsetTop
  };
}
function Ge(t, n, e) {
  return n === void 0 && (n = false), !e || n && e !== T(t) ? false : n;
}
function mt(t, n, e, o) {
  n === void 0 && (n = false), e === void 0 && (e = false);
  const i = t.getBoundingClientRect(), s = re(t);
  let l = G(1);
  n && (o ? j(o) && (l = st(o)) : l = st(t));
  const r = Ge(s, e, o) ? ue(s) : G(0);
  let d = (i.left + r.x) / l.x, p = (i.top + r.y) / l.y, m = i.width / l.x, c = i.height / l.y;
  if (s) {
    const a = T(s), u = o && j(o) ? T(o) : o;
    let f = a.frameElement;
    for (; f && o && u !== a; ) {
      const v = st(f), y = f.getBoundingClientRect(), b = L(f), O = y.left + (f.clientLeft + parseFloat(b.paddingLeft)) * v.x, E = y.top + (f.clientTop + parseFloat(b.paddingTop)) * v.y;
      d *= v.x, p *= v.y, m *= v.x, c *= v.y, d += O, p += E, f = T(f).frameElement;
    }
  }
  return bt({
    width: m,
    height: c,
    x: d,
    y: p
  });
}
function Ke(t) {
  let {
    rect: n,
    offsetParent: e,
    strategy: o
  } = t;
  const i = F(e), s = Q(e);
  if (e === s)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, r = G(1);
  const d = G(0);
  if ((i || !i && o !== "fixed") && ((K(e) !== "body" || vt(s)) && (l = Ot(e)), F(e))) {
    const p = mt(e);
    r = st(e), d.x = p.x + e.clientLeft, d.y = p.y + e.clientTop;
  }
  return {
    width: n.width * r.x,
    height: n.height * r.y,
    x: n.x * r.x - l.scrollLeft * r.x + d.x,
    y: n.y * r.y - l.scrollTop * r.y + d.y
  };
}
function Ue(t) {
  return Array.from(t.getClientRects());
}
function de(t) {
  return mt(Q(t)).left + Ot(t).scrollLeft;
}
function Je(t) {
  const n = Q(t), e = Ot(t), o = t.ownerDocument.body, i = it(n.scrollWidth, n.clientWidth, o.scrollWidth, o.clientWidth), s = it(n.scrollHeight, n.clientHeight, o.scrollHeight, o.clientHeight);
  let l = -e.scrollLeft + de(t);
  const r = -e.scrollTop;
  return L(o).direction === "rtl" && (l += it(n.clientWidth, o.clientWidth) - i), {
    width: i,
    height: s,
    x: l,
    y: r
  };
}
function Qe(t, n) {
  const e = T(t), o = Q(t), i = e.visualViewport;
  let s = o.clientWidth, l = o.clientHeight, r = 0, d = 0;
  if (i) {
    s = i.width, l = i.height;
    const p = Ft();
    (!p || p && n === "fixed") && (r = i.offsetLeft, d = i.offsetTop);
  }
  return {
    width: s,
    height: l,
    x: r,
    y: d
  };
}
function Ze(t, n) {
  const e = mt(t, true, n === "fixed"), o = e.top + t.clientTop, i = e.left + t.clientLeft, s = F(t) ? st(t) : G(1), l = t.clientWidth * s.x, r = t.clientHeight * s.y, d = i * s.x, p = o * s.y;
  return {
    width: l,
    height: r,
    x: d,
    y: p
  };
}
function qt(t, n, e) {
  let o;
  if (n === "viewport")
    o = Qe(t, e);
  else if (n === "document")
    o = Je(Q(t));
  else if (j(n))
    o = Ze(n, e);
  else {
    const i = ue(t);
    o = {
      ...n,
      x: n.x - i.x,
      y: n.y - i.y
    };
  }
  return bt(o);
}
function fe(t, n) {
  const e = at(t);
  return e === n || !j(e) || kt(e) ? false : L(e).position === "fixed" || fe(e, n);
}
function tn(t, n) {
  const e = n.get(t);
  if (e)
    return e;
  let o = Rt(t, [], false).filter((r) => j(r) && K(r) !== "body"), i = null;
  const s = L(t).position === "fixed";
  let l = s ? at(t) : t;
  for (; j(l) && !kt(l); ) {
    const r = L(l), d = Nt(l);
    !d && r.position === "fixed" && (i = null), (s ? !d && !i : !d && r.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || vt(l) && !d && fe(t, l)) ? o = o.filter((m) => m !== l) : i = r, l = at(l);
  }
  return n.set(t, o), o;
}
function en(t) {
  let {
    element: n,
    boundary: e,
    rootBoundary: o,
    strategy: i
  } = t;
  const l = [...e === "clippingAncestors" ? tn(n, this._c) : [].concat(e), o], r = l[0], d = l.reduce((p, m) => {
    const c = qt(n, m, i);
    return p.top = it(c.top, p.top), p.right = Vt(c.right, p.right), p.bottom = Vt(c.bottom, p.bottom), p.left = it(c.left, p.left), p;
  }, qt(n, r, i));
  return {
    width: d.right - d.left,
    height: d.bottom - d.top,
    x: d.left,
    y: d.top
  };
}
function nn(t) {
  return ae(t);
}
function on(t, n, e) {
  const o = F(n), i = Q(n), s = e === "fixed", l = mt(t, true, s, n);
  let r = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const d = G(0);
  if (o || !o && !s)
    if ((K(n) !== "body" || vt(i)) && (r = Ot(n)), o) {
      const p = mt(n, true, s, n);
      d.x = p.x + n.clientLeft, d.y = p.y + n.clientTop;
    } else
      i && (d.x = de(i));
  return {
    x: l.left + r.scrollLeft - d.x,
    y: l.top + r.scrollTop - d.y,
    width: l.width,
    height: l.height
  };
}
function Gt(t, n) {
  return !F(t) || L(t).position === "fixed" ? null : n ? n(t) : t.offsetParent;
}
function pe(t, n) {
  const e = T(t);
  if (!F(t))
    return e;
  let o = Gt(t, n);
  for (; o && Ye(o) && L(o).position === "static"; )
    o = Gt(o, n);
  return o && (K(o) === "html" || K(o) === "body" && L(o).position === "static" && !Nt(o)) ? e : o || ze(t) || e;
}
var sn = async function(t) {
  let {
    reference: n,
    floating: e,
    strategy: o
  } = t;
  const i = this.getOffsetParent || pe, s = this.getDimensions;
  return {
    reference: on(n, await i(e), o),
    floating: {
      x: 0,
      y: 0,
      ...await s(e)
    }
  };
};
function cn(t) {
  return L(t).direction === "rtl";
}
var ln = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ke,
  getDocumentElement: Q,
  getClippingRect: en,
  getOffsetParent: pe,
  getElementRects: sn,
  getClientRects: Ue,
  getDimensions: nn,
  getScale: st,
  isElement: j,
  isRTL: cn
};
var an = (t, n, e) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: ln,
    ...e
  }, s = {
    ...i.platform,
    _c: o
  };
  return We(t, n, {
    ...i,
    platform: s
  });
};
var nt = (t) => {
  const n = [], e = {};
  return t({ classes: n, styles: e }), {
    class: n,
    style: e
  };
};
var gt = (t) => typeof t == "number" ? `${t}px` : t;
var rn = defineComponent({
  __name: "CollapseBody",
  props: {
    expanded: { type: Boolean },
    padding: {}
  },
  setup(t) {
    const n = t, e = ref(null), o = ref(0);
    onMounted(() => {
      var c, a;
      (c = e.value) == null || c.addEventListener("vui-collapse-expand-changed", i), o.value = ((a = e.value) == null ? void 0 : a.offsetHeight) || 0;
    });
    function i(c) {
      c.target !== e.value && s();
    }
    function s() {
      o.value = void 0;
    }
    function l() {
      var c;
      n.expanded ? o.value = ((c = e.value) == null ? void 0 : c.offsetHeight) || 0 : o.value = 0;
    }
    const r = computed(() => (nextTick(() => l()), n.expanded));
    function d() {
      var a;
      const c = new CustomEvent("vui-collapse-expand-changed", { bubbles: true });
      (a = e.value) == null || a.dispatchEvent(c);
    }
    const p = computed(() => nt(({ styles: c }) => {
      o.value !== void 0 ? r.value ? (c.height = `${o.value}px`, c.opacity = "1", d()) : (c.height = "0", c.opacity = "0") : l();
    })), m = computed(() => nt(({ styles: c }) => {
      c.paddingLeft = gt(n.padding || "1rem");
    }));
    return (c, a) => (openBlock(), createElementBlock("div", mergeProps({ class: "vui-collapse-body" }, p.value), [
      createBaseVNode("div", mergeProps({
        ref_key: "collapseBodyEl",
        ref: e,
        class: "vui-collapse-body__content"
      }, m.value), [
        renderSlot(c.$slots, "default", {}, void 0, true)
      ], 16)
    ], 16));
  }
});
var me = J(rn, [["__scopeId", "data-v-9c970d56"]]);
var un = { class: "vui-cascade-option-title" };
var dn = { class: "vui-cascade-option-title__default-title" };
var fn = defineComponent({
  __name: "CascadeOptionTitle",
  props: {
    option: {}
  },
  setup(t) {
    const n = t, e = () => {
      var o, i;
      return (i = (o = n.option).render) == null ? void 0 : i.call(o);
    };
    return (o, i) => (openBlock(), createElementBlock("div", un, [
      createVNode(e),
      createBaseVNode("div", dn, toDisplayString(n.option.title), 1)
    ]));
  }
});
var pn = J(fn, [["__scopeId", "data-v-6a87982d"]]);
var ve = (t) => (pushScopeId("data-v-b71a0c22"), t = t(), popScopeId(), t);
var mn = ["title"];
var vn = { class: "vui-cascade-option__string" };
var hn = { class: "vui-cascade-option__string-left" };
var gn = { class: "vui-cascade-option__tree-btn-space" };
var _n = ve(() => createBaseVNode("i", { "_i-bxs:right-arrow": "" }, null, -1));
var yn = [
  _n
];
var bn = {
  key: 0,
  class: "vui-cascade-oprion__next-btn"
};
var xn = ve(() => createBaseVNode("div", { "_i-ep:arrow-right": "" }, null, -1));
var wn = [
  xn
];
var Cn = defineComponent({
  __name: "CascadeOption",
  props: {
    option: {},
    cascade: {}
  },
  emits: ["on-click"],
  setup(t, { emit: n }) {
    const e = t, o = inject("selectedOptions"), i = n, s = ref(false), l = computed(() => !!e.option.options || !!e.option.getAsyncOptions), r = computed(() => !!e.option.children), d = computed(() => {
      var f;
      const c = (f = o == null ? void 0 : o.value) == null ? void 0 : f.find((v, y) => y === e.cascade.id);
      if (!c)
        return false;
      const a = c.id ?? c.value, u = e.option.id || e.option.value;
      return a === u;
    }), p = computed(() => nt(({ classes: c }) => {
      d.value && c.push("vui-cascade-option--selected");
    }));
    function m() {
      var f, v;
      const c = { option: e.option, last: !l.value };
      let a = true;
      const u = () => a = false;
      (v = (f = e.option).onClick) == null || v.call(f, { preventEmit: u, option: e.option }), a && i("on-click", c);
    }
    return (c, a) => {
      const u = resolveComponent("cascade-option", true);
      return openBlock(), createElementBlock("div", mergeProps({ class: "vui-cascade-option" }, p.value, {
        title: e.option.title,
        onClick: m
      }), [
        createBaseVNode("div", vn, [
          createBaseVNode("div", hn, [
            createBaseVNode("div", gn, [
              r.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(["vui-cascade-option__tree-btn", { "vui-cascade-option__tree-btn--opened": s.value }]),
                onClick: a[0] || (a[0] = withModifiers((f) => s.value = !s.value, ["stop"]))
              }, yn, 2)) : createCommentVNode("", true)
            ]),
            createVNode(pn, {
              option: e.option
            }, null, 8, ["option"])
          ]),
          l.value ? (openBlock(), createElementBlock("div", bn, wn)) : createCommentVNode("", true)
        ]),
        r.value ? (openBlock(), createBlock(me, {
          key: 0,
          expanded: s.value,
          option: e.option
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(c.option.children, (f) => (openBlock(), createBlock(u, {
              key: f.id || f.value,
              cascade: c.cascade,
              option: f,
              onOnClick: a[1] || (a[1] = (v) => i("on-click", v))
            }, null, 8, ["cascade", "option"]))), 128))
          ]),
          _: 1
        }, 8, ["expanded", "option"])) : createCommentVNode("", true)
      ], 16, mn);
    };
  }
});
var kn = J(Cn, [["__scopeId", "data-v-b71a0c22"]]);
var On = { class: "input-immitator__wrapper" };
var En = defineComponent({
  __name: "InputImmitator",
  props: {
    focused: { type: Boolean, default: false },
    error: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false }
  },
  setup(t) {
    const n = t, e = computed(() => nt(({ classes: o }) => {
      n.focused && o.push("input-immitator--focused"), n.error && o.push("input-immitator--error"), n.disabled && o.push("input-immitator--disabled");
    }));
    return (o, i) => (openBlock(), createElementBlock("div", mergeProps({ class: "input-immitator" }, e.value), [
      renderSlot(o.$slots, "left", {}, void 0, true),
      createBaseVNode("div", On, [
        renderSlot(o.$slots, "default", {}, void 0, true)
      ]),
      renderSlot(o.$slots, "right", {}, void 0, true)
    ], 16));
  }
});
var An = J(En, [["__scopeId", "data-v-0f8279c3"]]);
var Sn = (t) => (pushScopeId("data-v-90848a64"), t = t(), popScopeId(), t);
var Bn = { class: "vui-input__wrapper" };
var $n = ["type", "value", "placeholder", "disabled", "readonly"];
var Vn = Sn(() => createBaseVNode("i", { "_i-material-symbols:close": "" }, null, -1));
var Tn = [
  Vn
];
var At = "vui-input";
var Rn = defineComponent({
  __name: "Input",
  props: {
    modelValue: {},
    type: { default: "text" },
    clearable: { type: Boolean, default: false },
    placeholder: {},
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    error: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "on-input", "on-change", "on-focus", "on-blur"],
  setup(t, { expose: n, emit: e }) {
    const o = t, i = e, s = ref(null), l = ref(false), r = computed(() => nt(({ classes: v }) => {
      v.push(At), o.disabled && v.push(`${At}--disabled`), o.readonly && v.push(`${At}--readonly`);
    }));
    function d(v) {
      var b;
      const y = (b = v.target) == null ? void 0 : b.value;
      m(y);
    }
    function p() {
      m("");
    }
    function m(v) {
      const y = v !== o.modelValue;
      i("update:modelValue", v, o.modelValue), i("on-input", v, o.modelValue), y && i("on-change", v, o.modelValue);
    }
    function c() {
      l.value = true, i("on-focus");
    }
    function a() {
      l.value = false, i("on-blur");
    }
    function u() {
      var v;
      (v = s.value) == null || v.focus();
    }
    function f() {
      var v;
      (v = s.value) == null || v.blur();
    }
    return n({
      focus: u,
      blur: f
    }), (v, y) => (openBlock(), createElementBlock("div", normalizeProps(guardReactiveProps(r.value)), [
      createVNode(An, {
        focused: l.value,
        error: o.error,
        disabled: o.disabled
      }, {
        left: withCtx(() => []),
        right: withCtx(() => []),
        default: withCtx(() => [
          createBaseVNode("div", Bn, [
            createBaseVNode("input", {
              ref_key: "inputEl",
              ref: s,
              class: "vui-input__input",
              type: o.type,
              value: o.modelValue,
              placeholder: o.placeholder,
              disabled: o.disabled,
              readonly: o.readonly,
              onInput: d,
              onFocus: c,
              onBlur: a
            }, null, 40, $n),
            o.clearable && o.modelValue ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "vui-input__clear-btn",
              onClick: p
            }, Tn)) : createCommentVNode("", true)
          ])
        ]),
        _: 1
      }, 8, ["focused", "error", "disabled"])
    ], 16));
  }
});
var Wt = J(Rn, [["__scopeId", "data-v-90848a64"]]);
var Ln = (t) => (pushScopeId("data-v-c1ffb626"), t = t(), popScopeId(), t);
var In = { class: "vui-cascade__scrollable" };
var Dn = { class: "vui-cascade__top-space" };
var Pn = Ln(() => createBaseVNode("i", { "_i-ep:back": "" }, null, -1));
var Nn = [
  Pn
];
var Fn = { class: "flex items-center justify-center w-full" };
var Wn = { key: 0 };
var Mn = { key: 0 };
var Hn = { class: "vui-cascade__no-data" };
var jn = {
  key: 0,
  class: "vui-cascade__fog"
};
var Xn = defineComponent({
  __name: "Cascade",
  props: {
    cascade: {},
    padding: {},
    fog: { type: Boolean },
    canBack: { type: Boolean },
    configs: {},
    noDataText: {},
    filterable: { type: Boolean },
    sortable: { type: Boolean }
  },
  emits: ["on-select", "on-back"],
  setup(t, { emit: n }) {
    const e = t, o = n, i = ref(""), s = ref(null);
    function l() {
      s.value === "asc" ? s.value = "desc" : s.value === "desc" ? s.value = null : s.value || (s.value = "asc");
    }
    const r = computed(() => {
      let c = [...e.cascade.options];
      return i.value && (c = c.filter((a) => a.title.startsWith(i.value))), e.sortable && (s.value === "desc" ? c = c.sort((a, u) => u.title.localeCompare(a.title)) : s.value === "asc" && (c = c.sort((a, u) => a.title.localeCompare(u.title)))), c;
    }), d = computed(() => nt(({ styles: c }) => {
      var a, u, f;
      c.width = gt(((a = e.configs) == null ? void 0 : a.width) || "240px"), (u = e.configs) != null && u.maxHeight ? c.maxHeight = gt(e.configs.maxHeight) : c.height = gt(((f = e.configs) == null ? void 0 : f.height) || "120px"), c.left = `${12 * e.padding}px`;
    }));
    function p(c) {
      e.fog || o("on-select", { cascade: e.cascade, optionParams: c });
    }
    function m() {
      o("on-back");
    }
    return (c, a) => (openBlock(), createElementBlock("div", mergeProps({ class: "vui-cascade" }, d.value), [
      createBaseVNode("div", In, [
        createBaseVNode("div", Dn, [
          renderSlot(c.$slots, "backBtn", normalizeProps(guardReactiveProps({ back: m })), () => [
            e.canBack ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "vui-cascade__back-btn",
              onClick: m
            }, Nn)) : createCommentVNode("", true)
          ], true),
          e.sortable ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(["vui-cascade__sort-btn", s.value ? "vui-cascade__sort-btn--selected" : ""]),
            onClick: l
          }, [
            createBaseVNode("i", {
              class: normalizeClass(s.value === "desc" ? "i-ri:sort-desc" : "i-ri:sort-asc")
            }, null, 2)
          ], 2)) : createCommentVNode("", true),
          e.filterable ? (openBlock(), createBlock(Wt, {
            key: 1,
            class: "w-full",
            modelValue: i.value,
            "onUpdate:modelValue": a[0] || (a[0] = (u) => i.value = u),
            clearable: ""
          }, null, 8, ["modelValue"])) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", Fn, [
          renderSlot(c.$slots, "cascadeLoading", normalizeProps(guardReactiveProps({ cascade: e.cascade })), () => [
            c.cascade.loadStatus === "process" ? (openBlock(), createElementBlock("span", Wn, "Loading...")) : createCommentVNode("", true)
          ], true),
          c.cascade.loadStatus === "error" ? (openBlock(), createElementBlock("span", Mn, "Data hasn't been loaded")) : createCommentVNode("", true)
        ]),
        renderSlot(c.$slots, "beforeOptions", normalizeProps(guardReactiveProps({ cascade: e.cascade })), void 0, true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(r.value, (u) => (openBlock(), createBlock(kn, {
          key: u.id || u.value,
          cascade: c.cascade,
          option: u,
          onOnClick: p
        }, null, 8, ["cascade", "option"]))), 128)),
        c.cascade.loadStatus != "process" && !c.cascade.options.length ? renderSlot(c.$slots, "cascadeNoData", normalizeProps(mergeProps({ key: 0 }, { cascade: e.cascade })), () => [
          createBaseVNode("div", Hn, toDisplayString(e.noDataText || "no data"), 1)
        ], true) : createCommentVNode("", true),
        createVNode(Transition, { class: "vui-cascade__fog-transition" }, {
          default: withCtx(() => [
            e.fog ? (openBlock(), createElementBlock("div", jn)) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ])
    ], 16));
  }
});
var Yn = J(Xn, [["__scopeId", "data-v-c1ffb626"]]);
var zn = defineComponent({
  __name: "Cascader",
  props: {
    modelValue: {},
    data: {},
    separator: { default: "/" },
    placeholder: { default: "" },
    clearable: { type: Boolean },
    disabled: { type: Boolean },
    cascadesConfig: {},
    transform: {},
    reform: {},
    filterable: { type: Boolean },
    filterableCascades: { type: Boolean },
    sortableCascades: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: n }) {
    const e = t, o = n, i = ref(null), s = ref(null), l = ref(null), r = ref(null), d = ref(false), p = ref(""), m = ref([]), c = computed(() => d.value ? m.value : []), a = ref([]);
    provide("selectedOptions", a);
    const u = ref(""), f = computed(() => ({
      value: "__ROOT_CASCADE__",
      title: "",
      options: e.data
    }));
    function v() {
      X(f.value, 0), a.value = ut(e.modelValue || []);
    }
    v(), watch(() => e.data, () => {
      v();
    }), watch(() => a.value, () => {
      const h = a.value.map((g) => g.title);
      u.value = h.join(e.separator);
    });
    const y = (h) => {
      var g;
      return ((g = m.value[m.value.length - 1]) == null ? void 0 : g.id) === h.id;
    };
    function b(h) {
      h && e.disabled || (d.value = h, h || (a.value = ut(e.modelValue || [])));
    }
    onMounted(() => {
      Ve(i.value, I);
      const h = s.value, g = r.value;
      an(h, g, {
        middleware: [
          Me(),
          je(4),
          Xe()
        ]
      }).then(({ y: _ }) => {
        Object.assign(g.style, {
          top: `${_}px`
        });
      });
    });
    function O(h) {
      var w, $, Y;
      if (!h)
        return ht();
      const g = h.split(e.separator), _ = [...a.value];
      rt();
      const S = () => a.value = _;
      for (let z = 0; z < g.length; z++) {
        const W = ($ = (w = m.value[z]) == null ? void 0 : w.options) == null ? void 0 : $.find((N) => N.title === g[z]);
        if (!W) {
          S();
          break;
        }
        A({
          cascade: m.value[z],
          optionParams: {
            option: W,
            last: !((Y = W.options) != null && Y.length || W.getAsyncOptions)
          }
        });
      }
    }
    function E() {
      b(true);
    }
    function I() {
      b(false);
    }
    function A({ cascade: h, optionParams: g }) {
      if (a.value = a.value.slice(0, h.id), a.value[h.id] = g.option, g.last) {
        o("update:modelValue", P(a.value)), nextTick(() => {
          b(false);
        });
        return;
      }
      X(g.option);
    }
    function X(h, g) {
      const _ = g ?? m.value.length;
      g !== void 0 && (m.value = m.value.slice(0, g)), m.value.push(Z(h, _));
    }
    function Z(h, g) {
      const _ = { id: g, options: h.options || [], loadStatus: void 0 };
      return h.getAsyncOptions && (_.loadStatus = "process", h.getAsyncOptions().then((S) => {
        _.loadStatus = "success", S.forEach((w) => {
          const $ = _.options.findIndex((Y) => Y.id ? Y.id === w.id : Y.value === w.value);
          $ >= 0 && _.options.splice($, 1), _.options.push(w);
        });
      }).catch(() => {
        _.loadStatus = "error";
      })), _;
    }
    function tt() {
      m.value.pop();
    }
    function rt() {
      a.value = [], X(f.value, 0);
    }
    function ht() {
      var h;
      rt(), o("update:modelValue", P(a.value)), (h = l.value) == null || h.focus();
    }
    function ut(h) {
      var S, w;
      if (e.transform)
        return e.transform(h, Z);
      const g = [], _ = h;
      for (let $ = 0; $ < _.length; $++) {
        const Y = _[$], z = (N) => {
          var Mt;
          let dt = N == null ? void 0 : N.find((ot) => ot.value === Y);
          if (dt)
            return dt;
          for (let ot = 0; ot < (N == null ? void 0 : N.length); ot++)
            if ((Mt = N[ot].children) != null && Mt.length && (dt = z(N[ot].children), dt))
              return dt;
        }, W = z((S = m.value[$]) == null ? void 0 : S.options);
        if (W)
          if (g.push(W), (w = W.options) != null && w.length)
            X(W, $ + 1);
          else if ($ < _.length - 1) {
            p.value = "Can`t display such a value";
            break;
          } else
            $ === _.length - 1 && (p.value = "");
        else {
          p.value = "Can`t display such a value";
          break;
        }
      }
      return g;
    }
    function P(h) {
      return e.reform ? e.reform(h) : h.map((g) => g.value);
    }
    return (h, g) => (openBlock(), createElementBlock("div", {
      ref_key: "cascaderEl",
      ref: i,
      class: "vui-cascader"
    }, [
      createBaseVNode("div", {
        ref_key: "inputWrapperEl",
        ref: s,
        class: "vue-cascader__input-wrapper"
      }, [
        createVNode(unref(Wt), {
          ref_key: "inputEl",
          ref: l,
          "model-value": u.value,
          clearable: e.clearable,
          placeholder: e.placeholder,
          disabled: e.disabled,
          onOnFocus: E,
          onOnInput: O,
          readonly: !e.filterable
        }, null, 8, ["model-value", "clearable", "placeholder", "disabled", "readonly"])
      ], 512),
      createBaseVNode("div", {
        ref_key: "dropdownEl",
        ref: r,
        class: "vui-cascader__dropdown"
      }, [
        createVNode(TransitionGroup, {
          tag: "div",
          mode: "in-out",
          name: "vui-cascader-transition"
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(c.value, (_, S) => (openBlock(), createBlock(Yn, {
              key: _.id,
              cascade: _,
              padding: S,
              fog: !y(_),
              canBack: S > 0,
              configs: e.cascadesConfig,
              onOnSelect: A,
              onOnBack: tt,
              noDataText: e.noDataText,
              filterable: e.filterableCascades,
              sortable: e.sortableCascades
            }, {
              cascadeLoading: withCtx(({ cascade: w }) => [
                renderSlot(h.$slots, "cascadeLoading", normalizeProps(guardReactiveProps({ cascade: w })), void 0, true)
              ]),
              cascadeNoData: withCtx(({ cascade: w }) => [
                renderSlot(h.$slots, "cascadeNoData", normalizeProps(guardReactiveProps({ cascade: w })), void 0, true)
              ]),
              beforeOptions: withCtx(({ cascade: w }) => [
                renderSlot(h.$slots, "beforeOptions", normalizeProps(guardReactiveProps({ cascade: w, selectedOptions: a.value })), void 0, true)
              ]),
              _: 2
            }, 1032, ["cascade", "padding", "fog", "canBack", "configs", "noDataText", "filterable", "sortable"]))), 128))
          ]),
          _: 3
        })
      ], 512)
    ], 512));
  }
});
var qn = J(zn, [["__scopeId", "data-v-e2d78959"]]);
var Kn = {
  install: (t) => {
    t.component("VuiButton", Oe), t.component("VuiCascader", qn), t.component("VuiInput", Wt), t.component("VuiInput", me);
  }
};
export {
  Oe as VuiButton,
  qn as VuiCascader,
  me as VuiCollapseBody,
  Wt as VuiInput,
  Kn as default,
  nt as styling
};
//# sourceMappingURL=@42sol_vui.js.map
