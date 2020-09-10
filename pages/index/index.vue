<template>
	<view class="home">
		<!-- 自定义导航 -->
		<navbar></navbar>
		<!-- 选项卡 -->
		<tab :tabList="tabList" @tab="tab"></tab>
		<!-- 卡片列表 必须外面包裹一层才能滚动-->
		<view class="home-swiper">
			<list-swiper :tabList="tabList"></list-swiper>
		</view>

	</view>
</template>



<script>
	export default {
		data() {
			return {
				title: 'Hello',
				statusBarHeight: 0,
				tabList: 100
			}
		},
		async created() {
			const info = await uni.getSystemInfo()
			this.statusBarHeight = info[1].statusBarHeight
			const screenWidth = info[1].screenWidth
			console.log('状态栏的高度：', info, this.statusBarHeight);
			//获取胶囊位置 (h5 app mp-ali三个平台都不支持)
			// #ifndef H5 || APP-PLUS || MP-ALIPAY
			const menButtonInfo = uni.getMenuButtonBoundingClientRect()
			//胶囊底部 - 状态栏的高度  + （胶囊顶部 - 状态栏的高度） == 导航栏的高度
			console.log('res', res);
			const navBarHeight = menButtonInfo.bottom - info[1].statusBarHeight
			const navBarWidht = menButtonInfo.left
			// #endif

		},
		onLoad() {

		},
		mounted() {
			console.log(this.$api);
			this.getLabel()
		},
		methods: {
			getLabel() {
				this.$api.get('http://rap2.taobao.org:38080/app/mock/266176/getTabList', {
					username: 'jack'
				}).then(res => {
					if (res.success && res.code === '200') {
						this.tabList = res.results.data
					}
					console.log(res);
				})
			},
			tab(item, index) {
				console.log(item, index);
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.home {
		display: flex;
		flex-direction: column;
		flex: 1;
		overflow: hidden;

		.home-swiper {
			flex: 1;
			box-sizing: border-box;
			border: 1px solid red;
		}


	}
</style>
