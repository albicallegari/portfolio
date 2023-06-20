import React, { useMemo } from "react";
import styles from "./RecipesGenerator.module.scss";
import { getIngredientsList } from "./RecipesGenerator.utils";
import { getTranslatedLabel } from "../../../../common/labels/utils";
import { Dialog, useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import {
  hideDialog,
  showDialog,
} from "../../../../store/dialogSlice/dialogSlice";
import vars from "../../../../styles/variables.scss";

const RecipesGenerator = () => {
  // HOOKS
  const dispatch = useDispatch();
  const isMobile = useMediaQuery(`(max-width:${vars["breakpoint-md"]})`);

  // UTILS
  const ingredientsList = getIngredientsList();

  // COMPONENT STATE
  const iconsName = useMemo(() => {
    return ingredientsList.map((ico) => {
      const l = ico.split("/").length;
      const nameDirty = ico.split("/")[l - 1];
      const nameSanitized = nameDirty.split(".")[0];
      return nameSanitized;
    });
  }, [ingredientsList]);

  // REDUX STATE
  const {
    open: isDialogOpen,
    title: dialogTitle,
    logo: foodLogo,
  } = useSelector((state: RootState) => state.dialog);

  const handleFoodChoice = (srcLogo: string, index: number) => {
    dispatch(
      showDialog({
        title: iconsName[index],
        logo: srcLogo,
      })
    );
  };

  return (
    <div className={styles.recipesGenerator_container}>
      <div className={styles.recipesGenerator_container_yourRecipe}>
        <h5>
          <b>{getTranslatedLabel("aboutCode.recipeAiIngredients")}</b>
        </h5>
      </div>
      <div className={styles.recipesGenerator_container_ingredients}>
        {ingredientsList.map((ico, i) => (
          <div
            className={styles.recipesGenerator_container_ingredients_food}
            onClick={() => handleFoodChoice(ico, i)}
          >
            <img src={ico} alt={`ico-${i}`} />
          </div>
        ))}
      </div>
      <Dialog
        open={isDialogOpen}
        onClose={() => dispatch(hideDialog())}
        fullScreen={isMobile}
      >
        <div className={styles.recipesGenerator_container_modal}>
          <img src={foodLogo} alt={`ico-${dialogTitle}`} />
          <h4 className={styles.recipesGenerator_container_modal_name}>
            {dialogTitle}
          </h4>
          <button
            className={styles.recipesGenerator_container_modal_submitAction}
            onClick={() => dispatch(hideDialog())}
          >
            {getTranslatedLabel("global.insert")}
          </button>
          <button
            className={styles.recipesGenerator_container_modal_discardAction}
            onClick={() => dispatch(hideDialog())}
          >
            {getTranslatedLabel("global.discard")}
          </button>
        </div>
      </Dialog>
    </div>
  );
};

export default RecipesGenerator;
