import { Suspense } from "react";
// three modules
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import IphoneModel from "../components/GLTFModel/Iphone";

const three = () => {
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

  const canvasClass = "w-[80vw] h-[50vh] xl:w-[60vw] xl:h-screen";

  return (
    <div className="flex flex-col justify-center items-center">
      <div className={canvasClass}>
        <Canvas>
          <Suspense fallback={null}>
            <IPhone />
          </Suspense>
          <ambientLight />
          <pointLight position={[1, 1, 5]} intensity={2} />
        </Canvas>
      </div>
      <div className={canvasClass}>
        <Canvas>
          <Suspense fallback={null}>
            <Earth />
          </Suspense>
          <ambientLight />
          <pointLight position={[1, 1, 5]} intensity={2} />
        </Canvas>
      </div>
    </div>
  );
};

export default three;
