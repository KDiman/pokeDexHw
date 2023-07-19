const queueTime = (customers, countersCount) => {
  const queue = new Array(countersCount).fill(0);
  for (let i = 0; i < customers.length; i++) {
    queue[0] += customers[i];
    queue.sort((a, b) => a - b);
  }
  return queue[queue.length - 1];
};

console.log(queueTime([5, 3, 4], 1));
console.log(queueTime([10, 2, 3, 3], 2));
console.log(queueTime([2, 3, 10], 2));
