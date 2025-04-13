import React from "react";

const Link = ({ route }) => {
  return (
    <li>
      <a href={route.url_path}>{route.name}</a>
    </li>
  );
};

export default Link;
