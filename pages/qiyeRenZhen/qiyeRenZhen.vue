<template>
	<view>
		<view class="formBox">
			<u-form :model="form" ref="uForm">
					<u-form-item label="公司名称:" prop="name" :required ="true" label-width="130"><u-input v-model="form.name" /></u-form-item>
					<u-form-item label="主营产品:" prop="zhuy" :required ="true" label-width="130"><u-input v-model="form.zhuy" /></u-form-item>
					<u-form-item label="公司人数:" prop="num" :required ="true" label-width="130"><u-input v-model="form.num" /></u-form-item>
					<!-- <u-form-item label="省市区:" :required ="true" label-width="130"><u-input v-model="form.address_city" /></u-form-item> -->
					<u-form-item label="省编号:" label-width="130"><u-input v-model="form.province" /></u-form-item>
					<u-form-item label="市编号:" label-width="130"><u-input v-model="form.city" /></u-form-item>
					<u-form-item label="区县编号:" label-width="130"><u-input v-model="form.district" /></u-form-item>
					<u-form-item label="省市区:" prop="address_city" :required ="true" label-width="130">
						<view class="" @tap="picker">{{form.address_city || '请选择地址'}}<u-picker mode="region" v-model="show" @confirm="address"></u-picker></view>
					</u-form-item>
					<u-form-item label="详细地址:" prop="address_detail" :required ="true" label-width="130"><u-input v-model="form.address_detail" /></u-form-item>
					<u-form-item label="行业类型:" prop="category_ids" label-width="130">
						<view class="">
							<u-checkbox-group @change="checkboxGroupChange">
								<u-checkbox v-model="item.checked" v-for="(item, index) in checkboxList"  :key="index" :name="item.name">
									{{ item.name }}
								</u-checkbox>
							</u-checkbox-group>
						</view>
						
					</u-form-item>
					<u-form-item label="营业执照:" prop="yyzz_images" label-width="130">
						<u-upload @on-success="imgSucces" :action="action" max-count="1" :file-list="fileList1"></u-upload>
					</u-form-item>
					<u-form-item label="上传身份证正面:" prop="image" label-width="130">
						<u-upload @on-success="sfzimg" :action="action" max-count="1" :file-list="fileList1"></u-upload>
					</u-form-item>
					<view class="but"><u-button type="primary" @click="subTijiao">确定</u-button></view>
			</u-form>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				fileList1:[],
				action: this.actionUrl,
				show:false,
				form: {
					name: '',//公司名称
					zhuy: '',//主营产品
					num: '',//公司人数
					address_city:'',//省市区
					province:'',//省编号非必写
					city:'',//市编号非必写
					district:'',//区县编号非必写
					address_detail:'',//详细地址
					category_ids:'',//行业类型
					yyzz_images:'',//营业执照
					image:'',//身份证正面
				},
				checkboxList: [],
				rules: {
					name: [
						{ 
							required: true, 
							message: '请输入公司名称', 
							// 可以单个或者同时写两个触发验证方式 
							trigger: ['change','blur'],
						}
					],
					zhuy: [
						{
							required: true, 
							message: '请输入主营产品', 
							trigger: ['change','blur'],
						}
					],
					num: [
						{
							required: true, 
							message: '请输入公司人数', 
							trigger: ['change','blur'],
						}
					],
					address_city: [
						{
							required: true, 
							message: '请选择省市区', 
							trigger: ['change','blur'],
						}
					],
					address_detail: [
						{
							required: true, 
							message: '请填写详细地址', 
							trigger: ['change','blur'],
						}
					],
					category_ids:[
						{
							required: true, 
							message: '请选择行业类型', 
							trigger: ['change','blur'],
						}
					],
					yyzz_images:[
						{
							required: true, 
							message: '请上传营业执照', 
							trigger: ['change','blur'],
						}
					],
					image:[
						{
							required: true, 
							message: '请上传身份证正面', 
							trigger: ['change','blur'],
						}
					]
				}
			}
		},
		onLoad() {
			this.getClass()
			console.log(this.action)
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		},
		methods: {
			//提交企业认证
			subTijiao(){
				this.$refs.uForm.validate(valid => {
					if (valid) {
						this.$u.post('/api/v1/user/shopRen',this.form).then(res =>{
							this.$u.toast(res.msg)
						})
					} else {
						console.log('验证失败');
					}
				});
				
			},
			// 选中任一checkbox时，由checkbox-group触发
			checkboxGroupChange(e) {
				// console.log(e);
				let arry = []
				for(let k in e){
					for(let i in this.checkboxList){
						if(this.checkboxList[i].name == e[k]){
							// console.log(this.checkboxList[i].id)
							arry.push(this.checkboxList[i].id)
						}
					}
				}
				// console.log(arry.toString())
				this.form.category_ids = arry.toString()
			},
			//获取行业类型
			getClass(){
				this.$u.post('/api/v1/goods/goodsCat',{
					type:'hangye'
				}).then(res =>{
					this.checkboxList = res.data
				})
			},
			
			//选中省市区
			address(e){
				
				this.form.address_city = e.province.label+'/'+e.city.label+'/'+e.area.label
				console.log('eee',this.address_city)
			},
			//身份证
			sfzimg(data, index, lists, name){
				this.form.image = lists[0].response.data.url
			},
			//图片上传
			imgSucces(data, index, lists, name){
				console.log('图片l',lists)
				this.form.yyzz_images = lists[0].response.data.url
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
