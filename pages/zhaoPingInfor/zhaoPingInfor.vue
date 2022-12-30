<template>
	<view>
		<view class="title">采购如图五金管</view>
		<view class="navhead">
			<view class="left">订单编号:R2022302548</view>
			<view class="right">
				<view class=""><u-icon name="map" color="#646464" size="28"></u-icon>广东-惠州</view>
				<view class="time">发布时间：2022-12-12</view>
			</view>
		</view>
		<u-gap :height="30"></u-gap>
		<!-- 需求 -->
		<view class="youzhiOrd">
			<u-gap :height="15"></u-gap>
			<view class="name">需求</view>
			<u-gap :height="25"></u-gap>
		</view>
		<view class="text">
			采购如图五金管;需要5万只，货到浙江温州，有货的联系，采购如图五金管;需要5万只，货到浙江温州，有货的联系
		</view>
		<view class="list">
			<view class="">加工量：50000件</view>
			<view class="">截止日期：2022-12-12</view>
			<view class="">联系方式：15512345612</view>
		</view>
		<u-gap :height="20" bg-color="#f5f5f5"></u-gap>
		<!-- 产品展示 -->
		<view class="youzhiOrd">
			<u-gap :height="15"></u-gap>
			<view class="name">产品展示</view>
			<u-gap :height="25"></u-gap>
		</view>
		<view class="img">
			<image src="../../static/dingyue.png" mode=""></image>
		</view>
		<u-gap :height="20" bg-color="#f5f5f5"></u-gap>
		<!-- 友情提示 -->
		<view class="youzhiOrd">
			<u-gap :height="15"></u-gap>
			<view class="name">友情提示</view>
			<u-gap :height="25"></u-gap>
		</view>
		<view class="listbox">
			<view class="">1.订单交易需谨慎，如双方交易发生任何问题，请自行解决，本网站慨不负责</view>
			<view class="">1.订单交易需谨慎，如双方交易发生任何问题，请自行解决，本网站慨不负责</view>
			<view class="">1.订单交易需谨慎，如双方交易发生任何问题，请自行解决，本网站慨不负责</view>
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
.title{
	text-align: center;
	font-size: 30rpx;
	font-weight: 700;
	padding: 25rpx;
}
.navhead{
	width: 95%;
	margin: auto;
	background-color: #eaeaea;
	display: flex;
	justify-content: space-between;
	padding: 20rpx 10rpx;
	color: #646464;
	.left{
		font-size: 23rpx;
		flex: 1.6;
	}
	.right{
		flex: 2;
		display: flex;
		font-size: 23rpx;
		justify-content: space-between;
		white-space: nowrap;
		.time{
			margin-left: 10px;
		}
	}
}
.youzhiOrd{
		width: 100%;
		// border-bottom: 1rpx solid #dedede;
		.name{
			width: 90%;
			margin: auto;
			font-weight: 600;
			font-size: 35rpx;
			border-left: 10rpx solid #1a90ff;
			padding-left: 10rpx;
			color: #1a90ff;
		}
	}
	.text{
		width: 90%;
		margin: auto;
		font-size: 20rpx;
		color: #1a90ff;
	}
	.list{
		width: 90%;
		margin:20rpx auto;
		view{
			font-size: 20rpx;
			color: #646464;
			padding: 10rpx 0rpx;
			border-bottom: 1rpx solid #d9d9d9;
		}
	}
	.img{
		width: 90%;
		margin:20rpx auto;
		height: 400rpx;
		// border: 1rpx solid red;
		image{
			height: 400rpx;
			width: 100%;
		}
	}
	.listbox{
		width: 90%;
		margin: auto;
		font-size: 20rpx;
		view{
			margin: 20rpx 0rpx;
		}
	}
</style>
