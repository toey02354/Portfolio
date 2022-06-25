import {
  GitHub,
  FacebookOutlined,
  Instagram,
  EmailOutlined,
} from "@mui/icons-material";

const FooterItems = [
  {
    icon: <GitHub />,
    href: "https://github.com/toey02354",
  },
  {
    icon: <EmailOutlined />,
    href: "https://mail.google.com",
  },
  {
    icon: <Instagram />,
    href: "https://www.instagram.com",
  },
  {
    icon: <FacebookOutlined />,
    href: "https://www.facebook.com",
  },
];

const LogoFooter = () => {
  return (
    <div className="flex flex-row items-center justify-center p-5">
      {FooterItems.map((item, index) => (
        <a
          key={`footer-${index}`}
          className="mx-2 text-white hover:text-stone-500"
          href={item.href}
          target="_blank"
          rel="noopender noreferrer"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default LogoFooter;
