<template>
	<swiper class="home-swiper">
		<swiper-item class="swiper-item" v-for="(item,index) in tabList" :key="index">
			<item-swiper></item-swiper>
		</swiper-item>
	</swiper>
</template>

<script>
	import itemSwiper from './item-swiper.vue'

	export default {
		components: {
			itemSwiper
		},
		props: {
			tabList: {
				type: Array,
				default () {
					return []
				}
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.home-swiper {
		height: 100%;

		.swiper-item {
			height: 100%;
			overflow: hidden;

			.list-scroll {
				height: 100%;
			}
		}
	}
</style>
