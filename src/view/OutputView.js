import MESSAGES from "./Messages.js";
import {Console} from '@woowacourse/mission-utils';
import {RANK} from '../constants/Enum.js';

class OutputView{
  static printPurchaseMessage(quantity){
    Console.print(MESSAGES.PURCHASED_MSG(quantity));
  }
  static printMyLotto(myLotto){
    for (const lotto of myLotto){
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
    Console.print(MESSAGES.RATE_OF_RETURN_MSG(rateOfReturn));
  }

}
export default OutputView;