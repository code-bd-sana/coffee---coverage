import { reviewItem, testimonials } from "@/content/Homepage/Testimonials";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className='py-16'>
      {/* Title */}
      <div className='p-6 text-center mx-auto'>
        <h2 className='title-secondary text-center font-semibold'>
          {testimonials.title}
        </h2>

        <p className='color-secondary max-w-[600px] mx-auto text-center mt-4 text-base md:text-lg'>
          {testimonials.description}
        </p>
      </div>

      {/* Cards Container */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-20'>
        {reviewItem.map((r, i) => (
          <div
            key={i}
            className='bg-white rounded-xl shadow-md p-6 border border-gray-100'>
            {/* Star Review */}
            <div className='flex mb-4'>
              {Array.from({ length: r.star }).map((_, i) => (
                <span key={i} className='text-yellow-400 text-xl'>
                  ★
                </span>
              ))}
            </div>

            {/* Review Text */}
            <p className='text-gray-700 text-sm leading-relaxed mb-6'>
              {r.review}
            </p>

            {/* Author */}
            <div className='flex items-center gap-3'>
              <div className='w-12 h-12 rounded-full overflow-hidden'>
                <Image
                  src={r.image}
                  alt={r.authorName}
                  className='object-cover w-full h-full'
                />
              </div>

              <div>
                <h4 className='font-semibold text-gray-900'>{r.authorName}</h4>
                <p className='text-gray-500 text-sm'>
                  {r.position}, {r.cumpany}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
