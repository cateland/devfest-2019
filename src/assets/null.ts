const foo: String = null;
// => null
const bar: String = foo.substring(0, 5);
// => null is not an object (evaluating 'foo.substring')