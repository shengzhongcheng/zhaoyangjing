<template>
	<view>
		<uni-table border stripe emptyText="暂无更多数据" >
			<!-- 表头行 -->
			<uni-tr>
				<uni-th align="center">图片</uni-th>
				<uni-th align="center">标题</uni-th>
				<uni-th align="center">更新时间</uni-th>
			</uni-tr>
			<!-- 表格数据行 -->
			<uni-tr v-for="index in 8" :key="index">
				<uni-td><view class="" style="text-align: center;"><image src="../../static/indexclass/biancheng.png" style="width: 150rpx;height: 150rpx;" mode=""></image> </view> </uni-td>
				<uni-td align="center">Jeson</uni-td>
				<uni-td align="center">2022-12-12</uni-td>
			</uni-tr>
		
		</uni-table>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
