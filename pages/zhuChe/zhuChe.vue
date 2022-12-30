<template>
	<view>
		<view class="status_bar">
		</view>
		<u-gap :height="40"></u-gap>
		<view class="title">立即注册</view>
		<u-gap :height="80"></u-gap>
		<!-- 账号密码输入框 -->
		<view class="inp" >
			<view class="code">
				<u-icon name="account-fill"  color="#acacac" size="40"></u-icon>
				<text style="width: 20rpx;"></text>
				<u-input v-model="username" placeholder="请输入名称"/>
			</view>
			<u-gap :height="20"></u-gap>
			<view class="code">
				<u-icon name="grid-fill"  color="#acacac" size="40"></u-icon>
				<text style="width: 20rpx;"></text>
				<u-radio-group >
					<u-radio 
						@change="radioChange" 
						v-for="(item, index) in list" :key="index" 
						:name="item.name"
						:disabled="item.disabled"
						label-size="20"
					>
						{{item.name}}
					</u-radio>
				</u-radio-group>
			</view>
			<u-gap :height="20"></u-gap>
			<view class="code">
				<u-icon name="phone-fill"  color="#acacac" size="40"></u-icon>
				<text style="width: 20rpx;"></text>
				<u-input v-model="mobile"  placeholder="请输入手机号"/>
			</view>
			<u-gap :height="20"></u-gap>
			<view class="code">
				<u-icon name="chat-fill"  color="#acacac" size="40"></u-icon>
				<text style="width: 20rpx;"></text>
				<u-input v-model="code"  placeholder="请输入验证码"/>
				<view class="codeget" @click="getcode">{{codetext}}</view>
				
			</view>
			<u-gap :height="20"></u-gap>
			<view class="code">
				<u-icon name="lock-fill"  color="#acacac" size="40"></u-icon>
				<text style="width: 20rpx;"></text>
				<u-input v-model="password" type="password" placeholder="请输入密码"/>
			</view>
		</view>
		<!-- 登录按钮 -->
		<u-gap :height="90"></u-gap>
		<view class="login">
			<u-button type="primary" @click="register">立即注册</u-button>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//倒计时
				codetext:'获取验证码',
				s: 10,	//默认倒计时
				second: 0,
				send: true,//按钮可以点击
				//账号
				username:'',
				//密码
				password:'',
				//手机号
				mobile:'',
				//验证码
				code:'',
				//注册类型
				group_id:null,
				list: [],
			}
		},
		onLoad() {
			this.getregType()//获取注册类型
		},
		methods: {
			//获取验证码
			async getcode(){
				if(this.$u.test.mobile(this.mobile)){
					console.log('1')
					let res = await this.$u.post('/api/sms/send',{
						mobile:this.mobile,
						event:'register'
					})
					console.log(res)
					if(res.code === 1){
						this.sendCodeBtn()
					}else{
						this.$u.toast('发送失败')
					}
				}else{
					this.$u.toast("请输入手机号")
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
			//注册账号
			async register(){
				if(this.username == '' || this.password == '' || this.mobile == '' || this.code == '' || this.group_id == ''){
					this.$u.toast('请填写完整信息');
				}else if(this.$u.test.mobile(this.mobile)){
					let res = await this.$u.post('/api/v1/user/register',{
						username:this.username,
						password:this.password,
						mobile:this.mobile,
						code:this.code,
						group_id:this.group_id
					})
					console.log('reg',res)
					if(res.code == 1){
						uni.setStorageSync('token',res.data.userinfo.token)
						// uni.setStorageSync('user_id',res.data.userinfo.user_id)
						uni.setStorageSync('nickname',res.data.userinfo.nickname)
						uni.setStorageSync('group_id',res.data.userinfo.group_id)
						this.$u.toast('注册成功');
						setTimeout(()=>{
							uni.reLaunch({
								url:'../index/index'
							})
						},1500)
					}
				}else if(!this.$u.test.mobile(this.mobile)){
					this.$u.toast('请填写正确的手机号');
				}
				
			},
			//获取注册类型
			async getregType(){
				let res = await this.$u.post('/api/v1/user/regType')
				console.log('注册类型',res)
				this.list = res.data
			},
			
			//单选框
			radioChange(e) {
				console.log(e);
				for(let i in this.list){
					if(e == this.list[i].name){
						this.group_id=this.list[i].id
					}
				}
				console.log('typeid',this.group_id)
			},
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
	width: 90%;
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
