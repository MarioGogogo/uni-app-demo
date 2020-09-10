<template>
	<swiper class="home-swiper" :current="activeIndex" @change="change">
		<swiper-item class="swiper-item" v-for="(item,index) in tabList" :key="index">
			<item-swiper :label="item.name"></item-swiper>
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
			},
			activeIndex:{
				type:Number,
				default :0
			}
		},
		data() {
			return {
               
			};
		},
		methods:{
			change(e){
				console.log(e);
				const {current} = e.detail
				this.$emit('change',current)
			}
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
