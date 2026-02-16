"use client";

import { useState } from "react";
import { navbar } from "@/content/Homepage/Navbar.js";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/ff.png";

const Navbar = () => {
  const [activeSub, setActiveSub] = useState(null);

  return (
    <header className="w-full border-b border-black/5 bg-white">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-4 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-black">
          <Image src={logo} alt="logo" />
        </Link>

        <ul className="hidden items-center gap-6 text-sm font-medium text-black/80 md:flex">
          {navbar.map((item, idx) => {
            const hasSubmenu = Array.isArray(item.submenu);

            return (
              <li key={idx} className="relative group">
                <Link
                  href={item.link}
                  className="inline-flex items-center gap-1 rounded-md px-2 py-1 transition hover:text-black"
                >
                  {item.name}
                </Link>

                {hasSubmenu && (
                  <div className="absolute -left-72 top-full z-50 hidden w-[800px] pt-4 group-hover:block">
                    <div className="flex rounded-lg bg-white shadow-xl border border-black/10 overflow-hidden">
                      
                      {/* LEFT SIDE MENU */}
                      <div className="w-1/3 border-r border-black/10 bg-gray-50 p-4">
                        {item.submenu.map((subItem, subIdx) => (
                          <button
                            key={subIdx}
                            onMouseEnter={() => setActiveSub(subIdx)}
                            className={`w-full text-left rounded-md px-4 py-2 text-sm transition ${
                              activeSub === subIdx
                                ? "bg-gray-200 font-semibold"
                                : "hover:bg-gray-100"
                            }`}
                          >
                            {subItem.name}
                          </button>
                        ))}
                      </div>

                      {/* RIGHT SIDE CONTENT */}
                      <div className="w-2/3 p-6">
                        {activeSub !== null &&
                          item.submenu[activeSub]?.content}
                      </div>

                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
