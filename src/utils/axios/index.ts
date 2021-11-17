import { AxiosResponse } from 'axios'
import { AxiosInterceptor, CreateAxiosOptions } from './axiosConfig'
import { myAxios } from './myAxios'
import { RequestOptions } from '#/axios'
import { checkStatus } from './axiosStatus'

const interceptor: AxiosInterceptor = {
	/**
	 * @description: 处理请求数据。如果数据不是预期格式，可直接抛出错误
	 */
	requestHook: (res: AxiosResponse, options: RequestOptions) => {
		if (options.isShowData) return res.data
		return res
	},

	/**
	 * @description: 请求失败的错误处理
	 */
	requestCatchHook: (e: Error, options: RequestOptions) => {
		if (options) ''
		return Promise.reject(e)
	},

	/**
	 * @description: 请求之前处理config
	 */
	beforeRequestHook: (config: AxiosResponse, options: RequestOptions) => {
		if (options) ''
		return config
	},

	/**
	 * @description: 请求拦截器处理
	 */
	requestInterceptors: (config: any, options: any) => {
		if (options) ''
		config.headers = { _token: 'myToken ' }
		return config
	},

	/**
	 * @description: 请求拦截器错误处理
	 */
	requestInterceptorsCatch: (error: Error) => {
		return error
	},

	/**
	 * @description: 响应拦截器处理
	 */
	responseInterceptors: (res: AxiosResponse) => {
		return res
	},

	/**
	 * @description: 响应拦截器错误处理
	 */
	responseInterceptorsCatch: (error: any) => {
		const { response, message } = error || {}
		checkStatus(response.status, message)
		return error
	},
}

function createAxios(opt?: Partial<CreateAxiosOptions>) {
	return new myAxios({
		...{
			// 请求时间
			timeout: 10 * 1000,
			// (拦截器)数据处理方式
			interceptor,
			// 配置项，下面的选项都可以在独立的接口请求中覆盖
			requestOptions: {},
		},
		...(opt || {}),
	})
}
export const request = createAxios()
