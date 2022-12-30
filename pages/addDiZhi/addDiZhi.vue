<template>
	<view>
		<view class="box">
			<view class="inp">收件人：都开始</view>
			<view class="inp">手机号：12312312312</view>
			<view class="inp">所在区域：中原区哎什么地方</view>
			<view class="inp">详细地址：中原123号楼</view>
			<u-gap height="15" bg-color="#ececec"></u-gap>
			<view class="inp" style="display: flex;justify-content: space-between;">设为默认地址：<u-switch v-model="checked"></u-switch></view>
		</view>
		
		<view class="add"><u-button type="primary" @click="to_newDiZhi">新增地址</u-button></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				checked: false,
			}
		},
		methods: {
			//新增地址
			to_newDiZhi(){
				uni.navigateTo({
					url:'/pages/newDiZhi/newDiZhi'
				})
			},
			
			change(status) {
				console.log(status);
			},
		}
	}
</script>

<style scoped lang="scss">
.box{
	width: 90%;
	margin:20rpx auto;
	border: 1rpx solid #dfdfdf;
	border-radius: 20rpx;
	.inp{
		border-bottom: 1rpx solid #dfdfdf;
		padding: 10rpx 10rpx;
	}
}
.add{
	width: 90%;
	margin: auto;
}
</style>
