"use client";

import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Float } from "@react-three/drei";

function SatelliteModel(props: any) {
  const { scene } = useGLTF("/earth.glb");
  const meshRef = useRef<any>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.05; // قللنا السرعة شوية لواقعية أكثر
      meshRef.current.rotation.z += delta * 0.02;
    }
  });

  return (
    <Float 
      speed={3} 
      rotationIntensity={1} 
      floatIntensity={1.5} 
    >
      <primitive 
        object={scene} 
        ref={meshRef} 
        {...props}
      />
    </Float>
  );
}

useGLTF.preload("/earth.glb");

export default function FloatingShape() {
  return (
    <div className="w-full h-full relative pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 50 }} 
        gl={{ alpha: true, antialias: true }}
      >
        <Suspense fallback={null}>
          
          {/* 1. إضاءة محيطة متوسطة عشان نشوف التفاصيل الأساسية للكوكب */}
          <ambientLight intensity={0.5} color="#a5b4fc" />
          
          {/* 2. إضاءة رئيسية جانبية توضح التضاريس */}
          <directionalLight 
            position={[5, 2, 5]} 
            intensity={2} 
            color="#ffffff" 
          />
          
          {/* 3. إضاءة خلفية (Rim Light) عشان تفصل الكوكب عن الخلفية السوداء */}
          <spotLight 
            position={[-5, 0, -5]} 
            intensity={10} 
            color="#6366f1" // لون أزرق نيلي
            angle={0.5}
            penumbra={1}
          />
             <spotLight 
            position={[5, -5, -2]} 
            intensity={5} 
            color="#ec4899" // لمسة بينك خفيفة من تحت
            angle={0.5}
            penumbra={1}
          />

          <SatelliteModel 
            // كبرنا الحجم سنة بسيطة
            scale={1} 
            // رجعناه للنص (0,0,0) عشان نتحكم في مكانه بالـ CSS في الفوتر أسهل
            position={[0, 0, 0]}
            rotation={[0.3, 0, 0]} 
          />
          
        </Suspense>
      </Canvas>
    </div>
  );
}