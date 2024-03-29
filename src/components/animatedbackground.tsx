import Coins from '@/components/coins';
import { Canvas } from '@react-three/fiber';

export default function AnimatedBackground() {
  return (
    <div className="animatedbackground absolute top-0 right-0 -z-50 max-h-screen">
      <Canvas
        shadows
        gl={{
          antialias: true,
        }}
        camera={{ position: [-30, 35, -15], near: 30, far: 55, fov: 12 }}
        dpr={0.8}
      >
        <Coins />
      </Canvas>
    </div>
  );
}
