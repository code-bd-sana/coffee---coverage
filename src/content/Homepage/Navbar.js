import Link from "next/link";
import { FiFileText, FiHome, FiSettings, FiShield } from "react-icons/fi";
import { GiFlame } from "react-icons/gi";
import { GoCheckbox } from "react-icons/go";

export const navbar = [
  {
    name: "Individual & Families",
    link: "/",
    submenu: [
      {
        name: "Property Insurance",
        link: "/",
        content: (
          <div className='w-full  px-4 py-10'>
            {/* Insurance Types */}
            <div className='space-y-5'>
              <h3 className='text-[20px] font-medium text-[#2B2B2B]'>
                Unit Protection
              </h3>
              <h3 className='text-[20px] font-medium text-[#2B2B2B]'>
                Condos & Co-ops
              </h3>
              <h3 className='text-[20px] font-medium text-[#2B2B2B]'>
                Renters Insurance
              </h3>
            </div>

            {/* Coverage Section */}
            <div className='mt-12'>
              <h4 className='text-[20px] font-semibold text-[#1E1E1E] mb-7'>
                Coverage & Features
              </h4>

              <div className='grid grid-cols-2 gap-y-7 gap-x-20 text-[15px] text-[#3A3A3A]'>
                <div className='flex items-center gap-3'>
                  <GoCheckbox className='text-[#633826] text-[18px]' />
                  Property Protection
                </div>

                <div className='flex items-center gap-3'>
                  <GoCheckbox className='text-[#633826] text-[18px]' />
                  Liability Coverage
                </div>

                <div className='flex items-center gap-3'>
                  <GoCheckbox className='text-[#633826] text-[18px]' />
                  Fire & Natural Damage
                </div>

                <div className='flex items-center gap-3'>
                  <GoCheckbox className='text-[#633826] text-[18px]' />
                  Easy Claims Management
                </div>

                <div className='flex items-center gap-3'>
                  <GoCheckbox className='text-[#633826] text-[18px]' />
                  Personal Belongings
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className='mt-14'>
              <Link
                href='/'
                className='group inline-flex items-center gap-3 border-b border-black text-[16px] font-medium text-[#2B2B2B] pb-1'>
                Start Your Journey Now
                <span className='transition-transform duration-300 group-hover:translate-x-1'>
                  →
                </span>
              </Link>
            </div>
          </div>
        ),
      },

      {
        name: "Auto Insurance",
        link: "/",
        content: (
          <div className='w-full  px-4 py-10'>
            {/* Insurance Types */}
            <div className='space-y-5'>
              <h3 className='text-[20px] font-medium text-[#2B2B2B]'>
                Car Insurance
              </h3>
              <h3 className='text-[20px] font-medium text-[#2B2B2B]'>
                Classic Cars
              </h3>
            </div>

            {/* Coverage Section */}
            <div className='mt-12'>
              <h4 className='text-[20px] font-semibold text-[#1E1E1E] mb-7'>
                Coverage & Features
              </h4>

              <div className='grid grid-cols-2 gap-y-7 gap-x-20 text-[15px] text-[#3A3A3A]'>
                <div className='flex items-center gap-3'>
                  <GoCheckbox className='text-[#9C6B4F] text-[18px]' />
                  Vehicle Damage Coverage
                </div>

                <div className='flex items-center gap-3'>
                  <GoCheckbox className='text-[#9C6B4F] text-[18px]' />
                  Driver & Passenger Safety
                </div>

                <div className='flex items-center gap-3'>
                  <GoCheckbox className='text-[#9C6B4F] text-[18px]' />
                  Repair & Maintenance Support
                </div>

                <div className='flex items-center gap-3'>
                  <GoCheckbox className='text-[#9C6B4F] text-[18px]' />
                  Third-Party Liability
                </div>

                <div className='flex items-center gap-3'>
                  <GoCheckbox className='text-[#9C6B4F] text-[18px]' />
                  Digital Policy Management
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className='mt-14'>
              <Link
                href='/'
                className='group inline-flex items-center gap-3 border-b border-black text-[16px] font-medium text-[#2B2B2B] pb-1'>
                Start Your Journey Now
                <span className='transition-transform duration-300 group-hover:translate-x-1'>
                  →
                </span>
              </Link>
            </div>
          </div>
        ),
      },

      {
        name: "Boat Insurance",
        link: "/",
        content: (
          <div className='w-full  px-4 py-10'>
            {/* Insurance Types */}
            <div className='space-y-5'>
              <h3 className='text-[20px] font-medium text-[#2B2B2B]'>Boat</h3>
              <h3 className='text-[20px] font-medium text-[#2B2B2B]'>Yachts</h3>
            </div>

            {/* Coverage Section */}
            <div className='mt-12'>
              <h4 className='text-[20px] font-semibold text-[#1E1E1E] mb-7'>
                Coverage & Features
              </h4>

              <div className='grid grid-cols-2 gap-y-7 gap-x-20 text-[15px] text-[#3A3A3A]'>
                <div className='flex items-center gap-3'>
                  <GoCheckbox className='text-[#9C6B4F] text-[18px]' />
                  Boat & Equipment Coverage
                </div>

                <div className='flex items-center gap-3'>
                  <GoCheckbox className='text-[#9C6B4F] text-[18px]' />
                  Water Accident Protection
                </div>

                <div className='flex items-center gap-3'>
                  <GoCheckbox className='text-[#9C6B4F] text-[18px]' />
                  Theft & Vandalism
                </div>

                <div className='flex items-center gap-3'>
                  <GoCheckbox className='text-[#9C6B4F] text-[18px]' />
                  Liability at Sea
                </div>

                <div className='flex items-center gap-3'>
                  <GoCheckbox className='text-[#9C6B4F] text-[18px]' />
                  Worldwide Navigation Options
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className='mt-14'>
              <Link
                href='/'
                className='group inline-flex items-center gap-3 border-b border-black text-[16px] font-medium text-[#2B2B2B] pb-1'>
                Start Your Journey Now
                <span className='transition-transform duration-300 group-hover:translate-x-1'>
                  →
                </span>
              </Link>
            </div>
          </div>
        ),
      },
      {
        name: "Condos/Co-Ops",
        link: "/",
        content: (
          <div className='w-full  px-4 py-10'>
            {/* Insurance Types */}
            <div className='space-y-5'>
              <h3 className='text-[20px] font-medium text-[#2B2B2B]'>
                Unit Protection
              </h3>
              <h3 className='text-[20px] font-medium text-[#2B2B2B]'>
                Interior Coverage
              </h3>
            </div>

            {/* Coverage Section */}
            <div className='mt-12'>
              <h4 className='text-[20px] font-semibold text-[#1E1E1E] mb-7'>
                Coverage & Features
              </h4>

              <div className='grid grid-cols-2 gap-y-7 gap-x-20 text-[15px] text-[#3A3A3A]'>
                <div className='flex items-center gap-3'>
                  <GoCheckbox className='text-[#9C6B4F] text-[18px]' />
                  Directors & Officers Liability
                </div>

                <div className='flex items-center gap-3'>
                  <GoCheckbox className='text-[#9C6B4F] text-[18px]' />
                  Common Area Coverage
                </div>

                <div className='flex items-center gap-3'>
                  <GoCheckbox className='text-[#9C6B4F] text-[18px]' />
                  Property Damage Coverage
                </div>
                <div className='flex items-center gap-3'>
                  <GoCheckbox className='text-[#9C6B4F] text-[18px]' />
                  Equipment Coverage
                </div>

                <div className='flex items-center gap-3'>
                  <GoCheckbox className='text-[#9C6B4F] text-[18px]' />
                  Loss Assessment Protection
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className='mt-14'>
              <Link
                href='/'
                className='group inline-flex items-center gap-3 border-b border-black text-[16px] font-medium text-[#2B2B2B] pb-1'>
                Start Your Journey Now
                <span className='transition-transform duration-300 group-hover:translate-x-1'>
                  →
                </span>
              </Link>
            </div>
          </div>
        ),
      },
      {
        name: "Renters Insurance",
        link: "/",
        content: (
          <div className='w-full  px-4 py-10'>
            {/* Insurance Types */}
            <div className='space-y-5'>
              <h3 className='text-[20px] font-medium text-[#2B2B2B]'>
                Tenant Protection
              </h3>
              <h3 className='text-[20px] font-medium text-[#2B2B2B]'>
                Property Coverage
              </h3>
            </div>

            {/* Coverage Section */}
            <div className='mt-12'>
              <h4 className='text-[20px] font-semibold text-[#1E1E1E] mb-7'>
                Coverage & Features
              </h4>

              <div className='grid grid-cols-2 gap-y-7 gap-x-20 text-[15px] text-[#3A3A3A]'>
                <div className='flex items-center gap-3'>
                  <GoCheckbox className='text-[#9C6B4F] text-[18px]' />
                  Personal Property Protection
                </div>
                <div className='flex items-center gap-3'>
                  <GoCheckbox className='text-[#9C6B4F] text-[18px]' />
                  Fire & Theft Coverage
                </div>

                <div className='flex items-center gap-3'>
                  <GoCheckbox className='text-[#9C6B4F] text-[18px]' />
                  Additional Living Expenses
                </div>

                <div className='flex items-center gap-3'>
                  <GoCheckbox className='text-[#9C6B4F] text-[18px]' />
                  Liability Coverage
                </div>
                <div className='flex items-center gap-3'>
                  <GoCheckbox className='text-[#9C6B4F] text-[18px]' />
                  Fire & Theft Coverage
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className='mt-14'>
              <Link
                href='/'
                className='group inline-flex items-center gap-3 border-b border-black text-[16px] font-medium text-[#2B2B2B] pb-1'>
                Start Your Journey Now
                <span className='transition-transform duration-300 group-hover:translate-x-1'>
                  →
                </span>
              </Link>
            </div>
          </div>
        ),
      },
      {
        name: "Life Insurance",
        link: "/",
        content: (
          <div className='w-full  px-4 py-10'>
            {/* Insurance Types */}
            <div className='space-y-5'>
              <h3 className='text-[20px] font-medium text-[#2B2B2B]'>
                Family Security
              </h3>
              <h3 className='text-[20px] font-medium text-[#2B2B2B]'>
                Income Protection
              </h3>
              <h3 className='text-[20px] font-medium text-[#2B2B2B]'>
                Future Planning
              </h3>
            </div>

            {/* Coverage Section */}
            <div className='mt-12'>
              <h4 className='text-[20px] font-semibold text-[#1E1E1E] mb-7'>
                Coverage & Features
              </h4>

              <div className='grid grid-cols-2 gap-y-7 gap-x-20 text-[15px] text-[#3A3A3A]'>
                <div className='flex items-center gap-3'>
                  <GoCheckbox className='text-[#9C6B4F] text-[18px]' />
                  Whole Life Coverage
                </div>
                <div className='flex items-center gap-3'>
                  <GoCheckbox className='text-[#9C6B4F] text-[18px]' />
                  Term Life Coverage
                </div>

                <div className='flex items-center gap-3'>
                  <GoCheckbox className='text-[#9C6B4F] text-[18px]' />
                  Accidental Death Benefits
                </div>

                <div className='flex items-center gap-3'>
                  <GoCheckbox className='text-[#9C6B4F] text-[18px]' />
                  Estate & Legacy Planning
                </div>
                <div className='flex items-center gap-3'>
                  <GoCheckbox className='text-[#9C6B4F] text-[18px]' />
                  Income Replacement
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className='mt-14'>
              <Link
                href='/'
                className='group inline-flex items-center gap-3 border-b border-black text-[16px] font-medium text-[#2B2B2B] pb-1'>
                Start Your Journey Now
                <span className='transition-transform duration-300 group-hover:translate-x-1'>
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
