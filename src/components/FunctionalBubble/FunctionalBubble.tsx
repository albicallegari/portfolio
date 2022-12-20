/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FunctionComponent, useEffect, useRef, useState } from 'react';
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
} from 'd3';

import _ from 'lodash';
import vars from '../../../../styles/variables.scss';
import { useMediaQuery, useTheme } from '@mui/material';
import useWindowDimensions from '../../hooks/useWindowDimensions/useWindowDimensions';

export interface FunctionalBubbleSimulationNodeDatum extends SimulationNodeDatum {
  v: number;
  l: string;
}

interface FunctionalBubbleProps {
  data?: Array<FunctionalBubbleSimulationNodeDatum>;
  width?: number;
  height?: number;
  hasLabels?: boolean;
}

interface FunctionalBubbleInstanceProps {
  minValue: number;
  maxValue: number;
  mounted: boolean;
  simulation: Simulation<FunctionalBubbleSimulationNodeDatum, undefined> | undefined;
}

const FunctionalBubble: FunctionComponent<FunctionalBubbleProps> = ({
  data: propData = [],
  hasLabels = false,
  width = undefined,
  height = undefined,
}) => {
  const _this = useRef<FunctionalBubbleInstanceProps>({
    minValue: 1,
    maxValue: 100,
    mounted: false,
    simulation: undefined,
  });
  const { height: windowHeight } = useWindowDimensions();

  const isDarkTheme = useTheme().palette.mode === 'dark';
  const isTablet = useMediaQuery(`(min-width:${vars['breakpoint-md']})`);
  const isSPhone = useMediaQuery(`(max-width:${vars['breakpoint-sm']})`);
  const [containerWidth, setContainerWidth] = useState(600);
  const [containerHeight, setContainerHeight] = useState(600);
  const [data, setData] = useState<Array<FunctionalBubbleSimulationNodeDatum>>([]);

  useEffect(() => {
    if (width && height) {
      setContainerWidth(width);
      setContainerHeight(height);
    } else if (isTablet) {
      setContainerWidth(600);
      setContainerHeight(percentage(78, windowHeight as number));
    } else if (!isSPhone && !isTablet) {
      setContainerWidth(400);
      setContainerHeight(400);
    } else {
      setContainerWidth(325);
      setContainerHeight(500);
    }
  }, [width, height, isTablet, isSPhone]);

  useEffect(() => {
    _this.current.mounted = true;
    if (propData.length > 0) {
      _this.current.minValue = 0.95 * Math.min(...propData.map((item) => item.v));

      _this.current.maxValue = 1.05 * Math.max(...propData.map((item) => item.v));

      simulatePositions(propData);
    }
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      _this.current.mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propData]);

  function percentage(partialValue: number, totalValue: number) {
    return (partialValue * totalValue) / 100;
  }

  const radiusScale = (value: number) => {
    let fx = scaleSqrt().range([25, 130]).domain([_this.current.minValue, _this.current.maxValue]);
    if (isSPhone) {
      fx = scaleSqrt().range([15, 35]).domain([_this.current.minValue, _this.current.maxValue]);
    } else if (!isSPhone && !isTablet) {
      fx = scaleSqrt().range([20, 50]).domain([_this.current.minValue, _this.current.maxValue]);
    } else fx = scaleSqrt().range([25, 130]).domain([_this.current.minValue, _this.current.maxValue]);

    return fx(value);
  };

  const simulatePositions = (dataToRender: Array<FunctionalBubbleSimulationNodeDatum>) => {
    const clonedData = _.clone(dataToRender);
    _this.current.simulation = forceSimulation<FunctionalBubbleSimulationNodeDatum>()
      .nodes(clonedData)
      .velocityDecay(0.5)
      .force('x', forceX().strength(0.05))
      .force('y', forceY().strength(0.05))
      .force(
        'collide',
        forceCollide((d) => radiusScale(d.v) + 2)
      )
      .on('tick', () => {
        if (_this.current.mounted) {
          setData(_.clone(clonedData));
        }
      });
  };

  const renderBubbles = (dataToRender: Array<FunctionalBubbleSimulationNodeDatum>) => {
    const { minValue, maxValue } = _this.current;
    const color = scaleLinear()
      .domain([minValue, maxValue])
      .interpolate(interpolateHcl as any)
      .range(['#db8fae', '#e70060'] as any) as unknown as ScaleLinear<number, string>;

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
          />
        );
      });

      return <g transform={`translate(${containerWidth / 2}, ${containerHeight / 2})`}>{circles}</g>;
    }

    // render circle and text elements inside a group
    const texts = _.map(dataToRender, (item, index) => {
      const fontSize = radiusScale(item.v) / 2;
      return (
        <g
          key={index}
          transform={`translate(${containerWidth / 2 + (item.x as number)}, ${
            containerHeight / 2 + (item.y as number)
          })`}
        >
          <circle
            r={radiusScale(item.v)}
            fill={color(item.v)}
            fillOpacity="0.2"
            stroke={rgb(color(item.v)).toString()}
            strokeWidth="2"
          />
          <text
            dy="6"
            fill={isDarkTheme ? '#fff' : vars['color-magenta2']}
            textAnchor="middle"
            fontSize={`${fontSize}px`}
            fontWeight="bold"
          >
            <tspan x="0" dy="-0.2em">
              {item.l ? `${item.l}` : '-'}
            </tspan>
            <tspan x="0" dy="1em">
              {item.v ? `${item.v}` : '-'}
            </tspan>
          </text>
        </g>
      );
    });

    return texts;
  };

  if (data.length) {
    return (
      <svg width={containerWidth} height={containerHeight}>
        {renderBubbles(data)}
      </svg>
    );
  }

  return <div>Loading</div>;
};

export default FunctionalBubble;
