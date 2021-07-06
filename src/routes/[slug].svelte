<script context="module">
  export async function load({ page, fetch }) {
    const slug = page.params.slug;
    const post = await fetch(`./${slug}.json`).then((r) => r.json());
    return {
      props: { post },
    };
  }
</script>

<script>
  export let post;
  import Header from '$lib/components/Header.svelte'
</script>

<svelte:head>
  <title>{post.metadata.title}</title>
</svelte:head>
<Header/>
<div class="w-full mt-36 px-4">
    <div class="header">
      <h1 class="text-3xl mb-4 self-start">{post.metadata.title}</h1>
      <h2 class="text-xl mb-4">{post.metadata.subtitle}</h2>
      <h2 class="text-sm mb-4">{post.metadata.date}</h2>
    </div>
    <div class="prose header">
      {@html post.content}
    </div>
</div>

<style>
  .header {
    max-width: 635px;
    margin: 0 auto;
  }
</style>
