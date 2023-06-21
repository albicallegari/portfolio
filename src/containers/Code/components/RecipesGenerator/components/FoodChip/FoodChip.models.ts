import { foodElement } from "../RecipeForm/RecipeForm.models";

export interface FoodChipProps {
  element: foodElement;
  onDelete: (element: foodElement) => void;
}
