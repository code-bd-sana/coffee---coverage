import Banner from "@/component/homepage/Banner";
import OurSolutions from "@/component/homepage/OurSolutions";
import Plans from "@/component/homepage/Plans";

export default function Home() {
  return (
    <div className=''>
      {/* <Navbar /> */}
      <Banner />
      <OurSolutions />
      <Plans />
    </div>
  );
}
