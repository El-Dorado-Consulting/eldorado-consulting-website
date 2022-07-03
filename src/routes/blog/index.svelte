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

<section style="min-height:78vh" class="container flex flex-col mx-auto max-w-7xl my-12 px-4 font-source">
	<h1 class="text-4xl font-lexend font-semibold">Our Blog</h1>
	<h2 class="text-x mt-6">
		Tips tricks and insights from time spent on the floor
	</h2>
	<div class="flex flex-wrap justify-between">
		{#each posts as post, i}
			{#if !post.draft}
			<a href={"/blog/" + post.id} class="w-5/12 bg-gray-100 rounded-lg mt-6 transition-shadow hover:shadow-lg">
				<div class="h-56">
					<img class=" object-cover w-full h-full rounded-t-lg" src={post.img} alt="" />
				</div>
				<div class="p-4">
					<div class=" flex justify-between items-center">
						<h2 class="p-0 py-2 font-lexend text-xl font-semibol">
							{post.name}
						</h2>
						<p class=">{moment(post.date).format('MMMM d, YYYY')}</p>
					</div>
					<p class=0">{post.description}</p>
				</div>
			</a>
			{/if}
		{/each}
	</div>
</section>
<Footer/>
