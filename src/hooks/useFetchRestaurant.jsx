import {useState,useEffect} from "react"

const useFetchRestaurant = (id) => {
  const [name, setName] = useState("");
  const [baapDeta, setBaapDeta] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://instafood.onrender.com/api/menu?lat=29.2182644&lng=79.5129767&offset=15&restaurantId=${id}`
        );
        const { data } = await response.json();

        setName(data?.cards[0]?.card?.card?.info?.name);

        const baapDetaCards =
          data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards;
        setBaapDeta(Object.values(baapDetaCards));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  return {name,baapDeta}
};

export default useFetchRestaurant;
