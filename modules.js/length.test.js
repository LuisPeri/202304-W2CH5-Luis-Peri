import { arrayLength } from "./length.js";

export default arrayLength;
describe("given a length function", () => {
  describe("when it receives juan lucas and fernando", () => {
    test("then it should return 3", () => {
      const array = ["juan", "lucas", "fernando"];
      const expectedResult = 3;
      const result = 3;
      expect(result).toBe(expectedResult);
    });
  });
});
