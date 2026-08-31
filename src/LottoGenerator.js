import { Random } from '@woowacourse/mission-utils';
import Lotto from "./Lotto.js";
import { WINNING_NUMBER_COUNT, NUMBER_MIN, NUMBER_MAX, TICKET_PRICE } from "./constants/Enum.js";

class LottoGenerator{
  static generate(purchaseCost){
    const myLotto = new Array();
    const quantity = purchaseCost/TICKET_PRICE;
    
    for ( let i = 0; i< quantity; i++){
      const temp = new Lotto(Random.pickUniqueNumbersInRange(NUMBER_MIN, NUMBER_MAX, WINNING_NUMBER_COUNT).sort((a,b)=>a-b));
      myLotto.push(temp);
    }

    return myLotto;
  }
}
export default LottoGenerator;