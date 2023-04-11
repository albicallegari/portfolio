import {
  hideDialog,
  showDialog,
} from "../../../../store/dialogSlice/dialogSlice";
import FunctionalBubble, {
  FunctionalBubbleSimulationNodeDatum,
} from "../../../../components/FunctionalBubble/FunctionalBubble";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { CoinList, SingleCoin } from "../../../../api/api";
import { RootState } from "../../../../store";
import { Box, Dialog, Typography } from "@mui/material";
import axios from "axios";
import { getCoinDialogStyles, getDialogTextStyles, getDialogTitleStyles } from "./BubbleChart.utils";
import { formatPercentage } from "../../../../utils/formatPercentage";

const BubbleChart = () => {
  const isDarkTheme = useSelector(
    (state: RootState) => state.session.theme === "dark"
  );
  const [dataCoins, setDataCoins] = useState([]);
  const dispatch = useDispatch();

  const {
    open: isDialogOpen,
    title: dialogTitle,
    logo: coinLogo,
    currentPrice: coinCurrentPrice,
    percentage24: coinPercentage24,
  } = useSelector((state: RootState) => state.dialog);

  const coinList = useMemo(() => {
    const a: FunctionalBubbleSimulationNodeDatum[] = [];
    dataCoins?.forEach((e: any) => {
      const el = {
        l: e.name as string,
        l2: `${e.price_change_percentage_24h}`,
        img: e.image as string,
        v: e.price_change_percentage_24h as number,
        id: e.id,
      };
      a.push(el);
    });
    return a;
  }, [dataCoins]);

  const fetchCoins = async () => {
    const { data } = await axios.get(CoinList("eur"));
    setDataCoins(data);
  };

  const fetchSingleCoin = async (id: string) => {
    const { data } = await axios.get(SingleCoin(id));
    console.log('data.market_data.price_change_percentage_24h', data.market_data.price_change_percentage_24h);
    dispatch(
      showDialog({
        title: data.name,
        logo: data.image.small,
        currentPrice: data.market_data.current_price.eur,
        percentage24: formatPercentage(
          `${data.market_data.price_change_percentage_24h_in_currency.eur}`
        ),
      })
    );
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <>
      <FunctionalBubble data={coinList} hasLabels onSelect={fetchSingleCoin} />
      <Dialog
        open={isDialogOpen}
        onClose={() => dispatch(hideDialog())}
        sx={getCoinDialogStyles(isDarkTheme)}
      >
        <Box
          sx={{
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
          component="div"
        >
          <Box
            sx={{ display: "flex", justifyContent: "center" }}
            component="div"
          >
            <img src={coinLogo} alt="logo" />
          </Box>
          <Typography
            sx={getDialogTitleStyles(isDarkTheme)}
            id="dialog-coin-name"
          >
            {dialogTitle}
          </Typography>
          <Typography
            sx={getDialogTextStyles(isDarkTheme)}
            id="coin-current-price"
          >
            {`Current price: ${coinCurrentPrice}€`}
          </Typography>
          <Typography
            sx={getDialogTextStyles(isDarkTheme)}
            id="coin-percentage-24"
          >
            {`24h: ${coinPercentage24}%`}
          </Typography>
        </Box>
      </Dialog>
    </>
  );
};

export default BubbleChart;
