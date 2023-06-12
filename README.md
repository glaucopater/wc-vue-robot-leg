# wc-vue-robot-leg
A Robot Arm Web Component build with Vue, TypeScript

[![Netlify Status](https://api.netlify.com/api/v1/badges/6c9514f7-1379-437f-bb5a-6cfd40f6a638/deploy-status)](https://app.netlify.com/sites/stately-hummingbird-ea25b6/deploys)

[Live Demo ⚡](https://stately-hummingbird-ea25b6.netlify.app/)

Setup
---
- Clone the repo
- Run yarn
- Run yarn dev

Scripts
---
- dev: it runs the application in development mode
- build: build the application
- expose: build the app and expose the web-component on local web server (http-server)
- expose2: build the app and expose the web-component on local web server (serve)



# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
