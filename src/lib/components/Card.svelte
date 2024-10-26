<script>
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<div class="text-brown-50 bg-brown-900 border p-6 rounded-lg shadow">
	{@render children?.()}
</div>
