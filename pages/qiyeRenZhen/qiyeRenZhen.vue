<template>
	<view>
		<view class="formBox">
			<u-form :model="form" ref="uForm">
					<u-form-item label="公司名称:" label-width="130"><u-input v-model="form.name" /></u-form-item>
					<u-form-item label="主营产品:" label-width="130"><u-input v-model="form.intro" /></u-form-item>
					<u-form-item label="公司人数:" label-width="130"><u-input v-model="form.intro" /></u-form-item>
					<u-form-item label="联系人:" label-width="130"><u-input v-model="form.intro" /></u-form-item>
					<u-form-item label="联系电话:" label-width="130"><u-input v-model="form.intro" /></u-form-item>
					<u-form-item label="公司人数:" label-width="130"><u-input v-model="form.intro" /></u-form-item>
					<u-form-item label="联系地址:" label-width="130">
						<view class="" @tap="picker">请选择地址<u-picker mode="region" v-model="show" ></u-picker></view>
					</u-form-item>
					<u-form-item label="行业类型:" label-width="130">
						<u-checkbox-group>
							<u-checkbox v-model="item.checked" v-for="(item, index) in checkboxList" :key="index" :name="item.name">
								{{ item.name }}
							</u-checkbox>
						</u-checkbox-group>
					</u-form-item>
					<u-form-item label="营业执照:" label-width="130">
						<u-upload @on-success="imgSucces" :action="action" max-count="1" :file-list="fileList1"></u-upload>
					</u-form-item>
					<u-form-item label="上传身份证正面:" label-width="130">
						<u-upload @on-success="imgSucces" :action="action" max-count="1" :file-list="fileList1"></u-upload>
					</u-form-item>
					<view class="but"><u-button type="primary">确定</u-button></view>
			</u-form>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				fileList1:[],
				action: 'https://rl.changgongwang.cn/index/index/getImage',
				show:false,
				form: {
					name: '',
					intro: '',
					sex: ''
				},
				checkboxList: [
						{
							name: '机加工',
							checked: false,
							disabled: false
						},
						{
							name: '机加工',
							checked: false,
							disabled: false
						},
						{
							name: '机加工',
							checked: false,
							disabled: false
						},
						{
							name: '机加工',
							checked: false,
							disabled: false
						},
						{
							name: '机加工',
							checked: false,
							disabled: false
						}
				],
			}
		},
		methods: {
			//图片上传
			imgSucces(data, index, lists, name){
				console.log('图片l',lists)
			},
			//地址选择器
			picker(){
				console.log('123')
				this.show = true
			},
		}
	}
</script>

<style lang="scss" scoped>
.formBox{
	width: 90%;
	margin: auto;
}
.but{
	width: 70%;
	margin:50rpx auto;
}
</style>
