const MESSAGES = {
  INPUT_PURCHASE_COST_MSG : '구입금액을 입력해 주세요.\n',
  INPUT_WINNING_NUMBER_MSG : '\n당첨 번호를 입력해 주세요.\n',
  INPUT_BONUS_NUMBER_MSG : '\n보너스 번호를 입력해 주세요.\n',
  PURCHASED_MSG: quantity => `\n${quantity}개를 구매했습니다.`,
  
  RESULT_MSG: '\n당첨 통계\n---\n',
  FIFTH_RESULT: '3개 일치 (5,000원) - ',
  FOURTH_RESULT: '4개 일치 (50,000원) - ',
  THIRD_RESULT: '5개 일치 (1,500,000원) - ',
  SECOND_RESULT: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  FIRST_RESULT: '6개 일치 (2,000,000,000원) - ',
  RATE_OF_RETURN_MSG: rateOfReturn => `총 수익률은 ${rateOfReturn}%입니다.`,
};

export default MESSAGES;
