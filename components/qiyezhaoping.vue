<template>
	<view>
		<view class="box" v-for="idnex in 5">
			<view class="text u-line-1">哈教师的合法就开始打发教科书按时到达减肥哈四大皆空按时间快速的恢复快</view>
			<view class="time">六分钟前</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"qiyezhaoping",
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped lang="scss">
.box{
	width: 90%;
	margin: auto;
	display: flex;
	justify-content: space-between;
	padding: 20rpx 10rpx;
	border-bottom: 1rpx solid #ebebeb;
	.time{
		font-size: 23rpx;
		white-space: nowrap;
		margin-left: 40rpx;
	}
}
</style>