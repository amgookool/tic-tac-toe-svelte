<script lang="ts">
	export let className = '';
	export let value: string | null = null;
	export let playerTurn: string = 'X';
	export let onClickEvent: () => void;

	let hoverClass = null;
	if (value == null && playerTurn != null) {
		hoverClass = `${playerTurn.toLowerCase()}-hover`;
	}
</script>

<button on:click={onClickEvent} class="tile {className} {hoverClass}">
	{value}
</button>
