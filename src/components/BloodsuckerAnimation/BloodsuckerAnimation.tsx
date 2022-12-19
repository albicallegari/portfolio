import { BloodsuckerAnimationProps } from "./BloodsuckerAnimation.models";
import { Alignment, Fit, Layout } from "@rive-app/react-canvas";
import RiveComponents from "../RiveComponents/RiveComponents";
import BB from "../../assets/rive/bloodsucker-b.riv";
import BW from "../../assets/rive/bloodsucker-w.riv";

const BloodsuckerAnimation = ({
  theme,
}: BloodsuckerAnimationProps): JSX.Element => {
  return (
    <>
      {theme === "dark" && (
        <RiveComponents
          src={BB}
          animation="Floating"
          layout={new Layout({ fit: Fit.Contain, alignment: Alignment.Center })}
        />
      )}
      {theme === "light" && (
        <RiveComponents
          src={BW}
          animation="Floating"
          layout={new Layout({ fit: Fit.Contain, alignment: Alignment.Center })}
        />
      )}
    </>
  );
};

export default BloodsuckerAnimation;
