interface Footer {
  icon: any;
  href: string;
}

const FooterItems: Footer[] = [
  {
    icon: <div className="bg-slate-700 p-2 rounded-xl">Github</div>,
    href: "https://github.com/toey02354",
  },
  {
    icon: <div className="bg-slate-700 p-2 rounded-xl">LinkedIn</div>,
    href: "https://www.linkedin.com/in/natthaphol-uthumphirat",
  },
  {
    icon: <div className="bg-slate-700 p-2 rounded-xl">Instagram</div>,
    href: "https://www.instagram.com",
  },
  {
    icon: <div className="bg-slate-700 p-2 rounded-xl">Facebook</div>,
    href: "https://www.facebook.com",
  },
];

export default FooterItems;
