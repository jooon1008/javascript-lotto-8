import { WINNING_NUMBER_COUNT } from './constants/Enum.js';
import ERROR_MESSAGES from './constants/ErrorMessages.js';
import Validator from './Validator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = [...numbers];
  }

  #validate(numbers) {
    this.#validateNumsCount(numbers);
    this.#validateNumsIsInRange(numbers);
    this.#validateDup(numbers);
  }

  #validateNumsCount(numbers) {
    if (numbers.length !== WINNING_NUMBER_COUNT) {
      throw new Error(ERROR_MESSAGES.WINNING_NUMBER_NOT_SIX);
    }
  }

  #validateNumsIsInRange(numbers) {
    numbers.forEach(number => {
      if (!Number.isInteger(number) || !Validator.isInRange(number)) {
        throw new Error(ERROR_MESSAGES.NUMBER_NOT_IN_RANGE);
      }
    });
  }

  #validateDup(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(ERROR_MESSAGES.NUMBER_DUPLICATED);
    }
  }

  getNumbers() {
    return [...this.#numbers];
  }

  hasBonusNumber(bonusNumber){
    return this.#numbers.includes(bonusNumber);
  }
}

export default Lotto;
