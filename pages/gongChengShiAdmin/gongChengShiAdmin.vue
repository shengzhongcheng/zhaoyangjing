<template>
	<view>
		<view class="user" >
			<view class="username">工程师123</view>
		</view>
		<u-gap height="15" bg-color="#e3e3e3"></u-gap>
		<view class="userxingxi">
			<view class="title" >个人中心</view>
		</view>
		<view class="list">
			<view class="" @tap="to_gongchengshiInfor">个人中心</view>
		</view>
		<view class="userxingxi">
			<view class="title" >实名认证</view>
		</view>
		<view class="list">
			<view class="" @tap="to_gongchengshiname">实名认证</view>
		</view>
		<view class="userxingxi">
			<view class="title">图纸识别</view>
		</view>
		<view class="list">
			<view class="" @tap="to_fabuTuZhi">发布图纸订单</view>
			<view class="" @tap="to_edTuzhiord">管理所有图纸订单</view>
		</view>
		<view class="userxingxi">
			<view class="title">接受图纸</view>
		</view>
		<view class="list">
			<view class="" @tap="to_huaTuOrd">接受画图订单</view>
			<view class="" @tap="to_huatuOrdAdmin">管理所有画图订单</view>
		</view>
		<view class="userxingxi">
			<view class="title">编程管理</view>
		</view>
		<view class="list">
			<view class="" @tap="to_fabuBianCheng">发布编程订单</view>
			<view class="" @tap="to_edBianCheng">管理编程订单</view>
		</view>
		<view class="userxingxi">
			<view class="title">接受编程</view>
		</view>
		<view class="list">
			<view class="" @tap="to_jieshouBianCheng">接受编程订单</view>
			<view class="" @tap="to_jieshouBianchengAdmin">管理接受编程订单</view>
		</view>
		<view class="userxingxi">
			<view class="title">钱包</view>
		</view>
		<view class="list">
			<view class="" @tap="to_tixianguanli">提现管理</view>
			<view class="" @tap="to_tixianJiLu">申请记录</view>
		</view>
		<u-gap :height="90"></u-gap>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			//提现记录
			to_tixianJiLu(){
				uni.navigateTo({
					url:'../tixianJiLu/tixianJiLu'
				})
			},
			//体现管理
			to_tixianguanli(){
				uni.navigateTo({
					url:'../tixianGuanLi/tixianGuanLi'
				})
			},
			//管理接受编程订单
			to_jieshouBianchengAdmin(){
				uni.navigateTo({
					url:'/pages/jieshouBianchengAdmin/jieshouBianchengAdmin'
				})
			},
			//接受编程订单
			to_jieshouBianCheng(){
				uni.navigateTo({
					url:'/pages/jieshouBianCheng/jieshouBianCheng'
				})
			},
			//发布编程
			to_fabuBianCheng(){
				uni.navigateTo({
					url:'/pages/fabuBianCheng/fabuBianCheng'
				})
			},
			//管理编程
			to_edBianCheng(){
				uni.navigateTo({
					url:'/pages/edBianCheng/edBianCheng'
				})
			},
			//管理画图订单
			to_huatuOrdAdmin(){
				uni.navigateTo({
					url:'/pages/huaTuOrdAdmin/huaTuOrdAdmin'
				})
			},
			//接受画图订单
			to_huaTuOrd(){
				uni.navigateTo({
					url:'/pages/huaTuOrd/huaTuOrd'
				})
			},
			//管理图纸订单
			to_edTuzhiord(){
				uni.navigateTo({
					url:'/pages/edTuZhiOrd/edTuZhiOrd'
				})
			},
			//发布图纸
			to_fabuTuZhi(){
				uni.navigateTo({
					url:'/pages/fabuTuZhi/fabuTuZhi'
				})
			},
			//工程师实名认证
			to_gongchengshiname(){
				uni.navigateTo({
					url:'/pages/gongChengShiNameRen/gongChengShiNameRen'
				})
			},
			//工程师个人中心
			to_gongchengshiInfor(){
				uni.navigateTo({
					url:'/pages/gongChengShiInfor/gongChengShiInfor'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
.user{
	width: 90%;
	margin: auto;
	font-size: 40rpx;
	font-weight: 800;
	padding: 20rpx;
}
.userxingxi{
	width: 90%;
	margin: auto;
	padding: 20rpx 0rpx;
	.title{
		font-weight: 800;
		padding: 0rpx 20rpx;
		border-left: 10rpx solid #308dff;
		font-size: 30rpx;
		color: #308dff;
	}
}
.list{
	width: 90%;
	margin: auto;
	display: flex;
	view{
		white-space: nowrap;
		border: 1rpx solid #f1f1f1;
		padding: 20rpx;
		flex: 1;
		text-align: center;
	}
}
</style>
