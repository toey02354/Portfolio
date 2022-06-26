import Image from "next/image";
import { logoGroup1, logoGroup2, logoGroup3 } from "./LogoGroup";

const LogoSkill = () => {
  return (
    <div className="TW-WHITE-CARDS -skew-y-2 w-screen xl:w-[50vw] p-4 sm:p-10 rounded-xl shadow-lg">
      <div className="w-full grid grid-cols-3 sm:grid sm:grid-cols-6 gap-[2rem]">
        {logoGroup1.map((logo) => (
          <div className="TW-LOGO-SKILL" key={logo}>
            <Image src={logo} height="70" width="70" layout="fixed"/>
          </div>
        ))}
        {logoGroup2.map((logo) => (
          <div className="TW-LOGO-SKILL" key={logo}>
            <Image src={logo} height="70" width="70" layout="fixed"/>
          </div>
        ))}
        {logoGroup3.map((logo) => (
          <div className="TW-LOGO-SKILL" key={logo}>
            <Image src={logo} height="70" width="70" layout="fixed"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSkill;
