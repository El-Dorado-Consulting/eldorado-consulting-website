<script lang="ts">
	import moment from 'moment'

	import Nav from "$lib/components/Nav.svelte";
	import Footer from '$lib/components/Footer.svelte'

	type Post = {
		id: string;
		name: string;
		date: string;
		description: string;
		draft: boolean;
		img: string;
	};

	export let posts: Post[];
</script>

<Nav />
<section style="min-height:78vh" class="container flex flex-col mx-auto max-w-6xl py-12 px-4 font-source text-center  bg-graphite-50">
	<h1 class="text-4xl font-lexend font-semibold">Our Blog</h1>
	<h2 class="text-x mt-6">
		Tips, tricks and insights from time spent on the floor
	</h2>
	<div class="flex flex-wrap justify-evenly">
		{#each posts as post, i}
			{#if !post.draft}
			<a href={"/blog/" + post.id} class="max-w-lg bg-white rounded-lg mt-10 transition-shadow hover:shadow-lg border-2 text-left">
				<div class="h-56">
					<img class=" object-cover w-full h-full rounded-t-md" src={post.img} alt="" />
				</div>
				<div class="p-4">
					<div class=" flex flex-col justify-between">
						<h2 class="p-0 py-2 font-rale text-xl font-semibold text-graphite-dark">
							{post.name}
						</h2>
						<p class="text-graphite">{moment(post.date).format("MMM D, YYYY")}</p>
					</div>
					<p class="text-graphite">{post.description}</p>
				</div>
			</a>
			{/if}
		{/each}
	</div>
</section>
<Footer/>
