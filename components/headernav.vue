<template>
	<view>
		<!-- <view class="status_bar">
		</view> -->
		<view class="navtitle">
			<view class="navbox">
				<view class="icon" @click="poup"><u-icon name="list-dot" color="#f7f7f7" size="40"></u-icon></view>
				<view class="inp" @tap="to_sousuo"><u-search placeholder="请输入你要搜索的内容" :disabled="true" :show-action="false"></u-search></view>
				<view class="icon" @click="showPoup"><u-icon name="account-fill" color="#f7f7f7" size="40"></u-icon></view>
			</view>
		</view>
		
		<!-- 弹出层 -->
		<u-popup v-model="show" mode="left">
				
				<view class="tankuang">
					<view class="status_bar">
					</view>
					<view class="user" >
						<!-- <view class="headimg"><u-avatar src="" size="70"></u-avatar></view> -->
						<view class="username" @click="login" v-if="logins">请先登录</view>
					</view>
					<view class="userZxing">
						<view class="name" @tap="to_index">首页<u-icon name="arrow-right" color="#757575" size="28"></u-icon></view>
						<view class="name" @tap="to_ordhome">订单大厅<u-icon name="arrow-right" color="#757575" size="28"></u-icon></view>
						<view class="name" @tap="to_yonghuwenda">用户问答<u-icon name="arrow-right" color="#757575" size="28"></u-icon></view>
						<view class="name" @tap="logout">退出登录<u-icon name="arrow-right" color="#757575" size="28"></u-icon></view>
					</view>
					
				</view>
				
		</u-popup>
	</view>
</template>

<script>
	export default {
		name:"headernav",
		data() {
			return {
				show:false,
				type:uni.getStorageSync('group_id'),
				logins:uni.getStorageSync('token') || true,
			};
		},
		methods: {
			//登录
			login(){
				uni.navigateTo({
					url:'/pages/longin/longin'
				})
			},
			
			//退出登录
			logout(){
				this.$u.post('/api/v1/user/logout').then(res => {
					uni.clearStorageSync()
					uni.reLaunch({
						url:'/pages/index/index'
					})
					this.$u.toast(res.msg)
				})
			},
			//搜索页
			to_sousuo(){
				uni.navigateTo({
					url:'/pages/shousuo/shousuo'
				})
			},
			/* 
			
			 导航部分
			 
			 */
			//用户问答
			to_yonghuwenda(){
				uni.navigateTo({
					url:'/pages/yonghuWenDa/yonghuWenDa'
				})
			},
			//跳转订单大厅
			to_ordhome(){
				uni.navigateTo({
					url:'/pages/ordHome/ordHome'
				})
			},
			//跳转首页
			to_index(){
				uni.reLaunch({
					url:'/pages/index/index'
				})
			},
			//导航弹出框显示
			poup(){
				this.show = true
			},
			
			//跳转用户中心
			showPoup(){
				if(uni.getStorageSync('group_id')){
					if(this.type == 2){
						uni.navigateTo({
							url:'/pages/shopAdmin/shopAdmin'
						})
					}else if(this.type == 3){
						uni.navigateTo({
							url:'/pages/gongChengShiAdmin/gongChengShiAdmin'
						})
					}else if(this.type == 1){
						uni.navigateTo({
							url:'/pages/userAdmin/userAdmin'
						})
					}
				}else{
					uni.navigateTo({
						url:'/pages/longin/longin'
					})
				}

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
.navtitle{
		 width: 100%;
		 padding: 15rpx 0rpx;
		 margin: auto;
		 background-color: #5b5b5b;
		 .navbox{
			 width: 95%;
			 margin: auto;
			 display: flex;
			 align-items: center;
			 justify-content: space-around;
			 .inp{
				flex: 1;
				padding: 0rpx 10rpx;
			 }
			 // .icon{
				//  margin-top: 13rpx;
			 // }
		 }
	 }
	 .tankuang{
		 width: 400rpx;
		 .user{
			display: flex;
			align-items: center;
			margin: 20rpx;
			.username{
				margin-left: 10rpx;
				font-size: 25rpx;
				color: #3a80e8;
				font-size: 30rpx;
				font-weight: 600;
			}
		 }
		 .userZxing{
			 color: #757575;
			.name{
				margin: 20rpx;
				padding: 10rpx 0rpx;
				border-bottom: 1rpx solid #cecece;
				display: flex;
				justify-content: space-between;
			} 
		 }
		 
	 }
</style>