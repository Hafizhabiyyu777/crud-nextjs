"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {

  const pathname = usePathname();
  const navItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About Page",
      href: "/about",
    },
    {
      label: "FAQ",
      href: "/about/faq",
    },
    {
      label: "POST",
      href: "/posts",
    },
  ];

  return (
    <div>
      <ul className="flex gap-5 py ">
        {
        navItems.map((link, index) => (
          <li key={index}>
            <Link href={link.href} className={ pathname === `${link.href}` ? 
            "text-blue-500 font-bold" :"" }>
              {link.label}
            </Link>
          </li>
        ))
        }
      </ul>
    </div>
  );
};

export default Header;
