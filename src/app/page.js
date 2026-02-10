import Banner from "@/component/homepage/Banner";
import OurSolutions from "@/component/homepage/OurSolutions";
import Planet from "@/component/homepage/Planet";
import Plans from "@/component/homepage/Plans";

export default function Home() {
  return (
    <div className=''>
      {/* <Navbar /> */}
      <Banner />
      <OurSolutions />
      <Plans />
      <Planet />
    </div>
  );
}
