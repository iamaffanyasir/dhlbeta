import { useState, useEffect } from 'react';

const useDeviceDetect = () => {
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      // Check both actual dimensions and CSS viewport dimensions
      const width = window.innerWidth || document.documentElement.clientWidth;
      // const height = window.innerHeight || document.documentElement.clientHeight;
      
      // Target devices around 412x915 with some flexibility for browser inspection
      setIsMobileDevice(width <= 412);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, []);

  return isMobileDevice;
};

export default useDeviceDetect;
