<script>
	import "../app.postcss"
  import { Parallax, ParallaxLayer } from 'svelte-parallax';
	import Header from '../components/Header.svelte'
	import Banner from '../components/Banner.svelte'
	import About from '../components/About.svelte'
	import Services from '../components/Services.svelte'
	import Blog from '../components/Blog.svelte'
	import Teams from '../components/Teams.svelte'
	import Contact from '../components/Contact.svelte'
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
  <ParallaxLayer rate={0} span={1} offset={1}>
		<section class="section bg-mint">
      <About/>
		</section>
	</ParallaxLayer>
  <ParallaxLayer rate={0} span={1} offset={2}>
		<section class="section bg-white">
      <Services/>
		</section>
	</ParallaxLayer>
  <ParallaxLayer rate={.2} span={1} offset={3}>
		<section class="section bg2-lg">
		</section>
	</ParallaxLayer>
  <ParallaxLayer rate={0} span={1} offset={3}>
		<section class="section">
      <Blog/>
		</section>
	</ParallaxLayer>
  <ParallaxLayer rate={0} span={1} offset={4}>
		<section class="section bg-white">
      <Teams/>
		</section>
	</ParallaxLayer>
  <ParallaxLayer rate={0} span={1} offset={5}>
		<section class="section bg-white">
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
	background-image: url('./bg1-lg.png');
}

.bg2-lg {
	background-image: url('./bg2-lg.png');
}


</style>