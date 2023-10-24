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
} from "./chunk-IXZZPN2C.js";

// node_modules/.pnpm/@42sol+vui@0.1.0-alpha.18_typescript@5.2.2/node_modules/@42sol/vui/dist/vui.es.js
var Nt = "vui-button";
var _e = defineComponent({
  __name: "Button",
  props: {
    type: { default: "default" }
  },
  setup(t) {
    const n = t, e = computed(() => ot(({ classes: o }) => {
      o.push(Nt, `${Nt}--${n.type}`);
    }));
    return (o, i) => (openBlock(), createElementBlock("button", normalizeProps(guardReactiveProps(e.value)), [
      renderSlot(o.$slots, "default", {}, void 0, true)
    ], 16));
  }
});
var G = (t, n) => {
  const e = t.__vccOpts || t;
  for (const [o, i] of n)
    e[o] = i;
  return e;
};
var ye = G(_e, [["__scopeId", "data-v-02707fde"]]);
function we(t) {
  return getCurrentScope() ? (onScopeDispose(t), true) : false;
}
function qt(t) {
  return typeof t == "function" ? t() : unref(t);
}
var Gt = typeof window < "u" && typeof document < "u";
var xe = Object.prototype.toString;
var be = (t) => xe.call(t) === "[object Object]";
var At = () => {
};
var Ce = ke();
function ke() {
  var t;
  return Gt && ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
function at(t) {
  var n;
  const e = qt(t);
  return (n = e == null ? void 0 : e.$el) != null ? n : e;
}
var Kt = Gt ? window : void 0;
function Et(...t) {
  let n, e, o, i;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([e, o, i] = t, n = Kt) : [n, e, o, i] = t, !n)
    return At;
  Array.isArray(e) || (e = [e]), Array.isArray(o) || (o = [o]);
  const c = [], s = () => {
    c.forEach((m) => m()), c.length = 0;
  }, a = (m, l, d, f) => (m.addEventListener(l, d, f), () => m.removeEventListener(l, d, f)), u = watch(
    () => [at(n), qt(i)],
    ([m, l]) => {
      if (s(), !m)
        return;
      const d = be(l) ? { ...l } : l;
      c.push(
        ...e.flatMap((f) => o.map((p) => a(m, f, p, d)))
      );
    },
    { immediate: true, flush: "post" }
  ), r = () => {
    u(), s();
  };
  return we(r), r;
}
var Pt = false;
function Oe(t, n, e = {}) {
  const { window: o = Kt, ignore: i = [], capture: c = true, detectIframe: s = false } = e;
  if (!o)
    return;
  Ce && !Pt && (Pt = true, Array.from(o.document.body.children).forEach((d) => d.addEventListener("click", At)), o.document.documentElement.addEventListener("click", At));
  let a = true;
  const u = (d) => i.some((f) => {
    if (typeof f == "string")
      return Array.from(o.document.querySelectorAll(f)).some((p) => p === d.target || d.composedPath().includes(p));
    {
      const p = at(f);
      return p && (d.target === p || d.composedPath().includes(p));
    }
  }), m = [
    Et(o, "click", (d) => {
      const f = at(t);
      if (!(!f || f === d.target || d.composedPath().includes(f))) {
        if (d.detail === 0 && (a = !u(d)), !a) {
          a = true;
          return;
        }
        n(d);
      }
    }, { passive: true, capture: c }),
    Et(o, "pointerdown", (d) => {
      const f = at(t);
      f && (a = !d.composedPath().includes(f) && !u(d));
    }, { passive: true }),
    s && Et(o, "blur", (d) => {
      setTimeout(() => {
        var f;
        const p = at(t);
        ((f = o.document.activeElement) == null ? void 0 : f.tagName) === "IFRAME" && !(p != null && p.contains(o.document.activeElement)) && n(d);
      }, 0);
    })
  ].filter(Boolean);
  return () => m.forEach((d) => d());
}
var St = Math.min;
var tt = Math.max;
var gt = Math.round;
var H = (t) => ({
  x: t,
  y: t
});
var Ee = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var Ae = {
  start: "end",
  end: "start"
};
function Mt(t, n, e) {
  return tt(t, St(n, e));
}
function wt(t, n) {
  return typeof t == "function" ? t(n) : t;
}
function z(t) {
  return t.split("-")[0];
}
function xt(t) {
  return t.split("-")[1];
}
function Jt(t) {
  return t === "x" ? "y" : "x";
}
function Qt(t) {
  return t === "y" ? "height" : "width";
}
function bt(t) {
  return ["top", "bottom"].includes(z(t)) ? "y" : "x";
}
function Ut(t) {
  return Jt(bt(t));
}
function Se(t, n, e) {
  e === void 0 && (e = false);
  const o = xt(t), i = Ut(t), c = Qt(i);
  let s = i === "x" ? o === (e ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return n.reference[c] > n.floating[c] && (s = vt(s)), [s, vt(s)];
}
function Te(t) {
  const n = vt(t);
  return [Tt(t), n, Tt(n)];
}
function Tt(t) {
  return t.replace(/start|end/g, (n) => Ae[n]);
}
function Re(t, n, e) {
  const o = ["left", "right"], i = ["right", "left"], c = ["top", "bottom"], s = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return e ? n ? i : o : n ? o : i;
    case "left":
    case "right":
      return n ? c : s;
    default:
      return [];
  }
}
function $e(t, n, e, o) {
  const i = xt(t);
  let c = Re(z(t), e === "start", o);
  return i && (c = c.map((s) => s + "-" + i), n && (c = c.concat(c.map(Tt)))), c;
}
function vt(t) {
  return t.replace(/left|right|bottom|top/g, (n) => Ee[n]);
}
function Be(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Le(t) {
  return typeof t != "number" ? Be(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function _t(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
function Ft(t, n, e) {
  let {
    reference: o,
    floating: i
  } = t;
  const c = bt(n), s = Ut(n), a = Qt(s), u = z(n), r = c === "y", m = o.x + o.width / 2 - i.width / 2, l = o.y + o.height / 2 - i.height / 2, d = o[a] / 2 - i[a] / 2;
  let f;
  switch (u) {
    case "top":
      f = {
        x: m,
        y: o.y - i.height
      };
      break;
    case "bottom":
      f = {
        x: m,
        y: o.y + o.height
      };
      break;
    case "right":
      f = {
        x: o.x + o.width,
        y: l
      };
      break;
    case "left":
      f = {
        x: o.x - i.width,
        y: l
      };
      break;
    default:
      f = {
        x: o.x,
        y: o.y
      };
  }
  switch (xt(n)) {
    case "start":
      f[s] -= d * (e && r ? -1 : 1);
      break;
    case "end":
      f[s] += d * (e && r ? -1 : 1);
      break;
  }
  return f;
}
var De = async (t, n, e) => {
  const {
    placement: o = "bottom",
    strategy: i = "absolute",
    middleware: c = [],
    platform: s
  } = e, a = c.filter(Boolean), u = await (s.isRTL == null ? void 0 : s.isRTL(n));
  let r = await s.getElementRects({
    reference: t,
    floating: n,
    strategy: i
  }), {
    x: m,
    y: l
  } = Ft(r, o, u), d = o, f = {}, p = 0;
  for (let v = 0; v < a.length; v++) {
    const {
      name: x,
      fn: b
    } = a[v], {
      x: k,
      y: O,
      data: A,
      reset: E
    } = await b({
      x: m,
      y: l,
      initialPlacement: o,
      placement: d,
      strategy: i,
      middlewareData: f,
      rects: r,
      platform: s,
      elements: {
        reference: t,
        floating: n
      }
    });
    if (m = k ?? m, l = O ?? l, f = {
      ...f,
      [x]: {
        ...f[x],
        ...A
      }
    }, E && p <= 50) {
      p++, typeof E == "object" && (E.placement && (d = E.placement), E.rects && (r = E.rects === true ? await s.getElementRects({
        reference: t,
        floating: n,
        strategy: i
      }) : E.rects), {
        x: m,
        y: l
      } = Ft(r, d, u)), v = -1;
      continue;
    }
  }
  return {
    x: m,
    y: l,
    placement: d,
    strategy: i,
    middlewareData: f
  };
};
async function Zt(t, n) {
  var e;
  n === void 0 && (n = {});
  const {
    x: o,
    y: i,
    platform: c,
    rects: s,
    elements: a,
    strategy: u
  } = t, {
    boundary: r = "clippingAncestors",
    rootBoundary: m = "viewport",
    elementContext: l = "floating",
    altBoundary: d = false,
    padding: f = 0
  } = wt(n, t), p = Le(f), x = a[d ? l === "floating" ? "reference" : "floating" : l], b = _t(await c.getClippingRect({
    element: (e = await (c.isElement == null ? void 0 : c.isElement(x))) == null || e ? x : x.contextElement || await (c.getDocumentElement == null ? void 0 : c.getDocumentElement(a.floating)),
    boundary: r,
    rootBoundary: m,
    strategy: u
  })), k = l === "floating" ? {
    ...s.floating,
    x: o,
    y: i
  } : s.reference, O = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(a.floating)), A = await (c.isElement == null ? void 0 : c.isElement(O)) ? await (c.getScale == null ? void 0 : c.getScale(O)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, E = _t(c.convertOffsetParentRelativeRectToViewportRelativeRect ? await c.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: k,
    offsetParent: O,
    strategy: u
  }) : k);
  return {
    top: (b.top - E.top + p.top) / A.y,
    bottom: (E.bottom - b.bottom + p.bottom) / A.y,
    left: (b.left - E.left + p.left) / A.x,
    right: (E.right - b.right + p.right) / A.x
  };
}
var Ve = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(n) {
      var e, o;
      const {
        placement: i,
        middlewareData: c,
        rects: s,
        initialPlacement: a,
        platform: u,
        elements: r
      } = n, {
        mainAxis: m = true,
        crossAxis: l = true,
        fallbackPlacements: d,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: v = true,
        ...x
      } = wt(t, n);
      if ((e = c.arrow) != null && e.alignmentOffset)
        return {};
      const b = z(i), k = z(a) === a, O = await (u.isRTL == null ? void 0 : u.isRTL(r.floating)), A = d || (k || !v ? [vt(a)] : Te(a));
      !d && p !== "none" && A.push(...$e(a, v, p, O));
      const E = [a, ...A], it = await Zt(n, x), K = [];
      let P = ((o = c.flip) == null ? void 0 : o.overflows) || [];
      if (m && K.push(it[b]), l) {
        const y = Se(i, s, O);
        K.push(it[y[0]], it[y[1]]);
      }
      if (P = [...P, {
        placement: i,
        overflows: K
      }], !K.every((y) => y <= 0)) {
        var st, h;
        const y = (((st = c.flip) == null ? void 0 : st.index) || 0) + 1, D = E[y];
        if (D)
          return {
            data: {
              index: y,
              overflows: P
            },
            reset: {
              placement: D
            }
          };
        let $ = (h = P.filter((S) => S.overflows[0] <= 0).sort((S, M) => S.overflows[1] - M.overflows[1])[0]) == null ? void 0 : h.placement;
        if (!$)
          switch (f) {
            case "bestFit": {
              var _;
              const S = (_ = P.map((M) => [M.placement, M.overflows.filter((F) => F > 0).reduce((F, J) => F + J, 0)]).sort((M, F) => M[1] - F[1])[0]) == null ? void 0 : _[0];
              S && ($ = S);
              break;
            }
            case "initialPlacement":
              $ = a;
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
async function Ie(t, n) {
  const {
    placement: e,
    platform: o,
    elements: i
  } = t, c = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), s = z(e), a = xt(e), u = bt(e) === "y", r = ["left", "top"].includes(s) ? -1 : 1, m = c && u ? -1 : 1, l = wt(n, t);
  let {
    mainAxis: d,
    crossAxis: f,
    alignmentAxis: p
  } = typeof l == "number" ? {
    mainAxis: l,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...l
  };
  return a && typeof p == "number" && (f = a === "end" ? p * -1 : p), u ? {
    x: f * m,
    y: d * r
  } : {
    x: d * r,
    y: f * m
  };
}
var Ne = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(n) {
      const {
        x: e,
        y: o
      } = n, i = await Ie(n, t);
      return {
        x: e + i.x,
        y: o + i.y,
        data: i
      };
    }
  };
};
var Pe = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(n) {
      const {
        x: e,
        y: o,
        placement: i
      } = n, {
        mainAxis: c = true,
        crossAxis: s = false,
        limiter: a = {
          fn: (x) => {
            let {
              x: b,
              y: k
            } = x;
            return {
              x: b,
              y: k
            };
          }
        },
        ...u
      } = wt(t, n), r = {
        x: e,
        y: o
      }, m = await Zt(n, u), l = bt(z(i)), d = Jt(l);
      let f = r[d], p = r[l];
      if (c) {
        const x = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", k = f + m[x], O = f - m[b];
        f = Mt(k, f, O);
      }
      if (s) {
        const x = l === "y" ? "top" : "left", b = l === "y" ? "bottom" : "right", k = p + m[x], O = p - m[b];
        p = Mt(k, p, O);
      }
      const v = a.fn({
        ...n,
        [d]: f,
        [l]: p
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
function j(t) {
  return te(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function R(t) {
  var n;
  return (t == null || (n = t.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function X(t) {
  var n;
  return (n = (te(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : n.documentElement;
}
function te(t) {
  return t instanceof Node || t instanceof R(t).Node;
}
function N(t) {
  return t instanceof Element || t instanceof R(t).Element;
}
function I(t) {
  return t instanceof HTMLElement || t instanceof R(t).HTMLElement;
}
function Wt(t) {
  return typeof ShadowRoot > "u" ? false : t instanceof ShadowRoot || t instanceof R(t).ShadowRoot;
}
function pt(t) {
  const {
    overflow: n,
    overflowX: e,
    overflowY: o,
    display: i
  } = B(t);
  return /auto|scroll|overlay|hidden|clip/.test(n + o + e) && !["inline", "contents"].includes(i);
}
function Me(t) {
  return ["table", "td", "th"].includes(j(t));
}
function Dt(t) {
  const n = Vt(), e = B(t);
  return e.transform !== "none" || e.perspective !== "none" || (e.containerType ? e.containerType !== "normal" : false) || !n && (e.backdropFilter ? e.backdropFilter !== "none" : false) || !n && (e.filter ? e.filter !== "none" : false) || ["transform", "perspective", "filter"].some((o) => (e.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (e.contain || "").includes(o));
}
function Fe(t) {
  let n = nt(t);
  for (; I(n) && !Ct(n); ) {
    if (Dt(n))
      return n;
    n = nt(n);
  }
  return null;
}
function Vt() {
  return typeof CSS > "u" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ct(t) {
  return ["html", "body", "#document"].includes(j(t));
}
function B(t) {
  return R(t).getComputedStyle(t);
}
function kt(t) {
  return N(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function nt(t) {
  if (j(t) === "html")
    return t;
  const n = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    Wt(t) && t.host || // Fallback.
    X(t)
  );
  return Wt(n) ? n.host : n;
}
function ee(t) {
  const n = nt(t);
  return Ct(n) ? t.ownerDocument ? t.ownerDocument.body : t.body : I(n) && pt(n) ? n : ee(n);
}
function Rt(t, n, e) {
  var o;
  n === void 0 && (n = []), e === void 0 && (e = true);
  const i = ee(t), c = i === ((o = t.ownerDocument) == null ? void 0 : o.body), s = R(i);
  return c ? n.concat(s, s.visualViewport || [], pt(i) ? i : [], s.frameElement && e ? Rt(s.frameElement) : []) : n.concat(i, Rt(i, [], e));
}
function ne(t) {
  const n = B(t);
  let e = parseFloat(n.width) || 0, o = parseFloat(n.height) || 0;
  const i = I(t), c = i ? t.offsetWidth : e, s = i ? t.offsetHeight : o, a = gt(e) !== c || gt(o) !== s;
  return a && (e = c, o = s), {
    width: e,
    height: o,
    $: a
  };
}
function oe(t) {
  return N(t) ? t : t.contextElement;
}
function et(t) {
  const n = oe(t);
  if (!I(n))
    return H(1);
  const e = n.getBoundingClientRect(), {
    width: o,
    height: i,
    $: c
  } = ne(n);
  let s = (c ? gt(e.width) : e.width) / o, a = (c ? gt(e.height) : e.height) / i;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
var We = H(0);
function ie(t) {
  const n = R(t);
  return !Vt() || !n.visualViewport ? We : {
    x: n.visualViewport.offsetLeft,
    y: n.visualViewport.offsetTop
  };
}
function He(t, n, e) {
  return n === void 0 && (n = false), !e || n && e !== R(t) ? false : n;
}
function ft(t, n, e, o) {
  n === void 0 && (n = false), e === void 0 && (e = false);
  const i = t.getBoundingClientRect(), c = oe(t);
  let s = H(1);
  n && (o ? N(o) && (s = et(o)) : s = et(t));
  const a = He(c, e, o) ? ie(c) : H(0);
  let u = (i.left + a.x) / s.x, r = (i.top + a.y) / s.y, m = i.width / s.x, l = i.height / s.y;
  if (c) {
    const d = R(c), f = o && N(o) ? R(o) : o;
    let p = d.frameElement;
    for (; p && o && f !== d; ) {
      const v = et(p), x = p.getBoundingClientRect(), b = B(p), k = x.left + (p.clientLeft + parseFloat(b.paddingLeft)) * v.x, O = x.top + (p.clientTop + parseFloat(b.paddingTop)) * v.y;
      u *= v.x, r *= v.y, m *= v.x, l *= v.y, u += k, r += O, p = R(p).frameElement;
    }
  }
  return _t({
    width: m,
    height: l,
    x: u,
    y: r
  });
}
function je(t) {
  let {
    rect: n,
    offsetParent: e,
    strategy: o
  } = t;
  const i = I(e), c = X(e);
  if (e === c)
    return n;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = H(1);
  const u = H(0);
  if ((i || !i && o !== "fixed") && ((j(e) !== "body" || pt(c)) && (s = kt(e)), I(e))) {
    const r = ft(e);
    a = et(e), u.x = r.x + e.clientLeft, u.y = r.y + e.clientTop;
  }
  return {
    width: n.width * a.x,
    height: n.height * a.y,
    x: n.x * a.x - s.scrollLeft * a.x + u.x,
    y: n.y * a.y - s.scrollTop * a.y + u.y
  };
}
function Xe(t) {
  return Array.from(t.getClientRects());
}
function se(t) {
  return ft(X(t)).left + kt(t).scrollLeft;
}
function Ye(t) {
  const n = X(t), e = kt(t), o = t.ownerDocument.body, i = tt(n.scrollWidth, n.clientWidth, o.scrollWidth, o.clientWidth), c = tt(n.scrollHeight, n.clientHeight, o.scrollHeight, o.clientHeight);
  let s = -e.scrollLeft + se(t);
  const a = -e.scrollTop;
  return B(o).direction === "rtl" && (s += tt(n.clientWidth, o.clientWidth) - i), {
    width: i,
    height: c,
    x: s,
    y: a
  };
}
function ze(t, n) {
  const e = R(t), o = X(t), i = e.visualViewport;
  let c = o.clientWidth, s = o.clientHeight, a = 0, u = 0;
  if (i) {
    c = i.width, s = i.height;
    const r = Vt();
    (!r || r && n === "fixed") && (a = i.offsetLeft, u = i.offsetTop);
  }
  return {
    width: c,
    height: s,
    x: a,
    y: u
  };
}
function qe(t, n) {
  const e = ft(t, true, n === "fixed"), o = e.top + t.clientTop, i = e.left + t.clientLeft, c = I(t) ? et(t) : H(1), s = t.clientWidth * c.x, a = t.clientHeight * c.y, u = i * c.x, r = o * c.y;
  return {
    width: s,
    height: a,
    x: u,
    y: r
  };
}
function Ht(t, n, e) {
  let o;
  if (n === "viewport")
    o = ze(t, e);
  else if (n === "document")
    o = Ye(X(t));
  else if (N(n))
    o = qe(n, e);
  else {
    const i = ie(t);
    o = {
      ...n,
      x: n.x - i.x,
      y: n.y - i.y
    };
  }
  return _t(o);
}
function ce(t, n) {
  const e = nt(t);
  return e === n || !N(e) || Ct(e) ? false : B(e).position === "fixed" || ce(e, n);
}
function Ge(t, n) {
  const e = n.get(t);
  if (e)
    return e;
  let o = Rt(t, [], false).filter((a) => N(a) && j(a) !== "body"), i = null;
  const c = B(t).position === "fixed";
  let s = c ? nt(t) : t;
  for (; N(s) && !Ct(s); ) {
    const a = B(s), u = Dt(s);
    !u && a.position === "fixed" && (i = null), (c ? !u && !i : !u && a.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || pt(s) && !u && ce(t, s)) ? o = o.filter((m) => m !== s) : i = a, s = nt(s);
  }
  return n.set(t, o), o;
}
function Ke(t) {
  let {
    element: n,
    boundary: e,
    rootBoundary: o,
    strategy: i
  } = t;
  const s = [...e === "clippingAncestors" ? Ge(n, this._c) : [].concat(e), o], a = s[0], u = s.reduce((r, m) => {
    const l = Ht(n, m, i);
    return r.top = tt(l.top, r.top), r.right = St(l.right, r.right), r.bottom = St(l.bottom, r.bottom), r.left = tt(l.left, r.left), r;
  }, Ht(n, a, i));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function Je(t) {
  return ne(t);
}
function Qe(t, n, e) {
  const o = I(n), i = X(n), c = e === "fixed", s = ft(t, true, c, n);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = H(0);
  if (o || !o && !c)
    if ((j(n) !== "body" || pt(i)) && (a = kt(n)), o) {
      const r = ft(n, true, c, n);
      u.x = r.x + n.clientLeft, u.y = r.y + n.clientTop;
    } else
      i && (u.x = se(i));
  return {
    x: s.left + a.scrollLeft - u.x,
    y: s.top + a.scrollTop - u.y,
    width: s.width,
    height: s.height
  };
}
function jt(t, n) {
  return !I(t) || B(t).position === "fixed" ? null : n ? n(t) : t.offsetParent;
}
function ae(t, n) {
  const e = R(t);
  if (!I(t))
    return e;
  let o = jt(t, n);
  for (; o && Me(o) && B(o).position === "static"; )
    o = jt(o, n);
  return o && (j(o) === "html" || j(o) === "body" && B(o).position === "static" && !Dt(o)) ? e : o || Fe(t) || e;
}
var Ue = async function(t) {
  let {
    reference: n,
    floating: e,
    strategy: o
  } = t;
  const i = this.getOffsetParent || ae, c = this.getDimensions;
  return {
    reference: Qe(n, await i(e), o),
    floating: {
      x: 0,
      y: 0,
      ...await c(e)
    }
  };
};
function Ze(t) {
  return B(t).direction === "rtl";
}
var tn = {
  convertOffsetParentRelativeRectToViewportRelativeRect: je,
  getDocumentElement: X,
  getClippingRect: Ke,
  getOffsetParent: ae,
  getElementRects: Ue,
  getClientRects: Xe,
  getDimensions: Je,
  getScale: et,
  isElement: N,
  isRTL: Ze
};
var en = (t, n, e) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: tn,
    ...e
  }, c = {
    ...i.platform,
    _c: o
  };
  return De(t, n, {
    ...i,
    platform: c
  });
};
var ot = (t) => {
  const n = [], e = {};
  return t({ classes: n, styles: e }), {
    class: n,
    style: e
  };
};
var mt = (t) => typeof t == "number" ? `${t}px` : t;
var nn = defineComponent({
  __name: "CollapseBody",
  props: {
    expanded: { type: Boolean },
    option: {},
    padding: {}
  },
  setup(t) {
    const n = t, e = ref(null), o = ref(0);
    onMounted(() => {
      var l, d;
      (l = e.value) == null || l.addEventListener("vui-collapse-expand-changed", i), o.value = ((d = e.value) == null ? void 0 : d.offsetHeight) || 0;
    });
    function i(l) {
      l.target !== e.value && c();
    }
    function c() {
      o.value = void 0;
    }
    function s() {
      var l;
      n.expanded ? o.value = ((l = e.value) == null ? void 0 : l.offsetHeight) || 0 : o.value = 0;
    }
    const a = computed(() => (nextTick(() => s()), n.expanded));
    function u() {
      var d;
      const l = new CustomEvent("vui-collapse-expand-changed", { bubbles: true });
      (d = e.value) == null || d.dispatchEvent(l);
    }
    const r = computed(() => ot(({ styles: l }) => {
      o.value !== void 0 ? a.value ? (l.height = `${o.value}px`, l.opacity = "1", u()) : (l.height = "0", l.opacity = "0") : s();
    })), m = computed(() => ot(({ styles: l }) => {
      l.paddingLeft = mt(n.padding || "1rem");
    }));
    return (l, d) => (openBlock(), createElementBlock("div", mergeProps({ class: "vui-collapse-body" }, r.value), [
      createBaseVNode("div", mergeProps({
        ref_key: "collapseBodyEl",
        ref: e,
        class: "vui-collapse-body__content"
      }, m.value), [
        renderSlot(l.$slots, "default", {}, void 0, true)
      ], 16)
    ], 16));
  }
});
var on = G(nn, [["__scopeId", "data-v-ab0e6d66"]]);
var sn = { class: "vui-cascade-option-title__default-title" };
var cn = defineComponent({
  __name: "CascadeOptionTitle",
  props: {
    option: {}
  },
  setup(t) {
    const n = t, e = () => {
      var o, i;
      return (i = (o = n.option).render) == null ? void 0 : i.call(o);
    };
    return (o, i) => (openBlock(), createElementBlock("div", null, [
      createVNode(e),
      createBaseVNode("div", sn, toDisplayString(n.option.title), 1)
    ]));
  }
});
var an = G(cn, [["__scopeId", "data-v-30eecdcd"]]);
var Ot = (t) => (pushScopeId("data-v-194b05f5"), t = t(), popScopeId(), t);
var ln = ["title"];
var rn = { class: "vui-cascade-option__string" };
var un = { class: "vui-cascade-option__string-left" };
var dn = { class: "vui-cascade-option__tree-btn-space" };
var fn = Ot(() => createBaseVNode("i", { "_i-bxs:right-arrow": "" }, null, -1));
var pn = [
  fn
];
var mn = {
  key: 0,
  class: "vui-cascade-oprion__next-btn"
};
var hn = { key: 0 };
var gn = Ot(() => createBaseVNode("i", { "_i-ep:arrow-right": "" }, null, -1));
var vn = [
  gn
];
var _n = { key: 1 };
var yn = Ot(() => createBaseVNode("i", { "_i-ep:loading": "" }, null, -1));
var wn = [
  yn
];
var xn = { key: 2 };
var bn = Ot(() => createBaseVNode("i", { "_i-ep:refresh": "" }, null, -1));
var Cn = [
  bn
];
var kn = defineComponent({
  __name: "CascadeOption",
  props: {
    option: {},
    cascade: {}
  },
  emits: ["on-click"],
  setup(t, { emit: n }) {
    const e = t, o = inject("selectedOptions"), i = n, c = ref(false), s = computed(() => !!e.option.options || !!e.option.getAsyncOptions), a = computed(() => !!e.option.children), u = computed(() => {
      var p;
      const l = (p = o == null ? void 0 : o.value) == null ? void 0 : p.find((v, x) => x === e.cascade.id);
      if (!l)
        return false;
      const d = l.id ?? l.value, f = e.option.id || e.option.value;
      return d === f;
    }), r = computed(() => ot(({ classes: l }) => {
      u.value && l.push("vui-cascade-option--selected");
    }));
    function m() {
      var p, v;
      const l = { option: e.option, last: !s.value };
      let d = true;
      const f = () => d = false;
      (v = (p = e.option).onClick) == null || v.call(p, { preventEmit: f, option: e.option }), d && i("on-click", l);
    }
    return (l, d) => {
      const f = resolveComponent("cascade-option", true);
      return openBlock(), createElementBlock("div", mergeProps({ class: "vui-cascade-option" }, r.value, {
        title: e.option.title,
        onClick: m
      }), [
        createBaseVNode("div", rn, [
          createBaseVNode("div", un, [
            createBaseVNode("div", dn, [
              a.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(["vui-cascade-option__tree-btn", { "vui-cascade-option__tree-btn--opened": c.value }]),
                onClick: d[0] || (d[0] = withModifiers((p) => c.value = !c.value, ["stop"]))
              }, pn, 2)) : createCommentVNode("", true)
            ]),
            createVNode(an, {
              option: e.option
            }, null, 8, ["option"])
          ]),
          s.value ? (openBlock(), createElementBlock("div", mn, [
            l.option.loadingState ? l.option.loadingState === "process" ? (openBlock(), createElementBlock("span", _n, wn)) : l.option.loadingState === "ready" ? (openBlock(), createElementBlock("span", xn, Cn)) : createCommentVNode("", true) : (openBlock(), createElementBlock("span", hn, vn))
          ])) : createCommentVNode("", true)
        ]),
        a.value ? (openBlock(), createBlock(on, {
          key: 0,
          expanded: c.value,
          option: e.option
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(l.option.children, (p) => (openBlock(), createBlock(f, {
              key: p.id || p.value,
              cascade: l.cascade,
              option: p,
              onOnClick: d[1] || (d[1] = (v) => i("on-click", v))
            }, null, 8, ["cascade", "option"]))), 128))
          ]),
          _: 1
        }, 8, ["expanded", "option"])) : createCommentVNode("", true)
      ], 16, ln);
    };
  }
});
var On = G(kn, [["__scopeId", "data-v-194b05f5"]]);
var En = (t) => (pushScopeId("data-v-258c4c7c"), t = t(), popScopeId(), t);
var An = { class: "vui-cascade__scrollable" };
var Sn = {
  key: 0,
  class: "vui-cascade__top-space"
};
var Tn = En(() => createBaseVNode("i", { "_i-ep:back": "" }, null, -1));
var Rn = [
  Tn
];
var $n = { class: "flex items-center justify-center" };
var Bn = { key: 0 };
var Ln = { key: 1 };
var Dn = {
  key: 0,
  class: "vui-cascade__no-data"
};
var Vn = {
  key: 0,
  class: "vui-cascade__fog"
};
var In = defineComponent({
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
  setup(t, { emit: n }) {
    const e = t, o = n, i = computed(() => ot(({ styles: a }) => {
      var u, r, m;
      a.width = mt(((u = e.configs) == null ? void 0 : u.width) || "240px"), (r = e.configs) != null && r.maxHeight ? a.maxHeight = mt(e.configs.maxHeight) : a.height = mt(((m = e.configs) == null ? void 0 : m.height) || "120px"), a.left = `${12 * e.padding}px`;
    }));
    function c(a) {
      e.fog || o("on-select", { cascade: e.cascade, optionParams: a });
    }
    function s() {
      o("on-back");
    }
    return (a, u) => (openBlock(), createElementBlock("div", mergeProps({ class: "vui-cascade" }, i.value), [
      createBaseVNode("div", An, [
        e.canBack ? (openBlock(), createElementBlock("div", Sn, [
          renderSlot(a.$slots, "backBtn", normalizeProps(guardReactiveProps({ back: s })), () => [
            createBaseVNode("div", {
              class: "vui-cascade__back-btn",
              onClick: s
            }, Rn)
          ], true),
          createBaseVNode("div", $n, [
            a.cascade.loadStatus === "process" ? (openBlock(), createElementBlock("span", Bn, "Loading...")) : createCommentVNode("", true),
            a.cascade.loadStatus === "error" ? (openBlock(), createElementBlock("span", Ln, "Data hasn't been loaded")) : createCommentVNode("", true)
          ])
        ])) : createCommentVNode("", true),
        renderSlot(a.$slots, "beforeOptions", normalizeProps(guardReactiveProps({ cascade: e.cascade })), void 0, true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(a.cascade.options, (r) => (openBlock(), createBlock(On, {
          key: r.id || r.value,
          cascade: a.cascade,
          option: r,
          onOnClick: c
        }, null, 8, ["cascade", "option"]))), 128)),
        renderSlot(a.$slots, "cascadeNoData", normalizeProps(guardReactiveProps({ cascade: e.cascade })), () => [
          a.cascade.options.length ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", Dn, toDisplayString(e.noDataText || "no data"), 1))
        ], true),
        createVNode(Transition, { class: "vui-cascade__fog-transition" }, {
          default: withCtx(() => [
            e.fog ? (openBlock(), createElementBlock("div", Vn)) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ])
    ], 16));
  }
});
var Nn = G(In, [["__scopeId", "data-v-258c4c7c"]]);
var Pn = (t) => (pushScopeId("data-v-a890c603"), t = t(), popScopeId(), t);
var Mn = { class: "vui-cascade-input__label" };
var Fn = { key: 0 };
var Wn = {
  key: 1,
  class: "vuscade-input__placeholder"
};
var Hn = Pn(() => createBaseVNode("div", { "_i-material-symbols:close": "" }, null, -1));
var jn = [
  Hn
];
var Xn = {
  key: 0,
  class: "vui-cascade-input__error"
};
var Yn = defineComponent({
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
  setup(t, { emit: n }) {
    const e = t, o = n, i = computed(() => e.values.join(e.separator)), c = computed(() => ot(({ classes: u }) => {
      e.disabled && u.push("vui-cascade-input--disabled");
    }));
    function s() {
      o("on-click");
    }
    function a() {
      o("on-clear");
    }
    return (u, r) => (openBlock(), createElementBlock(Fragment, null, [
      createBaseVNode("div", mergeProps({ class: "vui-cascade-input" }, c.value, { onClick: s }), [
        createBaseVNode("div", Mn, [
          i.value ? (openBlock(), createElementBlock("span", Fn, toDisplayString(i.value), 1)) : (openBlock(), createElementBlock("div", Wn, toDisplayString(e.placeholder), 1))
        ]),
        e.clearable && e.values.length ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "flex-shrink-0 rounded p-1 hover:bg-gray-300",
          onClick: a
        }, jn)) : createCommentVNode("", true)
      ], 16),
      u.errorMsg ? (openBlock(), createElementBlock("div", Xn, toDisplayString(u.errorMsg), 1)) : createCommentVNode("", true)
    ], 64));
  }
});
var zn = G(Yn, [["__scopeId", "data-v-a890c603"]]);
var qn = defineComponent({
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
  setup(t, { emit: n }) {
    const e = t, o = n, i = ref(null), c = ref(null), s = ref(null), a = ref(false), u = ref(""), r = ref([]), m = computed(() => a.value ? r.value : []), l = ref([]);
    provide("selectedOptions", l);
    const d = computed(() => ({
      value: "__ROOT_CASCADE__",
      title: "",
      options: e.data
    }));
    function f() {
      A(d.value, 0), l.value = P(e.modelValue || []);
    }
    f(), watch(() => e.data, () => {
      f();
    });
    const p = computed(() => l.value.map((h) => h.title)), v = (h) => {
      var _;
      return ((_ = r.value[r.value.length - 1]) == null ? void 0 : _.id) === h.id;
    };
    function x(h) {
      h && e.disabled || (a.value = h, h || (l.value = P(e.modelValue || [])));
    }
    onMounted(() => {
      Oe(i.value, k);
      const h = c.value, _ = s.value;
      en(h, _, {
        middleware: [
          Ve(),
          Ne(4),
          Pe()
        ]
      }).then(({ y }) => {
        Object.assign(_.style, {
          top: `${y}px`
        });
      });
    });
    function b() {
      x(true);
    }
    function k() {
      x(false);
    }
    function O({ cascade: h, optionParams: _ }) {
      if (l.value = l.value.slice(0, h.id), l.value[h.id] = _.option, _.last) {
        o("update:modelValue", st(l.value)), nextTick(() => {
          x(false);
        });
        return;
      }
      A(_.option);
    }
    function A(h, _) {
      const y = _ ?? r.value.length;
      _ !== void 0 && (r.value = r.value.slice(0, _)), r.value.push(E(h, y)), console.log(r.value);
    }
    function E(h, _) {
      const y = { id: _, options: h.options || [], loadStatus: void 0 };
      return console.log(h), h.getAsyncOptions && (y.loadStatus = "process", h.getAsyncOptions().then((D) => {
        y.loadStatus = "success", y.options.push(...D);
      }).catch(() => {
        y.loadStatus = "error";
      })), y;
    }
    function it() {
      r.value.pop();
    }
    function K() {
      l.value = [], o("update:modelValue", st([])), A(d.value, 0);
    }
    function P(h) {
      var D, $;
      if (e.transform)
        return e.transform(h, E);
      const _ = [], y = h;
      for (let S = 0; S < y.length; S++) {
        const M = y[S], F = (W) => {
          var It;
          let ct = W == null ? void 0 : W.find((Q) => Q.value === M);
          if (ct)
            return ct;
          for (let Q = 0; Q < (W == null ? void 0 : W.length); Q++)
            if ((It = W[Q].children) != null && It.length && (ct = F(W[Q].children), ct))
              return ct;
        }, J = F((D = r.value[S]) == null ? void 0 : D.options);
        if (J)
          if (_.push(J), ($ = J.options) != null && $.length)
            A(J, S + 1);
          else if (S < y.length - 1) {
            u.value = "Can`t display such a value";
            break;
          } else
            S === y.length - 1 && (u.value = "");
        else {
          u.value = "Can`t display such a value";
          break;
        }
      }
      return _;
    }
    function st(h) {
      return e.reform ? e.reform(h) : h.map((_) => _.value);
    }
    return (h, _) => (openBlock(), createElementBlock("div", {
      ref_key: "cascaderEl",
      ref: i,
      class: "vui-cascader"
    }, [
      createBaseVNode("div", {
        ref_key: "inputWrapperEl",
        ref: c,
        class: "vue-cascader__input-wrapper"
      }, [
        createVNode(zn, {
          values: p.value,
          separator: e.separator,
          placeholder: e.placeholder,
          disabled: e.disabled,
          onOnClick: b,
          onOnClear: K,
          clearable: e.clearable
        }, null, 8, ["values", "separator", "placeholder", "disabled", "clearable"])
      ], 512),
      createBaseVNode("div", {
        ref_key: "dropdownEl",
        ref: s,
        class: "vui-cascader__dropdown"
      }, [
        createVNode(TransitionGroup, {
          tag: "div",
          mode: "in-out",
          name: "vui-cascader-transition"
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(m.value, (y, D) => (openBlock(), createBlock(Nn, {
              key: y.id,
              cascade: y,
              padding: D,
              fog: !v(y),
              canBack: D > 0,
              configs: e.cascadesConfig,
              onOnSelect: O,
              onOnBack: it,
              noDataText: e.noDataText
            }, {
              cascadeNoData: withCtx(({ cascade: $ }) => [
                renderSlot(h.$slots, "cascadeNoData", normalizeProps(guardReactiveProps($)), void 0, true)
              ]),
              beforeOptions: withCtx(({ cascade: $ }) => [
                renderSlot(h.$slots, "beforeOptions", normalizeProps(guardReactiveProps({ cascade: $, selectedOptions: l.value })), void 0, true)
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
var Gn = G(qn, [["__scopeId", "data-v-416cbfb6"]]);
var Jn = {
  install: (t) => {
    t.component("VuiButton", ye), t.component("VuiCascader", Gn);
  }
};
export {
  ye as VuiButton,
  Gn as VuiCascader,
  Jn as default,
  ot as styling
};
//# sourceMappingURL=@42sol_vui.js.map
