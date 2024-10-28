import _Link from './Link';
export { linkProps } from './Link';
export type { LinkColor, LinkProps, LinkSize } from './Link';
export declare const Link: import("../utils/with-install").WithInstall<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    size: {
        type: import("vue").PropType<import("./Link").LinkSize>;
        default: string;
    };
    color: {
        type: import("vue").PropType<import("./Link").LinkColor>;
        default: string;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: import("vue").PropType<import("./Link").LinkSize>;
        default: string;
    };
    color: {
        type: import("vue").PropType<import("./Link").LinkColor>;
        default: string;
    };
}>> & Readonly<{}>, {
    size: import("./Link").LinkSize;
    color: import("./Link").LinkColor;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default Link;
declare module 'vue' {
    interface GlobalComponents {
        SLink: typeof _Link;
    }
}
