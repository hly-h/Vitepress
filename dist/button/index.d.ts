export { buttonProps } from './Button';
export type { ButtonColor, ButtonProps, ButtonSize } from './Button';
export declare const Button: import("../utils/with-install").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly color: {
        readonly type: import("vue").PropType<import("./Button").ButtonColor>;
        readonly default: "blue";
    };
    readonly size: {
        readonly type: import("vue").PropType<import("./Button").ButtonSize>;
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
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly color: {
        readonly type: import("vue").PropType<import("./Button").ButtonColor>;
        readonly default: "blue";
    };
    readonly size: {
        readonly type: import("vue").PropType<import("./Button").ButtonSize>;
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
    readonly size: import("./Button").ButtonSize;
    readonly round: boolean;
    readonly color: import("./Button").ButtonColor;
    readonly plain: boolean;
    readonly icon: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default Button;
declare module 'vue' {
    interface GlobalComponents {
        SButton: typeof Button;
    }
}
