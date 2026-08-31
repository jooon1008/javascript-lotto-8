import { RANK, PRIZE, RANK_RULE } from "./constants/Enum.js";

class LottoGame{
  static getResults(myLottos,winningLotto,bonusNumber){
    const results = new Array(Object.keys(RANK).length).fill(0);

    for ( const lotto of myLottos ){
      const count = this.countMatches(lotto.getNumbers(), winningLotto.getNumbers());
      const hasBounusNumber = lotto.hasBonusNumber(bonusNumber);

      const rank = this.getRank(count,hasBounusNumber);
      if( rank !== null) results[rank]++;
    }

    return results;
  }

  static getRank(count, hasBounusNumber){
    const rule = RANK_RULE.find(({requiredCount, bonusRequired})=> count === requiredCount && (hasBounusNumber || !bonusRequired));
    if ( rule ) return rule.rank;
    return null;
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
