import Lotto from '../src/Lotto.js';
import LottoGame from '../src/LottoGame.js';
import { PRIZE, RANK } from '../src/constants/Enum.js';

const winningLotto = new Lotto([1, 2, 3, 4, 5, 6]);

describe('LottoGame 테스트', () => {
  test('두 로또의 일치하는 번호 개수를 계산한다.', () => {
    expect(
      LottoGame.countMatches(
        [1, 2, 10, 11, 12, 13],
        winningLotto.getNumbers(),
      ),
    ).toBe(2);
  });

  test('로또별 당첨 등수를 계산한다.', () => {
    const myLottos = [
      new Lotto([1, 2, 3, 4, 5, 6]), // 1등
      new Lotto([1, 2, 3, 4, 5, 7]), // 2등: 보너스 7
      new Lotto([1, 2, 3, 4, 5, 8]), // 3등
      new Lotto([1, 2, 3, 4, 8, 9]), // 4등
      new Lotto([1, 2, 3, 8, 9, 10]), // 5등
      new Lotto([1, 2, 8, 9, 10, 11]), // 낙첨
    ];

    const results = LottoGame.getResults(myLottos, winningLotto, 7);

    expect(results).toEqual([1, 1, 1, 1, 1]);
  });

  test('등수별 당첨 금액을 합산한다.', () => {
    const results = [1, 1, 1, 1, 1];

    expect(LottoGame.getProfit(results)).toBe(
      PRIZE.FIRST +
      PRIZE.SECOND +
      PRIZE.THIRD +
      PRIZE.FOURTH +
      PRIZE.FIFTH,
    );
  });

  test('구매 금액 대비 수익률을 소수점 첫째 자리까지 계산한다.', () => {
    const results = [0, 0, 0, 0, 1];

    expect(LottoGame.getRateOfReturn(results, 8000)).toBe(62.5);
  });

  test('당첨 결과 배열의 등수 인덱스가 RANK 상수와 일치한다.', () => {
    expect(RANK.FIRST).toBe(0);
    expect(RANK.SECOND).toBe(1);
    expect(RANK.THIRD).toBe(2);
    expect(RANK.FOURTH).toBe(3);
    expect(RANK.FIFTH).toBe(4);
  });
});
