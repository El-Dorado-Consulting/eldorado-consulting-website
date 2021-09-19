<script>
  import "../../app.postcss";
  import Header from "$lib/components/Header.svelte";
</script>

<Header />
<div class="w-full ">
  <div class="prose mx-auto mt-32 ">
    <slot />
  </div>
</div>

<style>
</style>
