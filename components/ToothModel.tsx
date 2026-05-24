"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

/**
 * Stylized procedural "tooth" built from primitive geometries.
 * Avoids needing an external GLB/GLTF asset while still feeling 3D.
 */
function Tooth() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = t * 0.4;
    group.current.rotation.x = Math.sin(t * 0.5) * 0.1;
  });

  return (
    <group ref={group} position={[0, -0.1, 0]} scale={1.1}>
      {/* Crown — top rounded part */}
      <mesh position={[0, 0.6, 0]} castShadow>
        <sphereGeometry args={[1.05, 64, 64]} />
        <MeshDistortMaterial
          color="#ffffff"
          roughness={0.15}
          metalness={0.05}
          distort={0.18}
          speed={1.2}
        />
      </mesh>
      {/* Body — slightly elongated */}
      <mesh position={[0, -0.1, 0]} castShadow>
        <capsuleGeometry args={[0.85, 0.6, 16, 32]} />
        <meshPhysicalMaterial
          color="#ffffff"
          roughness={0.2}
          metalness={0.05}
          clearcoat={0.6}
          clearcoatRoughness={0.1}
        />
      </mesh>
      {/* Roots — two prongs at the bottom */}
      <mesh position={[-0.32, -1.0, 0]} rotation={[0, 0, 0.18]} castShadow>
        <coneGeometry args={[0.32, 1.1, 32]} />
        <meshPhysicalMaterial
          color="#fefce8"
          roughness={0.4}
          metalness={0.0}
          clearcoat={0.4}
        />
      </mesh>
      <mesh position={[0.32, -1.0, 0]} rotation={[0, 0, -0.18]} castShadow>
        <coneGeometry args={[0.32, 1.1, 32]} />
        <meshPhysicalMaterial
          color="#fefce8"
          roughness={0.4}
          metalness={0.0}
          clearcoat={0.4}
        />
      </mesh>
      {/* Subtle sparkle */}
      <mesh position={[-0.45, 0.7, 0.95]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#22d3ee" />
      </mesh>
    </group>
  );
}

export default function ToothModel() {
  return (
    <div className="relative h-full w-full">
      <Canvas
        camera={{ position: [0, 0.4, 4.6], fov: 38 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        shadows
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 4, 3]} intensity={1.2} castShadow />
        <directionalLight position={[-3, 2, 2]} intensity={0.6} color="#06b6d4" />
        <pointLight position={[0, -2, 3]} intensity={0.5} color="#0d9488" />
        <Suspense fallback={null}>
          <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.8}>
            <Tooth />
          </Float>
          <ContactShadows
            position={[0, -1.6, 0]}
            opacity={0.35}
            scale={6}
            blur={2.4}
            far={2}
            color="#0d9488"
          />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
