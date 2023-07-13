const pinoySuperHeroes = [
  "Zsazsa Zaturnnah",
  "Bagwis",
  "darna",
  "Mithi",
  "Super Inggo",
  "Pedro Penduko",
  "Alexandra Trese",
  "pepeng agimat",
  "Luzviminda",
  "Kalayaan",
];

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let curVal = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > curVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = curVal;
  }
  return arr;
}
console.log(selectionSort(pinoySuperHeroes));
console.log(bubbleSort(pinoySuperHeroes));
console.log(insertionSort(pinoySuperHeroes));
