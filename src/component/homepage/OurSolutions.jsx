import { solution } from "@/content/Homepage/Solutions";

const OurSolutions = () => {
  return (
    <div>
      {/* heading */}

      <section className='text-center mt-8'>
        <h1 className='title-primary py-2'>{solution.title}</h1>
        <p className='color-primary max-w-200 mx-auto text-primary'>
          {solution.subtitle}
        </p>

        {/* solutio */}
      </section>
    </div>
  );
};

export default OurSolutions;
