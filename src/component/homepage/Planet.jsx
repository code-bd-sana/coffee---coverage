import { planet } from "@/content/Homepage/Planet";
import Image from "next/image";
import planetImage from "../../../public/plan/planet.jpg";

const Planet = () => {
  return (
    <section className='relative w-full h-auto md:h-[500px] px-4 md:px-16 py-12 md:py-0 flex items-center justify-center overflow-hidden'>
      {/* Background Image */}
      <Image
        src={planetImage}
        alt='Planet Background'
        fill
        priority
        className='object-cover absolute inset-0 -z-10'
      />

      {/* Overlay */}
      <div className='absolute inset-0 bg-black/40 -z-10' />

      {/* Content Card */}
      <div
        className='
          relative z-10
          bg-white
          w-full max-w-[1080px]
          px-6 md:px-16
          py-10 md:py-16
          text-center
          rounded-2xl
          shadow-xl
        '>
        <h1 className='title-primary text-gray-900'>{planet.title}</h1>

        <p className='text-primary text-gray-600 max-w-[800px] mx-auto mt-4'>
          {planet.subttile}
        </p>

        <button className='button-primary mt-6'>Learn More</button>
      </div>
    </section>
  );
};

export default Planet;
