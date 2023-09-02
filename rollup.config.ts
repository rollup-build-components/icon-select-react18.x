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
        babelHelpers: 'runtime',
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
