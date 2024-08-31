import { navbarMenu } from "../../exData/data"; 
import ResponsiveMenu from "./ResponsiveMenu"; 
import { FiSearch } from "react-icons/fi"; 
import { RiShoppingCartLine } from "react-icons/ri"; 
import { LiaStrava } from "react-icons/lia"; 
import { MdMenu } from "react-icons/md"; 
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);
// 1270 only
  return ( 
    <>
      <nav>
        {/*  header section, including logo, menu, search bar, and icons */}
        <div
          className="relative container w-full left-0 top-0 flex justify-between items-center
                     md:py-8 md:mx-auto md:px-8
                     py-4 px-2
                     border-b-2 border-gray"

        >
          {/* -------------------------- Logo Section -------------------------- */}
          <div className="text-md md:text-2xl flex items-center gap-2 font-bold uppercase">
            {/* Logo Icon with dynamic size based on screen width */}
            <LiaStrava className="text-[40px] md:text-[70px]" />
            <p>Lrx |</p>
            <p className="text-c1">Gym</p>
          </div>

          {/* -------------------------- Menu Section -------------------------- */}
          <div className="hidden lg:block">
            <ul className="flex items-center justify-center gap-6">
              {navbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.url}
                      className="inline-block py-1 px-3 hover:text-c1 font-semibold transition-colors duration-300"
                    >
                      {item.title} 
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* -------------------------- Search Section -------------------------- */}
          <div className="hidden md:block group relative lg:w-[250px]">
            <input
              type="text"
              placeholder="search"
              className=" 
                        md:w-[200px] 
                        lg:group-hover:w-[250px]
                        transition-all duration-300 rounded-full border border-gray-300 px-9 py-2
                        focus:outline-none focus:border-1 focus:border-c1 
                        lg:focus:w-[250px]"
            />
            {/* Search icon */}
            <FiSearch className="md:absolute md:left-3 md:top-1/2 md:-translate-y-1/2 md:text-gray-500" />
          </div>

          {/* -------------------------- Icons Section -------------------------- */}
          <div className="flex gap-2 items-center">
            {/* Shopping cart icon */}
            <button className="hidden md:block text-xl md:text-2xl hover:bg-c1 hover:text-white rounded-full p-2 duration-300">
              <RiShoppingCartLine />
            </button>

            {/* Login button */}
            <button
              className="hidden md:block hover:bg-c1 hover:text-white duration-300 
                         rounded-md border border-c1 px-6 py-2 font-semibold"
            >
              Login
            </button>
          </div>

          {/* -------------------------- Mobile Menu Icon -------------------------- */}
          <div className="md:hidden block" onClick={() => setOpen(!open)}>
            {/* Menu icon for mobile view */}
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </nav>

      {/* Rendering ResponsiveMenu component for mobile view */}
      <ResponsiveMenu open={open} />
    </>
  );
}

export default Header;
