<template>
	<view class="tab">
		<scroll-view class="tab-scroll" scroll-x show-scrollbar="true">
			<view class="tab-scroll-box">
				<view v-for="(item,i) in tabList" :key='i' class="tab-scroll-item" :class="{active:activeIndex === i}" @click="clickTab(item,i)">{{item.name}}</view>
			</view>
		</scroll-view>
		<view class="tab-set">
			<text class="iconfont icon-shezhi"></text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			tabList: {
				type: Array,
				default () {
					return []
				}
			},
			tabIndex: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				activeIndex: 0
			}
		},
		methods: {
			clickTab(item, i) {
				this.activeIndex = i
				this.$emit('tab', {
					data: item,
					index: i
				})
			}
		},
		watch: {
			tabIndex(newVal, oldVal) {
				this.activeIndex = newVal
				console.log(newVal, oldVal);
			}
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

					&.active {
						color: red;
					}
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

			&::after {
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
