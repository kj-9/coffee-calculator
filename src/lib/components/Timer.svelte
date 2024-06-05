<script>
	let time = $state(0);

	const pad = (num) => num.toString().padStart(2, '0');
	let second = $derived(pad(time % 60));
	let minute = $derived(pad(Math.floor(time / 60)));
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

<div class="flex justify-center gap-4">
	<div class="py-2 px-2 w-16">
		<button
			onclick={onClick}
			type="button"
			class="{isCounting
				? 'bg-brown-900 border-white'
				: 'bg-brown-100 text-brown-900 '} font-medium border rounded-full text-sm px-2 py-2 text-center"
		>
			{isCounting ? 'Stop' : 'Start'}
		</button>
	</div>
	<div class="w-16">
		<div class="bg-brown-100 py-2 px-2 rounded-lg">
			<h3 class="font-semibold text-2xl text-brown-900 text-center">
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
		<div class=" bg-brown-100 py-2 px-2 rounded-lg">
			<h3 class="font-semibold text-2xl text-brown-900 text-center">
				{second}
			</h3>
		</div>
	</div>
	<div class="py-2 px-2 w-16"></div>
</div>
