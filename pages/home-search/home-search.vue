<template>
	<view class="home-history">
		<navbar :isSearch="true"  v-model="value"     @inputChange="inputChange"></navbar>
		<view class="search-list" v-if="is_search">
			<view class="label-box">
				<view class="label-header">
					<text class="label-title">搜索历史</text>
					<text class="iconfont icon-ashbin"></text>
				</view>
				<view class="label-content" v-if="historyLists.length > 0">
					<view class="label-content-item" v-for="(item,index) in historyLists"   @click="openHistory(item)" :key="index">{{item.name}}历标签</view>
				</view>
				<view class="label-no-data" v-else>
					<text class="iconfont icon-cry"></text>
					<text>没有搜索历史</text>
				</view>
			</view>
		</view>
		<!-- 显示搜索结果 -->
		<view v-else>
			<list-scroll class="list-scroll">
				<uni-load-more v-if="loading" status="loading" iconType="snow"></uni-load-more>
				<view v-if="searchList.length > 0">
						<list-card v-for="(item,index) in searchList" :key="item.id" :cardItem="item"  @setHistory="setHistory"></list-card>
				</view>
		           <view v-if="searchList.length === 0 && !loading" class="no-data">
					  <text class="iconfont icon-cry"></text>没有搜索到相关历史
				   </view>
			</list-scroll>

		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				is_search: false,
				searchList: [],
				value:"" ,         //搜索关键词
				loading:false,
				// historylist:[]
			}
		},
		computed: {
			...mapState(['historyLists'])
		},
		onLoad() {
			// this.getList()
		},
		methods: {
			setHistory(){
				this.$store.dispatch('set_history', {
					name: this.value
				})
			},
			openHistory(item){
				//历史记录赋值给 input
				this.value = item.name
				_this.getList(this.value)
			},
			inputChange(value) {
				if(!value){
					clearTimeout(this.timer)
					this.mark = false
					this.searchList = []
					this.is_search = true
					return
				}
				//搜索请求
				//请求延时
				const _this = this
				console.log(value);
				if (!this.mark) {
					this.mark = true
					this.timer = setTimeout(()=>{
						this.mark = false
						this.is_search = false
						_this.getList(value)
					},1000)
					
				}
			},
			test() {
				this.$store.dispatch('set_history', {
					name: "test"
				})
			},
			getList(value) {
				//是一个请求
				this.loading = true
				this.$api.post('http://mock.52react.cn/mock/5f5b965db2af46167ac3ea3e/v1.0/swiperList', {
					name: "全部",
					page: 1,
					pageSize: 20
				}).then(res => {
					this.loading = false
					console.log(res);
					const {
						data
					} = res
					this.searchList = data
					console.log('搜索数据结果', data);
				}).catch(error=>{
					this.loading = false
					console.log(error);
				})

			}

		}
	}
</script>

<style lang="scss">
	@import '../../common/css/icons.css';

	page {
		height: 100%;
		display: flex;
		background-color: #f5f5f5;
	}

	.home-history {
		display: flex;
		flex-direction: column;
		flex: 1;
		.search-list {
			background-color: #fff;
			margin-bottom: 10px;

			.label-header {
				display: flex;
				justify-content: space-between;
				font-size: 14px;
				color: #666;
				padding: 10px 15px;
				border-bottom: 1px solid #f5f5f5;

				.icon-ashbin {
					color: $uni-color-error;
				}
			}

			.label-content {
				display: flex;
				flex-wrap: wrap;
				padding: 15px;
				padding-top: 0;

				.label-content-item {
					font-size: 14px;
					border: 1px solid #666;
					padding: 2px 10px;
					margin-top: 12px;
					margin-right: 10px;
					border-radius: 5px;
					color: #666;
				}
			}

			.label-no-data {
				height: 100px;
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100%;
				text-align: center;
				color: #666;
				font-size: 12px;
				background-color: #fff;
				border-bottom: 1px solid #f5f5f5;
				box-sizing: border-box;

				.icon-cry {
					padding-right: 4px;
				}
			}

		}
		.list-scroll{
			.no-data{
				height: 150px;
				background-color: #fff;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 18px;
				.icon-cry{
					font-size: 22px;
					padding-right: 4px;
				}
				
			}
			
		
		}

	}
</style>
