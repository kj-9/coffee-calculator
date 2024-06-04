<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import InputAmount from '$lib/components/InputAmount.svelte';
	import Timer from '$lib/components/Timer.svelte';
	import Card from '$lib/components/Card.svelte';

	function createCoffee(amount: number) {
		let _amount = $state(amount);

		function increment(value: number) {
			return () => (_amount += value);
		}

		function decrement(value: number) {
			return () => {
				// 0未満にならないようにする
				if (_amount - value < 0) {
					return;
				}
				_amount -= value;
			};
		}

		return {
			get amount() {
				return _amount;
			},
			set amount(value: number) {
				_amount = value;
			},
			increment,
			decrement
		};
	}

	const coffee = createCoffee(250);

	let coffee_powder = $derived(Math.floor(coffee.amount * 0.08));
	let hot_warter = $derived(Math.floor(coffee.amount * (3 / 5)));
	let ice = $derived(Math.floor(coffee.amount * (2 / 5)));

	let hot_water_1_2 = $derived(Math.floor(hot_warter * (1 / 5)));
	let hot_water_3 = $derived(Math.floor(hot_warter * (3 / 5)));
</script>

<Header />

<div class="container mt-4 pl-2 sm:pl-10">
	<Card>
		<h2>何mlのアイスコーヒーを作りますか?</h2>
		<InputAmount {coffee} />

		<h2 class="text-sm text-brown-300">材料</h2>
		<ul class="px-4">
			<li class="flex justify-between">
				<div>コーヒー豆/粉</div>
				<div class="align-right text-xl text-sky-400">{coffee_powder} g</div>
			</li>
			<li class="flex justify-between">
				<div>氷</div>
				<div class="align-right text-xl text-sky-400">{ice} g</div>
			</li>
			<li class="flex justify-between">
				<div>お湯</div>
				<div class="align-right text-xl text-sky-400">{hot_warter} ml</div>
			</li>
		</ul>

		<h2 class="text-sm text-brown-300 mt-3">淹れ方</h2>
		<ol class="px-4 list-inside">
			<li><span class="text-xl text-sky-400">{hot_water_1_2} ml</span> 注ぎ、1分蒸らす</li>
			<li><span class="text-xl text-sky-400">{hot_water_1_2} ml</span> 注ぎ、1分蒸らす</li>
			<li><span class="text-xl text-sky-400">{hot_water_3} ml</span> 注ぐ</li>
		</ol>
	</Card>
	<div class="ml-2">
		<h2 class="mt-10 mb-2 text-xl font-semibold">コーヒーを淹れる</h2>

		<ul class="space-y-4">
			<li>
				準備
				<ol class="ps-2 sm:ps-4 mt-2 space-y-3 list-decimal list-inside text-clip">
					<li>ペーパ-をドリッパーにセットし、お湯で全体を湿らせる</li>
					<li>ドリップポットに氷をいれる</li>
					<li>ドリッパーにコーヒー粉を入れ、軽くならす</li>
				</ol>
			</li>
		</ul>

		<div class="mt-8"></div>
		<Card>
			<Timer />
		</Card>

		<h2 class="mt-10 mb-2 text-lg font-semibold">Credits</h2>
		<ul class="ml-2 space-y-1 mb-8">
			<li>
				レシピは
				<a
					href="https://www.youtube.com/watch?v=2-VGeC0SFMU"
					class="font-medium text-blue-600 hover:underline">井崎英典さんの動画</a
				>より
			</li>
		</ul>
	</div>
</div>
