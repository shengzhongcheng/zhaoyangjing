<template>
	<view>
		<bannerimg></bannerimg>
		<!-- 问题标题 -->
		<u-gap :height="20"></u-gap>
		<view class="title">
			我知道你很急但是你先别急我知道你很急但是你先别急我知道你很急但是你先别急我知道你很急但是你先别急？
		</view>
		<u-gap :height="20"></u-gap>
		<view class="weizhi">
			<view class="dizhi">
				<u-icon name="map-fill" color="#7a7a7a" size="28"></u-icon>
				<text>广东-惠州</text>
			</view>
			<view class="dizhi">
				<text>提问时间：2022-11-11</text>
			</view>
			<view class="dizhi">
				<text>回答数量：10</text>
			</view>
		</view>
		<u-gap :height="20"></u-gap>
		<!-- 回答框 -->
		<view class="input">
			<textarea name="" id="" v-model="text" maxlength="-1" cols="30" rows="10"></textarea>
		</view>
		<u-gap :height="20"></u-gap>
		<!-- 回答按钮 -->
		<view class="buthuida"><u-button type="primary" shape="circle" size="mini">回答问题</u-button></view>
		<u-gap :height="20"></u-gap>
		<!-- <u-gap :height="20" bg-color="#eeeeee"></u-gap> -->
		<!-- 回答列表 -->
		<view class="huidaList" v-for="index in 4">
			<view class="name">
				<view class="">回答人：沙基大路</view>
				<view class="">回答时间：2022-11-11</view>
			</view>
			<u-gap :height="20"></u-gap>
			<view class="text">
				<view class="textneirong">
					<text>答</text>
					和发技术的哈佛金卡说的话罚款世界的繁华阿克苏的交话费喀什的发哈可是对方阿克苏的符号阿克苏的符号卡萨丁
				</view>
			</view>
		</view>
		<u-gap :height="20" bg-color="#eeeeee"></u-gap>
		<u-gap :height="20"></u-gap>
		<!-- 相关问答 -->
		<view class="qiyeJianjie">
			相关问题
		</view>
		<view class="list" v-for="index in 5" >
			<u-gap :height="20"></u-gap>
			<view class="">繁华的撒酒疯哈就开始觉得烦了罚款了上帝就发老师KDJ法拉克阿斯顿开了房间啊</view>
			<u-gap :height="20"></u-gap>
			<view class="time">
				<view class="name">提问人:放假啊</view>
				<view class="timetiwen">提问时间：2022-11-01</view>
			</view>
			<u-gap :height="20"></u-gap>
		</view>
		
	</view>
</template>

<script>
	import bannerimg from '@/components/bannerimg.vue'
	export default {
		data() {
			return {
				//问题框参数
				text:'',
			}
		},
		components:{
			bannerimg
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
.title{
	width: 90%;
	margin: auto;
}
.weizhi{
	width: 90%;
	margin: auto;
	display: flex;
	font-size: 24rpx;
	color: #7a7a7a;
	.dizhi{
		margin-right: 15rpx;
	}
}
.input{
	width: 90%;
	margin: auto;
	textarea{
		width: 100%;
		border: 1rpx solid #cecece;
	}
}
.buthuida{
	width: 90%;
	margin: auto;
}
.huidaList{
	width: 90%;
	margin: auto;
	padding: 20rpx;
	border-top: 20rpx solid #eeeeee;
	// border-bottom: 20rpx solid #eeeeee;
	.name{
		display: flex;
		color: #7a7a7a;
		font-size: 23rpx;
		view{
			margin-right: 80rpx;
		}
	}
	.text{
		.textneirong{
			font-size: 25rpx;
			text{
				background-color: #2990ff;
				color: white;
				padding: 5rpx;
				margin-right: 5rpx;
				margin-bottom: 5rpx;
			}
		}
	}
}
.qiyeJianjie{
	width: 90%;
	margin: auto;
	border-left: #1090ff solid 10rpx;
	color: #1090ff;
	font-weight: 900;
	padding: 0rpx 20rpx;
}
.list{
	border-bottom: 1rpx solid #dfdfdf;
	width: 90%;
	margin: auto;
	// display: flex;
	.time{
		display: flex;
		justify-content: space-between;
		font-size: 24rpx;
		color: #7a7a7a;
	}
}
</style>
