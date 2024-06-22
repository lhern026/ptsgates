import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three"; // Importing THREE for type definitions

interface ModelProps {
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
}

function Model(props: ModelProps) {
  const { scene } = useGLTF("/Vector__5mm.glb") as any; // Correct path to your GLB file
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) {
      // Float the model up and down slightly
      ref.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.05;
    }
  });

  return <primitive object={scene} ref={ref} {...props} />;
}

// Ensure GLTFLoader is ready to load your file format
useGLTF.preload("/Vector__5mm.glb");

export default function Logo3D() {
  return (
    <Canvas
      className="w-full h-screen fixed top-0 left-0 z-0" // Full-screen canvas
      camera={{ fov: 75, position: [-10, 45, 20] }} // Set the camera further away
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <OrbitControls
        enableZoom={false}
        enableRotate={false}
        enablePan={false}
      />
      <Model scale={0.5} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} />{" "}
      {/* Adjust rotation to face the reader */}
    </Canvas>
  );
}
