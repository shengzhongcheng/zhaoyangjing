<template>
	<view>
		<u-tabs :list="lisst" :is-scroll="false" :current="current" @change="change"></u-tabs>
		<!-- 订单列表 -->
		<view class="list" v-for="(item,index) in list">
			<view class="cen">
				<view class="box">
					<view class="img" v-show="item.img_arr.length != 0"><image :src="getimgsrc(item.img_arr[0])" mode=""></image> </view>
					<view class="infor">
						<view class="shopname">{{item.name}}</view>
						<u-gap :height="15"></u-gap>
						<view class="user">
							<view class="chai">数量：{{item.num}}{{item.unit}}</view>
							<view class="chai">联系人：{{item.contact}}</view>
						</view>
						<u-gap :height="3"></u-gap>
						<view class="user">
							<view class="chai">联系电话：{{item.phone}}</view>
						</view>
						<view class="user">
							<view class="chai">价格：￥{{item.price}}</view>
						</view>
						<u-gap :height="8"></u-gap>
						<view class="u-line-2" style="width: 400rpx;color: #767676;font-size: 23rpx;">
							简介：{{item.content}}
						</view>
						<u-gap :height="8"></u-gap>
						<view class="user" style="flex-wrap: wrap;">
							<view class="chai">创建时间：{{item.createtime | date('yyyy-mm-dd')}}</view>
						</view>
					</view>
				</view>
			</view>
			<view class="bot">
				<view class="name">
					<text v-show="item.status == 0" style="color: #199bff;">待审核</text>
					<text v-show="item.status == 1" style="color: #199bff;">已审核</text>
					<text v-show="item.status == 2" style="color: #ff0000;">已驳回</text>
					<text v-show="item.status == 3" style="color: #ff0000;">已下架</text>
				</view>
				<view class="zt">
					<view class="go" @click="edchanping(item.id)">编辑</view>
					<view class="no" @click="open(item.id)">删除</view>
				</view>
			</view>
		</view>
		<u-modal v-model="show" :content="content" :show-cancel-button="true" @confirm="confirm"></u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show:false,
				keyword: '',
				list: [],
				lisst: [{
					name: '待审核'
				}, {
					name: '已审核'
				}, {
					name: '已驳回',
				},{
					name: '已下架',
				}],
				page:1,
				current: 0,
				content: '你确定要删除该产品吗？',
				id:null,
			}
		},
		onLoad() {
			
		},
		onShow() {
			this.list = []
			this.page = 1
			this.getshopList()
		},
		onReachBottom() {
			if(this.list.length<this.page*10)return
			this.page++
			this.getshopList()
		},
		methods: {
			confirm(){
				this.$u.post('/api/v1/goods/goodsDel',{
					id:this.id
				}).then(res =>{
					this.$u.toast(res.msg)
					this.list = []
					this.getshopList()
				})
			},
			open(id) {
				this.id = id
				this.show = true;
			},
			//编辑产品
			edchanping(id){
				uni.navigateTo({
					url:'edChanPing/edChanPing?id='+id
				})
			},
			//获取产品列表
			getshopList(){
				this.$u.post('/api/v1/goods/goodsList',{
					page:this.page,
					status:this.current
				}).then(res =>{
					this.list = [...this.list,...res.data.data]
				})
			},
			change(index) {
				this.current = index;
				this.list = []
				this.page = 1
				this.getshopList()
			}
		}
	}
</script>

<style scoped lang="scss">
.title{
	width: 90%;
	margin: auto;
}
.class{
	width: 90%;
	margin: auto;
}
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
			align-items: center;
			.img{
				height: 250rpx;
				width: 250rpx;
				margin-right: 10rpx;
				image{
					height: 250rpx;
					width: 250rpx;
					border-radius: 10rpx;
				}
			}
			.infor{
				.user{
					display: flex;
					font-size: 23rpx;
					white-space: nowrap;
					color: #767676;
					.chai{
						margin-right: 10rpx;
					}
					view{
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
