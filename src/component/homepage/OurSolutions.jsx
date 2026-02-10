import { solution, solutionItem } from "@/content/Homepage/Solutions";
import Image from "next/image";

const OurSolutions = () => {
  return (
    <div>
      {/* heading */}

      <section className='text-center mt-8'>
        <h1 className='title-primary py-2'>{solution.title}</h1>
        <p className='color-primary max-w-200 mx-auto text-primary'>
          {solution.subtitle}
        </p>

        {/* solution Card */}

        {solutionItem.map((item, idx) => (
          <div key={idx + 1}>
            <Image src={item.image} alt={item.title} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default OurSolutions;
