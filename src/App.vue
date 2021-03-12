<template>
	<div>
		<header class="row no-gutters">
			<Header />
		</header>
		<aside>{ASIDE COMPONENT}</aside>
		<main class="container-fluid">
			<router-view></router-view>
		</main>
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
