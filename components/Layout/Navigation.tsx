import React from "react";

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
    href: "/about",
  },
  {
    title: "Marketplace",
    href: "/contact",
  },
  {
    title: "Policy",
    href: "/policy",
  },
];

export default function Navigation({ activeItem }: Props) {
  return (
    <div className="block md:flex">
      {navItems.map((item, index) => (
        <div key={item.title}>
          <h5
            className={`inline-block md:px-4 xl:px-8 py-5 md:py-0 text-[18px] font-Inter ${
              activeItem === index && "text-[#6dff4b]"
            }`}
          >
            {item.title}
          </h5>
        </div>
      ))}
    </div>
  );
}
