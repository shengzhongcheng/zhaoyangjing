<template>
	<view>
		<view class="box">
			<u-form :model="form" ref="uForm">
					<u-form-item label="联系人姓名:" :required ="true" label-width="160" ><u-input v-model="form.name" /></u-form-item>
					<u-form-item label="性别:" :required ="true">
						<u-radio-group v-model="radio" @change="radioGroupChange">
							<u-radio v-for="(item, index) in radioList" :key="index" :name="item.name" :disabled="item.disabled">
								{{ item.name }}
							</u-radio>
						</u-radio-group>
					</u-form-item>
					<u-form-item label="电子邮箱:" :required ="true" label-width="130"><u-input v-model="form.email" /></u-form-item>
					<u-form-item label="职位:" :required ="true" label-width="130"><u-input v-model="form.position" /></u-form-item>
					<u-form-item label="QQ:" label-width="130"><u-input v-model="form.qq" /></u-form-item>
					<u-form-item label="微信:" label-width="130"><u-input v-model="form.wechat" /></u-form-item>
					<u-form-item label="固话:" label-width="130"><u-input v-model="form.tel" /></u-form-item>
					<u-form-item label="传真:" label-width="130"><u-input v-model="form.fix" /></u-form-item>
					<!-- <u-form-item label="身份证照片:" label-width="130">
						<u-upload :action="action" @on-success="imgSucces"  ></u-upload>
					</u-form-item> -->
			</u-form>
		</view>
		<view class="but">
			<u-button type="primary" @click="postfrom">确定</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					name: '',//姓名
					email:'',//邮箱
					sex: '',//性别
					position:'',//职位
					qq:'',
					wechat:'',
					tel:'',
					fix:'',
					idcard:'',
				},
			radioList: [
					{
						name: '男',
						disabled: false
					},
					{
						name: '女',
						disabled: false
					}
				],
			radio: '',
			action: 'http://www.example.com/upload',
			}
		},
		methods: {
			postfrom(){
				if(this.form.name == ''){
					this.$u.toast('请输入姓名')
				}else if(this.form.email == ''){
					this.$u.toast('请输入邮箱')
				}else if(this.form.sex == ''){
					this.$u.toast('请选择性别')
				}else if(this.form.position == ''){
					this.$u.toast('请选择职位')
				}else{
					this.$u.post('/api/v1/user/userInfo',this.form).then(res =>{
						this.$u.toast(res.msg)
					})
				}
				
			},
			radioGroupChange(e) {
				console.log(e);
				this.form.sex = e
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
}
.but{
	width: 90%;
	margin: auto;
}
</style>
