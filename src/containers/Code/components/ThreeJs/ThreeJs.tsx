/* eslint-disable react-hooks/exhaustive-deps */
// import vars from "../../../../styles/variables.scss";
import { OrbitControls, Stars } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Canvas } from "@react-three/fiber";
import { Box } from "@mui/material";
import { useRef } from "react";
import "./ThreeJs.scss";

const ThreeJs = () => {
  // const isTablet = useMediaQuery(`(min-width:${vars["breakpoint-md"]})`);
  const wrapperRef = useRef<HTMLDivElement>(null);
  
  const BoxThree = () => {
    return (
      <mesh position={[0, 2, 0]}>
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="hotpink" />
      </mesh>
    );
  };

  const Plane = () => {
    return (
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeBufferGeometry attach="geometry" args={[100, 100]} />
        <meshLambertMaterial attach="material" color="lightblue" />
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
        <Stars />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Physics>
          <BoxThree />
          <Plane />
        </Physics>
      </Canvas>
    </div>
  );
};

export default ThreeJs;
