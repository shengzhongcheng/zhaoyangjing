<template>
	<view>
		<view class="box">
			<u-form :model="form" ref="uForm">
					<u-form-item label="标题:" label-width="160" :required ="true" prop="name"><u-input v-model="form.name" /></u-form-item>
					<u-form-item label="简介:" label-width="130" :required ="true" prop="remark"><u-input v-model="form.remark" type="textarea"/></u-form-item>
					<u-form-item label="采购量:" label-width="130" :required ="true" prop="num">
						<u-input v-model="form.num" />
						<u-input v-model="form.unit" type="select" :border="true" @click="show = true" />
						<!-- <u-action-sheet :list="actionSheetList" v-model="show" @click="actionSheetCallback"></u-action-sheet> -->
						<u-select v-model="show" :list="actionSheetList" @confirm="actionSheetCallback"></u-select>
					</u-form-item>
					<u-form-item label="材质:" label-width="130" >
						<u-input v-model="form.caizhi" type="select"  @click="shows = true"/>
						<!-- <u-action-sheet :list="cai" v-model="shows" @click="actionSheet"></u-action-sheet> -->
						<u-select v-model="shows" :list="cai" @confirm="actionSheet"></u-select>
					</u-form-item>
					<u-form-item label="截止时间:" label-width="130" prop="overdate" :required ="true">
						<text @click="showpick = true">{{form.overdate || '请选择时间'}}</text>
						<u-picker mode="time" v-model="showpick" :params="params" @confirm="oktime"></u-picker>
					</u-form-item>
					<u-form-item label="联系人:" label-width="130" prop="contact" :required ="true"><u-input v-model="form.contact" /></u-form-item>
					<u-form-item label="职位:" label-width="130" prop="position" :required ="true"><u-input v-model="form.position" /></u-form-item>
					<u-form-item label="联系电话:" label-width="130" prop="phone" :required ="true"><u-input v-model="form.phone" /></u-form-item>
					<u-form-item label="上传图纸:" label-width="130" :required ="true" prop="images">
						<u-upload :action="action" @on-success="imgSucces"  max-count="2"></u-upload>
					</u-form-item>
			</u-form>
		</view>
		<view class="but">
			<u-button type="primary" @click="postForm">立即发布</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				params: {
					year: true,
					month: true,
					day: true,
					hour: false,
					minute: false,
					second: false
				},
				shows:false,
				showpick: false,
				form: {
					name: '',//询价单标题
					remark: '',//询价单简介
					num: '',//采购量
					unit:'',//单位
					caizhi:'',//材质
					overdate:'',//截止时间
					contact:'',//联系人
					position:'',//职位
					phone:'',//电话
					images:'',//图纸
				},
				action: this.actionUrl,
				show: false,
				actionSheetList: [],
				cai:[],
				rules: {
					name: [
						{
							required: true,
							message: '请输入标题',
							// 可以单个或者同时写两个触发验证方式
							trigger: ['change','blur']
						}
					],
					remark: [
						{
							required: true,
							message: '请输入简介',
							trigger: ['change','blur']
						}
					],
					num: [
						{
							required: true,
							message: '请输入采购量',
							trigger: ['change','blur']
						}
					],
					overdate: [
						{
							required: true,
							message: '请选择截止时间',
							trigger: ['change','blur']
						}
					],
					contact: [
						{
							required: true,
							message: '请输入联系人',
							trigger: ['change','blur']
						}
					],
					position: [
						{
							required: true,
							message: '请输入职位',
							trigger: ['change','blur']
						}
					],
					phone: [
						{
							required: true,
							message: '请输入联系电话',
							trigger: ['change','blur']
						}
					],
					images: [
						{
							required: true,
							message: '请上传图纸',
							trigger: ['change','blur']
						}
					]
				}
				
				
			}
		},
		onLoad() {
			this.getdanwei()
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		},
		methods: {
			// //获取单位
			getdanwei(){
				this.$u.post('/api/v1/orderprice/priceInfo').then(res =>{
					for(let i in res.data.unit){
						this.actionSheetList.push({label:res.data.unit[i]})
					}
					for(let k in res.data.caizhi){
						this.cai.push({label:res.data.caizhi[k]})
					}
				})
			},
			
			//选择单位
			oktime(e){
				console.log(e)
				this.form.overdate = e.year+'-'+e.month+"-"+e.day
			},
			//提交表单
			postForm(){
				this.$refs.uForm.validate(valid => {
					if (valid) {
						if(this.form.unit != ''){
							// this.form.images = this.form.images.toString()
							this.$u.post('/api/v1/orderprice/orderAdd',this.form).then(res =>{
								this.$u.toast(res.msg)
								setTimeout(()=>{
									uni.navigateBack({
										
									})
								},1000)
								
							})
						}else{
							this.$u.toast('请选择单位')
						}
						
					} else {
						console.log('验证失败');
					}
				});
				
			},
			actionSheet(e){
				this.form.caizhi = e[0].label;
			},
			// 点击actionSheet回调
			actionSheetCallback(e) {
				console.log(e)
				this.form.unit = e[0].label;
			},
			//图片上传
			imgSucces(data, index, lists, name){
				// console.log('图片l',lists)
				let k = []
				for(let i in lists){
					k.push(lists[i].response.data.url)
				}
				this.form.images = k.toString()
				console.log(this.form.images)
			},
		}
	}
</script>

<style scoped lang="scss">
.box{
	width: 90%;
	margin: auto;
}
.but{
	width: 90%;
	margin: auto;
}
</style>
