import { Random } from '@woowacourse/mission-utils';
import LottoGenerator from '../src/LottoGenerator.js';

describe('LottoGenerator 테스트', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('구매 수량만큼 Lotto 객체를 생성한다.', () => {
    jest.spyOn(Random, 'pickUniqueNumbersInRange')
      .mockReturnValue([1, 2, 3, 4, 5, 6]);

    const lottos = LottoGenerator.generate(3);

    expect(lottos).toHaveLength(3);
    expect(lottos.every(lotto => lotto.getNumbers().length === 6)).toBe(true);
    expect(Random.pickUniqueNumbersInRange).toHaveBeenCalledTimes(3);
  });
});
