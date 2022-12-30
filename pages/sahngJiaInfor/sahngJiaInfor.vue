<template>
	<view>
		<banderimg></banderimg>
		<view class="gongshiname">
			<view class="name">鸿源机械五金制造有限公司</view>
		</view>
		<u-gap :height="20"></u-gap>
		<!-- 企业简介 -->
		<view class="qiyeJianjie">
			企业简介
		</view>
		<view class="textJianjie">
			饭哈瞌睡的合法快乐圣诞节阿斯顿开了房间爱丽丝的爱上了对方骄傲了史蒂夫爱上了戴假发拉
			爱上的疯狂拉升就分开了爱上打飞机啊脸上的肌肤奥克斯利的肌肤
		</view>
		<!-- 企业实力 -->
		<u-gap :height="40"></u-gap>
		<view class="qiyeJianjie">
			企业实力
		</view>
		<view class="textJianjie">
			<uni-table stripe emptyText="暂无更多数据">
				<uni-tr>
					<uni-td align="center">所在地：中国广东</uni-td>
					<uni-td align="center">经营模式：生产</uni-td>
				</uni-tr>
				<uni-tr>
					<uni-td align="center">企业类型：民营企业</uni-td>
					<uni-td align="center">成立年份：2013</uni-td>
				</uni-tr>
				<uni-tr>
					<uni-td align="center">企业类型：雇员数量</uni-td>
					<uni-td align="center">科研人员数量：1</uni-td>
				</uni-tr>
				<uni-tr>
					<uni-td align="center">企业类型：雇员数量</uni-td>
					<uni-td align="center">质检人员：30</uni-td>
				</uni-tr>
				<uni-tr>
					<uni-td align="center">工厂面积：1000-3000㎡</uni-td>
					<uni-td align="center">月产量：300</uni-td>
				</uni-tr>
				<uni-tr>
					<uni-td align="center">量大年产能：5000</uni-td>
					<uni-td align="center">进出口权：yes</uni-td>
				</uni-tr>
				<uni-tr>
					<uni-td align="center">倾向订单类型：小批量多种</uni-td>
					<uni-td align="center">ODM能力：yes</uni-td>
				</uni-tr>
				<uni-tr>
					<uni-td align="center">行业类型：</uni-td>
					<uni-td align="center">合作过客户：讲讲电子</uni-td>
				</uni-tr>
				<uni-tr>
					<uni-td align="center">第一优势行业：汽车，新能源，航天电话</uni-td>
					<uni-td align="center">第二优势行业：汽车，新能源，航天电话汽车，新能源，航天电话</uni-td>
				</uni-tr>
				<uni-tr>
					<uni-td align="center">第一主要客户：</uni-td>
					<uni-td align="center">第二主要客户：</uni-td>
				</uni-tr>
				<uni-tr>
					<uni-td align="center">企业网址：</uni-td>
					<uni-td align="center">信息化系统：ERP</uni-td>
				</uni-tr>
			</uni-table>
		</view>
		<!-- 联系实力 -->
		<u-gap :height="40"></u-gap>
		<view class="qiyeJianjie">
			联系方式
		</view>
		<view class="textJianjie">
			<view class="lianxi">联系人：段先生</view>
			<view class="lianxi">联系电话：12345678912</view>
			<view class="lianxi">公司地址：河南省郑州市管城区资江水路撒谎能够成</view>
		</view>
	</view>
</template>

<script>
	import banderimg from '@/components/bannerimg.vue'
	export default {
		components:{
			banderimg
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
.gongshiname{
	width: 90%;
	margin: auto;
	padding: 30rpx;
	border-bottom: 1rpx solid #e3e3e3;
	.name{
		font-weight: 800;
	}
}
.qiyeJianjie{
	width: 90%;
	margin: auto;
	border-left: #1090ff solid 10rpx;
	color: #1090ff;
	font-weight: 900;
	padding: 0rpx 20rpx;
}
.textJianjie{
	width: 90%;
	margin: auto;
	padding: 40rpx 4rpx;
	border-bottom: #e3e3e3 solid 1rpx;
	.lianxi{
		font-size: 23rpx;
		color: #303030;
	}
}
</style>
