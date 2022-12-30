<template>
	<view>
		<headernav></headernav>
		<bannerimg></bannerimg>
		<!-- 订单列表 -->
		<u-gap :height="20"></u-gap>
		<view class="ordlist" v-for="index in 4" :key="index">
			<view class="ord">
				<view class="ordimg"><image src="../../static/logo.png" mode=""></image> </view>
				<view class="ordinfor">
					<view class="name u-line-1">asjdf阿巴斯大家看法蛤科进士的红发杰克了哈会计分录收到回复阿喀琉斯的发空手道解放哈考虑到发大水</view>
					<u-gap :height="20"></u-gap>
					<view class="guige">
						<view class="">联系人：你还啊</view>
					</view>
					<u-gap :height="8"></u-gap>
					<view class="guige">
						<view class="">联系方式：1234567812</view>
					</view>
					<u-gap :height="8"></u-gap>
					<view class="guige">
						<view class="">下单时间：2022-12-12</view>
						
					</view>
					<u-gap :height="20"></u-gap>
					<!-- <view class="ordnut" @tap="to_shangjiaInfor">
						<text>立即质询</text>
					</view> -->
				</view>
			</view>
			<view class="bottom">
				<view class="guanzhu">被关注：0次</view>
				<view class="ordnut" @tap="to_ordInfor">
					<text>查看详情</text>
				</view>
			</view>
			
		</view>
		
		
	</view>
</template>

<script>
	import headernav from '@/components/headernav.vue'
	import bannerimg from '@/components/bannerimg.vue'
	export default {
		components:{
			headernav,
			bannerimg
		},
		data() {
			return {
				ords:1,
			}
		},
		methods: {
			//商家详情
			to_shangjiaInfor(){
				uni.navigateTo({
					url:'/pages/sahngJiaInfor/sahngJiaInfor'
				})
			},
			//查看详情
			to_ordInfor(){
				uni.navigateTo({
					url:'/pages/ordInfor/ordInfor'
				})
			},
			//分类
			ord(index){
				this.ords = index
			}
		}
	}
</script>

<style scoped lang="scss">
.nav{
	width: 90%;
	margin: auto;
	display: flex;
	justify-content: space-between;
	.li{
		font-size: 23rpx;
		width: 140rpx;
		text-align: center;
		border: 1rpx solid #187cff;
		padding: 15rpx 20rpx;
	}
	.lis{
		background-color: #187cff;
		color: white;
	}
}
.ordlist{
	padding: 15rpx 15rpx;
	width: 90%;
	margin:20rpx auto;
	border: 1rpx solid #e3e3e3;
	
	.ord{
		display: flex;
		.ordimg{
			flex: 1;
			image{
				height: 230rpx;
				width: 230rpx;
			}
		}
		.ordinfor{
			margin-left: 10rpx;
			flex: 2;
			.name{
				width: 430rpx;
			}
			.guige{
				width: 410rpx;
				display: flex;
				justify-content: space-between;
				color: #888888;
				font-size: 23rpx;
			}
			.ordnut{
				text{
					background-color: #187cff;
					color: white;
					padding: 5rpx 10rpx;
					font-size: 23rpx;
					border-radius: 15rpx;
				}
			}
		}
	}
	.bottom{
		padding: 10rpx;
		border-top: 1rpx solid #d9d9d9;
		margin-top: 15rpx;
		display: flex;
		justify-content: space-between;
		.guanzhu{
			font-size: 24rpx;
			padding: 5rpx 0rpx;
		}
		.ordnut{
			text{
				background-color: #187cff;
				color: white;
				padding: 5rpx 10rpx;
				font-size: 23rpx;
				border-radius: 15rpx;
			}
		}
	}
	
}
</style>
