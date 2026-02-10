import { banner } from "@/content/Homepage/Banner";
import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className='relative  max-w-7xl mx-auto lg:rounded-xl max-h-[700px] mt-16 mx-16 h-screen overflow-hidden'>
      {/* Background Video */}
      <video
        className='absolute inset-0 w-full h-full object-cover'
        src='/banner.mp4'
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className='absolute inset-0 bg-black/50' />

      {/* Banner Content */}
      <section
        className='relative  mt-12  z-10 flex flex-col items-
        h-full px-8  md:px-12 md:max-w-2/3'>
        {/* Hero Title */}
        <h1 className='banner-title'>{banner.title}</h1>

        <div className='mt-auto  pb-32'>
          <button className='relative banner-button mb-12 flex items-center gap-4 overflow-hidden'>
            {/* Rotating ring */}
            <span className='absolute inset-[-6px] rounded-full border-2 border-dashed border-yellow-400 animate-spin-slow' />

            {/* Button content */}
            <span className='relative z-10 flex items-center gap-4'>
              {banner.buttonText}
              <FaArrowRight className='text-sm' />
            </span>
          </button>

          <p className='banner-text'>{banner.subtitle}</p>
        </div>

        {/* button */}

        {/* Hero Subtitle / Supporting Text */}
        {/* {banner.subtitle && (
          <p className='mt-4 text-white text-lg md:text-2xl font-medium leading-relaxed max-w-3xl'>
            {banner.subtitle}
          </p>
        )} */}

        {/* Optional CTA Button */}
        {/* {banner.cta && (
          <button className='mt-8 bg-rose-500 hover:bg-rose-600 text-white font-semibold px-6 py-3 rounded-lg transition'>
            {banner.cta}
          </button>
        )} */}
      </section>
    </div>
  );
};

export default Banner;
