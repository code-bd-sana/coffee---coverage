import { solution, solutionItem } from "@/content/Homepage/Solutions";
import Image from "next/image";
import { TfiArrowCircleDown } from "react-icons/tfi";

const OurSolutions = () => {
  return (
    <section className='text-center mt-12 px-4 md:px-0'>
      {/* Heading */}
      <h1 className='title-primary'>{solution.title}</h1>
      <p className='text-primary text-lg max-w-2xl mx-auto mt-2'>
        {solution.subtitle}
      </p>

      {/* Solution Cards */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-7xl mx-auto'>
        {solutionItem.map((item, idx) => (
          <div
            key={idx}
            className='flex flex-col bg-white shadow-lg rounded-2xl overflow-hidden border-b-4 border-b-[#633826] transition hover:shadow-xl'>
            {/* Image */}
            <div
              className={`relative w-full ${idx === 0 ? "h-64" : "min-h-[400px]"}`}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                className='object-cover'
              />
            </div>

            {/* Content */}
            <div className='p-6 flex flex-col flex-1'>
              <h2 className='text-xl font-semibold flex items-center justify-between'>
                {item.title}
                <TfiArrowCircleDown className='color-primary text-2xl' />
              </h2>

              {item.description && (
                <p className='text-gray-700 mt-4 text-left text-base md:text-lg flex-1'>
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurSolutions;
