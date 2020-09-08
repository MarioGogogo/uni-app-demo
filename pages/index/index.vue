<template>
	<view class="content box">
		<!-- 自定义头部组件 -->
         <navbar></navbar>
		 <view v-for="i in 100">
			 <text>{{i}}</text>
		 </view>
	</view>
</template>



<script>

	export default {
   
		data() {
			return {
				title: 'Hello',
				statusBarHeight:0
			}
		},
		async created() {
			const info = await uni.getSystemInfo()
			this.statusBarHeight = info[1].statusBarHeight
			const screenWidth = info[1].screenWidth
			console.log('状态栏的高度：',info,this.statusBarHeight);
			//获取胶囊位置 (h5 app mp-ali三个平台都不支持)
			// #ifndef H5 || APP-PLUS || MP-ALIPAY
			const menButtonInfo = uni.getMenuButtonBoundingClientRect()
			//胶囊底部 - 状态栏的高度  + （胶囊顶部 - 状态栏的高度） == 导航栏的高度
			console.log('res',res);
			const navBarHeight = menButtonInfo.bottom - info[1].statusBarHeight 
			const navBarWidht = menButtonInfo.left
			// #endif
			
		},
		onLoad() {

		}
	}
</script>

<style lang="scss">

</style>
