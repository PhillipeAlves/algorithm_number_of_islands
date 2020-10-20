const getNumberOfIslands = require("./index");

test("The function getNumberOfIslands exists", () => {
  expect(typeof getNumberOfIslands).toEqual("function");
});

test("Given a 5 X 5 2D grid map of '1's (land) and '0's (water), return the number of islands.", () => {
  expect(
    getNumberOfIslands([
      [0, 1, 0, 1, 0],
      [0, 0, 1, 1, 1],
      [1, 0, 0, 1, 0],
      [0, 1, 1, 0, 0],
      [1, 0, 1, 0, 1],
    ])
  ).toEqual(6);
});

test("Given a 7 X 7 2D grid map of '1's (land) and '0's (water), return the number of islands.", () => {
  expect(
    getNumberOfIslands([
      [0, 1, 0, 1, 0, 1, 0],
      [0, 0, 1, 1, 1, 1, 1],
      [1, 0, 0, 1, 0, 0, 0],
      [0, 1, 1, 0, 0, 1, 1],
      [1, 0, 1, 0, 1, 0, 1],
      [0, 0, 0, 1, 0, 0, 0],
      [0, 1, 1, 0, 0, 0, 0],
    ])
  ).toEqual(9);
});
