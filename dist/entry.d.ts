import type { Plugin } from 'vue';
import 'virtual:uno.css';
export * from './avatar';
export * from './button';
export * from './link';
declare const _default: {
    install(app: {
        use: (arg0: Plugin) => void;
    }): void;
    version: string;
};
export default _default;
