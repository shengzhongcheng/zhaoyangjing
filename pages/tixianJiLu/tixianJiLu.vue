<template>
	<view>
		<view class="listbox" v-for="index in 5">
			<view class="title"><text>支付宝</text><text style="color: red;">￥100</text> </view>
			<view class="tixianInfon">
				<view class="infor">
					<view class="name">申请提现时间：</view>
					<view class="namechail">2022-12-12 20:40</view>
				</view>
				<view class="infor">
					<view class="name">提现金额：</view>
					<view class="namechail">￥200.00</view>
				</view>
				<view class="infor">
					<view class="name">手续费：</view>
					<view class="namechail">￥0.5</view>
				</view>
				<view class="infor">
					<view class="name">提现账号：</view>
					<view class="namechail">5552555222777</view>
				</view>
				<view class="infor">
					<view class="name">申请状态：</view>
					<view class="namechail" style="color: green;">已到账</view>
				</view>
			</view>
		</view>
		
		<u-gap :height="50"></u-gap>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
page{
	background-color: #f4f4f4;
}
</style>
<style scoped lang="scss">
	.listbox{
		width: 90%;
		margin:20rpx auto;
		background-color: white;
		padding: 20rpx;
		border-radius: 20rpx;
		.title{
			padding: 10rpx;
			font-weight: 600;
			display: flex;
			justify-content: space-between;
			border-bottom: 1rpx solid #f3f3f3;
		}
		.tixianInfon{
			.infor{
				display: flex;
				padding: 10rpx;
				justify-content: space-between;
				align-items: center;
				.name{
					color: #797979;
					font-size: 26rpx;
				}
				.namechail{
					color: #9d9d9d;
					font-size: 24rpx;
				}
			}
		}
	}
</style>
