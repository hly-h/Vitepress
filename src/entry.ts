// import SButton from './button/Button'
// import SFCButton from './SFCButton.vue'
// import TSXButton from './TSXButton'

// 导出单独组件
// export { SButton, SFCButton, TSXButton }

// 编写一个插件，实现一个 install 方法
// export default {
//   install(app: App): void {
//     app.component(SButton.name, SButton)
//     app.component(SFCButton.name, SFCButton)
//     app.component(TSXButton.name, TSXButton)
//   },
// }

import type { Plugin } from 'vue'
import { version } from '../package.json'
import plugins from './plugins'
import 'virtual:uno.css'

export * from './avatar'
// 导出组件
export * from './button'
export * from './link'

// 导出插件
export default {
  install(app: { use: (arg0: Plugin) => void }) {
    plugins.forEach(c => app.use(c))
  },
  version,
}
