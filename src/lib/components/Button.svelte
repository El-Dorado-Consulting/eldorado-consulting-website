<script lang="ts">
  export let style: 'primary' | 'secondary' = 'primary'
  export let href = '/'


</script>

{#if style === 'primary'}
<a {href} class="bg-copper-400 text-white font-medium px-3 py-1.5 rounded border-2 border-copper-400 hover:border-copper-500 hover:bg-copper-500 transition-colors">
  <slot></slot>
</a>
{/if}

{#if style === 'secondary'}
<a {href} class="bg-white font-medium px-3 py-1.5 text-copper-400 rounded border-2 border-copper-400 hover:border-copper-500 hover:text-copper-500 transition-colors">
  <slot></slot>
</a>
  
{/if}
