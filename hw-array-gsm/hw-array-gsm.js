const testArray1 = [
  [10, 20, 40],
  [40, 50, 60],
  [70, -80, 90],
];
const testArray2 = [
  [10, 20, 40],
  [40, 50, 90],
  [70, 80, 10],
];
const testArray3 = [
  [10, 15, 22],
  [34, 50],
  [1, 78, 9],
];

const testArray4 = [
  [10, 23, -2],
  [4, 50, 87],
];

function getGreatestSum(arr) {
  let maxRow = 0;
  let indexOfMaxRow = 0;
  function greatestSumOfRow(arr) {
    for (let i = 0; i < arr.length; i++) {
      let totalofRow = 0;
      let numbers = arr[i];
      for (let ii = 0; ii < numbers.length; ii++) {
        totalofRow += arr[i][ii];
        if (totalofRow > maxRow) {
          maxRow = totalofRow;
          indexOfMaxRow = i;
        }
      }
    }
    return maxRow;
  }

  let maxCol = 0;
  let indexOfMaxCol = 0;

  function greatestSumOfCol(arr) {
    for (let i = 0; i < arr.length; i++) {
      let totalofCol = 0;
      let numbers = arr[i];
      for (let ii = 0; ii < numbers.length; ii++) {
        totalofCol += arr[ii][i];
        if (totalofCol > maxCol) {
          maxCol = totalofCol;
          indexOfMaxCol = i;
        }
      }
    }
    return maxCol;
  }
  const length = arr.length;
  // console.log(length)
  const totalNumberofElement = arr.reduce((acc, sum) => acc + sum.length, 0);
  // console.log(totalNumberofElement);

  if (length !== 3) {
    console.log("Invalid Input");
    return "Invalid Input";
  } else if (totalNumberofElement !== 9) {
    console.log("Invalid Input");
    return "Invalid Input";
  } else if (greatestSumOfRow(arr) >= greatestSumOfCol(arr)) {
    console.log("Row " + indexOfMaxRow + " has the maximum sum of " + maxRow);
    return maxRow;
  } else if (greatestSumOfRow(arr) <= greatestSumOfCol(arr)) {
    console.log("Col " + indexOfMaxCol + " has the maximum sum of " + maxCol);
    return maxCol;
  }
}

getGreatestSum(testArray1);
getGreatestSum(testArray2);
getGreatestSum(testArray3);
getGreatestSum(testArray4);
