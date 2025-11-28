import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import type { FC } from 'react'; // Optional: for explicit typing

const ScrollToTop: FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;