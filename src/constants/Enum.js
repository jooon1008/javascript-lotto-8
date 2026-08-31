export const TICKET_PRICE = 1000;
export const NUMBER_MIN = 1;
export const NUMBER_MAX = 45;
export const WINNING_NUMBER_COUNT = 6;

export const RANK = {
  FIRST : 0,
  SECOND : 1,
  THIRD : 2,
  FOURTH : 3,
  FIFTH : 4
};

export const PRIZE = {
  FIRST : 2000000000,
  SECOND : 30000000,
  THIRD : 1500000,
  FOURTH : 50000,
  FIFTH : 5000
};

export const RANK_RULE = [
  {rank: RANK.FIRST, requiredCount: 6 },
  {rank: RANK.SECOND, requiredCount: 5, bonusRequired: true },
  {rank: RANK.THIRD, requiredCount: 5 },
  {rank: RANK.FOURTH, requiredCount: 4 },
  {rank: RANK.FIFTH, requiredCount: 3 },
];
