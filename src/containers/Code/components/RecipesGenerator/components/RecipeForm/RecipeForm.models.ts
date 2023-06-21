export interface RecipeFormProps {
  foodLogo?: string;
  foodName?: string;
  onSubmit?: (element: foodElement) => void;
}

export interface foodElement {
  label: string;
  src: string;
  id: string;
}
