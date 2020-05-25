const sumLargestNumbers = function (data) {
  // Put your solution here
  let total = 0;
  for (i = 0; i < data.length; i++) {
    total += data[i];
  }
  return (total = data[0] + data[1]);
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
