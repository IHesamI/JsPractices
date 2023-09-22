//! Problem
//! There is a Big Method that has so many lines
//! like this
/**
 * @param {array} array
 * */
function BigMethod(array) {
  let sum = array.reduce((total, current) => total + current, 0);
  let min = Math.min(array);
  let max = Math.max(array);
  let avg = sum / array.length;
  console.log(`Average of the Array is : ${avg}`);
  console.log(`Minimum elemnt is : ${min}`);
  console.log(`Maximum elemnt is: ${max}`);
  console.log(`sum of the elements in array is: ${sum}`);
}

// * solution
function Calculate(array) {
  let sum = array.reduce((total, current) => total + current, 0);
  let min = Math.min(...array);
  let max = Math.max(...array);
  let avg = sum / array.length;
  return { sum, min, max, avg };
}
function printer(sum, min, max, avg) {
  console.log(`Average of the Array is : ${avg}`);
  console.log(`Minimum elemnt is : ${min}`);
  console.log(`Maximum elemnt is: ${max}`);
  console.log(`sum of the elements in array is: ${sum}`);
}
/**
 * @param {array} array
 * */
function CallerMethod(array) {
  const { sum, min, max, avg } = Calculate(array);
  printer(sum, min, max, avg);
}

CallerMethod([2,3,5,1,6,7,2,9,8,0])