"use client";
import { faq, faqItem } from "@/content/Homepage/Faq";
import Image from "next/image";
import { useState } from "react";
import { GoPlusCircle } from "react-icons/go";
import { RxCrossCircled } from "react-icons/rx";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='py-16 px-4 md:px-10 lg:px-20 max-w-[1400px] mx-auto'>
      {/* Title Section */}
      <div className='text-center mb-12'>
        <h2 data-aos="fade-right" className='title-primary'>
          {faq.title1} <span className='color-primary'>{faq.title2}</span>
        </h2>
        <p data-aos="fade-up"
     data-aos-duration="2000" className='text-secondary color-primary mt-3 max-w-[600px] mx-auto'>
          {faq.subtitle}
        </p>
      </div>

      {/* Main FAQ Layout */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
        {/* Left Image */}
        <div className='w-full'>
          <Image
            src={faq.image}
            alt='faq image'
            className='rounded-xl shadow-md w-full object-cover'
          />
        </div>

        {/* Right Accordion */}
        <div className='space-y-3'>
          {faqItem.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className='border border-gray-200 rounded-xl p-4 cursor-pointer transition-all bg-white hover:shadow-sm'
                onClick={() => toggleFaq(index)}>
                {/* Title Row */}
                <div className='flex justify-between items-center'>
                  <h3
                    className={`font-semibold text-[16px] md:text-[18px] transition-all duration-200 ${
                      isOpen ? "color-primary" : "text-gray-800"
                    }`}>
                    {item.title}
                  </h3>

                  {/* Icon */}
                  <span
                    className={`text-lg transition-all duration-200 ${
                      isOpen ? "color-primary" : "text-gray-600"
                    }`}>
                    {isOpen ? (
                      <span>
                        <RxCrossCircled className='text-2xl color-primary' />
                      </span>
                    ) : (
                      <GoPlusCircle className='text-2xl color-primary' />
                    )}
                  </span>
                </div>

                {/* Description */}
                {isOpen && (
                  <p className='text-secondary mt-3'>{item.description}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
