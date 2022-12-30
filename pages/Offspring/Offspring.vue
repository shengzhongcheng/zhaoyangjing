<template>
	<view>
		
		
		<uni-table border stripe emptyText="暂无更多数据" >
			<!-- 表头行 -->
			<uni-tr>
				<uni-th align="center">联系人</uni-th>
				<uni-th align="center">联系方式</uni-th>
				<uni-th align="center">操作</uni-th>
			</uni-tr>
			<!-- 表格数据行 -->
			<uni-tr>
				<uni-td>工业电话费静安寺阿斯蒂芬</uni-td>
				<uni-td>Jeson</uni-td>
				<uni-td><u-button type="error">删除</u-button></uni-td>
			</uni-tr>
			<uni-tr>
				<uni-td>工业电话费静安寺阿斯蒂芬</uni-td>
				<uni-td>Jeson</uni-td>
				<uni-td><u-button type="error">删除</u-button></uni-td>
			</uni-tr>
		
		</uni-table>
		<u-gap height="60"></u-gap>
		<view class="add"><u-button type="primary">添加子账号</u-button></view>
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

<style scoped lang="scss">
.add{
	width: 90%;
	margin: auto;
}
</style>
