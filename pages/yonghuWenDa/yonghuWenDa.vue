<template>
	<view>
		<bannerimg></bannerimg>
		<!-- 分类栏 -->
		<u-gap :height="40"></u-gap>
		<view class="wentiNav">
			<view class="left">
				<view class="">全部问题</view>
				<view class="">已解决</view>
				<view class="">待解决</view>
			</view>
			<view class="right">
				<view class="">问答分类</view>
			</view>
		</view>
		<u-gap :height="40"></u-gap>
		<!-- 提问列表 -->
		<view class="ListBox" @tap="to_wendaInfor">
			<view class="top">
				<view class="name">
					<view class=""><u-avatar src="" size="70"></u-avatar></view>
					<view class="namelist">
						<view class="nameporp">提问人：猪猪猪</view>
						<u-gap :height="10"></u-gap>
						<view class="dizhi">
							<u-icon name="map-fill" color="#7a7a7a" size="28"></u-icon>
							<text>广东省</text>
						</view>
					</view>
				</view>
				<view class="huifu">
					<view class="hui">
						<u-icon name="more-circle" color="#7a7a7a" size="28"></u-icon>
						<text>回复</text>
					</view>
					<view class="zhan">
						<u-icon name="thumb-up-fill" color="#7a7a7a" size="28"></u-icon>
						<text>29</text>
					</view>
				</view>
			</view>
			<u-gap :height="20"></u-gap>
			<view class="bottom">
				<view class="title">
					安徽省京东方哈卡就是地方阿克苏京东方哈快速的恢复安康教师的合法开始觉得发哈看来是地方哈大富科技四大护法科技手段
				</view>
				<u-gap :height="20"></u-gap>
				<!-- 未被回复 -->
				<view class="da u-line-2">
					发货速度将咖啡后爱上的看法哈卡打发加快速度放缓按开机速度放缓安康的说法阿克苏地方打发还是发生了的看法骄傲了圣诞节法律手段安徽考生的
				</view>
				<!-- 已经被回复 -->
				<view class="box">
					<text class="u-line-2 hang"><text style="color: #222222;">昂有：</text>你好，哈是否多看哈看电视附近卡上的发技术的哈佛金卡说的合法跨世纪的合法就开始电话费阿克苏的发哈开始的</text>
				</view>
			</view>
		</view>
		
		<!-- 我要提问 -->
		<view class="myTiwen" @tap="to_tiwen">
			<text>我要提问</text>
		</view>
		
		
	</view>
</template>

<script>
	import bannerimg from '@/components/bannerimg.vue'
	export default {
		data() {
			return {
				src: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
			}
		},
		components:{
			bannerimg
		},
		methods: {
			//我要提问
			to_tiwen(){
				uni.navigateTo({
					url:'/pages/tiwen/tiwen'
				})
			},
			//问答详情
			to_wendaInfor(){
				uni.navigateTo({
					url:'/pages/wendaInfor/wendaInfor'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
.wentiNav{
	width: 90%;
	margin: auto;
	border: 1rpx solid #efefef;
	background-color: #fafafa;
	padding: 10rpx;
	display: flex;
	color: #434343;
	.left{
		flex: 2;
		display: flex;
		justify-content: space-around;
	}
	.right{
		flex: 1;
		text-align: right;
	}
}
.ListBox{
	border: 1rpx solid #efefef;
	width: 90%;
	margin: auto;
	padding: 10rpx;
	.top{
		display: flex;
		justify-content: space-between;
		.name{
			display: flex;
			.namelist{
				margin-left: 30rpx;
				.nameporp{
					font-size: 25rpx;
					color: #2aa3ff;
				}
				.dizhi{
					font-size: 23rpx;
					color: #555555;
				}
			}
		}
		.huifu{
			display: flex;
			.hui{
				margin-top: 15rpx;
				color: #555555;
				font-size: 20rpx;
				margin-right: 15rpx;
			}
			.zhan{
				margin-top: 15rpx;
				color: #555555;
				font-size: 18rpx;
				margin-right: 15rpx;
			}
			// view{
			// 	margin-right: 15rpx;
			// }
		}
	}
	.bottom{
		.title{
			font-size: 25rpx;
		}
		.da{
			font-size: 23rpx;
			color: #555555;
		}
		.box{
			width: 95%;
			margin: auto;
			background-color: #ced9df;
			padding: 10rpx;
			font-size: 23rpx;
			.hang{
				color: #555555;
			}
		}
	}
}
.myTiwen{
	position: absolute;
	bottom: 30rpx;
	right: 30rpx;
	background-color: #2aa3ff;
	height: 100rpx;
	line-height: 100rpx;
	text-align: center;
	width: 100rpx;
	font-size: 23rpx;
	color: white;
	border-radius: 50%;
}
</style>
