/*
 * @Description:
 * @Author: yusunqi
 * @Date: 2023-09-16 14:18:59
 * @LastEditTime: 2023-09-16 23:39:43
 * Copyright (c) 2023 by yusunqi, All Rights Reserved.
 */
import * as core from './core'

export * from './core'

const Ys = { format: core.format }

if (typeof window === 'undefined') {
	throw new Error('this is no window ENV')
}

export default Ys
