import type { ExtractPropTypes, PropType } from 'vue';
import 'virtual:uno.css';
export type LinkSize = 'small' | 'medium' | 'large';
export type LinkColor = 'black' | 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink';
export declare const linkProps: {
    size: {
        type: PropType<LinkSize>;
        default: string;
    };
    color: {
        type: PropType<LinkColor>;
        default: string;
    };
};
export type LinkProps = ExtractPropTypes<typeof linkProps>;
declare const _default: import("vue").DefineComponent<ExtractPropTypes<{
    size: {
        type: PropType<LinkSize>;
        default: string;
    };
    color: {
        type: PropType<LinkColor>;
        default: string;
    };
}>, () => import("vue/jsx-runtime").JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ExtractPropTypes<{
    size: {
        type: PropType<LinkSize>;
        default: string;
    };
    color: {
        type: PropType<LinkColor>;
        default: string;
    };
}>> & Readonly<{}>, {
    size: LinkSize;
    color: LinkColor;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
