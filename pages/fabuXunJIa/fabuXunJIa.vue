<template>
	<view>
		<view class="box">
			<u-form :model="form" ref="uForm">
					<u-form-item label="标题:" label-width="160" ><u-input v-model="form.name" /></u-form-item>
					<u-form-item label="简介:" label-width="130"><u-input v-model="form.intro" type="textarea"/></u-form-item>
					<u-form-item label="采购量:" label-width="130"><u-input v-model="form.intro" /><u-input v-model="value" :type="type" :border="border" @click="show = true" />
		<u-action-sheet :list="actionSheetList" v-model="show" @click="actionSheetCallback"></u-action-sheet></u-form-item>
					<u-form-item label="截止时间:" label-width="130"><u-input v-model="form.intro" /></u-form-item>
					<u-form-item label="公司名称:" label-width="130"><u-input v-model="form.intro" /></u-form-item>
					<u-form-item label="联系人:" label-width="130"><u-input v-model="form.intro" /></u-form-item>
					<u-form-item label="联系电话:" label-width="130"><u-input v-model="form.intro" /></u-form-item>
					<u-form-item label="上传图纸:" label-width="130">
						<u-upload :action="action" @on-success="imgSucces"  ></u-upload>
					</u-form-item>
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
			action: 'http://www.example.com/upload',
				value: '',
				type: 'select',
				show: false,
				border: true,
				actionSheetList: [
					{
						text: '个'
					},
					{
						text: '吨'
					},
					{
						text: 'pcs'
					},{
						text: '个'
					},
					{
						text: '吨'
					},
					{
						text: 'pcs'
					}
				],
			}
		},
		methods: {
			// 点击actionSheet回调
			actionSheetCallback(index) {
				this.value = this.actionSheetList[index].text;
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
