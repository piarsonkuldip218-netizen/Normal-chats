"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Environment, ContactShadows, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

/**
 * Stylized procedural "tooth" built from primitive geometries.
 * Avoids needing an external GLB/GLTF asset while still feeling 3D.
 */
function Tooth({ active }: { active: boolean }) {
  const group = useRef<THREE.Group>(null);
  const { invalidate } = useThree();

  useFrame((state) => {
    if (!group.current || !active) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = t * 0.4;
    group.current.rotation.x = Math.sin(t * 0.5) * 0.1;
    // Request next frame only while active (frameloop="demand").
    invalidate();
  });

  return (
    <group ref={group} position={[0, -0.1, 0]} scale={1.1}>
      {/* Crown — top rounded part */}
      <mesh position={[0, 0.6, 0]} castShadow>
        <sphereGeometry args={[1.05, 48, 48]} />
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
        <capsuleGeometry args={[0.85, 0.6, 12, 24]} />
        <meshPhysicalMaterial
          color="#ffffff"
          roughness={0.2}
          metalness={0.05}
          clearcoat={0.6}
          clearcoatRoughness={0.1}
        />
      </mesh>
      {/* Roots */}
      <mesh position={[-0.32, -1.0, 0]} rotation={[0, 0, 0.18]} castShadow>
        <coneGeometry args={[0.32, 1.1, 24]} />
        <meshPhysicalMaterial
          color="#fefce8"
          roughness={0.4}
          metalness={0.0}
          clearcoat={0.4}
        />
      </mesh>
      <mesh position={[0.32, -1.0, 0]} rotation={[0, 0, -0.18]} castShadow>
        <coneGeometry args={[0.32, 1.1, 24]} />
        <meshPhysicalMaterial
          color="#fefce8"
          roughness={0.4}
          metalness={0.0}
          clearcoat={0.4}
        />
      </mesh>
      {/* Subtle sparkle */}
      <mesh position={[-0.45, 0.7, 0.95]}>
        <sphereGeometry args={[0.08, 12, 12]} />
        <meshBasicMaterial color="#22d3ee" />
      </mesh>
    </group>
  );
}

/** Use a smaller pixel ratio + simpler env on small screens to keep mobile smooth. */
function useIsCompact() {
  const [compact, setCompact] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const onChange = () => setCompact(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return compact;
}

export default function ToothModel() {
  const wrapRef = useRef<HTMLDivElement>(null);
  // Only render frames when the canvas is on-screen — saves a lot of CPU/GPU
  // during scroll once the user has moved past the hero section.
  const [active, setActive] = useState(true);
  const compact = useIsCompact();

  useEffect(() => {
    const el = wrapRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) setActive(e.isIntersecting);
      },
      { threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className="relative h-full w-full">
      <Canvas
        camera={{ position: [0, 0.4, 4.6], fov: 38 }}
        // Lower DPR on mobile for big perf wins; cap at 1.5 even on desktop.
        dpr={compact ? [1, 1.25] : [1, 1.5]}
        gl={{
          antialias: !compact,
          alpha: true,
          powerPreference: "high-performance",
        }}
        // "demand" pauses the render loop until invalidate() is called.
        // Combined with our useFrame requesting the next frame only while
        // active, this stops drawing entirely when off-screen.
        frameloop={active ? "always" : "demand"}
        shadows={!compact}
      >
        <ambientLight intensity={0.7} />
        <directionalLight
          position={[3, 4, 3]}
          intensity={1.2}
          castShadow={!compact}
        />
        <directionalLight position={[-3, 2, 2]} intensity={0.6} color="#06b6d4" />
        <pointLight position={[0, -2, 3]} intensity={0.5} color="#0d9488" />
        <Suspense fallback={null}>
          <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.8}>
            <Tooth active={active} />
          </Float>
          {!compact && (
            <ContactShadows
              position={[0, -1.6, 0]}
              opacity={0.35}
              scale={6}
              blur={2.4}
              far={2}
              color="#0d9488"
            />
          )}
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
