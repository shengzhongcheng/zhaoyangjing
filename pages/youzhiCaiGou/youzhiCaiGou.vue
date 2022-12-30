<template>
	<view>
		<view class="ordList" v-for="index in 4" >
			<view class="listBoxLeft">
				<image src="../../static/logo.png" mode=""></image>
			</view>
			<view class="listBoxright">
				<u-gap :height="20"></u-gap>
				<view class="name u-line-1">原照状也说的哈健康的哈发阿斯蒂芬生卡死</view>
				<u-gap :height="20"></u-gap>
				<view class="jieshao"><text>订单号：R200989343</text> <text>加工购量：1000个</text> </view>
				<u-gap :height="35"></u-gap>
				<view class="jieshao" style="display: flex;justify-content: space-between;"><text style="background-color: #d8d8d8;padding: 10rpx 10rpx;">音响</text> <view style="padding: 10rpx 10rpx;"><u-icon name="map-fill" color="#2979ff" size="25"></u-icon>广东深圳</view> </view>
				<u-gap :height="35"></u-gap>
				<view class="num">
					<!-- <text class="nums">加工量：<text style="color: #1a90ff;">1000pcs</text></text> -->
					<text class="liji" @tap="to_ordInfor">立即报价</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			//跳转订单详情
			to_ordInfor(){
				uni.navigateTo({
					url:'../ordInfor/ordInfor'
				})
			},
		}
	}
</script>

<style scoped lang="scss">
.ordList{
		width: 90%;
		margin: auto;
		border-bottom: 1rpx solid #dedede;
		display: flex;
		padding: 30rpx 0rpx;
		.listBoxLeft{
			flex: 2;
			image{
				height: 200rpx;
				width: 200rpx;
			}
		}
		.listBoxright{
			margin-left: 20rpx;
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