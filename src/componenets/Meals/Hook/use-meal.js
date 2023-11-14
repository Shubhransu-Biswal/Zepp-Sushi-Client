import { useEffect, useState } from "react";
const useAvailableMeals = (url) => {
  // All states
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  // fetching Meals (a side effect so inside useEffect)
  useEffect(() => {
    // using anohter function bcuz cant make the main useEffect function to async bcuz of cleanup function has to be synchronus
    const fetchMeals = async () => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Something went wrong...");
      }
      const data = await response.json();

      const loadMeals = [];
      for (const key in data) {
        loadMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMeals(loadMeals);
      setIsLoading(false);
    };
    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, [url]);

  return {
    meals,
    isLoading,
    httpError,
  };
};

export default useAvailableMeals;
