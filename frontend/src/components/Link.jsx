import React from "react";

const Link = (props) => {
  return (
    <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
      {props.text}
    </a>
  );
};

export default Link;
