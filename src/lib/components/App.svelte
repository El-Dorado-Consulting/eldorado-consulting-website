<script>
  import { Parallax, ParallaxLayer } from 'svelte-parallax';
	import Header from './Header.svelte'
	import Banner from './Banner.svelte'
	import About from './About.svelte'
	import Services from './Services.svelte'
	import Blog from './Blog.svelte'
	import Teams from './Teams.svelte'
	import Contact from './Contact.svelte'


	let parallax
</script>
<Header/>
<Parallax bind:this={parallax} sections={6} config={{stiffness: 1, damping: 1}}>
	<ParallaxLayer rate={.2} span={1.5} offset={0}>
		<section class="section bg-img bg1-lg"></section>
	</ParallaxLayer>
	<ParallaxLayer rate={0} span={1} offset={0}>
		<section class="section">
			<Banner/>
		</section>
	</ParallaxLayer>
	<ParallaxLayer rate={.2} span={1.5} offset={1.8}>
		<section class="section bg-img bg2-lg"></section>
	</ParallaxLayer>
	<ParallaxLayer rate={0} span={1} offset={1}  style={"background-color: var(--secondary);"}>
		<section class="section">
			<About/>
		</section>
		</ParallaxLayer>
		<ParallaxLayer rate={0} offset={2} span={1}>
			<section class="section">
				<Services/>
			</section>
		</ParallaxLayer>
		<ParallaxLayer rate={0} offset={3} span={1}>
			<section class="section">
				<Blog/>
			</section>
		</ParallaxLayer>
		<ParallaxLayer rate={0} offset={4} span={1}>
			<section class="section">
				<Teams/>
			</section>
		</ParallaxLayer>
		<ParallaxLayer rate={0} offset={5} span={1}>
			<section class="section">
				<Contact/>
			</section>
		</ParallaxLayer>
</Parallax>


<style>
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
	background-image: url('../bg1-lg.png');
}

.bg2-lg {
	background-image: url('../bg2-lg.png');
}


</style>