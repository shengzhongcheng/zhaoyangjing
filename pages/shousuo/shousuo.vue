<template>
	<view>
		<view class="titleSousuo">
			<u-search placeholder="请输入你要搜索的内容" v-model="keyword" @custom="to_sousuoList"></u-search>
		</view>
		<view class="remenshousuo">热门搜索</view>
		<view class="wrap">
			<view class="name">皮手套及皮装饰制品制造业</view>
			<view class="name">饲料生产专用设备制造</view>
			<view class="name">橡胶零件厂</view>
			<view class="name">皮手套及皮装饰制品制造业</view>
			<view class="name">饲料生产专用设备制造</view>
			<view class="name">橡胶零件厂</view>
		</view>
		<view class="qinchu">
			<view class="sou">历史搜索</view>
			<view class="rem">清除</view>
		</view>
		<view class="wrap">
			<view class="name">皮手套及皮装饰制品制造业</view>
			<view class="name">饲料生产专用设备制造</view>
			<view class="name">橡胶零件厂</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyword: '',
			}
		},
		methods: {
			//跳转搜索页
			to_sousuoList(e){
				console.log(e)
				uni.navigateTo({
					url:'../sousuoList/sousuoList'
				})
			}
			
		}
	}
</script>

<style scoped lang="scss">
.titleSousuo{
	width: 90%;
	margin:20rpx auto;
	
}
.remenshousuo{
	width: 90%;
	margin:10rpx auto;
	font-size: 33rpx;
	font-weight: 600;
}
.qinchu{
	width: 90%;
	margin:20rpx auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.sou{
		font-size: 33rpx;
		font-weight: 600;
	}
	.rem{
		color: #1592ff;
	}
}
.wrap {
	width: 90%;
	margin: auto;
	display:flex;
	flex-wrap: wrap;
	.name{
		margin: 10rpx;
		padding: 10rpx;
		border-radius: 20rpx;
		border: 1rpx solid #b8b8b8;
		color: #616161;
		font-size: 20rpx;
		white-space: nowrap;
	}
}

	
</style>
