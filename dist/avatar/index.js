import { defineComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle } from "vue";
const componentPrefix = "S";
function withInstall(options) {
  options.install = (app) => {
    const { name } = options;
    if (name) {
      app.component(componentPrefix + name, options);
    }
  };
  return options;
}
const _hoisted_1 = ["src"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Avatar"
  },
  __name: "Avatar",
  props: {
    url: {},
    round: { type: Boolean, default: false },
    size: { default: "24px" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("img", {
        src: _ctx.url,
        alt: "",
        class: normalizeClass(["object-cover", _ctx.round ? "rounded-full" : "rounded-lg"]),
        style: normalizeStyle({ width: _ctx.size, height: _ctx.size })
      }, null, 14, _hoisted_1);
    };
  }
});
const Avatar = withInstall(_sfc_main);
export {
  Avatar,
  Avatar as default
};
