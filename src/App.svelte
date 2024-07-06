<script lang="ts">
	import TicTacToe from '@lib/TicTacToe.svelte';
	import Menu from '@lib/Menu.svelte';
	import './app.css';
	import { onMount, tick } from 'svelte';

	let showTicTacToe = false;

	onMount(async () => {
		await tick();
		showTicTacToe = false;
	});

	let playerNames = {
		playerXName: '',
		playerOName: '',
	};
	const handleMenuButtonClick = (event: CustomEvent<{ playerXName: string; playerOName: string }>) => {
		if (event.detail.playerXName !== '' && event.detail.playerOName !== '') {
			playerNames = event.detail;
			showTicTacToe = true;
		} else {
			alert('Please enter player names');
		}
	};
	const handleTicTacToeButtonClick = () => {
		showTicTacToe = false;
		playerNames = {
			playerXName: '',
			playerOName: '',
		};
	};
</script>

<main>
	{#if showTicTacToe}
		<div class="flex flex-col items-center justify-center">
			<TicTacToe {playerNames} on:menuButtonClick={handleTicTacToeButtonClick} />
		</div>
	{:else}
		<div class="h-screen container mx-auto flex flex-col items-center justify-center">
			<Menu {...playerNames} on:menuButtonClick={handleMenuButtonClick} />
		</div>
	{/if}
</main>
