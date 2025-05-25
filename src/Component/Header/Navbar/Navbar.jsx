import React from "react";
import NavLinks from "./NavLinks";
import { navItems } from "../../../data/Data.js";
import SvgIcon from "../../ResuableComponent/SvgIcon";
import SearchBar from "../../ResuableComponent/SearchBar";

function Navbar() {
  return (
    <header className="border-b border-gray-200 md:px-8 py-4 ">
      <div className="container  mx-auto flex items-center justify-between">
        <a href="#" className="text-2xl font-bold">
          LWS.SHOP
        </a>
        <NavLinks links={navItems} />
        <div className="flex items-center space-x-4">
          <SearchBar
            placeholder="Search for products..."
            className="w-64 hidden md:block"
          />
          <a href="#" className="hover:text-gray-500 transition-colors">
            <SvgIcon name="cart" />
          </a>
          <a href="#" className="hover:text-gray-500 transition-colors">
            <SvgIcon name="user" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
