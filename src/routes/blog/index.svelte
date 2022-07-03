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

<section style="min-height:78vh" class="container flex flex-col mx-auto max-w-3xl my-12 px-4">
	<h1 class="text-4xl font-lexend font-semibold">fragile blog</h1>
	<h2 class="text-xl text-purple-400 mt-6">
		Ideas on how to to keep hardware-as-as-service moving forward
	</h2>
	<div class="flex flex-col">
		{#each posts as post, i}
			{#if !post.draft}
			<a href={"/blog/" + post.id} class="w-full bg-gray-100 rounded-lg mt-6 transition-shadow hover:shadow-lg">
				<div class="h-56">
					<img class=" object-cover w-full h-full rounded-t-lg" src={post.img} alt="" />
				</div>
				<div class="p-4">
					<div class=" flex justify-between items-center">
						<h2 class="p-0 py-2 font-lexend text-xl font-semibold text-purple-900">
							{post.name}
						</h2>
						<p class="text-purple-900">{moment(post.date).format('MMMM d, YYYY')}</p>
					</div>
					<p class="text-purple-400">{post.description}</p>
				</div>
			</a>
			{/if}
		{/each}
	</div>
</section>
<Footer/>
