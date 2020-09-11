<template>
	<swiper class="home-swiper" :current="activeIndex" @change="change">
		<swiper-item class="swiper-item" v-for="(item,index) in tabList" :key="index">
			<item-swiper :list="listCatchData[index]"></item-swiper>
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
               list:[],
			   listCatchData:[]
			   
			};
		},
		methods:{
			change(e){
				console.log(e);
				const {current} = e.detail
			    //请求当前下标的列表
				this.getList(current)
				this.$emit('change',current)
			},
			getList(current){
				//是一个请求
			   	const arg = this.tabList[current].name
				this.$api.post('http://mock.52react.cn/mock/5f5b965db2af46167ac3ea3e/v1.0/swiperList',{
					name:arg
				}).then(res=>{
					console.log(res);
					const {data} = res
					console.log('请求数据',data);
					//请求数据都缓存给她
					this.list = data;
					//vue 渲染机制认为 你数组是引用类型不会发生变化 不触发
					// this.listCatchData[current] = data
					//通知数据发生变化  达到数据懒加载
					this.$set(this.listCatchData,current,data)
				})
				
			}
		},
		watch:{
			tabList(newVal){
				if(newVal.length === 0) return
				//否则就请求
				this.getList(this.activeIndex)
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
