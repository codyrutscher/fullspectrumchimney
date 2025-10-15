"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";
import * as THREE from "three";

function ChimneyModel() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Chimney Base */}
      <Box args={[1, 2, 1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#8B4513" />
      </Box>
      
      {/* Chimney Top */}
      <Box args={[1.2, 0.3, 1.2]} position={[0, 1.15, 0]}>
        <meshStandardMaterial color="#654321" />
      </Box>
      
      {/* Smoke particles */}
      <mesh position={[0, 1.5, 0]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#CCCCCC" transparent opacity={0.6} />
      </mesh>
    </group>
  );
}

export default function FloatingChimney() {
  return (
    <div className="w-full h-64">
      <Canvas camera={{ position: [3, 2, 3], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <ChimneyModel />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
    </div>
  );
}
