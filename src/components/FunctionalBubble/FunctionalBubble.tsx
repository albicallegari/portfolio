/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FunctionComponent, useEffect, useRef, useState } from "react";
import {
  scaleLinear,
  scaleSqrt,
  forceSimulation,
  forceX,
  forceY,
  forceCollide,
  interpolateHcl,
  rgb,
  ScaleLinear,
  Simulation,
  SimulationNodeDatum,
} from "d3";

import _ from "lodash";
import vars from "../../styles/variables.scss";
import { useMediaQuery } from "@mui/material";
import useWindowDimensions from "../../hooks/useWindowDimensions/useWindowDimensions";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import isNullOrEmpty from "../../utils/isNullOrEmpty";
import Loader, { SizeLoader } from "../Loader/Loader";
import { formatPercentage } from "../../utils/formatPercentage";

export interface FunctionalBubbleSimulationNodeDatum
  extends SimulationNodeDatum {
  v: number;
  l: string;
  l2?: string;
  img?: string;
  id: string;
}

interface FunctionalBubbleProps {
  data?: Array<FunctionalBubbleSimulationNodeDatum>;
  width?: number;
  height?: number;
  hasLabels?: boolean;
  onSelect: (id: string) => void;
}

interface FunctionalBubbleInstanceProps {
  minValue: number;
  maxValue: number;
  mounted: boolean;
  simulation:
    | Simulation<FunctionalBubbleSimulationNodeDatum, undefined>
    | undefined;
}

const FunctionalBubble: FunctionComponent<FunctionalBubbleProps> = ({
  data: propData = [],
  hasLabels = false,
  width = undefined,
  height = undefined,
  onSelect,
}) => {
  const _this = useRef<FunctionalBubbleInstanceProps>({
    minValue: 1,
    maxValue: 100,
    mounted: false,
    simulation: undefined,
  });

  const visibilityState = useSelector(
    (state: RootState) => state.loader.visible
  );
  const { height: windowHeight, width: windowWidth } = useWindowDimensions();
  const isDarkTheme = useSelector(
    (state: RootState) => state.session.theme === "dark"
  );
  const isDesktop = useMediaQuery(`(min-width:${vars["breakpoint-lg"]})`);
  const isTablet = useMediaQuery(`(min-width:${vars["breakpoint-md"]})`);
  const isSPhone = useMediaQuery(`(max-width:${vars["breakpoint-sm"]})`);
  const [containerWidth, setContainerWidth] = useState(600);
  const [containerHeight, setContainerHeight] = useState(600);
  const [data, setData] = useState<Array<FunctionalBubbleSimulationNodeDatum>>(
    []
  );

  useEffect(() => {
    if (width && height) {
      setContainerWidth(width);
      setContainerHeight(height);
    } else if (isDesktop) {
      setContainerWidth(percentage(85, windowWidth as number));
      setContainerHeight(percentage(85, windowHeight as number));
    } else if (isTablet && !isDesktop) {
      setContainerWidth(percentage(80, windowWidth as number));
      setContainerHeight(percentage(85, windowHeight as number));
    } else if (!isSPhone && !isTablet) {
      setContainerWidth(400);
      setContainerHeight(400);
    } else {
      setContainerWidth(percentage(84, windowWidth as number));
      setContainerHeight(percentage(65, windowHeight as number));
    }
  }, [width, height, isTablet, isSPhone]);

  useEffect(() => {
    _this.current.mounted = true;
    if (propData.length > 0) {
      _this.current.minValue =
        0.95 * Math.min(...propData.map((item) => item.v));

      _this.current.maxValue =
        1.05 * Math.max(...propData.map((item) => item.v));

      simulatePositions(propData);
    }
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      _this.current.mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propData]);

  const percentage = (partialValue: number, totalValue: number) => {
    return (partialValue * totalValue) / 100;
  };

  const getColorsRange = (v: number) => {
    const { minValue, maxValue } = _this.current;
    if (v < 0) {
      const color = scaleLinear()
        .domain([minValue, 0])
        .interpolate(interpolateHcl as any)
        .range(["#fc0000", "#f7cbcb"] as any) as unknown as ScaleLinear<
        number,
        string
      >;
      return color(v);
    } else {
      const color = scaleLinear()
        .domain([0, maxValue])
        .interpolate(interpolateHcl as any)
        .range(["#b3e8bc", "#02db26"] as any) as unknown as ScaleLinear<
        number,
        string
      >;
      return color(v);
    }
  };

  const formatName = (name: string) => {
    if (!isNullOrEmpty(name.split(" ")[1])) {
      return `${name.split(" ")[0]} ${name.split(" ")[1].charAt(0)}`;
    } else return name;
  };

  const radiusScale = (value: number) => {
    let fx = scaleSqrt()
      .range([25, 130])
      .domain([_this.current.minValue, _this.current.maxValue]);
    if (isSPhone) {
      fx = scaleSqrt()
        .range([15, 30])
        .domain([_this.current.minValue, _this.current.maxValue]);
    } else if (!isSPhone && !isTablet) {
      fx = scaleSqrt()
        .range([20, 40])
        .domain([_this.current.minValue, _this.current.maxValue]);
    } else
      fx = scaleSqrt()
        .range([20, 100])
        .domain([_this.current.minValue, _this.current.maxValue]);

    return fx(value);
  };

  const simulatePositions = (
    dataToRender: Array<FunctionalBubbleSimulationNodeDatum>
  ) => {
    const clonedData = _.clone(dataToRender);
    _this.current.simulation =
      forceSimulation<FunctionalBubbleSimulationNodeDatum>()
        .nodes(clonedData)
        .velocityDecay(0.5)
        .force("x", forceX().strength(0.051))
        .force("y", forceY().strength(0.051))
        .force(
          "collide",
          forceCollide((d) => radiusScale(d.v) + 3)
        )
        .on("tick", () => {
          if (_this.current.mounted) {
            setData(_.clone(clonedData));
          }
        });
  };

  const renderBubbles = (
    dataToRender: Array<FunctionalBubbleSimulationNodeDatum>
  ) => {
    const { minValue, maxValue } = _this.current;
    const color = scaleLinear()
      .domain([minValue, maxValue])
      .interpolate(interpolateHcl as any)
      .range(["#fc0000", "#02db26"] as any) as unknown as ScaleLinear<
      number,
      string
    >;

    // render simple circle element
    if (!hasLabels) {
      const circles = _.map(dataToRender, (item, index) => {
        return (
          <circle
            key={index}
            r={radiusScale(item.v)}
            cx={item.x}
            cy={item.y}
            fill={color(item.v)}
            fillOpacity="0.2"
            stroke={rgb(color(item.v)).toString()}
            strokeWidth="2"
            onClick={() => onSelect(item.id)}
          />
        );
      });

      return (
        <g
          transform={`translate(${containerWidth / 2}, ${containerHeight / 2})`}
        >
          {circles}
        </g>
      );
    }

    // render circle and text elements inside a group
    const texts = _.map(dataToRender, (item, index) => {
      const fontSize = radiusScale(item.v) / 3;
      const percentFormatted = item.l2 ? formatPercentage(item.l2) : "-";
      const nameFormatted = item.l ? formatName(item.l) : "-";
      return (
        <g
          key={index}
          transform={`translate(${containerWidth / 2 + (item.x as number)}, ${
            containerHeight / 2 + (item.y as number)
          })`}
          onClick={() => onSelect(item.id)}
        >
          <circle
            r={radiusScale(item.v)}
            fill={getColorsRange(item.v)}
            fillOpacity="0.2"
            stroke={rgb(getColorsRange(item.v)).toString()}
            strokeWidth="2"
          />
          {fontSize <= 22 && (
            <image
              width="20"
              height="20"
              xlinkHref={item.img}
              x="-0.6em"
              y={fontSize > 10 ? "-30px" : "-10px"}
              // clip-path="url(#circleView)"
            />
          )}
          {fontSize > 22 && (
            <image
              width="20"
              height="20"
              xlinkHref={item.img}
              x="-0.6em"
              y="-50px"
              // clip-path="url(#circleView)"
            />
          )}
          {fontSize > 10 && (
            <text
              dy="6"
              fill={isDarkTheme ? "#fff" : vars["color-magenta2"]}
              textAnchor="middle"
              fontSize={`${fontSize}px`}
              fontWeight="bold"
              x="0"
              y="0"
            >
              <tspan>{item.l ? `${nameFormatted}` : "-"}</tspan>
              <tspan x="0" dy="1.2em">
                {item.l2 ? `${percentFormatted}%` : "-"}
              </tspan>
            </text>
          )}
        </g>
      );
    });

    return texts;
  };

  return visibilityState || !data.length ? (
    <Loader
      containerStyle={{ width: containerWidth, height: containerHeight }}
      size={SizeLoader.LARGE}
    />
  ) : (
    <svg width={containerWidth} height={containerHeight}>
      {renderBubbles(data)}
    </svg>
  );
};

export default FunctionalBubble;
