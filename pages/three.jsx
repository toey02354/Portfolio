import { Suspense } from "react";
import Head from "next/head";
// three modules
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import IphoneModel from "../components/GLTFModel/Iphone";

const Earth = () => {
  return (
    <mesh position={[0, 0, 0]} scale={2}>
      <sphereGeometry attach="geometry" args={[1, 30, 30]} />
      <MeshDistortMaterial
        attach="material"
        color="#000354"
        speed={2}
        distort={0.5}
      />
      <OrbitControls enableZoom={false} />
    </mesh>
  );
};
const IPhone = () => {
  return (
    <mesh position={[0, 0, 0]} scale={2} rotation={[0, 5, 0]}>
      <IphoneModel />
      <OrbitControls enableZoom={false} />
    </mesh>
  );
};

const Three = () => {
  return (
    <>
      <Head>
        <title>3D models - Toey Portfolio</title>
      </Head>
      <div className="flex flex-col justify-center items-center">
        <div className="TW-CANVAS">
          <Canvas>
            <Suspense fallback={null}>
              <IPhone />
            </Suspense>
            <ambientLight />
            <pointLight position={[1, 1, 5]} intensity={2} />
          </Canvas>
        </div>
        <div className="TW-CANVAS">
          <Canvas>
            <Suspense fallback={null}>
              <Earth />
            </Suspense>
            <ambientLight />
            <pointLight position={[1, 1, 5]} intensity={2} />
          </Canvas>
        </div>
      </div>
    </>
  );
};

export default Three;
