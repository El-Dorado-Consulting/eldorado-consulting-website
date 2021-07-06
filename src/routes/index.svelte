
<script context="module">
	export async function load({ fetch }) {
		const posts = await fetch('./index.json').then((r) => r.json());
		console.log("POSTS")
		return {
			props: { posts },
		};
	}
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

	let parallax;
	export let posts;
	console.log('Posts', posts)


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
		<section class="section">
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
