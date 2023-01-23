/* eslint-disable react-hooks/exhaustive-deps */
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import vars from "../../../../styles/variables.scss";
import { Box, useMediaQuery } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import "./ThreeJs.scss";

const ThreeJs = () => {
  const isTablet = useMediaQuery(`(min-width:${vars["breakpoint-md"]})`);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const BoxThree = (props: any) => {
    const set = useThree((state) => state.set);

    // set({
    //   size: {
    //     width: isTablet ? 500 : 300,
    //     height: isTablet ? 500 : 300,
    //     top: 0,
    //     left: (wrapperRef?.current?.offsetWidth as number) / 2,
    //   },
    // });
    // This reference will give us direct access to the mesh
    const mesh = useRef<any>();
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    useEffect(() => {
      if (wrapperRef?.current?.offsetWidth) {
        console.log('wrapperRef?.current?.offsetWidth', wrapperRef?.current?.offsetWidth);
        set({
          size: {
            width: isTablet ? 500 : 300,
            height: isTablet ? 500 : 300,
            top: 0,
            left: ((wrapperRef?.current?.offsetWidth / 2) - (isTablet ? 250 : 150)),
          },
        });
      }
    }, [hovered, active, wrapperRef]);
    // Set up state for the hovered and active state
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) =>
      mesh.current ? (mesh.current.rotation.x += delta) : null
    );
    // Return view, these are regular three.js elements expressed in JSX
    return (
      <mesh
        {...props}
        ref={mesh}
        scale={active ? 2.5 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      </mesh>
    );
  };

  return (
    <div className="threeJs_wrapper" ref={wrapperRef}>
      <Box sx={{ textAlign: "center" }}>
        <p>Trying React-Three.JS</p>
      </Box>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <BoxThree position={[-1.4, 0, 0]} />
        <BoxThree position={[1.4, 0, 0]} />
      </Canvas>
    </div>
  );
};

export default ThreeJs;
