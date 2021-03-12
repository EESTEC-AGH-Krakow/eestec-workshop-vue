<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light w-100">
		<a class="navbar-brand" href="#">ProductX</a>
		<button class="navbar-toggler" type="button" @click="toggleCollapse()">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div ref="collapse" class="collapse navbar-collapse">
			<Navigation :routes="routes" />
			<form class="form-inline my-2 my-lg-0">
				<input aria-label="Search" class="form-control mr-sm-2" placeholder="Search" type="search" />
				<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
			</form>
		</div>
	</nav>
</template>

<script>
	import Navigation from '@/components/Navigation';

	export default {
		name: 'Header',
		components: {
			Navigation
		},
		data() {
			return {
				routes: []
			};
		},
		methods: {
			toggleCollapse() {
				this.$refs.collapse.classList.toggle('show');
			}
		},
		mounted() {
			this.routes = this.$router.matcher.getRoutes();
		}
	};
</script>

<style lang="scss" scoped></style>
