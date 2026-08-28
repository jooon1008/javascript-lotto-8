import { Random } from '@woowacourse/mission-utils';
import Lotto from "./Lotto.js";
import { WINNING_NUMBER_COUNT, NUMBER_MIN, NUMBER_MAX } from "./constants/Enum.js";

class LottoGenerator{
  static generate(quantity){
    const myLotto = new Array();
    
    for ( let i = 0; i< quantity; i++){
      const temp = new Lotto(Random.pickUniqueNumbersInRange(NUMBER_MIN, NUMBER_MAX, WINNING_NUMBER_COUNT));
      myLotto.push(temp);
    }

    return myLotto;
  }
}
export default LottoGenerator;