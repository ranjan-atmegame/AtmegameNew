import { useState, useEffect } from "react";

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setDeviceType(mediaQuery.matches ? "mobile" : "desktop");

    const handleDeviceChange = (event) => {
      setDeviceType(event.matches ? "mobile" : "desktop");
    };

    mediaQuery.addListener(handleDeviceChange);

    return () => {
      mediaQuery.removeListener(handleDeviceChange);
    };
  }, []);

  return deviceType;
};

export default useDeviceType;
