"use client";
import { solution, solutionItem } from "@/content/Homepage/Solutions";
import Image from "next/image";
import { useState } from "react";
import { TfiArrowCircleDown } from "react-icons/tfi";

const OurSolutions = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDescription = (idx) => {
    if (expandedIndex === idx) {
      setExpandedIndex(null); // Collapse if same card is clicked
    } else {
      setExpandedIndex(idx); // Expand clicked card
    }
  };

  return (
    <section className='text-center mt-12 px-4 md:px-0'>
      {/* Heading */}
      <h1 data-aos='fade-right' className='title-primary'>
        {solution.title}
      </h1>
      <p
        data-aos='fade-up'
        data-aos-duration='2000'
        className='text-primary text-lg max-w-2xl mx-auto mt-2'>
        {solution.subtitle}
      </p>

      {/* Solution Cards */}
      <div className='grid px-2 grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-7xl mx-auto'>
        {solutionItem.map((item, idx) => {
          const durations = [1000, 1400, 1800];
          const isExpanded = expandedIndex === idx;

          return (
            <div
              key={idx}
              data-aos-duration={durations[idx]}
              data-aos-delay={idx * 200}
              data-aos-easing='ease-out-cubic'
              data-aos-once='true'
              className='flex flex-col bg-white shadow-lg rounded-2xl overflow-hidden border-b-4 border-b-[#633826] hover:shadow-xl h-full transition-all duration-300'>
              {/* Image - Fixed height container */}
              <div className='relative w-full h-[250px] md:h-[300px] flex-shrink-0'>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className='object-cover'
                />
              </div>

              {/* Content - Fixed height container */}
              <div className='p-6 flex flex-col flex-1'>
                {/* Title section - Fixed height */}
                <div className='flex items-center justify-between min-h-[32px]'>
                  <h2 className='text-xl font-semibold'>{item.title}</h2>
                  <button
                    onClick={() => toggleDescription(idx)}
                    className='focus:outline-none'>
                    <TfiArrowCircleDown
                      className={`color-primary text-2xl transition-transform duration-300 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Description container - Fixed height handling */}
                <div className='relative mt-4'>
                  <div
                    className={`
                      overflow-hidden transition-all duration-500 ease-in-out
                      ${isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                    `}>
                    {item.description && (
                      <p className='text-gray-700 text-left text-base md:text-lg'>
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurSolutions;
