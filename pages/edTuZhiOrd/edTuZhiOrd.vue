<template>
	<view>
		<u-tabs :list="list" :is-scroll="false" :current="current" @change="change"></u-tabs>
		<!-- 订单列表 -->
		<view class="list" v-for="(item,index) in tuzhilist">
			<view class="cen">
				<view class="box">
					<view class="img"><image :src="getimgsrc(item.img_arr[0])" mode=""></image> </view>
					<view class="infor">
						<view class="shopname">{{item.name}}</view>
						<u-gap :height="15"></u-gap>
						<view class="user">
							<view class="">联系人：{{item.contact}}</view>
							
						</view>
						<view class="user">
							<view class="">联系电话：{{item.phone}}</view>
							
						</view>
						<u-gap :height="15"></u-gap>
						<view class="u-line-1" style="width: 400rpx;color: #767676;font-size: 23rpx;">
							要求：{{item.remark}}
						</view>
						<u-gap :height="8"></u-gap>
						<view class="user" style="flex-wrap: wrap;">
							<view class="chai">截止时间：{{item.overdate}}</view>
							<!-- <view class="">过期时间：2022-12-12</view> -->
						</view>
					</view>
				</view>
			</view>
			<view class="bot">
				<view class="name">待接单</view>
				<view class="zt">
					<view class="go" @tap="bianjituzhiord(item.id)">编辑</view>
					<view class="no" @tap="rem(item.id)">删除</view>
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
				content: '你确定要删除此订单吗？',
				keyword: '',
				list: [{
						name: '待审核'
					}, {
						name: '已上线'
					}, {
						name: '已结束',
					},{
						name: '已驳回',
					}],
				current: 0,
				tuzhilist:[],
				page:1,
				id:null,
			}
		},
		onLoad() {
			
		},
		onShow() {
			this.tuzhilist = []
			this.page = 1
			this.gettuzhi()
		},
		onReachBottom() {
			if(this.tuzhilist.length<this.page*10)return
			this.page++
			this.gettuzhi()
		},
		methods: {
			//删除确定
			confirm(){
				this.$u.post('/api/v1/orderimg/orderImgDel',{
					id:this.id
				}).then(res =>{
					this.$u.toast(res.msg)
					this.tuzhilist = []
					this.page = 1
					this.gettuzhi()
				})
			},
			//删除弹框
			rem(id){
				this.id = id
				this.show = true
			},
			//编辑图纸
			bianjituzhiord(id){
				uni.navigateTo({
					url:'bianjiTuZhiOrd/bianjiTuZhiOrd?id='+id
				})
			},
			//获取图纸订单列表
			gettuzhi(){
				this.$u.post('/api/v1/orderimg/orderImgList',{
					page:this.page,
					status:this.current
					
				}).then(res =>{
					this.tuzhilist = [...this.tuzhilist,...res.data.data]
				})
			},
			change(index) {
				this.tuzhilist = []
				this.page = 1
				this.current = index;
				this.gettuzhi()
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
	margin:30rpx auto;
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
				height: 230rpx;
				width: 230rpx;
				margin-right: 10rpx;
				image{
					border-radius: 10rpx;
					height: 230rpx;
					width: 230rpx;
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
