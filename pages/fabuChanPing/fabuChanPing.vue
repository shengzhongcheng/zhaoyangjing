<template>
	<view>
		<view class="box">
			<u-form :model="form" ref="uForm">
					<u-form-item label="产品名称:" label-width="160" :required="true"><u-input v-model="form.name" /></u-form-item>
					<u-form-item label="产品简介:" label-width="130" :required="true">
						<u-input v-model="form.content" type="textarea"/>
					</u-form-item>
					<u-form-item label="起订量:" label-width="130" :required="true">
						<u-input v-model="form.num"/>
						<u-input v-model="form.unit" :type="type" placeholder="请选择单位" :border="border" @click="show = true" />
						<u-select v-model="show" :list="actionSheetList" @confirm="actionSheetCallback"></u-select>
						<!-- <u-action-sheet :list="actionSheetList" v-model="show" @click="actionSheetCallback"></u-action-sheet> -->
					</u-form-item>
					<u-form-item label="加工模式:" label-width="130" :required="true" >
						<u-radio-group v-model="radio" @change="radioGroupChange">
							<u-radio v-for="(item, index) in radioList" :key="index" :name="item.name" :disabled="item.disabled">
								{{ item.name }}
							</u-radio>
						</u-radio-group>
					</u-form-item>
					<u-form-item label="产品分类:" label-width="130" :required="true">
						<view class="" @click="jilianshows()">
							{{one || "请选择分类"}} {{tow || ''}}
							<u-select v-model="jilianshow" mode="mutil-column-auto" :list="jilianList" @confirm="confirm"></u-select>
						</view>
						
					</u-form-item>
					<u-form-item label="单价:" label-width="130" :required="true"><u-input v-model="form.price" /></u-form-item>
					<u-form-item label="联系人:" label-width="130" :required="true"><u-input v-model="form.contact" /></u-form-item>
					<u-form-item label="联系电话:" label-width="130" :required="true"><u-input v-model="form.phone" /></u-form-item>
					<u-form-item label="上传产品图:" label-width="170">
						<u-upload :action="action" @on-success="imgSucces"  max-count="4" ></u-upload>
					</u-form-item>
			</u-form>
		</view>
		<view class="but">
			<u-button type="primary" @click="add">确定</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					name: '',
					jg_type: '',//加工模式:0=成品出售,1=定制加工
					category_one: '',//一级分类id
					category_id:'',//二级分类id
					num:'',//起订量
					unit:'',//单位
					content:'',//产品简介
					price:'',//单价
					contact:'',//联系人
					phone:'',//联系电话
					images:'',//产品图片
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
				action: this.actionUrl,
				type: 'select',
				show: false,
				border: true,
				//单位选择
				actionSheetList: [],
				//级联选择数据
				jilianshow:false,
				jilianList:[],
				//选择后的分类
				one:'',
				tow:'',
			}
		},
		onLoad() {
			this.getdanwei()
			this.getClass()
		},
		methods: {
			//添加商品
			add(){
				this.$u.post('/api/v1/goods/goodsAdd',this.form).then(res =>{
					this.$u.toast(res.msg)
					setTimeout(()=>{
						uni.navigateBack({
							
						})
					},1000)
				})
			},
			
			
			
			jilianshows(){
				// console.log('111',this.jilianList)
				this.jilianshow = true
			},
			//选择器
			confirm(e) {
				console.log(e);
				this.form.category_one = e[0].value
				this.one = e[0].label
				this.form.category_id = e[1].value
				this.tow = e[1].label
			},
			//获取分类
			getClass(){
				this.$u.post('/api/v1/goods/goodsCat').then(res =>{
					let arr = res.data
					for(let i in arr){
						this.jilianList.push({value:arr[i].id,label:arr[i].name})
						this.jilianList[i]["children"]=[];
						let che = arr[i].childlist
						for(let k in che){
							this.jilianList[i].children.push({label:che[k].name,value:che[k].id})
						}
					}
					// console.log(this.jilianList)
				})
			},
			//单选加工模式
			radioGroupChange(e) {
				console.log(e);
				if(e == "成品出售"){
					this.form.jg_type = 0
				}else if(e == "定制加工"){
					this.form.jg_type = 1
				}
			},
			//获取单位
			getdanwei(){
				this.$u.post('/api/v1/goods/goodsUnit').then(res =>{
					let arr = res.data
					for(let i in arr){
						this.actionSheetList.push({label:arr[i]})
					}
				})
			},
			// 点击actionSheet回调
			actionSheetCallback(e) {
				// console.log(e)
				this.form.unit = e[0].label;
			},
			//图片上传
			imgSucces(data, index, lists, name){
				console.log('图片l',lists)
				let imglist = []
				for(let index in lists){
					imglist.push(lists[index].response.data.url)
				}
				this.form.images = imglist.toString()
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
