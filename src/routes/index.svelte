
<script context="module">

	import { base } from "$app/paths";
	export async function load({ fetch }) {
		const posts = await fetch(`${base}/index.json`).then((r) => r.json());
		return {
			props: { posts },
		};
	}
</script>

<script>
	import "../app.postcss";
	import { Parallax, ParallaxLayer } from "svelte-parallax";
	import Header from "../components/Header.svelte";
	import Banner from "../components/Banner.svelte";
	import About from "../components/About.svelte";
	import Services from "../components/Services.svelte";
	import Blog from "../components/Blog.svelte";
	import Teams from "../components/Teams.svelte";
	import Contact from "../components/Contact.svelte";

	let parallax;
	export let posts;


	function scrollHandler (event) {
		console.log(event.detail.section)
		parallax.scrollTo(event.detail.section)
	}
	
</script>


<Header on:message={scrollHandler} />
<div class="wrapper">
<Parallax
	bind:this={parallax}
	sections={6}
	config={{ stiffness: 1, damping: 1 }}
>
	<ParallaxLayer rate={0.2} span={1.5} offset={0}>
		<section class="section bg-img bg1-lg" />
	</ParallaxLayer>
	<ParallaxLayer rate={0} span={1} offset={0}>
		<section class="section">
			<Banner on:message={scrollHandler} />
		</section>
	</ParallaxLayer>
	<ParallaxLayer rate={0} span={1} offset={1}>
		<section class="section bg-mint">
			<About />
		</section>
	</ParallaxLayer>
	<ParallaxLayer rate={0} span={1} offset={2}>
		<section class="section bg-white">
			<Services />
		</section>
	</ParallaxLayer>
	<ParallaxLayer rate={0.2} span={1} offset={3}>
		<section class="section bg2-lg" />
	</ParallaxLayer>
	<ParallaxLayer rate={0} span={1} offset={3}>
		<section class="section bg-gray-100">
			<Blog blogs={posts} />
		</section>
	</ParallaxLayer>
	<ParallaxLayer rate={0} span={1} offset={4}>
		<section  class="section bg-white">
			<Teams />
		</section>
	</ParallaxLayer>
	<ParallaxLayer rate={0} span={1} offset={5}>
		<section class="section bg-white">
			<Contact />
		</section>
	</ParallaxLayer>
</Parallax>
</div>

<style>

	.wrapper{
		max-width: 1536px;
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

</style>
