import { TEST_RULES } from '../../constants'

interface IValidateProvider {
	/**
	 * @description 验证版本号(version)格式必须为X.Y.Z
	 * @param val: val: 验证值
	 * @example 16.3.10
	 */
	version(val: string | number): { valid: boolean; message: string }

	/**
	 * @description 验证视频(video)链接地址
	 * @param val: val: 验证值
	 * @example http://www.abc.com/video/wc.avi
	 */

	videoUrl(val: string | number): { valid: boolean; message: string }
	/**
	 * @description 验证图片(image)链接地址
	 * @param val: val: 验证值
	 * @example https://www.abc.com/logo.png | http://www.abc.com/logo.png
	 */
	imgUrl(val: string | number): { valid: boolean; message: string }

	/**
	 * @description 验证网址
	 * @param val: val: 验证值
	 * @example www.qq.com | https://vuejs.org/v2/api/#v-model | www.qq.99
	 */
	httpUrl(val: string | number): { valid: boolean; message: string }

	/**
	 * @description 验证火车车次
	 * @param val: val: 验证值
	 * @example G1868 | D102 | D9 | Z5 | Z24 | Z17
	 */
	trainNum(val: string | number): { valid: boolean; message: string }

	/**
	 * @description 验证车牌号(新能源+非新能源)
	 * @param val: val: 验证值
	 * @example 京A12345D | 宁AD1234555555 | 浙苏H6F681
	 */
	carNum(val: string | number): { valid: boolean; message: string }

	/**
	 * @description 验证军官/士兵证
	 * @param val: val: 验证值
	 * @example 军字第2001988号 | 士字第P011816X号
	 */
	officerCode(val: string | number): { valid: boolean; message: string }

	/**
	 * @description 验证社会信用代码(统一)
	 * @param val: val: 验证值
	 * @example 91110108772551611J | 911101085923662400
	 */
	creditCode(val: string | number): { valid: boolean; message: string }

	/**
	 * @description 验证昵称
	 * @param val: val: 验证值
	 * @example xiaohua_qq
	 */
	nickname(val: string | number): { valid: boolean; message: string }

	/**
	 * @description 验证QQ号
	 * @param val: val: 验证值
	 * @example 90203918@qq.com | nbilly@126.com | 汉字@qq.com
	 */
	qq(val: string | number): { valid: boolean; message: string }

	/**
	 * @description 验证邮箱
	 * @param val: val: 验证值
	 * @example 90203918@qq.com | nbilly@126.com | 汉字@qq.com
	 */
	email(val: string | number): { valid: boolean; message: string }

	/**
	 * @description 验证银行卡号
	 * @param val: val: 验证值
	 * @example 6234567890 | 6222026006705354217
	 */
	bankCard(val: string | number): { valid: boolean; message: string }

	/**
	 * @description 验证户口薄
	 * @param val: val: 验证值
	 * @example 441421999707223115
	 */
	householdRegister(val: string | number): { valid: boolean; message: string }

	/**
	 * @description 验证护照（包含香港、澳门）
	 * @param val: val: 验证值
	 * @example s28233515 | 141234567 | 159203084 | MA1234567 | K25345719
	 */
	passport(val: string | number): { valid: boolean; message: string }

	/**
	 * @description 验证身份证
	 * @param val: val: 验证值
	 * @example 622223199912051311 | 12345619991205131x | 123456991010193
	 */
	dentityCard(val: string | number): { valid: boolean; message: string }

	/**
	 * @description 验证微信号
	 * @param val: val: 验证值
	 * @example github666 | kd_-666
	 */
	wx(val: string | number): { valid: boolean; message: string }

	/**
	 * @description 验证手机号码
	 * @param val: val: 验证值
	 * @example 008618311006933 | +8617888829981 | 19119255642 | 19519255642
	 */
	mobile(val: string | number): { valid: boolean; message: string }

	/**
	 * @description 自定义验证
	 * @param val: 验证值
	 * @param rule: 验证规则
	 * @param message: 返回未通过结果提示内容「可选」
	 * @example 008618311006933 | +8617888829981 | 19119255642 | 19519255642
	 */
	customValidate(
		val: string | number,
		rule: RegExp,
		message?: string
	): {
		valid: boolean
		message: string
	}
}

export const validate: IValidateProvider = {
	customValidate(val, rule, message) {
		const result = { valid: false, message: '未通过验证' }
		let str: string = ''

		if (!val) {
			result.message = 'val 不能为空'
			return result
		}

		if (typeof val === 'string') str = val
		str = String(val)
		isRegExp(rule)
		const ischeck = rule.test(str)
		result.valid = ischeck
		result.message = ischeck ? '通过验证' : message ? message : '未通过验证'

		return result
	},
	version(val) {
		return this.customValidate(val, TEST_RULES.version, '版本号格式有误!')
	},
	videoUrl(val) {
		return this.customValidate(val, TEST_RULES.videoUrl, '视频url地址格式有误!')
	},
	imgUrl(val) {
		return this.customValidate(val, TEST_RULES.imgUrl, '图片url地址格式有误!')
	},
	httpUrl(val) {
		return this.customValidate(val, TEST_RULES.httpUrl, 'url地址格式有误!')
	},
	trainNum(val) {
		return this.customValidate(
			val,
			TEST_RULES.trainNum,
			'这不是一个有效的火车车次号码!'
		)
	},
	carNum(val) {
		return this.customValidate(val, TEST_RULES.carNum, '车牌号格式有误!')
	},
	officerCode(val) {
		return this.customValidate(
			val,
			TEST_RULES.officerCode,
			'军官/士兵证件号格式有误!'
		)
	},
	creditCode(val) {
		return this.customValidate(
			val,
			TEST_RULES.creditCode,
			'社会信用代码格式有误!'
		)
	},
	nickname(val) {
		return this.customValidate(val, TEST_RULES.nickname, '昵称格式有误!')
	},
	qq(val) {
		return this.customValidate(val, TEST_RULES.qq, '这是一个无效的QQ号无效!')
	},
	email(val) {
		return this.customValidate(val, TEST_RULES.email, '邮箱格式有误!')
	},
	bankCard(val) {
		return this.customValidate(val, TEST_RULES.bankCard, '银行卡号格式有误!')
	},
	householdRegister(val) {
		return this.customValidate(
			val,
			TEST_RULES.householdRegister,
			'户口薄号码格式有误!'
		)
	},
	passport(val) {
		return this.customValidate(val, TEST_RULES.passport, '护照格式有误!')
	},
	dentityCard(val) {
		return this.customValidate(val, TEST_RULES.dentityCard, '身份证格式有误!')
	},
	wx(val) {
		return this.customValidate(val, TEST_RULES.wx, '这是一个无效的微信号码!')
	},
	mobile(val) {
		return this.customValidate(val, TEST_RULES.mobile, '手机号码格式有误!')
	}
}

/**
 * @description 检测数据是否是 RegExp 类型
 * @param val
 */
export const isRegExp: <T>(val: T) => void = (val) => {
	if (!(val && val instanceof RegExp)) {
		throw new TypeError('rule 必须是一个 RegExp 类型')
	}
}
