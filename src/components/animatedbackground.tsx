import Coins from '@/components/coins';
import { Canvas } from '@react-three/fiber';
import { useState } from 'react';
// import { PerformanceMonitor } from '@react-three/drei';

export default function AnimatedBackground() {
  const [dpr, setDpr] = useState(0.9);
  return (
    <div className="animatedbackground absolute top-0 right-0 -z-20">
      <Canvas
        shadows
        gl={{
          antialias: true,
        }}
        camera={{ position: [-30, 35, -15], near: 30, far: 55, fov: 12 }}
        dpr={dpr}
      >
        {/* <PerformanceMonitor
          onIncline={() => dpr < 1.2 && setDpr(dpr + 0.1)}
          onDecline={() => setDpr(1)}
        /> */}
        <Coins />
      </Canvas>
    </div>
  );
}
