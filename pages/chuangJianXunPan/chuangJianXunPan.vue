<template>
	<view>
		<view class="box">
			<u-form :model="form" ref="uForm">
					<u-form-item label="询盘标题:" label-width="160" ><u-input v-model="form.name" /></u-form-item>
					<u-form-item label="项目描述:" label-width="130">
						<u-input v-model="form.name" type="textarea"/>
					</u-form-item>
					<u-form-item label="采购数量:" label-width="130">
						<u-input v-model="form.intro"/>
						<u-input v-model="value" :type="type" :border="border" @click="show = true" placeholder="选择单位"/>
						<u-action-sheet :list="actionSheetList" v-model="show" @click="actionSheetCallback"></u-action-sheet>
					</u-form-item>
					<u-form-item label="盘主工艺:" label-width="130">
						<u-input v-model="form.intro" />
						<u-input v-model="value" :type="type" :border="border" @click="gongyi = true" placeholder="选择单位"/>
						<u-action-sheet :list="actionSheetList" v-model="gongyi" @click="actionSheetCallback"></u-action-sheet>
					</u-form-item>
					<u-form-item label="材质:" label-width="130">
						<u-input v-model="form.intro" />
						<u-input v-model="value" :type="type" :border="border" @click="caizhi = true" placeholder="选择单位"/>
						<u-action-sheet :list="actionSheetList" v-model="caizhi" @click="actionSheetCallback"></u-action-sheet>
					</u-form-item>
					<u-form-item label="交货日期:" label-width="130"> <view class="" @tap="calshow = true">选择日期<u-picker v-model="calshow" mode="time" :params="params" @confirm="time"></u-picker></view> </u-form-item>
					<u-form-item label="区域指定:" label-width="130">
						<u-checkbox-group>
							<u-checkbox v-model="item.checked" v-for="(item, index) in checkboxList" :key="index" :name="item.name">
								{{ item.name }}
							</u-checkbox>
						</u-checkbox-group>
					</u-form-item>
					<u-form-item label="企业规模:" label-width="130"><u-input v-model="form.intro" /></u-form-item>
					<u-form-item label="联系人:" label-width="130"><u-input v-model="form.intro" /></u-form-item>
					<u-form-item label="联系方式:" label-width="130"><u-input v-model="form.intro" /></u-form-item>
					<u-form-item label="职位:" label-width="130"><u-input v-model="form.intro" /></u-form-item>
					<u-form-item label="上传图纸:" label-width="130">
						<u-upload :action="action" @on-success="imgSucces"  ></u-upload>
					</u-form-item>
			</u-form>
		</view>
		<view class="but">
			<u-button type="primary">确定</u-button>
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
				calshow:false,
				form: {
					name: '',
					intro: '',
					sex: ''
				},
			checkboxList: [
				{
					name: '苹果',
					checked: false,
					disabled: false
				},
				{
					name: '雪梨',
					checked: false,
					disabled: false
				},
				{
					name: '柠檬',
					checked: false,
					disabled: false
				}
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
			//日期选择器
			time(e){
				console.log(e)
			},
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
