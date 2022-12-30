<template>
	<view>
		<view class="box">
			<u-form :model="form" ref="uForm">
					<u-form-item label="新闻名称:" label-width="160" ><u-input v-model="form.name" /></u-form-item>
					<u-form-item label="产品简介:" label-width="130">
						<u-input v-model="form.name" type="textarea"/>
					</u-form-item>
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
