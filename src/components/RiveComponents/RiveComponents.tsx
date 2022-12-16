import { RiveComponentsProps } from "./RiveComponents.models";
import Rive, { Alignment, Fit, Layout } from "@rive-app/react-canvas";

const RiveComponents = ({ src, layout, animation }: RiveComponentsProps) => {
  return <Rive src={src || ''} layout={layout || new Layout({ fit: Fit.Contain, alignment: Alignment.TopCenter })} animations={animation} />;
};

export default RiveComponents;
