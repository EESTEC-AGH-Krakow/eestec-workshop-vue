<template>
	<div>
		<header class="row no-gutters">
			<Header />
		</header>
		<aside>{ASIDE COMPONENT}</aside>
		<div class="container-fluid">
			<main class="row no-gutters">
				<router-view></router-view>
			</main>
		</div>
		<footer class="row no-gutters">{FOOTER COMPONENT}</footer>
	</div>
</template>

<script>
	import Header from '@/components/Header';

	export default {
		name: 'App',
		components: {
			Header
		}
	};
</script>

<style lang="scss">
	//@import "@/assets/scss/index";
</style>
