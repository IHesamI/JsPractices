//! sometimes the inlien operator is more obvious
function is_illegal(speed) {
  return is_speedMorethan100(speed) ? true : false;
}
function is_speedMorethan100(speed) {
  return speed > 100;
}

//* solution => avoid useless methods

function is_illegal(speed) {
  return speed > 100;
}
