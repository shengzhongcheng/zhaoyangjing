<template>
	<view>
		<view class="box">
			<u-form :model="form" ref="uForm">
					<u-form-item label="招聘标题:" label-width="160" ><u-input v-model="form.name" /></u-form-item>
					<u-form-item label="加工量:" label-width="130">
						<u-input v-model="form.name" />
					</u-form-item>
					<u-form-item label="截止日期:" label-width="130">
						<u-input v-model="form.name" />
					</u-form-item>
					<!-- <u-form-item label="每月薪资:" label-width="130">
						<u-input v-model="form.intro"/>
						<u-input v-model="value" :type="type" placeholder="请选择规格" :border="border" @click="show = true" />
						<u-action-sheet :list="actionSheetList" v-model="show" @click="actionSheetCallback"></u-action-sheet>
					</u-form-item>
					<u-form-item label="招聘分类:" label-width="130">
						<u-input v-model="value" :type="type" placeholder="请选择" :border="border" @click="show = true" />
						<u-input v-model="value" :type="type" placeholder="请选择" :border="border" @click="show = true" />
					</u-form-item>
					<u-form-item label="学历要求:" label-width="130">
						<u-radio-group v-model="radio">
							<u-radio v-for="(item, index) in radioList" :key="index" :name="item.name" :disabled="item.disabled">
								{{ item.name }}
							</u-radio>
						</u-radio-group>
					</u-form-item>
					<u-form-item label="工作年限:" label-width="130">
						<u-radio-group v-model="radio">
							<u-radio v-for="(item, index) in radioListtow" :key="index" :name="item.name" :disabled="item.disabled">
								{{ item.name }}
							</u-radio>
						</u-radio-group>
					</u-form-item> -->
					<u-form-item label="招聘描述:" label-width="130">
						<u-input v-model="form.name" type="textarea" />
					</u-form-item>
					<!-- <u-form-item label="工作福利:" label-width="130">
						<u-input v-model="form.name" type="textarea" />
					</u-form-item>
					<u-form-item label="工作地址:" label-width="130">
						<u-input v-model="form.name" type="textarea" />
					</u-form-item> -->
					<u-form-item label="联系人:" label-width="130"><u-input v-model="form.intro" /></u-form-item>
					<u-form-item label="联系方式:" label-width="130"><u-input v-model="form.intro" /></u-form-item>
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
					name: '本科',
				},
				{
					name: '专科',
				},
			],
			radioListtow: [
				{
					name: '1年以下',
				},
				{
					name: '1-2年',
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
