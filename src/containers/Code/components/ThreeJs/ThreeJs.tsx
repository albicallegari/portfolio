/* eslint-disable react-hooks/exhaustive-deps */
// import vars from "../../../../styles/variables.scss";
import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Box } from "@mui/material";
import { useRef } from "react";
import "./ThreeJs.scss";

const ThreeJs = () => {
  // const isTablet = useMediaQuery(`(min-width:${vars["breakpoint-md"]})`);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const BoxThree = () => {
    return (
      <mesh>
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="hotpink" />
      </mesh>
    );
  };

  return (
    <div className="threeJs_wrapper" ref={wrapperRef}>
      <Box sx={{ textAlign: "center" }} component="div">
        <p>Trying React-Three.JS</p>
      </Box>
      <Canvas className="threeJs_wrapper_canvas">
        <OrbitControls />
        <ambientLight intensity={0.5}/>
        <Stars />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <BoxThree />
      </Canvas>
    </div>
  );
};

export default ThreeJs;
