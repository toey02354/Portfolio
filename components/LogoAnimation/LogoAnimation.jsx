import Image from "next/image";
import { logo1Batch, logo2Batch, logo3Batch } from "./LogoGroup";

const LogoSkill = () => {
  const logoClass =
    "grid grid-cols-3 sm:flex sm:flex-row sm:justify-between gap-[2.5rem] drop-shadow-[0px_5px_5px_rgb(0,0,0,0.1)]";

  const logosClass = "h-[100px] sm:tracking contrast-[0.8]";

  return (
    <div className="my-[2rem] mx-[2rem] p-2 sm:p-10">
      <div className={logoClass}>
        {logo1Batch.map((logo) => (
          <div className={logosClass} key={logo}>
            <Image src={logo} height="70" width="70"></Image>
          </div>
        ))}
      </div>
      <div className={logoClass}>
        {logo2Batch.map((logo) => (
          <div className={logosClass} key={logo}>
            <Image src={logo} height="70" width="70"></Image>
          </div>
        ))}
      </div>
      <div className={logoClass}>
        {logo3Batch.map((logo) => (
          <div className={logosClass} key={logo}>
            <Image src={logo} height="70" width="70"></Image>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSkill;
