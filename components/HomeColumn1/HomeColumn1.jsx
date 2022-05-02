import Image from "next/dist/client/image";
import LogoAnimation from "../LogoAnimation";
import profilepic from "../../public/Images/profile.jpeg";

import { Suspense } from "react";
// three modules
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import JustagirlMoel from "../../components/GLTFModel/Justagirl";

const Column1 = () => {
  const JustAGirl = () => {
    return (
      <mesh position={[0, -1, 0]} scale={0.03}>
        <JustagirlMoel />
        <OrbitControls enableZoom={false} />
      </mesh>
    );
  };

  return (
    <>
      <div className="flex flex-col xl:flex-row">
        <div className="w-screen xl:w-1/2 z-40">
          <div
            className="
            pt-10 pb-5 px-10 sm:pt-20 sm:pb-10 sm:px-20 text-5xl sm:text-[5.2rem] font-bold drop-shadow-[0px_5px_5px_rgb(0,0,0,0.1)] bg-clip-text text-transparent bg-gradient-to-br from-amber-800 to-amber-600"
          >
            <text>NATTHAPHOL</text>
            <br />
            <text>UTHUMPHIRAT</text>
          </div>
          <div className="px-10 sm:py-0 sm:px-20 text-[2.1rem] sm:text-[3.3rem] drop-shadow-[0px_5px_5px_rgb(0,0,0,0.1) bg-clip-text text-transparent bg-gradient-to-br from-amber-800 to-amber-600">
            A Software Developer
          </div>
          <LogoAnimation />
        </div>
        <div className="xl:w-1/2 z-50 hidden xl:block">
          {/* <Image src={profilepic} className="xl:rounded-bl-full" /> */}
          <div className="h-screen">
            <Canvas>
              <Suspense fallback={null}>
                <JustAGirl />
              </Suspense>
              <ambientLight />
              <pointLight position={[1, 1, 5]} intensity={2} />
            </Canvas>
          </div>
        </div>
      </div>
    </>
  );
};

export default Column1;
