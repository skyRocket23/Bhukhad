import { useState, useEffect } from "react";

const useLocation = () => {
  const [latitude, setLatitude] = useState(13.0827);
  const [longitude, setLongitude] = useState(80.2707);

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
