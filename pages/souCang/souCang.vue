<template>
	<view>
		<view class="list">
			<view class="cen">
				<view class="box">
					<view class="img"><image src="../../static/dingyue.png" mode=""></image> </view>
					<view class="infor">
						<u-gap :height="30"></u-gap>
						<view class="shopname">某家加工厂</view>
						<u-gap :height="15"></u-gap>
						<view class="user">
							<view class="chai">收藏时间：2022-12-12</view>
							<view class="">地区：广东</view>
							<view class="">联系人：牛牛</view>
						</view>
						<u-gap :height="40"></u-gap>
						<view class="user" style="flex-wrap: wrap;">
							<text class="bian">点击查看</text>
							<text class="bian">取消收藏</text>
						</view>
					</view>
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
			
		}
	}
</script>

<style scoped lang="scss">
.list{
	width: 90%;
	margin:20rpx auto;
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
					flex-wrap: wrap;
					.bian{
						margin-left: 10rpx;
						border-radius: 20rpx;
						border: 1rpx solid #1d8aff;
						padding: 10rpx 20rpx;
						color: #1d8aff;
					}
					color: #767676;
					
					view{
						margin-right: 10rpx;
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
