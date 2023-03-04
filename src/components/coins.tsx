import { MathUtils } from 'three';
import {
  AccumulativeShadows,
  RandomizedLight,
  OrbitControls,
  Environment,
  Lightformer,
} from '@react-three/drei';
import { EffectComposer, DepthOfField } from '@react-three/postprocessing';
import {
  Physics,
  RigidBody,
  CuboidCollider,
  InstancedRigidBodies,
} from '@react-three/rapier';
import { useTexture } from '@react-three/drei';

export default function Coins() {
  return (
    <>
      {/* Lighting, environment and colors */}
      <color attach="background" args={['#FFFDF7']} />
      <ambientLight intensity={0.1} />
      <directionalLight
        position={[-10, 10, 5]}
        shadow-mapSize={[256, 256]}
        shadow-bias={-0.0001}
        castShadow
      >
        <orthographicCamera attach="shadow-camera" args={[-10, 10, -10, 10]} />
      </directionalLight>
      <Environment resolution={32}>
        <Lightformer position={[10, 10, 10]} scale={10} intensity={2} />
        <Lightformer position={[10, 0, -10]} scale={10} intensity={3} />
        <Lightformer position={[-10, -10, -10]} scale={10} intensity={2} />
      </Environment>
      {/* Moon physics */}
      <Physics gravity={[0, -0.6, 0]}>
        <Cylinders />
        <RigidBody position={[0, -1, 0]} type="fixed" colliders="false">
          <CuboidCollider restitution={0.2} args={[1000, 1, 1000]} />
        </RigidBody>
      </Physics>
      {/* Soft shadows, they stop rendering after 1500 frames */}
      <AccumulativeShadows
        temporal
        frames={Infinity}
        alphaTest={1}
        blend={200}
        scale={25}
        position={[0, -0.05, 0]}
      >
        <RandomizedLight
          amount={1}
          mapSize={512}
          radius={5}
          ambient={0.5}
          position={[-10, 10, 5]}
          size={10}
          bias={0.001}
        />
      </AccumulativeShadows>
      {/* Effects */}
      <EffectComposer>
        <DepthOfField target={[0, 0, 0]} focusRange={0.15} bokehScale={8} />
      </EffectComposer>
      {/* Controls */}
      <OrbitControls
        autoRotate
        autoRotateSpeed={0.01}
        enabled={true}
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 4}
      />
    </>
  );
}

function Cylinders({ count = 7, rand = MathUtils.randFloatSpread }) {
  const colorMap = useTexture('https://i.ibb.co/4P9ttHZ/TEXTUREGOLD2.png');
  // const positions = Array.from({ length: count }, (_, i) => [
  //   rand(2) - 1.5,
  //   10 + i / 2,
  //   rand(2) + 3,
  // ]);
  const positions = [
    [-1.5, 8, 7],
    [-3, 11, 6],
    [-5, 13, 6],
    [-4, 16, -1],
    [0, 19, 2],
    [7, 21, -3],
    [7, 22, 3],
    [-3, 25, 0],
  ];
  const rotations = Array.from({ length: count }, () => [
    Math.random(),
    Math.random(),
    Math.random(),
  ]);

  return (
    <InstancedRigidBodies
      positions={positions}
      rotations={rotations}
      colliders="hull"
    >
      <instancedMesh
        receiveShadow
        castShadow
        args={[undefined, undefined, count]}
        dispose={null}
      >
        {/* Merging the hat into one clump bc instances need a single geometry to function */}
        <cylinderGeometry args={[1, 1, 0.1, 32]} />
        <meshStandardMaterial map={colorMap} />
      </instancedMesh>
    </InstancedRigidBodies>
  );
}
