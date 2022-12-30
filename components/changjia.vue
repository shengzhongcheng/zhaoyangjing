<template>
	<view>
		<view class="ordList" v-for="index in 4" >
			<view class="box">
				<view class="listBoxLeft">
					<image src="../static/logo.png" mode=""></image>
				</view>
				<view class="listBoxright">
					<u-gap :height="20"></u-gap>
					<view class="name u-line-1">原照状也说的哈健康的哈发阿斯蒂芬生卡死</view>
					<u-gap :height="10"></u-gap>
					<view class="jieshao"><text>设备：水帘柜</text></view>
					<u-gap :height="10"></u-gap>
					<view class="jieshao u-line-1">主营产品：机床导轨护照后市的看法放松的空间</view>
					<u-gap :height="10"></u-gap>
					<view class="jieshao">雇员数量：20人</view>
					<u-gap :height="10"></u-gap>
					<view class="jieshao">工厂面积：1000-3000㎡</view>
				</view>
			</view>
			<view class="num">
				<view class="nums"><u-icon name="map-fill" color="#2979ff" size="25"></u-icon>广东深圳</view>
				<text class="liji">点击查看</text>
			</view>
			<u-gap :height="10"></u-gap>
		</view>
	</view>
</template>

<script>
	export default {
		name:"changjia",
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped lang="scss">
.ordList{
		padding: 0rpx 15rpx;
		background-color: #f0f0f0;
		width: 90%;
		margin:20rpx auto;
		// border-bottom: 1rpx solid #dedede;
		.box{
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
					width: 350rpx;
					color: #484848;
				}
				.jieshao{
					width: 350rpx;
					color: #646464;
					font-size: 19rpx;
				}
			}
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
</style>