/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Tab, Tabs, useMediaQuery } from "@mui/material";
import { getTranslatedLabel } from "../../common/labels/utils";
import BackNavButton from "../../components/BackNavButton/BackNavButton";
import { getTabsConfig, getWrapperBoxConfig } from "./Code.utils";
import { setTheme } from "../../store/sessionSlice/sessionSlice";
import BubbleChart from "./components/BubbleChart/BubbleChart";
import CodeTitle from "./components/CodeTitle/CodeTitle";
import { useDispatch, useSelector } from "react-redux";
import TabPanel from "./components/TabPanel/TabPanel";
import Watches from "./components/Watches/Watches";
import vars from "../../styles/variables.scss";
import { CodeProejects } from "./Code.models";
import { useEffect, useState } from "react";
import { RootState } from "../../store";
import "./Code.scss";
import WordClock from "./components/WordClock/WordClock";
import ThreeJs from "./components/ThreeJs/ThreeJs";

const Code = () => {
  const isDarkModeEnabled = useMediaQuery("(prefers-color-scheme: dark)");
  const isTablet = useMediaQuery(`(min-width:${vars["breakpoint-md"]})`);
  const { theme: themeState } = useSelector(
    (state: RootState) => state.session
  );
  const dispatch = useDispatch();

  const [tabSelected, setTabSelected] = useState<CodeProejects>(
    CodeProejects.BUBBLE_CHART
  );

  useEffect(() => {
    if (isDarkModeEnabled) {
      dispatch(setTheme("dark"));
    } else dispatch(setTheme("light"));
  }, []);

  useEffect(() => {
    if (isDarkModeEnabled) {
      dispatch(setTheme("dark"));
    } else dispatch(setTheme("light"));
  }, [isDarkModeEnabled]);

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: CodeProejects
  ) => {
    setTabSelected(newValue);
  };

  return (
    <Box className="aboutCode">
      <Box className="aboutCode_container">
        <CodeTitle />
        <BackNavButton />
        <Box
          sx={getWrapperBoxConfig(isTablet)}
        >
          <Box>
            <Tabs
              sx={getTabsConfig(themeState)}
              variant={isTablet ? "standard" : "scrollable"}
              value={tabSelected}
              onChange={handleChange}
              aria-label="tab dettaglio elemento"
              orientation={isTablet ? "vertical" : "horizontal"}
            >
              <Tab
                value={CodeProejects.BUBBLE_CHART}
                label={getTranslatedLabel("global.bubbleChart")}
              />
              <Tab
                value={CodeProejects.WATCHES}
                label={getTranslatedLabel("global.watches")}
              />
              <Tab
                value={CodeProejects.WORD_CLOCK}
                label={getTranslatedLabel("global.wordClock")}
              />
              <Tab
                value={CodeProejects.THREE_JS}
                label={getTranslatedLabel("global.threeJs")}
              />
            </Tabs>
          </Box>
          <Box sx={{ width: '100%' }}>
            <TabPanel
              value={CodeProejects.BUBBLE_CHART}
              index={CodeProejects.BUBBLE_CHART}
              selectedTab={tabSelected}
            >
              <BubbleChart />
            </TabPanel>
            <TabPanel
              value={CodeProejects.WATCHES}
              index={CodeProejects.WATCHES}
              selectedTab={tabSelected}
            >
              <Watches />
            </TabPanel>
            <TabPanel
              value={CodeProejects.WORD_CLOCK}
              index={CodeProejects.WORD_CLOCK}
              selectedTab={tabSelected}
            >
              <WordClock />
            </TabPanel>
            <TabPanel
              value={CodeProejects.THREE_JS}
              index={CodeProejects.THREE_JS}
              selectedTab={tabSelected}
            >
              <ThreeJs />
            </TabPanel>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Code;
