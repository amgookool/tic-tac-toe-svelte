<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let value: string | null = null;
	export let index: number;
	export let isDisabled: boolean;
	export let currentPlayer: string;

	let tileBorderIndexStyles = {
		0: 'border-e-2 border-b-2',
		1: 'border-b-2',
		2: 'border-s-2 border-b-2',
		3: 'border-e-2',
		4: '',
		5: 'border-s-2',
		6: 'border-e-2 border-t-2',
		7: 'border-t-2',
		8: 'border-s-2 border-t-2',
	};

	// Function to get the style for a specific index
	function getTileBorderStyle(index: number): string {
		return tileBorderIndexStyles[index as keyof typeof tileBorderIndexStyles];
	}

	const dispatch = createEventDispatcher<{ tileClick: { index: number } }>();
	const handleClick = () => {
		dispatch('tileClick', { index });
	};
</script>

<button
	disabled={isDisabled}
	type="button"
	on:click={handleClick}
	class={`relative h-28 w-24 border-accent rounded-sm ${isDisabled ? '' : 'hover:rounded-md hover:bg-neutral'} ${getTileBorderStyle(index)} ${currentPlayer === 'X' && isDisabled == false ? 'hover-show-x' : ''} ${currentPlayer == 'O' && isDisabled == false ? 'hover-show-o' : ''}`}
>
	<span class={`text-4xl ${value === 'X' ? 'text-success' : 'text-error'}`}>{value ?? ''}</span>
</button>

<style>
	.hover-show-x::before {
		content: 'X';
		color: lightgray;
		position: absolute;
		font-size: 2rem;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		opacity: 0;
	}
	.hover-show-x:hover::before {
		opacity: 1;
	}

	.hover-show-o::before {
		content: 'O';
		color: lightgray;
		position: absolute;
		font-size: 2rem;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		opacity: 0;
	}
	.hover-show-o:hover::before {
		opacity: 1;
	}
</style>
