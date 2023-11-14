import React from "react";
import Card from "../UI/Card";
import style from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import useAvailableMeals from "./Hook/use-meal";
import ramen1 from "../../assets/Ramens/ramen-1.png";
import ramen2 from "../../assets/Ramens/ramen-2.png";
import ramen3 from "../../assets/Ramens/ramen-3.png";
import ramen4 from "../../assets/Ramens/ramen-4.png";
import ramen5 from "../../assets/Ramens/ramen-5.png";
import ramen6 from "../../assets/Ramens/ramen-6.png";
import ramen7 from "../../assets/Ramens/ramen-7.png";
import ramen8 from "../../assets/Ramens/ramen-8.png";
const AvailableMeals = () => {
  const { meals, isLoading, httpError } = useAvailableMeals(
    "https://react-data-36aa6-default-rtdb.firebaseio.com/meals.json"
  );

  // If Loading is true we will not execute further below but instead return this jsx
  if (isLoading) {
    return (
      <section className={style.MealIsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  // If there is an error fetching the details then will not execute further below but instead return this jsx
  if (httpError) {
    return (
      <section className={style.MealError}>
        <p>{httpError}</p>
      </section>
    );
  }

  // seriel wise filtering data from one point to another point
  const arr = [];
  for (let i = 9; i <= 16; i++) {
    let a = meals.findIndex((meal) => meal.id === `m${i}`);
    arr.push(meals[a]);
  }
  const [meal1, meal2, meal3, meal4, meal5, meal6, meal7, meal8] = arr;

  return (
    <section className={style.meals}>
      <Card>
        <ul>
          <MealItem
            key={meal1.id}
            name={meal1.name}
            description={meal1.description}
            price={meal1.price}
            id={meal1.id}
            image={ramen1}
          />
          <MealItem
            key={meal2.id}
            name={meal2.name}
            description={meal2.description}
            price={meal2.price}
            id={meal2.id}
            image={ramen2}
          />
          <MealItem
            key={meal3.id}
            name={meal3.name}
            description={meal3.description}
            price={meal3.price}
            id={meal3.id}
            image={ramen3}
          />
          <MealItem
            key={meal4.id}
            name={meal4.name}
            description={meal4.description}
            price={meal4.price}
            id={meal4.id}
            image={ramen4}
          />
          <MealItem
            key={meal5.id}
            name={meal5.name}
            description={meal5.description}
            price={meal5.price}
            id={meal5.id}
            image={ramen5}
          />
          <MealItem
            key={meal6.id}
            name={meal6.name}
            description={meal6.description}
            price={meal6.price}
            id={meal6.id}
            image={ramen6}
          />
          <MealItem
            key={meal7.id}
            name={meal7.name}
            description={meal7.description}
            price={meal7.price}
            id={meal7.id}
            image={ramen7}
          />
          <MealItem
            key={meal8.id}
            name={meal8.name}
            description={meal8.description}
            price={meal8.price}
            id={meal8.id}
            image={ramen8}
          />
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
