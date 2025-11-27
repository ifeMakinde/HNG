import React from "react";

function Menu({ menu }) {
  return (
    <div className="text-center absolute h-screen top-22 md:top-27 right-0 p-9 bg-white w-[55%] transform transition-transform duration-300 ease-in-out ">
      <ul className="flex flex-col gap-6 justify-center text-lg capitalize font-semibold ">
        {menu.map((mobileNav) => (
          <li key={mobileNav} className="hover:text-[#00aeff]">
            {mobileNav}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
