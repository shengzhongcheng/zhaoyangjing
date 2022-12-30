<template>
	<view>
		<view class="backimg">
			<view class="box">
				<view class="title">可用积分</view>
				<u-gap :height="20"></u-gap>
				<view class="money">60005</view>
				<u-gap :height="20"></u-gap>
				<view class="all">累计积分200022</view>
			</view>
			
		</view>
		<view class="list">
			<view class="listitem">
				<view class="left">
					<view class="name">实名认证<text>+100</text> </view>
					<view class="title">注册后三天风华绝代撒娇放假啊扣税的</view>
				</view>
				<view class="right">
					<view class="">+100</view>
				</view>
			</view>
			<view class="listitem">
				<view class="left">
					<view class="name">实名认证<text>+100</text> </view>
					<view class="title">注册后三天风华绝代撒娇放假啊扣税的</view>
				</view>
				<view class="right">
					<view class="">+100</view>
				</view>
			</view>
		</view>
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

<style scoped lang="scss">
.backimg{
	background-color: #199bff;
	height: 300rpx;
	width: 100%;
	.box{
		width: 80%;
		margin: auto;
		.title{
			color: white;
			font-size: 30rpx;
		}
		.money{
			color: white;
			font-size: 40rpx;
			font-weight: 900;
		}
		.all{
			color: white;
			font-size: 30rpx;
		}
	}
}
.list{
	padding-top: 20rpx;
	background-color: white;
	height: 200rpx;
	width: 90%;
	position: relative;
	top: -80rpx;
	left: 50%;
	transform: translateX(-50%);
	.listitem{
		display: flex;
		justify-content: space-between;
		padding: 10rpx;
		width: 90%;
		margin:20rpx auto;
		border: #efefef 1rpx solid;
		box-shadow:4px 4px 4px #efefef;
		.left{
			.name{
				font-size: 25rpx;
				text{
					color: red;
					font-size: 23rpx;
					margin-left: 10rpx;
				}
			}
			.title{
				color: #8a8a8a;
				font-size: 24rpx;
			}
		}
		.right{
			color: #199bff;
			view{
				text-align: center;
				margin-top: 20rpx;
			}
		}
	}
}
</style>
