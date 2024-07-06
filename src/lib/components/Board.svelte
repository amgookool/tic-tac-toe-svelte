<script lang="ts">
	import Tile from '@components/Tile.svelte';

	export let tiles: ('X' | 'O' | null)[];
	export let disabledTiles: boolean[];

	export let winStrokeClass: string;
	export let currentPlayer: string;
	export let isDraw: boolean;

	const handleTileClick = (event: CustomEvent<{ index: number }>) => {
		const index = event.detail.index;
		if (currentPlayer === 'X' && tiles[index] === null) {
			tiles[index] = 'X';
			disabledTiles[index] = true;
			currentPlayer = 'O';
		} else if (currentPlayer === 'O' && tiles[index] === null) {
			tiles[index] = 'O';
			disabledTiles[index] = true;
			currentPlayer = 'X';
		} else {
			return;
		}
	};
</script>

<div class="flex flex-col w-full items-center justify-center">
	<div class="relative">
		{#each [0, 1, 2] as row}
			<div class="flex">
				{#each [0, 1, 2] as col}
					<Tile
						on:tileClick={handleTileClick}
						value={tiles[row * 3 + col]}
						index={row * 3 + col}
						isDisabled={disabledTiles[row * 3 + col]}
					/>
				{/each}
			</div>
		{/each}
		{#if isDraw === false}
			<div class={`absolute bg-primary ${winStrokeClass}`}></div>
		{/if}
		{#if isDraw}
			<div class={`absolute bg-primary strike-draw-r1`}></div>
			<div class={`absolute bg-primary strike-draw-r2`}></div>
			<div class={`absolute bg-primary strike-draw-r3`}></div>
			<div class={`absolute bg-primary strike-draw-c1`}></div>
			<div class={`absolute bg-primary strike-draw-c2`}></div>
		{/if}
	</div>
</div>

<style>
	.strike-row-1 {
		width: 100%;
		height: 4px;
		top: 16%;
	}
	.strike-row-2 {
		width: 100%;
		height: 4px;
		top: 50%;
	}
	.strike-row-3 {
		width: 100%;
		height: 4px;
		top: 83.5%;
	}
	.strike-column-1 {
		height: 92%;
		width: 4px;
		left: 15.5%;
		top: 5%;
	}
	.strike-column-2 {
		height: 92%;
		width: 4px;
		left: 49.5%;
		top: 5%;
	}
	.strike-column-3 {
		height: 92%;
		width: 4px;
		left: 83%;
		top: 5%;
	}
	.strike-diagonal-1 {
		width: 100%;
		height: 4px;
		top: 50%;
		left: 0%;
		transform: skewY(49deg);
	}
	.strike-diagonal-2 {
		width: 100%;
		height: 4px;
		top: 50%;
		left: 0%;
		transform: skewY(-49deg);
	}
	.strike-draw-r1 {
		width: 69%;
		height: 4px;
		left: 15%;
		top: 16%;
	}
	.strike-draw-r2 {
		width: 69%;
		height: 4px;
		left: 15%;
		top: 50%;
	}
	.strike-draw-r3 {
		width: 69%;
		height: 4px;
		top: 83.5%;
		left: 15%;
	}
	.strike-draw-c1 {
		height: 34.5%;
		width: 4px;
		left: 15%;
		top: 50%;
	}
	.strike-draw-c2 {
		height: 35%;
		width: 4px;
		left: 83%;
		top: 16.2%;
	}
</style>
