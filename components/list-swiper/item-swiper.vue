<template>
	<list-scroll class="list-scroll">
		<list-card :mode="'column'" :label="label"></list-card>
		<list-card :mode="'base'"></list-card>
		<list-card :mode="'bigImage'"></list-card>
		<list-card :mode="'column'"></list-card>
		<list-card :mode="'base'"></list-card>
		<list-card :mode="'bigImage'"></list-card>
		<list-card :mode="'column'"></list-card>
		<list-card :mode="'base'"></list-card>
		<list-card :mode="'bigImage'"></list-card>
		<list-card :mode="'column'"></list-card>
		<list-card :mode="'base'"></list-card>
		<list-card :mode="'bigImage'"></list-card>
	</list-scroll>

</template>

<script>
	export default {
		props:{
			label:{
				type:String,
				default:"标签"
			}
		}
	}
</script>

<style lang="scss">
	.list-scroll{
		height: 100%;
	}
</style>
