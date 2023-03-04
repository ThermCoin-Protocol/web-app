import Coins from '@/components/coins';
import { Canvas } from '@react-three/fiber';
// import { useState } from 'react';
// import { PerformanceMonitor } from '@react-three/drei';

export default function AnimatedBackground() {
  // const [dpr, setDpr] = useState(1.0);
  return (
    <div className="animatedbackground absolute top-0 right-0 -z-50">
      <Canvas
        shadows
        gl={{
          antialias: true,
        }}
        camera={{ position: [-30, 35, -15], near: 30, far: 55, fov: 12 }}
        dpr={1.1}
      >
        {/* <PerformanceMonitor
          onIncline={() => dpr < 1.2 && setDpr(dpr + 0.1)}
          onDecline={() => setDpr(dpr - 0.1)}
        /> */}
        <Coins />
      </Canvas>
    </div>
  );
}
