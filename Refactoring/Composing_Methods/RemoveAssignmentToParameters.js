//! Problem => Some value is assigned to a parameter inside method’s body
function discount(inputVal, quantity) {
  if (quantity > 50) {
    inputVal -= 2;
  }
  // ...
}
//* Solution => create Temp variables
function discount(inputVal, quantity) {
  let result = inputVal;
  if (quantity > 50) {
    result -= 2;
  }
  // ...
}
