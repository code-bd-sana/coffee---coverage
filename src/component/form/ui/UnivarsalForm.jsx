"use client";
import Image from "next/image";
import { useState } from "react";
import { FaRegClock } from "react-icons/fa6";
import { MdLockOutline } from "react-icons/md";
import { GoEyeClosed } from "react-icons/go";
import image1 from "../../../../public/form.jpg";
import image2 from "../../../../public/form2.jpg";
import { renderField } from "./FormRender";

const UnivarsalForm = ({ config = [] }) => {
  // Default 3 steps
  const defaultSteps = [
    { type: "welcome", image: image1 },
    { type: "info", image: image2 },
    { type: "form", image: image2 },
  ];

  // Combine default + dynamic steps
  const steps = [
    ...defaultSteps,
    ...config.map((item, index) => ({
      type: "dynamic",
      ...item,
      image: image2,
      id: `dynamic-${index}`,
    })),
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({}); // store all input values

  const goNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const goBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const stepData = steps[currentStep];

  return (
    <div className='lg:flex gap-12 min-h-screen bg-white'>
      {/* Left Section with Gradient & Image */}
      <section className='flex-1 flex justify-center items-center bg-[linear-gradient(160.09deg,#051F25_0%,#2C6573_35.1%,#479EB3_80.29%,#1A5766_100%)] p-8'>
        {stepData.image && (
          <Image
            src={stepData.image}
            alt='form image'
            className='rounded-lg object-cover w-[80%] lg:w-[600px] lg:max-h-[80vh] shadow-2xl'
            priority
          />
        )}
      </section>

      {/* Right Section */}
      <section className='flex-1 mt-12 lg:mt-0 flex flex-col justify-center px-8 lg:px-28 py-12'>
        {/* Step Content */}
        {stepData.type === "welcome" && (
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl lg:text-6xl font-bold text-[#1E1E1E] leading-tight'>
              Welcome to{" "}
              <span className='text-[#633826]'>Coffee & Coverage</span>
            </h1>
            <p className='text-[#6B6B6B] leading-snug text-2xl lg:text-3xl mt-6'>
              Protect What Matters Most Today!
            </p>
          </div>
        )}

        {stepData.type === "info" && (
          <div className='text-left space-y-6'>
            <h1 className='text-5xl lg:text-6xl font-bold text-[#1E1E1E] leading-tight'>
              Save time using our{" "}
              <span className='text-[#633826]'>Shortcut</span>
            </h1>
            <p className='text-[#6B6B6B] leading-relaxed text-xl lg:text-2xl'>
              Let's get a head start. If you have an online account with your
              current insurance, sign in so we can pre-fill what they already
              know.
            </p>

            <div className='space-y-6 mt-8'>
              <div className='flex items-center gap-4'>
                <span className='text-xl'>
                  <FaRegClock className='text-[#633826] text-5xl' />
                </span>
                <div>
                  <h6 className='text-[#32353B] text-2xl lg:text-3xl font-semibold'>
                    Quick
                  </h6>
                  <p className='text-base text-[#222222A8]'>
                    Signing in takes seconds.
                  </p>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <span className=''>
                  <MdLockOutline className='text-[#633826] text-5xl' />
                </span>
                <div>
                  <h6 className='text-[#32353B] text-2xl lg:text-3xl font-semibold'>
                    Secure
                  </h6>
                  <p className='text-base text-[#222222A8]'>
                    Your information is encrypted end-to-end.
                  </p>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <span className='text-xl'>
                  <GoEyeClosed className='text-[#633826] text-5xl' />
                </span>
                <div>
                  <h6 className='text-[#32353B] text-2xl lg:text-3xl font-semibold'>
                    Private
                  </h6>
                  <p className='text-base text-[#222222A8]'>
                    We won't store or use your credentials for anything else.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {stepData.type === "form" && (
          <div className='space-y-6'>
            <h1 className='text-4xl lg:text-5xl font-bold text-[#1E1E1E] mb-8'>
              Your Info
            </h1>
            <input
              type='text'
              placeholder='First Name'
              className='w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#633826] transition-colors'
            />
            <input
              type='text'
              placeholder='Last Name'
              className='w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#633826] transition-colors'
            />
            <input
              type='text'
              placeholder='Company'
              className='w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#633826] transition-colors'
            />
          </div>
        )}

        {stepData.type === "dynamic" && (
          <div className='space-y-6'>
            <h1 className='text-4xl lg:text-5xl font-bold text-[#1E1E1E] mb-4'>
              {stepData.title}
            </h1>
            {stepData.description && (
              <p className='text-[#6B6B6B] text-lg lg:text-xl mb-6'>
                {stepData.description}
              </p>
            )}

            <div className='space-y-4'>
              {stepData.fields &&
                stepData.fields.map((field, index) => (
                  <div key={field.name || index} className='mb-4'>
                    {field.label && (
                      <label className='block text-gray-700 font-medium mb-2'>
                        {field.label}
                      </label>
                    )}
                    {renderField(field)}
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className='flex justify-between mt-10'>
          {currentStep > 0 && (
            <button
              onClick={goBack}
              className='px-8 py-3 border-2 border-[#633826] text-[#633826] font-semibold rounded-lg hover:bg-[#633826] hover:text-white transition-all duration-300'>
              Back
            </button>
          )}
          {currentStep < steps.length - 1 && (
            <button
              onClick={goNext}
              className='px-8 py-3 bg-[#633826] text-white font-semibold rounded-lg hover:bg-[#7a4a2e] transition-all duration-300 ml-auto'>
              Next
            </button>
          )}
        </div>

        {/* Progress Bar */}
        <div className='mt-8 h-2 w-full bg-gray-200 rounded-full overflow-hidden'>
          <div
            className='h-full rounded-full transition-all duration-500 ease-in-out'
            style={{
              width: `${((currentStep + 1) / steps.length) * 100}%`,
              backgroundColor: "#633826",
            }}
          />
        </div>

        {/* Step Indicator */}
        <div className='mt-4 text-center text-gray-500'>
          Step {currentStep + 1} of {steps.length}
        </div>
      </section>
    </div>
  );
};

export default UnivarsalForm;
