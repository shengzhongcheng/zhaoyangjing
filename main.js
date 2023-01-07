
import App from './App'
// #ifndef VUE3
import Vue from 'vue'

//引入uview
import uView from "uview-ui";
Vue.use(uView);

// 引入store
// import store from '@/store';

// 引入uView提供的对vuex的简写法文件
// let vuexStore = require('@/store/$u.mixin.js');
// Vue.mixin(vuexStore);

Vue.prototype.actionUrl = 'http://192.168.1.3:8011/api/common/upload'
//给图片路径添加路径
Vue.prototype.getimgsrc = function(url){
	let urlk = url;
	let str = RegExp('http');
	let newUrl;
	//通过三元运算符进行判断该图片是否含有http域名，没有就拼接上去https://xcx.yichedi.com/
	str.test(urlk) ? newUrl = urlk : newUrl = 'http://192.168.1.3:8011' + urlk;
	const urls = newUrl
	return urls
}




Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})

import httpInterceptor from '@/common/http.interceptor.js'
// 这里需要写在最后，是为了等Vue创建对象完成，引入"app"对象(也即页面的"this"实例)
Vue.use(httpInterceptor, app)


app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
	// store,
    app
  }
}
// #endif