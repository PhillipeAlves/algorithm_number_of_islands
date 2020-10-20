![Banner](/islands-banner.gif)

## Problem

Given a 2D array binaryMatrix of 0s and 1s, implement a function getNumberOfIslands that returns the number of islands of 1s in binaryMatrix.

An island is defined as a group of adjacent values that are all 1s. A cell in binaryMatrix is considered adjacent to another cell if they are next to each either on the same row or column. Note that two values of 1 are not part of the same island if they’re sharing only a mutual “corner” (i.e. they are diagonally neighbours).

## Solution

```
const getNumberOfIslands = (matrix) => {
  let rows = matrix.length;
  let columns = matrix[0].length;
  let islands = 0;

  if (matrix === 0 || rows === 0) return 0;

  const DFS = (matrix, i, j) => {
    if (
      i < 0 ||            // ↑
      i >= rows ||        // ↓
      j < 0 ||            // ←
      j >= columns ||     // →
      matrix[i][j] === 0
    )
      return;
    matrix[i][j] = 0;       // clear visited cell
    DFS(matrix, i - 1, j);  // ↑
    DFS(matrix, i + 1, j);  // ↓
    DFS(matrix, i, j - 1);  // ←
    DFS(matrix, i, j + 1);  // →
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++)
      if (matrix[i][j] === 1) {
        DFS(matrix, i, j);
        islands++;
      }
  }
  return islands;
};

binaryMatrix = [
  [0, 1, 0, 1, 0],
  [0, 0, 1, 1, 1],
  [1, 0, 0, 1, 0],
  [0, 1, 1, 0, 0],
  [1, 0, 1, 0, 1],
];

getNumberOfIslands(binaryMatrix);

```

> **Time Complexity**: Each cell in binaryMatrix is visited a constant number of times. Once during the iteration and up to 4 times during an island expansion. Therefore, the time complexity is linear in the size of the input, i.e. O(N⋅M).

> **Space Complexity**: Worst case O(M×N), in case that the matrix is filled with lands where DFS goes by M×N deep.
