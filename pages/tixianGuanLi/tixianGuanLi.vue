<template>
	<view>
		<u-gap :height="20"></u-gap>
		<view class="to_tixianguanli">
			<view class="box">
				<view class="mymoney">我的余额</view>
				<u-gap :height="25"></u-gap>
				<view class="money">￥400.00</view>
			</view>
			
		</view>
		<u-gap :height="45"></u-gap>
		<view class="tixian">
			<view class="title">提现金额</view>
			<view class="inpumoney">
				<text>￥</text>
				<view class="input">
					<u-input v-model="value" type="number" />
				</view>
			</view>
			<u-gap :height="25"></u-gap>
			<view class="shouxu" style="font-size: 24rpx;">
				<view class="box">
					<view class="left">
						<view>手续费:</view>
						<view class="input">
							￥5
						</view>
					</view>
					<view class="right">
						全部提现
					</view>
				</view>
			</view>
		</view>
		<u-gap :height="50"></u-gap>
		
		<view class="tixianfangshiu">
			<view class="title">
				提现方式
			</view>
			<radio-group name="">
				<view class="textli">
					<view class="name"><u-icon name="weixin-fill" color="#33cc4c" size="40"></u-icon><text>微信</text> </view>
					<view class=""><radio value="1" /></u-radio></view>
				</view>
				<view class="textli">
					<view class="name"><u-icon name="zhifubao-circle-fill" color="#2596ff" size="40"></u-icon><text>支付宝</text></view>
					<view class=""><radio value="2" /></u-radio></view>
				</view>
				<view class="textli">
					<view class="name"><u-icon name="minus-square-fill" color="#e1c318" size="40"></u-icon><text>银行卡</text></view>
					<view class=""><radio value="3" /></u-radio></view>
					
				</view>
			</radio-group>
		</view>
		<u-gap :height="50"></u-gap>
		<view class="tixianbut">
			<u-button type="primary" shape="circle" >提现</u-button>
		</view>
		<u-gap :height="50"></u-gap>
		<view class="minxi">
			<view class="title">收支明细</view>
			<view class="box">
				<view class="boxtitle">
					<text>金额</text>
					<text>来源</text>
					<text>时间</text>
				</view>
				<view class="minxilist">
					<text style="color: red;">+100</text>
					<view class="name u-line-1">mou某家具厂撒娇的开始</view>
					<text>2022-12-12</text>
				</view>
				<view class="minxilist">
					<text style="color: red;">+100</text>
					<view class="name u-line-1">mou某家具厂</view>
					<text>2022-12-12</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
			}
		},
		methods: {
			// 选中某个单选框时，由radio时触发
			radioChange(e) {
				console.log(e);
			},
		}
	}
</script>
<style>
	page{
		background-color: #f1f1f1;
	}
</style>
<style scoped lang="scss">
.to_tixianguanli{
	border-radius: 20rpx;
	width: 90%;
	height: 250rpx;
	margin: auto;
	background-image: url(../../static/qianbao/qinabao.png) ;
	background-size: 100% 100%;
	color: white;
	// box-shadow: 10rpx 10rpx 10rpx #2194ff;
	.box{
		padding-top: 50rpx;
		margin-left: 40rpx;
		.money{
			font-size: 40rpx;
			font-weight: 800;
		}
	}
}
.tixian{
	width: 90%;
	background-color: white;
	border-radius: 20rpx;
	padding: 20rpx 30rpx;
	margin: auto;
	.title{
		padding: 10rpx;
		font-weight: 500;
		
	}
	.inpumoney{
		display: flex;
		align-items: center;
		text{
			font-size: 40rpx;
			font-weight: 700;
		}
	}
	.shouxu{
		.box{
			display: flex;
			align-items: center;
			justify-content: space-between;
			.left{
				display: flex;
				align-items: center;
			}
			.right{
				color: #ff9706;
			}
			
		}
	}
}
.tixianfangshiu{
	padding: 20rpx;
	background-color: white;
	margin: auto;
	width: 90%;
	border-radius: 20rpx;
	.title{
		padding: 10rpx;
		font-weight: 500;
	}
	.textli{
		border-bottom: 1rpx solid #e2e2e2;
		display: flex;
		justify-content: space-between;
		padding: 20rpx;
		.name{
			text{
				margin-left: 10rpx;
				font-size: 24rpx;
			}
		}
	}
}
.tixianbut{
	width: 60%;
	margin: auto;
	text-align: center;
}
.minxi{
	margin: auto;
	width: 90%;
	background-color: white;
	border-radius: 20rpx;
	padding: 20rpx;
	.title{
		padding: 10rpx;
		font-weight: 500;
	}
	.box{
		.boxtitle{
			padding: 20rpx;
			border-bottom: 1rpx solid #e2e2e2;
			display: flex;
			justify-content: space-between;
		}
		.minxilist{
			margin: 20rpx;
			text-align: center;
			font-size: 23rpx;
			display: flex;
			justify-content: space-between;
			.name{
				width: 200rpx;
				
			}
		}
	}
}
</style>
