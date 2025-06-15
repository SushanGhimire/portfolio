import React from "react";

type Props = {};

const Footer = (props: Props) => {
  const date = new Date();
  return (
    <div className="text-center py-10 font-light border-t flex items-center justify-center">
      © {date.getFullYear()} Susan Ghimire. All rights reserved.
    </div>
  );
};

export default Footer;
