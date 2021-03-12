<template>
	<div class="row no-gutters">
		<div class="col-12">
			<carousel v-bind="carouselOptions">
				<slide
					v-for="(slide, index) in carouselSlides"
					:key="index"
					:style="{ backgroundImage: `url('${slide.image}')` }"
					class="d-flex position-relative slide"
				>
					<div class="overlay position-absolute"></div>
					<h2 class="position-absolute text-white slide-text display-2">{{ slide.title }}</h2>
				</slide>
			</carousel>
		</div>
		<Section title="They already trusted us">
			<div v-for="(media, index) in mediaObjects" :key="index" class="row">
				<div class="w-100"></div>
				<div class="col-12 my-4">
					<div :class="{ 'flex-row-reverse': isOdd(index) }" class="media">
						<img :class="isOdd(index) ? 'ml-3' : 'mr-3'" :src="media.image" alt="avatar" class="align-self-center" />
						<div :class="{ 'text-right': isOdd(index) }" class="media-body">
							<h4 class="mt-0 mb-3">{{ media.name }}</h4>
							<p>
								{{ media.description }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</Section>
		<Section title="Why is ProductX awesome?">
			<div class="row">
				<div class="col-12">
					<article class="text-justify">
						Eheu. Vita, abaculus, et uria. Assimilatios mori in mare! Historias mori in berolinum! Fatalis, raptus
						eleatess diligenter locus de superbus, ferox turpis. Aonidess favere in aboa! Cur verpa credere? Lumens
						cantare! Lamias manducare, tanquam brevis aonides. Historias observare in peritus cella! Accelerare nunquam
						ducunt ad dexter idoleum. Mirabilis adelphiss ducunt ad lactea. A falsis, hilotae rusticus indictio. Byssus
						de flavum nuptia, amor castor! Mortem de varius impositio, gratia vortex! Nunquam attrahendam urbs. Noster
						poetas ducunt ad solitudo. Eheu. Vita, abaculus, et uria. Assimilatios mori in mare! Historias mori in
						berolinum! Fatalis, raptus eleatess diligenter locus de superbus, ferox turpis. Aonidess favere in aboa! Cur
						verpa credere? Lumens cantare! Lamias manducare, tanquam brevis aonides. Historias observare in peritus
						cella! Accelerare nunquam ducunt ad dexter idoleum. Mirabilis adelphiss ducunt ad lactea. A falsis, hilotae
						rusticus indictio. Byssus de flavum nuptia, amor castor! Mortem de varius impositio, gratia vortex! Nunquam
						attrahendam urbs. Noster poetas ducunt ad solitudo. Eheu. Vita, abaculus, et uria. Assimilatios mori in
						mare! Historias mori in berolinum! Fatalis, raptus eleatess diligenter locus de superbus, ferox turpis.
						Aonidess favere in aboa! Cur verpa credere? Lumens cantare! Lamias manducare, tanquam brevis aonides.
						Historias observare in peritus cella! Accelerare nunquam ducunt ad dexter idoleum. Mirabilis adelphiss
						ducunt ad lactea. A falsis, hilotae rusticus indictio. Byssus de flavum nuptia, amor castor! Mortem de
						varius impositio, gratia vortex! Nunquam attrahendam urbs. Noster poetas ducunt ad solitudo. Eheu. Vita,
						abaculus, et uria. Assimilatios mori in mare! Historias mori in berolinum! Fatalis, raptus eleatess
						diligenter locus de superbus, ferox turpis. Aonidess favere in aboa! Cur verpa credere? Lumens cantare!
						Lamias manducare, tanquam brevis aonides. Historias observare in peritus cella! Accelerare nunquam ducunt ad
						dexter idoleum. Mirabilis adelphiss ducunt ad lactea. A falsis, hilotae rusticus indictio. Byssus de flavum
						nuptia, amor castor! Mortem de varius impositio, gratia vortex! Nunquam attrahendam urbs. Noster poetas
						ducunt ad solitudo.
					</article>
				</div>
			</div>
		</Section>
		<div class="col-12"></div>
	</div>
</template>

<script>
	import Section from '@/components/home/Section';
	import { Carousel, Slide } from 'vue-carousel';

	export default {
		name: 'Home',
		components: {
			Carousel,
			Slide,
			Section
		},
		data() {
			return {
				carouselOptions: {
					autoplay: true,
					perPage: 1,
					loop: true,
					autoplayTimeout: 3500
				},
				carouselSlides: [
					{
						image: 'https://www.placecage.com/c/1024/768',
						title: 'I am Nicolas Cage'
					},
					{
						image: 'https://www.placecage.com/g/1024/768',
						title: 'Founder of ProductX'
					},
					{
						image: 'https://www.placecage.com/1024/768',
						title: 'Welcome'
					}
				],
				mediaObjects: [
					{
						image: 'https://www.placecage.com/c/100/100',
						name: 'Nicolas',
						description:
							'Pol. Plasmators volare in tolosa! Pol, a bene nix, acipenser! Cur nomen cadunt? Est regius accola, cesaris. Fortis burguss ducunt ad candidatus. Peregrinatione saepe ducunt ad peritus boreas. Heu. Hercle, fiscina barbatus!. Lacteas sunt vigils de fortis cotta. Dexter domina interdum tractares hippotoxota est. Onuss favere, tanquam fortis fluctus.'
					},
					{
						image: 'https://www.placecage.com/g/100/100',
						name: 'Cage',
						description:
							'Pol. Plasmators volare in tolosa! Pol, a bene nix, acipenser! Cur nomen cadunt? Est regius accola, cesaris. Fortis burguss ducunt ad candidatus. Peregrinatione saepe ducunt ad peritus boreas. Heu. Hercle, fiscina barbatus!. '
					},
					{
						image: 'https://www.placecage.com/100/100',
						name: 'Madonna',
						description:
							"The cosmonaut dies death like a biological emitter. Extraterrestrial, vital hur'qs pedantically love a mysterious, real spacecraft. Coordinates at the cabin was the vision of energy, evacuated to a conscious proton. Wobble, scotty. Spacecrafts are the particles of the ancient beauty. Oddly lower a creature."
					},
					{
						image: 'https://www.placecage.com/c/100/100',
						name: 'Britney',
						description:
							'When the skiff sings for fort charles, all seas fear stormy, scrawny hornpipes. Damn yer comrade, feed the fish. Hunger ho! burn to be robed. Parrots are the jacks of the scrawny madness. Riddle is an addled seashell. Winds sing with greed! Lively, big cannibals greedily fire a wet, clear comrade.'
					}
				]
			};
		},
		methods: {
			isOdd(index) {
				return index % 2 !== 0;
			}
		}
	};
</script>

<style lang="scss" scoped>
	.slide {
		height: 80vh;
		backgrond: center no-repeat;
		background-size: cover;

		.overlay {
			background-color: transparentize($gray-800, 0.4);
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			z-index: 3;
		}

		.slide-text {
			z-index: 4;
			left: 50%;
			top: 75%;
			transform: translate(-50%, -50%);
			width: 100%;
			text-align: center;
		}
	}

	.media {
		img {
			border-radius: 50%;
		}
	}
</style>
