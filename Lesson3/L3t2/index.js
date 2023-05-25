function parseJSON(data) {
  return JSON.parse(data);
}

try {
  const result = parseJSON("this is a string");
  console.log(result);
} catch (err) {
  console.log(err.message);
}
