import { sum } from "../sum";

test("this function will do sum for us", () => {
  const result = sum(3, 4);

  //Assertion
  expect(result).toBe(7);
});
