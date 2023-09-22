//! Problem => there is a variable that only use in a terniary operator
function need_item(order) {
  const needed = order.amount > 0;
  return needed;
}

//* dont use varialbe in this case
function need_item(order) {
  return order.amount > 0;
}
