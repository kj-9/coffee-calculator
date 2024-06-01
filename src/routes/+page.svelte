<script lang="ts">
	import InputAmount from '$lib/components/InputAmount.svelte';
	import Timer from '$lib/components/Timer.svelte';
	import Card from '$lib/components/Card.svelte';
	import Tag from '$lib/components/Tag.svelte';

	function createCoffee(amount: number) {
		let _amount = $state(amount);

		function increment(value: number) {
			return () => (_amount += value);
		}

		function decrement(value: number) {
			return () => (_amount -= value);
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

<div class="container mt-8 ml-10 text-slate-900">
	<h1
		class="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl"
	>
		☕ Coffee Calculator
	</h1>

	<div class="mt-10">
		<Card>
			<InputAmount {coffee} label={'何mlのアイスコーヒーを作りますか?'} />
		</Card>
	</div>
	
	<div class="ml-2">
	<h2 class="mt-10 mb-2 text-lg font-semibold">材料</h2>
	<ul class="ml-2 space-y-2 list-disc list-inside">
		<li><Tag>{coffee_powder} g</Tag>のコーヒー粉</li>
		<li><Tag>{ice} g</Tag>の氷</li>
		<li><Tag>{hot_warter} ml</Tag>のお湯</li>
	</ul>

	<h2 class="mt-10 mb-2 text-lg font-semibold">手順</h2>

	<ol class="space-y-4 list-decimal list-inside">
		<li>
			準備
			<ol class="ps-5 mt-2 space-y-1 list-decimal list-inside">
				<li>ドリッパーにペーパをセットしし、湯通ししてペーパー全体を湿らせる（お湯は分量外）</li>
				<li>ドリップを受ける容器に氷をすべていれる</li>
				<li>ドリッパーにコーヒー粉を入れ、軽くならす</li>
			</ol>
		</li>
		<li>
			お湯を注ぐ
			<ul class="ps-5 mt-2 space-y-2 list-decimal list-inside">
				<li><Tag>{hot_water_1_2} ml</Tag>のお湯を注ぎ、1分蒸らす (真ん中から細くゆっくりと注ぐ)</li>
				<li><Tag>{hot_water_1_2} ml</Tag>のお湯を注ぎ、1分蒸らす</li>
				<li><Tag>{hot_water_3} ml</Tag>の残りのお湯を注ぐ (少し早めに注ぐ)</li>
			</ul>
		</li>
	</ol>

	<div class="mt-8" />
	<Card>
		<Timer />
	</Card>

	<h2 class="mt-10 mb-2 text-lg font-semibold">参考:</h2>
	<ul class="ml-2 space-y-1 list-disc list-inside">
		<li>
			<a
				href="https://www.youtube.com/watch?v=2-VGeC0SFMU"
				class="font-medium text-blue-600 hover:underline">レシピは井崎英典さんの動画より</a
			>
		</li>
		<li>
			<a
				href="https://github.com/kj-9/coffee-calculator"
				class="font-medium text-blue-600 hover:underline">ソースコード</a
			>
		</li>
	</ul>
</div>
</div>
