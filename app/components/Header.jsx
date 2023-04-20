import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <Link href="/">WebWise</Link>
        </div>
        <div className="links">
          <Link href="/about">About</Link>
          <Link href="/about/team">Our Team</Link>
          <Link href="/code/repos">Code</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
