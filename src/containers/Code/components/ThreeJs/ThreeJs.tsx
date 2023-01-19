import { Box } from "@mui/material";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

const ThreeJs = () => {
  const BoxThree = (props: any) => {
    // This reference will give us direct access to the mesh
    const mesh = useRef<any>();
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
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
    <>
      <Box sx={{ textAlign: "center" }}>
        <p>Trying Three.JS</p>
      </Box>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <BoxThree position={[-1.2, -2, 0]} />
        <BoxThree position={[1.2, -2, 0]} />
      </Canvas>
    </>
  );
};

export default ThreeJs;
