import React from "react";
import Card from "../UI/Card";
import style from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import useAvailableMeals from "./Hook/use-meal";
import menuSushi1 from "../../assets/menu-sushi-1.png";
import menuSushi2 from "../../assets/menu-sushi-2.png";
import menuSushi3 from "../../assets/menu-sushi-3.png";
import menuSushi4 from "../../assets/menu-sushi-4.png";
import menuSushi5 from "../../assets/menu-sushi-5.png";
import menuSushi6 from "../../assets/menu-sushi-6.png";
import menuSushi7 from "../../assets/menu-sushi-7.png";
import menuSushi8 from "../../assets/menu-sushi-8.png";
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
  for (let i = 1; i <= 8; i++) {
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
            image={menuSushi1}
          />
          <MealItem
            key={meal2.id}
            name={meal2.name}
            description={meal2.description}
            price={meal2.price}
            id={meal2.id}
            image={menuSushi2}
          />
          <MealItem
            key={meal3.id}
            name={meal3.name}
            description={meal3.description}
            price={meal3.price}
            id={meal3.id}
            image={menuSushi3}
          />
          <MealItem
            key={meal4.id}
            name={meal4.name}
            description={meal4.description}
            price={meal4.price}
            id={meal4.id}
            image={menuSushi4}
          />
          <MealItem
            key={meal5.id}
            name={meal5.name}
            description={meal5.description}
            price={meal5.price}
            id={meal5.id}
            image={menuSushi5}
          />
          <MealItem
            key={meal6.id}
            name={meal6.name}
            description={meal6.description}
            price={meal6.price}
            id={meal6.id}
            image={menuSushi6}
          />
          <MealItem
            key={meal7.id}
            name={meal7.name}
            description={meal7.description}
            price={meal7.price}
            id={meal7.id}
            image={menuSushi7}
          />
          <MealItem
            key={meal8.id}
            name={meal8.name}
            description={meal8.description}
            price={meal8.price}
            id={meal8.id}
            image={menuSushi8}
          />
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
