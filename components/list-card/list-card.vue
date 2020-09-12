<template>
	<view @click="openDetail">
		<!-- 基础卡片 -->
		<view v-if="'base' === cardItem.type" class="listcard">
			<view class="listcard-image">
				<image src="../../static/logo.png" alt="tup" mode="aspecfFill" />
			</view>
			<view class="listcard-content">
				<view class="listcard-content-title">
					<text>
						{{cardItem.title}}
					</text>
					<likes :islike="cardItem.like"></likes>
				</view>
				<view class="listcard-content-des">
					<view class="listcard-content-des-label">
						<view class="listcard-content-des-label-item">
							{{cardItem.label}}
						</view>
					</view>
					<view class="listcard-content-des-borwse">
						预览次数:{{cardItem.like}}次
					</view>
				</view>
			</view>
		</view>
		<!-- 多图卡片 -->
		<view v-if="cardItem.type === 'column'" class="listcard mode-column">
			<view class="listcard-content">
				<view class="listcard-content-title">
					<text>
						{{cardItem.title}}
					</text>
						<likes :islike="cardItem.like"></likes>
				</view>
				<view class="listcard-image">
					<view v-for="item in 3" :key='item' class="listcard-image-item">
						<image src="../../static/logo.png" alt="tup" />
					</view>
				</view>
				<view class="listcard-content-des">
					<view class="listcard-content-des-label">
						<view class="listcard-content-des-label-item">
							{{cardItem.label}}
						</view>
					</view>
					<view class="listcard-content-des-borwse">
						预览次数:{{cardItem.borwser}}次
					</view>
				</view>
			</view>
		</view>
		<!-- 大图模式 -->
		<view v-if="cardItem.type === 'bigImage'" class="listcard mode-bigImage">
			<view class="listcard-image">
				<image src="../../static/logo.png" alt="tup" />
			</view>
			<view class="listcard-content">

				<view class="listcard-content-title">
					<text>
						{{cardItem.title}}
					</text>
						<likes :islike="cardItem.like"></likes>
				</view>
				<view class="listcard-content-des">
					<view class="listcard-content-des-label">
						<view class="listcard-content-des-label-item">
							{{cardItem.label}}
						</view>
					</view>
					<view class="listcard-content-des-borwse">
						预览次数:{{cardItem.like}}次
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			cardItem: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		data() {
			return {

			};
		},
		methods: {
			openDetail() {
				console.log('打开详情');
			}
		}
	}
</script>

<style lang="scss">
	.listcard {
		display: flex;
		padding: 10px;
		margin: 10px;
		border-radius: 5px;
		box-shadow: 0 0 5px 1px rgba($color: #000000, $alpha: 0.1);
		box-sizing: border-box;

		.listcard-image {
			width: 60px;
			height: 60px;
			border-radius: 5px;
			overflow: hidden;
			flex-shrink: 0; //图片不会被挤压

			image {
				width: 100%;
				height: 100px;
			}
		}

		.listcard-content {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding-left: 10px;
			width: 100%;

			.listcard-content-title {
				position: relative;
				font-size: 14px;
				padding-right: 30px;
				color: #333;
				font-weight: 400;
				line-height: 1.2;
				display: flex;

				text {
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2; //溢出隐藏
					-webkit-box-orient: vertical; //溢出隐藏
				}

			}

			.listcard-content-des {
				display: flex;
				justify-content: space-between;
				font-size: 12px;

				.listcard-content-des-label {
					display: flex;

					.listcard-content-des-label-item {
						padding: 0 5px;
						margin-right: 5px;
						border-radius: 15px;
						border: 1px solid $uni-color-error;
						color: $uni-color-error;
						box-shadow: 0 0 5px 1px rgba($color: #000000, $alpha: 0.1);
					}
				}

				.listcard-content-des-borwse {
					color: #999;
					line-height: 1.5;
				}
			}

		}

		&.mode-column {
			.listcard-content {
				width: 100%;
				padding-left: 0;

				.listcard-image {
					width: 100%;
					display: flex;
					margin-top: 10px;
					height: 70px;

					.listcard-image-item {
						margin-left: 10px;
						width: 100%;
						border-radius: 5px;
						overflow: hidden;

						&:first-child {
							margin-left: 0;
						}

						image {
							width: 100%;
							height: 100%;
						}
					}
				}

				.listcard-content-des {
					margin-top: 10px;
				}
			}
		}

		&.mode-bigImage {
			flex-direction: column;

			.listcard-image {
				width: 100%;
				height: 100px;
			}

			.listcard-content {
				margin-top: 10px;
				padding-left: 0;

				.listcard-content-des {
					display: flex;
					align-items: center;
					margin-top: 10px;
				}
			}
		}
	}
</style>
