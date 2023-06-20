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
