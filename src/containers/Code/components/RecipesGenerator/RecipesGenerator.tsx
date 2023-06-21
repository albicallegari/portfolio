import React, { useMemo, useState } from "react";
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
import RecipeForm from "./components/RecipeForm/RecipeForm";
import { foodElement } from "./components/RecipeForm/RecipeForm.models";
import FoodChip from "./components/FoodChip/FoodChip";

const RecipesGenerator = () => {
  // HOOKS
  const dispatch = useDispatch();
  const isMobile = useMediaQuery(`(max-width:${vars["breakpoint-md"]})`);

  // REDUX STATE
  const {
    open: isDialogOpen,
    title: dialogTitle,
    logo: foodLogo,
  } = useSelector((state: RootState) => state.dialog);

  // UTILS
  const ingredientsList = getIngredientsList();

  // COMPONENT STATE
  const [foodTagList, setFoodTagList] = useState<foodElement[]>([]);
  const iconsName = useMemo(() => {
    return ingredientsList.map((ico) => {
      const l = ico.split("/").length;
      const nameDirty = ico.split("/")[l - 1];
      const nameSanitized = nameDirty.split(".")[0];
      return nameSanitized;
    });
  }, [ingredientsList]);

  const handleFoodChoice = (srcLogo: string, index: number) => {
    dispatch(
      showDialog({
        title: iconsName[index],
        logo: srcLogo,
      })
    );
  };

  const handleSubmitFoodModal = (element: foodElement) => {
    if (foodTagList.find((e) => e.id === element.id)) {
      const filteredList = foodTagList.filter((e) => e.id !== element.id);
      setFoodTagList([...filteredList, element]);
    } else {
      setFoodTagList([...foodTagList, element]);
    }
    dispatch(hideDialog());
  };

  const onDeleteElement = (element: foodElement) => {
    const filteredList = foodTagList.filter((e) => e.id !== element.id);
    setFoodTagList([...filteredList, element]);
  };

  return (
    <div className={styles.recipesGenerator_container}>
      <div className={styles.recipesGenerator_container_yourRecipe}>
        <div className={styles.recipesGenerator_container_yourRecipe_list}>
          <h5>
            <b>{getTranslatedLabel("aboutCode.recipeAiIngredients")}</b>
          </h5>
          <div
            className={styles.recipesGenerator_container_yourRecipe_list_tags}
          >
            {foodTagList.map((element) => (
              <FoodChip element={element} onDelete={onDeleteElement} />
            ))}
          </div>
        </div>
        <button
          className={styles.recipesGenerator_container_yourRecipe_cta}
          onClick={() => console.log("Prompt to GPT!")}
        >
          {getTranslatedLabel("global.submit")}
        </button>
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
        <RecipeForm
          foodLogo={foodLogo}
          foodName={dialogTitle}
          onSubmit={handleSubmitFoodModal}
        />
      </Dialog>
    </div>
  );
};

export default RecipesGenerator;
