import React from "react";

import { Link } from "wouter";

import logo from "../../assets/logo.png";
import HeaderDropdown from "./HeaderDropdown";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 flex flex-wrap bg-black/95 backdrop-blur [@supports(backdrop-filter:blur(0))]:bg-black/75">
      <nav className="container mx-auto px-4 py-4 sm:py-8 sm:px-6 lg:px-8 flex relative z-50 items-center justify-between">
        <Link to="/">
          <a>
            <img src={logo} className="h-4 w-auto" alt="spacalliX" />
          </a>
        </Link>
        <HeaderDropdown />
      </nav>
    </header>
  );
};

export default Header;
