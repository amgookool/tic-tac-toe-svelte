<script lang="ts">
	let playerXName: string;
	let playerOName: string;
	let shouldDisableInput = false;

	const savePlayerNames = () => {
		localStorage.removeItem('players');
		const players = {
			playerX: playerXName,
			playerO: playerOName,
		};
		localStorage.setItem('players', JSON.stringify(players));
		shouldDisableInput = true;
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
		<input id="playerX" disabled={shouldDisableInput} bind:value={playerXName} type="text" placeholder="Enter Player X Name" />
		<input id="playerO" disabled={shouldDisableInput} bind:value={playerOName} type="text" placeholder="Enter Player O Name" />
		<div class="card-actions justify-end">
			<button class="btn btn-secondary" disabled={shouldDisableInput} on:click={savePlayerNames}>Save</button>
			<button class="btn btn-primary">Accept</button>
		</div>
	</div>
</div>
