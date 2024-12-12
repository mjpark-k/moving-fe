import { useMediaQuery } from 'react-responsive';

export function useIsPc() {
  return useMediaQuery({ query: '(min-width: 1200px)' });
}
export function useIsTablet() {
  return useMediaQuery({ query: '(min-width: 744px) and (max-width: 1199px)' });
}
export function useIsMobile() {
  return useMediaQuery({ query: '(max-width: 743px)' });
}

export function useMedia() {
  const pc = useMediaQuery({ query: '(min-width: 1200px)' });
  const tablet = useMediaQuery({
    query: '(min-width: 744px) and (max-width: 1199px)',
  });
  const mobile = useMediaQuery({ query: '(max-width: 743px)' });

  const receivedMobile = useMediaQuery({
    query: '(min-width: 421px) and (max-width: 540px)',
  });

  const receivedMobileSecond = useMediaQuery({ query: '(max-width: 420px)' });

  return { pc, tablet, mobile, receivedMobile, receivedMobileSecond };
}
