<template>
	<view class="navbar">
		<view class="navbar-fixed">
			<!-- 状态栏高度 -->
			<view :style="{height:statusBarHeight+'px'}"></view>
			<!-- 导航栏高度 -->
			<view class="navbar-content" :class="{search:isSearch}">
				<view class="icons-back" v-if="isSearch" @click="goBack">
					<text class="iconfont icon-fanhui"></text>
				</view>
				<!-- 搜索页 -->
				<view v-if="isSearch" class="navbar-search">
					<view class="navbar-search-icon">
						<text class="iconfont icon-search"></text>
					</view>
					<input class="navbar-searach-text"  
					value="" 
					placeholder="请输入要搜索的内容"
					@input="inputChange"
					></input>
				</view>
				<!-- 非搜索页 -->
				<view  v-else  class="navbar-search" @click="jumpToSearch">
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
		props:{
			value:{
				type:[String,Number],
				default:""
			},
			isSearch:{
				type:Boolean,
				default:false
			}
		},
		data() {
			return {
				statusBarHeight: 0,
				searchKey:""
			}
		},
		async created() {
			const info = await uni.getSystemInfo()
			this.statusBarHeight = info[1].statusBarHeight
			const screenWidth = info[1].screenWidth
			//获取胶囊位置 (h5 app mp-ali三个平台都不支持)
			// #ifndef H5 || APP-PLUS || MP-ALIPAY
			const menButtonInfo = uni.getMenuButtonBoundingClientRect()
			//胶囊底部 - 状态栏的高度  + （胶囊顶部 - 状态栏的高度） == 导航栏的高度
			const navBarHeight = menButtonInfo.bottom - info[1].statusBarHeight
			const navBarWidht = menButtonInfo.left
			// #endif

		},
		methods: {
			jumpToSearch() {
				uni.navigateTo({
					url: "../../pages/home-search/home-search"
				})
			},
			goBack(){
				uni.navigateBack()
			},
			inputChange(e){
				this.$emit('inputChange',e.detail.value)
			}
		},
		watch:{
			value(newVal){
				this.searchKey = newVal
			}
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

			.navbar-content {
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
						height: 30px;
						color: #999;
						margin-right: 10px;
					}

					.navbar-searach-text {
						width: 100%;
						font-size: 14px;
						color: #999;
					}
				}
				&.search{
					padding-left: 0;
					.icons-back{
					     margin-left: 10px;
						 margin-right: 10px;
						display: flex;
						justify-content: center;
						align-items: center;
						
						.icon-fanhui{
							font-size: 22px;
						}
					}
					.navbar-search{
							border-radius:5px;
					}
				}
			}
			

		}

	}
</style>
