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
					<u-form-item label="图纸要求:" label-width="130"><u-input v-model="form.intro" type="textarea"/></u-form-item>
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
