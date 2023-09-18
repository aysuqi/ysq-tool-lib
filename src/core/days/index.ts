/*
 * @Description:
 * @Author: yusunqi
 * @Date: 2023-09-18 13:05:59
 * @LastEditTime: 2023-09-18 17:13:27
 * Copyright (c) 2023 by yusunqi, All Rights Reserved.
 */

import { format } from '../format'

type DAY_TYPE = 'Minutes' | 'Hours' | 'Date' | 'Week' | 'Month' | 'Year'
type DAY_SECOND_TYPE = 'begin' | 'end'

interface IDateTimeProvider {
	/**
	 * @description 获取当日时间的 00:00:00 | 23:59:59
	 * @param mode 'begin' | 'end'
	 * @param num 几天
	 * @param ispre true: 几天前 / false: 几天后
	 */
	getSecondsFrom(mode?: DAY_SECOND_TYPE, num?: number, ispre?: boolean): string

	/**
	 * @description 解析时间的前后
	 * @param timer
	 * @param type 类型 'Minutes' | 'Hours' | 'Date' | 'Week' | 'Month' | 'Year'
	 * @returns
	 */
	parseTimestamp(timer: number, type: DAY_TYPE): string

	/**
	 * @description 获取当前时间的前后时间戳（）
	 * @param num: 几天
	 * @param ispre: ture: 前, false: 后
	 * @returns
	 */
	getTimestamp(num: number, ispre?: boolean): number

	/**
	 * @description 测试是否是valid date
	 * @param date
	 */
	isValidDate(date: Date | undefined): boolean
}

export const days: IDateTimeProvider = {
	getSecondsFrom(mode = 'begin', num = 0, ispre = true) {
		const day = this.getTimestamp(num, ispre)
		const dayTime = 24 * 60 * 60 * 1000 - 1
		const time =
			mode === 'begin'
				? new Date(new Date(day).toLocaleDateString()).getTime()
				: new Date(new Date(day).toLocaleDateString()).getTime() + dayTime
		return format.timeFormat(time, 'yyyy-mm-dd hh:MM:ss')
	},
	parseTimestamp(timer, type) {
		const MODES: Record<string, { num: number; unit: string }> = {
			Minutes: { num: 60, unit: '分钟' },
			Hours: { num: 3600, unit: '小时' },
			Date: { num: 86400, unit: '天' },
			Week: { num: 86400 * 7, unit: '星期' },
			Month: { num: 86400 * 30, unit: '个月' },
			Year: { num: 86400 * 365, unit: '年' }
		}
		let text = MODES[type].unit + '前'
		let _timer = timer
		if (timer < 0) {
			text = MODES[type].unit + '后'
			_timer = Math.abs(timer)
		}

		return parseInt((_timer / MODES[type].num) as unknown as string) + text
	},
	getTimestamp(num = 0, ispre = true) {
		const timestamp = ispre
			? (new Date() as unknown as number) * 1 + 86400 * num * 1000
			: (new Date() as unknown as number) * 1 - 86400 * num * 1000
		return timestamp
	},
	isValidDate(date) {
		return date instanceof Date && !isNaN(date.getTime())
	}
}

console.log('end', days.getSecondsFrom('end', 10, false))
