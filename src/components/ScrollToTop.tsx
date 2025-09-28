import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // change to "smooth" if you want smooth scroll
    });
  }, [location.pathname]);

  return null;
};

export default ScrollToTop;
