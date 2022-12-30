<template>
	<view>
		<view class="status_bar">
		</view>
		<u-gap :height="40"></u-gap>
		<view class="title">欢迎使用照样精</view>
		<u-gap :height="80"></u-gap>
		<view class="nav">
			<view class="" :class="{col:type == 1}" @tap="types(1)">账号密码登陆</view>
			<view class="" :class="{col:type == 2}" @tap="types(2)">手机号快速登录</view>
		</view>
		<u-gap :height="40"></u-gap>
		<!-- 账号密码输入框 -->
		<view class="inp" v-show="type == 1">
			<view class="code">
				<u-icon name="account-fill" color="#acacac" size="40"></u-icon>
				<u-input v-model="account" placeholder="请输入账号"/>
			</view>
			<u-gap :height="40"></u-gap>
			<view class="code">
				<u-icon name="lock-fill"  color="#acacac" size="40"></u-icon>
				<u-input v-model="password" type="password" placeholder="请输入密码"/>
			</view>
		</view>
		<!-- 手机号输入框 -->
		<view class="inp" v-show="type == 2">
			<view class="code">
				<u-icon name="phone-fill"  color="#acacac" size="40"></u-icon>
				<u-input v-model="usercode" placeholder="请输入手机号"/>
			</view>
			<u-gap :height="40"></u-gap>
			<view class="code">
				<u-icon name="chat-fill"  color="#acacac" size="40"></u-icon>
				<u-input v-model="code" placeholder="请输入验证码"/>
				<view class="codeget" @click="getcode">{{codetext}}</view>
			</view>
		</view>
		<!-- 登录按钮 -->
		<u-gap :height="90"></u-gap>
		<view class="login" v-show="type == 1">
			<u-button type="primary" @click="login">立即登录</u-button>
		</view>
		<view class="login" v-show="type == 2">
			<u-button type="primary" @click="codelogin">立即登录</u-button>
		</view>
		<!-- 记住密码 -->
		<u-gap :height="20"></u-gap>
		<view class="jizhu">
			<view class="" @tap="to_zhuche">立即注册</view>
			<view class="">忘记密码</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type:1,
				//账号
				account:'',
				//密码
				password:'',
				//手机号
				usercode:'',
				//验证码
				code:'',
				//倒计时
				codetext:'获取验证码',
				s: 10,	//默认倒计时
				second: 0,
				send: true,//按钮可以点击
			}
		},
		methods: {
			//验证码登录
			codelogin(){
				if(this.$u.test.mobile(this.usercode) && this.code != ''){
					this.$u.post('/api/v1/user/mobilelogin',{
						mobile:this.usercode,
						captcha:this.code
					})
				}else{
					this.$u.toast("请输入正确的手机号及验证码")
				}
			},
			//获取验证码
			async getcode(){
				if(this.$u.test.mobile(this.usercode)){
					console.log('1')
					let res = await this.$u.post('/api/sms/send',{
						mobile:this.mobile,
						event:'mobilelogin'
					})
					console.log(res)
					if(res.code === 1){
						this.sendCodeBtn()
					}
				}else{
					this.$u.toast("请输入正确的手机号")
				}
				
			},
			// 发送验证码
			sendCodeBtn() {
				console.log('111')
				let that = this;
				// 防止多次重复点击
				if(!that.send){
					return false;
				}
				// 发送验证码
				that.send = false;
				uni.showToast({
					title:'发送成功',
					icon:'none',
					success: () => {
						this.time();	// 倒计时
					}
				})
			},
			// 倒计时
			time(){
				let that = this;
				that.second = that.s;
				let interval = setInterval(function(){
					if(that.second == 1){
						that.send = true;
						that.second = that.s;
						that.codetext = "获取验证码"
						clearInterval(interval);
					}else {
						that.codetext = that.second
						console.log(that.second)
						that.second--;
					}
				},1000)
			},
			/* 
			 
			 账号密码登录
			 
			 */
			//登录
			login(){
				if(this.$u.test.mobile(this.account)){
					this.$u.post('/api/v1/user/login',{
						account:this.account,
						password:this.password
					}).then(res =>{
						console.log(res)
						if(res.code == 1){
							uni.setStorageSync('token',res.data.userinfo.token)
							// uni.setStorageSync('user_id',res.data.userinfo.user_id)
							uni.setStorageSync('nickname',res.data.userinfo.nickname)
							uni.setStorageSync('group_id',res.data.userinfo.group_id)
							this.$u.toast('登录成功');
							setTimeout(()=>{
								uni.reLaunch({
									url:'../index/index'
								})
							},1500)
						}
					})
				}else if(this.password == ''){
					this.$u.toast('请输入密码');
				}else if(!this.$u.test.mobile(this.account)){
					this.$u.toast('请输入正确的手机号');
				}
				
				
			},
			//立即注册
			to_zhuche(){
				uni.navigateTo({
					url:'/pages/zhuChe/zhuChe'
				})
			},
			//切换登录方式
			types(idnex){
				this.type = idnex
			}
		}
	}
</script>

<style scoped lang="scss">
	//头部占位符
.status_bar {
	height: var(--status-bar-height);
	width: 100%;
}
.title{
	width: 90%;
	margin: auto;
	font-size: 40rpx;
	color: #2ba3fe;
	font-weight: 900;
}
.nav{
	width: 80%;
	margin: auto;
	display: flex;
	justify-content: space-between;
	.col{
		color: #2ba3fe;
	}
}
.inp{
	width: 75%;
	margin: auto;
	.code{
		position: relative;
		display: flex;
		position: relative;
		.codeget{
			position: absolute;
			right: 20rpx;
			top: 50%;
			transform: translateY(-50%);
			background-color: #2ba3fe;
			color: white;
			padding: 10rpx 10rpx;
			border-radius: 20rpx;
			font-size: 20rpx;
		}
	}
}
.login{
	width: 90%;
	margin: auto;
}
.jizhu{
	display: flex;
	justify-content: space-between;
	width: 90%;
	margin: auto;
	color: #2ba3fe;
	font-size: 23rpx;
}
</style>
