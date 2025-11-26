"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

function RobotModel(props: any) {
  const { scene } = useGLTF("/stylized_robot_0-9_max.glb");
  return <primitive object={scene} {...props} />;
}

// Preload the model
useGLTF.preload("/stylized_robot_0-9_max.glb");

export default function RobotScene() {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{ position: [0, 2, 8], fov: 50 }} // رجعت الكاميرا ورا شوية
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
      >
        <Suspense fallback={null}>
          
          <ambientLight intensity={2} />
          <directionalLight position={[10, 1, 5]} intensity={2} color="#ffffff" />
          <spotLight position={[-10, -10, -5]} intensity={4} color="#323261ff" />
          
          <RobotModel 
            scale={3.5} // كبرته الضعف (كان 3)
            position={[0, -4, 0]} // نزلته تحت شوية عشان لما يكبر يبان كله
            // التريكاية هنا: جربت الفه 90 درجة (1.57 راديان) عشان يقف لو هو واقع
            // لو طلع لسه واقع، جرب تغير الرقم الأول ده لـ 0 أو -1.57
            rotation={[0, -4,0.1]} 
          />
          
          <OrbitControls
            enableZoom={true}
            enablePan={true}
            autoRotate={true}
            autoRotateSpeed={2}
          />
          
        </Suspense>
      </Canvas>
    </div>
  );
}