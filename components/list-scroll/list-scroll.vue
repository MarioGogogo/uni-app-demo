<template>
	<view class="scroll">
		<scroll-view scroll-y class="scroll-list">
			<!-- 滚动内容建议用父元素包裹📦 -->
			<view>
			   <slot></slot>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.scroll {
		flex: 1;
		overflow: hidden;
		box-sizing: border-box;

		.scroll-list {
			height: 100%;
			display: flex;
			flex-direction: column;
		}
	}
</style>
