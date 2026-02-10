import { navbar } from "@/content/Homepage/Navbar.js";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/ff.png";

const Navbar = () => {
  return (
    <header className='w-full border-b border-black/5 bg-white'>
      <nav className='mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-4 py-4'>
        <Link
          href='/'
          className='text-lg font-semibold tracking-tight text-black'>
          <Image src={logo} alt='logo' className='' />
        </Link>

        <ul className='hidden items-center gap-6 text-sm font-medium text-black/80 md:flex'>
          {navbar.map((item, idx) => {
            const hasSubmenu = Array.isArray(item.submenu);
            return (
              <li key={`${item.name}-${idx}`} className='relative group'>
                <Link
                  href={item.link}
                  className='inline-flex items-center gap-1 rounded-md px-2 py-1 transition hover:text-black'>
                  {item.name}
                </Link>

                {hasSubmenu && (
                  <div className='absolute left-0 top-full z-20 hidden w-[520px] pt-3 group-hover:block'>
                    <div className='grid gap-4 rounded-2xl border border-black/10 bg-white p-4 shadow-[0_18px_40px_rgba(0,0,0,0.08)]'>
                      <div className='grid grid-cols-2 gap-2'>
                        {item.submenu.map((subItem, subIdx) => (
                          <Link
                            key={`${subItem.name}-${subIdx}`}
                            href={subItem.link}
                            className='rounded-lg border border-black/5 px-3 py-2 text-sm text-black/80 transition hover:border-black/15 hover:bg-black/5 hover:text-black'>
                            {subItem.name}
                          </Link>
                        ))}
                      </div>

                      {item.submenu.some((subItem) => subItem.content) && (
                        <div className='rounded-xl bg-black/5 p-4 text-sm text-black/70'>
                          {item.submenu.find((subItem) => subItem.content)
                            ?.content || (
                            <div>
                              Compare plans, customize coverage, and get a quick
                              quote in minutes.
                            </div>
                          )}
                        </div>
                      )}
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
