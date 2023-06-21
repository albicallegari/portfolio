import React from "react";
import styles from "./FoodChip.module.scss";
import { FoodChipProps } from "./FoodChip.models";

const FoodChip = ({ element, onDelete }: FoodChipProps) => {
  return (
    <div className={styles.foodChip}>
      <p>{element.label}</p>
      <img src={element.src} alt={element.id} />
      <button onClick={() => onDelete(element)}>X</button>
    </div>
  );
};

export default FoodChip;
