<template>
	<view>
		<view class="lunboImg">
			<swiper class="swiper" circular>
				<swiper-item v-for="(item,index) in imglist" :key="index">
					<image :src="getimgsrc(item.image)" mode="" class="img"></image>
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
				imglist:[]
			};
		},
		// onLoad() {
		// 	this.getBnaner()
		// },
		mounted() {
			this.getBnaner()
		},
		methods:{
			//获取轮播图
			getBnaner(){
				this.$u.post('/api/v1/web/index/adList').then(res =>{
					this.imglist = res.data
				})
			},
		}
	}
</script>

<style scoped lang="scss">
.lunboImg{
	 		 width: 100%;
	 		 height: 350rpx;
			 .swiper{
				 width: 100%;
				 height: 350rpx;
				 .img{
					 height: 100%;
					 width: 100%;
				 }
			 }
	 }
</style>