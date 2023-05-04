const arrayLength = require("./length.test.js")

test("returns dimension of an array", () => {
  const arrayExample = ["dark", "negro", "black", "obscure"];
  expect(arrayLength arrayExample).toBe(3);
});
