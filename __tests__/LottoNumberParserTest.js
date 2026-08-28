import LottoNumberParser from '../src/parser/LottoNumberParser.js';

describe('LottoNumberParser 테스트', () => {
  test('쉼표로 구분된 문자열을 숫자 배열로 변환한다.', () => {
    expect(LottoNumberParser.parse('1, 2, 3, 4, 5, 6')).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('숫자가 아닌 값이 포함되면 예외가 발생한다.', () => {
    expect(() => LottoNumberParser.parse('1,2,a,4,5,6')).toThrow('[ERROR]');
  });

  test('빈 값이 포함되면 예외가 발생한다.', () => {
    expect(() => LottoNumberParser.parse('1,2,,4,5,6')).toThrow('[ERROR]');
  });
});
