<template>
	<view>
		<u-gap :height="35" ></u-gap>
		<view class="title">您好用户123，填写真实资料，有助与卖家找到你哦。</view>
		<u-gap :height="40"></u-gap>
		<!-- 头像 -->
		<view class="userhead">
			<view class="text">当前头像：</view>
			<view class="">
				<u-avatar src="" mode="square" size="140"></u-avatar>
			</view>
		</view>
		<!-- 昵称 -->
		<view class="username">
			<u-form :model="form" ref="uForm">
					<u-form-item label="昵称:" :required ="true"><u-input v-model="form.name" /></u-form-item>
					<u-form-item label="真实姓名:" label-width ="130"><u-input v-model="form.username" /></u-form-item>
					<u-form-item label="性别:" :required ="true">
						<u-radio-group >
							<u-radio v-for="(item, index) in radioList" :key="index" :name="item.name" :disabled="item.disabled">
								{{ item.name }}
							</u-radio>
						</u-radio-group>
					</u-form-item>
					<u-form-item label="居住地:" label-width ="130"><u-input v-model="form.dizhi" /></u-form-item>
			</u-form>
		</view>
		<u-gap :height="40"></u-gap>
		<view class="overBut">
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
					username:'',
					dizhi:'',
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
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
.title{
	 color: #757575;
	 font-size: 25rpx;
	 width: 90%;
	 margin: auto;
}
.userhead{
	display: flex;
	width: 90%;
	margin: auto;
	.text{
		color: #757575;
		font-size: 20rpx;
	}
}
.username{
	width: 90%;
	margin: auto;
}
.overBut{
	width: 90%;
	margin: auto;
}
</style>
