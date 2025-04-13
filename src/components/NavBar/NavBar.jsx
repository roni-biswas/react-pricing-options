import React from "react";
import Link from "./Link";

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
  return (
    <nav className="pt-4">
      <ul className="flex gap-4 text-xl font-poppins">
        {navigationData.map((route) => (
          <Link key={route.id} route={route} />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
