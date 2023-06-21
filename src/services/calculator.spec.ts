import { it, describe, expect } from "vitest";
import {
  sum,
  multiplyTwoLists,
  calculateLinearCorrelation,
  calculateRegressionA,
  calculateRegressionB,
} from "./calculator";

describe("sum", () => {
  it("should return the correct value from the sum of the elements from a list", () => {
    // arrange
    const xi = [2, 4, 6];

    const expectedResult = 12;

    // act
    const currentResult = sum(xi);

    // assert
    expect(currentResult).toBe(expectedResult);
  });
});

describe("multiplication", () => {
  it("should return the correct multiplication of two lists elements", () => {
    // arrange
    const xi = [3, 6, 9];
    const yi = [7, 12, 17];

    const expectedResult = [21, 72, 153];

    // act
    const currentResult = multiplyTwoLists(xi, yi);

    // assert
    expect(currentResult).toEqual(expectedResult);
  });
});

// Linear correlation and regression tests

const tolerance = 0.1;
const n = 12;

const xi = [60, 58, 73, 51, 54, 75, 48, 72, 75, 83, 62, 52];
const yi = [80, 62, 70, 83, 62, 92, 79, 88, 54, 82, 64, 69];

describe("linear correlation", () => {
  it("should return the correct value for rxy", () => {
    // arrange

    const expectedResult = 0.169;

    // act

    const currentResult = calculateLinearCorrelation(n, xi, yi);

    // assert

    expect(Math.abs(currentResult - expectedResult)).toBeLessThanOrEqual(
      expectedResult * tolerance
    );
  });
});

describe("linear regression", () => {
  it("should return the correct value for regression A", () => {
    // arrange

    const expectedResult = 0.173;

    // act

    const currentResult = calculateRegressionA(n, xi, yi);

    // assert

    expect(Math.abs(currentResult - expectedResult)).toBeLessThanOrEqual(
      expectedResult * tolerance
    );
  });
  it("should return the correct value for regression B", () => {
    // arrange

    const expectedResult = 62.75;

    // act
    const currentResult = calculateRegressionB(n, xi, yi);

    // assert

    expect(Math.abs(currentResult - expectedResult)).toBeLessThanOrEqual(
      expectedResult * tolerance
    );
  });
});
