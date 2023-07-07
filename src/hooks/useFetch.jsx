import { useState, useEffect} from "react"

const useFetch = (url) => {
  const [dhabas, setDhaba] = useState([]);
  const [restaurants, setRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      url
    );
    const json = await response?.json();
    const cards = await json?.data?.cards;
    const cafe = await cards?.map((card) => card.data);

    setRestaurant(cafe);
    setDhaba(cafe);
  };

  const filterDhaba = (input) => {
    const filteredDhaba = restaurants.filter((dhaba) =>
      dhaba?.data?.name?.toLowerCase().includes(input?.toLowerCase())
    );

    setDhaba(filteredDhaba);
  };

  return {dhabas,filterDhaba}
}

export default useFetch;