<template>
	<view>
		<u-gap :height="20"></u-gap>
		<view class="headtitle">
			<view class="top">
				<view class="img">
					<image src="../../static/indexclass/biancheng.png" mode=""></image>
				</view>
				<view class="righttitle">
					<view class="name">寻求无尽加工厂</view>
					<u-gap :height="20"></u-gap>
					<view class="time">发布时间:2022-12-12</view>
					<u-gap :height="20"></u-gap>
					<view class="box">
						<view class="boxfond">
							<text>材质：按时到达时</text>
							<text>地址：四川成都</text>
							<text>加工量：10000pcs</text>
							<text>截至日期：2022-12-12</text>
						</view>
					</view>
				</view>
			</view>
			<u-gap :height="20"></u-gap>
			<view class="shengyuTime">
				<view class="toptime">剩余时间：6天22小时56分</view>
				<view class="body">
					<view class="left">
						<view class="look">
							<view class="">22</view>
							<view class="">浏览企业</view>
						</view>
						<view class="ord">
							<view class="">22</view>
							<view class="">收藏订单</view>
						</view>
					</view>
					<view class="right">
						<view class="but">立即咨询</view>
						<view class="vip">仅限vip查看</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 订单简历 -->
		<view class="jianli">
			<view class=""><u-icon name="pushpin" color="#2797ff" size="32"></u-icon>订单简历</view>
		</view>
		<view class="jianlibox">
			<view class="text">就分开国际法的设计高科技的风口浪尖上雷锋精神的价格翻了个</view>
			<view class="imgjianli">
				<image src="../../static/indexclass/canping.png" mode=""></image>
			</view>
		</view>
		<!-- 订单裂变 -->
		<view class="list">
			<view class="listbox">
				<view class="">四川成都</view>
				<u-gap :height="20"></u-gap>
				<view class="listtime">
					<text>报名剩余时间</text>
					<text style="color: red;">8天12:21:21</text>
				</view>
				<view class="baojia">
					<view class="">立即报价</view>
				</view>
			</view>
			<view class="listbox">
				<view class="">四川成都</view>
				<u-gap :height="20"></u-gap>
				<view class="listtime">
					<text>报名剩余时间</text>
					<text style="color: red;">8天12:21:21</text>
				</view>
				<view class="baojia">
					<view class="">立即报价</view>
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

<style>
page{
	background-color: #f0f0f0;
}
</style>
<style scoped lang="scss">
	.headtitle{
		padding: 10rpx;
		background-color: white;
		width: 90%;
		margin: auto;
		.top{
			margin: auto;
			width: 90%;
			display: flex;
			justify-content: space-between;
			.img{
				height: 200rpx;
				width: 200rpx;
				image{
					height: 200rpx;
					width: 200rpx;
				}
			}
			.righttitle{
				margin-left: 10rpx;
				.name{
					font-size: 30rpx;
					font-weight: 800;
				}
				.time{
					font-size: 24rpx;
					color: #a3a3a3;
				}
				.box{
					background-color: #e3e7e1;
					.boxfond{
						display: flex;
						justify-content: space-between;
						flex-wrap: wrap;
						font-size: 20rpx;
						text{
							padding: 10rpx;
						}
					}
				}
			}
		}
		.shengyuTime{
			background-color: #e3e7e1;
			width: 90%;
			margin: auto;
			.toptime{
				padding: 20rpx;
				color: red;
				font-size: 30rpx;
				font-weight: 800;
			}
			.body{
				padding: 10rpx;
				display: flex;
				justify-content: space-between;
				.left{
					display: flex;
					text-align: center;
					.ord{
						margin-left: 10rpx;
					}
				}
				.right{
					.but{
						padding: 6rpx 20rpx;
						background-color: #1c95ff;
						color: white;
						text-align: center;
						border-radius: 20rpx;
						margin-right: 10rpx;
					}
					.vip{
						font-size: 23rpx;
						color: #a3a3a3;
						text-align: center;
					}
				}
			}
		}
	}
	.jianli{
		width: 90%;
		margin: auto;
		padding: 20rpx;
	}
	.jianlibox{
		background-color: white;
		width: 90%;
		margin: auto;
		.text{
			text-align: center;
			color: #a3a3a3;
			font-size: 24rpx;
		}
		.imgjianli{
			width: 100%;
			height: 400rpx;
			image{
				width: 100%;
				height: 400rpx;
			}
		}
	}
	.list{
		width: 90%;
		margin: auto;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		
		.listbox{
			border: 1rpx solid #a3a3a3;
			width: 330rpx;
			border-radius: 20rpx;
			padding: 30rpx 20rpx;
		}
		.listtime{
			display: flex;
			font-size: 23rpx;
			justify-content: space-between;
		}
		.baojia{
			background-color: red;
			color: white;
			text-align: center;
			padding: 20rpx;
			margin: 20rpx;
			border-radius: 20rpx;
		}
	}
</style>
