import MESSAGES from "./Messages.js";
import {Console} from '@woowacourse/mission-utils';

class OutputView{
  static printPurchaseMessage(quantity){
    Console.print(MESSAGES.PURCHASED_MSG(quantity));
  }
  static printMyLotto(myLotto){
    for (const lotto of myLotto){
      Console.print(`[${lotto.getNumbers().join(', ')}]`);
    }
  }

}
export default OutputView;