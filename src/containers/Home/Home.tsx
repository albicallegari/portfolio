/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "@mui/material";
import "./Home.scss";

const Home = (): JSX.Element => {
  return (
    <div className="home">
      <Button className="home_linkTo" onClick={() => window.location.href = '/bubble-chart'}>Bubble Chart</Button>
    </div>
  );
};

export default Home;
