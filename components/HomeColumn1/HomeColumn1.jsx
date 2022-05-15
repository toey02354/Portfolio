import { useState } from "react";
import Image from "next/dist/client/image";
import LogoAnimation from "../LogoAnimation";
import profilepic from "../../public/Images/profile.jpeg";

import { Suspense } from "react";
// three modules
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import JustagirlMoel from "../../components/GLTFModel/Justagirl";

const Column1 = () => {
  const [chooseOne, setChoose] = useState(1);

  const JustAGirl = () => {
    return (
      <mesh position={[0, -1, 0]} scale={0.03}>
        <JustagirlMoel />
        <OrbitControls enableZoom={false} />
      </mesh>
    );
  };

  const buttonClass = "m-1 p-3 bg-slate-600 text-white rounded-full";

  return (
    <div className="flex flex-col xl:flex-row">
      <div className="w-screen xl:w-1/2 z-40">
        <div
          className="
            highlight-text-grad pt-10 pb-5 px-10 sm:pt-20 sm:pb-10 sm:px-20 text-5xl sm:text-[5.2rem] font-bold drop-shadow-[0px_5px_5px_rgb(0,0,0,0.1)]"
        >
          <text>NATTHAPHOL</text>
          <br />
          <text>UTHUMPHIRAT</text>
        </div>
        <div className="highlight-text-grad px-10 sm:py-0 sm:px-20 text-[2.1rem] sm:text-[3.3rem] drop-shadow-[0px_5px_5px_rgb(0,0,0,0.1)">
          A Software Developer
        </div>
        <LogoAnimation />
      </div>
      <div className="xl:w-1/2 z-50 flex flex-col justify-start items-center">
        <div className="flex flex-row justify-start items-center m-[1rem]">
          <button
            className={buttonClass.concat(
              chooseOne == 1 ? " ring ring-amber-600" : ""
            )}
            onClick={() => setChoose(1)}
          ></button>
          <button
            className={buttonClass.concat(
              chooseOne == 2 ? " ring ring-amber-600" : ""
            )}
            onClick={() => setChoose(2)}
          ></button>
        </div>
        {chooseOne == 1 ? (
          <div className="h-[60vh] w-[80vw] xl:h-full xl:w-full">
            <Canvas>
              <Suspense fallback={null}>
                <JustAGirl />
              </Suspense>
              <ambientLight />
              <pointLight position={[1, 1, 5]} intensity={2} />
            </Canvas>
          </div>
        ) : (
          <Image src={profilepic} className="xl:rounded-bl-full" />
        )}
      </div>
    </div>
  );
};

export default Column1;
