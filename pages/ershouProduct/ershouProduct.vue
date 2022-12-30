<template>
	<view>
		<view class="box">
			<u-form :model="form" ref="uForm">
					<u-form-item label="产品名称:" label-width="160" ><u-input v-model="form.name" /></u-form-item>
					<u-form-item label="产品简介:" label-width="130">
						<u-input v-model="form.name" type="textarea"/>
					</u-form-item>
					<u-form-item label="起订量:" label-width="130">
						<u-input v-model="form.intro"/>
						<u-input v-model="value" :type="type" placeholder="请选择规格" :border="border" @click="show = true" />
						<u-action-sheet :list="actionSheetList" v-model="show" @click="actionSheetCallback"></u-action-sheet>
					</u-form-item>
					<u-form-item label="加工模式:" label-width="130">
						<u-radio-group v-model="radio">
							<u-radio v-for="(item, index) in radioList" :key="index" :name="item.name" :disabled="item.disabled">
								{{ item.name }}
							</u-radio>
						</u-radio-group>
					</u-form-item>
					<u-form-item label="单价:" label-width="130"><u-input v-model="form.intro" /></u-form-item>
					<u-form-item label="联系人:" label-width="130"><u-input v-model="form.intro" /></u-form-item>
					<u-form-item label="联系方式:" label-width="130"><u-input v-model="form.intro" /></u-form-item>
					<u-form-item label="上传产品图:" label-width="170">
						<u-upload :action="action" @on-success="imgSucces"  ></u-upload>
					</u-form-item>
			</u-form>
		</view>
		<view class="but">
			<u-button type="primary">发布</u-button>
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
					name: '成品出售',
				},
				{
					name: '定制加工',
				},
			],
			radio: '',
			action: 'http://www.example.com/upload',
			value: '',
			type: 'select',
			show: false,
			gongyi:false,
			caizhi:false,
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
