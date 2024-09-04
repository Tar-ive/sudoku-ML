function generateSudoku() {
    const grid = Array(9).fill().map(() => Array(9).fill(0));
    
    // Helper function to check if a number is valid in a given position
    function isValid(num, row, col) {
        for (let x = 0; x < 9; x++) {
            if (grid[row][x] === num || grid[x][col] === num) {
                return false;
            }
        }
        let boxRow = Math.floor(row / 3) * 3;
        let boxCol = Math.floor(col / 3) * 3;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (grid[boxRow + i][boxCol + j] === num) {
                    return false;
                }
            }
        }
        return true;
    }
    
    // Helper function to fill the grid
    function fillGrid(row, col) {
        if (col === 9) {
            col = 0;
            row++;
            if (row === 9) {
                return true;
            }
        }
        if (grid[row][col] !== 0) {
            return fillGrid(row, col + 1);
        }
        for (let num = 1; num <= 9; num++) {
            if (isValid(num, row, col)) {
                grid[row][col] = num;
                if (fillGrid(row, col + 1)) {
                    return true;
                }
                grid[row][col] = 0;
            }
        }
        return false;
    }
    
    // Fill the grid
    fillGrid(0, 0);
    
    // Remove some numbers to create the puzzle
    const numToRemove = 40; // Adjust this for difficulty
    for (let i = 0; i < numToRemove; i++) {
        let row = Math.floor(Math.random() * 9);
        let col = Math.floor(Math.random() * 9);
        while (grid[row][col] === 0) {
            row = Math.floor(Math.random() * 9);
            col = Math.floor(Math.random() * 9);
        }
        grid[row][col] = 0;
    }
    
    return grid;
}

function renderGrid(grid, editable = true) {
    const sudokuGrid = document.getElementById('sudoku-grid');
    sudokuGrid.innerHTML = '';
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const cell = document.createElement('input');
            cell.type = 'text';
            cell.className = 'cell';
            cell.value = grid[i][j] || '';
            cell.readOnly = !editable || grid[i][j] !== 0;
            cell.dataset.row = i;
            cell.dataset.col = j;
            sudokuGrid.appendChild(cell);
        }
    }
}