<script>
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
	import '../app.css';
</script>

{@render children?.()}
