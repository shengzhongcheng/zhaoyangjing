<template>
	<view>
		<view class="status_bar">
		</view>
		<!-- h5+app导航栏 -->
		<headernav ></headernav>
		<!-- h5+app轮播图 -->
		<banner></banner>
		<!-- 分类 -->
		<view class="classlist">
			<u-grid :col="5" :border="false" >
				<u-grid-item @click="to_orderHome">
					<image src="../../static/indexclass/dingdandating.png" mode=""></image>
					<view class="grid-text">订单大厅</view>
				</u-grid-item>
				<u-grid-item @click="to_youzhiCaiGou">
					<image src="../../static/indexclass/tuiguang.png" mode=""></image>
					<view class="grid-text">优质采购</view>
				</u-grid-item>
				<u-grid-item @click="to_tuijie">
					<image src="../../static/indexclass/lingsou.png" mode=""></image>
					<view class="grid-text">商家推荐</view>
				</u-grid-item>
				<u-grid-item @click="to_gongying">
					<image src="../../static/indexclass/canping.png" mode=""></image>
					<view class="grid-text">供应产品</view>
				</u-grid-item>
				<u-grid-item @click="to_gongChenShiHall">
					<image src="../../static/indexclass/gongyin.png" mode=""></image>
					<view class="grid-text">工程师大厅</view>
				</u-grid-item>
				<u-grid-item @click="to_findFactory">
					<image src="../../static/indexclass/zhaogongchang.png" mode=""></image>
					<view class="grid-text">找工厂</view>
				</u-grid-item>
				<u-grid-item @click="to_youzhiBianChen">
					<image src="../../static/indexclass/biancheng.png" mode=""></image>
					<view class="grid-text">优质编程</view>
				</u-grid-item>
				<u-grid-item @click="to_qiyeZhaoPin">
					<image src="../../static/indexclass/zhaoping.png" mode=""></image>
					<view class="grid-text">企业招聘</view>
				</u-grid-item>
				<u-grid-item @click="to_hangye">
					<image src="../../static/indexclass/zhixun.png" mode=""></image>
					<view class="grid-text">行业资讯</view>
				</u-grid-item>
				<u-grid-item @click="to_yonghuwenda">
					<image src="../../static/indexclass/wenda.png" mode=""></image>
					<view class="grid-text">用户问答</view>
				</u-grid-item>
			</u-grid>
		</view>
		<!-- 通告 -->
		<view class="tonggao">
			<u-notice-bar mode="horizontal" :list="list"></u-notice-bar>
		</view>
		<!-- 优质订单 -->
		<view class="youzhiOrd">
			<u-gap :height="15"></u-gap>
			<view class="name">优质订单</view>
			<u-gap :height="25"></u-gap>
		</view>
		<!-- 订单列表 -->
		<view class="ordList" v-for="(item,index) in youzhiord" :key="index">
			<view class="listBoxLeft">
				<image :src="getimgsrc(item.img_arr[0])" mode=""></image>
			</view>
			<view class="listBoxright">
				<u-gap :height="20"></u-gap>
				<view class="name u-line-1">{{item.name}}</view>
				<u-gap :height="20"></u-gap>
				<view class="jieshao u-line-2">{{item.remark}}</view>
				<u-gap :height="35"></u-gap>
				<view class="num">
					<text class="nums">加工量：<text style="color: #1a90ff;">{{item.num}}{{item.unit}}</text></text> 
					<text class="liji" @tap="to_ordInfor">立即报价</text>
				</view>
			</view>
		</view>
		<view class="jiazai" @tap="youzhiordAll" v-show="allShow"><text>点击查看更多</text> </view>
		<u-gap :height="35" bg-color="#f5f5f5"></u-gap>
		<!-- 热门采购 -->
		<view>
			<view>
				<u-tabs-swiper ref="uTabs" :list="lists" :current="current" @change="tabsChange" :is-scroll="false" swiperWidth="750" ></u-tabs-swiper>
			</view>
			<swiper style="height: 800rpx;" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
				<!-- 热门采购 -->
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 800rpx;width: 90%;margin: auto;">
						<remenchaigou></remenchaigou>
						<view class="jiazai"><text>点击查看更多</text> </view>
					</scroll-view>
				</swiper-item>
				<!-- 优质采购 -->
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 800rpx;width: 90%;margin: auto;">
						2
					</scroll-view>
				</swiper-item>
				<!-- 采购商家 -->
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 800rpx;width: 90%;margin: auto;">
						3
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
		<!-- <u-gap :height="50"></u-gap> -->
		<u-gap :height="35" bg-color="#f5f5f5"></u-gap>
		<!-- 优秀图纸 -->
		<view>
			<view>
				<u-tabs-swiper ref="YouxiuuTabs" :list="youxiu" :current="currentYouxiu" @change="tabsChangeyouxiu" :is-scroll="false" swiperWidth="750" ></u-tabs-swiper>
			</view>
			<swiper style="height: 800rpx;" :current="swiperCurrentYouxiu" @transition="transitionyouxiu" @animationfinish="animationfinishyouxiu">
				<!-- 优秀图纸 -->
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 800rpx;width: 90%;margin: auto;">
						<youxiutuzhi></youxiutuzhi>
						<view class="jiazai"><text>点击查看更多</text> </view>
					</scroll-view>
				</swiper-item>
				<!-- 优质编程 -->
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 800rpx;width: 90%;margin: auto;">
						2
					</scroll-view>
				</swiper-item>
				<!-- 工程师入驻 -->
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 800rpx;width: 90%;margin: auto;">
						3
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
		<u-gap :height="35" bg-color="#f5f5f5"></u-gap>
		<!-- 厂家 -->
		<view>
			<view>
				<u-tabs-swiper ref="changjia" :list="changjia" :current="changjiacurrent" @change="tabsChangechangjia" :is-scroll="false" swiperWidth="750" ></u-tabs-swiper>
			</view>
			<swiper style="height: 800rpx;" :current="changjiaswiperCurrent" @transition="transitionchangjia" @animationfinish="animationfinishchangjia">
				<!-- 新入住厂家 -->
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 800rpx;width: 90%;margin: auto;">
						<changjia></changjia>
						<view class="jiazai"><text>点击查看更多</text> </view>
					</scroll-view>
				</swiper-item>
				<!-- 优质厂家 -->
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 800rpx;width: 90%;margin: auto;">
						2
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
		<u-gap :height="35" bg-color="#f5f5f5"></u-gap>
		<!-- 热门产品 -->
		<view class="youzhiOrd">
			<u-gap :height="15"></u-gap>
			<view class="name">热门产品</view>
			<u-gap :height="25"></u-gap>
		</view>
		<view class="remmenbox">
			<u-grid :col="2" >
				<u-grid-item v-for="index in 4" >
					<image src="../../static/logo.png" mode=""></image>
					<view class="">优质路合金图纸</view>
					<view class="num"><text>￥15.00/台</text> <text>一台起订</text> </view>
				</u-grid-item>
			</u-grid>
		</view>
		<u-gap :height="35" bg-color="#f5f5f5"></u-gap>
		<!-- 新闻推介 -->
		<view class="youzhiOrd">
			<u-gap :height="15"></u-gap>
			<view class="name">新闻推介</view>
			<u-gap :height="25"></u-gap>
		</view>
		<view class="xingwenlist" v-for="index in 4" @tap="to_zhixunInfor">
			<view class="xingwen">
				<image src="../../static/logo.png" mode=""></image>
			</view>
			<view class="listBoxright">
				<view class="name u-line-1" style="color: #1a90ff;">原照状也说的哈健康的哈发阿斯蒂芬生卡死</view>
				<u-gap :height="10"></u-gap>
				<view class="jieshao u-line-2">按时发手机客户端即可发撒发的发生的发生的阿斯顿发生的发生货的看法时觉得焕发健康电话费卡上的风景哈卡时间的恢复卡时间的恢复卡机</view>
				<u-gap :height="35"></u-gap>
			</view>
		</view>
		<!-- 企业招聘、用户问答、最新订单 -->
		<view>
			<view>
				<u-tabs-swiper ref="qiye" :list="qiye" :current="qiyecurrent" @change="tabsChangeqiye" :is-scroll="false" swiperWidth="750" ></u-tabs-swiper>
			</view>
			<swiper style="height: 430rpx;" :current="qiyeswiperCurrent" @transition="transitionqiye" @animationfinish="animationfinishqiye">
				<!-- 企业招聘 -->
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 800rpx;width: 90%;margin: auto;">
						<cell></cell>
					</scroll-view>
				</swiper-item>
				<!-- 用户问答 -->
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 800rpx;width: 90%;margin: auto;">
						2
					</scroll-view>
				</swiper-item>
				<!-- 最新订单 -->
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 800rpx;width: 90%;margin: auto;">
						3
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
		
		<!-- #ifdef H5 -->
		<banquan></banquan>
		<!-- #endif -->
		
		<!-- 返回顶部 -->
		<u-back-top :scroll-top="scrollTop"></u-back-top>
		<!-- 无网络提示 -->
		<u-no-network></u-no-network>
	</view>
</template>

<script>
	import remenchaigou from '../../components/remenchaigou.vue'
	import youxiutuzhi from '@/components/youxiutuzhi.vue'
	import changjia from '@/components/changjia.vue'
	import headernav from '@/components/headernav.vue'
	import banner from '@/components/bannerimg.vue'
	import cell from '@/components/qiyezhaoping.vue'
	import banquan from '@/components/qiyeBanQuan.vue'
	export default {
		components:{
			remenchaigou,
			youxiutuzhi,
			changjia,
			headernav,
			banner,
			cell,
			banquan
		},
		data() {
			return {
				scrollTop: 0,
				//热门采购
				lists:[
					{
						name: '热门采购'
					}, {
						name: '优质采购'
					}, {
						name: '采购商家'
					}
				],
				//优秀图纸
				youxiu:[
					{
						name: '优秀图纸'
					}, {
						name: '优质编程'
					}, {
						name: '工程师入驻'
					}
				],
				//厂家
				changjia:[
					{
						name: '新入驻厂家'
					}, {
						name: '优质厂家'
					}
				],
				//企业招聘、用户问答、最新订单
				qiye:[
					{
						name: '企业招聘'
					}, {
						name: '用户问答'
					}, {
						name: '最新订单'
					}
				],
				//厂家变量
				changjiacurrent:0,
				changjiaswiperCurrent:0,
				//企业、用户、订单变量
				qiyecurrent:0,
				qiyeswiperCurrent:0,
				//热门采购变量
				current: 0,
				swiperCurrent: 0,
				//轮播文字
				list: [
					'寒雨连江夜入吴',
					'平明送客楚山孤',
					'洛阳亲友如相问',
					'一片冰心在玉壶'
				],
				//优秀图纸部分变量
				currentYouxiu:0,
				swiperCurrentYouxiu:0,
				//优质订单列表
				youzhiord:[],
				youzhiPage:1,
				limit:5,
				allShow:true,
			}
		},
		onLoad() {
			this.getordlist()
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		methods: {
			/* 
			
			优质订单数据部分 
			 
			 */
			//查看更多
			youzhiordAll(){
				if(this.youzhiord.length<this.youzhiPage*5)return this.allShow = false
				this.youzhiPage++
				this.getordlist()
			},
			
			//优质订单列表
			getordlist(){
				this.$u.post('/api/v1/web/index/orderpanList',{
					is_tui:'1',
					limit:this.limit,
					page:this.youzhiPage,
				}).then(res =>{
					this.youzhiord = [...this.youzhiord,...res.data.data]
					// console.log(this.youzhiord)
				})
			},
			
			
			
			
			//优质采购
			to_youzhiCaiGou(){
				uni.navigateTo({
					url:'../youzhiCaiGou/youzhiCaiGou'
				})
			},
			//企业招聘
			to_qiyeZhaoPin(){
				uni.navigateTo({
					url:'../qiyeZhaoPing/qiyeZhaoPing'
				})
			},
			//优质编程
			to_youzhiBianChen(){
				uni.navigateTo({
					url:'../youzhiBianChen/youzhiBianChen'
				})
			},
			//找工厂
			to_findFactory(){
				uni.navigateTo({
					url:'/pages/findFactory/findFactory'
				})
			},
			//新闻详情
			to_zhixunInfor(){
				uni.navigateTo({
					url:'/pages/zhiXunInfor/zhiXunInfor'
				})
			},
			//立即报价跳转商家详情页
			to_ordInfor(){
				uni.navigateTo({
					url:'/pages/ordInfor/ordInfor'
				})
			},
			//行业质询
			to_hangye(){
				uni.navigateTo({
					url:"/pages/hangyeZhiXun/hangyeZhiXun"
				})
			},
			//用户问答
			to_yonghuwenda(){
				uni.navigateTo({
					url:'/pages/yonghuWenDa/yonghuWenDa'
				})
			},
			//推介
			to_tuijie(){
				uni.navigateTo({
					url:'/pages/shangjiatuijie/shangjiatuijie'
				})
			},
			//供应
			to_gongying(){
				uni.navigateTo({
					url:'/pages/gongying/gongying'
				})
			},
			//工程师大厅
			to_gongChenShiHall(){
				uni.navigateTo({
					url:'/pages/gongChenShiHall/gongChenShiHall'
				})
			},
			//跳转订单大厅
			to_orderHome(){
				uni.navigateTo({
					url:'/pages/ordHome/ordHome'
				})
			},
			//企业
			tabsChangeqiye(index){
				console.log(index)
				this.qiyecurrent = index
				this.qiyeswiperCurrent = index;
			},
			transitionqiye(e) {
				let dx = e.detail.dx;
				this.$refs.qiye.setDx(dx);
			},
			animationfinishqiye(e) {
				let current = e.detail.current;
				this.$refs.qiye.setFinishCurrent(current);
				this.qiyeswiperCurrent = current;
				this.qiyecurrent = current;
			},
			//厂家
			tabsChangechangjia(index){
				console.log(index)
				this.changjiacurrent = index
				this.changjiaswiperCurrent = index;
			},
			transitionchangjia(e) {
				let dx = e.detail.dx;
				this.$refs.changjia.setDx(dx);
			},
			animationfinishchangjia(e) {
				let current = e.detail.current;
				this.$refs.changjia.setFinishCurrent(current);
				this.changjiaswiperCurrent = current;
				this.changjiacurrent = current;
			},
			//优秀图纸方法
			tabsChangeyouxiu(index){
				console.log(index)
				this.currentYouxiu = index
				this.swiperCurrentYouxiu = index;
			},
			transitionyouxiu(e) {
				let dx = e.detail.dx;
				this.$refs.YouxiuuTabs.setDx(dx);
			},
			animationfinishyouxiu(e) {
				let current = e.detail.current;
				this.$refs.YouxiuuTabs.setFinishCurrent(current);
				this.swiperCurrentYouxiu = current;
				this.currentYouxiu = current;
			},
			//热门采购方法
			tabsChange(index) {
				console.log(index)
				this.current = index
				this.swiperCurrent = index;
			},
			// swiper-item左右移动，通知tabs的滑块跟随移动
			transition(e) {
				let dx = e.detail.dx;
				this.$refs.uTabs.setDx(dx);
			},
			animationfinish(e) {
				let current = e.detail.current;
				this.$refs.uTabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			},
		}
	}
</script>

<style scoped lang="scss">
	//头部占位符
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}
	 .navtitle{
		 width: 100%;
		 padding: 15rpx 0rpx;
		 margin: auto;
		 background-color: #5b5b5b;
		 .navbox{
			 width: 95%;
			 margin: auto;
			 display: flex;
			 justify-content: space-around;
			 .inp{
				 height: 40rpx;
				 line-height: 40rpx;
			 }
			 .icon{
				 margin-top: 13rpx;
			 }
		 }
	 }
	 .lunboImg{
	 		 width: 100%;
	 		 height: 300rpx;
			 .swiper{
				 width: 100%;
				 height: 300rpx;
				 .img{
					 height: 100%;
					 width: 100%;
				 }
			 }
	 }
	 .classlist{
		 image{
			 height: 150rpx;
			 width: 150rpx;
		 }
		 .grid-text {
		 		font-size: 28rpx;
		 		margin-top: 4rpx;
		 		color: $u-type-info;
		 }
	 }
	.tonggao{
		width: 100%;
		padding: 10rpx 0rpx;
		// background-color: #d8e6eb;
	}
	.youzhiOrd{
		width: 100%;
		border-bottom: 1rpx solid #dedede;
		.name{
			width: 90%;
			margin: auto;
			font-weight: 600;
			font-size: 35rpx;
			border-left: 10rpx solid #1a90ff;
			padding-left: 10rpx;
			color: #1a90ff;
		}
	}
	.remmenbox{
		width: 90%;
		margin: auto;
		image{
			width: 200rpx;
			height: 200rpx;
		}
		.num{
			display: flex;
			justify-content: space-around;
			font-size: 20rpx;
			color: #1a90ff;
			width: 100%;
		}
		.grid-text {
			text-align: center;
				font-size: 23rpx;
				margin-top: 4rpx;
				color: $u-type-info;
		}
	}
	.ordList{
		width: 90%;
		margin: auto;
		border-bottom: 1rpx solid #dedede;
		display: flex;
		padding: 30rpx 0rpx;
		.listBoxLeft{
			flex: 2;
			image{
				height: 230rpx;
				width: 230rpx;
			}
		}
		.listBoxright{
			// margin-left: 20rpx;
			flex: 3;
			.name{
				// overflow: hidden;
				// text-overflow: ellipsis;
				// white-space: nowrap;
				width: 400rpx;
				color: #484848;
			}
			.jieshao{
				color: #646464;
				font-size: 19rpx;
			}
			.num{
				width: 100%;
				display: flex;
				justify-content: space-between;
				.nums{
					font-size: 20rpx;
					color: #646464;
				}
				.liji{
					background-color: #1a90ff;
					color: white;
					font-size: 20rpx;
					border-radius: 15rpx;
					padding: 5rpx 10rpx;
				}
			}
		}
	}
	.jiazai{
		width: 100%;
		text-align: center;
		padding: 10rpx 0rpx;
		text{
			background-color: #1a90ff;
			color: white;
			font-size: 20rpx;
			border-radius: 20rpx;
			padding: 5rpx 10rpx;
		}
	}
	.swiper-item{
		.ordList{
			width: 90%;
			margin: auto;
			border-bottom: 1rpx solid #dedede;
			display: flex;
			padding: 30rpx 0rpx;
			.listBoxLeft{
				flex: 2;
				image{
					height: 200rpx;
					width: 100%;
				}
			}
			.listBoxright{
				margin-left: 20rpx;
				flex: 3;
				.name{
					// overflow: hidden;
					// text-overflow: ellipsis;
					// white-space: nowrap;
					width: 400rpx;
					color: #484848;
				}
				.jieshao{
					color: #646464;
					font-size: 19rpx;
					display: flex;
					justify-content: space-between;
				}
				.num{
					width: 100%;
					display: flex;
					justify-content: space-between;
					.nums{
						font-size: 20rpx;
						color: #646464;
					}
					.liji{
						background-color: #1a90ff;
						color: white;
						font-size: 20rpx;
						border-radius: 15rpx;
						padding: 5rpx 10rpx;
					}
				}
			}
		}
	}
	.xingwenlist{
		width: 90%;
		margin: auto;
		border-bottom: 1rpx solid #dedede;
		display: flex;
		padding: 10rpx 0rpx;
		.xingwen{
			flex: 2;
			image{
				width: 130rpx;
				height: 130rpx;
			}
		}
		.listBoxright{
			margin-left: 10rpx;
			.name{
				font-size: 25rpx;
			}
			.jieshao{
				font-size: 20rpx;
			}
		}
	}
</style>
