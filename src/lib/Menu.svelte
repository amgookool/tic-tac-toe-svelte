<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let playerXName: string;
	export let playerOName: string;

	const buttonEventDispatcher = createEventDispatcher<{ menuButtonClick: { playerXName: string; playerOName: string } }>();
	const playButtonClick = () => {
		buttonEventDispatcher('menuButtonClick', {
			playerXName,
			playerOName,
		});
	};
</script>

<div class="card bg-neutral text-neutral-content w-60%">
	<div class="card-body items-center text-center">
		<h2 class="card-title">Tic Tac Toe</h2>
		<p class="text-start">
			Hey there, welcome to our awesome Tic Tac Toe game! 🎉 Whether you're a seasoned strategist or just here for some fun, we're
			thrilled to have you. Pick your X or O, and let's see who can claim victory first. Remember, it's all about having a good
			time, so play fair and enjoy every move. May the best player win! 😊
		</p>
		<label for="playerX" class="form-control w-full max-w-xs">
			<div class="label">
				<span class="label-text">Player X</span>
			</div>
			<input
				class="input input-bordered w-full max-w-xs"
				id="playerX"
				bind:value={playerXName}
				type="text"
				placeholder="Enter name"
			/>
		</label>
		<label for="playerO" class="form-control w-full max-w-xs">
			<div class="label">
				<span class="label-text">Player O</span>
			</div>
			<input
				class="input input-bordered w-full max-w-xs"
				id="playerO"
				bind:value={playerOName}
				type="text"
				placeholder="Enter name"
			/>
		</label>
		<div class="card-actions justify-end min-w-80">
			<button class="btn btn-secondary w-full" on:click={playButtonClick}>Play</button>
		</div>
	</div>
</div>
