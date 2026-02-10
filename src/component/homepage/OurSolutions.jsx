import { solution } from "@/content/Homepage/Solutions";

const OurSolutions = () => {
  return (
    <div>
      {/* heading */}

      <section>
        <h1>{solution.title}</h1>
        <p>{solution.subtitle}</p>
      </section>
    </div>
  );
};

export default OurSolutions;
