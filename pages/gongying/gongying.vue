<template>
	<view>
		<heads></heads>
		<banner></banner>
		<!-- 分类栏 -->
		<u-gap :height="25"></u-gap>
		<view class="navhead">
			<view class="">全部分类</view>
			<view class="">所有地区</view>
			<view class="">价格</view>
			<view class="">全部评价</view>
		</view>
		<!-- 产品列表 -->
		<view class="box">
			<view class="chanping" v-for="index in 3" :key="index">
				<view class="imag">
					<image src="../../static/logo.png" mode=""></image>
				</view>
				<view class="name u-line-1">石灰消音器</view>
				<view class="jiage">
					<view style="color: #1a90ff;">￥15.00/台</view> <view>一台起订</view>
				</view>
				<u-gap :height="10"></u-gap>
				<view class="dizhi">
					<view><u-icon name="map-fill" color="#1a90ff"></u-icon>广东惠州</view>
					<view class="blue" @tap="to_ordInfor">查看详情</view>
				</view>
				<u-gap :height="25"></u-gap>
				<view class="gongsname">安静快乐的有限公司</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import heads from '@/components/headernav.vue'
	import banner from '@/components/bannerimg.vue'
	export default {
		components:{
			heads,
			banner
		},
		data() {
			return {
				
			}
		},
		methods: {
			to_ordInfor(){
				uni.navigateTo({
					url:'/pages/ordInfor/ordInfor'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
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
.box{
	width: 90%;
	margin: auto;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	.chanping{
		width: 320rpx;
		margin: 20rpx 0rpx;
		border: 1rpx solid #bdbdbd;
		border-radius: 10rpx;
		border-bottom: 1rpx solid #1a90ff;
		.imag{
			image{
				width: 320rpx;
				height: 200rpx;
			}
		}
		.name{
			padding: 0rpx 8rpx;
		}
		.jiage{
			padding: 0rpx 8rpx;
			display: flex;
			font-size: 24rpx;
			view{
				flex: 1;
			}
		}
		.dizhi{
			padding: 0rpx 8rpx;
			display: flex;
			font-size: 23rpx;
			view{
				flex: 1;
			}
			.blue{
				text-align: center;
				background-color: #1a90ff;
				color: white;
				border-radius: 15rpx;
				padding: 3rpx;
			}
		}
		.gongsname{
			 border-top: 1rpx solid #ebebeb;
			 text-align: center;
			 padding: 10rpx 0rpx;
		}
	}
}

</style>
