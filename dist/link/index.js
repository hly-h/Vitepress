import { defineComponent, createVNode } from "vue";
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
const linkProps = {
  size: {
    type: String,
    default: "medium"
  },
  color: {
    type: String,
    default: "purple"
  }
};
const _Link = /* @__PURE__ */ defineComponent({
  name: "Link",
  props: linkProps,
  setup(props, {
    slots
  }) {
    const size = {
      small: {
        x: "2",
        y: "1",
        text: "sm"
      },
      medium: {
        x: "3",
        y: "1.5",
        text: "base"
      },
      large: {
        x: "4",
        y: "2",
        text: "lg"
      }
    };
    return () => createVNode("a", {
      "class": ` 
              hover:text-white
              cursor-pointer
              py-${size[props.size].y}
              px-${size[props.size].x}
              text-${`${props.color}-500`}
              text-${size[props.size].text}
              hover:bg-${props.color}-400
              `
    }, [createVNode("span", null, [" ", slots.default ? slots.default() : "默认链接", " "])]);
  }
});
const Link = withInstall(_Link);
export {
  Link,
  Link as default,
  linkProps
};
