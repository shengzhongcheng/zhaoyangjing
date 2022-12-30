<template>
	<view>
		<view class="lunboImg">
			<swiper class="swiper" circular>
				<swiper-item>
					<image src="../static/logo.png" mode="" class="img"></image>
				</swiper-item>
				<swiper-item>
					<image src="../static/logo.png" mode="" class="img"></image>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		name:"bannerimg",
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped lang="scss">
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
</style>