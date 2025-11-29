import React from "react";
import logo from ".././assets/logo.svg";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import Menu from "./Menu";

const header = ["About", "Testimonial", "Career"];
// console.log(typeof header);
// console.log(Array.isArray(header));
// console.log(header);
// const brandName = "HNG";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuClick = () => {
    setIsOpen((bar) => !bar);
  };

  return (
    <>
      <header className="flex justify-between md:justify-around  items-center bg-[#00aeff] w-full p-4 relative ">
        <div className="flex items-center">
          <a href="/">
            <img src={logo} alt="logo" className="h-9" />
          </a>
          {/* <h2>{brandName}</h2> */}
        </div>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-4 md:gap-7  p-4">
            {header.map((link) => (
              <li className="font-semibold" key={link}>
                <a
                  href=""
                  className="text-white text-base hover:bg-[#e0f2f1] hover:border hover:py-2 hover:px-3 hover:text-[#00aeff]"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="blnock md:hidden ">
          <span>
            {isOpen ? <Menu className="translate-x-50" menu={header} /> : null}
          </span>
          <button className="block md:hidden" onClick={handleMenuClick}>
            {isOpen ? (
              <XMarkIcon className="size-10 text-white" />
            ) : (
              <Bars3Icon className="size-10 text-white" />
            )}
          </button>
          {/* <span>{isOpen ? <Menu menu={header} /> : null}</span> */}
        </div>
      </header>
    </>
  );
}

export default Header;
