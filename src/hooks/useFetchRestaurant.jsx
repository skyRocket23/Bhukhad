import {useState,useEffect} from "react"

const useFetchRestaurant = (id) => {
  const [name, setName] = useState("");
  const [imageId,setImageId] = useState("");

  const [baapDeta, setBaapDeta] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://instafood.onrender.com/api/menu?lat=12.9715987&lng=77.5945627&offset=15&restaurantId=${id}`
        );
        const { data } = await response.json();

        setName(data?.cards[0]?.card?.card?.info?.name);
        setImageId(data?.cards[0]?.card?.card?.info?.cloudinaryImageId);

        const baapDetaCards =
          data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards;
        setBaapDeta(Object.values(baapDetaCards));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  return {name,imageId,baapDeta}
};

export default useFetchRestaurant;
