<template>
	<view>
		<view class="top">
			<u-tabs :list="list" :is-scroll="false" :current="current" @change="change"></u-tabs>
		</view>
		<u-gap :height="35"></u-gap>
		<view class="youshuiList">
			<view class="list">
				<view class="money">￥88</view>
				<view class="text">
					<view class="tis">现金卷</view>
					<u-gap :height="10"></u-gap>
					<view class="tis">满188可用</view>
					<u-gap :height="10"></u-gap>
					<view class="time">有效期2022-12-12</view>
				</view>
				<view class="but">
					<text class="">立即激活</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						name: '全部'
					}, {
						name: '未使用'
					}, {
						name: '已使用',
					},{
						name: '已过期',
					}],
				current: 0
			}
		},
		methods: {
			change(index) {
				this.current = index;
			}
		}
	}
</script>

<style scoped lang="scss">
.youshuiList{
	width: 90%;
	margin: auto;
	.list{
		display: flex;
		align-items: center;
		margin: 20rpx 0rpx;
		border-radius: 15rpx;
		width: 100%;
		height: 200rpx;
		border: 1rpx solid #ff7577;
		.money{
			flex: 2;
			font-size: 40rpx;
			color: #ff7577;
			font-weight: 700;
			text-align: center;
		}
		.text{
			flex: 2;
			.tis{
				font-weight: 700;
			}
			.time{
				font-size: 23rpx;
				color: #757575;
				white-space: nowrap;
			}
		}
		.but{
			flex: 2;
			text-align: center;
			text{
				padding: 5rpx 20rpx;
				border-radius: 20rpx;
				border: 5rpx #ff7577 solid;
				color: #ff7577;
				font-size: 24rpx;
				// margin-right: rpx;
			}
		}
		
	}
}
</style>
