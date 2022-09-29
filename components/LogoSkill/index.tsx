import { FC } from "react";
import Image from "next/image";
import { logoGroup1, logoGroup2, logoGroup3 } from "./LogoGroup";

const LogoSkill: FC = () => {
  return (
    <div className="WhiteCard blur-thig-3xl -skew-y-2 p-4 sm:p-10 rounded-xl shadow-lg bg-white/20 blur-thing-2xl">
      <div className="w-full grid grid-cols-3 sm:grid sm:grid-cols-6 gap-[1rem] md:gap-[2rem]">
        {logoGroup1.map((logo, index) => (
          <div className="TW-LOGO-SKILL" key={`1-${logo}`}>
            <Image
              src={logo}
              height="70"
              width="70"
              layout="fixed"
              alt={`logo-group1-${index}`}
            />
          </div>
        ))}
        {logoGroup2.map((logo, index) => (
          <div className="TW-LOGO-SKILL" key={`2-${logo}`}>
            <Image
              src={logo}
              height="70"
              width="70"
              layout="fixed"
              alt={`logo-group2-${index}`}
            />
          </div>
        ))}
        {logoGroup3.map((logo, index) => (
          <div className="TW-LOGO-SKILL" key={`3-${logo}`}>
            <Image
              src={logo}
              height="70"
              width="70"
              layout="fixed"
              alt={`logo-group3-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSkill;
