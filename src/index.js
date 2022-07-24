module.exports = function towelSort (matrix) {
  let newMatrix = [];
  let newArray = [];
  if (matrix === undefined) {
    return [];
  }
  for (let element = 0;  element < matrix.length; element++) {
    if (element % 2 !== 0) {
      newMatrix.push(matrix[element].reverse())
    } else newMatrix.push(matrix[element])
  }
  for (let array of newMatrix) {
    for (let i = 0; i < array.length; i++) {
      newArray.push(array[i])
    }
  }
  return(newArray);
}
