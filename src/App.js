import { Console } from '@woowacourse/mission-utils';
import InputManager from './InputManager/InputManager.js';
import OutputView from './view/OutputView.js';
import Lotto from './Lotto.js';
import LottoNumberParser from './parser/LottoNumberParser.js';
import Validator from './Validator.js';
import { TICKET_PRICE } from './constants/Enum.js';
import LottoGenerator from './LottoGenerator.js';

class App {
  async run() {
    const purchaseCost = await this.inputPCUntilValid();
    const purchaseQuantity = Number(purchaseCost) / TICKET_PRICE;
    const myLotto = LottoGenerator.generate(purchaseQuantity);
    OutputView.printPurchaseMessage(purchaseQuantity);
    OutputView.printMyLotto(myLotto);

    const winningLotto = await this.inputWNUntilValid();

    const bonusNumber = await this.inputBNUntilValid(winningLotto);



  }


  //유효할 때까지 입력받기
  async inputPCUntilValid() {
    while (true) {
      try {
        const input = await InputManager.inputPurchaseCost();
        return Validator.validatePurchaseCostInput(input);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async inputWNUntilValid() {
    while (true) {
      try {
        const input = await InputManager.inputWinningNumber();
        const numbers = LottoNumberParser.parse(input);

        return new Lotto(numbers);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async inputBNUntilValid(winningLotto) {
    while (true) {
      try {
        const input = await InputManager.inputBonusNumber();
        return Validator.validateBonusNumberInput(input, winningLotto.getNumbers(), );
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}

export default App;
