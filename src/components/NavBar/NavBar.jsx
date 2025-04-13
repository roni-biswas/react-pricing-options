import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";

const navigationData = [
  {
    id: 1,
    name: "Home",
    url_path: "/",
  },
  {
    id: 2,
    name: "About Us",
    url_path: "/about",
  },
  {
    id: 3,
    name: "Services",
    url_path: "/services",
  },
  {
    id: 4,
    name: "Blog",
    url_path: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    url_path: "/contact",
  },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const links = navigationData.map((route) => (
    <Link key={route.id} route={route} />
  ));

  return (
    <nav className="w-11/12 mx-auto flex justify-between h-20 items-center text-black">
      {/* toggle menu for small device */}
      <div className="flex md:hidden gap-1.5 items-center cursor-pointer">
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
        <ul
          className={`text-xl font-poppins absolute duration-1000 bg-amber-200 top-20 rounded-b-md
            ${open ? "left-6" : "-left-60"}
            `}
        >
          {links}
        </ul>
      </div>

      {/* Logo */}
      <a href="/">
        <h3 className="text-2xl font-bold">
          <span className="text-orange-600">Pricing</span>Options
        </h3>
      </a>

      {/* Menu Lists */}
      <ul className="md:flex gap-4 text-xl font-poppins hidden">{links}</ul>
      {/* Sign In Button */}
      <button className="btn text-xl">Sign In</button>
    </nav>
  );
};

export default NavBar;
