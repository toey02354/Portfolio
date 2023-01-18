import { FC } from "react";
import { names } from "../../utils/Constants";
import FooterItems from "./LogoFooter";

const Footer: FC = () => {
  return (
    <div className="bg-main flexcolcenter gap-4 px-4 py-[3em]">
      <div className="flex items-center justify-center gap-4">
        {FooterItems.map((item, index) => (
          <a
            key={`footer-${index}`}
            href={item.href}
            target="_blank"
            rel="noopender noreferrer"
            className="text-white hover:text-stone-500"
          >
            {item.icon}
          </a>
        ))}
      </div>
      <div className="text-[1.25rem] text-white">
        Created by {names.fullName}
      </div>
    </div>
  );
};

export default Footer;
