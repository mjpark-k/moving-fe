import classNames from 'classnames';

import UserProfile from './UserProfile';
import Button from '../btn/Button';
import Chip from '../chip/Chip';

import { useMedia } from '../../lib/function/useMediaQuery';
import {
  getNotificationDate,
  formatCurrency,
  getChips,
} from '../../lib/function/utils';
import { ChipType, UserProfileProps } from '../../types/cardTypes';

import style from './UserCard.module.css';

import writing from '../../assets/icons/ic_writing_medium.svg';
import { useEffect, useState } from 'react';

export default function UserCard({
  sendCostBtn: sendCost,
  rejectCostBtn: rejectCost,
  type,
  list,
  count = 6,
}: UserProfileProps) {
  const isPc = useMedia().pc;

  const chipList: ChipType[] = [];

  const [time, setTime] = useState<string | undefined>();

  useEffect(() => {
    const updateTime = () => {
      const date = list.createAt || list.updatedAt;
      if (date) {
        const currentTime = getNotificationDate(date, 'noSec');
        setTime(currentTime);
      }
    };

    updateTime();

    const intervalId = setInterval(updateTime, 60000);

    return () => {
      clearInterval(intervalId); // 컴포넌트 언마운트 시 인터벌 제거
    };
  }, [list.createAt, list.updatedAt]);

  if (!list) {
    return <div className={style.cardError}>데이터가 없습니다.</div>;
  }

  if (type === 'confirmedCost') {
    chipList.push('CONFIRM');
  }

  if (list.isConfirmed) chipList.push('CONFIRM');
  if (list.movingType) chipList.push(list.movingType);
  list.serviceType?.map((type) => chipList.push(type));
  if (list.isAssigned) chipList.push('ASSIGN');

  const chips = getChips(chipList, count);

  return (
    <div
      className={classNames(style.card, {
        [style.cardRType]: type === 'review',
      })}
    >
      <div className={style.top}>
        {/* 칩 */}
        <div className={style.chipBox}>
          {chips
            .map((row) => row.sort((a, b) => (a < b ? -1 : 1)))
            .map((row, rowIndex) => (
              <div key={rowIndex} className={style.chip}>
                {row.map((chip, chipIndex) => (
                  <Chip key={chipIndex} type={chip} />
                ))}
              </div>
            ))}
        </div>
        {type !== 'review' ? (
          <div className={style.createAt}>
            {(list.createAt || list.updatedAt) && time}
          </div>
        ) : (
          <div className={style.createAtRType}>{list.createAt && time}</div>
        )}
      </div>
      <UserProfile type={type} list={list} />
      {list.comment && type == 'receive' && (
        <div className={style.labelBox}>
          <div className={style.label}>요청사항</div>
          {list.comment}
        </div>
      )}
      {type === 'receive' && (
        <div className={style.btnBox}>
          <Button
            text='견적 보내기'
            btnStyle='solid448pxBlue300'
            src={writing}
            onClick={sendCost}
          />
          {list.isAssigned && (
            <Button
              text='반려'
              btnStyle='outlined448pxBlue300'
              onClick={rejectCost}
            />
          )}
        </div>
      )}

      {(type === 'allCost' || type === 'confirmedCost') && (
        <div className={style.cost}>
          <span className={style.text}>견적 금액 </span>{' '}
          {list.price && formatCurrency(list.price)}
        </div>
      )}

      {type === 'review' && (
        <>
          <div className={style.review}>{list.content}</div>
          {!isPc && (
            <div className={style.createAtRTypeNoPc}>
              {list.createAt && time}
            </div>
          )}
        </>
      )}
    </div>
  );
}
