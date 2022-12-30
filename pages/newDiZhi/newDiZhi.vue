<template>
	<view>
		<view class="box">
			<view class="tr">
				<view class="title">收件人：</view>
				<view class=""><u-input placeholder="姓名" /></view>
			</view>
			<view class="tr">
				<view class="title">手机号码：</view>
				<view class=""><u-input placeholder="姓名" /></view>
			</view>
			<view class="tr" @click="addmap()">
				<view class="title">所在区域：</view>
				<view class="">{{uid.province}} {{uid.city}} {{uid.country}}</view>
			</view>
			<view class="tr" >
				<view class="title">详细地址：</view>
				<view class=""><u-input placeholder="姓名" /></view>
			</view>
			<view class="tr">
				<view class="title">设为默认地址：</view>
				<view class=""><u-switch v-model="checked"></u-switch></view>
			</view>
		</view>
		<view class="over"><u-button type="primary">确定</u-button></view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				checked:false,
				uid:{
					province:'请选择地址',//省
					city:'',//市
					country:'',//区
				}
			}
		},
		methods: {
			/* 详细地址选择地图 */
			addmap(){
				console.log('地址地址地址')
				uni.chooseLocation({
					success: (res) => {
						console.log('位置名称',res.name)
						
						console.log('详细地址：' + res.address);
						
						const address = res.address
						const proExp = ".+[省]",cityExp = ".+[市]",disExp = ".+[区]";
						const province = address.match(new RegExp(proExp))[0].replace(province, ""); // 省
						const city = address.match(new RegExp(cityExp))[0].replace(province, ""); // 市
						const district = address.match(new RegExp(disExp))[0].replace(province, "").replace(city, ""); // 区
						
						console.log(province)
						console.log(city)
						console.log(district)
						console.log('shnegasjdka',province,city,district)
						this.uid.province = province
						this.uid.city = city
						this.uid.country = district
						// this.addprovince = res.address.substring(0,9)
						
						
						// let province = res.address.substring(0,3)//省
						// let city = res.address.substring(3,6)//市
						// let country = res.address.substring(6,9)//区
						// this.uid.province = province
						// this.uid.city = city
						// this.uid.country = country
						// this.addprovince = res.address.substring(0,9)
						// console.log(province)
						// console.log(city)
						// console.log(district)
						console.log('纬度：' + res.latitude);
						console.log('经度：' + res.longitude);
					}
				})
			},
		}
	}
</script>

<style scoped lang="scss">
.box{
	width: 90%;
	margin: auto;
	.tr{
		display: flex;
		align-items: center;
		padding: 10rpx;
		.title{
			font-size: 24rpx;
			color: #4c4c4c;
			margin-right: 30rpx;
		}
	}
}
.over{
	width: 90%;
	margin: auto;
}
</style>
