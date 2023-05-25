function increment(num) {
  if (typeof num !== "number") {
    throw new Error(`Expected number but got: ${typeof num}`);
  }
  return num + 1;
}

//This works as expected because the data type passed to the function is a number
try {
  var result = increment(8);
  console.log(result);
} catch (err) {
  console.log(err.message);
}

// This throws an error because the data type passed to the function is not a number
try {
  var result = increment("this is a string baby");
  console.log(result);
} catch (err) {
  console.log(err.message);
}
