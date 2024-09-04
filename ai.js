document.addEventListener('DOMContentLoaded', () => {
    let currentGrid = generateSudoku();
    renderGrid(currentGrid, false);

    document.getElementById('solve').addEventListener('click', async () => {
        try {
            const response = await fetch('/solve', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ grid: currentGrid }),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const solvedGrid = await response.json();
            renderGrid(solvedGrid, false);
        } catch (error) {
            console.error('Error solving Sudoku:', error);
            alert('Error solving Sudoku. Please make sure the backend server is running and try again.');
        }
    });
});