import { agent } from "@/content/Homepage/Agent";
import Image from "next/image";

const AgentReview = () => {
  return (
    <div className='flex max-w-7xl px-16 py-16 items-center gap-8  mx-auto'>
      <section className=''>
        <Image src={agent.image} alt={agent.title} className='rounded-2xl' />
      </section>

      <section className=''>
        <p className='color-gray font-semibold'>Your Agent</p>
        <h1 className='title-primary leading-tight'>
          Exceptional Service,{" "}
          <span className='color-lead'>Every Time</span>{" "}
        </h1>

        <p className='color-gray italic mt-4'>{agent.review}</p>
      </section>
    </div>
  );
};

export default AgentReview;
