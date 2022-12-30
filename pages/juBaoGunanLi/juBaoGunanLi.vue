<template>
	<view>
		<view class="list">
			<view class="left u-line-1">
				<text class="red"></text>
				内同静安寺的开发进度开发发士大夫
			</view>
			<view class="right">
				<view class=""><u-icon name="eye" color="#ff791a" size="40"></u-icon></view>
				<view class=""><u-icon name="close-circle" color="#2979ff" size="38"></u-icon></view>
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
.list{
	width: 90%;
	margin:20rpx auto;
	border: 1rpx solid #dedede;
	display: flex;
	justify-content: space-between;
	padding: 20rpx 20rpx;
	.left{
		font-size: 25rpx;
		.red{
			display: inline-block;
			height: 10rpx;
			width: 10rpx;
			margin-right: 10rpx;
			border-radius: 50%;
			background-color: #ff0000;
		}
		
	}
	.right{
		white-space: nowrap;
		padding: 0rpx 10rpx;
		display: flex;
		view{
			margin-left: 10rpx;
		}
	}
}
</style>
