<script lang="ts">
	import Board from '@components/Board.svelte';
	import ScoreCard from './components/ScoreCard.svelte';
	import { checkForWin } from './utils';
	import { createEventDispatcher } from 'svelte';

	export let playerNames: {
		playerXName: string;
		playerOName: string;
	};
	let gameScores = {
		...playerNames,
		playerXWins: 0,
		playerOWins: 0,
		draws: 0,
	};
	let tiles: ('X' | 'O' | null)[] = Array(9).fill(null);
	let disabledTiles: boolean[] = Array(9).fill(false);
	$: winner = checkForWin(tiles);
	$: isDraw = winner.isWin === false && disabledTiles.every((tile) => tile === true);
	$: currentPlayer = 'X';
	$: winStrokeClass = '';
	$: isGameOver = false;
	$: winnerName = winner.isWin ? winner.player : null;
	$: if (winner.isWin) {
		isGameOver = true;
		disabledTiles = Array(9).fill(true);
		winStrokeClass = winner.winClass as string;
		if (winner.player === 'X') {
			gameScores.playerXWins += 1;
		} else if (winner.player === 'O') {
			gameScores.playerOWins += 1;
		}
	} else {
		if (disabledTiles.every((tile) => tile === true)) {
			gameScores.draws += 1;
			isGameOver = true;
		}
	}

	const handlePlayAgain = () => {
		tiles = Array(9).fill(null);
		disabledTiles = Array(9).fill(false);
		winStrokeClass = '';
	};

	const menuButtonDispatchEvent = createEventDispatcher<{ menuButtonClick: { index: number } }>();

	const handleMenuButtonClick = () => {
		isGameOver = false;
		tiles = Array(9).fill(null);
		disabledTiles = Array(9).fill(false);
		winStrokeClass = '';
		if (currentPlayer === 'O') {
			currentPlayer = 'X';
		} else {
			currentPlayer = 'O';
		}
		menuButtonDispatchEvent('menuButtonClick', { index: 1 });
	};
</script>

<!-- flex flex-col items-center justify-center w-full h-screen text-center -->
<div class="flex flex-col w-full justify-center text-center items-center gap-8">
	<ScoreCard {...gameScores} bind:currentPlayer />
	<div class="flex flex-row">
		<Board bind:tiles bind:currentPlayer bind:winStrokeClass bind:disabledTiles {isDraw} />
		{#if winnerName}
			<div
				class="bg-accent-content flex flex-row h-16 w-48 rounded-box place-items-center justify-center relative top-36 left-20"
			>
				<span class="text-primary font-bold">{winnerName} Won!</span>
			</div>
		{/if}
	</div>
	<div class="flex flex-row gap-6">
		<button on:click={handleMenuButtonClick} class="btn btn-secondary">Main Menu</button>
		<button disabled={!isGameOver} on:click={handlePlayAgain} class={`btn btn-primary`}>Play Again</button>
	</div>
</div>

<style>
	.btn {
		transition: filter 0.3s;
	}
	.btn-overlay {
		filter: brightness(1.5); /* Increase the brightness */
	}
</style>
