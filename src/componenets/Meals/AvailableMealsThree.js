import React from "react";
import Card from "../UI/Card";
import style from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import useAvailableMeals from "./Hook/use-meal";
import drink1 from "../../assets/Drinks/drink1.png";
import drink2 from "../../assets/Drinks/drink2.png";
import drink3 from "../../assets/Drinks/drink3.png";
import drink4 from "../../assets/Drinks/drink4.png";
import drink5 from "../../assets/Drinks/drink5.png";
import drink6 from "../../assets/Drinks/drink6.png";
import drink7 from "../../assets/Drinks/drink7.png";
import drink8 from "../../assets/Drinks/drink8.png";
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
  for (let i = 17; i <= 24; i++) {
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
            image={drink1}
          />
          <MealItem
            key={meal2.id}
            name={meal2.name}
            description={meal2.description}
            price={meal2.price}
            id={meal2.id}
            image={drink2}
          />
          <MealItem
            key={meal3.id}
            name={meal3.name}
            description={meal3.description}
            price={meal3.price}
            id={meal3.id}
            image={drink3}
          />
          <MealItem
            key={meal4.id}
            name={meal4.name}
            description={meal4.description}
            price={meal4.price}
            id={meal4.id}
            image={drink4}
          />
          <MealItem
            key={meal5.id}
            name={meal5.name}
            description={meal5.description}
            price={meal5.price}
            id={meal5.id}
            image={drink5}
          />
          <MealItem
            key={meal6.id}
            name={meal6.name}
            description={meal6.description}
            price={meal6.price}
            id={meal6.id}
            image={drink6}
          />
          <MealItem
            key={meal7.id}
            name={meal7.name}
            description={meal7.description}
            price={meal7.price}
            id={meal7.id}
            image={drink7}
          />
          <MealItem
            key={meal8.id}
            name={meal8.name}
            description={meal8.description}
            price={meal8.price}
            id={meal8.id}
            image={drink8}
          />
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
