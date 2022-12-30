<template>
	<view>
		<u-gap :height="80"></u-gap>
		<view class="tishi">
			<image src="../../static/dingyue.png" mode=""></image>
		</view>
		<view class="title" >订阅提醒</view>
		<view class="text">平台新闻动态一目了然</view>
		<u-gap :height="30"></u-gap>
		<view class="but"><u-button type="primary" size="mini">立即订阅</u-button></view>
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
.tishi{
	width: 90%;
	margin: auto;
	text-align: center;
}
.title{
	color: #19a2cb;
	font-size: 35rpx;
	width: 90%;
	margin: auto;
	text-align: center;
}
.text{
	color: #22c4e8;
	font-size: 28rpx;
	text-align: center;
}
.but{
	width: 90%;
	margin: auto;
	text-align: center;
}
</style>
