import Link from "next/link";
import {
  FiHome,
  FiShield,
  FiSettings,
  FiFileText,
} from "react-icons/fi";
import { GiFlame } from "react-icons/gi";

export const navbar = [
  {
    name: "Individual & Families",
    link: "/",
    submenu: [
      {
        name: "Property",
        link: "/",
        content: (
          <div className="w-full  px-4 py-10">
            
            {/* Insurance Types */}
            <div className="space-y-5">
              <h3 className="text-[20px] font-medium text-[#2B2B2B]">
                Homeowners Insurance
              </h3>
              <h3 className="text-[20px] font-medium text-[#2B2B2B]">
                Condos & Co-ops
              </h3>
              <h3 className="text-[20px] font-medium text-[#2B2B2B]">
                Renters Insurance
              </h3>
            </div>

            {/* Coverage Section */}
            <div className="mt-12">
              <h4 className="text-[20px] font-semibold text-[#1E1E1E] mb-7">
                Coverage & Features
              </h4>

              <div className="grid grid-cols-2 gap-y-7 gap-x-20 text-[15px] text-[#3A3A3A]">
                
                <div className="flex items-center gap-3">
                  <FiHome className="text-[#9C6B4F] text-[18px]" />
                  Property Protection
                </div>

                <div className="flex items-center gap-3">
                  <FiShield className="text-[#9C6B4F] text-[18px]" />
                  Liability Coverage
                </div>

                <div className="flex items-center gap-3">
                  <GiFlame className="text-[#9C6B4F] text-[18px]" />
                  Fire & Natural Damage
                </div>

                <div className="flex items-center gap-3">
                  <FiSettings className="text-[#9C6B4F] text-[18px]" />
                  Easy Claims Management
                </div>

                <div className="flex items-center gap-3">
                  <FiFileText className="text-[#9C6B4F] text-[18px]" />
                  Personal Belongings
                </div>

              </div>
            </div>

            {/* CTA */}
            <div className="mt-14">
              <Link
                href="/"
                className="group inline-flex items-center gap-3 border-b border-black text-[16px] font-medium text-[#2B2B2B] pb-1"
              >
                Start Your Journey Now
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        ),
      },

      {
        name: "Auto",
        link: "/",
        content: (
         <div className="w-full  px-4 py-10">
            
            {/* Insurance Types */}
            <div className="space-y-5">
              <h3 className="text-[20px] font-medium text-[#2B2B2B]">
  Car Insurance
              </h3>
              <h3 className="text-[20px] font-medium text-[#2B2B2B]">
       Classic Cars 
              </h3>
            
            </div>

            {/* Coverage Section */}
            <div className="mt-12">
              <h4 className="text-[20px] font-semibold text-[#1E1E1E] mb-7">
                Coverage & Features
              </h4>

              <div className="grid grid-cols-2 gap-y-7 gap-x-20 text-[15px] text-[#3A3A3A]">
                
                <div className="flex items-center gap-3">
                  <FiHome className="text-[#9C6B4F] text-[18px]" />
             Vehicle Damage Coverage
                </div>

                <div className="flex items-center gap-3">
                  <FiShield className="text-[#9C6B4F] text-[18px]" />
         Driver & Passenger Safety
                </div>

                <div className="flex items-center gap-3">
                  <GiFlame className="text-[#9C6B4F] text-[18px]" />
Repair & Maintenance Support
                </div>

                <div className="flex items-center gap-3">
                  <FiSettings className="text-[#9C6B4F] text-[18px]" />
          Third-Party Liability
                </div>

                <div className="flex items-center gap-3">
                  <FiFileText className="text-[#9C6B4F] text-[18px]" />
               Digital Policy Management
                </div>

              </div>
            </div>

            {/* CTA */}
            <div className="mt-14">
              <Link
                href="/"
                className="group inline-flex items-center gap-3 border-b border-black text-[16px] font-medium text-[#2B2B2B] pb-1"
              >
                Start Your Journey Now
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        ),
      },

      {
        name: "Boat",
        link: "/",
        content: (
        <div className="w-full  px-4 py-10">
            
            {/* Insurance Types */}
            <div className="space-y-5">
              <h3 className="text-[20px] font-medium text-[#2B2B2B]">
             Boat
              </h3>
              <h3 className="text-[20px] font-medium text-[#2B2B2B]">
         Yachts
              </h3>
            
            </div>

            {/* Coverage Section */}
            <div className="mt-12">
              <h4 className="text-[20px] font-semibold text-[#1E1E1E] mb-7">
                Coverage & Features
              </h4>

              <div className="grid grid-cols-2 gap-y-7 gap-x-20 text-[15px] text-[#3A3A3A]">
                
                <div className="flex items-center gap-3">
                  <FiHome className="text-[#9C6B4F] text-[18px]" />
       Boat & Equipment Coverage
                </div>

                <div className="flex items-center gap-3">
                  <FiShield className="text-[#9C6B4F] text-[18px]" />
   Water Accident Protection
                </div>

                <div className="flex items-center gap-3">
                  <GiFlame className="text-[#9C6B4F] text-[18px]" />
   Theft & Vandalism
                </div>

                <div className="flex items-center gap-3">
                  <FiSettings className="text-[#9C6B4F] text-[18px]" />
     Liability at Sea
                </div>

                <div className="flex items-center gap-3">
                  <FiFileText className="text-[#9C6B4F] text-[18px]" />
Worldwide Navigation Options          
                </div>

              </div>
            </div>

            {/* CTA */}
            <div className="mt-14">
              <Link
                href="/"
                className="group inline-flex items-center gap-3 border-b border-black text-[16px] font-medium text-[#2B2B2B] pb-1"
              >
                Start Your Journey Now
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div> 
        ),
      },

      // {
      //   name: "Health",
      //   link: "/",
      //   content: (
      //     <div className="w-full bg-[#F2F2F2] px-12 py-10">
      //       <h3 className="text-xl font-semibold">Health Insurance</h3>
      //     </div>
      //   ),
      // },
    ],
  },

  { 
    name: "Business",
    link: "/",
  },
  {
    name: "Agent",
    link: "/",
  },
  {
    name: "Embedded Insurance",
    link: "/",
  },
];
