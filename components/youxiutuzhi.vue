<template>
	<view class="tuzhiclass">
		<u-grid :col="3" >
			<u-grid-item v-for="index in 4" >
				<image src="../static/logo.png" mode=""></image>
				<view class="">优质路合金图纸</view>
				<view class="grid-text u-line-2">优质路合金图纸优质优质图呗优质吱吱吱吱</view>
			</u-grid-item>
		</u-grid>
	</view>
</template>

<script>
	export default {
		name:"youxiutuzhi",
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped lang="scss">

.tuzhiclass{
	image{
		width: 200rpx;
		height: 200rpx;
	}
	.grid-text {
		text-align: center;
			font-size: 23rpx;
			margin-top: 4rpx;
			color: $u-type-info;
	}
}
</style>