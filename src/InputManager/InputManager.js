import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../constants/Messages.js';

class InputManager {
  static async inputPurchaseCost() {
    return await Console.readLineAsync(MESSAGES.INPUT_PURCHASE_COST_MSG);
  }

  static async inputWinningNumber() {
    return await Console.readLineAsync(MESSAGES.INPUT_WINNING_NUMBER_MSG);
  }

  static async inputBonusNumber() {
    return await Console.readLineAsync(MESSAGES.INPUT_BONUS_NUMBER_MSG);
  }
}

export default InputManager;
