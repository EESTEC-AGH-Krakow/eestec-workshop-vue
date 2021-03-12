<template>
	<div class="col-12">
		<div class="row">
			<div v-if="title" class="col-12 col-sm-10 col-md-8 col-lg-6 mx-auto my-5">
				<h2 class="text-center">{{ title }}</h2>
			</div>
			<div class="w-100"></div>
			<div class="col-12 col-sm-10 col-md-8 col-lg-6 mx-auto">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Section',
		props: ['title']
	};
</script>

<style lang="scss" scoped></style>
