<script lang="ts">
	import Board from '@components/Board.svelte';


	let boardValues = Array(9).fill("X");
	let winStrikeClasses = {
		"r1": "strike-row-1",
		"r2": "strike-row-2",
		"r3": "strike-row-3",
		"c1": "strike-column-1",
		"c2": "strike-column-2",
		"c3": "strike-column-3",
		"d1": "strike-diagonal-1",
		"d2": "strike-diagonal-2"
	}
	const strokeClass = "d1";
</script>

<div>
	Tic Tac Toe Component
	<!-- <Board tiles={boardValues} winStrokeClass={winStrikeClasses[strokeClass]}/> -->
	<!-- <GameOver /> -->
	<!-- <Reset /> -->
</div>
