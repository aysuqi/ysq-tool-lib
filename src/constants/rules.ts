/*
 * @Description:
 * @Author: yusunqi
 * @Date: 2023-09-17 13:39:36
 * @LastEditTime: 2023-09-17 13:58:35
 * Copyright (c) 2023 by yusunqi, All Rights Reserved.
 */
export const TEST_RULES = {
	/**
	 * @description 中文/汉字'
	 * @example 如: 正则 | 前端
	 */
	chineseCharacters:
		/^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/,

	/**
	 * @description ASCII码表中的全部的特殊字符
	 * @example 如: "[" | "." | "^" | "&3%"
	 */
	ASCIICode: /[\u0021-\u002F\u003A-\u0040\u005B-\u0060\u007B-\u007E]+/,

	/**
	 * @description 数字/货币金额（支持负数、千分位分隔符）
	 * @example 如: 100, -0.99, 3, 234.32, -1, 900, 235.09, '12,345,678.90'
	 */
	monetaryAmount: /^-?\d{1,3}(,\d{3})*(\.\d{1,2})?$/,

	/**
	 * @description 只包含数字
	 * @example 如: 12345678
	 */
	nums: /^\d+$/,

	/**
	 * @description 浮点数
	 * @example 如: 1.23 | -1.01 | 0.00
	 */
	pointNum: /^(-?[1-9]\d*\.\d+|-?0\.\d*[1-9]\d*|0\.0+)$/,

	/**
	 * @description 负数(不包含0)
	 * @example 如: -1231
	 */
	negativeInt: /^-[1-9]\d*$/,

	/**
	 * @description 正整数，不包含0
	 * @example 如: 1231
	 */
	positiveInt: /^\+?[1-9]\d*$/,

	/**
	 * @description 整数
	 * @example 如: -1231 | 123 | 0 | 01
	 */
	int: /^(?:0|(?:-?[1-9]\d*))$/,

	/**
	 * @description base64格式
	 * @example 如: data:image/gif;base64,xxxx==
	 */
	base64:
		/^\s*data:(?:[a-z]+\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*?)\s*$/i,

	/**
	 * @description html标签(宽松匹配)
	 * @example 如: <div id="app"> 2333 </div>' | '<input type="text"> | <br>
	 */
	htmlTag: /<(\w+)[^>]*>(.*?<\/\1>)?/,

	/**
	 * @description 版本号(version)格式必须为X.Y.Z
	 * @example 如: 16.3.10
	 */
	version: /^\d+(?:\.\d+){2}$/,

	/**
	 * @description 视频(video)链接地址（视频格式可按需增删）
	 * @example 如: http://www.abc.com/video/wc.avi
	 */
	videoUrl:
		/^https?:\/\/(.+\/)+.+(\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4))$/i,

	/**
	 * @description 图片(image)链接地址（图片格式可按需增删）
	 * @example 如: https://www.abc.com/logo.png | http://www.abc.com/logo.png
	 */
	imgUrl: /^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i,

	/**
	 * @description 必须带端口号的网址(或ip)
	 * @example 如: 192.168.1.1 | https://www.jd.com
	 */
	httpUrlPort: /^((ht|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+:\d{1,5}\/?$/,

	/**
	 * @description 网址(URL)
	 * @example 如: www.qq.com | https://vuejs.org/v2/api/#v-model | www.qq.99
	 */
	httpUrl:
		/^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/,

	/**
	 * @description 火车车次
	 * @example 如: G1868 | D102 | D9 | Z5 | Z24 | Z17
	 */
	trainNum: /^[GCDZTSPKXLY1-9]\d{1,4}$/,

	/**
	 * @description 车牌号(新能源+非新能源)
	 * @example 如: 京A12345D | 宁AD1234555555 | 浙苏H6F681
	 */
	carNum:
		/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳]$/,

	/**
	 * @description 军官/士兵证
	 * @example 如: 军字第2001988号 | 士字第P011816X号
	 */
	officerCode: /^[\u4E00-\u9FA5](字第)([0-9a-zA-Z]{4,8})(号?)$/,

	/**
	 * @description 统一社会信用代码(宽松匹配)(15位/18位/20位数字/字母)
	 * @example 如: 91110108772551611J | 911101085923662400
	 */
	creditCode: /^(([0-9A-Za-z]{15})|([0-9A-Za-z]{18})|([0-9A-Za-z]{20}))$/,

	/**
	 * @description qq号格式正确
	 * @example 如: 903013545 | 9020304
	 */
	qq: /^[1-9][0-9]{4,10}$/,

	/**
	 * @description 邮箱
	 * @example 如: 90203918@qq.com | nbilly@126.com | 汉字@qq.com
	 */
	email:
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

	/**
	 * @description 用户名校验，4到16位（字母，数字，下划线，减号）
	 * @example 如: xiaohua_qq
	 */
	nickname: /^[\w-]{4,16}$/,

	/**
	 * @description 银行卡号（10到30位, 覆盖对公/私账户, 参考微信支付）
	 * @example 如: 6234567890 | 6222026006705354217
	 */
	bankCard: /^[1-9]\d{9,29}$/,

	/**
	 * @description 户口薄
	 * @example 如: 441421999707223115
	 */
	householdRegister: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,

	/**
	 * @description 护照（包含香港、澳门）
	 * @example 如: s28233515 | 141234567 | 159203084 | MA1234567 | K25345719
	 */
	passport:
		/(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/,

	/**
	 * @description 身份证号支持1/2代(15位/18位数字)
	 * @example 如: 622223199912051311 | 12345619991205131x | 123456991010193
	 */
	dentityCard:
		/^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/,

	/**
	 * @description 微信号(wx)，6至20位，以字母开头，字母，数字，减号，下划线
	 * @example 如: github666 | kd_-666
	 */
	wx: /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/,

	/**
	 * @description 座机电话(国内)
	 * @example 如: 0341-86091234 | 89076543 | 010-12345678-1234
	 */
	tel: /^(?:(?:\d{3}-)?\d{8}|^(?:\d{4}-)?\d{7,8})(?:-\d+)?$/,

	/**
	 * @description 手机号只要是1开头即可, 如果你的手机号是用来接收短信, 优先建议选择这一条
	 * @example 如: 008618311006933 | +8617888829981 | 19119255642
	 */
	phone: /^(?:(?:\+|00)86)?1\d{10}$/,

	/**
	 * @description 手机号中国(严谨), 根据工信部2019年最新公布的手机号段
	 * @example 如: 008618311006933 | +8617888829981 | 19119255642 | 19519255642
	 */
	mobile:
		/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/
}
