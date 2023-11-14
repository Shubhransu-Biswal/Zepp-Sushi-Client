import React from "react";
import AvailableMealsTwo from "../../componenets/Meals/AvailableMealsTwo";
import style from "./MealsPageTwo.module.css";

const MealsPageTwo = () => {
  return (
    <div className={style.contain}>
      <AvailableMealsTwo />
    </div>
  );
};

export default MealsPageTwo;
