import { agent } from "@/content/Homepage/Agent";
import Image from "next/image";

const AgentReview = () => {
  return (
    <div className='lg:flex max-w-7xl lg:px-16 px-4 py-16 items-center gap-8  mx-auto'>
      <section className=''>
        <Image src={agent.image} alt={agent.title} className='rounded-2xl' />
      </section>

      <section className='mt-8 lg:mt-0'>
        <p className='color-gray font-semibold'>Your Agent</p>
        <h1  data-aos="fade-right" className='title-primary leading-tight'>
          Exceptional Service,{" "}
          <span className='color-lead'>Every Time</span>{" "}
        </h1>

        <p data-aos="fade-up"
     data-aos-duration="2000" className='color-gray italic mt-4'>{agent.review}</p>
      </section>
    </div>
  );
};

export default AgentReview;
