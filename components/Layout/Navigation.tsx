import React from "react";
import Link from "next/link";

type Props = {
  activeItem: Number;
};

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about-us",
  },
  {
    title: "Marketplace",
    href: "/contact",
  },
  {
    title: "Contact Us",
    href: "/contact-us",
  },
];

export default function Navigation({ activeItem }: Props) {
  return (
    <div className="block md:flex  ">
      {navItems.map((item, index) => (
        <Link href={item.href}>
        <div key={item.title} className="">
          <h5
            className={`inline-block md:px-4 xl:px-8 py-5 md:py-0 text-[18px] font-Inter hover:text-[#64ff4b] cursor-pointer  ${
              activeItem === index && "text-[#6dff4b]"
            }`}
          >
            {item.title}
          </h5>
        </div>
        </Link>
      ))}
    </div>
  );
}
