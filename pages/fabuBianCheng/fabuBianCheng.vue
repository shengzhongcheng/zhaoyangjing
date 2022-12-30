<template>
	<view>
		<view class="box">
			<u-form :model="form" ref="uForm">
					<u-form-item label="图纸名称:" label-width="160" ><u-input v-model="form.name" /></u-form-item>
					<u-form-item label="上传实图:" label-width="130">
						<u-upload :action="action" @on-success="imgSucces"  ></u-upload>
					</u-form-item>
					<u-form-item label="上传图纸:" label-width="130">
						<u-upload :action="action" @on-success="imgSucces"  ></u-upload>
					</u-form-item>
					<view class="classlist">
						<view class="title">
							编程报价：
						</view>
						<u-gap :height="15"></u-gap>
						<u-grid :col="3" :border="false" >
							<u-grid-item >
								<view class="grid-text">正方形</view>
								<image src="../../static/indexclass/dingdandating.png" mode=""></image>
								<view class="grid-text"><u-number-box v-model="value" @change="valChange"></u-number-box></view>
							</u-grid-item>
							<u-grid-item>
								<view class="grid-text">正方形</view>
								<image src="../../static/indexclass/tuiguang.png" mode=""></image>
								<view class="grid-text"><u-number-box v-model="value" @change="valChange"></u-number-box></view>
							</u-grid-item>
							<u-grid-item >
								<view class="grid-text">正方形</view>
								<image src="../../static/indexclass/lingsou.png" mode=""></image>
								<view class="grid-text"><u-number-box v-model="value" @change="valChange"></u-number-box></view>
							</u-grid-item>
							<u-grid-item >
								<view class="grid-text">正方形</view>
								<image src="../../static/indexclass/tuiguang.png" mode=""></image>
								<view class="grid-text"><u-number-box v-model="value" @change="valChange"></u-number-box></view>
							</u-grid-item>
							<u-grid-item >
								<view class="grid-text">正方形</view>
								<image src="../../static/indexclass/lingsou.png" mode=""></image>
								<view class="grid-text"><u-number-box v-model="value" @change="valChange"></u-number-box></view>
							</u-grid-item>
							<u-grid-item>
								<view class="grid-text">正方形</view>
								<image src="../../static/indexclass/zhaogongchang.png" mode=""></image>
								<view class="grid-text"><u-number-box v-model="value" @change="valChange"></u-number-box></view>
							</u-grid-item>
							<u-grid-item>
								<view class="grid-text">正方形</view>
								<image src="../../static/indexclass/biancheng.png" mode=""></image>
								<view class="grid-text"><u-number-box v-model="value" @change="valChange"></u-number-box></view>
							</u-grid-item>
							<u-grid-item>
								<view class="grid-text">正方形</view>
								<image src="../../static/indexclass/zhaoping.png" mode=""></image>
								<view class="grid-text"><u-number-box v-model="value" @change="valChange"></u-number-box></view>
							</u-grid-item>
							<u-grid-item >
								<view class="grid-text">正方形</view>
								<image src="../../static/indexclass/zhixun.png" mode=""></image>
								<view class="grid-text"><u-number-box v-model="value" @change="valChange"></u-number-box></view>
							</u-grid-item>
							<u-grid-item >
								<view class="grid-text">正方形</view>
								<image src="../../static/indexclass/wenda.png" mode=""></image>
								<view class="grid-text"><u-number-box v-model="value" @change="valChange"></u-number-box></view>
							</u-grid-item>
						</u-grid>
					</view>
					<u-form-item label="下单时间:" label-width="130"><u-input v-model="form.intro" /></u-form-item>
					<u-form-item label="截止时间:" label-width="130"><u-input v-model="form.intro" /></u-form-item>
					<u-form-item label="联系人:" label-width="130"><u-input v-model="form.intro" /></u-form-item>
					<u-form-item label="联系方式:" label-width="130"><u-input v-model="form.intro" /></u-form-item>
					<u-form-item label="所在地区:" label-width="130"><u-input v-model="form.intro" /></u-form-item>
			</u-form>
		</view>
		<view class="but">
			<u-button type="primary">立即发布</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					name: '',
					intro: '',
					sex: ''
				},
				value: 0,
			action: 'http://www.example.com/upload',
			}
		},
		methods: {
			valChange(e) {
				console.log('当前值为: ' + e.value)
			},
			//图片上传
			imgSucces(data, index, lists, name){
				console.log('图片l',lists)
				
			},
		}
	}
</script>

<style scoped lang="scss">
.box{
	width: 90%;
	margin: auto;
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
}
.but{
	width: 90%;
	margin: auto;
}
</style>
