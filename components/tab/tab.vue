<template>
	<view class="tab">
		<scroll-view class="tab-scroll" scroll-x>
			<view class="tab-scroll-box">
				<view v-for="item in tabList" :key='item.name' class="tab-scroll-item">{{item.name}}</view>
			</view>

		</scroll-view>
		<view class="tab-set">
			<text class="iconfont icon-shezhi"></text>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			tabList:{
				type:Array,
				default(){
					return []
				}
			}
		},
		data() {
			return {
				list: []
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	@import '../../common/css/icons.css';
	.tab {
		display: flex;
		width: 100%;
		border-bottom: 1px solid #f5f5f5;
		box-sizing: border-box;
		.tab-scroll {
			flex: 1;
			overflow: hidden;
			.tab-scroll-box {
				display: flex;
				flex-direction: row;
				height: 45px;
				align-items: center;
				flex-wrap: nowrap;
				box-sizing: border-box;

				.tab-scroll-item {
					font-size: 14px;
					flex-shrink: 0; //不然元素挤压
					padding: 0 13px;
				}
			}
		}
		.tab-set {
			position: relative;
			width: 45px;
			display: flex;
			justify-content: center;
			align-items: center;
			.icon-shezhi {
				font-size: 20px;
			}
			&::after{
				content: '';
				position: absolute;
				top: 14px;
				bottom: 14px;
				left: 4px;
				width: 1px;
				background-color: #999;
				
			}
		}
		

	}
</style>
