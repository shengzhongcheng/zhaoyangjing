<template>
	<view>
		<!-- 订单列表 -->
		
		<view class="list">
			<view class="top">
				<view class="name">河南某程家</view>
				<view class="zt">
					<u-checkbox></u-checkbox>
				</view>
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
							<view class="chai">有效日期：2022-12-12</view>
							<view class="">联系方式：12312312312</view>
						</view>
						<view class="user" style="flex-wrap: wrap;">
							<view class="chai" style="color: red;">应付金额：￥10000</view>
							<view class="">
								<u-number-box v-model="value" @change="valChange"></u-number-box>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="bot">
				<view class="name"></view>
				<view class="zt">
					<view class="go">移入收藏夹</view>
					<view class="no">删除</view>
				</view>
			</view>
			
		</view>
		<view class="bottom">
			<view class="left">
				<view class="">全选<u-checkbox></u-checkbox></view>
			</view>
			<view class="right">
				<view class="heji">合计：<text>￥20000</text></view>
				<view class="jieshuan">结算</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: 0
			}
		},
		methods: {
			valChange(e) {
				console.log('当前值为: ' + e.value)
			}
		}
	}
</script>

<style scoped lang="scss">
.title{
	width: 90%;
	margin: auto;
}
.class{
	width: 90%;
	margin: auto;
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
.bottom{
	border-top: #e2e2e2 1rpx solid;
	padding: 20rpx;
	position: absolute;
	bottom: 0rpx;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	.right{
		display: flex;
		align-items: center;
		.heji{
			text{
				color: red;
			}
		}
		.jieshuan{
			padding: 6rpx 30rpx;
			color: white;
			border-radius: 20rpx;
			margin-left: 20rpx;
			background-color: #ff9808;
		}
	}
}
</style>
