import { defineComponent as s, reactive as a, openBlock as c, createElementBlock as _, normalizeClass as p, unref as l, renderSlot as u } from "vue";
const d = /* @__PURE__ */ s({
  __name: "Button",
  props: {
    primary: { type: Boolean, default: !1 }
  },
  setup(t) {
    const o = t, { primary: e } = a(o);
    return (n, r) => (c(), _("button", {
      class: p(["btn", { primary: l(e) }])
    }, [
      u(n.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
const f = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [n, r] of o)
    e[n] = r;
  return e;
}, i = /* @__PURE__ */ f(d, [["__scopeId", "data-v-3efb7d64"]]), v = {
  install: (t) => {
    t.component("Button", i);
  }
};
export {
  i as Button,
  v as default
};
