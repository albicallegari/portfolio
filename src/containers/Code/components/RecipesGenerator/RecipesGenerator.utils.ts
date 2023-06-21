export const importAll = (r: any) => {
  let svgs: any[] = [];
  r.keys().forEach((key: any) => {
    svgs.push(r(key));
  });
  return svgs;
};

export const getIngredientsList = () => {
  const svgFiles: string[] = importAll(
    require.context("../../../../assets/food", true, /\.svg$/)
  );
  return svgFiles;
};

export const getFoodModel = (foodName: string) => {
  switch (foodName) {
    case "Beer":
    case "Milk":
    case "Juice":
      return ["litres"];
    case "Spirits":
    case "Wine":
    case "Cocktail":
      return ["litres", "kindOf"];
    case "Coffee":
      return ["litres-grams"];
    default:
      return ["grams"];
  }
};
