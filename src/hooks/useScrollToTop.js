import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Ensure the scroll position is set to the top immediately
    window.scrollTo(0, 0);
  }, [pathname]);
};

export default useScrollToTop;
