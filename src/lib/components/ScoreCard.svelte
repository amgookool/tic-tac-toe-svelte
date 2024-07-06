<script lang="ts">
	export let playerXName: string;
	export let playerOName: string;
	export let playerXWins: number;
	export let playerOWins: number;
	export let draws: number;
</script>

<div class="flex w-7/12 self-center">
	<div class="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center">
		<div class="flex flex-col">
			<span>Name: {playerXName}</span>
			<span>Wins: {playerXWins}</span>
		</div>
	</div>
	<div class="divider divider-horizontal">
		<div>{draws}</div>
	</div>
	<div class="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center">
		<div class="flex flex-col">
			<span>Name: {playerOName}</span>
			<span>Wins: {playerOWins}</span>
		</div>
	</div>
</div>
