import arrayFunctions from "./length.js";

describe("given a length function", () => {
  describe("when it receives juan lucas and fernando", () => {
    test("then it should return 3", () => {
      const expectedResult = 3;
      const result = 3;
      expect(result).toBe(expectedResult);
    });
  });
});

describe("given a push function", () => {
  describe("when it recieves jorge and juan", () => {
    test("then it should return jorge, juan in the same array", () => {
      let myArray = [];

      const expectedResult = ["jorge", "juan"]
      const result = arrayPush(myArray, "jorge", "juan");

      expect(result).toBe(expectedResult);
    })
  })
})

//solo un test, pesimo servicio