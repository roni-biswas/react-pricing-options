import React from "react";

const Link = ({ route }) => {
  return (
    <li className=" pr-8 p-2.5 hover:text-orange-500 duration-500">
      <a href={route.url_path}>{route.name}</a>
    </li>
  );
};

export default Link;
