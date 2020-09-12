<template>
	<view class="icons" @click.stop="likeTap">
		<text class="iconfont icon-shoucang" :class="{active:like}"></text>
	</view>
</template>

<script>
	export default {
		props:{
			islike:{
				type:Boolean,
				default:false
			}
		},
		data() {
			return {
               like:false
			};
		},
		created() {
			this.like = this.islike
		},
		watch:{
			islike(newVal,oldVal){
				this.like = this.islike
			}
		},
		methods:{
			likeTap(){
				console.log('收藏');
				this.like  = !this.like
				this.updateLikes()
			},
			updateLikes(){
				uni.showLoading()
				setTimeout(()=>{
					uni.hideLoading()
					uni.showToast({
						title:this.like ? "收藏成功" :"取消收藏",
						icon:"none",
					})
				},400)
			}
		}
	}
</script>

<style lang="scss">
	@import '../../common/css/icons.css';

	.icons {
		position: absolute;
		right: 0;
		top: 0;
		width: 30px;
		height: 30px;
		display: flex;
		justify-content: center;
		align-items: center;

		.icon-shoucang {
			color: #999;
			font-size: 26px;
			&.active{
				color: $uni-color-error;
			}
		}
		
	}
</style>
