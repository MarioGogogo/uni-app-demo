<template>
	<swiper class="home-swiper" :current="activeIndex" @change="change" >
		<swiper-item class="swiper-item" v-for="(item,index) in tabList" :key="index">
			<item-swiper :list="listCatchData[index]" :load="loadPage[index]" @loadmore="loadmore"  ></item-swiper>
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
			   listCatchData:[],
			   loadPage:[],
			   pageSize:10
			   
			};
		},
		methods:{
			change(e){
				console.log(e);
				const {current} = e.detail
			  
				this.$emit('change',current)
				//TODO:判断当前数据内容不存在则请求
				if(!this.listCatchData[current] || this.listCatchData[current].length === 0 ){
					//请求当前下标的列表
					this.getList(current)
				}
				
			},
			loadmore(){
				//没有更多数据了就return
				if(this.loadPage[this.activeIndex].loading === "noMore") return
				console.log('加载更多',this.loadPage[this.activeIndex].page);
				this.loadPage[this.activeIndex].page++
				this.getList(this.activeIndex)
			},
			getList(current){
				if(!this.loadPage[current]){
					this.loadPage[current] ={
						page:1,
						loading:"loading"
					}
				}
				//是一个请求
			   	const arg = this.tabList[current].name
				this.$api.post('http://mock.52react.cn/mock/5f60f3e38f2bfd46836daf23/v1.0/swiperList',{
					name:arg,
					page:this.loadPage[current].page,
					pageSize:this.pageSize
				}).then(res=>{
					console.log(res);
					const {data} = res
					console.log('看看数据',this.listCatchData);
					if(data.length === 0){
					    console.log('没有数据了');
						let oldLoad = {}
						oldLoad.loading = "noMore"
						oldLoad.page = this.loadPage[current].page
						this.$set(this.loadPage,current,oldLoad)
						//如果页面没有生效  强制生效
						this.$forceUpdate()
						return
					}
					
					//请求数据都缓存给她
					this.list = data;
					let oldList = this.listCatchData[current] || []
					oldList.push(...data)
					//vue 渲染机制认为 你数组是引用类型不会发生变化 不触发
					// this.listCatchData[current] = data
					//通知数据发生变化  达到数据懒加载
					this.$set(this.listCatchData,current,oldList)
				})
				
			}
		},
		watch:{
			tabList(newVal){
				//初始化执行一次发生数据有变化则请求
				if(newVal.length === 0) return
					//请求当前下标的列表
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
