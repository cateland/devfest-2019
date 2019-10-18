function toUpperCase(value) {
  return value.toUpperCase();
}

['value1', 'value2', 'value3'].map(toUpperCase);
// => ["VALUE1", "VALUE2", "VALUE3"]

[].map(toUpperCase);
// => []
