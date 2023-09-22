//! Problem => there is a variable that use so many times
function ShapeInfo(shape) {
  let info = shape.height * shape.width;
  console.log(info);

  info = 2 * (shape.height + shape.width);
  console.log(info);
}

//* Solution => use different vairables
function ShapeInfo(shape) {
  let perimeter = shape.height * shape.width;
  console.log(perimeter);

  let area = 2 * (shape.height + shape.width);
  console.log(area);
}
