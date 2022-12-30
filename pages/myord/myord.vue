<template>
	<view>
		<view class="title"><u-search placeholder="请输入你要搜索的内容" v-model="keyword"></u-search></view>
		<view class="class">
			<u-tabs :list="list" :is-scroll="true" :current="current" @change="change"></u-tabs>
		</view>
		<!-- 订单列表 -->
		<view class="list">
			<view class="top">
				<view class="name">河南某程家</view>
				<view class="zt">待支付</view>
			</view>
			<view class="cen">
				<view class="box">
					<view class="img"><image src="../../static/dingyue.png" mode=""></image> </view>
					<view class="infor">
						<u-gap :height="30"></u-gap>
						<view class="shopname">某家加工厂</view>
						<u-gap :height="15"></u-gap>
						<view class="user">
							<view class="chai">材质：多种材质</view>
							<view class="">联系人：段先生</view>
						</view>
						<u-gap :height="8"></u-gap>
						<view class="user" style="flex-wrap: wrap;">
							<view class="chai">加工量：10000pcs</view>
							<view class="">联系方式：12312312312</view>
						</view>
					</view>
				</view>
			</view>
			<view class="bot">
				<view class="name">更多</view>
				<view class="zt">
					<view class="go">去支付</view>
					<view class="no">取消订单</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyword: '',
				list: [{
						name: '全部订单'
					}, {
						name: '待付款'
					}, {
						name: '待发货',
					},{
						name: '待收货',
					},{
						name: '交易成功',
					},{
						name: '已取消',
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
.title{
	width: 90%;
	margin:20rpx auto;
}
.class{
	width: 90%;
	margin:10rpx auto;
}
.list{
	width: 90%;
	margin: auto;
	border: 1rpx solid #e3e3e3;
	.top{
		border-bottom: 1rpx solid #e3e3e3;
		display: flex;
		padding: 10rpx;
		justify-content: space-between;
		.name{
			font-weight: 700;
		}
	}
	.cen{
		padding: 15rpx;
		.box{
			display: flex;
			.img{
				height: 200rpx;
				width: 200rpx;
				image{
					height: 200rpx;
					width: 200rpx;
				}
			}
			.infor{
				.user{
					display: flex;
					font-size: 23rpx;
					white-space: nowrap;
					color: #767676;
					.chai{
						margin-right: 10rpx;
					}
					view{
						flex: 1;
					}
				}
			}
		}
		
	}
	.bot{
		display: flex;
		justify-content: space-between;
		padding: 20rpx;
		border-top: 1rpx solid #e3e3e3;
		.zt{
			font-size: 23rpx;
			display: flex;
			.go{
				padding: 10rpx 20rpx;
				background-color: #1d8aff;
				color: white;
				border-radius: 20rpx;
			}
			.no{
				padding: 10rpx 20rpx;
				border: #1d8aff 1rpx solid;
				color: #1d8aff;
				margin-left: 20rpx;
				border-radius: 20rpx;
			}
		}
	}
}

</style>
