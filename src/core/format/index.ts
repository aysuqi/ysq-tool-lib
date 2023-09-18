/*
 * @Description:
 * @Author: yusunqi
 * @Date: 2023-09-16 16:38:34
 * @LastEditTime: 2023-09-18 15:11:18
 * Copyright (c) 2023 by yusunqi, All Rights Reserved.
 */

import { days } from '../days'

interface IFormatProvider {
	/**
	 * 时间戳转为多久之前
	 * @param datetime 时间戳
	 * @param before true 前， false: 后
	 * @param fmt 如果为时间格式字符串，超出一定时间范围，返回固定的时间格式；如果为布尔值false，无论什么时间，都返回多久以前的格式
	 * @example 刚刚 | 分钟前 | 小时前 |
	 * @returns
	 */
	timeFrom(
		datetime: Date | number | string | null,
		fmt?: string | boolean
	): string

	/**
	 * 日期时间格式化函数
	 * @param datetime 时间
	 * @param fmt 格式
	 * @example yyyy:mm:dd | yyyy年mm月dd日 hh时MM分ss秒 | yyyy-mm-dd hh:MM
	 * @returns
	 */
	timeFormat(datetime: Date | number | string | null, fmt?: string): string
}

const format: IFormatProvider = {
	timeFormat(datetime, fmt = 'yyyy-mm-dd') {
		if (!datetime) datetime = Number(new Date())
		if (datetime.toString().length == 10) (datetime as number) *= 1000

		const date = new Date(datetime as string)
		const opt: Record<string, string> = {
			'y+': date.getFullYear().toString(),
			'm+': (date.getMonth() + 1).toString(),
			'd+': date.getDate().toString(),
			'h+': date.getHours().toString(),
			'M+': date.getMinutes().toString(),
			's+': date.getSeconds().toString()
		}

		let ret
		for (const k in opt) {
			ret = new RegExp('(' + k + ')').exec(fmt)
			if (ret) {
				fmt = fmt?.replace(
					ret[1],
					ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, '0')
				)
			}
		}

		return fmt
	},

	timeFrom(datetime = null, fmt = 'yyyy-mm-dd') {
		if (!datetime) datetime = Number(new Date())
		if (datetime.toString().length == 10) (datetime as number) *= 1000
		const timestamp = +new Date(Number(datetime))
		const timer = (Number(new Date()) - timestamp) / 1000
		let tips = ''
		switch (true) {
			case Math.abs(timer) < 300:
				tips = '刚刚'
				break
			case Math.abs(timer) >= 300 && Math.abs(timer) < 3600:
				tips = days.parseTimestamp(timer, 'Minutes')
				break
			case Math.abs(timer) >= 3600 && Math.abs(timer) < 86400:
				tips = days.parseTimestamp(timer, 'Hours')
				break
			case Math.abs(timer) >= 86400 && Math.abs(timer) < 604800:
				tips = days.parseTimestamp(timer, 'Date')
				break
			case Math.abs(timer) >= 604800 && Math.abs(timer) < 2592000:
				tips = days.parseTimestamp(timer, 'Week')
				break
			default:
				// 如果format为false，则无论什么时间戳，都显示xx之前
				if (fmt === false) {
					if (Math.abs(timer) >= 2592000 && Math.abs(timer) < 365 * 86400) {
						tips = days.parseTimestamp(timer, 'Month')
					} else {
						tips = days.parseTimestamp(timer, 'Year')
					}
				} else {
					tips = this.timeFormat(timestamp, fmt as string)
				}
		}

		return tips
	}
}

export { format }
