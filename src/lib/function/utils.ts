import { ChipType } from '../../types/cardTypes';
import avatarBlue from '../../assets/images/img_avatar_blue_medium.svg';
import avatarGreen from '../../assets/images/img_avatar_green_medium.svg';
import avatarPink from '../../assets/images/img_avatar_pink_medium.svg';
import avatarPurple from '../../assets/images/img_avatar_purple_medium.svg';
import avatarYellow from '../../assets/images/img_avatar_yellow_medium.svg';

//기본 이미지 랜덤 표시시
export const checkImg = (img: any) => {
  const defaultImg: Record<number, string> = {
    1: avatarBlue,
    2: avatarGreen,
    3: avatarPink,
    4: avatarPurple,
    5: avatarYellow,
  };
  const randomImgKey = Math.floor(Math.random() * 5) + 1;

  if (img) return img;
  else return defaultImg[randomImgKey];
};

// 시간 변환
// type => yyyy. mm. dd / ss초 전 표시 x
// type X => yy. mm. dd / ss초 전 표시
export function getNotificationDate(inputDate: string | Date, type?: string) {
  const now = new Date();
  const date = new Date(inputDate);
  const difference = now.getTime() - date.getTime();
  const seconds = Math.floor(difference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  if (difference < 24 * 60 * 60 * 1000) {
    if (hours > 0) return `${hours}시간 전`;
    if (minutes > 0) return `${minutes}분 전`;
    if (!type) return `${seconds}초 전`;
    else return '방금';
  } else {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return type
      ? `${year}. ${month}. ${day}`
      : `${year.toString().slice(-2)}. ${month}. ${day}`;
  }
}

// 한국기준 금액 형식 출력
export function formatCurrency(
  cost: number | undefined | null,
  onlyNum?: boolean,
): string {
  if (typeof cost !== 'number' || isNaN(cost)) {
    return onlyNum ? '0' : '0원'; // 기본값 반환
  }

  const price = cost.toLocaleString('ko-KR');
  return onlyNum ? price : price + '원';
}

// 칩 배열 반환 함수
// ex )
// <div className={style.labelBox}>
// {chips.map((row, rowIndex) => (
//   <div key={rowIndex} className={style.label}>
//     {row.map((chip, chipIndex) => (
//       <Chip key={chipIndex} type={chip} />
//     ))}
//   </div>
// ))}
// </div>
export const getChips = (chipList: ChipType[], count: number) => {
  const chips: ChipType[][] = [];
  let k = 0;

  for (let i = 0; i < chipList.length / count; i++) {
    chips[i] = [];
    for (let j = k; j < k + count && j < chipList.length; j++) {
      chips[i].push(chipList[j]);
    }
    k += count;
  }
  return chips;
};

// api - undefined면 반환x
// Record<string, any>: 문자열을 키로, 어떤 값이든 허용하는 타입
export function getParams(queryParams: Record<string, any>) {
  const params = new URLSearchParams();

  Object.entries(queryParams).forEach(([key, value]) => {
    if (value !== undefined && value !== '') {
      // 배열이면 동일한 키로 반복 추가
      if (Array.isArray(value)) {
        value.forEach((v) => params.append(key, v));
      } else {
        params.append(key, value);
      }
    }
  });

  return params;
}

export const serviceTypeMapper: Record<string, string> = {
  SMALL: '소형이사',
  HOUSE: '가정이사',
  OFFICE: '사무실이사',
};

export const serviceRegionMapper: Record<string, string> = {
  SEOUL: '서울',
  GYEONGGI: '경기',
  INCHEON: '인천',
  GANGWON: '강원',
  CHUNGBUK: '충북',
  CHUNGNAM: '충남',
  SEJONG: '세종',
  DAEJEON: '대전',
  JEONBUK: '전북',
  JEONNAM: '전남',
  GWANGJU: '광주',
  GYEONGBUK: '경북',
  GYEONGNAM: '경남',
  DAEGU: '대구',
  ULSAN: '울산',
  BUSAN: '부산',
  JEJU: '제주',
};

// 제공 서비스 타입 번역(영 -> 한)
export const translateServiceType = (serviceType: string[]): string[] => {
  return serviceType.map(
    (type) => serviceTypeMapper[type] || '알 수 없는 유형',
  );
};

// 가능한 서비스 지역 번역(영 -> 한)
export const translateServiceRegion = (serviceRegion: string[]): string[] => {
  return (
    serviceRegion.map((region) => serviceRegionMapper[region]) ||
    '알 수 없는 지역'
  );
};

//한글에서 영어로 바꾸는 함수가 필요해서 만들었습니다.
export const serviceTypeReverseMapper: Record<string, string> = {
  소형이사: 'SMALL',
  가정이사: 'HOUSE',
  사무실이사: 'OFFICE',
};

//한글에서 영어로 바꾸는 함수가 필요해서 만들었습니다.
export const serviceRegionReverseMapper: Record<string, string> = {
  서울: 'SEOUL',
  경기: 'GYEONGGI',
  인천: 'INCHEON',
  강원: 'GANGWON',
  충북: 'CHUNGBUK',
  충남: 'CHUNGNAM',
  세종: 'SEJONG',
  대전: 'DAEJEON',
  전북: 'JEONBUK',
  전남: 'JEONNAM',
  광주: 'GWANGJU',
  경북: 'GYEONGBUK',
  경남: 'GYEONGNAM',
  대구: 'DAEGU',
  울산: 'ULSAN',
  부산: 'BUSAN',
  제주: 'JEJU',
};

// 제공 서비스 타입 번역(한 -> 양)
export const translateServiceReverseType = (
  serviceType: string[],
): string[] => {
  return serviceType.map(
    (type) => serviceTypeMapper[type] || '알 수 없는 유형',
  );
};

// 가능한 서비스 지역 번역(한 -> 영)
export const translateServiceReverseRegion = (
  serviceRegion: string,
): string => {
  return serviceRegionReverseMapper[serviceRegion];
};

export const translateServiceReverseRegionArray = (
  serviceRegion: string[],
): string[] => {
  return (
    serviceRegion.map((region) => serviceRegionReverseMapper[region]) ||
    '알 수 없는 지역'
  );
};

// 지역명 간소화 - 기사유저 받은 요청 페이지
export const simplifyAddress = (address: string): string => {
  const pattern =
    /^(서울|부산|대구|인천|광주|대전|울산|세종|제주|경기|강원|충북|충남|전북|전남|경북|경남|서울특별시|부산광역시|대구광역시|인천광역시|광주광역시|대전광역시|울산광역시|세종특별자치시|제주특별자치도|경상북도|경상남도|전라북도|전라남도|충청북도|충청남도|강원도|경기도)[^\s]*\s*([\uac00-\ud7af]+[시군구])/;

  const match = address.match(pattern);

  if (match) {
    let province = match[1];
    const city = match[2];

    province = province.replace(/특별자치시|광역시|특별자치도|도$/, '').trim();

    return `${province} ${city}`;
  }

  return address;
};
