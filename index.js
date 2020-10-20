const getNumberOfIslands = (matrix) => {
  let rows = matrix.length;
  let columns = matrix[0].length;
  let islands = 0;

  if (matrix === 0 || rows === 0) return 0;

  const DFS = (matrix, i, j) => {
    if (i < 0 || i >= rows || j < 0 || j >= columns || matrix[i][j] === 0)
      return;
    matrix[i][j] = 0;
    DFS(matrix, i - 1, j);
    DFS(matrix, i + 1, j);
    DFS(matrix, i, j - 1);
    DFS(matrix, i, j + 1);
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

module.exports = getNumberOfIslands;
