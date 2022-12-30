<template>
	<view>
		<banderimg></banderimg>
		<view class="from">
			<u-form :model="form" ref="uForm">
					<u-form-item label="标题:" label-width="130" :required="true" prop="title"><u-input v-model="form.title" /></u-form-item>
					<u-form-item label="提问人:" label-width="130" :required="true" prop="name"><u-input v-model="form.name" /></u-form-item>
					<u-form-item label="发布时间:" label-width="130" :required="true" prop="time"><u-input v-model="form.time" /></u-form-item>
					<u-form-item label="问题内容:" label-width="130" :required="true" prop="name">
						<textarea maxlength="-1" v-model="form.text" cols="30" rows="10" style="border: 1rpx solid #e1e1e1;"></textarea>
					</u-form-item>
			</u-form>
		</view>
		<u-gap :height="20"></u-gap>
		<view class="ovrebut"><u-button type="primary" size="mini">提交问题</u-button></view>
	</view>
</template>

<script>
	import banderimg from '@/components/bannerimg.vue'
	export default {
		data() {
			return {
				form: {
					title: '',
					name: '',
					time:'',
					text:'',
				},
			}
		},
		components:{
			banderimg
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
.from{
	width: 90%;
	margin: auto;
}
.ovrebut{
	width: 90%;
	margin: auto;
}
</style>
