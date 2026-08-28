import { TICKET_PRICE, NUMBER_MAX, NUMBER_MIN } from './constants/Enum.js';
import ERROR_MESSAGES from './constants/ErrorMessages.js';

class Validator {
  static validatePurchaseCostInput(input) {
    const number = Number(input);

    if (!this.isNum(input)) {
      throw new Error(ERROR_MESSAGES.PURCHASE_COST_NOT_POSITIVE_NUM);
    }
    if (number < TICKET_PRICE) {
      throw new Error(ERROR_MESSAGES.PURCHASE_COST_TOO_SMALL);
    }
    if (number % TICKET_PRICE !== 0) {
      throw new Error(ERROR_MESSAGES.PURCHASE_COST_NOT_DIVISIBLE);
    }

    return number;
  }

  static validateBonusNumberInput(input, winningNumbers = []) {
    const number = Number(input);

    if (!this.isNum(input)) {
      throw new Error(ERROR_MESSAGES.NUMBER_NOT_NUMBER);
    }
    if (!this.isInRange(number)) {
      throw new Error(ERROR_MESSAGES.NUMBER_NOT_IN_RANGE);
    }
    if (winningNumbers.includes(number)) {
      throw new Error(ERROR_MESSAGES.BONUS_NUMBER_DUPLICATED);
    }

    return number;
  }

  static isNum(input) {
    return /^\d+$/.test(input);
  }

  static isInRange(number) {
    return number >= NUMBER_MIN && number <= NUMBER_MAX;
  }
}

export default Validator;
