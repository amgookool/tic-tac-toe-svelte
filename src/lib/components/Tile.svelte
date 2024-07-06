<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let value: string | null = null;
	export let index: number;
	export let isDisabled: boolean;

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
	class={`h-28 w-24 border-accent rounded-sm ${isDisabled ? '' : 'hover:rounded hover:bg-slate-600'} ${getTileBorderStyle(index)}`}
>
	<span class={`text-4xl ${value === 'X' ? 'text-success' : 'text-error'}`}>{value ?? ''}</span>
</button>
