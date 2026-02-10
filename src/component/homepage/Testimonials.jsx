import { testimonials } from "@/content/Homepage/Testimonials";

const Testimonials = () => {
  return (
    <div>
      <div className='p-6  text-center mx-auto '>
        <h2 className='title-secondary text-center font-semibold'>
          {testimonials.title}
        </h2>

        <p className='color-secondary max-w-[600px] mx-auto  text-center  mt-4  text-base md:text-lg '>
          {testimonials.description}
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
