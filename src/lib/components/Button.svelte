<script lang="ts">
  export let style: 'primary' | 'secondary' = 'primary'
  export let href = '/'


</script>

{#if style === 'primary'}
<a {href} class="bg-mustard border-mustard text-white font-medium px-3 py-1.5 rounded border-2 hover:bg-mustard-dark hover:border-mustard-dark transition-colors">
  <slot></slot>
</a>
{/if}

{#if style === 'secondary'}
<a {href} class="bg-white font-medium px-3 py-1.5 text-mustard rounded border-2 border-mustard hover:border-copper-500 hover:text-copper-500 transition-colors">
  <slot></slot>
</a>
  
{/if}
