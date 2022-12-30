
/* 

config = {
	baseUrl: '', // 请求的本域名
	method: 'POST',
	// 设置为json，返回后会对数据进行一次JSON.parse()
	dataType: 'json',
	showLoading: true, // 是否显示请求中的loading
	loadingText: '请求中...', // 请求loading中的文字提示
	loadingTime: 800, // 在此时间内，请求还没回来的话，就显示加载中动画，单位ms
	originalData: false, // 是否在拦截器中返回服务端的原始数据
	loadingMask: true, // 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
	// 配置请求头信息
	header: {
		'content-type': 'application/json;charset=UTF-8'
	},
} 
 
 
 */

const install = (Vue, vm) => {
	// 此为自定义配置参数
	Vue.prototype.$u.http.setConfig({
		baseUrl: 'http://192.168.1.11:8011/index.php',
		loadingText: '努力加载中~',
		loadingTime: 800,
		loadingMask: true,
		// 设置自定义头部content-type
		header: {
			'token': ''
		}
	});
	//请求拦截
	Vue.prototype.$u.http.interceptor.request = (config) => {
		// 引用token
		// token放在了Storage本地存储中，拦截是每次请求都执行的
		// 所以哪怕您重新登录修改了Storage，下一次的请求将会是最新值
		const token = uni.getStorageSync('token');
		config.header.token = token;
		// 最后需要将config进行return
		return config;
	}
	// 响应拦截，每次请求结束都会执行本方法
	Vue.prototype.$u.http.interceptor.response = (res) => {
		if(res.code == 1) {
			// res为服务端返回值，可能有code，result等字段
			// 这里对res.result进行返回，将会在this.$u.post(url).then(res => {})的then回调中的res的到
			// 如果配置了originalData为true，请留意这里的返回值
			return res;
		} else if(res.code == 401) {
			// 401为token失效，这里跳转登录
			vm.$u.toast('登录过期，请重新登录');
			setTimeout(() => {
				// 此为uView的方法，详见路由相关文档
				vm.$u.route('/pages/longin/longin')
			}, 1500)
			return res;
		} else {
			// 如果返回false，则会调用Promise的reject回调，
			// 并将进入this.$u.post(url).then().catch(res=>{})的catch回调中，res为服务端的返回值
			vm.$u.toast(res.msg);
			return false;
		}
	}
	
}

export default {
	install
}