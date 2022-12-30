<template>
	<view>
		<headernav></headernav>
		<bannerimg></bannerimg>
		<!-- 订单分类 -->
		<!-- <u-gap :height="20"></u-gap>
		<view class="nav">
			<view class="li" @click="ord(1)" :class="{lis:ords == 1}">采购订单</view>
			<view class="li" @click="ord(2)" :class="{lis:ords == 2}">供应订单</view>
			<view class="li" @click="ord(3)" :class="{lis:ords == 3}">图纸订单</view>
			<view class="li" @click="ord(4)" :class="{lis:ords == 4}">编程订单</view>
		</view> -->
		<!-- 订单列表 -->
		<u-gap :height="20"></u-gap>
		<view class="ordlist" v-for="index in 4" :key="index">
			<view class="ord">
				<view class="ordimg"><image src="../../static/logo.png" mode=""></image> </view>
				<view class="ordinfor">
					<view class="name u-line-1">asjdf阿巴斯大家看法蛤科进士的红发杰克了哈会计分录收到回复阿喀琉斯的发空手道解放哈考虑到发大水</view>
					<u-gap :height="8"></u-gap>
					<view class="guige">
						<view class="">联系人：段先生</view>
						<view class="">成立年份：2013</view>
					</view>
					<u-gap :height="8"></u-gap>
					<view class="g">
						<view class="">工厂人数：100人</view>
						<view class="">工厂面积：1000~3000㎡</view>
					</view>
					<u-gap :height="8"></u-gap>
					<view class="g u-line-2">
						主营：哈萨克对方的哈佛卡上快乐地发挥挨打分开了收到回复安利的思考和罚款了世界很大奥克兰市地方哈里斯卡的积分离开世界哈市拉客的肌肤奥克兰技术的哈佛
					</view>
					
				</view>
			</view>
			<view class="bottom">
				<view class="guanzhu">
					<u-icon name="map-fill" color="#1a90ff"></u-icon>广东惠州
				</view>
				<view class="ordnut" @tap="to_sahngjiaIfor">
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
			//商家详情页
			to_sahngjiaIfor(){
				uni.navigateTo({
					url:"/pages/sahngJiaInfor/sahngJiaInfor"
				})
			},
			//切换
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
				view{
					white-space: nowrap;
				}
			}
			.g{
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
