<script>
	import { slide } from 'svelte/transition';
	let isOpen = $state(false);

	const { title, children } = $props();
</script>

<div id="accordion-collapse" data-accordion="collapse">
	<h2 id="accordion-collapse-heading" class="text-sm text-brown-300">
		<button
			type="button"
			class="flex items-center gap-3"
			data-accordion-target="#accordion-collapse-body-1"
			aria-expanded="true"
			aria-controls="accordion-collapse-body"
			onclick={() => (isOpen = !isOpen)}
		>
			<span>{title}</span>
			<svg
				data-accordion-icon
				class="w-3 h-3 rotate-180 shrink-0"
				aria-hidden={!isOpen}
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 10 6"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M9 5 5 1 1 5"
				/>
			</svg>
		</button>
	</h2>
	{#if isOpen}
		<div transition:slide id="accordion-collapse-body" aria-labelledby="accordion-collapse-heading">
			{@render children()}
		</div>
	{/if}
</div>
