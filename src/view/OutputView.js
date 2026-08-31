import MESSAGES from "./Messages.js";
import {Console} from '@woowacourse/mission-utils';
import {RANK} from '../constants/Enum.js';

class OutputView{

  static printPurchaseInfo(myLottos){
    this.printPurchaseMessage(myLottos.length);
    this.printMyLotto(myLottos);
  }

  static printGameResults(results, rateOfReturn){
    this.printResult(results);
    this.printRateOfReturn(rateOfReturn);
  }

  static printPurchaseMessage(quantity){
    Console.print(MESSAGES.PURCHASED_MSG(quantity));
  }

  static printMyLotto(myLottos){
    for (const lotto of myLottos){
      Console.print(`[${lotto.getNumbers().join(', ')}]`);
    }
  }

  static printResult(results){
    Console.print(MESSAGES.RESULT_MSG);
    Console.print(MESSAGES.FIFTH_RESULT + `${results[RANK.FIFTH]}개`);
    Console.print(MESSAGES.FOURTH_RESULT + `${results[RANK.FOURTH]}개`);
    Console.print(MESSAGES.THIRD_RESULT + `${results[RANK.THIRD]}개`);
    Console.print(MESSAGES.SECOND_RESULT + `${results[RANK.SECOND]}개`);
    Console.print(MESSAGES.FIRST_RESULT + `${results[RANK.FIRST]}개`);
  }

  static printRateOfReturn(rateOfReturn){
    const formattedRate = rateOfReturn.toLocaleString('ko-KR', {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });

    Console.print(MESSAGES.RATE_OF_RETURN_MSG(formattedRate));
  }

  static printError(message){
    Console.print(message);
  }

}
export default OutputView;