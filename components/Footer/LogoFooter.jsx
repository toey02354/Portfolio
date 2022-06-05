import {
  GitHub,
  FacebookOutlined,
  Instagram,
  EmailOutlined,
} from "@mui/icons-material";

const FooterItems = [
  {
    key: 1,
    icon: <GitHub />,
    href: "https://github.com/toey02354",
  },
  {
    key: 2,
    icon: <EmailOutlined />,
    href: "https://mail.google.com",
  },
  {
    key: 3,
    icon: <Instagram />,
    href: "https://www.instagram.com",
  },
  {
    key: 4,
    icon: <FacebookOutlined />,
    href: "https://www.facebook.com",
  },
];

const LogoFooter = () => {
  return (
    <div className="flex flex-row items-center justify-center p-5">
      {FooterItems.map((item) => (
        <a
          key={item.key}
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
