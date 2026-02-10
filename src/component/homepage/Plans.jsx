import { plans } from "@/content/Homepage/Plans";
import Image from "next/image";
import image1 from "../../../public/plan/plan1.jpg";
import image2 from "../../../public/plan/plan2.jpg";

const Plans = () => {
  return (
    <section className='max-w-7xl mx-auto mt-44 px-4 md:px-0 flex flex-col md:flex-row items-center gap-8'>
      {/* Text Section */}
      <div className='flex-1 space-y-6 md:pr-8'>
        <h1 className='title-primary leading-tight'>
          Custom Business <span className='color-lead'>Insurance</span> Plans
        </h1>
        <p className='color-gray  '>{plans.subtitle}</p>
        <button className='button-primary mt-4 px-6 py-2 rounded-lg'>
          Read More
        </button>
      </div>

      {/* Image Section */}
      <div className='flex-1 relative w-full h-[400px] md:h-[450px]'>
        {/* Bottom Image */}
        <div className='absolute -top-16 left-8 w-4/5 h-5/6 shadow-lg rounded-xl overflow-hidden'>
          <Image src={image2} alt='Plan 2' fill className='object-cover' />
        </div>

        {/* Top Image */}
        <div className='absolute top-0 left-0 w-4/5 h-5/6 shadow-2xl rounded-xl overflow-hidden'>
          <Image src={image1} alt='Plan 1' fill className='object-cover' />
        </div>
      </div>
    </section>
  );
};

export default Plans;
