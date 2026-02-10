import { planet } from "@/content/Homepage/Planet";
import Image from "next/image";
import planetImage from "../../../public/plan/planet.jpg";

const Planet = () => {
  return (
    <section className='relative w-full px-16 h-[500px] flex items-center justify-center overflow-hidden'>
      {/* Background Image */}
      <Image
        src={planetImage}
        alt='Planet Background'
        fill
        priority
        className='object-cover absolute inset-0 -z-10'
      />

      {/* Overlay (optional but recommended) */}

      {/* Content */}
      <div className='relative z-10 bg-white space-y-8  w-[1080px] py-16 px-16 text-center text-white px-4'>
        <h1 className='title-primary'>{planet.title}</h1>
        <p className='color-primary text-lg max-w-[800px] mx-auto'>
          {planet.subttile}
        </p>
        <button className='button-primary'>Learn More</button>
      </div>
    </section>
  );
};

export default Planet;
