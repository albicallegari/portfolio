import FunctionalBubble, {
  FunctionalBubbleSimulationNodeDatum,
} from "../../../../components/FunctionalBubble/FunctionalBubble";
import { useEffect, useMemo, useState } from "react";
import { CoinList } from "../../../../api/api";
import axios from "axios";

const BubbleChart = () => {
  const [dataCoins, setDataCoins] = useState([]);
  const coinList = useMemo(() => {
    const a: FunctionalBubbleSimulationNodeDatum[] = [];
    dataCoins?.forEach((e: any) => {
      const el = {
        l: e.name as string,
        l2: `${e.price_change_percentage_24h}`,
        img: e.image as string,
        v: e.price_change_percentage_24h as number,
      };
      a.push(el);
    });
    return a;
  }, [dataCoins]);

  const fetchCoins = async () => {
    const { data } = await axios.get(CoinList("eur"));
    setDataCoins(data);
  };

  useEffect(() => {
    fetchCoins();
  }, []);
  return <FunctionalBubble data={coinList} hasLabels />;
};

export default BubbleChart;
