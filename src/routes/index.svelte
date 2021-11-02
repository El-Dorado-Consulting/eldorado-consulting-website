<script context="module">
	const allPosts = import.meta.glob("./blog/*md");
	let body = [];
	for (let path in allPosts) {
		body.push(
			allPosts[path]().then(({ metadata }) => {
				return { path, metadata };
			})
		);
	}
	export const load = async () => {
		const posts = await Promise.all(body);
		return {
			props: { posts },
		};
	};
</script>

<script>
	import "../app.postcss";
	import { Parallax, ParallaxLayer } from "svelte-parallax";
	import Header from "$lib/components/Header.svelte";
	import Banner from "$lib/components/Banner.svelte";
	import About from "$lib/components/About.svelte";
	import Services from "$lib/components/Services.svelte";
	import Blog from "$lib/components/Blog.svelte";
	import Teams from "$lib/components/Teams.svelte";
	import Contact from "$lib/components/Contact.svelte";
	import Us from "$lib/components/Us.svelte";
	import Testimony from "$lib/components/Testimony.svelte";
	import Footer from "$lib/components/Footer.svelte";

	export let posts;
	let parallax;

	function scrollHandler(event) {
		console.log(event.detail.section);
		parallax.scrollTo(event.detail.section);
	}
</script>

<Header on:message={scrollHandler} />
<div class="wrapper">
	<Parallax
		bind:this={parallax}
		sections={1.6}
		config={{ stiffness: 1, damping: 1 }}
	>
		<ParallaxLayer rate={0.2} span={1.6} offset={0}>
			<section class="section bg-img bg1-lg" />
		</ParallaxLayer>
		<ParallaxLayer rate={0} span={1} offset={0}>
			<section class="section">
				<Banner on:message={scrollHandler} />
			</section>
		</ParallaxLayer>
		<ParallaxLayer rate={0} span={.6} offset={1}>
			<section class="section bg-mint">
				<About />
			</section>
		</ParallaxLayer>
	</Parallax>
	<section class="section">
		<Us />
	</section>
	<section class="section bg-white">
		<Services />
	</section>
	<Parallax
	bind:this={parallax}
	sections={1.6}
	config={{ stiffness: 1, damping: 1 }}
	>
	<ParallaxLayer rate={0.25} span={1} offset={0}>
		<section class="section bg-img bg2-lg" />
	</ParallaxLayer>
	<ParallaxLayer rate={0} span={.8} offset={0}>
		<section class="section">
			<Blog blogs={posts} on:message={scrollHandler} /> 
		</section>
	</ParallaxLayer>
	<ParallaxLayer rate={0} span={.8} offset={.9}>
		<section class="section bg-white">
			<Teams />
		</section>
	</ParallaxLayer>
</Parallax>
	<section class="section bg-lightGray">
		<Testimony />
	</section>
	<section class="section bg-white">
		<Contact />
	</section>
	<section>
		<Footer />
	</section>
</div>

<style>
	.wrapper {
		max-width: 1820px;
		margin: 0 auto;
	}
	.section {
		zoom: 30px;
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.bg-img {
		background-size: 100%;
	}
	.bg1-lg {
		background-image: url("https://i.ibb.co/gMDQkt2/bg1-lg.png");
		opacity: 60%;
	}
	.bg2-lg {
		background-image: url("https://i.ibb.co/yp1Bp1d/bg2-lg.png");
		opacity: 60%;
	}



	@media (max-width: 640px) {
		.bg1-lg {
		background-image: url("https://i.ibb.co/9HVwvtx/bg1-sm.png");
		opacity: 60%;
	}
	.bg2-lg {
		background-image: url("https://i.ibb.co/sst96xD/bg2-sm.png");
		background-position-y: 600px;
		opacity: 61%;
	}

	}
</style>
