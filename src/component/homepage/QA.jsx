import { qa } from "@/content/Homepage/Qa";
import Image from "next/image";
import Link from "next/link";
import planetImage from "../../../public/plan/faq.jpg";

const QASection = () => {
  return (
    <section className='relative w-full h-auto md:h-[500px] px-4 md:px-16 py-12 md:py-0 flex items-center justify-center overflow-hidden'>
      {/* Background Image */}
      <Image
        src={planetImage}
        alt='Quote Background'
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
        {/* Title */}
        <h1 className='title-primary text-gray-900'>{qa.title}</h1>

        {/* Subtitle */}
        <p className='text-primary color-primary max-w-[800px] mx-auto mt-4'>
          {qa.subtitle}
        </p>

        {/* Buttons */}
        <div className='mt-8 flex flex-col sm:flex-row gap-4 justify-center'>
          {qa.button.map((btn, idx) => (
            <Link
              key={idx}
              href={btn.link}
              className={`
                px-6 py-3  transition
                ${
                  idx === 0
                    ? "button-primary"
                    : "border rounded-xl border-[#633826] text-gray-700 hover:bg-gray-100 primary-color"
                }
              `}>
              {btn.text}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QASection;
