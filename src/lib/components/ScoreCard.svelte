<script lang="ts">
	export let playerXName: string;
	export let playerOName: string;
	export let playerXWins: number;
	export let playerOWins: number;
	export let draws: number;
	export let currentPlayer: string | 'X' | 'O';
</script>

<div class="flex w-7/12 self-center pt-2 gap-6">
	<div
		class={`card bg-base-300 rounded-box grid h-20 flex-grow place-items-center ${currentPlayer === 'X' ? 'border-4 border-primary' : ''}`}
	>
		<div class={`flex flex-col`}>
			<span class="text-info">Player X: {playerXName}</span>
			<span class="text-secondary">Wins: {playerXWins}</span>
		</div>
	</div>
	<div class="divider divider-horizontal">
		<div class="flex flex-col">
			<span class="text-info">Draws</span>
			<span class="text-secondary">{draws}</span>
		</div>
	</div>
	<div
		class={`card bg-base-300 rounded-box grid h-20 flex-grow place-items-center ${currentPlayer === 'O' ? 'border-4 border-primary' : ''} `}
	>
		<div class={`flex flex-col`}>
			<span class="text-info">Name: {playerOName}</span>
			<span class="text-secondary">Wins: {playerOWins}</span>
		</div>
	</div>
</div>
