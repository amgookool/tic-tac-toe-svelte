let winStrikeClasses = {
	'': '',
	r1: 'strike-row-1',
	r2: 'strike-row-2',
	r3: 'strike-row-3',
	c1: 'strike-column-1',
	c2: 'strike-column-2',
	c3: 'strike-column-3',
	d1: 'strike-diagonal-1',
	d2: 'strike-diagonal-2',
};

const getStrikeClassFromWinCombo = (winCombo: number[]) => {
	if (arraysEqual(winCombo, [0, 1, 2])) {
		return winStrikeClasses.r1;
	} else if (arraysEqual(winCombo, [3, 4, 5])) {
		return winStrikeClasses.r2;
	} else if (arraysEqual(winCombo, [6, 7, 8])) {
		return winStrikeClasses.r3;
	} else if (arraysEqual(winCombo, [0, 3, 6])) {
		return winStrikeClasses.c1;
	} else if (arraysEqual(winCombo, [1, 4, 7])) {
		return winStrikeClasses.c2;
	} else if (arraysEqual(winCombo, [2, 5, 8])) {
		return winStrikeClasses.c3;
	} else if (arraysEqual(winCombo, [0, 4, 8])) {
		return winStrikeClasses.d1;
	} else if (arraysEqual(winCombo, [2, 4, 6])) {
		return winStrikeClasses.d2;
	} else {
		return winStrikeClasses[''];
	}
};
// Function to check for Win Conditions
export function checkForWin(board: ('X' | 'O' | null)[]): { isWin: boolean; winClass: string | null; player: 'X' | 'O' | null } {
	let winClass: string | null = null;
	let player: 'X' | 'O' | null = null;
	let isWin = false;
	const winningCombinations = [
		// Rows
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		// Columns
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		// Diagonals
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < winningCombinations.length; i++) {
		const [a, b, c] = winningCombinations[i];
		if (board[a] != null && board[a] === board[b] && board[a] === board[c]) {
			const winCombo = winningCombinations[i];
			winClass = getStrikeClassFromWinCombo(winCombo);
			player = board[a];
			isWin = true;
			break;
		}
	}
	return { isWin, winClass, player };
}

// Helper function to compare arrays
function arraysEqual(a: number[], b: number[]): boolean {
	if (a.length !== b.length) return false;
	for (let i = 0; i < a.length; i++) {
		if (a[i] !== b[i]) return false;
	}
	return true;
}
