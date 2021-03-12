<template>
	<ul class="navbar-nav mr-auto">
		<li v-for="(route, index) in routes" :key="index" class="nav-item">
			<router-link :class="{ active: isActive(route.name) }" :to="{ name: route.name }" class="nav-link"
				>{{ route.name }} <span v-if="isActive(route.name)" class="sr-only">(current)</span></router-link
			>
		</li>
	</ul>
</template>

<script>
	export default {
		name: 'Navigation',
		props: ['routes'],
		computed: {
			isActive() {
				return name => this.$route.name === name;
			}
		}
	};
</script>

<style lang="scss" scoped></style>
