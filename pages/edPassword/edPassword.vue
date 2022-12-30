<template>
	<view>
		<view class="username">
			<u-form-item label="会员账号:" label-width="130">
				<u-input v-model="form.name" />
			</u-form-item>
			<u-form-item label="会员名称:" label-width="130" prop="intro" :border-bottom="false">
				<u-input v-model="form.intro" />
			</u-form-item>
			<u-form :model="form" ref="uForm">
				<u-gap height="20" bg-color="#dedede"></u-gap>
				<u-form-item label="原密码:" label-width="130" prop="name">
					<u-input v-model="form.name" />
				</u-form-item>
				<u-form-item label="新密码:" label-width="130" prop="intro" :border-bottom="false">
					<u-input v-model="form.intro" />
				</u-form-item>
				<u-form-item label="确认密码:" label-width="130" prop="name">
					<u-input v-model="form.name" />
				</u-form-item>
			</u-form>
		</view>
		<u-gap height="30"></u-gap>
		<view class="but"><u-button type="primary">确定</u-button></view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					name: '',
					intro: '',
				},
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
.username{
	width: 90%;
	margin: auto;
}
.but{
	width: 90%;
	margin: auto;
}
</style>
