"use client";

import { useGLTF, Float, Environment, ContactShadows } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import * as THREE from "three";

export default function Avatar() {
  const { scene, animations } = useGLTF("/models/naruto-sage.glb");
  const modelRef = useRef<THREE.Group>(null);
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);

  useEffect(() => {
    if (animations && animations.length > 0) {
      const mixer = new THREE.AnimationMixer(scene);
      mixerRef.current = mixer;
      
      // Try to find a "calm" or "idle" animation
      const idleAnim = animations.find(a => 
        a.name.toLowerCase().includes("idle") || 
        a.name.toLowerCase().includes("breathe")
      ) || animations[0];
      
      const action = mixer.clipAction(idleAnim);
      action.play();
    }
  }, [scene, animations]);

  useFrame((state, delta) => {
    // Mixer update for animations
    if (mixerRef.current) mixerRef.current.update(delta);

    // Subtle floating and rotation based on mouse position
    if (modelRef.current) {
      const { x, y } = state.mouse;
      
      // Target rotation (max 5 degrees = ~0.087 rad)
      const targetRotationY = x * 0.1;
      const targetRotationX = -y * 0.05;
      
      modelRef.current.rotation.y = THREE.MathUtils.lerp(
        modelRef.current.rotation.y,
        targetRotationY,
        0.05
      );
      modelRef.current.rotation.x = THREE.MathUtils.lerp(
        modelRef.current.rotation.x,
        targetRotationX,
        0.05
      );
    }
  });

  return (
    <group>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <primitive 
          ref={modelRef}
          object={scene} 
          scale={2.2} 
          position={[0, -2, 0]} 
          rotation={[0, 0, 0]}
        />
      </Float>

      {/* Baked Lighting Feel */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#38BDF8" />
      <pointLight position={[-5, 2, -2]} intensity={0.5} color="#22C55E" />
      
      <ContactShadows 
        opacity={0.4} 
        scale={10} 
        blur={2} 
        far={4.5} 
        resolution={256} 
        color="#000000" 
      />
    </group>
  );
}

useGLTF.preload("/models/naruto-sage.glb");
