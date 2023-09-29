import { defineComponent as a, reactive as c, openBlock as _, createElementBlock as l, normalizeClass as p, unref as u, renderSlot as d } from "vue";
const m = /* @__PURE__ */ a({
  __name: "Button",
  props: {
    primary: { type: Boolean, default: !1 }
  },
  setup(t) {
    const o = t, { primary: e } = c(o);
    return (n, r) => (_(), l("button", {
      class: p(["btn", { primary: u(e) }])
    }, [
      d(n.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
const f = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [n, r] of o)
    e[n] = r;
  return e;
}, s = /* @__PURE__ */ f(m, [["__scopeId", "data-v-3efb7d64"]]), v = {
  install: (t) => {
    t.component("Button", s), t.component("Cascader", s);
  }
};
export {
  s as Button,
  s as Cascader,
  v as default
};
