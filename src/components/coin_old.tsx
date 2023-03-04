import { useTexture } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import { Mesh } from 'three';
import { DepthOfField, EffectComposer } from '@react-three/postprocessing';

export default function Coin() {
  const [colorMap, displacementMap, normalMap, roughnessMap] = useTexture([
    'Marble012_1K_Color.png',
    'Marble012_1K_Displacement.png',
    'Marble012_1K_NormalGL.png',
    'Marble012_1K_Roughness.png',
  ]);

  const meshRef = useRef<Mesh>(null!);
  const planeRef = useRef<Mesh>(null!);
  useFrame(() => {
    meshRef.current.rotation.x += 0.0;
    meshRef.current.rotation.y += 0.0;
    meshRef.current.rotation.z += 0.01;
    // planeRef.current.rotation.z = Math.PI / 4;
  });

  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight intensity={1} position={[0, -10, 10]} castShadow />
      <mesh position={[0, 0, 2]} ref={meshRef} receiveShadow castShadow>
        <cylinderGeometry args={[2, 2, 0.1, 50]} />
        <meshStandardMaterial
          displacementScale={0.0001}
          map={colorMap}
          displacementMap={displacementMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          roughness={1}
          metalness={0.4}
        />
      </mesh>
      <mesh ref={planeRef} receiveShadow>
        <planeBufferGeometry attach="geometry" args={[100, 100]} />
        <shadowMaterial attach="material" transparent opacity={1} />
        <meshStandardMaterial attach="material" color="white" />
      </mesh>
      <OrbitControls />
      {/* <EffectComposer>
        <DepthOfField focusDistance={1} />
      </EffectComposer> */}
    </>
  );
}
