import { NUMBER_MAX, NUMBER_MIN, TICKET_PRICE, WINNING_NUMBER_COUNT } from './Enum.js';

const ERROR_MESSAGES = {
  PURCHASE_COST_NOT_POSITIVE_NUM: '[ERROR] : 구입금액은 양수만 입력할 수 있습니다.',
  PURCHASE_COST_NOT_DIVISIBLE: `[ERROR] : 구입금액은 ${TICKET_PRICE}로 나누어 떨어져야 합니다.`,
  PURCHASE_COST_TOO_SMALL: `[ERROR] : 구입금액은 최소 ${TICKET_PRICE} 이상이여야 합니다.`,
  WINNING_NUMBER_NOT_SIX: `[ERROR] : 당첨 번호는 ${WINNING_NUMBER_COUNT}개여야 합니다.`,
  NUMBER_NOT_NUMBER: '[ERROR] : 로또 번호는 숫자여야 합니다.',
  NUMBER_NOT_IN_RANGE: `[ERROR] : 로또 번호는 ${NUMBER_MIN}부터 ${NUMBER_MAX} 사이의 숫자여야 합니다.`,
  NUMBER_DUPLICATED: '[ERROR] : 로또 번호는 중복될 수 없습니다.',
  BONUS_NUMBER_DUPLICATED: '[ERROR] : 보너스 번호는 당첨 번호와 중복될 수 없습니다.',
};

export default ERROR_MESSAGES;
