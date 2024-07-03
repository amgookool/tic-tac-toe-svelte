<script lang="ts">
  import Tile from "@components/Tile.svelte";
  export let tiles: (string | null)[];
  export let winStrokeClass: string;
</script>

<div class="relative container ">
  {#each [0, 1, 2] as row}
    <div class="flex">
      {#each [0, 1, 2] as col}
        <Tile value={tiles[row * 3 + col]} index={row * 3 + col} />
      {/each}
    </div>
  {/each}
  <div class={`absolute bg-orange-500 ${winStrokeClass}`}></div>;
</div>

<style>

.strike-row-1 {
  width: 22%;
  height: 2px;
  top: 13.5%;
}
.strike-row-2 {
  width: 22%;
  height: 2px;
  top: 43%;
}
.strike-row-3 {
  width: 22%;
  height: 2px;
  top: 72%;
}
.strike-column-1 {
  height: 75%;
  width: 2px;
  left: 3.5%;
  top: 8.8%
}
.strike-column-2 {
  height: 75%;
  width: 2px;
  left: 11.1%;
  top: 8.8%
}
.strike-column-3 {
  height: 75%;
  width: 2px;
  left: 18.8%;
  top: 8.8%
}
.strike-diagonal-1 {
  width: 22%;
  height: 2px;
  top: 44.5%;
  left: 1%;
  transform: skewY(45deg);
}
.strike-diagonal-2 {
  width: 22%;
  height: 2px;
  top: 40.5%;
  left: 1%;
  transform: skewY(-45deg);
}
</style>