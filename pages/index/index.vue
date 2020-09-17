<template>
	<view class="home">
		<!-- 自定义导航 -->
		<navbar></navbar>
		<!-- 选项卡 -->
		<tab :tabList="tabList" :tabIndex="tabIndex" @tab="tab"></tab>
		<!-- 卡片列表 必须外面包裹一层才能滚动-->
		<view class="home-swiper">
			<list-swiper :tabList="tabList" :activeIndex="activeIndex" @change="change"></list-swiper>
		</view>

	</view>
</template>



<script>
	export default {
		data() {
			return {
				tabIndex:0,
				activeIndex:0,
				tabList: [],
		
			}
		},
		onLoad() {

		},
		mounted() {
			this.getLabel()
		},
		methods: {
			getLabel() {
				this.$api.get('http://mock.52react.cn/mock/5f60f3e38f2bfd46836daf23/v1.0/getTabList', {
					username: 'jack'
				}).then(res => {
					if (res.success && res.code === 200) {
						const arr = [{name:'全部',id:"0"},...res.results.data]
						this.tabList = arr
					}
					console.log(res);
				})
			},
			tab({item, index}) {
				console.log('当前点击tab',index);
				this.activeIndex = index
				
			},
			change(current){
				this.tabIndex = current
				// this.tabIndex = this.activeIndex 
				console.log('当前tabIndex',this.tabIndex);
				
			},
			
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
		}


	}
</style>
