<template>
	<view>
		<bannerimg></bannerimg>
		<u-gap :height="25"></u-gap>
		<view class="navhead">
			<view class="">工程师种类</view>
			<view class="">工程师级别</view>
			<view class="">接单数量</view>
			<view class="">评论排序</view>
		</view>
		<u-gap :height="25"></u-gap>
		<view class="gcsList" v-for="index in 4" :key="index" @tap="to_zhixunInfor">
			<view class="gcshead">
				<image src="../../static/logo.png" mode=""></image>
			</view>
			<view class="gcsinfor">
				<view class="name">暗红色的肌肤哈时间快点发货及时召开大会</view>
				<u-gap :height="15"></u-gap>
				<view class="sanchang u-line-2">
					擅长：啊收到回复的按开机的说法看见的了；肯定是昂；分类按理说代缴罚款老师的拉客的肌肤
				</view>
				<u-gap :height="20"></u-gap>
				<view class="dengji">
					<view class="">发布时间：2022-12-12</view>
					<view class="">浏览量：30</view>
				</view>
			</view>
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
			to_zhixunInfor(){
				uni.navigateTo({
					url:'/pages/zhiXunInfor/zhiXunInfor'
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
			// border-radius: 50%;
		}
	}
	.gcsinfor{
		flex: 2;
		.name{
			width: 430rpx;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
		.dengji{
			display: flex;
			font-size: 23rpx;
			color: #6d6d6d;
			view{
				text-align: center;
				flex: 1;
				white-space: nowrap;
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
