import { GrLinkedin, GrInstagram } from "react-icons/gr";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { IconType } from "react-icons";

interface IFooter {
  icon: IconType;
  href: string;
}

const FooterItems: IFooter[] = [
  {
    icon: FaGithub,
    href: "https://github.com/toey02354",
  },
  {
    icon: GrLinkedin,
    href: "https://www.linkedin.com/in/natthaphol-uthumphirat",
  },
  {
    icon: GrInstagram,
    href: "https://www.instagram.com",
  },
  {
    icon: FaFacebook,
    href: "https://www.facebook.com",
  },
];

export default FooterItems;
