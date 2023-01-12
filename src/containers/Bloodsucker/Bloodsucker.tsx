import BackNavButton from "../../components/BackNavButton/BackNavButton";
import BSTitle from "./components/BSTitle/BSTitle";
import "./Bloodsucker.scss";

const Bloodsucker = () => {
  return (
    <div className="bloodsucker">
      <div className="bloodsucker_container">
        <BSTitle />
        <BackNavButton />
      </div>
    </div>
  );
};

export default Bloodsucker;
