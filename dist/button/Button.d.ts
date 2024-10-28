import type { ExtractPropTypes, PropType } from 'vue';
import 'virtual:uno.css';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonColor = 'black' | 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink';
export declare const buttonProps: {
    readonly color: {
        readonly type: PropType<ButtonColor>;
        readonly default: "blue";
    };
    /**
     * 尺寸
     * @example 'small' | 'medium' | 'large'
     */
    readonly size: {
        readonly type: PropType<ButtonSize>;
        readonly default: "medium";
    };
    readonly round: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly plain: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly icon: {
        readonly type: StringConstructor;
        readonly default: "";
    };
};
export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    readonly color: {
        readonly type: PropType<ButtonColor>;
        readonly default: "blue";
    };
    /**
     * 尺寸
     * @example 'small' | 'medium' | 'large'
     */
    readonly size: {
        readonly type: PropType<ButtonSize>;
        readonly default: "medium";
    };
    readonly round: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly plain: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly icon: {
        readonly type: StringConstructor;
        readonly default: "";
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ExtractPropTypes<{
    readonly color: {
        readonly type: PropType<ButtonColor>;
        readonly default: "blue";
    };
    /**
     * 尺寸
     * @example 'small' | 'medium' | 'large'
     */
    readonly size: {
        readonly type: PropType<ButtonSize>;
        readonly default: "medium";
    };
    readonly round: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly plain: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly icon: {
        readonly type: StringConstructor;
        readonly default: "";
    };
}>> & Readonly<{}>, {
    readonly size: ButtonSize;
    readonly color: ButtonColor;
    readonly round: boolean;
    readonly plain: boolean;
    readonly icon: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
