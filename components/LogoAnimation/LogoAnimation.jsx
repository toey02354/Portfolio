import Image from "next/image";
import { logoGroup1, logoGroup2, logoGroup3 } from "./LogoGroup";

const LogoSkill = () => {
  return (
    <div className="my-[2rem] mx-[2rem] p-2 sm:p-10">
      <div className="TW-LOGO-SKILL-GROUP">
        {logoGroup1.map((logo) => (
          <div className="TW-LOGO-SKILL" key={logo}>
            <Image src={logo} height="70" width="70"></Image>
          </div>
        ))}
      </div>
      <div className="TW-LOGO-SKILL-GROUP">
        {logoGroup2.map((logo) => (
          <div className="TW-LOGO-SKILL" key={logo}>
            <Image src={logo} height="70" width="70"></Image>
          </div>
        ))}
      </div>
      <div className="TW-LOGO-SKILL-GROUP">
        {logoGroup3.map((logo) => (
          <div className="TW-LOGO-SKILL" key={logo}>
            <Image src={logo} height="70" width="70"></Image>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSkill;
