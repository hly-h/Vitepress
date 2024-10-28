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
const buttonProps = {
  // 颜色
  color: {
    type: String,
    default: "blue"
  },
  /**
   * 尺寸
   * @example 'small' | 'medium' | 'large'
   */
  size: {
    type: String,
    default: "medium"
  },
  // 是否圆角
  round: {
    type: Boolean,
    default: false
  },
  // 是否扁平
  plain: {
    type: Boolean,
    default: false
  },
  // 图标
  icon: {
    type: String,
    default: ""
  }
};
const _Button = /* @__PURE__ */ defineComponent({
  name: "Button",
  props: buttonProps,
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
    return () => createVNode("button", {
      "class": `
          mx-1
          hover:scale-105
          hover:text-white
          transition duration-300 ease-in-out transform
          py-${size[props.size].y}
          px-${size[props.size].x}
          ${props.round ? "rounded-full" : "rounded-lg"}
          bg-${props.color}-${props.plain ? "100" : "500"}
          hover:bg-${props.color}-400
          border-${props.color}-${props.plain ? "500" : "500"}
          cursor-pointer
          border-solid
          text-${props.plain ? `${props.color}-500` : "white"}
          text-${size[props.size].text}
          hover-text-white=""
          transition="" duration-300="" ease-in-out="" transform="" hover-scale-105=""
          mx-1=""
          `
    }, [props.icon !== "" ? createVNode("i", {
      "class": `i-ic-baseline-${props.icon} p-3`
    }, null) : "", slots.default ? slots.default() : ""]);
  }
});
const Button = withInstall(_Button);
export {
  Button,
  buttonProps,
  Button as default
};
