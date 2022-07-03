import FooterItems from "./LogoFooter";

const Footer = () => {
  return (
    <div className="bg-main flex flex-col justify-center items-center gap-2 p-4">
      <div className="flex items-center justify-center gap-6 p-4">
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
      <hr className="w-[100%] lg:w-[70%] h-[2px]" />
      <div className="text-[1.25rem] p-4 text-white">
        Created by Natthaphol Uthumphirat
      </div>
    </div>
  );
};

export default Footer;
