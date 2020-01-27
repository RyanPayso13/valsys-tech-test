import * as utils from "./utils";

describe("Utilities", () => {
  const facts = [
    {
      period: 2017,
      value: 18536402502.576
    },
    {
      period: 2020,
      value: 18953376792
    },
    {
      period: 2018,
      value: 21025200000
    }
  ];

  it("should sort the facts by period ASC", () => {
    const sorted = utils.sortFacts(facts);
    expect(sorted.length).toEqual(3);
    expect(sorted[0].period).toBe(2017);
    expect(sorted[1].period).toBe(2018);
    expect(sorted[2].period).toBe(2020);
  });
});
