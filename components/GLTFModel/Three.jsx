import { Suspense } from "react";
// three modules
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import IphoneModel from "./Iphone";
import JustagirlMoel from "./Justagirl";

const Three = () => {
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
  const JustAGirl = () => {
    return (
      <mesh position={[0, -1, 0]} scale={0.03}>
        <JustagirlMoel />
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

  return (
    <>
      <h1>THREE JS</h1>
      <DriveEtaTwoTon>
        <Canvas>
          <Suspense fallback={null}>
            <JustAGirl />
          </Suspense>
          <ambientLight />
          <pointLight position={[1, 1, 5]} intensity={2} />
        </Canvas>
      </DriveEtaTwoTon>
      <div>
        <Canvas>
          <Suspense fallback={null}>
            <IPhone />
          </Suspense>
          <ambientLight />
          <pointLight position={[1, 1, 5]} intensity={2} />
        </Canvas>
      </div>
      <div>
        <Canvas>
          <Suspense fallback={null}>
            <Earth />
          </Suspense>
          <ambientLight />
          <pointLight position={[1, 1, 5]} intensity={2} />
        </Canvas>
      </div>
    </>
  );
};

export default Three;
