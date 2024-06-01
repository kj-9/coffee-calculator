<script>
	const coffee = $state({ amount: 250 });

	let coffee_powder = $derived(Math.floor(coffee.amount * 0.08));
	let hot_warter = $derived(Math.floor(coffee.amount * (3 / 5)));
	let ice = $derived(Math.floor(coffee.amount * (2 / 5)));

	let hot_water_1_2 = $derived(Math.floor(hot_warter * (1 / 5)));
	let hot_water_3 = $derived(Math.floor(hot_warter * (3 / 5)));
</script>

<h1>アイスコーヒー計算機</h1>

<p>何mlのアイスコーヒーを作りますか?</p>

<input type="number" bind:value={coffee.amount} /> ml

<h2>材料:</h2>

<ul>
	<li>{coffee_powder} gのコーヒー粉</li>
	<li>{ice} gの氷</li>
	<li>{hot_warter} mlのお湯</li>
</ul>

<h2>手順:</h2>

<ul>
	<li>ドリッパー全体に湯通しし、ペーパー全体を湿らせる（分量外）</li>
	<li>ドリップを受ける容器に氷をすべていれる</li>
	<li>ドリッパーにコーヒー粉を入れ、軽くならす</li>
	<li>1投目: お湯{hot_water_1_2}mlを注ぎ、1分蒸らす *真ん中から細くゆっくりと注ぐ</li>
	<li>2投目: お湯{hot_water_1_2}mlを注ぎ、1分蒸らす</li>
	<li>3投目: 残りのお湯{hot_water_3}mlを注ぐ *少し早めに注ぐ</li>
</ul>

<h2>参考:</h2>
<ul>
	<li>
		<a href="https://www.youtube.com/watch?v=2-VGeC0SFMU">レシピは井崎英典さんの動画より</a>
	</li>
	<li>
		<a href="https://github.com/kj-9/coffee-calculator">ソースコード</a>
	</li>
</ul>
