import { FC } from "react";

import { names } from "@/assets/data/Constants";
import FooterItems from "@/assets/data/FooterItems";

const Icon = ({ index }: { index: number }) => {
  const Icon = FooterItems[index].icon;
  return <Icon className="text-[1.75em]" />;
};

const Footer: FC = () => {
  return (
    <div className="bg-main FLEX-COL-CENTER gap-4 px-4 py-[3em]">
      <div className="flex items-center justify-center gap-4">
        {FooterItems.map((item, index) => (
          <a
            key={`footer-${index}`}
            href={item.href}
            target="_blank"
            rel="noopender noreferrer"
            className="text-white hover:text-stone-500"
          >
            <Icon index={index} />
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
