<template>
	<view>
		<heads></heads>
		<banner></banner>
		<!-- 分类栏 -->
		<u-gap :height="25"></u-gap>
		<view class="navhead">
			<view class="">工程师种类</view>
			<view class="">工程师级别</view>
			<view class="">接单数量</view>
			<view class="">评论排序</view>
		</view>
		<!-- 列表 -->
		<view class="gcsList" v-for="index in 4" :key="index">
			<view class="gcshead">
				<image src="../../static/logo.png" mode=""></image>
			</view>
			<view class="gcsinfor">
				<view class="name">周师傅</view>
				<u-gap :height="10"></u-gap>
				<view class="dengji">
					<view class="">种类：机械工程师</view>
					<view class="">级别：高级工程师</view>
				</view>
				<u-gap :height="8"></u-gap>
				<view class="num">
					<view class="">接单数量：133单</view>
					<view class="">评价：优</view>
				</view>
				<u-gap :height="8"></u-gap>
				<view class="sanchang u-line-3">
					擅长：啊收到回复的按开机的说法看见的了；肯定是昂；分类按理说代缴罚款老师的拉客的肌肤
				</view>
				<u-gap :height="20"></u-gap>
				<view class="gcsbut">
					<!-- <view class="">在线资讯</view> -->
					<view class="" @tap="to_sahngjiaIfor">查看详情</view>
				</view>
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
			//商家详情页
			to_sahngjiaIfor(){
				uni.navigateTo({
					url:"/pages/sahngJiaInfor/sahngJiaInfor"
				})
			},
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
.gcsList{
	border: 1rpx solid #ebebeb;
	width: 90%;
	margin:15rpx auto;
	display: flex;
	padding: 15rpx;
	.gcshead{
		flex: 1;
		image{
			height: 200rpx;
			width: 200rpx;
			border-radius: 50%;
		}
	}
	.gcsinfor{
		flex: 2;
		.dengji{
			display: flex;
			font-size: 23rpx;
			color: #6d6d6d;
			view{
				flex: 1;
			}
		}
		.num{
			display: flex;
			font-size: 23rpx;
			color: #6d6d6d;
			view{
				flex: 1;
			}
		}
		.sanchang{
			font-size: 23rpx;
			color: #6d6d6d;
		}
		.gcsbut{
			display: flex;
			view{
				border-radius: 15rpx;
				padding: 5rpx;
				border: 1rpx solid #0096e1;
				color: #0096e1;
				margin-right: 20rpx;
				font-size: 23rpx;
			}
		}
	}
}
</style>
