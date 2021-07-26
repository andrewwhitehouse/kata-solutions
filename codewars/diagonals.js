function primaryDiagonal(matrix) {
  let diagonal = [];
  for(let i=0; i < matrix.length; i++) {
    diagonal.push(matrix[i][i]);
  }
  return diagonal;
}

function secondaryDiagonal(matrix) {
  let diagonal = [];
  for(let i=0; i < matrix.length; i++) {
    diagonal.push(matrix[i][matrix.length-i-1]);
  }
  return diagonal;
}

function diagonal(matrix) {
  let primarySum = primaryDiagonal(matrix).reduce((a,b) => a+b);
  let secondarySum = secondaryDiagonal(matrix).reduce((a,b) => a+b);
  if (primarySum > secondarySum) {
    return "Principal Diagonal win!"
  } else if (secondarySum > primarySum) {
    return 'Secondary Diagonal win!';
  } else {
    return 'Draw!';
  }
}

module.exports = {diagonal, primaryDiagonal, secondaryDiagonal};