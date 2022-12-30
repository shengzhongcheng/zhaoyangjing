<template>
	<view>
		<uni-table border stripe emptyText="暂无更多数据" >
			<!-- 表头行 -->
			<uni-tr>
				<uni-th align="center">工厂</uni-th>
				<uni-th align="center">岗位</uni-th>
				<uni-th align="center">更新时间</uni-th>
			</uni-tr>
			<!-- 表格数据行 -->
			<uni-tr v-for="index in 8" :key="index">
				<uni-td align="center">加工厂加工厂</uni-td>
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
