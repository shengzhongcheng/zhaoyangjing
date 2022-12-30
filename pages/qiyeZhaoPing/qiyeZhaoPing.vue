<template>
	<view>
		<view class="navhead">
			<view class="">加工工艺</view>
			<view class="">全国</view>
			<view class="">发布时间</view>
		</view>
		<view class="ordList" v-for="index in 5" :key="index">
			<view class="listBoxLeft">
				<image src="../../static/logo.png" mode=""></image>
			</view>
			<view class="listBoxright">
				<u-gap :height="20"></u-gap>
				<view class="name u-line-1">原照状也说的哈健康的哈发阿斯蒂芬生卡死</view>
				<u-gap :height="20"></u-gap>
				<view class="jieshao u-line-2">按时发手机客户端即可发撒发的发生的发生的阿斯顿发生的发生货的看法时觉得焕发健康电话费卡上的风景哈卡时间的恢复卡时间的恢复卡机</view>
				<u-gap :height="35"></u-gap>
				<view class="num">
					<!-- <text class="nums">加工量：<text style="color: #1a90ff;">1000pcs</text></text> -->
					<text class="liji" @tap="to_zhaopingInfor">立即查看</text>
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
			//招聘详情
			to_zhaopingInfor(){
				uni.navigateTo({
				url:'../zhaoPingInfor/zhaoPingInfor'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.navhead{
		width: 100%;
		margin: auto;
		padding: 15rpx;
		background-color: #f5f5f5;
		display: flex;
		justify-content: space-around;
		color: #6d6d6d;
		font-size: 25rpx;
	}
.ordList{
		width: 90%;
		margin: auto;
		border-bottom: 1rpx solid #dedede;
		display: flex;
		padding: 30rpx 0rpx;
		.listBoxLeft{
			flex: 2;
			image{
				height: 230rpx;
				width: 230rpx;
			}
		}
		.listBoxright{
			// margin-left: 20rpx;
			flex: 3;
			.name{
				// overflow: hidden;
				// text-overflow: ellipsis;
				// white-space: nowrap;
				width: 400rpx;
				color: #484848;
			}
			.jieshao{
				color: #646464;
				font-size: 19rpx;
			}
			.num{
				width: 100%;
				display: flex;
				justify-content: space-between;
				.nums{
					font-size: 20rpx;
					color: #646464;
				}
				.liji{
					background-color: #1a90ff;
					color: white;
					font-size: 20rpx;
					border-radius: 15rpx;
					padding: 5rpx 10rpx;
				}
			}
		}
	}
</style>
