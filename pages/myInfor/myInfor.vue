<template>
	<view>
		<view class="box">
			<u-form :model="form" ref="uForm">
					<u-form-item label="联系人姓名:" label-width="160" ><u-input v-model="form.name" /></u-form-item>
					<u-form-item label="性别:">
						<u-radio-group v-model="radio">
							<u-radio v-for="(item, index) in radioList" :key="index" :name="item.name" :disabled="item.disabled">
								{{ item.name }}
							</u-radio>
						</u-radio-group>
					</u-form-item>
					<u-form-item label="电子邮箱:" label-width="130"><u-input v-model="form.intro" /></u-form-item>
					<u-form-item label="职位:" label-width="130"><u-input v-model="form.intro" /></u-form-item>
					<u-form-item label="QQ:" label-width="130"><u-input v-model="form.intro" /></u-form-item>
					<u-form-item label="微信:" label-width="130"><u-input v-model="form.intro" /></u-form-item>
					<u-form-item label="固话:" label-width="130"><u-input v-model="form.intro" /></u-form-item>
					<u-form-item label="传真:" label-width="130"><u-input v-model="form.intro" /></u-form-item>
					<u-form-item label="身份证照片:" label-width="130">
						<u-upload :action="action" @on-success="imgSucces"  ></u-upload>
					</u-form-item>
			</u-form>
		</view>
		<view class="but">
			<u-button type="primary">保存</u-button>
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
