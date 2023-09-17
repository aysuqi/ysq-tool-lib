/*
 * @Description:
 * @Author: yusunqi
 * @Date: 2023-09-16 16:39:05
 * @LastEditTime: 2023-09-16 23:39:15
 * Copyright (c) 2023 by yusunqi, All Rights Reserved.
 */

import { timeFormat } from './format/timeFormat'
export const format = {
	/**
	 * 日期时间格式化函数
	 * @param datetime 时间
	 * @param fmt 格式
	 * @example yyyy:mm:dd | yyyy年mm月dd日 hh时MM分ss秒
	 * @returns
	 */
	time: timeFormat
}
