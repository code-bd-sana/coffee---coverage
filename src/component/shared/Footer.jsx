import {
  adress,
  footerIcon,
  quickLink,
} from "../../content/Homepage/footer.js";
import footerLogo from "../../../public/footer-logo.png";
import Image from "next/image.js";

const Footer = () => {
  return (
    <footer
      className='w-full text-white mt-24'
      style={{
        background:
          "linear-gradient(90deg, #0E323B 0%, #1A5766 74.04%, #1A4E5A 86.06%)",
      }}
    >
      <div className='max-w-7xl mx-auto px-6 lg:px-16 py-16 grid grid-cols-1 md:grid-cols-3 gap-12'>
        
        {/* LEFT */}
        <div className='space-y-6'>
          <Image src={footerLogo} alt='logo' />

          <div className='flex items-center gap-4'>
            {footerIcon.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                className='
                  group
                  w-11 h-11
                  flex items-center justify-center
                  bg-white
                  text-[#0E323B]
                  rounded-full
                  shadow-md
                  transition-all duration-300 ease-out
                  hover:scale-125
                  hover:-translate-y-1
                  hover:shadow-xl
                '
              >
                <span className='text-lg transition-transform duration-300 group-hover:rotate-6'>
                  {item.icon}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* MIDDLE */}
        <div className='space-y-6'>
          <h3 className='font-semibold text-lg'>Services</h3>

          <ul className='space-y-3 text-sm text-gray-200'>
            {quickLink.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.link}
                  className='transition duration-300 hover:text-[#E2B887] hover:translate-x-1 inline-block'
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div className='space-y-6'>
          <h3 className='font-semibold text-lg'>Contact Us</h3>

          <div className='space-y-3 text-sm text-gray-200'>
            <p>{adress.adress}</p>
            <p>{adress.email}</p>
            <p>{adress.number}</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className='border-t border-white/20 py-4 text-center text-sm text-gray-300'>
        © {new Date().getFullYear()} Coffee Coverage. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
