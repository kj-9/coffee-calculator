<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import InputAmount from '$lib/components/InputAmount.svelte';
	import Timer from '$lib/components/Timer.svelte';
	import Card from '$lib/components/Card.svelte';
	import Accordion from '$lib/components/Accordion.svelte';

	function createCoffee(amount: number, isHotCoffee = false) {
		let _amount = $state(amount);
		let _isHotCoffee = $state(isHotCoffee);

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
			decrement,

			get isHotCoffee() {
				return _isHotCoffee;
			},
			toggleCoffeeMode() {
				_isHotCoffee = !_isHotCoffee;
			}
		};
	}

	const coffee = createCoffee(250);

	let coffee_powder = $derived(Math.floor(coffee.amount * 0.08));
	let ice_ratio = $derived(coffee.isHotCoffee ? 0 : 0.4);
	let hot_warter = $derived(Math.floor(coffee.amount * (1 - ice_ratio)));
	let ice = $derived(Math.floor(coffee.amount * ice_ratio));

	let hot_water_1_2 = $derived(Math.floor(hot_warter * (1 / 5)));
	let hot_water_3 = $derived(Math.floor(hot_warter * (3 / 5)));
</script>

<Header />

<div class="container mt-4 px-1 sm:px-3">
	<div class="max-w-md">
		<Card>
			<button
				onclick={coffee.toggleCoffeeMode}
				class="mb-2 font-medium border rounded-full text-sm px-4 py-2 text-center {coffee.isHotCoffee
					? 'bg-brown-900 text-brown-100'
					: 'bg-brown-100 text-brown-900'}"
			>
				{coffee.isHotCoffee ? 'ホット' : 'アイス'}
			</button>
			<h2>何mlのコーヒーを作りますか?</h2>
			<InputAmount {coffee} />
			<h2 class="text-sm text-brown-300">材料</h2>
			<ul class="px-4">
				<li class="flex justify-between">
					<div>コーヒー豆/粉</div>
					<div class="mr-[0.45rem]">
						<span class="align-right text-xl text-sky-400">{coffee_powder}</span> g
					</div>
				</li>
				{#if !coffee.isHotCoffee}
					<li class="flex justify-between">
						<div>氷</div>
						<div class="mr-[0.45rem]">
							<span class="align-right text-xl text-sky-400">{ice}</span> g
						</div>
					</li>
				{/if}
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
						{#if !coffee.isHotCoffee}<li>ドリップポットに氷をいれる</li>{/if}
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

		<div class="ml-1 mt-2 text-xs text-brown-600">
			井崎英典さんのレシピを参考にしています:
			<ul class="list-disc list-inside">
				<li>
					<a class="underline" href="https://www.youtube.com/watch?v=2-VGeC0SFMU">
						究極のアイスコーヒーの淹れ方
					</a>
				</li>
				<li>
					<a class="underline" href="https://www.youtube.com/watch?v=o3eMg4DYLKo">
						世界一美味しいコーヒーの淹れ方
						〜ワールド・バリスタ・チャンピオン井崎英典が教える６つのポイント〜
					</a>
				</li>
			</ul>
		</div>

		<div class="mt-5"></div>
		<Footer />
	</div>
</div>
