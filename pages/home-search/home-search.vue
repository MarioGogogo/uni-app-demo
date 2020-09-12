<template>
	<view class="home-history">
		<navbar :isSearch="true" @inputChange="inputChange"></navbar>
		<view class="search-list">
			 <view class="label-box">
				 <view class="label-header">
					 <text class="label-title">搜索历史</text>
					 <text class="iconfont icon-ashbin"></text>
				 </view>
				 <view class="label-content" v-if="historylist.length > 0">
					 <view class="label-content-item" v-for="item in historylist">{{item}}历标签</view>
				 </view>
				 <view class="label-no-data" v-else>
					 <text class="iconfont icon-cry"></text>
					  <text>没有搜索历史</text>
				 </view>
			 </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				historylist:[]
			}
		},
		methods: {
			inputChange(val){
				//搜索请求
			  console.log(val);
			},
			
		}
	}
</script>

<style lang="scss">
  @import '../../common/css/icons.css';
  page{
	  height: 100%;
	  display: flex;
	  background-color: #f5f5f5;
  }
  .home-history{
	  display: flex;
	  flex-direction: column;
	  flex:1;
	  border:1px solid red;
	  .search-list{
		  background-color:#fff;
		  margin-bottom: 10px;
		  .label-header{
			  display: flex;
			  justify-content: space-between;
			  font-size: 14px;
			  color: #666;
			  padding: 10px 15px;
			  border-bottom: 1px solid #f5f5f5;
			  .icon-ashbin{
				  color: $uni-color-error;
			  }
		  }
		  .label-content{
			  display: flex;
			  flex-wrap: wrap;
			  padding: 15px;
			  padding-top: 0;
			  .label-content-item{
				  font-size: 14px;
				  border:1px solid #666;
				  padding: 2px 10px;
				  margin-top: 12px;
				  margin-right: 10px;
				  border-radius: 5px;
				  color: #666;
			  }
		  }
		  .label-no-data{
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
			  .icon-cry{
				  padding-right: 4px;
			  }
		  }
		  
	  }
	  
  }
  
</style>
