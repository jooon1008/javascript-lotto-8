import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import Lotto from './Lotto.js';
import LottoNumberParser from './parser/LottoNumberParser.js';
import Validator from './Validator.js';
import { TICKET_PRICE } from './constants/Enum.js';
import LottoGenerator from './LottoGenerator.js';
import LottoGame from './LottoGame.js';

class App {
  async run() {
    const purchaseCost = await this.inputPCUntilValid();
    const myLottos = LottoGenerator.generate(purchaseCost);//금액에 맞춰 오름차순 로또 생성
    OutputView.printPurchaseInfo(myLottos);//구매한 로또 출력

    const winningLotto = await this.inputWNUntilValid();
    const bonusNumber = await this.inputBNUntilValid(winningLotto);

    const results = LottoGame.getResults(myLottos,winningLotto,bonusNumber);
    const rateOfReturn = LottoGame.getRateOfReturn(results,purchaseCost);
    OutputView.printGameResults(results, rateOfReturn);//게임결과, 수익률 출력
  }

  //유효할 때까지 입력받기
  async inputPCUntilValid() {
    while (true) {
      try {
        const input = await InputView.inputPurchaseCost();
        Validator.validatePurchaseCostInput(input);

        return Number(input);
      } catch (error) {
        OutputView.printError(error.message);
      }
    }
  }

  async inputWNUntilValid() {
    while (true) {
      try {
        const input = await InputView.inputWinningNumber();
        const numbers = LottoNumberParser.parse(input);

        return new Lotto(numbers);
      } catch (error) {
        OutputView.printError(error.message);
      }
    }
  }

  async inputBNUntilValid(winningLotto) {
    while (true) {
      try {
        const input = await InputView.inputBonusNumber();
        Validator.validateBonusNumberInput(input, winningLotto.getNumbers());

        return Number(input);
      } catch (error) {
        OutputView.printError(error.message);
      }
    }
  }
}

export default App;
