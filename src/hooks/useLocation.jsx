import { useState, useEffect } from "react";

const useLocation = () => {
  const [latitude, setLatitude] = useState(29.2182644);
  const [longitude, setLongitude] = useState(79.5129767);

  useEffect(() => {
    const fetchLocation = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          (error) => {
            console.error("Geolocation is not supported by this browser");
          }
        );
      }
    };

    fetchLocation();
  }, []);

  return { latitude, longitude };
};

export default useLocation;
