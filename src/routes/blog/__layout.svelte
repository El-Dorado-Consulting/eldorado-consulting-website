<script>
  import "../../app.postcss";
  import Header from './Header.svelte'
</script>

<div class="flex items-center justify-center">
  <Header/>
  <div class="mt-32 p-2">
    <slot/>
  </div>
</div>

