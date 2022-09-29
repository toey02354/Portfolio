import { GrLinkedin, GrInstagram } from "react-icons/gr";
import { FaFacebook, FaGithub } from "react-icons/fa";

interface Footer {
  icon: JSX.Element;
  href: string;
}

const FooterItems: Footer[] = [
  {
    icon: <FaGithub className="text-[1.75em]" />,
    href: "https://github.com/toey02354",
  },
  {
    icon: <GrLinkedin className="text-[1.75em]" />,
    href: "https://www.linkedin.com/in/natthaphol-uthumphirat",
  },
  {
    icon: <GrInstagram className="text-[1.75em]" />,
    href: "https://www.instagram.com",
  },
  {
    icon: <FaFacebook className="text-[1.75em]" />,
    href: "https://www.facebook.com",
  },
];

export default FooterItems;
