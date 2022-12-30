<template>
	<view>
		<bannerimg></bannerimg>
		<u-gap :height="25"></u-gap>
		<view class="title">我是标题</view>
		<u-gap :height="25"></u-gap>
		<view class="navhead">
			<view class="">发布日期:2022-12-12</view>
			<view class="">浏览量:340</view>
			<view class=""><u-icon name="map" color="#b9b9b9" size="32"></u-icon>广东-惠州</view>
		</view>
		<u-gap :height="25"></u-gap>
		<view class="text">
			全部内容
		</view>
		
	</view>
</template>

<script>
	import bannerimg from '@/components/bannerimg.vue'
	export default {
		data() {
			return {
				
			}
		},
		components:{
			bannerimg
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
.title{
	width: 90%;
	margin: auto;
	text-align: center;
	font-size: 30rpx;
	font-weight: 800;
}
.navhead{
	width: 90%;
	margin: auto;
	padding: 15rpx;
	background-color: #ebebeb;
	display: flex;
	justify-content: space-around;
	color: #6d6d6d;
	font-size: 25rpx;
}
.text{
	width: 90%;
	margin: auto;
	font-size: 25rpx;
	color: #6d6d6d;
}
</style>
