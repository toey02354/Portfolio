import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const LogoFooter = () => {
  // CSS Class
  const logoClass = "mx-2 text-white hover:text-stone-500";
  // Footer Items
  const FooterItems = [
    {
      icon: <GitHubIcon />,
      href: "https://github.com/toey02354",
    },
    {
      icon: <EmailOutlinedIcon />,
      href: "https://mail.google.com",
    },
    {
      icon: <InstagramIcon />,
      href: "https://www.instagram.com",
    },
    {
      icon: <FacebookOutlinedIcon />,
      href: "https://www.facebook.com",
    },
  ];

  return (
    <div className="flex flex-row items-center justify-center p-5">
      {FooterItems.map((item) => (
        <a
          className={logoClass}
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
