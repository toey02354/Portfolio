import Image from "next/image";
import { logoGroup1, logoGroup2, logoGroup3 } from "./LogoGroup";

const LogoSkill = () => {
  return (
    <div className="my-[2rem] mx-[2rem] p-2 sm:p-10">
      <div className="grid grid-cols-3 sm:grid sm:grid-cols-6 gap-[2rem] drop-shadow-[0px_5px_5px_rgb(0,0,0,0.1)]">
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
