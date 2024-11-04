<br>
<p align="center">
<img src="https://simpleicons.org/icons/github.svg" style="width:200px"/>
[![codecov](https://codecov.io/github/ruoshuisa/Vitepress/graph/badge.svg?token=BE4NT8E4RW)](https://codecov.io/github/ruoshuisa/Vitepress)
<a href="https://codecov.io/github/ruoshuisa/Vitepress" >
 <img src="https://codecov.io/github/ruoshuisa/Vitepress/graph/badge.svg?token=BE4NT8E4RW"/>
 </a>
</p>
<h1 align="center">SSY-UI-VITE</h1>
<p align="center">
  基于 Vite 栈的前端工程化实践
</p>

<p align="center">
<img src="https://img.shields.io/github/license/ruoshuisa/Vitepress">
</p>

## Features

- 基于 Vue 框架
- 支持 JSX 与 Vue 单文件组件
- Jest + Vue3 plugins实现单元测试
- Eslint + Prettier + Husky 语法检查
- 采用 Rollup 构建
- Vitepress + Vercel 文档网站搭建
- 基于Action CI 实现持续集成与交付

## Install
```bash
 npm i ssy-ui-vite
```

## Quick Start
```bash
import Vue from 'vue'
import SSYUI from 'ssy-ui'

const App = {
    template: `
        <SButton color="blue">主要按钮</SButton>
    `,
    };

    createApp(App)
        .use(SSYUI)
        .mount("#app");
```

## Quick Start
如果希望尽快上手，可以访问 [Getting Started](https://vitepress-silk.vercel.app/)
