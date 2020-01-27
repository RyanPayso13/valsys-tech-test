export const sortFacts = facts =>
  [...facts].sort((a, b) => a.period - b.period);
