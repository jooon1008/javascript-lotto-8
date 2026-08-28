import Validator from '../Validator.js';
import ERROR_MESSAGES from '../constants/ErrorMessages.js';

class LottoNumberParser {
  static parse(input) {
    const values = input.split(',').map(value => value.trim());

    values.forEach(value => {
      if (!Validator.isNum(value)) {
        throw new Error(ERROR_MESSAGES.NUMBER_NOT_NUMBER);
      }
    });

    return values.map(Number);
  }
}

export default LottoNumberParser;
