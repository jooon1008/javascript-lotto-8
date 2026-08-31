import Validator from '../src/Validator.js';

describe('Validator 테스트', () => {
  describe('구매 금액 검증', () => {
    test('유효한 구매 금액은 예외를 발생시키지 않는다.', () => {
      expect(() => {
        Validator.validatePurchaseCostInput('8000');
      }).not.toThrow();
    });

    test('숫자가 아닌 구매 금액은 예외가 발생한다.', () => {
      expect(() => Validator.validatePurchaseCostInput('1000원')).toThrow('[ERROR]');
    });

    test('최소 금액보다 작은 구매 금액은 예외가 발생한다.', () => {
      expect(() => Validator.validatePurchaseCostInput('500')).toThrow('[ERROR]');
    });

    test('1000원 단위가 아닌 구매 금액은 예외가 발생한다.', () => {
      expect(() => Validator.validatePurchaseCostInput('1500')).toThrow('[ERROR]');
    });
  });

  describe('보너스 번호 검증', () => {
    test('유효한 보너스 번호는 예외를 발생시키지 않는다.', () => {
      expect(() => {
        Validator.validateBonusNumberInput('7', [1, 2, 3, 4, 5, 6]);
      }).not.toThrow();
    });

    test('숫자가 아닌 보너스 번호는 예외가 발생한다.', () => {
      expect(() => Validator.validateBonusNumberInput('abc')).toThrow('[ERROR]');
    });

    test('범위를 벗어난 보너스 번호는 예외가 발생한다.', () => {
      expect(() => Validator.validateBonusNumberInput('46')).toThrow('[ERROR]');
    });

    test('당첨 번호와 중복된 보너스 번호는 예외가 발생한다.', () => {
      expect(() => {
        Validator.validateBonusNumberInput('6', [1, 2, 3, 4, 5, 6]);
      }).toThrow('[ERROR]');
    });
  });
});
