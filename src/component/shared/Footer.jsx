import {
  adress,
  description,
  footerIcon,
  packageText,
  quickLink,
} from "../../content/Homepage/footer.js";
import footerLogo from "../../../public/footer-logo.png";
import Image from "next/image.js";

const Footer = () => {
  return (
    <footer
      className='
        w-full
        text-white
        mt-24
      '
      style={{
        background:
          "linear-gradient(90deg, #0E323B 0%, #1A5766 74.04%, #1A4E5A 86.06%)",
      }}>
      <div className='max-w-7xl mx-auto px-6 lg:px-16 py-16 grid grid-cols-1 md:grid-cols-3 gap-12'>
        {/* LEFT */}
        <div className='space-y-4'>
          <Image src={footerLogo} alt='logo' />

          <p className='text-sm text-gray-200 leading-relaxed'>{description}</p>

          <div className='flex items-center gap-4 text-2xl'>
            {footerIcon.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                className='hover:text-[#E2B887] transition'>
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* MIDDLE */}
        <div className='space-y-4'>
          <h3 className='font-semibold text-lg'>Services</h3>

          <ul className='space-y-2 text-sm text-gray-200'>
            {quickLink.map((item, idx) => (
              <li key={idx}>
                <a href={item.link} className='hover:text-[#E2B887] transition'>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div className='space-y-4'>
          <h3 className='font-semibold text-lg'>Contact Us</h3>

          <div className='space-y-2 text-sm text-gray-200'>
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
