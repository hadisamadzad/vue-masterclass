import { evenOrOdd, multiply } from "@/playground.js";

describe("basic math", () => {
  it("add two numbers", () => {
    expect(1 + 2).toBe(3);
    expect(3 + 2).toBe(5);
  });
});

describe("eventOrOdd", () => {
  describe("when number is even", () => {
    it("indicates number is even", () => {
      expect(evenOrOdd(4)).toBe("Even");
    });
  });

  describe("when number is odd", () => {
    it("indicates number is odd", () => {
      expect(evenOrOdd(5)).toBe("Odd");
    });
  });

  describe("multiply", () => {
    it("multiplies two numbers", () => {
      expect(multiply(3, 2)).toBe(6);
    });
  });
});
