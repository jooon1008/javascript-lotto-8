import { RANK , PRIZE} from "./constants/Enum.js";

class LottoGame{
  static getResults(myLottos,winningLotto,bonusNumber){
    const results = new Array(Object.keys(RANK).length).fill(0);

    for ( const lotto of myLottos ){
      const count = this.countMatches(lotto.getNumbers(), winningLotto.getNumbers());
      const isHasBonusNumber = lotto.hasBonusNumber(bonusNumber);

      if ( count === 6){
        results[RANK.FIRST]++;
      }
      else if (count === 5 && isHasBonusNumber){
        results[RANK.SECOND]++;
      }
      else if (count === 5 || (count === 4 && isHasBonusNumber)){
        results[RANK.THIRD]++;
      }
      else if (count === 4 || (count === 3 && isHasBonusNumber)){
        results[RANK.FOURTH]++;
      }
      else if (count === 3 || (count === 2 && isHasBonusNumber)){
        results[RANK.FIFTH]++;
      }
    }

    return results;
  }

  static countMatches(lotto, winningLotto){
    return lotto.filter((number)=> winningLotto.includes(number)).length;
  }
  static getRateOfReturn(results, purchaseCost){
    const profit = this.getProfit(results);
    return Number(((profit / purchaseCost) * 100 ).toFixed(1));
  }
  static getProfit(results){
    return (results[RANK.FIRST] * PRIZE.FIRST) +
    (results[RANK.SECOND] * PRIZE.SECOND) +
    (results[RANK.THIRD] * PRIZE.THIRD) +
    (results[RANK.FOURTH] * PRIZE.FOURTH) +
    (results[RANK.FIFTH] * PRIZE.FIFTH);
  }
}
export default LottoGame;
