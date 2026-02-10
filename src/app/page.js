import AgentReview from "@/component/homepage/AgentReview";
import Banner from "@/component/homepage/Banner";
import Faq from "@/component/homepage/Faq";
import OurSolutions from "@/component/homepage/OurSolutions";
import Planet from "@/component/homepage/Planet";
import Plans from "@/component/homepage/Plans";
import Testimonials from "@/component/homepage/Testimonials";

export default function Home() {
  return (
    <div className=''>
      {/* <Navbar /> */}
      <Banner />
      <OurSolutions />
      <Plans />
      <Planet />
      <AgentReview />
      <Testimonials />
      <Faq />
    </div>
  );
}
