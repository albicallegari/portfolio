import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { LoaderProps } from "./Loader.models";
import "./Loader.scss";

export const SizeLoader = {
  LARGE: "large",
  MEDIUM: "medium",
  SMALL: "small",
};
const Loader = ({ containerStyle, size }: LoaderProps) => {
  const isDarkTheme = useSelector(
    (state: RootState) => state.session.theme === "dark"
  );
  return (
    <div className="loader_container" style={containerStyle}>
      <div
        className={`loader loader--${size}`}
        style={{
          background: isDarkTheme
            ? `conic-gradient(#000, #e70060)`
            : `conic-gradient(#fff, #e70060)`,
        }}
      />
    </div>
  );
};

export default Loader;
