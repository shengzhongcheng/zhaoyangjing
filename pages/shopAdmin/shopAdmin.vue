<template>
	<view>
		<!-- <view class="user" >
			<view class="username">{{nickName}}</view>
		</view>
		<u-gap height="15" bg-color="#e3e3e3"></u-gap> -->
		<view class="userxingxi">
			<view class="title">联系人信息</view>
		</view>
		<view class="list">
			<view class="" @tap="to_myInfor">我的资料</view>
			<view class="" @tap="to_wxbangding">微信绑定</view>
			<view class="" @tap="to_offspring">子账号管理</view>
		</view>
		<view class="userxingxi">
			<view class="title" >公司信息</view>
		</view>
		<view class="list">
			<view class="" >我的主页</view>
			<view class="" @tap="to_qiyerenzhen">企业认证</view>
			<view class="" >公司资源</view>
		</view>
		<view class="list">
			<view class="" >公司设备</view>
			<view class="" >企业地图</view>
			<view class="" >公司相册</view>
		</view>
		<view class="userxingxi">
			<view class="title">我的询价单</view>
		</view>
		<view class="list">
			<view class="" @tap="to_chuangJianXunPan">发布询价单</view>
			<view class="" @tap="to_allXunPan">管理询价单</view>
		</view>
		<view class="userxingxi">
			<view class="title">优质采购订单</view>
		</view>
		<view class="list">
			<view class="" @tap="to_shopyouzhiord">发布优质采购单</view>
			<view class=""  @tap="to_allshopyouzhiord">所有优质采购单</view>
		</view>
		<view class="userxingxi">
			<view class="title">我的供应</view>
		</view>
		<view class="list">
			<view class="" @tap="to_fabuchanping">发布产品</view>
			<view class="" @tap="to_chanpingAdmin">管理产品</view>
		</view>
		<view class="userxingxi">
			<view class="title">新闻发布</view>
		</view>
		<view class="list">
			<view class="" @tap="to_newJournalism">发布新闻</view>
			<view class="" @tap="to_adminJournalism">管理新闻</view>
		</view>
		<view class="userxingxi">
			<view class="title">企业招聘</view>
		</view>
		<view class="list">
			<view class="" @tap="to_zhaoping">发布招聘</view>
			<view class="" @tap="to_allzhaoPing">所有招聘</view>
		</view>
		<view class="userxingxi">
			<view class="title">图纸识别</view>
		</view>
		<view class="list">
			<view class="" @tap="to_fabutuzhi">发布图纸订单</view>
			<view class="" @tap="to_edTuzhiord">管理图纸订单</view>
		</view>
		<view class="userxingxi">
			<view class="title">接受图纸</view>
		</view>
		<view class="list">
			<view class="" @tap="to_huaTuOrd">接受画图订单</view>
			<view class="" @tap="to_huatuOrdAdmin">管理所有画图订单</view>
		</view>
		<view class="userxingxi">
			<view class="title">编程管理</view>
		</view>
		<view class="list">
			<view class="" @tap="to_fabuBianCheng">发布编程订单</view>
			<view class="" @tap="to_edBianCheng">管理编程订单</view>
		</view>
		<view class="userxingxi">
			<view class="title" >接受编程</view>
		</view>
		<view class="list">
			<view class="" @tap="to_jieshouBianCheng">接受编程订单</view>
			<view class="" @tap="to_jieshouBianchengAdmin">管理编程订单</view>
		</view>
		<view class="userxingxi">
			<view class="title" >产品订单管理</view>
		</view>
		<view class="list" @tap="to_chanpingOrdadmin">
			<view class="" >产品订单管理</view>
		</view>
		<view class="userxingxi">
			<view class="title" >钱包</view>
		</view>
		<view class="list">
			<view class="" @tap="to_tixianguanli">提现管理</view>
			<!-- <view class="" >申请提现</view> -->
			<view class="" @tap="to_tixianJiLu">申请记录</view>
		</view>
		<!-- <view class="userxingxi">
			<view class="title" >推广服务</view>
		</view>
		<view class="list">
			<view class="" >顶部广告位</view>
			<view class="" >特别推荐</view>
			<view class="" >左右侧广告位</view>
		</view>
		<view class="list">
			<view class="" >底部广告位</view>
			<view class="" >软文广告位</view>
		</view> -->
		<view class="userxingxi">
			<view class="title" >二手设备</view>
		</view>
		<view class="list">
			<view class="" >发布二手设备</view>
			<view class="" >管理二手设备</view>
		</view>
		<u-gap :height="90"></u-gap>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nickName:uni.getStorageSync('nickname')
			}
		},
		methods: {
			//企业认证
			to_qiyerenzhen(){
				uni.navigateTo({
					url:"../qiyeRenZhen/qiyeRenZhen"
				})
			},
			//产品订单管理记录
			to_chanpingOrdadmin(){
				uni.navigateTo({
					url:'../chanPingOrdAdmin/chanPingOrdAdmin'
				})
			},
			//提现记录
			to_tixianJiLu(){
				uni.navigateTo({
					url:'../tixianJiLu/tixianJiLu'
				})
			},
			//体现管理
			to_tixianguanli(){
				uni.navigateTo({
					url:'../tixianGuanLi/tixianGuanLi'
				})
			},
			//管理接受编程订单
			to_jieshouBianchengAdmin(){
				uni.navigateTo({
					url:'/pages/jieshouBianchengAdmin/jieshouBianchengAdmin'
				})
			},
			//接受编程订单
			to_jieshouBianCheng(){
				uni.navigateTo({
					url:'/pages/jieshouBianCheng/jieshouBianCheng'
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
			//管理画图订单
			to_huatuOrdAdmin(){
				uni.navigateTo({
					url:'/pages/huaTuOrdAdmin/huaTuOrdAdmin'
				})
			},
			//接受画图订单
			to_huaTuOrd(){
				uni.navigateTo({
					url:'/pages/huaTuOrd/huaTuOrd'
				})
			},
			//管理图纸订单
			to_edTuzhiord(){
				uni.navigateTo({
					url:'/pages/edTuZhiOrd/edTuZhiOrd'
				})
			},
			//全部招聘
			to_allzhaoPing(){
				uni.navigateTo({
					url:'/pages/allzhaoPing/allzhaoPing'
				})
			},
			//发布图纸订单
			to_fabutuzhi(){
				uni.navigateTo({
					url:'/pages/fabuTuZhi/fabuTuZhi'
				})
			},
			//发布招聘
			to_zhaoping(){
				uni.navigateTo({
					url:'/pages/zhaoping/zhaoping'
				})
			},
			//管理新闻
			to_adminJournalism(){
				uni.navigateTo({
					url:'/pages/adminJournalism/adminJournalism'
				})
			},
			//发布新闻
			to_newJournalism(){
				uni.navigateTo({
					url:'/pages/fabuJournalism/fabuJournalism'
				})
			},
			//管理产品
			to_chanpingAdmin(){
				uni.navigateTo({
					url:'/pages/chanPingAdmin/chanPingAdmin'
				})
			},
			//发布产品
			to_fabuchanping(){
				uni.navigateTo({
					url:'/pages/fabuChanPing/fabuChanPing'
				})
			},
			//所有优质采购单
			to_allshopyouzhiord(){
				uni.navigateTo({
					url:'/pages/allShopYouZhiOrd/allShopYouZhiOrd'
				})
			},
			//发布优质采购单
			to_shopyouzhiord(){
				uni.navigateTo({
					url:'/pages/shopYouZhiOrd/shopYouZhiOrd'
				})
			},
			//所有询盘
			to_allXunPan(){
				uni.navigateTo({
					url:'/pages/allXunPan/allXunPan'
				})
			},
			//子代管理
			to_offspring(){
				uni.navigateTo({
					url:'/pages/Offspring/Offspring'
				})
			},
			//询价订单
			to_chuangJianXunPan(){
				uni.navigateTo({
					url:'/pages/chuangJianXunPan/chuangJianXunPan'
				})
			},
			//绑定微信
			to_wxbangding(){
				uni.navigateTo({
					url:'/pages/WXbangDing/WXbangDing'
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
