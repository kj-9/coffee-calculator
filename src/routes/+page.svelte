<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import InputAmount from '$lib/components/InputAmount.svelte';
	import Timer from '$lib/components/Timer.svelte';
	import Card from '$lib/components/Card.svelte';
	import Accordion from '$lib/components/Accordion.svelte';

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

<div class="container mt-4 px-1 sm:px-3">
	<div class="max-w-md">
		<Card>
			<h2>何mlのアイスコーヒーを作りますか?</h2>
			<InputAmount {coffee} />

			<h2 class="text-sm text-brown-300">材料</h2>
			<ul class="px-4">
				<li class="flex justify-between">
					<div>コーヒー豆/粉</div>
					<div class="mr-[0.45rem]">
						<span class="align-right text-xl text-sky-400">{coffee_powder}</span> g
					</div>
				</li>
				<li class="flex justify-between">
					<div>氷</div>
					<div class="mr-[0.45rem]">
						<span class="align-right text-xl text-sky-400">{ice}</span> g
					</div>
				</li>
				<li class="flex justify-between">
					<div>お湯</div>
					<div><span class="align-right text-xl text-sky-400">{hot_warter}</span> ml</div>
				</li>
			</ul>

			<h2 class="text-sm text-brown-300 mt-5">淹れ方</h2>
			<ol class="px-4 list-inside">
				<li><span class="text-xl text-sky-400">{hot_water_1_2}</span> ml 注ぎ、1分蒸らす</li>
				<li><span class="text-xl text-sky-400">{hot_water_1_2}</span> ml 注ぎ、1分蒸らす</li>
				<li><span class="text-xl text-sky-400">{hot_water_3}</span> ml 注ぐ</li>
			</ol>

			<div class="mt-5">
				<Accordion title="準備">
					<ol class="px-4 list-inside">
						<li>ペーパーをセットし、お湯で全体を湿らせる</li>
						<li>ドリップポットに氷をいれる</li>
						<li>ドリッパーにコーヒー粉を入れ、軽くならす</li>
					</ol>
				</Accordion>
			</div>
		</Card>

		<div class="mt-2">
			<Card>
				<Timer />
			</Card>
		</div>

		<div class="ml-1 mt-2 text-sm text-brown-600">
			レシピ: 井崎英典さんの<a class="underline" href="https://www.youtube.com/watch?v=2-VGeC0SFMU">
				究極のアイスコーヒーの淹れ方</a
			>より
		</div>

		<div class="mt-5"></div>
		<Footer />
	</div>
</div>
