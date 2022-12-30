<template>
	<view>
		<view class="box">
			<view class="top">
				<view class="tel"><u-icon name="phone-fill" color="#ababab" size="28"></u-icon><text>联系电话：123123123123</text> </view>
				<view class="tel"><u-icon name="email-fill" color="#ababab" size="28"></u-icon><text>公司邮箱：123123@qq.com</text> </view>
			</view>
			<u-gap :height="25"></u-gap>
			<view class="arrder">
				公司地址：发哈时间方哈市大家看法挥洒健康的黑金卡沙发上的健康粉红色
			</view>
		</view>
		<view class="bottom">
			<view class="textbox">
				<text>CopyRight</text>
				<text>©</text>
				<text>版权所有：照样精</text>
				<text>版权所有</text>
				<text>豫ICP备00000000000</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"qiyeBanQuan",
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped lang="scss">
.box{
	width: 100%;
	padding: 30rpx 20rpx;
	background-color: #2d2d2d;
	.top{
		display: flex;
		justify-content: space-between;
		color: white;
		font-size: 23rpx;
		.tel{
			white-space: nowrap;
			text{
				margin-left: 10rpx;
			}
		}
	}
	.arrder{
		width: 93%;
		font-size: 23rpx;
		margin: auto;
		color: white;
	}
}
.bottom{
	background-color: #000000;
	padding: 20rpx 10rpx;
	color: white;
	.textbox{
		width: 99%;
		margin: auto;
		font-size: 23rpx;
		display: flex;
		align-items: center;
		text{
			margin-right: 10rpx;
			white-space: nowrap;
		}
	}
}
</style>