/*
 * @Description:
 * @Author: yusunqi
 * @Date: 2023-09-16 18:31:30
 * @LastEditTime: 2023-09-17 11:50:27
 * Copyright (c) 2023 by yusunqi, All Rights Reserved.
 */
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'index',
			fileName: 'index'
		},
		rollupOptions: {
			external: ['vue'],
			output: {
				globals: {
					vue: 'vue'
				}
			}
		}
	},
	plugins: [dts({ rollupTypes: true })]
})
