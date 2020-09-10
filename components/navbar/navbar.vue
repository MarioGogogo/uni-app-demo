<template>
	<view class="navbar">
		<view class="navbar-fixed">
			<view class="navbar-search">
				<view class="navbar-search-icon">

				</view>
				<view class="navbar-searach-text">
					请输入要搜索的词
				</view>
			</view>
		</view>
		<view style="height:45px"></view>
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

<style lang="scss">
	.navbar {
		.navbar-fixed {
			position: fixed;
			z-index: 99;
			left: 0;
			top: 0px;
			width: 100%;
			height: 45px;
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
					width: 10px;
					height: 10px;
					border: 1px solid red;
					margin-right: 10px;
				}

				.navbar-searach-text {
					font-size: 12px;
					color: #999;
				}
			}
		}

	}
</style>
