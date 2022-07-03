hello world
<script lang="ts">
	import moment from 'moment'
	import { marked } from 'marked';


	import Nav from "$lib/components/Nav.svelte";
	import Button from "$lib/components/Button.svelte";
	
	export let mdString: string
	export let image: string
	export let title: string
	export let date: string

	const html = marked.parse(mdString)

</script>


<Nav/>

<section class="container flex flex-col mx-auto max-w-3xl justify-center px-4 mt-16">
	<div class="h-56">
		<img class=" object-cover w-full h-full " src={image} alt="" />
	</div>
	<p class="mt-6 text-purple-900 text-lg">{moment(date).format('MMMM d, YYYY')}</p>
	<h1 class="font-lexend font-semibold mt-2">{title}</h1>
	<!-- https://tailwindcss.com/docs/typography-plugin for more markdown utility css -->
	<div class="mt-4 prose prose-purple-400 prose-strong:text-purple-400 prose-a:text-copper-400 prose-h2:text-purple-400 prose-p:text-purple-400 prose-h3:text-purple-900">
		{@html html}
	</div>
<div class="my-8">
	<Button style="secondary" href='/blog'> &lt;- Go back</Button>
</div>
</section>







