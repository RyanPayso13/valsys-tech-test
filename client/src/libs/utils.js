export const sortFacts = facts =>
  [...facts].sort((a, b) => b.period - a.period);
