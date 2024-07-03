<script lang="ts">
	export let value: string | null = null;
	export let index: number;
	// export let onClickEvent: () => void;

	// let hoverClass = null;
	// if (value == null && playerTurn != null) {
	// 	hoverClass = `${playerTurn.toLowerCase()}-hover`;
	// }

	let tileBorderIndexStyles = {
    0: "border-e-2 border-b-2",
    1: "border-b-2",
    2: "border-s-2 border-b-2",
    3: "border-e-2",
    4: "",
    5: "border-s-2",
    6: "border-e-2 border-t-2",
    7: "border-t-2",
    8: "border-s-2 border-t-2",
  };

   // Function to get the style for a specific index
   function getTileBorderStyle(index: number): string {
    return tileBorderIndexStyles[index as keyof typeof tileBorderIndexStyles];
  }




</script>

<button  class={`h-12 w-12 border-green-700 rounded-sm hover:rounded hover:bg-slate-600 ${getTileBorderStyle(index)}`}>
	{value ?? ''}
</button>
