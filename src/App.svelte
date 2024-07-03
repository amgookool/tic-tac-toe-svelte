<script lang="ts">
  import TicTacToe from "@lib/TicTacToe.svelte";
  import Menu from "@lib/Menu.svelte";
  import "./app.css";
  import { onMount, tick } from "svelte";

  let showTicTacToe = true;

  onMount(async () => {
    await tick();
    showTicTacToe = false;
  });
</script>

<main>
  {#if showTicTacToe}
    <div class="container mx-auto flex flex-col items-center justify-center">
      <TicTacToe />
      <button
        class="btn btn-secondary"
        on:click={() => (showTicTacToe = !showTicTacToe)}
      >
        Back to Main Menu</button
      >
    </div>
  {:else}
    <div class="container mx-auto flex flex-col items-center justify-center">
      <Menu />
      <button
        class="btn btn-primary"
        on:click={() => (showTicTacToe = !showTicTacToe)}
      >
        Start
      </button>
    </div>
  {/if}
</main>
