import FooterItems from "./LogoFooter";

const Footer = () => {
  return (
    <div className="bg-main flex flex-col justify-center items-center gap-4 px-4 py-[3em]">
      <div className="flex items-center justify-center gap-2">
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
        Created by Natthaphol Uthumphirat
      </div>
    </div>
  );
};

export default Footer;
