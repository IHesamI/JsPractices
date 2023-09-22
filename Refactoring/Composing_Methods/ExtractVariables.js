//! problem => when there are so many varialbes in an expression
function hasAuth(name, age, id) {
  if (name == "Hesam" && age > 23 && id.startsWith == "1050") {
    // do something
  }
}

//* Solution => create variables for this expressions
function hasAuth(name, age, id) {
  const is_hesam = name == "Hesam";
  const is_overage = age > 23;
  const is_id_valid = id.startsWith == "1050";
  if (is_hesam && is_overage && is_id_valid) {
    // do something
  }
}
