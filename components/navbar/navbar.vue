<template>
	<view class="navbar">
		<view class="navbar-fixed">
			<!-- 状态栏高度 -->
			<view :style="{height:statusBarHeight+'px'}"></view>
			<!-- 导航栏高度 -->
			<view class="navbar-content">
				<view class="navbar-search">
					<view class="navbar-search-icon">
				          <text class="iconfont icon-search"></text>
					</view>
					<view class="navbar-searach-text">
						请输入要搜索的词
					</view>
				</view>
			</view>
		</view>
	  <view :style="{height:(statusBarHeight+45)+'px'}"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
		methods: {

		}
	}
</script>

<style lang="scss">
	@import '../../common/css/icons.css';
	.navbar {
		.navbar-fixed {
			position: fixed;
			z-index: 99;
			left: 0;
			top: 0;
			width: 100%;
			background-color: #007aff;
            .navbar-content{
				height: 45px;
				width: 100%;
				background-color: $uni-bg--navbar-color;
				color: $uni-text-color-inverse;
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 0 15px;
				 box-sizing: border-box; //这个样式很重要 右边不会跑出边界
				.navbar-search {
					width: 100%;
					height: 30px;
					background-color: #fff;
					display: flex;
					align-items: center;
					border-radius: 30px;
					padding: 0 15px;
				
					.navbar-search-icon {
						color: #999;
						margin-right: 10px;
					}
			
					.navbar-searach-text {
						font-size: 12px;
						color: #999;
					}
				}
			}
			
		}

	}
</style>
