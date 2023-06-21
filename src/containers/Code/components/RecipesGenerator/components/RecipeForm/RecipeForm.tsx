import React, { useMemo, useState } from "react";
import styles from "./RecipeForm.module.scss";
import { RecipeFormProps } from "./RecipeForm.models";
import { useDispatch } from "react-redux";
import { getFoodModel } from "../../RecipesGenerator.utils";
import { TextField } from "@mui/material";
import { hideDialog } from "../../../../../../store/dialogSlice/dialogSlice";
import { getTranslatedLabel } from "../../../../../../common/labels/utils";

const RecipeForm = ({ foodName, foodLogo, onSubmit }: RecipeFormProps) => {
  const dispatch = useDispatch();
  const [gramsValue, setGramsValue] = useState<string>();
  const [litresValue, setLitresValue] = useState<string>();
  const [kindOfValue, setKindOfValue] = useState<string>();

  const currentFoodModel = useMemo(() => {
    if (foodName) {
      const model = getFoodModel(foodName);
      if (model[0] === "litres") {
        if (model[1] === "kindOf") {
          return (
            <>
              <TextField
                className={styles.inputField}
                label="Kind of e.g. Gin, Vodka"
                variant="outlined"
                onChange={(e) => setKindOfValue(e.target.value)}
              />
              <TextField
                className={styles.inputField}
                label="Litres"
                variant="outlined"
                onChange={(e) => setLitresValue(e.target.value)}
              />
            </>
          );
        } else
          return (
            <TextField
              className={styles.inputField}
              label="Litres"
              variant="outlined"
              onChange={(e) => setLitresValue(e.target.value)}
            />
          );
      } else if (model[0] === "litres-grams") {
        return (
          <>
            <TextField
              className={styles.inputField}
              label="Grams"
              variant="outlined"
              onChange={(e) => setGramsValue(e.target.value)}
            />
            <TextField
              className={styles.inputField}
              label="Litres"
              variant="outlined"
              onChange={(e) => setLitresValue(e.target.value)}
            />
          </>
        );
      } else {
        return (
          <TextField
            className={styles.inputField}
            label="Grams"
            variant="outlined"
            onChange={(e) => setGramsValue(e.target.value)}
          />
        );
      }
    }
    return <></>;
  }, [foodName]);

  const handleSubmit = () => {
    if (foodName && foodLogo) {
      const model = getFoodModel(foodName);
      if (model[0] === "litres") {
        if (model[1] === "kindOf") {
          onSubmit &&
            onSubmit({
              label: `${litresValue} litres of ${kindOfValue}`,
              src: foodLogo,
              id: foodName,
            });
        } else
          onSubmit &&
            onSubmit({
              label: `${litresValue} litres of ${foodName}`,
              src: foodLogo,
              id: foodName,
            });
      } else if (model[0] === "litres-grams") {
        onSubmit &&
          onSubmit({
            label: `${
              litresValue ? `${litresValue} litres of ${foodName}` : ""
            }${litresValue && gramsValue ? ", " : ""}${
              gramsValue ? `${gramsValue} grams of ${foodName}` : ""
            }`,
            src: foodLogo,
            id: foodName,
          });
      } else {
        onSubmit &&
          onSubmit({
            label: `${gramsValue} grams of ${foodName}`,
            src: foodLogo,
            id: foodName,
          });
      }
    }
  };

  return (
    <div className={styles.recipeForm}>
      <img src={foodLogo} alt={`ico-${foodName}`} />
      <h4 className={styles.recipeForm_name}>{foodName}</h4>
      {currentFoodModel}
      <button className={styles.recipeForm_submitAction} onClick={handleSubmit}>
        {getTranslatedLabel("global.insert")}
      </button>
      <button
        className={styles.recipeForm_discardAction}
        onClick={() => dispatch(hideDialog())}
      >
        {getTranslatedLabel("global.discard")}
      </button>
    </div>
  );
};

export default RecipeForm;
