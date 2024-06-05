<script>
	let time = $state(0);
	let second = $derived(time % 60);
	let minute = $derived(Math.floor(time / 60));
	let isCounting = $state(false);

	let stop = $state(() => {});

	function start() {
		const interval = setInterval(() => (time += 1), 1000);
		isCounting = true;

		stop = () => {
			clearInterval(interval);
			isCounting = false;
		};
	}

	const onClick = () => {
		if (isCounting) {
			stop();
		} else {
			start();
		}
	};
</script>

<div class="flex items-start justify-center gap-4">
	<div>
		<div class="py-2 px-2 overflow-hidden">
			<h3 class="text-brown-600 text-3xl text-center">⏲️</h3>
		</div>
	</div>

	<div class="w-16">
		<div class="bg-brown-600 py-2 px-2 rounded-lg overflow-hidden">
			<h3 class="font-semibold text-2xl text-white text-center">
				{minute}
			</h3>
		</div>
	</div>

	<div>
		<div class="rounded-lg overflow-hidden">
			<h3 class="text-brown-600 text-2xl text-center">:</h3>
		</div>
	</div>

	<div class="w-16">
		<div class=" bg-brown-600 py-2 px-2 rounded-lg overflow-hidden">
			<h3 class="font-semibold text-2xl text-white text-center">
				{second}
			</h3>
		</div>
	</div>

	<div class="w-16">
		<div class="py-2 px-2 overflow-hidden">
			<button
				onclick={onClick}
				type="button"
				class="{isCounting
					? 'bg-brown-900'
					: 'bg-brown-600'}  text-white focus:ring-brown-300 hover:bg-brown-900 focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-3 py-2 text-center"
			>
				{isCounting ? 'Stop' : 'Start'}
			</button>
		</div>
	</div>
</div>
