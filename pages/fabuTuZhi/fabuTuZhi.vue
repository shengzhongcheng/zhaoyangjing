<template>
	<view>
		<view class="box">
			<u-form :model="form" ref="uForm">
					<u-form-item label="图纸名称:" label-width="160" :required="true"><u-input v-model="form.name" /></u-form-item>
					<u-form-item label="上传实图:" label-width="130" :required="true">
						<u-upload :action="action" @on-success="imgSucces"  max-count="1"></u-upload>
					</u-form-item>
					<u-form-item label="上传图纸:" label-width="130" :required="true">
						<u-upload :action="action" @on-success="tuzhi" max-count="2" ></u-upload>
					</u-form-item>
					<u-form-item label="图纸要求:" label-width="130" :required="true">
						<u-input v-model="form.remark" type="textarea"/>
					</u-form-item>
					<u-form-item label="截止时间:" label-width="130" :required="true">
						<text @click="show = true">{{form.overdate || "请选择时间"}}</text>
						<u-picker mode="time" v-model="show" :params="params" @confirm="confirm"></u-picker>
					</u-form-item>
					<u-form-item label="联系人:" label-width="130" :required="true"><u-input v-model="form.contact" /></u-form-item>
					<u-form-item label="联系方式:" label-width="130" :required="true"><u-input v-model="form.phone" /></u-form-item>
					<u-form-item label="所在地区:" label-width="130" :required="true">
						<text @click="showdiqu = true">{{form.address_city || "请选择地区"}}</text>
						<u-picker mode="region" v-model="showdiqu" @confirm="diqu"></u-picker>
					</u-form-item>
			</u-form>
		</view>
		<view class="but">
			<u-button type="primary" @click="fabu">立即发布</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show:false,
				showdiqu:false,
				params: {
					year: true,
					month: true,
					day: true,
					hour: false,
					minute: false,
					second: false
				},
				form: {
					name: '',//名称
					images:'',//上传实图
					timages:'',//上传图纸
					remark:'',//图纸需求
					overdate:'',//截止日期
					contact:'',//联系人
					phone:'',//联系电话
					address_city:'',//所在地区
					province:'',//省编号
					city:'',//市编号
					district:'',//县区编号
				},
			
			action: this.actionUrl,
			}
		},
		methods: {
			//地区选择
			diqu(e){
				console.log(e)
				this.form.address_city = e.province.label+"/"+e.city.label+"/"+e.area.label
			},
			//时间选择
			confirm(e){
				this.form.overdate = e.year+'-'+e.month+'-'+e.day
			},
			//发布图纸订单
			fabu(){
				this.$u.post('/api/v1/orderimg/orderImgAdd',this.form).then(res =>{
					this.$u.toast(res.msg)
					setTimeout(()=>{
						uni.navigateBack({
							
						})
					},1000)
				})
			},
			//图纸上传
			tuzhi(data, index, lists, name){
				console.log('图片2',lists)
				let arry = []
				for(let i in lists){
					arry.push(lists[i].response.data.url)
				}
				this.form.timages = arry.toString()
			},
			//实图上传
			imgSucces(data, index, lists, name){
				console.log('图片l',lists)
				let ary = []
				for(let i in lists){
					ary.push(lists[i].response.data.url)
				}
				this.form.images = ary.toString()
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
