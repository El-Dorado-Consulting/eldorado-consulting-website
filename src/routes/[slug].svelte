<script context="module">
  export async function load({ page, fetch }) {
    const slug = page.params.slug;
    const post = await fetch(`./${slug}.json`)
        .then((r) => r.json());
    return {
      props: { post }
    };
  }
</script>

<script>
  export let post;
  let date = post.metadata.date.toUpperCase();
</script>

<svelte:head>
  <title>{post.metadata.title}</title>
</svelte:head>

<h1 class="text-3xl mb-4">{post.metadata.title}</h1>
<h2 class="text-xl mb-4">{post.metadata.subtitle}</h2>
<h2 class="text-sm mb-4">{post.metadata.date}</h2>


<div class="prose">
  {@html post.content}
</div>

<style >
</style>