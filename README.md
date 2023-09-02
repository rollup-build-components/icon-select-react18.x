# 用 Rollup 打包 React18.x UI 组件
> IconSelect 组件是基于 @ant-design/icons Icon 和 Ant-Design5.x 的 Select 组件组合封装而成  
> 作为 Rollup 打包 React18.x UI 组件的范例，后续仅维护 Rollup Build Configure And Package Upgrade   
> 其中引用的 Select 组件为了样式, 关闭 virtual(false), 存在性能问题, 不可生产环境中使用


<br/>
<br/>


## Rollup 打包所涉及的处理

1. Rollup 打包 React18.x 组件 - 所需依赖
2. Rollup 打包 React18.x 组件 - 插件选项
3. Rollup 打包 React18.x 组件 - Typescript 配置
4. Rollup 打包 React18.x 组件 - Script 脚本配置
5. 如何下载使用 IconSelect 组件?


<br/>
<br/>


## 1. Rollup 打包 React18.x 组件 - 所需依赖 (详见 [package.json](https://github.com/rollup-build-components/icon-select-react18.x/blob/main/package.json))

- `@rollup/plugin-alias`

    - 用途: rollup 路径别名配置

<br/>

- `@rollup/plugin-node-resolve`

    - 用途: 用于解析 node_modules 中第三方模块

<br/>

- `@rollup/plugin-commonjs`

    - 用途: 用于将CommonJS模块转换为ES6，以便 Rollup 解析处理

<br/>

- `@rollup/plugin-babel`

    - 用途: rollup babel plugin

    - 配置: babel.config.js
      ```javascript
        module.exports = {
          presets: [
            ['@babel/preset-env', { modules: false }],
            ['@babel/preset-react']
          ],
          plugins: ['@babel/plugin-transform-runtime'],
          ignore: ['node_modules/**']
        }
      ```

    - 依赖:
        - `@babel/core` babel 核心
        - `@babel/runtime` 底层依赖，提供各种helper
        - `@babel/preset-env` ES6 语法转换
        - `@babel/preset-react` react 语法转换
        - `@babel/plugin-transform-runtime` 自动移除语法转换后内联的辅助函数

<br/>

- `rollup-plugin-postcss`

    - 用途: 用于处理 css 样式, 包括 Vue 单文件中 `<style>` 样式

<br/>

- `rollup-plugin-typescript`

    - 用途1: 用于处理 .tx 及 .tsx 文件中 `ts` 语法的解析
    - 用途2: 用于解析 rollup.config.ts 配置文件 (eg. pnpm build)

<br/>
<br/>


## 2. Rollup 打包 React18.x 组件 - 插件选项

  ```javascript
    import { defineConfig } from 'rollup'
    import { nodeResolve } from '@rollup/plugin-node-resolve'
    import typescript from '@rollup/plugin-typescript'
    import commonjs from '@rollup/plugin-commonjs'
    import postcss from 'rollup-plugin-postcss'
    import alias from '@rollup/plugin-alias'
    import babel from '@rollup/plugin-babel'

    /**
     * Rollup Configuration
     */
    export default defineConfig([
      {
        input: 'src/index.tsx',
        output: [
          {
            dir: 'dist',
            format: 'es',
            entryFileNames: () => `[name].mjs`
          },
          {
            dir: 'dist',
            format: 'cjs',
            exports: 'named',
            entryFileNames: () => `[name].cjs`
          }
        ],
        plugins: [
          alias({
            entries: [{
              find: '@',
              replacement: new URL('./src', import.meta.url).pathname
            }]
          }),
          nodeResolve(),
          commonjs(),
          typescript(),
          postcss(),
          babel({
            babelHelpers: 'runtime', // 因为设置了 runtime, 所以 babel.config.js 配置了 @babel/plugin-transform-runtime
            extensions: ['ts', '.tsx']
          })
        ],
        external: [
          /^react(\/.+|$)/,
          /^@ant-design\/icons/,
          /^antd(\/.+|$)/
        ]
      }
    ])
  ```


<br/>
<br/>


## 3. Rollup 打包 React18.x 组件 - Typescript 配置

- 创建 tsconfig.json 配置文件，需生成声明文件，则需要增加 declaration: true
```json
  {
    "compilerOptions": {
      "baseUrl": "./",
      "outDir": "dist",
      "target": "ESNext",
      "module": "ESNext",
      "jsx": "preserve", // 由于 @babel/preset-react 已经处理了 react 语法, 所以设置 preserve
      "moduleResolution": "Node",
      "useDefineForClassFields": true,
      "allowSyntheticDefaultImports": true,
      "strict": true,
      "sourceMap": false,
      "resolveJsonModule": true,
      "isolatedModules": true,
      "esModuleInterop": true,
      "skipLibCheck": true,
      "declaration": true,
      "lib": [
        "ESNext",
        "DOM"
      ],
      "paths": {
        "@/*": [
          "src/*"
        ]
      }
    },
    "include": [
      "src/**/*.ts",
      "src/**/*.d.ts",
      "src/**/*.tsx"
    ]
  }
```


<br/>
<br/>


## 4. Rollup 打包 React18.x 组件 - Script 脚本配置

  ```json
    {
      "scripts": {
        "build": "shx rm -rf dist && rollup --config rollup.config.ts --configPlugin typescript"
      }
    }
  ```


<br/>
<br/>


## 5. 如何下载使用 IconSelect 组件?

  - 安装
  ```shell

    yarn add @rollup-build-components/icon-select-react18.x

    pnpm add @rollup-build-components/icon-select-react18.x

  ```

  - 使用
  ```tsx
    import SIconSelect from '@rollup-build-components/icon-select-react18.x'
    import { useState } from 'react'

    export default function Demo() {
      const [value, setValue] = useState('')

      return (
        <>
          <SIconSelect 
            value={value}
            style={{ width: '280px' }}
            onChange={setValue}
          />
        </>
      )
    }
  ```

  
<br/>
<br/>


# 许可证
> MIT
