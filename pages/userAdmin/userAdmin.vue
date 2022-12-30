<template>
	<view>
		<view class="user" >
			<view class="username">用户123</view>
		</view>
		<u-gap height="15" bg-color="#e3e3e3"></u-gap>
		<view class="userxingxi">
			<view class="title">联系人信息</view>
		</view>
		<view class="list">
			<view class="" @tap="to_myInfor">我的资料</view>
			<view class="" @tap="to_wxbangding">微信绑定</view>
		</view>
		<view class="userxingxi">
			<view class="title" >我的询盘</view>
		</view>
		<view class="list">
			<view class="" @tap="to_chuangjianxunpan">创建询盘</view>
			<view class="" @tap="to_allXunPan">所有询盘</view>
		</view>
		<view class="userxingxi">
			<view class="title">供应商管理</view>
		</view>
		<view class="list">
			<view class="">供应商管理</view>
			<view class="" @tap="to_shouchangGongyingshang">收藏供应商</view>
			<view class="">寻找产品</view>
			<view class="" @tap="to_souCang">收藏产品</view>
		</view>
		<view class="userxingxi">
			<view class="title">我的购买&我的优惠劵</view>
		</view>
		<view class="list">
			<view class="" @tap="to_goumaichanping">最近购买</view>
			<view class="" @tap="to_youhuijuan">我的优惠劵</view>
		</view>
		<view class="userxingxi">
			<view class="title">交易管理&退款退货管理</view>
		</view>
		<view class="list">
			<view class="" @tap="to_myord">我的订单</view>
			<view class="" @tap="to_tuiKuan">退款退货管理</view>
		</view>
		<view class="userxingxi">
			<view class="title">站内信&邮件订阅</view>
		</view>
		<view class="list">
			<view class="" @tap="to_zhannei">站内信</view>
			<view class="" @tap="to_dingyue">邮件订阅</view>
		</view>
		<view class="userxingxi">
			<view class="title">我的购物车</view>
		</view>
		<view class="list">
			<view class="" @tap="to_shopCar">购物车</view>
		</view>
		<view class="userxingxi">
			<view class="title">个人信息管理</view>
		</view>
		<view class="list">
			<view class="" @tap="to_zhanghu">账户信息</view>
			<view class="" @tap="to_edpassword">修改密码</view>
			<view class="" @tap="to_addDizhi">收货地址</view>
			<view class="" @tap="to_jifenzhongxing">我的积分</view>
		</view>
		<view class="userxingxi">
			<view class="title">维权管理</view>
		</view>
		<view class="list">
			<view class="" @tap="to_toushu">投诉管理</view>
			<view class="" @tap="to_jubaoguanli">举报管理</view>
		</view>
		<view class="userxingxi">
			<view class="title">图纸识别</view>
		</view>
		<view class="list">
			<view class="" @tap="to_fabuTuZhi">发布图纸订单</view>
			<view class="" @tap="to_edTuzhiord">管理图纸订单</view>
		</view>
		<view class="userxingxi">
			<view class="title" >编程管理</view>
		</view>
		<view class="list">
			<view class="" @tap="to_fabuBianCheng">发布编程订单</view>
			<view class="" @tap="to_edBianCheng">管理编程订单</view>
		</view>
		<u-gap :height="90"></u-gap>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			//绑定微信
			to_wxbangding(){
				uni.navigateTo({
					url:'/pages/WXbangDing/WXbangDing'
				})
			},
			//购买产品
			to_goumaichanping(){
				uni.navigateTo({
					url:'/pages/goumaiChanPing/goumaiChanPing'
				})
			},
			//发布编程
			to_fabuBianCheng(){
				uni.navigateTo({
					url:'/pages/fabuBianCheng/fabuBianCheng'
				})
			},
			//管理编程
			to_edBianCheng(){
				uni.navigateTo({
					url:'/pages/edBianCheng/edBianCheng'
				})
			},
			//管理图纸订单
			to_edTuzhiord(){
				uni.navigateTo({
					url:'/pages/edTuZhiOrd/edTuZhiOrd'
				})
			},
			//发布图纸
			to_fabuTuZhi(){
				uni.navigateTo({
					url:'/pages/fabuTuZhi/fabuTuZhi'
				})
			},
			//举报管理
			to_jubaoguanli(){
				uni.navigateTo({
					url:'/pages/juBaoGunanLi/juBaoGunanLi'
				})
			},
			//投诉管理
			to_toushu(){
				uni.navigateTo({
					url:'/pages/touShu/touShu'
				})
			},
			//积分中心
			to_jifenzhongxing(){
				uni.navigateTo({
					url:'/pages/jiFenZhongXing/jiFenZhongXing'
				})
			},
			//收货地址
			to_addDizhi(){
				uni.navigateTo({
					url:'/pages/addDiZhi/addDiZhi'
				})
			},
			//修改密码
			to_edpassword(){
				uni.navigateTo({
					url:'/pages/edPassword/edPassword'
				})
			},
			//跳转账户信息
			to_zhanghu(){
				uni.navigateTo({
					url:'/pages/zhanghu/zhanghu'
				})
			},
			//购物车
			to_shopCar(){
				uni.navigateTo({
					url:'/pages/shopCar/shopCar'
				})
			},
			//邮件订阅
			to_dingyue(){
				uni.navigateTo({
					url:'/pages/youjianDingYue/youjianDingYue'
				})
			},
			//站内信
			to_zhannei(){
				uni.navigateTo({
					url:'/pages/zhannei/zhannei'
				})
			},
			//退款管理
			to_tuiKuan(){
				uni.navigateTo({
					url:'/pages/tuiKuan/tuiKuan'
				})
			},
			//我的订单
			to_myord(){
				uni.navigateTo({
					url:'/pages/myord/myord'
				})
			},
			//优惠卷
			to_youhuijuan(){
				uni.navigateTo({
					url:'/pages/youHuiJuan/youHuiJuan'
				})
			},
			//收藏供应商
			to_shouchangGongyingshang(){
				uni.navigateTo({
					url:'/pages/shochangGongYingShang/shochangGongYingShang'
				})
			},
			//收藏产品
			to_souCang(){
				uni.navigateTo({
					url:'/pages/souCang/souCang'
				})
			},
			//所有询盘
			to_allXunPan(){
				uni.navigateTo({
					url:'/pages/allXunPan/allXunPan'
				})
			},
			//创建询盘
			to_chuangjianxunpan(){
				uni.navigateTo({
					url:'/pages/chuangJianXunPan/chuangJianXunPan'
				})
			},
			//我的资料
			to_myInfor(){
				uni.navigateTo({
					url:'/pages/myInfor/myInfor'
				})
			},
		}
	}
</script>

<style scoped lang="scss">
.user{
	width: 90%;
	margin: auto;
	font-size: 40rpx;
	font-weight: 800;
	padding: 20rpx;
}
.userxingxi{
	width: 90%;
	margin: auto;
	padding: 20rpx 0rpx;
	.title{
		font-weight: 800;
		padding: 0rpx 20rpx;
		border-left: 10rpx solid #308dff;
		font-size: 30rpx;
		color: #308dff;
	}
}
.list{
	width: 90%;
	margin: auto;
	display: flex;
	view{
		white-space: nowrap;
		border: 1rpx solid #f1f1f1;
		padding: 20rpx;
		flex: 1;
		text-align: center;
	}
}
</style>
