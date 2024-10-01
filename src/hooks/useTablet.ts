import { useState, useEffect } from "react";
import { getOnlyDigits } from "../utils/format";
import breakpoints from "../styles/breakpoints";

export const useTablet = (): boolean => {
  const [isTablet, setIsTablet] = useState(null);

  useEffect(() => {
    const handleResize = () =>
      setIsTablet(
        window.innerWidth <= Number(getOnlyDigits(breakpoints.tablet))
      );

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isTablet;
};
