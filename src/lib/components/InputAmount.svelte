<script>
	let { coffee = {}, label = '' } = $props();

	const STEP_VALUE = 50;
</script>

<label for="counter-input" class="block mb-1 text-lg font-medium">{label}</label>
<div class="relative flex items-center">
	<button
		onclick={coffee.decrement(STEP_VALUE)}
		type="button"
		id="decrement-button"
		data-input-counter-decrement="counter-input"
		class="flex-shrink-0 bg-gray-50 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none"
	>
		<svg
			class="w-4 h-4"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 18 2"
		>
			<path
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M1 1h16"
			/>
		</svg>
	</button>
	<input
		type="number"
		id="counter-input"
		data-input-counter
		class="flex-shrink-0 border-0 bg-transparent text-xl font-normal focus:outline-none focus:ring-0 max-w-[5rem] text-center"
		placeholder=""
		bind:value={coffee.amount}
		onchange={(a) => console.log(a)}
		required
	/>
	<span class="mr-2">ml</span>
	<button
		onclick={coffee.increment(STEP_VALUE)}
		type="button"
		id="increment-button"
		data-input-counter-increment="counter-input"
		class="flex-shrink-0 bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 focus:ring-2 focus:outline-none"
	>
		<svg
			class="w-4 h-4"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 18 18"
		>
			<path
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M9 1v16M1 9h16"
			/>
		</svg>
	</button>
</div>

<style>
	/*Hide Arrows From Input Number *
/* Chrome, Safari, Edge, Opera */
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	input[type='number'] {
		-moz-appearance: textfield;
	}
</style>
